// 대전 시뮬레이션 — 60fps 고정 프레임. 브라우저 없이(Node) 돌아감.
// step(inputs) 한 번 = 1프레임. inputs[i] = FrameInput | null
//   FrameInput = { mx, my, guard, gp(가드 누른 순간), roll(회피 누른 순간), btns:[{b:'t'|'h'|'u'|'d'|'l'(긋기), dir:'n'|'f'|'b'|'s', a:긋기 각도}],
//                  ougi(오의 버튼 누른 순간), score(오의 문양 그리기 점수 0~100, 다 그렸을 때 한 번) }
import { DT, MAXHP, ARENA_R, seeded } from './util.js';
import { Fighter } from './fighter.js';
import { tryHit, applyHit } from './combat.js';
import { MV } from './moves.js';

const newInputState = () => ({ mx: 0, my: 0, guard: false, guardPressed: false, rollPressed: -99, ougiPressed: -99, score: -1, buf: [] });
const EMPTY = () => newInputState();

// 오의 시네마틱: 문양 그리는 시간(프레임), 그 뒤 연출 시간, 피해량
export const OUGI = { draw: 150, strike: 54, dmgMin: 16, dmgMax: 34, autoScore: 35 };
export const NEUTRAL = Object.freeze({ mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [] });

export const ROUND_TIME = 60;
export const WINS_NEEDED = 2; // 3판 2선승

export class Sim {
  // mode: 'match' | 'practice' | 'demo'
  constructor({ mode = 'match', seed = 1 } = {}) {
    this.mode = mode; this.seed = seed;
    this.rng = seeded(seed);
    this.frame = 0; this.uid = 0; this.hitstop = 0;
    this.round = 1; this.wins = [0, 0]; this.timer = ROUND_TIME;
    this.phase = 'intro'; this.phaseT = 0; this.winner = -1; this.roundSeq = 0; this.cine = null;
    this.f = [new Fighter(0, this), new Fighter(1, this)];
    this.ins = [newInputState(), newInputState()];
    this.events = [];
    this.listeners = [];
    this.startRound();
  }
  emit(e) { e.frame = this.frame; this.events.push(e); for (const l of this.listeners) l(e); }
  on(fn) { this.listeners.push(fn); return () => { this.listeners = this.listeners.filter((x) => x !== fn); }; }
  drainEvents() { const e = this.events; this.events = []; return e; }
  get over() { return this.phase === 'over'; }
  live() { return this.phase === 'fight'; }

  startRound() {
    const [a, b] = this.f;
    a.reset(0, -2.4, 0); b.reset(0, 2.4, Math.PI);
    this.timer = ROUND_TIME; this.phase = this.mode === 'demo' ? 'fight' : 'intro'; this.phaseT = 0;
    this.winner = -1; this.hitstop = 0; this.roundSeq++; this.cine = null;
    for (const s of this.ins) s.buf.length = 0;
    this.emit({ t: 'round', round: this.round });
  }

  ingest(st, fi, live) {
    if (!fi) return;
    if (fi.gp) st.guardPressed = true;
    if (fi.roll) st.rollPressed = this.frame;
    if (fi.ougi) st.ougiPressed = this.frame;
    if (fi.score !== undefined && fi.score !== null && fi.score >= 0) st.score = Math.max(0, Math.min(100, Math.round(fi.score)));
    st.mx = fi.mx || 0; st.my = fi.my || 0; st.guard = !!fi.guard;
    if (live && fi.btns) for (const p of fi.btns) { st.buf.push({ b: p.b, dir: p.dir, a: p.a || 0, t: this.frame }); if (st.buf.length > 4) st.buf.shift(); }
  }

  // 반환값: 실제로 진행됐으면 true (히트스톱 중이면 false)
  step(inputs = [null, null]) {
    this.frame++;
    const live = this.phase === 'fight';
    this.ingest(this.ins[0], inputs[0], live);
    this.ingest(this.ins[1], inputs[1], live);
    if (!live) { this.ins[0].buf.length = 0; this.ins[1].buf.length = 0; }
    if (this.hitstop > 0) { this.hitstop--; return false; }
    if (this.cine) { this.stepCine(); return true; }
    const [A, B] = this.f;
    if (this.phase === 'over') { A.update(EMPTY(), B); B.update(EMPTY(), A); this.sep(); return true; }
    const i0 = live ? this.ins[0] : EMPTY(), i1 = live ? this.ins[1] : EMPTY();
    A.update(i0, B); B.update(i1, A);
    this.ins[0].guardPressed = false; this.ins[1].guardPressed = false;
    if (live) {
      const r1 = tryHit(this, A, B), r2 = tryHit(this, B, A); // 동시 판정(상쇄 히트 허용)
      if (r1) applyHit(this, A, B, r1);
      if (r2) applyHit(this, B, A, r2);
    }
    this.sep();
    this.rounds();
    return true;
  }

  // 캐릭터 원소 (오의 마무리 위치에만 영향 — 온라인에서는 양쪽이 같은 값을 씀)
  setStyles(styles) { styles.forEach((st, i) => { this.f[i].style = st; }); }

  // ---------- 오의 시네마틱 ----------
  startCine(A, D) {
    this.cine = { a: A.idx, d: D.idx, f: 0, score: -1, strikeF: -1 };
    this.ins[A.idx].score = -1;
    A.state = 'ougiCast'; A.f = 0; A.vx = A.vz = 0;
    D.state = 'ougiHeld'; D.f = 0; D.vx = D.vz = 0; D.guard = false; D.crouch = false; D.move = null; D.y = 0; D.vy = 0;
    // 서로 마주보게
    const dx = D.x - A.x, dz = D.z - A.z;
    A.yaw = Math.atan2(dx, dz); D.yaw = Math.atan2(-dx, -dz);
    this.emit({ t: 'ougiStart', a: A.idx, d: D.idx });
  }
  stepCine() {
    const c = this.cine, A = this.f[c.a], D = this.f[c.d];
    c.f++; A.f++; D.f++;
    if (c.strikeF < 0) {
      const sc = this.ins[c.a].score;
      if (sc >= 0 || c.f >= OUGI.draw) {
        c.score = sc >= 0 ? sc : OUGI.autoScore;
        c.strikeF = c.f; A.state = 'ougiStrike'; A.f = 0;
        this.emit({ t: 'ougiStrike', a: c.a, d: c.d, score: c.score });
      }
      return;
    }
    if (c.f - c.strikeF >= OUGI.strike) {
      const dmg = OUGI.dmgMin + (OUGI.dmgMax - OUGI.dmgMin) * (c.score / 100);
      D.hp = Math.max(0, D.hp - dmg);
      let nx = D.x - A.x, nz = D.z - A.z; const l = Math.hypot(nx, nz) || 1; nx /= l; nz /= l;
      D.state = 'launched'; D.f = 0; D.y = 0.02; D.vy = 6.5; D.juggle = 3; D.vx = nx * 4.5; D.vz = nz * 4.5; D.launchUid = ++this.uid;
      if (A.style === 'thunder') { // 발도술: 상대를 꿰뚫고 반대편에 서 있음, 상대는 그 자리에 쓰러짐
        A.x = D.x + nx * 1.6; A.z = D.z + nz * 1.6; A.yaw = Math.atan2(-nx, -nz);
        D.vx = -nx * 0.6; D.vz = -nz * 0.6; D.vy = 4.2;
      } else if (A.style === 'wind') { D.vy = 8.5; D.vx = nx * 2.5; D.vz = nz * 2.5; } // 회오리: 높이 띄움
      else if (A.style === 'fire') { D.vy = 3.5; D.vx = nx * 6; D.vz = nz * 6; }      // 내려찍기: 멀리 튕겨냄
      A.state = 'ougiEnd'; A.f = 0;
      this.cine = null;
      this.hitstop = 14;
      this.emit({ t: 'ougiHit', a: c.a, d: c.d, score: c.score, dmg, ko: D.hp <= 0 });
    }
  }

  // ---------- 상태 저장/복원 (온라인 동기화·리플레이용) ----------
  serialize() {
    const f = this.f.map((F) => {
      const o = {};
      for (const k in F) if (k !== 'sim') o[k] = k === 'move' ? (F.move ? F.move.id : null) : F[k];
      return o;
    });
    return JSON.parse(JSON.stringify({
      frame: this.frame, uid: this.uid, hitstop: this.hitstop, round: this.round, wins: this.wins, timer: this.timer,
      phase: this.phase, phaseT: this.phaseT, winner: this.winner, roundSeq: this.roundSeq, rng: this.rng.getState(),
      cine: this.cine || null, ins: this.ins, f,
    }));
  }
  load(s) {
    for (const k of ['frame', 'uid', 'hitstop', 'round', 'timer', 'phase', 'phaseT', 'winner', 'roundSeq']) this[k] = s[k];
    this.wins = s.wins.slice(); this.rng.setState(s.rng); this.cine = s.cine ? { ...s.cine } : null;
    this.ins = JSON.parse(JSON.stringify(s.ins));
    s.f.forEach((o, i) => { const F = this.f[i]; Object.assign(F, JSON.parse(JSON.stringify(o))); F.move = o.move ? MV[o.move] : null; F.sim = this; });
  }
  // 상태 지문 (두 기기가 같은 상태인지 비교)
  hash() {
    const str = JSON.stringify(this.serialize());
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  rounds() {
    const F = this.f;
    if (this.phase === 'intro') {
      this.phaseT++;
      if (this.phaseT === 60) this.emit({ t: 'fight' });
      if (this.phaseT >= 84) this.phase = 'fight';
    } else if (this.phase === 'fight') {
      if (this.mode === 'practice') { for (const f of F) if (f.state === 'idle' && f.idleF > 50 && f.hp < MAXHP) f.hp = MAXHP; }
      else this.timer = Math.max(0, this.timer - DT);
      const d0 = F[0].hp <= 0, d1 = F[1].hp <= 0;
      if (d0 || d1 || this.timer <= 0) {
        let w = -1;
        if (d0 && !d1) w = 1; else if (d1 && !d0) w = 0;
        else if (!d0 && !d1) { const a = F[0].hp, b = F[1].hp; w = a > b ? 0 : b > a ? 1 : -1; }
        this.phase = 'ko'; this.phaseT = 0; this.winner = w;
        if (w >= 0) this.wins[w]++;
        this.emit({ t: 'ko', winner: w, timeout: !(d0 || d1) });
      }
    } else if (this.phase === 'ko') {
      this.phaseT++;
      if (this.phaseT >= 60 && this.winner >= 0) { const W = F[this.winner]; if (W.state === 'idle') { W.state = 'win'; W.f = 0; } }
      if (this.phaseT >= 170) {
        if (this.mode === 'demo') {
          this.round++;
          if (this.wins[0] >= WINS_NEEDED || this.wins[1] >= WINS_NEEDED) this.wins = [0, 0];
          this.startRound();
        } else if (this.wins[0] >= WINS_NEEDED || this.wins[1] >= WINS_NEEDED) {
          this.phase = 'over';
          this.emit({ t: 'matchEnd', winner: this.wins[0] > this.wins[1] ? 0 : 1, wins: this.wins.slice() });
        } else { this.round++; this.startRound(); }
      }
    }
  }

  sep() {
    const [a, b] = this.f;
    const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
    if (d < 0.7 && a.y < 0.9 && b.y < 0.9 && a.state !== 'roll' && b.state !== 'roll') {
      const p = (0.7 - d) / 2, nx = d > 0.001 ? dx / d : 1, nz = d > 0.001 ? dz / d : 0;
      a.x -= nx * p; a.z -= nz * p; b.x += nx * p; b.z += nz * p;
    }
    for (const f of this.f) { const r = Math.hypot(f.x, f.z); if (r > ARENA_R) { f.x *= ARENA_R / r; f.z *= ARENA_R / r; } }
  }
}

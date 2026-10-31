// 대전 시뮬레이션 — 60fps 고정 프레임. 브라우저 없이(Node) 돌아감.
// step(inputs) 한 번 = 1프레임. inputs[i] = FrameInput | null
//   FrameInput = { mx, my, guard, gp(가드 누른 순간), roll(회피 누른 순간), btns:[{b:'1'..'4', dir:'n'|'f'|'b'|'s'}] }
import { DT, MAXHP, ARENA_R, seeded } from './util.js';
import { Fighter } from './fighter.js';
import { tryHit, applyHit } from './combat.js';

const newInputState = () => ({ mx: 0, my: 0, guard: false, guardPressed: false, rollPressed: -99, buf: [] });
const EMPTY = () => ({ mx: 0, my: 0, guard: false, guardPressed: false, rollPressed: -99, buf: [] });
export const NEUTRAL = Object.freeze({ mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [] });

export const ROUND_TIME = 60;
export const WINS_NEEDED = 2; // 3판 2선승

export class Sim {
  // mode: 'match' | 'practice' | 'demo'
  constructor({ mode = 'match', seed = 1 } = {}) {
    this.mode = mode;
    this.rng = seeded(seed);
    this.frame = 0; this.uid = 0; this.hitstop = 0;
    this.round = 1; this.wins = [0, 0]; this.timer = ROUND_TIME;
    this.phase = 'intro'; this.phaseT = 0; this.winner = -1; this.roundSeq = 0;
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
    this.winner = -1; this.hitstop = 0; this.roundSeq++;
    for (const s of this.ins) s.buf.length = 0;
    this.emit({ t: 'round', round: this.round });
  }

  ingest(st, fi, live) {
    if (!fi) return;
    if (fi.gp) st.guardPressed = true;
    if (fi.roll) st.rollPressed = this.frame;
    st.mx = fi.mx || 0; st.my = fi.my || 0; st.guard = !!fi.guard;
    if (live && fi.btns) for (const p of fi.btns) { st.buf.push({ b: p.b, dir: p.dir, t: this.frame }); if (st.buf.length > 4) st.buf.shift(); }
  }

  // 반환값: 실제로 진행됐으면 true (히트스톱 중이면 false)
  step(inputs = [null, null]) {
    this.frame++;
    const live = this.phase === 'fight';
    this.ingest(this.ins[0], inputs[0], live);
    this.ingest(this.ins[1], inputs[1], live);
    if (!live) { this.ins[0].buf.length = 0; this.ins[1].buf.length = 0; }
    if (this.hitstop > 0) { this.hitstop--; return false; }
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

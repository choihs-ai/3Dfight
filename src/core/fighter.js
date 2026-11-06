// 파이터 상태머신 — 순수 로직. 화면/사운드는 sim.emit()으로 이벤트만 보냄.
import { DT, MAXHP, clamp, turnTo } from './util.js';
import { movesOf, resolveMove } from './moves.js';
import { styleOf } from './styles.js';

// 흐름 연계: 어떤 베기든 지속 끝 +FLOW_WINDOW 프레임 안에 다음 입력이 들어오면 후딜 없이 이어짐
export const FLOW_WINDOW = 12;
export const MAX_CHAIN = 5;          // 한 번에 이어지는 최대 기술 수 (기본 — 캐릭터마다 다름: styles.js)
export const FLOW_SKIP = 0.25;       // 이어지는 기술은 준비 동작(발생)의 앞 25%를 건너뜀

// 오의: 기 게이지 꽉 차면 사용. 무적 돌진(OUGI_DASH) → 닿으면 시네마틱, 헛치면 큰 빈틈
export const KI_MAX = 100;
export const OUGI_DASH = { startup: 14, active: 8, recovery: 46, range: 2.1, arc: 1.2, speed: 0.16 };

export class Fighter {
  constructor(idx, sim) {
    this.idx = idx;
    this.sim = sim;
    this.reset(0, 0, 0);
  }
  reset(x, z, yaw) {
    Object.assign(this, {
      x, z, y: 0, vy: 0, vx: 0, vz: 0, yaw, hp: MAXHP, st: 100, stDelay: 0, exhaust: false,
      state: 'idle', f: 0, stun: 0, move: null, hitDone: false, pendingChain: null,
      guard: false, crouch: false, lastGuardPress: -99, juggle: 0, combo: 0,
      rollDir: [0, 0], rollAxis: 'x', rollSign: 1, armorOn: false, hitLevel: 'high',
      moveUid: 0, launchUid: 0, idleF: 0, moveStart: 0, chainStart: 0, chainN: 0, pendingNamed: false, gesture: 'h', swipeAng: 0,
      // 걷기 애니메이션용 정보 (wk: 0 변화없음 / 1 멈춤 / 2 앉음 / 3 걷기)
      wk: 0, wmx: 0, wmy: 0, wph: 0, ki: 0,
      // 캐릭터 고유 시스템: 열기(불) · 발도/뇌속(번개) — 이번 기술에 붙은 효과
      heat: 0, iaiF: 0, iaiReady: false, hitAt: -99, jfWin: 0, pendingJF: false, fx: '', eruptN: 0, rollCircle: 0, wasPunished: false,
    });
  }
  get S() { return styleOf(this.style); }
  get mv() { return movesOf(this.style); }
  resolve(b, d) { return resolveMove(b, d, this.style); }
  invuln() {
    const s = this.state, f = this.f;
    const ri = this.rollCircle ? [1, 24] : this.S.roll.inv;
    return (s === 'roll' && f >= ri[0] && f <= ri[1]) || s === 'down' || (s === 'getup' && f < 14) || s === 'ko' || s === 'win'
      || (s === 'ougi' && f <= OUGI_DASH.startup + OUGI_DASH.active) || s === 'ougiCast' || s === 'ougiStrike' || s === 'ougiHeld' || (s === 'ougiEnd' && f < 10);
  }
  isCrouching() { return (this.state === 'idle' || this.state === 'blockstun') && this.crouch; }
  canBlock() { return (this.state === 'idle' && this.guard) || this.state === 'blockstun'; }
  takeBuf(inp, age) {
    const b = inp.buf, fr = this.sim.frame;
    while (b.length && fr - b[0].t > age) b.shift();
    return b.length ? b.shift() : null;
  }
  useSt(v, delay) {
    this.st -= v;
    if (this.st <= 0) { this.st = 0; this.exhaust = true; }
    this.stDelay = Math.max(this.stDelay, delay);
  }
  // fx: 이번 기술에 붙는 효과 'iai'(발도) | 'jf'(뇌속 연계) | 'blaze'(작열) | ''
  startMove(id, chained = false, named = false, fx = '') {
    const m = this.mv[id], S = this.S;
    // 연속기 중이면 첫 기술 시작 시점부터 들어온 입력을 다음 연결로 인정 (빠른 연타 허용)
    this.chainStart = chained ? this.chainStart : this.sim.frame;
    this.chainN = chained ? this.chainN + 1 : 0;
    this.state = 'attack'; this.move = m; this.f = 0; this.hitDone = false; this.pendingChain = null;
    this.useSt(m.stam, 30);
    this.moveUid = ++this.sim.uid; this.moveStart = this.sim.frame;
    this.guard = false; this.crouch = false; this.armorOn = false; this.hitAt = -99; this.iaiF = 0; this.iaiReady = false;
    // 불: 불씨 3개 모이면 큰 기술이 작열
    if (!fx && S.traits.heat && this.heat >= S.traits.heat && S.traits.blaze.includes(id)) { fx = 'blaze'; this.heat = 0; }
    this.fx = fx;
    if (fx) this.sim.emit({ t: fx, i: this.idx, move: id });
    // 흐름 연계로 이어진 기술은 준비 동작 앞부분을 건너뜀 (전용 연속기는 원래 프레임 그대로)
    // 뇌속 연계는 거의 즉발, 발도 상태에서 나간 기술도 준비 동작이 짧음
    if (fx === 'jf') this.f = Math.floor(m.startup * (named ? 0.5 : 0.7));
    else if (fx === 'iai' && id !== 'iai_flash') this.f = Math.floor(m.startup * 0.4);
    else if (chained && !named) this.f = Math.floor(m.startup * S.flowSkip);
  }
  startOugi() {
    this.state = 'ougi'; this.f = 0; this.ki = 0; this.hitDone = false; this.move = null;
    this.guard = false; this.crouch = false; this.moveUid = ++this.sim.uid;
    this.sim.emit({ t: 'ougiDash', i: this.idx });
  }
  gainKi(v) { this.ki = Math.min(KI_MAX, this.ki + v); }
  // 기술 버튼 (캐릭터마다 다름) → 실제로 뭔가 했으면 true
  useSkill(inp, dx, dz) {
    const sk = this.S.skill, sim = this.sim;
    if (sk === 'erupt') { // 불: 불씨를 터뜨림
      if (this.heat < 1) { sim.emit({ t: 'skillFail', i: this.idx }); return false; }
      const n = this.heat; this.heat = 0; this.eruptN = n;
      this.startMove('f_erupt', false, false, n >= 3 ? 'blaze' : 'erupt');
      return true;
    }
    if (sk === 'mirror') { this.startMove('mirror'); return true; }
    if (sk === 'iai') { // 번개: 바로 발도 자세
      if (!this.iaiReady) { this.iaiReady = true; this.iaiF = this.S.traits.iai; sim.emit({ t: 'iaiReady', i: this.idx }); }
      return false;
    }
    if (sk === 'dash') { // 바람: 상대 옆으로 돌아 들어가는 무적 이동
      if (this.st < 10 || this.exhaust) return false;
      this.startRoll(inp, dx, dz);
      this.rollCircle = Math.abs(inp.mx) > 0.3 ? Math.sign(inp.mx) : (this.sim.frame % 2 ? 1 : -1);
      sim.emit({ t: 'windDash', i: this.idx });
      return true;
    }
    return false;
  }
  startRoll(inp, dx, dz) {
    let mx = inp.mx, my = inp.my;
    if (Math.hypot(mx, my) < 0.3) { mx = 0; my = -1; }
    const rx = -dz, rz = dx;
    const wx = dx * my + rx * mx, wz = dz * my + rz * mx;
    const l = Math.hypot(wx, wz) || 1;
    this.rollDir = [wx / l, wz / l];
    if (Math.abs(my) >= Math.abs(mx)) { this.rollAxis = 'x'; this.rollSign = my >= 0 ? 1 : -1; }
    else { this.rollAxis = 'z'; this.rollSign = mx > 0 ? 1 : -1; }
    this.state = 'roll'; this.f = 0; this.rollCircle = 0; this.useSt(this.S.roll.stam, 35); this.guard = false; this.crouch = false; this.move = null; this.iaiF = 0; this.iaiReady = false;
    this.sim.emit({ t: 'roll', i: this.idx });
  }
  update(inp, op) {
    const sim = this.sim;
    this.f++;
    this.wk = 0;
    const dx0 = op.x - this.x, dz0 = op.z - this.z, dist = Math.hypot(dx0, dz0) || 0.001;
    const dx = dx0 / dist, dz = dz0 / dist, tYaw = Math.atan2(dx, dz);
    if (inp.guardPressed) this.lastGuardPress = sim.frame;
    this.x += this.vx * DT; this.z += this.vz * DT; this.vx *= 0.84; this.vz *= 0.84;
    if (this.stDelay > 0) this.stDelay--;
    else if (this.state !== 'attack' && this.state !== 'roll') {
      this.st = Math.min(100, this.st + (this.guard ? 0.2 : 0.6));
      if (this.exhaust && this.st >= 30) this.exhaust = false;
    }
    if (this.state !== 'launched') this.juggle = 0;
    switch (this.state) {
      case 'idle': {
        this.idleF++;
        if (this.combo) this.combo = 0;
        this.guard = inp.guard && !this.exhaust;
        this.crouch = this.guard && inp.my < -0.45;
        this.yaw = turnTo(this.yaw, tYaw, 0.3);
        // 오의 (기 게이지 꽉 참)
        if (sim.frame - inp.ougiPressed <= 6 && this.ki >= KI_MAX) { inp.ougiPressed = -99; this.startOugi(); break; }
        const fresh = sim.frame - inp.rollPressed <= 6;
        if (fresh && !this.exhaust && this.st >= 10) { inp.rollPressed = -99; this.startRoll(inp, dx, dz); break; }
        // 기술 버튼
        if (sim.frame - inp.skillPressed <= 6) { inp.skillPressed = -99; if (this.useSkill(inp, dx, dz)) break; }
        // 번개 발도: 스틱을 놓고 가드 없이 가만히 있으면 칼을 넣고 기다림
        const S = this.S;
        if (S.traits.iai) {
          if (Math.hypot(inp.mx, inp.my) < 0.18 && !this.guard) {
            if (++this.iaiF === S.traits.iai) { this.iaiReady = true; sim.emit({ t: 'iaiReady', i: this.idx }); }
          } else if (this.iaiF) { this.iaiF = 0; this.iaiReady = false; }
        }
        const b = this.takeBuf(inp, 10);
        if (b) {
          let id = this.resolve(b.b, b.dir), fx = '';
          if (this.iaiReady) { fx = 'iai'; if (b.b === 't') id = 'iai_flash'; }
          this.startMove(id, false, false, fx); this.swipeAng = b.a || 0; break;
        }
        if (!this.crouch) this.walk(inp, op, dist, dx, dz);
        else this.wk = 2;
        break;
      }
      case 'attack': {
        const m = this.move, f = this.f;
        if (f < m.startup) this.yaw = turnTo(this.yaw, tYaw, m.track);
        if (f <= m.startup + m.active && dist > 0.8) {
          const s = m.lunge / (m.startup + m.active);
          this.x += Math.sin(this.yaw) * s; this.z += Math.cos(this.yaw) * s;
        }
        if (f === m.startup - 2 && !m.noHit) sim.emit({ t: 'whoosh', i: this.idx, move: m.id });
        // 헛침: 지속이 끝났는데 안 닿았으면 → 상대에게 '빈틈' 알림
        if (f === m.startup + m.active && !this.hitDone && !m.noHit) sim.emit({ t: 'whiff', i: this.idx, move: m.id, rec: m.total - f });
        this.armorOn = !!(m.armor && f >= m.armor[0] && f <= m.armor[1]);
        // 다음 입력 받기: 전용 연속기(chain) 우선, 아니면 아무 베기나 흐름 연계 (연계 구간 안에서만)
        const S = this.S;
        if (!this.pendingChain && !m.noHit && f >= 2 && f <= m.startup + m.active + FLOW_WINDOW && this.chainN < S.maxChain - 1) {
          const bb = inp.buf;
          for (let i = 0; i < bb.length; i++) {
            const e = bb[i];
            if (e.t < this.chainStart + 2) continue;
            const named = m.chain && m.chain[e.b];
            this.pendingChain = named || this.resolve(e.b, e.dir); this.pendingNamed = !!named;
            // 번개 뇌속: 맞은 순간(히트스톱 동안 + 여유)에 그었으면
            this.pendingJF = !!S.traits.jf && this.hitAt >= 0 && e.t > this.hitAt && e.t <= this.hitAt + this.jfWin;
            this.pendingAng = e.a || 0; bb.splice(i, 1); break;
          }
        }
        if (this.pendingChain && f >= m.startup + m.active + 1) { this.startMove(this.pendingChain, true, this.pendingNamed, this.pendingJF ? 'jf' : ''); this.swipeAng = this.pendingAng; break; }
        // 바람 걸음: 베기가 닿은 뒤 후딜을 구르기로 끊음
        const rc = S.traits.rollCancel;
        if (rc && this.hitDone && f > m.startup + m.active && sim.frame - inp.rollPressed <= 6 && !this.exhaust && this.st >= rc) {
          inp.rollPressed = -99; this.startRoll(inp, dx, dz); sim.emit({ t: 'windStep', i: this.idx }); break;
        }
        if (f >= m.total) { this.state = 'idle'; this.f = 0; this.move = null; this.idleF = 0; }
        break;
      }
      case 'ougi': { // 무적 돌진 → 닿으면 시네마틱
        const O = OUGI_DASH, f = this.f;
        if (f < O.startup + O.active && dist > 0.9) { this.yaw = turnTo(this.yaw, tYaw, 0.25); this.x += Math.sin(this.yaw) * O.speed; this.z += Math.cos(this.yaw) * O.speed; }
        if (f >= O.startup && f < O.startup + O.active && !this.hitDone) {
          const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
          const ang = Math.acos(Math.max(-1, Math.min(1, (dx * fx + dz * fz))));
          const okState = !op.invuln() && op.state !== 'launched';
          if (dist <= O.range && ang <= O.arc && okState) { this.hitDone = true; sim.startCine(this, op); break; }
        }
        if (f >= O.startup + O.active + O.recovery) { this.state = 'idle'; this.f = 0; this.idleF = 0; }
        break;
      }
      case 'ougiEnd':
        if (this.f >= 24) { this.state = 'idle'; this.f = 0; this.idleF = 0; }
        break;
      case 'hitstun': case 'blockstun': case 'parried':
        if (this.f >= this.stun) { this.state = 'idle'; this.f = 0; this.idleF = 0; }
        break;
      case 'launched':
        this.vy -= 18 * DT; this.y += this.vy * DT;
        if (this.y <= 0 && this.vy < 0) {
          this.y = 0; this.vy = 0; this.state = this.hp <= 0 ? 'ko' : 'down'; this.f = 0;
          sim.emit({ t: 'land', i: this.idx, x: this.x, z: this.z });
        }
        break;
      case 'down':
        if (this.hp <= 0) { this.state = 'ko'; break; }
        if (this.f >= 42 || (this.f >= 12 && sim.frame - inp.rollPressed <= 6)) { inp.rollPressed = -99; this.state = 'getup'; this.f = 0; }
        break;
      case 'getup':
        if (this.f >= 20) { this.state = 'idle'; this.f = 0; this.idleF = 0; }
        break;
      case 'roll': {
        const R = this.S.roll, p = clamp(this.f / (R.dur * 0.77), 0, 1), sp = R.speed * (this.rollCircle ? 1.2 : 1) * Math.pow(1 - p, 0.6);
        if (this.rollCircle) { // 질풍 걸음: 상대 주위를 돌며 파고듦
          let tx = -dz * this.rollCircle * 0.8 + dx * 0.35, tz = dx * this.rollCircle * 0.8 + dz * 0.35;
          if (dist < 1.1) { tx = -dz * this.rollCircle; tz = dx * this.rollCircle; }
          const l = Math.hypot(tx, tz) || 1; this.rollDir = [tx / l, tz / l];
        }
        this.x += this.rollDir[0] * sp * DT; this.z += this.rollDir[1] * sp * DT;
        // 바람 선풍: 구르는 도중 아무 베기 → 회전베기
        const ra = this.S.traits.rollAtk;
        if (ra && this.f >= ra[0] && this.f <= ra[1]) {
          const b = this.takeBuf(inp, 8);
          if (b) { this.yaw = tYaw; this.startMove('gale'); this.swipeAng = b.a || 0; sim.emit({ t: 'gale', i: this.idx }); break; }
        }
        if (this.f >= R.dur) { this.state = 'idle'; this.f = 0; this.idleF = 0; this.rollCircle = 0; }
        break;
      }
    }
    if (this.state !== 'idle') this.idleF = 0;
  }
  // 락온 이동: 위 = 상대 쪽, 좌우 = 상대 주위 원운동
  walk(inp, op, dist, dx, dz) {
    let mx = inp.mx, my = inp.my;
    const mag = Math.hypot(mx, my);
    if (mag < 0.18) { this.wk = 1; return; }
    if (mag > 1) { mx /= mag; my /= mag; }
    const w = this.S.walk, g = this.guard, fs = (g ? 1.2 : my > 0 ? 3 : 2.4) * w, ss = (g ? 1.2 : 2.7) * w;
    let rvx = this.x - op.x, rvz = this.z - op.z;
    const nd = Math.max(0.75, dist - my * fs * DT);
    rvx += -dz * mx * ss * DT; rvz += dx * mx * ss * DT;
    const l = Math.hypot(rvx, rvz) || 1;
    this.x = op.x + (rvx / l) * nd; this.z = op.z + (rvz / l) * nd;
    this.wk = 3; this.wmx = mx; this.wmy = my;
    this.wph = (Math.abs(my) * fs + Math.abs(mx) * ss) * DT * 4.2;
  }
  takeHit(A, m, counter) {
    let nx = this.x - A.x, nz = this.z - A.z;
    const d = Math.hypot(nx, nz) || 1; nx /= d; nz /= d;
    const air = this.state === 'launched';
    const AS = A.S;
    // 반격: 상대가 휘두르고 난 빈틈(후딜·패링당함)에 맞히면 1.2배 + 경직 증가
    const punish = !counter && ((this.state === 'attack' && this.move && this.f >= this.move.startup + this.move.active) || this.state === 'parried');
    this.wasPunished = punish;
    let dmg = m.dmg * (counter ? AS.counterMul : punish ? 1.2 : 1) * this.S.taken;
    if (m.id === 'f_erupt') dmg += 4 * A.eruptN;
    if (A.fx === 'blaze') dmg *= 1.4; else if (A.fx === 'jf') dmg *= 1.3; else if (A.fx === 'iai') dmg *= 1.2;
    if (A.chainN >= AS.scaleFrom && A.fx !== 'jf') dmg *= Math.max(0.5, 1 - 0.15 * (A.chainN - AS.scaleFrom + 1)); // 흐름 연계 보정 (기본 3타째부터)
    this.iaiF = 0; this.iaiReady = false;
    if (air) { this.juggle++; dmg *= Math.max(0.3, 1 - 0.15 * this.juggle); } // 공중 콤보 보정
    this.hp = Math.max(0, this.hp - dmg);
    this.guard = false; this.crouch = false; this.move = null;
    if (air) {
      this.vy = Math.max(this.vy, 4.4 * Math.pow(0.88, this.juggle));
      if (m.knockdown) this.vy = Math.max(this.vy, 3.4);
      this.vx = nx * 2.2; this.vz = nz * 2.2;
    } else if (m.launch) {
      this.state = 'launched'; this.f = 0; this.y = 0.02; this.vy = m.launch; this.vx = nx * 1.1; this.vz = nz * 1.1;
      this.launchUid = ++this.sim.uid; this.yaw = Math.atan2(-nx, -nz);
    } else if (m.knockdown || this.hp <= 0) {
      this.state = 'launched'; this.f = 0; this.y = 0.02; this.vy = this.hp <= 0 ? 3.6 : 3.3; this.juggle = 3;
      this.vx = nx * 4.2; this.vz = nz * 4.2; this.launchUid = ++this.sim.uid; this.yaw = Math.atan2(-nx, -nz);
    } else {
      this.state = 'hitstun'; this.f = 0; this.stun = m.hitstun + (counter ? 8 : 0) + (punish ? 6 : 0) + (A.fx === 'jf' ? 6 : 0); this.hitLevel = m.level;
      this.vx = nx * m.push; this.vz = nz * m.push; this.yaw = turnTo(this.yaw, Math.atan2(-nx, -nz), 0.6);
    }
    return dmg;
  }
  takeBlock(A, m) {
    let nx = this.x - A.x, nz = this.z - A.z;
    const d = Math.hypot(nx, nz) || 1; nx /= d; nz /= d;
    const c = this.crouch;
    this.state = 'blockstun'; this.f = 0; this.stun = m.blockstun; this.crouch = c;
    this.vx = nx * m.bpush; this.vz = nz * m.bpush;
    this.useSt(m.chip, 40); this.iaiF = 0; this.iaiReady = false;
    if (A.fx === 'blaze') this.st = 0; // 작열: 막아도 가드 브레이크
    if (this.st <= 0) { this.state = 'hitstun'; this.stun = 48; this.hitLevel = 'stagger'; this.crouch = false; return true; } // 가드 브레이크
    return false;
  }
}

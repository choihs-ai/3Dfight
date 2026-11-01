// 파이터 상태머신 — 순수 로직. 화면/사운드는 sim.emit()으로 이벤트만 보냄.
import { DT, MAXHP, clamp, turnTo } from './util.js';
import { MV, resolveMove } from './moves.js';

// 흐름 연계: 어떤 베기든 지속 끝 +FLOW_WINDOW 프레임 안에 다음 입력이 들어오면 후딜 없이 이어짐
export const FLOW_WINDOW = 12;
export const MAX_CHAIN = 5;          // 한 번에 이어지는 최대 기술 수
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
    });
  }
  invuln() {
    const s = this.state, f = this.f;
    return (s === 'roll' && f >= 2 && f <= 15) || s === 'down' || (s === 'getup' && f < 14) || s === 'ko' || s === 'win'
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
  startMove(id, chained = false, named = false) {
    const m = MV[id];
    // 연속기 중이면 첫 기술 시작 시점부터 들어온 입력을 다음 연결로 인정 (빠른 연타 허용)
    this.chainStart = chained ? this.chainStart : this.sim.frame;
    this.chainN = chained ? this.chainN + 1 : 0;
    this.state = 'attack'; this.move = m; this.f = 0; this.hitDone = false; this.pendingChain = null;
    this.useSt(m.stam, 30);
    this.moveUid = ++this.sim.uid; this.moveStart = this.sim.frame;
    this.guard = false; this.crouch = false; this.armorOn = false;
    // 흐름 연계로 이어진 기술은 준비 동작 앞부분을 건너뜀 (전용 연속기는 원래 프레임 그대로)
    if (chained && !named) this.f = Math.floor(m.startup * FLOW_SKIP);
  }
  startOugi() {
    this.state = 'ougi'; this.f = 0; this.ki = 0; this.hitDone = false; this.move = null;
    this.guard = false; this.crouch = false; this.moveUid = ++this.sim.uid;
    this.sim.emit({ t: 'ougiDash', i: this.idx });
  }
  gainKi(v) { this.ki = Math.min(KI_MAX, this.ki + v); }
  startRoll(inp, dx, dz) {
    let mx = inp.mx, my = inp.my;
    if (Math.hypot(mx, my) < 0.3) { mx = 0; my = -1; }
    const rx = -dz, rz = dx;
    const wx = dx * my + rx * mx, wz = dz * my + rz * mx;
    const l = Math.hypot(wx, wz) || 1;
    this.rollDir = [wx / l, wz / l];
    if (Math.abs(my) >= Math.abs(mx)) { this.rollAxis = 'x'; this.rollSign = my >= 0 ? 1 : -1; }
    else { this.rollAxis = 'z'; this.rollSign = mx > 0 ? 1 : -1; }
    this.state = 'roll'; this.f = 0; this.useSt(22, 35); this.guard = false; this.crouch = false;
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
        const b = this.takeBuf(inp, 8);
        if (b) { this.startMove(resolveMove(b.b, b.dir)); this.swipeAng = b.a || 0; break; }
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
        if (f === m.startup - 2) sim.emit({ t: 'whoosh', i: this.idx, move: m.id });
        this.armorOn = !!(m.armor && f >= m.armor[0] && f <= m.armor[1]);
        // 다음 입력 받기: 전용 연속기(chain) 우선, 아니면 아무 베기나 흐름 연계 (연계 구간 안에서만)
        if (!this.pendingChain && f >= 2 && f <= m.startup + m.active + FLOW_WINDOW && this.chainN < MAX_CHAIN - 1) {
          const bb = inp.buf;
          for (let i = 0; i < bb.length; i++) {
            const e = bb[i];
            if (e.t < this.chainStart + 2) continue;
            const named = m.chain && m.chain[e.b];
            this.pendingChain = named || resolveMove(e.b, e.dir); this.pendingNamed = !!named;
            this.pendingAng = e.a || 0; bb.splice(i, 1); break;
          }
        }
        if (this.pendingChain && f >= m.startup + m.active + 1) { this.startMove(this.pendingChain, true, this.pendingNamed); this.swipeAng = this.pendingAng; break; }
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
        const p = clamp(this.f / 20, 0, 1), sp = 7.2 * Math.pow(1 - p, 0.6);
        this.x += this.rollDir[0] * sp * DT; this.z += this.rollDir[1] * sp * DT;
        if (this.f >= 26) { this.state = 'idle'; this.f = 0; this.idleF = 0; }
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
    const g = this.guard, fs = g ? 1.2 : my > 0 ? 3 : 2.4, ss = g ? 1.2 : 2.7;
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
    let dmg = m.dmg * (counter ? 1.25 : 1);
    if (A.chainN >= 2) dmg *= Math.max(0.5, 1 - 0.15 * (A.chainN - 1)); // 흐름 연계 3타째부터 보정
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
      this.state = 'hitstun'; this.f = 0; this.stun = m.hitstun + (counter ? 8 : 0); this.hitLevel = m.level;
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
    this.useSt(m.chip, 40);
    if (this.st <= 0) { this.state = 'hitstun'; this.stun = 48; this.hitLevel = 'stagger'; this.crouch = false; return true; } // 가드 브레이크
    return false;
  }
}

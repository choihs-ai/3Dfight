// 절차적 애니메이터 — 파이터 상태(core) → 관절 자세 → 관절 월드 행렬
// 로직과 분리: sim 상태를 "읽기만" 함.
import { clamp, lerp } from '../core/util.js';
import { MV } from '../core/moves.js';
import { m4 } from './m4.js';
import { STANCE, KEYS, full, P_BLOCK, P_CROUCH, P_HIT, P_AIR, P_DOWN, P_TUCK, P_STAGGER, P_WIN, MOVE_KEYS } from './poses.js';

export const JOINTS = [
  { n: 'hips', p: -1, o: [0, 0, 0] }, { n: 'spine', p: 0, o: [0, 0.07, 0] }, { n: 'chest', p: 1, o: [0, 0.25, 0] }, { n: 'head', p: 2, o: [0, 0.27, 0] },
  { n: 'shL', p: 2, o: [0.2, 0.2, 0] }, { n: 'elL', p: 4, o: [0, -0.28, 0] }, { n: 'shR', p: 2, o: [-0.2, 0.2, 0] }, { n: 'elR', p: 6, o: [0, -0.28, 0] },
  { n: 'hipL', p: 0, o: [0.1, -0.05, 0] }, { n: 'knL', p: 8, o: [0, -0.43, 0] }, { n: 'hipR', p: 0, o: [-0.1, -0.05, 0] }, { n: 'knR', p: 10, o: [0, -0.43, 0] },
];

// 기술 키프레임 테이블 (프레임 수는 core MV에서)
const KF = {};
for (const id in MV) KF[id] = [[0, null], ...MOVE_KEYS[id].map(([f, p]) => [f, full(p)]), [MV[id].total, STANCE]];
function evalMove(id, f, snap, out) {
  const ks = KF[id];
  let i = 0;
  while (i < ks.length - 2 && f >= ks[i + 1][0]) i++;
  const f0 = ks[i][0], f1 = ks[i + 1][0];
  let t = clamp((f - f0) / Math.max(1, f1 - f0), 0, 1);
  t = i === ks.length - 2 ? t * t * (3 - 2 * t) : 1 - (1 - t) * (1 - t);
  const a = i === 0 ? snap : ks[i][1], b = ks[i + 1][1];
  for (const k of KEYS) out[k] = a[k] + (b[k] - a[k]) * t;
}

export class ProcAnimator {
  constructor(idx) {
    this.idx = idx;
    this.jw = JOINTS.map(() => m4.create());
    this.root = m4.create(); this.tmp = m4.create();
    this.reset();
  }
  reset() {
    this.base = Object.assign({}, STANCE); this.pose = Object.assign({}, STANCE); this.snap = null; this.lastUid = -1;
    this.bodyPitch = 0; this.bodyRoll = 0; this.rootH = 0.95; this.groundMode = true;
    this.walkPh = 0; this.walkF = 0; this.walkS = 0;
  }
  // 로직 1프레임 진행 후 호출
  step(F, t) {
    if (F.state === 'attack' && F.moveUid !== this.lastUid) { this.lastUid = F.moveUid; this.snap = Object.assign({}, this.pose); }
    // 걷기 블렌드
    if (F.wk === 1) { this.walkF *= 0.75; this.walkS *= 0.75; }
    else if (F.wk === 2) { this.walkF *= 0.7; this.walkS *= 0.7; }
    else if (F.wk === 3) { this.walkF = lerp(this.walkF, F.wmy, 0.3); this.walkS = lerp(this.walkS, F.wmx, 0.3); this.walkPh += F.wph; }
    this.updPose(F, t);
    this.fk(F);
  }
  updPose(F, time) {
    const B = this.base, P = this.pose;
    let tgt = STANCE, k = 0.25, direct = false;
    this.groundMode = true;
    switch (F.state) {
      case 'idle': tgt = F.guard ? (F.crouch ? P_CROUCH : P_BLOCK) : STANCE; k = F.guard ? 0.45 : 0.25; break;
      case 'attack': evalMove(F.move.id, F.f, this.snap || P, B); direct = true; break;
      case 'hitstun': {
        const s = F.stun, f = F.f, hp = P_HIT[F.hitLevel] || P_HIT.high;
        const w = f < 3 ? f / 3 : Math.max(0, 1 - (f - 3) / Math.max(1, s - 3));
        for (const key of KEYS) B[key] = lerp(B[key], lerp(STANCE[key], hp[key], w), 0.6);
        direct = true; break;
      }
      case 'blockstun': tgt = F.crouch ? P_CROUCH : P_BLOCK; k = 0.6; break;
      case 'launched': tgt = P_AIR; k = 0.25; this.groundMode = false; break;
      case 'down': case 'ko': tgt = P_DOWN; k = 0.2; this.groundMode = false; break;
      case 'getup': tgt = STANCE; k = 0.14; this.groundMode = false; break;
      case 'roll': tgt = F.f < 19 ? P_TUCK : STANCE; k = 0.45; this.groundMode = false; break;
      case 'parried': tgt = P_STAGGER; k = 0.3; break;
      case 'win': tgt = P_WIN; k = 0.08; break;
    }
    if (!direct) for (const key of KEYS) B[key] += (tgt[key] - B[key]) * k;
    for (const key of KEYS) P[key] = B[key];
    if (F.state === 'idle' && !F.crouch) {
      const s = Math.sin(this.walkPh), c = Math.cos(this.walkPh);
      const aF = clamp(Math.abs(this.walkF), 0, 1) * Math.sign(this.walkF), aS = clamp(this.walkS, -1, 1);
      P.hipLX += s * 0.45 * aF; P.hipRX -= s * 0.45 * aF; P.knLX += Math.max(0, -s) * 0.6 * Math.abs(aF); P.knRX += Math.max(0, s) * 0.6 * Math.abs(aF);
      P.hipLZ += s * 0.28 * aS; P.hipRZ += s * 0.28 * aS; P.knLX += Math.max(0, c) * 0.4 * Math.abs(aS); P.knRX += Math.max(0, -c) * 0.4 * Math.abs(aS);
      P.lift -= Math.abs(c) * 0.03 * (Math.abs(aF) + Math.abs(aS));
      P.chestX += Math.sin(time * 2.2 + this.idx) * 0.025; P.shLX += Math.sin(time * 2.2 + this.idx) * 0.03;
    }
    if (F.state === 'parried') P.spineZ += Math.sin(F.f * 0.25) * 0.15;
    const s = F.state;
    if (s === 'launched') { this.bodyPitch = lerp(this.bodyPitch, -1.25, 0.06); this.bodyRoll = lerp(this.bodyRoll, 0, 0.2); this.rootH = F.y + 0.9; }
    else if (s === 'down' || s === 'ko') { this.bodyPitch = lerp(this.bodyPitch, -1.57, 0.25); this.bodyRoll = 0; this.rootH = lerp(this.rootH, 0.14, 0.3); }
    else if (s === 'getup') { const t = clamp(F.f / 20, 0, 1), e = t * t * (3 - 2 * t); this.bodyPitch = -1.57 * (1 - e); this.rootH = lerp(0.14, 0.92, e); }
    else if (s === 'roll') {
      const p = clamp(F.f / 20, 0, 1), e = p < 1 ? p * p * (3 - 2 * p) : 0, ang = F.rollSign * Math.PI * 2 * e;
      if (F.rollAxis === 'x') { this.bodyPitch = ang; this.bodyRoll = 0; } else { this.bodyRoll = ang; this.bodyPitch = 0; }
      this.rootH = 0.95 - 0.45 * Math.sin(Math.PI * p);
    } else { this.bodyPitch = lerp(this.bodyPitch, 0, 0.3); this.bodyRoll = lerp(this.bodyRoll, 0, 0.3); this.rootH = 0.95; }
  }
  fk(F) {
    const P = this.pose;
    m4.trs(this.root, F.x, this.rootH, F.z, this.bodyPitch, F.yaw, this.bodyRoll);
    for (let i = 0; i < JOINTS.length; i++) {
      const J = JOINTS[i];
      m4.trs(this.tmp, J.o[0], J.o[1], J.o[2], P[J.n + 'X'] || 0, P[J.n + 'Y'] || 0, P[J.n + 'Z'] || 0);
      m4.mul(this.jw[i], i === 0 ? this.root : this.jw[J.p], this.tmp);
    }
    let sh = 0;
    if (this.groundMode) {
      let mn = 9;
      for (const k of [9, 11]) { const m = this.jw[k]; for (const z of [0.16, -0.06]) { const y = m[5] * -0.485 + m[9] * z + m[13]; if (y < mn) mn = y; } }
      sh = -mn;
    }
    sh += P.lift || 0;
    if (sh) { for (const m of this.jw) m[13] += sh; this.root[13] += sh; }
  }
  limbPos(limb) {
    if (limb === 'both') { const a = m4.pt(this.jw[5], 0, -0.29, 0), b = m4.pt(this.jw[7], 0, -0.29, 0); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]; }
    if (limb === 'fistL') return m4.pt(this.jw[5], 0, -0.29, 0);
    if (limb === 'fistR') return m4.pt(this.jw[7], 0, -0.29, 0);
    if (limb === 'footL') return m4.pt(this.jw[9], 0, -0.45, 0.08);
    return m4.pt(this.jw[11], 0, -0.45, 0.08);
  }
  center() { return [this.root[12], this.root[13] + 0.25, this.root[14]]; }
}

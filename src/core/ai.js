// CPU AI — 프로토타입 로직 그대로. sim.rng(시드 난수)를 써서 재현 가능.
// 매 프레임 FrameInput을 만들어 돌려줌 (히트스톱 중/라운드 밖에서는 null).
import { MV, resolveMove } from './moves.js';

export const AIL = {
  practice: { idle: true },
  easy: { react: 22, block: 0.25, dodge: 0.05, lowRead: 0.2, duck: 0, parry: 0, punish: 0.15, juggle: 0.25, aggro: 0.35, tempo: 1.5 },
  normal: { react: 14, block: 0.5, dodge: 0.12, lowRead: 0.45, duck: 0.05, parry: 0.05, punish: 0.5, juggle: 0.65, aggro: 0.5, tempo: 1 },
  hard: { react: 8, block: 0.72, dodge: 0.18, lowRead: 0.7, duck: 0.15, parry: 0.2, punish: 0.9, juggle: 0.95, aggro: 0.6, tempo: 0.7 },
};

export class AI {
  constructor(sim, idx, lv) {
    this.sim = sim; this.idx = idx; this.L = AIL[lv]; this.lv = lv;
    this.intent = 'approach'; this.iT = 0; this.watch = -1; this.plan = null; this.queue = []; this.sd = 1;
    this.punished = -1; this.juggled = -1; this.atk = null; this.waitG = false; this.roundSeq = -1;
  }
  get me() { return this.sim.f[this.idx]; }
  get op() { return this.sim.f[1 - this.idx]; }
  // 다음 sim.step()에 넣을 입력
  input() {
    const sim = this.sim;
    if (sim.roundSeq !== this.roundSeq) { this.roundSeq = sim.roundSeq; this.queue = []; this.plan = null; }
    if (sim.phase !== 'fight' || sim.hitstop > 0) return null;
    return this.update(sim.frame + 1);
  }
  update(now) {
    const me = this.me, op = this.op, L = this.L, R = this.sim.rng;
    const out = { mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [] };
    if (L.idle) return out;
    const press = (b, d) => out.btns.push({ b, dir: d });
    const dist = Math.hypot(op.x - me.x, op.z - me.z);
    while (this.queue.length && this.queue[0].t <= now) { const q = this.queue.shift(); press(q.b, q.d); }
    let mx = 0, my = 0, wantG = false, wantC = false;
    if (op.state === 'attack' && op.move) {
      const guess = L.react > op.move.startup - 3;
      if (this.watch !== op.moveUid && op.f >= (guess ? Math.max(2, op.move.startup - 5) : L.react)) {
        this.watch = op.moveUid;
        const m = op.move, r = R() * (guess ? 1.7 : 1);
        this.plan = null;
        if (me.state === 'idle' || me.state === 'blockstun') {
          if (r < L.dodge && me.st > 30 && me.state === 'idle') { this.sd = R() < 0.5 ? 1 : -1; out.roll = true; mx = this.sd; }
          else if (r < L.dodge + L.block) {
            const crouch = m.level === 'low' ? R() < L.lowRead : m.level === 'high' && R() < L.duck;
            this.plan = { uid: op.moveUid, crouch, parry: R() < L.parry, pressed: false };
          }
        }
      }
    } else this.plan = null;
    if (this.plan && op.state === 'attack' && op.moveUid === this.plan.uid) {
      const m = op.move;
      if (this.plan.parry) {
        const ta = m.startup - op.f;
        if (!this.plan.pressed && ta <= 3) { out.gp = true; this.plan.pressed = true; }
        wantG = this.plan.pressed;
      } else wantG = true;
      wantC = this.plan.crouch && wantG;
    }
    if (me.state === 'idle' && !wantG) {
      if (op.state === 'attack' && op.move && op.f >= op.move.startup + op.move.active && op.move.total - op.f > 9 && dist < 1.9 && this.punished !== op.moveUid) {
        this.punished = op.moveUid;
        if (R() < L.punish) { if (op.move.total - op.f > 17 && dist < 1.5) press('2', 'f'); else press('1', 'n'); }
      } else if (op.state === 'parried' && dist < 2 && this.punished !== -op.f - 1000) {
        this.punished = -op.f - 1000;
        if (op.f < 6) press('2', 'f');
      } else if (op.state === 'launched' && dist < 2.4 && op.y < 1.4 && this.juggled !== op.launchUid && op.vy < 1) {
        this.juggled = op.launchUid;
        if (R() < L.juggle) { press('1', 'n'); this.queue.push({ t: now + 9, b: '2', d: 'n' }, { t: now + 21, b: '4', d: 'n' }); }
      } else {
        if (--this.iT <= 0) this.pick(dist);
        switch (this.intent) {
          case 'approach': my = 1; break;
          case 'back': my = -1; break;
          case 'circle': mx = this.sd; my = dist > 2.4 ? 0.5 : 0; break;
          case 'wait': wantG = this.waitG; break;
          case 'attack':
            if (dist < this.atk.r) { press(this.atk.b, this.atk.d); this.intent = 'wait'; this.waitG = R() < 0.5; this.iT = (12 + R() * 22) * L.tempo; }
            else my = 1;
            break;
        }
      }
    }
    if (me.state === 'blockstun' && this.plan) wantG = true;
    out.mx = mx || (out.roll ? this.sd : 0);
    out.my = wantC ? -1 : my;
    out.guard = wantG;
    return out;
  }
  pick(dist) {
    const L = this.L, R = this.sim.rng, r = R(), me = this.me;
    this.sd = R() < 0.5 ? 1 : -1;
    let T = 30;
    if (me.st < 20) { this.intent = 'back'; T = 30; }
    else if (dist > 2.8) { this.intent = r < 0.8 ? 'approach' : 'circle'; T = 20 + R() * 30; }
    else if (dist > 0.95) {
      if (r < L.aggro) {
        const near = [['1', 'n'], ['2', 'n'], ['3', 'n'], ['2', 'f'], ['1', 'n'], ['4', 's']];
        const far = [['4', 'n'], ['4', 'f'], ['3', 'b'], ['4', 's'], ['2', 'b'], ['3', 'n']];
        const pool = dist < 1.55 ? near : far;
        const c = pool[(R() * pool.length) | 0];
        const id = resolveMove(c[0], c[1]);
        this.atk = { b: c[0], d: c[1], r: MV[id].range + 0.2 }; this.intent = 'attack'; T = 40;
      } else if (r < L.aggro + 0.2) { this.intent = 'circle'; T = 18 + R() * 25; }
      else if (r < L.aggro + 0.3) { this.intent = 'back'; T = 10 + R() * 15; }
      else { this.intent = 'wait'; this.waitG = R() < 0.5; T = 14 + R() * 24; }
    } else { if (r < 0.6) { this.atk = { b: '1', d: 'n', r: 9 }; this.intent = 'attack'; } else this.intent = 'back'; T = 14; }
    this.iT = T * (L.tempo || 1);
  }
}

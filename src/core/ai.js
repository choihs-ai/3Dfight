// CPU AI — 프로토타입 로직 그대로. sim.rng(시드 난수)를 써서 재현 가능.
// 매 프레임 FrameInput을 만들어 돌려줌 (히트스톱 중/라운드 밖에서는 null).
import { movesOf, resolveMove } from './moves.js';
import { seeded } from './util.js';

const RANGE_BONUS = 0.45; // 칼 사거리만큼 판단 거리도 늘림

export const AIL = {
  practice: { idle: true },
  easy: { jf: 0.2, ougi: 0.01, ougiSkill: 0.35, flow: 0.15, react: 22, block: 0.25, dodge: 0.05, lowRead: 0.2, duck: 0, parry: 0, punish: 0.15, juggle: 0.25, aggro: 0.35, tempo: 1.5 },
  normal: { jf: 0.5, ougi: 0.03, ougiSkill: 0.55, flow: 0.4, react: 14, block: 0.5, dodge: 0.12, lowRead: 0.45, duck: 0.05, parry: 0.05, punish: 0.5, juggle: 0.65, aggro: 0.5, tempo: 1 },
  hard: { jf: 0.85, ougi: 0.06, ougiSkill: 0.7, flow: 0.7, react: 8, block: 0.72, dodge: 0.18, lowRead: 0.7, duck: 0.15, parry: 0.2, punish: 0.9, juggle: 0.95, aggro: 0.6, tempo: 0.7 },
};

export class AI {
  constructor(sim, idx, lv) {
    this.sim = sim; this.idx = idx; this.L = AIL[lv]; this.lv = lv;
    this.rng = seeded((sim.seed || 1) * 31 + idx * 7919); // AI 전용 난수 (대전 상태와 분리)
    this.intent = 'approach'; this.iT = 0; this.watch = -1; this.plan = null; this.queue = []; this.sd = 1;
    this.punished = -1; this.juggled = -1; this.flowed = -1; this.atk = null; this.waitG = false; this.roundSeq = -1;
  }
  get me() { return this.sim.f[this.idx]; }
  get op() { return this.sim.f[1 - this.idx]; }
  // 다음 sim.step()에 넣을 입력
  input() {
    const sim = this.sim;
    if (sim.roundSeq !== this.roundSeq) { this.roundSeq = sim.roundSeq; this.queue = []; this.plan = null; }
    if (sim.phase !== 'fight' || sim.hitstop > 0) return null;
    // 오의 시네마틱: 내가 시전자면 잠시 뒤 문양 점수를 냄 (난이도가 높을수록 정확)
    if (sim.cine) {
      const c = sim.cine;
      if (c.a === this.idx && c.strikeF < 0 && c.f === 70) return { mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [], score: Math.round(100 * Math.min(1, (this.L.ougiSkill ?? 0.6) + this.rng() * 0.25)) };
      return null;
    }
    return this.update(sim.frame + 1);
  }
  update(now) {
    const me = this.me, op = this.op, L = this.L, R = this.rng;
    const out = { mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [] };
    if (L.idle) return out;
    const press = (b, d) => out.btns.push({ b, dir: d, a: b === 'h' && R() < 0.5 ? 3.14 : 0 }); // 가로 긋기는 좌우 무작위
    const dist = Math.hypot(op.x - me.x, op.z - me.z);
    while (this.queue.length && this.queue[0].t <= now) { const q = this.queue.shift(); press(q.b, q.d); }
    let mx = 0, my = 0, wantG = false, wantC = false;
    const T = me.S.traits;
    // 상대가 물거울 자세면: 읽었으면 하단, 아니면 기다림
    if (op.state === 'attack' && op.move && op.move.counter && me.state === 'idle' && this.watch !== op.moveUid) {
      this.watch = op.moveUid; this.plan = null;
      if (R() < L.lowRead && dist < 1.9 + RANGE_BONUS) press('l', 'n');
      return this.finish(out, 0, -0.6, false, false);
    }
    if (op.state === 'attack' && op.move && !op.move.counter) {
      const guess = L.react > op.move.startup - 3;
      if (this.watch !== op.moveUid && op.f >= (guess ? Math.max(2, op.move.startup - 5) : L.react)) {
        this.watch = op.moveUid;
        const m = op.move, r = R() * (guess ? 1.7 : 1);
        this.plan = null;
        if (me.state === 'idle' || me.state === 'blockstun') {
          const dodge = L.dodge + (T.rollAtk ? 0.06 : 0);
          // 물: 상단·중단이 오면 물거울로 받아넘김 (발생까지 여유가 있을 때)
          if (T.mirror && me.state === 'idle' && m.level !== 'low' && m.startup - op.f >= 4 && r < (L.parry + 0.1) * 1.6) press('t', 'b');
          else if (r < dodge && me.st > 30 && me.state === 'idle') {
            this.sd = R() < 0.5 ? 1 : -1; out.roll = true; mx = this.sd;
            if (T.rollAtk && R() < L.flow) this.queue.push({ t: now + 8, b: 'h', d: 'n' }); // 바람: 구르며 선풍참
          }
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
    // 흐름 연계: 내 베기가 닿았으면(맞든 막히든) 난이도에 따라 다음 베기를 이어감
    if (me.state === 'attack' && me.move && me.hitDone && this.flowed !== me.moveUid && me.chainN < me.S.maxChain - 2) {
      this.flowed = me.moveUid;
      if (R() < (L.flow ?? L.aggro)) {
        const pool = [['t', 'n'], ['h', 'n'], ['l', 'n'], ['d', 'n'], ['h', 's'], ['l', 'b']];
        const c = pool[(R() * pool.length) | 0];
        // 번개 뇌속: 잘하는 CPU일수록 맞은 순간에 맞춰 그음 (아니면 조금 늦게)
        if (T.jf && R() >= (L.jf ?? 0.5)) this.queue.push({ t: now + 5 + ((R() * 4) | 0), b: c[0], d: c[1] }); else press(c[0], c[1]);
      } else if (T.rollCancel && op.state === 'blockstun' && R() < L.flow) { out.roll = true; this.sd = R() < 0.5 ? 1 : -1; mx = this.sd; } // 바람 걸음: 막혔으면 빠짐
    }
    // 기 게이지가 꽉 차면 가까울 때 가끔 오의
    if (me.state === 'idle' && !wantG && me.ki >= 100 && dist < 2.0 && op.state !== 'roll' && R() < (L.ougi ?? 0.03)) { out.ougi = true; }
    if (me.state === 'idle' && !wantG) {
      if (op.state === 'attack' && op.move && op.f >= op.move.startup + op.move.active && op.move.total - op.f > 9 && dist < 1.9 + RANGE_BONUS && this.punished !== op.moveUid) {
        this.punished = op.moveUid;
        if (R() < L.punish) { if (op.move.total - op.f > 17 && dist < 1.5 + RANGE_BONUS) press('u', 'f'); else press('t', 'n'); }
      } else if (op.state === 'parried' && dist < 2 + RANGE_BONUS && this.punished !== -op.f - 1000) {
        this.punished = -op.f - 1000;
        if (op.f < 6) press('u', 'f');
      } else if (op.state === 'launched' && dist < 2.4 + RANGE_BONUS && op.y < 1.4 && this.juggled !== op.launchUid && op.vy < 1) {
        this.juggled = op.launchUid;
        if (R() < L.juggle) { press('t', 'n'); this.queue.push({ t: now + 9, b: 'h', d: 'n' }, { t: now + 21, b: 'h', d: 'n' }); }
      } else {
        if (--this.iT <= 0) this.pick(dist);
        switch (this.intent) {
          case 'approach': my = 1; break;
          case 'back': my = -1; break;
          case 'circle': mx = this.sd; my = dist > 2.4 ? 0.5 : 0; break;
          case 'wait': wantG = this.waitG; break;
          case 'iai': // 번개: 가만히 서서 발도 → 거리 안이면 일섬
            if (me.iaiReady && dist < this.atk.r) { press('t', 'n'); this.intent = 'wait'; this.waitG = false; this.iT = (14 + R() * 16) * L.tempo; }
            break;
          case 'attack':
            if (dist < this.atk.r) { press(this.atk.b, this.atk.d); this.intent = 'wait'; this.waitG = R() < 0.5; this.iT = (12 + R() * 22) * L.tempo; }
            else my = 1;
            break;
        }
      }
    }
    if (me.state === 'blockstun' && this.plan) wantG = true;
    return this.finish(out, mx, my, wantG, wantC);
  }
  finish(out, mx, my, wantG, wantC) {
    out.mx = mx || (out.roll ? this.sd : 0);
    out.my = wantC ? -1 : my;
    out.guard = wantG;
    return out;
  }
  pick(dist) {
    const L = this.L, R = this.rng, r = R(), me = this.me;
    this.sd = R() < 0.5 ? 1 : -1;
    let T = 30;
    if (me.st < 20) { this.intent = 'back'; T = 30; }
    else if (me.S.traits.iai && dist > 2.2 + RANGE_BONUS && dist < 4.2 + RANGE_BONUS && r < L.aggro * 0.8) {
      // 번개: 거리를 두고 발도 자세
      this.atk = { r: movesOf(me.style).iai_flash.range + movesOf(me.style).iai_flash.lunge * 0.8 }; this.intent = 'iai'; T = 70;
    }
    else if (dist > 2.8 + RANGE_BONUS) { this.intent = r < 0.8 ? 'approach' : 'circle'; T = 20 + R() * 30; }
    else if (dist > 0.95 + RANGE_BONUS * 0.4) {
      if (r < L.aggro) {
        const near = [['t', 'n'], ['h', 'n'], ['l', 'n'], ['u', 'f'], ['t', 'n'], ['h', 's']];
        const far = [['d', 'n'], ['t', 'f'], ['l', 'b'], ['h', 's'], ['d', 'b'], ['l', 'n']];
        // 캐릭터 전용 기술도 섞음
        const own = { fire: [['h', 'f'], ['d', 'n']], thunder: [['t', 'f']], wind: [['h', 's']], water: [['h', 'n']] }[me.style] || [];
        // 불: 불씨가 차면 작열 기술
        const pool = me.S.traits.heat && me.heat >= me.S.traits.heat ? [['d', 'n'], ['h', 'f']] : (dist < 1.55 + RANGE_BONUS ? near : far).concat(own);
        const c = pool[(R() * pool.length) | 0];
        const id = resolveMove(c[0], c[1], me.style);
        this.atk = { b: c[0], d: c[1], r: movesOf(me.style)[id].range + 0.2 }; this.intent = 'attack'; T = 40;
      } else if (r < L.aggro + 0.2) { this.intent = 'circle'; T = 18 + R() * 25; }
      else if (r < L.aggro + 0.3) { this.intent = 'back'; T = 10 + R() * 15; }
      else { this.intent = 'wait'; this.waitG = R() < 0.5; T = 14 + R() * 24; }
    } else { if (r < 0.6) { this.atk = { b: 't', d: 'n', r: 9 }; this.intent = 'attack'; } else this.intent = 'back'; T = 14; }
    this.iT = T * (L.tempo || 1);
  }
}

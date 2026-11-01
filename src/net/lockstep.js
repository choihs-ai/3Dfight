// 온라인 락스텝 동기화 (순수 로직 — 네트워크/화면 의존 없음, Node에서 테스트)
// - 두 기기가 같은 프레임에 같은 입력으로 sim.step → 같은 경기
// - 입력 지연(delay) 프레임만큼 미리 보내서 통신 지연을 숨김
// - 기기마다 수학 함수 결과가 미세하게 다를 수 있어서, 방장(0번)이 주기적으로 상태를 보내고
//   손님(1번)은 자기 상태와 지문이 다르면 방장 상태로 맞춘 뒤 이후 프레임을 다시 계산함
export const SNAP_EVERY = 180;

// 입력 압축: [mx, my, 비트(guard|gp|roll|ougi), score, btns...]
const DIRS = 'nfbs', GS = 'thudl';
export function quantize(fi) {
  const q = { mx: Math.round((fi.mx || 0) * 100) / 100, my: Math.round((fi.my || 0) * 100) / 100, guard: !!fi.guard, gp: !!fi.gp, roll: !!fi.roll, ougi: !!fi.ougi, btns: [] };
  if (fi.score !== undefined && fi.score !== null && fi.score >= 0) q.score = Math.round(fi.score);
  for (const b of fi.btns || []) q.btns.push({ b: b.b, dir: b.dir, a: Math.round((b.a || 0) * 100) / 100 });
  return q;
}
export function pack(q) {
  const bits = (q.guard ? 1 : 0) | (q.gp ? 2 : 0) | (q.roll ? 4 : 0) | (q.ougi ? 8 : 0);
  return [Math.round(q.mx * 100), Math.round(q.my * 100), bits, q.score ?? -1, ...q.btns.map((b) => GS.indexOf(b.b) * 4 + DIRS.indexOf(b.dir) + Math.round(b.a * 100) * 32)];
}
export function unpack(a) {
  const [mx, my, bits, score, ...bs] = a;
  const q = { mx: mx / 100, my: my / 100, guard: !!(bits & 1), gp: !!(bits & 2), roll: !!(bits & 4), ougi: !!(bits & 8), btns: [] };
  if (score >= 0) q.score = score;
  for (const v of bs) { const lo = ((v % 32) + 32) % 32, aa = (v - lo) / 32; q.btns.push({ b: GS[lo >> 2], dir: DIRS[lo & 3], a: aa / 100 }); }
  return q;
}
const NEUTRAL = () => ({ mx: 0, my: 0, guard: false, gp: false, roll: false, ougi: false, btns: [] });

export class Lockstep {
  // me: 0(방장) | 1(손님), send(msg)
  constructor({ me, delay = 5, send }) {
    this.me = me; this.delay = delay; this.send = send;
    this.inputs = [new Map(), new Map()];
    for (let f = 1; f <= delay; f++) { this.inputs[0].set(f, NEUTRAL()); this.inputs[1].set(f, NEUTRAL()); }
    this.nextLocal = delay + 1;
    this.myHash = new Map(); this.pendingSnap = new Map();
    this.resyncs = 0; this.stallFrames = 0;
  }
  // 아직 보내지 않은 내 입력이 필요하면 하나 만들어 보냄 (현재 프레임 + delay 까지)
  needLocal(simFrame) { return this.nextLocal <= simFrame + 1 + this.delay; }
  produce(fi) {
    const f = this.nextLocal++, q = quantize(fi);
    this.inputs[this.me].set(f, q);
    this.send({ k: 'i', f, d: pack(q) });
  }
  canStep(frame) { return this.inputs[0].has(frame) && this.inputs[1].has(frame); }
  get(frame) { return [this.inputs[0].get(frame), this.inputs[1].get(frame)]; }
  receive(m) {
    if (m.k === 'i') this.inputs[1 - this.me].set(m.f, unpack(m.d));
    else if (m.k === 's' && this.me === 1) this.pendingSnap.set(m.f, m);
  }
  // sim.step 직후 호출. 반환: 'replayed' 이면 손님이 상태를 고쳐서 다시 계산함
  afterStep(sim) {
    const N = sim.frame;
    // 오래된 입력 정리
    for (const M of this.inputs) M.delete(N - 600);
    if (N % SNAP_EVERY !== 0) return this.applyLateSnap(sim);
    if (this.me === 0) { this.send({ k: 's', f: N, h: sim.hash(), s: sim.serialize() }); return null; }
    this.myHash.set(N, sim.hash());
    for (const k of this.myHash.keys()) if (k < N - SNAP_EVERY * 3) this.myHash.delete(k);
    return this.applyLateSnap(sim);
  }
  applyLateSnap(sim) {
    if (this.me !== 1 || !this.pendingSnap.size) return null;
    let result = null;
    for (const [f, m] of [...this.pendingSnap]) {
      if (f > sim.frame) continue; // 아직 그 프레임에 도달 못 함
      this.pendingSnap.delete(f);
      const mine = this.myHash.get(f);
      if (mine === m.h) continue;
      // 어긋남 → 방장 상태로 맞추고 이후 프레임 재계산
      const target = sim.frame;
      sim.load(m.s);
      while (sim.frame < target && this.canStep(sim.frame + 1)) { sim.step(this.get(sim.frame + 1)); sim.drainEvents(); }
      this.resyncs++; result = 'replayed';
    }
    return result;
  }
}

// 온라인 락스텝 테스트: 가짜 네트워크(지연·순서 뒤섞임)로 두 기기를 흉내 냄
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Sim, AI } from '../src/core/index.js';
import { Lockstep, pack, unpack, quantize } from '../src/net/lockstep.js';

test('입력 압축/복원', () => {
  const fi = { mx: 0.534, my: -1, guard: true, gp: false, roll: true, ougi: true, score: 87, btns: [{ b: 'h', dir: 's', a: 3.14159 }, { b: 'l', dir: 'b', a: -0.7 }] };
  assert.deepEqual(unpack(pack(quantize(fi))), quantize(fi));
});

// 두 기기 대전: 각 기기는 자기 sim + 자기 AI(자기 캐릭터만 조종) + Lockstep
function duel({ latency = [3, 12], perturb = false, frames = 60 * 60 * 6 }) {
  const seed = 77, R = (() => { let s = 1; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
  const queue = []; let now = 0;
  const peers = [0, 1].map((me) => {
    const sim = new Sim({ mode: 'match', seed });
    const ai = new AI(sim, me, me ? 'hard' : 'normal');
    const ls = new Lockstep({ me, delay: 5, send: (m) => queue.push({ to: 1 - me, at: now + latency[0] + R() * (latency[1] - latency[0]), m: JSON.parse(JSON.stringify(m)) }) });
    return { me, sim, ai, ls, stalls: 0 };
  });
  for (now = 0; now < frames * 2 && !(peers[0].sim.over && peers[1].sim.over); now++) {
    // 네트워크 배달 (지연 순서대로, 일부는 뒤섞임)
    for (let i = queue.length - 1; i >= 0; i--) if (queue[i].at <= now) { const q = queue.splice(i, 1)[0]; peers[q.to].ls.receive(q.m); }
    for (const p of peers) {
      if (p.sim.over) continue;
      if (p.ls.needLocal(p.sim.frame)) {
        const fi = p.ai.input() || { mx: 0, my: 0, btns: [] };
        p.ls.produce(fi);
      }
      if (!p.ls.canStep(p.sim.frame + 1)) { p.stalls++; continue; }
      p.sim.step(p.ls.get(p.sim.frame + 1)); p.sim.drainEvents();
      if (perturb && p.me === 1 && p.sim.frame === 400) p.sim.f[0].x += 0.3; // 기기 차이로 어긋났다고 가정
      p.ls.afterStep(p.sim);
    }
  }
  return peers;
}

test('락스텝: 지연·뒤섞임이 있어도 두 기기가 같은 경기를 끝까지 진행', () => {
  const [a, b] = duel({});
  assert.ok(a.sim.over && b.sim.over, '둘 다 경기 종료');
  assert.equal(a.sim.hash(), b.sim.hash(), '최종 상태 동일');
  assert.deepEqual(a.sim.wins, b.sim.wins);
});

test('락스텝: 어긋나면 방장 상태로 자동 복구', () => {
  const [a, b] = duel({ perturb: true });
  assert.ok(b.ls.resyncs >= 1, '복구 발생');
  assert.equal(a.sim.hash(), b.sim.hash(), '복구 후 동일');
});

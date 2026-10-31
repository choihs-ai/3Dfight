// 전투 로직 자동 테스트 — 브라우저 없이 Node에서 실행: npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Sim, AI, MV, MAXHP } from '../src/core/index.js';

const inp = (o = {}) => ({ mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [], ...o });
const press = (b, dir = 'n', o = {}) => inp({ btns: [{ b, dir }], ...o });

// 라운드 시작 연출을 건너뛰고 두 파이터를 마주 세움
function setup(dist = 1.2) {
  const s = new Sim({ mode: 'match', seed: 1 });
  while (s.phase !== 'fight') s.step();
  s.f[0].reset(0, -dist / 2, 0);
  s.f[1].reset(0, dist / 2, Math.PI);
  s.drainEvents();
  return s;
}
// n프레임 진행. a/b: (프레임번호)=>FrameInput
function run(s, n, a = () => inp(), b = () => inp()) {
  const ev = [];
  for (let i = 0; i < n; i++) { s.step([a(i), b(i)]); ev.push(...s.drainEvents().map((e) => ({ ...e, i }))); }
  return ev;
}
const first = (ev, t) => ev.find((e) => e.t === t);

test('잽: 발생 7프레임째에 맞음, 히트스턴 17', () => {
  const s = setup();
  const ev = run(s, 20, (i) => (i === 0 ? press('1') : inp()));
  const h = first(ev, 'hit');
  assert.ok(h, '맞아야 함');
  assert.equal(h.move, 'jab');
  assert.equal(h.i, MV.jab.startup); // 입력 프레임(0) + 7
  assert.equal(s.f[1].hp, MAXHP - MV.jab.dmg);
});

test('히트스톱 동안 시간이 멈춤', () => {
  const s = setup();
  run(s, 8, (i) => (i === 0 ? press('1') : inp()));
  assert.equal(s.hitstop, MV.jab.hitstop);
  const f = s.f[1].f;
  run(s, MV.jab.hitstop);
  assert.equal(s.f[1].f, f, '히트스톱 중에는 상태 프레임이 안 흐름');
});

test('서서 가드: 상단·중단 방어, 하단은 맞음', () => {
  for (const [b, dir, lvl, blocked] of [['1', 'n', 'high', true], ['2', 'f', 'mid', true], ['3', 'n', 'low', false]]) {
    const s = setup();
    const ev = run(s, 30, (i) => (i === 5 ? press(b, dir) : inp()), () => inp({ guard: true }));
    const r = ev.find((e) => e.t === 'hit' || e.t === 'block');
    assert.ok(r, `${lvl} 판정 발생`);
    assert.equal(r.t, blocked ? 'block' : 'hit', `${lvl}`);
  }
});

test('앉아 가드: 하단 방어, 상단은 피함(헛침), 중단은 맞음', () => {
  for (const [b, dir, expect] of [['3', 'n', 'block'], ['1', 'n', 'none'], ['4', 'f', 'hit']]) {
    const s = setup();
    const ev = run(s, 30, (i) => (i === 5 ? press(b, dir) : inp()), () => inp({ guard: true, my: -1 }));
    const r = ev.find((e) => e.t === 'hit' || e.t === 'block');
    assert.equal(r ? r.t : 'none', expect, `${b}${dir}`);
  }
});

test('패링: 맞기 직전(8프레임 이내) 가드 톡', () => {
  const s = setup();
  // 잽은 입력 후 7프레임째 판정 → 4프레임째에 가드 누름
  const ev = run(s, 20, (i) => (i === 0 ? press('1') : inp()), (i) => (i >= 4 ? inp({ guard: true, gp: i === 4 }) : inp()));
  assert.ok(first(ev, 'parry'), '패링 발생');
  assert.equal(s.f[0].state, 'parried');
});

test('일찍 누른 가드는 패링이 아니라 일반 가드', () => {
  const s = setup();
  const ev = run(s, 30, (i) => (i === 10 ? press('1') : inp()), (i) => inp({ guard: true, gp: i === 0 }));
  assert.ok(first(ev, 'block'));
  assert.ok(!first(ev, 'parry'));
});

test('카운터: 상대 기술 발생 중에 맞히면 카운터(피해 1.25배)', () => {
  const s = setup();
  // P2가 하이킥(발생 15) 시작 → P1이 잽(발생 7)으로 끊음
  const ev = run(s, 20, (i) => (i === 2 ? press('1') : inp()), (i) => (i === 0 ? press('4') : inp()));
  const h = ev.find((e) => e.t === 'hit' && e.a === 0);
  assert.ok(h && h.counter, '카운터 히트');
  assert.equal(s.f[1].hp, MAXHP - MV.jab.dmg * 1.25);
});

test('어퍼컷 띄우기 → 공중 콤보 보정', () => {
  const s = setup();
  let ev = run(s, 25, (i) => (i === 0 ? press('2', 'f') : inp()));
  const h = first(ev, 'hit');
  assert.ok(h && h.launch, '띄우기');
  assert.equal(s.f[1].state, 'launched');
  // 낙하 전에 잽 → 보정 적용(juggle 1 → 85%)
  while (s.f[0].state !== 'idle') s.step();
  const hp0 = s.f[1].hp;
  ev = run(s, 12, (i) => (i === 0 ? press('1') : inp()));
  const j = first(ev, 'hit');
  assert.ok(j && j.air, '공중 히트');
  assert.ok(Math.abs(hp0 - s.f[1].hp - MV.jab.dmg * 0.85) < 1e-9);
});

test('1→2→4 연속기가 이어짐', () => {
  const s = setup();
  // 다음 버튼은 현재 기술 시작 2프레임 뒤부터 받아줌 (히트스톱 포함 타이밍)
  const ev = run(s, 90, (i) => (i === 0 ? press('1') : i === 6 ? press('2') : i === 22 ? press('4') : inp()));
  const moves = ev.filter((e) => e.t === 'hit').map((e) => e.move);
  assert.deepEqual(moves, ['jab', 'onetwo', 'onetwokick']);
});

test('뒤+2 망치: 슈퍼아머로 잽을 버팀', () => {
  const s = setup();
  const ev = run(s, 40, (i) => (i === 0 ? press('2', 'b') : inp()), (i) => (i === 8 ? press('1') : inp()));
  assert.ok(first(ev, 'armor'), '아머 발동');
  const h = ev.find((e) => e.t === 'hit' && e.a === 0);
  assert.ok(h && h.move === 'hammer', '망치가 끊기지 않고 맞음');
});

test('뒤+3 다리쓸기: 하단 다운', () => {
  const s = setup();
  const ev = run(s, 30, (i) => (i === 0 ? press('3', 'b') : inp()));
  assert.equal(first(ev, 'hit').move, 'sweep');
  assert.equal(s.f[1].state, 'launched');
});

test('판정 각도: 옆으로 벗어난 상대에게 직선기는 헛치고, 옆+4 돌려차기는 맞음', () => {
  // 공격자가 상대에서 1.1rad 빗나간 방향을 보고 있을 때 (추적 후에도 남는 각도)
  const aim = (s) => { s.f[0].yaw = 1.1 + MV.straight.track * MV.straight.startup; };
  let s = setup(1.2); aim(s);
  let ev = run(s, 30, (i) => (i === 0 ? press('2') : inp()));
  assert.ok(!first(ev, 'hit'), '스트레이트 헛침');
  s = setup(1.2); aim(s);
  ev = run(s, 30, (i) => (i === 0 ? press('4', 's') : inp()));
  assert.equal(first(ev, 'hit')?.move, 'homing', '돌려차기 적중');
});

test('옆+4 돌려차기는 옆걸음 중인 상대를 잡음', () => {
  const s = setup(1.3);
  const ev = run(s, 30, (i) => (i === 0 ? press('4', 's') : inp()), () => inp({ mx: 1 }));
  assert.equal(first(ev, 'hit')?.move, 'homing');
});

test('구르기 무적', () => {
  const s = setup();
  const ev = run(s, 20, (i) => (i === 0 ? press('2') : inp()), (i) => inp({ roll: i === 1, my: -1 }));
  assert.ok(!first(ev, 'hit'));
  assert.ok(first(ev, 'roll'));
});

test('스태미나: 가드 스태미나를 다 깎으면 가드 브레이크', () => {
  const s = setup();
  s.f[1].st = 20;
  const ev = run(s, 40, (i) => (i === 0 ? press('2', 'b') : inp()), () => inp({ guard: true }));
  const b = first(ev, 'block');
  assert.ok(b && b.brk, '가드 브레이크');
});

test('락온 이동: 스틱 위 = 상대 쪽으로 다가감, 좌우 = 거리 유지하며 원운동', () => {
  let s = setup(4);
  run(s, 30, () => inp({ my: 1 }));
  const d1 = Math.hypot(s.f[1].x - s.f[0].x, s.f[1].z - s.f[0].z);
  assert.ok(d1 < 4 - 1, '다가감');
  s = setup(3);
  run(s, 60, () => inp({ mx: 1 }));
  const d2 = Math.hypot(s.f[1].x - s.f[0].x, s.f[1].z - s.f[0].z);
  assert.ok(Math.abs(d2 - 3) < 0.05, `거리 유지 ${d2}`);
  assert.ok(Math.abs(s.f[0].x) > 0.5, '옆으로 돌았음');
});

test('CPU끼리 자동 대전: 모든 난이도에서 3판 2선승으로 끝남 + 같은 시드면 같은 결과', () => {
  const play = (seed, a, b) => {
    const s = new Sim({ mode: 'match', seed });
    const ai = [new AI(s, 0, a), new AI(s, 1, b)];
    let n = 0;
    while (!s.over && n < 60 * 60 * 10) {
      s.step([ai[0].input(), ai[1].input()]); n++;
      for (const f of s.f) assert.ok(Number.isFinite(f.x + f.z + f.hp + f.st), 'NaN 없음');
    }
    return { wins: s.wins.slice(), n, hp: s.f.map((f) => f.hp) };
  };
  for (const lv of ['easy', 'normal', 'hard']) {
    for (const seed of [1, 7, 42]) {
      const r = play(seed, 'normal', lv);
      assert.equal(Math.max(...r.wins), 2, `${lv}/${seed} 종료 ${JSON.stringify(r)}`);
    }
  }
  assert.deepEqual(play(123, 'hard', 'hard'), play(123, 'hard', 'hard'), '결정적(재현 가능)');
});

test('연습 모드: 타이머 없음 + 체력 회복', () => {
  const s = new Sim({ mode: 'practice', seed: 1 });
  while (s.phase !== 'fight') s.step();
  s.f[0].reset(0, -0.6, 0); s.f[1].reset(0, 0.6, Math.PI);
  run(s, 20, (i) => (i === 0 ? press('1') : inp()));
  assert.ok(s.f[1].hp < MAXHP);
  run(s, 90);
  assert.equal(s.f[1].hp, MAXHP);
  assert.equal(s.timer, 60);
});

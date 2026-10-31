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

test('찌르기(탭): 발생 7프레임째에 맞음', () => {
  const s = setup();
  const ev = run(s, 20, (i) => (i === 0 ? press('t') : inp()));
  const h = first(ev, 'hit');
  assert.ok(h, '맞아야 함');
  assert.equal(h.move, 'stab');
  assert.equal(h.i, MV.stab.startup); // 입력 프레임(0) + 7
  assert.equal(s.f[1].hp, MAXHP - MV.stab.dmg);
});

test('히트스톱 동안 시간이 멈춤', () => {
  const s = setup();
  run(s, 8, (i) => (i === 0 ? press('t') : inp()));
  assert.equal(s.hitstop, MV.stab.hitstop);
  const f = s.f[1].f;
  run(s, MV.stab.hitstop);
  assert.equal(s.f[1].f, f, '히트스톱 중에는 상태 프레임이 안 흐름');
});

test('서서 가드: 상단·중단 방어, 하단은 맞음', () => {
  for (const [b, dir, lvl, blocked] of [['t', 'n', 'high', true], ['u', 'f', 'mid', true], ['l', 'n', 'low', false]]) {
    const s = setup();
    const ev = run(s, 30, (i) => (i === 5 ? press(b, dir) : inp()), () => inp({ guard: true }));
    const r = ev.find((e) => e.t === 'hit' || e.t === 'block');
    assert.ok(r, `${lvl} 판정 발생`);
    assert.equal(r.t, blocked ? 'block' : 'hit', `${lvl}`);
  }
});

test('앉아 가드: 하단 방어, 상단은 피함(헛침), 중단은 맞음', () => {
  for (const [b, dir, expect] of [['l', 'n', 'block'], ['t', 'n', 'none'], ['t', 'f', 'hit']]) {
    const s = setup();
    const ev = run(s, 30, (i) => (i === 5 ? press(b, dir) : inp()), () => inp({ guard: true, my: -1 }));
    const r = ev.find((e) => e.t === 'hit' || e.t === 'block');
    assert.equal(r ? r.t : 'none', expect, `${b}${dir}`);
  }
});

test('패링: 맞기 직전(8프레임 이내) 가드 톡', () => {
  const s = setup();
  // 찌르기는 입력 후 7프레임째 판정 → 4프레임째에 가드 누름
  const ev = run(s, 20, (i) => (i === 0 ? press('t') : inp()), (i) => (i >= 4 ? inp({ guard: true, gp: i === 4 }) : inp()));
  assert.ok(first(ev, 'parry'), '패링 발생');
  assert.equal(s.f[0].state, 'parried');
});

test('일찍 누른 가드는 패링이 아니라 일반 가드', () => {
  const s = setup();
  const ev = run(s, 30, (i) => (i === 10 ? press('t') : inp()), (i) => inp({ guard: true, gp: i === 0 }));
  assert.ok(first(ev, 'block'));
  assert.ok(!first(ev, 'parry'));
});

test('카운터: 상대 기술 발생 중에 맞히면 카운터(피해 1.25배)', () => {
  const s = setup();
  // P2가 내려베기(발생 15) 시작 → P1이 찌르기(발생 7)로 끊음
  const ev = run(s, 20, (i) => (i === 2 ? press('t') : inp()), (i) => (i === 0 ? press('d') : inp()));
  const h = ev.find((e) => e.t === 'hit' && e.a === 0);
  assert.ok(h && h.counter, '카운터 히트');
  assert.equal(s.f[1].hp, MAXHP - MV.stab.dmg * 1.25);
});

test('올려베기 띄우기 → 공중 콤보 보정', () => {
  const s = setup();
  let ev = run(s, 25, (i) => (i === 0 ? press('u', 'f') : inp()));
  const h = first(ev, 'hit');
  assert.ok(h && h.launch, '띄우기');
  assert.equal(s.f[1].state, 'launched');
  // 낙하 전에 찌르기 → 보정 적용(juggle 1 → 85%)
  while (s.f[0].state !== 'idle') s.step();
  const hp0 = s.f[1].hp;
  ev = run(s, 12, (i) => (i === 0 ? press('t') : inp()));
  const j = first(ev, 'hit');
  assert.ok(j && j.air, '공중 히트');
  assert.ok(Math.abs(hp0 - s.f[1].hp - MV.stab.dmg * 0.85) < 1e-9);
});

test('탭 → 가로 → 가로 연속기가 이어짐 (천천히 / 빠른 연타 모두)', () => {
  for (const [a, b] of [[6, 22], [3, 6]]) {
    const s = setup();
    const ev = run(s, 90, (i) => (i === 0 ? press('t') : i === a ? press('h') : i === b ? press('h') : inp()));
    const moves = ev.filter((e) => e.t === 'hit').map((e) => e.move);
    assert.deepEqual(moves, ['stab', 'combo2', 'combo3'], `입력 ${a},${b}`);
  }
});

test('뒤+아래로 긋기 투구 깨기: 슈퍼아머로 찌르기를 버팀', () => {
  const s = setup();
  const ev = run(s, 40, (i) => (i === 0 ? press('d', 'b') : inp()), (i) => (i === 8 ? press('t') : inp()));
  assert.ok(first(ev, 'armor'), '아머 발동');
  const h = ev.find((e) => e.t === 'hit' && e.a === 0);
  assert.ok(h && h.move === 'helm', '투구 깨기가 끊기지 않고 맞음');
});

test('뒤+대각선 다리 후리기: 하단 다운', () => {
  const s = setup();
  const ev = run(s, 30, (i) => (i === 0 ? press('l', 'b') : inp()));
  assert.equal(first(ev, 'hit').move, 'sweep');
  assert.equal(s.f[1].state, 'launched');
});

test('판정 각도: 옆으로 벗어난 상대에게 가로베기는 헛치고, 옆+가로 회전베기는 맞음', () => {
  // 공격자가 상대에서 1.1rad 빗나간 방향을 보고 있을 때 (추적 후에도 남는 각도)
  const aim = (s) => { s.f[0].yaw = 1.1 + MV.slash_h.track * MV.slash_h.startup; };
  let s = setup(1.2); aim(s);
  let ev = run(s, 30, (i) => (i === 0 ? press('h') : inp()));
  assert.ok(!first(ev, 'hit'), '가로베기 헛침');
  s = setup(1.2); aim(s);
  ev = run(s, 30, (i) => (i === 0 ? press('h', 's') : inp()));
  assert.equal(first(ev, 'hit')?.move, 'spin', '회전베기 적중');
});

test('옆+가로 회전베기는 옆걸음 중인 상대를 잡음', () => {
  const s = setup(1.3);
  const ev = run(s, 30, (i) => (i === 0 ? press('h', 's') : inp()), () => inp({ mx: 1 }));
  assert.equal(first(ev, 'hit')?.move, 'spin');
});

test('구르기 무적', () => {
  const s = setup();
  const ev = run(s, 20, (i) => (i === 0 ? press('h') : inp()), (i) => inp({ roll: i === 1, my: -1 }));
  assert.ok(!first(ev, 'hit'));
  assert.ok(first(ev, 'roll'));
});

test('스태미나: 가드 스태미나를 다 깎으면 가드 브레이크', () => {
  const s = setup();
  s.f[1].st = 20;
  const ev = run(s, 40, (i) => (i === 0 ? press('d', 'b') : inp()), () => inp({ guard: true }));
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
  run(s, 20, (i) => (i === 0 ? press('t') : inp()));
  assert.ok(s.f[1].hp < MAXHP);
  run(s, 90);
  assert.equal(s.f[1].hp, MAXHP);
  assert.equal(s.timer, 60);
});

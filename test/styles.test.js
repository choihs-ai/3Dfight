// 캐릭터별 전투 스타일 테스트 (불·물·번개·바람 고유 시스템 + 상성 균형)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Sim, AI, MAXHP, STYLE_DEF } from '../src/core/index.js';
import { movesOf } from '../src/core/moves.js';

const inp = (o = {}) => ({ mx: 0, my: 0, guard: false, gp: false, roll: false, btns: [], ...o });
const press = (b, dir = 'n', o = {}) => inp({ btns: [{ b, dir }], ...o });
function setup(styles, dist = 1.2) {
  const s = new Sim({ mode: 'match', seed: 1 });
  s.setStyles(styles);
  while (s.phase !== 'fight') s.step();
  s.f[0].reset(0, -dist / 2, 0);
  s.f[1].reset(0, dist / 2, Math.PI);
  s.drainEvents();
  return s;
}
function run(s, n, a = () => inp(), b = () => inp()) {
  const ev = [];
  for (let i = 0; i < n; i++) { s.step([a(i), b(i)]); ev.push(...s.drainEvents().map((e) => ({ ...e, i }))); }
  return ev;
}
const first = (ev, t) => ev.find((e) => e.t === t);

test('스타일마다 기술표가 다름: 같은 찌르기도 번개가 가장 빠르고 불이 가장 느림', () => {
  const st = (id) => movesOf(id).stab.startup;
  assert.ok(st('thunder') < st('water') && st('water') < st('fire'));
  assert.ok(movesOf('fire').slash_down.dmg > movesOf('water').slash_down.dmg);
  assert.ok(movesOf('fire').slash_down.armor, '불 내려베기는 슈퍼아머');
  assert.ok(!movesOf('water').slash_down.armor);
});

test('불 열기: 불씨 3개 → 내려베기가 작열(피해 1.4배) + 막아도 가드 브레이크', () => {
  let s = setup(['fire', 'water']);
  s.f[0].heat = 3;
  let ev = run(s, 50, (i) => (i === 0 ? press('d') : inp()));
  assert.ok(first(ev, 'blaze'), '작열 발동');
  const h = first(ev, 'hit');
  assert.ok(Math.abs(h.dealt - movesOf('fire').slash_down.dmg * 1.4) < 1e-9, '피해 1.4배');
  assert.equal(s.f[0].heat, 0, '불씨 소모');
  s = setup(['fire', 'water']);
  s.f[0].heat = 3;
  ev = run(s, 50, (i) => (i === 0 ? press('d') : inp()), () => inp({ guard: true }));
  assert.ok(first(ev, 'block')?.brk, '막아도 가드 브레이크');
});

test('불 열기: 맞히거나 막히게 하면 불씨가 쌓임', () => {
  const s = setup(['fire', 'water']);
  run(s, 30, (i) => (i === 0 ? press('t') : inp()));
  assert.equal(s.f[0].heat, 1);
  run(s, 60, (i) => (i === 0 ? press('t') : inp()), () => inp({ guard: true }));
  assert.equal(s.f[0].heat, 2);
});

test('불 불굴: 내려베기가 찌르기에 끊기지 않음 (물은 끊김)', () => {
  for (const [me, ok] of [['fire', true], ['water', false]]) {
    const s = setup([me, 'thunder']);
    const ev = run(s, 50, (i) => (i === 0 ? press('d') : inp()), (i) => (i === 4 ? press('t') : inp()));
    const mine = ev.find((e) => e.t === 'hit' && e.a === 0);
    assert.equal(!!mine, ok, me);
  }
});

test('물 물거울: 뒤+탭 자세에 중단이 들어오면 흘리고 자동 반격(다운)', () => {
  const s = setup(['water', 'fire']);
  const ev = run(s, 70, (i) => (i === 0 ? press('t', 'b') : inp()), (i) => (i === 2 ? press('h') : inp()));
  assert.ok(first(ev, 'mirror'), '물거울 발동');
  const h = ev.find((e) => e.t === 'hit' && e.a === 0);
  assert.equal(h?.move, 'mirror_cut', '반격');
  assert.ok(s.f[1].hp < MAXHP && !ev.some((e) => e.t === 'hit' && e.a === 1), '물은 안 맞음');
});

test('물 물거울: 하단에는 뚫려서 카운터로 맞음', () => {
  const s = setup(['water', 'fire']);
  const ev = run(s, 70, (i) => (i === 0 ? press('t', 'b') : inp()), (i) => (i === 2 ? press('l') : inp()));
  assert.ok(!first(ev, 'mirror'));
  const h = ev.find((e) => e.t === 'hit' && e.a === 1);
  assert.ok(h && h.counter, '하단 카운터');
});

test('흐름 연계 최대 수: 물 7 · 기본 5 · 불 4', () => {
  for (const [st, want] of [['water', 7], ['wind', 5], ['fire', 4]]) {
    const s = setup([st, 'fire'], 1.0);
    s.f[1].hp = 1e9;
    let mx = 0;
    for (let i = 0; i < 260; i++) { s.step([i % 10 === 0 ? press(['t', 'h', 'l'][(i / 10) % 3]) : inp(), inp()]); mx = Math.max(mx, s.f[0].chainN + 1); }
    assert.equal(mx, want, st);
  }
});

test('번개 발도: 0.5초 가만히 있으면 칼을 넣고, 탭 = 먼 거리 발도 일섬', () => {
  const s = setup(['thunder', 'fire'], 3.2);
  let ev = run(s, 32);
  assert.ok(first(ev, 'iaiReady'), '발도 준비');
  assert.ok(s.f[0].iaiReady);
  ev = run(s, 40, (i) => (i === 0 ? press('t') : inp()));
  assert.equal(first(ev, 'iai')?.move, 'iai_flash');
  assert.equal(first(ev, 'hit')?.move, 'iai_flash', '3.2m 밖에서 닿음');
});

test('번개 발도: 움직이거나 가드하면 풀림 → 그냥 찌르기 (닿지 않음)', () => {
  const s = setup(['thunder', 'fire'], 3.2);
  run(s, 32);
  run(s, 2, () => inp({ guard: true }));
  assert.ok(!s.f[0].iaiReady, '가드하면 풀림');
  const ev = run(s, 40, (i) => (i === 0 ? press('t') : inp()));
  assert.ok(!first(ev, 'iai') && !first(ev, 'hit'));
});

test('번개 뇌속: 맞은 순간 그으면 즉발 + 피해 증가, 늦게 그으면 보통 연계', () => {
  const go = (late) => {
    const s = setup(['thunder', 'fire']);
    const st = movesOf('thunder').stab.startup;
    // 찌르기가 맞는 프레임 = st, 히트스톱 동안(st+2) 긋기 vs 히트스톱 뒤(st+hitstop+6) 긋기
    const t2 = late ? st + movesOf('thunder').stab.hitstop + 6 : st + 2;
    const ev = run(s, 80, (i) => (i === 0 ? press('t') : i === t2 ? press('h') : inp()));
    return { jf: !!first(ev, 'jf'), hits: ev.filter((e) => e.t === 'hit' && e.a === 0) };
  };
  const a = go(false), b = go(true);
  assert.ok(a.jf && !b.jf, '저스트만 뇌속');
  assert.equal(a.hits.length, 2); assert.equal(b.hits.length, 2);
  assert.ok(a.hits[1].dealt > b.hits[1].dealt, '뇌속이 더 아픔');
  assert.ok(a.hits[1].i < b.hits[1].i, '뇌속이 더 빨리 맞음');
});

test('바람 선풍: 구르는 도중 베기 = 360° 선풍참 (등 뒤 상대도 맞음)', () => {
  const s = setup(['wind', 'fire'], 1.2);
  const ev = run(s, 50, (i) => (i === 0 ? inp({ roll: true, mx: 1 }) : i === 8 ? press('h') : inp()));
  assert.ok(first(ev, 'gale'), '선풍 발동');
  assert.equal(ev.find((e) => e.t === 'hit' && e.a === 0)?.move, 'gale');
});

test('바람 걸음: 막힌 베기의 후딜을 구르기로 끊음 (다른 캐릭터는 못 함)', () => {
  for (const [me, ok] of [['wind', true], ['fire', false]]) {
    const s = setup([me, 'water']);
    const m = movesOf(me).slash_down;
    const ev = run(s, 60, (i) => (i === 0 ? press('d') : inp({ roll: i === m.startup + m.active + m.hitstop + 2 })), () => inp({ guard: true }));
    assert.ok(first(ev, 'block'));
    assert.equal(!!first(ev, 'windStep'), ok, me);
  }
});

test('스타일 능력치: 맷집(받는 피해)과 구르기 비용이 다름', () => {
  assert.ok(STYLE_DEF.thunder.taken > STYLE_DEF.fire.taken);
  assert.ok(STYLE_DEF.wind.roll.stam < STYLE_DEF.fire.roll.stam);
  const s = setup(['fire', 'thunder']);
  run(s, 30, (i) => (i === 0 ? press('t') : inp()));
  assert.ok(Math.abs(MAXHP - s.f[1].hp - movesOf('fire').stab.dmg * STYLE_DEF.thunder.taken) < 1e-9);
});

test('상성 균형: CPU끼리 모든 조합에서 어느 스타일도 압도하지 않음 (보통 난이도)', () => {
  const S = ['fire', 'water', 'thunder', 'wind'], score = Object.fromEntries(S.map((x) => [x, 0])), N = 12;
  for (const a of S) for (const b of S) {
    if (a === b) continue;
    for (let k = 0; k < N; k++) {
      const sim = new Sim({ mode: 'match', seed: 500 + k * 13 });
      sim.setStyles([a, b]);
      const ai = [new AI(sim, 0, 'normal'), new AI(sim, 1, 'normal')];
      let n = 0;
      while (!sim.over && n++ < 60 * 60 * 6) sim.step([ai[0].input(), ai[1].input()]);
      assert.ok(sim.over, '경기가 끝나야 함');
      score[sim.wins[0] > sim.wins[1] ? a : b]++;
    }
  }
  const tot = S.length * (S.length - 1) * N;
  for (const x of S) { const r = score[x] / (tot / 2); assert.ok(r > 0.25 && r < 0.75, `${x} 승률 ${r.toFixed(2)}`); }
});

test('스타일 상태 저장/복원: 기술표·불씨·발도가 그대로 이어짐', () => {
  const s = setup(['fire', 'thunder']);
  s.f[0].heat = 2;
  run(s, 3, (i) => (i === 0 ? press('d') : inp()));
  const snap = s.serialize(), t = new Sim({ mode: 'match', seed: 9 });
  t.load(snap);
  assert.equal(t.f[0].move, movesOf('fire').slash_down);
  assert.equal(t.f[0].heat, 2);
  for (let i = 0; i < 60; i++) { s.step([inp(), inp()]); t.step([inp(), inp()]); }
  assert.equal(s.hash(), t.hash());
});

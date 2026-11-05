// 캐릭터별 전투 스타일 — 조작은 같고, 기술표·능력치·고유 시스템이 다름 (철권처럼 캐릭터마다 잘하는 사람이 따로)
// base = 스타일 미지정(테스트·기본값). 수치는 배율(1 = 기본)
//   dmg 주는 피해 · taken 받는 피해(맷집) · walk 이동 속도 · startup/recovery 발생·후딜 배율 · chip 가드 깎기
//   track 추적(유도) 배율 · arc 판정 각도 추가 · maxChain 흐름 연계 최대 수 · flowSkip 이어질 때 준비 동작 생략 비율
//   scaleFrom 연계 피해 보정이 시작되는 타수 · parryWin 패링 입력 허용 프레임 · parriedStun 패링당한 상대 경직
//   roll 구르기 { stam 스태미나, inv 무적 구간, dur 길이, speed 속도 } · cmd 추가/교체 커맨드 · mods 기술별 수정
//   traits 고유 시스템 (fighter.js·combat.js에서 처리)
const BASE = {
  dmg: 1, taken: 1, walk: 1, startup: 1, recovery: 1, chip: 1, track: 1, arc: 0,
  maxChain: 5, flowSkip: 0.25, scaleFrom: 2, parryWin: 8, parriedStun: 52, counterMul: 1.25,
  roll: { stam: 22, inv: [2, 15], dur: 26, speed: 7.2 },
  cmd: {}, mods: {}, traits: {}, skill: null, ai: null,
};
const def = (o) => ({ ...BASE, ...o, roll: { ...BASE.roll, ...(o.roll || {}) } });

export const STYLE_DEF = {
  base: def({}),
  // 🔥 화염류 — 파워형: 양손 대검. 느리고 짧지만 묵직하고 단단함, 큰 기술은 슈퍼아머.
  //   [열기] 맞히거나 막히게 할 때마다 불씨 +1 (최대 3) → 3개면 다음 내려찍기·염열 대도·화염 돌진이 '작열'
  //   [기술 버튼 = 화염 해방] 불씨를 터뜨려 주변을 날림 (불씨당 피해↑, 3개면 가드 브레이크)
  fire: def({
    taken: 1, walk: 0.88, chip: 1.2, maxChain: 4,
    roll: { stam: 26, inv: [3, 14], dur: 28, speed: 6.6 },
    cmd: { t: 'f_stab', h: 'f_slash', u: 'f_rise', d: 'f_down', l: 'f_low', ft: 'blaze_rush', fh: 'blaze_rush', bl: 'f_sweep', sh: 'f_spin', bd: 'f_helm' },
    skill: 'erupt',
    traits: { heat: 3, blaze: ['f_down', 'f_helm', 'blaze_rush'] },
    ai: { pref: 1.5, circle: 0.08, wait: 0.15, near: ['t', 'h', 'd', 'l', 'h:f', 'd:b'], far: ['h:f', 'd', 'l:b', 'h:s'] },
  }),
  // 🌊 수류 — 반격형: 빠르고 약한 베기가 끝없이 이어짐. 상대 공격을 받아넘김.
  //   [물거울] 뒤+탭 또는 기술 버튼 = 반격 자세. 상·중단을 흘리고 자동 반격(다운), 하단에는 뚫림.
  //   연계 최대 7, 패링 여유 12프레임(기본 8), 패링당한 상대 경직 더 김, 카운터 1.4배
  water: def({
    maxChain: 7, flowSkip: 0.4, scaleFrom: 4, parryWin: 12, parriedStun: 62, counterMul: 1.4,
    cmd: { t: 'w_stab', h: 'w_slash', u: 'w_rise', d: 'w_down', l: 'w_low', ft: 'w_thrust', bt: 'mirror', bl: 'w_sweep', sh: 'w_spin', bd: 'w_tide' },
    skill: 'mirror',
    traits: { mirror: true },
    ai: { pref: 2.0, circle: 0.15, wait: 0.35, near: ['t', 'h', 'l', 'h', 'u:f', 'h:s'], far: ['t:f', 'd:b', 'l:b', 'd'] },
  }),
  // ⚡ 뇌명류 — 속도·테크닉형: 한손 발도술. 가장 빠르고 멀리서 파고들지만 맷집이 약함.
  //   [발도] 기술 버튼(또는 0.5초 가만히) → 칼을 넣음. 다음 탭 = '발도 일섬'(먼 거리 순간 베기), 다른 베기도 빠르고 1.2배
  //   [뇌속] 베기가 맞은 순간(히트스톱 동안)에 다음을 그으면 거의 즉발 + 1.3배 + 연계 보정 없음
  thunder: def({
    taken: 1.06, walk: 1.15,
    roll: { stam: 20, inv: [2, 14], dur: 22, speed: 8.4 },
    cmd: { t: 't_stab', h: 't_slash', u: 't_rise', d: 't_down', l: 't_low', ft: 'raiko', bl: 't_slide', sh: 't_leap', bd: 't_heaven' },
    mods: { raiko: { lunge: 1.2 } },
    skill: 'iai',
    traits: { iai: 30, jf: 3 },
    ai: { pref: 3.0, circle: 0.1, wait: 0.2, near: ['t', 'h', 'l', 'h:s', 'u:f'], far: ['t:f', 'l:b', 'd:b', 'h:s'] },
  }),
  // 🍃 질풍류 — 기동형: 유도가 강한 회전베기와 뛰어서 피하는 기술, 싼 구르기.
  //   [선풍] 구르는 도중 아무 베기 = 선풍참(360°) · [바람 걸음] 닿은 베기의 후딜을 구르기로 끊음
  //   [기술 버튼 = 질풍 걸음] 상대 옆으로 크게 돌아 들어가는 무적 이동 (도중에 베기 = 선풍참)
  wind: def({
    taken: 0.92, walk: 1.14, track: 1.3, arc: 0.1,
    roll: { stam: 13, inv: [2, 19], dur: 22, speed: 8 },
    cmd: { t: 'n_stab', h: 'n_slash', u: 'n_rise', d: 'n_down', l: 'n_low', ft: 'n_dash', bl: 'n_sweep', sh: 'n_spin', bd: 'n_sky' },
    skill: 'dash',
    traits: { rollAtk: [5, 20], rollCancel: 13 },
    ai: { aggro: 0.18, pref: 2.0, circle: 0.18, wait: 0.1, near: ['t', 'h', 'h:s', 'd', 'l'], far: ['t:f', 'd:b', 'h:s', 'l:b'] },
  }),
};
export const styleOf = (id) => STYLE_DEF[id] || STYLE_DEF.base;

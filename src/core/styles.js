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
  cmd: {}, mods: {}, traits: {},
};
const def = (o) => ({ ...BASE, ...o, roll: { ...BASE.roll, ...(o.roll || {}) } });

export const STYLE_DEF = {
  base: def({}),
  // 🔥 화염류 — 파워·압박: 느리지만 묵직하고 단단함. 큰 기술은 슈퍼아머로 버팀.
  //   [열기] 때리거나 막히게 할 때마다 불씨 +1 (최대 3) → 3개면 다음 내려베기·투구 깨기·화염 돌진이 '작열'
  //          (피해 1.4배 + 막아도 가드 브레이크)
  fire: def({
    dmg: 1.05, taken: 0.95, walk: 0.9, startup: 1.08, recovery: 1.05, chip: 1.5, maxChain: 4,
    roll: { stam: 26, inv: [3, 14], dur: 28, speed: 6.6 },
    cmd: { fh: 'blaze_rush' },
    mods: { slash_down: { armor: [4, 17] }, helm: { dmg: 24 } },
    traits: { heat: 3, blaze: ['slash_down', 'helm', 'blaze_rush'] },
  }),
  // 🌊 수류 — 반격·연계: 한 방은 약하지만 끊기지 않고 길게 이어짐. 상대 공격을 받아넘김.
  //   [물거울] 뒤+탭 = 반격 자세. 자세 중 상단·중단 공격을 받으면 흘리고 자동 반격(다운). 하단에는 뚫림.
  //   패링 입력 여유 12프레임(기본 8), 패링당한 상대 경직 더 김, 카운터 피해 1.4배
  water: def({
    dmg: 0.9, maxChain: 7, flowSkip: 0.4, scaleFrom: 4, parryWin: 12, parriedStun: 62, counterMul: 1.4,
    cmd: { bt: 'mirror' },
    traits: { mirror: true },
  }),
  // ⚡ 뇌명류 — 속도·발도술: 가장 빠르지만 맷집이 약함. 손이 빠르고 타이밍이 정확할수록 강해짐.
  //   [발도] 스틱을 놓고 0.5초 가만히 있으면 칼을 칼집에 넣음 → 다음 탭 = '발도 일섬'(먼 거리 순간 베기),
  //          다른 베기도 준비 동작이 짧아지고 피해 1.2배. 움직이거나 가드하면 풀림.
  //   [뇌속] 베기가 맞은 순간(히트스톱 동안)에 다음을 그으면 '뇌속 연계': 거의 즉발 + 피해 1.3배 + 연계 보정 없음
  thunder: def({
    dmg: 0.95, taken: 1.12, walk: 1.15, startup: 0.82, recovery: 0.95,
    roll: { stam: 20, inv: [2, 14], dur: 22, speed: 8.4 },
    cmd: { ft: 'raiko' },
    traits: { iai: 30, jf: 3 },
  }),
  // 🍃 질풍류 — 기동·회피: 빠른 이동과 싼 구르기, 유도가 강한 베기. 피하면서 때림.
  //   [선풍] 구르는 도중 아무 베기 = '선풍참'(360° 회전베기)
  //   [바람 걸음] 베기가 닿은 뒤(맞든 막히든) 후딜을 구르기로 끊을 수 있음 → 막혀도 안전하게 빠짐
  wind: def({
    dmg: 1.06, taken: 0.95, walk: 1.12, startup: 0.92, track: 1.7, arc: 0.2,
    roll: { stam: 13, inv: [2, 19], dur: 22, speed: 8 },
    traits: { rollAtk: [5, 20], rollCancel: 13 },
  }),
};
export const styleOf = (id) => STYLE_DEF[id] || STYLE_DEF.base;

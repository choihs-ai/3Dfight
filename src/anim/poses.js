// 코드로 만든 자세 (프로토타입) — ③단계에서 GLB 애니메이션으로 교체 예정
export const STANCE = { lift: 0, hipsX: 0, hipsY: -0.35, hipsZ: 0, spineX: 0.08, spineY: 0, spineZ: 0, chestX: 0.05, chestY: 0.05, chestZ: 0, headX: 0.08, headY: 0.3, headZ: 0,
  shLX: -0.55, shLY: 0, shLZ: -0.3, elLX: -2.1, shRX: -0.4, shRY: 0, shRZ: 0.35, elRX: -2.25,
  hipLX: -0.35, hipLY: 0, hipLZ: 0.08, knLX: 0.4, hipRX: 0.3, hipRY: 0, hipRZ: -0.08, knRX: 0.5 };
export const KEYS = Object.keys(STANCE);
export const full = (p) => Object.assign({}, STANCE, p);
export const P_BLOCK = full({ shLX: -1.05, shLZ: -0.55, shLY: 0.25, elLX: -2.45, shRX: -1.05, shRZ: 0.55, shRY: -0.25, elRX: -2.45, spineX: 0.2, headX: 0.25, hipsY: -0.2, headY: 0.2, chestY: 0 });
export const P_CROUCH = full({ shLX: -1.05, shLZ: -0.55, shLY: 0.25, elLX: -2.45, shRX: -1.05, shRZ: 0.55, shRY: -0.25, elRX: -2.45, headX: 0.25, hipsY: -0.2, headY: 0.2, chestY: 0, hipLX: -1.25, knLX: 2.1, hipRX: -0.45, knRX: 2.2, spineX: 0.4 });
export const P_STAGGER = full({ spineX: -0.5, chestX: -0.15, headX: -0.35, shLX: -2.3, shLZ: 0.7, elLX: -0.5, shRX: -2.3, shRZ: -0.7, elRX: -0.5, knLX: 0.7, knRX: 0.7, hipsY: 0, headY: 0, chestY: 0 });
export const P_HIT = {
  high: full({ spineX: -0.35, chestX: -0.15, headX: -0.5, shLX: -0.2, shLZ: 0.3, elLX: -1.2, shRX: -0.2, shRZ: -0.3, elRX: -1.2 }),
  mid: full({ spineX: 0.5, chestX: 0.25, headX: 0.25, shLX: -0.6, elLX: -1.6, shRX: -0.6, elRX: -1.6, knLX: 0.8, knRX: 0.8 }),
  low: full({ hipLX: -0.1, knLX: 0.95, hipRX: 0.1, knRX: 1.4, spineX: 0.3, headX: 0.1, hipsZ: 0.12 }),
  stagger: P_STAGGER,
};
export const P_AIR = full({ spineX: -0.5, chestX: -0.2, headX: -0.5, shLX: -2.2, shLZ: 0.7, elLX: -0.6, shRX: -2.2, shRZ: -0.7, elRX: -0.6, hipLX: -0.8, knLX: 0.9, hipRX: -0.4, knRX: 0.6, hipsY: 0, headY: 0, chestY: 0 });
export const P_DOWN = full({ spineX: -0.05, chestX: 0, headX: -0.2, shLX: -0.15, shLZ: 0.55, elLX: -0.3, shRX: -0.15, shRZ: -0.55, elRX: -0.3, hipLX: -0.15, hipLZ: 0.15, knLX: 0.2, hipRX: -0.35, hipRZ: -0.1, knRX: 0.7, hipsY: 0, headY: 0, chestY: 0 });
export const P_TUCK = full({ spineX: 0.75, chestX: 0.3, headX: 0.5, shLX: -1, elLX: -2.2, shRX: -1, elRX: -2.2, hipLX: -2.1, knLX: 2.4, hipRX: -2.1, knRX: 2.4, hipsY: 0, headY: 0, chestY: 0 });
export const P_WIN = full({ shRX: -3, shRZ: 0.1, elRX: -0.3, shLX: -0.3, shLZ: -0.1, elLX: -1.8, hipsY: 0, headY: 0, chestY: 0, spineX: -0.05, headX: -0.2, hipLX: -0.05, knLX: 0.05, hipRX: 0.05, knRX: 0.05 });

// 기술별 키프레임 [프레임, 자세]
const K_JAB = { shLX: -1.55, shLY: 0.3, shLZ: -0.05, elLX: -0.08, hipsY: -0.55, chestY: -0.05, spineX: 0.12, headY: 0.5 };
const K_STR = { shRX: -1.55, shRY: -0.28, shRZ: 0.05, elRX: -0.08, hipsY: 0.25, chestY: 0.1, spineX: 0.18, hipRX: 0.45, headY: -0.3 };
const K_HK1 = { hipRX: -0.7, hipRZ: -0.6, knRX: 1.8, hipsY: 0.3, spineZ: 0.1 };
const K_HK2 = { hipRX: -0.9, hipRZ: -1.9, knRX: 0.1, hipsY: 1.0, hipsZ: -0.3, spineZ: 0.18, chestY: -0.5, headY: -0.6, shLX: -0.9, elLX: -1.6, shRX: 0.3, shRZ: 0.6, elRX: -0.5, hipLX: 0, knLX: 0.2 };
const K_LK = { hipLX: -0.95, hipLZ: 0.15, hipLY: -0.4, knLX: 0.15, hipsY: 0.1, spineX: -0.05, knRX: 0.7, hipRX: 0.2, shLX: -0.7, elLX: -2 };
const K_UP = { hipLX: -0.4, knLX: 0.3, hipRX: 0.35, knRX: 0.2, spineX: -0.25, chestX: -0.1, chestY: 0.15, headX: -0.2, shRX: -2.75, shRZ: 0.2, shRY: -0.2, elRX: -0.7, shLX: -0.5, elLX: -2, lift: 0.05, headY: 0 };
const K_FK = { hipLX: -1.55, hipLY: -0.25, knLX: 0.05, hipsY: -0.15, spineX: -0.3, shLX: -0.7, shRX: -0.6, knRX: 0.3 };
const K_SW = { hipLX: -1.35, knLX: 2.3, hipRX: -0.15, hipRZ: -1.45, knRX: 0.05, spineX: 0.45, shLX: -1.2, shLZ: 0.3, elLX: -0.3, shRX: -0.8, elRX: -0.5, headY: 0 };
const K_HM = { hipRX: -0.6, hipRZ: -1.5, knRX: 0.2, hipsZ: -0.25, spineZ: 0.1, chestY: -0.4, headY: -0.4, shLX: -0.9, elLX: -1.6, shRX: 0.3, shRZ: 0.6, elRX: -0.5, knLX: 0.25, hipLX: -0.1 };
const K_HA = { shLX: -2.95, shLZ: -0.1, elLX: -0.6, shRX: -2.95, shRZ: 0.1, elRX: -0.6, spineX: -0.35, chestX: -0.1, headX: -0.15, hipsY: 0, headY: 0, chestY: 0, lift: 0.04, hipLX: -0.3, knLX: 0.2, hipRX: 0.2, knRX: 0.2 };
const K_HB = { shLX: -1.25, shLZ: -0.35, elLX: -0.3, shRX: -1.25, shRZ: 0.35, elRX: -0.3, spineX: 0.6, chestX: 0.15, headX: 0.1, hipsY: 0, headY: 0, chestY: 0, hipLX: -0.9, knLX: 1.4, hipRX: 0.3, knRX: 1.2 };
export const MOVE_KEYS = {
  jab: [[3, { shLX: -0.9, elLX: -1.9, hipsY: -0.4 }], [7, K_JAB], [10, K_JAB]],
  onetwo: [[4, { shRX: -0.7, elRX: -2, hipsY: -0.5 }], [8, K_STR], [11, K_STR]],
  onetwokick: [[7, K_HK1], [14, K_HK2], [18, K_HK2]],
  straight: [[5, { shRX: -0.7, elRX: -2, hipsY: -0.5 }], [10, K_STR], [13, K_STR]],
  lowkick: [[6, { hipLX: -0.5, knLX: 1.2, hipsY: -0.2 }], [12, K_LK], [15, K_LK]],
  highkick: [[8, K_HK1], [15, K_HK2], [19, K_HK2]],
  uppercut: [[9, { hipLX: -0.9, knLX: 1.6, hipRX: 0.2, knRX: 1.4, spineX: 0.45, chestY: 0.35, shRX: 0.25, shRZ: 0.2, elRX: -1.9, shLX: -0.9, elLX: -2.2, headY: 0 }], [15, K_UP], [19, K_UP]],
  frontkick: [[7, { hipLX: -1.3, knLX: 1.9, hipsY: -0.1, spineX: -0.05 }], [13, K_FK], [17, K_FK]],
  sweep: [[9, { hipLX: -1.35, knLX: 2.3, hipRX: -0.5, knRX: 2.2, hipsY: 0.9, spineX: 0.5, shLX: -1, elLX: -0.8, shRX: -0.9, elRX: -0.8, headY: -0.6 }], [18, Object.assign({ hipsY: 0.2 }, K_SW)], [23, Object.assign({ hipsY: -1.1 }, K_SW)]],
  homing: [[8, { hipRX: -0.6, hipRZ: -0.6, knRX: 1.8, hipsY: -0.6 }], [17, Object.assign({ hipsY: 0.6 }, K_HM)], [22, Object.assign({ hipsY: 1.4 }, K_HM)]],
  hammer: [[14, K_HA], [20, Object.assign({}, K_HA, { shLX: -3.1, shRX: -3.1, spineX: -0.42 })], [24, K_HB], [28, K_HB]],
};

// 코드로 만든 검술 자세 (임시) — Mixamo 모션이 들어오면 교체
// 각도 규칙: 어깨 X 음수 = 팔을 앞으로 듦, 팔꿈치 X 음수 = 굽힘, 어깨 Z: 왼팔 음수/오른팔 양수 = 안쪽
// wrRX: 손목에서 칼날 기울기 (0 = 손등 앞쪽, +1.57 = 팔뚝 연장선), elRY: 팔뚝 비틀기(칼날 눕히기)
export const STANCE = { lift: 0, hipsX: 0, hipsY: -0.35, hipsZ: 0, spineX: 0.1, spineY: 0, spineZ: 0, chestX: 0.05, chestY: 0.25, chestZ: 0, headX: 0.08, headY: 0.1, headZ: 0,
  shLX: -0.8, shLY: 0, shLZ: -0.6, elLX: -1.0, elLY: 0, shRX: -0.85, shRY: 0, shRZ: 0.3, elRX: -0.9, elRY: 0,
  wrRX: 1.05, wrRY: 0, wrRZ: 0,
  hipLX: -0.35, hipLY: 0, hipLZ: 0.08, knLX: 0.4, hipRX: 0.3, hipRY: 0, hipRZ: -0.08, knRX: 0.5 };
export const KEYS = Object.keys(STANCE);
export const full = (p) => Object.assign({}, STANCE, p);
const GUARD_ARMS = { shLX: -1.25, shLZ: -0.7, elLX: -1.3, shRX: -1.3, shRZ: 0.25, elRX: -1.2, elRY: -1.35, wrRX: 1.2, chestY: 0.1, headY: 0.1 };
export const P_BLOCK = full({ ...GUARD_ARMS, spineX: 0.2, headX: 0.25, hipsY: -0.2 });
export const P_CROUCH = full({ ...GUARD_ARMS, headX: 0.25, hipsY: -0.2, hipLX: -1.25, knLX: 2.1, hipRX: -0.45, knRX: 2.2, spineX: 0.4 });
export const P_STAGGER = full({ spineX: -0.5, chestX: -0.15, headX: -0.35, shLX: -2.3, shLZ: 0.7, elLX: -0.5, shRX: -2.3, shRZ: -0.7, elRX: -0.5, wrRX: 0.4, knLX: 0.7, knRX: 0.7, hipsY: 0, headY: 0, chestY: 0 });
export const P_HIT = {
  high: full({ spineX: -0.35, chestX: -0.15, headX: -0.5, shLX: -0.4, shLZ: 0.2, elLX: -1.2, shRX: -0.4, shRZ: -0.2, elRX: -1.0, wrRX: 0.6 }),
  mid: full({ spineX: 0.5, chestX: 0.25, headX: 0.25, shLX: -0.6, elLX: -1.6, shRX: -0.6, elRX: -1.4, wrRX: 1.4, knLX: 0.8, knRX: 0.8 }),
  low: full({ hipLX: -0.1, knLX: 0.95, hipRX: 0.1, knRX: 1.4, spineX: 0.3, headX: 0.1, hipsZ: 0.12 }),
  stagger: P_STAGGER,
};
export const P_AIR = full({ spineX: -0.5, chestX: -0.2, headX: -0.5, shLX: -2.2, shLZ: 0.7, elLX: -0.6, shRX: -2.2, shRZ: -0.7, elRX: -0.6, wrRX: 0.3, hipLX: -0.8, knLX: 0.9, hipRX: -0.4, knRX: 0.6, hipsY: 0, headY: 0, chestY: 0 });
export const P_DOWN = full({ spineX: -0.05, chestX: 0, headX: -0.2, shLX: -0.15, shLZ: 0.55, elLX: -0.3, shRX: -0.15, shRZ: -0.55, elRX: -0.3, wrRX: 0.2, hipLX: -0.15, hipLZ: 0.15, knLX: 0.2, hipRX: -0.35, hipRZ: -0.1, knRX: 0.7, hipsY: 0, headY: 0, chestY: 0 });
export const P_TUCK = full({ spineX: 0.75, chestX: 0.3, headX: 0.5, shLX: -1, elLX: -2.2, shRX: -1, elRX: -2.2, wrRX: 1.5, hipLX: -2.1, knLX: 2.4, hipRX: -2.1, knRX: 2.4, hipsY: 0, headY: 0, chestY: 0 });
export const P_WIN = full({ shRX: -2.9, shRZ: 0.15, elRX: -0.25, wrRX: 0.6, shLX: -0.2, shLZ: -0.1, elLX: -0.4, hipsY: -0.6, headY: 0.3, chestY: 0.2, spineX: -0.05, headX: -0.2, hipLX: -0.25, knLX: 0.15, hipRX: 0.25, knRX: 0.1 });

// ---- 기술 키프레임 [프레임, 자세] ----
const LUNGE = { hipLX: -1.0, knLX: 0.6, hipRX: 0.65, knRX: 0.25, hipsY: -0.55 };
const CROUCH = { hipLX: -1.2, knLX: 1.9, hipRX: -0.2, knRX: 1.9, lift: -0.05 };
// 칼을 옆으로 눕힌 두 손 자세 (가로베기용) — side: +1 = 몸 오른쪽에서 시작, -1 = 왼쪽
const sideArms = (side, high = 1.35) => ({ shLX: -high, shLZ: -0.75 + side * 0.25, elLX: -0.7, shRX: -high, shRZ: 0.3 + side * 0.25, elRX: -0.45, elRY: -1.45, wrRX: 1.35 });
const K_STAB0 = { shLX: -0.55, elLX: -1.7, shRX: -0.6, elRX: -1.7, wrRX: 1.5, hipsY: -0.1, spineX: 0.05 };
const K_STAB1 = { ...LUNGE, shLX: -1.45, shLZ: -0.35, elLX: -0.25, shRX: -1.5, shRZ: 0.1, elRX: -0.05, wrRX: 1.57, spineX: 0.25, chestY: 0.15, headY: 0.25 };
const K_OVER0 = { shLX: -2.9, shLZ: -0.35, elLX: -0.7, shRX: -2.95, shRZ: 0.2, elRX: -0.6, wrRX: 0.25, spineX: -0.2, chestX: -0.1, headX: -0.1, chestY: 0.1 };
const K_OVER1 = { ...LUNGE, shLX: -1.05, shLZ: -0.5, elLX: -0.3, shRX: -1.1, shRZ: 0.15, elRX: -0.1, wrRX: 1.45, spineX: 0.5, chestX: 0.15, chestY: 0.1, headY: 0.15 };
export const MOVE_KEYS = {
  stab: [[3, K_STAB0], [7, K_STAB1], [10, K_STAB1]],
  combo2: [[4, { ...sideArms(-1), chestY: 1.0, hipsY: 0.2 }], [8, { ...sideArms(1), chestY: -0.9, hipsY: -0.7, ...LUNGE }], [11, { ...sideArms(1), chestY: -1.0, hipsY: -0.7 }]],
  combo3: [[7, { ...sideArms(1, 1.55), chestY: -1.1, hipsY: 0.6 }], [14, { ...sideArms(-1, 1.55), chestY: 1.0, hipsY: -1.5, ...LUNGE }], [18, { ...sideArms(-1, 1.5), chestY: 1.1, hipsY: -1.7 }]],
  slash_h: [[5, { ...sideArms(1), chestY: -0.9, hipsY: 0.1 }], [10, { ...sideArms(-1), chestY: 1.0, hipsY: -0.9, ...LUNGE }], [13, { ...sideArms(-1), chestY: 1.1, hipsY: -0.9 }]],
  slash_low: [[6, { ...sideArms(1, 0.55), ...CROUCH, chestY: -0.9, spineX: 0.45 }], [12, { ...sideArms(-1, 0.55), ...CROUCH, chestY: 1.0, spineX: 0.5, hipsY: -0.7 }], [15, { ...sideArms(-1, 0.55), ...CROUCH, chestY: 1.1, spineX: 0.5, hipsY: -0.7 }]],
  slash_down: [[8, K_OVER0], [15, K_OVER1], [19, K_OVER1]],
  slash_up: [[9, { ...CROUCH, shLX: 0.15, shLZ: -0.45, elLX: -0.3, shRX: 0.2, shRZ: 0.2, elRX: -0.2, wrRX: 1.75, spineX: 0.55, chestY: 0.4 }],
    [15, { shLX: -2.75, shLZ: -0.3, elLX: -0.3, shRX: -2.8, shRZ: 0.15, elRX: -0.2, wrRX: 0.9, spineX: -0.3, chestX: -0.1, headX: -0.25, lift: 0.06, hipLX: -0.4, knLX: 0.3, hipRX: 0.35, knRX: 0.2 }],
    [19, { shLX: -2.85, shLZ: -0.3, elLX: -0.3, shRX: -2.9, shRZ: 0.15, elRX: -0.2, wrRX: 0.8, spineX: -0.3, headX: -0.25, lift: 0.05 }]],
  thrust: [[7, { ...K_STAB0, shRX: -0.4, elRX: -2.0, hipsY: 0.3 }], [13, { ...K_STAB1, hipLX: -1.3, knLX: 0.5, hipRX: 0.85, knRX: 0.1, spineX: 0.4 }], [17, { ...K_STAB1, hipLX: -1.3, knLX: 0.5, hipRX: 0.85, knRX: 0.1, spineX: 0.4 }]],
  sweep: [[9, { ...sideArms(1, 0.35), ...CROUCH, hipLX: -1.35, knLX: 2.3, hipRX: -0.5, knRX: 2.2, hipsY: 0.9, spineX: 0.55 }],
    [18, { ...sideArms(-1, 0.3), ...CROUCH, hipLX: -1.35, knLX: 2.3, hipRX: -0.15, hipRZ: -1.2, knRX: 0.1, hipsY: 0.2, spineX: 0.5 }],
    [23, { ...sideArms(-1, 0.3), ...CROUCH, hipLX: -1.35, knLX: 2.3, hipRX: -0.15, hipRZ: -1.2, knRX: 0.1, hipsY: -1.1, spineX: 0.5 }]],
  spin: [[8, { ...sideArms(1, 1.45), hipsY: 0.8, chestY: -0.6, shRZ: -0.4 }], [17, { ...sideArms(-1, 1.5), hipsY: -1.4, chestY: 0.8, shRZ: -0.9, ...LUNGE }], [22, { ...sideArms(-1, 1.5), hipsY: -2.2, chestY: 0.9, shRZ: -0.9 }]],
  helm: [[14, { ...K_OVER0, lift: 0.04 }], [20, { ...K_OVER0, shLX: -3.1, shRX: -3.15, spineX: -0.42, lift: 0.08 }],
    [24, { ...K_OVER1, shLX: -0.8, shRX: -0.85, spineX: 0.7, hipLX: -0.9, knLX: 1.4, hipRX: 0.3, knRX: 1.2, wrRX: 1.55 }],
    [28, { ...K_OVER1, shLX: -0.8, shRX: -0.85, spineX: 0.7, hipLX: -0.9, knLX: 1.4, hipRX: 0.3, knRX: 1.2, wrRX: 1.55 }]],
};

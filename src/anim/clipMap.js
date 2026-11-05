// 대전 상태 → Mixamo 클립 고르기 (순수 로직, three 의존 없음)
// 클립 구간: t0(시작) → hit(칼이 가장 빠른 순간 = 판정 발생) → t1(끝)
// 기술의 발생·지속·후딜 프레임에 맞춰 이 구간을 늘이고 줄여서 재생 → 모션이 바뀌어도 판정 타이밍은 그대로
export const CLIP_CUTS = {
  stab: { clip: 'stab', t0: 0.12, hit: 0.38, t1: 0.85 },
  slash: { clip: 'slash', t0: 0.2, hit: 0.62, t1: 1.15 },
  slash3: { clip: 'slash3', t0: 0.35, hit: 0.86, t1: 1.45 },
  slash4: { clip: 'slash4', t0: 0.4, hit: 0.72, t1: 1.2 },
  slash5: { clip: 'slash5', t0: 0.1, hit: 0.45, t1: 1.0 },
  attack: { clip: 'attack', t0: 0.15, hit: 0.43, t1: 1.0 },
  kick2: { clip: 'kick2', t0: 0.3, hit: 0.75, t1: 1.3 },
  slide: { clip: 'slide', t0: 0.75, hit: 1.25, t1: 2.0 },
  spinA: { clip: 'spin', t0: 0.0, hit: 0.43, t1: 0.9 },
  spinB: { clip: 'spin', t0: 0.6, hit: 1.08, t1: 1.6 },
  jump: { clip: 'jump_attack', t0: 0.2, hit: 1.2, t1: 2.0 },
  inward: { clip: 'inward', t0: 0.75, hit: 1.18, t1: 1.75 },
  kickslash: { clip: 'kick', t0: 0.05, hit: 0.32, t1: 0.75 },
  overhead: { clip: 'casting', t0: 1.95, hit: 2.33, t1: 2.85 }, // 머리 위로 들었다 정면 바닥까지 수직 내려찍기
  mirror: { clip: 'guard', t0: 0.0, hit: 0.18, t1: 0.45 }, // 물거울: 칼을 세워 받는 자세 유지
  erupt: { clip: 'power_up', t0: 0.0, hit: 0.45, t1: 1.3 },      // 불 화염 해방: 기를 터뜨림
  ss2a: { clip: 'ss_slash2', t0: 0.3, hit: 0.67, t1: 0.95 },     // 한손 연속베기 1타
  ss2c: { clip: 'ss_slash2', t0: 1.6, hit: 2.43, t1: 2.95 },     // 한손 연속베기 마지막: 뛰어 내려찍기
  ss_slam: { clip: 'ss_cast', t0: 1.25, hit: 1.73, t1: 2.5 },    // 들었다가 땅까지 내려찍기
  ss_leap: { clip: 'ss_slash4', t0: 0.45, hit: 1.4, t1: 2.0 },   // 뛰어오르며 베기
  ss_smash: { clip: 'ss_attack1', t0: 0.35, hit: 1.17, t1: 1.9 }, // 높이 뛰어 내려찍기
  draw_cut: { clip: 'sw_draw1', t0: 0.0, hit: 0.2, t1: 0.5 },     // 칼집에서 뽑으며 베기 (발도)
  // 한손검 (방패 팩, 왼팔은 칼집 쥔 자세로 교체)
  ss_slash: { clip: 'ss_slash', t0: 0.2, hit: 0.56, t1: 1.1 },
  ss_low: { clip: 'ss_slash2', t0: 0.55, hit: 0.88, t1: 1.3 },
  ss_slash3: { clip: 'ss_slash3', t0: 0.45, hit: 0.8, t1: 1.3 },
  ss_crouch: { clip: 'ss_slash5', t0: 0.2, hit: 0.55, t1: 1.0 },
  ss_over: { clip: 'ss_attack2', t0: 0.2, hit: 0.55, t1: 1.05 },
  ss_mid: { clip: 'ss_attack3', t0: 0.4, hit: 0.78, t1: 1.3 },
  ss_quick: { clip: 'ss_attack4', t0: 0.12, hit: 0.28, t1: 0.7 },
};

// 검술 스타일: 원소 캐릭터마다 다른 자세·대기 동작·기술 모션
// 기술마다 여러 개면 쓸 때마다 번갈아 나옴 (같은 기술도 매번 같지 않게)
// 아래로 긋기(slash_down)는 모든 캐릭터가 수직 내려찍기 하나만 씀 (다른 후보는 칼끝이 좌우로 1m 넘게 휘어서 제외)
// { L: [...], R: [...] } = 그은 방향대로: L = 칼이 왼쪽으로 지나감(← 긋기), R = 오른쪽으로 지나감(→ 긋기)
//   (모션별 칼끝 이동 방향을 계산해서 분류함 — 화면은 등 뒤 시점이라 캐릭터 왼쪽 = 화면 왼쪽)
const BASE = {
  stab: ['stab'],
  combo2: { L: ['kickslash'], R: ['slash4'] },
  combo3: { L: ['spinA'], R: ['slash3'] },
  slash_h: { L: ['slash', 'kickslash'], R: ['slash3', 'slash4'] },
  spin: { L: ['spinA'], R: ['slash4'] },
  slash_low: ['slash5'], slash_down: ['overhead'], slash_up: ['attack'], thrust: ['kick2'], sweep: ['slide'], helm: ['jump'],
  // 캐릭터 전용 기술
  blaze_rush: { L: ['spinA'], R: ['slash3'] }, mirror: ['mirror'], mirror_cut: { L: ['spinA'], R: ['slash4'] },
  iai_flash: ['draw_cut'], raiko: ['stab', 'ss_quick'], gale: { L: ['spinA'], R: ['spinB'] },
  // 🔥 불: 양손 대검 — 크고 무거운 동작
  f_stab: ['stab'], f_combo2: { L: ['kickslash'], R: ['slash4'] }, f_combo3: { L: ['spinA'], R: ['slash3'] },
  f_slash: { L: ['slash', 'kickslash'], R: ['slash3'] }, f_rise: ['attack'], f_down: ['overhead'], f_low: ['slash5'],
  f_sweep: ['slide'], f_spin: { L: ['spinA'], R: ['spinB'] }, f_helm: ['jump'], f_erupt: ['erupt'],
  // 🌊 물: 양손·한손을 섞어 흐르는 연속 동작
  w_stab: ['stab'], w_flow2: { L: ['kickslash'], R: ['ss_mid'] }, w_flow3: { L: ['spinA'], R: ['slash4'] }, w_flow4: ['spinB'],
  w_slash: { L: ['spinA', 'slash'], R: ['slash4', 'ss_slash3'] }, w_rise: ['attack'], w_down: ['overhead'], w_low: ['ss_crouch'],
  w_thrust: ['stab'], w_sweep: ['slide'], w_spin: ['spinB'], w_tide: { L: ['slash'], R: ['slash3'] },
  // ⚡ 번개: 한손 발도술 — 짧고 날카로운 동작, 뛰어서 내려찍기
  t_stab: ['ss_quick'], t_rai2: ['ss2a'], t_rai3: ['ss2c'], t_slash: { L: ['ss_low', 'ss_crouch'], R: ['inward', 'ss_mid'] },
  t_rise: ['ss_slash3'], t_down: ['ss_slam'], t_low: ['ss_crouch'], t_slide: ['slide'], t_leap: ['ss_leap'], t_heaven: ['ss_smash'],
  // 🍃 바람: 회전과 도약
  n_stab: ['stab'], n_gale2: { L: ['spinA'], R: ['ss_slash3'] }, n_gale3: ['spinB'], n_slash: { L: ['spinA', 'kick2'], R: ['ss_slash3', 'slash3'] },
  n_rise: ['attack'], n_down: ['ss_leap'], n_low: ['slash5'], n_dash: ['stab'], n_sweep: ['slide'], n_spin: { L: ['spinA'], R: ['spinB'] }, n_sky: ['ss_smash'],
};
// loco: 이동·가드 자세 (없으면 양손 대검 기본)
const ONE_HAND_LOCO = { walk_f: 'ss_walk_f', walk_b: 'ss_walk_b', strafe_l: 'ss_strafe1', strafe_r: 'ss_strafe2', run: 'ss_run', guard: 'ss_block_idle', crouch: 'ss_crouch_idle' };
export const STYLES = {
  // 불: 양손 대검 — 묵직한 기본 자세
  fire: { idle: 'idle', fidget: ['idle3', 'idle4'], loco: {}, moves: BASE },
  // 물: 칼끝을 낮춘 차분한 자세
  water: { idle: 'idle2', fidget: ['idle5'], loco: { guard: 'gs_block3' }, moves: BASE },
  // 번개: 한손 — 왼손은 칼집, 낮고 빠른 걸음
  thunder: { idle: 'ss_idle', fidget: ['ss_idle4'], loco: ONE_HAND_LOCO, moves: BASE },
  // 바람: 가벼운 한손 자세 + 다른 달리기
  wind: { idle: 'ss_idle4', fidget: ['idle3'], loco: { run: 'gs_run2', walk_f: 'ss_walk_f', walk_b: 'ss_walk_b' }, moves: BASE },
};

// side: 'L' | 'R' (그은 방향)
export function moveCut(styleId, moveId, uid, side = 'R') {
  let list = (STYLES[styleId] || STYLES.fire).moves[moveId] || BASE[moveId];
  if (!Array.isArray(list)) list = list[side] || list.R;
  return CLIP_CUTS[list[uid % list.length]];
}
// 긋기 각도 → 방향 (a: 화면 기준 각도, 0 = 오른쪽으로 그음, π = 왼쪽으로 그음)
export const swipeSide = (a) => (Math.cos(a || 0) < 0 ? 'L' : 'R');

// 기술 진행 프레임 f → 클립 시간
// 모션이 빨리 감기듯 보이지 않게 재생 속도 상한(MAX_RATE배): 넘치면 준비 동작 앞부분/마무리 끝부분을 잘라냄
export const MAX_RATE = 1.6;
export function moveClipTime(c, m, f) {
  const S = m.startup, A = m.active, R = m.total - S - A;
  const t0 = Math.max(c.t0, c.hit - (MAX_RATE * S) / 60);
  if (f <= S) return t0 + (c.hit - t0) * (f / S);
  const h2 = Math.min(c.t1, c.hit + 0.06);
  if (f <= S + A) return c.hit + (h2 - c.hit) * ((f - S) / A);
  const t1 = Math.min(c.t1, h2 + (MAX_RATE * R) / 60);
  return h2 + (t1 - h2) * Math.min(1, (f - S - A) / Math.max(1, R));
}

// 한손으로 쥐는 모션은 칼 방향이 다름 → 오른손 뼈 기준 칼날 방향 덮어쓰기
const ONE_HAND = [0.2, 0.19, -0.96];
export const BLADE_DIR_BY_CLIP = {
  ...Object.fromEntries(['ss_walk_f', 'ss_walk_b', 'ss_run', 'ss_strafe1', 'ss_strafe2', 'ss_strafe3', 'ss_strafe4', 'ss_block_idle', 'ss_crouch_idle', 'ss_idle2', 'ss_idle3', 'ss_idle4', 'ss_cast', 'ss_cast2', 'ss_slash4', 'ss_attack1', 'ss_crouching', 'ss_crouching2', 'ss_crouching3', 'ss_jump', 'ss_jump2', 'ss_power'].map((n) => [n, ONE_HAND])), stab: [0.05, 0.97, 0.22], inward: ONE_HAND, ss_idle: ONE_HAND, ss_slash: ONE_HAND, ss_slash2: ONE_HAND, ss_slash3: ONE_HAND, ss_slash5: ONE_HAND, ss_attack2: ONE_HAND, ss_attack3: ONE_HAND, ss_attack4: ONE_HAND, ss_kick: ONE_HAND };

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
// { L: [...], R: [...] } = 그은 방향대로: L = 칼이 왼쪽으로 지나감(← 긋기), R = 오른쪽으로 지나감(→ 긋기)
//   (모션별 칼끝 이동 방향을 계산해서 분류함 — 화면은 등 뒤 시점이라 캐릭터 왼쪽 = 화면 왼쪽)
const BASE = {
  stab: ['stab'],
  combo2: { L: ['kickslash'], R: ['slash4'] },
  combo3: { L: ['spinA'], R: ['slash3'] },
  slash_h: { L: ['slash', 'kickslash'], R: ['slash3', 'slash4'] },
  spin: { L: ['spinA'], R: ['slash4'] },
  slash_low: ['slash5'], slash_down: ['slash'], slash_up: ['attack'], thrust: ['kick2'], sweep: ['slide'], helm: ['jump'],
};
export const STYLES = {
  // 불: 양손 대검식 — 크게 내려치는 힘 위주
  fire: { idle: 'idle', fidget: ['idle3', 'idle4'], moves: { ...BASE, slash_down: ['slash', 'jump'] } },
  // 물: 양손 + 한손을 섞어 흐르듯 이어지는 베기
  water: { idle: 'idle2', fidget: ['idle5'], moves: { ...BASE, slash_h: { L: ['spinA', 'slash'], R: ['slash4', 'ss_slash3'] }, combo2: { L: ['kickslash'], R: ['ss_mid', 'slash3'] }, slash_down: ['slash', 'ss_slash'] } },
  // 번개: 한손 발도술 — 왼손은 칼집, 빠르고 짧은 베기
  thunder: { idle: 'ss_idle', fidget: ['idle4'], moves: { ...BASE, stab: ['stab', 'ss_quick'], slash_h: { L: ['ss_low', 'ss_crouch'], R: ['inward', 'ss_mid'] }, combo2: { L: ['ss_low'], R: ['ss_quick', 'inward'] }, combo3: { L: ['spinA'], R: ['ss_mid'] }, thrust: ['stab'], slash_low: ['ss_crouch', 'ss_low'], slash_down: ['ss_slash', 'ss_over'], slash_up: ['attack', 'ss_slash3'] } },
  // 바람: 회전 위주 + 한손 휘두르기
  wind: { idle: 'idle2', fidget: ['idle3'], moves: { ...BASE, slash_h: { L: ['spinA', 'kick2'], R: ['ss_slash3', 'slash3'] }, combo2: { L: ['spinA'], R: ['ss_mid'] }, combo3: { L: ['spinA'], R: ['spinB'] }, slash_low: ['ss_crouch', 'slash5'], slash_down: ['ss_slash'] } },
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
export const BLADE_DIR_BY_CLIP = { stab: [0.05, 0.97, 0.22], inward: ONE_HAND, ss_idle: ONE_HAND, ss_slash: ONE_HAND, ss_slash2: ONE_HAND, ss_slash3: ONE_HAND, ss_slash5: ONE_HAND, ss_attack2: ONE_HAND, ss_attack3: ONE_HAND, ss_attack4: ONE_HAND, ss_kick: ONE_HAND };

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
};

// 검술 스타일: 원소 캐릭터마다 다른 자세·대기 동작·기술 모션
// 기술마다 여러 개면 쓸 때마다 번갈아 나옴 (같은 기술도 매번 같지 않게)
const BASE = {
  stab: ['stab'], combo2: ['slash4', 'slash3'], combo3: ['spinB'], slash_h: ['slash3', 'slash4'], slash_low: ['slash5'],
  slash_down: ['slash'], slash_up: ['attack'], thrust: ['kick2'], sweep: ['slide'], spin: ['spinA'], helm: ['jump'],
};
export const STYLES = {
  fire: { idle: 'idle', fidget: ['idle3', 'idle4'], moves: { ...BASE, slash_h: ['slash3', 'slash'], combo2: ['slash4'], slash_down: ['slash', 'jump'] } },
  water: { idle: 'idle2', fidget: ['idle5'], moves: { ...BASE, slash_h: ['slash4', 'slash3'], combo2: ['slash3', 'slash4'], spin: ['spinA', 'spinB'] } },
  thunder: { idle: 'idle', fidget: ['idle4', 'idle5'], moves: { ...BASE, slash_h: ['inward'], combo2: ['inward', 'slash4'], thrust: ['stab'], slash_low: ['slash5', 'slide'] } },
  wind: { idle: 'idle2', fidget: ['idle3'], moves: { ...BASE, slash_h: ['spinA', 'slash3'], combo2: ['slash3', 'spinA'], combo3: ['spinB'], spin: ['spinA'] } },
};

export function moveCut(styleId, moveId, uid) {
  const list = (STYLES[styleId] || STYLES.fire).moves[moveId] || BASE[moveId];
  return CLIP_CUTS[list[uid % list.length]];
}

// 기술 진행 프레임 f → 클립 시간
export function moveClipTime(c, m, f) {
  const S = m.startup, A = m.active, R = m.total - S - A;
  if (f <= S) return c.t0 + (c.hit - c.t0) * (f / S);
  const h2 = Math.min(c.t1, c.hit + 0.06);
  if (f <= S + A) return c.hit + (h2 - c.hit) * ((f - S) / A);
  return h2 + (c.t1 - h2) * Math.min(1, (f - S - A) / Math.max(1, R));
}

// 한손으로 쥐는 모션은 칼 방향이 다름 → 오른손 뼈 기준 칼날 방향 덮어쓰기
export const BLADE_DIR_BY_CLIP = { stab: [0.05, 0.97, 0.22], inward: [0.2, 0.19, -0.96] };

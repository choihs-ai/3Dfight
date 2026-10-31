// 대전 상태 → Mixamo 클립 시간 계산 (순수 로직, three 의존 없음)
// 기술 클립: t0(시작) → hit(칼이 가장 빠른 순간 = 판정 발생) → t1(끝)
// 발생(startup)·지속(active)·후딜(recovery) 프레임에 맞춰 클립 시간을 늘이고 줄임
export const MOVE_CLIPS = {
  stab: { clip: 'kick', t0: 0.95, hit: 1.23, t1: 1.5 },
  combo2: { clip: 'slash4', t0: 0.4, hit: 0.72, t1: 1.2 },
  combo3: { clip: 'spin', t0: 0.6, hit: 1.08, t1: 1.6 },
  slash_h: { clip: 'slash3', t0: 0.35, hit: 0.86, t1: 1.45 },
  slash_low: { clip: 'slash5', t0: 0.1, hit: 0.45, t1: 1.0 },
  slash_down: { clip: 'slash', t0: 0.2, hit: 0.62, t1: 1.15 },
  slash_up: { clip: 'attack', t0: 0.15, hit: 0.43, t1: 1.0 },
  thrust: { clip: 'kick2', t0: 0.3, hit: 0.75, t1: 1.3 },
  sweep: { clip: 'slide', t0: 0.75, hit: 1.25, t1: 2.0 },
  spin: { clip: 'spin', t0: 0.0, hit: 0.43, t1: 0.9 },
  helm: { clip: 'jump_attack', t0: 0.2, hit: 1.2, t1: 2.0 },
};

// 기술 진행 프레임 f → 클립 시간
export function moveClipTime(m, f) {
  const c = MOVE_CLIPS[m.id], S = m.startup, A = m.active, R = m.total - S - A;
  if (f <= S) return c.t0 + (c.hit - c.t0) * (f / S);
  const h2 = Math.min(c.t1, c.hit + 0.06);
  if (f <= S + A) return c.hit + (h2 - c.hit) * ((f - S) / A);
  return h2 + (c.t1 - h2) * Math.min(1, (f - S - A) / Math.max(1, R));
}

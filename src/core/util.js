// 순수 수학 유틸 (DOM/three 의존 없음)
export const DT = 1 / 60;
export const MAXHP = 100;
export const ARENA_R = 10.6;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const angWrap = (a) => {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
};
export const turnTo = (c, t, r) => c + clamp(angWrap(t - c), -r, r);

// mulberry32 — 시드 고정 난수 (AI/테스트/온라인 재현용)
export function seeded(s) {
  const f = () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  f.getState = () => s;
  f.setState = (v) => { s = v; };
  return f;
}

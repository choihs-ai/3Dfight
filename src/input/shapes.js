// 오의 문양: 원소별 본보기 모양 + 그린 선 채점 (순수 함수, 테스트 가능)
// 좌표는 화면 기준 (x 오른쪽, y 아래), 본보기는 -1~1 범위
const N = 48;
const lerp2 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
function poly(pts, n = N) {
  // 꺾인 선을 길이 기준으로 n개 점으로
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const out = [], T = L[L.length - 1] || 1;
  for (let k = 0; k < n; k++) {
    const d = (T * k) / (n - 1); let i = 1; while (i < L.length - 1 && L[i] < d) i++;
    out.push(lerp2(pts[i - 1], pts[i], (d - L[i - 1]) / Math.max(1e-9, L[i] - L[i - 1])));
  }
  return out;
}
export const SHAPES = {
  fire: { name: '원', closed: true, pts: Array.from({ length: 65 }, (_, i) => { const t = (i / 64) * Math.PI * 2 - Math.PI / 2; return [Math.cos(t), Math.sin(t)]; }) },
  water: { name: '물결', pts: Array.from({ length: 65 }, (_, i) => { const x = -1 + (2 * i) / 64; return [x, -0.45 * Math.sin(x * Math.PI * 1.5)]; }) },
  thunder: { name: '번개', pts: [[-0.35, -1], [0.45, -0.15], [-0.25, 0.05], [0.4, 1]] },
  wind: { name: '소용돌이', pts: Array.from({ length: 81 }, (_, i) => { const u = i / 80, t = u * Math.PI * 3.2, r = 1 - u * 0.82; return [Math.cos(t) * r, Math.sin(t) * r]; }) },
};
for (const s of Object.values(SHAPES)) s.res = poly(s.pts);

function normalize(pts) {
  const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
  let m = 1e-6; for (const p of pts) m = Math.max(m, Math.abs(p[0] - cx), Math.abs(p[1] - cy));
  return pts.map((p) => [(p[0] - cx) / m, (p[1] - cy) / m]);
}
const avgDist = (a, b) => a.reduce((s, p, i) => s + Math.hypot(p[0] - b[i][0], p[1] - b[i][1]), 0) / a.length;

// 0~100점. 방향(정/역), 좌우 뒤집기, (닫힌 모양은) 시작점이 달라도 인정
export function scoreShape(id, drawn) {
  if (!drawn || drawn.length < 6) return 0;
  const S = SHAPES[id], d = normalize(poly(drawn));
  let L = 0; for (let i = 1; i < drawn.length; i++) L += Math.hypot(drawn[i][0] - drawn[i - 1][0], drawn[i][1] - drawn[i - 1][1]);
  if (L < 40) return 0; // 너무 짧음 (픽셀)
  const base = normalize(S.res);
  const cands = [];
  for (const mx of [1, -1]) {
    const t = base.map((p) => [p[0] * mx, p[1]]);
    cands.push(t, t.slice().reverse());
    if (S.closed) for (let k = 4; k < N; k += 4) { const r = t.slice(k).concat(t.slice(0, k)); cands.push(r, r.slice().reverse()); }
  }
  const best = Math.min(...cands.map((c) => avgDist(d, c)));
  return Math.round(Math.max(0, Math.min(1, 1 - (best - 0.12) / 0.5)) * 100);
}
// 점수 등급
export const grade = (s) => (s >= 85 ? '완벽!' : s >= 65 ? '훌륭함' : s >= 40 ? '좋음' : '아쉬움');

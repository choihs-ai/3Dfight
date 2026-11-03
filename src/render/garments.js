// 애니풍 의상: VRM 몸에 맞춰 감싸는(shrink-wrap) 하오리·넓은 소매·하카마·각반·허리띠
// - 모두 VRM 정규화 뼈에 스키닝 (가슴/허리/엉덩이/어깨/팔/다리 사이 부드럽게 섞임)
// - 하오리 옷자락(8조각)과 소매 주머니는 간단한 물리로 흔들림 (다리와 충돌)
// - 원소별 전통 문양 텍스처 (불꽃 · 청해파 · 번개 · 삼잎)
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

// ---------- 몸 표면 샘플 (기본자세, VRM 모델 좌표) ----------
export function bodySamples(vrm, skip) {
  const out = [], inv = new THREE.Matrix4().copy(vrm.scene.matrixWorld).invert(), M = new THREE.Matrix4(), v = new THREE.Vector3();
  vrm.scene.traverse((o) => {
    if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    if (mats.every((m) => skip((m.name || '').replace(' (Outline)', '')))) return;
    M.multiplyMatrices(inv, o.matrixWorld);
    const p = o.geometry.attributes.position;
    // 스키닝 메시는 실제 기본자세(뼈 적용) 위치로: 정점은 A자세로 저장되고 뼈가 T자세인 모델도 있음
    for (let i = 0; i < p.count; i++) { if (o.isSkinnedMesh) o.getVertexPosition(i, v); else v.fromBufferAttribute(p, i); v.applyMatrix4(M); out.push(v.x, v.y, v.z); }
  });
  return new Float32Array(out);
}

// 각도별 최대 반지름 → 빈 칸 채우기 → 팽창 → 부드럽게 (원래보다 작아지지 않음)
function finishRing(r, fallback) {
  const n = r.length;
  if (!r.some((x) => x > 0)) return r.fill(fallback);
  for (let k = 0; k < n; k++) {
    if (r[k] > 0) continue;
    let a = 1, b = 1; while (r[(k - a + n) % n] <= 0) a++; while (r[(k + b) % n] <= 0) b++;
    r[k] = lerp(r[(k - a + n) % n], r[(k + b) % n], a / (a + b));
  }
  const d = r.map((_, k) => Math.max(r[(k + n - 1) % n], r[k], r[(k + 1) % n]));
  return d.map((_, k) => (d[(k + n - 1) % n] + 2 * d[k] + d[(k + 1) % n]) / 4);
}
// 수평 띠 [y0,y1] 의 단면 (축 (cx, cz), 각도 0 = 앞(+z), +x 쪽으로 증가)
function ringProfile(S, y0, y1, cx, cz, keep, n = 48, fallback = 0.1) {
  const r = new Float32Array(n).fill(-1);
  for (let i = 0; i < S.length; i += 3) {
    const x = S[i], y = S[i + 1], z = S[i + 2];
    if (y < y0 || y > y1 || !keep(x, y, z)) continue;
    const dx = x - cx, dz = z - cz, rr = Math.hypot(dx, dz);
    let a = Math.atan2(dx, dz); if (a < 0) a += TAU;
    const k = Math.round((a / TAU) * n) % n; if (rr > r[k]) r[k] = rr;
  }
  return finishRing(r, fallback);
}
const ringAt = (r, a) => { const n = r.length, f = ((((a / TAU) * n) % n) + n) % n, k = Math.floor(f), t = f - k; return r[k] * (1 - t) + r[(k + 1) % n] * t; };

// ---------- 두께 있는 격자 껍질 (바깥면 + 안쪽면 + 테두리) → 스키닝 지오메트리 ----------
// P: rows*cols 개의 [x,y,z] 가운데 면, C: 행별 축 위치(바깥 방향 판별), UV, W: 정점별 [[뼈번호, 가중치], ...]
class ShellBuilder {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.si = []; this.sw = []; this.idx = []; }
  vert(p, n, uv, w) {
    this.pos.push(p[0], p[1], p[2]); this.nor.push(n[0], n[1], n[2]); this.uv.push(uv[0], uv[1]);
    const ws = w.slice().sort((a, b) => b[1] - a[1]).slice(0, 4); let s = 0; for (const x of ws) s += x[1];
    for (let k = 0; k < 4; k++) { this.si.push(ws[k] ? ws[k][0] : 0); this.sw.push(ws[k] ? ws[k][1] / s : 0); }
    return this.pos.length / 3 - 1;
  }
  grid({ rows, cols, wrap = false, P, C, UV, W, thick, capTop = true, capBot = true }) {
    const V = new THREE.Vector3(), A = new THREE.Vector3(), B = new THREE.Vector3(), N = [];
    const at = (i, j) => P[i * cols + (wrap ? ((j % cols) + cols) % cols : Math.min(cols - 1, Math.max(0, j)))];
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
      const pu = at(i, j + 1), pd = at(i, j - 1), pi = at(Math.min(rows - 1, i + 1), j), pm = at(Math.max(0, i - 1), j);
      A.set(pu[0] - pd[0], pu[1] - pd[1], pu[2] - pd[2]); B.set(pi[0] - pm[0], pi[1] - pm[1], pi[2] - pm[2]);
      V.crossVectors(A, B).normalize();
      const p = P[i * cols + j], c = C[i];
      if (V.x * (p[0] - c[0]) + V.y * (p[1] - c[1]) + V.z * (p[2] - c[2]) < 0) V.negate();
      N.push([V.x, V.y, V.z]);
    }
    const h = thick / 2, off = (k, s) => { const p = P[k], n = N[k]; return [p[0] + n[0] * h * s, p[1] + n[1] * h * s, p[2] + n[2] * h * s]; };
    const neg = (n) => [-n[0], -n[1], -n[2]];
    const outer = [], inner = [];
    for (let k = 0; k < rows * cols; k++) { outer.push(this.vert(off(k, 1), N[k], UV[k], W[k])); inner.push(this.vert(off(k, -1), neg(N[k]), UV[k], W[k])); }
    const cj = wrap ? cols : cols - 1;
    for (let i = 0; i < rows - 1; i++) for (let j = 0; j < cj; j++) {
      const a = i * cols + j, b = i * cols + ((j + 1) % cols), c = (i + 1) * cols + ((j + 1) % cols), d = (i + 1) * cols + j;
      // 바깥면이 바깥을 향하도록 감는 방향 확인
      const pa = P[a], pb = P[b], pd2 = P[d];
      A.set(pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]); B.set(pd2[0] - pa[0], pd2[1] - pa[1], pd2[2] - pa[2]); V.crossVectors(A, B);
      const flip = V.x * N[a][0] + V.y * N[a][1] + V.z * N[a][2] < 0;
      const q = (L, f) => { if (f) this.idx.push(L[a], L[b], L[c], L[a], L[c], L[d]); else this.idx.push(L[a], L[c], L[b], L[a], L[d], L[c]); };
      q(outer, !flip); q(inner, flip);
    }
    // 테두리: 두 층을 잇는 띠 (각진 그림자를 위해 정점을 따로)
    const edge = (k0, k1) => {
      const p0 = P[k0], p1 = P[k1]; A.set(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);
      const nn = N[k0]; B.set(nn[0], nn[1], nn[2]); V.crossVectors(A, B).normalize();
      const mid = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2, (p0[2] + p1[2]) / 2];
      // 판의 안쪽 방향(격자 중심)과 반대로
      const ci = P[Math.floor(rows / 2) * cols + Math.floor(cols / 2)];
      if (!wrap && V.x * (mid[0] - ci[0]) + V.y * (mid[1] - ci[1]) + V.z * (mid[2] - ci[2]) < 0) V.negate();
      const en = [V.x, V.y, V.z];
      const a = this.vert(off(k0, 1), en, UV[k0], W[k0]), b = this.vert(off(k1, 1), en, UV[k1], W[k1]), c = this.vert(off(k1, -1), en, UV[k1], W[k1]), d = this.vert(off(k0, -1), en, UV[k0], W[k0]);
      this.idx.push(a, b, c, a, c, d, a, c, b, a, d, c); // 양면 (방향 판별이 애매한 곳 대비)
    };
    for (let j = 0; j < cj; j++) { if (capTop) edge(j, (j + 1) % cols); if (capBot) edge((rows - 1) * cols + j, (rows - 1) * cols + ((j + 1) % cols)); }
    if (!wrap) for (let i = 0; i < rows - 1; i++) { edge(i * cols, (i + 1) * cols); edge(i * cols + cols - 1, (i + 1) * cols + cols - 1); }
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}
// 외곽선용: 같은 위치 정점을 합쳐 부드러운 법선으로 (뒤집힌 껍질)
function outlineGeo(geo) {
  const g = geo.clone(); g.deleteAttribute('normal'); g.deleteAttribute('uv');
  const m = mergeVertices(g, 1e-5); m.computeVertexNormals(); return m;
}

// ---------- 원소별 문양 텍스처 ----------
function canvasTex(c, repeat = false) {
  const t = new THREE.CanvasTexture(c);
  t.flipY = false; t.anisotropy = 4; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.needsUpdate = true; return t;
}
const rnd = (s) => () => ((s = (s * 16807) % 2147483647) / 2147483647);

// u: 왼쪽 앞섶(0) → 등 → 오른쪽 앞섶(1), v: 깃(0) → 밑단(1). 그리기는 미터 단위 (Wm × Hm)
export function haoriTexture(id, C, Wm, Hm, band) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'), R = rnd(7 + id.length * 13);
  g.setTransform(S / Wm, 0, 0, S / Hm, 0, 0);
  const grad = (a, b, y0 = 0, y1 = Hm) => { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, a); gr.addColorStop(1, b); return gr; };
  let bandCol = '#141012', bandLine = '#c9962e';
  if (id === 'fire') {
    g.fillStyle = grad('#a3221a', '#5e0d0a'); g.fillRect(0, 0, Wm, Hm);
    // 밑단에서 타오르는 불꽃 (바깥 주황 → 안쪽 노랑, 검붉은 테두리)
    const flame = (x, w, h, curl, k) => {
      g.beginPath(); g.moveTo(x - w / 2, Hm + 0.02);
      g.bezierCurveTo(x - w * 0.55, Hm - h * 0.45, x + curl * 0.2 - w * 0.25, Hm - h * 0.7, x + curl, Hm - h);
      g.bezierCurveTo(x + curl * 0.3 + w * 0.2, Hm - h * 0.62, x + w * 0.6, Hm - h * 0.4, x + w / 2, Hm + 0.02);
      g.closePath(); g.fill(); if (k) g.stroke();
    };
    const fl = [];
    for (let x = -0.05; x < Wm + 0.1; x += 0.075 + R() * 0.04) fl.push([x, 0.09 + R() * 0.05, 0.16 + R() * 0.2, (R() - 0.5) * 0.08]);
    g.lineJoin = 'round';
    g.strokeStyle = '#2a0504'; g.lineWidth = 0.007;
    g.fillStyle = '#ff6a12'; for (const f of fl) flame(f[0], f[1], f[2], f[3], true);
    g.fillStyle = '#ffb02a'; for (const f of fl) flame(f[0], f[1] * 0.62, f[2] * 0.68, f[3] * 0.7, false);
    g.fillStyle = '#fff1a0'; for (const f of fl) flame(f[0], f[1] * 0.3, f[2] * 0.36, f[3] * 0.4, false);
    // 날리는 불티
    g.fillStyle = '#ffb02a'; for (let i = 0; i < 40; i++) { const x = R() * Wm, y = Hm - 0.22 - R() * 0.25; g.beginPath(); g.ellipse(x, y, 0.006 + R() * 0.006, 0.01 + R() * 0.008, R(), 0, TAU); g.fill(); }
  } else if (id === 'water') {
    g.fillStyle = '#163a72'; g.fillRect(0, 0, Wm, Hm);
    // 청해파 (겹친 물결 비늘): 위 줄부터 그려 아래 줄이 덮음
    const r = 0.052, dy = r * 0.5;
    for (let row = 0, y = -r; y < Hm + r; row++, y += dy) {
      const t = clamp01(y / Hm), base = `rgb(${lerp(22, 30, t) | 0},${lerp(58, 92, t) | 0},${lerp(114, 160, t) | 0})`;
      for (let x = row % 2 ? 0 : r, n = 0; x < Wm + r * 2 && n < 60; x += r * 2, n++) {
        g.beginPath(); g.arc(x, y, r, Math.PI, TAU); g.lineTo(x + r, y + 0.0001); g.closePath(); g.fillStyle = base; g.fill();
        for (let k = 0; k < 4; k++) {
          g.beginPath(); g.arc(x, y, r * (1 - k * 0.22), Math.PI, TAU);
          g.strokeStyle = k % 2 ? 'rgba(160,210,255,0.85)' : 'rgba(235,248,255,0.95)'; g.lineWidth = k === 0 ? 0.004 : 0.0028; g.stroke();
        }
      }
    }
    // 밑단 물보라 띠
    g.fillStyle = 'rgba(230,245,255,0.9)';
    for (let x = 0; x < Wm; x += 0.06) { g.beginPath(); g.arc(x, Hm - 0.01, 0.03, Math.PI, TAU); g.fill(); }
    bandCol = '#e9f1f8'; bandLine = '#2a5d9a';
  } else if (id === 'thunder') {
    g.fillStyle = grad('#f0be2a', '#c98a10'); g.fillRect(0, 0, Wm, Hm);
    // 작은 번개 문양 흩뿌림
    g.strokeStyle = 'rgba(120,70,0,0.55)'; g.lineWidth = 0.005; g.lineJoin = 'miter';
    for (let y = 0.08; y < Hm - 0.25; y += 0.11) for (let x = (Math.round(y / 0.11) % 2) * 0.07 + 0.03; x < Wm; x += 0.14) {
      g.beginPath(); g.moveTo(x - 0.012, y - 0.03); g.lineTo(x + 0.008, y - 0.004); g.lineTo(x - 0.006, y + 0.002); g.lineTo(x + 0.014, y + 0.03); g.stroke();
    }
    // 밑단: 검정 · 흰 지그재그 번개 띠
    const zig = (y, a, w, col, lw) => { g.beginPath(); for (let x = -0.05, k = 0; x < Wm + 0.1; x += w, k++) g.lineTo(x, y + (k % 2 ? a : -a)); g.strokeStyle = col; g.lineWidth = lw; g.stroke(); };
    g.fillStyle = '#16120a'; g.fillRect(0, Hm - 0.2, Wm, 0.2);
    g.lineJoin = 'miter';
    zig(Hm - 0.14, 0.035, 0.05, '#fff6c8', 0.016); zig(Hm - 0.06, 0.025, 0.04, '#f0be2a', 0.012);
    g.fillStyle = '#fff6c8'; g.fillRect(0, Hm - 0.205, Wm, 0.008);
    bandCol = '#16120a'; bandLine = '#fff6c8';
  } else {
    g.fillStyle = grad('#2f8150', '#1b5432'); g.fillRect(0, 0, Wm, Hm);
    // 삼잎 문양 (정삼각형 격자: 각 삼각형의 변 + 중심에서 꼭짓점까지)
    const a = 0.075, hgt = (a * Math.sqrt(3)) / 2;
    g.strokeStyle = 'rgba(200,255,220,0.55)'; g.lineWidth = 0.0028;
    for (let r = -1, y = -hgt; y < Hm + hgt; r++, y += hgt) for (let x = (r % 2 ? a / 2 : 0) - a; x < Wm + a; x += a) {
      for (const up of [1, -1]) {
        const P = up > 0 ? [[x, y + hgt], [x + a, y + hgt], [x + a / 2, y]] : [[x + a / 2, y], [x + a * 1.5, y], [x + a, y + hgt]];
        const cx = (P[0][0] + P[1][0] + P[2][0]) / 3, cy = (P[0][1] + P[1][1] + P[2][1]) / 3;
        g.beginPath(); g.moveTo(...P[0]); g.lineTo(...P[1]); g.lineTo(...P[2]); g.closePath();
        for (const p of P) { g.moveTo(cx, cy); g.lineTo(p[0], p[1]); }
        g.stroke();
      }
    }
    // 밑단: 흰 바람 결 (흐르는 붓선)
    const gr = g.createLinearGradient(0, Hm - 0.25, 0, Hm); gr.addColorStop(0, 'rgba(235,250,240,0)'); gr.addColorStop(1, 'rgba(235,250,240,0.85)');
    g.fillStyle = gr; g.fillRect(0, Hm - 0.25, Wm, 0.25);
    g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineCap = 'round';
    for (let i = 0; i < 14; i++) { const x = R() * Wm, y = Hm - 0.04 - R() * 0.16, L = 0.12 + R() * 0.15; g.lineWidth = 0.006 + R() * 0.006; g.beginPath(); g.moveTo(x, y); g.bezierCurveTo(x + L * 0.3, y - 0.03, x + L * 0.7, y + 0.03, x + L, y - 0.01); g.stroke(); }
    bandCol = '#eaf3ec'; bandLine = '#1b5432';
  }
  // 앞섶 깃 띠 (양쪽 끝)
  g.fillStyle = bandCol; g.fillRect(0, 0, band, Hm); g.fillRect(Wm - band, 0, band, Hm);
  g.fillStyle = bandLine; g.fillRect(band - 0.004, 0, 0.004, Hm); g.fillRect(Wm - band, 0, 0.004, Hm);
  // 은은한 천 결 (세로 그늘)
  g.fillStyle = 'rgba(0,0,0,0.06)'; for (let x = 0; x < Wm; x += 0.09) g.fillRect(x, 0, 0.012, Hm);
  return canvasTex(c);
}
// 하의 아틀라스: [0,.5) 하카마 주름 · [.5,.75) 각반(흰 감은 천) · [.75,1] 허리띠
function lowerTexture(C) {
  const W = 512, H = 256, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const col = new THREE.Color(C.pants), dk = col.clone().multiplyScalar(0.6), lt = col.clone().lerp(new THREE.Color('#ffffff'), 0.12);
  g.fillStyle = '#' + col.getHexString(); g.fillRect(0, 0, W / 2, H);
  for (let i = 0; i < 16; i++) { const x = (i / 16) * (W / 2); g.fillStyle = '#' + dk.getHexString(); g.fillRect(x, 0, 3, H); g.fillStyle = '#' + lt.getHexString(); g.fillRect(x + 3, 0, 2, H); }
  const wr = new THREE.Color(C.wrap); g.fillStyle = '#' + wr.getHexString(); g.fillRect(W / 2, 0, W / 4, H);
  g.strokeStyle = '#' + wr.clone().multiplyScalar(0.72).getHexString(); g.lineWidth = 2.5;
  for (let y = -H; y < H * 2; y += 22) { g.beginPath(); g.moveTo(W / 2, y); g.lineTo(W * 0.75, y + 40); g.stroke(); }
  const bl = new THREE.Color(C.belt); g.fillStyle = '#' + bl.getHexString(); g.fillRect(W * 0.75, 0, W / 4, H);
  g.fillStyle = '#' + bl.clone().multiplyScalar(0.7).getHexString(); g.fillRect(W * 0.75, H * 0.45, W / 4, H * 0.1);
  return canvasTex(c);
}

// ---------- 흔들림 뼈 ----------
const G = new THREE.Vector3(0, -9.8, 0);
class Chain { // 엉덩이에 매달린 2마디 옷자락: 허리→허벅지 중간(A), 중간→밑단(B). 다리에 걸치면 B가 아래로 늘어짐
  constructor(A, Bn, pivot, mid, tip) {
    this.A = A; this.Bn = Bn; this.pivot = pivot.clone(); this.mid = mid.clone(); this.tip = tip.clone();
    this.dA = mid.clone().sub(pivot).normalize(); this.dB = tip.clone().sub(mid).normalize();
    this.M = new THREE.Vector3(); this.Mp = new THREE.Vector3(); this.T = new THREE.Vector3(); this.Tp = new THREE.Vector3(); this.init = false;
  }
}
class Jiggle { // 부모 뼈를 따라가되 늦게 따라오는 점 (소매 주머니)
  constructor(bone, max) { this.bone = bone; this.rest = bone.position.clone(); this.max = max; this.X = new THREE.Vector3(); this.Xp = new THREE.Vector3(); this.init = false; }
}

// ---------- 의상 전체 ----------
// ctx: { vrm, bone(n) (Mixamo 이름 → 정규화 뼈), S (몸 샘플), s (모델 배율), ch, rim, toonMat, OUTLINE }
export function buildGarments(ctx) {
  const { vrm, bone, S, ch, rim, toonMat, OUTLINE } = ctx, C = ch.colors;
  const root = vrm.scene;
  const P = (n) => root.worldToLocal(bone(n).getWorldPosition(new THREE.Vector3()));
  const hum = (n) => vrm.humanoid.getNormalizedBoneNode(n);
  const hips = P('Hips'), spine = hum('spine') ? P('Spine') : hips, chest = P('Spine1'), uc = hum('upperChest') ? P('Spine2') : null, neck = P('Neck');
  const lua = P('LeftArm'), lla = P('LeftForeArm'), lh = P('LeftHand'), lul = P('LeftUpLeg'), lll = P('LeftLeg'), lf = P('LeftFoot');
  const rua = P('RightArm'), rla = P('RightForeArm'), rh = P('RightHand'), rul = P('RightUpLeg'), rll = P('RightLeg'), rf = P('RightFoot');
  const shX = (Math.abs(lua.x) + Math.abs(rua.x)) / 2, k = shX / 0.16; // 체격 배율 (어깨 기준)

  // 몸통 축 (높이별 z)
  const chainY = [[hips.y, hips.z], [spine.y, spine.z], [chest.y, chest.z], ...(uc ? [[uc.y, uc.z]] : []), [neck.y, neck.z]].sort((a, b) => a[0] - b[0]);
  const axisZ = (y) => { if (y <= chainY[0][0]) return chainY[0][1]; for (let i = 0; i < chainY.length - 1; i++) if (y <= chainY[i + 1][0]) return lerp(chainY[i][1], chainY[i + 1][1], (y - chainY[i][0]) / (chainY[i + 1][0] - chainY[i][0])); return chainY[chainY.length - 1][1]; };

  // 뼈 목록 (스켈레톤)
  const bones = [], bi = new Map();
  const B = (node) => { if (!node) return -1; if (!bi.has(node)) { bi.set(node, bones.length); bones.push(node); } return bi.get(node); };
  const torso = [[hips.y, B(hum('hips'))], ...(hum('spine') ? [[spine.y, B(hum('spine'))]] : []), [chest.y, B(hum('chest'))], ...(uc ? [[uc.y, B(hum('upperChest'))]] : [])];
  // 몸통 가중치: 뼈 구간 중심 사이를 선형으로
  const cen = torso.map(([y], i) => (i === 0 ? y : i === torso.length - 1 ? y + 0.06 : (y + torso[i + 1][0]) / 2));
  const torsoW = (y) => {
    if (y <= cen[0]) return [[torso[0][1], 1]];
    for (let i = 0; i < cen.length - 1; i++) if (y <= cen[i + 1]) { const t = (y - cen[i]) / (cen[i + 1] - cen[i]); return [[torso[i][1], 1 - t], [torso[i + 1][1], t]]; }
    return [[torso[torso.length - 1][1], 1]];
  };
  const scaleW = (w, f) => w.map(([b, x]) => [b, x * f]);

  const physics = { pend: [], jig: [], legs: [] };
  const meshes = [], mats = [], texs = [];
  const addSkinned = (geo, mat) => {
    root.updateMatrixWorld(true);
    const sk = new THREE.Skeleton(bones.slice());
    for (const [g, m] of [[geo, mat], [outlineGeo(geo), OUTLINE]]) {
      const mesh = new THREE.SkinnedMesh(g, m); mesh.frustumCulled = false;
      root.add(mesh); mesh.updateMatrixWorld(true); mesh.bind(sk, mesh.matrixWorld);
      meshes.push(mesh);
    }
  };

  // ===== 하오리 몸판 =====
  const armKeep = (lim) => (x) => Math.abs(x) < lim;
  const torsoKeep = armKeep(shX + 0.012);
  const yC = neck.y - 0.006, yS = (lua.y + rua.y) / 2;
  const yHem = hips.y - (hips.y - (lll.y + rll.y) / 2) * 0.8;
  const rNeck = ringProfile(S, neck.y - 0.035, neck.y + 0.012, 0, axisZ(neck.y), torsoKeep, 48, 0.06);
  // 어깨 윗면 높이: 각도·반지름 칸별 최대 높이 (요크가 승모근을 뚫지 않게)
  const NR = 32, topY = new Float32Array(48 * NR).fill(-1);
  for (let i = 0; i < S.length; i += 3) {
    const x = S[i], y = S[i + 1], z = S[i + 2];
    if (y < yS - 0.06 || y > yC + 0.02 || !torsoKeep(x)) continue;
    const dz = z - axisZ(y), rr = Math.hypot(x, dz); let a = Math.atan2(x, dz); if (a < 0) a += TAU;
    const ka = Math.round((a / TAU) * 48) % 48, kr = Math.min(NR - 1, Math.round(rr / 0.01));
    if (y > topY[ka * NR + kr]) topY[ka * NR + kr] = y;
  }
  const topAt = (a, r) => { const ka = Math.round((((a / TAU) * 48) % 48 + 48) % 48) % 48, kr = Math.round(r / 0.01); let m = -1; for (let d = -1; d <= 2; d++) for (let e = -1; e <= 1; e++) { const kk = (ka + e + 48) % 48, rr = kr + d; if (rr >= 0 && rr < NR) m = Math.max(m, topY[kk * NR + rr]); } return m; };

  // 몸판 행 높이: 어깨 윗면 → 밑단
  const yS0 = yS + 0.04 * k, nBody = 17, bodyY = [];
  for (let i = 0; i < nBody; i++) bodyY.push(lerp(yS0, yHem, Math.pow(i / (nBody - 1), 1.05)));
  // 하카마 바깥 둘레 (하오리 아랫자락이 하카마 밖을 감싸도록)
  const hakR = (y) => (y > lll.y ? lerp(0.12, 0.135, clamp01((lul.y + 0.07 - y) / (lul.y + 0.07 - lll.y))) : 0.135) * k + 0.012;
  const legEnv = (a, y) => {
    const R = hakR(y), dx = Math.sin(a), dz = Math.cos(a); let best = 0;
    for (const c of [lul, rul]) { const ox = c.x, oz = c.z - axisZ(y), b = dx * ox + dz * oz, disc = b * b - (ox * ox + oz * oz) + R * R; if (disc >= 0) best = Math.max(best, b + Math.sqrt(disc)); }
    return best;
  };
  const rings = [];
  let prev = null;
  for (let i = 0; i < nBody; i++) {
    const y = bodyY[i], band = i === 0 ? [yS - 0.03, yS + 0.09] : [y - 0.035, y + 0.035];
    const legs = y < hips.y + 0.05;
    let r = ringProfile(S, band[0], band[1], 0, axisZ(y), legs ? () => true : torsoKeep, 48, 0.15);
    r = r.map((x) => x + 0.024);
    if (legs) r = r.map((x, kk) => Math.max(x, legEnv((kk / 48) * TAU, y) + 0.018));
    if (prev && i > 1) r = r.map((x, kk) => Math.max(x, prev[kk])); // 천은 아래로 늘어짐 (안으로 좁아지지 않음)
    if (y < hips.y) { const fl = (hips.y - y) * 0.09; r = r.map((x, kk) => x + fl * (0.6 + 0.4 * Math.abs(Math.cos((kk / 48) * TAU)))); }
    rings.push(r); prev = r;
  }
  // 앞섶 위치 (x): 목 옆 → 가슴에서 모임 → 아래로 갈수록 살짝 벌어짐
  const edgeX = (y) => {
    const t = clamp01((yS0 - y) / (yS0 - yHem));
    return (t < 0.3 ? lerp(0.07, 0.058, t / 0.3) : lerp(0.058, 0.11, (t - 0.3) / 0.7)) * k;
  };
  const edgeAng = (r, x) => { for (let a = 0.05; a < 1.5; a += 0.01) if (ringAt(r, a) * Math.sin(a) >= x && ringAt(r, TAU - a) * Math.sin(a) >= x) return a; return 1.2; };
  const cols = 45;
  // 깃(목둘레 세운 깃) 2줄 + 요크 3줄 + 몸판
  const rowDefs = [];
  const aNeck = 0.95;
  rowDefs.push({ y: yC + 0.02 * k, r: rNeck.map((x) => x + 0.02), a0: aNeck + 0.06 });
  rowDefs.push({ y: yC, r: rNeck.map((x) => x + 0.02), a0: aNeck });
  const aS0 = edgeAng(rings[0], edgeX(yS0));
  for (const t of [0.3, 0.6, 0.85]) rowDefs.push({ yoke: t, r: rNeck.map((x, kk) => lerp(x + 0.02, rings[0][kk], Math.pow(t, 0.8))), a0: lerp(aNeck, aS0, t) });
  for (let i = 0; i < nBody; i++) rowDefs.push({ y: bodyY[i], r: rings[i], a0: edgeAng(rings[i], edgeX(bodyY[i])) });
  const rows = rowDefs.length;
  // 정점 위치
  const HP = [], HC = [];
  for (let i = 0; i < rows; i++) {
    const d = rowDefs[i], a0 = d.a0;
    let yRow = d.y;
    for (let j = 0; j < cols; j++) {
      const a = a0 + ((TAU - 2 * a0) * j) / (cols - 1), r = ringAt(d.r, a);
      let y = yRow;
      if (d.yoke !== undefined) { // 목 → 어깨 사이: 몸 윗면보다 위로
        const base = lerp(yC, yS0, d.yoke * d.yoke * 0.7 + d.yoke * 0.3);
        y = Math.max(base, topAt(a, r - 0.024) + 0.02);
        y = Math.min(y, yC);
      }
      HP.push([r * Math.sin(a), y, axisZ(y) + r * Math.cos(a)]);
    }
    HC.push([0, d.y !== undefined ? d.y : yS0, axisZ(d.y !== undefined ? d.y : yS0)]);
  }
  // 요크 행의 축 높이를 실제 평균 높이로
  for (let i = 0; i < rows; i++) if (rowDefs[i].yoke !== undefined) { let s = 0; for (let j = 0; j < cols; j++) s += HP[i * cols + j][1]; HC[i][1] = s / cols - 0.05; }
  // UV: u = 둘레, v = 등 가운데 기준 길이
  const backJ = (cols - 1) / 2, vLen = [0];
  for (let i = 1; i < rows; i++) { const a = HP[(i - 1) * cols + backJ], b = HP[i * cols + backJ]; vLen.push(vLen[i - 1] + Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])); }
  const Hm = vLen[rows - 1];
  let Wm = 0; { const i = rowDefs.findIndex((d) => d.y === bodyY[3]); for (let j = 1; j < cols; j++) { const a = HP[i * cols + j - 1], b = HP[i * cols + j]; Wm += Math.hypot(a[0] - b[0], a[2] - b[2]); } }
  const HUV = [], HW = [];
  const lSh = B(hum('leftShoulder')), rSh = B(hum('rightShoulder'));
  // 옷자락 흔들림 조각 8개 (엉덩이 뼈에 매달림)
  const K = 8, hemA = [], hemB = [], yPiv = hips.y + 0.03, MID = 0.45;
  const hipsNode = hum('hips');
  const rPiv = ringProfile(S, hips.y - 0.02, hips.y + 0.06, 0, axisZ(hips.y), torsoKeep, 48, 0.15);
  for (let q = 0; q < K; q++) {
    const a = ((q + 0.5) / K) * TAU, rp = ringAt(rPiv, a) + 0.02;
    const piv = new THREE.Vector3(rp * Math.sin(a), yPiv, axisZ(yPiv) + rp * Math.cos(a));
    const rh2 = ringAt(rings[nBody - 1], a);
    const tip = new THREE.Vector3(rh2 * Math.sin(a), yHem, axisZ(yHem) + rh2 * Math.cos(a));
    const mid = new THREE.Vector3().lerpVectors(piv, tip, MID);
    const bA = new THREE.Bone(); bA.name = 'hemA' + q; bA.position.copy(piv).sub(hips); hipsNode.add(bA); // 정규화 엉덩이 뼈: 기본자세에서 회전 없음
    const bB = new THREE.Bone(); bB.name = 'hemB' + q; bB.position.copy(mid).sub(piv); bA.add(bB);
    hemA.push(B(bA)); hemB.push(B(bB));
    physics.pend.push(new Chain(bA, bB, piv.clone().sub(hips), mid.clone().sub(hips), tip.clone().sub(hips)));
  }
  for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++) {
    const p = HP[i * cols + j], d = rowDefs[i], a = d.a0 + ((TAU - 2 * d.a0) * j) / (cols - 1);
    HUV.push([j / (cols - 1), vLen[i] / Hm]);
    let w = torsoW(p[1]);
    // 어깨 끝은 어깨뼈를 따라감
    const ws = 0.65 * sstep(0.45 * shX, 0.95 * shX, Math.abs(p[0])) * sstep(yS - 0.12, yS - 0.02, p[1]);
    if (ws > 0) w = [...scaleW(w, 1 - ws), [p[0] > 0 ? lSh : rSh, ws]];
    // 엉덩이 아래는 옷자락 조각으로
    const wh = sstep(yPiv, yPiv - 0.16, p[1]);
    if (wh > 0) {
      const f = (a / TAU) * K - 0.5, q0 = ((Math.floor(f) % K) + K) % K, t = f - Math.floor(f);
      const tl = (yPiv - p[1]) / (yPiv - yHem), wb = sstep(MID - 0.12, MID + 0.15, tl), q1 = (q0 + 1) % K;
      w = [...scaleW(w, 1 - wh), [hemA[q0], wh * (1 - t) * (1 - wb)], [hemA[q1], wh * t * (1 - wb)], [hemB[q0], wh * (1 - t) * wb], [hemB[q1], wh * t * wb]];
    }
    HW.push(w);
  }
  const shell = new ShellBuilder();
  shell.grid({ rows, cols, P: HP, C: HC, UV: HUV, W: HW, thick: 0.012 });

  // ===== 넓은 소매 (양팔) =====
  for (const [sg, ua, la, hd, side] of [[1, lua, lla, lh, 'left'], [-1, rua, rla, rh, 'right']]) {
    const x0 = ua.x - sg * 0.035, x1 = hd.x - sg * 0.03, nA = 13, nC = 20;
    const axis = (x) => { const t1 = (x - ua.x) / (la.x - ua.x); if (t1 <= 1) return new THREE.Vector3().lerpVectors(ua, la, Math.max(0, t1)); return new THREE.Vector3().lerpVectors(la, hd, Math.min(1, (x - la.x) / (hd.x - la.x))); };
    const shB = B(hum(side + 'Shoulder')), uaB = B(hum(side + 'UpperArm')), laB = B(hum(side + 'LowerArm'));
    // 소매 주머니 흔들림 뼈 (아래팔에 붙음)
    const laNode = hum(side + 'LowerArm');
    const drop = new THREE.Bone(); drop.name = side + 'SleeveDrop';
    drop.position.set((hd.x - la.x) * 0.45, -0.08, 0); laNode.add(drop);
    const dB = B(drop); physics.jig.push(new Jiggle(drop, 0.07));
    const SP = [], SC = [], SUV = [], SW = [];
    const sleeveLen = Math.abs(x1 - x0);
    for (let i = 0; i < nA; i++) {
      const x = lerp(x0, x1, i / (nA - 1)), A0 = axis(x);
      // 팔 단면 (팔 둘레 샘플)
      let rm = 0.04;
      for (let s2 = 0; s2 < S.length; s2 += 3) { const sx = S[s2]; if (Math.abs(sx - x) > 0.02 || sx * sg < shX * 0.8) continue; const dy = S[s2 + 1] - A0.y, dz = S[s2 + 2] - A0.z, rr = Math.hypot(dy, dz); if (rr < 0.085 && rr > rm) rm = rr; }
      const t = i / (nA - 1), r = Math.max(0.062 * k, rm + 0.022) + t * 0.012, dp = 0.13 * k * Math.pow(t, 0.8);
      for (let j = 0; j < nC; j++) {
        const ph = (j / nC) * TAU, cy = Math.cos(ph), sz = Math.sin(ph);
        const y = cy >= 0 ? r * cy : (r + dp) * cy, z = r * sz * (cy < 0 ? 1 - 0.25 * -cy * (dp / (0.13 * k)) : 1);
        SP.push([x, A0.y + y, A0.z + z]);
        SUV.push([0.32 + (j / nC) * 0.34, 1 - sleeveLen / Hm + t * (sleeveLen / Hm)]);
        // 가중치: 어깨 → 위팔 → (팔꿈치) → 아래팔, 아래쪽 주머니는 흔들림 뼈
        const ex = (x - la.x) * sg;
        let w = ex < -0.04 ? [[uaB, 1]] : ex > 0.04 ? [[laB, 1]] : [[uaB, 0.5 - ex / 0.08], [laB, 0.5 + ex / 0.08]];
        const wsh = 0.5 * sstep(0.02, -0.03, (x - ua.x) * sg);
        if (wsh > 0) w = [...scaleW(w, 1 - wsh), [shB, wsh]];
        const wd = cy < 0 ? Math.pow(-cy, 1.2) * clamp01(dp / (0.1 * k)) * 0.85 : 0;
        if (wd > 0) w = [...scaleW(w, 1 - wd), [dB, wd]];
        SW.push(w);
      }
      SC.push([A0.x, A0.y, A0.z]);
    }
    // 소매도 같은 하오리 재질 (끝단 문양이 소맷부리에 오도록), 행 = 팔 방향
    shell.grid({ rows: nA, cols: nC, wrap: true, P: SP, C: SC, UV: SUV, W: SW, thick: 0.01, capTop: false });
  }
  const band = 0.04 * k;
  const htex = haoriTexture(ch.id, C, Wm, Hm, band); texs.push(htex);
  const hmat = toonMat('#ffffff', rim); hmat.map = htex; mats.push(hmat);
  addSkinned(shell.build(), hmat);

  // ===== 하카마 (부풀었다가 정강이에서 모임) + 각반 + 허리띠 =====
  const low = new ShellBuilder();
  for (const [sg, ul, ll, ft, side] of [[1, lul, lll, lf, 'left'], [-1, rul, rll, rf, 'right']]) {
    const hB = B(hipsNode), ulB = B(hum(side + 'UpperLeg')), llB = B(hum(side + 'LowerLeg'));
    const top = hips.y + 0.07, tuck = lerp(ll.y, ft.y, 0.5), wrapEnd = ft.y + 0.035;
    const axis = (y) => (y >= ul.y ? new THREE.Vector3(ul.x, y, ul.z) : y >= ll.y ? new THREE.Vector3().lerpVectors(ul, ll, (ul.y - y) / (ul.y - ll.y)) : new THREE.Vector3().lerpVectors(ll, ft, (ll.y - y) / (ll.y - ft.y)));
    const keepSide = (x) => x * sg > -0.005;
    const legRing = (y, h) => { const A0 = axis(y); return ringProfile(S, y - h, y + h, A0.x, A0.z, (x, yy, z) => keepSide(x) && Math.hypot(x - A0.x, z - A0.z) < 0.2, 32, 0.07); };
    const piece = (y0, y1, n, rFn, uv0, uv1, wFn, capTop, capBot) => {
      const nC = 24, PP = [], CC = [], UU = [], WW = [];
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1), y = lerp(y0, y1, t), A0 = axis(y), r = legRing(y, 0.03);
        for (let j = 0; j < nC; j++) {
          const a = (j / nC) * TAU, rr = rFn(t, y, ringAt(r, a), a);
          PP.push([A0.x + rr * Math.sin(a), y, A0.z + rr * Math.cos(a)]); UU.push([lerp(uv0, uv1, j / nC), t]); WW.push(wFn(y));
        }
        CC.push([A0.x, y, A0.z]);
      }
      low.grid({ rows: n, cols: nC, wrap: true, P: PP, C: CC, UV: UU, W: WW, thick: 0.008, capTop, capBot });
    };
    const knee = ll.y, legW = (y) => {
      const wu = sstep(ul.y + 0.05, ul.y - 0.1, y), wl = sstep(knee + 0.05, knee - 0.05, y);
      return [[hB, 1 - wu], [ulB, wu * (1 - wl)], [llB, wu * wl]];
    };
    // 하카마: 위(허리) → 엉덩이 → 무릎(가장 넓음) → 정강이 중간에서 모임
    piece(top, tuck, 16, (t, y, rm, a) => {
      const des = y > knee ? lerp(0.12, 0.135, clamp01((ul.y + 0.07 - y) / (ul.y + 0.07 - knee))) : lerp(0.135, 0.07, Math.pow(clamp01((knee - y) / (knee - tuck)), 1.6));
      const flare = y > ul.y ? 0 : 0.01 * Math.max(0, Math.sin(a + (sg > 0 ? 0.3 : -0.3)));
      return Math.max(des * k + flare, rm + (y < knee - (knee - tuck) * 0.7 ? 0.012 : 0.025));
    }, 0.01, 0.49, legW, true, false);
    // 각반: 정강이 감은 흰 천
    piece(tuck + 0.025, wrapEnd, 6, (t, y, rm) => rm + 0.012 - t * 0.003, 0.51, 0.74, () => [[llB, 1]], true, true);
  }
  // 허리띠: 허리 둘레
  {
    const yb = lerp(hips.y, spine.y, 0.6) + 0.02, n = 4, nC = 40, PP = [], CC = [], UU = [], WW = [];
    for (let i = 0; i < n; i++) {
      const y = yb + 0.035 - (0.07 * i) / (n - 1), r = ringProfile(S, y - 0.03, y + 0.03, 0, axisZ(y), torsoKeep, 48, 0.13);
      for (let j = 0; j < nC; j++) { const a = (j / nC) * TAU, rr = ringAt(r, a) + 0.014; PP.push([rr * Math.sin(a), y, axisZ(y) + rr * Math.cos(a)]); UU.push([0.76 + (j / nC) * 0.23, i / (n - 1)]); WW.push(torsoW(y)); }
      CC.push([0, y, axisZ(y)]);
    }
    low.grid({ rows: n, cols: nC, wrap: true, P: PP, C: CC, UV: UU, W: WW, thick: 0.01 });
  }
  const ltex = lowerTexture(C); texs.push(ltex);
  const lmat = toonMat('#ffffff', rim); lmat.map = ltex; mats.push(lmat);
  addSkinned(low.build(), lmat);

  // 다리 충돌용 (옷자락이 다리를 뚫지 않게): [위 뼈, 아래 뼈, 반지름]
  for (const side of ['left', 'right']) {
    physics.legs.push([hum(side + 'UpperLeg'), hum(side + 'LowerLeg'), 0.145 * k], [hum(side + 'LowerLeg'), hum(side + 'Foot'), 0.12 * k]);
  }
  physics.hips = hipsNode;
  const info = { hipsHalf: ringAt(rPiv, Math.PI / 2), hemY: yHem, Wm, Hm };
  return { meshes, mats, texs, physics, info, update: (steps) => clothStep(physics, steps), reset: () => { for (const p of physics.pend) p.init = false; for (const j of physics.jig) j.init = false; } };
}

// ---------- 흔들림 계산 (sim 1스텝 = 1/60초) ----------
const _qy = new THREE.Quaternion(), _Z = new THREE.Vector3(0, 0, 1), _qh = new THREE.Quaternion(), _R2 = new THREE.Vector3(), _P = new THREE.Vector3(), _R = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3(), _q = new THREE.Quaternion();
const _pc = new THREE.Vector3(), _pd = new THREE.Vector3();
function pushOut(X, a, b, r) { // 선분 ab 둘레 반지름 r 캡슐 밖으로 X 밀어냄 → 밀린 양
  _pc.subVectors(b, a); const L2 = _pc.lengthSq(); const t = L2 > 0 ? clamp01(_pd.subVectors(X, a).dot(_pc) / L2) : 0;
  _pc.multiplyScalar(t).add(a); _pd.subVectors(X, _pc); const dd = _pd.length();
  if (dd >= r || dd < 1e-6) return 0; _pd.multiplyScalar((r - dd) / dd); X.add(_pd); return r - dd;
}
function clothStep(ph, steps) {
  if (!steps) return;
  const dt = 1 / 60, wsc = new THREE.Vector3();
  ph.hips.getWorldScale(wsc); const sc = wsc.x;
  const legs = ph.legs.map(([u, l, r]) => [u.getWorldPosition(new THREE.Vector3()), l.getWorldPosition(new THREE.Vector3()), r * sc]);
  const hipsInv = new THREE.Quaternion();
  for (let s = 0; s < steps; s++) {
    // 옷은 중력 방향으로 늘어짐: 엉덩이의 좌우 방향(yaw)만 따르고, 골반이 숙여져도 치마처럼 들리지 않게
    const par0 = ph.pend[0].A.parent; par0.getWorldQuaternion(_qh);
    _a.set(0, 0, 1).applyQuaternion(_qh); _a.y = 0;
    if (_a.lengthSq() < 1e-4) _a.set(0, 1, 0).applyQuaternion(_qh).negate().setY(0);
    _qy.setFromUnitVectors(_Z, _a.normalize());
    for (const p of ph.pend) {
      const par = p.A.parent;
      par.localToWorld(_P.copy(p.pivot));
      _R.subVectors(p.mid, p.pivot).applyQuaternion(_qy).multiplyScalar(sc).add(_P);
      _c.copy(p.mid); par.localToWorld(_c); _R.lerp(_c, 0.3);
      const LA = _R.distanceTo(_P), LB = p.tip.distanceTo(p.mid) * sc;
      _R2.subVectors(p.tip, p.mid).applyQuaternion(_qy).multiplyScalar(sc).add(_R);
      if (!p.init || p.M.distanceTo(_R) > LA || p.T.distanceTo(_R2) > (LA + LB) * 1.2) { p.M.copy(_R); p.Mp.copy(_R); p.T.copy(_R2); p.Tp.copy(_R2); p.init = true; }
      // 위 마디: 관성 + 약한 중력 + 원래 모양으로 복원
      _a.subVectors(p.M, p.Mp).multiplyScalar(0.84); p.Mp.copy(p.M); p.M.add(_a).addScaledVector(G, dt * dt * sc * 0.5); p.M.lerp(_R, 0.16);
      // 아래 마디: 위 마디 기준 원래 모양으로 (약하게) + 중력
      _a.subVectors(p.T, p.Tp).multiplyScalar(0.86); p.Tp.copy(p.T); p.T.add(_a).addScaledVector(G, dt * dt * sc);
      _c.subVectors(_R2, _R).add(p.M); p.T.lerp(_c, 0.07);
      for (const [a, b, r] of legs) {
        pushOut(p.M, a, b, r); pushOut(p.T, a, b, r);
        _b.lerpVectors(p.M, p.T, 0.5); _d.copy(_b); if (pushOut(_b, a, b, r) > 0) { _b.sub(_d); p.T.add(_b); p.M.addScaledVector(_b, 0.5); }
      }
      // 길이 유지 + 위 마디는 원래 방향에서 70°까지만 (치마처럼 수평으로 뜨지 않게)
      _b.subVectors(p.M, _P).normalize(); _c.subVectors(_R, _P).normalize();
      const ang = Math.acos(Math.min(1, Math.max(-1, _b.dot(_c))));
      if (ang > 1.22) { _d.crossVectors(_c, _b).normalize(); _b.copy(_c).applyAxisAngle(_d, 1.22); }
      p.M.copy(_P).addScaledVector(_b, LA);
      _b.subVectors(p.T, p.M).setLength(LB); p.T.copy(p.M).add(_b);
    }
    for (const j of ph.jig) {
      const par = j.bone.parent; par.localToWorld(_R.copy(j.rest));
      if (!j.init || j.X.distanceTo(_R) > 0.5) { j.X.copy(_R); j.Xp.copy(_R); j.init = true; }
      _a.subVectors(j.X, j.Xp).multiplyScalar(0.84); j.Xp.copy(j.X);
      j.X.add(_a).addScaledVector(G, dt * dt * sc * 0.5); j.X.lerp(_R, 0.16);
      _b.subVectors(j.X, _R); const m = j.max * sc; if (_b.length() > m) { _b.setLength(m); j.X.copy(_R).add(_b); }
    }
  }
  // 뼈에 반영
  for (const p of ph.pend) {
    const par = p.A.parent; par.getWorldQuaternion(_qh); hipsInv.copy(_qh).invert();
    par.localToWorld(_P.copy(p.pivot));
    _b.subVectors(p.M, _P).applyQuaternion(hipsInv).normalize();
    p.A.quaternion.setFromUnitVectors(p.dA, _b);
    _q.copy(_qh).multiply(p.A.quaternion).invert();
    _b.subVectors(p.T, p.M).applyQuaternion(_q).normalize();
    p.Bn.quaternion.setFromUnitVectors(p.dB, _b);
  }
  for (const j of ph.jig) j.bone.position.copy(j.bone.parent.worldToLocal(_R.copy(j.X)));
}

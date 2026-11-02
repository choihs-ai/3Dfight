// 파티클 (타격 스파크, 먼지, 화로 불꽃) — 가산 혼합 포인트 스프라이트
import * as THREE from 'three';
import { lerp } from '../core/util.js';

const PMAX = 1400;
const FIELDS = ['x', 'y', 'z', 'vx', 'vy', 'vz', 'life', 'max', 's0', 's1', 'r', 'g', 'b', 'a', 'gr', 'dr'];
const rnd = (a, b) => a + Math.random() * (b - a);
function rdir() { const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u); return [s * Math.cos(t), u, s * Math.sin(t)]; }

const VS = `attribute vec4 aCol;attribute float aSize;uniform float uScale;varying vec4 vC;
void main(){gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);gl_PointSize=min(aSize*uScale/max(gl_Position.w,.1),256.);vC=aCol;}`;
const FS = `varying vec4 vC;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a*=a;gl_FragColor=vec4(vC.rgb*a*vC.a,1.);}`;

export class Particles {
  constructor(scene) {
    this.n = 0;
    for (const k of FIELDS) this[k] = new Float32Array(PMAX);
    this.pos = new Float32Array(PMAX * 3); this.col = new Float32Array(PMAX * 4); this.size = new Float32Array(PMAX);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('aCol', this.aCol); g.setAttribute('aSize', this.aSize);
    this.uScale = { value: 1 };
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, uniforms: { uScale: this.uScale },
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    }));
    this.points.frustumCulled = false; this.points.renderOrder = 10;
    this.geo = g;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, gr = 0, dr = 1) {
    if (this.n >= PMAX) return;
    const i = this.n++;
    this.x[i] = x; this.y[i] = y; this.z[i] = z; this.vx[i] = vx; this.vy[i] = vy; this.vz[i] = vz;
    this.life[i] = this.max[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.r[i] = r; this.g[i] = g; this.b[i] = b; this.a[i] = a; this.gr[i] = gr; this.dr[i] = dr;
  }
  update(dt) {
    let j = 0;
    for (let i = 0; i < this.n; i++) {
      const l = this.life[i] - dt;
      if (l <= 0) continue;
      if (j !== i) for (const k of FIELDS) this[k][j] = this[k][i];
      this.life[j] = l; this.vy[j] += this.gr[j] * dt;
      const d = Math.pow(this.dr[j], dt * 60);
      this.vx[j] *= d; this.vy[j] *= d; this.vz[j] *= d;
      this.x[j] += this.vx[j] * dt; this.y[j] += this.vy[j] * dt; this.z[j] += this.vz[j] * dt;
      if (this.y[j] < 0.02) { this.y[j] = 0.02; this.vy[j] *= -0.3; }
      j++;
    }
    this.n = j;
  }
  // 렌더 직전 GPU 버퍼 갱신
  upload(scale) {
    this.uScale.value = scale;
    for (let i = 0; i < this.n; i++) {
      const t = this.life[i] / this.max[i];
      this.pos[i * 3] = this.x[i]; this.pos[i * 3 + 1] = this.y[i]; this.pos[i * 3 + 2] = this.z[i];
      this.col[i * 4] = this.r[i]; this.col[i * 4 + 1] = this.g[i]; this.col[i * 4 + 2] = this.b[i]; this.col[i * 4 + 3] = this.a[i] * Math.min(1, t * 1.6);
      this.size[i] = lerp(this.s1[i], this.s0[i], t);
    }
    this.geo.setDrawRange(0, this.n);
    for (const a of [this.aPos, this.aCol, this.aSize]) { a.clearUpdateRanges(); a.addUpdateRange(0, this.n * a.itemSize); a.needsUpdate = true; }
    this.points.visible = this.n > 0;
  }
  sparks(p, kind, power = 8) {
    const [x, y, z] = p, E = this.emit.bind(this);
    if (kind === 'hit' || kind === 'counter') {
      const big = power >= 12, c = kind === 'counter' ? [1, 0.4, 0.2] : [1, 0.85, 0.45];
      E(x, y, z, 0, 0, 0, 0.1, big ? 1.6 : 1.1, big ? 2.2 : 1.5, 1, 0.92, 0.7, 1);
      for (let i = 0; i < (big ? 26 : 16); i++) { const d = rdir(), s = rnd(3, big ? 9 : 6.5); E(x, y, z, d[0] * s, d[1] * s + 1, d[2] * s, rnd(0.15, 0.35), rnd(0.07, 0.13), 0.02, c[0], c[1], c[2], 1, -9, 0.9); }
    } else if (kind === 'block') {
      E(x, y, z, 0, 0, 0, 0.08, 0.8, 1.1, 0.5, 0.8, 1, 1);
      for (let i = 0; i < 10; i++) { const d = rdir(), s = rnd(2, 5); E(x, y, z, d[0] * s, d[1] * s, d[2] * s, rnd(0.1, 0.22), 0.07, 0.02, 0.45, 0.8, 1, 1, -6, 0.88); }
    } else if (kind === 'parry') {
      E(x, y, z, 0, 0, 0, 0.18, 2.6, 3.6, 1, 1, 0.9, 1);
      for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2; E(x, y, z, Math.cos(a) * 7, rnd(-0.5, 0.5), Math.sin(a) * 7, 0.28, 0.12, 0.03, 1, 0.85, 0.45, 1, 0, 0.86); }
      for (let i = 0; i < 18; i++) { const d = rdir(), s = rnd(3, 8); E(x, y, z, d[0] * s, d[1] * s + 1, d[2] * s, rnd(0.2, 0.45), 0.1, 0.02, 1, 1, 0.8, 1, -8, 0.9); }
    } else if (kind === 'armor') {
      E(x, y, z, 0, 0, 0, 0.1, 1.2, 1.4, 1, 0.55, 0.15, 1);
      for (let i = 0; i < 12; i++) { const d = rdir(), s = rnd(2, 5); E(x, y, z, d[0] * s, d[1] * s, d[2] * s, 0.25, 0.1, 0.02, 1, 0.55, 0.2, 1, -6, 0.9); }
    } else if (kind === 'dust') {
      for (let i = 0; i < 16; i++) { const a = Math.random() * Math.PI * 2, s = rnd(0.8, 2.2); E(x + Math.cos(a) * 0.3, 0.1, z + Math.sin(a) * 0.3, Math.cos(a) * s, rnd(0.2, 0.8), Math.sin(a) * s, rnd(0.4, 0.8), 0.35, 0.9, 0.35, 0.3, 0.26, 0.35, 0, 0.92); }
    }
  }
  // 원소 타격 폭발 (기본 스파크에 추가)
  elementBurst(p, el, power = 8) {
    const [x, y, z] = p, E = this.emit.bind(this), big = power >= 12, n = big ? 1.6 : 1;
    if (el === 'fire') {
      E(x, y, z, 0, 0, 0, 0.16, 1.6 * n, 2.6 * n, 1, 0.45, 0.1, 1);
      for (let i = 0; i < 22 * n; i++) { const d = rdir(), s = rnd(1.5, 5); E(x, y, z, d[0] * s, Math.abs(d[1]) * s + 1.5, d[2] * s, rnd(0.3, 0.7), rnd(0.25, 0.45), 0.05, 1, rnd(0.3, 0.6), 0.08, 0.9, 2.5, 0.9); }
    } else if (el === 'water') {
      E(x, y, z, 0, 0, 0, 0.14, 1.4 * n, 2.4 * n, 0.3, 0.7, 1, 1);
      for (let i = 0; i < 26 * n; i++) { const a = (i / 26) * Math.PI * 2, s = rnd(3, 6); E(x, y, z, Math.cos(a) * s, rnd(1, 4), Math.sin(a) * s, rnd(0.35, 0.7), rnd(0.08, 0.16), 0.03, 0.45, 0.8, 1, 1, -12, 0.95); }
    } else if (el === 'thunder') {
      E(x, y, z, 0, 0, 0, 0.08, 2.0 * n, 2.6 * n, 0.7, 0.9, 1, 1);
      for (let i = 0; i < 24 * n; i++) { const d = rdir(), s = rnd(8, 16); E(x, y, z, d[0] * s, d[1] * s, d[2] * s, rnd(0.06, 0.16), rnd(0.06, 0.1), 0.02, 0.75, 0.92, 1, 1, 0, 0.8); }
    } else if (el === 'wind') {
      E(x, y, z, 0, 0, 0, 0.14, 1.4 * n, 2.4 * n, 0.5, 1, 0.7, 1);
      for (let i = 0; i < 24 * n; i++) { const a = rnd(0, Math.PI * 2), r = rnd(0.2, 0.5), s = rnd(3, 6); E(x + Math.cos(a) * r, y, z + Math.sin(a) * r, -Math.sin(a) * s, rnd(0.5, 2.5), Math.cos(a) * s, rnd(0.4, 0.8), rnd(0.1, 0.2), 0.03, 0.55, 1, 0.75, 0.9, 0, 0.93); }
    }
  }
  // 휘두르는 중 칼끝에서 흩날리는 원소 입자
  elementSwing(p, el) {
    const [x, y, z] = p, E = this.emit.bind(this);
    if (el === 'fire') { for (let i = 0; i < 3; i++) E(x + rnd(-0.05, 0.05), y, z + rnd(-0.05, 0.05), rnd(-0.4, 0.4), rnd(0.6, 1.6), rnd(-0.4, 0.4), rnd(0.25, 0.5), rnd(0.25, 0.4), 0.05, 1, rnd(0.35, 0.6), 0.1, 0.8, 1.5, 0.95); }
    else if (el === 'water') { for (let i = 0; i < 3; i++) E(x, y, z, rnd(-1, 1), rnd(-0.5, 1), rnd(-1, 1), rnd(0.3, 0.6), rnd(0.07, 0.12), 0.03, 0.5, 0.82, 1, 1, -9, 0.97); }
    else if (el === 'thunder') { for (let i = 0; i < 2; i++) { const d = rdir(); E(x, y, z, d[0] * 6, d[1] * 6, d[2] * 6, rnd(0.04, 0.1), 0.08, 0.02, 0.7, 0.9, 1, 1, 0, 0.8); } }
    else if (el === 'wind') { for (let i = 0; i < 2; i++) E(x, y, z, rnd(-1.2, 1.2), rnd(0, 1), rnd(-1.2, 1.2), rnd(0.35, 0.6), rnd(0.12, 0.22), 0.03, 0.6, 1, 0.8, 0.6, 0, 0.94); }
  }
  // 경기장에 떠다니는 불씨
  embers() {
    if (Math.random() < 0.35) {
      const a = Math.random() * Math.PI * 2, r = rnd(2, 13);
      this.emit(Math.cos(a) * r, rnd(0.1, 1.5), Math.sin(a) * r, rnd(-0.2, 0.2), rnd(0.25, 0.6), rnd(-0.2, 0.2), rnd(2.5, 4.5), 0.06, 0.03, 1, rnd(0.45, 0.7), 0.2, 0.9, 0.02, 0.995);
    }
  }
  // 대나무숲 신사 분위기: 반딧불이, 떨어지는 대나무 잎, 석등 안 작은 불빛
  shrineAmbient(lamps) {
    if (Math.random() < 0.3) { const a = Math.random() * Math.PI * 2, r = rnd(4, 16); this.emit(Math.cos(a) * r, rnd(0.3, 2.2), Math.sin(a) * r, rnd(-0.25, 0.25), rnd(-0.1, 0.15), rnd(-0.25, 0.25), rnd(1.2, 2.6), 0.07, 0.04, 0.75, 1, 0.35, 1, 0, 0.995); }
    if (Math.random() < 0.12) { const a = Math.random() * Math.PI * 2, r = rnd(6, 15); this.emit(Math.cos(a) * r, rnd(5, 8), Math.sin(a) * r, rnd(-0.5, 0.5), rnd(-0.9, -0.5), rnd(-0.5, 0.5), rnd(5, 8), 0.09, 0.08, 0.16, 0.3, 0.12, 0.8, 0, 0.995); }
    for (const b of lamps) if (Math.random() < 0.25) this.emit(b[0] + rnd(-0.08, 0.08), b[1] - 0.05, b[2] + rnd(-0.08, 0.08), 0, rnd(0.1, 0.3), 0, rnd(0.2, 0.4), 0.18, 0.06, 1, 0.6, 0.2, 0.5, 0, 0.98);
  }
  flames(braziers) {
    for (const b of braziers) {
      this.emit(b[0] + rnd(-0.14, 0.14), b[1], b[2] + rnd(-0.14, 0.14), rnd(-0.15, 0.15), rnd(1.1, 1.9), rnd(-0.15, 0.15), rnd(0.35, 0.6), rnd(0.4, 0.6), 0.08, 1, rnd(0.42, 0.6), 0.15, 0.85, 0.6, 0.97);
      if (Math.random() < 0.12) this.emit(b[0], b[1] + 0.2, b[2], rnd(-0.5, 0.5), rnd(1.5, 2.5), rnd(-0.5, 0.5), rnd(0.8, 1.4), 0.06, 0.02, 1, 0.7, 0.3, 1, -0.3, 0.99);
    }
  }
}

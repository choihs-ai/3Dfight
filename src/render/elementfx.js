// 원소 이펙트: 3D 곡선을 따라 원소 셰이더 띠를 그림
//  - 타격: 불꽃 바퀴 / 초승달 물살 / 사방 번개 / 나선 회오리
//  - 오의: 그린 문양(원·물결·번개·소용돌이)이 그 원소로 공간에 나타남 + 원소별 큰 연출
import * as THREE from 'three';
import { elementMaterial } from './elementShader.js';

const MAXP = 96;
const TMP = new THREE.Vector3(), SIDE = new THREE.Vector3(), TAN = new THREE.Vector3(), VIEW = new THREE.Vector3();

class Ribbon {
  constructor(scene) {
    this.pos = new Float32Array(MAXP * 2 * 3); this.u = new Float32Array(MAXP * 2); this.t = new Float32Array(MAXP * 2);
    const g = new THREE.BufferGeometry(), idx = [];
    for (let i = 0; i < MAXP - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    g.setIndex(idx);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aU', new THREE.BufferAttribute(this.u, 1)); g.setAttribute('aT', new THREE.BufferAttribute(this.t, 1));
    for (let i = 0; i < MAXP; i++) { this.u[i * 2] = 0; this.u[i * 2 + 1] = 1; }
    this.geo = g; this.mesh = new THREE.Mesh(g, elementMaterial('fire'));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 13; this.mesh.visible = false;
    scene.add(this.mesh);
    this.mats = {};
  }
  // pts: [[x,y,z]...] (꼬리 → 머리 순), width(m) 또는 폭 함수, life(초), reveal(초)
  start(el, pts, { width = 0.4, life = 0.5, reveal = 0.12, delay = 0, flicker = null, spin = null } = {}) {
    if (!this.mats[el]) this.mats[el] = elementMaterial(el);
    this.mesh.material = this.mats[el];
    this.el = el; this.pts = pts.slice(0, MAXP); this.width = width; this.life = life; this.reveal = reveal;
    this.age = -delay; this.flicker = flicker; this.spin = spin; this.mesh.visible = false; this.active = true;
    const n = this.pts.length;
    for (let i = 0; i < n; i++) { const tt = 1 - i / (n - 1); this.t[i * 2] = tt; this.t[i * 2 + 1] = tt; }
    this.geo.attributes.aT.needsUpdate = true;
    this.geo.setDrawRange(0, (n - 1) * 6);
  }
  update(dt, time, camera) {
    if (!this.active) return;
    this.age += dt;
    if (this.age < 0) return;
    if (this.age > this.life) { this.active = false; this.mesh.visible = false; return; }
    this.mesh.visible = true;
    if (this.flicker && Math.floor(this.age * 30) !== this.lastFl) { this.lastFl = Math.floor(this.age * 30); this.pts = this.flicker(); }
    const m = this.mesh.material, k = this.age / this.life;
    m.uniforms.uTime.value = time; m.uniforms.uReveal.value = Math.min(1.01, this.age / this.reveal);
    m.uniforms.uAlpha.value = k < 0.6 ? 1 : 1 - (k - 0.6) / 0.4;
    // 화면을 향하도록 띠 폭 방향 계산
    camera.getWorldPosition(VIEW);
    const P = this.pts, n = P.length, W = typeof this.width === 'function' ? this.width : () => this.width;
    for (let i = 0; i < n; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
      TAN.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
      TMP.set(P[i][0] - VIEW.x, P[i][1] - VIEW.y, P[i][2] - VIEW.z);
      SIDE.crossVectors(TAN, TMP).normalize();
      const w = W(i / (n - 1), k) * 0.5;
      this.pos[i * 6] = P[i][0] - SIDE.x * w; this.pos[i * 6 + 1] = P[i][1] - SIDE.y * w; this.pos[i * 6 + 2] = P[i][2] - SIDE.z * w;
      this.pos[i * 6 + 3] = P[i][0] + SIDE.x * w; this.pos[i * 6 + 4] = P[i][1] + SIDE.y * w; this.pos[i * 6 + 5] = P[i][2] + SIDE.z * w;
    }
    this.geo.attributes.position.needsUpdate = true;
  }
}

// 곡선 만들기 도우미
const arc = (c, r, a0, a1, n, right, up, lift = 0) => Array.from({ length: n }, (_, i) => {
  const a = a0 + ((a1 - a0) * i) / (n - 1);
  return [c[0] + (right[0] * Math.cos(a) + up[0] * Math.sin(a)) * r, c[1] + (right[1] * Math.cos(a) + up[1] * Math.sin(a)) * r + lift * (i / (n - 1)), c[2] + (right[2] * Math.cos(a) + up[2] * Math.sin(a)) * r];
});
function bolt(from, to, n = 14, jag = 0.18) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const u = i / (n - 1), j = i === 0 || i === n - 1 ? 0 : jag;
    pts.push([from[0] + (to[0] - from[0]) * u + (Math.random() - 0.5) * j, from[1] + (to[1] - from[1]) * u + (Math.random() - 0.5) * j, from[2] + (to[2] - from[2]) * u + (Math.random() - 0.5) * j]);
  }
  return pts;
}

export class ElementFx {
  constructor(scene) { this.pool = Array.from({ length: 20 }, () => new Ribbon(scene)); this.i = 0; }
  next() { return this.pool[this.i++ % this.pool.length]; }
  // 타격 이펙트: p 위치, dir 공격 방향(수평 단위벡터), power
  hit(el, p, dir, power = 8) {
    const big = power >= 12, s = big ? 1.35 : 1;
    const right = [dir[2], 0, -dir[0]], up = [0, 1, 0];
    if (el === 'fire') { // 불꽃 바퀴 + 위로 솟는 불길
      this.next().start('fire', arc(p, 0.55 * s, -0.4, Math.PI * 1.7, 40, right, up), { width: (u) => 0.5 * s * (0.3 + u), life: 0.45, reveal: 0.1 });
      this.next().start('fire', [[p[0], p[1] - 0.6, p[2]], [p[0], p[1] + 0.1, p[2]], [p[0], p[1] + 0.9 * s, p[2]]], { width: 0.7 * s, life: 0.35, reveal: 0.08 });
    } else if (el === 'water') { // 공격 방향으로 휘어지는 초승달 물살 2겹
      for (let k = 0; k < 2; k++) this.next().start('water', arc(p, (0.7 + k * 0.25) * s, Math.PI * (0.9 - k * 0.1), -Math.PI * (0.15 + k * 0.1), 36, right, [dir[0] * 0.5, 0.85, dir[2] * 0.5]), { width: (u) => 0.45 * s * Math.sin(Math.PI * u) + 0.05, life: 0.55, reveal: 0.14, delay: k * 0.05 });
    } else if (el === 'thunder') { // 사방으로 뻗는 번개 줄기
      for (let k = 0; k < (big ? 5 : 3); k++) {
        const a = Math.random() * Math.PI * 2, e = (Math.random() - 0.3) * 1.2, L = (0.9 + Math.random() * 0.8) * s;
        const to = [p[0] + Math.cos(a) * L, p[1] + e * L * 0.6, p[2] + Math.sin(a) * L];
        this.next().start('thunder', bolt(p, to), { width: 0.35, life: 0.25, reveal: 0.04, flicker: () => bolt(p, to) });
      }
    } else { // 나선 회오리 2가닥
      for (let k = 0; k < 2; k++) {
        const pts = Array.from({ length: 48 }, (_, i) => { const u = i / 47, a = u * Math.PI * 4 + k * Math.PI, r = (0.25 + u * 0.45) * s; return [p[0] + Math.cos(a) * r, p[1] - 0.5 + u * 1.3 * s, p[2] + Math.sin(a) * r]; });
        this.next().start('wind', pts, { width: 0.35 * s, life: 0.5, reveal: 0.16, delay: k * 0.04 });
      }
    }
  }
  // 오의: 그린 문양을 원소로 공간에 띄움. center: 상대 가슴, right/up: 화면 기준 축, shape: [-1,1] 2D 점들
  ougiShape(el, center, right, up, shape, scale = 1.4) {
    const pts = shape.map((q) => [center[0] + right[0] * q[0] * scale - up[0] * q[1] * scale, center[1] + right[1] * q[0] * scale - up[1] * q[1] * scale, center[2] + right[2] * q[0] * scale - up[2] * q[1] * scale]);
    if (el === 'thunder') {
      const segs = [];
      for (let i = 0; i < pts.length - 1; i += 1) segs.push(pts[i]);
      const mk = () => segs.flatMap((q, i) => (i < segs.length - 1 ? bolt(q, segs[i + 1], 5, 0.12).slice(0, 4) : [q]));
      this.next().start('thunder', mk(), { width: 0.9, life: 0.9, reveal: 0.08, flicker: mk });
      this.next().start('thunder', mk(), { width: 0.5, life: 0.9, reveal: 0.08, flicker: mk });
    } else {
      const w = el === 'fire' ? 1.0 : el === 'water' ? 0.9 : 0.8;
      this.next().start(el, pts, { width: (u, k) => w * (0.35 + 0.65 * Math.sin(Math.PI * Math.min(1, u * 1.1))) * (1 + k * 0.3), life: 1.0, reveal: 0.35 });
      this.next().start(el, pts.map((q) => [q[0], q[1], q[2]]), { width: w * 0.45, life: 1.0, reveal: 0.3, delay: 0.06 });
    }
  }
  // 오의 원소별 큰 연출 (시전자 a, 상대 d 위치)
  ougiBurst(el, A, D, t = 0) {
    const dx = D[0] - A[0], dz = D[2] - A[2], L = Math.hypot(dx, dz) || 1, dir = [dx / L, 0, dz / L], right = [dir[2], 0, -dir[0]];
    if (el === 'fire') { // 불기둥 + 큰 불꽃 바퀴
      for (let k = 0; k < 3; k++) this.next().start('fire', [[D[0] + (k - 1) * 0.3, 0, D[2]], [D[0] + (k - 1) * 0.2, 1.5, D[2]], [D[0], 3.2, D[2]]], { width: 1.4, life: 0.8, reveal: 0.15, delay: k * 0.05 });
      this.next().start('fire', arc([D[0], 1.2, D[2]], 1.5, 0, Math.PI * 2, 64, right, [0, 1, 0]), { width: (u) => 0.9 * (0.3 + u), life: 0.8, reveal: 0.2 });
    } else if (el === 'water') { // 상대를 휘감고 솟구치는 물줄기
      const pts = Array.from({ length: 72 }, (_, i) => { const u = i / 71, a = u * Math.PI * 3.5, r = 1.6 - u * 0.9; return [D[0] + Math.cos(a) * r, 0.2 + u * 2.8, D[2] + Math.sin(a) * r]; });
      this.next().start('water', pts, { width: (u) => 0.9 * Math.sin(Math.PI * u) + 0.15, life: 1.1, reveal: 0.45 });
    } else if (el === 'thunder') { // 시전자가 지나간 자리에 큰 번개 + 하늘에서 내리꽂히는 번개
      const from = [A[0] - dir[0] * 0.5, 1.0, A[2] - dir[2] * 0.5], to = [D[0] + dir[0] * 2.0, 1.0, D[2] + dir[2] * 2.0];
      this.next().start('thunder', bolt(from, to, 20, 0.35), { width: 1.2, life: 0.6, reveal: 0.05, flicker: () => bolt(from, to, 20, 0.35) });
      for (let k = 0; k < 3; k++) { const top = [D[0] + (Math.random() - 0.5) * 1.5, 6, D[2] + (Math.random() - 0.5) * 1.5]; this.next().start('thunder', bolt(top, [D[0], 0.9, D[2]], 18, 0.5), { width: 0.8, life: 0.4, reveal: 0.04, delay: 0.1 + k * 0.08, flicker: () => bolt(top, [D[0], 0.9, D[2]], 18, 0.5) }); }
    } else { // 두 사람을 감싸는 큰 회오리
      const cx = (A[0] + D[0]) / 2, cz = (A[2] + D[2]) / 2;
      for (let k = 0; k < 3; k++) {
        const pts = Array.from({ length: 80 }, (_, i) => { const u = i / 79, a = u * Math.PI * 6 + k * 2.1, r = 0.6 + u * 1.6; return [cx + Math.cos(a) * r, u * 3.5, cz + Math.sin(a) * r]; });
        this.next().start('wind', pts, { width: 0.7, life: 1.2, reveal: 0.5, delay: k * 0.08 });
      }
    }
  }
  update(dt, time, camera) { for (const r of this.pool) r.update(dt, time, camera); }
}

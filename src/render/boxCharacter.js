// 박스 캐릭터 (프로토타입 그대로) — ③단계에서 GLB 캐릭터로 교체 예정
import * as THREE from 'three';
import { GB } from './geom.js';
import { rimLambert } from './lighting.js';

const PARTS = [];
(function () {
  const add = (j, col, fn) => { const g = new GB(); fn(g); PARTS.push({ j, col, geo: g.build() }); };
  add(0, 'pants', (g) => g.box(0, -0.03, 0, 0.3, 0.17, 0.2));
  add(0, 'belt', (g) => { g.box(0, 0.055, 0, 0.32, 0.06, 0.22); g.box(0.06, -0.01, 0.115, 0.06, 0.12, 0.02); });
  add(1, 'gi', (g) => g.cyl(0, 0, 0, 0.135, 0.155, 0.26, 7));
  add(2, 'gi', (g) => { g.box(0, 0.11, 0, 0.38, 0.24, 0.22); g.sphere(0.2, 0.19, 0, 0.075, 6, 4); g.sphere(-0.2, 0.19, 0, 0.075, 6, 4); });
  add(2, 'skin', (g) => g.cyl(0, 0.2, 0, 0.05, 0.045, 0.3, 6));
  add(3, 'skin', (g) => g.sphere(0, 0.1, 0, 0.115, 8, 6));
  add(3, 'hair', (g) => { g.box(0, 0.175, -0.015, 0.21, 0.07, 0.22); g.box(0, 0.1, -0.095, 0.2, 0.16, 0.05); });
  add(3, 'accent', (g) => { g.box(0, 0.14, 0, 0.24, 0.035, 0.24); g.box(0, 0.13, -0.15, 0.05, 0.03, 0.12); });
  add(3, 'dark', (g) => g.box(0, 0.1, 0.11, 0.13, 0.024, 0.014));
  for (const s of [0, 1]) {
    const sh = s ? 6 : 4, el = s ? 7 : 5, hp = s ? 10 : 8, kn = s ? 11 : 9;
    add(sh, 'skin', (g) => { g.cyl(0, 0, 0, 0.062, 0.052, -0.28, 7); g.sphere(0, -0.28, 0, 0.052, 6, 4); });
    add(el, 'wrap', (g) => g.cyl(0, 0, 0, 0.05, 0.043, -0.24, 7));
    add(el, 'glove', (g) => g.box(0, -0.29, 0, 0.1, 0.11, 0.1));
    add(hp, 'pants', (g) => { g.cyl(0, 0.02, 0, 0.09, 0.066, -0.43, 7); g.sphere(0, -0.43, 0, 0.066, 6, 4); });
    add(kn, 'pants', (g) => g.cyl(0, 0, 0, 0.066, 0.052, -0.38, 7));
    add(kn, 'wrap', (g) => g.cyl(0, -0.33, 0, 0.053, 0.05, -0.41, 7));
    add(kn, 'skin', (g) => g.box(0, -0.45, 0.05, 0.09, 0.07, 0.22));
  }
})();

const hx = (c) => [parseInt(c.slice(1, 3), 16) / 255, parseInt(c.slice(3, 5), 16) / 255, parseInt(c.slice(5, 7), 16) / 255];
export const PALETTES = [
  { gi: '#2f5590', pants: '#1f2a40', belt: '#e9e4d4', skin: '#dca77c', hair: '#1a1a1f', accent: '#62b8ff', glove: '#3f92e8', wrap: '#d9d4c6', dark: '#0a0a10' },
  { gi: '#8a2f2c', pants: '#2b1a1a', belt: '#141414', skin: '#c88f66', hair: '#e8e2d6', accent: '#ff6a54', glove: '#d8463a', wrap: '#3a3030', dark: '#0a0a10' },
];
const RIM = [[0.18, 0.34, 0.6], [0.6, 0.22, 0.16]];

export class BoxCharacter {
  constructor(scene, idx) {
    this.rim = { value: new THREE.Vector3(...RIM[idx]) };
    this.mats = {};
    for (const k in PALETTES[idx]) this.mats[k] = rimLambert(hx(PALETTES[idx][k]), this.rim);
    this.meshes = PARTS.map((p) => {
      const m = new THREE.Mesh(p.geo, this.mats[p.col]);
      m.matrixAutoUpdate = false;
      m.userData.j = p.j;
      scene.add(m);
      return m;
    });
  }
  // anim: ProcAnimator, emit: [r,g,b] 발광
  sync(anim, emit) {
    for (const m of this.meshes) { m.matrix.fromArray(anim.jw[m.userData.j]); m.matrixWorldNeedsUpdate = true; }
    for (const k in this.mats) this.mats[k].emissive.setRGB(emit[0], emit[1], emit[2]);
  }
}

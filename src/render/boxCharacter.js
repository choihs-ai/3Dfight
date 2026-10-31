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
  // 하오리 자락 (가슴·골반에 붙은 넓은 천)
  add(2, 'gi', (g) => { g.box(0, -0.02, -0.02, 0.44, 0.1, 0.26); });
  add(0, 'gi', (g) => { g.box(0.13, -0.2, -0.02, 0.16, 0.36, 0.24); g.box(-0.13, -0.2, -0.02, 0.16, 0.36, 0.24); });
  // 카타나 (오른손목 12번 관절, 로컬 +z 방향)
  add(12, 'tsuka', (g) => g.box(0, 0, -0.06, 0.035, 0.04, 0.3));
  add(12, 'tsuba', (g) => g.box(0, 0, 0.1, 0.1, 0.09, 0.018));
  add(12, 'blade', (g) => {
    // 얇고 살짝 휘어진 칼날 (세그먼트 4개), 끝은 뾰족
    const seg = 4, L0 = 0.12, L1 = 1.0;
    for (let i = 0; i < seg; i++) {
      const z0 = L0 + ((L1 - L0) * i) / seg, z1 = L0 + ((L1 - L0) * (i + 1)) / seg, zc = (z0 + z1) / 2;
      const curve = 0.035 * Math.pow(zc, 2), w = i === seg - 1 ? 0.02 : 0.032;
      g.box(0, curve, zc, 0.008, w, z1 - z0 + 0.004);
    }
  });
})();

const hx = (c) => [parseInt(c.slice(1, 3), 16) / 255, parseInt(c.slice(3, 5), 16) / 255, parseInt(c.slice(5, 7), 16) / 255];

export class BoxCharacter {
  constructor(scene, ch) {
    this.rim = { value: new THREE.Vector3(...ch.rim) };
    this.glow = ch.glow;
    this.mats = {};
    for (const k in ch.colors) this.mats[k] = rimLambert(hx(ch.colors[k]), this.rim);
    this.scene = scene;
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
    const g = this.glow; // 칼날은 원소 빛을 항상 띰
    this.mats.blade.emissive.setRGB(emit[0] + g[0] * 1.6, emit[1] + g[1] * 1.6, emit[2] + g[2] * 1.6);
  }
}

// 캐릭터 교체 시 메시 제거
BoxCharacter.prototype.dispose = function () {
  for (const m of this.meshes) this.scene.remove(m);
  for (const k in this.mats) this.mats[k].dispose();
};

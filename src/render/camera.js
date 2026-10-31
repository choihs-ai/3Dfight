// 락온 카메라 — 내 캐릭터 등 뒤 어깨 너머, 상대를 항상 화면에 둠 (프로토타입 수치 그대로)
import * as THREE from 'three';
import { lerp } from '../core/util.js';

export class LockOnCamera {
  constructor() {
    this.cam = new THREE.PerspectiveCamera(54, 1, 0.08, 160);
    this.e = [0, 2, -6]; this.l = [0, 1, 0]; this.snap = true; this.shake = 0;
    this.eye = new THREE.Vector3();
  }
  // P = 내 파이터, E = 상대, pRootH = 내 애니메이터 rootH, orbit = 데모/결과 화면 회전
  update(dt, t, P, E, pRootH, aspectPortrait, orbit) {
    let eye, look;
    const port = aspectPortrait;
    this.cam.fov = port ? 72 : 54;
    if (orbit) {
      const a = t * 0.12, mx = (P.x + E.x) / 2, mz = (P.z + E.z) / 2;
      eye = [mx + Math.cos(a) * 6.4, 2.4, mz + Math.sin(a) * 6.4]; look = [mx, 1.05, mz];
    } else {
      let dx = E.x - P.x, dz = E.z - P.z;
      const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
      const rx = -dz, rz = dx;
      const back = (port ? 4.3 : 3.1) + Math.max(0, d - 3) * 0.25, side = port ? 0.85 : 0.95, up = port ? 2.55 : 1.9; // 세로 화면에서 내 캐릭터가 상대를 가리지 않게 어깨 쪽으로 더 비킴
      eye = [P.x - dx * back + rx * side, up + Math.max(0, pRootH - 0.95) * 0.4, P.z - dz * back + rz * side];
      const lk = port ? 0.72 : 0.62;
      look = [lerp(P.x, E.x, lk), (port ? 0.85 : 1.05) + Math.min(E.y, 1.5) * 0.35, lerp(P.z, E.z, lk)];
    }
    if (window.__cam) { eye = window.__cam[0]; look = window.__cam[1]; }
    const ke = this.snap ? 1 : 1 - Math.exp(-dt * 7), kl = this.snap ? 1 : 1 - Math.exp(-dt * 10);
    this.snap = false;
    for (let i = 0; i < 3; i++) { this.e[i] = lerp(this.e[i], eye[i], ke); this.l[i] = lerp(this.l[i], look[i], kl); }
    const e = this.e.slice(), l = this.l.slice();
    if (this.shake > 0.002) for (let i = 0; i < 3; i++) { const s = (Math.random() - 0.5) * this.shake; e[i] += s; l[i] += s * 0.6; }
    this.cam.position.set(e[0], e[1], e[2]);
    this.cam.up.set(0, 1, 0);
    this.cam.lookAt(l[0], l[1], l[2]);
    this.cam.updateProjectionMatrix();
    this.cam.updateMatrixWorld();
    this.eye.set(e[0], e[1], e[2]);
  }
}

// 락온 카메라 — 내 캐릭터 등 뒤 어깨 너머, 상대를 항상 화면에 둠 (프로토타입 수치 그대로)
import * as THREE from 'three';
import { lerp } from '../core/util.js';

export class LockOnCamera {
  constructor() {
    this.cam = new THREE.PerspectiveCamera(54, 1, 0.08, 160);
    this.e = [0, 2, -6]; this.l = [0, 1, 0]; this.snap = true; this.shake = 0;
    this.punch = 0; this.shakeDir = [0, 0, 0]; this.cine = null;
    this.eye = new THREE.Vector3();
  }
  // P = 내 파이터, E = 상대, pRootH = 내 애니메이터 rootH, orbit = 데모/결과 화면 회전
  update(dt, t, P, E, pRootH, aspectPortrait, orbit, sim) {
    let eye, look;
    const port = aspectPortrait;
    this.cam.fov = (port ? 72 : 54) - this.punch;
    this.punch *= Math.pow(0.0005, dt); // 강타 줌인은 순식간에 원래대로
    if (orbit) {
      const a = t * 0.12, mx = (P.x + E.x) / 2, mz = (P.z + E.z) / 2;
      eye = [mx + Math.cos(a) * 6.4, 2.4, mz + Math.sin(a) * 6.4]; look = [mx, 1.05, mz];
    } else {
      let dx = E.x - P.x, dz = E.z - P.z;
      const d = Math.hypot(dx, dz) || 1; dx /= d; dz /= d;
      const rx = -dz, rz = dx;
      const back = (port ? 4.6 : 3.4) + Math.max(0, d - 3) * 0.25, side = port ? 1.05 : 1.3, up = port ? 2.7 : 2.05; // 내 캐릭터가 상대를 가리지 않게 어깨 쪽으로 비킴
      eye = [P.x - dx * back + rx * side, up + Math.max(0, pRootH - 0.95) * 0.4, P.z - dz * back + rz * side];
      const lk = port ? 0.78 : 0.7;
      look = [lerp(P.x, E.x, lk), (port ? 0.85 : 1.05) + Math.min(E.y, 1.5) * 0.35, lerp(P.z, E.z, lk)];
    }
    // KO 연출: 옆에서 두 사람을 잡는 시네마틱 카메라
    if (this.cine && !orbit) {
      this.cine.t -= dt;
      if (this.cine.t <= 0) this.cine = null;
      else if (this.cine.mode === 'cast' && sim) {
        // 오의 시전: 시전자 앞쪽에서 얼굴과 칼을 크게
        const A = sim.f[this.cine.a], fx = Math.sin(A.yaw), fz = Math.cos(A.yaw), rx = Math.cos(A.yaw), rz = -Math.sin(A.yaw);
        eye = [A.x + fx * 3.2 + rx * 1.3, 1.7, A.z + fz * 3.2 + rz * 1.3]; look = [A.x, 1.05, A.z];
      } else if (this.cine.mode === 'strike' && sim) {
        // 오의 발동: 두 사람을 옆에서 넓게
        const A = sim.f[this.cine.a], D = sim.f[1 - this.cine.a], mx = (A.x + D.x) / 2, mz = (A.z + D.z) / 2, dx = D.x - A.x, dz = D.z - A.z, d = Math.hypot(dx, dz) || 1;
        eye = [mx - (dz / d) * 4.0, 1.6, mz + (dx / d) * 4.0]; look = [mx, 1.1, mz];
      } else {
        const mx = (P.x + E.x) / 2, mz = (P.z + E.z) / 2, dx = E.x - P.x, dz = E.z - P.z, d = Math.hypot(dx, dz) || 1;
        const s = this.cine.side, px = (-dz / d) * s, pz = (dx / d) * s;
        eye = [mx + px * 3.0 - (dx / d) * 0.8, 1.25, mz + pz * 3.0 - (dz / d) * 0.8]; look = [mx, 0.95, mz];
      }
    }
    if (window.__cam) { eye = window.__cam[0]; look = window.__cam[1]; }
    const ke = this.snap ? 1 : 1 - Math.exp(-dt * 7), kl = this.snap ? 1 : 1 - Math.exp(-dt * 10);
    this.snap = false;
    for (let i = 0; i < 3; i++) { this.e[i] = lerp(this.e[i], eye[i], ke); this.l[i] = lerp(this.l[i], look[i], kl); }
    const e = this.e.slice(), l = this.l.slice();
    if (this.shake > 0.002) {
      // 맞은 방향으로 크게, 나머지는 작게 흔들림
      const sd = this.shakeDir, j = (Math.random() - 0.5) * 2;
      for (let i = 0; i < 3; i++) { const s = (Math.random() - 0.5) * this.shake * 0.5 + sd[i] * j * this.shake; e[i] += s; l[i] += s * 0.6; }
    }
    this.cam.position.set(e[0], e[1], e[2]);
    this.cam.up.set(0, 1, 0);
    this.cam.lookAt(l[0], l[1], l[2]);
    this.cam.updateProjectionMatrix();
    this.cam.updateMatrixWorld();
    this.eye.set(e[0], e[1], e[2]);
  }
}

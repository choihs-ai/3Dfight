// 로우폴리 지오메트리 빌더 (프로토타입 GB) → THREE.BufferGeometry
import * as THREE from 'three';

export class GB {
  constructor() { this.v = []; this.n = []; this.c = [0, 0, 0]; }
  tri(a, b, c) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz);
    if (l < 1e-10) return;
    nx /= l; ny /= l; nz /= l;
    const mx = (a[0] + b[0] + c[0]) / 3 - this.c[0], my = (a[1] + b[1] + c[1]) / 3 - this.c[1], mz = (a[2] + b[2] + c[2]) / 3 - this.c[2];
    if (nx * mx + ny * my + nz * mz < 0) { const t = b; b = c; c = t; nx = -nx; ny = -ny; nz = -nz; }
    this.v.push(...a, ...b, ...c);
    this.n.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
  }
  quad(a, b, c, d) { this.tri(a, b, c); this.tri(a, c, d); }
  box(cx, cy, cz, w, h, d, yaw = 0) {
    this.c = [cx, cy, cz];
    const co = Math.cos(yaw), si = Math.sin(yaw);
    const P = (lx, ly, lz) => [cx + lx * co + lz * si, cy + ly, cz - lx * si + lz * co];
    const x = w / 2, y = h / 2, z = d / 2;
    const p = [P(-x, -y, -z), P(x, -y, -z), P(x, y, -z), P(-x, y, -z), P(-x, -y, z), P(x, -y, z), P(x, y, z), P(-x, y, z)];
    this.quad(p[4], p[5], p[6], p[7]); this.quad(p[1], p[0], p[3], p[2]); this.quad(p[5], p[1], p[2], p[6]);
    this.quad(p[0], p[4], p[7], p[3]); this.quad(p[7], p[6], p[2], p[3]); this.quad(p[0], p[1], p[5], p[4]);
    return this;
  }
  cyl(cx, y0, cz, r0, r1, y1, n = 7, rot = 0) {
    this.c = [cx, (y0 + y1) / 2, cz];
    for (let i = 0; i < n; i++) {
      const a0 = rot + (i / n) * Math.PI * 2, a1 = rot + ((i + 1) / n) * Math.PI * 2;
      const b0 = [cx + Math.cos(a0) * r0, y0, cz + Math.sin(a0) * r0], b1 = [cx + Math.cos(a1) * r0, y0, cz + Math.sin(a1) * r0];
      const t0 = [cx + Math.cos(a0) * r1, y1, cz + Math.sin(a0) * r1], t1 = [cx + Math.cos(a1) * r1, y1, cz + Math.sin(a1) * r1];
      this.quad(b0, b1, t1, t0); this.tri([cx, y0, cz], b0, b1); this.tri([cx, y1, cz], t0, t1);
    }
    return this;
  }
  sphere(cx, cy, cz, r, nl = 8, nr = 6) {
    this.c = [cx, cy, cz];
    const P = (i, j) => { const th = (j / nr) * Math.PI, ph = (i / nl) * Math.PI * 2; return [cx + Math.sin(th) * Math.cos(ph) * r, cy + Math.cos(th) * r, cz + Math.sin(th) * Math.sin(ph) * r]; };
    for (let j = 0; j < nr; j++) for (let i = 0; i < nl; i++) this.quad(P(i, j), P(i + 1, j), P(i + 1, j + 1), P(i, j + 1));
    return this;
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.v, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.computeBoundingSphere();
    return g;
  }
}

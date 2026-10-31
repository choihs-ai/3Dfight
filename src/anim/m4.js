// 4x4 행렬 (column-major) — 프로토타입과 동일. T * Ry * Rx * Rz
export const m4 = {
  create() { const m = new Float32Array(16); m[0] = m[5] = m[10] = m[15] = 1; return m; },
  _t: new Float32Array(16),
  mul(o, a, b) {
    const t = this._t;
    for (let c = 0; c < 4; c++) {
      const b0 = b[c * 4], b1 = b[c * 4 + 1], b2 = b[c * 4 + 2], b3 = b[c * 4 + 3];
      for (let r = 0; r < 4; r++) t[c * 4 + r] = a[r] * b0 + a[4 + r] * b1 + a[8 + r] * b2 + a[12 + r] * b3;
    }
    o.set(t); return o;
  },
  trs(o, x, y, z, rx, ry, rz) {
    const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry), cz = Math.cos(rz), sz = Math.sin(rz);
    const a00 = cy, a01 = sy * sx, a02 = sy * cx, a10 = 0, a11 = cx, a12 = -sx, a20 = -sy, a21 = cy * sx, a22 = cy * cx;
    o[0] = a00 * cz + a01 * sz; o[1] = a10 * cz + a11 * sz; o[2] = a20 * cz + a21 * sz; o[3] = 0;
    o[4] = -a00 * sz + a01 * cz; o[5] = -a10 * sz + a11 * cz; o[6] = -a20 * sz + a21 * cz; o[7] = 0;
    o[8] = a02; o[9] = a12; o[10] = a22; o[11] = 0;
    o[12] = x; o[13] = y; o[14] = z; o[15] = 1; return o;
  },
  pt(m, x, y, z) { return [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]]; },
};

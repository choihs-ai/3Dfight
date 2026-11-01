// 칼 궤적 리본 — 칼날(손잡이 쪽 ~ 칼끝) 위치를 프레임마다 기록해서 원소 색 띠로 그림
import * as THREE from 'three';
import { elementMaterial } from './elementShader.js';

const N = 11;     // 기록하는 로직 프레임 수
const SUB = 4;    // 프레임 사이 곡선 보간 개수
const MAXV = (N - 1) * SUB + 1;

const VS = `attribute vec4 aCol;varying vec4 vC;varying float vU;attribute float aU;
void main(){vC=aCol;vU=aU;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}`;
// vU: 0 = 칼 안쪽, 1 = 칼끝. 칼끝으로 갈수록 밝고 가장자리는 부드럽게
const FS = `varying vec4 vC;varying float vU;uniform vec3 uCore;uniform vec3 uEdge;
void main(){float e=smoothstep(0.,.35,vU)*smoothstep(1.,.85,vU);float core=smoothstep(.55,1.,vU);
vec3 c=mix(uEdge,uCore,core);gl_FragColor=vec4(c*vC.a*e*1.4,1.);}`;

function catmull(p0, p1, p2, p3, t, out) {
  const t2 = t * t, t3 = t2 * t;
  for (let i = 0; i < 3; i++) {
    out[i] = 0.5 * (2 * p1[i] + (-p0[i] + p2[i]) * t + (2 * p0[i] - 5 * p1[i] + 4 * p2[i] - p3[i]) * t2 + (-p0[i] + 3 * p1[i] - 3 * p2[i] + p3[i]) * t3);
  }
  return out;
}

export class SwordTrail {
  constructor(scene, ch) {
    this.samples = []; // 최신이 앞 [{b:[x,y,z], t:[x,y,z]} | null]
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array(MAXV * 2 * 3);
    this.col = new Float32Array(MAXV * 2 * 4);
    this.u = new Float32Array(MAXV * 2);
    this.tt = new Float32Array(MAXV * 2);
    const idx = [];
    for (let i = 0; i < MAXV - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    g.setIndex(idx);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aCol', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aU', new THREE.BufferAttribute(this.u, 1));
    g.setAttribute('aT', new THREE.BufferAttribute(this.tt, 1).setUsage(THREE.DynamicDrawUsage));
    for (let i = 0; i < MAXV; i++) { this.u[i * 2] = 0; this.u[i * 2 + 1] = 1; }
    this.geo = g;
    // 원소 셰이더 (불꽃/물결/번개/바람)
    this.mat = elementMaterial(ch.id);
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 9;
    this.scene = scene;
    scene.add(this.mesh);
    this.jitter = 0;
  }
  // 로직 1프레임마다: active면 현재 칼 위치 기록, 아니면 빈칸으로 서서히 사라짐
  push(active, anim) {
    this.samples.unshift(active ? { b: anim.bladePoint(-0.05), t: anim.bladePoint(1.3) } : null);
    if (this.samples.length > N) this.samples.length = N;
  }
  clear() { this.samples.length = 0; }
  update(time = 0) {
    this.mat.uniforms.uTime.value = time;
    const S = this.samples;
    let v = 0;
    const tmpB = [0, 0, 0], tmpT = [0, 0, 0];
    // 가장 최근의 연속 구간만 그림
    let n = 0;
    while (n < S.length && S[n]) n++;
    if (n >= 2) {
      const get = (i) => S[Math.max(0, Math.min(n - 1, i))];
      for (let i = 0; i < n - 1; i++) {
        for (let k = 0; k < SUB; k++) {
          const t = k / SUB;
          catmull(get(i - 1).b, get(i).b, get(i + 1).b, get(i + 2).b, t, tmpB);
          catmull(get(i - 1).t, get(i).t, get(i + 1).t, get(i + 2).t, t, tmpT);
          this.writeV(v++, tmpB, tmpT, (i + t) / (n - 1));
        }
      }
      this.writeV(v++, get(n - 1).b, get(n - 1).t, 1);
    }
    this.geo.setDrawRange(0, Math.max(0, (v - 1) * 6));
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aCol.needsUpdate = true;
    this.geo.attributes.aT.needsUpdate = true;
    this.mesh.visible = v >= 2;
  }
  writeV(v, b, t, age) {
    const a = Math.pow(1 - age, 1.6), j = this.jitter;
    const P = this.pos, C = this.col;
    for (let i = 0; i < 3; i++) {
      P[v * 6 + i] = b[i] + (j ? (Math.random() - 0.5) * j : 0);
      P[v * 6 + 3 + i] = t[i] + (j ? (Math.random() - 0.5) * j * 2 : 0);
    }
    C[v * 8 + 3] = a; C[v * 8 + 7] = a;
    this.tt[v * 2] = age; this.tt[v * 2 + 1] = age;
  }
  dispose() { this.scene.remove(this.mesh); this.geo.dispose(); this.mat.dispose(); }
}

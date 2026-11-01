// 타격 이펙트: 붓터치 베기 자국 + 충격파 링 (+ 바닥 충격파)
// 텍스처는 캔버스로 그려서 만듦 (이미지 파일 없음)
import * as THREE from 'three';

// 붓 획 텍스처: 가운데 굵고 양끝 가늘어지는 거친 붓질 + 먹 튀김
function brushTexture() {
  const W = 512, H = 128, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  let seed = 7;
  const R = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  g.lineCap = 'round';
  // 붓털 수십 가닥
  for (let k = 0; k < 70; k++) {
    const off = (R() - 0.5) * 2, w = 1.5 + R() * 4, a = 0.25 + R() * 0.6;
    g.strokeStyle = `rgba(255,255,255,${a})`; g.lineWidth = w;
    g.beginPath();
    for (let i = 0; i <= 40; i++) {
      const u = i / 40, x = 20 + u * (W - 40);
      const thick = Math.sin(Math.PI * Math.pow(u, 0.8)) * 44; // 시작은 굵고 끝은 날카롭게
      const y = H / 2 + off * thick + Math.sin(u * 9 + k) * 1.5;
      if (u > 0.98 - R() * 0.25 * Math.abs(off)) break; // 바깥 붓털은 일찍 끊김 (갈라진 끝)
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  }
  // 먹 튀김
  for (let k = 0; k < 40; k++) {
    const x = 60 + R() * (W - 120), y = H / 2 + (R() - 0.5) * 110, r = 0.8 + R() * 3;
    g.fillStyle = `rgba(255,255,255,${0.3 + R() * 0.5})`; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

const STROKE_VS = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
// uP: 획이 그어진 정도(0→1), uA: 투명도, uCol: 원소 색, uCore: 흰 심 세기
const STROKE_FS = `uniform sampler2D uMap;uniform float uP;uniform float uA;uniform vec3 uCol;uniform float uCore;varying vec2 vUv;
void main(){float m=texture2D(uMap,vUv).r;float edge=smoothstep(uP,uP-0.08,vUv.x);m*=edge;
float core=smoothstep(.25,0.,abs(vUv.y-.5))*uCore;vec3 c=mix(uCol,vec3(1.),core*.8);
gl_FragColor=vec4(c*m*uA*2.3,1.);}`;
const RING_FS = `uniform float uT;uniform float uA;uniform vec3 uCol;varying vec2 vUv;
void main(){float d=length(vUv-.5)*2.;float r=uT;float w=.18*(1.-uT)+.03;float m=smoothstep(w,0.,abs(d-r));
gl_FragColor=vec4(uCol*m*uA*1.5,1.);}`;

const ADD = { transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, side: THREE.DoubleSide };

export class HitFx {
  constructor(scene) {
    this.scene = scene;
    const tex = brushTexture();
    this.strokes = [];
    for (let i = 0; i < 8; i++) {
      const u = { uMap: { value: tex }, uP: { value: 0 }, uA: { value: 0 }, uCol: { value: new THREE.Color() }, uCore: { value: 1 } };
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.34), new THREE.ShaderMaterial({ vertexShader: STROKE_VS, fragmentShader: STROKE_FS, uniforms: u, ...ADD }));
      m.visible = false; m.frustumCulled = false; m.renderOrder = 12; scene.add(m);
      this.strokes.push({ m, u, t: 1, life: 0.32, len: 1 });
    }
    this.rings = [];
    for (let i = 0; i < 8; i++) {
      const u = { uT: { value: 0 }, uA: { value: 0 }, uCol: { value: new THREE.Color() } };
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShaderMaterial({ vertexShader: STROKE_VS, fragmentShader: RING_FS, uniforms: u, ...ADD }));
      m.visible = false; m.frustumCulled = false; m.renderOrder = 11; scene.add(m);
      this.rings.push({ m, u, t: 1, life: 0.3, size: 1, ground: false });
    }
    this.si = 0; this.ri = 0;
  }
  // 붓터치: p 위치, screenAng 화면에서 칼이 지나간 각도, size 길이(m)
  stroke(p, screenAng, color, size = 1.4, core = 1) {
    const s = this.strokes[this.si++ % this.strokes.length];
    s.t = 0; s.len = size; s.ang = screenAng; s.flip = Math.random() < 0.5;
    s.m.position.set(p[0], p[1], p[2]); s.u.uCol.value.setRGB(color[0], color[1], color[2]); s.u.uCore.value = core;
    s.m.visible = true;
  }
  ring(p, color, size = 1.2, ground = false) {
    const r = this.rings[this.ri++ % this.rings.length];
    r.t = 0; r.size = size; r.ground = ground;
    r.m.position.set(p[0], ground ? 0.03 : p[1], p[2]); r.u.uCol.value.setRGB(color[0], color[1], color[2]);
    r.m.visible = true;
  }
  // 매 렌더 프레임 (히트스톱 중에도 진행 → 멈춘 화면 위로 이펙트가 터짐)
  update(dt, camera) {
    const q = camera.quaternion;
    for (const s of this.strokes) {
      if (!s.m.visible) continue;
      s.t += dt;
      const k = s.t / s.life;
      if (k >= 1) { s.m.visible = false; continue; }
      s.u.uP.value = Math.min(1.08, k * 6);           // 처음 0.05초 동안 쓱 그어짐
      s.u.uA.value = k < 0.4 ? 1 : 1 - (k - 0.4) / 0.6; // 이후 서서히 사라짐
      s.m.quaternion.copy(q);
      s.m.rotateZ(s.ang);
      const sc = s.len * (1 + k * 0.25);
      s.m.scale.set(s.flip ? -sc : sc, sc * (1 - k * 0.3), 1);
    }
    for (const r of this.rings) {
      if (!r.m.visible) continue;
      r.t += dt;
      const k = r.t / r.life;
      if (k >= 1) { r.m.visible = false; continue; }
      r.u.uT.value = 1 - Math.pow(1 - k, 2.2); r.u.uA.value = 1 - k;
      if (r.ground) r.m.rotation.set(-Math.PI / 2, 0, 0); else r.m.quaternion.copy(q);
      const sc = r.size * (r.ground ? 2.2 : 1);
      r.m.scale.set(sc, sc, 1);
    }
  }
}

// 경기장: 달밤의 대나무숲 신사 (전부 코드로 생성 — 모델·텍스처 파일 없음)
// 흰 자갈 마당(갈퀴 결) · 나무 울타리 · 석등 8개 · 붉은 도리이 · 작은 신사 · 대나무 숲 · 달밤 하늘
import * as THREE from 'three';
import { seeded } from '../core/util.js';
import { GB } from './geom.js';
import { rimLambert } from './lighting.js';

const norm = (v) => { const l = Math.hypot(...v); return v.map((x) => x / l); };
const MOON = norm([0.28, 0.36, 0.89]);              // 신사 위쪽 하늘
export const SHRINE_ENV = {
  fog: [0.045, 0.06, 0.12], fogRange: [24, 80],
  sun: norm([0.35, 0.8, 0.5]), sunCol: [0.42, 0.5, 0.78],  // 달빛
  sky: [0.2, 0.24, 0.4], gnd: [0.07, 0.07, 0.09], ambient: 'shrine',
};

const NOISE = `float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}
`;
const LIGHT = `uniform vec3 uSunDir;uniform vec3 uSunCol;uniform vec3 uSkyAmb;uniform vec3 uGndAmb;
uniform vec4 uPL[4];uniform vec3 uPLC[4];uniform vec3 uCam;uniform vec3 uFogCol;uniform vec2 uFog;
vec3 light(vec3 b,vec3 n,vec3 w){vec3 c=b*mix(uGndAmb,uSkyAmb,n.y*.5+.5);c+=b*uSunCol*max(dot(n,uSunDir),0.);
for(int i=0;i<4;i++){vec3 L=uPL[i].xyz-w;float d=length(L);float at=clamp(1.-d/uPL[i].w,0.,1.);c+=b*uPLC[i]*at*at*max(dot(n,L/max(d,.001)),0.);}
return c;}
vec3 fog(vec3 c,vec3 w){return mix(c,uFogCol,smoothstep(uFog.x,uFog.y,length(w-uCam)));}
`;
// 바닥: 가운데 흰 자갈(동심원 갈퀴 결) + 돌 테두리 + 이끼 땅 + 신사로 가는 디딤돌
const FS_GROUND = LIGHT + NOISE + `varying vec3 vW;uniform vec3 uShd[2];
void main(){vec2 p=vW.xz;float r=length(p);float n1=vn(p*3.1),n2=vn(p*.45);vec3 col;
if(r<11.){
  float rake=smoothstep(.25,.75,sin(r*10.+n2*1.5)*.5+.5);
  col=mix(vec3(.4,.41,.45),vec3(.54,.55,.6),n1*.6+rake*.4);
  col*=.9+.1*h21(floor(p*38.));
  float dais=1.-smoothstep(1.25,1.3,r);
  col=mix(col,mix(vec3(.3,.3,.33),vec3(.4,.4,.43),n1)*(1.-.5*(1.-smoothstep(.02,.05,abs(r-1.05)))),dais);
}else if(r<11.7){float a=atan(p.y,p.x)/6.28318+.5;float fa=fract(a*52.);col=mix(vec3(.06),vec3(.34,.34,.36)*(.8+.3*n1),smoothstep(.02,.08,min(fa,1.-fa)));}
else{
  col=mix(vec3(.05,.08,.05),vec3(.1,.15,.08),n2)*(.7+.45*n1);
  if(p.y>11.5&&p.y<23.&&abs(p.x)<1.8){vec2 q=vec2(p.x,fract(p.y/1.3)*1.3-.65);float st=length(q*vec2(.75,1.))-.5-.08*n1;col=mix(vec3(.3,.3,.32)*(.8+.3*n1),col,smoothstep(0.,.05,st));}
}
for(int i=0;i<2;i++){float d=length(p-uShd[i].xy);col*=mix(.32,1.,smoothstep(uShd[i].z*.2,uShd[i].z,d));}
gl_FragColor=vec4(fog(light(col,vec3(0.,1.,0.),vW),vW),1.);}`;
const VS_GROUND = `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
// 하늘: 남색 밤하늘 + 큰 달과 달무리 + 별 + 겹겹이 먼 산 + 옅은 구름
const VS_SKY = `varying vec2 vUV;void main(){vUV=position.xy;gl_Position=vec4(position.xy,.9999,1.);}`;
const FS_SKY = NOISE + `varying vec2 vUV;uniform vec3 uR;uniform vec3 uU;uniform vec3 uF;uniform vec2 uTan;uniform vec3 uMoon;uniform float uT;uniform vec3 uFogCol;
void main(){vec3 d=normalize(uF+uR*vUV.x*uTan.x+uU*vUV.y*uTan.y);float y=d.y;float az=atan(d.z,d.x);
vec3 hor=vec3(.1,.14,.27),mid=vec3(.04,.06,.15),top=vec3(.01,.015,.05);
vec3 c=mix(hor,mid,smoothstep(0.,.25,y));c=mix(c,top,smoothstep(.2,.8,y));
vec2 sp=vec2(az*110.,y*110.);float s=h21(floor(sp));vec2 fp=fract(sp)-.5;
c+=vec3(.9,.92,1.)*step(.993,s)*smoothstep(.1,.5,y)*smoothstep(.3,.0,length(fp))*(.55+.45*sin(uT*1.5+s*60.));
float m=dot(d,uMoon);
c+=vec3(.55,.62,.85)*pow(max(m,0.),40.)*.35+vec3(.3,.35,.5)*pow(max(m,0.),6.)*.12;
float disk=smoothstep(.9972,.9976,m);
vec3 moon=vec3(1.,.97,.86)*(.85+.15*vn(vec2(az,y)*180.));
c=mix(c,moon,disk);
float cl=vn(vec2(az*3.+uT*.01,y*9.))*smoothstep(.05,.3,y)*smoothstep(.6,.3,y);c=mix(c,vec3(.12,.15,.26),smoothstep(.55,.8,cl)*.6);
vec2 cs=vec2(cos(az),sin(az));
float r1=.05+.09*vn(cs*2.+3.)+.03*vn(cs*9.);float r2=.02+.05*vn(cs*4.+11.)+.02*vn(cs*13.);
if(y<r1)c=mix(vec3(.05,.07,.13),hor,.25);
if(y<r2)c=vec3(.025,.035,.07);
if(y<0.)c=uFogCol;
gl_FragColor=vec4(c,1.);}`;

const v3 = (a) => new THREE.Vector3(...a);

export function buildShrine(scene) {
  const root = new THREE.Group(); scene.add(root);
  const R = seeded(11);
  const rim = { value: v3([0.04, 0.05, 0.09]) };
  const G = { red: new GB(), black: new GB(), stone: new GB(), wood: new GB(), paper: new GB(), lamp: new GB() };
  // ---- 나무 울타리 (신사 쪽 길은 비움) ----
  const FR = 12.0, posts = 56;
  for (let i = 0; i < posts; i++) {
    const a = (i / posts) * Math.PI * 2, a2 = ((i + 1) / posts) * Math.PI * 2;
    const deg = ((a * 180) / Math.PI) % 360;
    if (deg > 80 && deg < 100) continue;
    const x = Math.cos(a) * FR, z = Math.sin(a) * FR;
    G.wood.box(x, 0.4, z, 0.13, 0.8, 0.13, -a);
    const deg2 = ((a2 * 180) / Math.PI) % 360;
    if (deg2 > 80 && deg2 < 100) continue;
    const mx = (Math.cos(a) + Math.cos(a2)) / 2 * FR, mz = (Math.sin(a) + Math.sin(a2)) / 2 * FR, len = 2 * FR * Math.sin(Math.PI / posts);
    for (const yy of [0.32, 0.64]) G.wood.box(mx, yy, mz, len, 0.07, 0.06, -(a + a2) / 2 + Math.PI / 2);
  }
  // ---- 석등 8개 ----
  const LAMPS = [];
  for (const deg of [25, 55, 125, 155, 205, 235, 305, 335]) {
    const a = (deg * Math.PI) / 180, x = Math.cos(a) * 13.0, z = Math.sin(a) * 13.0;
    G.stone.box(x, 0.12, z, 0.8, 0.24, 0.8);
    G.stone.cyl(x, 0.24, z, 0.13, 0.11, 1.25, 8);
    G.stone.box(x, 1.32, z, 0.66, 0.15, 0.66);
    G.stone.box(x, 1.62, z, 0.5, 0.45, 0.5);
    for (const [ox, oz, w, d] of [[0.255, 0, 0.02, 0.24], [-0.255, 0, 0.02, 0.24], [0, 0.255, 0.24, 0.02], [0, -0.255, 0.24, 0.02]]) G.lamp.box(x + ox, 1.64, z + oz, w, 0.24, d);
    G.stone.cyl(x, 1.85, z, 0.62, 0.06, 2.2, 4, Math.PI / 4);
    G.stone.sphere(x, 2.27, z, 0.08, 6, 4);
    LAMPS.push([x, 1.64, z]);
  }
  // ---- 붉은 도리이 (신사 가는 길) ----
  const TZ = 15.5;
  for (const sx of [-2.1, 2.1]) { G.red.cyl(sx, 0, TZ, 0.24, 0.2, 4.7, 10); G.black.cyl(sx, 0, TZ, 0.3, 0.3, 0.35, 10); }
  G.red.box(0, 3.9, TZ, 5.4, 0.24, 0.26);                 // 누키
  G.red.box(0, 4.65, TZ, 6.0, 0.28, 0.4);                 // 시마키
  G.black.box(0, 4.92, TZ, 6.6, 0.26, 0.55);              // 가사기
  G.black.box(-3.35, 5.0, TZ, 0.6, 0.18, 0.55, 0); G.black.box(3.35, 5.0, TZ, 0.6, 0.18, 0.55, 0);
  G.red.box(0, 4.28, TZ, 0.22, 0.6, 0.22);                // 가운데 기둥
  G.wood.box(0, 4.28, TZ - 0.13, 0.6, 0.5, 0.04);         // 현판
  // ---- 작은 신사 ----
  const SZ = 22.5;
  G.stone.box(0, 0.3, SZ, 7.2, 0.6, 5.6);
  for (let k = 0; k < 3; k++) G.stone.box(0, 0.1 + k * 0.1, SZ - 2.9 - k * 0.35, 2.4, 0.2 + k * 0.2, 0.35);
  for (const [px, pz] of [[-2.6, -1.8], [2.6, -1.8], [-2.6, 1.8], [2.6, 1.8], [-0.9, -1.8], [0.9, -1.8]]) G.red.cyl(px, 0.6, SZ + pz, 0.16, 0.16, 3.4, 8);
  G.wood.box(0, 2.0, SZ + 1.8, 5.2, 2.8, 0.15); G.wood.box(-2.6, 2.0, SZ, 0.15, 2.8, 3.6); G.wood.box(2.6, 2.0, SZ, 0.15, 2.8, 3.6);
  G.paper.box(0, 1.8, SZ - 1.75, 1.6, 2.2, 0.06); G.paper.box(-1.75, 1.8, SZ - 1.75, 1.4, 2.2, 0.06); G.paper.box(1.75, 1.8, SZ - 1.75, 1.4, 2.2, 0.06);
  G.red.box(0, 3.4, SZ - 1.8, 5.6, 0.22, 0.25);
  // 박공 지붕 (앞뒤로 기울어진 두 판 + 용마루)
  {
    const roof = (z0, sign) => {
      const g = G.black, n0 = g.v.length;
      g.box(0, 0, 0, 7.4, 0.2, 3.4);
      const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), sign * 0.5), v = new THREE.Vector3(), nn = new THREE.Vector3();
      for (let i = n0; i < g.v.length; i += 3) {
        v.set(g.v[i], g.v[i + 1], g.v[i + 2]).applyQuaternion(q).add(new THREE.Vector3(0, 4.35, z0)); g.v[i] = v.x; g.v[i + 1] = v.y; g.v[i + 2] = v.z;
        nn.set(g.n[i], g.n[i + 1], g.n[i + 2]).applyQuaternion(q); g.n[i] = nn.x; g.n[i + 1] = nn.y; g.n[i + 2] = nn.z;
      }
    };
    roof(SZ - 1.45, 1); roof(SZ + 1.45, -1);
    G.black.box(0, 5.15, SZ, 7.6, 0.3, 0.4);
  }
  LAMPS.push([0, 1.9, SZ - 2.2]); // 신사 앞 불빛
  const COL = { red: [0.6, 0.09, 0.06], black: [0.07, 0.065, 0.075], stone: [0.42, 0.42, 0.45], wood: [0.3, 0.2, 0.13], paper: [0.85, 0.78, 0.6], lamp: [1, 0.85, 0.55] };
  const lampMats = [];
  for (const [k, g] of Object.entries(G)) {
    if (!g.v.length) continue;
    const m = rimLambert(COL[k], rim);
    if (k === 'lamp' || k === 'paper') { m.emissive.setRGB(...(k === 'lamp' ? [1, 0.62, 0.25] : [0.55, 0.38, 0.16])); lampMats.push(m); }
    root.add(new THREE.Mesh(g.build(), m));
  }
  // ---- 대나무 숲 (인스턴싱: 대 260개 + 잎 뭉치) ----
  {
    const stalk = new GB();
    for (let i = 0; i < 8; i++) { stalk.cyl(0, i / 8, 0, 1, 1, (i + 1) / 8 - 0.004, 7); stalk.cyl(0, (i + 1) / 8 - 0.006, 0, 1.2, 1.2, (i + 1) / 8 + 0.006, 7); }
    const leaf = new GB().sphere(0, 0, 0, 1, 7, 4);
    const N = 260, LP = 4, sm = new THREE.InstancedMesh(stalk.build(), rimLambert([0.42, 0.55, 0.3], rim), N), lm = new THREE.InstancedMesh(leaf.build(), rimLambert([0.1, 0.22, 0.11], rim), N * LP);
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), c = new THREE.Color();
    let n = 0, ln = 0;
    for (let tries = 0; n < N && tries < 4000; tries++) {
      const a = R() * Math.PI * 2, r = 15 + Math.pow(R(), 0.8) * 19, deg = (((a * 180) / Math.PI) % 360 + 360) % 360;
      if (deg > 68 && deg < 112 && r < 28) continue; // 신사 쪽 트임
      const x = Math.cos(a) * r, z = Math.sin(a) * r, h = 7 + R() * 7, rad = 0.06 + R() * 0.06;
      e.set((R() - 0.5) * 0.12, 0, (R() - 0.5) * 0.12); q.setFromEuler(e);
      M.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(rad, h, rad)); sm.setMatrixAt(n, M);
      c.setRGB(0.75 + R() * 0.35, 0.8 + R() * 0.3, 0.7 + R() * 0.3); sm.setColorAt(n, c); n++;
      for (let k = 0; k < LP; k++) {
        // 작은 잎 뭉치를 비스듬히 여러 개 (납작한 원반처럼 보이지 않게)
        const yy = h * (0.55 + R() * 0.42), s = 0.45 + R() * 0.6, lq = new THREE.Quaternion().setFromEuler(new THREE.Euler((R() - 0.5) * 1.2, R() * 6.3, (R() - 0.5) * 1.2));
        M.compose(new THREE.Vector3(x + (R() - 0.5) * 1.4, yy, z + (R() - 0.5) * 1.4), lq, new THREE.Vector3(s * 1.6, s * 0.5, s * 0.8)); lm.setMatrixAt(ln, M);
        c.setRGB(0.7 + R() * 0.5, 0.8 + R() * 0.4, 0.7 + R() * 0.4); lm.setColorAt(ln, c); ln++;
      }
    }
    sm.count = n; lm.count = ln;
    root.add(sm, lm);
  }
  // ---- 석등 불빛 (메시용 포인트라이트 4개: 마당 쪽 석등) ----
  const lit = [LAMPS[0], LAMPS[3], LAMPS[4], LAMPS[7]];
  const lights = lit.map((b) => { const l = new THREE.PointLight(0xffa050, 1, 9, 1); l.color.setRGB(1, 0.62, 0.3); l.position.set(b[0], b[1], b[2]); root.add(l); return l; });
  // ---- 바닥 · 하늘 ----
  const PL = Array.from({ length: 4 }, () => new THREE.Vector4()), PLC = Array.from({ length: 4 }, () => new THREE.Vector3());
  const E = SHRINE_ENV;
  const groundU = {
    uSunDir: { value: v3(E.sun) }, uSunCol: { value: v3(E.sunCol) }, uSkyAmb: { value: v3(E.sky) }, uGndAmb: { value: v3(E.gnd) },
    uPL: { value: PL }, uPLC: { value: PLC }, uCam: { value: new THREE.Vector3() }, uFogCol: { value: v3(E.fog) }, uFog: { value: new THREE.Vector2(...E.fogRange) },
    uShd: { value: [new THREE.Vector3(), new THREE.Vector3()] },
  };
  root.add(new THREE.Mesh(new THREE.PlaneGeometry(180, 180).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({ vertexShader: VS_GROUND, fragmentShader: FS_GROUND, uniforms: groundU })));
  const skyG = new THREE.BufferGeometry();
  skyG.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const skyU = { uR: { value: new THREE.Vector3() }, uU: { value: new THREE.Vector3() }, uF: { value: new THREE.Vector3() }, uTan: { value: new THREE.Vector2() }, uMoon: { value: v3(MOON) }, uT: { value: 0 }, uFogCol: { value: v3(E.fog) } };
  const sky = new THREE.Mesh(skyG, new THREE.ShaderMaterial({ vertexShader: VS_SKY, fragmentShader: FS_SKY, uniforms: skyU, depthTest: false, depthWrite: false }));
  sky.frustumCulled = false; sky.renderOrder = -10; root.add(sky);

  return {
    root, name: '대나무숲 신사', braziers: LAMPS.slice(0, 8), env: E,
    update(t, camera, eye, shadows) {
      for (let i = 0; i < 4; i++) {
        const b = lit[i], fl = 1.0 + 0.18 * Math.sin(t * 11 + i * 2) + 0.08 * Math.sin(t * 27 + i);
        PL[i].set(b[0], b[1], b[2], 8); PLC[i].set(fl, 0.6 * fl, 0.28 * fl);
        lights[i].intensity = fl * 1.4 * Math.PI;
      }
      groundU.uCam.value.copy(eye);
      for (let i = 0; i < 2; i++) groundU.uShd.value[i].set(...shadows[i]);
      const m = camera.matrixWorld.elements;
      skyU.uR.value.set(m[0], m[1], m[2]); skyU.uU.value.set(m[4], m[5], m[6]); skyU.uF.value.set(-m[8], -m[9], -m[10]);
      const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
      skyU.uTan.value.set(tanY * camera.aspect, tanY); skyU.uT.value = t;
    },
    dispose() { scene.remove(root); root.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); },
  };
}

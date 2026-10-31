// 경기장: 돌바닥(셰이더), 하늘(셰이더), 기둥/담/화로, 화로 불빛
import * as THREE from 'three';
import { seeded } from '../core/util.js';
import { GB } from './geom.js';
import { rimLambert, SUN, MOON, SUN_COL, SKY_AMB, GND_AMB, FOGC, FOG } from './lighting.js';

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
const FS_GROUND = LIGHT + NOISE + `varying vec3 vW;uniform vec3 uShd[2];
void main(){vec2 p=vW.xz;float r=length(p);float a=atan(p.y,p.x)/6.28318+.5;float n1=vn(p*2.3),n2=vn(p*.45);vec3 col;
if(r<11.){float rr=r/1.15;float ring=floor(rr);float segs=floor(5.+ring*5.5);float sa=a*segs+ring*.37;float seg=floor(sa);
 float fr=fract(rr),fa=fract(sa);float ew=min(min(fr,1.-fr)*1.15,min(fa,1.-fa)*6.28318*max(r,.3)/segs);float mort=smoothstep(.015,.05,ew);
 float hv=h21(vec2(ring+.5,seg+.5));vec3 st=mix(vec3(.22,.2,.19),vec3(.4,.37,.33),hv)*(.8+.35*n1);col=mix(vec3(.05,.045,.04),st,mort);
 col=mix(col,vec3(.58,.44,.22)*(.8+.3*n1),(1.-smoothstep(.03,.07,abs(r-2.6)))*.85);
 if(ring<1.){col=mix(vec3(.24,.19,.14),vec3(.44,.35,.22),n1)*.9;col=mix(col,vec3(.62,.47,.24),1.-smoothstep(.02,.05,abs(r-.75)));}
 col*=.85+.15*n2;}
else if(r<11.7){float sa=a*64.;float fa=fract(sa);col=mix(vec3(.05),vec3(.36,.33,.3)*(.8+.3*n1),smoothstep(.02,.08,min(fa,1.-fa)));}
else{col=mix(vec3(.08,.07,.06),vec3(.15,.13,.1),n2)*(.75+.4*n1);col=mix(col,vec3(.07,.09,.05),smoothstep(.55,.75,vn(p*.25)));}
for(int i=0;i<2;i++){float d=length(p-uShd[i].xy);col*=mix(.32,1.,smoothstep(uShd[i].z*.2,uShd[i].z,d));}
gl_FragColor=vec4(fog(light(col,vec3(0.,1.,0.),vW),vW),1.);}`;
const VS_GROUND = `varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
const VS_SKY = `varying vec2 vUV;void main(){vUV=position.xy;gl_Position=vec4(position.xy,.9999,1.);}`;
const FS_SKY = NOISE + `varying vec2 vUV;uniform vec3 uR;uniform vec3 uU;uniform vec3 uF;uniform vec2 uTan;uniform vec3 uMoon;uniform float uT;uniform vec3 uFogCol;
void main(){vec3 d=normalize(uF+uR*vUV.x*uTan.x+uU*vUV.y*uTan.y);float y=d.y;float az=atan(d.z,d.x);
vec3 hor=vec3(.5,.26,.18),mid=vec3(.19,.1,.17),top=vec3(.02,.025,.07);
vec3 c=mix(hor,mid,smoothstep(0.,.22,y));c=mix(c,top,smoothstep(.18,.75,y));
vec2 sp=vec2(az*90.,y*90.);float s=h21(floor(sp));vec2 fp=fract(sp)-.5;
c+=vec3(.95)*step(.992,s)*smoothstep(.12,.5,y)*smoothstep(.3,.0,length(fp))*(.6+.4*sin(uT*2.+s*50.));
float m=dot(d,uMoon);c+=vec3(1.,.94,.82)*smoothstep(.9986,.9992,m);c+=vec3(.6,.42,.38)*pow(max(m,0.),70.)*.55;
vec2 cs=vec2(cos(az),sin(az));
float r1=.03+.07*vn(cs*3.+7.)+.025*vn(cs*11.);float r2=.015+.035*vn(cs*5.+20.);
if(y<r1)c=mix(vec3(.11,.065,.075),hor,.3);
if(y<r2)c=mix(vec3(.07,.045,.05),hor,.22);
if(y<0.)c=uFogCol;
gl_FragColor=vec4(c,1.);}`;

const v3 = (a) => new THREE.Vector3(...a);

export function buildArena(scene) {
  // 기둥, 담, 화로
  const R = seeded(7);
  const stone = new GB(), dark = new GB(), metal = new GB(), BRAZ = [];
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + 0.11, rr = 13.8, x = Math.cos(a) * rr, z = Math.sin(a) * rr;
    const broken = R() < 0.35, h = broken ? 1.4 + R() * 2.2 : 5.2 + R() * 1.6;
    stone.box(x, 0.3, z, 1.3, 0.6, 1.3, a);
    stone.cyl(x, 0.6, z, 0.46, 0.4, h, 8, a);
    if (!broken) { stone.box(x, h + 0.18, z, 1.15, 0.36, 1.15, a); stone.box(x, h + 0.45, z, 0.9, 0.18, 0.9, a); }
    else stone.box(x + Math.cos(a + 1.3) * 1.3, 0.22, z + Math.sin(a + 1.3) * 1.3, 0.7, 0.44, 0.9, a + R());
  }
  for (let i = 0; i < 34; i++) { const a = (i / 34) * Math.PI * 2, rr = 19 + R() * 1.5, h = 1.2 + R() * 3.5; dark.box(Math.cos(a) * rr, h / 2, Math.sin(a) * rr, 3.4, h, 1, -a + Math.PI / 2); }
  for (let i = 0; i < 48; i++) { const a = ((i + 0.5) / 48) * Math.PI * 2, rr = 11.35; dark.box(Math.cos(a) * rr, 0.09, Math.sin(a) * rr, 1.35, 0.18, 0.55, -a + Math.PI / 2); }
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2, rr = 12.3, x = Math.cos(a) * rr, z = Math.sin(a) * rr;
    metal.cyl(x, 0, z, 0.16, 0.08, 1.35, 6); metal.cyl(x, 1.35, z, 0.18, 0.46, 1.72, 8); BRAZ.push([x, 1.8, z]);
  }
  const rim = { value: v3([0.05, 0.03, 0.03]) };
  for (const [g, col] of [[stone, [0.5, 0.46, 0.42]], [dark, [0.28, 0.25, 0.24]], [metal, [0.2, 0.18, 0.17]]]) {
    scene.add(new THREE.Mesh(g.build(), rimLambert(col, rim)));
  }
  // 화로 불빛 (메시용 three 포인트라이트)
  const lights = BRAZ.map((b) => {
    const l = new THREE.PointLight(0xff8533, 1, 11, 1);
    l.color.setRGB(1, 0.52, 0.2);
    l.position.set(b[0], b[1] + 0.3, b[2]);
    scene.add(l);
    return l;
  });

  // 바닥 셰이더 (프로토타입 동일)
  const PL = Array.from({ length: 4 }, () => new THREE.Vector4());
  const PLC = Array.from({ length: 4 }, () => new THREE.Vector3());
  const groundU = {
    uSunDir: { value: v3(SUN) }, uSunCol: { value: v3(SUN_COL) }, uSkyAmb: { value: v3(SKY_AMB) }, uGndAmb: { value: v3(GND_AMB) },
    uPL: { value: PL }, uPLC: { value: PLC }, uCam: { value: new THREE.Vector3() }, uFogCol: { value: v3(FOGC) }, uFog: { value: new THREE.Vector2(...FOG) },
    uShd: { value: [new THREE.Vector3(), new THREE.Vector3()] },
  };
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(180, 180).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({ vertexShader: VS_GROUND, fragmentShader: FS_GROUND, uniforms: groundU }));
  scene.add(ground);

  // 하늘: 화면 전체 삼각형
  const skyG = new THREE.BufferGeometry();
  skyG.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const skyU = { uR: { value: new THREE.Vector3() }, uU: { value: new THREE.Vector3() }, uF: { value: new THREE.Vector3() }, uTan: { value: new THREE.Vector2() },
    uMoon: { value: v3(MOON) }, uT: { value: 0 }, uFogCol: { value: v3(FOGC) } };
  const sky = new THREE.Mesh(skyG, new THREE.ShaderMaterial({ vertexShader: VS_SKY, fragmentShader: FS_SKY, uniforms: skyU, depthTest: false, depthWrite: false }));
  sky.frustumCulled = false; sky.renderOrder = -10;
  scene.add(sky);

  return {
    braziers: BRAZ,
    // 매 렌더 프레임: 불빛 깜빡임, 하늘/바닥 유니폼
    update(t, camera, eye, shadows) {
      for (let i = 0; i < 4; i++) {
        const b = BRAZ[i], fl = 1.25 + 0.25 * Math.sin(t * 13 + i * 2) + 0.12 * Math.sin(t * 29 + i);
        PL[i].set(b[0], b[1] + 0.3, b[2], 11); PLC[i].set(fl, 0.52 * fl, 0.2 * fl);
        lights[i].intensity = fl * 1.6 * Math.PI;
      }
      groundU.uCam.value.copy(eye);
      for (let i = 0; i < 2; i++) groundU.uShd.value[i].set(...shadows[i]);
      const m = camera.matrixWorld.elements;
      skyU.uR.value.set(m[0], m[1], m[2]); skyU.uU.value.set(m[4], m[5], m[6]); skyU.uF.value.set(-m[8], -m[9], -m[10]);
      const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
      skyU.uTan.value.set(tanY * camera.aspect, tanY); skyU.uT.value = t;
    },
  };
}

// 원소 셰이더: 띠(리본) 위에 불꽃 / 물결 / 번개 / 바람을 그림 (텍스처 없이 노이즈로)
// vU: 띠의 폭 방향 0~1 (칼: 손잡이 → 칼끝), vT: 길이 방향 0~1 (머리 → 꼬리)
import * as THREE from 'three';

export const EL_INDEX = { fire: 0, water: 1, thunder: 2, wind: 3 };

const VS = `attribute float aU;attribute float aT;varying float vU;varying float vT;
void main(){vU=aU;vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;

const FS = `uniform float uTime;uniform float uAlpha;uniform float uReveal;uniform int uMode;uniform float uSeed;
varying float vU;varying float vT;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){return vn(p)*.55+vn(p*2.1+3.1)*.3+vn(p*4.3+7.7)*.15;}
void main(){
  if(vT>uReveal) discard;
  float head=1.-vT; vec3 c=vec3(0.); float a=0.;
  if(uMode==0){ // 불꽃: 꼬리 쪽으로 혀처럼 갈라지며 위로 일렁임
    vec2 p=vec2(vT*4.+uSeed,vU*2.5);
    float n=fbm(p*vec2(1.6,2.2)+vec2(uTime*2.,-uTime*5.));
    float body=smoothstep(.0,.35,vU)*smoothstep(1.,.6,vU);
    float f=n*1.25+head*.55+body*.35-vT*.5;
    a=smoothstep(.55,.85,f);
    float hot=smoothstep(.85,1.25,f);
    c=mix(vec3(.75,.08,.0),vec3(1.,.55,.05),smoothstep(.55,.9,f));
    c=mix(c,vec3(1.,.95,.6),hot);
  } else if(uMode==1){ // 물결: 흐르는 물살 띠 + 흰 물마루 + 먹선(우키요에풍)
    float n=fbm(vec2(vT*3.-uTime*1.5+uSeed,vU*2.));
    float w=sin(vU*14.+vT*9.-uTime*9.+n*4.);
    float crest=smoothstep(.8,.97,w);
    float ink=smoothstep(.12,.0,abs(w-.45))*.8;
    float body=smoothstep(.0,.25,vU)*smoothstep(1.,.7,vU)*(head*.7+.3);
    c=mix(vec3(.02,.18,.55),vec3(.15,.6,1.),vU*.7+n*.3);
    c=mix(c,vec3(.95,1.,1.),crest);
    c=mix(c,vec3(.0,.05,.2),ink*(1.-crest));
    a=body*smoothstep(.0,.08,1.-vT);
  } else if(uMode==2){ // 번개: 지그재그 번개 줄기 2가닥이 깜빡이며 다시 그려짐
    float fl=floor(uTime*24.);
    for(int k=0;k<2;k++){
      float kk=float(k);
      float cy=.5+(vn(vec2(vT*9.+kk*5.3+uSeed,fl+kk))-.5)*.75+(vn(vec2(vT*30.,fl*1.7+kk))-.5)*.18;
      float d=abs(vU-cy);
      a+=smoothstep(.035,.0,d)+smoothstep(.2,.0,d)*.35;
    }
    a*=head*.8+.2;
    c=mix(vec3(1.,.8,.15),vec3(1.,1.,.9),clamp(a-.4,0.,1.));
    a=clamp(a,0.,1.);
  } else { // 바람: 가늘게 갈라진 줄무늬가 소용돌이치며 흐름
    float n=vn(vec2(vT*4.,vU*3.+uSeed));
    float s=fract(vU*6.+vT*2.5-uTime*2.5+n*.8);
    float line=smoothstep(.12,.0,abs(s-.5));
    a=line*(head*.8+.2)*smoothstep(.0,.15,vU)*smoothstep(1.,.85,vU);
    c=mix(vec3(.5,1.,.75),vec3(.95,1.,.97),line);
  }
  gl_FragColor=vec4(c*a*uAlpha,1.);
  if(uMode==1) gl_FragColor=vec4(c,a*uAlpha);
}`;

// 원소 재질 (물은 먹선이 있어 일반 투명 혼합, 나머지는 빛나게 가산 혼합)
export function elementMaterial(el, seed = Math.random() * 10) {
  const mode = EL_INDEX[el] ?? 0;
  const m = new THREE.ShaderMaterial({
    vertexShader: VS, fragmentShader: FS,
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 1 }, uReveal: { value: 1 }, uMode: { value: mode }, uSeed: { value: seed } },
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  if (mode !== 1) { m.blending = THREE.CustomBlending; m.blendSrc = THREE.OneFactor; m.blendDst = THREE.OneFactor; }
  return m;
}

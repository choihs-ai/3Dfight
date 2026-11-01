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
  float head=1.-vT;            // 머리(방금 지나간 곳)=1, 꼬리=0
  float taper=smoothstep(0.,.18,vT)*smoothstep(1.,.55,vT); // 초승달처럼 양끝이 가늘게
  float thick=mix(.25,1.,taper);
  vec3 c=vec3(0.); float a=0.;
  if(uMode==0){
    // 불: 칼끝 궤적을 따라 가는 흰 심(vU≈.86) + 주황·빨강 불꽃 혀가 안쪽·뒤로 갈라짐 (3단 셀 셰이딩)
    float n=fbm(vec2(vT*6.+uSeed-uTime*1.2,vU*2.2-uTime*2.5));
    float dc=abs(vU-.86);
    // 소용돌이: 꼬리 쪽 불꽃이 말려 올라감
    vec2 q=vec2(vT*6.,vU*2.2); float ang=sin(vT*9.+uTime*3.)*.9*vT; q=vec2(q.x*cos(ang)-q.y*sin(ang),q.x*sin(ang)+q.y*cos(ang));
    n=fbm(q+vec2(uSeed-uTime*1.2,-uTime*2.5));
    float flame=n*1.05+.62-dc*2.4-vT*.75+head*.1;
    flame*=thick*.6+.4;
    a=step(.5,flame);
    float rim=1.-step(.55,flame);                 // 바깥 테두리(어두운 빨강)
    float mid=step(.72,flame), core=step(.9,flame)*step(dc,.09);
    c=mix(vec3(.8,.1,.02),vec3(1.,.48,.04),mid);
    c=mix(c,vec3(1.,.96,.78),core);
    c=mix(c,vec3(.35,.02,.0),rim);
  } else if(uMode==1){
    // 물: 칼끝 쪽 파랑 물살 + 바깥 가장자리에 봉우리처럼 솟는 흰 물마루(우키요에)
    float band=vU;
    float pk=pow(abs(sin(vT*3.14159*6.+uSeed-uTime*2.)),4.);     // 봉우리
    float top=.86+.1*pk*thick;
    float inner=.42+(1.-thick)*.4+.06*sin(vT*14.+uTime*3.);
    float body=step(inner,band)*step(band,top);
    float crest=step(top-.07-.05*pk,band)*body;                   // 흰 물마루
    float curl=0.;                                                 // 봉우리 끝의 말린 물보라
    float cell=vT*6.+uSeed/3.14159-uTime*2./3.14159; float fc=fract(cell)-.5;
    float rr=length(vec2(fc*1.6,(band-top-.03)*5.));
    curl=step(rr,.22)*step(.3,pk)*step(.2,thick);
    float stripe=step(.85,fract(band*5.-vT*4.+uTime*1.2+fbm(vec2(vT*3.,band))*.5))*body;
    vec3 deep=vec3(.02,.14,.48), lite=vec3(.12,.45,.95);
    c=mix(deep,lite,smoothstep(inner,top,band));
    c=mix(c,vec3(.7,.88,1.),stripe*.7);
    // 우키요에 먹선: 안쪽 테두리 + 물결 결을 따라 흐르는 진한 남색 선
    float ink=step(band,inner+.035)+step(.9,fract(band*3.-vT*2.5+uTime*.8+fbm(vec2(vT*2.,band*2.))*.7))*.8;
    c=mix(c,vec3(.0,.04,.18),clamp(ink,0.,1.)*body*(1.-crest));
    c=mix(c,vec3(1.),max(crest,curl));
    // 물마루 바깥 먹선
    float cl=step(top-.075-.05*pk,band)*step(band,top-.055-.05*pk)*body; c=mix(c,vec3(.0,.06,.25),cl*.9);
    a=max(body,curl)*smoothstep(0.,.06,head);
  } else if(uMode==2){
    // 번개: 칼끝 쪽을 따라가는 밝은 줄기 + 바깥으로 갈라지는 잔가지 (깜빡이며 다시 그려짐)
    float fl=floor(uTime*20.)+uSeed;
    float cy=.78+(vn(vec2(vT*8.,fl))-.5)*.22+(vn(vec2(vT*35.,fl*1.3))-.5)*.08;
    float d=abs(vU-cy);
    float m=smoothstep(.04*thick+.008,.0,d)+smoothstep(.16,.0,d)*.35*thick;
    for(int k=0;k<4;k++){
      float kk=float(k);
      float b0=h(vec2(kk,fl))*.8+.05, len=.08+h(vec2(kk+3.,fl))*.12, sl=(h(vec2(kk+7.,fl))*.8+.6)*(h(vec2(kk+9.,fl))>.5?1.:-1.);
      float tt=vT-b0;
      if(tt>0. && tt<len){ float by=cy+tt*sl*2.5+(vn(vec2(vT*60.,fl+kk))-.5)*.05; m+=smoothstep(.02,.0,abs(vU-by))*(1.-tt/len); }
    }
    a=clamp(m*(.35+.65*head),0.,1.);
    c=mix(vec3(1.,.75,.1),vec3(1.,1.,.92),clamp(m-.5,0.,1.));
  } else {
    // 바람: 겹겹이 가는 초승달 선 + 작은 소용돌이
    float m=0.;
    for(int k=0;k<4;k++){
      float kk=float(k), y=.35+kk*.18+sin(vT*6.+kk)*.02;
      m+=smoothstep(.022*thick+.004,.0,abs(vU-y))*(1.-kk*.18);
    }
    float cell=vT*6.+uSeed, fc=fract(cell)-.5, fy=vU-.95;
    float r=length(vec2(fc,fy*2.)); float swirl=smoothstep(.02,.0,abs(r-.18-.06*sin(atan(fy,fc)*1.+uTime*6.)))*step(.5,h(vec2(floor(cell),2.)));
    m+=swirl*.8;
    a=clamp(m*(.3+.7*head)*taper*1.4,0.,1.);
    c=mix(vec3(.55,.95,.7),vec3(.95,1.,.97),clamp(m,0.,1.));
  }
  if(uMode==1) gl_FragColor=vec4(c,a*uAlpha);
  else gl_FragColor=vec4(c*a*uAlpha,1.);
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

// 합성 빛 번짐: 칼끝 궤적을 따라 부드럽게 빛나는 띠 (셀 셰이딩 이펙트 아래에 깔림)
const GLOW_FS = `uniform float uTime;uniform float uAlpha;uniform float uReveal;uniform vec3 uCol;varying float vU;varying float vT;
void main(){ if(vT>uReveal) discard; float head=1.-vT; float taper=smoothstep(0.,.2,vT)*smoothstep(1.,.5,vT);
  float g=exp(-pow((vU-.82)*3.2,2.))*mix(.3,1.,taper)*(.25+.75*head);
  gl_FragColor=vec4(uCol*g*uAlpha*.55,1.);}`;
const GLOW_COL = { fire: [1, 0.45, 0.1], water: [0.12, 0.32, 0.6], thunder: [0.45, 0.38, 0.12], wind: [0.25, 0.55, 0.4] }; // 원소별 빛 번짐 세기 포함
export function glowMaterial(el) {
  return new THREE.ShaderMaterial({
    vertexShader: VS, fragmentShader: GLOW_FS,
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 1 }, uReveal: { value: 1 }, uCol: { value: new THREE.Color(...(GLOW_COL[el] || [1, 1, 1])) } },
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  });
}

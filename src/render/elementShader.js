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
    // 불: 노랑→주황→빨강 단색 칠 + 불꽃 혀마다 검은 먹 테두리 + 끝이 말림 + 테두리 있는 불티 조각
    float dc=abs(vU-.84);
    vec2 q=vec2(vT*6.,vU*2.4); float ang=sin(vT*9.+uTime*3.)*.9*vT; q=vec2(q.x*cos(ang)-q.y*sin(ang),q.x*sin(ang)+q.y*cos(ang));
    float n=fbm(q+vec2(uSeed-uTime*1.2,-uTime*2.5));
    float flame=(n*1.05+.62-dc*2.3-vT*.75+head*.1)*(thick*.6+.4);
    float body=step(.5,flame);
    float ink=body*(1.-step(.565,flame));                         // 먹 테두리
    float mid=step(.68,flame), hot=step(.84,flame);
    c=mix(vec3(.82,.1,.02),vec3(1.,.5,.05),mid); c=mix(c,vec3(1.,.9,.35),hot);
    c=mix(c,vec3(1.,.98,.85),step(.95,flame)*step(dc,.07));
    // 불티 조각: 꼬리 쪽에 흩날리는 작은 불꽃 (테두리 포함)
    vec2 g=vec2(vT*18.+uSeed,vU*7.-uTime*2.); vec2 gi=floor(g), gf=fract(g)-.5;
    float rnd=h(gi), fl=0., fi=0.;
    if(rnd>.8 && vT>.25){ vec2 o=(vec2(h(gi+1.),h(gi+2.))-.5)*.4; float d=length((gf-o)*vec2(1.,1.6)); fl=step(d,.24); fi=step(d,.16); }
    c=mix(c,mix(vec3(.1,.0,.0),vec3(1.,.6,.1),fi),fl*(1.-body));
    c=mix(c,vec3(.12,.02,.0),ink);
    a=max(body,fl);
  } else if(uMode==1){
    // 물: 여러 가닥 물줄기 다발(하늘색~남색, 사이 흰 광택 선, 먹 테두리) + 소용돌이 말린 구름 물거품 + 물방울
    float band=vU;
    float inner=.4+(1.-thick)*.42, top=.9-(1.-thick)*.05;
    float body=step(inner,band)*step(band,top);
    float tw=sin(vT*7.-uTime*3.+uSeed)*.04;                         // 가닥이 꼬임
    float sv=(band-inner)/max(.01,top-inner)+tw; float k=floor(sv*4.); float sf=fract(sv*4.);
    vec3 cols[4]; cols[0]=vec3(.03,.18,.55); cols[1]=vec3(.08,.38,.85); cols[2]=vec3(.2,.62,1.); cols[3]=vec3(.55,.85,1.);
    int ki=int(clamp(k,0.,3.));
    c=ki==0?cols[0]:ki==1?cols[1]:ki==2?cols[2]:cols[3];
    float shine=step(.82,sf)*step(sf,.9);
    c=mix(c,vec3(.92,.98,1.),shine);
    float ink=step(band,inner+.03)+step(top-.025,band);
    c=mix(c,vec3(.0,.03,.15),ink*body);
    a=body;
    // 소용돌이 구름 물거품: 바깥 가장자리를 따라 (흰 몸 + 먹 테두리 + 안쪽 소용돌이 선)
    float cell=vT*7.+uSeed*.3; float ci=floor(cell); vec2 p=vec2((fract(cell)-.5)*1.2,(band-top-.02)*4.5);
    if(h(vec2(ci,7.))>.25 && thick>.25){
      float blob=min(min(length(p-vec2(-.15,.0))-.24,length(p-vec2(.15,.02))-.22),length(p-vec2(.0,.14))-.2);
      float r=length(p-vec2(.02,.06)), th=atan(p.y-.06,p.x-.02);
      float sp=abs(fract(r*6.-th/6.2832)-.5);
      float fill=step(blob,0.), edge=step(blob,0.)*(1.-step(blob,-.045));
      float spl=fill*step(sp,.08)*step(r,.17);
      vec3 fc=mix(vec3(1.),vec3(.05,.12,.35),max(edge,spl));
      c=mix(c,fc,fill); a=max(a,fill);
    }
    // 물방울
    vec2 g=vec2(vT*22.,band*9.-uTime); vec2 gi=floor(g), gf=fract(g)-.5;
    if(h(gi+3.)>.88 && band>.85){ float d=length(gf); float dr=step(d,.2), di=step(d,.13); c=mix(c,mix(vec3(.05,.12,.35),vec3(1.),di),dr*(1.-body)); a=max(a,dr); }
    a*=smoothstep(0.,.05,head);
  } else if(uMode==2){
    // 번개: 굵고 구불구불한 띠(흰 심 + 하늘색 빛) + 가는 흰 실금 가지
    float fl=floor(uTime*18.)+uSeed;
    float cy=.78+(vn(vec2(vT*5.,fl*.3))-.5)*.25+(vn(vec2(vT*24.,fl))-.5)*.07;
    float d=abs(vU-cy), w=.045*thick+.01;
    float core=step(d,w*.55), bodyL=step(d,w), glow=smoothstep(w*4.,w,d)*.55;
    float br=0.;
    for(int k=0;k<5;k++){
      float kk=float(k);
      float b0=h(vec2(kk,fl))*.85+.05, len=.06+h(vec2(kk+3.,fl))*.14, sl=(h(vec2(kk+7.,fl))*.9+.5)*(h(vec2(kk+9.,fl))>.5?1.:-1.);
      float tt=vT-b0;
      if(tt>0. && tt<len){ float by=cy+tt*sl*2.2+(vn(vec2(vT*70.,fl+kk))-.5)*.06; br+=smoothstep(.012,.0,abs(vU-by))*(1.-tt/len*.6); }
    }
    a=clamp(max(max(bodyL,glow),br)*(.4+.6*head),0.,1.);
    c=mix(vec3(.25,.7,1.),vec3(.75,.93,1.),bodyL); c=mix(c,vec3(1.),max(core,br));
  } else {
    // 바람: 끝이 날카롭게 빠지는 초승달 칼날 3장 (초록 몸 + 흰 하이라이트 + 진한 테두리 + 마른 붓 끝), 하나는 잎사귀 마디 무늬
    float m=0.; c=vec3(0.);
    for(int k=0;k<3;k++){
      float kk=float(k);
      float s0=kk*.12, s1=1.-kk*.18;                                // 칼날마다 길이가 다름
      float sT=(vT-s0)/(s1-s0);
      if(sT<0. || sT>1.) continue;
      float wv=sin(3.14159*pow(sT,.7))*(.09-kk*.02)*(thick*.7+.3);   // 앞쪽이 굵고 끝이 날카로움
      float cy=.9-kk*.22+sin(sT*3.)*.02;
      float d=abs(vU-cy);
      float dry=step(.35,vn(vec2(vT*60.,vU*30.+kk)))*step(.75,sT);  // 마른 붓 끝 (갈라짐)
      float inb=step(d,wv)*(1.-dry);
      if(inb>0.){
        vec3 col=mix(vec3(.15,.62,.25),vec3(.45,.95,.45),step(d,wv*.6));
        col=mix(col,vec3(.97,1.,.95),step(abs(vU-cy-wv*.25),wv*.18));      // 흰 하이라이트
        if(k==1){ float leaf=abs(fract(sT*10.)-.5); col=mix(col,vec3(.08,.4,.15),step(length(vec2(leaf*2.2,(vU-cy)/max(.001,wv)*.7)),.35)); } // 잎사귀 마디
        col=mix(col,vec3(.02,.2,.08),step(wv*.82,d));                      // 테두리
        c=col; m=1.;
      }
    }
    a=m*(.35+.65*head);
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
  float g=exp(-pow((vU-.8)*3.,2.))*mix(.3,1.,taper)*(.25+.75*head);
  gl_FragColor=vec4(uCol*g*uAlpha*.55,1.);}`;
const GLOW_COL = { fire: [0.7, 0.25, 0.05], water: [0.1, 0.28, 0.6], thunder: [0.25, 0.55, 0.9], wind: [0.1, 0.35, 0.15] }; // 원소별 빛 번짐 세기 포함 (번개만 강하게)
export function glowMaterial(el) {
  return new THREE.ShaderMaterial({
    vertexShader: VS, fragmentShader: GLOW_FS,
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 1 }, uReveal: { value: 1 }, uCol: { value: new THREE.Color(...(GLOW_COL[el] || [1, 1, 1])) } },
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  });
}

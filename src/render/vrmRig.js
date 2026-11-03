// 애니풍 캐릭터(VRM) 검객: VRM 공개 샘플 모델 + Mixamo 검술 모션 리타깃 + 원소별 머리색·눈색·의상 + 하오리/하카마/카타나
// 애니메이터 로직은 SwordsmanRig를 그대로 상속 (상태 → 클립 선택·블렌드)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';
import { SwordsmanRig, swordsmanModel, toonMat, OUTLINE, GRIP, BLADE_DIR, BLADE, BLADE_Q } from './swordsman.js';
import { GB } from './geom.js';
import { bodySamples, buildGarments } from './garments.js';

// Mixamo 뼈 이름 → VRM 휴머노이드 뼈 이름
const M2V = { Hips: 'hips', Spine: 'spine', Spine1: 'chest', Spine2: 'upperChest', Neck: 'neck', Head: 'head' };
for (const [s, v] of [['Left', 'left'], ['Right', 'right']]) {
  Object.assign(M2V, {
    [s + 'Shoulder']: v + 'Shoulder', [s + 'Arm']: v + 'UpperArm', [s + 'ForeArm']: v + 'LowerArm', [s + 'Hand']: v + 'Hand',
    [s + 'UpLeg']: v + 'UpperLeg', [s + 'Leg']: v + 'LowerLeg', [s + 'Foot']: v + 'Foot', [s + 'ToeBase']: v + 'Toes',
    [s + 'HandThumb1']: v + 'ThumbMetacarpal', [s + 'HandThumb2']: v + 'ThumbProximal', [s + 'HandThumb3']: v + 'ThumbDistal',
  });
  for (const [f, vf] of [['Index', 'Index'], ['Middle', 'Middle'], ['Ring', 'Ring'], ['Pinky', 'Little']]) {
    Object.assign(M2V, { [s + 'Hand' + f + '1']: v + vf + 'Proximal', [s + 'Hand' + f + '2']: v + vf + 'Intermediate', [s + 'Hand' + f + '3']: v + vf + 'Distal' });
  }
}

// 모델별 설정: 지울 부품(메시 이름), 다시 칠할 재질(머리·눈·대원복·하카마·신발)
export const VRM_MODELS = {
  girl: { url: 'models/vrm/girl.vrm', remove: [], removeMats: ['Bottoms_01_CLOTH'], hair: ['Hair_00_HAIR', 'HairBack_00_HAIR'], eyes: ['EyeIris_00_EYE'], uniform: ['Tops_01_CLOTH'], hakama: ['Bottoms_01_CLOTH'], shoes: ['Shoes_01_CLOTH'], skin: ['Body_00_SKIN', 'Face_00_SKIN'] },
  boy: { url: 'models/vrm/boy.vrm', remove: ['robo_arm_1', 'robo_arm_2', 'robo_arm_3', 'wear_3', 'wear_5', 'wear_6', 'wear_7', 'wear_8', 'wear_9', 'wear_10', 'wear_11', 'wear_12'], removeMats: [], hair: ['hair'], eyes: ['eye'], uniform: ['huku_bake', 'body_nm'], hakama: [], shoes: [], skin: ['body_bake'] },
};

const bufCache = {}, clipCache = {};
const fetchBuf = (url) => (bufCache[url] ||= fetch(url).then((r) => { if (!r.ok) throw new Error(url + ' ' + r.status); return r.arrayBuffer(); }));
export const vrmPrefetch = (base) => Promise.all(Object.values(VRM_MODELS).map((d) => fetchBuf(base + d.url)));

// Mixamo 클립 → 이 VRM의 정규화 뼈 클립 (월드 기준 회전을 옮김)
function retarget(vrm) {
  const M = swordsmanModel(), mroot = M.scene;
  mroot.updateMatrixWorld(true); vrm.scene.updateMatrixWorld(true);
  const V = new THREE.Vector3();
  const motionHips = mroot.getObjectByName('mixamorigHips').getWorldPosition(V).y;
  const vrmHips = vrm.humanoid.getNormalizedBoneNode('hips').getWorldPosition(V).y - vrm.scene.getWorldPosition(new THREE.Vector3()).y;
  const scale = vrmHips / motionHips;
  const restInv = new THREE.Quaternion(), parentRest = new THREE.Quaternion(), q = new THREE.Quaternion();
  return M.animations.map((clip) => {
    const tracks = [];
    for (const tr of clip.tracks) {
      const [nodeName, prop] = tr.name.split('.');
      const vb = M2V[nodeName.replace('mixamorig', '')];
      const node = vb && vrm.humanoid.getNormalizedBoneNode(vb);
      if (!node) continue;
      const mix = mroot.getObjectByName(nodeName);
      mix.getWorldQuaternion(restInv).invert(); mix.parent.getWorldQuaternion(parentRest);
      if (prop === 'quaternion') {
        const v = new Float32Array(tr.values.length);
        for (let i = 0; i < v.length; i += 4) { q.fromArray(tr.values, i); q.premultiply(parentRest).multiply(restInv); q.toArray(v, i); }
        tracks.push(new THREE.QuaternionKeyframeTrack(node.name + '.quaternion', tr.times.slice(), v));
      } else if (prop === 'position' && vb === 'hips') {
        tracks.push(new THREE.VectorKeyframeTrack(node.name + '.position', tr.times.slice(), Array.from(tr.values, (x) => x * scale)));
      }
    }
    return new THREE.AnimationClip(clip.name, clip.duration, tracks);
  });
}

// 텍스처를 흑백으로 바꿔서 새 색을 입힐 수 있게 (밝은 곳 = 지정한 색)
function grayTex(tex, targetMean = 0.62) {
  const img = tex.image; if (!img || !img.width) return tex;
  const W = Math.min(img.width, 512), H = Math.round((img.height * W) / img.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H), p = d.data;
  let sum = 0, n = 0;
  for (let i = 0; i < p.length; i += 4) if (p[i + 3] > 10) { sum += 0.3 * p[i] + 0.59 * p[i + 1] + 0.11 * p[i + 2]; n++; }
  const k = (targetMean * 255) / Math.max(8, sum / Math.max(1, n));
  for (let i = 0; i < p.length; i += 4) { const l = Math.min(255, Math.pow((0.3 * p[i] + 0.59 * p[i + 1] + 0.11 * p[i + 2]) * k / 255, 0.9) * 255); p[i] = p[i + 1] = p[i + 2] = l; }
  g.putImageData(d, 0, 0);
  const t = new THREE.CanvasTexture(c);
  for (const k of ['flipY', 'wrapS', 'wrapT', 'colorSpace', 'channel', 'magFilter', 'minFilter']) t[k] = tex[k];
  t.offset.copy(tex.offset); t.repeat.copy(tex.repeat); t.rotation = tex.rotation; t.center.copy(tex.center);
  t.needsUpdate = true;
  return t;
}
function paint(mat, rgb, shade = 0.5, mean = 0.62) {
  if (!mat || !mat.isMToonMaterial) return;
  if (mat.map) mat.map = grayTex(mat.map, mean);
  if (mat.shadeMultiplyTexture) mat.shadeMultiplyTexture = null;
  mat.color.setRGB(rgb[0], rgb[1], rgb[2]);
  mat.shadeColorFactor.setRGB(rgb[0] * shade, rgb[1] * shade, rgb[2] * shade * 1.15);
  if (mat.outlineColorFactor) mat.outlineColorFactor.setRGB(rgb[0] * 0.18, rgb[1] * 0.18, rgb[2] * 0.2);
  mat.needsUpdate = true;
}

export async function createVrmRig(scene, ch, base) {
  const def = VRM_MODELS[ch.vrm.model];
  const buf = await fetchBuf(base + def.url);
  const loader = new GLTFLoader(); loader.register((p) => new VRMLoaderPlugin(p));
  const gltf = await loader.parseAsync(buf.slice(0), base + 'models/vrm/');
  const vrm = gltf.userData.vrm;
  VRMUtils.removeUnnecessaryVertices(gltf.scene);
  vrm.scene.traverse((o) => { o.frustumCulled = false; });
  clipCache[ch.vrm.model] ||= retarget(vrm);
  return new VrmRig(scene, ch, vrm, def, clipCache[ch.vrm.model]);
}

const TMPV = new THREE.Vector3();
const EXPR = ['angry', 'happy', 'sad', 'surprised', 'blink', 'relaxed'];

export class VrmRig extends SwordsmanRig {
  constructor(scene, ch, vrm, def, clips) {
    super(scene, ch, true);
    this.vrm = vrm; this.def = def; this.isVrm = true;
    this.group = new THREE.Group(); this.pivot = new THREE.Group(); this.inner = new THREE.Group();
    this.group.add(this.pivot); this.pivot.add(this.inner);
    this.pivot.position.y = 0.55; this.inner.position.y = -0.55;
    this.bone = (n) => vrm.humanoid.getNormalizedBoneNode(M2V[n]) || vrm.humanoid.getNormalizedBoneNode(n === 'Spine2' ? 'chest' : 'hips');
    vrm.scene.updateMatrixWorld(true);
    const hipsY = this.bone('Hips').getWorldPosition(TMPV).y;
    this.s = 0.97 / hipsY;                         // Mixamo 검객과 비슷한 키로
    this.inner.scale.setScalar(this.s);
    this.inner.add(vrm.scene);
    scene.add(this.group);
    // 필요 없는 부품 제거 (로봇 팔·배낭 등)
    const rm = [];
    vrm.scene.traverse((o) => { if (o.isMesh && (def.remove.includes(o.name) || def.removeMats.includes(((Array.isArray(o.material) ? o.material[0] : o.material).name || '').replace(' (Outline)', '')))) rm.push(o); });
    for (const o of rm) o.parent.remove(o);
    // 원소별 색
    const V = ch.vrm, C = ch.colors, hex = (h) => { const c = new THREE.Color(h); return [c.r, c.g, c.b]; };
    this.vrmMats = []; this.baseEmis = new Map();
    vrm.scene.traverse((o) => {
      if (!o.isMesh) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
        const n = (m.name || '').replace(' (Outline)', '');
        if (def.hair.includes(n)) { paint(m, V.hair, 0.72, 0.72); if ('shadingShiftFactor' in m) m.shadingShiftFactor = Math.max(m.shadingShiftFactor, 0.15); if (m.emissive) this.baseEmis.set(m, V.hair.map((x) => x * 0.16)); }
        else if (def.eyes.includes(n)) paint(m, V.eyes, 0.6, 0.45);
        else if (def.uniform.includes(n)) paint(m, [0.1, 0.1, 0.13], 0.6, 0.7);
        else if (def.hakama.includes(n)) paint(m, hex(C.pants), 0.55);
        else if (def.shoes.includes(n)) paint(m, [0.12, 0.1, 0.09], 0.6);
        else if (def.skin.includes(n) && m.isMToonMaterial) { // 그늘진 피부가 붉게 타 보이지 않게
          m.shadeColorFactor.setRGB(0.86, 0.72, 0.7); if (m.map) m.shadeMultiplyTexture = m.map; m.needsUpdate = true;
        }
        if (m.isMToonMaterial && !m.name.includes('Outline')) this.vrmMats.push(m);
      }
    });
    this.rim = { value: new THREE.Vector3(...ch.rim).multiplyScalar(0.5) };
    this.mats = { blade: toonMat(C.blade, this.rim) };
    this.buildOutfit();
    // 애니메이션 (정규화 뼈에 재생 → vrm.humanoid.update()로 실제 뼈에 반영)
    this.mixer = new THREE.AnimationMixer(vrm.scene);
    this.clips = {}; this.actions = {};
    for (const c of clips) {
      this.clips[c.name] = c;
      const a = this.mixer.clipAction(c); a.play(); a.paused = true; a.enabled = false; a.setEffectiveWeight(0);
      this.actions[c.name] = a;
    }
    // 시선: 상대 가슴을 봄
    this.look = new THREE.Object3D(); scene.add(this.look);
    if (vrm.lookAt) vrm.lookAt.target = this.look;
    this.expr = Object.fromEntries(EXPR.map((e) => [e, 0])); this.blinkT = 2;
    this.root = new Float32Array(16);
    this.lastSync = performance.now();
    this.reset();
  }
  // ---------- 의상: 몸에 맞춘 하오리·소매·하카마·각반·띠(스키닝+흔들림) + 칼집 + 카타나 ----------
  buildOutfit() {
    const C = this.ch.colors, def = this.def, P = (n) => this.vrm.scene.worldToLocal(this.bone(n).getWorldPosition(new THREE.Vector3()));
    this.group.updateMatrixWorld(true);
    const S = bodySamples(this.vrm, (n) => def.hair.includes(n));
    this.garments = buildGarments({ vrm: this.vrm, bone: this.bone, S, ch: this.ch, rim: this.rim, toonMat, OUTLINE });
    const hips = P('Hips'), lul = P('LeftUpLeg');
    const parts = new Map();
    const add = (bone, color, fn) => { const k = bone + '|' + color; if (!parts.has(k)) parts.set(k, { bone, color, g: new GB() }); fn(parts.get(k).g); };
    const hw = Math.max(Math.abs(lul.x) + 0.11, this.garments.info.hipsHalf + 0.03);
    void hips;
    // 칼집 (왼쪽 허리, 하오리 옆트임으로 뒤로 빠짐)
    {
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0.12, -0.4, -1).normalize()), off = new THREE.Vector3(hw * 0.95, 0.04, 0.1);
      add('Hips', 'tsuka', (g) => { const n0 = g.v.length; g.box(0, 0, 0.36, 0.04, 0.045, 0.8); (g.rot ||= []).push([n0, g.v.length, q, off]); });
      add('Hips', 'tsuba', (g) => { const n0 = g.v.length; g.box(0, 0, 0, 0.045, 0.05, 0.035); (g.rot ||= []).push([n0, g.v.length, q, off]); });
    }
    this.meshes = [...this.garments.meshes];
    this.outMats = { haori: this.garments.mats[0], lower: this.garments.mats[1] };
    for (const { bone, color, g } of parts.values()) {
      for (const [a, b, q, off] of g.rot || []) {
        const v = new THREE.Vector3(), n = new THREE.Vector3();
        for (let i = a; i < b; i += 3) {
          v.set(g.v[i], g.v[i + 1], g.v[i + 2]).applyQuaternion(q); if (off) v.add(off); g.v[i] = v.x; g.v[i + 1] = v.y; g.v[i + 2] = v.z;
          n.set(g.n[i], g.n[i + 1], g.n[i + 2]).applyQuaternion(q); g.n[i] = n.x; g.n[i + 1] = n.y; g.n[i + 2] = n.z;
        }
      }
      const geo = g.build();
      const mat = (this.outMats[color] ||= toonMat(C[color], this.rim));
      const node = this.bone(bone), m = new THREE.Mesh(geo, mat); m.frustumCulled = false; node.add(m); this.meshes.push(m);
      const og = geo.clone(); og.deleteAttribute('normal'); const mg = mergeVertices(og, 1e-4); mg.computeVertexNormals();
      const o = new THREE.Mesh(mg, OUTLINE); o.frustumCulled = false; node.add(o); this.meshes.push(o);
    }
    // 카타나: Mixamo 손 좌표계 → 정규화 손 좌표계 (리타깃과 같은 변환), 크기는 m 단위로
    const mh = swordsmanModel().scene.getObjectByName('mixamorigRightHand'); swordsmanModel().scene.updateMatrixWorld(true);
    const conv = new THREE.Group(); mh.getWorldQuaternion(conv.quaternion); conv.scale.setScalar(1 / this.s);
    this.bone('RightHand').add(conv);
    this.bladePivot = new THREE.Group(); this.bladePivot.position.copy(GRIP); conv.add(this.bladePivot);
    const kat = { blade: new GB(), tsuka: new GB(), tsuba: new GB() };
    kat.tsuka.box(0, 0, -0.09, 0.034, 0.04, 0.3); kat.tsuba.box(0, 0, 0.075, 0.095, 0.085, 0.016);
    { const seg = 5, L0 = BLADE.base - 0.06, L1 = BLADE.tip; for (let i = 0; i < seg; i++) { const z0 = L0 + ((L1 - L0) * i) / seg, z1 = L0 + ((L1 - L0) * (i + 1)) / seg, zc = (z0 + z1) / 2; kat.blade.box(0, 0.03 * zc * zc, zc, 0.009, i === seg - 1 ? 0.022 : 0.034, z1 - z0 + 0.004); } }
    for (const [k, g] of Object.entries(kat)) {
      for (let i = 0; i < g.v.length; i += 3) { const v = new THREE.Vector3(g.v[i], g.v[i + 1], g.v[i + 2]).applyQuaternion(BLADE_Q), n = new THREE.Vector3(g.n[i], g.n[i + 1], g.n[i + 2]).applyQuaternion(BLADE_Q); g.v[i] = v.x; g.v[i + 1] = v.y; g.v[i + 2] = v.z; g.n[i] = n.x; g.n[i + 1] = n.y; g.n[i + 2] = n.z; }
      const m = new THREE.Mesh(g.build(), k === 'blade' ? this.mats.blade : (this.outMats[k] ||= toonMat(C[k], this.rim))); m.frustumCulled = false;
      this.bladePivot.add(m); this.meshes.push(m);
    }
    this.bladeAdj = {};
    for (const [n, d] of Object.entries(BLADE_DIR_BY_CLIP_REF())) this.bladeAdj[n] = new THREE.Quaternion().setFromUnitVectors(BLADE_DIR, new THREE.Vector3(...d).normalize());
  }
  apply() { super.apply(); this.vrm.humanoid.update(); }
  step(F, t, sim) {
    super.step(F, t, sim);
    this.steps = (this.steps || 0) + 1;
    // 시선 대상: 상대 가슴
    if (sim) { const O = sim.f[1 - F.idx]; this.look.position.set(O.x, 1.35, O.z); }
    // 표정
    const s = F.state, tg = { angry: 0, happy: 0, sad: 0, surprised: 0, relaxed: 0, blink: 0 };
    if (s === 'attack' || s === 'ougi' || s === 'ougiCast' || s === 'ougiStrike') tg.angry = 0.85;
    else if (s === 'hitstun' || s === 'parried' || s === 'launched') tg.surprised = 0.9;
    else if (s === 'blockstun') tg.angry = 0.5;
    else if (s === 'down' || s === 'ko' || s === 'ougiHeld') { tg.sad = 0.8; tg.blink = s === 'ko' ? 1 : 0.4; }
    else if (s === 'win') tg.happy = 1;
    else if (s === 'guard' || F.guard) tg.angry = 0.35;
    this.blinkT -= 1 / 60;
    if (this.blinkT < 0) { tg.blink = Math.max(tg.blink, 1); if (this.blinkT < -0.1) this.blinkT = 2 + Math.random() * 3; }
    for (const k in tg) this.expr[k] += (tg[k] - this.expr[k]) * 0.35;
  }
  // 렌더 직전: 번쩍임 + 표정 + 머리카락 물리 + 시선
  sync(anim, emit) {
    const now = performance.now(), dt = Math.min(0.05, (now - this.lastSync) / 1000); this.lastSync = now;
    for (const m of this.vrmMats) if (m.emissive) { const b = this.baseEmis.get(m); m.emissive.setRGB(emit[0] + (b ? b[0] : 0), emit[1] + (b ? b[1] : 0), emit[2] + (b ? b[2] : 0)); }
    for (const k in this.outMats) this.outMats[k].emissive.setRGB(emit[0], emit[1], emit[2]);
    const g = this.ch.glow;
    this.mats.blade.emissive.setRGB(emit[0] + g[0] * 1.8, emit[1] + g[1] * 1.8, emit[2] + g[2] * 1.8);
    const em = this.vrm.expressionManager;
    if (em) for (const k in this.expr) em.setValue(k, this.expr[k]);
    // 옷자락·머리카락 흔들림은 sim 진행만큼 (히트스톱 동안 멈춤)
    const n = Math.min(4, this.steps || 0); this.steps = 0;
    if (n > 0) {
      this.group.updateMatrixWorld(true);
      // 순간이동(라운드 시작 등): 머리카락·옷자락을 현재 자세로 되돌림 (늘어지며 꼬이지 않게)
      const hp = this.bone('Hips').getWorldPosition(TMPV);
      if (!this.lastHip || this.lastHip.distanceTo(hp) > 0.45 * n) { if (this.vrm.springBoneManager) this.vrm.springBoneManager.reset(); this.garments.reset(); }
      (this.lastHip ||= new THREE.Vector3()).copy(hp);
      this.garments.update(n); this.vrm.update(n / 60);
    }
    else if (em) em.update();
    void dt;
  }
  dispose() {
    this.scene.remove(this.group); this.scene.remove(this.look);
    for (const m of this.meshes) m.geometry.dispose();
    for (const k in this.outMats) this.outMats[k].dispose();
    for (const t of this.garments.texs) t.dispose();
    this.mats.blade.dispose();
    this.mixer.stopAllAction();
    VRMUtils.deepDispose(this.vrm.scene);
  }
}
import { BLADE_DIR_BY_CLIP } from '../anim/clipMap.js';
const BLADE_DIR_BY_CLIP_REF = () => BLADE_DIR_BY_CLIP;

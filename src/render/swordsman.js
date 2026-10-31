// Mixamo 뼈대 + 코드로 만든 검객 몸(하오리·하카마·머리·카타나) + 툰 셰이딩 + 외곽선
// 애니메이터 역할도 함: 대전 상태에 맞는 클립을 골라 섞음 (ProcAnimator와 같은 인터페이스)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { DT, lerp, turnTo } from '../core/util.js';
import { GB } from './geom.js';
import { STYLES, moveCut, moveClipTime, BLADE_DIR_BY_CLIP } from '../anim/clipMap.js';

let MODEL = null;
export function loadSwordsman(url) {
  return new GLTFLoader().loadAsync(url).then((g) => { MODEL = g; return g; });
}
export const swordsmanReady = () => !!MODEL;

// 툰 그라데이션 (3단)
const GRAD = (() => {
  const t = new THREE.DataTexture(new Uint8Array([90, 90, 90, 255, 175, 175, 175, 255, 255, 255, 255, 255]), 3, 1);
  t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true; return t;
})();
const hx = (c) => new THREE.Color(c);
function toonMat(color, rim) {
  const m = new THREE.MeshToonMaterial({ color: hx(color), gradientMap: GRAD });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uRim = rim;
    sh.fragmentShader = 'uniform vec3 uRim;\n' + sh.fragmentShader.replace('#include <opaque_fragment>',
      'outgoingLight += uRim * smoothstep(.55,.75,1.0 - max(dot(normal, normalize(vViewPosition)), 0.0));\n#include <opaque_fragment>');
  };
  m.customProgramCacheKey = () => 'toonRim';
  return m;
}
const OUTLINE = new THREE.MeshBasicMaterial({ color: 0x08080c, side: THREE.BackSide });
OUTLINE.onBeforeCompile = (sh) => { sh.vertexShader = sh.vertexShader.replace('#include <begin_vertex>', 'vec3 transformed = position + normal * 0.011;'); };
OUTLINE.customProgramCacheKey = () => 'outline';

// 칼: 오른손 뼈 기준 (Great Sword 모션의 두 손 그립에서 계산한 방향)
const GRIP = new THREE.Vector3(0, 0.08, 0);
const BLADE_DIR = new THREE.Vector3(0.81, 0.23, -0.53).normalize();
const BLADE = { base: 0.14, tip: 1.0 };
// 칼 로컬 좌표계: +z = 칼날 방향
const BLADE_Q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), BLADE_DIR);

// 뼈 방향(자식 뼈 쪽)으로 세운 부품: g(GB)에 y축 기준으로 만들고 회전시켜 붙임
function alongBone(bone, childName) {
  const c = bone.children.find((b) => b.name === 'mixamorig' + childName) || bone.children[0];
  const v = c ? c.position.clone() : new THREE.Vector3(0, 0.1, 0);
  return { len: v.length(), q: new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize()) };
}

const TMP = new THREE.Vector3();

export class SwordsmanRig {
  constructor(scene, ch) {
    this.scene = scene; this.ch = ch;
    this.group = new THREE.Group();   // 위치·방향 (sim)
    this.pivot = new THREE.Group();   // 구르기 회전 축 (엉덩이 높이)
    this.group.add(this.pivot);
    this.skel = MODEL.scene.children[0].clone(true); // mixamorigHips
    this.inner = new THREE.Group(); this.inner.add(this.skel);
    this.pivot.add(this.inner);
    this.pivot.position.y = 0.55; this.inner.position.y = -0.55;
    scene.add(this.group);
    this.bone = (n) => this.skel.name === 'mixamorig' + n ? this.skel : this.skel.getObjectByName('mixamorig' + n);
    this.rim = { value: new THREE.Vector3(...ch.rim).multiplyScalar(0.9) };
    this.mats = { blade: toonMat(ch.colors.blade, this.rim) };
    this.buildBody();
    this.mats.body = this.bodyMat;
    // 애니메이션
    this.mixer = new THREE.AnimationMixer(this.skel);
    this.clips = {}; this.actions = {};
    for (const c of MODEL.animations) {
      this.clips[c.name] = c;
      const a = this.mixer.clipAction(c); a.play(); a.paused = true; a.enabled = false; a.setEffectiveWeight(0);
      this.actions[c.name] = a;
    }
    this.root = new Float32Array(16);
    this.reset();
  }
  // ---------- 몸 만들기 ----------
  buildBody() {
    const C = this.ch.colors, parts = new Map();
    const add = (boneName, color, fn) => {
      const key = boneName + '|' + color;
      if (!parts.has(key)) parts.set(key, { bone: this.bone(boneName), color, g: new GB() });
      fn(parts.get(key).g);
    };
    // 뼈 축으로 세운 원기둥(가늘어짐) — 실제 회전은 geometry에 적용
    const limb = (boneName, child, color, r0, r1, extra = 0, start = 0) => {
      const b = this.bone(boneName), { len, q } = alongBone(b, child);
      add(boneName, color, (g) => { const n0 = g.v.length; g.cyl(0, start, 0, r0, r1, len + extra, 8); g.rot = g.rot || []; g.rot.push([n0, g.v.length, q]); });
    };
    const box = (boneName, color, cx, cy, cz, w, h, d, yaw = 0) => add(boneName, color, (g) => g.box(cx, cy, cz, w, h, d, yaw));
    // 다리 (하카마: 아래로 갈수록 넓어짐)
    for (const s of ['Left', 'Right']) {
      limb(s + 'UpLeg', 'Leg', 'pants', 0.1, 0.11, 0.02, -0.04);
      limb(s + 'Leg', 'Foot', 'pants', 0.1, 0.15, -0.04);
      limb(s + 'Leg', 'Foot', 'wrap', 0.055, 0.05, 0.02, 0.0);
      const f = this.bone(s + 'Foot'), { len, q } = alongBone(f, s + 'ToeBase');
      add(s + 'Foot', 'dark', (g) => { const n0 = g.v.length; g.box(0, len * 0.5, -0.02, 0.09, len + 0.1, 0.05); g.rot = g.rot || []; g.rot.push([n0, g.v.length, q]); });
    }
    // 몸통
    box('Hips', 'pants', 0, 0.02, 0, 0.32, 0.18, 0.22);
    box('Hips', 'belt', 0, 0.1, 0, 0.33, 0.07, 0.23);
    limb('Spine', 'Spine1', 'dark', 0.14, 0.15);
    limb('Spine1', 'Spine2', 'dark', 0.15, 0.16);
    box('Spine2', 'dark', 0, 0.1, 0, 0.34, 0.22, 0.21);
    box('Spine2', 'wrap', 0, 0.13, 0.095, 0.1, 0.16, 0.03); // 앞섶(속옷)
    // 하오리: 등판 + 양쪽 앞자락 (앞은 열려 있음), 엉덩이 아래까지 내려옴
    box('Spine2', 'gi', 0, -0.14, -0.18, 0.46, 0.66, 0.03);
    box('Spine2', 'gi', 0.205, -0.14, -0.01, 0.07, 0.66, 0.33);
    box('Spine2', 'gi', -0.205, -0.14, -0.01, 0.07, 0.66, 0.33);
    box('Spine2', 'gi', 0, 0.2, -0.03, 0.46, 0.06, 0.32);
    box('Spine2', 'accent', 0, -0.45, -0.185, 0.47, 0.06, 0.035); // 하오리 끝단 무늬
    box('Spine2', 'accent', 0.205, -0.45, -0.01, 0.075, 0.06, 0.335);
    box('Spine2', 'accent', -0.205, -0.45, -0.01, 0.075, 0.06, 0.335);
    // 목·머리
    limb('Neck', 'Head', 'skin', 0.045, 0.045);
    add('Head', 'skin', (g) => g.sphere(0, 0.1, 0.01, 0.105, 10, 8));
    add('Head', 'dark', (g) => { g.box(0.038, 0.1, 0.1, 0.03, 0.035, 0.012); g.box(-0.038, 0.1, 0.1, 0.03, 0.035, 0.012); });
    add('Head', 'hair', (g) => {
      g.box(0, 0.18, -0.01, 0.23, 0.08, 0.24); g.box(0, 0.11, -0.1, 0.22, 0.18, 0.06);
      // 삐죽한 머리카락 다발
      for (const [x, z, a] of [[0.08, 0.06, 0.5], [-0.08, 0.06, -0.5], [0, 0.09, 0], [0.1, -0.06, 0.9], [-0.1, -0.06, -0.9], [0, -0.12, 0]]) g.box(x, 0.24, z, 0.06, 0.1, 0.06, a);
      g.box(0.07, 0.15, 0.1, 0.05, 0.08, 0.03); g.box(-0.06, 0.16, 0.1, 0.06, 0.06, 0.03);
    });
    add('Head', 'accent', (g) => g.box(0, 0.165, 0, 0.245, 0.025, 0.25)); // 머리띠
    // 팔 (하오리 소매는 넓게)
    for (const s of ['Left', 'Right']) {
      limb(s + 'Arm', 'ForeArm', 'gi', 0.065, 0.11, 0.02);
      limb(s + 'ForeArm', 'Hand', 'skin', 0.045, 0.038);
      limb(s + 'ForeArm', 'Hand', 'wrap', 0.05, 0.045, -0.12, 0.12);
      add(s + 'Hand', 'skin', (g) => g.box(0, 0.06, 0, 0.08, 0.11, 0.05));
    }
    // 칼집 (왼쪽 허리, 뒤로 비스듬히)
    {
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0.12, -0.4, -1).normalize());
      add('Hips', 'tsuka', (g) => { const n0 = g.v.length; g.box(0, 0, 0.38, 0.045, 0.05, 0.86); g.rot = g.rot || []; g.rot.push([n0, g.v.length, q, new THREE.Vector3(0.18, 0.08, 0.1)]); });
      add('Hips', 'tsuba', (g) => { const n0 = g.v.length; g.box(0, 0, 0.0, 0.05, 0.055, 0.04); g.rot = g.rot || []; g.rot.push([n0, g.v.length, q, new THREE.Vector3(0.18, 0.08, 0.1)]); });
    }
    // 카타나 (오른손)
    add('RightHand', 'blade_tsuka', (g) => { const n0 = g.v.length; g.box(0, 0, -0.09, 0.034, 0.04, 0.3); g.rot = g.rot || []; g.rot.push([n0, g.v.length, BLADE_Q]); });
    add('RightHand', 'blade_tsuba', (g) => { const n0 = g.v.length; g.box(0, 0, 0.075, 0.095, 0.085, 0.016); g.rot = g.rot || []; g.rot.push([n0, g.v.length, BLADE_Q]); });
    add('RightHand', 'blade', (g) => {
      const n0 = g.v.length, seg = 5, L0 = BLADE.base - 0.06, L1 = BLADE.tip;
      for (let i = 0; i < seg; i++) {
        const z0 = L0 + ((L1 - L0) * i) / seg, z1 = L0 + ((L1 - L0) * (i + 1)) / seg, zc = (z0 + z1) / 2;
        g.box(0, 0.03 * zc * zc, zc, 0.009, i === seg - 1 ? 0.022 : 0.034, z1 - z0 + 0.004);
      }
      g.rot = g.rot || []; g.rot.push([n0, g.v.length, BLADE_Q]);
    });
    // ---- 모든 부품을 스킨 메시 하나로 합침 (그리기 호출: 몸 1 + 외곽선 1 + 칼 1) ----
    this.group.updateMatrixWorld(true);
    const bones = [];
    this.skel.traverse((o) => bones.push(o));
    const boneIdx = new Map(bones.map((o, i) => [o, i]));
    const pos = [], nrm = [], col = [], si = [], sw = [];
    const bladeParts = [];
    const v = new THREE.Vector3(), nv = new THREE.Vector3(), nm = new THREE.Matrix3(), c = new THREE.Color();
    for (const { bone, color, g } of parts.values()) {
      // 부품별 회전/이동 (뼈 로컬)
      if (g.rot) for (const [ra, rb, q, off] of g.rot) {
        for (let i = ra; i < rb; i += 3) {
          v.set(g.v[i], g.v[i + 1], g.v[i + 2]).applyQuaternion(q); if (off) v.add(off);
          g.v[i] = v.x; g.v[i + 1] = v.y; g.v[i + 2] = v.z;
          nv.set(g.n[i], g.n[i + 1], g.n[i + 2]).applyQuaternion(q);
          g.n[i] = nv.x; g.n[i + 1] = nv.y; g.n[i + 2] = nv.z;
        }
      }
      if (color.startsWith('blade')) { bladeParts.push({ color, g }); continue; }
      // 기본 자세(바인드 포즈) 월드 좌표로 옮겨서 합침
      const M = bone.matrixWorld; nm.getNormalMatrix(M);
      c.set(C[color]);
      const bi = boneIdx.get(bone);
      for (let i = 0; i < g.v.length; i += 3) {
        v.set(g.v[i], g.v[i + 1], g.v[i + 2]).applyMatrix4(M); pos.push(v.x, v.y, v.z);
        nv.set(g.n[i], g.n[i + 1], g.n[i + 2]).applyMatrix3(nm).normalize(); nrm.push(nv.x, nv.y, nv.z);
        col.push(c.r, c.g, c.b); si.push(bi, 0, 0, 0); sw.push(1, 0, 0, 0);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
    this.skeleton = new THREE.Skeleton(bones);
    this.bodyMat = toonMat('#ffffff', this.rim); this.bodyMat.vertexColors = true;
    const body = new THREE.SkinnedMesh(geo, this.bodyMat);
    // 외곽선: 같은 정점을 합쳐 부드러운 법선으로 바깥쪽으로 밀어낸 뒷면
    const og = new THREE.BufferGeometry();
    og.setAttribute('position', geo.getAttribute('position')); og.setAttribute('skinIndex', geo.getAttribute('skinIndex')); og.setAttribute('skinWeight', geo.getAttribute('skinWeight'));
    const merged = mergeVertices(og, 1e-4); merged.computeVertexNormals();
    const outline = new THREE.SkinnedMesh(merged, OUTLINE);
    for (const m of [body, outline]) { m.frustumCulled = false; this.inner.add(m); m.bind(this.skeleton, new THREE.Matrix4()); }
    this.meshes = [body, outline];
    // 칼은 원소 빛을 띠어야 하고, 모션마다 쥐는 방향이 달라서 따로 (오른손 → 칼 피벗)
    this.bladePivot = new THREE.Group(); this.bladePivot.position.copy(GRIP);
    this.bone('RightHand').add(this.bladePivot);
    const hiltMat = toonMat(C.tsuka, this.rim), guardMat = toonMat(C.tsuba, this.rim);
    this.mats.hilt = hiltMat; this.mats.guard = guardMat;
    for (const { color, g } of bladeParts) {
      const m = new THREE.Mesh(g.build(), color === 'blade' ? this.mats.blade : color === 'blade_tsuka' ? hiltMat : guardMat);
      this.bladePivot.add(m); this.meshes.push(m);
    }
    this.bladeAdj = {};
    for (const [n, d] of Object.entries(BLADE_DIR_BY_CLIP)) this.bladeAdj[n] = new THREE.Quaternion().setFromUnitVectors(BLADE_DIR, new THREE.Vector3(...d).normalize());
  }
  // ---------- 애니메이터 ----------
  reset() {
    this.cur = null; this.prev = null; this.alpha = 1; this.key = '';
    this.fidgetN = 0; this.locoT = 0; this.walkF = 0; this.walkS = 0; this.loopT = 0; this.lastState = ''; this.lastF = 0;
    this.downT0 = 0; this.rootH = 0.95; this.visYaw = undefined;
  }
  dur(n) { return this.clips[n] ? this.clips[n].duration : 1; }
  // 이번 프레임 목표 자세 [ [클립, 시간, 가중치], ... ] 와 전환 키
  target(F, sim) {
    const s = F.state, f = F.f, st = STYLES[this.ch.id] || STYLES.fire;
    switch (s) {
      case 'idle': {
        // 라운드 시작: 허리 칼집에서 칼을 뽑음 (칼 넣기 모션을 거꾸로)
        if (sim && sim.phase === 'intro') {
          const D = this.dur('withdraw') - 0.02, t = Math.max(0, D - (sim.phaseT / 55) * D);
          return { key: 'draw', L: [['withdraw', t, 1]], sheathed: t > 1.0, fade: 8 };
        }
        if (F.guard) return { key: F.crouch ? 'crouch' : 'guard', L: [[F.crouch ? 'crouch' : 'guard', this.loopT % this.dur(F.crouch ? 'crouch' : 'guard'), 1]] };
        const aF = this.walkF, aS = this.walkS, tot = Math.min(1, Math.abs(aF) + Math.abs(aS));
        // 오래 서 있으면 대기 동작 (칼 고쳐 잡기 등) 한 번
        if (tot < 0.05 && F.idleF > 200) {
          const k = Math.floor((F.idleF - 200) / 480), n = st.fidget[(k + this.fidgetN) % st.fidget.length], ft = ((F.idleF - 200) % 480) / 60;
          if (ft < this.dur(n) - 0.05) return { key: 'fidget' + k, L: [[n, ft, 1]], fade: 12 };
        }
        const idle = st.idle, L = [[idle, this.loopT % this.dur(idle), 1 - tot]];
        if (tot > 0.01) {
          const k = tot / (Math.abs(aF) + Math.abs(aS));
          const lt = (n) => this.locoT % this.dur(n);
          // 멀리서 앞으로 다가갈 때는 달리기
          const op = sim && sim.f[1 - F.idx], far = op && Math.hypot(op.x - F.x, op.z - F.z) > 3.4;
          if (aF > 0) L.push([far ? 'run' : 'walk_f', lt(far ? 'run' : 'walk_f'), aF * k]); else if (aF < 0) L.push(['walk_b', lt('walk_b'), -aF * k]);
          if (aS > 0) L.push(['strafe_r', lt('strafe_r'), aS * k]); else if (aS < 0) L.push(['strafe_l', lt('strafe_l'), -aS * k]);
        }
        return { key: 'loco', L, fade: 6 };
      }
      case 'attack': { const c = moveCut(this.ch.id, F.move.id, F.moveUid); return { key: 'atk' + F.moveUid, L: [[c.clip, moveClipTime(c, F.move, f), 1]], fade: 3 }; }
      case 'hitstun': {
        const n = F.hitLevel === 'high' ? 'hit_head' : F.hitLevel === 'low' ? 'hit_low' : 'hit_body';
        return { key: 'hit', L: [[n, Math.min(1, f / Math.max(1, F.stun)) * this.dur(n) * 0.7, 1]], fade: 2 };
      }
      case 'blockstun': { const n = F.crouch ? 'crouch_block_hit' : 'block_hit'; return { key: n, L: [[n, Math.min(1, f / Math.max(1, F.stun)) * this.dur(n) * 0.8, 1]], fade: 2 }; }
      case 'parried': return { key: 'parried', L: [['hit_head', Math.min(1, f / 52) * this.dur('hit_head'), 1]], fade: 3 };
      case 'launched': return { key: 'death', L: [['death', Math.min(0.85, f / 60), 1]], fade: 3 };
      case 'down': case 'ko': {
        // KO는 가끔 앞으로 고꾸라지는 모션
        const n = s === 'ko' && F.launchUid % 2 === 1 ? 'death2' : 'death';
        if (this.lastState !== 'down' && this.lastState !== 'ko') this.downT0 = this.cur && this.cur.L[0][0] === n ? this.cur.L[0][1] : n === 'death2' ? 0.3 : 0.6;
        return { key: n, L: [[n, Math.min(this.dur(n) - 0.01, this.downT0 + (f / 60) * 1.4), 1]], fade: 6 };
      }
      case 'getup': return { key: 'death', L: [['death', (this.dur('death') - 0.01) * (1 - Math.min(1, f / 20)), 1]] };
      case 'roll': return { key: 'roll', L: [['roll', 0.55 + Math.min(1, f / 26) * 0.95, 1]], fade: 2 };
      case 'win': return { key: 'win', L: [['withdraw', Math.min(this.dur('withdraw') - 0.01, f / 60), 1]], fade: 6, sheathed: f > 62 };
    }
    return { key: 'idle', L: [[st.idle, 0, 1]] };
  }
  step(F, _t, sim) {
    this.sim = sim;
    // 걷기 블렌드 (ProcAnimator와 같은 규칙)
    if (F.wk === 1) { this.walkF *= 0.75; this.walkS *= 0.75; }
    else if (F.wk === 2) { this.walkF *= 0.7; this.walkS *= 0.7; }
    else if (F.wk === 3) { this.walkF = lerp(this.walkF, F.wmy, 0.3); this.walkS = lerp(this.walkS, F.wmx, 0.3); }
    this.locoT += DT * (1 + 1.4 * Math.min(1, Math.abs(this.walkF) + Math.abs(this.walkS)));
    this.loopT += DT;
    const T = this.target(F, sim);
    const restarted = F.state === this.lastState && F.f < this.lastF && F.state !== 'idle';
    if (T.key !== this.key || restarted) {
      this.prev = this.cur; this.key = T.key; this.alpha = this.prev ? 0 : 1; this.fadeN = T.fade || 5;
    }
    this.cur = T;
    if (this.alpha < 1) this.alpha = Math.min(1, this.alpha + 1 / this.fadeN);
    this.lastState = F.state; this.lastF = F.f;
    // 보이는 방향: 구르는 동안은 구르는 방향, 그 외에는 상대 쪽 (빠르게 돌아옴)
    const want = F.state === 'roll' && F.f < 22 ? Math.atan2(F.rollDir[0], F.rollDir[1]) : F.yaw;
    if (this.visYaw === undefined) this.visYaw = want;
    this.visYaw = turnTo(this.visYaw, want, F.state === 'roll' ? 0.6 : 0.35);
    this.fk(F);
  }
  apply() {
    for (const n in this.actions) { const a = this.actions[n]; a.enabled = false; a.setEffectiveWeight(0); }
    const use = (L, w) => { for (const [n, t, wt] of L) { const a = this.actions[n]; if (!a || wt * w <= 0) continue; if (!a.enabled) { a.enabled = true; a.setEffectiveWeight(0); } a.time = t; a.setEffectiveWeight(a.getEffectiveWeight() + wt * w); } };
    if (this.prev && this.alpha < 1) use(this.prev.L, 1 - this.alpha);
    if (this.cur) use(this.cur.L, this.prev && this.alpha < 1 ? this.alpha : 1);
    this.mixer.update(0);
  }
  fk(F) {
    if (!this.cur) this.cur = this.target(F, this.sim);
    this.apply();
    this.group.position.set(F.x, F.state === 'launched' ? F.y : 0, F.z);
    this.group.rotation.set(0, this.visYaw === undefined ? F.yaw : this.visYaw, 0);
    // 모션별 칼 쥐는 방향 (블렌드 가중치만큼 회전) + 납도 후 칼 숨김
    let adj = null, w = 0;
    const scan = (L, k) => { for (const [n, t, wt] of L) { if (this.bladeAdj[n]) { adj = this.bladeAdj[n]; w += wt * k; } } };
    if (this.cur) scan(this.cur.L, this.prev && this.alpha < 1 ? this.alpha : 1);
    if (this.prev && this.alpha < 1) scan(this.prev.L, 1 - this.alpha);
    if (adj) this.bladePivot.quaternion.identity().slerp(adj, Math.min(1, w)); else this.bladePivot.quaternion.identity();
    this.bladePivot.visible = !(this.cur && this.cur.sheathed);
    this.group.updateMatrixWorld(true);
    const hp = this.bone('Hips').getWorldPosition(TMP);
    this.rootH = hp.y; this.root[12] = hp.x; this.root[13] = hp.y; this.root[14] = hp.z;
  }
  bladePoint(t) {
    return this.bladePivot.localToWorld(BLADE_DIR.clone().multiplyScalar(BLADE.base + (BLADE.tip - BLADE.base) * t)).toArray();
  }
  limbPos(limb) { return limb === 'blade' ? this.bladePoint(0.7) : this.center(); }
  center() { return this.bone('Spine1').getWorldPosition(new THREE.Vector3()).toArray(); }
  // 렌더 직전: 피격 번쩍임
  sync(_anim, emit) {
    for (const k in this.mats) this.mats[k].emissive.setRGB(emit[0], emit[1], emit[2]);
    const g = this.ch.glow;
    this.mats.blade.emissive.setRGB(emit[0] + g[0] * 1.8, emit[1] + g[1] * 1.8, emit[2] + g[2] * 1.8);
  }
  dispose() {
    this.scene.remove(this.group);
    for (const m of this.meshes) m.geometry.dispose();
    for (const k in this.mats) this.mats[k].dispose();
    this.mixer.stopAllAction();
  }
}

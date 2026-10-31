// 화면 담당: three 씬 + 캐릭터 + 파티클 + 카메라. sim 상태를 읽어서 그리기만 함.
import * as THREE from 'three';
import { MAXHP } from '../core/util.js';
import { buildArena } from './arena.js';
import { BoxCharacter } from './boxCharacter.js';
import { Particles } from './particles.js';
import { LockOnCamera } from './camera.js';
import { addLights, FOGC, FOG } from './lighting.js';
import { ProcAnimator } from '../anim/procedural.js';
import { SwordTrail } from './trails.js';
import { CHARACTERS } from '../data/characters.js';
import { SwordsmanRig, loadSwordsman, swordsmanReady } from './swordsman.js';

THREE.ColorManagement.enabled = false;

export class View {
  constructor(canvas) {
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
    r.outputColorSpace = THREE.LinearSRGBColorSpace;
    r.setClearColor(new THREE.Color(...FOGC), 1);
    this.renderer = r;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(new THREE.Color(...FOGC), FOG[0], FOG[1]);
    addLights(this.scene);
    this.arena = buildArena(this.scene);
    this.particles = new Particles(this.scene);
    this.camera = new LockOnCamera();
    this.fx = [0, 1].map((i) => ({ anim: new ProcAnimator(i), flash: 0, flashCol: [1, 1, 1], hpLag: MAXHP, lagDelay: 0 }));
    this.setCharacters([CHARACTERS[1], CHARACTERS[0]]);
    this.warmup();
    // Mixamo 모션 검객 모델 (불러오기 전·실패 시에는 박스 검객으로 표시)
    this.modelState = 'loading';
    loadSwordsman(import.meta.env.BASE_URL + 'models/swordsman.glb').then(() => {
      this.modelState = 'ready';
      this.setCharacters(this.fx.map((f) => f.ch), true);
      this.warmup();
      if (this.sim) this.fx.forEach((f, i) => { f.anim.reset(); f.anim.fk(this.sim.f[i]); });
    }).catch((e) => { console.warn('검객 모델을 불러오지 못해 박스 검객으로 표시합니다', e); this.modelState = 'failed'; });
    this.emit = [0, 0, 0];
    this.shadows = [[0, 0, 0.62], [0, 0, 0.62]];
    this.resize();
  }
  // 원소 캐릭터 지정 (외형 + 칼 궤적 색)
  setCharacters(chars, force = false) {
    chars.forEach((ch, i) => {
      const f = this.fx[i];
      if (f.ch === ch && !force) return;
      if (f.char) f.char.dispose();
      if (f.trail) f.trail.dispose();
      f.ch = ch; f.trail = new SwordTrail(this.scene, ch);
      if (swordsmanReady()) { f.char = f.anim = new SwordsmanRig(this.scene, ch); }
      else { f.anim = new ProcAnimator(i); f.char = new BoxCharacter(this.scene, ch); }
      if (this.sim) f.anim.fk(this.sim.f[i]);
    });
  }
  // 셰이더를 미리 컴파일 (처음 칼을 휘두르거나 이펙트가 나올 때 멈칫하는 것 방지)
  warmup() {
    const hidden = [];
    this.scene.traverse((o) => { if (!o.visible) { hidden.push(o); o.visible = true; } });
    try { this.renderer.compile(this.scene, this.camera.cam); } catch (e) { console.warn(e); }
    for (const o of hidden) o.visible = false;
  }
  // 프레임이 계속 느리면 해상도를 단계적으로 낮춤 (아이폰 발열·저사양 대응)
  adapt(dt) {
    this.dtAvg = (this.dtAvg || 1 / 60) * 0.95 + dt * 0.05;
    this.slowT = this.dtAvg > 1 / 50 ? (this.slowT || 0) + dt : 0;
    if (this.slowT > 2 && this.dpr > 1) {
      this.dpr = Math.max(1, this.dpr - 0.25); this.slowT = 0;
      this.renderer.setPixelRatio(this.dpr); this.renderer.setSize(Math.max(1, innerWidth), Math.max(1, innerHeight), false);
    }
  }
  resize() {
    const W = Math.max(1, innerWidth), H = Math.max(1, innerHeight);
    if (!this.dpr) this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(W, H, false);
    this.portrait = H > W;
    this.camera.cam.aspect = W / H;
  }
  resetRound(sim) {
    this.sim = sim;
    this.fx.forEach((f, i) => { f.anim.reset(); f.anim.fk(sim.f[i]); f.trail.clear(); f.flash = 0; f.hpLag = MAXHP; f.lagDelay = 0; });
    this.camera.snap = true;
  }
  hitFlash(i, frames, col) { const f = this.fx[i]; f.flash = frames; f.flashCol = col; }
  // 파티클 위치용
  limbPos(i, limb) { return this.fx[i].anim.limbPos(limb); }
  center(i) { return this.fx[i].anim.center(); }

  // sim.step() 직후 매번 호출 (advanced=false면 히트스톱으로 멈춘 프레임)
  onStep(sim, advanced, t) {
    this.sim = sim;
    this.particles.flames(this.arena.braziers);
    this.particles.embers();
    this.particles.update(1 / 60);
    if (this.camera.shake > 0) this.camera.shake *= 0.86;
    if (!advanced) return;
    for (let i = 0; i < 2; i++) {
      const F = sim.f[i], fx = this.fx[i];
      if (fx.flash > 0) fx.flash--;
      if (fx.hpLag > F.hp) { if (fx.lagDelay > 0) fx.lagDelay--; else fx.hpLag = Math.max(F.hp, fx.hpLag - 0.7); } else fx.hpLag = F.hp;
      fx.anim.step(F, t);
      // 휘두르는 구간: 발생 3프레임 전 ~ 지속 끝 +2
      const m = F.state === 'attack' && F.move;
      const swing = !!m && F.f >= m.startup - 3 && F.f <= m.startup + m.active + 2;
      fx.trail.push(swing, fx.anim);
      if (swing) this.particles.elementSwing(fx.anim.bladePoint(1), fx.ch.id);
    }
  }
  render(dt, t, sim, orbit) {
    this.adapt(dt);
    const [P, E] = sim.f;
    this.camera.update(dt, t, P, E, this.fx[0].anim.rootH, this.portrait, orbit);
    for (let i = 0; i < 2; i++) {
      const F = sim.f[i], fx = this.fx[i];
      const fl = fx.flash > 0 ? fx.flash / 5 : 0, fc = fx.flashCol, e = this.emit;
      if (fl) { e[0] = fc[0] * fl * 0.7; e[1] = fc[1] * fl * 0.7; e[2] = fc[2] * fl * 0.7; }
      else if (F.armorOn) { const p = 0.25 + 0.15 * Math.sin(t * 30); e[0] = p; e[1] = p * 0.5; e[2] = p * 0.1; }
      else if (F.state === 'parried') { e[0] = 0.15; e[1] = 0.12; e[2] = 0.02; }
      else { e[0] = e[1] = e[2] = 0; }
      fx.char.sync(fx.anim, e);
      const root = fx.anim.root;
      this.shadows[i][0] = root[12]; this.shadows[i][1] = root[14]; this.shadows[i][2] = 0.62 - Math.min(0.25, F.y * 0.1);
    }
    for (const f of this.fx) f.trail.update();
    const cam = this.camera.cam;
    this.arena.update(t, cam, this.camera.eye, this.shadows);
    const tanY = Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2);
    this.particles.upload(this.renderer.domElement.height / (2 * tanY));
    this.renderer.render(this.scene, cam);
  }
}

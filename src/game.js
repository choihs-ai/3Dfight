// 게임 진행: 모드(데모/대전/연습/결과), 컨트롤러(사람/CPU), sim 이벤트 → 화면·소리·UI
import { DT, lerp } from './core/util.js';
import { Sim } from './core/sim.js';
import { AI } from './core/ai.js';
import { Sound } from './audio/sound.js';
import { show } from './ui/hud.js';
import { CHARACTERS } from './data/characters.js';

export const DIFFNAME = { practice: '연습 인형', easy: 'CPU · 쉬움', normal: 'CPU · 보통', hard: 'CPU · 어려움' };

export class Game {
  constructor({ view, hud, input }) {
    this.view = view; this.hud = hud; this.input = input;
    this.mode = 'demo'; this.diff = 'normal'; this.auto = false; this.paused = false;
    this.slow = 0; this.t = 0; this.acc = 0;
    this.stats = { hits: 0, maxCombo: 0, parries: 0 };
    this.sim = null; this.ctrl = [null, null];
    this.chars = [CHARACTERS[0], CHARACTERS[1]];
  }
  applyChars() {
    this.view.setCharacters(this.chars);
    const hex = (v) => '#' + v.map((x) => Math.round(Math.min(1, x) * 255).toString(16).padStart(2, '0')).join('');
    document.documentElement.style.setProperty('--el', hex(this.chars[0].trail[1]));
    document.querySelector('#p1Name').textContent = this.chars[0].name;
  }
  newSim(mode) {
    const seed = (Math.random() * 2 ** 31) | 0;
    this.sim = new Sim({ mode, seed });
    this.handle(this.sim.drainEvents());
  }
  startDemo() {
    this.mode = 'demo'; Sound.muted = true;
    const a = (Math.random() * CHARACTERS.length) | 0, b = (a + 1 + ((Math.random() * (CHARACTERS.length - 1)) | 0)) % CHARACTERS.length;
    this.chars = [CHARACTERS[a], CHARACTERS[b]]; this.applyChars();
    this.newSim('demo');
    this.ctrl = [new AI(this.sim, 0, 'normal'), new AI(this.sim, 1, 'normal')];
    show('#hud', false); show('#controls', false); show('#pauseBtn', false); show('#title', true);
    this.hud.banner('');
  }
  startMatch() {
    this.mode = this.diff === 'practice' ? 'practice' : 'match'; Sound.muted = false;
    this.paused = false; this.slow = 0; this.stats = { hits: 0, maxCombo: 0, parries: 0 };
    this.input.clear();
    this.applyChars();
    this.newSim(this.mode);
    this.ctrl = [this.auto ? new AI(this.sim, 0, 'normal') : null, new AI(this.sim, 1, this.diff)];
    show('#title', false); show('#result', false); show('#hud', true); show('#controls', true); show('#pauseBtn', true);
    document.querySelector('#cpuName').textContent = `${this.chars[1].name} · ${DIFFNAME[this.diff]}`;
    this.input.joyHome();
  }
  showResult() {
    const win = this.sim.wins[0] > this.sim.wins[1];
    show('#controls', false); show('#pauseBtn', false);
    const rt = document.querySelector('#resText');
    rt.textContent = win ? '승리!' : '패배'; rt.className = 'res ' + (win ? 'win' : 'lose');
    document.querySelector('#resSub').textContent = `${this.chars[0].name} vs ${this.chars[1].name} · ${DIFFNAME[this.diff]} · 최대 콤보 ${this.stats.maxCombo} · 패링 ${this.stats.parries}회`;
    this.mode = 'result';
    show('#result', true);
  }
  togglePause() {
    if (this.mode === 'demo' || this.mode === 'result') return;
    this.paused = !this.paused;
    show('#pause', this.paused);
    if (!this.paused) show('#moves', false);
    this.input.clear();
  }
  canPress() { return (this.mode === 'match' || this.mode === 'practice') && !this.paused && this.sim && this.sim.phase === 'fight'; }

  // 고정 1프레임
  step() {
    const sim = this.sim;
    const i0 = this.ctrl[0] ? this.ctrl[0].input() : this.input.consume();
    const i1 = this.ctrl[1].input();
    const advanced = sim.step([i0, i1]);
    this.handle(sim.drainEvents());
    this.view.onStep(sim, advanced, this.t);
  }
  sparkPos(a, d, limb) {
    const lp = this.view.limbPos(a, limb), dc = this.view.center(d);
    return [lerp(lp[0], dc[0], 0.25), lerp(lp[1], dc[1], 0.15), lerp(lp[2], dc[2], 0.25)];
  }
  handle(events) {
    const v = this.view, hud = this.hud, P = v.particles, cam = v.camera, pl = this.mode !== 'demo';
    const shake = (s) => { cam.shake = Math.max(cam.shake, s); };
    for (const e of events) {
      switch (e.t) {
        case 'hit': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.hitFlash(e.d, 5, e.counter ? [1, 0.35, 0.2] : [1, 1, 1]); v.fx[e.d].lagDelay = 40;
          P.sparks(hp, e.counter ? 'counter' : 'hit', e.dmg);
          P.elementBurst(hp, v.fx[e.a].ch.id, e.dmg + (e.counter ? 4 : 0));
          shake(e.dmg >= 12 ? 0.16 : 0.07);
          Sound.play(e.dmg >= 12 ? 'heavy' : 'hit');
          if (pl) {
            if (e.counter) hud.call(e.a, '카운터!', 'red');
            if (e.launch) hud.call(e.a, '띄우기!', 'gold');
            if (e.combo >= 2) hud.call(e.a, e.combo + ' 히트', 'combo');
            if (e.a === 0) { this.stats.hits++; this.stats.maxCombo = Math.max(this.stats.maxCombo, e.combo); }
            if (e.d === 0 && navigator.vibrate) try { navigator.vibrate(e.dmg >= 12 ? 40 : 20); } catch (_) { /* */ }
          }
          if (e.ko) this.slow = Math.max(this.slow, 1.1);
          break;
        }
        case 'block': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.hitFlash(e.d, 3, [0.4, 0.7, 1]);
          P.sparks(hp, e.brk ? 'armor' : 'block');
          Sound.play(e.brk ? 'heavy' : 'block');
          if (e.brk && pl) hud.call(e.d === 0 ? 1 : 0, '가드 브레이크!', 'red');
          break;
        }
        case 'parry': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.hitFlash(e.a, 6, [1, 0.9, 0.5]);
          P.sparks(hp, 'parry'); Sound.play('parry');
          this.slow = Math.max(this.slow, 0.35); shake(0.1); hud.flash(0.35);
          if (pl) { hud.call(e.d, '패링!', 'gold'); if (e.d === 0) this.stats.parries++; }
          break;
        }
        case 'armor': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.fx[e.d].lagDelay = 40; v.hitFlash(e.d, 6, [1, 0.6, 0.2]);
          P.sparks(hp, 'armor'); Sound.play('heavy');
          if (pl) hud.call(e.d, '슈퍼아머', 'gold');
          break;
        }
        case 'land': P.sparks([e.x, 0, e.z], 'dust'); Sound.play('land'); shake(0.06); break;
        case 'whoosh': Sound.play('whoosh'); break;
        case 'roll': Sound.play('roll'); break;
        case 'round':
          v.resetRound(this.sim);
          if (pl) { hud.banner(this.sim.mode === 'practice' ? '연습' : 'ROUND ' + e.round); Sound.play('bell'); }
          hud.pips(this.sim.wins);
          break;
        case 'fight': if (pl) { hud.banner('FIGHT!', 'fight'); Sound.play('bell'); } break;
        case 'ko':
          if (pl) { hud.banner(e.timeout ? 'TIME' : 'K.O.', 'ko'); Sound.play(e.timeout ? 'bell' : 'ko'); }
          hud.pips(this.sim.wins);
          break;
        case 'matchEnd': if (this.mode === 'match' || this.mode === 'practice') this.showResult(); break;
      }
    }
  }
  // requestAnimationFrame 마다
  frame(dt) {
    if (!this.paused && !this.freeze) { // freeze: 테스트용 (입력은 받고 시간만 멈춤)
      const ts = this.slow > 0 ? 0.3 : 1;
      if (this.slow > 0) this.slow -= dt;
      this.t += dt * ts; this.acc += dt * ts;
      let n = 0;
      while (this.acc >= DT && n < 5) { this.step(); this.acc -= DT; n++; }
      if (n >= 5) this.acc = 0;
    }
    this.view.render(dt, this.t, this.sim, this.mode === 'demo' || this.mode === 'result');
    this.hud.update(this.sim, this.view.fx, this.mode);
  }
}

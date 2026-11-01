// 게임 진행: 모드(데모/대전/연습/결과), 컨트롤러(사람/CPU), sim 이벤트 → 화면·소리·UI
import { DT, lerp } from './core/util.js';
import { Sim } from './core/sim.js';
import { AI } from './core/ai.js';
import { Sound } from './audio/sound.js';
import { show } from './ui/hud.js';
import { CHARACTERS } from './data/characters.js';
import { MV } from './core/moves.js';
import { OUGI } from './core/sim.js';
import { Lockstep } from './net/lockstep.js';
import { OugiUI } from './ui/ougi.js';
import { SHAPES } from './input/shapes.js';

export const DIFFSHORT = { practice: '연습', easy: '쉬움', normal: '보통', hard: '어려움' };
export const DIFFNAME = { practice: '연습 인형', easy: 'CPU · 쉬움', normal: 'CPU · 보통', hard: 'CPU · 어려움' };

export class Game {
  constructor({ view, hud, input }) {
    this.view = view; this.hud = hud; this.input = input;
    this.mode = 'demo'; this.diff = 'normal'; this.auto = false; this.paused = false;
    this.slow = 0; this.t = 0; this.acc = 0; this.speed = 1;
    this.stats = { hits: 0, maxCombo: 0, parries: 0 };
    this.sim = null; this.ctrl = [null, null];
    this.chars = [CHARACTERS[0], CHARACTERS[1]];
    this.me = 0; this.ougiUI = new OugiUI(); this.net = null; this.ls = null;
  }
  setMe(i) { this.me = i; this.hud.me = i; this.view.me = i; }
  applyChars() {
    this.view.setCharacters(this.chars);
    this.view.warmup();
    const hex = (v) => '#' + v.map((x) => Math.round(Math.min(1, x) * 255).toString(16).padStart(2, '0')).join('');
    document.documentElement.style.setProperty('--el', hex(this.chars[0].trail[1]));
    document.querySelector('#p1Name').textContent = this.chars[this.me].name;
  }
  newSim(mode) {
    const seed = (Math.random() * 2 ** 31) | 0;
    this.sim = new Sim({ mode, seed });
    this.sim.setStyles(this.chars.map((c) => c.id));
    this.handle(this.sim.drainEvents());
  }
  startDemo() {
    this.endOnline();
    this.setMe(0); this.ougiUI.hide();
    this.mode = 'demo'; Sound.muted = true;
    const a = (Math.random() * CHARACTERS.length) | 0, b = (a + 1 + ((Math.random() * (CHARACTERS.length - 1)) | 0)) % CHARACTERS.length;
    this.chars = [CHARACTERS[a], CHARACTERS[b]]; this.applyChars();
    this.newSim('demo');
    this.ctrl = [new AI(this.sim, 0, 'normal'), new AI(this.sim, 1, 'normal')];
    show('#hud', false); show('#controls', false); show('#pauseBtn', false); show('#title', true);
    this.hud.banner('');
  }
  startMatch() {
    this.setMe(0); this.ougiUI.hide();
    this.mode = this.diff === 'practice' ? 'practice' : 'match'; Sound.muted = false;
    this.paused = false; this.slow = 0; this.stats = { hits: 0, maxCombo: 0, parries: 0 };
    this.input.clear();
    this.applyChars();
    this.newSim(this.mode);
    this.ctrl = [this.auto ? new AI(this.sim, 0, 'normal') : null, new AI(this.sim, 1, this.diff)];
    show('#title', false); show('#result', false); show('#hud', true); show('#controls', true); show('#pauseBtn', true);
    document.querySelector('#cpuName').textContent = `${this.chars[1].name} · ${DIFFSHORT[this.diff]}`;
    this.input.joyHome();
  }
  // ---------- 온라인 ----------
  // me: 0(방장) | 1(손님), transport: send/onMessage/onClose
  startOnline({ me, seed, chars, transport, delay = 5 }) {
    this.setMe(me); this.ougiUI.hide();
    this.mode = 'online'; Sound.muted = false; this.paused = false; this.slow = 0; this.stats = { hits: 0, maxCombo: 0, parries: 0 };
    this.input.clear();
    this.net = transport; this.chars = chars; this.applyChars();
    this.sim = new Sim({ mode: 'online', seed });
    this.sim.setStyles(chars.map((c) => c.id));
    this.handle(this.sim.drainEvents());
    this.ctrl = [null, null];
    this.ls = new Lockstep({ me, delay, send: (m) => transport.send(m) });
    show('#title', false); show('#result', false); show('#charSel', false); show('#online', false);
    show('#hud', true); show('#controls', true); show('#pauseBtn', false);
    document.querySelector('#cpuName').textContent = `${chars[1 - me].name} · 온라인`;
    this.input.joyHome();
    this.rematch = [false, false];
  }
  // 대전 중 받은 메시지 (입력/상태는 락스텝으로, 나머지는 로비 처리기로)
  onNet(m) {
    if (m.k === 'i' || m.k === 's') { if (this.ls) this.ls.receive(m); return true; }
    if (m.k === 'rematch') { this.rematch[1 - this.me] = true; this.tryRematch(); return true; }
    return false;
  }
  tryRematch() {
    if (!(this.rematch[0] && this.rematch[1]) || this.me !== 0) return;
    const seed = (Math.random() * 2 ** 31) | 0;
    this.net.send({ k: 'start', seed, chars: this.chars.map((c) => c.id) });
    this.startOnline({ me: 0, seed, chars: this.chars, transport: this.net });
  }
  endOnline() {
    if (this.net) { const n = this.net; this.net = null; this.ls = null; try { n.close(); } catch (_) { /* */ } }
  }
  showResult() {
    const win = this.sim.wins[this.me] > this.sim.wins[1 - this.me];
    this.ougiUI.hide();
    show('#controls', false); show('#pauseBtn', false);
    const rt = document.querySelector('#resText');
    rt.textContent = win ? '승리!' : '패배'; rt.className = 'res ' + (win ? 'win' : 'lose');
    const vs = this.mode === 'online' ? '온라인' : DIFFNAME[this.diff];
    document.querySelector('#resSub').textContent = `${this.chars[this.me].name} vs ${this.chars[1 - this.me].name} · ${vs} · 최대 콤보 ${this.stats.maxCombo} · 패링 ${this.stats.parries}회`;
    document.querySelector('#againBtn').textContent = this.mode === 'online' ? '한 판 더 (상대 동의 필요)' : '다시 하기';
    this.mode = 'result';
    show('#result', true);
  }
  togglePause() {
    if (this.mode === 'demo' || this.mode === 'result' || this.mode === 'online') return;
    this.paused = !this.paused;
    show('#pause', this.paused);
    if (!this.paused) show('#moves', false);
    this.input.clear();
  }
  canPress() { return (this.mode === 'match' || this.mode === 'practice' || this.mode === 'online') && !this.paused && this.sim && this.sim.phase === 'fight' && !this.sim.cine; }

  // 고정 1프레임. 온라인에서 상대 입력이 아직 안 왔으면 false (기다림)
  step() {
    const sim = this.sim;
    if (this.mode === 'online' || (this.mode === 'result' && this.ls)) {
      const ls = this.ls;
      if (this.mode === 'online' && ls.needLocal(sim.frame)) ls.produce(this.input.consume());
      if (this.mode === 'result') { sim.step([null, null]); this.handle(sim.drainEvents()); this.view.onStep(sim, true, this.t); return true; }
      if (!ls.canStep(sim.frame + 1)) { ls.stallFrames++; return false; }
      ls.stallFrames = 0;
      const advanced = sim.step(ls.get(sim.frame + 1));
      const r = ls.afterStep(sim);
      if (sim.frame % 60 === 0) { (this.hashLog ||= {})[sim.frame] = sim.hash(); } // 테스트용 상태 지문 기록
      this.handle(sim.drainEvents());
      this.view.onStep(sim, advanced, this.t);
      if (r === 'replayed') this.view.fx.forEach((f, i) => f.anim.fk(sim.f[i]));
      return true;
    }
    const meCtrl = this.ctrl[this.me];
    const i0 = this.ctrl[0] ? this.ctrl[0].input() : this.input.consume();
    const i1 = this.ctrl[1] ? this.ctrl[1].input() : this.input.consume();
    void meCtrl;
    const advanced = sim.step([i0, i1]);
    this.handle(sim.drainEvents());
    this.view.onStep(sim, advanced, this.t);
    return true;
  }
  sparkPos(a, d, limb) {
    const lp = this.view.limbPos(a, limb), dc = this.view.center(d);
    return [lerp(lp[0], dc[0], 0.25), lerp(lp[1], dc[1], 0.15), lerp(lp[2], dc[2], 0.25)];
  }
  handle(events) {
    const v = this.view, hud = this.hud, P = v.particles, FX = v.hitfx, cam = v.camera, pl = this.mode !== 'demo';
    const shake = (amt, a, d) => {
      cam.shake = Math.max(cam.shake, amt);
      if (a !== undefined) { const A = this.sim.f[a], D = this.sim.f[d], dx = D.x - A.x, dz = D.z - A.z, l = Math.hypot(dx, dz) || 1; cam.shakeDir = [dx / l, 0.3, dz / l]; }
    };
    const elCol = (i) => v.fx[i].ch.trail[1];
    for (const e of events) {
      switch (e.t) {
        case 'hit': {
          const hp = this.sparkPos(e.a, e.d, e.limb), el = v.fx[e.a].ch.id, big = e.dmg >= 12 || e.counter;
          v.hitFlash(e.d, 5, e.counter ? [1, 0.35, 0.2] : [1, 1, 1]); v.fx[e.d].lagDelay = 40;
          P.sparks(hp, e.counter ? 'counter' : 'hit', e.dmg);
          P.elementBurst(hp, el, e.dmg + (e.counter ? 4 : 0));
          // 원소 이펙트(불꽃 바퀴/물살/번개/회오리) + 붓터치 베기 자국 + 충격파
          { const A = this.sim.f[e.a], D = this.sim.f[e.d], dx = D.x - A.x, dz = D.z - A.z, l = Math.hypot(dx, dz) || 1; v.elfx.hit(el, hp, [dx / l, 0, dz / l], e.dmg + (e.counter ? 4 : 0)); }
          FX.stroke(hp, v.strokeAngle(e.a), elCol(e.a), 0.9 + e.dmg * 0.04 + (e.counter ? 0.4 : 0), big ? 0.9 : 0.6);
          FX.ring(hp, elCol(e.a), big ? 1.5 : 1.0);
          if (e.move === 'slash_down' || e.move === 'helm' || e.move === 'sweep' || e.ko) FX.ring([this.sim.f[e.d].x, 0, this.sim.f[e.d].z], elCol(e.a), 1.3, true);
          shake(big ? 0.2 : 0.09, e.a, e.d);
          cam.punch = Math.max(cam.punch, (big ? 6 : 2.5) + (e.counter ? 3 : 0));
          Sound.play(e.counter ? 'counter' : e.dmg >= 12 ? 'heavy' : 'hit');
          Sound.play('el_' + el);
          if (pl) {
            hud.hitBar(e.d, big);
            if (e.counter) { hud.call(hud.side(e.a), '카운터!', 'red'); hud.impact(); }
            if (big) hud.speedLines();
            if (e.launch) hud.call(hud.side(e.a), '띄우기!', 'gold');
            if (e.combo >= 2) hud.call(hud.side(e.a), e.combo + ' 히트', 'combo' + (e.combo >= 4 ? ' big' : ''));
            if (e.a === this.me) { this.stats.hits++; this.stats.maxCombo = Math.max(this.stats.maxCombo, e.combo); }
            if (e.d === this.me && navigator.vibrate) try { navigator.vibrate(e.dmg >= 12 ? 40 : 20); } catch (_) { /* */ }
          }
          if (e.ko) {
            this.slow = Math.max(this.slow, 1.3);
            cam.cine = { t: 1.6, side: Math.random() < 0.5 ? 1 : -1 };
            if (pl) hud.impact();
          }
          break;
        }
        case 'block': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.hitFlash(e.d, 3, [0.4, 0.7, 1]);
          P.sparks(hp, e.brk ? 'armor' : 'block');
          FX.ring(hp, e.brk ? [1, 0.5, 0.2] : [0.6, 0.85, 1], e.brk ? 1.4 : 0.7);
          if (e.brk) FX.stroke(hp, v.strokeAngle(e.a), [1, 0.5, 0.2], 1.6, 1);
          shake(e.brk ? 0.15 : 0.04, e.a, e.d);
          Sound.play(e.brk ? 'guardbreak' : 'block');
          if (pl) { if (e.brk) { hud.call(hud.side(e.a), '가드 브레이크!', 'red'); hud.hitBar(e.d, true); } }
          break;
        }
        case 'parry': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.hitFlash(e.a, 6, [1, 0.9, 0.5]);
          P.sparks(hp, 'parry'); Sound.play('parry');
          FX.ring(hp, [1, 0.85, 0.4], 2.0); FX.stroke(hp, v.strokeAngle(e.a) + Math.PI / 2, [1, 0.9, 0.6], 1.8, 1.5);
          this.slow = Math.max(this.slow, 0.45); shake(0.1); cam.punch = Math.max(cam.punch, 5); hud.flash(0.35);
          if (pl) { hud.call(hud.side(e.d), '패링!', 'gold'); if (e.d === this.me) this.stats.parries++; }
          break;
        }
        case 'armor': {
          const hp = this.sparkPos(e.a, e.d, e.limb);
          v.fx[e.d].lagDelay = 40; v.hitFlash(e.d, 6, [1, 0.6, 0.2]);
          P.sparks(hp, 'armor'); FX.ring(hp, [1, 0.55, 0.2], 1.2); Sound.play('heavy');
          if (pl) hud.call(hud.side(e.d), '슈퍼아머', 'gold');
          break;
        }
        case 'land': P.sparks([e.x, 0, e.z], 'dust'); FX.ring([e.x, 0, e.z], [0.8, 0.7, 0.6], 1.0, true); Sound.play('land'); shake(0.08); break;
        case 'whoosh': Sound.play('whoosh', { power: MV[e.move] ? MV[e.move].dmg : 8 }); break;
        case 'roll': Sound.play('roll'); break;
        case 'round':
          v.resetRound(this.sim);
          if (pl) { hud.banner(this.sim.mode === 'practice' ? '연습' : 'ROUND ' + e.round); Sound.play('bell'); setTimeout(() => Sound.play('draw'), 450); }
          hud.pips(this.sim.wins);
          break;
        case 'fight': if (pl) { hud.banner('FIGHT!', 'fight'); Sound.play('bell'); } break;
        case 'ko':
          if (pl) { hud.banner(e.timeout ? 'TIME' : 'K.O.', 'ko'); Sound.play(e.timeout ? 'bell' : 'ko'); if (e.winner >= 0) setTimeout(() => Sound.play('sheath'), 2100); }
          hud.pips(this.sim.wins);
          break;
        case 'matchEnd': if (this.mode === 'match' || this.mode === 'practice' || this.mode === 'online') this.showResult(); break;
        // ---- 오의 ----
        case 'ougiDash': Sound.play('whoosh', { power: 14 }); v.hitFlash(e.i, 8, v.fx[e.i].ch.trail[1]); FX.ring(v.center(e.i), elCol(e.i), 1.6); break;
        case 'ougiStart': {
          const ch = v.fx[e.a].ch, mine = e.a === this.me && (this.mode === 'online' || !this.ctrl[e.a]);
          this.ougiUI.start(ch, mine && pl, (score) => this.input.setScore(score));
          Sound.play('parry'); Sound.play('el_' + ch.id); hud.flash(0.5);
          cam.cine = { t: 99, mode: 'cast', a: e.a };
          break;
        }
        case 'ougiStrike': {
          this.ougiUI.showScore(e.score);
          setTimeout(() => this.ougiUI.hide(), 600);
          cam.cine = { t: 99, mode: 'strike', a: e.a };
          this.ougiStrikeFx(e.a, e.d, e.score);
          if (pl) { hud.speedLines(); setTimeout(() => hud.speedLines(), 450); }
          this.ougiTime = this.t;
          break;
        }
        case 'ougiHit': {
          const hp = v.center(e.d), el = v.fx[e.a].ch.id, col = elCol(e.a);
          P.elementBurst(hp, el, 20); P.sparks(hp, 'counter', 14);
          { const A = this.sim.f[e.a], D = this.sim.f[e.d]; v.elfx.ougiBurst(el, [A.x, 0, A.z], [D.x, 0, D.z]); }
          FX.ring(hp, col, 2.4); FX.ring([hp[0], 0, hp[2]], col, 2.2, true);
          for (let k = 0; k < 2; k++) FX.stroke(hp, Math.random() * Math.PI, col, 1.7 + k * 0.4, 0.9);
          shake(0.35, e.a, e.d); cam.punch = 10; hud.impact(); if (pl) hud.speedLines(); Sound.play('ko'); Sound.play('el_' + el);
          v.hitFlash(e.d, 8, [1, 1, 1]); v.fx[e.d].lagDelay = 60;
          this.slow = Math.max(this.slow, 0.8);
          cam.cine = { t: 1.4, side: Math.random() < 0.5 ? 1 : -1 };
          if (pl) { hud.call(hud.side(e.a), `오의 ${Math.round(e.dmg)}`, 'gold'); hud.hitBar(e.d, true); }
          break;
        }
      }
    }
  }
  // 오의 연출: 그린 문양이 그 원소(불꽃 바퀴·물줄기·번개·회오리)로 상대 앞 공간에 나타남
  ougiStrikeFx(a, d, score) {
    const v = this.view, ch = v.fx[a].ch, S = SHAPES[ch.ougi.shape].res;
    const D = this.sim.f[d], cam = v.camera.cam.matrixWorld.elements;
    const right = [cam[0], cam[1], cam[2]], up = [cam[4], cam[5], cam[6]];
    const delay = { fire: 380, water: 120, thunder: 260, wind: 150 }[ch.id] || 200; // 원소별 오의 동작에서 칼이 닿는 즈음
    setTimeout(() => {
      v.elfx.ougiShape(ch.id, [D.x, 1.15, D.z], right, up, S, 1.15 + score / 250);
      v.particles.elementBurst([D.x, 1.1, D.z], ch.id, 18);
      Sound.play('el_' + ch.id); Sound.play('whoosh', { power: 14 });
    }, delay);
  }
  // requestAnimationFrame 마다
  frame(dt) {
    if (!this.paused && !this.freeze) { // freeze: 테스트용 (입력은 받고 시간만 멈춤)
      const ts = (this.slow > 0 ? 0.3 : 1) * this.speed;
      if (this.slow > 0) this.slow -= dt;
      this.t += dt * ts; this.acc += dt * ts;
      let n = 0;
      while (this.acc >= DT && n < 5) { if (!this.step()) { this.acc = Math.min(this.acc, DT * 3); break; } this.acc -= DT; n++; }
      if (n >= 5) this.acc = 0;
    }
    this.view.render(dt, this.t, this.sim, this.mode === 'demo' || this.mode === 'result');
    this.hud.update(this.sim, this.view.fx, this.mode);
    this.ougiUI.update(dt);
    // 온라인: 상대 입력을 0.5초 넘게 기다리면 표시
    const nb = document.querySelector('#netBadge');
    if (nb) nb.classList.toggle('hide', !(this.ls && this.mode === 'online' && this.ls.stallFrames > 30));
  }
}

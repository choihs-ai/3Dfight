// 플레이어 입력 (터치 스틱 + 베기 패드 + 가드/회피 버튼 + 키보드) → 프레임마다 FrameInput 하나로 묶어서 sim에 전달
import { classify } from '../core/moves.js';

export class PlayerInput {
  // canPress(): 공격 입력을 받을 수 있는 상태인지 (대전 중 & 일시정지 아님)
  constructor({ joyZone, joyBase, joyKnob, pad, slashPad, canPress, onAnyTouch }) {
    this.canPress = canPress;
    this.keys = {};
    this.joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
    this.guard = false; this.gp = false; this.roll = false; this.rollDir = null; this.btns = []; this.ougi = false; this.sk = false; this.score = -1;
    this.el = { joyZone, joyBase, joyKnob };
    const touch = () => onAnyTouch && onAnyTouch();

    pad.querySelectorAll('.btn').forEach((el) => {
      const k = el.dataset.k;
      const down = (e) => {
        e.preventDefault(); touch(); el.classList.add('on');
        if (k === 'guard') this.setGuard(true); else if (k === 'roll') this.roll = true; else if (k === 'ougi') this.ougi = true; else if (k === 'skill') this.sk = true;
      };
      const up = (e) => { e.preventDefault(); el.classList.remove('on'); if (k === 'guard') this.setGuard(false); };
      el.addEventListener('pointerdown', down);
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
    });

    this.initSlashPad(slashPad, touch);

    const jz = joyZone, jb = joyBase, jk = joyKnob, joy = this.joy;
    jz.addEventListener('pointerdown', (e) => {
      e.preventDefault(); touch();
      if (joy.id !== null) return;
      joy.id = e.pointerId;
      try { jz.setPointerCapture(e.pointerId); } catch (_) { /* */ }
      const r = jz.getBoundingClientRect();
      joy.cx = e.clientX - r.left; joy.cy = e.clientY - r.top; joy.t0 = performance.now(); joy.peak = 0; joy.lx = 0; joy.ly = 0;
      jb.style.left = joy.cx + 'px'; jb.style.top = joy.cy + 'px'; joy.x = joy.y = 0; jk.style.transform = '';
    });
    jz.addEventListener('pointermove', (e) => {
      if (e.pointerId !== joy.id) return;
      e.preventDefault();
      const r = jz.getBoundingClientRect();
      let dx = e.clientX - r.left - joy.cx, dy = e.clientY - r.top - joy.cy;
      const l = Math.hypot(dx, dy), R = 52;
      if (l > R) { dx *= R / l; dy *= R / l; }
      jk.style.transform = `translate(${dx}px,${dy}px)`;
      let x = dx / R, y = -dy / R;
      if (Math.hypot(x, y) < 0.2) { x = 0; y = 0; }
      joy.x = x; joy.y = y;
      const m = Math.hypot(x, y);
      if (m > joy.peak) joy.peak = m;
      if (m > 0.5) { joy.lx = x / m; joy.ly = y / m; }
    });
    const joyEnd = (e) => {
      if (e.pointerId !== joy.id) return;
      // 튕기기: 짧은 시간(0.23초) 안에 끝까지 밀었다 놓으면 그 방향으로 구르기
      if (e.type === 'pointerup' && performance.now() - joy.t0 < 230 && joy.peak > 0.8) { this.roll = true; this.rollDir = [joy.lx, joy.ly]; }
      joy.id = null; joy.x = joy.y = 0; this.joyHome();
    };
    jz.addEventListener('pointerup', joyEnd); jz.addEventListener('pointercancel', joyEnd);

    const KMAP = { u: ['t', 0], i: ['h', 0], y: ['h', Math.PI], o: ['u', 0], k: ['d', 0], j: ['l', 0] };
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys[k]) return;
      this.keys[k] = true;
      if (KMAP[k]) this.pressAtk(KMAP[k][0], KMAP[k][1]);
      if (k === ' ') { this.roll = true; e.preventDefault(); }
      if (k === 'p') this.ougi = true;
      if (k === 'e') this.sk = true;
      if (k === 'l' || k === 'shift') this.setGuard(true);
      if (k === 'escape' && this.onEscape) this.onEscape();
    });
    addEventListener('keyup', (e) => { const k = e.key.toLowerCase(); this.keys[k] = false; if (k === 'l' || k === 'shift') this.setGuard(false); });
    addEventListener('blur', () => { this.keys = {}; this.setGuard(false); });
  }
  stick() {
    const joy = this.joy, keys = this.keys;
    if (joy.id !== null) return [joy.x, joy.y];
    const x = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0);
    const y = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0);
    const l = Math.hypot(x, y);
    return l > 1 ? [x / l, y / l] : [x, y];
  }
  // 누른(그은) 순간의 스틱 방향으로 커맨드 판정
  pressAtk(b, a = 0) {
    if (!this.canPress()) return;
    const [x, y] = this.stick();
    this.btns.push({ b, dir: classify(x, y), a: Math.round(a * 100) / 100 });
    if (this.btns.length > 4) this.btns.shift();
  }
  // 베기 패드: 일정 거리 이상 그으면 그 순간 바로 발동(지연 최소), 안 긋고 떼면 찌르기
  initSlashPad(el, touch) {
    const st = { id: null, x: 0, y: 0, fired: false };
    const TH = () => Math.max(18, el.clientWidth * 0.12);
    const local = (e) => { const r = el.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const fx = (cls, x, y, len = 0, ang = 0) => {
      const d = document.createElement('div');
      d.className = cls; d.style.left = x + 'px'; d.style.top = y + 'px';
      if (len) { d.style.width = len + 'px'; d.style.transform = `rotate(${-ang}rad)`; }
      el.appendChild(d); setTimeout(() => d.remove(), 400);
    };
    const tap = () => { if (st.fired) return; st.fired = true; this.pressAtk('t'); fx('tapfx', st.x, st.y); };
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault(); touch();
      if (st.id !== null) return;
      st.id = e.pointerId; [st.x, st.y] = local(e); st.fired = false;
      try { el.setPointerCapture(e.pointerId); } catch (_) { /* */ }
      el.classList.add('on');
    });
    el.addEventListener('pointermove', (e) => {
      if (e.pointerId !== st.id || st.fired) return;
      e.preventDefault();
      const [x, y] = local(e), dx = x - st.x, dy = y - st.y, len = Math.hypot(dx, dy);
      if (len < TH()) return;
      st.fired = true;
      const ang = Math.atan2(-dy, dx), deg = (ang * 180) / Math.PI;
      let g;
      // 엄지로 그으면 살짝 비스듬해지므로 아래 판정을 넓게: 수직 ±35° = 내려치기, 그 바깥 사선 = 하단베기
      if (Math.abs(deg) <= 28 || Math.abs(deg) >= 152) g = 'h';
      else if (deg > 0) g = 'u';
      else g = deg <= -55 && deg >= -125 ? 'd' : 'l';
      this.pressAtk(g, ang);
      fx('stroke', st.x, st.y, Math.max(len, el.clientWidth * 0.45), ang);
    });
    const end = (e) => {
      if (e.pointerId !== st.id) return;
      if (e.type === 'pointerup') tap();
      st.id = null; el.classList.remove('on');
    };
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  }
  setGuard(on) { if (on && !this.guard) this.gp = true; this.guard = on; }
  clear() { this.btns.length = 0; this.guard = false; this.gp = false; this.roll = false; this.rollDir = null; this.ougi = false; this.sk = false; this.score = -1; }
  // 오의 문양 점수 (다 그렸을 때 한 번 전달)
  setScore(v) { this.score = v; }
  // sim.step 직전 호출: 이번 프레임 입력을 꺼냄
  consume() {
    let [mx, my] = this.stick();
    if (this.roll && this.rollDir) [mx, my] = this.rollDir; // 튕긴 방향으로 구르기
    const fi = { mx, my, guard: this.guard, gp: this.gp, roll: this.roll, btns: this.btns, ougi: this.ougi, sk: this.sk };
    if (this.score >= 0) fi.score = this.score;
    this.btns = []; this.gp = false; this.roll = false; this.rollDir = null; this.ougi = false; this.sk = false; this.score = -1;
    return fi;
  }
  joyHome() {
    const { joyZone: jz, joyBase: jb, joyKnob: jk } = this.el;
    const r = jz.getBoundingClientRect();
    jb.style.left = Math.max(90, r.width * 0.32) + 'px';
    jb.style.top = r.height - Math.max(95, r.height * 0.38) + 'px';
    jk.style.transform = '';
  }
}

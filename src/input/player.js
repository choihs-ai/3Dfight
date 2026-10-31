// 플레이어 입력 (터치 스틱 + 버튼 + 키보드) → 프레임마다 FrameInput 하나로 묶어서 sim에 전달
import { classify } from '../core/moves.js';

export class PlayerInput {
  // canPress(): 공격 입력을 받을 수 있는 상태인지 (대전 중 & 일시정지 아님)
  constructor({ joyZone, joyBase, joyKnob, pad, canPress, onAnyTouch }) {
    this.canPress = canPress;
    this.keys = {};
    this.joy = { id: null, cx: 0, cy: 0, x: 0, y: 0 };
    this.guard = false; this.gp = false; this.roll = false; this.btns = [];
    this.el = { joyZone, joyBase, joyKnob };
    const touch = () => onAnyTouch && onAnyTouch();

    pad.querySelectorAll('.btn').forEach((el) => {
      const k = el.dataset.k;
      const down = (e) => {
        e.preventDefault(); touch(); el.classList.add('on');
        if (k === 'guard') this.setGuard(true); else if (k === 'roll') this.roll = true; else this.pressAtk(k);
      };
      const up = (e) => { e.preventDefault(); el.classList.remove('on'); if (k === 'guard') this.setGuard(false); };
      el.addEventListener('pointerdown', down);
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('pointerleave', up);
    });

    const jz = joyZone, jb = joyBase, jk = joyKnob, joy = this.joy;
    jz.addEventListener('pointerdown', (e) => {
      e.preventDefault(); touch();
      if (joy.id !== null) return;
      joy.id = e.pointerId;
      try { jz.setPointerCapture(e.pointerId); } catch (_) { /* */ }
      const r = jz.getBoundingClientRect();
      joy.cx = e.clientX - r.left; joy.cy = e.clientY - r.top;
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
    });
    const joyEnd = (e) => { if (e.pointerId !== joy.id) return; joy.id = null; joy.x = joy.y = 0; this.joyHome(); };
    jz.addEventListener('pointerup', joyEnd); jz.addEventListener('pointercancel', joyEnd);

    const KMAP = { u: '1', i: '2', j: '3', k: '4', 1: '1', 2: '2', 3: '3', 4: '4' };
    addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (this.keys[k]) return;
      this.keys[k] = true;
      if (KMAP[k]) this.pressAtk(KMAP[k]);
      if (k === ' ') { this.roll = true; e.preventDefault(); }
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
  // 누른 순간의 스틱 방향으로 커맨드 판정 (프로토타입과 동일)
  pressAtk(b) {
    if (!this.canPress()) return;
    const [x, y] = this.stick();
    this.btns.push({ b, dir: classify(x, y) });
    if (this.btns.length > 4) this.btns.shift();
  }
  setGuard(on) { if (on && !this.guard) this.gp = true; this.guard = on; }
  clear() { this.btns.length = 0; this.guard = false; this.gp = false; this.roll = false; }
  // sim.step 직전 호출: 이번 프레임 입력을 꺼냄
  consume() {
    const [mx, my] = this.stick();
    const fi = { mx, my, guard: this.guard, gp: this.gp, roll: this.roll, btns: this.btns };
    this.btns = []; this.gp = false; this.roll = false;
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

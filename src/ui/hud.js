// HUD: 체력/스태미나 바, 타이머, 승리 표시, 콜아웃("카운터!"), 배너, 화면 번쩍임
import { MAXHP } from '../core/util.js';

const $ = (s) => document.querySelector(s);
export const show = (id, on) => $(id).classList.toggle('hide', !on);

export class Hud {
  constructor() {
    this.hp = [$('#hp0'), $('#hp1')]; this.lag = [$('#lag0'), $('#lag1')]; this.st = [$('#st0'), $('#st1')];
    this.stb = [$('#stb0'), $('#stb1')]; this.hpb = [$('#hpb0'), $('#hpb1')];
    this.timer = $('#timer'); this.flashEl = $('#flash'); this.flashV = 0; this.lastT = '';
  }
  call(side, text, cls) {
    const col = side === 0 ? $('#cL') : $('#cR');
    if (cls.startsWith('combo')) { const old = col.querySelector('.combo'); if (old) old.remove(); }
    while (col.children.length >= 3) col.firstChild.remove();
    const d = document.createElement('div');
    d.className = 'call ' + cls; d.textContent = text; col.appendChild(d);
    setTimeout(() => d.remove(), 900);
  }
  banner(t, cls = '') {
    const b = $('#banner');
    b.innerHTML = '';
    if (!t) return;
    const s = document.createElement('span');
    s.textContent = t; if (cls) s.className = cls;
    b.appendChild(s);
  }
  flash(v) { this.flashV = Math.max(this.flashV, v); }
  // 임팩트 프레임: 화면을 한순간 반전 (카운터·KO)
  impact() {
    const el = document.querySelector('#impact');
    el.style.opacity = '1';
    requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = '0'; })));
  }
  // 맞은 쪽 체력바 흔들기
  hitBar(i, big) {
    const b = this.hpb[i];
    b.classList.remove('shake', 'shake2'); void b.offsetWidth; b.classList.add(big ? 'shake2' : 'shake');
  }
  pips(wins) {
    for (let i = 0; i < 2; i++) $('#pip' + i).innerHTML = '<span class="pip' + (wins[i] > 0 ? ' on' : '') + '"></span><span class="pip' + (wins[i] > 1 ? ' on' : '') + '"></span>';
  }
  // 매 렌더 프레임
  update(sim, fx, mode) {
    if (this.flashV > 0) { this.flashEl.style.opacity = this.flashV.toFixed(2); this.flashV = Math.max(0, this.flashV - 0.04); }
    else if (this.flashEl.style.opacity !== '0') this.flashEl.style.opacity = '0';
    if (mode === 'demo') return;
    for (let i = 0; i < 2; i++) {
      const f = sim.f[i];
      this.hp[i].style.transform = `scaleX(${(f.hp / MAXHP).toFixed(4)})`;
      this.lag[i].style.transform = `scaleX(${(fx[i].hpLag / MAXHP).toFixed(4)})`;
      this.st[i].style.transform = `scaleX(${(f.st / 100).toFixed(3)})`;
      this.stb[i].classList.toggle('ex', f.exhaust);
      this.hpb[i].classList.toggle('low', f.hp < 30);
    }
    const practice = sim.mode === 'practice';
    const t = practice ? '∞' : String(Math.ceil(sim.timer));
    if (t !== this.lastT) { this.timer.textContent = t; this.lastT = t; this.timer.classList.toggle('urgent', !practice && sim.timer <= 10); }
  }
}

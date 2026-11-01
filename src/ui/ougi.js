// 오의 화면: 컷인 + 어둡게 + 문양 그리기 캔버스 (내가 시전자면 손가락으로 그림, 아니면 그려지는 모습을 보여줌)
import { SHAPES, scoreShape, grade } from '../input/shapes.js';
import { hexOf } from '../data/characters.js';

const $ = (s) => document.querySelector(s);

export class OugiUI {
  constructor() {
    this.layer = $('#ougiLayer'); this.cv = $('#drawCv'); this.g = this.cv.getContext('2d');
    this.active = false; this.pts = []; this.drawing = false; this.onScore = null;
    const pos = (e) => { const r = this.cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    this.cv.addEventListener('pointerdown', (e) => { if (!this.mine || this.done) return; e.preventDefault(); this.drawing = true; this.pts = [pos(e)]; try { this.cv.setPointerCapture(e.pointerId); } catch (_) { /* */ } });
    this.cv.addEventListener('pointermove', (e) => { if (!this.drawing) return; e.preventDefault(); this.pts.push(pos(e)); });
    const end = () => { if (!this.drawing) return; this.drawing = false; this.finish(); };
    this.cv.addEventListener('pointerup', end); this.cv.addEventListener('pointercancel', end);
  }
  // mine: 내가 그리는지, ch: 시전자 캐릭터
  start(ch, mine, onScore) {
    this.ch = ch; this.mine = mine; this.onScore = onScore; this.done = false; this.pts = []; this.t = 0; this.active = true;
    const col = hexOf(ch.trail[1]);
    this.layer.style.setProperty('--ec', col); this.col = col;
    $('#ciStyle').textContent = `${ch.style} 오의`; $('#ciName').textContent = ch.ougi.name; $('#ciHanja').textContent = ch.ougi.hanja;
    const cut = $('#cutin'); cut.style.animation = 'none'; void cut.offsetWidth; cut.style.animation = '';
    $('#drawGrade').textContent = '';
    $('#drawHint').textContent = mine ? `화면에 ${SHAPES[ch.ougi.shape].name}을(를) 그리세요!` : `${ch.name}의 오의!`;
    this.layer.classList.remove('hide');
    this.cv.classList.toggle('on', mine);
    this.resize();
  }
  resize() { const d = Math.min(2, devicePixelRatio || 1); this.cv.width = innerWidth * d; this.cv.height = innerHeight * d; this.dpr = d; }
  finish() {
    if (this.done) return;
    this.done = true;
    const s = scoreShape(this.ch.ougi.shape, this.pts);
    $('#drawGrade').textContent = `${grade(s)} ${s}`;
    $('#drawHint').textContent = '';
    if (this.onScore) this.onScore(s);
  }
  // 상대가 그릴 때 / 시전 결과 표시
  showScore(s) { this.done = true; $('#drawGrade').textContent = `${grade(s)} ${s}`; $('#drawHint').textContent = ''; }
  hide() { this.active = false; this.layer.classList.add('hide'); this.cv.classList.remove('on'); this.drawing = false; }
  // 매 렌더 프레임
  update(dt) {
    if (!this.active) return;
    this.t += dt;
    const g = this.g, d = this.dpr, W = this.cv.width, H = this.cv.height, S = SHAPES[this.ch.ougi.shape];
    g.clearRect(0, 0, W, H);
    // 본보기 (점선 + 천천히 그려지는 안내)
    const cx = W / 2, cy = H * 0.52, sc = Math.min(W, H) * 0.3;
    const P = S.res.map((p) => [cx + p[0] * sc, cy + p[1] * sc]);
    g.lineCap = 'round'; g.lineJoin = 'round';
    g.setLineDash([10 * d, 12 * d]); g.lineWidth = 6 * d; g.strokeStyle = 'rgba(255,255,255,.28)';
    g.beginPath(); P.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.stroke();
    g.setLineDash([]);
    if (!this.mine || (!this.drawing && !this.done && this.pts.length === 0)) {
      // 안내 빛줄기: 본보기를 따라 그려지는 모습
      const k = Math.min(P.length, Math.floor(((this.t * 0.9) % 1.4) / 1.0 * P.length));
      this.glow(P.slice(0, Math.max(2, k)), this.mine ? 0.45 : 1);
    }
    if (this.pts.length > 1) this.glow(this.pts.map((p) => [p[0] * d, p[1] * d]), 1);
  }
  glow(pts, a) {
    const g = this.g, d = this.dpr;
    for (const [w, al, c] of [[22, 0.25, this.col], [12, 0.6, this.col], [4, 1, '#fff']]) {
      g.globalAlpha = al * a; g.strokeStyle = c; g.lineWidth = w * d;
      g.beginPath(); pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.stroke();
    }
    g.globalAlpha = 1;
  }
}

// 진입점: 화면/입력/UI 연결 + 게임 루프 + 테스트 훅
import { View } from './render/view.js';
import { Hud, show } from './ui/hud.js';
import { PlayerInput } from './input/player.js';
import { Game } from './game.js';
import { Sound } from './audio/sound.js';
import { AIL } from './core/ai.js';
import { MV } from './core/moves.js';
import { CHARACTERS } from './data/characters.js';

const $ = (s) => document.querySelector(s);
function fatal(msg) { show('#title', false); $('#fatalMsg').textContent = msg; show('#fatal', true); }

let view;
try {
  view = new View($('#c'));
} catch (e) {
  console.error(e);
  fatal('이 기기에서 WebGL을 사용할 수 없어요.');
  throw e;
}
const hud = new Hud();
let game;
const input = new PlayerInput({
  joyZone: $('#joyZone'), joyBase: $('#joyBase'), joyKnob: $('#joyKnob'), pad: $('#pad'), slashPad: $('#slashPad'),
  canPress: () => game.canPress(), onAnyTouch: () => Sound.init(),
});
game = new Game({ view, hud, input });
input.onEscape = () => game.togglePause();
$('#ver').textContent = 'v' + __APP_VERSION__;

// 메뉴
document.querySelectorAll('#diffRow .ui').forEach((b) => b.addEventListener('click', () => {
  document.querySelectorAll('#diffRow .ui').forEach((x) => x.classList.remove('sel'));
  b.classList.add('sel'); game.diff = b.dataset.d; Sound.init(); Sound.muted = false; Sound.play('ui'); Sound.muted = game.mode === 'demo';
}));
let movesFrom = '#title';
// 캐릭터 선택
let pick = 0;
function renderCards() {
  $('#cards').innerHTML = CHARACTERS.map((c, i) => {
    const hex = (v) => '#' + v.map((x) => Math.round(Math.min(1, x) * 255).toString(16).padStart(2, '0')).join('');
    return `<div class="card${i === pick ? ' sel' : ''}" data-i="${i}" style="--c1:${c.colors.gi};--c2:${hex(c.trail[1])}">
      ${i === pick ? '<span class="tag2">나</span>' : ''}<div class="ic">${c.icon}</div><div class="el">${c.element} 원소</div>
      <div class="nm">${c.name}</div><div class="st">${c.style}</div><div class="ds">${c.desc}</div></div>`;
  }).join('');
  document.querySelectorAll('#cards .card').forEach((el) => el.addEventListener('click', () => { pick = +el.dataset.i; Sound.muted = false; Sound.play('ui'); Sound.muted = game.mode === 'demo'; renderCards(); }));
}
$('#startBtn').addEventListener('click', () => { Sound.init(); renderCards(); show('#title', false); show('#charSel', true); });
$('#charBack').addEventListener('click', () => { show('#charSel', false); show('#title', true); });
$('#fightBtn').addEventListener('click', () => {
  Sound.init();
  const others = CHARACTERS.filter((_, i) => i !== pick);
  game.chars = [CHARACTERS[pick], others[(Math.random() * others.length) | 0]];
  show('#charSel', false); game.startMatch();
});
$('#movesBtn').addEventListener('click', () => { movesFrom = '#title'; show('#title', false); show('#moves', true); });
$('#movesClose').addEventListener('click', () => { show('#moves', false); show(movesFrom, true); });
$('#pauseBtn').addEventListener('click', () => game.togglePause());
$('#resumeBtn').addEventListener('click', () => game.togglePause());
$('#pMoves').addEventListener('click', () => { movesFrom = '#pause'; show('#pause', false); show('#moves', true); });
$('#pQuit').addEventListener('click', () => { show('#pause', false); game.paused = false; game.startDemo(); });
$('#againBtn').addEventListener('click', () => { show('#result', false); game.startMatch(); });
$('#rQuit').addEventListener('click', () => { show('#result', false); game.startDemo(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden && (game.mode === 'match' || game.mode === 'practice') && !game.paused) game.togglePause();
});
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('dblclick', (e) => e.preventDefault());

function orient() { $('#orientNote').classList.toggle('hide', innerWidth > innerHeight); }
function resize() { view.resize(); orient(); if (game.mode !== 'demo') input.joyHome(); }
addEventListener('resize', resize);
addEventListener('orientationchange', () => setTimeout(resize, 200));
resize();

// 테스트/디버그 훅 (프로토타입과 같은 이름)
const G = {};
for (const k of ['frame', 'phase', 'phaseT', 'round', 'wins', 'timer', 'hitstop', 'winner']) Object.defineProperty(G, k, { get: () => game.sim[k] });
for (const k of ['mode', 'diff', 'paused', 'freeze', 'auto', 'stats', 't', 'slow']) Object.defineProperty(G, k, { get: () => game[k], set: (v) => { game[k] = v; } });
Object.defineProperty(G, 'f', { get: () => game.sim.f });
Object.defineProperty(G, 'sim', { get: () => game.sim });
Object.defineProperty(G, 'ctrl', { get: () => game.ctrl });
window.__G = G;
window.__game = game;
Object.defineProperty(window, '__F', { get: () => game.sim.f, configurable: true });
window.__AIL = AIL; window.__MV = MV;
window.__step = (n) => { for (let i = 0; i < n; i++) game.step(); };

const qs = new URLSearchParams(location.search);
if (qs.has('auto')) { game.auto = true; game.diff = qs.get('auto') || 'normal'; game.startMatch(); }
else game.startDemo();

// ?fps 를 주소 뒤에 붙이면 프레임·해상도·그리기 호출 수 표시 (폰에서 끊김 확인용)
let fpsEl = null, fpsN = 0, fpsT = 0;
if (qs.has('fps')) { fpsEl = document.createElement('div'); fpsEl.style.cssText = 'position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 80px);transform:translateX(-50%);z-index:20;font:12px monospace;background:#000a;padding:2px 6px;border-radius:4px;pointer-events:none'; document.body.appendChild(fpsEl); }
let last = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.1) dt = 0.1; if (dt < 0) dt = 0;
  game.frame(dt);
  if (fpsEl) { fpsN++; fpsT += dt; if (fpsT >= 0.5) { const info = view.renderer.info.render; fpsEl.textContent = `${Math.round(fpsN / fpsT)}fps · 해상도x${view.dpr} · draw ${info.calls}`; fpsN = 0; fpsT = 0; } }
}
requestAnimationFrame(loop);

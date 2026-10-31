// 진입점: 화면/입력/UI 연결 + 게임 루프 + 테스트 훅
import { View } from './render/view.js';
import { Hud, show } from './ui/hud.js';
import { PlayerInput } from './input/player.js';
import { Game } from './game.js';
import { Sound } from './audio/sound.js';
import { AIL } from './core/ai.js';
import { MV } from './core/moves.js';

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
  joyZone: $('#joyZone'), joyBase: $('#joyBase'), joyKnob: $('#joyKnob'), pad: $('#pad'),
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
$('#startBtn').addEventListener('click', () => { Sound.init(); game.startMatch(); });
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
for (const k of ['mode', 'diff', 'paused', 'auto', 'stats', 't', 'slow']) Object.defineProperty(G, k, { get: () => game[k], set: (v) => { game[k] = v; } });
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

let last = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  let dt = (now - last) / 1000; last = now;
  if (dt > 0.1) dt = 0.1; if (dt < 0) dt = 0;
  game.frame(dt);
}
requestAnimationFrame(loop);

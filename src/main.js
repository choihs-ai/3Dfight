// 진입점: 화면/입력/UI 연결 + 게임 루프 + 테스트 훅
import { View } from './render/view.js';
import { Hud, show } from './ui/hud.js';
import { PlayerInput } from './input/player.js';
import { Game } from './game.js';
import { Sound } from './audio/sound.js';
import { AIL } from './core/ai.js';
import { MV } from './core/moves.js';
import { CHARACTERS, CHAR_BY_ID } from './data/characters.js';
import { hostRoom, joinRoom } from './net/transport.js';

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
// 게임 속도 (폰에서 직접 비교용) — 전투 로직은 그대로, 1초에 진행하는 프레임 수만 바뀜
const SPEEDS = [['보통', 1], ['느리게', 0.85], ['아주 느리게', 0.72], ['빠르게', 1.15]];
let speedI = 0;
try { speedI = Math.max(0, SPEEDS.findIndex((x) => String(x[1]) === localStorage.getItem('lof.speed'))); } catch (_) { /* */ }
const applySpeed = () => { game.speed = SPEEDS[speedI][1]; $('#speedBtn').textContent = '속도: ' + SPEEDS[speedI][0]; };
applySpeed();
$('#speedBtn').addEventListener('click', () => { speedI = (speedI + 1) % SPEEDS.length; applySpeed(); try { localStorage.setItem('lof.speed', String(SPEEDS[speedI][1])); } catch (_) { /* */ } });
// 경기장 선택 (기기에 저장)
import { STAGES } from './render/view.js';
const STAGE_IDS = Object.keys(STAGES);
let stageI = 0;
try { stageI = Math.max(0, STAGE_IDS.indexOf(localStorage.getItem('lof.stage'))); } catch (_) { /* */ }
const applyStage = () => { view.setStage(STAGE_IDS[stageI]); view.warmup(); $('#stageBtn').textContent = '경기장: ' + STAGES[STAGE_IDS[stageI]].name; };
applyStage();
$('#stageBtn').addEventListener('click', () => { stageI = (stageI + 1) % STAGE_IDS.length; applyStage(); try { localStorage.setItem('lof.stage', STAGE_IDS[stageI]); } catch (_) { /* */ } });
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
$('#startBtn').addEventListener('click', () => { Sound.init(); lobby = null; renderCards(); $('#fightBtn').textContent = '대전 시작'; $('#fightBtn').disabled = false; show('#title', false); show('#charSel', true); });
$('#charBack').addEventListener('click', () => { if (lobby) leaveLobby(); show('#charSel', false); show('#title', true); });
$('#fightBtn').addEventListener('click', () => {
  Sound.init();
  if (lobby) { // 온라인: 내 선택을 보내고 상대를 기다림
    lobby.picks[lobby.role] = CHARACTERS[pick].id;
    lobby.t.send({ k: 'pick', ch: CHARACTERS[pick].id });
    $('#fightBtn').textContent = '상대 기다리는 중…'; $('#fightBtn').disabled = true;
    maybeStart(); return;
  }
  const others = CHARACTERS.filter((_, i) => i !== pick);
  game.chars = [CHARACTERS[pick], others[(Math.random() * others.length) | 0]];
  show('#charSel', false); game.startMatch();
});

// ---------- 온라인 로비 ----------
const NETKIND = new URLSearchParams(location.search).get('net') === 'local' ? 'local' : 'peer'; // ?net=local: 같은 브라우저 탭끼리 테스트
let lobby = null, hosting = null;
const olStatus = (t) => { $('#olStatus').textContent = t; };
function olReset() { show('#olMenu', true); show('#olWait', false); olStatus(''); $('#olCode').value = ''; }
$('#onlineBtn').addEventListener('click', () => { Sound.init(); olReset(); show('#title', false); show('#online', true); });
$('#olBack').addEventListener('click', () => { if (hosting) { hosting.cancel(); hosting = null; } leaveLobby(); show('#online', false); show('#title', true); });
$('#olHost').addEventListener('click', async () => {
  olStatus('방 만드는 중…');
  try {
    hosting = await hostRoom(NETKIND);
    show('#olMenu', false); show('#olWait', true); $('#olRoom').textContent = hosting.code; olStatus('친구를 기다리는 중…');
    const h = hosting;
    const t = await h.connected;
    if (hosting !== h) return; // 취소됨
    hosting = null; onConnected(t, 0);
  } catch (e) { olStatus(e.message); show('#olMenu', true); show('#olWait', false); }
});
$('#olJoin').addEventListener('click', async () => {
  const code = $('#olCode').value.trim();
  if (!/^\d{4}$/.test(code)) { olStatus('방 번호 4자리를 입력하세요.'); return; }
  olStatus('연결 중…');
  try { onConnected(await joinRoom(code, NETKIND), 1); } catch (e) { olStatus(e.message); }
});
function onConnected(t, role) {
  lobby = { t, role, picks: [null, null] };
  t.onMessage((m) => lobbyMsg(m));
  t.onClose(() => netClosed());
  t.send({ k: 'hello', v: __APP_VERSION__ });
  Sound.play('bell');
  show('#online', false); renderCards(); $('#fightBtn').textContent = '준비 완료'; $('#fightBtn').disabled = false; show('#charSel', true);
}
function lobbyMsg(m) {
  if (game.onNet(m)) return;
  if (!lobby) return;
  if (m.k === 'hello' && m.v !== __APP_VERSION__) hud.banner('버전이 달라요 — 둘 다 새로고침', 'ko');
  if (m.k === 'pick') { lobby.picks[1 - lobby.role] = m.ch; maybeStart(); }
  if (m.k === 'start' && lobby.role === 1) {
    show('#charSel', false); show('#result', false);
    game.startOnline({ me: 1, seed: m.seed, chars: m.chars.map((id) => CHAR_BY_ID[id]), transport: lobby.t });
  }
}
function maybeStart() {
  if (!lobby || lobby.role !== 0 || !lobby.picks[0] || !lobby.picks[1]) return;
  const seed = (Math.random() * 2 ** 31) | 0, chars = lobby.picks.map((id) => CHAR_BY_ID[id]);
  lobby.t.send({ k: 'start', seed, chars: lobby.picks });
  show('#charSel', false);
  game.startOnline({ me: 0, seed, chars, transport: lobby.t });
}
function leaveLobby() { if (lobby) { try { lobby.t.close(); } catch (_) { /* */ } lobby = null; } game.net = null; game.ls = null; }
function netClosed() {
  if (!lobby) return;
  lobby = null; game.net = null;
  if (game.mode === 'online' || game.mode === 'result' || !$('#charSel').classList.contains('hide')) {
    hud.banner('상대와 연결이 끊겼어요', 'ko');
    setTimeout(() => { show('#charSel', false); show('#result', false); game.ls = null; game.startDemo(); }, 1800);
  }
}
$('#movesBtn').addEventListener('click', () => { movesFrom = '#title'; show('#title', false); show('#moves', true); });
$('#movesClose').addEventListener('click', () => { show('#moves', false); show(movesFrom, true); });
$('#pauseBtn').addEventListener('click', () => game.togglePause());
$('#resumeBtn').addEventListener('click', () => game.togglePause());
$('#pMoves').addEventListener('click', () => { movesFrom = '#pause'; show('#pause', false); show('#moves', true); });
$('#pQuit').addEventListener('click', () => { show('#pause', false); game.paused = false; game.startDemo(); });
$('#againBtn').addEventListener('click', () => {
  if (game.ls && lobby) { game.rematch[game.me] = true; lobby.t.send({ k: 'rematch' }); $('#againBtn').textContent = '상대 기다리는 중…'; game.tryRematch(); return; }
  show('#result', false); game.startMatch();
});
$('#rQuit').addEventListener('click', () => { show('#result', false); leaveLobby(); game.startDemo(); });
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

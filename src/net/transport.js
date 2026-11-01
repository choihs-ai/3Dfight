// 연결 방식: PeerJS(WebRTC, 실제 온라인) / BroadcastChannel(같은 브라우저 탭끼리 — 테스트용 ?net=local)
// 공통 인터페이스: { send(obj), onMessage(fn), onClose(fn), close() }
const PREFIX = 'lockon-fighter-v1-';
export const newCode = () => String(1000 + Math.floor(Math.random() * 9000));

const ICE = [
  { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
  { urls: 'stun:global.stun.twilio.com:3478' },
  // 무료 공개 중계 서버 (일부 통신사 망에서 직접 연결이 안 될 때 대비, 가용성 보장 없음)
  { urls: ['turn:openrelay.metered.ca:80', 'turn:openrelay.metered.ca:443', 'turn:openrelay.metered.ca:443?transport=tcp'], username: 'openrelayproject', credential: 'openrelayproject' },
];

function wrapPeerConn(conn, peer) {
  let onMsg = () => {}, onClose = () => {}, closed = false;
  conn.on('data', (d) => onMsg(typeof d === 'string' ? JSON.parse(d) : d));
  const bye = () => { if (closed) return; closed = true; onClose(); };
  conn.on('close', bye); conn.on('error', bye); peer.on('disconnected', bye);
  return {
    send: (o) => { if (conn.open) conn.send(JSON.stringify(o)); },
    onMessage: (f) => { onMsg = f; }, onClose: (f) => { onClose = f; },
    close: () => { closed = true; try { conn.close(); peer.destroy(); } catch (_) { /* */ } },
  };
}

// 방 만들기: { code, connected: Promise<transport>, cancel() }
export async function hostRoom(kind = 'peer') {
  if (kind === 'local') return hostLocal();
  const { Peer } = await import('peerjs');
  for (let tries = 0; tries < 4; tries++) {
    const code = newCode();
    const peer = new Peer(PREFIX + code, { config: { iceServers: ICE } });
    const ok = await new Promise((res) => { peer.on('open', () => res(true)); peer.on('error', (e) => res(e.type === 'unavailable-id' ? false : e)); });
    if (ok === false) { peer.destroy(); continue; }
    if (ok !== true) { peer.destroy(); throw new Error('연결 서버에 접속하지 못했어요 (' + (ok.type || ok) + ')'); }
    const connected = new Promise((res) => peer.on('connection', (conn) => conn.on('open', () => res(wrapPeerConn(conn, peer)))));
    return { code, connected, cancel: () => peer.destroy() };
  }
  throw new Error('방 번호를 만들지 못했어요. 다시 시도해 주세요.');
}

export async function joinRoom(code, kind = 'peer') {
  if (kind === 'local') return joinLocal(code);
  const { Peer } = await import('peerjs');
  const peer = new Peer({ config: { iceServers: ICE } });
  await new Promise((res, rej) => { peer.on('open', res); peer.on('error', (e) => rej(new Error('연결 서버에 접속하지 못했어요 (' + e.type + ')'))); });
  return new Promise((res, rej) => {
    const conn = peer.connect(PREFIX + code, { reliable: true, serialization: 'raw' });
    const t = setTimeout(() => { peer.destroy(); rej(new Error('방을 찾지 못했어요. 번호를 확인해 주세요.')); }, 15000);
    peer.on('error', (e) => { clearTimeout(t); peer.destroy(); rej(new Error(e.type === 'peer-unavailable' ? '그 번호의 방이 없어요.' : '연결 실패 (' + e.type + ')')); });
    conn.on('open', () => { clearTimeout(t); res(wrapPeerConn(conn, peer)); });
  });
}

// ---- 테스트용: 같은 브라우저 탭끼리 BroadcastChannel ----
function bcTransport(ch, me) {
  let onMsg = () => {}, onClose = () => {};
  ch.onmessage = (e) => { if (e.data.from === me) return; if (e.data.bye) onClose(); else if (e.data.m) onMsg(e.data.m); };
  return { send: (m) => ch.postMessage({ from: me, m }), onMessage: (f) => { onMsg = f; }, onClose: (f) => { onClose = f; }, close: () => { ch.postMessage({ from: me, bye: 1 }); ch.close(); } };
}
async function hostLocal() {
  const code = newCode(), ch = new BroadcastChannel('lof-' + code);
  const connected = new Promise((res) => {
    const h = (e) => { if (e.data.hello === 'guest') { ch.postMessage({ from: 'host', hello: 'host' }); ch.removeEventListener('message', h); res(bcTransport(ch, 'host')); } };
    ch.addEventListener('message', h);
  });
  return { code, connected, cancel: () => ch.close() };
}
async function joinLocal(code) {
  const ch = new BroadcastChannel('lof-' + code);
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error('그 번호의 방이 없어요.')), 4000);
    const h = (e) => { if (e.data.hello === 'host') { clearTimeout(t); ch.removeEventListener('message', h); res(bcTransport(ch, 'guest')); } };
    ch.addEventListener('message', h);
    ch.postMessage({ from: 'guest', hello: 'guest' });
  });
}

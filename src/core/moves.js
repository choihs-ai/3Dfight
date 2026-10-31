// 기술 프레임 데이터 (프로토타입 MV 표 수치 그대로) — 60fps 기준 프레임
// startup=발생, active=지속, recovery=후딜, hitstun/blockstun=히트·가드 경직
// level: high 상단 / mid 중단 / low 하단
export const MV = {};
const DEF = {
  level: 'high', startup: 10, active: 3, recovery: 14, dmg: 6, range: 1.3, arc: 0.55, track: 0.06, lunge: 0.15,
  hitstun: 18, blockstun: 12, chip: 4, stam: 6, push: 2.5, bpush: 2, hitstop: 7, limb: 'blade', chain: null,
  launch: 0, knockdown: false, armor: null,
};
function mv(id, o) {
  const m = Object.assign({ id, name: id }, DEF, o);
  m.total = m.startup + m.active + m.recovery;
  MV[id] = m;
}
// 검술 기술표 — 프레임 수치는 프로토타입 기술을 1:1로 옮김(괄호 안이 원래 기술). 칼이라 사거리 +0.45
// 입력 = 긋기 방향(t 탭 / h 가로 / u 위로 / d 아래로 / l 아래 대각선) + 스틱 방향(n f b s)
const R = 0.45;
mv('stab', { name: '찌르기', startup: 7, active: 3, recovery: 12, dmg: 5, range: 1.25 + R, arc: 0.5, track: 0.07, lunge: 0.22, hitstun: 17, blockstun: 12, chip: 3, stam: 5, push: 1.6, hitstop: 6, limb: 'blade', chain: { h: 'combo2' } }); // (잽)
mv('combo2', { name: '이연 베기', startup: 8, active: 3, recovery: 16, dmg: 8, range: 1.35 + R, arc: 0.6, track: 0.06, lunge: 0.25, hitstun: 20, blockstun: 13, chip: 4, stam: 5, push: 2, hitstop: 7, limb: 'blade', chain: { h: 'combo3' } }); // (원투)
mv('combo3', { name: '삼연 회전베기', startup: 14, active: 4, recovery: 22, dmg: 12, range: 1.6 + R, arc: 0.8, track: 0.05, lunge: 0.25, hitstun: 24, blockstun: 13, chip: 6, stam: 8, push: 3, hitstop: 10, limb: 'blade', knockdown: true }); // (원투킥)
mv('slash_h', { name: '가로베기', startup: 10, active: 3, recovery: 15, dmg: 9, range: 1.35 + R, arc: 0.7, track: 0.06, lunge: 0.25, hitstun: 20, blockstun: 13, chip: 4, stam: 6, push: 2.2, hitstop: 7, limb: 'blade' }); // (스트레이트)
mv('slash_low', { name: '하단베기', level: 'low', startup: 12, active: 3, recovery: 17, dmg: 7, range: 1.4 + R, arc: 0.6, track: 0.05, lunge: 0.2, hitstun: 18, blockstun: 15, chip: 3, stam: 6, push: 1.4, hitstop: 7, limb: 'blade' }); // (로킥)
mv('slash_down', { name: '내려베기', level: 'mid', startup: 15, active: 4, recovery: 20, dmg: 13, range: 1.6 + R, arc: 0.5, track: 0.05, lunge: 0.25, hitstun: 24, blockstun: 14, chip: 6, stam: 10, push: 3, hitstop: 9, limb: 'blade' }); // (하이킥, 위에서 내려치므로 중단)
mv('slash_up', { name: '올려베기', level: 'mid', startup: 15, active: 4, recovery: 22, dmg: 12, range: 1.3 + R, arc: 0.6, track: 0.05, lunge: 0.5, hitstun: 0, launch: 7.4, blockstun: 11, chip: 6, stam: 12, push: 0, hitstop: 11, limb: 'blade' }); // (어퍼컷)
mv('thrust', { name: '밀어차기', level: 'mid', startup: 13, active: 4, recovery: 18, dmg: 12, range: 1.65 + R, arc: 0.45, track: 0.05, lunge: 0.45, hitstun: 22, blockstun: 13, chip: 6, stam: 9, push: 5, bpush: 4, hitstop: 8, limb: 'blade' }); // (앞차기)
mv('sweep', { name: '다리 후리기', level: 'low', startup: 18, active: 5, recovery: 26, dmg: 11, range: 1.75 + R, arc: 1.1, track: 0.04, lunge: 0.1, blockstun: 11, chip: 4, stam: 10, push: 0, hitstop: 9, limb: 'blade', knockdown: true }); // (다리 쓸기)
mv('spin', { name: '회전베기', level: 'mid', startup: 17, active: 5, recovery: 22, dmg: 13, range: 1.6 + R, arc: 1.45, track: 0.15, lunge: 0.3, hitstun: 22, blockstun: 12, chip: 6, stam: 11, push: 3.5, hitstop: 9, limb: 'blade' }); // (돌려차기)
mv('helm', { name: '투구 깨기', level: 'mid', startup: 24, active: 4, recovery: 26, dmg: 22, range: 1.45 + R, arc: 0.7, track: 0.06, lunge: 0.6, hitstun: 30, blockstun: 20, chip: 32, stam: 22, push: 4, bpush: 3, hitstop: 15, limb: 'blade', knockdown: true, armor: [5, 24] }); // (망치)

// 커맨드: 스틱 방향(n 중립 / f 앞 / b 뒤 / s 옆) + 긋기(t h u d l)
export const CMD = { t: 'stab', h: 'slash_h', u: 'slash_up', d: 'slash_down', l: 'slash_low', ft: 'thrust', bl: 'sweep', sh: 'spin', bd: 'helm' };
// 긋기 이름 (화면 표시용)
export const GESTURES = { t: '탭', h: '가로 긋기', u: '위로 긋기', d: '아래로 긋기', l: '아래 대각선 긋기' };
export const resolveMove = (b, d) => CMD[d + b] || CMD[b];

// 스틱 → 방향 코드 (프로토타입 classify 그대로)
export function classify(x, y) {
  const m = Math.hypot(x, y);
  if (m < 0.45) return 'n';
  if (y > 0.5 && y >= Math.abs(x)) return 'f';
  if (y < -0.5 && -y >= Math.abs(x)) return 'b';
  if (Math.abs(x) > 0.5) return 's';
  return 'n';
}

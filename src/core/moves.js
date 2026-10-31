// 기술 프레임 데이터 (프로토타입 MV 표 수치 그대로) — 60fps 기준 프레임
// startup=발생, active=지속, recovery=후딜, hitstun/blockstun=히트·가드 경직
// level: high 상단 / mid 중단 / low 하단
export const MV = {};
const DEF = {
  level: 'high', startup: 10, active: 3, recovery: 14, dmg: 6, range: 1.3, arc: 0.55, track: 0.06, lunge: 0.15,
  hitstun: 18, blockstun: 12, chip: 4, stam: 6, push: 2.5, bpush: 2, hitstop: 7, limb: 'fistL', chain: null,
  launch: 0, knockdown: false, armor: null,
};
function mv(id, o) {
  const m = Object.assign({ id, name: id }, DEF, o);
  m.total = m.startup + m.active + m.recovery;
  MV[id] = m;
}
mv('jab', { name: '잽', startup: 7, active: 3, recovery: 12, dmg: 5, range: 1.25, arc: 0.5, track: 0.07, lunge: 0.22, hitstun: 17, blockstun: 12, chip: 3, stam: 5, push: 1.6, hitstop: 6, limb: 'fistL', chain: { 2: 'onetwo' } });
mv('onetwo', { name: '원투', startup: 8, active: 3, recovery: 16, dmg: 8, range: 1.35, arc: 0.5, track: 0.06, lunge: 0.25, hitstun: 20, blockstun: 13, chip: 4, stam: 5, push: 2, hitstop: 7, limb: 'fistR', chain: { 4: 'onetwokick' } });
mv('onetwokick', { name: '원투킥', startup: 14, active: 4, recovery: 22, dmg: 12, range: 1.6, arc: 0.7, track: 0.05, lunge: 0.25, hitstun: 24, blockstun: 13, chip: 6, stam: 8, push: 3, hitstop: 10, limb: 'footR', knockdown: true });
mv('straight', { name: '스트레이트', startup: 10, active: 3, recovery: 15, dmg: 9, range: 1.35, arc: 0.5, track: 0.06, lunge: 0.25, hitstun: 20, blockstun: 13, chip: 4, stam: 6, push: 2.2, hitstop: 7, limb: 'fistR' });
mv('lowkick', { name: '로킥', level: 'low', startup: 12, active: 3, recovery: 17, dmg: 7, range: 1.4, arc: 0.5, track: 0.05, lunge: 0.2, hitstun: 18, blockstun: 15, chip: 3, stam: 6, push: 1.4, hitstop: 7, limb: 'footL' });
mv('highkick', { name: '하이킥', startup: 15, active: 4, recovery: 20, dmg: 13, range: 1.6, arc: 0.7, track: 0.05, lunge: 0.25, hitstun: 24, blockstun: 14, chip: 6, stam: 10, push: 3, hitstop: 9, limb: 'footR' });
mv('uppercut', { name: '어퍼컷', level: 'mid', startup: 15, active: 4, recovery: 22, dmg: 12, range: 1.3, arc: 0.6, track: 0.05, lunge: 0.5, hitstun: 0, launch: 7.4, blockstun: 11, chip: 6, stam: 12, push: 0, hitstop: 11, limb: 'fistR' });
mv('frontkick', { name: '앞차기', level: 'mid', startup: 13, active: 4, recovery: 18, dmg: 12, range: 1.65, arc: 0.5, track: 0.05, lunge: 0.3, hitstun: 22, blockstun: 13, chip: 6, stam: 9, push: 5, bpush: 4, hitstop: 8, limb: 'footL' });
mv('sweep', { name: '다리 쓸기', level: 'low', startup: 18, active: 5, recovery: 26, dmg: 11, range: 1.75, arc: 1.1, track: 0.04, lunge: 0.1, blockstun: 11, chip: 4, stam: 10, push: 0, hitstop: 9, limb: 'footR', knockdown: true });
mv('homing', { name: '돌려차기', level: 'mid', startup: 17, active: 5, recovery: 22, dmg: 13, range: 1.6, arc: 1.45, track: 0.15, lunge: 0.3, hitstun: 22, blockstun: 12, chip: 6, stam: 11, push: 3.5, hitstop: 9, limb: 'footR' });
mv('hammer', { name: '망치 내려치기', level: 'mid', startup: 24, active: 4, recovery: 26, dmg: 22, range: 1.45, arc: 0.7, track: 0.06, lunge: 0.6, hitstun: 30, blockstun: 20, chip: 32, stam: 22, push: 4, bpush: 3, hitstop: 15, limb: 'both', knockdown: true, armor: [5, 24] });

// 커맨드: 방향(n 중립 / f 앞 / b 뒤 / s 옆) + 버튼(1~4)
export const CMD = { 1: 'jab', 2: 'straight', 3: 'lowkick', 4: 'highkick', f2: 'uppercut', f4: 'frontkick', b3: 'sweep', s4: 'homing', b2: 'hammer' };
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

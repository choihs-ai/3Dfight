// 기술 프레임 데이터 (프로토타입 MV 표 수치 그대로) — 60fps 기준 프레임
import { STYLE_DEF, styleOf } from './styles.js';
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
// ---- 캐릭터 전용 기술 (anim = 모델이 없을 때 쓰는 코드 자세) ----
mv('blaze_rush', { name: '화염 돌진베기', level: 'mid', startup: 18, active: 4, recovery: 26, dmg: 11, range: 1.5 + R, arc: 0.8, track: 0.05, lunge: 1.0, hitstun: 22, blockstun: 14, chip: 8, stam: 14, push: 4, bpush: 3.5, hitstop: 10, armor: [3, 16], anim: 'slash_h' }); // 불: 앞+가로
mv('mirror', { name: '물거울', level: 'mid', startup: 2, active: 20, recovery: 14, dmg: 0, stam: 8, lunge: 0, noHit: true, counter: true, anim: 'stab' }); // 물: 뒤+탭 (반격 자세)
mv('mirror_cut', { name: '물거울 반격', level: 'mid', startup: 4, active: 3, recovery: 18, dmg: 12, range: 1.6 + R, arc: 1.3, track: 0.3, lunge: 0.4, hitstun: 0, blockstun: 12, chip: 6, stam: 0, push: 3, hitstop: 12, knockdown: true, anim: 'combo3' });
mv('iai_flash', { name: '발도 일섬', level: 'mid', startup: 5, active: 4, recovery: 22, dmg: 13, range: 1.5 + R, arc: 0.7, track: 0.08, lunge: 1.6, hitstun: 28, blockstun: 12, chip: 6, stam: 10, push: 3, hitstop: 13, anim: 'stab' }); // 번개: 발도 자세 + 탭
mv('raiko', { name: '뇌격 찌르기', level: 'mid', startup: 9, active: 3, recovery: 18, dmg: 10, range: 1.6 + R, arc: 0.45, track: 0.06, lunge: 0.9, hitstun: 20, blockstun: 12, chip: 4, stam: 9, push: 3, hitstop: 8, anim: 'stab' }); // 번개: 앞+탭
mv('gale', { name: '선풍참', level: 'mid', startup: 7, active: 5, recovery: 16, dmg: 12, range: 1.5 + R, arc: 3.14, track: 0.3, lunge: 0.35, hitstun: 22, blockstun: 12, chip: 5, stam: 8, push: 3, hitstop: 9, anim: 'spin' }); // 바람: 구르기 중 베기
mv('helm', { name: '투구 깨기', level: 'mid', startup: 24, active: 4, recovery: 26, dmg: 22, range: 1.45 + R, arc: 0.7, track: 0.06, lunge: 0.6, hitstun: 30, blockstun: 20, chip: 32, stam: 22, push: 4, bpush: 3, hitstop: 15, limb: 'blade', knockdown: true, armor: [5, 24] }); // (망치)

// ---- 캐릭터별 기술표 (styles.js의 cmd가 입력 → 기술을 정함). 수치는 칼싸움 템포 적용 전 프레임 ----
// cm(id, 이름, 단, [발생, 지속, 후딜], 피해, 옵션, 설명) — 경직·가드경직·스태미나·히트스톱은 피해에 맞춰 자동
const cm = (id, name, level, [startup, active, recovery], dmg, o = {}, desc = '') => mv(id, {
  name, desc, level, startup, active, recovery, dmg, range: 1.35 + R, arc: 0.65, track: 0.06, lunge: 0.25,
  hitstun: Math.round(16 + dmg * 0.6), blockstun: Math.round(11 + dmg * 0.2), chip: Math.round(dmg * 0.45), stam: Math.round(4 + dmg * 0.5),
  push: 2.2, hitstop: Math.round(6 + dmg / 3), ...o,
});
// 🔥 불 아카네 — 양손 대검: 느리고 무겁고 짧은 거리, 슈퍼아머
cm('f_stab', '화염 찌르기', 'high', [8, 3, 13], 6, { range: 1.2 + R, chain: { h: 'f_combo2' }, anim: 'stab' }, '불 치고는 빠른 견제');
cm('f_combo2', '이연 화참', 'high', [9, 3, 16], 9, { chain: { h: 'f_combo3' }, anim: 'combo2' });
cm('f_combo3', '삼연 화륜참', 'mid', [15, 4, 22], 14, { range: 1.55 + R, arc: 0.9, knockdown: true, hitstop: 12, anim: 'combo3' }, '탭→가로→가로 마무리, 다운');
cm('f_slash', '불꽃 가로베기', 'high', [12, 4, 16], 11, { range: 1.4 + R, arc: 0.9, push: 3, anim: 'slash_h' }, '넓게 휩쓰는 가로베기');
cm('f_rise', '승염', 'mid', [15, 4, 22], 12, { range: 1.3 + R, lunge: 0.5, hitstun: 0, launch: 7.6, push: 0, anim: 'slash_up' }, '띄우기');
cm('f_down', '화염 내려찍기', 'mid', [17, 4, 22], 15, { range: 1.6 + R, arc: 0.5, armor: [4, 17], push: 3.5, anim: 'slash_down' }, '슈퍼아머 · 불씨 3개면 작열');
cm('f_low', '불길 쓸기', 'low', [13, 3, 18], 8, { range: 1.4 + R, anim: 'slash_low' }, '하단');
cm('f_sweep', '화륜 다리베기', 'low', [18, 5, 26], 12, { range: 1.75 + R, arc: 1.1, knockdown: true, push: 0, anim: 'sweep' }, '하단 다운');
cm('f_spin', '화륜 회전베기', 'mid', [18, 5, 22], 14, { range: 1.6 + R, arc: 1.45, track: 0.15, push: 3.5, anim: 'spin' }, '옆걸음 잡기');
cm('f_helm', '염열 대도', 'mid', [26, 5, 30], 22, { range: 1.5 + R, lunge: 0.7, armor: [5, 26], knockdown: true, chip: 34, hitstop: 16, anim: 'helm' }, '뛰어올라 내려찍기 · 슈퍼아머 · 가드 크게 깎음');
cm('f_erupt', '화염 해방', 'mid', [10, 6, 28], 4, { range: 1.25 + R, arc: 3.14, track: 0, lunge: 0, armor: [1, 16], knockdown: true, push: 5, bpush: 5, chip: 10, stam: 6, anim: 'spin' }, '기술 버튼 · 불씨를 터뜨려 주변을 날림 (불씨당 +5 피해, 3개면 가드 브레이크)');
// 🌊 물 미즈하 — 흐르는 연속기: 빠르고 약하지만 끝없이 이어짐, 반격
cm('w_stab', '물방울 찌르기', 'high', [6, 3, 11], 5, { range: 1.3 + R, chain: { h: 'w_flow2' }, anim: 'stab' }, '가장 빠른 견제');
cm('w_flow2', '유수 이연', 'high', [8, 3, 14], 6, { chain: { h: 'w_flow3' }, anim: 'combo2' });
cm('w_flow3', '유수 삼연', 'mid', [10, 4, 16], 7, { arc: 0.9, chain: { h: 'w_flow4' }, anim: 'combo2' });
cm('w_flow4', '유수 사연 · 폭포', 'mid', [14, 4, 22], 10, { range: 1.55 + R, knockdown: true, anim: 'combo3' }, '탭→가로×3, 끊기지 않는 4연격 · 다운');
cm('w_slash', '유수 베기', 'high', [9, 3, 13], 8, { arc: 0.8, track: 0.1, anim: 'slash_h' }, '빠르고 유도가 좋은 가로베기');
cm('w_rise', '물보라 올려베기', 'mid', [14, 4, 20], 10, { range: 1.3 + R, lunge: 0.5, hitstun: 0, launch: 7.2, push: 0, anim: 'slash_up' }, '띄우기');
cm('w_down', '폭포 내려베기', 'mid', [14, 4, 19], 12, { range: 1.55 + R, anim: 'slash_down' }, '중단');
cm('w_low', '잔물결', 'low', [10, 3, 14], 7, { range: 1.35 + R, anim: 'slash_low' }, '빠른 하단');
cm('w_thrust', '격류 찌르기', 'mid', [12, 3, 15], 10, { range: 1.9 + R, arc: 0.4, lunge: 0.7, push: 3.5, anim: 'thrust' }, '멀리 닿는 찌르기');
cm('w_sweep', '소용돌이 다리베기', 'low', [16, 5, 22], 9, { range: 1.7 + R, arc: 1.1, knockdown: true, push: 0, anim: 'sweep' }, '하단 다운');
cm('w_spin', '수류 회전', 'mid', [15, 5, 20], 10, { range: 1.55 + R, arc: 1.5, track: 0.2, push: 3, anim: 'spin' }, '옆걸음 잡기');
cm('w_tide', '해일 베기', 'mid', [20, 5, 22], 13, { range: 1.9 + R, lunge: 0.4, push: 6, bpush: 5, anim: 'slash_h' }, '멀리 밀어내는 큰 베기');
// ⚡ 번개 라이카 — 한손 발도술: 가장 빠르고 멀리서 파고듦, 맷집 약함
cm('t_stab', '섬광 찌르기', 'high', [5, 2, 11], 4, { range: 1.3 + R, chain: { h: 't_rai2' }, anim: 'stab' }, '가장 빠른 찌르기');
cm('t_rai2', '뇌광 이연', 'high', [7, 3, 13], 6, { chain: { h: 't_rai3' }, anim: 'combo2' });
cm('t_rai3', '뇌광 삼연 · 낙뢰', 'mid', [11, 3, 18], 10, { range: 1.5 + R, knockdown: true, anim: 'combo3' }, '탭→가로→가로, 마지막은 뛰어 내려찍기 · 다운');
cm('t_slash', '뇌광 베기', 'high', [8, 3, 13], 8, { range: 1.45 + R, anim: 'slash_h' }, '빠른 한손 베기');
cm('t_rise', '뇌운 올려베기', 'mid', [12, 4, 20], 9, { range: 1.3 + R, lunge: 0.5, hitstun: 0, launch: 7.4, push: 0, anim: 'slash_up' }, '띄우기');
cm('t_down', '낙뢰', 'mid', [13, 4, 18], 11, { range: 1.5 + R, anim: 'slash_down' }, '들었다 내려찍기');
cm('t_low', '지뢰 베기', 'low', [9, 3, 15], 6, { range: 1.4 + R, anim: 'slash_low' }, '빠른 하단');
cm('t_slide', '뇌전 미끄러지기', 'low', [14, 4, 22], 9, { range: 1.6 + R, lunge: 0.9, knockdown: true, push: 0, anim: 'sweep' }, '파고드는 하단 다운');
cm('t_leap', '뇌명 도약베기', 'mid', [16, 4, 20], 12, { range: 1.5 + R, lunge: 1.0, air: [4, 16], anim: 'slash_down' }, '뛰어서 하단을 피하며 베기');
cm('t_heaven', '천뢰', 'mid', [24, 5, 26], 18, { range: 1.5 + R, lunge: 1.4, air: [6, 24], knockdown: true, hitstop: 14, anim: 'helm' }, '높이 뛰어 내려찍기 · 하단 회피');
// 🍃 바람 하야테 — 회전·도약: 유도가 강하고 뛰어서 피함
cm('n_stab', '바람 찌르기', 'high', [6, 3, 11], 5, { range: 1.3 + R, chain: { h: 'n_gale2' }, anim: 'stab' }, '견제');
cm('n_gale2', '질풍 이연', 'high', [9, 3, 14], 7, { arc: 1.0, track: 0.15, chain: { h: 'n_gale3' }, anim: 'combo2' });
cm('n_gale3', '질풍 삼연 · 회오리', 'mid', [13, 5, 20], 11, { range: 1.5 + R, arc: 3.14, knockdown: true, anim: 'spin' }, '탭→가로→가로, 360° 회오리 · 다운');
cm('n_slash', '질풍 베기', 'high', [9, 3, 13], 9, { arc: 0.95, track: 0.2, anim: 'slash_h' }, '유도가 강한 가로베기');
cm('n_rise', '승천 회오리', 'mid', [15, 4, 22], 10, { range: 1.3 + R, lunge: 0.5, hitstun: 0, launch: 8.2, push: 0, anim: 'slash_up' }, '높이 띄우기');
cm('n_down', '낙엽 내려베기', 'mid', [14, 4, 17], 13, { range: 1.5 + R, lunge: 0.6, air: [3, 15], anim: 'slash_down' }, '뛰어 내려베기 · 하단 회피');
cm('n_low', '바람 하단', 'low', [11, 3, 16], 7, { range: 1.4 + R, anim: 'slash_low' }, '하단');
cm('n_dash', '돌풍 찌르기', 'mid', [12, 3, 18], 9, { range: 1.6 + R, arc: 0.5, lunge: 1.3, push: 3, anim: 'thrust' }, '멀리서 날아드는 찌르기');
cm('n_sweep', '회오리 다리베기', 'low', [17, 5, 22], 10, { range: 1.75 + R, arc: 1.3, knockdown: true, push: 0, anim: 'sweep' }, '하단 다운');
cm('n_spin', '선풍 회전', 'mid', [13, 5, 17], 12, { range: 1.6 + R, arc: 3.14, track: 0.3, push: 3, anim: 'spin' }, '360° · 옆걸음 잡기');
cm('n_sky', '하늘 가르기', 'mid', [22, 5, 24], 17, { range: 1.5 + R, lunge: 1.2, air: [5, 22], knockdown: true, hitstop: 14, anim: 'helm' }, '크게 뛰어 내려찍기 · 하단 회피');

// 칼싸움 템포: 주먹 기준 프레임을 칼에 맞게 늘림 (발생·후딜·경직을 같은 비율로 → 유불리 구조는 유지)
export const TEMPO = { startup: 1.35, active: 1.2, recovery: 1.35, stun: 1.35 };
for (const m of Object.values(MV)) {
  m.startup = Math.round(m.startup * TEMPO.startup);
  m.active = Math.round(m.active * TEMPO.active);
  m.recovery = Math.round(m.recovery * TEMPO.recovery);
  m.hitstun = Math.round(m.hitstun * TEMPO.stun);
  m.blockstun = Math.round(m.blockstun * TEMPO.stun);
  if (m.armor) m.armor = [Math.round(m.armor[0] * TEMPO.startup), Math.round(m.armor[1] * TEMPO.startup)];
  if (m.air) m.air = [Math.round(m.air[0] * TEMPO.startup), Math.round(m.air[1] * TEMPO.startup)];
  m.total = m.startup + m.active + m.recovery;
}

// 커맨드: 스틱 방향(n 중립 / f 앞 / b 뒤 / s 옆) + 긋기(t h u d l)
export const CMD = { t: 'stab', h: 'slash_h', u: 'slash_up', d: 'slash_down', l: 'slash_low', ft: 'thrust', bl: 'sweep', sh: 'spin', bd: 'helm' };
// 긋기 이름 (화면 표시용)
export const GESTURES = { t: '탭', h: '가로 긋기', u: '위로 긋기', d: '아래로 긋기', l: '아래 대각선 긋기' };
// 스타일별 커맨드 (전용 기술이 기본 기술을 대신하거나 추가됨)
export const resolveMove = (b, d, style) => { const c = styleOf(style).cmd; return c[d + b] || c[b] || CMD[d + b] || CMD[b]; };

// 스타일별 기술표: 기본 표에 배율·수정을 적용한 사본 (id는 같음 → 모션 연결은 그대로)
export const MVS = {};
for (const [sid, S] of Object.entries(STYLE_DEF)) {
  const T = {};
  for (const [id, base] of Object.entries(MV)) {
    const m = Object.assign({}, base, S.mods[id] || {});
    if (sid !== 'base') {
      if (!m.noHit) {
        const st0 = m.startup;
        m.startup = Math.max(3, Math.round(m.startup * S.startup));
        const k = m.startup / st0;
        if (m.armor) m.armor = [Math.round(m.armor[0] * k), Math.round(m.armor[1] * k)];
        if (m.air) m.air = [Math.round(m.air[0] * k), Math.round(m.air[1] * k)];
      }
      m.recovery = Math.max(4, Math.round(m.recovery * S.recovery));
      m.dmg = m.dmg * S.dmg; m.chip = m.chip * S.chip; m.track = m.track * S.track; m.arc = Math.min(3.14, m.arc + S.arc);
    }
    m.total = m.startup + m.active + m.recovery;
    T[id] = m;
  }
  MVS[sid] = T;
}
export const movesOf = (style) => MVS[style] || MVS.base;

// 스틱 → 방향 코드 (프로토타입 classify 그대로)
export function classify(x, y) {
  const m = Math.hypot(x, y);
  if (m < 0.45) return 'n';
  if (y > 0.5 && y >= Math.abs(x)) return 'f';
  if (y < -0.5 && -y >= Math.abs(x)) return 'b';
  if (Math.abs(x) > 0.5) return 's';
  return 'n';
}

// 원소별 검사 (오리지널 캐릭터) — 지금은 외형·이펙트만 다르고 기술표는 공통
// 색: 하오리(gi) · 바지 · 띠 · 피부 · 머리 · 포인트 · 손 · 팔토시 · 칼날/궤적
export const CHARACTERS = [
  {
    id: 'fire', element: '불', icon: '🔥', name: '아카네', style: '화염류',
    desc: '불꽃처럼 몰아치는 연속 베기',
    colors: { gi: '#a8261e', pants: '#2a1512', belt: '#f0b03a', skin: '#e3b089', hair: '#3a1410', accent: '#ff8a2a', glove: '#3a1d14', wrap: '#e9dcc4', dark: '#0a0a10', tsuka: '#1b1210', tsuba: '#c9962e', blade: '#e9e2da' },
    trail: [[1, 0.35, 0.08], [1, 0.85, 0.35]], rim: [0.75, 0.3, 0.1], glow: [0.35, 0.09, 0.0],
    ougi: { name: '홍련륜', hanja: '紅蓮輪', shape: 'fire' },
  },
  {
    id: 'water', element: '물', icon: '🌊', name: '미즈하', style: '수류',
    desc: '흐르는 물처럼 끊기지 않는 검',
    colors: { gi: '#1f4c8c', pants: '#141c2c', belt: '#d8e6f2', skin: '#e6b892', hair: '#141822', accent: '#4fb6ff', glove: '#152238', wrap: '#d9e2ea', dark: '#0a0a10', tsuka: '#101826', tsuba: '#7d8ea3', blade: '#dfe9f2' },
    trail: [[0.1, 0.4, 1], [0.7, 0.95, 1]], rim: [0.2, 0.45, 0.8], glow: [0.04, 0.16, 0.35],
    ougi: { name: '청룡류', hanja: '靑龍流', shape: 'water' },
  },
  {
    id: 'thunder', element: '번개', icon: '⚡', name: '라이카', style: '뇌명류',
    desc: '번개처럼 한순간에 꿰뚫는 일섬',
    colors: { gi: '#d29a17', pants: '#2b2414', belt: '#f5f0dc', skin: '#efc59a', hair: '#f2d24a', accent: '#fff07a', glove: '#3a3016', wrap: '#f0e8cc', dark: '#0a0a10', tsuka: '#2a2210', tsuba: '#e7d36a', blade: '#f3efe0' },
    trail: [[0.25, 0.65, 1], [0.8, 0.95, 1]], rim: [0.8, 0.65, 0.15], glow: [0.15, 0.3, 0.45],
    ougi: { name: '섬광뇌절', hanja: '閃光雷絶', shape: 'thunder' },
  },
  {
    id: 'wind', element: '바람', icon: '🍃', name: '하야테', style: '질풍류',
    desc: '바람을 타고 휘몰아치는 회전 베기',
    colors: { gi: '#2f7a46', pants: '#15241a', belt: '#e8eedc', skin: '#deae86', hair: '#d8e6dc', accent: '#7cf0a8', glove: '#16301f', wrap: '#e2eadc', dark: '#0a0a10', tsuka: '#0f2016', tsuba: '#8fb59a', blade: '#e4efe8' },
    trail: [[0.15, 0.85, 0.45], [0.8, 1, 0.9]], rim: [0.2, 0.7, 0.4], glow: [0.04, 0.3, 0.12],
    ougi: { name: '선풍천열', hanja: '旋風天裂', shape: 'wind' },
  },
];
export const CHAR_BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));
export const hexOf = (v) => '#' + v.map((x) => Math.round(Math.min(1, x) * 255).toString(16).padStart(2, '0')).join('');

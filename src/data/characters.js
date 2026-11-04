// 원소별 검사 (오리지널 캐릭터) — 외형·이펙트 + 전투 스타일(기술표·능력치·고유 시스템: src/core/styles.js)
// combat: 화면 표시용 설명 (type 유형, diff 난이도 1~5, stats 공격·맷집·속도·기동 1~5, traits 고유 시스템)
// 색: 하오리(gi) · 바지 · 띠 · 피부 · 머리 · 포인트 · 손 · 팔토시 · 칼날/궤적
export const CHARACTERS = [
  {
    id: 'fire', element: '불', icon: '🔥', name: '아카네', style: '화염류',
    desc: '묵직한 한 방과 슈퍼아머로 밀어붙인다',
    combat: {
      type: '파워형', diff: 1, stats: [5, 5, 2, 2],
      traits: [
        ['열기', '맞히거나 막히게 할 때마다 불씨 +1 (최대 3). 3개면 다음 <b>↓ 내려베기 · 뒤+↓ 투구 깨기 · 앞+가로 화염 돌진</b>이 <b>작열</b> — 피해 1.4배, 막아도 가드 브레이크'],
        ['불굴', '↓ 내려베기에 <b>슈퍼아머</b> — 찌르기 정도로는 안 끊김'],
        ['앞 + 가로', '<b>화염 돌진베기</b> — 슈퍼아머로 밀고 들어가는 돌진'],
        ['약점', '발이 느리고 구르기가 무거움, 흐름 연계 최대 4'],
      ],
    },
    colors: { gi: '#a8261e', pants: '#2a1512', belt: '#f0b03a', skin: '#e3b089', hair: '#3a1410', accent: '#ff8a2a', glove: '#3a1d14', wrap: '#e9dcc4', dark: '#0a0a10', tsuka: '#1b1210', tsuba: '#c9962e', blade: '#e9e2da' },
    trail: [[1, 0.35, 0.08], [1, 0.85, 0.35]], rim: [0.75, 0.3, 0.1], glow: [0.35, 0.09, 0.0],
    ougi: { name: '홍련륜', hanja: '紅蓮輪', shape: 'fire' },
    vrm: { model: 'girl', hair: [0.78, 0.13, 0.08], eyes: [1, 0.55, 0.12] },
  },
  {
    id: 'water', element: '물', icon: '🌊', name: '미즈하', style: '수류',
    desc: '받아넘기고, 끊기지 않고 흐른다',
    combat: {
      type: '반격형', diff: 3, stats: [2, 3, 3, 3],
      traits: [
        ['물거울', '<b>뒤 + 탭</b> = 반격 자세. 상단·중단 공격을 흘리고 <b>자동 반격(다운)</b>. 하단에는 뚫려서 카운터'],
        ['흐름', '흐름 연계 <b>최대 7</b>, 이어질 때 준비 동작 40% 생략, 연계 피해 보정이 5타째부터'],
        ['받아넘기기', '패링 입력 여유 1.5배, 패링당한 상대가 더 오래 휘청, 카운터 피해 1.4배'],
        ['약점', '한 방 피해가 약함'],
      ],
    },
    colors: { gi: '#1f4c8c', pants: '#141c2c', belt: '#d8e6f2', skin: '#e6b892', hair: '#141822', accent: '#4fb6ff', glove: '#152238', wrap: '#d9e2ea', dark: '#0a0a10', tsuka: '#101826', tsuba: '#7d8ea3', blade: '#dfe9f2' },
    trail: [[0.1, 0.4, 1], [0.7, 0.95, 1]], rim: [0.2, 0.45, 0.8], glow: [0.04, 0.16, 0.35],
    ougi: { name: '청룡류', hanja: '靑龍流', shape: 'water' },
    vrm: { model: 'girl', hair: [0.12, 0.17, 0.36], eyes: [0.25, 0.55, 1] },
  },
  {
    id: 'thunder', element: '번개', icon: '⚡', name: '라이카', style: '뇌명류',
    desc: '가장 빠른 칼, 타이밍이 곧 위력',
    combat: {
      type: '속도·테크닉형', diff: 4, stats: [4, 1, 5, 4],
      traits: [
        ['발도', '스틱을 놓고 <b>0.5초 가만히</b> → 칼을 넣음. 다음 <b>탭 = 발도 일섬</b>(먼 거리 순간 베기), 다른 베기도 빨라지고 1.2배. 움직이거나 가드하면 풀림'],
        ['뇌속', '베기가 <b>맞은 순간(화면이 멈춘 동안)</b> 다음을 그으면 거의 즉발 + 1.3배 + 연계 보정 없음'],
        ['앞 + 탭', '<b>뇌격 찌르기</b> — 멀리서 파고드는 찌르기'],
        ['약점', '맷집이 가장 약함'],
      ],
    },
    colors: { gi: '#d29a17', pants: '#2b2414', belt: '#f5f0dc', skin: '#efc59a', hair: '#f2d24a', accent: '#fff07a', glove: '#3a3016', wrap: '#f0e8cc', dark: '#0a0a10', tsuka: '#2a2210', tsuba: '#e7d36a', blade: '#f3efe0' },
    trail: [[0.25, 0.65, 1], [0.8, 0.95, 1]], rim: [0.8, 0.65, 0.15], glow: [0.15, 0.3, 0.45],
    ougi: { name: '섬광뇌절', hanja: '閃光雷絶', shape: 'thunder' },
    vrm: { model: 'boy', hair: [1, 0.84, 0.22], eyes: [1, 0.72, 0.2] },
  },
  {
    id: 'wind', element: '바람', icon: '🍃', name: '하야테', style: '질풍류',
    desc: '피하면서 벤다, 잡히지 않는 바람',
    combat: {
      type: '기동형', diff: 2, stats: [3, 3, 4, 5],
      traits: [
        ['선풍', '<b>구르는 도중 아무 베기</b> = 선풍참 (360° 회전베기)'],
        ['바람 걸음', '베기가 닿은 뒤(맞든 막히든) <b>회피</b>로 후딜을 끊고 빠짐'],
        ['질풍', '구르기가 싸고 무적이 김, 모든 베기의 유도가 강함'],
        ['약점', '큰 한 방이 없음'],
      ],
    },
    colors: { gi: '#2f7a46', pants: '#15241a', belt: '#e8eedc', skin: '#deae86', hair: '#d8e6dc', accent: '#7cf0a8', glove: '#16301f', wrap: '#e2eadc', dark: '#0a0a10', tsuka: '#0f2016', tsuba: '#8fb59a', blade: '#e4efe8' },
    trail: [[0.15, 0.85, 0.45], [0.8, 1, 0.9]], rim: [0.2, 0.7, 0.4], glow: [0.04, 0.3, 0.12],
    ougi: { name: '선풍천열', hanja: '旋風天裂', shape: 'wind' },
    vrm: { model: 'boy', hair: [0.9, 0.93, 0.9], eyes: [0.35, 0.9, 0.5] },
  },
];
export const CHAR_BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));
export const hexOf = (v) => '#' + v.map((x) => Math.round(Math.min(1, x) * 255).toString(16).padStart(2, '0')).join('');

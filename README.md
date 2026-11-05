# 락온 파이터 (LOCK-ON FIGHTER)

3인칭 락온 시점(어깨 너머 카메라) + 철권식 1:1 대전격투. 모바일(아이폰 사파리) 터치 조작 우선.

## 실행

```bash
npm install
npm run dev      # 개발 서버 (같은 와이파이의 폰에서 http://<PC IP>:5173 으로 접속 가능)
npm test         # 전투 로직 자동 테스트 (브라우저 없이 Node에서)
npm run build    # dist/ 생성
npm run e2e      # 빌드본을 실제 브라우저(Playwright)로 띄워 CPU끼리 자동 대전 + 스크린샷
```

`main`에 push하면 GitHub Actions가 테스트 → 빌드 → GitHub Pages 배포를 자동으로 합니다.

## 폴더 구조

| 폴더 | 역할 | 화면 의존 |
|---|---|---|
| `src/core/` | **전투 규칙** — 프레임 데이터(`moves.js`), 파이터 상태머신(`fighter.js`), 판정(`combat.js`), 라운드/3판2선승(`sim.js`), CPU AI(`ai.js`) | 없음 (Node에서 실행) |
| `src/anim/` | 기술 ↔ 모션 클립 연결(`clipMap.js`), 모델을 못 불러올 때 쓰는 코드 자세 | 없음 |
| `src/data/` | 원소 캐릭터 데이터 | 없음 |
| `src/render/` | Three.js 화면 — 경기장, 캐릭터, 파티클, **락온 카메라**(`camera.js`) | three |
| `src/input/` | 터치 스틱·버튼, 키보드 → 프레임 입력 | DOM |
| `src/ui/` | HUD, 메뉴, CSS | DOM |
| `src/audio/` | 효과음 | WebAudio |
| `src/game.js` | 모드 진행 + sim 이벤트 → 화면/소리/UI 연결 | |
| `test/` | 전투 로직 테스트 | |

### 로직과 화면의 분리

- `Sim.step([입력1, 입력2])` 한 번 = 60fps 기준 1프레임. 같은 시드 + 같은 입력이면 항상 같은 결과(결정적) — 리플레이/온라인 대전의 기반.
- 입력 형식(FrameInput): `{ mx, my, guard, gp, roll, btns:[{b:'t'|'h'|'u'|'d'|'l', dir:'n'|'f'|'b'|'s', a}] }` (b = 긋기 종류)
- 로직은 화면을 모르고 `hit / block / parry / armor / land / ko …` 이벤트만 냅니다. 화면·소리·HUD는 이벤트를 받아서 연출합니다.

### 테스트 훅 (브라우저 콘솔)

- `?auto=easy|normal|hard` — 내 캐릭터도 CPU가 조종 (CPU끼리 자동 대전)
- `__step(n)` n프레임 즉시 진행, `__G`(모드·라운드·승수 등), `__F`(두 파이터), `__MV`(기술표), `__AIL`(AI 난이도)

## 조작 (원소 검객전)

- 왼쪽 스틱: 위 = 상대 쪽, 아래 = 물러나기, 좌우 = 상대 주위 원운동, **빠르게 튕기기 = 구르기**
- 오른쪽 **베기 패드**: 긋는 방향대로 베기 (가로 / 위로 = 띄우기 / 아래로 / 아래 대각선 = 하단), 탭 = 찌르기
- 가드(톡 = 패링, +아래 = 앉아 가드) · 회피 버튼
- PC: WASD 이동 · U 찌르기 · I 가로 · O 위로 · K 아래로 · J 대각선 · L 가드 · Space 회피 · Esc 일시정지

## 캐릭터 (원소 4종, 오리지널) — 같은 조작, 다른 전투 스타일

`src/data/characters.js`(외형·설명) + `src/core/styles.js`(능력치·고유 시스템) + `src/core/moves.js`(스타일별 기술표 `movesOf(style)`)

캐릭터마다 **기술표 전체가 다름** (같은 긋기 입력 → 캐릭터별 다른 기술·프레임·사거리·모션) + **기술 버튼**(캐릭터 전용) + 이동·가드 자세도 다름.

| 캐릭터 | 유형 · 난이도 · 거리 | 기술 버튼 | 고유 시스템 · 대표 기술 |
|---|---|---|---|
| 🔥 아카네 (화염류) | 파워형 ★ · 근거리 | **화염 해방** (불씨를 터뜨려 주변을 날림) | **열기** 불씨 3개 → 작열(1.4배·가드 브레이크) · 슈퍼아머 내려찍기·돌진·염열 대도 · 양손 대검 동작 |
| 🌊 미즈하 (수류) | 반격형 ★★★ · 중거리 | **물거울** (상·중단 흘리고 자동 반격) | 탭→가로×3 **4연격**, 연계 최대 7 · 격류 찌르기·해일 베기 · 패링 여유↑ |
| ⚡ 라이카 (뇌명류) | 속도·테크닉형 ★★★★ · 원거리 돌진 | **발도** (탭 = 발도 일섬) | **뇌속** 맞은 순간 다음 긋기 → 즉발 1.3배 · 한손 동작·이동, 도약베기·천뢰(하단 회피) · 맷집 최약 |
| 🍃 하야테 (질풍류) | 기동형 ★★ · 돌아들기 | **질풍 걸음** (상대 옆으로 도는 무적 이동) | **선풍** 구르며 베기 360° · **바람 걸음** 후딜을 구르기로 끊기 · 낙엽 내려베기·하늘 가르기(하단 회피) |

- 기술표 화면: 캐릭터별 입력 → 기술 이름·단·설명 자동 생성 (`src/main.js` `moveTable`)
- 라운드 1·2 시작 때 내 캐릭터 요령 안내, 기술 버튼은 쓸 수 있을 때 빛남 (PC: E)
- 도약 기술(`air` 프레임)은 그동안 하단을 피함 (`src/core/combat.js`)
- 모션: Great Sword / Sword and Shield 팩에서 46개 추가 (한손 걷기·달리기·옆걸음·가드, 도약베기, 높이 뛰어 내려찍기, 땅 내려찍기, 발도 베기 등)
- 캐릭터 고유 상태(불씨·발도)는 HUD 기 게이지 아래에 표시, 캐릭터 선택 화면에 유형·난이도·능력치·특징
- 상성 점검: `test/styles.test.js` (CPU끼리 전 조합 승률이 25~75% 안), 같은 시드면 같은 결과 + 저장/복원 일치(온라인)
- CPU도 스타일대로 싸움 (물: 물거울로 받기, 번개: 거리 두고 발도·뇌속 연계, 불: 작열 노림, 바람: 구르며 선풍)

## 캐릭터 모션 (Mixamo)

- 원본: `assets-src/Great Sword Pack.zip` (Mixamo Great Sword Pack, X Bot 기준, 60fps) + `assets-src/extra/` (찌르기·구르기·칼 넣기 등 단품)
- 변환: Great Sword Pack zip을 `assets-src/mixamo/`, Pro Sword and Shield Pack zip을 `assets-src/shield/`에 풀고
  `node tools/convert-mixamo.mjs assets-src/mixamo assets-src/extra assets-src/shield`
  - 방패 팩 모션은 방패 든 왼팔을 '칼집 쥔 자세'로 바꿔서 한손 검술로 사용 (`leftArm` 옵션) → `public/models/swordsman.glb` (뼈대 + 클립, 약 1.3MB)
  - 어떤 FBX를 어떤 클립으로 쓸지: `tools/mixamo-clips.json`
  - 손가락 고정, 루트 이동 제거(이동은 게임 로직이 담당), 키프레임 줄이기
- 기술 ↔ 클립 타이밍(시작/칼이 닿는 순간/끝): `src/anim/clipMap.js`
- 몸(하오리·하카마·머리·카타나)은 `src/render/swordsman.js`에서 코드로 만들어 뼈에 붙임 (툰 셰이딩 + 외곽선)
- 모델을 못 불러오면 박스 검객(코드 자세)으로 자동 대체

## 애니풍 캐릭터 (VRM)

- 모델: `public/models/vrm/girl.vrm`(아카네·미즈하), `boy.vrm`(라이카·하야테) — 원본·라이선스 문서는 `assets-src/vrm/`
  - girl: **VRM1_Constraint_Twist_Sample** © 2022 pixiv Inc. (VRM Public License 1.0)
  - boy: **Seed-san** — *Seed-san model by VirtualCast, Inc.* (VRM Public License 1.0, 크레딧 표기 필수 → 타이틀 화면에 표기)
  - 두 라이선스 모두 개조·재배포·폭력 표현 허용. 용량 줄이기: `python3 tools/shrink-vrm.py`
- `src/render/vrmRig.js`: VRM 로드 → Mixamo 클립을 VRM 정규화 뼈로 리타깃 → 원소별 머리색·눈색·표정(공격=화남, 피격=놀람, 승리=웃음)·시선
  - 모델 안 쓰는 부품 제거, 대원복은 검정으로 재채색, 그늘진 피부 톤 보정
- `src/render/garments.js`: **몸에 맞춰 자동으로 재단하는 의상** (몸 표면을 높이·각도별로 재서 감쌈 → 모델이 바뀌어도 맞음)
  - 하오리: 목깃 → 어깨 → 밑단, 앞이 트인 두께 있는 천. 원소별 전통 문양 텍스처(불꽃 · 청해파 · 번개 · 삼잎) + 앞섶 깃 띠
  - 넓은 소매(소매 주머니가 늦게 따라오며 흔들림), 부풀었다 정강이에서 모이는 하카마 + 흰 각반 + 허리띠
  - 하오리 아랫자락 8조각 × 2마디: 중력·관성·다리 충돌로 흔들림 (골반 기울기와 상관없이 아래로 늘어짐)
  - 전부 정규화 뼈에 스키닝(가슴/허리/엉덩이/어깨/팔/다리 사이 부드럽게), 히트스톱 동안은 천·머리카락도 멈춤
- VRM을 받는 동안·실패하면 Mixamo 검객 → 박스 검객 순으로 대체

## 오의

- 기(氣) 게이지: 때리면 피해×0.9, 맞으면 ×1.1, 막으면 +4, 패링 +12 (`src/core/combat.js`)
- 꽉 차면 오의 버튼 → 무적 돌진(`OUGI_DASH`) → 닿으면 시네마틱: 시간이 멈추고 원소 문양을 그림 → 점수(0~100)에 비례한 피해 (`OUGI` in `src/core/sim.js`)
- 문양 본보기·채점: `src/input/shapes.js` (원 / 물결 / 번개 / 소용돌이, 방향·좌우·시작점 무관)
- 화면: `src/ui/ougi.js` (컷인 + 그리기 캔버스)

## 온라인 대전

- 방 만들기 → 4자리 번호 → 친구가 참가. PeerJS(WebRTC P2P, 공개 신호 서버 0.peerjs.com) — `src/net/transport.js`
- 락스텝 동기화 `src/net/lockstep.js`: 입력 지연 5프레임, 두 기기가 같은 입력으로 같은 sim을 진행
  - 기기마다 수학 함수 결과가 미세하게 다를 수 있어 방장이 3초마다 상태를 보내고, 손님은 지문이 다르면 방장 상태로 맞춘 뒤 이후 프레임을 다시 계산
- 테스트: `test/net.test.js` (지연·뒤섞임 가짜 네트워크), 브라우저 `?net=local` (같은 브라우저 탭끼리 BroadcastChannel)

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
| `src/anim/` | 캐릭터 자세·애니메이션 (지금은 코드로 만든 검술 자세, Mixamo 모션으로 교체 예정) | 없음 |
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

## 캐릭터 (원소 4종, 오리지널)

`src/data/characters.js` — 불 아카네(화염류) · 물 미즈하(수류) · 번개 라이카(뇌명류) · 바람 하야테(질풍류).
지금은 외형·칼 궤적·타격 이펙트가 다르고 기술표는 공통입니다.

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

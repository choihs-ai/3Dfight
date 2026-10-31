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

// 브라우저 E2E: 빌드된 게임을 띄워 CPU끼리 자동 대전(__step 훅) + 스크린샷
// 사용: npm run build && npm run e2e   (dist/ 를 정적 서버로 띄움)
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';

// 프로젝트에 playwright가 없으면 전역 설치본 사용
const { chromium } = await import('playwright').catch(() => createRequire(import.meta.url)('playwright'));
const root = new URL('../dist/', import.meta.url).pathname;
const outDir = process.env.SHOT_DIR || new URL('../test-results/', import.meta.url).pathname;
await mkdir(outDir, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.glb': 'model/gltf-binary', '.png': 'image/png', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.json': 'application/json' };
const server = createServer(async (req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  try { const b = await readFile(join(root, p === '/' ? 'index.html' : p)); res.writeHead(200, { 'content-type': MIME[extname(p)] || 'text/html' }); res.end(b); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const url = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
let fail = 0;
const check = (ok, msg) => { console.log((ok ? '✔ ' : '✘ ') + msg); if (!ok) fail++; };
async function open(q, vp) {
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(url + q);
  await page.waitForTimeout(1500);
  return { page, errors };
}
for (const [name, vp] of [['landscape', { width: 844, height: 390 }], ['portrait', { width: 390, height: 844 }]]) {
  const { page, errors } = await open('', vp);
  await page.screenshot({ path: join(outDir, `title-${name}.png`) });
  await page.click('[data-d="practice"]'); // 연습 인형(가만히 있음)으로 조작 확인
  await page.click('#startBtn');
  await page.screenshot({ path: join(outDir, `charsel-${name}.png`) });
  await page.click('#cards .card:nth-child(3)'); // 번개 라이카
  const info = await page.evaluate(() => document.querySelector('#charInfo').textContent);
  check(info.includes('발도') && info.includes('뇌속'), `${name}: 캐릭터 선택에 고유 시스템 설명`);
  await page.click('#fightBtn');
  await page.evaluate(() => { window.__G.freeze = true; window.__step(90); });
  // 베기 패드 조작: 탭 = 찌르기(번개는 가만히 서 있으면 발도 → 발도 일섬), 아래로 긋기 = 내려베기
  const pad = await page.locator('#slashPad').boundingBox();
  const cx = pad.x + pad.width / 2, cy = pad.y + pad.height / 2;
  const moveAfter = async (fn) => { await fn(); await page.evaluate(() => window.__step(2)); const m = await page.evaluate(() => window.__F[0].move?.id); await page.evaluate(() => window.__step(60)); return m; };
  const tapMv = await moveAfter(async () => { await page.mouse.move(cx, cy); await page.mouse.down(); await page.mouse.up(); });
  check(tapMv === 'iai_flash', `${name}: 발도 자세에서 패드 탭 → 발도 일섬 (${tapMv})`);
  const downMv = await moveAfter(async () => { await page.mouse.move(cx, cy - 30); await page.mouse.down(); await page.mouse.move(cx, cy + 30, { steps: 4 }); await page.mouse.up(); });
  check(downMv === 't_down', `${name}: 아래로 긋기 → 번개 낙뢰 (${downMv})`);
  const hMv = await moveAfter(async () => { await page.mouse.move(cx + 35, cy); await page.mouse.down(); await page.mouse.move(cx - 35, cy, { steps: 4 }); await page.mouse.up(); });
  check(hMv === 't_slash', `${name}: 가로 긋기 → 번개 뇌광 베기 (${hMv})`);
  await page.evaluate(() => { window.__G.freeze = false; window.__step(120); });
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outDir, `fight-${name}.png`) });
  check(errors.length === 0, `${name}: 콘솔 에러 없음 ${errors.join(' | ')}`);
  await page.close();
}
// CPU vs CPU 자동 대전 (?auto)
for (const lv of ['easy', 'normal', 'hard']) {
  const { page, errors } = await open('?auto=' + lv, { width: 844, height: 390 });
  const r = await page.evaluate(() => {
    let n = 0, hits = 0; let lastHp = [100, 100];
    while (window.__G.mode !== 'result' && n < 60 * 60 * 8) {
      window.__step(60); n += 60;
      const hp = window.__F.map((f) => f.hp);
      if (hp[0] < lastHp[0] || hp[1] < lastHp[1]) hits++;
      lastHp = hp;
      if (hp.some((v) => Number.isNaN(v))) return { nan: true };
    }
    return { mode: window.__G.mode, wins: window.__G.wins.slice(), frames: n, hits };
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(outDir, `result-${lv}.png`) });
  check(r.mode === 'result' && Math.max(...r.wins) === 2, `auto=${lv}: 3판 2선승 종료 ${JSON.stringify(r)}`);
  check(errors.length === 0, `auto=${lv}: 콘솔 에러 없음 ${errors.join(' | ')}`);
  await page.close();
}
// 오의: 게이지 채우고 → 돌진 → 원 그리기 → 피해
{
  const { page, errors } = await open('', { width: 844, height: 390 });
  await page.waitForFunction(() => window.__game.view.modelState !== 'loading');
  await page.click('[data-d="practice"]'); await page.click('#startBtn'); await page.click('#fightBtn');
  await page.evaluate(() => { window.__G.freeze = true; window.__step(90); const s = window.__G.sim; s.f[0].reset(0, -0.8, 0); s.f[1].reset(0, 0.8, Math.PI); s.f[0].ki = 100; window.__step(2); });
  check(await page.waitForSelector('#ougiBtn:not(.hide)', { state: 'visible', timeout: 25000 }).then(() => true, () => false), '오의 버튼 표시');
  await page.click('#ougiBtn', { force: true }); // 깜빡이는 애니메이션이 있어서 강제 클릭
  await page.evaluate(() => window.__step(40));
  const cine = await page.evaluate(() => !!window.__G.sim.cine && !document.querySelector('#ougiLayer').classList.contains('hide'));
  check(cine, '오의 시네마틱 + 그리기 화면');
  await page.screenshot({ path: join(outDir, 'ougi-draw.png') });
  // 화면 가운데에 원 그리기
  const cx = 422, cy = 205, r = 110;
  await page.mouse.move(cx + r, cy); await page.mouse.down();
  for (let i = 1; i <= 40; i++) { const a = (i / 40) * Math.PI * 2; await page.mouse.move(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.95); }
  await page.mouse.up();
  const grade = await page.textContent('#drawGrade');
  check(/\d/.test(grade), `문양 점수 표시: ${grade}`);
  await page.evaluate(() => window.__step(90));
  await page.waitForTimeout(200);
  await page.screenshot({ path: join(outDir, 'ougi-hit.png') });
  const hp = await page.evaluate(() => window.__F[1].hp);
  check(hp < 85, `오의 피해 (상대 체력 ${hp.toFixed(1)})`);
  check(errors.length === 0, `오의: 콘솔 에러 없음 ${errors.join(' | ')}`);
  await page.close();
}
// 온라인 (같은 브라우저 탭 두 개, ?net=local): 방 만들기/참가 → 선택 → 대전 → 두 화면 상태 동일
{
  const ctx = await browser.newContext({ viewport: { width: 640, height: 360 } });
  const A = await ctx.newPage(), B = await ctx.newPage();
  const errs = [];
  for (const p of [A, B]) p.on('pageerror', (e) => errs.push(String(e)));
  for (const p of [A, B]) { await p.goto(url + '?net=local'); await p.waitForFunction(() => window.__game); }
  await A.click('#onlineBtn'); await A.click('#olHost');
  await A.waitForSelector('#olWait:not(.hide)');
  const code = (await A.textContent('#olRoom')).trim();
  await B.click('#onlineBtn'); await B.fill('#olCode', code); await B.click('#olJoin');
  await A.waitForSelector('#charSel:not(.hide)'); await B.waitForSelector('#charSel:not(.hide)');
  await A.click('#cards .card:nth-child(1)'); await B.click('#cards .card:nth-child(4)');
  await A.click('#fightBtn'); await B.click('#fightBtn');
  await A.waitForFunction(() => window.__G.mode === 'online'); await B.waitForFunction(() => window.__G.mode === 'online');
  check(true, `온라인 연결 + 대전 시작 (방 ${code})`);
  // 몇 초 동안 서로 공격
  for (let i = 0; i < 12; i++) { await A.keyboard.press(['u', 'i', 'k', 'y'][i % 4]); await B.keyboard.press(['k', 'u', 'j', 'i'][i % 4]); await A.keyboard.down('w'); await A.waitForTimeout(250); await A.keyboard.up('w'); }
  // 느린 환경에서도 비교할 프레임이 충분히 쌓일 때까지 기다림 (최대 40초)
  for (let i = 0; i < 80; i++) { const f = Math.min(await A.evaluate(() => window.__G.frame), await B.evaluate(() => window.__G.frame)); if (f >= 260) break; await A.waitForTimeout(500); }
  const ha = await A.evaluate(() => ({ log: window.__game.hashLog || {}, f: window.__G.frame, me: window.__game.me })), hb = await B.evaluate(() => ({ log: window.__game.hashLog || {}, f: window.__G.frame, me: window.__game.me }));
  const common = Object.keys(ha.log).filter((k) => k in hb.log);
  const same = common.filter((k) => ha.log[k] === hb.log[k]).length;
  check(common.length >= 3 && same === common.length, `두 기기 상태 일치 ${same}/${common.length} (프레임 ${ha.f} / ${hb.f}, 나: ${ha.me} / ${hb.me})`);
  await A.screenshot({ path: join(outDir, 'online-A.png') }); await B.screenshot({ path: join(outDir, 'online-B.png') });
  check(errs.length === 0, `온라인: 에러 없음 ${errs.join(' | ')}`);
  await ctx.close();
}
await browser.close();
server.close();
process.exit(fail ? 1 : 0);

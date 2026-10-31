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
  await page.click('#startBtn');
  await page.evaluate(() => window.__step(200));
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
await browser.close();
server.close();
process.exit(fail ? 1 : 0);

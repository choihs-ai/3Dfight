// Mixamo FBX 모션 → public/models/swordsman.glb (뼈대 + 애니메이션 클립)
// 사용: node tools/convert-mixamo.mjs <FBX 폴더> [추가 폴더 ...]  (같은 이름이면 앞 폴더 우선)
//   - 클립 목록: tools/mixamo-clips.json  (게임 클립 이름 → FBX 파일 이름)
//   - 브라우저(Playwright)에서 three의 FBXLoader/GLTFExporter로 변환
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const { chromium } = await import('playwright').catch(() => createRequire(import.meta.url)('playwright'));
const FBX_DIRS = (process.argv.length > 2 ? process.argv.slice(2) : ['assets-src/mixamo', 'assets-src/extra']).map((d) => resolve(d));
const ROOT = resolve(new URL('..', import.meta.url).pathname);
const OUT = join(ROOT, 'public/models/swordsman.glb');
const spec = JSON.parse(await readFile(join(ROOT, 'tools/mixamo-clips.json'), 'utf8'));
const map = [['/three/', [join(ROOT, 'node_modules/three/')]], ['/fbx/', FBX_DIRS], ['/tools/', [join(ROOT, 'tools/')]]];
const srv = createServer(async (req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  for (const [pre, dirs] of map) if (p.startsWith(pre)) {
    for (const dir of dirs) {
      try { const b = await readFile(join(dir, p.slice(pre.length))); res.writeHead(200, { 'content-type': extname(p) === '.js' ? 'text/javascript' : extname(p) === '.html' ? 'text/html' : 'application/octet-stream' }); return res.end(b); } catch { /* 다음 폴더 */ }
    }
  }
  res.writeHead(404); res.end();
}).listen(0);
const browser = await chromium.launch();
const page = await browser.newPage();
page.on('pageerror', (e) => console.error(e));
await page.goto(`http://127.0.0.1:${srv.address().port}/tools/convert.html`);
await page.waitForFunction(() => window.ready);
const { b64, report } = await page.evaluate((spec) => window.convert(spec), spec);
await writeFile(OUT, Buffer.from(b64, 'base64'));
console.log(report.join('\n'));
console.log(`→ ${OUT} (${(Buffer.from(b64, 'base64').length / 1024).toFixed(0)} KB)`);
await browser.close(); srv.close();

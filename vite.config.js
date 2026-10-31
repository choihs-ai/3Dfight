import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

// GitHub Pages 하위 경로(/저장소이름/)에서도 동작하도록 상대 경로 빌드
export default defineConfig({
  base: './',
  define: { __APP_VERSION__: JSON.stringify(pkg.version + (process.env.GITHUB_SHA ? '-' + process.env.GITHUB_SHA.slice(0, 7) : '')) },
  build: { target: 'es2019', chunkSizeWarningLimit: 900 },
  server: { host: true },
});

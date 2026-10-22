// Rebuilds downloads/ALIN-Portfolio.pdf (中文) and downloads/ALIN-Portfolio-EN.pdf from print.html.
// Usage: node build-pdf.mjs   (needs Google Chrome; set CHROME=/path/to/chrome to override)
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const chrome = process.env.CHROME || ['google-chrome', '/usr/bin/google-chrome', 'chromium'].find(bin => {
  try { execFileSync('which', [bin], {stdio: 'ignore'}); return true; } catch { return existsSync(bin); }
});
if (!chrome) throw new Error('Chrome not found');
mkdirSync(join(root, 'downloads'), {recursive: true});
const port = 4391 + Math.floor(Math.random() * 400);
const server = spawn(process.execPath, ['preview.mjs', String(port)], {cwd: root, stdio: ['ignore', 'pipe', 'inherit']});
await new Promise((resolve, reject) => {
  server.stdout.once('data', resolve);
  server.once('exit', code => reject(new Error(`preview exited ${code}`)));
});

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function waitReady(lang) {
  const url = `http://127.0.0.1:${port}/print.html?lang=${lang}`;
  const deadline = Date.now() + 120000;
  let last = '';
  while (Date.now() < deadline) {
    let html = '';
    try {
      html = execFileSync(chrome, [
        '--headless=new', '--no-sandbox', '--disable-gpu',
        '--run-all-compositor-stages-before-draw', '--virtual-time-budget=30000',
        '--window-size=1280,800', '--dump-dom', url
      ], {encoding: 'utf8', maxBuffer: 30 << 20, timeout: 90000, stdio: ['ignore', 'pipe', 'pipe']});
    } catch (error) {
      html = String(error.stdout || '');
      last = String(error.stderr || error.message).slice(0, 240);
    }
    if (html.includes('data-ready="true"') || html.includes("data-ready='true'")) return;
    last = `pages=${(html.match(/class="page/g) || []).length} len=${html.length}`;
    sleep(1200);
  }
  throw new Error(`print.html?lang=${lang} not ready (${last})`);
}

const outputs = [['zh', 'downloads/ALIN-Portfolio.pdf'], ['en', 'downloads/ALIN-Portfolio-EN.pdf']];
try {
  for (const [lang, file] of outputs) {
    console.log(`building ${file} ...`);
    waitReady(lang);
    execFileSync(chrome, [
      '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw', '--virtual-time-budget=60000', '--window-size=1280,800',
      `--print-to-pdf=${root}${file}`, `http://127.0.0.1:${port}/print.html?lang=${lang}`
    ], {stdio: ['ignore', 'ignore', 'pipe'], timeout: 180000});
    let info = '';
    try { info = execFileSync('pdfinfo', [`${root}${file}`]).toString().match(/Pages:\s+\d+/)?.[0] || ''; } catch {}
    const size = statSync(`${root}${file}`).size;
    console.log(`${file} ${info} ${(size / 1048576).toFixed(2)}MB`);
  }
} finally {
  server.kill();
}

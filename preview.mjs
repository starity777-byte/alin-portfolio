import http from 'node:http';
import { readFile } from 'node:fs/promises';

const allowed = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/case-studies.js', ['case-studies.js', 'text/javascript; charset=utf-8']],
  ['/case-study.css', ['case-study.css', 'text/css; charset=utf-8']],
  ['/downloads/ALIN-Portfolio.pdf', ['downloads/ALIN-Portfolio.pdf', 'application/pdf']],
]);
const assets = ['home-front.png','home-growth.png','home-family.png','home-chat.png','home-plan.png','digest-interface.png','digest-draft.png','workbench.png','workbench-desktop.png','workbench-runtime.png','workbench-personal.png','starity-timeline.jpg','starity-tasks.jpg','starity-timeline-focus.jpg','starity-workshop.jpg','starity-search.jpg','naituan-home.jpg'];
for (const file of assets) allowed.set(`/assets/${file}`, [`assets/${file}`, file.endsWith('.webp') ? 'image/webp' : file.endsWith('.jpg') ? 'image/jpeg' : 'image/png']);
const port = Number(process.argv[2] || 4390);
http.createServer(async (request, response) => {
  const entry = allowed.get(new URL(request.url, 'http://localhost').pathname);
  if (!entry || !['GET','HEAD'].includes(request.method)) { response.writeHead(404).end('Not found'); return; }
  try {
    const body = await readFile(new URL(entry[0], import.meta.url));
    const headers = {'Content-Type':entry[1], 'Cache-Control':'no-cache', 'Accept-Ranges':'bytes'};
    const range = request.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (range) {
      const start = Number(range[1]);
      const end = Math.min(range[2] ? Number(range[2]) : body.length - 1, body.length - 1);
      if (start > end || start >= body.length) { response.writeHead(416, {'Content-Range':`bytes */${body.length}`}).end(); return; }
      response.writeHead(206, {...headers, 'Content-Range':`bytes ${start}-${end}/${body.length}`, 'Content-Length':end-start+1});
      response.end(request.method === 'HEAD' ? undefined : body.subarray(start,end+1));
    } else {
      response.writeHead(200, {...headers, 'Content-Length':body.length});
      response.end(request.method === 'HEAD' ? undefined : body);
    }
  } catch { response.writeHead(500).end('Preview file unavailable'); }
}).listen(port,'127.0.0.1', () => console.log(`ALIN v2 preview: http://127.0.0.1:${port}`));

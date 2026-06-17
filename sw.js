// network-first: ออนไลน์ดึงของใหม่เสมอ / ออฟไลน์ใช้แคชสำรอง
const CACHE = 'iqa-chanuman-v4';
const CORE = ['./', 'index.html', 'style.css', 'app.js', 'assets/logo.png', 'assets/logo-3d.png', 'manifest.json'];
// ไฟล์ใหญ่ (PDF/วิดีโอ) ไม่ต้องเก็บลงแคช — กัน storage ผู้ใช้บวม
const SKIP_CACHE = /\.(pdf|mp4|mov|webm)$/i;
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(resp => {
      if (!SKIP_CACHE.test(new URL(e.request.url).pathname)) {
        const cp = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, cp));
      }
      return resp;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});

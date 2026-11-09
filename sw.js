const C='korean-v1794209371';const A=['./','index.html','manifest.json','icon.png','icon-192.png','apple-touch-icon.png','favicon-32.png','offline.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('message',e=>{if(e.data==='skipWaiting')self.skipWaiting();});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return; if(u.pathname.startsWith('/_vercel/'))return;
 if(u.origin!==location.origin){ if(/fonts\.(googleapis|gstatic)\.com/.test(u.host)){ e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(e.request);const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r;}).catch(()=>null);return hit||(await net)||new Response('',{status:200,headers:{'Content-Type':'text/css'}});})); } return; }
 e.respondWith(fetch(e.request).then(r=>{ if(r.ok&&r.type==='basic'&&!u.search){ const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); } return r; }).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('offline.html'):undefined))));});

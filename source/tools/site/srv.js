/* static server for korean-site that sends the vercel.json headers */
const http=require('http'),fs=require('fs'),path=require('path');const ROOT='/home/claude/korean-site';
const T={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.png':'image/png','.xml':'text/xml','.txt':'text/plain'};
module.exports=(port)=>new Promise(res=>{const s=http.createServer((q,r)=>{const cfg=JSON.parse(fs.readFileSync(ROOT+'/vercel.json','utf8'));let u=decodeURIComponent(q.url.split('?')[0]);if(u==='/')u='/index.html';const f=path.join(ROOT,u);
 if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end('nf');return;}
 const h={'Content-Type':T[path.extname(f)]||'application/octet-stream'};cfg.headers.forEach(rule=>{const re=new RegExp('^'+rule.source+'$');if(re.test(u))rule.headers.forEach(x=>{ if(x.key!=='Strict-Transport-Security') h[x.key]=x.value.replace('; upgrade-insecure-requests','');});});
 r.writeHead(200,h);fs.createReadStream(f).pipe(r);});s.listen(port,()=>res(s));});

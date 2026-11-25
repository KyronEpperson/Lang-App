/* Measure how the cards of each lesson's deck line up with the lesson's sections (same cut and score as lsPlan in src/app.html). usage: node tools/sections/measure.js [--json out] */
const fs=require('fs'),path=require('path');const ROOT=path.join(__dirname,'..','..');
const LANGAPP_PACKS={course:{},i18n:{}};
const held=fs.existsSync(ROOT+'/packs/HELD.txt')?fs.readFileSync(ROOT+'/packs/HELD.txt','utf8'):'';
fs.readdirSync(ROOT+'/packs').filter(f=>/^course-.*\.js$/.test(f)&&!held.includes(f)).forEach(f=>{ new Function('LANGAPP_PACKS',fs.readFileSync(ROOT+'/packs/'+f,'utf8'))(LANGAPP_PACKS); });
function lsNorm(h){ return ' '+String(h||'').replace(/\{\{ex:([^|}]*)[^}]*\}\}/g,' $1 ').replace(/\{\{[^}]*\}\}/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').toLowerCase().replace(/[.,!?¿¡。、！？;:"'’“”«»()\[\]…~·\/\-]/g,' ').replace(/\s+/g,' ')+' '; }
function lsScore(front,txt){ const f=lsNorm(front).trim(); if(!f) return 0; if(txt.includes(' '+f+' ')) return 2;
  if(/[฀-๿぀-ヿ㐀-鿿]/.test(f)){ if(txt.includes(f)) return 2; const g=[...f.replace(/ /g,'')]; if(g.length<2) return 0; let h=0; for(let i=0;i<g.length-1;i++){ if(txt.includes(g[i]+g[i+1])) h++; } return h/(g.length-1); }
  const w=f.split(' ').filter(x=>x.length>2); return w.length?w.filter(x=>txt.includes(' '+x+' ')).length/w.length:0; }
function cut(body){ const raw=String(body||'').split(/(?=<h3[\s>])/), cnt=(x,re)=>(x.match(re)||[]).length, bal=x=>cnt(x,/<div[\s>]/g)===cnt(x,/<\/div>/g)&&cnt(x,/<table[\s>]/g)===cnt(x,/<\/table>/g);
  for(let i=0;i<raw.length-1;){ if(!bal(raw[i])){ raw[i]+=raw[i+1]; raw.splice(i+1,1); } else i++; }
  if(raw.length>1&&!/^<h3[\s>]/.test(raw[0])){ raw[1]=raw[0]+raw[1]; raw.shift(); } return raw; }
const out=[];
Object.values(LANGAPP_PACKS.course).forEach(c=>{ const L=c.LESSONS||c.lessons||[]; const D=c.DECKS||{}; const use={}; L.forEach(l=>use[l.deck]=(use[l.deck]||0)+1);
  const r={id:c.id,lessons:L.length,decks:Object.keys(D).length,lessonDecks:Object.keys(use).length,shared:Object.values(use).filter(n=>n>1).length,nodeck:L.filter(l=>!D[l.deck]).length,cards:0,matched:0,secs:0,ex:0,exSecs:0,one:0,keys:Object.keys(L[0]||{}).join(',')};
  L.forEach(l=>{ const raw=cut(l.body), txt=raw.map(lsNorm), dk=D[l.deck]||[]; r.secs+=raw.length; if(raw.length===1) r.one++; raw.forEach(h=>{ const n=(h.match(/\{\{ex:/g)||[]).length; r.ex+=n; if(n) r.exSecs++; });
    dk.forEach(cd=>{ r.cards++; let bs=0; txt.forEach(t=>{ bs=Math.max(bs,lsScore(cd[0],t)); }); if(bs>=0.6) r.matched++; }); });
  out.push(r); });
const T=out.reduce((a,r)=>{ ['lessons','cards','matched','secs','ex','exSecs','one','shared','nodeck'].forEach(k=>a[k]=(a[k]||0)+r[k]); return a; },{});
out.sort((a,b)=>a.id<b.id?-1:1).forEach(r=>console.log([r.id,r.lessons+'L',r.secs+'sec',r.one+'one',r.decks+'dk',r.lessonDecks+'ldk',r.shared+'shared',r.nodeck+'nodeck',r.cards+'c',Math.round(r.matched/Math.max(1,r.cards)*100)+'%',r.ex+'ex',r.exSecs+'exsec'].join('\t')));
console.log(JSON.stringify(T),Math.round(T.matched/T.cards*100)+'%'); console.log(out[0].keys);

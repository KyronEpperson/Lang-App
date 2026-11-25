const fs=require('fs'),path=require('path');const ROOT=path.join(__dirname,'..','..');
const P={course:{},i18n:{}};
fs.readdirSync(ROOT+'/packs').filter(f=>/^course-.*\.js$/.test(f)).forEach(f=>{ new Function('LANGAPP_PACKS',fs.readFileSync(ROOT+'/packs/'+f,'utf8'))(P); });
function lsNorm(h){ return ' '+String(h||'').replace(/\{\{ex:([^|}]*)[^}]*\}\}/g,' $1 ').replace(/\{\{[^}]*\}\}/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').toLowerCase().replace(/[.,!?¿¡。、！？;:"'’“”«»()\[\]…~·\/\-]/g,' ').replace(/\s+/g,' ')+' '; }
const CJK=/[฀-๿぀-ヿ㐀-鿿]/;
function teaches(front,txt){ const f=lsNorm(front).trim(); if(!f) return false; if(txt.includes(' '+f+' ')) return true;
  if(CJK.test(f)) return f.replace(/ /g,'').length>=2&&txt.replace(/ /g,'').includes(f.replace(/ /g,''));
  const w=f.split(' ').filter(x=>x.length>2); return w.length>=2&&w.every(x=>txt.includes(' '+x+' ')); }
function cut(body){ const raw=String(body||'').split(/(?=<h3[\s>])/), cnt=(x,re)=>(x.match(re)||[]).length, bal=x=>cnt(x,/<div[\s>]/g)===cnt(x,/<\/div>/g)&&cnt(x,/<table[\s>]/g)===cnt(x,/<\/table>/g);
  for(let i=0;i<raw.length-1;){ if(!bal(raw[i])){ raw[i]+=raw[i+1]; raw.splice(i+1,1); } else i++; }
  if(raw.length>1&&!/^<h3[\s>]/.test(raw[0])){ raw[1]=raw[0]+raw[1]; raw.shift(); } return raw; }
const items=h=>{ const o=[]; String(h).replace(/<b>([^<]+)<\/b>|<td class="k">([^<]+)<\/td>/g,(m,a,b)=>{ o.push(lsNorm(a||b).trim()); }); return o; };
const want=process.argv[2]; const tot={};
Object.values(P.course).sort((a,b)=>a.id<b.id?-1:1).forEach(c=>{ const L=c.LESSONS, D=c.DECKS; const byFront=new Map(); Object.keys(D).forEach(d=>D[d].forEach(cd=>{ const k=lsNorm(cd[0]).trim(); if(!byFront.has(k)) byFront.set(k,[d,cd]); }));
  const r={secs:0,ex:0,ex2:0,own:0,cross:0,exDup:0,small:0,decks:0,cards:0,noDeck:0,ownTotal:0,ownPlaced:0,sizes:[]};
  L.forEach(l=>{ const raw=cut(l.body), dk=D[l.deck]||[]; const used=new Set(); const sets=raw.map(h=>{ const txt=lsNorm(h), s=[]; const add=(k,x)=>{ if(!used.has(k)){ used.add(k); s.push(x); } };
      h.replace(/\{\{ex:([^}]*)\}\}/g,(m,inner)=>{ const p=inner.split('|'); r.ex++; if(p.length<3||!p[2]) r.ex2++; const k=lsNorm(p[0]).trim(); if(byFront.has(k)){ r.exDup++; add(k,['real',k]); } else add(k,['ex',k]); });
      dk.forEach(cd=>{ const k=lsNorm(cd[0]).trim(); if(teaches(cd[0],txt)&&!used.has(k)){ r.own++; add(k,['own',k]); } });
      items(h).forEach(k=>{ if(byFront.has(k)&&!used.has(k)){ r.cross++; add(k,['cross',k]); } });
      return s; });
    r.ownTotal+=dk.length; r.ownPlaced+=dk.filter(cd=>used.has(lsNorm(cd[0]).trim())).length;
    r.secs+=raw.length; sets.forEach(s=>{ if(s.length<3) r.small++; });
    /* forward merge */ for(let k=0;k<sets.length;k++){ if(sets[k].length&&sets[k].length<3){ if(k<sets.length-1){ sets[k+1]=sets[k].concat(sets[k+1]); sets[k]=[]; } else { let j=k-1; while(j>=0&&!sets[j].length) j--; if(j>=0){ sets[j]=sets[j].concat(sets[k]); sets[k]=[]; } } } }
    const n=sets.filter(s=>s.length).length, tc=sets.reduce((a,s)=>a+s.length,0); r.decks+=n; r.cards+=tc; if(!n) r.noDeck++; r.sizes.push(tc);
    if(want===c.id) console.log(l.id.padEnd(14),'deck',dk.length,'placed',dk.filter(cd=>used.has(lsNorm(cd[0]).trim())).length,'|',sets.map(s=>s.length+(s.length?'('+s.filter(x=>x[0]==='ex').length+'ex)':'')).join(' ')); });
  r.sizes.sort((a,b)=>a-b); console.log([c.id,r.secs+'sec',r.ex+'ex',r.ex2+'ex-nomean',r.exDup+'ex=card',r.own+'own',r.cross+'cross',r.small+'small',r.decks+'decks',r.cards+'cards',r.noDeck+'noDeckLessons','ownPlaced '+Math.round(r.ownPlaced/r.ownTotal*100)+'%','lessonCards min/med/max '+r.sizes[0]+'/'+r.sizes[r.sizes.length>>1]+'/'+r.sizes[r.sizes.length-1]].join('\t'));
  Object.keys(r).forEach(k=>{ if(typeof r[k]==='number') tot[k]=(tot[k]||0)+r[k]; }); });
console.log(JSON.stringify(tot));

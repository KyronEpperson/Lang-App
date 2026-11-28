// ST-1: graded stories (course report, solution 6). The words a learner has met by the end of each lesson, and a check that a story uses them.
//   node tools/stories/check.js vocab <course> [pack]      -> prints JSON {lessonId:[words met by the end of that lesson]} (cumulative)
//   node tools/stories/check.js check <course> <stories.js> [pack]   -> every story: 40 to 150 words, at least 95% met words, exactly 3 questions with 4 options; exit 1 on a failure
const fs=require('fs'), path=require('path');
const [mode,course,a3,a4]=process.argv.slice(2);
const packFile=(mode==='vocab'?a3:a4)||path.join(__dirname,'../../packs/course-'+course+'.js');
const P={course:{},i18n:{}}; new Function('LANGAPP_PACKS',fs.readFileSync(packFile,'utf8'))(P); const C=P.course[course]; if(!C){ console.error('no course '+course); process.exit(2); }
const norm=w=>w.toLowerCase().normalize('NFC').replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,'');
const toks=s=>String(s||'').replace(/<[^>]+>/g,' ').split(/[\s/]+/).map(norm).filter(Boolean);
function lessonWords(l){ const out=new Set(), add=s=>toks(s).forEach(w=>out.add(w));
  (C.DECKS[l.deck]||[]).forEach(c=>{ add(c[0]); const d=(C.DIALOG||{})[c[0]]; if(d){ add(d[0]); add(d[1]); } const e=(C.EXAMPLES||{})[c[0]]; if(e) add(e[0]); });
  const walk=x=>{ if(Array.isArray(x)){ if(x.length>=3&&typeof x[0]==='string'&&typeof x[2]==='string') add(x[0]); else x.forEach(walk); } else if(x&&typeof x==='object') Object.values(x).forEach(walk); }; walk((C.SECS||{})[l.id]);
  const b=String(l.body||''); b.replace(/‹([^›]*)›|<b>([^<]*)<\/b>|<td class="k">([^<]*)<\/td>|\{\{ex:([^|}]*)/g,(m,a,b2,c,d)=>{ add(a||b2||c||d); return m; });
  ((C.PRACTICE||{})[l.id]||[]).forEach(it=>{ if(it.t==='order'){ (it.a||[]).forEach(add); } else if(it.t==='type'){ add((it.a||[])[0]); } else if(it.t==='fill'){ add(String(it.q).replace('__',(it.a||[''])[0])); } else if(it.t==='mc'){ (it.o||[]).slice(0,1).forEach(o=>{ if(!/^[A-Za-z ,.'’-]+$/.test(o)||/[¿¡áéíóúñ]/i.test(o)) add(o); }); } });
  return out; }
const cum={}, acc=new Set(); C.LESSONS.forEach(l=>{ lessonWords(l).forEach(w=>acc.add(w)); cum[l.id]=new Set(acc); });
if(mode==='vocab'){ const o={}; Object.keys(cum).forEach(k=>{ o[k]=[...cum[k]].sort(); }); console.log(JSON.stringify(o)); process.exit(0); }
let ST=require(path.resolve(a3)); const PART=!ST.stories; if(PART) ST={stories:ST,names:['Ana','Diego','Lucía','Javier','Mateo','Sofía','Carlos','María','Luis','Elena','México','Marta','Pablo']}; let bad=0; const names=new Set((ST.names||[]).map(norm));
C.LESSONS.forEach(l=>{ const s=(ST.stories||{})[l.id]; if(!s){ if(!PART&&(ST.none||[]).indexOf(l.id)<0){ console.log('FAIL '+l.id+': no story'); bad++; } return; }
  const words=[]; (s.lines||[]).forEach(x=>toks(x[0]).forEach(w=>words.push(w))); const known=cum[l.id], unk=[...new Set(words.filter(w=>!known.has(w)&&!names.has(w)&&!/^\d+$/.test(w)))], miss=words.filter(w=>unk.indexOf(w)>=0).length, pct=words.length?1-miss/words.length:0;
  const errs=[]; if(words.length<40||words.length>150) errs.push('length '+words.length); if(pct<0.95) errs.push('known '+(pct*100).toFixed(1)+'%');
  if(!s.title||!s.tr) errs.push('title'); if((s.lines||[]).some(x=>!Array.isArray(x)||x.length<2||!x[0]||!x[1]||(x[2]!=null&&typeof x[2]!=='string'))) errs.push('line shape');
  if(!Array.isArray(s.qs)||s.qs.length!==3||s.qs.some(q=>!q.q||!Array.isArray(q.o)||q.o.length!==4||new Set(q.o).size!==4)) errs.push('questions');
  if(JSON.stringify(s).indexOf('<')>=0) errs.push('html');
  console.log((errs.length?'FAIL ':'PASS ')+l.id+': '+words.length+' words, '+(pct*100).toFixed(1)+'% met'+(unk.length?' · new: '+unk.join(' '):'')+(errs.length?' · '+errs.join(', '):'')); if(errs.length) bad++; });
Object.keys(ST.stories||{}).forEach(k=>{ if(!cum[k]){ console.log('FAIL unknown lesson '+k); bad++; } });
console.log(bad?('FAILED '+bad):'ALL PASS'); process.exit(bad?1:0);

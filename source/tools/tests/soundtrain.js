// SD-1: sound training (course report, solution 9), en-es. Run: node tools/tests/soundtrain.js   (needs ./build.sh first)
//  the entry is on the sounds lesson only · ten questions, every contrast at least twice · the word is said, two real words are offered · the answer shows meanings and says both words · the result is saved, survives cleaning and a merge, and never finishes a lesson
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'sd-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:420,height:860}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.autoNext=false; window.__said=[]; sdCan=function(){ return true; }; sdSay=function(t,v,then){ window.__said.push(String(t)); if(then) setTimeout(then,10); }; });
await prep();
T('built-in Korean course: no sound training entry',await p.evaluate(()=>{ location.hash='#lessons'; route(); showLesson(LESSONS[0].id); return !sdFor(LESSONS[0].id)&&!document.getElementById('sdEntry'); }));
T('en-es loads',await p.evaluate(()=>applyCourse('en-es')!==false&&COURSE.id==='en-es')); await p.waitForTimeout(300); await prep();
await p.evaluate(()=>{ location.hash='#lessons'; }); await p.waitForTimeout(250);
const where=await p.evaluate(()=>{ const out=LESSONS.map(l=>{ showLesson(l.id); return document.getElementById('sdEntry')?l.id:null; }).filter(Boolean); showLesson('sounds'); return {out,done:!!S.lessons.sounds,groups:sdFor('sounds').length,pairs:sdFor('sounds').reduce((n,g)=>n+g.pairs.length,0)}; });
T('the entry is on the sounds lesson only, with five contrasts',where.out.length===1&&where.out[0]==='sounds'&&where.groups===5&&where.pairs>=25,where);
await p.click('#sdStart'); await p.waitForTimeout(400);
const q1=await p.evaluate(()=>({n:SD.items.length,per:SD.G.map((g,i)=>SD.items.filter(x=>x.g===i).length),opts:[...document.querySelectorAll('#sdRun .sd-opt .k')].map(x=>x.textContent),mean:document.querySelectorAll('#sdRun .sd-opt .m').length,said:window.__said.slice(),want:SD.items[0].p[SD.items[0].a],pair:SD.items[0].p.slice(0,2),wide:document.documentElement.scrollWidth>window.innerWidth+1}));
T('a round is ten questions with every contrast at least twice',q1.n===10&&q1.per.every(x=>x>=2),q1.per);
T('the word is said, the two words are offered, no meanings yet',q1.said.length===1&&q1.said[0]===q1.want&&q1.opts.join('|')===q1.pair.join('|')&&q1.mean===0&&!q1.wide,q1);
for(let i=0;i<10;i++){ const wrong=i===3; await p.evaluate(w=>{ window.__said=[]; const it=SD.items[SD.qi]; document.querySelector('#sdRun .sd-opt[data-sd="'+(w?1-it.a:it.a)+'"]').click(); },wrong); await p.waitForTimeout(i===3?600:120);
  if(i===3){ const fb=await p.evaluate(()=>({right:!!document.querySelector('#sdRun .sd-opt.right'),wrong:!!document.querySelector('#sdRun .sd-opt.wrong'),mean:document.querySelectorAll('#sdRun .sd-opt .m').length,said:window.__said.slice(),pair:SD.items[SD.qi].p.slice(0,2),tip:document.querySelector('#sdRun .prac-fb').textContent.length>10,cmp:document.querySelectorAll('#sdRun [data-sdsay]').length}));
    T('a wrong answer shows the right word, both meanings, the tip, and says both words',fb.right&&fb.wrong&&fb.mean===2&&fb.said.join('|')===fb.pair.join('|')&&fb.tip&&fb.cmp===2,fb); }
  await p.click('#sdRun .sd-next'); await p.waitForTimeout(i===9?120:320); }
const end=await p.evaluate(()=>({score:(document.querySelector('#sdRun .prac-score')||{}).textContent,rows:document.querySelectorAll('#sdRun .sd-row').length,saved:(S.snd||{}).sounds,done:!!S.lessons.sounds}));
T('the end shows 9 / 10 with a line for each contrast, and saves it',/9 \/ 10/.test(end.score||'')&&end.rows===5&&end.saved&&end.saved.n===1&&end.saved.r===9,end);
T('sound training does not finish the lesson',end.done===where.done,end);
await p.click('#sdRun .sd-back'); await p.waitForTimeout(150);
T('back on the lesson page the entry shows the best round',await p.evaluate(()=>{ const e=document.getElementById('sdEntry'); return !!e&&/9\/10/.test(e.textContent)&&/1 round/.test(e.textContent); }));
const st=await p.evaluate(()=>{ const a=sanitizeState(JSON.parse(JSON.stringify(S))); const o=JSON.parse(JSON.stringify(S)); o.snd={sounds:{n:4,r:6,ts:5}}; const m=mergeState(JSON.parse(JSON.stringify(S)),o); const bad=JSON.parse(JSON.stringify(S)); bad.snd='x'; return {a:a.snd.sounds,m:m.snd.sounds,bad:JSON.stringify(sanitizeState(bad).snd)}; });
T('the saved result survives cleaning and a merge',st.a&&st.a.r===9&&st.m&&st.m.n===4&&st.m.r===9&&st.bad==='{}',st);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

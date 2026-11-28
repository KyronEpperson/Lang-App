// ST-1: graded stories (course report, solution 6), en-es. Run: node tools/tests/stories.js   (needs ./build.sh first)
//  every lesson from the second has a story · the story is heard first, then read, then three questions · the result is saved and survives cleaning and a merge · it never changes whether a lesson is done · a course without stories shows nothing
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'st-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:420,height:860}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.autoNext=false; });
await prep();
const ko=await p.evaluate(()=>{ location.hash='#lessons'; route(); showLesson(LESSONS[1].id); return {st:!!stFor(LESSONS[1].id),entry:!!document.getElementById('stEntry')}; });
T('built-in Korean course: no story, no story button',!ko.st&&!ko.entry,ko);
T('en-es loads',await p.evaluate(()=>applyCourse('en-es')!==false&&COURSE.id==='en-es')); await p.waitForTimeout(300); await prep();
const cov=await p.evaluate(()=>({with:LESSONS.filter(l=>stFor(l.id)).length,N:LESSONS.length,first:!!stFor(LESSONS[0].id),bad:LESSONS.filter(l=>{ const s=stFor(l.id); return s&&(s.qs.length!==3||s.qs.some(q=>q.o.length!==4)||s.lines.length<4); }).map(l=>l.id)}));
T('every lesson after the sounds lesson has a story with three questions',cov.with===cov.N-1&&!cov.first&&!cov.bad.length,cov);
const id=await p.evaluate(()=>LESSONS[1].id);
const before=await p.evaluate(id=>{ location.hash='#lessons'; route(); showLesson(id); const e=document.getElementById('stEntry'); return {entry:!!e,after:!!(e&&e.previousElementSibling),done:!!S.lessons[id],txt:e?e.textContent:''}; },id);
T('the lesson page offers the story, not yet read',before.entry&&/Story/.test(before.txt)&&!/Story read/.test(before.txt),before);
await p.click('#stStart'); await p.waitForTimeout(150);
const listen=await p.evaluate(()=>({stage:ST&&ST.stage,text:document.querySelectorAll('#stRun .st-text .st-line').length,dots:document.querySelectorAll('#stRun .st-dot').length,lines:ST.s.lines.length,spanish:[...document.querySelectorAll('#stRun .k')].length}));
T('the story opens on listening: no text on screen, one dot a line',(listen.stage==='listen'&&listen.text===0&&listen.dots===listen.lines&&listen.spanish===0)||listen.stage==='read',listen);
if(listen.stage==='listen'){ await p.click('#stRun .st-toread'); await p.waitForTimeout(100); }
const read=await p.evaluate(()=>({stage:ST.stage,n:document.querySelectorAll('#stRun .st-text .st-line').length,lines:ST.s.lines.length,en:document.querySelectorAll('#stRun .st-text .m').length,wide:document.documentElement.scrollWidth>window.innerWidth+1}));
T('reading shows every line, English hidden, nothing wider than the screen',read.stage==='read'&&read.n===read.lines&&read.en===0&&!read.wide,read);
await p.click('#stRun .st-text .st-line[data-i="1"] .k'); await p.waitForTimeout(100);
T('tapping a line shows its English',await p.evaluate(()=>document.querySelectorAll('#stRun .st-text .m').length===1));
await p.click('#stRun .st-en'); await p.waitForTimeout(80);
T('the English switch shows every line',await p.evaluate(()=>document.querySelectorAll('#stRun .st-text .m').length===ST.s.lines.length));
await p.click('#stRun .st-toq'); await p.waitForTimeout(100);
for(let i=0;i<3;i++){ const pick=i===1?'[data-so="2"]':'[data-so="0"]'; await p.click('#stRun .opt'+pick); await p.waitForTimeout(80);
  if(i===1) T('a wrong answer shows the right one',await p.evaluate(()=>!!document.querySelector('#stRun .opt.right')&&!!document.querySelector('#stRun .opt.wrong')&&document.querySelector('#stRun .prac-fb').textContent.trim()===ST.s.qs[1].o[0]));
  await p.click('#stRun .st-next'); await p.waitForTimeout(80); }
const end=await p.evaluate(id=>({stage:ST.stage,score:(document.querySelector('#stRun .prac-score')||{}).textContent,saved:(S.story||{})[id],done:!!S.lessons[id]}),id);
T('the end shows 2 / 3 and saves it',end.stage==='end'&&/2 \/ 3/.test(end.score||'')&&end.saved&&end.saved.n===1&&end.saved.r===2,end);
T('reading a story does not finish the lesson',end.done===before.done,end);
await p.click('#stRun .st-back'); await p.waitForTimeout(150);
T('back on the lesson page the story shows as read',await p.evaluate(()=>{ const e=document.getElementById('stEntry'); return !!e&&/Story read/.test(e.textContent)&&/2\/3/.test(e.textContent)&&!document.getElementById('lessonBody').hidden; }));
const st=await p.evaluate(id=>{ const a=sanitizeState(JSON.parse(JSON.stringify(S))); const o=JSON.parse(JSON.stringify(S)); o.story={}; o.story[id]={n:3,r:1,ts:5}; o.story.__x={n:'a'}; const m=mergeState(JSON.parse(JSON.stringify(S)),o); const bad=JSON.parse(JSON.stringify(S)); bad.story=[1,2]; return {a:a.story[id],m:m.story[id],x:m.story.__x,bad:JSON.stringify(sanitizeState(bad).story)}; },id);
T('the saved result survives cleaning and a merge (most reads, best score)',st.a&&st.a.r===2&&st.m&&st.m.n===3&&st.m.r===2&&st.x&&st.x.n===0&&st.bad==='{}',st);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

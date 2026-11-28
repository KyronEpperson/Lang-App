// HL-1: honest labels (course report, solution 14), en-es. Run: node tools/tests/labels.js   (needs ./build.sh first)
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'ab-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:420,height:860}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; });
await prep();
T('built-in Korean course: no course panel, no lesson goal',await p.evaluate(()=>{ location.hash='#lessons'; route(); const a=!document.querySelector('.ab-course'); showLesson(LESSONS[1].id); return a&&!document.querySelector('.ab-goal'); }));
T('en-es loads',await p.evaluate(()=>applyCourse('en-es')!==false&&!!abFor())); await p.waitForTimeout(300); await prep();
await p.evaluate(()=>{ location.hash='#lessons'; }); await p.waitForTimeout(250); await p.evaluate(()=>route());
const pan=await p.evaluate(()=>{ const d=document.querySelector('#lessonHome .ab-course'); return {has:!!d,open:d&&d.open,sum:d&&d.querySelector('summary').textContent,before:d&&d.nextElementSibling&&d.nextElementSibling.classList.contains('lesson-list'),lists:d?d.querySelectorAll('ul').length:0}; });
T('the lesson list has a closed panel with the lesson count and the hours',pan.has&&!pan.open&&/26 lessons/.test(pan.sum)&&/30 to 40 hours/.test(pan.sum)&&pan.before&&pan.lists===3,pan);
await p.click('#lessonHome .ab-course summary'); await p.waitForTimeout(100);
const open=await p.evaluate(()=>{ const d=document.querySelector('#lessonHome .ab-course'); return {open:d.open,txt:d.textContent,wide:document.documentElement.scrollWidth>window.innerWidth+1}; });
T('opened, it says what the course covers, what it does not train and what to add',open.open&&/After it you can/.test(open.txt)&&/does not train yet/.test(open.txt)&&/Add outside the app/.test(open.txt)&&/A1/.test(open.txt)&&/estimate/.test(open.txt)&&!open.wide,{open:open.open,wide:open.wide});
const goal=await p.evaluate(()=>{ showLesson('greetings'); const g=document.querySelector('#lessonBody .ab-goal'); return {has:!!g,txt:g&&g.textContent,after:g&&g.previousElementSibling&&g.previousElementSibling.tagName}; });
T('a lesson page opens on what you can do after it',goal.has&&/After this lesson you can/.test(goal.txt)&&/Greet anyone/.test(goal.txt)&&goal.after==='H2',goal);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

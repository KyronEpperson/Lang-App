// QF-1 (2.104.0): Review and Practice quiz flow. Run: node tools/tests/quizflow.js   (needs ./build.sh first)
//  key hints match the screen · the card is said after every answer · a miss moves on in under 2 s · Practice has no pass mark and saves by itself
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'qf-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:1024,height:800}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; window.__said=[]; speak=function(t){ window.__said.push(String(t)); }; location.hash='#review'; });
await p.waitForTimeout(250); /* DS-1: the key hints sit in the Settings sheet (header gear); the checks below read them there */
const hint=()=>p.evaluate(()=>{ const k=document.getElementById('rvKeys'); const vis=x=>!!x&&!x.hidden&&getComputedStyle(x).display!=='none'; return {line:vis(k),f:vis(k.querySelector('[data-k=teach]')),n:vis(k.querySelector('[data-k=q]')),old:/again|got it/.test(k.textContent)}; });
const stage=()=>p.evaluate(()=>{ const s=document.getElementById('cardsStage'); return s.querySelector('.rvgo')?'teach':s.querySelector('.opt')?'q':'other'; });
// ---- Review: a new card
T('review opens on a new card',await stage()==='teach');
let h=await hint(); T('new card: hint shows F flip and no 1-4',h.line&&h.f&&!h.n&&!h.old,h);
await p.keyboard.press('f'); await p.waitForTimeout(80);
T('F flips the new card',await p.evaluate(()=>document.querySelector('#cardsStage .rvhide').classList.contains('shown')));
for(let i=0;i<8&&await stage()==='teach';i++){ await p.evaluate(()=>{ const s=document.getElementById('cardsStage'); s.querySelector('.rvhide').click(); s.querySelector('.rvgo').click(); }); await p.waitForTimeout(80); }
T('after the new cards comes a question',await stage()==='q');
h=await hint(); T('question: hint shows 1-4 and no F flip',h.line&&!h.f&&h.n&&!h.old,h);
const before=await p.evaluate(()=>document.querySelector('#cardsStage .rvhide')?1:0); await p.keyboard.press('f'); await p.waitForTimeout(60); T('F does nothing on a question',await stage()==='q'&&before===0);
// ---- Review: wrong, then right; the card is said both times; the miss moves on in under 2 s
const answer=(root,right)=>p.evaluate(([root,right])=>{ const r=document.querySelector(root); const say=x=>x.dataset.a; const cur=(root==='#cardsStage'?queue[qi].c[0]:window.__cur); const o=[...r.querySelectorAll('.opt')]; const hit=o.find(x=>(say(x)===cur)===right); window.__said.length=0; window.__q=r.querySelector('.rvq,.opts'); hit.click(); return cur; },[root,right]);
const gone=()=>p.evaluate(()=>!document.body.contains(window.__q)||!window.__q.querySelector('.opt[disabled]'));
let cur=await answer('#cardsStage',false); await p.waitForTimeout(600);
T('review, wrong answer: the card is said',await p.evaluate(c=>window.__said.includes(c),cur),await p.evaluate(()=>window.__said));
T('review, wrong answer: still on the card at 0.6 s',!(await gone()));
await p.waitForTimeout(1500); T('review, wrong answer: next card within 2.1 s',await gone());
for(let i=0;i<4&&await stage()!=='q';i++){ await p.evaluate(()=>{ const s=document.getElementById('cardsStage'); const hd=s.querySelector('.rvhide'); if(hd) hd.click(); const g=s.querySelector('.rvgo'); if(g) g.click(); }); await p.waitForTimeout(80); }
cur=await answer('#cardsStage',true); await p.waitForTimeout(600);
T('review, right answer: the card is said',await p.evaluate(c=>window.__said.includes(c),cur));
T('Audio is on by default',await p.evaluate(()=>S.auto===true&&S.autoV===1&&document.getElementById('auto').checked));
T('saved progress from before gets Audio on once, then the learner\'s choice is kept',await p.evaluate(()=>{ const k=curKey(), keep=localStorage.getItem(k), S0=S; const old=JSON.parse(JSON.stringify(S)); old.auto=false; delete old.autoV; localStorage.setItem(k,JSON.stringify(old)); load(); const a=S.auto===true&&S.autoV===1; S.auto=false; localStorage.setItem(k,JSON.stringify(S)); load(); const b=S.auto===false; if(keep===null) localStorage.removeItem(k); else localStorage.setItem(k,keep); S=S0; return a&&b; }));
await p.evaluate(()=>{ S.auto=false; }); /* the answers below must be said even with the box off */
// ---- Browse: no key hints
await p.evaluate(()=>document.getElementById('cmBrowse').click()); await p.waitForTimeout(120); h=await hint(); T('browse: no key hints',!h.line,h);
// ---- Practice: learn 5 at a time
await p.evaluate(()=>{ location.hash='#practice'; }); await p.waitForTimeout(200);
await p.evaluate(()=>{ const orig=renderQuizQ; renderQuizQ=function(c,d,card,m,cb){ window.__cur=card[0]; return orig(c,d,card,m,cb); }; qSel=new Set(['Hangul vowels']); S.learnPos={}; document.getElementById('learnStart').click(); });
await p.waitForTimeout(150);
const run=()=>p.evaluate(()=>{ const r=document.getElementById('quizRun'); return {card:!!r.querySelector('.card'),opt:!!r.querySelector('.opt'),done:!!r.querySelector('.done'),txt:r.textContent,btn:[...r.querySelectorAll('button.big')].filter(x=>!x.hidden&&x.offsetParent).map(x=>x.textContent)}; });
let r=await run(); T('practice starts with the new cards',r.card&&/card 1 of 12/.test(r.txt),r.txt.slice(0,80)); T('new card screen has no Save & exit',!/Save & exit/.test(r.txt));
for(let i=0;i<5;i++){ await p.evaluate(()=>document.querySelector('#quizRun [data-ans="1"]').click()); await p.waitForTimeout(260); }
r=await run(); T('after 5 new cards the quiz starts',r.opt&&/Quiz · 1\/15/.test(r.txt),r.txt.slice(0,60));
// first question wrong: said, and the next question arrives by itself
cur=await answer('#quizRun',false); await p.waitForTimeout(600);
T('practice, wrong answer: the card is said',await p.evaluate(c=>window.__said.includes(c),cur),await p.evaluate(()=>window.__said));
await p.waitForTimeout(1300); r=await run(); T('practice, wrong answer: next question by itself within 1.9 s',/Quiz · 2\/15/.test(r.txt),r.txt.slice(0,40));
cur=await answer('#quizRun',true); await p.waitForTimeout(500); T('practice, right answer: the card is said',await p.evaluate(c=>window.__said.includes(c),cur));
await p.waitForTimeout(1200); r=await run(); T('practice, right answer: next question by itself',/Quiz · 3\/15/.test(r.txt),r.txt.slice(0,40));
// the rest wrong, moving on with a tap (score 1 / 15: far under the old pass mark)
for(let i=0;i<13;i++){ await answer('#quizRun',false); await p.waitForTimeout(40); await p.evaluate(()=>document.querySelector('#quizRun .fb').click()); await p.waitForTimeout(40); }
r=await run(); T('result screen',r.done&&/1 \/ 15/.test(r.txt),r.txt.slice(0,120));
T('no pass mark on the result',!/to pass|passed/.test(r.txt),r.txt); T('no Save & exit on the result',!/Save & exit/.test(r.txt)); T('round line says saved',/Round 1 of 3 · saved/.test(r.txt),r.txt);
await p.waitForTimeout(500); T('place saved by itself',await p.evaluate(()=>S.learnPos[learnKey()]===5&&JSON.parse(localStorage.getItem(curKey())).learnPos[learnKey()]===5),await p.evaluate(()=>S.learnPos));
T('Next 5 cards is offered whatever the score',r.btn[0]==='Next 5 cards'&&r.btn.includes('Review these 5 again')&&r.btn.includes('Retry quiz'),r.btn);
// "Review missed": the cards answered wrong in more than a quarter of their questions, shown again, then quizzed alone
T('Review missed is offered after misses',r.btn.includes('Review missed'),r.btn);
const press=l=>p.evaluate(l=>[...document.querySelectorAll('#quizRun button.big')].find(x=>x.textContent===l).click(),l);
const tapOn=async()=>{ await p.waitForTimeout(40); await p.evaluate(()=>document.querySelector('#quizRun .fb').click()); await p.waitForTimeout(40); };
const flips=async()=>{ let n=0; for(;;){ const c=await p.evaluate(()=>{ const b=document.querySelector('#quizRun [data-ans="1"]'); if(!b) return 0; b.click(); return 1; }); if(!c) break; n++; await p.waitForTimeout(260); } return n; };
await press('Review missed'); await p.waitForTimeout(120); let nf=await flips();
r=await run(); T('all 5 were missed: 5 cards shown again, then 15 questions on them',nf===5&&/Review missed · 1\/15/.test(r.txt),[nf,r.txt.slice(0,40)]);
const bad=await p.evaluate(()=>window.__cur); /* miss this one card every time: 3 of 3 wrong; the others 0 of 3 */
for(let i=0;i<15;i++){ await answer('#quizRun',await p.evaluate(()=>window.__cur)!==bad); await tapOn(); }
r=await run(); T('12 / 15 after missing one card three times',/12 \/ 15/.test(r.txt)&&r.btn.includes('Review missed'),r.txt.slice(0,60));
await press('Review missed'); await p.waitForTimeout(120); nf=await flips(); r=await run();
T('now only the one missed card comes back, with 3 questions',nf===1&&/Review missed · 1\/3/.test(r.txt),[nf,r.txt.slice(0,40)]);
for(let i=0;i<3;i++){ await answer('#quizRun',true); await tapOn(); }
r=await run(); T('3 / 3: no Review missed, the other buttons stay',/3 \/ 3/.test(r.txt)&&r.btn.join('|')==='Next 5 cards|Review these 5 again|Retry quiz',r.btn);
// reviewing again does not move the place twice
await press('Review these 5 again'); await p.waitForTimeout(120); nf=await flips();
for(let i=0;i<15;i++){ await answer('#quizRun',true); await tapOn(); }
r=await run(); T('review again: 5 cards, 15 / 15, still round 1, place still 5',nf===5&&/15 \/ 15/.test(r.txt)&&/Round 1 of 3/.test(r.txt)&&await p.evaluate(()=>S.learnPos[learnKey()]===5),r.txt.slice(0,80));
T('a card missed once in three (33%) counts as missed, once in four would not',await p.evaluate(()=>MISS_SHARE===0.25));
await p.evaluate(()=>document.querySelector('#quizRun button.big').click()); await p.waitForTimeout(150); r=await run();
T('next round shows new cards 6 to 10 first',r.card&&/card 6 of 12/.test(r.txt),r.txt.slice(0,60));
for(let i=0;i<5;i++){ await p.evaluate(()=>document.querySelector('#quizRun [data-ans="1"]').click()); await p.waitForTimeout(260); }
r=await run(); T('then a quiz with the earlier cards mixed in',r.opt&&/new 5 \+ \d+ learned/.test(r.txt),r.txt.slice(0,60));
// the Next button comes back when "go to the next card automatically" is off
await p.evaluate(()=>{ S.autoNext=false; }); await answer('#quizRun',false); await p.waitForTimeout(1900);
T('automatic next off: the question waits for Next',await p.evaluate(()=>{ const n=document.querySelector('#quizRun .next'); return !!n&&!n.hidden&&document.body.contains(window.__q); }));
// the Practice tab is the way out now that "Save & exit" is gone
await p.evaluate(()=>document.querySelector('#nav a[href="#practice"]').click()); await p.waitForTimeout(150);
T('the Practice tab leaves a running quiz',await p.evaluate(()=>!document.getElementById('quizSetup').hidden&&document.getElementById('quizRun').hidden));
T('no page errors',errs.length===0,errs);
await b.close(); console.log(fail?fail+' FAILED':'quiz flow: all pass'); process.exit(fail?1:0);
})();

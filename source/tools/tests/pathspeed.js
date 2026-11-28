// OP-1 and FLR-1 (course report, solutions 10 and 11), en-es. Run: node tools/tests/pathspeed.js   (needs ./build.sh first)
//  one path: a session's new cards come from the decks of finished lessons first · speed round: locked under ten known sentences, three laps of the same ten, wrong taps do not advance, grades no card, saves the fastest lap
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'ps-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:420,height:860}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.autoNext=false; speak=function(){}; });
await prep();
const ko=await p.evaluate(()=>{ location.hash='#lessons'; route(); S.lessons[LESSONS[3].id]=1; const cd=currentDeck(), nn=nextNewCards(5); delete S.lessons[LESSONS[3].id]; return {op:opOn(),fl:flOn(),row:document.querySelectorAll('.fl-row').length,same:nn.every(x=>x.d===cd)}; });
T('built-in Korean course: the old path, no speed round',!ko.op&&!ko.fl&&ko.row===0&&ko.same,ko);
T('en-es loads',await p.evaluate(()=>applyCourse('en-es')!==false&&opOn()&&flOn())); await p.waitForTimeout(300); await prep();
const op=await p.evaluate(()=>{ const cd=currentDeck(), a=nextNewCards(5).map(x=>x.d); const l=LESSONS.find(x=>x.deck!==cd&&x.id!=='sounds'); S.lessons[l.id]=1; memoClear(); const b2=nextNewCards(5).map(x=>x.d); const l2=LESSONS.find(x=>x.deck!==cd&&x.deck!==l.deck); S.lessons[l2.id]=1; DECKS[l.deck].forEach((c,i)=>{ if(i<DECKS[l.deck].length-2) S.cards[ck(l.deck,c)]={box:2,due:dayNum()+3,seen:1}; }); memoClear(); const c3=nextNewCards(5).map(x=>x.d); const first=LESSONS.indexOf(l)<LESSONS.indexOf(l2)?l:l2, second=first===l?l2:l; const r={cd,a,b2,ld:l.deck,c3,l2d:l2.deck,order:first===l}; return r; });
T('no lesson finished: new cards come from the deck path as before',op.a.length===5&&op.a.every(d=>d===op.cd),op);
T('a finished lesson: its deck feeds the new cards before the path deck',op.b2.length===5&&op.b2.every(d=>d===op.ld)&&op.ld!==op.cd,op);
T('when that deck runs short, the next finished lesson fills the rest',op.c3.length===5&&op.c3.filter(d=>d===op.ld).length===2&&op.c3.filter(d=>d===op.l2d).length===3,op);
// ---- speed round
await p.evaluate(()=>{ location.hash='#lessons'; }); await p.waitForTimeout(250);
const locked=await p.evaluate(()=>{ Object.keys(S.cards).forEach(k=>delete S.cards[k]); memoClear(); route(); const r=document.querySelector('.fl-row'); return {rows:document.querySelectorAll('.fl-row').length,dis:r&&r.disabled,txt:r&&r.textContent,after:r&&r.previousElementSibling&&r.previousElementSibling.classList.contains('lp-cp'),pool:flPool().length}; });
T('one speed round row, after the first checkpoint, locked with no known sentences',locked.rows===1&&locked.dis&&/0 \/ 10/.test(locked.txt)&&locked.after&&locked.pool===0,locked);
const ready=await p.evaluate(()=>{ let n=0; names.forEach(d=>DECKS[d].forEach(c=>{ const w=lpWords(c).length; if(n<14&&w>=3&&w<=8&&c[2]&&!/[\/…_()]/.test(c[0])){ S.cards[ck(d,c)]={box:3,due:dayNum()+5,seen:2}; n++; } })); memoClear(); route(); const r=document.querySelector('.fl-row'); window.__before=JSON.stringify(S.cards); return {n,dis:r.disabled,pool:flPool().length}; });
T('with ten known sentences the row opens',ready.n===14&&!ready.dis&&ready.pool>=10,ready);
await p.click('.fl-row'); await p.waitForTimeout(150);
T('the round opens on its rules',await p.evaluate(()=>FLR&&FLR.stage==='intro'&&FLR.items.length===10&&!!document.querySelector('#flRun .fl-go')));
const sets=[]; for(let lap=0;lap<3;lap++){ await p.click('#flRun .fl-go'); await p.waitForTimeout(80);
  sets.push(await p.evaluate(()=>FLR.items.map(x=>x.c[0]).join('|')));
  if(lap===0){ const slip=await p.evaluate(()=>{ const it=FLR.items[0], w=lpWords(it.c), bad=[...document.querySelectorAll('#flRun .fl-tile')].find(t=>normT(lpCore(t.textContent))!==normT(lpCore(w[0]))); if(!bad) return {skip:1}; bad.click(); return {built:FLR.built.length,qi:FLR.qi,slips:FLR.slips,tiles:document.querySelectorAll('#flRun .fl-tile').length,words:w.length}; });
    T('a wrong word does not go in',slip.skip||(slip.built===0&&slip.qi===0&&slip.slips===1&&slip.tiles===slip.words),slip); }
  if(lap===1) T('lap 2 shows the time to beat',await p.evaluate(()=>!!document.querySelector('#flRun .fl-bar')&&/beat/.test(document.querySelector('#flRun .fl-time').textContent)&&flTarget()>0));
  await p.evaluate(async()=>{ const lapNow=FLR.laps.length; let guard=0; while(FLR&&FLR.stage==='run'&&FLR.laps.length===lapNow&&guard++<400){ const it=FLR.items[FLR.qi], w=lpWords(it.c), want=normT(lpCore(w[FLR.built.length])); const t=[...document.querySelectorAll('#flRun .fl-tile')].find(x=>normT(lpCore(x.textContent))===want); if(!t) break; t.click(); await new Promise(r=>setTimeout(r,lapNow===0?12:2)); } }); await p.waitForTimeout(80); }
const end=await p.evaluate(()=>({stage:FLR.stage,laps:FLR.laps.length,flu:S.flu,min:Math.min.apply(null,FLR.laps),cards:JSON.stringify(S.cards)===window.__before,rows:document.querySelectorAll('#flRun .sd-row').length}));
T('three laps of the same ten sentences',sets.length===3&&sets[0]===sets[1]&&sets[1]===sets[2]&&end.laps===3&&end.rows===3,sets.map(s=>s.length));
T('the fastest lap is saved and no card was graded',end.stage==='end'&&end.flu&&end.flu.n===1&&end.flu.best===end.min&&end.cards,end);
await p.click('#flRun .fl-back'); await p.waitForTimeout(250);
T('back on the lesson list the row shows the best time',await p.evaluate(()=>{ const r=document.querySelector('.fl-row'); return !!r&&/✓/.test(r.textContent)&&!document.getElementById('lessonHome').hidden; }));
const st=await p.evaluate(()=>{ const a=sanitizeState(JSON.parse(JSON.stringify(S))); const o=JSON.parse(JSON.stringify(S)); o.flu={n:5,best:S.flu.best+5000,ts:1}; const m=mergeState(JSON.parse(JSON.stringify(S)),o); const bad=JSON.parse(JSON.stringify(S)); bad.flu={n:1,best:'x'}; return {a:a.flu,m:m.flu,want:S.flu.best,bad:sanitizeState(bad).flu===undefined}; });
T('the saved time survives cleaning and a merge (fastest wins)',st.a&&st.a.best===st.want&&st.m&&st.m.best===st.want&&st.m.n===5&&st.bad,st);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

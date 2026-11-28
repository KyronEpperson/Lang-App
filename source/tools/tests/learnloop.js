// LP-1: the learn-loop pilot (course report, solutions 1 to 5), en-es only. Run: node tools/tests/learnloop.js   (needs ./build.sh first)
//  1 the practice set finishes the lesson, and new cards are made (tiles, typed) in the lesson quiz · 2 lesson-only sentences come back in Review and sessions
//  3 sessions carry listening · 4 a checkpoint every five lessons · 5 the pronunciation line is off in quizzes after the sounds lesson · other courses are untouched
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'lp-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:420,height:860}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.autoNext=false; window.__said=[]; speak=function(t){ window.__said.push(String(t)); }; });
await prep();
// ---- another course is untouched
const ko=await p.evaluate(()=>{ location.hash='#lessons'; route(); return {on:lpOn(),rom:quizRomOn(),cps:lpCps().length,sent:lpSentDue().length,rows:document.querySelectorAll('.lp-cp').length,make:lpMake(names[2],DECKS[names[2]][0]),pill:[...document.querySelectorAll('.lesson-btn .pill')].some(x=>/15 min/.test(x.textContent))}; });
T('built-in Korean course: the pilot is off (no checkpoints, no making questions, no sentence reviews, old time label)',!ko.on&&ko.rom===true&&ko.cps===0&&ko.sent===0&&ko.rows===0&&!ko.make&&!ko.pill,ko);
// ---- en-es
T('en-es loads with the pilot on',await p.evaluate(()=>applyCourse('en-es')!==false&&COURSE.id==='en-es'&&lpOn())); await p.waitForTimeout(300); await prep();
await p.evaluate(()=>{ location.hash='#lessons'; route(); }); await p.waitForTimeout(150);
const home=await p.evaluate(()=>({cps:lpCps(),rows:[...document.querySelectorAll('.lp-cp')].map(x=>[+x.dataset.cp,x.disabled]),lessons:document.querySelectorAll('.lesson-btn[data-lesson]').length,N:LESSONS.length,pill:document.querySelector('.lesson-btn[data-lesson] .pill').textContent}));
T('lesson list: a checkpoint row after every five lessons, locked until its lessons are done',home.rows.length===home.cps.length&&home.cps.length>=4&&home.rows.every(r=>r[1]===true)&&home.lessons===home.N&&home.cps[home.cps.length-1]===home.N,home);
T('lesson list: the time label is honest (~15 min)',/15 min/.test(home.pill),home.pill);
// drive lesson 2 (greetings): answer everything right; making questions by building or typing the card
const ID='greetings';
await p.evaluate(id=>showLesson(id),ID); await p.waitForTimeout(150);
const txt=await p.evaluate(()=>({mini:document.getElementById('miniDrill').textContent,entry:document.getElementById('pracEntry').textContent}));
T('lesson page says the practice set is part of finishing',/practice set/.test(txt.mini)&&/Last step/.test(txt.entry),txt);
const step=()=>p.evaluate(id=>{ const root=document.getElementById('lessonBody'); if(S.drills&&S.drills[id]&&!root.querySelector('.qbody')) return 'done';
  const card=root.querySelector('.mdCard'); if(card){ const bs=[...card.querySelectorAll('button:not([disabled])')]; const g=bs[bs.length-1]; if(g){ g.click(); return 'card'; } return 'wait'; }
  const qb=root.querySelector('.qbody'); if(qb){ const nx=qb.querySelector('.next'); if(nx&&!nx.hidden){ nx.click(); return 'next'; } const ans=qb.dataset.ans, lq=qb.querySelector('.lpq');
    if(lq){ window.__modes=window.__modes||{}; const m=lq.dataset.mode; window.__modes[m]=(window.__modes[m]||0)+1; if(lq.querySelector('.qrom')) window.__lpRom=1;
      if(m==='tiles'||m==='letters'){ const need=m==='tiles'?ans.trim().split(/\s+/):[...ans.trim()]; for(const w of need){ const c=[...qb.querySelectorAll('.lp-pool .chip')].find(x=>x.textContent===w); if(!c) return 'notile:'+w; c.click(); } qb.querySelector('.lp-chk').click(); return 'make'; }
      if(m==='input'){ const f=lq.querySelector('.lp-form'); f.querySelector('.ans').value=ans; f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); return 'make'; }
      return 'mode?'+m; }
    const o=[...qb.querySelectorAll('.opt:not([disabled])')].find(x=>x.dataset.a===ans); if(o){ window.__picks=(window.__picks||0)+1; o.click(); return 'pick'; } const rc=qb.querySelector('.rcshow'); if(rc&&!rc.hidden){ rc.click(); return 'rc'; } const y=qb.querySelector('.rcyes,.rcok,[data-rc="1"]'); if(y){ y.click(); return 'rcy'; } qb.click(); return 'tap'; }
  const bx=root.querySelector('.lsbtns .lsnext'); if(bx){ bx.click(); return 'round'; }
  document.getElementById('miniStart').click(); return 'start'; },ID);
let n=0, last=''; const seen={}; for(;n<1500;n++){ last=await step(); seen[last]=(seen[last]||0)+1; if(last==='done'||/^notile|^mode\?/.test(last)) break; await p.waitForTimeout(last==='wait'?120:25); }
const afterDecks=await p.evaluate(id=>({drill:!!(S.drills||{})[id],done:!!S.lessons[id],modes:window.__modes||{},picks:window.__picks||0,rom:window.__lpRom||0,hid:Object.keys(S.cards).filter(k=>k[0]==='§').length,lsec:(S.lsec||{})[id]}),ID);
T('lesson decks and review drive to the end with every making question answered right',last==='done'&&afterDecks.drill,{last,n,seen});
T('new cards were asked by making them: tiles for sentences and typing for words',(afterDecks.modes.tiles||0)>=5&&(afterDecks.modes.input||0)>=5&&afterDecks.picks>=10,afterDecks);
T('making questions show no pronunciation line',afterDecks.rom===0);
T('the card is said after a making answer',await p.evaluate(()=>window.__said.length>10));
// quick check: pass it; the lesson is still not done, the practice set is the last step
await p.evaluate(id=>{ S.checks=S.checks||{}; S.checks[id]=1; save(); showLesson(id); },ID); await p.waitForTimeout(120);
const mid=await p.evaluate(id=>({done:!!S.lessons[id],need:lpPracNeeded(id),btn:document.getElementById('pracStart').className}),ID);
T('check and review passed: the lesson is not done yet and the practice button leads',!mid.done&&mid.need&&/primary/.test(mid.btn),mid);
// practice set: answer through the engine (first item wrong twice, the rest right)
await p.click('#pracStart'); await p.waitForTimeout(100);
const pr=await p.evaluate(()=>{ const N=PR.items.length; for(let i=0;i<N;i++){ if(i===0){ pracAnswer(false); pracAnswer(false); } else pracAnswer(true); pracItem(); document.querySelector('#pracRun .prac-next').click(); } return {N,end:!!document.querySelector('#pracRun .prac-end')}; });
const fin=await p.evaluate(id=>({done:!!S.lessons[id],miss:(S.pmiss||{})[id],n:((S.practice||{})[id]||{}).n,need:lpPracNeeded(id)}),ID);
T('finishing the practice set finishes the lesson, with no pass mark',pr.end&&fin.done&&fin.n===1&&!fin.need,{pr,fin});
T('the items missed on the first try are remembered for the checkpoint',Array.isArray(fin.miss)&&fin.miss.length===1&&fin.miss[0]===0,fin.miss);
// ---- solution 2: lesson sentences come back
const s2=await p.evaluate(()=>{ const hid=Object.keys(S.cards).filter(k=>k[0]==='§'); const before=lpSentDue().length, d0=dueCount(); hid.forEach(k=>{ S.cards[k].due=dayNum()-1; }); memoClear&&memoClear(); const due=lpSentDue(); return {hid:hid.length,before,d0,due:due.length,d1:dueCount(),left:lpSentLeft(),stage:due.map(x=>lpSentStage(x.d,x.c))}; });
T('lesson-only cards are scheduled: none due on the day they are learned, due later, capped per day',s2.hid>=4&&s2.before===0&&s2.due>0&&s2.due<=10&&s2.d1===s2.d0+s2.due,s2);
await p.evaluate(()=>{ deck=ALLDUE; cardsMode='due'; location.hash='#review'; route(); }); await p.waitForTimeout(250);
const rv=await p.evaluate(()=>({sent:queue.filter(x=>x.sent).length,total:queue.length}));
T('Review (all due) carries the due lesson sentences',rv.sent===s2.due&&rv.sent>0,rv);
const rvStep=()=>p.evaluate(()=>{ const st=document.getElementById('cardsStage'), cur=queue[qi]; if(!cur) return 'end'; if(!cur.sent) return 'card'; const lq=st.querySelector('.lpq'); if(!lq) return 'nolpq'; const nx=st.querySelector('.next'); if(nx&&!nx.hidden){ nx.click(); return 'next'; }
  const m=lq.dataset.mode, ans=cur.c[0].trim(); window.__rvModes=window.__rvModes||{}; window.__rvModes[m]=1;
  if(m==='tiles'||m==='letters'){ const need=m==='tiles'?ans.split(/\s+/):[...ans]; for(const w of need){ const c=[...st.querySelectorAll('.lp-pool .chip')].find(x=>x.textContent===w); if(!c) return 'notile'; c.click(); } st.querySelector('.lp-chk').click(); return 'make'; }
  if(m==='gap'){ const words=ans.split(/\s+/), shown=lq.querySelector('.q').textContent.replace(/ /g,'').trim().split(/\s+/); let g=''; words.forEach((w,i)=>{ if(shown[i]!==w&&!g) g=lpCore(w); }); const f=lq.querySelector('.lp-form'); if(f){ f.querySelector('.ans').value=g; f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); return 'gap'; } const o=[...lq.querySelectorAll('.opt')].find(x=>x.textContent===g); if(o){ o.click(); return 'gap'; } return 'nogap:'+g; }
  const f=lq.querySelector('.lp-form'); f.querySelector('.ans').value=ans; f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true})); return 'make'; });
let r=''; for(let i=0;i<200;i++){ r=await rvStep(); if(r==='end'||r==='card'||/^no/.test(r)) break; await p.waitForTimeout(25); }
const rvEnd=await p.evaluate(()=>({left:lpSentDue().length,day:S.lpDay,modes:window.__rvModes||{},due:Object.keys(S.cards).filter(k=>k[0]==='§'&&S.cards[k].due<=dayNum()).length}));
T('the due sentences are answered by making them and leave the due list',(r==='end'||r==='card')&&rvEnd.left===0&&rvEnd.day&&rvEnd.day.n===s2.due,{r,rvEnd});
// stages: gap and typed as memory grows
const stg=await p.evaluate(()=>{ const k=Object.keys(S.cards).filter(k=>k[0]==='§'); const all=[]; LESSONS.slice(0,3).forEach(l=>lsPlan(l).all.forEach(x=>{ if(lsHid(ck(x.d,x.c))&&lpWords(x.c).length>=3&&S.cards[ck(x.d,x.c)]) all.push(x); })); const x=all[0]; const s=S.cards[ck(x.d,x.c)]; const out=[]; [1,4,20].forEach(v=>{ s.st=v; out.push(lpSentStage(x.d,x.c)); }); const box=document.createElement('div'); document.body.appendChild(box); const res=[]; ['gap','input'].forEach(m=>{ const cl=renderMakeQ(box,x.d,x.c,()=>{},{stage:m}); res.push(box.querySelector('.lpq').dataset.mode+(box.querySelector('.lp-gap')?'+gap':'')); cl(); }); S.kbTiles=!S.kbTiles; const cl=renderMakeQ(box,x.d,x.c,()=>{},{stage:'gap'}); res.push('tiles-pref:'+box.querySelectorAll('.opt').length); cl(); S.kbTiles=!S.kbTiles; box.remove(); return {out,res}; });
T('a sentence is asked as tiles, then a gap, then typed as its memory grows',stg.out.join()==='tiles,gap,input'&&stg.res[0]==='gap+gap'&&stg.res[1]==='input'&&stg.res[2]==='tiles-pref:4',stg);
// ---- solution 3: sessions
const ses=await p.evaluate(()=>{ Object.keys(S.cards).filter(k=>k[0]==='§').slice(0,3).forEach(k=>{ S.cards[k].due=dayNum()-1; }); S.lpDay=null; S.sessLen='standard'; const quiet=planSession().map(x=>x.t+(x.mode?':'+x.mode:'')); koVoice={name:'test',lang:'es-MX'}; const loud=planSession().map(x=>x.t+(x.mode?':'+x.mode:'')); return {quiet,loud}; });
const cnt=(a,re)=>a.filter(x=>re.test(x)).length;
T('a standard session brings back due lesson sentences',cnt(ses.loud,/^sent$/)>=1&&cnt(ses.loud,/^sent$/)<=2,ses.loud);
T('a standard session has two audio-first questions and a dialogue when a voice exists',cnt(ses.loud,/^quiz:listen$|^hear/)>=2&&cnt(ses.loud,/^listen$/)===1,ses.loud);
T('without a voice the session asks nothing by ear',cnt(ses.quiet,/listen|^hear/)===0,ses.quiet);
// ---- solution 5: pronunciation line
const rom=await p.evaluate(()=>{ const o={}; delete S.quizRom; delete S.lessons[LESSONS[0].id]; applyQuizRom(); o.before=[quizRomOn(),document.body.classList.contains('noqrom')]; S.lessons[LESSONS[0].id]=1; applyQuizRom(); o.after=[quizRomOn(),document.body.classList.contains('noqrom')]; setQuizRom(!quizRomOn()); o.tapped=[quizRomOn(),S.quizRom]; setQuizRom(!quizRomOn()); o.again=[quizRomOn(),S.quizRom]; delete S.quizRom; applyQuizRom(); return o; });
T('pronunciation line in quizzes: on before the sounds lesson, off after it, and a tap brings it back',rom.before[0]===true&&rom.before[1]===false&&rom.after[0]===false&&rom.after[1]===true&&rom.tapped[0]===true&&rom.tapped[1]===true&&rom.again[0]===false,rom);
// ---- solution 4: checkpoint
await p.evaluate(()=>{ LESSONS.slice(0,5).forEach(l=>{ S.lessons[l.id]=1; }); S.pmiss=S.pmiss||{}; S.pmiss[LESSONS[2].id]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]; save(); location.hash='#lessons'; openLesson=null; route(); }); await p.waitForTimeout(150);
const cp=await p.evaluate(()=>{ const rows=[...document.querySelectorAll('.lp-cp')].map(x=>[+x.dataset.cp,x.disabled]); let w=0,tot=0; for(let i=0;i<40;i++){ lpCpItems(5).forEach(it=>{ if(it.les){ tot++; if(it.les===LESSONS[2].id) w++; } }); } const it=lpCpItems(5); return {rows,n:it.length,types:it.map(x=>x.cando?'cando':x.t),share:w/tot,les:[...new Set(it.map(x=>x.les).filter(Boolean))].length,cta:lpCpCta(LESSONS[4].id).length>0}; });
T('checkpoint 5 opens once lessons 1 to 5 are done; later ones stay locked',cp.rows[0][0]===5&&cp.rows[0][1]===false&&cp.rows[1][1]===true,cp.rows);
T('a checkpoint is about 20 mixed items from several lessons and ends on two can-do replies',cp.n>=18&&cp.n<=20&&cp.les>=4&&cp.types.slice(-2).join()==='cando,cando'&&cp.cta,cp);
T('missed items are drawn more often (the lesson missed in full gets the largest share)',cp.share>0.255,cp.share);
await p.click('.lp-cp[data-cp="5"]'); await p.waitForTimeout(120);
const run=await p.evaluate(()=>{ const head=document.querySelector('#pracRun .prac-kind').textContent; const N=PR.items.length, cpn=PR.cp; const miss=PR.items[1]; for(let i=0;i<N;i++){ if(i===1){ pracAnswer(false); pracAnswer(false); } else pracAnswer(true); pracItem(); document.querySelector('#pracRun .prac-next').click(); } const end=document.querySelector('#pracRun .prac-end'); return {head,cpn,N,end:!!end,link:end?end.querySelectorAll('.prac-les').length:0,saved:(S.practice||{})['cp:5'],missLes:miss.les,inMiss:((S.pmiss||{})[miss.les]||[]).indexOf(miss.ki)>=0,cleared:(S.pmiss[LESSONS[2].id]||[]).length<14}; });
T('the checkpoint runs in the practice engine, saves its score, and a missed item links to its lesson',/Checkpoint/.test(run.head)&&run.end&&run.link===1&&run.saved&&run.saved.n===1&&run.inMiss&&run.cleared,run);
await p.click('#pracRun .prac-les'); await p.waitForTimeout(120);
T('the link opens that lesson',await p.evaluate(id=>openLesson===id&&!document.getElementById('lessonBody').hidden,run.missLes));
// saved state survives cleaning and a merge
const st=await p.evaluate(()=>{ S.lpDay={d:dkey(),n:2}; const a=sanitizeState(JSON.parse(JSON.stringify(S))); const m=mergeState(JSON.parse(JSON.stringify(S)),JSON.parse(JSON.stringify(S))); return {pm:Object.keys(a.pmiss||{}).length,cp:!!(a.practice||{})['cp:5'],mpm:Object.keys(m.pmiss||{}).length,day:a.lpDay&&a.lpDay.n>=0}; });
T('missed lists, checkpoint scores and the day count survive cleaning and a merge',st.pm>=2&&st.cp&&st.mpm>=2&&st.day,st);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

// PM-1: Practice has four modes, the deck picker is two dropdowns, Change deck works while Learn or the blitz runs, "Just learn" skips the quiz,
// the Practice options live in the Settings sheet, and "Dating deeper" is "Intimate" with its progress kept. Run: node tools/tests/practicemodes.js   (needs ./build.sh first)
// SHOTS=<dir> also writes screenshots there.
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'pm-')),'page.html'); const SHOTS=process.env.SHOTS||'';
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch();
for(const [tag,vw,vh,dsf] of [['desktop',800,820,2],['phone',390,800,2],['narrow',320,640,1]]){
const ctx=await b.newContext({viewport:{width:vw,height:vh},deviceScaleFactor:dsf}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; S.welcomed=1; S.free=true; speak=function(){}; location.hash='#practice'; });
await p.waitForTimeout(300); await p.evaluate(()=>{ document.querySelectorAll('.welcome,#welcome,.sheet').forEach(x=>x.remove()); });
const shot=async n=>{ if(SHOTS) await p.screenshot({path:path.join(SHOTS,n+'-'+tag+'.png')}); };
const tick=ms=>p.waitForTimeout(ms||120);
const wide=()=>p.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth+1);

/* 1. the start screen */
const home=await p.evaluate(()=>{ const v=document.getElementById('v-quiz'), on=x=>!!x&&x.offsetParent!==null; return {
  big:[...v.querySelectorAll('#quizSetup button.big')].filter(on).map(x=>x.textContent.trim()), adv:v.querySelectorAll('.advbtn,[data-adv]').length, test:!!document.getElementById('quizStart'),
  tags:[...v.querySelectorAll('#tagPick .chip')].filter(on).length, tagN:Object.keys(TAGS).length, jl:on(document.getElementById('justLearn')), head:document.querySelector('#pickHeadP button').textContent.trim(),
  inSheet:['quizModes','quizRom','regStart'].every(i=>{ const e=document.getElementById(i); return e&&!!e.closest('#setPractice')&&!on(e); }) }; });
T(tag+' four ways to practice, nothing else',JSON.stringify(home.big)===JSON.stringify(['Learn','Weak spots','⚡ 2-minute blitz','📝 Exam'])||JSON.stringify(home.big)===JSON.stringify(['Learn','Weak spots · 0','⚡ 2-minute blitz','📝 Exam']),home.big);
T(tag+' no More options, no Test everything',home.adv===0&&!home.test,home);
T(tag+' hashtags always shown',home.tags===home.tagN&&home.tagN>0,home);
T(tag+' Just learn switch on the page',home.jl);
T(tag+' question type, romanization and the drill are in Settings, not on the page',home.inSheet);
T(tag+' start screen does not scroll sideways',!(await wide()));
await shot('practice-home');

/* 2. two dropdowns */
await p.click('#pickHeadP button'); await tick();
const dd=await p.evaluate(()=>{ const q=document.getElementById('quizDecks'), [c,d]=q.querySelectorAll('select'); return { n:q.querySelectorAll('select').length, chips:q.querySelectorAll('.chip:not([style*="accent"])').length,
  cats:[...c.options].map(o=>o.textContent), sel:c.value, groups:GROUPS.filter(g=>g[1].some(n=>DECKS[n])).map(g=>g[0]), }; });
T(tag+' the picker is two dropdowns',dd.n===2,dd.n);
T(tag+' Category lists All categories and every group',dd.cats[0]==='All categories'&&JSON.stringify(dd.cats.slice(1))===JSON.stringify(dd.groups),dd.cats);
T(tag+' the picker opens on the category of the picked deck',dd.sel==='Everyday',dd.sel);
await shot('practice-picker');
await p.selectOption('#quizDecks select[data-pick="cat"]',''); await tick();
const every=await p.evaluate(()=>[[...document.querySelector('#quizDecks select[data-pick="deck"]').options].filter(o=>o.value).length, GROUPS.flatMap(g=>g[1]).filter(n=>DECKS[n]).length]);
T(tag+' with All categories every deck is listed',every[0]===every[1]&&every[1]>50,every);
await p.selectOption('#quizDecks select[data-pick="cat"]','Social'); await tick();
const soc=await p.evaluate(()=>{ const d=document.querySelector('#quizDecks select[data-pick="deck"]'); return { opts:[...d.options].filter(o=>!o.hidden).map(o=>o.value), want:GROUPS.find(g=>g[0]==='Social')[1], intimate:!!DECKS['Intimate'], old:!!DECKS['Dating deeper'], open:!document.getElementById('quizDecks').classList.contains('collapsed') }; });
T(tag+' Deck is filtered by the category, with "all decks" on top',soc.opts[0]==='*all*'&&JSON.stringify(soc.opts.slice(1))===JSON.stringify(soc.want)&&soc.open,soc.opts);
T(tag+' "Dating deeper" is "Intimate"',soc.intimate&&!soc.old&&soc.want.includes('Intimate'));
await p.selectOption('#quizDecks select[data-pick="deck"]','Intimate'); await tick();
const one=await p.evaluate(()=>({sel:[...qSel], title:document.querySelector('#pickHeadP b').textContent, closed:document.getElementById('quizDecks').classList.contains('collapsed')}));
T(tag+' picking a deck selects it and closes the picker',JSON.stringify(one.sel)==='["Intimate"]'&&one.title==='Intimate'&&one.closed,one);
await p.click('#pickHeadP button'); await tick(); await p.selectOption('#quizDecks select[data-pick="cat"]','Social'); await tick(); await p.selectOption('#quizDecks select[data-pick="deck"]','*all*'); await tick();
const allc=await p.evaluate(()=>({n:qSel.size, want:GROUPS.find(g=>g[0]==='Social')[1].length, title:document.querySelector('#pickHeadP b').textContent}));
T(tag+' "All decks in this category" selects the whole category',allc.n===allc.want&&/decks selected/.test(allc.title),allc);
await p.evaluate(()=>{ [...document.querySelectorAll('#tagPick .chip')].find(x=>/dating/.test(x.textContent)).click(); }); await tick();
const tg=await p.evaluate(()=>({sel:[...qSel].sort(), want:TAGS.dating.filter(d=>DECKS[d]).sort()}));
T(tag+' a hashtag still selects its decks in one tap',JSON.stringify(tg.sel)===JSON.stringify(tg.want)&&tg.want.includes('Intimate'),tg);

/* 3. Learn, then Change deck in the middle of it */
await p.evaluate(()=>{ qSel=new Set(['Hangul vowels']); S.learnPos={}; S.justLearn=false; quizChips(); document.getElementById('learnStart').click(); }); await tick();
const run1=await p.evaluate(()=>({bar:!document.getElementById('runBar').hidden, name:document.getElementById('runDeckN').textContent, head:document.querySelector('#quizRun .stat').textContent}));
T(tag+' Change deck is shown while Learn runs',run1.bar&&run1.name==='Hangul vowels'&&/Hangul vowels/.test(run1.head),run1);
await shot('learn-change-deck');
await p.click('#runDeck'); await tick();
const sheet=await p.evaluate(()=>{ const s=document.getElementById('runSheet'); return s?{sel:s.querySelectorAll('select').length, tags:s.querySelectorAll('[data-tags] .chip').length}:null; });
T(tag+' the sheet holds the hashtags and the two dropdowns',!!sheet&&sheet.sel===2&&sheet.tags>0,sheet);
T(tag+' sheet does not scroll sideways',!(await wide()));
await tick(300); await shot('change-deck-sheet');
await p.selectOption('#runSheet select[data-pick="cat"]','Social'); await tick(); await p.selectOption('#runSheet select[data-pick="deck"]','Intimate'); await tick(200);
const run2=await p.evaluate(()=>({sheet:!!document.getElementById('runSheet'), sel:[...qSel], bar:!document.getElementById('runBar').hidden, name:document.getElementById('runDeckN').textContent, head:document.querySelector('#quizRun .stat').textContent, setup:document.getElementById('quizSetup').hidden}));
T(tag+' picking a deck restarts Learn on it',!run2.sheet&&JSON.stringify(run2.sel)==='["Intimate"]'&&run2.bar&&run2.name==='Intimate'&&/card 1 of \d+ · Intimate/.test(run2.head)&&run2.setup,run2);

/* 4. Just learn: five cards, no quiz, position saved */
await p.evaluate(()=>{ backToSetup(); const j=document.getElementById('justLearn'); j.checked=true; j.dispatchEvent(new Event('change',{bubbles:true})); qSel=new Set(['Hangul vowels']); S.learnPos={}; quizChips(); document.getElementById('learnStart').click(); }); await tick();
for(let i=0;i<5;i++){ await p.evaluate(()=>{ const a=document.querySelector('#quizRun [data-ans="1"]'); if(a) a.click(); }); await tick(260); }
const jl=await p.evaluate(()=>({on:S.justLearn===true, quiz:!!document.querySelector('#quizRun .qbody'), btns:[...document.querySelectorAll('#qBtns button')].map(x=>x.textContent), pos:S.learnPos['Hangul vowels'], note:(document.querySelector('#quizRun .note')||{}).textContent}));
T(tag+' Just learn: after five cards there is no quiz',jl.on&&!jl.quiz&&JSON.stringify(jl.btns)===JSON.stringify(['Next 5 cards','Review these 5 again'])&&jl.pos===5&&/Round 1 of \d+ · saved/.test(jl.note||''),jl);
await shot('just-learn-round');
await p.evaluate(()=>{ document.querySelector('#qBtns button').click(); }); await tick();
const jl2=await p.evaluate(()=>document.querySelector('#quizRun .stat').textContent);
T(tag+' Just learn: Next 5 cards shows card 6',/card 6 of/.test(jl2),jl2);
await p.evaluate(()=>{ backToSetup(); const j=document.getElementById('justLearn'); j.checked=false; j.dispatchEvent(new Event('change',{bubbles:true})); S.learnPos={}; quizChips(); document.getElementById('learnStart').click(); }); await tick();
for(let i=0;i<5;i++){ await p.evaluate(()=>{ const a=document.querySelector('#quizRun [data-ans="1"]'); if(a) a.click(); }); await tick(260); }
T(tag+' with the switch off the quiz follows the five cards',await p.evaluate(()=>!!document.querySelector('#quizRun .qbody')));

/* 5. blitz: Change deck stops the old timer and starts a new run */
await p.evaluate(()=>{ backToSetup(); window.__iv=0; const si=setInterval, ci=clearInterval; window.__live=new Set(); setInterval=function(f,t){ const id=si(f,t); if(t===250) window.__live.add(id); return id; }; clearInterval=function(id){ window.__live.delete(id); return ci(id); }; document.getElementById('blitzStart').click(); }); await tick();
const bz1=await p.evaluate(()=>({bar:!document.getElementById('runBar').hidden, live:window.__live.size}));
await p.click('#runDeck'); await tick(); await p.selectOption('#runSheet select[data-pick="cat"]','Social'); await tick(); await p.selectOption('#runSheet select[data-pick="deck"]','Intimate'); await tick(200);
const bz2=await p.evaluate(()=>({live:window.__live.size, sel:[...qSel], tl:(document.querySelector('#quizRun .tl')||{}).textContent, bar:!document.getElementById('runBar').hidden}));
T(tag+' blitz: Change deck restarts the two minutes on the new deck with one timer',bz1.bar&&bz1.live===1&&bz2.live===1&&JSON.stringify(bz2.sel)==='["Intimate"]'&&/^1(20|19)s$/.test(bz2.tl||'')&&bz2.bar,[bz1,bz2]);
await p.evaluate(()=>{ location.hash='#today'; }); await tick(200);
T(tag+' blitz: leaving the page stops the timer',await p.evaluate(()=>window.__live.size===0));
await p.evaluate(()=>{ location.hash='#practice'; }); await tick(200); await p.evaluate(()=>{ backToSetup(); });

/* 6. PM-4: every way to practice asks only the picked decks, and has Back and Change deck */
const on2=i=>p.evaluate(i=>{ const e=document.getElementById(i); return !!e&&e.offsetParent!==null; },i);
await p.evaluate(()=>{ if(!window.__wrapQ){ window.__wrapQ=1; const oq=renderQuizQ; renderQuizQ=function(c,d,card,m,cb){ window.__asked.push(d); window.__cb=cb; return oq(c,d,card,m,cb); }; const of=renderFlashcard; renderFlashcard=function(c,d,card,cb){ window.__asked.push(d); window.__fcb=cb; return of(c,d,card,cb); }; } window.__asked=[];
  /* cards in three decks need practice, so a mode that looked beyond the picked deck would show them */ ['Survival phrases','Intimate','Hangul consonants','Hangul vowels'].forEach(k=>DECKS[k].slice(0,6).forEach(c=>{ grade(k,c,false,true,'self'); })); memoClear(); qSel=new Set(['Hangul vowels']); S.learnPos={}; quizChips(); });
const only=(l,set)=>l.length>0&&l.every(d=>set.includes(d));
/* exam */
await p.evaluate(()=>{ window.__asked=[]; }); await p.click('#examStart'); await tick();
T(tag+' the exam has Back and Change deck',await on2('runBack')&&await on2('runDeck'));
await shot('exam-back'); T(tag+' exam round does not scroll sideways',!(await wide()));
for(let i=0;i<24;i++){ await p.evaluate(()=>window.__cb(true)); await tick(15); }
const ex=await p.evaluate(()=>({asked:window.__asked.slice(), head:document.querySelector('#quizRun .stat').textContent, n:DECKS['Hangul vowels'].length}));
T(tag+' the exam asks 25 questions, all from the picked deck (Hangul vowels, '+ex.n+' cards)',ex.asked.length===25&&only(ex.asked,['Hangul vowels'])&&/25\/25/.test(ex.head),[ex.asked.length,[...new Set(ex.asked)],ex.head]);
await p.evaluate(()=>window.__cb(true)); await tick();
T(tag+' the exam ends with its report',await p.evaluate(()=>!!document.getElementById('exBack')));
await p.evaluate(()=>{ backToSetup(); window.__asked=[]; }); await p.click('#examStart'); await tick(); await p.click('#runDeck'); await tick(); await p.selectOption('#runSheet select[data-pick="cat"]','Social'); await tick(); await p.selectOption('#runSheet select[data-pick="deck"]','Intimate'); await tick(200);
for(let i=0;i<5;i++){ await p.evaluate(()=>window.__cb(true)); await tick(15); }
const ex2=await p.evaluate(()=>({asked:window.__asked.slice(), head:document.querySelector('#quizRun .stat').textContent}));
T(tag+' exam: Change deck starts a new exam on the new deck',/Exam/.test(ex2.head)&&only(ex2.asked.slice(1),['Intimate'])&&ex2.asked[0]==='Hangul vowels',[ex2.head,ex2.asked]);
await p.click('#runBack'); await tick();
T(tag+' Back returns to the Practice start screen',await p.evaluate(()=>document.getElementById('quizRun').hidden&&!document.getElementById('quizSetup').hidden)&&!(await on2('runBar')));
/* weak spots */
await p.evaluate(()=>{ qSel=new Set(['Hangul vowels']); quizChips(); window.__asked=[]; });
const wkN=await p.evaluate(()=>({btn:document.getElementById('weakStart').textContent, picked:weakPicked().length, all:weakAll().length}));
T(tag+' Weak spots counts the picked deck only',wkN.picked===6&&wkN.all>=24&&wkN.btn==='Weak spots · 6',wkN);
await p.click('#weakStart'); await tick();
T(tag+' Weak spots has Back and Change deck',await on2('runBack')&&await on2('runDeck'));
for(let i=0;i<40;i++){ const more=await p.evaluate(()=>{ if(document.querySelector('#qBtns')) return false; window.__cb(true); return true; }); if(!more) break; await tick(15); }
const wk=await p.evaluate(()=>window.__asked.slice());
T(tag+' Weak spots asks only cards of the picked deck',wk.length>=6&&only(wk,['Hangul vowels']),[wk.length,[...new Set(wk)]]);
await p.evaluate(()=>{ backToSetup(); qSel=new Set(['Hangul · advanced']); quizChips(); });
T(tag+' Weak spots is off when the picked deck has nothing to practice',await p.evaluate(()=>document.getElementById('weakStart').disabled&&document.getElementById('weakStart').textContent==='Weak spots'));
/* blitz and learn */
await p.evaluate(()=>{ qSel=new Set(['Hangul vowels']); quizChips(); window.__asked=[]; }); await p.click('#blitzStart'); await tick();
for(let i=0;i<30;i++){ await p.evaluate(()=>window.__cb(true)); await tick(10); }
const bz=await p.evaluate(()=>window.__asked.slice());
T(tag+' the blitz asks only cards of the picked deck',bz.length>=30&&only(bz,['Hangul vowels']),[...new Set(bz)]);
await p.evaluate(()=>{ backToSetup(); window.__asked=[]; S.learnPos={}; S.justLearn=false; quizChips(); }); await p.click('#learnStart'); await tick();
for(let i=0;i<5;i++){ await p.evaluate(()=>window.__fcb(true)); await tick(15); }
for(let i=0;i<60;i++){ const more=await p.evaluate(()=>{ if(document.querySelector('#qBtns')) return false; window.__cb(true); return true; }); if(!more) break; await tick(15); }
const ln=await p.evaluate(()=>window.__asked.slice());
T(tag+' Learn shows and quizzes only cards of the picked deck',ln.length>=10&&only(ln,['Hangul vowels']),[ln.length,[...new Set(ln)]]);
T(tag+' Learn has both Back and Change deck',await on2('runBack')&&await on2('runDeck'));
/* several decks picked: nothing outside them */
await p.evaluate(()=>{ backToSetup(); qSel=new Set(['Hangul vowels','Intimate']); quizChips(); window.__asked=[]; }); await p.click('#examStart'); await tick();
for(let i=0;i<24;i++){ await p.evaluate(()=>window.__cb(true)); await tick(10); }
const ex3=await p.evaluate(()=>window.__asked.slice());
T(tag+' exam with two decks picked asks those two only',ex3.length===25&&only(ex3,['Hangul vowels','Intimate'])&&new Set(ex3).size===2,[...new Set(ex3)]);
await p.evaluate(()=>{ backToSetup(); qSel=new Set(['Hangul vowels']); S.learnPos={}; quizChips(); });

/* 7. Settings on Practice */
await p.click('#setBtn'); await tick();
const st=await p.evaluate(()=>{ const on=x=>!!x&&x.offsetParent!==null; return {modes:[...document.querySelectorAll('#quizModes .chip')].filter(on).length, rom:on(document.getElementById('quizRom')), deck:on(document.getElementById('cmDue'))}; });
T(tag+' Settings on Practice shows the question type and the romanization switch, not the deck-page controls',st.modes>=3&&st.rom&&!st.deck,st);
T(tag+' Settings does not scroll sideways',!(await wide()));
await tick(300); await shot('practice-settings');
await p.evaluate(()=>{ document.querySelector('#quizModes [data-mode="read"]').click(); }); await tick();
T(tag+' the question type chosen in Settings is used',await p.evaluate(()=>qMode==='read'&&!document.getElementById('setSheet').hidden));
await p.evaluate(()=>{ document.querySelector('#quizModes [data-mode="mixed"]').click(); closeSet(); });
await p.evaluate(()=>{ location.hash='#review'; }); await tick(250); await p.click('#setBtn'); await tick();
T(tag+' Settings on Review does not show the Practice options',await p.evaluate(()=>document.getElementById('setPractice').offsetParent===null&&document.getElementById('cmDue').offsetParent!==null));
await p.evaluate(()=>closeSet());

/* 8. Review uses the same two dropdowns */
await p.click('#pickHeadR button'); await tick();
const rv=await p.evaluate(()=>{ const q=document.getElementById('decks'), d=q.querySelector('select[data-pick="deck"]'); return {n:q.querySelectorAll('select').length, first:d&&d.options[0].value===ALLDUE, tags:q.querySelectorAll('.chip').length>=Object.keys(TAGS).length}; });
T(tag+' Review: two dropdowns, All due on top, hashtags kept',rv.n===2&&rv.first&&rv.tags,rv);
await shot('review-picker');
await p.selectOption('#decks select[data-pick="cat"]','Social'); await tick(); await p.selectOption('#decks select[data-pick="deck"]','Intimate'); await tick(200);
T(tag+' Review: picking a deck opens it',await p.evaluate(()=>deck==='Intimate'&&document.querySelector('#pickHeadR b').textContent==='Intimate'&&document.getElementById('decks').classList.contains('collapsed')));
T(tag+' Review does not scroll sideways',!(await wide()));

/* 9. progress saved under the old deck name moves to the new one */
const mig=await p.evaluate(()=>{ const c=DECKS['Intimate'][0][0], s=sanitizeState({cards:{['Dating deeper|'+c]:{box:3},'Flirting|x':{box:1}}, hist:{'Dating deeper':[80]}, quiz:{'Dating deeper':1}, learnPos:{'Dating deeper':10,'Dating deeper+Flirting':5,'Zebra+Dating deeper':5}, blitz:{'Dating deeper':40}, custom:[]});
  return {card:!!s.cards['Intimate|'+c]&&!s.cards['Dating deeper|'+c]&&!!s.cards['Flirting|x'], hist:JSON.stringify(s.hist), quiz:s.quiz.Intimate===1, lp:JSON.stringify(s.learnPos), bz:s.blitz.Intimate===40}; });
T(tag+' saved progress of "Dating deeper" is kept under "Intimate"',mig.card&&mig.hist==='{"Intimate":[80]}'&&mig.quiz&&mig.lp==='{"Intimate":10,"Flirting+Intimate":5,"Intimate+Zebra":5}'&&mig.bz,mig);
T(tag+' no page errors',errs.length===0,errs.slice(0,3));
await ctx.close(); }
await b.close(); console.log(fail?fail+' FAILED':'all pass'); process.exit(fail?1:0);
})();

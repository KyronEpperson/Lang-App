// Test harness for korean-flashcards.html — run: node harness.js
const {chromium}=require('playwright');const fs=require('fs');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html', OUT='/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/page.html';
(async()=>{
const h=fs.readFileSync(SRC,'utf8'); const res={errors:[],overflow:[],checks:{}};
try{ new Function(h.match(/<script>([\s\S]*)<\/script>/)[1]); res.checks.syntax='ok'; }catch(e){ res.checks.syntax='FAIL '+e.message; res.errors.push('SYNTAX '+e.message); }
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+h+'</body></html>');
const b=await chromium.launch();
for(const [w,scheme] of [[390,'dark'],[1024,'light']]){
  const ctx=await b.newContext({viewport:{width:w,height:800},colorScheme:scheme,hasTouch:w<500,isMobile:w<500}); const p=await ctx.newPage();
  p.on('pageerror',e=>res.errors.push(w+' PAGEERR '+e.message)); p.on('console',m=>{ if(m.type()==='error'&&!/fonts|net::/.test(m.text())) res.errors.push(w+' CONSOLE '+m.text()); });
  await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
  await p.goto('file://'+OUT); await p.waitForTimeout(200); await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; renderToday(); });
  const ov=async l=>{ const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>w) res.overflow.push(w+' '+l+' '+sw); };
  for(const r of ['today','practice','review','lessons','read','progress','feedback']){ await p.evaluate(x=>location.hash='#'+x,r); await p.waitForTimeout(120); await ov(r); }
  if(w===390){
    // data integrity
    Object.assign(res.checks, await p.evaluate(()=>{ const out={}; const all=[]; names.forEach(d=>DECKS[d].forEach(c=>all.push(c[0])));
      out.decks=names.length; out.cards=all.length; const dup=all.filter((x,i)=>all.indexOf(x)!==i); out.dupCardsAcrossDecks=[...new Set(dup)];
      out.allDecksGrouped=Object.keys(DECKS).every(d=>PATH.includes(d)); out.badWords=[...WORDS_CV,...WORDS_F].filter(w=>!answersFor(w));
      out.emptyFields=all.length-names.reduce((n,d)=>n+DECKS[d].filter(c=>c.length===4&&c.every(x=>x&&x.trim())).length,0);
      const q=buildQuiz(DECKS['Survival phrases'].map(c=>({d:'Survival phrases',c})),'mixed'); const cnt={}; q.forEach(x=>cnt[x.c[0]]=(cnt[x.c[0]]||0)+1); out.quizEach3=Object.values(cnt).every(v=>v===3)&&!q.some((x,i)=>i&&x.c===q[i-1].c);
      out.lessonDecksExist=LESSONS.every(l=>DECKS[l.deck]); out.untagged=names.filter(d=>d!==MYDECK&&!Object.values(TAGS).some(a=>a.includes(d))); out.patternsUnlinked=PATTERNS.filter(p=>!LESSONS.find(l=>l.id===p[3])).length; return out; }));
    // session flow
    await p.evaluate(()=>location.hash='#today'); await p.waitForTimeout(150); await p.evaluate(()=>document.querySelector('#startSess').click()); await p.waitForTimeout(150);
    let steps=0; for(let i=0;i<60;i++){ const t=await p.evaluate(()=>{ const b=document.querySelector('#sessBody'); if(!b) return 'none'; if(b.querySelector('.rvgo')) return 'teach'; if(b.querySelector('.card')) return 'card'; if(b.querySelector('.opt')) return 'quiz'; if(b.querySelector('input.ans')) return 'hangul'; return 'other'; });
      if(t==='teach'){ await p.evaluate(()=>document.querySelector('#sessBody .rvgo').click()); await p.waitForTimeout(120); continue; }
      if(t==='card'){ await p.evaluate(()=>document.querySelector('#sessBody [data-ans="1"]').click()); await p.waitForTimeout(220); }
      else if(t==='quiz'){ const hasNext=await p.evaluate(()=>{document.querySelector('#sessBody .opt').click();const n=document.querySelector('#sessBody .next');if(n){n.click();return true;}return false;}); if(!hasNext) await p.waitForTimeout(2400); }
      else if(t==='hangul'){ await p.evaluate(()=>{const f=document.querySelector('#sessBody form');document.querySelector('#sessBody input.ans').value='zz';f.requestSubmit();}); await p.waitForTimeout(1900); }
      else break; steps++; }
    res.checks.sessionSteps=steps; res.checks.sessionDone=await p.evaluate(()=>/수고했어요|다음에/.test(document.querySelector('#session').textContent));
    // learn loop
    await p.evaluate(()=>{ location.hash='#practice'; }); await p.waitForTimeout(150); await p.evaluate(()=>document.querySelector('#learnStart').click()); await p.waitForTimeout(100);
    for(let i=0;i<5;i++){ await p.evaluate(()=>document.querySelector('#quizRun [data-ans="1"]').click()); await p.waitForTimeout(220); }
    res.checks.learnQuizHeader=await p.evaluate(()=>document.querySelector('#quizRun .stat').textContent);
    // review swipe
    await p.evaluate(()=>location.hash='#review'); await p.waitForTimeout(150);
    const before=await p.evaluate(()=>document.querySelector('#left').textContent);
    const rv=await p.evaluate(async()=>{ const st=document.querySelector('#cardsStage'); const go=st.querySelector('.rvgo'); const taught=!!go; if(go) go.click(); const n=st.querySelectorAll('.opt').length; const {d,c}=queue[qi]; [...st.querySelectorAll('.opt')].find(o=>o.dataset.a===c[0]).click(); const right=!!st.querySelector('.opt.right'); const box0=(S.cards[ck(d,c)]||{}).box; st.querySelector('.next').click(); await new Promise(r=>setTimeout(r,150)); const s1=S.cards[ck(d,c)];
      const go2=st.querySelector('.rvgo'); if(go2) go2.click(); const x=queue[qi]; [...st.querySelectorAll('.opt')].find(o=>o.dataset.a!==x.c[0]).click(); const wrong=!!st.querySelector('.opt.wrong'); const qlen=queue.length; st.querySelector('.next').click(); await new Promise(r=>setTimeout(r,150));
      return {taught,opts:n,right,graded:!!s1&&s1.box>=2,wrong,requeued:queue.length===qlen+1,noAgainButtons:!document.querySelector('#cardsStage [data-ans]')}; });
    res.checks.reviewMC=rv; if(!(rv.opts===4&&rv.right&&rv.graded&&rv.wrong&&rv.requeued&&rv.noAgainButtons)) res.errors.push('REVIEW MC FAIL '+JSON.stringify(rv));
    res.checks.swipe=before+' -> '+await p.evaluate(()=>document.querySelector('#left').textContent);

    // ---- batch 6–10 feature guards ----
    const g=await p.evaluate(async()=>{ const out={}; S.free=true; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1;
      out.conj=(()=>{ const r=conj('듣다'); return r.polite==='들어요'&&r.future==='들을 거예요'; })();
      out.role=(()=>{ const box=document.createElement('div'); document.body.appendChild(box); renderRoleQ(box,0,()=>{}); const ok=box.querySelectorAll('.opt').length===4; box.remove(); return ok; })();
      out.listen=(()=>{ const box=document.createElement('div'); document.body.appendChild(box); renderListenQ(box,0,()=>{}); const ok=box.querySelectorAll('.opt').length===4; box.remove(); return ok; })();
      out.numbers=sino(38900)==='삼만팔천구백'&&native(25,true)==='스물다섯';
      out.tags=names.every(d=>d===MYDECK||Object.values(TAGS).some(a=>a.includes(d)));
      out.deepLink=(()=>{ location.hash='#browse-flirting'; route(); return deck==='Flirting'&&cardsMode==='browse'; })();
      out.shield=(()=>{ const sv=JSON.stringify([S.days,S.shields,S.shieldUsed,S.lastShieldAt]); S.days={}; S.shieldUsed={}; for(let i=2;i<=5;i++) S.days[dkey(-i)]=30; S.shields=1; shieldCheck(); const ok=S.shields===0&&!!S.shieldUsed[dkey(-1)]; [S.days,S.shields,S.shieldUsed,S.lastShieldAt]=JSON.parse(sv); return ok; })();
      out.cap=(()=>{ const sv=[S.newCap,JSON.stringify(S.newLog)]; S.newCap=1; S.newLog={}; S.newLog[dkey()]=1; const ok=newLeft()===0&&nextNewCards(5).length===0; S.newCap=sv[0]; S.newLog=JSON.parse(sv[1]); return ok; })();
      out.suspend=(()=>{ const d='Numbers',c=DECKS[d][0]; const k=ck(d,c); const prev=S.cards[k]; S.cards[k]={box:2,due:0,seen:1,lapses:0,last:1,susp:1}; const ok=!isDue(d,c); if(prev) S.cards[k]=prev; else delete S.cards[k]; return ok; })();
      out.search=(()=>{ globalSearch(); const inp=document.querySelector('#gsIn'); inp.value='exam'; inp.dispatchEvent(new Event('input')); const n=document.querySelectorAll('.gsi').length; closeSheet(); return n>0; })();
      out.sheet=(()=>{ openSheet('read'); const n=document.querySelectorAll('.sheet .opt').length; closeSheet(); return n===8; })();
      out.tour=TOUR.every(t=>{ location.hash=t[3]; route(); return !!document.querySelector(t[0]); });
      out.say=(()=>{ location.hash='#read'; route(); const box=document.createElement('div'); document.body.appendChild(box); renderSayQ(box,0,()=>{}); const ok=!!box.querySelector('#sayGo'); box.remove(); return ok; })();
      out.exam=(()=>{ const pool=[]; names.filter(d=>deckUnlocked(d)&&DECKS[d].length>=4).forEach(d=>DECKS[d].forEach(c=>pool.push({d,c}))); return pool.length>=25; })();
      out.noDupOpts=(()=>{ const box=document.createElement('div'); document.body.appendChild(box); let ok=true; for(let i=0;i<30;i++){ const d=names[i%names.length]; if(DECKS[d].length<4||d===MYDECK) continue; const c=DECKS[d][i%DECKS[d].length]; box.innerHTML=''; renderQuizQ(box,d,c,'read',()=>{}); const ls=[...box.querySelectorAll('.opt')].map(o=>o.textContent.trim()); if(new Set(ls).size!==ls.length) ok=false; } box.remove(); return ok; })();
      out.orphanRefs=(()=>{ const keys=new Set(); names.forEach(d=>DECKS[d].forEach(c=>keys.add(c[0]))); return Object.keys(EXAMPLES).every(k=>keys.has(k))&&Object.keys(DIALOG).every(k=>keys.has(k)); })();
      out.a11y=(()=>{ const vis=e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0;}; const name=e=>(e.getAttribute('aria-label')||e.textContent||e.title||'').trim(); let bad=0; for(const r of ['today','practice','review','progress']){ location.hash='#'+r; route(); bad+=[...document.querySelectorAll('button,a')].filter(e=>vis(e)&&!name(e)).length; bad+=[...document.querySelectorAll('input,select')].filter(e=>vis(e)&&!(e.getAttribute('aria-label')||e.placeholder||e.closest('label'))).length; bad+=[...document.querySelectorAll('button,input[type=checkbox]')].filter(e=>{ if(!vis(e)) return false; const b=e.getBoundingClientRect(); return b.height<20||b.width<20; }).length; } return bad===0; })();
      out.sizes=(()=>{ const t={decks:names.filter(d=>d!==MYDECK).length,cards:names.reduce((n,d)=>n+DECKS[d].length,0),lessons:LESSONS.length,checks:Object.keys(CHECKS).length,dialog:Object.keys(DIALOG).length,patterns:PATTERNS.length,pairs:PAIRS.length}; window.__sizes=t; return t.decks>=36&&t.cards>=519&&t.lessons>=18&&t.checks>=18&&t.dialog>=149&&t.patterns>=47&&t.pairs>=36; })();
      out.lessonChecks=LESSONS.every(l=>CHECKS[l.id]&&CHECKS[l.id].length>=3);
      out.groupDecks=(Array.isArray(GROUPS)?GROUPS.flatMap(g=>g[1]):Object.values(GROUPS).flat()).every(d=>DECKS[d]);
      out.romAgree=(()=>{ let agree=0,tot=0; const nrm=s=>s.toLowerCase().replace(/\(.*?\)/g,'').replace(/[^a-z]/g,'').replace(/(k|t|p)h/g,'$1'); names.forEach(d=>{ if(/^Hangul|^Pron|My phrases/.test(d)) return; DECKS[d].forEach(c=>{ if(/\d|[A-Za-z]|vs/.test(c[0])) return; const ko=c[0].replace(/\(.*?\)/g,'').split('/')[0].trim(); const got=nrm(c[1].split('/')[0]); const exp=nrm(romanize(ko)); if(!exp) return; tot++; if(got===exp) agree++; }); }); window.__rom=agree+'/'+tot; return agree/tot>0.985; })();
      out.badge=(()=>{ const t=deckBadge('Numbers'); return /\d+\/\d+/.test(t); })();
      location.hash='#today'; route(); out.__sizes=window.__sizes; out.__rom=window.__rom; return out; });
    res.checks.sizes=g.__sizes; delete g.__sizes; res.checks.romAgree=g.__rom; delete g.__rom;
    res.checks.features=g; const bad=Object.entries(g).filter(([k,v])=>!v).map(([k])=>k); if(bad.length) res.errors.push('FEATURE FAIL: '+bad.join(','));
    await p.evaluate(()=>location.hash='#today'); await p.waitForTimeout(150); await p.screenshot({path:OUT.replace('page.html','shot-'+w+'.png')});
  }
  await ctx.close();
}
// ---- v2 multi-course guards (spec §4.5) ----
const mc={}; let koSkip=false;
const newCtx=async(seed,locale)=>{ const ctx=await b.newContext(Object.assign({viewport:{width:390,height:800},colorScheme:'dark',hasTouch:true,isMobile:true},locale?{locale}:{})); const p=await ctx.newPage();
  p.on('pageerror',e=>res.errors.push('MC PAGEERR '+e.message)); p.on('console',m=>{ if(m.type()==='error'&&!/fonts|net::/.test(m.text())) res.errors.push('MC CONSOLE '+m.text()); });
  await ctx.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'})); await p.route('**/fonts.g*/**',r=>r.fulfill({body:'',contentType:'text/css'}));
  if(seed) await ctx.addInitScript(s=>{ if(!sessionStorage.getItem('__seeded')){ Object.entries(s).forEach(([k,v])=>localStorage.setItem(k,v)); sessionStorage.setItem('__seeded','1'); } },seed);
  await p.goto('file://'+OUT); await p.waitForTimeout(250); await p.evaluate(()=>{ const c=document.getElementById('fx3d'); if(c) c.style.display='none'; }); return {ctx,p}; };
const ovr=async(p,label)=>{ const sw=await p.evaluate(()=>document.documentElement.scrollWidth); if(sw>390) res.overflow.push('390 '+label+' '+sw); };
{ // brand-new visitor: welcome → language home; locked languages; 한국어 → 영어
  const {ctx,p}=await newCtx(null);
  mc.langHomeNew=await p.evaluate(()=>!!document.getElementById('welcome')&&!document.getElementById('langHome')&&needLangHome());
  await p.evaluate(()=>{ document.querySelector('#wNick').click(); }); await p.fill('#wNickIn','Tester'); await p.evaluate(()=>document.querySelector('#wForm').requestSubmit()); await p.waitForTimeout(200);
  mc.langHomeNew=mc.langHomeNew&&await p.evaluate(()=>!!document.getElementById('langHome')&&!document.getElementById('welcome'));
  await ovr(p,'langhome-1');
  mc.lockedDisabled=await p.evaluate(()=>{ const l=[...document.querySelectorAll('#langHome .lh-lock')]; const before=JSON.stringify(META); l.forEach(x=>x.click()); const allLive=!Object.keys(LANGS).some(k=>k!=='en'&&!liveNatives().includes(k)); /* once every listed native language has a course, there is nothing left to lock */ return (l.length>0||allLive)&&l.every(x=>x.getAttribute('aria-disabled')==='true'&&!x.matches('button,a,input')&&x.tabIndex<0&&!x.querySelector('button,a'))&&JSON.stringify(META)===before&&!!document.getElementById('langHome'); });
  koSkip=!(await p.evaluate(()=>!!COURSES['ko-en']));
  if(koSkip){ mc.koSoon=await p.evaluate(()=>[...document.querySelectorAll('#langHome .lh-lock')].some(x=>/한국어/.test(x.textContent))&&!document.querySelector('#langHome [data-native="ko"]')); }
  else {
    await p.evaluate(()=>document.querySelector('#langHome [data-native="ko"]').click()); await p.waitForTimeout(120); await ovr(p,'langhome-2');
    // step 2: locked target languages are preview-only buttons — they open the planned-lesson roadmap, never select a course or touch META/COURSES
    mc.lockedDisabled=mc.lockedDisabled&&await p.evaluate(()=>{ const before=JSON.stringify(META), ids=Object.keys(COURSES).join(), nL=LESSONS.length; const l=[...document.querySelectorAll('#langHome .lh-lock')]; if(!l.length||!l.every(x=>x.dataset.road&&!x.dataset.course)) return false;
      const codes=l.map(x=>x.dataset.road); let ok=true; codes.forEach(c=>{ document.querySelector('#langHome [data-road="'+c+'"]').click(); const n=document.querySelectorAll('#langHome .rm-it').length; ok=ok&&n>=12&&n===roadmapItems(c).length&&/[가-힣]/.test(document.getElementById('rmBody').textContent)&&!document.querySelector('#langHome [data-course]'); document.querySelector('#langHome .lh-back2').click(); });
      const R=LANGAPP_PACKS.roadmaps, all=Object.keys(LANGS).every(k=>R[k]&&R[k].stages.length), idsU=Object.keys(R).every(k=>{ const a=roadmapItems(k).map(i=>i[0]); return new Set(a).size===a.length&&a.every(i=>i.indexOf(k+'-')===0); });
      return ok&&all&&idsU&&JSON.stringify(META)===before&&Object.keys(COURSES).join()===ids&&LESSONS.length===nL&&!!document.querySelector('#langHome [data-course="ko-en"]'); });
    await p.evaluate(()=>document.querySelector('#langHome [data-course="ko-en"]').click()); await p.waitForTimeout(300);
    mc.koEnPick=await p.evaluate(()=>COURSE.id==='ko-en'&&document.documentElement.lang==='ko'&&/[가-힣]/.test(document.querySelector('#nav').textContent)&&!document.getElementById('langHome')&&JSON.parse(localStorage.getItem('la-meta')).course==='ko-en'&&S.nick==='Tester');
    await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; document.querySelectorAll('.tour,.tourov,[class*=tour]').forEach(e=>e.remove()); renderToday(); });
    for(const r of ['today','practice','review','lessons','read','progress','feedback','privacy']){ await p.evaluate(x=>location.hash='#'+x,r); await p.waitForTimeout(120); await ovr(p,'ko-en '+r); }
    // untranslated scan (report only): visible Latin-only UI text in Korean mode, excluding course content
    const un=await p.evaluate(async()=>{ const out=new Set(); for(const r of ['today','practice','review','lessons','read','progress','feedback']){ location.hash='#'+r; route(); await new Promise(z=>setTimeout(z,60)); const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const s=n.nodeValue.trim(); const el=n.parentElement; if(!s||!el||i18nSkip(el)||el.closest('#toast,.toast,[hidden],script,style')) continue; const rc=el.getBoundingClientRect(); if(!rc.width||!rc.height) continue; if(/[A-Za-z]{2,}/.test(s)&&!/[가-힣]/.test(s)&&!/^(Lang App|Lv|XP|OK|A[−+]|Aa)$/.test(s)&&!/^Lv \d+ · \d+\/\d+ · \d+🔥/.test(s)&&!/^\+\d+ XP$/.test(s)) out.add(s.slice(0,60)); /* 'Lv'/'XP' are kept by design (i18n glossary) */ } } location.hash='#today'; route(); return [...out]; });
    res.checks.untranslatedKo={count:un.length,sample:un.slice(0,25)};
    // full Today session in ko-en
    await p.evaluate(()=>{ location.hash='#today'; route(); document.querySelector('#startSess').click(); }); await p.waitForTimeout(150);
    let st=0; for(;st<160;st++){ const k=await p.evaluate(()=>{ const b=document.querySelector('#sessBody'); if(!b) return 'none'; const it=sess&&sess.items[sess.i]; if(b.querySelector('.rvgo')){ b.querySelector('.rvgo').click(); return 'teach'; } if(b.querySelector('.card')&&b.querySelector('[data-ans="1"]')){ b.querySelector('[data-ans="1"]').click(); return 'card'; }
        const nx=b.querySelector('.next:not([hidden])'); if(nx){ nx.click(); return 'next'; } if(b.querySelector('#sayNext')){ document.querySelector('#sayGood').checked=true; b.querySelector('#sayNext').click(); return 'say'; }
        const opts=[...b.querySelectorAll('.opt:not([disabled])')]; if(opts.length){ const want=it&&it.c&&it.c[0]; (opts.find(o=>o.dataset.a===want)||opts[0]).click(); return 'opt'; }
        const inp=b.querySelector('input.ans:not([disabled])'); if(inp){ inp.value=(it&&it.c&&it.t==='quiz')?it.c[0]:'zz'; b.querySelector('form').requestSubmit(); return 'type'; } return 'wait'; });
      if(k==='none') break; await p.waitForTimeout(k==='wait'?400:k==='card'?230:110); }
    mc.koEnSession=await p.evaluate(()=>!sess&&!!document.querySelector('#session .done')&&S.sessions>=1); res.checks.koEnSessionSteps=st;
    // lesson tokens → audio rows; course switch round-trip keeps both courses' progress
    mc.koEnLesson=await p.evaluate(()=>{ location.hash='#lessons'; route(); const l=LESSONS[0]; if(!l) return false; showLesson(l.id); const ok=!!document.querySelector('#lessonBody .ex [data-say]')&&!/\{\{ex:/.test(document.querySelector('#lessonBody').innerHTML); openLesson=null; return ok; });
    mc.courseRoundTrip=await p.evaluate(()=>{ const ko=JSON.stringify(S.cards), kx=S.xp; applyCourse('en-ko'); const fresh1=COURSE.id==='en-ko'&&document.documentElement.lang==='en'&&S.nick==='Tester'&&!Object.keys(S.cards).length; S.xp=123; save(); flushSave(); applyCourse('ko-en'); const back=JSON.stringify(S.cards)===ko&&S.xp===kx; applyCourse('en-ko'); const en=S.xp===123; applyCourse('ko-en'); const st=JSON.parse(localStorage.getItem('ko-app2')); return fresh1&&back&&en&&st.xp===123&&!!localStorage.getItem('la-s-ko-en'); });
    mc.syncShape=await p.evaluate(()=>{ const pl=syncPayload(); return pl.xp===123&&!!pl._courses&&!!pl._courses['ko-en']&&pl._meta.course==='ko-en'&&!pl._courses['ko-en']._courses; });
    // course content (English sentences) must never pass through the UI dictionary: every visible English target/dialogue/example node is data-noi18n (or a skipped content class)
    const cm=await p.evaluate(async()=>{ const en=new Set(); names.forEach(d=>DECKS[d].forEach(c=>en.add(c[0].trim()))); Object.values(DIALOG).forEach(v=>{ en.add(String(v[0]).trim()); en.add(String(v[1]).trim()); }); Object.values(EXAMPLES).forEach(v=>en.add(String(v[0]).trim())); PATTERNS.forEach(v=>{ en.add(String(v[0]).trim()); en.add(String(v[2]).trim()); });
      const bad=new Set(); const scan=tag=>{ const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const s=n.nodeValue.trim(); const el=n.parentElement; if(!s||!el||i18nSkip(el)||el.closest('[hidden],script,style')) continue; if(!el.getBoundingClientRect().width) continue; if(en.has(s)) bad.add(tag+': '+s.slice(0,50)); } };
      const tick=()=>new Promise(z=>setTimeout(z,80));
      for(const r of ['today','practice','read','progress']){ location.hash='#'+r; route(); await tick(); scan(r); }
      location.hash='#review'; route(); await tick(); scan('review'); const bb=document.querySelector('#cmBrowse'); if(bb){ bb.click(); await tick(); scan('browse'); }
      location.hash='#lessons'; route(); await tick(); scan('lessons'); showLesson(LESSONS[0].id); await tick(); scan('lesson'); openLesson=null; showGrammar=true; route(); await tick(); scan('grammar'); showGrammar=false;
      globalSearch(); const gi=document.querySelector('#gsIn'); gi.value='you'; gi.dispatchEvent(new Event('input')); await tick(); scan('search'); closeSheet(); location.hash='#today'; route(); return [...bad]; });
    res.checks.koContentUnmarked=cm; mc.koContentMarked=cm.length===0;
    // backups are per course: export is tagged with its course; an untagged (old, en-ko) export imported while in ko-en lands in en-ko, not in the ko-en state
    mc.exportTagged=await p.evaluate(()=>{ if(typeof exportText!=='function') return false; const ex=JSON.parse(exportText()); if(ex._course!==COURSE.id) return false; const before=JSON.stringify(S.cards); document.getElementById('impTxt').value=JSON.stringify({cards:{'Numbers|하나':{box:2,due:0,seen:1,lapses:0,last:9}},xp:5}); document.getElementById('impGo').click(); const st=JSON.parse(localStorage.getItem('ko-app2')||'{}'); return COURSE.id==='ko-en'&&JSON.stringify(S.cards)===before&&!!(st.cards&&st.cards['Numbers|하나'])&&st.xp===123; });
    // celebratory flourishes are in the target language (ko-en → English, en-ko → Korean)
    mc.flourish=await p.evaluate(()=>{ if(typeof FL!=='function') return false; const a=[FL('levelUp'),FL('done')], g=FL('glyphs').join(''); applyCourse('en-ko'); const b=[FL('levelUp'),FL('done')]; applyCourse('ko-en'); return a[0]==='Level up!'&&!/[가-힣ㄱ-ㅣ]/.test(a.join('')+g)&&b[0]==='레벨 업!'&&b[1]==='수고했어요!'&&COURSE.id==='ko-en'; });
  }
  await ctx.close(); }
{ // existing user (ko-app2, no meta) → silent migration to en-ko, no language home, progress intact
  const old={xp:777,days:{},cards:{'Survival phrases|안녕하세요':{box:3,due:0,seen:2,lapses:0,last:1}},nick:'Old',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,goal:50}; old.days[new Date().toISOString().slice(0,10)]=10;
  const {ctx,p}=await newCtx({'ko-app2':JSON.stringify(old)});
  mc.migratedHomeOnce=await p.evaluate(()=>{ const lh=document.getElementById('langHome'); if(!lh||!lh.querySelector('.lh-x')||!lh.querySelector('[data-native="en"]')) return false; lh.querySelector('[data-native="en"]').click(); const cur=lh.querySelector('.lh-row.on[data-course="en-ko"]'); if(!cur) return false; cur.click(); return !document.getElementById('langHome')&&JSON.parse(localStorage.getItem('la-meta')).seenHome===1&&!needLangHome(); });
  mc.migratedNoHome=await p.evaluate(()=>!document.getElementById('langHome')&&!document.getElementById('welcome')&&META.picked===1&&META.native==='en'&&COURSE.id==='en-ko'&&S.xp===777&&S.nick==='Old'&&!!S.cards['Survival phrases|안녕하세요']&&JSON.parse(localStorage.getItem('la-meta')).course==='en-ko');
  // old-shape remote row merges cleanly; unknown courses in _courses are kept
  mc.remoteMerge=await p.evaluate(()=>{ const remote={xp:900,cards:{'Numbers|하나, 둘, 셋':{box:2,due:0,seen:1,lapses:0,last:5}},days:{},updatedAt:1,_courses:{'xx-yy':{xp:5,cards:{}}}}; applyRemoteRow(remote); const ok1=S.xp===900&&!!S.cards['Numbers|하나, 둘, 셋']&&!!S.cards['Survival phrases|안녕하세요']&&!S._courses; const pl=syncPayload(); return ok1&&!!pl._courses&&pl._courses['xx-yy']&&pl._courses['xx-yy'].xp===5; });
  await ctx.close(); }
{ // ---- lesson practice sets (docs/PRACTICE-SPEC.md) ----
  const seed={'ko-app2':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'la-meta':JSON.stringify({v:1,native:'en',course:'en-ko',picked:1,seenHome:1,prefs:{}})};
  const {ctx,p}=await newCtx(seed);
  const EN=[{t:'mc',q:"Pick the most natural way to say 'I study Korean with my friend at the café near the station every Saturday' =",o:['토요일마다 역 근처 카페에서 친구랑 한국어를 공부해요','토요일마다 역 근처 카페에 친구랑 한국어를 공부해요','토요일마다 역 근처 카페를 친구랑 한국어를 공부해요','공부해요 토요일마다 역 근처 카페에서 친구랑 한국어를'],why:'Where an action happens → 에서.'},
    {t:'mc',q:"'I study at a café' =",o:['카페에서 공부해요','카페에 공부해요','카페를 공부해요','공부해요 카페에서'],why:'Where an action happens → 에서.'},
    {t:'order',p:'I drink coffee at a café',a:['카페에서','커피를','마셔요'],x:['카페에'],why:'Place of action first, verb last.'},
    {t:'fill',q:'카페__ 공부해요',p:'I study at a café',a:['에서'],o:['에','를','는'],why:'Action location → 에서.'},
    {t:'type',p:'I drink coffee',a:['커피를 마셔요','저는 커피를 마셔요','커피 마셔요'],hint:'커피 · 마셔요',x:['커피가'],why:'Object + 을/를, verb last.'}];
  const KO=[{t:'mc',q:"'저는 학생이에요'를 영어로 하면?",o:["I'm a student.","I'm student.","I am a students.","Me student."],why:'직업·신분 앞에는 a/an이 필요해요.'},
    {t:'order',p:'저는 커피를 마셔요',a:['I','drink','coffee'],x:['drinks'],why:'I 뒤에는 drink (s 없음).'},
    {t:'fill',q:'She __ a teacher.',p:'그녀는 선생님이에요',a:['is'],o:['are','am','be'],why:'She → is.'},
    {t:'type',p:'저는 피곤해요',a:["I'm tired",'I am tired'],hint:'tired',x:['tire'],why:'be + 형용사.'}];
  // helpers live in the page: solve the current item correctly / submit a typed value
  await p.evaluate(()=>{ window.__PID=LESSONS.some(l=>l.id==='sentences')?'sentences':LESSONS[0].id; });
  await p.evaluate(()=>{ window.__prSolve=()=>{ const it=PR.items[PR.i], st=PR.st, q=s=>[...document.querySelectorAll('#pracRun '+s)];
      if(st.mode==='pick') q('[data-po]').find(b=>st.opts[+b.dataset.po].ok).click();
      else if(st.mode==='tiles'){ (it.t==='order'?it.a:it.a[0].split(' ')).forEach(w=>q('[data-pt]').find(x=>x.textContent===w).click()); q('.prac-chk')[0].click(); }
      else window.__prSub(it.a[0]); };
    window.__prSub=v=>{ const i=document.querySelector('#pracRun .prac-form input'); i.value=v; document.querySelector('#pracRun .prac-form').requestSubmit(); };
    window.__prWrong=()=>{ const st=PR.st, q=s=>[...document.querySelectorAll('#pracRun '+s)]; if(st.mode==='pick') q('[data-po]:not([disabled])').find(b=>!st.opts[+b.dataset.po].ok).click(); else if(st.mode==='tiles'){ q('[data-pt]')[0].click(); q('.prac-chk')[0].click(); } else window.__prSub('zzz'); };
    window.__prNext=()=>document.querySelector('#pracRun .prac-next').click(); });
  // 1 data plumbing: marker object present, en-ko PRACTICE comes from it, a pack PRACTICE that is not a plain object becomes {}
  mc.prData=await p.evaluate(()=>{ applyCourse('en-ko'); const a=typeof PRACTICE_BUILTIN==='object'&&!Array.isArray(PRACTICE_BUILTIN)&&JSON.stringify(PRACTICE)===JSON.stringify(cleanPractice(PRACTICE_BUILTIN));
    const pk=Object.values(COURSES).find(x=>!x.builtin); if(!pk) return a; const c2=Object.assign({},pk,{PRACTICE:[1,2,3],_rt:null}); setCourseTables(c2); const b=JSON.stringify(PRACTICE)==='{}'; setCourseTables(COURSE); return a&&b&&JSON.stringify(PRACTICE)===JSON.stringify(cleanPractice(PRACTICE_BUILTIN)); });
  // 2 runner: injected items → button → every item → end screen; no horizontal overflow in any state
  const run=await p.evaluate(EN=>{ const ov=[], chk=l=>{ const sw=document.documentElement.scrollWidth; if(sw>390) ov.push(l+' '+sw); }; S.free=true; delete S.practice[__PID]; PRACTICE[__PID]=EN; location.hash='#lessons'; route(); showLesson(__PID);
    const bt=document.getElementById('pracStart'); if(!bt||!/· 5$/.test(bt.textContent.trim())) return {ok:false,why:'button'}; chk('entry'); bt.click(); const kinds=[];
    for(let n=0;n<EN.length;n++){ chk('item'+n); kinds.push(PR.st.mode); window.__prSolve(); chk('item'+n+'-done'); if(!PR.done||PR.first[n]!==true) return {ok:false,why:'item'+n}; window.__prNext(); }
    const end=document.querySelector('#pracRun .prac-end'); chk('end'); const st=S.practice[__PID]; const ok=!!end&&st.n===1&&st.first===1&&st.last===1&&kinds.join()==='pick,pick,tiles,input,input';
    document.querySelector('#pracRun .prac-again').click(); const again=PR&&PR.i===0&&!!document.querySelector('#pracRun .prac-opts'); document.querySelector('#pracRun .prac-back').click();
    return {ok:ok&&again&&!!document.getElementById('pracStart')&&!PR,ov}; },EN);
  run.ov&&run.ov.forEach(x=>res.overflow.push('390 practice '+x)); mc.prRunner=!!run.ok;
  // 3 typed answers: normalisation, hint + one retry, first-attempt scoring after wrong-then-right; tiles fallback
  mc.prTyped=await p.evaluate(EN=>{ const f=pracMatch('저는커피를  마셔요.',['저는 커피를 마셔요'])&&pracMatch(' 커피를 마셔요~ ',['커피를 마셔요'])&&!pracMatch('커피가 마셔요',['커피를 마셔요'])&&pracMatch('  I’M a STUDENT!! ',["I'm a student"])&&pracMatch('"Hello," she said.',['hello she said'])&&!pracMatch('I am student',["I'm a student"])&&!pracMatch('   ',['x'])&&pracMatch("don't",['don’t']);
    delete S.practice[__PID]; PRACTICE[__PID]=[EN[4],EN[1],EN[3]]; S.kbTiles=false; showLesson(__PID); pracOpen(__PID);
    window.__prSub('커피가 마셔요'); const retry=!PR.done&&PR.tries===1&&!!document.querySelector('#pracRun .prac-hint')&&document.querySelector('#pracRun .prac-form input').classList.contains('wrong');
    window.__prSub('저는커피를 마셔요.'); const acc=PR.done&&PR.first[0]===false&&!!document.querySelector('#pracRun .prac-ok'); window.__prNext();
    window.__prSolve(); const mcOk=PR.first[1]===true; window.__prNext();
    window.__prWrong(); window.__prWrong(); const fail=PR.done&&PR.first[2]===false&&/에서/.test(document.querySelector('#pracRun .prac-model').textContent); window.__prNext();
    const s1=S.practice[__PID], score=Math.abs(s1.last-1/3)<1e-9&&Math.abs(s1.first-1/3)<1e-9&&s1.n===1;
    pracOpen(__PID); document.querySelector('#pracRun .prac-kb').click(); const tiles=S.kbTiles===true&&PR.st.mode==='tiles'&&PR.tries===0; window.__prSolve(); const tOk=PR.first[0]===true; window.__prNext(); window.__prSolve(); window.__prNext();
    const pick=PR.st.mode==='pick'&&PR.st.opts.length===4; window.__prSolve(); window.__prNext(); const s2=S.practice[__PID], best=s2.n===2&&s2.first===1&&s2.last===1;
    S.kbTiles=false; document.querySelector('#pracRun .prac-done').click(); return !!(f&&retry&&acc&&mcOk&&fail&&score&&tiles&&tOk&&pick&&best); },EN);
  // the hint survives a tiles-toggle and an empty submit after the first wrong attempt
  mc.prTyped=mc.prTyped&&await p.evaluate(EN=>{ PRACTICE[__PID]=[EN[4]]; S.kbTiles=false; showLesson(__PID); pracOpen(__PID); window.__prSub('커피가 마셔요'); const kb=()=>document.querySelector('#pracRun .prac-kb').click(), hint=()=>!!document.querySelector('#pracRun .prac-fb .prac-hint');
    kb(); const a=hint()&&PR.tries===1&&PR.st.mode==='tiles'; kb(); const b=hint()&&PR.st.mode==='input'; window.__prSub('  '); const c=hint()&&PR.tries===1; window.__prSub('커피를 마셔요'); const d=PR.done&&PR.first[0]===false; document.querySelector('#pracRun .prac-back').click(); S.kbTiles=false; return a&&b&&c&&d; },EN);
  // IME: a submit during composition is deferred until compositionend (never judged mid-composition, never dropped)
  mc.prTyped=mc.prTyped&&await p.evaluate(async EN=>{ const w=ms=>new Promise(z=>setTimeout(z,ms)); PRACTICE[__PID]=[EN[4],EN[4]]; S.kbTiles=false; showLesson(__PID); pracOpen(__PID); const inp=()=>document.querySelector('#pracRun .prac-form input'), form=()=>document.querySelector('#pracRun .prac-form');
    inp().dispatchEvent(new CompositionEvent('compositionstart')); inp().value='커피를 마셔'; form().requestSubmit(); const held=!PR.done&&PR.tries===0; inp().value='커피를 마셔요'; inp().dispatchEvent(new CompositionEvent('compositionend')); await w(40); const a=PR.done&&PR.first[0]===true; window.__prNext();
    inp().dispatchEvent(new CompositionEvent('compositionstart')); inp().value='커피 마셔요'; form().requestSubmit(); await w(450); const b=PR.done&&PR.first[1]===true; document.querySelector('#pracRun .prac-back').click(); return held&&a&&b; },EN);
  // 4 state: sanitizeState / mergeState / remote merge / sync payload
  mc.prState=await p.evaluate(()=>{ const fr=fresh(); const f0=JSON.stringify(fr.practice)==='{}'&&fr.kbTiles===false;
    const s=sanitizeState(Object.assign(fresh(),JSON.parse('{"practice":{"a":{"n":"3","first":7,"last":-1,"ts":5},"b":"x","c":null,"d":[1],"__proto__":{"n":9}},"kbTiles":"yes"}')));
    const sOk=JSON.stringify(s.practice)==='{"a":{"n":3,"first":1,"last":0,"ts":5}}'&&s.kbTiles===true&&Object.getPrototypeOf(s.practice)===Object.prototype&&JSON.stringify(sanitizeState(JSON.parse(JSON.stringify(s))))===JSON.stringify(s)&&JSON.stringify(sanitizeState(Object.assign(fresh(),{practice:'junk'})).practice)==='{}';
    const A=Object.assign(fresh(),{updatedAt:1,kbTiles:false,practice:{x:{n:2,first:0.9,last:0.5,ts:100},y:{n:1,first:0.2,last:0.2,ts:50}}}), B=Object.assign(fresh(),{updatedAt:2,kbTiles:true,practice:{x:{n:5,first:0.6,last:0.7,ts:200},z:{n:1,first:1,last:1,ts:10}}});
    const m1=mergeState(A,B), m2=mergeState(B,A), xm=m=>JSON.stringify(m.practice.x)==='{"n":5,"first":0.9,"last":0.7,"ts":200}'&&!!m.practice.y&&!!m.practice.z&&m.kbTiles===true;
    const mOk=xm(m1)&&xm(m2)&&JSON.stringify(mergeState(fresh(),Object.assign(fresh(),{practice:null})).practice)==='{}';
    S.practice={q:{n:1,first:0.5,last:0.5,ts:1}}; S.kbTiles=false; const remote=Object.assign(JSON.parse(JSON.stringify(syncPayload())),{updatedAt:Date.now()+1e6,kbTiles:true,practice:{q:{n:3,first:0.4,last:0.4,ts:2},r:{n:1,first:1,last:1,ts:3}},_courses:{'ko-en':{practice:{k:{n:2,first:0.3,last:0.3,ts:9}},kbTiles:true,updatedAt:1}}});
    applyRemoteRow(remote); const rOk=S.practice.q.n===3&&S.practice.q.first===0.5&&S.practice.q.last===0.4&&!!S.practice.r&&S.kbTiles===true;
    let ko=null; try{ ko=JSON.parse(localStorage.getItem('la-s-ko-en')||'null'); }catch(e){} const kOk=!!(ko&&ko.practice&&ko.practice.k&&ko.practice.k.n===2&&ko.kbTiles===true);
    const pl=JSON.parse(JSON.stringify(syncPayload())); const back=sanitizeState(Object.assign(fresh(),pl)); const pOk=pl.practice.q.n===3&&pl.kbTiles===true&&back.practice.r.first===1&&back.kbTiles===true&&!!(pl._courses&&pl._courses['ko-en']&&pl._courses['ko-en'].practice.k);
    S.kbTiles=false; return !!(f0&&sOk&&mOk&&rOk&&kOk&&pOk); });
  // 5 practice never gates unlocking and never marks a lesson done
  mc.prNoGate=await p.evaluate(EN=>{ const sv=S.free; S.free=false; const snap=()=>JSON.stringify([S.lessons,S.checks||{},S.drills||{},LESSONS.map((l,i)=>lessonUnlocked(i))]); const b0=snap(); const id=LESSONS[0].id; PRACTICE[id]=[EN[1],EN[2]];
    showLesson(id); pracOpen(id); window.__prSolve(); document.querySelector('#pracRun .prac-back').click(); const b1=snap();
    pracOpen(id); window.__prSolve(); window.__prNext(); window.__prSolve(); window.__prNext(); const done=!!document.querySelector('#pracRun .prac-end')&&S.practice[id].first===1; const b2=snap();
    pracOpen(id); window.__prWrong(); window.__prWrong(); window.__prNext(); window.__prWrong(); window.__prWrong(); window.__prNext(); const b3=snap(); S.free=sv; openLesson=null;
    return done&&b0===b1&&b1===b2&&b2===b3&&!S.lessons[id]; },EN);
  // 6 ko-en: runner chrome is Korean only (item content excluded via .pc); English answer accepted with case/punctuation variant
  if(koSkip) mc.prKoChrome='skip (no ko-en pack)';
  else mc.prKoChrome=await p.evaluate(async KO=>{ applyCourse('ko-en'); S.free=true; S.kbTiles=false; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; document.querySelectorAll('.tour').forEach(e=>e.remove()); const id=LESSONS[0].id; PRACTICE[id]=KO; delete S.practice[id]; location.hash='#lessons'; route(); showLesson(id);
    const bad=[], tick=()=>new Promise(z=>setTimeout(z,30));
    const scan=(root,tag)=>{ if(!root){ bad.push(tag+': missing'); return; } const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const el=n.parentElement; if(el&&el.closest('.pc')) continue; if(/[A-Za-z]/.test(n.nodeValue)) bad.push(tag+': '+n.nodeValue.trim().slice(0,40)); }
      [root,...root.querySelectorAll('*')].filter(e=>!e.closest('.pc')).forEach(e=>['placeholder','aria-label','title'].forEach(a=>{ const v=e.getAttribute&&e.getAttribute(a); if(v&&/[A-Za-z]/.test(v)) bad.push(tag+' @'+a+': '+v.slice(0,40)); })); };
    const R=()=>document.getElementById('pracRun');
    scan(document.getElementById('pracEntry'),'entry'); document.getElementById('pracStart').click(); await tick(); scan(R(),'mc');
    window.__prWrong(); scan(R(),'mc-retry'); window.__prSolve(); scan(R(),'mc-ok'); window.__prNext();
    scan(R(),'order'); window.__prWrong(); window.__prWrong(); scan(R(),'order-fail'); window.__prNext();
    scan(R(),'fill'); window.__prSub('   '); scan(R(),'fill-empty'); document.querySelector('#pracRun .prac-kb').click(); scan(R(),'fill-tiles'); document.querySelector('#pracRun .prac-kb').click(); window.__prSolve(); scan(R(),'fill-ok'); window.__prNext();
    scan(R(),'type'); document.querySelector('#pracRun .prac-rule').click(); scan(document.querySelector('.prac-sheet'),'rule'); document.querySelector('.prac-sheet .prac-x').click();
    window.__prSub('I tired'); const rej=!PR.done&&PR.tries===1; scan(R(),'type-retry'); window.__prSub('  i AM tired!! '); const acc=PR.done&&PR.first[3]===false; scan(R(),'type-ok'); window.__prNext();
    scan(R(),'end'); const end=!!document.querySelector('#pracRun .prac-end')&&S.practice[id].last===0.25; /* mc wrong→right, order failed, fill right, type wrong→right */ document.querySelector('#pracRun .prac-done').click(); openLesson=null; route(); await tick();
    const ind=document.querySelector('.lesson-btn[data-lesson="'+id+'"] .prac-ind'); if(!ind||!/^연습 25%$/.test(ind.textContent)) bad.push('badge: '+(ind&&ind.textContent)); window.__prKoBad=bad;
    applyCourse('en-ko'); return bad.length===0&&rej&&acc&&end; },KO);
  if(!koSkip) res.checks.prKoChromeBad=await p.evaluate(()=>window.__prKoBad);
  // 7 a pack with a PRACTICE field still validates; malformed items are dropped, never thrown
  mc.prPackValid=await p.evaluate(()=>{ const pk={id:'ko-en',native:'ko',target:'en',DECKS:{d:[['a','','b','']]},GROUPS:[['g',['d']]],PRACTICE:{l1:[{t:'mc',q:'x',o:['a','b','c','d']}]}}; const v1=validCourse('ko-en',pk);
    const real=COURSES['ko-en']; const v2=!real||validCourse('ko-en',Object.assign({},real,{PRACTICE:{x:[]}}));
    let threw=false, cp=null; try{ cp=cleanPractice({l1:[{t:'mc',q:'x',o:['a','b','c','d']},{t:'mc',q:'x',o:['a']},{t:'bad'},null,'str',7,[],{t:'fill',q:'no gap',a:['x']},{t:'type',p:'p',a:[]},{t:'order',p:'p',a:'ab'},{t:'type',p:'p',a:['x',5,null]},{t:'fill',q:'a __ b',a:['x'],o:['x','y']}],l2:'junk',l3:[],__proto__:[{t:'mc',q:'x',o:['a','b']}]}); cleanPractice(null); cleanPractice([1]); cleanPractice('x'); }catch(e){ threw=true; }
    const c=!threw&&cp.l1.length===3&&!cp.l2&&!cp.l3&&cp.l1[1].a.join()==='x,5'&&cp.l1[2].o.join()==='y';
    return v1&&v2&&c; });
  // every lesson of the active course has a 3-question check and a 12+ item practice set, and every shipped practice item accepts its own answers and rejects its distractors
  mc.prSweep=await p.evaluate(()=>{ let bad=0; const every=LESSONS.every(l=>(CHECKS[l.id]||[]).length===3&&(PRACTICE[l.id]||[]).length>=12); Object.keys(PRACTICE).forEach(id=>PRACTICE[id].forEach(it=>{
      if(it.t==='order'){ const m=it.a.join(' '); if(!pracMatch(m,[m])) bad++; (it.x||[]).forEach(x=>it.a.forEach((_,k)=>{ const alt=it.a.slice(); alt[k]=x; if(pracMatch(alt.join(' '),[m])) bad++; })); }
      if(it.t==='fill'){ it.a.forEach(a=>{ if(!pracMatch(a,it.a)) bad++; }); (it.o||[]).forEach(o=>{ if(pracMatch(o,it.a)) bad++; }); }
      if(it.t==='type'){ it.a.forEach(a=>{ if(!pracMatch(a,it.a)) bad++; }); const tl=it.a[0].split(' '); (it.x||[]).forEach(x=>tl.forEach((_,k)=>{ const alt=tl.slice(); alt[k]=x; if(pracMatch(alt.join(' '),it.a)) bad++; })); } }));
    return every&&bad===0&&Object.keys(PRACTICE).length>=LESSONS.length; });
  await ctx.close(); }
// ---- X → English pilot engine guards (docs/PILOT-SPEC.md): fixture ja-en course + ja interface pack injected at runtime, each in its own context ----
// pre-native screens as they were before the multi-language engine (English browser; a Korean browser got exactly the same)
const PRE_BASE={"w1": {"text": "Lang App\n\nHow should we save your progress?\n\n진도를 어떻게 저장할까요?\n\n📧 Email · 이메일\nSaves across all your devices · 모든 기기에 저장\n👤 Nickname · 닉네임\nThis device only — lost if browser data is cleared\n이 기기에만 · 브라우저 데이터를 지우면 사라져요\n\nPrivacy & terms · 개인정보", "attrs": ["aria-label=Welcome to Lang App", "lang=ko", "lang=ko"]}, "w2": {"text": "Save across devices\n모든 기기에 저장하기\nSend sign-in link · 링크 보내기\n← Back · 뒤로", "attrs": ["aria-label=Welcome to Lang App", "lang=ko", "aria-label=Email · 이메일", "placeholder=you@example.com"]}, "w3": {"text": "What should we call you?\n어떻게 불러 드릴까요?\nStart learning · 시작하기\n← Back · 뒤로\n\nThis device only — lost if browser data is cleared. Add an email later in Progress.\n\n이 기기에만 저장돼요. 진도 탭에서 나중에 이메일을 추가할 수 있어요.", "attrs": ["aria-label=Welcome to Lang App", "lang=ko", "placeholder=Nickname · 닉네임", "lang=ko"]}, "lh1": {"text": "LANG APP\nWhat language do you speak?\n\n어떤 언어를 사용하세요?\n\n🇺🇸\nEnglish\n›\n🇰🇷\n한국어\n›\n\n🔒 COMING SOON · 출시 예정\n\n🇯🇵\n日本語\n🇨🇳\n中文\n🇪🇸\nEspañol\n🇫🇷\nFrançais\n🇩🇪\nDeutsch\n🇧🇷\nPortuguês\n🇮🇹\nItaliano\n🇻🇳\nTiếng Việt\n🇹🇭\nไทย\n🇮🇩\nBahasa Indonesia\n🇮🇳\nहिन्दी\n🇸🇦\nالعربية\n🇷🇺\nРусский", "attrs": ["aria-label=Choose your language · 언어 선택", "lang=ko", "lang=en", "lang=ko", "aria-label=Coming soon · 출시 예정", "title=Japanese · coming soon · 출시 예정", "title=Chinese · coming soon · 출시 예정", "title=Spanish · coming soon · 출시 예정", "title=French · coming soon · 출시 예정", "title=German · coming soon · 출시 예정", "title=Portuguese · coming soon · 출시 예정", "title=Italian · coming soon · 출시 예정", "title=Vietnamese · coming soon · 출시 예정", "title=Thai · coming soon · 출시 예정", "title=Indonesian · coming soon · 출시 예정", "title=Hindi · coming soon · 출시 예정", "title=Arabic · coming soon · 출시 예정", "title=Russian · coming soon · 출시 예정"]}};
const preSnap=async p=>p.evaluate(async()=>{ const snap=sel=>{ const w=document.querySelector(sel); if(!w) return null; const a=[]; [w,...w.querySelectorAll('*')].forEach(e=>['aria-label','placeholder','title','lang'].forEach(k=>{ if(e.hasAttribute(k)) a.push(k+'='+e.getAttribute(k)); })); return {text:w.innerText,attrs:a}; };
  const z=()=>new Promise(r=>setTimeout(r,90)); const r={}; r.w1=snap('#welcome'); document.querySelector('#wEmail').click(); await z(); r.w2=snap('#welcome'); document.querySelector('#wBack').click(); await z(); document.querySelector('#wNick').click(); await z(); r.w3=snap('#welcome');
  document.querySelector('#wNickIn').value='T'; document.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,200)); r.lh1=snap('#langHome'); return r; });
// fixture: ja-en = ko-en with every Hangul character mapped to a CJK ideograph (so any Hangul left on screen is engine text), plus a tiny ja interface pack
const FX_JA={exact:{'Today':'今日','Practice':'練習','Correct!':'正解！','Check':'確認','Lesson':'レッスン','Show the rule':'ルールを見る','← Back':'← 戻る','What do you want to learn?':'何を学びたいですか？','Current course':'現在のコース',
  'Coming soon · tap to preview':'近日公開 · タップでプレビュー','Coming soon':'近日公開','Choose the right one':'正しいものを選んでください','Your answer':'あなたの答え','What language do you speak?':'何語を話しますか？','Email':'メール','Nickname':'ニックネーム','The order may change.':'順番は変わることがあります。'},
  patterns:[['^Coming soon · (\\d+) lessons planned$','近日公開 · $1 レッスン予定'],['^Type in (.+)…$','$1で入力…']]};
const fxInject=async(p,pick)=>p.evaluate(([J,pick])=>{ const H=v=>typeof v==='string'?v.replace(/[가-힣]/g,c=>String.fromCharCode(0x4E00+c.charCodeAt(0)-0xAC00)).replace(/[ㄱ-ㅣ]/g,c=>String.fromCharCode(0x3041+(c.charCodeAt(0)-0x3131)%80)):Array.isArray(v)?v.map(H):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[H(k),H(x)])):v;
  const src=Object.assign({},COURSES['ko-en']); delete src._rt; COURSES['ja-en']=Object.assign(H(src),{id:'ja-en',native:'ja',target:'en',name:{en:'English',ja:'英語'},_rt:null}); LANGAPP_PACKS.i18n.ja=JSON.parse(JSON.stringify(J));
  if(pick){ applyCourse('ja-en'); S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.free=true; document.querySelectorAll('.tour,.tourov,#fxIntro').forEach(e=>e.remove()); } return true; },[FX_JA,!!pick]);
const ALL_HANGUL=/[가-힣ㄱ-ㅣ]/;
if(koSkip){ ['fxNativeList','fxLL','fxNoi18n','fxNoKorean','fxFullWidth','fxUnknownCourse','fxPreNative','fxBootJa','bootPackCourse'].forEach(k=>mc[k]='skip (no ko-en pack to clone)'); }
else {
{ // pre-native screens use ONE language taken from the browser: English, Korean, or a live interface language (Japanese here); never two at once
  const out={};
  for(const loc of ['en-US','ko-KR','ja-JP','sv-SE']){ const {ctx,p}=await newCtx(null,loc);
    out[loc]=await p.evaluate(async(loc)=>{ const H=s=>/[가-힣ㄱ-ㅣ]/.test(s), J=s=>/[぀-ヿ]/.test(s); const L=loc.slice(0,2); const hasJa=!!(LANGAPP_PACKS.i18n.ja&&COURSES['ja-en']);
      const want=L==='ko'?'ko':(L==='ja'&&hasJa)?'ja':'en'; const old=document.getElementById('welcome'); if(old) old.remove(); const lh=document.getElementById('langHome'); if(lh) lh.remove(); const sv=META.picked; META.picked=0;
      showWelcome(); const w=document.getElementById('welcome'); const t1=w.innerText; w.querySelector('#wNick').click(); await new Promise(z=>setTimeout(z,90)); const t2=w.innerText+' '+w.querySelector('#wNickIn').placeholder;
      w.querySelector('#wNickIn').value='T'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,200)); const h=document.getElementById('langHome'); const th=h?h.innerText.replace(/한국어|日本語/g,''):''; const hello=preBi('Hello','안녕하세요'), sub=introSub(false); META.picked=sv; if(h) h.remove();
      const all=t1+' '+t2+' '+th+' '+hello+' '+sub; const enLine=/How should we save your progress\?/.test(t1), enQ=/What language do you speak\?/.test(th);
      const ok=preLang()===want&&!!h&&(want==='en'?(enLine&&enQ&&!H(all)&&!J(all)&&hello==='Hello'&&sub==='Learn a language, 5 minutes a day'):want==='ko'?(!enLine&&!enQ&&/진도를 어떻게 저장할까요\?/.test(t1)&&/어떤 언어를 사용하세요\?/.test(th)&&!J(all)&&hello==='안녕하세요'&&sub==='하루 5분'):(!enLine&&!enQ&&J(t1)&&J(th)&&!H(all)));
      return ok||(want+' | '+t1.slice(0,200)+' | '+th.slice(0,200)+' | '+hello+' | '+sub); },loc).catch(e=>'ERR '+e.message); await ctx.close(); }
  res.checks.fxPreNative=out; mc.fxPreNative=Object.values(out).every(v=>v===true); }
{ // step 1 lists Japanese; selecting it + the course switches COURSE.id, <html lang> and uiLang(); LL / langName / runner / language home under the fixture
  const seed={'ko-app2':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'la-meta':JSON.stringify({v:1,native:'en',course:'en-ko',picked:1,seenHome:1,prefs:{}})};
  const {ctx,p}=await newCtx(seed); await p.evaluate(()=>{ window.ALLH=s=>/[가-힣ㄱ-ㅣ]/.test(s); }); await fxInject(p,false);
  mc.fxNativeList=await p.evaluate(async()=>{ showLangHome({closable:true}); const h=document.getElementById('langHome'); const row=h.querySelector('[data-native="ja"]'); if(!row||!/日本語/.test(row.textContent)||[...h.querySelectorAll('.lh-lock')].some(x=>/日本語/.test(x.textContent))) return 'step1';
    const natives=[...h.querySelectorAll('[data-native]')].map(b=>b.dataset.native).join(); if(natives.indexOf('en,ko,ja')!==0) return 'order '+natives; row.click();
    const t2=h.innerText; if(!h.querySelector('[data-course="ja-en"]')||!/何を学びたいですか？/.test(t2)||!/← 戻る/.test(t2)||!/近日公開 · タップでプレビュー/.test(t2)||ALLH(t2)||!/英語/.test(t2)) return 'step2 '+t2.slice(0,200);
    const lk=h.querySelector('.lh-lock[data-road="fr"]'); if(lk){ lk.click(); const t3=h.innerText; if(!/近日公開 · \d+ レッスン予定/.test(t3)||!/順番は変わることがあります。/.test(t3)||ALLH(t3)) return 'step3 '+t3.slice(0,160); h.querySelector('.lh-back2').click(); }
    h.querySelector('[data-course="ja-en"]').click(); await new Promise(z=>setTimeout(z,200));
    return COURSE.id==='ja-en'&&document.documentElement.lang==='ja'&&uiLang()==='ja'&&/今日/.test(document.querySelector('#nav').textContent)&&JSON.parse(localStorage.getItem('la-meta')).course==='ja-en'&&!document.getElementById('langHome')||'switch '+COURSE.id+' '+document.documentElement.lang; });
  if(mc.fxNativeList!==true){ res.checks.fxNativeList=mc.fxNativeList; mc.fxNativeList=false; await p.evaluate(()=>{ const h=document.getElementById('langHome'); if(h) h.remove(); applyCourse('ja-en'); }); }
  mc.fxLL=await p.evaluate(()=>{ const r=[]; const ja=[LL('Practice','연습'),LL('No such key in any pack','한국어'),LL('Type in 英語…','영어로…'),langName('ko','ja'),langName('en','es'),langName('ja','ko'),langName('ja','en'),tgtName()];
    applyCourse('ko-en'); const ko=[LL('Practice','연습'),LL('No such key in any pack','한국어'),langName('en','ko')]; applyCourse('en-ko'); const en=[LL('Practice','연습'),LL('No such key in any pack','한국어')]; applyCourse('ja-en');
    window.__fxLL={ja,ko,en}; return ja[0]==='練習'&&ja[1]==='No such key in any pack'&&ja[2]==='英語で入力…'&&ja[3]==='韓国語'&&ja[4]==='Inglés'&&ja[5]==='일본어'&&ja[6]==='Japanese'&&ja[7]==='英語'&&ko[0]==='연습'&&ko[1]==='한국어'&&ko[2]==='영어'&&en[0]==='Practice'&&en[1]==='No such key in any pack'; });
  if(!mc.fxLL) res.checks.fxLL=await p.evaluate(()=>window.__fxLL);
  // data-noi18n practice runner + language home step 2: fixture translations shown, no Hangul, English only where the fixture has no key
  mc.fxNoi18n=await p.evaluate(async()=>{ const J=LANGAPP_PACKS.i18n.ja.exact, bad=[]; let hits=0; const tick=()=>new Promise(z=>setTimeout(z,30));
    const scan=(root,tag)=>{ if(!root){ bad.push(tag+' missing'); return; } const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const s=n.nodeValue.trim(); if(!s) continue; if(ALLH(s)) bad.push(tag+' hangul: '+s.slice(0,40)); if(n.parentElement.closest('.pc')) continue; if(Object.prototype.hasOwnProperty.call(J,s)) bad.push(tag+' untranslated: '+s); if(Object.values(J).some(v=>s.includes(v))) hits++; }
      [root,...root.querySelectorAll('[placeholder],[aria-label],[title]')].forEach(e=>['placeholder','aria-label','title'].forEach(a=>{ const v=e.getAttribute(a); if(!v) return; if(ALLH(v)) bad.push(tag+' @'+a+' hangul: '+v); if(Object.prototype.hasOwnProperty.call(J,v.trim())) bad.push(tag+' @'+a+' untranslated: '+v); if(Object.values(J).some(x=>v.includes(x))) hits++; })); };
    const id=LESSONS.find(l=>(PRACTICE[l.id]||[]).length).id; location.hash='#lessons'; route(); showLesson(id); await tick(); scan(document.getElementById('pracEntry'),'entry'); document.getElementById('pracStart').click(); await tick();
    for(let i=0;i<PR.items.length&&i<14;i++){ scan(document.getElementById('pracRun'),'item'+i+':'+PR.st.mode); const k=document.querySelector('#pracRun .prac-kb'); if(k&&i===3){ k.click(); scan(document.getElementById('pracRun'),'tiles'); k.click(); } window.__prW&&0; const st=PR.st; if(st.mode==='pick'){ document.querySelector('#pracRun [data-po]').click(); } else if(st.mode==='tiles'){ const t=document.querySelector('#pracRun [data-pt]'); if(t) t.click(); const c=document.querySelector('#pracRun .prac-chk'); if(c&&!c.disabled) c.click(); } else { const f=document.querySelector('#pracRun .prac-form'); f.querySelector('input').value='zzz'; f.requestSubmit(); } scan(document.getElementById('pracRun'),'fb'+i);
      if(!PR.done){ if(st.mode==='input'){ const f=document.querySelector('#pracRun .prac-form'); f.querySelector('input').value='zzz'; f.requestSubmit(); } else if(st.mode==='pick'){ const o=document.querySelector('#pracRun [data-po]:not([disabled])'); if(o) o.click(); } else { const t=document.querySelector('#pracRun [data-pt]'); if(t) t.click(); const c=document.querySelector('#pracRun .prac-chk'); if(c&&!c.disabled) c.click(); } scan(document.getElementById('pracRun'),'fb2-'+i); }
      if(!PR.done) break; document.querySelector('#pracRun .prac-rule')&&i===0&&(document.querySelector('#pracRun .prac-rule').click(),scan(document.querySelector('.prac-sheet'),'rule'),document.querySelector('.prac-sheet .prac-x').click()); document.querySelector('#pracRun .prac-next').click(); await tick(); if(!PR) break; }
    if(document.querySelector('#pracRun .prac-back')) document.querySelector('#pracRun .prac-back').click(); openLesson=null; route();
    showLangHome({step:2,closable:true}); const h=document.getElementById('langHome'); scan(h,'home2'); h.remove(); window.__fxBad=bad; return bad.length===0&&hits>=5; });
  if(!mc.fxNoi18n) res.checks.fxNoi18nBad=await p.evaluate(()=>window.__fxBad.slice(0,20));
  // no Korean anywhere on screen under the ja UI (all fixture content is Hangul-free, so any Hangul is engine text): every route, a Today session with right and wrong answers, drills, learn loop, lesson checks, idle slides
  const nk=await p.evaluate(async()=>{ const tick=ms=>new Promise(z=>setTimeout(z,ms||60)); const hits=new Set(); document.querySelectorAll('#fxIntro,.tour,.tourov').forEach(e=>e.remove()); S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.free=true; save();
    const scan=tag=>{ const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const s=n.nodeValue.trim(); const el=n.parentElement; if(!s||!el||el.closest('[hidden],script,style,#fxIntro')) continue; if(ALLH(s)) hits.add(tag+': '+s.slice(0,50)); }
      document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(e=>{ if(e.closest('[hidden]')) return; ['placeholder','aria-label','title'].forEach(a=>{ const v=e.getAttribute(a); if(v&&ALLH(v)) hits.add(tag+' @'+a+': '+v.slice(0,50)); }); }); };
    for(const r of ['today','practice','review','lessons','read','progress','feedback','privacy']){ location.hash='#'+r; route(); await tick(); scan(r); }
    location.hash='#today'; route(); await tick(); if(!document.querySelector('#startSess')) hits.add('no #startSess'); else document.querySelector('#startSess').click(); await tick(150);
    for(let st=0;st<140;st++){ const b=document.querySelector('#sessBody'); if(!b) break; scan('sess'); const it=sess&&sess.items[sess.i]; if(b.querySelector('.rvgo')){ b.querySelector('.rvgo').click(); await tick(); continue; } if(b.querySelector('.card')&&b.querySelector('[data-ans="1"]')){ b.querySelector('[data-ans="1"]').click(); await tick(230); continue; }
      const nx=b.querySelector('.next:not([hidden])'); if(nx){ nx.click(); await tick(); continue; } if(b.querySelector('#sayNext')){ document.querySelector('#sayGood').checked=true; b.querySelector('#sayNext').click(); await tick(); continue; }
      const opts=[...b.querySelectorAll('.opt:not([disabled])')]; if(opts.length){ const want=it&&it.c&&it.c[0]; (st%2?opts.find(o=>o.dataset.a!==want)||opts[0]:(opts.find(o=>o.dataset.a===want)||opts[0])).click(); await tick(120); scan('sess-fb'); continue; }
      const inp=b.querySelector('input.ans:not([disabled])'); if(inp){ inp.value=st%2?'zz':((it&&it.c)?it.c[0]:'zz'); b.querySelector('form').requestSubmit(); await tick(100); scan('sess-fb'); if(st%2&&b.querySelector('form')){ b.querySelector('form').requestSubmit(); await tick(100); scan('sess-fb2'); } continue; } await tick(400); }
    scan('sess-done'); location.hash='#read'; route(); await tick();
    for(const m of ['type','listen','role','say']){ const c=document.querySelector('#hModes [data-hm="'+m+'"]'); if(!c||c.hidden) continue; c.click(); await tick(100); scan('drill-'+m); const o=document.querySelector('#v-hangul .opt'); if(o){ o.click(); await tick(100); scan('drill-'+m+'-fb'); } const f=document.querySelector('#v-hangul form'); if(f){ const i=f.querySelector('input'); if(i) i.value='zz'; f.requestSubmit(); await tick(100); f.requestSubmit(); await tick(100); scan('drill-'+m+'-fb'); } }
    location.hash='#practice'; route(); await tick(); const ls=document.querySelector('#learnStart'); if(ls){ ls.click(); await tick(); for(let i=0;i<5;i++){ const a=document.querySelector('#quizRun [data-ans="1"]'); if(a){ a.click(); await tick(230); } } scan('learn'); const o=document.querySelector('#quizRun .opt'); if(o){ o.click(); await tick(100); scan('learn-fb'); } }
    location.hash='#lessons'; route(); await tick(); showLesson(LESSONS[0].id); await tick(); scan('lesson'); const ck=document.querySelector('#lessonBody .opt'); if(ck){ ck.click(); await tick(100); scan('check-fb'); } openLesson=null; route(); await tick();
    idleSlidesGen().forEach(x=>['ko','rom','en','tag','sub'].forEach(k=>{ if(x[k]&&ALLH(String(x[k]))) hits.add('idle '+k+': '+String(x[k]).slice(0,40)); }));
    [greet()[0],greet()[1],introSub(false),introSub(true)].forEach(s=>{ if(ALLH(s)) hits.add('greet/intro: '+s); }); location.hash='#today'; route(); return [...hits]; });
  res.checks.fxNoKorean=nk.slice(0,20); mc.fxNoKorean=nk.length===0;
  await ctx.close(); }
{ // typed answers in full-width mode match; results for every shipped practice item are identical to the previous normaliser
  const seed={'ko-app2':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'la-meta':JSON.stringify({v:1,native:'en',course:'en-ko',picked:1,seenHome:1,prefs:{}})};
  const {ctx,p}=await newCtx(seed); await fxInject(p,false);
  mc.fxFullWidth=await p.evaluate(()=>{ const oldNorm=s=>String(s==null?'':s).normalize('NFC').toLowerCase().replace(/[’‘`´ʼ]/g,"'").replace(/[.,!?~…。、！？，．～]/g,'').replace(/["“”«»「」『』]/g,'').replace(/(^|[^\p{L}\p{N}])'+/gu,'$1').replace(/'+(?=[^\p{L}\p{N}]|$)/gu,'').replace(/\s+/g,' ').trim();
    const oldMatch=(input,answers)=>{ const n=oldNorm(input); if(!n) return false; const ns=n.replace(/\s+/g,''); return (answers||[]).some(a=>{ const w=oldNorm(a); if(w===n) return true; return /[ㄱ-ㆎ가-힣]/.test(w+n)&&w.replace(/\s+/g,'')===ns; }); };
    const fw=pracMatch('Ｉ　ｌｉｋｅ　ｃａｔｓ',['I like cats'])&&pracMatch('ｄｏｎ＇ｔ　ｗｏｒｒｙ！',["Don't worry"])&&pracMatch('Ｉ’ｍ　２０',["I'm 20"])&&!pracMatch('Ｉ　ｌｉｋｅ　ｄｏｇｓ',['I like cats'])&&pracMatch('저는　커피를 마셔요',['저는 커피를 마셔요']);
    applyCourse('ja-en'); const nt=normT('Ｉ　ｌｉｋｅ　ｃａｔｓ．')===normT('I like cats.'); let diff=0, total=0;
    for(const cid of ['en-ko','ko-en','ja-en']){ applyCourse(cid); Object.keys(PRACTICE).forEach(id=>PRACTICE[id].forEach(it=>{ const ans=(it.a||[]).map(String), cand=[...ans,...(it.x||[]),...(it.o||[]),ans.join(' ')].map(String);
      if(it.t==='order'){ const m=ans.join(' '); (it.x||[]).forEach(x=>ans.forEach((_,k)=>{ const alt=ans.slice(); alt[k]=x; cand.push(alt.join(' ')); })); cand.forEach(c=>{ total++; if(pracMatch(c,[m])!==oldMatch(c,[m])) diff++; }); }
      else cand.forEach(c=>{ total++; if(pracMatch(c,ans)!==oldMatch(c,ans)) diff++; }); })); }
    applyCourse('en-ko'); window.__fw={fw,nt,diff,total}; return fw&&nt&&diff===0&&total>500; });
  res.checks.fxFullWidth=await p.evaluate(()=>window.__fw);
  await ctx.close(); }
{ // a course this build does not know (e.g. synced from a newer build) survives course switches, remote merges, sync payloads, exports/imports and boot
  const xx={xp:42,updatedAt:1000,cards:{'Deck|word':{box:3,due:5,seen:2,lapses:0,last:900,newField:7}},days:{'2026-11-01':12},practice:{l1:{n:2,first:1,last:0.5,ts:5,extra:'keep'}},zz:{nested:[1,2,{a:'b'}]},listenFirst:true,custom:[[1,2]]};
  const xs=JSON.stringify(xx);
  const seed={'ko-app2':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'la-meta':JSON.stringify({v:1,native:'en',course:'en-ko',picked:1,seenHome:1,prefs:{}}),'la-s-xx-yy':xs};
  const {ctx,p}=await newCtx(seed);
  const u=await p.evaluate(xs=>{ const raw=()=>localStorage.getItem('la-s-xx-yy'); const out={};
    applyCourse('ko-en'); S.xp=5; save(); flushSave(); applyCourse('en-ko'); out.switch=raw()===xs;
    out.payload=stableStr(syncPayload()._courses['xx-yy'])===stableStr(JSON.parse(xs));
    const older=JSON.parse(xs); older.updatedAt=10; older.xp=1; delete older.zz; applyRemoteRow({xp:0,cards:{},days:{},updatedAt:1,_courses:{'xx-yy':older}}); out.olderRemote=raw()===xs;
    applyRemoteRow({xp:0,cards:{},days:{},updatedAt:1,_courses:{'xx-yy':JSON.parse(xs)}}); out.sameRemote=raw()===xs;
    const newer=JSON.parse(xs); newer.updatedAt=2000; newer.xp=50; newer.zz2={k:1}; newer.practice.l1.extra2=3; applyRemoteRow({xp:0,cards:{},days:{},updatedAt:1,_courses:{'xx-yy':newer}}); out.newerRemote=stableStr(JSON.parse(raw()))===stableStr(newer);
    out.payload2=stableStr(syncPayload()._courses['xx-yy'])===stableStr(newer);
    const ex=JSON.parse(exportText()); out.exportCurrent=ex._course==='en-ko'&&!ex._courses; const before=raw(); document.getElementById('impTxt').value=exportText(); document.getElementById('impGo').click(); out.importOther=raw()===before;
    document.getElementById('impTxt').value=JSON.stringify({_course:'xx-yy',cards:{'Deck|other':{box:2,due:0,seen:1,lapses:0,last:3000}},xp:60,updatedAt:3000}); document.getElementById('impGo').click(); const m=JSON.parse(raw()); out.importTagged=!!m.cards['Deck|word']&&!!m.cards['Deck|other']&&m.xp===60&&!!m.zz&&!!m.zz2;
    out.erase=null; return out; },xs);
  await ctx.close();
  const b2=JSON.stringify(Object.assign({},xx)); const {ctx:c2,p:p2}=await newCtx({'ko-app2':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'la-meta':JSON.stringify({v:1,native:'xx',course:'xx-yy',picked:1,seenHome:1,prefs:{}}),'la-s-xx-yy':b2});
  u.boot=await p2.evaluate(b2=>{ save(); flushSave(); return COURSE.id==='en-ko'&&localStorage.getItem('la-s-xx-yy')===b2&&syncPayload()._meta.course==='xx-yy'&&stableStr(syncPayload()._courses['xx-yy'])===stableStr(JSON.parse(b2)); },b2);
  await c2.close(); delete u.erase; res.checks.fxUnknownCourse=u; mc.fxUnknownCourse=Object.values(u).every(v=>v===true); }
{ // boot with a pack-shaped ja-en course and ja interface pack inlined like real packs (bare: no TITLES/GOALS/PLAN_PRESETS/PAUSE/PRACTICE, so engine fallbacks are exercised)
  const OUT2=OUT.replace('page.html','page-ja.html'); const fxSrc='/* fixture: ja-en */\n;(function(){ var H=function(v){ return typeof v==="string"?v.replace(/[가-힣]/g,function(c){ return String.fromCharCode(0x4E00+c.charCodeAt(0)-0xAC00); }).replace(/[ㄱ-ㅣ]/g,function(c){ return String.fromCharCode(0x3041+(c.charCodeAt(0)-0x3131)%80); }):Array.isArray(v)?v.map(H):v&&typeof v==="object"?Object.fromEntries(Object.entries(v).map(function(e){ return [H(e[0]),H(e[1])]; })):v; };\n'+
    ' var c=H(LANGAPP_PACKS.course["ko-en"]); ["TITLES","GOALS","PLAN_PRESETS","PAUSE","PRACTICE","_rt"].forEach(function(k){ delete c[k]; }); c.id="ja-en"; c.native="ja"; c.target="en"; c.name={en:"English",ja:"英語"}; LANGAPP_PACKS.course["ja-en"]=c; LANGAPP_PACKS.i18n.ja='+JSON.stringify(FX_JA)+'; })();\n';
  const hh=fs.readFileSync(OUT,'utf8'); fs.writeFileSync(OUT2,hh.replace('/* pack: i18n-ko.js */',()=>fxSrc+'/* pack: i18n-ko.js */'));
  const ctxAt=async(seed,locale)=>{ const ctx=await b.newContext(Object.assign({viewport:{width:390,height:800},colorScheme:'dark',hasTouch:true,isMobile:true},locale?{locale}:{})); const p=await ctx.newPage();
    p.on('pageerror',e=>res.errors.push('JA PAGEERR '+e.message)); p.on('console',m=>{ if(m.type()==='error'&&!/fonts|net::/.test(m.text())) res.errors.push('JA CONSOLE '+m.text()); });
    await ctx.route(/supabase|fonts\.g/,r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
    if(seed) await ctx.addInitScript(s=>{ if(!sessionStorage.getItem('__seeded')){ Object.entries(s).forEach(([k,v])=>localStorage.setItem(k,v)); sessionStorage.setItem('__seeded','1'); } },seed);
    await p.goto('file://'+OUT2); await p.waitForTimeout(300); await p.evaluate(()=>{ window.ALLH=s=>/[가-힣ㄱ-ㅣ]/.test(s); const c=document.getElementById('fx3d'); if(c) c.style.display='none'; }); return {ctx,p}; };
  const bt={};
  { const {ctx,p}=await ctxAt(null,'ja-JP'); // fresh Japanese visitor: first paint is Japanese only, language home lists Japanese, picking it lands in ja-en with the ja UI
    bt.freshJa=await p.evaluate(async()=>{ const w=document.getElementById('welcome'); if(!w) return 'no welcome'; const t=w.innerText; if(!/📧 メール/.test(t)||/Email ·/.test(t)||ALLH(t)||w.querySelector('[lang="ko"]')||preLang()!=='ja') return 'welcome '+t.slice(0,120);
      w.querySelector('#wNick').click(); await new Promise(z=>setTimeout(z,90)); w.querySelector('#wNickIn').value='J'; w.querySelector('#wForm').requestSubmit(); await new Promise(z=>setTimeout(z,250));
      const h=document.getElementById('langHome'); if(!h||!/何語を話しますか？/.test(h.textContent)||!h.querySelector('[data-native="ja"]')) return 'step1'; h.querySelector('[data-native="ja"]').click(); h.querySelector('[data-course="ja-en"]').click(); await new Promise(z=>setTimeout(z,250));
      return COURSE.id==='ja-en'&&uiLang()==='ja'&&document.documentElement.lang==='ja'&&!!COURSES['ja-en']&&!COURSES['ja-en'].builtin||'pick '+COURSE.id; });
    await ctx.close(); }
  { const st=JSON.stringify({nick:'J',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1,xp:11});
    const {ctx,p}=await ctxAt({'la-s-ja-en':st,'ko-app2':JSON.stringify({nick:'J',welcomed:1,xp:33}),'la-meta':JSON.stringify({v:1,native:'ja',course:'ja-en',picked:1,seenHome:1,prefs:{}})});
    // reload straight into ja-en: ja UI at boot, every route and the sheets/search/tour/exam render without Korean (TITLES/GOALS/PLAN_PRESETS fallbacks included)
    const r=await p.evaluate(async()=>{ const tick=ms=>new Promise(z=>setTimeout(z,ms||70)); const hits=new Set(); const boot=COURSE.id==='ja-en'&&uiLang()==='ja'&&document.documentElement.lang==='ja'&&S.xp===11; document.querySelectorAll('#fxIntro,.tour,.tourov').forEach(e=>e.remove());
      const scan=tag=>{ const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while((n=w.nextNode())){ const s=n.nodeValue.trim(); const el=n.parentElement; if(!s||!el||el.closest('[hidden],script,style,#fxIntro')) continue; if(ALLH(s)) hits.add(tag+': '+s.slice(0,50)); }
        document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(e=>{ if(e.closest('[hidden]')) return; ['placeholder','aria-label','title'].forEach(a=>{ const v=e.getAttribute(a); if(v&&ALLH(v)) hits.add(tag+' @'+a+': '+v.slice(0,50)); }); }); };
      for(const rt of ['today','practice','review','lessons','read','progress','feedback','privacy']){ location.hash='#'+rt; await tick(); scan(rt); }
      location.hash='#progress'; await tick(); const pl=document.querySelector('[data-plan]'); scan('plans');
      globalSearch(); const gi=document.querySelector('#gsIn'); gi.value='a'; gi.dispatchEvent(new Event('input')); await tick(); scan('search'); closeSheet();
      for(const sh of ['read','review','practice']){ try{ openSheet(sh); await tick(); scan('sheet-'+sh); closeSheet(); }catch(e){} }
      location.hash='#today'; await tick(); try{ S.tourDone=0; tourStep(0); await tick(); scan('tour'); document.querySelectorAll('.tour,.tourov,[class*=tour]').forEach(e=>{ if(e.id!=='v-today') e.remove(); }); S.tourDone=1; }catch(e){}
      location.hash='#practice'; await tick(); const ex=document.getElementById('examStart'); if(ex&&!ex.disabled){ ex.click(); await tick(150); scan('exam'); const o=document.querySelector('#quizRun .opt'); if(o){ o.click(); await tick(120); scan('exam-fb'); } }
      const lv=[titleOf(1),titleOf(3)].map(t=>t.join(' ')); if(lv.some(ALLH)) hits.add('titles: '+lv.join(' | ')); idleSlidesGen().forEach(x=>['ko','en','tag','rom'].forEach(k=>{ if(x[k]&&ALLH(String(x[k]))) hits.add('idle '+k+': '+x[k]); }));
      // three courses keep their own progress across switches; the sync payload carries both pack courses
      S.xp=11; save(); flushSave(); applyCourse('ko-en'); S.xp=22; save(); flushSave(); applyCourse('en-ko'); const en0=S.xp===33; applyCourse('ja-en'); const a=S.xp===11; applyCourse('ko-en'); const b2=S.xp===22; applyCourse('en-ko'); const c=S.xp===33; applyCourse('ja-en');
      const pay=syncPayload(); const three=en0&&a&&b2&&c&&pay.xp===33&&pay._courses['ja-en'].xp===11&&pay._courses['ko-en'].xp===22&&pay._meta.course==='ja-en';
      location.hash='#today'; return {boot,three,hits:[...hits].slice(0,20)}; });
    bt.bootJa=r.boot; bt.threeCourses=r.three; bt.bootNoKorean=r.hits.length===0; if(r.hits.length) res.checks.bootJaHangul=r.hits;
    await ctx.close(); }
  { // a device that has not picked a course yet adopts ja-en from the synced _meta
    const {ctx,p}=await ctxAt({'ko-app2':JSON.stringify({nick:'J',welcomed:1}),'la-meta':JSON.stringify({v:1,native:null,course:'en-ko',picked:0,seenHome:0,prefs:{}})});
    bt.remoteMetaJa=await p.evaluate(()=>{ const lh=document.getElementById('langHome'); const before=META.picked===0; applyRemoteRow({xp:0,cards:{},days:{},updatedAt:1,_meta:{native:'ja',course:'ja-en'},_courses:{'ja-en':{xp:7,cards:{},days:{},updatedAt:5}}}); return before&&COURSE.id==='ja-en'&&S.xp===7&&uiLang()==='ja'&&document.documentElement.lang==='ja'&&!document.getElementById('langHome'); });
    await ctx.close(); }
  res.checks.fxBoot=bt; mc.fxBootJa=Object.values(bt).every(v=>v===true); }
{ // booting straight into a pack course (reload while in ko-en) and opening Practice must not fall back to an en-ko deck name
  const {ctx,p}=await newCtx({'la-s-ko-en':JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,free:1}),'ko-app2':JSON.stringify({nick:'K',welcomed:1}),'la-meta':JSON.stringify({v:1,native:'ko',course:'ko-en',picked:1,seenHome:1,prefs:{}})});
  mc.bootPackCourse=await p.evaluate(async()=>{ let ok=COURSE.id==='ko-en'&&uiLang()==='ko'; for(const r of ['practice','review','read','lessons','progress','today']){ try{ location.hash='#'+r; route(); await new Promise(z=>setTimeout(z,60)); }catch(e){ ok=false; } } return ok&&[...qSel].every(d=>DECKS[d])&&document.querySelectorAll('#quizDecks .chip').length>0; });
  await ctx.close(); }
}
// pack integrity for every course
res.checks.packs=await (async()=>{ const {ctx,p}=await newCtx(null); const r=await p.evaluate(()=>{ const out={}; Object.values(COURSES).forEach(c=>{ const rt=courseRT(c); const raw=c.builtin?Object.keys(c.DECKS).filter(d=>d!==MYDECK):Object.keys(c.DECKS); const tg=[]; raw.forEach(d=>(c.DECKS[d]||[]).forEach(x=>tg.push(String(x[0]).toLowerCase().trim())));
    const grouped=raw.every(d=>(c.GROUPS||[]).some(g=>g[1].includes(d))&&(c.GROUPS||[]).filter(g=>g[1].includes(d)).length===1), tagged=raw.every(d=>Object.values(c.TAGS||{}).some(a=>a.includes(d)));
    const keys=new Set(); raw.forEach(d=>(c.DECKS[d]||[]).forEach(x=>keys.add(x[0]))); const L=c.LESSONS||[];
    const dupMeaning=raw.filter(d=>{ const m=(c.DECKS[d]||[]).map(x=>x[2]); return new Set(m).size!==m.length; });
    out[c.id]={decks:raw.length,cards:tg.length,lessons:L.length,dupTargets:tg.length-new Set(tg).size,grouped,tagged,lessonDecks:L.every(l=>c.DECKS[l.deck]),dialogKeys:Object.keys(c.DIALOG||{}).every(k=>keys.has(k)),exampleKeys:Object.keys(c.EXAMPLES||{}).every(k=>keys.has(k)),checks3:L.every(l=>(c.CHECKS||{})[l.id]&&c.CHECKS[l.id].length>=3),dupMeaningDecks:dupMeaning.length,builtin:!!c.builtin}; }); return out; }); await ctx.close(); return r; })();
Object.values(res.checks.packs).forEach(x=>{ mc['pack_'+Object.keys(res.checks.packs).find(k=>res.checks.packs[k]===x)]=x.grouped&&x.tagged&&x.lessonDecks&&x.dialogKeys&&x.exampleKeys&&x.checks3&&(x.builtin||(x.dupTargets===0&&x.dupMeaningDecks===0)); });
if(koSkip){ mc.koEnPack='skip (no packs/course-ko-en.js in this build)'; }
res.checks.multiCourse=mc; res.checks.features=Object.assign(res.checks.features||{},mc); const mbad=Object.entries(mc).filter(([k,v])=>!v).map(([k])=>k); if(mbad.length) res.errors.push('MULTI-COURSE FAIL: '+mbad.join(','));
res.koSkip=koSkip;
await b.close(); console.log(JSON.stringify(res,null,1)); const bad=Object.entries(res.checks.features||{}).filter(([k,v])=>!v).map(([k])=>k); console.log(`\nHEALTH: ${res.errors.length?'❌ '+res.errors.length+' errors':'✅ no errors'} · ${res.overflow.length?'❌ overflow':'✅ no overflow'} · ${bad.length?'❌ '+bad.join(','):'✅ '+Object.keys(res.checks.features||{}).length+' guards pass'} · ${JSON.stringify(res.checks.sizes)}${res.koSkip?' · ⚠ ko-en pack missing: multi-course ko-en guards skipped':''}`);
})();

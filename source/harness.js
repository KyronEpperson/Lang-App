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
const newCtx=async(seed)=>{ const ctx=await b.newContext({viewport:{width:390,height:800},colorScheme:'dark',hasTouch:true,isMobile:true}); const p=await ctx.newPage();
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
  mc.lockedDisabled=await p.evaluate(()=>{ const l=[...document.querySelectorAll('#langHome .lh-lock')]; const before=JSON.stringify(META); l.forEach(x=>x.click()); return l.length>0&&l.every(x=>x.getAttribute('aria-disabled')==='true'&&!x.matches('button,a,input')&&x.tabIndex<0&&!x.querySelector('button,a'))&&JSON.stringify(META)===before&&!!document.getElementById('langHome'); });
  koSkip=!(await p.evaluate(()=>!!COURSES['ko-en']));
  if(koSkip){ mc.koSoon=await p.evaluate(()=>[...document.querySelectorAll('#langHome .lh-lock')].some(x=>/한국어/.test(x.textContent))&&!document.querySelector('#langHome [data-native="ko"]')); }
  else {
    await p.evaluate(()=>document.querySelector('#langHome [data-native="ko"]').click()); await p.waitForTimeout(120); await ovr(p,'langhome-2');
    mc.lockedDisabled=mc.lockedDisabled&&await p.evaluate(()=>[...document.querySelectorAll('#langHome .lh-lock')].every(x=>x.getAttribute('aria-disabled')==='true'&&!x.matches('button')));
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
  mc.migratedNoHome=await p.evaluate(()=>!document.getElementById('langHome')&&!document.getElementById('welcome')&&META.picked===1&&META.native==='en'&&COURSE.id==='en-ko'&&S.xp===777&&S.nick==='Old'&&!!S.cards['Survival phrases|안녕하세요']&&JSON.parse(localStorage.getItem('la-meta')).course==='en-ko');
  // old-shape remote row merges cleanly; unknown courses in _courses are kept
  mc.remoteMerge=await p.evaluate(()=>{ const remote={xp:900,cards:{'Numbers|하나, 둘, 셋':{box:2,due:0,seen:1,lapses:0,last:5}},days:{},updatedAt:1,_courses:{'xx-yy':{xp:5,cards:{}}}}; applyRemoteRow(remote); const ok1=S.xp===900&&!!S.cards['Numbers|하나, 둘, 셋']&&!!S.cards['Survival phrases|안녕하세요']&&!S._courses; const pl=syncPayload(); return ok1&&!!pl._courses&&pl._courses['xx-yy']&&pl._courses['xx-yy'].xp===5; });
  await ctx.close(); }
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

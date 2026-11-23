/* es-ko fixture: a tiny Spanish → Korean pack injected into the built app. Proves a course with target 'ko' that is NOT the built-in
   one runs, and that no English / "inglés" leaks onto its screens. usage: node tools/tests/esko.js [--dump] */
const {chromium}=require('playwright'); const path=require('path'); const DUMP=process.argv.includes('--dump');
const PACK={ id:'es-ko', native:'es', target:'ko', ttsLang:'ko-KR', name:{en:'Korean',es:'coreano',ko:'한국어'}, brand:'한글',
  features:{script:false,pron:false,conj:false,register:false,numbers:false,sound:false,strokes:false},
  GREET:[['안녕하세요','Hola (es tarde)'],['좋은 아침이에요','Buenos días'],['안녕하세요','Buenas tardes'],['좋은 저녁이에요','Buenas noches']],
  TITLES:[[1,'새싹','Brote'],[3,'학생','Estudiante'],[6,'친구','Amigo'],[10,'여행자','Viajero'],[15,'이야기꾼','Narrador'],[20,'달인','Maestro']],
  UI:{'Korean (required)':'Coreano (obligatorio)'},
  DECKS:{ 'Saludos':[['안녕하세요','annyeonghaseyo','Hola (formal)','Sirve con cualquiera.'],['감사합니다','gamsahamnida','Gracias','Formal.'],['네','ne','Sí','También «le escucho».'],['아니요','aniyo','No','Cortés.'],['죄송합니다','joesonghamnida','Lo siento','Formal.'],['안녕히 가세요','annyeonghi gaseyo','Adiós (al que se va)','Lo dice quien se queda.']],
    'Comida':[['물','mul','agua',''],['밥','bap','arroz; comida',''],['커피','keopi','café',''],['김치','gimchi','kimchi',''],['맛있어요','masisseoyo','Está rico',''],['주세요','juseyo','Deme, por favor','Tras el objeto.']] },
  GROUPS:[['Primeros pasos',['Saludos','Comida']]], DESC:{'Saludos':'Saludar y agradecer.','Comida':'Pedir y opinar.'},
  DIALOG:{'안녕하세요':['안녕하세요!','네, 안녕하세요!','¡Hola! / ¡Sí, hola!']}, EXAMPLES:{'물':['물 주세요.','Agua, por favor.']}, PATTERNS:[['__ 주세요','Deme __, por favor','커피 주세요','Un café, por favor']],
  LESSONS:[{id:'meet',title:'1 · Saludar',blurb:'Decir hola y gracias.',deck:'Saludos',body:'<h3>Hola</h3><p>En coreano el saludo no cambia con la hora.</p>{{ex:안녕하세요|annyeonghaseyo|Hola}}{{ex:감사합니다|gamsahamnida|Gracias}}<div class="strokes-grid">{{strokes:ㄱ}}{{strokes:ㅏ}}</div>'},
    {id:'polite',title:'2 · Pedir',blurb:'Pedir algo con 주세요.',deck:'Comida',body:'<h3>Pedir</h3><p>El objeto va primero y 주세요 al final.</p>{{ex:물 주세요|mul juseyo|Agua, por favor}}'}],
  CHECKS:{meet:[['«Gracias» es…',['감사합니다','안녕하세요','네','아니요'],0,'감사합니다 es gracias.']],polite:[['«Agua, por favor» es…',['밥 주세요','물 주세요','커피 주세요','김치 주세요'],1,'물 es agua.']]},
  PRACTICE:{ meet:[{t:'mc',q:'¿Cómo se dice «hola»?',o:['안녕하세요','감사합니다','네','아니요'],why:'안녕하세요 es el saludo.'},{t:'order',p:'Sí, hola.',a:['네','안녕하세요'],x:['아니요'],why:'네 va primero.'},{t:'fill',q:'안녕__',p:'Hola (formal)',a:['하세요'],o:['히 가세요','합니다','이에요'],why:'안녕하세요.'},{t:'type',p:'Gracias',a:['감사합니다'],hint:'감사 · formal',why:'감사합니다.'}],
    polite:[{t:'mc',q:'«Agua, por favor»',o:['물 주세요','밥 주세요','물 맛있어요','주세요 물'],why:'Objeto + 주세요.'},{t:'order',p:'Un café, por favor.',a:['커피','주세요'],x:['물'],why:'El objeto va primero.'},{t:'fill',q:'김치 __',p:'Kimchi, por favor',a:['주세요'],o:['맛있어요','감사합니다','아니요'],why:'주세요 pide.'},{t:'type',p:'Agua, por favor',a:['물 주세요'],hint:'물 · 주세요',why:'물 주세요.'}] } };
const BAD=/\b(English|Korean \(required\)|Hangul|Survival phrases|good morning|good evening|Sprout)\b|[Ii]ngl[eé]s/;
(async()=>{ const b=await chromium.launch(); const ctx=await b.newContext({locale:'es-MX'}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
  await p.goto('file://'+(process.env.ESKO_SRC||path.resolve(__dirname,'../../korean-flashcards.html'))); await p.waitForTimeout(1200); let fail=0; const ok=(n,c,d)=>{ console.log((c?'PASS ':'FAIL ')+n+(c?'':' :: '+(d||''))); if(!c) fail++; };
  const reg=await p.evaluate(P=>{ const w=document.getElementById('welcome'); if(w) w.remove(); if(!validCourse('es-ko',P)) return 'invalid'; COURSES['es-ko']=P; META.native='es'; META.picked=1; META.seenHome=1; const r=applyCourse('es-ko'); return {r,id:COURSE.id,ui:(typeof uiLang==='function'?uiLang():null),decks:Object.keys(DECKS).length,les:LESSONS.length}; },PACK);
  ok('E1 pack validates and applies',reg&&reg.id==='es-ko'&&reg.les===2,JSON.stringify(reg)); ok('E1 interface language is Spanish',reg.ui==='es',JSON.stringify(reg));
  const seen={}; const scan=async(name)=>{ await p.waitForTimeout(500); const t=await p.evaluate(()=>{ const vis=e=>{ const s=getComputedStyle(e); return s.display!=='none'&&s.visibility!=='hidden'; }; const out=[]; const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const e=n.parentElement; if(!e||/SCRIPT|STYLE|TEMPLATE/.test(e.tagName)) continue; let x=e,v=true; while(x&&x!==document.body){ if(!vis(x)||x.hidden){v=false;break;} x=x.parentElement; } const s=n.textContent.trim(); if(v&&s) out.push(s); } document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(i=>{ if(i.offsetParent) out.push('[ph] '+i.placeholder); }); return out; }); seen[name]=t; const hits=t.filter(s=>BAD.test(s)); ok('E2 '+name+': no English / inglés',hits.length===0,hits.slice(0,6).join(' ¦ ')); };
  for(const h of ['#today','#lessons','#review','#practice','#read','#progress','#settings']){ await p.evaluate(h=>{ location.hash=h; if(typeof route==='function') route(); },h); await scan(h); }
  /* open a lesson, its check and practice */
  const les=await p.evaluate(()=>{ location.hash='#lessons'; route(); const b=document.querySelector('[data-lesson="meet"],[data-open="meet"],[data-id="meet"]'); if(b){ b.click(); return 'click'; } if(typeof openLesson!=='undefined'){ openLesson='meet'; route(); return 'var'; } return null; }); await scan('lesson meet ('+les+')');
  const body=await p.evaluate(()=>document.body.innerText); ok('E3 lesson body shows the Spanish prose and Korean examples',/saludo no cambia/.test(body)&&/감사합니다/.test(body),body.slice(0,200).replace(/\n/g,' '));
  const stx=await p.evaluate(()=>({cells:document.querySelectorAll('.sgl svg').length,raw:/\{\{strokes/.test(document.body.innerText)})); ok('E3b stroke-order tokens draw diagrams',stx.cells===2&&!stx.raw,JSON.stringify(stx));
  /* grading: typed Hangul against the pack's answers */
  const g=await p.evaluate(()=>{ const it=COURSE.PRACTICE.polite[3]; const m=typeof pracMatch==='function'?pracMatch:null; if(!m) return 'no pracMatch'; const r=x=>{ try{ return JSON.stringify(m(x,it.a)); }catch(e2){ return 'ERR '+e2; } }; return {exact:r('물 주세요'),nospace:r('물주세요'),wrong:r('밥 주세요')}; }); console.log('   grading',JSON.stringify(g));
  /* progress key and save */
  const sv=await p.evaluate(()=>{ try{ S.xp=(S.xp||0)+5; flushSaveNow(); }catch(e){ return 'ERR '+e; } const ks=Object.keys(localStorage).filter(k=>/es-ko|ko-app2/.test(k)); return {ks,builtinTouched:Object.keys(localStorage).includes('ko-app2')?(localStorage.getItem('ko-app2')||'').length:0}; }); ok('E4 progress saved under its own key',sv.ks&&sv.ks.some(k=>/es-ko/.test(k)),JSON.stringify(sv));
  const gr=await p.evaluate(()=>{ try{ return greet(); }catch(e){ return 'ERR '+e; } }); ok('E5 greeting comes from the pack, gloss in Spanish',Array.isArray(gr)&&!/good|joeun/i.test(gr.join(' '))&&/Hola|Buen/.test(gr[1]||''),JSON.stringify(gr));
  const ti=await p.evaluate(()=>{ try{ return JSON.stringify((typeof TITLES!=='undefined'?TITLES:COURSE.TITLES)[0]); }catch(e){ return 'ERR '+e; } }); ok('E6 level titles are Korean + Spanish',/새싹/.test(ti)&&/Brote/.test(ti),ti);
  const ph=await p.evaluate(()=>{ location.hash='#settings'; route(); const a=document.getElementById('acKo'); return a?a.placeholder:null; }); ok('E7 add-card placeholder says Korean in Spanish',ph&&/[Cc]oreano/.test(ph)&&!/ngl/.test(ph),String(ph));
  const pz=await p.evaluate(()=>{ try{ const s=typeof idleSlidesGen==='function'?idleSlidesGen():null; return s?JSON.stringify(s.map(x=>[x.ko,x.en])).slice(0,400):null; }catch(e){ return 'ERR '+e; } }); ok('E8 pause screen words are Korean, not English',pz&&!/Paused|You\'ve got this/.test(pz),String(pz).slice(0,200));
  ok('E9 no page errors',errs.length===0,errs.join(' ¦ '));
  /* back to the built-in course: nothing changed for it */
  const back=await p.evaluate(()=>{ applyCourse('en-ko'); return {id:COURSE.id,decks:Object.keys(DECKS).length,g:greet()}; }); ok('E10 built-in course unchanged after switching back',back.id==='en-ko'&&back.decks>=43,JSON.stringify(back));
  /* ---- E11–E13 + WP1 (docs/TRAINERS-PLAN.md): trainer gating and the Hangul drill on the REAL assembled es-ko pack (packs/course-es-ko.js, inline in the build) ---- */
  await trainerTests(b,ok,PACK,BAD);
  if(DUMP) console.log(JSON.stringify(seen,null,1).slice(0,9000)); await b.close(); console.log(fail?('ESKO FAIL '+fail):'ESKO OK'); process.exit(fail?1:0); })();

/* the trainer half of the es-ko tests: each scenario in its own context */
async function trainerTests(b,ok,PACK,BAD){
  const page=async(locale)=>{ const ctx=await b.newContext({locale:locale||'es-MX',viewport:{width:390,height:800}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
    await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
    await p.goto('file://'+(process.env.ESKO_SRC||path.resolve(__dirname,'../../korean-flashcards.html'))); await p.waitForTimeout(900); return {ctx,p,errs}; };
  const visText=p=>p.evaluate(()=>{ const vis=e=>{ const s=getComputedStyle(e); return s.display!=='none'&&s.visibility!=='hidden'; }; const out=[]; const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while(n=w.nextNode()){ const e=n.parentElement; if(!e||/SCRIPT|STYLE|TEMPLATE/.test(e.tagName)) continue; let x=e,v=true; while(x&&x!==document.body){ if(!vis(x)||x.hidden){v=false;break;} x=x.parentElement; } const s=n.textContent.trim(); if(v&&s) out.push(s); } document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(i=>{ if(i.offsetParent) out.push('[ph] '+i.placeholder); }); document.querySelectorAll('[aria-label],[title]').forEach(i=>{ if(i.offsetParent&&!i.closest('#nav,header')){ if(i.getAttribute('aria-label')) out.push('[aria] '+i.getAttribute('aria-label')); if(i.title) out.push('[title] '+i.title); } }); return out; });
  /* Korean card content may legitimately say «inglés» (영어 = English); UI chrome may not */
  const DRILL_EN=/type the sound|English letters|Which one did you hear|\bsyllable\b|^word$|Two quick questions|Can you already|^Not yet$|^Slowly$|Yes, fluently|How much time|Set up\. Start|stroke order|^Why: |Show rule/; /* the trainers' own English literals */
  const leaks=(t,allow)=>t.filter(s=>(BAD.test(s)||DRILL_EN.test(s))&&!(allow||[]).some(a=>s===a)); /* allow: exact text nodes only (e.g. the meaning «inglés» of 영어) */
  const apply=(p,id)=>p.evaluate(id=>{ const w=document.getElementById('welcome'); if(w) w.remove(); META.native='es'; META.picked=1; META.seenHome=1; applyCourse(id); S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; return {id:COURSE.id,script:CF('script'),kinds:!!COURSE.KINDS,tr:COURSE.TRAINER?Object.keys(COURSE.TRAINER):null}; },id);

  /* ---- real pack ---- */
  { const {ctx,p,errs}=await page();
    const r=await apply(p,'es-ko'); ok('H0 real es-ko pack: script on, KINDS + TRAINER present',r.id==='es-ko'&&r.script&&r.kinds&&r.tr&&r.tr.includes('hangul'),JSON.stringify(r));
    /* mode chips: only the modes this pack has data for */
    const chips=await p.evaluate(()=>{ location.hash='#read'; route(); return [...document.querySelectorAll('#hModes .chip')].filter(b=>!b.hidden).map(b=>b.dataset.hm); });
    ok('H1 read tab offers type + listen&pick, not build/register/numbers/sound',chips.includes('type')&&chips.includes('pick')&&!['build','register','numbers','sound'].some(m=>chips.includes(m)),chips.join(','));
    /* the Hangul drill with fixed items: grade typed romanisation */
    const grade=await p.evaluate(()=>{ const real=hangulItem; const res={}; const st=$('hangulStage'); S.drillMode='type';
      const one=(w,typed)=>{ hangulItem=()=>Object.assign({ch:w},answersFor(w)); if(cleanup){cleanup();cleanup=null;} cleanup=renderHangulQ(st,2,()=>{}); const inp=st.querySelector('input.ans'); const ui={ph:inp.placeholder,aria:inp.getAttribute('aria-label'),lang:inp.lang,im:inp.getAttribute('inputmode'),lvl:st.querySelector('.row .stat').textContent}; inp.value=typed; st.querySelector('form').dispatchEvent(new Event('submit',{cancelable:true})); return {ok:inp.classList.contains('right'),bad:inp.classList.contains('wrong'),fb:st.querySelector('.fb').innerHTML,ui}; };
      res.seoul=one('서울','seoul'); res.soul=one('서울','soul'); res.gwa=one('과','gwa'); res.gua=one('과','gua'); res.ge=one('게','ge'); res.gue=one('게','gue'); res.so=one('서','so'); res.se=one('세','sé'); res.kimchi=one('김치','quimchi'); res.nyo=one('뇨','ño'); res.uh=one('서','suh'); res.hangul=one('한국','한국');
      hangulItem=()=>Object.assign({ch:'서울'},answersFor('서울')); if(cleanup){cleanup();cleanup=null;} cleanup=renderHangulQ(st,2,()=>{}); st.querySelector('form').dispatchEvent(new Event('submit',{cancelable:true})); res.empty=st.querySelector('.fb').innerHTML; res.screen=st.innerText;
      hangulItem=real; return res; });
    ok('H2 Spanish drill prompts (placeholder, label, level word, lang=es)',/escribe el sonido/.test(grade.seoul.ui.ph)&&grade.seoul.ui.aria==='Romanización'&&grade.seoul.ui.lvl==='palabra'&&grade.seoul.ui.lang==='es'&&grade.seoul.ui.im==='latin',JSON.stringify(grade.seoul.ui));
    ok('H3 correct romanisation graded right: 서울 seoul, 과 gwa, 게 ge',grade.seoul.ok&&grade.gwa.ok&&grade.ge.ok,JSON.stringify([grade.seoul.ok,grade.gwa.ok,grade.ge.ok]));
    ok('H4 Spanish-spelling alternates graded right: 과 gua, 게 gue, 세 sé (folded), 김치 quimchi, 뇨 ño',grade.gua.ok&&grade.gue.ok&&grade.se.ok&&grade.kimchi.ok&&grade.nyo.ok,JSON.stringify([grade.gua.ok,grade.gue.ok,grade.se.ok,grade.kimchi.ok,grade.nyo.ok]));
    ok('H5 wrong answers rejected: 서울 soul, 서 so, 서 suh (English tail is not Spanish)',grade.soul.bad&&grade.so.bad&&grade.uh.bad,JSON.stringify([grade.soul.bad,grade.so.bad,grade.uh.bad]));
    ok('H6 typed Hangul still accepted',grade.hangul.ok,grade.hangul.fb);
    ok('H7 feedback gloss is Spanish (서울 → Seúl)',/<b>Seúl<\/b>/.test(grade.seoul.fb)&&!/Seoul<\/b>|tree/.test(grade.seoul.fb),grade.seoul.fb);
    ok('H8 empty-input hint in Spanish, no "English letters"',/letras latinas/.test(grade.empty)&&!/English|inglés/i.test(grade.empty),grade.empty);
    const shot=path.resolve(__dirname,'../../review/trainers'); require('fs').mkdirSync(shot,{recursive:true});
    await p.evaluate(()=>{ const real=hangulItem; hangulItem=()=>Object.assign({ch:'과일'},answersFor('과일')); S.drillMode='type'; S.drillLvl=2; hangulNext(); hangulItem=real; const i=$('hangulStage').querySelector('input.ans'); i.value='guail'; }); await p.waitForTimeout(300);
    await p.screenshot({path:path.join(shot,'es-ko-hangul-drill-390.png'),fullPage:false});
    await p.evaluate(()=>{ const st=$('hangulStage'); st.querySelector('form').dispatchEvent(new Event('submit',{cancelable:true})); }); await p.waitForTimeout(250);
    await p.screenshot({path:path.join(shot,'es-ko-hangul-drill-390-answered.png'),fullPage:false});
    const drillTxt=await visText(p); ok('H9 drill screen: no English / inglés',leaks(drillTxt).length===0,leaks(drillTxt).slice(0,6).join(' ¦ '));
    /* listen & pick */
    const pick=await p.evaluate(()=>{ S.drillMode='pick'; hangulNext(); const st=$('hangulStage'); const t=st.innerText; st.querySelector('.opt').click(); return {t,fb:st.querySelector('.fb').innerHTML}; });
    ok('H10 listen & pick in Spanish',/¿Cuál escuchaste\?/.test(pick.t)&&!/Which one/.test(pick.t),pick.t.slice(0,120)); const pickTxt=await visText(p); ok('H10 pick screen: no English / inglés',leaks(pickTxt,['inglés']).length===0,leaks(pickTxt,['inglés']).slice(0,6).join(' ¦ '));
    /* onboarding (Korean course version) in Spanish */
    const ob=await p.evaluate(()=>{ S.onboard=null; location.hash='#today'; route(); renderOnboard(); return $('todayHome').innerText; });
    ok('H11 onboarding in Spanish',/Dos preguntas rápidas/.test(ob)&&/¿Ya sabes leer hangul\?/.test(ob)&&/¿Para qué quieres aprender coreano\?/.test(ob)&&!/Two quick|Can you already|What do you want/.test(ob),ob.slice(0,200).replace(/\n/g,' | '));
    const obTxt=await visText(p); ok('H11 onboarding screen: no English / inglés',leaks(obTxt).length===0,leaks(obTxt).slice(0,6).join(' ¦ '));
    const obGo=await p.evaluate(()=>{ $('obRead').querySelector('[data-v="yes"]').click(); $('obGo').click(); const vowels=COURSE.ROLES.hangulVowels; return {toast:$('toast').textContent,known:DECKS[vowels].filter(c=>cardState(vowels,c)).length,total:DECKS[vowels].length,lvl:S.drillLvl}; });
    ok('H12 "Sí, con fluidez" marks the pack\'s own Hangul decks known; toast in Spanish',obGo.known===obGo.total&&obGo.total>0&&obGo.lvl===3&&/^Listo\. Empieza con /.test(obGo.toast),JSON.stringify(obGo));
    /* B4: listen "Where would you hear this?" never offers letter / pronunciation / grammar reference decks */
    const where=await p.evaluate(()=>{ const bad=new Set([...(COURSE.KINDS.letters||[]),...(COURSE.KINDS.pronunciation||[]),...(COURSE.KINDS.reference||[])]); const st=document.createElement('div'); let seenCtx=0; const hits=[]; const real=Math.random; let a=7; Math.random=()=>{ a=(a*1103515245+12345)%2147483648; return a/2147483648; };
      for(let i=0;i<120;i++){ renderListenQ(st,1,()=>{}); const opts=[...st.querySelectorAll('.opt')].map(o=>o.dataset.o); if(opts.some(o=>COURSE.DECKS[o])){ seenCtx++; opts.forEach(o=>{ if(bad.has(o)) hits.push(o); }); } } Math.random=real; return {seenCtx,hits:[...new Set(hits)]}; });
    ok('E11 B4 listen "where" options exclude Hangul / pronunciation / grammar decks',where.seenCtx>5&&where.hits.length===0,JSON.stringify(where));
    /* B5: Korean toasts get a Spanish tooltip (computed romanisation + Spanish gloss), never English */
    const tip=await p.evaluate(()=>{ toast('수고했어요!'); const t=$('toast').title; const d=document.createElement('div'); d.innerHTML='<div class="ko">좋아요</div>'; document.body.appendChild(d); koTips(d); const k=d.firstChild.title; d.remove(); return {t,k}; });
    ok('B5 Korean toast / UI word tooltips are Spanish',tip.t==='sugohaesseoyo · buen trabajo'&&tip.k==='joayo · bien'&&!/good|work/.test(tip.t+tip.k),JSON.stringify(tip));
    /* B12: jamo card backs show the Spanish stroke-order button */
    const sb=await p.evaluate(()=>{ const d=COURSE.ROLES.hangulConsonants; const c=DECKS[d].find(x=>STROKES[x[0]]); const st=document.createElement('div'); renderFlashcard(st,d,c,()=>{}); const btn=st.querySelector('.replay'); return {jamo:c[0],btn:btn?btn.textContent:null,html:/stroke order/.test(st.innerHTML)}; });
    ok('B12 jamo card back: stroke button in Spanish, no "↻ stroke order"',sb.btn==='↻ orden de trazos'&&!sb.html,JSON.stringify(sb));
    /* the quiz "why" line on a grammar deck: Spanish */
    const why=await p.evaluate(()=>{ const d=COURSE.KINDS.grammar[0]; const st=document.createElement('div'); const c=DECKS[d][0]; renderQuizQ(st,d,c,'read',()=>{}); const w=[...st.querySelectorAll('.opt')].find(o=>o.dataset.a!==c[0]); w.click(); const y=st.querySelector('.why'); return y?y.textContent:null; });
    ok('Q1 quiz "why" line on a grammar deck is Spanish',why&&/^Por qué: /.test(why)&&!/Why:|Show rule/.test(why),String(why));
    /* every screen with the script on */
    const allow=['inglés'];
    for(const h of ['#today','#lessons','#review','#practice','#read','#progress','#settings']){ await p.evaluate(h=>{ location.hash=h; route(); },h); await p.waitForTimeout(400); const t=await visText(p); const L=leaks(t,allow); ok('S '+h+' (real pack, script on): no English UI',L.length===0,L.slice(0,6).join(' ¦ ')); }
    ok('H13 no page errors (real pack)',errs.length===0,errs.join(' ¦ '));
    await ctx.close(); }

  /* ---- E12: a stale drill mode from another course never renders a drill this pack has no data for ---- */
  { const {ctx,p,errs}=await page();
    await apply(p,'es-ko'); const st=await p.evaluate(()=>{ S.drillMode='sound'; resetCourseRuntime(); const m1=S.drillMode; S.drillMode='numbers'; location.hash='#read'; route(); hangulNext(); const t=$('hangulStage'); return {m1,input:!!t.querySelector('input.ans[aria-label="Romanización"]'),number:/🔢|digits/.test(t.innerHTML)}; });
    ok('E12 stale drillMode sound/numbers on a pack without them: reset to type, renders the Hangul type drill',st.m1==='type'&&st.input&&!st.number,JSON.stringify(st)); await ctx.close(); }

  /* ---- E13: a pack with features.script=true but no TRAINER: no Hangul modes, no English ---- */
  { const {ctx,p,errs}=await page();
    const r=await p.evaluate(P0=>{ const P=JSON.parse(JSON.stringify(P0)); P.features.script=true; P.id='es-ko'; COURSES['es-ko']=P; const w=document.getElementById('welcome'); if(w) w.remove(); META.native='es'; META.picked=1; META.seenHome=1; applyCourse('es-ko'); S.onboard={skipped:1}; S.drillMode='pick'; location.hash='#read'; route(); return {script:CF('script'),pick:modeOk('pick'),chips:[...document.querySelectorAll('#hModes .chip')].filter(b=>!b.hidden).map(b=>b.dataset.hm),quick:QUICK.read.length,stage:$('hangulStage').innerHTML.slice(0,200)}; },PACK);
    ok('E13 script flag without TRAINER data: trainer stays off (no pick/build chips, generic drills)',!r.script&&!r.pick&&!r.chips.includes('pick')&&!r.chips.includes('build')&&r.quick===4,JSON.stringify(r));
    const t=await visText(p); ok('E13 no English on the drills screen',leaks(t).length===0,leaks(t).slice(0,6).join(' ¦ '));
    ok('E13 no page errors',errs.length===0,errs.join(' ¦ ')); await ctx.close(); }

  /* ---- B11: COURSE.UI applies when the learner's language has no interface pack (war) ---- */
  { const {ctx,p,errs}=await page('fil-PH');
    const r=await p.evaluate(P0=>{ const P=JSON.parse(JSON.stringify(P0)); P.id='war-ko'; P.native='war'; P.UI={'Korean (required)':'Koreano (kailangan)','Change course':'Palitan ang kurso'}; if(LANGAPP_PACKS.i18n.war) return 'war pack exists: pick another language for this test'; COURSES['war-ko']=P; const w=document.getElementById('welcome'); if(w) w.remove(); META.native='tl'; META.picked=1; META.seenHome=1; applyCourse('war-ko'); location.hash='#settings'; route(); return {ui:uiLang(),ph:$('acKo').placeholder,btn:($('courseChg')||{}).textContent}; },PACK);
    ok('B11 course UI strings apply with no interface pack (war)',r&&r.ui==='war'&&r.ph==='Koreano (kailangan)'&&r.btn==='Palitan ang kurso',JSON.stringify(r));
    ok('B11 no page errors',errs.length===0,errs.join(' ¦ ')); await ctx.close(); }
}

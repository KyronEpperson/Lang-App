const {chromium}=require('playwright');const srv=require(__dirname+'/srv.js');
(async()=>{const s=await srv(8791);const b=await chromium.launch();const U='http://localhost:8791/';const R=[];const ok=(n,c,x)=>{R.push((c?'PASS ':'FAIL ')+n+(x?' · '+x:''));};
const mk=async(o)=>{const c=await b.newContext(Object.assign({viewport:{width:390,height:780}},o||{}));const p=await c.newPage();p._errs=[];p._packs=[];p.on('pageerror',e=>p._errs.push(e.message));p.on('console',m=>{if(m.type()==='error'&&!/fonts|_vercel|supabase|ERR_/.test(m.text()))p._errs.push(m.text());});p.on('request',q=>{if(/\/packs\//.test(q.url()))p._packs.push(q.url().split('/packs/')[1].split('.')[0]);});await p.route(/fonts\.g|supabase|_vercel/,r=>r.abort());return [c,p];};
const skipIntro=async p=>{await p.waitForTimeout(800);await p.evaluate(()=>{const i=document.getElementById('fxIntro');if(i)i.click();});await p.waitForTimeout(1800);};
// T1 fresh visitor (en browser)
{const [c,p]=await mk({locale:'en-US',serviceWorkers:'block'});await p.goto(U);await skipIntro(p);
 ok('T1 no packs before choosing',p._packs.length===0,p._packs.join(','));
 await p.evaluate(()=>{const w=document.getElementById('welcome');if(w){const bs=w.querySelectorAll('.choice');bs[bs.length-1].click();}});await p.waitForTimeout(600);
 const st=await p.evaluate(()=>({welcome:!!document.getElementById('welcome'),home:!!document.getElementById('langHome'),txt:(document.getElementById('welcome')||document.body).innerText.slice(0,200)}));
 if(st.welcome){ await p.evaluate(()=>{const w=document.getElementById('welcome');const i=w.querySelector('input');if(i){i.value='tester';i.dispatchEvent(new Event('input',{bubbles:true}));}const bs=[...w.querySelectorAll('button')];const g=bs.find(x=>/start|continue|go|시작|계속/i.test(x.textContent))||bs[0];g.click();});await p.waitForTimeout(900);}
 await p.evaluate(()=>{if(!document.getElementById('langHome'))showLangHome();});await p.waitForTimeout(300);
 await p.click('#langHome [data-native="es"]');await p.waitForFunction(()=>document.querySelector('#langHome [data-course]'),null,{timeout:8000});
 const s2=await p.evaluate(()=>document.getElementById('langHome').innerText);ok('T1 step 2 in Spanish',/inglés/i.test(s2)&&/aprender/i.test(s2),s2.slice(0,80).replace(/\n/g,' | '));
 ok('T1 only es interface so far',p._packs.join(',')==='i18n-es',p._packs.join(','));
 await p.click('#langHome [data-course="es-en"]');await p.waitForFunction(()=>typeof COURSE!=='undefined'&&COURSE.id==='es-en',null,{timeout:8000});await p.waitForTimeout(800);
 const a=await p.evaluate(()=>({id:COURSE.id,les:LESSONS.length,lang:document.documentElement.lang,h1:document.querySelector('header h1').textContent,nav:document.getElementById('nav').innerText.replace(/\n/g,' '),meta:localStorage.getItem('la-meta')}));
 ok('T1 course applied',a.id==='es-en'&&a.les===42&&/Inglés/i.test(a.h1),JSON.stringify(a).slice(0,230));ok('T1 packs = es interface + es course',p._packs.sort().join(',')==='course-es-en,i18n-es',p._packs.join(','));
 // lesson + grade a card to make progress
 await p.evaluate(()=>{S.xp=77;S.lessons[LESSONS[0].id]=1;save();flushSaveNow();});
 // T2 reload → sync load
 p._packs.length=0;await p.reload();await p.waitForTimeout(400);const early=await p.evaluate(()=>({id:COURSE.id,xp:S.xp,h1:document.querySelector('header h1').textContent,les:Object.keys(S.lessons).length}));
 ok('T2 reload boots straight into es-en with progress',early.id==='es-en'&&early.xp===77&&early.les===1,JSON.stringify(early));ok('T2 no errors',p._errs.length===0,p._errs.join(' / ').slice(0,300));
 // T5 runtime switches
 await skipIntro(p);await p.evaluate(()=>showLangHome({closable:true}));await p.click('#langHome [data-native="ja"]');await p.waitForFunction(()=>document.querySelector('#langHome [data-course="ja-en"]'),null,{timeout:8000});await p.click('#langHome [data-course="ja-en"]');await p.waitForFunction(()=>COURSE.id==='ja-en',null,{timeout:8000});await p.waitForTimeout(500);
 const j=await p.evaluate(()=>({les:LESSONS.length,xp:S.xp,es:JSON.parse(localStorage.getItem('la-s-es-en')).xp,nav:document.getElementById('nav').innerText.replace(/\n/g,' ')}));ok('T5 switch to ja-en, es progress kept',j.les===42&&j.es===77&&/レッスン/.test(j.nav),JSON.stringify(j));
 await p.evaluate(()=>showLangHome({closable:true}));await p.click('#langHome [data-native="en"]');await p.waitForFunction(()=>document.querySelector('#langHome [data-course="en-ko"]'));await p.click('#langHome [data-course="en-ko"]');await p.waitForTimeout(600);
 const e=await p.evaluate(()=>({id:COURSE.id,les:LESSONS.length,lang:document.documentElement.lang}));ok('T5 back to en-ko',e.id==='en-ko'&&e.les===33,JSON.stringify(e));
 await p.evaluate(()=>showLangHome({closable:true}));await p.click('#langHome [data-native="ko"]');await p.waitForFunction(()=>document.querySelector('#langHome [data-course="ko-en"]'));
 // roadmap preview in Korean then pick ko-en
 await p.click('#langHome [data-course="ko-en"]');await p.waitForFunction(()=>COURSE.id==='ko-en',null,{timeout:8000});await p.waitForTimeout(400);const k=await p.evaluate(()=>({les:LESSONS.length,nav:document.getElementById('nav').innerText.replace(/\n/g,' ')}));ok('T5 ko-en',k.les===42&&/[가-힣]/.test(k.nav),JSON.stringify(k));
 ok('T1-5 no errors',p._errs.length===0,p._errs.join(' / ').slice(0,300));await c.close();}
// T3 Japanese browser, fresh
{const [c,p]=await mk({locale:'ja-JP',serviceWorkers:'block'});await p.goto(U);await p.waitForTimeout(1200);ok('T3 ja browser preloads ja interface only',p._packs.join(',')==='i18n-ja',p._packs.join(','));const t=await p.evaluate(()=>document.body.innerText);ok('T3 welcome shows Japanese line',/[ぁ-ん]/.test(t),'');ok('T3 no errors',p._errs.length===0,p._errs.join(' / ').slice(0,200));await c.close();}
// T4 existing es-en user, pack unreachable
{const [c,p]=await mk({locale:'en-US',serviceWorkers:'block'});const st=JSON.stringify({xp:321,lessons:{pron:1,be:1},cards:{},updatedAt:1});
 await p.addInitScript(o=>{if(!localStorage.getItem('la-meta')){localStorage.setItem('la-meta',JSON.stringify({v:1,native:'es',course:'es-en',picked:1,seenHome:1,prefs:{}}));localStorage.setItem('la-s-es-en',o);localStorage.setItem('ko-welcomed','1');}},st);
 let block=true;await p.route(/\/packs\/course-es-en/,r=>block?r.abort():r.continue());await p.goto(U);await skipIntro(p);
 const f=await p.evaluate(()=>({fail:!!document.getElementById('packFail'),course:COURSE.id,meta:JSON.parse(localStorage.getItem('la-meta')).course,es:localStorage.getItem('la-s-es-en')}));
 ok('T4 blocked pack → overlay, meta and saved state untouched',f.fail&&f.meta==='es-en'&&f.es===st,JSON.stringify({fail:f.fail,course:f.course,meta:f.meta,same:f.es===st}));
 await p.evaluate(()=>{save();flushSaveNow();});const f2=await p.evaluate(()=>localStorage.getItem('la-s-es-en'));ok('T4 a save in the failed state does not touch es-en',f2===st,'');
 block=false;await p.click('#packRetry');await p.waitForFunction(()=>COURSE.id==='es-en',null,{timeout:8000});await p.waitForTimeout(500);
 const g=await p.evaluate(()=>({fail:!!document.getElementById('packFail'),xp:S.xp,les:Object.keys(S.lessons).length,L:LESSONS.length,h1:document.querySelector('header h1').textContent}));ok('T4 retry restores course with progress',!g.fail&&g.xp===321&&g.les===2&&g.L===42,JSON.stringify(g));ok('T4 no page errors',p._errs.filter(x=>!/Failed to load resource|net::/.test(x)).length===0,p._errs.join(' / ').slice(0,200));await c.close();}
// T6 service worker offline
{const [c,p]=await mk({locale:'en-US'});await p.addInitScript(()=>{if(!localStorage.getItem('la-meta')){localStorage.setItem('la-meta',JSON.stringify({v:1,native:'ja',course:'ja-en',picked:1,seenHome:1,prefs:{}}));localStorage.setItem('ko-welcomed','1');}});
 await p.goto(U);await p.waitForFunction(()=>navigator.serviceWorker.controller||navigator.serviceWorker.ready.then(()=>true),null,{timeout:10000});await p.waitForTimeout(1500);await p.reload();await p.waitForTimeout(2000);
 await c.setOffline(true);await p.reload().catch(()=>{});await p.waitForTimeout(1500);const o=await p.evaluate(()=>({id:typeof COURSE!=='undefined'&&COURSE.id,L:typeof LESSONS!=='undefined'&&LESSONS.length,fail:!!document.getElementById('packFail')})).catch(e=>({err:String(e)}));
 ok('T6 offline reload still opens ja-en',o.id==='ja-en'&&o.L===42&&!o.fail,JSON.stringify(o));await c.close();}
// T7 sync restore on a new device: remote row names a course that is not loaded yet
{const [c,p]=await mk({locale:'en-US',serviceWorkers:'block'});await p.goto(U);await skipIntro(p);
 const r=await p.evaluate(async()=>{ const pushes=[]; const orig=window.syncPush; window.syncPush=function(){ pushes.push({picked:META.picked,course:COURSE.id}); };
  const remote={xp:0,cards:{},updatedAt:5,_meta:{native:'es',course:'es-en'},_courses:{'es-en':{xp:50,lessons:{pron:1},cards:{},updatedAt:9}}};
  applyRemoteRow(remote); const early=pushes.length; for(let i=0;i<80&&COURSE.id!=='es-en';i++) await new Promise(z=>setTimeout(z,100)); await new Promise(z=>setTimeout(z,300));
  const out={early,course:COURSE.id,picked:META.picked,xp:S.xp,les:Object.keys(S.lessons).length,pushes,meta:syncPayload()._meta}; window.syncPush=orig; return out; });
 ok('T7 remote course loads, then applies with its progress',r.course==='es-en'&&r.picked===1&&r.xp===50&&r.les===1,JSON.stringify(r).slice(0,260));
 ok('T7 nothing pushed before the course loaded',r.early===0&&r.pushes.every(x=>x.picked===1)&&r.meta&&r.meta.course==='es-en',JSON.stringify(r.pushes).slice(0,160));await c.close();}
// T8 pack file gone while online (tab left open across a deploy) → reload offer, not a connection message
{const [c,p]=await mk({locale:'en-US',serviceWorkers:'block'});await p.route(/\/packs\/i18n-ja/,r=>r.fulfill({status:404,body:'nf'}));await p.goto(U);await skipIntro(p);
 await p.evaluate(()=>{const w=document.getElementById('welcome');if(w)w.remove();showLangHome();});await p.click('#langHome [data-native="ja"]');await p.waitForTimeout(1200);
 const t=await p.evaluate(()=>({toast:document.getElementById('toast').textContent,btn:!!document.querySelector('#toast button'),step1:!!document.querySelector('#langHome [data-native]'),dis:document.querySelector('#langHome [data-native="ja"]').disabled}));
 ok('T8 missing pack online → reload offer, still on step 1',/new version/i.test(t.toast)&&t.btn&&t.step1&&!t.dis,JSON.stringify(t));await c.close();}
// T9 every listed course opens from the language home in its own interface language
{const [c,p]=await mk({locale:'en-US',serviceWorkers:'block'});await p.goto(U);await skipIntro(p);await p.evaluate(()=>{const w=document.getElementById('welcome');if(w)w.remove();});
 const ids=await p.evaluate(()=>Object.keys(LANGAPP_MANIFEST.courses));const out=[];
 for(const id of ids){const n=id.slice(0,2);await p.evaluate(()=>showLangHome({closable:true}));await p.evaluate(()=>{const b=document.querySelector('#langHome .lh-back');if(b)b.click();});await p.click('#langHome [data-native="'+n+'"]');await p.waitForFunction(i=>document.querySelector('#langHome [data-course="'+i+'"]'),id,{timeout:8000});await p.click('#langHome [data-course="'+id+'"]');await p.waitForFunction(i=>COURSE.id===i,id,{timeout:8000});await p.waitForTimeout(300);
  const r=await p.evaluate(()=>({id:COURSE.id,L:LESSONS.length,lang:document.documentElement.lang,ui:uiLang(),nav:document.getElementById('nav').innerText.replace(/\n/g,' '),ov:document.documentElement.scrollWidth>innerWidth+1}));out.push(r);}
 ok('T9 all '+ids.length+' pack courses open',out.every(r=>r.L>=(r.id.slice(0,2)==='en'?20:39)&&r.ui===r.id.slice(0,2)&&!r.ov&&r.lang.slice(0,2)===r.id.slice(0,2)),out.map(r=>r.id+':'+r.L+':'+r.lang).join(' '));ok('T9 no errors',p._errs.length===0,p._errs.join(' / ').slice(0,200));await c.close();}
console.log(R.join('\n'));await b.close();s.close();if(R.some(x=>x.startsWith('FAIL')))process.exitCode=1;})().catch(e=>{console.error('CRASH',e);process.exit(1);});

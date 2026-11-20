/* visitor log: client rows, de-duplication, opt-out, admin panel drawing */
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:800},serviceWorkers:'block'});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false});localStorage.setItem('la-s-en-vi',st);localStorage.setItem('la-meta',JSON.stringify({v:1,native:'en',course:'en-vi',picked:1,seenHome:1,prefs:{}}));});
await p.route(/supabase|fonts\.g/,r=>r.abort());await p.goto('file:///home/claude/korean-flashcards.html#today');await p.waitForTimeout(1300);
const R=await p.evaluate(async()=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const o={};o.offHere=evOn();/* file: page is never logged */
 const sent=[];const of=window.fetch;window.fetch=async(u,q)=>{sent.push([String(u).replace(SB.url,''),JSON.parse(q.body)]);return {ok:true,json:async()=>({})};};evOn=()=>localStorage.getItem('la-nousage')!=='1';
 localStorage.removeItem('la-vid');sessionStorage.removeItem('la-ev');logEvent('visit','');logEvent('view','today');logEvent('view','today');logEvent('visit','');logEvent('view','review');
 o.n=sent.length;o.url=sent[0][0];o.first=sent[0][1];o.kinds=sent.map(x=>x[1].kind+':'+x[1].page);o.newFlags=sent.map(x=>x[1].is_new);o.sameVid=new Set(sent.map(x=>x[1].vid)).size===1;o.keys=Object.keys(sent[0][1]).sort().join(',');
 location.hash='#progress';await w(400);o.routeLogged=sent.some(x=>x[1].page==='progress');
 const u=document.getElementById('usageOK');u.checked=false;u.dispatchEvent(new Event('change'));const n1=sent.length;sessionStorage.removeItem('la-ev');logEvent('view','lessons');o.optOut=[localStorage.getItem('la-nousage'),sent.length-n1];u.checked=true;u.dispatchEvent(new Event('change'));
 sessionStorage.removeItem('la-ev');for(let i=0;i<40;i++)logEvent('view','p'+i);o.cap=sent.length-n1;window.fetch=of;
 o.hiddenForUser=document.getElementById('visPanel').hidden;
 const days=[];for(let i=0;i<30;i++)days.push({d:'2026-11-'+String(i+1).padStart(2,'0'),people:3+((i*7)%11),visits:5+((i*5)%13),new_people:i%4});
 document.getElementById('visPanel').hidden=false;visDraw({days:30,people:128,visits:342,new_people:61,returning:47,all_people:410,first_day:'2026-11-20',daily:days,pages:[{k:'today',n:120},{k:'review',n:88},{k:'lessons',n:64},{k:'feedback',n:9}],courses:[{k:'en-ko',n:50},{k:'en-es',n:31},{k:'en-ja',n:22}],refs:[{k:'(direct)',n:90},{k:'t.co',n:20},{k:'<b>x</b>',n:2}],devs:[{k:'phone',n:80},{k:'desktop',n:40},{k:'phone · installed',n:8}],langs:[{k:'en-US',n:100},{k:'ko-KR',n:12}]});
 o.tiles=[...document.querySelectorAll('.vis-t b')].map(e=>e.textContent);o.bars=document.querySelectorAll('.vis-chart span').length;o.safe=!document.querySelector('#visBody .vis-k b');o.overflow=document.documentElement.scrollWidth>innerWidth;document.getElementById('visPanel').scrollIntoView();return o;});
R.errs=errs;console.log(JSON.stringify(R));if(process.argv[2])await p.screenshot({path:process.argv[2]});await b.close();})();

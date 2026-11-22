/* simple view: fewer controls by default, More options reveals and is remembered, controls in use stay visible, Show all restores everything */
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:800},serviceWorkers:'block'});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{if(localStorage.getItem('la-meta'))return;localStorage.setItem('la-s-en-es',JSON.stringify({nick:'K',welcomed:1,onboard:{read:'no',goal:'travel',len:'standard',at:1},hintSeen:1,tourDone:1,fx3d:false}));localStorage.setItem('la-meta',JSON.stringify({v:1,native:'en',course:'en-es',picked:1,seenHome:1,prefs:{nick:'K'}}));});
await p.route(/supabase|fonts\.g/,r=>r.abort());const U='file://'+require('path').resolve(__dirname,'../../korean-flashcards.html')+'#';
const count=()=>p.evaluate(()=>{const el=[...document.querySelectorAll('[id^=v-]')].find(x=>x.offsetParent!==null);return [...el.querySelectorAll('button,a,select,input,summary,textarea')].filter(x=>x.offsetParent!==null&&x.getClientRects().length).length;});
const R={};const go=async v=>{await p.goto(U+v);await p.waitForTimeout(600);};
await go('today');R.simpleOn=await p.evaluate(()=>document.body.classList.contains('simple'));R.nav=await p.evaluate(()=>[...document.querySelectorAll('#nav a')].filter(x=>x.offsetParent).map(a=>a.getAttribute('href')));
const caps={today:9,practice:7,review:9,read:14,progress:14};R.counts={};
for(const v of Object.keys(caps)){await go(v);R.counts[v]=await count();}
R.withinCaps=Object.keys(caps).every(v=>R.counts[v]<=caps[v]);
/* More options reveals, is remembered across a reload, and keeps focus */
await go('practice');const before=await count();await p.click('.view:not([hidden]) .advbtn');await p.waitForTimeout(200);R.practiceOpen=[before,await count(),await p.evaluate(()=>document.activeElement.classList.contains('advbtn')&&document.activeElement.getAttribute('aria-expanded'))];
await p.reload();await p.waitForTimeout(700);R.remembered=await p.evaluate(()=>document.body.classList.contains('adv-practice')&&document.getElementById('weakStart').offsetParent!==null);
/* a control in use stays visible after closing: pick the Listen mode, close */
R.inUse=await p.evaluate(async()=>{document.querySelector('#quizModes [data-mode="listen"]').click();document.querySelector('.view:not([hidden]) .advbtn').click();await new Promise(r=>setTimeout(r,200));const m=document.getElementById('quizModes');const o={closed:!document.body.classList.contains('adv-practice'),modesShown:m.offsetParent!==null,weakHidden:document.getElementById('weakStart').offsetParent===null};document.querySelector('#quizModes [data-mode="mixed"]').click();await new Promise(r=>setTimeout(r,100));o.afterReset=m.offsetParent===null;return o;});
/* Read and Feedback are still reachable */
R.readLink=await p.evaluate(()=>{const a=document.getElementById('toRead');return a.offsetParent!==null&&a.textContent.trim().length>1;});
await p.click('#toRead');await p.waitForTimeout(500);R.onRead=await p.evaluate(()=>[location.hash,document.getElementById('v-hangul').hidden===false,document.querySelector('#nav a[href="#read"]').offsetParent!==null]);
await go('feedback');R.onFeedback=await p.evaluate(()=>[document.getElementById('v-feedback').hidden===false,document.querySelector('#nav a[href="#feedback"]').offsetParent!==null]);
await go('today');R.replyDot=await p.evaluate(()=>{const a=document.querySelector('#nav a[href="#feedback"]');a.dataset.n='2';const s=a.offsetParent!==null;delete a.dataset.n;return s;});
/* lessons: only the next lesson shows its description */
await go('lessons');R.lessons=await p.evaluate(()=>{const bl=[...document.querySelectorAll('.lesson-btn span[data-noi18n]>span')];return {shown:bl.filter(x=>x.offsetParent!==null).length,total:bl.length,unlockAbove:(()=>{const u=document.getElementById('unlockLessons'),f=document.querySelector('.lesson-btn');return !!u&&u.getBoundingClientRect().bottom<=f.getBoundingClientRect().top;})()};});
/* Show all options restores every tab and control */
await go('progress');await p.evaluate(()=>{const s=document.getElementById('showAll');s.checked=true;s.dispatchEvent(new Event('change'));});await p.waitForTimeout(200);R.showAll={nav:await p.evaluate(()=>[...document.querySelectorAll('#nav a')].filter(x=>x.offsetParent).length),saved:await p.evaluate(()=>S.simple),advBtns:await p.evaluate(()=>[...document.querySelectorAll('.advbtn')].filter(x=>x.offsetParent).length)};
await go('practice');R.showAll.practice=await count();await go('review');R.showAll.review=await count();
R.overflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);R.errs=errs;console.log(JSON.stringify(R));await b.close();})();

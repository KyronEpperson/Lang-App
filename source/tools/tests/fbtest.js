/* Feedback page tests: node tools/tests/fbtest.js  (mocked posts, no network) */
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:800},serviceWorkers:'block'});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false,fbMine:[4]});localStorage.setItem('la-s-en-vi',st);localStorage.setItem('la-meta',JSON.stringify({v:1,native:'en',course:'en-vi',picked:1,seenHome:1,prefs:{}}));});
await p.route(/supabase|fonts\.g/,r=>r.abort());await p.goto('file://'+require('path').resolve(__dirname,'../../korean-flashcards.html')+'#feedback');await p.waitForTimeout(1200);
await p.evaluate(()=>{const day=864e5,now=Date.now(),d=n=>new Date(now-n*day).toISOString();window.__mock=()=>[
 {id:1,kind:'bug',created_at:d(0.02),message:fbTag({key:'today',course:'en-vi',v:'2.48.0'})+'Button does nothing on Today',name:'Ana'},
 {id:2,kind:'idea',created_at:d(3),message:'Add dark mode please'},
 {id:3,kind:'content',created_at:d(1),message:fbTag({key:'lessons/tones',course:'en-vi',v:'2.47.0',at:'item 3/14'})+'Typo in lesson 2',done:true},
 {id:4,kind:'bug',created_at:d(10),message:fbTag({key:'review/Letters and sounds',course:'en-vi',v:'2.48.0',at:'card đi'})+'Crash on review when I tap fast'},
 {id:5,kind:'idea',created_at:d(0.01),message:'Thanks, fixed in the next version (zebra)',parent_id:1,by_admin:true},
 {id:6,kind:'love',created_at:d(40),message:'Great app',hearted:true},
 {id:7,kind:'bug',created_at:d(2),message:fbTag({key:'today',course:'en-ko',v:'2.48.0'})+'Streak did not count',done:true},
 {id:8,kind:'idea',created_at:d(5),message:'hidden spam',hidden:true}];fbItems=window.__mock();fbLive=()=>true;fbLoad=async()=>{renderBoard();};renderBoard();});
const R={};const n=()=>p.evaluate(()=>[...document.querySelectorAll('#fbBoard > .fbi')].map(e=>+e.id.slice(3)));
const type=async(sel,v)=>{await p.fill(sel,v);await p.waitForTimeout(80);};
/* FB-1 search */
await p.click('#fbQ');await p.keyboard.type('review');await p.waitForTimeout(80);R.fb1_review=await n();R.fb1_focus=await p.evaluate(()=>document.activeElement.id);R.fb1_shown=await p.evaluate(()=>document.getElementById('fbShown').textContent);
await type('#fbQ','zebra');R.fb1_reply=await n();await type('#fbQ','ana');R.fb1_name=await n();await type('#fbQ','tones');R.fb1_place=await n();await type('#fbQ','nomatchxyz');R.fb1_none=await p.evaluate(()=>document.getElementById('fbBoard').innerText);await type('#fbQ','');R.fb1_all=(await n()).length;
/* FB-2 status + sort */
await p.click('[data-st=open]');R.fb2_open=await n();await p.click('[data-st=done]');R.fb2_done=await n();await p.click('[data-st=all]');
await p.selectOption('#fbSortSel','old');R.fb2_old=await n();await p.selectOption('#fbSortSel','replies');R.fb2_replies=(await n())[0];await p.selectOption('#fbSortSel','new');R.fb2_new=await n();
/* FB-3 my posts + hidden */
R.fb3_hiddenUser=(await n()).includes(8);await p.click('#fbMineChip');R.fb3_mine=await n();await p.click('#fbMineChip');
await p.evaluate(()=>{fbAdmin=true;renderBoard();});R.fb3_hiddenAdmin=(await n()).includes(8);await p.evaluate(()=>{fbAdmin=false;renderBoard();});
/* FB-4 place filter + go to page */
await p.click('#fb-1 [data-page]');R.fb4_page=await n();R.fb4_pill=await p.evaluate(()=>document.getElementById('fbPageX')?.textContent);await p.click('#fbPageX');R.fb4_cleared=(await n()).length;
R.fb4_goto=await p.evaluate(async()=>{const id=LESSONS[1].id;fbGoto('lessons/'+id+'/practice','en-vi');await new Promise(r=>setTimeout(r,500));const ok=location.hash==='#lessons'&&openLesson===id;fbGoto('review/'+names[0],'en-vi');await new Promise(r=>setTimeout(r,300));const rv=location.hash==='#review'&&deck===names[0];fbGoto('today','en-ko');await new Promise(r=>setTimeout(r,200));const td=location.hash==='#today';location.hash='#feedback';await new Promise(r=>setTimeout(r,400));fbItems=window.__mock();renderBoard();return [ok,rv,td];});
/* FB-5 pages with open reports */
R.fb5_list=await p.evaluate(()=>[...document.querySelectorAll('#fbPagesList [data-pg]')].map(b=>b.textContent.replace(/\s+/g,' ').trim()));R.fb5_hidden=await p.evaluate(()=>document.getElementById('fbPages').hidden);
await p.evaluate(()=>{document.getElementById('fbPages').open=true;});await p.click('#fbPagesList [data-pg="today"]');R.fb5_filter=await n();await p.click('#fbPagesList [data-pg="today"]');R.fb5_off=(await n()).length;
/*NEXT*/
if(process.env.FBSTEP) for(const f of (global.__steps||[])) await f(p,R,n,type);
R.errs=errs;R.overflow=await p.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);console.log(JSON.stringify(R));if(process.argv[2])await p.screenshot({path:process.argv[2],fullPage:true});await b.close();})();

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
/* FB-6 composer placeholder + draft */
await p.click('[data-fbk=bug]');R.fb6_ph=await p.evaluate(()=>document.getElementById('fbMsg').placeholder);await p.fill('#fbMsg','half written report');await p.waitForTimeout(80);
await p.reload();await p.waitForTimeout(1200);R.fb6_restored=await p.evaluate(()=>[document.getElementById('fbMsg').value,fbKind,document.querySelector('[data-fbk=bug]').getAttribute('aria-pressed')]);
await p.evaluate(()=>{const day=864e5,now=Date.now(),d=n=>new Date(now-n*day).toISOString();window.__mock=()=>[
 {id:1,kind:'bug',created_at:d(0.02),message:fbTag({key:'today',course:'en-vi',v:'2.48.0'})+'Button does nothing on Today',name:'Ana'},{id:2,kind:'idea',created_at:d(3),message:'Add dark mode please'},
 {id:3,kind:'content',created_at:d(1),message:fbTag({key:'lessons/tones',course:'en-vi',v:'2.47.0',at:'item 3/14'})+'Typo in lesson 2',done:true},{id:4,kind:'bug',created_at:d(10),message:fbTag({key:'review/Letters and sounds',course:'en-vi',v:'2.48.0',at:'card đi'})+'Crash on review when I tap fast'},
 {id:5,kind:'idea',created_at:d(0.01),message:'Thanks, fixed in the next version (zebra)',parent_id:1,by_admin:true},{id:6,kind:'love',created_at:d(40),message:'Great app',hearted:true},{id:7,kind:'bug',created_at:d(2),message:fbTag({key:'today',course:'en-ko',v:'2.48.0'})+'Streak did not count',done:true},{id:8,kind:'idea',created_at:d(5),message:'hidden spam',hidden:true}];
 fbItems=window.__mock();fbLive=()=>true;fbLoad=async()=>{renderBoard();};window.__sent=[];fbPost=async(f)=>{window.__sent.push(f);const id=100+window.__sent.length;fbItems.unshift({id,kind:f.kind,created_at:new Date().toISOString(),message:f.message});S.fbMine=(S.fbMine||[]).concat(id);return true;};renderBoard();});
await p.evaluate(()=>document.getElementById('fbForm').dispatchEvent(new Event('submit',{cancelable:true})));await p.waitForTimeout(200);R.fb6_afterSend=await p.evaluate(()=>[document.getElementById('fbMsg').value,localStorage.getItem('la-fbdraft'),window.__sent.length&&window.__sent[0].kind]);
/* FB-7 ages + new badge */
R.fb7=await p.evaluate(()=>{fbSeenAt=Date.now()-2*864e5;renderBoard();const age=id=>document.querySelector('#fb-'+id+' time')?.textContent;return {a1:age(1),a3:age(3),a4:age(4),a6:age(6),title:!!document.querySelector('#fb-1 time').title,newIds:[...document.querySelectorAll('#fbBoard .badge.new')].map(b=>+b.closest('.fbi').id.slice(3)),count:document.getElementById('fbNewN').textContent,ago:[fbAgo(new Date(Date.now()-20e3).toISOString()),fbAgo(new Date(Date.now()-5*36e5).toISOString())]};});
/* FB-8 paging + long posts */
R.fb8=await p.evaluate(async()=>{const keep=fbItems.slice();for(let i=0;i<40;i++)fbItems.push({id:200+i,kind:i%2?'idea':'bug',created_at:new Date(Date.now()-(60+i)*864e5).toISOString(),message:'filler '+i});fbItems.push({id:300,kind:'idea',created_at:new Date().toISOString(),message:'L'.repeat(900)});fbFeed='all';renderBoard();const cnt=()=>document.querySelectorAll('#fbBoard > .fbi').length;const o={first:cnt(),more:document.getElementById('fbMore').textContent};document.getElementById('fbMore').click();o.second=cnt();document.querySelector('[data-feed=idea]').click();o.afterFeed=cnt();document.querySelector('[data-feed=all]').click();
 const len=()=>document.querySelector('#fb-300 .msg').textContent.length;o.folded=len();document.querySelector('#fb-300 [data-more]').click();o.open=len();document.querySelector('#fb-300 [data-more]').click();o.refold=len();fbItems=keep;renderBoard();return o;});
/* FB-9 copy */
R.fb9=await p.evaluate(async()=>{let clip='';Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{clip=t;}},configurable:true});fbFeed='all';fbStatus='all';renderBoard();document.querySelector('#fb-1 [data-copy]').click();await new Promise(r=>setTimeout(r,60));const one=clip;
 document.querySelector('[data-feed=bug]').click();document.querySelector('[data-st=open]').click();document.getElementById('fbCopyAll').click();await new Promise(r=>setTimeout(r,60));const all=clip;document.querySelector('[data-st=all]').click();document.querySelector('[data-feed=all]').click();
 return {one,hasReply:/↳ Developer: Thanks/.test(one),allHas1:/Button does nothing/.test(all),allHas4:/Crash on review/.test(all),allHasFixed:/Streak did not count/.test(all),allHasIdea:/dark mode/.test(all)};});
/* FB-10 links + jump */
R.fb10=await p.evaluate(async()=>{const wait=ms=>new Promise(r=>setTimeout(r,ms));let clip='';Object.defineProperty(navigator,'clipboard',{value:{writeText:async t=>{clip=t;}},configurable:true});const o={};
 document.querySelector('#fb-4 [data-link]').click();await wait(50);o.link=clip.slice(-12);
 document.querySelector('[data-feed=idea]').click();const q=document.getElementById('fbQ');q.value='dark';q.dispatchEvent(new Event('input'));o.before=!!document.getElementById('fb-4');
 location.hash='#feedback-4';await wait(500);o.hit=document.getElementById('fb-4')?.classList.contains('fbhit');o.feed=fbFeed;o.q=q.value;o.hash=location.hash;
 const keep=fbItems.slice();for(let i=0;i<40;i++)fbItems.push({id:400+i,kind:'idea',created_at:new Date(Date.now()-i*36e5).toISOString(),message:'filler '+i});location.hash='#today';await wait(300);location.hash='#feedback-6';await wait(500);o.deep=!!document.getElementById('fb-6')&&document.getElementById('fb-6').classList.contains('fbhit');o.limit=fbLimit;fbItems=keep;renderBoard();
 location.hash='#feedback-5';await wait(400);o.replyParent=document.getElementById('fb-5')?.classList.contains('fbhit');
 document.getElementById('fbMsg').value='A brand new idea';document.querySelector('[data-fbk=idea]').click();document.getElementById('fbForm').dispatchEvent(new Event('submit',{cancelable:true}));await wait(400);const nid=S.fbMine.slice(-1)[0];o.sentHit=document.getElementById('fb-'+nid)?.classList.contains('fbhit');return o;});
/*NEXT*/
if(process.env.FBSTEP) for(const f of (global.__steps||[])) await f(p,R,n,type);
R.errs=errs;R.overflow=await p.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);console.log(JSON.stringify(R));if(process.argv[2])await p.screenshot({path:process.argv[2],fullPage:true});await b.close();})();

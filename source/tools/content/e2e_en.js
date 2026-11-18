/* usage: node e2e_en.js <lang> <id> [<id>...]  — <lang>-en (default ko when the first arg is not a scaffolded language): completes each lesson
   as a non-free user (correct check answers from CHECKS), then sweeps practice items. Needs a build (korean-flashcards.html) containing the pack. */
const fs=require('fs'),path=require('path');let args=process.argv.slice(2);
const REV=args[0]&&/^en-[a-z]{2}$/.test(args[0])?args.shift():null; /* en-<t>: a course that teaches <t> to English speakers (tools/target) */
const LANG=REV?'en':(args[0]&&/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})?$/.test(args[0])&&fs.existsSync(path.join(__dirname,args[0],'profile.json')))?args.shift():'ko';const CID=REV||LANG+'-en';
const {chromium}=require('playwright');(async()=>{const ids=args;const b=await chromium.launch();let fail=0;
for(const id of ids){const c=await b.newContext({viewport:{width:390,height:800},reducedMotion:'reduce'});const p=await c.newPage();const errs=[],warn=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(/prac/i.test(m.text()))warn.push(m.text().slice(0,100));});
await p.addInitScript(([lang,cid])=>{const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false});localStorage.setItem('la-s-'+cid,st);if(lang==='ko')localStorage.setItem('ko-app2',st);localStorage.setItem('la-meta',JSON.stringify({v:1,native:lang,course:cid,picked:1,seenHome:1,prefs:{}}));},[LANG,CID]);
await p.route(/supabase|fonts\.g/,r=>r.abort());await p.goto('file:///home/claude/korean-flashcards.html#lessons');await p.waitForFunction(()=>{try{return typeof COURSE!=='undefined'&&!!COURSE&&typeof LESSONS!=='undefined'&&LESSONS.length>0;}catch(e){return false;}},null,{timeout:30000});await p.waitForTimeout(600);
const r0=await p.evaluate(([id,cid])=>{if(COURSE.id!==cid)return {bad:'course '+COURSE.id};const i=LESSONS.findIndex(l=>l.id===id);if(i<0)return {bad:'missing lesson'};LESSONS.slice(0,i).forEach(l=>S.lessons[l.id]=1);save();renderLessonHome();const un=lessonUnlocked(i);document.querySelector('[data-lesson="'+id+'"]').click();const body=document.getElementById('lessonBody');return {i,n:LESSONS.length,un,title:LESSONS[i].title,ov:document.documentElement.scrollWidth>innerWidth+1,raw:/\{\{ex:/.test(body.innerHTML),exN:(LESSONS[i].body.match(/\{\{ex:/g)||[]).length,planned:plannedLessons().length,ans:CHECKS[id].map(q=>q[2])};},[id,CID]);
if(r0.bad||!r0.un||r0.ov||r0.raw){fail++;console.log(id,'FAIL pre',JSON.stringify(r0));await c.close();continue;}
for(let q=0;q<3;q++){const k=r0.ans[q];await p.waitForSelector('#checkBody .opt[data-k="'+k+'"]:not([disabled])');await p.click('#checkBody .opt[data-k="'+k+'"]');await p.waitForTimeout(1100);}
await p.click('#miniStart');
for(let k=0;k<80;k++){const done=await p.evaluate(id=>!!(S.drills&&S.drills[id]),id);if(done)break;await p.evaluate(()=>{const bs=[...document.querySelectorAll('#miniDrill .mdCard button:not([disabled])')];const g=bs[bs.length-1];if(g)g.click();});await p.waitForTimeout(150);}
const r1=await p.evaluate(id=>{const i=LESSONS.findIndex(l=>l.id===id);let bad=0,n=0;Object.keys(PRACTICE).forEach(k=>PRACTICE[k].forEach(it=>{n++;
 if(it.t==='order'){const m=it.a.join(' ');if(!pracMatch(m,[m]))bad++;(it.x||[]).forEach(x=>it.a.forEach((_,j)=>{const alt=it.a.slice();alt[j]=x;if(pracMatch(alt.join(' '),[m]))bad++;}));}
 if(it.t==='fill'){it.a.forEach(a=>{if(!pracMatch(a,it.a))bad++;});(it.o||[]).forEach(o=>{if(pracMatch(o,it.a,!!it.strict))bad++;});}
 if(it.t==='type'){it.a.forEach(a=>{if(!pracMatch(a,it.a))bad++;});const tl=it.a[0].split(' ');(it.x||[]).forEach(x=>tl.forEach((_,j)=>{const alt=tl.slice();alt[j]=x;if(pracMatch(alt.join(' '),it.a,true))bad++;}));}}));
 return {done:!!S.lessons[id],next:i+1<LESSONS.length?lessonUnlocked(i+1):true,prac:(PRACTICE[id]||[]).length,items:n,bad};},id);
const ok=r1.done&&r1.next&&r1.prac>=12&&!r1.bad&&!errs.length&&!warn.length;if(!ok)fail++;
console.log(CID,id,ok?'OK':'FAIL',r0.title,'| lessons',r0.n,'planned',r0.planned,'items',r1.items,errs.concat(warn).join('|'));
if(ids.length<=3){await p.evaluate(id=>showLesson(id),id);await p.waitForTimeout(300);await p.screenshot({path:'/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/'+CID+'-'+id+'.png',fullPage:true});}
await c.close();}
console.log(fail?'E2E FAIL':'E2E OK');await b.close();process.exit(fail?1:0);})();

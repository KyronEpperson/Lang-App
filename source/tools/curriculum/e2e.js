/* usage: node e2e.js <lessonId> — completes the lesson as a non-free user and sweeps every practice item through the matcher */
const {chromium}=require('playwright');(async()=>{const id=process.argv[2];const b=await chromium.launch();let fail=0;
async function ctx(meta){const c=await b.newContext({viewport:{width:390,height:800},reducedMotion:'reduce'});const p=await c.newPage();p.errs=[];p.on('pageerror',e=>p.errs.push(e.message));
await p.addInitScript(m=>{localStorage.setItem('ko-app2',JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false}));localStorage.setItem('la-meta',JSON.stringify(m));},meta);
await p.route(/supabase|fonts\.g/,r=>r.abort());await p.goto('file:///home/claude/korean-flashcards.html#lessons');await p.waitForTimeout(1500);return p;}
const p=await ctx({v:1,native:'en',course:'en-ko',picked:1,seenHome:1,prefs:{}});
const r0=await p.evaluate(id=>{const i=LESSONS.findIndex(l=>l.id===id);if(i<0)return null;LESSONS.slice(0,i).forEach(l=>S.lessons[l.id]=1);save();renderLessonHome();const un=lessonUnlocked(i),nx=i+1<LESSONS.length?lessonUnlocked(i+1):false;document.querySelector('[data-lesson="'+id+'"]').click();return {i,n:LESSONS.length,un,nx,title:LESSONS[i].title,planned:plannedLessons().length,ov:document.documentElement.scrollWidth>innerWidth+1,tables:[...document.querySelectorAll('#lessonBody .tbl')].length,ex:document.querySelectorAll('#lessonBody .ex, #lessonBody [data-say]').length};},id);
if(!r0||!r0.un||r0.nx||r0.ov){fail++;}
for(let q=0;q<3;q++){await p.waitForSelector('#checkBody .opt[data-k="0"]:not([disabled])');await p.click('#checkBody .opt[data-k="0"]');await p.waitForTimeout(1100);}
await p.click('#miniStart');
for(let k=0;k<80;k++){const done=await p.evaluate(id=>!!(S.drills&&S.drills[id]),id);if(done)break;await p.evaluate(()=>{const bs=[...document.querySelectorAll('#miniDrill .mdCard button:not([disabled])')];const g=bs[bs.length-1];if(g)g.click();});await p.waitForTimeout(150);}
const r1=await p.evaluate(id=>{const i=LESSONS.findIndex(l=>l.id===id);return {done:!!S.lessons[id],next:i+1<LESSONS.length?lessonUnlocked(i+1):true,prac:(PRACTICE[id]||[]).length};},id);
if(!r1.done||!r1.next||r1.prac<12)fail++;
await p.evaluate(id=>showLesson(id),id);await p.waitForTimeout(300);await p.screenshot({path:'/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/loop-'+id+'.png',fullPage:true});
const sw=await p.evaluate(()=>{const bad=[];let n=0;Object.keys(PRACTICE).forEach(id=>PRACTICE[id].forEach((it,ix)=>{n++;const tag=id+'['+ix+'] '+it.t;
 if(it.t==='order'){const model=it.a.join(' ');if(!pracMatch(model,[model]))bad.push(tag+' self');(it.x||[]).forEach(x=>it.a.forEach((_,k)=>{const alt=it.a.slice();alt[k]=x;if(pracMatch(alt.join(' '),[model]))bad.push(tag+' distractor passes');}));}
 if(it.t==='fill'){it.a.forEach(a=>{if(!pracMatch(a,it.a))bad.push(tag+' rejects '+a);});(it.o||[]).forEach(o=>{if(pracMatch(o,it.a))bad.push(tag+' accepts '+o);});}
 if(it.t==='type'){it.a.forEach(a=>{if(!pracMatch(a,it.a))bad.push(tag+' rejects '+a);});const tiles=it.a[0].split(' ');(it.x||[]).forEach(x=>tiles.forEach((_,k)=>{const alt=tiles.slice();alt[k]=x;if(pracMatch(alt.join(' '),it.a))bad.push(tag+' x passes '+alt.join(' '));}));}
}));return {n,bad,noCheck:LESSONS.filter(l=>!CHECKS[l.id]||CHECKS[l.id].length!==3).map(l=>l.id),noPrac:LESSONS.filter(l=>!(PRACTICE[l.id]||[]).length).map(l=>l.id)};});
if(sw.bad.length||sw.noCheck.length||sw.noPrac.length||p.errs.length)fail++;
console.log(JSON.stringify({id,r0,r1,sweep:sw,errs:p.errs}));console.log(fail?'E2E FAIL':'E2E OK');await b.close();process.exit(fail?1:0);})();

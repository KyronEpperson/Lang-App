/* usage: node tools/site/rtl.js <lang> [force]  — right-to-left layout check at 390px for <lang>-en.
   "force" sets la-rtl=1 so any course can be laid out right-to-left before an Arabic pack exists.
   Checks BOTH edges with element rects (in RTL, overflow goes left and scrollWidth can miss it), skipping anything inside a horizontal scroller.
   Writes screenshots rtl-<lang>-<name>.png into the directory given by RTL_OUT (default: cwd). Exit 1 on any overflow or page error. */
const {chromium}=require('playwright');const path=require('path');
(async()=>{const L=process.argv[2]||'hi',force=process.argv[3]==='force',OUT=process.env.RTL_OUT||process.cwd(),CRS=process.env.RTL_COURSE||(L+'-en'); /* RTL_COURSE=hi-en lays another course out under this interface language */
const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:800},deviceScaleFactor:1,colorScheme:'light',reducedMotion:'reduce'});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.route(/supabase|fonts\.g/,r=>r.abort());
await p.addInitScript(([l,f,cr])=>{if(f)localStorage.setItem('la-rtl','1');localStorage.setItem('la-meta',JSON.stringify({v:1,native:l,course:cr,picked:1,seenHome:1,prefs:{welcomed:1,nick:'K'}}));localStorage.setItem('la-s-'+cr,JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false,free:1,xp:120,lessons:{pron:1,be:1}}));},[L,force,CRS]);
await p.goto('file:///home/claude/korean-flashcards.html');await p.waitForFunction(()=>{try{return typeof COURSE!=='undefined'&&!!COURSE&&LESSONS.length>0;}catch(e){return false;}},null,{timeout:30000});await p.waitForTimeout(700);
await p.evaluate(()=>{['fxIntro','welcome','langHome'].forEach(i=>{const e=document.getElementById(i);if(e)e.remove();});});
const dir=await p.evaluate(()=>document.documentElement.dir+' lang='+document.documentElement.lang+' course='+COURSE.id);console.log('dir='+dir);
let bad=0;
const check=async name=>{await p.waitForTimeout(350);const r=await p.evaluate(()=>{const W=document.documentElement.clientWidth,out=[];const scroller=e=>{for(let x=e.parentElement;x&&x!==document.body;x=x.parentElement){const o=getComputedStyle(x).overflowX;if(o==='auto'||o==='scroll'||o==='hidden')return true;}return false;};
 document.querySelectorAll('body *').forEach(e=>{const cs=getComputedStyle(e);if(cs.display==='none'||cs.visibility==='hidden'||cs.position==='fixed')return;const r=e.getBoundingClientRect();if(!r.width||!r.height)return;if((r.right>W+1||r.left<-1)&&!scroller(e))out.push(e.tagName+'.'+String(e.className).slice(0,24)+' ['+Math.round(r.left)+','+Math.round(r.right)+'] '+(e.textContent||'').trim().slice(0,30));});
 const nav=[...document.querySelectorAll('#nav a')].filter(a=>a.scrollWidth>a.clientWidth+1).map(a=>a.textContent.trim());
 return {out:out.slice(0,6),nav,sw:document.documentElement.scrollWidth,W};});
 await p.screenshot({path:path.join(OUT,'rtl-'+L+'-'+name+'.png')});const ok=!r.out.length&&!r.nav.length;if(!ok)bad++;console.log((ok?'PASS ':'FAIL ')+name+(ok?'':' '+JSON.stringify(r)));};
const go=async h=>{await p.evaluate(h=>{location.hash=h;},h);await p.waitForTimeout(450);};
await go('#today');await check('today');
await go('#review');await check('review');await p.evaluate(()=>{const c=document.querySelector('.card');if(c)c.click();});await check('review-back');
await go('#lessons');await check('lessons');
await p.evaluate(()=>showLesson('articles'));await check('lesson');
await p.evaluate(()=>{const t=document.querySelector('#lessonBody .tbl');if(t)t.scrollIntoView();});await check('lesson-table');
await p.evaluate(()=>{const t=document.querySelector('#lessonBody .ex');if(t)t.scrollIntoView();});await check('lesson-ex');
await p.evaluate(()=>{const t=document.getElementById('checkBody')||document.querySelector('.opts');if(t)t.scrollIntoView();});await check('lesson-check');
for(const t of ['mc','order','fill','type']){const ok=await p.evaluate(t=>{if(!pracOpen('articles'))return false;const i=PR.items.findIndex(x=>x.t===t);if(i<0)return false;PR.i=i;PR.st=null;PR.tries=0;PR.done=false;pracItem();scrollTo(0,0);return true;},t);if(ok)await check('prac-'+t);else console.log('SKIP prac-'+t);}
await p.evaluate(()=>{const o=document.querySelector('.prac-opts .opt');if(o)o.click();});
await go('#practice');await check('practice');
await go('#read');await check('drills');
await go('#progress');await check('progress');await p.evaluate(()=>scrollTo(0,document.body.scrollHeight/2));await check('progress-2');await p.evaluate(()=>scrollTo(0,document.body.scrollHeight));await check('progress-3');
await go('#feedback');await check('feedback');
await go('#privacy');await check('privacy');
console.log('errors',JSON.stringify(errs));console.log(bad||errs.length?'RTL FAIL':'RTL OK');await b.close();process.exit(bad||errs.length?1:0);})();

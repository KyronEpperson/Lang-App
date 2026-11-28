// TL-1: target-text tags (docs/briefs/target-text-tags.md). Run: node tools/tests/tags.js   (needs ./build.sh first)
//  a tagged course (en-es) never shows ‹ › · tagged Spanish is highlighted and plays when tapped · quiz grading is unchanged · an untagged course is untouched
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'tl-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:1024,height:800}}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
await p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; window.__said=[]; speak=function(t){ window.__said.push(String(t)); }; });
// the delimiters anywhere a learner could read them: text, and the attributes read aloud or shown as tips
const leaks=()=>p.evaluate(()=>{ const out=[]; const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while((n=tw.nextNode())){ const pe=n.parentElement; if(!pe||/^(SCRIPT|STYLE|TEXTAREA)$/.test(pe.nodeName)) continue; if(/‹[^‹›\s][^‹›]*›/.test(n.nodeValue)) out.push(n.nodeValue.slice(0,80)); }
  document.querySelectorAll('[title],[aria-label],[placeholder],[data-say]').forEach(e=>['title','aria-label','placeholder','data-say'].forEach(a=>{ const v=e.getAttribute(a); if(v&&/‹[^‹›\s][^‹›]*›/.test(v)) out.push(a+'='+v.slice(0,80)); })); return out; });
// ---- an untagged course is untouched
T('en-ko: tags are off',await p.evaluate(()=>tlOn()===false&&!document.querySelector('b.tl')));
// ---- en-es
T('en-es loads',await p.evaluate(()=>applyCourse('en-es')!==false&&COURSE.id==='en-es')); await p.waitForTimeout(300);
T('en-es: tags are on',await p.evaluate(()=>tlOn()===true));
const st=await p.evaluate(()=>{ let notes=0, tagged=0, bad=0; Object.values(DECKS).forEach(d=>d.forEach(c=>{ if(c[3]){ notes++; if(c[3].indexOf('‹')>=0) tagged++; if((c[3].match(/‹/g)||[]).length!==(c[3].match(/‹[^‹›\s](?:[^‹›]*[^‹›\s])?›/g)||[]).length) bad++; } if(/[‹›]/.test(c[0]+c[1])) bad++; })); return {notes,tagged,bad}; });
T('en-es: most card notes carry tagged Spanish, every run well formed, none on a card front',st.tagged>500&&st.bad===0,st);
// lessons: every lesson, whole body
const les=await p.evaluate(async()=>{ const out={n:0,tl:0,leak:[],b:0}; for(const l of LESSONS){ const d=document.createElement('div'); d.innerHTML=lessonBody(l); document.body.appendChild(d); await new Promise(r=>setTimeout(r,0)); out.n++; out.tl+=d.querySelectorAll('b.tl').length; out.b+=d.querySelectorAll('.lbody b:not(.tl)').length; if(/[‹›]/.test(d.textContent)) out.leak.push(l.id); d.remove(); } return out; });
T('lessons: all 26 bodies show no delimiter and hold tagged Spanish',les.n===26&&les.leak.length===0&&les.tl>100&&les.b>600,les);
// a lesson on screen
await p.evaluate(()=>{ location.hash='#lessons'; }); await p.waitForTimeout(200); await p.evaluate(()=>showLesson('ser-estar')); await p.waitForTimeout(400);
T('lesson on screen: no delimiter in any text or spoken attribute',(await leaks()).length===0,await leaks());
const tap=await p.evaluate(()=>{ window.__said.length=0; const t=[...document.querySelectorAll('.lbody b')].find(x=>/[a-záéíóúñ]{3}/i.test(x.textContent)&&!x.closest('.ex')); if(!t) return null; t.click(); return {text:t.textContent,said:window.__said.slice(),lang:t.lang||''}; });
T('lesson: tapping a Spanish word plays it',!!tap&&tap.said.length===1&&tap.said[0]===tap.text,tap);
// the quick check with prose options that quote Spanish: the right option is still the right one
const chk=await p.evaluate(()=>{ const out=[]; Object.entries(CHECKS).forEach(([id,list])=>list.forEach((c,i)=>{ if(c[1].some(o=>/‹/.test(o))) out.push([id,i]); })); return out; });
T('some quick-check options quote Spanish',chk.length>0,chk.length);
// Review: a card back
await p.evaluate(()=>{ location.hash='#review'; }); await p.waitForTimeout(300);
const back=await p.evaluate(async()=>{ const s=document.getElementById('cardsStage'); for(let i=0;i<40;i++){ const h=s.querySelector('.rvhide'); if(!h) break; if(!h.classList.contains('shown')) h.click(); await new Promise(r=>setTimeout(r,30)); const n=s.querySelector('.note b.tl'); if(n){ window.__said.length=0; const shown=h.classList.contains('shown'); const tapd=s.querySelector('.note b.tl[data-tl]'); if(tapd) tapd.click(); await new Promise(r=>setTimeout(r,30)); return {text:n.textContent,note:s.querySelector('.note').textContent,said:window.__said.slice(),tapd:tapd&&tapd.textContent,color:getComputedStyle(n).color,muted:getComputedStyle(s.querySelector('.note')).color}; } const g=s.querySelector('.rvgo'); if(!g) break; g.click(); await new Promise(r=>setTimeout(r,60)); } return null; });
T('review: a card note shows its Spanish highlighted, without delimiters',!!back&&!/[‹›]/.test(back.note)&&back.color!==back.muted,back);
T('review: tapping the Spanish in a note plays it',!!back&&(!back.tapd||(back.said.length===1&&back.said[0]===back.tapd)),back);
T('review: no delimiter on screen',(await leaks()).length===0,await leaks());
// Browse (every card of a deck listed) and Practice explanations
await p.evaluate(()=>{ const x=document.getElementById('cmBrowse'); if(x) x.click(); }); await p.waitForTimeout(300);
T('browse: no delimiter on screen',(await leaks()).length===0,await leaks());
const pr=await p.evaluate(async()=>{ const d=document.createElement('div'); let n=0, tl=0; Object.values(PRACTICE).forEach(list=>list.forEach(it=>{ ['why','hint','q','p'].forEach(k=>{ if(it[k]&&/‹/.test(it[k])){ n++; d.insertAdjacentHTML('beforeend','<div class="prac-why pc">'+pesc(it[k])+'</div>'); } }); })); document.body.appendChild(d); await new Promise(r=>setTimeout(r,0)); tl=d.querySelectorAll('b.tl').length; const leak=/[‹›]/.test(d.textContent); d.remove(); return {n,tl,leak}; });
T('practice: every explanation and hint renders its Spanish as tags',pr.n>300&&pr.tl>=pr.n&&!pr.leak,pr);
// plain-text places: a menu option and the page title never get markup, only the bare words
const opt=await p.evaluate(async()=>{ const s=document.createElement('select'); const o=document.createElement('option'); o.textContent='8 · ‹ser› vs ‹estar›'; s.appendChild(o); document.body.appendChild(s); await new Promise(r=>setTimeout(r,0)); const t=o.textContent, kids=o.children.length; s.remove(); return {t,kids}; });
T('a menu option shows the bare words',opt.t==='8 · ser vs estar'&&opt.kids===0,opt);
// the app's own chevrons are left alone
const chev=await p.evaluate(async()=>{ const d=document.createElement('div'); d.textContent='‹ Back · Next ›'; document.body.appendChild(d); await new Promise(r=>setTimeout(r,0)); const r={t:d.textContent,b:d.querySelectorAll('b').length}; d.remove(); return r; });
T('a lone ‹ or › of the interface is left alone',chev.t==='‹ Back · Next ›'&&chev.b===0,chev);
// section decks: tagged words still match their cards
const sec=await p.evaluate(()=>{ let cards=0, secs=0; LESSONS.forEach(l=>{ const pl=lsPlan(l); (pl.parts||pl.secs||[]).forEach(x=>{ secs++; }); cards+=(pl.all||[]).length; }); return {cards,secs}; });
T('lesson section decks still fill',sec.cards>400,sec);
// TL-2: the other tagged courses (same checks, course by course)
for(const t of ['fr','de','pt','it']){ const id='en-'+t;
  const ok=await p.evaluate(id=>applyCourse(id)!==false&&COURSE.id===id&&tlOn()===true,id); await p.waitForTimeout(300); T(id+' loads with tags on',ok);
  const s2=await p.evaluate(()=>{ let tagged=0, bad=0; Object.values(DECKS).forEach(d=>d.forEach(c=>{ [c[2],c[3]].forEach(x=>{ if(!x) return; if(x.indexOf('‹')>=0) tagged++; if((x.match(/[‹›]/g)||[]).length!==2*(x.match(/‹[^‹›\s](?:[^‹›]*[^‹›\s])?›/g)||[]).length) bad++; }); if(/[‹›]/.test(c[0]+c[1])) bad++; })); return {tagged,bad}; });
  T(id+': card notes carry tagged runs, every run well formed, none on a card front',s2.tagged>400&&s2.bad===0,s2);
  const l2=await p.evaluate(async()=>{ const out={n:0,tl:0,leak:[],b:0}; for(const l of LESSONS){ const d=document.createElement('div'); d.innerHTML=lessonBody(l); document.body.appendChild(d); await new Promise(r=>setTimeout(r,0)); out.n++; out.tl+=d.querySelectorAll('b.tl').length; out.b+=d.querySelectorAll('.lbody b:not(.tl)').length; if(/[‹›]/.test(d.textContent)) out.leak.push(l.id); d.remove(); } return out; });
  T(id+': no lesson body shows a delimiter, tagged and taught words both present',l2.n>20&&l2.leak.length===0&&l2.tl>100&&l2.b>300,l2);
  const s3=await p.evaluate(()=>{ let cards=0; LESSONS.forEach(l=>{ const pl=lsPlan(l); cards+=(pl.all||[]).length; }); return cards; });
  T(id+': lesson section decks still fill',s3>300,s3);
}
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?fail+' FAILED':'tags: all pass'); process.exit(fail?1:0);
})();

/* Per lesson: how many cards each section teaches on its own, without the writer table. usage: node tools/sections/pre.js <course> ... */
const path=require('path'),{chromium}=require('playwright');const ROOT=path.join(__dirname,'..','..');
(async()=>{ const b=await chromium.launch(); for(const cid of process.argv.slice(2)){ const p=await (await b.newContext()).newPage(); const lang=cid.split('-')[0];
  await p.addInitScript(([lang,cid])=>{ const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false}); localStorage.setItem('la-s-'+cid,st); if(cid==='en-ko') localStorage.setItem('ko-app2',st); localStorage.setItem('la-meta',JSON.stringify({v:1,native:lang,course:cid,picked:1,seenHome:1,prefs:{}})); },[lang,cid]);
  await p.route(/supabase|fonts\.g/,r=>r.abort()); await p.goto('file://'+path.join(ROOT,'korean-flashcards.html')+'#lessons');
  await p.waitForFunction(cid=>{ try{ return COURSE.id===cid&&LESSONS.length>0; }catch(e){ return false; } },cid,{timeout:30000});
  const r=await p.evaluate(()=>LESSONS.map(l=>{ const pl=lsPlan(l); return l.id+':'+(pl.pre?pl.pre.join(','):'-')+'|'+pl.parts.map(x=>x.cards.length).join(','); }));
  console.log(cid+'\t'+r.join('  ')); await p.close(); } await b.close(); })();

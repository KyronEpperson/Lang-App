/* Print the section decks of a course as the app builds them. usage: node tools/sections/dump.js <course> [--json] */
const path=require('path'),{chromium}=require('playwright');const ROOT=path.join(__dirname,'..','..');const cid=process.argv[2]||'en-ko';
(async()=>{ const b=await chromium.launch(); const c=await b.newContext(); const p=await c.newPage(); const lang=cid.split('-')[0];
  await p.addInitScript(([lang,cid])=>{ const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false}); localStorage.setItem('la-s-'+cid,st); if(cid==='en-ko') localStorage.setItem('ko-app2',st); localStorage.setItem('la-meta',JSON.stringify({v:1,native:lang,course:cid,picked:1,seenHome:1,prefs:{}})); },[lang,cid]);
  await p.route(/supabase|fonts\.g/,r=>r.abort()); await p.goto('file://'+path.join(ROOT,'korean-flashcards.html')+'#lessons');
  await p.waitForFunction(cid=>{ try{ return COURSE.id===cid&&LESSONS.length>0; }catch(e){ return false; } },cid,{timeout:30000});
  const r=await p.evaluate(()=>LESSONS.map(l=>{ const pl=lsPlan(l); return {id:l.id,title:l.title,deck:l.deck,deckN:(DECKS[l.deck]||[]).length,parts:pl.parts.map(x=>({h:(x.html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)||[,'(intro)'])[1].replace(/<[^>]+>/g,''),cards:x.cards.map(y=>[y.d,y.c[0],y.c[1],y.c[2]])}))}; }));
  if(process.argv.includes('--json')) console.log(JSON.stringify(r)); else r.forEach(l=>{ console.log('\n## '+l.id+' · '+l.title+' · deck "'+l.deck+'" ('+l.deckN+')'); l.parts.forEach((x,i)=>{ console.log('  ['+i+'] '+x.h+' — '+x.cards.length); x.cards.forEach(c=>console.log('       '+(c[0][0]==='§'?'ex ':c[0]===l.deck?'own':'x  ')+' '+c[1]+'  ·  '+c[3]+(c[0][0]!=='§'&&c[0]!==l.deck?'   ['+c[0]+']':''))); }); });
  await b.close(); })();

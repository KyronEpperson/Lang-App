/* FND-1 release test: character foundations. A course listed in FOUND teaches its writing system in lessons that name the flashcards of each section.
   usage: node tools/tests/foundations.js [--shots <dir>]      Needs a build (korean-flashcards.html).
   A. Every lesson with `sections`, in every course: one entry per section; every deck named exists; a slice is inside its deck; a deck written inside the lesson has its own label, whole cards and is not in the deck list; no card twice; the lesson's own deck is there whole.
   B. Per course in FOUND: every letter of the standard set is the front of a card in a foundation lesson and on a flip tile there; every tile carries a reading; the foundation lessons come first; each has a chart or tiles and a deck of words that lives in the lesson.
   C. A tile flips to its reading on a tap, says its letter, and flips back.
   D. A new learner goes through each foundation lesson of each course in FOUND to the end. */
const fs=require('fs'),path=require('path'),{chromium}=require('playwright'),drive=require('./lesson_drive.js');
const ROOT=path.join(__dirname,'..','..'),si=process.argv.indexOf('--shots'),SHOTS=si>0?process.argv[si+1]:null;
const HIRA='あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん', KATA='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', DAKU='がぎぐげござじずぜぞだでどばびぶべぼぱぴぷぺぽ';
/* letters: on a card and on a tile. tilesOnly: on a tile, named on another letter's card (ぢ and づ sound like じ and ず and are rare). */
const FOUND={'en-ja':{lessons:['hiragana','sounds','katakana'],letters:[...HIRA+KATA+DAKU],tilesOnly:['ぢ','づ'],words:['hiragana','sounds','katakana']}};
let fail=0,pass=0;const ok=(c,m)=>{ if(c){ pass++; console.log('PASS '+m); } else { fail++; console.log('FAIL '+m); } };
async function open(b,cid){ const lang=cid.split('-')[0]; const c=await b.newContext({viewport:{width:390,height:800},reducedMotion:'reduce'}); const p=await c.newPage(); p.errs=[]; p.on('pageerror',e=>p.errs.push(e.message));
  await p.addInitScript(([lang,cid])=>{ const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false}); localStorage.setItem('la-s-'+cid,st); if(cid==='en-ko') localStorage.setItem('ko-app2',st); localStorage.setItem('la-meta',JSON.stringify({v:1,native:lang,course:cid,picked:1,seenHome:1,prefs:{}})); },[lang,cid]);
  await p.route(/supabase|fonts\.g/,r=>r.abort()); await p.goto('file://'+path.join(ROOT,'korean-flashcards.html')+'#lessons');
  await p.waitForFunction(cid=>{ try{ return typeof COURSE!=='undefined'&&!!COURSE&&COURSE.id===cid&&typeof LESSONS!=='undefined'&&LESSONS.length>0; }catch(e){ return false; } },cid,{timeout:30000}); await p.waitForTimeout(400); p.ctx=c; return p; }
(async()=>{ const b=await chromium.launch();
  const held=fs.existsSync(path.join(ROOT,'packs/HELD.txt'))?fs.readFileSync(path.join(ROOT,'packs/HELD.txt'),'utf8'):'';
  /* A: read the packs for lessons that name their sections, then check those courses in the app */
  const withSec=[]; fs.readdirSync(path.join(ROOT,'packs')).filter(f=>/^course-.*\.js$/.test(f)&&!held.includes(f)).forEach(f=>{ if(/"?sections"?\s*:\s*\[/.test(fs.readFileSync(path.join(ROOT,'packs',f),'utf8'))) withSec.push(f.slice(7,-3)); });
  Object.keys(FOUND).forEach(cid=>ok(withSec.includes(cid),cid+': the pack names sections'));
  for(const cid of withSec){ const p=await open(b,cid);
    const r=await p.evaluate(()=>{ const bad=[]; let n=0, own=0; LESSONS.filter(l=>Array.isArray(l.sections)).forEach(l=>{ n++; const pl=lsPlan(l), D=DECKS[l.deck]||[];
        if(l.sections.length!==pl.parts.length) bad.push(l.id+': '+l.sections.length+' entries for '+pl.parts.length+' sections');
        const flat=x=>!x?[]:Array.isArray(x)?x.reduce((a,y)=>a.concat(flat(y)),[]):[typeof x==='string'?{deck:x}:x];
        l.sections.forEach((sp,i)=>flat(sp).forEach(x=>{ if(x.cards){ own++; if(!x.name||names.includes(x.name)) bad.push(l.id+': label of an in-lesson deck is missing or is a real deck: '+x.name); if(x.cards.length<5||x.cards.some(c=>!Array.isArray(c)||!c[0]||!c[1]||!c[2])) bad.push(l.id+': in-lesson deck '+x.name+' has a card without front, reading or meaning, or fewer than 5 cards'); if(new Set(x.cards.map(c=>c[0])).size!==x.cards.length) bad.push(l.id+': '+x.name+' has a front twice'); }
          else { const K=DECKS[x.deck]; if(!K||!names.includes(x.deck)) bad.push(l.id+': no deck '+x.deck); else if(x.n&&(x.n[0]<0||x.n[1]>K.length||x.n[0]>=x.n[1])) bad.push(l.id+': slice outside '+x.deck); } }));
        const seen=new Map(); pl.all.forEach(x=>seen.set(x.c,(seen.get(x.c)||0)+1)); if([...seen.values()].some(v=>v!==1)) bad.push(l.id+': a card twice'); if(D.some(c=>seen.get(c)!==1)) bad.push(l.id+': its own deck is not whole');
        const want=l.sections.reduce((k,sp)=>k+flat(sp).reduce((m,x)=>m+(x.cards?x.cards.length:x.n?x.n[1]-x.n[0]:(DECKS[x.deck]||[]).length),0),0); if(want!==pl.all.length) bad.push(l.id+': '+pl.all.length+' cards planned, '+want+' named');
        pl.all.forEach(x=>{ if(!names.includes(x.d)&&PATH.includes(x.d)) bad.push(l.id+': in-lesson deck in the path'); }); });
      return {bad,n,own,inNames:Object.keys(DECKS).filter(d=>!names.includes(d)).length}; });
    ok(!r.bad.length&&!p.errs.length,cid+': '+r.n+' lessons name their sections, '+r.own+' decks live inside a lesson '+r.bad.slice(0,6).join(' ; ')+p.errs.slice(0,2).join(' | ')); await p.ctx.close(); }
  /* B, C, D */
  for(const cid of Object.keys(FOUND)){ const F=FOUND[cid]; let p=await open(b,cid);
    const r=await p.evaluate(F=>{ const o={order:LESSONS.slice(0,F.lessons.length).map(l=>l.id),cardMiss:[],tileMiss:[],noRead:[],noChart:[],noWords:[],raw:[],wide:[]}; const fronts=new Set(), tiles=new Set();
      F.lessons.forEach(id=>{ const l=LESSONS.find(x=>x.id===id); if(!l) return; const pl=lsPlan(l); pl.all.forEach(x=>fronts.add(x.c[0])); showLesson(id); const root=document.getElementById('lessonBody');
        root.querySelectorAll('.tiles-grid .sgl').forEach(t=>{ const g=t.querySelector('.sgf').textContent; tiles.add(g); const rd=t.querySelector('.sgb .rom'); if(!rd||!rd.textContent.trim()) o.noRead.push(g); });
        if(!root.querySelector('.tiles-grid')&&!root.querySelector('table')) o.noChart.push(id); if(F.words.includes(id)&&!pl.all.some(x=>!names.includes(x.d))) o.noWords.push(id);
        if(/\{\{/.test(root.innerHTML)) o.raw.push(id); if(document.documentElement.scrollWidth>innerWidth+1) o.wide.push(id); });
      F.letters.forEach(ch=>{ if(!fronts.has(ch)) o.cardMiss.push(ch); if(!tiles.has(ch)) o.tileMiss.push(ch); }); F.tilesOnly.forEach(ch=>{ if(!tiles.has(ch)) o.tileMiss.push(ch); }); o.n=F.letters.length; o.tiles=tiles.size; return o; },F);
    ok(r.order.join()===F.lessons.join(),cid+': the foundation lessons come first ('+r.order.join(', ')+')');
    ok(!r.cardMiss.length,cid+': each of the '+r.n+' letters is on a card in the foundation '+r.cardMiss.join(''));
    ok(!r.tileMiss.length,cid+': each letter is on a flip tile ('+r.tiles+' tiles) '+r.tileMiss.join(''));
    ok(!r.noRead.length,cid+': every tile has a reading '+r.noRead.join(''));
    ok(!r.noChart.length&&!r.noWords.length,cid+': every foundation lesson has a chart or tiles, and a deck of words where one is due '+r.noChart.concat(r.noWords).join(','));
    ok(!r.raw.length&&!r.wide.length,cid+': no raw token, nothing wider than the screen '+r.raw.concat(r.wide).join(','));
    /* C */
    const c=await p.evaluate(id=>{ showLesson(id); window.__said=[]; const sp=window.speechSynthesis; try{ if(sp) sp.speak=u=>window.__said.push(u.text); }catch(e){} const t=document.querySelector('#lessonBody .tiles-grid .sgl'); const vis=x=>getComputedStyle(x).display!=='none'; const a=[vis(t.querySelector('.sgf')),vis(t.querySelector('.sgb'))]; t.click(); const m=[vis(t.querySelector('.sgf')),vis(t.querySelector('.sgb')),t.querySelector('.sgb').textContent.trim()]; t.click(); const z=[vis(t.querySelector('.sgf')),vis(t.querySelector('.sgb'))]; return {a,m,z,sound:t.dataset.sound,g:t.querySelector('.sgf').textContent,ruby:!!t.querySelector('ruby')}; },F.lessons[0]);
    ok(c.a[0]&&!c.a[1]&&!c.m[0]&&c.m[1]&&!!c.m[2]&&c.z[0]&&!c.z[1]&&c.sound===c.g&&!c.ruby,cid+': a tile shows the letter, flips to "'+c.m[2]+'" and back, and says '+c.sound);
    if(SHOTS){ for(const id of F.lessons){ await p.evaluate(id=>{ showLesson(id); },id); await p.waitForTimeout(300); await p.screenshot({path:path.join(SHOTS,cid+'-'+id+'.png'),fullPage:true}); } }
    await p.ctx.close();
    /* D */
    for(const id of F.lessons){ p=await open(b,cid);
      const r0=await p.evaluate(id=>{ const i=LESSONS.findIndex(l=>l.id===id); LESSONS.slice(0,i).forEach(l=>S.lessons[l.id]=1); save(); showLesson(id); const pl=lsPlan(LESSONS[i]); return {decks:pl.parts.filter(x=>x.cards.length).map(x=>x.cards.length),all:pl.all.length,ans:CHECKS[id].map(q=>q[2])}; },id);
      for(let q=0;q<3;q++){ const k=r0.ans[q]; await p.waitForSelector('#checkBody .opt[data-k="'+k+'"]:not([disabled])'); await p.evaluate(k=>document.querySelector('#checkBody .opt[data-k="'+k+'"]').click(),k); await p.waitForTimeout(1100); }
      const steps=await drive(p,id,9000);
      const r2=await p.evaluate(id=>{ const l=LESSONS.find(x=>x.id===id), pl=lsPlan(l); return {done:!!S.lessons[id],decksDone:pl.parts.every((x,k)=>!x.cards.length||((S.lsec||{})[id]||{})[k]>=x.cards.length),states:pl.all.every(x=>!!cardState(x.d,x.c)),marks:document.querySelectorAll('#lessonBody .lsdeck.lsdone').length,hidden:pl.all.filter(x=>!names.includes(x.d)).length,counted:Object.keys(S.cards).length}; },id);
      ok(r2.done&&r2.decksDone&&r2.states&&r2.marks===r0.decks.length&&!p.errs.length,cid+' '+id+': a new learner finishes it: decks '+r0.decks.join('+')+', review '+r0.all+', '+steps+' steps '+p.errs.slice(0,2).join(' | '));
      await p.ctx.close(); } }
  console.log(pass+' checks pass, '+fail+' fail'); console.log(fail?'FOUNDATIONS FAIL':'FOUNDATIONS OK'); await b.close(); process.exit(fail?1:0); })();

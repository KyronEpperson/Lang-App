/* FND-1 release test: character foundations. A course listed in FOUND teaches its writing system in lessons that name the flashcards of each section.
   usage: node tools/tests/foundations.js [--shots <dir>]      Needs a build (korean-flashcards.html).
   0. Owner's rule (2026-11-25): a course opens with its writing system. Every course pack is listed in FOUND, teaches Korean (it opens with the Hangul lesson), or is one of the older courses still waiting in PENDING. A NEW course is never added to PENDING: it gets its foundation lessons and an entry in FOUND before its first release.
   A. Every lesson with `sections`, in every course: one entry per section; every deck named exists; a slice is inside its deck; a deck written inside the lesson has its own label, whole cards and is not in the deck list; no card twice in a lesson; no block of fewer than 3 cards; a lesson's own deck is taught whole, in that lesson or cut across the lessons that share it.
   B. Per course in FOUND: every letter of the standard set is the front of a card in a foundation lesson and on a flip tile there; every tile carries a reading; the foundation lessons come first; each has a chart or tiles and a deck of words that lives in the lesson.
   C. A tile flips to its reading on a tap, says its letter, and flips back.
   D. A new learner goes through each foundation lesson of each course in FOUND to the end. */
const fs=require('fs'),path=require('path'),{chromium}=require('playwright'),drive=require('./lesson_drive.js');
const ROOT=path.join(__dirname,'..','..'),si=process.argv.indexOf('--shots'),SHOTS=si>0?process.argv[si+1]:null;
const HIRA='あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん', KATA='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', DAKU='がぎぐげござじずぜぞだでどばびぶべぼぱぴぷぺぽ';
/* letters: on a card and on a tile. soundOnly: a lesson on sounds, with no letters to chart. tilesOnly: on a tile, named on another letter's card (ぢ and づ sound like じ and ず and are rare). */
const FOUND={'en-ja':{lessons:['hiragana','sounds','katakana'],letters:[...HIRA+KATA+DAKU],tilesOnly:['ぢ','づ'],words:['hiragana','sounds','katakana']},
 'en-ar':{lessons:['letters','sounds','vowels','shapes','sukun-shadda','hamza','al'],letters:[...'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'],tilesOnly:[],words:['shapes','al'],soundOnly:['sounds']},
 'en-ur':{lessons:['letters-1','letters-2','letters-3','letters-4','aspirates'],letters:[...'اآبپتٹثویےدڈذرڑزژجچحخسشصضطظعغفقکگلمنہھءں'],tilesOnly:[],words:['aspirates']},
 'en-hi':{lessons:['vowels','consonants','consonants-2','conjuncts'],letters:[...'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह','ड़','ढ़'],tilesOnly:[],words:['consonants-2']},
 'en-bn':{lessons:['vowels','consonants','vowel-signs','conjuncts'],letters:[...'অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহৎংঃঁ','ড়','ঢ়','য়'],tilesOnly:[],words:['vowel-signs']},
 'en-pa':{lessons:['vowels','letters-1','letters-2','nasal','tones'],letters:[...'ੳਅੲਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ'],tilesOnly:[],words:['letters-1','letters-2'],soundOnly:['tones']},
 'en-te':{lessons:['vowels','vowel-signs','consonants-1','consonants-2','conjuncts'],letters:[...'అఆఇఈఉఊఋఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళ'],tilesOnly:[],words:['consonants-1','consonants-2']},
 'en-kn':{lessons:['vowels','vowel-signs','consonants-1','consonants-2','conjuncts'],letters:[...'ಅಆಇಈಉಊಋಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳ'],tilesOnly:[],words:['consonants-1','consonants-2','conjuncts']},
 /* a Latin alphabet is on tiles only (tilesOnly): the letters are known, the lesson teaches what differs */
 'en-es':{lessons:['sounds'],letters:[],tilesOnly:[...'abcdefghijklmnñoprstuvwxyz','qu'],words:['sounds']},
 'en-fr':{lessons:['sounds'],letters:[],tilesOnly:[...'ABCDEFGHIJKLMNOPQRSTUVWXYZéèêëàâîïôûùçœ'],words:['sounds']},
 'en-de':{lessons:['sounds'],letters:[],tilesOnly:[...'abcdefghijklmnopqrstuvwxyzäöüß'],words:['sounds']},
 'en-zh':{lessons:['pinyin','tones','tone-change','characters'],letters:[...'氵亻心忄讠扌艹饣土钅'],tilesOnly:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s'],words:['pinyin','tones','characters'],soundOnly:['tone-change']},
 /* Mandarin for Vietnamese speakers: assembled from the Mandarin half, so it has the same foundation as en-zh */
 'vi-zh':{lessons:['pinyin','tones','tone-change','characters'],letters:[...'氵亻心忄讠扌艹饣土钅'],tilesOnly:['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s'],words:['pinyin','tones','characters'],soundOnly:['tone-change']},
 'en-ru':{lessons:['alphabet','letters','sounds'],letters:[...'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'],tilesOnly:[],words:['alphabet','letters','sounds']},
 /* anywhere: the script lessons are not the first lessons (lessons are never reordered). frontStarts: a letter card's front is the letter and its name word (ก ไก่) */
 'en-th':{lessons:['consonants','vowels','finals','tone-marks','tones','sounds'],letters:[...'กขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ'],tilesOnly:['ฃ','ฅ'],words:['vowels','finals','tone-marks'],soundOnly:['tones','sounds'],anywhere:true,frontStarts:true},
 /* Cantonese: Jyutping initials and vowels are Latin pieces on tiles; the radicals are on a card and a tile */
 'en-yue':{lessons:['jyutping','tones','characters'],letters:[...'亻氵口女木日月火心忄扌訁艹飠土糹釒門'],tilesOnly:['b','p','m','f','d','t','n','l','g','k','ng','h','gw','kw','w','z','c','s','j','aa','a','e','i','o','u','yu','oe','eo'],words:['jyutping','tones','characters']},
 /* Vietnamese: Latin script, but its own system (7 extra letters, tone marks, letter pairs): a block of four lessons; letters that read as in English are on tiles only */
 'en-vi':{lessons:['alphabet','tones','syllables','vowels'],letters:['ă','â','ê','ô','ơ','ư','đ','d','r','x','t','c','k','ch','tr','nh','ph','th','kh','gi','gh','ng','ngh','qu'],tilesOnly:[...'abeghilmnopqsuvy'],words:['alphabet','tones','syllables','vowels']},
 'en-am':{lessons:['orders','fidel-1','fidel-2','fidel-3','reading'],letters:[...'ሀለሐመሠረሰሸቀበተቸኀነኘአከኸወዐዘዠየደጀገጠጨጰጸፀፈፐ'],tilesOnly:[],words:['fidel-1','fidel-2','fidel-3']}};
/* older courses whose foundation is not built yet (docs/HANDOFF.md, "Character foundations"). This list only gets shorter. */
const PENDING='en-ceb en-cs en-da en-espr en-hmn en-id en-it en-nan en-nl en-no en-pl en-pt en-ptpt en-sv en-tl'.split(' ');
/* English for X: lesson 1 `alphabet`, the 26 letters on cards (the letter names) and on tiles */
'ar bn ceb cs de es fr hi hmn id it ja kn ko pa pl pt ru spr te th tl ur vi yue zh'.split(' ').forEach(t=>{ FOUND[t+'-en']={lessons:['alphabet'],letters:[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],tilesOnly:[],words:[],light:true}; });
let fail=0,pass=0;const ok=(c,m)=>{ if(c){ pass++; console.log('PASS '+m); } else { fail++; console.log('FAIL '+m); } };
async function open(b,cid){ const lang=cid.split('-')[0]; const c=await b.newContext({viewport:{width:390,height:800},reducedMotion:'reduce'}); const p=await c.newPage(); p.errs=[]; p.on('pageerror',e=>p.errs.push(e.message));
  await p.addInitScript(([lang,cid])=>{ const st=JSON.stringify({nick:'K',welcomed:1,onboard:{skipped:1},hintSeen:1,tourDone:1,fx3d:false}); localStorage.setItem('la-s-'+cid,st); if(cid==='en-ko') localStorage.setItem('ko-app2',st); localStorage.setItem('la-meta',JSON.stringify({v:1,native:lang,course:cid,picked:1,seenHome:1,prefs:{}})); },[lang,cid]);
  await p.route(/supabase|fonts\.g/,r=>r.abort()); await p.goto('file://'+path.join(ROOT,'korean-flashcards.html')+'#lessons');
  await p.waitForFunction(cid=>{ try{ return typeof COURSE!=='undefined'&&!!COURSE&&COURSE.id===cid&&typeof LESSONS!=='undefined'&&LESSONS.length>0; }catch(e){ return false; } },cid,{timeout:30000}); await p.waitForTimeout(400); p.ctx=c; return p; }
(async()=>{ const b=await chromium.launch();
  const held=fs.existsSync(path.join(ROOT,'packs/HELD.txt'))?fs.readFileSync(path.join(ROOT,'packs/HELD.txt'),'utf8'):'';
  /* A: read the packs for lessons that name their sections, then check those courses in the app */
  const withSec=[]; fs.readdirSync(path.join(ROOT,'packs')).filter(f=>/^course-.*\.js$/.test(f)&&!held.includes(f)).forEach(f=>{ if(/"?sections"?\s*:\s*\[/.test(fs.readFileSync(path.join(ROOT,'packs',f),'utf8'))) withSec.push(f.slice(7,-3)); });
  Object.keys(FOUND).filter(cid=>!FOUND[cid].light).forEach(cid=>ok(withSec.includes(cid),cid+': the pack names sections'));
  /* 0 */ { const all=fs.readdirSync(path.join(ROOT,'packs')).filter(f=>/^course-.*\.js$/.test(f)&&!held.includes(f)).map(f=>f.slice(7,-3)); const ko=cid=>/-ko$/.test(cid)&&fs.readFileSync(path.join(ROOT,'packs','course-'+cid+'.js'),'utf8').includes('"hangul"'); const none=all.filter(cid=>!FOUND[cid]&&!ko(cid)&&!PENDING.includes(cid)); ok(!none.length,'every course opens with its writing system (FOUND), teaches Korean, or is an older course still waiting'+(none.length?' · NEW COURSE WITHOUT A FOUNDATION: '+none.join(', ')+' (write its script lessons, see docs/briefs/foundations-writer.md, and list it in FOUND; never add it to PENDING)':'')); const both=PENDING.filter(cid=>FOUND[cid]); ok(!both.length,'no course is both done and waiting '+both.join(', ')); }
  for(const cid of withSec){ const p=await open(b,cid);
    const r=await p.evaluate(()=>{ const bad=[], used={}, own=new Set(); let n=0, inl=0; LESSONS.filter(l=>Array.isArray(l.sections)).forEach(l=>{ n++; const pl=lsPlan(l), D=DECKS[l.deck]||[];
        if(l.sections.length!==pl.parts.length) bad.push(l.id+': '+l.sections.length+' entries for '+pl.parts.length+' sections');
        const flat=x=>!x?[]:Array.isArray(x)?x.reduce((a,y)=>a.concat(flat(y)),[]):[typeof x==='string'?{deck:x}:x];
        l.sections.forEach((sp,i)=>flat(sp).forEach(x=>{ if(x.cards){ inl++; if(!x.name||names.includes(x.name)) bad.push(l.id+': label of an in-lesson deck is missing or is a real deck: '+x.name); if(x.cards.length<5||x.cards.some(c=>!Array.isArray(c)||!c[0]||!c[1]||!c[2])) bad.push(l.id+': in-lesson deck '+x.name+' has a card without front, reading or meaning, or fewer than 5 cards'); if(new Set(x.cards.map(c=>c[0])).size!==x.cards.length) bad.push(l.id+': '+x.name+' has a front twice'); }
          else { const K=DECKS[x.deck]; if(!K||!names.includes(x.deck)) bad.push(l.id+': no deck '+x.deck); else if(x.n&&(x.n[0]<0||x.n[1]>K.length||x.n[0]>=x.n[1])) bad.push(l.id+': slice outside '+x.deck); } }));
        const seen=new Map(); pl.all.forEach(x=>seen.set(x.c,(seen.get(x.c)||0)+1)); if([...seen.values()].some(v=>v!==1)) bad.push(l.id+': a card twice'); if(!pl.all.length) bad.push(l.id+': no flashcards'); pl.parts.forEach(x=>{ if(x.cards.length&&x.cards.length<3) bad.push(l.id+': a block of fewer than 3 cards'); }); pl.all.forEach(x=>{ if(names.includes(x.d)){ const u=used[x.d]=used[x.d]||new Map(); u.set(x.c,(u.get(x.c)||0)+1); } }); own.add(l.deck);
        const want=l.sections.reduce((k,sp)=>k+flat(sp).reduce((m,x)=>m+(x.cards?x.cards.length:x.n?x.n[1]-x.n[0]:(DECKS[x.deck]||[]).length),0),0); if(want!==pl.all.length) bad.push(l.id+': '+pl.all.length+' cards planned, '+want+' named');
        pl.all.forEach(x=>{ if(!names.includes(x.d)&&PATH.includes(x.d)) bad.push(l.id+': in-lesson deck in the path'); }); });
      /* a lesson's own deck is taught whole: in that lesson, or cut across the lessons that share it, each card once */ own.forEach(d=>{ const u=used[d]||new Map(); (DECKS[d]||[]).forEach(c=>{ if(u.get(c)!==1) bad.push('deck '+d+': card '+c[0]+' is in '+(u.get(c)||0)+' lessons'); }); });
      return {bad,n,own:inl,inNames:Object.keys(DECKS).filter(d=>!names.includes(d)).length}; });
    ok(!r.bad.length&&!p.errs.length,cid+': '+r.n+' lessons name their sections, '+r.own+' decks live inside a lesson '+r.bad.slice(0,6).join(' ; ')+p.errs.slice(0,2).join(' | ')); await p.ctx.close(); }
  /* B, C, D */
  for(const cid of Object.keys(FOUND)){ const F=FOUND[cid]; let p=await open(b,cid);
    const r=await p.evaluate(F=>{ const o={order:LESSONS.slice(0,F.lessons.length).map(l=>l.id),cardMiss:[],tileMiss:[],noRead:[],noChart:[],noWords:[],raw:[],wide:[]}; const fronts=new Set(), tiles=new Set();
      F.lessons.forEach(id=>{ const l=LESSONS.find(x=>x.id===id); if(!l) return; const pl=lsPlan(l); pl.all.forEach(x=>{ fronts.add(x.c[0]); if(F.frontStarts) fronts.add([...x.c[0]][0]); }); showLesson(id); const root=document.getElementById('lessonBody');
        root.querySelectorAll('.tiles-grid .sgl').forEach(t=>{ const g=t.querySelector('.sgf').textContent; tiles.add(g); const rd=t.querySelector('.sgb .rom'); if(!rd||!rd.textContent.trim()) o.noRead.push(g); });
        if(!root.querySelector('.tiles-grid')&&!root.querySelector('table')&&!(F.soundOnly||[]).includes(id)) o.noChart.push(id); if(F.words.includes(id)&&!pl.all.some(x=>!names.includes(x.d))) o.noWords.push(id);
        if(/\{\{/.test(root.innerHTML)) o.raw.push(id); if(document.documentElement.scrollWidth>innerWidth+1) o.wide.push(id); });
      F.letters.forEach(ch=>{ if(!fronts.has(ch)) o.cardMiss.push(ch); if(!tiles.has(ch)) o.tileMiss.push(ch); }); F.tilesOnly.forEach(ch=>{ if(!tiles.has(ch)) o.tileMiss.push(ch); }); o.n=F.letters.length; o.tiles=tiles.size; return o; },F);
    ok(F.anywhere||r.order.join()===F.lessons.join(),cid+': the foundation lessons come first ('+r.order.join(', ')+')');
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
    for(const id of F.light?[]:F.lessons){ p=await open(b,cid);
      const r0=await p.evaluate(id=>{ const i=LESSONS.findIndex(l=>l.id===id); LESSONS.slice(0,i).forEach(l=>S.lessons[l.id]=1); save(); showLesson(id); const pl=lsPlan(LESSONS[i]); return {decks:pl.parts.filter(x=>x.cards.length).map(x=>x.cards.length),all:pl.all.length,ans:CHECKS[id].map(q=>q[2])}; },id);
      for(let q=0;q<3;q++){ const k=r0.ans[q]; await p.waitForSelector('#checkBody .opt[data-k="'+k+'"]:not([disabled])'); await p.evaluate(k=>document.querySelector('#checkBody .opt[data-k="'+k+'"]').click(),k); await p.waitForTimeout(1100); }
      const steps=await drive(p,id,9000);
      const r2=await p.evaluate(id=>{ const l=LESSONS.find(x=>x.id===id), pl=lsPlan(l); return {done:!!S.lessons[id],decksDone:pl.parts.every((x,k)=>!x.cards.length||((S.lsec||{})[id]||{})[k]>=x.cards.length),states:pl.all.every(x=>!!cardState(x.d,x.c)),marks:document.querySelectorAll('#lessonBody .lsdeck.lsdone').length,hidden:pl.all.filter(x=>!names.includes(x.d)).length,counted:Object.keys(S.cards).length}; },id);
      ok(r2.done&&r2.decksDone&&r2.states&&r2.marks===r0.decks.length&&!p.errs.length,cid+' '+id+': a new learner finishes it: decks '+r0.decks.join('+')+', review '+r0.all+', '+steps+' steps '+p.errs.slice(0,2).join(' | '));
      await p.ctx.close(); } }
  console.log(pass+' checks pass, '+fail+' fail'); console.log(fail?'FOUNDATIONS FAIL':'FOUNDATIONS OK'); await b.close(); process.exit(fail?1:0); })();

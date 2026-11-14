const fs=require('fs'), vm=require('vm');
const F='/home/claude/packs/i18n-ko.js', src=fs.readFileSync(F,'utf8');
const fail=m=>{console.log('FAIL: '+m); process.exitCode=1;};
if(/<\/script/i.test(src)) fail('contains </script');
/* line comments: strip strings then look for // */
const noStr=src.replace(/"(?:[^"\\\n]|\\.)*"/g,'""').replace(/\/\*[\s\S]*?\*\//g,'');
if(/\/\//.test(noStr)) fail('// line comment present');
const ctx={LANGAPP_PACKS:{course:{},i18n:{}}}; vm.createContext(ctx); vm.runInContext(src,ctx,{filename:F});
const P=ctx.LANGAPP_PACKS.i18n.ko;
if(!P||typeof P.exact!=='object'||!Array.isArray(P.patterns)) fail('shape');
if(Object.keys(ctx.LANGAPP_PACKS).join()!=='course,i18n'||Object.keys(ctx.LANGAPP_PACKS.i18n).join()!=='ko'||Object.keys(ctx.LANGAPP_PACKS.course).length) fail('pack assigns outside i18n.ko');
const ex=P.exact, keys=Object.keys(ex);
/* duplicates: parse keys from source lines */
const lineKeys=[...src.matchAll(/^\s{4}("(?:[^"\\]|\\.)*")\s*:/gm)].map(m=>JSON.parse(m[1]));
const seen=new Map(); lineKeys.forEach(k=>seen.set(k,(seen.get(k)||0)+1));
const dups=[...seen].filter(([k,n])=>n>1); if(dups.length) fail('duplicate keys: '+JSON.stringify(dups));
if(lineKeys.length!==keys.length) fail('parsed '+lineKeys.length+' keys vs '+keys.length+' loaded');
for(const k of keys){ const v=ex[k];
  if(typeof v!=='string'||!v.trim()) fail('empty value for '+k);
  if(k!==k.trim()) fail('untrimmed key '+JSON.stringify(k));
  if(!/[A-Za-z]/.test(k)) fail('key without Latin letters (pure Korean/punctuation): '+k);
  if(/^[\p{P}\p{S}\s\d]*$/u.test(k)) fail('pure punctuation key '+k); }
const RX=[]; P.patterns.forEach((p,i)=>{ if(!Array.isArray(p)||p.length!==2||typeof p[0]!=='string'||typeof p[1]!=='string'||!p[1].trim()) return fail('bad pattern '+i);
  if(!p[0].startsWith('^')||!p[0].endsWith('$')) fail('unanchored '+p[0]);
  let r; try{ r=new RegExp(p[0]); new RegExp(p[0],'u'); }catch(e){ return fail('regex '+p[0]+' '+e.message); }
  const ng=new RegExp('(?:'+p[0]+')|').exec('').length-1, refs=[...p[1].matchAll(/\$(\d)/g)].map(m=>+m[1]);
  if(refs.some(n=>n>ng)) fail('replacement refs missing group: '+p[0]+' -> '+p[1]);
  RX.push([r,p[1]]); });
let FRAG_SAMPLES=[];
const t=s=>{ s=s.trim(); if(ex[s]) return ex[s]; for(const [r,rep] of RX) if(r.test(s)) return s.replace(r,rep); return null; };
/* sample dynamic renders */
const samples=['5 cards due','Level 7','Quiz · 3/12 · new 5 + 7 learned · read','12 left · across 3 decks','Mix · 15 cards · passed','Weak spots · 3/24 · pass 1/3 · listen',
 '🛡️ Streak shield earned (1/2). A missed day won\'t break your streak.','Syncing as kii@example.com','80% · 20 tried · streak 3 · best 5','Last 40 reviews · 85% correct · 3s per card · best hour 09:00 (92%)',
 'Practice · quick actions','2/5 · Review','Practice 인사','Resend email (42s)','Due for review · 인사','레벨 업! Level 5 · Talker 수다쟁이 🎉','Flashcard: Excuse me. (익스큐즈 미). Press to flip, arrow keys to answer.'];
samples.forEach(s=>console.log('  sample: '+s+'  =>  '+t(s)));
const cov=JSON.parse(fs.readFileSync(__dirname+'/cov.json','utf8'));
const rep=(name,list)=>{ const miss=list.filter(s=>t(s)===null); console.log(`${name}: ${list.length-miss.length}/${list.length} = ${((list.length-miss.length)/list.length*100).toFixed(1)}%`); return miss; };

/* fragments of concatenated strings -> a realistic assembled render; fragment counts as covered if the render translates */
const FRAG={'of new cards':'Hello · Thanks · Sorry · … · ~3 days of new cards','all seen':'Hello · Thanks · all seen','Something went wrong:':'Something went wrong: x is undefined',
'레벨 업! Level':'레벨 업! Level 5 · Talker 수다쟁이 🎉','🛡️ Streak shield used for yesterday.':'🛡️ Streak shield used for yesterday. 1 left.','🛡️ Streak shield earned (':"🛡️ Streak shield earned (1/2). A missed day won't break your streak.",
"/2). A missed day won't break your streak.":"🛡️ Streak shield earned (2/2). A missed day won't break your streak.",'mastered · +50 XP':'🏆 인사 mastered · +50 XP','🩹 leech ·':'🩹 leech · box 2','/3 · repeat':'🗣 2/3 · repeat',
'Set up. Start with':'Set up. Start with 인사.','· lessons':'This week: 인사 3/10 · lessons 1, 2 · 10 new/day','XP TODAY':'30 XP TODAY','TODAY':'/ 25 TODAY','· day':'joeun achimieyo · good morning · day 5 🔥',
'· daily cap reached':'New cards · 인사 · daily cap reached','days · a Quick session keeps it':'· 5 days · a Quick session keeps it','🏅 Deck of the week complete:':'🏅 Deck of the week complete: 인사','· card':'인사 + 숫자 · card 3/20',
'Open lesson ·':'Open lesson · 관사','decks ·':'3 decks · 40 cards','due now ·':'12 due now · 3 tomorrow · 20 this week','tomorrow ·':'0 due now · 3 tomorrow · 20 this week','Next ones come due in':'No cards due right now. Next ones come due in 2 days.',
'Continue practice · card':'Continue practice · card 3/20','Learn new cards ·':'Learn new cards · 인사','· across':'12 left · across 3 decks','suspended ·':'suspended · box 2','Added ·':'Added · 5 in My phrases','in My phrases':'Added · 1 in My phrases',
'Imported':'Imported 3','Aa romanization:':'Aa romanization: on','decks selected.':'#travel · 3 decks selected.','decks selected':'3 decks selected','cards · tap to add or remove decks':'40 cards · tap to add or remove decks',
'Test everything ·':'Test everything · 40 cards × 3','cards × 3':'Test everything · 8 cards × 3','Continue learning · card':'Continue learning · card 6 of 40','Learn 5 at a time ·':'Learn 5 at a time · 40 cards','rounds left':'7 rounds left',
'· 80% to pass':'인사 · 80% to pass','New 5 added · now':'New 5 added · now 15 cards in the mix','in the mix':'New 5 added · now 10 cards in the mix','Quiz the whole mix (':'Quiz the whole mix (15)','Mix ·':'Mix · 15 cards',
'new 5 +':'Quiz · 3/12 · new 5 + 7 learned · recall','personal best':'12 answered · best combo ×5 · personal best 30','Weak spots ·':'Weak spots · 8','· streak':'80% · 20 tried · streak 3','· best':'Start typing · best 5',
'🎓 Certificate earned:':'🎓 Certificate earned: 기초 · +100 XP','· +100 XP':'🎓 Certificate earned: 여행 · +100 XP','XP to Level':'40 XP to Level 4 · Pro 고수 at Level 8','at Level':'40 XP to Level 4 · Pro 고수 at Level 8',
'🛡️ Streak shields:':'🛡️ Streak shields: 1/2 · earn one every 7-day streak; a missed day spends one instead of breaking the streak.','/2 · earn one every 7-day streak; a missed day spends one instead of breaking the streak.':'🛡️ Streak shields: 0/2 · earn one every 7-day streak; a missed day spends one instead of breaking the streak.',
'New → box 1 (today) →':'New → box 1 (today) → 2 (1 d) → 3 (3 d) → 4 (7 d) → 5 (14 d) → 6 (30 d) · 6 = mastered','· 6 = mastered':'→ 6 (30 d) · 6 = mastered','% avg':'45% avg','Export copied (':'Export copied (12 KB).','KB).':'Export copied (3 KB).',
'cards of progress were new.':'Merged. 3 cards of progress were new.','Resend email (':'Resend email (42s)','Syncing as':'Syncing as mina@example.com',"Couldn't delete right now (":"Couldn't delete right now (HTTP 500). Try again, or post in Feedback.",
'). Try again, or post in Feedback.':"Couldn't delete right now (error). Try again, or post in Feedback.",'Show my name (':'Show my name (Mina) publicly',') publicly':'Show my name (Mina) publicly','Due for review ·':'Due for review · 인사','Word to learn ·':'Word to learn · 인사'};
/* not UI copy: en-ko course content, code identifiers / CSS / URLs / HTTP, ICS file body, canvas-only (needs engine t()) */
const COURSE=/^(Yesterday I met|First we went|And we drank|After that we|So I got home|What did you do last|I had lunch|But the movie|I don't|I can't|Can you speak Korean|I can, a little|I'm not)|^(Survival phrases( 2)?|Asking around|Café & convenience store|Directions & transport|Introductions|Hanging out|Casual texting|Flirting|Cute things to say|K-drama phrases|K-pop & fan culture|Sweet talk|Social media & slang|Numbers in the wild|Time & days|Core verbs|Hangul vowels|Hangul consonants|Food & ordering|Small talk|Hype & cool)$|^(neujeosseoyo|joeun |jamkkan|jalhago|dasi sijak|baeuneun)/;
const CODE=/^(\(prefers-|sheet gs|Escape|SPAN|flex:|<button|Bearer|POST|PATCH|HTTP|Prefer|fx off|no THREE|three load|background |opacity |radial-gradient|"Noto)|^\/|^(UID|SUMMARY|DESCRIPTION):/;
const CANVAS=new Set(['Lv','SESSION DONE · +','XP ·','· 한글 Korean starter']);
const ms=rep('static HTML candidates',cov.static), mj0=rep('JS literal candidates, raw fragments',cov.js);
const fragOk=[],fragBad=[],course=[],code=[],canvas=[],mj=[];
for(const s of mj0){ if(FRAG[s]!==undefined){ (t(FRAG[s])!==null?fragOk:fragBad).push(s); } else if(COURSE.test(s)) course.push(s); else if(CODE.test(s)) code.push(s); else if(CANVAS.has(s)) canvas.push(s); else mj.push(s); }
const ui=cov.js.length-course.length-code.length;
console.log(`JS: ${fragOk.length} fragments covered via assembled-string patterns, ${fragBad.length} fragments NOT covered ${JSON.stringify(fragBad)}`);
console.log(`JS: excluded as non-UI -> course content ${course.length}, code/CSS/URL/ICS ${code.length}; canvas-only ${canvas.length} ${JSON.stringify(canvas)}`);
console.log(`JS UI coverage: ${ui-mj.length-canvas.length-fragBad.length}/${ui} = ${((ui-mj.length-canvas.length-fragBad.length)/ui*100).toFixed(1)}% (canvas-only counted as miss)`);
FRAG_SAMPLES=Object.values(FRAG);
fs.writeFileSync(__dirname+'/miss.json',JSON.stringify({static:ms,js:mj},null,1));
console.log('static misses:',JSON.stringify(ms)); console.log('JS unexplained misses: '+JSON.stringify(mj)); for(const s of fragBad) console.log('  frag render untranslated: '+FRAG[s]);
console.log(`exact=${keys.length} patterns=${P.patterns.length}`); if(!process.exitCode) console.log('VALID ✅');
if(process.env.SHOW) for(const s of FRAG_SAMPLES) console.log('  '+s+'  =>  '+t(s));

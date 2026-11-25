// DS-1: the deck page (Review) is bare; its controls live in the Settings sheet behind the header gear. Run: node tools/tests/decksimple.js   (needs ./build.sh first)
// SHOTS=<dir> also writes screenshots there.
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'ds-')),'page.html'); const SHOTS=process.env.SHOTS||'';
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch();
for(const [tag,vw,vh,dsf] of [['desktop',800,820,2],['phone',390,800,2],['narrow',320,640,1]]){
const ctx=await b.newContext({viewport:{width:vw,height:vh},deviceScaleFactor:dsf}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
await p.evaluate(()=>{ S.onboard={skipped:1}; S.hintSeen=1; S.welcomed=1; window.__said=[]; speak=function(t){ window.__said.push(String(t)); }; location.hash='#review'; });
await p.waitForTimeout(300); await p.evaluate(()=>{ document.querySelectorAll('.welcome,#welcome,.sheet').forEach(x=>x.remove()); });
const shot=async n=>{ if(SHOTS) await p.screenshot({path:path.join(SHOTS,n+'-'+tag+'.png')}); };
const vis=sel=>p.evaluate(q=>{ const x=document.querySelector(q); return !!x&&x.offsetParent!==null&&x.getClientRects().length>0; },sel);
const page=await p.evaluate(()=>{ const v=document.getElementById('v-cards'), on=x=>!!x&&x.offsetParent!==null; return { ctl:[...v.querySelectorAll('button,select,input,summary,label,kbd')].filter(on).filter(x=>!x.closest('#cardsStage,#pickHeadR,#decks,#addCard')&&x.id!=='search').map(x=>x.id||x.textContent.trim().slice(0,20)), search:on(document.getElementById('search')), add:on(document.querySelector('#addCard summary')), head:on(document.getElementById('pickHeadR')), bar:on(document.getElementById('prog').parentElement), left:on(document.getElementById('left')), adv:!!v.querySelector('.advbtn'), gearAfterBug:document.getElementById('bugBtn').nextElementSibling===document.getElementById('setBtn'), fit:document.documentElement.scrollWidth<=innerWidth, top:(()=>{ const t=document.querySelector('.top'); return t.scrollWidth<=t.clientWidth; })() }; });
T(tag+': page keeps search, add phrase, deck card, progress bar',page.search&&page.add&&page.head&&page.bar,page);
T(tag+': no other control, count line or options button on the page',page.ctl.length===0&&!page.left&&!page.adv,page);
T(tag+': gear sits right after the bug button, header fits',page.gearAfterBug&&page.fit&&page.top&&await vis('#setBtn'),page);
await shot('deck-page');
/* the sheet */
T(tag+': sheet closed at start',!(await vis('#setSheet')));
await p.click("#setBtn"); await p.waitForTimeout(350);
const open=await p.evaluate(()=>{ const on=x=>!!x&&x.offsetParent!==null; return ['auto','rateSel','hideRom','cmDue','cmAll','cmBrowse','shuffle','reset'].filter(i=>!on(document.getElementById(i))); });
T(tag+': sheet shows every moved control on Review',open.length===0&&await p.evaluate(()=>document.getElementById('auto').checked),open);
await shot('settings');
/* keys do not answer the quiz while the sheet is open */
const st=()=>p.evaluate(()=>{ const s=document.getElementById('cardsStage'); return (s.querySelector('.rvgo')?'teach':'q')+'|'+s.textContent.slice(0,60); });
const s0=await st(); await p.keyboard.press('1'); await p.keyboard.press('f'); await p.waitForTimeout(200); T(tag+': keys do not reach the quiz behind the sheet',s0===await st(),[s0,await st()]);
await p.keyboard.press('Escape'); await p.waitForTimeout(80); T(tag+': Escape closes, focus returns to the gear',!(await vis('#setSheet'))&&await p.evaluate(()=>document.activeElement.id==='setBtn'));
/* speed is saved */
await p.click('#setBtn'); await p.waitForTimeout(80); await p.selectOption('#rateSel','1'); T(tag+': speed saved',await p.evaluate(()=>S.rate===1)); await p.selectOption('#rateSel','0.85');
/* Browse closes the sheet and offers a way back */
await p.click('#cmBrowse'); await p.waitForTimeout(150); T(tag+': Browse closes the sheet and shows Back',!(await vis('#setSheet'))&&await vis('#brBack')&&await vis('.brow'));
await shot('browse');
await p.click('#brBack'); await p.waitForTimeout(150); T(tag+': Back returns to the cards',!(await vis('.brow'))&&await p.evaluate(()=>document.getElementById('cmDue').getAttribute('aria-pressed')==='true'));
/* backdrop click closes */
await p.click('#setBtn'); await p.waitForTimeout(80); await p.mouse.click(5,5); await p.waitForTimeout(80); T(tag+': tap outside closes',!(await vis('#setSheet')));
/* other pages: only the general settings */
await p.evaluate(()=>{ location.hash='#today'; }); await p.waitForTimeout(300); await p.click('#setBtn'); await p.waitForTimeout(100);
T(tag+': on Today the sheet has Audio, Speed, Blur and no deck controls',await vis('#auto')&&await vis('#rateSel')&&!(await vis('#cmDue'))&&!(await vis('#reset')));
await p.evaluate(()=>{ location.hash='#progress'; }); await p.waitForTimeout(300); T(tag+': changing page closes the sheet',!(await vis('#setSheet')));
T(tag+': no page errors',errs.length===0,errs.slice(0,3));
await ctx.close(); }
await b.close(); console.log(fail?fail+' FAILED':'ALL PASS'); process.exit(fail?1:0);
})();

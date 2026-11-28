// SR-1: say, record, compare (course report, solution 8), en-es. Run: node tools/tests/sayrecord.js   (needs ./build.sh first)
//  the button is on the new-card screen, on quiz answers and on an opened story line · a recording is made with the microphone, played after the model, and thrown away on close · a blocked microphone says so · other courses have no button · the site header allows the microphone for this site only
const {chromium}=require('playwright'); const fs=require('fs'), os=require('os'), path=require('path');
const SRC=process.env.HARNESS_SRC||'/home/claude/korean-flashcards.html'; const OUT=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'sr-')),'page.html');
let fail=0; const T=(name,ok,info)=>{ console.log((ok?'PASS ':'FAIL ')+name+(ok||info===undefined?'':' · '+JSON.stringify(info))); if(!ok) fail++; };
(async()=>{
fs.writeFileSync(OUT,'<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"><style>[hidden]{display:none!important}</style></head><body>'+fs.readFileSync(SRC,'utf8')+'</body></html>');
const b=await chromium.launch({args:['--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream']}); const ctx=await b.newContext({viewport:{width:420,height:860},permissions:['microphone']}); const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.route('**/fonts.googleapis.com/**',r=>r.fulfill({body:'',contentType:'text/css'})); await p.route('**/*.supabase.co/**',r=>r.fulfill({status:200,body:'[]',contentType:'application/json'}));
await p.goto('file://'+OUT); await p.waitForTimeout(200);
const prep=()=>p.evaluate(()=>{ document.querySelectorAll('.welcome').forEach(x=>x.remove()); S.welcomed=1; S.onboard={skipped:1}; S.hintSeen=1; S.tourDone=1; S.autoNext=false; window.__said=[]; window.__mine=0; srSay=function(done){ window.__said.push(SR.text); if(done) setTimeout(done,20); }; if(!window.__wrapped){ window.__wrapped=1; const pl=HTMLMediaElement.prototype.play; HTMLMediaElement.prototype.play=function(){ if(/^blob:/.test(this.src)) window.__mine++; return pl.call(this).catch(()=>{}); }; } });
await prep();
T('built-in Korean course: no Say it button',await p.evaluate(()=>!srOn()&&srBtn('안녕')===''));
T('en-es loads with Say it on',await p.evaluate(()=>applyCourse('en-es')!==false&&srOn())); await p.waitForTimeout(300); await prep();
await p.evaluate(()=>{ deck=names.find(n=>!/^§/.test(n)&&DECKS[n].length>3); cardsMode='all'; location.hash='#review'; }); await p.waitForTimeout(250);
const rv=await p.evaluate(()=>{ const q=document.querySelector('#cardsStage .rvq'), bt=q&&q.querySelector('[data-rec]'); return {btn:!!bt,text:bt&&bt.dataset.rec,word:q&&q.querySelector('.q').textContent,first:q&&q.querySelector('.speak').hasAttribute('data-say')}; });
T('new card screen: Say it sits next to the speaker button',rv.btn&&rv.text===rv.word&&rv.first,rv);
await p.click('#cardsStage .rvq [data-rec]'); await p.waitForTimeout(100);
const open=await p.evaluate(()=>({sheet:!!document.querySelector('.sr-sheet'),text:(document.querySelector('.sr-text')||{}).textContent,mine:document.querySelector('.sr-mine').disabled,both:document.querySelector('.sr-both').disabled,priv:/stays on this device/.test(document.querySelector('.sr-priv').textContent),still:!!document.querySelector('#cardsStage .rvq .teach-count, #cardsStage .rvq .rvhide:not(.shown)')}));
T('the sheet opens with the word, nothing to compare yet, says the recording stays on the device, and the card does not move',open.sheet&&open.text===rv.text&&open.mine&&open.both&&open.priv&&open.still,open);
await p.click('.sr-model'); await p.waitForTimeout(60);
T('Model says the sentence',await p.evaluate(t=>window.__said.length===1&&window.__said[0]===t,rv.text));
await p.click('.sr-rec'); await p.waitForTimeout(700);
const rec=await p.evaluate(()=>({state:SR.state,live:!!(SR.stream&&SR.stream.getTracks().some(t=>t.readyState==='live')),label:document.querySelector('.sr-rec').textContent,model:document.querySelector('.sr-model').disabled}));
T('Record turns the microphone on and shows Stop',rec.state==='rec'&&rec.live&&/Stop/.test(rec.label)&&rec.model,rec);
await p.click('.sr-rec'); await p.waitForTimeout(600);
const done=await p.evaluate(()=>({state:SR.state,url:/^blob:/.test(SR.url||''),mic:!SR.stream,said:window.__said.length,mine:window.__mine,minebtn:!document.querySelector('.sr-mine').disabled,label:document.querySelector('.sr-rec').textContent}));
T('Stop turns the microphone off and plays the model, then the recording',done.state==='done'&&done.url&&done.mic&&done.said===2&&done.mine===1&&done.minebtn&&/Record again/.test(done.label),done);
await p.click('.sr-mine'); await p.waitForTimeout(80); T('You plays the recording again',await p.evaluate(()=>window.__mine===2));
await p.click('.sr-x'); await p.waitForTimeout(80);
T('Close removes the sheet and the recording',await p.evaluate(()=>SR===null&&!document.querySelector('.sr-sheet')));
// leaving the page while recording
await p.evaluate(()=>{ document.querySelector('#cardsStage .rvq [data-rec]').click(); }); await p.waitForTimeout(60); await p.click('.sr-rec'); await p.waitForTimeout(500);
const st=await p.evaluate(()=>{ const s=SR.stream; location.hash='#today'; return new Promise(r=>setTimeout(()=>r({gone:SR===null&&!document.querySelector('.sr-sheet'),dead:!!s&&s.getTracks().every(t=>t.readyState==='ended')}),200)); });
T('leaving the page while recording stops the microphone',st.gone&&st.dead,st);
// story line
await prep(); await p.evaluate(()=>{ location.hash='#lessons'; }); await p.waitForTimeout(250); const sl=await p.evaluate(()=>{ stOpen(LESSONS[2].id); ST.stage='read'; stDraw(); const none=document.querySelectorAll('#stRun [data-rec]').length; ST.open[0]=true; stDraw(); const bt=document.querySelector('#stRun .st-line[data-i="0"] [data-rec]'); return {none,btn:!!bt,same:bt&&bt.dataset.rec===ST.s.lines[0][0]}; });
T('story: an opened line has the button, closed lines do not',sl.none===0&&sl.btn&&sl.same,sl);
await p.click('#stRun .st-line[data-i="0"] [data-rec]'); await p.waitForTimeout(80);
T('story: the button opens the sheet and the line stays open',await p.evaluate(()=>!!document.querySelector('.sr-sheet')&&ST.open[0]===true&&ST.stage==='read')); await p.click('.sr-x');
// blocked microphone
await p.evaluate(()=>{ navigator.mediaDevices.getUserMedia=()=>Promise.reject(Object.assign(new Error('no'),{name:'NotAllowedError'})); srOpen('Hola'); }); await p.click('.sr-rec'); await p.waitForTimeout(100);
T('a blocked microphone is explained',await p.evaluate(()=>SR.state==='blocked'&&/blocked/.test(document.querySelector('.sr-msg').textContent)&&!document.querySelector('.sr-rec').disabled)); await p.click('.sr-x');
const vj=path.join(path.dirname(SRC),'korean-site','vercel.json'); const pol=fs.existsSync(vj)?(fs.readFileSync(vj,'utf8').match(/"Permissions-Policy","value":"([^"]*)"|"Permissions-Policy",\s*"value":\s*"([^"]*)"/)||[]).slice(1).find(Boolean):null;
T('the site header allows the microphone for this site only, camera still off',!!pol&&/microphone=\(self\)/.test(pol)&&/camera=\(\)/.test(pol),pol);
T('no page errors',errs.length===0,errs.slice(0,3));
await b.close(); console.log(fail?('FAILED '+fail):'ALL PASS'); process.exit(fail?1:0);
})();

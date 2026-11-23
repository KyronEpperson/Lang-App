/* every language the app lists must have drawn flag art: flag emoji do not render on Windows. usage: node tools/tests/flagcheck.js */
const {chromium}=require('playwright');const path=require('path');(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+path.resolve(__dirname,'../../korean-flashcards.html'));await p.waitForTimeout(800);
const miss=await p.evaluate(()=>Object.keys(LANGS).filter(k=>!FLAG_ART[k]));await b.close();if(miss.length){console.log('FLAG ART MISSING: '+miss.join(' '));process.exit(1);}console.log('FLAGS OK');})();

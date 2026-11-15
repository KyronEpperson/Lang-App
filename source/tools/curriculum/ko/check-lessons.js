// Syntax + structure check for lessons.frag.js (run: node check-lessons.js)
const fs=require('fs'), path=require('path'), assert=require('assert');
const src=fs.readFileSync(path.join(__dirname,'lessons.frag.js'),'utf8');
// 1. the brief's minimal check (stub ex)
{ const ex=(a,b,c)=>''; const L=eval('['+src+']'); console.log(L.map(l=>l.id)); }
// 2. real ex, structural checks
const ex=(k,r,m)=>`<div class="ex"><span class="k">${k}</span><span class="r">${r}</span><span class="m">${m}</span></div>`;
const L=eval('['+src+']');
const DECKS=["Survival phrases","Introductions","Places & buildings","Food words","Drinks","Activities","Core verbs","Particles","Numbers","Counters","Adjectives","Family & people","Position & direction words","Time & days"];
const order=JSON.parse(fs.readFileSync(path.join(__dirname,'order.json'),'utf8'));
assert.strictEqual(order.length,24); assert.strictEqual(new Set(order).size,24);
const nEx=(src.match(/\$\{ex\(/g)||[]).length, nDollar=(src.match(/\$\{/g)||[]).length, nRe=(src.match(/ex\("(?:[^"\\]|\\.)*","(?:[^"\\]|\\.)*","(?:[^"\\]|\\.)*"\)/g)||[]).length;
assert.strictEqual(nEx,nDollar,'stray ${'); assert.strictEqual(nEx,nRe,'ex() row the audit regex would miss');
for(const l of L){
  assert(order.includes(l.id),'id not in order: '+l.id);
  assert(DECKS.includes(l.deck),'bad deck '+l.deck);
  assert(/^0 · /.test(l.title),'title '+l.title);
  for(const t of ['div','table','ul','li','p','h3','tr','td','th','b']){
    const o=(l.body.match(new RegExp('<'+t+'[ >]','g'))||[]).length, c=(l.body.match(new RegExp('</'+t+'>','g'))||[]).length;
    assert.strictEqual(o,c,`${l.id}: <${t}> ${o} vs ${c}`);
  }
  assert(/Common mistakes/.test(l.body),l.id+' no mistakes box');
  assert(!/[A-Za-z]/.test((l.body.match(/<span class="k">[^<]*/g)||[]).join('').replace(/<span class="k">/g,'')),l.id+' latin in Korean column');
  const sections=(l.body.match(/<h3>/g)||[]).length, rows=(l.body.match(/class="ex"/g)||[]).length;
  console.log(l.id.padEnd(10),'sections',sections,'ex rows',rows);
}
console.log('lessons OK:',L.length);

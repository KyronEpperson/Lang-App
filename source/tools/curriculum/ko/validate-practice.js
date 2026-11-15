// Validates practice-a.js against docs/PRACTICE-SPEC.md (run: node validate-practice.js)
const path=require('path');
const P=require(path.join(__dirname,'practice-a.js'));
const IDS=["hangul","polite","meet","nouns","isseoyo","verbbasics","verbs","sov","particles","negation","do-man","sentences"];
const errs=[]; const E=(id,i,m)=>errs.push(`${id}[${i}]: ${m}`);
const norm=s=>String(s).trim().replace(/[.,!?~"'“”‘’]/g,'').replace(/\s+/g,' ');
const hasLatin=s=>/[A-Za-z]/.test(s);
const nonEmpty=s=>typeof s==='string'&&s.trim().length>0;
// gating: grammar the learner has not met yet (index in IDS where it is introduced)
const at=id=>IDS.indexOf(id);
const koStrings=it=>[...(it.o||[]),...(it.a||[]),...(it.x||[]),...(it.t==='fill'?[it.q]:[])];
const GATES=[
  {re:/못|수 있|수 없|몰라|모르/, from:99, what:'못 / -(으)ㄹ 수 있어요 / 몰라요 (lesson cant)'},
  {re:/(^|\s)\S+(도|만)(요)?(\s|$)/, from:at('do-man'), what:'도 / 만'},
  {re:/\S(을|를)(\s|$)/, from:at('sov'), what:'을/를', allow:/먹을 거|갈 거|가을 거/},
  {re:/에서/, from:at('particles'), what:'에서', allowIn:['meet']},
  {re:/않아요|않았어요/, from:at('negation'), what:'-지 않아요'},
];
const keys=Object.keys(P);
if(JSON.stringify(keys)!==JSON.stringify(IDS)) errs.push('keys must be exactly, in order: '+IDS.join(','));
const counts={};
for(const id of keys){
  const L=P[id]; counts[id]={n:L.length};
  if(L.length<12||L.length>16) E(id,'-','item count '+L.length);
  const ORDER=['mc','order','fill','type']; let last=0;
  const c={mc:0,order:0,fill:0,type:0};
  L.forEach((it,i)=>{
    const k=ORDER.indexOf(it.t); if(k<0){E(id,i,'bad t '+it.t);return;}
    if(k<last) E(id,i,'block order'); last=k; c[it.t]++;
    const all=JSON.stringify(it); if(/[<>]/.test(all)) E(id,i,'HTML char');
    if(it.t==='mc'){
      if(!nonEmpty(it.q)) E(id,i,'mc q');
      if(!Array.isArray(it.o)||it.o.length!==4) E(id,i,'mc needs 4 options');
      else if(new Set(it.o.map(norm)).size!==4) E(id,i,'mc options not unique');
      if(!nonEmpty(it.why)) E(id,i,'mc why');
    }
    if(it.t==='order'){
      if(!nonEmpty(it.p)) E(id,i,'order p');
      if(!Array.isArray(it.a)||it.a.length<2||it.a.length>6) E(id,i,'order a 2-6');
      if(!Array.isArray(it.x)||it.x.length<1||it.x.length>2) E(id,i,'order x 1-2');
      (it.x||[]).forEach(t=>{ if(it.a.includes(t)) E(id,i,'x tile in a: '+t); });
      [...it.a,...(it.x||[])].forEach(t=>{ if(/\s/.test(t)||!t) E(id,i,'tile with space/empty: '+t); });
    }
    if(it.t==='fill'){
      if((it.q.match(/__/g)||[]).length!==1||/___/.test(it.q)) E(id,i,'fill needs exactly one __');
      if(!nonEmpty(it.p)) E(id,i,'fill p');
      if(!Array.isArray(it.a)||!it.a.length) E(id,i,'fill a');
      if(!Array.isArray(it.o)||it.o.length!==3) E(id,i,'fill o must be 3');
      else { it.o.forEach(o=>{ if(it.a.includes(o)) E(id,i,'fill o in a: '+o); }); if(new Set(it.o).size!==3) E(id,i,'fill o dup'); }
      if(!nonEmpty(it.why)) E(id,i,'fill why');
    }
    if(it.t==='type'){
      if(!nonEmpty(it.p)) E(id,i,'type p');
      if(!Array.isArray(it.a)||!it.a.length||!it.a.every(nonEmpty)) E(id,i,'type a');
      else { if(new Set(it.a.map(norm)).size!==it.a.length) E(id,i,'type variants duplicate after normalisation');
        const w=it.a[0].split(' ').length; if(w>5) E(id,i,'type model answer >5 words'); if(w<2&&id!=='hangul') E(id,i,'type model answer <2 words'); }
      if(!nonEmpty(it.hint)) E(id,i,'type hint');
      (it.x||[]).forEach(t=>{ if(it.a[0].split(' ').includes(t)) E(id,i,'type x tile is in a[0]: '+t); });
    }
    // no Latin letters in Korean answers
    koStrings(it).forEach(s=>{ if(hasLatin(s)) E(id,i,'Latin in Korean answer: '+s); });
    // gating
    const idx=at(id);
    for(const g of GATES){
      if(idx>=g.from) continue;
      if(g.allowIn&&g.allowIn.includes(id)) continue;
      for(const s of [...koStrings(it), ...(it.t!=='fill'?[]:[])]){
        let t=s; if(g.allow) t=t.replace(new RegExp(g.allow.source,'g'),'');
        if(g.re.test(t)) E(id,i,`uses ${g.what} before it is taught: ${s}`);
      }
    }
  });
  if(c.mc<4||c.mc>5) E(id,'-','mc count '+c.mc);
  if(c.order<3||c.order>4) E(id,'-','order count '+c.order);
  if(c.fill!==3) E(id,'-','fill count '+c.fill);
  if(c.type<3||c.type>4) E(id,'-','type count '+c.type);
  Object.assign(counts[id],c);
}
for(const id of keys){ const c=counts[id]; console.log(id.padEnd(11), `${c.n} items (mc ${c.mc}, order ${c.order}, fill ${c.fill}, type ${c.type})`); }
// checks.frag.js
const fs=require('fs');
const C=eval('({'+fs.readFileSync(path.join(__dirname,'checks.frag.js'),'utf8')+'})');
const CK=["nouns","isseoyo","sov","particles","negation","do-man","cant"];
if(JSON.stringify(Object.keys(C))!==JSON.stringify(CK)) errs.push('checks keys: '+Object.keys(C));
for(const [id,qs] of Object.entries(C)){
  if(qs.length!==3) errs.push(`checks ${id}: need 3`);
  const ORDER=JSON.parse(fs.readFileSync(path.join(__dirname,'order.json'),'utf8'));
  const cidx=ORDER.indexOf(id), map=g=>g.from>=99?ORDER.indexOf('cant'):ORDER.indexOf(IDS[g.from]);
  qs.forEach((q,i)=>{ for(const g of GATES){ if(cidx>=map(g)) continue; for(const s of q[1]){ let t=s; if(g.allow) t=t.replace(new RegExp(g.allow.source,'g'),''); if(g.re.test(t)) errs.push(`checks ${id}[${i}] uses ${g.what} early: ${s}`); } } });
  qs.forEach((q,i)=>{ if(q.length!==4||!nonEmpty(q[0])||q[1].length!==4||new Set(q[1]).size!==4||q[2]!==0||!nonEmpty(q[3])) errs.push(`checks ${id}[${i}] malformed`); });
}
if(errs.length){ console.log('\nFAIL '+errs.length); errs.forEach(e=>console.log(' - '+e)); process.exit(1); }
console.log('\nOK: practice-a.js ('+keys.length+' lessons) and checks.frag.js pass');

/* SD-1: writes a course's sound-training pairs into its pack as SOUNDS (read by sdFor() in src/app.html). Source: tools/sounds/<course>/sounds.json = {sounds:{lessonId:[{label,tip,pairs:[[a,b,meaningA,meaningB]]}]}}.
   The block sits between two marker lines, before the SECS block of tools/sections/apply.js (which must stay last). After a pack is regenerated: node tools/sections/apply.js, then this.
   usage: node tools/sounds/apply.js [id ...]   ·   --check: exit 1 if a pack lacks the block its folder calls for. Every run also checks the data: two different words and two meanings a pair, 3 pairs or more a group, no markup. */
'use strict';
const fs=require('fs'), path=require('path'); const ROOT=path.resolve(__dirname,'..','..'); const A='/*SOUNDS*/', Z='/*END-SOUNDS*/', SECS='/* SECS (tools/sections/apply.js) */\n';
const args=process.argv.slice(2), check=args.indexOf('--check')>=0, want=args.filter(x=>x!=='--check');
const ids=want.length?want:fs.readdirSync(__dirname).filter(d=>fs.existsSync(path.join(__dirname,d,'sounds.json'))); let bad=0;
ids.forEach(id=>{ const pf=path.join(ROOT,'packs','course-'+id+'.js'); if(!fs.existsSync(pf)){ console.log(id+': no pack, skipped'); return; }
  const X=JSON.parse(fs.readFileSync(path.join(__dirname,id,'sounds.json'),'utf8')).sounds, o={};
  const P={course:{},i18n:{}}; new Function('LANGAPP_PACKS',fs.readFileSync(pf,'utf8'))(P); const les=new Set(P.course[id].LESSONS.map(l=>l.id));
  Object.keys(X).forEach(k=>{ if(!les.has(k)) throw new Error(id+': no lesson '+k); o[k]=X[k].map(g=>{ if(!g.label||!Array.isArray(g.pairs)||g.pairs.length<3) throw new Error(id+' '+k+': a group needs a label and 3 pairs or more');
    return {label:String(g.label),tip:String(g.tip||''),pairs:g.pairs.map(p=>{ if(!Array.isArray(p)||p.length!==4||p.some(x=>typeof x!=='string'||!x.trim())||p[0].normalize('NFC')===p[1].normalize('NFC')) throw new Error(id+' '+k+': bad pair '+JSON.stringify(p)); return [p[0].normalize('NFC'),p[1].normalize('NFC'),p[2],p[3]]; })}; }); });
  const js=JSON.stringify(o); if(/<|\*\//.test(js)) throw new Error(id+': text that cannot go in a script');
  const block=A+'\nLANGAPP_PACKS.course['+JSON.stringify(id)+'].SOUNDS='+js+';\n'+Z+'\n';
  let s=fs.readFileSync(pf,'utf8'); if(check){ if(s.indexOf(block)<0){ console.log(id+': SOUNDS block missing or out of date: run node tools/sounds/apply.js'); bad++; } return; }
  const i=s.indexOf(A); if(i>=0){ const j=s.indexOf(Z,i); if(j<0) throw new Error(id+': open marker without close'); s=s.slice(0,i)+s.slice(j+Z.length).replace(/^\n/,''); }
  s=s.replace(/\n*$/,'\n'); const k=s.lastIndexOf(SECS); s=k>=0?s.slice(0,k)+block+s.slice(k):s+block;
  fs.writeFileSync(pf,s); console.log(id+': '+Object.keys(o).map(k=>k+' '+o[k].reduce((n,g)=>n+g.pairs.length,0)+' pairs').join(', ')); });
if(check) console.log(bad?'SOUNDS OUT OF DATE':'SOUNDS OK'); process.exit(bad?1:0);

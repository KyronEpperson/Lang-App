/* HL-1: writes a course's honest labels into its pack as ABOUT (read by abFor() in src/app.html). Source: tools/about/<course>/about.json = {about:{hours,level,can:[...],not:[...],add:[...]}}.
   The block sits between two marker lines, before the SECS block of tools/sections/apply.js (which must stay last). After a pack is regenerated: node tools/sections/apply.js, then this.
   usage: node tools/about/apply.js [id ...]   ·   --check: exit 1 if a pack lacks the block its folder calls for */
'use strict';
const fs=require('fs'), path=require('path'); const ROOT=path.resolve(__dirname,'..','..'); const A='/*ABOUT*/', Z='/*END-ABOUT*/', SECS='/* SECS (tools/sections/apply.js) */\n';
const args=process.argv.slice(2), check=args.indexOf('--check')>=0, want=args.filter(x=>x!=='--check');
const ids=want.length?want:fs.readdirSync(__dirname).filter(d=>fs.existsSync(path.join(__dirname,d,'about.json'))); let bad=0;
ids.forEach(id=>{ const pf=path.join(ROOT,'packs','course-'+id+'.js'); if(!fs.existsSync(pf)){ console.log(id+': no pack, skipped'); return; }
  const X=JSON.parse(fs.readFileSync(path.join(__dirname,id,'about.json'),'utf8')).about; const list=k=>{ if(!Array.isArray(X[k])||X[k].length<2||X[k].some(x=>typeof x!=='string'||!x.trim())) throw new Error(id+': '+k+' needs two lines or more'); return X[k].map(String); };
  if(!X.hours||!X.level) throw new Error(id+': hours and level are needed'); const o={hours:String(X.hours),level:String(X.level),can:list('can'),not:list('not'),add:list('add')};
  const js=JSON.stringify(o); if(/<|\*\//.test(js)) throw new Error(id+': text that cannot go in a script');
  const block=A+'\nLANGAPP_PACKS.course['+JSON.stringify(id)+'].ABOUT='+js+';\n'+Z+'\n';
  let s=fs.readFileSync(pf,'utf8'); if(check){ if(s.indexOf(block)<0){ console.log(id+': ABOUT block missing or out of date: run node tools/about/apply.js'); bad++; } return; }
  const i=s.indexOf(A); if(i>=0){ const j=s.indexOf(Z,i); if(j<0) throw new Error(id+': open marker without close'); s=s.slice(0,i)+s.slice(j+Z.length).replace(/^\n/,''); }
  s=s.replace(/\n*$/,'\n'); const k=s.lastIndexOf(SECS); s=k>=0?s.slice(0,k)+block+s.slice(k):s+block;
  fs.writeFileSync(pf,s); console.log(id+': about written'); });
if(check) console.log(bad?'ABOUT OUT OF DATE':'ABOUT OK'); process.exit(bad?1:0);

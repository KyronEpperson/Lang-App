/* ST-1: writes a course's graded stories into its pack as STORIES (read by stFor() in src/app.html). Source: tools/stories/<course>/stories.js = {names:[...], none:[lesson ids without a story], stories:{lessonId:{title,tr,lines,qs}}}.
   The block sits between two marker lines, before the SECS block of tools/sections/apply.js (which must stay last), and is replaced on every run. After a pack is regenerated: node tools/sections/apply.js, then this.
   usage: node tools/stories/apply.js [id ...]   (no id = every folder here)   ·   --check: exit 1 if a pack lacks the block its folder calls for */
'use strict';
const fs=require('fs'), path=require('path'); const ROOT=path.resolve(__dirname,'..','..'); const A='/*STORIES*/', Z='/*END-STORIES*/', SECS='/* SECS (tools/sections/apply.js) */\n';
const args=process.argv.slice(2), check=args.indexOf('--check')>=0, want=args.filter(x=>x!=='--check');
const ids=want.length?want:fs.readdirSync(__dirname).filter(d=>fs.existsSync(path.join(__dirname,d,'stories.js'))); let bad=0;
ids.forEach(id=>{ const pf=path.join(ROOT,'packs','course-'+id+'.js'); if(!fs.existsSync(pf)){ console.log(id+': no pack, skipped'); return; }
  const ST=require(path.join(__dirname,id,'stories.js')), o={}; Object.keys(ST.stories).forEach(k=>{ const s=ST.stories[k]; o[k]={title:s.title.normalize('NFC'),tr:s.tr,lines:s.lines.map(x=>x.slice(0,3).map(y=>String(y).normalize('NFC'))),qs:s.qs.map(q=>({q:q.q,o:q.o.slice(0,4)}))}; });
  const js=JSON.stringify(o); if(/<\/script|\*\//i.test(js)) throw new Error(id+': text that cannot go in a script');
  const block=A+'\nLANGAPP_PACKS.course['+JSON.stringify(id)+'].STORIES='+js+';\n'+Z+'\n';
  let s=fs.readFileSync(pf,'utf8'); if(check){ if(s.indexOf(block)<0){ console.log(id+': STORIES block missing or out of date: run node tools/stories/apply.js'); bad++; } return; }
  const i=s.indexOf(A); if(i>=0){ const j=s.indexOf(Z,i); if(j<0) throw new Error(id+': open marker without close'); s=s.slice(0,i)+s.slice(j+Z.length).replace(/^\n/,''); }
  s=s.replace(/\n*$/,'\n'); const k=s.lastIndexOf(SECS); s=k>=0?s.slice(0,k)+block+s.slice(k):s+block;
  fs.writeFileSync(pf,s); console.log(id+': '+Object.keys(o).length+' stories'); });
if(check) console.log(bad?'STORIES OUT OF DATE':'STORIES OK'); process.exit(bad?1:0);

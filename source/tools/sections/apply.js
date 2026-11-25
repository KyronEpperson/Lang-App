/* SEC-1: put the writer files tools/sections/<course>/sections.json where the app reads them.
   en-ko (built in): between the markers in src/app.html. A pack course: a SECS block at the end of packs/course-<id>.js (run again after regenerating a pack).
   usage: node tools/sections/apply.js [--check]   (--check changes nothing and fails when a file is out of date) */
const fs=require('fs'),path=require('path');const ROOT=path.join(__dirname,'..','..'),CHECK=process.argv.includes('--check');let stale=0;
const put=(file,next)=>{ const cur=fs.readFileSync(file,'utf8'); if(cur===next) return; if(CHECK){ stale++; console.log('OUT OF DATE '+path.relative(ROOT,file)); } else { fs.writeFileSync(file,next); console.log('wrote '+path.relative(ROOT,file)); } };
fs.readdirSync(__dirname).filter(d=>fs.existsSync(path.join(__dirname,d,'sections.json'))).forEach(id=>{ const X=JSON.parse(fs.readFileSync(path.join(__dirname,id,'sections.json'),'utf8')); delete X._about; const js=JSON.stringify(X);
  if(/<\/script|\*\//i.test(js)) throw new Error(id+': text that cannot go in a script');
  if(id==='en-ko'){ const f=path.join(ROOT,'src/app.html'), s=fs.readFileSync(f,'utf8'), a='/*SECS:en-ko*/', b='/*SECS-END*/', i=s.indexOf(a), j=s.indexOf(b); if(i<0||j<i||s.indexOf(a,i+1)>=0) throw new Error('markers missing in src/app.html'); put(f,s.slice(0,i+a.length)+js+s.slice(j)); }
  else { const f=path.join(ROOT,'packs/course-'+id+'.js'), s=fs.readFileSync(f,'utf8').replace(/\n\/\* SECS \(tools\/sections\/apply\.js\) \*\/\n[^\n]*\n$/,'\n'); put(f,s.replace(/\n*$/,'\n')+'/* SECS (tools/sections/apply.js) */\nLANGAPP_PACKS.course['+JSON.stringify(id)+'].SECS='+js+';\n'); } });
if(CHECK){ console.log(stale?'SECS OUT OF DATE: run node tools/sections/apply.js':'SECS OK'); process.exit(stale?1:0); }

/* usage: node tools/target/repron.js <t>  — rewrites every stored pron in tools/target/<t>/ (deck rows "target | pron | …" and {{ex:target|pron|…}} rows)
   with the current output of that course's respell.js. Run after any change to the generator's word lists. */
const fs=require('fs'),path=require('path');const t=process.argv[2];const dir=path.join(__dirname,t);const R=require(path.join(dir,'respell.js'));const respell=x=>{try{return R.respell(x);}catch(e){return '';}};
const warn=new Set();const ew=process.stderr.write.bind(process.stderr);process.stderr.write=x=>{const m=String(x).match(/«([^»]*)»/);if(m)warn.add(m[1]);return true;};
const PR=/^[A-Za-z]+(?:[- ][A-Za-z]+)*$/;let n=0,seen=0;
for(const f of fs.readdirSync(dir).filter(f=>/^(decks|extra|lessons).*\.js$/.test(f))){let s=fs.readFileSync(path.join(dir,f),'utf8');const o=s;
  s=s.replace(/\{\{ex:([^|{}]+)\|([^|{}]+)\|/g,(m,a,p)=>{if(!PR.test(p.trim()))return m;seen++;const r=respell(a.trim());if(r&&r!==p.trim()){n++;console.log(f+': '+a.trim()+' | '+p.trim()+' → '+r);return '{{ex:'+a+'|'+r+'|';}return m;});
  s=s.split('\n').map(line=>{const c=line.split(' | ');if(c.length<3||!PR.test(c[1].trim())||!/[A-Z]|^[a-z]+$/.test(c[1].trim()))return line;const tgt=c[0].replace(/^[\s`'"]+/,'');seen++;const r=respell(tgt.trim());if(r&&r!==c[1].trim()&&r.split(' ').length===c[1].trim().split(' ').length){n++;console.log(f+': '+tgt.trim()+' | '+c[1].trim()+' → '+r);c[1]=r;return c.join(' | ');}return line;}).join('\n');
  if(s!==o)fs.writeFileSync(path.join(dir,f),s);}
console.log(t+': '+seen+' prons read, '+n+' rewritten'+(warn.size?'; generator unsure about: '+[...warn].join(' '):''));

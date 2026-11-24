# 2.105.0: rdBuild() also takes a course's READS (extra lesson readings written by tools/lessonread/apply.js). Whole entries only; cards and example lines win.
p='src/app.html'; s=open(p,encoding='utf8').read()
a="  const D=new Map(); C.forEach((m,k)=>{ if(m.size===1&&!W.has(k)) D.set(k,m.keys().next().value); });"
b="  const X=c.READS; if(X&&typeof X==='object') Object.keys(X).forEach(t=>{ const r=X[t]; if(typeof r!=='string'||!lat.test(r)) return; const k=rdKey(t), kw=k.replace(/ /g,tight?'':' '); if(kw&&!W.has(kw)) W.set(kw,r); });\n"
assert s.count(a)==1 and 'c.READS' not in s
s=s.replace(a,b+a); open(p,'w',encoding='utf8').write(s); print('ok')
# Japanese: neighbouring single-kana pieces join into one reading (よ+ん reads "yon", not "yo n").
s=open(p,encoding='utf8').read()
a="return c._rd={W,D,tight,han,rx:"; assert s.count(a)==1; s=s.replace(a,"return c._rd={W,D,tight,han,ja:c.target==='ja',rx:")
a="if(whole&&out.some(x=>!x[1])) return [[s,whole]]; return out; }"; assert s.count(a)==1
s=s.replace(a,"if(whole&&out.some(x=>!x[1])) return [[s,whole]]; if(R.ja){ const mg=[]; out.forEach(x=>{ const l=mg[mg.length-1]; if(l&&l[2]&&x[1]&&Array.from(x[0]).length===1&&!/[はへを]/.test(l[0]+x[0])&&!/ou|uu|oo|aa|ee/.test(l[1]+x[1])&&!(/ん$/.test(l[0])&&/^[aiueoy]/.test(x[1]))){ l[0]+=x[0]; l[1]+=x[1]; } else mg.push([x[0],x[1],!!x[1]&&Array.from(x[0]).length===1]); }); return mg.map(x=>[x[0],x[1]]); } return out; }")
open(p,'w',encoding='utf8').write(s); print('ok2')

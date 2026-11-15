import re,json,subprocess
p='/home/claude/src/app.html'; s=open(p,encoding='utf-8').read()
D='/home/claude/tools/curriculum/ko/'
# --- lessons
i=s.index('LESSONS = [\n')+len('LESSONS = [\n'); j=s.index('\n];',i)
blk=s[i:j]
def split(t):
    parts=re.split(r'(?m)^(?=\s*\{ id:")',t); parts=[x for x in parts if x.strip()]
    d={}
    for x in parts:
        m=re.match(r'\s*\{ id:"([a-z-]+)"',x); assert m,x[:80]; d[m.group(1)]=x.rstrip('\n')
    return d
old=split(blk); new=split(open(D+'lessons.frag.js',encoding='utf-8').read())
order=json.load(open(D+'order.json'))
assert set(order)==set(old)|set(new),(set(order)^(set(old)|set(new)))
for k in old: assert old[k].rstrip().endswith('`},'),k
for k in new: assert new[k].rstrip().endswith('`},'),k
old.update(new)
n=0; out=[]
for k in order:
    n+=1; x,c=re.subn(r'(title:")\d+ · ',lambda m:m.group(1)+str(n)+' · ',old[k],1); assert c==1,k; out.append(x)
s=s[:i]+'\n'.join(out)+s[j:]
# --- checks
a='let CHECKS={\n'; ci=s.index(a)+len(a); cj=s.index('\n};',ci); cb=s[ci:cj]
frag=open(D+'checks.frag.js',encoding='utf-8').read().strip('\n')
ids=re.findall(r'(?m)^\s*"?([a-z-]+)"?:\[\[',frag); assert len(ids)==7,ids
lines=[l for l in cb.split('\n') if not any(re.match(r'\s*"?'+re.escape(k)+r'"?:\[\[',l) for k in ids)]
s=s[:ci]+frag+'\n'+'\n'.join(lines)+s[cj:]
# --- practice
js=subprocess.run(['node','-e','const a=require("%spractice-a.js"),b=require("%spractice-b.js");const o={};%s.forEach(k=>{o[k]=a[k]||b[k];if(!o[k])throw new Error("missing "+k)});process.stdout.write(JSON.stringify(o))'%(D,D,json.dumps(order))],capture_output=True,text=True,check=True).stdout
assert '</script' not in js.lower() and ' ' not in js
m='const PRACTICE_BUILTIN={/*__PRACTICE__*/};'; assert s.count(m)==1
s=s.replace(m,'const PRACTICE_BUILTIN='+js+'; /* generated from tools/curriculum/ko/practice-*.js by merge_ko.py */')
# --- small fixes flagged by the audit
for a,b in [('"seumuldaseot salieyo"','"seumuldaseot sarieyo"'),('one past-tense sentence (lesson 6)','one past-tense sentence (Conjugating verbs)')]:
    assert s.count(a)==1,a; s=s.replace(a,b)
s=re.sub(r"const APP_VERSION='[^']*'","const APP_VERSION='2.3.0 · 2026-11-15'",s)
open(p,'w',encoding='utf-8').write(s); print('merged',n,'lessons;',len(js),'bytes practice')

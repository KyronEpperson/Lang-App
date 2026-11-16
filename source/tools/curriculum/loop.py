"""Apply one loop lesson to src/app.html.  usage: python3 loop.py <id> [--check-only]
Inputs: ko/loop/<id>.lesson.js (lesson object in app.html source format) and ko/loop/<id>.json
{"after": "<lesson id to insert after>" (ignored when the id already exists: the lesson is replaced in place),
 "roadmap": "<roadmap item id>" | null, "check": [[q,[4 options],0,why] x3], "practice": [14 items per docs/PRACTICE-SPEC.md]}
PRACTICE_BUILTIN is regenerated from ko/practice-a.js + ko/practice-b.js + every ko/loop/*.json (loop files win)."""
import re, json, sys, os, subprocess, glob
sys.path.insert(0,'/home/claude'); from romanize import rom, norm
SRC='/home/claude/src/app.html'; D='/home/claude/tools/curriculum/ko/'; LD=D+'loop/'
EX=re.compile(r'ex\("((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)"\)')
def split(t):
    d={}; order=[]
    for x in [x for x in re.split(r'(?m)^(?=\s*\{ id:")',t) if x.strip()]:
        m=re.match(r'\s*\{ id:"([a-z-]+)"',x); assert m,x[:80]; d[m.group(1)]=x.rstrip('\n'); order.append(m.group(1))
        assert d[m.group(1)].rstrip().endswith('`},'),m.group(1)
    return d,order
def lessons_block(s):
    i=s.index('LESSONS = [\n')+len('LESSONS = [\n'); j=s.index('\n];',i); return i,j
# grammar gates: (regex, lesson id that introduces it, label, optional allow-regex, lessons where it is tolerated)
GATES=[(r'못|수 있|수 없|몰라|모르','cant','못 / 수 있어요 / 몰라요',None,[]),
       (r'(^|\s)\S+(도|만)(요)?(\s|$)','do-man','도 / 만',r'\S*(정도|지도|파도|포도|기도|온도|속도|태도|고만|그만|얼마만|오랜만)\S*',['meet','polite','hangul','sound-changes']),
       (r'\S(을|를)(\s|$)','sov','을/를',r'\S+을 거|\S+를 거',['meet','future']),
       (r'에서','particles','에서',None,['meet']),
       (r'않아요|않았어요','negation','-지 않아요',None,[]),
       (r'(았|었|였|했|갔|왔|봤|샀|났|잤|탔|됐|셨|졌|웠)(어요|습니다|어|지만|는데)','past','past tense',None,['meet','polite']),
       (r'거예요','future','-(으)ㄹ 거예요',None,[]),
       (r'고 싶','want-like','-고 싶어요',None,[]),
       (r'야 (해|돼|했|됐|하|되)','have-to','-아/어야 해요',None,[]),
       (r'지만(\s|$)','joining','-지만',r'하지만|실례지만',['polite','meet']),
       (r'\S보다(\s|$)|제일|가장','compare','보다 / 제일',None,[])]
def ko_strings(it):
    return list(it.get('o',[]))+list(it.get('a',[]))+list(it.get('x',[]))+([it['q']] if it['t']=='fill' else [])
def spec_errors(id,L):
    E=[]; e=lambda i,m:E.append(f'{id}[{i}]: {m}')
    if not 12<=len(L)<=16: e('-','item count %d'%len(L))
    order=['mc','order','fill','type']; last=0; c=dict(mc=0,order=0,fill=0,type=0)
    nrm=lambda s: re.sub(r'\s+',' ',re.sub(r'[.,!?~"\'“”‘’]','',s.strip()))
    for i,it in enumerate(L):
        if it.get('t') not in order: e(i,'bad t'); continue
        k=order.index(it['t']); 
        if k<last: e(i,'block order')
        last=k; c[it['t']]+=1
        if re.search(r'[<>`]|\$\{',json.dumps(it,ensure_ascii=False)): e(i,'HTML/template char')
        if it['t']=='mc':
            if len(it.get('o',[]))!=4 or len(set(map(nrm,it['o'])))!=4: e(i,'mc needs 4 unique options')
            if not it.get('q') or not it.get('why'): e(i,'mc q/why')
        if it['t']=='order':
            a=it.get('a',[]); x=it.get('x',[])
            if not 2<=len(a)<=6: e(i,'order a 2-6')
            if not 1<=len(x)<=2: e(i,'order x 1-2')
            if any(t in a for t in x): e(i,'x in a')
            if any((' ' in t) or not t for t in a+x): e(i,'tile with space')
            if not it.get('p'): e(i,'order p')
        if it['t']=='fill':
            if it.get('q','').count('__')!=1 or '___' in it['q']: e(i,'fill needs one __')
            if len(it.get('o',[]))!=3 or len(set(it['o']))!=3 or any(o in it.get('a',[]) for o in it['o']): e(i,'fill o: 3 unique, not in a')
            if not it.get('a') or not it.get('p') or not it.get('why'): e(i,'fill a/p/why')
        if it['t']=='type':
            a=it.get('a',[])
            if not a or len(set(map(nrm,a)))!=len(a): e(i,'type a empty/duplicate')
            else:
                w=len(a[0].split(' '))
                if w>5 or (w<2 and id not in ('hangul','sound-changes')): e(i,'type model answer words=%d'%w)
            if not it.get('hint') or not it.get('p'): e(i,'type hint/p')
            if a and any(t in a[0].split(' ') for t in it.get('x',[])): e(i,'type x in a[0]')
        if id!='hangul':
            for s_ in ko_strings(it):
                if re.search('[A-Za-z]',s_): e(i,'Latin in Korean answer: '+s_)
    if not 4<=c['mc']<=5 or not 3<=c['order']<=4 or c['fill']!=3 or not 3<=c['type']<=4: e('-','block counts %s'%c)
    return E
def gate_errors(order,practice,checks):
    E=[]
    for idx,id in enumerate(order):
        strs=[]
        for i,it in enumerate(practice.get(id,[])): strs+= [(f'practice {id}[{i}]',x) for x in ko_strings(it)]
        for i,q in enumerate(checks.get(id,[])): strs+= [(f'check {id}[{i}]',x) for x in q[1]]
        for rx,frm,label,allow,tol in GATES:
            if frm not in order or idx>=order.index(frm) or id in tol: continue
            for where,x in strs:
                t=re.sub(allow,'',x) if allow else x
                if re.search(rx,t): E.append(f'{where} uses {label} before lesson "{frm}": {x}')
    return E
def main():
    id=sys.argv[1]; check_only='--check-only' in sys.argv
    s=open(SRC,encoding='utf-8').read()
    meta=json.load(open(LD+id+'.json',encoding='utf-8'))
    frag,_=split(open(LD+id+'.lesson.js',encoding='utf-8').read()); assert list(frag)==[id],list(frag)
    body=frag[id]
    assert body.count('`')==2 and not re.search(r'\$\{(?!ex\()',body),'stray backtick or ${'
    subprocess.run(['node','-e','const ex=(a,b,c)=>"";const L=['+body+'];if(L[0].id!==process.argv[1])throw 1',id],check=True)
    i,j=lessons_block(s); old,order=split(s[i:j]); replaced=id in old
    if not replaced:
        assert meta['after'] in order,meta['after']; order.insert(order.index(meta['after'])+1,id)
    old[id]=body
    dm=re.search(r'deck:"([^"]+)"',body).group(1); assert ('"%s":['%dm in s) or ('"%s": ['%dm in s),'deck missing: '+dm
    n=0; out=[]
    for k in order:
        n+=1; x,c=re.subn(r'(title:")\d+ · ',lambda m:m.group(1)+str(n)+' · ',old[k],count=1); assert c==1,k; out.append(x)
    s=s[:i]+'\n'.join(out)+s[j:]
    # checks
    a='let CHECKS={\n'; ci=s.index(a)+len(a); cj=s.index('\n};',ci); lines=s[ci:cj].split('\n')
    ck=meta['check']; assert len(ck)==3 and all(len(q)==4 and len(q[1])==4 and len(set(q[1]))==4 and q[2]==0 and q[3] for q in ck)
    key=id if re.match(r'^[a-z]+$',id) else '"%s"'%id
    lines=[l for l in lines if not re.match(r'\s*"?'+re.escape(id)+r'"?:\[\[',l)]
    lines.insert(0,'  '+key+':'+json.dumps(ck,ensure_ascii=False,separators=(',',':'))+',')
    s=s[:ci]+'\n'.join(lines)+s[cj:]
    checks={}
    for l in lines:
        m=re.match(r'\s*"?([a-z-]+)"?:(\[\[.*\]\]),?\s*$',l)
        if m:
            try: checks[m.group(1)]=json.loads(m.group(2))
            except Exception: pass
    # practice: regenerate everything from files
    base=json.loads(subprocess.run(['node','-e','process.stdout.write(JSON.stringify(Object.assign({},require("%spractice-a.js"),require("%spractice-b.js"))))'%(D,D)],capture_output=True,text=True,check=True).stdout)
    for f in sorted(glob.glob(LD+'*.json')):
        k=os.path.basename(f)[:-5]; m2=json.load(open(f,encoding='utf-8'))
        if k==id or k in order: 
            if (k==id) or re.search(r'\{ id:"%s"'%re.escape(k), s): base[k]=m2['practice']
    prac={k:base[k] for k in order}  # KeyError = a lesson without a practice set
    errs=spec_errors(id,prac[id])+gate_errors(order,prac,checks)
    js=json.dumps(prac,ensure_ascii=False,separators=(',',':')); assert '</script' not in js.lower()
    m=re.search(r'(?m)^const PRACTICE_BUILTIN=.*$',s); assert m
    s=s[:m.start()]+'const PRACTICE_BUILTIN='+js+'; /* generated by tools/curriculum/loop.py from tools/curriculum/ko/ */'+s[m.end():]
    # romanization audit + new words
    def kw(t): return [w for w in re.split(r'[\s.,!?~…/→()+=·]+',re.sub(r'[A-Za-z]+','',t)) if re.search('[가-힣]',w)]
    mism=[]
    for ko,r,en in EX.findall(body):
        exp=' '.join(norm(rom(re.sub('[^가-힣]','',w))) for w in kw(ko)); got=' '.join(w for w in norm(r.replace('→',' ').replace('/',' ').replace('+',' ').replace('=',' ')).split() if w)
        if exp!=got: mism.append((ko,r,exp))
    before=s[:s.index('{ id:"%s"'%id)]
    words=set(); 
    for ko,_,_ in EX.findall(body): words|=set(kw(ko))
    for it in prac[id]:
        for x in it.get('a',[]): words|=set(kw(x))
    new=sorted(w for w in words if w not in before)
    print(f'[{id}] {"replaced" if replaced else "inserted after "+meta["after"]} · {n} lessons · practice {len(prac[id])} items · {len(EX.findall(body))} examples')
    print('romanization mismatches (tool is rule-based; review):',len(mism)); [print('   ',a,'|',b,'| tool:',c) for a,b,c in mism]
    print('words not seen earlier in the source (%d):'%len(new),' '.join(new))
    if errs:
        print('FAIL'); [print('  -',e) for e in errs]; sys.exit(1)
    if check_only: print('check-only: OK'); return
    open(SRC,'w',encoding='utf-8').write(s)
    if meta.get('roadmap'):
        p='/home/claude/packs/roadmaps.js'; r=open(p,encoding='utf-8').read()
        m=re.search(r'\["%s", "(?:[^"\\]|\\.)*", "(?:[^"\\]|\\.)*"(, "[a-z-]+")?\]'%re.escape(meta['roadmap']),r); assert m,meta['roadmap']
        new_item=re.sub(r'(, "[a-z-]+")?\]$',', "%s"]'%id,m.group(0)); r=r[:m.start()]+new_item+r[m.end():]; open(p,'w',encoding='utf-8').write(r)
    print('applied OK')
if __name__=='__main__': main()

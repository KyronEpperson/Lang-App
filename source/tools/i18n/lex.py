import re, json, sys
sys.setrecursionlimit(10000)
SRC='/home/claude/korean-flashcards.html'
html=open(SRC,encoding='utf-8').read()
s0=html.index('<script>')+8; s1=html.index('</script>',s0)
js=html[s0:s1]; n=len(js)
lits=[]
REGPREV=set('(,=:[!&|?{};+-*%<>~^')
KWREG=('return','typeof','case','in','of','else','do','void','delete','new','throw')
kw_re=re.compile(r'(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)')
st={'decl':'(top)'}
def read_str(i,q):
    j=i+1; out=[]
    while j<n:
        c=js[j]
        if c=='\\': out.append(js[j:j+2]); j+=2; continue
        if c==q or c=='\n': return ''.join(out), j+1
        out.append(c); j+=1
    return ''.join(out), j
def read_tpl(i,top):
    j=i+1; parts=[]; cur=[]; exprs=[]
    while j<n:
        c=js[j]
        if c=='\\': cur.append(js[j:j+2]); j+=2; continue
        if c=='`':
            parts.append(''.join(cur)); return parts,exprs,j+1
        if c=='$' and js[j+1]=='{':
            parts.append(''.join(cur)); cur=[]
            e=scan(j+2,True,top)
            exprs.append(js[j+2:e-1]); j=e; continue
        cur.append(c); j+=1
    parts.append(''.join(cur)); return parts,exprs,j
def scan(i,inexpr,topdepth):
    depth=0; prev=''
    while i<n:
        c=js[i]
        if c=='/' and js[i+1]=='/':
            k=js.find('\n',i); i=n if k<0 else k; continue
        if c=='/' and js[i+1]=='*':
            k=js.find('*/',i+2); i=n if k<0 else k+2; continue
        if c in '\'"':
            t,j=read_str(i,c); lits.append(dict(kind='s',text=t,decl=st['decl'],pos=i)); i=j; prev='a'; continue
        if c=='`':
            pos=i; p,e,j=read_tpl(i,False); lits.append(dict(kind='t',parts=p,exprs=e,decl=st['decl'],pos=pos)); i=j; prev='a'; continue
        if c=='/' and (prev in REGPREV or prev==''):
            j=i+1; incls=False
            while j<n:
                ch=js[j]
                if ch=='\\': j+=2; continue
                if ch=='[': incls=True
                elif ch==']': incls=False
                elif ch=='/' and not incls: break
                elif ch=='\n': break
                j+=1
            j+=1
            while j<n and js[j].isalpha(): j+=1
            i=j; prev='a'; continue
        if not inexpr and depth==0:
            m=kw_re.match(js,i)
            if m and (i==0 or not (js[i-1].isalnum() or js[i-1] in '_$.')):
                st['decl']=m.group(1); i=m.end(); prev='a'; continue
        if c in '{[(': depth+=1
        elif c in '}])':
            if inexpr and c=='}' and depth==0: return i+1
            depth=max(0,depth-1)
        if c.isalnum() or c in '_$':
            m=re.match(r'[\w$]+',js[i:i+60]); w=m.group(0)
            prev='(' if w in KWREG else 'a'; i+=len(w); continue
        if not c.isspace(): prev=c
        i+=1
    return i
scan(0,False,0)
json.dump(dict(lits=lits,s0=s0),open('lits.json','w'),ensure_ascii=False)
from collections import Counter
cnt=Counter(l['decl'] for l in lits)
print(len(lits), lits[-1]['pos'], n); print(len(cnt)); print(cnt.most_common(60))

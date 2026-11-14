import re, json, html as H
from html.parser import HTMLParser
SRC='/home/claude/korean-flashcards.html'
doc=open(SRC,encoding='utf-8').read()
d=json.load(open('lits.json'))
EXCL=set('DECKS DIALOG LESSONS CHECKS EXAMPLES PATTERNS PAUSE_SETS SAY MEAN IDIOMS TAGS STROKES DESC CONN conj PAIRS T L_IDX numItem WORDS_F V PJ_REP GROUPS PART L MEAN_ADD ENDS WORDS_CV PJ_SPLIT KOUI PJ_T COUNT NUMS RR_V QW PJ_L RR_L RR_T SINO NATIVE NATIVE_TENS NATIVE_ATTR PJ_ASP sino romanize koTips strokeSVG normKo pronounce STR APP_VERSION MYDECK ex'.split())
HANG=re.compile(r'[\uac00-\ud7a3\u3131-\u318e]')
LAT=re.compile(r'[A-Za-z]{2,}')
def jsdec(s):
    def r(m):
        e=m.group(1)
        if e[0]=='u':
            h=e[2:-1] if e[1]=='{' else e[1:]
            return chr(int(h,16))
        if e[0]=='x': return chr(int(e[1:],16))
        return {'n':'\n','t':'\t','r':'','0':'\0'}.get(e,e)
    return re.sub(r'\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|.)',r,s,flags=re.S)
ATTR=re.compile(r'\b(placeholder|aria-label|title)=(["\'])(.*?)\2',re.S)
def html_pieces(s):
    out=[]
    for m in ATTR.finditer(s): out.append(('attr',m.group(3)))
    for t in re.split(r'<[^>]*>',s): out.append(('text',t))
    return out
def looks_code(t):
    if re.search(r'https?://|www\.|\.js\b|\.json\b|\.png\b',t): return True
    if re.search(r'[{};]\s*$|^[.#\[]|=>|\(\)|&&|\|\||==|var\(--|px\b|rem\b|rgba?\(',t): return True
    if re.fullmatch(r'[\w$.\-#:/\[\]=>*,]+',t) and (not re.match(r'[A-Z]',t) or re.search(r'[_.#:/\[\]=-]',t) or re.search(r'[a-z][A-Z]',t)): return True
    if re.fullmatch(r'[a-z\-]+(\s+[a-z\-]+)*',t) and len(t.split())<=4 and re.search(r'\b(flex|grid|block|none|auto|center|ghost|chip|big|primary|hidden|stat|row|panel|opt|tag|small|hit|miss|speak|sp|ok|bad)\b',t): return True
    return False
def keep(t, ctx):
    t=t.strip()
    if not t or not LAT.search(t): return None
    if '\x00' not in t and HANG.search(t) and not re.search(r'[A-Za-z]{3,}',t): return None
    if looks_code(t): return None
    if ctx=='plain' and ' ' not in t and not re.match(r'[A-Z\u2190-\u2bff\U0001F000-\U0001FFFF✎＋←→↻⚡]',t) and not re.search(r'[…·!?]',t): return None
    return t
cands={}  # text -> dict(src set, dyn bool, tmpl)
def add(t,src,dyn=False,tmpl=None):
    e=cands.setdefault(t,dict(src=set(),dyn=dyn,tmpl=set()))
    e['src'].add(src);
    if tmpl: e['tmpl'].add(tmpl[:300])
# ---- static HTML
class P(HTMLParser):
    def __init__(s): super().__init__(); s.stack=[]; s.out=[]
    def handle_starttag(s,tag,attrs):
        for k,v in attrs:
            if k in('placeholder','aria-label','title') and v: s.out.append(('attr:'+k,v))
    def handle_data(s,data):
        if data.strip(): s.out.append(('text',data))
body=doc[doc.index('</style>')+8:doc.index('<script>')]
p=P(); p.feed(body)
static=[]
for k,v in p.out:
    v=re.sub(r'\s+',' ',v).strip()
    if v and LAT.search(v) and not looks_code(v):
        static.append(v); add(v,'html')
tt=re.search(r'<title>(.*?)</title>',doc); 
# ---- JS
for l in d['lits']:
    if l['decl'] in EXCL: continue
    if l['kind']=='s':
        s=jsdec(l['text'])
        if '<' in s and re.search(r'<[a-z/][^>]*>',s):
            for kind,piece in html_pieces(s):
                piece=H.unescape(re.sub(r'\s+',' ',piece))
                t=keep(piece,'html')
                if t: add(t,'js:'+l['decl'])
        else:
            t=keep(s,'plain')
            if t: add(t,'js:'+l['decl'])
    else:
        parts=[jsdec(x) for x in l['parts']]
        joined='\x00'.join(parts)
        if not re.search(r'[A-Za-z]{2,}',''.join(parts)): continue
        ishtml=bool(re.search(r'<[a-z/][^>]*>',joined))
        pieces=html_pieces(joined) if ishtml else [('text',joined)]
        for kind,piece in pieces:
            piece=H.unescape(re.sub(r'\s+',' ',piece))
            t=keep(piece,'html' if ishtml else 'plain')
            if not t: continue
            if '\x00' in t:
                # readable form
                ex=iter(l['exprs']); 
                rd=re.sub('\x00',lambda m:'${'+(next(ex,'?')[:40])+'}',t) if False else t.replace('\x00','{•}')
                add(rd,'js:'+l['decl'],dyn=True,tmpl=None)
            else: add(t,'js:'+l['decl'])
json.dump(dict(static=sorted(set(static)),cands={k:dict(src=sorted(v['src']),dyn=v['dyn']) for k,v in cands.items()}),open('cands.json','w'),ensure_ascii=False,indent=0)
st=[k for k,v in cands.items() if not v['dyn']]; dy=[k for k,v in cands.items() if v['dyn']]
print('static html',len(set(static)),'total',len(cands),'exact',len(st),'dyn',len(dy))
with open('cands.txt','w') as f:
    bydecl={}
    for k,v in cands.items():
        bydecl.setdefault(v['src'][0] if isinstance(v['src'],list) else sorted(v['src'])[0],[]).append(k)
    for dcl in bydecl:
        f.write('### '+dcl+'\n')
        for k in bydecl[dcl]: f.write(('D ' if cands[k]['dyn'] else '  ')+k.replace('\n','\\n')+'\n')

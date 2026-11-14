import re, json
from html.parser import HTMLParser
doc=open('/home/claude/korean-flashcards.html',encoding='utf-8').read()
body=doc[doc.index('</style>')+8:doc.index('<script>')]
class P(HTMLParser):
    def __init__(s): super().__init__(convert_charrefs=True); s.out=[]
    def handle_starttag(s,tag,attrs):
        for k,v in attrs:
            if k in('placeholder','aria-label','title') and v: s.out.append(v)
    def handle_data(s,d): s.out.append(d)
p=P(); p.feed(body)
st=[]
for v in p.out:
    v=re.sub(r'\s+',' ',v).strip()
    if v and re.search(r'[A-Za-z]',v) and v not in st: st.append(v)
d=json.load(open('cands.json'))
js=[k for k,v in d['cands'].items() if not v['dyn'] and not any(s=='html' for s in v['src'])]
json.dump({'static':st,'js':js},open('cov.json','w'),ensure_ascii=False)
print(len(st),len(js))

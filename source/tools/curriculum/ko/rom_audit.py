"""Romanization audit: compare ex("ko","rom","en") rows with romanize.py word by word.
usage: python3 rom_audit.py  (audits lessons.frag.js + nouns/verbbasics/sentences from app.html)"""
import re, sys, os
sys.path.insert(0, '/home/claude')
from romanize import rom, norm
HERE = os.path.dirname(os.path.abspath(__file__))
EX = re.compile(r'ex\("((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)"\)')
def lessons(src):
    out = {}
    for m in re.finditer(r'\{ id:"([^"]+)".*?body:`(.*?)`\},', src, re.S):
        out[m.group(1)] = m.group(2)
    return out
def ko_words(s):
    s = re.sub(r'[A-Za-z]+', '', s)  # Latin names like Kii
    s = s.replace('→', ' ').replace('/', ' ')
    return [w for w in re.split(r'[\s.,!?~…]+', s) if re.search('[가-힣]', w)]
def cmp(ko, r):
    kw = ko_words(ko)
    exp = [norm(rom(re.sub('[^가-힣]', '', w))) for w in kw]
    got = [w for w in norm(r.replace('→', ' ').replace('/', ' ')).split() if w]
    if ' '.join(exp) == ' '.join(got): return None
    return exp, got
app = open('/home/claude/src/app.html', encoding='utf8').read()
app_l = lessons(app)
targets = []
frag_path = os.path.join(HERE, 'lessons.frag.js')
frag = lessons(open(frag_path, encoding='utf8').read()) if os.path.exists(frag_path) else {}
which = sys.argv[1:] or ['frag', 'app']
if 'frag' in which:
    for k, b in frag.items(): targets.append(('frag', k, b))
if 'app' in which:
    for k in ('nouns', 'verbbasics', 'sentences'): targets.append(('app', k, app_l[k]))
n = bad = 0
for src, k, body in targets:
    for m in EX.finditer(body):
        n += 1
        res = cmp(m.group(1), m.group(2))
        if res:
            bad += 1
            print(f'[{src}:{k}] {m.group(1)} | lesson: {" ".join(res[1])} | tool: {" ".join(res[0])}')
print(f'{n} rows, {bad} mismatches')

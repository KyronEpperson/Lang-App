#!/usr/bin/env python3
# Dominican Spanish pair (en-esdo, sdo-en): engine entries, mirroring the Puerto Rican pair (docs/briefs/pr-decisions.md section 2).
# usage: python3 tools/patches/dominican.py   (edits src/app.html; every replacement is asserted; safe to run again)
import io, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
P = os.path.join(ROOT, 'src', 'app.html'); s = io.open(P, encoding='utf8').read()
if "esdo:{name:'Spanish (Dominican)'" in s:
    print('dominican: already applied'); raise SystemExit
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:80]); s = s.replace(a, b)
L = "name:'Spanish (Dominican)',self:'Español dominicano',flag:'🇩🇴',ko:'도미니카 스페인어',t:1"
rep("ko:'푸에르토리코 스페인어',t:1,ui:'es'}};", "ko:'푸에르토리코 스페인어',t:1,ui:'es'},esdo:{" + L + "},sdo:{" + L + ",ui:'es'}};")
rep("FLOURISH.espr=FLOURISH.es; AGAIN.espr=AGAIN.es;", "FLOURISH.espr=FLOURISH.es; AGAIN.espr=AGAIN.es; FLOURISH.esdo=FLOURISH.es; AGAIN.esdo=AGAIN.es;")
rep("(l==='espr'||l==='spr')?'es-PR':l;", "(l==='espr'||l==='spr')?'es-PR':(l==='esdo'||l==='sdo')?'es-DO':l;")
rep("if(b==='es'&&/[-_]pr\\b/.test(full)&&liveNatives().includes('spr')) b='spr';", "if(b==='es'&&/[-_]pr\\b/.test(full)&&liveNatives().includes('spr')) b='spr'; if(b==='es'&&/[-_]do\\b/.test(full)&&liveNatives().includes('sdo')) b='sdo';")
F = '<rect x="0" y="0" width="40" height="30" fill="#fff"/><rect x="0" y="0" width="17" height="12" fill="#002d62"/><rect x="23" y="0" width="17" height="12" fill="#ce1126"/><rect x="0" y="18" width="17" height="12" fill="#ce1126"/><rect x="23" y="18" width="17" height="12" fill="#002d62"/><rect x="18.4" y="13.2" width="3.2" height="3.6" rx="1" fill="#006300"/>'
a = "',spr:'<rect"
assert s.count(a) == 1
s = s.replace(a, "',esdo:'" + F + "',sdo:'" + F + a)
io.open(P, 'w', encoding='utf8').write(s); print('dominican: engine entries added')

#!/usr/bin/env python3
# 2.98.0: pause scene: desktop waits 3 minutes (was 60 s); each word stays twice as long on every device (5.4 s -> 10.8 s).
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
for a,b in [("matches?30000:60000; }","matches?30000:180000; }"),
            ("/* pause scene: 30 s on phones and tablets, 60 s on desktop */","/* pause scene: 30 s on phones and tablets, 3 minutes on desktop */"),
            ("const cache={}; const HOLD=5.4;","const cache={}; const HOLD=10.8;")]:
    assert s.count(a)==1, 'not found exactly once: '+a
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('idle: desktop 180 s, word hold 10.8 s')

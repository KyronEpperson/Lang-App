#!/usr/bin/env python3
# 2.95.0: the pause scene (word cards after no input) waits 60 s on desktop instead of 30 s; phones and tablets keep 30 s.
# Desktop = a device whose main pointer is not a finger (same test the app uses elsewhere: '(pointer:coarse)').
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
a="let idleT=null, idleW=null, idleMs=30000, wakeL=null;"
b="let idleT=null, idleW=null, idleMs=(()=>{ try{ return window.matchMedia('(pointer:coarse)').matches?30000:60000; }catch(e){ return 30000; } })(), wakeL=null; /* pause scene: 30 s on phones and tablets, 60 s on desktop */"
assert s.count(a)==1, 'idleMs declaration not found exactly once'
open(p,'w',encoding='utf8').write(s.replace(a,b))
print('idleMs: desktop 60 s, touch 30 s')

#!/usr/bin/env python3
# 2.108.0: the Audio box (say a card when it appears) is on by default, and is switched on once for learners who already have saved progress.
# Same pattern as answer sounds (sfxV): saved progress without autoV gets auto=true once; after that the learner's own choice is kept.
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
for a,b in [(" auto:false, autoFlip:0,"," auto:true, autoV:1, autoFlip:0,"),
            ("if(s.sfxV==null){ S.sfx=true; S.sfxV=1; }","if(s.sfxV==null){ S.sfx=true; S.sfxV=1; } if(s.autoV==null){ S.auto=true; S.autoV=1; } /* Audio is on by default from 2.108; switched on once for saved progress, then the box decides */")]:
    assert s.count(a)==1, 'not found exactly once: '+a
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('audio default on')

#!/usr/bin/env python3
# 2.99.0: the pause scene runs 6 minutes before it goes static (was 4).
import sys
p=sys.argv[1] if len(sys.argv)>1 else 'src/app.html'
s=open(p,encoding='utf8').read()
for a,b in [("if(t>((o&&o.maxT)||240)){","if(t>((o&&o.maxT)||360)){"),("// save battery: go static after 4 minutes","// save battery: go static after 6 minutes")]:
    assert s.count(a)==1, 'not found exactly once: '+a
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
print('idle maxT 360')

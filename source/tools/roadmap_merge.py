#!/usr/bin/env python3
"""Merge docs/roadmaps/<code>.json (planned languages, English only) into packs/roadmaps.js.
Re-run safe: an existing block for a code is replaced. Titles have no Korean yet, so the English is used for both."""
import json,glob,os,re,sys
ROOT=os.path.join(os.path.dirname(__file__),'..'); P=os.path.join(ROOT,'packs','roadmaps.js')
s=open(P,encoding='utf8').read()
J=lambda x: json.dumps(x,ensure_ascii=False)
out=[];n=0
for f in sorted(glob.glob(os.path.join(ROOT,'docs','roadmaps','*.json'))):
    d=json.load(open(f,encoding='utf8')); c=d['code']
    ids=[i[0] for st in d['stages'] for i in st['items']]
    assert len(ids)==len(set(ids)) and all(i.startswith(c+'-') for i in ids), c
    assert 20<=len(ids)<=28, (c,len(ids))
    stages=',\n      '.join('{ en: %s, ko: %s, items: [%s] }'%(J(st['en']),J(st['en']),', '.join('[%s, %s, %s]'%(J(i[0]),J(i[1]),J(i[1])) for i in st['items'])) for st in d['stages'])
    key=c if re.match(r'^[a-z]+$',c) else J(c)
    blk='  /*PLAN:%s*/ %s: { variant: {en: %s, ko: %s}, basis: {en: %s, ko: %s}, voice: %s, script: %s,\n    src: %s, note: %s, hardest: %s,\n    stages: [\n      %s ] },\n'%(c,key,J(d['variant']),J(d['variant']),J(d['basis']),J(d['basis']),J(d.get('voice','')),J(d.get('script','')),J(d['src']),J(d['note']),J(d.get('hardest',[])),stages)
    s=re.sub(r'  /\*PLAN:%s\*/.*?\] \},\n'%re.escape(c),'',s,flags=re.S)
    out.append(blk);n+=1;print(c,len(ids),'lessons',len(d['stages']),'stages')
i=s.rstrip().rfind('}');head=s[:i].rstrip()
if not head.endswith(','): head+=','
s=head+'\n'+''.join(out).rstrip().rstrip(',')+'\n};\n'
open(P,'w',encoding='utf8').write(s);print('merged',n)

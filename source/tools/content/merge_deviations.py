"""Merge tools/content/<lang>/deviations.<part>.json fragments into deviations.json (lead-only). usage: python3 merge_deviations.py <lang>"""
import json,glob,sys,os
lang=sys.argv[1]; D='/home/claude/tools/content/%s/'%lang
d=json.load(open(D+'deviations.json',encoding='utf-8'))
for f in sorted(glob.glob(D+'deviations.*.json')):
    fr=json.load(open(f,encoding='utf-8'))
    for k in ('lessons','items','decks'):
        for a,b in (fr.get(k) or {}).items(): d.setdefault(k,{})[a]=b
    for k in ('extraLessons','droppedLessons'):
        for a in fr.get(k) or []:
            if a not in d[k]: d[k].append(a)
    print('merged',os.path.basename(f),{k:len(fr.get(k) or {}) for k in ('lessons','items','decks')})
json.dump(d,open(D+'deviations.json','w',encoding='utf-8'),ensure_ascii=False,indent=2)

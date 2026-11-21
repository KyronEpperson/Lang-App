"""Set the live-lesson field on English roadmap items from the lessons present in packs/course-ko-en.js.
There is one English roadmap for every <lang>-en course, so linking stays ko-en-driven (the shared lesson ids).
usage: python3 tools/content/link_roadmap.py              rewrite the en block of packs/roadmaps.js from course-ko-en.js
       python3 tools/content/link_roadmap.py --check LANG  read-only: report roadmap lesson links missing from course-LANG-en.js
                                                           (expected only for deviations.json droppedLessons); exit 1 if any."""
import re, sys
import os as _os
_ROOT = _os.environ.get('LANGAPP_ROOT') or _os.path.abspath(_os.path.join(_os.path.dirname(_os.path.abspath(__file__)), '..', '..'))
PACK = _ROOT + '/packs/course-%s-en.js'
ROADMAPS = _ROOT + '/packs/roadmaps.js'
def lesson_ids(lang):
    return set(re.findall(r'\{"id":"([a-z0-9-]+)","title"', open(PACK % lang, encoding='utf-8').read()))
ITEM = r'\["(en-[a-z0-9-]+)", "(?:[^"\\]|\\.)*", "(?:[^"\\]|\\.)*"(, "[a-z0-9-]+")?\]'
def en_block(s):
    i = s.index('  en: {'); j = s.index('\n  ja: {')
    return i, j, s[i:j]

if len(sys.argv) >= 3 and sys.argv[1] == '--check':
    lang = sys.argv[2]
    if not re.fullmatch(r'[a-z]{2,3}(-[A-Za-z0-9]{2,8})?', lang): sys.exit('bad language code ' + lang)
    ids = lesson_ids(lang)
    _, _, blk = en_block(open(ROADMAPS, encoding='utf-8').read())
    linked = [(a, b[3:-1]) for a, b in re.findall(ITEM, blk) if b]
    missing = [(a, l) for a, l in linked if l not in ids]
    print('en roadmap links', len(linked), '· missing in course-%s-en:' % lang, missing or 'none')
    sys.exit(1 if missing else 0)

ids = lesson_ids('ko')
p = ROADMAPS; s = open(p, encoding='utf-8').read()
i, j, blk = en_block(s)
if '"en-plurals"' not in blk:
    a='["en-nouns", "Nouns: a/an, plural -s, this/that, my/your", "명사: a/an, 복수 -s, this/that, my/your", "articles"]'
    assert a in blk
    blk=blk.replace(a,'["en-nouns", "a / an and the: the basics", "a / an과 the 기초", "articles"], ["en-plurals", "Plurals, this / these, my / your", "복수 -s, this / these, my / your", "plurals"]')
SPECIAL={'en-pron':'pron','en-be':'be','en-nouns':'articles','en-prep':'prep'}
def fix(m):
    rid=m.group(1); want=SPECIAL.get(rid, rid[3:])
    body=re.sub(r', "[a-z0-9-]+"\]$',']',m.group(0))
    return body[:-1]+', "%s"]'%want if want in ids else body
blk=re.sub(r'\["(en-[a-z0-9-]+)", "(?:[^"\\]|\\.)*", "(?:[^"\\]|\\.)*"(?:, "[a-z0-9-]+")?\]',fix,blk)
open(p,'w',encoding='utf-8').write(s[:i]+blk+s[j:])
items=re.findall(ITEM,blk)
print('en roadmap items',len(items),'planned',[a for a,b in items if not b])

"""Set the live-lesson field on English roadmap items from the lessons present in packs/course-ko-en.js."""
import re
ids=set(re.findall(r'\{"id":"([a-z0-9-]+)","title"',open('/home/claude/packs/course-ko-en.js',encoding='utf-8').read()))
p='/home/claude/packs/roadmaps.js'; s=open(p,encoding='utf-8').read()
i=s.index('  en: {'); j=s.index('\n  ja: {'); blk=s[i:j]
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
items=re.findall(r'\["(en-[a-z0-9-]+)", "(?:[^"\\]|\\.)*", "(?:[^"\\]|\\.)*"(, "[a-z0-9-]+")?\]',blk)
print('en roadmap items',len(items),'planned',[a for a,b in items if not b])

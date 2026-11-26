#!/usr/bin/env python3
"""Add the spelling-patterns section to the cs `alphabet` lesson and its cards."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, 'tools/content/cs/lessons.js')
SECTIONS = os.path.join(ROOT, 'tools/sections/cs-en/sections.json')

MARK = '<h3>Jak se písmena spojují: anglický pravopis</h3>'

def row(p, r, ex):
    return '<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % (p, r, ex)

ROWS = [
    ('sh', '/ʃ/', 'shop /ˈʃɑːp/, fish /ˈfɪʃ/'),
    ('ch', '/tʃ/', 'chair /ˈtʃer/, lunch /ˈlʌntʃ/'),
    ('th', '/θ/, /ð/', 'thank /ˈθæŋk/, mother /ˈmʌðər/'),
    ('qu', '/kw/', 'queen /ˈkwiːn/, quiet /ˈkwaɪət/'),
    ('a-e', '/eɪ/', 'cake /ˈkeɪk/, late /ˈleɪt/'),
    ('i-e', '/aɪ/', 'time /ˈtaɪm/, bike /ˈbaɪk/'),
    ('o-e', '/oʊ/', 'home /ˈhoʊm/, nose /ˈnoʊz/'),
    ('ee', '/iː/', 'green /ˈgriːn/, week /ˈwiːk/'),
    ('ea', '/iː/', 'tea /ˈtiː/, eat /ˈiːt/'),
    ('oo', '/uː/', 'food /ˈfuːd/, moon /ˈmuːn/'),
    ('ou', '/aʊ/', 'house /ˈhaʊs/, out /ˈaʊt/'),
    ('igh', '/aɪ/', 'night /ˈnaɪt/, light /ˈlaɪt/'),
]

SECTION = (
    '\n' + MARK + '\n'
    '<p>Česky se čte skoro tak, jak se píše. V angličtině ale dvě nebo tři písmena často tvoří jednu hlásku, kterou podle češtiny nečekáš. '
    'Nejzrádnější je <b>ch</b>: nezní jako české „ch“, ale jako „č“ (<b>chair</b>). Výjimkou je <b>school</b>, kde se čte „k“. '
    'Spojení <b>qu</b> zní /kw/, ne „kv“. Pro <b>th</b> má angličtina dvě vlastní hlásky. Jak je tvořit, uvidíš v další lekci. '
    'České „ou“ tu nečti: <b>ou</b> zní jako „au“ v <b>house</b>, jenže <b>you</b> se čte /ˈjuː/.</p>\n'
    '<p>Koncové <b>e</b> se nečte, jen změní výslovnost samohlásky před poslední souhláskou: <b>a-e</b> zní /eɪ/, <b>i-e</b> /aɪ/, <b>o-e</b> /oʊ/. '
    'Pozor na běžné výjimky <b>have, give, come, love</b>, kde samohláska zůstává krátká. V krátkých slovech <b>he, she, me, we</b> se naopak koncové e čte jako /iː/. '
    'Zdvojené <b>ee</b> není dlouhé „é“, ale /iː/, a <b>oo</b> není „ó“, ale /uː/. Ani to neplatí vždy: <b>book</b> a <b>good</b> mají krátké /ʊ/ '
    'a v <b>bread</b> a <b>head</b> zní <b>ea</b> jako /e/.</p>\n'
    '<div class="tbl"><table><tr><th>Písmena</th><th>Zní</th><th>Příklady</th></tr>'
    + ''.join(row(*r) for r in ROWS) +
    '</table></div>\n'
    '{{tiles:sh=/ʃ/ ch=/tʃ/ th=/θ/,_/ð/ qu=/kw/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ ou=/aʊ/ igh=/aɪ/}}'
)

ANCHOR = 'lenka dot novak at mail dot com</b>.</div>'

src = open(LESSONS, encoding='utf-8').read()
assert MARK not in src, 'spelling section already applied to lessons.js'
assert src.count(ANCHOR + '`}') == 1, 'anchor not found exactly once'
src = src.replace(ANCHOR + '`}', ANCHOR + SECTION + '`}', 1)
open(LESSONS, 'w', encoding='utf-8').write(src)

CARDS = [
    ['shop', '/ˈʃɑːp/', 'obchod', ''],
    ['chair', '/ˈtʃer/', 'židle', ''],
    ['queen', '/ˈkwiːn/', 'královna', ''],
    ['cake', '/ˈkeɪk/', 'dort / koláč', ''],
    ['time', '/ˈtaɪm/', 'čas', ''],
    ['home', '/ˈhoʊm/', 'domov / doma', ''],
    ['green', '/ˈgriːn/', 'zelený', ''],
    ['tea', '/ˈtiː/', 'čaj', ''],
    ['food', '/ˈfuːd/', 'jídlo', ''],
    ['house', '/ˈhaʊs/', 'dům', ''],
]

js = open(SECTIONS, encoding='utf-8').read()
data = json.loads(js)
assert '4' not in data['alphabet'], 'alphabet section 4 cards already present'
OLD = '   ["dot", "/ˈdɑːt/", "tečka (v e-mailu)", ""]\n  ]}\n },'
assert js.count(OLD) == 1, 'sections.json anchor not found exactly once'
block = ',\n'.join('   ' + json.dumps(c, ensure_ascii=False) for c in CARDS)
NEW = OLD[:-len('\n },')] + ',\n  "4": {"add": [\n' + block + '\n  ]}\n },'
js = js.replace(OLD, NEW, 1)
check = json.loads(js)
assert len(check['alphabet']['4']['add']) == len(CARDS)
open(SECTIONS, 'w', encoding='utf-8').write(js)
print('spelling_cs: lesson section and %d cards added' % len(CARDS))

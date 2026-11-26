#!/usr/bin/env python3
"""ru-en lesson 1 (alphabet): append the spelling-patterns section and its flashcards (section 5)."""
import json
import os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/ru/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/ru-en/sections.json')

TITLE = '<h3>Как буквы складываются в звуки</h3>'
SECTION_NO = '5'

ROWS = [
    ('sh', '/ʃ/', 'shop, fish'),
    ('ch', '/tʃ/', 'chair, lunch'),
    ('ph', '/f/', 'phone, photo'),
    ('ck', '/k/', 'clock, black'),
    ('kn', '/n/', 'know, knife'),
    ('a-e', '/eɪ/', 'name, cake'),
    ('i-e', '/aɪ/', 'time, bike'),
    ('o-e', '/oʊ/', 'home, nose'),
    ('ee', '/iː/', 'green, meet'),
    ('ea', '/iː/', 'tea, eat'),
    ('oo', '/uː/', 'moon, food'),
    ('igh', '/aɪ/', 'night, high'),
]

table = ('<div class="tbl"><table><tr><th>Буквы</th><th>Звук</th><th>Примеры</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')
tiles = '{{tiles:' + ' '.join('%s=%s' % (p, s) for p, s, _ in ROWS) + '}}'

SECTION = '\n'.join([
    TITLE,
    '<p>В русском слово обычно можно прочитать буква за буквой. В английском так не получится: часто две или три буквы вместе дают <b>один звук</b>, а некоторые буквы не читаются вовсе. Если прочитать phone как «пхоне», вас не поймут. Вот сочетания, которые стоит узнавать с первого взгляда. Сочетания th и ng вы увидите в следующем уроке.</p>',
    '<p><b>Немая e</b> на конце слова сама не звучит, но меняет гласную перед собой: эта гласная звучит так же, как её название в алфавите. В коротких he, she, me, we e не немая: она звучит как /iː/. В таблице это записано как a-e, i-e, o-e: дефис означает одну согласную между гласной и e. В kn буква k тоже немая: know звучит так же, как no.</p>',
    '<p>Ни одно из этих правил не работает всегда. Самые частые исключения: в have, give, come и love гласная не звучит как название буквы; в book и good oo читается коротко, как /ʊ/; в bread и head ea звучит как /e/; а ch в school читается как /k/. Такие слова проще запомнить целиком.</p>',
    table,
    tiles,
])

CARDS = [
    ['shop', '/ˈʃɑːp/', 'магазин', ''],
    ['chair', '/ˈtʃer/', 'стул', ''],
    ['phone', '/ˈfoʊn/', 'телефон', ''],
    ['clock', '/ˈklɑːk/', 'часы (настенные, настольные)', ''],
    ['knife', '/ˈnaɪf/', 'нож', ''],
    ['cake', '/ˈkeɪk/', 'торт / пирожное', ''],
    ['time', '/ˈtaɪm/', 'время', ''],
    ['home', '/ˈhoʊm/', 'дом (свой) / домой', ''],
    ['green', '/ˈgriːn/', 'зелёный', ''],
    ['night', '/ˈnaɪt/', 'ночь', ''],
]

# 1. lesson body
src = open(LESSONS, encoding='utf-8').read()
assert TITLE not in src, 'spelling section already applied to lessons.js'
anchor = 'dot com</b>.</div>`},\n'
assert src.count(anchor) == 1, 'anchor not unique in lessons.js'
src = src.replace(anchor, 'dot com</b>.</div>\n' + SECTION + '`},\n')
open(LESSONS, 'w', encoding='utf-8').write(src)

# 2. sections.json (hand-formatted: one card per line, 3-space indent)
txt = open(SECTIONS, encoding='utf-8').read()
data = json.loads(txt)
assert SECTION_NO not in data['alphabet'], 'alphabet section %s already in sections.json' % SECTION_NO
old = '   ["dot", "/ˈdɑːt/", "точка (в адресе)", ""]\n  ]}\n },\n "pron": {'
assert txt.count(old) == 1, 'sections.json anchor not found'
cards = ',\n'.join('   ' + json.dumps(c, ensure_ascii=False) for c in CARDS)
new = ('   ["dot", "/ˈdɑːt/", "точка (в адресе)", ""]\n  ]},\n  "%s": {"add": [\n%s\n  ]}\n },\n "pron": {'
       % (SECTION_NO, cards))
txt = txt.replace(old, new)
assert json.loads(txt)['alphabet'][SECTION_NO]['add'] == CARDS
open(SECTIONS, 'w', encoding='utf-8').write(txt)
print('spelling_ru: lesson section and %d cards added' % len(CARDS))

#!/usr/bin/env python3
"""Adds the spelling-patterns section to the end of the pl-en `alphabet` lesson
and its flashcards (section 4) to tools/sections/pl-en/sections.json."""
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
LESSONS = os.path.join(ROOT, 'tools/content/pl/lessons.js')
SECTIONS = os.path.join(ROOT, 'tools/sections/pl-en/sections.json')

MARK = '<h3>Od liter do głosek: najczęstsze połączenia</h3>'

ROWS = [
    ('sh', '/ʃ/, polskie „sz”', 'shop /ˈʃɑːp/, fish /ˈfɪʃ/'),
    ('ch', '/tʃ/, polskie „cz”, nie „ch”', 'chair /ˈtʃer/, lunch /ˈlʌntʃ/; wyjątek: school /ˈskuːl/'),
    ('ph', '/f/', 'phone /ˈfoʊn/, photo /ˈfoʊtoʊ/'),
    ('wh', '/w/, polskie „ł”', 'what /ˈwʌt/, white /ˈwaɪt/; wyjątek: who /ˈhuː/'),
    ('a-e', '/eɪ/, jak nazwa litery A', 'name /ˈneɪm/, cake /ˈkeɪk/; wyjątek: have /ˈhæv/'),
    ('i-e', '/aɪ/, jak nazwa litery I', 'time /ˈtaɪm/, five /ˈfaɪv/; wyjątek: give /ˈgɪv/'),
    ('o-e', '/oʊ/, jak nazwa litery O', 'home /ˈhoʊm/, nose /ˈnoʊz/; wyjątki: come /ˈkʌm/, love /ˈlʌv/'),
    ('ee', '/iː/, długie „i”', 'green /ˈgriːn/, sleep /ˈsliːp/'),
    ('ea', '/iː/, długie „i”', 'tea /ˈtiː/, eat /ˈiːt/; wyjątki: bread /ˈbred/, head /ˈhed/'),
    ('oo', '/uː/, długie „u”', 'food /ˈfuːd/, moon /ˈmuːn/; wyjątki: book /ˈbʊk/, good /ˈgʊd/'),
    ('igh', '/aɪ/, gh nieme', 'night /ˈnaɪt/, high /ˈhaɪ/'),
    ('kn', '/n/, k nieme', 'know /ˈnoʊ/, knife /ˈnaɪf/'),
]

TABLE = ('<div class="tbl"><table><tr><th>Pisownia</th><th>Czyta się</th><th>Przykłady</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')

TILES = '{{tiles:sh=/ʃ/ ch=/tʃ/ ph=/f/ wh=/w/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ igh=/aɪ/ kn=/n/}}'

SECTION = '\n'.join([
    MARK,
    '<p>Nazwy liter już znasz, ale w słowie litery brzmią inaczej niż przy literowaniu. Po polsku czytamy prawie tak, jak piszemy. Po angielsku dwie albo trzy litery często dają jedną głoskę, a niektóre litery w ogóle milczą. Najbardziej myli <b>ch</b>: to polskie „cz”, a nie nasze „ch” (wyjątek: school). <b>wh</b> czytamy zwykle jak polskie „ł” (wyjątek: who), a w <b>kn</b> nie słychać k.</p>',
    '<p><b>Nieme e</b> na końcu słowa nie jest wymawiane, ale zmienia samogłoskę przed ostatnią spółgłoską: zamiast krótkiej samogłoski słychać nazwę litery z alfabetu. Dlatego a-e to /eɪ/, i-e to /aɪ/, o-e to /oʊ/. Ta zasada ma wyjątki w bardzo częstych słowach: have, give, come, love czytamy z krótką samogłoską. W krótkich słowach <b>he, she, me, we</b> końcowe e nie milczy, tylko brzmi /iː/.</p>',
    TABLE,
    TILES,
    '<p>Pary samogłosek też mają wyjątki: ea w bread i head to /e/, a oo w book i good to krótkie /ʊ/. Pisownia podpowiada wymowę, ale jej nie gwarantuje, dlatego zawsze sprawdzaj transkrypcję. Jak wymawiać th i końcówkę -ing, zobaczysz w następnej lekcji.</p>',
])

LESSON_ANCHOR = 'A-double N-A dot N-O-W-A-K at mail dot com</b>.</div>`},\n\n{ id:"pron"'

CARDS = [
    ('shop', '/ˈʃɑːp/', 'sklep'),
    ('chair', '/ˈtʃer/', 'krzesło'),
    ('phone', '/ˈfoʊn/', 'telefon'),
    ('white', '/ˈwaɪt/', 'biały'),
    ('name', '/ˈneɪm/', 'imię / nazwa'),
    ('time', '/ˈtaɪm/', 'czas / godzina'),
    ('home', '/ˈhoʊm/', 'dom (miejsce, gdzie się mieszka)'),
    ('tea', '/ˈtiː/', 'herbata'),
    ('night', '/ˈnaɪt/', 'noc'),
    ('know', '/ˈnoʊ/', 'wiedzieć / znać'),
]

SEC_ANCHOR = '   ["at", "/ˈæt/", "małpa (@) w adresie e-mail", ""]\n  ]}\n },'


def main():
    with open(LESSONS, encoding='utf-8') as f:
        src = f.read()
    assert MARK not in src, 'lesson patch already applied'
    assert src.count(LESSON_ANCHOR) == 1, 'lesson anchor not found exactly once'
    new_tail = LESSON_ANCHOR.replace('</div>`},', '</div>\n' + SECTION + '`},', 1)
    src = src.replace(LESSON_ANCHOR, new_tail, 1)
    with open(LESSONS, 'w', encoding='utf-8') as f:
        f.write(src)

    with open(SECTIONS, encoding='utf-8') as f:
        sj = f.read()
    assert '"4": {"add": [\n   ["shop"' not in sj, 'sections patch already applied'
    assert sj.count(SEC_ANCHOR) == 1, 'sections anchor not found exactly once'
    lines = ',\n'.join('   ["%s", "%s", "%s", ""]' % c for c in CARDS)
    block = SEC_ANCHOR[:-len('  ]}\n },')] + '  ]},\n  "4": {"add": [\n' + lines + '\n  ]}\n },'
    sj = sj.replace(SEC_ANCHOR, block, 1)
    import json
    json.loads(sj)
    with open(SECTIONS, 'w', encoding='utf-8') as f:
        f.write(sj)
    print('spelling_pl: lesson section and 10 cards added')


if __name__ == '__main__':
    main()

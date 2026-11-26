#!/usr/bin/env python3
"""Spelling patterns: a last <h3> section for the de-en `alphabet` lesson, plus its flashcards (section 4)."""
import os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/de/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/de-en/sections.json')

MARK = '<h3>Buchstaben, die zusammen einen Laut ergeben</h3>'
ANCHOR = '<i>lukas dot weber at example dot com</i>.</div>`},'

ROWS = [
    ('ee', '/iː/: „ie“ wie in „Liebe“, nicht „e“ wie in „See“', 'green /ˈgriːn/, sleep /ˈsliːp/', ''),
    ('ea', '/iː/: wie ee', 'eat /ˈiːt/, tea /ˈtiː/', 'bread /ˈbred/, head /ˈhed/: kurzes /e/'),
    ('oo', '/uː/: „u“ wie in „Schule“', 'moon /ˈmuːn/, room /ˈruːm/', 'good /ˈgʊd/, foot /ˈfʊt/: kurzes /ʊ/'),
    ('ou', '/aʊ/: „au“ wie in „Haus“', 'house /ˈhaʊs/, out /ˈaʊt/', 'you /ˈjuː/, group /ˈgruːp/: /uː/; could /ˈkʊd/, would /ˈwʊd/: /ʊ/; ow klingt oft auch /aʊ/ (now /ˈnaʊ/), aber snow /ˈsnoʊ/'),
    ('ai', '/eɪ/: der Name von A, nicht „ei“ wie in „Mai“', 'rain /ˈreɪn/, wait /ˈweɪt/', 'said /ˈsed/'),
    ('igh', '/aɪ/: „ei“ wie in „Eis“, g und h sind stumm', 'night /ˈnaɪt/, high /ˈhaɪ/', ''),
    ('a-e', '/eɪ/: der Name von A, das e ist stumm', 'cake /ˈkeɪk/, late /ˈleɪt/', 'have /ˈhæv/'),
    ('i-e', '/aɪ/: der Name von I', 'time /ˈtaɪm/, nice /ˈnaɪs/', 'give /ˈgɪv/'),
    ('o-e', '/oʊ/: der Name von O', 'home /ˈhoʊm/, nose /ˈnoʊz/', 'come /ˈkʌm/, love /ˈlʌv/'),
    ('wh', '/w/: das englische w, nie „w“ wie in „Wein“', 'what /ˈwʌt/, white /ˈwaɪt/', 'who /ˈhuː/'),
    ('qu', '/kw/: k und englisches w, nicht „kv“ wie in „Quelle“', 'queen /ˈkwiːn/, quick /ˈkwɪk/', ''),
    ('kn', '/n/: das k ist stumm', 'know /ˈnoʊ/, knife /ˈnaɪf/', 'keine Ausnahme, sondern genauso: w vor r ist stumm, write /ˈraɪt/, wrong /ˈrɔːŋ/'),
]
TILES = ['ee=/iː/', 'ea=/iː/', 'oo=/uː/', 'ou=/aʊ/', 'ai=/eɪ/', 'igh=/aɪ/', 'a-e=/eɪ/', 'i-e=/aɪ/', 'o-e=/oʊ/', 'wh=/w/', 'qu=/kw/', 'kn=/n/']

table = ('<div class="tbl"><table><tr><th>Schreibung</th><th>Klingt wie</th><th>Beispiele</th><th>Ausnahmen</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')

SECTION = (
    '\n' + MARK + '\n'
    '<p>Die Buchstabennamen helfen dir vor allem beim Buchstabieren, beim Vorlesen nur manchmal. Im Englischen ergeben oft zwei oder drei Buchstaben zusammen <b>einen</b> Laut, und dieser Laut ist selten der, den du aus dem Deutschen erwartest. Hier sind die Muster, bei denen die deutsche Lesart am häufigsten danebenliegt: <i>ee</i> ist kein „e“ wie in „See“, <i>ai</i> kein „ei“ wie in „Mai“, <i>ou</i> meist kein „u“, und <i>qu</i> beginnt nicht mit „kv“ wie in „Quelle“.</p>\n'
    + table + '\n'
    '{{tiles:' + ' '.join(TILES) + '}}\n'
    '<p>Ein stummes <b>e</b> am Wortende (a-e, i-e, o-e) macht den Vokal davor meistens zum Namen des Buchstabens: <i>cake</i> sprichst du mit dem A aus dem Alphabet, /eɪ/. Am Wortanfang sind k vor n und w vor r stumm: <i>know</i>, <i>write</i>. Keines dieser Muster gilt immer, und gerade sehr häufige Wörter brechen sie: <i>have, give, come, love</i> haben ein stummes e und trotzdem einen kurzen Vokal, <i>good</i> und <i>foot</i> ein kurzes oo, <i>bread</i> und <i>head</i> ein kurzes ea, und <i>you</i>, <i>could</i> und <i>would</i> klingen nicht nach „au“. Lerne solche Wörter einzeln. <i>sh</i>, <i>ch</i> und <i>th</i> siehst du in der nächsten Lektion.</p>'
)

CARDS = [
    ('sleep', '/ˈsliːp/', 'schlafen'),
    ('tea', '/ˈtiː/', 'der Tee'),
    ('moon', '/ˈmuːn/', 'der Mond'),
    ('house', '/ˈhaʊs/', 'das Haus'),
    ('rain', '/ˈreɪn/', 'der Regen'),
    ('night', '/ˈnaɪt/', 'die Nacht'),
    ('cake', '/ˈkeɪk/', 'der Kuchen'),
    ('white', '/ˈwaɪt/', 'weiß'),
    ('know', '/ˈnoʊ/', 'wissen, kennen'),
    ('queen', '/ˈkwiːn/', 'die Königin'),
]

# --- lesson body
src = open(LESSONS, encoding='utf-8').read()
assert MARK not in src, 'spelling_de: lesson section already applied'
assert src.count(ANCHOR) == 1, 'spelling_de: lesson anchor not found exactly once'
src = src.replace(ANCHOR, ANCHOR[:-len('`},')] + SECTION + '`},')
open(LESSONS, 'w', encoding='utf-8').write(src)

# --- sections.json (hand-formatted: one-space indent, one card per line)
js = open(SECTIONS, encoding='utf-8').read()
OLD = '   ["dot", "/ˈdɑːt/", "Punkt (in E-Mail- und Webadressen)", ""]\n  ]}\n },\n "pron": {'
assert '"4": {"add": [\n   ["sleep"' not in js, 'spelling_de: sections entry already applied'
assert js.count(OLD) == 1, 'spelling_de: sections anchor not found exactly once'
q = lambda s: '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
lines = ',\n'.join('   [%s, %s, %s, ""]' % (q(f), q(r), q(m)) for f, r, m in CARDS)
NEW = OLD.replace('  ]}\n },', '  ]},\n  "4": {"add": [\n' + lines + '\n  ]}\n },', 1)
js = js.replace(OLD, NEW)
import json
json.loads(js)
open(SECTIONS, 'w', encoding='utf-8').write(js)
print('spelling_de: lesson section and %d cards added' % len(CARDS))

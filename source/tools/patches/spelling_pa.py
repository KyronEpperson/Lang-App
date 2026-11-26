#!/usr/bin/env python3
"""Spelling-patterns section for pa-en lesson 1 (alphabet): lesson body + section-4 flashcards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/pa/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/pa-en/sections.json')

MARK = '<h3>ਅੱਖਰ ਮਿਲ ਕੇ ਇੱਕ ਆਵਾਜ਼: ph, ng, ee, igh</h3>'

ROWS = [
    ('ph', 'ਫ਼', 'phone ਫ਼ੋਨ, photo ˈਫ਼ੋਟੋ'),
    ('ng', 'ਙ', 'sing ਸਿਙ, long ਲੌਙ'),
    ('qu', 'ਕ੍ਵ', 'queen ਕ੍ਵੀਨ, quick ਕ੍ਵਿਕ'),
    ('kn / wr', 'ਨ / ਰ (k, w ਚੁੱਪ)', 'knife ਨਾਈਫ਼, wrong ਰੌਙ'),
    ('a-e', 'ਏ', 'cake ਕੇਕ, make ਮੇਕ'),
    ('i-e', 'ਆਈ', 'bike ਬਾਈਕ, five ਫ਼ਾਈਵ਼'),
    ('o-e', 'ਓ', 'home ਹੋਮ, nose ਨੋਜ਼'),
    ('ee / ea', 'ਈ', 'see ਸੀ, tea ਟੀ'),
    ('oo', 'ਊ', 'food ਫ਼ੂਡ, room ਰੂਮ'),
    ('ai / ay', 'ਏ', 'rain ਰੇਨ, play ਪ੍ਲੇ'),
    ('igh', 'ਆਈ (gh ਚੁੱਪ)', 'night ਨਾਈਟ, high ਹਾਈ'),
    ('ou / ow', 'ਆਊ', 'house ਹਾਊਸ, cow ਕਾਊ'),
]

TILES = ('ph=ਫ਼ ng=ਙ qu=ਕ੍ਵ kn=ਨ wr=ਰ a-e=ਏ i-e=ਆਈ o-e=ਓ '
         'ee=ਈ ea=ਈ oo=ਊ ai=ਏ ay=ਏ igh=ਆਈ ou=ਆਊ ow=ਆਊ')

table = ('<div class="tbl"><table><tr><th>ਪੈਟਰਨ</th><th>ਆਵਾਜ਼</th><th>ਉਦਾਹਰਨ</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')

SECTION = (
    '\n' + MARK + '\n'
    '<p>ਗੁਰਮੁਖੀ ਵਿੱਚ ਲਗਭਗ ਜਿਵੇਂ ਲਿਖਦੇ ਹਾਂ, ਉਵੇਂ ਹੀ ਬੋਲਦੇ ਹਾਂ। ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਅਕਸਰ ਦੋ-ਤਿੰਨ ਅੱਖਰ ਮਿਲ ਕੇ <b>ਇੱਕ ਆਵਾਜ਼</b> ਬਣਾਉਂਦੇ ਹਨ, '
    'ਤੇ ਕੁਝ ਅੱਖਰ ਬੋਲੇ ਹੀ ਨਹੀਂ ਜਾਂਦੇ। ਰੋਮਨ ਵਿੱਚ ਪੰਜਾਬੀ ਲਿਖਣ ਦੀ ਆਦਤ ਇੱਥੇ ਧੋਖਾ ਦਿੰਦੀ ਹੈ: ਰੋਮਨ ਪੰਜਾਬੀ ਵਿੱਚ ph = ਫ ਤੇ gh = ਘ, '
    'ਪਰ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ <b>ph = ਫ਼</b> (phone) ਤੇ igh ਵਿੱਚ gh ਚੁੱਪ ਹੈ (night ਨਾਈਟ)। ਸ਼ਬਦ ਦੇ ਅਖ਼ੀਰ ਵਿੱਚ ng = ਙ, ਪਿੱਛੇ ਗ ਨਹੀਂ; '
    'kn ਵਿੱਚ k ਤੇ wr ਵਿੱਚ w ਚੁੱਪ ਹਨ। sh = ਸ਼ ਤੇ ch = ਚ ਤੁਹਾਡੀ ਆਦਤ ਵਾਂਗ ਹੀ ਹਨ, ਪਰ school ਵਿੱਚ ch = ਕ; '
    'th ਦੀ ਆਵਾਜ਼ ਤੁਸੀਂ ਅਗਲੇ ਪਾਠ ਵਿੱਚ ਦੇਖੋਗੇ।</p>\n'
    '<p>ਸ਼ਬਦ ਦੇ ਅਖ਼ੀਰ ਵਾਲਾ <b>ਚੁੱਪ e</b> ਆਪ ਨਹੀਂ ਬੋਲਿਆ ਜਾਂਦਾ, ਪਰ ਪਿਛਲੇ ਸਵਰ ਨੂੰ ਉਸ ਦਾ <b>ਅੱਖਰ ਵਾਲਾ ਨਾਂ</b> ਦੇ ਦਿੰਦਾ ਹੈ: '
    'a-e = ਏ (cake), i-e = ਆਈ (bike), o-e = ਓ (home)। ਪਰ have, give, come, love ਵਿੱਚ ਇਹ ਨਿਯਮ ਨਹੀਂ ਚੱਲਦਾ '
    '(ਹੈਵ਼, ਗਿਵ਼, ਕਮ, ਲਵ਼), ਤੇ he, she, me, we ਵਿੱਚ ਇਕੱਲਾ e ਬੋਲਿਆ ਜਾਂਦਾ ਹੈ (ਹੀ, ਸ਼ੀ, ਮੀ, ਵੀ)। '
    'ਸਵਰ ਨਾਲ ਸਵਰ (ਜਾਂ y, w) ਜੁੜੇ ਤਾਂ ਵੀ ਅਕਸਰ ਇੱਕ ਹੀ ਆਵਾਜ਼ ਬਣਦੀ ਹੈ: ee / ea = ਈ, oo = ਊ, ai / ay = ਏ, ou / ow = ਆਊ। '
    'ਇੱਥੇ ਵੀ ਆਮ ਅਪਵਾਦ ਯਾਦ ਰੱਖੋ: bread, head (ਬ੍ਰੇਡ, ਹੇਡ), book, good (ਬੁਕ, ਗੁਡ), said (ਸੇਡ), you (ਯੂ); ow ਅਕਸਰ ਓ ਵੀ ਹੁੰਦਾ ਹੈ: snow, know, window (ਸ੍ਨੋ, ਨੋ, ˈਵਿੰਡੋ)।</p>\n'
    + table + '\n'
    '{{tiles:' + TILES + '}}'
)

ANCHOR = 'ਇਸ ਕੋਰਸ ਦੀ ਵਿਆਕਰਨ ਤੇ ਲਗਭਗ ਸਾਰੇ ਸ਼ਬਦ ਉੱਥੇ ਵੀ ਇਹੀ ਹਨ।</div>`},\n\n{ id:"pron"'
ANCHOR_AT = ANCHOR.index('`},')

CARDS = [
    ['phone', 'ਫ਼ੋਨ', 'ਫ਼ੋਨ (ph = ਫ਼)', ''],
    ['queen', 'ਕ੍ਵੀਨ', 'ਰਾਣੀ (qu = ਕ੍ਵ)', ''],
    ['knife', 'ਨਾਈਫ਼', 'ਚਾਕੂ (k ਚੁੱਪ)', ''],
    ['cake', 'ਕੇਕ', 'ਕੇਕ (a-e = ਏ)', ''],
    ['bike', 'ਬਾਈਕ', 'ਸਾਈਕਲ / ਮੋਟਰਸਾਈਕਲ (i-e = ਆਈ)', ''],
    ['home', 'ਹੋਮ', 'ਘਰ (o-e = ਓ)', ''],
    ['tea', 'ਟੀ', 'ਚਾਹ (ea = ਈ)', ''],
    ['food', 'ਫ਼ੂਡ', 'ਖਾਣਾ (oo = ਊ)', ''],
    ['rain', 'ਰੇਨ', 'ਮੀਂਹ (ai = ਏ)', ''],
    ['night', 'ਨਾਈਟ', 'ਰਾਤ (igh = ਆਈ)', ''],
]

# --- lesson body ---
src = open(LESSONS, encoding='utf8').read()
assert MARK not in src, 'spelling section already applied to lessons.js'
assert src.count(ANCHOR) == 1, 'anchor not found exactly once in lessons.js'
i = src.index(ANCHOR) + ANCHOR_AT
src = src[:i] + SECTION + src[i:]
open(LESSONS, 'w', encoding='utf8').write(src)

# --- sections.json (hand-formatted: insert text, keep the file's layout) ---
sj = open(SECTIONS, encoding='utf8').read()
data = json.loads(sj)
assert '4' not in data['alphabet'], 'alphabet section 4 already has cards'
S_ANCHOR = '], "drop": []}\n },\n "pron": {'
assert sj.count(S_ANCHOR) == 1, 'sections.json anchor not found exactly once'
block = (',\n  "4": {"add": [\n'
         + ',\n'.join('   ' + json.dumps(c, ensure_ascii=False) for c in CARDS)
         + '\n  ], "drop": []}')
j = sj.index(S_ANCHOR) + len('], "drop": []}')
sj = sj[:j] + block + sj[j:]
new = json.loads(sj)
assert new['alphabet']['4']['add'] == CARDS
open(SECTIONS, 'w', encoding='utf8').write(sj)
print('spelling_pa: lesson section + %d cards added' % len(CARDS))

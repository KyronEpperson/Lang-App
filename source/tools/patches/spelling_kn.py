#!/usr/bin/env python3
"""Add the spelling-patterns section (last <h3>) to the kn alphabet lesson and its cards to sections.json."""
import os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/kn/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/kn-en/sections.json')

MARK = '<h3>ಅಕ್ಷರಗಳು ಸೇರಿದಾಗ: ಸ್ಪೆಲ್ಲಿಂಗ್ ಮತ್ತು ಧ್ವನಿ</h3>'
ANCHOR = 'ಭಾರತದಲ್ಲಿ @ ಗೆ <b>at the rate</b> ಎನ್ನುವುದುಂಟು; ವಿದೇಶದಲ್ಲಿ at ಮಾತ್ರ ಹೇಳಿ.</div>`},'

ROWS = [
    ('sh', 'ಶ', 'ship (ಶಿಪ್), fish (ಫ಼ಿಶ್)'),
    ('ch', 'ಚ', 'chair (ಚೆರ್), lunch (ಲನ್ಚ್)'),
    ('th', 'ಥ಼ / ದ಼', 'thank (ಥ಼್ಯಾಂಕ್), mother (ˈಮದ಼ರ್)'),
    ('ph', 'ಫ಼', 'phone (ಫ಼ೋನ್), photo (ˈಫ಼ೋಟೋ)'),
    ('kn', 'ನ (k ಮೌನ)', 'knife (ನೈಫ಼್), know (ನೋ)'),
    ('a-e', 'ಏ', 'cake (ಕೇಕ್), game (ಗೇಮ್)'),
    ('i-e', 'ಐ', 'five (ಫ಼ೈವ಼್), bike (ಬೈಕ್)'),
    ('o-e', 'ಓ', 'nose (ನೋಜ಼್), home (ಹೋಮ್)'),
    ('ee', 'ಈ', 'sleep (ಸ್ಲೀಪ್), green (ಗ್ರೀನ್)'),
    ('ea', 'ಈ', 'tea (ಟೀ), eat (ಈಟ್)'),
    ('oo', 'ಊ', 'moon (ಮೂನ್), food (ಫ಼ೂಡ್)'),
    ('igh', 'ಐ', 'night (ನೈಟ್), high (ಹೈ)'),
]

TABLE = ('<div class="tbl"><table><tr><th>ಸ್ಪೆಲ್ಲಿಂಗ್</th><th>ಧ್ವನಿ</th><th>ಉದಾಹರಣೆ</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')

TILES = '{{tiles:sh=ಶ ch=ಚ th=ಥ಼_/_ದ಼ ph=ಫ಼ kn=ನ a-e=ಏ i-e=ಐ o-e=ಓ ee=ಈ ea=ಈ oo=ಊ igh=ಐ}}'

SECTION = '\n'.join([
    MARK,
    '<p>ಕನ್ನಡದಲ್ಲಿ ಪ್ರತಿ ಅಕ್ಷರಕ್ಕೂ ಒಂದೇ ಧ್ವನಿ; ಬರೆದ ಹಾಗೆಯೇ ಓದುತ್ತೇವೆ. ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಹಾಗಲ್ಲ: ಹಲವು ಸಲ ಎರಡು ಅಥವಾ ಮೂರು ಅಕ್ಷರಗಳು ಸೇರಿ <b>ಒಂದೇ ಧ್ವನಿ</b> ಆಗುತ್ತವೆ, ಕೆಲವು ಅಕ್ಷರಗಳು ಮೌನವಾಗಿರುತ್ತವೆ. ship ಪದದಲ್ಲಿ s ಮತ್ತು h ಬೇರೆ ಬೇರೆ ಅಲ್ಲ; sh ಒಂದೇ ಧ್ವನಿ, ಶ. ph ಎಂಬುದು ತುಟಿ ಮುಚ್ಚಿ ಹೇಳುವ ಕನ್ನಡದ ಫ ಅಲ್ಲ, ಚುಕ್ಕೆ ಇರುವ ಫ಼ (f): phone = ಫ಼ೋನ್. th ಧ್ವನಿಯನ್ನು ಹೇಳುವ ರೀತಿ ಮುಂದಿನ ಪಾಠದಲ್ಲಿ ಇದೆ.</p>',
    '<p>ಪದದ ಕೊನೆಯ <b>e</b> ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಿಸುವುದಿಲ್ಲ. ಸ್ವರಾಕ್ಷರ + ಒಂದು ವ್ಯಂಜನ + e ಇದ್ದಾಗ, ಆ e ಹಿಂದಿನ ಸ್ವರಾಕ್ಷರವನ್ನು ಅದರ ಹೆಸರಿನ ಹಾಗೆ ಓದಲು ಹೇಳುತ್ತದೆ: cake ಪದದಲ್ಲಿ a = ಏ, five ಪದದಲ್ಲಿ i = ಐ, nose ಪದದಲ್ಲಿ o = ಓ. ಆದರೆ ಈ ನಿಯಮ ಮುರಿಯುವ ದಿನನಿತ್ಯದ ಪದಗಳೂ ಇವೆ: have (ಹ್ಯಾವ಼್), give (ಗಿವ಼್), come (ಕಮ್), love (ಲವ಼್). he, she, me, we ಪದಗಳಲ್ಲಿ ಕೊನೆಯ e ಮೌನವಲ್ಲ; ಅದು ಈ ಎಂದು ಕೇಳಿಸುತ್ತದೆ: ಹೀ, ಶೀ, ಮೀ, ವೀ.</p>',
    '<p>ಇನ್ನಷ್ಟು ಅಪವಾದಗಳು: school ಪದದಲ್ಲಿ ch = ಕ (ಸ್ಕೂಲ್); book, good ಪದಗಳಲ್ಲಿ oo = ಉ (ಬುಕ್, ಗುಡ್); bread, head ಪದಗಳಲ್ಲಿ ea = ಎ (ಬ್ರೆಡ್, ಹೆಡ್). ಪದದ ಮೊದಲಿನ kn ನಲ್ಲಿ k ಮೌನ; ಅದೇ ರೀತಿ wr ನಲ್ಲಿ w ಮೌನ: write = ರೈಟ್. ಹೊಸ ಪದ ಕಂಡಾಗ ಕೆಳಗಿನ ಕೋಷ್ಟಕದ ಸಹಾಯದಿಂದ ಊಹಿಸಿ ಓದಿ, ನಂತರ ಆಡಿಯೊದಲ್ಲಿ ಕೇಳಿ ಪರೀಕ್ಷಿಸಿ.</p>',
    TABLE,
    TILES,
])

CARDS = [
    ('ship', 'ಶಿಪ್', 'ಹಡಗು'),
    ('chair', 'ಚೆರ್', 'ಕುರ್ಚಿ'),
    ('phone', 'ಫ಼ೋನ್', 'ಫೋನ್'),
    ('knife', 'ನೈಫ಼್', 'ಚಾಕು'),
    ('cake', 'ಕೇಕ್', 'ಕೇಕ್'),
    ('five', 'ಫ಼ೈವ಼್', 'ಐದು'),
    ('nose', 'ನೋಜ಼್', 'ಮೂಗು'),
    ('sleep', 'ಸ್ಲೀಪ್', 'ನಿದ್ರೆ ಮಾಡು'),
    ('moon', 'ಮೂನ್', 'ಚಂದ್ರ'),
    ('night', 'ನೈಟ್', 'ರಾತ್ರಿ'),
]

# --- lessons.js ---
src = open(LESSONS, encoding='utf8').read()
assert MARK not in src, 'spelling section already applied to lessons.js'
assert src.count(ANCHOR) == 1, 'anchor (end of alphabet lesson) not found exactly once'
src = src.replace(ANCHOR, ANCHOR[:-len('`},')] + '\n' + SECTION + '`},')
open(LESSONS, 'w', encoding='utf8').write(src)

# --- sections.json (keep the file's hand formatting: one card per line, one-space indent steps) ---
js = open(SECTIONS, encoding='utf8').read()
J_ANCHOR = '   ["at", "ಆ್ಯಟ್", "@ (ಇಮೇಲ್ ವಿಳಾಸದಲ್ಲಿ)", ""]\n  ]}\n },'
assert '"4": {"add": [\n   ["ship"' not in js, 'spelling cards already applied to sections.json'
assert js.count(J_ANCHOR) == 1, 'sections.json anchor (end of alphabet "3") not found exactly once'
q = lambda s: '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
lines = ',\n'.join('   [%s, %s, %s, ""]' % (q(f), q(r), q(m)) for f, r, m in CARDS)
new = J_ANCHOR[:-len('\n },')] + ',\n  "4": {"add": [\n' + lines + '\n  ]}\n },'
js = js.replace(J_ANCHOR, new)
import json
json.loads(js)  # still valid JSON
open(SECTIONS, 'w', encoding='utf8').write(js)
print('spelling_kn: lesson section + %d cards added' % len(CARDS))

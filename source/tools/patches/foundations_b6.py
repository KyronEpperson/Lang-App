#!/usr/bin/env python3
# Character foundations, batch 6: en-nan (Taiwanese). The last older course leaves PENDING. usage: python3 tools/patches/foundations_b6.py <version>
import io, os, sys, re
V = sys.argv[1]
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def rw(rel, f):
    p = os.path.join(ROOT, rel); s = io.open(p, encoding='utf8').read(); t = f(s); assert t != s, rel; io.open(p, 'w', encoding='utf8').write(t)
def tests(s):
    a = " 'en-am':{lessons:['orders'"; assert s.count(a) == 1
    add = (" /* Taiwanese: Tâi-lô pieces on tiles (initials, vowels, nasals, endings, hummed syllables, tone marks); the eight tone animals and the MOE characters are a card and a tile; `characters` is lesson 7 */\n"
           " 'en-nan':{lessons:['initials','finals','tones','characters'],letters:[...'獅豹鱉猴狗象鹿虎毋佇欲食啉媠予囝睏蹛遮遐冊厝囥佮个'],tilesOnly:'p ph b m t th n l k kh g ng h ts tsh s j a e i o oo u'.split(' '),words:['initials','finals','characters'],soundOnly:['tones'],anywhere:true},\n")
    s = s.replace(a, add + a)
    b = "const PENDING='en-nan'.split(' ');"; assert s.count(b) == 1
    return s.replace(b, "const PENDING=[]; /* empty since %s: every older course has its foundation */" % V)
rw('tools/tests/foundations.js', tests)
def handoff(s):
    a = "  - Still to do: en-nan."; i = s.index(a); j = s.index('\n', i)
    note = """  - **Batch 6, %s: `en-nan`.** Owner's choice on the script (decision card, 2026-11-26): "Keep characters with Tâi-lô", as the course already was. Foundation lessons `initials`, `finals`, `tones` (lessons 1 to 3) and `characters` (lesson 7, not moved): tiles for the 17 initials, six vowels, nasal vowels, endings, hummed syllables and the tone marks; in-lesson decks "More initials", "Six vowels", "Nasal vowels", "Hummed syllables", "Tâi-lô words", "Words from characters". `sandhi` and `sandhi-2` are untouched. One Opus writer, one Opus cold review (all 61 new words and readings confirmed, 7 wording fixes).
  - Every course now has its foundation: `PENDING` in `tools/tests/foundations.js` is empty and stays empty.""" % V
    s = s[:i] + note + s[j:]
    return re.sub(r"^## Released \(through [0-9.]+\)", "## Released (through %s)" % V, s, flags=re.M)
rw('docs/HANDOFF.md', handoff)
rw('iterations.md', lambda s: s.rstrip('\n') + """

### FND-1 — batch 6 (%s): Taiwanese, the last course
Kii chose "Keep characters with Tâi-lô" on a decision card. en-nan gets its foundation in lessons 1 to 3 and 7. With it all 71 courses open with their writing system and the waiting list in the release test is empty. Not tested: native speakers, real phones.
""" % V)
print('batch 6 for', V)

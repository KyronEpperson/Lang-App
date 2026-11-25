#!/usr/bin/env python3
# DS-1 notes for docs/HANDOFF.md and iterations.md. usage: python3 tools/patches/deck_simple_docs.py <version>   (from the build home; safe to run twice)
import os, re, sys
V=sys.argv[1]
ROOT=os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..'))
H=os.path.join(ROOT,'docs','HANDOFF.md'); s=open(H,encoding='utf8').read()
NOTE=V+""" (2026-11-25): **the flashcard deck page shows only the quiz; its options moved behind a gear in the header** (owner, with a screenshot of Review: "there is too much going on for this page", keep the search box, "add your own", the deck card with Change deck, the quiz and the progress bar; then: "lets put the setting button next to the bug emoji at the top i think this is a good place to store settings and such"). Review now draws, top to bottom: the search box and "＋ Add your own phrase" (both always shown; they were behind More options), the deck card, the quiz, the progress bar. Gone from the page: Due / All / Browse, Audio, Speed, Blur romanization, the key hints, the "N due · N/M learned" line, Shuffle, Reset deck and the More options button. A new header button `#setBtn` (⚙, right after the bug button, on every page) opens the Settings sheet `#setSheet`: Audio, Speed and Blur romanization everywhere, plus, when Review is the open page, Due / All / Browse, Shuffle, Reset deck and the key hints. The controls kept their ids and handlers; only their place in the page changed. The sheet is a static element with class `setsheet` (not `sheet`, which `closeSheet()` removes); keys do not reach the quiz while it is open; Escape, ✕, a tap outside, a change of page, or choosing Due / All / Browse / Shuffle / Reset close it. Browse has a "← Back" button (`#brBack`) to return to the cards. `#left` is still written by the code but hidden. With the voice toggle the header has five buttons, so on phones under 370 px the title is smaller. One new interface string, "Settings", in all 27 dictionaries. Test `tools/tests/decksimple.js` (run by `ship.sh`); edit scripts `tools/patches/deck_simple.py`, `deck_simple_tests.py`, `deck_simple_i18n.py`. The owner sees the gear as the home for settings: the options on Progress ("Go to the next card automatically", "Show all options on every screen" and the rest) and the More options buttons on Practice, Lessons, Read and Progress were NOT moved; ask before doing that.

"""
if NOTE.split(':',1)[1][:60] not in s:
    m=re.search(r'## Released \(through (\d+\.\d+\.\d+)\)',s); assert m; s=s.replace(m.group(0),'## Released (through %s)'%V,1)
    a='\n## Section decks (SEC-1)'; assert s.count(a)==1; s=s.replace(a,'\n'+NOTE.rstrip('\n')+'\n'+a,1); open(H,'w',encoding='utf8').write(s); print('HANDOFF.md edited')
else: print('HANDOFF.md present')
I=os.path.join(ROOT,'iterations.md'); s=open(I,encoding='utf8').read()
if '### DS-1' not in s:
    s=s.rstrip('\n')+"""

### DS-1 — deck page without the clutter (%s)
Owner's request: Review had too much on it. Kept on the page: search, add your own phrase, deck card with Change deck, the quiz, the progress bar. Everything else moved into a Settings sheet behind a gear next to the bug button in the header (the owner first said "at the bottom", then chose the header). Decisions taken without asking: the count line is hidden, not moved; Audio, Speed and Blur show in the sheet on every page, the deck controls only on Review; Browse gets a Back button; choosing a mode, Shuffle or Reset closes the sheet. Tests: `tools/tests/decksimple.js` at 800, 390 and 320 px (42 checks), quiz flow and voice tests updated, harness. Not tested: real phones, screen readers.
"""%V
    open(I,'w',encoding='utf8').write(s); print('iterations.md edited')
else: print('iterations.md present')

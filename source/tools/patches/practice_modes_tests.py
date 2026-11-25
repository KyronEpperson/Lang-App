#!/usr/bin/env python3
# PM-1: test-side edits for the Practice rework. usage: python3 tools/patches/practice_modes_tests.py   (run from the build home; each replacement must match exactly once)
import re
def patch(p, pairs):
    s = open(p, encoding='utf8').read()
    for old, new, n in pairs:
        assert s.count(old) == n, (p, s.count(old), old[:90]); s = s.replace(old, new)
    open(p, 'w', encoding='utf8').write(s)
# harness.js: the picker is a dropdown; the Practice help paragraph is gone, so the guard keeps the rule constants and checks the four-mode screen
h = open('harness.js', encoding='utf8').read()
a = h.index('    g.memHelpSaysRule='); b = h.index('\n', a)
h = h[:a] + ("    g.memHelpSaysRule=/const MEM_HOLD=10, MEM_EARLIER=15;/.test(h)&&!/<b>Test everything<\\/b>/.test(h); /* MEM-2 rule numbers; the help paragraph that named them left the Practice screen with PM-1 */\n"
             "    g.practiceFour=/id=\"learnStart\" style=\"grid-column:1\\/3\">Learn<\\/button><button class=\"big miss\" id=\"weakStart\">Weak spots<\\/button>/.test(h)&&/id=\"examStart\"[^>]*>📝 Exam<\\/button>/.test(h)&&!/id=\"quizStart\"|data-advbtn=\"practice\"|<[a-z0-9]+ [^>]*data-adv=\"practice\"|function deckChips/.test(h)&&/id=\"setPractice\"[\\s\\S]{0,200}id=\"quizModes\"/.test(h)&&/function deckSelects\\(/.test(h)&&/id=\"justLearn\"/.test(h)&&/id=\"runDeck\"/.test(h)&&!/\"Dating deeper\"/.test(h); /* PM-1: Practice offers Learn, Weak spots, blitz and Exam only; its options are in the Settings sheet; the deck picker is two dropdowns; Change deck and Just learn exist; the deck is called Intimate (flows: tools/tests/practicemodes.js) */") + h[b:]
old = "document.querySelectorAll('#quizDecks .chip').length>0"; assert h.count(old) == 1
h = h.replace(old, "document.querySelectorAll('#quizDecks select option').length>0")
open('harness.js', 'w', encoding='utf8').write(h)
# trainer recording: the deck name only
patch('tools/tests/golden/en-ko-trainers.json', [('Dating deeper', 'Intimate', 78)])
# ship.sh runs the new test after the deck-page test
s = open('tools/curriculum/ship.sh', encoding='utf8').read()
m = re.search(r"\nnode tools/tests/decksimple\.js[^\n]*\n", s); assert m
line = "node tools/tests/practicemodes.js > /tmp/claude-0/practicemodes.out 2>&1 || { echo 'PRACTICE MODES TEST FAIL'; grep -v '^PASS' /tmp/claude-0/practicemodes.out | head -20; exit 1; }; echo \"practice modes: $(grep -c '^PASS' /tmp/claude-0/practicemodes.out) pass\"\n"
if 'practicemodes.js' not in s: s = s[:m.end()] + line + s[m.end():]
open('tools/curriculum/ship.sh', 'w', encoding='utf8').write(s)
print('practice_modes_tests: ok')

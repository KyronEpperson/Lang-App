#!/usr/bin/env python3
# WS-1: hand-off notes for the two-step welcome screen. usage: welcome_steps_docs.py <version>. Safe to run twice.
import os, re, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
V = sys.argv[1]
def edit(rel, fn):
    f = os.path.join(ROOT, rel); s = open(f, encoding='utf8').read()
    if 'WS-1' in s: print(rel, 'present'); return
    open(f, 'w', encoding='utf8').write(fn(s)); print(rel, 'updated')
H = V + """ (2026-11-25): **the welcome screen asks one thing at a time: nickname first, then the optional email** (owner: "make the first screen a nickname choice then the second screen be the email option for saving progress across devices. i think a lot of people were getting confused when they are parallel"). Entry WS-1 in `iterations.md`. Before, the first screen showed "Email" and "Nickname" as two choices side by side. Now `showWelcome` in `src/app.html` has step 1 "What should we call you?" (nickname, Continue) and step 2 "Save your progress across devices?" (optional email, Send sign-in link, and "Skip for now" with the this-device-only warning). Decisions taken without asking: a small "I already have an account" button on step 1 opens the email step without a nickname (someone returning on a new device); the nickname is saved when step 1 is sent, so it survives the reload of the sign-in link, and a reload in the middle of step 2 lands in the app as if skipped; Back from step 2 shows the nickname again; the email box is not focused on step 2 so a phone keyboard does not cover Skip; "1 / 2" and "2 / 2" are shown as numbers. The sign-in code itself (`sbSendLink`, `codeBox`, `sbVerify`) is untouched; publishable key only. Four new lines in all 27 dictionaries (written in the main chat, no native review; Hmong built from phrases already in its dictionary): `I already have an account`, `Save your progress across devices?`, `Optional. Add your email and your progress follows you to any phone or computer. No password.`, `Skip for now`. No longer shown (left in the dictionaries): `How should we save your progress?`, `Saves across all your devices`, `This device only — lost if browser data is cleared`, `Start learning` on this screen. Guard `welcomeSteps` in `harness.js`; `fxPreNative`, `langHomeNew` and the Japanese boot guard walk the new steps. `tools/site/lazy.js` and `tools/tests/quizflow.js` were updated too: the first clicked the old side-by-side choices, the second pressed keys with the welcome screen still open (it now opens on a focused nickname box). Edit scripts: `tools/patches/welcome_steps.py`, `welcome_steps_harness.py`, `welcome_steps_i18n.py`, `welcome_steps_docs.py`. Screens: project files `welcome-steps/`. Not tested: a real sign-in email end to end (no email is sent in tests), real phones, the new lines by native speakers.

"""
def handoff(s):
    a = '## Section decks (SEC-1)'; assert s.count(a) == 1
    s = s.replace(a, H + a)
    s, n = re.subn(r'## Released \(through [0-9.]+\)', '## Released (through %s)' % V, s); assert n == 1
    return s
I = """
## WS-1 — prompt
Kii: "lets also make the first screen a nickname choice then the second screen be the email option for saving progress across devices. i think a lot of people were getting confused when they are parallel". Rewritten: the welcome screen offers Email and Nickname side by side and new people think they must pick one; make it two steps in a row, nickname first, then an optional email to save progress across devices with a clear way to skip; whole app, all 27 interface languages, publishable key only.

### WS-1 — results (""" + V + """)
`showWelcome`: step 1 nickname and Continue, step 2 optional email with "Skip for now"; "I already have an account" on step 1 for people returning on a new device. Four new lines in 27 dictionaries. Tests: harness guard `welcomeSteps` (step 1 has no email box and no side-by-side choices, an empty nickname is refused, the nickname is saved and trimmed, step 2 has the email box and Skip and does not focus the email box, Back keeps the nickname, the account path has no Skip, Skip finishes). Screens checked at 390 px and 1280 px in English, Spanish, Arabic, Japanese and German: no overflow. Not tested: a real sign-in email end to end, real phones, native speakers.
"""
edit('docs/HANDOFF.md', handoff)
edit('iterations.md', lambda s: s.rstrip('\n') + '\n' + I)
def ll(s):
    m = re.search(r'^\| 81 \|.*\n', s, re.M); assert m
    note = "\nWS-1 (%s): the welcome screen is two steps. Step 1 = nickname (rows 72, 74, 79 plus `Continue` and `I already have an account`); step 2 = optional email (rows 62, 70, 76, 77, 78, 81 plus `Save your progress across devices?`, `Optional. Add your email and your progress follows you to any phone or computer. No password.`, `Skip for now`; row 75 is the heading on the \"I already have an account\" path). Rows 69, 71, 73 and 80 are no longer shown there.\n" % V
    rest = s[m.end():]; k = re.search(r'^(?!\|)', rest, re.M); p = m.end() + k.start()
    return s[:p] + note + s[p:]
edit('docs/LL-KEYS.md', ll)

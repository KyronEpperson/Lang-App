#!/usr/bin/env python3
"""hmn-en: append the spelling-patterns section to lesson 1 (alphabet) and its flashcards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/hmn/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/hmn-en/sections.json")

H3 = "<h3>Tsiaj ntawv ua ke: lus Askiv sau lub suab li cas</h3>"
ANCHOR = "<b>mai dot vang at example dot com</b>.</div>`},"

def row(p, ipa, ex):
    return f'<tr><td class="k">{p}</td><td class="k">{ipa}</td><td class="k">{ex}</td></tr>'

ROWS = [
    ("sh", "/ʃ/", "shop, fish"),
    ("ch", "/tʃ/", "chicken, lunch"),
    ("th", "/θ/, /ð/", "bath, mother"),
    ("ph", "/f/", "phone, photo"),
    ("kn", "/n/", "knife, know"),
    ("a-e", "/eɪ/", "cake, name"),
    ("i-e", "/aɪ/", "time, five"),
    ("o-e", "/oʊ/", "home, nose"),
    ("ee", "/iː/", "green, feet"),
    ("ea", "/iː/", "eat, tea"),
    ("oo", "/uː/", "food, moon"),
    ("igh", "/aɪ/", "night, high"),
]

SECTION = (
    "\n" + H3 + "\n"
    "<p>Hauv RPA, ob peb tus tsiaj ntawv ua ib lub suab (<b>ts</b>, <b>nk</b>, <b>ee</b>, <b>oo</b>), thiab tus consonant kawg yog cim (tone). "
    "Lus Askiv kuj muab tsiaj ntawv ua ke, tab sis lawv hais txawv, thiab lawv tsis yog tone. Nco ntsoov cov no:</p>\n"
    "<p><b>sh</b> ze RPA s, <b>ch</b> ze RPA ts. RPA <b>ch</b>, <b>th</b> thiab <b>ph</b> yog c, t thiab p muaj cua; "
    "lus Askiv <b>th</b> yog /θ/ los yog /ð/, <b>ph</b> yog /f/. RPA <b>ee</b> thiab <b>oo</b> muaj /ŋ/ kawg (neeg, Hmoob); "
    "lus Askiv <b>ee</b> yog /iː/, <b>oo</b> yog /uː/, tsis muaj /ŋ/. Hauv <b>kn</b> thiab <b>igh</b>, koj tsis hais k, thiab hauv igh koj hais /aɪ/ xwb.</p>\n"
    "<p><b>e</b> kawg (a-e, i-e, o-e) nkaus li RPA tus tsiaj ntawv kawg: koj tsis hais nws. Tab sis lwm tus consonant kawg, koj yuav tsum hais. "
    "Nws ua rau tus vowel ua ntej hais nws lub npe: <b>cake</b> /keɪk/, tsis yog /kæk/. "
    "Tab sis <b>he, she, me, we</b> tsuas muaj ib tus vowel, thiab e kawg hais /iː/.</p>\n"
    "<p>Txhua txoj cai muaj lo lus tsis raws: <b>have, give, come, love</b> (e kawg, tab sis vowel tsis hais nws lub npe), "
    "<b>book, good</b> (oo = /ʊ/), <b>bread, head</b> (ea = /e/), <b>school</b> (ch = /k/). "
    "Yuav hais th li cas, koj yuav kawm hauv lesson tom ntej.</p>\n"
    '<div class="tbl"><table><tr><th>Tsiaj ntawv</th><th>Hais li cas</th><th>Lo lus</th></tr>'
    + "".join(row(*r) for r in ROWS) + "</table></div>\n"
    "{{tiles:sh=/ʃ/ ch=/tʃ/ th=/θ/,_/ð/ ph=/f/ kn=/n/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ igh=/aɪ/}}"
)

CARDS = [
    ["shop", "/ʃɑːp/", "khw; tsev muag khoom", ""],
    ["chicken", "/ˈtʃɪkən/", "qaib; nqaij qaib", ""],
    ["phone", "/foʊn/", "xov tooj", ""],
    ["knife", "/naɪf/", "riam", ""],
    ["cake", "/keɪk/", "ncuav qab zib", ""],
    ["time", "/taɪm/", "sij hawm", ""],
    ["home", "/hoʊm/", "tsev", ""],
    ["green", "/griːn/", "ntsuab", ""],
    ["food", "/fuːd/", "zaub mov", ""],
    ["night", "/naɪt/", "hmo ntuj", ""],
]

# 1. lesson body
src = open(LESSONS, encoding="utf-8").read()
assert H3 not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-3] + SECTION + "`},", 1)
open(LESSONS, "w", encoding="utf-8").write(src)

# section number = index of the new <h3> in the alphabet body
body = src.split('{ id:"alphabet"', 1)[1].split('{ id:"pron"', 1)[0]
idx = body.count("<h3>") - 1
assert idx == 4, idx

# 2. sections.json (indent 1, raw UTF-8, no trailing newline)
raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
assert json.dumps(data, indent=1, ensure_ascii=False) == raw, "unexpected sections.json formatting"
alpha = data.setdefault("alphabet", {})
assert str(idx) not in alpha, "sections entry already present"
alpha[str(idx)] = {"add": CARDS}
open(SECTIONS, "w", encoding="utf-8").write(json.dumps(data, indent=1, ensure_ascii=False))
print("spelling_hmn: section", idx, "added with", len(CARDS), "cards")

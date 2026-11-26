#!/usr/bin/env python3
"""Spelling-patterns section for ceb-en lesson 1 (alphabet): lesson body + section cards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/ceb/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/ceb-en/sections.json")

H3 = "<h3>Mga letra nga magkuyog: gikan sa sulat ngadto sa tingog</h3>"

def row(p, s, ex):
    return f'<tr><td class="k">{p}</td><td>{s}</td><td>{ex}</td></tr>'

ROWS = [
    ("sh", "/ʃ/", "shop /ˈʃɑːp/ · fish /ˈfɪʃ/"),
    ("ch", "/tʃ/", "chair /ˈtʃer/ · lunch /ˈlʌntʃ/"),
    ("ph", "/f/", "phone /ˈfoʊn/ · photo /ˈfoʊtoʊ/"),
    ("ck", "/k/", "clock /ˈklɑːk/ · duck /ˈdʌk/"),
    ("kn · wr", "/n/ · /r/ (hilom ang k ug w)", "knife /ˈnaɪf/ · write /ˈraɪt/"),
    ("a-e", "/eɪ/ (hilom ang e)", "cake /ˈkeɪk/ · name /ˈneɪm/"),
    ("i-e", "/aɪ/ (hilom ang e)", "bike /ˈbaɪk/ · time /ˈtaɪm/"),
    ("o-e", "/oʊ/ (hilom ang e)", "home /ˈhoʊm/ · nose /ˈnoʊz/"),
    ("ee · ea", "/iː/", "green /ˈgriːn/ · eat /ˈiːt/"),
    ("oo", "/uː/", "food /ˈfuːd/ · moon /ˈmuːn/"),
    ("ou · ow", "/aʊ/", "house /ˈhaʊs/ · cow /ˈkaʊ/"),
    ("igh", "/aɪ/ (hilom ang gh)", "night /ˈnaɪt/ · high /ˈhaɪ/"),
]

TILES = ("{{tiles:sh=/ʃ/ ch=/tʃ/ ph=/f/ ck=/k/ kn=/n/ wr=/r/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ "
         "ee=/iː/ ea=/iː/ oo=/uː/ ou=/aʊ/ ow=/aʊ/ igh=/aɪ/}}")

SECTION = "\n" + H3 + "\n" + (
    "<p>Sa Bisaya, kasagaran usa ra ka tingog ang matag letra, mao nga basahon nato ang pulong sumala sa sulat. "
    "Sa Iningles, usahay duha o tulo ka letra ang magkuyog para sa <b>usa ka tingog</b>, ug naay mga letra nga "
    "<b>hilom</b> (walay tingog). Kini ang mga pattern nga labing lahi sa atong ispeling. "
    "Ang tingog sa <b>th</b> tun-an nato sa sunod nga leksyon.</p>\n"
    "<p>Ang <b>e</b> sa kataposan sa pulong kasagaran hilom, pero usbon niini ang vowel sa atubangan: "
    "mahimo kining sama sa <b>ngalan sa letra</b>, A /eɪ/, I /aɪ/, O /oʊ/. Naay eksepsyon: mubo ang vowel sa "
    "<b>have</b> /ˈhæv/, <b>give</b> /ˈgɪv/, <b>come</b> /ˈkʌm/ ug <b>love</b> /ˈlʌv/. "
    "Ug sa mubong pulong nga <b>he, she, me, we</b>, dili hilom ang e: /iː/ ang litok.</p>\n"
    "<p>Bantayi sab ang ubang pulong nga lahi sa pattern: /k/ ang ch sa <b>school</b> /ˈskuːl/; mubo nga /ʊ/ ang oo sa "
    "<b>book</b> /ˈbʊk/ ug <b>good</b> /ˈgʊd/; /e/ ang ea sa <b>bread</b> /ˈbred/ ug <b>head</b> /ˈhed/; "
    "/uː/ ang ou sa <b>you</b> /ˈjuː/; ug /oʊ/ ang ow sa <b>snow</b> /ˈsnoʊ/. "
    "Kon dili ka sigurado, tan-awa ang IPA sa card.</p>\n"
    '<div class="tbl"><table><tr><th>Letra</th><th>Tingog</th><th>Pananglitan</th></tr>'
    + "".join(row(*r) for r in ROWS) + "</table></div>\n" + TILES
)

ANCHOR = '<b>A-N-A dot R-E-Y-E-S at mail dot com</b>.</div>`},'

src = open(LESSONS, encoding="utf-8").read()
assert H3 not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-3] + SECTION + "`},")
open(LESSONS, "w", encoding="utf-8").write(src)

CARDS = [
    ["fish", "/ˈfɪʃ/", "isda", ""],
    ["chair", "/ˈtʃer/", "lingkoranan", ""],
    ["phone", "/ˈfoʊn/", "telepono", ""],
    ["duck", "/ˈdʌk/", "pato", ""],
    ["knife", "/ˈnaɪf/", "kutsilyo", ""],
    ["write", "/ˈraɪt/", "mosulat", ""],
    ["cake", "/ˈkeɪk/", "keyk", ""],
    ["moon", "/ˈmuːn/", "bulan (sa langit)", ""],
    ["house", "/ˈhaʊs/", "balay", ""],
    ["night", "/ˈnaɪt/", "gabii", ""],
]

raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
assert "4" not in data["alphabet"], "section 4 cards already applied"
SANCHOR = '   ["at", "/ˈæt/", "@ sa email address", ""]\n  ]}\n },\n "pron"'
assert raw.count(SANCHOR) == 1, "sections.json anchor not found exactly once"
block = (',\n  "4": {"add": [\n'
         + ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
         + "\n  ]}")
raw = raw.replace(SANCHOR, SANCHOR.replace('  ]}\n },', '  ]}' + block + '\n },'))
check = json.loads(raw)
assert check["alphabet"]["4"]["add"] == CARDS
open(SECTIONS, "w", encoding="utf-8").write(raw)
print("spelling_ceb: lesson section and", len(CARDS), "cards added")

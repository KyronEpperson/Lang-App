#!/usr/bin/env python3
"""Spelling-patterns section for tl-en lesson 1 (alphabet): lesson body + section cards."""
import json, os, re

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/tl/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/tl-en/sections.json")

MARK = "<h3>Mula titik hanggang tunog: mga pinagsamang titik</h3>"
ANCHOR = "<b>A-N-A dot S-A-N-T-O-S at mail dot com</b>.</div>`},"

ROWS = [
    ("sh", "/ʃ/", "fish, shoe"),
    ("ch", "/tʃ/", "chair, lunch (pero /k/ sa school)"),
    ("ph", "/f/", "phone, photo"),
    ("kn", "/n/ (tahimik ang k)", "knife, know"),
    ("a-e", "/eɪ/", "cake, name"),
    ("i-e", "/aɪ/", "bike, time"),
    ("o-e", "/oʊ/", "nose, home"),
    ("ee", "/iː/", "green, feet"),
    ("ea", "/iː/", "eat, tea (pero /e/ sa bread, head)"),
    ("oo", "/uː/", "moon, room (pero /ʊ/ sa book, good)"),
    ("ou", "/aʊ/", "house, out (pero /uː/ sa you)"),
    ("igh", "/aɪ/ (tahimik ang gh)", "night, high"),
]
TILES = "sh=/ʃ/ ch=/tʃ/ ph=/f/ kn=/n/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ ou=/aʊ/ igh=/aɪ/"

table = ('<div class="tbl"><table><tr><th>Mga titik</th><th>Tunog (IPA)</th><th>Halimbawa</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in ROWS)
         + "</table></div>")

SECTION = (
    "\n" + MARK + "\n"
    "<p>Sa Tagalog, binabasa ang salita kung paano ito isinulat: isang titik, isang tunog. Hindi ganito sa Ingles. "
    "Madalas, <b>dalawa o tatlong titik</b> ang nagsasama para sa iisang tunog, at may mga titik na <b>hindi binibigkas</b>. "
    "Kaya hindi \"fis-h\" ang <b>fish</b> at hindi \"ka-ke\" ang <b>cake</b>. Ito ang mga pinagsamang titik na pinakamadalas mong makikita. "
    "Kung paano basahin ang mga simbolong gaya ng /ʃ/ at /iː/, ipapaliwanag iyan sa susunod na aralin.</p>\n"
    "<p>Tahimik ang <b>e sa dulo</b> ng a-e, i-e at o-e. Ang ginagawa nito ay ipabasa ang vowel bago ito gaya ng <b>pangalan</b> ng titik: "
    "parang A ang a sa <b>cake</b>, parang I ang i sa <b>bike</b>, parang O ang o sa <b>nose</b>. "
    "May mga eksepsiyon: maikli ang vowel sa <b>have, give, come, love</b>, at binibigkas ang e kapag ito lang ang vowel ng salita, gaya ng <b>he, she, me, we</b>.</p>\n"
    + table + "\n"
    "{{tiles:" + TILES + "}}\n"
    "<p>Hindi rin laging pareho ang basa ng ibang pinagsamang titik: /k/ ang ch sa <b>school</b>, maikli ang oo sa <b>book</b> at <b>good</b>, "
    "/e/ ang ea sa <b>bread</b> at <b>head</b>, at /uː/ ang ou sa <b>you</b>. Kapag bago sa iyo ang isang salita, tingnan ang bigkas sa card bago ito sabihin.</p>"
)

CARDS = [
    ["fish", "/ˈfɪʃ/", "isda", ""],
    ["chair", "/ˈtʃer/", "upuan", ""],
    ["phone", "/ˈfoʊn/", "telepono / cellphone", ""],
    ["knife", "/ˈnaɪf/", "kutsilyo", ""],
    ["cake", "/ˈkeɪk/", "keyk", ""],
    ["bike", "/ˈbaɪk/", "bisikleta", ""],
    ["nose", "/ˈnoʊz/", "ilong", ""],
    ["green", "/ˈgriːn/", "berde / luntian", ""],
    ["moon", "/ˈmuːn/", "buwan (sa langit)", ""],
    ["night", "/ˈnaɪt/", "gabi", ""],
]
SEC_NO = "4"  # sections: 0 letters, 1 confusable names, 2 spelling aloud, 3 a/an, 4 this one

# 1) lesson body
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "lesson patch already applied"
assert src.count(ANCHOR) == 1, "anchor not unique"
src = src.replace(ANCHOR, ANCHOR[: -len("`},")] + SECTION + "`},")
open(LESSONS, "w", encoding="utf-8").write(src)

# 2) sections.json (hand-formatted file: insert text in the same style)
raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
assert SEC_NO not in data["alphabet"], "sections patch already applied"
m = re.search(r'\n  \], "drop": \[\]\}\n \},\n "pron": \{', raw)
assert m, "sections anchor not found"
lines = ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
block = f',\n  "{SEC_NO}": {{"add": [\n{lines}\n  ], "drop": []}}'
pos = m.start() + len('\n  ], "drop": []}')
raw = raw[:pos] + block + raw[pos:]
new = json.loads(raw)
assert new["alphabet"][SEC_NO]["add"] == CARDS
open(SECTIONS, "w", encoding="utf-8").write(raw)
print("spelling_tl: applied")

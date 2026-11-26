#!/usr/bin/env python3
"""Spelling patterns: new last section of te alphabet lesson + its flashcards (te-en)."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/te/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/te-en/sections.json")

H3 = '<h3>అక్షరాలు కలిస్తే: స్పెల్లింగ్ నుంచి శబ్దం</h3>'

ROWS = [
    ("sh", "ష్", "shop = షాప్, fish = ఫిష్"),
    ("ch", "చ్", "chair = చెర్, lunch = లంచ్"),
    ("th", "థ఼ / ద఼", "thank = థ఼్యాంక్, mother = ˈమద఼ర్"),
    ("ph", "ఫ్", "phone = ఫోన్, photo = ˈఫోటో"),
    ("kn", "న్", "know = నో, knife = నైఫ్"),
    ("a-e", "ఏ", "name = నేమ్, cake = కేక్"),
    ("i-e", "ఐ", "time = టైమ్, bike = బైక్"),
    ("o-e", "ఓ", "home = హోమ్, nose = నోజ఼్"),
    ("ee", "ఈ", "see = సీ, green = గ్రీన్"),
    ("ea", "ఈ", "tea = టీ, eat = ఈట్"),
    ("oo", "ఊ", "food = ఫూడ్, moon = మూన్"),
    ("igh", "ఐ", "night = నైట్, high = హై"),
]

table = ('<div class="tbl"><table><tr><th>అక్షరాలు</th><th>శబ్దం</th><th>ఉదాహరణలు</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in ROWS)
         + '</table></div>')

tiles = "{{tiles:" + " ".join(f"{p}={s.replace(' ', '_')}" for p, s, _ in ROWS) + "}}"

SECTION = "\n".join([
    H3,
    '<p>తెలుగులో ఒక అక్షరానికి ఒకే శబ్దం; రాసినట్టే చదువుతాం. ఇంగ్లీష్‌లో అలా కాదు. అక్షరాల పేర్లు తెలిస్తే చాలదు: '
    'రెండు మూడు అక్షరాలు కలిసి <b>ఒకే శబ్దం</b> ఇస్తాయి, కొన్ని అక్షరాలు అసలు పలకవు. కొత్త పదం చదివేటప్పుడు ముందు ఈ కలయికల కోసం చూడండి.</p>',
    '<p><b>ph</b> అంటే ప + హ కాదు, f శబ్దం (ఫ్): phone = ఫోన్. <b>kn</b> లో k పలకదు. <b>th</b> కి రెండు శబ్దాలు ఉన్నాయి; '
    'వాటిని తర్వాతి పాఠంలో చూస్తారు. <b>ch</b> సాధారణంగా చ్, కానీ school, Christmas లాంటి కొన్ని పదాల్లో క్ (స్కూల్, ˈక్రిస్మస్).</p>',
    '<p>పదం చివరి <b>e</b> సాధారణంగా పలకదు; అది ముందున్న అచ్చును ఆ అక్షరం పేరులా పలికిస్తుంది: a-e = ఏ, i-e = ఐ, o-e = ఓ. '
    'మినహాయింపులు రోజూ వచ్చే పదాలే: have = హ్యావ఼్, give = గివ఼్, come = కమ్, love = లవ఼్. '
    'he, she, me, we లాంటి చిన్న పదాల్లో చివరి e పలుకుతుంది: హీ, షీ, మీ, వీ. '
    '<b>ee</b> దాదాపు ఎప్పుడూ ఈ. <b>ea</b> కూడా సాధారణంగా ఈ, కానీ bread = బ్రెడ్, head = హెడ్ లో ఎ. '
    '<b>oo</b> సాధారణంగా ఊ, కానీ book = బుక్, good = గుడ్ లో పొట్టి ఉ. <b>igh</b> లో gh పలకదు.</p>',
    table,
    tiles,
])

ANCHOR = 'విదేశాల్లో at చాలు.</div>`},'

CARDS = [
    ["fish", "ఫిష్", "చేప (sh = ష్)", ""],
    ["lunch", "లంచ్", "మధ్యాహ్న భోజనం (ch = చ్)", ""],
    ["phone", "ఫోన్", "ఫోన్ (ph = ఫ్)", ""],
    ["knife", "నైఫ్", "కత్తి (k పలకదు)", ""],
    ["cake", "కేక్", "కేక్ (a-e = ఏ)", ""],
    ["bike", "బైక్", "సైకిల్ / బైక్ (i-e = ఐ)", ""],
    ["home", "హోమ్", "ఇల్లు (o-e = ఓ)", ""],
    ["green", "గ్రీన్", "ఆకుపచ్చ (ee = ఈ)", ""],
    ["food", "ఫూడ్", "ఆహారం (oo = ఊ)", ""],
    ["night", "నైట్", "రాత్రి (igh = ఐ)", ""],
]
SEC_NO = "4"

# --- lesson body ---
src = open(LESSONS, encoding="utf-8").read()
assert H3 not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not unique / missing"
src = src.replace(ANCHOR, ANCHOR.replace('</div>`},', '</div>\n' + SECTION + '`},'))
open(LESSONS, "w", encoding="utf-8").write(src)

# --- sections.json (hand-formatted: keep its style, edit as text) ---
txt = open(SECTIONS, encoding="utf-8").read()
data = json.loads(txt)
assert SEC_NO not in data["alphabet"], "alphabet section 4 cards already present"
SANCHOR = '   ["dot", "డాట్", "చుక్క (.) (ఈమెయిల్ అడ్రస్‌లో)", ""]\n  ]}\n },'
assert txt.count(SANCHOR) == 1, "sections anchor not found"
card_lines = ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
new = SANCHOR[:-len("\n },")] + ',\n  "' + SEC_NO + '": {"add": [\n' + card_lines + '\n  ]}\n },'
txt = txt.replace(SANCHOR, new)
json.loads(txt)
open(SECTIONS, "w", encoding="utf-8").write(txt)
print("spelling_te: lesson section + %d cards applied" % len(CARDS))

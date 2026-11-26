#!/usr/bin/env python3
"""Spelling-patterns section for fr-en lesson 1 (alphabet): lesson body + section cards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/fr/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/fr-en/sections.json")

MARK = "<h3>Des lettres aux sons : les groupes de lettres</h3>"
ANCHOR = "et tu épelles chaque partie si on te le demande.</div>`},"

ROWS = [
    ("sh", "/ʃ/ : notre « ch »", "shop /ˈʃɑːp/, fish /ˈfɪʃ/"),
    ("wh", "/w/ : le « ou » de « oui » (mais /h/ devant o : <i>who</i>, <i>whole</i>)", "white /ˈwaɪt/, when /ˈwen/"),
    ("qu", "/kw/ : presque toujours, rarement un simple « k »", "queen /ˈkwiːn/, quick /ˈkwɪk/"),
    ("ee, ea", "/iː/ : « i » long, ni « é » ni « é-a » (<i>ea</i> parfois /e/ : <i>bread</i>, <i>head</i>)", "green /ˈgriːn/, tea /ˈtiː/"),
    ("oo", "/uː/ : « ou » long (souvent bref /ʊ/ : <i>book</i>, <i>good</i>)", "moon /ˈmuːn/, school /ˈskuːl/"),
    ("ou, ow", "/aʊ/ : « a » qui glisse vers « ou » (<i>ow</i> parfois /oʊ/ : <i>snow</i> ; <i>ou</i> parfois /uː/ : <i>you</i>, <i>soup</i>)", "house /ˈhaʊs/, down /ˈdaʊn/"),
    ("ai, ay", "/eɪ/ : pas « è », le son glisse vers « i » (sauf <i>said</i> /ˈsed/)", "rain /ˈreɪn/, play /ˈpleɪ/"),
    ("igh", "/aɪ/ : comme « aïe », gh muet", "night /ˈnaɪt/, light /ˈlaɪt/"),
    ("a-e", "/eɪ/ : e final muet, le A se prononce comme son nom", "cake /ˈkeɪk/, name /ˈneɪm/"),
    ("i-e", "/aɪ/ : e final muet, le I se prononce comme son nom", "time /ˈtaɪm/, bike /ˈbaɪk/"),
    ("o-e", "/oʊ/ : e final muet, le O se prononce comme son nom", "home /ˈhoʊm/, nose /ˈnoʊz/"),
    ("kn, wr", "/n/, /r/ : k et w muets", "knife /ˈnaɪf/, write /ˈraɪt/"),
]

table = ('<div class="tbl"><table><tr><th>Lettres</th><th>Son</th><th>Exemples</th></tr>'
         + "".join(f'<tr><td class="k">{a}</td><td>{b}</td><td>{c}</td></tr>' for a, b, c in ROWS)
         + "</table></div>")

TILES = ("{{tiles:sh=/ʃ/ wh=/w/ qu=/kw/ ee=/iː/ ea=/iː/ oo=/uː/ ou=/aʊ/ ow=/aʊ/ ai=/eɪ/ ay=/eɪ/ "
         "igh=/aɪ/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ kn=/n/ wr=/r/}}")

SECTION = "\n".join([
    MARK,
    "<p>Connaître le nom des lettres ne suffit pas pour lire un mot à voix haute. En anglais, deux ou trois lettres "
    "s'associent souvent pour former un seul son, et ce son est souvent différent de celui que tu lirais en français. "
    "Le piège, ce sont nos propres habitudes : chez nous, <i>ou</i> se lit « ou », mais <i>house</i> se dit /ˈhaʊs/ ; "
    "<i>ai</i> se lit « è », mais <i>rain</i> glisse vers « i ». Voici les groupes qui surprennent le plus un francophone. "
    "Le <i>th</i> et le <i>ch</i> sont expliqués dans la leçon suivante.</p>",
    table,
    TILES,
    "<p>Trois réflexes à garder. Le <i>e</i> final de <i>cake</i>, <i>time</i> ou <i>home</i> ne se prononce pas, "
    "mais il change souvent la voyelle d'avant : elle se prononce alors comme son nom de lettre. Compare <i>not</i> /ˈnɑːt/ et <i>note</i> /ˈnoʊt/. Attention, des mots très courants font exception : <i>have</i> /ˈhæv/, <i>give</i> /ˈgɪv/, <i>come</i> /ˈkʌm/, <i>love</i> /ˈlʌv/. "
    "Ensuite, dans <i>kn</i> et <i>wr</i>, la première lettre est muette : <i>knife</i> commence par un « n », "
    "<i>write</i> par un « r ». Enfin, <i>qu</i> se dit /kw/, avec le « ou » de « oui » : <i>quick</i> ne commence pas comme « qui ».</p>",
])

CARDS = [
    ["shop", "/ˈʃɑːp/", "magasin, boutique", ""],
    ["white", "/ˈwaɪt/", "blanc / blanche", ""],
    ["queen", "/ˈkwiːn/", "reine", ""],
    ["green", "/ˈgriːn/", "vert / verte", ""],
    ["moon", "/ˈmuːn/", "lune", ""],
    ["house", "/ˈhaʊs/", "maison", ""],
    ["rain", "/ˈreɪn/", "pluie", ""],
    ["night", "/ˈnaɪt/", "nuit", ""],
    ["cake", "/ˈkeɪk/", "gâteau", ""],
    ["knife", "/ˈnaɪf/", "couteau", ""],
]
SECTION_NO = "4"  # 0 = Les 26 lettres, 1 = confondent, 2 = Épeler, 3 = a ou an, 4 = this section

# lesson body
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-len("`},")] + "\n" + SECTION + "`},")
open(LESSONS, "w", encoding="utf-8").write(src)

# sections.json (1-space indent, no trailing newline, non-ASCII kept)
raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
alpha = data["alphabet"]
assert SECTION_NO not in alpha, "section cards already present"
alpha[SECTION_NO] = {"add": CARDS}
data["alphabet"] = dict(sorted(alpha.items(), key=lambda kv: int(kv[0])))
out = json.dumps(data, ensure_ascii=False, indent=1)
if raw.endswith("\n"):
    out += "\n"
open(SECTIONS, "w", encoding="utf-8").write(out)
print("spelling_fr: applied")

#!/usr/bin/env python3
"""Append the spelling-patterns section to the it-en `alphabet` lesson and add its flashcards."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, "tools/content/it/lessons.js")
SECTIONS = os.path.join(ROOT, "tools/sections/it-en/sections.json")

ANCHOR = "si detta <i>marco dot rossi at example dot com</i>.</div>`},"
MARK = "<h3>Dalle lettere ai suoni: le combinazioni da riconoscere</h3>"

ROWS = [
    ("sh", "/ʃ/", "shop /ˈʃɑːp/, fish /ˈfɪʃ/"),
    ("ph", "/f/", "phone /ˈfoʊn/, alphabet /ˈælfəbet/"),
    ("wh", "/w/", "white /ˈwaɪt/, what /ˈwʌt/"),
    ("kn", "/n/", "knife /ˈnaɪf/, know /ˈnoʊ/"),
    ("igh", "/aɪ/", "night /ˈnaɪt/, light /ˈlaɪt/"),
    ("a-e", "/eɪ/", "name /ˈneɪm/, cake /ˈkeɪk/"),
    ("i-e", "/aɪ/", "time /ˈtaɪm/, nice /ˈnaɪs/"),
    ("o-e", "/oʊ/", "home /ˈhoʊm/, nose /ˈnoʊz/"),
    ("ee", "/iː/", "green /ˈgriːn/, see /ˈsiː/"),
    ("ea", "/iː/", "eat /ˈiːt/, sea /ˈsiː/"),
    ("oo", "/uː/", "moon /ˈmuːn/, room /ˈruːm/"),
    ("ai / ay", "/eɪ/", "rain /ˈreɪn/, say /ˈseɪ/"),
]

table = ('<div class="tbl"><table><tr><th>Grafia</th><th>Suono</th><th>Esempi</th></tr>'
         + "".join(f'<tr><td class="k">{g}</td><td>{s}</td><td>{e}</td></tr>' for g, s, e in ROWS)
         + "</table></div>")

tiles = "{{tiles:sh=/ʃ/ ph=/f/ wh=/w/ kn=/n/ igh=/aɪ/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ ai=/eɪ/ ay=/eɪ/}}"

SECTION = "\n".join([
    MARK,
    "<p>Conoscere i nomi delle lettere non basta per leggere: in inglese due o tre lettere insieme fanno spesso un solo suono, "
    "e spesso non quello che ti aspetti leggendo all'italiana. Lo <i>sh</i> è la «sc» di «scena», il <i>ph</i> è una <i>f</i>, "
    "il <i>wh</i> si legge come la «u» di «uomo», e in <i>kn</i> e <i>igh</i> la <i>k</i> e la <i>gh</i> non si pronunciano. "
    "Il <i>ch</i> e il <i>th</i> li vedrai nella prossima lezione.</p>",
    "<p>Attenzione soprattutto alle vocali. <i>ai</i> e <i>ay</i> non si leggono «ai» ma /eɪ/, come il nome della A; "
    "<i>ee</i> ed <i>ea</i> sono una «i» lunga; <i>oo</i> è una «u» lunga. E la <i>e</i> finale di <i>name</i> o <i>time</i> è muta: "
    "non si legge, ma fa dire alla vocale che la precede il suo nome di lettera: A /eɪ/, I /aɪ/, O /oʊ/.</p>",
    table,
    tiles,
    "<p>Sono tendenze, non regole fisse, e le parole più comuni sono spesso proprio le eccezioni: <i>have</i>, <i>give</i>, "
    "<i>come</i> e <i>love</i> finiscono in <i>e</i> muta ma hanno una vocale breve; in <i>bread</i> e <i>head</i> la <i>ea</i> "
    "si legge /e/; in <i>good</i> e <i>foot</i> la <i>oo</i> è breve, /ʊ/; in <i>who</i> la <i>wh</i> si legge /h/. "
    "Nel dubbio, guarda la trascrizione sulla carta.</p>",
])

CARDS = [
    ["shop", "/ˈʃɑːp/", "negozio", ""],
    ["phone", "/ˈfoʊn/", "telefono", ""],
    ["white", "/ˈwaɪt/", "bianco", ""],
    ["knife", "/ˈnaɪf/", "coltello", ""],
    ["night", "/ˈnaɪt/", "notte", ""],
    ["cake", "/ˈkeɪk/", "torta", ""],
    ["nose", "/ˈnoʊz/", "naso", ""],
    ["green", "/ˈgriːn/", "verde", ""],
    ["moon", "/ˈmuːn/", "luna", ""],
    ["rain", "/ˈreɪn/", "pioggia; piovere", ""],
]
SEC_NO = "4"  # 0 = "Le 26 lettere", 1 nomi, 2 spelling, 3 a/an, 4 = this section

src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-len("`},")] + "\n" + SECTION + "`},", 1)
open(LESSONS, "w", encoding="utf-8").write(src)

raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
assert SEC_NO not in data["alphabet"], "alphabet section 4 already has cards"
data["alphabet"][SEC_NO] = {"add": CARDS}
out = json.dumps(data, ensure_ascii=False, indent=1)
if raw.endswith("\n"):
    out += "\n"
open(SECTIONS, "w", encoding="utf-8").write(out)
print("spelling_it: lesson section and", len(CARDS), "cards added")

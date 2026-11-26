#!/usr/bin/env python3
"""es-en lesson 1 (alphabet): append the spelling-patterns section and its flashcards."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, "tools/content/es/lessons.js")
SECTIONS = os.path.join(ROOT, "tools/sections/es-en/sections.json")

MARK = "<h3>De letras a sonidos: los grupos que se leen distinto</h3>"
ANCHOR = ('se dicta <i>ana dot garcia at example dot com</i>.</div>`},\n\n'
          '{ id:"pron",')

ROWS = [
    ("a-e", "EI", "cake → KEIK, name → NEIM"),
    ("i-e", "AI", "five → FAIV, time → TAIM"),
    ("o-e", "OU", "home → JOUM, nose → NOUS"),
    ("ee", "II", "see → SII, green → GRIIN"),
    ("ea", "II (a veces E: bread → BRED)", "eat → IIT, tea → TII"),
    ("oo", "UU (a veces U corta: book → BUK)", "moon → MUUN, room → RUUM"),
    ("ai / ay", "EI", "rain → REIN, day → DEI"),
    ("igh", "AI (gh muda)", "night → NAIT, light → LAIT"),
    ("ou / ow", "AU (ow a veces OU: snow)", "out → AUT, now → NAU"),
    ("qu", "KW", "queen → KWIIN, quick → KWIK"),
    ("ph", "F", "phone → FOUN, photo → FOU-rou"),
    ("kn / wr", "N / R (k y w mudas)", "know → NOU, write → RAIT"),
]

table = ('<div class="tbl"><table><tr><th>Grupo</th><th>Suena</th><th>Ejemplos</th></tr>'
         + "".join(f'<tr><td class="k">{g}</td><td>{s}</td><td>{e}</td></tr>' for g, s, e in ROWS)
         + "</table></div>")

SECTION = (
    MARK + "\n"
    "<p>En español casi siempre lees lo que ves: cada letra tiene su sonido. En inglés, muchas veces dos o tres letras juntas "
    "se leen de una forma que no esperarías. Por eso <i>moon</i> no se lee «mo-on» y en <i>night</i> no suenan ni la g ni la h. "
    "Estos son los grupos que más sorprenden a un hispanohablante. (La <i>sh</i>, la <i>ch</i> y la <i>th</i> las verás en la lección siguiente.)</p>\n"
    "<p>La <b>e muda</b> del final no se pronuncia, pero cambia la vocal de antes: esa vocal casi siempre suena como su nombre en inglés, el que aprendiste arriba. "
    "Por eso <i>cake</i> es «KEIK» y no «ka-ke», y <i>five</i> es «FAIV». En la tabla, <i>a-e</i> quiere decir "
    "una a, una consonante y una e final.</p>\n"
    + table + "\n"
    "{{tiles:a-e=EI i-e=AI o-e=OU ee=II ea=II oo=UU ai=EI ay=EI igh=AI ou=AU ow=AU qu=KW ph=F kn=N wr=R}}\n"
    "<div class=\"tip\">Ojo con tres hábitos que traes del español: la <i>qu</i> inglesa suena «kw» (<i>queen</i>), no «k» como en «queso»; "
    "la <i>ll</i> es solo una <i>l</i> (<i>hello</i>), nunca «y»; y la <i>ow</i> a veces suena «OU», como en <i>snow</i>. "
    "Hay excepciones muy comunes a la e muda que conviene memorizar: <i>have</i>, <i>give</i>, <i>live</i> (LIV), <i>come</i> y <i>love</i>. Ante una palabra nueva, escucha el audio y busca en ella estos grupos: así te será más fácil recordar cómo se lee.</div>"
)

CARDS = [
    ["cake", "KEIK", "pastel", ""],
    ["five", "FAIV", "cinco", ""],
    ["green", "GRIIN", "verde", ""],
    ["moon", "MUUN", "luna", ""],
    ["rain", "REIN", "lluvia", ""],
    ["night", "NAIT", "noche", ""],
    ["queen", "KWIIN", "reina", ""],
    ["phone", "FOUN", "teléfono, celular", ""],
    ["know", "NOU", "saber; conocer", ""],
    ["write", "RAIT", "escribir", ""],
]

# --- lesson body ---
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
new_anchor = ANCHOR.replace("</div>`},", "</div>\n" + SECTION + "`},", 1)
src = src.replace(ANCHOR, new_anchor, 1)
open(LESSONS, "w", encoding="utf-8").write(src)

# --- sections.json (keep the file's hand-made compact formatting) ---
sj = open(SECTIONS, encoding="utf-8").read()
data = json.loads(sj)
assert "4" not in data["alphabet"], "alphabet section 4 already has cards"
S_ANCHOR = '   ["at", "AT", "arroba (@)", ""]\n  ]}\n },\n "pron": {'
assert sj.count(S_ANCHOR) == 1, "sections.json anchor not found exactly once"
lines = ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
block = ('   ["at", "AT", "arroba (@)", ""]\n  ]},\n  "4": {"add": [\n' + lines + '\n  ]}\n },\n "pron": {')
sj = sj.replace(S_ANCHOR, block, 1)
json.loads(sj)  # still valid
open(SECTIONS, "w", encoding="utf-8").write(sj)
print("spelling_es: lesson section and", len(CARDS), "cards added")

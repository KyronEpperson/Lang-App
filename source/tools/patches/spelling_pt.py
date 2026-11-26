#!/usr/bin/env python3
"""pt-en: add the spelling-patterns section (last <h3>) to lesson 1 `alphabet`
and its flashcards (section 4) in tools/sections/pt-en/sections.json."""
import json, os, sys

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/pt/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/pt-en/sections.json")

H3 = "<h3>Como as letras se juntam: grupos que mudam o som</h3>"

ROWS = [
    ("ch", "/tʃ/ «tch» de «tchau», não «ch» de «chá»", "cheese /ˈtʃiːz/, lunch /ˈlʌntʃ/"),
    ("sh", "/ʃ/ «ch» de «chá»", "shop /ˈʃɑːp/, fish /ˈfɪʃ/"),
    ("qu", "/kw/ como o «qu» de «quase»: o u soa", "queen /ˈkwiːn/, quick /ˈkwɪk/"),
    ("a-e", "/eɪ/ «ei», o e final não soa", "cake /ˈkeɪk/, name /ˈneɪm/"),
    ("i-e", "/aɪ/ «ai», o e final não soa", "five /ˈfaɪv/, time /ˈtaɪm/"),
    ("o-e", "/oʊ/ «ou», o e final não soa", "nose /ˈnoʊz/, home /ˈhoʊm/"),
    ("ee, ea", "/iː/ «i» longo", "green /ˈgriːn/, tea /ˈtiː/"),
    ("oo", "/uː/ «u» longo; às vezes /ʊ/ curto (book, good)", "moon /ˈmuːn/, food /ˈfuːd/"),
    ("ou, ow", "/aʊ/ «au» na maioria das vezes; ow também soa /oʊ/ «ou» (snow, know)", "house /ˈhaʊs/, now /ˈnaʊ/"),
    ("ai, ay", "/eɪ/ «ei», não «ai»", "rain /ˈreɪn/, day /ˈdeɪ/"),
    ("igh", "/aɪ/ «ai», o gh não soa", "night /ˈnaɪt/, light /ˈlaɪt/"),
    ("kn, wr", "/n/, /r/: o k e o w não soam", "knife /ˈnaɪf/, write /ˈraɪt/"),
]

TILES = ("ch=/tʃ/ sh=/ʃ/ qu=/kw/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ "
         "ou=/aʊ/ ow=/aʊ/ ai=/eɪ/ ay=/eɪ/ igh=/aɪ/ kn=/n/ wr=/r/")

table = ('<div class="tbl"><table><tr><th>Grupo</th><th>Som</th><th>Exemplos</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in ROWS)
         + "</table></div>")

SECTION = "\n".join([
    H3,
    "<p>Saber o nome das letras não basta para ler uma palavra em voz alta. Em inglês, as letras se juntam em grupos com um som próprio, e muitos desses grupos enganam quem lê com os olhos do português. Os sons em si estão na próxima lição; aqui o foco é qual escrita leva a qual som.</p>",
    "<p>Três armadilhas merecem atenção especial. O <b>ch</b> inglês quase sempre soa «tch», como em «tchau», e não como o «ch» de «chá» (<i>school</i>, com som de /k/, é uma das poucas exceções): para esse som, o inglês escreve <b>sh</b>. No <b>qu</b>, o u soa: <i>queen</i> soa «cuín» (sem nasalizar o n), nunca «quín». E o <b>e mudo</b> no fim da palavra não se lê, mas faz a vogal de antes soar como o nome da letra: <i>cake</i> /ˈkeɪk/, <i>five</i> /ˈfaɪv/, <i>nose</i> /ˈnoʊz/. Nada de «cáqui» para <i>cake</i>. Algumas palavras muito comuns fogem da regra: <i>have</i> /ˈhæv/, <i>give</i> /ˈgɪv/, <i>come</i> /ˈkʌm/, <i>love</i> /ˈlʌv/.</p>",
    "<p>Nas vogais duplas, leia o grupo como um som só: <b>ee</b> e <b>ea</b> soam «i» longo, <b>oo</b> soa «u» longo (às vezes curto, como em <i>book</i> e <i>good</i>), <b>ai</b> e <b>ay</b> soam «ei» (e não «ai»), <b>ou</b> e <b>ow</b> muitas vezes soam «au» (<i>house</i>, <i>now</i>), mas não sempre: <b>ow</b> também soa «ou» (<i>snow</i>, <i>know</i>) e, em <i>you</i>, <b>ou</b> soa «u». No <b>igh</b>, o gh fica calado e sobra «ai»; também não soam o k de <b>kn</b> e o w de <b>wr</b>. Há outras exceções, como <i>bread</i> /ˈbred/ e <i>head</i> /ˈhed/, mas estes grupos valem para a maioria das palavras do dia a dia.</p>",
    table,
    "{{tiles:" + TILES + "}}",
])

CARDS = [
    ["cheese", "/ˈtʃiːz/", "queijo", ""],
    ["queen", "/ˈkwiːn/", "rainha", ""],
    ["cake", "/ˈkeɪk/", "bolo", ""],
    ["five", "/ˈfaɪv/", "cinco", ""],
    ["nose", "/ˈnoʊz/", "nariz", ""],
    ["moon", "/ˈmuːn/", "lua", ""],
    ["house", "/ˈhaʊs/", "casa", ""],
    ["rain", "/ˈreɪn/", "chuva", ""],
    ["night", "/ˈnaɪt/", "noite", ""],
    ["knife", "/ˈnaɪf/", "faca", ""],
]
SEC_NO = "4"  # 0 = "As 26 letras", 1 = nomes que confundem, 2 = soletrar, 3 = a/an, 4 = this one


def patch_lessons():
    src = open(LESSONS, encoding="utf-8").read()
    assert H3 not in src, "lessons.js: spelling section already applied"
    anchor = "<i>ana dot silva at example dot com</i>.</div>`},"
    assert src.count(anchor) == 1, "lessons.js: anchor not found exactly once"
    new_end = "<i>ana dot silva at example dot com</i>.</div>\n" + SECTION + "`},"
    src = src.replace(anchor, new_end, 1)
    open(LESSONS, "w", encoding="utf-8").write(src)


def patch_sections():
    src = open(SECTIONS, encoding="utf-8").read()
    data = json.loads(src)
    assert SEC_NO not in data["alphabet"], "sections.json: alphabet section 4 already present"
    anchor = '  ]}\n },\n "pron": {'
    assert src.count(anchor) == 1, "sections.json: anchor not found exactly once"
    rows = ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
    block = '  ]},\n  "' + SEC_NO + '": {"add": [\n' + rows + '\n  ]}\n },\n "pron": {'
    src = src.replace(anchor, block, 1)
    data2 = json.loads(src)
    assert data2["alphabet"][SEC_NO]["add"] == CARDS
    assert {k: v for k, v in data2.items() if k != "alphabet"} == {k: v for k, v in data.items() if k != "alphabet"}
    open(SECTIONS, "w", encoding="utf-8").write(src)


if __name__ == "__main__":
    patch_lessons()
    patch_sections()
    print("spelling_pt: lesson section and", len(CARDS), "cards added")

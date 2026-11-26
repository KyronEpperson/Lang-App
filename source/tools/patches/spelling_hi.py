#!/usr/bin/env python3
"""Add the spelling-patterns section to the end of the hi-en `alphabet` lesson
and its flashcards to sections.json (alphabet, section 4)."""
import json, os, sys

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/hi/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/hi-en/sections.json")

H3 = "<h3>अक्षर मिलकर नई आवाज़: स्पेलिंग के पैटर्न</h3>"
ANCHOR = "भारत में @ को अक्सर <b>at the rate</b> कहते हैं; विदेश में सिर्फ़ at कहें।</div>`},"

ROWS = [
    ("sh", "श", "ship (शिप), fish (फ़िश)"),
    ("ch", "च (कभी-कभी क)", "chair (चेर), lunch (लंच); school (स्कूल) में क"),
    ("ph", "फ़", "phone (फ़ोन), photo (ˈफ़ोटो)"),
    ("kn", "न (k चुप)", "know (नो), knife (नाइफ़)"),
    ("wr", "र (w चुप)", "write (राइट), wrong (रॉङ)"),
    ("ee", "ई", "see (सी), green (ग्रीन)"),
    ("ea", "ई", "tea (टी), eat (ईट)"),
    ("oo", "ऊ", "food (फ़ूड), moon (मून)"),
    ("ou", "आउ", "house (हाउस), out (आउट)"),
    ("igh", "आइ (gh चुप)", "night (नाइट), high (हाइ)"),
    ("a-e", "ए (e चुप)", "name (नेम), cake (केक)"),
    ("i-e", "आइ (e चुप)", "time (टाइम), bike (बाइक)"),
]

table = ('<div class="tbl"><table><tr><th>पैटर्न</th><th>आवाज़</th><th>उदाहरण</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in ROWS)
         + "</table></div>")

TILES = "{{tiles:sh=श ch=च ph=फ़ kn=न wr=र ee=ई ea=ई oo=ऊ ou=आउ igh=आइ a-e=ए i-e=आइ}}"

SECTION = "\n".join([
    H3,
    "<p>देवनागरी में जो लिखा है, लगभग वही पढ़ा जाता है: हर अक्षर की अपनी तय आवाज़। अंग्रेज़ी में ऐसा नहीं है। "
    "कई बार दो-तीन अक्षर मिलकर <b>एक नई आवाज़</b> बनाते हैं, जो उनकी अलग-अलग आवाज़ों से बिल्कुल नहीं मिलती: "
    "s और h अलग-अलग स और ह हैं, पर साथ आएँ तो <b>sh = श</b>। कुछ अक्षर लिखे जाते हैं पर बोले नहीं जाते: "
    "know में k चुप है, write में w। इसलिए अक्षर-अक्षर जोड़कर पढ़ने के बजाय नीचे के पैटर्न पहचानना सीखें। "
    "th की आवाज़ उच्चारण वाले पाठ में है।</p>",
    "<p>सबसे बड़ा जाल है शब्द के आख़िर का <b>चुप e</b>। name को \"नामे\" नहीं, <b>नेम</b> पढ़ें: "
    "आख़िरी e ख़ुद नहीं बोला जाता, पर पहले वाले स्वर को उसके अक्षर-नाम जैसा बना देता है: a का ए, i का आइ, "
    "o का ओ (home, होम)। इसीलिए time टाइम है, \"टिमे\" नहीं। पर कुछ बहुत आम शब्द यह नियम तोड़ते हैं: have (हैव), give (गिव), come (कम), love (लव)। ee आम तौर पर लंबी ई है; ea भी अक्सर ई है, पर bread (ब्रेड), head (हेड) में ए। "
    "oo ज़्यादातर लंबा ऊ है, पर book (बुक), good (गुड) में छोटा उ। ou अक्सर <b>आउ</b> है, \"ओउ\" नहीं, पर you (यू) और soup (सूप) में ऊ। igh में g और h दोनों चुप हैं: night = नाइट।</p>",
    table,
    TILES,
])

CARDS = [
    ["ship", "शिप", "जहाज़", ""],
    ["chair", "चेर", "कुर्सी", ""],
    ["phone", "फ़ोन", "फ़ोन", ""],
    ["knife", "नाइफ़", "चाकू (k चुप)", ""],
    ["write", "राइट", "लिखना (w चुप)", ""],
    ["green", "ग्रीन", "हरा", ""],
    ["food", "फ़ूड", "खाना / भोजन", ""],
    ["house", "हाउस", "घर / मकान", ""],
    ["night", "नाइट", "रात", ""],
    ["cake", "केक", "केक", ""],
]
SEC_NO = "4"


def main():
    src = open(LESSONS, encoding="utf-8").read()
    assert H3 not in src, "spelling section already applied"
    assert src.count(ANCHOR) == 1, "anchor not found exactly once"
    src = src.replace(ANCHOR, ANCHOR[:-3] + "\n" + SECTION + "`},", 1)
    open(LESSONS, "w", encoding="utf-8").write(src)

    raw = open(SECTIONS, encoding="utf-8").read()
    data = json.loads(raw)
    alpha = data.setdefault("alphabet", {})
    assert SEC_NO not in alpha, "sections.json alphabet/%s already present" % SEC_NO
    alpha[SEC_NO] = {"add": CARDS}
    out = json.dumps(data, ensure_ascii=False, indent=1)
    if raw.endswith("\n"):
        out += "\n"
    open(SECTIONS, "w", encoding="utf-8").write(out)
    print("spelling_hi: applied")


if __name__ == "__main__":
    sys.exit(main())

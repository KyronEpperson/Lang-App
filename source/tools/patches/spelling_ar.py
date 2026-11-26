#!/usr/bin/env python3
"""Append the spelling-patterns section to the ar alphabet lesson and add its cards (section 4) to sections.json."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, "tools/content/ar/lessons.js")
SECTIONS = os.path.join(ROOT, "tools/sections/ar-en/sections.json")

MARK = "<h3>من الحروف إلى الأصوات: حروف تجتمع في صوت واحد</h3>"

ROWS = [
    ("sh", "/ʃ/", "shop /ˈʃɑːp/، fish /ˈfɪʃ/"),
    ("ch", "/tʃ/", "chair /ˈtʃer/، lunch /ˈlʌntʃ/ (لكن school /ˈskuːl/)"),
    ("ph", "/f/", "phone /ˈfoʊn/، photo /ˈfoʊtoʊ/"),
    ("qu", "/kw/", "queen /ˈkwiːn/، quick /ˈkwɪk/"),
    ("a-e", "/eɪ/", "name /ˈneɪm/، cake /ˈkeɪk/"),
    ("i-e", "/aɪ/", "time /ˈtaɪm/، bike /ˈbaɪk/"),
    ("o-e", "/oʊ/", "home /ˈhoʊm/، nose /ˈnoʊz/"),
    ("ee / ea", "/iː/", "green /ˈgriːn/، tea /ˈtiː/"),
    ("oo", "/uː/ أو /ʊ/", "moon /ˈmuːn/، good /ˈgʊd/"),
    ("ou / ow", "/aʊ/", "house /ˈhaʊs/، cow /ˈkaʊ/"),
    ("ai / ay", "/eɪ/", "rain /ˈreɪn/، day /ˈdeɪ/"),
    ("igh", "/aɪ/", "night /ˈnaɪt/، high /ˈhaɪ/"),
]

table = '<div class="tbl"><table><tr><th>الحروف</th><th>النطق</th><th>مثالان</th></tr>' + "".join(
    f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in ROWS) + "</table></div>"

TILES = ("{{tiles:sh=/ʃ/ ch=/tʃ/ ph=/f/ qu=/kw/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ "
         "oo=/uː/ ou=/aʊ/ ow=/aʊ/ ai=/eɪ/ ay=/eɪ/ igh=/aɪ/}}")

SECTION = "\n".join([
    MARK,
    "<p>عرفنا أسماء الحروف، لكن القراءة تحتاج خطوة أخرى. في العربية لكل صوت حرف في الغالب، أما في الإنجليزية فكثيرا ما يجتمع حرفان أو ثلاثة على صوت واحد. فالحرفان <b>sh</b> صوت واحد هو الشين، والحرفان <b>ph</b> فاء لا p، فلا نقرأ phone بالباء. أما th و ng والحروف التي لا تنطق مثل k في knife فسنراها في درس فخاخ النطق.</p>",
    "<p>والحرف e في آخر الكلمة لا ينطق غالبا، لكنه يطيل الحركة قبله: <b>cap</b> /ˈkæp/ (قبعة) غير <b>cape</b> /ˈkeɪp/ (عباءة)، و <b>bit</b> /ˈbɪt/ غير <b>bite</b> /ˈbaɪt/ (يعض). فإذا جاء حرف متحرك ثم حرف ساكن ثم e، قرأنا المتحرك قريبا من اسمه: a مثل اسم A، و i مثل اسم I، و o مثل اسم O. وفي الجدول نكتب هذا a-e و i-e و o-e. لكن لهذه القاعدة شواذ نلقاها كثيرا: have /ˈhæv/ و give /ˈgɪv/ و come /ˈkʌm/.</p>",
    "<p>والحرفان المتحركان معا يكتبان غالبا حركة طويلة أو مزدوجة واحدة: ee و ea كسرة طويلة، لكن ea قصيرة في كلمات مثل bread /ˈbred/ و head /ˈhed/، و ai و ay مثل اسم A. وبعضها له قراءتان: oo طويلة في food وقصيرة في book، و ow في cow غيرها في snow /ˈsnoʊ/، و ou في you /ˈjuː/ غيرها في house. لذلك نحفظ كل كلمة مع نطقها، والجدول بداية تكفي لقراءة كثير من الكلمات اليومية.</p>",
    table,
    TILES,
])

CARDS = [
    ["fish", "/ˈfɪʃ/", "سمكة / سمك", ""],
    ["chair", "/ˈtʃer/", "كرسي", ""],
    ["phone", "/ˈfoʊn/", "هاتف", ""],
    ["queen", "/ˈkwiːn/", "ملكة", ""],
    ["cake", "/ˈkeɪk/", "كعكة", ""],
    ["bike", "/ˈbaɪk/", "دراجة هوائية", ""],
    ["nose", "/ˈnoʊz/", "أنف", ""],
    ["green", "/ˈgriːn/", "أخضر", ""],
    ["moon", "/ˈmuːn/", "القمر", ""],
    ["night", "/ˈnaɪt/", "ليل / ليلة", ""],
]
SEC_NO = "4"

# --- lesson body ---
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
start = src.index('{ id:"alphabet"')
end_anchor = '</div>`},\n{ id:"pron"'
end = src.index(end_anchor, start)
assert src.count(end_anchor) == 1
src = src[:end] + "</div>\n" + SECTION + "`},\n{ id:\"pron\"" + src[end + len(end_anchor):]
open(LESSONS, "w", encoding="utf-8").write(src)

# --- sections.json (keep the hand-made formatting: insert text) ---
txt = open(SECTIONS, encoding="utf-8").read()
data = json.loads(txt)
assert SEC_NO not in data["alphabet"], "section 4 cards already present"
a = txt.index('"alphabet": {')
close = txt.index("\n },\n", a)
lines = ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
block = f',\n  "{SEC_NO}": {{"add": [\n{lines}\n  ]}}'
txt = txt[:close] + block + txt[close:]
new = json.loads(txt)
assert new["alphabet"][SEC_NO]["add"] == CARDS
open(SECTIONS, "w", encoding="utf-8").write(txt)
print("spelling_ar: lesson section and", len(CARDS), "cards added")

#!/usr/bin/env python3
"""Add the spelling-patterns section to the end of the th-en alphabet lesson,
and its flashcards to tools/sections/th-en/sections.json (alphabet, section 4)."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, "tools/content/th/lessons.js")
SECTIONS = os.path.join(ROOT, "tools/sections/th-en/sections.json")

MARK = "<h3>ตัวอักษรรวมกันเป็นเสียง: รูปแบบการสะกดที่ควรรู้</h3>"

ANCHOR = ('P-L-O-Y dot double K at mail dot com</b></div>`},\n'
          '\n{ id:"pron",')

rows = [
    ("sh", "/ʃ/", "fish /ˈfɪʃ/ wash /ˈwɑːʃ/"),
    ("th", "/θ/ /ð/", "thank /ˈθæŋk/ mother /ˈmʌðər/"),
    ("ph", "/f/", "phone /ˈfoʊn/ photo /ˈfoʊtoʊ/"),
    ("kn", "/n/", "know /ˈnoʊ/ knee /ˈniː/"),
    ("wr", "/r/", "write /ˈraɪt/ wrong /ˈrɔːŋ/"),
    ("a-e", "/eɪ/", "cake /ˈkeɪk/ name /ˈneɪm/"),
    ("i-e", "/aɪ/", "five /ˈfaɪv/ time /ˈtaɪm/"),
    ("o-e", "/oʊ/", "home /ˈhoʊm/ nose /ˈnoʊz/"),
    ("ee", "/iː/", "sleep /ˈsliːp/ green /ˈgriːn/"),
    ("ea", "/iː/", "eat /ˈiːt/ tea /ˈtiː/"),
    ("oo", "/uː/", "moon /ˈmuːn/ room /ˈruːm/"),
    ("igh", "/aɪ/", "night /ˈnaɪt/ high /ˈhaɪ/"),
]
table = ('<div class="tbl"><table><tr><th>ตัวอักษร</th><th>เสียง</th><th>ตัวอย่าง</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{s}</td><td>{e}</td></tr>' for p, s, e in rows)
         + "</table></div>")
tiles = "{{tiles:" + " ".join(f"{p}={s.replace(' ', '_')}" for p, s, _ in rows) + "}}"

SECTION = (
    "\n" + MARK + "\n"
    "<p>รู้ชื่อตัวอักษรแล้ว ขั้นต่อไปคืออ่านคำ ภาษาอังกฤษไม่ได้อ่านทีละตัวเสมอไป ตัวอักษรสองสามตัวมักรวมกันเป็น<b>เสียงเดียว</b> "
    "ระวัง <b>ph</b> และ <b>th</b> เป็นพิเศษ คำไทยที่เขียนด้วยอักษรโรมันอย่าง Phuket และ Thai ใช้ ph แทน พ และ th แทน ท "
    "แต่ในคำภาษาอังกฤษ ph คือเสียง /f/ และ th คือเสียง /θ/ หรือ /ð/ ซึ่งจะได้ฝึกในบทถัดไป</p>\n"
    "<p>ภาษาอังกฤษยังมีตัวที่เขียนแต่ไม่อ่าน คล้ายตัวการันต์ k ใน kn และ w ใน wr ไม่ออกเสียง gh ใน igh ก็ไม่ออกเสียง "
    "ส่วน e ท้ายคำหลังพยัญชนะหนึ่งตัวมักไม่ออกเสียง แต่ทำให้สระข้างหน้าอ่านเหมือน<b>ชื่อ</b>ตัวอักษร เช่น a-e อ่านเหมือนชื่อ A "
    "และสระคู่ ee ea oo มักอ่านเป็นสระเสียงยาวเสียงเดียว</p>\n"
    + table + "\n" + tiles + "\n"
    "<p>รูปแบบเหล่านี้ใช้ได้กับคำส่วนใหญ่ แต่ไม่ใช่ทุกคำ คำที่ใช้บ่อยหลายคำไม่ตามกฎ: have give come love มี e ท้ายคำ "
    "แต่สระข้างหน้าไม่อ่านเหมือนชื่อตัวอักษร bread และ head อ่าน ea เป็น /e/ look และ foot อ่าน oo เป็น /ʊ/ สั้น "
    "และ th ในชื่อ Thailand อ่านเป็น /t/ เจอคำใหม่เมื่อไรให้ดูคำอ่านบนการ์ดทุกครั้ง</p>"
)

CARDS = [
    ["phone", "/ˈfoʊn/", "โทรศัพท์ (ph อ่านเป็น /f/)", ""],
    ["know", "/ˈnoʊ/", "รู้ (k ไม่ออกเสียง)", ""],
    ["write", "/ˈraɪt/", "เขียน (w ไม่ออกเสียง)", ""],
    ["cake", "/ˈkeɪk/", "เค้ก (a-e อ่าน /eɪ/)", ""],
    ["five", "/ˈfaɪv/", "ห้า (i-e อ่าน /aɪ/)", ""],
    ["home", "/ˈhoʊm/", "บ้าน (o-e อ่าน /oʊ/)", ""],
    ["sleep", "/ˈsliːp/", "นอนหลับ (ee อ่าน /iː/)", ""],
    ["eat", "/ˈiːt/", "กิน (ea อ่าน /iː/)", ""],
    ["moon", "/ˈmuːn/", "ดวงจันทร์ (oo อ่าน /uː/)", ""],
    ["high", "/ˈhaɪ/", "สูง (gh ไม่ออกเสียง)", ""],
]

# 1. lesson body
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied to lessons.js"
assert src.count(ANCHOR) == 1, "anchor not found exactly once in lessons.js"
head = ANCHOR.split("</div>`},")[0] + "</div>"
src = src.replace(ANCHOR, head + SECTION + ANCHOR[len(head):], 1)
open(LESSONS, "w", encoding="utf-8").write(src)

# 2. sections.json (keep the file's hand formatting: one card per line, one-space indent steps)
sj = open(SECTIONS, encoding="utf-8").read()
data = json.loads(sj)
assert "4" not in data["alphabet"], "alphabet section 4 already in sections.json"
SJ_ANCHOR = '  ], "drop": []}\n },\n "pron": {'
assert sj.count(SJ_ANCHOR) == 1, "sections.json anchor not found exactly once"
block = ('  ], "drop": []},\n  "4": {"add": [\n'
         + ",\n".join("   " + json.dumps(c, ensure_ascii=False) for c in CARDS)
         + '\n  ], "drop": []}\n },\n "pron": {')
sj = sj.replace(SJ_ANCHOR, block, 1)
new = json.loads(sj)
assert len(new["alphabet"]["4"]["add"]) == len(CARDS)
open(SECTIONS, "w", encoding="utf-8").write(sj)
print("spelling_th: lessons.js and sections.json patched")

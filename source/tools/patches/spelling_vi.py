#!/usr/bin/env python3
"""Spelling-patterns section for vi lesson 1 (alphabet): lesson body + section cards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/vi/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/vi-en/sections.json")

MARK = "<h3>Chữ ghép: viết một đằng, đọc một nẻo</h3>"
ANCHOR = ('<b>lan dot tran at mail dot com</b>.</div>`},\n\n{ id:"pron"')

SECTION = (
    "\n" + MARK + "\n"
    "<p>Chữ Việt gần như viết sao đọc vậy. Chữ Anh thì khác: hai, ba chữ cái thường ghép lại thành một âm, "
    "có chữ viết ra mà không đọc. Đọc từng chữ theo kiểu tiếng Việt, <b>rain</b> sẽ thành “ra-in”, "
    "<b>tea</b> thành “tê-a”, <b>know</b> thành “ca-nâu”. Còn <b>ph, qu, ng</b> thì đọc gần giống tiếng Việt; "
    "<b>sh, ch, th</b> bạn sẽ gặp ở bài tiếp theo (riêng ch trong <b>school</b> đọc là /k/).</p>\n"
    "<p><b>E câm</b>: chữ e cuối từ thường không đọc. Khi giữa nó và nguyên âm đứng trước chỉ có một phụ âm (dấu gạch trong <b>a-e</b> là chỗ của phụ âm ấy), nguyên âm đó đọc giống tên chữ cái: "
    "<b>a-e</b> là /eɪ/ như tên chữ A, <b>i-e</b> là /aɪ/ như tên chữ I. Đừng đọc <b>cake</b> thành “ca-kê”. "
    "Cũng đừng đọc <b>ai, ay</b> như “ai, ay” tiếng Việt: cả hai đều là /eɪ/.</p>\n"
    "<p>Đây là quy luật của phần lớn từ, không phải tất cả. Nhiều từ rất thông dụng là ngoại lệ, cần nhớ riêng: "
    "<b>have, give, come, love</b> (có e câm nhưng nguyên âm không đọc như tên chữ cái), <b>book, good</b> (oo ngắn /ʊ/), "
    "<b>bread, head</b> (ea là /e/), <b>you</b> /juː/, <b>who</b> /huː/, <b>said</b> /sed/ (ai là /e/), <b>he, me, she, we, be</b> (e cuối đọc /iː/, không câm). "
    "Gặp từ mới, hãy xem phiên âm (bài tiếp theo sẽ hướng dẫn cách đọc).</p>\n"
    '<div class="tbl"><table><tr><th>Chữ ghép</th><th>Đọc là</th><th>Ví dụ</th></tr>'
    '<tr><td class="k">wh</td><td>/w/</td><td>what /wʌt/, white /waɪt/</td></tr>'
    '<tr><td class="k">ck</td><td>/k/</td><td>clock /klɑːk/, duck /dʌk/</td></tr>'
    '<tr><td class="k">a-e</td><td>/eɪ/</td><td>name /neɪm/, cake /keɪk/</td></tr>'
    '<tr><td class="k">i-e</td><td>/aɪ/</td><td>time /taɪm/, five /faɪv/</td></tr>'
    '<tr><td class="k">o-e</td><td>/oʊ/</td><td>home /hoʊm/, nose /noʊz/</td></tr>'
    '<tr><td class="k">ee</td><td>/iː/</td><td>green /griːn/, feet /fiːt/</td></tr>'
    '<tr><td class="k">ea</td><td>/iː/</td><td>eat /iːt/, tea /tiː/</td></tr>'
    '<tr><td class="k">oo</td><td>/uː/</td><td>food /fuːd/, moon /muːn/</td></tr>'
    '<tr><td class="k">ou, ow</td><td>/aʊ/</td><td>house /haʊs/, now /naʊ/ (nhưng ow cũng hay đọc /oʊ/: snow, know, show)</td></tr>'
    '<tr><td class="k">ai, ay</td><td>/eɪ/</td><td>wait /weɪt/, day /deɪ/</td></tr>'
    '<tr><td class="k">igh</td><td>/aɪ/ (gh câm)</td><td>high /haɪ/, flight /flaɪt/</td></tr>'
    '<tr><td class="k">kn, wr</td><td>/n/, /r/ (k, w câm)</td><td>know /noʊ/, write /raɪt/</td></tr>'
    "</table></div>\n"
    "{{tiles:wh=/w/ ck=/k/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ oo=/uː/ ou=/aʊ/ ow=/aʊ/ "
    "ai=/eɪ/ ay=/eɪ/ igh=/aɪ/ kn=/n/ wr=/r/}}"
)

CARDS = [
    ["white", "/waɪt/", "màu trắng", ""],
    ["clock", "/klɑːk/", "đồng hồ (treo tường, để bàn)", ""],
    ["cake", "/keɪk/", "bánh ngọt", ""],
    ["five", "/faɪv/", "số 5", ""],
    ["nose", "/noʊz/", "cái mũi", ""],
    ["green", "/griːn/", "màu xanh lá", ""],
    ["moon", "/muːn/", "mặt trăng", ""],
    ["mouth", "/maʊθ/", "cái miệng", ""],
    ["wait", "/weɪt/", "chờ, đợi", ""],
    ["knife", "/naɪf/", "con dao", ""],
]

src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR.replace("</div>`},", "</div>" + SECTION + "`},", 1), 1)
open(LESSONS, "w", encoding="utf-8").write(src)

# new section number = number of <h3> in the alphabet body before the insert
body = src.split('{ id:"alphabet"', 1)[1].split('{ id:"pron"', 1)[0]
num = str(body.count("<h3>") - 1)

raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
alpha = data["alphabet"]
assert num not in alpha, "section %s already has cards" % num
alpha[num] = {"add": CARDS, "drop": []}
out = json.dumps(data, ensure_ascii=False, indent=1)
if raw.endswith("\n"):
    out += "\n"
open(SECTIONS, "w", encoding="utf-8").write(out)
print("inserted spelling section; cards at alphabet[%s]" % num)

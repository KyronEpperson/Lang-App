#!/usr/bin/env python3
"""Add the spelling-patterns section to the end of the zh alphabet lesson,
and its flashcards to sections.json (alphabet, section 4)."""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(ROOT, "tools/content/zh/lessons.js")
SECTIONS = os.path.join(ROOT, "tools/sections/zh-en/sections.json")

MARK = "<h3>字母组合：几个字母拼一个音</h3>"
ANCHOR = "读作 <b>L-I dot W-E-I at mail dot com</b>。</div>`},"

ROWS = [
    ("sh", "/ʃ/", "shop、fish"),
    ("ch", "/tʃ/", "chair、lunch"),
    ("th", "/θ/、/ð/", "thank、mother"),
    ("ph", "/f/", "phone、photo"),
    ("qu", "/kw/", "queen、quick"),
    ("kn", "/n/（k 不发音）", "knife、know"),
    ("a-e", "/eɪ/（A 的名称）", "cake、name"),
    ("i-e", "/aɪ/（I 的名称）", "bike、five"),
    ("ee", "/iː/", "green、feet"),
    ("ai", "/eɪ/", "rain、wait"),
    ("ou", "/aʊ/", "house、out"),
    ("igh", "/aɪ/（gh 不发音）", "high、night"),
]

table = ('<div class="tbl"><table><tr><th>组合</th><th>读音</th><th>例词</th></tr>'
         + "".join(f'<tr><td class="k">{p}</td><td>{r}</td><td>{e}</td></tr>' for p, r, e in ROWS)
         + "</table></div>")

TILES = "{{tiles:sh=/ʃ/ ch=/tʃ/ th=/θ/、/ð/ ph=/f/ qu=/kw/ kn=/n/ a-e=/eɪ/ i-e=/aɪ/ ee=/iː/ ai=/eɪ/ ou=/aʊ/ igh=/aɪ/}}"

SECTION = "\n".join([
    MARK,
    "<p>认识了字母名称，下一步是看懂单词怎么读。拼音大多是一个字母对应一个音，英语却常用<b>两三个字母拼一个音</b>，而且同样的字母组合，在拼音里的读法可能完全不同。下面 12 个组合最常见，表里给的是它们<b>最常见的读音</b>，也有例外（比如 you 里的 ou、have 里的 a-e）。</p>",
    "<p>最需要当心的是和拼音长得一样的组合：拼音 <b>qu</b> 读“去”，英语 qu 读 /kw/，quick 开头不是“去”；拼音 <b>ou</b> 读“欧”，英语 ou 常读 /aʊ/，接近拼音 ao；拼音 <b>ai</b> 读“爱”，英语 ai 却读 /eɪ/，接近拼音 ei，所以 rain 和 A 的名称押韵。词尾不发音的 <b>e</b> 也很关键：它通常让前面的元音字母读成自己的<b>名称</b>，cake 的 a 读 /eɪ/，bike 的 i 读 /aɪ/。kn 开头的 k、igh 里的 gh 都不发音。th 怎么发音，见“发音陷阱”一课。</p>",
    table,
    TILES,
])

CARDS = [
    ["shop", "/ˈʃɑːp/", "商店；购物", ""],
    ["chair", "/ˈtʃer/", "椅子", ""],
    ["phone", "/ˈfoʊn/", "电话；手机", ""],
    ["queen", "/ˈkwiːn/", "女王；王后", ""],
    ["knife", "/ˈnaɪf/", "刀", ""],
    ["cake", "/ˈkeɪk/", "蛋糕", ""],
    ["bike", "/ˈbaɪk/", "自行车", ""],
    ["green", "/ˈgriːn/", "绿色；绿色的", ""],
    ["rain", "/ˈreɪn/", "雨；下雨", ""],
    ["house", "/ˈhaʊs/", "房子", ""],
]

# --- lesson body ---
src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied to lessons.js"
assert src.count(ANCHOR) == 1, "anchor not found exactly once in lessons.js"
src = src.replace(ANCHOR, ANCHOR[:-len("`},")] + "\n" + SECTION + "`},")
open(LESSONS, "w", encoding="utf-8").write(src)

# --- sections.json (keep the file's hand formatting) ---
sj = open(SECTIONS, encoding="utf-8").read()
data = json.loads(sj)
assert "4" not in data["alphabet"], "alphabet section 4 already has cards"
S_ANCHOR = '   ["at", "/ˈæt/", "@（报邮箱时）", ""]\n  ]}\n },'
assert sj.count(S_ANCHOR) == 1, "sections.json anchor not found exactly once"
rows = ",\n".join("   " + json.dumps(c, ensure_ascii=False, separators=(", ", ": ")) for c in CARDS)
new = S_ANCHOR[:-len("\n },")] + ',\n  "4": {"add": [\n' + rows + "\n  ]}\n },"
sj = sj.replace(S_ANCHOR, new)
json.loads(sj)
open(SECTIONS, "w", encoding="utf-8").write(sj)
print("spelling_zh: applied")

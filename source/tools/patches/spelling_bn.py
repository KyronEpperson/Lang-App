#!/usr/bin/env python3
"""Add the spelling-patterns section to the end of bn lesson 1 (alphabet) and its cards."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, "tools/content/bn/lessons.js")
SECTIONS = os.path.join(HOME, "tools/sections/bn-en/sections.json")

ANCHOR = 'R-A-F-I dot A-H-M-E-D at mail dot com</b>।</div>`},'
MARK = '<h3>অক্ষর মিলে নতুন ধ্বনি: বানান পড়ার সূত্র</h3>'

def row(p, s, ex):
    return f'<tr><td class="k">{p}</td><td>{s}</td><td>{ex}</td></tr>'

ROWS = [
    ("sh", "শ", "shop ˈশাːপ, fish ˈফিশ"),
    ("ch", "চ", "chair ˈচের, lunch ˈলাঞ্চ"),
    ("ph", "ফ (F-এর ধ্বনি)", "phone ˈফৌন, photo ˈফৌটৌ"),
    ("ng", "ং (শেষে গ নেই)", "sing ˈসিং, long ˈলং"),
    ("kn / wr", "ন / র (k আর w চুপ)", "know ˈনৌ, write ˈরাইট"),
    ("a-e", "এই", "make ˈমেইক, cake ˈকেইক"),
    ("i-e", "আই", "time ˈটাইম, nice ˈনাইস"),
    ("o-e", "ঔ", "home ˈহৌম, nose ˈনৌজ়"),
    ("ee / ea", "ঈ", "week ˈওয়ীক, tea ˈটী"),
    ("oo", "ঊ (লম্বা)", "food ˈফূড, moon ˈমূন"),
    ("ai / ay", "এই", "rain ˈরেইন, day ˈডেই"),
    ("igh", "আই (gh চুপ)", "high ˈহাই, night ˈনাইট"),
]

SECTION = (
    "\n" + MARK + "\n"
    '<p>বাংলা বানান মোটামুটি যেমন লেখা তেমন পড়া হয়, ইংরেজিতে তা নয়। অনেক সময় দুই-তিনটি অক্ষর মিলে একটাই ধ্বনি হয়, আবার কিছু অক্ষর লেখা থাকে কিন্তু উচ্চারণ হয় না। নিচের সূত্রগুলো চিনে রাখলে অচেনা শব্দও অনেকটা ঠিক পড়তে পারবেন। ph-এ প আর হ আলাদা নয়, পুরোটা F-এর ধ্বনি। শব্দের শেষের ng-এ গ বলবেন না: sing ˈসিং, "সিঙ্গ" নয়। kn-এর k আর wr-এর w চুপ থাকে, তাই write আর right একই রকম শোনায়। th-এর দুটো ধ্বনি পরের পাঠে দেখবেন।</p>\n'
    '<p>শব্দের শেষে চুপ থাকা <b>e</b> আগের স্বরকে তার অক্ষরের নামে পড়ায়: a-e হয় A-এর নামের মতো "এই", i-e হয় "আই", o-e হয় "ঔ"। তাই make "মেক" নয়, ˈমেইক। তবে খুব চেনা কিছু শব্দ এই নিয়ম মানে না: <b>have, give, come, love</b> (ˈহ্যাভ়, ˈগিভ়, ˈকাম, ˈলাভ়)-এ e চুপ, কিন্তু আগের স্বর নিজের নাম বলে না। আর <b>he, she, me, we</b>-তে শেষের e নিজেই উচ্চারিত হয়, লম্বা ঈ। একইভাবে ea সাধারণত ঈ, কিন্তু <b>bread, head</b>-এ সাধারণ এ (ˈব্রেড, ˈহেড); oo সাধারণত লম্বা ঊ, কিন্তু <b>book, good</b>-এ ছোট উ (ˈবুক, ˈগুড); ch সাধারণত চ, কিন্তু <b>school</b>-এ ক; ai সাধারণত এই, কিন্তু <b>said</b>-এ সাধারণ এ (ˈসেড)।</p>\n'
    '<div class="tbl"><table><tr><th>বানান</th><th>উচ্চারণ</th><th>উদাহরণ</th></tr>'
    + "".join(row(*r) for r in ROWS) +
    '</table></div>\n'
    '{{tiles:sh=শ ch=চ ph=ফ ng=ং kn=ন wr=র a-e=এই i-e=আই o-e=ঔ ee=ঈ ea=ঈ oo=ঊ ai=এই ay=এই igh=আই}}'
)

CARDS = [
    ["fish", "ˈফিশ", "মাছ", ""],
    ["chair", "ˈচের", "চেয়ার", ""],
    ["phone", "ˈফৌন", "ফোন", ""],
    ["know", "ˈনৌ", "জানা", ""],
    ["write", "ˈরাইট", "লেখা", ""],
    ["cake", "ˈকেইক", "কেক", ""],
    ["time", "ˈটাইম", "সময়", ""],
    ["home", "ˈহৌম", "বাড়ি, ঘর", ""],
    ["moon", "ˈমূন", "চাঁদ", ""],
    ["night", "ˈনাইট", "রাত", ""],
]
SEC_NO = "4"  # sections 0..3 exist; this is the fifth <h3>

src = open(LESSONS, encoding="utf-8").read()
assert MARK not in src, "spelling section already applied"
assert src.count(ANCHOR) == 1, "anchor not found exactly once"
src = src.replace(ANCHOR, ANCHOR[:-len("`},")] + SECTION + "`},")
open(LESSONS, "w", encoding="utf-8").write(src)

raw = open(SECTIONS, encoding="utf-8").read()
data = json.loads(raw)
assert SEC_NO not in data["alphabet"], "section cards already present"
data["alphabet"][SEC_NO] = {"add": CARDS}
out = json.dumps(data, ensure_ascii=False, indent=1)
if raw.endswith("\n"):
    out += "\n"
open(SECTIONS, "w", encoding="utf-8").write(out)
print("spelling_bn: applied")

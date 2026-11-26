#!/usr/bin/env python3
"""Spelling-patterns section for yue-en lesson 1 (alphabet): lesson body + sections.json cards."""
import os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/yue/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/yue-en/sections.json')

MARK = '<h3>字母點樣砌成音：常見串法</h3>'

SECTION = (
    '\n' + MARK + '\n'
    '<p>識咗字母名稱，下一步係睇住生字讀出嚟。英文唔係一個字母一個音：兩三個字母可以合埋讀一個音，有啲字母仲完全唔讀。'
    '好多人學英文係成個字咁死記，見到新字就唔知點讀。下面 12 組串法最常見，但係冇一組係百分百啱晒，'
    '「留意」一欄嘅例外都係日常字，要一齊記。th 點讀，同埋表入面啲音標符號點睇，下一課會講。</p>\n'
    '<p><b>a-e、i-e、o-e</b> 嘅意思係：元音字母後面隔一個輔音字母，字尾再有個 e，呢個 e 唔讀，但係會令前面嘅元音字母讀返佢個<b>名稱</b>，'
    '例如 cake 個 a 讀 A 嘅名稱 /eɪ/。he、she、me、we 呢啲短字只有一個元音字母 e，呢個 e 要讀出嚟，讀 /iː/。</p>\n'
    '<div class="tbl"><table><tr><th>串法</th><th>讀音</th><th>例字</th><th>留意</th></tr>'
    '<tr><td class="k">sh</td><td>/ʃ/</td><td>shop、fish</td><td>兩個字母讀一個音</td></tr>'
    '<tr><td class="k">ch</td><td>/tʃ/</td><td>chicken、lunch</td><td>例外：school 嘅 ch 讀 /k/</td></tr>'
    '<tr><td class="k">ph</td><td>/f/</td><td>phone、photo</td><td>唔係 p 加 h</td></tr>'
    '<tr><td class="k">kn、wr</td><td>/n/、/r/</td><td>knife、write</td><td>k 同 w 唔讀</td></tr>'
    '<tr><td class="k">a-e</td><td>/eɪ/</td><td>cake、late</td><td>例外：have 讀 /æ/</td></tr>'
    '<tr><td class="k">i-e</td><td>/aɪ/</td><td>bike、smile</td><td>例外：give 讀 /ɪ/</td></tr>'
    '<tr><td class="k">o-e</td><td>/oʊ/</td><td>nose、note</td><td>例外：come、love 讀 /ʌ/</td></tr>'
    '<tr><td class="k">ee、ea</td><td>/iː/</td><td>green、tea</td><td>例外：bread、head 嘅 ea 讀 /e/</td></tr>'
    '<tr><td class="k">oo</td><td>/uː/</td><td>moon、room</td><td>例外：book、good 讀 /ʊ/</td></tr>'
    '<tr><td class="k">ou、ow</td><td>/aʊ/</td><td>house、down</td><td>例外：you 讀 /juː/；ow 都好多時讀 /oʊ/，例如 snow、know、slow</td></tr>'
    '<tr><td class="k">ai、ay</td><td>/eɪ/</td><td>rain、play</td><td>ay 多數喺字尾。例外：said 嘅 ai 讀 /e/</td></tr>'
    '<tr><td class="k">igh</td><td>/aɪ/</td><td>high、flight</td><td>gh 唔讀</td></tr>'
    '</table></div>\n'
    '{{tiles:sh=/ʃ/ ch=/tʃ/ ph=/f/ kn=/n/ wr=/r/ a-e=/eɪ/ i-e=/aɪ/ o-e=/oʊ/ ee=/iː/ ea=/iː/ '
    'oo=/uː/ ou=/aʊ/ ow=/aʊ/ ai=/eɪ/ ay=/eɪ/ igh=/aɪ/}}\n'
    '<p>見到新字，先搵吓入面有冇呢啲串法，估一個讀音，再聽聲音核對。估錯唔緊要，例外字多數都係最常用嘅字，聽得多自然記得。</p>'
)

ANCHOR = 'A-M-Y dot C-H-A-N at mail dot com</b>。</div>`},'

src = open(LESSONS, encoding='utf-8').read()
assert MARK not in src, 'spelling section already applied to lessons.js'
assert src.count(ANCHOR) == 1, 'anchor not unique in lessons.js'
head = ANCHOR[:-len('`},')]
src = src.replace(ANCHOR, head + SECTION + '`},', 1)
open(LESSONS, 'w', encoding='utf-8').write(src)

S_ANCHOR = '   ["dot", "/ˈdɑːt/", "點（.，報電郵地址用）", ""]\n  ]}\n },'
CARDS = [
    ["fish", "/ˈfɪʃ/", "魚", ""],
    ["lunch", "/ˈlʌntʃ/", "午餐 / 晏晝飯", ""],
    ["phone", "/ˈfoʊn/", "電話 / 手機", ""],
    ["knife", "/ˈnaɪf/", "刀", ""],
    ["write", "/ˈraɪt/", "寫", ""],
    ["cake", "/ˈkeɪk/", "蛋糕", ""],
    ["bike", "/ˈbaɪk/", "單車", ""],
    ["green", "/ˈgriːn/", "綠色 / 綠色嘅", ""],
    ["moon", "/ˈmuːn/", "月亮", ""],
    ["house", "/ˈhaʊs/", "屋 / 房屋", ""],
]
import json
rows = ',\n'.join('   [' + ', '.join(json.dumps(x, ensure_ascii=False) for x in c) + ']' for c in CARDS)
sec = open(SECTIONS, encoding='utf-8').read()
assert '"4": {"add"' not in sec.split('"pron"')[0], 'alphabet section 4 already in sections.json'
assert sec.count(S_ANCHOR) == 1, 'anchor not unique in sections.json'
new = S_ANCHOR[:-len('\n },')] + ',\n  "4": {"add": [\n' + rows + '\n  ]}\n },'
sec = sec.replace(S_ANCHOR, new, 1)
json.loads(sec)
open(SECTIONS, 'w', encoding='utf-8').write(sec)
print('spelling_yue: applied')

#!/usr/bin/env python3
"""Add the spelling-patterns section (last <h3>) to ja lesson 1 `alphabet`,
plus its flashcards in tools/sections/ja-en/sections.json under alphabet."4"."""
import json, os

HOME = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LESSONS = os.path.join(HOME, 'tools/content/ja/lessons.js')
SECTIONS = os.path.join(HOME, 'tools/sections/ja-en/sections.json')

TITLE = '<h3>つづりと音：ローマ字読みから卒業</h3>'

ROWS = [
    ('ai', 'エイ', 'rain ゥレイン, wait ウェイト'),
    ('ee', 'イー', 'green グリーン, sleep スリープ'),
    ('ea', 'イー', 'tea ティー, eat イート'),
    ('oo', 'ウー', 'moon ムーン, school スクール'),
    ('ou', 'アウ', 'house ハウス, out アウト'),
    ('igh', 'アイ（gh は読まない）', 'night ナイト, high ハイ'),
    ('a-e', 'エイ（e は読まない）', 'cake ケイク, make メイク'),
    ('i-e', 'アイ（e は読まない）', 'time タイム, bike バイク'),
    ('o-e', 'オウ（e は読まない）', 'home ホウム, phone フォウン'),
    ('ph', 'フ (f)', 'photo フォウロウ, alphabet アルファベット'),
    ('ck', 'ク', 'black ブラック, clock クラック'),
    ('kn', 'ヌ（k は読まない）', 'know ノウ, knife ナイフ'),
]
TILES = 'ai=エイ ee=イー ea=イー oo=ウー ou=アウ igh=アイ a-e=エイ i-e=アイ o-e=オウ ph=フ_(f) ck=ク kn=ヌ'

table = ('<div class="tbl"><table><tr><th>つづり</th><th>音</th><th>例</th></tr>'
         + ''.join('<tr><td class="k">%s</td><td>%s</td><td>%s</td></tr>' % r for r in ROWS)
         + '</table></div>')

SECTION = '\n'.join([
    TITLE,
    '<p>文字の名前を覚えたら、次は<b>つづりの読み方</b>です。ローマ字の感覚で ai を「アイ」、ou を「オウ」、oo を「オー」と読みたくなりますが、英語では、同じつづりでもローマ字とはまったく違う音になります。rain は「ライン」ではなく<b>ゥレイン</b>、house は「ホウセ」ではなく<b>ハウス</b>です。sh と ch はふつうローマ字に近い音ですが（ch は school のように k の音になることもあります）、th の口の形は「発音の落とし穴」で練習します。ここでは、ローマ字読みでは読めない12のつづりを覚えましょう。</p>',
    table,
    '{{tiles:%s}}' % TILES,
    '<p><b>a-e・i-e・o-e</b> は、母音字のあとに子音字が一つあり、最後に e がつく形です。最後の e は読まず、前の母音字を<b>文字の名前どおり</b>（エイ・アイ・オウ）に読みます。cake は「カケ」ではなくケイク、time は「ティメ」ではなくタイムです。ay も ai と同じエイ（day デイ）です。ただし、よく使う単語には例外もあります。oo は book（ブック）、good（グッド）のように短い「ウ」、ea は bread（ブレッド）、head（ヘッド）のように「エ」、ou は you（ユー）、o-e は come（カム）、love（ラヴ）、a-e は have（ハヴ）、i-e は give（ギヴ）になります。</p>',
])

ANCHOR = 'yuki.sato@mail.com → yuki dot sato at mail dot com。</div>`},'

src = open(LESSONS, encoding='utf-8').read()
assert TITLE not in src, 'spelling section already applied to lessons.js'
assert src.count(ANCHOR) == 1, 'lessons.js anchor not found exactly once'
src = src.replace(ANCHOR, ANCHOR[:-3] + '\n' + SECTION + '`},')
open(LESSONS, 'w', encoding='utf-8').write(src)

CARDS = [
    ['rain', 'ゥレイン', '雨', ''],
    ['green', 'グリーン', '緑（の）', ''],
    ['tea', 'ティー', 'お茶、紅茶', ''],
    ['moon', 'ムーン', '月（空の月）', ''],
    ['house', 'ハウス', '家', ''],
    ['night', 'ナイト', '夜', ''],
    ['cake', 'ケイク', 'ケーキ', ''],
    ['time', 'タイム', '時間', ''],
    ['photo', 'フォウロウ', '写真', ''],
    ['knife', 'ナイフ', 'ナイフ', ''],
]

js = open(SECTIONS, encoding='utf-8').read()
data = json.loads(js)
assert '4' not in data['alphabet'], 'alphabet section 4 cards already applied'
S_ANCHOR = '   ["at", "アット", "＠（メールアドレスのアットマーク）", ""]\n  ]}\n },\n "pron": {'
assert js.count(S_ANCHOR) == 1, 'sections.json anchor not found exactly once'
block = ',\n'.join('   ' + json.dumps(c, ensure_ascii=False) for c in CARDS)
new = S_ANCHOR.replace('  ]}\n },', '  ]},\n  "4": {"add": [\n' + block + '\n  ]}\n },', 1)
js = js.replace(S_ANCHOR, new)
data2 = json.loads(js)
assert data2['alphabet']['4']['add'] == CARDS
open(SECTIONS, 'w', encoding='utf-8').write(js)
print('spelling_ja: lesson section and %d cards added' % len(CARDS))

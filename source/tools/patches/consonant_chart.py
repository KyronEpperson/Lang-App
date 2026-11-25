#!/usr/bin/env python3
# Adds a consonant chart to lesson 1 of every Korean course (owner, on the vowel table: "i think we need a chart like this for the consanants").
# Rows follow the section's own teaching: the basic shape, then the letters made by adding strokes (ㄴ→ㄷ→ㅌ). Sounds are the romanization, start/end of a block where they differ (g/k).
# Built-in course: src/app.html. The x-ko courses: tools/halves/native/<l>/ko/lessons/hangul.html, then re-assemble each pack:
#   for l in ceb es hi id ja mr th tl vi yue zh; do node tools/halves/assemble.js $l ko packs/course-$l-ko.js; done
# The "Sound" header is each lesson's own word from its vowel table. Run once; it refuses to add the chart twice.
import io, os, re
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
ROWS = [[('ㄱ','g/k'),('ㅋ','k'),None],[('ㄴ','n'),('ㄷ','d/t'),('ㅌ','t')],[('ㅁ','m'),('ㅂ','b/p'),('ㅍ','p')],[('ㅅ','s'),('ㅈ','j'),('ㅊ','ch')],[('ㅇ','{silent} / ng'),('ㅎ','h'),None],[('ㄹ','r/l'),None,None]]
H = {  # basic shape, one more stroke, another stroke, silent
 'en':('Basic','+ a stroke','+ another','silent'),
 'es':('Básica','+ un trazo','+ otro trazo','muda'),
 'id':('Dasar','+ satu coretan','+ satu lagi','tanpa bunyi'),
 'tl':('Pangunahin','+ isang guhit','+ isa pang guhit','walang tunog'),
 'ceb':('Batakan','+ usa ka linya','+ usa pa ka linya','walay tingog'),
 'vi':('Cơ bản','+ một nét','+ một nét nữa','câm'),
 'ja':('基本','＋線1本','＋もう1本','無音'),
 'zh':('基本','加一笔','再加一笔','不发音'),
 'yue':('基本','加一筆','再加一筆','唔發音'),
 'th':('พื้นฐาน','+ หนึ่งขีด','+ อีกหนึ่งขีด','ไม่มีเสียง'),
 'hi':('बुनियादी','+ एक लकीर','+ एक और लकीर','मौन'),
 'mr':('मूळ','+ एक रेघ','+ आणखी एक रेघ','उच्चार नाही'),
}
NOTE = {  # why some letters carry two sounds
 'en':'Two sounds, like g/k: the first at the start of a block, the second at the end.',
 'es':'Dos sonidos, como g/k: el primero al inicio del bloque, el segundo al final.',
 'id':'Dua bunyi, seperti g/k: yang pertama di awal blok, yang kedua di akhir.',
 'tl':'Dalawang tunog, gaya ng g/k: ang una sa simula ng block, ang pangalawa sa dulo.',
 'ceb':'Duha ka tingog, sama sa g/k: ang una sa sinugdanan sa block, ang ikaduha sa kataposan.',
 'vi':'Hai âm, như g/k: âm thứ nhất khi đứng đầu khối chữ, âm thứ hai khi đứng cuối.',
 'ja':'g/k のように音が2つあるものは、1つ目が音節の最初、2つ目が音節の最後に来たときの音です。',
 'zh':'像 g/k 这样有两个读音的：前一个用在音节块开头，后一个用在结尾。',
 'yue':'好似 g/k 咁有兩個讀音嘅：前面嗰個用喺音節塊開頭，後面嗰個用喺收尾。',
 'th':'ถ้ามีสองเสียง เช่น g/k เสียงแรกใช้เมื่ออยู่ต้นช่อง เสียงที่สองใช้เมื่ออยู่ท้ายช่อง',
 'hi':'दो आवाज़ें, जैसे g/k: पहली ब्लॉक की शुरुआत में, दूसरी आख़िर में।',
 'mr':'दोन उच्चार, उदा. g/k: पहिला ब्लॉकच्या सुरुवातीला, दुसरा शेवटी.',
}
def chart(l, sound):
    b, p1, p2, sil = H[l]
    out = '<div class="tbl"><table class="t3"><tr><th colspan="2">%s</th><th colspan="2">%s</th><th colspan="2">%s</th></tr>' % (b, p1, p2)  # each heading spans a letter and its sound, so the chart fits a phone
    for r in ROWS:
        out += '<tr>' + ''.join('<td class="k">%s</td><td>%s</td>' % (c[0], c[1].replace('{silent}', sil)) if c else '<td></td><td></td>' for c in r) + '</tr>'
    return out + '</table></div>\n<p>' + NOTE[l] + '</p>'
def add(path, l):
    s = io.open(path, encoding='utf8').read()
    assert 'g/k</td>' not in s, ('chart already there', l)
    hs = [m for m in re.finditer(r'<h3>', s)]
    a = hs[1].start(); b = hs[2].start()  # the consonant section is the second <h3>
    sec = s[a:b]
    assert 'ㄱ' in sec and 'ㅌ' in sec and '<table' not in sec, l
    sound = re.search(r'<tr><th>[^<]*</th><th>([^<]*)</th>', s[:a]).group(1)  # the vowel table's own word for "Sound"
    k = sec.index('</p>') + 4  # after the paragraph that explains the shapes and the added strokes
    s = s[:a] + sec[:k] + '\n' + chart(l, sound) + sec[k:] + s[b:]
    io.open(path, 'w', encoding='utf8').write(s)
# built-in course: the lesson is a template literal inside src/app.html
F = os.path.join(ROOT, 'src', 'app.html'); s = io.open(F, encoding='utf8').read()
old = "ㅅ→ㅈ (j)→ㅊ (ch); ㄱ→ㅋ (k); ㅇ→ㅎ (h).</p>\n<h3>Stroke order</h3>"
assert s.count(old) == 1 and 'g/k</td>' not in s
css = ".tbl{overflow-x:auto}"
assert s.count(css) == 1
s = s.replace(css, css + ".tbl table.t3 th,.tbl table.t3 td{padding-left:6px;padding-right:6px}.tbl table.t3 td.k{width:1%;white-space:nowrap}")
s = s.replace(old, "ㅅ→ㅈ (j)→ㅊ (ch); ㄱ→ㅋ (k); ㅇ→ㅎ (h).</p>\n" + chart('en', 'Sound') + "\n<h3>Stroke order</h3>")
io.open(F, 'w', encoding='utf8').write(s)
for l in ['ceb','es','hi','id','ja','mr','th','tl','vi','yue','zh']:
    add(os.path.join(ROOT, 'tools', 'halves', 'native', l, 'ko', 'lessons', 'hangul.html'), l)
print('consonant_chart: built-in course + 11 lesson files')

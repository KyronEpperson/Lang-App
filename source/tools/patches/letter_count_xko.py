#!/usr/bin/env python3
# Adds the "How many letters are there?" box (40 letters, and which deck holds which) to lesson 1 of every x-ko course.
# Source of the English box: src/app.html, lesson "hangul". Run once; it refuses to add the box twice.
import io
L5='ㄲ kk, ㄸ tt, ㅃ pp, ㅆ ss, ㅉ jj'
V11='ㅐ ae, ㅔ e, ㅒ yae, ㅖ ye, ㅘ wa, ㅙ wae, ㅚ oe, ㅝ wo, ㅞ we, ㅟ wi, ㅢ ui'
T={
'es':'<b>¿Cuántas letras hay?</b> 40 en total. Esta lección cubre las 24 básicas: 14 consonantes y 10 vocales. Las otras 16 se forman a partir de ellas: 5 consonantes dobles ({L}) y 11 vocales compuestas ({V}). ㅐ y ㅔ están en el mazo <b>Vocales del hangul</b>; las demás, en <b>Letras avanzadas del hangul</b>.',
'id':'<b>Ada berapa huruf?</b> Semuanya 40. Pelajaran ini membahas 24 huruf dasar: 14 konsonan dan 10 vokal. 16 lainnya dibentuk dari huruf dasar itu: 5 konsonan rangkap ({L}) dan 11 vokal gabungan ({V}). ㅐ dan ㅔ ada di dek <b>Vokal (Hangul)</b>; sisanya ada di <b>Lanjutan (Hangul)</b>.',
'tl':'<b>Ilan ang mga letra?</b> 40 lahat. Sakop ng araling ito ang 24 na pangunahing letra: 14 na consonant at 10 vowel. Ang 16 na iba pa ay binubuo mula sa mga iyon: 5 dobleng consonant ({L}) at 11 pinagsamang vowel ({V}). Nasa deck na <b>Mga vowel (Hangul)</b> ang ㅐ at ㅔ; ang iba ay nasa <b>Abanteng Hangul</b>.',
'ceb':'<b>Pila ka letra tanan?</b> 40 tanan. Kining leksyon naghisgot sa 24 ka batakang letra: 14 ka consonant ug 10 ka vowel. Ang laing 16 gihimo gikan niini: 5 ka dobleng consonant ({L}) ug 11 ka hiniusang vowel ({V}). Ang ㅐ ug ㅔ anaa sa deck nga <b>Mga vowel (Hangul)</b>; ang uban anaa sa <b>Abante nga Hangul</b>.',
'vi':'<b>Có bao nhiêu chữ cái?</b> Tất cả là 40. Bài này dạy 24 chữ cơ bản: 14 phụ âm và 10 nguyên âm. 16 chữ còn lại được ghép từ các chữ đó: 5 phụ âm đôi ({L}) và 11 nguyên âm ghép ({V}). ㅐ và ㅔ nằm trong bộ thẻ <b>Nguyên âm (Hangul)</b>; các chữ còn lại nằm trong <b>Nâng cao (Hangul)</b>.',
'ja':'<b>文字は全部でいくつ？</b> 全部で40個です。このレッスンで学ぶのは基本の24個（子音14個と母音10個）です。残りの16個は基本の文字を組み合わせて作ります：濃音の子音5個（{L}）と合成母音11個（{V}）。ㅐ と ㅔ は「<b>ハングル・母音</b>」のデッキに、そのほかは「<b>ハングル・発展</b>」にあります。',
'zh':'<b>一共有多少个字母？</b>一共 40 个。这一课讲的是 24 个基本字母：14 个辅音和 10 个元音。其余 16 个由它们组合而成：5 个双辅音（{L}）和 11 个复合元音（{V}）。ㅐ 和 ㅔ 在卡组「<b>韩文元音</b>」里，其余的在「<b>韩文进阶字母</b>」里。',
'yue':'<b>一共有幾多個字母？</b>一共 40 個。呢一課教嘅係 24 個基本字母：14 個輔音同 10 個元音。其餘 16 個係由佢哋砌出嚟嘅：5 個雙輔音（{L}）同 11 個複合元音（{V}）。ㅐ 同 ㅔ 喺卡組「<b>韓文元音</b>」入面，其餘嘅喺「<b>韓文進階字母</b>」入面。',
'th':'<b>มีตัวอักษรทั้งหมดกี่ตัว?</b> ทั้งหมด 40 ตัว บทนี้สอน 24 ตัวพื้นฐาน คือพยัญชนะ 14 ตัวและสระ 10 ตัว อีก 16 ตัวที่เหลือสร้างจากตัวพื้นฐาน ได้แก่ พยัญชนะซ้อน 5 ตัว ({L}) และสระประสม 11 ตัว ({V}) ㅐ กับ ㅔ อยู่ในชุดการ์ด <b>สระฮันกึล</b> ส่วนตัวอื่นอยู่ใน <b>ฮันกึลขั้นสูง</b>',
'hi':'<b>कुल कितने अक्षर हैं?</b> कुल 40। इस पाठ में 24 बुनियादी अक्षर हैं: 14 व्यंजन और 10 स्वर। बाक़ी 16 इन्हीं से बनते हैं: 5 दोहरे व्यंजन ({L}) और 11 संयुक्त स्वर ({V})। ㅐ और ㅔ <b>हंगुल के स्वर</b> डेक में हैं; बाक़ी <b>हंगुल: एडवांस्ड</b> में।',
'mr':'<b>एकूण किती अक्षरं आहेत?</b> एकूण 40. या धड्यात 24 मूळ अक्षरं आहेत: 14 व्यंजनं आणि 10 स्वर. उरलेली 16 यांच्यापासूनच बनतात: 5 दुहेरी व्यंजनं ({L}) आणि 11 संयुक्त स्वर ({V}). ㅐ आणि ㅔ <b>हांगुल स्वर</b> डेकमध्ये आहेत; बाकीची <b>हांगुल: पुढचा टप्पा</b> मध्ये.',
}
for l,t in T.items():
    P='/home/claude/tools/halves/native/%s/ko/lessons/hangul.html'%l
    s=io.open(P,encoding='utf8').read()
    assert 'ㅞ we' not in s, l
    assert s.rstrip().endswith('</div>'), l
    s=s.rstrip('\n')+'\n<div class="tip">'+t.replace('{L}',L5).replace('{V}',V11)+'</div>\n'
    io.open(P,'w',encoding='utf8').write(s)
print('ok',len(T))

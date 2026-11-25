#!/usr/bin/env python3
# Character foundations, course en-th (FND-1). Edits tools/target/th/lessons-1.js and lessons-2.js; then
#   node tools/target/gen.js th && node tools/target/validate.js th && node tools/lessonread/apply.js en-th
# What changes: the two sound lessons (tones, sounds) cut their shared deck "Tones and vowel length" between them; the four script
# lessons (consonants, vowels, finals, tone-marks) name the flashcards of each section (`sections`). Lesson 5 gets a short
# "How Thai writing works" section and one section with flip tiles for each of the mid and high classes; lesson 8 gets a section with
# flip tiles for the low class; lesson 6 gets vowel tiles on the silent อ by where the vowel sits; lesson 11 gets tone-mark tiles.
# "Putting it together" decks that live inside the lesson: lesson 6 (consonant + vowel), lesson 8 (+ final), lesson 11 (+ tone mark).
# The seven letters in use with no card anywhere (ฎ ฏ, and ฆ ฌ ฑ ฒ ฬ) get cards in in-lesson decks in the section that teaches their class.
# The deck "Vowels and tone marks" is cut between lesson 6 and lesson 11. No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'th', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
TV, MH, LO, VT = "Tones and vowel length", "Consonants: mid and high class", "Consonants: low class", "Vowels and tone marks"

# lesson 5: the two rare mid-class letters
MID = [["ฎ ชฎา","daaw chá-daa","letter d, as in chá-daa (dancer's crown)","Mid class, rare. Sounds like ด; at the end of a syllable it is a held t."],
       ["ฏ ปฏัก","dtaaw bpà-dtàk","letter dt, as in bpà-dtàk (goad, spear)","Mid class, rare. Sounds like ต; at the end of a syllable it is a held t."],
       ["กฎ","gòt","rule","ก + a hidden short o + ฎ, which ends the syllable as a held t. Mid class, dead: low tone."],
       ["ปฏิทิน","bpà-dtì-thin","calendar","ปฏิ is read bpà-dtì: ฏ is dt."],
       ["ปฏิเสธ","bpà-dtì-sèet","to refuse; to deny","ปฏิ is bpà-dtì again; ธ at the end is a held t."]]
# lesson 6: consonant + vowel, mid- and high-class letters only, no final, no tone mark
W6 = [["ปู","bpuu","crab","ป mid class + ู long uu, below. Long vowel, no mark: mid tone."],
      ["ปี","bpii","year","ป mid class + ี long ii, above. Mid tone."],
      ["โต","dtoo","big; grown up","ต mid class + โ long oo, written first. Mid tone."],
      ["เจอ","jooe","to meet; to find","จ mid class + เ-อ long ooe, around. Mid tone."],
      ["เอา","ao","to take; to want (a thing)","Silent อ (mid class) + เ-า ao, around. เ-า acts like a long vowel: mid tone."],
      ["ดำ","dam","black","ด mid class + ำ am. ำ is short but ends in m, so it acts like a long vowel: mid tone."],
      ["จะ","jà","will (before a verb)","จ mid class + ะ short a, after. Mid class, short vowel: low tone."],
      ["เตะ","dtè","to kick","ต mid class + เ-ะ short e, around. Low tone."],
      ["เกาะ","gàw","island","ก mid class + เ-าะ short aw, around. Low tone."],
      ["สี","sǐi","color","ส high class + ี long ii, above. High class, long vowel, no mark: rising tone."],
      ["หู","hǔu","ear","ห high class + ู long uu, below. Rising tone."],
      ["ถือ","thǔue","to hold; to carry","ถ high class + ือ long uue: ื above, อ after. Rising tone."],
      ["หัว","hǔua","head","ห high class + ัว long uua. Rising tone."],
      ["เสือ","sǔuea","tiger","ส high class + เ-ือ long uuea, in three pieces. Rising tone."],
      ["เสีย","sǐia","broken; spoiled","ส high class + เ-ีย long iia, in three pieces. Rising tone."],
      ["ใส","sǎi","clear (water, glass)","ส high class + ใ ai, written first. ใ acts like a long vowel: rising tone."]]
# lesson 8: the five rare low-class letters
LOW = [["ฆ ระฆัง","khaaw rá-khang","letter kh, as in rá-khang (bell)","Low class, rare. Sounds like ค."],
       ["ฌ เฌอ","chaaw chooe","letter ch, as in chooe (tree, an old word)","Low class, the rarest letter in use. Sounds like ช."],
       ["ฑ มณโฑ","thaaw mon-thoo","letter th, as in mon-thoo (Montho, a queen in the Ramakien)","Low class, rare. Usually th like ท; in a few words it is said d."],
       ["ฒ ผู้เฒ่า","thaaw phûu-thâo","letter th, as in phûu-thâo (old man)","Low class, rare. Sounds like ท."],
       ["ฬ จุฬา","laaw jù-laa","letter l, as in jù-laa (star-shaped kite)","Low class, rare. Sounds like ล; at the end of a syllable it is n."]]
# lesson 8: consonant + vowel + final, every class, no tone mark
W8 = [["กิน","gin","to eat","ก mid class + short i + final น n. Live: mid tone."],
      ["ปิด","bpìt","to close; to turn off","ป mid class + short i + final ด, a held t. Dead: low tone."],
      ["เปิด","bpòoet","to open; to turn on","ป mid class + เ-ิ ooe + final ด, a held t. Dead: low tone."],
      ["หาย","hǎai","to disappear; to get better","ห high class + long aa + final ย y. Live: rising tone."],
      ["ขับ","khàp","to drive","ข high class + ั short a + final บ, a held p. Dead: low tone."],
      ["ถูก","thùuk","cheap; correct","ถ high class + long uu + final ก, a held k. Dead: low tone."],
      ["งาน","ngaan","work; a party","ง low class + long aa + final น n. Live: mid tone."],
      ["นอน","naawn","to sleep; to lie down","น low class + ออ long aaw + final น n. Live: mid tone."],
      ["เงิน","ngoen","money; silver","ง low class + เ-ิ (the vowel of เธอ, said short in this word) + final น n. Live: mid tone."],
      ["ยาว","yaao","long","ย low class + long aa + final ว w. Live: mid tone."],
      ["ชอบ","châawp","to like","ช low class + ออ long aaw + final บ, a held p. Dead, long vowel: falling tone."],
      ["พูด","phûut","to speak","พ low class + long uu + final ด, a held t. Dead, long: falling tone."],
      ["มีด","mîit","knife","ม low class + long ii + final ด, a held t. Dead, long: falling tone."],
      ["เล็ก","lék","small","ล low class + เ-็ short e + final ก, a held k. Dead, short vowel: high tone."],
      ["วัด","wát","temple","ว low class + ั short a + final ด, a held t. Dead, short: high tone."],
      ["ทุก","thúk","every","ท low class + short u + final ก, a held k. Dead, short: high tone."]]
# lesson 11: words with a tone mark
W11 = [["ไก่","gài","chicken","ก mid class + ไ ai + ่. Mid class with ่: low tone."],
       ["ป้า","bpâa","aunt (a parent's older sister)","ป mid class + long aa + ้. Mid class with ้: falling tone."],
       ["บ้าน","bâan","house; home","บ mid class + long aa + final น + ้: falling tone."],
       ["เกี๊ยว","gíiao","wonton","ก mid class + เ-ีย + final ว + ๊. ๊ on a mid-class letter: high tone."],
       ["ตั๋ว","dtǔua","ticket","ต mid class + ัว uua + ๋. ๋ on a mid-class letter: rising tone."],
       ["ก๋วยเตี๋ยว","gǔuai-dtǐiao","noodle soup","Two syllables, each a mid-class letter with ๋: both rising."],
       ["ไข่","khài","egg","ข high class + ไ ai + ่. High class with ่: low tone."],
       ["เสื้อ","sûuea","shirt; top","ส high class + เ-ือ uuea + ้. High class with ้: falling tone."],
       ["ผ้า","phâa","cloth","ผ high class + long aa + ้: falling tone."],
       ["ใช่","châi","yes; that's right","ช low class + ใ ai + ่. Low class with ่: falling tone."],
       ["ชื่อ","chûue","name","ช low class + ือ uue + ่: falling tone. The mark sits above ื."],
       ["ที่","thîi","at; place","ท low class + ี long ii + ่: falling tone."],
       ["ซื้อ","súue","to buy","ซ low class + ือ uue + ้. Low class with ้: high tone."],
       ["ร้อน","ráawn","hot","ร low class + ออ aaw + final น + ้: high tone."],
       ["ร้าน","ráan","shop; restaurant","ร low class + long aa + final น + ้: high tone."],
       ["น้อง","náawng","younger brother or sister","น low class + ออ aaw + final ง + ้: high tone."]]

SEC_TONES = [{"deck": TV, "n": [0, 3]}, [{"deck": TV, "n": [8, 11]}, {"deck": TV, "n": [16, 18]}], [{"deck": TV, "n": [3, 8]}, {"deck": TV, "n": [14, 16]}], None, None]
SEC_SOUNDS = [None, None, None, {"deck": TV, "n": [11, 14]}, None]
SEC_CONS = [None, None, None, [{"deck": MH, "n": [0, 7]}, {"name": "ฎ and ฏ", "cards": MID}], {"deck": MH, "n": [7, 17]}, None, None]
SEC_VOW = [{"deck": VT, "n": [0, 3]}, [{"deck": VT, "n": [3, 6]}, {"deck": VT, "n": [11, 13]}], [{"deck": VT, "n": [6, 11]}, {"deck": VT, "n": [13, 15]}], None, {"name": "First words: consonant and vowel", "cards": W6}]
SEC_FIN = [[LO, {"name": "Rare low-class letters", "cards": LOW}], None, None, None, {"name": "Words with a final", "cards": W8}]
SEC_TM = [None, None, None, None, {"deck": VT, "n": [15, 18]}, {"name": "Words with a tone mark", "cards": W11}]

T_MID = "ก=gaaw_gài จ=jaaw_jaan ฎ=daaw_chá-daa ฏ=dtaaw_bpà-dtàk ด=daaw_dèk ต=dtaaw_dtào บ=baaw_bai-máai ป=bpaaw_bplaa อ=aaw_àang"
T_HIGH = "ข=khǎaw_khài ฃ=khǎaw_khùuat ฉ=chǎaw_chìng ฐ=thǎaw_thǎan ถ=thǎaw_thǔng ผ=phǎaw_phûeng ฝ=fǎaw_fǎa ศ=sǎaw_sǎa-laa ษ=sǎaw_ruue-sǐi ส=sǎaw_sǔuea ห=hǎaw_hìip"
T_LOW = "ค=khaaw_khwaai ฅ=khaaw_khon ฆ=khaaw_rá-khang ง=ngaaw_nguu ช=chaaw_cháang ซ=saaw_sôo ฌ=chaaw_chooe ญ=yaaw_yǐng ฑ=thaaw_mon-thoo ฒ=thaaw_phûu-thâo ณ=naaw_neen ท=thaaw_thá-hǎan ธ=thaaw_thong น=naaw_nǔu พ=phaaw_phaan ฟ=faaw_fan ภ=phaaw_sǎm-phao ม=maaw_máa ย=yaaw_yák ร=raaw_ruuea ล=laaw_ling ว=waaw_wǎaen ฬ=laaw_jù-laa ฮ=haaw_nók-hûuk"

edit('lessons-1.js', [
 # ---- lesson 1: tones
 ('    deck: "Tones and vowel length",\n    body: `\n<p>This course teaches standard Thai',
  '    deck: "Tones and vowel length",\n    sections: ' + J(SEC_TONES) + ',\n    body: `\n<p>This course teaches standard Thai'),
 # ---- lesson 2: sounds
 ('    deck: "Tones and vowel length",\n    body: `\n<p>Thai has a few sounds',
  '    deck: "Tones and vowel length",\n    sections: ' + J(SEC_SOUNDS) + ',\n    body: `\n<p>Thai has a few sounds'),
 # ---- lesson 5: consonants
 ('    deck: "Consonants: mid and high class",\n    body: `\n<p>Thai script looks dense',
  '    deck: "Consonants: mid and high class",\n    sections: ' + J(SEC_CONS) + ',\n    body: `\n<h3>How Thai writing works</h3>\n<p>Thai script looks dense'),
 ('where English would put a comma or a period.</p>\n<h3>Letters have names</h3>',
  'where English would put a comma or a period.</p>\n<p>Thai runs left to right and has no capital letters. A syllable has up to four pieces: a consonant, a vowel written around it, sometimes a final consonant, and sometimes a tone mark on top. You read them in that order and get one syllable with one tone. This lesson gives you the consonants of two of the three classes; the vowels come in lesson 6, the low-class letters and the final consonants in lesson 8, and the tone marks in lesson 11.</p>\n<h3>Letters have names</h3>'),
 ('<p>อ is special: at the start of a syllable it is silent and only holds a vowel, as in อาหาร.</p>\n<h3>Same sound, different class</h3>',
  '<p>อ is special: at the start of a syllable it is silent and only holds a vowel, as in อาหาร.</p>\n<h3>The mid-class letters</h3>\n<p>Nine letters are mid class. Seven are common. ฎ and ฏ are rare twins of ด and ต, found in a few formal words such as กฎ <i>gòt</i> (rule). None of the mid-class letters has a puff of air. Tap a letter to hear its name.</p>\n{{tiles:' + T_MID + '}}\n<h3>The high-class letters</h3>\n<p>Eleven letters are high class, and every one is a breathy sound: kh, ch, th, ph, f, s or h. ฐ is a rare spelling of th. ศ and ษ are less common spellings of s, mostly in words from Pali and Sanskrit, but you will see them often, as in ประเทศ (country) and ภาษา (language). ฃ is no longer used; it stays in the alphabet only. Tap a letter to hear its name.</p>\n{{tiles:' + T_HIGH + '}}\n<h3>Same sound, different class</h3>'),
 ('<p>The other letters, such as ฆ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ศ ษ ฬ, appear in a few formal or borrowed words; learn them when you meet them. ฃ and ฅ are no longer used.</p>',
  '<p>The rare letters appear in a few formal or borrowed words. You have met the mid-class ฎ ฏ and the high-class ฐ ศ ษ on the tiles above. The less common low-class letters, ฆ ฌ ญ ฑ ฒ ณ ฬ, come with the rest of the low class in lesson 8. ฃ and ฅ are no longer used: they keep their place in the alphabet, but no modern word is spelled with them.</p>'),
 # ---- lesson 6: vowels
 ('    deck: "Vowels and tone marks",\n    body: `\n<p>English writes letters',
  '    deck: "Vowels and tone marks",\n    sections: ' + J(SEC_VOW) + ',\n    body: `\n<p>English writes letters'),
 ('<td class="k">เรือ</td></tr></table></div>\n{{ex:ตา|dtaa|eye}}',
  '<td class="k">เรือ</td></tr></table></div>\n<p>Thai names each vowel on the silent อ, so the tiles show it there. The top row is written after the consonant, the next above it (อือ also adds an อ after), the last below it. A short vowel on อ comes out with a low tone; the end of this lesson shows why. อำ, ใอ, ไอ and เอา are the exception: they end in an m, y or w sound and behave like long vowels, so they keep a mid tone. Tap a tile to hear it.</p>\n{{tiles:อะ=à อา=aa อำ=am ออ=aaw _ อิ=ì อี=ii อึ=ùe อือ=uue _ อุ=ù อู=uu}}\n{{ex:ตา|dtaa|eye}}'),
 ('only about twenty words use ใ.</p>\n{{ex:แม่|mâae|mother}}',
  'only about twenty words use ใ.</p>\n<p>A short vowel often adds ะ after the consonant: เอะ, แอะ, โอะ. Tap a tile to hear it.</p>\n{{tiles:เอะ=è เอ=ee แอะ=àe แอ=aae _ โอะ=ò โอ=oo ใอ=ai ไอ=ai}}\n{{ex:แม่|mâae|mother}}'),
 ('one vowel in three pieces. Others work the same way.</p>\n{{ex:เรือ|ruuea|boat}}',
  'one vowel in three pieces. Others work the same way. Here they are on อ.</p>\n{{tiles:เอาะ=àw เออะ=òe เออ=ooe เอา=ao _ เอีย=iia เอือ=uuea อัว=uua}}\n{{ex:เรือ|ruuea|boat}}'),
 ('<p>The describer comes after the noun: เรือใหม่ is "boat new".</p>\n',
  '<p>The describer comes after the noun: เรือใหม่ is "boat new".</p>\n<h3>Putting it together</h3>\n<p>A syllable with no final consonant is a consonant and a vowel. Read the consonant first, then the vowel, wherever it sits, then work out the tone: a mid-class letter with a long vowel gives a mid tone (ปู <i>bpuu</i>), with a short vowel a low tone (จะ <i>jà</i>); a high-class letter with a long vowel gives a rising tone (หู <i>hǔu</i>). The cards below are real words built only from mid- and high-class letters and the vowels in this lesson. Say each one aloud, with its tone, before you flip it.</p>\n{{ex:เสือ|sǔuea|tiger}}\n'),
 # ---- lesson 8: finals
 ('    deck: "Consonants: low class",\n    body: `\n<p>A Thai syllable can end in a consonant, but many letters share very few sounds at the end. Knowing how a syllable ends also tells you its tone.</p>\n<h3>Only eight final sounds</h3>\n',
  '    deck: "Consonants: low class",\n    sections: ' + J(SEC_FIN) + ',\n    body: `\n<h3>The low-class letters</h3>\n<p>Lesson 5 gave you the mid-class and high-class letters. The low class is the biggest: 24 letters, 14 of them common. Some sound like a high-class letter (ค like ข, ซ like ส); the others are m, n, ng, y, r, l and w, which only the low class has. ฆ ฌ ฑ ฒ ฬ are rare and turn up in formal words and names. ญ and ณ are less common, but you meet them every day in หญิง (woman) and คุณ (you). ฅ is no longer used. Tap a letter to hear its name.</p>\n{{tiles:' + T_LOW + '}}\n<h3>Only eight final sounds</h3>\n<p>A Thai syllable can end in a consonant, but many letters share very few sounds at the end. Knowing how a syllable ends also tells you its tone.</p>\n'),
 ('{{ex:ใกล้ตลาด|glâi dtà-làat|near the market}}\n<div class="tip">',
  '{{ex:ใกล้ตลาด|glâi dtà-làat|near the market}}\n<h3>Putting it together</h3>\n<p>Now you can read a whole syllable with no tone mark: the first consonant and its class, the vowel and its length, the final sound, then the tone from the table. Some vowels change their look before a final: ั above the consonant is a short a (วัด <i>wát</i>), เ-ะ becomes เ-็ (เล็ก <i>lék</i>), and เ-อ becomes เ-ิ (เปิด <i>bpòoet</i>; in เงิน <i>ngoen</i> it is said short). The cards below are real words. Work out each tone, say the word, then flip to check.</p>\n{{ex:ชอบ|châawp|to like}}\n<div class="tip">'),
])
edit('lessons-2.js', [
 # ---- lesson 11: tone marks
 ('    deck: "Vowels and tone marks",\n    body: `',
  '    deck: "Vowels and tone marks",\n    sections: ' + J(SEC_TM) + ',\n    body: `'),
 ('<td>mid-class letters only</td></tr></table></div>\n<h3>Mid-class letters: four marks, four tones</h3>',
  '<td>mid-class letters only</td></tr></table></div>\n<p>A mark sits above the first consonant, or above its vowel sign when that is on top too (ชื่อ). Here are no mark and the four marks on mid-class ก with a long aa. Tap each tile to hear the tone.</p>\n{{tiles:กา=gaa ก่า=gàa ก้า=gâa ก๊า=gáa ก๋า=gǎa}}\n<h3>Mid-class letters: four marks, four tones</h3>'),
 ('<p>High-class letters take only the first two marks, with the same tones as on a mid-class letter: ่ low, ้ falling.</p>',
  '<p>High-class letters take only the first two marks, with the same tones as on a mid-class letter: ่ low, ้ falling. Compare ขา <i>khǎa</i> (leg) with no mark.</p>\n{{tiles:ขา=khǎa ข่า=khàa ข้า=khâa}}'),
 ('and <b>ม้า</b> <i>máa</i> (horse) is high.</p>',
  'and <b>ม้า</b> <i>máa</i> (horse) is high.</p>\n<p>The same marks on low-class ค: คา <i>khaa</i>, ค่า <i>khâa</i> (price, fee), ค้า <i>kháa</i> (to trade). ค่า sounds just like ข้า above.</p>\n{{tiles:คา=khaa ค่า=khâa ค้า=kháa}}'),
 ('(more on that in the lesson on clusters).</p>\n{{ex:โต๊ะใหม่|dtó mài|a new table}}\n<div class="tip">',
  '(more on that in the lesson on clusters).</p>\n{{ex:โต๊ะใหม่|dtó mài|a new table}}\n<p>The cards below are everyday words with a tone mark, on letters of all three classes. For each one, find the first consonant and its class, find the mark, and say the tone before you flip the card.</p>\n<div class="tip">'),
])

#!/usr/bin/env python3
# Character foundations, course en-vi (FND-1). Edits tools/target/vi/lessons-1.js; then
#   node tools/target/gen.js vi && node tools/target/validate.js vi && node tools/lessonread/apply.js en-vi
# Vietnamese is Latin-script, but its writing is a full system: 7 extra letters, letter pairs for one sound, 5 tone marks on 6 tones,
# a strict syllable shape and vowel families. So it keeps its block of four foundation lessons:
#   alphabet  = the 29 letters (tiles) + the letters and pairs that read differently (cards), then reading first words
#   tones     = the six tones on one syllable (tiles) + the five marks (cards), then reading words by their marks
#   syllables = the paired first-sound spellings and ng (tiles + cards), the endings (tiles), then reading whole syllables
#   vowels    = the vowel families, glide endings, vowel pairs and o/u glides (tiles + cards), then reading words with them
# Pieces = letters, letter pairs, tone marks, endings, vowel spellings. Putting together = reading a whole syllable: first sound +
# vowel + last sound + tone mark. The shared deck "Letters and sounds" is cut across alphabet, syllables and vowels so that each card is
# taught once, in the section that teaches it. No card of an existing deck is changed. Every word reading comes from
# tools/target/vi/respell.js. Run once; every replacement is asserted.
import io, os, json, subprocess, unicodedata
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'vi', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
N = lambda s: unicodedata.normalize('NFC', s)

def respell(words):
    js = "const r=require(process.argv[1]).respell;console.log(JSON.stringify(JSON.parse(process.argv[2]).map(w=>r(w))))"
    out = subprocess.check_output(['node', '-e', js, os.path.join(ROOT, 'tools', 'target', 'vi', 'respell.js'), json.dumps(words)])
    return json.loads(out)
def words(rows):  # rows: [front, meaning, note] -> [front, reading, meaning, note], reading from the course's respeller
    rows = [[N(a), b, N(c)] for a, b, c in rows]
    rd = respell([r[0] for r in rows])
    return [[r[0], p, r[1], r[2]] for r, p in zip(rows, rd)]
def pieces(rows):
    return [[N(a), b, c, N(d)] for a, b, c, d in rows]

L = "Letters and sounds"
T = "Tone pairs"

# ---------- lesson 1: alphabet
NEWL = pieces([
 ["ă", "a", "a short ah", "Never ends a syllable: ăn (an), to eat."],
 ["â", "uh", "uh, as in cup, kept short", "Never ends a syllable: chân (chuhn), foot; leg."],
 ["ê", "ey", "ey, as in hey, with no glide", "đêm (deym), night"],
 ["ô", "oh", "oh, as in go, with no glide", "khô (khoh), dry"],
 ["ơ", "er", "the vowel of her, with no r", "cơm (kerm), cooked rice"],
 ["ư", "uu", "oo said with spread lips, as in a smile", "thư (tuu), letter (mail)"],
 ["đ", "d", "d, as in dog: the crossed d", "đi (dee), to go"]])
WATCH = pieces([
 ["d", "z", "z, as in zoo (Hanoi)", "da (zah), skin. Never the d of dog: that is đ."],
 ["r", "z", "z, the same sound as d (Hanoi)", "rau (zow), vegetables"],
 ["x", "s", "s, as in see", "xe (seh), vehicle; motorbike"],
 ["t", "dt", "between d and t, no puff of air", "tôi (dtohy), I; me"],
 ["ch", "ch", "ch, a little softer than English", "chân (chuhn), foot; leg"],
 ["tr", "ch", "the same sound as ch (Hanoi)", "trời (chuhy_), sky; weather"],
 ["nh", "ny", "ny, as in canyon", "nhà (nyah_), house; home"],
 ["ph", "f", "f, as in fun", "phở (fer?), pho (noodle soup)"],
 ["th", "t", "t with a puff of air", "thư (tuu), letter (mail)"],
 ["kh", "kh", "a soft throat sound, as in Scottish loch", "khô (khoh), dry"],
 ["gi", "z", "z again: gi, d and r sound alike (Hanoi)", "gió (zaw/), wind"]])
W1 = words([
 ["đỏ", "red", "đ + o, dipping tone (ỏ). đ is d, o is aw."],
 ["đất", "earth; ground", "đ + â + t. â is uh, the last t is not released."],
 ["dê", "goat", "d + ê. d is z, ê is ey."],
 ["ra", "go out; come out", "r + a. r is z."],
 ["rẻ", "cheap", "r + e, dipping tone (ẻ). r is z, e is eh."],
 ["xa", "far", "x + a. x is s."],
 ["xem", "watch; look at", "x + e + m. x is s."],
 ["thơ", "poem; poetry", "th + ơ. th is t with a puff, ơ is er with no r."],
 ["phố", "street (in town)", "ph + ô, rising tone (ố). ph is f."],
 ["tre", "bamboo", "tr + e. tr is ch."],
 ["chè", "sweet dessert soup; tea (Hanoi)", "ch + e, falling tone (è)."],
 ["nhỏ", "small", "nh + o, dipping tone (ỏ). nh is ny."],
 ["khó", "difficult", "kh + o, rising tone (ó). kh is the throat sound of loch."],
 ["giờ", "hour; o'clock", "gi + ơ, falling tone (ờ). gi is z."],
 ["chữ", "letter; written word", "ch + ư, broken tone (ữ). ư is oo with spread lips."],
 ["trăm", "hundred", "tr + ă + m. tr is ch, ă is a short a."],
 ["cần", "need", "c + â + n, falling tone (ầ). c is k, â is uh."],
 ["hồ", "lake", "h + ô, falling tone (ồ). ô is oh, with no glide."]])
SEC_A = [None,
         {"name": "New letters", "cards": NEWL},
         [{"deck": L, "n": [0, 8]}, {"deck": L, "n": [11, 13]}, {"name": "Letters to watch", "cards": WATCH}],
         None,
         None,
         {"name": "First words", "cards": W1}]
TILES_ABC = "a=ah ă â b=b c=k d đ e=eh ê g=g h=h i=ee k=k l=l m=m n=n o=aw ô ơ p=p q=kw s=s t u=oo ư v=v x y=ee"

# ---------- lesson 2: tones
MARKS = pieces([
 ["à", "ah_", "the falling-tone mark (huyền)", "Slopes down: mà (mah_), but."],
 ["á", "ah/", "the rising-tone mark (sắc)", "Slopes up: cá (kah/), fish."],
 ["ả", "ah?", "the dipping-tone mark (hỏi)", "A small hook, like a question mark with no dot: sửa (suu-uh?), to fix."],
 ["ã", "ah~", "the broken-tone mark (ngã)", "A squiggle: sữa (suu-uh~), milk."],
 ["ạ", "ah.", "the heavy-tone mark (nặng)", "The only mark under the vowel: bạn (bahn.), friend."]])
W2 = words([
 ["cha", "father (formal)", "ch + a, level tone: no mark, no symbol in the line."],
 ["thu", "autumn", "th + u, level tone."],
 ["là", "be (A is B)", "l + à, falling tone. Compare lá (leaf) and lạ (strange)."],
 ["về", "go back; go home", "v + ề, falling tone. ê keeps its hat; the tone mark goes on top."],
 ["trà", "tea", "tr + à, falling tone. Same sound as cha with a falling tone."],
 ["có", "have; there is", "c + ó, rising tone."],
 ["lá", "leaf", "l + á, rising tone."],
 ["đá", "ice; stone", "đ + á, rising tone. Compare đã (already)."],
 ["mở", "open; turn on", "m + ở, dipping tone. The hook sits on ơ."],
 ["thở", "breathe", "th + ở, dipping tone."],
 ["cả", "all; whole; even", "c + ả, dipping tone. Compare cá (fish)."],
 ["mũ", "hat", "m + ũ, broken tone."],
 ["đã", "already happened (past marker)", "đ + ã, broken tone. Compare đá (ice)."],
 ["vẽ", "draw; paint", "v + ẽ, broken tone."],
 ["cũ", "old (of things)", "c + ũ, broken tone."],
 ["chợ", "market", "ch + ợ, heavy tone: the dot goes under the vowel."],
 ["lạ", "strange; unfamiliar", "l + ạ, heavy tone."],
 ["họ", "they; them", "h + ọ, heavy tone."]])
SEC_T = [[{"deck": T, "n": [0, 3]}, {"name": "Tone marks", "cards": MARKS}],
         {"deck": T, "n": [3, 7]},
         None,
         {"deck": T, "n": [7, 17]},
         {"name": "Words with tones", "cards": W2}]

# ---------- lesson 3: syllables
FIRST = pieces([
 ["c", "k", "the k sound, before a, o, u and the rest", "cá (kah/), fish"],
 ["k", "k", "the k sound, before i, e and ê", "kem (kehm), ice cream"],
 ["gh", "g", "the g of get, before i, e and ê", "ghế (gey/), chair"],
 ["ng", "ng", "ng, as in singer, even at the start", "ngon (ngawn), tasty"],
 ["ngh", "ng", "the same ng, before i, e and ê", "nghe (ngeh), to listen"],
 ["qu", "kw", "k with a w glide", "quà (kwah_), gift"]])
W3 = words([
 ["làm", "do; make; work", "l + a + m, falling tone."],
 ["sáng", "morning", "s + a + ng, rising tone."],
 ["không", "no; not; zero", "kh + ô + ng, level tone."],
 ["ngon", "tasty; delicious", "ng + o + n. It starts with ng, as in singer."],
 ["đêm", "night (late)", "đ + ê + m, level tone."],
 ["sông", "river", "s + ô + ng, level tone."],
 ["xanh", "blue; green", "x + a + nh. -anh is aing."],
 ["nhanh", "fast; quick", "nh + a + nh: nh at the start is ny, at the end -anh is aing."],
 ["lạnh", "cold", "l + a + nh, heavy tone. -anh is aing."],
 ["sách", "book", "s + a + ch, rising tone. -ach is aik, cut short."],
 ["thích", "like", "th + i + ch, rising tone. -ich is ik."],
 ["học", "study; learn", "h + o + c, heavy tone. Stop ending: only / or . is possible."],
 ["đẹp", "beautiful; pretty", "đ + e + p, heavy tone. The p is not released."],
 ["tốt", "good (in quality or character)", "t + ô + t, rising tone. Stop ending."],
 ["mắt", "eyes", "m + ă + t, rising tone. Stop ending."],
 ["nóng", "hot", "n + o + ng, rising tone. Not a stop ending: ng can take any tone."]])
SEC_S = [None,
         None,
         [{"deck": L, "n": [8, 9]}, {"deck": L, "n": [15, 16]}, {"name": "First sounds", "cards": FIRST}],
         None,
         None,
         [{"deck": L, "n": [17, 18]}, {"name": "Whole syllables", "cards": W3}]]

# ---------- lesson 4: vowels
GLIDE = pieces([
 ["ai", "ahy", "long ah gliding to ee", "tai (dtahy), ear"],
 ["ay", "ai", "short a gliding to ee", "tay (dtai), hand; arm"],
 ["ao", "ahw", "long ah gliding to oo", "sao (sahw), star"],
 ["au", "ow", "short a gliding to oo", "sau (sow), after; behind"],
 ["âu", "uhw", "short uh gliding to oo", "đâu (duhw), where"],
 ["ây", "ay", "short uh gliding to ee", "đây (day), here"]])
PAIRS = pieces([
 ["iê", "ee-uh", "ee gliding to uh, with a sound after it", "tiền (dtee-uhn_), money"],
 ["ia", "ee-uh", "ee gliding to uh, at the end of a syllable", "bia (bee-uh), beer"],
 ["uô", "oo-uh", "oo gliding to uh, with a sound after it", "chuối (choo-uhy/), banana"],
 ["ua", "oo-uh", "oo gliding to uh, at the end of a syllable", "mua (moo-uh), to buy"],
 ["ươ", "uu-uh", "uu gliding to uh, with a sound after it", "nước (nuu-uhk/), water"],
 ["ưa", "uu-uh", "uu gliding to uh, at the end of a syllable", "mưa (muu-uh), rain"]])
WGL = pieces([
 ["oa", "wah", "w + ah", "hoa (hwah), flower"],
 ["oe", "weh", "w + eh", "khoe (khweh), to show off"],
 ["oă", "wa", "w + a short a", "hoặc (hwak.), or"],
 ["uâ", "wuh", "w + uh", "xuân (swuhn), spring"],
 ["uê", "wey", "w + ey", "thuê (twey), to rent"],
 ["uy", "wee", "w + ee", "tuy (dtwee), although"]])
W4 = words([
 ["mai", "tomorrow", "m + ai: long ah, then ee."],
 ["cay", "spicy", "c + ay: short a, then ee."],
 ["cao", "tall; high", "c + ao: long ah, then oo."],
 ["màu", "color", "m + au, falling tone: short a, then oo."],
 ["đâu", "where", "đ + âu: short uh, then oo."],
 ["mây", "cloud", "m + ây: short uh, then ee."],
 ["mèo", "cat", "m + eo, falling tone: eh, then oo."],
 ["mới", "new", "m + ơi, rising tone: er, then ee. The line writes ơi as uhy."],
 ["vui", "happy; fun", "v + ui: oo, then ee."],
 ["tiền", "money", "t + iê + n, falling tone. One syllable."],
 ["biển", "sea; beach", "b + iê + n, dipping tone."],
 ["bia", "beer", "b + ia: the pair iê, spelled ia at the end."],
 ["chuối", "banana", "ch + uô + i, rising tone. One syllable."],
 ["nước", "water; country", "n + ươ + c, rising tone. One syllable."],
 ["đường", "road; street; sugar", "đ + ươ + ng, falling tone."],
 ["mưa", "rain", "m + ưa: the pair ươ, spelled ưa at the end."],
 ["xoài", "mango", "x + oai, falling tone: o is a quick w, swahy."],
 ["khỏe", "well; healthy; strong", "kh + oe, dipping tone: o is a quick w, khweh."]])
SEC_V = [None,
         [{"deck": L, "n": [9, 11]}, {"deck": L, "n": [13, 15]}, {"name": "Glide endings", "cards": GLIDE}],
         [{"deck": L, "n": [16, 17]}, {"name": "Vowel pairs", "cards": PAIRS}],
         {"name": "Glide spellings", "cards": WGL},
         {"name": "Words with vowel pairs", "cards": W4}]

# in-lesson deck rules, checked here too
for sec in (SEC_A, SEC_T, SEC_S, SEC_V):
    fronts = []
    for e in sec:
        for x in (e if isinstance(e, list) else [e]):
            if isinstance(x, dict) and 'cards' in x:
                assert len(x['cards']) >= 5 and x['name'] not in (L, T)
                for c in x['cards']:
                    assert c[0] and c[1] and c[2], c
                    fronts.append(c[0])
    assert len(fronts) == len(set(fronts)), fronts

edit('lessons-1.js', [
 # ---- lesson 1: alphabet
 ('    deck: "Letters and sounds",\n    body: `\n<p>Vietnamese is written in the same Latin letters',
  '    deck: "Letters and sounds",\n    sections: ' + J(SEC_A) + ',\n    body: `\n<h3>How Vietnamese writing works</h3>\n<p>Vietnamese is written in the same Latin letters'),
 ('This lesson teaches you to read both.</p>\n<h3>Seven extra letters</h3>',
  'This lesson teaches you to read both.</p>\n'
  '<p>The spelling is regular: once you know the pieces, you can say any word you see. Each written chunk between spaces is one syllable, built from a first sound (one letter or a pair such as <b>nh</b>, sometimes none), a vowel, maybe a last sound, and a tone: five of the six tones have a mark. These four lessons teach the pieces in order: the letters here, then the tones, then how a syllable is built, then the vowels.</p>\n'
  '<h3>Seven extra letters</h3>'),
 ('so leaving the mark off writes a different letter.</p>\n{{ex:đi|dee|to go}}',
  'so leaving the mark off writes a different letter.</p>\n'
  '<p>Here are all 29. Tap a letter to see how it reads. The seven new ones have their own cards below. Most of the others sound close to what an English reader expects; the ones that do not come next.</p>\n'
  '{{tiles:' + TILES_ABC + '}}\n{{ex:đi|dee|to go}}'),
 ('but the lines here show Hanoi.</p>\n<h3>Reading the pronunciation line</h3>',
  'but the lines here show Hanoi.</p>\n'
  '<p>Tap each letter and letter pair. A pair such as <b>nh</b> or <b>th</b> is one sound, never two. <b>ng</b> gets its own section in lesson 3.</p>\n'
  '{{tiles:d r x t _ ch tr nh ph th kh gi}}\n'
  '<h3>Reading the pronunciation line</h3>'),
 ('hide it once the letters feel natural.</p>\n<div class="tip"><b>Most common mistake:</b> reading <b>d</b> as an English d.',
  'hide it once the letters feel natural.</p>\n'
  '<h3>Read your first words</h3>\n'
  '<p>Now put the letters together. Read a syllable left to right: first sound, vowel, last sound. <b>đ + ỏ</b> is <b>đỏ</b>, <i>daw?</i>: đ is d, o is <i>aw</i>, and the hook is a tone mark (the next lesson teaches the tones; for now, trust the symbol in the line). Every card below is a common word spelled with the letters of this lesson. Read it aloud before you flip it.</p>\n'
  '<div class="tip"><b>Most common mistake:</b> reading <b>d</b> as an English d.'),
 # ---- lesson 2: tones
 ('    deck: "Tone pairs",\n    body: `',
  '    deck: "Tone pairs",\n    sections: ' + J(SEC_T) + ',\n    body: `'),
 ('</table></div>\n{{ex:ma|mah|ghost}}',
  '</table></div>\n'
  '<p>Tap each tile: one syllable, <b>ma</b>, in all six tones. Then learn the five marks on their own with the cards below.</p>\n'
  '{{tiles:ma mà má mả=mah? mã=mah~ mạ=mah.}}\n{{ex:ma|mah|ghost}}'),
 ('A wrong mark, though, is a different word, and counts as wrong.</p>\n',
  'A wrong mark, though, is a different word, and counts as wrong.</p>\n'
  '<p>The cards below are pairs that differ only in their marks: <b>mua</b> (to buy) and <b>múa</b> (to dance), <b>sữa</b> (milk) and <b>sửa</b> (to fix), <b>năm</b> (five; year) and <b>nằm</b> (to lie down). Read the mark before you flip.</p>\n'),
 ('<b>Bạn tôi bán bàn.</b> (My friend sells tables.)</div>\n`,',
  '<b>Bạn tôi bán bàn.</b> (My friend sells tables.)</div>\n'
  '<h3>Read with tones</h3>\n'
  '<p>Now read whole words with their tones. Find the mark first: it tells you the pitch before you say a single letter. Some cards differ only in the mark: <b>lá</b> (leaf), <b>là</b> (to be) and <b>lạ</b> (strange). Say each word aloud, then flip.</p>\n`,'),
 # ---- lesson 3: syllables
 ('    deck: "Letters and sounds",\n    body: `\n<p>An English word can pile up consonants',
  '    deck: "Letters and sounds",\n    sections: ' + J(SEC_S) + ',\n    body: `\n<p>An English word can pile up consonants'),
 ('{{ex:quà|kwah_|gift}}\n',
  '{{ex:quà|kwah_|gift}}\n<p>Tap each spelling. Each of the first three rows is one sound, written two ways; <b>qu</b> is the k sound before a w glide.</p>\n{{tiles:c k _ _ _ g=g gh _ _ _ ng ngh _ _ _ qu}}\n'),
 ('{{ex:Nguyễn|ngwee-uhn~|Nguyen (family name)}}\n',
  '{{ex:Nguyễn|ngwee-uhn~|Nguyen (family name)}}\n<p>The cards below cover the first sounds of this lesson: the spellings that change before i, e and ê, <b>qu</b>, and <b>ng</b>.</p>\n'),
 ('{{ex:sách|saik/|book}}\n',
  '{{ex:sách|saik/|book}}\n<p>Here are the endings on the vowel a. Tap each one. The second row is the stop endings, which always carry a mark, as the next section explains.</p>\n{{tiles:am=ahm an=ahn ang=ahng anh=aing _ áp=ahp/ át=aht/ ác=ahk/ ách=aik/}}\n'),
 ('<b>bánh mì</b> said as its line shows, <i>baing/ mee_</i>, with no k sound.</div>\n`,',
  '<b>bánh mì</b> said as its line shows, <i>baing/ mee_</i>, with no k sound.</div>\n'
  '<h3>Read whole syllables</h3>\n'
  '<p>Now read whole syllables. Split each one into its parts: first sound, vowel, last sound, tone. <b>x + a + nh</b> is <b>xanh</b>, <i>saing</i>; <b>h + o + c</b> with the heavy tone is <b>học</b>, <i>hawk.</i> Every card below is a common word of one syllable. Say its parts, then say it whole, then flip.</p>\n`,'),
 # ---- lesson 4: vowels
 ('    deck: "Letters and sounds",\n    body: `\n<p>English spells about fifteen vowel sounds',
  '    deck: "Letters and sounds",\n    sections: ' + J(SEC_V) + ',\n    body: `\n<p>English spells about fifteen vowel sounds'),
 ('then pull your lips into a smile without moving your tongue.</p>\n',
  'then pull your lips into a smile without moving your tongue.</p>\n<p>Tap each vowel letter. Each row is one family.</p>\n'
  '{{tiles:a=ah ă=a â=uh _ _ o=aw ô=oh ơ=er _ _ e=eh ê=ey _ _ _ u=oo ư=uu _ _ _ i=ee y=ee}}\n'),
 ('{{ex:sau|sow|after; behind}}\n',
  '{{ex:sau|sow|after; behind}}\n<p><b>âu</b> and <b>ây</b> use the short â. And <b>ă</b> and <b>â</b> are short on their own, as in <b>ăn</b> and <b>chân</b>. Tap each glide ending.</p>\n{{tiles:ai ay ao au _ âu ây}}\n'),
 ('{{ex:Tôi muốn ăn cơm gà.|dtohy moo-uhn/ an kerm gah_|I want to eat rice with chicken.}}\n',
  '{{ex:Tôi muốn ăn cơm gà.|dtohy moo-uhn/ an kerm gah_|I want to eat rice with chicken.}}\n<p>Tap each pair. Both spellings of a pair sound the same; the second is used when nothing follows.</p>\n{{tiles:iê ia _ _ _ uô ua _ _ _ ươ ưa}}\n'),
 ('{{ex:hoa|hwah|flower}}\n',
  '{{ex:hoa|hwah|flower}}\n<p>Six glide spellings to know. Tap each one.</p>\n{{tiles:oa oe oă uâ uê uy}}\n'),
 ('<b>cơm</b> said "kohm" or "kurm" → <b>cơm</b> said "kerm", with no r.</div>\n`,',
  '<b>cơm</b> said "kohm" or "kurm" → <b>cơm</b> said "kerm", with no r.</div>\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now read words with glides and vowel pairs. However many vowel letters you see, one chunk is one syllable: <b>ch + uô + i</b> is <b>chuối</b>, <i>choo-uhy/</i>, one quick glide. A few cards add three more glide endings built the same way: <b>eo</b> (eh, then oo), <b>ơi</b> (er, then ee) and <b>ui</b> (oo, then ee). Every card below is a common word. Read it aloud before you flip it.</p>\n`,'),
])

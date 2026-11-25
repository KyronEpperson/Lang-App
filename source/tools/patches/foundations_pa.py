#!/usr/bin/env python3
# Character foundations, course en-pa (FND-1). Edits tools/target/pa/lessons-1.js; then
#   node tools/target/gen.js pa && node tools/target/validate.js pa && node tools/lessonread/apply.js en-pa
# What changes: the five script lessons (vowels, letters-1, letters-2, nasal, tones) name the flashcards of each section (`sections`).
# Pieces: the carriers and vowel letters, the 35 letters row by row (flip tiles for every letter), the dotted letters and the marks.
# Putting together: letters-1 and letters-2 each end with a section of real words spelled only with what has been taught, as a deck
# that lives inside the lesson. Letters with no card before (ੳ ੲ ਙ ਞ ਢ ਬ ਮ ਯ ਰ ਲ ਵ) get one in an in-lesson deck of the lesson
# that teaches them; the nasal lesson gets an in-lesson deck of the six dotted letters and now teaches them first.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'pa', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        if callable(b):
            s = b(s); continue
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
VS, L1, L2, TBA, TN = "Vowel signs", "Letters 1: k and ch rows", "Letters 2: ṭ, t and p rows, and the rest", "Tippi, bindi and addak", "Tones"

CW = [["ੳ","ūṛā","ūṛā, the carrier for u, ū and o","Its name. Never written alone: with a sign on it, it is ਉ, ਊ or ਓ."],
      ["ੲ","īṛī","īṛī, the carrier for i, ī and e","Its name. Never written alone: with a sign on it, it is ਇ, ਈ or ਏ."],
      ["ਕਈ","kaī","several","ਕ + ਈ. After a vowel, ī is written as the vowel letter ਈ, on ੲ."],
      ["ਕੋਈ","koī","someone; anyone","ਕੋ + ਈ: ਕ with the sign ੋ, then the vowel letter ਈ."],
      ["ਆਓ","āo","come! (polite)","ਆ + ਓ: two vowel letters, one on ਅ and one on ੳ."],
      ["ਆਈ","āī","came (said of a woman)","ਆ + ਈ: two long vowels, one on ਅ and one on ੲ."]]
W1 = [["ਙ","ṅa","the letter ṅa (ng); rare","Found almost only inside a word, before ਕ ਖ ਗ ਘ. Today a tippi usually does its job (lesson 4)."],
      ["ਞ","ña","the letter ña (ny); rare","Found almost only inside a word, before ਚ ਛ ਜ ਝ. Today a tippi usually does its job: ਪੰਜ, five."],
      ["ਹੈ","hai","is","ਹ + ੈ. At the start of a word ਹ is a plain h; ai as in \"bet\"."],
      ["ਹੋ","ho","are (with ਤੁਸੀਂ, the polite you)","ਹ + ੋ: ho, as in \"oh\". ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? How are you?"],
      ["ਸੀ","sī","was","ਸ + ੀ: s, then a long ī."],
      ["ਜੇ","je","if","ਜ + ੇ: j, then e as in \"say\"."],
      ["ਜਾਓ","jāo","go! (polite)","ਜਾ + ਓ: ਜ with ਾ, then the vowel letter ਓ."],
      ["ਖਾਓ","khāo","eat! (polite)","ਖਾ + ਓ. ਖ has a puff of air."],
      ["ਚਾਚੀ","chāchī","aunt (wife of ਚਾਚਾ)","ਚਾ + ਚੀ. Both ਚ with no puff of air."],
      ["ਚਾਕੂ","chākū","knife","ਚਾ + ਕੂ. The sign ੂ hangs below ਕ: long ū."],
      ["ਕਾਜੂ","kājū","cashew","ਕਾ + ਜੂ"],
      ["ਸੂਈ","sūī","needle","ਸੂ + ਈ. After a vowel, ī is the vowel letter ਈ."],
      ["ਜੀਜਾ","jījā","brother-in-law (sister's husband)","ਜੀ + ਜਾ"],
      ["ਸੋਚ","soch","thought; think!","ਸੋ + ਚ. The a of the last ਚ is silent."],
      ["ਕੇਸ","kes","uncut hair (as Sikhs keep it)","ਕੇ + ਸ. The a of the last ਸ is silent."]]
ML = [["ਢ","ḍhà","the letter ḍha (low tone)","A tonal letter: at the start of a word, said ṭ with a falling pitch. Word: ਢੋਲ, dhol."],
      ["ਬ","ba","the letter ba (b)","As in \"bus\". Word: ਕਿਤਾਬ, book."],
      ["ਮ","ma","the letter ma (m)","As in \"man\". Word: ਕਮਰਾ, room."],
      ["ਯ","ya","the letter ya (y)","As in \"yes\". Word: ਯਾਰ, friend."],
      ["ਰ","ra","the letter ra (a tapped r)","A quick tap, like the tt in American \"butter\". Word: ਤਾਰਾ, star."],
      ["ਲ","la","the letter la (l)","A clear l, as in \"leaf\". Word: ਦਾਲ, lentils."],
      ["ਵ","va","the letter va (between v and w)","Between English v and w. Word: ਵਾਲ, hair."]]
W2 = [["ਪਾਣੀ","pāṇī","water","ਪਾ + ਣੀ. ਣ is curled back and never starts a word."],
      ["ਰੋਟੀ","roṭī","roti (flatbread); a meal","ਰੋ + ਟੀ. ਟ is curled back."],
      ["ਦਾਲ","dāl","dal (lentils)","ਦਾ + ਲ. ਦ with the tongue on the teeth; the last a is silent."],
      ["ਦਿਨ","din","day","ਦਿ + ਨ. ਿ is written before ਦ but said after it."],
      ["ਰਾਤ","rāt","night","ਰਾ + ਤ. ਤ with the tongue on the teeth."],
      ["ਸਾਲ","sāl","year","ਸਾ + ਲ"],
      ["ਕਮਰਾ","kamrā","room","ਕ + ਮ + ਰਾ: kam-rā. The a of ਮ is not said."],
      ["ਕਿਤਾਬ","kitāb","book","ਕਿ + ਤਾ + ਬ"],
      ["ਮੇਰਾ","merā","my","ਮੇ + ਰਾ"],
      ["ਨਾਲ","nāl","with","ਨਾ + ਲ"],
      ["ਯਾਰ","yār","friend, buddy (informal)","ਯਾ + ਰ"],
      ["ਵੀ","vī","also, too","ਵ + ੀ"],
      ["ਲੋਕ","lok","people","ਲੋ + ਕ"],
      ["ਛੋਟਾ","chhoṭā","small","ਛੋ + ਟਾ. ਛ has a puff of air; ਟ is curled back."],
      ["ਲਾਲ","lāl","red","ਲਾ + ਲ"],
      ["ਹਾਥੀ","hāthī","elephant","ਹਾ + ਥੀ. ਥ is a dental t with a puff, never the th of \"think\"."],
      ["ਠੀਕ","ṭhīk","fine; OK","ਠੀ + ਕ. ਠ is curled back, with a puff of air."],
      ["ਗਲੀ","galī","street, lane","ਗ + ਲੀ"]]
DL = [["ਸ਼","sha","the letter sha (sh)","ਸ with a dot: sh, as in \"shoe\". Word: ਸ਼ਹਿਰ, city."],
      ["ਖ਼","ḵha","the letter ḵha (a rough kh)","ਖ with a dot: like the ch of Scottish \"loch\". Many speakers say plain ਖ. Word: ਖ਼ੁਸ਼, happy."],
      ["ਗ਼","ġa","the letter ġa (a soft, gargled g)","ਗ with a dot. Many speakers say plain ਗ. Word: ਗ਼ਰੀਬ, poor."],
      ["ਜ਼","za","the letter za (z)","ਜ with a dot: z, as in \"zoo\". Word: ਜ਼ਰੂਰ, of course."],
      ["ਫ਼","fa","the letter fa (f)","ਫ with a dot: the English f. Word: ਫ਼ੋਨ, phone."],
      ["ਲ਼","ḷa","the letter ḷa (l, tongue curled back)","ਲ with a dot. Rare in print; this course writes plain ਲ."]]

SEC_V = [None, {"deck": VS, "n": [10, 18]}, None, [{"deck": VS, "n": [0, 10]}, {"name": "Carriers at work", "cards": CW}]]
SEC_1 = [{"deck": L1, "n": [0, 10]}, None, None, [{"deck": L1, "n": [10, 17]}, {"name": "Rows 1 to 3 in words", "cards": W1}]]
SEC_2 = [{"deck": L2, "n": [0, 9]}, None, [{"deck": L2, "n": [9, 13]}, {"name": "More letters", "cards": ML}], [{"deck": L2, "n": [13, 18]}, {"name": "Whole words", "cards": W2}]]
SEC_N = [{"name": "Dotted letters", "cards": DL}, None, {"deck": TBA, "n": [0, 11]}, {"deck": TBA, "n": [11, 18]}]
SEC_T = [{"deck": TN, "n": [0, 3]}, {"deck": TN, "n": [3, 11]}, {"deck": TN, "n": [11, 17]}]

def sec(deck, spec):
    a = '    deck: "' + deck + '",\n    body: `'
    return (a, '    deck: "' + deck + '",\n    sections: ' + J(spec) + ',\n    body: `')

# ---- nasal: teach the dotted letters first (they are letters; the marks then build words from all of them)
N_START = '<p>Four small marks turn the letters you know into real words. They sit on top of the headline or next to a letter, so they are easy to miss.</p>\n'
N_TIPPI = '<h3>Tippi and bindi: the nasal marks</h3>'
N_DOT = '<h3>Dotted letters</h3>'
N_END = '{{ex:ਫ਼ੋਨ|fon|phone}}\n'
N_INTRO = '<p>This lesson adds the last pieces. First, a dot under a letter makes a new sound. Then three small marks turn the letters you know into real words. The marks sit on top of the headline or next to a letter, so they are easy to miss.</p>\n'
def nasal_reorder(s):
    for x in (N_START, N_TIPPI, N_DOT, N_END): assert s.count(x) == 1, ('lessons-1.js', s.count(x), x[:60])
    i0 = s.index(N_START); it = s.index(N_TIPPI); idot = s.index(N_DOT); iend = s.index(N_END) + len(N_END)
    assert i0 < it < idot < iend
    marks = s[it:idot]; dots = s[idot:iend]
    dots = dots.replace(N_END, N_END + '<p>Tap a letter to hear it and see how it reads. The cards after this section are the six dotted letters.</p>\n{{tiles:ਸ਼=sha ਖ਼=ḵha ਗ਼=ġa ਜ਼=za ਫ਼=fa ਲ਼=ḷa}}\n')
    return s[:i0] + N_INTRO + dots + marks + s[iend:]

edit('lessons-1.js', [
 # ---- lesson 1: vowels
 sec(VS, SEC_V),
 ('<tr><td class="k">ੲ</td><td class="k">ਇ ਈ ਏ</td></tr></table></div>\n{{ex:ਆਓ|āo|come! (polite)}}',
  '<tr><td class="k">ੲ</td><td class="k">ਇ ਈ ਏ</td></tr></table></div>\n<p>Each carrier has a name: <b>ੳ</b> <i>ūṛā</i>, <b>ਅ</b> <i>aiṛā</i> and <b>ੲ</b> <i>īṛī</i>. <b>ਅ</b> with no sign is also the vowel letter a. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ੳ=ūṛā ਉ ਊ ਓ _ ਅ ਆ ਐ ਔ _ ੲ=īṛī ਇ ਈ ਏ _}}\n{{ex:ਆਓ|āo|come! (polite)}}'),
 ('{{ex:ਕੋਈ|koī|someone; anyone}}\n<div class="tip">',
  '{{ex:ਕੋਈ|koī|someone; anyone}}\n<p>The cards below are the ten vowel letters, then the two carriers by name, then four words that put the carriers to work. Read each one aloud before you flip it.</p>\n<div class="tip">'),
 # ---- lesson 2: letters-1
 sec(L1, SEC_1),
 ('<td class="k">ਞੰਞਾ</td><td>ny; rare</td></tr></table></div>\n',
  '<td class="k">ਞੰਞਾ</td><td>ny; rare</td></tr></table></div>\n<p>The full chart is laid out in rows of five. Its first row is the three carriers from lesson 1, then <b>ਸ</b> and <b>ਹ</b>; next come the k row and the ch row. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ੳ=ūṛā ਅ ੲ=īṛī ਸ ਹ ਕ ਖ ਗ ਘ ਙ=ṅa ਚ ਛ ਜ ਝ ਞ=ña}}\n'),
 ('{{ex:ਚਾਹ|chā́h|tea}}\n<p><b>ਙ</b> and <b>ਞ</b> appear almost only in the middle of a word, before a letter of their own row, so you will rarely see them.</p>\n',
  '{{ex:ਚਾਹ|chā́h|tea}}\n<h3>Putting letters and signs together</h3>\n<p>A word is a row of syllables, read left to right: each letter with its vowel sign, or with its own short a. <b>ਚਾਕੂ</b> is <b>ਚਾ</b> + <b>ਕੂ</b>, <i>chākū</i>, knife. A vowel letter can follow a syllable too: <b>ਸੂਈ</b> is <b>ਸੂ</b> + <b>ਈ</b>, <i>sūī</i>, needle.</p>\n{{ex:ਚਾਕੂ|chākū|knife}}\n<p><b>ਙ</b> and <b>ਞ</b> appear almost only in the middle of a word, before a letter of their own row, so you will rarely see them. Each has a card below; the other cards are real words spelled only with letters and signs you know. Read each one aloud before you flip it.</p>\n'),
 # ---- lesson 3: letters-2
 sec(L2, SEC_2),
 ('<tr><td class="k">ਣ ṇa</td><td class="k">ਨ na</td></tr></table></div>\n',
  '<tr><td class="k">ਣ ṇa</td><td class="k">ਨ na</td></tr></table></div>\n<p>In the full chart these are two rows of five: the ṭ row, then the t row. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ਟ ਠ ਡ ਢ=ḍhà ਣ ਤ ਥ ਦ ਧ ਨ}}\n'),
 ('with the pitch falling on the next vowel.</p>\n{{ex:ਪਲ|pal|moment}}',
  'with the pitch falling on the next vowel.</p>\n{{tiles:ਪ ਫ ਬ=ba ਭ ਮ=ma}}\n{{ex:ਪਲ|pal|moment}}'),
 ('<tr><td class="k">ੜ</td><td>ṛa</td></tr></table></div>\n',
  '<tr><td class="k">ੜ</td><td>ṛa</td></tr></table></div>\n{{tiles:ਯ=ya ਰ=ra ਲ=la ਵ=va ੜ}}\n<p>The cards after this section are the p row, <b>ੜ</b>, and the letters that have no card of their own yet: <b>ਢ</b>, <b>ਬ</b>, <b>ਮ</b>, <b>ਯ</b>, <b>ਰ</b>, <b>ਲ</b> and <b>ਵ</b>.</p>\n'),
 ('{{ex:ਦਾਲ|dāl|dal (lentils)}}\n<p>The romanisation is a crutch',
  '{{ex:ਦਾਲ|dāl|dal (lentils)}}\n<h3>Reading whole words</h3>\n<p>You now know all 35 letters. Read a word one syllable at a time: a letter with its vowel sign, or with its own short a, which is usually silent at the end of a word. <b>ਕਿਤਾਬ</b> is <b>ਕਿ</b> + <b>ਤਾ</b> + <b>ਬ</b>, <i>kitāb</i>, book. The cards below are common words spelled only with the letters and signs you have learned. Read each one aloud before you flip it.</p>\n{{ex:ਕਿਤਾਬ|kitāb|book}}\n<p>The romanisation is a crutch'),
 # ---- lesson 4: nasal
 sec(TBA, SEC_N),
 ('', nasal_reorder),
 ('<li>Anywhere else, including the end of a word, there is no n at all: the vowel is said through the nose, like the French "non". The romanisation writes a wavy line on the vowel.</li></ul>\n',
  '<li>Anywhere else, including the end of a word, there is no n at all: the vowel is said through the nose, like the French "non". The romanisation writes a wavy line on the vowel.</li></ul>\n<div class="tbl"><table><tr><th>Mark</th><th>Name</th><th>Goes with</th><th>Example</th></tr><tr><td class="k">ੰ</td><td>tippi</td><td>the inherent a, ਿ, ੁ, ੂ</td><td class="k">ਮੁੰਡਾ</td></tr><tr><td class="k">ਂ</td><td>bindi</td><td>ਾ ੀ ੇ ੈ ੋ ੌ</td><td class="k">ਹਾਂ</td></tr></table></div>\n'),
 ('{{ex:ਪੱਕਾ|pakkā|sure; ripe}}\n',
  '{{ex:ਪੱਕਾ|pakkā|sure; ripe}}\n<p>The cards below are words with tippi, bindi and addak. Read each one aloud before you flip it.</p>\n'),
 ('{{ex:ਪੜ੍ਹਨਾ|páṛhnā|to read; to study}}\n',
  '{{ex:ਪੜ੍ਹਨਾ|páṛhnā|to read; to study}}\n<p>The last cards are words with a letter written underneath or a dotted letter.</p>\n'),
 # ---- lesson 5: tones (a sound lesson: sections only)
 sec(TN, SEC_T),
])

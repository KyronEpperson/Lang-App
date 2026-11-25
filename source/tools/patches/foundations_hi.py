#!/usr/bin/env python3
# Character foundations, course en-hi (FND-1). Edits tools/target/hi/lessons-1.js; then
#   node tools/target/gen.js hi && node tools/target/validate.js hi && node tools/lessonread/apply.js en-hi
# What changes: the four script lessons (vowels, consonants, consonants-2, conjuncts) name the flashcards of each section (`sections`).
# Pieces: the vowel letters, the vowel signs (matras), the consonants row by row (grid charts kept, flip tiles added),
# the flaps and nuqta letters, and the special conjuncts. Putting together: consonant + vowel sign words at the end of
# consonants-2 (in-lesson deck "First words"); conjunct and nasal words are the existing "Conjuncts and nasals" deck.
# Letters with no card anywhere before (ष ढ़ क़ ख़ ग़ ज़ फ़ ङ ञ क्ष त्र ज्ञ श्र) get in-lesson cards.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'hi', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
V, C1, C2, CJ = "Vowels and vowel signs", "Consonants 1: k, ch and ṭ rows", "Consonants 2: t and p rows, and the rest", "Conjuncts and nasals"

ML = [["ष","sha","the letter sha (sh)","Said the same as श. Mostly in words from Sanskrit. Word: भाषा, language."],
      ["ढ़","ṛha","the letter ṛha (a flap with a puff)","ड़ with a puff of air. Word: पढ़ना, to read."],
      ["क़","qa","the letter qa (k from the throat)","क with a dot. Said far back in the throat; many speakers just say k."],
      ["ख़","ḵha","the letter ḵha (a throaty kh)","Like the ch of Scottish \"loch\"; many speakers just say kh. Word: ख़ुश, happy."],
      ["ग़","ġa","the letter ġa (a throaty g)","ग with a dot. Many speakers just say g."],
      ["ज़","za","the letter za (z)","As in \"zoo\". ज with a dot. Word: ज़रूर, of course."],
      ["फ़","fa","the letter fa (f)","As in \"fun\". Without the dot, फ is ph. Word: फ़ोन, phone."]]
FW = [["पानी","pānī","water","पा (प + ा) + नी (न + ी)"],
      ["घर","ghar","house; home","घ + र. No signs, and the final a is silent."],
      ["खाना","khānā","food; to eat","खा (ख + ा) + ना (न + ा)"],
      ["किताब","kitāb","book","कि (क + ि) + ता (त + ा) + ब. ि is written before क, said after it."],
      ["दूध","dūdh","milk","दू (द + ू) + ध"],
      ["चाय","chāy","tea","चा (च + ा) + य"],
      ["छोटा","chhoṭā","small","छो (छ + ो) + टा (ट + ा)"],
      ["कमरा","kamrā","room","क + म + रा (र + ा). The a of म is not said: kam-rā."],
      ["रात","rāt","night","रा (र + ा) + त"],
      ["आदमी","ādmī","man","आ + द + मी (म + ी). The a of द is not said: ād-mī."],
      ["औरत","aurat","woman","औ + र + त. At the start of a word the vowel is a full letter."],
      ["लड़की","laṛkī","girl","ल + ड़ + की (क + ी). The a of ड़ is not said."],
      ["गाड़ी","gāṛī","car","गा (ग + ा) + ड़ी (ड़ + ी)"],
      ["पढ़ना","paṛhnā","to read","प + ढ़ + ना (न + ा). The a of ढ़ is not said."],
      ["बाज़ार","bāzār","market","बा (ब + ा) + ज़ा (ज़ + ा) + र"],
      ["भाषा","bhāshā","language","भा (भ + ा) + षा (ष + ा)"],
      ["मौसम","mausam","weather","मौ (म + ौ) + स + म"],
      ["साथ","sāth","together; with","सा (स + ा) + थ. थ is a dental t with a puff, not the th of \"think\"."]]
JL = [["ङ","ṅa","the letter ṅa (the ng of \"sing\")","The nasal of the k row. Almost only as a half letter before क or ग; everyday spelling writes ं instead."],
      ["ञ","ña","the letter ña (the ny of \"canyon\")","The nasal of the ch row. Almost only as a half letter before च or ज; everyday spelling writes ं instead."],
      ["क्ष","ksha","the conjunct ksha (k + sh)","क् + ष, joined into a shape of its own."],
      ["त्र","tra","the conjunct tra (t + r)","त् + र: the र becomes a slanted stroke."],
      ["ज्ञ","gya","the conjunct gya","ज् + ञ, but said gy in Hindi. Word: ज्ञान, knowledge."],
      ["श्र","shra","the conjunct shra (sh + r)","श् + र: श changes shape, and र becomes a slanted stroke."]]

SEC_V = [None, None, {"deck": V, "n": [0, 11]}, {"deck": V, "n": [11, 18]}, None, None, None]
SEC_C1 = [{"deck": C1, "n": [0, 4]}, {"deck": C1, "n": [4, 8]}, {"deck": C1, "n": [8, 17]}]
SEC_C2 = [{"deck": C2, "n": [0, 5]}, {"deck": C2, "n": [5, 10]}, None, None, [{"deck": C2, "n": [10, 18]}, {"name": "More letters", "cards": ML}], {"name": "First words", "cards": FW}]
SEC_CJ = [{"name": "Joined letters", "cards": JL}, {"deck": CJ, "n": [0, 8]}, None, {"deck": CJ, "n": [8, 15]}, {"deck": CJ, "n": [15, 18]}]

edit('lessons-1.js', [
 # ---- lesson 1: vowels
 ('    deck: "Vowels and vowel signs",\n    body: `',
  '    deck: "Vowels and vowel signs",\n    sections: ' + J(SEC_V) + ',\n    body: `'),
 ('<h3>Vowel letters and vowel signs</h3>\n<p>Each vowel has two shapes. At the start of a word or syllable you write the full vowel letter. After a consonant you write a small vowel sign instead (also called a matra).</p>\n<div class="tbl">',
  '<h3>Vowel letters</h3>\n<p>Each vowel has two shapes. At the start of a word or syllable you write the full vowel letter. Here are all eleven. Three pairs are a short vowel and a long one: अ and आ, इ and ई, उ and ऊ. Tap a letter to hear it and see how it reads.</p>\n{{tiles:अ आ इ ई उ ऊ ऋ ए ऐ ओ औ}}\n{{ex:एक|ek|one}}\n<h3>Vowel signs</h3>\n<p>After a consonant you write a small vowel sign instead (also called a matra). The sign hangs on the consonant: before it, after it, above it or below it. Short a has no sign, because every consonant already carries it.</p>\n<div class="tbl">'),
 ('<p>English words like "doctor" use one more sign, <b>ॉ</b>: <b>कॉ</b> <i>kŏ</i>.</p>\n{{ex:एक|ek|one}}\n{{ex:कौआ|kauā|crow}}',
  '<p>English words like "doctor" use one more sign, <b>ॉ</b>: <b>कॉ</b> <i>kŏ</i>.</p>\n<p>Tap each syllable to hear the sign on क.</p>\n{{tiles:का कि की कु कू के कै को=ko कौ=kau कृ=kri}}\n{{ex:कौआ|kauā|crow}}'),
 # ---- lesson 2: consonants 1
 ('    deck: "Consonants 1: k, ch and ṭ rows",\n    body: `',
  '    deck: "Consonants 1: k, ch and ṭ rows",\n    sections: ' + J(SEC_C1) + ',\n    body: `'),
 ('almost only appear joined to another letter, so you can skip them for now.</p>',
  'almost only appear joined to another letter, so their cards come in lesson 4, with the joined letters.</p>'),
 ('That h is the puff, never a separate h sound.</p>\n',
  'That h is the puff, never a separate h sound.</p>\n<p>The k row, from the back of the mouth. Tap a letter to hear it.</p>\n{{tiles:क ख ग घ ङ=ṅa}}\n'),
 ('<b>ज</b> <i>ja</i> is j, <b>झ</b> <i>jha</i> is j with a breathy puff.</p>\n',
  '<b>ज</b> <i>ja</i> is j, <b>झ</b> <i>jha</i> is j with a breathy puff.</p>\n{{tiles:च छ ज झ ञ=ña}}\n'),
 ('the next lesson brings a second t and d with the tongue on the teeth.</p>\n',
  'the next lesson brings a second t and d with the tongue on the teeth.</p>\n{{tiles:ट ठ ड ढ ण}}\n'),
 # ---- lesson 3: consonants 2
 ('    deck: "Consonants 2: t and p rows, and the rest",\n    body: `',
  '    deck: "Consonants 2: t and p rows, and the rest",\n    sections: ' + J(SEC_C2) + ',\n    body: `'),
 ('<td class="k">म</td></tr></table></div>\n{{ex:तोता|totā|parrot}}',
  '<td class="k">म</td></tr></table></div>\n<p>The t row, with the tongue on the teeth. Tap a letter to hear it.</p>\n{{tiles:त थ द ध न}}\n{{ex:तोता|totā|parrot}}'),
 ('<b>भ</b> <i>bha</i> is b with a breathy puff.</p>\n',
  '<b>भ</b> <i>bha</i> is b with a breathy puff.</p>\n{{tiles:प फ ब भ म}}\n'),
 ('<b>स</b> <i>sa</i> is s and <b>ह</b> <i>ha</i> is h.</p>\n',
  '<b>स</b> <i>sa</i> is s and <b>ह</b> <i>ha</i> is h.</p>\n{{tiles:य र ल व _ श ष स ह}}\n'),
 ('it is neither d nor English r.</p>\n',
  'it is neither d nor English r.</p>\n{{tiles:ड़ ढ़}}\n'),
 ('many speakers say them as k, kh and g.</p>\n{{ex:फ़ोन|fon|phone}}\n<p>The romanisation is a crutch',
  'many speakers say them as k, kh and g.</p>\n{{tiles:क़ ख़ ग़ ज़ फ़}}\n{{ex:फ़ोन|fon|phone}}\n<h3>Read your first words</h3>\n<p>You now know every basic letter and every vowel sign, so you can read real words. Each consonant with its vowel sign makes one syllable, and a consonant with no sign keeps its a: पा + नी is <i>pānī</i>, water. At the end of a word that a is silent, and inside a word it sometimes drops too, as in कमरा <i>kamrā</i>. The cards below are common words built only from what you know. Read each one aloud before you flip it.</p>\n{{ex:पानी|pānī|water}}\n{{ex:किताब|kitāb|book}}\n<p>The romanisation is a crutch'),
 # ---- lesson 4: conjuncts
 ('    deck: "Conjuncts and nasals",\n    body: `',
  '    deck: "Conjuncts and nasals",\n    sections: ' + J(SEC_CJ) + ',\n    body: `'),
 ('and <b>ज्ञ</b> <i>gya</i> is said gy.</p>\n{{ex:ज्ञान|gyān|knowledge}}\n',
  'and <b>ज्ञ</b> <i>gya</i> is said gy.</p>\n<p>Two letters from lesson 2 live mostly in clusters too: <b>ङ</b> <i>ṅa</i> before a letter of the k row and <b>ञ</b> <i>ña</i> before a letter of the ch row. Everyday spelling writes the nasal dot <b>ं</b> there instead, so you will rarely see them.</p>\n{{tiles:ङ ञ क्ष त्र ज्ञ श्र}}\n{{ex:ज्ञान|gyān|knowledge}}\n'),
 ('The romanisation shows the spelling, so remember these two habits.</p>',
  'The romanisation shows the spelling, so remember these two habits.</p>\n<p>The dotted letters from lesson 3 get the same treatment in fast speech: many speakers say <b>ख़</b> as kh and some say <b>ज़</b> as j. Aim for the sound the dot marks: z in <b>ज़रूर</b> <i>zarūr</i>, f in <b>फ़ोन</b> <i>fon</i>.</p>'),
])

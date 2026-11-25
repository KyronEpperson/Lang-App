#!/usr/bin/env python3
# Character foundations, course en-ur (FND-1). Edits tools/target/ur/lessons-1.js; then
#   node tools/target/gen.js ur && node tools/target/validate.js ur && node tools/lessonread/apply.js en-ur
# What changes: the four letter lessons and the aspirates lesson name the flashcards of each section (`sections`), every letter
# gets a flip tile, alif gets its own section in Letters 1 (so each letter deck can be cut in deck order), the nasal ں, which had
# no card, gets a small in-lesson deck, and the aspirates lesson ends with "Putting letters together": a chart of start, middle
# and end shapes and an in-lesson deck of real joined words read letter by letter.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ur', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
L1, L2, L3, L4 = "Letters 1: alif, the be family, vāo and ye", "Letters 2: letters that never join", "Letters 3: jīm to ġain", "Letters 4: fe to choṭī he"
AS = "Aspirates, nasals and vowel marks"

# ں (nūn ġunna) had no card anywhere: it gets one here, with five common words that end in it.
NW = [["ں","nūn ġunna","nasal sign","ن without its dot. It has no n sound: it sends the vowel before it through the nose."],
      ["ماں","mā̃","mother","م + ا + ں: a long ā said through the nose."],
      ["یہاں","yahā̃","here","ی + ہ + ا + ں"],
      ["وہاں","vahā̃","there","و + ہ + ا + ں"],
      ["ہوں","hū̃","(I) am","ہ + و + ں, as in میں ٹھیک ہوں, I'm fine."],
      ["کیوں","kyõ","why","ک + ی + و + ں"]]
# Joined words: every letter taught, read piece by piece from the right.
JW = [["ایک","ek","one","ا + ی + ک. ا never joins the next letter, so ی takes its start shape and ک its end shape."],
      ["تین","tīn","three","ت + ی + ن: start, middle, end. In the middle, ی is a small tooth with two dots below."],
      ["نمک","namak","salt","ن + م + ک: start, middle, end. At the start, ن is a small tooth with one dot above. The short a's are not written."],
      ["کتاب","kitāb","book","ک + ت + ا, then ب. ک starts, ت is in the middle, ا ends the piece; ا never joins, so ب stands alone."],
      ["پانی","pānī","water","پ + ا, then ن + ی. ا breaks the word, so ن takes its start shape and ی its end shape."],
      ["سال","sāl","year","س + ا, then ل on its own: ا never joins the next letter."],
      ["رات","rāt","night","ر, ا, ت: three pieces. ر and ا never join the next letter, so every letter stands alone."],
      ["لڑکا","laṛkā","boy","ل + ڑ, then ک + ا. ڑ never joins the next letter, so the word breaks after it."],
      ["بہن","bahan","sister","ب + ہ + ن: start, middle, end. In the middle ہ looks nothing like the round ہ alone. The short a's are not written."],
      ["ہم","ham","we","ہ + م: ہ in its start shape, م in its end shape."],
      ["شہر","shahar","city","ش + ہ + ر: start, middle, end. Here ہ is a real h."],
      ["اچھا","acchhā","good; OK","ا, then چ + ھ + ا. ا stands alone; چ starts, ھ in the middle adds the puff, and ا ends the word. The double c is not written."],
      ["مسجد","masjid","mosque","م + س + ج + د: start, middle, middle, end."],
      ["عورت","aurat","woman","ع + و, then ر, then ت. و and ر never join the next letter, so ر and ت stand alone. ع has no sound of its own: you hear au."],
      ["دوست","dost","friend","د, و, then س + ت. د and و stand alone; س starts and ت ends."],
      ["چائے","chāe","tea","چ + ا, then ئ + ے. ا breaks the word; ئ is hamza on a small tooth, where two vowels meet, and ے ends the word."]]

SEC_1 = [None, None, {"deck": L1, "n": [0, 7]}, {"deck": L1, "n": [7, 10]}, {"deck": L1, "n": [10, 17]}, None]
SEC_2 = [{"deck": L2, "n": [0, 7]}, None, {"deck": L2, "n": [7, 16]}]
SEC_3 = [{"deck": L3, "n": [0, 4]}, None, {"deck": L3, "n": [4, 12]}, {"deck": L3, "n": [12, 18]}]
SEC_4 = [None, {"deck": L4, "n": [0, 9]}, {"deck": L4, "n": [9, 18]}, None]
SEC_5 = [{"deck": AS, "n": [0, 11]}, [{"deck": AS, "n": [11, 15]}, {"name": "The nasal ں", "cards": NW}], {"deck": AS, "n": [15, 18]}, {"name": "Read joined words", "cards": JW}]

JOIN = ('<h3>Putting letters together</h3>\n'
 '<p>You now know every letter. Most letters join the letters on both sides, like cursive, and change shape with their place in the word: a short start shape, a small middle shape, and a full end shape with its tail. The dots never change, so look for the dots first.</p>\n'
 '<div class="tbl"><table><tr><th>Letters</th><th>Start</th><th>Middle</th><th>End</th></tr>'
 + ''.join('<tr><td class="k">%s</td><td class="k">%sـ</td><td class="k">ـ%sـ</td><td class="k">ـ%s</td></tr>' % (ls, f, f, f) for ls, f in [
   ("ب پ ت ٹ ث", "ب"), ("ج چ ح خ", "ج"), ("س ش", "س"), ("ص ض", "ص"), ("ط ظ", "ط"), ("ع غ", "ع"), ("ف", "ف"), ("ق", "ق"),
   ("ک گ", "ک"), ("ل", "ل"), ("م", "م"), ("ن", "ن"), ("ی", "ی"), ("ہ", "ہ"), ("ھ", "ھ")])
 + '</table></div>\n'
 '<p>Look closely at the start and middle shapes of ب, ن and ی: all three shrink to the same small tooth, and only the dots tell them apart. ہ changes the most, so learn its shapes from the chart. ھ never begins a word: its start shape appears only after a letter that does not join, as in دھ.</p>\n'
 '<p>Ten letters (eleven if you count آ, which is alif with madd) join the letter before them but never the next one, and their shape hardly changes. After them, the next letter takes its start shape again. That is why <b>کتاب</b> <i>kitāb</i> breaks after the ا: ک + ت + ا, then ب on its own.</p>\n'
 '<div class="tbl"><table><tr><th>Letters</th><th>Alone</th><th>End</th></tr>'
 + ''.join('<tr><td class="k">%s</td><td class="k">%s</td><td class="k">ـ%s</td></tr>' % (ls, f, f) for ls, f in [
   ("ا آ", "ا"), ("د ڈ ذ", "د"), ("ر ڑ ز ژ", "ر"), ("و", "و"), ("ے", "ے")])
 + '</table></div>\n'
 '{{ex:کتاب|kitāb|book}}\n'
 '<p>The cards below are common words. Read each one from the right, piece by piece: find where it breaks, name each letter, then say the word. The back of each card shows the pieces.</p>\n')

edit('lessons-1.js', [
 # ---- letters-1
 ('    deck: "' + L1 + '",\n    body: `', '    deck: "' + L1 + '",\n    sections: ' + J(SEC_1) + ',\n    body: `'),
 ('only the handwriting style differs, the way print and cursive differ in English.</p>\n<h3>One shape, five letters</h3>',
  'only the handwriting style differs, the way print and cursive differ in English.</p>\n'
  '<h3>Alif: the first letter</h3>\n'
  '<p><b>ا</b> <i>alif</i> is a single upright stroke. At the start of a word it carries a vowel; elsewhere it is a long ā, as in "father". <b>آ</b> <i>alif madd</i>, alif with a wavy line on top, is ā at the start of a word. The macron in ā ī ū marks a long vowel. Tap a letter to hear it.</p>\n'
  '{{tiles:ا آ}}\n'
  '<h3>One shape, five letters</h3>'),
 ('In the romanisation a dot below a letter means retroflex.</p>\n{{ex:یہ ٹوپی ہے۔',
  'In the romanisation a dot below a letter means retroflex.</p>\n{{tiles:ب پ ت ٹ ث}}\n{{ex:یہ ٹوپی ہے۔'),
 ('<p><b>ا</b> <i>alif</i> at the start of a word carries a vowel; elsewhere it is a long ā, as in "father". <b>آ</b> <i>alif madd</i> is ā at the start of a word. <b>و</b> <i>vāo</i> can be v, o, ū or au; <b>ی</b> <i>choṭī ye</i> can be y, ī or e; <b>ے</b> <i>baṛī ye</i> comes only at the end, for e or ai. The macron in ā ī ū marks a long vowel.</p>\n',
  '<p>Three more letters spell vowels. <b>و</b> <i>vāo</i> can be v, o, ū or au; <b>ی</b> <i>choṭī ye</i> can be y, ī or e; <b>ے</b> <i>baṛī ye</i> comes only at the end, for e or ai.</p>\n{{tiles:و ی ے}}\n'),
 ('{{ex:بات|bāt|matter; something said}}\n',
  '{{ex:بات|bāt|matter; something said}}\n<p>The cards below are your first words. Read each one from the right, letter by letter, and supply the short vowels yourself.</p>\n'),
 # ---- letters-2
 ('    deck: "' + L2 + '",\n    body: `', '    deck: "' + L2 + '",\n    sections: ' + J(SEC_2) + ',\n    body: `'),
 ('<td>zh, as in "measure" (rare)</td></tr></table></div>\n',
  '<td>zh, as in "measure" (rare)</td></tr></table></div>\n<p>Tap a letter to hear it.</p>\n{{tiles:د ڈ ذ ر ڑ ز ژ}}\n'),
 ('{{ex:یہ ڈبا بڑا ہے۔|yeh ḍabbā baṛā hai.|This box is big.}}\n',
  '{{ex:یہ ڈبا بڑا ہے۔|yeh ḍabbā baṛā hai.|This box is big.}}\n<p>The cards below are words made only from letters you know. Find the gaps, and read across them.</p>\n'),
 # ---- letters-3
 ('    deck: "' + L3 + '",\n    body: `', '    deck: "' + L3 + '",\n    sections: ' + J(SEC_3) + ',\n    body: `'),
 ('<td>ḵh, like the ch in Scottish "loch"</td></tr></table></div>\n',
  '<td>ḵh, like the ch in Scottish "loch"</td></tr></table></div>\n{{tiles:ج چ ح خ}}\n'),
 ('the romanisation simply writes the vowel you hear.</p>\n',
  'the romanisation simply writes the vowel you hear. Tap a letter to hear it.</p>\n{{tiles:س ش ص ض ط ظ ع غ}}\n'),
 ('dental against retroflex, and a long vowel against a short one.</p>\n',
  'dental against retroflex, and a long vowel against a short one. The cards below are words that use this lesson\'s letters.</p>\n'),
 # ---- letters-4
 ('    deck: "' + L4 + '",\n    body: `', '    deck: "' + L4 + '",\n    sections: ' + J(SEC_4) + ',\n    body: `'),
 ('<p>Many speakers say <b>ق</b> <i>qāf</i> just like k, so do not worry if you cannot hear it yet.</p>\n',
  '<p>Many speakers say <b>ق</b> <i>qāf</i> just like k, so do not worry if you cannot hear it yet. Tap a letter to hear it.</p>\n{{tiles:ف ق ک گ ل م ن}}\n'),
 ('The next lesson is all about that puff.</p>\n',
  'The next lesson is all about that puff.</p>\n{{tiles:ہ ھ}}\n'),
 ('as in <b>آئیے</b> <i>āie</i>, "come in". The romanisation does not write it.</p>\n',
  'as in <b>آئیے</b> <i>āie</i>, "come in". The romanisation does not write it.</p>\n{{tiles:ء}}\n<p>The cards below mix this lesson\'s letters into words.</p>\n'),
 # ---- aspirates
 ('    deck: "' + AS + '",\n    body: `', '    deck: "' + AS + '",\n    sections: ' + J(SEC_5) + ',\n    body: `'),
 ('as in French "non". The romanisation marks this nasal vowel with a tilde (~).</p>\n',
  'as in French "non". The romanisation marks this nasal vowel with a tilde (~).</p>\n{{tiles:ن ں=nūn_ġunna}}\n'),
 ('<p>Remember the Nastaliq style from Letters 1: signs and books will show these same letters in a sloping hand.</p>\n',
  '<p>Remember the Nastaliq style from Letters 1: signs and books will show these same letters in a sloping hand.</p>\n' + JOIN),
])

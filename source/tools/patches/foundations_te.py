#!/usr/bin/env python3
# Character foundations, course en-te (FND-1). Edits tools/target/te/lessons-1.js; then
#   node tools/target/gen.js te && node tools/target/validate.js te && node tools/lessonread/apply.js en-te
# What changes: the five script lessons (vowels, vowel-signs, consonants-1, consonants-2, conjuncts) name the flashcards of each
# section (`sections`). Lesson 1 gets a short "how the script works" section; the vowels, the vowel signs on క and every consonant
# row get flip tiles; the two consonant lessons each get a "Putting it together" section with a deck of real words that lives
# inside the lesson. The four standard letters with no card anywhere (ఋ ఙ ఞ ష) get cards in in-lesson decks.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'te', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
V, VS, C1, C2, CJ = "Vowels", "Vowel signs", "Consonants 1: k, ch and ṭ rows", "Consonants 2: t and p rows, and the rest", "Conjuncts and sunna"

# consonants-1: first words from the vowels, the signs and the k, ch and ṭ rows; then the two chart-only nasals
W1 = [["గుడి","guḍi","temple","గు + డి"],["ఆట","āṭa","game; play","ఆ + ట"],["కొడుకు","koḍuku","son","కొ + డు + కు. Short o: కొ, not కో."],["గోడ","gōḍa","wall","గో + డ"],["కోట","kōṭa","fort","కో + ట"],["ఈగ","īga","fly (the insect)","ఈ + గ"],["ఆటో","āṭō","auto-rickshaw","ఆ + టో"],["కూడా","kūḍā","also, too","కూ + డా"],["గొడుగు","goḍugu","umbrella","గొ + డు + గు"],["కుడి","kuḍi","right (side)","కు + డి"],["చోటు","chōṭu","place","చో + టు. Before ō, చ is often said ts."],["టీ","ṭī","tea","ట + ీ: one block."],["చెడు","cheḍu","bad","చె + డు. Before e, చ is said ch."],["ఇటు","iṭu","this way","ఇ + టు"],["అటు","aṭu","that way","అ + టు"],
      ["ఙ","ṅa","ṅa (ng, as in sing)","The nasal of the k row. Chart letter only: modern Telugu writes the circle ం instead."],["ఞ","ña","ña (ny, as in canyon)","The nasal of the ch row. Modern Telugu writes the circle ం in its place, but ఞ lives on in జ్ఞ, as in జ్ఞానం (knowledge)."]]
# consonants-2: ష, with s and sh words
SH = [["ష","sha","sha (sh)","Same sound as శ. Mostly in words from Sanskrit: భాష, language."],["భాష","bhāsha","language","భా + ష"],["మనిషి","manishi","person","మ + ని + షి"],["ఆశ","āsha","hope","ఆ + శ"],["వాసన","vāsana","smell","వా + స + న"],["సీసా","sīsā","bottle","సీ + సా"]]
# consonants-2: everyday words from single letters and signs
W2 = [["తెలుగు","telugu","Telugu","తె + లు + గు"],["నీరు","nīru","water","నీ + రు"],["పేరు","pēru","name","పే + రు"],["ఊరు","ūru","town; home village","ఊ + రు"],["పని","pani","work","ప + ని"],["బడి","baḍi","school","బ + డి"],["ఇవాళ","ivāḷa","today","ఇ + వా + ళ. Retroflex ళ."],["రేపు","rēpu","tomorrow","రే + పు"],["చేప","chēpa","fish","చే + ప"],["ఆవు","āvu","cow","ఆ + వు"],["పులి","puli","tiger","పు + లి"],["కూర","kūra","curry","కూ + ర. ర is a tap."],["వాన","vāna","rain","వా + న"],["లేదు","lēdu","no; there isn't","లే + దు. Dental ద."]]
# conjuncts: ఋ and its sign ృ
RU = [["ఋ","ru","the vowel ru","Words from Sanskrit and names. Some speakers say ri."],["ఋషి","rushi","sage, seer","ఋ + షి"],["కృష్ణ","krushṇa","Krishna (a god; a river)","కృ + ష్ణ. The small ణ under ష gives shṇ."],["హృదయం","hrudayam","heart","హృ + ద + యం. A formal word; the sunna at the end is m."],["ప్రకృతి","prakruti","nature","ప్ర + కృ + తి"],["నృత్యం","nrutyam","dance","నృ + త్యం. The small య under త gives ty."]]

SEC_V = [None, {"deck": V, "n": [0, 6]}, None, {"deck": V, "n": [6, 12]}, None, {"deck": V, "n": [12, 17]}]
SEC_VS = [{"deck": VS, "n": [0, 11]}, None, None, {"deck": VS, "n": [11, 18]}]
SEC_C1 = [{"deck": C1, "n": [0, 8]}, {"deck": C1, "n": [8, 13]}, None, None, [{"deck": C1, "n": [13, 17]}, {"name": "First words: k, ch and ṭ rows", "cards": W1}]]
SEC_C2 = [{"deck": C2, "n": [0, 5]}, {"deck": C2, "n": [5, 10]}, [{"deck": C2, "n": [10, 18]}, {"name": "ష and the s sounds", "cards": SH}], None, [{"deck": C2, "n": [18, 20]}, {"name": "Words with every letter", "cards": W2}]]
SEC_CJ = [None, None, None, CJ, {"name": "ఋ and its sign", "cards": RU}]

edit('lessons-1.js', [
 # ---- lesson 1: vowels
 ('    deck: "Vowels",\n    body: `',
  '    deck: "Vowels",\n    sections: ' + J(SEC_V) + ',\n    body: `'),
 ('read the Telugu first and glance down only to check.</p>\n<h3>Vowels come in pairs</h3>',
  'read the Telugu first and glance down only to check.</p>\n<h3>How Telugu writing works</h3>\n<p>Telugu is written left to right, with no capital letters. Each block you see is a whole syllable, not a single sound. A consonant letter already includes the vowel a: క is <i>ka</i>, not k. For any other vowel, a small sign is added to the consonant, so <i>kā</i> or <i>ki</i> is still one block. A vowel is written as a full letter only when a syllable starts with it, mostly at the start of a word. So the course goes in this order: the vowel letters in this lesson, then the vowel signs, then the consonants row by row, and last the ways two consonants join.</p>\n<h3>Vowels come in pairs</h3>'),
 ('held long, with no glide</td></tr></table></div>\n{{ex:అ|a|the vowel a (short)}}',
  'held long, with no glide</td></tr></table></div>\n<p>Tap a letter to hear it. The top row is short, the row under it long.</p>\n{{tiles:అ ఇ ఉ ఎ ఒ ఆ ఈ ఊ ఏ ఓ}}\n{{ex:అ|a|the vowel a (short)}}'),
 ('You may also meet <b>ఋ</b> <i>ru</i> in Sanskrit words and names; you only need to recognise it.</p>',
  'You may also meet <b>ఋ</b> <i>ru</i> in Sanskrit words and names; you will read it in real words in lesson 5, once you know more letters.</p>\n{{tiles:ఐ ఔ ఋ=ru}}'),
 # ---- lesson 2: vowel signs
 ('    deck: "Vowel signs",\n    body: `',
  '    deck: "Vowel signs",\n    sections: ' + J(SEC_VS) + ',\n    body: `'),
 ('<td class="k">కౌ</td><td>kau</td></tr></table></div>\n{{ex:కా|kā|kā (long ā)}}',
  '<td class="k">కౌ</td><td>kau</td></tr></table></div>\n<p>Tap a block to hear it. Each one is క with a different sign.</p>\n{{tiles:కా కి కీ కు కూ కె కే కై కొ కో కౌ}}\n{{ex:కా|kā|kā (long ā)}}'),
 # ---- lesson 3: consonants 1
 ('    deck: "Consonants 1: k, ch and ṭ rows",\n    body: `',
  '    deck: "Consonants 1: k, ch and ṭ rows",\n    sections: ' + J(SEC_C1) + ',\n    body: `'),
 ('everyday Telugu words almost always use the plain letters.</p>\n{{ex:గాజు|gāju|glass; bangle}}',
  'everyday Telugu words almost always use the plain letters.</p>\n<p>Tap the letters of the first two rows. The last letter of each row, ఙ and ఞ, is a nasal you will rarely see.</p>\n{{tiles:క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ}}\n{{ex:గాజు|gāju|glass; bangle}}'),
 ('the other kind comes in the next lesson.</p>\n{{ex:కోడి|kōḍi|hen}}',
  'the other kind comes in the next lesson.</p>\n{{tiles:ట ఠ డ ఢ ణ}}\n{{ex:కోడి|kōḍi|hen}}'),
 ('Recognise them and move on.</p>\n<div class="tip"><b>Most common mistake:</b> adding an English puff',
  'Recognise them and move on.</p>\n<h3>Putting it together</h3>\n<p>Every letter in these rows takes every vowel sign you know, the same way క does: గ + ు is గు <i>gu</i>, డ + ి is డి <i>ḍi</i>, so గుడి is <i>guḍi</i>, "temple". Read a word block by block, one syllable per block. The cards below are real words built only from the vowels, the signs and these three rows. The last two cards are the chart letters ఙ and ఞ.</p>\n{{ex:గొడుగు|goḍugu|umbrella}}\n<div class="tip"><b>Most common mistake:</b> adding an English puff'),
 # ---- lesson 4: consonants 2
 ('    deck: "Consonants 2: t and p rows, and the rest",\n    body: `',
  '    deck: "Consonants 2: t and p rows, and the rest",\n    sections: ' + J(SEC_C2) + ',\n    body: `'),
 ('never the th of <i>think</i>.</p>\n{{ex:పాట|pāṭa|song}}',
  'never the th of <i>think</i>.</p>\n<p>Tap the letters of the t row.</p>\n{{tiles:త థ ద ధ న}}\n{{ex:పాట|pāṭa|song}}'),
 ('English loans written with ఫ are said with f, though.</p>\n{{ex:పాలు|pālu|milk}}',
  'English loans written with ఫ are said with f, though.</p>\n{{tiles:ప ఫ బ భ మ}}\n{{ex:పాలు|pālu|milk}}'),
 ('like the tt in American <i>butter</i>, never the English r.</p>',
  'like the tt in American <i>butter</i>, never the English r.</p>\n<p><b>శ</b> and <b>ష</b> sound the same, like English sh. ష turns up mostly in words from Sanskrit, such as <b>భాష</b> <i>bhāsha</i> "language". Tap each letter.</p>\n{{tiles:య ర ల వ _ శ ష స హ ళ}}'),
 ('Modern Telugu writes ర instead.</p>\n<div class="tip">',
  'Modern Telugu writes ర instead.</p>\n<h3>Putting it together</h3>\n<p>You now know every modern letter, and each one takes every vowel sign: న + ీ is నీ <i>nī</i>, ర + ు is రు <i>ru</i>, so నీరు is <i>nīru</i>, "water". The cards below are everyday words built from single letters and signs. Read each one block by block before you flip it.</p>\n{{ex:తెలుగు|telugu|Telugu}}\n<div class="tip">'),
 # ---- lesson 5: conjuncts
 ('    deck: "Conjuncts and sunna",\n    body: `',
  '    deck: "Conjuncts and sunna",\n    sections: ' + J(SEC_CJ) + ',\n    body: `'),
 ('<p>The sign ః (visarga, said h) turns up in a few Sanskrit words; recognise it and move on.</p>\n',
  '<p>The sign ః (visarga, said h) turns up in a few Sanskrit words; recognise it and move on.</p>\n<p>The cards below are real words that use everything in this lesson: the vattu, doubled letters, sunna and pollu. Find the small letters before you read.</p>\n<h3>ఋ and its sign</h3>\n<p>Lesson 1 showed the vowel <b>ఋ</b> <i>ru</i>. It belongs to words from Sanskrit and to names. After a consonant it becomes a sign on the right side of the letter, a little like the u sign: క + ృ is కృ <i>kru</i>. Some speakers say ri instead of ru.</p>\n{{ex:కృష్ణ|krushṇa|Krishna}}\n'),
])

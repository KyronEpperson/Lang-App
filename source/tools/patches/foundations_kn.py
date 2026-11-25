#!/usr/bin/env python3
# Character foundations, course en-kn (FND-1). Edits tools/target/kn/lessons-1.js; then
#   node tools/target/gen.js kn && node tools/target/validate.js kn && node tools/lessonread/apply.js en-kn
# What changes: the five script lessons (vowels, vowel-signs, consonants-1, consonants-2, conjuncts) name the flashcards of
# each section (`sections`); every letter gets a flip tile (vowels in lesson 1, the kaagunita on ka in lesson 2, the
# consonants row by row in lessons 3 and 4); lessons 3, 4 and 5 get decks of real words that live inside the lesson.
# The four standard letters that had no card (RU, NGA, NYA, SSA) get cards in in-lesson decks.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'kn', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
V, VS = "Vowels", "Vowel signs"
C1, C2 = "Consonants 1: k, ch and ṭ rows", "Consonants 2: t and p rows, and the rest"
CJ = "Conjuncts and anusvara"

# lesson 3: the two rare nasals, then words from vowels, signs and the k, ch and t-dot rows only
W3 = [["ಙ","ṅa","ṅa (ng, as in sing)","The nasal of the k row. Rare: Kannada writes ಂ for this sound instead (lesson 5)."],
      ["ಞ","ña","ña (ny, as in canyon)","The nasal of the ch row. Rare: Kannada writes ಂ for this sound instead (lesson 5)."],
      ["ಈಗ","īga","now","ಈ + ಗ. Long ī."],
      ["ಆಗ","āga","then (at that time)","ಆ + ಗ. ಈಗ is now, ಆಗ is then."],
      ["ಕಾಗೆ","kāge","crow","ಕಾ + ಗೆ. Plain k and g, with no puff of air."],
      ["ಆಟ","āṭa","game; play","ಆ + ಟ. Retroflex ṭ: curl the tongue back."],
      ["ಗಿಡ","giḍa","plant","ಗಿ + ಡ. The i sign replaces the tick on ಗ."],
      ["ಕೊಡೆ","koḍe","umbrella","ಕೊ + ಡೆ. Short o, short e."],
      ["ಗೋಡೆ","gōḍe","wall","ಗೋ + ಡೆ. Long ō: ಗೋ, not ಗೊ."],
      ["ಚಾಕು","chāku","knife","ಚಾ + ಕು. ch with no puff of air."],
      ["ಚೀಟಿ","chīṭi","ticket; slip of paper","ಚೀ + ಟಿ. Long ī, then short i."],
      ["ಗುಡಿ","guḍi","temple (small)","ಗು + ಡಿ."],
      ["ಜಾಗ","jāga","place; space","ಜಾ + ಗ."],
      ["ಏಡಿ","ēḍi","crab","ಏ + ಡಿ. A vowel letter starts the word."],
      ["ಅಡುಗೆ","aḍuge","cooking; home-cooked food","ಅ + ಡು + ಗೆ."],
      ["ಓಡು","ōḍu","run","ಓ + ಡು. Long ō."],
      ["ಕೊಡು","koḍu","give","ಕೊ + ಡು. Short o. Compare ಕೊಡೆ, umbrella."]]
# lesson 4, "The rest": the missing letter sha (retroflex) beside sha, s and h in words
S4 = [["ಷ","sha","sha (sh, the same sound as ಶ)","Said exactly like ಶ. Mostly in Sanskrit words, and in ಷ್ಟ (lesson 5)."],
      ["ಭಾಷೆ","bhāshe","language","ಭಾ + ಷೆ. ಷ is said sh."],
      ["ಶಾಲೆ","shāle","school","ಶಾ + ಲೆ. ಶ is said sh too."],
      ["ಹೆಸರು","hesaru","name","ಹೆ + ಸ + ರು."],
      ["ಸಮಯ","samaya","time","ಸ + ಮ + ಯ. Every letter keeps its a."],
      ["ಹಸು","hasu","cow","ಹ + ಸು."]]
# lesson 4: words from every row, no joined letters
W4 = [["ನೀರು","nīru","water","ನೀ + ರು. Long ī; ರ is a quick tap."],
      ["ಹಾಲು","hālu","milk","ಹಾ + ಲು. Dental ಲ, tongue on the teeth."],
      ["ಮನೆ","mane","house; home","ಮ + ನೆ. Dental ನ."],
      ["ತಲೆ","tale","head","ತ + ಲೆ. Dental t, tongue on the teeth."],
      ["ಮರ","mara","tree","ಮ + ರ. Both letters keep their a."],
      ["ಬಾಗಿಲು","bāgilu","door","ಬಾ + ಗಿ + ಲು."],
      ["ಹೂವು","hūvu","flower","ಹೂ + ವು. Long ū."],
      ["ಮಳೆ","maḷe","rain","ಮ + ಳೆ. Retroflex ḷ, tongue curled back."],
      ["ದಿನ","dina","day","ದಿ + ನ. Dental d and n."],
      ["ನಾಳೆ","nāḷe","tomorrow","ನಾ + ಳೆ. Retroflex ḷ."],
      ["ಊರು","ūru","town; hometown","ಊ + ರು. A vowel letter starts the word."],
      ["ಮಗು","magu","baby; small child","ಮ + ಗು."],
      ["ಹುಡುಗ","huḍuga","boy","ಹು + ಡು + ಗ. Retroflex ḍ."],
      ["ಹುಡುಗಿ","huḍugi","girl","ಹು + ಡು + ಗಿ. Only the last sign differs from ಹುಡುಗ, boy."],
      ["ದಾರಿ","dāri","way; path","ದಾ + ರಿ."],
      ["ಕಾಲು","kālu","leg; foot","ಕಾ + ಲು. Compare ಕಾರು, car: ಲ against ರ."]]
# lesson 4: the rare vowel ru, as a letter and as a sign
R4 = [["ಋ","ru","ru (a vowel letter)","Said ru; some speakers say ri. Found only in Sanskrit words."],
      ["ಋತು","rutu","season","ಋ + ತು. The vowel letter starts the word."],
      ["ಋಷಿ","rushi","sage; seer","ಋ + ಷಿ."],
      ["ಕೃಷಿ","krushi","farming; agriculture","ಕೃ + ಷಿ. The sign ೃ sits after ಕ, low on the right: k, then ru."],
      ["ಮೃಗ","mruga","animal (wild)","ಮೃ + ಗ."],
      ["ಮೃದು","mrudu","soft","ಮೃ + ದು."],
      ["ಹೃದಯ","hrudaya","heart","ಹೃ + ದ + ಯ."]]
# lesson 5: everyday words with doubled letters, conjuncts and the anusvara
W5 = [["ಹಣ್ಣು","haṇṇu","fruit","ಹ + ಣ್ಣು. Doubled retroflex ṇ: hold it."],
      ["ಎಣ್ಣೆ","eṇṇe","oil","ಎ + ಣ್ಣೆ. Doubled ṇ."],
      ["ಹಳ್ಳಿ","haḷḷi","village","ಹ + ಳ್ಳಿ. Doubled ḷ."],
      ["ಅಜ್ಜ","ajja","grandfather","ಅ + ಜ್ಜ. Doubled j."],
      ["ಚಿಕ್ಕ","chikka","small; young","ಚಿ + ಕ್ಕ. Doubled k."],
      ["ದೊಡ್ಡ","doḍḍa","big; older","ದೊ + ಡ್ಡ. Short o, doubled ḍ."],
      ["ಬೆಕ್ಕು","bekku","cat","ಬೆ + ಕ್ಕು. With one k and long ē it is ಬೇಕು, \"want\"."],
      ["ಅಕ್ಕಿ","akki","rice (uncooked)","ಅ + ಕ್ಕಿ. Compare ಅಕ್ಕ, older sister: only the last vowel differs."],
      ["ಸಕ್ಕರೆ","sakkare","sugar","ಸ + ಕ್ಕ + ರೆ."],
      ["ಪುಸ್ತಕ","pustaka","book","ಪು + ಸ್ತ + ಕ. Two different consonants: s, then t."],
      ["ರಸ್ತೆ","raste","road; street","ರ + ಸ್ತೆ. s, then t."],
      ["ರಾತ್ರಿ","rātri","night","ರಾ + ತ್ರಿ. Small ್ರ under ತ: t, then r."],
      ["ಅಂಗಡಿ","angaḍi","shop","ಅಂ + ಗ + ಡಿ. The anusvara is n before ಗ."],
      ["ತಿಂಡಿ","tiṇḍi","snack; breakfast (tiffin)","ತಿಂ + ಡಿ. The anusvara is ṇ before ಡ."],
      ["ಸಂಜೆ","sanje","evening","ಸಂ + ಜೆ. The anusvara is n before ಜ."],
      ["ಇವತ್ತು","ivattu","today","ಇ + ವ + ತ್ತು. Doubled t."]]

SEC_1 = [None, {"deck": V, "n": [0, 6]}, None, {"deck": V, "n": [6, 12]}, None]
SEC_2 = [None, {"deck": VS, "n": [0, 12]}, None, None, {"deck": VS, "n": [12, 16]}]
SEC_3 = [{"deck": C1, "n": [0, 4]}, {"deck": C1, "n": [4, 8]}, {"deck": C1, "n": [8, 13]}, None,
         [{"deck": C1, "n": [13, 17]}, {"name": "Grid words and rare nasals", "cards": W3}]]
SEC_4 = [{"deck": C2, "n": [0, 5]}, {"deck": C2, "n": [5, 10]},
         [{"deck": C2, "n": [10, 18]}, {"name": "Sh, s and h in words", "cards": S4}], None, None,
         [{"deck": C2, "n": [18, 20]}, {"name": "Words from every row", "cards": W4}],
         {"name": "The vowel ru in words", "cards": R4}, None]
SEC_5 = [{"deck": CJ, "n": [0, 7]}, None, None, None, {"deck": CJ, "n": [7, 18]},
         {"name": "Everyday joined words", "cards": W5}]

CH_OLD = '<h3>ch and j</h3>\n<p><b>ಚ</b> <i>cha</i> is the ch of <i>church</i>, a little softer and with no puff. <b>ಜ</b> <i>ja</i> is the j of <i>jam</i>.</p>\n'
CH_NEW = '<h3>ch and j</h3>\n<p><b>ಚ</b> <i>cha</i> is the ch of <i>church</i>, a little softer and with no puff. <b>ಜ</b> <i>ja</i> is the j of <i>jam</i>. Their partners with a puff of air are <b>ಛ</b> <i>chha</i> and <b>ಝ</b> <i>jha</i>, both rare. Here is the ch row.</p>\n{{tiles:ಚ ಛ ಜ ಝ ಞ}}\n'

edit('lessons-1.js', [
 # ---- lesson 1: vowels
 ('    deck: "Vowels",\n    body: `', '    deck: "Vowels",\n    sections: ' + J(SEC_1) + ',\n    body: `'),
 ('</td></tr></table></div>\n<p>Two of these are already words.',
  '</td></tr></table></div>\n<p>Start with the first three pairs. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ಅ ಆ ಇ ಈ ಉ ಊ}}\n<p>Two of these are already words.'),
 ('a call to a friend.</p>\n{{ex:ಎ|e|',
  'a call to a friend.</p>\n{{tiles:ಎ ಏ ಒ ಓ}}\n{{ex:ಎ|e|'),
 ('<p>You will also meet <b>ಋ</b> <i>ru</i> in a few Sanskrit words. Learn to recognize it; you will rarely need to write it.</p>\n',
  '<p>You will also meet <b>ಋ</b> <i>ru</i> in a few Sanskrit words. Learn to recognize it; you will rarely need to write it. Lesson 4 shows the few common words that use it.</p>\n{{tiles:ಐ ಔ ಋ=ru}}\n'),
 # ---- lesson 2: vowel signs
 ('    deck: "Vowel signs",\n    body: `', '    deck: "Vowel signs",\n    sections: ' + J(SEC_2) + ',\n    body: `'),
 ('you will see it in the name Krishna.</p>\n',
  'you will see it in the name Krishna.</p>\n<p>Tap a syllable to hear it.</p>\n{{tiles:ಕಾ ಕಿ ಕೀ ಕು ಕೂ ಕೃ ಕೆ ಕೇ ಕೈ ಕೊ ಕೋ ಕೌ}}\n'),
 ('{{ex:ಈಕೆ|īke|she (this woman)}}\n',
  '{{ex:ಈಕೆ|īke|she (this woman)}}\n<p>One more comes from English: <b>ಓಕೆ</b> <i>ōke</i>, "OK". Read each card aloud before you flip it.</p>\n'),
 # ---- lesson 3: consonants 1
 ('    deck: "Consonants 1: k, ch and ṭ rows",\n    body: `', '    deck: "Consonants 1: k, ch and ṭ rows",\n    sections: ' + J(SEC_3) + ',\n    body: `'),
 ('everyday Kannada words mostly use the plain ones.</p>\n',
  'everyday Kannada words mostly use the plain ones.</p>\n<p>Here is the k row. Tap a letter to hear it and see how it reads.</p>\n{{tiles:ಕ ಖ ಗ ಘ ಙ}}\n'),
 (CH_OLD, ''),
 ('<h3>The dot below: curl the tongue back</h3>', CH_NEW + '<h3>The dot below: curl the tongue back</h3>'),
 ('and the difference changes words.</p>\n{{ex:ಊಟ|ūṭa|meal}}',
  'and the difference changes words.</p>\n{{tiles:ಟ ಠ ಡ ಢ ಣ}}\n{{ex:ಊಟ|ūṭa|meal}}'),
 ('Recognize these two; you will not need to write them.</p>\n<p>Keep reading the Kannada first.',
  'Recognize these two; you will not need to write them. Their cards are in the last set of cards in this lesson.</p>\n<h3>Read your first words</h3>\n<p>You now have the vowels, the vowel signs and three rows of consonants: enough for real words. Read a word one syllable at a time, each consonant with its sign: <b>ಕಾ</b> + <b>ಗೆ</b> is <i>kāge</i>, crow. The cards below are common words built only from what you have learned so far. Read each one aloud before you flip it.</p>\n{{ex:ಈಗ|īga|now}}\n{{ex:ಗೋಡೆ|gōḍe|wall}}\n<p>Keep reading the Kannada first.'),
 # ---- lesson 4: consonants 2
 ('    deck: "Consonants 2: t and p rows, and the rest",\n    body: `', '    deck: "Consonants 2: t and p rows, and the rest",\n    sections: ' + J(SEC_4) + ',\n    body: `'),
 ('</td></tr></table></div>\n{{ex:ತಲೆ|tale|head}}',
  '</td></tr></table></div>\n<p>Here is the dental row. Tap a letter to hear it.</p>\n{{tiles:ತ ಥ ದ ಧ ನ}}\n{{ex:ತಲೆ|tale|head}}'),
 ('and <b>ಪ</b> and <b>ಷ</b>.</p>\n',
  'and <b>ಪ</b> and <b>ಷ</b>.</p>\n{{tiles:ಪ ಫ ಬ ಭ ಮ}}\n'),
 ('</td></tr></table></div>\n<h3><b>ಲ</b> against <b>ಳ</b></h3>',
  '</td></tr></table></div>\n<p>Tap a letter to hear it. <b>ಶ</b> and <b>ಷ</b> sound the same; <b>ಷ</b> turns up mostly in words from Sanskrit, such as <b>ಭಾಷೆ</b> <i>bhāshe</i>, language.</p>\n{{tiles:ಯ ರ ಲ ವ ಶ ಷ ಸ ಹ ಳ}}\n<h3><b>ಲ</b> against <b>ಳ</b></h3>'),
 ('{{ex:ಕರು|karu|calf}}\n<h3>Two old letters</h3>',
  '{{ex:ಕರು|karu|calf}}\n<h3>Read whole words</h3>\n<p>You now know every letter of modern Kannada, so you can read any word without joined letters: one syllable at a time, each consonant with its sign. <b>ಬಾ</b> + <b>ಗಿ</b> + <b>ಲು</b> is <i>bāgilu</i>, door. The cards below are common words like this. Watch the dental and retroflex letters, and the length of every vowel.</p>\n{{ex:ನೀರು|nīru|water}}\n{{ex:ಬಾಗಿಲು|bāgilu|door}}\n'
  '<h3>The rare vowel <b>ಋ</b></h3>\n<p>Lesson 1 showed the vowel letter <b>ಋ</b>, and lesson 2 its sign <b>ೃ</b> on <b>ಕ</b>. Both are read <i>ru</i>; some speakers say <i>ri</i>. They turn up only in words taken from Sanskrit, but a few of those are common. The letter starts a word. The sign is written after a consonant, low on the right, and the consonant is read first: <b>ಕೃ</b> is <i>kru</i>.</p>\n{{ex:ಋತು|rutu|season}}\n{{ex:ಕೃಷಿ|krushi|farming; agriculture}}\n<h3>Two old letters</h3>'),
 # ---- lesson 5: conjuncts
 ('    deck: "Conjuncts and anusvara",\n    body: `', '    deck: "Conjuncts and anusvara",\n    sections: ' + J(SEC_5) + ',\n    body: `'),
 ('and <b>ಕ್ಷ</b>, read ksh.</p>\n',
  'and <b>ಕ್ಷ</b>, read ksh. Tap one to hear it.</p>\n{{tiles:ಸ್ಕ=ska ಷ್ಟ=shṭa ನ್ಯ=nya ಪ್ರ=pra ಕ್ಷ=ksha}}\n'),
 ('<p>The romanisation is a crutch: read the Kannada first and glance down only to check.</p>\n<div class="tip"><b>Most common mistake:</b> saying a doubled',
  '<h3>Read everyday words</h3>\n<p>You now know every piece: the letters, the signs, the small letter underneath, <b>ರ್</b>, the anusvara and the virama. The cards below are everyday words that use them. Find the joined letters in each one, then read it aloud before you flip it.</p>\n{{ex:ಹಣ್ಣು|haṇṇu|fruit}}\n{{ex:ಅಂಗಡಿ|angaḍi|shop}}\n<p>The romanisation is a crutch: read the Kannada first and glance down only to check.</p>\n<div class="tip"><b>Most common mistake:</b> saying a doubled'),
])

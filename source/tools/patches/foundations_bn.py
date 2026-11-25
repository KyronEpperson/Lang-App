#!/usr/bin/env python3
# Character foundations, course en-bn (FND-1). Edits tools/target/bn/lessons-1.js; then
#   node tools/target/gen.js bn && node tools/target/validate.js bn && node tools/lessonread/apply.js en-bn
# Bengali is an abugida. Pieces: the vowel letters (lesson 1), the consonants as a grid by place of articulation plus the letters outside it
# (lesson 2), the vowel signs and the four marks (lesson 3). Putting together: consonant + vowel sign in real words (lesson 3), then
# conjuncts and pholas in real words (lesson 4, the existing Conjuncts deck).
# What changes: the four script lessons name the flashcards of each section (`sections`); every letter gets a flip tile; the consonants
# with no card get one in an in-lesson deck; lesson 3 gets a deck of real words built only from letters and signs taught so far.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'bn', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)

MORE_C = [["জ","jô","the letter j","Plain j, as in \"jam\"."],["ঝ","jhô","the letter jh","Aspirated j. Not common: ঝাল (jhal), \"spicy\"."],["প","pô","the letter p","Plain p, with less puff than an English p."],["ফ","fô","the letter f","The aspirated p, but most speakers say it close to an English f, so the aid writes f."],["ব","bô","the letter b","Plain b. Bengali has no v sound: ব is b."],["ভ","bhô","the letter bh","Aspirated b, as in ভাত (bhat), \"rice\"."]]
LAST_C = [["ষ","shô","another letter for sh","Same sound as শ. You see it in মানুষ (manush), \"person\"."],["ঙ","ngô","the letter ng","The nasal of the k row: the ng of \"sing\". It never starts a word."],["ঞ","nô","the nasal of the ch row","Rare on its own. It sits in conjuncts such as ঞ্চ and ঞ্জ, said n."],["ণ","nô","the retroflex n","Said just like ন today. Only the spelling differs."],["ন","nô","the letter n","Dental n, the n of most words."],["ম","mô","the letter m","Plain m."],["য","jô","the letter j (য)","Said j, the same as জ."],["র","rô","the letter r","A light tap of the tongue, as in Spanish \"pero\"."],["ল","lô","the letter l","A clear l, as in \"leaf\"."],["হ","hô","the letter h","Plain h."],["ঢ","ḍhô","the letter ḍh","Retroflex and aspirated: ড with a puff."],["ড়","ṛô","the letter ṛ","ড with a dot: a flap, close to র. It never starts a word."],["ঢ়","ṛhô","the letter ṛh","ঢ with a dot: ড় with a puff. Rare."],["য়","yô","the letter y","য with a dot: a y, or a glide between vowels, as in মেয়ে (meye)."]]
MARKS = [["ং","ng","the ng mark","Said ng: বাংলা is bangla."],["ঃ","h","the doubling mark","Inside a word it doubles the next consonant: দুঃখিত is dukkhito. At the end of a word it is a short h."],["ঁ","ã","the nasal mark","No sound of its own: it sends the vowel through the nose, a tilde in the aid. Shown here on a, as in চাঁদ (chãd)."],["ৎ","t","a t with no vowel","A t that never carries a vowel, as in চমৎকার."],["চমৎকার","chômôtkar","wonderful","চ + ম + ৎ + কা + র. ৎ is t with no vowel after it."]]
WORDS = [["বাবা","baba","father","বা + বা: ব with া, twice."],["নাম","nam","name","না + ম. The ম keeps no vowel: the inherent vowel is dropped."],["ভাত","bhat","rice (cooked)","ভা + ত. ভ is aspirated, ত is dental."],["মাছ","machh","fish","মা + ছ. ছ is the aspirated ch."],["পানি","pani","water","পা + নি. ি is written left of ন, said after it."],["দুধ","dudh","milk","দু + ধ. ু hangs under দ."],["বাড়ি","baṛi","home; house","বা + ড়ি. ড় is the dotted ড."],["ছেলে","chhele","boy; son","ছে + লে. ে is written left of each letter."],["মেয়ে","meye","girl; daughter","মে + য়ে. য় is the dotted য."],["ভালো","bhalo","good; well","ভা + লো. ো wraps around ল."],["দিন","din","day","দি + ন"],["বাজার","bajar","market","বা + জা + র"],["ঢাকা","ḍhaka","Dhaka","ঢা + কা. ঢ is retroflex and aspirated."],["কলম","kôlom","pen","ক + ল + ম: no signs at all, only inherent vowels."],["পাঁচ","pãch","five","পাঁ + চ. ঁ makes the a nasal."],["তৈরি","toiri","ready; made","তৈ + রি. ৈ is written left of ত."],["মানুষ","manush","person","মা + নু + ষ"],["শহর","shôhor","city","শ + হ + র: inherent vowels only."]]

SEC_V = [None, {"deck": "Vowels", "n": [0, 11]}, None, None, {"deck": "Vowels", "n": [11, 17]}, None]
SEC_C = [None, [{"deck": "Consonants", "n": [0, 6]}, {"name": "More consonants", "cards": MORE_C}], {"deck": "Consonants", "n": [6, 13]}, None,
         [{"deck": "Consonants", "n": [13, 15]}, {"name": "The last consonants", "cards": LAST_C}, {"deck": "Consonants", "n": [15, 18]}]]
SEC_S = [{"deck": "Vowel signs", "n": [0, 10]}, None, None, [{"deck": "Vowel signs", "n": [10, 13]}, {"name": "The four marks", "cards": MARKS}],
         [{"deck": "Vowel signs", "n": [13, 16]}, {"name": "First words", "cards": WORDS}]]
SEC_J = [None, None, None, "Conjuncts"]

CHART = ('<h3>The consonant chart</h3>\n<p>Bengali lists most of its consonants in a grid of five rows. Each row is one place in the mouth, from the back of the mouth to the lips. Each row has five letters: plain, with a puff of air, voiced (with a buzz in the throat, like g against k), voiced with a puff, and a nasal. Learn the grid and you know 25 letters and how they relate. The sections below go through the two contrasts that matter most, then the nasals and the letters outside the grid.</p>\n'
 '<div class="tbl"><table><tr><th>Where</th><th>Plain</th><th>Puff</th><th>Voiced</th><th>Voiced, puff</th><th>Nasal</th></tr>'
 '<tr><td>Back of the mouth</td><td class="k">ক kô</td><td class="k">খ khô</td><td class="k">গ gô</td><td class="k">ঘ ghô</td><td class="k">ঙ ngô</td></tr>'
 '<tr><td>Roof of the mouth</td><td class="k">চ chô</td><td class="k">ছ chhô</td><td class="k">জ jô</td><td class="k">ঝ jhô</td><td class="k">ঞ nô</td></tr>'
 '<tr><td>Tongue curled back</td><td class="k">ট ṭô</td><td class="k">ঠ ṭhô</td><td class="k">ড ḍô</td><td class="k">ঢ ḍhô</td><td class="k">ণ nô</td></tr>'
 '<tr><td>Tongue on the teeth</td><td class="k">ত tô</td><td class="k">থ thô</td><td class="k">দ dô</td><td class="k">ধ dhô</td><td class="k">ন nô</td></tr>'
 '<tr><td>Lips</td><td class="k">প pô</td><td class="k">ফ fô</td><td class="k">ব bô</td><td class="k">ভ bhô</td><td class="k">ম mô</td></tr></table></div>\n'
 '<p>The same grid as tiles. Tap a letter to hear it and see how it reads.</p>\n'
 '{{tiles:ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম}}\n')

LAST = ('<h3>The nasals and the letters outside the grid</h3>\n<p>The last column of the chart holds the nasals. ম is m and ন is n. ণ is said exactly like ন today; only the spelling keeps it apart. ঙ is the ng of <i>sing</i> and never starts a word. ঞ is rare on its own: you meet it inside conjuncts, said n.</p>\n'
 '<p>Outside the grid: র is r, a light tap of the tongue, and ল is l. হ is h. য is said j, just like জ. Three letters carry a dot: ড় (ṛ) you met above, ঢ় is ড় with a puff, made from ঢ (ḍhô), and য় is a y, often just a glide between two vowels.</p>\n'
 '{{tiles:য র ল হ _ ড় ঢ় য়}}\n{{ex:লাল|lal|red}}\n{{ex:হাত|hat|hand}}\n'
 '<p>The cards below finish the alphabet. The last three are words: খাতা and ঠান্ডা use the vowel sign া (a, lesson 3), and ঠান্ডা has a conjunct (lesson 4).</p>\n')

edit('lessons-1.js', [
 # ---- lesson 1: vowels
 ('    deck: "Vowels",\n    body: `', '    deck: "Vowels",\n    sections: ' + J(SEC_V) + ',\n    body: `'),
 ('Learn to read that line first; the script will follow.</p>\n<h3>The vowel letters</h3>',
  'Learn to read that line first; the script will follow.</p>\n<h3>How Bengali is written</h3>\n<p>Bengali letters come in a few kinds. <b>Vowel letters</b> (this lesson) write a vowel at the start of a word or right after another vowel. <b>Consonant letters</b> (lesson 2) each carry a built-in vowel. <b>Vowel signs</b> (lesson 3) are small marks on a consonant that change that vowel. Two or more consonants with no vowel between them usually join into one shape, a <b>conjunct</b> (lesson 4). Most letters hang from a line along the top, and the letters of a word share one line.</p>\n<h3>The vowel letters</h3>'),
 ('It appears in a few words, and you only need to recognise it.</p>\n{{ex:আমি|ami|I}}',
  'It appears in a few words, and you only need to recognise it.</p>\n<p>Tap a letter to hear it and see how it reads.</p>\n{{tiles:অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ}}\n{{ex:আমি|ami|I}}'),
 ('{{ex:দেখা|dækha|to see}}\n<h3>How to read the line</h3>',
  '{{ex:দেখা|dækha|to see}}\n<h3>A vowel letter starts a word</h3>\n<p>A full vowel letter is written where a word starts with a vowel. Each card below starts with one. Read the first letter yourself; the line gives you the rest until you know the consonants.</p>\n<h3>How to read the line</h3>'),
 # ---- lesson 2: consonants
 ('    deck: "Consonants",\n    body: `', '    deck: "Consonants",\n    sections: ' + J(SEC_C) + ',\n    body: `'),
 ('a puff of air or not, and where the tongue touches.</p>\n<h3>Aspirated or not</h3>',
  'a puff of air or not, and where the tongue touches.</p>\n' + CHART + '<h3>Aspirated or not</h3>'),
 ('this one difference separates two words.</p>\n', 'this one difference separates two words.</p>\n{{tiles:শ ষ স}}\n'),
 ('That is not the Dhaka standard taught here.</p>\n<div class="tip">', 'That is not the Dhaka standard taught here.</p>\n' + LAST + '<div class="tip">'),
 # ---- lesson 3: vowel signs
 ('    deck: "Vowel signs",\n    body: `', '    deck: "Vowel signs",\n    sections: ' + J(SEC_S) + ',\n    body: `'),
 ('it is rare, so just recognise it.</p>\n', 'it is rare, so just recognise it.</p>\n{{tiles:কা কি কী কু কূ কৃ কে কৈ কো কৌ}}\n'),
 ('<td class="k">চমৎকার</td></tr></table></div>\n', '<td class="k">চমৎকার</td></tr></table></div>\n{{tiles:ং ঃ ঁ ৎ}}\n'),
 ('<p>To read a new word, go syllable by syllable: find each consonant, then look left, right, above and below it for its sign. No sign means the inherent vowel.</p>\n',
  '<h3>Read your first words</h3>\n<p>To read a new word, go syllable by syllable: find each consonant, then look left, right, above and below it for its sign. No sign means the inherent vowel.</p>\n<p>The cards below are real words built only from letters, signs and marks you know: no conjuncts yet. Split each one into its syllables and read it aloud before you flip it.</p>\n'),
 # ---- lesson 4: conjuncts
 ('    deck: "Conjuncts",\n    body: `', '    deck: "Conjuncts",\n    sections: ' + J(SEC_J) + ',\n    body: `'),
 ('<td class="k">প্রথম</td><td>prothom</td></tr></table></div>\n',
  '<td class="k">প্রথম</td><td>prothom</td></tr></table></div>\n<h3>Read conjuncts in words</h3>\n<p>Every card below is a common word with at least one conjunct. Before you flip it, find the conjunct and split it into its letters. Then decide: is it said as written, is a letter doubled, is a phola silent, does the vowel turn into æ, or is it ক্ষ, said kh? Check yourself against the line.</p>\n'),
])

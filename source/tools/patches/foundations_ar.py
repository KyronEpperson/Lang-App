#!/usr/bin/env python3
# Character foundations, course en-ar (FND-1). Edits tools/target/ar/lessons-1.js; then
#   node tools/target/gen.js ar && node tools/target/validate.js ar && node tools/lessonread/apply.js en-ar
# Pieces: the 28 letters (lesson 1: ا to ص, lesson 4: ض to ي, each on tiles before its deck), the short vowel marks and long vowels (lesson 3),
# sukun, shadda and the glides (lesson 5), hamza, ى, ة, tanwin (lesson 6), the article (lesson 7).
# Putting pieces together: joining (lesson 4): the four forms of every letter in two charts, the six letters that never join forward,
# and a deck that lives inside the lesson of real words read letter by letter.
# "Vowels and marks" is the deck of four lessons; each lesson takes the slice it teaches, so every card sits in exactly one lesson.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ar', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
L1, L2, VM, SP = "Letters 1: alif to sad", "Letters 2: dad to ya", "Vowels and marks", "Sound pairs"
V = lambda a, b: {"deck": VM, "n": [a, b]}
S = lambda a, b: {"deck": SP, "n": [a, b]}

JW = [["بَاب","bāb","door","بـ start, ـا end. ا never joins forward, so the last ب stands alone: ب."],
      ["كِتَاب","kitāb","book","كـ start, ـتـ middle, ـا end; after the gap, ب alone."],
      ["وَلَد","walad","boy","و alone (it never joins forward), then لـ start, ـد end."],
      ["قَلَم","qalam","pen","قـ start, ـلـ middle, ـم end: one unbroken word."],
      ["جَدِيد","jadīd","new","جـ start, ـد end; after the gap, يـ start, ـد end. Kasra + ي is the long ī."],
      ["كَبِير","kabīr","big","كـ start, ـبـ middle, ـيـ middle, ـر end."],
      ["صَغِير","ṣaghīr","small","صـ start, ـغـ middle, ـيـ middle, ـر end. In the middle, غ is a small closed loop with a dot."],
      ["طَالِب","ṭālib","student (a man)","طـ start, ـا end; after the gap, لـ start, ـب end."],
      ["شَارِع","shāriʿ","street","شـ start, ـا end; after the gap, ر alone; ر never joins forward, so ع stands alone too."],
      ["سُوق","sūq","market","سـ start, ـو end; after the gap, ق alone. Damma + و is the long ū."],
      ["نُور","nūr","light","نـ start, ـو end; after the gap, ر alone."],
      ["مَدِينَة","madīna","city","مـ start, ـد end; after the gap, يـ start, ـنـ middle, ـة end."],
      ["سَمَك","samak","fish","سـ start, ـمـ middle, ـك end."],
      ["حَلِيب","ḥalīb","milk","حـ start, ـلـ middle, ـيـ middle, ـب end."],
      ["صَدِيق","ṣadīq","friend","صـ start, ـد end; after the gap, يـ start, ـق end."],
      ["سَلَام","salām","peace","سـ start, then ل and ا melt into one shape, ـلا; after the gap, م alone."],
      ["ثَلَاثَة","thalātha","three","ثـ start, ـلا (lām alif); after the gap, ثـ start, ـة end."],
      ["مَطَار","maṭār","airport","مـ start, ـطـ middle, ـا end; after the gap, ر alone."]]

SM = [["الْبَاب","al-bāb","the door","Moon letter ب: the l is said, with sukun. al-bāb, like al-qamar."],
      ["الدَّرْس","ad-dars","the lesson","Sun letter د: the l is silent and د is doubled (shadda). ad-dars, like ash-shams."],
      ["الْوَلَد","al-walad","the boy","Moon letter و: the l is said. al-walad, like al-qamar."],
      ["النُّور","an-nūr","the light","Sun letter ن: the l is silent and ن is doubled. an-nūr, like ash-shams."],
      ["الْمَدِينَة","al-madīna","the city","Moon letter م: the l is said. al-madīna, like al-qamar."],
      ["الرَّجُل","ar-rajul","the man","Sun letter ر: the l is silent and ر is doubled. ar-rajul, like ash-shams."],
      ["الْيَوْم","al-yawm","the day; today","Moon letter ي: the l is said. al-yawm, like al-qamar."],
      ["الصَّبَاح","aṣ-ṣabāḥ","the morning","Sun letter ص: the l is silent and ص is doubled. aṣ-ṣabāḥ, like ash-shams."]]

def forms(rows):
    out = '<div class="tbl"><table><tr><th>Alone</th><th>Start</th><th>Middle</th><th>End</th></tr>'
    for r in rows.split():
        if r in 'اأدذرزو':
            f = [r, r, 'ـ' + r, 'ـ' + r]
        else:
            f = [r, r + 'ـ', 'ـ' + r + 'ـ', 'ـ' + r]
        out += '<tr>' + ''.join('<td class="k">' + x + '</td>' for x in f) + '</tr>'
    return out + '</table></div>'

SEC_LET = [None, L1, None, None, None]
SEC_SND = [[S(6, 8), S(9, 12)], None, [S(0, 2), S(8, 9)], S(2, 6), S(12, 16)]
SEC_VOW = [None, V(0, 4), None]
SEC_SHP = [None, L2, None, None, None, [V(14, 15), {"name": "Joined words", "cards": JW}]]
SEC_SUK = [None, None, V(4, 8), None]
SEC_HAM = [None, None, None, [V(8, 14), V(17, 18)]]
SEC_AL = [None, [V(15, 17), {"name": "Sun and moon words", "cards": SM}], None, None]

def sec(deck, sections, nxt):
    a = '    deck: "' + deck + '",\n    body: `\n' + nxt
    return (a, '    deck: "' + deck + '",\n    sections: ' + J(sections) + ',\n    body: `\n' + nxt)

edit('lessons-1.js', [
 # ---- lesson 1: letters
 sec(L1, SEC_LET, '<p>Arabic is read from right to left'),
 ('lesson 2 is about those. The letter ج is said as the <i>j</i> of "jam" here, as on the news; in Egypt people say it as a hard g.</p>\n<h3>Your first words</h3>',
  'lesson 2 is about those. The letter ج is said as the <i>j</i> of "jam" here, as on the news; in Egypt people say it as a hard g.</p>\n'
  '<h3>The first 14 letters: ا to ص</h3>\n<p>Here are the first 14 letters in alphabet order, each standing alone. A letter\'s name starts with its sound: <i>bāʾ</i> is b, <i>jīm</i> is j. ا <i>alif</i> is the one exception: it is the long ā, or a seat for other signs. Tap a letter to hear its name and see its sound, then find its family in the table above.</p>\n'
  '{{tiles:ا ب ت ث ج ح خ د ذ ر ز س ش ص}}\n<p>The other 14, ض to ي, get their tiles and cards in lesson 4, where you also see how letters join.</p>\n<h3>Your first words</h3>'),
 ('<p>The Letters 1 deck has the first 14 letters with their names and sounds; Letters 2 has the other 14.</p>\n', ''),
 # ---- lesson 2: sounds
 sec(SP, SEC_SND, '<p>Arabic has sounds English doesn\'t'),
 ('{{ex:تِين|tīn|figs}}\n<p>The Sound pairs deck drills all of these.',
  '{{ex:تِين|tīn|figs}}\n<h3>Long and doubled sounds</h3>\n<p>Two more differences change a word. A held vowel: جَمَل <i>jamal</i> is "camel", جَمَال <i>jamāl</i> is "beauty". A held consonant: دَرَسَ <i>darasa</i> is "he studied", دَرَّسَ <i>darrasa</i> is "he taught". Lesson 3 shows how long vowels are written and lesson 5 the doubling mark; for now, listen for the length.</p>\n{{ex:جَمَل|jamal|camel}}\n{{ex:جَمَال|jamāl|beauty}}\n<p>The Sound pairs deck drills all of these.'),
 # ---- lesson 3: vowels
 sec(VM, SEC_VOW, '<p>Arabic letters write the consonants and the long vowels.'),
 # ---- lesson 4: joining
 sec(L2, SEC_SHP, '<p>Inside a word, Arabic letters are joined'),
 ('<div class="tbl"><table><tr><th>Alone</th><th>Start</th><th>Middle</th><th>End</th></tr><tr><td class="k">ب</td><td class="k">بـ</td><td class="k">ـبـ</td><td class="k">ـب</td></tr><tr><td class="k">س</td><td class="k">سـ</td><td class="k">ـسـ</td><td class="k">ـس</td></tr></table></div>\n<p>The dots never move',
  '<div class="tbl"><table><tr><th>Alone</th><th>Start</th><th>Middle</th><th>End</th></tr><tr><td class="k">ب</td><td class="k">بـ</td><td class="k">ـبـ</td><td class="k">ـب</td></tr></table></div>\n'
  '<p>Here are the first 14 letters in all four forms. ا د ذ ر ز never join to the letter after them, so their start form is the same as alone and their middle form is the same as end: the next section explains why.</p>\n' + forms('ا ب ت ث ج ح خ د ذ ر ز س ش ص') + '\n<p>The dots never move'),
 ('{{ex:كِتَاب|kitāb|book}}\n<h3>Six letters that never join forward</h3>',
  '{{ex:كِتَاب|kitāb|book}}\n<h3>The last 14 letters, ض to ي</h3>\n<p>Lesson 1 gave you the first 14 letters one by one. Here are the other 14, first standing alone: tap a letter to hear its name and see its sound. Below them are their four forms. Most follow the ب pattern. ع and غ look open at the start of a word and like a small closed loop in the middle. ه gets a section of its own below.</p>\n'
  '{{tiles:ض ط ظ ع غ ف ق ك ل م ن ه و ي}}\n' + forms('ض ط ظ ع غ ف ق ك ل م ن ه و ي') + '\n<h3>Six letters that never join forward</h3>'),
 ('<p>The app has no handwriting practice, but copying the letters by hand on paper helps many learners remember them. The Letters 2 deck has the last 14 letters, ض to ي.</p>',
  '<h3>Read joined words, letter by letter</h3>\n<p>Now put it together. Take one word at a time, start on the right, and name each letter and its form: in قَلَم <i>qalam</i> "pen", ق is in its start form, ل in its middle form and م in its end form. Where a word breaks after ا د ذ ر ز و, the next letter starts again. The cards below are real words that use only the letters and vowels you know. Read each one aloud before you flip it; the back shows how it breaks into letters.</p>\n<p>The app has no handwriting practice, but copying the letters by hand on paper helps many learners remember them.</p>'),
 # ---- lesson 5: sukun and shadda
 sec(VM, SEC_SUK, '<p>Two more vowel marks complete the set'),
 ('so the word has two beats, not three: no vowel between k and t.</p>',
  'so the word has two beats, not three: no vowel between k and t.</p>\n<div class="tbl"><table><tr><th>Mark</th><th>Name</th><th>Sound</th></tr><tr><td class="k">بْ</td><td>sukun: a small circle above</td><td>b, with no vowel after it</td></tr></table></div>'),
 ('The romanisation writes the letter twice.</p>',
  'The romanisation writes the letter twice.</p>\n<div class="tbl"><table><tr><th>Mark</th><th>Name</th><th>Sound</th></tr><tr><td class="k">بّ</td><td>shadda: a small w above</td><td>bb, a held b</td></tr><tr><td class="k">بَّ</td><td>shadda with fatha</td><td>bba</td></tr></table></div>'),
 ('and the romanisation shows the glide as two letters.</p>',
  'and the romanisation shows the glide as two letters.</p>\n<div class="tbl"><table><tr><th>Letters</th><th>Sound</th></tr><tr><td class="k">بَوْ</td><td>baw, close to "bough"</td></tr><tr><td class="k">بَيْ</td><td>bay, close to "buy"</td></tr></table></div>'),
 # ---- lesson 6: hamza, alif maqsura, taa marbuta, tanwin
 sec(VM, SEC_HAM, '<p>A few last signs, and you can read every word in this course.</p>'),
 ('آ, alif with a wavy line, is hamza plus a long ā: آسِف <i>āsif</i> "sorry".</p>',
  'آ, alif with a wavy line, is hamza plus a long ā: آسِف <i>āsif</i> "sorry".</p>\n<div class="tbl"><table><tr><th>Sign</th><th>Where you see it</th></tr><tr><td class="k">ء</td><td>alone, on the line</td></tr><tr><td class="k">أ</td><td>on alif: at the start of a word it is a or u; it also appears inside a word</td></tr><tr><td class="k">إ</td><td>under alif, at the start of a word: i</td></tr><tr><td class="k">ؤ</td><td>on و, inside a word</td></tr><tr><td class="k">ئ</td><td>on a dotless ي, inside a word</td></tr><tr><td class="k">آ</td><td>hamza plus a long ā</td></tr></table></div>'),
 ('It is said ā, not ī.</p>',
  'It is said ā, not ī.</p>\n<div class="tbl"><table><tr><th>Letter</th><th>Sound</th></tr><tr><td class="k">ى</td><td>ā, only at the end of a word: no dots</td></tr><tr><td class="k">ي</td><td>ī or y: two dots below</td></tr></table></div>\n<p>One more way to write ā: in هٰذَا <i>hādhā</i> "this", the small upright alif above ه stands for the long ā. You\'ll see it in only a few common words, such as هٰذَا and هٰذِهِ.</p>'),
 ('Without the dots, ه is a plain h, a different letter.</p>',
  'Without the dots, ه is a plain h, a different letter.</p>\n<div class="tbl"><table><tr><th>Letter</th><th>Sound</th></tr><tr><td class="k">ة</td><td>-a, at the end of a word: two dots on top</td></tr><tr><td class="k">ه</td><td>h: no dots</td></tr></table></div>'),
 ('Together they are said <i>-an</i>. You meet it',
  'Together they are said <i>-an</i>.</p>\n<div class="tbl"><table><tr><th>Spelling</th><th>Sound</th></tr><tr><td class="k">رًا</td><td>-ran: two slashes on the letter, then ا</td></tr></table></div>\n<p>You meet it'),
 # ---- lesson 7: the article
 sec(VM, SEC_AL, '<p>Arabic has no word for "a"'),
 ('{{ex:الطَّالِب|aṭ-ṭālib|the student (a man)}}\n<h3>Little words in front</h3>',
  '{{ex:الطَّالِب|aṭ-ṭālib|the student (a man)}}\n<p>The cards below mix sun and moon words. Look at the first letter after ال and decide whether you say the l before you flip.</p>\n<h3>Little words in front</h3>'),
])

#!/usr/bin/env python3
# Character foundations, course en-am (FND-1). Edits tools/target/am/lessons-1.js; then
#   node tools/target/gen.js am && node tools/target/validate.js am && node tools/lessonread/apply.js en-am
# What changes: the five script lessons (orders, fidel-1, fidel-2, fidel-3, reading) name the flashcards of each section (`sections`).
# Pieces: the seven orders (lesson 1, on the b row, then on l and m), then the consonant rows (lessons 2 to 4: first-order tiles,
# one full row tiled per lesson, the plain/ejective pairs tiled in lesson 4), then the -wa forms (lesson 5, tiles and a table).
# Putting together: reading a word character by character, with the sixth order said with or without its vowel and the long
# consonant the fidel does not write. Lessons 2, 3 and 4 each get a deck of real words that lives inside the lesson and uses only
# the rows taught so far. Every first-order letter of the 33 basic rows (and ቨ) already has a card; none is added.
# No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'am', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
O, F1, F2, F3, R = "How the fidel works", "Fidel rows: ሀ to ቸ", "Fidel rows: ኀ to ዠ", "Fidel rows: የ to ፐ", "Reading words"

# fidel-1: words from በ and the rows ሀ to ቸ only
W1 = [["ሰላም","selam","hello","ሰ + ላ + ም. The sixth-order ም ends the word with no vowel."],
      ["ሴት","sét","woman","ሴ + ት. Fifth-order s, then t with no vowel."],
      ["በር","ber","door","በ + ር"],
      ["ራስ","ras","head","ራ + ስ"],
      ["ብር","birr","birr (the money)","ብ + ር. Here the sixth-order ብ keeps its vowel, and the r is long."],
      ["ቢራ","birra","beer","ቢ + ራ. The r is long, a trill. The spelling does not show it."],
      ["ሂሳብ","hisab","the bill","ሂ + ሳ + ብ. ሂ is the third order of ሀ."],
      ["ምስር","misir","lentils","ም + ስ + ር: mi-si-r."],
      ["ተማሪ","temari","student","ተ + ማ + ሪ"],
      ["ሀበሻ","habesha","Habesha, what Ethiopians call themselves","ሀ + በ + ሻ. First-order ሀ has the father vowel."],
      ["ሶስት","sost","three","ሶ + ስ + ት. Both sixth orders are silent here."],
      ["ሰባት","sebat","seven","ሰ + ባ + ት"],
      ["መቶ","meto","hundred","መ + ቶ"],
      ["ሀሙስ","hamus","Thursday","ሀ + ሙ + ስ"],
      ["ቤተሰብ","béteseb","family","ቤ + ተ + ሰ + ብ"],
      ["ትምህርት","timihirt","education, schooling","ት + ም + ህ + ር + ት. Five sixth orders: ti-mi-hi-r-t."]]
# fidel-2: words that add the rows ኀ to ዠ
W2 = [["ውሃ","wiha","water","ው + ሃ. Sixth-order ወ, said wi, then ሃ."],
      ["ማን","man","who","ማ + ን. Not the English word man."],
      ["እኔ","iné","I, me","እ + ኔ. እ is the sixth order of አ: the vowel i alone."],
      ["አንተ","ante","you (to a man)","አ + ን + ተ"],
      ["አንቺ","anchi","you (to a woman)","አ + ን + ቺ"],
      ["አባት","abbat","father","አ + ባ + ት. The b is long: abbat."],
      ["እናት","innat","mother","እ + ና + ት. The n is long: innat."],
      ["እህት","ihit","sister","እ + ህ + ት"],
      ["ቀን","k'en","day","ቀ + ን. The ejective, then n."],
      ["ዛሬ","zaré","today","ዛ + ሬ"],
      ["ሰኞ","sennyo","Monday","ሰ + ኞ. ኞ is the seventh order of ኘ, and the ny is long."],
      ["አዎ","awo","yes","አ + ዎ"],
      ["እሺ","isshi","okay","እ + ሺ. The sh is long: isshi."],
      ["ሰዓት","se'at","hour; watch","ሰ + ዓ + ት. ዓ is the fourth order of ዐ. Inside a word it is a short catch, the apostrophe."],
      ["መኪና","mekina","car","መ + ኪ + ና. ኪ is the third order of ከ."],
      ["ሁለት","hulet","two","ሁ + ለ + ት"],
      ["ትንሽ","tinish","small; a little","ት + ን + ሽ: ti-ni-sh."]]
# fidel-3: words that need the last rows
W3 = [["ኢትዮጵያ","ityop'ya","Ethiopia","ኢ + ት + ዮ + ጵ + ያ. ጵ is the ejective p'. Sixth-order ት and ጵ have no vowel."],
      ["እንጀራ","injera","injera, the flatbread","እ + ን + ጀ + ራ"],
      ["ዶሮ","doro","chicken","ዶ + ሮ"],
      ["ጨው","ch'ew","salt","ጨ + ው. The ejective ch', then sixth-order w."],
      ["ሻይ","shay","tea","ሻ + ይ"],
      ["ጥብስ","t'ibs","tibs, fried meat","ጥ + ብ + ስ. The ejective t' first."],
      ["የት","yet","where","የ + ት"],
      ["ልጅ","lij","child","ል + ጅ"],
      ["ወንድም","wendim","brother","ወ + ን + ድ + ም"],
      ["ቀይ","k'ey","red","ቀ + ይ"],
      ["በጣም","bet'am","very","በ + ጣ + ም. ጣ is the ejective t' with the father vowel."],
      ["ግራ","gira","left","ግ + ራ"],
      ["ቀኝ","k'eny","right (side)","ቀ + ኝ. ኝ is the sixth order of ኘ."],
      ["አንድ","and","one","አ + ን + ድ. Not the English word and."],
      ["ዘጠኝ","zet'eny","nine","ዘ + ጠ + ኝ"],
      ["ይቅርታ","yik'irta","sorry; excuse me","ይ + ቅ + ር + ታ"],
      ["መጽሐፍ","mets'haf","book","መ + ጽ + ሐ + ፍ. ጽ is the ejective ts' with no vowel."]]

SEC_O = [{"deck": O, "n": [0, 7]}, {"deck": O, "n": [7, 17]}, None, None, None, None, None]
SEC_F1 = [{"deck": F1, "n": [0, 12]}, {"deck": F1, "n": [12, 17]}, None, {"name": "Words from the first rows", "cards": W1}]
SEC_F2 = [{"deck": F2, "n": [0, 10]}, None, {"deck": F2, "n": [10, 17]}, {"name": "Words with ኀ to ዠ", "cards": W2}]
SEC_F3 = [[{"deck": F3, "n": [0, 11]}, {"deck": F3, "n": [13, 16]}], [{"deck": F3, "n": [11, 13]}, {"deck": F3, "n": [16, 17]}, {"name": "Words with every row", "cards": W3}]]
SEC_R = [[{"deck": R, "n": [6, 7]}, {"deck": R, "n": [10, 11]}, {"deck": R, "n": [16, 17]}], [{"deck": R, "n": [2, 6]}, {"deck": R, "n": [9, 10]}], [{"deck": R, "n": [0, 2]}, {"deck": R, "n": [7, 9]}], {"deck": R, "n": [11, 16]}]

edit('lessons-1.js', [
 # ---- lesson 1: orders
 ('    deck: "How the fidel works",\n    body: `',
  '    deck: "How the fidel works",\n    sections: ' + J(SEC_O) + ',\n    body: `'),
 ('one character is a consonant plus a vowel, not an English letter on its own. There are no capital letters.</p>',
  'one character is a consonant plus a vowel, not an English letter on its own. There are no capital letters. The course goes in this order: the seven orders in this lesson, then the consonant rows over three lessons, then reading whole words.</p>'),
 ('<b>በ</b> does not.</p>\n{{ex:በ|be|b with the vowel of but}}',
  '<b>በ</b> does not. Tap a shape to hear it.</p>\n{{tiles:በ ቡ ቢ ባ ቤ ብ ቦ}}\n{{ex:በ|be|b with the vowel of but}}'),
 ('{{ex:ቡና ቤት|bunna bét|a coffee house}}\n<h3>The sixth order</h3>',
  '{{ex:ቡና ቤት|bunna bét|a coffee house}}\n<h3>The same orders on l and m</h3>\n<p>Every row works the same way. Here are l and m. The marks for the vowels change a little from row to row, but the order never does: e, u, i, a, é, i, o in the English letters. Tap a shape to hear it.</p>\n{{tiles:ለ ሉ ሊ ላ ሌ ል ሎ _ _ _ መ ሙ ሚ ማ ሜ=mé ም=mi ሞ=mo}}\n<p>Two characters side by side make a word. <b>ል</b> + <b>ብ</b> is <b>ልብ</b>, heart: <b>ል</b> is said li, <b>ብ</b> has no vowel, and the b is long, libb. The spelling does not show the long b.</p>\n<h3>The sixth order</h3>'),
 # ---- lesson 2: fidel-1
 ('    deck: "Fidel rows: ሀ to ቸ",\n    body: `',
  '    deck: "Fidel rows: ሀ to ቸ",\n    sections: ' + J(SEC_F1) + ',\n    body: `'),
 ('<tr><td class="k">ቸ</td><td>ch, as in church</td></tr>\n</table></div>',
  '<tr><td class="k">ቸ</td><td>ch, as in church</td></tr>\n</table></div>\n<p>Tap a letter to hear it.</p>\n{{tiles:ሀ ለ ሐ መ ሠ ረ ሰ ሸ ቀ በ ቨ ተ ቸ}}'),
 ('The word is spelled with <b>ሰ</b>, not with <b>ሠ</b>.</p>\n{{ex:ሰላም|selam|hello}}',
  'The word is spelled with <b>ሰ</b>, not with <b>ሠ</b>.</p>\n{{tiles:ሰ ሱ=su ሲ=si ሳ=sa ሴ=sé ስ=si ሶ=so}}\n{{ex:ሰላም|selam|hello}}'),
 ('{{ex:ደህና ነሽ|dehna nesh|you are fine (to a woman)}}\n<div class="tip"><b>Most common mistake:</b> calling <b>ቀ</b> a plain k.',
  '{{ex:ደህና ነሽ|dehna nesh|you are fine (to a woman)}}\n<h3>Putting it together</h3>\n<p>You can now read real words with only these rows and <b>በ</b>. Read a word one character at a time. The spelling leaves two things to you: whether a sixth-order character keeps its vowel, and whether a consonant is long. <b>ሶስት</b> is <b>ሶ</b> + <b>ስ</b> + <b>ት</b>, sost, three: both sixth orders are silent. <b>ቢራ</b> is <b>ቢ</b> + <b>ራ</b>, birra, beer: the r is long. Read each card aloud before you flip it.</p>\n<div class="tip"><b>Most common mistake:</b> calling <b>ቀ</b> a plain k.'),
 # ---- lesson 3: fidel-2
 ('    deck: "Fidel rows: ኀ to ዠ",\n    body: `',
  '    deck: "Fidel rows: ኀ to ዠ",\n    sections: ' + J(SEC_F2) + ',\n    body: `'),
 ('<tr><td class="k">ዠ</td><td>the sound in the middle of pleasure</td></tr>\n</table></div>',
  '<tr><td class="k">ዠ</td><td>the sound in the middle of pleasure</td></tr>\n</table></div>\n<p>Tap a letter to hear it.</p>\n{{tiles:ኀ ነ ኘ አ ከ ኸ ወ ዐ ዘ ዠ}}'),
 ('You can now read the first letter of the endings <b>ነህ</b> and <b>ነሽ</b>.</p>',
  'You can now read the first letter of the endings <b>ነህ</b> and <b>ነሽ</b>. Here is the whole n row.</p>\n{{tiles:ነ ኑ=nu ኒ=ni ና=na ኔ ን=ni ኖ}}'),
 ('{{ex:ደህና ነው|dehna new|he is fine}}\n<div class="tip">',
  '{{ex:ደህና ነው|dehna new|he is fine}}\n<h3>Putting it together</h3>\n<p>With these rows you can read many small everyday words. <b>እ</b>, the sixth order of <b>አ</b>, is the vowel i with no consonant: <b>እኔ</b> is <b>እ</b> + <b>ኔ</b>, iné, I. Long consonants are still not written: <b>አባት</b> is abbat, father, with a long b. Read each card one character at a time before you flip it.</p>\n<div class="tip">'),
 # ---- lesson 4: fidel-3
 ('    deck: "Fidel rows: የ to ፐ",\n    body: `',
  '    deck: "Fidel rows: የ to ፐ",\n    sections: ' + J(SEC_F3) + ',\n    body: `'),
 ('<tr><td class="k">ፐ</td><td>p</td></tr>\n</table></div>',
  '<tr><td class="k">ፐ</td><td>p</td></tr>\n</table></div>\n<p>Tap a letter to hear it.</p>\n{{tiles:የ ደ ጀ ገ ጠ ጨ ጰ ጸ ፀ ፈ ፐ}}'),
 ('Do not flatten the ejective into the plain letter.</p>',
  'Do not flatten the ejective into the plain letter. Tap each pair: the plain letter on the top line, its ejective partner under it. <b>ቀ</b>, under <b>ከ</b>, is the pair you met first.</p>\n{{tiles:ተ ቸ ፐ ሰ ከ ጠ ጨ ጰ ጸ ቀ}}'),
 ('{{ex:አቶ ከበደ|ato kebbede|Ato Kebede, a title plus a man\'s name}}\n',
  '{{ex:አቶ ከበደ|ato kebbede|Ato Kebede, a title plus a man\'s name}}\n<p>You now know every basic row. The cards below are everyday words: food, family, numbers, directions. Read each one character at a time. Decide for each sixth order whether it keeps its vowel, then flip the card and check the long consonants.</p>\n'),
 # ---- lesson 5: reading
 ('    deck: "Reading words",\n    body: `',
  '    deck: "Reading words",\n    sections: ' + J(SEC_R) + ',\n    body: `'),
 ('Other consonants have one too. Learn the shape with the word.</p>',
  'Other consonants have one too. Learn the shape with the word. Tap a shape to hear it. <b>ቋ</b> is the -wa form on the ejective <b>ቀ</b>, as in <b>ቋንቋ</b>, language.</p>\n{{tiles:ቧ ሏ ኳ ጓ ቋ=k\'wa}}'),
 ('You do not need a separate word for the letter itself.</p>',
  'You do not need a separate word for the letter itself.</p>\n<p>Many other rows have a -wa form. You do not need cards for these. Read each one as its consonant plus wa when you meet it. <b>እሷ</b>, she, is isswa.</p>\n<div class="tbl"><table><tr><th>Shape</th><th>Row</th><th>Read</th></tr>\n<tr><td class="k">ሟ</td><td class="k">መ</td><td>mwa</td></tr>\n<tr><td class="k">ሯ</td><td class="k">ረ</td><td>rwa</td></tr>\n<tr><td class="k">ሷ</td><td class="k">ሰ</td><td>swa</td></tr>\n<tr><td class="k">ቷ</td><td class="k">ተ</td><td>twa</td></tr>\n<tr><td class="k">ዷ</td><td class="k">ደ</td><td>dwa</td></tr>\n<tr><td class="k">ጧ</td><td class="k">ጠ</td><td>t\'wa</td></tr>\n</table></div>'),
])

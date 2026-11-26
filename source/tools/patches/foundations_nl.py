#!/usr/bin/env python3
# Character foundations, course en-nl (FND-1). Edits tools/target/nl/lessons-1.js; then
#   node tools/target/gen.js nl && node tools/target/validate.js nl && node tools/lessonread/apply.js en-nl
# Dutch uses the Latin alphabet, so the foundation is the one lesson `vowels` (lesson 1), and it teaches what differs from English, not the ABC.
# How it works = a new opening section "Letters you already know": the 26 letters of English, with one tile block of the letters
# that sound much as in English (plus ij, which Dutch often counts as a letter). No flashcards.
# Pieces = (a) the vowels, short in a closed syllable and long when written double (a/aa, e/ee, i/ie, o/oo, u/uu, oe), with vowel tiles
# and the single-word cards of "Sounds and spelling"; (b) one letter or two: the open-syllable rule, with the deck's -en cards;
# (c) the consonants and marks that differ (g, ch, j, w, v, z, r, -en, ë, é), with tiles and a small in-lesson deck "Letters that differ".
# Putting together = cutting a word into syllables and reading each one by the rules: a new section "Read whole words" with a deck
# of 18 real, common words that use only the spellings of this lesson; each note names the pieces.
# The next lesson, `sounds`, keeps its own deck and is left as it is (g, ch, ui, eu, ij, ou, sch are trained there).
# No card of an existing deck is changed. Readings are those of tools/target/nl/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'nl', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

LD = [["g", "kh", "the letter g", "The kh of Scottish loch, not the g of good: de rug, duh ruekh, the back. ch is the same sound. A few borrowed words such as goal keep their own g. The next lesson trains it."],
      ["j", "y", "the letter j", "The y of yes, not the j of jam: ja, yaah, yes. A few borrowed words such as jazz keep their own sound."],
      ["w", "w", "the letter w", "Lower lip on the upper teeth, softer than an English w: de week, duh wayk."],
      ["v", "v", "the letter v", "At the start of a word it is often close to f in the north and west: veel, vayl, much, many. Both are understood."],
      ["z", "z", "the letter z", "At the start of a word it may sound close to s: de zon, duh zawn, the sun."],
      ["r", "r", "the letter r", "A tap or a throat r, not an English r: de rug, duh ruekh, the back."],
      ["-en", "uh", "the ending -en", "The line drops the n: lopen, LOH-puh, to walk. Keeping the n is not an error."],
      ["ë", "uh", "e with two dots", "The two dots start a new syllable. The e keeps its usual sound, here a weak uh: de zeeën, duh ZAY-uh, the seas."],
      ["é", "ay", "e with an accent", "The mark adds stress: één, ayn, one. Without it, een is uhn, a."]]
WW = [["de tafel", "duh TAAH-fuhl", "the table", "ta-fel: one a in an open syllable is long, aah. The weak e is uh."],
      ["het raam", "uht raahm", "the window", "r, then aa written double in a closed syllable: a long aah."],
      ["de kat", "duh kaht", "the cat", "One a in a closed syllable is short: ah."],
      ["de bus", "duh bues", "the bus", "Short u, rounded and forward: ue. Not the u of English bus."],
      ["het boek", "uht book", "the book", "oe is the oo of food, so the line book rhymes with spook, not with English book. k has no puff of air."],
      ["de stoel", "duh stool", "the chair", "st as in English, then oe, the oo of food, then l."],
      ["de week", "duh wayk", "the week", "w with the lip on the teeth; ee is a steady ay."],
      ["het jaar", "uht yaahr", "the year", "j is the y of yes; aa is a long aah."],
      ["de zomer", "duh ZOH-muhr", "the summer", "zo-mer: one o in an open syllable is long, oh. The weak e is uh."],
      ["de lepel", "duh LAY-puhl", "the spoon", "le-pel: one e in an open syllable is long, ay. Then a weak uh."],
      ["de bloem", "duh bloom", "the flower", "bl as in English, then oe, the oo of food."],
      ["lopen", "LOH-puh", "to walk", "lo-pen: one o in an open syllable is long. The line drops the n of -en."],
      ["de kamer", "duh KAAH-muhr", "the room", "ka-mer: one a in an open syllable is long, aah."],
      ["het nummer", "uht NUE-muhr", "the number", "The double m keeps the u short: ue."],
      ["de straat", "duh straaht", "the street", "str as in English, then a long aa."],
      ["lezen", "LAY-zuh", "to read", "le-zen: a long ay, then z, then -en without its n."],
      ["de jas", "duh yahs", "the coat", "j is the y of yes; one a in a closed syllable is short."],
      ["het vuur", "uht vuur", "the fire", "v, then uu: the ee of see with rounded lips."]]

SEC = [None,
       [{"deck": D, "n": [0, 2]}, {"deck": D, "n": [4, 5]}, {"deck": D, "n": [6, 14]}, {"deck": D, "n": [15, 17]}],
       [{"deck": D, "n": [2, 4]}, {"deck": D, "n": [5, 6]}, {"deck": D, "n": [14, 15]}],
       {"name": "Letters that differ", "cards": LD},
       {"name": "Whole words", "cards": WW}]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('The line is an aid, not a measurement.</p>\n<h3>Short, long, and no glide</h3>',
  'The line is an aid, not a measurement.</p>\n<h3>Letters you already know</h3>\n'
  '<p>Dutch is written with the same 26 letters as English. These sound much as in English. At the end of a word, <b>d</b> sounds like t and <b>b</b> like p. On their own, <b>c</b>, <b>q</b>, <b>x</b> and <b>y</b> turn up mostly in borrowed words. <b>c</b> is common in <b>ch</b> and <b>sch</b>, which you meet below and in the next lesson. One pair, <b>ij</b>, is often counted as a letter of its own. It is the sound of <b>ei</b>, and the next lesson trains it. The rest of this lesson is about the vowels and the letters that differ. Tap a letter to hear it.</p>\n'
  '{{tiles:b=b d=d f=f h=h k=k l=l m=m n=n p=p s=s t=t c=k_or_s q=kw x=ks y=ee_or_y ij=igh}}\n'
  '<h3>Short, long, and no glide</h3>'),
 ('{{ex:de muur|duh muur|the wall}}\n<h3>One letter or two</h3>',
  '{{ex:de muur|duh muur|the wall}}\n'
  '<p><b>e</b> in a closed syllable is the eh of bed: <b>mes</b>, knife. <b>ee</b> is a steady ay: <b>zee</b>, sea. Before r it sounds more like the ea of near: <b>meer</b>, lake. Short <b>i</b> is the ih of sit: <b>vis</b>, fish. Short <b>o</b> is the o of British hot: <b>zon</b>, sun. In <b>de</b> and in most endings, e is a weak uh. The tiles give the five short vowels first, then the long ones, then oe. Tap one to hear it.</p>\n'
  '{{tiles:a=ah e=eh i=ih o=aw u=ue aa=aah ee=ay ie=ee oo=oh uu=uu oe=oo}}\n'
  '<h3>One letter or two</h3>'),
 ('{{ex:werken|WEHR-kuh|to work}}\n',
  '{{ex:werken|WEHR-kuh|to work}}\n'
  '<p>Two letters differ everywhere. <b>j</b> is the y of yes: <b>ja</b>, yes. A few borrowed words such as jazz keep their own sound. <b>g</b>, like <b>ch</b>, is the kh of Scottish <i>loch</i>. The next lesson trains it. Two marks turn up now and then. Two dots start a new syllable: <b>de zeeën</b>, the seas, is duh ZAY-uh. An accent adds stress: <b>één</b>, one, is ayn, and <b>een</b>, a, is uhn. Tap a letter to hear it.</p>\n'
  '{{tiles:g=kh ch=kh j=y w=w v=v z=z r=r ë=uh é=ay}}\n'),
 ('{{ex:het huis|uht huys|the house}}\n<div class="tip">',
  '{{ex:het huis|uht huys|the house}}\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now put it together. Read a word in two steps. First cut it into syllables: one consonant between two vowels goes with the second vowel, so <b>tafel</b> is ta-fel, and its a is long. A doubled consonant splits, so <b>nummer</b> is num-mer, and its u is short. <b>ch</b> is never doubled but works like a double: <b>lachen</b> has a short a. Then give each piece its Dutch sound: <b>j</b> is y, <b>oe</b> is oo, a weak e is uh, and <b>-en</b> drops its n. Most Dutch words stress the first syllable, but not the prefixes be-, ge-, ver- and ont-. Each card\'s note shows the pieces. Say the word aloud before you flip it.</p>\n'
  '{{ex:de tafel|duh TAAH-fuhl|the table}}\n'
  '<div class="tip">'),
])

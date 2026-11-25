#!/usr/bin/env python3
# Character foundations, course en-fr (FND-1). Edits tools/target/fr/lessons-1.js; then
#   node tools/target/gen.js fr && node tools/target/validate.js fr && node tools/lessonread/apply.js en-fr
# French uses the 26 letters an English speaker already reads, so the foundation is the one lesson `sounds`, and it teaches what differs.
# Pieces = (a) the accents and marks, (b) the vowel spellings and the nasal vowels, (c) the consonant spellings that differ from English,
# plus the 26 letters on tiles with their French names (needed to spell a name aloud). Each group gets flip tiles; the existing deck
# "Sounds and spelling" is cut across the sections that teach its words, and small in-lesson decks of spelling cards
# (front = spelling, reading = its sound, note = an example word) cover the spellings its words do not.
# Putting together = reading a whole word from its spelling: letter groups as one sound, silent final letters dropped, liaison.
# A "Read whole words" section with a deck of 18 common words, each note naming its spellings and silent letters.
# No card of an existing deck is changed. Readings are those of tools/target/fr/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'fr', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
S = "Sounds and spelling"

AC = [["é","ay","e with an acute accent","Always ay: été (ay-tay), summer."],
      ["è","eh","e with a grave accent","Always eh: mère (mehr), mother."],
      ["ê","eh","e with a circumflex","Said eh, like è: forêt (foh-reh), forest."],
      ["ë","eh","e with two dots","Say this e on its own, apart from the vowel before it: Noël (noh-ehl), Christmas."],
      ["à","ah","a with a grave accent","Same sound as a; it tells words apart: à (ah), to, at; a (ah), has."],
      ["â","ah","a with a circumflex","Said ah: gâteau (gah-toh), cake."],
      ["î","ee","i with a circumflex","Said ee: île (eel), island."],
      ["ï","ee","i with two dots","Say this i on its own, apart from the vowel before it: naïf (nah-eef), naive."],
      ["ô","oh","o with a circumflex","Said oh: tôt (toh), early."],
      ["û","ew","u with a circumflex","Said ew, like u: sûr (sewr), sure."],
      ["ù","oo","u with a grave accent","Only in où (oo), where. ou without the accent means or."],
      ["œ","uh","o and e joined","Usually in œu, said uh: cœur (kuhr), heart."]]
VS = [["ou","oo","oo, as in food","nous (noo), we"],
      ["u","ew","ee said with rounded lips","tu (tew), you"],
      ["eu","uh","uh said with rounded lips","bleu (bluh), blue"],
      ["au","oh","a pure oh, no w at the end","aussi (oh-see), also"],
      ["eau","oh","the same oh, three letters","beau (boh), beautiful"],
      ["oi","wah","wah, as in the start of wander","moi (mwah), me"],
      ["ai","eh","eh, as in bed","lait (leh), milk. The t is silent."],
      ["ei","eh","eh, the same sound as ai","neige (nehzh), snow"]]
NV = [["an","ahN","nasal ah, the n not said","dans (dahN), in"],
      ["en","ahN","the same sound as an","temps (tahN), time; weather. The p and s are silent."],
      ["on","ohN","nasal oh","bon (bohN), good"],
      ["in","aN","nasal a, as in bag","jardin (zhahr-daN), garden"],
      ["ain","aN","the same sound as in","main (maN), hand"],
      ["un","uhN","nasal uh","un (uhN), one; a"]]
LN = [["A","ah","the letter a","Name and sound are the same."],
      ["B","bay","the letter b","Rhymes with clé."],
      ["C","say","the letter c","Like English say."],
      ["D","day","the letter d","Like English day."],
      ["E","uh","the letter e","Not ee: E is uh. É is said e accent aigu."],
      ["F","ehf","the letter f","As in English."],
      ["G","zhay","the letter g","G is zhay, J is zhee: the reverse of English."],
      ["H","ahsh","the letter h","The name has no h sound, and neither does the letter."],
      ["I","ee","the letter i","Not eye: I is ee."],
      ["J","zhee","the letter j","J is zhee, G is zhay."],
      ["K","kah","the letter k","Rare in French words."],
      ["L","ehl","the letter l","Sounds like elle (she)."],
      ["M","ehm","the letter m","As in English."],
      ["N","ehn","the letter n","As in English."],
      ["O","oh","the letter o","A pure oh."],
      ["P","pay","the letter p","Like English pay."],
      ["Q","kew","the letter q","Said with the French u: not English queue."],
      ["R","ehr","the letter r","The French r, at the back of the throat."],
      ["S","ehs","the letter s","As in English."],
      ["T","tay","the letter t","Like the start of English table."],
      ["U","ew","the letter u","Not you: U is ew."],
      ["V","vay","the letter v","Rhymes with clé."],
      ["W","doobl-vay","the letter w","Double v, not double u."],
      ["X","eeks","the letter x","Not ex: X is eeks."],
      ["Y","ee-grehk","the letter y","Greek i."],
      ["Z","zehd","the letter z","Like British zed."]]
RW = [["bonjour","bohN-zhoor","hello; good morning","on is nasal ohN, j is zh, ou is oo. The final r is said."],
      ["merci","mehr-see","thank you","c before i is s."],
      ["beaucoup","boh-koo","a lot, very much","eau is oh, ou is oo. The final p is silent."],
      ["trois","trwah","three","oi is wah. The final s is silent."],
      ["maison","meh-zohN","house","ai is eh; one s between two vowels is z; on is nasal."],
      ["pain","paN","bread","ain is nasal aN: no n sound."],
      ["lundi","luhN-dee","Monday","un is nasal uhN, then di."],
      ["fille","feey","girl; daughter","ill is y. The final e is silent."],
      ["montagne","mohN-tahny","mountain","on is nasal, gn is ny. The final e is silent."],
      ["château","shah-toh","castle","ch is sh, â is ah, eau is oh."],
      ["garçon","gahr-sohN","boy","ç is s, even before o; on is nasal."],
      ["français","frahN-seh","French (the language)","an is nasal, ç is s, ai is eh. The final s is silent."],
      ["hôtel","oh-tehl","hotel","h is silent, ô is oh. The final l is said (careful)."],
      ["fromage","froh-mahzh","cheese","g before e is zh. The final e is silent."],
      ["deux","duh","two","eu is uh. The final x is silent."],
      ["sœur","suhr","sister","œu is uh. The final r is said."],
      ["quatre","kahtr","four","qu is k. The final e is silent, so one syllable."],
      ["les enfants","lay zahN-fahN","the children","Liaison: the silent s of les is said z before a vowel. en and an are both ahN; the t and s of enfants are silent."]]

SEC = [None,
       {"name": "Accents and marks", "cards": AC},
       [{"deck": S, "n": [0, 6]}, {"name": "Vowel spellings", "cards": VS}],
       [{"deck": S, "n": [6, 10]}, {"name": "Nasal spellings", "cards": NV}],
       {"deck": S, "n": [10, 14]},
       {"deck": S, "n": [14, 18]},
       None,
       None,
       {"name": "Read whole words", "cards": RW},
       None]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `\n<p>Under every French phrase in this course',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `\n<h3>How French spelling works</h3>\n<p>Under every French phrase in this course'),
 ('only the last one of a group a little longer.</p>\n<h3>Eight vowel sounds</h3>',
  'only the last one of a group a little longer.</p>\n'
  '<p>French uses the same 26 letters as English, plus a few marks on vowels and on c. You already read the letters; what changes is the sound. Many sounds are spelled with two or three letters (<b>ou</b>, <b>eau</b>, <b>ch</b>), and many letters at the end of a word are not said at all. So the pieces to learn are the marks, the letter groups and the silent letters. Once you know them you can read almost any word aloud, even one you have never seen.</p>\n'
  '<h3>Accents and marks</h3>\n'
  '<p>An accent is part of the spelling, never decoration. On <b>e</b> it changes the sound: <b>é</b> is always <i>ay</i>, <b>è</b> and <b>ê</b> are <i>eh</i>. On the other vowels it does not: <b>à</b> and <b>â</b> are <i>ah</i>, <b>î</b> is <i>ee</i>, <b>ô</b> is <i>oh</i>, <b>û</b> is <i>ew</i>, and <b>ù</b> appears only in <b>où</b> (where). Two dots (<b>ë</b>, <b>ï</b>) mean: say this vowel on its own, not as part of a pair, so <b>naïf</b> is <i>nah-eef</i>. <b>ç</b> is always <i>s</i>, even before a, o and u, where a plain c is <i>k</i>. <b>œ</b> is o and e joined, said <i>uh</i>. Tap a letter to see how it reads.</p>\n'
  '{{tiles:é è ê ë à â î ï ô û ù ç=s œ}}\n'
  '<h3>Eight vowel sounds</h3>'),
 ('<p><b>u</b> and <b>ou</b> make different words.</p>\n',
  '<p>Two or three letters together often make one vowel sound: <b>ou</b> is <i>oo</i>, <b>eau</b> is <i>oh</i>, <b>ai</b> is <i>eh</i>. <b>oi</b> is <i>wah</i>. Tap each group.</p>\n{{tiles:ou u eu au eau oi ai ei}}\n<p><b>u</b> and <b>ou</b> make different words.</p>\n'),
 ('English speakers tend to merge <i>ahN</i> and <i>ohN</i>; they are different words.</p>\n',
  'English speakers tend to merge <i>ahN</i> and <i>ohN</i>; they are different words.</p>\n{{tiles:an en on in ain un}}\n'),
 ('and <i>gh</i> is the hard g of <i>get</i>.</p>\n<h3>le, la, les</h3>',
  'and <i>gh</i> is the hard g of <i>get</i>.</p>\n'
  '<p>Before <b>e</b> and <b>i</b>, <b>g</b> and <b>c</b> go soft: <b>ge, gi</b> are <i>zh</i>, <b>ce, ci</b> are <i>s</i>. Before a, o and u they stay hard. <b>qu</b> is just <i>k</i>, <b>th</b> is just <i>t</i>, and <b>h</b> is never said. <b>ill</b> is usually <i>y</i>: <b>fille</b> is <i>feey</i> (but <b>ville</b> is <i>veel</i>). One <b>s</b> between two vowels is <i>z</i>: <b>maison</b>, <i>meh-zohN</i>.</p>\n'
  '{{tiles:ch=sh gn=ny j=zh ge=zh gi=zh ce=s ci=s qu=k th=t ill=y h=silent r=French_r}}\n'
  '<h3>The letter names</h3>\n'
  '<p>The letters have French names. You need them to spell your name or an email address, and a few trip English speakers up: <b>E</b> is <i>uh</i>, <b>I</b> is <i>ee</i>, <b>G</b> is <i>zhay</i> and <b>J</b> is <i>zhee</i> (the reverse of English), <b>H</b> is <i>ahsh</i>, <b>U</b> is <i>ew</i>, <b>W</b> is <i>doo-bluh-vay</i> (double v) and <b>Y</b> is <i>ee-grehk</i> (Greek i). Tap a letter to hear its name.</p>\n'
  '{{tiles:' + ' '.join(c[0] + '=' + c[1].replace(' ', '_') for c in LN) + '}}\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now put the pieces together. Read a word left to right in chunks, not letter by letter: find the letter groups, say each as one sound, and drop the silent letters at the end. <b>b + eau + c + ou + p</b> is <b>beaucoup</b>, <i>boh-koo</i>: eau is <i>oh</i>, ou is <i>oo</i>, and the final p is silent. Between words, watch for liaison: <b>les enfants</b> is <i>lay zahN-fahN</i>. Every card below is a common word. Read it aloud before you flip it.</p>\n'
  '<h3>le, la, les</h3>'),
])

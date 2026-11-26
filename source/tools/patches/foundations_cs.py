#!/usr/bin/env python3
# Character foundations, course en-cs (FND-1). Edits tools/target/cs/lessons-1.js; then
#   node tools/target/gen.js cs && node tools/target/validate.js cs && node tools/lessonread/apply.js en-cs
# Czech uses the Latin alphabet, so the foundation is ONE lesson, `alphabet` (lesson 1). It teaches what differs from English, not the ABC.
# Pieces = (a) the letters that sound much as in English, plus j (= y) and the vowels with their long partners: tiles only, in a new
# opening section "One letter, one sound"; (b) the háček letters č š ž ř ě ď ť ň; (c) the letter c and the letter group ch.
# All 42 letters of the Czech alphabet (ch counted as a letter) are on tiles in this lesson. Lessons 2 (vowels) and 3 (r-ch) keep their
# own decks and stay as they are.
# Putting together = reading a whole word letter by letter (every letter said, soft dě/di vs hard dy) with the beat on the first syllable:
# a new section "Read whole words" with an in-lesson deck of 18 real, common words; each note breaks the word into its letters.
# "Háček letters" is cut across the sections that teach its cards. No card of an existing deck is changed.
# Readings are those of tools/target/cs/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'cs', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Háček letters"

WW = [["voda","VOH-dah","water","v, o, d, a: one sound each. The beat is on vo."],
      ["mléko","MLEHH-koh","milk","m and l together, both said. é is a long eh."],
      ["ryba","RIH-bah","a fish","y is a short ih, the same sound as i."],
      ["ulice","OO-lih-tseh","a street","c is ts. Three syllables: u, li, ce."],
      ["kočka","KOHCH-kah","a cat","č is the ch of church, said right before the second k."],
      ["škola","SHKOH-lah","a school","š is sh, said together with the k."],
      ["žlutý","ZHLOO-tee","yellow","ž is zh, ý is a long ee. The beat stays on žlu."],
      ["dveře","DVEH-rzheh","a door; doors","d and v together, both said. ř is rzh. The word is always plural, even for one door."],
      ["ucho","OO-khoh","an ear","ch is kh, as in loch."],
      ["děti","DYEH-tyih","children","dě is a soft d, ti is a soft t."],
      ["tady","TAH-dih","here","dy stays hard: a plain d, then a short ih."],
      ["nic","nyihts","nothing","ni is a soft n. c is ts."],
      ["nůž","noohsh","a knife","ů is a long ooh. ž at the end goes quiet and sounds like sh."],
      ["úterý","OOH-teh-ree","Tuesday","ú starts the word, ý is a long ee. The beat stays on the first syllable."],
      ["vlak","vlahk","a train","v and l together, then a. Not vlk, a wolf."],
      ["jídlo","YEE-dloh","food","j is the y of yes, í is a long ee."],
      ["kniha","KNYIH-hah","a book","The k is said. ni is a soft n, h is h."],
      ["čtyři","CHTIH-rzhih","four","č then t, y is a short ih, ř is rzh."]]

SEC = [None, [{"deck": D, "n": [0, 9]}, {"deck": D, "n": [12, 17]}], {"deck": D, "n": [9, 12]}, None,
       {"name": "Whole words", "cards": WW}, None]

edit('lessons-1.js', [
 ('    deck: "Háček letters",\n    body: `',
  '    deck: "Háček letters",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('there is a line in English letters that tells you how to say it.</p>\n<h3>The háček',
  'there is a line in English letters that tells you how to say it.</p>\n'
  '<h3>One letter, one sound</h3>\n'
  '<p>Czech has 42 letters. Most are the ones you know. These sound much as in English, with two small differences: <b>g</b> is always hard, as in <i>go</i>, and <b>r</b> is rolled with the tip of the tongue. <b>q</b>, <b>w</b> and <b>x</b> turn up only in borrowed words and names: <b>w</b> is said as v, <b>q</b> as kv and <b>x</b> as ks. Watch <b>j</b>: it is always the y of <i>yes</i>. Tap a letter to hear it.</p>\n'
  '{{tiles:b=b d=d f=f g=g h=h k=k l=l m=m n=n p=p r=r s=s t=t v=v z=z j=y q=kv w=v x=ks}}\n'
  '<p>The vowels are <b>a e i o u</b>, plus <b>y</b>, which sounds just like <b>i</b>. Each has a long partner with a mark, and the mark means: hold it longer. <b>ů</b> is a second spelling of long <b>ú</b>: <b>ú</b> mostly starts a word, as in <b>úterý</b>, and <b>ů</b> comes inside or at the end, as in <b>nůž</b>. Lesson 2 is all about them.</p>\n'
  '{{tiles:a=ah e=eh i=ih o=oh u=oo á=aah é=ehh í=ee ó=ohh ú=ooh _ _ y=ih _ ů=ooh _ _ ý=ee}}\n'
  '<h3>The háček'),
 ('{{ex:děkuji|DYEH-koo-yih|thank you}}\n<h3>c and ch',
  '{{ex:děkuji|DYEH-koo-yih|thank you}}\n<p>Tap a letter to hear it.</p>\n{{tiles:č=ch š=sh ž=zh ř=rzh ě=yeh ď=dy ť=ty ň=ny}}\n<h3>c and ch'),
 ('The English <i>ch</i> sound is written <b>č</b>.</p>\n',
  'The English <i>ch</i> sound is written <b>č</b>.</p>\n{{tiles:c=ts ch=kh}}\n'),
 ('with no vowel in it.</li></ul>\n<h3>ten, ta, to</h3>',
  'with no vowel in it.</li></ul>\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now put the pieces together. Read a Czech word letter by letter, left to right. Each letter gives its own sound (<b>ch</b> counts as one letter), and every letter is said, even in a cluster like <b>dv</b> or <b>ml</b>. Watch the soft pairs: <b>dě tě ně</b> and <b>di ti ni</b> (also <b>dí tí ní</b>) are soft, but <b>dy ty ny</b> stay hard. Many borrowed words keep a hard <b>di ti ni</b>, as in <b>politika</b>. At the very end of a word, a buzzing sound swaps for its quiet partner: <b>ž</b> sounds like sh and <b>d</b> like t. So <b>pláž</b> ends in sh and <b>chléb</b> ends in p. Lesson 3 explains. Then put the beat on the first syllable. So <b>kniha</b> (a book) is KNYIH-hah, with the k said, and <b>děti</b> (children) is DYEH-tyih. Each card\'s note points out the letters to watch. Say the word aloud before you flip it.</p>\n'
  '{{ex:kniha|KNYIH-hah|a book}}\n'
  '<h3>ten, ta, to</h3>'),
])

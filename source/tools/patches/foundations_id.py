#!/usr/bin/env python3
# Character foundations, course en-id (FND-1). Edits tools/target/id/lessons-1.js; then
#   node tools/target/gen.js id && node tools/target/validate.js id && node tools/lessonread/apply.js en-id
# Indonesian uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English, not the ABC.
# Pieces = (a) the five vowel letters, one full sound each, with the two sounds of e; (b) the letters and letter groups whose sound
# differs from English (c, j, g, r, sy, kh, ng, ngg, ny); (c) how words end (final k as a catch, final h breathed, ai and au).
# The letters that sound much as in English (and the loan letters q, v, x, z) get one tile block in a new opening section "The letters",
# so all 26 letters are on tiles. No letter gets a card of its own.
# Putting together = reading a whole word aloud piece by piece: a new section "Read whole words" (before the closing advice) with
# an in-lesson deck of 18 real, common words; each note breaks the word into its pieces.
# "Sounds and spelling" is cut across the sections that teach its cards; its one grammar card (kopi panas) joins the last block.
# No card of an existing deck is changed. Readings are those of tools/target/id/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'id', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

WW = [["makan","MAH-kahn","to eat","m + a + k + a + n: every letter as in English, every a a full ah."],
      ["minum","MEE-noom","to drink","i is ee, u is oo; m and n as in English."],
      ["kecil","kuh-CHEEL","small","The e here is the weak e, uh; c is ch."],
      ["kucing","KOO-cheeng","cat","c is ch; the final ng is the ng of singer."],
      ["anjing","AHN-jeeng","dog","j as in jam; the final ng is the ng of singer."],
      ["pagi","PAH-ghee","morning","g is always hard; the line writes gh before ee."],
      ["nyamuk","NYAH-mooq","mosquito","ny at the start, as in canyon; the final k is a catch, q."],
      ["dengan","duh-NGAHN","with","The weak e, uh; ng between vowels is the ng of singer, with no g after it."],
      ["tinggi","TEENG-ghee","tall; high","ngg is ng + g, as in finger; gh before ee."],
      ["syukur","SHOO-koor","gratitude; thank God, thank goodness","sy is sh; r is rolled or tapped."],
      ["akhir","AH-kheer","end","kh is a breathy k; r is rolled or tapped."],
      ["merah","MEH-rahh","red","The strong e, eh; the final h is breathed out."],
      ["sekolah","suh-KOH-lahh","school","The weak e, uh, then oh; the final h is breathed out."],
      ["kalau","KAH-low","if","au at the end of a word is one sound, ow."],
      ["laut","LAH-oot","sea","au before a final consonant splits in two: la + ut."],
      ["main","MAH-een","to play","ai before a final consonant splits in two: ma + in."],
      ["anak","AH-nahq","child","The final k is a catch in the throat, q."],
      ["teh","tehh","tea","The strong e, eh; the final h is breathed out. One syllable, so no capitals."]]

SEC = [None,
       [{"deck": D, "n": [1, 3]}, {"deck": D, "n": [12, 13]}, {"deck": D, "n": [17, 18]}],
       None,
       [{"deck": D, "n": [0, 1]}, {"deck": D, "n": [4, 5]}, {"deck": D, "n": [6, 11]}],
       [{"deck": D, "n": [3, 4]}, {"deck": D, "n": [11, 12]}, {"deck": D, "n": [13, 17]}],
       None,
       [{"deck": D, "n": [5, 6]}, {"name": "Read whole words", "cards": WW}]]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('a pronunciation line in English letters.</p>\n<h3>Six short, pure vowels</h3>',
  'a pronunciation line in English letters.</p>\n<h3>The letters</h3>\n<p>All 26 letters are used. These sound much as in English, except that a final <b>k</b> or <b>h</b> works differently (see "How words end"). <b>q</b>, <b>v</b>, <b>x</b> and <b>z</b> turn up only in borrowed words, and <b>v</b> is usually said as f. The sections below cover the vowels, the letters that differ from English, and how words end. Tap a letter to hear it.</p>\n{{tiles:b=b d=d f=f h=h k=k l=l m=m n=n p=p s=s t=t w=w y=y z=z v=f q=k x=ks}}\n<h3>Six short, pure vowels</h3>'),
 ('{{ex:sore|SOH-reh|late afternoon}}\n',
  '{{ex:sore|SOH-reh|late afternoon}}\n<p>Tap a vowel to hear it.</p>\n{{tiles:a=ah i=ee u=oo e=uh_or_eh o=oh}}\n'),
 ('have no puff of air after them.</p>\n',
  'have no puff of air after them.</p>\n<p>Tap a letter or letter group to hear it.</p>\n{{tiles:c=ch j=j g=g r=r _ sy=sh kh=kh ng=ng ngg=ng_g ny=ny}}\n'),
 ('{{ex:baik|BAH-eeq|good; fine}}\n',
  '{{ex:baik|BAH-eeq|good; fine}}\n<p>Tap an ending to hear it.</p>\n{{tiles:-k=q -h=hh ai=ai au=ow}}\n'),
 ('<p>Listen first, then read.',
  '<h3>Read whole words</h3>\n<p>Now put it together. Read a word one piece at a time, left to right: each vowel short and full, each letter or letter group with its Indonesian sound, and the ending as you learned it. So <b>kucing</b> is k + u + c + i + ng: <i>KOO-cheeng</i>. Then give the syllable in capitals a slight lift. Each card\'s note breaks the word into its pieces. Say the word aloud before you flip it.</p>\n<p>Listen first, then read.'),
])

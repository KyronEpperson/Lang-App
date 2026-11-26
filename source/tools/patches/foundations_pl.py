#!/usr/bin/env python3
# Character foundations, course en-pl (FND-1). Edits tools/target/pl/lessons-1.js; then
#   node tools/target/gen.js pl && node tools/target/validate.js pl && node tools/lessonread/apply.js en-pl
# Polish uses the Latin alphabet, so the foundation is ONE lesson, `alphabet`, and it teaches what differs from English, not the ABC.
# Pieces = (a) the vowels, one held sound each, with ó and y; (b) ł and w; (c) the nasal tail on ą and ę; (d) the hard and soft
# pairs sz/ś, cz/ć, ż/ź; (e) the other letter pairs and letters that fool English eyes: rz, ch and h, dż, dz, dź, ń, c, j.
# The letters that sound much as in English get one tile block in the opening section, so all 32 letters are on tiles.
# Putting together = reading a whole word from its spelling, letter pair by letter pair, with softening by i, final devoicing
# and next-to-last stress: a new section "Read whole words" with a deck of 18 real, common words; each note breaks the word up.
# "Sounds and spelling" (shared with `spelling` and `stress`, which stay as they are) is cut across the sections that teach its
# cards. c, j, h, dz and dź have no card in the deck, so a small in-lesson deck of letter cards carries them.
# No card of an existing deck is changed. Every word reading is the output of tools/target/pl/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'pl', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

MS = [["c", "ts", "the letter c", "On its own, always ts, as in cats: noc, nohts, night. In cz, ch and ci it is part of another sound."],
      ["j", "y", "the letter j", "Always y, as in yes: jutro, YOO-troh, tomorrow."],
      ["h", "kh", "the letter h", "The same kh as ch, the loch sound: herbata, khehr-BAH-tah, tea."],
      ["dz", "dz", "the letter pair dz", "A voiced ts, as in adds: bardzo, BAHR-dzoh, very."],
      ["dź", "j'", "the letter pair dź", "The soft j, written j'. Before a vowel it is spelled dzi: dzień, jyehny, day."]]
WW = [["dom", "dohm", "a house; home", "d, o, m as in English, with o held flat. One syllable, so no capitals."],
      ["woda", "VOH-dah", "water", "w is v. Stress on the next-to-last syllable."],
      ["głowa", "GWOH-vah", "a head", "ł is w, and w is v. The g is hard, as in go."],
      ["ryba", "RIH-bah", "a fish", "r is a tap. y is ih, a short i."],
      ["noc", "nohts", "night", "c is always ts. One syllable."],
      ["ulica", "oo-LEE-tsah", "a street", "u is oo, i is ee, c is ts. Three syllables, stress on the next to last."],
      ["jutro", "YOO-troh", "tomorrow", "j is y, u is oo. The cluster tr takes no extra vowel."],
      ["jajko", "YAHY-koh", "an egg", "j is y, both times: jaj is YAHY."],
      ["szkoła", "SHKOH-wah", "a school", "sz is hard sh, ł is w. sz and k stay together, with no vowel between."],
      ["czas", "chahs", "time", "cz is hard ch, as in chop."],
      ["ciocia", "CHYOH-chyah", "an aunt", "ci before a vowel is chy, twice. The i only softens the c."],
      ["gość", "gohsh'ch'", "a guest", "ś and ć are soft, with no vowel after them: sh'ch'."],
      ["róża", "ROO-zhah", "a rose", "ó is oo, ż is zh."],
      ["książka", "KSHYOHN-shkah", "a book", "si before a vowel is shy. ą inside the word is the nasal tail, ohN. ż before k turns to sh."],
      ["chłopiec", "KHWOH-pyehts", "a boy", "ch is kh, ł is w. pie is pyeh: the i only softens the p. c is ts."],
      ["dziecko", "JYEHTS-koh", "a child", "dzi before a vowel is jy. c is ts."],
      ["słońce", "SWOHNY-tseh", "the sun", "ł is w, ń is ny, c is ts."],
      ["miasto", "MYAH-stoh", "a city; a town", "mia is myah: the i only softens the m."]]

SEC = [None,
       [{"deck": D, "n": [5, 7]}, {"deck": D, "n": [11, 12]}],
       {"deck": D, "n": [7, 10]},
       [{"deck": D, "n": [0, 5]}, {"deck": D, "n": [15, 16]}],
       [{"deck": D, "n": [10, 11]}, {"deck": D, "n": [12, 15]}, {"name": "More spellings", "cards": MS}],
       [{"deck": D, "n": [16, 18]}, {"name": "Whole words", "cards": WW}],
       None]

edit('lessons-1.js', [
 ('    id: "alphabet",\n    title: "The Polish letters",\n    blurb: "Read the nine extra letters and the pronunciation line: stress, the nasal N, and ł versus l.",\n    deck: "Sounds and spelling",\n    body: `',
  '    id: "alphabet",\n    title: "The Polish letters",\n    blurb: "Read the nine extra letters and the pronunciation line: stress, the nasal N, and ł versus l.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('It is a nasal tail on the vowel.</p>\n<h3>Vowels that stay put</h3>',
  'It is a nasal tail on the vowel.</p>\n<p>Most letters sound much as in English. <b>g</b> is hard, as in "go", <b>s</b> on its own is the s of "sun", and <b>r</b> is a tap. <b>q</b>, <b>v</b> and <b>x</b> turn up only in foreign words. The rest of this lesson is about the letters that do not work as in English. Tap a letter to hear it.</p>\n{{tiles:b=b d=d f=f g=g k=k l=l m=m n=n p=p r=r s=s t=t z=z}}\n<h3>Vowels that stay put</h3>'),
 ('<td class="k">y</td><td>ih</td><td>a short i, not ee</td></tr></table></div>\n',
  '<td class="k">y</td><td>ih</td><td>a short i, not ee</td></tr></table></div>\n<p>Tap a vowel to hear it.</p>\n{{tiles:a=ah e=eh i=ee o=oh u=oo ó=oo y=ih}}\n'),
 ('The line cannot show the tap, so it writes r.</p>\n',
  'The line cannot show the tap, so it writes r.</p>\n{{tiles:ł=w w=v}}\n'),
 ('A cluster takes no extra vowel, and <b>ó</b> is <i>oo</i>.</p>\n',
  'A cluster takes no extra vowel, and <b>ó</b> is <i>oo</i>.</p>\n<p><b>żółw</b>, a turtle, has all three: <b>ó</b> is <i>oo</i>, <b>ł</b> is <i>w</i>, and the final <b>w</b> is <i>f</i>. Its first letter, <b>ż</b>, is the <i>zh</i> of "measure". More on it below.</p>\n'),
 ('''<h3>The nasal tail and the soft mark</h3>
<p>Final <b>ą</b> is a nasal o, <i>ohN</i>. Final <b>ę</b> is an ordinary <i>eh</i>. It is not nasal. Hard <b>sz</b> is <i>sh</i>. <b>ś</b>, and <b>si</b> before a vowel, are <i>shy</i>. At the end of a word the soft sound is <i>sh'</i>. The apostrophe adds no vowel. It only marks softness. <b>cz</b> and <b>ć</b>, and <b>ż</b> and <b>ź</b>, follow that same three-way split: hard, soft with a y, soft with an apostrophe. <b>ch</b> and <b>h</b> are both <i>kh</i>, the sound in Scottish "loch". The next lesson drills the pairs.</p>
{{ex:są|sohN|they are}}
{{ex:proszę|PROH-sheh|Please. You're welcome.}}
{{ex:prosię|PROH-shyeh|a piglet}}
{{ex:cześć|chehsh'ch'|Hi. Bye. To a friend.}}
''',
  '''<h3>The nasal tail</h3>
<p>Final <b>ą</b> is a nasal o, <i>ohN</i>. Final <b>ę</b> is an ordinary <i>eh</i>. It is not nasal. Inside a word both keep the nasal tail. Before <b>p</b> or <b>b</b> the tail is an <i>m</i>, before <b>t</b> or <b>d</b> it is an <i>n</i>, and before <b>k</b> or <b>g</b> it is an <i>ng</i>: <b>ręka</b>, a hand, is <i>REHNG-kah</i>.</p>
{{tiles:ą=ohN ę=ehN}}
{{ex:są|sohN|they are}}
<h3>Hard and soft</h3>
<p>Hard <b>sz</b> is <i>sh</i>. <b>ś</b>, and <b>si</b> before a vowel, are <i>shy</i>. At the end of a word the soft sound is <i>sh'</i>. The apostrophe adds no vowel. It only marks softness. <b>cz</b> and <b>ć</b>, and <b>ż</b> and <b>ź</b>, follow that same three-way split: hard, soft with a y, soft with an apostrophe. The next lesson drills the pairs.</p>
{{tiles:sz=sh ś=sh' si=shy cz=ch ć=ch' ci=chy ż=zh ź=zh' zi=zhy}}
{{ex:proszę|PROH-sheh|Please. You're welcome.}}
{{ex:prosię|PROH-shyeh|a piglet}}
{{ex:cześć|chehsh'ch'|Hi. Bye. To a friend.}}
<h3>rz, ch, the dz family, ń, c and j</h3>
<p><b>rz</b> is the same sound as <b>ż</b>, <i>zh</i>. Do not read it as r plus z. After <b>p</b>, <b>t</b>, <b>k</b> or <b>ch</b>, and at the end of a word, it turns to <i>sh</i>: <b>trzy</b>, three, is <i>tshih</i>. <b>ch</b> and <b>h</b> are both <i>kh</i>, the sound in Scottish "loch". <b>dż</b> is the j of "jam", and <b>dz</b> is a voiced ts, as in "adds". Soft <b>dź</b>, spelled <b>dzi</b> before a vowel, is <i>jy</i> before a vowel and <i>j'</i> otherwise. <b>ń</b>, and <b>ni</b> before a vowel, are <i>ny</i>, as in "canyon". Two plain-looking letters change too: <b>c</b> on its own is always <i>ts</i>, as in "cats", and <b>j</b> is always <i>y</i>, as in "yes".</p>
{{tiles:rz=zh ch=kh h=kh dż=j dz=dz dź=j' ń=ny ni=ny c=ts j=y}}
{{ex:rzeka|ZHEH-kah|a river}}
<h3>Read whole words</h3>
<p>Now put the pieces together. Read a word one letter or letter pair at a time, and give each its Polish sound: every vowel one steady sound, <b>ł</b> a w, <b>w</b> a v, <b>c</b> ts, <b>j</b> y. An <b>i</b> before another vowel only softens the consonant in front of it: <b>miasto</b> is <i>MYAH-stoh</i>. A voiced consonant at the end of a word, or before a voiceless one, turns voiceless, the way the final <b>w</b> of Kraków is f. A <b>w</b> right after a voiceless consonant turns to f too: <b>twój</b> is <i>tfooy</i>. Then put the stress on the next-to-last syllable. <b>muzyka</b> is the exception you meet here: its careful stress is <i>MOO-zih-kah</i>. Say each word aloud before you flip the card.</p>
{{ex:szkoła|SHKOH-wah|a school}}
'''),
])

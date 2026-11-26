#!/usr/bin/env python3
# Character foundations, course en-it (FND-1). Edits tools/target/it/lessons-1.js; then
#   node tools/target/gen.js it && node tools/target/validate.js it && node tools/lessonread/apply.js en-it
# Italian uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English, not the ABC.
# Standard set: the 21 letters a b c d e f g h i l m n o p q r s t u v z, plus the accented vowels à è é ì ò ù.
# (j k w x y appear only in borrowed words and are named in prose.)
# Pieces = (a) the five vowels, and i/u gliding into a following vowel; (b) c and g, soft or hard, with ch gh ci gi;
# (c) the other letter groups (gn, gli, sc, sch, z/zz, silent h, s before a voiced consonant); (d) double consonants and r/rr;
# (e) stress and the accent marks. Letters that sound much as in English get one tile block in the opening text.
# Putting together = reading a whole word from its spelling with the stress in the right place: a new section "Read whole words"
# with an in-lesson deck of 18 real, common words; each note breaks the word into its spellings and names the stress.
# "Sounds and spelling" is cut across the sections that teach its cards; il cuore (u gliding, taught with the vowels) joins the
# c/g block, since the vowel section alone would have one card. The stress section adds a small in-lesson deck of accent-mark words.
# No card of an existing deck is changed. Readings follow the course's pronunciation line. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'it', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

AM = [["la città","lah cheet-TAH","the city","The accent mark puts the stress on the final a."],
      ["perché","pehr-KEH","why; because","ch is a hard k. The mark puts the stress on the final e."],
      ["più","pyoo","more","i before u glides as y: one syllable. The mark sits on the final vowel."],
      ["però","peh-ROH","but","The mark puts the stress on the final o: peh-ROH, not PEH-roh."],
      ["il tè","eel teh","tea","A one-syllable word: the mark is not about stress. It tells tè (tea) apart from te (you)."]]
WW = [["la casa","lah KAH-sah","the house","c before a is hard, as in cat. Stress on the next-to-last syllable."],
      ["la cena","lah CHEH-nah","dinner","c before e is ch, as in church. Stress on the next-to-last syllable."],
      ["gli amici","lyee ah-MEE-chee","the friends","c before i is ch. Stress on the next-to-last syllable."],
      ["il gatto","eel GAHT-toh","the cat","g before a is hard; hold the double t."],
      ["oggi","OHD-jee","today","gg before i is a held j sound."],
      ["la famiglia","lah fah-MEE-lyah","the family","gli before a vowel is the lli of million."],
      ["il bagno","eel BAH-nyoh","the bathroom","gn is ny, as in canyon."],
      ["il prosciutto","eel proh-SHOOT-toh","cured ham","sci before u is sh; the i is not said. Hold the double t."],
      ["la scuola","lah SKWOH-lah","the school","sc before u is a hard sk; uo is woh, in one syllable."],
      ["la piazza","lah PYAHT-tsah","the square","i before a glides as y; zz is a held ts."],
      ["la stazione","lah stah-TSYOH-neh","the station","z is ts; i before o glides as y. Stress on the next-to-last syllable."],
      ["buono","BWOH-noh","good","uo is woh, in one syllable."],
      ["ecco","EHK-koh","here it is; there you go","cc before o is a held hard k."],
      ["gli spaghetti","lyee spah-GHEHT-tee","spaghetti","gh keeps the g hard before e; hold the double t."],
      ["dieci","DYEH-chee","ten","i before e glides as y; c before i is ch, and that i is said."],
      ["la mattina","lah maht-TEE-nah","the morning","Hold the double t. Stress on the next-to-last syllable."],
      ["il caffè","eel kahf-FEH","coffee","Hold the double f. The accent mark puts the stress on the final e."],
      ["il medico","eel MEH-dee-koh","the doctor","c before o is hard. The stress falls three syllables from the end, with no mark to warn you."]]

SEC = [None,
       [{"deck": D, "n": [0, 3]}, {"deck": D, "n": [5, 7]}, {"deck": D, "n": [10, 11]}, {"deck": D, "n": [15, 16]}],
       [{"deck": D, "n": [3, 4]}, {"deck": D, "n": [7, 10]}, {"deck": D, "n": [11, 13]}, {"deck": D, "n": [17, 18]}],
       [{"deck": D, "n": [4, 5]}, {"deck": D, "n": [13, 15]}],
       [{"deck": D, "n": [16, 17]}, {"name": "Accent marks", "cards": AM}],
       {"name": "Whole words", "cards": WW},
       None]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('The syllable in CAPITALS is the stressed one.</p>\n<h3>Five short, pure vowels</h3>',
  'The syllable in CAPITALS is the stressed one.</p>\n<p>The alphabet has 21 letters; <b>j, k, w, x, y</b> turn up mainly in words and names from other languages. These letters sound much as in English: <b>c</b> and <b>g</b> as in <i>cat</i> and <i>go</i>, until an <b>e</b> or <b>i</b> follows, and <b>q</b> always comes with <b>u</b>, as in <i>quick</i>. The rest of this lesson is about the letters and groups that work differently, starting with the vowels. Tap a letter to hear it.</p>\n{{tiles:b=b c=k d=d f=f g=g l=l m=m n=n p=p q=kw s=s t=t v=v}}\n<h3>Five short, pure vowels</h3>'),
 ('{{ex:il vino|eel VEE-noh|the wine}}\n',
  '{{ex:il vino|eel VEE-noh|the wine}}\n<p>When an unstressed <b>i</b> or <b>u</b> comes right before another vowel, it usually glides into it as a y or a w, in the same syllable: <b>la chiave</b> is lah KYAH-veh, <b>il cuore</b> is eel KWOH-reh. A stressed <b>i</b> or <b>u</b> keeps its own syllable, as in <b>mio</b>, MEE-oh. After <b>c</b>, <b>g</b> or <b>sc</b> the <b>i</b> is often not said at all, as the next sections show. Tap a vowel to hear it.</p>\n{{tiles:a=ah e=eh i=ee o=oh u=oo}}\n'),
 ('{{ex:la chiave|lah KYAH-veh|the key}}\n',
  '{{ex:la chiave|lah KYAH-veh|the key}}\n<p>Tap a spelling to hear it.</p>\n{{tiles:ca=kah co=koh cu=koo ce=cheh ci=chee che=keh chi=kee cia=chah cio=choh ciu=choo ga=gah go=goh gu=goo ge=jeh gi=jee ghe=gheh ghi=ghee gia=jah gio=joh giu=joo}}\n'),
 ('{{ex:la bruschetta|lah broos-KEHT-tah|bruschetta (toasted bread)}}\n',
  '{{ex:la bruschetta|lah broos-KEHT-tah|bruschetta (toasted bread)}}\n<p>One more: <b>s</b> before <b>b, d, g, l, m, n, r</b> or <b>v</b> sounds like z, so <b>la sveglia</b> is lah ZVEH-lyah. Tap a spelling to hear it.</p>\n{{tiles:gn=ny gli=ly sce=sheh sci=shee sch=sk z=ts zz=tts h=silent sv=zv}}\n'),
 ('{{ex:la notte|lah NOHT-teh|the night}}\n',
  '{{ex:la notte|lah NOHT-teh|the night}}\n<p>You hear it clearly with <b>r</b>: one <b>r</b> is a quick tap of the tongue, <b>rr</b> a longer roll. Tap to hear the difference.</p>\n{{tiles:ll=l-l nn=n-n tt=t-t r=r rr=rr}}\n'),
 ('{{ex:il telefono|eel teh-LEH-foh-noh|the phone}}\n<h3>il and la, and their plurals</h3>',
  '{{ex:il telefono|eel teh-LEH-foh-noh|the phone}}\n<p>The accent marks are <b>à, è, é, ì, ò, ù</b>. In a longer word, a mark shows that the final vowel is stressed. <b>è</b> is a slightly more open eh than <b>é</b> (<b>il caffè</b>, but <b>perché</b>); the pronunciation line writes both as eh. On short words a mark often tells two words apart: <b>è</b> means <i>is</i>, <b>e</b> means <i>and</i>; <b>tè</b> is tea, <b>te</b> is you. Tap a mark to hear it.</p>\n{{tiles:à=ah è=eh é=eh ì=ee ò=oh ù=oo}}\n'
  '<h3>Read whole words</h3>\n<p>Now put it together. Read a word in two steps. First give each letter or group its Italian sound: every vowel short and pure, <b>c</b> and <b>g</b> soft only before <b>e</b> or <b>i</b>, double letters held. Then place the stress: on the final vowel if it has a mark, otherwise usually on the next-to-last syllable. So <b>il prosciutto</b> is eel proh-SHOOT-toh, and <b>il caffè</b> is eel kahf-FEH. Many words, like <b>il medico</b>, put the stress earlier, and the card shows it. Each card\'s note names the pieces. Say the word aloud before you flip it.</p>\n{{ex:il prosciutto|eel proh-SHOOT-toh|cured ham}}\n<h3>il and la, and their plurals</h3>'),
 ('<p>Finally, a single <b>r</b> is a quick tap of the tongue and <b>rr</b> is rolled, and <b>p, t, k</b> have no puff of air.',
  '<p>Finally, <b>p, t, k</b> have no puff of air.'),
])

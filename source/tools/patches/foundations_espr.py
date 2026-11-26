#!/usr/bin/env python3
# Character foundations, course en-espr (FND-1). Edits tools/target/espr/lessons-1.js; then
#   node tools/target/gen.js espr && node tools/target/validate.js espr && node tools/lessonread/apply.js en-espr
# Puerto Rican Spanish uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English,
# not the ABC. `pr-sounds` (lesson 2) trains the ear for island speech and is left as it is.
# Pieces = (a) the five vowels, one fixed sound each; (b) the letters and spellings whose sound differs from English
# (h, j, g and c before e/i, z, v/b, ll, y, ñ, qu, gue/gui, gü, x, ch; r and rr in their own section); (c) the accent marks and stress
# (á é í ó ú, ü, ¿ ¡). The other ten letters, which sound much as in English, get one tile block in the opening section, so all 27 letters are on tiles.
# Putting together = reading a whole word aloud from its spelling with the stress in the right place: a new section "Read whole words"
# with a deck of 18 real, common words (some from the island: la guagua, el coquí, chévere); each note names the spelling and the stress rule.
# "Sounds and spelling" is cut across the sections that teach its cards. The spellings it does not show in a word (ch, x, gü, b, gue)
# get a small in-lesson deck of spelling cards. No ABC letter cards. No card of an existing deck is changed.
# Readings are those of tools/target/espr/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'espr', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

SP = [["ch","ch","the spelling ch","Always as in church: mucho, MOO-choh."],
      ["x","ks","the letter x","ks, as in el taxi, ehl TAHK-see. In México and a few other names it is the breathy h: MEH-hee-koh."],
      ["gü","gw","g and u with two dots","The two dots mean the u is said, as a w: Mayagüez, mah-yah-GWEHS."],
      ["b","b","the letter b","The same sound as v: bien, byehn, and el vaso, ehl BAH-soh."],
      ["gue","gheh","the spelling gue","The u is silent and keeps the g hard: el juguete, ehl hoo-GHEH-teh."]]
WW = [["el hotel","ehl oh-TEHL","the hotel","h is silent. Ends in l, so the stress falls on the last syllable."],
      ["gracias","GRAH-syahs","thank you","c before i sounds s; ia is one syllable. Ends in s: stress on the next-to-last syllable."],
      ["la ciudad","lah syoo-DAHD","the city","c before i sounds s; iu is one syllable. Ends in d: stress on the last syllable."],
      ["feliz","feh-LEES","happy","z sounds s. Ends in z: stress on the last syllable."],
      ["el trabajo","ehl trah-BAH-hoh","work; the job","j is the breathy h. Ends in a vowel: stress on the next-to-last syllable."],
      ["joven","HOH-behn","young","j is the breathy h, v sounds b. Ends in n: stress on the next-to-last syllable."],
      ["la playa","lah PLAH-yah","the beach","y before a vowel is y as in yes. Ends in a vowel: stress on the next-to-last syllable."],
      ["el gimnasio","ehl heem-NAH-syoh","the gym","g before i is the breathy h; io is one syllable. Ends in a vowel: stress on the next-to-last syllable."],
      ["pequeño","peh-KEH-nyoh","small","qu sounds k, ñ sounds ny. Ends in a vowel: stress on the next-to-last syllable."],
      ["rojo","RROH-hoh","red","r at the start of a word is a trill; j is the breathy h. Ends in a vowel: stress on the next-to-last syllable."],
      ["la verdad","lah behr-DAHD","the truth","v sounds b. Ends in d: stress on the last syllable."],
      ["la guagua","lah GWAH-gwah","the bus (in Puerto Rico)","gu before a is said gw. Ends in a vowel: stress on the next-to-last syllable."],
      ["el examen","ehl ehk-SAH-mehn","the exam","x sounds ks. Ends in n: stress on the next-to-last syllable, so no accent mark."],
      ["inglés","een-GLEHS","English","Ends in s, so the rule would stress the first syllable; the accent mark moves it to the last."],
      ["el árbol","ehl AHR-bohl","the tree","Ends in l, so the rule would stress the last syllable; the accent mark keeps it on the first."],
      ["el coquí","ehl koh-KEE","the coquí frog","qu sounds k. Ends in a vowel, so the rule would stress the first syllable; the accent mark moves it to the last."],
      ["la música","lah MOO-see-kah","music","c before a sounds k. The accent mark puts the stress three syllables from the end."],
      ["chévere","CHEH-beh-reh","cool; great","ch as in church, v sounds b, single r a tap. The accent mark puts the stress three syllables from the end."]]

# Sections: vowels (with the opening text), stress, letters, tap and trill, read whole words (new), el and la, crutch.
SEC = [None, None, [{"deck": D, "n": [0, 7]}, {"deck": D, "n": [10, 15]}, {"name": "More spellings", "cards": SP}], {"deck": D, "n": [7, 10]},
       [{"deck": D, "n": [15, 17]}, {"name": "Whole words", "cards": WW}], None, None]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('CAPITALS mark the stressed syllable.</p>\n<h3>Five short, pure vowels</h3>',
  'CAPITALS mark the stressed syllable.</p>\n<p>The alphabet has 27 letters: the 26 you know, plus <b>ñ</b>. These ten sound much as in English (<b>k</b> and <b>w</b> turn up only in borrowed words; <b>d</b>, <b>p</b> and <b>t</b> differ a little, as the last section explains). The rest of this lesson is about the others. Tap a letter to hear it.</p>\n{{tiles:d=d f=f k=k l=l m=m n=n p=p s=s t=t w=w}}\n<h3>Five short, pure vowels</h3>'),
 ('<td class="k">uno</td></tr></table></div>\n',
  '<td class="k">uno</td></tr></table></div>\n<p>Tap a vowel to hear it.</p>\n{{tiles:a=ah e=eh i=ee o=oh u=oo}}\n'),
 ('<b>hospital</b> and <b>animal</b> are stressed at the end.</p>\n',
  '<b>hospital</b> and <b>animal</b> are stressed at the end.</p>\n<p>The mark changes only the stress, never the sound: <b>á</b> is still "ah". A few short words use it to tell two words apart: <b>sí</b> (yes) and <b>si</b> (if), <b>tú</b> (you) and <b>tu</b> (your). Two dots on <b>ü</b>, after g, mean the u is said: <b>Mayagüez</b>. Questions and exclamations also open with a mark, upside down: <b>¿Cómo estás?</b>, <b>¡Hola!</b></p>\n{{tiles:á=AH é=EH í=EE ó=OH ú=OO ü=w ¿=opens_? ¡=opens_!}}\n'),
 ('<td class="k">el vaso</td></tr></table></div>\n',
  '<td class="k">el vaso</td></tr></table></div>\n<p>Two more: <b>x</b> is ks, as in <b>el taxi</b>, except in a few names such as <b>México</b>, where it is the breathy h. <b>ch</b> is always as in <i>church</i>. Tap a letter or spelling to hear it.</p>\n{{tiles:h=silent j=h g=g ge=heh gi=hee c=k ce=seh ci=see z=s qu=k v=b b ll=y y=y ñ=ny gue gui=ghee gü x ch}}\n'),
 ('The line writes the tap r and the trill rr.</p>\n',
  'The line writes the tap r and the trill rr.</p>\n{{tiles:r=r rr=rr}}\n'),
 ('{{ex:el perro|ehl PEH-rroh|the dog}}\n<h3>el and la</h3>',
  '{{ex:el perro|ehl PEH-rroh|the dog}}\n<h3>Read whole words</h3>\n<p>Now put it together. Read a word in two steps. First give each letter or spelling its Spanish sound: every vowel short and clear, <b>h</b> silent, <b>j</b> a breathy h. Before a or o, <b>gu</b> is said gw: <b>la guagua</b>. Then place the stress: an accent mark shows it; with no mark, a word ending in a vowel, <b>n</b> or <b>s</b> is stressed on the next-to-last syllable, and any other ending on the last. So <b>joven</b> is HOH-behn, and <b>feliz</b> is feh-LEES. Each card\'s note names the spelling and the stress rule. Say the word aloud before you flip it.</p>\n{{ex:el trabajo|ehl trah-BAH-hoh|work; the job}}\n<h3>el and la</h3>'),
])

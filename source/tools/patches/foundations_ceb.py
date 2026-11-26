#!/usr/bin/env python3
# Character foundations, course en-ceb (FND-1). Edits tools/target/ceb/lessons-1.js; then
#   node tools/target/gen.js ceb && node tools/target/validate.js ceb && node tools/lessonread/apply.js en-ceb
# Cebuano uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English, not the ABC.
# Standard set: the 26 English letters plus ñ and ng (28). A new opening section "The alphabet" puts the 22 consonant letters on tiles
# (c f j ñ q v x z only in names and borrowed words); the five vowel letters get tiles in the vowel section, ng and mga in their own.
# Pieces = (a) the vowels, three sounds written with five letters; (b) the stressed syllable and the catch, which the spelling never
# shows (the line shows them); (c) ng and mga; (d) the letter pairs and letters that differ from English (ay aw uy oy iw, ts, dy, g, r),
# with a small in-lesson deck of those spellings.
# Putting together = reading a whole word: cut it into syllables (every vowel letter is one), give each letter its sound, then take
# stress and a final catch from the line. A new last section "Read whole words" with an in-lesson deck of 16 real, common words;
# each note takes the word apart. "Sounds and spelling" is cut across the sections that teach its cards; no card of it is changed.
# Readings are those of tools/target/ceb/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ceb', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

LT = [["ay","ai","the letters ay","Like Thai: balay (house), bah-LAI."],
      ["aw","ow","the letters aw","Like how: sabaw (soup), sah-BOW."],
      ["uy","ooy","the letters uy","oo gliding into a quick y, like gooey said in one beat: luy-a (ginger), looy-ah."],
      ["oy","oy","the letters oy","Like boy: baboy (pork; pig), BAH-boy."],
      ["iw","eew","the letters iw","ee gliding into a quick w. The line writes eew."],
      ["ts","ch","the letters ts","Said ch when a vowel follows: otso (eight), oh-choh."],
      ["dy","j","the letters dy","Said j when a vowel follows: dyip (jeepney), jeep."],
      ["g","g","the letter g","Always hard in Cebuano words, as in go. Before ee or eh the line writes gh: ginikanan (parents), ghee-nee-kah-nahn."],
      ["r","r","the letter r","A quick tap, like the tt in American butter: diri (here), dee-REE."]]
WW = [["ulan","oo-LAHN","rain","u-lan: u early in the word, a as in father. Stress on the last syllable."],
      ["pula","poo-LAH","red","pu-la: two full vowels. Stress on the last syllable, not the first as English would put it."],
      ["dako","dah-KOHQ","big","da-ko: o in the last syllable. The q is a final catch: stop the breath, add no k."],
      ["puti","poo-TEEQ","white","pu-ti: p and t with no puff of air. Ends in a catch."],
      ["gamay","gah-MAI","small","ga-may: g hard, as in go; ay as in Thai."],
      ["kapoy","KAH-poy","tired; tiring","ka-poy: k with no puff of air; oy as in boy. Stress on the first syllable."],
      ["uhaw","oo-HOW","thirsty","u-haw: the h is said; aw as in how."],
      ["bugnaw","boog-NOW","cold (things, drinks)","bug-naw: u early in the word, g hard; aw as in how."],
      ["hugaw","HOO-gow","dirty","hu-gaw: u early in the word; aw as in how. Stress on the first syllable."],
      ["tiil","tee-EEL","foot; leg","ti-il: two vowels side by side are two syllables, with a catch between them."],
      ["tam-is","TAHM-ees","sweet (taste)","tam-is: the hyphen marks a catch before the i."],
      ["tan-aw","TAHN-ow","look; watch","tan-aw: a catch after the hyphen, then aw as in how."],
      ["ngipon","NGEE-pohn","tooth; teeth","ngi-pon: ng starts the word, as in singer; o in the last syllable."],
      ["lungsod","loong-SOHD","town","lung-sod: ng as in singer; u early in the word, o in the last syllable."],
      ["dagat","DAH-gaht","sea","da-gat: g hard; both a's as in father. Stress on the first syllable."],
      ["diri","dee-REE","here","di-ri: r is a quick tap. Stress on the last syllable."]]

SEC = [None,
       [{"deck": D, "n": [12, 13]}, {"deck": D, "n": [16, 18]}],
       None,
       [{"deck": D, "n": [0, 3]}, {"deck": D, "n": [11, 12]}, {"deck": D, "n": [14, 15]}],
       [{"deck": D, "n": [3, 5]}, {"deck": D, "n": [10, 11]}],
       [{"deck": D, "n": [15, 16]}, {"name": "Letters to watch", "cards": LT}],
       None,
       [{"deck": D, "n": [5, 10]}, {"deck": D, "n": [13, 14]}, {"name": "Whole words", "cards": WW}]]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('<h3>Three vowel sounds, five letters</h3>',
  '<h3>The alphabet</h3>\n<p>The alphabet has 28 letters: the 26 you know, plus <b>ñ</b> and <b>ng</b>, which count as letters of their own. <b>c, f, j, ñ, q, v, x</b> and <b>z</b> turn up only in names and borrowed words, such as <b>Cebu</b> and <b>Santo Niño</b>. Cebuano mostly spells by sound: the letters tell you how to say a word, all but the stress and most catches. The everyday exceptions are <b>mga</b>, said "manga", and names and borrowed words that keep their own spelling, such as <b>Cebu</b>, said seh-BOO. Tap a letter to see its sound. The vowels and <b>ng</b> come in their own sections below.</p>\n{{tiles:b=b c=k_or_s d=d f=f g=g h=h j=h_or_j k=k l=l m=m n=n ñ=ny p=p q=k r=r s=s t=t v=b w=w x=ks y=y z=s}}\n<h3>Three vowel sounds, five letters</h3>'),
 ('</table></div>\n<p>Native words write <b>u</b> early',
  '</table></div>\n<p>Tap a vowel to see its sound.</p>\n{{tiles:a=ah i=ee e=eh u=oo o=oh}}\n<p>Native words write <b>u</b> early'),
 ('Stop the breath sharply and add no k.</p>\n',
  'Stop the breath sharply and add no k.</p>\n<div class="tbl"><table><tr><th>Where</th><th>Spelling</th><th>Line</th></tr><tr><td>between two vowels</td><td class="k">maayo</td><td>mah-AH-yoh</td></tr><tr><td>after a hyphen</td><td class="k">luy-a</td><td>looy-ah</td></tr><tr><td>at the end of some words</td><td class="k">bata</td><td>BAH-tahq</td></tr></table></div>\n'),
 ('{{ex:mga bata|mah-ngah BAH-tahq|children}}\n<h3>Other letters</h3>',
  '{{ex:mga bata|mah-ngah BAH-tahq|children}}\n{{tiles:ng=ng mga=mah-ngah}}\n<h3>Other letters</h3>'),
 ('{{ex:dyip|jeep|jeepney}}\n<h3>My: akong</h3>',
  '{{ex:dyip|jeep|jeepney}}\n<p>Tap a pair to see its sound.</p>\n{{tiles:ay=ai aw=ow uy=ooy oy=oy iw=eew ts=ch dy=j}}\n<h3>My: akong</h3>'),
 ('A close second: <b>ako balay</b> → <b>akong balay</b>.</div>\n`,',
  'A close second: <b>ako balay</b> → <b>akong balay</b>.</div>\n<h3>Read whole words</h3>\n<p>Now put the pieces together. First cut the word into syllables: every vowel letter is its own syllable (<b>mga</b>, said manga, is the one everyday exception), so <b>tiil</b> is ti-il, with a catch between the two i\'s. Then give each letter its Cebuano sound: full vowels, a hard g, ng as in "singer", ay as in "Thai". Last, take from the line the two things the spelling never shows: the stressed syllable in CAPITALS, and a final catch, q. Each card\'s note takes the word apart. Say it aloud before you flip it.</p>\n{{ex:tiil|tee-EEL|foot; leg}}\n`,'),
])

#!/usr/bin/env python3
# Character foundations, course en-de (FND-1). Edits tools/target/de/lessons-1.js; then
#   node tools/target/gen.js de && node tools/target/validate.js de && node tools/lessonread/apply.js en-de
# German uses the Latin alphabet, so the foundation is one lesson, `sounds`, and it teaches only what differs from English.
# Pieces = (a) the extra letters ä ö ü ß, (b) the letters with another sound (w v z j s, sp/st at the start, final b d g),
# (c) the letter groups (ei ie eu äu au, the two ch sounds and sch, the weak endings, long vowels shown by h or a doubled vowel,
# short vowels before a doubled consonant). Each group gets flip tiles; a compact block of tiles shows the whole alphabet with the
# German letter names. The existing word deck "Sounds and spelling" is cut across the sections it illustrates; the spellings it
# has no word for (ie, äu, long vowels) get small in-lesson spelling decks.
# Putting together = reading a whole word aloud from its spelling, compounds part by part: a deck of 17 real words inside the lesson.
# No card of an existing deck is changed. Readings are those of tools/target/de/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'de', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

VP = [["ei", "ai", "ei: sounds like eye", "der Wein (dayr vain), wine"],
      ["ie", "ee", "ie: sounds like ee in see", "Wien (veen), Vienna. Wein, with ei, is wine."],
      ["eu", "oy", "eu: sounds like oy in boy", "neu (noy), new"],
      ["äu", "oy", "äu: the same oy as eu", "die Häuser (dee HOY-zuh), houses"],
      ["au", "ow", "au: sounds like ow in how", "das Haus (dahs hows), house"]]
LV = [["ah", "ah", "long a: the h is silent", "die Bahn (dee bahn), the railway"],
      ["eh", "ay", "long e: the h is silent", "sehr (zayr), very"],
      ["ih", "ee", "long i: the h is silent", "ihn (een), him"],
      ["oh", "oh", "long o: the h is silent", "der Sohn (dayr zohn), son"],
      ["uh", "oo", "long u: the h is silent", "die Uhr (dee oor), clock"],
      ["aa", "ah", "long a, written double", "das Haar (dahs hahr), hair"],
      ["ee", "ay", "long e, written double", "der Tee (dayr tay), tea"],
      ["oo", "oh", "long o, written double", "das Boot (dahs boht), boat"]]
W = [["der Spiegel", "dayr SHPEE-guhl", "the mirror", "sp at the start is shp; ie is ee; the ending -el is uhl. Stress on the first syllable."],
     ["der Strand", "dayr shtrahnt", "the beach", "st at the start is sht; the final d sounds t. One syllable."],
     ["der Zoo", "dayr tsoh", "the zoo", "z is ts; the doubled o is a long oh. One syllable."],
     ["die Wurst", "dee voorst", "the sausage", "w is v; the u before two consonants is short. One syllable."],
     ["die Zwiebel", "dee TSVEE-buhl", "the onion", "z is ts and w is v, so zw is tsv; ie is ee; the ending -el is uhl. Stress on the first syllable."],
     ["die Kirche", "dee KIR-hhuh", "the church", "ch after r is the soft hh; the final e is said, uh. Stress on Kir."],
     ["die Brille", "dee BRIL-uh", "the glasses (for your eyes)", "i before a doubled l is short; the final e is said. Stress on the first syllable."],
     ["der Schuh", "dayr shoo", "the shoe", "sch is sh; the h after u is silent and makes it long. One syllable."],
     ["das Eis", "dahs ais", "the ice; ice cream", "ei is ai, as in eye. One syllable."],
     ["die Bäckerei", "dee behk-uh-RAI", "the bakery", "ä is eh, ck is k, ei is ai. The ending -ei is always stressed: behk-uh-RAI."],
     ["der Fußball", "dayr FOOS-bahl", "soccer; the soccer ball", "Fuß + Ball (foot + ball). ß after the long u is s; a is short before ll. Stress on the first part."],
     ["der Bahnhof", "dayr BAHN-hohf", "the train station", "Bahn + Hof (railway + yard). The h after a is silent and makes it long. Stress on Bahn."],
     ["das Fahrrad", "dahs FAHR-raht", "the bicycle", "Fahr + Rad (ride + wheel). The h makes the a long; the final d sounds t. Stress on Fahr."],
     ["der Handschuh", "dayr HAHNT-shoo", "the glove", "Hand + Schuh (hand + shoe). The d ends the first part, so it sounds t; sch is sh. Stress on Hand."],
     ["das Flugzeug", "dahs FLOOK-tsoyk", "the airplane", "Flug + Zeug (flight + thing). The g ending each part sounds k; z is ts; eu is oy. Stress on Flug."],
     ["die Straßenbahn", "dee SHTRAH-suhn-bahn", "the streetcar, the tram", "Straßen + Bahn (streets + railway). st at the start is sht; ß is s. Stress on the first part."],
     ["die Hausaufgabe", "dee HOWS-owf-gah-buh", "the homework", "Haus + Aufgabe (home + task). au is ow, twice; the final e is said. Stress on Haus."]]

SEC = [None,
       {"deck": D, "n": [11, 18]},
       [{"name": "Vowel pairs", "cards": VP}, {"deck": D, "n": [5, 8]}],
       {"deck": D, "n": [8, 11]},
       None,
       {"deck": D, "n": [0, 5]},
       {"name": "Long vowels", "cards": LV},
       None,
       {"name": "Read whole words", "cards": W}]

ALPHA = "a=ah b=bay c=tsay d=day e=ay f=ehf g=gay h=hah i=ee j=yawt k=kah l=ehl m=ehm n=ehn o=oh p=pay q=koo r=ehr s=ehs t=tay u=oo v=fow w=vay x=iks y=EWP-see-lawn z=tseht ä=eh ö=ur ü=ew ß=ehs-TSEHT"

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `\n<p>German uses the same 26 letters as English,',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `\n<h3>How German spelling works</h3>\n<p>German uses the same 26 letters as English,'),
 ('The syllable in CAPITALS is the stressed one.</p>\n<h3>Letters that sound different</h3>',
  'The syllable in CAPITALS is the stressed one.</p>\n<p>Most letters sound as they do in English, so this lesson teaches only what is different, in small groups: letters with a new sound, vowel pairs, umlauts, ch, word endings, and long and short vowels. Each group has tiles: tap one to hear it and see how the line writes it. Here is the whole alphabet with the German names of the letters. You need them to spell your name.</p>\n{{tiles:' + ALPHA + '}}\n<h3>Letters that sound different</h3>'),
 ('<td class="k">die Straße</td></tr></table></div>\n{{ex:das Wasser',
  '<td class="k">die Straße</td></tr></table></div>\n<p>Tap a tile to hear the sound.</p>\n{{tiles:w=v v=f z=ts j=y s=z sp=shp st=sht ß=s}}\n{{ex:das Wasser'),
 ('say <i>day</i> without the glide at the end.</p>\n',
  'say <i>day</i> without the glide at the end.</p>\n{{tiles:ei ie eu äu au}}\n'),
 ('but there is no r sound in it.</p>\n',
  'but there is no r sound in it.</p>\n{{tiles:ä=eh ö=ur ü=ew}}\n'),
 ('Neither one is a k or a sh.</p>\n',
  'Neither one is a k or a sh. <b>sch</b> is one sound, always <i>sh</i>, as in <b>schön</b>. In the tiles, the first row is throaty and the second soft.</p>\n{{tiles:ach=ahkh och=awkh uch=ookh auch=owkh _ ich ech=ehh _ _ _ sch=sh}}\n'),
 ('with <i>uh</i>: <i>BIT-uh</i>.</p>\n',
  'with <i>uh</i>: <i>BIT-uh</i>. One ending breaks the rule: <b>-ig</b> sounds like <i>ihh</i>, as in <b>zwanzig</b> (TSVAHN-tsihh).</p>\n{{tiles:b=p d=t g=k ig=ihh _ e=uh en=uhn er=uh}}\n'),
 ('<h3>Stress, r and capital letters</h3>',
  '<h3>Long and short vowels</h3>\n<p>A German vowel can be long or short, and the spelling usually tells you which. An <b>h</b> after a vowel is silent and makes it long: <b>Bahn</b>, <b>Uhr</b>. A doubled vowel is long too: <b>Tee</b>, <b>Boot</b>. Before a doubled consonant, or before two consonants, a vowel is usually short: <b>Wasser</b>, <b>Sonne</b>, <b>Hund</b>. The line shows the difference for e, i and o: long <i>ay, ee, oh</i>, short <i>eh, i, aw</i>. So <b>Tee</b> is <i>tay</i> but <b>Bett</b> (bed) is <i>beht</i>, and <b>Sohn</b> (son) is <i>zohn</i> but <b>Sonne</b> is <i>ZAWN-uh</i>. For a and u the line writes <i>ah</i> and <i>oo</i> either way.</p>\n{{tiles:ah eh ih oh uh aa ee oo}}\n{{ex:die Uhr|dee oor|the clock}}\n{{ex:das Bett|dahs beht|the bed}}\n<h3>Stress, r and capital letters</h3>'),
 ('<b>Wasser</b> starting with a v sound.</div>\n',
  '<b>Wasser</b> starting with a v sound.</div>\n<h3>Read whole words</h3>\n<p>Now put the pieces together. Read a word left to right, one spelling at a time: <b>sch</b>, <b>ei</b> and <b>ie</b> each count as one sound. Most words stress their first syllable; the notes point out the ones that do not. German builds long words by joining short ones. Read a compound part by part, with the stress on the first part: <b>Fahr + Rad</b> is <b>Fahrrad</b> (bicycle), FAHR-raht. Each part keeps its own ending, so the d at the end of <b>Hand</b> still sounds t in <b>Handschuh</b> (glove). Sound out every card below before you flip it.</p>\n{{ex:das Fahrrad|dahs FAHR-raht|the bicycle}}\n{{ex:der Handschuh|dayr HAHNT-shoo|the glove}}\n'),
])

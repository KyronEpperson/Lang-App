#!/usr/bin/env python3
# Character foundations, course en-tl (FND-1). Edits tools/target/tl/lessons-1.js; then
#   node tools/target/gen.js tl && node tools/target/validate.js tl && node tools/lessonread/apply.js en-tl
# Tagalog uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English, not the ABC.
# How the script works = a new opening section "The letters": the 20 letters of the native abakada (with ng as one letter), read as
# syllables the way Filipino children learn them (a, ba, ka, da), and the 8 letters added for names and borrowed words. All 28 on tiles.
# Pieces = (a) the five vowels and the blends ay, aw, oy, iw; (b) stress; (c) the catch; (d) ng and mga; (e) the spellings that differ
# from English (ts, k for every k sound, hard g, sy, dy, ñ), with a small in-lesson deck of syllable cards ("More spellings").
# Putting together = reading a whole word from its spelling, syllable by syllable, with stress and catch from the line: a new section
# "Read whole words" with a deck of 18 real, common words; each note cuts the word into syllables and names the pieces.
# "Sounds and spelling" is cut across the sections that teach its cards; its one joiner card (aso ni Ana) joins the last block.
# No card of an existing deck is changed. Readings follow tools/target/tl/respell.js as the course's cards show it. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'tl', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

SP = [["ka","kah","the syllable ka","Tagalog writes the k sound with k, never c: kape, kah-PEH (coffee)."],
      ["gi","ghee","the syllable gi","g stays hard before i and e, as in go: gising, ghee-SEENG (awake)."],
      ["sya","shah","the syllable sya","sy before a vowel is said sh: pasensya, pah-SEHN-shah (patience; sorry). siya (he, she) is usually said shah too."],
      ["dya","jah","the syllable dya","dy is said j: medya, MEH-jah (half), as in alas-singko y medya (half past five)."],
      ["ña","nyah","the syllable ña","ñ is said ny, as in canyon. It turns up in names and Spanish words: Santo Niño, SAHN-toh NEE-nyoh."]]
WW = [["sisiw","SEE-seew","chick","si-siw: iw is an ee that ends in w. Stress the first syllable."],
      ["kahoy","KAH-hoy","wood","ka-hoy: oy as in boy. Stress the first syllable."],
      ["sabaw","sah-BOW","soup; broth","sa-baw: aw sounds like the ow in cow. Stress the last syllable."],
      ["kalabaw","kah-lah-BOW","water buffalo","ka-la-baw: three syllables, each with one vowel sound. Stress the last."],
      ["paa","pah-AH","foot","pa-a: two vowels side by side are two syllables."],
      ["tainga","tah-EE-ngah","ear","ta-i-nga: here a and i are two syllables, not the ay of eye; nga starts with the ng of singer. Casual: tenga."],
      ["ngipin","ngee-PEEN","tooth; teeth","ngi-pin: ng starts the word. Stress the last syllable."],
      ["unggoy","oong-GOY","monkey","ung-goy: ngg is the ng of singer, then a hard g; oy as in boy."],
      ["gitara","ghee-TAH-rah","guitar","gi-ta-ra: g stays hard before i; r is one quick tap."],
      ["bundok","boon-DOHK","mountain","bun-dok: a consonant can close a syllable. Stress the last syllable."],
      ["bulaklak","boo-lahk-LAHK","flower","bu-lak-lak: three syllables. Stress the last."],
      ["tsokolate","choh-koh-LAH-teh","chocolate","tso-ko-la-te: ts is ch, and k is written where English has c."],
      ["dyip","jeep","jeepney","dy is said j. One syllable, so the line has no capitals."],
      ["radyo","RAH-joh","radio","ra-dyo: r is one quick tap, dy is said j. Stress the first syllable."],
      ["mali","mah-LEEQ","wrong","ma-li: stress the last syllable; the word ends in a catch."],
      ["pusa","POO-sah","cat","pu-sa: two open syllables. Stress the first."],
      ["ulan","oo-LAHN","rain","u-lan: stress the last syllable."],
      ["puno","POO-noh","tree","pu-no: stress the first syllable. Stressed at the end, with a catch, it means full."]]

SEC = [None,
       [{"deck": D, "n": [7, 8]}, {"deck": D, "n": [11, 14]}],
       [{"deck": D, "n": [1, 2]}, {"deck": D, "n": [10, 11]}, {"deck": D, "n": [16, 17]}],
       [{"deck": D, "n": [0, 1]}, {"deck": D, "n": [2, 3]}, {"deck": D, "n": [15, 16]}],
       [{"deck": D, "n": [3, 5]}, {"deck": D, "n": [6, 7]}],
       [{"deck": D, "n": [8, 10]}, {"deck": D, "n": [14, 15]}, {"name": "More spellings", "cards": SP}],
       None,
       [{"deck": D, "n": [5, 6]}, {"name": "Whole words", "cards": WW}]]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('stress and the catch.</p>\n<h3>Five short, pure vowels</h3>',
  'stress and the catch.</p>\n<h3>The letters</h3>\n<p>The native alphabet, the <b>abakada</b>, has 20 letters, and <b>ng</b> is one of them. The abakada reads each letter as a syllable: a, ba, ka, da. Tap a letter to hear it.</p>\n'
  '{{tiles:a=ah b=bah k=kah d=dah e=eh g=gah h=hah i=ee l=lah m=mah n=nah ng=ngah o=oh p=pah r=rah s=sah t=tah u=oo w=wah y=yah}}\n'
  '<p>The Filipino alphabet today adds eight more, for names and borrowed words: <b>c, f, j, ñ, q, v, x, z</b>. Native words do not use them. The q in the pronunciation line is not this letter: it marks the catch, explained below.</p>\n'
  '{{tiles:c=k_or_s f=f j=j ñ=ny q=k v=v x=ks z=z}}\n<h3>Five short, pure vowels</h3>'),
 ('{{ex:ikaw|ee-KOW|you}}\n<h3>Stress',
  '{{ex:ikaw|ee-KOW|you}}\n<p>Two more pairs blend the same way: <b>oy</b> as in <i>boy</i>, and <b>iw</b>, an ee that ends in w. You will also meet <b>uy</b> (<b>Uy!</b>, hey!) and <b>ey</b> (<b>reyna</b>, queen). Any other two vowels side by side are two syllables: <b>oo</b> (yes) is OH-oh. Tap a vowel or pair to hear it.</p>\n{{tiles:a=ah e=eh i=ee o=oh u=oo ay=ai aw=ow oy=oy iw=eew}}\n<h3>Stress'),
 ('{{ex:aso|AH-soh|dog}}\n<h3>The catch',
  '{{ex:aso|AH-soh|dog}}\n<p>Many words take the stress at the end: <b>kaunti</b> (a little) is kah-oon-TEEQ (the final q is the catch, next section).</p>\n<h3>The catch'),
 ('{{ex:tsinelas|chee-NEH-lahs|flip-flops}}\n<h3>Two small',
  '{{ex:tsinelas|chee-NEH-lahs|flip-flops}}\n<p>The same habit runs through the spelling: one sound, one way to write it. Outside names, the k sound is written <b>k</b>, as in <b>kape</b> (coffee), and older spellings use <b>p</b> where English has f: <b>Pilipino</b> (Filipino). <b>sy</b> is said sh and <b>dy</b> is said j. <b>ñ</b>, in names and Spanish words, is ny. Tap a syllable to hear it.</p>\n{{tiles:ka gi sya dya ña}}\n<h3>Two small'),
 ('{{ex:aso ni Ana|AH-soh nee AH-nah|Ana\'s dog}}\n<p>The line is a map',
  '{{ex:aso ni Ana|AH-soh nee AH-nah|Ana\'s dog}}\n<h3>Read whole words</h3>\n<p>Now put the pieces together. Cut a word into syllables: each has one vowel sound, often with one consonant before it and sometimes one after, so <b>bulaklak</b> is bu-lak-lak. Give each letter its Tagalog sound, read <b>ng</b> as one letter, and read two vowels side by side as two syllables, unless they are one of the pairs ay, aw, oy, iw (or the rarer uy, ey). The spelling does not show stress or the catch, so take those from the line. Each card\'s note cuts the word into syllables. Say the word aloud before you flip it.</p>\n{{ex:bulaklak|boo-lahk-LAHK|flower}}\n<p>The line is a map'),
])

#!/usr/bin/env python3
# Character foundations, course en-ptpt (FND-1). Edits tools/target/ptpt/lessons-1.js; then
#   node tools/target/gen.js ptpt && node tools/target/validate.js ptpt && node tools/lessonread/apply.js en-ptpt
# European Portuguese uses the Latin alphabet, so the foundation is ONE lesson, `vowels` (lesson 1), and it teaches what differs
# from English, not the ABC. Lesson 2 `nasals` keeps its body and goes on teaching nasals, lh, nh, ç and the marks in depth.
# Pieces = (a) the vowels, which shrink when unstressed, and open or closed stressed e and o; (b) final s and clean t and d;
# (c) the two r sounds; (d) the consonant letters and spellings whose sound differs from English (c/ce/ci, ç, g/ge/gi, j, ch, x, h,
# qu, s/ss), in a new section; (e) the labels of the line (ou, ei, nasal ng, lh, nh). The letters that sound much as in English,
# and the accent marks, get tile blocks in a new opening section "The alphabet", so all 26 letters and ç are on tiles.
# Putting together = reading a whole word aloud from its spelling: give each piece its Lisbon sound, find the stress, shrink the
# other vowels. A new section "Read whole words" with a deck of 17 real, common words; each note names the pieces.
# "Sounds and spelling" (18 cards) is cut across the sections that teach its cards; all 18 are in this lesson.
# The consonant spellings, which no deck card shows on its own, get a small in-lesson deck "Spelling sounds".
# No card of an existing deck is changed. Readings are those of tools/target/ptpt/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'ptpt', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

SP = [["ch","sh","the spelling ch","Always sh, as in shop, never the ch of church: a chave, uh SHAH-vih."],
      ["j","zh","the letter j","The s in measure, not the j in jam: o queijo, oo KUHY-zhoo. g before e or i is the same sound."],
      ["ç","s","c with a tail","Always s. It comes only before a, o or u: a praça, uh PRAH-suh. Before e or i a plain c is already s."],
      ["qu","k","the spelling qu","Before e or i the u is usually silent: pequeno, pih-KAY-noo. A few words say it, such as cinquenta; the line shows which. Before a it is said: quanto, KWUHN-too."],
      ["x","sh","the letter x","Most often sh: o peixe, oo PUHY-shih. A few words say it another way; the line shows which."],
      ["ss","s","double s","Always s. A single s between vowels is z: a casa, uh KAH-zuh."]]
WW = [["o gato","oo GAH-too","the cat","g before a is a hard g. Stressed a is ah; the final o shrinks to oo."],
      ["a mesa","uh MAY-zuh","the table","One s between vowels is z. The stressed e is a closed ay; the final a shrinks to uh."],
      ["a rua","uh KHOO-uh","the street","r at the start of a word is the strong kh. u is oo; the final a is uh."],
      ["o livro","oo LEE-vroo","the book","i is ee. r after v is the quick tap. The final o is oo."],
      ["a cidade","uh see-DAH-dih","the city","c before i is s. d stays a clean d. The final e shrinks to ih."],
      ["gente","ZHAYN-tih","people","g before e is zh. n before t makes the vowel nasal and stays on the line. t stays clean; the final e is ih."],
      ["a semana","uh sih-MUH-nuh","the week","Unstressed e is ih. Stressed a before n is uh, and so is the final a."],
      ["o homem","oo AW-muhyng","the man","h is silent. The stressed o is an open aw, which the spelling does not show. Final em is uhyng, the ending of mãe."],
      ["quente","KAYN-tih","hot","qu before e is k, with a silent u. n before t: a nasal vowel. The final e is ih."],
      ["a hora","uh AW-ruh","the hour","h is silent. Open o, aw. A single r between vowels is the tap."],
      ["o gelado","oo zhih-LAH-doo","the ice cream","g before e is zh, and that e is unstressed, so ih. Stressed a is ah."],
      ["o jogo","oo ZHOH-goo","the game","j is zh. g before o is hard. A closed oh, then the final o shrinks to oo."],
      ["a chuva","uh SHOO-vuh","the rain","ch is sh. u is oo; the final a is uh."],
      ["o cão","oo kowng","the dog","c before a is k. ão is the nasal owng, with no n at the end."],
      ["a rapariga","uh khuh-puh-REE-guh","the girl","r at the start is kh. Both unstressed a sounds are uh. g before a is hard. The everyday word in Portugal; in Brazil it is rude."],
      ["grande","GRUHN-dih","big","r after g is the tap. Stressed a before n is uh, and n before d makes it nasal. The final e is ih."],
      ["o lixo","oo LEE-shoo","the rubbish","x here is sh. i is ee; the final o is oo."]]

SEC = [None,
       [{"deck": D, "n": [0, 1]}, {"deck": D, "n": [4, 6]}, {"deck": D, "n": [8, 10]}],
       [{"deck": D, "n": [1, 3]}, {"deck": D, "n": [15, 17]}],
       [{"deck": D, "n": [6, 8]}, {"deck": D, "n": [17, 18]}],
       {"name": "Spelling sounds", "cards": SP},
       [{"deck": D, "n": [3, 4]}, {"deck": D, "n": [10, 15]}],
       {"name": "Whole words", "cards": WW},
       None]

edit('lessons-1.js', [
 ('    id: "vowels",\n    title: "Sounds of Portugal: reduced vowels and final s",\n    blurb: "Hear Lisbon vowels and final s, and read the pronunciation line under each new word.",\n    deck: "Sounds and spelling",\n    body: `',
  '    id: "vowels",\n    title: "Sounds of Portugal: reduced vowels and final s",\n    blurb: "Hear Lisbon vowels and final s, and read the pronunciation line under each new word.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('and the wrong final <b>s</b>.</p>\n<h3>Vowels that shrink</h3>',
  'and the wrong final <b>s</b>.</p>\n<h3>The alphabet</h3>\n<p>Portuguese uses the 26 letters you know, plus <b>ç</b>. <b>k</b>, <b>w</b>, and <b>y</b> turn up only in borrowed words and names. These letters sound much as in English. At the end of a word, <b>z</b> sounds like a final <b>s</b>. An <b>m</b> or <b>n</b> after a vowel, at the end of a word or before another consonant, makes that vowel nasal. The rest of this lesson is the letters that do not sound as in English. Tap a letter to hear it.</p>\n{{tiles:b=b d=d f=f k=k l=l m=m n=n p=p t=t v=v w=w y=y z=z}}\n<p>Marks sit on vowels. An acute (<b>á é í ó ú</b>) or a circumflex (<b>â ê ô</b>) shows the stressed syllable. On <b>e</b> and <b>o</b>, the acute is open and the circumflex is closed. <b>ã</b> and <b>õ</b> are nasal. A grave accent appears only on <b>à</b>, which means <i>to the</i> and keeps an open <i>ah</i>. Lesson 2 covers them.</p>\n{{tiles:á=ah é=eh í=ee ó=aw ú=oo â=uh ê=ay ô=oh ã=uhng õ=ohng à=ah}}\n<h3>Vowels that shrink</h3>'),
 ('{{ex:a cama|uh KUH-muh|the bed}}\n',
  '{{ex:a cama|uh KUH-muh|the bed}}\n<p>A stressed <b>e</b> or <b>o</b> can be open or closed, and the spelling often does not show which. <b>porta</b>, the door, has an open <i>aw</i>. <b>Porto</b>, the city, has a closed <i>oh</i>. The line shows which one you have. Tap a vowel to hear it.</p>\n{{tiles:a=ah e=eh i=ee o=aw u=oo}}\n'),
 ('{{ex:falar|fuh-LAHR|to speak}}\n<h3>A few labels the line uses</h3>',
  '{{ex:falar|fuh-LAHR|to speak}}\n{{tiles:r=r rr=kh}}\n<h3>Letters that change their sound</h3>\n<p>Some letters do not sound as in English. <b>c</b> and <b>g</b> change with the next vowel. Before <b>a</b>, <b>o</b>, or <b>u</b> they are hard, <i>k</i> and <i>g</i>. Before <b>e</b> or <b>i</b>, <b>c</b> is <i>s</i> and <b>g</b> is <i>zh</i>. <b>ç</b> keeps the <i>s</i> before <b>a</b>, <b>o</b>, or <b>u</b>. <b>j</b> is always <i>zh</i>. <b>ch</b>, and most <b>x</b>, are <i>sh</i>. <b>h</b> on its own is silent.<b>q</b> always comes with <b>u</b>. Before <b>e</b> or <b>i</b>, the <b>u</b> of <b>qu</b> and <b>gu</b> is usually silent, so <b>gu</b> there is a hard <i>g</i>, as in <b>guerra</b>. A few words do say the <b>u</b>, such as <b>cinquenta</b>. One <b>s</b> between vowels is <i>z</i>. <b>ss</b> is <i>s</i>. Tap a letter or spelling to hear it.</p>\n{{tiles:c=k ce=s ci=s ç _ g=g ge=zh gi=zh j _ ch x h=silent q=k qu s=s ss}}\n<h3>A few labels the line uses</h3>'),
 ('{{ex:não|nowng|no; not}}\n<h3>The small words o and a</h3>',
  '{{ex:não|nowng|no; not}}\n{{tiles:ou=oh ei=uhy lh=ly nh=ny}}\n<h3>Read whole words</h3>\n<p>Now put the pieces together. Read a word in two steps. First give each letter or spelling its Lisbon sound: <b>ch</b> is <i>sh</i>, <b>j</b> is <i>zh</i>, <b>h</b> is silent, and an <b>r</b> at the start of a word is <i>kh</i>. Then find the stress and shrink the other vowels. A word that ends in <b>a</b>, <b>e</b>, or <b>o</b>, in those plus <b>s</b>, or in <b>am</b> or <b>em</b>, leans on the next-to-last syllable. So <b>semana</b> is <i>sih-MUH-nuh</i>. Most other words lean on the last syllable, as <b>falar</b> and <b>Brasil</b> do. A written accent overrides both rules, as in <b>café</b> and <b>médico</b>. Each card\'s note names the pieces. Say the word aloud before you flip it.</p>\n{{ex:a semana|uh sih-MUH-nuh|the week}}\n<h3>The small words o and a</h3>'),
])

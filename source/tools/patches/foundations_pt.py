#!/usr/bin/env python3
# Character foundations, course en-pt (FND-1). Edits tools/target/pt/lessons-1.js; then
#   node tools/target/gen.js pt && node tools/target/validate.js pt && node tools/lessonread/apply.js en-pt
# Portuguese uses the Latin alphabet, so the foundation is the one lesson `sounds`, and it teaches what differs from English, not the ABC.
# A new opening section "Same letters, new sounds" says how the alphabet works and puts the ten letters that sound much as in English on tiles.
# Pieces = (a) the vowels and the end of a word; (b) t and d before an "ee" sound; (c) the nasal vowels (ã õ ão ãe õe, final m);
# (d) the letters and spellings whose sound differs from English (c/ç, g/gi/gu, h, j, l, lh, nh, q/qu, r/rr, s/ss, x, ch);
# (e) the accent marks and stress (á â à é ê í ó ô ú). Every letter of the alphabet and every marked vowel is on a tile.
# Putting together = reading a whole word aloud from its spelling with the stress in the right place: a new section "Read whole words"
# with a deck of 17 real, common words; each note breaks the word into its pieces and names the stress rule.
# "Sounds and spelling" is cut across the sections that teach its cards. Spellings no card shows (ç, ss, gi, gu, x) get a small in-lesson
# deck; the accent marks get one too. No single plain vowel gets a card. No card of an existing deck is changed.
# Readings are those of tools/target/pt/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'pt', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

SP = [["ç","s","c with a cedilla","Always s, and only before a, o or u: o açúcar, oo ah-SOO-kahr."],
      ["ss","s","double s","Always s, never z: a pessoa, ah peh-SOH-uh. A single s between vowels is z: a casa."],
      ["gi","zhee","g before i","g before e or i sounds zh: a página, ah PAH-zhee-nuh. Before a, o or u it is a hard g: a garrafa."],
      ["gu","g","g and u before e or i","The u is usually silent and keeps the g hard: a guerra, ah GHEH-huh."],
      ["x","sh","the letter x","Usually sh: a caixa, ah KAI-shuh. In some words it is ks (o táxi, oo TAHK-see), z (o exame) or s (próximo)."]]
AM = [["á","ah","a with an acute accent","A stressed ah: o cardápio, oo kahr-DAH-pyoo."],
      ["é","eh","e with an acute accent","An open eh, as in bet, and stressed: o café, oo kah-FEH."],
      ["ê","ay","e with a circumflex","A closed ay, and stressed: você, voh-SAY."],
      ["í","ee","i with an acute accent","A stressed ee: a família, ah fah-MEE-lyuh."],
      ["ó","aw","o with an acute accent","An open aw, as in law, and stressed: a avó, ah ah-VAW."],
      ["ô","oh","o with a circumflex","A closed oh, and stressed: o avô, oo ah-VOH."],
      ["ú","oo","u with an acute accent","A stressed oo: o açúcar, oo ah-SOO-kahr."]]
WW = [["a gente","ah ZHAYN-chee","we; people","g before e is zh; en before a consonant is nasal; final te is chee. Ends in e: stress on the next-to-last syllable."],
      ["o hotel","oo oh-TEHW","the hotel","h is silent; final l is w. Ends in l: stress on the last syllable."],
      ["a praia","ah PRAI-uh","the beach","r after p is a quick tap; ai as in eye; final a is a weak uh. Ends in a: stress on the next-to-last syllable."],
      ["o açúcar","oo ah-SOO-kahr","the sugar","ç is s; c before a is k. The accent mark puts the stress on ú."],
      ["a caixa","ah KAI-shuh","the box; the checkout","ai as in eye; x is sh. Ends in a: stress on the next-to-last syllable."],
      ["o sorvete","oo sohr-VAY-chee","the ice cream","r at the end of a syllable changes by region; final te is chee. Ends in e: stress on the next-to-last syllable."],
      ["a manhã","ah mah-NYAHNG","the morning","nh is ny; ã is nasal, and the syllable with the tilde takes the stress."],
      ["o limão","oo lee-MOWNG","the lime","ão is nasal, owng, and the syllable with the tilde takes the stress."],
      ["a garrafa","ah gah-HAH-fuh","the bottle","g before a is hard; rr is h. Ends in a: stress on the next-to-last syllable."],
      ["o jantar","oo zhahn-TAHR","dinner","j is zh; an before a consonant is nasal. Ends in r: stress on the last syllable."],
      ["o médico","oo MEH-jee-koo","the doctor","é is an open eh and takes the stress; d before i is j; final o is oo."],
      ["o ônibus","oo OH-nee-boos","the bus","ô is a closed oh and takes the stress; final s stays s."],
      ["a música","ah MOO-zee-kuh","music","ú takes the stress; s between vowels is z; c before a is k."],
      ["a viagem","ah vee-AH-zhayng","the trip","g before e is zh; final em is nasal, ayng. Ends in em: stress on the next-to-last syllable."],
      ["a chuva","ah SHOO-vuh","the rain","ch is sh; final a is a weak uh. Ends in a: stress on the next-to-last syllable."],
      ["a mulher","ah moo-LYEHR","the woman","lh is ly. Ends in r: stress on the last syllable."],
      ["grande","GRAHN-jee","big","an before a consonant is nasal; final de is jee. Ends in e: stress on the next-to-last syllable."]]

SEC = [None, None, {"deck": D, "n": [8, 12]}, {"deck": D, "n": [0, 4]},
       [{"deck": D, "n": [4, 8]}, {"deck": D, "n": [12, 17]}, {"name": "More spellings", "cards": SP}],
       [{"deck": D, "n": [17, 18]}, {"name": "Accent marks", "cards": AM}],
       {"name": "Whole words", "cards": WW}, None]

edit('lessons-1.js', [
 ('    deck: "Sounds and spelling",\n    body: `',
  '    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('the syllable in CAPITALS is stressed.</p>\n<h3>Vowels, and the end of a word</h3>',
  'the syllable in CAPITALS is stressed.</p>\n<h3>Same letters, new sounds</h3>\n'
  '<p>Portuguese uses the alphabet you know: 26 letters, with <b>k</b>, <b>w</b> and <b>y</b> only in borrowed words and names. It adds <b>ç</b> and four marks over vowels: the acute (<b>á</b>), the circumflex (<b>ê</b>), the tilde (<b>ã</b>) and the grave (<b>à</b>). What changes is the sound. This lesson goes one piece at a time: the vowels, t and d, the nasal vowels, the letters that differ from English, and the stress. Then you read whole words.</p>\n'
  '<p>These ten letters sound much as in English (<b>m</b> and <b>n</b> only at the start of a syllable, since at the end they make the vowel nasal, as you will see; and <b>z</b> at the end of a word sounds s, as in <b>dez</b>, ten). Tap a letter to hear it.</p>\n'
  '{{tiles:b=b f=f k=k m=m n=n p=p v=v w=w y=y z=z}}\n<h3>Vowels, and the end of a word</h3>'),
 ('So <b>de</b>, <b>te</b> and <b>que</b> sound <i>jee</i>, <i>chee</i> and <i>kee</i>.</p>\n',
  'So <b>de</b>, <b>te</b> and <b>que</b> sound <i>jee</i>, <i>chee</i> and <i>kee</i>.</p>\n'
  '<p>Some vowel pairs glide into one syllable: <b>ai</b> as in <i>eye</i>, <b>ei</b> as in <i>day</i>, <b>oi</b> as in <i>boy</i>. A mark on <b>e</b> or <b>o</b> tells you which of the pairs you hear: <b>é</b> and <b>ó</b> are open, <b>ê</b> and <b>ô</b> closed. Tap a vowel to hear it.</p>\n'
  '{{tiles:a=ah e=eh/ay i=ee o=aw/oh u=oo é=eh ê=ay ó=aw ô=oh}}\n'),
 ('{{ex:Boa noite.|BOH-uh NOY-chee|Good evening.}}\n',
  '{{ex:Boa noite.|BOH-uh NOY-chee|Good evening.}}\n{{tiles:t=t ti=chee d=d di=jee}}\n'),
 ('<b>Pão</b> (bread) is nasal; <b>pau</b> (stick) is not.</p>\n',
  '<b>Pão</b> (bread) is nasal; <b>pau</b> (stick) is not. An <b>m</b> or <b>n</b> before another consonant also makes the vowel before it nasal, and here the line keeps the m or n: <b>o tempo</b> (time; weather), oo TAYM-poo.</p>\n'
  '{{tiles:ã=ahng õ=ohng ão=owng ãe=aing õe=oyng em=ayng im=eeng om=ohng um=oong}}\n'),
 ('<tr><td class="k">s between vowels</td><td>z</td><td class="k">a casa</td></tr>',
  '<tr><td class="k">s between vowels</td><td>z (but ss is always s)</td><td class="k">a casa, a pessoa</td></tr>'),
 ('{{ex:o trabalho|oo trah-BAH-lyoo|the work; the job}}\n',
  '{{ex:o trabalho|oo trah-BAH-lyoo|the work; the job}}\n<p>Tap a letter or spelling to hear it.</p>\n'
  '{{tiles:c=k ci=see ç=s g=g gi=zhee gu=g h=silent j=zh l=l/w lh=ly nh=ny q=k qu=k/kw r=h/r rr=h s=s/z ss=s x=sh ch=sh}}\n'),
 ('{{ex:o avô|oo ah-VOH|the grandfather}}\n<h3>o and a</h3>',
  '{{ex:o avô|oo ah-VOH|the grandfather}}\n'
  '<p>Two more marks. <b>â</b>, as in <b>a câmera</b> (the camera), is a stressed ah, a little closed and nasal, since it almost always comes before m or n. The grave <b>à</b> shows up almost only in <b>à</b> and <b>às</b> (to the, at the) and does not change the sound. Tap a mark to hear its vowel.</p>\n'
  '{{tiles:á=ah í=ee ú=oo â=ah à=ah}}\n'
  '<h3>Read whole words</h3>\n'
  '<p>Now put the pieces together. Read a word in two steps. First give each letter or spelling its Portuguese sound: <b>ch</b> is sh, <b>lh</b> is ly, <b>rr</b> is h, and an unstressed final <b>e</b> is ee, which turns a <b>t</b> or <b>d</b> before it into ch or j. Then place the stress: an accent mark shows it, and so does a tilde when the word has no other mark (<b>órfão</b> stresses the ó); with no mark, the ending decides, as above. So <b>sorvete</b> is sohr-VAY-chee, and <b>mulher</b> is moo-LYEHR. Each card\'s note breaks the word into its pieces. Say the word aloud before you flip it.</p>\n'
  '{{ex:o sorvete|oo sohr-VAY-chee|the ice cream}}\n<h3>o and a</h3>'),
])

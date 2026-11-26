#!/usr/bin/env python3
# Character foundations, course en-hmn (FND-1). Edits tools/target/hmn/lessons-1.js; then
#   node tools/target/gen.js hmn && node tools/target/validate.js hmn && node tools/lessonread/apply.js en-hmn && node tools/hmong/rpa_check.js tools/target/hmn
# White Hmong is written in RPA, a Latin alphabet, so the foundation is ONE lesson: the first lesson, `tones`. Its letters go on tiles only.
# A Hmong syllable is spelled onset + vowel + tone letter, so the pieces are (a) the seven tone letters (mid has none: eight tones),
# (b) the 56 White Hmong first consonants (single letters and clusters such as ntxh), (c) the 13 vowels.
# Flashcards: the existing deck "Tones" (cut across the two tone sections), and small in-lesson decks of the consonant and vowel
# spellings that differ from English. Every one of the 56 onsets, 13 vowels and 7 tone letters is on a flip tile.
# Putting together = reading one syllable from its three parts: a "Putting a syllable together" section with a deck of 20 common
# one-syllable words from tools/hmong/GLOSSARY.tsv, each note splitting the word into onset + vowel + tone letter.
# Lessons 2 and 3 (consonants-1, consonants-2) keep their deck "Consonants and vowels" and are not changed: they go deeper on the same sounds.
# No card of an existing deck is changed. Tone lines are those of tools/target/hmn/respell.js. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'hmn', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Tones"

CS = [["x", "s", "the letter x", "English s, never ks: xav, to think."],
      ["s", "sh", "the letter s", "Close to sh: siab, liver."],
      ["z", "zh", "the letter z", "Like the s in measure: zoo, good."],
      ["r", "curled t", "the letter r", "A t with the tongue curled back, never an English r: riam, knife."],
      ["c", "ty", "the letter c", "Like the ty in got you: cuaj, nine."],
      ["q", "back k", "the letter q", "A k made far back in the throat: qaib, chicken."],
      ["xy", "hy", "the spelling xy", "A soft hiss, like the h in huge: xyoo, year."],
      ["tx", "ts", "the spelling tx", "ts as in cats: txiv, father."],
      ["ts", "curled ch", "the spelling ts", "Like ch, with the tongue curled back: tsev, house."],
      ["ph", "p+puff", "h after a consonant", "The h is a puff of air, never f: phom, gun. The same in th, kh, qh, ch, txh, tsh, rh, plh and dh."],
      ["np", "mb", "n before a consonant", "A short hum through the nose, then the consonant: npua, pig. nt is nd, nk is ngg. But ny is one sound of its own."],
      ["hm", "m+air", "h before m or n", "A breathy m. Let air out through your nose first: hmo, night. The same in hn and hny."],
      ["hl", "l+air", "the spelling hl", "A breathy l, like the Welsh ll: hlub, to love."],
      ["ny", "ny", "the spelling ny", "The ny of canyon, here at the start of a word: nyob, to live; to be somewhere."]]
VS = [["w", "ih", "the vowel w", "Always a vowel: the i of roses, said with your lips spread: tw, tail."],
      ["ee", "eng", "the vowel ee", "A nasal vowel, close to eng; no g is said: neeg, person."],
      ["oo", "ong", "the vowel oo", "A nasal vowel, close to ong; no g is said: zoo, good."],
      ["ia", "ee-uh", "the vowel ia", "A glide from ee to uh: niam, mother."],
      ["ua", "oo-uh", "the vowel ua", "A glide from oo to uh: ua, to do."],
      ["ai", "eye", "the vowel ai", "Like the word eye: hais, to say."],
      ["au", "ow", "the vowel au", "Like the ow of cow: nkauj, song."],
      ["aw", "ah-ih", "the vowel aw", "a sliding into the Hmong w: sawv, to get up."]]
WW = [["ib", "high", "one", "No first consonant: i + b. b is the high-tone letter."],
      ["pab", "high", "to help", "p (no puff) + a + b, the high-tone letter."],
      ["dej", "falling", "water", "d + e + j, the falling-tone letter. The j is not said."],
      ["tsev", "rising", "house", "ts (ch with the tongue curled back) + e + v, the rising-tone letter."],
      ["txiv", "rising", "father", "tx (ts as in cats) + i + v, the rising-tone letter."],
      ["niam", "creaky", "mother", "n + ia (ee-uh) + m, the creaky-tone letter."],
      ["ntses", "low", "fish", "nts (a hum, then ch with the tongue curled back) + e + s. The last s is the low-tone letter, not a sound."],
      ["mov", "rising", "cooked rice", "m + o + v. At the end of a syllable v is the rising-tone letter."],
      ["xyoo", "mid", "year", "xy (the h of huge) + oo (close to ong) and no tone letter: mid tone."],
      ["plaub", "high", "four", "pl (a p with an l after it, one sound) + au (ow) + b, the high-tone letter."],
      ["noj", "falling", "to eat", "n + o + j, the falling-tone letter."],
      ["cuaj", "falling", "nine", "c (the ty of got you) + ua (oo-uh) + j, the falling-tone letter."],
      ["hais", "low", "to say; to speak", "h + ai (eye) + s, the low-tone letter."],
      ["sawv", "rising", "to get up", "s (sh) + aw (a sliding into w) + v, the rising-tone letter."],
      ["nees", "low", "horse", "n + ee (close to eng) + s, the low-tone letter."],
      ["yog", "falling-breathy", "to be (X is a Y)", "y + o + g, the falling-breathy tone letter."],
      ["ntxhais", "low", "daughter; girl", "ntxh (a nasal start, then ts with a puff of air) + ai (eye) + s, the low-tone letter."],
      ["mus", "low", "to go", "m + u + s, the low-tone letter."],
      ["pw", "mid", "to lie down; to sleep", "p + w (a vowel) and no tone letter: mid tone."],
      ["tod", "rising-final", "over there", "t + o + d, the rising-final tone letter, used only at the end of a phrase."]]

SEC = [None, {"deck": D, "n": [0, 7]}, {"deck": D, "n": [7, 18]},
       {"name": "Consonant spellings", "cards": CS}, {"name": "Vowel spellings", "cards": VS},
       {"name": "Read whole syllables", "cards": WW}, None]

CONS = ('<h3>First consonants</h3>\n'
 '<p>A syllable starts with a consonant, a cluster of letters that stands for one sound, or no consonant at all (<b>ib</b>, one). '
 'White Hmong has 56 first consonants, all on the tiles below. Many are close to English: p, t, k, d, f, v, h, l, m, n and y (but say p, t and k with no puff of air, like the p in spin). '
 'Others have a new value (x, s, z, r, c, q). And three patterns build most clusters: an <b>h</b> after a consonant is a puff of air, '
 'an <b>n</b> in front is a short hum through the nose (but <b>ny</b> is one sound, the ny of canyon), and an <b>h</b> in front of m, n or l lets air out first. '
 'On a tile, +puff means a puff of air follows, +air means breathy, and curled means the tongue is curled back. '
 'Read each row from the plain consonant on the left. Lessons 2 and 3 practise them one by one.</p>\n'
 '{{tiles:p=p ph=p+puff np=mb nph=mb+puff _ '
 't=t th=t+puff nt=nd nth=nd+puff _ '
 'r=curled_t rh=curled_t+puff nr=n+curled_t nrh=n+curled_t+puff _ '
 'c=ty ch=ty+puff nc=n+ty nch=n+ty+puff _ '
 'k=k kh=k+puff nk=ngg nkh=ngg+puff _ '
 'q=back_k qh=back_k+puff nq=n+back_k nqh=n+back_k+puff _ '
 'tx=ts txh=ts+puff ntx=ndz ntxh=ndz+puff _ '
 'ts=curled_ch tsh=curled_ch+puff nts=n+curled_ch ntsh=n+curled_ch+puff _ '
 'pl=pl plh=pl+puff npl=mbl nplh=mbl+puff _}}\n'
 '<p>And the rest: plain and breathy nasals, l, and the hissing sounds.</p>\n'
 '{{tiles:m=m n=n ny=ny ml=ml l=l '
 'hm=m+air hn=n+air hny=ny+air hml=ml+air hl=l+air '
 'f=f v=v x=s s=sh z=zh '
 'xy=hy y=y h=h d=d dh=d+puff}}\n'
 '{{ex:phooj ywg|falling · falling-breathy|friend}}\n')
VOW = ('<h3>Vowels</h3>\n'
 '<p>After the consonant comes one of 13 vowels. Five are plain: <b>a</b> (ah), <b>e</b> (ay, with no y glide), <b>i</b> (ee), <b>o</b> (aw) and <b>u</b> (oo). '
 '<b>w</b> is always a vowel, never a consonant. A doubled vowel, <b>ee</b> or <b>oo</b>, goes through your nose. '
 'And five are glides from one vowel to another: <b>ai</b>, <b>au</b>, <b>aw</b>, <b>ia</b>, <b>ua</b>.</p>\n'
 '{{tiles:a=ah e=ay i=ee o=aw u=oo w=ih ee=eng oo=ong _ _ ai=eye au=ow aw=ah-ih ia=ee-uh ua=oo-uh}}\n')
PUT = ('<h3>Putting a syllable together</h3>\n'
 '<p>Now read whole words. Every syllable is read left to right in three steps. First the consonant: take the longest spelling that fits, '
 'so <b>ntxhais</b> starts with ntxh, not n. Then the vowel. Then look at the last letter: if it is b, j, v, s, g, m or d, it is the tone letter, '
 'not a sound; if the word ends in a vowel, the tone is mid. So <b>ntxhais</b> is ntxh + ai + s: a hum, ts with a puff, "eye", low tone. '
 'Each card\'s note splits the word into its three parts. Say it aloud before you flip it.</p>\n'
 '{{ex:ntxhais|low|daughter; girl}}\n')

edit('lessons-1.js', [
 ('    blurb: "Read the silent tone letter at the end of a Hmong syllable and name all eight tone spellings.",\n    deck: "Tones",\n    body: `',
  '    blurb: "Read the silent tone letter at the end of a Hmong syllable, name all eight tone spellings, and meet every consonant and vowel of White Hmong.",\n    deck: "Tones",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('the notes show where Green Hmong differs.</p>\n<h3>The last letter is not a sound</h3>',
  'the notes show where Green Hmong differs.</p>\n<p>Every Hmong syllable is spelled in up to three parts: a first consonant, a vowel, and a tone letter. <b>Hmoob</b> is hm + oo + b. Each syllable is written separately, with a space, even inside one word: <b>phooj ywg</b> (friend) is one word. This lesson starts with the part English does not have, the tone letter, then shows every consonant and vowel.</p>\n<h3>The last letter is not a sound</h3>'),
 ('<td class="k">ntawd</td><td>that</td></tr></table></div>\n<p>Common words with each tone:</p>',
  '<td class="k">ntawd</td><td>that</td></tr></table></div>\n<p>Here are the seven tone letters; the mid tone has none. On a tile, breathy is the falling-breathy tone and final is the rising-final tone.</p>\n{{tiles:b=high j=falling v=rising s=low g=breathy m=creaky d=final}}\n<p>Common words with each tone:</p>'),
 ('{{ex:Ua tsaug.|mid · falling-breathy|Thank you.}}\n<h3>No voice yet</h3>',
  '{{ex:Ua tsaug.|mid · falling-breathy|Thank you.}}\n' + CONS + VOW + PUT + '<h3>No voice yet</h3>'),
])

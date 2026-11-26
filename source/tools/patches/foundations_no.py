#!/usr/bin/env python3
# Character foundations, course en-no (FND-1). Edits tools/target/no/lessons-1.js; then
#   node tools/target/gen.js no && node tools/target/validate.js no && node tools/lessonread/apply.js en-no
# Norwegian uses the Latin alphabet plus æ, ø, å, so the foundation is ONE lesson, `alphabet` (lesson 1), and it teaches what
# differs from English, not the ABC. `vowels` and `consonants` keep their bodies and go deeper; they get no sections.
# Pieces = (a) the nine vowels, long or short, with o, u, y, æ, ø, å and the glides ei, øy, au (new section "Nine vowels, long or short");
# (b) the letter groups and letters whose sound differs from English: kj, skj, sj, rs, hv, hj, j, r, plus silent d
# (the existing section "hy, sh, and what the line leaves out"). The 18 consonants that sound much as in English get one tile block
# in the opening section, so all 29 letters are on tiles.
# Putting together = reading a whole word from its spelling: find the letter groups, give each vowel its length, drop silent letters.
# New section "Read whole words" with an in-lesson deck of 18 real, common words; each note breaks the word into its pieces.
# "Sounds and spelling" (shared with lessons 2 and 3) is cut across the two piece sections of lesson 1; every card once.
# Readings are stdout of tools/target/no/respell.js. No card of an existing deck is changed. Run once; every replacement is asserted.
import io, os, json
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
def edit(name, pairs):
    p = os.path.join(ROOT, 'tools', 'target', 'no', name); s = io.open(p, encoding='utf8').read()
    assert 'sections:' not in s, name + ': already applied'
    for a, b in pairs:
        assert s.count(a) == 1, (name, s.count(a), a[:70]); s = s.replace(a, b)
    io.open(p, 'w', encoding='utf8').write(s); print('edited', name)
J = lambda v: json.dumps(v, ensure_ascii=False)
D = "Sounds and spelling"

VL = [["o","oo:","the letter o","Long o is usually oo, held, with no English w glide: bok, boo:k. Short o is usually oh: komme, KOHM-uh."],
      ["u","ue:","the letter u","The end of new, tighter, with no glide: hus, hue:s."],
      ["y","ew:","the letter y","Say ee and round your lips: ny, new:."],
      ["æ","ae:","the letter æ","Its own letter, not a and e: være, VAE:-ruh."],
      ["ø","oe:","the letter ø","Say eh with rounded lips: brød, broe:, bread."],
      ["å","oh:","the letter å","Always oh, never a plain a: båt, boh:t."],
      ["ei","ai","the spelling ei","One syllable, like the i of hi: hei, hai."],
      ["øy","oey","the spelling øy","ø gliding into y, one syllable: øy, oey, an island."]]
LG = [["kj","hy","the spelling kj","The h of huge: kjøpe, HYOE:-puh. k before i, y, ei or øy is the same sound: kino, HYEE:-noo."],
      ["skj","sh","the spelling skj","One sound, sh: skjema, SHEH:-mah. sk before i, y, ei or øy is sh too."],
      ["sj","sh","the spelling sj","Also sh: sjokolade, shoo-koo-LAH:-duh."],
      ["rs","sh","the spelling rs","r and s join into one sh: norsk, nohshk."],
      ["hv","v","the spelling hv","The h is silent: hva, vah:, what."],
      ["hj","y","the spelling hj","The h is silent, and j is y: hjelpe, YEHL-puh."],
      ["j","y","the letter j","The y of yes, in almost every word: ja, yah:."],
      ["r","r","the letter r","In the east, a quick tap of the tongue, not the American r: rød, roe:, red."]]
WW = [["hvit","vee:t","white","hv: the h is silent, so v. i before one t: long ee:."],
      ["hjem","yehm","home","hj: the h is silent, so y. Only one m follows, but the e is short: a few short, common words break the length rule."],
      ["sjø","shoe:","a sea; a lake","sj is sh. ø at the end of the word: long oe:."],
      ["ski","shee:","a ski","sk before i is sh. i at the end of the word: long ee:."],
      ["kirke","HYEER-kuh","a church","k before i is hy. i before two consonants, rk: short. The last e is uh."],
      ["kjøtt","hyoet","meat","kj is hy. ø before a double t: short."],
      ["skjegg","shehg","a beard","skj is sh. e before a double g: short. The double g is said once."],
      ["øl","oe:l","beer","ø before one l: long oe:."],
      ["blå","bloh:","blue","b and l as in English. å is oh, long at the end of the word."],
      ["grønn","groen","green","ø before a double n: short. The double n is said once."],
      ["gul","gue:l","yellow","u is ue, long before one l."],
      ["fly","flew:","a plane","f and l as in English. y is ew, long at the end of the word."],
      ["sol","soo:l","sun","o before one l: long, so oo, not oh."],
      ["hund","huen","a dog","u before nd: short ue. The d after n at the end is usually silent."],
      ["land","lahn","a country","a before nd: short. The d after n at the end is usually silent."],
      ["god","goo:","good","o is long oo. The d after a vowel at the end is often silent."],
      ["nei","nai","no","ei is one syllable, ai."],
      ["øye","OEY-uh","an eye","øy is one syllable, oey. The last e is uh."]]

SEC = [None,
       [{"deck": D, "n": [0, 3]}, {"deck": D, "n": [5, 10]}, {"deck": D, "n": [16, 18]}, {"name": "Vowel letters", "cards": VL}],
       [{"deck": D, "n": [3, 5]}, {"deck": D, "n": [10, 16]}, {"name": "Letter groups", "cards": LG}],
       {"name": "Whole words", "cards": WW},
       None]

edit('lessons-1.js', [
 ('    blurb: "Read the 29 letters and the pronunciation line under every Norwegian phrase.",\n    deck: "Sounds and spelling",\n    body: `',
  '    blurb: "Read the 29 letters and the pronunciation line under every Norwegian phrase.",\n    deck: "Sounds and spelling",\n    sections: ' + J(SEC) + ',\n    body: `'),
 ('{{ex:være|VAE:-ruh|to be}}\n<h3>How to read the line under a phrase</h3>',
  '{{ex:være|VAE:-ruh|to be}}\n<p>These 18 consonants sound much as in English most of the time (<b>c, q, w, x</b> and <b>z</b> turn up mainly in borrowed words and names). The exceptions come later in this lesson. Tap a letter to hear it.</p>\n{{tiles:b=b c=s d=d f=f g=g h=h k=k l=l m=m n=n p=p q=k s=s t=t v=v w=v x=ks z=s}}\n<h3>How to read the line under a phrase</h3>'),
 ('<p><b>tak</b> holds the a, and <b>takk</b> does not: a roof, and thanks. <b>hei</b> writes ei as ai. <b>student</b> stresses the last syllable, the one in capitals.</p>\n<h3>hy, sh, and what the line leaves out</h3>',
  '<p><b>tak</b> holds the a, and <b>takk</b> does not: a roof, and thanks. <b>hei</b> writes ei as ai. <b>student</b> stresses the last syllable, the one in capitals.</p>\n<h3>Nine vowels, long or short</h3>\n<p>Norwegian has nine vowels: <b>a, e, i, o, u, y, æ, ø, å</b>. Each one can be long or short. A stressed vowel before one consonant is usually long. Before a double consonant, or two different consonants, it is short: <b>tak</b>, a roof, and <b>takk</b>, thanks. An unstressed e at the end of a word is a light uh: <b>komme</b>. The letter o usually has one of two sounds: long oo in <b>bok</b>, short oh in <b>komme</b>. A few words, like <b>over</b> and <b>sove</b>, say oh even when the o is long. Two vowels can share one syllable: <b>ei</b> is ai, as in <b>hei</b>, and <b>øy</b> and <b>au</b> glide the same way. Tap a vowel to hear it.</p>\n{{tiles:a=ah e=eh i=ee o u y æ ø å ei øy au=aeu}}\n{{ex:hus|hue:s|a house}}\n{{ex:ny|new:|new}}\n<h3>hy, sh, and what the line leaves out</h3>'),
 ('{{ex:norsk|nohshk|Norwegian}}\n<h3>Two patterns to keep</h3>',
  '{{ex:norsk|nohshk|Norwegian}}\n<p>k before i, y, ei or øy is usually that same hy: <b>kino</b>. sk before them is sh: <b>ski</b>. g before them is y: <b>gi</b>, to give, and so is gj: <b>gjøre</b>, to do. tj is hy, like kj: <b>tjue</b>, twenty. h is silent in <b>hv</b> and <b>hj</b>: <b>hva</b> starts with v, and <b>hjelpe</b> with y. A d at the end of a word, after a vowel or in ld, nd and rd, is often silent: <b>med</b>, <b>kald</b>, <b>bord</b>. Tap a spelling to hear it.</p>\n{{tiles:kj skj sj rs hv hj j r}}\n<h3>Read whole words</h3>\n<p>Now put the pieces together. Read a word in three steps. First find the letter groups: kj, skj, sj, rs, hv, hj, and k, sk or g before i or y. Then give each vowel its length: usually long before one consonant, short before two. Some short words break this (hjem, han, til), and o or a before rd or rt often stays long (bord). Last, drop the silent letters. So <b>kjøtt</b> is hy, a short ø, and t: hyoet. <b>hvit</b> is v, a long i, and t: vee:t. Each card\'s note breaks the word into its pieces. Say the word aloud before you flip it.</p>\n{{ex:kjøtt|hyoet|meat}}\n{{ex:hvit|vee:t|white}}\n<h3>Two patterns to keep</h3>'),
])

/* en-no lessons 1–9 (alphabet … questions). Written by EN-NO-1; every pron is stdout from tools/target/no/respell.js. */
module.exports = [
  {
    id: "alphabet",
    title: "The alphabet: æ, ø, å",
    blurb: "Read the 29 letters and the pronunciation line under every Norwegian phrase.",
    deck: "Sounds and spelling",
    body: `
<p>Norwegian uses the English alphabet and then three more letters: <b>æ, ø, å</b>. They are letters, with their own keys, not accents on a or o. There are 29 in all. Their names, in order, are: a, be, se, de, e, eff, ge, hå, i, je, kå, ell, em, en, o, pe, ku, err, ess, te, u, ve, dobbelt-ve, eks, y, sett, æ, ø, å. Vowels are named as their sound. c is se, q is ku, w is dobbelt-ve, and z is sett.</p>
<div class="tbl"><table><tr><th>Letter</th><th>In the aid</th><th>Do not read it as</th></tr><tr><td class="k">æ</td><td>ae</td><td>the English letters a and e</td></tr><tr><td class="k">ø</td><td>oe</td><td>an o you can skip the mark on</td></tr><tr><td class="k">å</td><td>oh</td><td>a plain a</td></tr></table></div>
{{ex:båt|boh:t|a boat}}
{{ex:være|VAE:-ruh|to be}}
<h3>How to read the line under a phrase</h3>
<p>Under every phrase there is a pronunciation line in English letters. Listen first, then use the line to check.</p>
<ul><li>CAPITALS mark the stressed syllable. Most words stress the first syllable. A one-syllable word is all lowercase.</li><li>A colon means hold the vowel, with no English glide. Stay on the vowel.</li><li>The tokens are ah, eh, ee, oo, oh, ue, ew, ae, oe, and uh for an unstressed e. oo is a long o, as in <b>bok</b>. oh is å, and also a short o. ue is u, the end of "new", tighter, with no glide. ew is y, an ee with rounded lips. ae is æ. oe is ø.</li></ul>
{{ex:bok|boo:k|a book}}
{{ex:tak|tah:k|a roof}}
{{ex:takk|tahk|thanks}}
{{ex:hei|hai|hi}}
{{ex:student|stue-DEHNT|a student}}
<p><b>tak</b> holds the a, and <b>takk</b> does not: a roof, and thanks. <b>hei</b> writes ei as ai. <b>student</b> stresses the last syllable, the one in capitals.</p>
<h3>hy, sh, and what the line leaves out</h3>
<p><b>hy</b> is the kj-sound, the h of "huge". It is not a k, and it is not sh. <b>sh</b> is skj, sj, and rs. <b>j</b> is the y of "yes". <b>r</b> is a tap, not the American r, and the line still writes r. Pitch, the two word tones, lives only in the audio. The line never marks it.</p>
{{ex:kjøpe|HYOE:-puh|to buy}}
{{ex:norsk|nohshk|Norwegian}}
<h3>Two patterns to keep</h3>
<p>Two blocks come back all through the course, so copy them now. <b>bok</b> is feminine: a book is <b>ei bok</b>. <b>båt</b> is masculine: a boat is <b>en båt</b>. A statement that starts with today puts the verb next: <b>I dag jobber jeg</b>, today I work. <b>i dag</b> is the first element, and <b>jobber</b> is the second. That is verb second.</p>
{{ex:ei bok|ai boo:k|a book}}
{{ex:I dag jobber jeg.|ee: dah:g YOHB-uhr yai|Today I work.}}
<div class="tip"><b>Most common mistake:</b> reading å as a plain a, and æ as the English letters a and e. <b>bat</b> for a boat → <b>båt</b>. The three extra letters are letters. Missing one is wrong, not "almost".</div>
`,
    check: [
      ["What are æ, ø and å?", ["Accents you may skip", "Three letters of the alphabet", "The same as ae, oe and aa", "Marks that show stress"], 1, "æ, ø and å are letters. They are not accents on a or o, and ae, oe, aa are not accepted spellings."],
      ["What does a colon in the pronunciation line mean?", ["Hold the vowel, with no glide", "This syllable is stressed", "The next letter is silent", "The word is a question"], 0, "A colon means the vowel is long. tak (tah:k) holds the a; takk (tahk) does not."],
      ["What do CAPITALS in the pronunciation line mark?", ["A person's name", "A long vowel", "A silent letter", "The stressed syllable"], 3, "Capitals mark stress. Most words stress the first syllable; student stresses the last."]
    ],
    practice: [
      ["mc", "Which word is a boat?", "båt", "bat", "bok", "tak", "båt means a boat. The letter å is oh, not a plain a.", "!strict"],
      ["mc", "What does the colon in tah:k tell you to do?", "Hold the vowel", "Keep the vowel short", "Stress a second syllable", "Drop the last letter", "A colon means the vowel is long. tak holds the a; takk is short."],
      ["mc", "Where is student stressed?", "On the last syllable", "On the first syllable", "On both syllables", "On neither syllable", "Capitals mark the stress. In student the capitals sit on the last syllable."],
      ["mc", "hy in the pronunciation line is…", "the kj-sound, the h of huge", "a k followed by a y", "the sh-sound", "a silent h", "hy is the kj-sound. It is not k, and it is not sh."],
      ["mc", "Which token is the letter å?", "oh", "ah", "oo", "ae", "å is oh. ah is a, oo is a long o, and ae is æ."],
      ["or", "a book", "ei bok", "en", "bok is feminine: ei bok."],
      ["or", "a boat", "en båt", "ei", "båt is masculine: en båt."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "er", "Verb second: i dag is the first element, then jobber."],
      ["fi", "__ bok", "a book", "ei", "en|et|a", "bok is feminine: the article is ei."],
      ["fi", "en __", "a boat", "båt", "bat|bok|tak", "båt is masculine: en båt. The letter å is not a.", "!strict"],
      ["fi", "__ jobber jeg.", "Today I work. (start with i dag)", "I dag", "Jeg|bok|er", "Verb second: i dag is the first element, then jobber."],
      ["ty", "a book", "ei bok", "bok · feminine", "en", "bok is feminine: ei bok."],
      ["ty", "a boat", "en båt", "båt · masculine", "bat", "båt is masculine: en båt.", "!strict"],
      ["ty", "Today I work. (start with i dag)", "I dag jobber jeg.", "i dag · jobbe · verb next", "er", "Verb second: i dag first, then jobber, then jeg."]
    ]
  },
  {
    id: "vowels",
    title: "Long and short vowels",
    blurb: "Hear and say long and short vowels, including o, u, y, and å.",
    deck: "Sounds and spelling",
    body: `
<p>English stretches a vowel to show feeling. Norwegian length is part of the word. Hold a vowel and you may have said something else. The pronunciation line marks a long vowel with a colon, and it never adds an English glide. You stay on the vowel until the consonant.</p>
<h3>One consonant, or two</h3>
<p>A stressed vowel followed by one consonant is usually long. A double consonant, or two different consonants, keeps it short. The line writes the double consonant once: the shortness is already in the missing colon.</p>
{{ex:tak|tah:k|a roof}}
{{ex:takk|tahk|thanks}}
{{ex:vin|vee:n|wine}}
{{ex:vinn|veen|win}}
<p><b>tak</b> is a roof, and the a is long. <b>takk</b> is thanks, and the a is short. <b>vin</b> is wine, long i. <b>vinn</b> is win, short i. If you say every vowel short, the way a careful English reader often does, tak and takk fall together.</p>
<h3>The letter o</h3>
<p>This is the vowel English speakers misread first. A long o is oo, a pure "oh" with rounded lips and no w at the end. <b>bok</b>, a book, is boo:k. It is not the short o of English "bok". A short o is usually oh, the same token as the letter å. <b>komme</b>, to come, has a short o, and the double m is what keeps it short.</p>
{{ex:bok|boo:k|a book}}
{{ex:komme|KOHM-uh|to come}}
<h3>u, y, and å</h3>
<p>u has no English letter. The token ue is the end of "new", tighter, and with no glide. <b>hus</b> is a house. y is ew: say ee and round your lips. <b>ny</b> is new, and <b>syk</b> is ill. å is oh, a different letter from a. <b>tå</b> is a toe. <b>ta</b> is take. The app will treat a missing å as if it were a plain a, so when å is the difference, it has to be exact.</p>
{{ex:hus|hue:s|a house}}
{{ex:ny|new:|new}}
{{ex:syk|sew:k|ill}}
{{ex:tå|toh:|a toe}}
{{ex:ta|tah:|take}}
<h3>The small word in front</h3>
<p><b>hus</b> is neuter, so a house is <b>et hus</b>. You already have <b>ei bok</b> (feminine) and <b>en båt</b> (masculine). The practice keeps those, and it keeps the verb-second sentence <b>I dag jobber jeg</b>.</p>
{{ex:et hus|eht hue:s|a house}}
<div class="tip"><b>Most common mistake:</b> making every vowel short, and reading bok with the English short o. <b>takk</b> said for a roof → <b>tak</b>, with the a held. English "bok" → <b>bok</b> with a long oo.</div>
`,
    check: [
      ["What is the difference between tak and takk?", ["tak has a long a, takk has a short a", "They mean the same thing", "takk has a long a, tak has a short a", "tak is a greeting and takk is a name"], 0, "One consonant leaves the vowel long (tak, a roof). A double consonant keeps it short (takk, thanks)."],
      ["How do you read the o in bok?", ["Like the o in English hot", "Like the a in father", "As oo, a long o with no w at the end", "The o is silent"], 2, "A long o is oo. bok is a book, boo:k, not the short o of English bok."],
      ["Which word means a toe?", ["ta", "tak", "tå", "takk"], 2, "tå, with å, is a toe. ta, with a plain a, means take."]
    ],
    practice: [
      ["mc", "Which word has a long a?", "tak", "takk", "vinn", "komme", "tak has one k, so the a is long. takk and vinn are short."],
      ["mc", "Which word has a short i?", "vinn", "vin", "tak", "ny", "vinn doubles the n, so the i is short. vin is long."],
      ["mc", "The long o of bok is which token?", "oo", "oh", "ah", "uh", "Long o is oo. bok is a book, not the short o of English bok."],
      ["mc", "Which word means a toe?", "tå", "ta", "tak", "takk", "tå means a toe. ta, with a plain a, means take.", "!strict"],
      ["mc", "The y in ny sounds like…", "ee said with rounded lips", "the i in sit", "the o in go", "the a in father", "y is ew: an ee with rounded lips. ny means new."],
      ["or", "a house", "et hus", "en", "hus is neuter: et hus."],
      ["or", "a book", "ei bok", "et", "bok is feminine: ei bok."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "kommer", "Verb second: i dag is the first element, then jobber."],
      ["fi", "et __", "a house", "hus", "bok|båt|vin", "hus is neuter: et hus."],
      ["fi", "t__", "a toe", "å", "a|ak|akk", "å is its own letter. tå is a toe; ta means take.", "!strict"],
      ["fi", "__", "thanks (the short a)", "takk", "tak|ta|vin", "takk has a short a. tak, with one k, is a roof."],
      ["ty", "a house", "et hus", "hus · neuter", "en", "hus is neuter: et hus."],
      ["ty", "a book", "ei bok", "bok · feminine", "et", "bok is feminine: ei bok."],
      ["ty", "to come", "komme", "komme · short o", "bok", "komme has a short o, the oh of a short o, because of the double m."]
    ]
  },
  {
    id: "consonants",
    title: "Consonants: kj, skj and silent letters",
    blurb: "Say kj and skj apart, drop the silent letters, and read norsk and kjøpe from the line.",
    deck: "Sounds and spelling",
    body: `
<p>Most consonants match English. <b>kjøpe</b> and <b>norsk</b> do not, and the line shows what to say instead.</p>
<h3>hy and sh</h3>
<p><b>kj</b> is hy, the h of "huge". So is k before i, y, ei or øy, and so is tj. <b>kjøpe</b>, to buy, and <b>kino</b>, a cinema, both start with hy. <b>skj</b> and <b>sj</b> are sh. So is sk before those same front vowels, and so is rs. <b>skjema</b>, a form, starts with sh. <b>norsk</b> ends with sh, because rs is one sound. <b>j</b> by itself is y, as in <b>ja</b>.</p>
{{ex:kjøpe|HYOE:-puh|to buy}}
{{ex:kino|HYEE:-noo|a cinema}}
{{ex:skjema|SHEH:-mah|a form}}
{{ex:norsk|nohshk|Norwegian}}
<p>Many younger speakers say kjøpe with sh. You will hear it. When you speak, keep hy. The line keeps kj and sh apart.</p>
<h3>Silent h and silent d</h3>
<p>h goes quiet in <b>hv</b> and <b>hj</b>. <b>hva</b> is what, and it starts with v. <b>hjelpe</b>, to help, starts with the y of j. A d after a vowel at the end of a word is quiet: <b>med</b>, with. In <b>ld</b>, <b>nd</b> and <b>rd</b> at the end, the d goes quiet too. <b>kald</b>, cold, ends in l. <b>vind</b>, wind, ends in n and sounds like <b>vinn</b>, the short one, not like <b>vin</b>. <b>bord</b>, a table, keeps a long vowel and drops the d: the line still shows the r.</p>
{{ex:hva|vah:|what}}
{{ex:hjelpe|YEHL-puh|to help}}
{{ex:med|meh:|with}}
{{ex:kald|kahl|cold}}
{{ex:bord|boo:r|a table}}
{{ex:vind|veen|wind}}
<p>g before i, y or ei is that same y. <b>gi</b> means to give, and it does not start with a hard g.</p>
{{ex:gi|yee:|to give}}
<h3>What the line does not try to show</h3>
<p>The definite ending on <b>bil</b>, a car, is -en: <b>bilen</b>, the car. The line gives two syllables, the careful form. Fast speech often shrinks it. When r at the end of a word meets t, d, n, l or s on the next word, the sounds pull together. The line does not show that join.</p>
{{ex:bilen|BEE:-luhn|the car}}
<p><b>bord</b> is neuter, so a table is <b>et bord</b>. <b>kino</b> is masculine, so a cinema is <b>en kino</b>. The verb-second sentence is still <b>I dag jobber jeg</b>.</p>
{{ex:et bord|eht boo:r|a table}}
{{ex:en kino|ehn HYEE:-noo|a cinema}}
<div class="tip"><b>Most common mistake:</b> starting kjøpe with a k, and saying norsk with an r plus an s. <b>kjøpe</b> with a k → <b>kjøpe</b> with hy. <b>norsk</b> with r plus s → <b>norsk</b> ending in sh.</div>
`,
    check: [
      ["How does kjøpe start?", ["With a k, as in English", "With hy, the h of huge", "With sh", "With a silent k"], 1, "kj is hy. kjøpe does not start with a k or with sh."],
      ["What happens to rs in norsk?", ["It is an r followed by an s", "It is sh, one sound", "Both letters are silent", "It is the kj-sound, hy"], 1, "rs is sh. norsk ends in that sh, not in r plus s."],
      ["Which letter is silent in med?", ["m", "e", "d", "None of them"], 2, "A d after a vowel at the end of a word is silent. med ends on the vowel."]
    ],
    practice: [
      ["mc", "kjøpe starts with which sound?", "hy", "k", "sh", "y", "kj is hy, the h of huge, not a k and not sh."],
      ["mc", "norsk ends with which sound?", "sh", "r plus s", "a plain k", "hy", "rs is sh. norsk ends in that one sound."],
      ["mc", "The h in hva is…", "silent", "said, as in English help", "the sh-sound", "the kj-sound", "h in hv is silent. hva starts with v."],
      ["mc", "The d in med is…", "silent", "said, as in English day", "a sign that the vowel is long", "the sh-sound", "A final d after a vowel is silent. med ends on the vowel."],
      ["mc", "skjema starts with which sound?", "sh", "hy", "sk", "k", "skj is sh. hy would be the kj-sound, as in kjøpe."],
      ["or", "a table", "et bord", "en", "bord is neuter: et bord."],
      ["or", "a cinema", "en kino", "ei", "kino is masculine: en kino."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "kjøper", "Verb second: i dag is the first element, then jobber."],
      ["fi", "et __", "a table", "bord", "bok|hus|kino", "bord is neuter: et bord."],
      ["fi", "__", "to buy", "kjøpe", "kino|skjema|med", "kjøpe starts with the kj-sound, hy, not with k."],
      ["fi", "__", "with", "med", "kald|bord|hva", "The d in med is silent. med means with."],
      ["ty", "a table", "et bord", "bord · neuter", "en", "bord is neuter: et bord."],
      ["ty", "the car", "bilen", "bil · definite ending -en", "bila", "The definite ending is -en: bilen. bil is masculine."],
      ["ty", "Today I work. (start with i dag)", "I dag jobber jeg.", "i dag · jobbe · verb next", "kjøper", "Verb second: i dag first, then jobber, then jeg."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings: hei, takk, ha det",
    blurb: "Greet someone, say thanks, please and goodbye, and use du with one person.",
    deck: "Greetings and courtesy",
    body: `
<p><b>Hei</b> works with anyone, at any hour. It is hi. To match the time of day, add the greeting that names it. You use the same words with a friend, a stranger and the person behind a counter.</p>
<h3>Morning, afternoon, evening, bed</h3>
<p>English says "good morning". Norwegian says <b>God morgen</b>. <b>God dag</b> is good afternoon, for the middle of the day. In the evening, when you arrive, you say <b>God kveld</b>. <b>God natt</b> is good night, for when you or someone else is going to bed. It is not the greeting for walking in the door.</p>
{{ex:Hei!|hai|Hi!}}
{{ex:God morgen.|goo: MOHR-guhn|Good morning.}}
{{ex:God dag.|goo: dah:g|Good afternoon.}}
{{ex:God kveld.|goo: kvehl|Good evening.}}
{{ex:God natt.|goo: naht|Good night.}}
<p>You can put a name after the greeting. <b>Hei, Anna</b> and <b>God morgen</b> are enough. You do not add a title, and you do not switch greetings to sound more polite. Polite here is the ordinary greeting, said to the person in front of you.</p>
<h3>Thanks, please, excuse me, goodbye</h3>
<p><b>Takk</b> is thanks. <b>Vær så snill</b> is please. <b>Unnskyld</b> is excuse me, and it is also sorry when you bump into someone. To leave, say <b>Ha det bra</b>, bye. The short form is <b>Ha det</b>. Both are friendly. You can say them to staff as easily as to a friend.</p>
{{ex:Takk.|tahk|Thanks.}}
{{ex:Vær så snill.|vae:r soh: sneel|Please.}}
{{ex:Unnskyld.|UEN-shewl|Excuse me.}}
{{ex:Ha det bra.|hah: deh: brah:|Bye.}}
<h3>du, and the you you only read</h3>
<p>English has one "you". The you you will say, to one person, is <b>du</b>. That includes a stranger, a shop assistant and a boss. It is ordinary, not rude. <b>dere</b> is you for several people, and it waits until the present tense. When a prompt means one person, it does not say "formal" or "informal". It just means du.</p>
<p>In formal writing you may see <b>De</b>, <b>Dem</b>, <b>Deres</b>, with a capital. They still exist when a writer wants extra distance, and they can sound stiff. You recognize them. You do not answer with them, and you do not put them on your own sentences. You answer with du.</p>
<p>The two blocks from the first lessons stay in the practice: <b>ei bok</b> (feminine), <b>en båt</b> (masculine), and <b>I dag jobber jeg</b> (verb second).</p>
<div class="tip"><b>Most common mistake:</b> a formal you on every line, and good night at the door. <b>De</b> to a shop assistant → <b>du</b>. <b>God natt</b> when you arrive in the evening → <b>God kveld</b>.</div>
`,
    check: [
      ["You walk into a friend's house in the evening. What do you say?", ["God natt.", "God kveld.", "God morgen.", "Ha det bra."], 1, "Arriving in the evening is God kveld. God natt is for going to bed."],
      ["When do you say God natt?", ["When you arrive for dinner", "Any time after noon", "When you answer the phone", "When you or someone else is going to bed"], 3, "God natt means you are going to bed. It is not a greeting for arriving."],
      ["Which you do you say to one shop assistant?", ["du", "De", "dere", "Dem"], 0, "du is the you for one person, including staff. De is something you recognize, not something you say."]
    ],
    practice: [
      ["mc", "You arrive at a café in the evening. You say…", "God kveld.", "God natt.", "God morgen.", "Ha det bra.", "God kveld is the evening greeting. God natt is for going to bed."],
      ["mc", "You are going to bed. You say…", "God natt.", "God kveld.", "God dag.", "Hei.", "God natt means you are going to bed, not that you have just arrived."],
      ["mc", "Thanks =", "Takk.", "Unnskyld.", "Vær så snill.", "Ha det.", "Takk means thanks. Unnskyld is excuse me, and Vær så snill is please."],
      ["mc", "Please =", "Vær så snill.", "Takk.", "Unnskyld.", "God dag.", "Vær så snill is please."],
      ["mc", "To one shop assistant, you is…", "du", "De", "dere", "Dem", "du is the you for one person, including staff. De is only for reading."],
      ["or", "a book", "ei bok", "en", "bok is feminine: ei bok."],
      ["or", "a boat", "en båt", "ei", "båt is masculine: en båt."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "er", "Verb second: i dag is the first element, then jobber."],
      ["fi", "God __.", "Good morning.", "morgen", "natt|kveld|dag", "God morgen is good morning. God natt is for bed, and God dag is good afternoon."],
      ["fi", "Ha det __.", "Bye.", "bra", "god|takk|hei", "Ha det bra is bye."],
      ["fi", "__ så snill.", "Please.", "Vær", "Ha|Takk|God", "Vær så snill is please."],
      ["ty", "Good morning. (say god morgen)", "God morgen.", "morgen · morning", "natt", "God morgen is the morning greeting. God natt is for going to bed."],
      ["ty", "a book", "ei bok", "bok · feminine", "en", "bok is feminine: ei bok."],
      ["ty", "Today I work. (start with i dag)", "I dag jobber jeg.", "i dag · jobbe · verb next", "er", "Verb second: i dag first, then jobber, then jeg."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Say your name, where you are from, where you live, and what you do.",
    deck: "About me",
    body: `
<p>Four sentences carry a first conversation. You say your name, where you come from, where you live, and what you do. The people in the examples are Anna, Lars and Kari, and the cities are Oslo, Bergen and Minneapolis. You use <b>du</b> if you need "you", including with staff. There is no formal version of these lines.</p>
<h3>Your name</h3>
<p><b>Jeg heter Anna</b> means my name is Anna. <b>heter</b> already means "am called", so you do not put <b>er</b> in the middle. The same sentence works for any name: <b>Jeg heter Lars</b>.</p>
{{ex:Jeg heter Anna.|yai HEH:-tuhr AHN-ah|My name is Anna.}}
<p>When you meet someone, <b>Hyggelig å hilse på deg</b> is nice to meet you. <b>å</b> before a verb is "to", and <b>deg</b> is the object form of du. Learn the whole phrase as a block. The pieces come back later.</p>
{{ex:Hyggelig å hilse på deg.|HEWG-uh-lee oh: HEEL-suh poh: dai|Nice to meet you.}}
<h3>From, and in</h3>
<p>Where you are from is <b>kommer fra</b>. Where you live is <b>bor i</b>. A city takes <b>i</b> for "in" and <b>fra</b> for "from". You do not swap them. In the middle of a sentence, <b>i</b> is lowercase. It is not a capital the way English "I" is. When the sentence starts with it, the first letter is a capital, like any sentence.</p>
{{ex:Jeg kommer fra Oslo.|yai KOHM-uhr frah: OOS-loo|I'm from Oslo.}}
{{ex:Jeg bor i Minneapolis.|yai boo:r ee: mee-nee-AH-poh-lees|I live in Minneapolis.}}
<p>You can put the place first. Then the verb stays in second place, and <b>jeg</b> follows it. <b>I Oslo bor jeg</b> is the same news as <b>Jeg bor i Oslo</b>, with the city as the first element. That is verb second again.</p>
{{ex:I Oslo bor jeg.|ee: OOS-loo boo:r yai|I live in Oslo.}}
<h3>What you do, and the name of the language</h3>
<p>A job with no adjective takes no article. <b>Jeg er student</b> is I'm a student. <b>Jeg er lærer</b> is I'm a teacher. English wants an "a" there. Leave it out. <b>student</b> is masculine when you do use the article, as in the phrase <b>en student</b>, but the job sentence itself does not take it. The full pattern, including what happens when an adjective is there, is in the next lessons.</p>
{{ex:Jeg er student.|yai ae:r stue-DEHNT|I'm a student.}}
{{ex:Jeg er lærer.|yai ae:r LAE:-ruhr|I'm a teacher.}}
<p>The language is <b>norsk</b>, with a small n. <b>Jeg er norsk</b> means I'm Norwegian. Languages, like days, are lowercase. Norway also writes Nynorsk, and people speak dialects; this course teaches Bokmål.</p>
{{ex:Jeg er norsk.|yai ae:r nohshk|I'm Norwegian.}}
<div class="tip"><b>Most common mistake:</b> putting an article on the job, and a capital on the language. <b>Jeg er en student</b> → <b>Jeg er student</b>. <b>Norsk</b> in the middle of a sentence → <b>norsk</b>.</div>
`,
    check: [
      ["How do you say My name is Anna?", ["Jeg er heter Anna.", "Jeg heter er Anna.", "Jeg heter Anna.", "Anna er heter."], 2, "heter already means am called. Jeg heter Anna has no er in the middle."],
      ["How do you say I'm a student?", ["Jeg er en student.", "Jeg er student.", "Jeg er studenten.", "Jeg student."], 1, "A job with no adjective takes no article: Jeg er student."],
      ["How is the language name written in a sentence?", ["Norsk", "NORSK", "norsk", "Nynorsk"], 2, "norsk is lowercase. Nynorsk is the other written language, and this course does not drill it."]
    ],
    practice: [
      ["mc", "My name is Anna =", "Jeg heter Anna.", "Jeg er heter Anna.", "Jeg heter er Anna.", "Anna heter er.", "heter already means am called. No er goes in the middle."],
      ["mc", "I'm a student. (no article) =", "Jeg er student.", "Jeg er en student.", "Jeg er studenten.", "Jeg student er.", "A job with no adjective takes no article: Jeg er student."],
      ["mc", "I'm from Oslo. (use kommer) =", "Jeg kommer fra Oslo.", "Jeg kommer i Oslo.", "Jeg bor fra Oslo.", "Jeg er kommer fra Oslo.", "kommer fra is come from. A city takes fra, not i."],
      ["mc", "I live in Minneapolis =", "Jeg bor i Minneapolis.", "Jeg bor fra Minneapolis.", "Jeg kommer i Minneapolis.", "Jeg bor på Minneapolis.", "bor i is live in. A city takes i."],
      ["mc", "Nice to meet you =", "Hyggelig å hilse på deg.", "Ha det bra.", "God natt.", "Jeg er student.", "Hyggelig å hilse på deg is nice to meet you. deg is the object form of du."],
      ["or", "a student", "en student", "ei", "student is masculine: en student."],
      ["or", "a book", "ei bok", "en", "bok is feminine: ei bok."],
      ["or", "I live in Oslo. (start with i Oslo)", "I Oslo | bor | jeg.", "fra", "Verb second: i Oslo is the first element, then bor."],
      ["fi", "Jeg __ Anna.", "My name is Anna.", "heter", "er|bor|kommer", "heter means am called. Jeg heter Anna."],
      ["fi", "Jeg kommer __ Oslo.", "I'm from Oslo.", "fra", "i|på|med", "From a city is fra: Jeg kommer fra Oslo."],
      ["fi", "Jeg bor __ Oslo.", "I live in Oslo.", "i", "fra|på|med", "Live in a city is bor i."],
      ["ty", "My name is Lars. (use heter)", "Jeg heter Lars.", "hete · Lars", "er", "heter already means am called. Jeg heter Lars."],
      ["ty", "a student", "en student", "student · masculine", "ei", "student is masculine: en student."],
      ["ty", "I live in Oslo. (start with i Oslo)", "I Oslo bor jeg.", "i Oslo · bo · verb next", "fra", "Verb second: i Oslo is the first element, then bor."]
    ]
  },
  {
    id: "gender",
    title: "en, ei, et: three genders",
    blurb: "Give every noun its en, ei or et, and the matching definite ending.",
    deck: "People and family",
    body: `
<p>English has one word for "a" and one word for "the", and it treats every noun the same. Norwegian sorts every noun into masculine, feminine or neuter. The gender is part of the noun, not a guess from the meaning. A book is feminine. A car is masculine. A house is neuter. You learn the noun with its article, as one unit.</p>
<h3>a: the indefinite article</h3>
<p>The indefinite article is the word for "a". Call a noun an en-word, an ei-word or an et-word once. The names to keep are masculine, feminine and neuter.</p>
<div class="tbl"><table><tr><th></th><th>a</th><th>the</th></tr><tr><td>masculine</td><td class="k">en bil</td><td class="k">bilen</td></tr><tr><td>feminine</td><td class="k">ei bok</td><td class="k">boka</td></tr><tr><td>neuter</td><td class="k">et hus</td><td class="k">huset</td></tr></table></div>
{{ex:en bil|ehn bee:l|a car}}
{{ex:ei bok|ai boo:k|a book}}
{{ex:et hus|eht hue:s|a house}}
<p><b>en</b> goes with masculine nouns, <b>ei</b> with feminine nouns, <b>et</b> with neuter nouns. One article for everything is the mistake. <b>et bok</b> and <b>en hus</b> are wrong.</p>
<h3>the: the definite ending</h3>
<p>English puts "the" in front. Norwegian puts an ending on the noun. Masculine takes <b>-en</b>, feminine takes <b>-a</b>, neuter takes <b>-et</b>. The t of the neuter ending is silent, which is why the line under <b>huset</b> has no t.</p>
{{ex:bilen|BEE:-luhn|the car}}
{{ex:boka|BOO:-kah|the book}}
{{ex:huset|HUE:-suh|the house}}
<p>On a sign, in the news, or from some speakers, a feminine noun may show up as <b>en bok</b> and <b>boken</b>. That is common gender. You can read it. When you type, you still write <b>ei bok</b> and <b>boka</b>.</p>
<h3>People</h3>
<p>The same three genders sit on people. A girl is feminine, a boy is masculine, a child is neuter. Mother takes the feminine ending, father the masculine one. Brother and sister follow the same rule: <b>en bror</b>, <b>broren</b>, and <b>ei søster</b>, <b>søstera</b>.</p>
<div class="tbl"><table><tr><th></th><th>a</th><th>the</th></tr><tr><td>girl</td><td class="k">ei jente</td><td class="k">jenta</td></tr><tr><td>boy</td><td class="k">en gutt</td><td class="k">gutten</td></tr><tr><td>child</td><td class="k">et barn</td><td class="k">barnet</td></tr><tr><td>mother</td><td class="k">ei mor</td><td class="k">mora</td></tr><tr><td>father</td><td class="k">en far</td><td class="k">faren</td></tr></table></div>
{{ex:ei jente|ai YEHN-tuh|a girl}}
{{ex:en gutt|ehn guet|a boy}}
{{ex:et barn|eht bah:rn|a child}}
{{ex:mora|MOO:-rah|the mother}}
<h3>A big book, a little book</h3>
<p>An adjective in front of the noun does not grow a feminine ending. <b>stor</b> stays <b>stor</b> for masculine and feminine. Neuter adds <b>-t</b>: <b>et stort hus</b>. Do not build <b>ei stora bok</b>. The one exception in this lesson is <b>liten</b>. Feminine uses <b>lita</b>, and neuter uses <b>lite</b>.</p>
{{ex:ei stor bok|ai stoo:r boo:k|a big book}}
{{ex:et stort hus|eht stoo:rt hue:s|a big house}}
{{ex:ei lita bok|ai LEE:-tah boo:k|a little book}}
<p>Verb second is still the other block: <b>I dag jobber jeg</b>.</p>
<div class="tip"><b>Most common mistake:</b> one article for every noun, and en on a book. <b>en bok</b> → <b>ei bok</b>. <b>boken</b> → <b>boka</b>. Type ei and -a for a feminine noun.</div>
`,
    check: [
      ["Which is a book?", ["en bok", "et bok", "ei bok", "boken"], 2, "bok is feminine: ei bok. en bok and boken are common gender, for reading, not for typing."],
      ["Which is the house?", ["huset", "husen", "husa", "et hus"], 0, "hus is neuter. The definite ending is -et, and that t is silent."],
      ["Which is a big book?", ["ei stora bok", "en stor bok", "et stor bok", "ei stor bok"], 3, "The adjective stays stor. bok is feminine, so the article is ei: ei stor bok."]
    ],
    practice: [
      ["mc", "a book =", "ei bok", "en bok", "et bok", "boken", "bok is feminine: ei bok. en bok is common gender, for reading only."],
      ["mc", "the house =", "huset", "husen", "husa", "et hus", "hus is neuter. The definite ending is -et: huset."],
      ["mc", "a girl =", "ei jente", "en jente", "et jente", "jenta", "jente is feminine: ei jente. jenta means the girl."],
      ["mc", "a big book =", "ei stor bok", "ei stora bok", "en stor bok", "et stor bok", "The adjective stays stor. bok is feminine: ei stor bok."],
      ["mc", "a little book =", "ei lita bok", "ei liten bok", "en lita bok", "et lita bok", "liten becomes lita with a feminine noun: ei lita bok."],
      ["or", "a big book", "ei stor bok", "stora", "bok is feminine: ei stor bok. The adjective takes no feminine ending."],
      ["or", "a big house", "et stort hus", "stor", "hus is neuter: et stort hus. The adjective takes -t."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "er", "Verb second: i dag is the first element, then jobber."],
      ["fi", "__ bok", "a book", "ei", "en|et|a", "bok is feminine: the article is ei."],
      ["fi", "bok__", "the book", "a", "en|et|e", "The definite ending is -a: boka. bok is feminine."],
      ["fi", "ei __ bok", "a little book", "lita", "liten|lite|stor", "liten becomes lita with a feminine noun: ei lita bok."],
      ["ty", "the book", "boka", "bok · feminine · -a", "boken", "The definite ending is -a: boka. boken is common gender, not what you type."],
      ["ty", "the mother", "mora", "mor · feminine · -a", "moren", "mor is feminine. The definite ending is -a: mora."],
      ["ty", "a boy", "en gutt", "gutt · masculine", "ei", "gutt is masculine: en gutt."]
    ]
  },
  {
    id: "present",
    title: "The present tense in -r",
    blurb: "Say what people do, with one present-tense form for every person.",
    deck: "Work and study",
    body: `
<p>English changes the verb for she: she speaks, she goes. Norwegian does not. The present tense has one form, and every person uses it. That is the good news. There is no ending to pick for han, and no -s to add for hun.</p>
<h3>Add -r to the infinitive</h3>
<p>The infinitive is the å form, the form you meet in a word list: <b>å snakke</b>, to speak. Drop the å and add <b>-r</b>. <b>snakke</b> becomes <b>snakker</b>. Do not insert an extra e. <b>gå</b>, to go, becomes <b>går</b>, not gåer. The same step gives <b>jobber</b> from jobbe, <b>bor</b> from bo, <b>kommer</b> from komme, <b>heter</b> from hete, and <b>studerer</b> from studere.</p>
{{ex:å snakke|oh: SNAHK-uh|to speak}}
{{ex:Jeg snakker norsk.|yai SNAHK-uhr nohshk|I speak Norwegian.}}
{{ex:Jeg jobber.|yai YOHB-uhr|I work.}}
{{ex:Jeg studerer.|yai stue-DEH:-ruhr|I'm studying.}}
<div class="tbl"><table><tr><th>Subject</th><th>Present</th></tr><tr><td class="k">jeg, du, han, hun</td><td class="k">snakker</td></tr><tr><td class="k">vi, dere, de</td><td class="k">snakker</td></tr><tr><td>a name</td><td class="k">Anna snakker</td></tr></table></div>
{{ex:Hun snakker norsk.|huen SNAHK-uhr nohshk|She speaks Norwegian.}}
{{ex:Du snakker norsk.|due: SNAHK-uhr nohshk|You speak Norwegian.}}
<p><b>dere</b> is you for several people. A prompt that means several people says so. One person, staff included, is still <b>du</b>. <b>de</b> means they. At the start of a sentence it takes a capital, like any word. A capital <b>De</b> in formal writing can be the distant you from the greetings lesson. You still do not produce that one. <b>Jeg snakker norsk</b> covers "I speak" and "I'm speaking". There is no separate -ing form.</p>
{{ex:Dere snakker norsk.|DEH:-ruh SNAHK-uhr nohshk|You speak Norwegian. (to several people)}}
<h3>er and gjør</h3>
<p>Two verbs do not take -r. <b>å være</b>, to be, is <b>er</b> for everyone. <b>å gjøre</b>, to do something, is <b>gjør</b>. <b>Jeg gjør det</b> means I do it. <b>gjøre</b> is not the English helper "do". You will see that clearly when questions arrive. Four more verbs, <b>kan, vil, skal, må</b>, also skip the -r. They wait for a later lesson. Do not build kaner or viler.</p>
{{ex:Jeg gjør det.|yai yoe:r deh:|I do it.}}
<h3>Jobs</h3>
<p>You have already said <b>Jeg er student</b>. The same shape is <b>Hun er lærer</b>, she is a teacher. With no adjective, leave the article out. With an adjective, the article comes back, and it matches the noun. <b>lærer</b> is masculine, even when hun is the subject, so a good teacher is <b>en god lærer</b>.</p>
{{ex:Hun er lærer.|huen ae:r LAE:-ruhr|She is a teacher.}}
{{ex:Hun er en god lærer.|huen ae:r ehn goo: LAE:-ruhr|She is a good teacher.}}
<div class="tip"><b>Most common mistake:</b> a different ending for hun, and an article on a bare job. <b>Hun snakkes norsk</b> → <b>Hun snakker norsk</b>. <b>Jeg er en lærer</b> → <b>Jeg er lærer</b>.</div>
`,
    check: [
      ["How do you say She speaks Norwegian?", ["Hun snakkes norsk.", "Hun snakker norsk.", "Hun snakke norsk.", "Hun er snakker norsk."], 1, "There is one present form. hun does not add an extra -s: Hun snakker norsk."],
      ["How do you say I'm a teacher, with no adjective?", ["Jeg er en lærer.", "Jeg er lærer.", "Jeg er læreren.", "Jeg lærer er."], 1, "With no adjective, a job takes no article: Jeg er lærer."],
      ["Which verb is the present of gjøre?", ["gjører", "gjøre", "gjør", "er gjør"], 2, "gjøre does not add -r. The present is gjør, for every person."]
    ],
    practice: [
      ["mc", "She speaks Norwegian =", "Hun snakker norsk.", "Hun snakkes norsk.", "Hun snakke norsk.", "Hun er snakker norsk.", "One present form for every person: snakker. No extra -s for hun."],
      ["mc", "I'm a teacher. (no article) =", "Jeg er lærer.", "Jeg er en lærer.", "Jeg er læreren.", "Jeg lærer er.", "With no adjective, a job takes no article: Jeg er lærer."],
      ["mc", "She is a good teacher =", "Hun er en god lærer.", "Hun er lærer god.", "Hun er ei god lærer.", "Hun er god lærer.", "With an adjective the article returns. lærer is masculine: en god lærer."],
      ["mc", "You speak Norwegian. (to several people) =", "Dere snakker norsk.", "Du snakker norsk.", "Dere snakkes norsk.", "De snakker De norsk.", "Several people is dere, and the present is still snakker."],
      ["mc", "I do it =", "Jeg gjør det.", "Jeg gjører det.", "Jeg er gjør det.", "Jeg gjøre det.", "gjøre does not add -r. The present is gjør."],
      ["or", "She is a good teacher. (start with hun)", "Hun er en god lærer.", "ei", "lærer is masculine: en god lærer. The article returns with an adjective."],
      ["or", "a girl", "ei jente", "en", "jente is feminine: ei jente."],
      ["or", "I speak Norwegian. (start with jeg)", "Jeg snakker norsk.", "snakkes", "One present form for every person: snakker."],
      ["fi", "Hun __ norsk.", "She speaks Norwegian.", "snakker", "snakkes|snakke|er", "One present form: snakker. hun does not take a different ending."],
      ["fi", "Jeg __ lærer.", "I'm a teacher.", "er", "snakker|heter|bor", "A job with no adjective uses er, and no article: Jeg er lærer."],
      ["fi", "Dere __ norsk.", "You speak Norwegian. (to several people)", "snakker", "snakkes|snakke|er", "dere takes the same present form: snakker."],
      ["ty", "the car", "bilen", "bil · definite ending -en", "bila", "bil is masculine. The definite ending is -en: bilen."],
      ["ty", "a house", "et hus", "hus · neuter", "ei", "hus is neuter: et hus."],
      ["ty", "I speak Norwegian. (start with jeg)", "Jeg snakker norsk.", "snakke · norsk", "snakkes", "The present adds -r, and it is the same for every person: snakker."]
    ]
  },
  {
    id: "word-order",
    title: "Verb second: I dag jobber jeg",
    blurb: "Start with today, a day or a place, and keep the verb as the second element.",
    deck: "Days, dates and weather",
    body: `
<p>English keeps the subject in front of the verb no matter what you start with: today I work. Norwegian has a different rule, and it is the rule of ordinary statements.</p>
<h3>The verb is the second element</h3>
<p>In a statement, the conjugated verb is the second element. The conjugated verb is the one that carries the tense: <b>jobber</b>, <b>bor</b>, <b>er</b>, <b>snakker</b>. The first element can be the subject. Then the sentence looks a lot like English.</p>
{{ex:Jeg jobber i dag.|yai YOHB-uhr ee: dah:g|I work today.}}
<p>The first element can also be a time or a place. Then the verb still comes next, and the subject moves to the other side of it. <b>jeg</b> comes after the verb.</p>
{{ex:I dag jobber jeg.|ee: dah:g YOHB-uhr yai|Today I work.}}
{{ex:I Oslo bor jeg.|ee: OOS-loo boo:r yai|I live in Oslo.}}
<p>"Second" means the second element, not the second word. <b>I dag</b> is one element, even though it is two words. <b>På mandag</b> is one element. <b>I Oslo</b> is one element. <b>I dag jeg jobber</b> is the English order, and it is wrong.</p>
<h3>Days</h3>
<p>The days are <b>mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag</b>. They are lowercase. <b>på</b> plus the day is "on" that day, and the whole phrase is one element.</p>
{{ex:mandag|MAHN-dahg|Monday}}
{{ex:På mandag jobber jeg.|poh: MAHN-dahg YOHB-uhr yai|On Monday I work.}}
{{ex:Nå snakker jeg norsk.|noh: SNAHK-uhr yai nohshk|Now I speak Norwegian.}}
<p><b>nå</b> means now, and it is one element too. In the middle of a sentence, <b>i</b> and the day names stay lowercase. A capital appears because a sentence starts, not because the word is special.</p>
<h3>Weather</h3>
<p>Weather needs <b>det</b>, it. <b>Det regner</b> is it's raining. <b>Det snør</b> is it's snowing. <b>Det er kaldt</b> is it's cold. Learn <b>kaldt</b> as part of that phrase. Put today first and <b>det</b> moves after the verb, the same way <b>jeg</b> does.</p>
{{ex:Det regner.|deh: RAI-nuhr|It's raining.}}
{{ex:I dag regner det.|ee: dah:g RAI-nuhr deh:|It's raining today.}}
{{ex:Det er kaldt.|deh: ae:r kahlt|It's cold.}}
{{ex:I dag er det kaldt.|ee: dah:g ae:r deh: kahlt|It's cold today.}}
{{ex:Det snør.|deh: snoe:r|It's snowing.}}
<h3>og and men do not count</h3>
<p><b>og</b> means and, and <b>men</b> means but. They join two statements, and they do not take a place in the count. After them, start again. The next element is the first element of the new statement, and the verb follows it. You do not invert just because <b>og</b> is there.</p>
{{ex:Jeg heter Anna, og jeg bor i Oslo.|yai HEH:-tuhr AHN-ah oh yai boo:r ee: OOS-loo|My name is Anna, and I live in Oslo.}}
<div class="tip"><b>Most common mistake:</b> leaving the subject in front of the verb after a time word. <b>I dag jeg jobber</b> → <b>I dag jobber jeg</b>.</div>
`,
    check: [
      ["Which sentence means Today I work, starting with today?", ["I dag jeg jobber.", "I dag jobber jeg.", "Jeg i dag jobber.", "Jobber i dag jeg."], 1, "i dag is the first element, so jobber comes next and jeg follows the verb."],
      ["In På mandag jobber jeg, what is the first element?", ["På", "mandag", "På mandag", "jobber"], 2, "På mandag is one element, two words. jobber is the second element."],
      ["How do you write Monday?", ["Mandag", "mandag", "MANDAG", "mandagen"], 1, "Days are lowercase: mandag. A capital is for the start of a sentence, not for the day."]
    ],
    practice: [
      ["mc", "Today I work. (start with i dag) =", "I dag jobber jeg.", "I dag jeg jobber.", "Jeg i dag jobber.", "Jobber jeg i dag.", "Verb second: i dag first, then jobber, then jeg."],
      ["mc", "On Monday I work. (start with på mandag) =", "På mandag jobber jeg.", "På mandag jeg jobber.", "Mandag på jobber jeg.", "Jeg på mandag jobber.", "På mandag is one element. The verb is the second element."],
      ["mc", "It's raining today. (start with i dag) =", "I dag regner det.", "I dag det regner.", "Det i dag regner.", "I dag regner.", "Verb second: i dag first, then regner, then det."],
      ["mc", "It's cold =", "Det er kaldt.", "Det kaldt er.", "Kaldt det er.", "Det er kald.", "The weather phrase is Det er kaldt. det is it."],
      ["mc", "Which is the day name Monday?", "mandag", "mandagen", "dagen", "en dag", "The day name is mandag, lowercase, with no article and no ending."],
      ["or", "Today I work. (start with i dag)", "I dag | jobber | jeg.", "snakker", "Verb second: i dag is the first element, then jobber."],
      ["or", "I live in Oslo. (start with i Oslo)", "I Oslo | bor | jeg.", "fra", "Verb second: i Oslo is the first element, then bor."],
      ["or", "a book", "ei bok", "en", "bok is feminine: ei bok."],
      ["fi", "I dag __ jeg.", "Today I work.", "jobber", "jobbe|snakke|er", "Verb second: the verb jobber is the second element, right after i dag."],
      ["fi", "I dag regner __.", "It's raining today. (start with i dag)", "det", "jeg|du|nå", "det comes after the verb. Weather still needs det."],
      ["fi", "__ bok", "a book", "ei", "en|et|a", "bok is feminine: the article is ei."],
      ["ty", "Today it's cold. (start with i dag)", "I dag er det kaldt.", "i dag · være · kaldt", "snakker", "Verb second: i dag first, then er. det comes after the verb."],
      ["ty", "On Monday I work. (start with på mandag)", "På mandag jobber jeg.", "på mandag · jobbe", "er", "På mandag is the first element. Verb second: jobber comes next."],
      ["ty", "the girl", "jenta", "jente · feminine · -a", "jenten", "jente is feminine. The definite ending is -a: jenta."]
    ]
  },
  {
    id: "questions",
    title: "Questions: hva, hvor, and yes/no",
    blurb: "Ask what, where, who, when, how and why, and ask a yes/no question with no do.",
    deck: "Questions and connectors",
    body: `
<p>English builds most questions with "do": where do you live, do you speak Norwegian. Norwegian has no "do" in a question. It moves the verb, and the verb stays in the same present form you already know.</p>
<h3>Question words</h3>
<div class="tbl"><table><tr><th>Norwegian</th><th>English</th></tr><tr><td class="k">hva</td><td>what</td></tr><tr><td class="k">hvor</td><td>where</td></tr><tr><td class="k">hvem</td><td>who</td></tr><tr><td class="k">når</td><td>when</td></tr><tr><td class="k">hvordan</td><td>how</td></tr><tr><td class="k">hvorfor</td><td>why</td></tr></table></div>
<p><b>hva</b> is what, and <b>hvem</b> is who. They are not interchangeable. <b>Hva er det?</b> is what is that. <b>Hvem er det?</b> is who is that. <b>ja</b> is yes and <b>nei</b> is no.</p>
{{ex:Hva er det?|vah: ae:r deh:|What is that?}}
{{ex:ja|yah:|yes}}
{{ex:nei|nai|no}}
<h3>Question word, then the verb</h3>
<p>The question word is the first element. The conjugated verb is the second element, and the subject follows the verb. It is verb second again. <b>Hvor du bor?</b> keeps the English order, with the subject in front of the verb, and it is wrong.</p>
{{ex:Hva heter du?|vah: HEH:-tuhr due:|What's your name?}}
{{ex:Hvor bor du?|voor boo:r due:|Where do you live?}}
{{ex:Hvem er det?|vehm ae:r deh:|Who is that?}}
{{ex:Når kommer du?|noh:r KOHM-uhr due:|When are you coming?}}
{{ex:Hvordan går det?|VOOR-dahn goh:r deh:|How's it going?}}
{{ex:Hvorfor snakker du norsk?|VOOR-fohr SNAHK-uhr due: nohshk|Why do you speak Norwegian?}}
<p><b>Hvordan går det?</b> is the set phrase for how's it going. <b>går</b> is the present of gå, the same -r you already add.</p>
<h3>Yes/no: the verb comes first</h3>
<p>A yes/no question expects ja or nei. The verb comes first, then the subject. You do not add <b>gjøre</b>. <b>gjøre</b> means to do something, so <b>Hva gjør du?</b> is what are you doing. It is a real question. It is not the helper you insert in front of snakker.</p>
{{ex:Snakker du norsk?|SNAHK-uhr due: nohshk|Do you speak Norwegian?}}
{{ex:Bor du i Oslo?|boo:r due: ee: OOS-loo|Do you live in Oslo?}}
{{ex:Hva gjør du?|vah: yoe:r due:|What are you doing?}}
<p>Several people is <b>dere</b>, and only when the prompt says several people. The verb still comes first. One person, including staff, stays <b>du</b>.</p>
{{ex:Snakker dere norsk?|SNAHK-uhr DEH:-ruh nohshk|Do you speak Norwegian? (to several people)}}
<p><b>og</b> and <b>men</b> still do not take a place when you join a question to a statement. Count the new clause from the element after them. And the articles have not gone away: <b>bok</b> is still feminine, <b>ei bok</b> and <b>boka</b>.</p>
<div class="tip"><b>Most common mistake:</b> statement order after a question word, and an English do. <b>Hvor du bor?</b> → <b>Hvor bor du?</b>. <b>Gjør du snakker norsk?</b> → <b>Snakker du norsk?</b></div>
`,
    check: [
      ["What does hva mean?", ["what", "who", "where", "when"], 0, "hva means what. Who is hvem, and where is hvor."],
      ["How do you ask Where do you live?", ["Hvor du bor?", "Hva bor du?", "Hvor bor du?", "Bor hvor du?"], 2, "hvor is the first element and bor is the second. Hvor du bor keeps the English order."],
      ["How do you ask Do you speak Norwegian?", ["Gjør du snakker norsk?", "Snakker du norsk?", "Du snakker norsk?", "Gjør du norsk snakker?"], 1, "A yes/no question starts with the verb. There is no gjør in front of snakker."]
    ],
    practice: [
      ["mc", "hva means…", "what", "who", "where", "when", "hva means what. Who is hvem."],
      ["mc", "Where do you live? =", "Hvor bor du?", "Hvor du bor?", "Hva bor du?", "Hvem bor du?", "Verb second: hvor first, then bor, then du."],
      ["mc", "Do you speak Norwegian? =", "Snakker du norsk?", "Gjør du snakker norsk?", "Du snakker norsk?", "Snakker norsk du?", "In a yes/no question the verb comes first. No gjør."],
      ["mc", "Who is that? =", "Hvem er det?", "Hva er det?", "Hvor er det?", "Hvem det er?", "Who is hvem. Hva er det means what is that."],
      ["mc", "Do you speak Norwegian? (to several people) =", "Snakker dere norsk?", "Snakker du norsk?", "Snakker De norsk?", "Gjør dere snakker norsk?", "Several people is dere, and the verb comes first."],
      ["or", "Where do you live? (start with hvor)", "Hvor bor du?", "hva", "Verb second: hvor is the first element, then bor."],
      ["or", "Ask a yes/no question: Do you speak Norwegian?", "Snakker du norsk?", "gjør", "In a yes/no question the verb comes first."],
      ["or", "a book", "ei bok", "en", "bok is feminine: ei bok."],
      ["fi", "__ bor du?", "Where do you live?", "Hvor", "Hva|Hvem|Når", "Where is hvor, and the verb comes next: Hvor bor du."],
      ["fi", "__ du norsk?", "Do you speak Norwegian?", "Snakker", "Gjør|Snakke|Er", "The verb comes first in a yes/no question. No gjør."],
      ["fi", "__ er det?", "Who is that?", "Hvem", "Hva|Hvor|Når", "Who is hvem, not hva. Hvem er det."],
      ["ty", "What's your name? (start with hva)", "Hva heter du?", "hva · hete · du", "hvem", "Verb second: hva first, then heter, then du."],
      ["ty", "Do you live in Oslo? (yes/no)", "Bor du i Oslo?", "bo · i Oslo · verb first", "gjør", "In a yes/no question the verb comes first: Bor du i Oslo?"],
      ["ty", "the book", "boka", "bok · feminine · -a", "boken", "The definite ending is -a: boka. bok is feminine."]
    ]
  }
];

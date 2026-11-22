/* en-sv lessons 1–9 (vowels through word-order). Written by EN-SV-1.
   Every pron is stdout from tools/target/sv/respell.js, pasted unchanged. */
module.exports = [
  {
    id: "vowels",
    title: "Vowels: long, short, and å ä ö u y",
    blurb: "Hear long and short vowels, read å ä ö u y, and use the pronunciation line.",
    deck: "Sounds and spelling",
    body: `
<p>Under every Swedish phrase in this course there is a pronunciation line in English letters. The syllable in CAPITALS is the stressed one. A one-syllable word is all lowercase. The line does not mark pitch accent, the rise or fall on a word. Stress, and long versus short, matter more. Do not add tone marks.</p>
<h3>Long vowel, short consonant</h3>
<p>English vowels slide. Swedish vowels stay put. In a stressed syllable, either the vowel is long and the consonant after it is short, or the vowel is short and the consonant is long. A doubled letter is that long consonant.</p>
{{ex:mat|maht|food}}
{{ex:matt|mahtt|matte, dull}}
<p><i>mat</i> (food) is a long <i>a</i> and a short <i>t</i>. <i>matt</i> is a short <i>a</i> and a long <i>t</i>. The aid writes <i>ah</i> for both. Length sits in the consonant: <i>maht</i> versus <i>mahtt</i>. A few small words, such as <i>han</i> (he), stay short with one <i>n</i>.</p>
<h3>o, å, ä, ö, u, y</h3>
<p>Long <i>e</i> is a pure <i>ay</i>, with no glide into "ee". Short <i>e</i> is <i>eh</i>, as in "bed". Long <i>i</i> is <i>ee</i>. Short <i>i</i> is <i>ih</i>. The letters English does not use need the aid.</p>
<div class="tbl"><table><tr><th>Letter</th><th>Aid</th><th>Read it as</th></tr>
<tr><td class="k">o long</td><td>ooh</td><td>food, never "book" or "good"</td></tr>
<tr><td class="k">o short, å short</td><td>aw</td><td>law</td></tr>
<tr><td class="k">å long</td><td>oh</td><td>a pure oh, no English glide</td></tr>
<tr><td class="k">ä</td><td>ae long, eh short</td><td>bad, held, when long</td></tr>
<tr><td class="k">ö</td><td>euh long, ur short</td><td>the r in ur is not an r</td></tr>
<tr><td class="k">u</td><td>ueh long, uh short</td><td>say ee and round the lips</td></tr>
<tr><td class="k">y</td><td>ew, long or short</td><td>not the English word new</td></tr>
</table></div>
{{ex:en bok|ayn boohk|a book}}
{{ex:god|goohd|good}}
{{ex:gå|goh|go, walk}}
{{ex:kom|kawm|come}}
{{ex:snö|sneuh|snow}}
{{ex:öppna|URP-nah|open}}
{{ex:du|dueh|you (one person)}}
{{ex:ett hus|eht huehs|a house}}
{{ex:fyra|FEW-rah|four}}
{{ex:ny|new|new}}
<p><i>bok</i> looks like "book" and is not that vowel. <i>ooh</i> is "food", so <i>bok</i> is <i>boohk</i> and <i>god</i> (good) is <i>goohd</i>. <i>gå</i> is <i>goh</i>, a different vowel. Short <i>ö</i> is <i>ur</i>, and that <i>r</i> is not a real <i>r</i>: <i>öppna</i> is <i>URP-nah</i>. The aid writes <i>ny</i> as <i>new</i>. That is Swedish <i>y</i>, not the English word.</p>
<h3>Three words, and two little articles</h3>
<p><i>här</i>, <i>hår</i> and <i>har</i> are three words. Type the ring and the dots.</p>
{{ex:här|haer|here}}
{{ex:hår|hohr|hair}}
{{ex:har|hahr|have, has}}
<p>Every noun in this course comes with <i>en</i> or <i>ett</i>. Both mean "a". <i>bil</i> (car) takes <i>en</i>. <i>hus</i> takes <i>ett</i>. Learn the small word with the noun. <i>j</i> is the <i>y</i> of "yes", never the <i>j</i> of "jam". <i>sj</i> and <i>tj</i> are two sounds. The next lesson drills them.</p>
{{ex:en bil|ayn beel|a car}}
<div class="tip"><b>Most common mistake:</b> reading <i>bok</i> like English "book", and saying <i>här</i>, <i>hår</i> and <i>har</i> alike. book-vowel → <i>boohk</i>. one sound for all three → <i>här</i> (here), <i>hår</i> (hair), <i>har</i> (have).</div>
`,
    check: [
      ["What does the doubled t in matt tell you?", ["The vowel in front of it is short", "The vowel is long", "The t is silent", "The word takes ett"], 0, "A doubled consonant is long, and the stressed vowel in front of it is short. mat is long a, matt is short a."],
      ["How do you read the o in bok?", ["Like the oo in English book", "Like the a in father", "Like the vowel of food: ooh", "It is silent"], 2, "Long o is ooh, the vowel of food. bok is boohk, not the vowel of English book."],
      ["Which set is three different words?", ["mat and matt, two spellings of food", "en and ett, the same noun", "bok and god, the same vowel as English book", "här, hår and har"], 3, "här is here, hår is hair, and har is have. The marks are part of the word."]
    ],
    practice: [
      ["mc", "Which aid matches bok (a book)?", "boohk", "the vowel of English book", "bawk", "bahk", "Long o is ooh, the vowel of food. bok is boohk, not the vowel of English book."],
      ["mc", "Which word means food?", "mat", "matt", "mata", "matta", "mat has a long a and a short t, and it means food. matt has a short a and a long t."],
      ["mc", "Which word means here?", "här", "hår", "har", "höra", "här means here. hår is hair, har is have, and höra is to hear.", "!strict"],
      ["mc", "What do CAPITALS mean in the pronunciation line?", "the stressed syllable", "a long vowel", "a loud voice", "the sj-sound", "The syllable in CAPITALS is stressed. A one-syllable word stays lowercase."],
      ["mc", "a house =", "ett hus", "en hus", "hus", "en bil", "hus is an ett-word: ett hus."],
      ["or", "a car", "en bil", "ett", "bil is an en-word: en bil."],
      ["or", "a house", "ett hus", "en", "hus is an ett-word: ett hus."],
      ["or", "a book", "en bok", "ett", "bok is an en-word: en bok."],
      ["fi", "__ bil", "a car", "en", "ett|bok|hus", "bil is an en-word: en bil."],
      ["fi", "__ hus", "a house", "ett", "en|bil|bok", "hus is an ett-word: ett hus."],
      ["fi", "h__r", "here", "ä", "å|a|o", "här means here. hår is hair, and har is have.", "!strict"],
      ["ty", "a car", "en bil", "bil · common gender", "ett", "bil is an en-word: en bil."],
      ["ty", "a house", "ett hus", "hus · neuter", "en", "hus is an ett-word: ett hus."],
      ["ty", "here", "här", "här · here, not hair", "hår har", "här, hår and har are three different words.", "!strict"]
    ]
  },
  {
    id: "sounds",
    title: "The sj-sound, the tj-sound, and soft k and g",
    blurb: "Keep the sj-sound and the tj-sound apart, and spot a hard k that stays hard.",
    deck: "Sounds and spelling",
    body: `
<p>English has one "sh" and pours several Swedish sounds into it. Swedish keeps two. The aid writes them <i>sj</i> and <i>tj</i>. If you merge them, seven and twenty start the same way, and they are not the same word.</p>
<h3>sj is not tj</h3>
<p>The sj-sound is the one in <i>sju</i> (seven), <i>skjorta</i> (shirt) and <i>stjärna</i> (star). The tj-sound is the one in <i>tjugo</i> (twenty), <i>köpa</i> (to buy) and <i>kyrka</i> (church). An English "sh" is close enough to be understood for the sj-sound. It is not an excuse to use it for both.</p>
{{ex:sju|sjueh|seven}}
{{ex:tjugo|TJUEH-gaw|twenty}}
{{ex:en skjorta|ayn SJAWRT-ah|a shirt}}
{{ex:en stjärna|ayn SJAERN-ah|a star}}
{{ex:köpa|TJEUH-pah|to buy}}
{{ex:en kyrka|ayn TJEWR-kah|a church}}
<p><i>j</i> by itself is the <i>y</i> of "yes", never the <i>j</i> of "jam". The aid writes that <i>j</i>, not a <i>y</i>.</p>
{{ex:ja|yah|yes}}
<p>A <i>k</i> at the start of a word, immediately before <i>e</i>, <i>i</i>, <i>y</i>, <i>ä</i> or <i>ö</i>, is usually the tj-sound. That is why <i>köpa</i> and <i>kyrka</i> do not start with a hard <i>k</i>. A <i>g</i> in that same spot is the <i>j</i> of "yes".</p>
{{ex:göra|YEUH-rah|to do}}
<h3>Hard on purpose</h3>
<p>Two common words do not follow that soft-<i>k</i> habit. <i>kille</i> (a guy) keeps a hard <i>k</i>. <i>kex</i> (a cracker, a thin crisp cookie) is listed with both a hard <i>k</i> and the tj-sound. This course uses the Central Swedish hard <i>k</i>. You will hear the tj-sound too, especially in Götaland, southern Sweden. Both are real Swedish. Do not "correct" a soft <i>kex</i> in someone else's mouth.</p>
{{ex:en kille|ayn KIHL-eh|a guy}}
{{ex:ett kex|eht kehks|a cracker}}
<p><i>sk</i> becomes the sj-sound only when a front vowel is the next letter: <i>e</i>, <i>i</i>, <i>y</i>, <i>ä</i> or <i>ö</i>. <i>skola</i> (school) keeps <i>sk</i>, because <i>o</i> is not one of those vowels. The word for station uses the sj-sound in the <i>-tion</i> ending, with the stress on the <i>ooh</i>.</p>
{{ex:en skola|ayn SKOOH-lah|a school}}
{{ex:en station|ayn stah-SJOOHN|a station}}
<p>Swedish words also have a pitch accent, one rise or one fall. The aid skips it on purpose. Stress and long versus short matter more. You will not drill accent 1 against accent 2.</p>
<p>The nouns still bring their small word. <i>skjorta</i>, <i>stjärna</i>, <i>kyrka</i>, <i>kille</i>, <i>skola</i> and <i>station</i> take <i>en</i>. <i>kex</i> takes <i>ett</i>.</p>
<div class="tip"><b>Most common mistake:</b> starting <i>sju</i> and <i>tjugo</i> with the same "sh". <i>sju</i> with "shoo" → <i>sjueh</i>. <i>tjugo</i> with that same start → <i>TJUEH-gaw</i>.</div>
`,
    check: [
      ["sju and the start of tjugo are…", ["the same sh sound", "two sounds: sj and tj", "both a hard k", "both silent"], 1, "sju starts with the sj-sound. tjugo starts with the tj-sound. The aid keeps them apart."],
      ["In this course, kille starts with…", ["the tj-sound", "the sj-sound", "a hard k", "a silent k"], 2, "kille keeps a hard k. The vowel i does not turn it into the tj-sound."],
      ["What does the pronunciation line do with pitch accent?", ["It skips pitch accent", "It numbers accent 1 and accent 2", "It treats pitch accent as stress", "It uses pitch accent to choose en or ett"], 0, "The aid does not mark pitch accent. Stress and long versus short matter more."]
    ],
    practice: [
      ["mc", "Which word starts with the sj-sound?", "sju", "tjugo", "köpa", "kyrka", "sju starts with the sj-sound. tjugo, köpa and kyrka start with the tj-sound."],
      ["mc", "In this course, kex starts with…", "a hard k", "the tj-sound", "the sj-sound", "a silent k", "This course uses the Central Swedish hard k. A tj-sound at the start is also accepted, especially in Götaland."],
      ["mc", "Why does skola keep sk, not the sj-sound?", "The next vowel is o, not a front vowel", "Every sk is the sj-sound", "The o is silent", "skola is a number", "sk becomes the sj-sound only before e, i, y, ä or ö. o is not one of those."],
      ["mc", "Which aid goes with köpa (to buy)?", "TJEUH-pah", "KEUH-pah", "SJEUH-pah", "KOOH-pah", "köpa starts with the tj-sound, not a hard k and not the sj-sound."],
      ["mc", "Pitch accent in the aid is…", "not marked", "written with the numbers 1 and 2", "the same mark as stress", "what chooses en or ett", "The aid skips pitch accent. Stress and long versus short matter more."],
      ["or", "a shirt", "en skjorta", "ett", "skjorta is an en-word: en skjorta."],
      ["or", "a cracker", "ett kex", "en", "kex is an ett-word: ett kex."],
      ["or", "a church", "en kyrka", "ett", "kyrka is an en-word: en kyrka."],
      ["fi", "__ skjorta", "a shirt", "en", "ett|kex|sju", "skjorta is an en-word: en skjorta."],
      ["fi", "__ kex", "a cracker", "ett", "en|skjorta|sju", "kex is an ett-word: ett kex."],
      ["fi", "__ skola", "a school", "en", "ett|kex|tjugo", "skola is an en-word: en skola."],
      ["ty", "a shirt", "en skjorta", "skjorta · common gender", "ett", "skjorta is an en-word: en skjorta."],
      ["ty", "a cracker", "ett kex", "kex · neuter", "en", "kex is an ett-word: ett kex."],
      ["ty", "seven", "sju", "sju · the sj-sound, not tj", "tjugo", "sju starts with the sj-sound. tjugo starts with the tj-sound."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings: hej, tack, hej då",
    blurb: "Greet someone, say thanks, say goodbye, and use du with one person.",
    deck: "Greetings and courtesy",
    body: `
<p><i>Hej</i> works with anyone, at any hour. It is the ordinary hello. You do not save it for friends, and you do not switch it off after noon.</p>
{{ex:Hej!|hey|Hello!}}
<h3>Morning, evening, night</h3>
<p>When you want the time of day in the greeting, Swedish uses <i>god</i> plus the time word. The vowel in <i>god</i> is <i>ooh</i>, the vowel of "food", not the vowel of English "good". You already met that trap.</p>
{{ex:God morgon!|goohd MAWR-gawn|Good morning!}}
{{ex:God kväll!|goohd kvehl|Good evening!}}
{{ex:God natt!|goohd nahtt|Good night!}}
<p><i>God morgon</i> is the morning. <i>God kväll</i> is when you arrive in the evening. <i>God natt</i> is bedtime, good night, not a second way to say good evening. <i>God dag</i> (good day) also exists. This lesson practices morning, evening and night. <i>Hej</i> still covers the rest of the day.</p>
<h3>Thanks, and the answer</h3>
<p><i>Tack</i> is thank you. <i>Tack så mycket</i> is thank you so much. When you hand something over, or when someone has just said <i>tack</i>, say <i>Varsågod</i>. It covers "here you are" and "you're welcome". You will also see the three words <i>var så god</i>. This course writes <i>Varsågod</i>.</p>
{{ex:Tack!|tahkk|Thank you!}}
{{ex:Tack så mycket!|tahkk soh MEWK-eht|Thank you so much!}}
{{ex:Varsågod!|vahsh-aw-GOOHD|Here you are. You're welcome.}}
<p><i>Förlåt</i> is sorry. <i>Ursäkta</i> is excuse me, when you stop someone or bump them. <i>Hej då</i> is goodbye, at any time of day. The <i>då</i> uses the <i>oh</i> of <i>å</i>.</p>
{{ex:Förlåt!|fur-LOHT|Sorry!}}
{{ex:Ursäkta.|uhr-SEHK-tah|Excuse me.}}
{{ex:Hej då!|hey doh|Bye!}}
<h3>du for one person</h3>
<p>English has one "you". Swedish uses <i>du</i> for one person: a friend, a classmate, a waiter, a shop assistant, a boss, a doctor. It is not rude. Do not capitalise it.</p>
{{ex:Hur mår du?|huehr mohr dueh|How are you?}}
<p><i>ni</i> is for several people, or for a company. It is not a polite word for one person. A waiter still gets <i>du</i>. Do not capitalise <i>du</i> or <i>ni</i> to be polite. A capital only appears when the word starts the sentence. The short answer to the question is <i>Bra, tack</i>. <i>bra</i> means good.</p>
{{ex:Hur mår ni?|huehr mohr nee|How are you all? (or to a company)}}
{{ex:Bra, tack!|brah tahkk|Fine, thanks.}}
{{ex:Ja.|yah|Yes.}}
{{ex:Nej.|ney|No.}}
<div class="tip"><b>Most common mistake:</b> <i>Hur mår ni</i> to one waiter, and <i>god</i> with the vowel of English "good". <i>ni</i> to one person → <i>du</i>. the vowel of "good" → <i>goohd</i>.</div>
`,
    check: [
      ["You ask one shop assistant how they are. What do you say?", ["Hur mår ni?", "Hur mår hen?", "Hur mår du?", "God natt"], 2, "du is for one person, including staff. ni is for several people or a company, not a polite singular."],
      ["Which hello works at any time of day?", ["Hej", "God morgon", "God kväll", "God natt"], 0, "Hej works all day. The god greetings belong to morning, evening and bedtime."],
      ["The o in God morgon is…", ["the vowel of English good", "ooh, the vowel of food", "silent", "the same vowel as å in då"], 1, "god is goohd. ooh is the vowel of food, not the vowel of the English word good."]
    ],
    practice: [
      ["mc", "Hello, any time of day =", "Hej", "God morgon", "God natt", "God kväll", "Hej works all day. God morgon is for the morning."],
      ["mc", "How are you, to one waiter?", "Hur mår du?", "Hur mår ni?", "God morgon", "Hej då", "du is for one person, including a waiter. ni is for several people or a company."],
      ["mc", "Someone says Tack. You hand over the cup and say…", "Varsågod", "Förlåt", "Hej då", "God natt", "Varsågod is what you say when you hand something over, and also after tack."],
      ["mc", "Good night =", "God natt", "God kväll", "God morgon", "Hej då", "God natt is good night, at bedtime. God kväll is good evening."],
      ["mc", "Bye =", "Hej då", "Hej", "Tack", "Förlåt", "Hej då is bye. då uses the oh of å."],
      ["or", "a car", "en bil", "ett", "bil is an en-word: en bil."],
      ["or", "a house", "ett hus", "en", "hus is an ett-word: ett hus."],
      ["or", "Thank you so much", "Tack så mycket", "hej", "Tack så mycket means thank you so much."],
      ["fi", "Hur mår __?", "How are you? (to one person)", "du", "ni|hej|tack", "du is for one person. ni is for several people or a company."],
      ["fi", "God __.", "Good morning.", "morgon", "kväll|natt|dag", "The morning greeting is God morgon. God kväll is the evening."],
      ["fi", "Hej __.", "Bye.", "då", "du|tack|natt", "Hej då is bye. då is the oh of å."],
      ["ty", "a car", "en bil", "bil · common gender", "ett", "bil is an en-word: en bil."],
      ["ty", "a house", "ett hus", "hus · neuter", "en", "hus is an ett-word: ett hus."],
      ["ty", "How are you? (to one person)", "Hur mår du?", "hur · mår · du · one person", "ni", "Use du with one person, including staff. ni is for several people."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Say your name, where you are from, where you live, and what you do.",
    deck: "About me",
    body: `
<p>English says "my name is". Swedish uses <i>heter</i>, and the person comes first. <i>jag</i> (I) is said <i>yah</i> in ordinary speech. Nothing extra goes between <i>heter</i> and the name.</p>
{{ex:Jag heter Anna.|yah HAY-tehr AHNN-ah|My name is Anna.}}
{{ex:Jag heter Erik.|yah HAY-tehr AY-rihk|My name is Erik.}}
<p><i>Jag är Anna</i> is also normal Swedish for "I am Anna". The pattern to learn here is <i>Jag heter Anna</i>. Use it when the lesson asks for <i>heter</i>.</p>
<h3>Where you are from, where you live</h3>
<p>Origin uses <i>kommer från</i>. <i>Jag är från Sverige</i> is also normal. Both mean you are from Sweden. A city uses <i>bor i</i>, "live in", not "live on" and not "live from".</p>
{{ex:Jag kommer från Sverige.|yah KAWM-ehr frohn SVAYR-yeh|I'm from Sweden.}}
{{ex:Jag är från Sverige.|yah aer frohn SVAYR-yeh|I'm from Sweden.}}
{{ex:Jag bor i Stockholm.|yah boohr ee STAWK-hawlm|I live in Stockholm.}}
{{ex:Jag bor i Göteborg.|yah boohr ee yur-teh-BAWRY|I live in Göteborg.}}
{{ex:Jag bor i Umeå.|yah boohr ee UEH-meh-oh|I live in Umeå.}}
<p>Malmö, Uppsala and Lund take <i>i</i> the same way. The <i>g</i> in <i>Sverige</i> and in <i>Göteborg</i> is the <i>j</i> of "yes". <i>bor</i> has the long <i>o</i> of "food": <i>boohr</i>. Names you will meet often are Anna, Erik and Maja. Cities stay capitalised. <i>du</i> does not.</p>
<h3>A job has no "a"</h3>
<p>English says "I'm a teacher". Swedish leaves that "a" out. The job word stands by itself after <i>är</i>.</p>
{{ex:Jag är lärare.|yah aer LAE-rah-reh|I'm a teacher.}}
<p><i>Jag är student</i> works the same way. The noun on its own still has an article when you mean "a teacher" as a thing you point at: <i>en lärare</i>, <i>en student</i>. The article drops in <i>Jag är lärare</i>. Do not put it back.</p>
<h3>Languages</h3>
<p><i>pratar</i> is speak. Language names are not capitalised.</p>
{{ex:Jag pratar engelska.|yah PRAH-tahr EHNG-ehl-skah|I speak English.}}
<p><i>Jag pratar svenska</i> is "I speak Swedish", with a small <i>s</i>. The same shape gives you the whole introduction: name, country, city, job, language.</p>
<div class="tip"><b>Most common mistake:</b> copying the English "a" in front of a job. <i>Jag är en lärare</i> → <i>Jag är lärare</i>.</div>
`,
    check: [
      ["How do you say I'm a teacher?", ["Jag är en lärare.", "Jag är lärare.", "Jag heter lärare.", "Jag är ett lärare."], 1, "A job takes no article. Jag är lärare, not Jag är en lärare."],
      ["Which pattern does this lesson use for I'm from Sweden?", ["Jag bor från Sverige.", "Jag kommer i Sverige.", "Jag är Sverige.", "Jag kommer från Sverige."], 3, "Origin uses kommer från. Jag är från Sverige is also normal. The pattern here is kommer från."],
      ["I live in Stockholm.", ["Jag bor i Stockholm.", "Jag bor på Stockholm.", "Jag kommer i Stockholm.", "Jag bor till Stockholm."], 0, "A city takes i. Jag bor i Stockholm."]
    ],
    practice: [
      ["mc", "I'm a teacher =", "Jag är lärare.", "Jag är en lärare.", "Jag är ett lärare.", "Jag heter lärare.", "A job takes no article. Jag är lärare."],
      ["mc", "My name is Anna. (use heter)", "Jag heter Anna.", "Jag heter är Anna.", "Mig heter Anna.", "Jag är heter Anna.", "Jag heter Anna. heter already carries my name is."],
      ["mc", "I live in Göteborg =", "Jag bor i Göteborg.", "Jag bor på Göteborg.", "Jag bor från Göteborg.", "Jag kommer i Göteborg.", "A city takes i. Jag bor i Göteborg."],
      ["mc", "I speak English =", "Jag pratar engelska.", "Jag pratar engelsk.", "Jag är engelska.", "Jag pratar i engelska.", "The language name is engelska, not capitalised, and pratar takes no i."],
      ["mc", "I'm from Sweden. (use kommer)", "Jag kommer från Sverige.", "Jag kommer i Sverige.", "Jag bor från Sverige.", "Jag är Sverige.", "Origin with kommer uses från. Jag kommer från Sverige."],
      ["or", "a teacher", "en lärare", "ett", "lärare is an en-word: en lärare."],
      ["or", "a house", "ett hus", "en", "hus is an ett-word: ett hus."],
      ["or", "a student", "en student", "ett", "student is an en-word: en student."],
      ["fi", "Jag __ Anna.", "My name is Anna. (use heter)", "heter", "kommer|bor|pratar", "Jag heter Anna. The blank is heter, not är."],
      ["fi", "Jag kommer __ Sverige.", "I'm from Sweden.", "från", "i|till|på", "Origin uses kommer från. Jag kommer från Sverige."],
      ["fi", "Jag är __.", "I'm a teacher.", "lärare", "en|student|heter", "A job takes no article. The blank is lärare, not en."],
      ["ty", "a teacher", "en lärare", "lärare · common gender", "ett", "lärare is an en-word: en lärare."],
      ["ty", "a house", "ett hus", "hus · neuter", "en", "hus is an ett-word: ett hus."],
      ["ty", "I'm a teacher.", "Jag är lärare.", "jag · är · lärare · no article", "en", "A job takes no article: Jag är lärare."]
    ]
  },
  {
    id: "en-ett",
    title: "en and ett",
    blurb: "Put en or ett on family words and the first objects, instead of guessing en.",
    deck: "People and family",
    body: `
<p>English uses "a" for every noun. Swedish has two indefinite articles, <i>en</i> and <i>ett</i>. Both mean "a" or "one". They are not masculine and feminine. This course calls <i>en</i> common gender, an en-word, and <i>ett</i> neuter, an ett-word.</p>
<p>About three quarters of nouns are en-words. About a quarter are ett-words. The ending does not save you yet. You learn the article with the noun, the way you learn the meaning. If you guess <i>en</i> every time, the ett-words come out wrong.</p>
<h3>Family</h3>
<p>Most family words take <i>en</i>. The one English speakers miss is <i>barn</i>.</p>
<div class="tbl"><table><tr><th>Swedish</th><th>English</th><th>Group</th></tr>
<tr><td class="k">en mamma</td><td>a mom</td><td>en-word</td></tr>
<tr><td class="k">en pappa</td><td>a dad</td><td>en-word</td></tr>
<tr><td class="k">en bror</td><td>a brother</td><td>en-word</td></tr>
<tr><td class="k">en syster</td><td>a sister</td><td>en-word</td></tr>
<tr><td class="k">en son</td><td>a son</td><td>en-word</td></tr>
<tr><td class="k">en dotter</td><td>a daughter</td><td>en-word</td></tr>
<tr><td class="k">en flicka</td><td>a girl</td><td>en-word</td></tr>
<tr><td class="k">en pojke</td><td>a boy</td><td>en-word</td></tr>
<tr><td class="k">en familj</td><td>a family</td><td>en-word</td></tr>
<tr><td class="k">ett barn</td><td>a child</td><td>ett-word</td></tr>
</table></div>
{{ex:en mamma|ayn MAHMM-ah|a mom}}
{{ex:en pappa|ayn PAHPP-ah|a dad}}
{{ex:en bror|ayn broohr|a brother}}
{{ex:en syster|ayn SEWS-tehr|a sister}}
{{ex:ett barn|eht bahrn|a child}}
<p><i>ett barn</i> is a child. It is not the English farm building. <i>bror</i> has the long <i>o</i> of "food". <i>syster</i> has the short <i>y</i>. Plurals wait. The definite suffix, the ending that means "the", also waits. Today the noun is indefinite: <i>en</i> or <i>ett</i> plus the word.</p>
<h3>Things you already need</h3>
<p>The same split is on the first objects. A car, a book, a mom and a coffee take <i>en</i>. A house, a child and a glass take <i>ett</i>. <i>har</i> means have or has, the word from the vowel lesson.</p>
{{ex:en bil|ayn beel|a car}}
{{ex:ett hus|eht huehs|a house}}
{{ex:en bok|ayn boohk|a book}}
{{ex:en kaffe|ayn KAHFF-eh|a coffee}}
{{ex:ett glas|eht glahs|a glass}}
{{ex:Jag har ett barn.|yah hahr eht bahrn|I have a child.}}
{{ex:Jag har en bil.|yah hahr ayn beel|I have a car.}}
<p>There is no separate word for "a" that ignores the group. <i>en kaffe</i> is a cup of coffee. <i>ett glas</i> is a glass. You will need both as soon as a price comes up.</p>
<div class="tip"><b>Most common mistake:</b> guessing <i>en</i> for every noun. <i>en barn</i> → <i>ett barn</i>. <i>en hus</i> → <i>ett hus</i>.</div>
`,
    check: [
      ["a child =", ["ett barn", "en barn", "ett bar", "en mamma"], 0, "barn is an ett-word: ett barn. It means a child."],
      ["What does this course call the en group?", ["masculine", "feminine", "common gender, an en-word", "the polite article"], 2, "en is common gender, an en-word. It is not masculine or feminine."],
      ["a coffee =", ["ett kaffe", "en kaffe", "ett glas", "en barn"], 1, "kaffe is an en-word: en kaffe. A glass is ett glas."]
    ],
    practice: [
      ["mc", "a child =", "ett barn", "en barn", "ett bar", "en mamma", "barn is an ett-word: ett barn. It means a child, not a farm building."],
      ["mc", "a mom =", "en mamma", "ett mamma", "en barn", "mamma", "mamma is an en-word: en mamma."],
      ["mc", "a dad =", "en pappa", "ett pappa", "ett barn", "ett hus", "pappa is an en-word: en pappa."],
      ["mc", "Which noun takes ett?", "hus", "bil", "mamma", "kaffe", "hus is an ett-word: ett hus. bil, mamma and kaffe take en."],
      ["mc", "a glass =", "ett glas", "en glas", "ett kaffe", "en barn", "glas is an ett-word: ett glas. kaffe takes en."],
      ["or", "a mom", "en mamma", "ett", "mamma is an en-word: en mamma."],
      ["or", "a child", "ett barn", "en", "barn is an ett-word: ett barn."],
      ["or", "a coffee", "en kaffe", "ett", "kaffe is an en-word: en kaffe."],
      ["fi", "__ barn", "a child", "ett", "en|mamma|bil", "barn is an ett-word: ett barn."],
      ["fi", "__ mamma", "a mom", "en", "ett|barn|hus", "mamma is an en-word: en mamma."],
      ["fi", "__ kaffe", "a coffee", "en", "ett|glas|barn", "kaffe is an en-word: en kaffe."],
      ["ty", "a mom", "en mamma", "mamma · common gender", "ett", "mamma is an en-word: en mamma."],
      ["ty", "a child", "ett barn", "barn · neuter", "en", "barn is an ett-word: ett barn."],
      ["ty", "a coffee", "en kaffe", "kaffe · common gender", "ett", "kaffe is an en-word: en kaffe."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and prices",
    blurb: "Count to 100, say 21 as one word, and ask what something costs.",
    deck: "Numbers, time and prices",
    body: `
<p>Swedish numbers are regular once the teens are out of the way. You count with <i>ett</i>, not <i>en</i>: <i>ett, två, tre</i>. In front of a noun, "one" agrees. An en-word takes <i>en</i>. An ett-word takes <i>ett</i>. That is the same pair you just learned.</p>
<div class="tbl"><table><tr><th></th><th>Swedish</th><th></th><th>Swedish</th></tr>
<tr><td>0</td><td class="k">noll</td><td>11</td><td class="k">elva</td></tr>
<tr><td>1</td><td class="k">ett</td><td>12</td><td class="k">tolv</td></tr>
<tr><td>2</td><td class="k">två</td><td>13</td><td class="k">tretton</td></tr>
<tr><td>3</td><td class="k">tre</td><td>14</td><td class="k">fjorton</td></tr>
<tr><td>4</td><td class="k">fyra</td><td>15</td><td class="k">femton</td></tr>
<tr><td>5</td><td class="k">fem</td><td>16</td><td class="k">sexton</td></tr>
<tr><td>6</td><td class="k">sex</td><td>17</td><td class="k">sjutton</td></tr>
<tr><td>7</td><td class="k">sju</td><td>18</td><td class="k">arton</td></tr>
<tr><td>8</td><td class="k">åtta</td><td>19</td><td class="k">nitton</td></tr>
<tr><td>9</td><td class="k">nio</td><td>20</td><td class="k">tjugo</td></tr>
<tr><td>10</td><td class="k">tio</td><td>21</td><td class="k">tjugoett</td></tr>
</table></div>
{{ex:noll|nawl|zero}}
{{ex:två|tvoh|two}}
{{ex:sju|sjueh|seven}}
{{ex:åtta|AWT-ah|eight}}
{{ex:elva|EHL-vah|eleven}}
<p><i>sju</i> still starts with the sj-sound. <i>tjugo</i> still starts with the tj-sound. <i>två</i> and <i>åtta</i> use <i>å</i>. Eleven and twelve are their own words, <i>elva</i> and <i>tolv</i>. The rest of the teens are their own words too, not "ten" plus the unit.</p>
<h3>21 is one word, ten first</h3>
<p>From 20 up, say the ten, then the unit, as one word. 30 is <i>trettio</i>, 40 <i>fyrtio</i>, 50 <i>femtio</i>, 60 <i>sextio</i>, 70 <i>sjuttio</i>, 80 <i>åttio</i>, 90 <i>nittio</i>. 100 is <i>hundra</i>. 200 is <i>tvåhundra</i>, one word. 21 when you count is <i>tjugoett</i>. Not the one first, and not a hyphen.</p>
{{ex:tjugoett|TJUEH-gaw-eht|twenty-one}}
{{ex:hundra|HUHN-drah|one hundred}}
<p>Before an en-word, the end of 21 is <i>en</i>. <i>krona</i> is an en-word, so 21 kronor is <i>tjugoen kronor</i>. Before an ett-word the end stays <i>ett</i>, the counting form. One krona is <i>en krona</i>. From two up, the word is <i>kronor</i>.</p>
{{ex:en krona|ayn KROOH-nah|one krona}}
{{ex:tio kronor|TEE-aw KROOH-nawr|ten kronor}}
{{ex:tjugoen kronor|TJUEH-gaw-ayn KROOH-nawr|twenty-one kronor}}
<h3>What it costs</h3>
<p>The question is a fixed shape. <i>det</i> here is unstressed, <i>deh</i>. The answer uses <i>kostar</i> plus the number and <i>kronor</i>. This is the pattern, not a claim about what a coffee costs.</p>
{{ex:Vad kostar det?|vah KAWS-tahr deh|How much is it?}}
{{ex:Det kostar tio kronor.|deh KAWS-tahr TEE-aw KROOH-nawr|It costs ten kronor.}}
{{ex:Vad kostar en kaffe?|vah KAWS-tahr ayn KAHFF-eh|How much is a coffee?}}
<p>A coffee is still <i>en kaffe</i>. A glass is still <i>ett glas</i>. The price does not change the article.</p>
<div class="tip"><b>Most common mistake:</b> building 21 the English way. <i>tjugo-ett</i> or ones-before-tens → <i>tjugoett</i>. And <i>ett kaffe</i> → <i>en kaffe</i>.</div>
`,
    check: [
      ["How do you say 21 when you count?", ["en tjugo", "tjugo-ett", "tjugo ett", "tjugoett"], 3, "The ten comes first, in one word: tjugoett. Not a hyphen, and not the one first."],
      ["ten kronor =", ["tio krona", "tio kronor", "en kronor", "tio kronors"], 1, "Ten uses kronor. One is en krona."],
      ["How much is it?", ["Vad kostar det?", "Vad kostar du?", "Kostar vad det?", "Vad är kostar?"], 0, "The question is Vad kostar det? Unstressed det is deh."]
    ],
    practice: [
      ["mc", "21, when you count =", "tjugoett", "tjugo-ett", "ett-tjugo", "tjugo ett", "Twenty-one is tjugoett: the ten first, one word, no hyphen."],
      ["mc", "one krona =", "en krona", "ett krona", "en kronor", "ett kronor", "krona is an en-word: en krona. More than one is kronor."],
      ["mc", "ten kronor =", "tio kronor", "tio krona", "en kronor", "tio kronors", "Ten takes kronor. The singular en krona is for one."],
      ["mc", "How much is it?", "Vad kostar det?", "Vad kostar du?", "Kostar vad det?", "Vad är kostar?", "The question is Vad kostar det? Unstressed det is deh."],
      ["mc", "a coffee =", "en kaffe", "ett kaffe", "en glas", "ett barn", "kaffe is an en-word: en kaffe. A glass is ett glas."],
      ["or", "a coffee", "en kaffe", "ett", "kaffe is an en-word: en kaffe."],
      ["or", "a glass", "ett glas", "en", "glas is an ett-word: ett glas."],
      ["or", "twenty-one kronor", "tjugoen kronor", "tjugoett", "krona is an en-word, so twenty-one is tjugoen kronor."],
      ["fi", "__ kaffe", "a coffee", "en", "ett|glas|tio", "kaffe is an en-word: en kaffe."],
      ["fi", "__ glas", "a glass", "ett", "en|kaffe|tio", "glas is an ett-word: ett glas."],
      ["fi", "Det kostar tjugo__ kronor.", "It costs twenty-one kronor.", "en", "ett|två|tio", "krona is an en-word, so twenty-one kronor is tjugoen kronor."],
      ["ty", "a coffee", "en kaffe", "kaffe · common gender", "ett", "kaffe is an en-word: en kaffe."],
      ["ty", "a glass", "ett glas", "glas · neuter", "en", "glas is an ett-word: ett glas."],
      ["ty", "ten kronor", "tio kronor", "tio · kronor · not the singular", "krona", "Ten is tio kronor. Use kronor, not the singular krona."]
    ]
  },
  {
    id: "pronouns",
    title: "Pronouns, and how are you",
    blurb: "Use the subject and object pronouns, and say you are fine, tired or hungry.",
    deck: "Feelings and states",
    body: `
<p>English "you" and "they" hide several Swedish words. The subject is who does the thing. The object is who it happens to. Learn the pair, not the subject alone.</p>
<div class="tbl"><table><tr><th>English</th><th>Subject</th><th>Object</th></tr>
<tr><td>I</td><td class="k">jag</td><td class="k">mig</td></tr>
<tr><td>you (one person)</td><td class="k">du</td><td class="k">dig</td></tr>
<tr><td>he</td><td class="k">han</td><td class="k">honom</td></tr>
<tr><td>she</td><td class="k">hon</td><td class="k">henne</td></tr>
<tr><td>it (an en-word)</td><td class="k">den</td><td class="k">den</td></tr>
<tr><td>it (an ett-word)</td><td class="k">det</td><td class="k">det</td></tr>
<tr><td>we</td><td class="k">vi</td><td class="k">oss</td></tr>
<tr><td>you all, or a company</td><td class="k">ni</td><td class="k">er</td></tr>
<tr><td>they</td><td class="k">de</td><td class="k">dem</td></tr>
</table></div>
<p><i>du</i> is still one person, including staff. <i>ni</i> is several people, or a company. The sentence will say which. One waiter is <i>du</i>. Do not capitalise <i>ni</i> to be polite.</p>
<h3>mig, dig, sig</h3>
<p><i>mig</i> is me. <i>dig</i> is you, one person, as the object. Do not leave the subject <i>du</i> in the object slot. For he and she, <i>honom</i> and <i>henne</i> are someone else. <i>sig</i> is the same person as the subject: himself, herself, themselves.</p>
{{ex:Jag ser dig.|yah sayr dey|I see you.}}
{{ex:Du ser mig.|dueh sayr mey|You see me.}}
{{ex:Anna ser sig.|AHNN-ah sayr sey|Anna sees herself.}}
{{ex:Han ser henne.|hahnn sayr HEHN-eh|He sees her.}}
<p>You will hear <i>mig</i>, <i>dig</i> and <i>sig</i> as <i>mey</i>, <i>dey</i> and <i>sey</i>. Spell them <i>mig</i>, <i>dig</i>, <i>sig</i>. <i>de</i> and <i>dem</i> both sound like <i>dawm</i>. Write <i>de</i> for the subject and <i>dem</i> for the object. <i>dom</i>, <i>mej</i>, <i>dej</i> and <i>sej</i> are colloquial spellings. They are not the answer you type.</p>
<p><i>hen</i> is a pronoun for a person when you are not saying <i>han</i> or <i>hon</i>. Recognize it. The form is <i>hen</i>, not <i>henom</i>. This course does not drill it.</p>
<h3>How are you</h3>
<p><i>Hur mår du?</i> asks one person. <i>mår</i> goes with <i>bra</i> (good). Tired and hungry use <i>är</i> plus the word, which matches English "I am".</p>
{{ex:Hur mår du?|huehr mohr dueh|How are you?}}
{{ex:Hur mår ni?|huehr mohr nee|How are you all?}}
{{ex:Jag mår bra.|yah mohr brah|I'm fine.}}
{{ex:Jag är trött.|yah aer trurt|I'm tired.}}
{{ex:Jag är hungrig.|yah aer HUHNG-rihg|I'm hungry.}}
<p><i>den</i> stands in for an en-word, such as <i>en bil</i>. <i>det</i> stands in for an ett-word, such as <i>ett hus</i>. <i>trött</i> has short <i>ö</i>. The aid writes that vowel <i>ur</i>, and the <i>r</i> is not an <i>r</i>.</p>
{{ex:Den är här.|dehn aer haer|It is here. (a car, an en-word)}}
{{ex:Det är ett hus.|deh aer eht huehs|It is a house.}}
<div class="tip"><b>Most common mistake:</b> leaving <i>du</i> in the object slot, and writing <i>dom</i>. <i>Jag ser du</i> → <i>Jag ser dig</i>. <i>dom</i> → <i>de</i> for they, <i>dem</i> for them.</div>
`,
    check: [
      ["I see you. (one person)", ["Jag ser du.", "Jag ser dej.", "Jag ser dig.", "Jag ser ni."], 2, "The object form is dig, spelled dig. du is the subject. dej is the colloquial spelling."],
      ["they, as the subject, is written…", ["de", "dem", "dom", "den"], 0, "Write de for the subject and dem for the object. dom is colloquial, not the spelling you type."],
      ["ni is for…", ["one waiter, to be polite", "a capital You", "a child only", "several people, or a company"], 3, "ni is for several people or a company. One person, including staff, gets du."]
    ],
    practice: [
      ["mc", "you, one person, as the subject =", "du", "ni", "dig", "hen", "du is the subject for one person. dig is the object. ni is you all or a company."],
      ["mc", "I see you. (one person)", "Jag ser dig.", "Jag ser du.", "Jag ser dej.", "Jag ser mig.", "The object form is dig, spelled dig. dej is colloquial. mig means me."],
      ["mc", "they, as the subject, written =", "de", "dem", "dom", "den", "Write de for they as the subject. dem is the object. dom is not the spelling you type."],
      ["mc", "I'm tired =", "Jag är trött.", "Jag är hungrig.", "Jag mår trött.", "Jag har trött.", "Tired is Jag är trött. mår goes with bra. har is not this sentence."],
      ["mc", "I'm hungry =", "Jag är hungrig.", "Jag är trött.", "Jag har hungrig.", "Jag mår hungrig.", "Hungry is Jag är hungrig. It uses är, not har and not mår."],
      ["or", "a mom", "en mamma", "ett", "mamma is an en-word: en mamma."],
      ["or", "a child", "ett barn", "en", "barn is an ett-word: ett barn."],
      ["or", "How are you? (to one person)", "Hur mår du", "ni", "du is for one person, including a waiter. ni is for several people."],
      ["fi", "Hur mår __?", "How are you? (to one person)", "du", "ni|dig|de", "du is the subject for one person. ni is for several people."],
      ["fi", "Jag ser __.", "I see you. (one person)", "dig", "du|dej|mig", "The object form is dig, spelled dig. du is the subject, and dej is colloquial."],
      ["fi", "Jag är tr__tt.", "I'm tired.", "ö", "o|å|a", "trött has ö. o, å and a are different letters here.", "!strict"],
      ["ty", "a mom", "en mamma", "mamma · common gender", "ett", "mamma is an en-word: en mamma."],
      ["ty", "a child", "ett barn", "barn · neuter", "en", "barn is an ett-word: ett barn."],
      ["ty", "I see you. (one person)", "Jag ser dig.", "jag · ser · dig · object of du", "du dej", "The object form is dig, spelled dig. du is the subject."]
    ]
  },
  {
    id: "present",
    title: "Present tense in -r",
    blurb: "Use one present shape for every person, and stop looking for a he or she ending.",
    deck: "Work and study",
    body: `
<p>English changes the verb: I live, she lives. Swedish does not. The present adds <i>-r</i>, and that <i>-r</i> is the same for every person. There is no extra ending for he or she, and none for we. Do not wait for one, and do not invent one.</p>
<div class="tbl"><table><tr><th>Dictionary shape</th><th>Present</th><th>English</th></tr>
<tr><td class="k">bo</td><td class="k">bor</td><td>live</td></tr>
<tr><td class="k">prata</td><td class="k">pratar</td><td>speak</td></tr>
<tr><td class="k">tala</td><td class="k">talar</td><td>speak</td></tr>
<tr><td class="k">jobba</td><td class="k">jobbar</td><td>work</td></tr>
<tr><td class="k">arbeta</td><td class="k">arbetar</td><td>work</td></tr>
<tr><td class="k">plugga</td><td class="k">pluggar</td><td>study</td></tr>
<tr><td class="k">komma</td><td class="k">kommer</td><td>come</td></tr>
<tr><td class="k">heta</td><td class="k">heter</td><td>be called</td></tr>
</table></div>
{{ex:Hon bor.|hawn boohr|She lives.}}
{{ex:Hon bor i Lund.|hawn boohr ee luhnd|She lives in Lund.}}
{{ex:Vi pratar engelska.|vee PRAH-tahr EHNG-ehl-skah|We speak English.}}
{{ex:Hon talar svenska.|hawn TAH-lahr SVEHN-skah|She speaks Swedish.}}
<p><i>jag bor</i>, <i>du bor</i>, <i>hon bor</i>, <i>vi bor</i> and <i>de bor</i> are the same verb. <i>pratar</i> is the everyday word for speak. <i>talar</i> means the same and is a little more formal. Both already contain the <i>-r</i>. Not <i>borar</i>, not <i>bors</i>, not <i>pratas</i>.</p>
<h3>Work and school</h3>
<p><i>jobbar</i> is the everyday verb for work. <i>arbetar</i> is the other common one, same meaning. <i>pluggar</i> is informal, for schoolwork: I'm studying.</p>
{{ex:Jag jobbar.|yah YAWB-ahr|I work.}}
{{ex:Jag arbetar.|yah AHR-beh-tahr|I work.}}
{{ex:Jag pluggar.|yah PLUHG-ahr|I'm studying.}}
{{ex:ett jobb|eht yawb|a job}}
{{ex:en student|ayn stuh-DEHNT|a student}}
<p><i>är</i> (am, is, are) does not take <i>-r</i>. A job after it still has no article. The modals <i>vill</i>, <i>kan</i>, <i>måste</i> and <i>ska</i> do not take <i>-r</i> either. Spell <i>ska</i>, not <i>skall</i>. Their lesson comes later. Do not build <i>villar</i> or <i>skaar</i> while you wait.</p>
{{ex:Jag är lärare.|yah aer LAE-rah-reh|I'm a teacher.}}
<p><i>har</i> (have) is already the present of <i>ha</i>. Do not add a second ending. <i>kommer</i> and <i>heter</i>, which you have used since the introduction, are already present too. <i>en lärare</i> and <i>en student</i> are en-words when you mean the noun. <i>ett jobb</i> is an ett-word. The article still drops after <i>är</i>.</p>
<div class="tip"><b>Most common mistake:</b> adding an English-style ending for she. <i>Hon borar</i> → <i>Hon bor</i>. <i>Hon bors</i> → <i>Hon bor</i>.</div>
`,
    check: [
      ["She lives in Lund.", ["Hon borar i Lund.", "Hon bor i Lund.", "Hon bors i Lund.", "Hon bo i Lund."], 1, "The present -r is the same for every person. hon bor, not a special ending for hon."],
      ["Which word does not take -r?", ["är", "bor", "pratar", "jobbar"], 0, "är does not take -r. The modals vill, kan, måste and ska do not either."],
      ["I'm a student.", ["Jag är en student.", "Jag ärar student.", "Jag är student.", "Jag är ett student."], 2, "A job takes no article, and är has no extra -r. Jag är student."]
    ],
    practice: [
      ["mc", "She lives =", "Hon bor.", "Hon borar.", "Hon bors.", "Hon bo.", "The present is bor for every person. There is no extra ending for hon."],
      ["mc", "We speak English =", "Vi pratar engelska.", "Vi pratarar engelska.", "Vi pratas engelska.", "Vi prata engelska.", "pratar already has the present -r. It is the same for vi and for hon."],
      ["mc", "Which sentence uses a verb with no -r?", "Jag är lärare.", "Jag bor.", "Jag pratar.", "Jag jobbar.", "är does not take -r. bor, pratar and jobbar already have it."],
      ["mc", "I work =", "Jag jobbar.", "Jag jobbarar.", "Jag jobba.", "Jag är jobbar.", "jobba adds -r: jag jobbar. The -r is not a person ending."],
      ["mc", "I'm a teacher =", "Jag är lärare.", "Jag är en lärare.", "Jag ärar lärare.", "Jag är ett lärare.", "No article before the job, and är takes no extra -r."],
      ["or", "a teacher", "en lärare", "ett", "lärare is an en-word: en lärare."],
      ["or", "a job", "ett jobb", "en", "jobb is an ett-word: ett jobb."],
      ["or", "a student", "en student", "ett", "student is an en-word: en student."],
      ["fi", "Hon __ i Lund.", "She lives in Lund.", "bor", "borar|bors|är", "The present is bor for every person. hon bor, not borar or bors."],
      ["fi", "Vi __ engelska.", "We speak English.", "pratar|talar", "prata|pratas|ärar", "pratar and talar already have the present -r. Both mean speak."],
      ["fi", "Jag __ student.", "I'm a student.", "är", "ärar|heter|en", "är does not take -r, and a job takes no article. Jag är student."],
      ["ty", "a teacher", "en lärare", "lärare · common gender", "ett", "lärare is an en-word: en lärare."],
      ["ty", "a job", "ett jobb", "jobb · neuter", "en", "jobb is an ett-word: ett jobb."],
      ["ty", "She lives in Lund. (start with hon)", "Hon bor i Lund.", "hon · bor · Lund · same -r for every person", "borar", "The present -r is the same for hon and for jag: hon bor."]
    ]
  },
  {
    id: "word-order",
    title: "Verb in second place",
    blurb: "Put the verb second after idag, a weekday or a yes-or-no question.",
    deck: "Days, dates and weather",
    body: `
<p>English says "Today I am working." The subject stays in front of the verb. Swedish keeps the finite verb as the second element, the second piece of the sentence. If <i>idag</i> (today) is the first piece, the verb is next, and the subject follows the verb.</p>
{{ex:Idag jobbar jag.|ih-DAHG YAWB-ahr yah|Today I'm working.}}
{{ex:Jag jobbar idag.|yah YAWB-ahr ih-DAHG|I'm working today.}}
<p><i>Jag jobbar idag</i> is also normal: the time sits at the end, and the verb is still second, after <i>jag</i>. Both are Swedish. The order that is not Swedish is the English one, with the subject left in front of the verb: <i>Idag jag jobbar</i>. When a practice item says "start with <i>idag</i>", use the fronted sentence.</p>
<h3>Days</h3>
<p>Weekdays are lowercase, except at the start of a sentence. A day can be the first element, the same way <i>idag</i> is. <i>på måndag</i> (on Monday) is also normal, and it is one element even though it is two words. The verb is still the second element: <i>På måndag jobbar jag</i>.</p>
<div class="tbl"><table><tr><th>Swedish</th><th>English</th></tr>
<tr><td class="k">måndag</td><td>Monday</td></tr>
<tr><td class="k">tisdag</td><td>Tuesday</td></tr>
<tr><td class="k">onsdag</td><td>Wednesday</td></tr>
<tr><td class="k">torsdag</td><td>Thursday</td></tr>
<tr><td class="k">fredag</td><td>Friday</td></tr>
<tr><td class="k">lördag</td><td>Saturday</td></tr>
<tr><td class="k">söndag</td><td>Sunday</td></tr>
</table></div>
{{ex:Måndag jobbar jag.|MOHN-dahg YAWB-ahr yah|On Monday I'm working.}}
{{ex:På måndag jobbar jag.|poh MOHN-dahg YAWB-ahr yah|On Monday I'm working.}}
{{ex:Söndag regnar det.|SURN-dahg REHNG-nahr deh|On Sunday it's raining.}}
<p>In <i>SURN</i>, the <i>ur</i> is short <i>ö</i>. That <i>r</i> is not an extra <i>r</i>. The <i>g</i> in <i>-dag</i> is often quiet in speech. Write it. <i>dag</i> (a day) is an en-word: <i>en dag</i>. This course writes <i>idag</i>, <i>igår</i> (yesterday) and <i>imorgon</i> (tomorrow) as one word. Newspapers also write <i>i dag</i>, <i>i går</i> and <i>i morgon</i>.</p>
{{ex:igår|ih-GOHR|yesterday}}
{{ex:imorgon|ih-MAWR-gawn|tomorrow}}
<p><i>igår</i> means yesterday. The past tense comes in a later lesson, so you will not build a yesterday sentence yet. The spelling is the point today.</p>
<h3>Weather, and a question</h3>
<p>Weather uses <i>det</i>, the ett-word it. <i>Det regnar</i> is "it's raining": <i>det</i> is first, <i>regnar</i> is second. Put <i>idag</i> in front and the verb stays second. <i>det</i> moves after it.</p>
{{ex:Det regnar.|deh REHNG-nahr|It's raining.}}
{{ex:Idag regnar det.|ih-DAHG REHNG-nahr deh|Today it's raining.}}
{{ex:Imorgon regnar det.|ih-MAWR-gawn REHNG-nahr deh|Tomorrow it's raining.}}
{{ex:Det snöar.|deh SNEUH-ahr|It's snowing.}}
<p>A yes-or-no question has no piece in front of the verb, so the verb comes first. <i>Jobbar du?</i> is "are you working?" <i>Du jobbar</i> is the statement "you work". You will also hear that statement shape with a rise, as a check. The form to learn is the verb first.</p>
{{ex:Jobbar du?|YAWB-ahr dueh|Are you working?}}
<div class="tip"><b>Most common mistake:</b> leaving the subject in front of the verb after a time word. <i>Idag jag jobbar</i> → <i>Idag jobbar jag</i>.</div>
`,
    check: [
      ["Which sentence starts with idag and puts the verb second?", ["Idag jobbar jag.", "Idag jag jobbar.", "Jag idag jobbar.", "Idag är jobbar jag."], 0, "Verb second: idag first, then jobbar, then jag. Not: Idag jag jobbar."],
      ["Which spelling does this course use for today, yesterday and tomorrow?", ["i dag, i går, i morgon", "idag', igår', imorgon'", "i-dag, i-går, i-morgon", "idag, igår, imorgon"], 3, "One word: idag, igår, imorgon. Newspapers also write i dag, i går, i morgon."],
      ["In Jobbar du? the verb is…", ["after the subject, as in English", "first, because it is a yes-or-no question", "the last word, always", "replaced by a do-word"], 1, "In a yes-or-no question the verb comes first. Jobbar du?"]
    ],
    practice: [
      ["mc", "Which sentence starts with idag and puts the verb second?", "Idag jobbar jag.", "Idag jag jobbar.", "Jag idag jobbar.", "Idag är jobbar jag.", "Verb second: idag first, then jobbar, then jag. Not: Idag jag jobbar."],
      ["mc", "Which sentence starts with idag and puts the verb second? (weather)", "Idag regnar det.", "Idag det regnar.", "Det idag regnar.", "Idag regnar jag.", "Verb second: idag first, then regnar, then det. Not: Idag det regnar."],
      ["mc", "Monday, the day name, is spelled…", "måndag", "mandag", "måndagen", "måndagar", "The day is lowercase måndag, with å. The bare name has no extra ending.", "!strict"],
      ["mc", "Which sentence starts with måndag and puts the verb second?", "Måndag jobbar jag.", "Måndag jag jobbar.", "Jag måndag jobbar.", "Måndag är jobbar jag.", "Verb second: måndag first, then jobbar, then jag."],
      ["mc", "Saturday is spelled…", "lördag", "lordag", "lårdag", "lardag", "Saturday is lördag, with ö. o and å are different letters.", "!strict"],
      ["or", "Today I'm working. (start with idag)", "Idag jobbar jag", "är", "Verb second: idag first, then jobbar, then jag."],
      ["or", "Are you working? (start with the verb)", "Jobbar du", "är", "In a yes-or-no question the verb comes first."],
      ["or", "a day", "en dag", "ett", "dag is an en-word: en dag."],
      ["fi", "Idag __ jag.", "Today I'm working. (start with idag)", "jobbar|arbetar", "regnar|är|bor", "Verb second: after idag the next piece is the verb, then jag. jobbar and arbetar both mean work."],
      ["fi", "Idag regnar __.", "Today it's raining.", "det", "jag|du|den", "Weather uses det. Idag regnar det, with the verb second."],
      ["fi", "__ jobbar jag.", "On Monday I'm working. (the day alone, no på)", "måndag", "idag|imorgon|igår", "The day comes first, then the verb, then jag. måndag is Monday."],
      ["ty", "Today I'm working. (start with idag)", "Idag jobbar jag.|Idag arbetar jag.", "idag · jobbar · start with idag", "är", "Verb second: idag first, then the verb, then jag. jobbar and arbetar both mean work."],
      ["ty", "Tomorrow it's raining. (start with imorgon)", "Imorgon regnar det.", "imorgon · regnar · start with imorgon", "är", "Verb second: imorgon first, then regnar, then det."],
      ["ty", "a day", "en dag", "dag · common gender", "ett", "dag is an en-word: en dag."]
    ]
  }
];

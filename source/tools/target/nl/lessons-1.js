/* en-nl lessons 1-10 (vowels through plural). Written by EN-NL-1. Every pron is the output of tools/target/nl/respell.js. */
module.exports = [
  {
    id: "vowels",
    title: "Vowels and spelling",
    blurb: "Read the pronunciation line, and spell short and long vowels so man and maan stay apart.",
    deck: "Sounds and spelling",
    body: `
<p>Every Dutch phrase here has a pronunciation line in English letters. One syllable stays in small letters. A longer word puts the stressed syllable in CAPITALS. The line is an aid, not a measurement.</p>
<h3>Short, long, and no glide</h3>
<p><b>maan</b> is not the English word name, and <b>been</b> is not the English word seen. A short vowel sits in a closed syllable, one that ends in a consonant: <b>man</b>. In a closed syllable a long vowel is written with two letters: <b>maan</b>.</p>
<div class="tbl"><table><tr><th>Spelling</th><th>The line</th><th>As in</th></tr><tr><td class="k">a closed</td><td>ah</td><td class="k">man</td></tr><tr><td class="k">aa, or open a</td><td>aah</td><td class="k">maan</td></tr><tr><td class="k">ie</td><td>ee</td><td class="k">fiets</td></tr><tr><td class="k">oo, or open o</td><td>oh</td><td class="k">boom</td></tr><tr><td class="k">oe</td><td>oo</td><td class="k">boek</td></tr><tr><td class="k">u short</td><td>ue</td><td class="k">rug</td></tr><tr><td class="k">uu</td><td>ee, rounded</td><td class="k">muur</td></tr></table></div>
{{ex:de man|uh mahn|the man}}
{{ex:de maan|uh maahn|the moon}}
{{ex:de fiets|uh feets|the bike}}
<p><b>ie</b> is the ee of see. <b>oe</b> is the vowel of food, not the oh of <b>boom</b>. Short <b>u</b> in <b>rug</b> is rounded and forward, not the u of but or book. Long <b>uu</b> in <b>muur</b> is that ee with rounded lips.</p>
{{ex:de muur|uh muur|the wall}}
<h3>One letter or two</h3>
<p><b>mannen</b>, the men, doubles the n so the a in <b>man</b> stays short. <b>manen</b>, the moons, is ma-nen: one a in an open syllable, so the a is long. <b>wonen</b>, to live somewhere, has one long o for the same reason. <b>nemen</b>, to take, has one long e: a steady ay, not the ee of see. <b>naam</b> uses that long aa, with no English glide.</p>
{{ex:de mannen|uh MAH-nuh|the men}}
{{ex:de manen|uh MAAH-nuh|the moons}}
{{ex:wonen|WOH-nuh|to live (somewhere)}}
{{ex:de naam|uh naahm|the name}}
<h3>What the line leaves out</h3>
<p><b>ui</b> and <b>eu</b> need rounded lips. The line writes <i>uy</i> and <i>euh</i>. The next lesson trains them. <b>p</b>, <b>t</b> and <b>k</b> have no puff of air. <b>r</b> may be a tap, a throat r, or an English-like r after a vowel. Do not start with an English r. The line writes r. <b>w</b> is the lower lip on the teeth, not an English w. At the start of a word, <b>v</b> and <b>z</b> often have little voice in the north and west. The line still writes them. Either way is understood. Unstressed <b>-ig</b> is a light kh. The line drops the n of <b>-en</b>: <b>werken</b>, to work, is WEHR-kuh. The voice may keep the n. That is not an error.</p>
{{ex:werken|WEHR-kuh|to work}}
<p><b>de</b> and <b>het</b> both mean "the". The card stores which one a noun takes. <b>de man</b> takes de. <b>het huis</b> takes het.</p>
{{ex:het huis|uht huys|the house}}
<div class="tip"><b>Most common mistake:</b> reading <b>maan</b> like English "name" → <b>maan</b> with a long steady ah and no glide.</div>
`,
    check: [
      ["Why does mannen have two n's?", ["To keep the a short", "To make the a long", "Because every plural doubles a letter", "The second n is silent"], 0, "A doubled consonant keeps the vowel short: man, mannen. mannen means the men."],
      ["What do de and het both mean?", ["a or an", "one", "the", "and"], 2, "de and het both mean the. The noun decides which one you use."],
      ["The line drops the n in werken, and the voice says the n. What is true?", ["The card is wrong", "Keeping the n is not an error", "You must never say the n", "The n becomes an m"], 1, "The aid drops the n of -en. The voice may keep it. Both are fine."]
    ],
    practice: [
      ["mc", "Which word has a short a?", "de man", "de maan", "de manen", "de naam", "man is a closed syllable, so the a is short. maan has a long aa."],
      ["mc", "Which word means the moons?", "de manen", "de mannen", "de man", "de maan", "One a in an open syllable is long: manen, the moons. mannen, with two n's, means the men."],
      ["mc", "The ie in fiets sounds like", "the ee of see", "the i of sit", "English eye", "a silent letter", "ie is one sound, the ee of see."],
      ["mc", "de and het both mean", "the", "a", "one", "and", "Both small words mean the. The card stores which noun takes which."],
      ["mc", "The line writes werken without the n of -en. The voice says the n.", "That is not an error", "The voice is wrong", "You must drop the n every time", "The n is always silent", "The aid drops the n. Hearing it is ordinary, and it is not a mistake."],
      ["or", "the man", "de man", "het", "de-word: man takes de, not het."],
      ["or", "the house", "het huis", "de", "het-word: huis takes het, not de."],
      ["or", "the moons", "de manen", "mannen", "One a in an open syllable is long: de manen. de mannen means the men."],
      ["fi", "de __", "the man", "man", "maan|mannen|manen", "man is the closed syllable, with a short a."],
      ["fi", "de __", "the moon", "maan", "man|manen|mannen", "The moon is maan, written with aa."],
      ["fi", "__ huis", "the house", "het", "de|man|maan", "het-word: huis takes het, not de."],
      ["ty", "the man", "de man", "man · with de", "het", "de-word: man is stored with de, not het."],
      ["ty", "the house", "het huis", "huis · with het", "de", "het-word: huis is stored with het, not de."],
      ["ty", "the moons", "de manen", "maan · one a", "mannen", "An open syllable uses one a for the long vowel: de manen."]
    ]
  },
  {
    id: "sounds",
    title: "The hard sounds",
    blurb: "Say g, ch, ui, eu, ij and sch, and keep the spelling when a final d sounds like t.",
    deck: "Hard sounds",
    body: `
<p>A handful of Dutch spellings do not match English at all. The pronunciation line writes them with the same letters every time. Say the Dutch sound, not the English letter name.</p>
<h3>g and ch are one sound</h3>
<p>In this accent, <b>g</b> and <b>ch</b> are the same sound: the kh of Scottish <i>loch</i>, not the g of English <i>good</i>. <b>goed</b> starts with that kh. <b>lachen</b>, to laugh, has it in the middle. <b>acht</b>, eight, ends with it. The line writes kh for both letters.</p>
{{ex:goed|khoot|good}}
{{ex:acht|ahkht|eight}}
{{ex:lachen|LAH-khuh|to laugh}}
<p>In Flanders and the south of the Netherlands this sound is softer. This course uses the harder sound of the northern news accent. Both are standard.</p>
<h3>ui, eu, ij, oe, ou</h3>
<p><b>ui</b> has no English word. Start open, then round your lips. <b>huis</b> has it, and so does a lot of everyday vocabulary. <b>eu</b> is the vowel of French <i>deux</i>, with rounded lips and no y-glide. <b>deur</b> has it. The line writes ui as <i>uy</i> and eu as <i>euh</i>. Those letters are a reminder, not a picture.</p>
{{ex:het huis|uht huys|the house}}
{{ex:de deur|uh deuhr|the door}}
<p><b>ij</b> and <b>ei</b> are the same sound, wider than English <i>eye</i>. The line writes <i>igh</i>. You learn the spelling with the word: <b>klein</b> is ei, and it means small. <b>oe</b> is one sound, the vowel of food, not an oh plus another vowel. <b>de hoed</b>, the hat, has it, and the final d sounds like t. <b>ou</b> and <b>au</b> are the vowel of <i>cow</i>. The line writes <i>ow</i>. <b>koud</b> means cold. <b>blauw</b> means blue.</p>
{{ex:klein|klighn|small}}
{{ex:de hoed|uh hoot|the hat}}
{{ex:koud|kowt|cold}}
<h3>sch, and a quiet ending</h3>
<p><b>sch</b> is s plus that kh. It is never sk, and it is never sh. <b>school</b> starts that way.</p>
{{ex:de school|uh skhohl|the school}}
<p>At the end of a word, <b>d</b> sounds like t, and <b>b</b> sounds like p. The spelling stays d or b, because the voiced sound comes back when a vowel follows. <b>hond</b>, the dog, sounds as if it ended in t. <b>honden</b>, the dogs, brings the d back. Do not respell the singular as hont.</p>
{{ex:de hond|uh hawnt|the dog}}
{{ex:de honden|uh HAWN-duh|the dogs}}
<p><b>de</b> and <b>het</b> both mean "the". <b>het huis</b> takes het. <b>de deur</b>, <b>de school</b> and <b>de hond</b> take de. The card stores the one that belongs to the noun.</p>
<div class="tip"><b>Most common mistake:</b> saying <b>goed</b> with the g of English "good" → <b>goed</b> with the kh of Scottish "loch".</div>
`,
    check: [
      ["What is the g in goed?", ["The g of English good", "The kh of Scottish loch", "The y of yes", "Silent"], 1, "In this accent g and ch are one sound, the kh of loch, not an English g."],
      ["The last sound of hond is", ["t, while the spelling stays d", "a fully voiced d", "silent", "kh"], 0, "Final d sounds like t. The plural honden brings the d back, so the spelling stays d."],
      ["Which sentence matches this course?", ["The soft southern g is a mistake", "Only the English g is correct", "Flanders has no g", "The southern g is softer, and both that g and the harder northern g are standard"], 3, "In Flanders and the south the g is softer. This course uses the harder northern sound. Both are standard."]
    ],
    practice: [
      ["mc", "The g in goed sounds like", "the kh of Scottish loch", "the g of English good", "the y of yes", "s", "g and ch are the kh of loch in this accent."],
      ["mc", "the house =", "het huis", "de huis", "het deur", "de hond", "huis takes het. deur and hond take de."],
      ["mc", "The last sound of hond is", "t", "a voiced d", "kh", "silent", "Final d sounds like t. The letter stays d because honden brings it back."],
      ["mc", "sch in school is", "s plus kh", "sk", "sh", "the ch of chair", "sch is s plus the kh sound. It is never sk or sh."],
      ["mc", "ui in huis", "needs rounded lips and has no English match", "sounds like English you", "sounds like ee", "is silent", "ui has no English word. Round your lips. The line writes uy."],
      ["or", "the man", "de man", "het", "de-word: man takes de, not het."],
      ["or", "the house", "het huis", "de", "het-word: huis takes het, not de."],
      ["or", "the door", "de deur", "het", "de-word: deur takes de, not het."],
      ["fi", "__ huis", "the house", "het", "de|deur|man", "het-word: huis takes het, not de."],
      ["fi", "__ deur", "the door", "de", "het|een|huis", "de-word: deur takes de, not het."],
      ["fi", "de __", "the dog", "hond", "hont|honden|huis", "The spelling stays hond. The final sound is t, and honden brings the d back."],
      ["ty", "the man", "de man", "man · de", "het", "de-word: man is stored with de, not het."],
      ["ty", "the house", "het huis", "huis · het", "de", "het-word: huis is stored with het, not de."],
      ["ty", "good", "goed", "goed · g is kh", "acht", "The g of goed is the kh of loch, and the spelling keeps the final d."]
    ]
  },
  {
    id: "greetings",
    title: "Greetings and how are you",
    blurb: "Greet someone, choose je or u, and answer Hoe gaat het? without saying Ik ben goed.",
    deck: "Greetings and courtesy",
    body: `
<p><b>Hallo</b> works at any hour. Friends also say <b>Hoi</b>. <b>Dag</b> is hello or goodbye. The line stresses <b>Hallo</b> on the first syllable. Many speakers stress the second. Either is understood.</p>
{{ex:Hallo.|HAH-loh|Hello.}}
{{ex:Dag.|dahkh|Hello or goodbye.}}
<h3>Morning, afternoon, evening, night</h3>
<p>Each time-of-day greeting is one word. <b>Goedemorgen</b> is good morning. <b>Goedemiddag</b> is good afternoon, from about noon. <b>Goedenavond</b> is good evening, after dark, as a hello. <b>Goedenacht</b> is a goodbye at night, while you are still up. When someone is going to sleep, you will also hear <b>welterusten</b>. The line often stresses these words at the start. Speech often stresses the time-of-day part. Do not treat the capitals as a measurement.</p>
{{ex:Goedemorgen.|KHOO-duh-mawr-khuh|Good morning.}}
<h3>How are you?</h3>
<p>Dutch asks how it goes, and puts the verb second, right after <b>Hoe</b>: <b>Hoe gaat het?</b> Not <b>Hoe het gaat?</b> A friend can add <b>met je</b>. A stranger, shop staff, someone older, or the town hall gets <b>Hoe gaat het met u?</b></p>
{{ex:Hoe gaat het?|hoo khaaht uht|How are you?}}
<p>Do not answer <b>Ik ben goed</b>. Dutch uses <b>het gaat</b>. <b>Het gaat goed</b> means I'm fine. <b>Het gaat wel</b> is softer: I'm all right. <b>Goed, dank je</b> is fine, thanks, to a friend.</p>
{{ex:Het gaat goed.|uht khaaht khoot|I'm fine.}}
{{ex:Het gaat wel.|uht khaaht wehl|I'm all right.}}
{{ex:Goed, dank je.|khoot dahnk yuh|Fine, thanks.}}
<h3>je for a friend, u when it matters</h3>
<p>English has one you. <b>je</b> is for friends, family, and people your age. <b>jij</b> is that word when you stress it. <b>u</b> is for a stranger, staff, someone older, and any time you are not sure. Even Dutch speakers hesitate. If you are not sure, use <b>u</b>. <b>Bedankt</b> means thank you and does not choose.</p>
<div class="tbl"><table><tr><th></th><th>To a friend</th><th>To a stranger</th></tr><tr><td>Thank you.</td><td class="k">Dank je wel.</td><td class="k">Dank u wel.</td></tr><tr><td>Please, or here you are.</td><td class="k">Alsjeblieft.</td><td class="k">Alstublieft.</td></tr><tr><td>How are you?</td><td class="k">Hoe gaat het?</td><td class="k">Hoe gaat het met u?</td></tr></table></div>
{{ex:Dank je wel.|dahnk yuh wehl|Thank you. (to a friend)}}
{{ex:Dank u wel.|dahnk uu wehl|Thank you. (to a stranger)}}
{{ex:Alstublieft.|ahl-stue-BLEEFT|Here you are, or please. (to a stranger)}}
<p><b>Alsjeblieft</b> is the friend form. In normal speech the s and the j run together into sh, and the stress is on the last syllable, as the line shows. <b>Graag gedaan</b> means you're welcome. <b>Pardon</b> is excuse me. Stress it on the second syllable. <b>Tot ziens</b> is a neutral goodbye, and <b>Doei</b> is bye to a friend.</p>
{{ex:Alsjeblieft.|ahl-shuh-BLEEFT|Here you are, or please. (to a friend)}}
{{ex:Graag gedaan.|khraahkh khuh-DAAHN|You're welcome.}}
<div class="tip"><b>Most common mistake:</b> <b>Ik ben goed</b> → <b>Het gaat goed</b>.</div>
`,
    check: [
      ["Someone asks Hoe gaat het? A good answer is", ["Ik ben goed.", "Ik heb goed.", "Het gaat goed.", "Ben ik goed."], 2, "The answer uses het gaat. Het gaat goed means I'm fine. Ik ben goed is the English pattern, and it is the wrong answer."],
      ["You thank a stranger in a shop. You say", ["Dank u wel.", "Dank je wel.", "Dank jij wel.", "Dank je u."], 0, "A stranger gets u: Dank u wel. Dank je wel is for a friend."],
      ["You are not sure whether to say je or u. You", ["guess je", "use u", "use jij, because it is polite", "skip the greeting"], 1, "When you are not sure, use u. The other person can invite you to je."]
    ],
    practice: [
      ["mc", "Someone asks Hoe gaat het? You answer", "Het gaat goed.", "Ik ben goed.", "Ik heb goed.", "Ben ik goed.", "I'm fine is Het gaat goed. Ik ben goed is the wrong answer to this question."],
      ["mc", "Fine, thanks. (to a friend) =", "Goed, dank je.", "Ik ben goed.", "Goed ben ik.", "Dank je goed.", "Fine, thanks is Goed, dank je. It is not Ik ben goed."],
      ["mc", "Thank you. (to a stranger) =", "Dank u wel.", "Dank je wel.", "Dank jij wel.", "Dank je u.", "A stranger gets u: Dank u wel."],
      ["mc", "Here you are. (to a friend) =", "Alsjeblieft.", "Alstublieft.", "Graag gedaan.", "Pardon.", "A friend gets Alsjeblieft. Alstublieft is the stranger form. Graag gedaan means you're welcome."],
      ["mc", "You do not know whether je or u fits. You use", "u", "je", "jij", "no word for you", "When you are not sure, use u."],
      ["or", "How are you? (three words)", "Hoe gaat het", "is", "verb second: Hoe gaat het, the verb before het, not Hoe het gaat."],
      ["or", "I'm fine. (start with Het, use goed)", "Het gaat goed", "ben", "verb second: Het gaat goed, not Het goed gaat."],
      ["or", "Thank you. (to a friend)", "Dank je wel", "u", "A friend gets je: Dank je wel. u is for a stranger."],
      ["fi", "Hoe __ het?", "How are you?", "gaat", "is|ben|ga", "The greeting is Hoe gaat het. The verb sits in second place."],
      ["fi", "Het gaat __.", "I'm fine. (use goed)", "goed", "wel|ben|goede", "Fine is goed. wel is the softer I'm all right. ben does not belong in this sentence."],
      ["fi", "Dank __ wel.", "Thank you. (to a stranger)", "u", "je|jij|jullie", "A stranger gets u. je is for a friend. jij is the stressed subject, not this phrase."],
      ["ty", "How are you? (three words, use gaan)", "Hoe gaat het", "hoe · gaan", "is", "verb second: Hoe gaat het puts gaat before het. Hoe het gaat is not the question."],
      ["ty", "I'm fine. (three words, start with Het, use goed)", "Het gaat goed", "het · gaan", "ben", "verb second: Het gaat goed keeps gaat in second place, not Het goed gaat."],
      ["ty", "Here you are. (to a friend)", "Alsjeblieft", "alsjeblieft", "Alstublieft", "A friend gets Alsjeblieft. Alstublieft is the form for a stranger."]
    ]
  },
  {
    id: "intro",
    title: "Introducing yourself",
    blurb: "Give your name, where you are from, where you live, and what you study.",
    deck: "About me",
    body: `
<h3>Your name</h3>
<p>English says my name is. Dutch for that introduction is <b>Ik heet</b>, then your name. <b>Ik heet Anna.</b> <b>Ik ben Anna</b>, I'm Anna, also works when you meet someone. You will also hear <b>Mijn naam is Anna.</b> Ask a friend <b>Hoe heet je?</b> Ask a stranger <b>Hoe heet u?</b> The verb already ends in t, so both questions look the same at <b>heet</b>.</p>
{{ex:Ik heet Anna.|ihk hayt AH-nah|My name is Anna.}}
{{ex:Hoe heet je?|hoo hayt yuh|What's your name? (to a friend)}}
{{ex:Hoe heet u?|hoo hayt uu|What's your name? (to a stranger)}}
<h3>Where you are from, where you live</h3>
<p>Origin takes <b>uit</b>. <b>Ik kom uit Nederland.</b> English puts the before the Netherlands. Dutch does not. A city works the same way: <b>Ik kom uit Amsterdam.</b> Ask a friend <b>Waar kom je vandaan?</b> The verb is second, right after <b>Waar</b>, and <b>vandaan</b> stays at the end. A stranger keeps a t: <b>Waar komt u vandaan?</b></p>
{{ex:Ik kom uit Nederland.|ihk kawm uyt NAY-duhr-lahnt|I come from the Netherlands.}}
{{ex:Waar kom je vandaan?|waahr kawm yuh vahn-DAAHN|Where are you from? (to a friend)}}
{{ex:Waar komt u vandaan?|waahr kawmt uu vahn-DAAHN|Where are you from? (to a stranger)}}
<p>Where you live takes <b>woon</b> and <b>in</b>: <b>Ik woon in Utrecht.</b> Amsterdam, Rotterdam, Den Haag and Groningen use the same shape. <b>Den Haag</b> is The Hague, two words, with no de or het in front. <b>Ik ben in Utrecht</b> means you are there now, not that you live there. Start with <b>Ik</b> and the verb is next: <b>Ik woon in Utrecht</b>, not <b>Ik in Utrecht woon</b>.</p>
{{ex:Ik woon in Utrecht.|ihk wohn ihn UU-trehkht|I live in Utrecht.}}
{{ex:Ik woon in Den Haag.|ihk wohn ihn dehn haahkh|I live in The Hague.}}
<h3>Study and a little Dutch</h3>
<p><b>Ik studeer</b> means I study. <b>Ik spreek een beetje Nederlands</b> means I speak a little Dutch. <b>een</b> here means a, said uhn. Language names take a capital: <b>Nederlands</b>, <b>Engels</b>. A friend: <b>Spreek je Engels?</b> A stranger: <b>Spreekt u Engels?</b> When <b>je</b> comes after the verb, the verb has no t. With <b>u</b> the t stays. A role takes no article: <b>Ik ben student</b> means I'm a student.</p>
{{ex:Ik studeer.|ihk stuu-DAYR|I study.}}
{{ex:Ik spreek een beetje Nederlands.|ihk sprayk uhn BAY-tyuh NAY-duhr-lahnds|I speak a little Dutch.}}
{{ex:Spreek je Engels?|sprayk yuh EHNG-uhls|Do you speak English? (to a friend)}}
{{ex:Ik ben student.|ihk behn stuu-DEHNT|I'm a student.}}
<div class="tip"><b>Most common mistake:</b> <b>Ik kom van Nederland</b> → <b>Ik kom uit Nederland</b>.</div>
`,
    check: [
      ["My name is Anna. (use heten) =", ["Ik heten Anna.", "Ik heet Anna.", "Ik heet is Anna.", "Mijn heet Anna."], 1, "With ik, heten becomes heet: Ik heet Anna. heet already means is called, so no is."],
      ["I come from the Netherlands. =", ["Ik kom uit Nederland.", "Ik kom van Nederland.", "Ik kom uit de Nederland.", "Ik kom in Nederland."], 0, "Origin takes uit, and Nederland has no article in this sentence."],
      ["What's your name? (to a friend) =", ["Hoe heet u?", "Hoe heet jij bent?", "Hoe heet je?", "Hoe ben je?"], 2, "A friend gets je: Hoe heet je? Hoe heet u? is for a stranger."]
    ],
    practice: [
      ["mc", "My name is Anna. (use heten) =", "Ik heet Anna.", "Ik heten Anna.", "Ik heet is Anna.", "Mijn heet Anna.", "With ik, heten becomes heet. heet already means is called, so no is."],
      ["mc", "I come from the Netherlands. =", "Ik kom uit Nederland.", "Ik kom van Nederland.", "Ik kom uit de Nederland.", "Ik kom in Nederland.", "uit marks origin. Nederland takes no article here. in would be about arriving or living."],
      ["mc", "I live in Utrecht. =", "Ik woon in Utrecht.", "Ik woon uit Utrecht.", "Ik woon op Utrecht.", "Ik ben in Utrecht.", "Living somewhere is woon in. Ik ben in Utrecht means you are there right now."],
      ["mc", "I study. =", "Ik studeer.", "Ik studeert.", "Ik studeren.", "Ik ben studeer.", "I study is Ik studeer."],
      ["mc", "The Hague is", "Den Haag", "De Haag", "Het Haag", "Haag Den", "The Hague is Den Haag, two words, with no de or het in front."],
      ["or", "the man", "de man", "het", "de-word: man takes de, not het."],
      ["or", "the house", "het huis", "de", "het-word: huis takes het, not de."],
      ["or", "Where are you from? (the question, to a friend, use je, start with Waar)", "Waar kom je vandaan", "komt", "verb second: Waar kom je vandaan, the verb before je, not Waar je kom vandaan."],
      ["fi", "Ik __ Anna.", "My name is Anna. (use heten)", "heet", "heten|is|woon", "With ik, heten becomes heet: Ik heet Anna."],
      ["fi", "Ik kom __ Nederland.", "I come from the Netherlands.", "uit", "van|in|naar", "A country you come from takes uit. Nederland has no article here."],
      ["fi", "Ik woon __ Utrecht.", "I live in Utrecht.", "in", "uit|op|van", "woon takes in for a city. uit is for the place you come from."],
      ["ty", "the man", "de man", "man · de", "het", "de-word: man takes de, not het."],
      ["ty", "the house", "het huis", "huis · het", "de", "het-word: huis takes het, not de."],
      ["ty", "I live in Utrecht. (start with Ik, use woon)", "Ik woon in Utrecht", "wonen · Utrecht", "uit", "verb second: Ik woon in Utrecht keeps woon second, not Ik in Utrecht woon."]
    ]
  },
  {
    id: "zijn-hebben",
    title: "zijn and hebben",
    blurb: "Use ik ben and ik heb, and say you are fine, hungry, or cold the Dutch way.",
    deck: "Feelings and states",
    body: `
<p>English uses to be for almost every feeling. Dutch splits the work. <b>zijn</b> is to be. <b>hebben</b> is to have. With <b>ik</b>, those are <b>ik ben</b> and <b>ik heb</b>. A lot of "I am" sentences in English are <b>ik heb</b> in Dutch.</p>
<h3>ik, je, and u</h3>
<div class="tbl"><table><tr><th></th><th>zijn, to be</th><th>hebben, to have</th></tr><tr><td>ik</td><td class="k">ik ben</td><td class="k">ik heb</td></tr><tr><td>jij, before the verb</td><td class="k">jij bent</td><td class="k">jij hebt</td></tr><tr><td>je, after the verb</td><td class="k">ben je</td><td class="k">heb je</td></tr><tr><td>u</td><td class="k">u bent</td><td class="k">u hebt, or u heeft</td></tr><tr><td>a name</td><td class="k">Anna is</td><td class="k">Anna heeft</td></tr></table></div>
<p>When <b>je</b> follows the verb, the form shortens: <b>ben je</b>, <b>heb je</b>. <b>u</b> does not shorten. For to have, both <b>u hebt</b> and <b>u heeft</b> are used. This course accepts both. A name takes <b>is</b> and <b>heeft</b>: <b>Anna is moe</b>, <b>Anna heeft honger</b>.</p>
{{ex:Ben je moe?|behn yuh moo|Are you tired?}}
{{ex:U heeft honger.|uu hayft HAWNG-uhr|You are hungry. (formal)}}
{{ex:Anna is moe.|AH-nah ihs moo|Anna is tired.}}
<h3>Fine, tired, hungry, cold</h3>
<p>You already answer <b>Hoe gaat het?</b> with <b>Het gaat goed</b> or the softer <b>Het gaat wel</b>. Do not switch that answer to <b>ik ben</b>. Tired uses <b>zijn</b>: <b>Ik ben moe.</b> Sick uses <b>zijn</b> too: <b>Ik ben ziek.</b> Hungry uses <b>hebben</b>: <b>Ik heb honger.</b> Thirsty is the same verb: <b>Ik heb dorst.</b> There is no <b>het</b> in those two.</p>
{{ex:Het gaat goed.|uht khaaht khoot|I'm fine.}}
{{ex:Ik ben moe.|ihk behn moo|I'm tired.}}
{{ex:Ik ben ziek.|ihk behn zeek|I'm sick.}}
{{ex:Ik heb honger.|ihk hehp HAWNG-uhr|I'm hungry.}}
{{ex:Ik heb dorst.|ihk hehp dawrst|I'm thirsty.}}
<p>Feeling cold is <b>Ik heb het koud.</b> <b>Ik ben koud</b> is not that feeling. It describes a cold manner, or a thing that is cold to the touch. Feeling hot is <b>Ik heb het warm.</b> The cards add more feelings. The note on each card tells you whether that word takes <b>zijn</b> or <b>hebben</b>. Sleepy, for example, is <b>Ik heb slaap</b>, while tired stays <b>Ik ben moe</b>.</p>
{{ex:Ik heb het koud.|ihk hehp uht kowt|I'm cold.}}
{{ex:Ik heb het warm.|ihk hehp uht wahrm|I feel hot.}}
<p>If you start with <b>Ik</b>, the verb is the next word. <b>Ik ben moe</b>, not <b>Ik moe ben</b>. <b>Ik heb honger</b>, not <b>Ik honger heb</b>. The question puts the verb first: <b>Ben je moe?</b> <b>Heb je honger?</b></p>
<div class="tip"><b>Most common mistake:</b> <b>Ik ben koud</b> → <b>Ik heb het koud</b>.</div>
`,
    check: [
      ["You feel cold. You say", ["Ik heb het koud.", "Ik ben koud.", "Ik heb koud.", "Ik ben het koud."], 0, "Feeling cold is Ik heb het koud. Ik ben koud describes a cold manner, or a cold surface."],
      ["I'm hungry. =", ["Ik ben honger.", "Ik heb honger.", "Ik heb het honger.", "Ik ben het honger."], 1, "Hunger uses hebben, with no het: Ik heb honger."],
      ["Which is right for u and to have?", ["Only u heb", "Only u ben", "u heeft, and u hebt is a mistake", "u hebt and u heeft are both used"], 3, "With u, both hebt and heeft are used. This course accepts both."]
    ],
    practice: [
      ["mc", "I'm fine. =", "Het gaat goed.", "Ik ben goed.", "Ik heb goed.", "Ik ben het goed.", "Fine stays Het gaat goed. It does not become ik ben."],
      ["mc", "I'm hungry. =", "Ik heb honger.", "Ik ben honger.", "Ik heb het honger.", "Ik ben het honger.", "Hunger uses hebben, and it has no het: Ik heb honger."],
      ["mc", "You feel cold. =", "Ik heb het koud.", "Ik ben koud.", "Ik heb koud.", "Ik ben het koud.", "Feeling cold is Ik heb het koud. Ik ben koud is a cold manner or a cold thing."],
      ["mc", "I'm tired. =", "Ik ben moe.", "Ik heb moe.", "Ik heb het moe.", "Ik ben het moe.", "Tired uses zijn: Ik ben moe."],
      ["mc", "Are you tired? (je after the verb) =", "Ben je moe?", "Bent je moe?", "Heb je moe?", "Is je moe?", "je after the verb uses ben, not bent. Tired uses zijn, so not heb."],
      ["or", "I'm tired. (start with Ik)", "Ik ben moe", "heb", "verb second: Ik ben moe, not Ik moe ben."],
      ["or", "I'm hungry. (start with Ik)", "Ik heb honger", "ben", "verb second: Ik heb honger, not Ik honger heb."],
      ["or", "the house", "het huis", "de", "het-word: huis takes het, not de."],
      ["fi", "Ik __ moe.", "I'm tired.", "ben", "heb|is|bent", "Tired uses zijn. With ik that is ben. bent is the jij form."],
      ["fi", "Ik heb __.", "I'm hungry.", "honger", "koud|moe|dorst", "Hunger is Ik heb honger, with no het. dorst would be thirsty."],
      ["fi", "Ik heb het __.", "I'm cold.", "koud", "honger|warm|moe", "Feeling cold is Ik heb het koud. warm would be feeling hot."],
      ["ty", "I'm tired. (start with Ik)", "Ik ben moe", "zijn · moe", "heb", "verb second: Ik ben moe keeps ben in second place, not Ik moe ben."],
      ["ty", "I'm cold. (start with Ik, use hebben)", "Ik heb het koud", "hebben · koud", "ben", "verb second: Ik heb het koud, not Ik het koud heb. Feeling cold uses hebben."],
      ["ty", "the man", "de man", "man · de", "het", "de-word: man takes de, not het."]
    ]
  },
  {
    id: "de-het",
    title: "de and het",
    blurb: "Store de or het with the noun, and use een when you mean a.",
    deck: "People and family",
    body: `
<p><b>de</b> and <b>het</b> both mean "the". They do not differ in meaning. Nothing in the meaning, and nothing in the English, tells you which noun takes which. About two thirds of Dutch nouns take <b>de</b>. That still does not tell you the next noun. You memorize the small word with the noun, the way the card stores it.</p>
<h3>People</h3>
<p>A person you can point at is usually a de-word. That is common gender. Men and women both take <b>de</b>, so do not sort people into masculine and feminine. <b>de man</b>, <b>de vrouw</b>, <b>de jongen</b>, <b>de vader</b>, <b>de moeder</b>, <b>de broer</b>, <b>de zus</b>, <b>de zoon</b> and <b>de dochter</b> all take de. <b>zus</b> is the everyday word for sister.</p>
{{ex:de vrouw|uh vrow|the woman}}
{{ex:de jongen|uh YAWNG-uh|the boy}}
{{ex:de moeder|uh MOO-duhr|the mother}}
<p>Three family words take <b>het</b>. They are neuter, het-words. <b>het kind</b> is the child. <b>het meisje</b> is the girl: a word ending in <b>-je</b> is a small form, and those take het. <b>het gezin</b> is the family at home, the parents and the children. People are not all de-words.</p>
{{ex:het kind|uht kihnt|the child}}
{{ex:het meisje|uht MIGH-shuh|the girl}}
{{ex:het gezin|uht khuh-ZIHN|the family at home}}
<h3>a, and the number one</h3>
<p><b>een</b> means a or an, said uhn. <b>een huis</b> is a house. <b>het huis</b> is the house. When you mean a, do not put <b>het</b> in front. The number one is a different word, <b>één</b>, with an accent, said ayn. Bare <b>een</b> is the article. <b>een vriend</b> is a male friend, and the final d sounds like t. <b>een vriendin</b> is a female friend when you mean a. <b>de vriendin</b> is the form when you mean the. Say the small word the card shows.</p>
{{ex:een huis|uhn huys|a house}}
{{ex:een vriend|uhn vreent|a (male) friend}}
<p>A plural takes <b>de</b>, even when the singular took het. The plural lesson shows the endings. Until then, store the singular article on the card.</p>
<div class="tip"><b>Most common mistake:</b> <b>de huis</b> → <b>het huis</b>.</div>
`,
    check: [
      ["the woman is", ["het vrouw", "een vrouw", "de vrouw", "het man"], 2, "vrouw takes de. een vrouw means a woman, not the woman."],
      ["a house is", ["een huis", "het huis", "de huis", "één huis"], 0, "a is een. het huis means the house. één is the number one."],
      ["het meisje takes het because", ["every girl takes het and every boy takes de", "the word ends in -je", "meisje is a de-word", "short words take het"], 1, "A word ending in -je is a small form, and those take het."]
    ],
    practice: [
      ["mc", "the woman =", "de vrouw", "het vrouw", "de meisje", "het man", "vrouw takes de. meisje takes het, and man takes de."],
      ["mc", "the child =", "het kind", "de kind", "een kind", "het man", "kind is a het-word. een kind means a child, not the child."],
      ["mc", "a house =", "een huis", "het huis", "de huis", "één huis", "a is een. het huis means the house. één is the number one."],
      ["mc", "the girl =", "het meisje", "de meisje", "het jongen", "een meisje", "meisje ends in -je, so it takes het. een meisje means a girl."],
      ["mc", "How do you know de or het?", "You memorize it with the noun", "Every person takes de", "Short nouns take het", "The English word decides", "There is no safe rule. The card stores the article with the noun."],
      ["or", "the woman", "de vrouw", "het", "de-word: vrouw is common gender, stored with de, not het."],
      ["or", "the child", "het kind", "de", "het-word: kind is neuter, stored with het, not de."],
      ["or", "a house", "een huis", "het", "het-word: a house is een huis. het huis means the house."],
      ["fi", "__ vrouw", "the woman", "de", "het|een|kind", "de-word: vrouw takes de. een would mean a woman."],
      ["fi", "__ kind", "the child", "het", "de|een|vrouw", "het-word: kind is neuter, so the article is het."],
      ["fi", "__ huis", "a house", "een", "het|de|één", "het-word: a house takes een, not het. één is the number one.", "!strict"],
      ["ty", "the boy", "de jongen", "jongen · de", "het", "de-word: jongen is common gender, stored with de."],
      ["ty", "the girl", "het meisje", "meisje · het", "de", "het-word: meisje ends in -je, so it is neuter."],
      ["ty", "a house (use een)", "een huis", "huis · een", "het", "het-word: a house takes een, not het."]
    ]
  },
  {
    id: "present",
    title: "The present tense",
    blurb: "Use the base with ik, add t for jij, hij, zij and u, and drop that t when je follows the verb.",
    deck: "Work and school",
    body: `
<p>The dictionary form ends in <b>-en</b>. <b>werken</b> is to work, <b>wonen</b> is to live, <b>studeren</b> is to study. Drop <b>-en</b> and you have the base. With <b>ik</b> you use that base: <b>ik werk</b>, <b>ik woon</b>, <b>ik studeer</b>. <b>woon</b> keeps a double o, because the o is long and the syllable is now closed.</p>
<h3>The t, and where it drops</h3>
<p><b>jij</b>, <b>hij</b> and <b>zij</b> for she add <b>t</b>. <b>jij werkt</b>. She is <b>zij werkt</b>. <b>u</b> adds <b>t</b> too, and <b>u</b> never drops it, whether <b>u</b> comes before the verb or after. When <b>je</b> or <b>jij</b> comes after the verb, the <b>t</b> drops. A friend question is <b>Werk je hier?</b> A stranger question is <b>Werkt u hier?</b> <b>Woon je in Utrecht?</b> drops the t. <b>Woont u in Utrecht?</b> keeps it. If the base already ends in t, you do not add a second one: <b>jij heet</b>. The drop is invisible on <b>heet</b>, so watch it on <b>werk</b>.</p>
{{ex:Werk je hier?|wehrk yuh heer|Do you work here? (to a friend)}}
{{ex:Werkt u hier?|wehrkt uu heer|Do you work here? (to a stranger)}}
{{ex:Woon je in Utrecht?|wohn yuh ihn UU-trehkht|Do you live in Utrecht? (to a friend)}}
{{ex:Woont u in Utrecht?|wohnt uu ihn UU-trehkht|Do you live in Utrecht? (to a stranger)}}
<h3>More than one person</h3>
<p><b>we</b>, <b>jullie</b> and <b>zij</b> for they use the dictionary form. <b>We werken.</b> <b>Zij werken</b> is they work. The same <b>zij</b> is she when the verb has <b>t</b>, and they when the verb has <b>-en</b>. <b>zijn</b> and <b>hebben</b> do not follow this pattern. You already have <b>ik ben</b> and <b>ik heb</b>.</p>
{{ex:We werken.|wuh WEHR-kuh|We work.}}
{{ex:Zij werkt.|zigh wehrkt|She works.}}
{{ex:Zij werken.|zigh WEHR-kuh|They work.}}
<p>Start with <b>Ik</b> and the verb is the next word. <b>Ik werk in Utrecht.</b> Not <b>Ik in Utrecht werk</b>. <b>Jij werkt in Rotterdam.</b> <b>Ik studeer in Groningen.</b> <b>studeer</b> is stressed on its second syllable. A role still takes no article: <b>Ik ben student.</b> <b>de docent</b> is the teacher, a de-word, and the c before e sounds like s. This course uses <b>docent</b>. <b>het kantoor</b> is the office, a het-word.</p>
{{ex:Ik werk in Utrecht.|ihk wehrk ihn UU-trehkht|I work in Utrecht.}}
{{ex:de docent|uh doh-SEHNT|the teacher}}
{{ex:het kantoor|uht kahn-TOHR|the office}}
<div class="tip"><b>Most common mistake:</b> <b>Werkt je hier?</b> → <b>Werk je hier?</b></div>
`,
    check: [
      ["Do you work here, to a friend?", ["Werkt je hier?", "Werk je hier?", "Werk u hier?", "Werkt je?"], 1, "je after the verb drops the t: Werk je hier?"],
      ["Do you work here, to a stranger?", ["Werk je hier?", "Werk u hier?", "Werkt u hier?", "Werkt je hier?"], 2, "u never drops the t, before the verb or after: Werkt u hier?"],
      ["We work.", ["We werken.", "We werkt.", "We werk.", "Wij werkt."], 0, "we, jullie and zij for they use the dictionary form."]
    ],
    practice: [
      ["mc", "Do you work here? (to a friend) =", "Werk je hier?", "Werkt je hier?", "Werk u hier?", "Werkt je?", "je after the verb drops the t: Werk je hier?"],
      ["mc", "Do you work here? (to a stranger) =", "Werkt u hier?", "Werk u hier?", "Werk je hier?", "Werkt je hier?", "u never drops the t: Werkt u hier?"],
      ["mc", "We work. =", "We werken.", "We werkt.", "We werk.", "Wij werkt.", "we uses the dictionary form: We werken."],
      ["mc", "the office =", "het kantoor", "de kantoor", "het docent", "een kantoor", "kantoor is a het-word. een kantoor means an office, not the office."],
      ["mc", "She works. =", "Zij werkt.", "Zij werken.", "Zij werk.", "Ze werken.", "She adds t: Zij werkt. Zij werken means they work."],
      ["or", "I work in Utrecht. (start with Ik)", "Ik werk in Utrecht", "werkt", "verb second: Ik werk in Utrecht, not Ik in Utrecht werk."],
      ["or", "Do you work here? (use je, start with Werk)", "Werk je hier", "werkt", "inversion: the verb comes before je, and je drops the t."],
      ["or", "the office", "het kantoor", "de", "het-word: kantoor takes het, not de."],
      ["fi", "Ik __ in Utrecht.", "I work in Utrecht.", "werk", "werkt|werken|woon", "With ik you use the base werk. werkt is the jij form. woon means live."],
      ["fi", "__ je hier?", "Do you work here? (use je)", "Werk", "Werkt|Woon|Woont", "inversion: je after the verb, so Werk, with no t."],
      ["fi", "__ kantoor", "the office", "het", "de|een|docent", "het-word: kantoor takes het."],
      ["ty", "Do you work? (use je)", "Werk je|Werk jij", "werk · je after the verb", "werkt", "inversion: Werk je puts the verb before je, and the t drops."],
      ["ty", "the teacher (use docent)", "de docent", "docent · de", "het", "de-word: docent is common gender, stored with de."],
      ["ty", "I work in Utrecht. (start with Ik)", "Ik werk in Utrecht", "werk · Utrecht", "werkt", "verb second: Ik werk in Utrecht, not Ik in Utrecht werk."]
    ]
  },
  {
    id: "pronouns",
    title: "Pronouns and possessives",
    blurb: "Use ik, jij, je, u, hij, zij, we and jullie, and the possessive that matches.",
    deck: "People and family",
    body: `
<p>English you is one word. Dutch splits the person, and it also splits she from they.</p>
<div class="tbl"><table><tr><th>Dutch</th><th>English</th></tr><tr><td class="k">ik</td><td>I</td></tr><tr><td class="k">jij / je</td><td>you, a friend</td></tr><tr><td class="k">u</td><td>you, a stranger</td></tr><tr><td class="k">hij</td><td>he</td></tr><tr><td class="k">zij / ze</td><td>she, or they</td></tr><tr><td class="k">we / wij</td><td>we</td></tr><tr><td class="k">jullie</td><td>you all</td></tr></table></div>
<p><b>jij</b> is the friend word when you stress it. <b>je</b> is the same word unstressed. <b>u</b> is for a stranger, for staff, and for any time you are not sure. <b>wij</b> is we when you stress it. <b>ze</b> is the unstressed form of <b>zij</b>. The verb tells she from they. <b>Zij werkt</b> is she works. <b>Zij werken</b> is they work. Start with <b>Zij</b> and the verb is next.</p>
<p>The verb you already know stays in second place. <b>hij werkt</b> is he works, with the same t as <b>jij</b>. <b>Jij werkt</b> keeps the t because <b>jij</b> is in front. <b>Werk je</b> drops it because <b>je</b> follows the verb. <b>u</b> never drops it. <b>jullie</b> uses the dictionary form, the same as we: <b>jullie werken</b>.</p>
{{ex:Zij werkt.|zigh wehrkt|She works.}}
{{ex:Zij werken.|zigh WEHR-kuh|They work.}}
<h3>Mine and yours</h3>
<p>A possessive sits in front of the noun, and the article does not come back. <b>mijn moeder</b> is my mother, not de mijn moeder. <b>jouw</b> is your, stressed, to a friend. Unstressed, that your is <b>je</b>. <b>uw</b> is your to a stranger. <b>jullie</b> does not grow an ending: <b>jullie moeder</b> is your mother, speaking to more than one person.</p>
{{ex:mijn moeder|mighn MOO-duhr|my mother}}
{{ex:jouw moeder|yow MOO-duhr|your mother (to a friend)}}
{{ex:uw moeder|uew MOO-duhr|your mother (to a stranger)}}
{{ex:jullie moeder|YUE-lee MOO-duhr|your mother (to more than one)}}
<p><b>ons kind</b> is our child. <b>kind</b> is a het-word, so <b>ons</b> has no extra e. <b>onze moeder</b> is our mother. <b>moeder</b> is a de-word, so the e is there. That is the article choice again. The full pattern of the ending comes later. Say <b>ons</b> or <b>onze</b> from the card, and do not put <b>de</b> or <b>het</b> back in front.</p>
{{ex:ons kind|awns kihnt|our child}}
{{ex:onze moeder|AWN-zuh MOO-duhr|our mother}}
<div class="tip"><b>Most common mistake:</b> <b>jij moeder</b> → <b>jouw moeder</b>.</div>
`,
    check: [
      ["She works, using Zij.", ["Zij werkt.", "Zij werken.", "Zij werk.", "We werkt."], 0, "She adds t: Zij werkt. Zij werken means they work."],
      ["our child is", ["onze kind", "onze moeder", "ons kind", "het ons kind"], 2, "kind is a het-word, so our is ons, with no extra e."],
      ["your mother, to a stranger, is", ["jouw moeder", "uw moeder", "mijn moeder", "de moeder"], 1, "A stranger gets uw. jouw is the stressed form for a friend."]
    ],
    practice: [
      ["mc", "my mother =", "mijn moeder", "de mijn moeder", "jouw moeder", "uw moeder", "my is mijn. The article does not come back."],
      ["mc", "your mother (to a stranger) =", "uw moeder", "jouw moeder", "mijn moeder", "de uw moeder", "A stranger gets uw. jouw is for a friend."],
      ["mc", "She works. (use Zij) =", "Zij werkt.", "Zij werken.", "Zij werk.", "We werkt.", "She adds t. Zij werken means they work."],
      ["mc", "our child =", "ons kind", "onze kind", "ons moeder", "het ons kind", "kind is a het-word, so our is ons, with no extra e."],
      ["mc", "They work. (use Zij) =", "Zij werken.", "Zij werkt.", "Zij werk.", "Jullie werkt.", "They use the dictionary form: Zij werken."],
      ["or", "the mother", "de moeder", "het", "de-word: moeder is common gender, stored with de."],
      ["or", "the girl", "het meisje", "de", "het-word: meisje is neuter, because it ends in -je."],
      ["or", "She works. (use Zij, start with Zij)", "Zij werkt", "werk", "verb second: werkt comes right after Zij, and she adds t, so not werk."],
      ["fi", "__ moeder", "my mother", "mijn", "jouw|uw|de", "my is mijn. jouw and uw mean your."],
      ["fi", "__ moeder", "your mother (to a stranger)", "uw", "mijn|jouw|je", "A stranger gets uw. jouw and je are for a friend."],
      ["fi", "Zij __.", "She works. (use Zij)", "werkt", "werk|werken|woon", "She adds t. werken would mean they. woon means live."],
      ["ty", "the woman", "de vrouw", "vrouw · de", "het", "de-word: vrouw is common gender, stored with de."],
      ["ty", "She works. (use Zij, start with Zij)", "Zij werkt", "zij · werken", "werk", "verb second: Zij werkt keeps the verb second, and she adds t, so not werk."],
      ["ty", "our child (use ons)", "ons kind", "kind · ons", "onze", "het-word: kind takes ons, with no -e."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and prices",
    blurb: "Count, say a price with no s on euro, and read half drie as 2:30.",
    deck: "Numbers, time and prices",
    body: `
<p>The number one is <b>één</b>, with an accent, said ayn. Bare <b>een</b> is still the article, said uhn. Then come <b>twee</b>, <b>drie</b>, <b>vier</b>, <b>vijf</b>, <b>zes</b>, <b>zeven</b>, <b>acht</b>, <b>negen</b>, <b>tien</b>.</p>
{{ex:vijf|vighf|five}}
<h3>Eleven and up</h3>
<p><b>elf</b> is eleven and <b>twaalf</b> is twelve. The teens add <b>-tien</b>, with two traps. Fourteen is <b>veertien</b>, not a word built on vier. Eighteen is <b>achttien</b>, with two t's. The tens are <b>twintig</b>, <b>dertig</b>, <b>veertig</b>, <b>vijftig</b>, <b>zestig</b>, <b>zeventig</b>, <b>tachtig</b>, <b>negentig</b>. Forty is <b>veertig</b>. Eighty is <b>tachtig</b>, with a t in front of acht. Twenty-one is one word, <b>eenentwintig</b>, and it uses <b>een</b>, not <b>één</b>. Twenty-two is <b>tweeëntwintig</b>, with two dots on the e so the two e's stay apart. <b>honderd</b> is one hundred.</p>
{{ex:eenentwintig|AY-nuh-twihn-tuhkh|twenty-one}}
{{ex:tweeëntwintig|TWAY-uh-twihn-tuhkh|twenty-two}}
<h3>Euros</h3>
<p>A price adds no s. <b>twee euro</b> is two euros. <b>vijftig cent</b> is fifty cents, and <b>cent</b> stays singular too. <b>Hoeveel kost het?</b> asks the amount. The neutral sentence is <b>De koffie kost twee euro.</b> You can put the price first. The price is one piece, so the verb comes right after it: <b>Twee euro kost de koffie.</b> Not <b>Twee euro de koffie kost</b>. The fronted price and the neutral price mean the same thing. Say them as words here, not as digits. <b>koffie</b> takes <b>de</b>.</p>
{{ex:twee euro|tway EUH-roh|two euros}}
{{ex:vijftig cent|VIGHF-tuhkh sehnt|fifty cents}}
{{ex:De koffie kost twee euro.|uh KAW-fee kawst tway EUH-roh|The coffee costs two euros.}}
{{ex:Twee euro kost de koffie.|tway EUH-roh kawst uh KAW-fee|The coffee costs two euros.}}
{{ex:de koffie|uh KAW-fee|the coffee}}
<h3>The clock, so far</h3>
<p>Time uses <b>Hoe laat is het?</b> Not a sentence built on the English word time. <b>Het is één uur</b> is one o'clock. <b>half</b> means halfway to the next hour. <b>Het is half drie</b> is 2:30, not 3:30.</p>
{{ex:Hoe laat is het?|hoo laaht ihs uht|What time is it?}}
{{ex:Het is half drie.|uht ihs hahlf dree|It is half past two.}}
{{ex:Het is één uur.|uht ihs ayn uur|It is one o'clock.}}
<div class="tip"><b>Most common mistake:</b> reading <b>half drie</b> as 3:30 → <b>half drie</b> is 2:30.</div>
`,
    check: [
      ["half drie means", ["3:30", "2:30", "3:00", "4:30"], 1, "half drie is halfway to three, so 2:30."],
      ["two euros is", ["twee euros", "twee euro's", "twee euro", "twee euron"], 2, "A price adds no s: twee euro."],
      ["What time is it?", ["Hoe laat is het?", "Wat tijd is het?", "Hoe tijd is het?", "Hoeveel kost het?"], 0, "Time is Hoe laat is het? Hoeveel kost het asks the amount."]
    ],
    practice: [
      ["mc", "Het is half drie. What time is it?", "2:30", "3:30", "3:00", "4:30", "half drie is halfway to three, so 2:30."],
      ["mc", "two euros =", "twee euro", "twee euros", "twee euro's", "twee euron", "A price adds no s: twee euro."],
      ["mc", "21 =", "eenentwintig", "een en twintig", "éénentwintig", "tweeëntwintig", "21 is one word, eenentwintig, with een and no accent."],
      ["mc", "What time is it? =", "Hoe laat is het?", "Wat tijd is het?", "Hoe tijd is het?", "Hoeveel kost het?", "Time is Hoe laat is het? Hoeveel kost het asks the price."],
      ["mc", "How much does it cost? =", "Hoeveel kost het?", "Hoe laat is het?", "Wat tijd kost het?", "Hoeveel is laat?", "An amount is Hoeveel kost het? Hoe laat is het asks the time."],
      ["or", "The coffee costs two euros. (use words, start with Twee euro)", "Twee euro kost de koffie", "het", "verb second: Twee euro kost de koffie, not Twee euro de koffie kost."],
      ["or", "the coffee", "de koffie", "het", "de-word: koffie takes de, not het."],
      ["or", "It is half past two. (start with Het)", "Het is half drie", "twee", "half drie is halfway to three, so 2:30."],
      ["fi", "Hoe laat __ het?", "What time is it?", "is", "zijn|kost|heet", "The question is Hoe laat is het. kost asks a price."],
      ["fi", "Het is half __.", "It is half past two. (use drie)", "drie", "twee|vier|vijf", "half drie is halfway to three, so 2:30. half twee would be 1:30."],
      ["fi", "Het is __ uur.", "It is one o'clock.", "één", "een|twee|drie", "één is the number one. een without the accent is the article.", "!strict"],
      ["ty", "The coffee costs two euros. (use words, start with Twee euro)", "Twee euro kost de koffie", "euro · kost", "het", "verb second: Twee euro kost de koffie, not Twee euro de koffie kost."],
      ["ty", "the coffee", "de koffie", "koffie · de", "het", "de-word: koffie takes de, not het."],
      ["ty", "It is half past two. (start with Het, use half drie)", "Het is half drie", "half · drie", "twee", "half drie is halfway to three, so 2:30."]
    ]
  },
  {
    id: "plural",
    title: "Plurals",
    blurb: "Add -en or -s, and use de for every plural.",
    deck: "Home and routine",
    body: `
<p>Most nouns add <b>-en</b>. <b>de man</b> becomes <b>de mannen</b>. Learn the pair when the spelling shifts. <b>het boek</b> keeps its oe and becomes <b>de boeken</b>. A doubled vowel can return to one letter, and the vowel stays long: <b>de boom</b> becomes <b>de bomen</b>. <b>het huis</b> becomes <b>de huizen</b>, with a z. <b>de stoel</b> becomes <b>de stoelen</b>, not a form with <b>-s</b>. <b>het bed</b> becomes <b>de bedden</b>. The extra d keeps the e short. <b>de deur</b>, the door, becomes <b>de deuren</b>. <b>de fiets</b>, the bike, takes a plain <b>-en</b>: <b>de fietsen</b>.</p>
{{ex:het boek|uht book|the book}}
{{ex:de boeken|uh BOO-kuh|the books}}
{{ex:de huizen|uh HUY-zuh|the houses}}
{{ex:de stoelen|uh STOO-luh|the chairs}}
{{ex:de bedden|uh BEH-duh|the beds}}
<h3>Nouns that add -s</h3>
<p>Many nouns ending in an unstressed <b>-el</b>, <b>-er</b> or <b>-en</b> add <b>-s</b> instead. <b>de tafel</b> becomes <b>de tafels</b>. <b>de kamer</b> becomes <b>de kamers</b>. <b>de keuken</b> becomes <b>de keukens</b>. The ending has to be unstressed: <b>stoel</b> is one stressed syllable, so it takes <b>-en</b>. A final long vowel keeps an apostrophe before the s, so the vowel stays long: <b>de auto</b> becomes <b>de auto's</b>. An <b>-s</b> plural is still <b>de</b>. You say <b>de kamers</b> and <b>de tafels</b>.</p>
{{ex:de kamer|uh KAAH-muhr|the room}}
{{ex:de kamers|uh KAAH-muhrs|the rooms}}
{{ex:de auto's|uh OW-tohs|the cars}}
<h3>de, and the verb</h3>
<p>Every definite plural takes <b>de</b>, including a noun that was het in the singular. <b>het huis</b>, then <b>de huizen</b>. <b>het bed</b>, then <b>de bedden</b>. <b>het meisje</b> becomes <b>de meisjes</b>, and <b>het kind</b> becomes <b>de kinderen</b>. Both of those plurals are stressed on the first syllable, and <b>kinderen</b> is irregular. You still say <b>de</b>.</p>
<p>The plural verb is the dictionary form, in second place. <b>De mannen werken.</b> Not <b>De mannen werkt</b>. For the statement, start with <b>De</b>.</p>
{{ex:De mannen werken.|uh MAH-nuh WEHR-kuh|The men work.}}
<div class="tip"><b>Most common mistake:</b> <b>het huizen</b> → <b>de huizen</b>.</div>
`,
    check: [
      ["the houses is", ["het huizen", "de huizen", "de huis", "het huis"], 1, "A plural takes de, even though huis is a het-word in the singular."],
      ["Which plural adds -s?", ["de kamers", "de stoelen", "de mannen", "de huizen"], 0, "kamer ends in an unstressed -er, so the plural is de kamers. stoel takes -en."],
      ["The men work.", ["De mannen werkt.", "De mannen werk.", "De mannen werken.", "Het mannen werken."], 2, "The plural verb is the dictionary form, in second place: De mannen werken."]
    ],
    practice: [
      ["mc", "the houses =", "de huizen", "het huizen", "de huis", "het huis", "A plural takes de, even though huis is a het-word."],
      ["mc", "the rooms =", "de kamers", "de kameren", "het kamers", "de kamer", "kamer adds -s: de kamers. The plural article is de."],
      ["mc", "the chairs =", "de stoelen", "de stoels", "het stoelen", "de stoel", "stoel adds -en: de stoelen. It does not add -s."],
      ["mc", "the cars =", "de auto's", "de autos", "het auto's", "de autoen", "The apostrophe keeps the o long: de auto's. The plural article is de."],
      ["mc", "The men work. =", "De mannen werken.", "De mannen werkt.", "Het mannen werken.", "De mannen werk.", "The plural verb is the dictionary form: werken."],
      ["or", "the houses", "de huizen", "het", "de/het: a plural takes de, even when huis is a het-word."],
      ["or", "The men work. (use mannen, start with De)", "De mannen werken", "werkt", "verb second: werken comes right after De mannen, and a plural takes the dictionary form, not werkt."],
      ["or", "the rooms", "de kamers", "kameren", "de-word: kamer adds -s, and the plural takes de."],
      ["fi", "de __", "the houses", "huizen", "huis|huizes|huisen", "huis adds -en, and the z comes back: de huizen."],
      ["fi", "de __", "the rooms", "kamers", "kamer|kameren|stoelen", "kamer adds -s: de kamers. stoelen means chairs."],
      ["fi", "__ bedden", "the beds", "de", "het|een|den", "de/het: bed is het in the singular, and the plural takes de."],
      ["ty", "the houses", "de huizen", "huis · -en", "het", "de/het: a plural takes de, even when huis is a het-word."],
      ["ty", "The men work. (use mannen, start with De)", "De mannen werken", "mannen · werken", "werkt", "verb second: werken comes right after De mannen, and a plural takes the dictionary form, not werkt."],
      ["ty", "the chairs", "de stoelen", "stoel · -en", "stoels", "de-word: stoel adds -en, and the plural takes de."]
    ]
  }
];

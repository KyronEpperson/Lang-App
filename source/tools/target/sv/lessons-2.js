/* en-sv lessons 10–18 (questions … adjectives). Written by EN-SV-2.
   Every pron is the output of tools/target/sv/respell.js, pasted unchanged. */
module.exports = [
  {
    id: "questions",
    title: "Questions",
    blurb: "Ask what, where, who, when, how and why, ask a yes-or-no question, and join two ideas with och, men or eller.",
    deck: "Questions and connectors",
    body: `
<p>English builds a question with <i>do</i>: "Do you live in Stockholm?" Swedish has no word that does that job. The verb itself moves, and the subject comes after it.</p>
<h3>Yes or no</h3>
<p>A yes-or-no question starts with the verb. In a statement the verb is the second element. In a yes-or-no question the verb comes first, and the subject follows. <i>Du bor</i> is a statement. Swap the two words and it is a question.</p>
{{ex:Bor du i Stockholm?|boohr dueh ee STAWK-hawlm|Do you live in Stockholm?}}
{{ex:Är du trött?|aer dueh trurt|Are you tired?}}
<p>Do not copy English <i>do</i> in as <i>gör</i>. <i>gör</i> is a real Swedish verb, the present of <i>göra</i> (to do). It is not a question marker. <i>vill</i> is already the verb, and it means want, not will. The question starts with <i>vill</i>.</p>
{{ex:Vill du ha kaffe?|vihl dueh hah KAHFF-eh|Do you want coffee?}}
<h3>A question word first</h3>
<p>Six words cover most questions. <i>vad</i> is what, <i>var</i> is where, <i>vem</i> is who, <i>när</i> is when, <i>hur</i> is how, and <i>varför</i> is why. The question word is the first element. The verb is the second element. The subject comes after the verb.</p>
{{ex:Vad heter du?|vah HAY-tehr dueh|What's your name?}}
{{ex:Var bor du?|vahr boohr dueh|Where do you live?}}
{{ex:När jobbar du?|naer JAWB-ahr dueh|When do you work?}}
{{ex:Varför jobbar du idag?|vahr-FUR JAWB-ahr dueh ih-DAHG|Why are you working today?}}
<p><i>vem</i> can be the subject itself. Then nothing else sits between the verb and the rest of the sentence. You already know <i>Hur mår du?</i> It has the same shape: question word, verb, <i>du</i>.</p>
{{ex:Vem bor i Stockholm?|vehm boohr ee STAWK-hawlm|Who lives in Stockholm?}}
{{ex:Hur mår du?|huehr mohr dueh|How are you?}}
<h3>och, men, eller</h3>
<p><i>och</i> means and, <i>men</i> means but, and <i>eller</i> means or. Each half of the sentence keeps verb second. <i>men</i> does not push the verb in front of <i>jag</i>. <i>och</i> can also join two people into one subject. That whole subject is the first element, so the verb stays in second place.</p>
{{ex:Jag är trött, men jag jobbar.|jah aer trurt mehn jah JAWB-ahr|I'm tired, but I work.}}
{{ex:Bor du i Stockholm eller i Uppsala?|boohr dueh ee STAWK-hawlm EHL-ehr ee UHP-sah-lah|Do you live in Stockholm or in Uppsala?}}
{{ex:Anna och Erik bor i Malmö.|AHNN-ah aw AY-rihk boohr ee MAHLL-meuh|Anna and Erik live in Malmö.}}
<p>One person is still <i>du</i>, including someone you have just met. <i>ni</i> is you all. The verb does not grow a new ending for <i>ni</i>.</p>
{{ex:Var bor ni?|vahr boohr nee|Where do you all live?}}
<div class="tip"><b>Most common mistake:</b> an English <i>do</i>, or English word order. <i>Gör du vill ha kaffe?</i> → <i>Vill du ha kaffe?</i> And <i>Var du bor?</i> → <i>Var bor du?</i></div>
`,
    check: [
      ["How do you ask Do you live in Stockholm?", ["Bor du i Stockholm?", "Gör du bor i Stockholm?", "Bor du Stockholm i?", "Bor i du Stockholm?"], 0, "A yes-or-no question starts with the verb. Swedish does not add gör."],
      ["In Var bor du, where is the verb?", ["At the end, after du", "Before var", "Right after var", "After gör"], 2, "The question word is first and the verb is the second element."],
      ["Why is Gör du vill ha kaffe wrong?", ["kaffe is an ett-word", "vill is already the verb, so the question starts with vill", "gör means want", "du has to come before vill"], 1, "A modal does not take a gör question. Ask Vill du ha kaffe?"]
    ],
    practice: [
      ["mc", "Do you live in Stockholm?", "Bor du i Stockholm?", "Gör du bor i Stockholm?", "Bor du Stockholm i?", "Bor i du Stockholm?", "A yes-or-no question starts with the verb. There is no gör."],
      ["mc", "Where do you live?", "Var bor du?", "Var du bor?", "Bor var du?", "Gör var du bor?", "var comes first and the verb is next. Var du bor keeps English order."],
      ["mc", "What's your name?", "Vad heter du?", "Vad du heter?", "Vad heter dig?", "Heter vad du?", "vad, then heter, then du. dig is the object form, and it does not fit here."],
      ["mc", "Do you want coffee?", "Vill du ha kaffe?", "Gör du vill ha kaffe?", "Vill ha du kaffe?", "Vill du ha ett kaffe?", "The verb comes first. vill does not take gör, and kaffe here has no article."],
      ["mc", "Which word means but?", "men", "och", "eller", "var", "men means but. och means and, eller means or, and var means where."],
      ["or", "Where do you live? (start with var)", "Var bor du", "gör", "Verb second: var first, then bor, then du."],
      ["or", "a car", "en bil", "ett", "bil is an en-word: en bil."],
      ["or", "Do you want coffee? (start with vill)", "Vill du ha kaffe", "gör", "In a yes-or-no question the verb comes first."],
      ["fi", "__ bor du?", "Where do you live?", "Var", "Vad|Vem|Hur", "var means where. vad would mean what."],
      ["fi", "Vill du ha __ kaffe?", "Do you want a coffee?", "en", "ett|den|det", "kaffe is an en-word: en kaffe."],
      ["fi", "Jag är trött, __ jag jobbar.", "I'm tired, but I work.", "men", "och|eller|varför", "men means but. och would mean and."],
      ["ty", "When do you work? (start with när, use jobbar)", "När jobbar du", "när · jobba · du", "gör", "Verb second: när first, then jobbar, then du."],
      ["ty", "a house", "ett hus", "hus", "en", "hus is an ett-word: ett hus."],
      ["ty", "What's your name? (start with vad, use heter)", "Vad heter du", "vad · heta · du", "dig", "Verb second: vad first, then heter, then du."]
    ]
  },
  {
    id: "negation",
    title: "Where inte goes",
    blurb: "Put inte after the verb in a normal sentence, and before the verb after att.",
    deck: "Home and routine",
    body: `
<p>English puts <i>not</i> before the verb: "I do not understand." Swedish <i>inte</i> is a sentence adverb. In an ordinary sentence it stands after the verb, not before it.</p>
<h3>inte after the verb</h3>
<p>Say the subject, then the verb, then <i>inte</i>. The verb does not grow an ending for <i>jag</i> or <i>du</i>. <i>förstår</i> is understand, <i>äter</i> is eat, and <i>sover</i> is sleep. A place or an object comes after <i>inte</i>.</p>
{{ex:Jag förstår inte.|jah fur-STOHR IHN-teh|I don't understand.}}
{{ex:Jag bor inte i Lund.|jah boohr IHN-teh ee luhnd|I don't live in Lund.}}
{{ex:Jag äter inte frukost.|jah AE-tehr IHN-teh FRUEHK-awst|I don't eat breakfast.}}
{{ex:Jag sover inte.|jah SOOH-vehr IHN-teh|I don't sleep.}}
<p><i>frukost</i> is breakfast, an en-word: <i>en frukost</i>. In <i>jag äter frukost</i> the meal usually has no article, the same way English says "I eat breakfast." <i>hemma</i> means at home. <i>är</i> takes <i>inte</i> in the same slot as any other verb, including with an adjective you already know, such as <i>trött</i>. In a main clause the sentence adverb does not jump in front of <i>är</i>.</p>
{{ex:Jag är inte trött.|jah aer IHN-teh trurt|I'm not tired.}}
{{ex:Jag äter frukost hemma.|jah AE-tehr FRUEHK-awst HEHM-ah|I eat breakfast at home.}}
{{ex:Jag är inte hemma.|jah aer IHN-teh HEHM-ah|I'm not at home.}}
<h3>When today comes first</h3>
<p>Verb second does not go away. If <i>idag</i> is first, the verb is next, then the subject, and <i>inte</i> follows the subject. Do not park <i>inte</i> between <i>idag</i> and the verb.</p>
{{ex:Idag jobbar jag inte.|ih-DAHG JAWB-ahr jah IHN-teh|Today I'm not working.}}
<h3>After att</h3>
<p><i>att</i> here means that. This is one small pattern, not a new tense. After <i>att</i>, <i>inte</i> comes before the verb: subject, then <i>inte</i>, then the verb. You will meet a different <i>att</i>, the one before an infinitive, in a later lesson. Do not mix them up yet.</p>
{{ex:att jag inte förstår|ahtt jah IHN-teh fur-STOHR|that I don't understand}}
<div class="tip"><b>Most common mistake:</b> putting <i>inte</i> where English puts <i>not</i>. <i>Jag inte förstår</i> → <i>Jag förstår inte</i>. After <i>att</i>, the other way: <i>att jag förstår inte</i> → <i>att jag inte förstår</i>.</div>
`,
    check: [
      ["I don't understand.", ["Jag inte förstår.", "Jag förstår inte.", "Jag förstår att.", "Inte jag förstår."], 1, "inte goes after the verb in a main clause."],
      ["In att jag inte förstår, where is inte?", ["After förstår", "Before att", "Between att and jag", "Before förstår"], 3, "After att, inte comes before the verb."],
      ["Today I'm not working, and the sentence starts with idag.", ["Idag jobbar jag inte.", "Idag jag jobbar inte.", "Idag jag inte jobbar.", "Idag inte jobbar jag."], 0, "Verb second: idag, then jobbar, then jag, and inte follows the subject."]
    ],
    practice: [
      ["mc", "I don't understand.", "Jag förstår inte.", "Jag inte förstår.", "Jag förstår att.", "Inte jag förstår.", "inte goes after the verb. Jag inte förstår copies English."],
      ["mc", "I don't live in Lund.", "Jag bor inte i Lund.", "Jag inte bor i Lund.", "Jag bor i inte Lund.", "Jag bor Lund inte.", "inte goes after bor and before the place."],
      ["mc", "that I don't understand", "att jag inte förstår", "att jag förstår inte", "att inte jag förstår", "jag att inte förstår", "After att, inte comes before the verb."],
      ["mc", "Today I'm not working. (start with idag)", "Idag jobbar jag inte.", "Idag jag jobbar inte.", "Idag jag inte jobbar.", "Idag inte jobbar jag.", "Verb second: idag, then the verb, then jag, then inte."],
      ["mc", "a house", "ett hus", "en hus", "ett bil", "en bil", "hus is an ett-word: ett hus. bil is an en-word."],
      ["or", "I don't understand. (start with jag)", "Jag förstår inte", "att", "inte goes after the verb."],
      ["or", "Today I'm not working. (start with idag)", "Idag jobbar jag inte", "att", "Verb second: idag first, then jobbar, then jag. inte goes after jag."],
      ["or", "a car", "en bil", "ett", "bil is an en-word: en bil."],
      ["fi", "Jag förstår __.", "I don't understand.", "inte", "att|och|idag", "inte goes after the verb."],
      ["fi", "att jag __ förstår", "that I don't understand", "inte", "att|idag|och", "inte comes before the verb after att."],
      ["fi", "Jag bor __ i Lund.", "I don't live in Lund.", "inte", "att|och|idag", "inte goes after the verb, before the place."],
      ["ty", "that I don't understand", "att jag inte förstår", "att · förstå · inte comes before the verb", "förstå", "inte comes before the verb after att."],
      ["ty", "I don't eat breakfast. (start with jag)", "Jag äter inte frukost", "äta · inte · frukost", "äta", "inte goes after the verb."],
      ["ty", "a house", "ett hus", "hus", "en", "hus is an ett-word: ett hus."]
    ]
  },
  {
    id: "definite",
    title: "The definite ending",
    blurb: "Say the car and the house by adding a suffix, with no separate word for the.",
    deck: "People and family",
    body: `
<p>English <i>the</i> is its own word, and it does not care what noun follows. Swedish has no word that works that way on its own. You drop the indefinite article, <i>en</i> or <i>ett</i>, and add a definite suffix to the noun. The gender you already learned decides the suffix.</p>
<h3>The suffix, not a separate word</h3>
<p>A common-gender noun, an en-word, takes <i>-en</i> after a consonant and <i>-n</i> after a vowel. A neuter noun, an ett-word, takes <i>-et</i> after a consonant and <i>-t</i> after a vowel. <i>en bil</i> becomes <i>bilen</i>. <i>ett hus</i> becomes <i>huset</i>. English <i>the</i> does not tell you which suffix to use. The noun does.</p>
<div class="tbl"><table><tr><th></th><th>A, an</th><th>The</th></tr>
<tr><td>en-word, consonant</td><td class="k">en bil</td><td class="k">bilen</td></tr>
<tr><td>en-word, vowel</td><td class="k">en mamma</td><td class="k">mamman</td></tr>
<tr><td>en-word, vowel</td><td class="k">en lärare</td><td class="k">läraren</td></tr>
<tr><td>ett-word, consonant</td><td class="k">ett hus</td><td class="k">huset</td></tr>
<tr><td>ett-word, consonant</td><td class="k">ett glas</td><td class="k">glaset</td></tr>
<tr><td>ett-word, vowel</td><td class="k">ett barn</td><td class="k">barnet</td></tr>
</table></div>
{{ex:bilen|BEE-lehn|the car}}
{{ex:huset|HUEH-seht|the house}}
{{ex:mamman|MAHMM-ahn|the mom}}
{{ex:läraren|LAE-rah-rehn|the teacher}}
{{ex:glaset|GLAH-seht|the glass}}
{{ex:barnet|BAHRN-eht|the child}}
<p>The <i>-t</i> on <i>huset</i> and <i>barnet</i> is often quiet in speech. Write it anyway. <i>mamma</i> already ends in a vowel, so the suffix is only <i>-n</i>. <i>mammaen</i> is one <i>-en</i> too many.</p>
<h3>In a sentence</h3>
<p>The suffix stays on the noun when the noun is the subject or follows <i>i</i>. A question still has verb second: the question word, then the verb.</p>
{{ex:Var är bilen?|vahr aer BEE-lehn|Where is the car?}}
{{ex:Jag bor i huset.|jah boohr ee HUEH-seht|I live in the house.}}
<h3>An adjective in front, for recognition</h3>
<p>When an adjective sits in front of a definite noun, Swedish also puts a front article there: <i>den</i> for an en-word. The noun keeps its suffix. <i>den stora bilen</i> is the big car. <i>den stora bil</i> drops the suffix, and it is wrong. You only need to recognize this. You will not be asked to build it yet.</p>
{{ex:den stora bilen|dehn STOOH-rah BEE-lehn|the big car}}
<div class="tip"><b>Most common mistake:</b> a separate word for <i>the</i>, or a suffix with no noun ending. <i>den bil</i> → <i>bilen</i>. With an adjective, <i>den stora bil</i> → <i>den stora bilen</i>.</div>
`,
    check: [
      ["the car", ["en bil", "den bil", "bilen", "ett bil"], 2, "bil is an en-word. The definite suffix is -en: bilen."],
      ["the mom", ["mamman", "mammaen", "en mamma", "mammanen"], 0, "mamma ends in a vowel, so the definite suffix is -n, not -en."],
      ["Which phrase is the big car? Recognize it.", ["den stora bil", "den stora bilen", "den stor bilen", "en stor bilen"], 1, "The front article den still keeps the definite suffix: den stora bilen."]
    ],
    practice: [
      ["mc", "the car", "bilen", "en bil", "den bil", "ett bil", "The definite suffix is -en. en bil means a car."],
      ["mc", "the house", "huset", "en hus", "hus", "den hus", "hus is an ett-word. The definite ending is -et: huset."],
      ["mc", "the mom", "mamman", "mammaen", "en mamma", "mammanen", "mamma ends in a vowel, so the definite suffix is -n."],
      ["mc", "the child", "barnet", "en barn", "barn", "barnets", "barn is an ett-word ending in a vowel. The definite suffix is -t."],
      ["mc", "the big car (recognize it)", "den stora bilen", "den stora bil", "den stor bilen", "en stor bilen", "The definite form keeps the suffix: den stora bilen."],
      ["or", "Where is the car? (start with var)", "Var är bilen", "en", "Verb second: var first, then är. The definite suffix is -en."],
      ["or", "I live in the house. (start with jag)", "Jag bor i huset", "ett", "The definite ending on hus is -et."],
      ["or", "Today I work. (start with idag)", "Idag jobbar jag", "inte", "Verb second: idag first, then jobbar, then jag."],
      ["fi", "Var är __?", "Where is the car?", "bilen", "en bil|bil|huset", "The definite suffix is -en: bilen, not en bil."],
      ["fi", "Jag bor i __.", "I live in the house.", "huset", "ett hus|hus|huse", "The definite ending on hus is -et. Write the t."],
      ["fi", "__ är trött.", "The child is tired.", "Barnet", "Ett barn|Barn|En barn", "barn is an ett-word. The definite suffix is -t: barnet."],
      ["ty", "Where is the teacher? (start with var)", "Var är läraren", "var · lärare", "en", "Verb second: var first, then är. The definite suffix is -n."],
      ["ty", "The child is tired.", "Barnet är trött", "barn · trött", "en", "barn is an ett-word. The definite suffix is -t: barnet."],
      ["ty", "Where is the mom? (start with var)", "Var är mamman", "var · mamma", "en", "Verb second: var first, then är. The definite suffix is -n."]
    ]
  },
  {
    id: "plural",
    title: "Plurals",
    blurb: "Make the common plurals, including flickor, bilar, äpplen, and words like hus that do not change.",
    deck: "People and family",
    body: `
<p>English adds <i>-s</i> and is done. Swedish has five plural endings, and none of them is a case. The ending depends on the gender and on the last letter of the noun. You already know the gender from <i>en</i> or <i>ett</i>.</p>
<h3>Five patterns</h3>
<p>An en-word that ends in <i>-a</i> drops <i>-a</i> and adds <i>-or</i>. <i>en flicka</i> is a girl, and two girls are <i>flickor</i>. <i>mamma</i> works the same way. You already say <i>tio kronor</i>: <i>krona</i> is the same <i>-or</i> pattern. Many other en-words add <i>-ar</i>. <i>bil</i> becomes <i>bilar</i>, and <i>en dag</i> (a day) becomes <i>dagar</i>.</p>
{{ex:två flickor|tvoh FLIHK-awr|two girls}}
{{ex:två mammor|tvoh MAHMM-awr|two moms}}
{{ex:tio kronor|TEE-aw KROOH-nawr|ten kronor}}
{{ex:två bilar|tvoh BEE-lahr|two cars}}
{{ex:två dagar|tvoh DAH-gahr|two days}}
<p>Some en-words add <i>-er</i> instead. Learn those with the noun. <i>en film</i> is a movie, and the plural is <i>filmer</i>. An ett-word that ends in a vowel adds <i>-n</i>. <i>ett äpple</i> is an apple, and the plural is <i>äpplen</i>.</p>
{{ex:en film|ayn fihlm|a movie}}
{{ex:två filmer|tvoh FIHL-mehr|two movies}}
{{ex:två äpplen|tvoh EHP-lehn|two apples}}
<h3>Nothing added</h3>
<p>An ett-word that ends in a consonant usually adds nothing. <i>ett hus</i> stays <i>hus</i>, and <i>ett barn</i> stays <i>barn</i>. The article and the number show that you mean more than one: <i>två hus</i>, <i>två barn</i>. A word ending in <i>-are</i> does the same. <i>en lärare</i> and <i>två lärare</i> look alike. A handful of common nouns change a vowel inside. They are not one of these five patterns, and this lesson does not drill them.</p>
{{ex:två hus|tvoh huehs|two houses}}
{{ex:två barn|tvoh bahrn|two children}}
{{ex:två lärare|tvoh LAE-rah-reh|two teachers}}
<h3>The definite plural, just to recognize</h3>
<p><i>bilarna</i> means the cars. The plain plural <i>bilar</i> gains <i>-na</i>. You only need to recognize <i>bilarna</i>. Building it is not the goal of this lesson. In a sentence, verb second is unchanged: the subject can be the plural noun phrase, and the verb is the second element.</p>
{{ex:bilarna|BEE-lahrn-ah|the cars}}
{{ex:Två barn bor i huset.|tvoh bahrn boohr ee HUEH-seht|Two children live in the house.}}
<div class="tip"><b>Most common mistake:</b> an English <i>-s</i>, or an ending on a word that stays bare. <i>två bils</i> → <i>två bilar</i>. <i>två huser</i> → <i>två hus</i>.</div>
`,
    check: [
      ["Two girls are", ["flickor", "flickar", "flickan", "flickorna"], 0, "flicka ends in -a, so the plural ending is -or: flickor."],
      ["The plural of ett barn is", ["barnar", "barnet", "barn", "barns"], 2, "barn is an ett-word ending in a consonant. The plural looks like the singular."],
      ["Which word means the cars? Recognize it.", ["bilar", "bilen", "bilerna", "bilarna"], 3, "bilarna is the definite plural. bilar means cars, with no the."]
    ],
    practice: [
      ["mc", "cars", "bilar", "biler", "bilor", "bilen", "bil is an en-word. The plural ending is -ar: bilar."],
      ["mc", "girls", "flickor", "flickar", "flickaor", "flicker", "flicka ends in -a, so the plural ending is -or: flickor."],
      ["mc", "houses", "hus", "huser", "husar", "huset", "hus is an ett-word ending in a consonant. No plural ending. huset means the house."],
      ["mc", "apples", "äpplen", "äpple", "äpplar", "äppler", "äpple is an ett-word ending in a vowel. The plural ending is -n."],
      ["mc", "movies", "filmer", "filmar", "filmor", "filmen", "film takes the plural ending -er: filmer. filmen means the movie, just one."],
      ["or", "two cars", "två bilar", "ett", "bil is an en-word. The plural is bilar."],
      ["or", "Two children live in the house. (start with två)", "Två barn bor i huset", "ett", "barn is an ett-word. No plural ending. Verb second: två barn first, then bor."],
      ["or", "Today two teachers work. (start with idag, use jobbar)", "Idag jobbar två lärare", "läraren", "Verb second: idag first, then jobbar. lärare has no plural ending."],
      ["fi", "två __", "two cars", "bilar", "bil|bilen|biler", "bil takes the plural ending -ar: bilar."],
      ["fi", "två __", "two apples", "äpplen", "äpple|äpplar|äppler", "äpple is an ett-word ending in a vowel. The plural ending is -n."],
      ["fi", "två __", "two children", "barn", "barnet|barnar|barns", "barn is an ett-word ending in a consonant. No plural ending."],
      ["ty", "two girls (use flicka)", "två flickor", "flicka · -or", "flickar", "flicka ends in -a, so the plural ending is -or: flickor."],
      ["ty", "two houses", "två hus", "hus", "en", "hus is an ett-word. No plural ending: två hus."],
      ["ty", "Today two teachers work. (start with idag, use jobbar)", "Idag jobbar två lärare", "idag · jobba · lärare", "läraren", "Verb second: idag first, then jobbar."]
    ]
  },
  {
    id: "time",
    title: "Telling the time",
    blurb: "Say what time it is, and read halv tre as 2:30.",
    deck: "Numbers, time and prices",
    body: `
<p>English says "half past three" and means 3:30. Swedish <i>halv</i> points at the hour that is coming, the same way German does. <i>halv tre</i> is half to three, so it is 2:30, not 3:30.</p>
<h3>The hour</h3>
<p><i>klockan</i> is the clock, <i>en klocka</i> with the definite suffix. <i>Klockan är åtta</i> means it is 8:00. Ask <i>Vad är klockan?</i> The question word is first and <i>är</i> is the second element. A timetable may use 0 to 23. In speech, 14:30 in the afternoon is still <i>halv tre</i>.</p>
{{ex:Klockan är åtta.|KLAWK-ahn aer AWT-ah|It's 8:00.}}
{{ex:Vad är klockan?|vah aer KLAWK-ahn|What time is it?}}
<h3>Half and quarter</h3>
<p><i>halv</i> plus the next hour is thirty minutes before that hour. <i>halv tre</i> is 2:30. <i>halv åtta</i> is 7:30, not 8:30. <i>kvart över</i> is a quarter past, and <i>kvart i</i> is a quarter to. <i>över</i> means past and <i>i</i> means to. The same two words work with other minutes: <i>fem över tre</i> is 3:05, and <i>tio i tre</i> is 2:50. Minutes tucked against the half hour are a separate pattern, and this lesson does not teach them.</p>
<div class="tbl"><table><tr><th>Phrase</th><th>Time</th></tr>
<tr><td class="k">klockan är tre</td><td>3:00</td></tr>
<tr><td class="k">kvart över tre</td><td>3:15</td></tr>
<tr><td class="k">halv fyra</td><td>3:30</td></tr>
<tr><td class="k">kvart i fyra</td><td>3:45</td></tr>
<tr><td class="k">halv tre</td><td>2:30</td></tr>
</table></div>
{{ex:Halv tre.|hahlv tray|2:30}}
{{ex:halv fyra|hahlv FEW-rah|3:30}}
{{ex:Halv åtta.|hahlv AWT-ah|7:30}}
{{ex:Kvart över tre.|kvahrt EUH-vehr tray|3:15}}
{{ex:Kvart i tre.|kvahrt ee tray|2:45}}
{{ex:Klockan är fem över tre.|KLAWK-ahn aer fehm EUH-vehr tray|It's 3:05.}}
{{ex:tio i tre|TEE-aw ee tray|2:50}}
<h3>The time in front</h3>
<p>A clock time can be the first element. The verb is then the second element, and the subject follows, just as with <i>idag</i>. <i>Klockan åtta jobbar jag</i> means I work at eight. <i>Klockan åtta jag jobbar</i> is English order, and it is wrong.</p>
{{ex:Klockan åtta jobbar jag.|KLAWK-ahn AWT-ah JAWB-ahr jah|At eight I work.}}
<div class="tip"><b>Most common mistake:</b> reading <i>halv</i> as half past. <i>halv tre</i> as 3:30 → <i>halv tre</i> is 2:30. Half past three would be <i>halv fyra</i>.</div>
`,
    check: [
      ["halv tre means", ["3:30", "2:30", "3:00", "4:30"], 1, "halv tre is half to three, so 2:30, not half past three."],
      ["3:15 is", ["kvart över tre", "kvart i tre", "halv tre", "kvart över fyra"], 0, "kvart över is a quarter past. kvart i is a quarter to."],
      ["7:30 is", ["halv sju", "kvart i åtta", "halv åtta", "klockan är åtta"], 2, "halv åtta is half to eight, so 7:30. klockan är åtta is 8:00."]
    ],
    practice: [
      ["mc", "halv tre means", "2:30", "3:30", "3:00", "2:00", "halv tre is half to three, so 2:30, not half past three."],
      ["mc", "3:15 is", "kvart över tre", "kvart i tre", "halv tre", "kvart över fyra", "kvart över is a quarter past. kvart i would be a quarter to."],
      ["mc", "2:45 is", "kvart i tre", "kvart över tre", "halv tre", "kvart i två", "kvart i tre is a quarter to three, so 2:45."],
      ["mc", "It's 8:00.", "Klockan är åtta.", "Klockan är halv åtta.", "Halv är åtta.", "Klockan åtta är.", "Klockan är åtta is 8:00. Halv åtta is 7:30."],
      ["mc", "a car", "en bil", "ett bil", "bilen", "ett hus", "bil is an en-word: en bil. bilen means the car."],
      ["or", "2:30", "halv tre", "över", "halv tre is 2:30, half to three."],
      ["or", "At eight I work. (start with klockan åtta, use jobbar)", "Klockan åtta jobbar jag", "är", "Verb second: klockan åtta first, then jobbar, then jag."],
      ["or", "a house", "ett hus", "en", "hus is an ett-word: ett hus."],
      ["fi", "Klockan är __ tre.", "It's 2:30.", "halv", "över|i|kvart", "halv tre is 2:30, half to three."],
      ["fi", "Klockan är kvart __ tre.", "It's 3:15.", "över", "i|halv|och", "kvart över is a quarter past. kvart i would be a quarter to."],
      ["fi", "__ är åtta.", "It's 8:00.", "Klockan", "Halv|Kvart|Tiden", "Klockan är åtta means 8:00. Halv åtta would be 7:30."],
      ["ty", "It's 2:30. (use klockan and halv)", "Klockan är halv tre", "klockan · halv · tre", "över", "halv tre is 2:30, half to three."],
      ["ty", "a car", "en bil", "bil", "ett", "bil is an en-word: en bil."],
      ["ty", "At three I eat breakfast. (start with klockan tre, use äter and frukost)", "Klockan tre äter jag frukost", "klockan · tre · äta · frukost", "halv", "Verb second: klockan tre first, then äter, then jag."]
    ]
  },
  {
    id: "modals",
    title: "Modal verbs",
    blurb: "Use vill, kan, måste and ska plus an infinitive, and read måste inte as you do not have to.",
    deck: "Travel and transport",
    body: `
<p>English <i>can</i>, <i>must</i> and <i>will</i> sit in front of a bare verb. Swedish does the same thing with four modals, and then it stops. There is no <i>att</i> between them, and there is no <i>-r</i> on the modal. The form is the same for <i>jag</i>, <i>du</i> and <i>vi</i>.</p>
<h3>The four verbs</h3>
<p><i>vill</i> means want, not will. <i>kan</i> means can, or know how to. <i>måste</i> means have to, or must. <i>ska</i> is for a plan or a schedule, the closest thing to "going to." A future fact is often just the present. After the modal comes the infinitive: <i>åka</i> (go by vehicle), <i>köra</i> (drive), <i>gå</i> (go, or leave), <i>ha</i> (have), <i>jobba</i> (work). <i>åka tåg</i> is go by train, with no extra little word. <i>tåg</i> is an ett-word, <i>ett tåg</i>, and <i>buss</i> is an en-word, <i>en buss</i>.</p>
<div class="tbl"><table><tr><th>Modal</th><th>Means</th><th>Example</th></tr>
<tr><td class="k">vill</td><td>want</td><td class="k">Jag vill ha kaffe.</td></tr>
<tr><td class="k">kan</td><td>can</td><td class="k">Jag kan köra.</td></tr>
<tr><td class="k">måste</td><td>have to</td><td class="k">Jag måste gå.</td></tr>
<tr><td class="k">ska</td><td>going to</td><td class="k">Jag ska åka tåg.</td></tr>
</table></div>
{{ex:Jag vill ha kaffe.|jah vihl hah KAHFF-eh|I want coffee.}}
{{ex:Jag kan köra.|jah kahnn TJEUH-rah|I can drive.}}
{{ex:Jag måste gå.|jah MAWS-teh goh|I have to go.}}
{{ex:Jag ska åka tåg.|jah skah OH-kah tohg|I'm going by train.}}
<h3>No att, and where inte goes</h3>
<p>The infinitive does not take <i>att</i>, and it does not take <i>-r</i>. <i>inte</i> still follows the verb that runs the sentence. That verb is the modal, so <i>inte</i> sits between the modal and the infinitive. A yes-or-no question starts with the modal. There is still no <i>gör</i>. If <i>imorgon</i> is first, verb second puts the modal next and the subject after it.</p>
{{ex:Jag kan inte köra.|jah kahnn IHN-teh TJEUH-rah|I can't drive.}}
{{ex:Kan du köra?|kahnn dueh TJEUH-rah|Can you drive?}}
{{ex:Imorgon ska jag jobba.|ih-MAWR-gawn skah jah JAWB-ah|Tomorrow I'm going to work.}}
<h3>måste inte</h3>
<p><i>Jag måste inte gå</i> means I do not have to go. It does not mean "I must not go." Must not, or not allowed, is a different verb: <i>Jag får inte köra</i> means I am not allowed to drive. <i>får</i> is the present of <i>få</i>. You will see <i>få</i> again at the café, where it means get.</p>
{{ex:Jag måste inte gå.|jah MAWS-teh IHN-teh goh|I don't have to go.}}
{{ex:Jag får inte köra.|jah fohr IHN-teh TJEUH-rah|I'm not allowed to drive.}}
<div class="tip"><b>Most common mistake:</b> an <i>att</i> copied from English <i>to</i>. <i>Jag kan att köra</i> → <i>Jag kan köra</i>. And do not read <i>måste inte</i> as must not.</div>
`,
    check: [
      ["I'm going by train.", ["Jag ska att åka tåg.", "Jag ska åker tåg.", "Jag ska åka tåg.", "Jag åker ska tåg."], 2, "ska takes the infinitive åka, with no att and no -r."],
      ["Jag måste inte gå means", ["I do not have to go.", "I must not go.", "I do not want to go.", "I am going by train."], 0, "måste inte means you do not have to. It does not mean must not."],
      ["Tomorrow I'm going to work, starting with imorgon.", ["Imorgon jag ska jobba.", "Imorgon jag jobbar ska.", "Jag imorgon ska jobba.", "Imorgon ska jag jobba."], 3, "Verb second: imorgon first, then ska, then jag."]
    ],
    practice: [
      ["mc", "I'm going by train.", "Jag ska åka tåg.", "Jag ska att åka tåg.", "Jag ska åker tåg.", "Jag åker ska tåg.", "ska plus the infinitive åka. No att, and no -r on åka."],
      ["mc", "I don't have to go.", "Jag måste inte gå.", "Jag får inte gå.", "Jag måste gå inte.", "Jag inte måste gå.", "måste inte means you do not have to. får inte would mean not allowed."],
      ["mc", "Can you drive? (to one person)", "Kan du köra?", "Gör du kan köra?", "Kan du att köra?", "Kan du körar?", "In a yes-or-no question the verb comes first. No gör, and no att."],
      ["mc", "I want coffee.", "Jag vill ha kaffe.", "Jag vill att ha kaffe.", "Jag ska ha kaffe.", "Jag vill har kaffe.", "vill means want, plus the infinitive ha. ska would be a plan, not a want."],
      ["mc", "a bus", "en buss", "ett buss", "bussen", "ett tåg", "buss is an en-word: en buss. bussen means the bus."],
      ["or", "Tomorrow I'm going to work. (start with imorgon, use ska)", "Imorgon ska jag jobba", "att", "Verb second: imorgon first, then ska, then jag."],
      ["or", "I can't drive. (start with jag)", "Jag kan inte köra", "att", "inte goes after the verb, before the infinitive."],
      ["or", "a bus", "en buss", "ett", "buss is an en-word: en buss."],
      ["fi", "Jag kan __ köra.", "I can't drive.", "inte", "att|och|ska", "inte goes after the modal, before the infinitive. No att."],
      ["fi", "Imorgon __ jag jobba.", "Tomorrow I'm going to work.", "ska", "att|jobbar|och", "Verb second: imorgon first, then ska. The infinitive has no att."],
      ["fi", "__ buss", "a bus", "en", "ett|den|det", "buss is an en-word: en buss."],
      ["ty", "Tomorrow I'm going by train. (start with imorgon, use ska and åka tåg)", "Imorgon ska jag åka tåg", "imorgon · ska · åka · tåg", "att", "Verb second: imorgon first, then ska. No att before åka."],
      ["ty", "I don't have to go. (start with jag)", "Jag måste inte gå", "måste · gå", "får", "inte goes after the modal. måste inte means you do not have to."],
      ["ty", "a train", "ett tåg", "tåg", "en", "tåg is an ett-word: ett tåg."]
    ]
  },
  {
    id: "cafe",
    title: "At the café, and fika",
    blurb: "Order a coffee, a tea or a bun, and keep en kaffe apart from ett glas.",
    deck: "Food and fika",
    body: `
<p><i>fika</i> is the coffee break, not only the cup. People sit down with coffee and usually a bun. The verb is the same word: <i>Ska vi fika?</i> means "Should we have a coffee break?" You do it <i>på ett kafé</i>. The spelling in this course is <i>kafé</i>.</p>
<h3>What you can order</h3>
<p>Gender is the trap on the menu. A coffee, the cup you order, is an en-word: <i>en kaffe</i>. A tea ordered the same way is an ett-word: <i>ett te</i>. A glass is an ett-word, <i>ett glas</i>, so a glass of water is <i>ett glas vatten</i>. <i>vatten</i> does not take its own article in that phrase. A cinnamon bun is <i>en kanelbulle</i>. Two buns are <i>två kanelbullar</i>: the <i>-e</i> drops and <i>-ar</i> is added, the same family as <i>bilar</i>.</p>
<div class="tbl"><table><tr><th>Swedish</th><th>English</th></tr>
<tr><td class="k">en kaffe</td><td>a coffee</td></tr>
<tr><td class="k">ett te</td><td>a tea</td></tr>
<tr><td class="k">ett glas vatten</td><td>a glass of water</td></tr>
<tr><td class="k">en kanelbulle</td><td>a cinnamon bun</td></tr>
<tr><td class="k">en smörgås</td><td>an open-faced sandwich</td></tr>
<tr><td class="k">ett smör</td><td>butter</td></tr>
<tr><td class="k">ett knäckebröd</td><td>a crispbread</td></tr>
<tr><td class="k">köttbullar</td><td>meatballs</td></tr>
</table></div>
{{ex:en kaffe|ayn KAHFF-eh|a coffee}}
{{ex:ett te|eht tay|a tea}}
{{ex:ett glas vatten|eht glahs VAHTT-ehn|a glass of water}}
{{ex:en kanelbulle|ayn kah-NEHL-buhl-eh|a cinnamon bun}}
{{ex:två kanelbullar|tvoh kah-NEHL-buhl-ahr|two cinnamon buns}}
{{ex:en smörgås|ayn SMEUHR-gohs|an open-faced sandwich}}
{{ex:ett smör|eht smeuhr|butter}}
{{ex:ett knäckebröd|eht KNEHK-eh-breuhd|a crispbread}}
<h3>How you ask</h3>
<p>To the person at the counter, use <i>du</i>, the same <i>du</i> you use with a friend. Two useful shapes: <i>Kan jag få…?</i> and <i>Jag vill ha…</i>. <i>få</i> here means get. Last lesson, <i>får inte</i> meant not allowed. It is the same verb, and the rest of the sentence shows which meaning you want. <i>inte</i> still sits after <i>vill</i>. About food that tastes good, the set phrase is <i>Vad gott!</i> The ending on <i>gott</i> belongs to the next lesson. Use the phrase as a whole.</p>
{{ex:Kan jag få en kaffe?|kahnn jah foh ayn KAHFF-eh|Can I get a coffee?}}
{{ex:Jag vill ha en kanelbulle.|jah vihl hah ayn kah-NEHL-buhl-eh|I'd like a cinnamon bun.}}
{{ex:Jag vill ha köttbullar.|jah vihl hah TJURT-buhl-ahr|I'd like meatballs.}}
{{ex:Vad gott!|vah gawt|That's delicious!}}
{{ex:Ska vi fika?|skah vee FEE-kah|Should we have a coffee break?}}
{{ex:Vi ska fika på ett kafé.|vee skah FEE-kah poh eht kah-FAY|We're going to fika at a café.}}
<p>If you address the café as a business, not the one person in front of you, <i>ni</i> is possible. <i>ni</i> is the company. It is not a formal word for one waiter.</p>
{{ex:Kan ni hjälpa mig?|kahnn nee JEHL-pah mey|Can you help me? (to the café)}}
<div class="tip"><b>Most common mistake:</b> one article for every drink. <i>ett kaffe</i> → <i>en kaffe</i>. <i>en glas vatten</i> → <i>ett glas vatten</i>.</div>
`,
    check: [
      ["Can I get a coffee?", ["Kan jag få ett kaffe?", "Kan jag få en kaffe?", "Kan jag att få en kaffe?", "Kan få jag en kaffe?"], 1, "kaffe is an en-word: en kaffe. The verb comes first, and få means get."],
      ["a glass of water", ["en glas vatten", "ett vatten glas", "en vatten", "ett glas vatten"], 3, "glas is an ett-word: ett glas. vatten sits after glas with no article of its own."],
      ["You speak to one person at the counter. Which word is you?", ["du", "ni", "dem", "hen"], 0, "du is for one person, including staff. ni is for several people or a company."]
    ],
    practice: [
      ["mc", "Can I get a coffee?", "Kan jag få en kaffe?", "Kan jag få ett kaffe?", "Kan jag att få en kaffe?", "Kan få jag en kaffe?", "kaffe is an en-word: en kaffe. The verb comes first."],
      ["mc", "a glass of water", "ett glas vatten", "en glas vatten", "ett vatten glas", "en vatten", "glas is an ett-word: ett glas."],
      ["mc", "fika is", "a coffee break", "only the word for one cup", "a cinnamon bun", "the bill", "fika is the coffee break, not only the cup."],
      ["mc", "I'd like a cinnamon bun.", "Jag vill ha en kanelbulle.", "Jag vill ha ett kanelbulle.", "Jag vill att ha en kanelbulle.", "Jag ska vill en kanelbulle.", "kanelbulle is an en-word. vill plus ha, with no att."],
      ["mc", "To one person at the counter, you is", "du", "ni", "dem", "hen", "du to one person, including staff. ni is for several people or the company."],
      ["or", "Can I get a coffee? (start with kan)", "Kan jag få en kaffe", "ett", "In a yes-or-no question the verb comes first. kaffe is an en-word: en kaffe."],
      ["or", "Should we have a coffee break? (start with ska)", "Ska vi fika", "att", "The verb comes first. ska plus the infinitive, no att."],
      ["or", "a glass of water", "ett glas vatten", "en", "glas is an ett-word: ett glas."],
      ["fi", "Kan jag få __ kaffe?", "Can I get a coffee?", "en", "ett|den|det", "kaffe is an en-word: en kaffe."],
      ["fi", "Kan jag få ett __ vatten?", "Can I get a glass of water?", "glas", "kaffe|bulle|smör", "glas is an ett-word. ett glas vatten."],
      ["fi", "Jag vill __ ha en kanelbulle.", "I don't want a cinnamon bun.", "inte", "att|och|ska", "inte goes after vill, before the infinitive."],
      ["ty", "Can I get a cinnamon bun? (start with kan)", "Kan jag få en kanelbulle", "kan · få · kanelbulle", "ett", "The verb comes first. kanelbulle is an en-word: en kanelbulle."],
      ["ty", "I don't want coffee. (start with jag, no article)", "Jag vill inte ha kaffe", "vill · ha · kaffe", "att", "inte goes after vill, before the infinitive."],
      ["ty", "a glass of water", "ett glas vatten", "glas · vatten", "en", "glas is an ett-word: ett glas."]
    ]
  },
  {
    id: "imperative",
    title: "The imperative",
    blurb: "Give a short command such as Kom or Vänta, and say that you are sick or in pain.",
    deck: "Health and emergencies",
    body: `
<p>English uses the same short word for a command as for the infinitive: "Wait!" Swedish often does that too, and then a handful of emergency verbs get even shorter. The present <i>-r</i> is not part of a command. <i>Kommer!</i> sounds like a statement with the subject missing, not like "Come!"</p>
<h3>Drop the -r</h3>
<p>If the present ends in <i>-ar</i>, the command is that word without <i>-r</i>. <i>väntar</i> becomes <i>Vänta!</i> Five commands you need in a hurry are worth learning as words. <i>Kom!</i>, <i>Hjälp!</i> and <i>Ät!</i> are shorter than the infinitive. <i>Ta!</i> and <i>Gå!</i> match the infinitive. None of them keeps the present <i>-r</i>. The neutral command has no <i>du</i> and no <i>ni</i>. <i>Kom!</i> works for one person or for several people. You do not add a pronoun to make it polite.</p>
<div class="tbl"><table><tr><th>Present</th><th>Command</th><th>English</th></tr>
<tr><td class="k">kommer</td><td class="k">Kom!</td><td>Come!</td></tr>
<tr><td class="k">väntar</td><td class="k">Vänta!</td><td>Wait!</td></tr>
<tr><td class="k">tar</td><td class="k">Ta!</td><td>Take!</td></tr>
<tr><td class="k">hjälper</td><td class="k">Hjälp!</td><td>Help!</td></tr>
<tr><td class="k">går</td><td class="k">Gå!</td><td>Go!</td></tr>
<tr><td class="k">äter</td><td class="k">Ät!</td><td>Eat!</td></tr>
</table></div>
{{ex:Kom!|kawm|Come!}}
{{ex:Vänta!|VEHN-tah|Wait!}}
{{ex:Ta den!|tah dehn|Take it!}}
{{ex:Hjälp!|jehlp|Help!}}
{{ex:Gå!|goh|Go!}}
{{ex:Ät!|aet|Eat!}}
<h3>Don't</h3>
<p><i>inte</i> goes after the command, in the same slot it uses after the verb in a statement. <i>Inte kom!</i> puts <i>inte</i> in front, and that is wrong.</p>
{{ex:Kom inte!|kawm IHN-teh|Don't come!}}
{{ex:Vänta inte!|VEHN-tah IHN-teh|Don't wait!}}
<h3>Sick or in pain</h3>
<p><i>Jag är sjuk</i> means I'm sick. A person says <i>sjuk</i>, and you do not build a new ending for this phrase. Pain is a different sentence. <i>har</i> is the present of <i>ha</i>, the same form for every person. You already use the infinitive <i>ha</i> after <i>vill</i>. <i>Jag har ont</i> means I'm in pain. A headache is <i>Jag har ont i huvudet</i>. <i>huvud</i> is an ett-word, a head, and <i>huvudet</i> is the definite form. The <i>-t</i> is the definite suffix you already know. <i>Hjälp mig!</i> uses <i>mig</i>, the object form from the pronoun lesson. At the café, <i>hjälpa</i> was the infinitive. The command is the short form.</p>
{{ex:Jag är sjuk.|jah aer sjuehk|I'm sick.}}
{{ex:Jag har ont.|jah hahr awnt|I'm in pain.}}
{{ex:Jag har ont i huvudet.|jah hahr awnt ee HUEH-vuh-deht|I have a headache.}}
{{ex:Hjälp mig!|jehlp mey|Help me!}}
<div class="tip"><b>Most common mistake:</b> leaving the present <i>-r</i> on a command. <i>Kommer!</i> → <i>Kom!</i> <i>Väntar!</i> → <i>Vänta!</i></div>
`,
    check: [
      ["Come!", ["Kommer!", "Komma!", "Kom!", "Du kommer!"], 2, "The command is Kom. Kommer is the present, and it is not an order."],
      ["I'm in pain.", ["Jag har ont.", "Jag är ont.", "Jag har sjuk.", "Jag är sjuk."], 0, "Jag har ont means I'm in pain. Jag är sjuk means I'm sick."],
      ["Don't wait!", ["Inte vänta!", "Vänta inte!", "Väntar inte!", "Vänta inte vänta!"], 1, "The command is Vänta, and inte goes after it."]
    ],
    practice: [
      ["mc", "Come!", "Kom!", "Kommer!", "Komma!", "Du kommer!", "The command is Kom. The -r belongs to the present, not to an order."],
      ["mc", "Wait!", "Vänta!", "Väntar!", "Vänt!", "Väntar du!", "väntar drops the -r: Vänta. Väntar du is not a command."],
      ["mc", "I'm sick.", "Jag är sjuk.", "Jag har sjuk.", "Jag mår sjuk.", "Jag är sjukar.", "Jag är sjuk. sjuk goes with är, not with har."],
      ["mc", "I'm in pain.", "Jag har ont.", "Jag är ont.", "Jag har ont i.", "Jag är sjuk.", "Jag har ont means I'm in pain. Jag är sjuk means I'm sick."],
      ["mc", "Help!", "Hjälp!", "Hjälper!", "Hjälpa!", "Hjälpar!", "The command is the short form Hjälp, not the present hjälper."],
      ["or", "Don't come! (start with kom)", "Kom inte", "kommer", "inte goes after the verb. The command is Kom, with no -r."],
      ["or", "Come today! (start with kom)", "Kom idag", "kommer", "The verb comes first in a command."],
      ["or", "a head", "ett huvud", "en", "huvud is an ett-word: ett huvud."],
      ["fi", "__ inte!", "Don't come!", "Kom", "Kommer|Komma|Inte", "The command is Kom, and inte goes after it."],
      ["fi", "Jag __ sjuk.", "I'm sick.", "är", "har|mår|kommer", "Jag är sjuk. har goes with ont, not with sjuk."],
      ["fi", "Jag har ont i __.", "I have a headache.", "huvudet", "huvud|huvuden|ont", "huvud is an ett-word. The definite suffix is -t: huvudet."],
      ["ty", "Don't wait! (start with vänta)", "Vänta inte", "vänta · inte", "väntar", "inte goes after the verb. Drop the -r: Vänta, not Väntar."],
      ["ty", "I have a headache. (use har and huvudet)", "Jag har ont i huvudet", "ha · ont · huvud", "en", "huvud is an ett-word. The definite suffix is -t: huvudet."],
      ["ty", "Help me! (the command)", "Hjälp mig", "hjälpa · mig", "hjälper", "The command is Hjälp, then mig. Not the present hjälper."]
    ]
  },
  {
    id: "adjectives",
    title: "Adjective endings",
    blurb: "Match the ending to the noun: en stor bil, ett stort hus, and stora hus.",
    deck: "Shopping and clothes",
    body: `
<p>English <i>big</i> never changes: a big car, a big house, big houses. Swedish changes the adjective ending. The ending follows the noun, not the person who is speaking. It does not matter whether that person is a man or a woman. What matters is common gender, neuter, or plural.</p>
<h3>Before the noun</h3>
<p>An en-word takes the bare adjective: <i>en stor bil</i>, <i>en röd tröja</i>, <i>en fin jacka</i>. <i>tröja</i> is a sweater and <i>jacka</i> is a jacket, both en-words. An ett-word takes <i>-t</i>: <i>ett stort hus</i>. A plural noun takes <i>-a</i>, and there is no article in front: <i>stora hus</i>, <i>stora bilar</i>, <i>röda tröjor</i>. <i>röd</i> becomes <i>rött</i> in the neuter, with a short vowel and <i>-tt</i>, and <i>röda</i> in the plural. <i>fin</i> (nice) takes <i>-t</i> the same way <i>stor</i> does.</p>
<div class="tbl"><table><tr><th></th><th>en-word</th><th>ett-word</th><th>plural</th></tr>
<tr><td>big</td><td class="k">en stor bil</td><td class="k">ett stort hus</td><td class="k">stora hus</td></tr>
<tr><td>red</td><td class="k">en röd tröja</td><td class="k">ett rött glas</td><td class="k">röda tröjor</td></tr>
<tr><td>nice</td><td class="k">en fin jacka</td><td class="k">ett fint glas</td><td class="k">fina jackor</td></tr>
</table></div>
{{ex:en stor bil|ayn stoohr beel|a big car}}
{{ex:ett stort hus|eht stoohrt huehs|a big house}}
{{ex:stora hus|STOOH-rah huehs|big houses}}
{{ex:en röd tröja|ayn reuhd TREUH-jah|a red sweater}}
{{ex:ett rött glas|eht rurt glahs|a red glass}}
{{ex:röda tröjor|REUH-dah TREUH-jawr|red sweaters}}
{{ex:en fin jacka|ayn feen JAHKK-ah|a nice jacket}}
<h3>After är</h3>
<p>The ending is the same when the adjective follows <i>är</i>. <i>Bilen är stor</i>. <i>Huset är stort</i>. <i>De är stora</i>. <i>de</i> is the plural they. Spell it <i>de</i>. The pronunciation line shows the spoken shape, dawm. If <i>idag</i> is first, the verb stays the second element: <i>Idag är huset stort</i>.</p>
{{ex:Bilen är stor.|BEE-lehn aer stoohr|The car is big.}}
{{ex:Huset är stort.|HUEH-seht aer stoohrt|The house is big.}}
{{ex:De är stora.|dawm aer STOOH-rah|They are big.}}
{{ex:Idag är huset stort.|ih-DAHG aer HUEH-seht stoohrt|Today the house is big.}}
<p>Pointing at the thing, use <i>den</i> for an en-word and <i>det</i> for an ett-word. <i>Hur mycket kostar den?</i> asks the price of the sweater. <i>Hur mycket kostar det?</i> asks the price of the house. <i>mycket</i> means much.</p>
{{ex:Hur mycket kostar den?|huehr MYWK-eht KAWS-tahr dehn|How much does it cost? (an en-word)}}
{{ex:Hur mycket kostar det?|huehr MYWK-eht KAWS-tahr deh|How much does it cost? (an ett-word)}}
{{ex:Den är röd.|dehn aer reuhd|It is red. (an en-word)}}
<h3>The big car, only to recognize</h3>
<p>You saw <i>den stora bilen</i> once before. The front article is <i>den</i>, the adjective takes <i>-a</i>, and the noun keeps the definite suffix. <i>den stora bil</i> and <i>den stor bilen</i> are both wrong. Recognize <i>den stora bilen</i>. When you build a phrase yourself, use <i>en stor bil</i>, <i>ett stort hus</i>, or <i>stora hus</i>.</p>
{{ex:den stora bilen|dehn STOOH-rah BEE-lehn|the big car}}
<div class="tip"><b>Most common mistake:</b> an adjective that never changes, copied from English. <i>ett stor hus</i> → <i>ett stort hus</i>. <i>en stort bil</i> → <i>en stor bil</i>.</div>
`,
    check: [
      ["a big house", ["ett stor hus", "ett stort hus", "en stort hus", "ett stora hus"], 1, "hus is an ett-word. The adjective ending is -t: ett stort hus."],
      ["big houses", ["stora hus", "stort hus", "stor hus", "stora huser"], 0, "The plural adjective ending is -a: stora hus. hus itself does not change."],
      ["The house is big.", ["Huset är stor.", "Huset är stora.", "Husen är stort.", "Huset är stort."], 3, "After är the ending still matches. An ett-word takes -t: stort."]
    ],
    practice: [
      ["mc", "a big car", "en stor bil", "en stort bil", "ett stor bil", "en stora bil", "bil is an en-word. The adjective ending has no -t: en stor bil."],
      ["mc", "a big house", "ett stort hus", "ett stor hus", "en stort hus", "ett stora hus", "hus is an ett-word. The adjective ending is -t: ett stort hus."],
      ["mc", "big houses", "stora hus", "stort hus", "stor hus", "stora huser", "The adjective ending is -a in the plural: stora hus."],
      ["mc", "The house is big.", "Huset är stort.", "Huset är stor.", "Huset är stora.", "Huset är rött.", "After är, an ett-word still takes the adjective ending -t: stort."],
      ["mc", "the big car (recognize it)", "den stora bilen", "den stora bil", "den stor bilen", "en stor bilen", "The definite form keeps the suffix: den stora bilen. You only recognize it."],
      ["or", "a big house", "ett stort hus", "stor", "hus is an ett-word. The adjective ending is -t: ett stort hus."],
      ["or", "Today the house is big. (start with idag)", "Idag är huset stort", "stor", "Verb second: idag first, then är, then huset. The adjective ending is -t."],
      ["or", "big houses", "stora hus", "stort", "The adjective ending is -a in the plural: stora hus."],
      ["fi", "ett __ hus", "a big house", "stort", "stor|stora|fin", "The adjective ending is -t on an ett-word: stort."],
      ["fi", "en __ tröja", "a red sweater", "röd", "rött|röda|stor", "tröja is an en-word. The adjective ending has no -t: röd."],
      ["fi", "Huset är __.", "The house is big.", "stort", "stor|stora|rött", "The adjective ending is -t after an ett-word: Huset är stort."],
      ["ty", "a big car", "en stor bil", "stor · bil", "stort", "bil is an en-word. The adjective ending has no -t: en stor bil."],
      ["ty", "The house is big. (start with huset)", "Huset är stort", "hus · stor", "stor", "hus is an ett-word. The adjective ending is -t: stort."],
      ["ty", "Today the car is big. (start with idag)", "Idag är bilen stor", "idag · bil · stor", "stort", "Verb second: idag first, then är. bil is an en-word, so no -t on the adjective ending."]
    ]
  }
];

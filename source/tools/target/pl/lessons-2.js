/* en-pl lessons 10–18 (questions … routine). Written by EN-PL-2.
   Every pron is the output of tools/target/pl/respell.js on the whole line. */
module.exports = [
  {
    id: "questions",
    title: "Questions",
    blurb: "Ask who, what, where and how, and turn a sentence into a yes-no question with czy.",
    deck: "Questions and knowing",
    body: `
<p>English makes a question by moving the verb, or by adding <i>do</i>. "You are from Kraków" becomes "Are you from Kraków?" Polish keeps the verb where it was. A question word goes in front, or the small word <b>czy</b> does the job for a yes-or-no question.</p>
<h3>Who, what, where, how</h3>
<p><b>Kto</b> asks who. <b>Co</b> asks what. <b>Gdzie</b> asks where. <b>Jak</b> asks how. The verb is the one you already know: <b>jest</b>, not a new ending. A city name stays in Polish inside the sentence: Wrocław, Gdańsk, Poznań.</p>
{{ex:Kto to jest?|ktoh toh yehst|Who is that?}}
{{ex:Co to jest?|tsoh toh yehst|What is that?}}
{{ex:To jest Wrocław.|toh yehst FROHTS-wahf|This is Wrocław.}}
{{ex:Czy to jest Gdańsk?|chih toh yehzd gdahnysk|Is this Gdańsk?}}
{{ex:Czy to jest Poznań?|chih toh yehst POH-znahny|Is this Poznań?}}
{{ex:Gdzie jest Anna?|gjyeh yehst AHN-nah|Where is Anna?}}
<p><b>Jak</b> is also the name question. <b>Jak pan ma na imię?</b> asks a man his name, and <b>Jak pani ma na imię?</b> asks a woman. It uses the same <b>ma</b> as <b>Mam na imię</b>. How are you, to a man, is the fixed line <b>Jak się pan ma?</b> A friend says <b>Jak się masz?</b> You recognize that. You do not type it.</p>
{{ex:Jak pan ma na imię?|yahk pahn mah nah EE-myeh|What's your name? (to a man)}}
{{ex:Jak się pan ma?|yahk shyeh pahn mah|How are you? (to a man)}}
<h3>Czy is not "do"</h3>
<p>English needs <i>do</i> in "Do you have time?" Polish has no verb there. <b>Czy</b> sits in front of an ordinary sentence and makes it a yes-or-no question. You will hear a question with only a rising tone and no <b>czy</b>. In this course you produce <b>czy</b>, so the question is clear in writing.</p>
{{ex:Czy pan jest z Krakowa?|chih pahn yehst s krah-KOH-vah|Are you from Kraków? (to a man)}}
{{ex:Czy pani jest z Warszawy?|chih PAH-nyee yehzd z vahr-SHAH-vih|Are you from Warsaw? (to a woman)}}
<h3>Pan and pani still take jest</h3>
<p>The person you are talking to is <b>pan</b> or <b>pani</b>, and the verb stays third person. <b>Czy pan jest z Krakowa?</b> A friend says <b>Czy jesteś z Krakowa?</b> You recognize <b>jesteś</b>. Mixing the two, <b>Czy pan jesteś</b>, is the mistake this course keeps out.</p>
<h3>The words still agree</h3>
<p><b>Czy</b> does not freeze <b>mój</b> or an adjective. <b>Brat</b> is masculine, so the masculine form is <b>mój</b>. <b>Kawa</b> is feminine, so the feminine form is <b>dobra</b>. The same split you already use in <b>To jest mój brat</b> and <b>Dobra kawa</b>.</p>
{{ex:Czy to jest mój brat?|chih toh yehst mooy braht|Is this my brother?}}
{{ex:Czy to jest dobra kawa?|chih toh yehzd DOH-brah KAH-vah|Is this good coffee?}}
<div class="tip"><b>Most common mistake:</b> a <b>ty</b> verb on <b>pan</b>. <b>Czy pan jesteś z Krakowa?</b> → <b>Czy pan jest z Krakowa?</b></div>
`,
    check: [
      ["What is czy?", ["A verb, like English do", "A yes-no word, and not a verb", "The word for who", "The friend's verb ending"], 1, "Czy only marks a yes-no question. The verb stays the ordinary one."],
      ["You ask a man if he is from Kraków. Which line do you produce?", ["Czy pan jesteś z Krakowa?", "Czy jesteś z Krakowa?", "Czy pan jest z Krakowa?", "Jak pan jest z Krakowa?"], 2, "Pan takes jest. Jesteś is what a friend says, and you do not type it."],
      ["Which question is about your brother?", ["Czy to jest mój brat?", "Czy to jest moja brat?", "Czy to jest mój kawa?", "Czy to jest dobra brat?"], 0, "Brat takes the masculine form mój. Kawa would take the feminine form dobra."]
    ],
    practice: [
      ["mc", "Who is that?", "Kto to jest?", "Co to jest?", "Gdzie to jest?", "Jak to jest?", "Kto asks who. Co asks what."],
      ["mc", "Where is Anna?", "Gdzie jest Anna?", "Kto jest Anna?", "Gdzie jesteś Anna?", "Gdzie Anna jestem?", "Gdzie asks where, and Anna takes jest."],
      ["mc", "Are you from Kraków? (to a man)", "Czy pan jest z Krakowa?", "Czy pan jesteś z Krakowa?", "Czy jesteś z Krakowa?", "Czy pani jest z Krakowa?", "Pan takes jest. Pani would be the question to a woman."],
      ["mc", "Is this good coffee?", "Czy to jest dobra kawa?", "Czy to jest dobry kawa?", "Czy to jest dobre kawa?", "Czy to jest mój kawa?", "Kawa takes the feminine form dobra."],
      ["mc", "A friend asks how you are. Which line do you recognize?", "Jak się masz?", "Jak się pan ma?", "Czy pan jest?", "Jak pan masz?", "Jak się masz is the friend line. You ask Jak się pan ma."],
      ["or", "my brother (possessive first)", "mój brat", "moja", "Mój is the masculine form."],
      ["or", "good coffee (adjective first)", "dobra kawa", "dobry", "Dobra is the feminine form."],
      ["or", "Who is that?", "Kto to jest", "Co", "Kto asks who, and to jest stays with it."],
      ["fi", "Czy to jest __ brat?", "Is this my brother?", "mój", "moja|moj|moje", "Mój is the masculine form. The mark on ó counts.", "!strict"],
      ["fi", "Czy pan __ z Krakowa?", "Are you from Kraków? (to a man)", "jest", "jesteś|jestem|są", "The verb agrees with pan, so the word is jest."],
      ["fi", "__ to jest?", "Who is that?", "Kto", "Co|Gdzie|Jak", "Kto asks who. Co asks what."],
      ["ty", "Is this my brother? (use czy, start with czy to jest)", "Czy to jest mój brat", "czy · to · jest · mój · brat", "moja jesteś", "Mój is the masculine form."],
      ["ty", "Is this good coffee? (use czy, start with czy to jest)", "Czy to jest dobra kawa", "czy · to · jest · dobry · kawa", "dobry jestem", "Dobra is the feminine form."],
      ["ty", "What's your name? (to a man, the na imię line, start with jak pan ma)", "Jak pan ma na imię", "jak · pan · mieć · imię", "masz jesteś", "The verb agrees with pan, so the word is ma."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and złoty",
    blurb: "Ask the price and say it in złoty, with a different form after one, after two and after five.",
    deck: "Numbers and złoty",
    body: `
<p>English changes a price noun once: one dollar, two dollars, five dollars. Polish changes <b>złoty</b> three ways, and the number picks the form. There is no dollar sign. You say the number and then <b>złoty</b>, <b>złote</b> or <b>złotych</b>.</p>
<h3>One, two to four, five and up</h3>
<div class="tbl"><table><tr><th>Number</th><th>Form</th><th>What it is</th></tr>
<tr><td class="k">jeden złoty</td><td class="k">złoty</td><td>nominative singular</td></tr>
<tr><td class="k">dwa złote, trzy złote, cztery złote</td><td class="k">złote</td><td>a plural form</td></tr>
<tr><td class="k">pięć złotych</td><td class="k">złotych</td><td>genitive plural</td></tr></table></div>
{{ex:Jeden złoty.|YEH-dehn ZWOH-tih|One złoty.}}
{{ex:Dwa złote.|dvah ZWOH-teh|Two złote.}}
{{ex:Pięć złotych.|pyehnyj' ZWOH-tihkh|Five złoty.}}
<p>If you have met Russian, two to four there takes a genitive singular. Polish does not. <b>Dwa złote</b> is a plural form.</p>
<h3>The last word decides</h3>
<p>Look at the last word of the number. <b>Jeden</b> takes <b>złoty</b>, so twenty-one is <b>dwadzieścia jeden złoty</b>. <b>Dwa</b>, <b>trzy</b> and <b>cztery</b> take <b>złote</b>, so twenty-two is <b>dwadzieścia dwa złote</b>. Anything else takes <b>złotych</b>. Eleven through fourteen are in that last group, even though twelve has "two" inside it: <b>dwanaście złotych</b>, not <b>dwanaście złote</b>.</p>
{{ex:Dwadzieścia jeden złoty.|dvah-JYEH-sh'chyah YEH-dehn ZWOH-tih|Twenty-one złoty.}}
{{ex:Dwadzieścia dwa złote.|dvah-JYEH-sh'chyah dvah ZWOH-teh|Twenty-two złote.}}
{{ex:Dwanaście złotych.|dvah-NAH-sh'chyeh ZWOH-tihkh|Twelve złoty.}}
{{ex:Dwadzieścia pięć złotych.|dvah-JYEH-sh'chyah pyehnyj' ZWOH-tihkh|Twenty-five złoty.}}
<h3>The words</h3>
<p>One to ten: <b>jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć, dziesięć</b>. Eleven is <b>jedenaście</b>, twelve is <b>dwanaście</b>, and the teens continue with <b>-naście</b>. Fifteen is <b>piętnaście</b>. Twenty is <b>dwadzieścia</b>, thirty <b>trzydzieści</b>, forty <b>czterdzieści</b>, fifty <b>pięćdziesiąt</b>.</p>
<p><b>Złoty</b> is masculine, so "one" is <b>jeden</b>, not <b>jedna</b>. <b>Kawa</b> is feminine: <b>jedna kawa</b>, <b>dwie kawy</b>. <b>Dwa</b> goes with a masculine noun that is not a person, such as <b>złoty</b>, and with a neuter noun. <b>Dwie</b> is the feminine form. <b>Trzy</b> and <b>cztery</b> stay as they are for coffee and for złoty. For two male students you may hear <b>Dwóch studentów</b>. Recognize it. You produce <b>dwa</b> and <b>dwie</b>.</p>
{{ex:Jedna kawa.|YEHD-nah KAH-vah|One coffee.}}
{{ex:Dwie kawy.|dvyeh KAH-vih|Two coffees.}}
<h3>The question, and one small coin</h3>
<p><b>Ile to kosztuje?</b> means "How much is it?" Classroom prices stay round: <b>piętnaście złotych</b>, <b>dwadzieścia złotych</b>. The small coin <b>grosz</b> splits the same way, once: <b>jeden grosz</b>, <b>dwa grosze</b>, <b>pięć groszy</b>.</p>
{{ex:Ile to kosztuje?|EE-leh toh koh-SHTOO-yeh|How much is it?}}
{{ex:Piętnaście złotych.|pyehnt-NAH-sh'chyeh ZWOH-tihkh|Fifteen złoty.}}
{{ex:Dwadzieścia złotych.|dvah-JYEH-sh'chyah ZWOH-tihkh|Twenty złoty.}}
<div class="tip"><b>Most common mistake:</b> the two-to-four form after five. <b>Pięć złote</b> → <b>Pięć złotych</b>.</div>
`,
    check: [
      ["After pięć, the price word is…", ["złotych", "złote", "złoty", "grosze"], 0, "Five and above take the genitive plural złotych."],
      ["After dwa, trzy and cztery, złoty becomes…", ["złotych", "złoty", "złote", "a dollar sign"], 2, "Two, three and four take złote, a plural form. There is no dollar sign."],
      ["How much is it?", ["Ile pan masz lat?", "Ile to kosztuje?", "Czy to jest złoty?", "Dwa złoty?"], 1, "Ile to kosztuje asks the price. Two złoty is dwa złote, not dwa złoty."]
    ],
    practice: [
      ["mc", "One złoty =", "Jeden złoty.", "Jedna złoty.", "Jeden złote.", "Jeden złotych.", "Złoty is masculine, so one is jeden złoty, the nominative singular."],
      ["mc", "Two złoty =", "Dwa złote.", "Dwa złotych.", "Dwa złoty.", "Dwie złote.", "Two, three and four take złote. Dwie is the feminine form, and złoty is masculine."],
      ["mc", "Twelve złoty =", "Dwanaście złotych.", "Dwanaście złote.", "Dwanaście złoty.", "Dwa złotych.", "Eleven through fourteen take the genitive plural złotych."],
      ["mc", "Twenty-two złoty =", "Dwadzieścia dwa złote.", "Dwadzieścia dwa złotych.", "Dwadzieścia dwa złoty.", "Dwadzieścia dwie złote.", "The last word is dwa, so the form is złote."],
      ["mc", "Which line do you only recognize, for two male students?", "Dwóch studentów.", "Dwa złote.", "Dwie kawy.", "Pięć złotych.", "You will hear Dwóch studentów. You produce dwa and dwie."],
      ["or", "one złoty", "Jeden złoty", "złotych", "One takes the nominative singular."],
      ["or", "five złoty", "Pięć złotych", "złote", "Five and above take the genitive plural."],
      ["or", "two coffees", "Dwie kawy", "dwa", "Dwie is the feminine form."],
      ["fi", "Ile to __?", "How much is it?", "kosztuje", "kosztuję|jest|złotych", "The price line uses kosztuje. The I form kosztuję differs by the ogonek, and that mark counts.", "!strict"],
      ["fi", "Dwa __.", "Two złoty.", "złote", "złotych|złoty|złotego", "Two takes złote, the plural form."],
      ["fi", "__ złotych.", "Five złoty.", "pięć", "piec|dwa|cztery", "Five takes the genitive plural, and the ogonek on pięć counts.", "!strict"],
      ["ty", "The price is twenty złoty. (two words)", "Dwadzieścia złotych", "dwadzieścia · złoty", "złote złoty", "Twenty takes the genitive plural."],
      ["ty", "The price is twenty-two złoty. (three words)", "Dwadzieścia dwa złote", "dwadzieścia · dwa · złoty", "złotych złoty", "The last word is dwa, so this is the nominative plural."],
      ["ty", "One coffee. (two words)", "Jedna kawa", "jeden · kawa", "jeden dobry", "Jedna is the feminine form."]
    ]
  },
  {
    id: "am-asz",
    title: "Verbs in -am and -asz",
    blurb: "Say what you have, where you live and what you read, with the ending that matches the person.",
    deck: "Home and routine",
    body: `
<p>English keeps almost one present shape: I live, you live, we live, and only "lives" for he and she. Polish puts a different ending on the verb for each person. This lesson's verbs use <b>-am</b> for "I".</p>
<h3>Three verbs, one set of endings</h3>
<div class="tbl"><table><tr><th></th><th>mieć, have</th><th>mieszkać, live</th><th>czytać, read</th></tr>
<tr><td>I</td><td class="k">mam</td><td class="k">mieszkam</td><td class="k">czytam</td></tr>
<tr><td>a friend says</td><td class="k">masz</td><td class="k">mieszkasz</td><td class="k">czytasz</td></tr>
<tr><td>pan, pani, on, ona</td><td class="k">ma</td><td class="k">mieszka</td><td class="k">czyta</td></tr>
<tr><td>we</td><td class="k">mamy</td><td class="k">mieszkamy</td><td class="k">czytamy</td></tr>
<tr><td>they</td><td class="k">mają</td><td class="k">mieszkają</td><td class="k">czytają</td></tr></table></div>
<p><b>Mieć</b> does not keep its infinitive in front. The "I" form is <b>mam</b>, not a word built on <b>mieć</b>. <b>Masz</b>, <b>mieszkasz</b> and <b>czytasz</b> are what a friend says. You recognize them. A group of friends also hears <b>macie</b>, <b>mieszkacie</b>, <b>czytacie</b>. Recognize those too. You do not type them. For "you" you say <b>pan ma</b>, <b>pani mieszka</b>, <b>pan czyta</b>.</p>
{{ex:Mam czas.|mahm chahs|I have time.}}
{{ex:Czy pan ma czas?|chih pahn mah chahs|Do you have time? (to a man)}}
{{ex:Masz czas?|mahsh chahs|Do you have time? (a friend says this)}}
<h3>One present for "I read" and "I'm reading"</h3>
<p>English splits "I read" and "I'm reading". Polish uses one present. <b>Czytam</b> covers both. <b>Czytamy po polsku</b> is "we read in Polish" and "we are reading in Polish".</p>
{{ex:Anna czyta.|AHN-nah CHIH-tah|Anna is reading.}}
{{ex:Czytamy po polsku.|chih-TAH-mih poh POHL-skoo|We read in Polish.}}
<h3>Where you live</h3>
<p><b>Mieszkam w Krakowie</b> and <b>Pani mieszka w Warszawie</b> use fixed place chunks. The locative lesson explains the ending. Learn the chunks now. <b>Gdzie pani mieszka?</b> asks a woman where she lives. The verb agrees with <b>pani</b>: <b>mieszka</b>, not <b>mieszkam</b> and not <b>mieszkasz</b>.</p>
{{ex:Mieszkam w Krakowie.|MYEH-shkahm f krah-KOH-vyeh|I live in Kraków.}}
{{ex:Pani mieszka w Warszawie.|PAH-nyee MYEH-shkah v vahr-SHAH-vyeh|You live in Warsaw. (to a woman)}}
{{ex:Gdzie pani mieszka?|gjyeh PAH-nyee MYEH-shkah|Where do you live? (to a woman)}}
<p>A masculine <b>mój</b> still has to match the person. <b>Mój brat mieszka w Krakowie.</b> <b>Anna mieszka</b> uses the same <b>mieszka</b> as <b>pan</b> and <b>pani</b>. The present ending does not change for her, and it does change for "I" and for "we".</p>
{{ex:Mój brat mieszka w Krakowie.|mooy braht MYEH-shkah f krah-KOH-vyeh|My brother lives in Kraków.}}
<div class="tip"><b>Most common mistake:</b> one ending for every person. <b>Pan mieszkam w Krakowie</b> → <b>Pan mieszka w Krakowie</b>.</div>
`,
    check: [
      ["I live in Kraków.", ["Mieszka w Krakowie.", "Mieszkasz w Krakowie.", "Mieszkam w Krakowie.", "Mieszkam w Kraków."], 2, "The I ending is -am: mieszkam. The place chunk is w Krakowie."],
      ["You are speaking to a woman. She is the one reading. Which do you say?", ["Pani czyta.", "Pani czytasz.", "Pani czytam.", "Pani czytać."], 0, "The verb agrees with pani, so the form is czyta."],
      ["A friend says you have time. Which line do you recognize?", ["Czy pan ma czas?", "Masz czas?", "Pan masz czas?", "Mam czas?"], 1, "Masz is the friend line. You ask Czy pan ma czas."]
    ],
    practice: [
      ["mc", "I live in Kraków =", "Mieszkam w Krakowie.", "Mieszka w Krakowie.", "Mieszkasz w Krakowie.", "Mieszkam w Kraków.", "I takes -am, and the place chunk is w Krakowie."],
      ["mc", "You live in Warsaw. (to a woman)", "Pani mieszka w Warszawie.", "Pani mieszkasz w Warszawie.", "Pani mieszkam w Warszawie.", "Pani mieszkać w Warszawie.", "The verb agrees with pani: mieszka."],
      ["mc", "I read =", "Czytam.", "Czyta.", "Czytasz.", "Czytają.", "The I ending is czytam, for I read and I'm reading."],
      ["mc", "My brother reads =", "Mój brat czyta.", "Moja brat czyta.", "Mój brat czytam.", "Mój brat czytasz.", "Mój is the masculine form, and czyta agrees with brat."],
      ["mc", "A friend says you have time. You recognize…", "Masz czas?", "Czy pan ma czas?", "Pan masz czas?", "Mam czas?", "Masz is the friend line. You produce Czy pan ma czas."],
      ["or", "My brother lives in Kraków (start with mój brat mieszka)", "Mój brat mieszka w Krakowie", "moja", "Mój is the masculine form."],
      ["or", "Anna is reading (start with Anna)", "Anna czyta", "czytam", "The verb agrees with Anna."],
      ["or", "We read in Polish (start with czytamy)", "Czytamy po polsku", "czytam", "Czytamy is the plural ending for we."],
      ["fi", "__ w Krakowie.", "I live in Kraków.", "Mieszkam", "Mieszka|Mieszkasz|Mieszkają", "The I ending on mieszkać is -am."],
      ["fi", "Pani __.", "You read. (to a woman)", "czyta", "czytasz|czytam|czytamy", "The verb agrees with pani."],
      ["fi", "__ brat ma czas.", "My brother has time.", "Mój", "Moja|Moj|Moje", "Mój is the masculine form, and the mark on ó counts.", "!strict"],
      ["ty", "You live in Warsaw. (to a woman, four words, start with pani mieszka)", "Pani mieszka w Warszawie", "pani · mieszkać · Warszawa", "mieszkasz mieszkam", "The verb agrees with pani."],
      ["ty", "My brother has time. (four words, start with mój brat)", "Mój brat ma czas", "mój · brat · mieć · czas", "moja masz", "Mój is the masculine form."],
      ["ty", "I have time. (two words, start with mam)", "Mam czas", "mieć · czas", "masz ma", "Mam is the I form. Masz is what a friend says."]
    ]
  },
  {
    id: "accusative",
    title: "The accusative",
    blurb: "Mark the person or thing a verb acts on, including a masculine thing that looks like the base form.",
    deck: "Food and drink",
    body: `
<p>English leaves the noun alone. "I see my brother" uses the same "brother" as "my brother is here". Polish changes the ending of the person or thing the verb acts on. That form is the accusative.</p>
<h3>A masculine person takes -a</h3>
<p><b>Brat</b> becomes <b>brata</b>. <b>Mam brata</b> is "I have a brother". The possessive changes with him: <b>mój</b> becomes <b>mojego</b>. <b>Widzę mojego brata</b> is "I see my brother". <b>Anna</b> is feminine, so her object form is <b>Annę</b>: <b>Widzę Annę</b>.</p>
{{ex:Mam brata.|mahm BRAH-tah|I have a brother.}}
{{ex:Widzę mojego brata.|VYEE-dzeh moh-YEH-goh BRAH-tah|I see my brother.}}
{{ex:Widzę Annę.|VYEE-dzeh AHN-neh|I see Anna.}}
<h3>A feminine noun often takes -ę</h3>
<p>You already say <b>Czy to jest dobra kawa</b>, with the base forms, because <b>to jest</b> is not acting on the coffee. After <b>poproszę</b>, "I'll have" or "please", the endings move. <b>Kawa</b> becomes <b>kawę</b>. <b>Dobra</b> becomes <b>dobrą</b>. A book, <b>książka</b>, works the same way: <b>Czytam książkę</b>.</p>
{{ex:Poproszę kawę.|poh-PROH-sheh KAH-veh|Coffee, please.}}
{{ex:Poproszę dobrą kawę.|poh-PROH-sheh DOH-brohN KAH-veh|A good coffee, please.}}
{{ex:Czytam książkę.|CHIH-tahm KSHYOHN-shkeh|I'm reading a book.}}
<h3>A masculine thing looks like the base form</h3>
<p><b>List</b> means a letter. <b>Piszę list</b> is "I'm writing a letter". The word looks like the base form, and it is still the accusative. This noun simply has no extra letter there. Do not add <b>-a</b>. That <b>-a</b> is for a masculine person. The possessive stays <b>mój</b> for a thing: <b>Piszę mój list</b>, not <b>mojego</b>. Neuter <b>piwo</b> and <b>mleko</b> look unchanged too: <b>Poproszę piwo</b>.</p>
{{ex:Piszę list.|PYEE-sheh leest|I'm writing a letter.}}
{{ex:Piszę mój list.|PYEE-sheh mooy leest|I'm writing my letter.}}
{{ex:Poproszę piwo.|poh-PROH-sheh PYEE-voh|A beer, please.}}
<p>The café words wait on the same feminine ending: <b>herbata</b> becomes <b>herbatę</b>, and <b>woda</b> becomes <b>wodę</b>. Hold the three shapes together. A masculine person takes <b>-a</b>. A feminine noun in <b>-a</b> usually takes <b>-ę</b>. A masculine thing, and a neuter noun such as <b>piwo</b> or <b>mleko</b>, keeps the look of the base form, and that look is still the accusative.</p>
<div class="tip"><b>Most common mistake:</b> the base form for a person. <b>Widzę mój brat</b> → <b>Widzę mojego brata</b>.</div>
`,
    check: [
      ["I have a brother.", ["Mam brata.", "Mam brat.", "Mam bratem.", "Mam mojego brat."], 0, "A masculine person as the object takes the accusative singular brata."],
      ["Coffee, please.", ["Poproszę kawa.", "Poproszę kawe.", "Poproszę kawą.", "Poproszę kawę."], 3, "Kawa is feminine, so the accusative ending is -ę: kawę."],
      ["I am writing a letter.", ["Piszę lista.", "Piszę list.", "Piszę listę.", "Piszę listu."], 1, "List is a masculine thing. The accusative case looks like the base form."]
    ],
    practice: [
      ["mc", "I have a brother =", "Mam brata.", "Mam brat.", "Mam bratem.", "Mam brać.", "Brata is the accusative singular of a masculine person."],
      ["mc", "Coffee, please. (use poproszę)", "Poproszę kawę.", "Poproszę kawa.", "Poproszę kawe.", "Poproszę kawą.", "The accusative ending on kawa is -ę.", "!strict"],
      ["mc", "I am writing a letter =", "Piszę list.", "Piszę lista.", "Piszę listę.", "Piszę listu.", "A masculine thing stays looking like the base form, and it is still the accusative case."],
      ["mc", "I see my brother =", "Widzę mojego brata.", "Widzę mój brat.", "Widzę moja brata.", "Widzę mojego brat.", "The person and mój both take the accusative ending."],
      ["mc", "I am reading a book =", "Czytam książkę.", "Czytam książka.", "Czytam książke.", "Czytam książek.", "Książka is feminine, so the accusative ending is książkę.", "!strict"],
      ["or", "I have a brother (start with mam)", "Mam brata", "brat", "Brata is the accusative singular."],
      ["or", "A good coffee, please (use poproszę, start with poproszę dobrą)", "Poproszę dobrą kawę", "kawa", "Dobrą kawę takes the accusative ending."],
      ["or", "I am writing a letter (start with piszę)", "Piszę list", "listę", "List looks like the base form and is still the accusative case."],
      ["fi", "Mam __.", "I have a brother.", "brata", "brat|bratem|brać", "Brata is the accusative singular."],
      ["fi", "Poproszę __.", "Coffee, please.", "kawę", "kawe|kawa|kawą", "Kawę is the accusative ending, and the ogonek counts.", "!strict"],
      ["fi", "Widzę __ brata.", "I see my brother.", "mojego", "mój|moja|moje", "The possessive for a masculine person takes the accusative ending."],
      ["ty", "I see Anna. (two words, start with widzę)", "Widzę Annę", "widzieć · Anna", "Anna widzi", "Annę is the accusative ending."],
      ["ty", "I am reading a book. (two words, start with czytam)", "Czytam książkę", "czytać · książka", "książka książke", "Książkę is the accusative ending.", "!strict"],
      ["ty", "I am writing my letter. (use mój, three words, start with piszę)", "Piszę mój list", "pisać · mój · list", "mojego lista", "List is a masculine thing, so the accusative case looks like the base form and mój stays."]
    ]
  },
  {
    id: "ordering",
    title: "Ordering food and drink",
    blurb: "Order food and drink, ask for the bill, and answer Smacznego with Dziękuję.",
    deck: "Food and drink",
    body: `
<p>The accusative is what you use at a café. <b>Poproszę</b> plus the food is "I'll have" or "please". The base form <b>kawa</b> is the mistake. The order is <b>Poproszę kawę</b>.</p>
<h3>The drink and the food</h3>
<p><b>Dla mnie herbatę</b> is "tea for me". <b>Dla mnie</b> means "for me", and the drink is still accusative. <b>Woda</b> becomes <b>wodę</b>. <b>Piwo</b> is neuter and <b>chleb</b>, bread, is a masculine thing, so those two look like the base form: <b>Poproszę piwo</b>, <b>Poproszę chleb</b>. Cheese, <b>ser</b>, stays <b>ser</b>. <b>Barszcz</b> and <b>żurek</b> are soups, masculine things, and they stay too.</p>
{{ex:Poproszę kawę.|poh-PROH-sheh KAH-veh|Coffee, please.}}
{{ex:Dla mnie herbatę.|DLAH mnyeh khehr-BAH-teh|Tea for me.}}
{{ex:Poproszę wodę.|poh-PROH-sheh VOH-deh|Water, please.}}
{{ex:Poproszę piwo.|poh-PROH-sheh PYEE-voh|A beer, please.}}
{{ex:Poproszę chleb.|poh-PROH-sheh khlehp|Bread, please.}}
{{ex:Poproszę barszcz.|poh-PROH-sheh bahrshch|Barszcz, please.}}
<h3>Liking is the same ending</h3>
<p>English "I like" does not look like an order. Polish <b>lubię</b> takes the accusative, the same ending as <b>poproszę</b>. <b>Lubię pierogi</b>. <b>Lubię żurek</b>. <b>Lubię kawę</b>. There is no extra word for the person who likes it.</p>
{{ex:Lubię pierogi.|LOO-byeh pyeh-ROH-gyee|I like pierogi.}}
{{ex:Lubię żurek.|LOO-byeh ZHOO-rehk|I like żurek.}}
<p>Two coffees stay <b>dwie kawy</b> after <b>poproszę</b>, the same words you used for the number. <b>Pierogi</b> is already a plural, and the accusative looks like that plural: <b>Poproszę pierogi</b>. Cheese, <b>ser</b>, is a masculine thing, so an order is <b>Poproszę ser</b>.</p>
<h3>With milk, the bill, and the wish</h3>
<p><b>Kawa z mlekiem</b> is "coffee with milk". The ending on <b>mlekiem</b> means "with". The jobs lesson explains that ending. <b>Z Polski</b>, which you already say, is origin, not "with". You can use <b>z mlekiem</b> as a phrase now.</p>
<p><b>Rachunek, proszę</b> asks for the bill. Before a meal, the wish is <b>Smacznego</b>. When a waiter says it, the answer is <b>Dziękuję</b>. <b>Dobranoc</b> is not a table word.</p>
{{ex:Kawa z mlekiem.|KAH-vah z MLEH-kyehm|Coffee with milk.}}
{{ex:Rachunek, proszę.|rah-KHOO-nehk PROH-sheh|The bill, please.}}
{{ex:Smacznego.|smahch-NEH-goh|Enjoy your meal.}}
<div class="tip"><b>Most common mistake:</b> the base form in an order. <b>Poproszę kawa</b> → <b>Poproszę kawę</b>.</div>
`,
    check: [
      ["Tea for me.", ["Dla mnie herbata.", "Dla mnie herbatę.", "Dla mnie herbatą.", "Dla mnie herbate."], 1, "The drink takes the accusative ending: herbatę."],
      ["A waiter says Smacznego before the meal. You answer…", ["Dziękuję.", "Smacznego.", "Proszę.", "Dobranoc."], 0, "When a waiter says Smacznego, the answer is Dziękuję. Dobranoc is not for the table."],
      ["I like żurek.", ["Lubię żurka.", "Lubi żurek.", "Lubię żurek.", "Lubię żurkę."], 2, "Żurek is a masculine thing, so the accusative case looks like the base form."]
    ],
    practice: [
      ["mc", "Coffee, please. (use poproszę)", "Poproszę kawę.", "Poproszę kawa.", "Poproszę kawe.", "Poproszę kawą.", "Kawę is the accusative ending.", "!strict"],
      ["mc", "Tea for me =", "Dla mnie herbatę.", "Dla mnie herbata.", "Dla mnie herbatą.", "Dla mnie herbate.", "Herbatę is the accusative singular.", "!strict"],
      ["mc", "The bill, please =", "Rachunek, proszę.", "Rachunku, proszę.", "Smacznego, proszę.", "Kawa, proszę.", "Rachunek names the bill. Smacznego is the wish before a meal."],
      ["mc", "A waiter says Smacznego. You answer…", "Dziękuję.", "Smacznego.", "Dobranoc.", "Proszę.", "When a waiter says Smacznego, the answer is Dziękuję. Dobranoc is not a table word."],
      ["mc", "A beer, please. (use poproszę)", "Poproszę piwo.", "Poproszę piwa.", "Poproszę piwem.", "Poproszę piwę.", "Piwo is neuter, so the accusative case looks like the base form."],
      ["or", "Coffee, please (use poproszę, start with poproszę)", "Poproszę kawę", "kawa", "Kawę is the accusative ending."],
      ["or", "Tea for me (start with dla mnie)", "Dla mnie herbatę", "herbata", "Herbatę is the feminine form in the accusative singular."],
      ["or", "I like pierogi (start with lubię)", "Lubię pierogi", "pieroga", "Pierogi is the accusative case."],
      ["fi", "Poproszę __.", "Tea, please.", "herbatę", "herbate|herbata|herbatą", "Herbatę is the accusative ending, and the ogonek counts.", "!strict"],
      ["fi", "Lubię __.", "I like żurek.", "żurek", "żurka|żurkę|żurkiem", "Żurek looks like the base form and is still the accusative case."],
      ["fi", "__, proszę.", "The bill, please.", "Rachunek", "Rachunku|Rachunkiem|Kawę", "Rachunek is a masculine thing, so the accusative case looks like the base form."],
      ["ty", "A water, please. (accusative, two words, start with poproszę)", "Poproszę wodę", "poprosić · woda", "woda wode", "Wodę is the feminine form, and it is the accusative ending.", "!strict"],
      ["ty", "I like coffee. (two words, start with lubię)", "Lubię kawę", "lubić · kawa", "kawa lubi", "Kawę is the accusative singular."],
      ["ty", "Bread, please. (accusative, two words, start with poproszę)", "Poproszę chleb", "poprosić · chleb", "chleba chlebem", "Chleb is a masculine thing. The accusative case looks like the base form."]
    ]
  },
  {
    id: "e-isz",
    title: "Verbs in -ę",
    blurb: "Use the two -ę patterns for like, do, write and drink, and keep pan in the third person.",
    deck: "Home and routine",
    body: `
<p>Not every verb ends in <b>-am</b> for "I". <b>Mam</b>, <b>mieszkam</b> and <b>czytam</b> do. Two more patterns end in <b>-ę</b>. Giving every verb <b>-am</b> is the mistake. <b>lubiam</b> is not a Polish word. <b>pijam</b> is not the present of <b>pić</b>.</p>
<h3>Two patterns</h3>
<div class="tbl"><table><tr><th></th><th>robić, do</th><th>pisać, write</th></tr>
<tr><td>I</td><td class="k">robię</td><td class="k">piszę</td></tr>
<tr><td>a friend says</td><td class="k">robisz</td><td class="k">piszesz</td></tr>
<tr><td>pan, pani, on, ona</td><td class="k">robi</td><td class="k">pisze</td></tr>
<tr><td>we</td><td class="k">robimy</td><td class="k">piszemy</td></tr>
<tr><td>they</td><td class="k">robią</td><td class="k">piszą</td></tr></table></div>
<p><b>Lubić</b>, to like, copies <b>robić</b>: <b>lubię</b>, <b>lubi</b>, <b>lubimy</b>, <b>lubią</b>. <b>Pić</b>, to drink, copies <b>pisać</b>: <b>piję</b>, <b>pije</b>, <b>pijemy</b>, <b>piją</b>. A friend says <b>robisz</b>, <b>lubisz</b>, <b>piszesz</b>, <b>pijesz</b>. You recognize those. <b>Pan</b> and <b>pani</b> take <b>robi</b>, <b>lubi</b>, <b>pisze</b>, <b>pije</b>.</p>
<p>The aid makes <b>piszę</b> and <b>pisze</b> sound the same, because a final <b>ę</b> is an ordinary e. The ogonek is still the "I" ending. You type it. <b>Lubię</b> and <b>lubi</b> do not sound the same: <b>lubi</b> ends in a real i.</p>
{{ex:Lubię kawę.|LOO-byeh KAH-veh|I like coffee.}}
{{ex:Co pani robi?|tsoh PAH-nyee ROH-byee|What do you do? (to a woman)}}
{{ex:Pan pisze list.|pahn PYEE-sheh leest|You are writing a letter. (to a man)}}
{{ex:Pijesz kawę.|PYEE-yehsh KAH-veh|You drink coffee. (a friend says this)}}
<h3>The object is the accusative you know</h3>
<p><b>Piszę list</b> keeps the masculine thing looking like the base form. <b>Piję wodę</b> and <b>Lubię kawę</b> take the feminine <b>-ę</b>. <b>Anna lubi pierogi</b>. The verb agrees with Anna: <b>lubi</b>, not <b>lubię</b>. <b>Pijemy wodę</b> is "we drink water". They, <b>oni</b> or <b>one</b>, share <b>piją</b> in the present. Gender shows up on <b>mój</b> and on adjectives, not on this present ending.</p>
{{ex:Piszę list.|PYEE-sheh leest|I'm writing a letter.}}
{{ex:Piję wodę.|PYEE-yeh VOH-deh|I'm drinking water.}}
{{ex:Anna lubi pierogi.|AHN-nah LOO-byee pyeh-ROH-gyee|Anna likes pierogi.}}
{{ex:Pijemy wodę.|pyee-YEH-mih VOH-deh|We drink water.}}
<p>You may meet <b>Pracuję</b>, "I work". That is a third pattern. Recognize it. This lesson does not drill it.</p>
{{ex:Pracuję.|prah-TSOO-yeh|I work. (recognize this pattern)}}
<div class="tip"><b>Most common mistake:</b> an <b>-am</b> ending on an <b>-ę</b> verb. <b>Lubiam kawę</b> → <b>Lubię kawę</b>.</div>
`,
    check: [
      ["I like coffee.", ["Lubiam kawę.", "Lubi kawę.", "Lubisz kawę.", "Lubię kawę."], 3, "Lubić takes -ę for I. Lubisz is the friend line, and you do not type it."],
      ["You are writing a letter, speaking to a man.", ["Pan piszę list.", "Pan pisze list.", "Pan piszesz list.", "Pan pisam list."], 1, "The verb agrees with pan, so the form is pisze. Piszę is the I form."],
      ["Which line do you only recognize?", ["Pracuję.", "Piję wodę.", "Lubię kawę.", "Piszę list."], 0, "Pracuję is a third pattern. You produce piję, lubię and piszę."]
    ],
    practice: [
      ["mc", "I like coffee =", "Lubię kawę.", "Lubiam kawę.", "Lubi kawę.", "Lubisz kawę.", "The I ending is lubię, not an -am form."],
      ["mc", "You like coffee. (to a man)", "Pan lubi kawę.", "Pan lubisz kawę.", "Pan lubię kawę.", "Pan lubiam kawę.", "The verb agrees with pan: lubi."],
      ["mc", "I am writing a letter =", "Piszę list.", "Pisze list.", "Piszę lista.", "Pisam list.", "Piszę is the I form. The accusative case of list looks like the base form.", "!strict"],
      ["mc", "I am drinking water =", "Piję wodę.", "Pijam wodę.", "Piję woda.", "Pije wodę.", "Pić takes piję for I, and woda takes the accusative ending wodę.", "!strict"],
      ["mc", "What do you do? (to a woman)", "Co pani robi?", "Co pani robisz?", "Co pani robię?", "Co pani robisz kawę?", "The verb agrees with pani: robi."],
      ["or", "I like coffee (start with lubię)", "Lubię kawę", "lubiam", "Kawę is the accusative ending."],
      ["or", "You are writing a letter (to a woman, start with pani pisze)", "Pani pisze list", "piszę", "The verb agrees with pani. Piszę is the I form, and the ogonek is the only difference.", "!strict"],
      ["or", "I am drinking water (start with piję)", "Piję wodę", "woda", "Wodę is the accusative singular."],
      ["fi", "__ kawę.", "I like coffee.", "Lubię", "Lubie|Lubi|Lubiam", "Lubię is the I form, and the ogonek counts.", "!strict"],
      ["fi", "Pan __ list.", "You are writing a letter. (to a man)", "pisze", "piszę|piszesz|pisam", "The verb agrees with pan. Piszę is the I form, and the ogonek is the difference.", "!strict"],
      ["fi", "Co pani __?", "What do you do? (to a woman)", "robi", "robisz|robię|robią", "The verb agrees with pani."],
      ["ty", "I drink coffee. (two words, start with piję)", "Piję kawę", "pić · kawa", "pijam pije", "Kawę is the accusative ending.", "!strict"],
      ["ty", "Anna likes pierogi. (three words, start with Anna)", "Anna lubi pierogi", "Anna · lubić · pierogi", "lubię lubisz", "The verb agrees with Anna."],
      ["ty", "We drink water. (two words, start with pijemy)", "Pijemy wodę", "pić · woda", "piję woda", "Wodę is the accusative singular."]
    ]
  },
  {
    id: "instrumental",
    title: "Jobs and the instrumental",
    blurb: "Name your job after jestem with the instrumental ending, and keep z Polski for where you are from.",
    deck: "Work and study",
    body: `
<p>English says "I am a doctor" and the noun stays "doctor". After <b>jestem</b> and <b>jest</b>, a job noun in Polish changes. That form is the instrumental. There is still no word for "a".</p>
<h3>A man's job, a woman's job</h3>
<p>A man says <b>Jestem studentem</b>, <b>Jestem lekarzem</b>, <b>Jestem nauczycielem</b>. The ending is <b>-em</b>. A woman says <b>Jestem studentką</b>, <b>Jestem lekarką</b>, <b>Jestem nauczycielką</b>. The ending is <b>-ą</b>. <b>Marek jest nauczycielem</b>. <b>Anna jest nauczycielką</b>. <b>Ona jest studentką</b>.</p>
{{ex:Jestem studentem.|YEH-stehm stoo-DEHN-tehm|I'm a student. (a man)}}
{{ex:Jestem lekarzem.|YEH-stehm leh-KAH-zhehm|I'm a doctor. (a man)}}
{{ex:Jestem lekarką.|YEH-stehm leh-KAHR-kohN|I'm a doctor. (a woman)}}
{{ex:Marek jest nauczycielem.|MAH-rehk yehst nah-oo-chih-CHYEH-lehm|Marek is a teacher.}}
{{ex:Anna jest nauczycielką.|AHN-nah yehst nah-oo-chih-CHYEHL-kohN|Anna is a teacher.}}
{{ex:Ona jest studentką.|OH-nah yehst stoo-DEHNT-kohN|She is a student.}}
<h3>To jest stays in the base form</h3>
<p>A describing word stays as you learned it: <b>On jest dobry</b>. Only the job noun after <b>jest</b> or <b>jestem</b> takes the instrumental. <b>To jest</b> is different again. The noun stays in the base form: <b>To jest lekarz</b>, <b>To jest lekarka</b>, <b>To jest moja praca</b>. <b>Praca</b> is "job", feminine, so <b>moja</b> is the feminine form. You do not say <b>To jest lekarzem</b>.</p>
{{ex:To jest lekarz.|toh yehst LEH-kahsh|This is a doctor. (a man, base form)}}
{{ex:To jest lekarka.|toh yehst leh-KAHR-kah|This is a doctor. (a woman, base form)}}
{{ex:To jest moja praca.|toh yehst MOH-yah PRAH-tsah|This is my job.}}
<h3>Two kinds of z</h3>
<p><b>Kawa z mlekiem</b> is "with", and <b>mlekiem</b> is instrumental. <b>Jestem z Polski</b> is origin, a genitive chunk you already know, not "with". This lesson drills the job after <b>być</b>. Use <b>z mlekiem</b> as the phrase you met in the café, and keep <b>z Polski</b> for where you are from.</p>
{{ex:Kawa z mlekiem.|KAH-vah z MLEH-kyehm|Coffee with milk.}}
{{ex:Jestem z Polski.|YEH-stehm s POHL-skyee|I'm from Poland.}}
<p>Leave describing words alone. <b>On jest dobry</b> keeps the masculine form from the adjective lesson. You are not learning an instrumental ending for <b>dobry</b> here. The new ending sits only on the job noun: <b>-em</b> when a man names his job, and <b>-ą</b> when a woman names hers. A sentence with no ending, <b>Jestem student</b>, has dropped the case.</p>
{{ex:On jest dobry.|ohn yehzd DOH-brih|He is good.}}
<div class="tip"><b>Most common mistake:</b> a bare job after jestem. <b>Jestem lekarz</b> → <b>Jestem lekarzem</b>.</div>
`,
    check: [
      ["I'm a doctor. You are a man.", ["Jestem lekarzem.", "Jestem lekarz.", "Jestem lekarką.", "Jestem lekarza."], 0, "A man's job after jestem takes the instrumental ending -em: lekarzem."],
      ["I'm a student. You are a woman.", ["Jestem studentem.", "Jestem studentka.", "Jestem studentką.", "Jestem studentę."], 2, "A woman says studentką, the feminine form in the instrumental case."],
      ["Marek is a teacher.", ["Marek jest nauczyciel.", "Marek jest nauczycielem.", "To jest nauczycielem.", "Marek jest nauczycielką."], 1, "The job after jest takes the instrumental case. To jest would keep the base form."]
    ],
    practice: [
      ["mc", "I'm a doctor. (a man)", "Jestem lekarzem.", "Jestem lekarz.", "Jestem lekarką.", "Jestem lekarza.", "Lekarzem is the instrumental ending for a man."],
      ["mc", "I'm a doctor. (a woman)", "Jestem lekarką.", "Jestem lekarka.", "Jestem lekarzem.", "Jestem lekarkę.", "Lekarką is the feminine form in the instrumental case.", "!strict"],
      ["mc", "She is a student =", "Ona jest studentką.", "Ona jest studentem.", "Ona jest studentka.", "Ona jest studentę.", "Studentką is the feminine form in the instrumental case.", "!strict"],
      ["mc", "This is my job =", "To jest moja praca.", "To jest moją pracą.", "To jest mój praca.", "To jest moja pracą.", "After to jest the noun stays in the base form, and moja is the feminine form.", "!strict"],
      ["mc", "Coffee with milk =", "Kawa z mlekiem.", "Kawa z mleko.", "Jestem z mlekiem.", "Kawa z mleka.", "Z mlekiem means with. Z Polski is origin, not with."],
      ["or", "I'm a student (a man, start with jestem)", "Jestem studentem", "student", "Studentem is the instrumental ending."],
      ["or", "I'm a doctor (a woman, start with jestem)", "Jestem lekarką", "lekarka", "Lekarką is the feminine form in the instrumental case, and the mark on ą counts.", "!strict"],
      ["or", "Marek is a teacher (start with Marek)", "Marek jest nauczycielem", "nauczyciel", "The instrumental case marks the job."],
      ["fi", "Jestem __.", "I'm a doctor. (a man)", "lekarzem", "lekarz|lekarką|lekarza", "Lekarzem is the instrumental ending."],
      ["fi", "Jestem __.", "I'm a student. (a woman)", "studentką", "studentka|studentem|studentę", "Studentką is the feminine form in the instrumental case, and the mark counts.", "!strict"],
      ["fi", "Anna jest __.", "Anna is a teacher.", "nauczycielką", "nauczycielka|nauczycielem|nauczyciel", "The instrumental singular marks her job, and the mark on ą counts.", "!strict"],
      ["ty", "I'm a doctor. (a man, two words, start with jestem)", "Jestem lekarzem", "być · lekarz", "lekarz lekarza", "Lekarzem is the instrumental ending."],
      ["ty", "I'm a student. (a woman, two words, start with jestem)", "Jestem studentką", "być · studentka", "studentka studentem", "Studentką is the feminine form in the instrumental case.", "!strict"],
      ["ty", "She is a doctor. (a woman, the -ą form, three words, start with ona)", "Ona jest lekarką", "ona · być · lekarka", "lekarka lekarzem", "The instrumental case marks the job, and lekarką is the feminine form.", "!strict"]
    ]
  },
  {
    id: "family",
    title: "Family and age",
    blurb: "Introduce your parents and siblings, and ask an adult's age with pan or pani.",
    deck: "People and family",
    body: `
<p>The close family words are <b>mama</b>, <b>tata</b>, <b>brat</b> and <b>siostra</b>. <b>Mój</b> and <b>moja</b> still have to match. <b>Brat</b> takes <b>mój</b>. <b>Siostra</b> and <b>mama</b> take <b>moja</b>. <b>Tata</b> ends in <b>-a</b> and is still masculine: <b>mój tata</b>, not <b>moja tata</b>.</p>
{{ex:To jest moja mama.|toh yehst MOH-yah MAH-mah|This is my mom.}}
{{ex:To jest mój tata.|toh yehst mooy TAH-tah|This is my dad.}}
{{ex:Moja siostra ma na imię Ewa.|MOH-yah SHYOH-strah mah nah EE-myeh EH-vah|My sister's name is Ewa.}}
<h3>Tall, and "I have"</h3>
<p><b>Wysoki</b> means tall. It changes like <b>dobry</b> and <b>dobra</b>. <b>Mój brat jest wysoki</b>. <b>Moja siostra jest wysoka</b>. The person you "have" is accusative, which you already use: <b>Mam brata</b>, <b>Mam siostrę</b>, <b>Mam tatę</b>, <b>Mam mamę</b>.</p>
{{ex:Mój brat jest wysoki.|mooy braht yehst fih-SOH-kyee|My brother is tall.}}
{{ex:Moja siostra jest wysoka.|MOH-yah SHYOH-strah yehst fih-SOH-kah|My sister is tall.}}
{{ex:Mam siostrę.|mahm SHYOH-streh|I have a sister.}}
{{ex:Mam tatę.|mahm TAH-teh|I have a dad.}}
<h3>Age</h3>
<p>English says "I am twenty". Polish says you have the years: <b>Mam dwadzieścia lat</b>. Thirty is <b>Mam trzydzieści lat</b>. Fifty is <b>Mam pięćdziesiąt lat</b>. With twenty, thirty, fifteen and fifty, the word is <b>lat</b>. Two, three and four take <b>lata</b>: <b>Mam dwa lata</b>, <b>Mam dwadzieścia dwa lata</b>. That is the same split as <b>złote</b> and <b>złotych</b>. The genitive lesson will explain <b>lat</b>. For now, learn <b>Mam dwadzieścia lat</b>.</p>
<p>A friend asks <b>Ile masz lat?</b> You recognize that. You ask <b>Ile pan ma lat?</b> or <b>Ile pani ma lat?</b> Some languages put the person in a dative form, a case this course does not drill. Polish does not say age that way. <b>Jest mi dwadzieścia lat</b> is not the line, and neither is <b>Jestem dwadzieścia lat</b>.</p>
{{ex:Mam dwadzieścia lat.|mahm dvah-JYEH-sh'chyah laht|I am twenty.}}
{{ex:Mam trzydzieści lat.|mahm tshih-JYEH-sh'chyee laht|I am thirty.}}
{{ex:Mam pięćdziesiąt lat.|mahm pyehnyj'-JYEH-shyohnt laht|I am fifty.}}
{{ex:Ile pan ma lat?|EE-leh pahn mah laht|How old are you? (to a man)}}
{{ex:Ile pani ma lat?|EE-leh PAH-nyee mah laht|How old are you? (to a woman)}}
{{ex:Ile masz lat?|EE-leh mahsh laht|How old are you? (a friend says this)}}
<p>The question uses the same <b>ma</b> as <b>Czy pan ma czas</b>. <b>Ile pan ma lat</b> and <b>Ile pani ma lat</b> are the lines you produce. Age does not invent a new verb ending, and it does not switch the person into a friend form.</p>
<div class="tip"><b>Most common mistake:</b> a dative person for age. <b>Jest mi dwadzieścia lat</b> → <b>Mam dwadzieścia lat</b>.</div>
`,
    check: [
      ["This is my dad.", ["To jest moja tata.", "To jest mój tatę.", "To jest mój tata.", "To jest mojego tata."], 2, "Tata ends in -a and is still masculine, so the masculine form is mój."],
      ["You ask a woman her age. Which do you produce?", ["Ile masz lat?", "Ile pani ma lat?", "Ile pani masz lat?", "Jest pani dwadzieścia lat?"], 1, "You produce pani plus ma. Ile masz lat is what a friend asks."],
      ["I am twenty.", ["Mam dwadzieścia lat.", "Jestem dwadzieścia lat.", "Jest mi dwadzieścia lat.", "Mam dwadzieścia lata."], 0, "Age uses mam plus the years. Twenty takes lat, not lata."]
    ],
    practice: [
      ["mc", "This is my dad =", "To jest mój tata.", "To jest moja tata.", "To jest mój tatę.", "To jest mojego tata.", "Tata takes the masculine form mój."],
      ["mc", "This is my mom =", "To jest moja mama.", "To jest mój mama.", "To jest moja mamę.", "To jest moją mama.", "Mama takes the feminine form moja.", "!strict"],
      ["mc", "I am twenty =", "Mam dwadzieścia lat.", "Jestem dwadzieścia lat.", "Jest mi dwadzieścia lat.", "Mam dwadzieścia lata.", "Age is mam plus lat. Jest mi is not the age line."],
      ["mc", "You ask a man his age =", "Ile pan ma lat?", "Ile masz lat?", "Ile pan masz lat?", "Ile pan jesteś lat?", "You produce pan plus ma. Masz is the friend line."],
      ["mc", "My sister is tall =", "Moja siostra jest wysoka.", "Mój siostra jest wysoka.", "Moja siostra jest wysoki.", "Moja siostra jest wysokie.", "Moja and wysoka are the feminine form."],
      ["or", "This is my dad (start with to jest mój)", "To jest mój tata", "moja", "Tata takes the masculine form."],
      ["or", "I have a sister (start with mam)", "Mam siostrę", "siostra", "Siostrę is the accusative ending."],
      ["or", "My mom is tall (start with moja mama jest)", "Moja mama jest wysoka", "wysoki", "Wysoka is the feminine form."],
      ["fi", "To jest __ tata.", "This is my dad.", "mój", "moja|moj|moje", "Mój is the masculine form, and the mark on ó counts.", "!strict"],
      ["fi", "Mam __.", "I have a sister.", "siostrę", "siostra|siostre|siostrą", "Siostrę is the accusative ending, and the ogonek counts.", "!strict"],
      ["fi", "Ile __ ma lat?", "How old are you? (to a man)", "pan", "masz|jesteś|ty", "You ask with pan, and the verb agrees with pan."],
      ["ty", "My sister is tall. (four words, start with moja siostra jest)", "Moja siostra jest wysoka", "moja · siostra · wysoki", "wysoki mój", "Wysoka is the feminine form."],
      ["ty", "I have a dad. (two words, start with mam)", "Mam tatę", "mieć · tata", "tata tate", "Tatę is the accusative ending.", "!strict"],
      ["ty", "How old are you? (to a woman, four words, start with ile pani)", "Ile pani ma lat", "ile · pani · mieć · lat", "masz jesteś", "The verb agrees with pani."]
    ]
  },
  {
    id: "routine",
    title: "The daily routine",
    blurb: "Say what you always, often or never do, with the same verb endings you already know.",
    deck: "Home and routine",
    body: `
<p>English sometimes reaches for a new verb shape once a habit word shows up, as if "usually" needed its own ending. Polish does not. <b>Rano</b>, <b>zawsze</b>, <b>często</b> and <b>nigdy</b> sit beside the present you already know. The ending stays <b>piję</b>, <b>czytam</b>, <b>piszę</b>.</p>
<h3>Morning, always, often</h3>
<p><b>Rano</b> is "in the morning". <b>Zawsze</b> is "always". <b>Często</b> is "often". <b>Rano piję kawę</b>. <b>Zawsze czytam</b>. <b>Często piszę list</b>. The letter is still the accusative that looks like the base form, and the coffee is still <b>kawę</b>.</p>
{{ex:Rano piję kawę.|RAH-noh PYEE-yeh KAH-veh|I drink coffee in the morning.}}
{{ex:Zawsze czytam.|ZAH-fsheh CHIH-tahm|I always read.}}
{{ex:Często piszę list.|CHEHN-stoh PYEE-sheh leest|I often write a letter.}}
<h3>Never</h3>
<p><b>Nigdy</b> means "never", and it pairs with <b>nie</b>. <b>Nigdy nie piję</b> is "I never drink". <b>Nigdy nie czytam</b> is "I never read". <b>Nigdy piję</b>, without <b>nie</b>, is not the line. The <b>nie</b> does not build a new ending. It is still <b>piję</b> and <b>czytam</b>.</p>
{{ex:Nigdy nie piję.|NYEEG-dih nyeh PYEE-yeh|I never drink.}}
{{ex:Nigdy nie czytam.|NYEEG-dih nyeh CHIH-tahm|I never read.}}
<h3>Other people, same endings</h3>
<p><b>Mój brat zawsze czyta</b>. <b>Mój</b> is the masculine form, and <b>czyta</b> agrees with him, not <b>czytam</b>. <b>Moja siostra rano pije kawę</b>. <b>Moja</b> is the feminine form, <b>pije</b> agrees with her, and <b>kawę</b> is the accusative. For "you", you still use <b>pan</b> or <b>pani</b>: <b>Rano pani pije kawę</b>. A friend says <b>Rano pijesz kawę</b>. You recognize that. You do not type it.</p>
{{ex:Mój brat zawsze czyta.|mooy brahd ZAH-fsheh CHIH-tah|My brother always reads.}}
{{ex:Rano pani pije kawę.|RAH-noh PAH-nyee PYEE-yeh KAH-veh|You drink coffee in the morning. (to a woman)}}
{{ex:Moja siostra rano pije kawę.|MOH-yah SHYOH-strah RAH-noh PYEE-yeh KAH-veh|My sister drinks coffee in the morning.}}
<p>When you build a line, put the time word first: <b>rano</b>, <b>zawsze</b>, <b>często</b> or <b>nigdy</b>, then the person if you need one, then the verb you already know. A habit never moves <b>piję</b> into an <b>-am</b> ending, and it never turns <b>pani</b> into a friend ending.</p>
<div class="tip"><b>Most common mistake:</b> a new ending for a habit. <b>Zawsze pijam kawę</b> → <b>Zawsze piję kawę</b>.</div>
`,
    check: [
      ["I drink coffee in the morning.", ["Rano pijam kawę.", "Rano piję kawę.", "Rano piję kawa.", "Rano pijesz kawę."], 1, "Rano does not create a new ending. The I form stays piję, and coffee stays the accusative ending kawę."],
      ["I never read.", ["Nigdy czytam.", "Nigdy nie czyta.", "Nigdy nie czytasz.", "Nigdy nie czytam."], 3, "Nigdy pairs with nie, and the verb stays the I form czytam."],
      ["My sister often reads.", ["Moja siostra często czyta.", "Mój siostra często czyta.", "Moja siostra często czytam.", "Moja siostra często czytasz."], 0, "Moja is the feminine form, and czyta agrees with siostra."]
    ],
    practice: [
      ["mc", "I drink coffee in the morning =", "Rano piję kawę.", "Rano pijam kawę.", "Rano piję kawa.", "Rano pijesz kawę.", "The ending stays piję, and kawę is the accusative ending."],
      ["mc", "I always read =", "Zawsze czytam.", "Zawsze czyta.", "Zawsze czytasz.", "Zawsze czytamam.", "Zawsze does not change the I ending czytam."],
      ["mc", "I often write a letter =", "Często piszę list.", "Często pisam list.", "Często piszę lista.", "Często pisze list.", "Piszę is the I form, and list is the accusative case.", "!strict"],
      ["mc", "I never drink =", "Nigdy nie piję.", "Nigdy piję.", "Nigdy nie pijam.", "Nigdy nie pijesz.", "Nigdy pairs with nie, and the verb stays piję."],
      ["mc", "You read in the morning. (to a woman)", "Rano pani czyta.", "Rano pani czytasz.", "Rano pani czytam.", "Rano pani czytać.", "The verb agrees with pani: czyta."],
      ["or", "I drink coffee in the morning (start with rano piję)", "Rano piję kawę", "kawa", "Kawę is the accusative ending."],
      ["or", "My brother always reads (start with mój brat zawsze)", "Mój brat zawsze czyta", "moja", "Mój is the masculine form, and czyta agrees with brat."],
      ["or", "I never read (start with nigdy nie)", "Nigdy nie czytam", "czytasz", "Nigdy pairs with nie, and czytam is the I form."],
      ["fi", "Rano piję __.", "I drink coffee in the morning.", "kawę", "kawe|kawa|kawą", "Kawę is the accusative ending, and the ogonek counts.", "!strict"],
      ["fi", "Mój brat zawsze __.", "My brother always reads.", "czyta", "czytam|czytasz|czytać", "The verb agrees with brat."],
      ["fi", "__ nie piję.", "I never drink.", "Nigdy", "Zawsze|Często|Rano", "Nigdy pairs with nie. The verb stays piję."],
      ["ty", "I often write a letter. (three words, start with często piszę)", "Często piszę list", "często · pisać · list", "pisze lista", "List is the accusative case, and it looks like the base form.", "!strict"],
      ["ty", "You drink coffee in the morning. (to a woman, four words, start with rano pani pije)", "Rano pani pije kawę", "rano · pani · pić · kawa", "pijesz piję", "The verb agrees with pani, and kawę is the accusative ending.", "!strict"],
      ["ty", "My sister often reads. (four words, start with moja siostra często)", "Moja siostra często czyta", "moja · siostra · często · czytać", "mój czytam", "Moja is the feminine form, and czyta agrees with siostra."]
    ]
  }
];

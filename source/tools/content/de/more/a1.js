/* de-en stage A1: lessons for German speakers (standard German, Germany; du). Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/de.md §4 and §8; practice sets follow the verb-core standing rule (§7). English side as es-en except false-friends (§8). */
module.exports = [
{ id:"it-there", title:"it und there: das Subjekt, das du schon kennst", blurb:"„Es regnet“ kannst du schon. Die Falle ist „es gibt“: Auf Englisch heißt das there is oder there are, nie it gives.", deck:"Smalltalk", body:`
<p>Hier hast du einen Vorteil: Auch im Deutschen braucht jeder Satz ein Subjekt, sogar wenn niemand etwas tut („<b>Es</b> regnet“, „<b>Es</b> ist spät“). Das Englische macht es genauso, nur gibt es zwei solche Platzhalter: <b>it</b> und <b>there</b>.</p>
<h3>Wetter, Uhrzeit, Meinungen: it</h3>
<p><i>it</i> ist hier das deutsche „es“: Es steht nur auf dem Platz des Subjekts. Ein Satz beginnt nie mit <i>Is…</i>, außer er ist eine Frage.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Heute ist es kalt}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Es ist drei Uhr}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Es regnet}}{{ex:It's important to sleep.|/ɪts ɪmˈpɔːrtnt tə ˈsliːp/|Es ist wichtig zu schlafen}}
<h3>„Es gibt“ = There is / There are</h3>
<p>„Es gibt“ bleibt im Deutschen immer gleich: „Es gibt ein Café“, „Es gibt zwei Zimmer“. Im Englischen <b>stimmt das Verb mit dem überein, was folgt</b>: <b>There is</b> + Singular, <b>There are</b> + Plural. Gesprochen wird <i>There is</i> zu <i>There's</i>. Und wörtlich übersetzt wird es nie: <i>It gives a cafe</i> versteht niemand.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Hier in der Nähe gibt es ein Café}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Es gibt zwei Zimmer}}
<h3>Fragen und Verneinung</h3>
<p>In der Frage rückt <i>is</i> oder <i>are</i> vor <i>there</i>, so wie im Deutschen „Gibt es…?“.</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Gibt es hier eine Toilette?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Gibt es noch freie Plätze?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Heute fährt kein Bus}}
<h3>have oder there is?</h3>
<p>„Haben“ (besitzen) ist <i>have</i>; „es gibt“ (etwas ist irgendwo vorhanden) ist <i>there is</i>. „Es gibt hier viele Leute“ ist <i>There are many people here</i>, weder <i>It gives…</i> noch <i>Has…</i>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Ich habe ein Auto}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Draußen steht ein Auto}}
<div class="tip">Typische Fehler: <b>It gives a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓ · <b>There is three trees.</b> ✗ → <b>There are three trees.</b> ✓ · <b>There are a cafe.</b> ✗ → <b>There's a cafe.</b> ✓ · <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓</div>`,
check:[["Wie sagt man „Heute ist es heiß“?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Wie im Deutschen braucht der Satz ein Subjekt: \"it\" (es)."],["There ___ three people. Was gehört in die Lücke?",["is","are","have","be"],1,"\"Three people\" ist Plural, also \"there are\"."],["Wie sagt man „Gibt es hier eine Toilette?“?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"„Gibt es…?“ heißt \"Is there a…?\"."]],
practice:[
["mc","Wie sagt man „Es regnet“?","It's raining.","Is raining.","There is raining.","Rain is.","Beim Wetter steht \"it\" als Subjekt, genau wie „es“ im Deutschen."],
["mc","Wie sagt man „Hier in der Nähe gibt es ein Café“?","There's a cafe near here.","It's a cafe near here.","Has a cafe near here.","There are a cafe near here.","„Es gibt“ + Singular ist \"there is\": Übereinstimmung mit \"a cafe\"."],
["mc","There ___ two rooms. Was gehört in die Lücke?","are","is","have","has","\"Two rooms\" ist Plural, also \"are\" (Übereinstimmung)."],
["mc","Welcher Satz passt zu „Es ist wichtig zu schlafen“?","It's important to sleep.","Is important to sleep.","Important is to sleep.","There is important to sleep.","„Es ist wichtig“ wird zu \"It's important\": \"it\" steht für „es“."],
["mc","Wie sagt man „Es ist drei Uhr“?","It's three o'clock.","They're three o'clock.","Is three o'clock.","Are three o'clock.","Die Uhrzeit steht mit \"it\" im Singular, wie „es ist“ im Deutschen."],
["or","Es gibt zwei freie Plätze","There are two seats","is","„Es gibt“ + Plural: \"there are\" – das Verb stimmt mit dem Subjekt überein (Übereinstimmung)."],
["or","Gibt es hier eine Toilette?","Is there a bathroom here","are","In der Frage steht \"is\" vor \"there\"; eine Toilette, also \"is\" (Übereinstimmung)."],
["or","Heute ist es kalt","It's cold today","Is","Wie im Deutschen braucht der Satz ein Subjekt: \"It's\", nie nur \"Is\"."],
["fi","__ cold today.","Heute ist es kalt","It's|It is","Is|There's|This","Das Subjekt muss stehen: \"it\" nimmt den Platz von „es“ ein."],
["fi","There __ a bank near here.","Hier in der Nähe gibt es eine Bank","is","are|have|has","Eine Bank ist Singular: \"there is\" (Übereinstimmung)."],
["fi","__ there any seats?","Gibt es noch freie Plätze?","Are","Is|Do|Have","\"Seats\" ist Plural, also steht \"Are\" vor \"there\" (Übereinstimmung)."],
["ty","Heute ist es heiß","It's hot today","it · hot · today – das Subjekt muss stehen","Is","Wie im Deutschen braucht der Satz ein Subjekt: \"it\" für „es“."],
["ty","Gibt es hier eine Toilette? (US-Englisch)","Is there a bathroom here|Is there a restroom here","is there · bathroom – als Frage","Are","In der Frage steht \"is\" vor \"there\", dem Subjekt; eine Toilette, also \"is\" (Übereinstimmung)."],
["ty","Es gibt zwei Zimmer","There are two rooms","there · two · room – im Plural","is","„Es gibt“ + Plural: \"there are\" – das Verb stimmt mit dem Subjekt überein. Nicht \"It gives\"."],
["ty","Hier gibt es viele Leute","There are many people here|There are a lot of people here","there · many · people – „es gibt“ ist nicht \"it gives\"","Has","„Es gibt“ heißt \"there is/are\", weder \"it gives\" noch \"has\"; \"people\" ist Plural: \"there are\" (Übereinstimmung)."]]},

{ id:"plurals", title:"Plural: unregelmäßige Formen, Adjektive ohne -s, this / these", blurb:"Das -s kennst du schon. Achte auf people und children, auf these und auf Adjektive, die sich nie verändern.", deck:"Einkaufen und Bezahlen", body:`
<p>Der englische Plural ist viel einfacher als der deutsche („Kinder“, „Frauen“, „Autos“, „Äpfel“): fast immer nur <i>-s</i>, also <i>book → books</i>, <i>box → boxes</i>. Das kennst du schon. Diese Lektion zeigt, was trotzdem anders ist.</p>
<h3>Unregelmäßige Plurale</h3>
<div class="tbl"><table><tr><th>Regel</th><th>Beispiel</th></tr><tr><td>fast immer -s</td><td class="k">book → books</td></tr><tr><td>nach s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>Konsonant + y → -ies</td><td class="k">city → cities</td></tr><tr><td>unregelmäßig</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|zwei Bücher}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Ich habe zwei Kinder}}{{ex:These people are nice.|/ˈðiːz ˈpiːpl ər ˈnaɪs/|Diese Leute sind nett}}
<p><i>people</i> ist schon Plural: <i>people are</i>, nie <i>peoples</i>. Für eine einzelne Person sagst du <i>person</i>. Auch <i>police</i> ist Plural: „Die Polizei ist da“ heißt <i>The police are here</i>.</p>
<h3>Adjektive bekommen keine Endung</h3>
<p>Im Deutschen ändert sich das Adjektiv ständig: „ein rotes Auto“, „rote Autos“, „die roten Autos“. Im Englischen bleibt es <b>immer gleich</b> und steht vor dem Nomen: <i>red cars</i>, nie <i>reds cars</i>.</p>
{{ex:red cars|/ˈred ˈkɑːrz/|rote Autos}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Die Schuhe da sind schön}}
<h3>this / that (eins), these / those (mehrere)</h3>
<p><i>this</i> hat ein kurzes i wie in „Mitte“, <i>these</i> ein langes wie in „Miete“. Wenn du das i in <i>this</i> dehnst, klingt es nach Plural. Und das Verb stimmt überein: <i>this is</i>, <i>these are</i>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Das ist meine Tasche}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Das sind meine Schlüssel}}
<h3>my, your, his, her, our, their</h3>
<p>Sie ändern sich im Plural nicht: <i>my keys</i>. Und <i>his / her</i> richten sich nach dem Besitzer, genau wie „sein / ihr“ im Deutschen: „ihre Brüder“ ist <i>her brothers</i>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Ist das dein Handy?}}{{ex:Her brothers live in Hamburg.|/hər ˈbrʌðərz ˈlɪv ɪn ˈhæmbɜːrg/|Ihre Brüder wohnen in Hamburg}}
<div class="tip">Typische Fehler: <b>the reds cars</b> ✗ → <b>the red cars</b> ✓ · <b>the peoples</b> ✗ → <b>the people</b> ✓ · <b>This are my keys.</b> ✗ → <b>These are my keys.</b> ✓</div>`,
check:[["I have two ___. Was gehört in die Lücke?",["child","children","childs","a child"],1,"Der Plural von \"child\" ist unregelmäßig: \"children\"."],["___ are my keys. Was gehört in die Lücke?",["This","That","These","It"],2,"\"Keys\" ist Plural und das Verb ist \"are\": \"these\"."],["Wie sagt man „die roten Autos“?",["the cars reds","the reds cars","the cars red","the red cars"],3,"Das Adjektiv steht vor dem Nomen und bekommt nie ein -s."]],
practice:[
["mc","Wie sagt man „drei Personen“?","three people","three peoples","three person","three people's","\"People\" ist schon Plural: nie mit -s."],
["mc","Wie lautet der Plural von \"child\"?","children","childs","childes","child","Ein unregelmäßiger Plural: \"child\" → \"children\"."],
["mc","Wie sagt man „Die Schuhe da sind schön“?","Those shoes are nice.","That shoes are nice.","Those shoes are nices.","Those shoes nice are.","\"Shoes\" ist Plural: \"those\". Das Adjektiv \"nice\" bekommt kein -s."],
["mc","Wie sagt man „rote Autos“?","red cars","reds cars","cars reds","cars red","Das Adjektiv steht vor dem Nomen und bleibt ohne Endung."],
["mc","Wie lautet der Plural von \"box\"?","boxes","boxs","boxies","box","Nach s, x, ch, sh kommt -es."],
["or","Das sind meine Schlüssel","These are my keys","is","Mit \"these\" steht das Verb im Plural: \"are\" (Übereinstimmung)."],
["or","Diese Leute sind nett","These people are nice","is","\"People\" ist Plural, also heißt das Verb \"are\" (Übereinstimmung)."],
["or","Ich habe zwei rote Autos","I have two red cars","reds","Das Adjektiv steht vorne und bekommt kein -s: \"red cars\"."],
["fi","I have three __.","Ich habe drei Kinder","children","childs|child|childrens","Unregelmäßiger Plural: \"child\" → \"children\"."],
["fi","__ is my friend.","Das ist mein Freund","This","These|Those|They","Eine einzelne Person: \"this\", mit kurzem i."],
["fi","The __ are very nice.","Die Leute sind sehr nett","people","peoples|person|people's","\"People\" ist schon Plural."],
["ty","Das hier ist meine Tasche","This is my bag","this · my · bag – nur eine","are","Ein einzelner Gegenstand: \"this is\" (Übereinstimmung)."],
["ty","Ist das hier dein Handy? (US-Englisch)","Is this your phone|Is this your cell phone","is · this · your · phone – als Frage","are","In der Frage steht \"is\" vor \"this\"; ein Gegenstand, also \"is\" (Übereinstimmung)."],
["ty","Ich habe zwei rote Autos","I have two red cars","two · red · car – das Adjektiv ohne -s","reds","Das Adjektiv steht vor dem Nomen und bekommt kein -s."]]},

{ id:"present", title:"Simple present: don't statt „nicht“, always vor dem Verb", blurb:"„Ich esse kein Fleisch“ ist I don't eat meat, nicht I eat not meat. Und always steht vor dem Verb.", deck:"Sich vorstellen", body:`
<p>Die Grundordnung kennst du aus dem Deutschen: <b>Subjekt + Verb + Objekt</b> (<i>I drink coffee</i>). Das Subjekt vergisst du ohnehin nie, denn auch im Deutschen muss es stehen. Drei andere Punkte verraten dich aber sofort.</p>
<h3>1. Das Verb bleibt (fast) gleich</h3>
<p>Im Deutschen hat jede Person ihre Endung: „ich wohne“, „wir wohnen“, „ihr wohnt“. Im Englischen nicht: <i>I live, we live, they live</i>. Deshalb ist das Pronomen so wichtig: Es allein sagt, wer gemeint ist.</p>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Ich trinke Kaffee}}{{ex:We live in Munich.|/wi ˈlɪv ɪn ˈmjuːnɪk/|Wir wohnen in München}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Sie arbeiten am Wochenende}}
<h3>2. Verneinung mit don't, nie „nicht“ hinter dem Verb</h3>
<p>Im Deutschen steht „nicht“ einfach hinter dem Verb: „Ich wohne nicht hier“. Im Englischen geht das nicht. Vor das Verb kommt das Hilfsverb <b>don't</b> (do not): „Ich esse kein Fleisch“ ist <i>I don't eat meat</i>, nicht <i>I eat not meat</i>.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Ich esse kein Fleisch}}{{ex:We don't live here.|/wi ˈdoʊnt ˈlɪv ˈhɪr/|Wir wohnen nicht hier}}
<p>Bei <i>he</i>, <i>she</i> und <i>it</i> ändert sich das Verb (<i>she works</i>, <i>he doesn't</i>); das kommt zwei Lektionen später. Bei <i>I, you, we, they</i> bleibt es immer gleich.</p>
<h3>3. always, usually, never: direkt vor dem Verb</h3>
<p>Im Deutschen steht das Häufigkeitswort hinter dem Verb: „Ich trinke immer Tee“. Im Englischen steht es <b>direkt vor</b> dem Vollverb: <i>I always drink tea</i>, nicht <i>I drink always tea</i>. Und nach einer Zeitangabe am Satzanfang bleibt die Reihenfolge Subjekt + Verb: <i>On weekends, I work</i>, nie <i>On weekends work I</i>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Normalerweise stehe ich um sieben auf}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Abends trinke ich nie Kaffee}}
<h3>Vorschau: Das Adjektiv steht vor dem Nomen</h3>
<p>Wie im Deutschen: „ein großes Haus“ ist <i>a big house</i>, nur ohne Endung. Mehr dazu später.</p>
{{ex:I have a big house.|/aɪ ˈhæv ə ˈbɪg ˈhaʊs/|Ich habe ein großes Haus}}
<div class="tip">Typische Fehler: <b>I eat not meat.</b> ✗ → <b>I don't eat meat.</b> ✓ · <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓ · <b>On weekends work I.</b> ✗ → <b>On weekends, I work.</b> ✓</div>`,
check:[["Wie sagt man „Ich arbeite in einer Bank“?",["Work in a bank.","Am work in a bank.","I work in a bank.","I working in a bank."],2,"Subjekt + Verb, ohne \"am\": \"I work\"."],["I ___ eat meat. („Ich esse kein Fleisch“)",["not","am not","no","don't"],3,"Bei einem Vollverb verneinst du mit dem Hilfsverb \"don't\"."],["Wo steht \"always\"?",["I always drink tea.","Always drink tea.","I drink always tea.","I drink tea the always."],0,"Häufigkeitswörter stehen direkt vor dem Verb, anders als im Deutschen."]],
practice:[
["mc","Wie sagt man „Ich lerne Englisch“?","I study English.","Study English.","I am study English.","I studying English.","Subjekt + Grundform: \"I study\", ohne \"am\"."],
["mc","Wie sagt man „Ich esse kein Fleisch“?","I don't eat meat.","I no eat meat.","I'm not eat meat.","I eat not meat.","Die Verneinung braucht \"don't\" vor dem Verb; \"I eat not meat\" ist die deutsche Wortstellung."],
["mc","Wie sagt man „Wir wohnen in Bogotá“?","We live in Bogotá.","Live in Bogotá.","We are live in Bogotá.","We living in Bogotá.","Subjekt + Grundform: \"We live\", ohne \"are\"."],
["mc","Wie sagt man „Normalerweise stehe ich um sieben auf“?","I usually get up at seven.","Usually I get up seven.","I get up usually at seven.","I am usually get up at seven.","\"Usually\" steht direkt vor dem Verb."],
["mc","Welcher Satz passt zu „Ich trinke immer Tee“?","I always drink tea.","I drink always tea.","Always drink tea.","I am always drink tea.","\"Always\" steht vor dem Verb, nicht dahinter wie „immer“."],
["or","Ich arbeite am Wochenende","I work on weekends","works","Mit \"I\" bekommt das Verb kein -s; das -s gibt es nur in der dritten Person."],
["or","Wir essen kein Fleisch","We don't eat meat","doesn't","Mit \"we\" heißt das Hilfsverb \"don't\"; \"doesn't\" gibt es nur in der dritten Person."],
["or","Abends trinke ich nie Kaffee","I never drink coffee at night","always","\"Never\" steht direkt vor dem Verb."],
["fi","I __ like fish.","Ich mag keinen Fisch","don't|do not","not|am not|no","Die Verneinung braucht das Hilfsverb \"don't\"."],
["fi","I __ English every day.","Ich lerne jeden Tag Englisch","study","am study|studying|studies","Mit \"I\" steht das Verb in der Grundform."],
["fi","We usually __ at home.","Normalerweise essen wir zu Hause","eat","eating|are eat|eats","Nach \"usually\" kommt das Verb in der Grundform."],
["ty","Ich trinke Tee","I drink tea","drink · tea – mit dem Pronomen","am","Subjekt + Grundform: \"I drink tea\", ohne \"am\"."],
["ty","Ich esse kein Fleisch","I don't eat meat","don't · eat · meat – Verneinung mit Hilfsverb","no","Die Verneinung braucht das Hilfsverb \"don't\", nicht „nicht“ hinter dem Verb."],
["ty","Wir wohnen nicht hier","We don't live here","we · don't · live – mit Hilfsverb","no","Zum Verneinen steht das Hilfsverb \"don't\" vor dem Verb."]]},

{ id:"questions", title:"Fragen: do und die Wortstellung", blurb:"„Sprichst du Englisch?“ ist nicht Speak you English? Im Englischen rücken nur Hilfsverben nach vorn; sonst brauchst du do.", deck:"Das Nötigste 2", body:`
<p>Im Deutschen stellst du für eine Frage einfach das Verb nach vorn: „<b>Sprichst</b> du Englisch?“, „Wo <b>wohnst</b> du?“. Im Englischen dürfen das <b>nur Hilfsverben</b> (<i>be</i>, <i>can</i>, <i>will</i>…). Alle anderen Verben brauchen <b>do</b>. <i>Speak you English?</i> ist genau der deutsche Fehler.</p>
<h3>Mit be: umstellen wie im Deutschen</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Alles in Ordnung?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Ist das deine Tasche?}}
<h3>Mit allen anderen Verben: Do an den Anfang</h3>
<p>Setz <b>Do</b> vor das Subjekt. Das Vollverb bleibt hinten und in der Grundform.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Magst du Kaffee?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Sprichst du Englisch?}}
<p>Kurzantworten wiederholen das Hilfsverb: <i>Yes, I do.</i> / <i>No, I don't.</i> (nicht <i>Yes, I like</i>).</p>
<h3>Fragewort + do + Subjekt + Verb</h3>
<p>Vorsicht bei den Fragewörtern, sie sind falsche Freunde: <b>wo = where</b>, <b>wer = who</b>, <b>wie = how</b>, <b>was = what</b>. Und auch nach dem Fragewort kommt <i>do</i>: „Wo wohnst du?“ ist <i>Where do you live?</i>, nicht <i>Where live you?</i>.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Wo wohnst du?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Was machst du beruflich?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Wo ist die Toilette?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Wie viel kostet das?}}
<h3>Verneinung: don't und nur eine Verneinung</h3>
<p>Auch beim Verneinen brauchst du <i>don't</i>: „Ich verstehe nicht“ ist <i>I don't understand</i>, nicht <i>I understand not</i>. „Ich weiß nichts“ ist <i>I don't know anything</i>.</p>
{{ex:I don't understand.|/aɪ ˈdoʊnt ˌʌndərˈstænd/|Ich verstehe das nicht}}{{ex:I don't know anything.|/aɪ ˈdoʊnt ˈnoʊ ˈeniθɪŋ/|Ich weiß nichts}}
<div class="tip">Typische Fehler: <b>Speak you English?</b> ✗ → <b>Do you speak English?</b> ✓ · <b>Where live you?</b> ✗ → <b>Where do you live?</b> ✓ · <b>Who do you live?</b> (für „Wo“) ✗ → <b>Where do you live?</b> ✓</div>`,
check:[["Wie sagt man „Magst du Kaffee?“?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"\"Like\" ist ein Vollverb: Die Frage beginnt mit dem Hilfsverb \"Do\"."],["Wie sagt man „Wo wohnst du?“?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Fragewort + \"do\" + Subjekt + Verb."],["Do you speak English? Welche Antwort ist richtig?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Fragt man mit \"do\", antwortest du mit \"do\"."]],
practice:[
["mc","Wie sagt man „Sprichst du Englisch?“?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Ein Vollverb wie \"speak\" rückt nicht nach vorn: Die Frage braucht \"Do\"."],
["mc","Wie sagt man „Wo wohnst du?“?","Where do you live?","Where you live?","Where are you live?","Where live you?","Fragewort + Hilfsverb \"do\" + Subjekt + Verb."],
["mc","Wie sagt man „Wie viel kostet das?“?","How much is this?","How much this is?","How much does this?","What much is this?","Nach dem Preis fragst du mit \"How much is…?\"."],
["mc","Do you like tea? Welche Antwort ist richtig?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Fragt man mit \"do\", antwortest du mit \"do\": \"Yes, I do\"."],
["mc","Wie sagt man „Was machst du beruflich?“?","What do you do?","What are you do?","What you do?","What do you?","Man sagt \"What do you do?\": Das erste \"do\" ist das Hilfsverb, das zweite das Verb „machen“."],
["or","Magst du Kaffee?","Do you like coffee","Are the","\"Like\" ist nicht \"be\": Die Frage beginnt mit dem Hilfsverb \"Do\"; Kaffee allgemein steht ohne \"the\"."],
["or","Wo ist die Toilette?","Where is the bathroom","a do","Mit \"be\" wird umgestellt: \"Where is\" + Subjekt, ohne das Hilfsverb \"do\"."],
["or","Wo wohnst du?","Where do you live","are","\"Live\" braucht das Hilfsverb \"do\": \"Where do you live\"."],
["fi","__ you like music?","Magst du Musik?","Do","Are|Is|Does","\"Like\" ist nicht \"be\", also heißt das Hilfsverb \"Do\"."],
["fi","__ do you live?","Wo wohnst du?","Where","What|Who|When","„Wo“ ist \"where\"; \"who\" heißt „wer“."],
["fi","What time __ it?","Wie spät ist es?","is","do|does|are","Nach der Uhrzeit fragst du mit \"be\": \"What time is it?\"."],
["ty","Sprichst du Englisch?","Do you speak English|Can you speak English","do · speak · English – Frage mit Hilfsverb","Are","Die Frage braucht das Hilfsverb \"Do\" vor \"you\"; \"speak\" bleibt hinten."],
["ty","Wo ist die Toilette? (US-Englisch)","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom – mit dem Verb be","a","Mit \"be\" steht \"is\" vor dem Subjekt: \"Where is the bathroom?\"."],
["ty","Magst du Hunde?","Do you like dogs","do · like · dog – im Plural","dog","\"Like\" braucht das Hilfsverb \"Do\"; Hunde allgemein stehen im Plural und ohne \"the\"."]]},

{ id:"third-s", title:"he, she, it: das -s und does / doesn't", blurb:"He, she, it – das s muss mit. In Fragen und Verneinungen wandert es zu does.", deck:"Sich vorstellen", body:`
<p>Im Deutschen hat jede Person eine eigene Endung (ich arbeite, du arbeitest, er arbeitet…). Das Englische hat davon nur eine übrig behalten: <b>die 3. Person Singular</b> (<i>he, she, it</i> oder eine Person bzw. Sache) bekommt ein <b>-s</b>. Merksatz aus der Schule: „He, she, it – das s muss mit.“</p>
<div class="tbl"><table><tr><th>Subjekt</th><th>Verb</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Sie arbeitet bei einer Bank}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Er mag Fußball}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Meine Mutter kocht gut}}
<h3>Verben, die sich etwas ändern</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Sie hat ein Auto (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Er fängt um acht an zu arbeiten (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Sie lernt Englisch (study → studies)}}
<h3>Verneinung und Frage: does</h3>
<p>Mit <b>doesn't</b> oder <b>Does</b> wandert das -s zum Hilfsverb, und das Vollverb steht wieder in der Grundform.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Er trinkt keinen Kaffee}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Wohnt sie hier?}}
<div class="tip">Typische Fehler: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ · <b>My brother don't like it.</b> ✗ → <b>My brother doesn't like it.</b> ✓ · <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Lima. Was gehört in die Lücke?",["live","lives","living","is live"],1,"Mit \"she\" bekommt das Verb ein -s: 3. Person Singular."],["He ___ like coffee. Was gehört in die Lücke?",["don't","isn't","doesn't","not"],2,"Mit \"he\" heißt die Verneinung \"doesn't\"."],["Wie sagt man „Sie hat ein Auto“?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Mit \"she\" wird \"have\" zu \"has\"."]],
practice:[
["mc","My brother ___ in Bogotá. Was gehört in die Lücke?","works","work","working","is work","\"My brother\" ist eine Person: \"works\" (dritte Person)."],
["mc","Wie sagt man „Er trinkt keinen Kaffee“?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Mit \"he\": \"doesn't\" + Grundform."],
["mc","Wie sagt man „Wohnt sie hier?“?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Nach \"Does\" steht das Verb ohne -s."],
["mc","\"have\" mit \"she\": Welche Form ist richtig?","has","haves","have","is have","Mit \"she\" wird \"have\" zu \"has\"."],
["mc","\"study\" mit \"he\": Welche Form ist richtig?","studies","studys","study","studyes","Konsonant + y → -ies: \"studies\"."],
["or","Sie arbeitet bei einer Bank","She works at a bank","work the","Mit \"she\" bekommt das Verb ein -s: dritte Person Singular."],
["or","Er hat zwei Hunde","He has two dogs","have dog","Mit \"he\" wird \"have\" zu \"has\": dritte Person."],
["or","Sie isst kein Fleisch","She doesn't eat meat","eats","Nach dem Hilfsverb \"doesn't\" steht das Verb ohne -s."],
["fi","He __ soccer.","Er mag Fußball","likes","like|liking|is like","Mit \"he\": \"likes\" (dritte Person)."],
["fi","__ she speak English?","Spricht sie Englisch?","Does","Do|Is|Are","Mit \"she\" braucht die Frage das Hilfsverb \"Does\"."],
["fi","She __ to work at eight.","Sie fängt um acht an zu arbeiten","goes","go|going|gos","\"Go\" wird zu \"goes\"."],
["ty","Er hat ein Auto","He has a car","has · car – mit he","have","Mit \"he\" wird \"have\" zu \"has\": dritte Person."],
["ty","Sie mag Katzen","She likes cats","likes · cat – mit she, im Plural","cat","Mit \"she\" bekommt \"likes\" ein -s (dritte Person); Katzen allgemein im Plural."],
["ty","Er wohnt nicht hier","He doesn't live here","doesn't · live · here – Verb in der Grundform","lives","Nach dem Hilfsverb \"doesn't\" steht das Verb in der Grundform."]]},

{ id:"countable", title:"Zählbar und nicht zählbar: advice, information, some, much", blurb:"„Informationen“ und „Ratschläge“ sind im Deutschen Plural. Im Englischen haben information und advice kein -s.", deck:"Im Restaurant", body:`
<p>Englische Nomen sind entweder <b>zählbar</b> oder <b>nicht zählbar</b>. Die Idee kennst du („viel Wasser“, „wenig Geld“). Die Falle: Viele Wörter, die im Deutschen einen Plural haben, sind im Englischen nicht zählbar.</p>
<div class="tbl"><table><tr><th>Zählbar</th><th>Nicht zählbar</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, Zahlen, -s</td><td>kein a / an, keine Zahlen, kein -s</td></tr></table></div>
<h3>Achtung: Im Deutschen ist das Plural</h3>
<p><i>information</i> (Informationen), <i>advice</i> (Ratschläge, Tipps), <i>news</i> (Nachrichten), <i>furniture</i> (Möbel), <i>homework</i> (Hausaufgaben), <i>hair</i> (Haare), <i>progress</i> (Fortschritte), <i>luggage</i> (Gepäck). Sie bekommen nie -s oder <i>a</i>, und das Verb steht im Singular: „Die Nachrichten sind gut“ ist <i>The news is good</i>.</p>
{{ex:Can I give you some advice?|/kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/|Darf ich dir einen Rat geben?}}{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|Die Nachrichten sind gut}}{{ex:a piece of furniture|/ə ˈpiːs əv ˈfɜːrnɪtʃər/|ein Möbelstück}}
<h3>some und any</h3>
<p><b>some</b> in bejahten Sätzen; <b>any</b> in Verneinungen und Fragen (aber wenn du etwas anbietest oder um etwas bittest, nimmst du <b>some</b>: <i>Can I have some water?</i>). Und nur eine Verneinung: „Ich habe kein Geld“ ist <i>I don't have any money</i>.</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Ich habe etwas Geld}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Ich habe kein Geld}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Hast du Fragen?}}
<h3>many und much</h3>
<p>Zählbar: <b>many</b> + Plural. Nicht zählbar: <b>much</b>. <b>a lot of</b> passt für beide.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Wie viele Leute?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Ich habe nicht viel Zeit}}
<h3>Nicht Zählbares zählen</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|ein Glas Wasser}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|eine Tasse Kaffee}}
<div class="tip">Typische Fehler: <b>some informations</b> ✗ → <b>some information</b> ✓ · <b>an advice</b> ✗ → <b>some advice</b> / <b>a piece of advice</b> ✓ · <b>The news are good.</b> ✗ → <b>The news is good.</b> ✓ · <b>my hairs</b> ✗ → <b>my hair</b> ✓</div>`,
check:[["How ___ people are there? Was gehört in die Lücke?",["much","many","any","a"],1,"\"People\" kann man zählen: \"many\"."],["Welches Nomen ist im Englischen nicht zählbar?",["apple","chair","advice","friend"],2,"\"Advice\" hat kein a und kein -s, auch wenn du auf Deutsch „Ratschläge“ sagst."],["I don't have ___ money. Was gehört in die Lücke?",["some","a","many","any"],3,"In Verneinungen steht \"any\"."]],
practice:[
["mc","Can I have ___ water? Was gehört in die Lücke?","some","a","many","an","\"Water\" ist nicht zählbar: kein a, kein many. Bei einer Bitte steht \"some\"."],
["mc","Wie sagt man „Ich brauche Ratschläge“?","I need some advice.","I need some advices.","I need an advice.","I need many advices.","„Ratschläge“ ist Plural, aber \"advice\" ist nicht zählbar: \"some advice\"."],
["mc","Wie sagt man „Hast du Fragen?“?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Nach \"any\" steht ein zählbares Nomen im Plural."],
["mc","Welcher Satz ist richtig?","I need some information.","I need some informations.","I need an information.","I need many informations.","\"Information\" ist nicht zählbar: nie mit -s oder an, auch wenn es auf Deutsch „Informationen“ heißt."],
["mc","How ___ time do we have? Was gehört in die Lücke?","much","many","any","a","\"Time\" ist nicht zählbar: \"much\"."],
["or","Dieser Rat ist sehr nützlich","This advice is very useful","are","\"Advice\" ist nicht zählbar: Singular, also \"is\" (Übereinstimmung)."],
["or","Die Nachrichten sind gut","The news is good","are","\"News\" ist nicht zählbar: Das Verb steht im Singular, \"is\" (Übereinstimmung)."],
["or","Ich habe nicht viel Zeit","I don't have much time","many","\"Time\" ist nicht zählbar: \"much\", nicht \"many\"."],
["fi","How __ is this?","Wie viel kostet das?","much","many|any|some","Nach dem Preis fragst du mit \"how much\"."],
["fi","I don't have __ questions.","Ich habe keine Fragen","any","some|much|a","In Verneinungen steht \"any\"."],
["fi","The furniture __ new.","Die Möbel sind neu","is","are|have|has","\"Furniture\" ist nicht zählbar: Singular, also \"is\" (Übereinstimmung)."],
["ty","Kann ich etwas Wasser haben?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|Can you give me some water|Could you give me some water","can I have · water – mit some","a","In der Frage steht das Hilfsverb \"can\" vor \"I\"; \"water\" ist nicht zählbar: \"some\"."],
["ty","Hast du irgendwelche Fragen?","Do you have any questions","do · have · any · question – im Plural","much","\"Have\" braucht in der Frage das Hilfsverb \"Do\"; \"questions\" steht im Plural."],
["ty","Diese Informationen sind nützlich","This information is useful","this · information · useful – nicht zählbar","are","\"Information\" ist nicht zählbar: Singular, also \"is\" (Übereinstimmung)."]]},

{ id:"object-have", title:"me, him, her, der s-Genitiv und wann „haben“ be ist", blurb:"Das Objektpronomen steht hinter dem Verb, Peters Auto heißt Peter's car, und „Ich habe Hunger“ sagt man mit be.", deck:"Sich vorstellen", body:`
<p>Objektpronomen kennst du aus dem Deutschen („mich, ihn, sie“). Im Hauptsatz stehen sie auch dort hinter dem Verb: „Ich liebe sie“ ist <i>I love her</i>. Aber im Nebensatz rutscht das Pronomen im Deutschen nach vorn („weil ich sie liebe“). Im Englischen nie: <i>because I love her</i>, nicht <i>because I her love</i>.</p>
<div class="tbl"><table><tr><th>Subjekt</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Objekt</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Sie kennt mich}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Ich mag ihn}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Kannst du uns helfen?}}{{ex:I love her.|/aɪ ˈlʌv hər/|Ich liebe sie}}
<h3>his, her, their: wie „sein“ und „ihr“</h3>
<p>Hier funktioniert das Englische wie das Deutsche: Du wählst nach dem <b>Besitzer</b>. <i>his</i> = sein, <i>her</i> = ihr (von ihr), <i>their</i> = ihr (von ihnen).</p>
{{ex:Ana loves her brother.|/ˈænə ˈlʌvz hər ˈbrʌðər/|Ana liebt ihren Bruder}}{{ex:Lukas and his sister|/ˈluːkəs ənd hɪz ˈsɪstər/|Lukas und seine Schwester}}
<h3>Der s-Genitiv: mit Apostroph</h3>
<p>„Das Auto meines Bruders“ heißt meistens <i>my brother's car</i>, nicht <i>the car of my brother</i>. Und anders als bei „Peters Auto“ steht im Englischen <b>immer ein Apostroph</b>: <i>Peter's car</i>.</p>
{{ex:my brother's car|/maɪ ˈbrʌðərz ˈkɑːr/|das Auto meines Bruders}}
<h3>have = haben (Dinge, Familie, Zeit)</h3>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Ich habe zwei Brüder}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Hast du einen Stift?}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Lass uns zu Mittag essen}}
<h3>Aber nicht jedes „haben“ ist have</h3>
<p>Das Alter sagst du wie im Deutschen mit <i>be</i> („Ich bin 20“). Neu ist: Auch Hunger, Durst, Angst und Recht haben gehen mit <b>be</b>. Und „Mir ist kalt“ heißt <i>I'm cold</i>, nie <i>Me is cold</i>.</p>
{{ex:I'm 20 years old.|/aɪm ˈtwenti ˈjɪrz ˈoʊld/|Ich bin 20 Jahre alt}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Ich habe Hunger}}{{ex:Are you cold?|/ər ju ˈkoʊld/|Ist dir kalt?}}{{ex:You're right.|/jʊr ˈraɪt/|Du hast recht}}
<div class="tip">Typische Fehler: <b>I have hunger.</b> ✗ → <b>I'm hungry.</b> ✓ · <b>You have right.</b> ✗ → <b>You're right.</b> ✓ · <b>Peters car</b> ✗ → <b>Peter's car</b> ✓ · <b>because I her love</b> ✗ → <b>because I love her</b> ✓</div>`,
check:[["I like ___. („ihn“)",["he","his","him","he's"],2,"Hinter dem Verb steht das Objektpronomen \"him\"."],["Wie sagt man „Ich habe Hunger“?",["I'm hungry.","I have hungry.","I have hunger.","I'm hunger."],0,"„Hunger haben“ sagt man mit \"be\": \"I'm hungry\"."],["Wie sagt man „Hast du einen Stift?“?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" ist hier ein Vollverb: Die Frage braucht \"Do\"."]],
practice:[
["mc","She knows ___. („mich“) Was gehört in die Lücke?","me","I","my","mine","Hinter dem Verb steht das Objektpronomen \"me\"."],
["mc","Wie sagt man „Ich bin 25“?","I'm 25.","I have 25 years.","I have 25.","I'm 25 years.","Das Alter sagst du wie im Deutschen mit \"be\"; nur \"years\" allein geht nicht, dann schon \"years old\"."],
["mc","Wie sagt man „Ana liebt ihren Bruder“?","Ana loves her brother.","Ana loves his brother.","Ana loves their brother.","Ana her brother loves.","Wie im Deutschen nach dem Besitzer: Ana → „ihr“ → \"her\"."],
["mc","Wie sagt man „Du hast recht“?","You're right.","You have reason.","You have right.","You're reason.","„Recht haben“ ist \"be right\"."],
["mc","Wie sagt man „Ich liebe sie“?","I love her.","I her love.","I love she.","Her I love.","Das Objektpronomen steht hinter dem Verb und heißt \"her\"."],
["or","Hast du einen Stift?","Do you have a pen","Are","\"Have\" braucht das Hilfsverb \"Do\"; \"Are you have\" gibt es nicht."],
["or","Ist dir kalt?","Are you cold","have","„Mir ist kalt“ ist \"I'm cold\": In der Frage steht \"are\" vor dem Subjekt \"you\"."],
["or","Carlos liebt seine Schwester","Carlos loves his sister","her","Wie im Deutschen nach dem Besitzer: Carlos → „sein“ → \"his\"."],
["fi","Call __ tonight.","Ruf mich heute Abend an","me","I|my|mine","Hinter dem Verb steht \"me\"."],
["fi","I __ hungry.","Ich habe Hunger","am","have|has|is","„Hunger haben“ sagt man mit \"be\": \"I am hungry\"."],
["fi","Sofía and __ husband live in Madrid.","Sofía und ihr Mann wohnen in Madrid","her","his|their|she","Sofía → „ihr“ → \"her\"."],
["ty","Kannst du mir helfen?","Can you help me|Could you help me","can you · help · me – mit Hilfsverb","I","In der Frage steht das Hilfsverb \"can\" vor \"you\"; hinter dem Verb \"me\"."],
["ty","Hast du Hunger?","Are you hungry","are · hungry – mit be, nicht have","have","„Hunger haben“ ist \"be hungry\": In der Frage steht \"are\" vor dem Subjekt \"you\"."],
["ty","Er ist 30","He is 30|He is 30 years old|He is thirty|He is thirty years old","he · 30 – mit be, nicht have","has","Das Alter steht mit \"be\": mit \"he\" also \"is\" (dritte Person)."]]},

{ id:"can-like", title:"can, like + -ing, I'd like: was du kannst und was du möchtest", blurb:"„Ich kann Englisch“ ist I can speak English, und „Ich möchte“ ist I'd like.", deck:"Smalltalk", body:`
<p>Drei Strukturen, die du brauchst, wenn du dich vorstellst oder etwas bestellst.</p>
<h3>can: können</h3>
<p><b>can + Grundform</b>. Es bekommt nie ein -s, auch nicht bei <i>he</i> oder <i>she</i>, und braucht kein <i>do</i>: Die Frage ist <i>Can you…?</i>. Achtung: Im Deutschen reicht „Ich kann Englisch“. Im Englischen braucht <i>can</i> immer ein Verb: <i>I can speak English</i>, nie <i>I can English</i>.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Ich kann schwimmen}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Ich kann nicht Auto fahren}}{{ex:Can you speak English?|/kən ju ˈspiːk ˈɪŋglɪʃ/|Kannst du Englisch?}}
<h3>like = mögen</h3>
<p>Hier ist es leicht: „Ich mag Pizza“ ist <i>I like pizza</i>, „Sie mag Hunde“ ist <i>She likes dogs</i>. Nur „gefallen“ ist umgedreht („Das gefällt mir“): Auf Englisch steht trotzdem die Person vorn, <i>I like it</i>.</p>
{{ex:I like pizza.|/aɪ ˈlaɪk ˈpiːtsə/|Ich mag Pizza}}{{ex:She likes dogs.|/ʃi ˈlaɪks ˈdɔːgz/|Sie mag Hunde}}
<h3>like + -ing: was du gern machst</h3>
<p>Für „gern“ gibt es kein eigenes Wort. Du sagst <i>like</i> oder <i>love</i> + <i>-ing</i>-Form: „Ich koche gern“ ist <i>I like cooking</i>. Auch <i>like</i> + <i>to</i> ist möglich: <i>I like to cook</i>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Ich koche gern}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Ich schaue sehr gern Filme}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Ich laufe nicht gern}}
<h3>I'd like: ich möchte</h3>
<p><i>I like</i> ist ein allgemeiner Geschmack; <i>I'd like</i> ist das höfliche „Ich möchte“ für jetzt. Zum Bestellen nimmst du <i>I'd like</i>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Ich hätte gern einen Kaffee}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Möchtest du einen Tee?}}
<div class="tip">Typische Fehler: <b>I can English.</b> ✗ → <b>I can speak English.</b> ✓ · <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ · im Café <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Was gehört in die Lücke?",["sings","sing","singing","to sing"],1,"Nach \"can\" steht die Grundform."],["Wie sagt man „Ich koche gern“?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Nach \"like\" steht die -ing-Form."],["Was sagst du im Café am natürlichsten, wenn du bestellst?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Was du jetzt möchtest, bestellst du mit \"I'd like\"."]],
practice:[
["mc","He can ___ English. Was gehört in die Lücke?","speak","speaks","speaking","to speak","Nach \"can\" steht die Grundform, ohne -s."],
["mc","Wie sagt man „Ich mag Pizza“?","I like pizza.","Pizza likes me.","Me like pizza.","I'm like pizza.","Wie bei „mögen“: Die Person ist das Subjekt, \"I like\"."],
["mc","Wie sagt man „Ich mag Hunde“?","I like dogs.","I likes dogs.","Like me dogs.","Me like dogs.","Mit \"I\" bekommt \"like\" kein -s: \"I like dogs\"."],
["mc","Zum Bestellen im Café heißt „Einen Kaffee, bitte“:","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Was du jetzt möchtest, bestellst du mit \"I'd like\"."],
["mc","Wie sagt man „Ich kann nicht Auto fahren“?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can\" braucht kein \"do\": Die Verneinung ist \"can't\"."],
["or","Kannst du schwimmen?","Can you swim","swimming","In der Frage steht das Hilfsverb \"can\" vor dem Subjekt."],
["or","Sie tanzt gern","She likes dancing","like","Mit \"she\" bekommt \"likes\" ein -s (dritte Person), danach die -ing-Form."],
["or","Ich lese gern Bücher","I like reading books","read","Nach \"like\" steht die -ing-Form: \"reading\"."],
["fi","I can't __.","Ich kann nicht schwimmen","swim","swimming|swims|to swim","Nach \"can't\" steht die Grundform."],
["fi","I like __ music.","Ich höre gern Musik","listening to","listen to|listen|to listening","Nach \"like\" steht die -ing-Form."],
["fi","__ like a sandwich, please.","Ich hätte gern ein Sandwich","I'd|I would","I|I'm|I can","Zum Bestellen sagt man \"I'd like\"."],
["ty","Ich koche gern","I like cooking|I love cooking|I like to cook","like · cook – mit -ing-Form","cook","Für „gern“ steht \"like\" + -ing-Form (oder \"to\" + Verb)."],
["ty","Kannst du morgen kommen?","Can you come tomorrow","can · come · tomorrow – Frage mit can","coming","In der Frage steht das Hilfsverb \"can\" vor \"you\"."],
["ty","Mag er Katzen?","Does he like cats","does · like · cat – im Plural","likes","Die Frage braucht das Hilfsverb \"Does\", und \"like\" bleibt in der Grundform."]]},

{ id:"continuous", title:"Was gerade passiert: be + -ing", blurb:"„Was machst du?“ passt im Deutschen immer. Im Englischen heißt das, was gerade passiert, be + -ing.", deck:"Smalltalk", body:`
<p>Im Deutschen gibt es keine eigene Verlaufsform: „Ich esse“ heißt „ich esse (gerade)“ und „ich esse (normalerweise)“. Im Englischen musst du dich entscheiden. Was <b>gerade jetzt</b> passiert, steht im <i>present progressive</i>: <b>be + Verb mit -ing</b>. Eine gute Brücke ist das Wort „gerade“: „Ich esse gerade“ ist <i>I'm eating</i>.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Ich arbeite gerade}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Sie kocht gerade das Abendessen}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Es regnet (gerade)}}
<h3>Fragen und Verneinung</h3>
<p>Wie immer bei <i>be</i>: In der Frage steht <i>am / is / are</i> vor dem Subjekt, beim Verneinen kommt <i>not</i> dahinter.</p>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Was machst du gerade?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Hörst du mir zu?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Ich schlafe nicht}}
<h3>Im Vergleich zum simple present</h3>
<div class="tbl"><table><tr><th>Immer (simple present)</th><th>Gerade (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Achtung: <i>What do you do?</i> fragt nach deinem Beruf; <i>What are you doing?</i> danach, was du gerade machst.</p>
<h3>Verben ohne -ing</h3>
<p><i>like, know, want, need, have</i> (besitzen) beschreiben einen <b>Zustand</b>: Sie stehen im simple present, auch wenn es um jetzt geht. Wer die Verlaufsform gerade gelernt hat, übertreibt gern: <i>I'm knowing</i> gibt es nicht.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Ich kenne ihn}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Ich möchte Wasser}}
<div class="tip">Typische Fehler: <b>What do you do now?</b> ✗ → <b>What are you doing?</b> ✓ · <b>I drink coffee.</b> (gerade jetzt) ✗ → <b>I'm drinking coffee.</b> ✓ · <b>I'm knowing him.</b> ✗ → <b>I know him.</b> ✓</div>`,
check:[["Wie sagt man „Was machst du gerade?“?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Was gerade passiert, fragst du mit \"be\" + -ing."],["I ___ coffee every morning. Was gehört in die Lücke?",["am drinking","drinking","drink","am drink"],2,"Eine tägliche Gewohnheit steht im simple present."],["Welcher Satz ist richtig?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" und \"have\" (besitzen) stehen nicht mit -ing."]],
practice:[
["mc","Wie sagt man „Ich arbeite gerade“?","I'm working now.","I work now am.","I'm work now.","I working now.","Was gerade passiert: \"be\" + -ing-Form; vergiss \"am\" nicht."],
["mc","Wie sagt man „Sie kocht gerade das Abendessen“?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","\"Be\" + -ing, und Mahlzeiten stehen ohne Artikel."],
["mc","Welcher Satz beschreibt etwas, das du jeden Tag machst?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Gewohnheiten stehen im simple present."],
["mc","Dein Freund ruft an und du fragst „Was machst du gerade?“. Was sagst du?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Was gerade passiert: Fragewort + \"are\" + \"you\" + -ing."],
["mc","Wie sagt man „Ich kenne ihn“?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" beschreibt einen Zustand: kein -ing."],
["or","Was machst du gerade?","What are you doing","do","Was gerade passiert: Fragewort + Hilfsverb \"are\" + Subjekt + -ing."],
["or","Die Kinder spielen gerade","The kids are playing","is","\"Kids\" ist Plural: \"are\" (Übereinstimmung)."],
["or","Ich lese gerade ein Buch","I'm reading a book","read","Was gerade passiert: \"be\" + -ing-Form."],
["fi","I'm __ TV.","Ich sehe gerade fern","watching","watch|watches|to watch","Nach \"be\" steht die -ing-Form."],
["fi","What __ you doing?","Was machst du gerade?","are","do|is|does","Mit \"you\" heißt das Hilfsverb \"are\"."],
["fi","She __ working today.","Heute arbeitet sie nicht","isn't|is not","doesn't|don't|not","Die Verneinung von \"be\" + -ing ist \"isn't\"."],
["ty","Ich koche gerade","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now – mit -ing-Form","cook","Was gerade passiert: \"be\" + -ing-Form."],
["ty","Regnet es gerade?","Is it raining","is · it · rain – mit -ing-Form","rains","In der Frage steht das Hilfsverb \"is\" vor \"it\"."],
["ty","Sie arbeitet heute (ausnahmsweise)","She is working today","she · work · today – Verlaufsform mit -ing","works","Mit \"she\" heißt das Hilfsverb \"is\" (Übereinstimmung), dazu die -ing-Form."]]},

{ id:"past", title:"Simple past: was / were, -ed und did", blurb:"Im Englischen ist das simple past die normale Vergangenheit. Schwierig sind nur der Klang von -ed und das Hilfsverb did.", deck:"Smalltalk", body:`
<p>Im gesprochenen Deutsch erzählst du fast alles im Perfekt („Ich habe gearbeitet“). Im Englischen ist das <b>simple past</b> (<i>I worked</i>) die ganz normale Vergangenheit, im Gespräch wie im Text. Es ist also nicht so „schriftlich“ wie das Präteritum. Gute Nachricht: Es <b>ändert sich nicht mit der Person</b> (<i>I worked, she worked, they worked</i>).</p>
<h3>was / were</h3>
<p><b>was</b> mit <i>I, he, she, it</i>; <b>were</b> mit <i>you, we, they</i>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Ich war müde}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Es hat Spaß gemacht}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Wir waren zu Hause}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Warst du beschäftigt?}}
<h3>-ed: drei Aussprachen</h3>
<p>Nach einem stimmlosen Laut klingt -ed wie <b>/t/</b>, nach einem stimmhaften wie <b>/d/</b>; nur nach t oder d kommt eine Silbe dazu: <b>/ɪd/</b>. Wichtig für dich: Das /d/ in <i>played</i> bleibt weich, so wie das d in „Ende“. Wenn du es wie „t“ sprichst, klingt <i>played</i> wie <i>plate</i>.</p>
<div class="tbl"><table><tr><th>klingt /t/</th><th>klingt /d/</th><th>klingt /ɪd/</th></tr><tr><td class="k">worked, watched, helped</td><td class="k">played, called, lived</td><td class="k">wanted, needed</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Ich habe gestern gearbeitet}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Wir haben einen Film geschaut}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Sie hat mich angerufen}}{{ex:I wanted coffee.|/aɪ ˈwɑːntɪd ˈkɔːfi/|Ich wollte Kaffee}}
<h3>Verneinung und Frage: did</h3>
<p>Wie <i>do</i> im Präsens braucht die Vergangenheit das Hilfsverb <b>did</b>, und das Vollverb steht wieder in der Grundform: <i>Did you call?</i>, nie <i>Did you called?</i>. Und nach einer Zeitangabe am Anfang bleibt die Wortstellung: <i>Yesterday I worked</i>, nicht <i>Yesterday worked I</i>.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Gestern habe ich nicht gearbeitet}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Hast du mich angerufen?}}
<div class="tip">Typische Fehler: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ · <b>Yesterday worked I.</b> ✗ → <b>Yesterday I worked.</b> ✓ · <b>worked</b> mit zwei Silben ✗ → <b>worked</b> mit einer Silbe ✓</div>`,
check:[["They ___ at home yesterday. Was gehört in die Lücke?",["was","were","did","are"],1,"Mit \"they\" heißt die Vergangenheit von \"be\" \"were\"."],["Wie sagt man „Gestern habe ich nicht gearbeitet“?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Nach \"didn't\" steht das Verb in der Grundform."],["Did you ___ the movie? Was gehört in die Lücke?",["watch","watched","watching","watches"],0,"Nach \"Did\" steht das Verb in der Grundform."]],
practice:[
["mc","I ___ tired yesterday. Was gehört in die Lücke?","was","were","did","am","Mit \"I\" heißt die Vergangenheit von \"be\" \"was\"."],
["mc","Wie sagt man „Hast du gestern angerufen?“?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Mit \"did\" steht das Verb wieder in der Grundform."],
["mc","Bei welchem Verb ist -ed eine eigene Silbe?","wanted","worked","played","watched","-ed ist nur nach t oder d eine eigene Silbe: \"wanted\"."],
["mc","Wie sagt man „Es hat Spaß gemacht“?","It was fun.","Was fun.","It were fun.","It did fun.","Mit \"it\" heißt die Vergangenheit von \"be\" \"was\", und \"it\" muss stehen."],
["mc","Wie sagt man „Warst du beschäftigt?“?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" ist ein Zustand: Gefragt wird mit \"be\" (were)."],
["or","Hast du mich angerufen?","Did you call me","called","Die Frage in der Vergangenheit braucht das Hilfsverb \"Did\" und die Grundform."],
["or","Wir waren zu Hause","We were at home","was","Mit \"we\" heißt die Vergangenheit von \"be\" \"were\" (Übereinstimmung)."],
["or","Gestern habe ich nicht gearbeitet","I didn't work yesterday","worked","Nach dem Hilfsverb \"didn't\" steht das Verb in der Grundform."],
["fi","We __ at home last night.","Gestern Abend waren wir zu Hause","were","was|did|are","Mit \"we\" heißt die Vergangenheit von \"be\" \"were\"."],
["fi","I __ soccer yesterday.","Gestern habe ich Fußball gespielt","played","play|playing|was play","Regelmäßige Vergangenheit: \"play\" + -ed."],
["fi","__ you work yesterday?","Hast du gestern gearbeitet?","Did","Were|Do|Was","Frage in der Vergangenheit mit einem Vollverb: \"Did\"."],
["ty","Es hat Spaß gemacht","It was fun","it · fun – mit Subjekt","were","Wie im Deutschen braucht der Satz ein Subjekt: \"it was\"."],
["ty","Hast du gestern gearbeitet?","Did you work yesterday","did · work · yesterday – Verb in der Grundform","worked","Die Frage in der Vergangenheit braucht das Hilfsverb \"Did\"; das Verb bleibt in der Grundform."],
["ty","Ich habe einen Film geschaut (US-Englisch)","I watched a movie|I saw a movie","watched · movie – Vergangenheit mit -ed","watch","Regelmäßige Vergangenheit: \"watch\" + -ed, hier klingt -ed wie /t/."]]},

{ id:"irregular-past", title:"Unregelmäßige Vergangenheit: went, ate, saw", blurb:"Die häufigsten Verben haben kein -ed. Lerne zuerst diese zwölf; viele haben deutsche Verwandte.", deck:"Smalltalk", body:`
<p>Wie im Deutschen (ging, aß, sah) sind die häufigsten Verben <b>unregelmäßig</b>. Eine Regel gibt es nicht: Lerne sie als Paare. Oft hilft das Deutsche: <i>sing – sang – sung</i> wie „singen – sang – gesungen“, <i>drink – drank – drunk</i> wie „trinken – trank – getrunken“, <i>come – came</i> wie „kommen – kam“.</p>
<div class="tbl"><table><tr><th>Grundform</th><th>Vergangenheit</th><th>Grundform</th><th>Vergangenheit</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to London.|/aɪ ˈwent tə ˈlʌndən/|Ich bin nach London gefahren}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Wir haben Pizza gegessen}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Ich habe einen Film gesehen}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Ich habe mich mit meinen Freunden getroffen}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Ich habe ein Buch gekauft}}
<h3>In Fragen und Verneinungen: Grundform</h3>
<p>Das Hilfsverb <b>did</b> zeigt schon die Vergangenheit, also steht das Vollverb in der Grundform. Der häufigste Fehler: <i>Did you went?</i>.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Was hast du gemacht?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Wo bist du hingegangen?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Ich bin nicht hingegangen}}
<div class="tip">Typische Fehler: <b>I goed.</b> ✗ → <b>I went.</b> ✓ · <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ · <b>Where went you?</b> ✗ → <b>Where did you go?</b> ✓</div>`,
check:[["Wie lautet die Vergangenheit von \"go\"?",["goed","gone","went","going"],2,"Die Vergangenheit von \"go\" ist \"went\"."],["Wie sagt man „Was hast du gemacht?“?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Nach \"did\" steht die Grundform \"do\"."],["I didn't ___ breakfast. Was gehört in die Lücke?",["ate","eaten","eats","eat"],3,"Nach \"didn't\" steht das Verb in der Grundform."]],
practice:[
["mc","Wie lautet die Vergangenheit von \"eat\"?","ate","eated","eat","eaten","Die Vergangenheit von \"eat\" ist \"ate\"."],
["mc","Wie sagt man „Wo bist du hingegangen?“?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Nach \"did\" steht das Verb in der Grundform."],
["mc","Wie sagt man „Ich habe ein Buch gekauft“?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Die Vergangenheit von \"buy\" ist \"bought\"."],
["mc","Wie lautet die Vergangenheit von \"see\"?","saw","seed","seen","sawed","Die Vergangenheit von \"see\" ist \"saw\"."],
["mc","Wie sagt man „Ich bin nicht hingegangen“?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Nach \"didn't\" steht das Verb in der Grundform."],
["or","Wo bist du hingegangen?","Where did you go","went","Frage in der Vergangenheit: \"Where\" + Hilfsverb \"did\" + Grundform \"go\"."],
["or","Was hast du gegessen?","What did you eat","ate","Mit dem Hilfsverb \"did\" steht die Grundform: \"eat\", nicht \"ate\"."],
["or","Ich habe einen Film gesehen","I saw a movie","see","Die Vergangenheit von \"see\" ist \"saw\"."],
["fi","I __ to Mexico last year.","Letztes Jahr bin ich nach Mexiko gefahren","went","go|goed|gone","Die Vergangenheit von \"go\" ist \"went\"."],
["fi","What did you __?","Was hast du gegessen?","eat","ate|eaten|eating","Nach \"did\" steht das Verb in der Grundform."],
["fi","She __ a new phone.","Sie hat sich ein neues Handy gekauft","bought","buyed|buy|buys","Die Vergangenheit von \"buy\" ist \"bought\"."],
["ty","Ich bin nach Buenos Aires gefahren","I went to Buenos Aires","went · to · Buenos Aires – das simple past","go","Die Vergangenheit von \"go\" ist \"went\"."],
["ty","Was hast du gemacht?","What did you do","what · did · do – Verb in der Grundform","done","Mit dem Hilfsverb \"did\" steht das Verb wieder in der Grundform: \"do\"."],
["ty","Ich bin nicht gegangen","I didn't go","didn't · go – Verb in der Grundform","went","Nach dem Hilfsverb \"didn't\" steht \"go\", nicht \"went\"."]]},

{ id:"the", title:"the: wo das Deutsche „der, die, das“ sagt und das Englische nicht", blurb:"Das Leben, die Natur, in die Schule gehen: auf Englisch Life, nature und go to school. Dazu eine kurze Wiederholung von a und the.", deck:"Wege und Verkehrsmittel", body:`
<p>Deutsch und Englisch stimmen im Grundsatz überein: beim ersten Mal <i>a</i> (ein), danach <i>the</i> (der, die, das). Das machst du schon richtig. Schwierig wird es dort, wo das Deutsche einen Artikel setzt und das Englische nicht.</p>
<h3>Wiederholung: erst a, dann the</h3>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Ich habe ein Hemd gekauft. Das Hemd ist blau}}{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Kannst du das Fenster aufmachen?}}
<h3>Allgemein: ohne the</h3>
<p>„Das Leben ist schwer“, „Die Natur ist schön“, „Der Kaffee ist hier teuer“: Wenn du <b>allgemein</b> sprichst, steht im Englischen <b>kein Artikel</b>.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|Das Leben ist schwer}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Ich liebe Hunde}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Der Kaffee ist hier teuer}}
<h3>Der Körper: Possessivbegleiter statt the</h3>
<p>Wo das Deutsche „Ich wasche mir <b>die</b> Haare“ sagt, nimmt das Englische den Possessivbegleiter: <i>my hair</i>.</p>
{{ex:I washed my hair.|/aɪ ˈwɑːʃt maɪ ˈher/|Ich habe mir die Haare gewaschen}}{{ex:She broke her leg.|/ʃi ˈbroʊk hər ˈleg/|Sie hat sich das Bein gebrochen}}{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|Mir tut der Kopf weh}}
<h3>Ohne Artikel: Schule, Arbeit, Bett, Bus</h3>
<p>„In die Schule gehen“ ist <i>go to school</i>, „im Bett“ ist <i>in bed</i>, „mit dem Bus“ ist <i>by bus</i>. Auch Länder wie „die Schweiz“ oder „die Türkei“ stehen ohne Artikel: <i>Switzerland</i>, <i>Turkey</i> (aber <i>the United States</i>).</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Ich fahre mit dem Bus zur Arbeit}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Ich bin zu Hause}}
<div class="tip">Typische Fehler: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ · <b>I washed the hair.</b> ✗ → <b>I washed my hair.</b> ✓ · <b>I go to the school.</b> ✗ → <b>I go to school.</b> ✓ · <b>in the Switzerland</b> ✗ → <b>in Switzerland</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. Was gehört in die Lücke?",["A","An","The","(kein Artikel)"],2,"Die Katze wurde schon erwähnt: \"the\"."],["I go to ___ work by bus. Was gehört in die Lücke?",["a","the","an","(kein Artikel)"],3,"\"Go to work\" steht ohne Artikel."],["Wie sagt man „Ich habe mir die Haare gewaschen“?",["I washed the hair.","I washed my hair.","I washed hair.","I washed a hair."],1,"Bei Körperteilen nimmt das Englische den Possessivbegleiter: \"my hair\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Was gehört in die Lücke?","The","A","An","Some","Das Hemd wurde schon erwähnt: \"the\"."],
["mc","Wie sagt man „Das Leben ist schön“?","Life is beautiful.","The life is beautiful.","A life is beautiful.","The life are beautiful.","Allgemein gesprochen steht kein Artikel, anders als bei „das Leben“."],
["mc","Wie sagt man „Sie hat sich das Bein gebrochen“?","She broke her leg.","She broke the leg.","She broke a leg.","She broke leg.","Bei Körperteilen nimmt das Englische den Possessivbegleiter: \"her leg\"."],
["mc","Welcher Satz ist richtig?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" und \"by bus\" stehen ohne Artikel."],
["mc","Wie sagt man „Ich liebe Hunde“?","I love dogs.","I love the dogs.","I love a dogs.","The dogs I love.","Allgemein: Plural ohne \"the\", also \"I love dogs\"."],
["or","Kannst du das Fenster aufmachen?","Can you open the window","a","In der Frage steht das Hilfsverb \"can\" vor \"you\"; \"the\", weil beide wissen, welches Fenster."],
["or","Mir tut der Kopf weh","My head hurts","The hurt","Man sagt \"my head\", nicht \"the head\"; und \"hurts\" hat das -s der dritten Person."],
["or","Das Leben ist schwer","Life is hard","The","Abstrakte Nomen stehen allgemein ohne \"the\": \"Life is hard\"."],
["fi","I saw a movie. __ movie was great.","Ich habe einen Film gesehen. Der Film war super","The","A|An|Some","Der Film wurde schon erwähnt: \"the\"."],
["fi","I brushed __ teeth.","Ich habe mir die Zähne geputzt","my","the|a|some","Bei Körperteilen steht der Possessivbegleiter: \"my teeth\"."],
["fi","I'm at __.","Ich bin zu Hause","home","the home|a home|house","\"At home\" steht ohne Artikel."],
["ty","Ich habe mir die Haare gewaschen","I washed my hair","washed · hair – mit Possessivbegleiter","the","Bei Körperteilen nimmt das Englische den Possessivbegleiter: \"my hair\"."],
["ty","Wo ist die Station?","Where is the station|Where's the station","where · station – mit the","a","Mit \"be\" steht \"is\" vor dem Subjekt; \"the\", weil es der Bahnhof hier ist."],
["ty","Milch ist gut für dich","Milk is good for you","milk · good – kein Artikel","The","Allgemein steht \"milk\" ohne Artikel; nicht zählbar und Singular: \"is\" (Übereinstimmung)."]]},

{ id:"adjectives", title:"Adjektive und Vergleiche: big houses, cheaper than, the best", blurb:"Das Adjektiv steht vor dem Nomen und bekommt keine Endung. Beim Vergleich heißt „als“ than, nicht as.", deck:"Einkaufen und Bezahlen", body:`
<p>Die Stellung kennst du: Wie im Deutschen steht das Adjektiv <b>vor</b> dem Nomen. Der Unterschied: Im Deutschen ändert sich die Endung („ein großes Haus“, „große Häuser“), im Englischen <b>nie</b>: <i>a big house</i>, <i>big houses</i>.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|eine große Tasche}}{{ex:red cars|/ˈred ˈkɑːrz/|rote Autos}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Diese Tasche ist groß}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Es ist zu klein}}
<h3>Vergleichen: -er oder more, und than</h3>
<p>Kurze Wörter: <b>-er</b>. Lange Wörter: <b>more</b>. Nie beides zusammen (<i>more cheaper</i>). Und das „als“ im Vergleich ist <b>than</b>, nicht <i>as</i>: „größer als“ ist <i>bigger than</i>. <i>as</i> gibt es nur bei „so groß wie“: <i>as big as</i>.</p>
<div class="tbl"><table><tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Der hier ist billiger}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Er ist teurer als der da}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Haben Sie eine größere Größe?}}
<h3>Superlativ: mit the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Das ist das beste Restaurant hier}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Welcher ist der billigste?}}
<div class="tip">Typische Fehler: <b>bigger as</b> ✗ → <b>bigger than</b> ✓ · <b>more cheaper</b> ✗ → <b>cheaper</b> ✓ · <b>bigs houses</b> ✗ → <b>big houses</b> ✓</div>`,
check:[["Wie lautet der Komparativ von \"big\"?",["more big","biger","bigger","most big"],2,"Kurzes Wort: -er, und der Endkonsonant wird verdoppelt."],["This is ___ expensive than that. Was gehört in die Lücke?",["more","most","much","very"],0,"Langes Wort: Der Komparativ braucht \"more\"."],["Wie lautet der Superlativ von \"good\"?",["the goodest","the most good","the better","the best"],3,"\"Good\" → \"better\" → \"the best\"."]],
practice:[
["mc","Wie lautet der Komparativ von \"cheap\"?","cheaper","more cheap","more cheaper","most cheap","Kurze Wörter: -er. Nie \"more\" + -er."],
["mc","Wie sagt man „Das ist teurer“?","This is more expensive.","This is expensiver.","This is most expensive.","This is more expensiver.","Lange Wörter: \"more\" + Adjektiv."],
["mc","Wie sagt man „große Häuser“?","big houses","bigs houses","houses big","houses bigs","Das Adjektiv steht vorn und bekommt nie ein -s."],
["mc","Wie sagt man „Er ist billiger als der andere“?","It's cheaper than the other one.","It's cheaper that the other one.","It's more cheap that the other one.","It's cheaper as the other one.","Das „als“ im Vergleich ist \"than\", nicht \"as\"."],
["mc","Wie sagt man „Das ist das beste Restaurant“?","It's the best restaurant.","It's the most good restaurant.","It's the restaurant best.","It's best restaurant the.","\"Good\" → \"better\" → \"the best\", und das Adjektiv steht vor dem Nomen."],
["or","Haben Sie eine größere Größe?","Do you have a bigger size","Are","Die Frage mit \"have\" braucht das Hilfsverb \"Do\"."],
["or","Diese Schuhe sind billiger","These shoes are cheaper","is","\"Shoes\" ist Plural: \"are\" (Übereinstimmung); das Adjektiv bleibt gleich."],
["or","Der hier ist billiger als der da","This is cheaper than that","more","\"-er\" und \"more\" stehen nie zusammen."],
["fi","It's __ small.","Es ist zu klein","too","much|more|most","„Zu“ (zu viel) ist \"too\"."],
["fi","This is cheaper __ that one.","Der hier ist billiger als der da","than","then|that|more","Das „als“ im Vergleich ist \"than\"."],
["fi","It's the __ expensive one.","Das ist der teuerste","most","more|much|very","Langes Wort: Der Superlativ ist \"the most\"."],
["ty","Haben Sie eine kleinere Größe?","Do you have a smaller size","do · smaller · size – mit Hilfsverb","Are","Die Frage mit \"have\" braucht das Hilfsverb \"Do\"."],
["ty","Dieser hier ist der beste","This is the best|This one is the best","this · the best – mit the","a","Superlativ: \"the best\"; mit \"this\" heißt das Verb \"is\" (Übereinstimmung)."],
["ty","Ich habe ein rotes Auto","I have a red car","red · car – das Adjektiv steht vorn","reds","Das Adjektiv steht vor dem Nomen und bleibt ohne Endung: \"a red car\"."]]},

{ id:"going-to", title:"Pläne: be going to", blurb:"Im Deutschen reicht oft das Präsens („Morgen fahre ich…“). Für feste Pläne sagt man im Englischen be going to.", deck:"Smalltalk", body:`
<p>Im Deutschen sprichst du über Pläne oft im Präsens: „Morgen besuche ich meine Oma.“ Im Englischen klingt <i>Tomorrow I visit my grandma</i> falsch. Für Pläne, die du schon beschlossen hast, nimmst du das <i>going-to-future</i>: <b>be + going to + Grundform</b>. <i>be</i> darf nicht fehlen und richtet sich nach dem Subjekt (am / is / are).</p>
{{ex:I'm going to visit New York.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌnuː ˈjɔːrk/|Ich besuche New York (das ist geplant)}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Sie wird sich ein Auto kaufen (geplant)}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Wir gehen gleich zu Abend essen}}
<h3>Verneinung und Frage</h3>
<p>Wie bei jedem <i>be</i>: <i>not</i> kommt dahinter, und in der Frage steht <i>be</i> vor dem Subjekt. Kein <i>do</i>.</p>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Ich gehe nicht hin}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Kommst du?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Was hast du am Wochenende vor?}}
<h3>Vorhersagen nach dem, was du siehst</h3>
<p>Dunkle Wolken am Himmel? Dann sagst du, wie bei „es wird regnen“, mit <i>it</i> als Subjekt:</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Es wird gleich regnen}}
<h3>Zeitangaben</h3>
<p><i>tomorrow</i> (morgen), <i>tonight</i> (heute Abend), <i>this weekend</i> (dieses Wochenende), <i>next week</i> (nächste Woche) stehen meist am Ende.</p>
<div class="tip">Schnell gesprochen klingt <i>going to</i> wie <b>gonna</b>. Und vergiss <i>be</i> nicht: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Wie sagt man „Morgen treffe ich meinen Freund“ (schon geplant)?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"\"Be\" + \"going to\" + Grundform."],["She ___ going to study. Was gehört in die Lücke?",["am","are","is","be"],2,"Mit \"she\": \"is\"."],["Wie sagt man „Was hast du am Wochenende vor?“?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Fragewort + \"be\" + Subjekt + \"going to\"."]],
practice:[
["mc","Wie sagt man „Ich fahre nach Lima“ (schon geplant)?","I'm going to go to Lima.","I going to go to Lima.","I'm going go to Lima.","I'm go to Lima going.","Vergiss \"am\" nicht: \"be\" + \"going to\" + Verb."],
["mc","They ___ going to come. Was gehört in die Lücke?","are","is","am","be","Mit \"they\": \"are\"."],
["mc","Wie sagt man „Es wird gleich regnen“?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Nach \"going to\" steht die Grundform, und der Satz braucht \"it\"."],
["mc","Wie sagt man „Ich gehe nicht hin“ (so ist es geplant)?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Die Verneinung setzt \"not\" hinter \"be\", ohne \"don't\"."],
["mc","Wie sagt man „Kommst du?“ (hast du es vor)?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","In der Frage steht \"be\" vor \"you\"."],
["or","Kommst du (hast du es vor)?","Are you going to come","Do","Die Frage beginnt mit dem Hilfsverb \"Are\": \"Are you going to…?\"."],
["or","Sie werden verreisen","They are going to travel","is","Mit \"they\" heißt das Hilfsverb \"are\" (Übereinstimmung)."],
["or","Wir gehen gleich zu Abend essen","We're going to have dinner","a","Mahlzeiten stehen ohne Artikel: \"have dinner\"."],
["fi","I'm going __ study tonight.","Heute Abend lerne ich (so ist es geplant)","to","for|at|will","\"Going to\" + Grundform."],
["fi","__ you going to come?","Kommst du?","Are","Do|Is|Will","Mit \"you\": \"Are\"."],
["fi","It's going to __ tomorrow.","Morgen wird es regnen","rain","rains|raining|rained","Nach \"going to\" steht die Grundform."],
["ty","Es wird gleich regnen (die Wolken sind schon da)","It's going to rain","it · going to · rain – mit Subjekt","rains","Wie bei „es wird regnen“ braucht der Satz ein Subjekt: \"it\"."],
["ty","Was hast du vor? (mit going to)","What are you going to do","what · going to · do – mit are","will","Fragewort + Hilfsverb \"are\" + \"you\" + \"going to\"."],
["ty","Ich schaue mir gleich einen Film an (schon geplant, US-Englisch)","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie – Verb in der Grundform","watching","\"Going to\" + Grundform."]]},

{ id:"joining", title:"Sätze verbinden: and, but, or, so, because", blurb:"Zwei kurze Sätze werden einer. Dazu: also ist nicht „also“, und nach because bleibt die Wortstellung normal.", deck:"Gefühle und Reaktionen", body:`
<p>Nur kurze Sätze klingen abgehackt. Mit diesen Wörtern verbindest du Gedanken und sprichst flüssiger.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Ich mag Kaffee und Tee}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Ich bin müde, aber glücklich}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Kaffee oder Tee?}}
<h3>so: also, deshalb</h3>
<p>Ursache + <b>so</b> + Folge. Achtung, falscher Freund: Das deutsche „also“ heißt <i>so</i>. Das englische <i>also</i> heißt „auch“.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Ich war müde, also bin ich nach Hause gegangen}}
<h3>because und because of</h3>
<p><b>because</b> (weil) steht vor einem Satz mit Subjekt und Verb; <b>because of</b> (wegen) vor einem Nomen. Und nach <i>because</i> bleibt die normale Wortstellung: Das Verb wandert nicht ans Ende wie bei „weil“. „…, weil ich müde war“ ist <i>because I was tired</i>, nicht <i>because I tired was</i>.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Ich bin nach Hause gegangen, weil ich müde war}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Ich bin zu Hause geblieben, weil es geregnet hat}}{{ex:I stayed home because of the rain.|/aɪ ˈsteɪd ˈhoʊm bɪkəz əv ðə ˈreɪn/|Ich bin wegen des Regens zu Hause geblieben}}
<h3>too: auch</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Mir gefällt es auch}}
<div class="tip">Typische Fehler: <b>It rained, also I stayed home.</b> ✗ → <b>It rained, so I stayed home.</b> ✓ · <b>because I it forgot</b> ✗ → <b>because I forgot it</b> ✓ · <b>Because I was tired, so I went home.</b> ✗ (nimm nur eins von beiden)</div>`,
check:[["I was sick, ___ I stayed home. Was gehört in die Lücke?",["because","but","so","or"],2,"Erst die Ursache, dann die Folge: \"so\"."],["I stayed home ___ I was sick. Was gehört in die Lücke?",["because","so","but","and"],0,"Erst die Folge, dann der Grund: \"because\"."],["Was sagst du für „Kaffee oder Tee?“?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Bei einer Wahl zwischen zwei Dingen: \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. Was gehört in die Lücke?","but","so","or","because","Einen Gegensatz verbindest du mit \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. Was gehört in die Lücke?","so","because","but","or","Erst die Ursache, dann die Folge: \"so\" (das deutsche „also“)."],
["mc","I ate a sandwich ___ I was hungry. Was gehört in die Lücke?","because","so","but","or","Erst die Folge, dann der Grund: \"because\"."],
["mc","I stayed home ___ the rain. Was gehört in die Lücke?","because of","because","so","but","Vor einem Nomen (\"the rain\") steht \"because of\" (wegen); vor einem Satz \"because\"."],
["mc","Wie sagt man „Ich bin müde, aber glücklich“?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","„Aber“ ist \"but\"."],
["or","Ich mag Tee, aber sie nicht","I like tea but she doesn't","don't","Mit \"she\" heißt die Verneinung \"doesn't\" (dritte Person)."],
["or","Er arbeitet und sie studiert","He works and she studies","work","Mit \"he\" und \"she\" bekommen beide Verben ein -s: dritte Person."],
["or","Ich hatte Hunger, also habe ich gegessen","I was hungry so I ate","because","Erst die Ursache, dann \"so\" und die Folge."],
["fi","I'm tired __ happy.","Ich bin müde, aber glücklich","but","so|because|or","„Aber“ ist \"but\"."],
["fi","I stayed home __ it was raining.","Ich bin zu Hause geblieben, weil es geregnet hat","because","so|but|or","Erst die Folge, dann der Grund: \"because\"."],
["fi","Coffee __ tea?","Kaffee oder Tee?","or","so|but|because","Bei einer Wahl zwischen zwei Dingen: \"or\"."],
["ty","Ich bin müde, aber glücklich","I'm tired but happy|I'm tired but I'm happy","tired · but · happy – mit but","so","„Aber“ ist \"but\"."],
["ty","Ich bin zu Hause geblieben, weil es geregnet hat","I stayed home because it was raining|I stayed at home because it was raining|I stayed home because it rained|I stayed at home because it rained","stayed home · because · rain – mit Subjekt","so","Nach \"because\" kommt ein ganzer Satz mit Subjekt in normaler Stellung: \"it was raining\", kein Verb am Ende."],
["ty","Er ist wegen des Regens nicht gekommen","He didn't come because of the rain","didn't · come · because of – der Regen","came","Verneinung in der Vergangenheit mit dem Hilfsverb \"didn't\"; \"because of\" steht vor einem Nomen."]]},

{ id:"false-friends", title:"Falsche Freunde: become heißt nicht „bekommen“", blurb:"Wörter, die wie deutsche aussehen und etwas anderes bedeuten: become, Chef, Handy, also, will und viele mehr.", deck:"Falsche Freunde", body:`
<p>Tausende englische Wörter sehen aus wie deutsche und bedeuten dasselbe: <i>house, water, bring, hand, information</i>. Darauf kannst du dich meistens verlassen. Ein paar sehr häufige sind aber <b>falsche Freunde</b> (<i>false friends</i>): Sie sehen gleich aus und bedeuten etwas anderes. Diese machen die meisten Probleme.</p>
<h3>Verben: become, will, spend</h3>
<p><i>become</i> heißt „werden“; „bekommen“ ist <i>get</i> oder <i>receive</i>. <i>will</i> ist die Zukunft („wird“); „ich will“ ist <i>I want</i>. <i>spend</i> heißt „ausgeben“ oder „verbringen“, nicht „spenden“ (<i>donate</i>).</p>
{{ex:She wants to become a doctor.|/ʃi ˈwɑːnts tə bɪˈkʌm ə ˈdɑːktər/|Sie will Ärztin werden}}{{ex:Can I get the check?|/kən aɪ ˈget ðə ˈtʃek/|Kann ich die Rechnung bekommen?}}{{ex:I'm getting a new phone tomorrow.|/aɪm ˈgetɪŋ ə ˈnuː ˈfoʊn təˈmɑːroʊ/|Ich bekomme morgen ein neues Handy}}
<h3>Adverbien und Adjektive</h3>
<p><i>actually</i> heißt „eigentlich, tatsächlich“; „aktuell“ ist <i>currently</i>. <i>eventually</i> heißt „schließlich, irgendwann“; „eventuell“ ist <i>possibly</i> oder <i>maybe</i>. <i>also</i> heißt „auch“; „also“ ist <i>so</i>. <i>sensible</i> heißt „vernünftig“; „sensibel“ ist <i>sensitive</i>. <i>handy</i> heißt „praktisch“; das Handy ist ein <i>cell phone</i> (britisch: <i>mobile</i>). Und <i>sympathetic</i> heißt „mitfühlend“; „sympathisch“ ist <i>nice</i>.</p>
{{ex:Actually, I'm from Germany.|/ˈæktʃuəli aɪm frəm ˈdʒɜːrməni/|Eigentlich komme ich aus Deutschland}}{{ex:Currently, I work at home.|/ˈkɜːrəntli aɪ ˈwɜːrk ət ˈhoʊm/|Zurzeit arbeite ich von zu Hause}}{{ex:Eventually, she found a job.|/ɪˈventʃuəli ʃi ˈfaʊnd ə ˈdʒɑːb/|Schließlich hat sie einen Job gefunden}}{{ex:He's very sensible.|/hiz ˈveri ˈsensəbl/|Er ist sehr vernünftig}}
<h3>Personen und Orte</h3>
<p>Ein <i>chef</i> kocht; dein „Chef“ ist dein <i>boss</i>. <i>college</i> ist eine Hochschule; der „Kollege“ ist ein <i>colleague</i>. <i>sea</i> ist das Meer; der „See“ ist ein <i>lake</i>. Und Vorsicht bei den Fragewörtern: „wo“ ist <i>where</i>, „wer“ ist <i>who</i>.</p>
{{ex:My boss works a lot.|/maɪ ˈbɔːs ˈwɜːrks ə ˈlɑːt/|Mein Chef arbeitet viel}}{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Wo wohnst du?}}
<h3>Dinge des Alltags</h3>
<div class="tbl"><table><tr><th>Englisch</th><th>bedeutet</th><th>Das deutsche Wort heißt</th></tr><tr><td class="k">gift</td><td>Geschenk</td><td>Gift = <i>poison</i></td></tr><tr><td class="k">map</td><td>Landkarte</td><td>Mappe = <i>folder</i></td></tr><tr><td class="k">rent</td><td>Miete</td><td>Rente = <i>pension</i></td></tr><tr><td class="k">meaning</td><td>Bedeutung</td><td>Meinung = <i>opinion</i></td></tr><tr><td class="k">receipt</td><td>Kassenbon, Quittung</td><td>Rezept = <i>recipe</i>, <i>prescription</i></td></tr><tr><td class="k">art</td><td>Kunst</td><td>Art = <i>kind</i>, <i>type</i></td></tr><tr><td class="k">brave · fast · bald</td><td>mutig · schnell · kahl</td><td>brav · fast · bald = <i>well-behaved · almost · soon</i></td></tr><tr><td class="k">billion</td><td>Milliarde</td><td>Billion = <i>trillion</i></td></tr><tr><td class="k">note</td><td>Notiz</td><td>Note = <i>grade</i></td></tr><tr><td class="k">personal</td><td>persönlich</td><td>Personal = <i>staff</i></td></tr></table></div>
<h3>Nur halb falsch</h3>
<p><i>realize</i> heißt „merken, klar werden“; „etwas realisieren“ im Sinn von „umsetzen“ ist <i>carry out</i>. <i>discuss</i> steht ohne <i>about</i>: „über den Plan diskutieren“ ist <i>discuss the plan</i>. Und <i>actual</i> heißt „tatsächlich“, nicht „aktuell“ (<i>current</i>).</p>
{{ex:I didn't realize.|/aɪ ˈdɪdnt ˈriːəlaɪz/|Das habe ich nicht gemerkt}}
<div class="tip">Zum Merken: <b>become</b> = werden (bekommen = <b>get</b>) · <b>will</b> = wird (ich will = <b>I want</b>) · <b>chef</b> = Koch (Chef = <b>boss</b>) · <b>handy</b> = praktisch (Handy = <b>cell phone</b>) · <b>also</b> = auch (also = <b>so</b>)</div>`,
check:[["Wie sagt man „Ich bekomme morgen ein neues Handy“?",["I become a new handy tomorrow.","I'm getting a new phone tomorrow.","I become a new phone tomorrow.","I'm getting a new handy tomorrow."],1,"„Bekommen“ ist \"get\" (\"become\" heißt „werden“), und das Handy ist ein \"phone\" (\"handy\" heißt „praktisch“)."],["Wie sagt man „Aktuell wohne ich in Berlin“?",["Actually, I live in Berlin.","Actual, I live in Berlin.","Currently, I live in Berlin.","In actual, I live in Berlin."],2,"„Aktuell“ ist \"currently\"; \"actually\" heißt „eigentlich“."],["„Mein Chef ist sehr nett“ auf Englisch:",["My boss is very nice.","My chef is very nice.","My boss is very sympathetic.","My chief is very nice."],0,"Der „Chef“ ist der \"boss\" (ein \"chef\" kocht), und „nett, sympathisch“ ist \"nice\" (\"sympathetic\" heißt „mitfühlend“)."]],
practice:[
["mc","Was bedeutet \"actually\"?","eigentlich, tatsächlich","aktuell","aktiv","manchmal","\"Actually\" = eigentlich; „aktuell“ ist \"currently\"."],
["mc","Wie sagt man „Kann ich die Rechnung bekommen?“?","Can I get the check?","Can I become the check?","Can I become the bill?","Can I got the check?","„Bekommen“ ist \"get\"; \"become\" heißt „werden“. Nach \"can\" steht die Grundform."],
["mc","Was bedeutet \"eventually\"?","schließlich, irgendwann","eventuell","sofort","hoffentlich","\"Eventually\" = schließlich; „eventuell“ ist \"possibly\" oder \"maybe\"."],
["mc","Was bedeutet \"He's very sensible\"?","Er ist sehr vernünftig.","Er ist sehr sensibel.","Er ist sehr sentimental.","Er ist sehr sympathisch.","\"Sensible\" = vernünftig; „sensibel“ ist \"sensitive\"."],
["mc","Wie sagt man „Also, was machen wir jetzt?“?","So, what do we do now?","Also, what do we do now?","Also, what we do now?","So, what we do now?","Das deutsche „also“ ist \"so\" (\"also\" heißt „auch“), und die Frage braucht \"do\"."],
["or","Wo wohnst du?","Where do you live","Who","„Wo“ ist \"where\", „wer“ ist \"who\". Vor dem Subjekt steht das Hilfsverb \"do\"."],
["or","Mein Chef arbeitet viel","My boss works a lot","chef work","„Mein Chef“ = er: \"works\" mit -s, dritte Person. „Chef“ heißt \"boss\"."],
["or","Hast du es gemerkt?","Did you realize","realized","Frage in der Vergangenheit: Hilfsverb \"Did\" + Grundform \"realize\" (merken). „Etwas realisieren“ heißt oft \"carry out\"."],
["fi","__, I'm from Germany.","Eigentlich komme ich aus Deutschland","Actually","Currently|Actual|Now","„Eigentlich“ ist \"actually\"."],
["fi","My __ is on the table.","Mein Handy liegt auf dem Tisch","phone|cell phone|cellphone|cell|mobile|mobile phone|smartphone","handy|hand|handle","Das Handy ist ein \"phone\" oder \"cell phone\" (britisch: \"mobile\"); \"handy\" heißt „praktisch“."],
["fi","Put the papers in the blue __.","Leg die Papiere in die blaue Mappe","folder|file|binder","map|card|mop","Die „Mappe“ ist ein \"folder\"; \"map\" ist eine Landkarte."],
["ty","Sie bekommt viele Briefe","She gets a lot of letters|She gets lots of letters|She gets many letters|She receives a lot of letters|She receives lots of letters|She receives many letters","she · get · letters – nicht „become“","becomes","Mit \"she\" bekommt das Verb ein -s: dritte Person. „Bekommen“ heißt \"get\" oder \"receive\", nicht \"become\"."],
["ty","Er hat es nicht gemerkt","He didn't realize|He didn't notice","didn't · realize – nach „didn't“ die Grundform","realized","Verneinung in der Vergangenheit mit dem Hilfsverb \"didn't\"; \"realize\" = merken."],
["ty","Sie will Ärztin werden","She wants to be a doctor|She wants to become a doctor","want · doctor – „will“ ist nicht \"will\"","will","Mit \"she\" bekommt \"want\" ein -s: dritte Person. „Sie will“ heißt \"she wants\"; \"will\" ist Zukunft („wird“)."]]},
];

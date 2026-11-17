/* de-en stage A2: lessons for German speakers (Germany). English side shared with es-en (parity.js).
   Contrasts follow docs/profiles/de.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past progressive: was / were + -ing", blurb:"Was in einem Moment der Vergangenheit gerade im Gange war. Damit baust du den Hintergrund einer Geschichte.", deck:"Gefühle und Reaktionen", body:`
<p>Das <i>past progressive</i> (auch <i>past continuous</i>) beschreibt, was in einem Moment der Vergangenheit <b>gerade im Gange war</b>. Im Deutschen gibt es dafür keine eigene Form: „ich schlief“ und „ich habe geschlafen“ decken beides ab, höchstens hilft ein „gerade“. Im Englischen brauchst du <b>was/were + -ing</b>.</p>
<p>Achte auf die Übereinstimmung mit dem Subjekt: <i>I, he, she, it</i> → <b>was</b>; <i>you, we, they</i> → <b>were</b>.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Ich habe (gerade) geschlafen}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|Wir haben gerade ferngesehen}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Es hat geregnet}}
<h3>Fragen</h3>
<p>Das Hilfsverb <i>was/were</i> steht vor dem Subjekt. <i>did</i> brauchst du hier nicht.</p>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|Was hast du (gerade) gemacht?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Hast du um neun gearbeitet?}}
<h3>Mit when: etwas unterbricht die Handlung</h3>
<p>Die längere Handlung steht im <b>past progressive</b>, die kurze, die sie unterbricht, im <b>simple past</b>. Im Deutschen sagst du dafür „gerade …, als“: „Ich habe gerade gekocht, als du angerufen hast.“</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Ich habe gerade gekocht, als du angerufen hast}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Ich war gerade auf dem Heimweg, als es anfing zu regnen}}
<div class="tip">Ein deutsches „ich kochte“ ist im Englischen mal <i>was cooking</i>, mal <i>cooked</i>. Lief die Handlung in dem Moment schon, nimm <i>was/were + -ing</i>. <b>I cooked when you called</b> heißt: „Als du angerufen hast, habe ich angefangen zu kochen.“</div>`,
check:[["„Was hast du um neun gemacht?“ (gerade im Gange) auf Englisch:",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Mit \"you\" steht \"were\", danach die -ing-Form."],["I was cooking ___ you called. Was passt in die Lücke?",["when","so","or","than"],0,"„Als“ heißt hier \"when\"."],["They ___ watching TV. Was passt in die Lücke?",["was","did","were","are being"],2,"Mit \"they\" steht \"were\": Übereinstimmung von Subjekt und Verb."]],
practice:[
["mc","I ___ sleeping at ten. Was passt in die Lücke?","was","were","did","am","Mit \"I\" heißt die Vergangenheit von \"be\" \"was\": Übereinstimmung mit dem Subjekt."],
["mc","Wie sagt man „Ich habe gerade gekocht, als du angerufen hast“?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","Die längere Handlung steht im past progressive, die unterbrechende im simple past."],
["mc","„Was machtest du gerade?“ auf Englisch:","What were you doing?","What did you doing?","What was you doing?","What were you do?","In der Frage steht das Hilfsverb \"were\" vor dem Subjekt, danach die -ing-Form."],
["mc","They ___ playing soccer. Was passt in die Lücke?","were","was","did","are","Mit \"they\" steht \"were\": Übereinstimmung von Subjekt und Verb."],
["mc","Wie sagt man „Es regnete gerade“?","It was raining.","Was raining.","It were raining.","It was rain.","Wie im Deutschen („es“) braucht der Satz ein Subjekt: \"it\" + \"was\" + -ing."],
["or","Meine Schwester las gerade ein Buch","My sister was reading a book","were","„Meine Schwester“ = sie, dritte Person Singular: \"was\", nicht \"were\"."],
["or","Die Kinder schliefen gerade","The kids were sleeping","was","Bei einem Subjekt im Plural steht \"were\": Übereinstimmung."],
["or","Was machtest du gerade?","What were you doing","did","In der Frage steht das Hilfsverb \"were\" vor dem Subjekt; \"did\" brauchst du hier nicht."],
["fi","I was __ dinner.","Ich machte gerade Abendessen","cooking|making","cook|cooked|cooks","Nach \"was\" folgt die -ing-Form."],
["fi","What __ you doing?","Was machtest du gerade?","were","was|did|does","Mit \"you\" steht \"were\": Übereinstimmung."],
["fi","I was sleeping __ you called.","Ich habe gerade geschlafen, als du angerufen hast","when","so|than|or","„Als“ heißt hier \"when\"."],
["ty","Es regnete gerade","It was raining","rain – mit dem Subjekt \"it\"","were","Wie „es“ im Deutschen ist \"it\" das Subjekt: \"it\" + \"was\" + -ing."],
["ty","Er arbeitete gerade","He was working","work – mit \"he\" und der Vergangenheit von \"be\"","were","Mit \"he\" steht \"was\", nicht \"were\": Übereinstimmung von Subjekt und Verb."],
["ty","Spielten die Kinder gerade?","Were the kids playing|Were the children playing","kids · play – Frage mit dem Hilfsverb vorne","was","In der Frage steht das Hilfsverb \"were\" vor dem Subjekt."]]},
{ id:"will", title:"Will: spontane Entscheidungen, Versprechen und Vorhersagen", blurb:"Vorsicht, falscher Freund: „ich will“ heißt I want. Spontan entschieden → will, schon geplant → going to.", deck:"Smalltalk", body:`
<p><b>Zuerst die Falle:</b> Das deutsche „ich will“ heißt <i>I want</i>, nicht <i>I will</i>. Englisches <i>will</i> ist ein Hilfsverb für die Zukunft, so wie „werden“: <i>I will go</i> = „Ich werde gehen“.</p>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Ich will nach Hause}}{{ex:I'll help you.|/aɪl ˈhelp ju/|Ich helfe dir}}
<p>Die Form ist <b>will + Verb</b>, ohne <i>to</i> und ohne -s. Gesprochen fast immer verkürzt: <b>I'll, you'll, it'll</b>. Die Verneinung ist <b>won't</b>.</p>
<p>Im Deutschen stehen Angebote und spontane Entscheidungen meist im Präsens: „Ich helfe dir“, „Ich geh ran“. Im Englischen brauchst du dort <i>will</i>. Und während du im Deutschen fast jede Zukunft im Präsens sagen kannst („Morgen fahre ich nach Köln“), unterscheidet das Englische: <i>will</i> für das, was du im Moment entscheidest, anbietest oder versprichst; <i>going to</i> für Pläne, die schon feststehen.</p>
<h3>Spontane Entscheidungen und Angebote</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Ich nehme die Pasta}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Ich geh ran / Ich mach auf}}
<h3>Versprechen</h3>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Ich ruf dich später an}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Ich komme nicht zu spät}}
<h3>Vorhersagen und Fragen</h3>
<p>In Fragen steht <i>will</i> vor dem Subjekt, wie „Wirst du…?“. Und wie im Deutschen braucht der Satz ein Subjekt: „Es wird regnen“ → <i>It will rain</i>.</p>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|Das wird schon}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Ich glaube, es wird regnen}}{{ex:Will you come?|/wəl ju ˈkʌm/|Kommst du?}}
<h3>will oder going to</h3>
<div class="tbl"><table><tr><th></th><th>Wann</th><th>Beispiel</th></tr><tr><td class="k">will</td><td>spontane Entscheidung, Angebot, Versprechen</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>fester Plan</td><td>I'm going to visit London next month.</td></tr></table></div>
<div class="tip">Typische Fehler: <b>I will a coffee</b>, <b>I will to go</b>, <b>I'll going</b> und als Angebot <b>I help you</b> ✗ → <b>I want a coffee</b>, <b>I'll go</b>, <b>I'll help you</b> ✓. Nach <i>will</i> bekommt das Verb nie ein -s: <b>She will come</b>, nicht <i>She will comes</i>.</div>`,
check:[["Das Telefon klingelt. Wie sagt man „Ich geh ran“?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Eine spontane Entscheidung steht mit \"will\"."],["I ___ be late. („Ich komme nicht zu spät“ als Versprechen)",["won't","willn't","don't will","not will"],0,"Die Verneinung von \"will\" ist \"won't\"."],["Welcher Satz beschreibt einen festen Plan?",["I'll get the door.","I will to visit Lima.","I visit Lima will.","I'm going to visit Lima next month."],3,"Für feste Pläne nimmst du \"be going to\"."]],
practice:[
["mc","Wie sagt man „Ich helfe dir“ (als Angebot)?","I'll help you.","I help you.","I'll helping you.","I'll to help you.","Für ein Angebot braucht das Englische \"will\": „Ich helfe dir“ → \"I'll help you\"."],
["mc","Im Restaurant entscheidest du spontan. Wie sagt man „Ich nehme die Pasta“?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Eine spontane Entscheidung steht mit \"will\"."],
["mc","Wie sagt man „Ich komme nicht zu spät“ (Versprechen)?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","\"Will not\" wird zu \"won't\" verkürzt."],
["mc","„Kommst du?“ auf Englisch:","Will you come?","Do you will come?","Will you coming?","Will come you?","In der Frage steht das Hilfsverb \"will\" vor dem Subjekt."],
["mc","Wie sagt man „Sie kommt morgen“?","She will come tomorrow.","She will comes tomorrow.","She wills come tomorrow.","She will coming tomorrow.","Nach \"will\" bekommt das Verb kein -s, auch nicht in der dritten Person."],
["or","Hilfst du mir? (als Bitte)","Will you help me","Do","In der Frage steht das Hilfsverb \"will\" vor dem Subjekt."],
["or","Wird es morgen regnen?","Will it rain tomorrow","rains","Das Hilfsverb \"will\" steht vor dem Subjekt, und das Verb bekommt kein -s der dritten Person."],
["or","Ich ruf dich später an","I'll call you later","calling","Nach \"will\" folgt das Verb ohne -ing."],
["fi","I __ call you tomorrow.","Ich ruf dich morgen an","will","am|going|do","Ein Versprechen steht mit \"will\"."],
["fi","I __ forget.","Ich werde es nicht vergessen","won't|will not","don't|not|willn't","Die Verneinung von \"will\" ist \"won't\"."],
["fi","__ you help me?","Hilfst du mir?","Will|Can|Could|Would","Do|Are|Is","Für eine Bitte: \"Will you…?\" oder \"Can you…?\"."],
["ty","Es wird morgen regnen","It will rain tomorrow|It's going to rain tomorrow","rain · tomorrow – mit dem Subjekt \"it\"","rains","Wie „es“ im Deutschen braucht der Satz ein Subjekt: \"It will rain\", nicht \"Will rain\"."],
["ty","Kommst du zur Party?","Will you come to the party|Are you coming to the party|Are you going to come to the party","come · party – Frage mit dem Hilfsverb vorne","Do","In der Frage steht das Hilfsverb \"will\" vor dem Subjekt."],
["ty","Ich helfe dir","I'll help you|I'll help","help · you – ein Angebot mit \"will\"","helping","Für ein Angebot nimmt das Englische \"will\", nicht das Präsens wie im Deutschen."]]},
{ id:"perfect", title:"Present perfect: Erfahrungen", blurb:"have + Partizip für das, was du schon einmal erlebt hast. Sagst du, wann, steht das simple past.", deck:"Reisen (Flughafen und Hotel)", body:`
<p>Das <i>present perfect</i> (<b>have/has + Partizip Perfekt</b>) spricht über Erfahrungen: was du <b>schon einmal</b> (oder noch nie) gemacht hast, ohne zu sagen, wann.</p>
<p><b>Achtung: Das present perfect ist nicht das deutsche Perfekt.</b> Es sieht gleich aus (<i>I have seen</i> – „ich habe gesehen“), aber im Deutschen erzählst du fast jede Vergangenheit im Perfekt: „Gestern habe ich ihn gesehen.“ Im Englischen geht das nicht. Das present perfect steht nur ohne Zeitpunkt, für Erfahrungen bis heute.</p>
{{ex:I've been to New York.|/aɪv bɪn tə ˌnuː ˈjɔːrk/|Ich war schon mal in New York}}{{ex:She has visited Canada twice.|/ʃi həz ˈvɪzɪtɪd ˈkænədə ˈtwaɪs/|Sie war schon zweimal in Kanada}}
<p>Bei <i>he, she, it</i> heißt das Hilfsverb <b>has</b> (3. Person Singular), sonst <b>have</b>. Und es ist immer <i>have</i>, auch wo das Deutsche „sein“ nimmt: „Ich bin schon in London gewesen“ → <i>I've been to London</i>, nie <i>I am been</i>.</p>
<h3>ever und never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|Hast du schon mal Sushi gegessen?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Ich habe es noch nie gesehen}}
<p>In der Kurzantwort wiederholst du das Hilfsverb: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Häufige Partizipien</h3>
<div class="tbl"><table><tr><th>Grundform</th><th>simple past</th><th>Partizip (3. Form)</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Mit Zeitpunkt: simple past</h3>
<p>Signalwörter für einen abgeschlossenen Zeitpunkt wie <i>yesterday, last year, in 2020</i> oder <i>ago</i> verlangen das simple past, auch wenn du auf Deutsch „ich bin … geflogen“ sagst.</p>
{{ex:I went to New York last year.|/aɪ ˈwent tə ˌnuː ˈjɔːrk ˈlæst ˈjɪr/|Ich bin letztes Jahr nach New York geflogen}}
<div class="tip">Der typische deutsche Fehler: <b>I have seen him yesterday.</b> ✗ → <b>I saw him yesterday.</b> ✓ Ebenso <b>I've been to New York last year.</b> ✗ → <b>I went to New York last year.</b> ✓ Im amerikanischen Englisch hört man auch <i>Did you ever go to New York?</i>; das ist richtig.</div>`,
check:[["„Warst du schon mal in Japan?“ auf Englisch:",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Für Erfahrungen: \"Have you ever\" + Partizip, und \"been to\" + Ort."],["I ___ never seen that movie. Was passt in die Lücke?",["am","did","have","was"],2,"Die Form ist \"have\" + \"never\" + Partizip."],["Welcher Satz ist richtig?",["I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima."],0,"Mit \"last year\" (abgeschlossene Zeit) steht das simple past."]],
practice:[
["mc","Wie sagt man „Ich war schon mal in Japan“?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","Die Form ist \"have\" + das Partizip \"been\"."],
["mc","Wie lautet das Partizip Perfekt von \"see\"?","seen","saw","seed","seeing","see – saw – seen."],
["mc","„Hast du schon mal Sushi gegessen?“ auf Englisch:","Have you ever eaten sushi?","Did you ever eaten sushi?","Have you ever ate sushi?","Do you have eaten sushi?","Für Erfahrungen: \"Have you ever\" + Partizip (\"eaten\")."],
["mc","Wie sagt man „Ich habe es noch nie gesehen“?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","Die Form ist \"have\" + \"never\" + Partizip."],
["mc","Mit „letztes Jahr“: Welcher Satz ist richtig?","I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima last year.","Sagst du, wann, steht das simple past – nicht das present perfect wie das deutsche Perfekt."],
["or","Warst du schon mal auf Kuba?","Have you ever been to Cuba","Did","In der Frage steht das Hilfsverb \"have\" vor dem Subjekt."],
["or","Sie hat Peru schon zweimal besucht","She has visited Peru twice","have","Mit \"she\" heißt das Hilfsverb \"has\": 3. Person Singular."],
["or","Ich habe noch nie Schnee gesehen","I've never seen snow","the","Allgemein gemeint steht im Englischen kein Artikel: \"snow\"."],
["fi","Have you ever __ to Miami?","Warst du schon mal in Miami?","been","be|went|go","Nach \"have\" folgt das Partizip \"been\"."],
["fi","I've __ eaten that.","Das habe ich noch nie gegessen","never","ever|no|not never","„Noch nie“ heißt \"never\"."],
["fi","My brother __ been to Chile.","Mein Bruder war schon mal in Chile","has","have|is|did","„Mein Bruder“ = er: Das Hilfsverb ist \"has\" (3. Person)."],
["ty","Warst du schon mal in Japan?","Have you ever been to Japan|Have you been to Japan|Did you ever go to Japan","ever · been · Japan – Frage mit dem Hilfsverb vorne","went","In der Frage steht das Hilfsverb \"have\" vor dem Subjekt."],
["ty","Meine Schwester hat noch nie Sushi probiert","My sister has never tried sushi|My sister has never eaten sushi","never · tried · sushi – das Subjekt ist 3. Person","have","„Meine Schwester“ = sie, 3. Person: Das Hilfsverb ist \"has\"."],
["ty","Ich bin letztes Jahr nach Mexiko gefahren (mit \"go\")","I went to Mexico last year","went · Mexico · last year – mit einem abgeschlossenen Zeitpunkt","have been","Mit \"last year\" (Signalwort für abgeschlossene Zeit) steht das simple past, nicht das present perfect."]]},
{ id:"modals", title:"have to, must, should, might: Pflicht, Rat und Möglichkeit", blurb:"Müssen, sollte, könnte. Und die große Falle: „du musst nicht“ ist don't have to, nicht must not.", deck:"Gesundheit und Notfälle", body:`
<p>Vier Formen für Pflicht, Rat und Möglichkeit. Nach <i>must, should</i> und <i>might</i> folgt die <b>Grundform ohne to</b>: <i>You should go</i>, nicht <i>You should to go</i>. Modalverben (<i>must, should, might</i>) bekommen nie ein -s: <i>She should rest</i>.</p>
<h3>have to: müssen</h3>
<p>Die häufigste Form im Gespräch. Bei <i>he, she, it</i> heißt es <b>has to</b> (3. Person). Fragen und Verneinungen brauchen das Hilfsverb <i>do/does</i>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Ich muss morgen arbeiten}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Sie muss jetzt los}}{{ex:Do I have to pay?|/də aɪ ˈhæf tə ˈpeɪ/|Muss ich bezahlen?}}
<h3>„Du musst nicht“ ist nicht you must not</h3>
<p>Das ist <b>die</b> Falle für Deutschsprachige. „Nicht müssen“ heißt: Es ist nicht nötig. Englisches <i>must not</i> heißt dagegen: Es ist verboten, also „nicht dürfen“.</p>
<div class="tbl"><table><tr><th>Englisch</th><th>Bedeutung</th></tr><tr><td class="k">You don't have to come.</td><td>Du musst nicht kommen (es ist nicht nötig)</td></tr><tr><td class="k">You mustn't smoke here.</td><td>Du darfst hier nicht rauchen (es ist verboten)</td></tr></table></div>
<h3>should: sollte</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Du solltest zum Arzt gehen}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Du solltest dir keine Sorgen machen}}{{ex:Should I call him?|/ʃəd aɪ ˈkɔːl hɪm/|Soll ich ihn anrufen?}}
<h3>might: vielleicht, könnte</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Es könnte regnen}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Vielleicht komme ich zu spät}}
<div class="tip">Typische Fehler: <b>You must not come</b> (für „Du musst nicht kommen“), <b>You should to go</b>, <b>It might rains</b>, <b>She have to work</b> ✗ → <b>You don't have to come</b>, <b>You should go</b>, <b>It might rain</b>, <b>She has to work</b> ✓.</div>`,
check:[["„Du musst nicht kommen“ (es ist nicht nötig) auf Englisch:",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"„Nicht müssen“ heißt \"don't have to\". \"You must not come\" hieße „Du darfst nicht kommen“."],["Ein Rat: You ___ see a doctor.",["might","have","should","must to"],2,"Ein Rat steht mit \"should\" + Verb."],["She ___ to work today. Was passt in die Lücke?",["have","must","should","has"],3,"Mit \"she\" heißt es \"has to\": 3. Person Singular."]],
practice:[
["mc","Wie sagt man „Ich muss morgen arbeiten“?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","Die Form ist \"have to\" + Verb."],
["mc","Wie sagt man „Du musst nicht kommen“ (es ist nicht nötig)?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","„Nicht müssen“ = \"don't have to\". \"You must not come\" ist ein Verbot – genau der typische deutsche Fehler."],
["mc","Wie sagt man „Du solltest zum Arzt gehen“?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","Nach \"should\" folgt das Verb ohne \"to\"."],
["mc","Wie sagt man „Es könnte regnen“?","It might rain.","It might rains.","It might to rain.","It mights rain.","Nach \"might\" folgt das Verb ohne -s und ohne \"to\"."],
["mc","Wie sagt man „Du darfst hier nicht rauchen“ (es ist verboten)?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Ein Verbot ist \"must not\" (\"mustn't\") – also „nicht dürfen“."],
["or","Sie muss heute arbeiten","She has to work today","have","Mit \"she\" heißt es \"has to\": 3. Person Singular."],
["or","Muss ich bezahlen?","Do I have to pay","Am","Die Frage mit \"have to\" braucht das Hilfsverb \"do\"."],
["or","Du solltest zum Arzt gehen","You should see a doctor","to","Nach \"should\" folgt das Verb ohne \"to\"."],
["fi","She __ to study tonight.","Sie muss heute Abend lernen","has","have|must|should","Mit \"she\" heißt es \"has to\": 3. Person."],
["fi","You __ have to pay.","Du musst nicht bezahlen","don't|do not","must not|not|aren't","„Nicht müssen“ ist \"don't have to\", mit dem Hilfsverb \"do\"."],
["fi","It __ rain tomorrow.","Morgen könnte es regnen","might|may|could","must to|has to|should to","Für eine Möglichkeit nimmst du \"might\"."],
["ty","Muss er morgen arbeiten? (mit \"have to\")","Does he have to work tomorrow","have to · work · tomorrow – Frage mit dem Hilfsverb","Has","Mit \"he\" braucht die Frage das Hilfsverb \"does\", danach \"have to\" ohne -s."],
["ty","Du musst nicht kommen (mit \"have to\")","You don't have to come","have to · come – im Sinn von „nicht nötig“","mustn't","„Du musst nicht“ = \"don't have to\", mit dem Hilfsverb \"do\"; \"mustn't\" wäre ein Verbot."],
["ty","Du solltest zum Arzt gehen","You should see a doctor|You should go to a doctor|You should go to the doctor","should · see · doctor – das Verb ohne \"to\"","to","Nach \"should\" folgt das Verb ohne \"to\"."]]},
{ id:"to-ing", title:"to oder -ing nach einem Verb: want to, enjoy -ing", blurb:"want verlangt to, enjoy die -ing-Form. Das hängt vom Verb ab, und nach einer Präposition steht immer -ing.", deck:"Smalltalk", body:`
<p>Im Deutschen folgt nach vielen Verben ein Infinitiv mit „zu“: „Ich habe beschlossen, Englisch zu lernen“, „Ich freue mich darauf, dich zu sehen“. Im Englischen hängt es vom ersten Verb ab: Manche verlangen <b>to + Verb</b>, andere die <b>-ing-Form (Gerundium)</b>. Deshalb ist <i>I enjoy to cook</i> einer der häufigsten Fehler.</p>
<div class="tbl"><table><tr><th>Mit to</th><th>Mit -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + Verb</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Ich will nach Hause}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Ich muss lernen}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Ich möchte bestellen}}{{ex:She decided to learn English.|/ʃi dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Sie hat beschlossen, Englisch zu lernen}}
<h3>-ing-Form</h3>
<p>Diese Verben verlangen -ing wegen einer Regel, nicht wegen ihrer Bedeutung: <i>enjoy</i> (gern tun, genießen), <i>finish</i> (mit etwas fertig werden), <i>mind</i> (etwas ausmachen). Lerne sie als Liste.</p>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Ich koche gern}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|Ich bin mit der Arbeit fertig}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Es macht mir nichts aus zu warten}}
<h3>Nach einer Präposition immer -ing</h3>
<p>Wo das Deutsche „vor dem Gehen“ oder „darauf, … zu“ sagt, steht im Englischen nach einer Präposition die -ing-Form. Vorsicht bei <i>looking forward to</i>: Hier ist <i>to</i> eine Präposition, also <i>to seeing</i>, nicht <i>to see</i>.</p>
{{ex:before leaving|/bɪfɔːr ˈliːvɪŋ/|bevor ich gehe}}{{ex:I'm interested in learning English.|/aɪm ˈɪntrəstɪd ɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ/|Ich interessiere mich dafür, Englisch zu lernen}}{{ex:I'm looking forward to seeing you.|/aɪm ˈlʊkɪŋ ˈfɔːrwərd tə ˈsiːɪŋ ju/|Ich freue mich darauf, dich zu sehen}}
<h3>want + Person + to</h3>
<p>„Ich will, dass du kommst“ ist nicht <i>I want that you come</i>, sondern <b>I want you to come</b>.</p>
{{ex:I want you to come.|/aɪ ˈwɑːnt ju tə ˈkʌm/|Ich will, dass du kommst}}
<p><i>like, love</i> und <i>start</i> gehen mit beiden Formen.</p>
<div class="tip">Typische Fehler: <b>I want go</b>, <b>I enjoy to cook</b>, <b>I want that you come</b>, <b>before to leave</b> ✗ → <b>I want to go</b>, <b>I enjoy cooking</b>, <b>I want you to come</b>, <b>before leaving</b> ✓. Und vergiss das -s nicht: <b>She enjoys cooking</b>.</div>`,
check:[["I want ___ home. Was passt in die Lücke?",["go","going","to go","to going"],2,"Nach \"want\" folgt \"to\" + Verb."],["I enjoy ___ movies. Was passt in die Lücke?",["watching","to watch","watch","to watching"],0,"Nach \"enjoy\" folgt die -ing-Form."],["„Ich möchte bestellen“ auf Englisch:",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Nach \"would like\" folgt \"to\" + Verb."]],
practice:[
["mc","I need ___ now. Was passt in die Lücke?","to go","going","go","to going","Nach \"need\" folgt \"to\" + Verb."],
["mc","I enjoy ___. Was passt in die Lücke?","cooking","to cook","cook","to cooking","Nach \"enjoy\" folgt die -ing-Form: \"I enjoy to cook\" ist falsch."],
["mc","Wie sagt man „Ich möchte bestellen“?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Nach \"would like\" folgt \"to\" + Verb."],
["mc","Wie sagt man „Ich freue mich darauf, dich zu sehen“?","I'm looking forward to seeing you.","I'm looking forward to see you.","I'm looking forward seeing you.","I'm looking forward for see you.","Hier ist \"to\" eine Präposition, deshalb folgt die -ing-Form."],
["mc","Wie sagt man „Ich will, dass du kommst“?","I want you to come.","I want that you come.","I want you come.","I want that you to come.","„Wollen, dass jemand etwas tut“ ist \"want\" + Person + \"to\"."],
["or","Sie kocht gern","She enjoys cooking","enjoy","Mit \"she\" bekommt \"enjoys\" ein -s (3. Person); danach folgt die -ing-Form."],
["or","Willst du mitkommen?","Do you want to come","Are","Die Frage im simple present braucht das Hilfsverb \"do\"."],
["or","Ich interessiere mich dafür, Englisch zu lernen","I'm interested in learning English","learn","Nach einer Präposition (\"in\") folgt die -ing-Form."],
["fi","I want __ a coffee.","Ich will einen Kaffee trinken","to have|to drink|to get","have|having|drinking","Nach \"want\" folgt \"to\" + Verb."],
["fi","She enjoys __.","Sie schwimmt gern","swimming","to swim|swim|swims","\"Enjoy\" verlangt die -ing-Form."],
["fi","I decided __ English.","Ich habe beschlossen, Englisch zu lernen","to study|to learn","study|studying|studied","Nach \"decide\" folgt \"to\" + Verb."],
["ty","Kochst du gern? (mit \"like\")","Do you like cooking|Do you like to cook","like · cook – Frage mit dem Hilfsverb","Are","Die Frage im simple present braucht das Hilfsverb \"do\"; \"like\" geht mit -ing oder \"to\"."],
["ty","Sie liest gern (mit \"enjoy\")","She enjoys reading","enjoy · read – mit -s und -ing-Form","enjoy","Mit \"she\" bekommt \"enjoys\" ein -s (3. Person), danach folgt die -ing-Form."],
["ty","Ich will, dass du kommst","I want you to come","want · you · come – der Satz ohne \"that\"","that","„Ich will, dass du kommst“ heißt \"I want you to come\", ohne \"that\"."]]},
{ id:"articles-2", title:"Artikel 2: Allgemeines ohne the", blurb:"Life is hard, I love music: Allgemeines steht im Englischen ohne Artikel. Dazu ein Überblick, wann the doch steht.", deck:"Reisen (Flughafen und Hotel)", body:`
<p>Beim Plural ist es im Deutschen wie im Englischen: „<b>Hunde</b> sind süß“, „Ich mag <b>Katzen</b>“ – kein Artikel, genau wie <i>Dogs are cute</i>. Die Falle sind <b>abstrakte und allgemeine Begriffe im Singular</b>: Im Deutschen sagst du oft „<b>Das</b> Leben ist hart“, „<b>die</b> Natur“, „<b>die</b> Liebe“. Im Englischen steht dort <b>kein Artikel</b>.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|Das Leben ist hart}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Ich liebe Hunde}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|Kaffee ist teuer}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|Hunde sind süß}}
<p>Das gilt für abstrakte Nomen (<i>love, music, time, nature, history</i>) und für nicht zählbare Nomen allgemein. Denk an die Übereinstimmung: Ein nicht zählbares Nomen oder ein Singular steht mit <i>is</i> (<i>Coffee is…</i>), ein Plural mit <i>are</i> (<i>Dogs are…</i>).</p>
<h3>Allgemein oder bestimmt</h3>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|Ich mag Hunde (allgemein)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|Die Hunde in diesem Park sind süß (genau diese)}}
<div class="tip"><b>I like the dogs</b> heißt „Ich mag die Hunde (diese da)“. Meinst du Hunde allgemein, sag <b>I like dogs</b>.</div>
<h3>Wann the steht</h3>
<div class="tbl"><table><tr><th>Fall</th><th>Beispiel</th></tr><tr><td>Etwas Einmaliges</td><td class="k">the sun, the internet</td></tr><tr><td>Musikinstrumente</td><td class="k">play the piano</td></tr><tr><td>Flüsse und Meere</td><td class="k">the Amazon, the Pacific</td></tr><tr><td>Länder mit Plural- oder Bundesnamen</td><td class="k">the United States, the Philippines</td></tr></table></div>
<p>Achtung bei Instrumenten: Im Deutschen sagst du „Ich spiele Klavier“ ohne Artikel, im Englischen meist <i>play the piano</i>.</p>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Ich spiele Klavier}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Sie kommt aus den USA}}
<h3>Ohne Artikel, obwohl das Deutsche einen hat</h3>
<div class="tbl"><table><tr><th>Fall</th><th>Beispiel</th></tr><tr><td>Mahlzeiten</td><td class="k">have breakfast, after lunch (nach dem Mittagessen)</td></tr><tr><td>Länder wie die Schweiz</td><td class="k">Switzerland, Turkey (die Schweiz, die Türkei)</td></tr><tr><td>Sportarten (wie im Deutschen)</td><td class="k">play soccer (Fußball spielen)</td></tr></table></div>
{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Ich spiele Fußball}}{{ex:I live in Switzerland.|/aɪ ˈlɪv ɪn ˈswɪtsərlənd/|Ich wohne in der Schweiz}}`,
check:[["I play ___ soccer. Was passt in die Lücke?",["a","the","an","(kein Artikel)"],3,"Sportarten stehen ohne Artikel, wie „Fußball spielen“: \"play soccer\"."],["She's from ___ United States. Was passt in die Lücke?",["the","a","an","(kein Artikel)"],0,"\"United States\" bekommt \"the\", wie „die USA“."],["„Hunde sind süß“ (allgemein) auf Englisch:",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"Allgemeines steht ohne Artikel und im Plural, wie im Deutschen."]],
practice:[
["mc","Wie sagt man „Das Leben ist hart“?","Life is hard.","The life is hard.","A life is hard.","Life are hard.","Allgemeines steht im Englischen ohne Artikel, anders als „das Leben“."],
["mc","Wie sagt man „Ich liebe die Musik“ (Musik allgemein)?","I love music.","I love the music.","I love a music.","I love musics.","Musik allgemein steht ohne Artikel und ohne -s."],
["mc","Wie sagt man „Ich spiele Fußball“?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Sportarten stehen ohne Artikel, wie im Deutschen."],
["mc","Wie sagt man „Katzen sind süß“ (allgemein)?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","Allgemeines steht ohne Artikel und im Plural."],
["mc","She's from ___ United States. Was passt in die Lücke?","the","a","an","some","\"United States\" bekommt \"the\"."],
["or","Hunde sind süß","Dogs are cute","is The","Allgemein: kein Artikel. Mit dem Plural \"dogs\" steht \"are\": Übereinstimmung von Subjekt und Verb."],
["or","Kaffee ist teuer","Coffee is expensive","are The","Allgemein: kein Artikel. \"Coffee\" ist nicht zählbar und steht mit \"is\": Übereinstimmung."],
["or","Ich spiele Klavier","I play the piano","a","Bei Instrumenten steht im Englischen \"the\", anders als im Deutschen."],
["fi","I speak __.","Ich spreche Englisch","English","the English|an English|a English","Sprachen stehen ohne Artikel, wie im Deutschen."],
["fi","The sun rises in __ east.","Die Sonne geht im Osten auf","the","a|an|some","Himmelsrichtungen bekommen \"the\", wie „im Osten“."],
["fi","I love __.","Ich liebe Musik","music","the musics|a music|musics","Musik allgemein steht ohne Artikel und ohne -s, weil sie nicht zählbar ist."],
["ty","Das Leben ist hart","Life is hard|Life is difficult","life · hard – kein Artikel","The","Allgemeines steht ohne Artikel, und \"life\" steht mit \"is\": Übereinstimmung."],
["ty","Sie spielt Gitarre","She plays the guitar|She plays guitar","play · guitar – mit dem Subjekt \"she\"","play","Mit \"she\" bekommt \"plays\" ein -s (3. Person); bei Instrumenten steht meist \"the\"."],
["ty","Mein Bruder liebt Musik","My brother loves music","brother · love · music – kein Artikel","the","„Mein Bruder“ = er, 3. Person: Das Verb bekommt ein -s, \"loves\". Musik allgemein steht ohne Artikel."]]},
{ id:"first-conditional", title:"if-Sätze Typ 1: if + Präsens, will", blurb:"„Wenn es regnet, bleibe ich zu Hause.“ Nach if steht das Präsens, nie will. Und „wenn“ ist mal if, mal when.", deck:"Arbeit und E-Mails", body:`
<p>Der <i>if</i>-Satz Typ 1 spricht über Dinge, die wirklich passieren können. Die Form ist <b>if + Präsens, will + Verb</b>. Das kennst du aus dem Deutschen: „Wenn es regnet, bleibe ich zu Hause“, nicht „Wenn es regnen wird“. Nach <i>if</i> steht kein <i>will</i>.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|Wenn es regnet, bleibe ich zu Hause}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Wenn du dich nicht beeilst, verpasst du den Bus}}
<p>Denk an die dritte Person: Auch nach <i>if</i> bekommt das Präsens ein -s (<i>If it rains</i>, <i>If she calls</i>), und die Verneinung braucht das Hilfsverb <i>don't/doesn't</i>.</p>
<h3>„Wenn“: if oder when?</h3>
<p>Das deutsche „wenn“ deckt zwei englische Wörter ab. <b>if</b> = falls, vielleicht passiert es. <b>when</b> = sobald, es passiert sicher. „Wenn ich nach Hause komme, rufe ich dich an“ heißt also <i>When I get home…</i>, denn du kommst ja sicher nach Hause. Auch nach <i>when</i> steht kein <i>will</i>.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Wenn ich nach Hause komme, rufe ich dich an}}
<h3>Die Reihenfolge kann wechseln</h3>
<p>Steht <i>if</i> im zweiten Teil, brauchst du kein Komma.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Ich helfe dir, wenn ich Zeit habe}}
<h3>Mit Imperativ</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Wenn du zu spät kommst, ruf mich an}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Wenn du Hilfe brauchst, sag Bescheid}}
<div class="tip">Typische Fehler: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓; <b>I'll tell him when I'll see him</b> ✗ → <b>I'll tell him when I see him</b> ✓. Und vergiss das -s nicht: <b>If she calls</b>, nicht <i>If she call</i>.</div>`,
check:[["If it ___ tomorrow, I'll stay home. Was passt in die Lücke?",["will rain","rains","rained","raining"],1,"Nach \"if\" steht das Präsens, wie „wenn es regnet“."],["If you study, you ___ pass. Was passt in die Lücke?",["pass will","passing","will pass","passed"],2,"Die Folge steht mit \"will\" + Verb."],["Welcher Satz ist richtig?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Nach \"if\" das Präsens, in der Folge \"will\"."]],
practice:[
["mc","If it ___, I'll stay home. Was passt in die Lücke?","rains","will rain","rained","is rain","Nach \"if\" steht das Präsens mit -s: \"it rains\"."],
["mc","If you're late, ___ me. Was passt in die Lücke?","call","will calling","calls","to call","Der Imperativ beginnt mit der Grundform des Verbs."],
["mc","Wie sagt man „Ich helfe dir, wenn ich Zeit habe“?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Nach \"if\" steht kein \"will\"."],
["mc","Wie sagt man „Wenn du dich nicht beeilst, verpasst du den Bus“?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Nach \"if\" steht das Präsens, verneint mit \"don't\"."],
["mc","Wie sagt man „Wenn ich nach Hause komme, rufe ich dich an“?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Es passiert sicher, also \"when\" – und auch nach \"when\" steht das Präsens."],
["or","Wenn es regnet, bleibe ich zu Hause","If it rains I'll stay home","rain will","Nach \"if\" steht das Präsens, und mit \"it\" bekommt das Verb ein -s: 3. Person."],
["or","Wenn sie anruft, sag mir Bescheid","If she calls let me know","call","Mit \"she\" bekommt \"calls\" ein -s (3. Person), auch nach \"if\"."],
["or","Wenn du Zeit hast, ruf mich an","If you have time call me","will","Nach \"if\" steht kein \"will\"."],
["fi","If it __ tomorrow, we'll cancel.","Wenn es morgen regnet, sagen wir ab","rains","will rain|rained|raining","Nach \"if\" steht das Präsens; mit \"it\": \"rains\" (3. Person)."],
["fi","If you study, you __ pass.","Wenn du lernst, bestehst du","will|can|might","are|did|passing","Die Folge steht mit \"will\" + Verb."],
["fi","__ you need help, call me.","Wenn du Hilfe brauchst, ruf mich an","If|When","So|But|Because","„Wenn“ heißt hier \"if\" (oder \"when\")."],
["ty","Wenn es regnet, nehme ich ein Taxi (mit \"if\")","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","rain · take · taxi – mit dem Subjekt \"it\"","will rain","Nach \"if\" steht das Präsens, und \"it rains\" hat das -s der 3. Person."],
["ty","Wenn sie nicht kommt, rufe ich dich an (mit \"if\")","If she doesn't come I'll call you|I'll call you if she doesn't come","come · call – Verneinung mit dem Hilfsverb","don't","Mit \"she\" braucht die Verneinung das Hilfsverb \"doesn't\"."],
["ty","Ich helfe dir, wenn ich Zeit habe (mit \"if\")","I'll help you if I have time|I'll help if I have time|If I have time I'll help you|If I have time I'll help","help · if · time – nach \"if\" kein \"will\"","will","Nach \"if\" steht kein \"will\"."]]},
{ id:"relative", title:"who, that, which: Relativsätze", blurb:"Im Deutschen der, die, das für alles; im Englischen who für Personen und which oder that für Dinge.", deck:"Einkaufen und Bezahlen", body:`
<p>Im Deutschen richtet sich das Relativpronomen nach dem Genus: „der Mann, <b>der</b> …“, „das Buch, <b>das</b> …“ – egal, ob Person oder Ding. Im Englischen zählt nur, <b>was</b> du beschreibst:</p>
<div class="tbl"><table><tr><th>Für</th><th>Relativpronomen</th><th>Beispiel</th></tr><tr><td>Personen</td><td class="k">who (oder that)</td><td>the man who lives next door</td></tr><tr><td>Dinge</td><td class="k">which (oder that)</td><td>the phone that I want</td></tr><tr><td>Orte</td><td class="k">where</td><td>the cafe where we met</td></tr></table></div>
<h3>Personen: who</h3>
{{ex:I have a friend who speaks Japanese.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˌdʒæpəˈniːz/|Ich habe eine Freundin, die Japanisch spricht}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|der Mann, der nebenan wohnt}}
<p>Achte auf die Übereinstimmung: <i>the man who <b>lives</b></i>. Das Verb richtet sich nach der Person, um die es geht; hier 3. Person mit -s.</p>
<h3>Dinge: which oder that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|das Buch, das ich gekauft habe}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|Das ist das Handy, das ich will}}{{ex:the bus which goes downtown|/ðə ˈbʌs wɪtʃ ˈgoʊz ˌdaʊnˈtaʊn/|der Bus, der in die Innenstadt fährt}}
<h3>Kein Komma, und das Pronomen darf wegfallen</h3>
<p>Im Deutschen steht vor jedem Relativsatz ein Komma. Im Englischen nicht, wenn der Relativsatz sagt, <b>welche</b> Person oder Sache gemeint ist: <i>the book that I bought</i>, ohne Komma. Und anders als im Deutschen kannst du das Relativpronomen weglassen, wenn danach ein Subjekt + Verb kommt (<i>we saw</i>). Im Gespräch macht man das fast immer.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|Der Film, den wir gesehen haben, war toll}}
<p>Ist das Relativpronomen selbst das Subjekt (<i>who lives</i>), darf es nicht wegfallen: <i>the man lives next door</i> heißt nicht „der Mann, der nebenan wohnt“.</p>
<h3>Orte: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|das Café, in dem wir uns kennengelernt haben}}
<div class="tip">Nimm nie <i>what</i> als Relativpronomen: <b>the book what I bought</b> und <b>everything what I know</b> ✗ → <b>the book (that) I bought</b>, <b>everything (that) I know</b> ✓. „Alles, was“ heißt <i>everything that</i> oder einfach <i>everything</i>.</div>`,
check:[["I have a friend ___ lives in Bogota. Was passt in die Lücke?",["which","who","what","he"],1,"Für Personen nimmst du \"who\"."],["„das Buch, das ich gekauft habe“ auf Englisch:",["the book who I bought","the book what I bought","the book that I bought","the book that I bought it"],2,"Für Dinge: \"that\" oder \"which\", nie \"what\"."],["Welcher Satz ist richtig?",["The man which lives next door is kind.","The man what lives next door is kind.","The man lives next door is kind.","The man who lives next door is kind."],3,"Für Personen \"who\"; und weil es das Subjekt ist, darf es nicht wegfallen."]],
practice:[
["mc","I have a friend ___ speaks English. Was passt in die Lücke?","who","which","what","she","Für Personen nimmst du \"who\"."],
["mc","Wie sagt man „das Buch, das ich gekauft habe“?","the book that I bought","the book who I bought","the book what I bought","the book that I bought it","Für Dinge: \"that\" oder \"which\", nie \"what\"."],
["mc","Wie sagt man „der Mann, der nebenan wohnt“?","the man who lives next door","the man who live next door","the man which lives next door","the man what lives next door","Person → \"who\", und \"lives\" stimmt mit \"the man\" überein (3. Person)."],
["mc","This is the phone ___ I want. Was passt in die Lücke?","that","who","what","it","Für Dinge nimmst du \"that\"."],
["mc","Wie sagt man „der Film, den wir gesehen haben“ (ohne Relativpronomen)?","the movie we saw","the movie what we saw","the movie who we saw","the movie we saw it","Folgt Subjekt + Verb, kannst du \"that\" weglassen."],
["or","Ich habe eine Freundin, die kocht","I have a friend who cooks","cook","„Eine Freundin“ = sie, 3. Person: \"cooks\" mit -s."],
["or","Er ist der Mann, der hier wohnt","He's the man who lives here","live","Das Verb stimmt mit \"the man\" überein: 3. Person, \"lives\"."],
["or","Das ist das Buch, das ich gekauft habe","This is the book I bought","what","Nimm nie \"what\" als Relativpronomen; hier darf es ganz wegfallen."],
["fi","the man __ lives here","der Mann, der hier wohnt","who|that","what|he|which","Für Personen: \"who\" (oder \"that\")."],
["fi","the book __ I read","das Buch, das ich gelesen habe","that|which","who|what|it","Für Dinge: \"that\" oder \"which\"."],
["fi","the cafe __ we met","das Café, in dem wir uns kennengelernt haben","where","who|what|it","Für Orte nimmst du \"where\"."],
["ty","Sie hat eine Freundin, die Japanisch spricht","She has a friend who speaks Japanese|She has a friend that speaks Japanese","friend · who · speak Japanese – mit der 3. Person","have","Mit \"she\" steht \"has\", und \"speaks\" stimmt mit \"a friend\" überein: 3. Person."],
["ty","Der Film, den wir gesehen haben, war toll","The movie we saw was great|The movie that we saw was great|The movie we saw was amazing|The movie that we saw was amazing","movie · we saw · great – das Relativpronomen ist optional","were","Du kannst \"that\" weglassen, und mit \"the movie\" (Singular) steht \"was\": Übereinstimmung."],
["ty","Das hier ist das Handy, das ich will","This is the phone I want|This is the phone that I want|This is the phone which I want","phone · I want – das Relativpronomen ist optional","what","Du kannst \"that\" weglassen: \"the phone I want\"."]]},
{ id:"make-do", title:"make oder do, say oder tell", blurb:"„Machen“ ist mal make, mal do (und manchmal take oder have), „sagen“ mal say, mal tell. Lerne die häufigsten Verbindungen.", deck:"Make und do", body:`
<p>Im Deutschen passt „machen“ fast immer. Im Englischen gibt es zwei Verben: <b>make</b> (etwas herstellen oder erschaffen) und <b>do</b> (eine Aufgabe oder Tätigkeit erledigen). Die Regel hilft, aber am meisten bringt es, die festen Verbindungen zu lernen.</p>
<div class="tbl"><table><tr><th>make</th><th>do</th></tr><tr><td class="k">a mistake, a decision, friends, dinner, money, a plan</td><td class="k">homework, the dishes, business, exercise, a favor, your best</td></tr></table></div>
<h3>make: herstellen, erschaffen</h3>
{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|Ich habe einen Fehler gemacht}}{{ex:We need to make a decision.|/wi ˈniːd tə ˈmeɪk ə dɪˈsɪʒn/|Wir müssen eine Entscheidung treffen}}{{ex:She makes friends easily.|/ʃi ˈmeɪks ˈfrendz ˈiːzəli/|Sie findet leicht Freunde}}{{ex:I'll make dinner.|/aɪl ˈmeɪk ˈdɪnər/|Ich mache das Abendessen}}
<h3>do: Aufgaben und Tätigkeiten</h3>
{{ex:I do my homework after school.|/aɪ ˈduː maɪ ˈhoʊmwɜːrk æftər ˈskuːl/|Ich mache meine Hausaufgaben nach der Schule}}{{ex:He does the dishes every day.|/hi ˈdʌz ðə ˈdɪʃɪz ˈevri ˈdeɪ/|Er spült jeden Tag ab}}{{ex:We do business in Germany.|/wi ˈduː ˈbɪznəs ɪn ˈdʒɜːrməni/|Wir machen Geschäfte in Deutschland}}{{ex:Can you do me a favor?|/kən ju ˈduː mi ə ˈfeɪvər/|Kannst du mir einen Gefallen tun?}}
<p>Achtung: <i>do</i> ist auch das Hilfsverb für Fragen, deshalb steht es manchmal zweimal. Bei <i>he, she, it</i> heißt das Hilfsverb <b>does</b> (3. Person), das Vollverb bleibt <i>do</i>.</p>
{{ex:What does she do?|/ˈwʌt dəz ʃi ˈduː/|Was macht sie beruflich?}}
<h3>Weder make noch do</h3>
<p>Viele deutsche Verbindungen mit „machen“ brauchen im Englischen ein ganz anderes Verb:</p>
<div class="tbl"><table><tr><th>Deutsch</th><th>Englisch</th></tr><tr><td>ein Foto machen</td><td class="k">take a photo</td></tr><tr><td>einen Kurs machen</td><td class="k">take a course</td></tr><tr><td>eine Party machen</td><td class="k">have a party</td></tr><tr><td>Erfahrungen machen</td><td class="k">have experiences</td></tr><tr><td>Urlaub machen</td><td class="k">go on vacation</td></tr><tr><td>Das macht Spaß.</td><td class="k">It's fun.</td></tr></table></div>
<h3>say oder tell</h3>
<p>Auch „sagen“ teilt sich auf. Nach <b>tell</b> folgt direkt die Person (<i>tell me</i>); nach <b>say</b> nicht, oder nur mit <i>to</i> (<i>say to me</i>). „Er hat mir gesagt“ ist also <i>He told me</i>, nicht <i>He said me</i>.</p>
{{ex:She said hello.|/ʃi ˈsed həˈloʊ/|Sie hat Hallo gesagt}}{{ex:He told me the truth.|/hi ˈtoʊld mi ðə ˈtruːθ/|Er hat mir die Wahrheit gesagt}}{{ex:Tell me your name.|/ˈtel mi jʊr ˈneɪm/|Sag mir deinen Namen}}{{ex:What did he say?|/ˈwʌt dɪd hi ˈseɪ/|Was hat er gesagt?}}
<div class="tip">Typische Fehler: <b>do a mistake</b>, <b>make homework</b>, <b>make a photo</b>, <b>He said me</b> ✗ → <b>make a mistake</b>, <b>do homework</b>, <b>take a photo</b>, <b>He told me</b> ✓.</div>`,
check:[["„Ich habe einen Fehler gemacht“ auf Englisch:",["I did a mistake.","I made a mistake.","I had a mistake.","I committed a mistake."],1,"„Einen Fehler machen“ ist \"make a mistake\"."],["„Er hat mir die Wahrheit gesagt“ auf Englisch:",["He told me the truth.","He said me the truth.","He told to me the truth.","He say me the truth."],0,"Folgt direkt die Person (\"me\"), nimmst du \"tell\": \"told me\"."],["He ___ the dishes every night. Was passt in die Lücke?",["makes","make","does","do"],2,"Hausarbeit steht mit \"do\", und mit \"he\" heißt es \"does\" (3. Person)."]],
practice:[
["mc","Wie sagt man „eine Entscheidung treffen“?","make a decision","do a decision","get a decision","say a decision","„Eine Entscheidung treffen“ ist \"make a decision\"."],
["mc","Wie sagt man „Hausaufgaben machen“?","do homework","make homework","do homeworks","make a homework","Aufgaben stehen mit \"do\", und \"homework\" ist nicht zählbar – kein -s, anders als „Hausaufgaben“."],
["mc","Wie sagt man „Freunde finden“?","make friends","do friends","make a friends","do the friends","Eine Freundschaft aufbauen heißt \"make friends\"."],
["mc","Wie sagt man „Sie hat mir ihren Namen gesagt“?","She told me her name.","She said me her name.","She told to me her name.","She say me her name.","Folgt direkt die Person (\"me\"), nimmst du \"told\"."],
["mc","„Was macht sie beruflich?“ auf Englisch:","What does she do?","What does she does?","What she does?","What do she do?","Die Frage braucht das Hilfsverb \"does\" (3. Person) und das Vollverb \"do\"."],
["or","Sie spült ab","She does the dishes","do makes","Hausarbeit steht mit \"do\"; mit \"she\" heißt es \"does\" (3. Person)."],
["or","Was hat er gesagt?","What did he say","said","In der Frage im simple past steht das Hilfsverb \"did\", und das Verb steht wieder in der Grundform \"say\"."],
["or","Er hat mir die Wahrheit gesagt","He told me the truth","said","Folgt direkt die Person (\"me\"), nimmst du \"tell\"."],
["fi","I __ a mistake.","Ich habe einen Fehler gemacht","made","did|do|said","„Einen Fehler machen“ ist \"make a mistake\"."],
["fi","Can you __ me a favor?","Kannst du mir einen Gefallen tun?","do","make|tell|say","„Einen Gefallen tun“ heißt \"do a favor\"."],
["fi","Please __ me your name.","Sag mir bitte deinen Namen","tell","say|make|do","Folgt direkt die Person (\"me\"), nimmst du \"tell\"."],
["ty","Er macht jeden Abend seine Hausaufgaben","He does his homework every night|He does homework every night|He does his homework every evening","homework · every night – das Subjekt ist 3. Person","makes","Aufgaben stehen mit \"do\", und mit \"he\" heißt es \"does\" (3. Person)."],
["ty","Hast du eine Entscheidung getroffen?","Did you make a decision|Have you made a decision","make · decision – Frage mit dem Hilfsverb","do","In der Frage im simple past steht das Hilfsverb \"did\" vor dem Subjekt, und „Entscheidung“ geht mit \"make\"."],
["ty","Sie hat mir ihren Namen gesagt","She told me her name|She said her name","told · name – \"tell\" mit der Person danach","said","Folgt direkt die Person (\"me\"), nimmst du \"tell\"."]]},
];

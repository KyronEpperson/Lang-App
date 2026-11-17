/* de-en stage B1: lessons for German speakers (Germany). English side shared with es-en (parity.js).
   Contrasts follow docs/profiles/de.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2: for, since und „seit“", blurb:"Etwas hat in der Vergangenheit begonnen und dauert bis heute. „Seit“ heißt for + Zeitraum oder since + Zeitpunkt.", deck:"Sich vorstellen", body:`
<p>Die zweite Verwendung des present perfect: etwas hat <b>in der Vergangenheit begonnen und dauert noch an</b>. Das Deutsche nimmt hier das Präsens mit „seit“ („Ich wohne seit 2020 hier“, „Ich arbeite seit drei Jahren hier“). Im Englischen brauchst du <b>have/has + Partizip</b>.</p>
{{ex:I've lived in Munich for five years.|/aɪv ˈlɪvd ɪn ˈmjuːnɪk fər ˈfaɪv ˈjɪrz/|Ich wohne seit fünf Jahren in München}}{{ex:She has worked here since 2020.|/ʃi həz ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Sie arbeitet seit 2020 hier}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Ich kenne sie schon lange}}
<h3>for und since</h3>
<p>„Seit“ hat im Englischen zwei Übersetzungen:</p>
<div class="tbl"><table><tr><th>for + Zeitraum („seit drei Jahren“)</th><th>since + Zeitpunkt („seit 2020“)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>„vor“ heißt ago</h3>
<p>„Vor zwei Jahren“ ist ein abgeschlossener Zeitpunkt: <i>two years ago</i>, mit dem simple past. Nie <i>before two years</i>.</p>
{{ex:I moved here two years ago.|/aɪ ˈmuːvd ˈhɪr ˈtuː ˈjɪrz əˈgoʊ/|Ich bin vor zwei Jahren hierhergezogen}}
<h3>How long…?</h3>
<p>„Seit wann…?“ oder „Wie lange schon…?“ fragst du mit <i>How long have you…?</i>; das Hilfsverb steht vor dem Subjekt. Bei <i>he, she, it</i> heißt es <i>has</i>. Nie <i>How long are you here?</i></p>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Wie lange bist du schon hier?}}{{ex:How long has she studied English?|/ˈhaʊ ˈlɔːŋ həz ʃi ˈstʌdid ˈɪŋglɪʃ/|Seit wann lernt sie Englisch?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Ich bin gerade fertig geworden}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Den habe ich schon gesehen}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Hast du schon gegessen?}}
<p>Im amerikanischen Englisch sagt man auch <i>Did you eat yet?</i> und <i>I already saw it</i>; beides ist richtig.</p>
<div class="tip">Die typischen deutschen Fehler: <b>I live here since 2020.</b> ✗ → <b>I've lived here since 2020.</b> ✓; <b>since three years</b> ✗ → <b>for three years</b> ✓; <b>before two years</b> ✗ → <b>two years ago</b> ✓.</div>`,
check:[["I've lived here ___ three years. Was passt in die Lücke?",["since","for","during","from"],1,"„Seit“ + Zeitraum ist \"for\"."],["I've worked here ___ 2020. Was passt in die Lücke?",["for","in","since","at"],2,"„Seit“ + Zeitpunkt ist \"since\"."],["„Wie lange bist du schon hier?“ auf Englisch:",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"Die Form ist \"How long have you\" + Partizip."]],
practice:[
["mc","I've known him ___ ten years. Was passt in die Lücke?","for","since","from","during","„Seit“ + Zeitraum ist \"for\"."],
["mc","She's lived here ___ 2019. Was passt in die Lücke?","since","for","in","at","„Seit“ + Zeitpunkt ist \"since\"."],
["mc","„Wie lange bist du schon hier?“ auf Englisch:","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","In der Frage steht das Hilfsverb \"have\" vor dem Subjekt."],
["mc","Wie sagt man „Ich bin gerade fertig geworden“?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","Die Form ist \"have\" + \"just\" + Partizip."],
["mc","„Hast du schon gegessen?“ auf Englisch:","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","In Fragen heißt „schon“ meist \"yet\", am Satzende."],
["or","Sie wohnt seit 2020 hier","She has lived here since 2020","have","Mit \"she\" heißt das Hilfsverb \"has\": 3. Person."],
["or","Wie lange wohnst du schon hier?","How long have you lived here","has live","Mit \"you\" heißt das Hilfsverb \"have\" (Übereinstimmung) und steht vor dem Subjekt; danach das Partizip \"lived\", nicht das Präsens."],
["or","Ich wohne seit fünf Jahren hier","I've lived here for five years","since","„Seit“ + Zeitraum ist \"for\", nicht \"since\"."],
["fi","I've worked here __ two years.","Ich arbeite seit zwei Jahren hier","for","since|from|during","„Seit“ + Zeitraum ist \"for\"."],
["fi","I've been here __ Monday.","Ich bin seit Montag hier","since","for|at|during","„Seit“ + Zeitpunkt ist \"since\"."],
["fi","Have you finished __?","Bist du schon fertig?","yet|already","ever|never|since","In Fragen heißt „schon“ meist \"yet\"."],
["ty","Wie lange ist sie schon hier?","How long has she been here","how long · been · here – Frage mit dem Hilfsverb","is","Mit \"she\" heißt das Hilfsverb \"has\" (3. Person), und es steht vor dem Subjekt."],
["ty","Mein Bruder arbeitet seit 2021 hier","My brother has worked here since 2021|My brother has been working here since 2021","work · here · since – das Subjekt ist 3. Person","works","„Mein Bruder“ = er, 3. Person: \"has\" + Partizip, nicht das Präsens wie im Deutschen."],
["ty","Ich wohne seit drei Jahren hier","I've lived here for three years|I've been living here for three years","live · here · three years – mit \"for\"","since","„Seit“ + Zeitraum ist \"for\", mit dem present perfect."]]},
{ id:"narrative", title:"Erzählzeiten: simple past, past progressive und past perfect", blurb:"Der Hintergrund steht im past progressive, die Ereignisse im simple past, und was vorher geschah, mit had + Partizip.", deck:"Filme, Serien und Slang", body:`
<p>Im Deutschen mischst du beim Erzählen Perfekt und Präteritum fast nach Belieben. Im Englischen hat jede Zeitform ihre feste Aufgabe:</p>
<div class="tbl"><table><tr><th>Zeitform</th><th>Aufgabe</th><th>Beispiel</th></tr><tr><td class="k">past progressive („ich ging gerade“)</td><td>der Hintergrund, was gerade passierte</td><td>I was walking home.</td></tr><tr><td class="k">simple past („ich sah“, „ich habe gesehen“)</td><td>was passierte</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect („ich hatte gesehen“)</td><td>was vorher passiert war</td><td>He had moved to Miami.</td></tr></table></div>
<p>Das wichtigste Erzähltempus ist das simple past, auch wo du auf Deutsch „ich habe … gesehen“ sagen würdest. Das present perfect hat in einer Geschichte nichts zu suchen.</p>
<h3>Hintergrund + Ereignis</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Ich war gerade auf dem Heimweg, als ich einen alten Freund sah}}
<h3>Past perfect: had + Partizip</h3>
<p>Entspricht dem Plusquamperfekt („hatte/war + Partizip“): etwas geschah <b>vor</b> einem anderen Moment in der Vergangenheit. <i>had</i> ist für alle Personen gleich, auch wo das Deutsche „war“ sagt: „Er war umgezogen“ → <i>He had moved</i>.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Als ich ankam, hatte der Film schon angefangen}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Ich hatte noch nie Schnee gesehen}}
<h3>Wörter für die Reihenfolge</h3>
<p><i>first</i> (zuerst), <i>then</i> (dann), <i>after that</i> (danach), <i>finally</i> (schließlich).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Zuerst haben wir zu Abend gegessen. Dann haben wir einen Film gesehen}}
<h3>Fragen und Verneinungen</h3>
<p>Im simple past brauchen Fragen und Verneinungen das Hilfsverb <i>did</i> + Grundform: <b>Did you see him?</b>, <b>I didn't see him</b>, nicht <i>Did you saw</i>. Im past progressive ist das Hilfsverb <i>was/were</i>, und es stimmt mit dem Subjekt überein.</p>
{{ex:What were you doing when I called?|/ˈwʌt wər ju ˈduːɪŋ wen aɪ ˈkɔːld/|Was hast du gerade gemacht, als ich angerufen habe?}}{{ex:Did you see the movie?|/dɪd ju ˈsiː ðə ˈmuːvi/|Hast du den Film gesehen?}}
<div class="tip"><i>then</i> (dann) und <i>than</i> (als, beim Vergleich) klingen ähnlich, sind aber zwei Wörter. Zum Erzählen nimmst du <b>then</b>. Und nach einem Zeitwort am Satzanfang bleibt die Satzstellung normal: <b>Then we watched a movie</b>, nicht <i>Then watched we a movie</i>.</div>`,
check:[["When I arrived, the train ___ already left. Was passt in die Lücke?",["has","was","had","did"],2,"Was vorher geschah, steht mit \"had\" + Partizip."],["I ___ walking home when it started to rain. Was passt in die Lücke?",["was","had","did","have"],0,"Der Hintergrund steht im past progressive."],["Welcher Satz beschreibt etwas, das vor einem anderen Moment in der Vergangenheit geschah?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"Had\" + Partizip ist das past perfect."]],
practice:[
["mc","When I got there, the movie ___ already started. Was passt in die Lücke?","had","has","was","did","Was vorher geschah, steht mit \"had\" + Partizip."],
["mc","I ___ cooking when the phone rang. Was passt in die Lücke?","was","had","did","have","Der Hintergrund steht im past progressive."],
["mc","Wie sagt man „Als ich ankam, war der Zug schon abgefahren“?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Was vorher geschah, steht mit \"had\" + Partizip – auch wo das Deutsche „war“ sagt."],
["mc","Die Geschichte geht weiter: Wie sagt man „dann“?","then","than","that","them","\"Then\" heißt „dann“; \"than\" steht beim Vergleich („als“)."],
["mc","Wie sagt man „Ich hatte noch nie Schnee gesehen“?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","Die Form ist \"had\" + \"never\" + Partizip."],
["or","Hast du deinen Freund gesehen?","Did you see your friend","saw","In der Frage im simple past steht das Hilfsverb \"did\" und die Grundform \"see\"."],
["or","Sie war gerade auf dem Heimweg","She was walking home","were","Mit \"she\" steht \"was\": Übereinstimmung von Subjekt und Verb."],
["or","Der Zug war schon abgefahren","The train had already left","has","Was vorher geschah, steht mit \"had\" + Partizip."],
["fi","I was sleeping __ you called.","Ich habe gerade geschlafen, als du angerufen hast","when","than|so|had","„Als“ heißt hier \"when\"."],
["fi","The bus had already __.","Der Bus war schon abgefahren","left|gone","leave|leaving|leaves","Nach \"had\" folgt das Partizip."],
["fi","First we ate. __ we watched a movie.","Zuerst haben wir gegessen. Dann haben wir einen Film gesehen","Then|After that|Next","Than|Because|When","„Dann“ heißt \"then\"."],
["ty","Ich habe den Film nicht gesehen (im simple past)","I didn't see the movie|I didn't watch the movie","see · movie – Verneinung mit dem Hilfsverb","saw","Die Verneinung im simple past braucht das Hilfsverb \"didn't\" + Grundform: \"see\", nicht \"saw\"."],
["ty","Die beiden sahen gerade fern","They were watching TV|They were watching television","watch · TV – im past progressive","was","Mit \"they\" steht \"were\" + -ing: Übereinstimmung von Subjekt und Verb."],
["ty","Der Film hatte schon angefangen","The movie had already started|The movie had started already","movie · already · start – mit \"had\" + Partizip","has","Was vorher geschah, steht mit \"had\" + Partizip."]]},
{ id:"conditionals", title:"if-Sätze Typ 2 und 3: gedachte Situationen", blurb:"Wenn ich … hätte → if + simple past, would. Wenn ich … gehabt hätte → if + had + Partizip, would have.", deck:"Gefühle und Reaktionen", body:`
<p>Damit stellst du dir vor, was nicht wirklich ist. Das passt gut zum deutschen Konjunktiv II: „Wenn ich Zeit hätte, würde ich reisen“ und „Wenn ich gelernt hätte, hätte ich bestanden“. Der Unterschied: Im <i>if</i>-Teil steht im Englischen eine Vergangenheitsform und <b>nie would</b>.</p>
<h3>Typ 2: eine gedachte Gegenwart</h3>
<p><b>if + simple past, would + Verb</b>. „Wenn ich Zeit hätte“ → <i>If I had time</i>. Umgangssprachlich sagt man im Deutschen auch „Wenn ich Zeit haben würde“; im Englischen geht <i>If I would have time</i> nicht.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Wenn ich Zeit hätte, würde ich reisen}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|An deiner Stelle würde ich es nehmen}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Was würdest du tun?}}
<h3>Typ 3: eine gedachte Vergangenheit</h3>
<p><b>if + had + Partizip, would have + Partizip</b>. Das ist dasselbe Muster wie „Wenn ich gelernt hätte, hätte ich bestanden“.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Wenn ich gelernt hätte, hätte ich bestanden}}
<h3>Bedauern: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Ich hätte anrufen sollen}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Ich wünschte, ich hätte mehr Zeit}}
<div class="tbl"><table><tr><th>Typ</th><th>if-Teil</th><th>Folge</th></tr><tr><td>1 (möglich)</td><td class="k">Präsens</td><td class="k">will</td></tr><tr><td>2 (gedacht, jetzt)</td><td class="k">simple past</td><td class="k">would</td></tr><tr><td>3 (gedacht, Vergangenheit)</td><td class="k">had + Partizip</td><td class="k">would have + Partizip</td></tr></table></div>
<h3>Fragen und Subjekt</h3>
<p>In Fragen steht das Hilfsverb <i>would</i> vor dem Subjekt, wie „Würdest du…?“. Und wie „es“ im Deutschen braucht auch der englische Satz ein Subjekt: „Das wäre toll“ → <i>It would be great</i>.</p>
{{ex:Would you move to another country?|/wəd ju ˈmuːv tu əˈnʌðər ˈkʌntri/|Würdest du in ein anderes Land ziehen?}}{{ex:It would be great.|/ɪt wəd bi ˈgreɪt/|Das wäre toll}}
<div class="tip"><i>If I were you</i> („an deiner Stelle“, wörtlich „wenn ich du wäre“) ist eine feste Wendung: Auch bei <i>I</i> steht <b>were</b>. Und nie <i>would</i> nach <i>if</i>: <b>If I would have time</b> ✗ → <b>If I had time</b> ✓.</div>`,
check:[["If I ___ rich, I would travel. Was passt in die Lücke?",["am","were","will be","would be"],1,"Für eine gedachte Gegenwart steht nach \"if\" die Vergangenheit (\"were\")."],["If I had studied, I ___ passed. Was passt in die Lücke?",["would","will have","would have","had"],2,"Für eine gedachte Vergangenheit: \"would have\" + Partizip."],["„Ich hätte anrufen sollen“ auf Englisch:",["I should have called.","I should called.","I should had call.","I would call should."],0,"Bedauern: \"should have\" + Partizip."]],
practice:[
["mc","If I ___ time, I would help. Was passt in die Lücke?","had","have","will have","would have","Gedachte Gegenwart: Nach \"if\" steht die Vergangenheit, nicht \"would\"."],
["mc","Wie sagt man „An deiner Stelle würde ich es kaufen“?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" ist eine feste Wendung."],
["mc","If I had known, I ___ come. Was passt in die Lücke?","would have","would","will have","had","Für eine gedachte Vergangenheit: \"would have\" + Partizip."],
["mc","Wie sagt man „Ich hätte anrufen sollen“?","I should have called.","I should called.","I should had call.","I must called.","Bedauern: \"should have\" + Partizip."],
["mc","„Was würdest du tun?“ auf Englisch:","What would you do?","What will you did?","What would you did?","What you would do?","In der Frage steht das Hilfsverb \"would\" vor dem Subjekt."],
["or","Würdest du mir helfen?","Would you help me","Do","In der Frage steht das Hilfsverb \"would\" vor dem Subjekt."],
["or","Wo würdest du wohnen?","Where would you live","will","Nach dem Fragewort steht das Hilfsverb \"would\" vor dem Subjekt."],
["or","Wenn ich Zeit hätte, würde ich reisen","If I had time I'd travel","have will","Nach \"if\" steht die Vergangenheit (\"had\"), weder \"will\" noch \"would\"."],
["fi","If I __ you, I'd go.","An deiner Stelle würde ich hingehen","were|was","am|be|would be","\"If I were you\" ist eine feste Wendung."],
["fi","I would __ helped.","Ich hätte dir geholfen","have","had|has|having","Die Form ist \"would have\" + Partizip."],
["fi","I wish I __ more time.","Ich wünschte, ich hätte mehr Zeit","had","have|would have|will have","Nach \"I wish\" steht die Vergangenheit."],
["ty","Was würdest du tun?","What would you do","would · do – Frage mit dem Hilfsverb","will","In der Frage steht das Hilfsverb \"would\" vor dem Subjekt."],
["ty","Das wäre toll","It would be great|It'd be great|That would be great","great – mit dem Subjekt \"it\"","is","Wie im Deutschen braucht der Satz ein Subjekt: \"It would be great\"."],
["ty","An deiner Stelle würde ich hingehen (mit \"if\")","If I were you I'd go|I'd go if I were you|If I was you I'd go","if · were · go – eine feste Wendung","am","„An deiner Stelle“ heißt \"If I were you\", mit \"were\"."]]},
{ id:"passive", title:"Passiv: be + Partizip", blurb:"Wenn wichtig ist, was passiert ist, und nicht, wer es getan hat. Achtung: Das englische Passiv bildest du mit be, nicht mit „werden“.", deck:"Arbeit und E-Mails", body:`
<p>Das Passiv ist <b>be + Partizip Perfekt</b>. Du nimmst es, wenn du nicht weißt, wer etwas getan hat, oder wenn es egal ist.</p>
<p>Das Deutsche bildet das Passiv mit „werden“ („Hier wird Englisch gesprochen“) oder umgeht es mit „man“ („Man spricht Englisch“). Im Englischen ist das Hilfsverb <b>be</b>, nie <i>become</i>: <i>The house was built in 1990</i>, nicht <i>became built</i>. Und für Sätze mit „man“ nimmst du im Englischen oft das Passiv.</p>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Hier wird Englisch gesprochen}}{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Mein Handy wurde gestohlen}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Das Meeting wurde abgesagt}}
<h3>Übereinstimmung mit be</h3>
<p><i>be</i> stimmt mit dem Subjekt überein: Singular → <b>is/was</b>; Plural → <b>are/were</b>.</p>
{{ex:This was made in Germany.|/ˈðɪs wəz ˈmeɪd ɪn ˈdʒɜːrməni/|Das wurde in Deutschland hergestellt}}{{ex:These shoes were made in Italy.|/ˈðiːz ˈʃuːz wər ˈmeɪd ɪn ˈɪtəli/|Diese Schuhe wurden in Italien hergestellt}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Das Frühstück wird um sieben serviert}}
<h3>Wer es getan hat: by</h3>
<p>„Von“ heißt hier <i>by</i>, nicht <i>from</i>.</p>
{{ex:It was written by Kafka.|/ɪt wəz ˈrɪtn baɪ ˈkɑːfkə/|Es wurde von Kafka geschrieben}}
<h3>Aktiv und Passiv</h3>
<div class="tbl"><table><tr><th>Aktiv</th><th>Passiv</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Fragen</h3>
<p>In der Frage steht das Hilfsverb <i>is/was</i> vor dem Subjekt.</p>
{{ex:Is breakfast included?|/ɪz ˈbrekfəst ɪnˈkluːdɪd/|Ist das Frühstück inklusive?}}
<div class="tip">Typische Fehler: <i>be</i> vergessen (<b>My phone stolen</b> ✗), „werden“ übersetzen (<b>My phone became stolen</b> ✗) oder „man“ wörtlich nehmen (<b>Man speaks English here</b> ✗). Richtig: <b>My phone was stolen</b>, <b>English is spoken here</b> ✓.</div>`,
check:[["My bag ___ stolen yesterday. Was passt in die Lücke?",["is","was","did","has"],1,"Es ist gestern passiert: \"was\" + Partizip."],["This phone ___ made in Mexico. Was passt in die Lücke?",["was","did","has","does"],0,"Das Passiv ist \"be\" + Partizip."],["„Das Meeting wurde abgesagt“ auf Englisch:",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Die Form ist \"be\" + das Partizip \"canceled\"."]],
practice:[
["mc","My phone ___ stolen. Was passt in die Lücke?","was","did","has","is steal","Das Passiv ist \"be\" + Partizip."],
["mc","Wie sagt man „Das wurde in Mexiko hergestellt“?","This was made in Mexico.","This made in Mexico.","This was make in Mexico.","This did made in Mexico.","Die Form ist \"be\" + das Partizip \"made\"."],
["mc","Wie sagt man „Hier wird Englisch gesprochen“?","English is spoken here.","Here speaks English.","English is speak here.","English speaks here.","„Wird … gesprochen“ ist \"is\" + Partizip: \"be\", nicht „werden“."],
["mc","Wie sagt man „Das Meeting wurde abgesagt“?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Die Form ist \"be\" + Partizip."],
["mc","Wie sagt man „Diese Schuhe wurden in Italien hergestellt“?","These shoes were made in Italy.","These shoes was made in Italy.","These shoes made in Italy.","These shoes were make in Italy.","Bei einem Subjekt im Plural steht \"were\": Übereinstimmung."],
["or","Meine Koffer wurden gestohlen","My bags were stolen","was","Mit dem Plural \"bags\" steht \"were\": Übereinstimmung."],
["or","Hier wird Englisch gesprochen","English is spoken here","are speaks","Mit \"English\" (Singular) steht \"is\" + Partizip: Übereinstimmung."],
["or","Das Meeting wurde abgesagt","The meeting was canceled","did","Das Passiv bildest du mit \"be\" + Partizip, nicht mit \"did\"."],
["fi","This was __ in Mexico.","Das wurde in Mexiko hergestellt","made","make|making|makes","Nach \"be\" folgt das Partizip."],
["fi","The room __ cleaned every day.","Das Zimmer wird jeden Tag geputzt","is|gets","does|has|did","Für etwas Regelmäßiges: \"is\" + Partizip."],
["fi","It was written __ Isabel Allende.","Es wurde von Isabel Allende geschrieben","by","from|of|with","Wer es getan hat, steht mit \"by\" („von“)."],
["ty","Mein Handy wurde gestohlen","My phone was stolen|My phone got stolen|My cell phone was stolen","phone · steal – im Passiv","stole","Mit \"my phone\" (Singular) steht \"was\" + Partizip: Übereinstimmung."],
["ty","Ist das Frühstück inbegriffen?","Is breakfast included|Is the breakfast included","breakfast · include – Frage mit dem Hilfsverb","Does","In der Frage steht das Hilfsverb \"is\" vor dem Subjekt."],
["ty","Die Tür war abgeschlossen","The door was locked","door · lock – im Passiv","were","Mit \"the door\" (Singular) steht \"was\": Übereinstimmung."]]},
{ id:"reported", title:"Indirekte Rede: erzählen, was jemand gesagt hat", blurb:"She said she was tired. Die Zeitform rückt einen Schritt zurück, und nach tell folgt immer die Person.", deck:"Telefon und Abkürzungen", body:`
<p>Mit der indirekten Rede gibst du wieder, was jemand gesagt hat. Im Deutschen nimmst du dafür den Konjunktiv I („Sie sagte, sie sei müde“) oder im Gespräch einfach den Indikativ. Im Englischen gibt es keinen Konjunktiv dafür: Stattdessen <b>rückt die Zeitform einen Schritt in die Vergangenheit</b>.</p>
<div class="tbl"><table><tr><th>Direkte Rede</th><th>Indirekte Rede</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Sie sagte, sie sei müde}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Er sagte, er würde kommen}}
<h3>say oder tell</h3>
<p>Beide heißen „sagen“, aber nach <b>tell</b> folgt direkt die Person (<i>told me</i>), nach <b>say</b> nicht (<i>said</i> oder <i>said to me</i>). „Er hat mir gesagt“ ist also <i>He told me</i>; <i>He said me</i> ist einer der häufigsten Fehler.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Er hat mir gesagt, er habe zu tun}}{{ex:She said there was a problem.|/ʃi ˈsed ðer wəz ə ˈprɑːbləm/|Sie sagte, es gebe ein Problem}}
<p>Beachte das zweite Beispiel: „es gibt“ heißt <i>there is</i>, in der indirekten Rede <i>there was</i>, und das Verb stimmt mit dem überein, was danach kommt. Nie <i>it gave</i>.</p>
<h3>Fragen in der indirekten Rede</h3>
<p>Ja/Nein-Fragen gibst du mit <b>if</b> wieder (wie „ob“). Bei einem Fragewort wiederholst du es. In beiden Fällen gilt die Satzstellung eines Aussagesatzes (Subjekt + Verb), und <b>do/did fällt weg</b>.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Sie hat gefragt, ob es mir gut geht}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Er hat gefragt, wo ich wohne}}
<div class="tip">Typische Fehler: <b>He said me…</b> ✗ → <b>He told me…</b> ✓; <b>He asked where did I live</b> ✗ → <b>He asked where I lived</b> ✓.</div>`,
check:[["She said she ___ tired. Was passt in die Lücke?",["is being","was","be","will"],1,"In der indirekten Rede rückt die Zeitform in die Vergangenheit."],["He ___ me he would come. Was passt in die Lücke?",["said","say","told","tell to"],2,"Folgt direkt die Person (\"me\"), steht \"told\"."],["„Er hat gefragt, wo ich wohne“ auf Englisch:",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"In einer indirekten Frage gilt die Satzstellung eines Aussagesatzes."]],
practice:[
["mc","She said she ___ busy. Was passt in die Lücke?","was","is being","be","were being","In der indirekten Rede rückt die Zeitform in die Vergangenheit."],
["mc","He ___ me he was late. Was passt in die Lücke?","told","said","say","tells to","Folgt direkt die Person, nimmst du \"told\"."],
["mc","Wie sagt man „Er sagte, er würde kommen“?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" wird zu \"would\"."],
["mc","Wie sagt man „Sie hat gefragt, ob es mir gut geht“?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Ja/Nein-Fragen gibst du mit \"if\" („ob“) wieder."],
["mc","Wie sagt man „Er hat gefragt, wo ich wohne“?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","In einer indirekten Frage gilt die Satzstellung eines Aussagesatzes."],
["or","Sie sagte, sie sei müde","She said she was tired","told were","Mit \"she\" steht \"was\": Übereinstimmung. Ohne Person danach: \"said\"."],
["or","Er hat mir gesagt, er habe zu tun","He told me he was busy","said","Folgt direkt die Person (\"me\"), nimmst du \"told\"."],
["or","Er sagte, es gebe ein Problem","He said there was a problem","were","Mit \"a problem\" (Singular) steht \"there was\": Übereinstimmung."],
["fi","She __ she was tired.","Sie sagte, sie sei müde","said","told|asked|say","Ohne Person danach steht \"said\"."],
["fi","He told __ he was busy.","Er hat mir gesagt, er habe zu tun","me","I|my|to","Nach \"told\" folgt die Person."],
["fi","She asked __ I was okay.","Sie hat gefragt, ob es mir gut geht","if|whether","that|what|did","Ja/Nein-Fragen gibst du mit \"if\" („ob“) wieder."],
["ty","Er sagte, es sei kalt","He said it was cold|He said that it was cold","said · cold – mit dem Subjekt \"it\"","is","Wie „es“ im Deutschen braucht der Satz ein Subjekt: \"it was cold\"."],
["ty","Er hat mir gesagt, er habe zu tun","He told me he was busy|He told me that he was busy|He said to me he was busy|He said to me that he was busy|He said he was busy|He said that he was busy","told · me · busy – \"tell\" mit der Person danach","said","Mit \"he\" steht \"was\" (3. Person), und mit der Person danach \"told\"."],
["ty","Sie hat mich gefragt, wo ich wohne (indirekte Rede)","She asked me where I lived|She asked where I lived","asked · where · lived – Satzstellung wie im Aussagesatz","did","In einer indirekten Frage gilt die Satzstellung eines Aussagesatzes, ohne \"did\"."]]},
];

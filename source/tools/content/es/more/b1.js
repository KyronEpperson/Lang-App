/* es-en stage B1: lessons for Spanish speakers (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Presente perfecto 2: for, since y «desde hace»", blurb:"Algo que empezó en el pasado y sigue hoy. For + duración, since + punto de inicio.", deck:"Presentarse", body:`
<p>El segundo uso del presente perfecto: algo que <b>empezó en el pasado y sigue ahora</b>. Aquí el español usa el presente («Vivo aquí desde 2020», «Trabajo aquí desde hace tres años»), pero el inglés necesita <b>have/has + participio</b>.</p>
{{ex:I've lived in Lima for five years.|aiv LIVD in LII-me fer FAIV IIRS|Vivo en Lima desde hace cinco años}}{{ex:She has worked here since 2020.|shi jas WERKT JIR sins TWEN-ti TWEN-ti|Ella trabaja aquí desde 2020}}{{ex:I've known her for a long time.|aiv NOUN jer fer e LONG TAIM|La conozco desde hace mucho}}
<h3>for y since</h3>
<div class="tbl"><table><tr><th>for + cuánto tiempo («desde hace»)</th><th>since + punto de inicio («desde»)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long…?</h3>
<p>«¿Cuánto tiempo llevas…?» se pregunta con <i>How long have you…?</i>, con el auxiliar antes del sujeto. Con <i>he, she, it</i>, el auxiliar es <i>has</i>.</p>
{{ex:How long have you been here?|JAU LONG jav iu BIN JIR?|¿Cuánto tiempo llevas aquí?}}{{ex:How long has she studied English?|JAU LONG jas shi STA-did ING-glish?|¿Cuánto tiempo lleva ella estudiando inglés?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|aiv DYAST FI-nisht|Acabo de terminar}}{{ex:I've already seen it.|aiv ol-RE-di SIIN it|Ya la vi}}{{ex:Have you eaten yet?|jav iu II-ten IET?|¿Ya comiste?}}
<p>En inglés americano también se dice <i>Did you eat yet?</i> y <i>I already saw it</i>; las dos formas son correctas.</p>
<div class="tip">El error típico de los hispanohablantes: <b>I live here since 2020.</b> ✗ → <b>I've lived here since 2020.</b> ✓. Y «desde hace» es <i>for</i>, no <i>since</i>: <b>for five years</b>.</div>`,
check:[["I've lived here ___ three years. ¿Qué va en el hueco?",["since","for","during","from"],1,"«Desde hace» + duración es \"for\"."],["I've worked here ___ 2020. ¿Qué va en el hueco?",["for","in","since","at"],2,"«Desde» + punto de inicio es \"since\"."],["«¿Cuánto tiempo llevas aquí?» en inglés:",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"Es \"How long have you\" + participio."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","«Desde hace» + duración es \"for\"."],
["mc","She's lived here ___ 2019.","since","for","in","at","«Desde» + punto de inicio es \"since\"."],
["mc","«¿Cuánto tiempo llevas aquí?» en inglés:","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","En la pregunta, el auxiliar \"have\" va antes del sujeto."],
["mc","¿Cómo se dice «Acabo de terminar»?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","Es \"have\" + \"just\" + participio."],
["mc","«¿Ya comiste?» en inglés:","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","En preguntas, «ya» suele ser \"yet\", al final."],
["or","Ella vive aquí desde 2020","She has lived here since 2020","have","Con \"she\" el auxiliar es \"has\": tercera persona."],
["or","¿Cuánto tiempo hace que vives aquí?","How long have you lived here","has live","Con \"you\" el auxiliar es \"have\" (concordancia) y va antes del sujeto; después, el participio \"lived\", no el presente."],
["or","Vivo aquí desde hace cinco años","I've lived here for five years","since","«Desde hace» + duración es \"for\", no \"since\"."],
["fi","I've worked here __ two years.","Trabajo aquí desde hace dos años","for","since|from|during","«Desde hace» + duración es \"for\"."],
["fi","I've been here __ Monday.","Estoy aquí desde el lunes","since","for|at|during","«Desde» + punto de inicio es \"since\"."],
["fi","Have you finished __?","¿Ya terminaste?","yet|already","ever|never|since","En preguntas, «ya» suele ser \"yet\"."],
["ty","¿Cuánto tiempo lleva ella aquí?","How long has she been here","how long · been · here — pregunta con el auxiliar","is","Con \"she\" el auxiliar es \"has\" (tercera persona), y va antes del sujeto."],
["ty","Mi hermano trabaja aquí desde 2021","My brother has worked here since 2021|My brother has been working here since 2021","work · here · since — con el sujeto en tercera persona","works","Con \"my brother\" (tercera persona) va \"has\" + participio, no el presente."],
["ty","Vivo aquí desde hace tres años","I've lived here for three years|I've been living here for three years","live · here · three years — con \"for\"","since","«Desde hace» + duración es \"for\", con presente perfecto."]]},
{ id:"narrative", title:"Tiempos para narrar: pasado simple, continuo y perfecto", blurb:"El fondo va en pasado continuo, los hechos en pasado simple y lo anterior con had + participio.", deck:"Cine, series y jerga", body:`
<p>Para contar una historia se mezclan tres tiempos verbales. Cada uno tiene su papel, y se parecen bastante a los del español:</p>
<div class="tbl"><table><tr><th>Tiempo</th><th>Papel</th><th>Ejemplo</th></tr><tr><td class="k">pasado continuo («estaba caminando»)</td><td>el fondo, lo que estaba pasando</td><td>I was walking home.</td></tr><tr><td class="k">pasado simple («vi»)</td><td>lo que pasó</td><td>I saw an old friend.</td></tr><tr><td class="k">pasado perfecto («había visto»)</td><td>lo que pasó antes</td><td>He had moved to Miami.</td></tr></table></div>
<h3>Fondo + hecho</h3>
{{ex:I was walking home when I saw an old friend.|ai wes WO-king JOUM wen ai SO en OULD FREND|Iba caminando a casa cuando vi a un viejo amigo}}
<h3>Pasado perfecto: had + participio</h3>
<p>Equivale a «había + participio»: algo que pasó <b>antes</b> de otro momento del pasado. <i>had</i> es igual para todas las personas.</p>
{{ex:When I arrived, the movie had already started.|wen ai e-RAIVD dhe MUU-vi jad ol-RE-di STAAR-tid|Cuando llegué, la película ya había empezado}}{{ex:I had never seen snow before.|ai jad NE-ver SIIN SNOU bi-FOR|Nunca había visto la nieve}}
<h3>Palabras para ordenar</h3>
<p><i>first</i> (primero), <i>then</i> (luego), <i>after that</i> (después de eso), <i>finally</i> (al final).</p>
{{ex:First we ate dinner. Then we watched a movie.|FERST wi EIT DI-ner. DHEN wi WAACHT e MUU-vi|Primero cenamos. Luego vimos una película}}
<h3>Preguntas y negaciones</h3>
<p>En pasado simple, las preguntas y negaciones llevan el auxiliar <i>did</i> + verbo base: <b>Did you see him?</b>, <b>I didn't see him</b>, no <i>Did you saw</i>. En pasado continuo, el auxiliar es <i>was/were</i>, que concuerda con el sujeto.</p>
{{ex:What were you doing when I called?|WAT wer iu DUU-ing wen ai KOLD?|¿Qué estabas haciendo cuando te llamé?}}{{ex:Did you see the movie?|did iu SII dhe MUU-vi?|¿Viste la película?}}
<div class="tip"><i>then</i> (luego) y <i>than</i> («que», en comparaciones) suenan parecido, pero son palabras distintas. Para narrar se usa <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. ¿Qué va en el hueco?",["has","was","had","did"],2,"Lo que pasó antes va con \"had\" + participio."],["I ___ walking home when it started to rain. ¿Qué va en el hueco?",["was","had","did","have"],0,"El fondo de la historia va en pasado continuo."],["¿Qué oración habla de algo que pasó antes de otro momento del pasado?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"Had\" + participio es el pasado perfecto."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","Lo que pasó antes va con \"had\" + participio."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","El fondo de la historia va en pasado continuo."],
["mc","¿Cómo se dice «Cuando llegué, el tren ya había salido»?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Lo que pasó antes va con \"had\" + participio."],
["mc","Para seguir la historia, ¿cómo se dice «luego»?","then","than","that","them","\"Then\" es «luego»; \"than\" se usa en comparaciones."],
["mc","¿Cómo se dice «Nunca había visto la nieve»?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","Es \"had\" + \"never\" + participio."],
["or","¿Viste a tu amigo?","Did you see your friend","saw","En la pregunta en pasado va el auxiliar \"did\" y el verbo base \"see\"."],
["or","Ella estaba caminando a casa","She was walking home","were","Con \"she\" va \"was\": concordancia."],
["or","El tren ya había salido","The train had already left","has","Lo que pasó antes va con \"had\" + participio."],
["fi","I was sleeping __ you called.","Estaba durmiendo cuando llamaste","when","than|so|had","«Cuando» se dice \"when\"."],
["fi","The bus had already __.","El autobús ya había salido","left|gone","leave|leaving|leaves","Después de \"had\" va el participio."],
["fi","First we ate. __ we watched a movie.","Primero comimos. Luego vimos una película","Then|After that|Next","Than|Because|When","«Luego» es \"then\"."],
["ty","No vi la película","I didn't see the movie|I didn't watch the movie","see · movie — negación con el auxiliar","saw","La negación en pasado usa el auxiliar \"didn't\" + verbo base: \"see\", no \"saw\"."],
["ty","Ellos estaban viendo la tele","They were watching TV|They were watching television","watch · TV — en pasado continuo","was","Con \"they\" va \"were\" + -ing: concordancia."],
["ty","La película ya había empezado","The movie had already started|The movie had started already","movie · already · start — con \"had\" + participio","has","Lo que pasó antes va con \"had\" + participio."]]},
{ id:"conditionals", title:"Segundo y tercer condicional: situaciones imaginarias", blurb:"Si tuviera… → if + pasado, would. Si hubiera… → if + had + participio, would have.", deck:"Emociones y reacciones", body:`
<p>Sirven para imaginar lo que no es real, y se corresponden bastante bien con el español: «si tuviera…, haría…» y «si hubiera…, habría…». La diferencia: donde el español usa subjuntivo después de «si», el inglés usa un tiempo pasado, y <b>nunca would</b> después de <i>if</i>.</p>
<h3>Segundo condicional: un presente imaginario</h3>
<p><b>If + pasado simple, would + verbo</b>. «Si tuviera tiempo» → <i>If I had time</i>.</p>
{{ex:If I had time, I would travel.|if ai jad TAIM ai wud TRA-vel|Si tuviera tiempo, viajaría}}{{ex:If I were you, I'd take it.|if ai wer IUU aid TEIK it|Yo que tú, lo aceptaría}}{{ex:What would you do?|WAT wud iu DUU?|¿Qué harías tú?}}
<h3>Tercer condicional: un pasado imaginario</h3>
<p><b>If + had + participio, would have + participio</b>. Es el mismo esquema que «si hubiera estudiado, habría aprobado».</p>
{{ex:If I had studied, I would have passed.|if ai jad STA-did ai wud ev PAST|Si hubiera estudiado, habría aprobado}}
<h3>Lamentos: should have, I wish</h3>
{{ex:I should have called.|ai shud ev KOLD|Debería haber llamado}}{{ex:I wish I had more time.|ai WISH ai jad MOR TAIM|Ojalá tuviera más tiempo}}
<div class="tbl"><table><tr><th>Tipo</th><th>Parte con if</th><th>Resultado</th></tr><tr><td>1 (posible)</td><td class="k">presente</td><td class="k">will</td></tr><tr><td>2 (imaginario, ahora)</td><td class="k">pasado</td><td class="k">would</td></tr><tr><td>3 (imaginario, en el pasado)</td><td class="k">had + participio</td><td class="k">would have + participio</td></tr></table></div>
<h3>Preguntas y sujeto</h3>
<p>En las preguntas, el auxiliar <i>would</i> va antes del sujeto. Y aunque en español digas «Sería genial», en inglés hace falta un sujeto: <i>It would be great</i>.</p>
{{ex:Would you move to another country?|wud iu MUUV te e-NA-dher KAN-tri?|¿Te mudarías a otro país?}}{{ex:It would be great.|it wud bi GREIT|Sería genial}}
<div class="tip"><i>If I were you</i> es una expresión fija: con <i>I</i> también va <b>were</b>, no <i>was</i>. Y nunca pongas <i>would</i> después de <i>if</i>: <b>If I would have time</b> ✗ → <b>If I had time</b> ✓.</div>`,
check:[["If I ___ rich, I would travel. ¿Qué va en el hueco?",["am","were","will be","would be"],1,"Para algo imaginario en el presente, después de \"if\" va el pasado (\"were\")."],["If I had studied, I ___ passed. ¿Qué va en el hueco?",["would","will have","would have","had"],2,"Para un pasado imaginario: \"would have\" + participio."],["«Debería haber llamado» en inglés:",["I should have called.","I should called.","I should had call.","I would call should."],0,"Para lamentar algo: \"should have\" + participio."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Para algo imaginario en el presente, después de \"if\" va el pasado."],
["mc","¿Cómo se dice «Yo que tú, lo compraría»?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" es una expresión fija."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Para un pasado imaginario: \"would have\" + participio."],
["mc","¿Cómo se dice «Debería haber llamado»?","I should have called.","I should called.","I should had call.","I must called.","Para lamentar algo: \"should have\" + participio."],
["mc","«¿Qué harías tú?» en inglés:","What would you do?","What will you did?","What would you did?","What you would do?","En la pregunta, el auxiliar \"would\" va antes del sujeto."],
["or","¿Me ayudarías?","Would you help me","Do","En la pregunta, el auxiliar \"would\" va antes del sujeto."],
["or","¿Dónde vivirías?","Where would you live","will","Después de la palabra interrogativa, el auxiliar \"would\" va antes del sujeto."],
["or","Si tuviera tiempo, viajaría","If I had time I'd travel","have will","Después de \"if\" va el pasado (\"had\"), no \"will\" ni \"would\"."],
["fi","If I __ you, I'd go.","Yo que tú, iría","were|was","am|be|would be","\"If I were you\" es una expresión fija."],
["fi","I would __ helped.","Te habría ayudado","have","had|has|having","Es \"would have\" + participio."],
["fi","I wish I __ more time.","Ojalá tuviera más tiempo","had","have|would have|will have","Después de \"I wish\" va el pasado."],
["ty","¿Qué harías tú?","What would you do","would · do — pregunta con el auxiliar","will","En la pregunta, el auxiliar \"would\" va antes del sujeto."],
["ty","Sería genial","It would be great|It'd be great|That would be great","great — con el sujeto \"it\"","is","En inglés el sujeto es obligatorio: \"It would be great\"."],
["ty","Yo que tú, iría","If I were you I'd go|I'd go if I were you|If I was you I'd go","if · were · go — una expresión fija","am","«Yo que tú» es \"If I were you\", con \"were\"."]]},
{ id:"passive", title:"Voz pasiva: be + participio", blurb:"Cuando importa lo que pasó y no quién lo hizo. Donde el español dice «se habla inglés», el inglés usa la pasiva.", deck:"Trabajo y correo", body:`
<p>La voz pasiva es <b>be + participio</b>. Se usa cuando no sabes quién hizo algo o no importa.</p>
<p>En español, la pasiva con «ser» suena formal, y en su lugar se usa «se» o la tercera persona del plural: «Se habla inglés», «Se canceló la reunión», «Me robaron el celular». En inglés, todo eso va en <b>voz pasiva</b>.</p>
{{ex:English is spoken here.|ING-glish is SPOU-ken JIR|Aquí se habla inglés}}{{ex:My phone was stolen.|mai FOUN wes STOU-len|Me robaron el celular}}{{ex:The meeting was canceled.|dhe MII-ring wes KAN-seld|Se canceló la reunión}}
<h3>Concordancia con be</h3>
<p>El verbo <i>be</i> concuerda con el sujeto: singular → <b>is/was</b>; plural → <b>are/were</b>.</p>
{{ex:This was made in Mexico.|dhis wes MEID in MEK-si-kou|Esto se hizo en México}}{{ex:These shoes were made in Italy.|dhiis SHUUS wer MEID in I-re-li|Estos zapatos se hicieron en Italia}}{{ex:Breakfast is served at seven.|BREK-fest is SERVD et SE-ven|El desayuno se sirve a las siete}}
<h3>Quién lo hizo: by</h3>
{{ex:It was written by Isabel Allende.|it wes RI-ten bai I-se-bel a-IEN-dei|Lo escribió Isabel Allende}}
<h3>Activa y pasiva</h3>
<div class="tbl"><table><tr><th>Activa</th><th>Pasiva</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Preguntas</h3>
<p>En la pregunta, el auxiliar <i>is/was</i> va antes del sujeto.</p>
{{ex:Is breakfast included?|is BREK-fest in-KLUU-did?|¿El desayuno está incluido?}}
<div class="tip">Errores típicos: olvidar <i>be</i> (<b>My phone stolen</b> ✗) o traducir «se» palabra por palabra (<b>Here speaks English</b> ✗). Lo correcto: <b>My phone was stolen</b>, <b>English is spoken here</b> ✓.</div>`,
check:[["My bag ___ stolen yesterday. ¿Qué va en el hueco?",["is","was","did","has"],1,"Pasó ayer: \"was\" + participio."],["This phone ___ made in Mexico. ¿Qué va en el hueco?",["was","did","has","does"],0,"La voz pasiva es \"be\" + participio."],["«Se canceló la reunión» en inglés:",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Es \"be\" + el participio \"canceled\"."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","La voz pasiva es \"be\" + participio."],
["mc","¿Cómo se dice «Esto se hizo en México»?","This was made in Mexico.","This made in Mexico.","This was make in Mexico.","This did made in Mexico.","Es \"be\" + el participio \"made\"."],
["mc","¿Cómo se dice «Aquí se habla inglés»?","English is spoken here.","Here speaks English.","English is speak here.","English speaks here.","La construcción con «se» pasa a voz pasiva: \"is\" + participio."],
["mc","¿Cómo se dice «Se canceló la reunión»?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Es \"be\" + participio."],
["mc","¿Cómo se dice «Estos zapatos se hicieron en Italia»?","These shoes were made in Italy.","These shoes was made in Italy.","These shoes made in Italy.","These shoes were make in Italy.","Con un sujeto plural va \"were\": concordancia."],
["or","Me robaron las maletas","My bags were stolen","was","Con el plural \"bags\" va \"were\": concordancia."],
["or","Aquí se habla inglés","English is spoken here","are speaks","Con \"English\" (singular) va \"is\" + participio: concordancia."],
["or","Se canceló la reunión","The meeting was canceled","did","La voz pasiva se forma con \"be\" + participio, no con \"did\"."],
["fi","This was __ in Mexico.","Esto se hizo en México","made","make|making|makes","Después de \"be\" va el participio."],
["fi","The room __ cleaned every day.","La habitación se limpia todos los días","is|gets","does|has|did","Para algo habitual: \"is\" + participio."],
["fi","It was written __ Isabel Allende.","Lo escribió Isabel Allende","by","from|of|with","Quién lo hizo se dice con \"by\"."],
["ty","Me robaron el celular","My phone was stolen|My phone got stolen|My cell phone was stolen","phone · steal — usa la voz pasiva","stole","Con \"my phone\" (singular) va \"was\" + participio: concordancia."],
["ty","¿El desayuno está incluido?","Is breakfast included|Is the breakfast included","breakfast · include — pregunta con el auxiliar","Does","En la pregunta, el auxiliar \"is\" va antes del sujeto."],
["ty","La puerta estaba cerrada con llave","The door was locked","door · lock — con la voz pasiva","were","Con \"the door\" (singular) va \"was\": concordancia."]]},
{ id:"reported", title:"Estilo indirecto: contar lo que dijo otra persona", blurb:"She said she was tired. El tiempo verbal retrocede, y tell siempre lleva a la persona.", deck:"Teléfono y abreviaturas", body:`
<p>Sirve para contar lo que dijo otra persona: «dijo que…». Igual que en español («Estoy cansada» → «Dijo que estaba cansada»), el tiempo verbal <b>retrocede un paso hacia el pasado</b>.</p>
<div class="tbl"><table><tr><th>Estilo directo</th><th>Estilo indirecto</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|shi SED shi wes TAI-erd|Dijo que estaba cansada}}{{ex:He said he would come.|ji SED ji wud KAM|Dijo que vendría}}
<h3>say o tell</h3>
<p>Los dos son «decir», pero <b>tell</b> lleva a la persona justo después (<i>told me</i>), y <b>say</b> no (<i>said</i>, o <i>said to me</i>). Es uno de los errores más comunes: <i>He said me</i> ✗.</p>
{{ex:He told me he was busy.|ji TOULD mi ji wes BI-si|Me dijo que estaba ocupado}}{{ex:She said there was a problem.|shi SED dher wes e PRAA-blem|Dijo que había un problema}}
<p>Fíjate en el segundo ejemplo: «había» necesita sujeto en inglés (<i>there was</i>), y concuerda con lo que viene después.</p>
<h3>Preguntas en estilo indirecto</h3>
<p>Para preguntas de sí o no, usa <b>if</b>. Con palabra interrogativa, la repites. En los dos casos, el orden es el de una afirmación (sujeto + verbo), y <b>no se usa do/did</b>.</p>
{{ex:She asked if I was okay.|shi ASKT if ai wes ou-KEI|Me preguntó si estaba bien}}{{ex:He asked where I lived.|ji ASKT wer ai LIVD|Me preguntó dónde vivía}}
<div class="tip">Errores típicos: <b>He said me…</b> ✗ → <b>He told me…</b> ✓; <b>He asked where did I live</b> ✗ → <b>He asked where I lived</b> ✓.</div>`,
check:[["She said she ___ tired. ¿Qué va en el hueco?",["is being","was","be","will"],1,"En estilo indirecto, el tiempo verbal retrocede al pasado."],["He ___ me he would come. ¿Qué va en el hueco?",["said","say","told","tell to"],2,"Con la persona justo después (\"me\") va \"told\"."],["«Me preguntó dónde vivía» en inglés:",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"En una pregunta indirecta, el orden es el de una afirmación."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","En estilo indirecto, el tiempo verbal retrocede al pasado."],
["mc","He ___ me he was late.","told","said","say","tells to","Con la persona justo después se usa \"told\"."],
["mc","¿Cómo se dice «Dijo que vendría»?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" pasa a \"would\"."],
["mc","¿Cómo se dice «Me preguntó si estaba bien»?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Las preguntas de sí o no se cuentan con \"if\"."],
["mc","¿Cómo se dice «Me preguntó dónde vivía»?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","En una pregunta indirecta, el orden es el de una afirmación."],
["or","Dijo que estaba cansada","She said she was tired","told were","Con \"she\" va \"was\": concordancia. Sin persona después, \"said\"."],
["or","Me dijo que estaba ocupado","He told me he was busy","said","Con la persona justo después (\"me\") se usa \"told\"."],
["or","Dijo que había un problema","He said there was a problem","were","Con \"a problem\" (singular) va \"there was\": concordancia."],
["fi","She __ she was tired.","Dijo que estaba cansada","said","told|asked|say","Sin persona después se usa \"said\"."],
["fi","He told __ he was busy.","Me dijo que estaba ocupado","me","I|my|to","Después de \"told\" va la persona."],
["fi","She asked __ I was okay.","Me preguntó si estaba bien","if|whether","that|what|did","Las preguntas de sí o no se cuentan con \"if\"."],
["ty","Él dijo que hacía frío","He said it was cold|He said that it was cold","said · cold — con el sujeto \"it\"","is","En inglés el sujeto es obligatorio: \"it was cold\"."],
["ty","Él me dijo que estaba ocupado","He told me he was busy|He told me that he was busy|He said to me he was busy|He said to me that he was busy|He said he was busy|He said that he was busy","told · me · busy — \"tell\" con la persona después","said","Con \"he\" va \"was\" (tercera persona), y con la persona después, \"told\"."],
["ty","Ella me preguntó dónde vivía","She asked me where I lived|She asked where I lived","asked · where · lived — con el orden de una afirmación","did","En una pregunta indirecta, el orden es el de una afirmación, sin \"did\"."]]},
];

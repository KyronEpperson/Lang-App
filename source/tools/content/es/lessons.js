/* es-en: the original 11 lessons and their checks, written for Spanish speakers (docs/profiles/es.md §8).
   English examples, check options and answer positions follow ko-en except in the lessons listed in deviations.b.json. */
exports.LESSONS = [
{ id:"alphabet", title:"1 · El alfabeto: el nombre de las letras y cómo deletrear", blurb:"Ya conoces las letras, pero en inglés se llaman de otra manera. Aprende sus nombres para deletrear tu nombre, tu correo o un código de reserva sin malentendidos.", deck:"El alfabeto", body:`
<p>El inglés usa las mismas letras que el español, menos la ñ: son 26. Lo que cambia son sus <b>nombres</b>, y los necesitas cada vez que deletreas algo en voz alta: tu apellido en la recepción de un hotel, tu correo electrónico por teléfono o el código de una reserva en el aeropuerto. Si dices «i» pensando en la I, quien te escucha va a escribir una E.</p>
<h3>Las 26 letras y sus nombres</h3>
<p>Al lado de cada letra va su nombre con la ayuda de pronunciación: las MAYÚSCULAS marcan la sílaba tónica, <i>ii</i> y <i>uu</i> son vocales largas y <i>dy</i> es la <i>j</i> inglesa de <i>job</i> (la clave completa está en la lección siguiente). Las cinco vocales (A, E, I, O, U) están resaltadas.</p>
<div class="tbl"><table><tr><th>Letra · nombre</th><th>Letra · nombre</th><th>Letra · nombre</th><th>Letra · nombre</th><th>Letra · nombre</th></tr><tr><td class="k">A · EI</td><td>B · BII</td><td>C · SII (s sorda)</td><td>D · DII</td><td class="k">E · II</td></tr><tr><td>F · EF</td><td>G · DYII</td><td>H · EICH</td><td class="k">I · AI</td><td>J · DYEI</td></tr><tr><td>K · KEI</td><td>L · EL</td><td>M · EM</td><td>N · EN</td><td class="k">O · OU</td></tr><tr><td>P · PII</td><td>Q · KIUU</td><td>R · AAR</td><td>S · ES</td><td>T · TII</td></tr><tr><td class="k">U · IUU</td><td>V · VII</td><td>W · DA-bel-iu</td><td>X · EKS</td><td>Y · WAI</td></tr><tr><td>Z · SII (s sonora)</td><td></td><td></td><td></td><td></td></tr></table></div>
{{tiles:A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}}
<p>Truco: muchos nombres riman entre sí. Riman con la E: B, C, D, G, P, T, V, Z. Riman con la A: J y K.</p>
<h3>Los nombres que más confunden los hispanohablantes</h3>
<p>La trampa más grande está en las vocales: el nombre inglés de la E suena como nuestra «i», y el de la I suena como «ai». Cuando oigas «i», escribe E; cuando oigas «ei», escribe A.</p>
<div class="tbl"><table><tr><th>Letra</th><th>En inglés</th><th>Ojo</th></tr><tr><td class="k">A</td><td>EI</td><td>no «a»; suena como <i>day</i> sin la d</td></tr><tr><td class="k">E</td><td>II</td><td>suena como la <i>i</i> española, larga</td></tr><tr><td class="k">I</td><td>AI</td><td>como «ay»; igual que la palabra <i>I</i> («yo»)</td></tr><tr><td class="k">G / J</td><td>DYII / DYEI</td><td>la G rima con E y la J rima con A: no las cambies</td></tr><tr><td class="k">H</td><td>EICH</td><td>no «hache»</td></tr><tr><td class="k">R</td><td>AAR</td><td>no «erre»; suena como <i>are</i></td></tr><tr><td class="k">V / B</td><td>VII / BII</td><td>la V con los dientes de arriba sobre el labio de abajo</td></tr><tr><td class="k">W</td><td>DA-bel-iu</td><td>«doble u», nunca «doble ve» ni «uve doble»</td></tr><tr><td class="k">Y</td><td>WAI</td><td>no «ye» ni «i griega»; suena como <i>why</i></td></tr><tr><td class="k">Z</td><td>SII (s sonora)</td><td>no «zeta»; como la C, pero con una <i>s</i> sonora que zumba como una abeja</td></tr></table></div>
<p>Tampoco digas «ka», «cu» ni «equis»: la K es «KEI», la Q es «KIUU» y la X es «EKS».</p>
<h3>Deletrear en voz alta</h3>
<p>Para pedir que te deletreen algo, o para deletrear tú, usa estas frases. Para aclarar una letra, en español dices «B de Barcelona»; en inglés se dice <b>as in</b> + una palabra.</p>
{{ex:How do you spell that?|JAU du iu SPEL dhat?|¿Cómo se escribe eso?}}{{ex:How do you spell your last name?|JAU du iu SPEL iur LAST NEIM?|¿Cómo se escribe tu apellido?}}{{ex:Can you spell that, please?|ken iu SPEL dhat, PLIIS?|¿Me lo puedes deletrear, por favor?}}{{ex:It starts with a capital T.|it STAARTS widh e KA-pi-rel TII|Empieza con T mayúscula.}}{{ex:B as in boy.|BII es in BOI|B de "boy".}}{{ex:Is that M as in Mary?|is dhat EM es in ME-ri?|¿Es M de "Mary"?}}{{ex:There are two Ls in hello.|dher er TUU ELS in je-LOU|"Hello" se escribe con dos L.}}
<p>Fíjate en que para preguntar se usa el auxiliar <i>do</i> (<i>How do you spell…?</i>), y en que el plural de una letra lleva -s: <i>two Ls</i>.</p>
<h3>¿a o an delante de una letra?</h3>
<p>No lo decide la letra, sino el <b>sonido</b> con que empieza su nombre. Muchas consonantes tienen un nombre que empieza con sonido de vocal («EF», «EICH», «EL», «EM», «EN», «AAR», «ES», «EKS»), así que llevan <i>an</i>: <i>an F, an H, an L, an M, an N, an R, an S, an X</i>.</p>
<p>Al revés, la U es vocal, pero su nombre suena como <i>you</i>, que empieza con sonido de consonante: <i>a U</i>.</p>
<div class="tip">Para dictar un correo: una mayúscula es <i>capital</i> (<i>capital T</i>), una letra repetida es <i>double</i> (<i>double L</i>), la @ se dice <i>at</i> y el punto se dice <i>dot</i>. No digas «arroba» ni «punto»: <i>ana.garcia@example.com</i> se dicta <i>ana dot garcia at example dot com</i>.</div>`},

{ id:"pron", title:"1 · Trampas de pronunciación: vocales, S inicial, B/V, SH/CH, H, TH", blurb:"El inglés tiene unas once vocales y varios sonidos que el español no distingue. Conoce las trampas típicas y aprende a leer la ayuda de pronunciación.", deck:"Trampas de pronunciación", body:`
<p>El español tiene cinco vocales; el inglés americano tiene unas once. Por eso, muchas palabras que a ti te suenan iguales son palabras distintas para un hablante nativo. Aquí tienes las trampas más comunes para hispanohablantes y la clave para leer la <b>ayuda de pronunciación</b> que verás en tarjetas y ejemplos.</p>
<h3>Cómo leer la ayuda de pronunciación</h3>
<div class="tbl"><table><tr><th>Verás</th><th>Significa</th><th>Ejemplo</th></tr><tr><td class="k">MAYÚSCULAS</td><td>la sílaba tónica</td><td>hotel → jou-TEL</td></tr><tr><td class="k">ii / i</td><td>i larga y tensa / i corta y relajada</td><td>sheep → SHIIP, ship → SHIP</td></tr><tr><td class="k">uu / u</td><td>u larga / u corta</td><td>food → FUUD, book → BUK</td></tr><tr><td class="k">aa / o</td><td>a abierta y larga / o abierta</td><td>hot → JAAT, talk → TOK</td></tr><tr><td class="k">e (en sílaba átona)</td><td>vocal débil y muy corta</td><td>about → e-BAUT</td></tr><tr><td class="k">j</td><td>la <i>h</i> inglesa: un soplo suave, más suave que la <i>j</i> española</td><td>house → JAUS</td></tr><tr><td class="k">dy</td><td>la <i>j</i> inglesa de <i>job</i></td><td>job → DYAAB</td></tr><tr><td class="k">th / dh</td><td>lengua entre los dientes, sin voz / con voz</td><td>think → THINK, this → DHIS</td></tr><tr><td class="k">v</td><td>dientes de arriba sobre el labio de abajo; nunca suena como <i>b</i></td><td>very → VE-ri</td></tr><tr><td class="k">r entre vocales</td><td>la <i>t</i> americana entre vocales, suave como la <i>r</i> de «pero»</td><td>water → WO-rer</td></tr></table></div>
<p>La ayuda es solo un apoyo: escucha siempre el audio primero.</p>
<h3>Vocales largas y cortas</h3>
<p>En español, la <i>i</i> de «sí» y la de «mil» suenan igual. En inglés hay una <b>i larga</b> y tensa (<i>sheep</i>) y una <b>i corta</b> y relajada, casi entre <i>i</i> y <i>e</i> (<i>ship</i>). Lo mismo pasa con la <i>u</i>: <i>fool</i> / <i>full</i>.</p>
{{ex:ship / sheep|SHIP / SHIIP|barco / oveja}}{{ex:live / leave|LIV / LIIV|vivir / irse}}{{ex:full / fool|FUL / FUUL|lleno / tonto}}{{ex:The sheep is on the ship.|dhe SHIIP is aan dhe SHIP|La oveja está en el barco.}}
<h3>S + consonante: sin «e» delante</h3>
<p>Ninguna palabra española empieza con <i>s</i> + consonante, así que es fácil decir «eschool» o «Espain». En inglés la palabra empieza directamente con la <i>s</i>: alarga un poco la <i>s</i> («sss-kuul») y no pongas ninguna vocal antes.</p>
{{ex:I study at school.|ai STA-di et SKUUL|Estudio en la escuela.}}{{ex:I'm from Spain.|aim frem SPEIN|Soy de España.}}{{ex:a small street|e SMOL STRIIT|una calle pequeña}}
<h3>B y V, SH y CH, J y Y</h3>
<p>En español, la <i>b</i> y la <i>v</i> suenan igual; en inglés son dos sonidos. La <b>v</b> se hace con los dientes de arriba sobre el labio de abajo, y vibra. El inglés también distingue la <b>sh</b> (suave y continua, como cuando pides silencio: «shhh») de la <b>ch</b>, y la <b>j</b> de <i>job</i> (dy) de la <b>y</b> de <i>yes</i> (i).</p>
{{ex:very / berry|VE-ri / BE-ri|muy / baya}}{{ex:shoes / choose|SHUUS / CHUUS|zapatos / elegir}}{{ex:joke / yolk|DYOUK / IOUK|broma / yema}}
<p>Si en tu país la <i>y</i> de «yo» suena como <i>sh</i> (por ejemplo, en Argentina o Uruguay), recuerda que la <i>y</i> inglesa suena como la <i>i</i> de «tiene».</p>
<h3>H y TH</h3>
<p>La <i>h</i> inglesa casi siempre suena (no es muda como en español), pero es solo un soplo suave, más suave que nuestra <i>j</i>. La <b>th</b> se hace con la punta de la lengua entre los dientes: sin voz se parece a la <i>z</i> de España (<i>think</i>); con voz, a la <i>d</i> suave de «cada» (<i>this</i>). Si la cambias por <i>t</i>, <i>s</i> o <i>f</i>, dices otra palabra: <i>three</i> → <i>tree</i>.</p>
{{ex:I think so.|ai THINK sou|Creo que sí.}}{{ex:three / tree|THRII / TRII|tres / árbol}}{{ex:his house|jis JAUS|su casa (de él)}}
<h3>Finales de palabra y la terminación -ed</h3>
<p>En español las sílabas suelen terminar en vocal; en inglés se acumulan consonantes al final y hay que pronunciarlas todas. La <b>-ed</b> del pasado <b>no</b> es una sílaba más, salvo después de <i>t</i> o <i>d</i>.</p>
<div class="tbl"><table><tr><th>Suena</th><th>Cuándo</th><th>Ejemplo</th></tr><tr><td class="k">t</td><td>después de un sonido sordo (k, p, s, sh, ch, f)</td><td>worked → WERKT</td></tr><tr><td class="k">d</td><td>después de un sonido sonoro (vocal, l, n, g, v…)</td><td>played → PLEID</td></tr><tr><td class="k">id</td><td>solo después de t o d</td><td>wanted → WAAN-tid</td></tr></table></div>
{{ex:I worked yesterday.|ai WERKT IES-ter-dei|Trabajé ayer.}}{{ex:She wanted to stay.|shi WAAN-tid te STEI|Ella quería quedarse.}}
<h3>La sílaba tónica</h3>
<p>Muchas palabras se parecen al español, pero el acento cae en otro lugar. Si lo pones donde iría en español, cuesta entenderte.</p>
<div class="tbl"><table><tr><th>Palabra</th><th>En inglés</th><th>No digas</th></tr><tr><td class="k">comfortable</td><td><b>KAMF</b>-ter-bel</td><td>con-for-TA-ble</td></tr><tr><td class="k">chocolate</td><td><b>CHAAK</b>-let</td><td>cho-co-LA-te</td></tr><tr><td class="k">vegetable</td><td><b>VEDY</b>-te-bel</td><td>ve-ge-TA-ble</td></tr><tr><td class="k">Wednesday</td><td><b>WENS</b>-dei</td><td>wed-nes-DEI (tres sílabas)</td></tr></table></div>
<div class="tip">Truco: graba tu voz diciendo <i>ship / sheep</i> y <i>very / berry</i> y compárala con el audio. Si te salen iguales, exagera la diferencia: alarga mucho la <i>ii</i> y apoya bien los dientes en el labio para la <i>v</i>.</div>`},

{ id:"articles", title:"2 · a, an y the: donde el inglés y el español no coinciden", blurb:"Ya usas artículos en español. Aquí van los cuatro casos en que el inglés los pone o los quita de otra manera.", deck:"Presentarse", body:`
<p>El español también tiene artículos (<i>un, una, el, la</i>), así que la idea ya la conoces y casi siempre aciertas. Los errores aparecen en los pocos casos en que los dos idiomas <b>no coinciden</b>. Son cuatro.</p>
<h3>1. Profesiones: con a / an</h3>
<p>En español dices «Soy estudiante» o «Es enfermera», sin artículo. En inglés, con una profesión en singular, el artículo es <b>obligatorio</b>.</p>
{{ex:I'm a student.|aim e STUU-dent|Soy estudiante.}}{{ex:She's a nurse.|shis e NERS|Es enfermera.}}{{ex:My brother is an engineer.|mai BRA-dher is en en-dyi-NIR|Mi hermano es ingeniero.}}
<h3>2. ¿a o an? Lo decide el sonido</h3>
<p>Usa <b>an</b> cuando la palabra siguiente <b>suena</b> a vocal, aunque se escriba con consonante, y <b>a</b> cuando suena a consonante, aunque se escriba con vocal.</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (suena «iu»)</td><td class="k">an hour (la h es muda)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (suena «uan»)</td><td class="k">an MBA (suena «em»)</td></tr></table></div>
<h3>3. Hablar en general: sin artículo</h3>
<p>En español decimos «<b>La</b> vida es dura» o «Me encantan <b>los</b> perros». En inglés, cuando hablas de algo en general (ideas abstractas, sustantivos incontables o plurales), va <b>sin artículo</b>. Lo verás con más detalle más adelante.</p>
{{ex:Life is hard.|LAIF is JAARD|La vida es dura.}}{{ex:I love dogs.|ai LAV DOGS|Me encantan los perros.}}{{ex:Coffee is expensive here.|KO-fi is ik-SPEN-siv JIR|Aquí el café es caro.}}
<h3>4. Partes del cuerpo: posesivo, no «the»</h3>
<p>En español decimos «Me duele <b>la</b> cabeza» o «Lávate <b>las</b> manos», porque el pronombre (<i>me, te</i>) ya indica de quién es. El inglés no usa ese pronombre en estos casos, así que usa el <b>adjetivo posesivo</b>: <i>my, your, his, her</i>.</p>
{{ex:My head hurts.|mai JED JERTS|Me duele la cabeza.}}{{ex:Wash your hands.|WAASH iur JANDS|Lávate las manos.}}{{ex:I brush my teeth every day.|ai BRASH mai TIITH EV-ri DEI|Me lavo los dientes todos los días.}}
<h3>Igual que en español: the</h3>
<p><i>The</i> funciona como <i>el, la, los, las</i>: para algo que ya mencionaste o que los dos saben cuál es.</p>
{{ex:I have a dog. The dog is so cute.|ai jav e DOG. dhe DOG is SOU KIUUT|Tengo un perro. El perro es adorable.}}
<div class="tip">Los dos errores más típicos: <b>She is doctor.</b> (✗) → <b>She is a doctor.</b> (✓) y <b>The life is hard.</b> (✗) → <b>Life is hard.</b> (✓)</div>`},

{ id:"be", title:"3 · El verbo be: ser, estar… y tener", blurb:"Ser y estar son un solo verbo en inglés, y a veces también tener: I'm 25, I'm hungry.", deck:"Presentarse", body:`
<p>En inglés, <b>ser</b> y <b>estar</b> son un solo verbo: <b>be</b>. Además, en varias expresiones en las que el español usa <b>tener</b>, el inglés también usa <i>be</i>. Y la oración siempre necesita un sujeto.</p>
<h3>Las formas de be</h3>
<div class="tbl"><table><tr><th>Sujeto</th><th>be</th><th>Contracción</th></tr><tr><td class="k">I</td><td>am</td><td>I'm</td></tr><tr><td class="k">you / we / they</td><td>are</td><td>you're, we're, they're</td></tr><tr><td class="k">he / she / it</td><td>is</td><td>he's, she's, it's</td></tr></table></div>
{{ex:She's a teacher.|shis e TII-cher|Es profesora.}}{{ex:She's at work.|shis et WERK|Está en el trabajo.}}{{ex:Are you okay?|er iu ou-KEI?|¿Estás bien?}}
<h3>Donde el español dice «tener»</h3>
<p>La edad y muchas sensaciones físicas van con <i>be</i> + adjetivo. Decir <i>I have 25 years</i> o <i>I have hungry</i> es uno de los errores más reconocibles.</p>
<div class="tbl"><table><tr><th>Español</th><th>Inglés</th></tr><tr><td>Tengo 25 años.</td><td class="k">I'm 25. / I'm 25 years old.</td></tr><tr><td>Tengo hambre. / Tengo sed.</td><td class="k">I'm hungry. / I'm thirsty.</td></tr><tr><td>Tengo frío. / Tengo calor.</td><td class="k">I'm cold. / I'm hot.</td></tr><tr><td>Tengo sueño. / Tengo miedo.</td><td class="k">I'm sleepy. / I'm scared.</td></tr><tr><td>Tienes razón.</td><td class="k">You're right.</td></tr></table></div>
{{ex:I'm 25 years old.|aim TWEN-ti-FAIV IIRS OULD|Tengo 25 años.}}{{ex:I'm hungry.|aim JANG-gri|Tengo hambre.}}{{ex:You're right.|iur RAIT|Tienes razón.}}
<h3>El sujeto siempre va</h3>
<p>En español, «Es tarde» o «Está en casa» no necesitan sujeto, porque el verbo ya lo indica. En inglés el sujeto es obligatorio, y si no hay ninguno se pone <b>it</b>.</p>
{{ex:It's late.|its LEIT|Es tarde.}}{{ex:He's at home.|jis et JOUM|Está en casa.}}
<h3>Be y los demás verbos no se mezclan</h3>
<p>Con <i>like, live, work</i> y los demás verbos no va <i>be</i>: <i>I like coffee</i>, no <i>I am like coffee</i>. En negativo y en preguntas, <i>be</i> no necesita <i>do</i>; los demás verbos sí.</p>
<div class="tbl"><table><tr><th></th><th>be</th><th>otros verbos</th></tr><tr><td>Afirmativo</td><td class="k">I'm tired.</td><td class="k">I like coffee.</td></tr><tr><td>Negativo</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Pregunta</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>he / she / it: -s y does</h3>
<p>Con <i>he, she, it</i> (o un sustantivo en singular), el verbo lleva <b>-s</b> en presente. En negativo y en preguntas va <b>does</b>, y entonces el verbo pierde la -s.</p>
{{ex:My brother works in Lima.|mai BRA-dher WERKS in LII-me|Mi hermano trabaja en Lima.}}{{ex:Does he speak English?|das ji SPIIK ING-glish?|¿Él habla inglés?}}{{ex:She doesn't eat meat.|shi DA-sent IIT MIIT|Ella no come carne.}}
<div class="tip">Errores típicos: <b>I have 25 years</b> → <b>I'm 25</b>; <b>Is late</b> → <b>It's late</b>; <b>She work</b> → <b>She works</b>.</div>`},

{ id:"polite", title:"4 · Pedir con cortesía", blurb:"Can you → Could you → Would you mind. En inglés, Give me suena brusco.", deck:"Supervivencia 1", body:`
<p>En inglés, <b>you</b> sirve tanto para <i>tú</i> como para <i>usted</i>. La cortesía no está en el pronombre, sino en <b>cómo pides las cosas</b>: con <i>could</i>, <i>would</i> y <i>please</i>.</p>
<h3>La escalera de la cortesía</h3>
<div class="tbl"><table><tr><th>Expresión</th><th>Cómo suena</th><th>Cuándo</th></tr><tr><td class="k">Give me ~.</td><td>Orden directa; suena brusca</td><td>Mejor no usarla</td></tr><tr><td class="k">Can you ~?</td><td>Petición informal</td><td>Amigos, tiendas</td></tr><tr><td class="k">Could you ~?</td><td>Petición amable</td><td>Desconocidos, trabajo</td></tr><tr><td class="k">Would you mind ~ing?</td><td>Muy amable</td><td>Favores grandes, jefes</td></tr></table></div>
{{ex:Could you help me?|kud iu JELP mi?|¿Me podrías ayudar? / ¿Me podría ayudar?}}{{ex:Could you say that again?|kud iu SEI dhat e-GUEN?|¿Me lo puedes repetir?}}{{ex:Would you mind taking a picture of us?|wud iu MAIND TEI-king e PIK-cher ev as?|¿Te importaría tomarnos una foto?}}
<h3>Para pedir: Can I get…? / I'd like…</h3>
<p>En muchos países decimos «Dame un café» o «Quiero un café» y no suena mal. En inglés, <i>Give me…</i> y <i>I want…</i> suenan bruscos o infantiles. En una tienda o una cafetería se dice así:</p>
{{ex:Can I get a latte, please?|ken ai GUET e LAA-tei, PLIIS?|¿Me das un latte, por favor?}}{{ex:I'd like a window seat.|aid LAIK e WIN-dou SIIT|Quisiera un asiento junto a la ventana.}}
<h3>Would you mind…? funciona como «¿Te importa…?»</h3>
<p><i>Mind</i> significa «importar, molestar». Igual que en español, si te preguntan «¿Te importa…?» y no te importa, respondes que <b>no</b>.</p>
{{ex:Would you mind opening the window?|wud iu MAIND OU-pe-ning dhe WIN-dou?|¿Te importaría abrir la ventana?}}{{ex:No, not at all.|NOU, NAAT et OL|No, para nada. (Claro que la abro.)}}
<div class="tip"><b>Please</b> y <b>thank you</b> nunca sobran: con solo añadir <i>please</i> al final, la frase suena mucho más amable. La entonación también cuenta: si subes al final, suena a petición; si bajas, a orden.</div>`},

{ id:"tense", title:"5 · Repaso de tiempos: presente, pasado y futuro", blurb:"Hábitos en presente simple, lo de ahora en continuo, planes con going to. Y did en las preguntas sobre el pasado.", deck:"Charla casual", body:`
<p>«Trabajo», «estoy trabajando», «trabajé», «voy a trabajar»: el español tiene casi los mismos tiempos que el inglés. Lo que cambia es <b>cuándo</b> se usa cada uno y los <b>auxiliares</b> de las preguntas y las negaciones. Repasa los cinco que más se usan en una conversación.</p>
<h3>Presente simple o presente continuo</h3>
<div class="tbl"><table><tr><th>Forma</th><th>Uso</th><th>Ejemplo</th></tr><tr><td class="k">presente simple</td><td>hábitos y hechos</td><td>She drinks coffee every morning.</td></tr><tr><td class="k">be + forma -ing</td><td>lo que pasa ahora / planes cercanos ya fijados</td><td>I'm drinking coffee right now.</td></tr></table></div>
<p>En español, «¿Qué haces?» sirve también para «ahora mismo». En inglés, para ahora se usa el continuo: <i>What are you doing?</i> (<i>What do you do?</i> pregunta a qué te dedicas). Y no olvides la <b>-s</b> con <i>he, she, it</i>.</p>
{{ex:She works at a bank.|shi WERKS et e BANK|Trabaja en un banco.}}{{ex:I'm working from home today.|aim WER-king frem JOUM te-DEI|Hoy estoy trabajando desde casa.}}{{ex:What are you doing?|WAT er iu DUU-ing?|¿Qué estás haciendo?}}
<h3>Pasado simple</h3>
<p>Los verbos regulares añaden <b>-ed</b>, pero muchos de los más usados son irregulares: <i>go → went, eat → ate, see → saw, have → had, get → got</i>. En preguntas y negaciones va <b>did</b>, y el verbo vuelve a su forma base: <i>Did you go?</i>, no <i>Did you went?</i></p>
{{ex:I went to the beach last weekend.|ai WENT te dhe BIICH LAST WIIK-end|Fui a la playa el fin de semana pasado.}}{{ex:Did you have fun?|did iu jav FAN?|¿Te divertiste?}}{{ex:I didn't see it.|ai DI-dent SII it|No lo vi.}}
<h3>Futuro: will o going to</h3>
<div class="tbl"><table><tr><th></th><th>Cuándo</th><th>Ejemplo</th></tr><tr><td class="k">will</td><td>decisión en el momento, promesa</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>plan que ya tenías</td><td>I'm going to visit Mexico City next month.</td></tr></table></div>
<p><i>Going to</i> es exactamente «ir a» + infinitivo, así que te resultará natural. Para planes ya fijados, el español usa a menudo el presente («Mañana trabajo»); el inglés prefiere el continuo: <i>I'm working tomorrow</i>.</p>
{{ex:I'll call you later.|ail KOL iu LEI-rer|Te llamo más tarde.}}{{ex:I'm going to take a cooking class.|aim GOU-ing te TEIK e KU-king KLAS|Voy a tomar una clase de cocina.}}
<p>Al hablar, <i>going to</i> suele sonar como <b>gonna</b> (GA-ne). Por escrito, usa <i>going to</i>.</p>
<div class="tip">A <i>How was your weekend?</i> responde en pasado; a <i>Any plans for the weekend?</i>, con <i>going to</i>. Usar el mismo tiempo de la pregunta es el truco más fácil.</div>`},

{ id:"prep", title:"6 · Preposiciones in / on / at", blurb:"Un solo «en» en español, tres opciones en inglés: in para lo amplio, on para días y superficies, at para un punto.", deck:"Números, horas y fechas", body:`
<p>En español casi todo va con <b>en</b>: en mayo, en la mesa, en el autobús, en casa, en la estación. El inglés reparte ese «en» entre tres preposiciones. La regla general: <b>in</b> para espacios y periodos amplios (dentro de algo), <b>on</b> para superficies y días, <b>at</b> para un punto exacto.</p>
<h3>Tiempo</h3>
<div class="tbl"><table><tr><th>Preposición</th><th>Con</th><th>Ejemplos</th></tr><tr><td class="k">in</td><td>meses, años, estaciones, partes del día</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>días de la semana, fechas, días concretos</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>horas exactas y momentos</td><td>at 7, at noon, at night</td></tr></table></div>
<p>Ojo: en español decimos «<b>el</b> lunes» o «<b>el</b> 3 de mayo», con artículo y sin preposición. En inglés va <b>on</b> y sin artículo: <i>on Monday</i>, <i>on May 3rd</i>.</p>
{{ex:See you on Friday.|SII iu aan FRAI-dei|Nos vemos el viernes.}}{{ex:The meeting is at three.|dhe MII-ring is et THRII|La reunión es a las tres.}}{{ex:I was born in 1998.|ai wes BORN in nain-TIIN NAIN-ti-EIT|Nací en 1998.}}
<h3>Lugar</h3>
<div class="tbl"><table><tr><th>Preposición</th><th>Idea</th><th>Ejemplos</th></tr><tr><td class="k">in</td><td>dentro de un espacio; ciudades y países</td><td>in the car, in Lima, in Mexico</td></tr><tr><td class="k">on</td><td>sobre una superficie; calles; transporte público</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>un punto concreto; un lugar por lo que haces allí</td><td>at the station, at work, at home</td></tr></table></div>
{{ex:I'm on the bus.|aim aan dhe BAS|Estoy en el autobús.}}{{ex:Let's meet at the station.|lets MIIT et dhe STEI-shen|Nos vemos en la estación.}}{{ex:I'm at home.|aim et JOUM|Estoy en casa.}}
<h3>Sin preposición</h3>
<p>Con <b>next, last, this, every, tomorrow, yesterday</b> no va preposición, igual que en español solemos decir «la semana que viene», sin preposición.</p>
{{ex:See you next week.|SII iu NEKST WIIK|Nos vemos la próxima semana.}}
<div class="tip">Excepciones útiles: <b>at night</b>, pero <b>in the morning / afternoon / evening</b>. El fin de semana es <b>on the weekend</b> en EE. UU. (<i>at the weekend</i> en inglés británico). Y cuidado con otras preposiciones que no coinciden: <i>depend <b>on</b></i> (no <i>of</i>), <i>good <b>at</b></i> (no <i>in</i>), <i>married <b>to</b></i> (no <i>with</i>).</div>`},

{ id:"smalltalk", title:"7 · La charla casual", blurb:"How are you? es un saludo, no una pregunta. Temas seguros y temas que es mejor evitar.", deck:"Charla casual", body:`
<p>En los países de habla inglesa es normal charlar un momento con desconocidos: en el ascensor, en la fila de la caja o antes de una reunión. No es una conversación profunda, sino una <b>charla corta para crear buen ambiente</b>.</p>
<h3>How are you? es un saludo</h3>
<p>No te están preguntando de verdad cómo estás: es como un «¿Qué tal?». Lo educado es responder corto y <b>devolver la pregunta</b>. No hace falta contar tu día.</p>
{{ex:Hey, how's it going?|JEI, JAUS it GOU-ing?|Hola, ¿qué tal?}}{{ex:Pretty good! How about you?|PRI-ri GUD! JAU e-BAUT iu?|¡Bastante bien! ¿Y tú?}}
<h3>Temas seguros y temas que es mejor evitar</h3>
<div class="tbl"><table><tr><th>Seguros</th><th>Mejor evitar con alguien que acabas de conocer</th></tr><tr><td>el clima, los planes del fin de semana o de vacaciones</td><td>la edad, si tiene pareja o hijos</td></tr><tr><td>la comida, los restaurantes, los viajes</td><td>comentarios sobre el físico o el peso</td></tr><tr><td>series, películas, deportes</td><td>cuánto gana, cuánto pagó por su casa</td></tr><tr><td>el trabajo (sin entrar en detalles), el barrio</td><td>política, religión</td></tr></table></div>
<p>En muchos países hispanohablantes es normal preguntar por la familia o comentar con cariño el aspecto de alguien («¡Qué bien te ves! ¿Bajaste de peso?»). En inglés, con alguien que acabas de conocer, eso suena demasiado personal.</p>
<h3>Cómo mantener la conversación</h3>
<p>Respuesta + <b>un dato más</b> + <b>pregunta de vuelta</b>. Con esos tres pasos, la charla no se corta.</p>
{{ex:It was great! I went hiking. What about you?|it wes GREIT! ai WENT JAI-king. WAT e-BAUT iu?|¡Estuvo genial! Fui de excursión. ¿Y tú?}}
<p>Reacciona también: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Cómo terminar con naturalidad</h3>
{{ex:Well, I should get going.|WEL, ai shud GUET GOU-ing|Bueno, ya me tengo que ir.}}{{ex:It was nice talking to you.|it wes NAIS TO-king te iu|Fue un gusto hablar contigo.}}
<div class="tip">«Yo también» es <b>Me too</b>, pero «Yo tampoco» es <b>Me neither</b>: <i>I don't like horror movies.</i> → <i>Me neither.</i> (no <i>Me too</i>). En el inglés hablado de EE. UU. también se oye <i>Me either</i>, pero lo estándar es <i>Me neither</i>.</div>`},

{ id:"phrasal", title:"8 · Introducción a los phrasal verbs", blurb:"Verbo + partícula = un significado nuevo. Donde tú dirías enter o continue, un nativo dice come in o go on.", deck:"Phrasal verbs", body:`
<p>Un <i>phrasal verb</i> (verbo compuesto) es un <b>verbo + una partícula</b> como <i>up, out, off, on</i>, que juntos tienen un significado nuevo. Para ti hay una trampa: casi siempre existe un verbo de origen latino parecido al español (<i>enter, continue, discover</i>), y lo eliges porque lo reconoces. Es correcto, pero en una conversación suena formal o rígido. Los nativos suelen decir el <i>phrasal verb</i>.</p>
<div class="tbl"><table><tr><th>Verbo formal (cognado)</th><th>Phrasal verb (conversación)</th><th>Significado</th></tr><tr><td>enter</td><td class="k">come in</td><td>entrar, pasar</td></tr><tr><td>continue</td><td class="k">go on</td><td>seguir, continuar</td></tr><tr><td>discover</td><td class="k">find out</td><td>enterarse, descubrir</td></tr><tr><td>postpone</td><td class="k">put off</td><td>posponer, aplazar</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>aguantar, soportar</td></tr><tr><td>extinguish</td><td class="k">put out</td><td>apagar (un fuego)</td></tr></table></div>
<h3>La partícula da una pista</h3>
<p><b>up</b> suele indicar «hacia arriba, por completo»; <b>out</b>, «hacia fuera, hasta el final»; <b>off</b>, «separarse, detenerse»; <b>on</b>, «encima, seguir».</p>
{{ex:Come in, please.|KAM IN, PLIIS|Pasa, por favor.}}{{ex:I grew up in Santiago.|ai GRUU AP in san-ti-AA-gou|Crecí en Santiago.}}{{ex:We ran out of milk.|wi RAN AUT ev MILK|Se nos acabó la leche.}}{{ex:Turn off your phone, please.|TERN OF iur FOUN, PLIIS|Apaga tu celular, por favor.}}
<h3>El pronombre va en medio</h3>
<p>Muchos <i>phrasal verbs</i> con objeto se pueden separar. Un sustantivo puede ir antes o después de la partícula, pero un <b>pronombre</b> (<i>it, them, me, you</i>) va <b>siempre en medio</b>.</p>
{{ex:Turn on the light. / Turn the light on.|TERN aan dhe LAIT / TERN dhe LAIT AAN|Enciende la luz. (Las dos son correctas.)}}{{ex:Turn it on.|TERN it AAN|Enciéndela. (No: turn on it)}}{{ex:I'll pick you up at seven.|ail PIK iu AP et SE-ven|Paso por ti a las siete.}}
<h3>Phrasal verbs que no se separan</h3>
<p>Los que llevan preposición, como <i>look after</i> (cuidar), <i>look for</i> (buscar) o <i>get along with</i> (llevarse bien con), no se separan: <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">Aprende cada <i>phrasal verb</i> como si fuera una sola palabra, dentro de una frase de ejemplo; así el lugar del pronombre se te queda solo. Para entender series y películas son imprescindibles: allí casi nunca oirás <i>extinguish</i>, pero sí <i>put out</i>.</div>`},

{ id:"numbers", title:"9 · Números, horas y precios", blurb:"Punto decimal, billion = mil millones, 13 frente a 30 y cómo se leen precios, años y fechas.", deck:"Números, horas y fechas", body:`
<p>Los números aparecen en cada viaje y en cada reunión. La buena noticia: el inglés también agrupa las cifras de tres en tres, como el español. Las diferencias están en los signos, en <i>billion</i> y en la forma de leer horas, precios, años y fechas.</p>
<h3>Punto decimal y coma de miles</h3>
<p>En inglés los decimales llevan <b>punto</b> y los miles llevan <b>coma</b>: justo al revés que en muchos países hispanohablantes (en México y algunos otros países, en cambio, se escribe igual que en inglés).</p>
<div class="tbl"><table><tr><th>En inglés</th><th>En muchos países</th><th>Se lee</th></tr><tr><td class="k">3.5</td><td>3,5</td><td>three point five</td></tr><tr><td class="k">1,500</td><td>1.500</td><td>one thousand five hundred</td></tr><tr><td class="k">2,000,000</td><td>2.000.000</td><td>two million</td></tr></table></div>
<h3>¡Ojo con billion!</h3>
<div class="tbl"><table><tr><th>Inglés</th><th>Español</th></tr><tr><td class="k">one thousand (1,000)</td><td>mil</td></tr><tr><td class="k">one million</td><td>un millón</td></tr><tr><td class="k">one billion</td><td>mil millones</td></tr><tr><td class="k">one trillion</td><td>un billón</td></tr></table></div>
{{ex:three point five|THRII POINT FAIV|3,5 (tres coma cinco)}}{{ex:one billion dollars|WAN BI-lien DAA-lers|mil millones de dólares}}
<h3>-teen y -ty</h3>
<p>Del 13 al 19, la fuerza va <b>al final</b> (thir<b>TEEN</b>); en 30, 40, 50…, va <b>al principio</b> (<b>THIR</b>ty). En inglés americano, la <i>t</i> de <i>thirty</i> suele sonar suave, casi como una <i>d</i>: lo importante es la fuerza al principio.</p>
{{ex:thirteen / thirty|ther-TIIN / THER-ti|13 / 30}}{{ex:fifteen / fifty|fif-TIIN / FIF-ti|15 / 50}}
<h3>La hora</h3>
<p>Lo más fácil es leer la hora y los minutos tal cual. Del minuto 1 al 9 se dice «oh».</p>
{{ex:It's seven fifteen.|its SE-ven fif-TIIN|Son las siete y quince.}}{{ex:It's nine oh five.|its NAIN OU FAIV|Son las nueve y cinco.}}{{ex:It's a quarter past ten.|its e KWOR-ter PAST TEN|Son las diez y cuarto.}}
<h3>Precios, años y fechas</h3>
<p>Los precios se leen como dos números. Los años, de dos en dos: 19 | 90. Las fechas se escriben con el mes primero (<i>November 15</i>) y se leen con número ordinal (<i>November fifteenth</i>).</p>
{{ex:It's four ninety-nine.|its FOR NAIN-ti-NAIN|Cuesta 4 dólares con 99.}}{{ex:nineteen ninety|nain-TIIN NAIN-ti|el año 1990}}{{ex:November fifteenth|nou-VEM-ber fif-TIINTH|el 15 de noviembre}}
<div class="tip">En EE. UU., la fecha corta va <b>mes/día</b>: 11/5 es el 5 de noviembre, no el 11 de mayo. Si hay riesgo de confusión, escribe el mes con letras: <i>November 5</i>.</div>`},

{ id:"email", title:"10 · Correos en inglés", blurb:"Saludo → propósito → petición → cierre. Corto, claro y sin las fórmulas del español traducidas.", deck:"Trabajo y correo", body:`
<p>Un correo de trabajo en inglés es <b>corto, directo y amable</b>. En español solemos usar más fórmulas («Estimado…», «Sin otro particular…», «Quedo atento…»), y traducidas palabra por palabra suenan rígidas o raras. Usa mejor las fórmulas propias del inglés.</p>
<h3>Estructura básica</h3>
<div class="tbl"><table><tr><th>Parte</th><th>Ejemplo</th></tr><tr><td>Saludo</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Primera línea (saludo y propósito)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Cuerpo (petición)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Cierre</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Despedida</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>Saludo: Hi es lo normal</h3>
<p>En empresas de EE. UU., <b>Hi + nombre</b> funciona incluso con alguien a quien escribes por primera vez. <i>Dear</i> queda para casos muy formales, y <i>Dear Sir or Madam</i> es mucho menos común que nuestro «Estimado/a»: úsalo solo si de verdad no sabes el nombre.</p>
{{ex:I hope this email finds you well.|ai JOUP dhis II-meil FAINDS iu WEL|Espero que se encuentre bien.}}{{ex:I'm writing to follow up on our meeting.|aim RAI-ring te FAA-lou AP aan aur MII-ring|Le escribo para dar seguimiento a nuestra reunión.}}
<h3>Fórmulas del español y su equivalente natural</h3>
<div class="tbl"><table><tr><th>En español</th><th>En inglés</th></tr><tr><td>Estimado Sr. Pérez:</td><td class="k">Dear Mr. Pérez, / Hi Carlos,</td></tr><tr><td>Adjunto el informe.</td><td class="k">I've attached the report.</td></tr><tr><td>Quedo a la espera de su respuesta.</td><td class="k">I look forward to hearing from you.</td></tr><tr><td>Quedo atento/a a cualquier duda.</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Saludos cordiales.</td><td class="k">Best regards,</td></tr></table></div>
<h3>Pide con suavidad y da una fecha clara</h3>
{{ex:Could you send me the report by Thursday?|kud iu SEND mi dhe ri-PORT bai THERS-dei?|¿Podría enviarme el informe para el jueves?}}{{ex:Thanks for your patience.|THANKS fer iur PEI-shens|Gracias por su paciencia.}}
<p><i>ASAP</i> puede sonar a presión. Si puedes, da un plazo con <b>by + fecha</b>.</p>
<div class="tip">No hace falta empezar siempre con <i>Sorry for the late reply</i>. <b>Thanks for your patience</b> es amable y positivo, sin disculparte. Y para despedirte un viernes: <b>Have a great weekend!</b></div>`},

{ id:"idioms", title:"11 · Expresiones idiomáticas y jerga", blurb:"Frases que no se entienden palabra por palabra. Cuáles se parecen al español y cuándo usarlas.", deck:"Expresiones idiomáticas", body:`
<p>Una expresión idiomática es una frase cuyo significado no sale de sus palabras: <i>a piece of cake</i> no habla de pasteles, sino de algo muy fácil (pan comido). Si quieres entender series y películas sin subtítulos, las necesitas.</p>
<h3>Imagínalas</h3>
<p>La mayoría se recuerda mejor si te imaginas la escena.</p>
{{ex:It's a piece of cake.|its e PIIS ev KEIK|Es pan comido.}}{{ex:It costs an arm and a leg.|it KOSTS en AARM en e LEG|Cuesta un ojo de la cara.}}{{ex:I'm all ears.|aim OL IRS|Soy todo oídos.}}
<h3>Parecidas al español… o no</h3>
<div class="tbl"><table><tr><th>Inglés</th><th>Español</th></tr><tr><td class="k">Kill two birds with one stone</td><td>Matar dos pájaros de un tiro (¡igual!)</td></tr><tr><td class="k">Speak of the devil!</td><td>Hablando del rey de Roma</td></tr><tr><td class="k">When pigs fly</td><td>Cuando las ranas críen pelo</td></tr><tr><td class="k">It's raining cats and dogs</td><td>Llueve a cántaros</td></tr></table></div>
<p>Y al revés: muchas expresiones españolas <b>no se traducen literalmente</b>. «Me estás tomando el pelo» es <i>You're pulling my leg</i>; «estar en las nubes» es <i>to have your head in the clouds</i>. Si traduces palabra por palabra, nadie te va a entender.</p>
{{ex:You're pulling my leg.|iur PU-ling mai LEG|Me estás tomando el pelo.}}
<h3>Expresión idiomática o jerga</h3>
<p>Las <b>expresiones idiomáticas</b> existen desde hace mucho y las usa todo el mundo, también en el trabajo (<i>Let's call it a day</i>). La <b>jerga</b> (<i>slang</i>) es de los jóvenes y se usa entre amigos (<i>No cap</i>, <i>That song slaps</i>). La jerga cambia rápido y, en boca de un adulto, puede sonar forzada.</p>
{{ex:Let's call it a day.|lets KOL it e DEI|Dejémoslo aquí por hoy. (Sirve en una reunión.)}}{{ex:No cap, this is the best pizza ever.|NOU KAP, dhis is dhe BEST PIIT-se E-ver|En serio, es la mejor pizza del mundo. (Solo entre amigos.)}}
<div class="tip">No llenes tu inglés de expresiones idiomáticas: una por conversación, cuando venga a cuento, causa muy buena impresión. Demasiadas suenan a libro de texto.</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["¿Qué letra se llama «DYII»?", ["J","G","Z","C"], 1, "La G se llama «DYII» y rima con E. La J se llama «DYEI» y rima con A y K."],
    ["¿Cuál es correcta?", ["a F","an U","a M","an F"], 3, "El nombre de la F empieza con sonido de vocal («EF»), así que va \"an F\". La M también lleva \"an\", y la U, que suena como \"you\", lleva \"a\"."],
    ["¿Cómo le pides a alguien que deletree una palabra?", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "La pregunta lleva el auxiliar \"do\" antes de \"you\" y luego el verbo en forma base: \"How do you spell that?\"."]
  ],
  pron: [
    ["¿Qué palabra significa «oveja»?", ["ship","sheep","shape","cheap"], 1, "\"Sheep\" lleva la i larga (SHIIP). Con la i corta, \"ship\" significa «barco»."],
    ["¿Cómo se pronuncia bien \"school\"?", ["Con una «e» delante: eskuul","Como «chul»","En dos sílabas: sku-ul","Sin «e» delante: SKUUL"], 3, "En inglés, s + consonante va al principio de la palabra, sin ninguna vocal antes: SKUUL."],
    ["¿Dónde va la sílaba tónica de \"comfortable\"?", ["com-for-TA-ble, como en «confortable»","com-FOR-ta-ble","Al principio: KAMF-ter-bel","No tiene sílaba tónica"], 2, "KAMF-ter-bel: la fuerza va al principio y la palabra se reduce a tres sílabas."]
  ],
  articles: [
    ["I'm ___ engineer. ¿Qué va en el hueco?", ["a","an","the","(nada)"], 1, "\"Engineer\" empieza con sonido de vocal, así que va \"an\". Y con profesiones el artículo es obligatorio."],
    ["¿Cómo se dice «La vida es dura»?", ["The life is hard.","A life is hard.","Life is hard.","The lives are hard."], 2, "Cuando hablas de algo en general o abstracto, el inglés no usa artículo: \"Life is hard\"."],
    ["¿Cómo se dice «Me duele la cabeza»?", ["The head hurts me.","Me hurts the head.","Hurts my head.","My head hurts."], 3, "Con partes del cuerpo, el inglés usa el adjetivo posesivo (\"my\", \"your\", \"her\"), no \"the\"."]
  ],
  be: [
    ["¿Cómo se dice «Tengo 25 años»?", ["I have 25 years.","I'm 25.","I've 25 years.","I'm having 25."], 1, "La edad se dice con be: \"I'm 25\" (o \"I'm 25 years old\"). Nunca con \"have\"."],
    ["¿Cómo se dice «Mi hermana vive en Lima»?", ["My sister live in Lima.","My sister is live in Lima.","My sister living in Lima.","My sister lives in Lima."], 3, "\"My sister\" equivale a \"she\" (tercera persona del singular), así que el verbo lleva -s: \"lives\". Y sin \"is\"."],
    ["Te preguntan \"Are you hungry?\" y no tienes hambre. ¿Qué respondes?", ["No, I'm not.","No, I don't.","No, I amn't.","No, I haven't."], 0, "Te preguntaron con be, así que respondes con be: \"No, I'm not\"."]
  ],
  polite: [
    ["¿Cuál es la forma más amable de pedirle algo a un desconocido?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "\"Could you…?\" es la forma básica de pedir con cortesía. \"Give me\" suena a orden."],
    ["Te preguntan \"Would you mind opening the window?\" ¿Qué respuesta significa «claro, la abro»?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "\"Mind\" = importar, molestar. Igual que con «¿Te importa…?», responder «No» significa que sí lo haces."],
    ["¿Qué forma del verbo va después de \"Would you mind\"?", ["Infinitivo sin to (open)","to + infinitivo (to open)","Pasado (opened)","Forma -ing (opening)"], 3, "Después de \"mind\" va la forma -ing: \"Would you mind waiting?\""]
  ],
  tense: [
    ["¿Cómo se dice «Tomo café todas las mañanas» (es un hábito)?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Los hábitos van en presente simple. El continuo significa «lo estoy tomando ahora»."],
    ["Ves que tu amigo no trae dinero y decides en ese momento: «¡Yo pago!»", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Una decisión tomada en el momento va con \"will\". \"Going to\" es para planes que ya tenías."],
    ["Elige la pregunta correcta: «¿Fuiste a la fiesta?»", ["Did you went to the party?","Did you go to the party?","Do you went to the party?","Went you to the party?"], 1, "En las preguntas sobre el pasado, \"did\" ya marca el pasado: el verbo va en forma base (\"go\")."]
  ],
  prep: [
    ["«Nos vemos a las 7» = Let's meet ___ 7.", ["in","at","on","to"], 1, "Con una hora exacta va \"at\"."],
    ["«El lunes» = ___ Monday", ["on","in","at","by"], 0, "Con días y fechas va \"on\", y sin artículo, aunque en español digas «el lunes»."],
    ["¿Cuál es la oración correcta?", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Con \"next\", \"last\", \"this\" y \"every\" no va preposición."]
  ],
  smalltalk: [
    ["En una cafetería te dicen \"How are you today?\" ¿Cuál es la respuesta más natural?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "\"How are you?\" es un saludo. Responde corto y devuelve la pregunta."],
    ["¿Qué pregunta conviene evitar con alguien que acabas de conocer?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "En inglés, preguntar la edad a alguien que acabas de conocer puede parecer de mala educación."],
    ["Alguien dice \"I don't like horror movies.\" ¿Cómo dices «Yo tampoco»?", ["Me too.","So do I.","Me neither.","Me also."], 2, "«Yo tampoco» es \"Me neither\" (o \"Neither do I\"). \"Me too\" es «yo también»."]
  ],
  phrasal: [
    ["«¿Puedes apagarlo?» ¿Cuál es la oración correcta?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "El pronombre (\"it\") va en medio del phrasal verb: \"turn it off\"."],
    ["¿Qué significa \"run out of\"?", ["Salir corriendo","Quedarse sin algo, acabarse","Escaparse de algún lugar","Llegar tarde"], 1, "\"We ran out of milk.\" = Se nos acabó la leche."],
    ["¿Cómo se dice «Pospongamos la reunión hasta la próxima semana»?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "\"Put off\" = posponer. \"Put on\" es «ponerse (ropa)» o «encender»; \"put out\", «apagar (un fuego)»."]
  ],
  numbers: [
    ["¿Cómo se lee 3.5 en inglés?", ["three comma five","three point five","three and five","thirty-five"], 1, "En inglés los decimales se escriben y se leen con punto: \"three point five\"."],
    ["¿Dónde va la fuerza en \"thirteen\"?", ["En las dos sílabas igual","No tiene sílaba tónica","En teen (al final)","En thir (al principio)"], 2, "Los números en -teen llevan la fuerza al final: ther-TIIN. \"Thirty\" la lleva al principio."],
    ["¿Qué significa \"one billion\"?", ["mil millones","un billón (un millón de millones)","cien millones","un millón"], 0, "\"Billion\" = mil millones. El «billón» español es \"one trillion\"."]
  ],
  email: [
    ["Escribes por primera vez a Jenny Park, una clienta. ¿Qué saludo es el más adecuado?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "En correos de trabajo en EE. UU., \"Hi\" + nombre es lo más seguro. Si el contexto es muy formal: \"Dear Ms. Park,\""],
    ["¿Cómo dices con naturalidad «Quedo a la espera de su respuesta»?", ["I stay waiting your answer.","I look forward to hearing from you.","I wait your response.","I remain attentive."], 1, "\"I look forward to hearing from you\" es la fórmula habitual. Las traducciones literales suenan extrañas."],
    ["¿Qué frase pide un plazo con amabilidad?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "\"Could you…?\" + \"by\" + fecha: es amable y a la vez deja claro el plazo."]
  ],
  idioms: [
    ["¿Qué significa \"The test was a piece of cake\"?", ["El examen fue facilísimo.","Comimos pastel durante el examen.","El examen fue dificilísimo.","Me fue muy mal en el examen."], 0, "\"A piece of cake\" = pan comido."],
    ["¿Qué significa \"I'm feeling under the weather\"?", ["Hace mal tiempo.","Estoy al aire libre.","No me siento muy bien.","Me mojé con la lluvia."], 2, "No tiene nada que ver con el clima: significa que no te sientes bien."],
    ["¿Qué frase queda peor al presentarle un informe a tu jefe?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "\"No cap\" y \"slaps\" son jerga para usar entre amigos. Las expresiones idiomáticas sí se usan en el trabajo."]
  ]
};

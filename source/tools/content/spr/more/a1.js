/* es-en stage A1: lessons for Spanish speakers (source of truth for es). Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/es.md §4 and §8; practice sets follow the verb-core standing rule (§7). */
module.exports = [
{ id:"it-there", title:"it y there: el sujeto que el español no dice", blurb:"«Llueve», «Es tarde», «Hay un café»: en inglés siempre hace falta un sujeto, y ese sujeto es it o there.", deck:"Charla casual", body:`
<p>En español dices «Llueve», «Es importante» o «Hay un café aquí» sin ningún sujeto. En inglés eso no funciona: <b>toda oración necesita un sujeto</b>. Cuando nadie hace la acción, se usan dos palabras de relleno: <b>it</b> y <b>there</b>.</p>
<h3>Clima, hora y opiniones: It</h3>
<p>Aquí <i>it</i> no significa «eso»: solo ocupa el lugar del sujeto. Una oración nunca empieza con <i>Is…</i> si no es una pregunta.</p>
{{ex:It's cold today.|its KOULD te-DEI|Hoy hace frío}}{{ex:It's three o'clock.|its THRII e-KLAAK|Son las tres}}{{ex:It's raining.|its REI-ning|Está lloviendo}}{{ex:It's important to sleep.|its im-POR-tent te SLIIP|Es importante dormir}}
<h3>«Hay» = There is / There are</h3>
<p><i>Hay</i> sirve igual para uno que para varios, pero en inglés el verbo concuerda con lo que viene detrás: <b>There is</b> + singular, <b>There are</b> + plural. Al hablar, <i>There is</i> se contrae en <i>There's</i>.</p>
{{ex:There's a cafe near here.|dhers e ka-FEI NIR JIR|Hay un café cerca de aquí}}{{ex:There are two rooms.|dher er TUU RUUMS|Hay dos habitaciones}}
<h3>Preguntas y negativas</h3>
<p>Para preguntar, <i>is</i> o <i>are</i> pasa delante de <i>there</i>.</p>
{{ex:Is there a bathroom here?|is dher e BATH-ruum JIR?|¿Hay baño aquí?}}{{ex:Are there any seats?|er dher E-ni SIITS?|¿Hay lugares libres?}}{{ex:There isn't a bus today.|dher I-sent e BAS te-DEI|Hoy no hay autobús}}
<h3>No confundas have con there is</h3>
<p>«Tener» es <i>have</i>; «haber» (algo está en un lugar) es <i>there is</i>. «Hay mucha gente» no es <i>Has many people</i>.</p>
{{ex:I have a car.|ai jav e KAAR|Tengo auto}}{{ex:There's a car outside.|dhers e KAAR aut-SAID|Hay un auto afuera}}
<div class="tip">Errores más comunes: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ · <b>Is important.</b> ✗ → <b>It's important.</b> ✓ · <b>There are a cafe.</b> ✗ → <b>There's a cafe.</b> ✓ · <b>Has many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["¿Cómo se dice «Hoy hace calor»?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"El clima necesita un sujeto en inglés: \"it\"."],["There ___ three people. ¿Qué va en el hueco?",["is","are","have","be"],1,"\"Three people\" es plural, así que \"there are\"."],["¿Cómo se dice «¿Hay baño aquí?»?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Para preguntar si hay algo: \"Is there a…?\"."]],
practice:[
["mc","¿Cómo se dice «Está lloviendo»?","It's raining.","Is raining.","There is raining.","Rain is.","El clima lleva \"it\" como sujeto: en inglés el sujeto es obligatorio."],
["mc","¿Cómo se dice «Hay un café cerca de aquí»?","There's a cafe near here.","It's a cafe near here.","Has a cafe near here.","There are a cafe near here.","«Hay» + singular es \"there is\": concordancia con \"a cafe\"."],
["mc","There ___ two rooms. ¿Qué va en el hueco?","are","is","have","has","\"Two rooms\" es plural, así que \"are\" (concordancia)."],
["mc","¿Cuál es correcta para «Es importante dormir»?","It's important to sleep.","Is important to sleep.","Important is to sleep.","There is important to sleep.","«Es importante» no tiene sujeto en español; en inglés lo pone \"it\"."],
["mc","¿Cómo se dice «Son las tres»?","It's three o'clock.","They're three o'clock.","Is three o'clock.","Are three o'clock.","La hora va en singular y con \"it\" como sujeto, aunque en español digas «son»."],
["or","Hay dos lugares libres","There are two seats","is","\"Two seats\" es plural: \"there are\" (concordancia)."],
["or","¿Hay baño aquí?","Is there a bathroom here","are","En la pregunta, \"is\" va antes de \"there\"; con un solo baño, \"is\" (concordancia)."],
["or","Hoy hace frío","It's cold today","Is","Para hablar del clima, la oración empieza con \"It's\", nunca con \"Is\"."],
["fi","__ cold today.","Hoy hace frío","It's|It is","Is|There's|This","El sujeto es obligatorio: \"it\" ocupa ese lugar."],
["fi","There __ a bank near here.","Hay un banco cerca de aquí","is","are|have|has","Un banco es singular: \"there is\" (concordancia)."],
["fi","__ there any seats?","¿Hay lugares libres?","Are","Is|Do|Have","\"Seats\" es plural, así que \"Are\" va delante de \"there\" (concordancia)."],
["ty","Hoy hace calor","It's hot today","it · hot · today — el sujeto es obligatorio","Is","«Hace calor» no tiene sujeto en español, pero en inglés sí: \"it\"."],
["ty","¿Hay baño aquí?","Is there a bathroom here|Is there a restroom here","is there · bathroom — para preguntar","Are","Para preguntar, \"is\" va delante de \"there\", que hace de sujeto: un solo baño, \"is\" (concordancia)."],
["ty","Hay dos habitaciones","There are two rooms","there · two · room — en plural","is","Con un plural, \"there are\": el sujeto de relleno es \"there\" (concordancia)."],
["ty","Hay mucha gente aquí","There are many people here|There are a lot of people here","there · many · people — «hay» no es has","Has","«Hay» es \"there is/are\", no \"has\"; \"people\" es plural: \"there are\" (concordancia)."]]},

{ id:"plurals", title:"Plurales: irregulares, adjetivos sin -s y this / these", blurb:"La -s ya la dominas. Ojo con people y children, con these y con los adjetivos, que nunca llevan -s.", deck:"Compras y pagos", body:`
<p>El plural en inglés funciona casi como en español: <i>book → books</i>, <i>box → boxes</i>. Esa parte ya la dominas. Esta lección se centra en lo que <b>sí</b> es distinto.</p>
<h3>Plurales irregulares</h3>
<div class="tbl"><table><tr><th>Regla</th><th>Ejemplo</th></tr><tr><td>casi siempre -s</td><td class="k">book → books</td></tr><tr><td>después de s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>consonante + y → -ies</td><td class="k">city → cities</td></tr><tr><td>irregulares</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|TUU BUKS|dos libros}}{{ex:I have two children.|ai jav TUU CHIL-dren|Tengo dos hijos}}{{ex:These people are nice.|DHIIS PII-pel er NAIS|Estas personas son amables}}
<p><i>People</i> ya es plural: <i>people are</i>, nunca <i>peoples</i>. Para una sola, <i>person</i>.</p>
<h3>Los adjetivos no llevan -s</h3>
<p>En español el adjetivo concuerda: «autos rojos». En inglés el adjetivo no cambia nunca y va delante: <i>red cars</i>, no <i>reds cars</i> ni <i>cars reds</i>.</p>
{{ex:red cars|RED KAARS|autos rojos}}{{ex:Those shoes are nice.|DHOUS SHUUS er NAIS|Esos zapatos son bonitos}}
<h3>this / that (uno), these / those (varios)</h3>
<p><i>this</i> tiene una i corta; <i>these</i>, una i larga. Si alargas la i de <i>this</i>, suena a plural. Y el verbo concuerda: <i>this is</i>, <i>these are</i>.</p>
{{ex:This is my bag.|dhis is mai BAG|Esta es mi bolsa}}{{ex:These are my keys.|DHIIS er mai KIIS|Estas son mis llaves}}
<h3>my, your, his, her, our, their</h3>
<p>No cambian con el plural: <i>my keys</i>. Y <i>his / her</i> dependen del dueño, no de la cosa: «sus hermanos» (de ella) es <i>her brothers</i>.</p>
{{ex:Is this your phone?|is dhis iur FOUN?|¿Este es tu celular?}}{{ex:Her brothers live in Lima.|jer BRA-dhers LIV in LII-me|Sus hermanos (de ella) viven en Lima}}
<div class="tip">Errores comunes: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>the peoples</b> ✗ → <b>the people</b> ✓ · <b>This are my keys.</b> ✗ → <b>These are my keys.</b> ✓</div>`,
check:[["I have two ___. ¿Qué va en el hueco?",["child","children","childs","a child"],1,"El plural de \"child\" es irregular: \"children\"."],["___ are my keys. ¿Qué va en el hueco?",["This","That","These","It"],2,"\"Keys\" es plural y el verbo es \"are\": \"these\"."],["¿Cómo se dice «los autos rojos»?",["the cars reds","the reds cars","the cars red","the red cars"],3,"El adjetivo va delante del sustantivo y nunca lleva -s."]],
practice:[
["mc","¿Cómo se dice «tres personas»?","three people","three peoples","three person","three people's","\"People\" ya es plural: nunca lleva -s."],
["mc","¿Cuál es el plural de \"child\"?","children","childs","childes","child","Es un plural irregular: \"child\" → \"children\"."],
["mc","¿Cómo se dice «Esos zapatos son bonitos»?","Those shoes are nice.","That shoes are nice.","Those shoes are nices.","Those shoes nice are.","\"Shoes\" es plural: \"those\". El adjetivo \"nice\" no lleva -s."],
["mc","¿Cómo se dice «unos autos rojos»?","red cars","reds cars","cars reds","cars red","El adjetivo va delante del sustantivo y no lleva -s."],
["mc","¿Cuál es el plural de \"box\"?","boxes","boxs","boxies","box","Después de s, x, ch, sh se agrega -es."],
["or","Estas son mis llaves","These are my keys","is","Con \"these\", el verbo va en plural: \"are\" (concordancia)."],
["or","Estas personas son amables","These people are nice","is","\"People\" es plural, así que el verbo es \"are\" (concordancia)."],
["or","Tengo dos autos rojos","I have two red cars","reds","El adjetivo va delante y no lleva -s: \"red cars\"."],
["fi","I have three __.","Tengo tres hijos","children","childs|child|childrens","Plural irregular: \"child\" → \"children\"."],
["fi","__ is my friend.","Este es mi amigo","This","These|Those|They","Una sola persona: \"this\", con i corta."],
["fi","The __ are very nice.","Las personas son muy amables","people","peoples|person|people's","\"People\" ya es plural."],
["ty","Esta es mi bolsa","This is my bag","this · my · bag — es una sola","are","Un solo objeto: \"this is\" (concordancia)."],
["ty","¿Este es tu celular?","Is this your phone|Is this your cell phone","is · this · your · phone — para preguntar","are","En la pregunta, \"is\" va antes de \"this\": un solo objeto, \"is\" (concordancia)."],
["ty","Tengo dos autos rojos","I have two red cars","two · red · car — sin -s en el adjetivo","reds","El adjetivo va delante del sustantivo y no lleva -s."]]},

{ id:"present", title:"Presente simple: sujeto siempre, don't y always", blurb:"En inglés no basta con «trabajo»: es I work. Para negar se usa don't, no «no».", deck:"Presentarse", body:`
<p>El orden básico es igual que en español: <b>sujeto + verbo + objeto</b> (<i>I drink coffee</i>). Lo que cambia son tres detalles que delatan enseguida a un hispanohablante.</p>
<h3>1. El sujeto nunca se omite</h3>
<p>En español la terminación del verbo ya dice quién: «trabajo», «vivimos». En inglés el verbo casi no cambia, así que el pronombre es obligatorio.</p>
{{ex:I drink coffee.|ai DRINK KO-fi|Tomo café}}{{ex:We live in Mexico City.|wi LIV in MEK-si-kou SI-ri|Vivimos en la Ciudad de México}}{{ex:They work on weekends.|dhei WERK aan WIIK-ends|Trabajan los fines de semana}}
<h3>2. La negación es don't, no «no»</h3>
<p>«No como carne» no es <i>I no eat meat</i>. Delante del verbo va el auxiliar <b>don't</b> (do not).</p>
{{ex:I don't eat meat.|ai DOUNT IIT MIIT|No como carne}}{{ex:We don't live here.|wi DOUNT LIV JIR|No vivimos aquí}}
<p>Con <i>he</i>, <i>she</i> e <i>it</i> el verbo cambia (<i>she works</i>, <i>he doesn't</i>); lo verás dos lecciones más adelante. Con <i>I, you, we, they</i>, el verbo va siempre igual.</p>
<h3>3. always, usually, never: antes del verbo</h3>
<p>En español puedes decir «Tomo siempre té». En inglés el adverbio de frecuencia va <b>justo antes</b> del verbo principal.</p>
{{ex:I usually get up at seven.|ai IUU-shu-e-li GUET AP et SE-ven|Normalmente me levanto a las siete}}{{ex:I never drink coffee at night.|ai NE-ver DRINK KO-fi et NAIT|Nunca tomo café de noche}}
<h3>Un adelanto: el adjetivo, antes del sustantivo</h3>
<p>«Una casa grande» es <i>a big house</i>. Lo verás a fondo más adelante.</p>
{{ex:I have a big house.|ai jav e BIG JAUS|Tengo una casa grande}}
<div class="tip">Errores comunes: <b>Work in a bank.</b> ✗ → <b>I work in a bank.</b> ✓ · <b>I no eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ · <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓</div>`,
check:[["¿Cómo se dice «Trabajo en un banco»?",["Work in a bank.","Am work in a bank.","I work in a bank.","I working in a bank."],2,"En inglés el sujeto es obligatorio: \"I work\"."],["I ___ eat meat. (no como)",["not","am not","no","don't"],3,"Para negar con un verbo normal se usa el auxiliar \"don't\"."],["¿Dónde va \"always\"?",["I always drink tea.","Always drink tea.","I drink always tea.","I drink tea the always."],0,"Los adverbios de frecuencia van justo antes del verbo."]],
practice:[
["mc","¿Cómo se dice «Estudio inglés»?","I study English.","Study English.","I am study English.","I studying English.","En inglés hay que decir quién: \"I study\"."],
["mc","¿Cómo se dice «No como carne»?","I don't eat meat.","I no eat meat.","I'm not eat meat.","I eat not meat.","La negación lleva el auxiliar \"don't\" antes del verbo."],
["mc","¿Cómo se dice «Vivimos en Bogotá»?","We live in Bogotá.","Live in Bogotá.","We are live in Bogotá.","We living in Bogotá.","Sin \"we\" no hay oración: \"We live\"."],
["mc","¿Cómo se dice «Normalmente me levanto a las siete»?","I usually get up at seven.","Usually I get up seven.","I get up usually at seven.","I am usually get up at seven.","\"Usually\" va justo antes del verbo."],
["mc","¿Cuál es correcta para «Siempre tomo té»?","I always drink tea.","I drink always tea.","Always drink tea.","I am always drink tea.","\"Always\" va antes del verbo, y \"I\" no se omite."],
["or","Trabajo los fines de semana","I work on weekends","works","Con \"I\", el verbo no lleva -s; la -s es solo para la tercera persona."],
["or","No comemos carne","We don't eat meat","doesn't","Con \"we\", el auxiliar es \"don't\"; \"doesn't\" es solo para la tercera persona."],
["or","Nunca tomo café de noche","I never drink coffee at night","always","\"Never\" va justo antes del verbo."],
["fi","I __ like fish.","No me gusta el pescado","don't|do not","not|am not|no","La negación usa el auxiliar \"don't\"."],
["fi","I __ English every day.","Estudio inglés todos los días","study","am study|studying|studies","Con \"I\", el verbo va en su forma base."],
["fi","We usually __ at home.","Normalmente comemos en casa","eat","eating|are eat|eats","Después de \"usually\" va el verbo en forma base."],
["ty","Tomo té","I drink tea","drink · tea — sin omitir el pronombre","am","En inglés siempre se dice quién: \"I drink tea\"."],
["ty","No como carne","I don't eat meat","don't · eat · meat — la negación","no","La negación lleva el auxiliar \"don't\", no «no»."],
["ty","No vivimos aquí","We don't live here","we · don't · live — con auxiliar","no","Para negar se usa el auxiliar \"don't\" antes del verbo."]]},

{ id:"questions", title:"Preguntas: do y el orden de las palabras", blurb:"En español basta la entonación. En inglés hace falta do, y la palabra interrogativa va primero.", deck:"Supervivencia 2", body:`
<p>En español una pregunta puede ser igual que una afirmación con otra entonación: «¿Te gusta el café?». En inglés eso no basta: hay que <b>cambiar el orden</b> o añadir un <b>auxiliar</b>.</p>
<h3>Con be: invierte</h3>
{{ex:Are you okay?|er iu ou-KEI?|¿Estás bien?}}{{ex:Is this your bag?|is dhis iur BAG?|¿Esta es tu bolsa?}}
<h3>Con los demás verbos: Do al principio</h3>
<p>Pon <b>Do</b> delante del sujeto. El verbo principal no cambia.</p>
{{ex:Do you like coffee?|du iu LAIK KO-fi?|¿Te gusta el café?}}{{ex:Do you speak English?|du iu SPIIK ING-glish?|¿Hablas inglés?}}
<p>Respuestas cortas: <i>Yes, I do.</i> / <i>No, I don't.</i> (no <i>Yes, I like</i>).</p>
<h3>Palabra interrogativa + do + sujeto + verbo</h3>
<p><i>what, where, when, who, why</i> y <i>how</i> son fáciles; lo difícil es lo que viene detrás. «¿Dónde vives?» no es <i>Where you live?</i>.</p>
{{ex:Where do you live?|WER du iu LIV?|¿Dónde vives?}}{{ex:What do you do?|WAT du iu DUU?|¿A qué te dedicas?}}{{ex:Where is the bathroom?|WER is dhe BATH-ruum?|¿Dónde está el baño?}}{{ex:How much is this?|JAU MACH is DHIS?|¿Cuánto cuesta esto?}}
<h3>Negativas: una sola negación</h3>
<p>Para negar se usa <i>don't</i>, nunca «no» delante del verbo. Y en inglés solo cabe una negación por oración: «No sé nada» es <i>I don't know anything</i>, no <i>I don't know nothing</i>.</p>
{{ex:I don't understand.|ai DOUNT an-der-STAND|No entiendo}}{{ex:I don't know anything.|ai DOUNT NOU E-ni-thing|No sé nada}}
<div class="tip">Errores comunes: <b>You like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓ · <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ · <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["¿Cómo se dice «¿Te gusta el café?»?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Con un verbo como \"like\", la pregunta empieza con el auxiliar \"Do\"."],["¿Cómo se dice «¿Dónde vives?»?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Palabra interrogativa + \"do\" + sujeto + verbo."],["Do you speak English? ¿Cuál es la respuesta correcta?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Si preguntan con \"do\", respondes con \"do\"."]],
practice:[
["mc","¿Cómo se dice «¿Hablas inglés?»?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Con un verbo como \"speak\", la pregunta necesita el auxiliar \"Do\"."],
["mc","¿Cómo se dice «¿Dónde vives?»?","Where do you live?","Where you live?","Where are you live?","Where live you?","Palabra interrogativa + auxiliar \"do\" + sujeto + verbo."],
["mc","¿Cómo se dice «¿Cuánto cuesta esto?»?","How much is this?","How much this is?","How much does this?","What much is this?","El precio se pregunta con \"How much is…?\"."],
["mc","Do you like tea? ¿Cuál es la respuesta correcta?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Si preguntan con \"do\", respondes con \"do\": \"Yes, I do\"."],
["mc","¿Cómo se dice «¿A qué te dedicas?»?","What do you do?","What are you do?","What you do?","What do you?","Se dice \"What do you do?\": el primer \"do\" es el auxiliar y el segundo, el verbo «hacer»."],
["or","¿Te gusta el café?","Do you like coffee","Are the","\"Like\" no es \"be\": la pregunta empieza con el auxiliar \"Do\"; el café en general va sin \"the\"."],
["or","¿Dónde está el baño?","Where is the bathroom","a do","Con \"be\" se invierte: \"Where is\" + sujeto, sin el auxiliar \"do\"."],
["or","¿Dónde vives?","Where do you live","are","\"Live\" necesita el auxiliar \"do\": \"Where do you live\"."],
["fi","__ you like music?","¿Te gusta la música?","Do","Are|Is|Does","\"Like\" no es \"be\", así que el auxiliar es \"Do\"."],
["fi","__ do you live?","¿Dónde vives?","Where","What|Who|When","Para preguntar por un lugar, \"where\"."],
["fi","What time __ it?","¿Qué hora es?","is","do|does|are","La hora se pregunta con \"be\": \"What time is it?\"."],
["ty","¿Hablas inglés?","Do you speak English|Can you speak English","do · speak · English — pregunta con auxiliar","Are","La pregunta necesita el auxiliar \"Do\" antes de \"you\"."],
["ty","¿Dónde está el baño?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — con el verbo be","a","Con \"be\", \"is\" va antes del sujeto: \"Where is the bathroom?\"."],
["ty","¿Te gustan los perros?","Do you like dogs","do · like · dog — en plural","dog","\"Like\" necesita el auxiliar \"Do\"; los perros en general van en plural y sin \"the\"."]]},

{ id:"third-s", title:"he, she, it: la -s y does / doesn't", blurb:"Con una sola persona o cosa, el verbo lleva -s. En preguntas y negativas, does.", deck:"Presentarse", body:`
<p>Es la regla que más olvidan los hispanohablantes. En español cada persona tiene su terminación (trabajo, trabajas, trabaja…). En inglés el presente casi no cambia: <b>solo la tercera persona del singular</b> (<i>he, she, it</i>, o una persona o cosa) lleva <b>-s</b>.</p>
<div class="tbl"><table><tr><th>Sujeto</th><th>Verbo</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|shi WERKS et e BANK|Trabaja en un banco}}{{ex:He likes soccer.|ji LAIKS SAA-ker|Le gusta el fútbol}}{{ex:My mom cooks well.|mai MAAM KUKS WEL|Mi mamá cocina bien}}
<h3>Verbos que cambian un poco</h3>
{{ex:She has a car.|shi jas e KAAR|Ella tiene auto (have → has)}}{{ex:He goes to work at eight.|ji GOUS te WERK et EIT|Él entra a trabajar a las ocho (go → goes)}}{{ex:She studies English.|shi STA-dis ING-glish|Ella estudia inglés (study → studies)}}
<h3>Negativas y preguntas: does</h3>
<p>Con <b>doesn't</b> o <b>Does</b>, la -s se va al auxiliar y el verbo principal vuelve a su forma base.</p>
{{ex:He doesn't drink coffee.|ji DA-sent DRINK KO-fi|Él no toma café}}{{ex:Does she live here?|das shi LIV JIR?|¿Ella vive aquí?}}
<div class="tip">Errores comunes: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ · <b>My brother don't like it.</b> ✗ → <b>My brother doesn't like it.</b> ✓ · <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Lima. ¿Qué va en el hueco?",["live","lives","living","is live"],1,"Con \"she\", el verbo lleva -s: tercera persona."],["He ___ like coffee. ¿Qué va en el hueco?",["don't","isn't","doesn't","not"],2,"Con \"he\", la negativa es \"doesn't\"."],["¿Cómo se dice «Ella tiene auto»?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Con \"she\", \"have\" se convierte en \"has\"."]],
practice:[
["mc","My brother ___ in Bogotá. ¿Qué va en el hueco?","works","work","working","is work","\"My brother\" es una sola persona: \"works\" (tercera persona)."],
["mc","¿Cómo se dice «Él no toma café»?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Con \"he\": \"doesn't\" + verbo en forma base."],
["mc","¿Cómo se dice «¿Ella vive aquí?»?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Después de \"Does\", el verbo va sin -s."],
["mc","\"have\" con \"she\": ¿qué forma lleva?","has","haves","have","is have","Con \"she\", \"have\" se convierte en \"has\"."],
["mc","\"study\" con \"he\": ¿qué forma lleva?","studies","studys","study","studyes","Consonante + y → -ies: \"studies\"."],
["or","Ella trabaja en un banco","She works at a bank","work the","Con \"she\", el verbo lleva -s: tercera persona."],
["or","Él tiene dos perros","He has two dogs","have dog","Con \"he\", \"have\" pasa a \"has\": tercera persona."],
["or","Ella no come carne","She doesn't eat meat","eats","Después del auxiliar \"doesn't\", el verbo va sin -s."],
["fi","He __ soccer.","A él le gusta el fútbol","likes","like|liking|is like","Con \"he\", \"likes\" (tercera persona)."],
["fi","__ she speak English?","¿Ella habla inglés?","Does","Do|Is|Are","Con \"she\", la pregunta lleva el auxiliar \"Does\"."],
["fi","She __ to work at eight.","Ella entra a trabajar a las ocho","goes","go|going|gos","\"Go\" se convierte en \"goes\"."],
["ty","Él tiene auto","He has a car","has · car — con he","have","Con \"he\", \"have\" se convierte en \"has\": tercera persona."],
["ty","A ella le gustan los gatos","She likes cats","likes · cat — con she, en plural","cat","Con \"she\", \"likes\" lleva -s (tercera persona); los gatos en general, en plural."],
["ty","Él no vive aquí","He doesn't live here","doesn't · live · here — forma base","lives","Después del auxiliar \"doesn't\", el verbo va en forma base."]]},

{ id:"countable", title:"Contables e incontables: advice, information, some, much", blurb:"«Consejos» e «informaciones» se cuentan en español, pero advice e information no llevan -s en inglés.", deck:"En el restaurante", body:`
<p>Los sustantivos ingleses se dividen en <b>contables</b> e <b>incontables</b>. La idea existe en español («mucha agua», «poco dinero»), pero algunas palabras que en español se cuentan son incontables en inglés.</p>
<div class="tbl"><table><tr><th>Contables</th><th>Incontables</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, números, -s</td><td>sin a / an, sin números, sin -s</td></tr></table></div>
<h3>Cuidado: en español sí se cuentan</h3>
<p><i>advice</i> (consejos), <i>information</i> (información, datos), <i>news</i> (noticias), <i>furniture</i> (muebles), <i>homework</i> (tareas), <i>luggage</i> (maletas). Nunca llevan -s ni <i>a</i>, y el verbo va en singular.</p>
{{ex:Can I give you some advice?|ken ai GUIV iu sem ed-VAIS?|¿Te puedo dar un consejo?}}{{ex:The news is good.|dhe NUUS is GUD|Las noticias son buenas}}{{ex:a piece of furniture|e PIIS ev FER-ni-cher|un mueble}}
<h3>some y any</h3>
<p><b>some</b> en afirmativas; <b>any</b> en negativas y preguntas (pero al pedir u ofrecer algo se usa <b>some</b>: <i>Can I have some water?</i>). Y una sola negación: «No tengo nada de dinero» es <i>I don't have any money</i>, no <i>I don't have no money</i>.</p>
{{ex:I have some money.|ai jav sem MA-ni|Tengo algo de dinero}}{{ex:I don't have any money.|ai DOUNT jav E-ni MA-ni|No tengo nada de dinero}}{{ex:Do you have any questions?|du iu jav E-ni KWES-chens?|¿Tienes alguna pregunta?}}
<h3>many y much</h3>
<p>Contables: <b>many</b> + plural. Incontables: <b>much</b>. <b>a lot of</b> sirve para los dos.</p>
{{ex:How many people?|JAU ME-ni PII-pel?|¿Cuántas personas?}}{{ex:I don't have much time.|ai DOUNT jav MACH TAIM|No tengo mucho tiempo}}
<h3>Para contar lo incontable</h3>
{{ex:a glass of water|e GLAS ev WO-rer|un vaso de agua}}{{ex:a cup of coffee|e KAP ev KO-fi|una taza de café}}
<div class="tip">Errores comunes: <b>some advices</b> ✗ → <b>some advice</b> ✓ · <b>an information</b> ✗ → <b>some information</b> ✓ · <b>The news are good.</b> ✗ → <b>The news is good.</b> ✓ · <b>many money</b> ✗ → <b>much money</b> ✓</div>`,
check:[["How ___ people are there? ¿Qué va en el hueco?",["much","many","any","a"],1,"\"People\" se puede contar: \"many\"."],["¿Cuál de estos sustantivos es incontable en inglés?",["apple","chair","advice","friend"],2,"\"Advice\" no lleva a ni -s, aunque en español digas «consejos»."],["I don't have ___ money. ¿Qué va en el hueco?",["some","a","many","any"],3,"En las negativas se usa \"any\"."]],
practice:[
["mc","Can I have ___ water? ¿Qué va en el hueco?","some","a","many","an","\"Water\" es incontable: no lleva a ni many."],
["mc","¿Cómo se dice «Necesito consejos»?","I need some advice.","I need some advices.","I need an advice.","I need many advices.","«Consejos» es plural en español, pero \"advice\" es incontable: \"some advice\"."],
["mc","¿Cómo se dice «¿Tienes alguna pregunta?»?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Después de \"any\", un sustantivo contable va en plural."],
["mc","¿Cuál es correcta?","I need some information.","I need some informations.","I need an information.","I need many informations.","\"Information\" es incontable: nunca lleva -s ni an."],
["mc","How ___ time do we have? ¿Qué va en el hueco?","much","many","any","a","\"Time\" es incontable: \"much\"."],
["or","Este consejo es muy útil","This advice is very useful","are","\"Advice\" es incontable: va en singular, con \"is\" (concordancia)."],
["or","Las noticias son buenas","The news is good","are","\"News\" es incontable: el verbo va en singular, \"is\" (concordancia)."],
["or","No tengo mucho tiempo","I don't have much time","many","\"Time\" es incontable: \"much\", no \"many\"."],
["fi","How __ is this?","¿Cuánto cuesta esto?","much","many|any|some","El precio se pregunta con \"how much\"."],
["fi","I don't have __ questions.","No tengo preguntas","any","some|much|a","En las negativas se usa \"any\"."],
["fi","The furniture __ new.","Los muebles son nuevos","is","are|have|has","\"Furniture\" es incontable: singular, con \"is\" (concordancia)."],
["ty","¿Me das un poco de agua?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|Can you give me some water|Could you give me some water","can I have · water — con some","a","En la pregunta, el auxiliar \"can\" va antes de \"I\"; \"water\" es incontable: \"some\"."],
["ty","¿Tienes alguna pregunta?","Do you have any questions","do · have · any · question — en plural","much","\"Have\" necesita el auxiliar \"Do\" en la pregunta; \"questions\" va en plural."],
["ty","Esta información es útil","This information is useful","this · information · useful — es incontable","are","\"Information\" es incontable: singular, con \"is\" (concordancia)."]]},

{ id:"object-have", title:"me, him, her, su… y cuándo «tener» es be", blurb:"El pronombre objeto va después del verbo, su es his, her o their, y «tengo 20 años» se dice con be.", deck:"Presentarse", body:`
<p>Los pronombres objeto te resultarán fáciles: el español también tiene <i>me, lo, la</i>. La diferencia es el lugar: en inglés van <b>después</b> del verbo. «La quiero» es <i>I love her</i>, nunca <i>I her love</i>.</p>
<div class="tbl"><table><tr><th>Sujeto</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Objeto</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|shi NOUS mi|Ella me conoce}}{{ex:I like him.|ai LAIK jim|Me cae bien (él)}}{{ex:Can you help us?|ken iu JELP as?|¿Nos puedes ayudar?}}{{ex:I love her.|ai LAV jer|La quiero}}
<h3>su: his, her o their</h3>
<p>«su» no dice de quién es la cosa. En inglés eliges según el <b>dueño</b>: <i>his</i> (de él), <i>her</i> (de ella), <i>their</i> (de ellos o ellas). Lo que se posee no importa.</p>
{{ex:Ana loves her brother.|AA-ne LAVS jer BRA-dher|Ana quiere a su hermano}}{{ex:Carlos and his sister|KAAR-lous en jis SIS-ter|Carlos y su hermana}}
<h3>have = tener (cosas, familia, tiempo)</h3>
{{ex:I have two brothers.|ai jav TUU BRA-dhers|Tengo dos hermanos}}{{ex:Do you have a pen?|du iu jav e PEN?|¿Tienes un bolígrafo?}}{{ex:Let's have lunch.|lets jav LANCH|Vamos a almorzar}}
<h3>Pero «tener» no siempre es have</h3>
<p>La edad, el hambre, el frío, la sed y la razón se dicen con <b>be</b>.</p>
{{ex:I'm 20 years old.|aim TWEN-ti IIRS OULD|Tengo 20 años}}{{ex:I'm hungry.|aim JANG-gri|Tengo hambre}}{{ex:Are you cold?|er iu KOULD?|¿Tienes frío?}}{{ex:You're right.|iur RAIT|Tienes razón}}
<div class="tip">Errores comunes: <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓ · <b>I have hungry.</b> ✗ → <b>I'm hungry.</b> ✓ · <b>Ana loves his brother.</b> ✗ → <b>Ana loves her brother.</b> ✓</div>`,
check:[["I like ___. (a él)",["he","his","him","he's"],2,"Después del verbo va el pronombre objeto \"him\"."],["¿Cómo se dice «Tengo hambre»?",["I'm hungry.","I have hungry.","I have hunger.","I'm hunger."],0,"«Tener hambre» se dice con \"be\": \"I'm hungry\"."],["¿Cómo se dice «¿Tienes un bolígrafo?»?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" es un verbo normal: la pregunta lleva \"Do\"."]],
practice:[
["mc","She knows ___. (a mí) ¿Qué va en el hueco?","me","I","my","mine","Después del verbo va el pronombre objeto \"me\"."],
["mc","¿Cómo se dice «Tengo 25 años»?","I'm 25.","I have 25 years.","I have 25.","I'm 25 years.","La edad se dice con \"be\", no con \"have\"."],
["mc","¿Cómo se dice «Ana quiere a su hermano»?","Ana loves her brother.","Ana loves his brother.","Ana loves their brother.","Ana her brother loves.","«Su» = de ella (Ana): \"her\"."],
["mc","¿Cómo se dice «Tienes razón»?","You're right.","You have reason.","You have right.","You're reason.","«Tener razón» es \"be right\"."],
["mc","¿Cómo se dice «La quiero»?","I love her.","I her love.","I love she.","Her I love.","El pronombre objeto va después del verbo."],
["or","¿Tienes un bolígrafo?","Do you have a pen","Are","\"Have\" necesita el auxiliar \"Do\"; \"Are you have\" no existe."],
["or","¿Tienes frío?","Are you cold","have","«Tener frío» es \"be cold\": en la pregunta, \"are\" va antes del sujeto \"you\"."],
["or","Carlos quiere a su hermana","Carlos loves his sister","her","«Su» = de él (Carlos): \"his\"."],
["fi","Call __ tonight.","Llámame esta noche","me","I|my|mine","Después del verbo va \"me\"."],
["fi","I __ hungry.","Tengo hambre","am","have|has|is","«Tener hambre» se dice con \"be\": \"I am hungry\"."],
["fi","Sofía and __ husband live in Madrid.","Sofía y su esposo viven en Madrid","her","his|their|she","«Su» = de ella (Sofía): \"her\"."],
["ty","¿Me puedes ayudar?","Can you help me|Could you help me","can you · help · me — con auxiliar","I","En la pregunta, el auxiliar \"can\" va antes de \"you\"; después del verbo, \"me\"."],
["ty","¿Tienes hambre?","Are you hungry","are · hungry — con be, no have","have","«Tener hambre» es \"be hungry\": en la pregunta, \"are\" va antes del sujeto \"you\"."],
["ty","Él tiene 30 años","He is 30|He is 30 years old|He is thirty|He is thirty years old","he · 30 — con be, no have","has","La edad va con \"be\": con \"he\", \"is\" (tercera persona)."]]},

{ id:"can-like", title:"can, like + -ing, I'd like: lo que sabes hacer y lo que quieres", blurb:"«Me gusta» es I like: quien siente el gusto es el sujeto. Y para pedir, I'd like.", deck:"Charla casual", body:`
<p>Tres estructuras que usarás al presentarte y al pedir algo.</p>
<h3>can: poder, saber hacer</h3>
<p><b>can + verbo en forma base</b>. Nunca lleva -s, ni siquiera con <i>he</i> o <i>she</i>, y no usa <i>do</i>: la pregunta es <i>Can you…?</i>.</p>
{{ex:I can swim.|ai ken SWIM|Sé nadar}}{{ex:I can't drive.|ai KANT DRAIV|No sé manejar}}{{ex:Can you speak English?|ken iu SPIIK ING-glish?|¿Sabes hablar inglés?}}
<h3>gustar al revés: I like</h3>
<p>En español la cosa es el sujeto: «me gusta la pizza», «me gustan los perros». En inglés el sujeto es <b>la persona</b>: <i>I like pizza</i>, <i>I like dogs</i>. El verbo concuerda con <i>I</i>, no con los perros.</p>
{{ex:I like pizza.|ai LAIK PIIT-se|Me gusta la pizza}}{{ex:She likes dogs.|shi LAIKS DOGS|Le gustan los perros (a ella)}}
<h3>like + -ing: los gustos y aficiones</h3>
<p>Después de <i>like</i> o <i>love</i>, el verbo va en la forma -ing (gerundio): «me gusta cocinar» es <i>I like cooking</i>. También se oye <i>like</i> + <i>to</i>: <i>I like to cook</i>.</p>
{{ex:I like cooking.|ai LAIK KU-king|Me gusta cocinar}}{{ex:I love watching movies.|ai LAV WAA-ching MUU-vis|Me encanta ver películas}}{{ex:I don't like running.|ai DOUNT LAIK RA-ning|No me gusta correr}}
<h3>I'd like: quisiera</h3>
<p><i>I like</i> es un gusto general; <i>I'd like</i> es lo que quieres ahora, de forma amable. Para pedir, usa <i>I'd like</i>.</p>
{{ex:I'd like a coffee, please.|aid LAIK e KO-fi PLIIS|Un café, por favor}}{{ex:Would you like some tea?|wud iu LAIK sem TII?|¿Quieres un té?}}
<div class="tip">Errores comunes: <b>Pizza likes me.</b> ✗ → <b>I like pizza.</b> ✓ · <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ · en la cafetería, <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. ¿Qué va en el hueco?",["sings","sing","singing","to sing"],1,"Después de \"can\" va el verbo en forma base."],["¿Cómo se dice «Me gusta cocinar»?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Después de \"like\", la forma -ing."],["En una cafetería, ¿qué es lo más natural para pedir?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Lo que quieres ahora se pide con \"I'd like\"."]],
practice:[
["mc","He can ___ English. ¿Qué va en el hueco?","speak","speaks","speaking","to speak","Después de \"can\" va el verbo en forma base, sin -s."],
["mc","¿Cómo se dice «Me gusta la pizza»?","I like pizza.","Pizza likes me.","Me like pizza.","I'm like pizza.","En inglés, quien siente el gusto es el sujeto: \"I like\"."],
["mc","¿Cómo se dice «Me gustan los perros»?","I like dogs.","I likes dogs.","Like me dogs.","Me like dogs.","«Me gustan» es \"I like\": el verbo va con \"I\", no con los perros."],
["mc","Para pedir en una cafetería, «Un café, por favor» es:","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Lo que quieres ahora se pide con \"I'd like\"."],
["mc","¿Cómo se dice «No sé manejar»?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can\" no usa \"do\": la negativa es \"can't\"."],
["or","¿Sabes nadar?","Can you swim","swimming","En la pregunta, el auxiliar \"can\" va antes del sujeto."],
["or","A ella le gusta bailar","She likes dancing","like","Con \"she\", \"likes\" lleva -s (tercera persona): quien siente el gusto es ella."],
["or","Me gusta leer libros","I like reading books","read","Después de \"like\", la forma -ing: \"reading\"."],
["fi","I can't __.","No sé nadar","swim","swimming|swims|to swim","Después de \"can't\" va la forma base."],
["fi","I like __ music.","Me gusta escuchar música","listening to","listen to|listen|to listening","Después de \"like\", la forma -ing."],
["fi","__ like a sandwich, please.","Un sándwich, por favor","I'd|I would","I|I'm|I can","Para pedir se usa \"I'd like\"."],
["ty","Me gusta cocinar","I like cooking|I love cooking|I like to cook","like · cook — forma -ing","cook","Después de \"like\" va la forma -ing (o \"to\" + verbo)."],
["ty","¿Puedes venir mañana?","Can you come tomorrow","can · come · tomorrow — pregunta con can","coming","En la pregunta, el auxiliar \"can\" va antes de \"you\"."],
["ty","¿A él le gustan los gatos?","Does he like cats","does · like · cat — en plural","likes","La pregunta lleva el auxiliar \"Does\", y \"like\" queda en forma base."]]},

{ id:"continuous", title:"Lo que pasa ahora: be + -ing", blurb:"«¿Qué haces?» sirve para todo en español. En inglés, lo que pasa ahora es be + -ing.", deck:"Charla casual", body:`
<p>En español puedes usar el presente simple para lo que pasa ahora mismo: «¿Qué haces?», «Trabajo». En inglés no: lo que ocurre <b>en este momento</b> va con <b>be + verbo en -ing</b>. La forma existe en español («estoy trabajando»), pero en inglés es obligatoria.</p>
{{ex:I'm working now.|aim WER-king NAU|Estoy trabajando ahora}}{{ex:She's cooking dinner.|shis KU-king DI-ner|Está preparando la cena}}{{ex:It's raining.|its REI-ning|Está lloviendo}}
<h3>Preguntas y negativas</h3>
<p>Como siempre con <i>be</i>: para preguntar, <i>am / is / are</i> va antes del sujeto; para negar, <i>not</i> después.</p>
{{ex:What are you doing?|WAT er iu DUU-ing?|¿Qué haces? (ahora)}}{{ex:Are you listening?|er iu LI-se-ning?|¿Me estás escuchando?}}{{ex:I'm not sleeping.|aim NAAT SLII-ping|No estoy durmiendo}}
<h3>Comparado con el presente simple</h3>
<div class="tbl"><table><tr><th>Siempre (presente simple)</th><th>Ahora (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Ojo: <i>What do you do?</i> pregunta a qué te dedicas; <i>What are you doing?</i>, qué haces ahora.</p>
<h3>Verbos que no van con -ing</h3>
<p><i>like, know, want, need, have</i> (tener) expresan un <b>estado</b>: van en presente simple aunque hables de ahora.</p>
{{ex:I know him.|ai NOU jim|Lo conozco}}{{ex:I want some water.|ai WAANT sem WO-rer|Quiero agua}}
<div class="tip">Errores comunes: <b>What do you do now?</b> ✗ → <b>What are you doing?</b> ✓ · <b>I working.</b> ✗ → <b>I'm working.</b> ✓ · <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["¿Cómo se dice «¿Qué estás haciendo?»?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Lo que pasa ahora se pregunta con \"be\" + -ing."],["I ___ coffee every morning. ¿Qué va en el hueco?",["am drinking","drinking","drink","am drink"],2,"Un hábito diario va en presente simple."],["¿Cuál de estas oraciones es correcta?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" y \"have\" (tener) no van con -ing."]],
practice:[
["mc","¿Cómo se dice «Estoy trabajando ahora»?","I'm working now.","I work now am.","I'm work now.","I working now.","Lo que pasa ahora: \"be\" + forma -ing; no olvides \"am\"."],
["mc","¿Cómo se dice «Ella está preparando la cena»?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","\"Be\" + -ing, y las comidas van sin artículo."],
["mc","¿Cuál describe algo que haces todos los días?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Los hábitos van en presente simple."],
["mc","Tu amigo te llama y le preguntas «¿Qué haces?». ¿Qué dices?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Lo que pasa ahora: palabra interrogativa + \"are\" + \"you\" + -ing."],
["mc","¿Cómo se dice «Lo conozco»?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" es un verbo de estado: no va con -ing."],
["or","¿Qué haces? (ahora)","What are you doing","do","Para lo que pasa ahora: palabra interrogativa + auxiliar \"are\" + sujeto + -ing."],
["or","Los niños están jugando","The kids are playing","is","\"Kids\" es plural: \"are\" (concordancia)."],
["or","Estoy leyendo un libro","I'm reading a book","read","Lo que pasa ahora: \"be\" + forma -ing."],
["fi","I'm __ TV.","Estoy viendo la tele","watching","watch|watches|to watch","Después de \"be\" va la forma -ing."],
["fi","What __ you doing?","¿Qué estás haciendo?","are","do|is|does","Con \"you\", el auxiliar es \"are\"."],
["fi","She __ working today.","Hoy ella no trabaja","isn't|is not","doesn't|don't|not","La negativa de \"be\" + -ing es \"isn't\"."],
["ty","Ahora estoy cocinando","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — forma -ing","cook","Lo que pasa ahora: \"be\" + forma -ing."],
["ty","¿Está lloviendo?","Is it raining","is · it · rain — forma -ing","rains","En la pregunta, el auxiliar \"is\" va antes de \"it\"."],
["ty","Ella está trabajando hoy","She is working today","she · work · today — forma -ing","works","Con \"she\", el auxiliar es \"is\" (concordancia), más la forma -ing."]]},

{ id:"past", title:"Pasado: was / were, -ed y did", blurb:"El pasado no cambia con la persona. Lo difícil: cómo suena -ed y el auxiliar did.", deck:"Charla casual", body:`
<p>El concepto ya lo conoces: el inglés tiene un pasado como «trabajé». Y la buena noticia: <b>no cambia con la persona</b> (<i>I worked, she worked, they worked</i>). Lo difícil está en dos sitios: cómo suena <b>-ed</b> y el auxiliar <b>did</b>.</p>
<h3>was / were</h3>
<p><b>was</b> con <i>I, he, she, it</i>; <b>were</b> con <i>you, we, they</i>.</p>
{{ex:I was tired.|ai wes TAI-erd|Estaba cansada}}{{ex:It was fun.|it wes FAN|Fue divertido}}{{ex:We were at home.|wi wer et JOUM|Estábamos en casa}}{{ex:Were you busy?|wer iu BI-si?|¿Estabas ocupado?}}
<h3>-ed: tres sonidos</h3>
<p>No pronuncies -ed como «ed» siempre. Después de un sonido sordo suena <b>t</b>; después de uno sonoro, <b>d</b>; solo después de t o d se agrega una sílaba: <b>id</b>.</p>
<div class="tbl"><table><tr><th>suena t</th><th>suena d</th><th>suena id</th></tr><tr><td class="k">worked, watched, helped</td><td class="k">played, called, lived</td><td class="k">wanted, needed</td></tr></table></div>
{{ex:I worked yesterday.|ai WERKT IES-ter-dei|Ayer trabajé}}{{ex:We watched a movie.|wi WAACHT e MUU-vi|Vimos una película}}{{ex:She called me.|shi KOLD mi|Me llamó (ella)}}{{ex:I wanted coffee.|ai WAAN-tid KO-fi|Quería café}}
<h3>Negativas y preguntas: did</h3>
<p>Igual que <i>do</i> en el presente, el pasado usa el auxiliar <b>did</b>, y el verbo vuelve a su forma base: <i>Did you call?</i>, nunca <i>Did you called?</i>.</p>
{{ex:I didn't work yesterday.|ai DI-dent WERK IES-ter-dei|Ayer no trabajé}}{{ex:Did you call me?|did iu KOL mi?|¿Me llamaste?}}
<div class="tip">Errores comunes: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ · <b>You called me?</b> ✗ → <b>Did you call me?</b> ✓ · <b>work-ed</b> en dos sílabas ✗ → <b>worked</b> en una sílaba ✓</div>`,
check:[["They ___ at home yesterday. ¿Qué va en el hueco?",["was","were","did","are"],1,"Con \"they\", el pasado de \"be\" es \"were\"."],["¿Cómo se dice «Ayer no trabajé»?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Después de \"didn't\" va el verbo en forma base."],["Did you ___ the movie? ¿Qué va en el hueco?",["watch","watched","watching","watches"],0,"Después de \"Did\" va el verbo en forma base."]],
practice:[
["mc","I ___ tired yesterday. ¿Qué va en el hueco?","was","were","did","am","Con \"I\", el pasado de \"be\" es \"was\"."],
["mc","¿Cómo se dice «¿Llamaste ayer?»?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Con \"did\", el verbo vuelve a la forma base."],
["mc","¿En cuál de estos verbos la -ed se pronuncia como una sílaba más?","wanted","worked","played","watched","La -ed suena como sílaba aparte solo después de t o d: \"wanted\"."],
["mc","¿Cómo se dice «Fue divertido»?","It was fun.","Was fun.","It were fun.","It did fun.","Con \"it\", el pasado de \"be\" es \"was\", y no se omite \"it\"."],
["mc","¿Cómo se dice «¿Estabas ocupado?»?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" es un estado: se pregunta con \"be\" (were)."],
["or","¿Me llamaste?","Did you call me","called","La pregunta en pasado lleva el auxiliar \"Did\" y el verbo en forma base."],
["or","Estábamos en casa","We were at home","was","Con \"we\", el pasado de \"be\" es \"were\" (concordancia)."],
["or","Ayer no trabajé","I didn't work yesterday","worked","Después del auxiliar \"didn't\", el verbo va en forma base."],
["fi","We __ at home last night.","Anoche estábamos en casa","were","was|did|are","Con \"we\", el pasado de \"be\" es \"were\"."],
["fi","I __ soccer yesterday.","Ayer jugué al fútbol","played","play|playing|was play","Pasado regular: \"play\" + -ed."],
["fi","__ you work yesterday?","¿Trabajaste ayer?","Did","Were|Do|Was","Pregunta en pasado con un verbo normal: \"Did\"."],
["ty","Fue divertido","It was fun","it · fun — el sujeto es obligatorio","were","«Fue divertido» no tiene sujeto en español, pero en inglés sí: \"it was\"."],
["ty","¿Trabajaste ayer?","Did you work yesterday","did · work · yesterday — en forma base","worked","La pregunta en pasado lleva el auxiliar \"Did\"; el verbo queda en forma base."],
["ty","Vi una película","I watched a movie|I saw a movie","watched · movie — pasado con -ed","watch","Pasado regular: \"watch\" + -ed, y aquí la -ed suena como t."]]},

{ id:"irregular-past", title:"Pasado irregular: went, ate, saw", blurb:"Los verbos más comunes no llevan -ed. Aprende primero estos doce.", deck:"Charla casual", body:`
<p>Igual que en español (fui, comí, vi), los verbos más comunes son <b>irregulares</b>. No hay regla: apréndelos en parejas.</p>
<div class="tbl"><table><tr><th>Presente</th><th>Pasado</th><th>Presente</th><th>Pasado</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Lima.|ai WENT te LII-me|Fui a Lima}}{{ex:We ate pizza.|wi EIT PIIT-se|Comimos pizza}}{{ex:I saw a movie.|ai SO e MUU-vi|Vi una película}}{{ex:I met my friends.|ai MET mai FRENDS|Me encontré con mis amigos}}{{ex:I bought a book.|ai BOT e BUK|Compré un libro}}
<h3>En preguntas y negativas, forma base</h3>
<p>El auxiliar <b>did</b> ya marca el pasado, así que el verbo vuelve a su forma base. Es el error más común: <i>Did you went?</i>.</p>
{{ex:What did you do?|WAT did iu DUU?|¿Qué hiciste?}}{{ex:Where did you go?|WER did iu GOU?|¿Adónde fuiste?}}{{ex:I didn't go.|ai DI-dent GOU|No fui}}
<div class="tip">Errores comunes: <b>I goed.</b> ✗ → <b>I went.</b> ✓ · <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ · <b>Where you went?</b> ✗ → <b>Where did you go?</b> ✓</div>`,
check:[["¿Cuál es el pasado de \"go\"?",["goed","gone","went","going"],2,"El pasado de \"go\" es \"went\"."],["¿Cómo se dice «¿Qué hiciste?»?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Después de \"did\" va la forma base \"do\"."],["I didn't ___ breakfast. ¿Qué va en el hueco?",["ate","eaten","eats","eat"],3,"Después de \"didn't\" va el verbo en forma base."]],
practice:[
["mc","¿Cuál es el pasado de \"eat\"?","ate","eated","eat","eaten","El pasado de \"eat\" es \"ate\"."],
["mc","¿Cómo se dice «¿Adónde fuiste?»?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Después de \"did\" va el verbo en forma base."],
["mc","¿Cómo se dice «Compré un libro»?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","El pasado de \"buy\" es \"bought\"."],
["mc","¿Cuál es el pasado de \"see\"?","saw","seed","seen","sawed","El pasado de \"see\" es \"saw\"."],
["mc","¿Cómo se dice «No fui»?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Después de \"didn't\" va el verbo en forma base."],
["or","¿Adónde fuiste?","Where did you go","went","Pregunta en pasado: \"Where\" + auxiliar \"did\" + forma base \"go\"."],
["or","¿Qué comiste?","What did you eat","ate","Con el auxiliar \"did\", el verbo va en forma base: \"eat\", no \"ate\"."],
["or","Vi una película","I saw a movie","see","El pasado de \"see\" es \"saw\"."],
["fi","I __ to Mexico last year.","El año pasado fui a México","went","go|goed|gone","El pasado de \"go\" es \"went\"."],
["fi","What did you __?","¿Qué comiste?","eat","ate|eaten|eating","Después de \"did\" va el verbo en forma base."],
["fi","She __ a new phone.","Ella se compró un celular nuevo","bought","buyed|buy|buys","El pasado de \"buy\" es \"bought\"."],
["ty","Fui a Buenos Aires","I went to Buenos Aires","went · to · Buenos Aires — pasado","go","El pasado de \"go\" es \"went\"."],
["ty","¿Qué hiciste?","What did you do","what · did · do — forma base","done","Con el auxiliar \"did\", el verbo vuelve a la forma base: \"do\"."],
["ty","No fui","I didn't go","didn't · go — forma base","went","Después del auxiliar \"didn't\" va \"go\", no \"went\"."]]},

{ id:"the", title:"the: donde el español pone «el» y el inglés no", blurb:"La vida, los perros, el pelo: en inglés, Life, dogs y my hair. Repaso rápido de a y the.", deck:"Direcciones y transporte", body:`
<p>El español y el inglés coinciden en lo básico: la primera vez, <i>a</i> (un); la segunda, <i>the</i> (el). Eso ya lo haces bien. Los problemas están donde el español pone <i>el / la / los</i> y el inglés no.</p>
<h3>Repaso: a primero, the después</h3>
{{ex:I bought a shirt. The shirt is blue.|ai BOT e SHERT. dhe SHERT is BLUU|Compré una camisa. La camisa es azul}}{{ex:Can you open the window?|ken iu OU-pen dhe WIN-dou?|¿Puedes abrir la ventana?}}
<h3>En general, sin the</h3>
<p>«La vida es difícil», «Me encantan los perros», «El café es caro»: cuando hablas de algo <b>en general</b>, en inglés va <b>sin artículo</b>.</p>
{{ex:Life is hard.|LAIF is JAARD|La vida es difícil}}{{ex:I love dogs.|ai LAV DOGS|Me encantan los perros}}{{ex:Coffee is expensive here.|KO-fi is ik-SPEN-siv JIR|El café es caro aquí}}
<h3>El cuerpo: posesivo, no the</h3>
<p>Donde el español dice «me lavé <b>el</b> pelo», el inglés usa el adjetivo posesivo: <i>my hair</i>.</p>
{{ex:I washed my hair.|ai WAASHT mai JER|Me lavé el pelo}}{{ex:She broke her leg.|shi BROUK jer LEG|Se rompió la pierna}}{{ex:My head hurts.|mai JED JERTS|Me duele la cabeza}}
<h3>Sin artículo: casa, trabajo, autobús</h3>
{{ex:I go to work by bus.|ai GOU te WERK bai BAS|Voy al trabajo en autobús}}{{ex:I'm at home.|aim et JOUM|Estoy en casa}}
<div class="tip">Errores comunes: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ · <b>I washed the hair.</b> ✗ → <b>I washed my hair.</b> ✓ · <b>I go to the work.</b> ✗ → <b>I go to work.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. ¿Qué va en el hueco?",["A","An","The","(sin artículo)"],2,"Ya mencionaste el gato: \"the\"."],["I go to ___ work by bus. ¿Qué va en el hueco?",["a","the","an","(sin artículo)"],3,"\"Go to work\" va sin artículo."],["¿Cómo se dice «Me lavé el pelo»?",["I washed the hair.","I washed my hair.","I washed hair.","I washed a hair."],1,"Con partes del cuerpo, el inglés usa posesivo: \"my hair\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. ¿Qué va en el hueco?","The","A","An","Some","Ya mencionaste la camisa: \"the\"."],
["mc","¿Cómo se dice «La vida es bella»?","Life is beautiful.","The life is beautiful.","A life is beautiful.","The life are beautiful.","Para hablar de algo en general, sin artículo."],
["mc","¿Cómo se dice «Ella se rompió la pierna»?","She broke her leg.","She broke the leg.","She broke a leg.","She broke leg.","Con partes del cuerpo, el inglés usa posesivo: \"her leg\"."],
["mc","¿Cuál es correcta?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" y \"by bus\" van sin artículo."],
["mc","¿Cómo se dice «Me encantan los perros»?","I love dogs.","I love the dogs.","I love a dogs.","The dogs I love.","En general, plural sin \"the\": \"I love dogs\"."],
["or","¿Puedes abrir la ventana?","Can you open the window","a","En la pregunta, el auxiliar \"can\" va antes de \"you\"; \"the\" porque los dos saben qué ventana."],
["or","Me duele la cabeza","My head hurts","The hurt","En inglés se dice \"my head\", no \"the head\"; y \"hurts\" lleva -s de tercera persona."],
["or","La vida es difícil","Life is hard","The","Con sustantivos abstractos en general no va \"the\": \"Life is hard\"."],
["fi","I saw a movie. __ movie was great.","Vi una película. La película estuvo genial","The","A|An|Some","Ya mencionaste la película: \"the\"."],
["fi","I brushed __ teeth.","Me lavé los dientes","my","the|a|some","Con partes del cuerpo se usa posesivo: \"my teeth\"."],
["fi","I'm at __.","Estoy en casa","home","the home|a home|house","\"At home\" va sin artículo."],
["ty","Me lavé el pelo","I washed my hair","washed · hair — con posesivo","the","Con partes del cuerpo, el inglés usa posesivo: \"my hair\"."],
["ty","¿Dónde está la estación?","Where is the station|Where's the station","where · station — con the","a","Con \"be\", \"is\" va antes del sujeto; \"the\" porque es la estación de aquí."],
["ty","La leche es buena para ti","Milk is good for you","milk · good — sin el artículo","The","En general, \"milk\" va sin artículo; incontable y singular: \"is\" (concordancia)."]]},

{ id:"adjectives", title:"Adjetivos y comparaciones: big houses, cheaper, the best", blurb:"El adjetivo va antes del sustantivo y nunca cambia. Para comparar, -er o more, y than.", deck:"Compras y pagos", body:`
<p>En español el adjetivo suele ir <b>después</b> y concuerda: «unas casas grandes». En inglés va <b>antes</b> del sustantivo y <b>nunca cambia</b>: <i>big houses</i>.</p>
{{ex:a big bag|e BIG BAG|una bolsa grande}}{{ex:red cars|RED KAARS|autos rojos}}{{ex:This bag is big.|dhis BAG is BIG|Esta bolsa es grande}}{{ex:It's too small.|its TUU SMOL|Es demasiado pequeño}}
<h3>Comparar: -er o more, y than</h3>
<p>Palabras cortas: <b>-er</b>. Palabras largas: <b>more</b>. Nunca las dos juntas (<i>more cheaper</i>). Y el «que» de una comparación es <b>than</b>, no <i>that</i>.</p>
<div class="tbl"><table><tr><th>Normal</th><th>Más…</th><th>El más…</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|dhis wan is CHII-per|Este es más barato}}{{ex:It's more expensive than that one.|its MOR ik-SPEN-siv dhen DHAT wan|Es más caro que ese}}{{ex:Do you have a bigger size?|du iu jav e BI-guer SAIS?|¿Tienes una talla más grande?}}
<h3>Superlativo: con the</h3>
{{ex:This is the best restaurant here.|dhis is dhe BEST RES-te-raant JIR|Este es el mejor restaurante de aquí}}{{ex:Which is the cheapest?|WICH is dhe CHII-pest?|¿Cuál es el más barato?}}
<div class="tip">Errores comunes: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>more cheaper</b> ✗ → <b>cheaper</b> ✓ · <b>cheaper that</b> ✗ → <b>cheaper than</b> ✓</div>`,
check:[["¿Cuál es el comparativo de \"big\"?",["more big","biger","bigger","most big"],2,"Palabra corta: -er, y se duplica la consonante final."],["This is ___ expensive than that. ¿Qué va en el hueco?",["more","most","much","very"],0,"Palabra larga: el comparativo lleva \"more\"."],["¿Cuál es el superlativo de \"good\"?",["the goodest","the most good","the better","the best"],3,"\"Good\" → \"better\" → \"the best\"."]],
practice:[
["mc","¿Cuál es el comparativo de \"cheap\"?","cheaper","more cheap","more cheaper","most cheap","Palabras cortas: -er. Nunca \"more\" + -er."],
["mc","¿Cómo se dice «Esto es más caro»?","This is more expensive.","This is expensiver.","This is most expensive.","This is more expensiver.","Palabras largas: \"more\" + adjetivo."],
["mc","¿Cómo se dice «unas casas grandes»?","big houses","bigs houses","houses big","houses bigs","El adjetivo va delante y nunca lleva -s."],
["mc","¿Cómo se dice «Es más barato que el otro»?","It's cheaper than the other one.","It's cheaper that the other one.","It's more cheap that the other one.","It's cheaper as the other one.","El «que» de una comparación es \"than\", no \"that\"."],
["mc","¿Cómo se dice «Es el mejor restaurante»?","It's the best restaurant.","It's the most good restaurant.","It's the restaurant best.","It's best restaurant the.","\"Good\" → \"better\" → \"the best\", y el adjetivo va antes del sustantivo."],
["or","¿Tienes una talla más grande?","Do you have a bigger size","Are","La pregunta con \"have\" lleva el auxiliar \"Do\"."],
["or","Estos zapatos son más baratos","These shoes are cheaper","is","\"Shoes\" es plural: \"are\" (concordancia); el adjetivo no cambia."],
["or","Este es más barato que ese","This is cheaper than that","more","\"-er\" y \"more\" no van juntos."],
["fi","It's __ small.","Es demasiado pequeño","too","much|more|most","«Demasiado» es \"too\"."],
["fi","This is cheaper __ that one.","Este es más barato que ese","than","then|that|more","El «que» de una comparación es \"than\"."],
["fi","It's the __ expensive one.","Es el más caro","most","more|much|very","Palabra larga: el superlativo es \"the most\"."],
["ty","¿Tienes una talla más pequeña?","Do you have a smaller size","do · smaller · size — con auxiliar","Are","La pregunta con \"have\" lleva el auxiliar \"Do\"."],
["ty","Este es el mejor","This is the best|This one is the best","this · the best — con the","a","Superlativo: \"the best\"; con \"this\", el verbo es \"is\" (concordancia)."],
["ty","Tengo un auto rojo","I have a red car","red · car — el adjetivo va antes","reds","El adjetivo va antes del sustantivo: \"a red car\"."]]},

{ id:"going-to", title:"Planes: be going to", blurb:"Funciona como «ir a» + infinitivo. Solo no olvides be: I'm, she's, we're.", deck:"Charla casual", body:`
<p>Buena noticia: <i>going to</i> funciona casi igual que «ir a» + infinitivo. «Voy a viajar» = <i>I'm going to travel</i>. Solo recuerda que <b>be no se puede omitir</b> y cambia con el sujeto (am / is / are).</p>
{{ex:I'm going to visit Lima.|aim GOU-ing te VI-sit LII-me|Voy a visitar Lima}}{{ex:She's going to buy a car.|shis GOU-ing te BAI e KAAR|Va a comprar un auto}}{{ex:We're going to have dinner.|wir GOU-ing te jav DI-ner|Vamos a cenar}}
<h3>Negativas y preguntas</h3>
<p>Como con cualquier <i>be</i>: <i>not</i> después, y para preguntar, <i>be</i> va antes del sujeto. Nada de <i>do</i>.</p>
{{ex:I'm not going to go.|aim NAAT GOU-ing te GOU|No voy a ir}}{{ex:Are you going to come?|er iu GOU-ing te KAM?|¿Vas a venir?}}{{ex:What are you going to do this weekend?|WAT er iu GOU-ing te DUU dhis WIIK-end?|¿Qué vas a hacer este fin de semana?}}
<h3>Predicciones por lo que ves</h3>
<p>Fíjate: «Va a llover» no tiene sujeto en español, pero en inglés sí: <i>it</i>.</p>
{{ex:It's going to rain.|its GOU-ing te REIN|Va a llover}}
<h3>Expresiones de tiempo</h3>
<p><i>tomorrow</i> (mañana), <i>tonight</i> (esta noche), <i>this weekend</i> (este fin de semana), <i>next week</i> (la próxima semana) van al final.</p>
<div class="tip">Al hablar rápido, <i>going to</i> suena <b>gonna</b>. Y no olvides <i>be</i>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["¿Cómo se dice «Mañana voy a ver a mi amigo»?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"\"Be\" + \"going to\" + verbo en forma base."],["She ___ going to study. ¿Qué va en el hueco?",["am","are","is","be"],2,"Con \"she\", \"is\"."],["¿Cómo se dice «¿Qué vas a hacer este fin de semana?»?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Palabra interrogativa + \"be\" + sujeto + \"going to\"."]],
practice:[
["mc","¿Cómo se dice «Voy a ir a Lima»?","I'm going to go to Lima.","I going to go to Lima.","I'm going go to Lima.","I'm go to Lima going.","No olvides \"am\": \"be\" + \"going to\" + verbo."],
["mc","They ___ going to come. ¿Qué va en el hueco?","are","is","am","be","Con \"they\", \"are\"."],
["mc","¿Cómo se dice «Va a llover»?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Después de \"going to\" va la forma base, y la oración necesita \"it\"."],
["mc","¿Cómo se dice «No voy a ir»?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","La negativa pone \"not\" después de \"be\", sin \"don't\"."],
["mc","¿Cómo se dice «¿Vas a venir?»?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Para preguntar, \"be\" va antes de \"you\"."],
["or","¿Vas a venir?","Are you going to come","Do","La pregunta empieza con el auxiliar \"Are\": \"Are you going to…?\"."],
["or","Ellos van a viajar","They are going to travel","is","Con \"they\", el auxiliar es \"are\" (concordancia)."],
["or","Vamos a cenar","We're going to have dinner","a","Las comidas van sin artículo: \"have dinner\"."],
["fi","I'm going __ study tonight.","Esta noche voy a estudiar","to","for|at|will","\"Going to\" + verbo en forma base."],
["fi","__ you going to come?","¿Vas a venir?","Are","Do|Is|Will","Con \"you\", \"Are\"."],
["fi","It's going to __ tomorrow.","Mañana va a llover","rain","rains|raining|rained","Después de \"going to\" va la forma base."],
["ty","Va a llover","It's going to rain","it · going to · rain — con sujeto","rains","«Va a llover» no tiene sujeto en español; en inglés hace falta \"it\"."],
["ty","¿Qué vas a hacer?","What are you going to do","what · going to · do — con are","will","Palabra interrogativa + auxiliar \"are\" + \"you\" + \"going to\"."],
["ty","Voy a ver una película","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — forma base","watching","\"Going to\" + verbo en forma base."]]},

{ id:"joining", title:"Unir oraciones: and, but, or, so, because", blurb:"Dos oraciones cortas en una sola. Y la diferencia entre because y because of.", deck:"Emociones y reacciones", body:`
<p>Si solo dices oraciones cortas, suenas cortado. Con estas palabras unes ideas y hablas con más naturalidad.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|ai LAIK KO-fi en TII|Me gustan el café y el té}}{{ex:I'm tired but happy.|aim TAI-erd bet JA-pi|Estoy cansado pero feliz}}{{ex:Coffee or tea?|KO-fi or TII?|¿Café o té?}}
<h3>so: así que</h3>
<p>causa + <b>so</b> + resultado, como «así que» o «por eso».</p>
{{ex:I was tired, so I went home.|ai wes TAI-erd sou ai WENT JOUM|Estaba cansada, así que me fui a casa}}
<h3>because y because of</h3>
<p><b>because</b> (porque) va antes de una oración con sujeto y verbo; <b>because of</b> (por, a causa de) va antes de un sustantivo. Y después de <i>because</i> el sujeto no se omite: <i>because it was raining</i>, no <i>because was raining</i>.</p>
{{ex:I went home because I was tired.|ai WENT JOUM bi-KOS ai wes TAI-erd|Me fui a casa porque estaba cansado}}{{ex:I stayed home because it was raining.|ai STEID JOUM bi-KOS it wes REI-ning|Me quedé en casa porque estaba lloviendo}}{{ex:I stayed home because of the rain.|ai STEID JOUM bi-KOS ev dhe REIN|Me quedé en casa por la lluvia}}
<h3>too: también</h3>
{{ex:I like it too.|ai LAIK it TUU|A mí también me gusta}}
<div class="tip">No uses <i>because</i> y <i>so</i> en la misma oración: <b>Because I was tired, so I went home.</b> ✗. Elige una de las dos.</div>`,
check:[["I was sick, ___ I stayed home. ¿Qué va en el hueco?",["because","but","so","or"],2,"Primero la causa y después el resultado: \"so\"."],["I stayed home ___ I was sick. ¿Qué va en el hueco?",["because","so","but","and"],0,"Primero el resultado y después la causa: \"because\"."],["¿Qué dices para «¿Quieres café o té?»?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Para elegir entre dos cosas, \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. ¿Qué va en el hueco?","but","so","or","because","Las ideas contrarias se unen con \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. ¿Qué va en el hueco?","so","because","but","or","Primero la causa y después el resultado: \"so\"."],
["mc","I ate a sandwich ___ I was hungry. ¿Qué va en el hueco?","because","so","but","or","Primero el resultado y después la causa: \"because\"."],
["mc","I stayed home ___ the rain. ¿Qué va en el hueco?","because of","because","so","but","Antes de un sustantivo (\"the rain\") va \"because of\"; antes de una oración, \"because\"."],
["mc","¿Cómo se dice «Estoy cansada pero feliz»?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","«Pero» es \"but\"."],
["or","Me gusta el té, pero a ella no","I like tea but she doesn't","don't","Con \"she\", la negativa es \"doesn't\" (tercera persona)."],
["or","Él trabaja y ella estudia","He works and she studies","work","Con \"he\" y \"she\", los dos verbos llevan -s: tercera persona."],
["or","Tenía hambre, así que comí","I was hungry so I ate","because","Primero la causa, después \"so\" y el resultado."],
["fi","I'm tired __ happy.","Estoy cansado pero feliz","but","so|because|or","«Pero» es \"but\"."],
["fi","I stayed home __ it was raining.","Me quedé en casa porque estaba lloviendo","because","so|but|or","Primero el resultado y después la causa: \"because\"."],
["fi","Coffee __ tea?","¿Café o té?","or","so|but|because","Para elegir entre dos cosas, \"or\"."],
["ty","Estoy cansado pero feliz","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — con but","so","«Pero» es \"but\"."],
["ty","Me quedé en casa porque estaba lloviendo","I stayed home because it was raining|I stayed at home because it was raining|I stayed home because it rained|I stayed at home because it rained","stayed home · because · rain — con sujeto","so","Después de \"because\" hace falta un sujeto: \"it was raining\", nunca \"because was raining\"."],
["ty","Él no vino por la lluvia","He didn't come because of the rain","didn't · come · because of — la lluvia","came","Negativa en pasado con el auxiliar \"didn't\"; \"because of\" va antes de un sustantivo."]]},

{ id:"false-friends", title:"Falsos amigos: actually no es «actualmente»", blurb:"Palabras que se parecen al español pero significan otra cosa, y cómo aprovechar los cognados que sí son de fiar.", deck:"Falsos amigos y spanglish", body:`
<p>Miles de palabras inglesas se parecen al español y significan lo mismo: <i>hotel, important, family, possible</i>. La gran mayoría de los cognados de origen latino son de fiar. Pero unos pocos, muy frecuentes, son <b>falsos amigos</b>: se parecen y significan otra cosa. Estos son los que más problemas causan.</p>
<h3>Los que dan vergüenza</h3>
<p><i>embarrassed</i> es «avergonzado»; «embarazada» es <i>pregnant</i>. Y <i>constipated</i> no es «constipado» (resfriado), sino «estreñido».</p>
{{ex:I'm embarrassed.|aim im-BE-rest|Me da vergüenza}}{{ex:She's pregnant.|shis PREG-nent|Está embarazada}}{{ex:I'm constipated.|aim KAAN-sti-pei-rid|Estoy estreñido}}
<h3>Tiempo y opinión</h3>
<p><i>actually</i> es «en realidad»; «actualmente» es <i>currently</i>. <i>eventually</i> es «al final, con el tiempo», no «eventualmente». <i>realize</i> es «darse cuenta», no «realizar».</p>
{{ex:Actually, I'm from Lima.|AK-chu-e-li aim frem LII-me|En realidad, soy de Lima}}{{ex:Currently, I work at home.|KER-ent-li ai WERK et JOUM|Actualmente trabajo en casa}}{{ex:Eventually, she found a job.|i-VEN-chu-e-li shi FAUND e DYAAB|Al final encontró trabajo}}{{ex:I didn't realize.|ai DI-dent RII-e-lais|No me di cuenta}}
<h3>Lugares y cosas</h3>
<p><i>library</i> es «biblioteca»; «librería» es <i>bookstore</i>. <i>exit</i> es «salida» y <i>success</i>, «éxito». <i>carpet</i> es «alfombra»; «carpeta» es <i>folder</i>.</p>
{{ex:The library is free.|dhe LAI-bre-ri is FRII|La biblioteca es gratis}}{{ex:Is there a bookstore near here?|is dher e BUK-stor NIR JIR?|¿Hay una librería cerca de aquí?}}{{ex:Where is the exit?|WER is dhi EG-sit?|¿Dónde está la salida?}}{{ex:The party was a success.|dhe PAAR-ti wes e sek-SES|La fiesta fue un éxito}}{{ex:The carpet is red.|dhe KAAR-pet is RED|La alfombra es roja}}
<h3>Personas</h3>
<p><i>sensible</i> es «sensato»; «sensible» es <i>sensitive</i>. «Asistir a» clase es <i>attend</i>; <i>assist</i> es «ayudar». <i>pretend</i> es «fingir», no «pretender». Y en los estudios: <i>college</i> es «universidad», no «colegio» (eso es <i>school</i>), y <i>career</i> es la trayectoria profesional, no la «carrera» que estudias (eso es tu <i>major</i> o <i>degree</i>).</p>
{{ex:He's very sensible.|jis VE-ri SEN-si-bel|Es muy sensato}}{{ex:She's very sensitive.|shis VE-ri SEN-si-tiv|Es muy sensible}}{{ex:I attend class every day.|ai e-TEND KLAS EV-ri DEI|Asisto a clase todos los días}}{{ex:He's pretending to sleep.|jis pri-TEN-ding te SLIIP|Está fingiendo que duerme}}
<h3>Los cognados que sí te ayudan</h3>
<p>Estas terminaciones casi siempre funcionan. Solo cuida la sílaba tónica: en inglés suele caer en otro lugar (<i>comfortable</i> se acentúa al principio, no en «ta»).</p>
<div class="tbl"><table><tr><th>Inglés</th><th>Español</th><th>Ejemplo</th></tr><tr><td class="k">-tion</td><td>-ción</td><td class="k">information</td></tr><tr><td class="k">-ty</td><td>-dad</td><td class="k">city</td></tr><tr><td class="k">-ous</td><td>-oso</td><td class="k">famous</td></tr><tr><td class="k">-ly</td><td>-mente</td><td class="k">really</td></tr></table></div>
<div class="tip">Para recordar: <b>actually</b> = en realidad · <b>embarrassed</b> = avergonzado · <b>library</b> = biblioteca · <b>assist</b> = ayudar (asistir a = <b>attend</b>) · <b>success</b> = éxito (salida = <b>exit</b>)</div>`,
check:[["¿Qué significa \"I'm embarrassed\"?",["Estoy embarazada","Me da vergüenza","Estoy enojado","Estoy cansado"],1,"\"Embarrassed\" = avergonzado; «embarazada» es \"pregnant\"."],["¿Cómo se dice «Actualmente vivo en Madrid»?",["Actually, I live in Madrid.","Actual, I live in Madrid.","Currently, I live in Madrid.","In actual, I live in Madrid."],2,"«Actualmente» es \"currently\"; \"actually\" significa «en realidad»."],["«La librería abre a las nueve» en inglés es:",["The bookstore opens at nine.","The library opens at nine.","The bookcase opens at nine.","The librarian opens at nine."],0,"«Librería» es \"bookstore\"; \"library\" es «biblioteca»."]],
practice:[
["mc","¿Qué significa \"actually\"?","en realidad","actualmente","activamente","a veces","\"Actually\" = en realidad; «actualmente» es \"currently\"."],
["mc","¿Cómo se dice «Está embarazada»?","She's pregnant.","She's embarrassed.","She's embarrassing.","She's constipated.","«Embarazada» es \"pregnant\"; \"embarrassed\" significa «avergonzado»."],
["mc","¿Cómo se dice «Asisto a clase los lunes»?","I attend class on Mondays.","I assist class on Mondays.","I assist to class on Mondays.","I attend to class on Mondays.","«Asistir a» es \"attend\"; \"assist\" significa «ayudar»."],
["mc","¿Qué significa \"He's very sensible\"?","Es muy sensato.","Es muy sensible.","Es muy sentimental.","Es muy simpático.","\"Sensible\" = sensato; «sensible» es \"sensitive\"."],
["mc","¿Cómo se dice «La fiesta fue un éxito»?","The party was a success.","The party was an exit.","The party was a succession.","The party was a successful.","«Éxito» es \"success\"; \"exit\" es «salida»."],
["or","¿Dónde está la salida?","Where is the exit","success","En la pregunta, \"is\" va antes del sujeto (\"the exit\"). «Salida» es \"exit\"; «éxito» es \"success\"."],
["or","Ella trabaja en la biblioteca","She works at the library","work","Con \"she\", \"works\" lleva -s (tercera persona). Biblioteca = \"library\"."],
["or","¿Te diste cuenta?","Did you realize","realized","Pregunta en pasado: auxiliar \"Did\" + forma base \"realize\" (darse cuenta)."],
["fi","__, I'm from Mexico.","En realidad, soy de México","Actually","Currently|Actual|Now","«En realidad» es \"actually\"."],
["fi","I bought it at the __.","Lo compré en la librería","bookstore","library|bookcase|book","«Librería» es \"bookstore\"; \"library\" es «biblioteca»."],
["fi","The __ in my room is blue.","La alfombra de mi cuarto es azul","carpet|rug","folder|card|cover","\"Carpet\" = alfombra; «carpeta» es \"folder\"."],
["ty","Me da vergüenza","I'm embarrassed|I feel embarrassed","I'm · embarrassed — no es embarazada","pregnant","«Me da vergüenza» es \"I'm embarrassed\": nada que ver con «embarazada»."],
["ty","Él no se dio cuenta","He didn't realize|He didn't notice","didn't · realize — forma base","realized","Negativa en pasado con el auxiliar \"didn't\"; \"realize\" = darse cuenta."],
["ty","Ella asiste a clase","She attends class|She attends classes|She attends her classes|She goes to class|She goes to classes","attend · class — con she","assists","Con \"she\", \"attends\" lleva -s (tercera persona); «asistir a» es \"attend\"."]]},
];

/* ceb-en stage A1: new lessons for Cebuano (Bisaya) speakers (English side shared with ko-en). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it ug there: pun-on ang lugar sa subject", blurb:"Para sa panahon ug oras: it. Para sa naay ug walay: there is / there are.", deck:"Istorya-istorya", body:`
<p>Sa Bisaya, kompleto na ang <i>Init karon</i>, <i>Sayon ra</i> ug <i>Naay kapehan dinhi</i> bisan walay subject. Sa Iningles, dili puwede nga blangko ang lugar sa subject. Mao nga gamiton ta ang <b>it</b> ug <b>there</b>: wala silay kaugalingong kahulogan, mopuno lang sila sa lugar sa subject.</p>
<h3>Panahon, oras ug kahimtang: It</h3>
<p>Dinhi, ang <b>it</b> dili "kini" o "kana". Tigpuno lang kini sa lugar sa subject. Ayaw sab kalimti ang be verb: <b>It is</b>, pinamubo <b>It's</b>.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Bugnaw karon}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Alas tres na}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Nag-ulan}}{{ex:It's easy.|/ɪts ˈiːzi/|Sayon ra}}
<h3>Naay / adunay: There is / There are</h3>
<p>Ang <i>naay</i> pareho ra bisan usa o daghan ang butang. Sa Iningles, mosunod ang be verb sa noun: kon usa ra, <b>There is a …</b>; kon sobra sa usa, <b>There are … -s</b>. Sa pag-istorya, pinamubo ang There is: <b>There's</b>.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Naay kapehan duol dinhi}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Naay duha ka kuwarto}}
<h3>Pangutana ug negative</h3>
<p>Ang <i>walay</i> mahimong <b>There isn't</b> (usa) o <b>There aren't</b> (daghan). Sa pangutana, ibalhin ang be verb sa atubangan: <b>Is there …?</b> / <b>Are there …?</b></p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Naa bay banyo dinhi?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Naa pa bay mga lingkoranan?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Walay bus karong adlawa}}
<h3>Lahi ang have ug ang there is</h3>
<p>Usa ra ang <i>naa</i> sa Bisaya, pero sa Iningles duha: kon tawo ang tag-iya (<i>naa koy…</i>), <b>have</b>; kon naa sa usa ka lugar ang butang (<i>naay… sa gawas</i>), <b>there is</b>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Naa koy awto}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Naay awto sa gawas}}
<div class="tip">Kasagarang sayop: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Is easy.</b> ✗ → <b>It's easy.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓ / <b>There is many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["'Init karon' sa Iningles?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Sa panahon, \"it\" ang mopuno sa lugar sa subject."],["There ___ three people. Unsay sakto sa blangko?",["is","are","have","be"],1,"Sobra sa usa ang \"three people\", mao nga \"there are\"."],["'Naa bay banyo dinhi?' sa Iningles?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Kon mangutana ka kon naa bay usa ka butang sa usa ka lugar: \"Is there a …?\""]],
practice:[
["mc","'Nag-ulan' sa Iningles?","It's raining.","Is raining.","There is raining.","Rain is.","Sa panahon, \"it\" ang subject."],
["mc","'Naay kapehan duol dinhi' sa Iningles?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Butang nga naa sa usa ka lugar: \"there is\". Usa ra, mao nga naay article \"a\"."],
["mc","There ___ two rooms. Unsay sakto sa blangko?","are","is","have","has","Plural ang \"rooms\", mao nga \"are\"."],
["mc","'Alas tres na' sa Iningles?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Ang oras magsugod sab sa \"it\"."],
["mc","'Naa koy awto' sa Iningles?","I have a car.","There is a car me.","I am a car.","It's a car me.","Kon tawo ang tag-iya, \"have\" ang gamiton."],
["or","Bugnaw karon","It's cold today","There's","Sa panahon, \"it\" ang subject."],
["or","Naay awto sa gawas","There's a car outside","cars","Usa ra ka awto, mao nga article \"a\" ug singular nga \"car\", dili plural."],
["or","Naay duha ka lingkoranan","There are two seats","seat is","Sobra sa usa, mao nga \"are\" ug plural nga \"seats\"."],
["fi","__ cold today.","Bugnaw karon","It's|It is","Is|There's|This","Pun-a ang lugar sa subject og \"it\"."],
["fi","There __ a bank near here.","Naay bangko duol dinhi","is","are|have|be","Usa ra ka bangko, mao nga \"is\"."],
["fi","__ there any seats?","Naa pa bay mga lingkoranan?","Are","Is|Do|Have","Plural ang \"seats\", mao nga \"Are\"."],
["ty","Init karon","It's hot today|It's hot now","it · hot · today — sa panahon, \"it\" ang subject","There's","Sa panahon, magsugod ta sa \"it\"."],
["ty","Naa bay banyo dinhi?","Is there a bathroom here|Is there a restroom here","is there · bathroom — ayaw kalimti ang article","the","Usa ra ug wala pa nahisgotan, mao nga article \"a\"."],
["ty","Naay duha ka kuwarto","There are two rooms","there are · two · room — plural kay duha","room","Duha ka kuwarto, mao nga plural: \"rooms\"."]]},

{ id:"plurals", title:"Plural -s ug this / these, my / your", blurb:"Kon sobra sa usa, dugangi og -s ang noun. this para sa usa, these para sa daghan.", deck:"Pagpamalit ug pagbayad", body:`
<p>Sa Bisaya, ang <i>mga</i> ang nagpakita nga daghan (<i>mga libro</i>), ug human sa numero wala na gani kini: <i>duha ka libro</i>. Ang noun mismo dili mausab. Sa Iningles, walay bulag nga pulong sama sa <i>mga</i>: ang noun mismo ang dugangan og <b>-s</b>, ug kinahanglan kini bisan naa nay numero. Mao ni ang <b>plural</b> (sobra sa usa).</p>
<h3>Unsaon paghimo sa plural</h3>
<div class="tbl"><table><tr><th>Lagda</th><th>Pananglitan</th></tr><tr><td>Kasagaran: -s</td><td class="k">book → books</td></tr><tr><td>Human sa s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>Consonant + y → -ies</td><td class="k">city → cities</td></tr><tr><td>Irregular (walay lagda)</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|duha ka libro}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|tulo ka kahon}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Naa koy duha ka anak}}
<p>Litoka gyud ang -s: <b>books</b> /s/, <b>keys</b> /z/, <b>boxes</b> /ɪz/.</p>
<h3>this / that para sa usa, these / those para sa daghan</h3>
<p>Sa Bisaya, <i>kini</i> ug <i>kana</i> gihapon bisan daghan: <i>kining mga yawi</i>. Sa Iningles, mausab sab ang pulong: <b>this → these</b>, <b>that → those</b>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Kini ang akong bag}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Kini ang akong mga yawi}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Nindot kanang mga sapatos}}
<h3>each / every + singular</h3>
<p>Human sa <b>each</b> ug <b>every</b>, singular (usa ra) ang noun bisan daghan ang gipasabot: <b>each countries</b> ✗ → <b>each country</b> ✓</p>
{{ex:Each country is different.|/ˈiːtʃ ˈkʌntri ɪz ˈdɪfrənt/|Lahi ang matag nasod}}
<h3>my, your, his, her, our, their</h3>
<p>Kini ang possessive: nagpakita kon kinsay tag-iya. Kon naa na kini, dili na dugangan og a o the.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Imo ba kining telepono?}}{{ex:Her brothers live in Davao.|/hər ˈbrʌðərz ˈlɪv ɪn ˈdɑːvaʊ/|Ang iyang mga igsoong lalaki nagpuyo sa Davao}}
<div class="tip">Human sa numero, many, these ug those, plural gyud ang noun: <b>two friend</b> ✗ → <b>two friends</b> ✓. Pero ayaw dugangi og -s ang dili maihap: <b>informations</b> ✗ → <b>information</b> ✓. Ug: <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Unsay sakto sa blangko?",["sister","sisters","a sister","sister's"],1,"Duha, mao nga plural: \"sisters\"."],["___ are my keys. Unsay sakto sa blangko?",["This","That","These","It"],2,"Plural ang \"keys\", mao nga \"These\"."],["'Kini ang akong bag' sa Iningles?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Kon naa nay \"my\", dili na butangan og article."]],
practice:[
["mc","'duha ka libro' sa Iningles?","two books","two book","two a book","twos book","Kon sobra sa usa, dugangi og plural -s ang noun."],
["mc","Unsay plural sa \"child\"?","children","childs","childes","child","Irregular kini nga plural: \"children\"."],
["mc","___ shoes are nice. (kanang mga sapatos) Unsay sakto sa blangko?","Those","That","This","It","Plural ang \"shoes\", mao nga \"those\"."],
["mc","'Kini ang akong bag' sa Iningles?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","Dili magdungan ang \"my\" ug ang article."],
["mc","Unsay plural sa \"box\"?","boxes","boxs","boxies","box","Human sa s, x, ch, sh, -es ang idugang."],
["or","Kini ang akong mga yawi","These are my keys","key This","Daghan, mao nga \"these\" ug plural nga \"keys\"."],
["or","Naa koy duha ka anak","I have two children","child a","Duha, mao nga plural: \"children\". Walay article \"a\"."],
["or","Nindot kanang mga sapatos","Those shoes are nice","That","Plural ang \"shoes\", mao nga \"those\"."],
["fi","I have three __.","Naa koy tulo ka iring","cats","cat|a cat|cat's","Tulo, mao nga plural: \"cats\"."],
["fi","__ is my friend.","Kini ang akong higala","This","These|Those|They","Usa ra ka tawo, mao nga \"this\"."],
["fi","Two __, please.","Duha ka kape, palihug","coffees","coffee|a coffee|coffee's","Kon mangayo ka og pila ka tasa, plural ang gamiton: \"coffees\"."],
["ty","Kini ang akong mga libro","These are my books","these · my · book — plural kay daghan","book","Daghan, mao nga \"these\" ug plural nga \"books\"."],
["ty","Naa koy duha ka igsoong babaye","I have two sisters","have · two · sister — plural human sa numero","sister","Duha, mao nga plural: \"sisters\". Walay \"mga\" sa Iningles, -s ang gamiton."],
["ty","Kini ang akong bag","This is my bag","this · my · bag — walay article","a","Kon naa nay \"my\", dili na gamiton ang article \"a\"."]]},
{ id:"present", title:"Simple present tense ug word order: subject + verb + object", blurb:"Sa Bisaya, verb ang una. Sa Iningles, subject ang una, dayon ang verb.", deck:"Pagpaila sa kaugalingon", body:`
<p>Sa Bisaya, kasagaran ang verb ang una: <i>Moinom ko og kape</i>. Sa Iningles, lahi ang word order (han-ay sa mga pulong): <b>kinsa → unsay buhaton → unsa</b>. Walay <i>ang</i>, <i>og</i> o <i>sa</i> nga magtudlo kon kinsa ang nagbuhat, mao nga ang han-ay mismo ang naghatag sa kahulogan.</p>
<h3>Subject + verb + object</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Moinom ko og kape}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Magtuon ko og Iningles}}
<h3>Ang lugar ug ang oras, sa ulahi</h3>
<p>Ang ubang detalye isunod sa luyo: <b>lugar → oras</b>.</p>
{{ex:We live in Cebu.|/wi ˈlɪv ɪn seɪˈbuː/|Nagpuyo mi sa Cebu}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|Magtuon ko og Iningles kada adlaw}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Motrabaho sila kada Sabado ug Domingo}}
<h3>Simple present tense: naandan ug kamatuoran</h3>
<p>Gamiton kini sa mga butang nga kanunay nimong buhaton (<i>kada adlaw</i>, <i>kanunay</i>) ug sa mga kamatuoran. Sama sa Bisaya, dili mausab ang verb kon I, you, we o they ang subject. Pero sa negative, dili igo ang <i>dili</i>: kinahanglan ang helping verb nga <b>don't</b> sa atubangan sa verb.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Dili ko mokaon og karne}}
<h3>Kapila: always, usually, sometimes, never</h3>
<p>Kining mga pulong ibutang <b>sa atubangan gyud</b> sa verb.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Kasagaran mobangon ko sa alas siyete}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Dili gyud ko moinom og kape sa gabii}}
<div class="tip">Kon sundon nimo ang han-ay sa Bisaya, masayop ka: <b>Drink I coffee.</b> ✗ → <b>I drink coffee.</b> ✓ / <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓. Ug kon naay <i>kada adlaw</i> o <i>kanunay</i>, simple present tense ang gamiton, dili -ing: <b>I'm drinking coffee every day.</b> ✗ → <b>I drink coffee every day.</b> ✓</div>`,
check:[["Unsay sakto nga word order sa 'Moinom ko og kape'?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Subject + verb + object ang han-ay."],["I ___ eat meat. (dili mokaon) Unsay sakto sa blangko?",["not","am not","no","don't"],3,"Sa negative sa ordinaryong verb, \"don't\" ang gamiton."],["Asa ibutang ang \"always\"? Pilia ang sakto nga sentence.",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Ang \"always\" ibutang sa atubangan gyud sa verb."]],
practice:[
["mc","'Magtuon ko og Iningles' sa Iningles?","I study English.","I English study.","I am study English.","Study I English.","Subject + verb + object ang han-ay."],
["mc","'Dili ko mokaon og karne' sa Iningles?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Sa negative sa ordinaryong verb: \"don't\" + verb."],
["mc","'Nagpuyo mi sa Manila' sa Iningles?","We live in Manila.","We in Manila live.","We are live in Manila.","We live Manila in.","Human sa verb, isunod ang lugar."],
["mc","'Kasagaran mobangon ko sa alas siyete' sa Iningles?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","Ang \"usually\" ibutang sa atubangan gyud sa verb."],
["mc","Hain niini ang nagsulti bahin sa buhaton kada adlaw?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Ang naandan isulti sa simple present tense."],
["or","Moinom ko og kape kada adlaw","I drink coffee every day","the am","Naandan kini, mao nga simple present tense. Kape sa kinatibuk-an ang gipasabot, mao nga walay article."],
["or","Mobasa ko og daghang libro","I read many books","book","Human sa \"many\", plural ang noun: \"books\"."],
["or","Motrabaho mi kada Sabado ug Domingo","We work on weekends","are","Ayaw dugangi og be verb ang ordinaryong verb."],
["fi","I __ like fish.","Dili ko ganahan og isda","don't|do not","not|am not|no","Sa negative sa ordinaryong verb, \"don't\" ang gamiton."],
["fi","I __ English every day.","Magtuon ko og Iningles kada adlaw","study","am study|studying|to study","Sa simple present tense, ang verb ra mismo ang gamiton."],
["fi","They live __ Davao.","Nagpuyo sila sa Davao","in","at|on|to","Sa atubangan sa ngalan sa siyudad, \"in\" ang gamiton."],
["ty","Moinom ko og tsa (naandan)","I drink tea","drink · tea — walay article","a","Tsa sa kinatibuk-an ang gipasabot, mao nga walay article."],
["ty","Ganahan ko og mga iring","I like cats","like · cat — plural ang gamiton","cat","Kon ang tanang iring ang gipasabot, plural ang gamiton: \"cats\"."],
["ty","Dili ko mokaon og karne (naandan)","I don't eat meat","don't · eat · meat — negative sa ordinaryong verb","am","Sa negative sa ordinaryong verb, \"don't\" ang gamiton."]]},
{ id:"questions", title:"Pagpangutana: Do you …? ug mga question word", blurb:"Walay ba sa Iningles. Do ang ibutang sa sinugdanan, ug ang question word sa pinakauna.", deck:"Importanteng phrase 2", body:`
<p>Sa Bisaya, dugangan lang nimo og <i>ba</i> o usbon ang tono: <i>Ganahan ka ba og kape?</i> Walay pulong sa Iningles nga katumbas sa <i>ba</i>. Ang pangutana himoon pinaagi sa <b>word order</b> ug sa helping verb (verb nga motabang sa laing verb).</p>
<h3>be verb: ibalhin sa atubangan</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Maayo ra ka?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Imo ba kining bag?}}
<h3>Ubang verb: Do sa sinugdanan</h3>
<p>Kon lain ang verb, dili be verb (<b>like, live, speak, want</b>), ibutang ang <b>Do</b> sa sinugdanan. Ang ubang pulong dili na usbon, ug ang verb magpabilin sa base form.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Ganahan ka ba og kape?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Makasulti ka ba og Iningles?}}
<p>Mubo ra ang tubag: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>Ang question word sa pinakauna</h3>
<p>Sama sa Bisaya (<i>Asa ka nagpuyo?</i>), una ang question word: what (unsa), where (asa), when (kanus-a), who (kinsa), why (ngano), how (unsaon). Pero sa Iningles, mosunod dayon ang helping verb: <b>question word + do + subject + verb</b>.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Asa ka nagpuyo?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Unsay imong trabaho?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Asa ang banyo?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Tagpila kini?}}
<div class="tip">Kasagarang sayop: <b>You like coffee?</b> ✗ (sa sinulat) → <b>Do you like coffee?</b> ✓ / <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓. Sa ulahing leksyon, mao sab kini sa <b>Did</b>: <b>Did you passed?</b> ✗ → <b>Did you pass?</b> ✓</div>`,
check:[["'Ganahan ka ba og kape?' sa Iningles?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Kon dili be verb ang verb, magsugod ang pangutana sa \"Do\"."],["'Asa ka nagpuyo?' sa Iningles?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Question word + do + subject + verb ang han-ay."],["Unsay sakto nga tubag sa \"Do you speak English?\"",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Kon \"Do\" ang pangutana, \"do\" sab ang tubag."]],
practice:[
["mc","'Makasulti ka ba og Iningles?' sa Iningles?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Kon dili be verb ang verb, magsugod ang pangutana sa \"Do\"."],
["mc","'Asa ka nagpuyo?' sa Iningles?","Where do you live?","Where you live?","Where are you live?","Where live you?","Question word + do + subject + verb."],
["mc","'Tagpila kini?' sa Iningles?","How much is this?","How much this is?","How much does this?","What much is this?","Ang presyo pangutan-on og \"How much is …?\""],
["mc","Unsay sakto nga tubag sa \"Do you like tea?\"","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Kon \"Do\" ang pangutana, \"do\" sab ang tubag."],
["mc","'Unsay imong trabaho?' sa Iningles?","What do you do?","What are you do?","What you do?","What do you?","Ang trabaho pangutan-on og \"What do you do?\""],
["or","Ganahan ka ba og kape?","Do you like coffee","Are the","Magsugod sa \"Do\" ang pangutana. Kape sa kinatibuk-an ang gipasabot, mao nga walay article."],
["or","Asa ang banyo?","Where is the bathroom","a do","Ang banyo niining lugara ang gipasabot, mao nga article \"the\"."],
["or","Asa ka nagpuyo?","Where do you live","are","Kon dili be verb ang verb, kinahanglan ang \"do\" sa pangutana."],
["fi","__ you like music?","Ganahan ka ba og musika?","Do","Are|Is|Does","Ang pangutana sa verb nga \"like\" magsugod sa \"Do\"."],
["fi","__ do you live?","Asa ka nagpuyo?","Where","What|Who|When","Kon lugar ang pangutana, \"where\" ang gamiton."],
["fi","What time __ it?","Unsa nay oras?","is","do|does|are","Ang oras pangutan-on gamit ang be verb."],
["ty","Makasulti ka ba og Iningles?","Do you speak English|Can you speak English","do · speak · English — walay \"ba\" sa Iningles","Are","Kon dili be verb ang verb, magsugod ang pangutana sa \"Do\"."],
["ty","Asa ang banyo?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — gamita ang article \"the\"","a","Ang banyo nga pareho ninyong nahibaloan, mao nga article \"the\"."],
["ty","Ganahan ka ba og mga iro?","Do you like dogs","do · like · dog — plural ang gamiton","dog","Kon ang tanang iro ang gipasabot, plural ang gamiton: \"dogs\"."]]},
{ id:"third-s", title:"-s sa verb kon he, she, it: does / doesn't", blurb:"Kon usa ra ka tawo o butang ang subject, dugangi og -s ang verb. Sa pangutana ug negative, does.", deck:"Pagpaila sa kaugalingon", body:`
<p>Ang verb sa Bisaya dili mausab bisan kinsa ang subject: <i>Motrabaho ko, motrabaho siya</i>. Sa Iningles, sa simple present tense, kon <b>he</b>, <b>she</b>, <b>it</b> o usa ra ka tawo o butang ang subject, dugangi og <b>-s</b> ang verb. Mao ni ang subject-verb agreement (ang verb mosunod sa subject). Usa kini sa pinakakasagarang sayop sa mga Bisaya, bisan sa mga hanas na sa Iningles.</p>
<div class="tbl"><table><tr><th>Subject</th><th>Verb</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Nagtrabaho siya sa bangko (babaye)}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Ganahan siya og soccer (lalaki)}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Maayong moluto ang akong mama}}
<p>Timan-i ang <i>siya</i>: sa Iningles kinahanglan kang mopili, <b>he</b> kon lalaki, <b>she</b> kon babaye. Ug tulo ang paglitok sa -s: <b>works</b> /s/, <b>lives</b> /z/, <b>watches</b> /ɪz/.</p>
<h3>Mga verb nga mausab og gamay</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Naa siyay awto (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Moadto siya sa trabaho sa alas otso (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Nagtuon siya og Iningles (study → studies)}}
<h3>Sa negative ug pangutana: does</h3>
<p>Kon mogamit ka og <b>doesn't</b> o <b>Does</b>, mobalhin ang -s ngadto niini. Ang verb nga mosunod, base form na, walay -s.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Dili siya moinom og kape (lalaki)}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Dinhi ba siya nagpuyo? (babaye)}}
<h3>Pangitaa ang tinuod nga subject</h3>
<p>Kon plural ang subject, walay -s ang verb: <b>School uniforms ensures safety.</b> ✗ → <b>School uniforms ensure safety.</b> ✓. Ug sa <b>one of …</b>, ang <b>one</b> ang subject, mao nga naay -s: <b>One of my friends live here.</b> ✗ → <b>One of my friends lives here.</b> ✓</p>
<div class="tip">Kasagarang sayop: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Manila. Unsay sakto sa blangko?",["live","lives","living","is live"],1,"Kon \"she\" ang subject, dugangi og -s ang verb."],["He ___ like coffee. Unsay sakto sa blangko?",["don't","isn't","doesn't","not"],2,"Ang negative kon \"he\" ang subject: \"doesn't\"."],["'Naa siyay awto (babaye)' sa Iningles?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Ang \"have\" mahimong \"has\" kon \"she\" ang subject."]],
practice:[
["mc","My brother ___ in Davao. Unsay sakto sa blangko?","works","work","working","is work","Usa ra ka tawo ang subject, mao nga \"works\"."],
["mc","'Dili siya moinom og kape (lalaki)' sa Iningles?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Ang negative kon \"he\" ang subject: \"doesn't\" + base form."],
["mc","'Dinhi ba siya nagpuyo? (babaye)' sa Iningles?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Human sa \"Does\", walay -s ang verb."],
["mc","have → she ___ Unsay sakto sa blangko?","has","haves","have","is have","Ang \"have\" mahimong \"has\"."],
["mc","study → he ___ Unsay sakto sa blangko?","studies","studys","study","studyes","Consonant + y: mahimong -ies."],
["or","Nagtrabaho siya sa bangko (babaye)","She works at a bank","work the","Kon \"she\" ang subject, \"works\". Bag-o pang gihisgotan ang bangko, mao nga article \"a\"."],
["or","Naa siyay duha ka iro (lalaki)","He has two dogs","have dog","Kon \"he\" ang subject, \"has\". Duha, mao nga plural: \"dogs\"."],
["or","Dili siya mokaon og karne (babaye)","She doesn't eat meat","eats","Human sa \"doesn't\", base form ang verb, walay -s."],
["fi","He __ soccer.","Ganahan siya og soccer (lalaki)","likes","like|liking|is like","Kon \"he\" ang subject, dugangi og -s ang verb: \"likes\"."],
["fi","__ she speak English?","Makasulti ba siya og Iningles? (babaye)","Does","Do|Is|Are","Ang pangutana kon \"she\" ang subject magsugod sa \"Does\"."],
["fi","She __ to work at eight.","Moadto siya sa trabaho sa alas otso (babaye)","goes","go|going|gos","Ang \"go\" mahimong \"goes\"."],
["ty","Naa siyay awto (lalaki)","He has a car","has · car — article \"a\" kay usa ra","have","Kon \"he\" ang subject, \"has\". Usa ra ka awto, mao nga article \"a\"."],
["ty","Ganahan siya og mga iring (babaye)","She likes cats","likes · cat — plural ang gamiton","cat","Kon \"she\" ang subject, \"likes\". Ang tanang iring ang gipasabot, mao nga plural: \"cats\"."],
["ty","Dili siya dinhi nagpuyo (lalaki)","He doesn't live here","doesn't · live · here — walay -s ang verb","lives","Human sa \"doesn't\", base form ang verb."]]},
{ id:"countable", title:"Countable ug uncountable noun: some, any, much, many", blurb:"Ang water dili butangan og a o -s. many kon maihap, much kon dili maihap.", deck:"Pag-order sa restawran", body:`
<p>Sa Bisaya, usa ra ang <i>daghan</i> (<i>daghang tawo</i>, <i>daghang tubig</i>) ug usa ra ang <i>gamay</i>. Sa Iningles, bahinon una ang mga noun: <b>countable noun</b> (maihap) ug <b>uncountable noun</b> (dili maihap). Ang pulong nga gamiton nag-agad niini.</p>
<div class="tbl"><table><tr><th>Countable (maihap)</th><th>Uncountable (dili maihap)</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>puwede ang a / an, numero ug -s</td><td>dili puwede ang a / an, numero ug -s</td></tr></table></div>
<p>Bantayi kining mga pulong. Uncountable sila sa Iningles bisan morag maihap: <b>information, advice, equipment, furniture, luggage, homework</b>. Walay -s ug walay a / an.</p>
<h3>some ug any</h3>
<p>Para sa "pipila" o "gamay": <b>some</b> sa statement, <b>any</b> sa negative ug sa pangutana. Pero kon mangayo ka o motanyag, <b>some</b> gihapon bisan pangutana: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Naa koy gamay nga kuwarta}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Wala gyud koy kuwarta}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Naa ba kay mga pangutana?}}
<h3>many ug much</h3>
<p>Ang <i>daghan</i>: <b>many</b> + plural kon maihap, <b>much</b> kon dili maihap. Ang <b>a lot of</b> puwede sa duha. Ang <i>gamay</i>: <b>a few</b> kon maihap, <b>a little</b> kon dili maihap.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Pila ka tawo?}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|Tagpila?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Wala kaayo koy panahon}}
<h3>Unsaon pag-ihap sa dili maihap</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|usa ka baso nga tubig}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|usa ka tasa nga kape}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|usa ka tambag}}
<div class="tip">Kasagarang sayop: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>furnitures</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b>, <b>furniture</b> ✓</div>`,
check:[["How ___ people are there? Unsay sakto sa blangko?",["much","many","any","a"],1,"Maihap ang \"people\", mao nga \"many\"."],["Hain niini ang uncountable noun (dili maihap)?",["apple","chair","water","friend"],2,"Ang \"water\" dili butangan og \"a\" o -s."],["I don't have ___ money. Unsay sakto sa blangko?",["some","a","many","any"],3,"Sa negative, \"any\" ang gamiton."]],
practice:[
["mc","Can I have ___ water? Unsay sakto sa blangko?","some","a","many","an","Dili maihap ang \"water\", mao nga dili puwede ang \"a\" o \"many\"."],
["mc","How ___ time do we have? Unsay sakto sa blangko?","much","many","any","a","Dili maihap ang \"time\", mao nga \"much\"."],
["mc","'Naa ba kay mga pangutana?' sa Iningles?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Human sa \"any\", plural ang countable noun."],
["mc","'usa ka baso nga tubig' sa Iningles?","a glass of water","a water glass of","one waters","a glass water","Ang dili maihap ihapon gamit ang \"a glass of\"."],
["mc","I have ___ friends in Manila. Unsay sakto sa blangko?","many","much","a","an","Maihap ug plural ang \"friends\", mao nga \"many\"."],
["or","Naa koy gamay nga kuwarta","I have some money","a moneys","Dili maihap ang \"money\": walay article \"a\" ug walay plural -s."],
["or","Duha ka mansanas, palihug","Two apples please","apple","Duha, mao nga plural: \"apples\"."],
["or","Wala kaayo koy panahon","I don't have much time","many","Dili maihap ang \"time\", mao nga \"much\"."],
["fi","How __ is this?","Tagpila kini?","much","many|any|some","Ang presyo pangutan-on og \"how much\"."],
["fi","I don't have __ questions.","Wala koy pangutana","any","some|much|a","Sa negative, \"any\" ang gamiton."],
["fi","a cup __ coffee","usa ka tasa nga kape","of","for|in|a","\"a cup of …\" ang pag-ihap."],
["ty","Puwede ko mangayo og tubig?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|May I have some water","can I have · some · water — walay article","a","Dili maihap ang \"water\", mao nga \"some\" ang gamiton, dili ang article \"a\"."],
["ty","Naa ba kay mga pangutana?","Do you have any questions","any · question — plural ang gamiton","question","Human sa \"any\", plural ang countable noun: \"questions\"."],
["ty","Pila ka tawo?","How many people","how many · people — maihap ang tawo","much","Maihap ang tawo, mao nga \"many\"."]]},
{ id:"object-have", title:"me, him, her ug ang verb nga have", blurb:"Human sa verb, me ang gamiton, dili I. Ug ang have, nga daghan og gamit.", deck:"Pagpaila sa kaugalingon", body:`
<p>Sa Bisaya, mausab sab ang pronoun: ang <i>ko</i> mahimong <i>nako</i>, ang <i>siya</i> mahimong <i>niya</i>. Sa Iningles, <b>human</b> sa verb o preposition, object pronoun ang gamiton. Ug hinumdomi: ang <i>siya</i>, <i>niya</i> ug <i>iyang</i> walay lalaki o babaye, pero sa Iningles kinahanglan kang mopili: <b>he / him / his</b> o <b>she / her / her</b>.</p>
<div class="tbl"><table><tr><th>Subject</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Object</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Kaila siya nako (babaye)}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Ganahan ko niya (lalaki)}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Puwede ka motabang namo?}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|Kauban nako siya sa trabaho (babaye)}}
<p>Sa lugar sa subject, subject pronoun gihapon: <b>Me and her are friends.</b> ✗ → <b>She and I are friends.</b> ✓. Ug ang <i>ilang kaugalingon</i> kay <b>themselves</b>, dili <b>their self</b>.</p>
<h3>have: naa koy…</h3>
<p>Ang <i>naa koy</i> ug <i>naa siyay</i> (tawo ang tag-iya) kay <b>have</b>. Pamilya, butang, panahon: have tanan.</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Naa koy duha ka igsoong lalaki}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Naa ka bay bolpen?}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|Wala koy panahon}}
<h3>have: mokaon, moinom</h3>
<p>Walay article sa atubangan sa <b>breakfast</b>, <b>lunch</b> ug <b>dinner</b>.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Maniudto ta}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|Moinom ko og kape kada buntag}}
<div class="tip">Kasagarang sayop: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (siya, lalaki) Unsay sakto sa blangko?",["he","his","him","he's"],2,"Human sa verb, object pronoun ang gamiton: \"him\"."],["Can you help ___? (kami) Unsay sakto sa blangko?",["us","we","our","ours"],0,"Human sa verb, object pronoun ang gamiton: \"us\"."],["'Naa ka bay bolpen?' sa Iningles?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"Ordinaryong verb ang \"have\", mao nga \"Do\" ang gamiton sa pangutana."]],
practice:[
["mc","She knows ___. (ako) Unsay sakto sa blangko?","me","I","my","mine","Human sa verb, object pronoun ang gamiton: \"me\"."],
["mc","I like ___. (sila) Unsay sakto sa blangko?","them","they","their","theirs","Human sa verb, object pronoun ang gamiton: \"them\"."],
["mc","'Puwede ka motabang namo?' sa Iningles?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Human sa verb, \"us\" ang gamiton."],
["mc","'Maniudto ta' sa Iningles?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Walay article sa atubangan sa \"lunch\"."],
["mc","'Naa koy duha ka igsoong lalaki' sa Iningles?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","Sa pamilya, \"have\" ang gamiton. Duha, mao nga plural."],
["or","Naa ka bay bolpen?","Do you have a pen","the pens","Bisan unsang bolpen, usa ra: article \"a\" ug singular nga \"pen\", dili plural."],
["or","Ganahan ko niya (babaye)","I like her","she","Human sa verb, object pronoun ang gamiton: \"her\"."],
["or","Naa koy duha ka igsoong babaye","I have two sisters","sister a","Duha, mao nga plural: \"sisters\". Dili puwede ang article \"a\"."],
["fi","Call __ tonight.","Tawgi ko karong gabii","me","I|my|mine","Human sa verb, \"me\" ang gamiton."],
["fi","I work with __.","Kauban nako siya sa trabaho (lalaki)","him","he|his|he's","Human sa preposition, object pronoun sab ang gamiton: \"him\"."],
["fi","She __ a dog.","Naa siyay iro (babaye)","has","have|is|haves","Kon \"she\" ang subject, \"has\"."],
["ty","Puwede ko nimo tabangan?","Can you help me|Could you help me","can you · help · me — object pronoun ang gamiton","I","Human sa verb, object pronoun ang gamiton: \"me\"."],
["ty","Naa ka bay bolpen?","Do you have a pen","do you have · pen — gamita ang article \"a\"","the","Bisan unsang bolpen ang gipangita, mao nga article \"a\"."],
["ty","Daghan ko og higala","I have many friends|I have a lot of friends","have · many · friend — plural ang gamiton","friend","Human sa \"many\", plural ang noun: \"friends\"."]]},
{ id:"can-like", title:"can, like + -ing, I'd like: ang imong mahimo ug ang imong gusto", blurb:"Isulti kon unsay imong mahimo, unsay imong ganahan, ug unsay gusto nimo karon.", deck:"Istorya-istorya", body:`
<p>Tulo ka sumbanan nga magamit dayon nimo sa pagpaila sa kaugalingon ug sa pag-order.</p>
<h3>can: kamao, maka-, puwede</h3>
<p>Ang <i>kamao</i>, <i>maka-</i> ug <i>puwede</i> kay <b>can + base form</b>. Bisan he o she ang subject, walay -s ang verb.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Kamao ko molangoy}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Dili ko kamao magmaneho}}{{ex:Can you speak Cebuano?|/kən ju ˈspiːk seɪˈbwɑːnoʊ/|Makasulti ka ba og Bisaya?}}
<h3>like + -ing: ganahan ko mo…</h3>
<p>Sa mga kalingawan, human sa like ug love, ang <b>-ing form</b> sa verb ang gamiton.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Ganahan ko moluto}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Ganahan kaayo ko motan-aw og mga salida}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Dili ko ganahan modagan}}
<h3>I'd like: gusto unta ko og…</h3>
<p>Ang <b>I like</b> nagpasabot nga kanunay kang ganahan. Ang <b>I'd like</b> mas maayo paminawon nga paagi sa pag-ingon nga naa kay gusto karon, sama sa <i>gusto unta ko</i>. Sa pag-order, I'd like ang gamiton.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Usa ka kape, palihug}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Gusto ka og tsa?}}
<div class="tip">Kasagarang sayop: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓. Sa kapehan: <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Unsay sakto sa blangko?",["sings","sing","singing","to sing"],1,"Human sa \"can\", base form ang verb."],["'Ganahan ko moluto' sa Iningles?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Human sa \"like\", -ing form ang gamiton."],["Unsay pinakanatural nga isulti kon mag-order ka sa kapehan?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Ang gusto nimo karon isulti og \"I'd like\"."]],
practice:[
["mc","He can ___ Cebuano. Unsay sakto sa blangko?","speak","speaks","speaking","to speak","Human sa \"can\", base form ang verb."],
["mc","'Dili ko kamao magmaneho' sa Iningles?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Ang negative sa \"can\" kay \"can't\"."],
["mc","'Ganahan ko motan-aw og mga salida' sa Iningles?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Human sa \"like\", -ing form. Mga salida sa kinatibuk-an, mao nga plural: \"movies\"."],
["mc","Sa pag-order: 'Usa ka kape, palihug' sa Iningles?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Ang gusto nimo karon isulti og \"I'd like\"."],
["mc","'Gusto ka og tsa?' sa Iningles?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Kon motanyag ka, \"Would you like …?\" ang gamiton."],
["or","Usa ka kape, palihug","I'd like a coffee please","the coffees","Usa ka tasa ang imong gipangayo, mao nga article \"a\" ug singular nga \"coffee\", dili plural."],
["or","Ganahan ko mobasa og mga libro","I like reading books","book read","Human sa \"like\", -ing form. Mga libro sa kinatibuk-an, mao nga plural: \"books\"."],
["or","Kamao ka molangoy?","Can you swim","swimming","Human sa \"can\", base form ang verb."],
["fi","I can't __.","Dili ko kamao molangoy","swim","swimming|swims|to swim","Human sa \"can't\", base form ang verb."],
["fi","I like __ music.","Ganahan ko maminaw og musika","listening to","listen to|listen|to listening","Human sa \"like\", -ing form ang gamiton."],
["fi","__ like a sandwich, please.","Usa ka sandwich, palihug","I'd|I would","I|I'm|I can","Sa pag-order, \"I'd like\" ang gamiton."],
["ty","Ganahan ko moluto","I like cooking|I love cooking|I like to cook","like · cook — -ing form ang gamiton","cook","Human sa \"like\", -ing form ang gamiton."],
["ty","Gusto unta ko og usa ka sandwich","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — article \"a\" kay usa ra","the","Bisan unsang sandwich, usa ra, mao nga article \"a\"."],
["ty","Ganahan ko og mga iro","I like dogs|I love dogs","like · dog — plural ang gamiton","dog","Kon ang tanang iro ang gipasabot, plural ang gamiton: \"dogs\"."]]},
{ id:"continuous", title:"Ang gibuhat karon mismo: be verb + -ing", blurb:"Ang naandan, simple present tense. Ang gibuhat karon mismo, be verb + -ing.", deck:"Istorya-istorya", body:`
<p>Sa Bisaya, ang <i>nag-</i> nagpakita nga nagsugod na ang lihok, pero wala kini mag-ingon kon kanus-a: ang <i>Nagkaon ko</i> puwede "karon" o "ganina". Sa Iningles, ang lihok nga nagpadayon <b>karon mismo</b> isulti og <b>be verb + -ing</b>. Mao ni ang present progressive (gitawag sab og present continuous).</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Nagtrabaho ko karon}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Nagluto siya og panihapon (babaye)}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Nag-ulan}}
<h3>Pangutana ug negative</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Unsay imong gibuhat karon?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Naminaw ka ba?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Wala ko natulog (karon)}}
<h3>Itandi sa simple present tense</h3>
<div class="tbl"><table><tr><th>Kanunay (simple present tense)</th><th>Karon (be verb + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Mga verb nga dili butangan og -ing</h3>
<p>Ang mga verb sa <b>kahimtang</b>, sama sa like, know, want, need ug have (naay gipanag-iya), magpabilin sa simple present tense bisan karon ang gipasabot.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Kaila ko niya (lalaki)}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Gusto ko og tubig}}
<div class="tip">Kasagarang sayop: makalimtan ang be verb. <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["'Unsay imong gibuhat karon?' sa Iningles?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Ang gibuhat karon pangutan-on gamit ang be verb + -ing."],["I ___ coffee every morning. Unsay sakto sa blangko?",["am drinking","drinking","drink","am drink"],2,"Naandan kada buntag, mao nga simple present tense."],["Hain niini ang sakto nga sentence?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"Ang \"know\", \"want\" ug \"have\" (naay gipanag-iya) dili butangan og -ing."]],
practice:[
["mc","'Nagtrabaho ko karon' sa Iningles?","I'm working now.","I work now am.","I'm work now.","I working now.","Ang gibuhat karon: be verb + -ing."],
["mc","'Nagluto siya og panihapon karon (babaye)' sa Iningles?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be verb + -ing. Walay article sa atubangan sa \"dinner\"."],
["mc","Hain niini ang nagsulti bahin sa buhaton kada adlaw?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Ang naandan isulti sa simple present tense."],
["mc","'Unsay imong gibuhat karon?' sa Iningles?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Question word + be verb + subject + -ing."],
["mc","'Kaila ko niya (lalaki)' sa Iningles?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","Ang \"know\" dili butangan og -ing."],
["or","Nagbasa ko og libro karon","I'm reading a book","read books","Usa ra ka libro ang gibasa karon, mao nga article \"a\" ug singular nga \"book\", dili plural."],
["or","Nagdula ang mga bata karon","The kids are playing","kid is","Daghan sila, mao nga plural nga \"kids\" ug \"are\"."],
["or","Nag-ulan karon","It's raining now","rains","Ang nahitabo karon: be verb + -ing."],
["fi","I'm __ TV.","Nagtan-aw ko og TV karon","watching","watch|watches|to watch","Human sa be verb, -ing form ang mosunod."],
["fi","What __ you doing?","Unsay imong gibuhat karon?","are","do|is|does","Kon \"you\" ang subject, \"are\" ang be verb."],
["fi","She __ working today.","Wala siya magtrabaho karong adlawa (babaye)","isn't|is not","doesn't|don't|not","Ang negative sa be verb + -ing: \"isn't\"."],
["ty","Nagluto ko karon","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — -ing form ang gamiton","cook","Ang gibuhat karon: be verb + -ing."],
["ty","Nagtan-aw ko og salida (present progressive)","I'm watching a movie","I'm · watching · movie — article \"a\" kay usa ra","the","Bisan unsang salida, usa ra, mao nga article \"a\"."],
["ty","Natulog ang mga bata (present progressive)","The kids are sleeping|The children are sleeping","kids · are · sleeping — plural ang subject","kid","Daghan sila, mao nga plural nga \"kids\" ug \"are\"."]]},
{ id:"past", title:"Simple past tense: was / were ug -ed", blurb:"Sa be verb, was ug were. Sa ubang verb, -ed. Sa pangutana ug negative, did.", deck:"Istorya-istorya", body:`
<p>Usa kini sa pinakaimportanteng leksyon alang sa mga Bisaya. Sa Bisaya, ang <i>ni-</i>, <i>gi-</i> ug <i>naka-</i> nagpakita nga nahitabo na ang lihok, ug igo na ang <i>gahapon</i> aron mahibaloan kon kanus-a. Sa Iningles, <b>ang verb mismo ang kinahanglan mausab</b>, bisan naa nay <b>yesterday</b>: <b>Yesterday I work.</b> ✗ → <b>Yesterday I worked.</b> ✓</p>
<h3>Ang past sa be verb: was / were</h3>
<p>Kon I, he, she o it ang subject: <b>was</b>. Kon you, we o they: <b>were</b>. Sa Bisaya, pareho ra ang <i>Gikapoy ko</i> karon ug kaniadto; sa Iningles, mausab ang be verb.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Gikapoy ko (kaniadto)}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Lingaw kadto}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Naa mi sa balay (kaniadto)}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Puliki ka ba (kaniadto)?}}
<h3>Ang past sa ubang verb: -ed</h3>
<p>Dugangi og <b>-ed</b> ang verb. Pareho ra ang porma bisan kinsa ang subject. Tulo ang paglitok sa -ed: <b>worked</b> /t/, <b>called</b> /d/, <b>wanted</b> /ɪd/.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Nitrabaho ko gahapon}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Nitan-aw mi og salida}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Nitawag siya nako (babaye)}}
<h3>Sa negative ug pangutana: did</h3>
<p>Kon mogamit ka og <b>didn't</b> o <b>Did</b>, mobalik ang verb sa base form, kay ang did na ang nagdala sa past.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Wala ko motrabaho gahapon}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Nitawag ka ba nako?}}
<div class="tip">Kasagarang sayop: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>Did you passed?</b> ✗ → <b>Did you pass?</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Unsay sakto sa blangko?",["was","were","did","are"],1,"Kon \"they\" ang subject, \"were\" ang gamiton."],["'Wala ko motrabaho gahapon' sa Iningles?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Human sa \"didn't\", base form ang verb."],["Did you ___ the movie? Unsay sakto sa blangko?",["watch","watched","watching","watches"],0,"Human sa \"Did\", base form ang verb."]],
practice:[
["mc","I ___ tired yesterday. Unsay sakto sa blangko?","was","were","did","am","Kon \"I\" ang subject, \"was\" ang gamiton."],
["mc","'Nitan-aw mi og salida' sa Iningles?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Ang past form sa regular verb: -ed."],
["mc","'Nitawag ka ba gahapon?' sa Iningles?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Human sa \"Did\", base form ang verb."],
["mc","'Lingaw kadto' sa Iningles?","It was fun.","It were fun.","It did fun.","It funned.","Kon \"it\" ang subject, \"was\" ang gamiton."],
["mc","'Puliki ka ba kaniadto?' sa Iningles?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","Kahimtang ang \"busy\", mao nga be verb ang gamiton sa pangutana."],
["or","Nitan-aw mi og salida","We watched a movie","watch movies","Usa ra ka salida, mao nga article \"a\" ug singular nga \"movie\", dili plural."],
["or","(bata ang nagsulti) Nidula ko uban sa akong mga higala","I played with my friends","friend play","Daghan sila, mao nga plural: \"friends\"."],
["or","Wala ko motrabaho gahapon","I didn't work yesterday","worked","Human sa \"didn't\", base form ang verb."],
["fi","We __ at home last night.","Naa mi sa balay gabii","were","was|did|are","Kon \"we\" ang subject, \"were\" ang gamiton."],
["fi","I __ soccer yesterday.","Nidula ko og soccer gahapon","played","play|playing|was play","Naay \"yesterday\", mao nga past form: \"played\"."],
["fi","__ you work yesterday?","Nitrabaho ka ba gahapon?","Did","Were|Do|Was","Ang pangutana sa past sa ordinaryong verb magsugod sa \"Did\"."],
["ty","Gikapoy ko (simple past tense)","I was tired","was · tired — ang past sa be verb","were","Kon \"I\" ang subject, \"was\" ang gamiton."],
["ty","Nitan-aw ko og salida (gamita ang \"watch\")","I watched a movie","watched · movie — article \"a\" kay usa ra","the","Usa ra ka salida, mao nga butangan og article \"a\"."],
["ty","Nitawag ko sa akong mga higala","I called my friends","called · my · friend — plural kay daghan","friend","Daghan sila, mao nga plural: \"friends\"."]]},
{ id:"irregular-past", title:"Irregular nga past form: went, ate, saw", blurb:"Ang mga verb nga pinakagamiton, dili -ed ang past form. Sugdi sa 12.", deck:"Istorya-istorya", body:`
<p>Ang mga verb nga gamiton kada adlaw kasagaran <b>irregular verb</b>: walay lagda ang ilang past form, mao nga sag-ulohon ang matag pares. Nahinumdom ka tingali sa lista sa eskuwelahan: base form, past form, past participle. Dinhi, ang unang duha lang una.</p>
<div class="tbl"><table><tr><th>Base form</th><th>Past form</th><th>Base form</th><th>Past form</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
<p>Duha pa nga kanunayng masayop: <b>feel → felt</b> ug <b>stand → stood</b>. <b>I feel nervous last week.</b> ✗ → <b>I felt nervous last week.</b> ✓</p>
{{ex:I went to Davao.|/aɪ ˈwent tə ˈdɑːvaʊ/|Niadto ko sa Davao}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Nikaon mi og pizza}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Nitan-aw ko og salida}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Nakigkita ko sa akong mga higala}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Nipalit ko og libro}}
<h3>Sa pangutana ug negative, balik sa base form</h3>
<p>Ang <b>did</b> na ang nagpakita sa past, mao nga mobalik ang verb sa base form.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Unsay imong gibuhat?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Asa ka niadto?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Wala ko moadto}}
<div class="tip">Kasagarang sayop: <b>I goed.</b> ✗ → <b>I went.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Unsay past form sa \"go\"?",["goed","gone","went","going"],2,"Ang past form sa \"go\" kay \"went\"."],["'Unsay imong gibuhat gahapon?' sa Iningles?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Human sa \"did\", base form ang mosunod: \"do\"."],["I didn't ___ breakfast. Unsay sakto sa blangko?",["ate","eaten","eats","eat"],3,"Human sa \"didn't\", base form ang verb."]],
practice:[
["mc","Unsay past form sa \"eat\"?","ate","eated","eat","eaten","Ang past form sa \"eat\" kay \"ate\"."],
["mc","'Asa ka niadto?' sa Iningles?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Human sa \"did\", base form ang verb."],
["mc","'Nipalit ko og usa ka libro' sa Iningles?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Ang past form sa \"buy\" kay \"bought\". Usa ra ka libro, mao nga article \"a\"."],
["mc","Unsay past form sa \"see\"?","saw","seed","seen","sawed","Ang past form sa \"see\" kay \"saw\"."],
["mc","'Wala ko moadto' sa Iningles?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Human sa \"didn't\", base form ang verb."],
["or","Nitan-aw ko og salida","I saw a movie","see movies","Usa ra ka salida, mao nga article \"a\" ug singular nga \"movie\". Ang past form sa \"see\" kay \"saw\"."],
["or","Nikaon mi og pizza","We ate pizza","eated","Ang past form sa \"eat\" kay \"ate\"."],
["or","Nakigkita ko sa akong mga higala","I met my friends","friend meet","Daghan sila, mao nga plural: \"friends\"."],
["fi","I __ to Bohol last year.","Niadto ko sa Bohol sa niaging tuig","went","go|goed|gone","Ang past form sa \"go\" kay \"went\"."],
["fi","What did you __?","Unsay imong gikaon?","eat","ate|eaten|eating","Human sa \"did\", base form ang verb."],
["fi","She __ a new phone.","Nipalit siya og bag-ong telepono (babaye)","bought","buyed|buy|buys","Ang past form sa \"buy\" kay \"bought\"."],
["ty","Niadto ko sa Davao","I went to Davao","went · to · Davao — ang past form sa \"go\"","go","Ang past form sa \"go\" kay \"went\"."],
["ty","Nipalit ko og usa ka libro","I bought a book","bought · book — article \"a\" kay usa ra","the","Usa ra ka libro, mao nga butangan og article \"a\"."],
["ty","Nakigkita ko sa akong mga higala","I met my friends|I saw my friends","met · my · friend — plural kay daghan","friend","Daghan sila, mao nga plural: \"friends\"."]]},
{ id:"the", title:"Balikan ang the: a sa una, the sa sunod", blurb:"Sa unang paghisgot, a. Kon nahibaloan na ninyong duha, the. Ang \"ang\" sa Bisaya dili kanunay \"the\".", deck:"Direksyon ug sakyanan", body:`
<p>Ang article (gamay nga pulong sa atubangan sa noun: a, an, the) dili makat-onan sa usa ra ka higayon. Dinhi, praktison nato kon kanus-a mogamit og <b>the</b> ug kon kanus-a <b>walay article</b>. Hinumdomi: ang <i>ang</i> sa Bisaya <b>dili pareho</b> sa the.</p>
<h3>a sa una, the kon balikan</h3>
<p>Kon bag-o pa sa naminaw, a. Kon nahisgotan na ug nahibaloan na niya, the.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Nipalit ko og sinina. Asul ang sinina}}
<h3>the kon klaro kon hain</h3>
<p>Ang bintana niining kuwartoha, ang estasyon duol dinhi: kon klaro kon hain ang gipasabot, the dayon.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Puwede nimo ablihan ang bintana?}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|Asa ang estasyon sa subway?}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|Init kaayo ang adlaw karon}}
<h3>Ayaw butangi og the tungod lang kay naay ang</h3>
<p>Sa Bisaya, ang <i>ang</i> mouban bisan sa mga ngalan ug sa mga butang sa kinatibuk-an. Sa Iningles, walay the ang ngalan sa eskuwelahan o kompanya, ug ang ideya sa kinatibuk-an.</p>
{{ex:I work at Jollibee.|/aɪ ˈwɜːrk ət ˈdʒɑːlibiː/|Nagtrabaho ko sa Jollibee}}{{ex:Technology is a great help.|/tekˈnɑːlədʒi ɪz ə ˈgreɪt ˈhelp/|Dakong tabang ang teknolohiya}}
<p><b>The technology is a great help.</b> ✗ → <b>Technology is a great help.</b> ✓ / <b>the Sabang National High School</b> ✗ → <b>Sabang National High School</b> ✓</p>
<h3>Mga phrase nga walay article</h3>
<p>Sag-uloha nga tibuok kining mga phrase bahin sa lugar, sakyanan ug pagkatulog.</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Mosakay ko og bus padulong sa trabaho}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Naa ko sa balay}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|Matulog ko sa alas onse}}
<div class="tip">Pangutan-a ang imong kaugalingon: "Nahibalo ba ang naminaw kon <b>hain</b> gyud ang akong gipasabot?" Kon oo, the. Kon wala, a. Kon ngalan o butang sa kinatibuk-an, walay article.</div>`,
check:[["I have a cat. ___ cat is white. Unsay sakto sa blangko?",["A","An","The","(wala)"],2,"Ang iring nga bag-o lang nahisgotan, mao nga \"the\"."],["I go to ___ work by bus. Unsay sakto sa blangko?",["a","the","an","(wala)"],3,"Walay article sa \"go to work\"."],["Gusto nimong ipaabli ang bintana niining kuwartoha. Unsay sakto nga isulti?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Ang bintana nga pareho ninyong nahibaloan, mao nga \"the\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Unsay sakto sa blangko?","The","A","An","Some","Ang sinina nga bag-o lang nahisgotan, mao nga \"the\"."],
["mc","'Asa ang estasyon?' sa Iningles?","Where's the station?","Where's a station?","Where's station?","Where the station?","Ang estasyon duol dinhi ang gipasabot, mao nga \"the\"."],
["mc","Hain niini ang sakto nga sentence?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","Walay article sa \"go to work\" ug \"by bus\"."],
["mc","'Init ang adlaw' sa Iningles?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Usa ra ang adlaw sa langit, mao nga butangan og \"the\"."],
["mc","'Naa ko sa balay' sa Iningles?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","Walay article sa \"at home\"."],
["or","Puwede nimo ablihan ang bintana?","Can you open the window","a windows","Ang bintana nga pareho ninyong nahibaloan, mao nga article \"the\"."],
["or","Mosakay ko og bus padulong sa trabaho","I go to work by bus","the a","Walay article sa \"go to work\" ug \"by bus\"."],
["or","Dako ang iro (ang nahisgotan na)","The dog is big","A dogs","Ang iro nga nahisgotan na, mao nga article \"the\"."],
["fi","I saw a movie. __ movie was great.","Nitan-aw ko og salida. Nindot kaayo ang salida","The","A|An|Some","Ang salida nga bag-o lang nahisgotan, mao nga \"the\"."],
["fi","Where's __ bathroom?","Asa ang banyo?","the","a|an|some","Ang banyo niining lugara ang gipasabot, mao nga \"the\"."],
["fi","I have __ idea.","Naa koy ideya","an","a|the|some","Bag-o pang gihisgotan ug usa ra, ug nagsugod sa tingog nga vowel, mao nga \"an\"."],
["ty","Puwede nimo sirad-an ang pultahan?","Can you close the door|Could you close the door","can you · close · door — gamita ang article \"the\"","a","Ang pultahan nga pareho ninyong nahibaloan, mao nga article \"the\"."],
["ty","Asa ang estasyon?","Where is the station|Where's the station","where · station — gamita ang article \"the\"","a","Ang estasyon duol dinhi ang gipasabot, mao nga article \"the\"."],
["ty","Naa ko sa balay","I'm at home|I'm home","I'm · at · home — walay article","the","Walay article sa atubangan sa \"home\"."]]},
{ id:"adjectives", title:"Adjective ug pagtandi: bigger, more expensive, the best", blurb:"Ang adjective sa atubangan sa noun. mas = -er / more, pinaka- = the -est / the most.", deck:"Pagpamalit ug pagbayad", body:`
<p>Sa Bisaya, puwede ang <i>dakong balay</i> ug puwede sab ang <i>balay nga dako</i>. Sa Iningles, ang adjective naa <b>sa atubangan</b> sa noun, o <b>human</b> sa be verb. Walay <i>nga</i> taliwala nila.</p>
{{ex:a big house|/ə ˈbɪg ˈhaʊs/|dakong balay}}{{ex:a big bag|/ə ˈbɪg ˈbæg/|dako nga bag}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Dako kining bag}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Gamay ra kaayo}}
<h3>Pagtandi: -er o more</h3>
<p>Ang <i>mas</i> sa Bisaya mahimong <b>-er</b> sa mubo nga pulong ug <b>more</b> sa taas nga pulong. Mao ni ang comparative. Ang <i>kaysa</i> kay <b>than</b>.</p>
<div class="tbl"><table><tr><th>Adjective</th><th>mas (comparative)</th><th>pinaka- (superlative)</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Mas barato kini}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Mas mahal kini kaysa niana}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Naa ba moy mas dako nga sukod?}}
<h3>the sa superlative</h3>
<p>Ang <i>pinaka-</i> mahimong <b>the -est</b> o <b>the most</b>. Kanunay naay the.</p>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Kini ang pinakamaayong restawran dinhi}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Hain ang pinakabarato?}}
<div class="tip">Kasagarang sayop: <b>more cheaper</b>, <b>more bigger</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>bigger</b>, <b>better</b> ✓. Dili magdungan ang -er ug ang more. Mao sab sa <b>so very happy</b> ✗ → <b>very happy</b> ✓: igo na ang usa.</div>`,
check:[["Unsay comparative sa \"big\"?",["more big","biger","bigger","most big"],2,"Sa mubo nga pulong, -er, ug doblehon ang kataposang consonant."],["This is ___ expensive than that. Unsay sakto sa blangko?",["more","most","much","very"],0,"Sa taas nga pulong, \"more\" ang gamiton sa comparative."],["Unsay superlative sa \"good\"?",["the goodest","the most good","the better","the best"],3,"Irregular kini: good – better – the best."]],
practice:[
["mc","Unsay comparative sa \"cheap\"?","cheaper","more cheap","cheapper","most cheap","Sa mubo nga pulong, dugangi og -er."],
["mc","'Mas mahal kini' sa Iningles?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Sa taas nga pulong, \"more\" ang gamiton."],
["mc","'Naa ba moy mas dako nga sukod?' sa Iningles?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Ang han-ay: article + adjective + noun."],
["mc","Unsay comparative sa \"good\"?","better","gooder","more good","best","Irregular kini: good – better – best."],
["mc","'Kini ang pinakamaayong restawran' sa Iningles?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Sa atubangan sa superlative, butangan og \"the\"."],
["or","Naa ba moy mas dako nga sukod?","Do you have a bigger size","the sizes","Bisan unsang sukod nga mas dako, usa ra, mao nga article \"a\"."],
["or","Kini ang pinakabarato","This is the cheapest","a cheaper","Sa atubangan sa superlative, article \"the\" ang gamiton."],
["or","Mas barato kini kaysa niana","This is cheaper than that","more","Dili dugangan og \"more\" ang adjective nga naa nay -er."],
["fi","It's __ small.","Gamay ra kaayo","too","much|more|most","Ang \"ra kaayo\" (sobra) kay \"too\"."],
["fi","This is cheaper __ that one.","Mas barato kini kaysa niana","than","then|that|more","Ang \"kaysa\" kay \"than\"."],
["fi","It's the __ expensive one.","Kini ang pinakamahal","most","more|much|very","Ang superlative sa taas nga pulong: \"the most\"."],
["ty","Naa ba moy mas gamay nga sukod?","Do you have a smaller size","smaller · size — gamita ang article \"a\"","the","Bisan unsang sukod nga mas gamay, usa ra, mao nga article \"a\"."],
["ty","Kini ang pinakamaayo","This is the best|This one is the best","the · best — article \"the\" sa superlative","a","Sa atubangan sa superlative, article \"the\" ang gamiton."],
["ty","Mas barato kini","This is cheaper|This one is cheaper","cheap — comparative ang gamiton","more","Sa mubo nga pulong, dugangi og -er."]]},
{ id:"going-to", title:"Pagsulti sa plano: be going to", blurb:"Kon naa na kay plano daan: be going to + verb.", deck:"Istorya-istorya", body:`
<p>Sa Bisaya, ang <i>mo-</i> ug <i>mag-</i> ang gamiton sa tanang wala pa mahitabo. Sa Iningles, kon <b>plano na nimo daan</b>, <b>be verb + going to + base form</b> ang gamiton. Ang <b>will</b>, para sa desisyon nga karon pa lang nimo nahimo, naa sa ulahing leksyon.</p>
{{ex:I'm going to visit Davao.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˈdɑːvaʊ/|Mobisita ko sa Davao}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Mopalit siya og awto (babaye)}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Manihapon mi}}
<h3>Negative ug pangutana</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Dili ko moadto}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Moanhi ka ba?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Unsay imong buhaton karong Sabado ug Domingo?}}
<h3>Tagna gikan sa imong nakita</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Moulan na}}
<h3>Mga time word nga kauban niini</h3>
<p>tomorrow (ugma), tonight (karong gabii), this weekend (karong Sabado ug Domingo), next week (sunod semana): ibutang sa kataposan sa sentence.</p>
<div class="tip">Sa pag-istorya, ang going to madungog nga <b>gonna</b>. Ug ayaw kalimti ang be verb: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["'Makigkita ko sa akong higala ugma' sa Iningles?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be verb + going to + base form ang han-ay."],["She ___ going to study. Unsay sakto sa blangko?",["am","are","is","be"],2,"Kon \"she\" ang subject, \"is\" ang be verb."],["'Unsay imong buhaton karong Sabado ug Domingo?' sa Iningles?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Question word + be verb + subject + going to."]],
practice:[
["mc","'Moadto ko sa Davao (plano na)' sa Iningles?","I'm going to go to Davao.","I going to go to Davao.","I'm going go to Davao.","I'm go to Davao going.","be verb + going to + base form."],
["mc","They ___ going to come. Unsay sakto sa blangko?","are","is","am","be","Kon \"they\" ang subject, \"are\" ang be verb."],
["mc","'Moulan na' sa Iningles?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Human sa \"going to\", base form ang verb."],
["mc","'Dili ko moadto (plano na)' sa Iningles?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Ibutang ang \"not\" human sa be verb."],
["mc","'Moanhi ka ba?' sa Iningles?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Sa pangutana, ibalhin ang be verb sa atubangan."],
["or","Mopalit siya og awto (babaye)","She's going to buy a car","the cars","Usa ra ka awto, mao nga article \"a\" ug singular nga \"car\", dili plural."],
["or","Makigkita ko sa akong mga higala","I'm going to meet my friends","friend","Daghan sila, mao nga plural: \"friends\"."],
["or","Manihapon mi","We're going to have dinner","a","Walay article sa atubangan sa \"dinner\"."],
["fi","I'm going __ study tonight.","Magtuon ko karong gabii","to","for|at|will","\"going to\" + base form ang han-ay."],
["fi","__ you going to come?","Moanhi ka ba?","Are","Do|Is|Will","Kon \"you\" ang subject, \"Are\" ang be verb."],
["fi","It's going to __ tomorrow.","Moulan ugma","rain","rains|raining|rained","Human sa \"going to\", base form ang verb."],
["ty","Motan-aw ko og salida (plano na)","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — article \"a\" kay usa ra","the","Bisan unsang salida, usa ra, mao nga article \"a\"."],
["ty","Unsay imong buhaton? (plano)","What are you going to do","what · going to · do — plano ang pangutana","will","Ang plano pangutan-on gamit ang \"be going to\"."],
["ty","Makigkita ko sa akong mga higala (plano na)","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — plural kay daghan","friend","Daghan sila, mao nga plural: \"friends\"."]]},
{ id:"joining", title:"Pagsumpay sa mga sentence: and, but, or, so, because", blurb:"Duha ka mubong sentence, himoong usa. ug = and, pero = but, mao nga = so, kay = because.", deck:"Pagbati ug reaksyon", body:`
<p>Kon puro mubo ang imong mga sentence, putol-putol kini paminawon. Sayon ra kining lima ka conjunction (pulong nga mosumpay), kay naay katumbas sa Bisaya ang matag usa.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Ganahan ko og kape ug tsa}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Gikapoy ko pero malipayon}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Kape o tsa?}}
<h3>so: mao nga</h3>
<p><b>Hinungdan + so + resulta</b>. Pareho sa han-ay sa <i>mao nga</i>.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Gikapoy ko, mao nga nipauli ko}}
<h3>because: kay</h3>
<p><b>Resulta + because + hinungdan</b>. Pareho sa han-ay sa <i>kay</i>.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Nipauli ko kay gikapoy ko}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Nagpabilin ko sa balay kay nag-ulan}}
<h3>too: sab</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Ganahan sab ko niini}}
<div class="tip">Usa ra ka conjunction ang pilion. Ayaw idungan ang because ug so: <b>Because I was tired, so I went home.</b> ✗. Ayaw sab idungan ang although ug but, bisan og natural sa Bisaya ang <i>bisan … pero</i>: <b>Although it was raining, but I went out.</b> ✗ → <b>Although it was raining, I went out.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. Unsay sakto sa blangko?",["because","but","so","or"],2,"Hinungdan una, dayon resulta: \"so\"."],["I stayed home ___ I was sick. Unsay sakto sa blangko?",["because","so","but","and"],0,"Resulta una, dayon hinungdan: \"because\"."],["'Kape o tsa?' sa Iningles?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Kon mopili sa duha, \"or\" ang gamiton."]],
practice:[
["mc","I like dogs ___ I don't like cats. Unsay sakto sa blangko?","but","so","or","because","Kon sukwahi ang duha ka bahin, \"but\" ang gamiton."],
["mc","I was hungry, ___ I ate a sandwich. Unsay sakto sa blangko?","so","because","but","or","Hinungdan una, dayon resulta: \"so\"."],
["mc","I ate a sandwich ___ I was hungry. Unsay sakto sa blangko?","because","so","but","or","Resulta una, dayon hinungdan: \"because\"."],
["mc","'Kape o tsa?' sa Iningles?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Kon mopili sa duha, \"or\" ang gamiton."],
["mc","'Gikapoy ko pero malipayon' sa Iningles?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","Ang \"pero\" kay \"but\"."],
["or","Ganahan ko og mga iring ug mga iro","I like cats and dogs","cat dog","Ang tanang iring ug iro ang gipasabot, mao nga plural: \"cats\", \"dogs\"."],
["or","Usa ka kape ug usa ka sandwich, palihug","A coffee and a sandwich please","the or","Tag-usa ang imong gipangayo, mao nga article \"a\" sa matag usa."],
["or","Gigutom ko, mao nga nikaon ko","I was hungry so I ate","because","Hinungdan una, dayon resulta: \"so\"."],
["fi","I'm tired __ happy.","Gikapoy ko pero malipayon","but","so|because|or","Ang \"pero\" kay \"but\"."],
["fi","I stayed home __ it was raining.","Nagpabilin ko sa balay kay nag-ulan","because","so|but|or","Resulta una, dayon hinungdan: \"because\"."],
["fi","Coffee __ tea?","Kape o tsa?","or","so|but|because","Kon mopili sa duha, \"or\" ang gamiton."],
["ty","Ganahan ko og kape ug tsa","I like coffee and tea","like · coffee · and · tea — walay article","a","Kape ug tsa sa kinatibuk-an ang gipasabot, mao nga walay article."],
["ty","Gikapoy ko pero malipayon","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — ang \"pero\" sa Iningles","so","Ang \"pero\" kay \"but\"."],
["ty","Ganahan ko og mga iro ug mga iring","I like dogs and cats|I like cats and dogs","dog · and · cat — plural ang gamiton","dog","Kon ang tanang iro ug iring ang gipasabot, plural ang gamiton: \"dogs\", \"cats\"."]]},
{ id:"pinoy-english", title:"Iningles sa Pinas: mga pulong nga lahi og kahulogan sa gawas", blurb:"CR, brownout, open the light: sakto sa Pilipinas, pero sa gawas lahi ang gigamit. Mao ni ang isulti kon langyaw ang imong kaistorya.", deck:"Mga lit-ag para sa Bisaya", body:`
<p>Ang Iningles sa Pilipinas dili sayop nga Iningles. Naa lang kiniy kaugalingong mga pulong nga masabtan sa tanang Pinoy, pero sa gawas sa nasod dili masabtan o lahi og kahulogan. Sa balay ug sa opisina dinhi, padayon lang. Kon langyaw ang imong kaistorya (kliyente, tig-interbyu, amo sa laing nasod), mao ni ang isulti.</p>
<h3>Mga pulong nga atoa ra</h3>
<div class="tbl"><table><tr><th>Sa Pinas</th><th>Sa gawas</th><th>Timan-i</th></tr><tr><td>CR, comfort room</td><td class="k">restroom, bathroom</td><td>dili masabtan ang CR sa gawas</td></tr><tr><td>open / close the light</td><td class="k">turn on / turn off the light</td><td>ang open ug close para sa pultahan ug bintana</td></tr><tr><td>brownout</td><td class="k">power outage, blackout</td><td>kon mawala ang kuryente</td></tr><tr><td>ref</td><td class="k">fridge, refrigerator</td><td>sa gawas, ang ref kay referee sa dula</td></tr><tr><td>aircon</td><td class="k">air conditioner, AC</td><td>sa Amerika, AC ang kasagaran</td></tr><tr><td>rubber shoes</td><td class="k">sneakers</td><td></td></tr><tr><td>What's your course?</td><td class="k">What's your major?</td><td>sa gawas, ang course usa ra ka subject o klase</td></tr><tr><td>batchmate</td><td class="k">classmate</td><td>o: someone from my year</td></tr><tr><td>It's so traffic.</td><td class="k">The traffic is really bad.</td><td>noun ang traffic, dili adjective</td></tr><tr><td>I'll commute.</td><td class="k">I'll take the bus.</td><td>sa gawas, ang commute kay pag-adto sa trabaho, bisan unsay sakyanan</td></tr><tr><td>load</td><td class="k">prepaid credit</td><td>ang load sa gawas kay karga</td></tr><tr><td>salvage (= patyon)</td><td class="k">kill</td><td>sa gawas, ang salvage kay pagluwas, sukwahi sa atong gamit</td></tr><tr><td>high blood (= nasuko pag-ayo)</td><td class="k">very angry</td><td>sa gawas, sakit ang high blood pressure</td></tr><tr><td>dialect</td><td class="k">language</td><td>ang Bisaya usa ka language, dili dialect</td></tr></table></div>
{{ex:Where's the restroom?|/ˈwerz ðə ˈrestruːm/|Asa ang CR?}}{{ex:Can you turn on the light?|/kən ju ˈtɜːrn ˈɑːn ðə ˈlaɪt/|Puwede nimo pasigaon ang suga?}}{{ex:There was a power outage.|/ðer wəz ə ˈpaʊər ˈaʊtɪdʒ/|Naay brownout ganina}}{{ex:The milk is in the fridge.|/ðə ˈmɪlk ɪz ɪn ðə ˈfrɪdʒ/|Naa sa ref ang gatas}}{{ex:The traffic is really bad.|/ðə ˈtræfɪk ɪz ˈriːəli ˈbæd/|Grabe ang traffic}}{{ex:What's your major?|/ˈwʌts jʊr ˈmeɪdʒər/|Unsay imong kurso?}}
<p>Kon ilisan nimo ang pulong, ayaw kalimti ang article: <b>the</b> restroom, <b>the</b> light, <b>a</b> power outage.</p>
<h3>Direktang hubad gikan sa Bisaya</h3>
<div class="tbl"><table><tr><th>Bisaya</th><th>Direktang hubad ✗</th><th>Natural nga Iningles ✓</th></tr><tr><td>Pahulama ko sa imong bolpen</td><td>Can you borrow me your pen?</td><td class="k">Can you lend me your pen?</td></tr><tr><td>Kadiyot lang (sa telepono)</td><td>For a while.</td><td class="k">One moment, please.</td></tr><tr><td>Manaog ko dinhi</td><td>I'll go down here.</td><td class="k">I'll get off here.</td></tr><tr><td>Mauna na ko</td><td>I'll go ahead.</td><td class="k">I'm leaving now.</td></tr><tr><td>Wala na siya dinhi</td><td>He is already not here.</td><td class="k">He is no longer here.</td></tr><tr><td>Hangtod karon, wala pa koy tubag</td><td>Until now, I have no reply.</td><td class="k">I still have no reply.</td></tr></table></div>
<p>Usa ra ang <i>hulam</i> sa Bisaya, pero duha sa Iningles: <b>borrow</b> kon ikaw ang mokuha, <b>lend</b> kon ikaw ang mohatag. Ang <i>wala na</i> kay <b>no longer</b>, ug ang <i>hangtod karon … pa</i> kay <b>still</b>. Ug ang <i>siya</i>: susiha kanunay kon <b>he</b> ba o <b>she</b>. <b>Ms. Abad said he would sign.</b> ✗ → <b>Ms. Abad said she would sign.</b> ✓</p>
{{ex:Can you lend me your pen?|/kən ju ˈlend mi jʊr ˈpen/|Puwede ko nimo pahulamon sa imong bolpen?}}{{ex:One moment, please.|/ˈwʌn ˈmoʊmənt ˈpliːz/|Kadiyot lang, palihug}}{{ex:I'll get off here.|/aɪl ˈget ˈɔːf ˈhɪr/|Manaog ko dinhi}}{{ex:I'm leaving now.|/aɪm ˈliːvɪŋ ˈnaʊ/|Mauna na ko}}{{ex:He is no longer here.|/hi ɪz ˈnoʊ ˈlɔːŋgər ˈhɪr/|Wala na siya dinhi (lalaki)}}{{ex:I still have no reply.|/aɪ ˈstɪl ˈhæv ˈnoʊ rɪˈplaɪ/|Hangtod karon, wala pa koy tubag}}
<h3>Gamay nga pulong nga nailisan, ug -s nga sobra</h3>
<p>Kini, dili na "atoa ra": sa eksamin ug sa trabaho, isipon kining sayop. Dili mailisan ang gamay nga pulong nga kauban sa verb, ug walay plural ang uncountable noun.</p>
<div class="tbl"><table><tr><th>✗</th><th>✓</th></tr><tr><td>fill up the form</td><td class="k">fill out the form</td></tr><tr><td>based from</td><td class="k">based on</td></tr><tr><td>result to</td><td class="k">result in</td></tr><tr><td>cope up with</td><td class="k">cope with</td></tr><tr><td>discuss about the plan</td><td class="k">discuss the plan</td></tr><tr><td>informations, equipments, furnitures</td><td class="k">information, equipment, furniture</td></tr></table></div>
{{ex:Please fill out this form.|/ˈpliːz ˈfɪl ˈaʊt ˈðɪs ˈfɔːrm/|Palihug sulati kining form}}{{ex:I need some information.|/aɪ ˈniːd ˈsʌm ˌɪnfərˈmeɪʃn/|Kinahanglan ko og impormasyon}}{{ex:We bought new furniture.|/wi ˈbɔːt ˈnuː ˈfɜːrnɪtʃər/|Nipalit mi og bag-ong muwebles}}
<div class="tip">Ayaw kaulaw sa Iningles sa Pinas: sakto kini dinhi sa atoa. Pangutan-a lang ang imong kaugalingon: "Pinoy ba ang akong kaistorya, o langyaw?" Kon langyaw: <b>CR</b> → <b>restroom</b> / <b>Open the light.</b> → <b>Turn on the light.</b> / <b>For a while.</b> → <b>One moment, please.</b></div>`,
check:[["Langyaw ang imong kaistorya. Unsaon nimo pagpangutana kon asa ang CR?",["Where is the CR?","Where is the restroom?","Where is restroom?","Where is the comfort?"],1,"Sa gawas sa Pilipinas, \"restroom\" o \"bathroom\" ang gigamit, ug kinahanglan ang article \"the\"."],["Gusto nimong hulamon ang bolpen sa imong kauban. Unsay sakto nga isulti?",["Can you borrow me your pen?","Can I lend your pen?","Can you lend me your pen?","Can you borrow your pen to me?"],2,"\"Lend\" kon siya ang mohatag, \"borrow\" kon ikaw ang mokuha: \"Can you lend me …?\" o \"Can I borrow …?\""],["Hain niini ang sakto nga sentence?",["I need some information.","I need some informations.","I need an information.","I need many informations."],0,"Uncountable noun ang \"information\": walay plural -s ug walay \"an\"."]],
practice:[
["mc","Langyaw ang imong kaistorya. 'Asa ang CR?' sa Iningles?","Where is the restroom?","Where is the CR?","Where is restroom?","Where is the comfort?","Sa gawas, \"restroom\" o \"bathroom\" ang gigamit, ug kinahanglan ang article \"the\"."],
["mc","'Puwede nimo pasigaon ang suga?' sa Iningles?","Can you turn on the light?","Can you open the light?","Can you open a light?","Can you turn the light open?","Ang suga pasigaon og \"turn on\". Ang \"open\" para sa pultahan ug bintana."],
["mc","Sa telepono: 'Kadiyot lang, palihug' sa Iningles?","One moment, please.","For a while, please.","Wait a while only.","A while, please.","Ang \"for a while\" nagpasabot nga dugay-dugay. Sa telepono: \"One moment, please.\""],
["mc","Pilia ang sakto nga sentence.","Please fill out this form.","Please fill up this form.","Please fill this form.","Please fill off this form.","Ang form sulatan og \"fill out\" o \"fill in\". Ang \"fill up\" para sa tangke o baso nga pun-on."],
["mc","'Wala na siya dinhi (lalaki)' sa Iningles?","He is no longer here.","He is already not here.","She is no longer here.","He is not already here.","Ang \"wala na\" kay \"no longer\", dili \"already not\". Lalaki ang gihisgotan, mao nga \"he\"."],
["or","Palihug pasigaa ang suga","Please turn on the light","open a","Ang suga pasigaon og \"turn on\", dili \"open\". Ang suga niining kuwartoha ang gipasabot, mao nga article \"the\", dili \"a\"."],
["or","Nipalit mi og bag-ong muwebles","We bought new furniture","furnitures a","Uncountable noun ang \"furniture\": walay plural -s ug walay article \"a\"."],
["or","Naay brownout ganina","There was a power outage","the brownout","Sa gawas, \"power outage\" ang tawag sa brownout. Usa ra ug bag-o pang gihisgotan, mao nga article \"a\", dili \"the\"."],
["or","Nanaog ko sa bus","I got off the bus","down went","Sa pagkanaog sa sakyanan, \"get off\" ang gamiton, dili \"go down\"."],
["fi","It's based __ a true story.","Gibase kini sa tinuod nga istorya","on","from|in|to","Kanunay \"based on\", dili \"based from\"."],
["fi","Can you __ me your umbrella?","Puwede ko nimo pahulamon sa imong payong?","lend|loan","borrow|borrowed|lends","Siya ang mohatag, mao nga \"lend\". Ang \"borrow\" para sa mokuha: \"Can I borrow your umbrella?\""],
["fi","I __ have no reply.","Hangtod karon, wala pa koy tubag","still","until now|already|yet","Ang \"hangtod karon … pa\" kay \"still\" sa Iningles, dili \"until now\"."],
["ty","Asa ang CR? (langyaw ang imong kaistorya)","Where is the restroom|Where's the restroom|Where is the bathroom|Where's the bathroom","where · restroom — kinahanglan ang article \"the\"","CR a","Sa gawas, \"restroom\" o \"bathroom\" ang gamiton. Ang CR niining lugara ang gipasabot, mao nga article \"the\"."],
["ty","Kinahanglan ko og impormasyon","I need some information|I need information","need · some · information — walay plural -s","informations an","Uncountable noun ang \"information\": walay plural -s ug walay article \"an\"."],
["ty","Palihug palonga ang suga","Please turn off the light|Turn off the light please|Please turn the light off|Turn the light off please|Turn off the light|Turn the light off|Can you turn off the light|Could you turn off the light|Can you turn the light off|Could you turn the light off|Can you please turn off the light|Could you please turn off the light|Please turn off the lights|Turn off the lights please|Turn off the lights","turn off · light — gamita ang article \"the\"","close","Ang suga palongon og \"turn off\", dili \"close\". Ang suga niining kuwartoha ang gipasabot, mao nga article \"the\"."],
["ty","Wala na siya magtrabaho dinhi (babaye)","She no longer works here|She doesn't work here anymore|She does not work here anymore|She is not working here anymore|She doesn't work here any more|She is no longer working here|She isn't working here anymore|She's not working here anymore","no longer · work · here — dili \"already not\"","already he","Ang \"wala na\" kay \"no longer\" o \"not … anymore\", dili \"already not\". Babaye ang gihisgotan, mao nga \"she\"."]]},
];

/* hmn-en stage A1: lessons it-there … joining, plus the hmn-en extra lesson final-sounds (English side from vi-en). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"it thiab there: lus Askiv yuav tsum muaj subject", blurb:"Huab cua thiab sij hawm siv it. Lus Hmoob hais muaj, lus Askiv hais there is / there are.", deck:"Sib tham", body:`
<p>Lus Hmoob hais <b>Los nag</b> thiab <b>Muaj ib lub khw nyob ze</b>: tsis muaj subject. Lus Askiv yuav tsum muaj subject. Yog tsis muaj, lus Askiv siv <b>it</b> los yog <b>there</b>.</p>
<h3>Huab cua thiab sij hawm: It</h3>
<p>It no tsis yog nws (khoom). It nyob qhov subject xwb.</p>
{{ex:It's cold today.|/ɪts koʊld təˈdeɪ/|Hnub no no.}}{{ex:It's three o'clock.|/ɪts θriː əˈklɑːk/|Tam sim no peb teev.}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Los nag.}}
<h3>Muaj: There is / There are</h3>
<p>Ib yam: <b>There is a …</b>. Ntau yam: <b>There are … -s</b>. Thaum hais lus, There is luv ua There's.</p>
{{ex:There's a cafe near here.|/ðerz‿ə kæˈfeɪ nɪr hɪr/|Muaj ib lub khw kav fes nyob ze qhov no.}}{{ex:There are two rooms.|/ðer ɑːr tuː ruːmz/|Muaj ob chav pw.}}
<h3>Nug thiab tsis muaj</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm hɪr/|Qhov no puas muaj chav dej?}}{{ex:Are there any seats?|/ɑːr ðer ˈeni siːts/|Puas muaj rooj?}}{{ex:There isn't a bus today.|/ðer ˈɪzənt‿ə bʌs təˈdeɪ/|Hnub no tsis muaj tsheb ntiav.}}
<h3>Muaj: have los yog there is?</h3>
<p>Hauv lus Hmoob, <b>muaj</b> yog have thiab yog there is. Lus Askiv siv ob lo lus: ib tug neeg muaj = <b>have</b>; muaj nyob ib qho chaw = <b>there is</b>.</p>
{{ex:I have a car.|/aɪ hæv‿ə kɑːr/|Kuv muaj ib lub tsheb.}}{{ex:There's a car outside.|/ðerz‿ə kɑːr aʊtˈsaɪd/|Muaj ib lub tsheb nyob nraum.}}
<div class="tip">Nco ntsoov: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓</div>`,
check:[["'Hnub no kub.' — lus Askiv twg raug?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Huab cua: it yog subject."],["There ___ three people. Lo lus twg raug?",["is","are","have","be"],1,"Peb tug neeg yog plural: there are."],["'Qhov no puas muaj chav dej?' — lus Askiv twg raug?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Nug tias puas muaj: Is there a …?"]],
practice:[
["mc","'Los nag.' — lus Askiv twg raug?","It's raining.","Is raining.","There is raining.","Rain is.","Huab cua: it yog subject."],
["mc","'Muaj ib lub khw kav fes nyob ze qhov no.' — lus Askiv twg raug?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Muaj … nyob ze: there is. Ib lub khw: article a."],
["mc","There ___ two rooms. Lo lus twg raug?","are","is","have","has","Rooms yog plural: are."],
["mc","'Tam sim no peb teev.' — lus Askiv twg raug?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Sij hawm kuj siv it."],
["mc","'Kuv muaj ib lub tsheb.' — lus Askiv twg raug?","I have a car.","There is a car me.","I am a car.","It's a car me.","Kuv muaj = I have (tsis yog there is)."],
["or","Hnub no no","It's cold today","There's","Huab cua: it yog subject."],
["or","Muaj ib lub tsheb nyob nraum","There's a car outside","cars","Ib lub tsheb: article a thiab car (singular)."],
["or","Muaj ob lub rooj","There are two seats","seat is","Ob lub yog plural: are thiab seats."],
["fi","__ cold today.","Hnub no no.","It's|It is","Is|There's|This","It nyob qhov subject."],
["fi","There __ a bank near here.","Muaj ib lub tsev bank nyob ze.","is","are|have|be","Ib lub tsev bank xwb: is."],
["fi","__ there any seats?","Puas muaj rooj?","Are","Is|Do|Have","Seats yog plural: Are."],
["ty","Hnub no kub","It's hot today","it · hot · today — huab cua siv it","There's","Huab cua: it yog subject."],
["ty","Qhov no puas muaj chav dej?","Is there a bathroom here|Is there a restroom here","is there · bathroom — siv article a","the","Ib chav dej: article a."],
["ty","Muaj ob chav pw (rooms)","There are two rooms","there are · two · room — siv plural","room","Ob chav yog plural: rooms."]]},

{ id:"plurals", title:"Plural -s, this / these thiab my / your", blurb:"Ntau tshaj ib: noun muaj -s. This yog ib yam, these yog ntau yam.", deck:"Mus kav khw", body:`
<p>Hauv lus Hmoob, noun (tej lus txog khoom los yog chaw) tsis hloov: <b>ib tug dev</b>, <b>ob tug dev</b>, <b>peb tug dev</b>. Lus Askiv tsis muaj classifier, tab sis noun hloov: <b>one dog</b>, <b>two dogs</b>. Ntau tshaj ib, noun yuav tsum muaj <b>-s</b>.</p>
<p><b>Cov dev</b> = the dogs. Cov tsis yog -s: lus Askiv tseem yuav tsum muaj -s.</p>
<h3>Plural ua li cas</h3>
<div class="tbl"><table><tr><th>Txoj cai</th><th>Lus Askiv</th></tr><tr><td>Ntau lo lus: -s</td><td class="k">book → books</td></tr><tr><td>Tom qab s · x · ch · sh: -es</td><td class="k">box → boxes</td></tr><tr><td>Consonant + y: -ies</td><td class="k">city → cities</td></tr><tr><td>Nco ntsoov</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
<p>Hais -s ua /s/ (books), /z/ (dogs) los yog /ɪz/ (boxes). Koj yuav xyaum ntau dua hauv Final sounds.</p>
{{ex:two books|/tuː bʊks/|ob phau ntawv}}{{ex:three boxes|/θriː ˈbɑːksɪz/|peb lub box}}{{ex:I have two children.|/aɪ hæv tuː ˈtʃɪldrən/|Kuv muaj ob tug me nyuam.}}
<h3>this / that: ib yam · these / those: ntau yam</h3>
{{ex:This is my bag.|/ðɪs‿ɪz maɪ bæg/|Nov yog kuv lub hnab.}}{{ex:These are my keys.|/ðiːz‿ɑːr maɪ kiːz/|Cov no yog kuv cov keys.}}{{ex:Those shoes are nice.|/ðoʊz ʃuːz‿ɑːr naɪs/|Nkawm khau ntawd zoo nkauj.}}
<h3>my, your, his, her, our, their</h3>
<p>Hauv lus Hmoob, <b>kuv lub hnab</b> = <b>my bag</b>: kuv nyob ua ntej, nkaus li lus Askiv. Muaj my, your … lawm, tsis txhob siv a los yog the.</p>
{{ex:Is this your phone?|/ɪz ðɪs jʊr foʊn/|Qhov no puas yog koj lub xov tooj?}}{{ex:Her brothers live in Fresno.|/hɝː ˈbrʌðɚz lɪv‿ɪn ˈfreznoʊ/|Nws (poj niam) cov nus nyob Fresno.}}
<div class="tip">Tom qab two, many, these, those, noun yeej yog plural: <b>two friend</b> ✗ → <b>two friends</b> ✓ / <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Lo lus twg raug?",["sister","sisters","a sister","sister's"],1,"Ob tug yog plural: sisters."],["___ are my keys. Lo lus twg raug?",["This","That","These","It"],2,"Keys yog plural: These."],["'Nov yog kuv lub hnab.' — lus Askiv twg raug?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Muaj my lawm: tsis siv article."]],
practice:[
["mc","'Ob phau ntawv' — lus Askiv twg raug?","two books","two book","two a book","twos book","Ntau tshaj ib: plural -s."],
["mc","Child: plural yog dab tsi?","children","childs","childes","child","Child tsis siv -s: nco ntsoov children."],
["mc","___ shoes are nice. (nkawm khau ntawd) Lo lus twg raug?","Those","That","This","It","Shoes yog plural: those."],
["mc","'Nov yog kuv lub hnab.' — lus Askiv twg raug?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","My thiab article tsis nyob ib txhij."],
["mc","Box: plural yog dab tsi?","boxes","boxs","boxies","box","Tom qab s, x, ch, sh: siv -es."],
["or","Cov no yog kuv cov keys","These are my keys","key This","Ntau yam: these thiab plural keys."],
["or","Kuv muaj ob tug me nyuam","I have two children","child a","Ob tug yog plural: children. Tsis siv article a."],
["or","Nkawm khau ntawd zoo nkauj","Those shoes are nice","That","Shoes yog plural: those."],
["fi","I have three __.","Kuv muaj peb tug miv.","cats","cat|a cat|cat's","Peb tug yog plural: cats."],
["fi","__ is my friend.","Nov yog kuv tus phooj ywg.","This","These|Those|They","Ib tug xwb: this."],
["fi","Two __, please.","Thov ob khob kav fes.","coffees","coffee|a coffee|coffee's","Ob khob yog plural: coffees."],
["ty","Cov no yog kuv cov ntawv (books)","These are my books","these · my · book — siv plural","book","Ntau yam: these thiab plural books."],
["ty","Kuv muaj ob tug muam (txiv neej hais)","I have two sisters","have · two · sister — siv plural","sister","Ob tug yog plural: sisters."],
["ty","Nov yog kuv lub hnab","This is my bag","this · my · bag — tsis siv article","a","Muaj my lawm: tsis siv article a."]]},
{ id:"present", title:"Simple Present: subject + verb + object", blurb:"Subject + verb + object nkaus li lus Hmoob. Kuv tsis noj = I don't eat.", deck:"Kuv tus kheej", body:`
<p><b>Kuv haus kav fes</b> = <b>I drink coffee</b>. Lus Hmoob thiab lus Askiv: subject (kuv, I), verb (tej lus txog kev ua li cas: haus, drink), object (kav fes, coffee). Qhov no yooj yim rau koj.</p>
<h3>Subject + verb + object</h3>
{{ex:I drink coffee.|/aɪ drɪŋk ˈkɑːfi/|Kuv haus kav fes.}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Kuv kawm lus Askiv.}}
<h3>Chaw thiab sij hawm nyob tom qab</h3>
<p>Tom qab verb, hais chaw ua ntej thiab sij hawm tom qab: <b>in St. Paul</b>, <b>every day</b>.</p>
{{ex:We live in St. Paul.|/wi lɪv‿ɪn seɪnt pɑːl/|Peb nyob St. Paul.}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ‿ˈevri deɪ/|Kuv kawm lus Askiv txhua hnub.}}{{ex:They work on weekends.|/ðeɪ wɝːk‿ɑːn ˈwiːkendz/|Lawv ua hauj lwm hnub Saturday thiab hnub Sunday.}}
<h3>Simple Present: tej yam koj ua txhua hnub</h3>
<p>Simple Present yog tej yam koj ua txhua hnub thiab tej yam muaj tseeb. Lus Hmoob hais <b>tsis</b> ua ntej verb. Lus Askiv tsis hais <b>I not eat</b>: siv <b>don't</b> ua ntej verb.</p>
{{ex:I don't eat meat.|/aɪ doʊnt‿iːt miːt/|Kuv tsis noj nqaij.}}
<h3>always, usually, sometimes, never</h3>
<p>Cov adverb (tej lus piav yus ua zoo li cas) no nyob ua ntej verb.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli get‿ʌp‿ət ˈsevən/|Txhua hnub kuv sawv 7 teev.}}{{ex:I never drink coffee at night.|/aɪ ˈnevɚ drɪŋk ˈkɑːfi ət naɪt/|Kuv tsis haus kav fes thaum tsaus ntuj.}}
<div class="tip">Nco ntsoov: <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ / <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓ / <b>I am live in Fresno.</b> ✗ → <b>I live in Fresno.</b> ✓</div>`,
check:[["'Kuv haus kav fes.' — lus Askiv twg raug?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Subject + verb + object, nkaus li lus Hmoob."],["I ___ eat meat. (Kuv tsis noj nqaij.) Lo lus twg raug?",["not","am not","no","don't"],3,"Lus Hmoob tsis = lus Askiv don't, ua ntej verb."],["Always nyob qhov twg? Lus Askiv twg raug?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Always nyob ua ntej verb."]],
practice:[
["mc","'Kuv kawm lus Askiv.' — lus Askiv twg raug?","I study English.","I English study.","I am study English.","Study I English.","Subject + verb + object, nkaus li lus Hmoob."],
["mc","'Kuv tsis noj nqaij.' — lus Askiv twg raug?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Tsis: siv don't ua ntej verb."],
["mc","'Peb nyob St. Paul.' — lus Askiv twg raug?","We live in St. Paul.","We in St. Paul live.","We are live in St. Paul.","We live St. Paul in.","Verb ua ntej, chaw tom qab. Tsis siv are nrog live."],
["mc","'Txhua hnub kuv sawv 7 teev.' (usually) — lus Askiv twg raug?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","Usually nyob ua ntej verb."],
["mc","Koj ua txhua hnub: lus Askiv twg raug?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Tej yam ua txhua hnub: Simple Present."],
["or","Kuv haus kav fes txhua hnub","I drink coffee every day","the am","Txhua hnub: Simple Present. Coffee tsis siv article."],
["or","Kuv nyeem ntau phau ntawv","I read many books","book","Ntau phau ntawv: many thiab plural books."],
["or","Peb ua hauj lwm hnub Saturday thiab hnub Sunday","We work on weekends","are","Muaj work lawm: tsis siv are."],
["fi","I __ like fish.","Kuv tsis nyiam ntses.","don't|do not","not|am not|no","Tsis = don't."],
["fi","I __ English every day.","Kuv kawm lus Askiv txhua hnub.","study","am study|studying|to study","Simple Present: verb tsis hloov."],
["fi","They live __ Fresno.","Lawv nyob Fresno.","in","at|on|to","Ua ntej lub nroog: in."],
["ty","Kuv haus tshuaj yej","I drink tea","drink · tea — tsis siv article","a","Tshuaj yej, kav fes, dej: tsis siv article a."],
["ty","Kuv nyiam miv","I like cats","like · cat — siv plural","cat","Txhua tus miv: plural cats."],
["ty","Kuv tsis noj nqaij","I don't eat meat","don't · eat · meat — tsis = don't","am","Tsis = don't."]]},
{ id:"questions", title:"Lo lus nug: Do you …? thiab what, where", blurb:"Lus Hmoob siv puas. Lus Askiv: Do, Are los yog Is nyob ua ntej subject.", deck:"Lus Askiv txhua hnub 2", body:`
<p>Lus Hmoob nug nrog <b>puas</b> ua ntej verb, thiab tsis hloov dab tsi: <b>Koj puas hais lus Askiv?</b> Lus Askiv yuav tsum hloov: <b>Do you speak English?</b> Tsis txhob hais <b>You speak English?</b> xwb.</p>
<p>Koj kuj nug tau nrog <b>los tsis yog</b>: <b>Koj noj mov lawm los tsis yog?</b> Lus Askiv muaj <b>…, or not?</b>, tab sis <b>Do you …?</b> zoo dua.</p>
<h3>be: Are you …? / Is this …?</h3>
<p>Muaj am, is los yog are: lawv nyob ua ntej subject.</p>
{{ex:Are you okay?|/ɑːr ju oʊˈkeɪ/|Koj puas nyob zoo?}}{{ex:Is this your bag?|/ɪz ðɪs jʊr bæg/|Qhov no puas yog koj lub hnab?}}
<h3>Lwm verb: Do nyob ua ntej</h3>
<p>Nug koj tus kheej: puas muaj lwm verb tsis yog be (like, live, speak)? Muaj: siv <b>Do</b> ua ntej subject. Lwm yam tsis hloov.</p>
{{ex:Do you like coffee?|/duː ju laɪk ˈkɑːfi/|Koj puas nyiam kav fes?}}{{ex:Do you speak English?|/duː ju spiːk‿ˈɪŋglɪʃ/|Koj puas hais lus Askiv?}}
<p>Teb luv luv: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>what, where … nyob ua ntej</h3>
<p>Lus Hmoob: <b>Koj nyob qhov twg?</b> (qhov twg nyob tom qab). Lus Askiv: what (dab tsi), where (qhov twg), when (thaum twg), who (leej twg), why (vim li cas), how (li cas) nyob ua ntej: <b>Where do you live?</b></p>
{{ex:Where do you live?|/wer duː ju lɪv/|Koj nyob qhov twg?}}{{ex:What do you do?|/wʌt duː ju duː/|Koj ua hauj lwm dab tsi?}}{{ex:Where is the bathroom?|/wer ɪz ðə ˈbæθruːm/|Chav dej nyob qhov twg?}}{{ex:How much is this?|/haʊ mʌtʃ‿ɪz ðɪs/|Qhov no pes tsawg?}}
<div class="tip">Nco ntsoov: <b>You like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓ / <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["'Koj puas nyiam kav fes?' — lus Askiv twg raug?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Like tsis yog be: nug nrog Do."],["'Koj nyob qhov twg?' — lus Askiv twg raug?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Nug: Where + do + subject + verb."],["Do you speak English? Lo lus teb twg raug?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Nug nrog Do, teb nrog do."]],
practice:[
["mc","'Koj puas hais lus Askiv?' — lus Askiv twg raug?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Speak tsis yog be: Do nyob ua ntej."],
["mc","'Koj nyob qhov twg?' — lus Askiv twg raug?","Where do you live?","Where you live?","Where are you live?","Where live you?","Nug: Where + do + subject + verb."],
["mc","'Qhov no pes tsawg?' — lus Askiv twg raug?","How much is this?","How much this is?","How much does this?","What much is this?","Nug nqi: How much is …?"],
["mc","Do you like tea? — lo lus teb twg raug?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Nug nrog Do, teb nrog do."],
["mc","'Koj ua hauj lwm dab tsi?' — lus Askiv twg raug?","What do you do?","What are you do?","What you do?","What do you?","Nug hauj lwm: What do you do?"],
["or","Koj puas nyiam kav fes?","Do you like coffee","Are the","Like: nug nrog Do. Coffee tsis siv article."],
["or","Chav dej nyob qhov twg?","Where is the bathroom","a do","Chav dej hauv lub tsev no: article the."],
["or","Koj nyob qhov twg?","Where do you live","are","Live tsis yog be: siv do."],
["fi","__ you like music?","Koj puas nyiam nkauj?","Do","Are|Is|Does","Like tsis yog be: nug nrog Do."],
["fi","__ do you live?","Koj nyob qhov twg?","Where","What|Who|When","Qhov twg = where."],
["fi","What time __ it?","Tam sim no pes tsawg teev?","is","do|does|are","Sij hawm: nug nrog be (is)."],
["ty","Koj puas hais lus Askiv?","Do you speak English|Can you speak English","do · speak · English — nug nrog do","Are","Speak tsis yog be: Do nyob ua ntej."],
["ty","Chav dej nyob qhov twg?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — siv article the","a","Chav dej hauv qhov no: article the."],
["ty","Koj puas nyiam dev?","Do you like dogs","do · like · dog — siv plural","dog","Txhua tus dev: plural dogs."]]},
{ id:"third-s", title:"-s tom qab he, she, it: does / doesn't", blurb:"Ib tug neeg los yog ib yam: verb muaj -s. Nug thiab tsis: siv does.", deck:"Kuv tus kheej", body:`
<p>Lus Hmoob verb tsis hloov: <b>kuv ua hauj lwm</b>, <b>nws ua hauj lwm</b>. Hauv Simple Present lus Askiv, thaum subject yog <b>he, she, it</b> los yog ib tug neeg, ib yam khoom, verb muaj <b>-s</b>. Thaum hais lus, nco ntsoov hais -s: /s/ (works), /z/ (lives) los yog /ɪz/ (watches).</p>
<div class="tbl"><table><tr><th>subject</th><th>verb</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi wɝːks‿ət‿ə bæŋk/|Nws (poj niam) ua hauj lwm ntawm ib lub tsev bank.}}{{ex:He likes soccer.|/hi laɪks ˈsɑːkɚ/|Nws (txiv neej) nyiam ua si soccer.}}{{ex:My mom cooks well.|/maɪ mɑːm kʊks wel/|Kuv niam ua mov qab heev.}}
<h3>Verb hloov mentsis</h3>
{{ex:She has a car.|/ʃi hæz‿ə kɑːr/|Nws (poj niam) muaj ib lub tsheb. (have → has)}}{{ex:He goes to work at eight.|/hi goʊz tə wɝːk‿ət‿eɪt/|Nws (txiv neej) mus ua hauj lwm 8 teev. (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz‿ˈɪŋglɪʃ/|Nws (poj niam) kawm lus Askiv. (study → studies)}}
<h3>Tsis thiab nug: does</h3>
<p>Thaum siv <b>doesn't</b> los yog <b>Does</b>, -s nyob hauv does. Verb tom qab tsis muaj -s.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌzənt drɪŋk ˈkɑːfi/|Nws (txiv neej) tsis haus kav fes.}}{{ex:Does she live here?|/dʌz ʃi lɪv hɪr/|Nws (poj niam) puas nyob qhov no?}}
<div class="tip">Nco ntsoov: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Fresno. Lo lus twg raug?",["live","lives","living","is live"],1,"She: verb muaj -s."],["He ___ like coffee. Lo lus twg raug?",["don't","isn't","doesn't","not"],2,"He: tsis = doesn't."],["'Nws (poj niam) muaj ib lub tsheb.' — lus Askiv twg raug?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Tom qab she, have hloov ua has."]],
practice:[
["mc","My brother ___ in Fresno. Lo lus twg raug?","works","work","working","is work","Ib tug neeg: works."],
["mc","'Nws (txiv neej) tsis haus kav fes.' — lus Askiv twg raug?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","He: doesn't + verb tsis muaj -s."],
["mc","'Nws (poj niam) puas nyob qhov no?' — lus Askiv twg raug?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Tom qab Does, verb tsis muaj -s."],
["mc","have → she ___ Lo lus twg raug?","has","haves","have","is have","Have hloov ua has."],
["mc","study → he ___ Lo lus twg raug?","studies","studys","study","studyes","Consonant + y: hloov ua -ies."],
["or","Nws (poj niam) ua hauj lwm ntawm ib lub tsev bank","She works at a bank","work the","She: works. Ib lub tsev bank: article a."],
["or","Nws (txiv neej) muaj ob tug dev","He has two dogs","have dog","He: has. Ob tug yog plural: dogs."],
["or","Nws (poj niam) tsis noj nqaij","She doesn't eat meat","eats","Tom qab doesn't, verb tsis muaj -s."],
["fi","He __ soccer.","Nws (txiv neej) nyiam ua si soccer.","likes","like|liking|is like","He siv likes."],
["fi","__ she speak English?","Nws (poj niam) puas hais lus Askiv?","Does","Do|Is|Are","She: nug nrog Does."],
["fi","She __ to work at eight.","Nws (poj niam) mus ua hauj lwm 8 teev.","goes","go|going|gos","Go hloov ua goes."],
["ty","Nws (txiv neej) muaj ib lub tsheb","He has a car","has · car — siv article a","have","He: has. Ib lub tsheb: article a."],
["ty","Nws (poj niam) nyiam miv","She likes cats","likes · cat — siv plural","cat","She: likes. Txhua tus miv: plural cats."],
["ty","Nws (txiv neej) tsis nyob qhov no","He doesn't live here","doesn't · live · here — tsis siv -s","lives","Tom qab doesn't, verb tsis muaj -s."]]},
{ id:"final-sounds", title:"Hais consonant kawg: -s thiab -ed", blurb:"Lus Askiv hais txhua consonant kawg. -s thiab -ed qhia plural thiab past tense.", deck:"Final sounds: -s, -ed", body:`
<p>Hauv lus Hmoob, tus tsiaj ntawv kawg yog cim (tone): <b>Hmoob</b>, koj tsis hais b. Lo lus Hmoob tsis muaj consonant ntawm qhov kawg. Hauv lus Askiv, koj yuav tsum hais tus kawg: <b>book</b> /bʊk/, koj hais /k/. Ntau zaus muaj ob peb tus consonant ib txhij: /ks/, /st/, /nts/. Yog koj tsis hais tus kawg, lawv tsis paub tias yog <b>book</b> los yog <b>books</b>, <b>work</b> los yog <b>worked</b>.</p>
<h3>-s: /s/, /z/ los yog /ɪz/</h3>
<p>Peb yam no siv rau plural -s, rau -s tom qab he / she / it, thiab rau 's.</p>
<div class="tbl"><table><tr><th>Hais li cas</th><th>Thaum twg</th><th>Lus Askiv</th></tr><tr><td>/s/</td><td>tom qab /p t k f/</td><td class="k">books, works</td></tr><tr><td>/z/</td><td>tom qab vowel thiab lwm tus consonant</td><td class="k">dogs, plays</td></tr><tr><td>/ɪz/</td><td>tom qab /s z ʃ tʃ dʒ/</td><td class="k">buses, watches</td></tr></table></div>
{{ex:two books|/tuː bʊks/|ob phau ntawv}}{{ex:two dogs|/tuː dɑːgz/|ob tug dev}}{{ex:two buses|/tuː ˈbʌsɪz/|ob lub tsheb ntiav}}
<h3>Ob peb tus consonant ib txhij: hais txhua tus</h3>
<p>Lus Hmoob tsis muaj consonant ntawm qhov kawg, thiaj li ntau tus neeg hais <b>six</b> nkaus li <b>sick</b>, thiab <b>last</b> tsis muaj /t/. Hais txhua tus.</p>
{{ex:six students|/sɪks ˈstuːdənts/|rau tus tub kawm ntawv}}{{ex:last week|/læst wiːk/|ib lim tiam dhau los}}
<h3>Thaum kawg: /g/ los yog /k/?</h3>
<p>McCurdy (2010) kawm 15 tus neeg Hmoob kawm lus Askiv: lawv tsis hais /d/, /g/, /v/ ntawm qhov kawg ntau tshaj. Yog koj hais <b>dog</b> tsis muaj /g/, nws yog <b>dock</b>. Vowel ua ntej /b d g v z/ ntev mentsis: <b>bag</b> ntev dua <b>back</b>.</p>
{{ex:bag / back|/bæg/ / /bæk/|lub hnab / tom qab}}{{ex:dog / dock|/dɑːg/ / /dɑːk/|dev / chaw nkoj nyob}}{{ex:seed / seat|/siːd/ / /siːt/|noob / rooj}}
<h3>Ob lo lus ib txhij: consonant thiab vowel</h3>
<p>Thaum lo lus tom qab muaj vowel ua ntej (in, a), hais consonant kawg nrog vowel ntawd ib txhij. Hauv IPA, ‿ qhia qhov no. Txoj kev no pab koj hais consonant kawg yooj yim dua.</p>
{{ex:My brother works in St. Paul.|/maɪ ˈbrʌðɚ wɝːks‿ɪn seɪnt pɑːl/|Kuv tus nus ua hauj lwm hauv St. Paul. (poj niam hais)}}{{ex:She lives in a big city.|/ʃi lɪvz‿ɪn‿ə bɪg ˈsɪti/|Nws (poj niam) nyob hauv ib lub nroog loj.}}
<h3>-ed (past tense): /t/, /d/ los yog /ɪd/</h3>
<p>Past tense muaj -ed: hais /t/, /d/ los yog /ɪd/. Koj yuav xyaum ntau dua tom qab.</p>
{{ex:watched / played / wanted|/wɑːtʃt/ / /pleɪd/ / /ˈwɑːntɪd/|tau saib / tau ua si / tau xav}}
<h3>Tsis yog plural: tsis txhob siv -s</h3>
<p>Thaum koj xyaum -s ntau, tej zaum koj siv -s rau txhua lo lus. Siv -s thaum noun yog plural los yog thaum subject yog he, she, it xwb. Ib yam koj nyiam ua = <b>hobby</b>, tsis yog <b>hobbies</b>.</p>
{{ex:My hobby is music.|/maɪ ˈhɑːbi ɪz ˈmjuːzɪk/|Yam kuv nyiam ua yog mloog nkauj.}}
<div class="tip">Nco ntsoov: <b>two bus</b> ✗ → <b>two buses</b> ✓ / <b>She work.</b> ✗ → <b>She works.</b> ✓ / <b>dog</b> nkaus li <b>dock</b> ✗ → hais /g/ ✓</div>`,
check:[["Lo lus twg -s hais /ɪz/?",["books","dogs","buses","cats"],2,"Tom qab /s/, -es hais /ɪz/: buses."],["'Ob tug dev' — lus Askiv twg raug?",["two dogs","two dog","two dogses","a two dogs"],0,"Muaj two, noun yog plural; -s no hais /z/."],["She ___ in St. Paul. Lo lus twg raug?",["live","living","is live","lives"],3,"She: verb muaj -s: lives, hais /lɪvz/."]],
practice:[
["mc","6 = rau: lus Askiv twg raug?","six","sick","sit","sip","Six muaj /ks/ ntawm qhov kawg; sick muaj /k/ xwb."],
["mc","'Lub hnab' — lus Askiv twg raug?","bag","back","bat","bad","Bag muaj /g/ ntawm qhov kawg; yog hais /k/, nws yog back."],
["mc","'Dev' — lus Askiv twg raug?","dog","dock","duck","dot","Dog muaj /g/, tsis yog /k/ nkaus li dock."],
["mc","Lo lus twg -s hais /z/?","dogs","books","cats","buses","Tom qab /g/, -s hais /z/."],
["mc","Lo lus twg -ed hais /ɪd/?","wanted","watched","played","worked","Tom qab /t/ los yog /d/, -ed hais /ɪd/."],
["or","ob lub tsheb ntiav","two buses","bus","Muaj two: plural. Bus muaj -es, hais /ɪz/."],
["or","Nws (poj niam) muaj rau tus tub kawm ntawv","She has six students","student","Muaj six: plural students. Hais /nts/."],
["or","Kuv tus nus ua hauj lwm hauv St. Paul (poj niam hais)","My brother works in St. Paul","work","My brother yog ib tug neeg: works. Hais /s/ nrog in ib txhij."],
["fi","She __ in St. Paul.","Nws (poj niam) ua hauj lwm hauv St. Paul.","works","work|is work|working","She: works. Hais /ks/."],
["fi","My __ is music.","Yam kuv nyiam ua yog mloog nkauj.","hobby","hobbies|hobbys|hobby's","Ib yam xwb: hobby (singular). Tsis txhob hais /s/."],
["fi","I need two __.","Kuv xav tau ob lub box.","boxes","box|boxs|a box","Muaj two: plural. Tom qab x, -es hais /ɪz/."],
["ty","rau tus tub kawm ntawv","six students","six · student — siv plural","student","Muaj six: plural students, hais /nts/."],
["ty","Nws (txiv neej) muaj ob lub hnab","He has two bags","has · two · bag — siv plural","bag","Muaj two: plural bags. -s hais /z/."],
["ty","Kuv niam ua mov qab heev","My mom cooks well|My mother cooks well|My mom cooks really well|My mother cooks really well|My mom cooks very well|My mother cooks very well","mom · cook · well — siv -s","cook","My mom yog ib tug neeg: cooks. Hais /ks/."]]},
{ id:"countable", title:"Countable thiab uncountable: some, any, much, many", blurb:"Water tsis siv a, tsis muaj -s. Many rau yam suav tau, much rau yam suav tsis tau.", deck:"Mus noj mov", body:`
<p>Lus Hmoob muaj classifier: <b>ib lub tsev</b>, <b>ib daim ntawv</b>, <b>ib txoj kev</b>. Lus Askiv tsis muaj classifier, tab sis noun muaj ob yam: yam <b>suav tau</b> (countable) thiab yam <b>suav tsis tau</b> (uncountable).</p>
<div class="tbl"><table><tr><th>Suav tau</th><th>Suav tsis tau</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, two, three …, -s: siv tau</td><td>a / an, two, three …, -s: siv tsis tau</td></tr></table></div>
<h3>some thiab any</h3>
<p><b>some</b> = ib txhia. Thaum hais tias muaj: <b>some</b>. Thaum tsis muaj thiab thaum nug: <b>any</b>. Tab sis thaum koj thov ib yam los yog muab ib yam rau ib tug neeg, lo lus nug kuj siv <b>some</b>: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ hæv sʌm ˈmʌni/|Kuv muaj ib txhia nyiaj.}}{{ex:I don't have any money.|/aɪ doʊnt hæv‿ˈeni ˈmʌni/|Kuv tsis muaj nyiaj.}}{{ex:Do you have any questions?|/duː ju hæv‿ˈeni ˈkwestʃənz/|Koj puas muaj lo lus nug?}}
<h3>many thiab much</h3>
<p>Suav tau: <b>many</b> + plural. Suav tsis tau: <b>much</b>. <b>A lot of</b> siv tau rau ob yam.</p>
{{ex:How many people?|/haʊ ˈmeni ˈpiːpəl/|Muaj pes tsawg tus neeg?}}{{ex:How much is it?|/haʊ mʌtʃ‿ɪz‿ɪt/|Qhov no pes tsawg?}}{{ex:I don't have much time.|/aɪ doʊnt hæv mʌtʃ taɪm/|Kuv tsis muaj sij hawm ntau.}}
<h3>Suav dej thiab kav fes li cas</h3>
<p>Lus Hmoob siv classifier <b>khob</b>. Lus Askiv siv <b>a glass of</b>, <b>a cup of</b>.</p>
{{ex:a glass of water|/ə glæs‿əv ˈwɑːtɚ/|ib khob dej}}{{ex:a cup of coffee|/ə kʌp‿əv ˈkɑːfi/|ib khob kav fes}}
<div class="tip">Nco ntsoov: <b>a water</b>, <b>many money</b>, <b>informations</b> ✗ → <b>some water</b>, <b>much money</b>, <b>information</b> ✓</div>`,
check:[["How ___ people are there? Lo lus twg raug?",["much","many","any","a"],1,"Neeg suav tau: many."],["Lo lus twg suav tsis tau (uncountable)?",["apple","chair","water","friend"],2,"Water tsis siv a, tsis muaj -s."],["I don't have ___ money. Lo lus twg raug?",["some","a","many","any"],3,"Tsis muaj: siv any."]],
practice:[
["mc","Can I have ___ water? Lo lus twg raug?","some","a","many","an","Water suav tsis tau: tsis siv a los yog many."],
["mc","How ___ time do we have? Lo lus twg raug?","much","many","any","a","Time suav tsis tau: much."],
["mc","'Koj puas muaj lo lus nug?' — lus Askiv twg raug?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Tom qab any, noun suav tau yog plural."],
["mc","'Ib khob dej' — lus Askiv twg raug?","a glass of water","a water glass of","one waters","a glass water","Suav dej: siv a glass of."],
["mc","I have ___ friends in St. Paul. Lo lus twg raug?","many","much","a","an","Friends suav tau thiab yog plural: many."],
["or","Kuv muaj ib txhia nyiaj","I have some money","a moneys","Money suav tsis tau: tsis siv article a, tsis muaj plural -s."],
["or","Thov ob lub txiv av paum","Two apples please","apple","Ob lub yog plural: apples."],
["or","Kuv tsis muaj sij hawm ntau","I don't have much time","many","Time suav tsis tau: much."],
["fi","How __ is this?","Qhov no pes tsawg?","much","many|any|some","Nug nqi: how much."],
["fi","I don't have __ questions.","Kuv tsis muaj lo lus nug.","any","some|much|a","Tsis muaj: any."],
["fi","a cup __ coffee","ib khob kav fes","of","for|in|a","Suav kav fes: siv a cup of."],
["ty","Kuv thov dej haus puas tau?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — tsis siv article","a","Water suav tsis tau: siv some, tsis siv article a."],
["ty","Koj puas muaj lo lus nug?","Do you have any questions","any · question — siv plural","question","Tom qab any, noun suav tau: plural questions."],
["ty","Muaj pes tsawg tus neeg?","How many people","how many · people — neeg suav tau","much","Neeg suav tau: many."]]},
{ id:"object-have", title:"me, him, her thiab have", blurb:"Tom qab verb siv me, tsis yog I. Thiab have: muaj, noj, haus.", deck:"Kuv tus kheej", body:`
<p>Lus Hmoob pronoun (tej lus pauv lub npe) tsis hloov: <b>kuv</b> = I, me thiab my. <b>Nws paub kuv</b>: kuv tsis hloov. Lus Askiv pronoun hloov: tom qab verb los yog preposition (tej lus txog kev nyob qhov twg), siv <b>me, him, her, us, them</b>.</p>
<p>Lus Hmoob <b>nws</b> = he, she thiab him, her. Koj yuav kawm ntau dua tom qab, hauv he-she-it.</p>
<div class="tbl"><table><tr><th>subject</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>object</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi noʊz mi/|Nws (poj niam) paub kuv.}}{{ex:I like him.|/aɪ laɪk hɪm/|Kuv nyiam nws (txiv neej).}}{{ex:Can you help us?|/kən ju help‿ʌs/|Pab peb puas tau?}}{{ex:I work with her.|/aɪ wɝːk wɪð hɝː/|Kuv ua hauj lwm nrog nws (poj niam).}}
<h3>have: muaj</h3>
<p>Lus Hmoob <b>muaj</b> = lus Askiv <b>have</b>: tsev neeg, khoom thiab sij hawm.</p>
{{ex:I have two brothers.|/aɪ hæv tuː ˈbrʌðɚz/|Kuv muaj ob tug nus. (poj niam hais)}}{{ex:Do you have a pen?|/duː ju hæv‿ə pen/|Koj puas muaj cwj mem?}}{{ex:I don't have time.|/aɪ doʊnt hæv taɪm/|Kuv tsis muaj sij hawm.}}
<h3>have: noj, haus</h3>
<p>Lus Askiv kuj siv <b>have</b> rau noj thiab haus. Breakfast, lunch, dinner tsis siv article.</p>
{{ex:Let's have lunch.|/lets hæv lʌntʃ/|Wb mus noj su.}}{{ex:I have coffee every morning.|/aɪ hæv ˈkɑːfi ˈevri ˈmɔːrnɪŋ/|Sawv ntxov kuv haus kav fes.}}
<div class="tip">Nco ntsoov: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (nws, txiv neej) Lo lus twg raug?",["he","his","him","he's"],2,"Tom qab verb siv him."],["Can you help ___? (peb) Lo lus twg raug?",["us","we","our","ours"],0,"Tom qab verb siv us."],["'Koj puas muaj cwj mem?' — lus Askiv twg raug?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"Have tsis yog be: nug nrog Do."]],
practice:[
["mc","She knows ___. (kuv) Lo lus twg raug?","me","I","my","mine","Tom qab verb siv me."],
["mc","I like ___. (lawv) Lo lus twg raug?","them","they","their","theirs","Tom qab verb siv them."],
["mc","'Pab peb puas tau?' — lus Askiv twg raug?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Tom qab verb siv us."],
["mc","'Wb mus noj su.' — lus Askiv twg raug?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Lunch tsis siv article."],
["mc","'Kuv muaj ob tug nus.' (poj niam hais) — lus Askiv twg raug?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","Tsev neeg: have. Ob tug yog plural."],
["or","Koj puas muaj cwj mem?","Do you have a pen","the pens","Ib tus cwj mem: article a thiab pen (singular)."],
["or","Kuv nyiam nws (poj niam)","I like her","she","Tom qab verb siv her."],
["or","Kuv muaj ob tug muam (txiv neej hais)","I have two sisters","sister a","Ob tug yog plural: sisters. Tsis siv article a."],
["fi","Call __ tonight.","Tsaus ntuj no hu rau kuv.","me","I|my|mine","Tom qab verb siv me."],
["fi","I work with __.","Kuv ua hauj lwm nrog nws (txiv neej).","him","he|his|he's","Tom qab preposition (with) kuj siv him."],
["fi","She __ a dog.","Nws (poj niam) muaj ib tug dev.","has","have|is|haves","She siv has."],
["ty","Pab kuv puas tau?","Can you help me|Could you help me","can you · help · me — tsis siv I","I","Tom qab verb siv me."],
["ty","Koj puas muaj cwj mem?","Do you have a pen","do you have · pen — siv article a","the","Ib tus cwj mem: article a."],
["ty","Kuv muaj ntau tus phooj ywg","I have many friends|I have a lot of friends","have · many · friend — siv plural","friend","Tom qab many siv plural friends."]]},
{ id:"can-like", title:"can, like + -ing, I'd like: koj ua tau dab tsi thiab xav tau dab tsi", blurb:"Hais tias koj ua tau dab tsi, nyiam dab tsi, thiab tam sim no xav tau dab tsi.", deck:"Sib tham", body:`
<p>Peb yam no pab koj qhia koj tus kheej thiab thov ib yam.</p>
<h3>can: ua tau</h3>
<p>Lus Hmoob <b>tau</b> nyob tom qab verb (<b>Kuv ua luam dej tau</b>) los yog ua ntej. Lus Askiv: <b>can</b> yeej nyob ua ntej verb. Tom qab he, she, verb kuj tsis muaj -s.</p>
{{ex:I can swim.|/aɪ kən swɪm/|Kuv ua luam dej tau.}}{{ex:I can't drive.|/aɪ kænt draɪv/|Kuv tsav tsheb tsis tau.}}{{ex:Can you speak Hmong?|/kən ju spiːk mɑːŋ/|Koj puas hais tau lus Hmoob?}}
<h3>like + -ing: nyiam ua</h3>
<p>Lus Hmoob: <b>nyiam</b> + verb (<b>Kuv nyiam noj fawm</b>). Lus Askiv: like, love + verb-ing.</p>
{{ex:I like cooking.|/aɪ laɪk ˈkʊkɪŋ/|Kuv nyiam ua mov.}}{{ex:I love watching movies.|/aɪ lʌv ˈwɑːtʃɪŋ ˈmuːviz/|Kuv nyiam saib movies heev.}}{{ex:I don't like running.|/aɪ doʊnt laɪk ˈrʌnɪŋ/|Kuv tsis nyiam khiav.}}
<h3>I'd like: thov, kuv xav tau</h3>
<p><b>I like</b> = kuv nyiam (txhua hnub). <b>I'd like</b> = tam sim no kuv xav tau, hais lus zoo. Thaum thov mov los yog kav fes, siv I'd like.</p>
{{ex:I'd like a coffee, please.|/aɪd laɪk‿ə ˈkɑːfi pliːz/|Thov ib khob kav fes.}}{{ex:Would you like some tea?|/wʊd ju laɪk sʌm tiː/|Koj puas xav haus tshuaj yej?}}
<div class="tip">Nco ntsoov: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ / Thaum thov kav fes: <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Lo lus twg raug?",["sings","sing","singing","to sing"],1,"Tom qab can: verb tsis hloov."],["'Kuv nyiam ua mov.' — lus Askiv twg raug?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Tom qab like siv -ing."],["Thaum thov kav fes, lus Askiv twg zoo tshaj?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Tam sim no xav tau: I'd like."]],
practice:[
["mc","He can ___ Hmong. Lo lus twg raug?","speak","speaks","speaking","to speak","Tom qab can: verb tsis hloov."],
["mc","'Kuv tsav tsheb tsis tau.' — lus Askiv twg raug?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Ua tsis tau = can't."],
["mc","'Kuv nyiam saib movies.' — lus Askiv twg raug?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Tom qab like: -ing. Movies yog plural."],
["mc","Thov ib khob kav fes: lus Askiv twg raug?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Tam sim no xav tau: I'd like."],
["mc","'Koj puas xav haus tshuaj yej?' — lus Askiv twg raug?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Thaum muab rau ib tug neeg: Would you like …?"],
["or","Thov ib khob kav fes","I'd like a coffee please","the coffees","Ib khob: article a thiab coffee (singular)."],
["or","Kuv nyiam nyeem ntawv","I like reading books","book read","Tom qab like: -ing. Txhua phau ntawv: plural books."],
["or","Koj puas ua luam dej tau?","Can you swim","swimming","Tom qab can: verb tsis hloov."],
["fi","I can't __.","Kuv ua luam dej tsis tau.","swim","swimming|swims|to swim","Tom qab can't: verb tsis hloov."],
["fi","I like __ music.","Kuv nyiam mloog nkauj.","listening to","listen to|listen|to listening","Tom qab like siv -ing."],
["fi","__ like a sandwich, please.","Thov ib lub sandwich.","I'd|I would","I|I'm|I can","Thov: I'd like."],
["ty","Kuv nyiam ua mov","I like cooking|I love cooking|I like to cook","like · cook — siv -ing","cook","Tom qab like siv -ing."],
["ty","Thov ib lub sandwich","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — siv article a","the","Ib lub sandwich: article a."],
["ty","Kuv nyiam dev","I like dogs|I love dogs","like · dog — siv plural","dog","Txhua tus dev: plural dogs."]]},
{ id:"continuous", title:"Tam sim no: be + -ing", blurb:"Ua txhua hnub: Simple Present. Tam sim no tab tom ua: be + -ing.", deck:"Sib tham", body:`
<p>Lus Hmoob <b>tab tom</b> qhia tias tam sim no tab tom ua: <b>Kuv tab tom noj mov</b>. Tab sis lus Hmoob tsis siv tab tom txhua zaus. Lus Askiv yuav tsum siv <b>be + verb-ing</b> txhua zaus: <b>I'm working</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɝːkɪŋ naʊ/|Tam sim no kuv tab tom ua hauj lwm.}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnɚ/|Nws (poj niam) tab tom ua mov noj hmo.}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Tab tom los nag.}}
<h3>Nug thiab tsis</h3>
{{ex:What are you doing?|/wʌt‿ɑːr ju ˈduːɪŋ/|Koj tab tom ua dab tsi?}}{{ex:Are you listening?|/ɑːr ju ˈlɪsənɪŋ/|Koj puas tab tom mloog?}}{{ex:I'm not sleeping.|/aɪm nɑːt ˈsliːpɪŋ/|Kuv tsis pw tsaug zog.}}
<h3>Simple Present thiab be + -ing</h3>
<div class="tbl"><table><tr><th>Txhua hnub (Simple Present)</th><th>Tam sim no (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Verb tsis siv -ing</h3>
<p>like, know, want, need, have (muaj): tej verb no tsis yog ua ib yam dab tsi. Tam sim no, lus Askiv tseem siv Simple Present.</p>
{{ex:I know him.|/aɪ noʊ hɪm/|Kuv paub nws (txiv neej).}}{{ex:I want some water.|/aɪ wɑːnt sʌm ˈwɑːtɚ/|Kuv xav haus dej.}}
<div class="tip">Nco ntsoov be: <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["'Koj tab tom ua dab tsi?' — lus Askiv twg raug?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Tam sim no: nug nrog be + -ing."],["I ___ coffee every morning. Lo lus twg raug?",["am drinking","drinking","drink","am drink"],2,"Ua txhua hnub: Simple Present."],["Lus Askiv twg raug?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"Know, want thiab have (muaj) tsis siv -ing."]],
practice:[
["mc","'Tam sim no kuv tab tom ua hauj lwm.' — lus Askiv twg raug?","I'm working now.","I work now am.","I'm work now.","I working now.","Tam sim no: be + -ing."],
["mc","'Nws (poj niam) tab tom ua mov noj hmo.' — lus Askiv twg raug?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","Be + -ing. Dinner tsis siv article."],
["mc","Ua txhua hnub: lus Askiv twg raug?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Ua txhua hnub: Simple Present."],
["mc","'Koj tab tom ua dab tsi?' — lus Askiv twg raug?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Nug: What + be + subject + -ing."],
["mc","'Kuv paub nws (txiv neej).' — lus Askiv twg raug?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","Know tsis siv -ing."],
["or","Kuv tab tom nyeem ib phau ntawv","I'm reading a book","read books","Ib phau ntawv: article a thiab book (singular)."],
["or","Cov me nyuam tab tom ua si","The kids are playing","kid is","Cov me nyuam: plural kids thiab are."],
["or","Tam sim no tab tom los nag","It's raining now","rains","Tam sim no: be + -ing."],
["fi","I'm __ TV.","Kuv tab tom saib TV.","watching","watch|watches|to watch","Tom qab be siv -ing."],
["fi","What __ you doing?","Koj tab tom ua dab tsi?","are","do|is|does","You siv are."],
["fi","She __ working today.","Hnub no nws (poj niam) tsis ua hauj lwm.","isn't|is not","doesn't|don't|not","Be + -ing tsis: isn't."],
["ty","Tam sim no kuv tab tom ua mov","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — siv -ing","cook","Tam sim no: be + -ing."],
["ty","Kuv tab tom saib movie (a)","I'm watching a movie","I'm · watching · movie — siv article a","the","Ib yam movie: article a."],
["ty","Cov me nyuam tab tom pw tsaug zog","The kids are sleeping|The children are sleeping","kids · are · sleeping — siv plural","kid","Cov me nyuam: plural kids thiab are."]]},
{ id:"past", title:"Past tense: was / were thiab -ed", blurb:"Be hloov ua was, were. Lwm verb muaj -ed. Nug thiab tsis: siv did.", deck:"Sib tham", body:`
<p>Lus Hmoob verb tsis hloov: <b>Nag hmo kuv mus tom khw</b>. <b>Nag hmo</b> qhia sij hawm. <b>Tau</b> thiab <b>lawm</b> muaj tau, tsis muaj kuj tau. Lus Askiv verb yuav tsum hloov txhua zaus: <b>Yesterday I went to the store</b>. Muaj yesterday lawm, verb tseem yuav tsum hloov.</p>
<h3>be: was / were</h3>
<p>I, he, she, it: <b>was</b>. You, we, they: <b>were</b>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪɚd/|Kuv nkees.}}{{ex:It was fun.|/ɪt wəz fʌn/|Zoo kawg.}}{{ex:We were at home.|/wi wɝː ət hoʊm/|Peb nyob tsev.}}{{ex:Were you busy?|/wɝː ju ˈbɪzi/|Koj puas tsis khoom?}}
<h3>-ed</h3>
<p>Verb muaj <b>-ed</b>. <b>She worked</b> nkaus li <b>I worked</b>: subject twg los verb tsis hloov ntxiv. Hais -ed ua /t/ (worked), /d/ (called) los yog /ɪd/ (wanted), nkaus li hauv Final sounds.</p>
{{ex:I worked yesterday.|/aɪ wɝːkt ˈjestɚdeɪ/|Nag hmo kuv ua hauj lwm.}}{{ex:We watched a movie.|/wi wɑːtʃt‿ə ˈmuːvi/|Peb saib movie.}}{{ex:She called me.|/ʃi kɑːld mi/|Nws (poj niam) hu rau kuv.}}
<h3>Tsis thiab nug: did</h3>
<p>Thaum siv <b>didn't</b> los yog <b>Did</b>, verb rov qab ua lo lus qub.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdənt wɝːk ˈjestɚdeɪ/|Nag hmo kuv tsis ua hauj lwm.}}{{ex:Did you call me?|/dɪd ju kɑːl mi/|Koj puas hu rau kuv?}}
<div class="tip">Nco ntsoov: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓ / <b>Yesterday I work.</b> ✗ → <b>Yesterday I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Lo lus twg raug?",["was","were","did","are"],1,"They siv were."],["'Nag hmo kuv tsis ua hauj lwm.' — lus Askiv twg raug?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Tom qab didn't: lo lus qub (work)."],["Did you ___ the movie? Lo lus twg raug?",["watch","watched","watching","watches"],0,"Tom qab Did: lo lus qub."]],
practice:[
["mc","I ___ tired yesterday. Lo lus twg raug?","was","were","did","am","I siv was."],
["mc","'Peb saib movie.' (past tense) — lus Askiv twg raug?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Past tense siv -ed."],
["mc","'Nag hmo koj puas hu?' — lus Askiv twg raug?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Tom qab Did: lo lus qub."],
["mc","'Zoo kawg.' (past tense) — lus Askiv twg raug?","It was fun.","It were fun.","It did fun.","It funned.","It siv was."],
["mc","'Koj puas tsis khoom?' (past tense) — lus Askiv twg raug?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","Busy tsis yog verb: nug nrog be (were)."],
["or","Peb saib movie (a, past tense)","We watched a movie","watch movies","Ib yam movie: article a thiab movie (singular)."],
["or","Kuv ua si nrog kuv cov phooj ywg (past tense)","I played with my friends","friend play","Cov phooj ywg: plural friends."],
["or","Nag hmo kuv tsis ua hauj lwm","I didn't work yesterday","worked","Tom qab didn't: lo lus qub."],
["fi","We __ at home last night.","Nag hmo tsaus ntuj peb nyob tsev.","were","was|did|are","We siv were."],
["fi","I __ soccer yesterday.","Nag hmo kuv ua si soccer.","played","play|playing|was play","Past tense siv -ed."],
["fi","__ you work yesterday?","Nag hmo koj puas ua hauj lwm?","Did","Were|Do|Was","Nug past tense: Did."],
["ty","Kuv nkees (past tense)","I was tired","was · tired — I: was","were","I siv was."],
["ty","Kuv saib movie (a, past tense)","I watched a movie","watched · movie — siv article a","the","Ib yam movie: article a."],
["ty","Kuv hu rau kuv cov phooj ywg (past tense)","I called my friends","called · my · friend — siv plural","friend","Cov phooj ywg: plural friends."]]},
{ id:"irregular-past", title:"Past tense tsis muaj -ed: went, ate, saw", blurb:"Ntau lo lus koj siv txhua hnub tsis muaj -ed. Nco ntsoov 12 lo lus no ua ntej.", deck:"Sib tham", body:`
<p>Cov verb koj siv txhua hnub tsis muaj -ed hauv past tense. Tsis muaj txoj cai: nco ntsoov ob lo lus ib txhij (go, went).</p>
<div class="tbl"><table><tr><th>Tam sim no</th><th>Past tense</th><th>Tam sim no</th><th>Past tense</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Fresno.|/aɪ went tə ˈfreznoʊ/|Kuv tau mus Fresno.}}{{ex:We ate pizza.|/wi eɪt ˈpiːtsə/|Peb noj pizza.}}{{ex:I saw a movie.|/aɪ sɑː ə ˈmuːvi/|Kuv saib movie.}}{{ex:I met my friends.|/aɪ met maɪ frendz/|Kuv ntsib kuv cov phooj ywg.}}{{ex:I bought a book.|/aɪ bɑːt‿ə bʊk/|Kuv yuav ib phau ntawv.}}
<h3>Nug thiab tsis: lo lus qub</h3>
<p><b>Did</b> qhia tias yog past tense, thiaj li verb rov qab ua lo lus qub.</p>
{{ex:What did you do?|/wʌt dɪd ju duː/|Koj ua dab tsi?}}{{ex:Where did you go?|/wer dɪd ju goʊ/|Koj tau mus qhov twg?}}{{ex:I didn't go.|/aɪ ˈdɪdənt goʊ/|Kuv tsis tau mus.}}
<div class="tip">Nco ntsoov: <b>I goed.</b> ✗ → <b>I went.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Go: past tense yog dab tsi?",["goed","gone","went","going"],2,"Go hloov ua went."],["'Koj ua dab tsi?' (past tense) — lus Askiv twg raug?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Tom qab did: lo lus qub (do)."],["I didn't ___ breakfast. Lo lus twg raug?",["ate","eaten","eats","eat"],3,"Tom qab didn't: lo lus qub."]],
practice:[
["mc","Eat: past tense yog dab tsi?","ate","eated","eat","eaten","Eat hloov ua ate."],
["mc","'Koj tau mus qhov twg?' — lus Askiv twg raug?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Tom qab did: lo lus qub."],
["mc","'Kuv yuav ib phau ntawv.' (past tense) — lus Askiv twg raug?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Buy hloov ua bought. Ib phau: article a."],
["mc","See: past tense yog dab tsi?","saw","seed","seen","sawed","See hloov ua saw."],
["mc","'Kuv tsis tau mus.' — lus Askiv twg raug?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Tom qab didn't: lo lus qub."],
["or","Kuv pom movie (a, past tense)","I saw a movie","see movies","Ib yam movie: article a thiab movie (singular). See hloov ua saw."],
["or","Peb noj pizza (past tense)","We ate pizza","eated","Eat hloov ua ate."],
["or","Kuv ntsib kuv cov phooj ywg (past tense)","I met my friends","friend meet","Cov phooj ywg: plural friends."],
["fi","I __ to Thailand last year.","Tsaib no kuv mus Thaib teb.","went","go|goed|gone","Go hloov ua went."],
["fi","What did you __?","Koj noj dab tsi? (past tense)","eat","ate|eaten|eating","Tom qab did: lo lus qub."],
["fi","She __ a new phone.","Nws (poj niam) yuav ib lub xov tooj tshiab. (past tense)","bought","buyed|buy|buys","Buy hloov ua bought."],
["ty","Kuv mus Fresno (past tense)","I went to Fresno","went · to · Fresno — go hloov ua went","go","Go hloov ua went."],
["ty","Kuv yuav ib phau ntawv (past tense)","I bought a book","bought · book — siv article a","the","Ib phau ntawv: article a."],
["ty","Kuv ntsib kuv cov phooj ywg (past tense)","I met my friends|I saw my friends","met · my · friend — siv plural","friend","Cov phooj ywg: plural friends."]]},
{ id:"the", title:"Saib the dua: a ua ntej, the tom qab", blurb:"Thaum koj hais ua ntej: a. Thaum nej ob tug twb paub lawm: the.", deck:"Nug kev thiab caij tsheb", body:`
<p>Lus Hmoob tsis muaj article. Tej zaum classifier xwb (<b>tus dev</b>) yog <b>the dog</b>, thiab <b>ib tug dev</b> yog <b>a dog</b>. Lus Askiv yuav tsum muaj article txhua zaus. Qhov no koj xyaum thaum twg siv <b>the</b> thiab thaum twg tsis siv article.</p>
<h3>a ua ntej, the tom qab</h3>
<p>Tus neeg mloog tsis tau paub: <b>a</b>. Koj twb hais lawm, nws paub lawm: <b>the</b>.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ bɑːt‿ə ʃɝːt/ /ðə ʃɝːt‿ɪz bluː/|Kuv yuav ib lub tsho. Lub tsho xiav.}}
<h3>Nej paub tias yog lub twg: the</h3>
<p>Lub qhov rais hauv lub tsev no, lub hnub saum ntuj: koj paub tias yog lub twg, siv <b>the</b>.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Qhib lub qhov rais puas tau?}}{{ex:Where's the bus station?|/werz ðə bʌs ˈsteɪʃən/|Lub tsev station tsheb ntiav nyob qhov twg?}}{{ex:The sun is hot today.|/ðə sʌn‿ɪz hɑːt təˈdeɪ/|Hnub no tshav ntuj kub.}}
<h3>Tsis siv article</h3>
<p>Cov lus no txog chaw, tsheb thiab mus pw tsis siv article. Nco ntsoov lawv.</p>
{{ex:I go to work by bus.|/aɪ goʊ tə wɝːk baɪ bʌs/|Kuv caij tsheb ntiav mus ua hauj lwm.}}{{ex:I'm at home.|/aɪm‿ət hoʊm/|Kuv nyob tsev.}}{{ex:I go to bed at eleven.|/aɪ goʊ tə bed‿ət‿ɪˈlevən/|Kuv mus pw 11 teev.}}
<div class="tip">Nug koj tus kheej: tus neeg mloog puas paub tias yog qhov twg? Paub: <b>the</b>. Tsis paub: <b>a</b>.</div>`,
check:[["I have a cat. ___ cat is white. Lo lus twg raug?",["A","An","The","(tsis muaj)"],2,"Tus miv koj nyuam qhuav hais: the."],["I go to ___ work by bus. Lo lus twg raug?",["a","the","an","(tsis muaj)"],3,"Go to work tsis siv article."],["Thov qhib lub qhov rais hauv lub tsev no: lus Askiv twg raug?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Nej ob tug paub tias yog lub qhov rais twg: the."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. Lo lus twg raug?","The","A","An","Some","Lub tsho koj nyuam qhuav hais: the."],
["mc","'Lub tsev station nyob qhov twg?' — lus Askiv twg raug?","Where's the station?","Where's a station?","Where's station?","Where the station?","Lub tsev station ze qhov no: the."],
["mc","Lus Askiv twg raug?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","Go to work thiab by bus tsis siv article."],
["mc","'Tshav ntuj kub.' (the sun) — lus Askiv twg raug?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Muaj ib lub hnub xwb: the."],
["mc","'Kuv nyob tsev.' — lus Askiv twg raug?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","At home tsis siv article."],
["or","Qhib lub qhov rais puas tau?","Can you open the window","a windows","Nej ob tug paub tias yog lub twg: article the."],
["or","Kuv caij tsheb ntiav mus ua hauj lwm","I go to work by bus","the a","Go to work thiab by bus tsis siv article."],
["or","Tus dev loj (the)","The dog is big","A dogs","Tus dev peb twb hais lawm: article the."],
["fi","I saw a movie. __ movie was great.","Kuv saib movie. Movie ntawd zoo heev.","The","A|An|Some","Movie koj nyuam qhuav hais: the."],
["fi","Where's __ bathroom?","Chav dej nyob qhov twg?","the","a|an|some","Chav dej hauv lub tsev no: the."],
["fi","I have __ idea.","Kuv muaj ib txoj kev xav.","an","a|the|some","Ib yam xwb, thiab idea muaj vowel ua ntej: an."],
["ty","Kaw lub qhov rooj puas tau?","Can you close the door|Could you close the door","can you · close · door — siv article the","a","Nej ob tug paub tias yog lub qhov rooj twg: article the."],
["ty","Lub tsev station nyob qhov twg?","Where is the station|Where's the station","where · station — siv article the","a","Lub tsev station ze qhov no: article the."],
["ty","Kuv nyob tsev","I'm at home|I'm home","I'm · at · home — tsis siv article","the","Home tsis siv article."]]},
{ id:"adjectives", title:"Adjective thiab tshaj: bigger, more expensive, the best", blurb:"Adjective nyob ua ntej noun. Tshaj: -er los yog more. Zoo tshaj: the -est los yog the most.", deck:"Mus kav khw", body:`
<p>Lus Hmoob adjective (tej lus piav txog tej yam yus ua) nyob tom qab noun: <b>lub hnab loj</b>. Lus Askiv adjective nyob <b>ua ntej</b> noun: <b>a big bag</b>, los yog tom qab be: <b>This bag is big.</b></p>
{{ex:a big bag|/ə bɪg bæg/|ib lub hnab loj}}{{ex:This bag is big.|/ðɪs bæg‿ɪz bɪg/|Lub hnab no loj.}}{{ex:It's too small.|/ɪts tuː smɑːl/|Nws me heev, tsis zoo.}}
<h3>Tshaj: -er los yog more</h3>
<p>Lus Hmoob: <b>kim tshaj lub ntawd</b>. Lus Askiv: lo lus luv siv <b>-er</b>; lo lus ntev siv <b>more</b> ua ntej. Tshaj lub ntawd = <b>than</b> that one. Tsis txhob siv more thiab -er ib txhij.</p>
<div class="tbl"><table><tr><th>adjective</th><th>-er / more</th><th>the -est / the most</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ðɪs wʌn‿ɪz ˈtʃiːpɚ/|Lub no pheej yig dua.}}{{ex:It's more expensive than that one.|/ɪts mɔːr ɪkˈspensɪv ðən ðæt wʌn/|Nws kim tshaj lub ntawd.}}{{ex:Do you have a bigger size?|/duː ju hæv‿ə ˈbɪgɚ saɪz/|Koj puas muaj size loj dua?}}
<h3>Zoo tshaj: the -est</h3>
<p>Hauv lus Hmoob, tshaj tsis muaj dab tsi tom qab = the -est, the most. Lus Askiv siv <b>the</b>.</p>
{{ex:This is the best restaurant here.|/ðɪs‿ɪz ðə best ˈrestərɑːnt hɪr/|Qhov no, lub tsev restaurant no zoo tshaj.}}{{ex:Which is the cheapest?|/wɪtʃ‿ɪz ðə ˈtʃiːpɪst/|Lub twg pheej yig tshaj?}}
<div class="tip">Nco ntsoov: <b>dress blue</b> ✗ → <b>blue dress</b> ✓ / <b>more cheaper</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓. Tsis siv -er thiab more ib txhij.</div>`,
check:[["Big: lo lus tshaj yog dab tsi?",["more big","biger","bigger","most big"],2,"Lo lus luv: -er. Sau g ob zaug."],["This is ___ expensive than that. Lo lus twg raug?",["more","most","much","very"],0,"Lo lus ntev: more."],["Good: zoo tshaj (the …) yog dab tsi?",["the goodest","the most good","the better","the best"],3,"Good hloov ua better thiab the best."]],
practice:[
["mc","Cheap: lo lus tshaj yog dab tsi?","cheaper","more cheap","cheapper","most cheap","Lo lus luv: -er."],
["mc","'Lub no kim dua.' — lus Askiv twg raug?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Lo lus ntev: more."],
["mc","'Koj puas muaj size loj dua?' — lus Askiv twg raug?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Article + adjective + noun: adjective nyob ua ntej noun."],
["mc","Good: lo lus tshaj yog dab tsi?","better","gooder","more good","best","Good hloov ua better."],
["mc","'Lub tsev restaurant no zoo tshaj.' — lus Askiv twg raug?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Ua ntej best: the."],
["or","Koj puas muaj size loj dua?","Do you have a bigger size","the sizes","Koj nug ib qho size: article a."],
["or","Lub no pheej yig tshaj","This is the cheapest","a cheaper","Ua ntej cheapest: article the."],
["or","Lub no pheej yig tshaj lub ntawd","This is cheaper than that","more","Cheaper twb muaj -er: tsis siv more."],
["fi","It's __ small.","Nws me heev, tsis zoo.","too","much|more|most","Me heev thiab tsis zoo: too."],
["fi","This is cheaper __ that one.","Lub no pheej yig tshaj lub ntawd.","than","then|that|more","Tshaj lub ntawd: than."],
["fi","It's the __ expensive one.","Lub no kim tshaj.","most","more|much|very","Lo lus ntev, kim tshaj: the most."],
["ty","Koj puas muaj size me dua?","Do you have a smaller size","smaller · size — siv article a","the","Koj nug ib qho size: article a."],
["ty","Lub no zoo tshaj","This is the best|This one is the best","the · best — siv article the","a","Zoo tshaj: article the thiab best."],
["ty","Lub no pheej yig dua","This is cheaper|This one is cheaper","cheap — siv -er","more","Lo lus luv: -er."]]},
{ id:"going-to", title:"be going to: yam koj yuav ua", blurb:"Yam koj twb npaj lawm tias yuav ua: be going to + verb.", deck:"Sib tham", body:`
<p>Lus Hmoob <b>yuav</b> = will, going to thiab want. Lus Askiv siv <b>be + going to + verb</b> thaum koj twb npaj lawm.</p>
{{ex:I'm going to visit Fresno.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˈfreznoʊ/|Kuv yuav mus xyuas Fresno.}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə baɪ ə kɑːr/|Nws (poj niam) yuav mus yuav ib lub tsheb.}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə hæv ˈdɪnɚ/|Peb yuav noj hmo.}}
<h3>Tsis thiab nug</h3>
{{ex:I'm not going to go.|/aɪm nɑːt ˈgoʊɪŋ tə goʊ/|Kuv yuav tsis mus.}}{{ex:Are you going to come?|/ɑːr ju ˈgoʊɪŋ tə kʌm/|Koj puas yuav tuaj?}}{{ex:What are you going to do this weekend?|/wʌt‿ɑːr ju ˈgoʊɪŋ tə duː ðɪs ˈwiːkend/|Hnub Saturday thiab hnub Sunday no koj yuav ua dab tsi?}}
<h3>Koj pom tias yuav los nag: going to</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə reɪn/|Yuav los nag.}}
<h3>Lo lus sij hawm</h3>
<p>tomorrow (tag kis), tonight, this weekend, next week nyob qhov kawg.</p>
<div class="tip">Thaum hais lus, going to hais nkaus li <b>gonna</b>. Nco ntsoov be: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["'Tag kis kuv yuav mus ntsib kuv tus phooj ywg.' (use going to) — lus Askiv twg raug?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"Siv be + going to + verb."],["She ___ going to study. Lo lus twg raug?",["am","are","is","be"],2,"She siv is."],["'Hnub Saturday thiab hnub Sunday no koj yuav ua dab tsi?' — lus Askiv twg raug?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Nug: What + be + subject + going to."]],
practice:[
["mc","'Kuv yuav mus Fresno.' — lus Askiv twg raug?","I'm going to go to Fresno.","I going to go to Fresno.","I'm going go to Fresno.","I'm go to Fresno going.","Siv be + going to + verb."],
["mc","They ___ going to come. Lo lus twg raug?","are","is","am","be","They siv are."],
["mc","'Yuav los nag.' — lus Askiv twg raug?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Tom qab going to: verb tsis hloov."],
["mc","'Kuv yuav tsis mus.' — lus Askiv twg raug?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Not nyob tom qab be."],
["mc","'Koj puas yuav tuaj?' — lus Askiv twg raug?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Be nyob ua ntej subject."],
["or","Nws (poj niam) yuav mus yuav ib lub tsheb","She's going to buy a car","the cars","Ib lub tsheb: article a thiab car (singular)."],
["or","Kuv yuav mus ntsib kuv cov phooj ywg","I'm going to meet my friends","friend","Cov phooj ywg: plural friends."],
["or","Peb yuav noj hmo","We're going to have dinner","a","Dinner tsis siv article."],
["fi","I'm going __ study tonight.","Tsaus ntuj no kuv yuav kawm ntawv.","to","for|at|will","Siv going to + verb."],
["fi","__ you going to come?","Koj puas yuav tuaj?","Are","Do|Is|Will","You siv Are."],
["fi","It's going to __ tomorrow.","Tag kis yuav los nag.","rain","rains|raining|rained","Tom qab going to: verb tsis hloov."],
["ty","Kuv yuav saib movie (a, use going to)","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — siv article a","the","Ib yam movie: article a."],
["ty","Koj yuav ua dab tsi? (use going to)","What are you going to do","what · going to · do — siv be going to","will","Nug yam koj npaj lawm: be going to."],
["ty","Kuv yuav mus ntsib kuv cov phooj ywg (use going to)","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — siv plural","friend","Cov phooj ywg: plural friends."]]},
{ id:"joining", title:"and, but, or, so, because: thiab, tab sis, los yog, thiaj li, vim", blurb:"Lus Hmoob thiab, tab sis, vim, thiaj li = and, but, because, so. Tsis txhob siv so thiab because ib txhij.", deck:"Zoo siab thiab tu siab", body:`
<p>Lus Hmoob muaj <b>thiab</b> (and), <b>tab sis</b> (but), <b>los yog</b> (or), <b>thiaj li</b> (so) thiab <b>vim</b> (because). Lus Askiv siv tsib lo lus no nkaus li ntawd.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ laɪk ˈkɑːfi ən tiː/|Kuv nyiam kav fes thiab tshuaj yej.}}{{ex:I'm tired but happy.|/aɪm ˈtaɪɚd bʌt ˈhæpi/|Kuv nkees tab sis kuv zoo siab.}}{{ex:Coffee or tea?|/ˈkɑːfi ɔːr tiː/|Kav fes los yog tshuaj yej?}}
<h3>so: thiaj li</h3>
<p><b>so</b> nyob nruab nrab, nkaus li <b>thiaj li</b>: <b>Kuv nkees, kuv thiaj li mus tsev</b> = I was tired, <b>so</b> I went home.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪɚd soʊ aɪ went hoʊm/|Kuv nkees, kuv thiaj li mus tsev.}}
<h3>because: vim</h3>
<p><b>because</b> nkaus li <b>vim</b>: <b>Kuv mus tsev vim kuv nkees</b> = I went home <b>because</b> I was tired.</p>
{{ex:I went home because I was tired.|/aɪ went hoʊm bɪˈkɑːz‿aɪ wəz ˈtaɪɚd/|Kuv mus tsev vim kuv nkees.}}{{ex:I stayed home because it was raining.|/aɪ steɪd hoʊm bɪˈkɑːz‿ɪt wəz ˈreɪnɪŋ/|Kuv nyob tsev vim los nag.}}
<h3>too: kuj</h3>
{{ex:I like it too.|/aɪ laɪk‿ɪt tuː/|Kuv kuj nyiam.}}
<div class="tip">Lus Askiv: tsis txhob siv so thiab because ib txhij. <b>Because I was tired, so I went home.</b> ✗. Xaiv ib lo lus xwb.</div>`,
check:[["I was sick, ___ I stayed home. Lo lus twg raug?",["because","but","so","or"],2,"Kuv mob, kuv thiaj li nyob tsev: so."],["I stayed home ___ I was sick. Lo lus twg raug?",["because","so","but","and"],0,"Kuv nyob tsev vim kuv mob: because."],["'Koj xav haus kav fes los yog tshuaj yej?' — lus Askiv twg raug?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Xaiv ib yam: or."]],
practice:[
["mc","I like dogs ___ I don't like cats. Lo lus twg raug?","but","so","or","because","Nyiam thiab tsis nyiam: but (tab sis)."],
["mc","I was hungry, ___ I ate a sandwich. Lo lus twg raug?","so","because","but","or","Kuv tshaib plab, kuv thiaj li noj: so."],
["mc","I ate a sandwich ___ I was hungry. Lo lus twg raug?","because","so","but","or","Kuv noj vim kuv tshaib plab: because."],
["mc","'Kav fes los yog tshuaj yej?' — lus Askiv twg raug?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Los yog = or."],
["mc","'Kuv nkees tab sis kuv zoo siab.' — lus Askiv twg raug?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","Tab sis yog but."],
["or","Kuv nyiam miv thiab dev","I like cats and dogs","cat dog","Txhua tus miv thiab dev: plural cats, dogs."],
["or","Thov ib khob kav fes thiab ib lub sandwich","A coffee and a sandwich please","the or","Ib khob, ib lub: article a rau txhua yam."],
["or","Kuv tshaib plab, kuv thiaj li noj (past tense)","I was hungry so I ate","because","Kuv tshaib plab, kuv thiaj li noj: so."],
["fi","I'm tired __ happy.","Kuv nkees tab sis kuv zoo siab.","but","so|because|or","Tab sis yog but."],
["fi","I stayed home __ it was raining.","Kuv nyob tsev vim los nag.","because","so|but|or","Vim yog because."],
["fi","Coffee __ tea?","Kav fes los yog tshuaj yej?","or","so|but|because","Los yog = or."],
["ty","Kuv nyiam kav fes thiab tshuaj yej","I like coffee and tea","like · coffee · and · tea — tsis siv article","a","Kav fes, tshuaj yej: tsis siv article."],
["ty","Kuv nkees tab sis kuv zoo siab","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — tab sis yog but","so","Tab sis yog but."],
["ty","Kuv nyiam dev thiab miv","I like dogs and cats|I like cats and dogs","dog · and · cat — siv plural","dog","Txhua tus dev thiab miv: plural dogs, cats."]]},
];

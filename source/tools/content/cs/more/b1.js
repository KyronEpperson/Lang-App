/* cs-en stage B1: new lessons. English side shared with ko-en (parity.js) except the cs-only lesson perfect-3
   (deviations extraLessons; placed after perfect-2 by profile.json lessonOrder). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Předpřítomný čas 2: „for“ a „since“, od minulosti dodnes", blurb:"Co začalo dřív a trvá dodnes. Česky přítomný čas, anglicky předpřítomný.", deck:"Představování", body:`
<p>Druhé použití předpřítomného času: <b>něco začalo v minulosti a trvá dodnes</b>. Česky se to říká přítomným časem: „Bydlím tady pět let.“ Anglicky tu přítomný čas být nemůže. Je tu <b>have + příčestí minulé</b>.</p>
{{ex:I've lived in Prague for five years.|/aɪv ˈlɪvd ɪn ˈprɑːg fər ˈfaɪv ˈjɪrz/|Bydlím v Praze pět let}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Pracuju tady od roku 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Znám ji dlouho}}
<h3>for, nebo since?</h3>
<div class="tbl"><table><tr><th>for + jak dlouho</th><th>since + odkdy</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>České „od“ je tady <b>since</b>, ne <b>from</b>: „od pondělí“ → <b>since Monday</b>.</p>
<h3>Činnost, která pořád probíhá: have been + -ing</h3>
{{ex:I've been teaching her for three years.|/aɪv bɪn ˈtiːtʃɪŋ hər fər ˈθriː ˈjɪrz/|Učím ji tři roky}}
<p>U činností je běžný průběhový tvar <b>have been + -ing</b>. U stavových sloves (<b>know, be, have</b>) zůstává prostý tvar: <b>I've known her</b>, ne <b>I've been knowing her</b>.</p>
<h3>How long …?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Jak dlouho jsi tady?}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|Jak dlouho se učíš anglicky?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Právě jsem skončil / skončila}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Už jsem to viděl / viděla}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Už jsi jedl / jedla?}}
<p>České „už“ má dvě anglické podoby: v kladné větě <b>already</b>, v otázce většinou <b>yet</b> na konci. A ve větě „Už tady bydlím pět let“ se „už“ nepřekládá vůbec.</p>
<div class="tip">Nejčastější chyba: přítomný čas. <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Co patří na vynechané místo?",["since","for","during","from"],1,"Dobu trvání (jak dlouho) uvádí „for“."],["I've worked here ___ 2020. Co patří na vynechané místo?",["for","in","since","at"],2,"Počátek (odkdy) uvádí „since“."],["Jak se anglicky řekne „Jak dlouho jsi tady?“",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"„How long have you“ + příčestí minulé; přítomný čas tu být nemůže."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","Dobu trvání (jak dlouho) uvádí „for“."],
["mc","She's lived here ___ 2019.","since","for","in","at","Počátek (odkdy) uvádí „since“."],
["mc","Jak se anglicky řekne „Jak dlouho jsi tady?“","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Trvá to dodnes, proto „How long have you“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Právě jsem skončil / skončila“?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","„Have“ + „just“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Už jsi jedl / jedla?“","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","„Už“ v otázce je „yet“ na konci věty."],
["or","Bydlím tady pět let","I've lived here for five years","year since","Trvá to dodnes, proto předpřítomný čas; po „five“ je množné číslo „years“."],
["or","Ten film už jsem viděl / viděla","I've already seen the movie","a saw","Film, o kterém už byla řeč: určitý člen „the“."],
["or","Jak dlouho čekáš?","How long have you waited","did","Trvá to dodnes: „How long have you“ + příčestí minulé."],
["fi","I've worked here __ two years.","Pracuju tady dva roky","for","since|from|during","Dobu trvání (jak dlouho) uvádí „for“."],
["fi","I've been here __ Monday.","Jsem tady od pondělí","since","for|at|during","Počátek (odkdy) uvádí „since“."],
["fi","Have you finished __?","Už máš hotovo?","yet|already","ever|never|since","„Už“ v otázce je „yet“."],
["ty","Bydlím tady tři roky","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year – množné číslo","year","Trvá to dodnes, proto předpřítomný čas; po „three“ je množné číslo „years“."],
["ty","Jak dlouho jsi tady?","How long have you been here","how long · have you · been here – trvá to dodnes","are","Trvá to dodnes: „How long have you“ + příčestí minulé."],
["ty","Tu knihu už jsem četl / četla","I've already read the book|I've read the book already|I already read the book","already · read · book – určitý člen „the“","a","Kniha, o které už byla řeč: určitý člen „the“."]]},
{ id:"perfect-3", title:"Předpřítomný, nebo minulý čas? Jeden český čas, dva anglické", blurb:"Česky stačí jeden minulý čas. Anglicky rozhoduje, jestli doba sahá až do dneška, nebo už skončila.", deck:"Představování", body:`
<p>Čeština má jeden minulý čas. Angličtina má na stejném místě dva: minulý čas prostý (Past Simple) a předpřítomný čas (Present Perfect). Chybuje se oběma směry: předpřítomný čas chybí tam, kde být má, a objevuje se tam, kde být nemá. Stačí tři rozhodnutí.</p>
<h3>1. Český přítomný čas + doba trvání → předpřítomný čas</h3>
<p>Když něco začalo dřív a trvá dodnes, čeština má přítomný čas. Angličtina ne.</p>
{{ex:I've lived here for five years.|/aɪv ˈlɪvd ˈhɪr fər ˈfaɪv ˈjɪrz/|Bydlím tady pět let}}{{ex:I've been teaching her for three years.|/aɪv bɪn ˈtiːtʃɪŋ hər fər ˈθriː ˈjɪrz/|Učím ji tři roky}}{{ex:It's been open for two years.|/ɪts bɪn ˈoʊpən fər ˈtuː ˈjɪrz/|Je to otevřené dva roky}}
<p><b>I live here five years.</b> ✗ <b>It's open for two years.</b> ✗</p>
<h3>2. Český minulý čas + výsledek platí teď → předpřítomný čas</h3>
<p>Stalo se to v minulosti, neříkáš kdy, a důležité je, jak to vypadá teď.</p>
{{ex:I've lost my keys.|/aɪv ˈlɔːst maɪ ˈkiːz/|Ztratil / ztratila jsem klíče (a teď je nemám)}}{{ex:My bike has been stolen.|/maɪ ˈbaɪk həz bɪn ˈstoʊlən/|Ukradli mi kolo (a pořád je pryč)}}{{ex:I've changed a lot in the past year.|/aɪv ˈtʃeɪndʒd ə ˈlɑːt ɪn ðə ˈpæst ˈjɪr/|Za poslední rok jsem se hodně změnil / změnila}}
<p>Doba „za poslední rok“ sahá až do dneška, proto je i tady předpřítomný čas.</p>
<h3>3. Český minulý čas + dokončená doba → minulý čas prostý</h3>
<p>Jakmile řekneš, kdy se to stalo (<b>yesterday, last summer, in 2019, on my birthday</b>), nebo vyprávíš příběh z minulosti, je to minulý čas prostý. Platí to i se slovy, která máš ze školy spojená s předpřítomným časem.</p>
{{ex:I saw it on my birthday.|/aɪ ˈsɔː ɪt ɑːn maɪ ˈbɜːrθdeɪ/|Viděl / viděla jsem to o narozeninách}}{{ex:I visited Lisbon last summer.|/aɪ ˈvɪzɪtɪd ˈlɪzbən ˈlæst ˈsʌmər/|Loni v létě jsem navštívil / navštívila Lisabon}}{{ex:We met in 2019.|/wi ˈmet ɪn ˈtwenti ˌnaɪnˈtiːn/|Poznali jsme se v roce 2019}}
<p><b>I've seen it on my birthday.</b> ✗ <b>I've visited Lisbon last summer.</b> ✗ <b>We've met in 2019.</b> ✗</p>
<p>Slova <b>ever, just, for</b> ani slovesa <b>see, visit, meet</b> čas neurčují. Rozhoduje jen to, jestli doba, o které mluvíš, sahá až do dneška, nebo už skončila.</p>
<h3>Stejné sloveso, dva časy</h3>
<div class="tbl"><table><tr><th>Česky</th><th>Doba</th><th>Anglicky</th></tr><tr><td>Bydlíme tady pět let.</td><td>trvá dodnes</td><td class="k">We've lived here for five years.</td></tr><tr><td>Bydleli jsme tam pět let.</td><td>skončila</td><td class="k">We lived there for five years.</td></tr><tr><td>Ztratila klíče (nemá je).</td><td>výsledek platí teď</td><td class="k">She has lost her keys.</td></tr><tr><td>Včera ztratila klíče.</td><td>včera</td><td class="k">She lost her keys yesterday.</td></tr></table></div>
{{ex:We lived there for five years.|/wi ˈlɪvd ˈðer fər ˈfaɪv ˈjɪrz/|Bydleli jsme tam pět let (už tam nebydlíme)}}
<h3>Americká angličtina</h3>
<p>V americké angličtině je se slovy <b>just, already, yet</b> běžný i minulý čas prostý: <b>I just ate.</b> = <b>I've just eaten.</b> Obojí je správně. S dobou, která trvá dodnes (<b>for five years</b>, <b>since 2020</b>), ale i Američané používají předpřítomný čas.</p>
<div class="tip">Zeptej se: <b>sahá ta doba až do dneška?</b> Ano → předpřítomný čas. Už skončila, nebo říkáš kdy → minulý čas prostý.</div>`,
check:[["Jak se anglicky řekne „Bydlím tady pět let“ (a pořád tu bydlím)?",["I live here five years.","I'm living here for five years.","I've lived here for five years.","I lived here since five years."],2,"Trvá to dodnes, proto předpřítomný čas, i když čeština má přítomný."],["Která věta je správně?",["I saw that movie on my birthday.","I've seen that movie on my birthday.","I have saw that movie on my birthday.","I've see that movie on my birthday."],0,"„On my birthday“ je dokončená doba, proto minulý čas prostý."],["Telefon je pryč a pořád ho nemáš. Co řekneš?",["I lose my phone.","I've lost my phone.","I was losing my phone.","I've lost my phone yesterday."],1,"Výsledek platí teď a neříkáš kdy, proto předpřítomný čas."]],
practice:[
["mc","I ___ here since 2020.","have worked","work","am working","was working","Trvá to dodnes („since 2020“), proto předpřítomný čas."],
["mc","We ___ to Italy last summer.","went","have gone","have been","go","Je tu „last summer“, tedy dokončená doba, proto minulý čas prostý."],
["mc","Jak se anglicky řekne „Znám ji deset let“?","I've known her for ten years.","I know her ten years.","I'm knowing her for ten years.","I knew her since ten years.","Česky přítomný čas, anglicky předpřítomný: trvá to dodnes."],
["mc","Která věta je správně?","I met him in 2019.","I've met him in 2019.","I have meet him in 2019.","I've been meeting him in 2019.","Rok 2019 je dokončená doba, proto minulý čas prostý. Sloveso „meet“ na tom nic nemění."],
["mc","Jak se anglicky řekne „Viděli jsme to včera“?","We saw it yesterday.","We've seen it yesterday.","We have saw it yesterday.","We see it yesterday.","Je tu „yesterday“, proto minulý čas prostý, ne předpřítomný."],
["or","Bydlíme tady pět let","We've lived here for five years","year live","Trvá to dodnes, proto předpřítomný čas; po „five“ je množné číslo „years“."],
["or","Včera jsem viděl / viděla skvělý film","I saw a great movie yesterday","the seen","Je tu „yesterday“, proto minulý čas prostý; první zmínka o filmu má neurčitý člen „a“."],
["or","Ztratil / ztratila jsem klíče (a pořád je nemám)","I've lost my keys","key lose","Výsledek platí teď, proto předpřítomný čas; klíčů je víc, tedy množné číslo „keys“."],
["fi","I've known her __ 2015.","Znám ji od roku 2015","since","for|from|in","Počátek (odkdy) uvádí „since“. Trvá to dodnes, proto je ve větě předpřítomný čas."],
["fi","I __ my keys yesterday.","Včera jsem ztratil / ztratila klíče","lost","have lost|lose|was lost","Je tu „yesterday“, proto minulý čas prostý."],
["fi","How long __ you known her?","Jak dlouho ji znáš?","have","do|are|did","Trvá to dodnes: „How long have you“ + příčestí minulé."],
["ty","Pracuju tady dva roky","I've worked here for two years|I've been working here for two years","I've worked · here · for · two · year – množné číslo","year","Trvá to dodnes, proto předpřítomný čas; po „two“ je množné číslo „years“."],
["ty","Loni v létě jsme navštívili dvě muzea","We visited two museums last summer|Last summer we visited two museums|We went to two museums last summer|Last summer we went to two museums","visited · two · museum · last summer – množné číslo","museum have","„Last summer“ je dokončená doba, proto minulý čas prostý; po „two“ je množné číslo „museums“."],
["ty","Jsem učitel / učitelka od roku 2020","I've been a teacher since 2020","I've been · teacher · since 2020 – člen před povoláním","the am","Trvá to dodnes, proto předpřítomný čas; před povoláním je neurčitý člen „a“."],
["ty","Právě jsem jedl / jedla (s „just“)","I just ate|I've just eaten","just · eat – minulý tvar nebo příčestí","eating","V americké angličtině je se slovem „just“ správně minulý čas prostý i předpřítomný čas."]]},
{ id:"narrative", title:"Vyprávění: minulý čas prostý, průběhový a předminulý", blurb:"Pozadí v průběhovém čase, události v prostém. Co se stalo ještě dřív, říká „had“.", deck:"Filmy, seriály a slang", body:`
<p>Čeština odvypráví celý příběh jedním minulým časem a pořadí dějů nechá na slovech jako „už“ a „předtím“. Angličtina při vyprávění kombinuje tři časy a každý má svou úlohu.</p>
<div class="tbl"><table><tr><th>Čas</th><th>Úloha</th><th>Příklad</th></tr><tr><td>minulý čas průběhový</td><td>pozadí, co právě probíhalo</td><td class="k">I was walking home.</td></tr><tr><td>minulý čas prostý</td><td>události</td><td class="k">I saw an old friend.</td></tr><tr><td>předminulý čas</td><td>co se stalo ještě předtím</td><td class="k">He had moved to Brno.</td></tr></table></div>
<h3>Pozadí + událost</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Šla jsem domů a vtom jsem uviděla starého kamaráda}}
<h3>Předminulý čas: had + příčestí minulé</h3>
<p>Předminulý čas (Past Perfect) říká, co se stalo <b>ještě dřív</b> než jiná minulá událost. Čeština tu má obyčejný minulý čas a slovo „už“. Angličtina potřebuje <b>had</b>.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Když jsem přišel, film už běžel}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Nikdy předtím jsem sníh neviděl / neviděla}}
<p>Ve vyprávění v minulosti se <b>have</b> mění na <b>had</b>: <b>I was excited because I've never been to Ireland before.</b> ✗ → <b>I was excited because I had never been to Ireland before.</b> ✓</p>
<h3>Slova, která řadí děj</h3>
<p>Příběh spojíš slovy <b>first</b> (nejdřív), <b>then</b> (potom), <b>after that</b> (pak) a <b>finally</b> (nakonec).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Nejdřív jsme se navečeřeli. Potom jsme se dívali na film}}
<div class="tip"><b>then</b> (potom) a <b>than</b> (než) znějí podobně, ale jsou to dvě různá slova. Do vyprávění patří <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Co patří na vynechané místo?",["has","was","had","did"],2,"Co se stalo ještě předtím, má „had“ + příčestí minulé."],["I ___ walking home when it started to rain. Co patří na vynechané místo?",["was","had","did","have"],0,"Pozadí, tedy děj, který právě probíhal, je v minulém čase průběhovém."],["Která věta říká, co se stalo ještě předtím?",["I was eating.","I ate.","I eat.","I had eaten."],3,"„Had“ + příčestí minulé je předminulý čas."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","Co se stalo ještě předtím, má „had“ + příčestí minulé."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Děj, který právě probíhal, je v minulém čase průběhovém."],
["mc","Jak se anglicky řekne „Když jsem přišel / přišla, vlak už byl pryč“?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Co se stalo ještě předtím, má „had“ + příčestí minulé."],
["mc","Jak se ve vyprávění anglicky řekne „potom“?","then","than","that","them","„Then“ je „potom“, „than“ je „než“."],
["mc","Jak se anglicky řekne „Nikdy předtím jsem sníh neviděl / neviděla“?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","„Had“ + „never“ + příčestí minulé; stačí jeden zápor."],
["or","Vlak už předtím odjel","The train had already left","a has","Vlak, kterým jsme chtěli jet, je určitý: člen „the“."],
["or","Potkal / potkala jsem starého kamaráda","I met an old friend","a friends","„Old“ začíná samohláskou, proto neurčitý člen „an“."],
["or","Šel / šla jsem zrovna domů","I was walking home","had","Pozadí je v minulém čase průběhovém."],
["fi","I was sleeping __ you called.","Když jsi volal, zrovna jsem spala","when","than|so|had","„Když“ je tady „when“."],
["fi","The bus had already __.","Autobus už byl pryč","left|gone","leave|leaving|leaves","Po „had“ následuje příčestí minulé."],
["fi","First we ate. __ we watched a movie.","Nejdřív jsme se najedli. Potom jsme se dívali na film","Then|After that|Next","Than|Because|When","„Potom“ je „then“."],
["ty","Film už předtím začal (než jsme přišli)","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started – určitý člen „the“","a","Film, na který jsme šli, je určitý: člen „the“."],
["ty","Potkal / potkala jsem starého kamaráda","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend – člen „an“","a","„Old“ začíná samohláskou, proto neurčitý člen „an“."],
["ty","Šel / šla jsem zrovna pěšky domů","I was walking home","was · walking · home – průběhový čas","had","Pozadí je v minulém čase průběhovém."]]},
{ id:"conditionals", title:"Druhý a třetí kondicionál: kdyby…", blurb:"Co by bylo, kdyby. „Would“ patří jen do jedné půlky věty.", deck:"Pocity a reakce", body:`
<p>Tyto věty mluví o tom, co není skutečné. Česky je „by“ v obou půlkách: „Kdy<i>by</i> měla čas, cestovala <i>by</i>.“ Anglicky je <b>would</b> jen v jedné. V půlce s <b>if</b> není nikdy.</p>
<h3>Druhý kondicionál: opak toho, co platí teď</h3>
<p><b>If + minulý čas, would + základní tvar</b>. Tvar je minulý, ale mluvíš o přítomnosti.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Kdybych měla čas, cestovala bych}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Na tvém místě bych to vzal / vzala}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Co bys udělal / udělala ty?}}
<p><b>If I would have time, I would travel.</b> ✗ → <b>If I had time, I would travel.</b> ✓</p>
<h3>Třetí kondicionál: opak toho, co se stalo</h3>
<p><b>If + had + příčestí minulé, would have + příčestí minulé</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Kdybych se učil, zkoušku bych udělal}}
<h3>Lítost: should have a I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Měl / měla jsem zavolat}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Kéž bych měl / měla víc času}}
<div class="tbl"><table><tr><th>Kondicionál</th><th>Půlka s if</th><th>Druhá půlka</th></tr><tr><td>první (může se stát)</td><td>přítomný čas</td><td class="k">will</td></tr><tr><td>druhý (opak přítomnosti)</td><td>minulý čas</td><td class="k">would</td></tr><tr><td>třetí (opak minulosti)</td><td>had + příčestí minulé</td><td class="k">would have + příčestí minulé</td></tr></table></div>
<div class="tip"><b>If I were you</b> je ustálené spojení: i po <b>I</b> je tu <b>were</b>. V běžné řeči uslyšíš i <b>was</b>.</div>`,
check:[["If I ___ rich, I would travel. Co patří na vynechané místo?",["am","were","will be","would be"],1,"Opak přítomnosti: po „if“ je minulý tvar „were“, nikdy „would“."],["If I had studied, I ___ passed. Co patří na vynechané místo?",["would","will have","would have","had"],2,"Opak minulosti: „would have“ + příčestí minulé."],["Jak se anglicky řekne „Měl / měla jsem zavolat“?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Lítost vyjádříš „should have“ + příčestí minulé."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Opak přítomnosti: po „if“ je minulý čas, ne „would“."],
["mc","Jak se anglicky řekne „Na tvém místě bych to koupil / koupila“?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","„If I were you, I'd …“ je ustálené spojení."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Opak minulosti: „would have“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Měl / měla jsem zavolat“?","I should have called.","I should called.","I should had call.","I must called.","Lítost vyjádříš „should have“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Co bys udělal / udělala ty?“","What would you do?","What will you did?","What would you did?","What you would do?","„Would“ + základní tvar; v otázce stojí „would“ před podmětem."],
["or","Kdybych měl čas, cestoval bych","If I had time I'd travel","have will","Opak přítomnosti: minulý tvar „had“ a „would“."],
["or","Vzal / vzala bych si taxík","I'd take a taxi","the taxis","Jakýkoli taxík, ne jeden určitý: neurčitý člen „a“."],
["or","Měl / měla jsem si koupit jízdenku","I should have bought a ticket","the buy","Jedna jízdenka: neurčitý člen „a“."],
["fi","If I __ you, I'd go.","Na tvém místě bych šel / šla","were|was","am|be|would be","„If I were you“ je ustálené spojení."],
["fi","I would __ helped.","Tehdy bych pomohl / pomohla","have","had|has|having","„Would have“ + příčestí minulé."],
["fi","I wish I __ more time.","Kéž bych měl / měla víc času","had","have|would have|will have","Po „I wish“ je minulý tvar."],
["ty","Na tvém místě bych šel / šla","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go – ustálené spojení","am","Ustálené spojení: „If I were you, I'd …“."],
["ty","Kéž bych měl / měla auto (s „I wish“)","I wish I had a car","I wish · had · car – neurčitý člen „a“","the","Jakékoli auto, ne jedno určité: neurčitý člen „a“."],
["ty","Měl / měla jsem si vzít taxík","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi – neurčitý člen „a“","the","Jakýkoli taxík, ne jeden určitý: neurčitý člen „a“."]]},
{ id:"passive", title:"Trpný rod: „be“ + příčestí minulé", blurb:"Když je důležitější, co se stalo, než kdo to udělal. Česky často „se“ nebo „oni“.", deck:"Práce a e-maily", body:`
<p>Trpný rod (passive) se tvoří jako <b>be + příčestí minulé</b>. Hodí se, když nevíš, kdo to udělal, nebo to není důležité. Čeština v takových větách raději použije „se“ nebo neurčité „oni“: „Tady <i>se mluví</i> anglicky“, „<i>Ukradli</i> mi telefon“. Angličtina sáhne po trpném rodu.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Ukradli mi telefon}}{{ex:This was made in the Czech Republic.|/ˈðɪs wəz ˈmeɪd ɪn ðə ˈtʃek rɪˈpʌblɪk/|Tohle bylo vyrobeno v České republice}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Schůzka byla zrušena}}
<h3>Přítomný čas: co se děje běžně</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Tady se mluví anglicky}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Snídaně se podává v sedm}}
<h3>Narodil jsem se</h3>
<p>České „narodil jsem se“ je anglicky trpný rod v minulém čase: <b>I was born</b>. Ne <b>I born</b> a ne <b>I am born</b>.</p>
{{ex:I was born in Prague.|/aɪ wəz ˈbɔːrn ɪn ˈprɑːg/|Narodil / narodila jsem se v Praze}}
<h3>Kdo to udělal: by</h3>
{{ex:It was written by Agatha Christie.|/ɪt wəz ˈrɪtn baɪ ˈægəθə ˈkrɪsti/|Napsala to Agatha Christie}}
<p>Autora uvádí <b>by</b>, ne <b>from</b>: „kniha od Agathy Christie“ → <b>a book by Agatha Christie</b>.</p>
<h3>Výsledek, který platí teď: has been</h3>
<p>Když jde o výsledek, který trvá, spojí se trpný rod s předpřítomným časem: <b>has been + příčestí minulé</b>.</p>
{{ex:My bike has been stolen.|/maɪ ˈbaɪk həz bɪn ˈstoʊlən/|Ukradli mi kolo (a pořád je pryč)}}
<h3>Činný a trpný rod</h3>
<div class="tbl"><table><tr><th>Činný rod</th><th>Trpný rod</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">Nejčastější chyba: chybí sloveso <b>be</b>. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Co patří na vynechané místo?",["is","was","did","has"],1,"Stalo se to včera, proto „was“ + příčestí minulé."],["This phone ___ made in Korea. Co patří na vynechané místo?",["was","did","has","does"],0,"Trpný rod je „be“ + příčestí minulé."],["Jak se anglicky řekne „Schůzka byla zrušena“?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"„Be“ + příčestí minulé „canceled“."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Trpný rod je „be“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Tohle bylo vyrobeno v Koreji“?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","„Be“ + příčestí minulé „made“."],
["mc","Jak se anglicky řekne „Tady se mluví anglicky“?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","České „se“ je tady trpný rod: „is“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Schůzka byla zrušena“?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Schůzka se nezruší sama, proto „was“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Snídaně se podává v sedm“?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Před názvy denních jídel člen není; trpný rod je „is“ + příčestí minulé."],
["or","Ukradli mi tašku","My bag was stolen","stole","Po „be“ následuje příčestí minulé „stolen“."],
["or","Schůzka byla zrušena","The meeting was canceled","A meetings","Schůzka, o které už byla řeč: určitý člen „the“."],
["or","Okno bylo rozbité","The window was broken","a windows","Jde o toto okno tady: určitý člen „the“."],
["fi","This was __ in Korea.","Tohle bylo vyrobeno v Koreji","made","make|making|makes","Po „be“ následuje příčestí minulé."],
["fi","The room __ cleaned every day.","Pokoj se uklízí každý den","is|gets","does|has|did","Co se děje běžně: „is“ + příčestí minulé."],
["fi","It was written __ Han Kang.","Napsala to Han Kang","by","from|of|with","Autora uvádí „by“, ne „from“."],
["ty","Ukradli mi telefon (trpný rod)","My phone was stolen|My phone got stolen","my phone · was · stolen – trpný rod","stole","„Be“ + příčestí minulé „stolen“."],
["ty","Ta schůzka byla zrušena","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled – určitý člen „the“","a","Schůzka, o které už byla řeč: určitý člen „the“."],
["ty","Dveře byly zamčené (jedny dveře)","The door was locked","the door · was · locked – určitý člen „the“","a","České „dveře“ jsou anglicky „door“ v jednotném čísle, proto „was“; tyto dveře tady mají určitý člen „the“."]]},
{ id:"reported", title:"Nepřímá řeč: co kdo řekl", blurb:"„She said she was tired.“ Čas se posouvá do minulosti a po „tell“ musí být osoba.", deck:"Telefon a chatové zkratky", body:`
<p>Nepřímou řečí (reported speech) předáváš, co řekl někdo jiný. Čeština nechává původní čas: „Řekla, že <i>je</i> unavená.“ Angličtina po <b>said</b> posouvá čas o krok do minulosti: <b>She said she was tired.</b> Říká se tomu souslednost časů.</p>
<div class="tbl"><table><tr><th>Přímá řeč</th><th>Nepřímá řeč</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Řekla, že je unavená}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Řekl, že přijde}}
<p>Čárka se před <b>that</b> nepíše a samo <b>that</b> se často vynechává: „Řekl, že přijde“ → <b>He said (that) he would come.</b></p>
<h3>say, nebo tell?</h3>
<p>České „říct“ má dvě podoby. Po <b>tell</b> musí být osoba, které to říkáš. Po <b>say</b> hned osoba být nemůže. <b>I told I would be back.</b> ✗ → <b>I said I would be back.</b> / <b>I told her I would be back.</b> ✓</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Řekl mi, že má moc práce}}
<h3>Otázky v nepřímé řeči</h3>
<p>Otázku ano/ne uvádí <b>if</b>. Otázka s tázacím slovem si tázací slovo nechá. Za ním je ale <b>slovosled jako v oznamovací větě</b> (podmět + sloveso) a pomocné <b>do / did</b> mizí.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Zeptala se, jestli jsem v pořádku}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Zeptal se, kde bydlím}}
<p>Stejně tak: <b>I don't know what is his job.</b> ✗ → <b>I don't know what his job is.</b> ✓</p>
<div class="tip">Nejčastější chyby: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ a <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Co patří na vynechané místo?",["is being","was","be","will"],1,"V nepřímé řeči se čas posouvá do minulosti, i když čeština má přítomný."],["He ___ me he would come. Co patří na vynechané místo?",["said","say","told","tell to"],2,"Je tu osoba („me“), proto „told“."],["Jak se anglicky řekne „Zeptal se, kde bydlím“?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"V nepřímé otázce je slovosled jako v oznamovací větě."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","V nepřímé řeči se čas posouvá do minulosti."],
["mc","He ___ me he was late.","told","said","say","tells to","Je tu osoba, proto „told“."],
["mc","Jak se anglicky řekne „Řekl, že přijde“?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","„Will“ se v nepřímé řeči mění na „would“."],
["mc","Jak se anglicky řekne „Zeptala se, jestli jsem v pořádku“?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Otázku ano/ne uvádí „if“."],
["mc","Jak se anglicky řekne „Zeptal se, kde bydlím“?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","V nepřímé otázce je slovosled jako v oznamovací větě."],
["or","Řekla, že je unavená","She said she was tired","told","Není tu osoba, které to říká, proto „said“."],
["or","Řekl, že si koupil auto","He said he bought a car","the cars","První zmínka o jednom autě: neurčitý člen „a“."],
["or","Řekla, že se jí ta kniha líbí","She said she liked the book","a books","Kniha, o které už byla řeč: určitý člen „the“."],
["fi","She __ she was tired.","Řekla, že je unavená","said","told|asked|say","Není tu osoba, které to říká, proto „said“."],
["fi","He told __ he was busy.","Řekl mi, že má moc práce","me","I|my|to","Po „told“ následuje osoba."],
["fi","She asked __ I was okay.","Zeptala se, jestli jsem v pořádku","if|whether","that|what|did","Otázku ano/ne uvádí „if“."],
["ty","Řekl, že má moc práce","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy – posun času","is","V nepřímé řeči se čas posouvá do minulosti."],
["ty","Řekla, že má auto","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car – neurčitý člen „a“","the","První zmínka o jednom autě: neurčitý člen „a“."],
["ty","Řekl, že ten film viděl","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie – určitý člen „the“","a","Film, o kterém už byla řeč: určitý člen „the“."]]},
];

/* cs-en stage A2: new lessons. English side shared with ko-en (parity.js); shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Minulý čas průběhový: „was“ / „were“ + -ing", blurb:"Co právě probíhalo v určité chvíli v minulosti. Pozadí pro vyprávění.", deck:"Pocity a reakce", body:`
<p>Minulý čas průběhový (Past Continuous) říká, co <b>právě probíhalo v určité chvíli v minulosti</b>. Vezmeš přítomný čas průběhový a sloveso <b>be</b> dáš do minulého času: <b>was / were</b> + tvar s -ing.</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Zrovna jsem spal / spala}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|Dívali jsme se na televizi}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Pršelo}}
<h3>Otázka</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|Co jsi zrovna dělal / dělala?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Pracoval / pracovala jsi v devět?}}
<h3>S when: něco probíhalo a do toho se něco stalo</h3>
<p>Děj, který trval delší dobu, je v <b>minulém čase průběhovém</b>. Krátká událost, která do něj vstoupila, je v <b>minulém čase prostém</b>.</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Když jsi volal, zrovna jsem vařila}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Šel / šla jsem domů, když začalo pršet}}
<h3>Český nedokonavý vid není průběhový čas</h3>
<p>České „hrál“ znamená dvě věci: zvyk i děj, který právě probíhal. Anglicky je zvyk v minulém čase prostém. Průběhový čas je jen pro děj, který probíhal v jedné konkrétní chvíli.</p>
<p><b>When we were kids, we were playing hockey every day.</b> ✗ → <b>When we were kids, we played hockey every day.</b> ✓</p>
{{ex:When we were kids, we played hockey every day.|/wen wi wər ˈkɪdz wi ˈpleɪd ˈhɑːki ˈevri ˈdeɪ/|Jako děti jsme hráli každý den hokej}}
<div class="tip">Samotný minulý čas prostý tu znamená něco jiného: <b>I cooked when you called.</b> říká, že vaření začalo až po telefonátu.</div>`,
check:[["Jak se anglicky řekne „Co jsi dělal / dělala v devět?“",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Po „you“ je „were“ a za ním tvar s -ing."],["I was cooking ___ you called. Co patří na vynechané místo?",["when","so","or","than"],0,"„Když“ je tady „when“."],["They ___ watching TV. Co patří na vynechané místo?",["was","did","were","are being"],2,"Po „they“ je „were“."]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","Po „I“ je „was“."],
["mc","Jak se anglicky řekne „Když jsi volal, zrovna jsem vařila“?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","Děj, který probíhal, je v minulém čase průběhovém; událost, která do něj vstoupila, v minulém čase prostém."],
["mc","Jak se anglicky řekne „Co jsi zrovna dělal / dělala?“","What were you doing?","What did you doing?","What was you doing?","What were you do?","Po „you“ je „were“ a za ním tvar s -ing."],
["mc","They ___ playing soccer.","were","was","did","are","Po „they“ je „were“."],
["mc","Jak se anglicky řekne „Zrovna pršelo“?","It was raining.","It were raining.","It was rain.","It rained was.","Po „it“ je „was“ a tvar s -ing."],
["or","Zrovna jsem četl / četla knihu","I was reading a book","read books","Jedna blíže neurčená kniha: neurčitý člen „a“ a jednotné číslo „book“."],
["or","Děti zrovna spaly","The kids were sleeping","kid was","Dětí je víc, proto množné číslo „kids“ a „were“."],
["or","Dívali jsme se na televizi","We were watching TV","was","Po „we“ je „were“."],
["fi","I was __ dinner.","Zrovna jsem vařil / vařila večeři","cooking|making","cook|cooked|cooks","Po „was“ následuje tvar s -ing."],
["fi","What __ you doing?","Co jsi zrovna dělal / dělala?","were","was|did|does","Po „you“ je „were“."],
["fi","I was sleeping __ you called.","Když jsi volala, zrovna jsem spal","when","so|than|or","„Když“ je tady „when“."],
["ty","Zrovna jsem pracoval / pracovala (průběhový čas)","I was working","was · work – tvar s -ing","were","Po „I“ je „was“ a tvar s -ing."],
["ty","Zrovna jsem se díval / dívala na film","I was watching a movie","was · watching · movie – neurčitý člen „a“","the","Nějaký film, neříkáš který: neurčitý člen „a“."],
["ty","Děti si zrovna hrály","The kids were playing|The children were playing","kids · were · playing – množné číslo","kid","Dětí je víc, proto množné číslo „kids“ a „were“."]]},
{ id:"will", title:"Budoucí čas s „will“: rozhodnutí na místě, sliby a odhady", blurb:"Co rozhodneš až teď, řekneš s „will“. Co už máš v plánu, s „be going to“.", deck:"Nezávazná konverzace", body:`
<p>Tvoří se jako <b>will + základní tvar slovesa</b>. V řeči se skoro vždy stahuje: <b>I'll, you'll, it'll</b>. Zápor je <b>won't</b>.</p>
<p>České „budu volat“ i „zavolám“ je anglicky nejčastěji <b>I'll call</b>. O tvaru nerozhoduje vid.</p>
<h3>Rozhodnutí na místě</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Dám si těstoviny}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Já to vezmu (telefon) / Já otevřu (dveře)}}
<h3>Sliby a nabídky</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|Pomůžu ti}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Zavolám ti později}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Nepřijdu pozdě}}
<h3>Odhady</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|To bude dobré}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Myslím, že bude pršet}}
<h3>will a be going to</h3>
<div class="tbl"><table><tr><th></th><th>Kdy</th><th>Příklad</th></tr><tr><td class="k">will</td><td>rozhodnutí na místě, slib</td><td class="k">I'll get the door.</td></tr><tr><td class="k">be going to</td><td>plán, který už máš</td><td class="k">I'm going to visit Brno next month.</td></tr></table></div>
<p>Po <b>if</b> a <b>when</b> se <b>will</b> nepoužívá, i když čeština tam má budoucí čas („až přijdu“). Víc v lekci o prvním kondicionálu.</p>
<div class="tip">Nejčastější chyba: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ Po <b>will</b> je vždy jen základní tvar.</div>`,
check:[["Zvoní telefon. Jak anglicky řekneš „Já to vezmu“?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Rozhodnutí na místě se říká s „will“."],["I ___ be late. (Nepřijdu pozdě.) Co patří na vynechané místo?",["won't","willn't","don't will","not will"],0,"Zápor od „will“ je „won't“."],["Která věta mluví o plánu, který už máš?",["I'll get the door.","I will to visit Croatia.","I visit Croatia will.","I'm going to visit Croatia next month."],3,"Plán, který už máš, se říká s „be going to“."]],
practice:[
["mc","Jak se anglicky řekne „Pomůžu ti“?","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","Po „will“ následuje základní tvar slovesa."],
["mc","V restauraci se rozhoduješ až teď. Jak anglicky řekneš „Dám si těstoviny“?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Rozhodnutí na místě se říká s „will“."],
["mc","Jak se anglicky řekne „Nepřijdu pozdě“?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","„Will not“ se stahuje na „won't“."],
["mc","Jak se anglicky řekne „Přijdeš?“","Will you come?","Do you will come?","Will you coming?","Will come you?","V otázce stojí „will“ před podmětem a za ním je základní tvar."],
["mc","Která věta mluví o plánu, který už máš?","I'm going to visit Croatia next month.","I'll get the door.","I visit Croatia next month will.","I will to visit Croatia.","Plán, který už máš, se říká s „be going to“."],
["or","Zavolám ti později","I'll call you later","calling","Po „will“ následuje základní tvar slovesa."],
["or","Dám si kávu","I'll have a coffee","the coffees","Objednáváš jeden šálek: neurčitý člen „a“."],
["or","Otevřu dveře","I'll open the door","a doors","České „dveře“ jsou anglicky „door“ v jednotném čísle; jde o tyto dveře tady, proto určitý člen „the“."],
["fi","I __ call you tomorrow.","Zítra ti zavolám","will","am|going|do","Slib se říká s „will“."],
["fi","I __ forget.","Nezapomenu","won't|will not","don't|not|willn't","Zápor od „will“ je „won't“."],
["fi","__ you help me?","Pomůžeš mi?","Will|Can|Could|Would","Do|Are|Is","O pomoc můžeš požádat otázkou „Will you …?“."],
["ty","Pomůžu ti","I'll help you|I'll help","I'll · help · you – základní tvar","helping","Po „will“ následuje základní tvar slovesa."],
["ty","Dám si salát (s „will“)","I'll have a salad|I'll have the salad","I'll have · salad – pozor na člen","salads","Objednáváš jednu porci: neurčitý člen „a“. Salát z jídelního lístku může mít i „the“."],
["ty","Zavřu dveře (s „will“)","I'll close the door|I'll shut the door","I'll · close · door – určitý člen „the“","a","Jde o tyto dveře tady, proto určitý člen „the“."]]},
{ id:"perfect", title:"Předpřítomný čas: zkušenost a výsledek", blurb:"Co už máš za sebou a co z toho platí teď. Jakmile řekneš kdy, je to minulý čas prostý.", deck:"Cestování (letiště a hotel)", body:`
<p>Čeština má jeden minulý čas. Angličtina má pro minulé děje dva: minulý čas prostý a <b>předpřítomný čas (Present Perfect)</b>. Ten nemá český protějšek, a proto se v něm chybuje nejčastěji. Tvoří se jako <b>have / has + příčestí minulé</b> (3. tvar slovesa).</p>
<h3>Zkušenost: někdy v životě, neříkáš kdy</h3>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|V Japonsku jsem už byl / byla}}{{ex:She has visited Prague twice.|/ʃi həz ˈvɪzɪtɪd ˈprɑːg ˈtwaɪs/|Navštívila Prahu dvakrát}}
<h3>ever a never</h3>
{{ex:Have you ever eaten goulash?|/həv ju ˈevər ˈiːtn ˈguːlɑːʃ/|Jedl / jedla jsi někdy guláš?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Nikdy jsem to neviděl / neviděla}}
<p>Česky jsou ve větě dva zápory („nikdy jsem neviděl“). Anglicky stačí jeden: je tu <b>never</b>, a sloveso už v záporu není. Odpověď na otázku je <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Výsledek: stalo se to a teď to platí</h3>
{{ex:I've lost my keys.|/aɪv ˈlɔːst maɪ ˈkiːz/|Ztratil / ztratila jsem klíče (a teď je nemám)}}
<h3>Častá příčestí minulá</h3>
<div class="tbl"><table><tr><th>Základní tvar</th><th>Minulý tvar</th><th>Příčestí minulé</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">lose</td><td class="k">lost</td><td class="k">lost</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Jakmile řekneš kdy, je to minulý čas prostý</h3>
<p>S dokončenou dobou (<b>last year, yesterday, in 2020, on my birthday</b>) předpřítomný čas být nemůže. O čase nerozhodují slova jako <b>ever</b> a <b>just</b> ani sloveso <b>see</b>. Rozhoduje to, jestli říkáš, kdy se to stalo.</p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|Loni jsem byl / byla v Japonsku}}
<p><b>I've seen it on my birthday.</b> ✗ → <b>I saw it on my birthday.</b> ✓</p>
<div class="tip">Nejčastější chyba: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["Jak se anglicky řekne „Byl / byla jsi někdy v Japonsku?“",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Na zkušenost se ptáš „Have you ever“ + příčestí minulé."],["I ___ never seen that movie. Co patří na vynechané místo?",["am","did","have","was"],2,"„Have“ + „never“ + příčestí minulé."],["Která věta je správně?",["I went to Croatia last year.","I've been to Croatia last year.","I have go to Croatia last year.","I've went to Croatia."],0,"Je tu „last year“, tedy dokončená doba, proto minulý čas prostý."]],
practice:[
["mc","Jak se anglicky řekne „V Japonsku jsem už byl / byla“?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","„Have“ + příčestí minulé „been“."],
["mc","Jaké je příčestí minulé (3. tvar) slovesa „see“?","seen","saw","seed","seeing","Tři tvary: see – saw – seen."],
["mc","Jak se anglicky řekne „Jedl / jedla jsi někdy sushi?“","Have you ever eaten sushi?","Did you ever eaten sushi?","Have you ever ate sushi?","Do you have eaten sushi?","Na zkušenost se ptáš „Have you ever“ + příčestí minulé."],
["mc","Jak se anglicky řekne „Nikdy jsem to neviděl / neviděla“?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","„Have“ + „never“ + příčestí minulé; v angličtině stačí jeden zápor."],
["mc","Ve větě je „loni“. Která věta je správně?","I went to Croatia last year.","I've been to Croatia last year.","I have go to Croatia last year.","I've went to Croatia last year.","S dokončenou dobou je minulý čas prostý."],
["or","Ten film už jsem viděl / viděla","I've seen the movie","a saw","Film, o kterém už byla řeč: určitý člen „the“."],
["or","V Itálii jsem byl / byla dvakrát","I've been to Italy twice","went","Po „have“ následuje příčestí minulé „been“."],
["or","Nikdy jsem neviděl / neviděla hada","I've never seen a snake","the snakes","Jakýkoli had, ne jeden určitý: neurčitý člen „a“."],
["fi","Have you ever __ to Vienna?","Byl / byla jsi někdy ve Vídni?","been","be|went|go","Po „have“ následuje příčestí minulé „been“."],
["fi","I've __ eaten that.","To jsem nikdy nejedl / nejedla","never","ever|no|not never","„Nikdy“ je „never“; sloveso už v záporu není."],
["fi","She __ visited Italy twice.","Navštívila Itálii dvakrát","has","have|is|did","Po „she“ je „has“."],
["ty","Byl / byla jsi někdy v Japonsku?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan – zkušenost","went","Na zkušenost se ptáš „Have you ever been to …?“."],
["ty","Tu knihu už jsem četl / četla (předpřítomný čas)","I've read the book|I've read that book|I've already read the book|I've read the book already|I've already read that book|I've read that book already","I've · read · book – určitý člen „the“","a","Kniha, o které už byla řeč: určitý člen „the“."],
["ty","Nikdy jsem neměl / neměla kočku (předpřítomný čas)","I've never had a cat","never · had · cat – neurčitý člen „a“","the","Jakákoli kočka, ne jedna určitá: neurčitý člen „a“."]]},
{ id:"modals", title:"„Have to“, „must“, „should“, „might“: povinnost, rada a možnost", blurb:"Co musíš, co nemusíš, co nesmíš a co se možná stane.", deck:"Lékař a nouzové situace", body:`
<p>Čtyři výrazy pro povinnost, radu a možnost. Po všech následuje <b>základní tvar slovesa</b>.</p>
<h3>have to: muset</h3>
<p>V běžné řeči je nejčastější. Po <b>he / she / it</b> je <b>has to</b>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Zítra musím pracovat}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Už musí jít}}
<h3>Nemusíš není nesmíš</h3>
<p>České „nemusíš“ a „nesmíš“ jsou dvě různé věci a v angličtině se pletou velmi často. <b>You don't have to</b> = nemusíš (není to nutné). <b>You must not</b> = nesmíš (je to zakázané). Stažený tvar <b>mustn't</b> tedy nikdy neznamená „nemusíš“.</p>
<div class="tbl"><table><tr><th>Výraz</th><th>Význam</th></tr><tr><td class="k">You don't have to come.</td><td>Nemusíš chodit (není to nutné)</td></tr><tr><td class="k">You must not smoke here.</td><td>Tady se nesmí kouřit (zákaz)</td></tr></table></div>
<h3>should: rada</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Měl / měla bys zajít k lékaři}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Neměl / neměla by sis dělat starosti}}
<p>České „Mám zavolat?“ není <b>have</b>. Anglicky se zeptáš <b>Should I call?</b></p>
<h3>might: možná</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Možná bude pršet}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Možná přijdu pozdě}}
<p>České „možná“ + budoucí čas je anglicky <b>might</b> + základní tvar. Další <b>will</b> už nepřidávej: <b>It might will rain.</b> ✗</p>
<div class="tip">Nejčastější chyba: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓</div>`,
check:[["Jak se anglicky řekne „Nemusíš chodit“?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"„Nemusíš“ je „don't have to“; „must not“ znamená „nesmíš“."],["Dáváš radu: You ___ see a doctor. Co patří na vynechané místo?",["might","have","should","must to"],2,"Rada je „should“ + základní tvar."],["She ___ to work today. Co patří na vynechané místo?",["have","must","should","has"],3,"Po „she“ je „has to“."]],
practice:[
["mc","Jak se anglicky řekne „Zítra musím pracovat“?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","„Have to“ + základní tvar slovesa."],
["mc","Jak se anglicky řekne „Nemusíš chodit“?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","„Nemusíš“ je „don't have to“; „must not“ by znamenalo „nesmíš“."],
["mc","Jak se anglicky řekne „Měl / měla bys zajít k lékaři“?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","„Should“ + základní tvar; jeden blíže neurčený lékař má neurčitý člen „a“."],
["mc","Jak se anglicky řekne „Možná bude pršet“?","It might rain.","It might rains.","It might to rain.","It mights rain.","„Might“ + základní tvar, bez -s a bez „to“."],
["mc","Jak se anglicky řekne „Tady se nesmí kouřit“?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Zákaz je „must not“."],
["or","Měl / měla bys zajít k lékaři","You should see a doctor","the doctors","Jakýkoli lékař, ne jeden určitý: neurčitý člen „a“."],
["or","Už musím jít","I have to go now","going","Po „have to“ následuje základní tvar slovesa."],
["or","Musíš si koupit jízdenku","You have to buy a ticket","the tickets","Jedna jízdenka: neurčitý člen „a“ a jednotné číslo „ticket“."],
["fi","She __ to study tonight.","Dnes večer se musí učit","has","have|must|should","Po „she“ je „has to“."],
["fi","You __ have to pay.","Nemusíš platit","don't|do not","must not|not|aren't","„Nemusíš“ je „don't have to“."],
["fi","It __ rain tomorrow.","Zítra možná bude pršet","might|may|could","must to|has to|should to","Možnost vyjádříš slovesem „might“."],
["ty","Musím pracovat","I have to work|I must work|I need to work","have to · work – vyjádři povinnost","should","Povinnost je „have to“."],
["ty","Měl / měla bys zajít k lékaři","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor – neurčitý člen „a“","the","Jakýkoli lékař, ne jeden určitý: neurčitý člen „a“."],
["ty","Musíš si koupit jízdenku (s „have to“)","You have to buy a ticket","have to · buy · ticket – neurčitý člen „a“","the","Jedna jízdenka: neurčitý člen „a“."]]},
{ id:"to-ing", title:"Sloveso po slovese: „want to“, „enjoy“ + -ing", blurb:"Po „want“ je infinitiv s „to“, po „enjoy“ tvar s -ing. Rozhoduje první sloveso.", deck:"Nezávazná konverzace", body:`
<p>Když jdou dvě slovesa za sebou, čeština má prostě infinitiv: „chci jít“, „potřebuju spát“. Angličtina má dvě možnosti, <b>infinitiv s to</b> nebo <b>tvar s -ing</b> (gerundium), a o tom, která platí, rozhoduje první sloveso. Nejčastější slovesa se vyplatí naučit ve skupinách.</p>
<div class="tbl"><table><tr><th>Následuje to</th><th>Následuje -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + sloveso: po want, need, decide, would like</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Chci jít domů}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Potřebuju se učit}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Chtěl / chtěla bych si objednat}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Rozhodl / rozhodla jsem se učit anglicky}}
<h3>-ing: po enjoy, finish, mind</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Vaření mě baví}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|Skončil / skončila jsem s prací}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Nevadí mi čekat}}
<h3>Chci, abys…: want + osoba + to</h3>
<p>České „Chci, abys přišel“ se nepřekládá vedlejší větou. Anglicky je to <b>want + osoba + to + sloveso</b>.</p>
<p><b>I want that you come.</b> ✗ → <b>I want you to come.</b> ✓</p>
{{ex:I want you to come.|/aɪ ˈwɑːnt ju tə ˈkʌm/|Chci, abys přišel / přišla}}
<h3>Slovesa, po kterých jde obojí</h3>
<p>Po <b>like, love, start</b> může být <b>to</b> i <b>-ing</b>. České „rád plavu“ je <b>I like swimming</b> nebo <b>I like to swim</b>.</p>
<div class="tip">Nejčastější chyba: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. Co patří na vynechané místo?",["go","going","to go","to going"],2,"Po „want“ následuje „to“ + sloveso."],["I enjoy ___ movies. Co patří na vynechané místo?",["watching","to watch","watch","to watching"],0,"Po „enjoy“ následuje tvar s -ing."],["Jak se anglicky řekne „Chtěl / chtěla bych si objednat“?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Po „would like“ následuje „to“ + sloveso."]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","Po „need“ následuje „to“ + sloveso."],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","Po „enjoy“ následuje tvar s -ing."],
["mc","Jak se anglicky řekne „Chtěl / chtěla bych si objednat“?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Po „would like“ následuje „to“ + sloveso."],
["mc","Jak se anglicky řekne „Skončil / skončila jsem s prací“?","I finished working.","I finished to work.","I finished work to.","I finish worked.","Po „finish“ následuje tvar s -ing."],
["mc","Jak se anglicky řekne „Nevadí mi čekat“?","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","Po „mind“ následuje tvar s -ing."],
["or","Chci si koupit auto","I want to buy a car","the buying","Po „want“ je „to“; jedno auto, zatím neurčené, má neurčitý člen „a“."],
["or","Baví mě dívat se na filmy","I enjoy watching movies","movie watch","Po „enjoy“ je tvar s -ing; filmy obecně jsou v množném čísle bez členu: „movies“."],
["or","Potřebuju si odpočinout","I need to rest","resting","Po „need“ následuje „to“ + sloveso."],
["fi","I want __ a coffee.","Chci si dát kávu","to have|to drink|to get","have|having|drinking","Po „want“ následuje „to“ + sloveso."],
["fi","She enjoys __.","Plavání ji baví","swimming","to swim|swim|swims","Po „enjoy“ následuje tvar s -ing."],
["fi","I decided __ English.","Rozhodl / rozhodla jsem se učit anglicky","to study|to learn","study|studying|studied","Po „decide“ následuje „to“ + sloveso."],
["ty","Chci jít domů","I want to go home","want to · go · home – bez členu","the","Po „want“ je „to“; před „home“ tady žádný člen není."],
["ty","Baví mě číst knihy (s „enjoy“)","I enjoy reading books|I enjoy reading","enjoy · read · book – množné číslo","book","Po „enjoy“ je tvar s -ing; knihy obecně jsou v množném čísle: „books“."],
["ty","Chtěl / chtěla bych si objednat","I'd like to order|I want to order","I'd like · to · order – následuje infinitiv s „to“","ordering","Po „would like“ následuje „to“ + sloveso."]]},
{ id:"articles-2", title:"Člen „the“ podrobněji: jedinečné věci a obecná tvrzení bez členu", blurb:"Hudební nástroje s „the“, sporty bez členu. K tomu názvy zemí a věty o věcech obecně.", deck:"Cestování (letiště a hotel)", body:`
<p>Třetí lekce o členech. Čeština členy nemá, a tak se chybuje oběma směry: člen chybí tam, kde být má, a „pro jistotu“ přibude tam, kde být nemá. Tady jsou případy, které se řídí pevným pravidlem.</p>
<h3>Kdy je the</h3>
<div class="tbl"><table><tr><th>Případ</th><th>Příklad</th></tr><tr><td>Věc, která je jen jedna</td><td class="k">the sun, the internet</td></tr><tr><td>Hudební nástroje</td><td class="k">play the piano</td></tr><tr><td>Řeky a moře</td><td class="k">the Danube, the Pacific</td></tr><tr><td>Názvy zemí v množném čísle nebo se slovem Republic, States, Kingdom</td><td class="k">the United States, the Czech Republic, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Hraju na klavír}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Je ze Spojených států}}{{ex:I'm from the Czech Republic.|/aɪm frəm ðə ˈtʃek rɪˈpʌblɪk/|Jsem z České republiky}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|Našel / našla jsem to na internetu}}
<h3>Kdy žádný člen není</h3>
<div class="tbl"><table><tr><th>Případ</th><th>Příklad</th></tr><tr><td>Většina zemí a všechna města</td><td class="k">France, Prague</td></tr><tr><td>Sporty, jazyky a denní jídla</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>Věci obecně</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Prague.|/aɪ ˈlɪv ɪn ˈprɑːg/|Bydlím v Praze}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Hraju fotbal}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|Psi jsou roztomilí}}
<p>Před jmény měst a většiny zemí člen není: <b>I live in the Prague.</b> ✗ <b>She's from the France.</b> ✗</p>
<h3>Obecně, nebo určitě?</h3>
<p>Česky řekneš „Kočky jsou roztomilé“ a myslíš všechny kočky. Anglicky je to množné číslo <b>bez členu</b>: <b>Cats are cute.</b> S <b>the</b> by šlo o určité kočky, o kterých už byla řeč.</p>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|Mám rád / ráda psy (psy obecně)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|Psi v tomto parku jsou roztomilí (ti určití)}}
<div class="tip">Když mluvíš o něčem obecně, <b>the</b> vynech. <b>I like the dogs.</b> znamená „Ti psi se mi líbí“, tedy jen ti určití.</div>`,
check:[["I play ___ soccer. Co patří na vynechané místo?",["a","the","an","(bez členu)"],3,"Před názvy sportů člen není."],["She's from ___ United States. Co patří na vynechané místo?",["the","a","an","(bez členu)"],0,"Před „United States“ je určitý člen „the“."],["Jak se anglicky řekne „Psi jsou roztomilí“ (psi obecně)?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"Obecné tvrzení: množné číslo bez členu."]],
practice:[
["mc","I play ___ piano.","the","a","an","some","Před hudebním nástrojem je „the“."],
["mc","Jak se anglicky řekne „Bydlím v Rakousku“?","I live in Austria.","I live in the Austria.","I live in a Austria.","I live Austria in.","Před většinou názvů zemí člen není."],
["mc","Jak se anglicky řekne „Hraju fotbal“?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Před názvy sportů člen není."],
["mc","Jak se anglicky řekne „Kočky jsou roztomilé“ (kočky obecně)?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","Obecné tvrzení: množné číslo bez členu."],
["mc","She's from ___ United States.","the","a","an","some","Před „United States“ je určitý člen „the“."],
["or","Hraju na klavír","I play the piano","a pianos","Před hudebním nástrojem je určitý člen „the“."],
["or","Psi jsou roztomilí (obecně)","Dogs are cute","The dog","O psech obecně: množné číslo „dogs“ bez členu."],
["or","Našel / našla jsem to na internetu","I found it on the internet","a","Internet je jen jeden, proto určitý člen „the“."],
["fi","I speak __.","Mluvím anglicky","English","the English|an English|a English","Před názvy jazyků člen není."],
["fi","The sun rises in __ east.","Slunce vychází na východě","the","a|an|some","Před světovými stranami je „the“."],
["fi","I love __.","Miluju hudbu","music","the musics|a music|musics","Hudba obecně je bez členu; „music“ je nepočitatelné, takže ani -s."],
["ty","Jsem ze Spojených států","I'm from the United States|I'm from the US|I'm from America","I'm from · United States – určitý člen „the“","a","Před „United States“ je určitý člen „the“."],
["ty","Hraju na kytaru","I play the guitar|I play guitar","play · guitar – určitý člen „the“","a","Před hudebním nástrojem je určitý člen „the“."],
["ty","Kočky jsou roztomilé (obecně)","Cats are cute","cat – množné číslo bez členu","The cat","Obecné tvrzení: množné číslo „cats“ bez členu."]]},
{ id:"first-conditional", title:"První kondicionál: „if“ + přítomný čas, „will“", blurb:"„Jestli…, tak…“ Po „if“ není „will“, i když čeština tam má budoucí čas.", deck:"Práce a e-maily", body:`
<p>První kondicionál (First Conditional) mluví o tom, co se opravdu může stát: <b>if + přítomný čas, will + základní tvar</b>. Čeština má po „jestli“, „když“ a „až“ budoucí čas: „Jestli <i>budu mít</i> čas, zavolám ti.“ Angličtina má po <b>if</b> přítomný čas, i když jde o budoucnost.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|Jestli bude pršet, zůstanu doma}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Jestli si nepospíšíš, ujede ti autobus}}
<p><b>If I will have time, I'll call you.</b> ✗ → <b>If I have time, I'll call you.</b> ✓</p>
{{ex:If I have time, I'll call you.|/ɪf aɪ ˈhæv ˈtaɪm aɪl ˈkɔːl ju/|Jestli budu mít čas, zavolám ti}}
<h3>Pořadí můžeš otočit</h3>
<p>Když je <b>if</b> až ve druhé půlce věty, čárka se nepíše. Česky se před „jestli“ píše vždy.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Pomůžu ti, jestli budu mít čas}}
<h3>S rozkazem</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Jestli se zpozdíš, zavolej mi}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Jestli budeš potřebovat pomoc, dej mi vědět}}
<h3>when: až (určitě se to stane)</h3>
<p>Když je jisté, že to nastane, je místo <b>if</b> spojka <b>when</b>, česky „až“. Ani po ní <b>will</b> není: „až přijdu“ je <b>when I get</b>, ne <b>when I will get</b>.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Až přijdu domů, zavolám ti}}
<div class="tip">Nejčastější chyba: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓</div>`,
check:[["If it ___ tomorrow, I'll stay home. Co patří na vynechané místo?",["will rain","rains","rained","raining"],1,"Po „if“ je přítomný čas, i když čeština má budoucí."],["If you study, you ___ pass. Co patří na vynechané místo?",["pass will","passing","will pass","passed"],2,"Ve druhé půlce věty je „will“ + základní tvar."],["Která věta je správně?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"V půlce s „if“ je přítomný čas, ve druhé „will“."]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","Po „if“ je přítomný čas."],
["mc","If you're late, ___ me.","call","will calling","calls","to call","Rozkaz začíná základním tvarem slovesa."],
["mc","Jak se anglicky řekne „Pomůžu ti, jestli budu mít čas“?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Po „if“ se „will“ nepoužívá."],
["mc","Jak se anglicky řekne „Jestli si nepospíšíš, ujede ti autobus“?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","V půlce s „if“ je přítomný čas, tady v záporu: „don't“."],
["mc","Jak se anglicky řekne „Až přijdu domů, zavolám ti“?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","I po „when“ je přítomný čas."],
["or","Jestli bude pršet, zůstanu doma","If it rains I'll stay home","will the","Po „if“ je přítomný čas; před „home“ tady žádný člen není."],
["or","Jestli budeš mít čas, zavolej mi","If you have time call me","will","Po „if“ se „will“ nepoužívá."],
["or","Ujede ti autobus","You'll miss the bus","a buses","Autobus, kterým chceš jet, je určitý: člen „the“."],
["fi","If it __ tomorrow, we'll cancel.","Jestli bude zítra pršet, zrušíme to","rains","will rain|rained|raining","Po „if“ je přítomný čas."],
["fi","If you study, you __ pass.","Když se budeš učit, zkoušku uděláš","will|can|might","are|did|passing","Ve druhé půlce věty je „will“ + základní tvar."],
["fi","__ you need help, call me.","Jestli budeš potřebovat pomoc, zavolej mi","If|When","So|But|Because","„Jestli“ je „if“."],
["ty","Pomůžu ti, jestli budu mít čas","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time – po „if“ přítomný čas","will","Po „if“ se „will“ nepoužívá."],
["ty","Jestli bude pršet, vezmu si taxík","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi – neurčitý člen „a“","the","Jakýkoli taxík, ne jeden určitý: neurčitý člen „a“."],
["ty","Ujede ti autobus (s „miss“)","You'll miss the bus|You're going to miss the bus","miss · bus – určitý člen „the“","a","Autobus, kterým chceš jet, je určitý: člen „the“."]]},
{ id:"relative", title:"Vztažné věty: „who“ a „that“", blurb:"České „který“ má v angličtině několik podob. A čárka se před ním nepíše.", deck:"Nakupování a placení", body:`
<p>Vztažná věta (relative clause) upřesňuje podstatné jméno a stojí <b>za ním</b>, stejně jako v češtině: „kniha, <i>kterou jsme koupili</i>“ → the book <b>that we bought</b>. České „který“ se ale překládá podle toho, o kom nebo o čem mluvíš.</p>
<h3>O lidech: who</h3>
{{ex:I have a friend who speaks Czech.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˈtʃek/|Mám kamaráda, který mluví česky}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|muž, který bydlí vedle}}
<h3>O věcech: that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|kniha, kterou jsem koupil / koupila}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|To je ten telefon, který chci}}
<p>O věcech může být i <b>which</b>. V běžné americké angličtině je častější <b>that</b>.</p>
<h3>Bez čárky</h3>
<p>Čeština píše před „který“ čárku vždy. Angličtina ji nepíše, když vztažná věta říká, o kterou věc nebo osobu jde: <b>the book, that I bought</b> ✗ → <b>the book that I bought</b> ✓</p>
<h3>that se často vynechává</h3>
<p>Když hned následuje podmět a sloveso, můžeš <b>that</b> vynechat. V řeči se to dělá skoro vždy.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|Film, který jsme viděli, byl skvělý}}
<h3>O místech: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|kavárna, kde jsme se potkali}}
<h3>Všechno, co…</h3>
<p>České „všechno, co“ není <b>everything what</b>. Správně je <b>everything that</b> nebo jen <b>everything</b>. A zájmeno se ve vztažné větě neopakuje: <b>the book that I bought it</b> ✗</p>
{{ex:That's everything I need.|/ˈðæts ˈevriθɪŋ aɪ ˈniːd/|To je všechno, co potřebuju}}
<div class="tip">Co si zapamatovat: o lidech <b>who</b>, o věcech <b>that</b>, a nikdy <b>what</b>: <b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Brno. Co patří na vynechané místo?",["which","who","what","he"],1,"O lidech se říká „who“."],["Jak se anglicky řekne „kniha, kterou jsem koupil / koupila“?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"Nejdřív podstatné jméno, za ním upřesnění s „that“; nikdy „what“."],["Která věta je správně?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"Vztažná věta stojí hned za podstatným jménem."]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","O lidech se říká „who“."],
["mc","Jak se anglicky řekne „kniha, kterou jsem koupil / koupila“?","the book that I bought","the I bought book","the book what I bought","the bought I book","Podstatné jméno, za ním „that“ a upřesnění; „what“ sem nepatří."],
["mc","Jak se anglicky řekne „muž, který bydlí vedle“?","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","O lidech se říká „who“."],
["mc","This is the phone ___ I want.","that","who","what","it","O věcech se říká „that“."],
["mc","Jak se anglicky řekne „film, který jsme viděli“?","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","„That“ se dá vynechat, když hned následuje podmět a sloveso."],
["or","Tohle je ta kniha, kterou jsem koupil / koupila","This is the book I bought","a what","Knihu upřesňuje vztažná věta, proto určitý člen „the“."],
["or","Mám kamaráda, který vaří","I have a friend who cooks","the which","První zmínka o jednom kamarádovi: neurčitý člen „a“."],
["or","Film, který jsme viděli, byl skvělý","The movie we saw was great","A movies","Právě ten film, který jsme viděli: určitý člen „the“."],
["fi","the man __ lives here","muž, který tady bydlí","who|that","what|he|which","O lidech se říká „who“."],
["fi","the book __ I read","kniha, kterou jsem četl / četla","that|which","who|what|it","O věcech se říká „that“."],
["fi","the cafe __ we met","kavárna, kde jsme se potkali","where","who|what|it","O místech se říká „where“."],
["ty","Tohle je ta kniha, kterou jsem koupil / koupila","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought – určitý člen „the“","a","Knihu upřesňuje vztažná věta, proto určitý člen „the“."],
["ty","Mám kamaráda, který mluví česky","I have a friend who speaks Czech|I have a friend that speaks Czech","friend · who · speaks Czech – neurčitý člen „a“","the","První zmínka o jednom kamarádovi: neurčitý člen „a“."],
["ty","Film, který jsme viděli, byl skvělý","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great – podstatné jméno první","what","Nejdřív podstatné jméno, upřesnění až za ním."]]},
];

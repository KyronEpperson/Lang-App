/* it-en: the original 11 lessons and their checks, written for Italian speakers (docs/profiles/it.md §8).
   English examples, check options and answer positions follow es-en except in the lessons and checks listed in deviations.json
   (pron rebuilt for Italian sound traps; technical Italian check options in articles, polite, numbers, phrasal, idioms). */
exports.LESSONS = [
{ id:"pron", title:"1 · Trappole di pronuncia: h, th, vocali, doppie e -ed", blurb:"Impara a leggere la trascrizione fonetica (IPA) delle carte e scopri le trappole tipiche di chi parla italiano: la h, il th, le vocali, le doppie, la vocale finale e la -ed.", deck:"Trappole di pronuncia", body:`
<p>Le carte e gli esempi di questo corso riportano la <b>trascrizione fonetica (IPA)</b>, quella dei dizionari, con i suoni dell'inglese americano. All'inizio sembra strana, ma risolve un problema serio: l'italiano si legge come si scrive, l'inglese no. Se leggi una parola inglese con le regole dell'italiano, pronunci le lettere mute, allunghi le doppie e lasci cadere la <i>h</i>. La trascrizione ti mostra i suoni, non le lettere. Dedica qualche minuto a questa tabella e torna qui quando ti serve. Negli esercizi puoi nascondere la trascrizione con il pulsante «Aa», oppure togliendo la spunta a «Mostra la pronuncia (IPA) nella pratica» nelle impostazioni del Profilo.</p>
<h3>Come leggere la trascrizione</h3>
<div class="tbl"><table><tr><th>IPA</th><th>Suono (⚠ = trappola per chi parla italiano)</th><th>Esempio</th></tr><tr><td class="k">iː</td><td>«i» di «vino», più lunga e tesa</td><td>sheep /ˈʃiːp/</td></tr><tr><td class="k">ɪ</td><td>tra «i» ed «e», breve e rilassata: non è una «i» corta ⚠</td><td>ship /ˈʃɪp/</td></tr><tr><td class="k">e</td><td>«e» di «bello»</td><td>bed /ˈbed/</td></tr><tr><td class="k">æ</td><td>«a» molto aperta, quasi «è», con la bocca ben aperta ⚠</td><td>cat /ˈkæt/</td></tr><tr><td class="k">ʌ</td><td>«a» breve e centrale, più chiusa della «a» italiana ⚠</td><td>cut /ˈkʌt/</td></tr><tr><td class="k">ə</td><td>vocale debole e indistinta, come la «e» finale di molti dialetti del Sud</td><td>about /əˈbaʊt/</td></tr><tr><td class="k">ɑː</td><td>«a» di «mare», lunga</td><td>hot /ˈhɑːt/</td></tr><tr><td class="k">ɔː</td><td>«o» aperta di «porta»</td><td>talk /ˈtɔːk/</td></tr><tr><td class="k">uː / ʊ</td><td>«u» di «luna», lunga / «u» breve e rilassata ⚠</td><td>food /ˈfuːd/, book /ˈbʊk/</td></tr><tr><td class="k">ɜːr / ər</td><td>vocale centrale con le labbra non arrotondate, poi la r inglese ⚠</td><td>bird /ˈbɜːrd/, water /ˈwɔːtər/</td></tr><tr><td class="k">eɪ aɪ ɔɪ oʊ aʊ</td><td>due suoni che scivolano uno nell'altro: <i>go</i> non è «go» con una o sola ⚠</td><td>day /ˈdeɪ/, go /ˈgoʊ/</td></tr><tr><td class="k">p t k</td><td>con un piccolo soffio all'inizio di una sillaba accentata ⚠</td><td>tea /ˈtiː/</td></tr><tr><td class="k">θ / ð</td><td>lingua tra i denti, senza voce / con voce: né «t» né «d» ⚠</td><td>think /ˈθɪŋk/, this /ˈðɪs/</td></tr><tr><td class="k">h</td><td>un soffio che si sente, come quando appanni un vetro: non toglierlo e non aggiungerlo ⚠</td><td>hair /ˈher/, air /ˈer/</td></tr><tr><td class="k">r</td><td>non vibrata: la lingua si piega all'indietro senza toccare il palato ⚠</td><td>red /ˈred/</td></tr><tr><td class="k">ʃ / ʒ</td><td>«sc» di «scena» / lo stesso suono con la voce, come la «j» di «abat-jour»</td><td>she /ʃi/, usually /ˈjuːʒuəli/</td></tr><tr><td class="k">tʃ / dʒ</td><td>«c» di «ciao» / «g» di «gelato»; il <i>ch</i> inglese è tʃ, non k ⚠</td><td>chair /ˈtʃer/, job /ˈdʒɑːb/</td></tr><tr><td class="k">m / n / ŋ</td><td>come in italiano / ŋ è la «n» di «banca», senza g dopo ⚠</td><td>sing /ˈsɪŋ/</td></tr><tr><td class="k">w / j</td><td>«u» di «uomo», non «v» ⚠ / «i» di «ieri»: la j dell'IPA è la <i>y</i> inglese ⚠</td><td>we /wi/, yes /ˈjes/</td></tr><tr><td class="k">ˈ</td><td>va <b>prima</b> della sillaba accentata, che spesso non è quella dell'italiano ⚠</td><td>hotel /hoʊˈtel/, comfortable /ˈkʌmftərbl/</td></tr></table></div>
<p>Le parole senza ˈ (<i>a, the, to, can</i>…) sono deboli: dille in fretta e senza forza. E nell'inglese americano la <i>t</i> tra due vocali suona come una «d» veloce (<i>water</i>, <i>city</i>): la trascrizione non lo scrive, l'audio sì.</p>
<h3>La h si sente (e non si aggiunge)</h3>
<p>In italiano la <i>h</i> è solo una lettera: <i>ho</i> e <i>o</i> si pronunciano allo stesso modo. In inglese è un suono, un soffio leggero ma udibile: senza, <i>hair</i> («capelli») diventa <i>air</i> («aria»). C'è anche l'errore opposto: per paura di dimenticarla, la si aggiunge dove non c'è. La regola è semplice: soffia solo dove la trascrizione scrive /h/. Poche parole hanno la <i>h</i> muta, come <i>hour</i> e <i>honest</i>.</p>
{{ex:hair / air|/ˈher/ /ˈer/|capelli / aria}}{{ex:his house|/hɪz ˈhaʊs/|la sua casa (di lui)}}{{ex:My hotel is in Rome.|/maɪ hoʊˈtel ɪz ɪn ˈroʊm/|Il mio albergo è a Roma.}}
<h3>Il th: né t né d</h3>
<p>L'italiano non ha questo suono, e la scorciatoia naturale è sostituirlo con <i>t</i> o <i>d</i>: «tink», «dis». Ma così cambi parola: <i>three</i> («tre») diventa <i>tree</i> («albero»). Metti la punta della lingua tra i denti e soffia: senza voce in <i>think</i> /θ/, con la voce in <i>this</i> /ð/.</p>
{{ex:I think so.|/aɪ ˈθɪŋk ˈsoʊ/|Credo di sì.}}{{ex:three / tree|/ˈθriː/ /ˈtriː/|tre / albero}}{{ex:think / sink|/ˈθɪŋk/ /ˈsɪŋk/|pensare / lavandino}}
<h3>Vocali: conta la qualità, non solo la lunghezza</h3>
<p>L'italiano ha sette vocali, l'inglese americano circa undici. Chi parla italiano tende a distinguere <i>sheep</i> e <i>ship</i> solo allungando la «i». Non basta: /iː/ è tesa, con le labbra tirate come in un sorriso; /ɪ/ è rilassata, quasi una «e» chiusa. Lo stesso vale per /uː/ e /ʊ/ (<i>fool</i> / <i>full</i>). E dove l'italiano ha una sola «a», l'inglese ne ha tre: /æ/ in <i>cat</i>, /ʌ/ in <i>cut</i>, /ɑː/ in <i>hot</i>.</p>
{{ex:ship / sheep|/ˈʃɪp/ /ˈʃiːp/|nave / pecora}}{{ex:live / leave|/ˈlɪv/ /ˈliːv/|vivere, abitare / partire}}{{ex:full / fool|/ˈfʊl/ /ˈfuːl/|pieno / sciocco}}{{ex:cat / cut|/ˈkæt/ /ˈkʌt/|gatto / tagliare}}{{ex:The sheep is on the ship.|/ðə ˈʃiːp ɪz ɑːn ðə ˈʃɪp/|La pecora è sulla nave.}}
<h3>Leggi i suoni, non le lettere</h3>
<p>L'abitudine di leggere ogni lettera inganna in tre punti. <b>1. Le doppie.</b> In inglese le doppie non si allungano: <i>Finnish</i> e <i>finish</i> si pronunciano uguali, /ˈfɪnɪʃ/, e <i>happy</i> ha una p sola. <b>2. Le lettere mute.</b> Molte lettere scritte non si pronunciano: la <i>l</i> di <i>walk</i>, la <i>t</i> di <i>listen</i>, la <i>b</i> di <i>lamb</i>. La trascrizione scrive solo quello che si sente. <b>3. Il ch.</b> In italiano <i>ch</i> è «k» (<i>chiave</i>); in inglese è quasi sempre la «c» di «ciao»: <i>choose</i> non si legge «kuz».</p>
{{ex:shoes / choose|/ˈʃuːz/ /ˈtʃuːz/|scarpe / scegliere}}{{ex:walk|/ˈwɔːk/|camminare}}{{ex:listen|/ˈlɪsn/|ascoltare}}
<h3>Nessuna vocale dopo la consonante finale</h3>
<p>Le parole italiane finiscono quasi tutte in vocale, e la bocca tende ad aggiungerne una anche in inglese: «bigh-e», «milk-e», «I like-a it». In inglese la parola finisce secca sulla consonante: <i>big</i> /ˈbɪg/, non «bigh-e». Chiudi la parola e fermati lì.</p>
{{ex:milk|/ˈmɪlk/|latte}}{{ex:a big dog|/ə ˈbɪg ˈdɔːg/|un cane grande}}
<h3>La -ed del passato</h3>
<p>La <b>-ed</b> <b>non</b> è una sillaba in più, tranne dopo <i>t</i> o <i>d</i>. E dopo un suono sordo si pronuncia /t/, non /d/: <i>worked</i> ha una sola sillaba e finisce in /t/. Niente «uor-ked».</p>
<div class="tbl"><table><tr><th>Suona</th><th>Quando</th><th>Esempio</th></tr><tr><td class="k">t</td><td>dopo un suono sordo (k, p, s, sh, ch, f)</td><td>worked /ˈwɜːrkt/</td></tr><tr><td class="k">d</td><td>dopo un suono sonoro (vocale, l, n, g, v…)</td><td>played /ˈpleɪd/</td></tr><tr><td class="k">ɪd</td><td>solo dopo t o d</td><td>wanted /ˈwɑːntɪd/</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Ieri ho lavorato.}}{{ex:We played soccer.|/wi ˈpleɪd ˈsɑːkər/|Abbiamo giocato a calcio.}}{{ex:She wanted to stay.|/ʃi ˈwɑːntɪd tə ˈsteɪ/|Voleva restare.}}
<h3>L'accento tonico</h3>
<p>Ogni parola inglese ha una sillaba pronunciata più forte delle altre: è l'<b>accento tonico</b>, e il trattino ˈ ti dice dove cade. Molte parole somigliano all'italiano, ma l'accento cade altrove: <i>photograph</i> si dice /ˈfoʊtəgræf/, non «fo-TO-graf» come «fotografo».</p>
<div class="tbl"><table><tr><th>Parola</th><th>In inglese</th><th>Non dire</th></tr><tr><td class="k">comfortable</td><td>/ˈkʌmftərbl/: accento all'inizio, tre sillabe</td><td>con l'accento verso la fine, come in «confortevole»</td></tr><tr><td class="k">photograph</td><td>/ˈfoʊtəgræf/: accento all'inizio</td><td>«fo-TO-graf», come in «fotografo»</td></tr><tr><td class="k">hotel</td><td>/hoʊˈtel/: accento alla fine, e la h si sente</td><td>«otel», senza h</td></tr><tr><td class="k">Wednesday</td><td>/ˈwenzdeɪ/: due sillabe, la d non si sente</td><td>in tre sillabe, leggendo la d</td></tr></table></div>
<div class="tip">Registra la tua voce mentre dici <i>hair / air</i>, <i>three / tree</i> e <i>cat / cut</i>, e confrontala con l'audio. Se ti escono uguali, esagera: un soffio ben udibile per la <i>h</i>, la lingua tra i denti per il <i>th</i>, la bocca spalancata per la /æ/.</div>`},

{ id:"articles", title:"2 · a, an e the: dove l'inglese e l'italiano non coincidono", blurb:"Gli articoli li usi già in italiano. Ecco i casi in cui l'inglese li mette o li toglie in modo diverso.", deck:"Presentarsi", body:`
<p>Anche l'italiano ha gli articoli (<i>un, una, il, la</i>…), quindi l'idea la conosci già e quasi sempre li usi bene. Gli errori arrivano nei pochi casi in cui le due lingue <b>non coincidono</b>. Eccoli.</p>
<h3>1. Professioni: con a / an</h3>
<p>In italiano dici «È ingegnere» o «Sono studente», senza articolo (oppure «Fa l'ingegnere», con l'articolo determinativo). In inglese, con una professione al singolare, l'articolo indeterminativo è <b>obbligatorio</b>.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|Sono studente. / Sono studentessa.}}{{ex:She's a nurse.|/ʃiz ə ˈnɜːrs/|È infermiera.}}{{ex:My brother is an engineer.|/maɪ ˈbrʌðər ɪz ən ˌendʒɪˈnɪr/|Mio fratello è ingegnere.}}
<h3>2. a o an? Decide il suono</h3>
<p>Anche in italiano l'articolo cambia davanti a una vocale (<i>una casa</i>, ma <i>un'amica</i>). In inglese però conta il <b>suono</b>, non la lettera: usa <b>an</b> quando la parola che segue comincia con un suono vocalico, anche se si scrive con una consonante, e <b>a</b> quando comincia con un suono consonantico, anche se si scrive con una vocale.</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (comincia col suono /j/)</td><td class="k">an hour (la h è muta)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (comincia col suono /w/)</td><td class="k">an MBA (comincia col suono /e/)</td></tr></table></div>
<p>Curiosamente, proprio <i>hour</i>, che in italiano è <i>ora</i>, ha una h muta. Quasi tutte le altre parole con la h, invece, la pronunciano, e quindi vogliono <b>a</b>: <i>a house</i>, <i>a hotel</i>.</p>
<h3>3. Parlare in generale: nessun articolo</h3>
<p>In italiano diciamo «<b>La</b> vita è dura» o «Adoro <b>i</b> cani». In inglese, quando parli di qualcosa in generale (idee astratte, nomi non numerabili o plurali), <b>non c'è articolo</b>. Lo vedrai meglio più avanti.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vita è dura.}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Adoro i cani.}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Qui il caffè è caro.}}
<h3>4. Parti del corpo: possessivo, non «the»</h3>
<p>In italiano diciamo «Mi fa male <b>la</b> testa» o «Lavati <b>le</b> mani»: il pronome (<i>mi, ti</i>) dice già di chi sono. L'inglese non ha questo pronome e usa invece l'<b>aggettivo possessivo</b>: <i>my, your, his, her</i>.</p>
{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|Mi fa male la testa.}}{{ex:Wash your hands.|/ˈwɑːʃ jʊr ˈhændz/|Lavati le mani.}}{{ex:I brush my teeth every day.|/aɪ ˈbrʌʃ maɪ ˈtiːθ ˈevri ˈdeɪ/|Mi lavo i denti tutti i giorni.}}
<h3>Come in italiano: the</h3>
<p><i>The</i> funziona come <i>il, la, i, le</i>: per una cosa già nominata o che tutti e due sapete qual è. Una differenza però c'è: l'italiano mette l'articolo davanti al possessivo (<i>la mia famiglia</i>, <i>il tuo libro</i>), l'inglese mai: <i>my family</i>, <i>your book</i>.</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|Ho un cane. Il cane è adorabile.}}{{ex:I like my job.|/aɪ ˈlaɪk maɪ ˈdʒɑːb/|Mi piace il mio lavoro.}}
<div class="tip">Gli errori più tipici: <b>She is doctor.</b> (✗) → <b>She is a doctor.</b> (✓), <b>The life is hard.</b> (✗) → <b>Life is hard.</b> (✓) e <b>the my family</b> (✗) → <b>my family</b> (✓).</div>`},

{ id:"be", title:"3 · Il verbo be: essere… e a volte avere", blurb:"Essere in inglese è be, ma be prende anche il posto di avere: I'm 25, I'm hungry.", deck:"Presentarsi", body:`
<p>«Essere» in inglese si dice <b>be</b>, e fin qui è facile: un solo verbo, come in italiano. La sorpresa è che in molte espressioni in cui l'italiano usa <b>avere</b> («ho fame», «ho 25 anni»), l'inglese usa <i>be</i>. E la frase ha sempre bisogno di un soggetto.</p>
<h3>Le forme di be</h3>
<div class="tbl"><table><tr><th>Soggetto</th><th>be</th><th>Forma contratta</th></tr><tr><td class="k">I</td><td>am</td><td>I'm</td></tr><tr><td class="k">you / we / they</td><td>are</td><td>you're, we're, they're</td></tr><tr><td class="k">he / she / it</td><td>is</td><td>he's, she's, it's</td></tr></table></div>
{{ex:She's a teacher.|/ʃiz ə ˈtiːtʃər/|È insegnante.}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|È al lavoro.}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Tutto bene?}}
<h3>Dove l'italiano dice «avere»</h3>
<p>L'età e molte sensazioni fisiche si dicono con <i>be</i> + aggettivo. <i>I have 25 years</i> o <i>I have hungry</i> sono tra gli errori più riconoscibili di chi parla italiano.</p>
<div class="tbl"><table><tr><th>Italiano</th><th>Inglese</th></tr><tr><td>Ho 25 anni.</td><td class="k">I'm 25. / I'm 25 years old.</td></tr><tr><td>Ho fame. / Ho sete.</td><td class="k">I'm hungry. / I'm thirsty.</td></tr><tr><td>Ho freddo. / Ho caldo.</td><td class="k">I'm cold. / I'm hot.</td></tr><tr><td>Ho sonno. / Ho paura.</td><td class="k">I'm sleepy. / I'm scared.</td></tr><tr><td>Hai ragione.</td><td class="k">You're right.</td></tr></table></div>
<p>E al contrario: «Sono d'accordo» non è <i>I'm agree</i>. <i>Agree</i> è già un verbo, quindi niente <i>be</i>: <i>I agree</i>.</p>
{{ex:I'm 25 years old.|/aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/|Ho 25 anni.}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Ho fame.}}{{ex:You're right.|/jʊr ˈraɪt/|Hai ragione.}}{{ex:I agree.|/aɪ əˈgriː/|Sono d'accordo.}}
<h3>Il soggetto c'è sempre</h3>
<p>In italiano «È tardi» o «È a casa» non hanno bisogno di soggetto: il verbo dice già tutto. In inglese il soggetto è obbligatorio, e se non ce n'è uno si mette <b>it</b>.</p>
{{ex:It's late.|/ɪts ˈleɪt/|È tardi.}}{{ex:He's at home.|/hiz ət ˈhoʊm/|È a casa.}}
<h3>Be e gli altri verbi non si mescolano</h3>
<p>Con <i>like, live, work</i> e gli altri verbi non c'è <i>be</i>: <i>I like coffee</i>, non <i>I am like coffee</i>. Nelle frasi negative e nelle domande, <i>be</i> non vuole <i>do</i>; gli altri verbi sì. Chiediti: il verbo principale è <i>be</i>? Allora niente <i>do</i>. È un altro verbo, come <i>like</i> o <i>work</i>? Allora serve <i>do</i>.</p>
<div class="tbl"><table><tr><th></th><th>be</th><th>altri verbi</th></tr><tr><td>Affermativa</td><td class="k">I'm tired.</td><td class="k">I like coffee.</td></tr><tr><td>Negativa</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Domanda</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>he / she / it: -s e does</h3>
<p>Con <i>he, she, it</i> (o con un nome singolare), al presente il verbo prende la <b>-s</b>: è la terza persona singolare. Nelle negative e nelle domande arriva <b>does</b>, e il verbo perde la -s. Attenzione al <i>Lei</i> di cortesia: in italiano usa la terza persona («Lei lavora»), ma in inglese <i>you</i> non prende mai la -s: <i>you work</i>, <i>he works</i>.</p>
{{ex:My brother works in Milan.|/maɪ ˈbrʌðər ˈwɜːrks ɪn mɪˈlɑːn/|Mio fratello lavora a Milano.}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|Lui parla inglese?}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|Lei non mangia carne.}}
<div class="tip">Errori tipici: <b>I have 25 years</b> → <b>I'm 25</b>; <b>Is late</b> → <b>It's late</b>; <b>She work</b> → <b>She works</b>; <b>I'm agree</b> → <b>I agree</b>.</div>`},

{ id:"polite", title:"4 · Chiedere con gentilezza", blurb:"Can you → Could you → Would you mind. In inglese, Give me suona brusco.", deck:"Sopravvivenza 1", body:`
<p>In inglese <b>you</b> vale per <i>tu</i>, per <i>Lei</i> e per <i>voi</i>. La cortesia non sta nel pronome, ma nel <b>modo in cui chiedi</b>: con <i>could</i>, <i>would</i> e <i>please</i>.</p>
<h3>La scala della cortesia</h3>
<div class="tbl"><table><tr><th>Espressione</th><th>Come suona</th><th>Quando</th></tr><tr><td class="k">Give me ~.</td><td>Un ordine diretto; suona brusco</td><td>Meglio evitarlo</td></tr><tr><td class="k">Can you ~?</td><td>Richiesta informale</td><td>Amici, negozi</td></tr><tr><td class="k">Could you ~?</td><td>Richiesta gentile</td><td>Sconosciuti, lavoro</td></tr><tr><td class="k">Would you mind ~ing?</td><td>Molto gentile</td><td>Favori grandi, capi</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|Potresti aiutarmi? / Potrebbe aiutarmi?}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|Potresti ripetere?}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|Ti dispiacerebbe farci una foto?}}
<h3>Per ordinare: Can I get…? / I'd like…</h3>
<p>Al bar, in italiano, puoi dire semplicemente «Un caffè!» o «Mi dai un caffè?», e nessuno si offende. In inglese la traduzione letterale, <i>Give me a coffee</i> o <i>I want a coffee</i>, suona brusca o infantile. In un negozio o in un bar si dice così:</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|Mi fai un caffellatte, per favore?}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|Vorrei un posto vicino al finestrino.}}
<p>Attenzione: negli Stati Uniti un <i>latte</i> è un caffellatte. Se vuoi un bicchiere di latte, chiedi <i>milk</i>.</p>
<h3>Would you mind…? funziona come «Ti dispiace…?»</h3>
<p><i>Mind</i> significa «dispiacere, dare fastidio». Come in italiano, se ti chiedono «Ti dispiace…?» e non ti dispiace, rispondi <b>no</b>.</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|Ti dispiacerebbe aprire la finestra?}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|No, figurati. (Certo che la apro.)}}
<div class="tip"><b>Please</b> e <b>thank you</b> non sono mai di troppo: basta aggiungere <i>please</i> alla fine e la frase suona molto più gentile. Conta anche l'intonazione: se sale alla fine è una richiesta, se scende è un ordine.</div>`},

{ id:"tense", title:"5 · Ripasso dei tempi: presente, passato e futuro", blurb:"Abitudini al present simple, quello che succede ora al present continuous, progetti con going to. E did nelle domande sul passato.", deck:"Due chiacchiere", body:`
<p>«Lavoro», «sto lavorando», «ho lavorato», «lavorerò»: l'italiano ha tempi simili a quelli dell'inglese. Cambia <b>quando</b> si usa ciascuno, e cambiano gli <b>ausiliari</b> delle domande e delle negazioni. Ripassa i cinque più usati in una conversazione.</p>
<h3>Present simple o present continuous</h3>
<div class="tbl"><table><tr><th>Forma</th><th>Uso</th><th>Esempio</th></tr><tr><td class="k"><i>present simple</i></td><td>abitudini e fatti</td><td>She drinks coffee every morning.</td></tr><tr><td class="k">be + forma in -ing (<i>present continuous</i>)</td><td>quello che succede ora / progetti vicini già fissati</td><td>I'm drinking coffee right now.</td></tr></table></div>
<p>L'italiano ha <i>stare</i> + gerundio («sto lavorando»), ma lo usa molto meno: «Che fai?» va benissimo anche per «adesso». In inglese, per quello che succede adesso si usa il <i>present continuous</i>: <i>What are you doing?</i> (<i>What do you do?</i> chiede che lavoro fai). E non dimenticare la <b>-s</b> con <i>he, she, it</i>.</p>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Lavora in banca.}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|Oggi lavoro da casa.}}{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Che stai facendo?}}
<h3>Past simple</h3>
<p>Per un'azione finita in un momento preciso (<i>yesterday, last week</i>) l'inglese usa il <i>past simple</i>, anche dove l'italiano dice «sono andato» o «ho visto»: <i>I went</i>, <i>I saw</i>. I verbi regolari prendono <b>-ed</b>, ma molti dei più usati sono irregolari: <i>go → went, eat → ate, see → saw, have → had, get → got</i>. Nelle domande e nelle negazioni arriva <b>did</b>, e il verbo torna alla forma base: <i>Did you go?</i>, non <i>Did you went?</i></p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|Lo scorso fine settimana ho fatto una gita al mare.}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|È stato divertente?}}{{ex:I didn't see it.|/aɪ ˈdɪdnt ˈsiː ɪt/|Non l'ho visto.}}
<h3>Futuro: will o going to</h3>
<div class="tbl"><table><tr><th></th><th>Quando</th><th>Esempio</th></tr><tr><td class="k">will</td><td>decisione presa sul momento, promessa</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>progetto che avevi già</td><td>I'm going to visit Florence next month.</td></tr></table></div>
<p>L'italiano non ha un futuro con «andare a»: per i progetti usa il presente («Domani vado a Roma») o il futuro. In inglese, per un progetto già deciso, si usa <i>be going to</i> o il <i>present continuous</i>: <i>I'm going to visit Rome</i>, <i>I'm working tomorrow</i>. Non <i>I go to Rome tomorrow</i>.</p>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Ti chiamo più tardi.}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|Farò un corso di cucina.}}
<p>Nel parlato <i>going to</i> si sente spesso come <b>gonna</b>. Per iscritto, scrivi <i>going to</i>.</p>
<div class="tip">A <i>How was your weekend?</i> rispondi al passato; a <i>Any plans for the weekend?</i>, con <i>going to</i>. Usare lo stesso tempo della domanda è il trucco più semplice.</div>`},

{ id:"prep", title:"6 · Le preposizioni in / on / at", blurb:"«A Roma» è in Rome, «alle 7» è at 7: in per gli spazi ampi, on per giorni e superfici, at per un punto preciso.", deck:"Numeri, ore e date", body:`
<p>Le preposizioni italiane e quelle inglesi non si corrispondono una a una: «a Roma» è <i>in Rome</i>, «alle 7» è <i>at 7</i>, «sul tavolo» è <i>on the table</i>. Per il tempo e per il luogo l'inglese usa soprattutto tre preposizioni. La regola generale: <b>in</b> per spazi e periodi ampi (dentro qualcosa), <b>on</b> per superfici e giorni, <b>at</b> per un punto preciso.</p>
<h3>Tempo</h3>
<div class="tbl"><table><tr><th>Preposizione</th><th>Con</th><th>Esempi</th></tr><tr><td class="k">in</td><td>mesi, anni, stagioni, parti del giorno</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>giorni della settimana, date, giorni particolari</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>ore precise e momenti</td><td>at 7, at noon, at night</td></tr></table></div>
<p>Attenzione: in italiano diciamo «lunedì» o «il 3 maggio», senza preposizione. In inglese ci vuole <b>on</b>, senza articolo: <i>on Monday</i>, <i>on May 3rd</i>.</p>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|Ci vediamo venerdì.}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|La riunione è alle tre.}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|Sono del 1998.}}
<h3>Luogo</h3>
<div class="tbl"><table><tr><th>Preposizione</th><th>Idea</th><th>Esempi</th></tr><tr><td class="k">in</td><td>dentro uno spazio; città e paesi</td><td>in the car, in Rome, in Italy</td></tr><tr><td class="k">on</td><td>sopra una superficie; strade; mezzi pubblici</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>un punto preciso; un posto per quello che ci fai</td><td>at the station, at work, at home</td></tr></table></div>
<p>La trappola più tipica: «a Roma» non è <i>at Rome</i>, ma <i>in Rome</i>. Con città e paesi si usa sempre <i>in</i>. E «arrivare a Milano» è <i>arrive in Milan</i> (con un posto preciso, <i>arrive at the airport</i>), mai <i>arrive to</i>.</p>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|Sono sull'autobus.}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|Vediamoci alla stazione.}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Sono a casa.}}
<h3>Nessuna preposizione</h3>
<p>Con <b>next, last, this, every, tomorrow, yesterday</b> non c'è preposizione, proprio come in italiano «la settimana prossima»: <i>next week</i>, mai <i>on next week</i>.</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|Ci vediamo la settimana prossima.}}
<h3>Verbi con una preposizione diversa</h3>
<div class="tbl"><table><tr><th>Italiano</th><th>Inglese</th></tr><tr><td>dipendere da</td><td class="k">depend on (non <i>of</i> o <i>from</i>)</td></tr><tr><td>sposarsi con qualcuno</td><td class="k">marry someone (senza preposizione)</td></tr><tr><td>ascoltare la musica</td><td class="k">listen to music</td></tr><tr><td>aspettare l'autobus</td><td class="k">wait for the bus</td></tr><tr><td>essere bravo in qualcosa</td><td class="k">be good at something</td></tr></table></div>
<div class="tip">Eccezioni utili: <b>at night</b>, ma <b>in the morning / afternoon / evening</b>. Il fine settimana è <b>on the weekend</b> negli Stati Uniti (<i>at the weekend</i> in inglese britannico).</div>`},

{ id:"smalltalk", title:"7 · Due chiacchiere (small talk)", blurb:"How are you? è un saluto, non una domanda. Argomenti sicuri e argomenti da evitare.", deck:"Due chiacchiere", body:`
<p>Nei paesi di lingua inglese è normale scambiare due parole con gli sconosciuti: in ascensore, in fila alla cassa, prima di una riunione. Non è una conversazione profonda, ma una <b>chiacchierata breve per creare un clima piacevole</b>: in inglese si chiama <i>small talk</i>. Ti servirà anche nei colloqui di lavoro e all'orale degli esami Cambridge (B1 Preliminary, B2 First), che cominciano proprio con domande di questo tipo.</p>
<h3>How are you? è un saluto</h3>
<p>Nessuno ti sta chiedendo davvero come stai: è come un «Come va?» detto di passaggio. La cosa educata è rispondere in breve e <b>ricambiare la domanda</b>. Non serve raccontare la tua giornata.</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|Ciao, come va?}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|Abbastanza bene! E tu?}}
<h3>Argomenti sicuri e argomenti da evitare</h3>
<div class="tbl"><table><tr><th>Sicuri</th><th>Meglio evitarli con chi hai appena conosciuto</th></tr><tr><td>il tempo, i programmi per il fine settimana o per le vacanze</td><td>l'età, se ha un partner o dei figli</td></tr><tr><td>il cibo, i ristoranti, i viaggi</td><td>commenti sull'aspetto fisico o sul peso</td></tr><tr><td>serie, film, sport (negli Stati Uniti il calcio è <i>soccer</i>)</td><td>quanto guadagna, quanto ha pagato la casa</td></tr><tr><td>il lavoro (senza scendere nei dettagli), il quartiere</td><td>politica, religione</td></tr></table></div>
<p>In Italia è normale chiedere subito della famiglia o commentare l'aspetto di qualcuno con affetto («Ti vedo in forma! Hai perso peso?»). In inglese, con una persona appena conosciuta, suona troppo personale.</p>
<h3>Come mandare avanti la conversazione</h3>
<p>Risposta + <b>un dettaglio in più</b> + <b>una domanda di ritorno</b>. Con questi tre passi la conversazione non si spegne.</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|È stato bellissimo! Ho fatto un'escursione. E tu?}}
<p>E reagisci: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Come chiudere con naturalezza</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|Bene, adesso devo andare.}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|È stato un piacere parlare con te.}}
<div class="tip">«Anch'io» è <b>Me too</b>, ma «Neanch'io» è <b>Me neither</b>: <i>I don't like horror movies.</i> → <i>Me neither.</i> (non <i>Me too</i>). Nell'inglese parlato degli Stati Uniti si sente anche <i>Me either</i>, ma la forma standard è <i>Me neither</i>.</div>`},

{ id:"phrasal", title:"8 · Introduzione ai phrasal verb", blurb:"Verbo + particella = un significato nuovo. Dove tu diresti enter o continue, un madrelingua dice come in o go on.", deck:"Phrasal verbs", body:`
<p>Un <i>phrasal verb</i> (verbo frasale) è un <b>verbo + una particella</b> come <i>up, out, off, on</i>, che insieme hanno un significato nuovo. Per chi parla italiano c'è una trappola: quasi sempre esiste un verbo di origine latina simile all'italiano (<i>enter, continue, discover</i>), e lo scegli perché lo riconosci. È corretto, ma in una conversazione suona formale o rigido. I madrelingua di solito usano il <i>phrasal verb</i>.</p>
<div class="tbl"><table><tr><th>Verbo formale (parola trasparente)</th><th>Phrasal verb (conversazione)</th><th>Significato</th></tr><tr><td>enter</td><td class="k">come in</td><td>entrare</td></tr><tr><td>continue</td><td class="k">go on</td><td>continuare, andare avanti</td></tr><tr><td>discover</td><td class="k">find out</td><td>scoprire, venire a sapere</td></tr><tr><td>postpone</td><td class="k">put off</td><td>rimandare</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>sopportare</td></tr><tr><td>extinguish</td><td class="k">put out</td><td>spegnere (un fuoco)</td></tr></table></div>
<h3>La particella dà un indizio</h3>
<p><b>up</b> indica spesso «verso l'alto, fino in fondo»; <b>out</b>, «verso fuori, fino alla fine»; <b>off</b>, «staccarsi, fermarsi»; <b>on</b>, «sopra, continuare». Qui l'italiano ti aiuta: anche noi diciamo «andare avanti», «tirare fuori», «buttare giù».</p>
{{ex:Come in, please.|/ˈkʌm ˈɪn ˈpliːz/|Entra, prego.}}{{ex:I grew up in Naples.|/aɪ ˈgruː ˈʌp ɪn ˈneɪplz/|Ho passato l'infanzia a Napoli.}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|Abbiamo finito il latte.}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|Spegni il cellulare, per favore.}}
<h3>Il pronome va in mezzo</h3>
<p>Molti <i>phrasal verb</i> con un complemento oggetto si possono separare. Un nome può stare prima o dopo la particella, ma un <b>pronome</b> (<i>it, them, me, you</i>) va <b>sempre in mezzo</b>.</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|Accendi la luce. (Vanno bene tutte e due.)}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|Accendilo. (Mai: turn on it)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|Passo a prenderti alle sette.}}
<h3>Phrasal verb che non si separano</h3>
<p>Quelli con una preposizione, come <i>look after</i> (badare a, prendersi cura di), <i>look for</i> (cercare) o <i>get along with</i> (andare d'accordo con), non si separano: <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">Impara ogni <i>phrasal verb</i> come se fosse una parola sola, dentro una frase d'esempio: così la posizione del pronome ti verrà naturale. Per capire serie e film sono indispensabili: lì non sentirai quasi mai <i>extinguish</i>, ma <i>put out</i> sì.</div>`},

{ id:"numbers", title:"9 · Numeri, ore e prezzi", blurb:"Punto decimale, billion = un miliardo, 13 contro 30 e come si leggono prezzi, anni e date.", deck:"Numeri, ore e date", body:`
<p>I numeri compaiono in ogni viaggio e in ogni riunione. La buona notizia: anche l'inglese raggruppa le cifre a tre a tre, come l'italiano. Le differenze stanno nei segni, nell'accento tonico da 13 a 19 e nel modo di leggere ore, prezzi, anni e date.</p>
<h3>Punto decimale e virgola delle migliaia</h3>
<p>In inglese i decimali si separano con il <b>punto</b> e le migliaia con la <b>virgola</b>: esattamente il contrario dell'italiano.</p>
<div class="tbl"><table><tr><th>In inglese</th><th>In italiano</th><th>Si legge</th></tr><tr><td class="k">3.5</td><td>3,5</td><td>three point five</td></tr><tr><td class="k">1,500</td><td>1.500</td><td>one thousand five hundred</td></tr><tr><td class="k">2,000,000</td><td>2.000.000</td><td>two million</td></tr></table></div>
<h3>Billion e miliardo</h3>
<p>Qui l'italiano ti aiuta: <i>one billion</i> è <b>un miliardo</b>, mille milioni. Fai attenzione solo alla parola italiana «bilione», rara, che vuol dire mille miliardi: in inglese è <i>one trillion</i>.</p>
<div class="tbl"><table><tr><th>Inglese</th><th>Italiano</th></tr><tr><td class="k">one thousand (1,000)</td><td>mille</td></tr><tr><td class="k">one million</td><td>un milione</td></tr><tr><td class="k">one billion</td><td>un miliardo</td></tr><tr><td class="k">one trillion</td><td>mille miliardi (un bilione)</td></tr></table></div>
{{ex:three point five|/ˈθriː ˈpɔɪnt ˈfaɪv/|3,5 (tre virgola cinque)}}{{ex:one billion dollars|/ˈwʌn ˈbɪljən ˈdɑːlərz/|un miliardo di dollari}}
<h3>-teen e -ty</h3>
<p>Da 13 a 19 l'accento tonico cade <b>alla fine</b> (thir<b>teen</b>); in 30, 40, 50… cade <b>all'inizio</b> (<b>thir</b>ty). Nell'inglese americano la <i>t</i> di <i>thirty</i> suona spesso morbida, quasi una «d»: l'importante è l'accento all'inizio.</p>
{{ex:thirteen / thirty|/ˌθɜːrˈtiːn/ /ˈθɜːrti/|13 / 30}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|15 / 50}}
<h3>L'ora</h3>
<p>Il modo più facile è leggere ore e minuti così come sono. Dal minuto 1 al 9 si dice «oh».</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|Sono le sette e quindici.}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|Sono le nove e cinque.}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|Sono le dieci e un quarto.}}
<h3>Prezzi, anni e date</h3>
<p>I prezzi si leggono come due numeri: $4.99 è <i>four ninety-nine</i>. Con gli euro funziona allo stesso modo: 25 € si legge <i>twenty-five euros</i>, e in inglese si scrive <i>€25</i>, con il simbolo davanti. Gli anni si leggono a due a due: 19 | 90, <i>nineteen ninety</i>, non «mille novecento novanta». Le date si scrivono con il mese davanti (<i>November 15</i>) e si leggono con il numero ordinale (<i>November fifteenth</i>).</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|Costa 4,99 dollari.}}{{ex:nineteen ninety|/ˌnaɪnˈtiːn ˈnaɪnti/|l'anno 1990}}{{ex:November fifteenth|/noʊˈvembər ˌfɪfˈtiːnθ/|il 15 novembre}}
<div class="tip">Negli Stati Uniti la data abbreviata è <b>mese/giorno</b>: 11/5 è il 5 novembre, non l'11 maggio. Se c'è rischio di confusione, scrivi il mese in lettere: <i>November 5</i>.</div>`},

{ id:"email", title:"10 · E-mail in inglese", blurb:"Saluto → scopo → richiesta → chiusura. Brevi, chiare e senza le formule italiane tradotte.", deck:"Lavoro ed e-mail", body:`
<p>Un'e-mail di lavoro in inglese è <b>breve, diretta e cordiale</b>. In italiano usiamo più formule («Gentile dottore…», «In allegato Le invio…», «Resto in attesa di un Suo cortese riscontro»), e tradotte parola per parola suonano rigide o strane. Usa le formule tipiche dell'inglese.</p>
<h3>Struttura di base</h3>
<div class="tbl"><table><tr><th>Parte</th><th>Esempio</th></tr><tr><td>Saluto</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Prima riga (saluto e scopo)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Corpo (richiesta)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Chiusura</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Formula di congedo</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>Saluto: Hi è la norma</h3>
<p>Nelle aziende americane <b>Hi + nome</b> va bene anche con qualcuno a cui scrivi per la prima volta. <i>Dear</i> si usa nei casi molto formali, e <i>Dear Sir or Madam</i> è molto meno comune del nostro «Gentile cliente»: usalo solo se davvero non conosci il nome. E attenzione ai titoli: <i>Dr.</i> si usa solo per i medici e per chi ha un dottorato di ricerca, non per qualsiasi laureato. Il nostro «Gentile dottore» diventa quasi sempre <i>Dear Mr. …</i> o <i>Dear Ms. …</i>.</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|Spero che stia bene.}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|Le scrivo per dare seguito alla nostra riunione.}}
<h3>Formule italiane e il loro equivalente naturale</h3>
<div class="tbl"><table><tr><th>In italiano</th><th>In inglese</th></tr><tr><td>Gentile dott. Rossi,</td><td class="k">Dear Mr. Rossi, / Hi Marco,</td></tr><tr><td>In allegato Le invio la relazione.</td><td class="k">I've attached the report.</td></tr><tr><td>Resto in attesa di un Suo riscontro.</td><td class="k">I look forward to hearing from you.</td></tr><tr><td>Resto a disposizione per qualsiasi chiarimento.</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Cordiali saluti,</td><td class="k">Best regards,</td></tr></table></div>
<p>Attenzione al calco più comune: «Resto in attesa della Sua risposta», tradotto alla lettera, diventa <i>I stay waiting your answer</i>, che in inglese non esiste.</p>
<h3>Chiedi con gentilezza e dai una data chiara</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|Potrebbe inviarmi la relazione entro giovedì?}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|Grazie per la pazienza.}}
<p><i>ASAP</i> può suonare come una pressione. Se puoi, dai una scadenza con <b>by + data</b>.</p>
<div class="tip">Non serve cominciare sempre con <i>Sorry for the late reply</i>. <b>Thanks for your patience</b> è gentile e positivo, senza scusarti. E per salutare di venerdì: <b>Have a great weekend!</b></div>`},

{ id:"idioms", title:"11 · Espressioni idiomatiche e slang", blurb:"Frasi che non si capiscono parola per parola. Quali somigliano all'italiano e quando usarle.", deck:"Espressioni idiomatiche", body:`
<p>Un'espressione idiomatica è una frase il cui significato non si ricava dalle singole parole: <i>a piece of cake</i> non parla di torte, ma di una cosa facilissima (un gioco da ragazzi). Se vuoi capire serie e film senza sottotitoli, ti servono.</p>
<h3>Immagina la scena</h3>
<p>Quasi tutte si ricordano meglio se ti immagini la scena.</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|È un gioco da ragazzi.}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|Costa un occhio della testa.}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|Sono tutt'orecchi.}}
<h3>Simili all'italiano… o no</h3>
<div class="tbl"><table><tr><th>Inglese</th><th>Italiano</th></tr><tr><td class="k">Kill two birds with one stone</td><td>Prendere due piccioni con una fava (quasi uguale, ma in inglese c'è un sasso)</td></tr><tr><td class="k">Speak of the devil!</td><td>Lupus in fabula! / Parli del diavolo…</td></tr><tr><td class="k">When pigs fly</td><td>Quando gli asini voleranno</td></tr><tr><td class="k">It's raining cats and dogs</td><td>Piove a catinelle</td></tr></table></div>
<p>E al contrario: molte espressioni italiane <b>non si traducono alla lettera</b>. «Mi stai prendendo in giro» è <i>You're pulling my leg</i>; «non è il mio genere» è <i>It's not my cup of tea</i>; «in bocca al lupo» è <i>Break a leg!</i> (o semplicemente <i>Good luck!</i>). Se traduci parola per parola, nessuno ti capirà.</p>
{{ex:You're pulling my leg.|/jʊr ˈpʊlɪŋ maɪ ˈleg/|Mi stai prendendo in giro.}}
<h3>Espressione idiomatica o slang</h3>
<p>Le <b>espressioni idiomatiche</b> esistono da tempo e le usano tutti, anche al lavoro (<i>Let's call it a day</i>). Lo <b>slang</b> è il gergo dei giovani e si usa tra amici (<i>No cap</i>, <i>That song slaps</i>). Lo slang cambia in fretta e, in bocca a un adulto, può sembrare forzato.</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|Per oggi basta così. (Va bene anche in una riunione.)}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|Sul serio, è la pizza più buona del mondo. (Solo tra amici.)}}
<div class="tip">Non riempire il tuo inglese di espressioni idiomatiche: una per conversazione, al momento giusto, fa un'ottima impressione. Troppe suonano da libro di testo.</div>`}
];

exports.CHECKS = {
  pron: [
    ["Quale parola significa «pecora»?", ["ship","sheep","shape","cheap"], 1, "\"Sheep\" ha la i lunga e tesa /iː/. \"Ship\", con la /ɪ/ rilassata, significa «nave»: cambia la qualità della vocale, non solo la lunghezza."],
    ["Come si pronuncia \"milk\"?", ["Con una vocale alla fine: «milche»","Senza la k: «mil»","In due sillabe: «mi-lk»","Con la k finale e nessuna vocale dopo: /ˈmɪlk/"], 3, "La parola finisce secca sulla k, senza nessuna vocale dopo: /ˈmɪlk/, una sola sillaba."],
    ["Dove cade l'accento tonico di \"comfortable\"?", ["Verso la fine, come in «confortevole»","Su \"for\"","All'inizio: /ˈkʌmftərbl/","Nessuna sillaba è accentata"], 2, "/ˈkʌmftərbl/: l'accento cade all'inizio e la parola si riduce a tre sillabe."]
  ],
  articles: [
    ["I'm ___ engineer. Che cosa va nello spazio?", ["a","an","the","(niente)"], 1, "\"Engineer\" comincia con un suono vocalico, quindi ci vuole \"an\". E con le professioni l'articolo è obbligatorio, anche se in italiano diciamo «è ingegnere»."],
    ["Come si dice «La vita è dura»?", ["The life is hard.","A life is hard.","Life is hard.","The lives are hard."], 2, "Quando parli di qualcosa in generale o di un'idea astratta, l'inglese non usa l'articolo: \"Life is hard\"."],
    ["Come si dice «Mi fa male la testa»?", ["The head hurts me.","Me hurts the head.","Hurts my head.","My head hurts."], 3, "Con le parti del corpo l'inglese usa l'aggettivo possessivo (\"my\", \"your\", \"her\"), non \"the\". E la testa è il soggetto della frase: \"My head hurts\"."]
  ],
  be: [
    ["Come si dice «Ho 25 anni»?", ["I have 25 years.","I'm 25.","I've 25 years.","I'm having 25."], 1, "L'età si dice con be: \"I'm 25\" (o \"I'm 25 years old\"). Mai con \"have\"."],
    ["Come si dice «Mia sorella abita a Lima»?", ["My sister live in Lima.","My sister is live in Lima.","My sister living in Lima.","My sister lives in Lima."], 3, "\"My sister\" equivale a \"she\" (terza persona singolare), quindi il verbo prende la -s: \"lives\". E senza \"is\"."],
    ["Ti chiedono \"Are you hungry?\" e non hai fame. Che cosa rispondi?", ["No, I'm not.","No, I don't.","No, I amn't.","No, I haven't."], 0, "La domanda usa be, quindi anche la risposta: \"No, I'm not\"."]
  ],
  polite: [
    ["Qual è il modo più gentile di chiedere qualcosa a uno sconosciuto?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "\"Could you…?\" è il modo base per chiedere con gentilezza. \"Give me\" suona come un ordine."],
    ["Ti chiedono \"Would you mind opening the window?\" Quale risposta significa «certo, la apro»?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "\"Mind\" = dispiacere, dare fastidio. Come con «Ti dispiace…?», rispondere «No» vuol dire che lo fai volentieri."],
    ["Quale forma del verbo va dopo \"Would you mind\"?", ["Forma base (open)","to + forma base (to open)","Passato (opened)","Forma in -ing (opening)"], 3, "Dopo \"mind\" ci vuole la forma in -ing: \"Would you mind waiting?\""]
  ],
  tense: [
    ["Come si dice «Bevo il caffè tutte le mattine» (è un'abitudine)?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Le abitudini vanno al present simple. Il present continuous vuol dire «lo sto bevendo adesso»."],
    ["Vedi che il tuo amico è senza soldi e decidi sul momento: «Pago io!»", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Una decisione presa sul momento vuole \"will\". \"Going to\" è per i progetti che avevi già."],
    ["Scegli la domanda corretta: «Hai partecipato alla festa?»", ["Did you went to the party?","Did you go to the party?","Do you went to the party?","Went you to the party?"], 1, "Nelle domande sul passato è \"did\" a portare il passato: il verbo resta alla forma base (\"go\")."]
  ],
  prep: [
    ["«Vediamoci alle 7» = Let's meet ___ 7.", ["in","at","on","to"], 1, "Con un'ora precisa ci vuole \"at\"."],
    ["«Lunedì» = ___ Monday", ["on","in","at","by"], 0, "Con i giorni e le date ci vuole \"on\", anche se in italiano diciamo semplicemente «lunedì», senza preposizione."],
    ["Qual è la frase corretta?", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Con \"next\", \"last\", \"this\" ed \"every\" non c'è preposizione."]
  ],
  smalltalk: [
    ["Al bar ti dicono \"How are you today?\" Qual è la risposta più naturale?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "\"How are you?\" è un saluto. Rispondi in breve e ricambia la domanda."],
    ["Quale domanda è meglio evitare con qualcuno che hai appena conosciuto?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "In inglese chiedere l'età a una persona appena conosciuta può sembrare maleducato."],
    ["Qualcuno dice \"I don't like horror movies.\" Come dici «Neanch'io»?", ["Me too.","So do I.","Me neither.","Me also."], 2, "«Neanch'io» è \"Me neither\" (o \"Neither do I\"). \"Me too\" vuol dire «anch'io»."]
  ],
  phrasal: [
    ["«Puoi spegnerlo?» Qual è la frase corretta?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "Il pronome (\"it\") va in mezzo al phrasal verb: \"turn it off\"."],
    ["Che cosa significa \"run out of\"?", ["Uscire di corsa","Rimanere senza, finire","Scappare da un posto","Arrivare tardi"], 1, "\"We ran out of milk.\" = Abbiamo finito il latte."],
    ["Come si dice «Rimandiamo la riunione alla settimana prossima»?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "\"Put off\" = rimandare. \"Put on\" vuol dire «indossare» o «accendere»; \"put out\", «spegnere (un fuoco)»."]
  ],
  numbers: [
    ["Come si legge 3.5 in inglese?", ["three comma five","three point five","three and five","thirty-five"], 1, "In inglese i decimali si scrivono e si leggono con il punto: \"three point five\"."],
    ["Dove cade l'accento tonico in \"thirteen\"?", ["Su tutte e due le sillabe allo stesso modo","Non ha accento tonico","Su teen (alla fine)","Su thir (all'inizio)"], 2, "I numeri in -teen hanno l'accento alla fine: /ˌθɜːrˈtiːn/. \"Thirty\" lo ha all'inizio: /ˈθɜːrti/."],
    ["Che cosa significa \"one billion\"?", ["un miliardo","un bilione (mille miliardi)","cento milioni","un milione"], 0, "\"Billion\" = un miliardo (mille milioni). Il «bilione» italiano, raro, è \"one trillion\"."]
  ],
  email: [
    ["Scrivi per la prima volta a Jenny Park, una cliente. Qual è il saluto più adatto?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "Nelle e-mail di lavoro negli Stati Uniti \"Hi\" + nome è la scelta più sicura. Se il contesto è molto formale: \"Dear Ms. Park,\""],
    ["Come dici con naturalezza «Resto in attesa di un Suo riscontro»?", ["I stay waiting your answer.","I look forward to hearing from you.","I wait your response.","I remain attentive."], 1, "\"I look forward to hearing from you\" è la formula abituale. \"I stay waiting your answer\" è il calco parola per parola di «resto in attesa» e in inglese non funziona."],
    ["Quale frase chiede una scadenza con gentilezza?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "\"Could you…?\" + \"by\" + data: è gentile e insieme chiarisce la scadenza."]
  ],
  idioms: [
    ["Che cosa significa \"The test was a piece of cake\"?", ["L'esame è stato facilissimo.","Abbiamo mangiato una torta durante l'esame.","L'esame è stato difficilissimo.","L'esame mi è andato malissimo."], 0, "\"A piece of cake\" = un gioco da ragazzi."],
    ["Che cosa significa \"I'm feeling under the weather\"?", ["Fa brutto tempo.","Sono all'aperto.","Non mi sento molto bene.","Ho preso la pioggia."], 2, "Il tempo non c'entra: vuol dire che non ti senti bene."],
    ["Quale frase stona di più mentre presenti una relazione al tuo capo?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "\"No cap\" e \"slaps\" sono slang da usare tra amici. Le espressioni idiomatiche, invece, si usano anche al lavoro."]
  ]
};

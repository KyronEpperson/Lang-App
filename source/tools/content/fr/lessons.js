/* fr-en: the original 11 lessons and their checks, written for speakers of French as written in France (docs/profiles/fr.md §8).
   English examples, check options and answer positions follow es-en except in pron (rebuilt for French sound traps) and the
   technical check options listed in deviations.p.json (articles, polite, numbers, phrasal, idioms). */
exports.LESSONS = [
{ id:"alphabet", title:"1 · L'alphabet : le nom des lettres et comment épeler", blurb:"Tu connais les lettres, mais en anglais elles portent d'autres noms. Apprends-les pour épeler ton nom, ton e-mail ou un code de réservation sans malentendu.", deck:"L'alphabet", body:`
<p>L'anglais utilise les mêmes 26 lettres que le français, sans accents ni cédille. Ce qui change, ce sont leurs <b>noms</b>, et tu en as besoin dès que tu épelles quelque chose à voix haute : ton nom de famille à la réception d'un hôtel, ton adresse e-mail au téléphone, un code de réservation à l'aéroport. Si tu dis « i » en pensant à la lettre I, on écrira un E.</p>
<h3>Les 26 lettres et leurs noms</h3>
<p>À côté de chaque lettre, tu vois son nom en API, la transcription de tout le cours (la clé complète est dans la leçon suivante). Pour l'instant, retiens ceci : ˈ se place devant la syllabe accentuée ; ː allonge la voyelle (/iː/ est un « i » long) ; /dʒ/ est le « dj » de « djembé » ; /eɪ/, /aɪ/ et /oʊ/ sont deux sons qui glissent ; et le <b>j</b> de l'API est le <i>y</i> anglais de <i>yes</i>, jamais le « j » de « jour ». Les voyelles sont en gras : l'anglais en compte cinq (A, E, I, O, U), pas six comme à l'école, car le Y n'en fait pas partie.</p>
<div class="tbl"><table><tr><td class="k">A /ˈeɪ/</td><td>B /ˈbiː/</td><td>C /ˈsiː/</td><td>D /ˈdiː/</td><td class="k">E /ˈiː/</td></tr><tr><td>F /ˈef/</td><td>G /ˈdʒiː/</td><td>H /ˈeɪtʃ/</td><td class="k">I /ˈaɪ/</td><td>J /ˈdʒeɪ/</td></tr><tr><td>K /ˈkeɪ/</td><td>L /ˈel/</td><td>M /ˈem/</td><td>N /ˈen/</td><td class="k">O /ˈoʊ/</td></tr><tr><td>P /ˈpiː/</td><td>Q /ˈkjuː/</td><td>R /ˈɑːr/</td><td>S /ˈes/</td><td>T /ˈtiː/</td></tr><tr><td class="k">U /ˈjuː/</td><td>V /ˈviː/</td><td>W /ˈdʌbəljuː/</td><td>X /ˈeks/</td><td>Y /ˈwaɪ/</td></tr><tr><td>Z /ˈziː/</td><td></td><td></td><td></td><td></td></tr></table></div>
<p>Astuce : les lettres dont le nom finit par « é » en français (B, C, D, G, P, T, V) finissent par /iː/ en anglais, comme le E et le Z. Et le J et le K riment avec le A, /eɪ/.</p>
<h3>Les noms que les francophones confondent</h3>
<p>Le plus grand piège est un chassé-croisé de voyelles : le nom anglais du E ressemble à notre « i », et celui du I se dit comme « aïe ». Quand tu entends « i », écris E ; quand tu entends « aïe », écris I.</p>
<div class="tbl"><table><tr><th>Lettre</th><th>En anglais</th><th>Attention</th></tr><tr><td class="k">A</td><td>/ˈeɪ/</td><td>pas « a » : le son glisse de « è » vers « i », comme dans <i>day</i></td></tr><tr><td class="k">E</td><td>/ˈiː/</td><td>se dit comme notre « i », en plus long ; jamais « eu »</td></tr><tr><td class="k">I</td><td>/ˈaɪ/</td><td>comme « aïe », et comme le mot <i>I</i> (« je »)</td></tr><tr><td class="k">G / J</td><td>/ˈdʒiː/ · /ˈdʒeɪ/</td><td>l'inverse du français : le G anglais sonne presque comme notre lettre J (« ji »), et le J anglais comme notre lettre G (« gé »)</td></tr><tr><td class="k">H</td><td>/ˈeɪtʃ/</td><td>pas « ache » : commence par /eɪ/ et finit par « tch »</td></tr><tr><td class="k">R</td><td>/ˈɑːr/</td><td>pas « erre » : comme le mot <i>are</i>, avec le r anglais</td></tr><tr><td class="k">U</td><td>/ˈjuː/</td><td>pas notre « u » : comme le mot <i>you</i></td></tr><tr><td class="k">W</td><td>/ˈdʌbəljuː/</td><td><i>double u</i>, en trois syllabes ; jamais « double vé »</td></tr><tr><td class="k">Y</td><td>/ˈwaɪ/</td><td>pas « i grec » : comme le mot <i>why</i></td></tr><tr><td class="k">Z</td><td>/ˈziː/</td><td>pas « zède » : <i>zee</i> en anglais américain (<i>zed</i> en anglais britannique)</td></tr></table></div>
<p>Les mêmes réflexes trompent avec d'autres consonnes : le K se dit /ˈkeɪ/ (comme la fin de <i>OK</i>) et non « ka », le Q se dit /ˈkjuː/ (comme le début de <i>cute</i>) et non « ku », et le V se dit /ˈviː/ et non « vé ».</p>
<h3>Épeler à voix haute</h3>
<p>Pour demander qu'on t'épelle un mot, ou pour épeler toi-même, utilise ces phrases. En français, on précise une lettre avec « B comme Bernard » ; en anglais, on dit <b>as in</b> + un mot.</p>
{{ex:How do you spell that?|/ˈhaʊ də ju ˈspel ˈðæt/|Ça s'écrit comment ?}}{{ex:How do you spell your last name?|/ˈhaʊ də ju ˈspel jʊr ˈlæst ˈneɪm/|Comment s'écrit ton nom de famille ?}}{{ex:Can you spell that, please?|/kən ju ˈspel ˈðæt ˈpliːz/|Tu peux l'épeler, s'il te plaît ?}}{{ex:It starts with a capital T.|/ɪt ˈstɑːrts wɪð ə ˈkæpɪtl ˈtiː/|Ça commence par un T majuscule.}}{{ex:B as in boy.|/ˈbiː əz ɪn ˈbɔɪ/|B comme « boy ».}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈem əz ɪn ˈmeri/|C'est M comme « Mary » ?}}{{ex:There are two Ls in hello.|/ðer ər ˈtuː ˈelz ɪn həˈloʊ/|« Hello » s'écrit avec deux L.}}
<p>Remarque l'auxiliaire <i>do</i> dans la question (<i>How do you spell…?</i>), et le pluriel d'une lettre, qui prend un -s : <i>two Ls</i>, là où le français dit « deux L ».</p>
<h3>a ou an devant une lettre ?</h3>
<p>Ce n'est pas la lettre qui décide, mais le <b>son</b> par lequel commence son nom. Beaucoup de consonnes ont un nom qui commence par un son de voyelle (/ˈef/, /ˈeɪtʃ/, /ˈel/, /ˈem/, /ˈen/, /ˈɑːr/, /ˈes/, /ˈeks/), donc elles prennent <i>an</i> : <i>an F, an H, an L, an M, an N, an R, an S, an X</i>.</p>
<p>À l'inverse, le U est une voyelle, mais son nom se dit comme <i>you</i>, qui commence par un son de consonne : <i>a U</i>, comme <i>a university</i>.</p>
<div class="tip">Pour dicter une adresse e-mail : une majuscule se dit <i>capital</i> (<i>capital T</i>), une lettre doublée <i>double</i> (<i>double L</i>), l'arobase <i>at</i> et le point <i>dot</i>. Ne dis ni « arobase » ni « point » : <i>julie.martin@example.com</i> se dicte <i>julie dot martin at example dot com</i>, et tu épelles chaque partie si on te le demande.</div>`},

{ id:"pron", title:"1 · Pièges de prononciation : H, TH, voyelles, accent tonique, CH et J", blurb:"Apprends à lire la transcription phonétique (API) des cartes et découvre les pièges typiques des francophones : le h, le th, les voyelles longues et brèves, l'accent tonique.", deck:"Pièges de prononciation", body:`
<p>Les cartes et les exemples de ce cours donnent la prononciation dans l'<b>alphabet phonétique international (API)</b>, celui des dictionnaires, avec les sons de l'anglais américain. Pourquoi pas une transcription « à la française » ? Parce qu'avec nos habitudes de lecture, le <i>h</i> resterait muet, <i>ch</i> se lirait « che », <i>pen</i> se lirait comme « pain » et la consonne finale disparaîtrait. Prends quelques minutes pour lire ce tableau, puis reviens-y quand tu en as besoin. Tu peux masquer la transcription avec le bouton « Aa » des exercices, ou dans les paramètres de Progrès.</p>
<h3>Comment lire la transcription</h3>
<div class="tbl"><table><tr><th>API</th><th>Son (⚠ = piège pour les francophones)</th><th>Exemple</th></tr><tr><td class="k">iː</td><td>« i » de « midi », plus long</td><td>sheep /ˈʃiːp/</td></tr><tr><td class="k">ɪ</td><td>entre « i » et « é », bref et relâché ⚠</td><td>ship /ˈʃɪp/</td></tr><tr><td class="k">e</td><td>« è » bref de « sept »</td><td>bed /ˈbed/</td></tr><tr><td class="k">æ</td><td>« a » très ouvert, presque « è », bouche grande ouverte ⚠</td><td>cat /ˈkæt/</td></tr><tr><td class="k">ʌ</td><td>« a » bref et central, pas « eu » ⚠</td><td>cut /ˈkʌt/</td></tr><tr><td class="k">ə</td><td>le « e » de « le », très faible</td><td>about /əˈbaʊt/</td></tr><tr><td class="k">ɑː</td><td>« a » de « pâte », long</td><td>hot /ˈhɑːt/</td></tr><tr><td class="k">ɔː</td><td>« o » ouvert de « porte »</td><td>talk /ˈtɔːk/</td></tr><tr><td class="k">uː / ʊ</td><td>« ou » long / « ou » bref et relâché</td><td>food /ˈfuːd/, book /ˈbʊk/</td></tr><tr><td class="k">ɜːr / ər</td><td>voyelle centrale, lèvres non arrondies, puis r anglais ⚠</td><td>bird /ˈbɜːrd/, water /ˈwɔːtər/</td></tr><tr><td class="k">eɪ aɪ ɔɪ oʊ aʊ</td><td>deux sons qui glissent : <i>day</i> n'est pas « dé », <i>go</i> n'est pas « go » ⚠</td><td>day /ˈdeɪ/, go /ˈgoʊ/</td></tr><tr><td class="k">p t k</td><td>avec un petit souffle au début d'une syllabe accentuée</td><td>tea /ˈtiː/</td></tr><tr><td class="k">θ / ð</td><td>langue entre les dents, sans voix / avec voix ; ni « s » ni « z » ⚠</td><td>think /ˈθɪŋk/, this /ˈðɪs/</td></tr><tr><td class="k">h</td><td>un souffle qu'on entend, comme pour embuer une vitre ; ne l'oublie pas, ne l'ajoute pas ⚠</td><td>hair /ˈher/, air /ˈer/</td></tr><tr><td class="k">r</td><td>langue recourbée vers l'arrière, sans toucher le palais ; pas le « r » de gorge ⚠</td><td>red /ˈred/</td></tr><tr><td class="k">ʃ / ʒ</td><td>« ch » de « chat » / « j » de « jour »</td><td>she /ʃi/, usually /ˈjuːʒuəli/</td></tr><tr><td class="k">tʃ / dʒ</td><td>« tch » de « tchèque » / « dj » de « djembé » ; le <i>j</i> anglais est dʒ, et <i>ch</i> se dit souvent tʃ ⚠</td><td>chair /ˈtʃer/, job /ˈdʒɑːb/</td></tr><tr><td class="k">m / n / ŋ</td><td>lèvres fermées / langue contre les dents / « ng » de « parking » ; ne nasalise jamais la voyelle d'avant ⚠</td><td>ten /ˈten/, sing /ˈsɪŋ/</td></tr><tr><td class="k">w / j</td><td>« ou » de « oui » / « y » de « yeux » ; le <i>j</i> de l'API est le <i>y</i> anglais ⚠</td><td>we /wi/, yes /ˈjes/</td></tr><tr><td class="k">ˈ</td><td>se place <b>avant</b> la syllabe accentuée, qui n'est pas forcément la dernière ⚠</td><td>hotel /hoʊˈtel/, comfortable /ˈkʌmftərbl/</td></tr></table></div>
<p>En anglais, chaque mot a une syllabe plus forte que les autres. Le petit trait ˈ te dit laquelle : <i>banana</i> /bəˈnænə/, pas « ba-na-NA ». Les mots sans ˈ (<i>a, the, to, can</i>…) sont faibles : dis-les vite et sans force. Deux détails encore. En anglais américain, un <i>t</i> entre deux voyelles sonne comme un « d » rapide (<i>water</i>, <i>city</i>) : la transcription ne le note pas, l'audio si. Et le piège de lecture le plus courant : dans l'API, la lettre <b>j</b> est le <i>y</i> anglais (<i>yes</i> /ˈjes/), et le <b>ʒ</b> est le « j » français.</p>
<h3>Le H : on l'entend</h3>
<p>En français, le <i>h</i> est muet. En anglais, il se prononce presque toujours : c'est un souffle qu'on entend, comme quand tu embues une vitre. Deux erreurs opposées te guettent : l'oublier (<i>hair</i> devient <i>air</i>, <i>heat</i> devient <i>eat</i>) et, par excès de prudence, l'ajouter devant une voyelle (« h-eat » pour <i>eat</i>). Seuls quelques mots courants ont un <i>h</i> muet : <i>hour</i>, <i>honest</i>.</p>
{{ex:hair / air|/ˈher/ /ˈer/|cheveux / air}}{{ex:eat / heat|/ˈiːt/ /ˈhiːt/|manger / chaleur}}{{ex:his house|/hɪz ˈhaʊs/|sa maison (à lui)}}
<h3>Le TH</h3>
<p>Le <b>th</b> n'existe pas en français. Place le bout de la langue entre les dents et souffle : sans voix pour <i>think</i> /θ/, avec la voix pour <i>this</i> /ð/. Si tu le remplaces par « s », « z » ou « t », tu dis un autre mot : <i>think</i> devient <i>sink</i> (« évier ») et <i>three</i> devient <i>tree</i> (« arbre »).</p>
{{ex:I think so.|/aɪ ˈθɪŋk ˈsoʊ/|Je pense que oui.}}{{ex:think / sink|/ˈθɪŋk/ /ˈsɪŋk/|penser / évier}}{{ex:three / tree|/ˈθriː/ /ˈtriː/|trois / arbre}}
<h3>Voyelles longues et brèves</h3>
<p>Le français n'a qu'un « i » : celui de « lit » et celui de « fil » sonnent pareil. L'anglais en a deux : un <b>i long</b> et tendu /iː/ (<i>sheep</i>) et un <b>i bref</b> et relâché /ɪ/, presque un « é » (<i>ship</i>). C'est pareil pour le « ou » : <i>fool</i> / <i>full</i>. Et le « a » se dédouble : /æ/, très ouvert (<i>cat</i>), et /ʌ/, bref et central (<i>cut</i>).</p>
{{ex:ship / sheep|/ˈʃɪp/ /ˈʃiːp/|bateau / mouton}}{{ex:live / leave|/ˈlɪv/ /ˈliːv/|habiter / partir}}{{ex:full / fool|/ˈfʊl/ /ˈfuːl/|plein / idiot}}{{ex:cat / cut|/ˈkæt/ /ˈkʌt/|chat / couper}}{{ex:The sheep is on the ship.|/ðə ˈʃiːp ɪz ɑːn ðə ˈʃɪp/|Le mouton est sur le bateau.}}
<h3>Diphtongues et voyelles nasales</h3>
<p>Beaucoup de voyelles anglaises sont en fait <b>deux sons qui glissent</b> : <i>day</i> /ˈdeɪ/ finit en « i », <i>go</i> /ˈgoʊ/ finit en « ou ». Et devant <i>n</i> ou <i>m</i>, garde la voyelle pure, puis prononce vraiment la consonne : <i>pen</i> n'est pas « pain », et le <i>n</i> final de <i>ten</i> s'entend vraiment.</p>
{{ex:day / go|/ˈdeɪ/ /ˈgoʊ/|jour / aller}}{{ex:ten / pen|/ˈten/ /ˈpen/|dix / stylo}}
<h3>Le R, le CH et le J</h3>
<p>Le <b>r</b> anglais ne se fait pas dans la gorge : recourbe le bout de la langue vers l'arrière, sans toucher le palais. Le <b>ch</b> anglais se dit le plus souvent « tch » : lu à la française, <i>choose</i> (« choisir ») devient <i>shoes</i> (« chaussures »). Et le <b>j</b> anglais est un « dj », jamais le « j » de « jour » : <i>job</i>, <i>James</i>, <i>general</i>.</p>
{{ex:shoes / choose|/ˈʃuːz/ /ˈtʃuːz/|chaussures / choisir}}{{ex:I like my job.|/aɪ ˈlaɪk maɪ ˈdʒɑːb/|J'aime mon travail.}}
<h3>La terminaison -ed</h3>
<p>Le <b>-ed</b> du prétérit se prononce, mais ce n'est <b>pas</b> une syllabe de plus, sauf après <i>t</i> ou <i>d</i>. <i>Worked</i> a une seule syllabe : ni « wor-ked », ni « wor » sans la fin.</p>
<div class="tbl"><table><tr><th>Son</th><th>Quand</th><th>Exemple</th></tr><tr><td class="k">t</td><td>après un son sourd (k, p, s, sh, ch, f)</td><td>worked /ˈwɜːrkt/</td></tr><tr><td class="k">d</td><td>après un son sonore (voyelle, l, n, g, v…)</td><td>played /ˈpleɪd/</td></tr><tr><td class="k">ɪd</td><td>seulement après t ou d</td><td>wanted /ˈwɑːntɪd/</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|J'ai travaillé hier.}}{{ex:We played soccer.|/wi ˈpleɪd ˈsɑːkər/|On a joué au foot.}}{{ex:She wanted to stay.|/ʃi ˈwɑːntɪd tə ˈsteɪ/|Elle voulait rester.}}
<h3>L'accent tonique</h3>
<p>Le français n'a pas d'accent de mot : on appuie un peu sur la fin du groupe, et c'est tout. L'anglais, lui, met dans chaque mot une syllabe forte, souvent au début, et avale les autres. Les mots transparents sont le grand piège : tu les reconnais à l'écrit, mais si tu les accentues à la française, on ne te comprend plus.</p>
<div class="tbl"><table><tr><th>Mot</th><th>En anglais</th><th>À éviter</th></tr><tr><td class="k">comfortable</td><td>/ˈkʌmftərbl/ : accent au début, trois syllabes</td><td>l'accent à la fin, comme dans « confortable »</td></tr><tr><td class="k">chocolate</td><td>/ˈtʃɑːklət/ : deux syllabes</td><td>trois syllabes et l'accent à la fin, comme dans « chocolat »</td></tr><tr><td class="k">vegetable</td><td>/ˈvedʒtəbl/ : accent au début, trois syllabes</td><td>l'accent sur « ta »</td></tr><tr><td class="k">information</td><td>/ˌɪnfərˈmeɪʃn/ : accent sur « ma », et -tion se dit « chn »</td><td>« in-for-ma-sion », toutes syllabes égales</td></tr><tr><td class="k">hotel</td><td>/hoʊˈtel/ : accent à la fin (pour une fois !) et un h soufflé</td><td>« ôtel », sans h</td></tr></table></div>
<div class="tip">Enregistre-toi en disant <i>hair / air</i>, <i>think / sink</i> et <i>ship / sheep</i>, puis compare avec l'audio. Si les deux mots sonnent pareil, exagère : un vrai souffle pour le <i>h</i>, la langue bien visible entre les dents pour le <i>th</i>, un <i>ee</i> très long et souriant.</div>`},

{ id:"articles", title:"2 · a, an et the : là où l'anglais et le français ne coïncident pas", blurb:"Tu utilises déjà des articles en français. Voici les quatre cas où l'anglais les met ou les enlève autrement.", deck:"Se présenter", body:`
<p>Le français a des articles (<i>un, une, le, la, les</i>), donc l'idée t'est familière et tu tombes juste la plupart du temps. Les erreurs viennent des quelques cas où les deux langues <b>ne coïncident pas</b>. Il y en a quatre.</p>
<h3>1. Les métiers : avec a / an</h3>
<p>En français, on dit « Je suis étudiant » ou « Elle est médecin », sans article. En anglais, avec un métier au singulier, l'article est <b>obligatoire</b>.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|Je suis étudiant. / Je suis étudiante.}}{{ex:She's a nurse.|/ʃiz ə ˈnɜːrs/|Elle est infirmière.}}{{ex:My brother is an engineer.|/maɪ ˈbrʌðər ɪz ən ˌendʒɪˈnɪr/|Mon frère est ingénieur.}}
<h3>2. a ou an ? C'est le son qui décide</h3>
<p>Mets <b>an</b> quand le mot suivant <b>commence par un son de voyelle</b>, même s'il s'écrit avec une consonne, et <b>a</b> quand il commence par un son de consonne, même s'il s'écrit avec une voyelle. Bonne nouvelle : le <i>h</i> muet de <i>hour</i> fonctionne comme celui d'« heure ».</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (se dit « you »)</td><td class="k">an hour (le h est muet)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (se dit « wan »)</td><td class="k">an MBA (se dit « em »)</td></tr></table></div>
<h3>3. Parler en général : pas d'article</h3>
<p>En français, on dit « <b>La</b> vie est dure » ou « J'adore <b>les</b> chiens ». En anglais, quand tu parles de quelque chose en général (idées abstraites, noms indénombrables ou pluriels), il n'y a <b>pas d'article</b>. C'est le piège numéro un des francophones, et tu le reverras plus loin.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|La vie est dure.}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|J'adore les chiens.}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Ici, le café est cher.}}
<h3>4. Les parties du corps : un possessif, pas « the »</h3>
<p>En français, on dit « J'ai mal à <b>la</b> tête » ou « Lave-toi <b>les</b> mains » : le pronom (<i>me, te</i>) ou le contexte suffit à dire à qui elles sont. L'anglais le dit avec l'<b>adjectif possessif</b> : <i>my, your, his, her</i>.</p>
{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|J'ai mal à la tête.}}{{ex:Wash your hands.|/ˈwɑːʃ jʊr ˈhændz/|Lave-toi les mains.}}{{ex:I brush my teeth every day.|/aɪ ˈbrʌʃ maɪ ˈtiːθ ˈevri ˈdeɪ/|Je me brosse les dents tous les jours.}}
<h3>Comme en français : the</h3>
<p><i>The</i> fonctionne comme <i>le, la, les</i> : pour une chose déjà mentionnée, ou que tout le monde identifie.</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|J'ai un chien. Le chien est trop mignon.}}
<div class="tip">Les deux erreurs les plus typiques : <b>She is doctor.</b> (✗) → <b>She is a doctor.</b> (✓) et <b>The life is hard.</b> (✗) → <b>Life is hard.</b> (✓). Même réflexe avec les pays : « la France » → <i>France</i>, sans article.</div>`},

{ id:"be", title:"3 · Le verbe be : être… et parfois avoir", blurb:"Be, c'est être, mais aussi avoir dans des expressions comme « j'ai 25 ans » ou « j'ai faim » : I'm 25, I'm hungry.", deck:"Se présenter", body:`
<p><b>Be</b> correspond à <b>être</b>, et pour une fois le français t'aide : un seul verbe de chaque côté. Le piège est ailleurs. Dans beaucoup d'expressions où le français dit <b>avoir</b>, l'anglais dit <i>be</i>.</p>
<h3>Les formes de be</h3>
<div class="tbl"><table><tr><th>Sujet</th><th>be</th><th>Contraction</th></tr><tr><td class="k">I</td><td>am</td><td>I'm</td></tr><tr><td class="k">you / we / they</td><td>are</td><td>you're, we're, they're</td></tr><tr><td class="k">he / she / it</td><td>is</td><td>he's, she's, it's</td></tr></table></div>
{{ex:She's a teacher.|/ʃiz ə ˈtiːtʃər/|Elle est enseignante.}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|Elle est au travail.}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Ça va ? / Tu vas bien ?}}
<h3>Là où le français dit « avoir »</h3>
<p>L'âge et beaucoup de sensations se disent avec <i>be</i> + adjectif. <i>I have 25 years</i> ou <i>I have hungry</i> font partie des erreurs les plus reconnaissables.</p>
<div class="tbl"><table><tr><th>Français</th><th>Anglais</th></tr><tr><td>J'ai 25 ans.</td><td class="k">I'm 25. / I'm 25 years old.</td></tr><tr><td>J'ai faim. / J'ai soif.</td><td class="k">I'm hungry. / I'm thirsty.</td></tr><tr><td>J'ai froid. / J'ai chaud.</td><td class="k">I'm cold. / I'm hot.</td></tr><tr><td>J'ai sommeil. / J'ai peur.</td><td class="k">I'm sleepy. / I'm scared.</td></tr><tr><td>Tu as raison.</td><td class="k">You're right.</td></tr></table></div>
{{ex:I'm 25 years old.|/aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/|J'ai 25 ans.}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|J'ai faim.}}{{ex:You're right.|/jʊr ˈraɪt/|Tu as raison.}}
<h3>Et là où le français dit « être », mais pas l'anglais</h3>
<p>« Je suis d'accord » se dit <i>I agree</i> : <i>agree</i> est un verbe, donc pas de <i>be</i>. <i>I'm agree</i> est l'erreur classique des francophones. Au négatif : <i>I don't agree</i>.</p>
{{ex:I agree.|/aɪ əˈgriː/|Je suis d'accord.}}
<h3>Le sujet : it pour « il » et « c'est »</h3>
<p>Comme en français, la phrase anglaise a toujours un sujet. Quand le français dit « il » ou « c'est » sans parler de personne, l'anglais dit <b>it</b>.</p>
{{ex:It's late.|/ɪts ˈleɪt/|Il est tard.}}{{ex:He's at home.|/hiz ət ˈhoʊm/|Il est à la maison.}}
<h3>Be et les autres verbes ne se mélangent pas</h3>
<p>Avec <i>like, live, work</i> et les autres verbes, pas de <i>be</i> : <i>I like coffee</i>, et non <i>I am like coffee</i>. Au négatif et dans les questions, <i>be</i> se débrouille seul ; les autres verbes ont besoin de <i>do</i>. La question à te poser : y a-t-il un autre verbe que <i>be</i> ? Si oui, il faut <i>do</i>.</p>
<div class="tbl"><table><tr><th></th><th>be</th><th>autres verbes</th></tr><tr><td>Affirmatif</td><td class="k">I'm tired.</td><td class="k">I like coffee.</td></tr><tr><td>Négatif</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Question</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>he / she / it : -s et does</h3>
<p>Avec <i>he, she, it</i> (ou un nom au singulier), le verbe prend un <b>-s</b> au présent. Au négatif et dans les questions, c'est <b>does</b> qui le porte, et le verbe perd son -s. En français, « il parle » se prononce comme « je parle » ; en anglais, le -s de <i>works</i> s'entend : prononce-le.</p>
{{ex:My brother works in London.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈlʌndən/|Mon frère travaille à Londres.}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|Il parle anglais ?}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|Elle ne mange pas de viande.}}
<div class="tip">Erreurs typiques : <b>I have 25 years</b> → <b>I'm 25</b> ; <b>I'm agree</b> → <b>I agree</b> ; <b>She work</b> → <b>She works</b>.</div>`},

{ id:"polite", title:"4 · Demander poliment", blurb:"Can you → Could you → Would you mind. En anglais, Give me sonne brusque.", deck:"Survie 1", body:`
<p>En anglais, <b>you</b> sert à la fois pour <i>tu</i> et pour <i>vous</i>. La politesse n'est pas dans le pronom, mais dans <b>la façon de demander</b> : avec <i>could</i>, <i>would</i> et <i>please</i>.</p>
<h3>L'échelle de la politesse</h3>
<div class="tbl"><table><tr><th>Expression</th><th>Effet</th><th>Quand</th></tr><tr><td class="k">Give me ~.</td><td>Ordre direct ; sonne brusque</td><td>À éviter</td></tr><tr><td class="k">Can you ~?</td><td>Demande familière</td><td>Amis, magasins</td></tr><tr><td class="k">Could you ~?</td><td>Demande aimable</td><td>Inconnus, travail</td></tr><tr><td class="k">Would you mind ~ing?</td><td>Très poli</td><td>Gros services, supérieurs</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|Tu pourrais m'aider ? / Vous pourriez m'aider ?}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|Pourrais-tu répéter ?}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|Ça vous dérangerait de nous prendre en photo ?}}
<h3>Pour commander : Can I get…? / I'd like…</h3>
<p>Ici, le français t'aide : « Je voudrais un café » se dit presque mot pour mot <i>I'd like a coffee</i>. Mais « Je veux… » et « Donne-moi… » ne passent pas mieux en anglais qu'en français : <i>I want…</i> et <i>Give me…</i> sonnent brusques ou enfantins. Dans un café ou un magasin, on dit plutôt :</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|Je vais prendre un latte, s'il vous plaît.}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|Je voudrais une place côté fenêtre.}}
<h3>Would you mind…? = « Ça te dérange de… ? »</h3>
<p><i>Mind</i> veut dire « être gêné, voir un inconvénient ». Comme en français, si on te demande « Ça te dérange ? » et que ça ne te dérange pas, tu réponds <b>non</b>.</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|Ça vous dérangerait d'ouvrir la fenêtre ?}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|Non, pas du tout. (Bien sûr que je l'ouvre.)}}
<div class="tip"><b>Please</b> et <b>thank you</b> ne sont jamais de trop : il suffit d'ajouter <i>please</i> à la fin pour que la phrase sonne beaucoup plus aimable. L'intonation compte aussi : si ta voix monte à la fin, c'est une demande ; si elle descend, c'est un ordre.</div>`},

{ id:"tense", title:"5 · Révision des temps : présent, passé et futur", blurb:"Les habitudes au présent simple, ce qui se passe en ce moment en be + -ing, les projets avec going to. Et did dans les questions au passé.", deck:"Conversation informelle", body:`
<p>« Je travaille » peut vouloir dire <i>I work</i> ou <i>I'm working</i> : le français n'a qu'un présent, l'anglais en a deux. Et le passé composé « j'ai travaillé » ne correspond pas toujours au même temps anglais. Révise les cinq temps les plus utiles dans une conversation, et surtout les <b>auxiliaires</b> des questions et des négations.</p>
<h3>Présent simple ou présent en be + -ing</h3>
<div class="tbl"><table><tr><th>Forme</th><th>Emploi</th><th>Exemple</th></tr><tr><td class="k">présent simple</td><td>habitudes et faits</td><td>She drinks coffee every morning.</td></tr><tr><td class="k">be + forme en -ing</td><td>ce qui se passe en ce moment / projets proches déjà fixés</td><td>I'm drinking coffee right now.</td></tr></table></div>
<p>« Qu'est-ce que tu fais ? » a deux traductions. Pour ce que tu fais en ce moment : <i>What are you doing?</i> Pour ton métier : <i>What do you do?</i> Et n'oublie pas le <b>-s</b> avec <i>he, she, it</i>, ni le <i>be</i> devant la forme en -ing : <i>I'm drinking</i>, jamais <i>I drinking</i>.</p>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Elle travaille dans une banque.}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|Aujourd'hui, je travaille de chez moi.}}{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Qu'est-ce que tu fais ? (en ce moment)}}
<h3>Le prétérit</h3>
<p>Les verbes réguliers prennent <b>-ed</b>, mais beaucoup des plus courants sont irréguliers : <i>go → went, eat → ate, see → saw, have → had, get → got</i>. Dans les questions et au négatif, c'est l'auxiliaire <b>did</b> qui porte le passé, et le verbe revient à la base verbale : <i>Did you go?</i>, et non <i>Did you went?</i></p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|Je suis allé / allée à la plage le week-end dernier.}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|Tu t'es bien amusé / amusée ?}}{{ex:I didn't see it.|/aɪ ˈdɪdnt ˈsiː ɪt/|Je ne l'ai pas vu.}}
<h3>Le futur : will ou going to</h3>
<div class="tbl"><table><tr><th></th><th>Quand</th><th>Exemple</th></tr><tr><td class="k">will</td><td>décision prise sur le moment, promesse</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>projet déjà décidé</td><td>I'm going to visit Montreal next month.</td></tr></table></div>
<p><i>Be going to</i>, c'est exactement le futur proche : « je vais » + infinitif. Pour un rendez-vous déjà fixé, le français dit souvent « Demain, je travaille » ; l'anglais préfère <i>be</i> + -ing : <i>I'm working tomorrow</i>. Et pour une offre faite sur le moment (« Je t'aide ! »), l'anglais dit <i>will</i> : <i>I'll help you!</i></p>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Je t'appelle plus tard.}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|Je vais prendre un cours de cuisine.}}
<p>À l'oral, <i>going to</i> se réduit souvent en <b>gonna</b>. À l'écrit, garde <i>going to</i>.</p>
<div class="tip">À <i>How was your weekend?</i>, réponds au prétérit ; à <i>Any plans for the weekend?</i>, avec <i>going to</i>. Reprendre le temps de la question, c'est l'astuce la plus simple.</div>`},

{ id:"prep", title:"6 · Les prépositions in / on / at", blurb:"« À », « en », « dans » ne se traduisent pas mot à mot : in pour l'intérieur et les grandes périodes, on pour les jours et les surfaces, at pour un point précis.", deck:"Nombres, heures et dates", body:`
<p>Le français dit « <b>à</b> Paris », « <b>en</b> mai », « <b>dans</b> le bus », « <b>à</b> la maison » : aucune de ces prépositions ne se traduit toujours de la même façon. L'anglais range les lieux et les moments en trois cases. La règle générale : <b>in</b> pour l'intérieur d'un espace et les grandes périodes, <b>on</b> pour les surfaces et les jours, <b>at</b> pour un point précis.</p>
<h3>Le temps</h3>
<div class="tbl"><table><tr><th>Préposition</th><th>Avec</th><th>Exemples</th></tr><tr><td class="k">in</td><td>mois, années, saisons, moments de la journée</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>jours de la semaine, dates, jours particuliers</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>heures précises et moments</td><td>at 7, at noon, at night</td></tr></table></div>
<p>Attention : en français, on dit « lundi » ou « <b>le</b> 3 mai », sans préposition. En anglais, il faut <b>on</b>, et jamais d'article : <i>on Monday</i>, <i>on May 3rd</i>. Et « <b>le</b> lundi », au sens de « tous les lundis », se dit <i>on Mondays</i>.</p>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|À vendredi.}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|La réunion est à trois heures.}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|Je suis né / née en 1998.}}
<h3>Le lieu</h3>
<div class="tbl"><table><tr><th>Préposition</th><th>Idée</th><th>Exemples</th></tr><tr><td class="k">in</td><td>à l'intérieur d'un espace ; villes et pays</td><td>in the car, in Lyon, in France</td></tr><tr><td class="k">on</td><td>sur une surface ; rues ; transports en commun</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>un point précis ; un lieu défini par ce qu'on y fait</td><td>at the station, at work, at home</td></tr></table></div>
<p>« À Paris » se dit donc <i>in Paris</i>, jamais <i>at Paris</i> : une ville est un espace, pas un point. Et « dans le bus » se dit <i>on the bus</i>.</p>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|Je suis dans le bus.}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|Retrouvons-nous à la gare.}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Je suis à la maison.}}
<h3>Sans préposition</h3>
<p>Avec <b>next, last, this, every, tomorrow, yesterday</b>, pas de préposition, comme dans « la semaine prochaine » : <i>next week</i>, jamais <i>on next week</i> ni <i>in next week</i>.</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|À la semaine prochaine.}}
<h3>Les verbes et leur préposition</h3>
<p>Beaucoup de verbes ne prennent pas la préposition qu'on attendrait en français. Apprends-les avec elle : <i>depend <b>on</b></i> (« dépendre de »), <i>interested <b>in</b></i> (« intéressé par »), <i>wait <b>for</b> the bus</i> (« attendre le bus »), <i>listen <b>to</b> music</i> (« écouter de la musique »), <i>look <b>at</b></i> (« regarder »), <i>arrive <b>at</b> the airport</i> / <i>arrive <b>in</b> London</i> (jamais <i>arrive to</i>).</p>
<div class="tip">Exceptions utiles : <b>at night</b>, mais <b>in the morning / afternoon / evening</b>. Le week-end, c'est <b>on the weekend</b> aux États-Unis (<i>at the weekend</i> en anglais britannique). Et d'autres prépositions piégeuses : <i>good <b>at</b></i> (pas <i>in</i>), <i>married <b>to</b></i> (pas <i>with</i>).</div>`},

{ id:"smalltalk", title:"7 · La conversation informelle", blurb:"How are you? est une salutation, pas une vraie question. Les sujets sans risque et ceux qu'il vaut mieux éviter.", deck:"Conversation informelle", body:`
<p>Dans les pays anglophones, et surtout aux États-Unis, on bavarde volontiers quelques instants avec des inconnus : dans l'ascenseur, à la caisse, avant une réunion. Ce n'est pas une conversation profonde, mais un <b>petit échange pour créer une bonne ambiance</b>, le <i>small talk</i>. En France, on le fait moins avec des inconnus ; en anglais, c'est presque une règle de politesse.</p>
<h3>How are you? est une salutation</h3>
<p>On ne te demande pas vraiment comment tu vas : c'est un « Salut, ça va ? » de passage. La réponse polie est courte, et on <b>renvoie la question</b>. Inutile de raconter ta journée.</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|Salut, ça va ?}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|Plutôt bien ! Et toi ?}}
<h3>Les sujets sans risque et ceux qu'il vaut mieux éviter</h3>
<div class="tbl"><table><tr><th>Sans risque</th><th>À éviter avec quelqu'un que tu viens de rencontrer</th></tr><tr><td>la météo, les projets du week-end ou des vacances</td><td>l'âge, la vie de couple, les enfants</td></tr><tr><td>la cuisine, les restaurants, les voyages</td><td>les remarques sur le physique ou le poids</td></tr><tr><td>les séries, les films, le sport (le football se dit <i>soccer</i> aux États-Unis)</td><td>le salaire, le prix de sa maison</td></tr><tr><td>le travail (sans entrer dans les détails), le quartier</td><td>la politique, la religion</td></tr></table></div>
<p>En France, on débat volontiers de politique entre amis, à table. Avec un anglophone que tu viens de rencontrer, garde ce sujet pour plus tard : il peut vite mettre mal à l'aise.</p>
<h3>Comment faire durer la conversation</h3>
<p>Réponse + <b>un détail en plus</b> + <b>une question en retour</b>. Avec ces trois étapes, l'échange ne retombe pas.</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|C'était génial ! J'ai fait une randonnée. Et toi ?}}
<p>Réagis aussi : <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Comment conclure avec naturel</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|Bon, il faut que j'y aille.}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|Ça m'a fait plaisir de discuter avec toi.}}
<div class="tip">« Moi aussi », c'est <b>Me too</b>, mais « Moi non plus », c'est <b>Me neither</b> : <i>I don't like horror movies.</i> → <i>Me neither.</i> (et non <i>Me too</i>). Dans l'anglais parlé des États-Unis, on entend aussi <i>Me either</i>, mais la forme standard est <i>Me neither</i>.</div>`},

{ id:"phrasal", title:"8 · Premiers pas avec les phrasal verbs", blurb:"Verbe + particule = un nouveau sens. Là où tu dirais enter ou continue, un natif dit come in ou go on.", deck:"Phrasal verbs", body:`
<p>Un <i>phrasal verb</i> (verbe à particule) est un <b>verbe + une particule</b> comme <i>up, out, off, on</i>, qui ensemble prennent un sens nouveau. Le piège, pour un francophone : il existe presque toujours un verbe d'origine latine proche du français (<i>enter, continue, discover</i>), et tu le choisis parce que tu le reconnais. Ce n'est pas faux, mais à l'oral cela sonne soutenu, voire raide. Les natifs disent plutôt le <i>phrasal verb</i>.</p>
<div class="tbl"><table><tr><th>Verbe soutenu (mot transparent)</th><th>Phrasal verb (oral)</th><th>Sens</th></tr><tr><td>enter</td><td class="k">come in</td><td>entrer</td></tr><tr><td>continue</td><td class="k">go on</td><td>continuer</td></tr><tr><td>discover</td><td class="k">find out</td><td>découvrir, apprendre</td></tr><tr><td>postpone</td><td class="k">put off</td><td>reporter, repousser</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>supporter, tolérer</td></tr><tr><td>extinguish</td><td class="k">put out</td><td>éteindre (un feu)</td></tr></table></div>
<h3>La particule donne un indice</h3>
<p><b>up</b> indique souvent « vers le haut, complètement » ; <b>out</b>, « vers l'extérieur, jusqu'au bout » ; <b>off</b>, « se détacher, s'arrêter » ; <b>on</b>, « dessus, continuer ».</p>
{{ex:Come in, please.|/ˈkʌm ˈɪn ˈpliːz/|Entre, je t'en prie.}}{{ex:I grew up in Bordeaux.|/aɪ ˈgruː ˈʌp ɪn bɔːrˈdoʊ/|J'ai grandi à Bordeaux.}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|On n'a plus de lait.}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|Éteins ton portable, s'il te plaît.}}
<h3>Le pronom se place au milieu</h3>
<p>Beaucoup de <i>phrasal verbs</i> avec un complément peuvent se séparer. Un nom se met avant ou après la particule, mais un <b>pronom</b> (<i>it, them, me, you</i>) se place <b>toujours au milieu</b>.</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|Allume la lumière. (Les deux sont correctes.)}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|Allume-la. (Jamais : turn on it)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|Je passe te prendre à sept heures.}}
<h3>Les phrasal verbs qui ne se séparent pas</h3>
<p>Ceux qui se construisent avec une préposition, comme <i>look after</i> (s'occuper de), <i>look for</i> (chercher) ou <i>get along with</i> (bien s'entendre avec), ne se séparent pas : <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">Apprends chaque <i>phrasal verb</i> comme un seul mot, dans une phrase d'exemple : la place du pronom deviendra automatique. Pour comprendre les séries et les films, ils sont indispensables : tu n'y entendras presque jamais <i>extinguish</i>, mais <i>put out</i>, tout le temps.</div>`},

{ id:"numbers", title:"9 · Nombres, heures et prix", blurb:"Point décimal, virgule des milliers, billion = un milliard, 13 contre 30, et comment lire les prix, les années et les dates.", deck:"Nombres, heures et dates", body:`
<p>Les nombres reviennent à chaque voyage et à chaque réunion. Bonne nouvelle : l'anglais regroupe aussi les chiffres par trois. Les différences sont dans les signes, dans le mot <i>billion</i> et dans la façon de lire les heures, les prix, les années et les dates.</p>
<h3>Point décimal et virgule des milliers</h3>
<p>En anglais, les décimales se séparent par un <b>point</b> et les milliers par une <b>virgule</b> : c'est l'inverse du français, qui met une virgule pour les décimales et un espace pour les milliers.</p>
<div class="tbl"><table><tr><th>En anglais</th><th>En français</th><th>Se lit</th></tr><tr><td class="k">3.5</td><td>3,5</td><td>three point five</td></tr><tr><td class="k">1,500</td><td>1 500</td><td>one thousand five hundred</td></tr><tr><td class="k">2,000,000</td><td>2 000 000</td><td>two million</td></tr></table></div>
<h3>Attention à billion !</h3>
<p>Un « billion » français, c'est mille milliards. Le <i>billion</i> anglais, lui, ne vaut que <b>un milliard</b>.</p>
<div class="tbl"><table><tr><th>Anglais</th><th>Français</th></tr><tr><td class="k">one thousand (1,000)</td><td>mille</td></tr><tr><td class="k">one million</td><td>un million</td></tr><tr><td class="k">one billion</td><td>un milliard</td></tr><tr><td class="k">one trillion</td><td>un billion (mille milliards)</td></tr></table></div>
{{ex:three point five|/ˈθriː ˈpɔɪnt ˈfaɪv/|3,5 (trois virgule cinq)}}{{ex:one billion dollars|/ˈwʌn ˈbɪljən ˈdɑːlərz/|un milliard de dollars}}
<h3>-teen et -ty</h3>
<p>De 13 à 19, l'accent tonique est <b>à la fin</b> (thir<b>TEEN</b>) ; pour 30, 40, 50…, il est <b>au début</b> (<b>THIR</b>ty). En anglais américain, le <i>t</i> de <i>thirty</i> ressemble souvent à un « d » rapide : l'essentiel, c'est l'accent au début.</p>
{{ex:thirteen / thirty|/ˌθɜːrˈtiːn/ /ˈθɜːrti/|13 / 30}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|15 / 50}}
<h3>L'heure</h3>
<p>En anglais, on donne l'heure sur 12 heures, rarement sur 24. Le plus simple est de lire l'heure puis les minutes. De la minute 1 à la minute 9, on dit « oh ».</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|Il est sept heures quinze.}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|Il est neuf heures cinq.}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|Il est dix heures et quart.}}
<h3>Prix, années et dates</h3>
<p>Les prix se lisent comme deux nombres : $4.99 se dit <i>four ninety-nine</i>. En euros, le symbole se met devant : 25 € s'écrit <i>€25</i> et se lit <i>twenty-five euros</i>. Les années se lisent deux chiffres par deux chiffres (19 | 90), jamais « mille neuf cent… ». Les dates s'écrivent avec le mois d'abord (<i>November 15</i>) et se lisent avec un ordinal (<i>November fifteenth</i>).</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|Ça coûte 4,99 dollars.}}{{ex:nineteen ninety|/ˌnaɪnˈtiːn ˈnaɪnti/|l'année 1990}}{{ex:November fifteenth|/noʊˈvembər ˌfɪfˈtiːnθ/|le 15 novembre}}
<div class="tip">Aux États-Unis, la date courte s'écrit <b>mois/jour</b> : 11/5, c'est le 5 novembre, pas le 11 mai. En cas de doute, écris le mois en toutes lettres : <i>November 5</i>.</div>`},

{ id:"email", title:"10 · Les e-mails en anglais", blurb:"Salutation → objet → demande → conclusion. Court, clair, et sans les formules françaises traduites.", deck:"Travail et e-mails", body:`
<p>Un e-mail professionnel en anglais est <b>court, direct et aimable</b>. Le français aime les formules (« Madame, Monsieur, », « Veuillez trouver ci-joint… », « Je vous prie d'agréer… ») ; traduites mot à mot, elles sonnent raides ou bizarres. Utilise plutôt les formules propres à l'anglais : elles servent au bureau comme pour le TOEIC.</p>
<h3>Structure de base</h3>
<div class="tbl"><table><tr><th>Partie</th><th>Exemple</th></tr><tr><td>Salutation</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Première ligne (formule et objet)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Corps (demande)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Conclusion</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Formule finale</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>La salutation : Hi est la norme</h3>
<p>Dans les entreprises américaines, <b>Hi + prénom</b> passe même avec quelqu'un à qui tu écris pour la première fois. <i>Dear</i> est réservé aux cas très formels, et <i>Dear Sir or Madam</i>, bien plus rare que notre « Madame, Monsieur, », ne s'emploie que si tu ne connais vraiment pas le nom.</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|J'espère que vous allez bien.}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|Je vous écris pour faire suite à notre réunion.}}
<h3>Les formules françaises et leur équivalent naturel</h3>
<div class="tbl"><table><tr><th>En français</th><th>En anglais</th></tr><tr><td>Bonjour Monsieur Martin,</td><td class="k">Dear Mr. Martin, / Hi Thomas,</td></tr><tr><td>Veuillez trouver ci-joint le rapport.</td><td class="k">I've attached the report.</td></tr><tr><td>Dans l'attente de votre réponse,</td><td class="k">I look forward to hearing from you.</td></tr><tr><td>Je reste à votre disposition.</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Cordialement,</td><td class="k">Best regards,</td></tr></table></div>
<p>Méfie-toi de « Je reste à votre écoute » : traduit mot à mot, cela donne <i>I remain attentive</i>, qu'aucun anglophone n'écrit.</p>
<h3>Demande avec tact et donne une date précise</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|Pourriez-vous m'envoyer le rapport d'ici jeudi ?}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|Merci de votre patience.}}
<p><i>ASAP</i> peut sonner comme une pression. Si possible, donne un délai avec <b>by + date</b>.</p>
<div class="tip">Inutile de commencer à chaque fois par <i>Sorry for the late reply</i>. <b>Thanks for your patience</b> est aimable et positif, sans t'excuser. Et pour finir un vendredi : <b>Have a great weekend!</b></div>`},

{ id:"idioms", title:"11 · Expressions idiomatiques et argot", blurb:"Des phrases qu'on ne comprend pas mot à mot. Celles qui ressemblent au français, et quand les utiliser.", deck:"Expressions idiomatiques", body:`
<p>Une expression idiomatique est une phrase dont le sens ne se déduit pas des mots : <i>a piece of cake</i> ne parle pas de gâteau, mais de quelque chose de très facile. Bonne nouvelle, le français dit aussi « c'est du gâteau ». Si tu veux comprendre les séries et les films sans sous-titres, ces expressions sont indispensables.</p>
<h3>Imagine la scène</h3>
<p>La plupart se retiennent mieux si tu visualises l'image.</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|C'est du gâteau.}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|Ça coûte les yeux de la tête.}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|Je suis tout ouïe.}}
<h3>Proches du français… ou pas du tout</h3>
<div class="tbl"><table><tr><th>Anglais</th><th>Français</th></tr><tr><td class="k">Kill two birds with one stone</td><td>Faire d'une pierre deux coups (en anglais, on tue deux oiseaux avec une pierre)</td></tr><tr><td class="k">Speak of the devil!</td><td>Quand on parle du loup ! (en anglais, c'est le diable)</td></tr><tr><td class="k">When pigs fly</td><td>Quand les poules auront des dents</td></tr><tr><td class="k">It's raining cats and dogs</td><td>Il pleut des cordes</td></tr></table></div>
<p>Et dans l'autre sens, beaucoup d'expressions françaises <b>ne se traduisent pas mot à mot</b>. « Tu me fais marcher » se dit <i>You're pulling my leg</i> ; « être dans la lune », <i>to have your head in the clouds</i>. Traduites littéralement, personne ne les comprendra.</p>
{{ex:You're pulling my leg.|/jʊr ˈpʊlɪŋ maɪ ˈleg/|Tu me fais marcher.}}
<h3>Expression idiomatique ou argot</h3>
<p>Les <b>expressions idiomatiques</b> existent depuis longtemps et tout le monde les emploie, y compris au travail (<i>Let's call it a day</i>). L'<b>argot</b> (<i>slang</i>) appartient aux jeunes et s'utilise entre amis (<i>No cap</i>, <i>That song slaps</i>). Il change vite et, dans la bouche d'un adulte, il peut sonner forcé.</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|On s'arrête là pour aujourd'hui. (Possible en réunion.)}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|Sans mentir, c'est la meilleure pizza du monde. (Seulement entre amis.)}}
<div class="tip">Ne truffe pas ton anglais d'expressions idiomatiques : une par conversation, au bon moment, fait très bonne impression. Trop, et tu as l'air de réciter un manuel.</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["Quelle lettre s'appelle /ˈdʒiː/ en anglais ?", ["J","G","Z","C"], 1, "Le G se dit /ˈdʒiː/, presque comme notre lettre J. Le J se dit /ˈdʒeɪ/, le Z /ˈziː/ et le C /ˈsiː/ : pour G et J, c'est l'inverse du français."],
    ["Quelle forme est correcte ?", ["a F","an U","a M","an F"], 3, "Le nom du F commence par un son de voyelle (/ˈef/), donc \"an F\". Le M prend aussi \"an\" (/ˈem/), et le U, qui se dit comme \"you\", prend \"a\"."],
    ["Comment demander à quelqu'un d'épeler un mot ?", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "La question prend l'auxiliaire \"do\" devant le sujet \"you\", puis le verbe à la base verbale : \"How do you spell that?\"."]
  ],
  pron: [
    ["Quel mot veut dire « mouton » ?", ["ship","sheep","shape","cheap"], 1, "\"Sheep\" a le i long /iː/. Avec le i bref /ɪ/, \"ship\" veut dire « bateau »."],
    ["Comment se prononce \"hotel\" ?", ["Sans h, comme « hôtel »","Avec un « r » de gorge au début","En deux syllabes égales, sans accent tonique","Avec un souffle au début : /hoʊˈtel/"], 3, "Le h de \"hotel\" se prononce : c'est un souffle qu'on entend. Et l'accent tonique tombe sur la deuxième syllabe : /hoʊˈtel/."],
    ["Où tombe l'accent tonique dans \"comfortable\" ?", ["Sur la fin, comme dans « confortable »","Sur « for »","Au début : /ˈkʌmftərbl/","Aucune syllabe n'est accentuée"], 2, "/ˈkʌmftərbl/ : l'accent tombe au début, et le mot se réduit à trois syllabes."]
  ],
  articles: [
    ["I'm ___ engineer. Que mettre dans le trou ?", ["a","an","the","(rien)"], 1, "\"Engineer\" commence par un son de voyelle, donc \"an\". Et avec un métier, l'article est obligatoire."],
    ["Comment dit-on « La vie est dure » ?", ["The life is hard.","A life is hard.","Life is hard.","The lives are hard."], 2, "Quand on parle de quelque chose en général ou d'une idée abstraite, l'anglais ne met pas d'article : \"Life is hard\"."],
    ["Comment dit-on « J'ai mal à la tête » ?", ["The head hurts me.","Me hurts the head.","Hurts my head.","My head hurts."], 3, "Avec les parties du corps, l'anglais emploie l'adjectif possessif (\"my\", \"your\", \"her\"), pas \"the\"."]
  ],
  be: [
    ["Comment dit-on « J'ai 25 ans » ?", ["I have 25 years.","I'm 25.","I've 25 years.","I'm having 25."], 1, "L'âge se dit avec be : \"I'm 25\" (ou \"I'm 25 years old\"). Jamais avec \"have\"."],
    ["Comment dit-on « Ma sœur habite à Lima » ?", ["My sister live in Lima.","My sister is live in Lima.","My sister living in Lima.","My sister lives in Lima."], 3, "\"My sister\" équivaut à \"she\" (troisième personne du singulier) : le verbe prend un -s, \"lives\". Et pas de \"is\"."],
    ["On te demande \"Are you hungry?\" et tu n'as pas faim. Que réponds-tu ?", ["No, I'm not.","No, I don't.","No, I amn't.","No, I haven't."], 0, "La question est posée avec be, donc la réponse aussi : \"No, I'm not\"."]
  ],
  polite: [
    ["Quelle est la façon la plus polie de demander quelque chose à un inconnu ?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "\"Could you…?\" est la façon de base de demander poliment. \"Give me\" sonne comme un ordre."],
    ["On te demande \"Would you mind opening the window?\" Quelle réponse veut dire « bien sûr, je l'ouvre » ?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "\"Mind\" = être gêné, voir un inconvénient. Comme pour « Ça te dérange ? », répondre « non » veut dire que tu le fais volontiers."],
    ["Quelle forme du verbe vient après \"Would you mind\" ?", ["Base verbale (open)","to + base verbale (to open)","Prétérit (opened)","Forme en -ing (opening)"], 3, "Après \"mind\", on met la forme en -ing : \"Would you mind waiting?\""]
  ],
  tense: [
    ["Comment dit-on « Je bois du café tous les matins » (une habitude) ?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Les habitudes se disent au présent simple. La forme en be + -ing voudrait dire « je suis en train d'en boire »."],
    ["Ton ami n'a pas d'argent sur lui et tu décides sur le moment : « Je paie ! »", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Une décision prise sur le moment se dit avec \"will\". \"Going to\" est pour un projet déjà décidé."],
    ["Choisis la bonne question : « Tu es allé / allée à la fête ? »", ["Did you went to the party?","Did you go to the party?","Do you went to the party?","Went you to the party?"], 1, "Dans une question au prétérit, \"did\" porte déjà le passé : le verbe reste à la base verbale (\"go\")."]
  ],
  prep: [
    ["« Retrouvons-nous à 7 heures » = Let's meet ___ 7.", ["in","at","on","to"], 1, "Avec une heure précise, on met \"at\"."],
    ["« Lundi » (le jour) = ___ Monday", ["on","in","at","by"], 0, "Avec les jours et les dates, on met \"on\", sans article : \"on Monday\". Et « le lundi » (tous les lundis) se dit \"on Mondays\"."],
    ["Quelle phrase est correcte ?", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Avec \"next\", \"last\", \"this\" et \"every\", pas de préposition."]
  ],
  smalltalk: [
    ["Dans un café, on te dit \"How are you today?\" Quelle est la réponse la plus naturelle ?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "\"How are you?\" est une salutation. Réponds brièvement et renvoie la question."],
    ["Quelle question vaut-il mieux éviter avec quelqu'un que tu viens de rencontrer ?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "En anglais, demander son âge à quelqu'un qu'on vient de rencontrer peut paraître impoli."],
    ["Quelqu'un dit \"I don't like horror movies.\" Comment dire « Moi non plus » ?", ["Me too.","So do I.","Me neither.","Me also."], 2, "« Moi non plus » se dit \"Me neither\" (ou \"Neither do I\"). \"Me too\" veut dire « moi aussi »."]
  ],
  phrasal: [
    ["« Tu peux l'éteindre ? » Quelle phrase est correcte ?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "Le pronom (\"it\") se place au milieu du phrasal verb : \"turn it off\"."],
    ["Que veut dire \"run out of\" ?", ["Partir en courant","Ne plus en avoir, manquer de","S'échapper d'un endroit","Arriver en retard"], 1, "\"We ran out of milk.\" = On n'a plus de lait."],
    ["Comment dit-on « Reportons la réunion à la semaine prochaine » ?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "\"Put off\" = reporter. \"Put on\" veut dire « mettre (un vêtement) » ou « allumer » ; \"put out\", « éteindre (un feu) »."]
  ],
  numbers: [
    ["Comment se lit 3.5 en anglais ?", ["three comma five","three point five","three and five","thirty-five"], 1, "En anglais, les décimales s'écrivent et se lisent avec un point : \"three point five\"."],
    ["Où tombe l'accent tonique dans \"thirteen\" ?", ["Sur les deux syllabes de la même façon","Il n'y a pas d'accent tonique","Sur teen (à la fin)","Sur thir (au début)"], 2, "Les nombres en -teen ont l'accent à la fin : /ˌθɜːrˈtiːn/. \"Thirty\" l'a au début : /ˈθɜːrti/."],
    ["Que veut dire \"one billion\" ?", ["un milliard","un billion (mille milliards)","cent millions","un million"], 0, "\"Billion\" = un milliard. Le « billion » français (mille milliards) se dit \"one trillion\"."]
  ],
  email: [
    ["Tu écris pour la première fois à Jenny Park, une cliente. Quelle salutation est la plus adaptée ?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "Dans un e-mail professionnel aux États-Unis, \"Hi\" + prénom est le choix le plus sûr. Dans un contexte très formel : \"Dear Ms. Park,\""],
    ["Comment dire naturellement « Dans l'attente de votre réponse » ?", ["I stay waiting your answer.","I look forward to hearing from you.","I wait your response.","I remain attentive."], 1, "\"I look forward to hearing from you\" est la formule habituelle. \"I remain attentive\" calque « je reste à votre écoute » et ne se dit pas ; les autres sont des traductions mot à mot."],
    ["Quelle phrase demande un délai avec tact ?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "\"Could you…?\" + \"by\" + date : c'est aimable, et le délai est clair."]
  ],
  idioms: [
    ["Que veut dire \"The test was a piece of cake\" ?", ["Le contrôle était super facile.","On a mangé du gâteau pendant le contrôle.","Le contrôle était super difficile.","J'ai complètement raté le contrôle."], 0, "\"A piece of cake\" = c'est du gâteau, c'est très facile."],
    ["Que veut dire \"I'm feeling under the weather\" ?", ["Il fait mauvais.","Je suis dehors.","Je ne me sens pas très bien.","J'ai pris la pluie."], 2, "Rien à voir avec la météo : cela veut dire qu'on n'est pas dans son assiette."],
    ["Quelle phrase passe le plus mal quand tu présentes un rapport à ton chef ?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "\"No cap\" et \"slaps\" sont de l'argot, à réserver aux amis. Les expressions idiomatiques, elles, s'emploient aussi au travail."]
  ]
};

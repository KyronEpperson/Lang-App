/* en-da decks, part B (writer EN-DA-B). One card per line: target | pron | meaning | note.
   pron is the unchanged output of tools/target/da/respell.js. */
module.exports = {
  "Days and routines": `
    mandag | MA-naw | Monday | small m. The g of dag is silent; the aid is rough here.
    tirsdag | TEE-sdaw | Tuesday | small t. The g of dag is silent; the aid is rough here.
    onsdag | OHN-sdaw | Wednesday | small o. Same warning as tirsdag. The aid's o is long; trust the voice.
    torsdag | TOH-sdaw | Thursday | small t. The aid is rough on -dag.
    fredag | FREH-dhaw | Friday | small f. The aid is rough on -dag.
    lørdag | LOE-raw | Saturday | same warning as tirsdag
    søndag | SOE-naw | Sunday | small s. The aid is rough on -dag.
    om morgenen | awm MOH-guh-nuhn | in the morning |
    om aftenen | awm AF-tuh-nuhn | in the evening | The definite ending is -en: aftenen.
    hver morgen | veh MOH-guhn | every morning | No article. Same morgen as om morgenen.
    hver dag | veh da | every day | No article. dag is an en-word when you do use one: en dag.
    jeg arbejder | yai A-bai-dhuh | I work | one -r for every person
    jeg spiser | yai SPEE-suh | I eat | also "I am eating"
    jeg cykler | yai SEWK-luh | I bike | one -r for every person. Also "I am biking".
    jeg står op | yai staw awp | I get up | Present -r. There is no separate form for "am getting up".
    jeg laver mad | yai LA-wuh madh | I cook | laver is the one present. Also "I am cooking".
    jeg går i seng | yai gaw ee sehng | I go to bed | går is the present of gå.
  `,
  "Food and drink": `
    en kaffe | ehn KA-fuh | a coffee | kaffe is common gender. Order it with gerne and tak.
    en te | ehn teh | a tea | te is common gender. No venligst at the counter.
    et glas vand | eht glas van | a glass of water | glas is an et-word.
    en øl | ehn oel | a beer |
    sukker | SOO-guh | sugar | No article. A doubled k has no puff of air, so the aid writes g.
    en bolle | ehn BAW-luh | a bread roll | Common gender: en bolle.
    en pølse | ehn POEL-suh | a hot dog | A hot dog or a sausage. Common gender: en pølse.
    rugbrød | ROO-broedh | rye bread | listed in the word list
    smørrebrød | SMOE-uh-broedh | an open-faced sandwich | listed in the word list
    kanelsnegl | ka-NUHL-snehl | a cinnamon bun | listed in the word list
    morgenmad | MOH-guhn-madh | breakfast | No article in til morgenmad.
    aftensmad | AF-tuhn-smadh | dinner | The evening meal at home.
    jeg er sulten | yai eh SOOL-tuhn | I'm hungry | Say sulten. Danish does not say "I have hunger".
    jeg vil gerne have | yai vehl GEH-nuh HA-wuh | I'd like | the polite order. No venligst.
    jeg vil gerne have en kaffe, tak | yai vehl GEH-nuh HA-wuh ehn KA-fuh tak | I'd like a coffee, thanks | The full café line. tak does the work of please.
    jeg vil gerne betale | yai vehl GEH-nuh buh-TA-luh | I'd like to pay | How you ask for the check. A modal verb plus a bare infinitive. No venligst.
    tak for mad | tak foh madh | thanks for the meal | Said when you leave the table, not to a waiter.
  `,
  "People and family": `
    min mor | meen moh | my mother |
    min far | meen fa | my father | far and får are not the same word
    min søster | meen SOES-tuh | my sister |
    min bror | meen broh | my brother | bror is common gender, so min.
    min datter | meen DA-duh | my daughter | datter is common gender: min datter.
    min søn | meen soen | my son | søn is common gender: min søn.
    min kone | meen KOH-nuh | my wife | kone is common gender: min kone.
    min mand | meen man | my husband | mand is common gender. The d is silent, and the aid does not mark the stød.
    min partner | meen PA-tnuh | my partner | partner is common gender: min. Any gender.
    min bedstemor | meen BEH-dhuh-moh | my grandmother | Listed in the word list.
    min bedstefar | meen BEH-dhuh-fa | my grandfather | Listed in the word list. far and får stay different.
    et barn | eht ban | a child | the r is swallowed
    mit barn | meht ban | my child | barn is neuter: mit, not min.
    mine børn | MEE-nuh boen | my children | Plural mine. Never add the definite ending: not mine børnene.
    børnene | BOE-nuh-nuh | the children | definite plural
    mine forældre | MEE-nuh FOH-rael-uh | my parents | Plural mine. The aid stresses the wrong syllable; trust the voice.
    en ven | ehn vehn | a friend | ven is common gender. A woman can be en ven too.
  `,
  "Describing things": `
    en stor bil | ehn stoh beel | a big car | no ending on stor
    et stort hus | eht stawt hoos | a big house | neuter -t. The o of stort is aw.
    store huse | STOH-uh HOO-suh | big houses | plural -e
    store biler | STOH-uh BEE-luh | big cars | Plural adjective ending -e, and no article on the indefinite plural.
    den store bil | dehn STOH-uh beel | the big car | Definite: den plus adjective ending -e, and no ending on the noun. Not den store bilen.
    det store hus | deh STOH-uh hoos | the big house | hus is neuter, so det. The adjective still takes -e.
    bilen er stor | BEE-luhn eh stoh | the car is big | After er, a singular common-gender noun takes no adjective ending.
    huset er stort | HOO-suhdh eh stawt | the house is big | Neuter keeps the adjective ending -t after er.
    bilerne er store | BEE-luh-nuh eh STOH-uh | the cars are big | Plural after er takes the adjective ending -e.
    en rød bil | ehn roedh beel | a red car | the d is soft
    et rødt hus | eht roet hoos | a red house | Neuter adjective ending -t: rødt. Soft d.
    en lille bil | ehn LEH-luh beel | a small car | lille takes no extra ending here. The plural is små.
    et lille hus | eht LEH-luh hoos | a small house | lille stays lille for an et-word. No -t.
    en dejlig dag | ehn DAI-leey da | a lovely day | dag is common gender, so no -t on dejlig.
    dejligt | DAI-leht | lovely | neuter or adverb: dejligt vejr
    dejligt vejr | DAI-leht vai | lovely weather | vejr is neuter and takes no article. The adjective takes -t.
    koldt vand | kawlt van | cold water | vand is neuter: koldt. The d of kold is silent before t.
  `,
  "Around town and directions": `
    til højre | tehl HOY-uh | to the right |
    til venstre | tehl VEHN-struh | to the left | the r stays in the str cluster
    ligeud | LEE-yuh-oodh | straight ahead | the aid splits this into three syllables (§6.5)
    drej til højre | drai tehl HOY-uh | turn right (to one person) | Said to one person. The imperative has no ending.
    drej til venstre | drai tehl VEHN-struh | turn left (to one person) | Said to one person.
    gå ligeud | gaw LEE-yuh-oodh | go straight (to one person) | Said to one person.
    kryds gaden | krews GA-dhuhn | cross the street (to one person) | Said to one person. gaden has the definite ending.
    hvor er | vaw eh | where is |
    hvor er toilettet | vaw eh TOH-ee-luh-duhdh | where is the bathroom | toilet is an et-word: toilettet. Stress in the aid is unchecked.
    stationen | STA-tee-oh-nuhn | the station | stress is the default and is unchecked
    metroen | MEHT-roh-uhn | the metro | Common gender, definite ending -en.
    parken | PA-kuhn | the park | Common gender, definite ending -en. The r is swallowed.
    på hjørnet | paw YOE-nuhdh | on the corner | hjørne is an et-word: hjørnet.
    ved siden af | vehdh SEE-dhuhn af | next to | Follow it with the place: ved siden af stationen.
    mellem | MEH-luhm | between | mellem stationen og parken.
    jeg er faret vild | yai eh FA-uhdh vehl | I'm lost | A set phrase. Then ask hvor er.
    jeg skal til Aarhus | yai skal tehl AW-hoos | I'm going to Aarhus | skal is a plan. Aarhus keeps the local Aa.
  `,
  "Work and study": `
    jeg kan | yai kan | I can |
    jeg skal | yai skal | I have to | also a plan: jeg skal arbejde
    jeg vil | yai vehl | I want | not the future. vil is [ve(l)] on Wiktionary.
    jeg må | yai maw | I may | permission. måtte in the past is a later note, not this card.
    betale | buh-TA-luh | to pay | be- is unstressed
    jeg skal arbejde | yai skal A-bai-dhuh | I have to work | A modal verb plus a bare infinitive. No at.
    jeg skal betale | yai skal buh-TA-luh | I have to pay | skal plus betale, no at.
    jeg vil gerne | yai vehl GEH-nuh | I would like | gerne makes vil polite. Still no at.
    vil du gerne have | vehl doo GEH-nuh HA-wuh | would you like (to one person) | to one person. No at before have.
    jeg kan ikke | yai kan EH-guh | I can't | ikke goes after the verb in a main clause.
    jeg må ikke | yai maw EH-guh | I'm not allowed | må ikke is permission refused. ikke goes after må.
    må jeg | maw yai | may I | The question starts with the verb.
    kan du hjælpe | kan doo YAEL-puh | can you help (to one person) | to one person. A modal verb plus a bare infinitive, no at.
    kan I komme | kan ee KAW-muh | can you come (to several people) | to several people. I is the capital pronoun, not the preposition i.
    jeg læser | yai LAE-suh | I read | One present in -r. Also "I am reading". It covers schoolwork too.
    jeg har et møde | yai ha eht MOE-dhuh | I have a meeting | møde is an et-word: et møde.
    på arbejde | paw A-bai-dhuh | at work | No article: på arbejde.
  `,
  "The past": `
    jeg var | yai va | I was |
    jeg havde | yai HA-dhuh | I had | careful form. Fast speech drops the dh too.
    jeg havde ikke | yai HA-dhuh EH-guh | I didn't have | ikke goes after the verb in a main clause. Danish has no did.
    jeg kom | yai kawm | I came |
    hun kom | hoon kawm | she came | The past is one form for every person.
    de kom | dee kawm | they came | de means they, said dee. Capital De is only the stiff you, and you recognise it.
    jeg gik | yai geek | I went | Past of gå. One form for every person.
    jeg fik | yai fehk | I got | Past of få. Not fåede.
    jeg så | yai saw | I saw | Past of se. The word så also means so; the aid is the same.
    jeg drak | yai drak | I drank | Past of drikke. Not drikkede.
    jeg spiste | yai SPEES-tuh | I ate |
    jeg boede | yai BOH-uh-dhuh | I lived | -ede. The aid adds a syllable (§6.5).
    jeg arbejdede | yai A-bai-dhuh-dhuh | I worked | Regular -ede. The aid adds a syllable.
    i går | ee gaw | yesterday | Put it first and the verb stays second.
    i går var jeg | ee gaw va yai | yesterday I was | Verb second: var is the second element.
    i går drak vi | ee gaw drak vee | yesterday we drank | Inversion: vi follows drak. Not drikkede.
    var du | va doo | were you (to one person) | to one person. A yes/no question starts with the verb.
  `,
  "Compliments": `
    det smager godt | deh SMA-wuh gawt | it tastes good | food
    det er lækkert | deh eh LAE-guhdh | it's delicious | Food. lækkert takes the neuter -t because of det.
    godt klaret | gawt KLA-uhdh | well done | work, a skill
    godt gået | gawt GAW-uhdh | nice work | Something just finished. tak is still the answer.
    hvor flot | vaw flawt | how nice | a thing, a result
    hvor er det flot | vaw eh deh flawt | how nice that is | A fuller form of hvor flot.
    sikke flot | SEH-guh flawt | that's so nice | sikke plus the adjective, no verb. A thing you can see.
    hvor dejligt | vaw DAI-leht | how lovely | News, a plan, a result.
    du ser godt ud | doo seh gawt oodh | you look good (to one person) | to one person.
    det ser godt ud | deh seh gawt oodh | it looks good | A dish or a result. For a person, say du ser godt ud.
    det klæder dig | deh KLAE-dhuh dai | it suits you (to one person) | to one person. Clothes or a color.
    jeg kan godt lide | yai kan gawt LEE-dhuh | I like | The chunk. godt stays in the phrase.
    jeg kan godt lide det | yai kan gawt LEE-dhuh deh | I like it | godt is part of the phrase
    jeg kan godt lide dig | yai kan gawt LEE-dhuh dai | I like you (to one person) | to one person. The phrase keeps godt.
    jeg elsker det | yai EHL-skuh deh | I love it | Stronger than kan godt lide. Food, a person, a place.
    tak skal du have | tak skal doo HA-wuh | thank you | the warm thanks. to one person.
    tak skal I have | tak skal ee HA-wuh | thank you (to several people) | to several people. I is capital.
  `,
  "Traps for English speakers": `
    gift | gehft | married, or poison | a present is en gave
    gave | GA-wuh | a present | not the English word gift
    en gave | ehn GA-wuh | a present (with the article) | gave is common gender: en gave. Not en gift.
    jeg er gift | yai eh gehft | I'm married | Here gift means married. A present is en gave.
    fabrik | FAB-rehk | a factory | cloth is stof. Stress unchecked.
    stof | stawf | cloth | A factory is en fabrik. stof is an et-word: et stof.
    eventuelt | EH-wuhn-too-uhlt | possibly | not "eventually". til sidst is "in the end". Stress unchecked.
    til sidst | tehl sehst | in the end | Use this for eventually. eventuelt means possibly.
    endelig | EH-nuh-leey | finally | Also a right word for eventually. eventuelt is only possibly.
    tømrer | TOEM-uh | a carpenter | Jeg er tømrer, with no en.
    jeg er tømrer | yai eh TOEM-uh | I'm a carpenter | No en after er.
    en god tømrer | ehn gohdh TOEM-uh | a good carpenter | An adjective brings en back.
    jeg er lærer | yai eh LAE-uh | I'm a teacher | No article, the same pattern as tømrer.
    jeg venter på bussen | yai VEHN-tuh paw BOO-suhn | I'm waiting for the bus | på, not for. The definite ending is on bussen.
    jeg ringer til dig | yai REHNG-uh tehl dai | I'll call you (to one person) | to one person. til, not a bare dig.
    vi er glade for det | vee eh GLA-dhuh foh deh | we're glad about it | for, not med. Plural adjective ending -e.
    det afhænger af vejret | deh AF-haeng-uh af VAI-uhdh | it depends on the weather | af, not på. vejret has the definite ending.
  `,
};

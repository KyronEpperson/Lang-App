/* en-da lessons 10–18 (inversion … modals). Written by EN-DA-2.
   Every pron is the unchanged output of tools/target/da/respell.js. */
module.exports = [
  {
    id: "inversion",
    title: "Verb second: I dag arbejder jeg",
    blurb: "Start with today, tomorrow, or a place, and keep the verb in the second slot.",
    deck: "Sentences and ikke",
    body: `
<p>English likes the person first: today I work, tomorrow I'm coming, in Copenhagen I live. Danish keeps the verb in one slot and lets the person move around it. You already put <b>ikke</b> after the verb when the person is first. This lesson is what happens when something else stands in front.</p>
<h3>The verb is the second element</h3>
<p>Call it verb second. A plain sentence still starts with the person: <b>Jeg arbejder i dag.</b> If you start with today, tomorrow, here, or a place, that opening is the first element and the verb is still next. The person follows the verb.</p>
<p>Count elements, not words. <b>i dag</b> is two words and one element. <b>i morgen</b> is one element, and it means tomorrow. <b>i København</b> is one element. The verb is the second element, not the second word.</p>
{{ex:Jeg arbejder i dag.|yai A-bai-dhuh ee da|I work today.}}
{{ex:I dag arbejder jeg.|ee da A-bai-dhuh yai|Today I'm working.}}
{{ex:I morgen kommer jeg.|ee MOH-guhn KAW-muh yai|I'm coming tomorrow.}}
{{ex:Her bor jeg.|heh boh yai|I live here.}}
{{ex:I København bor jeg.|ee koe-buhn-HAWN boh yai|In Copenhagen, I live.}}
<p>The stress on København in the line is a guess. Trust the voice. <b>ikke</b> still follows the verb when the person has moved: <b>I dag arbejder jeg ikke.</b> Same slot as in <b>Jeg arbejder ikke.</b></p>
{{ex:I dag arbejder jeg ikke.|ee da A-bai-dhuh yai EH-guh|Today I don't work.}}
<h3>A whole clause can be the first element</h3>
<p>A clause with <b>hvis</b> or <b>når</b> can stand in front. The whole clause is the first element, so the verb of the main clause comes right after the comma, and the person follows that verb. Inside the hvis-clause, <b>ikke comes before the verb</b>, which you already practiced.</p>
{{ex:Hvis du ikke kommer, går jeg.|vehs doo EH-guh KAW-muh gaw yai|If you don't come, I'll leave. (to one person)}}
<p>Both orders are ordinary Danish. Start with the person, or start with the time or the place. Either way the verb stays the second element. Pick the order the sentence is asking for, and do not park the person between the opener and the verb.</p>
<div class="tip"><b>Most common mistake:</b> leaving the person in the English slot. <b>I dag jeg arbejder</b> → <b>I dag arbejder jeg</b>.</div>
`,
    check: [
      ["Today I work, and the sentence starts with today. Which one is right?", ["I dag jeg arbejder.", "I dag arbejder jeg.", "Jeg i dag arbejder.", "I dag er jeg arbejder."], 1, "i dag is the first element, so arbejder comes next and jeg follows the verb."],
      ["In I København bor jeg, which word is the second element?", ["I", "København", "bor", "jeg"], 2, "i København is one element. The verb bor is the second element."],
      ["If you don't come, I'll leave. (to one person) Which one keeps the verb second?", ["Hvis du ikke kommer, jeg går.", "Hvis du ikke kommer, går jeg.", "Hvis du kommer ikke, går jeg.", "Hvis ikke du kommer, jeg går."], 1, "The hvis-clause is the first element, so går comes next. Inside hvis, ikke comes before the verb."]
    ],
    practice: [
      ["mc", "Today I'm working. (start with i dag)", "I dag arbejder jeg.", "I dag jeg arbejder.", "Jeg i dag arbejder.", "I dag er jeg arbejder.", "Verb second: i dag is the first element, then arbejder."],
      ["mc", "I'm coming tomorrow. (start with i morgen)", "I morgen kommer jeg.", "I morgen jeg kommer.", "Jeg i morgen kommer.", "I morgen er jeg kommer.", "i morgen is one element, so kommer is the second element."],
      ["mc", "I live here. (start with her)", "Her bor jeg.", "Her jeg bor.", "Jeg her bor.", "Her er bor jeg.", "Verb second: her is first, then bor, then jeg."],
      ["mc", "It is a house.", "Det er et hus.", "Det er en hus.", "Den er et hus.", "Det er et bil.", "hus is neuter: et hus."],
      ["mc", "Today I don't work. (start with i dag)", "I dag arbejder jeg ikke.", "I dag jeg arbejder ikke.", "I dag ikke arbejder jeg.", "Jeg ikke arbejder i dag.", "ikke goes after the verb, and the verb stays the second element."],
      ["or", "Today I'm working. (start with i dag)", "I dag arbejder jeg", "ikke", "Verb second: i dag is the first element, then arbejder."],
      ["or", "a house", "et hus", "en", "hus is neuter: et hus."],
      ["or", "I'm coming tomorrow. (start with i morgen)", "I morgen kommer jeg", "ikke", "The verb is the second element: kommer comes before jeg."],
      ["fi", "I dag __ jeg.", "Today I'm working. (start with i dag)", "arbejder", "arbejde|er|spiser", "The verb in the second slot is the present, arbejder."],
      ["fi", "Det er __ hus.", "It is a house.", "et", "en|den|det", "hus is an et-word."],
      ["fi", "Her __ jeg.", "I live here. (start with her)", "bor", "er|ikke|jeg", "Verb second: her first, then bor, then jeg."],
      ["ty", "I live in Copenhagen. (start with i København)", "I København bor jeg.", "i København · bo · jeg · place first", "ikke en", "Verb second: i København is the first element, then bor."],
      ["ty", "a car", "en bil", "bil · common gender", "et", "bil is common gender: en bil."],
      ["ty", "Today I don't work. (start with i dag)", "I dag arbejder jeg ikke.", "i dag · arbejde · ikke · today first", "en er", "Verb second: i dag is first, then arbejder, and ikke goes after the verb."]
    ]
  },
  {
    id: "questions",
    title: "Questions: hvad, hvor, and yes/no",
    blurb: "Ask a yes/no question and a question with what, where, who, when, or how.",
    deck: "Questions",
    body: `
<p>English builds most questions with do: Do you work? Where do you live? Danish has no do there. Do not insert <b>gør</b>. A question is another kind of verb second: something stands in front of the verb, or the verb itself moves to the front.</p>
<h3>Yes or no: start with the verb</h3>
<p>A yes/no question starts with the verb. The person follows it. <b>Arbejder du?</b> is "do you work?" to one person. <b>Taler du dansk?</b> is "do you speak Danish?" To several people the word is <b>I</b>, always a capital: <b>Arbejder I?</b> A small <b>i</b> is the preposition "in". On the line they are the same sound. Write the capital anyway.</p>
{{ex:Arbejder du?|A-bai-dhuh doo|Do you work? (to one person)}}
{{ex:Taler du dansk?|TA-luh doo dansk|Do you speak Danish? (to one person)}}
{{ex:Arbejder I?|A-bai-dhuh ee|Do you work? (to several people)}}
{{ex:Bor du i København?|boh doo ee koe-buhn-HAWN|Do you live in Copenhagen? (to one person)}}
<h3>The question word, then the verb</h3>
<p>A question word is the first element. The verb is the second element, and the person follows the verb. That is the same order as <b>I dag arbejder jeg</b>, with the question word in the opening slot.</p>
<div class="tbl"><table><tr><th>Danish</th><th>English</th></tr><tr><td class="k">hvad</td><td>what</td></tr><tr><td class="k">hvor</td><td>where</td></tr><tr><td class="k">hvem</td><td>who</td></tr><tr><td class="k">hvornår</td><td>when</td></tr><tr><td class="k">hvordan</td><td>how</td></tr></table></div>
{{ex:Hvor bor du?|vaw boh doo|Where do you live? (to one person)}}
{{ex:Hvad hedder du?|vadh HEH-dhuh doo|What's your name? (to one person)}}
{{ex:Hvem er det?|vehm eh deh|Who is that?}}
{{ex:Hvornår kommer du?|VOH-naw KAW-muh doo|When are you coming? (to one person)}}
{{ex:Hvad koster det?|vadh KOHS-tuh deh|What does it cost?}}
{{ex:Hvordan går det?|vaw-DAN gaw deh|How's it going?}}
<p><b>Hvordan går det?</b> does not say du or I. It asks how things are. <b>Hvor bor I?</b> is the where-question to several people. As a question you ask out loud, the verb comes right after the question word. The English shape, with the person still in front of the verb, is the trap: <b>Hvor du bor?</b> A <b>gør</b> copied from do is the other trap: <b>Gør du arbejder?</b> Inside a longer sentence the words hvor du bor can be fine. That is not the question you are asking here.</p>
{{ex:Hvor bor I?|vaw boh ee|Where do you live? (to several people)}}
<div class="tip"><b>Most common mistake:</b> English word order, or a do-word. <b>Hvor du bor?</b> → <b>Hvor bor du?</b></div>
`,
    check: [
      ["Do you speak Danish? (to one person)", ["Taler du dansk?", "Gør du taler dansk?", "Du taler gør dansk?", "Taler dansk du?"], 0, "A yes/no question starts with the verb. Danish has no gør."],
      ["Where do you live? (to one person)", ["Hvor du bor?", "Hvor gør du bor?", "Bor hvor du?", "Hvor bor du?"], 3, "hvor is the first element, then bor, then du."],
      ["Which question word means when?", ["hvor", "hvad", "hvornår", "hvem"], 2, "hvornår asks when. hvor asks where, and hvem asks who."]
    ],
    practice: [
      ["mc", "Do you work? (to one person)", "Arbejder du?", "Gør du arbejder?", "Arbejde du?", "Gør du arbejde?", "A yes/no question starts with the verb. There is no gør."],
      ["mc", "Where do you live? (to one person)", "Hvor bor du?", "Hvor du bor?", "Hvor gør du bor?", "Hvor bor dig?", "Inversion: hvor is first, then bor, then du."],
      ["mc", "What's your name? (to one person)", "Hvad hedder du?", "Hvad du hedder?", "Hvad hedder dig?", "Hvad er du hedder?", "The verb hedder comes right after hvad."],
      ["mc", "Do you work? (to several people)", "Arbejder I?", "Gør I arbejder?", "Arbejde I?", "Arbejder vi?", "To several people the word is I, and the question still starts with the verb."],
      ["mc", "Who is that?", "Hvem er det?", "Hvem det er?", "Hvem gør det?", "Hvad hvem er det?", "hvem is the first element, then er, then det."],
      ["or", "Where do you live? (to one person, start with hvor)", "Hvor bor du", "gør", "Inversion: hvor is first, then bor, then du."],
      ["or", "Do you speak Danish? (to one person, start with the verb)", "Taler du dansk", "gør", "A yes/no question is inversion: the verb comes before du."],
      ["or", "a car", "en bil", "et", "bil is an en-word."],
      ["fi", "__ bor du?", "Where do you live? (to one person)", "Hvor", "Hvad|Hvem|Hvordan", "hvor asks where, and the verb comes next."],
      ["fi", "Arbejder __?", "Do you work? (to several people)", "I", "du|dig|vi", "To several people the word is I. du is one person."],
      ["fi", "Det er __ æble.", "It is an apple.", "et", "en|den|det", "æble is an et-word."],
      ["ty", "When are you coming? (to one person, start with hvornår)", "Hvornår kommer du?", "hvornår · komme · du · question word first", "gør når", "Inversion: hvornår is first, then kommer, then du."],
      ["ty", "What does it cost? (start with hvad)", "Hvad koster det?", "hvad · koste · det", "gør en", "The verb is the second element: koster comes right after hvad."],
      ["ty", "an apple", "et æble", "æble · neuter", "en", "æble is neuter: et æble."]
    ]
  },
  {
    id: "nationality",
    title: "Nationalities and languages",
    blurb: "Say what you are and which language you speak, with a small letter and no a.",
    deck: "Nationalities and languages",
    body: `
<p>English says "I am an American" and "I speak English", with a capital on the language. Danish drops the article after <b>er</b>, and it writes the language, the nationality, and the adjective with a small letter. The country keeps its capital.</p>
<h3>No article after er</h3>
<p>A man says <b>Jeg er amerikaner</b> and <b>Jeg er dansker</b> and <b>Jeg er englænder</b>. There is no <b>en</b> in that sentence. Anyone can use the adjective instead, and the article stays off: <b>Jeg er amerikansk</b>, <b>Jeg er dansk</b>. The adjective works for any person. The noun with the article is a different sentence: <b>en dansker</b> is "a Dane", <b>en amerikaner</b> is "an American", <b>en englænder</b> is "an Englishman". Those are common gender. You use them when you mean the person as a noun, not right after er.</p>
{{ex:Jeg er amerikaner.|yai eh A-muh-ree-ka-nuh|I'm American.}}
{{ex:Jeg er amerikansk.|yai eh A-muh-ree-kansk|I'm American.}}
{{ex:Jeg er dansker.|yai eh DAN-skuh|I'm a Dane.}}
{{ex:en dansker|ehn DAN-skuh|a Dane}}
{{ex:Jeg er englænder.|yai eh EHNG-lae-nuh|I'm English.}}
{{ex:Er du dansker?|eh doo DAN-skuh|Are you a Dane? (to one person)}}
<p>The stress on amerikaner, amerikansk, and Amerika in the line is a guess. Trust the voice. A question you already know still has no en: <b>Er du dansker?</b> The verb is first, and the article stays out.</p>
<h3>Languages take a small letter</h3>
<p><b>Jeg taler engelsk.</b> <b>Jeg taler dansk.</b> The language name is the same word as the adjective, and both take a small letter. The country is the one with the capital: <b>Amerika</b>, <b>England</b>, <b>Danmark</b>. <b>Jeg kommer fra Amerika.</b> A language, the noun itself, is <b>et sprog</b>. sprog is neuter. dansk and engelsk are not that noun. You do not say "et dansk" for the language you speak.</p>
{{ex:Jeg taler engelsk.|yai TA-luh EHNG-uhlsk|I speak English.}}
{{ex:Jeg taler dansk.|yai TA-luh dansk|I speak Danish.}}
{{ex:Jeg kommer fra Amerika.|yai KAW-muh fra A-muh-ree-ka|I come from America.}}
{{ex:Jeg kommer fra Danmark.|yai KAW-muh fra DAN-mak|I come from Denmark.}}
{{ex:Det er et sprog.|deh eh eht spraw|It is a language.}}
<h3>The article comes back with an adjective</h3>
<p>After er, the bare nationality has no article. Put an adjective in front of the noun, and the article returns: <b>en dygtig tømrer</b>, a skilled carpenter. The line is rough on dygtig. Trust the voice for that word. The article is back because of the adjective, not because English says "a".</p>
{{ex:en dygtig tømrer|ehn DEW-teey TOEM-uh|a skilled carpenter}}
<div class="tip"><b>Most common mistake:</b> an article after er, or a capital on the language. <b>Jeg er en amerikaner</b> → <b>Jeg er amerikaner</b>.</div>
`,
    check: [
      ["I speak English. Which spelling is the one this course writes?", ["Jeg taler Engelsk.", "Jeg taler en engelsk.", "Jeg taler engelsk.", "Jeg er engelsk."], 2, "The language takes a small letter, and taler is the verb for speak."],
      ["I'm American. (a man, the noun)", ["Jeg er amerikaner.", "Jeg er en amerikaner.", "Jeg er amerikaneren.", "Jeg er en amerikansk."], 0, "After er, the nationality noun takes no en. A man says amerikaner."],
      ["When does en come back in front of a person or a trade?", ["It never comes back after er", "When an adjective is added, as in en dygtig tømrer", "Only for countries", "Only in a question"], 1, "Jeg er amerikaner, but en dygtig tømrer, because the adjective brings the article back."]
    ],
    practice: [
      ["mc", "I'm American. (a man, the noun)", "Jeg er amerikaner.", "Jeg er en amerikaner.", "Jeg er amerikaneren.", "Jeg amerikaner er.", "No indefinite article after er. A man says amerikaner."],
      ["mc", "I speak English.", "Jeg taler engelsk.", "Jeg taler en engelsk.", "Jeg er taler engelsk.", "Jeg taler engelske.", "The language has a small letter, and there is no article."],
      ["mc", "a Dane", "en dansker", "et dansker", "danskeren", "en dansk", "dansker is common gender, so the indefinite article is en."],
      ["mc", "I come from America.", "Jeg kommer fra Amerika.", "Jeg kommer fra Amerikaen.", "Jeg er kommer fra Amerika.", "Jeg kommer Amerika.", "kommer takes fra, and the country name stays Amerika."],
      ["mc", "I'm American. (anyone, the adjective)", "Jeg er amerikansk.", "Jeg er en amerikansk.", "Jeg er amerikaneren.", "Jeg taler amerikansk.", "The adjective works for anyone, and it still takes no en after er."],
      ["or", "I'm a Dane. (a man, the noun, start with jeg)", "Jeg er dansker", "en", "No indefinite article after er."],
      ["or", "Today I speak Danish. (start with i dag)", "I dag taler jeg dansk", "en", "Verb second: i dag is the first element, then taler."],
      ["or", "a Dane", "en dansker", "et", "dansker is common gender: en dansker."],
      ["fi", "Jeg er __.", "I'm American. (a man, the noun)", "amerikaner", "en amerikaner|engelsk|dansk", "No indefinite article after er. A man says amerikaner."],
      ["fi", "Jeg taler __.", "I speak English.", "engelsk", "engelske|dansk|amerikansk", "The language you speak here is engelsk, with a small letter."],
      ["fi", "Det er __ sprog.", "It is a language.", "et", "en|den|det", "sprog is an et-word."],
      ["ty", "a house", "et hus", "hus · neuter", "en", "hus is neuter: et hus."],
      ["ty", "Today I speak English. (start with i dag)", "I dag taler jeg engelsk.", "i dag · tale · engelsk · today first", "en dansk", "Verb second: i dag is the first element, then taler."],
      ["ty", "I'm a Dane. (a man, the noun, start with jeg)", "Jeg er dansker.", "være · dansker · no en", "en et", "No indefinite article after er."]
    ]
  },
  {
    id: "numbers",
    title: "Numbers and prices",
    blurb: "Count to 100, say 21 as one word, and give a price in kroner.",
    deck: "Numbers, time and prices",
    body: `
<p>The numbers from zero through twenty are a short list. From fifty upward, Danish does not build the word out of "half" and "three" or out of "five" and "ten". Learn each tens word as a chunk. Prices are in <b>kroner</b>.</p>
<h3>Zero through the tens</h3>
<div class="tbl"><table><tr><th></th><th>Danish</th></tr><tr><td>0–10</td><td class="k">nul, en or et, to, tre, fire, fem, seks, syv, otte, ni, ti</td></tr><tr><td>11–19</td><td class="k">elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten</td></tr><tr><td>20, 30, 40</td><td class="k">tyve, tredive, fyrre</td></tr><tr><td>50–90</td><td class="k">halvtreds, tres, halvfjerds, firs, halvfems</td></tr><tr><td>100</td><td class="k">et hundrede</td></tr></table></div>
<p>One agrees with the noun, the same way en and et already do. <b>en krone</b> is common gender. <b>et minut</b> is neuter. <b>to</b>, <b>tre</b>, and any number that does not end in one stay the same for every noun. A compound that ends in one still agrees: <b>enogtyve kroner</b>, <b>etogtyve år</b>. With no noun, the count is <b>enogtyve</b>. Forty is <b>fyrre</b>, its own word, not fire plus ti. A hundred, the full form, is <b>et hundrede</b>. hundrede is neuter.</p>
{{ex:en krone|ehn KROH-nuh|one krone}}
{{ex:et minut|eht MEE-noot|a minute}}
{{ex:fyrre|FOE-uh|forty}}
{{ex:et hundrede|eht HOON-ruh-dhuh|one hundred}}
<h3>21 is one word</h3>
<p>English says twenty-one, or pictures "one and twenty". Danish writes one word, with the small number first: <b>enogtyve</b>, <b>toogtyve</b>, <b>femogtyve</b>. The <b>og</b> in the middle is the word og, "and", and the line says aw, not "ohg". Do not leave a space. Do not put the twenty first.</p>
{{ex:enogtyve|ehn-aw-TEW-wuh|twenty-one}}
{{ex:toogtyve|toh-aw-TEW-wuh|twenty-two}}
{{ex:femogtyve|fehm-aw-TEW-wuh|twenty-five}}
<h3>Fifty through ninety, and a price</h3>
<p>Say these as whole words. Do not take them apart.</p>
{{ex:halvtreds|hal-TREHS|fifty}}
{{ex:tres|trehs|sixty}}
{{ex:halvfjerds|hal-FYEHS|seventy}}
{{ex:firs|feers|eighty}}
{{ex:halvfems|hal-FEHMS|ninety}}
<p>One krone, then the plural <b>kroner</b> with no article: <b>Det koster tyve kroner.</b> You can also put the price first. The price is then the first element, and <b>koster</b> stays the second element: <b>Halvtreds kroner koster det.</b></p>
{{ex:Det koster tyve kroner.|deh KOHS-tuh TEW-wuh KROH-nuh|It costs twenty kroner.}}
{{ex:Halvtreds kroner koster det.|hal-TREHS KROH-nuh KOHS-tuh deh|It costs fifty kroner.}}
<div class="tip"><b>Most common mistake:</b> a space, or the English order. <b>en og tyve</b> → <b>enogtyve</b>.</div>
`,
    check: [
      ["How do you say 25?", ["tyvefem", "femogtyve", "fem og tyve", "toogtyve"], 1, "25 is one word, femogtyve, with the small number first."],
      ["Which word is sixty?", ["halvtreds", "halvfjerds", "firs", "tres"], 3, "60 is the chunk tres. 50 is halvtreds, 70 is halvfjerds, and 80 is firs."],
      ["Which pair matches the noun?", ["en krone, et minut", "et krone, en minut", "en krone, en minut", "et krone, et minut"], 0, "krone is common gender. minut is neuter."]
    ],
    practice: [
      ["mc", "21 =", "enogtyve", "en og tyve", "tyveen", "femogtyve", "21 is one word. The og in the middle is the word og."],
      ["mc", "50 =", "halvtreds", "femti", "halv tres", "fyrre", "50 is the chunk halvtreds. Do not build it out of half."],
      ["mc", "70 =", "halvfjerds", "tres", "firs", "halvfems", "70 is the chunk halvfjerds."],
      ["mc", "It costs twenty kroner. (start with det)", "Det koster tyve kroner.", "Det koster tyve krone.", "Det koster kroner tyve.", "Tyve det koster kroner.", "The price uses the plural kroner, and koster is the second element."],
      ["mc", "a minute", "et minut", "en minut", "et minutter", "en minute", "minut is neuter: et minut."],
      ["or", "It costs fifty kroner. (start with halvtreds kroner)", "Halvtreds kroner koster det", "en", "Verb second: the price is the first element, then koster."],
      ["or", "a minute", "et minut", "en", "minut is an et-word."],
      ["or", "It costs twenty kroner. (start with det)", "Det koster tyve kroner", "krone", "Verb second: det is first, then koster."],
      ["fi", "Det koster __ kroner.", "It costs twenty kroner.", "tyve", "krone|enogtyve|fyrre", "Twenty is tyve. The plural is kroner."],
      ["fi", "__ krone", "a krone", "en", "et|den|det", "krone is common gender: the indefinite article is en."],
      ["fi", "__ minut", "a minute", "et", "en|den|det", "minut is neuter: et minut."],
      ["ty", "a minute", "et minut", "minut · neuter", "en", "minut is an et-word."],
      ["ty", "It costs fifty kroner. (start with halvtreds kroner)", "Halvtreds kroner koster det.", "halvtreds · kroner · koste · price first", "en et", "Verb second: the price is the first element, then koster."],
      ["ty", "twenty-one", "enogtyve", "en · og · tyve · write one word", "og tyve", "21 is one word. The og in the middle sounds like the word og."]
    ]
  },
  {
    id: "plural",
    title: "Plurals: -er, -e, or nothing",
    blurb: "Make a noun plural and leave the article off.",
    deck: "en and et",
    body: `
<p>English adds -s and can keep "the" or "some". Danish has a few plural shapes, and the indefinite plural has no article at all. <b>biler</b> means "cars", not "the cars" and not "a cars". The form with "the" on it is the next lesson.</p>
<h3>Three common shapes, and two that change</h3>
<p>There is no single rule that covers every noun, so learn the plural with the noun. These are the shapes you need now.</p>
<div class="tbl"><table><tr><th>One</th><th>More than one</th><th>What happened</th></tr><tr><td class="k">en bil</td><td class="k">biler</td><td>add -er</td></tr><tr><td class="k">et hus</td><td class="k">huse</td><td>add -e</td></tr><tr><td class="k">et æble</td><td class="k">æbler</td><td>the word already ends in e, so add -r</td></tr><tr><td class="k">et år</td><td class="k">år</td><td>no ending</td></tr><tr><td class="k">et barn</td><td class="k">børn</td><td>the vowel changes</td></tr><tr><td class="k">en mand</td><td class="k">mænd</td><td>the vowel changes</td></tr></table></div>
{{ex:Her er to biler.|heh eh toh BEE-luh|Here are two cars.}}
{{ex:Her er tre huse.|heh eh treh HOO-suh|Here are three houses.}}
{{ex:Her er æbler.|heh eh AEB-luh|Here are apples.}}
{{ex:et barn|eht ban|a child}}
{{ex:Her er børn.|heh eh boen|Here are children.}}
{{ex:en mand|ehn man|a man}}
{{ex:Her er to mænd.|heh eh toh maen|Here are two men.}}
{{ex:Det er to år.|deh eh toh aw|It is two years.}}
<p>bil is common gender, an en-word, and the plural is biler. hus and æble and år and barn are neuter. mand is common gender. The d in mand is silent, and the line writes man. It does not mark the stød. You hear the difference. You do not type it. The plural mænd is a different vowel, so the line can show it.</p>
<p>The line also swallows the plural -r on æbler, so æble and æbler look alike there. The spelling still has the r. år does not grow an ending and does not grow an English -s. Two years is <b>to år</b>.</p>
<h3>No article, and no -s</h3>
<p>Do not put en or et on the plural. <b>to biler</b>, <b>tre huse</b>, <b>to mænd</b>. Not en biler, and not bils. The number, if you want one, is enough. A fronted time still keeps the verb second: <b>I dag spiser jeg æbler.</b></p>
<div class="tip"><b>Most common mistake:</b> an article on the plural, or an English -s. <b>en biler</b> → <b>biler</b>.</div>
`,
    check: [
      ["cars =", ["biler", "en biler", "bils", "bilene"], 0, "bil adds -er, and the indefinite plural has no article."],
      ["children =", ["barn", "barns", "børn", "børner"], 2, "barn is neuter, and the plural changes the vowel: børn."],
      ["Which plural adds nothing?", ["biler", "år", "huse", "mænd"], 1, "år stays år. Two years is to år."]
    ],
    practice: [
      ["mc", "cars =", "biler", "bils", "en biler", "bilene", "bil adds -er, and the plural has no article."],
      ["mc", "houses =", "huse", "huser", "hus", "et huse", "hus adds -e: huse. No article."],
      ["mc", "children =", "børn", "barns", "børner", "et børn", "barn changes its vowel: børn."],
      ["mc", "men =", "mænd", "mands", "mander", "mænds", "mand changes its vowel: mænd. No English -s."],
      ["mc", "two years =", "to år", "to ar", "to årer", "to års", "år does not change, and there is no article.", "!strict"],
      ["or", "two cars", "to biler", "en", "No indefinite article on the plural. bil is common gender."],
      ["or", "Today I eat apples. (start with i dag)", "I dag spiser jeg æbler", "et", "Verb second: i dag is the first element, then spiser."],
      ["or", "an apple", "et æble", "en", "æble is an et-word."],
      ["fi", "to __", "two cars", "biler", "bil|bils|en bil", "The plural is biler, with no article and no -s."],
      ["fi", "tre __", "three houses", "huse", "hus|huser|et hus", "hus adds -e in the plural: huse."],
      ["fi", "to __", "two years", "år", "ar|årer|års", "år does not change in the plural. The letter å is not an a.", "!strict"],
      ["ty", "two years", "to år", "to · år · no ending", "en ar", "år is neuter, and the plural adds nothing and takes no indefinite article.", "!strict"],
      ["ty", "Today I eat apples. (start with i dag)", "I dag spiser jeg æbler.", "i dag · spise · æble · today first", "en et", "Verb second: i dag is the first element, then spiser."],
      ["ty", "two men", "to mænd", "to · mand · vowel change", "en mander", "mand becomes mænd. The plural takes no indefinite article."]
    ]
  },
  {
    id: "definite",
    title: "The definite ending: bilen, huset",
    blurb: "Say the car and the house with an ending, not with a separate word for the.",
    deck: "The definite ending",
    body: `
<p>English puts a separate word in front: the car, the house, the apples. Danish adds an ending to the noun. You already know the sound from the line: -en is uhn, and -et is uhdh, with the t said as soft d. This lesson is when to write the ending.</p>
<h3>One ending for "the"</h3>
<p>A common-gender noun takes <b>-en</b>, or <b>-n</b> if the word already ends in e. A neuter noun takes <b>-et</b>, or <b>-t</b> if it already ends in e. The plural, either gender, takes <b>-ne</b> on the plural form.</p>
<div class="tbl"><table><tr><th>One</th><th>The one</th><th>The ones</th></tr><tr><td class="k">en bil</td><td class="k">bilen</td><td class="k">bilerne</td></tr><tr><td class="k">et hus</td><td class="k">huset</td><td class="k">husene</td></tr><tr><td class="k">et æble</td><td class="k">æblet</td><td class="k">æblerne</td></tr><tr><td class="k">et barn</td><td class="k">barnet</td><td class="k">børnene</td></tr></table></div>
{{ex:Bilen er her.|BEE-luhn eh heh|The car is here.}}
{{ex:Huset er i Odense.|HOO-suhdh eh ee OH-dhuhn-suh|The house is in Odense.}}
{{ex:Æblet er her.|AEB-luhdh eh heh|The apple is here.}}
{{ex:bilerne|BEE-luh-nuh|the cars}}
{{ex:æblerne|AEB-luh-nuh|the apples}}
{{ex:Børnene kommer i dag.|BOE-nuh-nuh KAW-muh ee da|The children are coming today.}}
<p>You do not also put a little word in front of the plain noun. <b>den bil</b> is not how you say "the car". <b>bilen</b> already means the car. <b>huset</b> already means the house.</p>
<h3>Pointing back, and words English leaves bare</h3>
<p>You already name a new thing with <b>det er</b>, whatever the gender. Once the thing is known, a common-gender thing is <b>den</b> and a neuter thing is <b>det</b>. The car is bilen. Pointing back at it: <b>Den er her.</b> A person you know is still han or hun, not den.</p>
{{ex:Den er her.|dehn eh heh|It is here. (a known en-word)}}
<p>English often says "life", "the water", and "the toilet" with a bare noun, or skips "the". Danish still uses the ending. vand is neuter: <b>vandet</b>. liv is neuter: <b>livet</b>. toilet is neuter: <b>toilettet</b>. The stress on toilettet in the line is unchecked. Trust the voice.</p>
{{ex:Vandet er her.|VA-nuhdh eh heh|The water is here.}}
{{ex:livet|LEE-wuhdh|life}}
{{ex:Hvor er toilettet?|vaw eh TOH-ee-luh-duhdh|Where is the toilet?}}
<h3>Not on top of min</h3>
<p><b>min bil</b> is "my car". <b>bilen</b> is "the car". Danish does not stack them. Never <b>min bilen</b>. Pick one. The full set min, mit, mine comes later. For now, remember that min and the definite ending do not share the noun.</p>
{{ex:Det er min bil.|deh eh meen beel|It is my car.}}
<div class="tip"><b>Most common mistake:</b> a separate "the", or the ending stacked on min. <b>min bilen</b> → <b>min bil</b>.</div>
`,
    check: [
      ["the house =", ["det hus", "husen", "et hus", "huset"], 3, "hus is neuter, so the definite ending is -et: huset."],
      ["my car =", ["min bilen", "min bil", "bilen min", "den min bil"], 1, "min bil or bilen. Never both. The definite ending does not stack on min."],
      ["Where is the toilet?", ["Hvor er toilettet?", "Hvor er toilet?", "Hvor er det toilet?", "Hvor er toileten?"], 0, "toilet is neuter, so the definite ending is -et: toilettet."]
    ],
    practice: [
      ["mc", "the car =", "bilen", "den bil", "en bil", "bil", "The definite ending is -en: bilen. There is no separate word for the."],
      ["mc", "the house =", "huset", "det hus", "husen", "et hus", "hus is neuter, so the definite ending is -et: huset."],
      ["mc", "the children =", "børnene", "de børn", "børnen", "et børn", "The plural definite ending is -ne: børnene."],
      ["mc", "the toilet =", "toilettet", "toilet", "det toilet", "toileten", "Danish marks the on toilet: toilettet."],
      ["mc", "my car, not the car", "min bil", "min bilen", "bilen min", "den min bil", "min bil or bilen. The definite ending does not stack on min."],
      ["or", "The car is here. (start with bilen)", "Bilen er her", "den", "The definite ending is -en: bilen."],
      ["or", "Today I'm taking the train. (start with i dag)", "I dag tager jeg toget", "den", "Verb second: i dag is the first element, then tager."],
      ["or", "The house is here. (start with huset)", "Huset er her", "det", "hus is neuter: the definite ending is -et."],
      ["fi", "Hvor er __?", "Where is the toilet?", "toilettet", "toilet|det toilet|toileten", "The definite ending is -et: toilettet."],
      ["fi", "__ er her.", "The car is here.", "Bilen", "Bil|Den bil|En bil", "The definite ending is -en: bilen."],
      ["fi", "Det er __.", "It is my car.", "min bil", "min bilen|bilen|den bil", "No definite ending on top of min: min bil."],
      ["ty", "the apples", "æblerne", "æble · plural · -ne", "det en", "The definite ending on the plural is -ne. æble is neuter."],
      ["ty", "Today the children are coming. (start with i dag)", "I dag kommer børnene.", "i dag · komme · børn · today first", "de en", "Verb second: i dag is the first element, then kommer."],
      ["ty", "the house", "huset", "hus · -et", "det en", "hus is neuter: the definite ending is -et."]
    ]
  },
  {
    id: "time",
    title: "Telling the time",
    blurb: "Tell the time, read halv tre as 2:30, and read a timetable in the 24-hour clock.",
    deck: "Numbers, time and prices",
    body: `
<p>Ask <b>Hvad er klokken?</b> The answer starts with <b>Den er</b> or <b>Klokken er</b>. Both tell the time. <b>Den er tre</b> is 3:00. One o'clock is the odd one: <b>Den er et</b>, the neuter et, the same et as et hus. Not en.</p>
{{ex:Hvad er klokken?|vadh eh KLAW-guhn|What time is it?}}
{{ex:Den er tre.|dehn eh treh|It's 3:00.}}
{{ex:Klokken er tre.|KLAW-guhn eh treh|It's 3:00.}}
{{ex:Den er et.|dehn eh eht|It's 1:00.}}
<h3>Half an hour before the hour</h3>
<p><b>halv tre</b> is 2:30, half past two. It is half an hour before three, not half past three. <b>halv otte</b> is 7:30. The hour you name is the one that is coming, not the one that has passed.</p>
<p><b>kvart over tre</b> is 3:15, a quarter past three. <b>kvart i tre</b> is 2:45, a quarter to three. The <b>i</b> in kvart i means "to", before the hour. It is not the preposition "in".</p>
{{ex:Klokken er halv tre.|KLAW-guhn eh halv treh|It's 2:30.}}
{{ex:Den er kvart over tre.|dehn eh kvat OH-wuh treh|It's 3:15.}}
{{ex:Den er kvart i tre.|dehn eh kvat ee treh|It's 2:45.}}
<p>The v in halv is often silent. The line still writes it. Trust the voice. When the 12-hour phrase could be morning or evening, add <b>om morgenen</b> or <b>om aftenen</b>. Those phrases already wear the definite ending. <b>halv otte om morgenen</b> is 7:30 in the morning. <b>halv otte om aftenen</b> is 7:30 in the evening.</p>
{{ex:Den er halv otte om morgenen.|dehn eh halv AW-duh awm MOH-guh-nuhn|It's 7:30 in the morning.}}
{{ex:Den er halv otte om aftenen.|dehn eh halv AW-duh awm AF-tuh-nuhn|It's 7:30 in the evening.}}
<h3>The time can come first, and a timetable does not use halv</h3>
<p><b>Jeg kommer halv tre</b> puts the time at the end. <b>Halv tre kommer jeg</b> puts it first, so kommer stays the second element. The morning phrase can come first the same way: <b>Om morgenen er den halv otte.</b> A timetable uses the 24-hour clock, said as numbers. 14:00 is <b>fjorten</b>. 14:30 is <b>fjorten tredive</b>, not halv tre and not halv femten. halv belongs to the 12-hour clock.</p>
{{ex:Om morgenen er den halv otte.|awm MOH-guh-nuhn eh dehn halv AW-duh|It's 7:30 in the morning.}}
{{ex:Jeg kommer halv tre.|yai KAW-muh halv treh|I come at 2:30.}}
{{ex:Halv tre kommer jeg.|halv treh KAW-muh yai|I come at 2:30.}}
{{ex:Toget går klokken fjorten.|TOH-wuhdh gaw KLAW-guhn FYOH-tuhn|The train leaves at 14:00.}}
{{ex:Toget går klokken fjorten tredive.|TOH-wuhdh gaw KLAW-guhn FYOH-tuhn TREH-dhuh|The train leaves at 14:30.}}
<p>An hour, the unit, is <b>en time</b>, common gender. A minute stays <b>et minut</b>, neuter. The line stresses minut on the first syllable. Trust the voice.</p>
{{ex:en time|ehn TEE-muh|an hour}}
<div class="tip"><b>Most common mistake:</b> reading the named hour as the hour that has passed. <b>halv tre</b> as 3:30 → <b>halv tre</b> as 2:30.</div>
`,
    check: [
      ["What is halv tre?", ["2:30", "3:30", "2:15", "3:15"], 0, "halv tre is half an hour before three, so 2:30, half past two."],
      ["It's one o'clock. Which sentence is right?", ["Den er en.", "Den er et.", "Den er to.", "Klokken er en."], 1, "One o'clock uses the neuter et: Den er et."],
      ["What is kvart i fire?", ["4:15", "4:30", "3:45", "3:15"], 2, "kvart i fire is a quarter to four, so 3:45."]
    ],
    practice: [
      ["mc", "halv tre means", "2:30", "3:30", "3:15", "2:15", "halv tre is half an hour before three, so 2:30."],
      ["mc", "It's 3:15. (use den)", "Den er kvart over tre.", "Den er kvart i tre.", "Den er halv tre.", "Den er tre kvart.", "kvart over tre is a quarter past three."],
      ["mc", "It's 2:45. (use den)", "Den er kvart i tre.", "Den er kvart over tre.", "Den er halv tre.", "Den er kvart i to.", "kvart i tre is a quarter to three, so 2:45."],
      ["mc", "It's 7:30 in the morning. (use den)", "Den er halv otte om morgenen.", "Den er halv otte om aftenen.", "Den er halv syv om morgenen.", "Den er otte om morgenen.", "halv otte is 7:30, and om morgenen puts it in the morning."],
      ["mc", "A timetable says 14:30. You say", "fjorten tredive", "halv tre", "halv femten", "kvart over fjorten", "The 24-hour clock says the hour and the minutes: fjorten tredive."],
      ["or", "It's 2:30. (use klokken, start with klokken)", "Klokken er halv tre", "over", "Verb second: klokken is first, then er."],
      ["or", "a minute", "et minut", "en", "minut is an et-word."],
      ["or", "I come at 2:30. (start with halv tre)", "Halv tre kommer jeg", "over", "Verb second: halv tre is the first element, then kommer."],
      ["fi", "Den er __ tre.", "It's 2:30. (use den)", "halv", "halvt|over|kvart", "halv tre is 2:30, half an hour before three."],
      ["fi", "Den er kvart __ tre.", "It's 3:15. (use den)", "over", "i|halv|om", "kvart over is a quarter past. kvart i is a quarter to."],
      ["fi", "Den er __.", "It's one o'clock.", "et", "en|to|tre", "One o'clock uses the neuter et."],
      ["ty", "It's 7:30 in the morning. (start with om morgenen)", "Om morgenen er den halv otte.", "om morgenen · halv otte · morning first", "over kvart", "Verb second: om morgenen is the first element, then er."],
      ["ty", "I come at 2:30. (start with halv tre)", "Halv tre kommer jeg.", "halv tre · komme · jeg · 2:30 first", "over en", "Verb second: halv tre is the first element, then kommer."],
      ["ty", "an hour", "en time", "time · an hour · common gender", "et", "time, an hour, is common gender: en time."]
    ]
  },
  {
    id: "days",
    title: "Days and routines",
    blurb: "Name the weekdays, and keep tomorrow apart from in the morning.",
    deck: "Days and routines",
    body: `
<p>The weekdays take a small letter, the same way dansk and engelsk do. English writes Monday with a capital. Danish does not. A typed answer is not failed for a capital, and you still write the small letter, because a capital Monday is the English habit on a Danish page.</p>
<div class="tbl"><table><tr><th>Danish</th><th>English</th></tr><tr><td class="k">mandag</td><td>Monday</td></tr><tr><td class="k">tirsdag</td><td>Tuesday</td></tr><tr><td class="k">onsdag</td><td>Wednesday</td></tr><tr><td class="k">torsdag</td><td>Thursday</td></tr><tr><td class="k">fredag</td><td>Friday</td></tr><tr><td class="k">lørdag</td><td>Saturday</td></tr><tr><td class="k">søndag</td><td>Sunday</td></tr></table></div>
{{ex:mandag|MA-naw|Monday}}
{{ex:tirsdag|TEE-sdaw|Tuesday}}
{{ex:onsdag|OHN-sdaw|Wednesday}}
{{ex:torsdag|TOH-sdaw|Thursday}}
{{ex:fredag|FREH-dhaw|Friday}}
{{ex:lørdag|LOE-raw|Saturday}}
{{ex:søndag|SOE-naw|Sunday}}
<p>The line is rough on these words. It writes a w where the g of dag is silent, and the o of onsdag comes out long. Trust the voice for the days. dag itself, the noun, is common gender: <b>en dag</b>.</p>
<h3>This Monday, in the morning, tomorrow</h3>
<p><b>på mandag</b> is this coming Monday, not every Monday. Every Monday is <b>hver mandag</b>. <b>på fredag</b> is this coming Friday. The day can also stand alone in front: <b>mandag arbejder jeg</b>, still with a small letter, and the verb second. This course drills the coming day with på.</p>
<p><b>om morgenen</b> is "in the morning". <b>om aftenen</b> is "in the evening". You met them with the clock. <b>i morgen</b> is a different phrase. It means tomorrow. Two words, no ending, and no om. Do not swap them.</p>
{{ex:På mandag arbejder jeg.|paw MA-naw A-bai-dhuh yai|I'm working this Monday.}}
{{ex:På fredag tager jeg toget.|paw FREH-dhaw TA-wuh yai TOH-wuhdh|I'm taking the train this Friday.}}
{{ex:Om morgenen spiser jeg.|awm MOH-guh-nuhn SPEE-suh yai|In the morning I eat.}}
{{ex:Om aftenen spiser jeg.|awm AF-tuh-nuhn SPEE-suh yai|In the evening I eat.}}
{{ex:I morgen arbejder jeg.|ee MOH-guhn A-bai-dhuh yai|Tomorrow I work.}}
<p>A routine often starts with the time. That time is the first element, so the verb stays second and the person follows: <b>Om morgenen spiser jeg.</b> If you would rather start with jeg, that is the other ordinary order: <b>Jeg spiser om morgenen.</b> The verb does not leave the second slot in either one.</p>
<div class="tip"><b>Most common mistake:</b> a capital on the day, or tomorrow mixed up with the morning. <b>Mandag</b> → <b>mandag</b>, and <b>i morgen</b> is tomorrow, while <b>om morgenen</b> is in the morning.</div>
`,
    check: [
      ["How is Monday written?", ["Mandag", "Måndag", "mandag", "maan-dag"], 2, "Days take a small letter: mandag, like dansk and tirsdag."],
      ["i morgen means", ["tomorrow", "in the morning", "on Monday", "good morning"], 0, "i morgen is tomorrow. In the morning is om morgenen."],
      ["This Friday I'm working, and the sentence starts with på fredag.", ["På fredag jeg arbejder.", "Fredag på arbejder jeg.", "På fredag er jeg arbejder.", "På fredag arbejder jeg."], 3, "på fredag is this coming Friday, and it is the first element, so arbejder comes next."]
    ],
    practice: [
      ["mc", "Tuesday =", "tirsdag", "torsdag", "fredag", "søndag", "tirsdag is Tuesday. torsdag is Thursday."],
      ["mc", "in the morning =", "om morgenen", "i morgen", "om morgen", "på morgenen", "om morgenen is in the morning. i morgen is tomorrow."],
      ["mc", "tomorrow =", "i morgen", "om morgenen", "på morgen", "i morgenen", "i morgen is tomorrow. The morning phrase is om morgenen."],
      ["mc", "This Monday I'm working. (start with på mandag)", "På mandag arbejder jeg.", "På mandag jeg arbejder.", "Mandag på arbejder jeg.", "På mandag er jeg arbejder.", "Verb second: på mandag, this coming Monday, is the first element, then arbejder."],
      ["mc", "Saturday =", "lørdag", "fredag", "søndag", "onsdag", "lørdag is Saturday. søndag is Sunday."],
      ["or", "This Monday I'm working. (start with på mandag)", "På mandag arbejder jeg", "ikke", "Verb second: på mandag, this coming Monday, is the first element, then arbejder."],
      ["or", "In the morning I eat. (start with om morgenen)", "Om morgenen spiser jeg", "i", "Verb second: om morgenen is the first element, then spiser."],
      ["or", "a day", "en dag", "et", "dag is common gender: en dag."],
      ["fi", "Om __ spiser jeg.", "In the morning I eat.", "morgenen", "morgen|aftenen|i morgen", "om morgenen is in the morning. i morgen would mean tomorrow."],
      ["fi", "__ arbejder jeg.", "This Friday I'm working. (use på)", "På fredag", "I fredag|Om fredag|Fredagen", "på fredag is this coming Friday, and the verb stays the second element."],
      ["fi", "Det er __ dag.", "It is a day.", "en", "et|den|det", "dag is an en-word."],
      ["ty", "Tomorrow I work. (start with i morgen)", "I morgen arbejder jeg.", "i morgen · arbejde · jeg · tomorrow first", "om en", "Verb second: i morgen is the first element, then arbejder."],
      ["ty", "In the evening I eat. (start with om aftenen)", "Om aftenen spiser jeg.", "om aftenen · spise · jeg · evening first", "i en", "Verb second: om aftenen is the first element, then spiser."],
      ["ty", "a day", "en dag", "dag · common gender", "et", "dag is common gender: en dag."]
    ]
  },
  {
    id: "modals",
    title: "Modal verbs: vil, kan, skal, må",
    blurb: "Say what you want, can, have to, and may do, with no to in front of the verb.",
    deck: "Work and study",
    body: `
<p>English puts "to" in front of a second verb: I want to buy, I can speak, I have to work. Danish has a small set of modal verbs, and the second verb is the plain form with no <b>at</b>. The modal is the verb that takes the person and the present slot. The other verb does not grow an -r.</p>
<div class="tbl"><table><tr><th>Modal</th><th>Means</th><th>Example</th></tr><tr><td class="k">vil</td><td>want</td><td class="k">Jeg vil gerne købe en bil.</td></tr><tr><td class="k">kan</td><td>can</td><td class="k">Jeg kan tale dansk.</td></tr><tr><td class="k">skal</td><td>have to, or a plan</td><td class="k">Jeg skal arbejde.</td></tr><tr><td class="k">må</td><td>may, permission</td><td class="k">Må jeg komme?</td></tr></table></div>
{{ex:Jeg vil gerne købe en bil.|yai vehl GEH-nuh KOE-buh ehn beel|I'd like to buy a car.}}
{{ex:Jeg kan tale dansk.|yai kan TA-luh dansk|I can speak Danish.}}
{{ex:Jeg skal arbejde.|yai skal A-bai-dhuh|I have to work.}}
{{ex:Må jeg komme?|maw yai KAW-muh|May I come?}}
<h3>vil is want, not a future</h3>
<p><b>vil</b> means want. It is not the English future "will". <b>gerne</b> softens it to "I'd like", and gerne sits right after vil: <b>Jeg vil gerne købe en bil.</b> A plan, or something you have to do, is <b>skal</b>. <b>I morgen skal jeg arbejde</b> means tomorrow the work is already set. <b>Jeg skal til Aarhus</b> is a plan too: I'm going to Aarhus. <b>må</b> is permission. <b>Må jeg komme?</b> starts with the verb, like any yes/no question. <b>Jeg må ikke</b> is "I'm not allowed". <b>Jeg kan ikke</b> is "I can't", not able.</p>
{{ex:I morgen skal jeg arbejde.|ee MOH-guhn skal yai A-bai-dhuh|Tomorrow I have to work.}}
{{ex:Jeg skal til Aarhus.|yai skal tehl AW-hoos|I'm going to Aarhus.}}
{{ex:Jeg må ikke komme.|yai maw EH-guh KAW-muh|I'm not allowed to come.}}
{{ex:Kan du tale dansk?|kan doo TA-luh dansk|Can you speak Danish? (to one person)}}
{{ex:Kan I komme?|kan ee KAW-muh|Can you come? (to several people)}}
<h3>No at, and ikke in its old slot</h3>
<p>The plain "to" in front of a verb is <b>at</b>, and the line says aw: <b>at spise</b>, to eat. After vil, kan, skal, and må, that at drops. <b>Jeg vil spise.</b> Not <b>Jeg vil at spise</b>. The line often looks the same for spise and spiser, because the -r is swallowed. The spelling still changes. You write the plain form after the modal.</p>
{{ex:at spise|aw SPEE-suh|to eat}}
{{ex:Jeg vil spise.|yai vehl SPEE-suh|I want to eat.}}
<p>In a main clause, <b>ikke goes after</b> the modal, and the plain verb follows: <b>Jeg kan ikke komme.</b> gerne and ikke do not share that slot. The negative of "I'd like" is <b>Jeg vil ikke</b>, without gerne. In a subordinate clause, <b>ikke comes before</b> the modal: <b>Han siger, at han ikke kan komme.</b> The at there means "that", and before han the line says a. A time in front still leaves the modal as the second element: <b>I dag skal jeg arbejde.</b></p>
{{ex:Jeg kan ikke komme.|yai kan EH-guh KAW-muh|I can't come.}}
{{ex:Han siger, at han ikke kan komme.|han SEE-yuh a han EH-guh kan KAW-muh|He says that he can't come.}}
{{ex:I dag skal jeg arbejde.|ee da skal yai A-bai-dhuh|Today I have to work.}}
{{ex:Jeg skal betale.|yai skal buh-TA-luh|I have to pay.}}
<div class="tip"><b>Most common mistake:</b> at in front of the second verb, or vil used as a future. <b>Jeg vil at købe</b> → <b>Jeg vil købe</b>.</div>
`,
    check: [
      ["vil means", ["a future will", "want", "have to", "may"], 1, "vil is want. A plan or an obligation is skal. Permission is må."],
      ["I can't come.", ["Jeg kan ikke komme.", "Jeg ikke kan komme.", "Jeg kan ikke at komme.", "Jeg kan kommer ikke."], 0, "ikke goes after kan in a main clause, and the infinitive has no at."],
      ["He says that he can't come.", ["Han siger, at han kan ikke komme.", "Han siger, at han ikke kan at komme.", "Han siger, at han ikke kan komme.", "Han siger, at ikke han kan komme."], 2, "After at, ikke comes before the verb."]
    ],
    practice: [
      ["mc", "I'd like to buy a car. (with gerne)", "Jeg vil gerne købe en bil.", "Jeg vil gerne at købe en bil.", "Jeg vil gerne køber en bil.", "Jeg gerne vil købe en bil.", "vil takes the bare infinitive købe, with no at. gerne sits right after vil."],
      ["mc", "I can speak Danish.", "Jeg kan tale dansk.", "Jeg kan at tale dansk.", "Jeg kan taler dansk.", "Jeg taler kan dansk.", "kan takes the bare infinitive tale, with no at."],
      ["mc", "I can't come.", "Jeg kan ikke komme.", "Jeg ikke kan komme.", "Jeg kan komme ikke.", "Jeg kan ikke at komme.", "ikke goes after kan in a main clause, and the infinitive has no at."],
      ["mc", "He says that he can't come.", "Han siger, at han ikke kan komme.", "Han siger, at han kan ikke komme.", "Han siger, at han ikke kan at komme.", "Han siger, at ikke han kan komme.", "In a subordinate clause, ikke comes before the verb."],
      ["mc", "May I come?", "Må jeg komme?", "Må jeg at komme?", "Gør jeg må komme?", "Må komme jeg?", "må is permission. The question starts with må, and komme has no at."],
      ["or", "I want to eat. (with gerne, start with jeg)", "Jeg vil gerne spise", "at", "vil takes a bare infinitive, so at stays out."],
      ["or", "Today I have to work. (start with i dag)", "I dag skal jeg arbejde", "at", "Verb second: i dag is the first element, then skal."],
      ["or", "a car", "en bil", "et", "bil is an en-word."],
      ["fi", "Jeg vil __ spise.", "I want to eat. (with gerne)", "gerne", "at|ikke|gerner", "gerne sits right after vil. at does not."],
      ["fi", "Jeg kan __ komme.", "I can't come.", "ikke", "at|gerne|ikke at", "ikke goes after kan in a main clause."],
      ["fi", "Han siger, at han __ kan komme.", "He says that he can't come.", "ikke", "kan|at|gerne", "In a subordinate clause, ikke comes before the verb."],
      ["ty", "I want to buy a house. (with gerne, start with jeg)", "Jeg vil gerne købe et hus.", "vil · gerne · købe · et hus", "at en", "hus is neuter: et hus. The infinitive has no at."],
      ["ty", "Today I can speak Danish. (start with i dag)", "I dag kan jeg tale dansk.", "i dag · kan · tale · dansk · today first", "at en", "Verb second: i dag is the first element, then kan."],
      ["ty", "I have to work. (use skal and the verb arbejde, start with jeg)", "Jeg skal arbejde.", "skal · arbejde · no at", "at vil", "skal is a plan or an obligation, and arbejde has no at."]
    ]
  }
];

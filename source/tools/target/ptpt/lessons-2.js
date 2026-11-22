/* en-ptpt lessons, part 2 (writer EN-PTPT-2): estar · ter-haver · family · adjectives · irregular · contractions · time · progressive · routine.
   Pron strings are respell.js output, pasted unchanged. Warned words are kept out of {{ex}} rows. */
module.exports = [
  {
    id: "estar",
    title: "estar, and ser or estar",
    blurb: "Say where you are and how you feel, and keep that separate from who you are.",
    deck: "Feelings and states",
    body: `
<p>English uses one word, am, for all of these: I am from Lisbon, I am in Lisbon, I am tired. Portuguese splits that job. You already use ser for who you are and where you are from. Sou de Lisboa means I am from Lisbon. Sou português means I am Portuguese, said by a man. A woman says Sou portuguesa, with an a on the end. Estar is the other am. Use it for the place you are in right now, and for how you feel right now.</p>
<h3>The forms</h3>
<p>The ending tells you who, so people often leave out eu, tu and nós. Tu has its own ending, estás. O senhor and a senhora take está, the same form as ele and ela, never the tu ending. Vocês, eles and elas take estão. Do not hang a second verb on estar yet. I am working is a later lesson. For now, estar plus a place, or estar plus a word like bem or cansado.</p>
<div class="tbl"><table><tr><th></th><th>estar</th></tr>
<tr><td class="k">eu</td><td class="k">estou</td></tr>
<tr><td class="k">tu</td><td class="k">estás</td></tr>
<tr><td class="k">ele, ela, o senhor, a senhora</td><td class="k">está</td></tr>
<tr><td class="k">nós</td><td class="k">estamos</td></tr>
<tr><td class="k">eles, elas, vocês</td><td class="k">estão</td></tr></table></div>
{{ex:Estou em Lisboa.|ihsh-TOH uhyng lihzh-BOH-uh|I am in Lisbon.}}
{{ex:Sou de Lisboa.|soh dih lihzh-BOH-uh|I am from Lisbon.}}
<h3>The place you are in</h3>
<p>Where you come from stays with ser. Where you are standing stays with estar. The little word for in is em, and with a city like Lisboa it stays em: Estou em Lisboa, not a fused form. At home is em casa, with no word for the. Casa in that phrase means home.</p>
{{ex:Não estou em casa.|nowng ihsh-TOH uhyng KAH-zuh|I am not at home.}}
{{ex:O senhor está em Faro.|oo sih-NYOHR ihsh-TAH uhyng FAH-roo|The gentleman is in Faro.}}
{{ex:Tu estás em casa.|too ihsh-TAHSH uhyng KAH-zuh|You are at home. (to a friend)}}
<h3>How you feel, and how something is right now</h3>
<p>Estou bem means I am well. For tired, the word after estar matches the person. A man says cansado. A woman says cansada. A group of women says cansadas. If the group has a man in it, say cansados. O senhor está cansado. A senhora está cansada. The same match holds for a thing in front of you. Café is masculine, so frio. Água is feminine, so fria. You mean this cup or this water, not what coffee is in general.</p>
{{ex:Estou bem.|ihsh-TOH buhyng|I am well.}}
{{ex:Estou cansado.|ihsh-TOH kuhn-SAH-doo|I am tired. (a man)}}
{{ex:Estou cansada.|ihsh-TOH kuhn-SAH-duh|I am tired. (a woman)}}
{{ex:Elas estão cansadas.|EH-luhsh ihsh-TOWNG kuhn-SAH-duhsh|They are tired. (women)}}
{{ex:O café está frio.|oo kuh-FEH ihsh-TAH FREE-oo|The coffee is cold.}}
{{ex:A água está fria.|uh AH-gwuh ihsh-TAH FREE-uh|The water is cold.}}
<p>Não goes in front: Não estou cansado. One spelling to keep apart: está, with the accent, means is, right now. Esta, with no accent, is a different word, this. You will point with it soon. The two are not interchangeable.</p>
<div class="tip">The usual slip is one am for every meaning. <b>Sou em Lisboa</b> → <b>Estou em Lisboa</b>. And <b>Sou cansado</b> → <b>Estou cansado</b>.</div>
`,
    check: [
      ["How do you say 'I am in Lisbon' (right now)?", ["Sou em Lisboa.", "Estou em Lisboa.", "Estou de Lisboa.", "Sou de Lisboa."], 1, "Right now, in a place, takes estar: Estou em Lisboa. Sou de Lisboa is where you are from."],
      ["A woman says 'I am tired.' Which is right?", ["Estou cansado.", "Sou cansada.", "Estou cansada.", "Estás cansada."], 2, "She uses estar, and cansada agrees with a woman. Estás would be you, to a friend."],
      ["You speak to an older man: 'You are well.' Which fits?", ["Tu estás bem.", "O senhor estás bem.", "O senhor és bem.", "O senhor está bem."], 3, "O senhor takes the ele form, está, not the tu form estás."]
    ],
    practice: [
      ["mc", "I am in Lisbon. (right now)", "Estou em Lisboa", "Sou em Lisboa", "Estou de Lisboa", "Sou de Lisboa", "Place right now takes estar: Estou em Lisboa."],
      ["mc", "I am tired. (a woman speaking)", "Estou cansada", "Estou cansado", "Sou cansada", "Está cansada", "A woman says cansada, and the eu form is estou."],
      ["mc", "You are well. (to a friend)", "Estás bem", "Está bem", "És bem", "Estou bem", "A friend takes the tu form: estás."],
      ["mc", "The coffee is cold. (right now)", "O café está frio", "O café é frio", "O café estás frio", "O café estou frio", "Right now takes está, the ele form. Estás is tu, estou is eu."],
      ["mc", "I am from Lisbon.", "Sou de Lisboa", "Estou de Lisboa", "Sou em Lisboa", "Estou em Lisboa", "Where you are from takes ser: Sou de Lisboa."],
      ["or", "I am tired. (a man speaking)", "Estou cansado", "cansada", "Cansado agrees with a man: it is masculine."],
      ["or", "You are in Lisbon. (to a friend, start with the verb)", "Estás em Lisboa", "está", "This is the tu form."],
      ["or", "The coffee is hot. (right now, start with o café)", "O café está quente", "é", "Está is the ele form for a state right now."],
      ["fi", "Eu __ em Lisboa.", "I am in Lisbon.", "estou", "está|sou|és", "Place right now takes the eu form: estou."],
      ["fi", "A senhora __ cansada.", "The lady is tired.", "está", "estás|é|estou", "A senhora takes the ele form: está."],
      ["fi", "O café __ frio.", "The coffee is cold. (right now)", "está", "esta|é|sou", "Está, with the accent, is the ele form. Esta is a different word.", "!strict"],
      ["ty", "I am tired. (a woman speaking)", "Estou cansada|Eu estou cansada", "estar · cansada · matches a woman", "cansado", "Cansada agrees with a woman: feminine."],
      ["ty", "You are well. (to a friend)", "Estás bem|Tu estás bem", "estar · bem · to a friend", "está", "This is the tu form."],
      ["ty", "I am not at home. (start with não)", "Não estou em casa|Eu não estou em casa", "não · estar · em casa", "sou", "Where you are takes estar, and the verb matches the subject."]
    ]
  },
  {
    id: "ter-haver",
    title: "ter and há",
    blurb: "Say what you have, and say that a place or a thing is there.",
    deck: "Traps for English speakers",
    body: `
<p>English says I have a sister, and there is a pharmacy, with two different patterns. Portuguese does the same split, and English speakers mix the verbs. Ter is for possession: people in the family, and things you have. Há is for there is and there are. Há does not change when the thing is plural.</p>
<h3>ter: what you have</h3>
<p>The eu form is tenho. Tu, a friend, is tens. Ele, ela, o senhor and a senhora are tem, one syllable and no accent. Nós is temos. Eles, elas and vocês are têm, and that accent marks two syllables, not one. Tem is not the word for there is. Tem means he has, she has, or o senhor has.</p>
<div class="tbl"><table><tr><th></th><th>ter</th></tr>
<tr><td class="k">eu</td><td class="k">tenho</td></tr>
<tr><td class="k">tu</td><td class="k">tens</td></tr>
<tr><td class="k">ele, ela, o senhor, a senhora</td><td class="k">tem</td></tr>
<tr><td class="k">nós</td><td class="k">temos</td></tr>
<tr><td class="k">eles, elas, vocês</td><td class="k">têm</td></tr></table></div>
{{ex:Tenho dois irmãos.|TUH-nyoo doysh eer-MOWNGSH|I have two brothers.}}
{{ex:Tens uma irmã.|tuhyngsh OO-muh eer-MUHNG|You have a sister.}}
{{ex:A Ana tem uma filha.|uh UH-nuh tuhyng OO-muh FEE-lyuh|Ana has a daughter.}}
{{ex:Eles têm dois filhos.|AY-lihsh TUHYNG-uhyng doysh FEE-lyoosh|They have two sons.}}
{{ex:Tenho um telemóvel.|TUH-nyoo oong teh-leh-MAW-vehl|I have a mobile phone.}}
{{ex:O senhor tem um livro.|oo sih-NYOHR tuhyng oong LEE-vroo|The gentleman has a book.}}
<p>Match the number word to the thing. Irmãos and filhos are masculine, so dois. Irmã and filha are feminine, so uma. Telemóvel, the mobile phone, is masculine: um telemóvel. In Portugal a first name usually takes o or a: a Ana, o Pedro. You do not need eu every time. Tenho dois irmãos is the ordinary line. Eu tenho is for a contrast, when you have them and someone else does not. Do not use ser for possession. Have is ter.</p>
<h3>há: there is, there are</h3>
<p>Há uma farmácia means there is a pharmacy. Há dois cafés means there are two cafés. The verb stays há. Do not build a plural, and do not switch to tem, é or está. Não há um café means there is not a café. A question is the same word, with your voice up: Há uma farmácia?</p>
{{ex:Há uma farmácia.|ah OO-muh fuhr-MAH-syuh|There is a pharmacy.}}
{{ex:Há dois cafés.|ah doysh kuh-FEHSH|There are two cafés.}}
{{ex:Não há um café.|nowng ah oong kuh-FEH|There is not a café.}}
<p>In Brazil you will often hear tem for there is. That is the Brazilian pattern. In Portugal, keep tem for someone has, and use há when nobody in particular has the thing: it is simply there.</p>
<div class="tip">The slip is to copy there is with tem. <b>Tem uma farmácia</b> → <b>Há uma farmácia</b>.</div>
`,
    check: [
      ["'There is a pharmacy' =", ["Tem uma farmácia.", "É uma farmácia.", "Há uma farmácia.", "Está uma farmácia."], 2, "In Portugal, there is is há. Tem means someone has."],
      ["'They have two sons.' Which is right?", ["Eles tem dois filhos.", "Eles têm dois filhos.", "Eles há dois filhos.", "Eles têm duas filhos."], 1, "Eles takes têm, with the accent. Filhos is masculine, so dois."],
      ["'You have a sister.' (to a friend) =", ["Tem uma irmã.", "Tens um irmã.", "Há uma irmã.", "Tens uma irmã."], 3, "A friend takes the tu form tens, and irmã is feminine, so uma."]
    ],
    practice: [
      ["mc", "I have two brothers.", "Tenho dois irmãos", "Sou dois irmãos", "Há dois irmãos", "Tenho duas irmãos", "Possession takes ter: tenho. Irmãos is masculine, so dois."],
      ["mc", "There is a pharmacy.", "Há uma farmácia", "Tem uma farmácia", "É uma farmácia", "Está uma farmácia", "In Portugal, there is is há. Tem means someone has."],
      ["mc", "You have a sister. (to a friend)", "Tens uma irmã", "Tem uma irmã", "Tens um irmã", "Há uma irmã", "A friend takes the tu form tens. Irmã is feminine, so uma."],
      ["mc", "They have two sons.", "Eles têm dois filhos", "Eles tens dois filhos", "Eles há dois filhos", "Eles têm duas filhos", "Eles takes têm, with the accent. Filhos is masculine, so dois."],
      ["mc", "There are two cafés.", "Há dois cafés", "Hão dois cafés", "Têm dois cafés", "Há duas cafés", "Há does not change for a plural. Cafés is masculine, so dois."],
      ["or", "I have a daughter.", "Tenho uma filha", "um", "Filha is feminine, so uma agrees."],
      ["or", "There is a book. (start with há)", "Há um livro", "tem", "Há is there is, and um agrees with livro: masculine."],
      ["or", "You have two sons. (to a friend)", "Tens dois filhos", "tem", "This is the tu form."],
      ["fi", "Eu __ dois irmãos.", "I have two brothers.", "tenho", "tem|tens|há", "The eu form of ter is tenho."],
      ["fi", "__ uma farmácia.", "There is a pharmacy.", "Há", "Tem|É|Está", "In Portugal, there is is há, not tem."],
      ["fi", "Eles __ dois filhos.", "They have two sons.", "têm", "tem|há|tenho", "Eles takes the eles form: têm, with the accent.", "!strict"],
      ["ty", "I have a phone.", "Tenho um telemóvel|Eu tenho um telemóvel", "ter · um telemóvel · a phone", "uma", "Telemóvel is masculine, so um agrees."],
      ["ty", "There are two brothers.", "Há dois irmãos", "há · dois · irmãos", "têm", "Há stays há, and dois agrees with the masculine plural noun."],
      ["ty", "She has a daughter. (start with a Ana)", "A Ana tem uma filha", "a Ana · ter · uma filha", "têm", "A Ana takes the ela form: tem.", "!strict"]
    ]
  },
  {
    id: "family",
    title: "Family and possessives with the article",
    blurb: "Name your family with my and your, and put the article in front.",
    deck: "People and family",
    body: `
<p>English possessives follow the owner: his father, her father. Portuguese follows the person you are naming, the noun, and it likes an article in front. You already match obrigado to yourself, the speaker. Meu does the opposite. A woman still says o meu pai, because pai is masculine. A man says a minha mãe, because mãe is feminine.</p>
<h3>Article, then meu or teu, then the person</h3>
<p>For I, the set is o meu, a minha, os meus, as minhas. For a friend, tu, it is o teu, a tua, os teus, as tuas. For we, the same pattern is o nosso, a nossa, os nossos, as nossas. The article and the possessive match the noun together: masculine, feminine, singular, plural. Os teus irmãos is your brothers, to a friend. Irmãos can also cover brothers and sisters as a group. Os meus pais is my parents.</p>
<div class="tbl"><table><tr><th></th><th>one, masculine</th><th>one, feminine</th><th>more, masculine</th><th>more, feminine</th></tr>
<tr><td class="k">eu</td><td class="k">o meu</td><td class="k">a minha</td><td class="k">os meus</td><td class="k">as minhas</td></tr>
<tr><td class="k">tu</td><td class="k">o teu</td><td class="k">a tua</td><td class="k">os teus</td><td class="k">as tuas</td></tr>
<tr><td class="k">ele, ela, o senhor</td><td class="k">o seu</td><td class="k">a sua</td><td class="k">os seus</td><td class="k">as suas</td></tr></table></div>
{{ex:O meu pai.|oo mayw pahy|my father}}
{{ex:A minha mãe.|uh MEE-nyuh muhyng|my mother}}
{{ex:O meu irmão.|oo mayw eer-MOWNG|my brother}}
{{ex:Os teus irmãos.|oosh taywsh eer-MOWNGSH|your brothers (to a friend)}}
{{ex:A minha mãe está bem.|uh MEE-nyuh muhyng ihsh-TAH buhyng|My mother is well.}}
{{ex:O meu pai está em Lisboa.|oo mayw pahy ihsh-TAH uhyng lihzh-BOH-uh|My father is in Lisbon.}}
<p>Read the three pieces as one package: the article, the possessive, and the noun. They share one gender and one number. A feminine plural noun makes all three feminine plural: as minhas filhas. If you are a woman talking about your father, the package still follows pai, not you, so it stays o meu pai. You will often hear the article. Meu pai, with no article, is also ordinary when the possessive sits in front of the noun. It is not a mistake. When the practice says with the article, put o or a in the answer. When meu stands alone, meaning mine, the article really is required: o meu.</p>
<h3>seu, and grandmother against grandfather</h3>
<p>O seu pai can mean his father, her father, or your father when you are speaking to o senhor or a senhora. For a friend, do not use seu. Use o teu pai. The situation usually shows which owner you mean.</p>
{{ex:O seu pai.|oo sayw pahy|his father, her father, or your father (to o senhor)}}
{{ex:O meu avô.|oo mayw uh-VOH|my grandfather}}
{{ex:A minha avó.|uh MEE-nyuh uh-VAW|my grandmother}}
<p>Avô, closed ô, is grandfather. Avó, open ó, is grandmother. The accent is the whole difference. Read it. Do not guess from the English.</p>
<div class="tip">The article and meu follow the noun, not the speaker. <b>O meu mãe</b> → <b>A minha mãe</b>.</div>
`,
    check: [
      ["'my mother' (with the article) =", ["a minha mãe", "o meu mãe", "a meu mãe", "o minha mãe"], 0, "Mãe is feminine, so the article and the possessive are a minha."],
      ["'my grandfather' (with the article) =", ["o meu avó", "a minha avô", "o meu pai", "o meu avô"], 3, "Avô, with the closed ô, is grandfather. Avó is grandmother."],
      ["'your brothers' (to a friend, with the article) =", ["os seus irmãos", "os teus irmãos", "as tuas irmãos", "os teu irmãos"], 1, "A friend takes teus, and irmãos is masculine plural, so os."]
    ],
    practice: [
      ["mc", "my mother (with the article)", "a minha mãe", "o meu mãe", "a meu mãe", "o minha mãe", "Mãe is feminine, so a minha."],
      ["mc", "your brothers (to a friend, with the article)", "os teus irmãos", "os teu irmãos", "as tuas irmãos", "os seus irmãos", "A friend takes teus, and irmãos is masculine plural, so os teus."],
      ["mc", "my grandfather (with the article)", "o meu avô", "a meu avô", "a minha avô", "o meu pai", "Avô, with the closed ô, is grandfather. Avó is grandmother."],
      ["mc", "his daughter (with the article)", "a sua filha", "o seu filha", "a sua filho", "a tua filha", "Filha is feminine, so a sua. Tua would mean your, to a friend."],
      ["mc", "my parents (with the article)", "os meus pais", "as minhas pais", "o meu pais", "os meu pais", "Pais is masculine plural, so os meus."],
      ["or", "my father (with the article)", "o meu pai", "minha", "Pai is masculine, so o meu agrees."],
      ["or", "your mother (to a friend, with the article)", "a tua mãe", "teu", "Mãe is feminine, so a tua agrees."],
      ["or", "my daughters (with the article)", "as minhas filhas", "os", "Filhas is a feminine plural noun, so as minhas."],
      ["fi", "__ mãe está bem.", "My mother is well. (with the article)", "A minha", "O meu|A meu|O minha", "Mãe is feminine, so a minha agrees."],
      ["fi", "Os __ irmãos estão em casa.", "Your brothers are at home. (to a friend)", "teus", "teu|seus|meus", "Teus agrees with the plural noun irmãos."],
      ["fi", "O meu __.", "My grandfather. (with the article)", "avô", "avó|pai|irmão", "Avô with ô is grandfather. Avó is grandmother.", "!strict"],
      ["ty", "My sister is in Lisbon. (with the article, start with a minha)", "A minha irmã está em Lisboa", "a minha irmã · estar · em Lisboa", "meu", "Irmã is feminine, so a minha agrees."],
      ["ty", "Your father is well. (to a friend, with the article, start with o teu)", "O teu pai está bem", "o teu pai · estar · bem", "tua", "Pai is masculine, so o teu agrees."],
      ["ty", "His mother is in Faro. (with the article, start with a sua)", "A sua mãe está em Faro", "a sua mãe · estar · em Faro", "seu", "Mãe is feminine, so a sua agrees."]
    ]
  },
  {
    id: "adjectives",
    title: "Adjectives and demonstratives",
    blurb: "Describe a thing with the word after the noun, and point with this and that.",
    deck: "People and family",
    body: `
<p>English puts the describing word first: a small house, a pretty beach. Portuguese ordinarily puts it after the noun, and it has to match. Uma casa pequena is a small house, feminine all the way. Um café pequeno is a small coffee, masculine. If you only change the article and forget the ending, the phrase falls apart.</p>
<h3>Match it, then usually put it after</h3>
<p>Pequeno, bonito and cansado take a for a feminine noun and s for a plural: uma casa bonita, um livro bonito. Grande does not change for masculine or feminine. It only takes s in the plural: um livro grande, os livros são grandes. To say what something is like, size or looks, use ser: a praia é bonita, a casa é pequena. You already use estar for how something is right now: o café está frio.</p>
{{ex:Uma casa pequena.|OO-muh KAH-zuh pih-KAY-nuh|a small house}}
{{ex:Um café pequeno.|oong kuh-FEH pih-KAY-noo|a small coffee}}
{{ex:Um livro grande.|oong LEE-vroo GRUHN-dih|a big book}}
{{ex:Os livros são grandes.|oosh LEE-vroosh sowng GRUHN-dihsh|The books are big.}}
{{ex:A praia é bonita.|uh PRAHY-uh eh boo-NEE-tuh|The beach is pretty.}}
<p>A few very common words like to sit in front. Bom is one of them. Um bom café is a good coffee, and uma boa casa is a good house. Bom still matches: bom, boa, bons, boas. Pequeno, grande and bonito ordinarily follow the noun, and that is the order to use with them. You may hear a describing word in front for style. Do not make that your default.</p>
{{ex:Um bom café.|oong bohng kuh-FEH|a good coffee}}
{{ex:A casa é boa.|uh KAH-zuh eh BOH-uh|The house is good.}}
<h3>This, that, and that over there</h3>
<p>Pointing words go before the noun, not after, and they match it. Near me: este, esta, estes, estas. Near you: esse, essa, esses, essas. Far from both of us: aquele, aquela, aqueles, aquelas. Esta casa is this house, feminine, near me. Este casa is wrong, because casa is not masculine.</p>
<div class="tbl"><table><tr><th></th><th>masculine</th><th>feminine</th><th>masculine plural</th><th>feminine plural</th></tr>
<tr><td>near me</td><td class="k">este</td><td class="k">esta</td><td class="k">estes</td><td class="k">estas</td></tr>
<tr><td>near you</td><td class="k">esse</td><td class="k">essa</td><td class="k">esses</td><td class="k">essas</td></tr>
<tr><td>over there</td><td class="k">aquele</td><td class="k">aquela</td><td class="k">aqueles</td><td class="k">aquelas</td></tr></table></div>
{{ex:Esta casa é pequena.|EHSH-tuh KAH-zuh eh pih-KAY-nuh|This house is small.}}
<p>When you do not name the thing, the pointing word stands alone and does not change: isto near me, isso near you, aquilo over there. Isto é leite means this is milk. Keep esta apart from está. Esta, no accent, means this. Está, with the accent, means is, right now.</p>
{{ex:Isto é leite.|EESH-too eh LUHY-tih|This is milk.}}
{{ex:Isso é leite.|EE-soo eh LUHY-tih|That is milk. (near you)}}
{{ex:Aquilo é uma praia.|uh-KEE-loo eh OO-muh PRAHY-uh|That over there is a beach.}}
<div class="tip">English word order, and a masculine pointing word on a feminine noun, both slip through. <b>Este casa</b> → <b>Esta casa</b>. And <b>uma casa pequeno</b> → <b>uma casa pequena</b>.</div>
`,
    check: [
      ["'a small house' =", ["uma casa pequeno", "um casa pequena", "uma casa pequena", "umas casa pequena"], 2, "Casa is feminine, so uma and pequena, and pequena follows the noun."],
      ["'this house is small' =", ["Este casa é pequena.", "Esta casa é pequena.", "Está casa é pequena.", "Esta casa é pequeno."], 1, "Casa is feminine, so esta and pequena. Está, with the accent, means is."],
      ["With no noun, the thing is far from both of you. 'That is a beach.' =", ["Isto é uma praia.", "Isso é uma praia.", "Aquilo é uma praia.", "Aquilo é um praia."], 2, "Far away, and the pointing word has no noun of its own: aquilo. Praia is feminine, so uma."]
    ],
    practice: [
      ["mc", "a small house", "uma casa pequena", "uma casa pequeno", "um casa pequena", "umas casa pequena", "Casa is feminine, so uma and pequena agree."],
      ["mc", "this house is small", "Esta casa é pequena", "Este casa é pequena", "Esta casa é pequeno", "Estas casa é pequena", "Casa is feminine singular, so esta and pequena agree."],
      ["mc", "a pretty beach", "uma praia bonita", "uma praia bonito", "um praia bonita", "uma praias bonita", "Praia is feminine, so uma and bonita agree."],
      ["mc", "big books", "livros grandes", "livros grande", "livro grandes", "grandes livro", "A plural noun takes a plural adjective: livros grandes."],
      ["mc", "a good coffee", "um bom café", "um boa café", "uma bom café", "um bons café", "Café is masculine, so bom. Bom usually sits before the noun."],
      ["or", "a small coffee (adjective after the noun)", "um café pequeno", "pequena", "Pequeno agrees with café: masculine, and it follows the noun."],
      ["or", "This house is small. (start with esta)", "Esta casa é pequena", "pequeno", "Esta and pequena agree with casa: feminine."],
      ["or", "The books are big. (start with os livros)", "Os livros são grandes", "grande", "A plural noun takes a plural adjective: grandes."],
      ["fi", "Uma casa __.", "A small house.", "pequena", "pequeno|pequenos|grande", "Pequena agrees with casa: feminine singular."],
      ["fi", "__ casa é grande.", "This house is big.", "Esta", "Este|Está|Isto", "Casa is feminine, so esta. Está means is.", "!strict"],
      ["fi", "Isto __ leite.", "This is milk. (in your hand)", "é", "está|são|sou", "Naming what something is takes ser: é."],
      ["ty", "A pretty house. (adjective after the noun)", "Uma casa bonita", "uma casa · bonita · feminine", "bonito", "Bonita agrees with casa: feminine."],
      ["ty", "This beach is pretty. (use é, start with esta)", "Esta praia é bonita", "esta praia · ser · bonita", "bonito", "Praia is feminine, so esta and bonita agree."],
      ["ty", "The books are big. (use são, start with os livros)", "Os livros são grandes", "os livros · ser · grandes", "grande", "The plural noun takes the plural adjective grandes, and são matches the subject."]
    ]
  },
  {
    id: "irregular",
    title: "Irregular present",
    blurb: "Order a coffee, say you can, and say where you are going.",
    deck: "Shopping and paying",
    body: `
<p>Six verbs you need every day do not follow the regular endings. The ending still has to match the person. Tu still has its own form. O senhor and a senhora still take the ele form. What changes is the stem, or the whole word, not the idea of matching.</p>
<h3>The six</h3>
<div class="tbl"><table><tr><th></th><th>ir</th><th>fazer</th><th>querer</th><th>poder</th><th>ver</th><th>dar</th></tr>
<tr><td class="k">eu</td><td class="k">vou</td><td class="k">faço</td><td class="k">quero</td><td class="k">posso</td><td class="k">vejo</td><td class="k">dou</td></tr>
<tr><td class="k">tu</td><td class="k">vais</td><td class="k">fazes</td><td class="k">queres</td><td class="k">podes</td><td class="k">vês</td><td class="k">dás</td></tr>
<tr><td class="k">ele, o senhor</td><td class="k">vai</td><td class="k">faz</td><td class="k">quer</td><td class="k">pode</td><td class="k">vê</td><td class="k">dá</td></tr>
<tr><td class="k">nós</td><td class="k">vamos</td><td class="k">fazemos</td><td class="k">queremos</td><td class="k">podemos</td><td class="k">vemos</td><td class="k">damos</td></tr>
<tr><td class="k">eles, vocês</td><td class="k">vão</td><td class="k">fazem</td><td class="k">querem</td><td class="k">podem</td><td class="k">veem</td><td class="k">dão</td></tr></table></div>
<p>Querer is want. Quero um café means I want a coffee. Café is masculine, so um. Poder is can. Posso pagar means I can pay, and o senhor pode pagar keeps the ele form. Fazer is do or make. Faço o trabalho means I do the work. Ver is see. Dar is give. Dou dois euros means I give two euros. In a café you can leave the subject out. Quero um café is enough. If the sentence is about o senhor, the verb stays on the ele form: quer, pode, dá. A question is the same words with your voice up. English do does not appear.</p>
{{ex:Quero um café.|KEH-roo oong kuh-FEH|I want a coffee.}}
{{ex:Posso pagar.|PAW-soo puh-GAHR|I can pay.}}
{{ex:O senhor pode pagar.|oo sih-NYOHR PAW-dih puh-GAHR|The gentleman can pay.}}
{{ex:Faço o trabalho.|FAH-soo oo truh-BAH-lyoo|I do the work.}}
{{ex:Vês a casa.|vaysh uh KAH-zuh|You see the house.}}
{{ex:Ela dá o livro.|EH-luh dah oo LEE-vroo|She gives the book.}}
{{ex:Eles veem a praia.|AY-lihsh VAY-uhyng uh PRAHY-uh|They see the beach.}}
<h3>ir: where you are going</h3>
<p>Vou a Lisboa means I am going to Lisbon. This lesson uses a for that trip, with no article on Lisboa. You may also hear para. When the practice says use a, write a. The same shape works for Faro, Coimbra and Braga: Vou a Faro, Vamos a Coimbra, Tu vais a Braga. Do not write vou em, and do not put ao in front of Lisboa.</p>
{{ex:Vou a Lisboa.|voh uh lihzh-BOH-uh|I am going to Lisbon.}}
{{ex:Vamos a Coimbra.|VUH-moosh uh KWEEN-bruh|We are going to Coimbra.}}
{{ex:Tu vais a Braga.|too vahysh uh BRAH-guh|You are going to Braga.}}
{{ex:A senhora vai a Faro.|uh sih-NYOH-ruh vahy uh FAH-roo|The lady is going to Faro.}}
<p>You will also hear vir, sair, pedir, trazer, dizer, saber and pôr. You do not need every form yet. One to recognize: saio, I leave. Pôr means to put. The little word por, with no accent, is a different word, for or by. The aid spells that por like the English word poor. Pôr, the verb, is pohr.</p>
{{ex:Saio de casa.|SAHY-oo dih KAH-zuh|I leave the house.}}
{{ex:pôr|pohr|to put}}
{{ex:por|poor|for, or by}}
<div class="tip">Tu does not borrow the ele form. <b>Tu vai a Lisboa</b> → <b>Tu vais a Lisboa</b>. And <b>O senhor podes pagar</b> → <b>O senhor pode pagar</b>.</div>
`,
    check: [
      ["'I want a coffee.' =", ["Quero um café.", "Quer um café.", "Quero uma café.", "Queres um café."], 0, "The eu form is quero, and café is masculine, so um."],
      ["'The gentleman can pay.' =", ["O senhor podes pagar.", "O senhor posso pagar.", "O senhor podes pago.", "O senhor pode pagar."], 3, "O senhor takes the ele form pode, then the to-form pagar."],
      ["'You are going to Braga.' (to a friend, use a) =", ["Vai a Braga.", "Vais a Braga.", "Vou a Braga.", "Vais em Braga."], 1, "A friend takes the tu form vais, and the trip uses a."]
    ],
    practice: [
      ["mc", "I want a coffee.", "Quero um café", "Quer um café", "Queres um café", "Quero uma café", "The eu form is quero. Café is masculine, so um."],
      ["mc", "I am going to Lisbon. (use a)", "Vou a Lisboa", "Vou em Lisboa", "Vou ao Lisboa", "Estou a Lisboa", "Going to Lisbon uses vou plus a, with no article on Lisboa."],
      ["mc", "Can I pay?", "Posso pagar", "Podes pagar", "Pode pagar", "Posso pago", "The eu form is posso, then the to-form pagar."],
      ["mc", "You go to Braga. (to a friend, use a)", "Vais a Braga", "Vai a Braga", "Vou a Braga", "Vais em Braga", "A friend takes the tu form: vais."],
      ["mc", "They see the book.", "Eles veem o livro", "Eles vê o livro", "Eles veem a livro", "Eles vês o livro", "Eles takes veem. Livro is masculine, so o."],
      ["or", "I want the tart. (start with quero)", "Quero o pastel", "a", "This is the eu form, and pastel is masculine, so o."],
      ["or", "You make the coffee. (to a friend, start with the verb)", "Fazes o café", "faz", "This is the tu form."],
      ["or", "She gives two euros. (start with ela)", "Ela dá dois euros", "dás", "Ela takes the ela form: dá."],
      ["fi", "Eu __ um café.", "I want a coffee.", "quero", "quer|queres|posso", "The eu form of querer is quero."],
      ["fi", "O senhor __ pagar.", "The gentleman can pay.", "pode", "podes|posso|quero", "O senhor takes the ele form: pode."],
      ["fi", "Tu __ a Coimbra.", "You are going to Coimbra. (to a friend, use a)", "vais", "vai|vou|vão", "This is the tu form: vais."],
      ["ty", "I am going to Faro. (use a)", "Vou a Faro|Eu vou a Faro", "ir · a · Faro · no article", "em", "This is the eu form of ir."],
      ["ty", "You see the beach. (to a friend)", "Vês a praia|Tu vês a praia", "ver · a praia · to a friend", "vê", "This is the tu form."],
      ["ty", "We are going to Lisbon. (use a)", "Vamos a Lisboa|Nós vamos a Lisboa", "ir · a · Lisboa", "vou", "Nós takes the nós form: vamos."]
    ]
  },
  {
    id: "contractions",
    title: "Contractions",
    blurb: "Fuse in, of and to with the article: no Porto, do Pedro, à praia.",
    deck: "Travel and transport",
    body: `
<p>English keeps the little words separate: in the station, of the coffee, to the beach. Portuguese writes them as one word. The fused word carries the gender and the number of the article. If you leave a gap, em o Porto, a reader sees English word order, not Portuguese.</p>
<h3>em, de and a</h3>
<div class="tbl"><table><tr><th></th><th>+ o</th><th>+ a</th><th>+ os</th><th>+ as</th></tr>
<tr><td class="k">em</td><td class="k">no</td><td class="k">na</td><td class="k">nos</td><td class="k">nas</td></tr>
<tr><td class="k">de</td><td class="k">do</td><td class="k">da</td><td class="k">dos</td><td class="k">das</td></tr>
<tr><td class="k">a</td><td class="k">ao</td><td class="k">à</td><td class="k">aos</td><td class="k">às</td></tr></table></div>
<p>Em plus um is num, and em plus uma is numa. Estou num café means I am in a café. Estou numa casa means I am in a house. That is not the same as em casa, which means at home, with no article. Nós, with an accent, means we. Nos, with no accent, is em plus os, or the little word us. Do not trade them.</p>
{{ex:Estou num café.|ihsh-TOH noong kuh-FEH|I am in a café.}}
{{ex:Estou numa casa.|ihsh-TOH NOO-muh KAH-zuh|I am in a house.}}
<h3>Porto keeps the article, Lisboa does not</h3>
<p>Porto takes the article in these phrases. In Porto is no Porto, em plus o. From Porto, or of Porto, is do Porto. To Porto is ao Porto, a plus o. Lisboa does not take that article. In Lisbon stays em Lisboa. From Lisbon stays de Lisboa. To Lisbon stays a Lisboa, the a you already use with ir. Do not write no Lisboa or ao Lisboa.</p>
{{ex:Estou no Porto.|ihsh-TOH noo POHR-too|I am in Porto.}}
{{ex:Sou do Porto.|soh doo POHR-too|I am from Porto.}}
{{ex:Vou ao Porto.|voh ow POHR-too|I am going to Porto.}}
{{ex:Estou no comboio.|ihsh-TOH noo kohm-BAWY-oo|I am on the train.}}
{{ex:Estou no autocarro.|ihsh-TOH noo ow-taw-KAH-khoo|I am on the bus.}}
{{ex:Estou no metro.|ihsh-TOH noo MEH-troo|I am on the metro.}}
<h3>à, da, do</h3>
<p>A plus a is à, with a grave accent. À praia is to the beach. À farmácia is to the pharmacy. Na praia and na farmácia are em plus a: at the beach, at the pharmacy. De plus a is da, and de plus o is do. A casa da Ana is Ana's house. O café do Pedro is Pedro's coffee. In ordinary speech in Portugal the name keeps a or o, and then you have to fuse: da Ana, do Pedro, not de a Ana.</p>
{{ex:Vou à praia.|voh ah PRAHY-uh|I am going to the beach.}}
{{ex:Estou na farmácia.|ihsh-TOH nuh fuhr-MAH-syuh|I am at the pharmacy.}}
{{ex:Vou à farmácia.|voh ah fuhr-MAH-syuh|I am going to the pharmacy.}}
{{ex:A casa da Ana.|uh KAH-zuh duh UH-nuh|Ana's house}}
{{ex:O café do Pedro.|oo kuh-FEH doo PAY-droo|Pedro's coffee}}
<div class="tip">Do not leave the article sitting next to em, de or a. <b>Em o Porto</b> → <b>No Porto</b>. And <b>A a praia</b> → <b>À praia</b>.</div>
`,
    check: [
      ["'in Porto' =", ["em o Porto", "no Porto", "na Porto", "em Porto"], 1, "Em plus o fuses to no. Porto keeps the article."],
      ["'to the beach' =", ["à praia", "a praia", "na praia", "ao praia"], 0, "A plus a is à. Na praia would mean at the beach."],
      ["'Ana's house' =", ["a casa de a Ana", "a casa do Ana", "a casa da Ana", "a casa da o Ana"], 2, "De plus a fuses to da, because Ana takes a."]
    ],
    practice: [
      ["mc", "in Porto", "no Porto", "em o Porto", "na Porto", "em Porto", "Em plus o fuses to no."],
      ["mc", "to the beach", "à praia", "em a praia", "na praia", "ao praia", "A plus a fuses to à. Na would mean at the beach."],
      ["mc", "Ana's house", "a casa da Ana", "a casa de a Ana", "a casa do Ana", "a casa da o Ana", "De plus a fuses to da."],
      ["mc", "I am on the train.", "Estou no comboio", "Estou em o comboio", "Estou na comboio", "Estou em comboio", "Comboio is masculine, so em plus o becomes no."],
      ["mc", "I am going to Porto. (use the fused a)", "Vou ao Porto", "Vou a o Porto", "Vou a Porto", "Vou no Porto", "A plus o fuses to ao."],
      ["or", "I am in Porto. (start with estou)", "Estou no Porto", "em", "No is the contraction of em plus o."],
      ["or", "I am going to the pharmacy. (start with vou)", "Vou à farmácia", "a", "À is the contraction of a plus a.", "!strict"],
      ["or", "Pedro's coffee. (start with o café)", "O café do Pedro", "de", "Do is the contraction of de plus o."],
      ["fi", "Estou __ Porto.", "I am in Porto.", "no", "na|em|do", "No is the contraction of em plus o."],
      ["fi", "Vou __ praia.", "I am going to the beach.", "à", "a|ao|na", "À is the contraction of a plus a. Praia is feminine.", "!strict"],
      ["fi", "A casa __ Ana.", "Ana's house.", "da", "de|do|na", "Da is the contraction of de plus a."],
      ["ty", "I am going to Porto. (use ao)", "Vou ao Porto|Eu vou ao Porto", "ir · ao · Porto · a plus o", "a", "Ao is the contraction of a plus o."],
      ["ty", "I am at the pharmacy.", "Estou na farmácia|Eu estou na farmácia", "estar · na · farmácia", "no", "Na is the contraction of em plus a. Farmácia is feminine."],
      ["ty", "Maria's book. (use da, start with o livro)", "O livro da Maria", "o livro · da · Maria", "do", "Da is the contraction of de plus a."]
    ]
  },
  {
    id: "time",
    title: "The time and the days",
    blurb: "Tell the time, say at what hour, and name the day.",
    deck: "Numbers, time and prices",
    body: `
<p>English says it is two, it is one, with the same it is. Portuguese asks Que horas são? and then splits the answer. One o'clock is singular, because one hour is one thing: É uma hora. You can also say É uma. From two onward the hours are plural, so the verb is são: São duas, São três. You can add horas after the number. Meia, half, matches hora, which is feminine. Say e meia, not e meio.</p>
<h3>Half past, quarter past, and at</h3>
<p>São duas e meia is half past two. São três e um quarto is a quarter past three. Quarto is masculine, so um, not uma. A quarter to three is São três menos um quarto. At one is à uma, the contraction a plus a, because the missing word is hora. At three, at eight and at ten are às três, às oito, às dez, a plus as, because those hours are plural. À with no s is only for one.</p>
{{ex:São duas e meia.|sowng DOO-uhsh ee MUHY-uh|It is half past two.}}
{{ex:É uma hora.|eh OO-muh AW-ruh|It is one o'clock.}}
{{ex:São três e um quarto.|sowng traysh ee oong KWAHR-too|It is a quarter past three.}}
{{ex:À uma.|ah OO-muh|at one}}
{{ex:Às três.|ahsh traysh|at three}}
{{ex:Às oito.|ahsh OY-too|at eight}}
{{ex:É meio-dia.|eh MUHY-oo DEE-uh|It is noon.}}
{{ex:É meia-noite.|eh MUHY-uh NOY-tih|It is midnight.}}
<p>Noon is meio-dia, one hyphenated word, and it is singular: É meio-dia. Midnight is meia-noite, also singular: É meia-noite. Meia matches noite, which is feminine. Meio in meio-dia stays as it is. Do not rebuild it as meia-dia.</p>
<h3>The days</h3>
<p>Days are written in lower case, and the weekday names through Friday are hyphenated. Segunda-feira is Monday, terça-feira Tuesday, quarta-feira Wednesday, quinta-feira Thursday, sexta-feira Friday, sábado Saturday, domingo Sunday. People also say the short form: hoje é segunda, hoje é quinta. The day of the week takes ser, not estar. Hoje é domingo. Amanhã é quinta-feira.</p>
{{ex:Hoje é segunda-feira.|OH-zhih eh sih-GOON-duh FUHY-ruh|Today is Monday.}}
{{ex:Hoje é quinta-feira.|OH-zhih eh KEEN-tuh FUHY-ruh|Today is Thursday.}}
{{ex:Hoje é domingo.|OH-zhih eh doo-MEEN-goo|Today is Sunday.}}
{{ex:Amanhã é quinta-feira.|ah-muh-NYUHNG eh KEEN-tuh FUHY-ruh|Tomorrow is Thursday.}}
<p>On Monday is na segunda-feira, em plus a. On Thursday is na quinta-feira. On Saturday is no sábado, and on Sunday is no domingo. Ao sábado and ao domingo mean on Saturdays, on Sundays, as a habit. When the practice says use na or use no, follow that cue.</p>
{{ex:Na segunda-feira.|nuh sih-GOON-duh FUHY-ruh|on Monday}}
{{ex:No sábado.|noo SAH-buh-doo|on Saturday}}
<div class="tip">Half past is not masculine, and two is not singular. <b>São duas e meio</b> → <b>São duas e meia</b>. And <b>É duas</b> → <b>São duas</b>.</div>
`,
    check: [
      ["'What time is it?' =", ["Que hora são?", "Que horas é?", "Que horas são?", "Quanto horas são?"], 2, "The question is Que horas são? Horas is plural, and the verb is são."],
      ["'It is half past two.' =", ["São duas e meia.", "São duas e meio.", "É duas e meia.", "São dois e meia."], 0, "Two takes são, and meia agrees with hora, which is feminine."],
      ["'It is one o'clock.' =", ["São uma hora.", "É uma hora.", "É um hora.", "São as uma."], 1, "One is singular, so é, and hora is feminine, so uma."]
    ],
    practice: [
      ["mc", "It is half past two.", "São duas e meia", "São duas e meio", "É duas e meia", "São dois e meia", "Two takes são, and meia agrees with hora: feminine."],
      ["mc", "It is one o'clock.", "É uma hora", "São uma hora", "É um hora", "São as uma", "One is singular, so é, and hora is feminine, so uma."],
      ["mc", "at three", "às três", "à três", "a três", "aos três", "At three is às, the contraction a plus as."],
      ["mc", "Today is Monday.", "Hoje é segunda-feira", "Hoje está segunda-feira", "Hoje são segunda-feira", "Hoje são segundas-feiras", "The day takes ser. Segunda-feira is hyphenated, and it is singular, so é."],
      ["mc", "It is noon.", "É meio-dia", "São meio-dia", "É meia-dia", "É meia-noite", "Noon is meio-dia, and it is singular, so é. Meia-noite is midnight."],
      ["or", "It is half past two. (start with são)", "São duas e meia", "meio", "Meia agrees with hora, which is feminine, and duas takes the plural verb são."],
      ["or", "It is one o'clock. (start with é)", "É uma hora", "são", "One is singular, so é matches the subject, and hora is feminine."],
      ["or", "On Monday. (use na)", "Na segunda-feira", "no", "Na is the contraction of em plus a. Segunda-feira is feminine."],
      ["fi", "São duas e __.", "It is half past two.", "meia", "meio|meias|quarto", "Meia agrees with hora: feminine."],
      ["fi", "__ três.", "at three", "às", "à|ao|na", "Às is the contraction of a plus as. Três is plural."],
      ["fi", "Hoje __ domingo.", "Today is Sunday.", "é", "está|são|sou", "The day takes ser, and domingo is singular, so é matches the subject."],
      ["ty", "It is a quarter past three. (say um quarto)", "São três e um quarto", "ser · três · um quarto", "meia", "Três takes the plural verb são, which matches the subject."],
      ["ty", "It is midnight.", "É meia-noite", "ser · meia-noite", "são", "Meia-noite is singular, so é matches the subject. Meia agrees: feminine."],
      ["ty", "Today is Thursday.", "Hoje é quinta-feira|Hoje é quinta", "hoje · ser · quinta-feira", "está", "The day takes ser, and é matches the subject."]
    ]
  },
  {
    id: "progressive",
    title: "estar a + infinitive",
    blurb: "Say what you are doing right now with estar a and a to-form.",
    deck: "Work and study",
    body: `
<p>English says I am working, with am and an ing-form. In Portugal the same idea is estar, then a, then the to-form of the verb: Estou a trabalhar. The to-form is the verb with no person on it, the dictionary form: trabalhar, falar, comer, estudar. The ending that changes is estar, not the second verb. Tu estás a trabalhar, not estás a trabalhas.</p>
<h3>Who is doing it</h3>
<p>Use the estar you already know, and keep a in the middle. A friend is estás a. O senhor and a senhora are está a, the ele form. Nós is estamos a. Eles, elas and vocês are estão a. Não still sits in front of estar: Não estou a trabalhar.</p>
<div class="tbl"><table><tr><th></th><th>right now</th></tr>
<tr><td class="k">eu</td><td class="k">estou a trabalhar</td></tr>
<tr><td class="k">tu</td><td class="k">estás a trabalhar</td></tr>
<tr><td class="k">ele, o senhor, a senhora</td><td class="k">está a trabalhar</td></tr>
<tr><td class="k">nós</td><td class="k">estamos a trabalhar</td></tr>
<tr><td class="k">eles, vocês</td><td class="k">estão a trabalhar</td></tr></table></div>
{{ex:Estou a trabalhar.|ihsh-TOH uh truh-buh-LYAHR|I am working.}}
{{ex:Estás a trabalhar.|ihsh-TAHSH uh truh-buh-LYAHR|You are working.}}
{{ex:O senhor está a comer.|oo sih-NYOHR ihsh-TAH uh koo-MAYR|The gentleman is eating.}}
{{ex:Estamos a estudar.|ihsh-TUH-moosh uh ihsh-too-DAHR|We are studying.}}
{{ex:Eles estão a trabalhar.|AY-lihsh ihsh-TOWNG uh truh-buh-LYAHR|They are working.}}
{{ex:A Maria está a falar.|uh muh-REE-uh ihsh-TAH uh fuh-LAHR|Maria is speaking.}}
{{ex:Não estou a trabalhar.|nowng ihsh-TOH uh truh-buh-LYAHR|I am not working.}}
<p>The plain present, trabalho, is the usual way to talk about the routine or the job. Use estar a when you mean this very minute. Someone phones and asks what you are doing. You are at the desk, so the answer is Estou a trabalhar. The a is required. Estou trabalhar, with no a, is not the sentence. The second verb stays a to-form: no s for tu, no extra ending for eu.</p>
<p>The ing-form you may know, trabalhando or falando, is the everyday way to say this in Brazil. In Portugal that ndo form is rare for an action in progress. This course does not use it as the answer. Say estou a trabalhar.</p>
<h3>Two cousins: start, and just did</h3>
<p>Começar a, plus a to-form, means to start doing something: começar a trabalhar, to start working. Acabar de, plus a to-form, means you have just done it. Acabo de chegar means I have just arrived. The person shows on the first verb. The second verb stays a to-form. De, not a, is the little word after acabar.</p>
{{ex:Começar a trabalhar.|koo-mih-SAHR uh truh-buh-LYAHR|to start working}}
{{ex:Acabo de chegar.|uh-KAH-boo dih shih-GAHR|I have just arrived.}}
<div class="tip">Do not import the Brazilian ing-form, and do not match the second verb to the person. <b>Estou trabalhando</b> → <b>Estou a trabalhar</b>. And <b>Estás a trabalhas</b> → <b>Estás a trabalhar</b>.</div>
`,
    check: [
      ["'I am working.' =", ["Estou trabalhando.", "Estou trabalhar.", "Sou a trabalhar.", "Estou a trabalhar."], 3, "In Portugal an action right now is estar a plus the to-form. The ndo form is the Brazilian one."],
      ["'You are working.' (to a friend) =", ["Estás a trabalhar.", "Está a trabalhar.", "Estás a trabalhas.", "Estás trabalhando."], 0, "A friend takes the tu form estás. The second verb stays the to-form trabalhar."],
      ["'I have just arrived.' =", ["Acabo a chegar.", "Estou de chegar.", "Acabo de chegar.", "Acabo chegar."], 2, "Acabar de plus the to-form means you have just done it. The little word is de."]
    ],
    practice: [
      ["mc", "I am working.", "Estou a trabalhar", "Estou trabalhando", "Estou trabalhar", "Sou a trabalhar", "In Portugal, an action right now is estar a plus the to-form. The ndo form is Brazilian."],
      ["mc", "You are working. (to a friend)", "Estás a trabalhar", "Está a trabalhar", "Estás trabalhando", "Estás a trabalhas", "A friend takes the tu form estás. The second verb stays a to-form."],
      ["mc", "The gentleman is eating.", "O senhor está a comer", "O senhor estás a comer", "O senhor está comendo", "O senhor está a come", "O senhor takes the ele form está, then a to-form."],
      ["mc", "We are studying.", "Estamos a estudar", "Estamos estudar", "Estão a estudar", "Estamos estudando", "Nós takes estamos, then a, then the to-form."],
      ["mc", "I have just arrived.", "Acabo de chegar", "Acabo a chegar", "Estou de chegar", "Acabo chegar", "Acabar de plus the to-form means you have just done it."],
      ["or", "You are speaking. (to a friend, start with the verb)", "Estás a falar", "falando", "This is the tu form of estar."],
      ["or", "The lady is eating. (start with a senhora)", "A senhora está a comer", "estás", "A senhora takes the ele form."],
      ["or", "They are working. (start with eles)", "Eles estão a trabalhar", "está", "Eles takes the eles form."],
      ["fi", "Tu __ a trabalhar.", "You are working. (to a friend)", "estás", "está|estou|estão", "This is the tu form: estás."],
      ["fi", "Nós __ a estudar.", "We are studying.", "estamos", "estão|estou|está", "Nós takes the nós form: estamos."],
      ["fi", "Eu __ de chegar.", "I have just arrived.", "acabo", "estou|acaba|começar", "Acabar de uses the eu form acabo, then de, then the to-form."],
      ["ty", "I am speaking.", "Estou a falar|Eu estou a falar", "estar · a · falar", "falando", "Estou is the eu form. The second verb is the to-form, not the Brazilian ndo form."],
      ["ty", "You are working. (to an older man)", "O senhor está a trabalhar|Está a trabalhar", "o senhor · estar · a · trabalhar", "estás", "O senhor takes the ele form."],
      ["ty", "They are speaking. (start with eles)", "Eles estão a falar", "eles · estar · a · falar", "está", "Eles takes the eles form."]
    ]
  },
  {
    id: "routine",
    title: "Daily routine and clitic position",
    blurb: "Describe getting up and breakfast, and put me and te on the right side of the verb.",
    deck: "Home and routine",
    body: `
<p>A plain sentence about your morning hangs the little pronoun on the end of the verb, with a hyphen. Levanto-me means I get up. Me is the I pronoun in that spot. Te is the friend pronoun. Se is the pronoun for ele, ela, o senhor and a senhora. You already know the shape from your name: Chamo-me Ana. Não me chamo Pedro moves me to the front, because não is there.</p>
<h3>After the verb, unless não</h3>
<p>Tu levantas-te. A senhora levanta-se, the ele form plus se. Eles levantam-se. For we, the s of levantamos drops before nos: levantamo-nos, not levantamos-nos. Say the pronoun after the verb only when the sentence is plain and affirmative. In Brazil the pronoun often sits in front even then: me levanto. In Portugal that order is not the one to use for a plain statement. Use levanto-me.</p>
{{ex:Levanto-me.|lih-VUHN-too mih|I get up.}}
{{ex:Levantas-te.|lih-VUHN-tuhsh tih|You get up.}}
{{ex:A senhora levanta-se.|uh sih-NYOH-ruh lih-VUHN-tuh sih|The lady gets up.}}
{{ex:Levantamo-nos.|lih-vuhn-TUH-moo noosh|We get up.}}
{{ex:Não me levanto.|nowng mih lih-VUHN-too|I do not get up.}}
{{ex:Não te levantas.|nowng tih lih-VUHN-tuhsh|You do not get up.}}
{{ex:Não se levanta.|nowng sih lih-VUHN-tuh|He does not get up. She does not get up.}}
{{ex:Não nos levantamos.|nowng noosh lih-vuhn-TUH-moosh|We do not get up.}}
<p>After não, the pronoun jumps in front and the hyphen disappears. The verb is whole again, so the nós form keeps its s: não nos levantamos. Não te levantas. Não se levanta. Do not write não levanto-me.</p>
<h3>Breakfast, and the clock you already know</h3>
<p>Breakfast is o pequeno-almoço, one masculine noun with a hyphen. Not the Brazilian name, and not a. Tomo o pequeno-almoço is I have breakfast. Tomamos o pequeno-almoço is we have breakfast. The article is o, because the noun is masculine. Getting up and going to bed take the time from the last lesson. Levanto-me às oito. Deito-me às dez. Às, not à, because eight and ten are plural hours. Trabalho em casa is I work at home.</p>
{{ex:Tomamos o pequeno-almoço.|too-MUH-moosh oo pih-KAY-noo ahl-MOH-soo|We have breakfast.}}
{{ex:Levanto-me às oito.|lih-VUHN-too mih ahsh OY-too|I get up at eight.}}
{{ex:Deito-me às dez.|DUHY-too mih ahsh dehsh|I go to bed at ten.}}
{{ex:Trabalho em casa.|truh-BAH-lyoo uhyng KAH-zuh|I work at home.}}
{{ex:Não me chamo Pedro.|nowng mih SHUH-moo PAY-droo|My name is not Pedro.}}
<p>On a typed answer, levanto-me and levanto me both count for the plain sentence. The hyphen is what you should write. The two words with a space are the same idea if the hyphen key gets away from you. Chamome, stuck together, is not the form.</p>
<div class="tip">The pronoun changes sides, and the hyphen goes with the back side only. <b>Me levanto</b> → <b>Levanto-me</b>. And <b>Não levanto-me</b> → <b>Não me levanto</b>.</div>
`,
    check: [
      ["'I get up.' =", ["Me levanto.", "Levanto-me.", "Levanto-se.", "Levantas-te."], 1, "In a plain sentence in Portugal, me follows the verb. Me levanto is the Brazilian order."],
      ["'I do not get up.' =", ["Não levanto-me.", "Não me levanto-me.", "Não me levanto.", "Me não levanto."], 2, "After não, me comes before the verb, and there is no hyphen."],
      ["'We have breakfast.' =", ["Tomamos a pequeno-almoço.", "Tomo o pequeno-almoço.", "Tomamos o pequeno-almoço.", "Tomamos os pequeno-almoço."], 2, "We is tomamos, and pequeno-almoço is masculine, so o, with the hyphen."]
    ],
    practice: [
      ["mc", "I get up.", "Levanto-me", "Me levanto", "Levanto-se", "Levantas-te", "In a plain sentence in Portugal, me follows the verb. Me levanto is the Brazilian order."],
      ["mc", "I do not get up.", "Não me levanto", "Não levanto-me", "Não me levanto-me", "Me não levanto", "After não, me comes before the verb, with no hyphen."],
      ["mc", "We have breakfast.", "Tomamos o pequeno-almoço", "Tomamos a pequeno-almoço", "Tomamos os pequeno-almoço", "Tomo o pequeno-almoço", "Pequeno-almoço is masculine, so o, and it keeps the hyphen. Tomamos is we."],
      ["mc", "The lady gets up.", "A senhora levanta-se", "A senhora levantas-te", "A senhora se levanta", "A senhora levanto-me", "A senhora takes the ele form, and se follows the verb."],
      ["mc", "I go to bed at ten. (start with the verb)", "Deito-me às dez", "Me deito às dez", "Deito-me em dez", "Deito-me à dez", "Me follows the verb. At ten is às, because the hour is plural."],
      ["or", "You get up. (to a friend, start with tu)", "Tu levantas-te", "se", "This is the tu form, and te follows the verb."],
      ["or", "I do not get up. (start with não)", "Não me levanto", "levanto-me", "After não, me sits before the verb."],
      ["or", "I have breakfast. (start with the verb)", "Tomo o pequeno-almoço", "a", "Pequeno-almoço is masculine, so the article o agrees."],
      ["fi", "Não __ levanto.", "I do not get up.", "me", "te|se|nos", "After não, the eu pronoun me comes before the verb."],
      ["fi", "A senhora levanta-__.", "The lady gets up.", "se", "te|me|nos", "A senhora takes the ele form, so the pronoun is se."],
      ["fi", "Tomamos __ pequeno-almoço.", "We have breakfast.", "o", "a|os|um", "O agrees with pequeno-almoço: masculine singular."],
      ["ty", "I get up at eight. (start with the verb)", "Levanto-me às oito|Levanto me às oito|Eu levanto-me às oito|Eu levanto me às oito", "levantar · me · às oito · pronoun after the verb", "se", "Às is the contraction for at eight, and the verb is the eu form.", "!strict"],
      ["ty", "You get up. (to a friend)", "Levantas-te|Levantas te|Tu levantas-te|Tu levantas te", "levantar · te · to a friend", "se", "This is the tu form, and te follows the verb."],
      ["ty", "I do not get up. (start with não)", "Não me levanto|Eu não me levanto", "não · me · levantar · pronoun before the verb", "levanto-me", "After não, me comes before the verb. This is the eu form."]
    ]
  }
];

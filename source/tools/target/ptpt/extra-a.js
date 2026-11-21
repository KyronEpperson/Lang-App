/* en-ptpt extras, writer EN-PTPT-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
o carro | O carro é caro. | Sim, o carro é muito caro. | The car is expensive. / Yes, the car is very expensive.
a casa | A casa é pequena. | É uma casa pequena. | The house is small. / It is a small house.
o dia | O dia está frio. | Está muito frio. | The day is cold. / It is very cold.
Bom dia | Bom dia, o senhor. | Bom dia. Em que posso ajudar? | Good morning, sir. / Good morning. How can I help?
Obrigado | Obrigado pela ajuda. | Imagina. | Thank you for the help (a man speaking). / Don't mention it.
Desculpe | Desculpe, a senhora. | Diga. | Excuse me, ma'am. / Go ahead.
Chamo-me Ana | Chamo-me Ana. | Muito prazer, Ana. | My name is Ana. / Pleased to meet you, Ana.
Sou de Lisboa | Sou de Lisboa. E tu? | Sou do Porto. | I am from Lisbon. And you? / I am from Porto.
Como te chamas | Como te chamas? | Chamo-me Pedro. E tu? | What's your name? / My name is Pedro. And you?
o meu pai | O meu pai é de Braga. | E a tua mãe? | My father is from Braga. / And your mother?
a minha avó | A minha avó vive em Coimbra. | E o teu avô? | My grandmother lives in Coimbra. / And your grandfather?
uma casa pequena | É uma casa pequena? | É, a casa é pequena. | Is it a small house? / Yes, the house is small.
Quanto custa | Quanto custa o sumo? | São dois euros. | How much is the juice? / It is two euros.
São duas e meia | São duas e meia. | Então até às três. | It is two thirty. / Then see you at three.
um euro | É um euro? | São dois euros. | Is it one euro? / It is two euros.
uma bica | Queria uma bica, se faz favor. | Uma bica. Mais alguma coisa? | I would like an espresso, please. / One espresso. Anything else?
um galão | Para mim, um galão. | E para ti, uma bica? | A milky coffee for me. / And for you, an espresso?
A conta, se faz favor | A conta, se faz favor. | São cinco euros. | The bill, please. / That is five euros.
levanto-me | Eu levanto-me às oito. | Eu não me levanto às oito. | I get up at eight. / I do not get up at eight.
a casa de banho | Onde fica a casa de banho? | Ao lado da sala. | Where is the bathroom? / Next to the living room.
o telemóvel | O telemóvel está na cozinha. | Está na cadeira? | The phone is in the kitchen. / Is it on the chair?
Quero um café | Quero um café, se faz favor. | Um café. Mais alguma coisa? | I want a coffee, please. / One coffee. Anything else?
Pago com cartão | Pago com cartão. | Claro. | I am paying by card. / Of course.
Dá-me a conta | Dá-me a conta, se faz favor. | São dez euros. | Give me the bill, please. / That is ten euros.
a farmácia | Onde fica a farmácia? | A farmácia fica à direita. | Where is the pharmacy? / The pharmacy is on the right.
Vire à esquerda | Vire à esquerda, se faz favor. | Aqui à esquerda? | Turn left, please. / Here on the left?
a praia | A praia fica perto? | Perto da estação. | Is the beach nearby? / Near the station.
`;
exports.EXAMPLES = `
Lisboa | O comboio para Lisboa sai às oito. | The train to Lisbon leaves at eight.
telefone | O telefone está na sala, ao lado da cadeira. | The telephone is in the living room, next to the chair.
Boa noite | Boa noite, a senhora. Até amanhã. | Good night, ma'am. See you tomorrow.
vocês | Vocês são de Faro ou de Braga? | Are you from Faro or from Braga?
Vivo em Lisboa | Vivo em Lisboa com a minha família. | I live in Lisbon with my family.
Sou americana | Sou americana e vivo em Faro. | I am American and I live in Faro.
o meu irmão | O meu irmão vive em Braga com a minha irmã. | My brother lives in Braga with my sister.
a minha filha | A minha filha está na cama. | My daughter is in bed.
dezasseis | O comboio para Coimbra custa dezasseis euros. | The train to Coimbra costs sixteen euros.
segunda-feira | Na segunda-feira vou a Sintra. | On Monday I am going to Sintra.
o vinho | O vinho fica bem com o queijo. | The wine goes well with the cheese.
o pequeno-almoço | O pequeno-almoço em casa é pão e leite. | Breakfast at home is bread and milk.
Não me levanto | Ao domingo não me levanto às oito. | On Sundays I do not get up at eight.
Estou a tomar o pequeno-almoço | Estou a tomar o pequeno-almoço na cozinha. | I am having breakfast in the kitchen.
Vou de comboio | Vou de comboio até Coimbra. | I am going by train as far as Coimbra.
É barato | O sumo aqui é barato. | The juice here is cheap.
a estação de comboio | A estação de comboio fica ao lado do mercado. | The train station is next to the market.
perto de | O mercado fica perto de casa. | The market is near home.
`;
exports.PATTERNS = `
Chamo-me ___. | My name is ___. | Chamo-me Ana. | My name is Ana.
Sou de ___. | I am from ___ (a city with no article). | Sou de Lisboa. | I am from Lisbon.
o meu ___ | my ___ (masculine) | o meu pai | my father
Quero ___. | I want ___. | Quero um café. | I want a coffee.
Queria ___, se faz favor. | I would like ___, please. | Queria uma bica, se faz favor. | I would like an espresso, please.
Vou de ___. | I go by ___. | Vou de comboio. | I go by train.
Onde fica ___? | Where is ___? | Onde fica a farmácia? | Where is the pharmacy?
Vire à ___. | Turn ___ (to a stranger). | Vire à esquerda. | Turn left (to a stranger).
São ___ euros. | It is ___ euros. | São cinco euros. | It is five euros.
`;

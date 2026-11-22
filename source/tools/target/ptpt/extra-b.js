/* en-ptpt extras, part B (writer EN-PTPT-B). DIALOG: card | A | B | English A / English B.
   EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English.
   Keys are card targets from decks-b.js. */
exports.DIALOG = `
Vou de autocarro | Vou de autocarro para Sintra. | Eu vou de comboio. | I am going by bus to Sintra. / I am going by train.
O comboio para Faro | A que horas sai o comboio para Faro? | Sai da estação às nove. | What time does the train to Faro leave? / It leaves the station at nine.
a paragem de autocarro | Onde está a paragem de autocarro? | Fica ao lado da estação. | Where is the bus stop? / It is next to the station.
Estou a trabalhar | Estás livre? | Não, estou a trabalhar. | Are you free? / No, I am working.
Tu estudas português | Tu estudas português? | Sim, estudo em Lisboa. | Do you study Portuguese? / Yes, I study in Lisbon.
O senhor fala | O senhor fala inglês? | Falo um pouco. | Do you speak English, sir? / I speak a little.
Estou cansado | Estás bem? | Não, estou cansado. | Are you well? / No, I am tired.
Estou em Lisboa | Onde estás? | Estou em Lisboa. | Where are you? / I am in Lisbon.
A senhora está bem | A senhora está bem? | Estou bem, obrigada. | Are you well, ma'am? / I am well, thank you.
Gosto de Lisboa | Gosto de Lisboa. E tu? | Eu também, mas prefiro o Porto. | I like Lisbon. And you? / Me too, but I prefer Porto.
Prefiro o comboio | Vamos de autocarro? | Não, prefiro o comboio. | Shall we go by bus? / No, I prefer the train.
Gostei de Lisboa | Gostei de Lisboa. E tu? | Eu também. Fui ao Porto depois. | I liked Lisbon. And you? / Me too. I went to Porto afterwards.
Como estás | Como estás? | Estou bem, e tu? | How are you? / I am well, and you?
Onde é que está | Onde é que está o metro? | O metro está na estação. | Where is the metro? / The metro is at the station.
Porquê | Vais de comboio. Porquê? | Porque gosto. | You are going by train. Why? / Because I like it.
Vou a Lisboa | Vou a Lisboa amanhã. | Vais de comboio? | I am going to Lisbon tomorrow. / Are you going by train?
Tenho de trabalhar | Vens à praia? | Não posso, tenho de trabalhar. | Are you coming to the beach? / I can't. I have to work.
Vamos ao Porto | Vamos ao Porto no sábado? | Sim, eu vou de comboio. | Shall we go to Porto on Saturday? / Yes, I am going by train.
Há uma farmácia | Há uma farmácia aqui? | Sim, há uma na estação. | Is there a pharmacy here? / Yes, there is one at the station.
Não me chamo Ana | Tu és a Ana? | Não, não me chamo Ana. | Are you Ana? / No, my name is not Ana.
os meus livros | Onde estão os meus livros? | Os teus livros estão em casa. | Where are my books? / Your books are at home.
Parabéns | Parabéns pelo trabalho. | Muito obrigado. | Congratulations on the work. / Thank you very much.
Está giro | Olha o casaco. | Está giro. | Look at the coat. / That is nice.
Fixe | Vamos à praia amanhã? | Fixe! | Shall we go to the beach tomorrow? / Cool!
`;

exports.EXAMPLES = `
no Porto | Amanhã estou no Porto. | Tomorrow I will be in Porto.
à praia | Vamos à praia de autocarro. | We are going to the beach by bus.
Estamos a trabalhar | Estamos a trabalhar em Braga hoje. | We are working in Braga today.
Eles estão a trabalhar | Eles estão a trabalhar até às seis. | They are working until six.
Estou triste | Estou triste porque não estou em casa. | I am sad because I am not at home.
Não estou bem | Hoje não estou bem. | I am not well today.
Gosto do pequeno-almoço | Gosto do pequeno-almoço em casa. | I like breakfast at home.
porque | Fico em casa porque estou cansado. | I am staying home because I am tired.
O que é | O que é isto? | What is this?
não | A Ana não está em Lisboa. | Ana is not in Lisbon.
Tenho de ir | Tenho de ir ao metro. | I have to go to the metro.
Vou visitar o Porto | Em junho vou visitar o Porto. | In June I am going to visit Porto.
Tenho dois irmãos | Tenho dois irmãos e uma irmã. | I have two brothers and a sister.
em Lisboa | Estou em Lisboa, não no Porto. | I am in Lisbon, not in Porto.
Muito obrigada | Muito obrigada pela ajuda. | Thank you very much for the help.
Muito bonito | O teu casaco é muito bonito. | Your coat is very lovely.
`;

exports.PATTERNS = `
Vou de ___ | I go by ___ | Vou de metro | I go by metro
Estou a ___ | I am ___ right now | Estou a trabalhar | I am working
Estou ___ | I am ___ (a state) | Estou cansada | I am tired
Gosto de ___ | I like ___ | Gosto de café | I like coffee
Gosto do ___ | I like ___ (de + o) | Gosto do Porto | I like Porto
Onde está ___ | Where is ___ | Onde está a estação | Where is the station
Tenho de ___ | I have to ___ | Tenho de ficar | I have to stay
Posso ___ | I can ___ | Posso ir | I can go
Muito ___ | Very ___ | Muito bem | Very good
`;

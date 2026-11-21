/* en-nl extras, part B (writer EN-NL-B). DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
Ik sta om zeven uur op. | Hoe laat sta jij op, Lotte? | Ik sta om zeven uur op. | What time do you get up, Lotte? / I get up at seven.
Er is een bed. | Er is een bed in de slaapkamer. | Mooi, dan slaap ik daar. | There is a bed in the bedroom. / Good, then I'll sleep there.
Ik ruim de kamer op. | Wat doe je, Bas? | Ik ruim de kamer op. | What are you doing, Bas? / I'm tidying the room.
Waar is het station? | Waar is het station? | Ga rechtdoor. Het is dichtbij. | Where is the station? / Go straight ahead. It's nearby.
Ik ben de weg kwijt. | Ik ben de weg kwijt. | Geen probleem. Het museum is links. | I'm lost. / No problem. The museum is on the left.
Gaat u rechtdoor. | Pardon, hoe kom ik bij het museum? | Gaat u rechtdoor. | Excuse me, how do I get to the museum? / Go straight ahead.
Van welk spoor? | Van welk spoor vertrekt de trein? | Van spoor vier. | Which platform does the train leave from? / From platform four.
Ik neem de trein. | Ik neem de trein naar Groningen. | Goede reis! | I'm taking the train to Groningen. / Have a good trip!
Ik stap hier uit. | Waar stap jij uit, Mei? | Ik stap hier uit. | Where are you getting off, Mei? / I'm getting off here.
Ik werk in Utrecht. | Waar werk je, Peter? | Ik werk in Utrecht. | Where do you work, Peter? / I work in Utrecht.
Werkt u hier? | Werkt u hier? | Ja, ik ben de docent. | Do you work here? / Yes, I'm the teacher.
Ik heb een vergadering. | Ga je mee, Anne? | Nee, ik heb een vergadering. | Are you coming along, Anne? / No, I have a meeting.
Het gaat goed. | Hoe gaat het, Emma? | Het gaat goed. | How are you, Emma? / I'm fine.
Ik heb honger. | Ik heb honger. | Ik ook. | I'm hungry. / Me too.
Ik heb het koud. | Ik heb het koud. | Ik doe het raam dicht. | I'm cold. / I'll close the window.
Ik wil graag fietsen. | Ik wil graag fietsen. | Ik ook. Ik vind fietsen leuk. | I'd like to cycle. / Me too. I like cycling.
Kun je zwemmen? | Kun je zwemmen, Yara? | Ja, ik kan zwemmen. | Can you swim, Yara? / Yes, I can swim.
Mag ik mee? | Mag ik mee? | Ja, natuurlijk. | May I come along? / Yes, of course.
Waar woon je? | Waar woon je? | Ik woon in Den Haag. | Where do you live? / I live in The Hague.
omdat ik moe ben | Waarom blijf je thuis? | Omdat ik moe ben. | Why are you staying home? / Because I'm tired.
Morgen ga ik naar school. | Morgen ga ik naar school. | Ik ook. | Tomorrow I'm going to school. / Me too.
Ik kom eventueel. | Kom je naar het feest, Mark? | Ik kom eventueel. | Are you coming to the party, Mark? / I might come.
een groot huis | Woon je in een groot huis? | Nee, ik woon in een klein huis. | Do you live in a big house? / No, I live in a small house.
Ik heb geen fiets. | Heb je een fiets? | Nee, ik heb geen fiets. | Do you have a bike? / No, I don't have a bike.
`;

exports.EXAMPLES = `
de keuken | De keuken is naast de woonkamer. | The kitchen is next to the living room.
Ik kom om zes uur thuis. | Ik kom om zes uur thuis en ik ga naar bed. | I get home at six and I go to bed.
Steek de straat over. | Steek bij de brug de straat over. | Cross the street at the bridge.
naast de kerk | Het museum is naast de kerk. | The museum is next to the church.
Ik ben naar Amsterdam gegaan. | Gisteren ben ik naar Amsterdam gegaan. | Yesterday I went to Amsterdam.
De trein heeft vertraging. | De trein naar Rotterdam heeft vertraging. | The train to Rotterdam is delayed.
Ik studeer in Groningen. | Ik studeer in Groningen en ik werk in het weekend. | I study in Groningen and I work on the weekend.
Jij werkt in Rotterdam. | Jij werkt in Rotterdam en ik werk in Utrecht. | You work in Rotterdam and I work in Utrecht.
Ik ben jarig. | Ik ben jarig en ik ben blij. | It's my birthday and I'm glad.
Ik voel me niet goed. | Ik voel me niet goed, want ik ben ziek. | I don't feel well, because I'm sick.
Ik hou van muziek. | Ik hou van muziek en ik lees graag een boek. | I like music and I like to read a book.
in het weekend | In het weekend speel ik voetbal. | On the weekend I play soccer.
Ik denk dat hij moe is. | Ik denk dat hij moe is, want hij werkt veel. | I think that he is tired, because he works a lot.
Woon je in Amsterdam? | Woon je in Amsterdam of in Rotterdam? | Do you live in Amsterdam or in Rotterdam?
de file | Er is een file bij Rotterdam. | There is a traffic jam near Rotterdam.
slim | Fatima is slim en ze werkt op kantoor. | Fatima is clever and she works at the office.
`;

exports.PATTERNS = `
Ik sta om ___ uur op. | I get up at ___. | Ik sta om zeven uur op. | I get up at seven.
Er is ___. | There is ___. | Er is een bed. | There is a bed.
Waar is ___? | Where is ___? | Waar is het station? | Where is the station?
Ik neem ___. | I'm taking ___. | Ik neem de trein. | I'm taking the train.
Ik ben ___. | I'm ___ (tired, sick, glad). | Ik ben moe. | I'm tired.
Ik heb ___. | I'm ___ (hungry or thirsty). | Ik heb honger. | I'm hungry.
Ik wil ___. | I want to ___. | Ik wil fietsen. | I want to cycle.
omdat ik ___ ben | because I am ___ | omdat ik moe ben | because I'm tired
Ik heb geen ___. | I don't have a ___. | Ik heb geen fiets. | I don't have a bike.
`;

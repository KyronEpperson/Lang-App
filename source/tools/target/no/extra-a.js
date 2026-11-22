/* en-no extras, writer EN-NO-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
bok | Er det ei bok? | Ja, boka er ny. | Is that a book? / Yes, the book is new.
takk | Takk for hjelpen. | Bare hyggelig. | Thanks for the help. / You're welcome.
kjøpe | Skal vi kjøpe brød? | Ja, la oss kjøpe brød. | Shall we buy bread? / Yes, let's buy bread.
Hei! | Hei! | Hei, Anna! | Hi! / Hi, Anna!
God morgen. | God morgen. | God morgen. Hvordan har du det? | Good morning. / Good morning. How are you?
Unnskyld. | Unnskyld. | Ja, hva kan jeg hjelpe deg med? | Excuse me. / Yes, how can I help you?
Jeg heter Anna. | Hei. Jeg heter Anna. | Hei, Anna. Jeg heter Lars. | Hi. My name is Anna. / Hi, Anna. My name is Lars.
Jeg kommer fra Oslo. | Hvor kommer du fra? | Jeg kommer fra Oslo. | Where are you from? / I'm from Oslo.
Hyggelig å hilse på deg. | Hyggelig å hilse på deg. | I like måte. | Nice to meet you. / Likewise.
ei jente | Er det ei jente? | Ja, jenta heter Nora. | Is that a girl? / Yes, the girl's name is Nora.
mora mi | Hvem er det? | Det er mora mi. | Who is that? / That's my mother.
et barn | Har du et barn? | Ja, barnet mitt er lite. | Do you have a child? / Yes, my child is little.
Hva koster det? | Hva koster det? | Ti kroner. | What does it cost? / Ten kroner.
klokka halv tre | Når kommer du? | Klokka halv tre. | When are you coming? / At 2:30.
tjue | Hvor mange? | Tjue, takk. | How many? / Twenty, please.
Det regner. | Skal vi gå ut? | Nei, det regner. | Shall we go out? / No, it's raining.
i dag | Kommer du i dag? | Ja, i dag jobber jeg hjemme. | Are you coming today? / Yes, today I'm working at home.
mandag | Ses vi på mandag? | Ja, mandag er bra. | Shall we meet on Monday? / Yes, Monday is fine.
Jeg vil ha melk. | Hva vil du ha? | Jeg vil ha melk. | What do you want? / I want milk.
Takk for maten. | Takk for maten. | Vel bekomme. | Thanks for the meal. / You're welcome.
brødet | Hvor er brødet? | Brødet ligger på bordet. | Where is the bread? / The bread is on the table.
Hva koster den? | Hva koster den? | Ti kroner. | What does that one cost? / Ten kroner.
den store bilen | Hvilken bil? | Den store bilen. | Which car? / The big car.
ei rød jakke | Har du ei rød jakke? | Ja, denne jakka er rød. | Do you have a red jacket? / Yes, this jacket is red.
Jeg setter meg. | Kom inn. | Takk. Jeg setter meg. | Come in. / Thanks. I'll sit down.
Jeg er hjemme. | Er du hjemme? | Ja, jeg er hjemme. | Are you at home? / Yes, I'm at home.
et kjøkken | Har dere et kjøkken? | Ja, kjøkkenet er lite. | Do you have a kitchen? (to several people) / Yes, the kitchen is small.
`;
exports.EXAMPLES = `
båt | Båten er stor. | The boat is big.
norsk | Dette skjemaet er på norsk. | This form is in Norwegian.
God natt. | God natt, Kari. Vi ses i morgen. | Good night, Kari. See you tomorrow.
Vær så snill. | En kaffe, vær så snill. | A coffee, please.
Jeg bor i Minneapolis. | Jeg bor i Minneapolis, men jeg kommer fra Oslo. | I live in Minneapolis, but I'm from Oslo.
Jeg er student. | Jeg er student, og jeg lærer norsk. | I'm a student, and I'm learning Norwegian.
en bror | Jeg har en bror og ei søster. | I have a brother and a sister.
barna mine | Barna mine bor i Bergen. | My children live in Bergen.
kvart på tre | Vi møtes kvart på tre. | We meet at 2:45.
en kaffe | Jeg vil ha en kaffe, takk. | I'll have a coffee, thanks.
I dag jobber jeg. | I dag jobber jeg, men i morgen er jeg hjemme. | Today I'm working, but tomorrow I'm at home.
Det er kaldt. | Det er kaldt i Oslo i dag. | It's cold in Oslo today.
ost | Jeg vil ha ost på brødet. | I want cheese on the bread.
matpakka | Matpakka mi er på kjøkkenet. | My packed lunch is in the kitchen.
ei lita bok | Nora leser ei lita bok. | Nora is reading a little book.
disse skoene | Disse skoene er for store. | These shoes are too big.
Jeg legger meg. | Jeg legger meg klokka elleve. | I go to bed at eleven.
Det er blått. | Huset? Det er blått. | The house? It is blue.
`;
exports.PATTERNS = `
Bokstaven ___ | The letter ___ | Bokstaven å | The letter å
God ___. | Good ___. | God kveld. | Good evening.
Jeg heter ___. | My name is ___. | Jeg heter Nora. | My name is Nora.
ei ___ | a ___ (feminine) | ei jente | a girl
Klokka er ___. | It's ___ o'clock. | Klokka er tre. | It's 3:00.
I dag ___. | Today ___. (verb second) | I dag jobber jeg. | Today I'm working.
Jeg vil ha ___. | I want ___. | Jeg vil ha melk. | I want milk.
den store ___ | the big ___ (masculine, double definite) | den store bilen | the big car
Jeg ___ meg. | I ___ (reflexive, with jeg) | Jeg setter meg. | I sit down.
`;

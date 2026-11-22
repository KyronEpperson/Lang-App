/* en-cs extras, writer EN-CS-B. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
jedna koruna | To je jedna koruna? | Ano, jedna koruna. | Is that one crown? / Yes, one crown.
dvě koruny | Máte dvě koruny? | Ano, mám dvě koruny. | Do you have two crowns? / Yes, I have two crowns.
čtyři dva nula | Jaké máte číslo? | Moje číslo je čtyři dva nula. | What is your number? / My number is four two zero.
Kolik to stojí? | Kolik to stojí? | Deset korun. | How much is it? / Ten crowns.
Co chcete? | Dobrý den. Co chcete? | Hledám mapu. | Hello. What would you like? / I'm looking for a map.
Jen se dívám. | Můžu vám pomoct? | Ne, děkuji. Jen se dívám. | Can I help you? / No, thank you. I'm just looking.
Kolik je hodin? | Kolik je hodin? | Je pět hodin. | What time is it? / It's five o'clock.
v pondělí | Máte čas v pondělí? | Ano, v pondělí mám čas. | Do you have time on Monday? / Yes, on Monday I have time.
zítra | Jedete zítra do Brna? | Ne, zítra jedu do Prahy. | Are you going to Brno tomorrow? / No, tomorrow I'm going to Prague.
v Praze | Jste v Praze? | Ano, jsem v Praze. | Are you in Prague? / Yes, I'm in Prague.
Kde je nádraží? | Promiňte, kde je nádraží? | Nádraží je tam. | Excuse me, where is the station? / The station is over there.
na poště | Kde je Eva? | Eva je na poště. | Where is Eva? / Eva is at the post office.
Pojedu do Prahy. | Pojedete do Prahy? | Ano, pojedu do Prahy. | Are you going to Prague? / Yes, I'll go to Prague.
doleva | Jděte rovně a pak doleva. | Děkuji. | Go straight, and then left. / Thank you.
Jedu metrem. | Jedete metrem? | Ano, jedu metrem. | Are you taking the metro? / Yes, I'm taking the metro.
Musím pracovat. | Musíte pracovat dnes? | Ano, musím pracovat. | Do you have to work today? / Yes, I have to work.
univerzita | To je univerzita? | Ano, to je moje univerzita. | Is that the university? / Yes, that is my university.
Chci studovat češtinu. | Co chcete studovat? | Chci studovat češtinu. | What do you want to study? / I want to study Czech.
Chutná mi. | Chutná vám pivo? | Ano, chutná mi. | Do you like the beer? / Yes, I like it.
Všechno nejlepší. | Všechno nejlepší! | Děkuji. | All the best! / Thank you.
České pivo je dobré. | České pivo je dobré. | Děkuji. | Czech beer is good. / Thank you.
host | Kdo je to? | To je host. | Who is that? / That is a guest.
aktuální | Je to aktuální? | Ano, je to aktuální. | Is it current? / Yes, it is current.
To je moje kolej. | To je kolej? | Ano, to je moje kolej. | Is that a dorm? / Yes, that is my dorm.
`;
exports.EXAMPLES = `
dvě koruny | Tady jsou dvě koruny. | Here are two crowns.
deset korun | To je deset korun. | That is ten crowns.
černé kalhoty | Hledám černé kalhoty. | I'm looking for black pants.
účtenka | Tady je účtenka. | Here is the receipt.
čtvrtek | Dnes je čtvrtek. | Today is Thursday.
ve středu | Mám hodinu ve středu. | I have a class on Wednesday.
v divadle | Eva je v divadle. | Eva is at the theater.
ve škole | Petr je ve škole. | Petr is at school.
Půjdu pěšky. | Dnes půjdu pěšky do školy. | Today I'll walk to school.
rovně | Jděte rovně na náměstí. | Go straight to the square.
musím | Dnes musím pracovat. | Today I have to work.
na univerzitě | Anna je na univerzitě. | Anna is at the university.
České pivo je dobré. | České pivo je dobré a chutná mi. | Czech beer is good, and I like it.
To je mi líto. | To je mi líto, ale nemůžu dnes. | I'm sorry, but I can't today.
aktuální | To je aktuální cena. | That is the current price.
Mám ráda čaj. | Mám ráda čaj a kávu. | I like tea and coffee.
`;
exports.PATTERNS = `
Kde je ___? | Where is ___? | Kde je nádraží? | Where is the station?
Jedu ___. | I'm going (by vehicle) ___. | Jedu do Prahy. | I'm going to Prague.
Půjdu ___. | I'll go on foot ___. | Půjdu pěšky. | I'll walk.
Chci ___. | I want ___. | Chci studovat češtinu. | I want to study Czech.
Je ___ hodin. | It's ___ o'clock, from five up | Je pět hodin. | It's five o'clock.
Líbí se mi ___. | I like ___. | Líbí se mi Praha. | I like Prague.
Chutná mi ___. | I like the ___ (food). | Chutná mi káva. | I like the coffee.
Hledám ___. | I'm looking for ___. | Hledám mapu. | I'm looking for a map.
___ korun | ___ crowns, from five up | pět korun | five crowns
`;

/* en-da extras, writer EN-DA-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
nej | Vil du have et æble? | Nej, tak. | Do you want an apple? (to one person) / No, thanks.
ja | Er det mælk? | Ja, det er mælk. | Is that milk? / Yes, it's milk.
en hund | Hvad er det? | Det er en hund. | What is that? / It's a dog.
hej | Hej, Anna. | Hej. Hvordan har du det? | Hi, Anna. / Hi. How are you? (to one person)
godmorgen | Godmorgen. | Godmorgen. Vil du have kaffe? | Good morning. / Good morning. Do you want coffee? (to one person)
det var så lidt | Tak for hjælpen. | Det var så lidt. | Thanks for the help. / You're welcome. (to one person)
hvad hedder du | Hej, hvad hedder du? | Jeg hedder Anna. | Hi, what's your name? (to one person) / My name is Anna.
jeg bor i København | Hvor bor du? | Jeg bor i København. | Where do you live? (to one person) / I live in Copenhagen.
hyggeligt at møde dig | Jeg hedder Mads. | Hyggeligt at møde dig. Jeg hedder Anna. | My name is Mads. / Nice to meet you. My name is Anna. (to one person)
jeg taler engelsk | Taler du dansk? | Nej, jeg taler engelsk. | Do you speak Danish? (to one person) / No, I speak English.
jeg er dansker | Er du dansker? | Ja, jeg er dansker. Jeg kommer fra Danmark. | Are you a Dane? (to one person) / Yes, I'm a Dane. I come from Denmark.
jeg kommer fra Amerika | Hvor kommer du fra? | Jeg kommer fra Amerika. | Where are you from? (to one person) / I come from America.
en bil | Har du en bil? | Nej, jeg har ikke en bil. | Do you have a car? (to one person) / No, I don't have a car.
et hus | Bor du i et hus? | Ja, jeg bor i et hus. | Do you live in a house? (to one person) / Yes, I live in a house.
en kop kaffe | Vil du have en kop kaffe? | Ja tak. | Do you want a cup of coffee? (to one person) / Yes, please.
bilen | Er bilen her? | Ja, bilen er her. | Is the car here? / Yes, the car is here.
huset | Er det huset? | Ja, det er huset. | Is that the house? / Yes, that's the house.
vandet | Er vandet koldt? | Ja, vandet er koldt. | Is the water cold? / Yes, the water is cold.
jeg arbejder ikke | Arbejder du i dag? | Nej, jeg arbejder ikke. | Are you working today? (to one person) / No, I'm not working.
i dag arbejder jeg | Hvad laver du i dag? | I dag arbejder jeg. | What are you doing today? (to one person) / Today I'm working.
han siger, at han ikke kommer | Kommer han i morgen? | Han siger, at han ikke kommer. | Is he coming tomorrow? / He says he's not coming.
hvor bor du | Hvor bor du? | Jeg bor i Aalborg. | Where do you live? (to one person) / I live in Aalborg.
hvad koster det | Hvad koster det? | Det koster tyve kroner. | What does it cost? / It costs twenty kroner.
taler du dansk | Taler du dansk? | Ja, jeg taler lidt dansk. | Do you speak Danish? (to one person) / Yes, I speak a little Danish.
halv tre | Hvornår kommer du? | Jeg kommer halv tre. | When are you coming? (to one person) / I'm coming at 2:30.
det koster tyve kroner | Hvad koster en kop kaffe? | Det koster tyve kroner. | What does a cup of coffee cost? / It costs twenty kroner.
hvad er klokken | Undskyld, hvad er klokken? | Den er tre. | Excuse me, what time is it? / It's three o'clock.
`;
exports.EXAMPLES = `
mad | Der er mad på bordet. | There is food on the table.
æble | Der er et æble på bordet. | There's an apple on the table.
farvel | Farvel, og hav en god dag. | Goodbye, and have a good day.
undskyld | Undskyld, jeg kommer for sent. | Sorry, I'm late.
jeg kommer fra Odense | Jeg kommer fra Odense, men jeg bor i København. | I come from Odense, but I live in Copenhagen.
jeg er tredive år | Jeg hedder Anna, og jeg er tredive år. | My name is Anna, and I'm thirty.
jeg taler lidt dansk | Jeg taler lidt dansk, og jeg taler engelsk. | I speak a little Danish, and I speak English.
en dansker | Jeg kender en dansker i Aalborg. | I know a Dane in Aalborg.
et æble | Jeg spiser et æble hver dag. | I eat an apple every day.
biler | Der er mange biler i København. | There are a lot of cars in Copenhagen.
livet | Livet i København er dyrt. | Life in Copenhagen is expensive.
bilerne | Jeg ser bilerne på gaden. | I see the cars on the street.
hvis du ikke kommer, går jeg | Hvis du ikke kommer, går jeg hjem. | If you don't come, I'll go home. (to one person)
vi bor ikke i Aarhus | Vi bor ikke i Aarhus. Vi bor i Aalborg. | We don't live in Aarhus. We live in Aalborg.
hvornår kommer du | Hvornår kommer du til Odense? | When are you coming to Odense? (to one person)
er det et hus | Er det et hus i Aarhus? | Is it a house in Aarhus?
femogtyve | Jeg er femogtyve år. | I'm twenty-five.
en krone | Jeg har kun en krone. | I only have one krone.
`;
exports.PATTERNS = `
jeg hedder ___ | my name is ___ | jeg hedder Anna | My name is Anna.
jeg kommer fra ___ | I come from ___ | jeg kommer fra Danmark | I come from Denmark.
jeg bor i ___ | I live in ___ | jeg bor i København | I live in Copenhagen.
jeg er ___ | I am ___ | jeg er dansker | I'm a Dane.
jeg taler ___ | I speak ___ | jeg taler engelsk | I speak English.
en ___ | a ___ (common gender) | en bil | a car
et ___ | a ___ (neuter) | et hus | a house
det koster ___ kroner | it costs ___ kroner | det koster tyve kroner | It costs twenty kroner.
den er ___ | it's ___ o'clock | den er tre | It's three o'clock.
`;

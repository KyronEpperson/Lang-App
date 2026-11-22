/* en-sv extras, writer EN-SV-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
sju | Vad är sju plus tre? | Det är tio. | What is seven plus three? / It's ten.
tjugo | Är du tjugo år? | Ja, jag är tjugo. | Are you twenty? / Yes, I'm twenty.
här | Är du här? | Ja, jag är här. | Are you here? / Yes, I'm here.
Hej! | Hej! | Hej! Hur är det? | Hi! / Hi! How are things?
Tack! | Varsågod, en kaffe. | Tack! | Here you are, a coffee. / Thank you!
Hej då! | Hej då! | Hej då, vi ses! | Bye! / Bye, see you!
Jag heter Anna. | Hej, jag heter Anna. | Hej Anna, jag heter Erik. | Hi, my name is Anna. / Hi Anna, my name is Erik.
Jag bor i Stockholm. | Var bor du? | Jag bor i Stockholm. | Where do you live? / I live in Stockholm.
Jag är lärare. | Vad jobbar du med? | Jag är lärare. | What do you do for work? / I'm a teacher.
min mamma | Är det din mamma? | Ja, det är min mamma. | Is that your mom? / Yes, that's my mom.
ett barn | Är det ett barn? | Ja, det är mitt barn. | Is that a child? / Yes, that's my child.
ett hus | Bor ni i ett hus? | Nej, vi bor i en lägenhet. | Do you all live in a house? / No, we live in an apartment.
Vad kostar det? | Vad kostar det? | Det kostar tio kronor. | How much is it? / It costs ten kronor.
halv tre | När ses vi? | Halv tre. | When are we meeting? / At 2:30.
tio kronor | Har du tio kronor? | Ja, här. | Do you have ten kronor? / Yes, here you go.
Idag jobbar jag. | Jobbar du idag? | Ja, idag jobbar jag. | Are you working today? / Yes, today I'm working.
Det regnar. | Hur är vädret? | Det regnar. | How's the weather? / It's raining.
Jag var trött. | Var du trött igår? | Ja, jag var trött. | Were you tired yesterday? / Yes, I was tired.
Jag vill ha en kaffe. | Vad vill du ha? | Jag vill ha en kaffe. | What would you like? / I'd like a coffee.
en kanelbulle | En kanelbulle, tack. | Varsågod. | A cinnamon bun, please. / Here you are.
Vad gott! | Smaka på bullen. | Vad gott! | Try the bun. / That's delicious!
en röd tröja | Vill du ha en röd tröja? | Ja, tack. | Do you want a red sweater? / Yes, please.
Hur mycket kostar den? | Hur mycket kostar den? | Den kostar hundra kronor. | How much does it cost? / It costs a hundred kronor.
Jag tar den. | Passar den? | Ja, jag tar den. | Does it fit? / Yes, I'll take it.
Jag förstår inte. | Förstår du? | Nej, jag förstår inte. | Do you understand? / No, I don't understand.
Jag äter frukost. | Äter du frukost? | Ja, jag äter frukost hemma. | Do you eat breakfast? / Yes, I eat breakfast at home.
hemma | Är du hemma? | Ja, jag är hemma. | Are you at home? / Yes, I'm at home.
`;
exports.EXAMPLES = `
bok | Jag läser en bok på svenska. | I'm reading a book in Swedish.
fyra | Vi är fyra i familjen. | There are four of us in the family.
God morgon! | God morgon, vill du ha en kaffe? | Good morning, do you want a coffee?
Tack så mycket! | Tack så mycket för hjälpen. | Thank you very much for the help.
Jag kommer från Minneapolis. | Jag kommer från Minneapolis, men jag bor i Uppsala. | I'm from Minneapolis, but I live in Uppsala.
Jag pratar engelska. | Jag pratar engelska och lite svenska. | I speak English and a little Swedish.
en familj | Hela min familj bor i Sverige. | My whole family lives in Sweden.
mina barn | Mina barn bor i Lund med sin pappa. | My kids live in Lund with their dad.
tjugoett | Anna är tjugoett år. | Anna is twenty-one.
klockan är åtta | Klockan är åtta och jag äter frukost. | It's eight o'clock and I'm eating breakfast.
idag | Idag är det måndag och det regnar. | Today is Monday and it's raining.
imorgon | Imorgon jobbar jag inte. | I'm not working tomorrow.
en smörgås | Jag vill ha en smörgås med ost och smör. | I'd like a sandwich with cheese and butter.
fika | Vi tar en fika på ett kafé i Göteborg. | We're having a fika at a café in Gothenburg.
ett stort hus | De bor i ett stort hus i Uppsala. | They live in a big house in Uppsala.
en blå jacka | En blå jacka kostar hundra kronor. | A blue jacket costs a hundred kronor.
ofta | Jag äter ofta lunch hemma. | I often eat lunch at home.
aldrig | Jag äter aldrig frukost på jobbet. | I never eat breakfast at work.
`;
exports.PATTERNS = `
Jag heter ___. | My name is ___. | Jag heter Anna. | My name is Anna.
Jag kommer från ___. | I'm from ___. | Jag kommer från Sverige. | I'm from Sweden.
Jag bor i ___. | I live in ___. | Jag bor i Stockholm. | I live in Stockholm.
en ___ | a ___ (common gender) | en bil | a car
ett ___ | a ___ (neuter) | ett hus | a house
Kan jag få ___? | Can I have ___? | Kan jag få en kaffe? | Can I have a coffee?
Idag ___ jag. | Today I ___ (verb second). | Idag jobbar jag. | Today I'm working.
Hur mycket kostar ___? | How much does ___ cost? | Hur mycket kostar den? | How much does it cost?
Jag ___ inte. | I don't ___. | Jag förstår inte. | I don't understand.
`;

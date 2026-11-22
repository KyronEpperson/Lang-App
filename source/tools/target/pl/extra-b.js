/* en-pl extras, writer EN-PL-B. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. */
exports.DIALOG = `
Która godzina? | Która godzina? | Jest ósma. | What time is it? / It's eight o'clock.
W środę czytam. | Co pan robi w środę? | W środę czytam. | What do you do on Wednesday? / On Wednesday I read.
Dziś jest sobota. | Jaki dziś jest dzień? | Dziś jest sobota. | What day is it today? / Today is Saturday.
Jestem w domu. | Gdzie pan jest? | Jestem w domu. | Where are you? / I'm at home.
Mieszkam w Warszawie. | Gdzie pani mieszka? | Mieszkam w Warszawie. | Where do you live? / I live in Warsaw.
Na poczcie. | Gdzie jest Anna? | Na poczcie. | Where is Anna? / At the post office.
Gdzie jest dworzec? | Gdzie jest dworzec? | Prosto, a potem w prawo. | Where is the station? / Straight, and then to the right.
W lewo. | W lewo czy w prawo? | W lewo. | Left or right? / To the left.
Blisko. | Czy to jest daleko? | Blisko. | Is it far? / Near.
Idę do sklepu. | Gdzie pan idzie? | Idę do sklepu. | Where are you going? / I'm going to the shop.
Jadę do Krakowa. | Gdzie pani jedzie? | Jadę do Krakowa. | Where are you going? / I'm going to Kraków.
Chodzę do pracy. | Co pan robi rano? | Chodzę do pracy. | What do you do in the morning? / I go to work.
Czy pan mówi po polsku? | Czy pan mówi po polsku? | Tak, trochę. | Do you speak Polish? / Yes, a little.
Nie wiem. | Gdzie jest apteka? | Nie wiem. | Where is the pharmacy? / I don't know.
Znam Kasię. | To jest Kasia. | Znam Kasię. | This is Kasia. / I know Kasia.
Nie mam czasu. | Czy pan ma czas? | Nie mam czasu. | Do you have time? / I don't have time.
Poproszę wody. | Co dla pani? | Poproszę wody. | What would you like? / Some water, please.
Kilo chleba. | Ile chleba? | Kilo chleba. | How much bread? / A kilo of bread.
Wczoraj byłem w Krakowie. | Gdzie pan był wczoraj? | Wczoraj byłem w Krakowie. | Where were you yesterday? / Yesterday I was in Kraków.
Jutro będę czytać. | Co pani będzie robić jutro? | Jutro będę czytać. | What will you do tomorrow? / Tomorrow I'll read.
Będę w Warszawie. | Gdzie pani będzie jutro? | Będę w Warszawie. | Where will you be tomorrow? / I'll be in Warsaw.
Jestem lekarzem. | Kim pan jest? | Jestem lekarzem. | What do you do? / I'm a doctor.
Idę do pracy. | Gdzie pan idzie? | Idę do pracy. | Where are you going? / I'm going to work.
sympatyczny | Jaki jest Tomek? | Tomek jest sympatyczny. | What's Tomek like? / Tomek is nice.
Dobra kawa. | Dobra kawa. | Dziękuję bardzo. | Good coffee. / Thank you very much.
Dobrze pani mówi po polsku. | Dobrze pani mówi po polsku. | Dziękuję. | You speak Polish well. / Thank you.
Pan jest miły. | Pan jest miły. | Dziękuję bardzo. | You are kind. / Thank you very much.
`;
exports.EXAMPLES = `
Jest ósma. | Jest ósma i jestem w biurze. | It's eight o'clock and I'm at the office.
W poniedziałek jestem w biurze. | W poniedziałek jestem w biurze, a we wtorek mam czas. | On Monday I'm at the office, and on Tuesday I have time.
Jestem na dworcu. | Jestem na dworcu i jadę do Krakowa. | I'm at the station and I'm going to Kraków.
W aptece. | Kasia jest w aptece, a ja jestem w banku. | Kasia is at the pharmacy, and I'm at the bank.
Proszę iść prosto. | Proszę iść prosto, a potem pierwsza w prawo. | Please go straight, and then the first street on the right.
Za rogiem. | Apteka jest za rogiem, obok dworca. | The pharmacy is around the corner, next to the station.
Często jeżdżę do Warszawy. | Często jeżdżę do Warszawy, a dziś jadę do Gdańska. | I often go to Warsaw, and today I'm going to Gdańsk.
Idę do domu. | Jest ósma i idę do domu. | It's eight o'clock and I'm going home.
Nie umiem. | Umiem czytać, ale nie umiem pisać po polsku. | I know how to read, but I don't know how to write in Polish.
Znam Warszawę. | Znam Warszawę, ale nie znam Gdańska. | I know Warsaw, but I don't know Gdańsk.
Butelka wody. | To jest butelka wody, a to jest butelka piwa. | This is a bottle of water, and this is a bottle of beer.
Nie ma mleka. | Nie ma mleka i nie ma chleba. | There is no milk and there is no bread.
Czytałem książkę. | Wczoraj czytałem książkę w domu. | Yesterday I was reading a book at home.
Anna była w Poznaniu. | Anna była w Poznaniu, a Marek był w Gdańsku. | Anna was in Poznań, and Marek was in Gdańsk.
aktualny | To jest aktualny plan na środę. | This is the current plan for Wednesday.
Widzę mojego brata. | Widzę mojego brata, a nie moją siostrę. | I see my brother, not my sister.
Pyszne pierogi. | Pyszne pierogi, dziękuję bardzo. | Delicious pierogi, thank you very much.
Ładny dzień. | Dziś jest ładny dzień. | Today is a beautiful day.
`;
exports.PATTERNS = `
W ___ czytam. | On ___ I read. | W środę czytam. | On Wednesday I read.
Jestem w ___. | I'm in ___. | Jestem w Krakowie. | I'm in Kraków.
Gdzie jest ___? | Where is ___? | Gdzie jest dworzec? | Where is the station?
Idę do ___. | I'm going to ___. | Idę do sklepu. | I'm going to the shop.
Czy pan ___? | Do you ___? (to a man) | Czy pan mówi po polsku? | Do you speak Polish?
Nie ma ___. | There is no ___. | Nie ma mleka. | There is no milk.
Jutro będę ___. | Tomorrow I'll ___. | Jutro będę czytać. | Tomorrow I'll read.
Widzę mojego ___. | I see my ___. | Widzę mojego brata. | I see my brother.
Dziękuję ___. | Thank you ___. | Dziękuję bardzo. | Thank you very much.
`;

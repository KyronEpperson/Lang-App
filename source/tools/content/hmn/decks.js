/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   hmn-en: pron = IPA between slashes, the vi-en key (tools/content/vi/PRON-RULES.md; profile hmn.md §6); IPA of strings shared with vi-en copied from pron_lookup.json.
   Meanings and notes in White Hmong (RPA), every word from tools/hmong/GLOSSARY.tsv or a sourced NEW-WORDS row. Deck names: DECKNAMES.md (FINAL). Decks 22-25 are hmn-en additions. */
module.exports = {
"Nyob zoo thiab sib ntsib dua": `
Hello. | /həˈloʊ/ | Nyob zoo. | Siv tau txhua lub sij hawm, rau txhua tus neeg.
Hi! | /haɪ/ | Nyob zoo! (rau phooj ywg) | Siv tau rau phooj ywg thiab tom hauj lwm. Nyob Amelika, neeg ua hauj lwm kuj hais Hi.
Hey! | /heɪ/ | Hej! | Hais rau phooj ywg xwb. Tsis txhob hais rau neeg koj tsis paub.
Good morning. | /gʊd ˈmɔːrnɪŋ/ | Nyob zoo (hais thaum sawv ntxov) | Hais ua ntej tav su. Luv: Morning!
Good afternoon. | /gʊd‿ˌæftɚˈnuːn/ | Nyob zoo (hais thaum hnub qaij) | 12 teev txog 6 teev. Neeg hais ntau tom khw thiab tom hauj lwm.
Good evening. | /gʊd‿ˈiːvnɪŋ/ | Nyob zoo (hais thaum tsaus ntuj) | Hais thaum koj tuaj txog. Thaum koj mus, hais Good night.
How are you? | /haʊ ɑːr ju/ | Koj nyob li cas? | Yog lus nyob zoo xwb, tsis yog nug tiag. Teb: Good, thanks. You?
I'm good, thanks. And you? | /aɪm gʊd θæŋks/ /ænd ju/ | Kuv nyob zoo, ua tsaug. Koj puas nyob zoo? | I'm fine, thank you yog lus hauv phau ntawv. Neeg Amelika hais I'm good ntau.
What's up? | /wʌts‿ʌp/ | Muaj dab tsi tshiab? | Tsis yog nug txog saum ntuj (up). Hais rau phooj ywg. Teb: Not much.
Not much. | /nɑːt mʌtʃ/ | Tsis muaj dab tsi. | Teb rau What's up? Nug rov qab: Not much, you?
How's it going? | /haʊz‿ɪt ˈgoʊɪŋ/ | Koj puas nyob zoo? | Zoo li How are you?, rau phooj ywg. Teb: Pretty good!
Nice to meet you. | /naɪs tə miːt ju/ | Zoo siab tau ntsib koj. | Hais thaum nej nyuam qhuav sib ntsib xwb. Teb: Nice to meet you, too.
Long time no see! | /lɑːŋ taɪm noʊ siː/ | Ntev lawm tsis pom koj! | Hais rau neeg koj paub zoo. Lwm yam: It's been a while.
See you later. | /siː ju ˈleɪtɚ/ | Sib ntsib dua. | Hais thaum koj yuav mus, txawm nej tsis tau teem sij hawm.
Take care. | /teɪk ker/ | Ua tib zoo os. | Lus zoo thaum koj yuav mus. Neeg kuj sau tom qab email.
Have a good one! | /hæv‿ə gʊd wʌn/ | Ib hnub zoo os! | Neeg ua hauj lwm tom khw hais thaum koj them nqi tas. Teb: You too!
Bye! | /baɪ/ | Mus zoo! | Neeg laus hais Bye-bye zoo li me nyuam hais.
Good night. | /gʊd naɪt/ | Pw zoo os. | Hais thaum mus pw, los yog thaum koj mus tsev tsaus ntuj. Thaum tuaj txog, hais Good evening.
`,
"Kuv tus kheej": `
My name is Mai. | /maɪ neɪm‿ɪz maɪ/ | Kuv lub npe hu ua Mai. | Luv: I'm Mai.
Please call me Jay. | /pliːz kɑːl mi dʒeɪ/ | Thov hu kuv ua Jay. | Siv thaum koj muaj lub npe lus Askiv, los yog thaum koj xav kom neeg hu koj lub npe luv.
What should I call you? | /wʌt ʃʊd‿aɪ kɑːl ju/ | Kuv yuav hu koj li cas? | Nug thaum lub npe nyuaj hais. Lus Askiv tsis siv lo lus tsev neeg: hu lub npe xwb.
Where are you from? | /wer ɑːr ju frʌm/ | Koj tuaj qhov twg tuaj? | Neeg nug ntau thaum nej nyuam qhuav sib ntsib.
I'm from Minnesota. | /aɪm frəm ˌmɪnəˈsoʊtə/ | Kuv tuaj Minnesota tuaj. | Hais koj lub xeev los yog koj lub nroog. Tsis tas yuav hais koj yug qhov twg.
I live in St. Paul. | /aɪ lɪv‿ɪn seɪnt pɑːl/ | Kuv nyob St. Paul. | Hauv lus Hmoob, v kawg yog cim. Hauv lus Askiv, hais v kawg ntawm live.
I'm a student. | /aɪm‿ə ˈstuːdənt/ | Kuv yog ib tug tub kawm ntawv (los yog ntxhais kawm ntawv). | Muaj article a ua ntej hauj lwm: I'm student ✗ → I'm a student ✓
What do you do? | /wʌt duː ju duː/ | Koj ua hauj lwm dab tsi? | Neeg Amelika nug txog hauj lwm li no.
I work at a bank. | /aɪ wɝːk‿ət‿ə bæŋk/ | Kuv ua hauj lwm hauv lub tsev bank. | at + qhov chaw ua hauj lwm: I work at a clinic.
I work in marketing. | /aɪ wɝːk‿ɪn ˈmɑːrkətɪŋ/ | Kuv ua hauj lwm txog kev muag khoom. | in + yam hauj lwm; at + qhov chaw: I work at a bank.
I'm 25 years old. | /aɪm ˈtwenti faɪv jɪrz‿oʊld/ | Kuv hnub nyoog muaj nees nkaum tsib xyoo. | Tsis txhob nug neeg hnub nyoog thaum nej nyuam qhuav sib ntsib.
I'm really into hiking. | /aɪm ˈriːli ˈɪntuː ˈhaɪkɪŋ/ | Kuv nyiam taug kev hauv roob heev. | I'm into… = kuv nyiam heev. Neeg hais ntau tshaj My hobby is…
I like watching movies. | /aɪ laɪk ˈwɑːtʃɪŋ ˈmuːviz/ | Kuv nyiam saib movies. | like + -ing los yog like + to: I like watching. I like watch ✗
I've been learning English for a year. | /aɪv bɪn ˈlɝːnɪŋ‿ˈɪŋglɪʃ fɚ ə jɪr/ | Kuv kawm lus Askiv tau ib xyoo lawm. | have been + -ing: koj tseem kawm tam sim no.
I'm here on vacation. | /aɪm hɪr ɑːn veɪˈkeɪʃən/ | Kuv tuaj so xwb, tsis yog tuaj ua hauj lwm. | Teb rau Are you here for work?
I'm married. | /aɪm ˈmærid/ | Kuv muaj poj niam (los yog muaj txiv). | Yog tsis tau: I'm single. Tsis txhob nug neeg txog qhov no thaum nej nyuam qhuav sib ntsib.
I have a younger brother. | /aɪ hæv‿ə ˈjʌŋgɚ ˈbrʌðɚ/ | Kuv muaj ib tug kwv (txiv neej hais); kuv muaj ib tug nus (poj niam hais). | Lus Askiv muaj brother xwb, rau txiv neej thiab poj niam. Siv older los yog younger.
`,
"Lus Askiv txhua hnub 1": `
Excuse me. | /ɪkˈskjuːz mi/ | Thov zam kev. / Thov txim (thaum hu neeg). | Siv thaum hu neeg los yog thaum koj xav dhau. Yog koj tsoo neeg, hais Sorry!
Thank you. | /θæŋk ju/ | Ua tsaug. | th: rau nplaig nruab nrab hniav thiab tshuab. RPA th (tham) tsis yog lus Askiv th.
Thanks a lot. | /θæŋks‿ə lɑːt/ | Ua tsaug ntau os. | Rau phooj ywg; zoo li Thank you.
You're welcome. | /jʊr ˈwelkəm/ | Tsis ua li cas. | Rau phooj ywg: Sure. No problem. Anytime.
No problem. | /noʊ ˈprɑːbləm/ | Tsis ua li cas os. | Teb rau Thank you. Neeg hais ntau heev.
I'm sorry. | /aɪm ˈsɑːri/ | Kuv thov txim. | Siv thaum koj ua txhaum. Yog koj tsoo neeg ib ntsis xwb, hais Sorry!
Yes, please. | /jes pliːz/ | Yog, kuv xav tau os. | Teb thaum neeg nug Would you like some water? (Koj puas xav haus dej?)
No, thank you. | /noʊ θæŋk ju/ | Kuv tsis xav, ua tsaug. | No xwb tsis zoo. Rau phooj ywg: I'm good, thanks.
Sorry? | /ˈsɑːri/ | Koj hais li cas? | Hais thaum koj tsis hnov, zoo li lo lus nug. Nyob Amelika, neeg hais Sorry? ntau tshaj Pardon?
Could you say that again? | /kʊd ju seɪ ðæt‿əˈgen/ | Hais dua puas tau? | Siv thaum koj tsis hnov. Tsis txhob txaj muag: neeg Amelika kuj nug.
Could you speak more slowly? | /kʊd ju spiːk mɔːr ˈsloʊli/ | Hais maj mam puas tau? | Could you…? zoo li … puas tau? hauv lus Hmoob. Ntxiv please: Could you speak more slowly, please?
I don't understand. | /aɪ doʊnt‿ˌʌndɚˈstænd/ | Kuv tsis nkag siab. | Hais tau, tab sis luv heev. Lwm yam: Sorry, I didn't quite catch that.
Do you speak Hmong? | /duː ju spiːk mɑːŋ/ | Koj puas hais lus Hmoob? | Do you speak…? zoo li Koj puas hais…? Nws zoo tshaj Can you speak…?
I speak a little English. | /aɪ spiːk‿ə ˈlɪtəl‿ˈɪŋglɪʃ/ | Kuv hais lus Askiv tau mentsis. | little: tt hais zoo li d hauv lus Askiv Amelika.
How do you say this in English? | /haʊ duː ju seɪ ðɪs‿ɪn‿ˈɪŋglɪʃ/ | No lus Askiv hu li cas? | Nug thaum koj tsis paub lo lus. Koj yuav kawm tau lo lus tshiab.
What does this mean? | /wʌt dʌz ðɪs miːn/ | Qhov no txhais li cas? | Nug txog ib lo lus ntawm daim ntawv los yog ntawm txoj kev.
Can you help me? | /kən ju help mi/ | Pab kuv puas tau? | Could you help me? zoo tshaj, rau neeg koj tsis paub.
`,
"Lus Askiv txhua hnub 2": `
Where's the restroom? | /werz ðə ˈrestruːm/ | Chav dej nyob qhov twg? | Nyob Amelika, hais restroom los yog bathroom.
How much is this? | /haʊ mʌtʃ‿ɪz ðɪs/ | Qhov no pes tsawg? | Yog muaj ntau yam: How much are these?
Is there an ATM around here? | /ɪz ðer ən‿eɪ tiː ˈem‿əˈraʊnd hɪr/ | Puas muaj tshuab ATM nyob ze qhov no? | ATM yog lub tshuab muab nyiaj.
Can I get the Wi-Fi password? | /kən‿aɪ get ðə ˈwaɪfaɪ ˈpæswɝːd/ | Kuv thov Wi-Fi password puas tau? | Lwm yam: Is there Wi-Fi here?
I'm lost. | /aɪm lɑːst/ | Kuv tsis paub kev lawm. | Nug ntxiv: Where am I on this map?
Can I pay by card? | /kən‿aɪ peɪ baɪ kɑːrd/ | Kuv them nqi nrog card puas tau? | Nyob Amelika, khw coob siv card tau.
One moment, please. | /wʌn ˈmoʊmənt pliːz/ | Thov ib ntsis os. | Siv tom khw thiab hauv xov tooj.
Just a second. | /dʒʌst‿ə ˈsekənd/ | Ib ntsis xwb. | Rau phooj ywg. Luv: Just a sec.
No worries. | /noʊ ˈwɝːiz/ | Tsis ua li cas. | Neeg Amelika hais ntau, zoo li No problem.
That's okay. | /ðæts‿oʊˈkeɪ/ | Tsis ua li cas os. | Hais thaum neeg thov txim rau koj. Lwm yam: Don't worry about it.
Of course. | /əv kɔːrs/ | Yeej tau. | Hais thaum neeg thov koj pab.
I'm not sure. | /aɪm nɑːt ʃʊr/ | Kuv tsis paub meej. | Hais thaum koj tsis paub tseeb. Nws zoo tshaj I don't know.
I have a question. | /aɪ hæv‿ə ˈkwestʃən/ | Kuv muaj ib lo lus nug. | Hauv chav kawm: Can I ask a question?
Can you write it down? | /kən ju raɪt‿ɪt daʊn/ | Sau rau kuv puas tau? | Siv thaum koj tsis hnov lub npe los yog tus nqi.
Can I take a picture? | /kən‿aɪ teɪk‿ə ˈpɪktʃɚ/ | Kuv yees duab puas tau? | Nug ua ntej thaum koj nyob hauv khw.
Could you take a picture of us? | /kʊd ju teɪk‿ə ˈpɪktʃɚ əv‿ʌs/ | Pab yees duab rau peb puas tau? | Tom qab: Thank you so much!
After you. | /ˈæftɚ ju/ | Koj mus ua ntej. | Hais ntawm qhov rooj. Nyob Amelika, neeg tuav qhov rooj rau lwm tus.
Watch out! | /wɑːtʃ‿aʊt/ | Saib os! | Hais thaum muaj dab tsi phem tuaj. Lwm yam: Look out!
`,
"Nug kev thiab caij tsheb": `
How do I get to the bus station? | /haʊ duː aɪ get tə ðə bʌs ˈsteɪʃən/ | Kuv yuav mus caij tsheb ntiav qhov twg? | Hloov qhov chaw: How do I get to the clinic?
Is it far from here? | /ɪz‿ɪt fɑːr frəm hɪr/ | Puas nyob deb? | far: r kawg yog lus Askiv r, tsis yog RPA r.
Is it within walking distance? | /ɪz‿ɪt wɪˈðɪn ˈwɑːkɪŋ ˈdɪstəns/ | Puas taug kev mus tau? | Lwm yam: Can I walk there?
Go straight. | /goʊ streɪt/ | Mus ncaj nraim. | Nyob Amelika, neeg suav kev ua block: Go straight for two blocks.
Turn left at the corner. | /tɝːn left‿ət ðə ˈkɔːrnɚ/ | Lem sab laug ntawm lub kaum. | Ntawm lub teeb: at the light.
It's on your right. | /ɪts‿ɑːn jʊr raɪt/ | Nws nyob koj sab xis. | right: lus Askiv r, tsis yog RPA r (RPA r zoo li t).
It's across the street. | /ɪts‿əˈkrɑːs ðə striːt/ | Nws nyob tim txoj kev. | across from = sab tid.
It's next to the bank. | /ɪts nekst tə ðə bæŋk/ | Nws nyob ntawm ib sab lub tsev bank. | next to: hais t ib zaug xwb.
Which line goes downtown? | /wɪtʃ laɪn goʊz ˌdaʊnˈtaʊn/ | Kab twg mus nruab nrab lub nroog? | downtown: tsis muaj to ua ntej. go to downtown ✗
Where do I transfer? | /wer duː aɪ trænsˈfɝː/ | Kuv hloov tsheb qhov twg? | Lwm yam: Where do I change?
Does this bus go to the airport? | /dʌz ðɪs bʌs goʊ tə ði ˈerpɔːrt/ | Lub tsheb ntiav no puas mus tom airport? | Ua ntej a, e, i, o, u, the hais /ði/: the airport.
Which stop should I get off at? | /wɪtʃ stɑːp ʃʊd‿aɪ get‿ɑːf‿æt/ | Kuv yuav tsum nres qhov twg? | get off yog phrasal verb rau tsheb ntiav thiab tsheb nqaj.
One ticket to Boston, please. | /wʌn ˈtɪkɪt tə ˈbɑːstən pliːz/ | Thov muab ib daim ntawv mus Boston. | to ua ntej qhov chaw koj mus.
Round trip or one way? | /raʊnd trɪp‿ɔːr wʌn weɪ/ | Mus thiab rov qab, los yog mus xwb? | round trip = mus thiab rov qab los.
Can you take me to this address? | /kən ju teɪk mi tə ðɪs‿ˈædres/ | Thov coj kuv mus qhov chaw no. | Qhia lub xov tooj rau tus tsav tsheb, koj yuav tsis txhaum.
Could you pull over here? | /kʊd ju pʊl‿ˈoʊvɚ hɪr/ | Nres ntawm no puas tau? | Hais hauv tsheb thaum koj xav nqis. Lwm yam: Right here is fine.
How long does it take? | /haʊ lɑːŋ dʌz‿ɪt teɪk/ | Siv sij hawm ntev npaum li cas? | Teb: About 20 minutes.
Is this seat taken? | /ɪz ðɪs siːt ˈteɪkən/ | Lub rooj zaum no puas muaj neeg zaum? | Yog tsis muaj: No, go ahead. seat: ea ntev.
`,
"Mus noj mov": `
A table for two, please. | /ə ˈteɪbəl fɚ tuː pliːz/ | Thov muab lub rooj rau ob tug neeg. | Nyob Amelika, tos neeg ua hauj lwm coj koj mus zaum.
Do you have a reservation? | /duː ju hæv‿ə rezɚˈveɪʃən/ | Koj puas tau teem sij hawm? | Neeg ua hauj lwm nug. Teb: Yes, under Vang.
Can I see the menu? | /kən‿aɪ siː ðə ˈmenjuː/ | Kuv saib daim ntawv mov puas tau? | menu: stress ntawm thawj qhov.
What do you recommend? | /wʌt duː ju rekəˈmend/ | Koj xav kom kuv noj dab tsi? | Lwm yam: What's popular here?
I'll have the chicken. | /aɪl hæv ðə ˈtʃɪkən/ | Kuv xav noj nqaij qaib. | Thaum xaj mov: I'll have + yam mov.
Can I get a Coke? | /kən‿aɪ get‿ə koʊk/ | Kuv thov ib khob Coke puas tau? | get a hais ua ke. Neeg Amelika hu cola ua Coke.
Not too spicy, please. | /nɑːt tuː ˈspaɪsi pliːz/ | Thov tsis txhob ntsim heev. | Teb thaum neeg nug How spicy would you like it?
No onions, please. | /noʊ ˈʌnjənz pliːz/ | Thov tsis txhob muab dos. | Lwm yam: Can I get it without onions?
I'm allergic to peanuts. | /aɪm‿əˈlɝːdʒɪk tə ˈpiːnʌts/ | Kuv noj huabxeeb tsis tau, kuv yuav mob. | allergic: stress ntawm qhov nruab nrab. Hais ua ntej koj xaj.
Is it spicy? | /ɪz‿ɪt ˈspaɪsi/ | Puas ntsim? | Nyob Amelika, spicy feem ntau tsis ntsim npaum li mov Hmoob.
Could we get some water? | /kʊd wi get sʌm ˈwɑːtɚ/ | Thov muab dej rau peb puas tau? | Nyob Amelika, dej hauv tsev noj mov feem ntau pub dawb.
Everything was great. | /ˈevriθɪŋ wəz greɪt/ | Txhua yam qab heev. | Teb thaum neeg nug How is everything?
Can we get the check, please? | /kən wi get ðə tʃek pliːz/ | Thov muab daim ntawv them nqi rau peb. | Nyob Amelika, koj them nqi ntawm koj lub rooj.
Can we split the bill? | /kən wi splɪt ðə bɪl/ | Peb sib cais them nqi puas tau? | Lwm yam: separate checks.
It's on me. | /ɪts‿ɑːn miː/ | Kuv them. | Lwm yam: My treat!
Can I get this to go? | /kən‿aɪ get ðɪs tə goʊ/ | Kuv nqa qhov no mus tsev puas tau? | Mov seem: Can I get a box?
Is the tip included? | /ɪz ðə tɪp‿ɪnˈkluːdɪd/ | Puas muaj tip lawm? | Nyob Amelika, neeg muab tip rau neeg ua hauj lwm, 15–20%.
`,
"Kav fes thiab khw": `
Can I get an iced Americano? | /kən‿aɪ get‿ən‿aɪst‿əmerɪˈkɑːnoʊ/ | Kuv thov ib khob kav fes txias puas tau? | Can I get…? yog lus neeg hais ntau tshaj thaum xaj dej haus.
What size would you like? | /wʌt saɪz wʊd ju laɪk/ | Koj xav tau loj npaum li cas? | Neeg ua hauj lwm nug. would you hais ua ke.
Small, please. | /smɑːl pliːz/ | Thov muab me. | Lwm yam: medium (nruab nrab), large (loj).
For here or to go? | /fɚ hɪr ɔːr tə goʊ/ | Noj ntawm no los yog nqa mus? | Teb: For here. / To go, please.
Can I get oat milk instead? | /kən‿aɪ get‿oʊt mɪlk‿ɪnˈsted/ | Kuv thov hloov ua oat milk puas tau? | instead = hloov. Tej zaum yuav tsum them nqi ntxiv.
Less ice, please. | /les‿aɪs pliːz/ | Thov muab dej khov tsawg. | Tsis xav tau dej khov: No ice, please.
Decaf, please. | /ˈdiːkæf pliːz/ | Thov muab kav fes tsis muaj caffeine. | decaf yog lo lus luv ntawm decaffeinated.
Can I get a name for the order? | /kən‿aɪ get‿ə neɪm fɚ ði ˈɔːrdɚ/ | Koj lub npe hu li cas, rau koj qhov xaj? | Neeg ua hauj lwm sau koj lub npe rau ntawm lub khob.
Do you need a bag? | /duː ju niːd‿ə bæg/ | Koj puas xav tau lub hnab? | Yog tsis xav tau: No, I'm good.
Can I get a receipt? | /kən‿aɪ get‿ə rɪˈsiːt/ | Kuv thov daim ntawv them nqi puas tau? | receipt: p tsis hais.
Where can I find batteries? | /wer kən‿aɪ faɪnd ˈbætɚiz/ | Roj teeb nyob qhov twg? | Where can I find…? siv tau rau txhua yam khoom.
Do you sell phone chargers? | /duː ju sel foʊn ˈtʃɑːrdʒɚz/ | Koj puas muag xov hlau them xov tooj? | Lwm yam: Do you have…?
Can you heat this up? | /kən ju hiːt ðɪs‿ʌp/ | Thov ua kom qhov no sov puas tau? | heat this up hais ua ke.
That's it. | /ðæts‿ɪt/ | Tas li ntawd xwb. | Teb thaum neeg nug Anything else?
Here you go. | /hɪr ju goʊ/ | No ne. | Hais thaum koj muab nyiaj los yog khoom rau neeg.
Keep the change. | /kiːp ðə tʃeɪndʒ/ | Cov nyiaj seem koj muab cia. | Siv rau neeg tsav tsheb los yog neeg xa mov.
`,
"Mus kav khw": `
I'm just looking, thanks. | /aɪm dʒʌst ˈlʊkɪŋ θæŋks/ | Kuv saib xwb, ua tsaug. | Teb thaum neeg nug Can I help you find anything?
Do you have this in a medium? | /duː ju hæv ðɪs‿ɪn‿ə ˈmiːdiəm/ | Qhov no puas muaj loj nruab nrab? | small / medium / large = me / nruab nrab / loj.
Do you have it in black? | /duː ju hæv‿ɪt‿ɪn blæk/ | Puas muaj xim dub? | Ua ntej xim: in. in black, in red.
Can I try this on? | /kən‿aɪ traɪ ðɪs‿ɑːn/ | Kuv sim hnav qhov no puas tau? | try on = sim hnav (khaub ncaws, khau).
Where's the fitting room? | /werz ðə ˈfɪtɪŋ ruːm/ | Chav sim khaub ncaws nyob qhov twg? | fitting room yog chav hloov khaub ncaws hauv khw.
It's too big. | /ɪts tuː bɪg/ | Loj dhau lawm. | Me dhau: It's too small.
It's a bit tight. | /ɪts‿ə bɪt taɪt/ | Ceev me ntsis. | Yog dav dhau: It's a bit loose.
Is this on sale? | /ɪz ðɪs‿ɑːn seɪl/ | Qhov no puas muaj luv nqi? | on sale = luv nqi. for sale = muag. Ua tib zoo!
Can you give me a discount? | /kən ju gɪv mi ə ˈdɪskaʊnt/ | Txo nqi rau kuv puas tau? | Nyob Amelika, khw loj tsis sib cav nqi.
I'll take it. | /aɪl teɪk‿ɪt/ | Kuv yuav qhov no. | Yog ob yam los ntau: I'll take them.
Cash or card? | /kæʃ‿ɔːr kɑːrd/ | Nyiaj los yog card? | Neeg nug ntawm qhov them nqi.
Do you take Apple Pay? | /duː ju teɪk‿ˈæpəl peɪ/ | Koj puas txais Apple Pay? | take = txais (yam them nqi).
Can I get a refund? | /kən‿aɪ get‿ə ˈriːfʌnd/ | Kuv thov nyiaj rov qab puas tau? | Khaws daim ntawv them nqi cia.
I'd like to exchange this. | /aɪd laɪk tu ɪksˈtʃeɪndʒ ðɪs/ | Kuv xav hloov qhov no. | Hais vim li cas: It's the wrong size.
Can you gift wrap it? | /kən ju gɪft ræp‿ɪt/ | Thov qhwv ua khoom plig puas tau? | wrap: w tsis hais, pib nrog r.
Does that include tax? | /dʌz ðæt‿ɪnˈkluːd tæks/ | Puas muaj se lawm? | Nyob Amelika, tus nqi ntawm daim ntawv feem ntau tsis muaj se.
`,
"Pes tsawg, sij hawm thiab hnub": `
What time is it? | /wʌt taɪm‿ɪz‿ɪt/ | Tam sim no pes tsawg teev? | Rau neeg koj tsis paub: Excuse me, do you have the time?
It's three thirty. | /ɪts θriː ˈθɝːti/ | Peb teev ib nrab. | Lwm yam: half past three.
It's a quarter to five. | /ɪts‿ə ˈkwɔːrtɚ tə faɪv/ | Tseem kaum tsib feeb txog tsib teev. | quarter = kaum tsib feeb. Lwm yam: four forty-five.
At noon | /ət nuːn/ | Thaum tav su | Ib tag hmo = midnight.
What's the date today? | /wʌts ðə deɪt təˈdeɪ/ | Hnub no yog hnub tim pes tsawg? | Nug txog hnub hauv lim tiam: What day is it today?
It's May 3rd. | /ɪts meɪ θɝːd/ | Hnub no yog tsib hlis ntuj tim peb. | Hnub tim hais ua first, second, third, fourth…
My birthday is in October. | /maɪ ˈbɝːθdeɪ ɪz‿ɪn‿ɑːkˈtoʊbɚ/ | Kuv hnub yug yog kaum hli ntuj. | in + hli: in October. on + hnub: on October 5th.
On Monday | /ɑːn ˈmʌndeɪ/ | Hnub Monday | on + hnub. Txhua lim tiam: on Mondays.
Next weekend | /nekst ˈwiːkend/ | Hnub so tom ntej | next, last, this: tsis muaj preposition ua ntej.
The day after tomorrow | /ðə deɪ ˈæftɚ təˈmɑːroʊ/ | Hnub tom qab tag kis | Hnub ua ntej nag hmo: the day before yesterday.
Thirteen or thirty? | /ˌθɝːˈtiːn‿ɔːr ˈθɝːti/ | Kaum peb los yog peb caug? | thirteen: stress ntawm -teen. thirty: stress ntawm thawj qhov. Nug dua thaum hnov tus nqi.
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlɚz/ | Kaum tsib daus las | $15.50 hais ua fifteen fifty.
Two hundred and fifty | /tuː ˈhʌndrəd‿ən ˈfɪfti/ | Ob puas tsib caug | Nyob Amelika, neeg feem ntau tsis hais and: two hundred fifty.
Ten thousand | /ten ˈθaʊzənd/ | Kaum txhiab | Tsis muaj lo lus rau kaum txhiab: hais ten thousand. Lwm yam hauv lus Hmoob: ib vam.
One million | /wʌn ˈmɪljən/ | Ib plhom | Kuj hais ib lab. Kaum plhom = ten million.
Twice a week | /twaɪs‿ə wiːk/ | Ob zaug ib lim tiam | once (ib zaug), twice (ob zaug), three times (peb zaug).
In ten minutes | /ɪn ten ˈmɪnɪts/ | Kaum feeb tom ntej | in + sij hawm = tom qab ntawd. Tsis yog hauv kaum feeb.
`,
"Sib tham": `
How was your weekend? | /haʊ wəz jʊr ˈwiːkend/ | Koj hnub so zoo li cas? | Neeg nug hnub Monday. Teb luv luv thiab nug rov qab.
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | Kuv tau so zoo. | pretty = heev me ntsis. Tsis yog zoo nkauj.
Any plans for the weekend? | /ˈeni plænz fɚ ðə ˈwiːkend/ | Hnub so koj yuav ua dab tsi? | Neeg nug hnub Friday. Yog tsis muaj: Not really, just relaxing.
Nice weather today, huh? | /naɪs ˈweðɚ təˈdeɪ hʌ/ | Hnub no huab cua zoo, yam? | huab cua yog lus zoo rau tham nrog txhua tus neeg.
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | Hnub no no heev. | Kub heev: It's boiling! los yog It's so hot!
How long have you lived here? | /haʊ lɑːŋ hæv ju lɪvd hɪr/ | Koj nyob ntawm no ntev npaum li cas lawm? | Teb: About three years.
Have you been to Laos? | /hæv ju bɪn tə laʊs/ | Koj puas tau mus Nplog teb? | Nug txog qhov koj tau ua: Have you been to…?
What do you do for fun? | /wʌt duː ju duː fɚ fʌn/ | Thaum koj so, koj nyiam ua dab tsi? | Neeg hais ntau tshaj What's your hobby?
Have you seen any good shows lately? | /hæv ju siːn‿ˈeni gʊd ʃoʊz ˈleɪtli/ | Tsis ntev no koj puas tau saib yam zoo hauv TV? | show = yam ua yeeb yam hauv TV.
That sounds fun. | /ðæt saʊndz fʌn/ | Zoo heev. | Teb thaum neeg qhia nws zaj dab neeg. Lwm yam: That sounds great!
Same here. | /seɪm hɪr/ | Kuv kuj zoo li ntawd. | Rau phooj ywg: Same!
Me neither. | /miː ˈniːðɚ/ | Kuv kuj tsis. | Teb rau lus tsis: I don't like it. → Me neither. (Me too ✗)
I know, right? | /aɪ noʊ raɪt/ | Yog lawm! | Hais thaum koj pom zoo heev. Rau phooj ywg.
Oh, really? | /oʊ ˈriːli/ | Tiag los? | Qhia tias koj xav mloog. Hais siab ntawm qhov kawg.
By the way | /baɪ ðə weɪ/ | Ib qho ntxiv | Siv thaum koj hloov lus tham. Sau luv: BTW.
How's work? | /haʊz wɝːk/ | Koj hauj lwm zoo li cas? | Nug neeg koj paub. Teb: Busy, but good!
It was nice talking to you. | /ɪt wəz naɪs ˈtɑːkɪŋ tə ju/ | Zoo siab tau tham nrog koj. | Hais thaum koj xaus kev tham.
`,
"Zoo siab thiab tu siab": `
I'm so happy for you! | /aɪm soʊ ˈhæpi fɚ ju/ | Kuv zoo siab nrog koj heev! | Hais thaum muaj yam zoo los rau neeg.
Congratulations! | /kəngrætʃəˈleɪʃənz/ | Zoo siab nrog koj! | Muaj -s kawg. Luv: Congrats!
That's awesome! | /ðæts‿ˈɑːsəm/ | Zoo kawg! | Neeg Amelika hais ntau heev.
No way! | /noʊ weɪ/ | Tsis yog tiag! | Thaum koj xav tsis txog. Kuj siv thaum koj tsis kam: No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | Tiag tiag los? | Nyob ntawm koj hais li cas: zoo siab los yog chim siab.
I'm so tired. | /aɪm soʊ ˈtaɪɚd/ | Kuv nkees heev. | Nkees kawg: I'm exhausted.
I'm stressed out. | /aɪm strest‿aʊt/ | Kuv txhawj heev. | Neeg hais li no, tsis hais I have stress.
I'm bored. | /aɪm bɔːrd/ | Kuv tsis muaj dab tsi ua, kuv dhuav. | Ua tib zoo: I'm boring = kuv yog neeg ua rau lwm tus dhuav.
I'm excited. | /aɪm‿ɪkˈsaɪtɪd/ | Kuv zoo siab tos tsis taus. | -ed = qhov koj xav: I'm excited.
I'm nervous. | /aɪm ˈnɝːvəs/ | Kuv ntshai me ntsis. | Ua ntej xeem los yog ua ntej hais lus. Rau lwm tus: Don't be nervous.
That's too bad. | /ðæts tuː bæd/ | Tu siab tiag. | Rau yam me me. Yam loj: I'm sorry to hear that.
I'm sorry to hear that. | /aɪm ˈsɑːri tə hɪr ðæt/ | Kuv tu siab nrog koj. | Tsis yog thov txim: koj qhia tias koj tu siab nrog nws.
What a relief! | /wʌt‿ə rɪˈliːf/ | Kaj siab lawm! | Hais nrog Phew!
Oh my gosh! | /oʊ maɪ gɑːʃ/ | Au! | Lo lus mos ntawm Oh my God. Sau luv: OMG.
I'm upset. | /aɪm‿ʌpˈset/ | Kuv tsis zoo siab. | Nruab nrab chim siab thiab tu siab.
That's so annoying. | /ðæts soʊ əˈnɔɪɪŋ/ | Ua rau kuv chim heev. | You're annoying hais rau neeg: phem heev.
I can't wait! | /aɪ kænt weɪt/ | Kuv tos tsis taus! | Hais thaum koj xav kom yam zoo los sai sai.
It's not a big deal. | /ɪts nɑːt‿ə bɪg diːl/ | Tsis yog teeb meem loj. | Hais thaum neeg thov txim rau koj.
`,
"Kev nyiam thiab lus zoo": `
You look great! | /ju lʊk greɪt/ | Koj zoo nkauj (los yog zoo saib) heev! | Hais rau neeg koj paub: You look…
I love your shoes. | /aɪ lʌv jʊr ʃuːz/ | Kuv nyiam koj nkawm khau heev. | love = nyiam heev. Nyob Amelika, neeg hais rau neeg tsis paub kuj tau.
That color looks good on you. | /ðæt ˈkʌlɚ lʊks gʊd‿ɑːn ju/ | Xim ntawd haum koj zoo. | look good on + neeg.
You have a great smile. | /ju hæv‿ə greɪt smaɪl/ | Koj luag zoo nkauj heev. | Hais rau neeg koj paub zoo.
You're so funny. | /jʊr soʊ ˈfʌni/ | Koj lom zem heev. | funny = ua rau luag. fun = zoo siab nrog.
Great job! | /greɪt dʒɑːb/ | Koj ua tau zoo heev! | Siv tau tom hauj lwm thiab tom tsev kawm ntawv. Lwm yam: Nice work!
I'm proud of you. | /aɪm praʊd‿əv ju/ | Kuv zoo siab rau koj heev. | Hais rau tsev neeg thiab phooj ywg.
You did it! | /ju dɪd‿ɪt/ | Koj ua tau lawm! | Hais rau neeg uas ua tau yam nws xav ua.
Your English is really good! | /jʊr ˈɪŋglɪʃ‿ɪz ˈriːli gʊd/ | Koj hais lus Askiv zoo heev! | Teb: Thank you! Kuj tau: Thanks, I'm still learning.
You have good taste. | /ju hæv gʊd teɪst/ | Koj paub xaiv yam zoo. | Rau khaub ncaws, nkauj los yog tsev.
I really enjoyed spending time with you. | /aɪ ˈriːli ɪnˈdʒɔɪd ˈspendɪŋ taɪm wɪð ju/ | Kuv zoo siab heev tau nrog koj. | Hais thaum nej yuav sib ncaim.
Do you want to grab coffee sometime? | /duː ju wɑːnt tə græb ˈkɑːfi ˈsʌmtaɪm/ | Lwm hnub wb mus haus kav fes puas tau? | want to hais zoo li wanna. grab = noj los yog haus sai sai.
I miss you. | /aɪ mɪs ju/ | Kuv nco koj. | Rau neeg nyob deb: tsev neeg los yog phooj ywg.
You mean a lot to me. | /ju miːn‿ə lɑːt tə mi/ | Koj tseem ceeb rau kuv heev. | Hais rau phooj ywg los yog tus koj hlub.
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvɚ/ | Koj pab kuv tau zoo kawg! | Neeg Amelika hais rau kev pab me me thiab.
You made my day! | /ju meɪd maɪ deɪ/ | Koj ua rau kuv zoo siab tag hnub! | Thaum koj tau lus zoo los yog khoom plig.
That's very kind of you. | /ðæts ˈveri kaɪnd‿əv ju/ | Koj siab zoo heev. | Hais thaum neeg pab koj los yog hais lus zoo rau koj.
`,
"Hauj lwm thiab email": `
I hope this email finds you well. | /aɪ hoʊp ðɪs‿ˈiːmeɪl faɪndz ju wel/ | Kuv vam tias koj nyob zoo. | Thawj kab ntawm email. Mos dua: I hope you're doing well.
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu æsk‿əˈbaʊt ðə ˈskedʒuːl/ | Kuv sau tuaj nug txog sij hawm teem tseg. | Hais qhov koj sau vim li cas hauv thawj kab: I'm writing to + verb.
I've attached the report. | /aɪv‿əˈtætʃt ðə rɪˈpɔːrt/ | Kuv muab daim ntawv qhia txuas rau lawm. | Please find attached… yog lus nruj dua.
Just a quick reminder about tomorrow's meeting. | /dʒʌst‿ə kwɪk rɪˈmaɪndɚ əˈbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | Ceeb toom koj txog lub rooj sib tham tag kis. | Ib txoj kev mos nug kom neeg nco qab.
Let me know if you have any questions. | /let mi noʊ ɪf ju hæv‿ˈeni ˈkwestʃənz/ | Yog koj muaj lus nug, qhia rau kuv. | Kab kawg ntawm email.
Could you send me the file by Friday? | /kʊd ju send mi ðə faɪl baɪ ˈfraɪdeɪ/ | Xa daim ntawv rau kuv ua ntej hnub Friday puas tau? | by = tsis pub dhau. until = mus txog.
Sorry for the late reply. | /ˈsɑːri fɚ ðə leɪt rɪˈplaɪ/ | Thov txim, kuv teb lig. | Lwm yam: Thanks for your patience.
Thanks for getting back to me. | /θæŋks fɚ ˈgetɪŋ bæk tə mi/ | Ua tsaug koj teb rov qab. | get back to = teb rov qab.
Best regards, | /best rɪˈgɑːrdz/ | Nrog kev hwm, | Siv tom qab ntawm email. Rau neeg koj paub: Best, Thanks,
Let's schedule a meeting. | /lets ˈskedʒuːl‿ə ˈmiːtɪŋ/ | Wb teem sij hawm sib tham. | schedule: Amelika hais sk-, Askiv teb hais sh-.
I'm running late. | /aɪm ˈrʌnɪŋ leɪt/ | Kuv yuav tuaj lig. | Qhia ua ntej: I'll be there in 10.
Can we push the meeting to 3? | /kən wi pʊʃ ðə ˈmiːtɪŋ tə θriː/ | Peb muab lub rooj sib tham ncua mus 3 teev puas tau? | Ua ntxov dua: move up. Can we move it up to 1?
I'll get back to you. | /aɪl get bæk tə ju/ | Kuv mam li teb koj. | Hais thaum koj tseem teb tsis tau tam sim no.
Can you walk me through it? | /kən ju wɑːk mi θruː ɪt/ | Qhia kuv ib kauj ruam zuj zus puas tau? | walk through = qhia ib yam zuj zus.
Let's touch base next week. | /lets tʌtʃ beɪs nekst wiːk/ | Lim tiam tom ntej wb tham luv luv. | Sib qhia hauj lwm mus li cas.
What's the deadline? | /wʌts ðə ˈdedlaɪn/ | Yuav tsum ua tas thaum twg? | Lwm yam: When is this due?
I'm working from home today. | /aɪm ˈwɝːkɪŋ frəm hoʊm təˈdeɪ/ | Hnub no kuv ua hauj lwm hauv tsev. | Sau luv: WFH.
I'm off tomorrow. | /aɪm‿ɑːf təˈmɑːroʊ/ | Tag kis kuv so. | Lwm yam: I'm taking a day off tomorrow.
Thanks for all your hard work. | /θæŋks fɚ ɑːl jʊr hɑːrd wɝːk/ | Ua tsaug rau koj txhua yam hauj lwm. | Hais rau neeg ua hauj lwm nrog koj. Thaum tawm hauj lwm, hais See you tomorrow!
`,
"Xov tooj thiab lus luv": `
Hello, this is Mai. | /həˈloʊ ðɪs‿ɪz maɪ/ | Nyob zoo, kuv yog Mai. | Hauv xov tooj, hais This is Mai, tsis hais I'm Mai.
Can I speak to Mr. Vang? | /kən‿aɪ spiːk tə ˈmɪstɚ væŋ/ | Kuv tham nrog Mr. Vang puas tau? | Lwm yam: May I speak to…?
Who's calling, please? | /huːz ˈkɑːlɪŋ pliːz/ | Leej twg hu tuaj? | Tus neeg txais xov tooj nug.
Hold on a second. | /hoʊld‿ɑːn‿ə ˈsekənd/ | Ib ntsis os. | Hais thaum koj xav kom neeg tos.
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ‿ʌp/ | Thov txim, kuv hnov tsis meej. | break up kuj txhais tias ob tug neeg sib nrauj.
Can I call you back? | /kən‿aɪ kɑːl ju bæk/ | Kuv hu rov qab rau koj puas tau? | Thaum koj tsis khoom: I'm in a meeting. Can I call you back?
I'll text you. | /aɪl tekst ju/ | Kuv yuav sau text rau koj. | Nyob Amelika, xa lus hauv xov tooj hu ua text.
I'm on my way. | /aɪm‿ɑːn maɪ weɪ/ | Kuv tab tom tuaj. | Sau luv: OMW.
LOL | /el‿oʊ ˈel/ | Luag (laughing out loud) | Tsis yog luag nrov tiag; zoo li luag me ntsis.
BRB | /biː ɑːr ˈbiː/ | Kuv mam li rov los (be right back) | Thaum koj mus ib ntsis.
BTW | /biː tiː ˈdʌbəljuː/ | Ib qho ntxiv (by the way) | Siv thaum hloov lus tham.
TBH | /tiː biː ˈeɪtʃ/ | Hais tseeb (to be honest) | Sau ua ntej los yog tom qab ntawm sentence.
IDK | /aɪ diː ˈkeɪ/ | Kuv tsis paub (I don't know) | Neeg sau ntau ua tsiaj me: idk.
OMG | /oʊ em ˈdʒiː/ | Au (oh my God) | Neeg kuj hais: O-M-G!
ASAP | /eɪ es‿eɪ ˈpiː/ / /ˈeɪsæp/ | Sai li sai tau (as soon as possible) | Rau tus nai, qhia hnub ntawd thiaj zoo.
TTYL | /tiː tiː waɪ ˈel/ | Mam li tham (talk to you later) | Thaum xaus kev tham.
NVM | /en viː ˈem/ | Tsis ua li cas lawm (never mind) | Thaum koj tsis nug lawm.
FYI | /ef waɪ ˈaɪ/ | Qhia rau koj paub (for your information) | Siv ntau tom hauj lwm thiab hauv email.
`,
"Mus ncig teb chaws": `
Here's my passport. | /hɪrz maɪ ˈpæspɔːrt/ | No yog kuv daim passport. | Muab thaum check-in los yog thaum nkag teb chaws.
I'm here for sightseeing. | /aɪm hɪr fɚ ˈsaɪtsiːɪŋ/ | Kuv tuaj ncig saib xwb. | Teb rau What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fɚ ə wiːk/ | Kuv yuav nyob ib lim tiam. | Teb rau How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ‿ət ðə ˈhɪltən/ | Kuv nyob tsev hotel Hilton. | Teb rau Where are you staying?
Window or aisle? | /ˈwɪndoʊ ɔːr aɪl/ | Ze qhov rais los yog ze kev? | aisle: s tsis hais.
I'd like an aisle seat, please. | /aɪd laɪk‿ən‿aɪl siːt pliːz/ | Thov muab lub rooj zaum ze kev rau kuv. | Ze qhov rais: a window seat.
Where is the baggage claim? | /wer ɪz ðə ˈbægɪdʒ kleɪm/ | Qhov chaw khaws hnab nyob qhov twg? | baggage claim = qhov chaw txais hnab.
My luggage is missing. | /maɪ ˈlʌgɪdʒ‿ɪz ˈmɪsɪŋ/ | Kuv lub hnab ploj lawm. | luggage yog uncountable: a piece of luggage.
I have a reservation under Vang. | /aɪ hæv‿ə rezɚˈveɪʃən‿ˈʌndɚ væŋ/ | Kuv teem chav nrog lub npe Vang. | under + lub npe.
What time is check-out? | /wʌt taɪm‿ɪz ˈtʃekaʊt/ | Check-out thaum pes tsawg teev? | Xav tawm lig: Can I get a late check-out?
Can I check in early? | /kən‿aɪ tʃek‿ɪn‿ˈɝːli/ | Kuv check in ntxov puas tau? | check in hais ua ke.
Is breakfast included? | /ɪz ˈbrekfəst‿ɪnˈkluːdɪd/ | Puas muaj noj tshais lawm? | breakfast hais zoo li brek-.
The air conditioner isn't working. | /ði er kənˈdɪʃənɚ ˈɪzənt ˈwɝːkɪŋ/ | Lub tshuab cua txias tsis ua hauj lwm. | Luv: AC.
Could I get some extra towels? | /kʊd‿aɪ get sʌm‿ˈekstrə ˈtaʊəlz/ | Thov muab phuam ntxiv puas tau? | could I hais ua ke.
Can you hold my bags until 3? | /kən ju hoʊld maɪ bægz‿ənˈtɪl θriː/ | Khaws kuv cov hnab txog 3 teev puas tau? | Tom qab check-out. hold = khaws cia.
My flight was delayed. | /maɪ flaɪt wəz dɪˈleɪd/ | Kuv lub dav hlau lig lawm. | Yog tsis ya: canceled.
Where's gate 12? | /werz geɪt twelv/ | Gate 12 nyob qhov twg? | Lus Askiv muab tus lej tso tom qab.
Do I need to take my laptop out? | /duː aɪ niːd tə teɪk maɪ ˈlæptɑːp‿aʊt/ | Kuv puas yuav tsum muab kuv lub laptop tawm? | Ntawm qhov kuaj xyuas hnab.
`,
"Tsev kho mob thiab kev pab": `
Help! | /help/ | Pab! | Hais nrov thaum muaj mob ceev heev.
Call 911! | /kɑːl naɪn wʌn wʌn/ | Hu 911! | Nyob Amelika, tus lej hu thaum mob ceev heev yog 911 (nine one one).
I need a doctor. | /aɪ niːd‿ə ˈdɑːktɚ/ | Kuv xav ntsib kws kho mob. | Yog ceev heev: I need an ambulance.
I don't feel well. | /aɪ doʊnt fiːl wel/ | Kuv tsis nyob zoo. | Lus mos thiab siv tau txhua qhov chaw.
I have a headache. | /aɪ hæv‿ə ˈhedeɪk/ | Kuv mob taub hau. | Qhov mob + ache: stomachache, toothache.
I have a fever. | /aɪ hæv‿ə ˈfiːvɚ/ | Kuv kub ib ce. | f: hniav saum kov di ncauj hauv qab thiab tshuab.
My stomach hurts. | /maɪ ˈstʌmək hɝːts/ | Kuv mob plab. | Qhov mob + hurts.
I have a sore throat. | /aɪ hæv‿ə sɔːr θroʊt/ | Kuv mob caj pas. | sore = mob. throat yog caj pas, tsis yog caj dab (neck).
I feel dizzy. | /aɪ fiːl ˈdɪzi/ | Kuv kiv taub hau. | Xav ntuav: I feel sick. / I feel nauseous.
I sprained my ankle. | /aɪ spreɪnd maɪ ˈæŋkəl/ | Kuv dab taws ntswj lawm. | Dab teg: wrist.
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr hɪr/ | Puas muaj khw muab tshuaj nyob ze qhov no? | Nyob Amelika, kuj hu ua drugstore.
Do I need a prescription? | /duː aɪ niːd‿ə prɪˈskrɪpʃən/ | Kuv puas yuav tsum muaj ntawv kws kho mob? | Tshuaj yuav tau tsis muaj ntawv: over-the-counter.
I lost my wallet. | /aɪ lɑːst maɪ ˈwɑːlɪt/ | Kuv lub hnab nyiaj ploj lawm. | Xov tooj: phone. Qhov chaw nrhiav khoom ploj: lost and found.
Someone stole my phone. | /ˈsʌmwʌn stoʊl maɪ foʊn/ | Muaj neeg nyiag kuv lub xov tooj. | stole yog past tense ntawm steal.
Where is the police station? | /wer ɪz ðə pəˈliːs ˈsteɪʃən/ | Tsev tub ceev xwm nyob qhov twg? | police: stress ntawm qhov kawg.
I need a Hmong interpreter. | /aɪ niːd‿ə mɑːŋ ɪnˈtɝːprətɚ/ | Kuv xav tau ib tug neeg txhais lus Hmoob. | Tsev kho mob yuav tsum muab neeg txhais lus pub dawb. Nug thaum koj teem sij hawm.
I have travel insurance. | /aɪ hæv ˈtrævəl‿ɪnˈʃʊrəns/ | Kuv muaj ntawv pov hwm thaum mus ncig. | Mus ncig teb chaws, yuav ntawv pov hwm ua ntej.
`,
"Phrasal verbs": `
pick up | /pɪk‿ʌp/ | Mus tos (hauv tsheb); khaws | I'll pick you up at 7. Pronoun (you, it) nyob nruab nrab.
give up | /gɪv‿ʌp/ | Tso tseg | Don't give up! Tso tseg dab tsi: give up + -ing.
figure out | /ˈfɪgjɚ aʊt/ | Nrhiav tau kev ua | I can't figure out this app.
find out | /faɪnd‿aʊt/ | Paub tom qab | Thaum koj paub ib yam tshiab. figure out yog thaum koj xav thiaj paub.
look for | /lʊk fɔːr/ | Nrhiav | I'm looking for my keys. Thaum nrhiav tau lawm: find.
look after | /lʊk‿ˈæftɚ/ | Saib xyuas | Can you look after my cat? Amelika kuj hais take care of.
look forward to | /lʊk ˈfɔːrwɚd tuː/ | Tos tsis taus | Tom qab to: noun los yog -ing. I'm looking forward to seeing you.
run out of | /rʌn‿aʊt‿ʌv/ | Tas lawm | We ran out of milk. (Mis nyuj tas lawm.)
turn on | /tɝːn‿ɑːn/ | Qhib (teeb, tshuab) | Turn on the light. Pronoun nyob nruab nrab: Turn it on.
turn off | /tɝːn‿ɑːf/ | Kaw (teeb, tshuab) | Turn it off. turn off it ✗
turn down | /tɝːn daʊn/ | Tsis kam; txo kom me | She turned down the offer. / Turn it down!
put off | /pʊt‿ɑːf/ | Ncua | Neeg hais ntau tshaj postpone: Stop putting it off!
show up | /ʃoʊ ʌp/ | Tuaj txog | He didn't show up to the party. (Nws tsis tuaj.)
hang out | /hæŋ‿aʊt/ | Mus nrog phooj ywg | Neeg laus hang out, tsis yog play. play rau me nyuam, game, kev ua si.
check out | /tʃek‿aʊt/ | Saib | Check out this video! Hauv tsev hotel: tawm.
work out | /wɝːk‿aʊt/ | Ua kom lub cev muaj zog; ua tau zoo | I work out every day. / It'll work out.
come up with | /kʌm‿ʌp wɪð/ | Xav tau (tswv yim) | She came up with a great idea.
get along with | /get‿əˈlɑːŋ wɪð/ | Nrog … sib raug zoo | I get along with my coworkers.
calm down | /kɑːm daʊn/ | Txias siab | calm: l tsis hais. Hais rau neeg chim siab tej zaum yuav ua rau nws chim ntxiv.
set up | /set‿ʌp/ | Teeb tsa | Can you help me set up my printer?
break up | /breɪk‿ʌp/ | Sib nrauj (ob tug hluas) | They broke up last month. Nrog leej twg: break up with.
fill out | /fɪl‿aʊt/ | Sau (daim ntawv) | Please fill out this form.
grow up | /groʊ ʌp/ | Loj hlob | I grew up in Fresno. (Kuv loj hlob hauv Fresno.)
wake up | /weɪk‿ʌp/ | Tsim | wake up = qhov thaum koj tsim. get up = sawv ntawm txaj.
`,
"Pronunciation: hais ua tib zoo": `
rice | /raɪs/ | Mov | r: tsis yog RPA r (zoo li t). Ncav di ncauj, nplaig tsis kov dab tsi.
lice | /laɪs/ | Tuv | l: nplaig kov tom qab hniav saum. I like rice hais ua lice, txaj muag heev!
right | /raɪt/ | Sab xis; raug | Pib nrog r. Tsis txhob hais zoo li light.
light | /laɪt/ | Teeb; sib | Pib nrog l, nplaig kov saum.
fan | /fæn/ | Kiv cua; neeg nyiam ib tus neeg | f: hniav saum kov di ncauj hauv qab thiab tshuab.
pan | /pæn/ | Lauj kaub | p: ob daim di ncauj kaw thiab qhib.
coffee | /ˈkɑːfi/ | Kav fes | f nruab nrab. Hais ua p yuav zoo li copy.
copy | /ˈkɑːpi/ | Theej | p nruab nrab.
think | /θɪŋk/ | Xav | th: rau nplaig nruab nrab hniav thiab tshuab. Hais s yuav ua sink.
sink | /sɪŋk/ | Lub dab dej ntxuav | s yog RPA x: nplaig nyob tom qab hniav.
three | /θriː/ | Peb | Nplaig nruab nrab hniav! Hais t yuav ua tree.
tree | /triː/ | Ntoo | tr: t + lus Askiv r.
this | /ðɪs/ | Qhov no | th uas muaj suab caj pas: rau nplaig nruab nrab hniav.
very | /ˈveri/ | Heev | v: hniav saum kov di ncauj hauv qab. Hais b yuav ua berry.
berry | /ˈberi/ | Txiv me me (txiv pos liab) | b: ob daim di ncauj. Tsis yog np.
vote | /voʊt/ | Pov npav | Pib nrog v. Tsis yog boat.
boat | /boʊt/ | Nkoj | Pib nrog b. Hais t kawg.
walk | /wɑːk/ | Taug kev | l tsis hais.
work | /wɝːk/ | Ua hauj lwm | Muaj r hauv nruab nrab. Tsis txhob hais zoo li walk.
beach | /biːtʃ/ | Ntug hiav txwv | ea ntev: /iː/. ch kawg yuav tsum hais.
leave | /liːv/ | Tawm mus | ea ntev, v kawg. Tsis yog live.
live | /lɪv/ | Nyob | i luv. Tsis txhob tso v kawg tseg.
banana | /bəˈnænə/ | Txiv tsawb | stress ntawm qhov nruab nrab: ba-NA-na.
hotel | /hoʊˈtel/ | Tsev hotel | stress ntawm qhov kawg: ho-TEL. Hais l kawg.
milk | /mɪlk/ | Mis nyuj | lk kawg: hais ob qho, tsis txhob ntxiv ib lub suab tom qab.
McDonald's | /məkˈdɑːnəldz/ | Khw McDonald's | stress ntawm DO. ldz kawg.
thank | /θæŋk/ | Ua tsaug (verb) | th tsis yog RPA th (tham). th: nplaig nruab nrab hniav. Hais t yuav ua tank.
she | /ʃiː/ | Nws (poj niam) | sh zoo li RPA s, tab sis nplaig tsis khoov. Hais s yuav ua see.
see | /siː/ | Pom | s yog RPA x, tsis yog RPA s.
ship | /ʃɪp/ | Nkoj loj | sh + i luv. Tsis yog sheep (i ntev) los yog sip (s).
sheep | /ʃiːp/ | Yaj | ee ntev. ship luv.
sip | /sɪp/ | Haus ib ntsis | s yog RPA x. Tsis yog sh.
chair | /tʃer/ | Lub rooj zaum | ch zoo li RPA ts. Tsis yog share.
share | /ʃer/ | Sib faib | sh hais tau ntev; ch hais ib zaug xwb.
zoo | /zuː/ | Vaj tsiaj | Lus Askiv z tsis yog RPA z. Hais s nrog suab caj pas.
bee | /biː/ | Muv | b tsis yog RPA np: tsis muaj n ua ntej. g (go) tsis yog nk.
red | /red/ | Liab | Lus Askiv r: ncav di ncauj, nplaig tsis kov dab tsi. RPA r zoo li t.
we | /wiː/ | Peb | Lus Askiv w yog consonant: ncav di ncauj ua ntej. RPA w yog vowel.
bed | /bed/ | Txaj | e zoo li RPA e. d kawg yuav tsum hais.
bad | /bæd/ | Phem | a qhib qhov ncauj loj dua bed.
cut | /kʌt/ | Txiav | u luv, qhov ncauj qhib me ntsis. t kawg.
cot | /kɑːt/ | Txaj me | a ntev, qhov ncauj qhib loj. cut luv.
`,
"Paj lug lus Askiv": `
It's a piece of cake. | /ɪts‿ə piːs‿əv keɪk/ | Yooj yim heev. | Yam yooj yim: The test was a piece of cake.
I'm on cloud nine. | /aɪm‿ɑːn klaʊd naɪn/ | Kuv zoo siab kawg nkaus. | Thaum koj zoo siab heev.
It costs an arm and a leg. | /ɪt kɑːsts‿ən‿ɑːrm‿ən‿ə leg/ | Kim heev. | Kim npaum li yuav muab koj txhais tes thiab txhais ceg them.
Let's call it a day. | /lets kɑːl‿ɪt‿ə deɪ/ | Hnub no ua txog ntawm no xwb. | Thaum xaus hauj lwm los yog kev kawm.
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ‿ˈʌndɚ ðə ˈweðɚ/ | Kuv tsis nyob zoo me ntsis. | Mob me me, zoo li khaub thuas. Tsis yog huab cua.
I need to hit the books. | /aɪ niːd tə hɪt ðə bʊks/ | Kuv yuav tsum kawm ntawv heev. | Ua ntej xeem. Tsis yog ntaus phau ntawv!
Once in a blue moon | /wʌns‿ɪn‿ə bluː muːn/ | Ntev ntev ib zaug | Yam tsawg heev: I only eat fast food once in a blue moon.
Better late than never. | /ˈbetɚ leɪt ðən ˈnevɚ/ | Lig los zoo tshaj tsis ua. | Hais rau neeg pib lig.
Don't beat around the bush. | /doʊnt biːt‿əˈraʊnd ðə bʊʃ/ | Hais ncaj ncaj. | Thaum koj xav kom neeg hais qhov tseeb.
It's not my cup of tea. | /ɪts nɑːt maɪ kʌp‿əv tiː/ | Kuv tsis nyiam yam no. | Txoj kev mos hais tias koj tsis nyiam.
Let's get the ball rolling. | /lets get ðə bɑːl ˈroʊlɪŋ/ | Wb pib. | Thaum pib lub rooj sib tham los yog hauj lwm.
I'll keep my fingers crossed. | /aɪl kiːp maɪ ˈfɪŋgɚz krɑːst/ | Kuv vam tias yuav zoo. | Neeg muab ob tus ntiv tes sib hla.
Hang in there. | /hæŋ‿ɪn ðer/ | Ua siab ntev. | Hais rau neeg uas muaj teeb meem.
Speak of the devil! | /spiːk‿əv ðə ˈdevəl/ | Hais txog nws, nws tuaj lawm! | Thaum tus neeg nej tab tom tham txog tuaj txog.
The ball is in your court. | /ðə bɑːl‿ɪz‿ɪn jʊr kɔːrt/ | Tam sim no koj yog tus txiav txim. | Los ntawm kev ua si tennis.
My lips are sealed. | /maɪ lɪps‿ɑːr siːld/ | Kuv yuav tsis qhia leej twg. | Di ncauj kaw lawm.
It's on the tip of my tongue. | /ɪts‿ɑːn ðə tɪp‿əv maɪ tʌŋ/ | Kuv yuav luag nco qab lawm. | Thaum koj yuav luag nco tau ib lo lus.
I'm all ears. | /aɪm‿ɑːl‿ɪrz/ | Kuv mloog koj. | Kuv mloog zoo heev, hais tuaj.
When pigs fly. | /wen pɪgz flaɪ/ | Yeej tsis muaj hnub ntawd. | Yam yuav tsis muaj: He'll clean his room when pigs fly.
`,
"Movies, TV thiab slang": `
Spill the tea. | /spɪl ðə tiː/ | Qhia zaj dab neeg rau kuv. | tea = lus neeg tham txog lwm tus. Slang rau phooj ywg.
No cap. | /noʊ kæp/ | Tseeb tiag, tsis dag. | Slang ntawm cov hluas. cap = dag.
That song slaps. | /ðæt sɑːŋ slæps/ | Zaj hu nkauj ntawd zoo kawg. | slap = zoo kawg (nkauj). Kuj siv rau zaub mov.
I'm dead. | /aɪm ded/ | Kuv luag tuag lawm. | Tsis yog tuag tiag. Neeg sau nrog ib daim duab pob txha taub hau.
Low-key | /ˈloʊkiː/ | Me ntsis; tsis qhia leej twg | I low-key love this song. Sib txawv: high-key.
I'm obsessed with this song. | /aɪm‿əbˈsest wɪð ðɪs sɑːŋ/ | Kuv nyiam zaj hu nkauj no kawg nkaus. | obsessed = nyiam heev. Siv rau yam zoo.
What's it about? | /wʌts‿ɪt‿əˈbaʊt/ | Nws hais txog dab tsi? | Nug txog zaj dab neeg ntawm movie los yog TV.
No spoilers! | /noʊ ˈspɔɪlɚz/ | Tsis txhob qhia qhov kawg! | Lwm yam: Don't spoil it!
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə hoʊl ˈsiːzən/ | Kuv saib tag nrho ib season tib zaug. | binge-watch = saib ntau ntu tib zaug.
The ending was so good. | /ði ˈendɪŋ wəz soʊ gʊd/ | Qhov kawg zoo heev. | Tsis zoo: The ending was disappointing.
It's a must-watch. | /ɪts‿ə ˈmʌstwɑːtʃ/ | Koj yuav tsum saib. | Thaum koj xav kom phooj ywg saib heev.
Plot twist! | /plɑːt twɪst/ | Txawv tsis tau xav txog! | Kuj siv thaum muaj yam koj tsis tau xav txog tshwm sim.
It's overrated. | /ɪts‿ˌoʊvɚˈreɪtɪd/ | Neeg qhuas ntau dhau. | Sib txawv: underrated (neeg qhuas tsawg dhau).
That scene gave me chills. | /ðæt siːn geɪv mi tʃɪlz/ | Qhov ntawd ua rau kuv tshee. | Thaum koj ntshai los yog zoo siab heev.
Who's your favorite player? | /huːz jʊr ˈfeɪvərɪt ˈpleɪɚ/ | Koj nyiam tus neeg ncaws pob twg tshaj? | Nug txog kev ua si: football, basketball. Kuj nug: Who's your favorite singer?
Are you kidding me? | /ɑːr ju ˈkɪdɪŋ mi/ | Koj dag kuv los? | Neeg hais ntau hauv movies: xav tsis txog los yog chim.
I've got your back. | /aɪv gɑːt jʊr bæk/ | Kuv pab koj. | Kuv nrog koj, kuv yuav tiv thaiv koj.
Gotcha. | /ˈgɑːtʃə/ | Nkag siab lawm. | Luv ntawm got you. Siv ntau tshaj rau nkag siab.
Let's do this! | /lets duː ðɪs/ | Wb ua! | Hais ua ntej pib, kom muaj zog.
`,
"A txog Z: lus Askiv": `
A | /eɪ/ | A loj, a me | apple. Lub npe yog /eɪ/, tsis yog RPA a.
B | /biː/ | B loj, b me | boy. b: ob daim di ncauj, tsis muaj n ua ntej (tsis yog np).
C | /siː/ | C loj, c me | coffee. Lub npe zoo li see. Tsis yog RPA c.
D | /diː/ | D loj, d me | dog. Lub npe /diː/. Tsis yog RPA d (cim).
E | /iː/ | E loj, e me | email. Lub npe zoo li RPA i ntev. Tsis yog RPA e.
F | /ef/ | F loj, f me | family. Lub npe /ef/: hniav saum kov di ncauj hauv qab.
G | /dʒiː/ | G loj, g me | good. Lub npe /dʒiː/. Tsis yog J (/dʒeɪ/).
H | /eɪtʃ/ | H loj, h me | house. Lub npe /eɪtʃ/, pib nrog vowel: an H.
I | /aɪ/ | I loj, i me | idea. Lub npe zoo li RPA ai. Hais i, neeg yuav sau E.
J | /dʒeɪ/ | J loj, j me | job. Lub npe /dʒeɪ/. Tsis yog RPA j (cim).
K | /keɪ/ | K loj, k me | key. Lub npe /keɪ/.
L | /el/ | L loj, l me | lunch. Lub npe /el/, ib qho xwb.
M | /em/ | M loj, m me | money. Hauv xov tooj, M thiab N zoo li, hais M as in Mary.
N | /en/ | N loj, n me | name. Lub npe /en/.
O | /oʊ/ | O loj, o me | open. Lub npe /oʊ/, zoo li oh.
P | /piː/ | P loj, p me | pizza. Lub npe /piː/, ob daim di ncauj.
Q | /kjuː/ | Q loj, q me | question. Lub npe /kjuː/. Tsis yog RPA q.
R | /ɑːr/ | R loj, r me | room. Lub npe /ɑːr/, zoo li are. Tsis yog RPA r.
S | /es/ | S loj, s me | school. Lub npe /es/. S yog RPA x, tsis yog RPA s.
T | /tiː/ | T loj, t me | ticket. Lub npe zoo li tea. T loj: capital T.
U | /juː/ | U loj, u me | university. Lub npe zoo li you: a U, tsis yog an U.
V | /viː/ | V loj, v me | very. Lub npe /viː/: hniav saum kov di ncauj. Tsis yog RPA v (cim).
W | /ˈdʌbəljuː/ | W loj, w me | water. Lub npe double u (ob tug u). RPA w yog vowel; lus Askiv w yog consonant.
X | /eks/ | X loj, x me | X-ray. Lub npe /eks/. Lus Askiv x tsis yog RPA x.
Y | /waɪ/ | Y loj, y me | yes. Lub npe zoo li why.
Z | /ziː/ | Z loj, z me | zero. Amelika: /ziː/ (zee). Tsis yog RPA z.
`,
"Final sounds: -s, -ed": `
six | /sɪks/ | Rau | ks kawg. Hais k xwb yuav ua sick.
sick | /sɪk/ | Mob | k kawg: hais kom hnov. RPA tsis muaj k kawg.
bag | /bæg/ | Lub hnab | g kawg, muaj suab caj pas. Hais k yuav ua back.
back | /bæk/ | Nraub qaum; tom qab | k kawg. Vowel luv tshaj bag.
dog | /dɑːg/ | Dev | g kawg. Hais k yuav ua dock.
dock | /dɑːk/ | Chaw nres nkoj | k kawg.
seed | /siːd/ | Noob | d kawg, muaj suab caj pas. Hais t yuav ua seat.
seat | /siːt/ | Rooj zaum | t kawg.
rise | /raɪz/ | Nce; tawm (hnub) | z kawg; rice (Pronunciation: hais ua tib zoo) muaj s kawg.
nine | /naɪn/ | Cuaj | n kawg. Tsis yog night (t kawg).
card | /kɑːrd/ | Daim card; daim ntawv | rd kawg: tsis hais d yuav ua car.
car | /kɑːr/ | Lub tsheb | r kawg, tsis muaj d.
wash | /wɑːʃ/ | Ntxuav | sh kawg, hais tau ntev. Tsis yog watch.
watch | /wɑːtʃ/ | Saib; nalika | ch kawg, hais ib zaug. Tsis yog wash.
mice | /maɪs/ | Cov nas tsuag | s kawg: plural ntawm mouse. Tsis hais s yuav ua my.
my | /maɪ/ | Kuv (kuv lub, kuv tus) | Tsis muaj consonant kawg. Tsis yog mice.
books | /bʊks/ | Cov phau ntawv | -s hais /s/ tom qab k: ks.
dogs | /dɑːgz/ | Cov dev | -s hais /z/ tom qab g.
buses | /ˈbʌsɪz/ | Cov tsheb ntiav | -es hais /ɪz/ tom qab s: muaj ib qho ntxiv.
watched | /wɑːtʃt/ | Tau saib (past tense) | -ed hais /t/ tom qab ch.
played | /pleɪd/ | Tau ua si (past tense) | -ed hais /d/ tom qab vowel.
wanted | /ˈwɑːntɪd/ | Tau xav (past tense) | -ed hais /ɪd/ tom qab t: muaj ib qho ntxiv.
last | /læst/ | Kawg; dhau los | st kawg: hais s thiab t.
next | /nekst/ | Tom ntej | kst kawg.
desks | /desks/ | Cov rooj sau ntawv | sks kawg: nyuaj, tab sis yuav tsum hais kom neeg paub tias yog plural.
months | /mʌnθs/ | Cov hli | nθs kawg: nplaig nruab nrab hniav rau θ, ces s.
asked | /æskt/ | Tau nug (past tense) | skt kawg: -ed hais /t/.
students | /ˈstuːdənts/ | Cov tub ntxhais kawm ntawv | nts kawg: plural -s tom qab t.
hobby | /ˈhɑːbi/ | Yam koj nyiam ua thaum so | Tsis muaj consonant kawg: my hobby (ib yam), tsis yog my hobbies.
`,
"Kuv thiab kuv tsev neeg": `
mother | /ˈmʌðɚ/ | Niam | Hu niam: Mom. th nruab nrab muaj suab caj pas.
father | /ˈfɑːðɚ/ | Txiv | Hu txiv: Dad.
parents | /ˈperənts/ | Niam txiv | Ib tug: parent. My parents live in Fresno.
son | /sʌn/ | Tub | Zoo li sun (hnub) hais.
daughter | /ˈdɑːtɚ/ | Ntxhais | gh tsis hais.
brother | /ˈbrʌðɚ/ | Tij laug, kwv (txiv neej hais); nus (poj niam hais) | Lus Askiv muaj ib lo lus xwb. Hais older brother los yog younger brother.
sister | /ˈsɪstɚ/ | Muam (txiv neej hais); viv ncaus (poj niam hais) | Lus Askiv muaj ib lo lus xwb: older sister, younger sister.
grandmother | /ˈgrænmʌðɚ/ | Pog, niam tais | Hu: Grandma. Lus Askiv tsis qhia sab txiv los yog sab niam.
grandfather | /ˈgrænfɑːðɚ/ | Yawg, yawm txiv | Hu: Grandpa.
husband | /ˈhʌzbənd/ | Tus txiv | Hauv lus Askiv, husband thiab father yog ob lo lus.
wife | /waɪf/ | Tus poj niam | Plural: wives.
children | /ˈtʃɪldrən/ | Cov me nyuam | Plural ntawm child (ib tug me nyuam). childs ✗
She's my mother. | /ʃiz maɪ ˈmʌðɚ/ | Nws yog kuv niam. | nws = he, she, it. Poj niam: she.
He's my son. | /hiz maɪ sʌn/ | Nws yog kuv tus tub. | Txiv neej: he.
It's our dog. | /ɪts‿aʊr dɑːg/ | Nws yog peb tus dev. | Tsiaj los yog khoom: it. Dev thiab miv, neeg kuj hais he los yog she.
I know him. | /aɪ noʊ hɪm/ | Kuv paub nws (txiv neej). | Tom qab verb: him, her, it. I know he ✗
I saw her yesterday. | /aɪ sɑː hɝː ˈjestɚdeɪ/ | Nag hmo kuv pom nws (poj niam). | her tom qab verb. I saw she ✗
His name is Tou. | /hɪz neɪm‿ɪz tuː/ | Nws (txiv neej) lub npe hu ua Tou. | Ntawm txiv neej: his. Ntawm poj niam: her.
They're my brothers. | /ðer maɪ ˈbrʌðɚz/ | Lawv yog kuv cov tij laug thiab kwv. | lawv = they. Ntau tus: plural -s, brothers.
Their house is big. | /ðer haʊs‿ɪz bɪg/ | Lawv lub tsev loj. | lawv lub = their. Muaj is ua ntej big.
`,
"Lus Hmoob thiab lus Askiv": `
a blue dress | /ə bluː dres/ | Ib lub cev tiab xiav | Lus Hmoob: xim tom qab. Lus Askiv: adjective ua ntej. dress blue ✗ → a blue dress ✓
my red car | /maɪ red kɑːr/ | Kuv lub tsheb liab | kuv ua ntej, zoo li lus Hmoob; liab (red) ua ntej car. car red my ✗
this big house | /ðɪs bɪg haʊs/ | Lub tsev loj no | no (this) nyob kawg hauv lus Hmoob; this nyob ua ntej hauv lus Askiv. house big this ✗
four dogs | /fɔːr dɑːgz/ | Plaub tug dev | Lus Hmoob tsis muaj -s. Lus Askiv: plural -s. four dog ✗
I'm a teacher. | /aɪm‿ə ˈtiːtʃɚ/ | Kuv yog ib tug xib fwb. | Muaj am thiab article a. I teacher ✗ → I'm a teacher. ✓
I'm happy. | /aɪm ˈhæpi/ | Kuv zoo siab. | Lus Hmoob tsis muaj yog ua ntej zoo siab; lus Askiv yuav tsum muaj am. I happy ✗
I live in Fresno. | /aɪ lɪv‿ɪn ˈfreznoʊ/ | Kuv nyob Fresno. | live yog verb, tsis muaj am. I am live in Fresno ✗
He hit him. | /hi hɪt hɪm/ | Nws ntaus nws. | Lus Hmoob nws ob zaug; lus Askiv he … him. He hit he ✗
She works at a clinic. | /ʃi wɝːks‿ət‿ə ˈklɪnɪk/ | Nws (poj niam) ua hauj lwm hauv tsev kho mob. | Lus Hmoob verb tsis hloov. Lus Askiv: she + works (-s). She work ✗
He doesn't know. | /hi ˈdʌzənt noʊ/ | Nws (txiv neej) tsis paub. | he, she, it: doesn't. He don't know ✗
Do you go to school? | /duː ju goʊ tə skuːl/ | Koj puas mus kawm ntawv? | Lus Hmoob puas ua ntej verb. Lus Askiv: Do ua ntej. You go to school? ✗
Where are you going? | /wer ɑːr ju ˈgoʊɪŋ/ | Koj mus qhov twg? | Lus Hmoob qhov twg nyob kawg. Lus Askiv: Where ua ntej. You go where? ✗
Yesterday I went to the store. | /ˈjestɚdeɪ aɪ went tə ðə stɔːr/ | Nag hmo kuv mus tom khw. | Lus Hmoob mus tsis hloov. Lus Askiv: go hloov ua went. Yesterday I go ✗
I've already eaten. | /aɪv‿ɑːlˈredi ˈiːtən/ | Kuv twb noj mov lawm. | twb … lawm ≈ already. I already eat ✗ → I've already eaten. ✓
Have you eaten yet? | /hæv ju ˈiːtən jet/ | Koj noj mov lawm los tsis yog? | Hauv lus Hmoob yog lus nyob zoo. Hauv lus Askiv yog lo lus nug tiag: neeg yuav caw koj noj mov.
I'll give you the book. | /aɪl gɪv ju ðə bʊk/ | Kuv muab phau ntawv rau koj. | Lus Hmoob muab … rau. Lus Askiv: give + leej twg + yam. I take book give you ✗
It's raining. | /ɪts ˈreɪnɪŋ/ | Los nag. | Lus Hmoob tsis muaj subject. Lus Askiv yuav tsum muaj it. Is raining ✗
There's a store near here. | /ðerz‿ə stɔːr nɪr hɪr/ | Muaj ib lub khw nyob ze qhov no. | muaj = have thiab there is. Have a store near here ✗ → There's a store near here. ✓
I want to go home. | /aɪ wɑːnt tə goʊ hoʊm/ | Kuv xav mus tsev. | Lus Hmoob verb ua ke. Lus Askiv: want to + verb. I want go home ✗
`,
"Nyob hauv Amelika": `
I'd like to make an appointment. | /aɪd laɪk tə meɪk‿ən‿əˈpɔɪntmənt/ | Kuv xav teem sij hawm. | Hais rau tsev kho mob los yog chaw ua hauj lwm hauv xov tooj.
I have an appointment at ten. | /aɪ hæv‿ən‿əˈpɔɪntmənt‿ət ten/ | Kuv teem sij hawm kaum teev. | at + teev: at ten, at 2:30.
Please speak slowly. | /pliːz spiːk ˈsloʊli/ | Thov hais maj mam. | Thov = please. Hais thaum koj tsis nkag siab.
Is there a Hmong-speaking doctor? | /ɪz ðer ə ˈmɑːŋ ˌspiːkɪŋ ˈdɑːktɚ/ | Puas muaj kws kho mob hais lus Hmoob? | Yog tsis muaj, nug neeg txhais lus.
I have Medical Assistance. | /aɪ hæv ˈmedɪkəl əˈsɪstəns/ | Kuv muaj Medical Assistance. | Nyob Minnesota, hu ua MA. Nqa koj daim card mus.
Do I need to pay? | /duː aɪ niːd tə peɪ/ | Kuv puas yuav tsum them nqi? | need to + verb.
Where do I sign? | /wer duː aɪ saɪn/ | Kuv kos lub npe qhov twg? | sign: g tsis hais.
Please fill out this form. | /pliːz fɪl‿aʊt ðɪs fɔːrm/ | Thov sau daim ntawv no. | fill out (Phrasal verbs). Sau koj lub npe thiab koj chaw nyob.
What's your address? | /wʌts jʊr ˈædres/ | Koj chaw nyob yog qhov twg? | Teb: tus lej tsev, txoj kev, lub nroog.
My daughter goes to school here. | /maɪ ˈdɑːtɚ goʊz tə skuːl hɪr/ | Kuv tus ntxhais kawm ntawv qhov no. | goes to school, tsis muaj the.
This is my child's teacher. | /ðɪs‿ɪz maɪ tʃaɪldz ˈtiːtʃɚ/ | Nov yog kuv tus me nyuam tus xib fwb. | child's = ntawm kuv tus me nyuam.
My kids are at school. | /maɪ kɪdz‿ɑːr‿ət skuːl/ | Kuv cov me nyuam nyob tom tsev kawm ntawv. | kids = children. at school: tsis muaj the.
Which bus goes to the clinic? | /wɪtʃ bʌs goʊz tə ðə ˈklɪnɪk/ | Lub tsheb ntiav twg mus tsev kho mob? | goes: bus yog ib lub (he, she, it).
The bus is late. | /ðə bʌs‿ɪz leɪt/ | Lub tsheb ntiav tseem tsis tuaj. | late = lig.
It's snowing. | /ɪts ˈsnoʊɪŋ/ | Los daus. | Zoo li It's raining: it + be + -ing.
It's very cold today. | /ɪts ˈveri koʊld təˈdeɪ/ | Hnub no no heev. | Lus Hmoob no = cold thiab this. cold yog adjective, muaj is.
My grandma doesn't speak English. | /maɪ ˈgrænmɑː ˈdʌzənt spiːk ˈɪŋglɪʃ/ | Kuv pog tsis hais lus Askiv. | grandma = pog los yog niam tais. she → doesn't.
We're going to the Hmong New Year. | /wɪr ˈgoʊɪŋ tə ðə mɑːŋ nuː jɪr/ | Peb mus noj peb caug. | Hmong New Year = noj peb caug. Muaj nyob Fresno, St. Paul thiab ntau lub nroog.
Happy Hmong New Year! | /ˈhæpi mɑːŋ nuː jɪr/ | Nyob zoo xyoo tshiab! | Teb: Thank you, you too!
`,
};

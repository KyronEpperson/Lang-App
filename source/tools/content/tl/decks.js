/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   tl-en: pron = IPA exactly as the Chinese course writes it (docs/profiles/tl.md §6, tools/content/zh/PRON-RULES.md); must match profile.json pronPattern.
   Deck names are FINAL (tools/content/tl/DECKNAMES.md). Deck 21 is the shared alphabet deck; the last deck is tl-only (profile §9). */
module.exports = {
"Pagbati": `
Hello. | /həˈloʊ/ | Kumusta (pagbati) | Pinakapangunahing pagbati. Puwede kahit kailan, kahit saan at kahit kanino.
Hi! | /ˈhaɪ/ | Uy! (magaang bati) | Mas magaan at mas palagay ang loob kaysa sa "Hello". Sa Amerika, "Hi" rin ang bati ng magkakatrabaho sa isa't isa.
Hey! | /ˈheɪ/ | Hoy! (sa kaibigan) | Para sa mga kaibigan. Sa taong hindi mo kakilala, puwede itong tumunog na bastos.
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | Magandang umaga | Hanggang bago magtanghali. Madalas paikliin: "Morning!"
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | Magandang hapon | Mula tanghali hanggang mga alas-sais ng gabi, kaya ito rin ang katumbas ng "Magandang tanghali". Medyo pormal; madalas marinig sa tindahan at opisina.
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | Magandang gabi (pagdating) | Bati kapag nagkita sa gabi. Ang "Good night" ay para lang sa paghihiwalay o bago matulog.
How are you? | /ˈhaʊ ər ju/ | Kumusta ka? | Pagbati ito, hindi totoong pangungumusta. Sagutin nang maikli: "Good, thanks. You?"
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | Mabuti naman, salamat. Ikaw? | Tunog-libro ang "I'm fine, thank you" na natutunan sa paaralan. Mas natural ang "I'm good".
What's up? | /ˈwʌts ˈʌp/ | Ano na? / Anong balita? | Kaswal na bati ng magkakaibigan, parang "Ano na?" sa atin. Hindi kailangan ng mahabang sagot; karaniwan ay "Not much."
Not much. | /ˈnɑːt ˈmʌtʃ/ | Wala naman | Pinakakaraniwang sagot sa "What's up?" Puwedeng ibalik ang tanong: "Not much, you?"
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | Kumusta na? / Ayos ba ang lahat? | Kaswal na anyo ng "How are you?" Sagot: "Pretty good!"
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | Ikinagagalak kitang makilala | Sa unang pagkikita lang. Sagot: "Nice to meet you, too." Kapag kakilala mo na ang kausap: "Nice to see you."
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | Ang tagal nating hindi nagkita! | Para sa malapit na kakilala. Medyo mas pormal: "It's been a while."
See you later. | /ˈsiː ju ˈleɪtər/ | Kita tayo mamaya / Sige, hanggang sa muli | Karaniwang paalam ito kahit wala kayong planong magkita ulit sa araw na iyon.
Take care. | /ˈteɪk ˈker/ | Ingat / Ingat ka | Magiliw na paalam, tulad ng "Ingat!" sa atin. Madalas din sa dulo ng mensahe.
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | Magandang araw sa iyo! | Madalas sabihin ng kahera pagkatapos mong magbayad. Sagot: "You too!"
Bye! | /ˈbaɪ/ | Paalam! / Sige! | Kapag matatanda ang nag-uusap, medyo pambata ang dating ng "Bye-bye".
Good night. | /ˈgʊd ˈnaɪt/ | Magandang gabi (paalam) / Matulog nang mahimbing | Sa paghihiwalay sa gabi o bago matulog lang. Kapag kararating mo, "Good evening" ang bati.
`,
"Pagpapakilala": `
My name is Ana. | /maɪ ˈneɪm ɪz ˈɑːnə/ | Ana ang pangalan ko | Sa karaniwang usapan, mas madalas ang "I'm Ana."
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | Jay na lang ang itawag mo sa akin | Para sa palayaw. Karaniwan din ang palayaw sa Amerika, kaya sabihin mo lang ang sa iyo.
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | Ano ang itatawag ko sa iyo? | Magagamit kapag mahirap bigkasin ang pangalan ng kausap o gusto mong malaman ang palayaw niya.
Where are you from? | /ˈwer ər ju frʌm/ | Taga-saan ka? | Isa sa mga unang itatanong sa iyo sa ibang bansa.
I'm from the Philippines. | /aɪm frəm ðə ˈfɪlɪpiːnz/ | Taga-Pilipinas ako | Laging may article na "the" ang "the Philippines" dahil plural ang pangalan ng bansa: "I'm from Philippines." ✗ Pero walang article ang lungsod: "I'm from Manila."
I live in Manila. | /aɪ ˈlɪv ɪn məˈnɪlə/ | Sa Maynila ako nakatira | "in" ang gamit sa lungsod at bansa: "in Manila", "in the Philippines". Sa "live", /v/ ang dulo: ngipin sa ibabang labi, hindi /b/.
I'm a student. | /aɪm ə ˈstuːdnt/ | Estudyante ako | Kailangan ng article na "a" o "an" bago ang trabaho o katayuan ng isang tao: "I'm student." ✗
What do you do? | /ˈwʌt də ju ˈduː/ | Ano ang trabaho mo? | Karaniwang tanong tungkol sa hanapbuhay. Mas magalang ito kaysa sa "What's your job?"
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | Sa bangko ako nagtatrabaho | "at" bago ang kompanya o lugar ng trabaho: "I work at a call center."
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | Sa marketing ako nagtatrabaho | "in" bago ang larangan o departamento, "at" bago ang kompanya. Iisang "sa" lang ang dalawang ito sa Tagalog. Walang article ang "marketing".
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | 25 taong gulang na ako | Plural ang "years", at kailangan ang "old": "I'm 25 years." ✗ Puwede ring "I'm 25." lang. Sa Amerika, hindi magandang itanong agad ang edad ng bagong kakilala.
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | Mahilig talaga akong umakyat ng bundok | Mas natural na paraan ng pagsasabi ng hilig kaysa sa "My hobby is…".
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | Mahilig akong manood ng pelikula | Pagkatapos ng "like": anyong -ing o "to" + verb. Plural at walang article ang "movies" dahil pelikula sa pangkalahatan ang tinutukoy.
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | Isang taon na akong nag-aaral ng Ingles | Para sa bagay na nagsimula noon at tuloy pa hanggang ngayon: "have been" + anyong -ing. "I am learning English for a year." ✗ Ito ang ginagawa ng salitang "na" sa Tagalog.
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | Nandito ako para magbakasyon | "on vacation", walang article. Sa British English: "on holiday".
I'm married. | /aɪm ˈmærid/ | May asawa na ako | Kung wala: "I'm single." Personal na tanong sa Amerika kung may asawa na ang isang tao, kaya huwag itong itanong sa bagong kakilala.
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | May nakababata akong kapatid na lalaki | Kailangang sabihin sa Ingles kung lalaki o babae ang kapatid: "brother" o "sister". "older" para sa kuya o ate, "younger" para sa nakababata.
`,
"Mahahalagang pangungusap 1": `
Excuse me. | /ɪkˈskjuːz mi/ | Mawalang-galang na po / Makikiraan po | Pantawag ng pansin o kapag makikiraan. Kapag may nabangga ka, "Sorry!" ang sabihin.
Thank you. | /ˈθæŋk ju/ | Salamat / Salamat po | Sa "th", ilagay ang dulo ng dila sa pagitan ng mga ngipin at magpalabas ng hangin; hindi /t/. Walang salita para sa "po" sa Ingles: magalang na ang "Thank you" mismo.
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | Maraming salamat | Mas kaswal kaysa sa "Thank you very much".
You're welcome. | /jʊr ˈwelkəm/ | Walang anuman | Sa usapan, madalas ding "Sure.", "No problem." o "Anytime."
No problem. | /ˈnoʊ ˈprɑːbləm/ | Walang problema / Ayos lang | Napakakaraniwang sagot kapag may nagpasalamat sa iyo.
I'm sorry. | /aɪm ˈsɑːri/ | Pasensiya na / Patawad | Para sa totoong paghingi ng tawad. Kapag bahagya ka lang nakabangga, sapat na ang "Sorry!"
Yes, please. | /ˈjes ˈpliːz/ | Sige, salamat / Opo, sige po | Sagot sa alok tulad ng "Would you like some water?" Ang "please" ang nagpapagalang dito; hindi kailangan ng "po" o "sir" sa bawat sagot.
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | Huwag na, salamat / Hindi na po, salamat | Mas magalang kaysa sa "No" lang. Kaswal: "I'm good, thanks."
Sorry? | /ˈsɑːri/ | Ano iyon? / Ano po? | Pataas ang tono sa dulo; ibig sabihin, "Pakiulit." Sa Amerika, mas karaniwan ito kaysa sa "Pardon?" at mas magalang kaysa sa "What?"
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | Puwede mo bang ulitin? / Pakiulit po | Huwag mahiyang magtanong kapag hindi mo nakuha. Kung "repeat" ang gagamitin, walang "again": "Could you repeat that?"
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | Puwede bang bagalan mo ang pagsasalita? | Mas magalang kapag may "please". "more slowly", hindi "more slower".
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | Hindi ko maintindihan | Medyo matigas ang dating. Mas malumanay: "Sorry, I didn't quite catch that."
Do you speak Tagalog? | /də ju ˈspiːk təˈgɑːlɔːg/ | Marunong ka bang mag-Tagalog? | Mas natural at mas magalang ang "Do you speak…?" kaysa sa "Can you speak…?" Sa labas ng Pilipinas, mas kilala ang "Tagalog" kaysa sa "Filipino".
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | Marunong ako ng kaunting Ingles | "a little" = kaunti pero mayroon. Kapag walang "a" ("little English"), halos wala na ang ibig sabihin. Walang article ang pangalan ng wika: "the English" ✗
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | Paano ito sabihin sa Ingles? | Ituro ang bagay habang nagtatanong, at may bago ka agad na salita.
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | Ano ang ibig sabihin nito? | Kailangan ang "does" sa tanong: "What means this?" ✗ Ituro ang menu o karatula habang nagtatanong.
Can you help me? | /kən ju ˈhelp mi/ | Puwede mo ba akong tulungan? | Mas magalang: "Could you help me?" Sa Ingles, ang "could" at "please" ang gumagawa ng trabaho ng "po".
`,
"Mahahalagang pangungusap 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | Nasaan ang CR? / Nasaan po ang banyo? | Sa Pilipinas: "CR" o "comfort room", na hindi kilala sa Amerika. Doon: "restroom" sa pampublikong lugar, "bathroom" sa bahay. Ang "toilet" ay ang inidoro mismo.
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | Magkano ito? | Kapag marami: "How much are these?"
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | May ATM ba malapit dito? | "an" at hindi "a", dahil tunog na vowel ang simula ng "ATM": /ˌeɪ tiː ˈem/.
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | Puwede bang malaman ang password ng Wi-Fi? | Puwede ring itanong: "Is there Wi-Fi here?"
I'm lost. | /aɪm ˈlɔːst/ | Naliligaw ako | Puwede mong ipakita ang mapa at itanong: "Where am I on this map?"
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | Puwede bang card ang ibayad? | "by card", walang article; puwede ring "with a card". Halos lahat ng tindahan sa Amerika ay tumatanggap ng card, pero hindi ang mga e-wallet natin.
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | Sandali lang po | Magalang; madalas marinig sa tindahan at sa telepono. Ito ang sabihin sa halip na "For a while", na "matagal-tagal" ang ibig sabihin sa American English.
Just a second. | /ˈdʒʌst ə ˈsekənd/ | Teka lang / Saglit lang | Kaswal. Mas maikli pa: "Just a sec."
No worries. | /ˈnoʊ ˈwɜːriz/ | Ayos lang / Huwag mong alalahanin | Lalong karaniwan sa Australia at UK, pero madalas na ring marinig sa Amerika.
That's okay. | /ˈðæts oʊˈkeɪ/ | Okay lang iyon / Wala iyon | Sagot kapag may humingi ng paumanhin sa iyo. Puwede rin: "Don't worry about it."
Of course. | /əv ˈkɔːrs/ | Siyempre / Oo naman | Para sa pagpayag sa hiling. Bilang sagot sa tanong, puwede itong tumunog na "Halata naman, hindi ba?", kaya ingatan ang tono.
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | Hindi ako sigurado | Mas malumanay kaysa sa "I don't know".
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | May tanong ako | Sa klase o miting, puwede ring "Can I ask a question?" Kailangan ang article na "a": "I have question." ✗
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | Puwede mo bang isulat? | Pinakamabisang paraan kapag hindi mo makuha ang address, numero o pangalan.
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | Puwede bang kumuha ng litrato? | Magandang asal ang magtanong muna sa museo o tindahan.
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | Puwede mo ba kaming kunan ng litrato? | Pagkatapos, magpasalamat: "Thank you so much!"
After you. | /ˈæftər ˈjuː/ | Mauna ka na / Kayo na po muna | Sinasabi sa pinto o elevator kapag pinauuna mo ang iba. Kaugalian sa Amerika na hawakan ang pinto para sa kasunod mo.
Watch out! | /ˈwɑːtʃ ˈaʊt/ | Ingat! / Mag-ingat ka! | Isinisigaw kapag may panganib. Ganoon din ang "Look out!"
`,
"Direksyon at sasakyan": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | Paano pumunta sa istasyon ng subway? | Palitan lang ang destinasyon: "How do I get to the airport?" Ang "subway" sa Amerika ay tren sa ilalim ng lupa; ang pinakamalapit dito sa atin ay ang MRT at LRT. Sa UK: "underground" o "tube".
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | Malayo ba iyon mula rito? | Sa American English, laging binibigkas ang "r" sa dulo ng "far".
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | Kaya bang lakarin? | Puwede ring itanong: "Can I walk there?"
Go straight. | /ˈgoʊ ˈstreɪt/ | Dumiretso ka lang | "Go straight for two blocks." Sa Amerika, "block" (mula isang kanto hanggang sa susunod) ang panukat ng layo.
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | Kumaliwa ka sa kanto | "at" para sa eksaktong punto: "at the corner", "at the light" (sa stoplight).
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | Nasa kanan mo iyon | "on" ang gamit sa kanan at kaliwa: "on your right", "on the left". Hindi "in your right" o "at your right".
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | Nasa kabilang kalye iyon | "across from the bank" = katapat ng bangko.
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | Katabi iyon ng bangko | Isang /t/ lang ang naririnig sa "next to" dahil nagdudugtong ang dalawang "t".
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | Aling linya ang papunta sa sentro ng lungsod? | Walang "to" at walang article bago ang "downtown": "go downtown". May -s ang "goes" dahil singular ang "line".
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | Saan ako lilipat ng sasakyan? | Sa British English, "change" ang gamit: "Where do I change?"
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | Dumadaan ba sa airport ang bus na ito? | "Does" + base form: "go", hindi "goes". Bago ang tunog na vowel, /ði/ ang bigkas ng "the": "the airport".
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | Saang hintuan ako dapat bumaba? | "get off" ang pagbaba sa bus, tren o jeep, hindi "go down". Nasa dulo ng tanong ang "at".
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | Isang tiket papuntang Boston | "to" bago ang destinasyon. Kapag dalawa: "Two tickets", may plural na -s.
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | Balikan o one way lang? | Sa British English: "Return or single?"
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | Puwede mo ba akong ihatid sa address na ito? | Ipakita sa driver ang address sa telepono mo para walang kalituhan.
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | Puwede bang itabi mo rito? / Para po rito | Para sa taksi o kotse kapag bababa ka na. Puwede rin: "Right here is fine." Walang katumbas ang "Para!" sa Ingles.
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | Gaano katagal ang biyahe? | Sagot: "About 20 minutes."
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | May nakaupo ba rito? | Kung wala: "No, go ahead." Mahaba at banat ang /iː/ sa "seat"; kapag maikli at maluwag, "sit" ang maririnig.
`,
"Pag-order sa restawran": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | Mesa para sa dalawa / Dalawa po kami | Sa mga restawran sa Amerika, karaniwang hinihintay mong ihatid ka ng staff sa mesa.
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | May reservation ba kayo? | Itatanong ito ng staff. Sagot: "Yes, under Santos."
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | Puwede bang makita ang menu? | Nasa unang pantig ang stress: /ˈmenjuː/.
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | Ano ang mairerekomenda ninyo? | Puwede ring itanong: "What's popular here?" Nasa huling pantig ang stress: /ˌrekəˈmend/.
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | Steak ang sa akin | Pangunahing paraan ng pag-order: "I'll have" + pagkain. Article na "the" dahil ang steak na nasa menu ang tinutukoy.
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | Isang Coke nga / Pahingi po ng Coke | Nabibilang ang inumin kapag order: "a Coke", "two Cokes". Hindi bastos ang "Can I get…?"; ito ang karaniwang pag-order sa Amerika.
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | Medium rare po ang luto | Sagot sa "How would you like your steak?" Mula halos hilaw hanggang lutong-luto: rare, medium rare, medium, well done.
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | Huwag pong lagyan ng sibuyas | Plural at walang article: "onions". Puwede rin: "Can I get it without onions?"
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | May allergy ako sa mani | Nasa ikalawang pantig ang stress: /əˈlɜːrdʒɪk/. Plural at walang article ang "peanuts" dahil mani sa pangkalahatan ang tinutukoy.
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | Maanghang ba ito? | Kung ayaw mo ng maanghang, humingi ng "mild".
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | Puwede po bang makahingi ng tubig? | Hindi nabibilang ang "water": "some water", hindi "a water" o "waters". Karaniwang libre ang tubig na may yelo sa mga restawran sa Amerika.
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | Masarap ang lahat | Sagot kapag nagtanong ang staff ng "How was everything?"
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | Puwede na pong makuha ang bill? | "check" sa Amerika, "bill" sa UK at sa atin. Sa Amerika, sa mesa ka nagbabayad, at madalas dinadala ang check kahit hindi mo pa hinihingi.
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | Puwede bang hati-hati kami sa bayad? | KKB sa atin. Kung kani-kaniyang resibo ang gusto ninyo: "separate checks".
It's on me. | /ɪts ɑːn ˈmiː/ | Libre ko / Sagot ko | Ganoon din ang "My treat!"
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | Puwede bang ipabalot ito? | Sa Amerika, "to go" ang sinasabi sa counter kapag iuuwi ang pagkain; hindi roon sinasabi ang "take out" gaya sa atin. Para sa tirang pagkain: "Can I get a box?"
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | Kasama na ba ang tip? | Sa atin, kadalasan ay may service charge na o barya lang ang iniiwan. Sa mga restawran sa Amerika, inaasahan ang tip na 15% hanggang 20%.
`,
"Kapihan at convenience store": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | Isang iced Americano po | "iced", hindi "ice": mahina ang -d pero nandoon. Article na "an" dahil tunog na vowel ang simula ng "iced".
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | Anong size ang gusto ninyo? | Itatanong ito ng staff.
Small, please. | /ˈsmɔːl ˈpliːz/ | Maliit lang po | Karaniwan: small, medium, large. Sa Starbucks: tall, grande, venti.
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | Dito kakain o take out? | Sa atin: "Dine in or take out?" Sa British English: "Eat in or take away?"
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | Puwede bang oat milk na lang ang ilagay? | "instead" = bilang kapalit. Baka may dagdag na bayad.
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | Kaunting yelo lang po | Kung walang yelo: "No ice, please." Hindi nabibilang ang "ice", kaya "less" ang gamit at walang plural.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | Decaf po (walang caffeine) | Pinaikling "decaffeinated".
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | Ano pong pangalan para sa order? | Isusulat ng staff ang pangalan mo sa baso. Kung mahaba ang pangalan mo, palayaw na lang ang ibigay.
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | Kailangan ninyo ng supot? | Kung hindi: "No, I'm good." Ang salita ay "bag"; hindi maiintindihan na supot ang "plastic" kapag ito lang ang sinabi mo.
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | Puwede pong makahingi ng resibo? | Hindi binibigkas ang "p" sa "receipt": /rɪˈsiːt/.
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | Saan makikita ang mga baterya? | Magagamit sa kahit anong hinahanap mo. Plural at walang article: "batteries".
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | Nagtitinda ba kayo ng charger ng cellphone? | Puwede ring "Do you have…?" Plural at walang article kapag kahit alin ang hinahanap mo.
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | Puwede bang painitin ito? | Pinagdudugtong ang bigkas: "heat this up".
That's it. | /ˈðæts ˈɪt/ | Iyan lang / Wala na | Sagot kapag nagtanong ang staff ng "Anything else?"
Here you go. | /ˈhɪr ju ˈgoʊ/ | Heto / Ito po | Sinasabi habang iniaabot ang bayad o anumang bagay.
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | Sa iyo na ang sukli | Madalas itong pumalit sa tip sa taksi o delivery sa Amerika. Hindi nabibilang ang "change" (sukli), kaya walang "changes".
`,
"Pamimili at pagbabayad": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | Tumitingin lang ako, salamat | Sagot kapag nagtanong ang staff ng "Can I help you find anything?"
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | May medium ba kayo nito? | Mga size: small, medium, large. May article dito: "in a medium".
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | May itim ba kayo nito? | "in" bago ang kulay, at walang article: "in black", "in blue".
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | Puwede ko bang isukat ito? | "try on" = isukat (damit, sapatos). Hindi "fit": "Can I fit this?" ✗
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | Nasaan ang fitting room? (sukatan ng damit) | Sa Amerika, maririnig din ang "dressing room". Sa British English: "changing room".
It's too big. | /ɪts ˈtuː ˈbɪg/ | Masyadong malaki | Kung maliit: "It's too small." "too" = sobra, kaya may problema; "very" = talaga lang.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | Medyo masikip | Kung maluwag: "It's a bit loose."
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | Naka-sale ba ito? | "on sale" = may diskuwento; "for sale" = ipinagbibili. Madaling mapagpalit ang dalawa.
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | Puwede bang tumawad? | Sa mga karaniwang tindahan sa Amerika, hindi uso ang tawaran; sa flea market o sa mga segunda-mano lang.
I'll take it. | /aɪl ˈteɪk ɪt/ | Kukunin ko na ito | Sinasabi kapag nagpasya ka nang bumili. Kapag dalawa o higit pa: "I'll take them."
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | Cash ba o card ang bayad? | Siguradong maririnig mo ito sa kahera.
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | Tumatanggap ba kayo ng Apple Pay? | "take" = tumanggap (ng paraan ng bayad). Hindi tinatanggap sa ibang bansa ang mga e-wallet natin, kaya magdala ng card.
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | Puwede bang ibalik ang bayad ko? | Itago ang resibo; kadalasan ay hinahanap ito kapag magsasauli ka ng binili.
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | Gusto ko sanang ipapalit ito | Idagdag ang dahilan: "It's the wrong size."
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | Puwede bang ibalot ito na panregalo? | Hindi binibigkas ang "w" sa "wrap": /ˈræp/.
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | Kasama na ba ang tax diyan? | "Does" + base form: "include", walang -s. Sa Amerika, karaniwang hindi pa kasama ang tax sa presyong nakasulat, kaya mas mataas ang babayaran mo sa kahera.
`,
"Numero, oras at petsa": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | Anong oras na? | Sa hindi kakilala: "Excuse me, do you have the time?"
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | Alas-tres y medya na | Sa British English, "half past three" rin.
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | Menos kinse para alas-singko | "quarter" = 15 minuto. Puwede ring "four forty-five".
At noon | /ət ˈnuːn/ | Sa tanghaling-tapat (alas-dose) | "at" bago ang oras. Hatinggabi: "at midnight". Mas malinaw ang "noon" at "midnight" kaysa sa "12 p.m." at "12 a.m."
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | Anong petsa ngayon? | Kung araw ang itatanong: "What day is it today?"
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | Mayo 3 ngayon | Binabasa ang petsa bilang ordinal: "May third". Buwan muna bago araw sa Amerika, gaya sa atin: ang 5/3 ay Mayo 3.
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | Sa Oktubre ang kaarawan ko | "in" bago ang buwan, "on" bago ang petsa: "on October 5th". "on October" ✗
On Monday | /ɑːn ˈmʌndeɪ/ | Sa Lunes | "on" bago ang araw. Tuwing Lunes: "on Mondays" o "every Monday" (hindi "every Mondays").
Next weekend | /ˈnekst ˈwiːkend/ | Sa susunod na Sabado at Linggo | Walang preposition bago ang "next", "last" at "this": "in next weekend" ✗
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | Sa makalawa | Kamakalawa: "the day before yesterday".
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | Labintatlo o tatlumpu? | 13: nasa dulo ang stress, /ˌθɜːrˈtiːn/. 30: nasa unahan, /ˈθɜːrti/. Tiyakin lagi kapag presyo ang pinag-uusapan.
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | Labinlimang dolyar | Plural ang "dollars" pagkatapos ng numerong higit sa isa. Ang $15.50 ay binabasang "fifteen fifty".
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | Dalawang daan at limampu (250) | Sa Amerika, madalas walang "and": "two hundred fifty", gaya ng nakasanayan natin. Walang plural na -s ang "hundred" pagkatapos ng numero: "two hundreds" ✗
Ten thousand | /ˈten ˈθaʊznd/ | Sampung libo (10,000) | Walang plural na -s ang "thousand" pagkatapos ng numero: "ten thousands" ✗ May -s lang kapag walang tiyak na bilang: "thousands of people".
One million | /ˈwʌn ˈmɪljən/ | Isang milyon (1,000,000) | Ganoon din: "two million", walang -s. Pareho sa atin ang gamit ng kuwit at tuldok sa numero.
Twice a week | /ˈtwaɪs ə ˈwiːk/ | Dalawang beses sa isang linggo | "once" (isang beses), "twice" (dalawa), "three times" (tatlo). "Bawat" ang ibig sabihin ng article na "a" rito.
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | Pagkalipas ng sampung minuto | Kapag hinaharap ang pinag-uusapan, "in" = pagkalipas ng, hindi "sa loob ng". Plural: "minutes".
`,
"Kuwentuhan": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | Kumusta ang weekend mo? | Karaniwang tanong tuwing Lunes. Sagutin nang isa o dalawang pangungusap, tapos ibalik ang tanong.
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | Nakapagpahinga naman ako | Dito, "pretty" = medyo o talaga, hindi "maganda".
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | May plano ka ba sa weekend? | Karaniwang tanong tuwing Biyernes. Kung wala: "Not really, just relaxing."
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | Ang ganda ng panahon ngayon, ano? | Panahon ang pinakaligtas na panimula ng usapan sa Amerika. Bati sa atin ang "Kumain ka na?" at "Saan ka pupunta?", pero totoong tanong ang dating ng mga ito sa Ingles.
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | Napakalamig ngayon | Kapag mainit: "It's boiling!" o "It's so hot!"
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | Gaano ka na katagal nakatira dito? | Present perfect dahil tuloy pa hanggang ngayon. Sagot: "About three years." o "Since 2019."
Have you been to the Philippines? | /həv ju bɪn tə ðə ˈfɪlɪpiːnz/ | Nakapunta ka na ba sa Pilipinas? | "have been to" para sa karanasan; ito ang katumbas ng "nakapunta na". Huwag kalimutan ang article na "the" sa "the Philippines".
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | Ano ang libangan mo? | Mas natural kaysa sa "What's your hobby?"
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | May napanood ka bang magandang palabas nitong mga nakaraang araw? | "show" = serye o programa sa TV. Plural ang noun pagkatapos ng "any" sa tanong: "any good shows".
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | Mukhang masaya iyan | Sagot habang nakikinig. Puwede rin: "That sounds great!" May -s ang "sounds".
Same here. | /ˈseɪm ˈhɪr/ | Ako rin | Sa usapan, madalas "Same!" na lang.
Me neither. | /ˈmiː ˈniːðər/ | Hindi rin ako | Pagsang-ayon sa negatibong pangungusap: "I don't like it." → "Me neither." (hindi "Me too"). Puwedeng "Ako rin" ang sagot sa Tagalog sa dalawang kaso; sa Ingles, magkaiba: "Me too" sa positibo, "Me neither" sa negatibo.
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | Oo nga! / Sinabi mo pa! | Kaswal na paraan ng buong pagsang-ayon.
Oh, really? | /ˈoʊ ˈriːəli/ | Talaga? | Pagpapakita ng interes; pataas ang tono sa dulo.
By the way | /baɪ ðə ˈweɪ/ | Siyanga pala / Nga pala | Panlipat ng paksa. Sa text: "BTW".
How's work? | /ˈhaʊz ˈwɜːrk/ | Kumusta ang trabaho? | Bati sa kakilala. Sagot: "Busy, but good!" Hindi pang-kuwentuhan sa Amerika ang sahod, edad, timbang ("Tumaba ka!") at ang "Bakit wala ka pang asawa?"
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | Natuwa akong makausap ka | Magalang na pangwakas ng usapan.
`,
"Damdamin at reaksyon": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | Tuwang-tuwa ako para sa iyo! | Sinasabi kapag may magandang nangyari sa kausap.
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | Binabati kita! | Laging may -s sa dulo: "Congratulation!" ✗ Pinaikli: "Congrats!"
That's awesome! | /ˈðæts ˈɔːsəm/ | Ang galing! | Napakadalas na reaksyon ng mga Amerikano.
No way! | /ˈnoʊ ˈweɪ/ | Hindi nga! / Imposible! | Kapag nagulat ka. Puwede ring pagtanggi: "No way, I'm not doing that."
Seriously? | /ˈsɪriəsli/ | Seryoso? / Totoo ba? | Depende sa tono: gulat o inis.
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | Pagod na pagod na ako | Kapag ubos na ang lakas mo: "I'm exhausted."
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | Sobrang stress na ako | May -ed: "I'm stress." ✗ Mas natural din ito kaysa sa "I have stress".
I'm bored. | /aɪm ˈbɔːrd/ | Naiinip ako | Ingat: "I'm boring" = nakakainip akong tao. Ang -ed ang nararamdaman mo; ang -ing ang sanhi nito.
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | Sabik na ako | Para sa bagay na inaabangan mo. -ed dahil sarili mong damdamin: "I'm exciting." ✗
I'm nervous. | /aɪm ˈnɜːrvəs/ | Kinakabahan ako | Bago ang interview o presentasyon. Pampalakas ng loob sa iba: "Don't be nervous."
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | Sayang naman | Para sa maliit na panghihinayang. Sa mabigat na balita, gamitin ang susunod na card.
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | Ikinalulungkot kong marinig iyan | Pakikiramay ito, hindi paghingi ng tawad. Dito, "nalulungkot" ang ibig sabihin ng "sorry".
What a relief! | /ˈwʌt ə rɪˈliːf/ | Hay, salamat! / Nakahinga rin ako nang maluwag! | Kailangan ang article na "a" sa "What a…!" Mas natural kapag may kasamang "Phew!"
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | Diyos ko! / Naku! | Mas banayad na anyo ng "Oh my God". Sa text: "OMG".
I'm upset. | /aɪm ʌpˈset/ | Masama ang loob ko | Nasa pagitan ng galit at lungkot, kahawig ng "masama ang loob" o "nagtatampo".
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | Nakakainis naman iyan | Mabigat kapag sinabi nang harapan sa tao: "You're annoying."
I can't wait! | /aɪ ˈkænt ˈweɪt/ | Hindi na ako makapaghintay! | Ibig sabihin, sabik na sabik ka na.
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | Hindi naman iyon malaking bagay | Pampanatag sa taong nahihiya o humihingi ng paumanhin. May article: "a big deal".
`,
"Papuri at paghanga": `
You look great! | /ju ˈlʊk ˈgreɪt/ | Ang ganda ng itsura mo ngayon! | Para sa itsura: "You look…" Natural ito sa magkakakilala.
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | Ang ganda ng sapatos mo | "love" = gustong-gusto. Karaniwan sa Amerika na purihin kahit ang hindi kakilala. Plural: "shoes".
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | Bagay sa iyo ang kulay na iyan | "look good on" + tao = bagay sa kaniya. May -s ang "looks".
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | Ang ganda ng ngiti mo | Magiliw na papuri para sa taong kakilala mo na.
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | Nakakatawa ka talaga | "funny" = nakakatawa; "fun" = masayang kasama.
Great job! | /ˈgreɪt ˈdʒɑːb/ | Ang husay! / Magaling! | Sa trabaho o paaralan. Ganoon din ang "Nice work!"
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | Ipinagmamalaki kita | Para sa pamilya at kaibigan; sinasabi rin ng boss sa tauhan niya. "proud of", hindi "proud for".
You did it! | /ju ˈdɪd ɪt/ | Nagawa mo! | Para sa taong nakaabot sa layunin niya.
Your Tagalog is really good! | /jʊr təˈgɑːlɔːg ɪz ˈriːəli ˈgʊd/ | Ang galing mo nang mag-Tagalog! | Sabihin sa dayuhang nag-aaral ng wika natin; matutuwa siya. Walang article ang pangalan ng wika.
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | Magaling kang pumili | Papuri sa pagpili ng damit, musika o gamit. Walang article: "good taste".
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | Nasiyahan talaga akong makasama ka | Sa pagtatapos ng date o lakad. Anyong -ing pagkatapos ng "enjoy": "enjoyed spending".
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | Gusto mo bang magkape tayo minsan? | Sa usapan, "wanna" ang bigkas ng "want to". "grab" = kumain o uminom nang mabilisan. Walang article: "grab coffee".
I miss you. | /aɪ ˈmɪs ju/ | Nami-miss kita | Para sa taong malayo sa iyo: pamilya, kaibigan o kasintahan.
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | Mahalaga ka sa akin | Taos-pusong salita para sa kaibigan o kasintahan.
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | Iniligtas mo ako! / Hulog ka ng langit! | Pasasalamat na may kaunting pagmamalabis, kahit maliit lang ang naitulong.
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | Pinasaya mo ang araw ko! | Kapag may nagsabi o nagbigay sa iyo ng nakakatuwa.
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | Napakabait mo naman | Magalang na sagot kapag tinulungan o pinuri ka.
`,
"Trabaho at email": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | Sana ay nasa mabuti kang kalagayan | Pambungad ng pormal na email. Mas magaan: "I hope you're doing well." Simulan ang email sa "Dear Ms. Santos," o "Hi Ana,", hindi sa "Good day, Ma'am/Sir!"
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | Sumusulat ako para magtanong tungkol sa iskedyul | Sabihin agad ang layunin sa unang pangungusap: "I'm writing to" + layunin.
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | Inilakip ko ang report | Mas pormal at mas matigas ang "Please find attached…".
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | Paalala lang tungkol sa miting bukas | Malumanay na paraan ng pagpapaalala.
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | Sabihan mo ako kung may tanong ka | Pinakakaraniwang pangwakas ng email. Plural ang noun pagkatapos ng "any": "any questions".
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | Puwede mo bang ipadala sa akin ang file nang hindi lalampas sa Biyernes? | "by" = hindi lalampas sa (deadline); "until" = tuloy-tuloy hanggang. Sa labas ng Pilipinas, mas karaniwan ang "Could you…?" kaysa sa "Kindly…".
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | Pasensiya na at ngayon lang ako nakasagot | Puwede rin: "Thanks for your patience."
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | Salamat sa pagsagot mo | "get back to" = sumagot o bumalik sa usapan.
Best regards, | /ˈbest rɪˈgɑːrdz/ | Gumagalang, (pangwakas ng email) | Mas kaswal: "Best," o "Thanks,". May -s ang "regards" dito, pero wala sa "with regard to".
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | Magtakda tayo ng miting | Sa American English: /ˈskedʒuːl/. Sa British English: /ˈʃedjuːl/.
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | Mahuhuli ako nang kaunti | Pasabi habang nasa daan: "I'll be there in 10." Kung traffic ang dahilan: "There's a lot of traffic", hindi "It's traffic".
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | Puwede bang iurong sa alas-tres ang miting? | Kung paaagahin: "Can we move it up to 1?"
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | Babalikan kita tungkol diyan | Magagamit kapag hindi ka pa makasagot agad at kailangan mo ng panahon.
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | Puwede mo bang ipaliwanag sa akin nang isa-isa? | "walk through" = ipaliwanag nang hakbang-hakbang.
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | Mag-usap tayo sandali sa susunod na linggo | Ibig sabihin, maikling kumustahan tungkol sa takbo ng trabaho.
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | Kailan ang deadline? | Ganoon din: "When is this due?"
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | Sa bahay ako nagtatrabaho ngayong araw | Pinaikli: WFH. Walang article: "from home".
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | Wala akong pasok bukas | Kapag magli-leave ka: "I'm taking a day off tomorrow."
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | Salamat sa lahat ng pagsisikap mo | Hindi nabibilang ang "work" (trabaho), kaya walang "works" at walang "a". Madalas itong isulat sa dulo ng proyekto o sa email sa team.
`,
"Tawag, text at mga daglat": `
Hello, this is Ana. | /həˈloʊ ˈðɪs ɪz ˈɑːnə/ | Hello, si Ana ito | Sa telepono, "This is Ana", hindi "I'm Ana".
Can I speak to Mr. Santos? | /kən aɪ ˈspiːk tə ˈmɪstər ˈsæntoʊs/ | Puwede po bang makausap si Mr. Santos? | Mas magalang: "May I speak to…?" Apelyido ang kasunod ng "Mr." o "Ms.": "Mr. Santos", hindi "Mr. Paolo". Hindi rin ikinakabit ang "Sir" sa pangalan sa Amerika ("Sir Paolo").
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | Sino po sila? | Itinatanong ng sumagot ng telepono.
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | Sandali lang, ha | Kapag pinaghihintay mo ang kausap sa telepono. Sa atin, madalas sabihin ang "For a while"; hindi iyon maiintindihan sa Amerika.
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | Pasensiya na, putol-putol ang boses mo | "break up" = maputol-putol ang linya. May isa pa itong kahulugan: maghiwalay ang magkasintahan.
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | Puwede bang tawagan kita ulit mamaya? | Kapag abala ka: "I'm in a meeting. Can I call you back?"
I'll text you. | /aɪl ˈtekst ju/ | Ite-text kita | Verb din ang "text" sa Ingles, gaya sa atin.
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | Papunta na ako | Sa text: OMW; OTW ang mas kilala sa atin. Sabihin lang ito kapag nakaalis ka na talaga.
LOL | /ˌel oʊ ˈel/ | haha (laughing out loud) | Hindi talaga humahalakhak ang sumulat nito; parang "haha" o "hehe" lang sa chat.
BRB | /ˌbiː ɑːr ˈbiː/ | babalik agad ako (be right back) | Kapag aalis ka sandali sa chat o laro.
BTW | /ˌbiː tiː ˈdʌbəljuː/ | siyanga pala (by the way) | Panlipat ng paksa.
TBH | /ˌtiː biː ˈeɪtʃ/ | sa totoo lang (to be honest) | Puwede sa unahan o sa dulo ng pangungusap.
IDK | /ˌaɪ diː ˈkeɪ/ | ewan ko (I don't know) | Madalas isulat nang maliliit na titik: "idk".
OMG | /ˌoʊ em ˈdʒiː/ | Diyos ko (oh my God) | Binibigkas din nang isa-isang titik sa usapan: "O-M-G!"
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | sa lalong madaling panahon (as soon as possible) | Karaniwan sa trabaho. Sa boss o kliyente, mas magalang na magbigay ng tiyak na petsa.
TTYL | /ˌtiː tiː waɪ ˈel/ | usap tayo mamaya (talk to you later) | Pangwakas ng chat.
NVM | /ˌen viː ˈem/ | hayaan mo na (never mind) | Kapag binabawi mo ang tanong mo.
FYI | /ˌef waɪ ˈaɪ/ | para alam mo (for your information) | Madalas sa email at chat sa trabaho.
`,
"Biyahe (airport at hotel)": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | Heto ang pasaporte ko | Sinasabi habang iniaabot ito sa check-in o sa immigration.
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | Nandito ako para mamasyal | Sagot sa tanong ng immigration: "What's the purpose of your visit?" Kung trabaho ang dahilan: "I'm here for work."
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | Isang linggo ako rito | Sagot sa "How long are you staying?"
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | Sa Hilton ako tutuloy | Sagot sa "Where are you staying?" May article na "the" ang pangalan ng maraming hotel: "the Hilton".
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | Sa bintana o sa pasilyo? | Hindi binibigkas ang "s" sa "aisle": /ˈaɪl/.
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | Gusto ko po sana ng upuan sa pasilyo | Article na "an" dahil tunog na vowel ang simula ng "aisle". Sa bintana: "a window seat".
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | Nasaan ang kuhanan ng bagahe? | Sa British English: "baggage reclaim".
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | Nawawala ang bagahe ko | Hindi nabibilang ang "luggage" at "baggage": walang "luggages", at "is" ang verb. Kung bibilangin: "two bags" o "two pieces of luggage".
I have a reservation under Santos. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈsæntoʊs/ | May reservation ako sa pangalang Santos | "under" + pangalan ng nagpareserba. Kung kailangan, baybayin: "S-A-N-T-O-S".
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | Anong oras ang check-out? | Kung gusto mong mahuli nang kaunti: "Can I get a late check-out?"
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | Puwede bang mag-check in nang maaga? | Pinagdudugtong ang bigkas: "check in".
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | Kasama na ba ang almusal? | /ˈbrekfəst/ ang bigkas, hindi "break" + "fast". Walang article ang "breakfast", "lunch" at "dinner".
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | Sira ang aircon | "aircon" sa atin; "air conditioner" o "AC" sa Amerika.
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | Puwede po bang makahingi ng dagdag na tuwalya? | Plural ang noun pagkatapos ng "some" kapag nabibilang: "some towels".
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | Puwede bang iwan muna rito ang mga bag ko hanggang alas-tres? | Magagamit pagkatapos mag-check out. "hold" = itabi muna para sa iyo.
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | Na-delay ang flight ko | Kapag kinansela: "canceled". /d/ ang bigkas ng -ed dito: /dɪˈleɪd/.
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | Nasaan ang gate 12? | Binabasa: "gate twelve". Walang article kapag may numero: "the gate 12" ✗
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | Kailangan ko bang ilabas ang laptop ko? | Itinatanong sa security check.
`,
"Ospital at emergency": `
Help! | /ˈhelp/ | Saklolo! / Tulong! | Isinisigaw kapag may emergency.
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | Tumawag kayo sa 911! | 911 ang emergency number sa Amerika, at sa Pilipinas din. Binabasa nang isa-isa: "nine one one".
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | Kailangan ko ng doktor | Kapag malubha: "I need an ambulance."
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | Masama ang pakiramdam ko | Pinakakaraniwang paraan ng pagsasabi nito.
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | Masakit ang ulo ko | May article ang mga sakit na ito: "a headache", "a stomachache", "a toothache".
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | May lagnat ako | May article: "a fever". Sa "fever", /f/ at /v/ ang mga consonant: ngipin sa ibabang labi, hindi /p/ at /b/.
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | Masakit ang tiyan ko | Bahagi ng katawan + "hurts". Bigkasin ang -ts sa dulo; madalas itong malaglag.
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | Masakit ang lalamunan ko | "sore" = mahapdi o masakit. "throat" ang lalamunan; "neck" ang leeg.
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | Nahihilo ako | Kung naduduwal ka: "I feel sick." o "I feel nauseous." /z/ ang nasa gitna ng "dizzy", hindi /s/.
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | Natapilok ako / Napilay ang bukung-bukong ko | "sprain" = mapilay dahil sa maling tapak o pihit. "wrist" ang pulso.
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | May botika ba malapit dito? | Sa Amerika, "drugstore" din ang tawag (halimbawa, CVS).
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | Kailangan ko ba ng reseta? | "over-the-counter" ang tawag sa gamot na nabibili nang walang reseta.
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | Nawala ang pitaka ko | Kung cellphone ang nawala: "phone". "lost and found" ang tanggapan ng mga nawawalang gamit.
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | May nagnakaw ng cellphone ko | "stole" ang past form ng "steal". Tapos na ang pangyayari, kaya past tense.
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | Nasaan ang istasyon ng pulis? | Nasa ikalawang pantig ang stress: /pəˈliːs/.
I need to contact the Philippine embassy. | /aɪ ˈniːd tə ˈkɑːntækt ðə ˈfɪlɪpiːn ˈembəsi/ | Kailangan kong makipag-ugnayan sa embahada ng Pilipinas | Mahalaga kapag nawala ang pasaporte mo. "Philippine" ang adjective para sa bansa; "Filipino" ang tao.
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | May travel insurance ako | Hindi nabibilang ang "insurance", kaya walang article. Mahal ang pagpapagamot sa Amerika, kaya kumuha nito bago umalis.
`,
"Mga phrasal verb": `
pick up | /ˈpɪk ˈʌp/ | sunduin / pulutin | "I'll pick you up at 7." Nasa gitna ang pronoun (you, it).
give up | /ˈgɪv ˈʌp/ | sumuko | "Don't give up!" Kapag may ititigil kang gawi, anyong -ing ang kasunod: "give up smoking".
figure out | /ˈfɪgjər ˈaʊt/ | maintindihan / malaman kung paano | "I can't figure out this app." (Hindi ko maintindihan kung paano gamitin ang app na ito.)
find out | /ˈfaɪnd ˈaʊt/ | malaman / matuklasan | Para sa impormasyong nalaman mo. Ang "figure out" naman ay pag-iisip para malutas ang isang problema.
look for | /ˈlʊk fɔːr/ | hanapin | "I'm looking for my keys." Kapag nakita mo na: "find".
look after | /ˈlʊk ˈæftər/ | alagaan | "Can you look after my cat?" Sa Amerika, madalas din ang "take care of".
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | abangan nang may pananabik | Noun o anyong -ing ang kasunod ng "to": "I'm looking forward to seeing you."
run out of | /ˈrʌn ˈaʊt əv/ | maubusan ng | Ang naubos ang kasunod ng "of": "We ran out of rice." (Naubusan kami ng bigas.)
turn on | /ˈtɜːrn ˈɑːn/ | buksan (ilaw, TV, aircon) | "buksan ang ilaw" sa Tagalog, pero hindi "open the light" ✗ sa Ingles. Nasa gitna ang pronoun: "Turn it on."
turn off | /ˈtɜːrn ˈɔːf/ | patayin (ilaw, TV, aircon) | Hindi "close the light" ✗. Nasa gitna ang pronoun: "Turn it off." ("turn off it" ✗)
turn down | /ˈtɜːrn ˈdaʊn/ | tanggihan / hinaan | Parehong karaniwan: "She turned down the offer." at "Turn it down!"
put off | /ˈpʊt ˈɔːf/ | ipagpaliban | Mas karaniwan sa usapan kaysa sa "postpone": "Stop putting it off!"
show up | /ˈʃoʊ ˈʌp/ | sumipot / dumating | "He didn't show up to the party." (Hindi siya sumipot sa party.)
hang out | /ˈhæŋ ˈaʊt/ | tumambay / gumala kasama ang mga kaibigan | Para sa pagsasama-sama ng magkakaibigan. Sa atin, "gimmick" ang tawag dito; iba ang kahulugan ng salitang iyon sa Amerika.
check out | /ˈtʃek ˈaʊt/ | tingnan / silipin | "Check out this video!" Ginagamit din sa pag-alis sa hotel.
work out | /ˈwɜːrk ˈaʊt/ | mag-ehersisyo / maging maayos (ang kinalabasan) | "I work out every day." at "It'll work out." (Maaayos din iyan.)
come up with | /ˈkʌm ˈʌp wɪð/ | makaisip ng (ideya) | Para sa ideya, dahilan o solusyon: "She came up with a great idea."
get along with | /ˈget əˈlɔːŋ wɪð/ | makasundo | "I get along with my coworkers." (Kasundo ko ang mga katrabaho ko.)
calm down | /ˈkɑːm ˈdaʊn/ | kumalma / huminahon | Hindi binibigkas ang "l" sa "calm". Kapag sinabi mo ito sa taong galit, baka lalo siyang magalit.
set up | /ˈset ˈʌp/ | ikabit / ihanda / ayusin | Para sa gamit o miting: "Can you help me set up my printer?"
break up | /ˈbreɪk ˈʌp/ | maghiwalay (ang magkasintahan) | "They broke up last month." Kung kanino: "break up with".
fill out | /ˈfɪl ˈaʊt/ | sagutan (ang form) | "Please fill out this form." Hindi "fill up": "fill up" = punuin (ang tangke, ang baso). Sa British English: "fill in".
grow up | /ˈgroʊ ˈʌp/ | lumaki | "I grew up in Cebu." (Sa Cebu ako lumaki.)
wake up | /ˈweɪk ˈʌp/ | magising | "wake up" ang pagdilat ng mata; "get up" ang pagbangon sa higaan.
`,
"Ingat sa bigkas": `
rice | /ˈraɪs/ | kanin / bigas | Kaya mo na ang R at L dahil pareho silang nasa Tagalog. Ang kaibahan: sa American na "r", hindi pumipitik ang dila at hindi ito dumidikit kahit saan.
lice | /ˈlaɪs/ | mga kuto | L: dumidikit ang dulo ng dila sa likod ng mga ngipin sa itaas, gaya ng "l" natin.
right | /ˈraɪt/ | kanan / tama | Nagsisimula sa R. Itigil ang /t/ sa dulo nang walang dagdag na vowel.
light | /ˈlaɪt/ | ilaw / magaan | Nagsisimula sa L. /aɪ/ ang vowel, parang "ay" sa "bahay".
fan | /ˈfæn/ | bentilador / tagahanga | F: idikit ang mga ngipin sa itaas sa ibabang labi at magpalabas ng hangin. Kapag nagdikit ang dalawang labi, "pan" ang lalabas. /æ/ ang vowel: ibuka nang maluwang ang bibig.
pan | /ˈpæn/ | kawali | P: magdikit ang dalawang labi. May ingat din sa kabilang panig: huwag gawing F ang totoong P ("pretty", hindi "fretty").
coffee | /ˈkɔːfi/ | kape | /f/ sa gitna: ngipin sa labi. Kapag /p/ ang nasabi mo, "copy" ang maririnig.
copy | /ˈkɑːpi/ | kopya / kopyahin | /p/ sa gitna. /ɑː/ ang vowel sa American English, mas bukas ang bibig kaysa sa "o" natin.
think | /ˈθɪŋk/ | mag-isip / sa palagay | /θ/: dulo ng dila sa pagitan ng mga ngipin, tapos hangin. Hindi "tink" at hindi rin "sink".
sink | /ˈsɪŋk/ | lababo / lumubog | /s/: nasa likod ng mga ngipin ang dila, hindi lumalabas.
three | /ˈθriː/ | tatlo | Dila sa pagitan ng mga ngipin. Kapag /t/ ang nasabi mo, "tree" ang maririnig.
tree | /ˈtriː/ | puno | Karaniwang /t/ na sinusundan ng /r/. Sa American English, medyo parang "chree" ang dating.
this | /ˈðɪs/ | ito | /ð/: dila sa pagitan ng mga ngipin, may boses. Hindi "dis". /s/ naman ang dulo.
very | /ˈveri/ | talaga / napaka- | V: ngipin sa ibabang labi, may boses. Kapag nagdikit ang dalawang labi, "berry" ang lalabas.
berry | /ˈberi/ | maliit na prutas (gaya ng strawberry) | B: magdikit ang dalawang labi.
vote | /ˈvoʊt/ | bumoto | Nagsisimula sa V; ihiwalay sa "boat". /oʊ/ ang vowel: dumudulas mula "o" papuntang "u".
boat | /ˈboʊt/ | bangka | Nagsisimula sa B. Itigil ang /t/ sa dulo nang walang dagdag na vowel.
walk | /ˈwɔːk/ | maglakad | Hindi binibigkas ang "l". /ɔː/ ang vowel, bilugan ang labi.
work | /ˈwɜːrk/ | magtrabaho | /ɜːr/: iisang tunog na may "r", hindi "o" ng Tagalog. Madaling mapagpalit sa "walk".
beach | /ˈbiːtʃ/ | dalampasigan | Mahaba at banat ang /iː/. Kapag maikli at maluwag, mura ang maririnig.
leave | /ˈliːv/ | umalis | Mahaba at banat na /iː/, at /v/ sa dulo. Ihiwalay sa "live".
live | /ˈlɪv/ | tumira / mabuhay | Maikli at maluwag na /ɪ/. Iisa lang ang "i" sa Tagalog, kaya sanayin ang dalawang ito nang magkatabi.
banana | /bəˈnænə/ | saging | Nasa gitna ang stress, at schwa ang una at huling vowel: /bəˈnænə/. Hindi tatlong buong "a" gaya ng bigkas natin.
hotel | /hoʊˈtel/ | hotel (tuluyan) | Nasa dulo ang stress: /hoʊˈtel/.
milk | /ˈmɪlk/ | gatas | Bigkasin nang magkasunod ang "l" at "k", at itigil sa /k/. Maikling /ɪ/ ang vowel, hindi /iː/.
McDonald's | /məkˈdɑːnldz/ | McDo (kainan) | Nasa "Don" ang stress, at /z/ ang dulo: /məkˈdɑːnldz/. Hindi maiintindihan ang "McDo" sa Amerika.
ship | /ˈʃɪp/ | barko | Maikli at maluwag na /ɪ/. Ihiwalay sa "sheep".
sheep | /ˈʃiːp/ | tupa | Mahaba at banat na /iː/, nakangiti ang labi. Pareho ang singular at plural: "one sheep", "two sheep".
full | /ˈfʊl/ | puno (sa laman) / busog | Maikli at maluwag na /ʊ/. Iisa lang ang "u" sa Tagalog, kaya madalas itong maging "fool".
fool | /ˈfuːl/ | hangal / lokohin | Mahaba at banat na /uː/, nakausli ang labi.
cat | /ˈkæt/ | pusa | /æ/: ibuka nang maluwang ang bibig at hilahin pagilid ang labi. Hindi ito ang "a" ng Tagalog.
cut | /ˈkʌt/ | hiwa / gupitin | /ʌ/: maikli, nakarelaks ang bibig at halos hindi bumubuka. Sa bigkas natin, madalas magkatunog ang "cat" at "cut".
zoo | /ˈzuː/ | zoo (pasyalang may mga hayop) | /z/: parang /s/ pero may boses; damhin ang ugong sa lalamunan. Kapag walang boses, "Sue" ang lalabas.
Sue | /ˈsuː/ | Sue (pangalan ng babae) | /s/ na walang boses. Ang "sue" na maliit ang unang titik ay "magdemanda".
his | /ˈhɪz/ | kaniya (sa lalaki) | /z/ ang dulo: /ˈhɪz/. Madalas itong mabigkas na "hiss". Para sa lalaki ang "his"; "her" para sa babae.
hiss | /ˈhɪs/ | sagitsit (ng ahas) | /s/ ang dulo, walang boses.
`,
"Mga idyoma sa Ingles": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | Sisiw lang iyan | Napakadali: "The test was a piece of cake."
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | Nasa alapaap ako sa tuwa | Sinasabi kapag sobrang saya mo.
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | Napakamahal niyan | Para bang braso at binti ang ibabayad mo.
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | Hanggang dito na lang muna tayo ngayong araw | Pangwakas ng trabaho o pag-aaral sa araw na iyon. Natural din sa miting.
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | Medyo masama ang pakiramdam ko | Para sa bahagyang sakit, gaya ng parating na sipon. Walang kinalaman sa panahon.
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | Kailangan ko nang magsunog ng kilay | Sinasabi bago ang exam. Hindi literal na hahampasin ang libro.
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | Bihirang-bihira | "I only eat fast food once in a blue moon."
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | Mabuti nang huli kaysa hindi kailanman | Pampalakas ng loob sa taong huli nang nagsimula. Kahawig ng "Huli man daw at magaling, naihahabol din."
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | Huwag ka nang magpaligoy-ligoy | Ibig sabihin, sabihin na agad ang punto.
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | Hindi ko iyan hilig | Magalang na paraan ng pagsasabing hindi mo gusto ang isang bagay.
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | Simulan na natin | Sa pagsisimula ng miting o proyekto.
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | Sana palarin ka / Ipagdarasal ko iyan | Madalas may kasamang kilos: pinagkrus na hintuturo at gitnang daliri.
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | Kapit lang | Para sa taong may pinagdaraanan. Halos katumbas ng "Kapit lang!" natin.
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | Hayan na pala siya, pinag-uusapan lang natin! | Kapag biglang dumating ang taong pinag-uusapan ninyo. Biro ito, hindi insulto.
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | Ikaw na ang magpapasya | Galing sa tennis: nasa panig mo na ang bola.
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | Hindi ko ipagsasabi / Tikom ang bibig ko | Pangako na itatago mo ang sikreto.
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | Nasa dulo na ng dila ko | Kapag alam mo ang salita pero hindi mo maalala sa sandaling iyon. Pareho ang larawan sa Tagalog.
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | Nakikinig ako nang mabuti | Ibig sabihin, "Sige, magkuwento ka, nakikinig ako."
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | Kapag pumuti na ang uwak | Para sa bagay na hindi kailanman mangyayari: "He'll clean his room when pigs fly."
`,
"Pelikula, serye at slang": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | Ikuwento mo na ang tsismis | "tea" = tsismis. Slang ng magkakaibigan, parang "Ano ang chika?"
No cap. | /ˈnoʊ ˈkæp/ | Totoo, walang halong biro | Slang ng kabataan. "cap" = kasinungalingan.
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | Ang lupit ng kantang iyan | "slap" = napakaganda (ng kanta). Ginagamit din sa pagkain. May -s dahil "song" ang subject.
I'm dead. | /aɪm ˈded/ | Tawang-tawa ako / Patay ako sa kakatawa | Sa chat, madalas may kasamang 💀. Hindi literal.
Low-key | /ˌloʊˈkiː/ | medyo / pasimple | "I low-key love this song." Kabaligtaran: "high-key" (lantaran).
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | Adik na adik ako sa kantang ito | "obsessed" = lubhang nahuhumaling; kadalasang positibo. "with" ang kasunod, hindi "to".
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | Tungkol saan iyon? | Tanong tungkol sa kuwento ng pelikula o serye.
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | Walang spoiler, ha! | Ganoon din ang "Don't spoil it!"
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | Tinapos ko nang tuloy-tuloy ang buong season | "binge-watch" = manood ng sunod-sunod na episode.
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | Ang ganda ng ending | Kung hindi maganda: "The ending was disappointing."
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | Dapat mong mapanood ito | Para sa matinding rekomendasyon.
Plot twist! | /ˈplɑːt ˈtwɪst/ | Biglang baligtad ang kuwento! | Ginagamit din sa totoong buhay kapag may nangyaring hindi inaasahan.
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | Hindi naman iyon kasingganda ng sinasabi nila | Kabaligtaran: "underrated" (mas maganda kaysa sa inaakala ng marami).
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | Kinilabutan ako sa eksenang iyon | Kilabot dahil sa ganda, kaba o takot.
I'm a huge fan! | /aɪm ə ˈhjuːdʒ ˈfæn/ | Idol na idol ko! / Solid fan ako! | "a fan of" + banda o artista: "I'm a huge fan of Ben&Ben." May article na "a"; "I'm huge fan." ✗
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | Nagbibiro ka ba? / Seryoso ka ba? | Madalas na linya sa pelikula at serye. Puwedeng gulat o inis.
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | Ako ang bahala sa iyo / Nandito lang ako para sa iyo | Ibig sabihin, susuportahan at ipagtatanggol kita.
Gotcha. | /ˈgɑːtʃə/ | Kuha ko / Huli ka! | Pinaikling "got you". Pinakamadalas na gamit: "naintindihan ko".
Let's do this! | /ˈlets ˈduː ˈðɪs/ | Tara, gawin na natin! / Laban! | Pampagana bago magsimula.
`,
"Alpabeto": `
A | /ˈeɪ/ | titik A (maliit: a) | Gaya sa "apple". /ˈeɪ/ ang pangalan ng titik sa Ingles, hindi "a" ng abakada.
B | /ˈbiː/ | titik B (maliit: b) | Gaya sa "boy": "B as in boy". Magdikit ang dalawang labi; ihiwalay sa V.
C | /ˈsiː/ | titik C (maliit: c) | Gaya sa "coffee". Katunog ng salitang "see". Sa pagbaybay, ihiwalay sa S.
D | /ˈdiː/ | titik D (maliit: d) | Gaya sa "dog". Sa telepono, madaling mapagkamalang B o T, kaya tiyakin: "D as in dog".
E | /ˈiː/ | titik E (maliit: e) | Gaya sa "email". /ˈiː/ ang pangalan nito, parang "i" natin; ang /ˈaɪ/ ay pangalan ng I.
F | /ˈef/ | titik F (maliit: f) | Gaya sa "fan". Tapusin sa /f/, ngipin sa ibabang labi, hindi sa /p/. "double F" ang "ff" sa "coffee".
G | /ˈdʒiː/ | titik G (maliit: g) | Gaya sa "go". /ˈdʒiː/ ang pangalan; huwag ipagpalit sa J, na /ˈdʒeɪ/.
H | /ˈeɪtʃ/ | titik H (maliit: h) | Gaya sa "hotel". Tunog na vowel ang simula ng pangalan nito, kaya "an H".
I | /ˈaɪ/ | titik I (maliit: i) | Gaya sa "idea". Katunog ng "I" (ako). Kapag "i" ng Tagalog ang sinabi mo, E ang maririnig.
J | /ˈdʒeɪ/ | titik J (maliit: j) | Gaya sa "job". Katugma ng A at K ang pangalan nito. Madaling mapagpalit sa G.
K | /ˈkeɪ/ | titik K (maliit: k) | Gaya sa "key". Katunog ng dulo ng "OK".
L | /ˈel/ | titik L (maliit: l) | Gaya sa "light". "double L" ang "ll" sa "hello".
M | /ˈem/ | titik M (maliit: m) | Gaya sa "milk". Sa telepono, madaling mapagkamalang N, kaya tiyakin: "M as in Mary".
N | /ˈen/ | titik N (maliit: n) | Gaya sa "name". Tiyakin sa telepono: "N as in name". Tunog na vowel ang simula, kaya "an N".
O | /ˈoʊ/ | titik O (maliit: o) | Gaya sa "OK". /ˈoʊ/: dumudulas mula "o" papuntang "u". Sa numero ng telepono, madalas basahing "O" ang zero.
P | /ˈpiː/ | titik P (maliit: p) | Gaya sa "pan". Magdikit ang dalawang labi. Ihiwalay sa F kapag nagbabaybay.
Q | /ˈkjuː/ | titik Q (maliit: q) | Gaya sa "question". Halos laging U ang kasunod nito sa mga salita.
R | /ˈɑːr/ | titik R (maliit: r) | Gaya sa "rice". /ˈɑːr/: bukas na "a" na sinusundan ng American na "r", hindi pinapitik ang dila.
S | /ˈes/ | titik S (maliit: s) | Gaya sa "sorry". Ang /ˈsiː/ ay pangalan ng C, hindi ng S. "double S" ang "ss" sa "class".
T | /ˈtiː/ | titik T (maliit: t) | Gaya sa "taxi". Malaking titik: "capital T". Dalawang magkasunod: "double T".
U | /ˈjuː/ | titik U (maliit: u) | Gaya sa "university". Katunog ng "you". Nagsisimula sa /j/, kaya "a U", hindi "an U".
V | /ˈviː/ | titik V (maliit: v) | Gaya sa "very". Ngipin sa ibabang labi, may boses. Kapag nagdikit ang mga labi, B ang maririnig.
W | /ˈdʌbəljuː/ | titik W (maliit: w) | Gaya sa "water". "double u" ang pangalan nito (dalawang U), tatlong pantig.
X | /ˈeks/ | titik X (maliit: x) | Gaya sa "X-ray". Tunog na vowel ang simula, kaya "an X". Mas madalas itong nasa dulo ng salita, gaya ng "box".
Y | /ˈwaɪ/ | titik Y (maliit: y) | Gaya sa "yes". Katunog ng salitang "why".
Z | /ˈziː/ | titik Z (maliit: z) | Gaya sa "zero". "zee" sa American English, "zed" sa British English. Patunugin ang /z/ para hindi maging C.
`,
"Mga bitag ng Ingles-Pinoy": `
Where's the bathroom? | /ˈwerz ðə ˈbæθruːm/ | Nasaan ang CR? | Sa Pilipinas: "CR" o "comfort room". Sa American English: "bathroom" sa bahay, "restroom" sa pampublikong lugar. Hindi kilala ang "CR" sa labas ng Pilipinas.
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | Buksan mo ang ilaw | Sa Pilipinas: "open the light", mula sa "buksan ang ilaw". Sa American English, "turn on" ang gamit sa ilaw, TV at aircon; ang "open" ay para sa pinto, bintana at kahon.
Turn off the TV. | /ˈtɜːrn ˈɔːf ðə ˌtiː ˈviː/ | Patayin mo ang TV | Sa Pilipinas: "close the TV" o "close the light". Sa American English: "turn off". Ang "close" ay para sa pinto, bintana at libro.
There's a power outage. | /ðerz ə ˈpaʊər ˈaʊtɪdʒ/ | May brownout | Sa Pilipinas: "brownout" ang tawag sa pagkawala ng kuryente. Sa American English: "power outage" o "blackout"; ang "brownout" doon ay paghina lang ng kuryente.
It's in the fridge. | /ɪts ɪn ðə ˈfrɪdʒ/ | Nasa ref iyan | Sa Pilipinas: "ref". Sa American English: "fridge" o "refrigerator". Ang "ref" doon ay "referee", ang tagahatol sa laro.
Can you turn on the AC? | /kən ju ˈtɜːrn ˈɑːn ði ˌeɪ ˈsiː/ | Puwede mo bang buksan ang aircon? | Sa Pilipinas: "aircon". Sa American English: "air conditioner" o "AC". Article na "the" dahil alam ninyong dalawa kung aling aircon ang tinutukoy.
I need new sneakers. | /aɪ ˈniːd ˈnuː ˈsniːkərz/ | Kailangan ko ng bagong rubber shoes | Sa Pilipinas: "rubber shoes". Sa American English: "sneakers". Plural at walang article dahil hindi tiyak kung alin.
I'll get off here. | /aɪl ˈget ˈɔːf ˈhɪr/ | Dito na lang ako bababa | Sa Pilipinas: "I'll go down here", mula sa "bababa ako". Sa American English: "get off" sa bus, tren at jeep; "get out of" sa kotse at taksi.
There's a lot of traffic. | /ðerz ə ˈlɑːt əv ˈtræfɪk/ | Matindi ang traffic | Sa Pilipinas: "It's traffic" o "It's so traffic". Sa American English, noun ang "traffic", hindi adjective. Hindi rin ito nabibilang: walang "a traffic" at walang "traffics". Puwede rin: "Traffic is heavy."
salvage | /ˈsælvɪdʒ/ | isalba / iligtas ang mapapakinabangan pa | Sa Pilipinas, sa balita: "salvage" = patayin nang walang paglilitis. Sa American English, halos kabaligtaran: iligtas ang isang bagay mula sa pagkasira. "They salvaged the ship."
bold | /ˈboʊld/ | matapang / malakas ang loob | Sa Pilipinas: "bold" = malaswa o hubad ("bold movie"). Sa American English: matapang ("a bold decision") o makapal na titik ("bold text").
Let's go out tonight. | /ˈlets ˈgoʊ ˈaʊt təˈnaɪt/ | Gumimik tayo mamayang gabi | Sa Pilipinas: "gimmick" = lakad o night out kasama ang mga kaibigan. Sa American English, "gimmick" = pakulo para makaakit ng mamimili. Sabihin: "go out" o "hang out".
Can you make a copy of this? | /kən ju ˈmeɪk ə ˈkɑːpi əv ˈðɪs/ | Puwede mo ba itong ipa-xerox? | Sa Pilipinas: "xerox", pangalan ng brand na naging verb. Sa American English: "make a copy" o "photocopy".
I'm out of prepaid minutes. | /aɪm ˈaʊt əv ˌpriːˈpeɪd ˈmɪnɪts/ | Wala na akong load | Sa Pilipinas: "load". Walang iisang katumbas sa American English: "prepaid minutes", "data" o "credit". Ang "load" doon ay karga o dami ng trabaho.
I take the bus to work. | /aɪ ˈteɪk ðə ˈbʌs tə ˈwɜːrk/ | Nagbu-bus ako papasok sa trabaho | Sa Pilipinas: "commute" = sumakay ng pampublikong sasakyan. Sa American English, "commute" = bumiyahe papasok sa trabaho, kahit sariling kotse ang gamit. Kaya sabihin kung ano ang sinasakyan mo: "take the bus", "take the train".
Do you have bottled water? | /də ju ˈhæv ˈbɑːtld ˈwɔːtər/ | May mineral water ba kayo? | Sa Pilipinas: "mineral water" ang tawag sa kahit anong tubig na nakabote. Sa American English: "bottled water". Hindi nabibilang ang "water", kaya walang article.
Do you have a marker? | /də ju ˈhæv ə ˈmɑːrkər/ | May pentel pen ka ba? | Sa Pilipinas: "pentel pen", pangalan ng brand. Sa American English: "marker"; "permanent marker" kung hindi nabubura.
We slept in a bunk bed. | /wi ˈslept ɪn ə ˈbʌŋk ˈbed/ | Sa double-deck kami natulog | Sa Pilipinas: "double-deck". Sa American English: "bunk bed". Ang "double-decker" doon ay bus na may dalawang palapag.
My watch is five minutes fast. | /maɪ ˈwɑːtʃ ɪz ˈfaɪv ˈmɪnɪts ˈfæst/ | Advanced nang limang minuto ang relo ko | Sa Pilipinas: "advanced" ang relo. Sa American English: "fast" kapag nauuna ito, "slow" kapag nahuhuli. Ang "advanced" doon ay "mataas ang antas".
We graduated the same year. | /wi ˈgrædʒueɪtɪd ðə ˈseɪm ˈjɪr/ | Magka-batch kami | Sa Pilipinas: "batchmate". Walang ganitong salita sa American English; sabihin: "We graduated the same year" o "We were in the same class".
What's the main dish? | /ˈwʌts ðə ˈmeɪn ˈdɪʃ/ | Ano ang ulam? | Sa Pilipinas: "viand" para sa ulam. Halos hindi na ginagamit ang salitang iyon sa American English. Sabihin: "dish" o "main dish", o pangalanan ang pagkain: "chicken adobo with rice".
I made a mistake. | /aɪ ˈmeɪd ə mɪˈsteɪk/ | Nagkamali ako | Madalas marinig: "I committed a mistake" ✗. "make a mistake" ang tambalan sa Ingles; ang "commit" ay para sa krimen ("commit a crime").
In my opinion | /ɪn maɪ əˈpɪnjən/ | Sa palagay ko / Sa tingin ko | Madalas marinig: "for my opinion" ✗. Tama: "In my opinion" o, mas simple, "I think".
This one is better. | /ˈðɪs ˈwʌn ɪz ˈbetər/ | Mas maganda ito | "more better" ✗, "more harder" ✗: comparative na ang "better" at "harder", kaya hindi na dinadagdagan ng "more". Parang "mas" na dinoble.
I have a lot of luggage. | /aɪ ˈhæv ə ˈlɑːt əv ˈlʌgɪdʒ/ | Marami akong bagahe | "luggages" ✗, "baggages" ✗: hindi nabibilang ang "luggage" at "baggage", kaya walang plural na -s. Kung bibilangin: "two bags" o "two pieces of luggage".
Regarding your email | /rɪˈgɑːrdɪŋ jʊr ˈiːmeɪl/ | Tungkol sa email mo | Madalas marinig: "with regards to" ✗. Tama: "with regard to" (walang -s) o, mas maikli, "regarding". Ang "regards" na may -s ay pagbati: "Best regards".
I shared it with my friends. | /aɪ ˈʃerd ɪt wɪð maɪ ˈfrendz/ | Ibinahagi ko ito sa mga kaibigan ko | "share to" ✗: iisang "sa" lang sa Tagalog, pero "with" ang kasama ng "share" sa Ingles.
See you in January. | /ˈsiː ju ɪn ˈdʒænjueri/ | Kita tayo sa Enero | "on January" ✗: "in" bago ang buwan, "on" bago ang araw o petsa ("on January 5th"), "at" bago ang oras.
Just a moment, please. | /ˈdʒʌst ə ˈmoʊmənt ˈpliːz/ | Sandali lang po | Sa Pilipinas: "For a while" sa telepono, mula sa "sandali lang". Sa American English, "for a while" = matagal-tagal. Sabihin: "Just a moment, please" o "Hold on, please".
I'm heading out. | /aɪm ˈhedɪŋ ˈaʊt/ | Mauna na ako | Sa Pilipinas: "I'll go ahead", mula sa "mauna na ako". Kapag mag-isa, karaniwang "sige, ituloy mo" ang dating ng "go ahead" sa American English; kapag aalis ka na, mas malinaw ang "I'm heading out" o "I have to go".
cope with | /ˈkoʊp wɪð/ | harapin / kayanin (ang problema) | "cope up with" ✗: walang "up". "She is coping with stress."
result in | /rɪˈzʌlt ɪn/ | humantong sa / magbunga ng | "result to" ✗. "The delay resulted in a loss."
based on | /ˈbeɪst ɑːn/ | batay sa / ayon sa | "based from" ✗. "It is based on a true story."
Please fill out this form. | /ˈpliːz ˈfɪl ˈaʊt ˈðɪs ˈfɔːrm/ | Pakisagutan ang form na ito | "fill up a form" ✗: "fill up" = punuin (ang tangke, ang baso). Para sa form: "fill out" sa American English, "fill in" sa British English.
That went over my head. | /ˈðæt ˈwent ˈoʊvər maɪ ˈhed/ | Nosebleed! / Hindi ko na-gets | Sa Pilipinas: "Nosebleed!" kapag sobrang lalim o hirap ng Ingles. Sa American English, pagdurugo lang ng ilong ang "nosebleed"; ang "nosebleed seats" ay ang pinakamataas na upuan sa stadium. Sabihin: "That went over my head." o "That's way over my head."
`
};

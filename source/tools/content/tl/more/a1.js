/* tl-en stage A1: new lessons (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"It at there: laging may subject ang pangungusap", blurb:"\"It's raining\", hindi \"Is raining\". Ang \"may\" ay \"there is / there are\", o \"have\" kapag tao ang may-ari.", deck:"Kuwentuhan", body:`
<p>Sa Tagalog, buo nang pangungusap ang <i>Umuulan</i> o <i>May kapihan dito</i> kahit walang subject. Sa Ingles, hindi puwedeng bakante ang puwesto ng subject, kaya pinupunan ito ng <b>it</b> o <b>there</b> na walang sariling kahulugan.</p>
<h3>Panahon at oras: It</h3>
<p>Dito, hindi "ito" ang ibig sabihin ng <b>it</b>. Pampuno lang ito sa puwesto ng subject.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Malamig ngayon}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Alas-tres na}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Umuulan}}
<h3>Ang "may" at "mayroon": There is / There are</h3>
<p>Kapag isa lang, <b>There is a …</b>; kapag marami, <b>There are … -s</b>. Sumusunod ang verb (pandiwa) sa noun (pangngalan) na kasunod nito. Sa pagsasalita, <b>There's</b> ang karaniwang pinaikling anyo.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|May kapihan malapit dito}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|May dalawang kuwarto}}
<h3>Tanong at negatibo</h3>
<p>Ang <i>wala</i> ay <b>there isn't</b> o <b>there aren't</b>.</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|May banyo po ba rito?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|May mga upuan pa ba?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Walang bus ngayong araw}}
<h3>May kotse ako: have, hindi there is</h3>
<p>Iisa ang <i>may</i> sa Tagalog, pero dalawa ang katumbas nito sa Ingles. Kapag tao ang may-ari, <b>have</b>. Kapag sinasabi mo lang na may bagay sa isang lugar, <b>there is</b>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|May kotse ako}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|May kotse sa labas}}
<div class="tip">Madalas makalusot: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>Have a cafe here.</b> ✗ → <b>There's a cafe here.</b> ✓ / <b>There is two rooms.</b> ✗ → <b>There are two rooms.</b> ✓</div>`,
check:[["'Mainit ngayon' sa Ingles?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Kapag panahon ang pinag-uusapan, \"it\" ang pumupuno sa puwesto ng subject."],["There ___ three people. Ano ang dapat ilagay sa patlang?",["is","are","have","be"],1,"Marami ang \"three people\", kaya \"there are\"."],["'May banyo po ba rito?' sa Ingles?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Kapag itinatanong kung mayroon, \"Is there a …?\" ang simula."]],
practice:[
["mc","'Umuulan' sa Ingles?","It's raining.","Is raining.","There is raining.","Rain is.","Kapag panahon, \"it\" ang subject."],
["mc","'May kapihan malapit dito' sa Ingles?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Bagay na nasa isang lugar ang sinasabi, kaya \"there is\"; isa lang ito, kaya may article na \"a\"."],
["mc","There ___ two rooms.","are","is","have","has","Plural ang \"rooms\", kaya \"are\"."],
["mc","'Alas-tres na' sa Ingles?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Sa oras, \"it\" rin ang simula ng pangungusap."],
["mc","'May kotse ako' sa Ingles?","I have a car.","There is a car me.","I am a car.","It's a car me.","Kapag tao ang may-ari, \"have\" ang gamit, hindi \"there is\"."],
["or","Malamig ngayon","It's cold today","There's","Kapag panahon, \"it\" ang subject."],
["or","May kotse sa labas","There's a car outside","cars","Isa lang ang kotse, kaya article na \"a\" at singular na \"car\"."],
["or","May dalawang upuan","There are two seats","seat is","Pagkatapos ng \"two\", plural ang noun at \"are\" ang verb: \"two seats\"."],
["fi","__ cold today.","Malamig ngayon","It's|It is","Is|There's|This","Pinupunan ng \"it\" ang puwesto ng subject."],
["fi","There __ a bank near here.","May bangko malapit dito","is","are|have|be","Isa lang ang bangko, kaya \"is\"."],
["fi","__ there any seats?","May mga upuan pa ba?","Are","Is|Do|Have","Plural ang \"seats\", kaya \"Are\"."],
["ty","Mainit ngayon","It's hot today","it · hot · today — \"it\" ang subject kapag panahon","There's","Kapag panahon, \"it\" ang simula ng pangungusap."],
["ty","May banyo po ba rito?","Is there a bathroom here|Is there a restroom here","is there · bathroom — huwag kalimutan ang article","the","Isa lang ang hinahanap at hindi pa tiyak kung alin, kaya article na \"a\"."],
["ty","May dalawang kuwarto","There are two rooms","there are · two · room — plural ang kailangan","room","Sa Tagalog, wala nang \"mga\" pagkatapos ng bilang; sa Ingles, kailangan pa rin ng plural na -s: \"two rooms\"."]]},

{ id:"plurals", title:"Plural na -s, this / these at my / your", blurb:"Kahit may bilang na, may -s pa rin: \"two books\", hindi \"two book\". \"This\" para sa isa, \"these\" para sa marami.", deck:"Pamimili at pagbabayad", body:`
<p>Sa Tagalog, ang salitang <i>mga</i> ang nagpapakita ng plural (maramihan), at nawawala pa ito kapag may bilang: <i>dalawang libro</i>. Hindi nagbabago ang noun (pangngalan). Sa Ingles, ang noun mismo ang nagbabago: kapag dalawa o higit pa, may <b>-s</b>, may bilang man o wala. Kaya madalas makalusot ang <b>two book</b> ✗.</p>
<h3>Paano gawing plural</h3>
<div class="tbl"><table><tr><th>Tuntunin</th><th>Halimbawa</th></tr><tr><td>Karamihan: -s</td><td class="k">book → books</td></tr><tr><td>Pagkatapos ng s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>Consonant + y → -ies</td><td class="k">city → cities</td></tr><tr><td>Irregular</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|dalawang libro}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|tatlong kahon}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|May dalawa akong anak}}
<h3>This / that para sa isa, these / those para sa marami</h3>
<p><i>Ito</i> = <b>this</b>, <i>ang mga ito</i> = <b>these</b>. <i>Iyon</i> = <b>that</b>, <i>ang mga iyon</i> = <b>those</b>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Bag ko ito}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Mga susi ko ito}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Maganda ang sapatos na iyon}}
<h3>my, your, his, her, our, their</h3>
<p>Sinasabi ng mga salitang ito kung kanino ang bagay. Kapag mayroon na nito, wala nang article (pantukoy sa Ingles: <b>a, an, the</b>): <b>my bag</b>, hindi <b>my a bag</b>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Cellphone mo ba ito?}}{{ex:Her brothers live in Cebu.|/hər ˈbrʌðərz ˈlɪv ɪn seˈbuː/|Sa Cebu nakatira ang mga kapatid na lalaki ni Ana}}
<p>Isa pang kaibahan: sa Tagalog, puwedeng maging plural ang adjective (pang-uri), gaya ng <i>magaganda</i>. Sa Ingles, hindi kailanman: <b>nice shoes</b>, hindi <b>nices shoes</b>.</p>
<div class="tip">Pagkatapos ng bilang, <b>many</b>, <b>these</b> at <b>those</b>, laging plural ang noun: <b>two friend</b> ✗ → <b>two friends</b> ✓. At walang article kapag may <b>my</b>: <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Ano ang dapat ilagay sa patlang?",["sister","sisters","a sister","sister's"],1,"Dalawa, kaya plural: \"sisters\"."],["___ are my keys. Ano ang dapat ilagay sa patlang?",["This","That","These","It"],2,"Plural ang \"keys\", kaya \"These\"."],["'Bag ko ito' sa Ingles?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Kapag may \"my\", wala nang article."]],
practice:[
["mc","'dalawang libro' sa Ingles?","two books","two book","two a book","twos book","Dalawa o higit pa, kaya may plural na -s kahit may bilang na."],
["mc","Plural ng \"child\" — ano ito?","children","childs","childes","child","Irregular ang plural nito: \"children\"."],
["mc","___ shoes are nice. (ang sapatos na iyon)","Those","That","This","It","Plural ang \"shoes\", kaya \"those\"."],
["mc","'Bag ko ito' sa Ingles?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","Hindi pinagsasabay ang \"my\" at ang article."],
["mc","Plural ng \"box\" — ano ito?","boxes","boxs","boxies","box","Pagkatapos ng s, x, ch at sh, -es ang idinadagdag."],
["or","Mga susi ko ito","These are my keys","key This","Marami ang susi, kaya \"these\" at plural na \"keys\"."],
["or","May dalawa akong anak","I have two children","child a","Dalawa, kaya plural na \"children\"; hindi kailangan ng article na \"a\"."],
["or","Maganda ang sapatos na iyon","Those shoes are nice","That","Plural ang \"shoes\", kaya \"those\", hindi \"that\"."],
["fi","I have three __.","May tatlo akong pusa","cats","cat|a cat|cat's","Tatlo, kaya plural: \"cats\"."],
["fi","__ is my friend.","Ito ang kaibigan ko","This","These|Those|They","Isang tao lang, kaya \"this\"."],
["fi","Two __, please.","Dalawang kape nga po","coffees","coffee|a coffee|coffee's","Kapag bilang ng tasa ang inoorder, plural ang sinasabi: \"two coffees\"."],
["ty","Mga libro ko ito","These are my books","these · my · book — plural ang kailangan","book","Marami ang libro, kaya \"these\" at plural na \"books\"."],
["ty","May dalawa akong kapatid na babae","I have two sisters","have · two · sister — plural ang kailangan","sister","Pagkatapos ng \"two\", plural ang noun: \"two sisters\"."],
["ty","Bag ko ito","This is my bag","this · my · bag — hindi kailangan ng article","a","Kapag may \"my\", walang article: \"my bag\"."]]},
{ id:"present", title:"Present tense at ayos ng mga salita: subject + verb + object", blurb:"Sa Tagalog, madalas mauna ang verb; sa Ingles, subject muna. At \"I don't eat\", hindi \"I not eat\".", deck:"Pagpapakilala", body:`
<p>Sa Tagalog, kadalasang nauuna ang verb (pandiwa): <i>Umiinom ako ng kape</i>. Sa Ingles, ang ayos ay <b>sino → ginagawa → ano</b>. Walang marker na tulad ng <i>ang</i> at <i>ng</i> sa Ingles, kaya ang ayos ng mga salita mismo ang nagsasabi kung sino ang gumagawa at ano ang ginagawan.</p>
<h3>Subject + verb + object</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Umiinom ako ng kape}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Nag-aaral ako ng Ingles}}
<h3>Lugar at oras: sa hulihan</h3>
<p>Ang iba pang detalye ay inilalagay sa hulihan: <b>lugar muna, saka oras</b>.</p>
{{ex:We live in Manila.|/wi ˈlɪv ɪn məˈnɪlə/|Nakatira kami sa Maynila}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|Nag-aaral ako ng Ingles araw-araw}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Nagtatrabaho sila tuwing Sabado at Linggo}}
<h3>Present tense: nakagawian at laging totoo</h3>
<p>Sa Tagalog, iisa ang anyong <i>kumakain</i> para sa "palaging ginagawa" at "ginagawa ngayon". Sa Ingles, magkaiba ang dalawa. Ang present tense (simple present) ay para sa nakagawian at sa mga bagay na laging totoo; ang "ginagawa ngayon" ay nasa aralin tungkol sa <b>be + -ing</b>. Sa negatibo, ilagay ang <b>don't</b> bago ang verb.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Hindi ako kumakain ng karne}}
<h3>Gaano kadalas: always, usually, sometimes, never</h3>
<p>Inilalagay ang mga salitang ito <b>bago mismo ang verb</b>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Karaniwan, alas-siyete ako gumigising}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Hindi ako umiinom ng kape sa gabi kahit kailan}}
<div class="tip">Hindi basta <b>not</b> ang <i>hindi</i>: <b>I not eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓. At huwag sundan ang ayos ng Tagalog: <b>Drink I coffee.</b> ✗ → <b>I drink coffee.</b> ✓</div>`,
check:[["Alin ang tamang ayos ng mga salita para sa 'Umiinom ako ng kape'?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Subject + verb + object ang ayos sa Ingles."],["I ___ eat meat. (hindi kumakain) Ano ang dapat ilagay sa patlang?",["not","am not","no","don't"],3,"Sa negatibo ng verb na hindi \"be\", \"don't\" ang gamit."],["Saan dapat ilagay ang \"always\"?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Ang salitang nagsasabi kung gaano kadalas ay inilalagay bago mismo ang verb."]],
practice:[
["mc","'Nag-aaral ako ng Ingles' sa Ingles?","I study English.","I English study.","I am study English.","Study I English.","Subject + verb + object ang ayos."],
["mc","'Hindi ako kumakain ng karne' sa Ingles?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Ang \"hindi\" bago ang verb na hindi \"be\" ay \"don't\", hindi \"not\" lang."],
["mc","'Nakatira kami sa Seoul' sa Ingles?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Pagkatapos ng verb, saka ang lugar."],
["mc","'Karaniwan, alas-siyete ako gumigising' sa Ingles?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","Inilalagay ang \"usually\" bago mismo ang verb."],
["mc","Aling pangungusap ang tungkol sa ginagawa araw-araw?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Present tense ang gamit para sa nakagawian."],
["or","Umiinom ako ng kape araw-araw","I drink coffee every day","the am","Nakagawian, kaya present tense. Pangkalahatan ang \"coffee\" rito, kaya walang article."],
["or","Marami akong binabasang libro","I read many books","book","Pagkatapos ng \"many\", plural ang noun: \"books\"."],
["or","Nagtatrabaho kami tuwing Sabado at Linggo","We work on weekends","are","Hindi dinadagdagan ng \"be\" ang ibang verb: \"We work\", hindi \"We are work\"."],
["fi","I __ like fish.","Hindi ako mahilig sa isda","don't|do not","not|am not|no","Sa negatibo ng verb na hindi \"be\", \"don't\" ang gamit."],
["fi","I __ English every day.","Nag-aaral ako ng Ingles araw-araw","study","am study|studying|to study","Sa present tense, base form ng verb ang gamit kapag \"I\" ang subject."],
["fi","They live __ Busan.","Nakatira sila sa Busan","in","at|on|to","Bago ang pangalan ng lungsod, \"in\" ang gamit."],
["ty","Umiinom ako ng tsaa","I drink tea","drink · tea — hindi kailangan ng article","a","Pangkalahatan ang \"tea\" rito, kaya walang article."],
["ty","Mahilig ako sa mga pusa","I like cats","like · cat — gawing plural ang noun","cat","Kapag ang buong uri ng hayop ang tinutukoy, plural ang gamit at walang article: \"cats\"."],
["ty","Hindi ako kumakain ng karne","I don't eat meat","don't · eat · meat","am","Sa negatibo ng verb na hindi \"be\", \"don't\" ang gamit."]]},
{ id:"questions", title:"Pagtatanong: Do you …? at mga question word", blurb:"Walang \"ba\" sa Ingles: \"do\", \"is\" o \"are\" sa unahan ang kapalit. \"Where do you live?\", hindi \"Where you live?\".", deck:"Mahahalagang pangungusap 2", body:`
<p>Sa Tagalog, sapat na ang <i>ba</i> at ang tono para maging tanong: <i>Mahilig ka ba sa kape?</i> Walang katumbas na salita ang <i>ba</i> sa Ingles. Ang kapalit nito ay pagbabago sa <b>ayos ng mga salita</b>: may <b>be</b> o <b>do</b> sa unahan.</p>
<h3>Kapag be ang verb: pagpalitin ang puwesto</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Ayos ka lang ba?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Bag mo ba ito?}}
<h3>Kapag may ibang verb: Do sa unahan</h3>
<p>Kung may verb (pandiwa) na hindi <b>be</b>, gaya ng <b>like, live, speak</b> o <b>want</b>, ilagay ang helping verb na <b>Do</b> sa unahan. Hindi na ginagalaw ang iba.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Mahilig ka ba sa kape?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Marunong ka bang mag-Ingles?}}
<p>Maikli ang sagot: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>Question word: sa pinakaunahan</h3>
<p>Gaya sa Tagalog (<i>Saan ka nakatira?</i>), nasa unahan ang question word: <b>what</b> (ano), <b>where</b> (saan), <b>when</b> (kailan), <b>who</b> (sino), <b>why</b> (bakit), <b>how</b> (paano). Ang kaibahan: sa Ingles, kasunod pa rin nito ang <b>do</b> o <b>be</b>.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Saan ka nakatira?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Ano ang trabaho mo?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Nasaan po ang banyo?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Magkano po ito?}}
<div class="tip">Madalas makalusot: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓. Itanong sa sarili: may iba bang verb bukod sa <b>be</b>? Kung mayroon, <b>do</b> ang kailangan.</div>`,
check:[["'Mahilig ka ba sa kape?' sa Ingles?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"May verb na \"like\", kaya \"Do\" ang simula ng tanong."],["'Saan ka nakatira?' sa Ingles?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Question word + do + subject + verb ang ayos."],["Ano ang tamang sagot sa \"Do you speak English?\"",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Kapag \"Do\" ang tanong, \"do\" rin ang sagot."]],
practice:[
["mc","'Marunong ka bang mag-Ingles?' sa Ingles?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","May verb na \"speak\", kaya \"Do\" ang simula ng tanong."],
["mc","'Saan ka nakatira?' sa Ingles?","Where do you live?","Where you live?","Where are you live?","Where live you?","Question word + do + subject + verb ang ayos."],
["mc","'Magkano ito?' sa Ingles?","How much is this?","How much this is?","How much does this?","What much is this?","Presyo ang itinatanong, kaya \"How much is …?\" ang gamit."],
["mc","Do you like tea? — alin ang tamang sagot?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Kapag \"Do\" ang tanong, \"do\" rin ang sagot."],
["mc","'Ano ang trabaho mo?' sa Ingles?","What do you do?","What are you do?","What you do?","What do you?","Ito ang karaniwang tanong tungkol sa trabaho: \"What do you do?\"."],
["or","Mahilig ka ba sa kape?","Do you like coffee","Are the","May verb na \"like\", kaya \"Do\" ang simula. Pangkalahatan ang \"coffee\", kaya walang article."],
["or","Nasaan ang banyo?","Where is the bathroom","a do","Ang banyo ng gusaling ito ang tinutukoy, kaya article na \"the\"."],
["or","Saan ka nakatira?","Where do you live","are","May verb na \"live\", kaya \"do\" ang kailangan, hindi \"are\"."],
["fi","__ you like music?","Mahilig ka ba sa musika?","Do","Are|Is|Does","May verb na \"like\", kaya \"Do\" ang simula ng tanong."],
["fi","__ do you live?","Saan ka nakatira?","Where","What|Who|When","Lugar ang itinatanong, kaya \"where\"."],
["fi","What time __ it?","Anong oras na?","is","do|does|are","Walang ibang verb dito, kaya \"be\" ang gamit: \"is\"."],
["ty","Marunong ka bang mag-Ingles?","Do you speak English|Can you speak English","do · speak · English","Are","May verb na \"speak\", kaya \"Do\" ang simula ng tanong."],
["ty","Nasaan ang banyo?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — \"the\" ang article","a","Alam ninyong dalawa kung aling banyo ang tinutukoy, kaya article na \"the\"."],
["ty","Mahilig ka ba sa mga aso?","Do you like dogs","do · like · dog — gawing plural ang noun","dog","Kapag ang buong uri ng hayop ang tinutukoy, plural ang gamit: \"dogs\"."]]},
{ id:"third-s", title:"-s ng verb kapag he, she o it: does / doesn't", blurb:"\"She works\", hindi \"She work\". Sa tanong at negatibo, lumilipat ang -s sa \"does\".", deck:"Pagpapakilala", body:`
<p>Sa Tagalog, hindi nagbabago ang verb (pandiwa) ayon sa subject. Sa Ingles, sa present tense, kapag <b>he, she, it</b> o isang tao o isang bagay ang subject, may <b>-s</b> ang verb. Sa isang pag-aaral ng pagsasalita ng mga estudyanteng Pilipino na matatas na sa Ingles, ito ang ikatlo sa pinakamadalas na mali (Fontillas at iba pa, 2022). Madalas din itong mawala sa bigkas, kaya bigkasin nang buo ang dulo: <b>works</b>, <b>likes</b>.</p>
<div class="tbl"><table><tr><th>Subject</th><th>Verb</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Nagtatrabaho siya sa bangko (babae)}}{{ex:He likes basketball.|/hi ˈlaɪks ˈbæskɪtbɔːl/|Mahilig siya sa basketball (lalaki)}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Masarap magluto ang nanay ko}}
<p>Tandaan: iisa ang <i>siya</i> sa Tagalog, pero sa Ingles kailangan mong pumili: <b>he</b> para sa lalaki, <b>she</b> para sa babae.</p>
<h3>Mga verb na bahagyang nagbabago ang anyo</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|May kotse siya (babae; have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Pumapasok siya sa trabaho nang alas-otso (lalaki; go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Nag-aaral siya ng Ingles (babae; study → studies)}}
<h3>Negatibo at tanong: does</h3>
<p>Kapag may <b>doesn't</b> o <b>Does</b>, doon na lumilipat ang -s. Base form na (ang verb na walang dagdag) ang kasunod.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Hindi siya umiinom ng kape (lalaki)}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Dito ba siya nakatira? (babae)}}
<div class="tip">Madalas makalusot: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. Ano ang dapat ilagay sa patlang?",["live","lives","living","is live"],1,"\"She\" ang subject, kaya may -s ang verb: \"lives\"."],["He ___ like coffee. Ano ang dapat ilagay sa patlang?",["don't","isn't","doesn't","not"],2,"Kapag \"he\" ang subject, \"doesn't\" ang negatibo."],["Babae si Ana at may kotse siya. Alin ang tamang pangungusap?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Nagiging \"has\" ang \"have\" kapag \"she\" ang subject."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","Isang tao lang ang subject, kaya may -s ang verb: \"works\"."],
["mc","Tungkol kay Paolo: 'Hindi siya umiinom ng kape' sa Ingles?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Lalaki si Paolo, kaya \"he\"; ang negatibo ay \"doesn't\" + base form."],
["mc","Tungkol kay Ana: 'Dito ba siya nakatira?' sa Ingles?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Babae si Ana, kaya \"she\"; pagkatapos ng \"Does\", wala nang -s ang verb."],
["mc","have → she ___","has","haves","have","is have","Nagiging \"has\" ang \"have\"."],
["mc","study → he ___","studies","studys","study","studyes","Kapag consonant + y ang dulo, nagiging -ies."],
["or","Tungkol kay Ana: Nagtatrabaho siya sa bangko","She works at a bank","work the","\"She\" ang subject, kaya \"works\". Unang banggit pa lang sa bangko, kaya article na \"a\"."],
["or","Tungkol kay Paolo: May dalawa siyang aso","He has two dogs","have dog","\"He\" ang subject, kaya \"has\"; dalawa ang aso, kaya plural na \"dogs\"."],
["or","Tungkol kay Ana: Hindi siya kumakain ng karne","She doesn't eat meat","eats","Pagkatapos ng \"doesn't\", base form ang verb: walang -s."],
["fi","He __ soccer.","Tungkol kay Paolo: Mahilig siya sa soccer","likes","like|liking|is like","\"He\" ang subject, kaya \"likes\"."],
["fi","__ she speak English?","Tungkol kay Ana: Marunong ba siyang mag-Ingles?","Does","Do|Is|Are","Kapag \"she\" ang subject, \"Does\" ang simula ng tanong."],
["fi","She __ to work at eight.","Tungkol kay Ana: Pumapasok siya sa trabaho nang alas-otso","goes","go|going|gos","Nagiging \"goes\" ang \"go\"."],
["ty","Tungkol kay Paolo: May kotse siya","He has a car","has · car — kailangan ng article na \"a\"","have","\"He\" ang subject, kaya \"has\"; isang kotse, kaya article na \"a\"."],
["ty","Tungkol kay Ana: Mahilig siya sa mga pusa","She likes cats","likes · cat — gawing plural ang noun","cat","\"She\" ang subject, kaya \"likes\"; ang buong uri ng hayop ang tinutukoy, kaya plural na \"cats\"."],
["ty","Tungkol kay Paolo: Hindi siya nakatira rito","He doesn't live here","doesn't · live · here","lives","Pagkatapos ng \"doesn't\", base form ang verb."]]},
{ id:"countable", title:"Noun na nabibilang at hindi nabibilang: some, any, much, many", blurb:"Walang \"a\" at walang -s ang \"water\", \"advice\" at \"furniture\". \"Many\" kapag nabibilang, \"much\" kapag hindi.", deck:"Pag-order sa restawran", body:`
<p>Sa Tagalog, iisa ang <i>marami</i> at iisa ang <i>kaunti</i> para sa lahat ng noun (pangngalan): <i>maraming tao</i>, <i>maraming tubig</i>. Sa Ingles, hinahati ang mga noun sa <b>nabibilang</b> at <b>hindi nabibilang</b>. Dito nakasalalay kung may article, kung may plural na -s, at kung <b>many</b> o <b>much</b> ang gagamitin.</p>
<div class="tbl"><table><tr><th>Nabibilang</th><th>Hindi nabibilang</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>Puwede ang a / an, bilang at -s</td><td>Hindi puwede ang a / an, bilang at -s</td></tr></table></div>
<h3>some at any</h3>
<p>Para sa "kaunti" o "ilan": <b>some</b> sa positibong pangungusap, <b>any</b> sa negatibo at sa tanong. Pero kapag humihingi o nag-aalok ka, <b>some</b> pa rin kahit tanong: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|May kaunti akong pera}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Wala akong kahit kaunting pera}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|May tanong ka ba?}}
<h3>many at much</h3>
<p>Kapag nabibilang, <b>many</b> + plural. Kapag hindi nabibilang, <b>much</b>. Puwede sa dalawa ang <b>a lot of</b>.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Ilang tao?}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|Magkano?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Wala akong gaanong oras}}
<h3>Paano bilangin ang hindi nabibilang</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|isang basong tubig}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|isang tasang kape}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|isang payo}}
<h3>Mga plural na dapat iwasan</h3>
<p>Hindi nabibilang sa Ingles ang <b>furniture, luggage, baggage, equipment, advice, staff, jewelry</b> at <b>information</b>, kaya wala silang -s. Madalas marinig ang <b>furnitures</b> at <b>advices</b>, pero mali pa rin ang mga ito sa pormal na Ingles.</p>
<div class="tip">Madalas makalusot: <b>a water</b>, <b>many money</b>, <b>informations</b>, <b>luggages</b> ✗ → <b>some water</b>, <b>a lot of money</b>, <b>information</b>, <b>luggage</b> ✓</div>`,
check:[["How ___ people are there? Ano ang dapat ilagay sa patlang?",["much","many","any","a"],1,"Nabibilang ang \"people\", kaya \"many\"."],["Alin sa mga ito ang noun na hindi nabibilang?",["apple","chair","water","friend"],2,"Hindi nilalagyan ng \"a\" o ng -s ang \"water\"."],["I don't have ___ money. Ano ang dapat ilagay sa patlang?",["some","a","many","any"],3,"Sa negatibong pangungusap, \"any\" ang gamit."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","Hindi nabibilang ang \"water\", kaya hindi puwede ang \"a\" o \"many\"; humihingi ka, kaya \"some\"."],
["mc","How ___ time do we have?","much","many","any","a","Hindi nabibilang ang \"time\", kaya \"much\"."],
["mc","'May tanong ka ba?' sa Ingles?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Pagkatapos ng \"any\", plural ang noun na nabibilang."],
["mc","'isang basong tubig' sa Ingles?","a glass of water","a water glass of","one waters","a glass water","Binibilang ang hindi nabibilang sa pamamagitan ng \"a glass of\"."],
["mc","I have ___ friends in Seoul.","many","much","a","an","Nabibilang at plural ang \"friends\", kaya \"many\"."],
["or","May kaunti akong pera","I have some money","a moneys","Hindi nabibilang ang \"money\": walang article na \"a\" at walang plural na -s."],
["or","Dalawang mansanas nga po","Two apples please","apple","Pagkatapos ng \"two\", plural ang noun: \"two apples\"."],
["or","Wala akong gaanong oras","I don't have much time","many","Hindi nabibilang ang \"time\", kaya \"much\", hindi \"many\"."],
["fi","How __ is this?","Magkano ito?","much","many|any|some","Presyo ang itinatanong, kaya \"how much\"."],
["fi","I don't have __ questions.","Wala akong tanong","any","some|much|a","Sa negatibong pangungusap, \"any\" ang gamit."],
["fi","a cup __ coffee","isang tasang kape","of","for|in|a","\"A cup of …\" ang paraan ng pagbilang."],
["ty","Puwede po bang makahingi ng tubig?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — hindi kailangan ng article","a","Hindi nabibilang ang \"water\", kaya walang article na \"a\"; \"some\" ang gamit."],
["ty","May tanong ka ba?","Do you have any questions","any · question — gawing plural ang noun","question","Pagkatapos ng \"any\", plural ang noun na nabibilang: \"questions\"."],
["ty","Ilang tao?","How many people","how many · people","much","Nabibilang ang tao, kaya \"many\"."]]},
{ id:"object-have", title:"me, him, her at ang verb na have", blurb:"Iisa ang \"niya\" sa Tagalog; sa Ingles, \"him\" o \"her\", \"his\" o \"her\". At \"have\" ang \"may\" kapag tao ang may-ari.", deck:"Pagpapakilala", body:`
<p>Sa Tagalog, nag-iiba ang anyo ng pronoun (panghalip) ayon sa gamit: <i>ako, ko, akin</i>. Ganoon din sa Ingles: pagkatapos ng verb (pandiwa) o ng preposition (pang-ukol), object pronoun ang gamit, hindi <b>I</b> o <b>he</b>.</p>
<div class="tbl"><table><tr><th>Subject</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Object</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Kilala niya ako (babae ang nakakakilala)}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Gusto ko siya (lalaki)}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Puwede mo ba kaming tulungan?}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|Katrabaho ko siya (babae)}}
<h3>Ang "niya": him o her, his o her</h3>
<p>Walang kasarian ang <i>siya</i> at <i>niya</i>. Sa Ingles, kailangan mong pumili sa bawat pagkakataon: <b>him</b> at <b>his</b> para sa lalaki, <b>her</b> para sa babae. Sumusunod ang possessive sa may-ari, hindi sa bagay: <b>Ana lost his phone.</b> ✗ → <b>Ana lost her phone.</b> ✓</p>
{{ex:Ana lost her phone.|/ˈɑːnə ˈlɔːst hər ˈfoʊn/|Naiwala ni Ana ang cellphone niya}}
<h3>have: ang "may" kapag tao ang may-ari</h3>
<p>Pamilya, gamit, oras: <b>have</b> lahat. <i>May kapatid ako</i> → <b>I have a brother.</b></p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|May dalawa akong kapatid na lalaki}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|May bolpen ka ba?}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|Wala akong oras}}
<h3>have: kumain, uminom</h3>
<p>Walang article bago ang <b>breakfast</b>, <b>lunch</b> at <b>dinner</b>.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Mananghalian tayo}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|Nagkakape ako tuwing umaga}}
<div class="tip">Madalas makalusot: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓ / <b>Ana lost his phone.</b> ✗ → <b>Ana lost her phone.</b> ✓</div>`,
check:[["I like ___. (lalaki ang gusto mo) Ano ang dapat ilagay sa patlang?",["he","his","him","he's"],2,"Pagkatapos ng verb, object pronoun ang gamit: \"him\" para sa lalaki."],["Can you help ___? (kami) Ano ang dapat ilagay sa patlang?",["us","we","our","ours"],0,"Pagkatapos ng verb, object pronoun ang gamit: \"us\"."],["'May bolpen ka ba?' sa Ingles?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"Hindi \"be\" ang \"have\", kaya \"Do\" ang simula ng tanong."]],
practice:[
["mc","She knows ___. (ako ang kilala)","me","I","my","mine","Pagkatapos ng verb, object pronoun ang gamit: \"me\"."],
["mc","I like ___. (sila ang gusto ko)","them","they","their","theirs","Pagkatapos ng verb, object pronoun ang gamit: \"them\"."],
["mc","'Puwede mo ba kaming tulungan?' sa Ingles?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Pagkatapos ng verb, \"us\" ang gamit, hindi \"we\"."],
["mc","'Mananghalian tayo' sa Ingles?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Walang article bago ang \"lunch\", \"breakfast\" at \"dinner\"."],
["mc","'May dalawa akong kapatid na lalaki' sa Ingles?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","\"Have\" ang gamit para sa pamilya; dalawa, kaya plural ang noun."],
["or","May bolpen ka ba?","Do you have a pen","the pens","Kahit anong bolpen at isa lang, kaya article na \"a\" at singular na \"pen\"."],
["or","Tungkol kay Ana: Gusto ko siya","I like her","she","Pagkatapos ng verb, object pronoun ang gamit; babae si Ana, kaya \"her\"."],
["or","May dalawa akong kapatid na babae","I have two sisters","sister a","Dalawa, kaya plural na \"sisters\"; hindi puwede ang article na \"a\" rito."],
["fi","Call __ tonight.","Tawagan mo ako mamayang gabi","me","I|my|mine","Pagkatapos ng verb, \"me\" ang gamit."],
["fi","I work with __.","Tungkol kay Paolo: Katrabaho ko siya","him","he|his|he's","Pagkatapos ng preposition, object pronoun din ang gamit; lalaki si Paolo, kaya \"him\"."],
["fi","She __ a dog.","Tungkol kay Ana: May aso siya","has","have|is|haves","\"She\" ang subject, kaya \"has\"."],
["ty","Puwede mo ba akong tulungan?","Can you help me|Could you help me","can you · help · me","I","Pagkatapos ng verb, object pronoun ang gamit: \"me\"."],
["ty","May bolpen ka ba?","Do you have a pen","do you have · pen — kailangan ng article na \"a\"","the","Kahit anong bolpen ang hinahanap at isa lang, kaya article na \"a\"."],
["ty","Marami akong kaibigan","I have many friends|I have a lot of friends","have · many · friend — gawing plural ang noun","friend","Pagkatapos ng \"many\", plural ang noun: \"friends\"."]]},
{ id:"can-like", title:"can, like + -ing at I'd like: kaya mo, hilig mo, gusto mo ngayon", blurb:"\"He can swim\", hindi \"He can swims\". Sa pag-order, \"I'd like\", hindi \"I like\".", deck:"Kuwentuhan", body:`
<p>Tatlong hulmahan ito na magagamit mo agad sa pagpapakilala at sa pag-order.</p>
<h3>can: kaya, marunong, puwede</h3>
<p>Pare-parehong <b>can</b> ang <i>kaya</i>, <i>marunong</i> at <i>puwede</i>. Ang hulmahan ay <b>can + base form</b> (ang verb na walang dagdag). Walang -s kahit <b>he</b> o <b>she</b> ang subject.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Marunong akong lumangoy}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Hindi ako marunong magmaneho}}{{ex:Can you speak Tagalog?|/kən ju ˈspiːk təˈgɑːlɔːg/|Marunong ka bang mag-Tagalog?}}
<h3>like + -ing: ang hilig mong gawin</h3>
<p>Para sa libangan, anyong -ing ng verb ang kasunod ng <b>like</b> at <b>love</b>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Mahilig akong magluto}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Mahilig na mahilig akong manood ng pelikula}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Hindi ako mahilig tumakbo}}
<h3>I'd like: ang gusto mo ngayon</h3>
<p>Dalawa ang katumbas ng <i>Gusto ko ng kape</i>. <b>I like coffee</b>: mahilig ka sa kape, palagi. <b>I'd like a coffee</b>: gusto mo ng kape ngayon, at magalang ang dating. Sa pag-order, <b>I'd like</b> ang gamitin.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Isang kape nga po}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Gusto mo ba ng tsaa?}}
<div class="tip">Madalas makalusot: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓. Sa kapihan: <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Ano ang dapat ilagay sa patlang?",["sings","sing","singing","to sing"],1,"Pagkatapos ng \"can\", base form ang verb."],["'Mahilig akong magluto' sa Ingles?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Pagkatapos ng \"like\", anyong -ing ang gamit."],["Alin ang pinakanatural na sabihin kapag umoorder ka sa kapihan?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"\"I'd like\" ang gamit para sa gusto mo ngayon."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","Pagkatapos ng \"can\", base form ang verb: walang -s."],
["mc","'Hindi ako marunong magmaneho' sa Ingles?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can't\" ang negatibo ng \"can\"."],
["mc","'Mahilig akong manood ng pelikula' sa Ingles?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Pagkatapos ng \"like\", anyong -ing; pangkalahatan ang pelikula, kaya plural na \"movies\"."],
["mc","Umoorder ka: 'Isang kape nga po' sa Ingles?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","\"I'd like\" ang gamit para sa gusto mo ngayon."],
["mc","Nag-aalok ka: 'Gusto mo ba ng tsaa?' sa Ingles?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Kapag nag-aalok, \"Would you like …?\" ang gamit."],
["or","Isang kape nga po","I'd like a coffee please","the coffees","Isang tasa ang inoorder, kaya article na \"a\" at singular na \"coffee\"."],
["or","Mahilig akong magbasa ng libro","I like reading books","book read","Pagkatapos ng \"like\", anyong -ing; pangkalahatan ang libro, kaya plural na \"books\"."],
["or","Marunong ka bang lumangoy?","Can you swim","swimming","Pagkatapos ng \"can\", base form ang verb."],
["fi","I can't __.","Hindi ako marunong lumangoy","swim","swimming|swims|to swim","Pagkatapos ng \"can't\", base form ang verb."],
["fi","I like __ music.","Mahilig akong makinig ng musika","listening to","listen to|listen|to listening","Pagkatapos ng \"like\", anyong -ing ang gamit."],
["fi","__ like a sandwich, please.","Isang sandwich nga po","I'd|I would","I|I'm|I can","Sa pag-order, \"I'd like\" ang gamit."],
["ty","Mahilig akong magluto","I like cooking|I love cooking|I like to cook","like · cook — gamitin ang anyong -ing","cook","Pagkatapos ng \"like\", anyong -ing ang gamit."],
["ty","Isang sandwich nga po","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — kailangan ng article na \"a\"","the","Kahit anong sandwich at isa lang, kaya article na \"a\"."],
["ty","Mahilig ako sa mga aso","I like dogs|I love dogs","like · dog — gawing plural ang noun","dog","Kapag ang buong uri ng hayop ang tinutukoy, plural ang gamit: \"dogs\"."]]},
{ id:"continuous", title:"Ginagawa ngayon: be + -ing", blurb:"Iisa ang \"kumakain\" sa Tagalog; sa Ingles, \"I eat\" ang nakagawian at \"I'm eating\" ang ginagawa ngayon.", deck:"Kuwentuhan", body:`
<p>Sa Tagalog, iisa ang anyong <i>nagtatrabaho</i> para sa nakagawian at para sa ginagawa ngayon. Sa Ingles, magkahiwalay ang dalawa. Ang ginagawa <b>sa sandaling ito</b> ay <b>be + verb na may -ing</b>. <i>Kumakain ako</i> (ngayon) → <b>I'm eating</b>, hindi <b>I eat</b> at hindi <b>I eating</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Nagtatrabaho ako ngayon}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Nagluluto siya ng hapunan (babae)}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Umuulan}}
<h3>Tanong at negatibo</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Ano ang ginagawa mo?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Nakikinig ka ba?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Hindi ako natutulog}}
<h3>Ihambing sa present tense</h3>
<div class="tbl"><table><tr><th>Palagi (present tense)</th><th>Ngayon (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Mga verb na hindi nilalagyan ng -ing</h3>
<p>Ang mga verb (pandiwa) na nagsasabi ng <b>kalagayan</b> at hindi ng kilos, gaya ng <b>like, know, want, need</b> at <b>have</b> (kapag pag-aari), ay nananatili sa present tense kahit ngayon ang tinutukoy.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Kilala ko siya (lalaki)}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Gusto ko ng tubig}}
<div class="tip">Madalas makalusot ang nawawalang <b>be</b>: <b>I working.</b> ✗ → <b>I'm working.</b> ✓. At walang -ing ang kalagayan: <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["'Ano ang ginagawa mo ngayon?' sa Ingles?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Ang ginagawa ngayon ay itinatanong gamit ang be + -ing."],["I ___ coffee every morning. Ano ang dapat ilagay sa patlang?",["am drinking","drinking","drink","am drink"],2,"Nakagawian tuwing umaga, kaya present tense."],["Alin ang tamang pangungusap?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"Hindi nilalagyan ng -ing ang \"know\", \"want\" at \"have\" (pag-aari)."]],
practice:[
["mc","'Nagtatrabaho ako ngayon' sa Ingles?","I'm working now.","I work now am.","I'm work now.","I working now.","Ang ginagawa ngayon ay be + -ing."],
["mc","Tungkol kay Ana: 'Nagluluto siya ng hapunan' sa Ingles?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing ang gamit, at walang article bago ang \"dinner\"."],
["mc","Aling pangungusap ang tungkol sa ginagawa araw-araw?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Present tense ang gamit para sa nakagawian."],
["mc","'Ano ang ginagawa mo?' sa Ingles?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Question word + be + subject + -ing ang ayos."],
["mc","Tungkol kay Paolo: 'Kilala ko siya' sa Ingles?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","Kalagayan ang \"know\", kaya walang -ing."],
["or","Nagbabasa ako ng libro","I'm reading a book","read books","Isang libro ang binabasa ngayon, kaya article na \"a\" at singular na \"book\"."],
["or","Naglalaro ang mga bata","The kids are playing","kid is","Marami ang bata, kaya plural na \"kids\" at \"are\"."],
["or","Umuulan ngayon","It's raining now","rains","Nangyayari ngayon, kaya be + -ing."],
["fi","I'm __ TV.","Nanonood ako ng TV","watching","watch|watches|to watch","Pagkatapos ng \"be\", anyong -ing ang verb."],
["fi","What __ you doing?","Ano ang ginagawa mo?","are","do|is|does","Kapag \"you\" ang subject, \"are\" ang gamit."],
["fi","She __ working today.","Tungkol kay Ana: Hindi siya nagtatrabaho ngayong araw","isn't|is not","doesn't|don't|not","\"Isn't\" ang negatibo ng be + -ing kapag \"she\" ang subject."],
["ty","Nagluluto ako ngayon","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — gamitin ang anyong -ing","cook","Ang ginagawa ngayon ay be + -ing."],
["ty","(sa sandaling ito) Nanonood ako ng pelikula","I'm watching a movie","I'm · watching · movie — kailangan ng article na \"a\"","the","Isang pelikula at hindi pa tiyak kung alin, kaya article na \"a\"."],
["ty","Natutulog ang mga bata","The kids are sleeping|The children are sleeping","kids · are · sleeping — plural ang subject","kid","Marami ang bata, kaya plural na \"kids\" at \"are\"."]]},
{ id:"past", title:"Past tense: was / were at -ed", blurb:"May \"yesterday\" man, nagbabago pa rin ang verb: \"I worked yesterday\". At base form pagkatapos ng \"did\": \"Did you call?\".", deck:"Kuwentuhan", body:`
<p>Alam mo na siguro ang past tense. Ang madalas makalusot ay ang <b>-ed</b> kapag mabilis ka nang magsalita. Sa Tagalog, aspect ang ipinapakita ng verb (pandiwa): ang <i>kumain</i> ay "tapos na". Sa Ingles, tense ang ipinapakita: kailangang nasa past form ang verb kahit may <i>kahapon</i> na sa pangungusap. <b>He work yesterday.</b> ✗ → <b>He worked yesterday.</b> ✓</p>
<h3>Past ng be: was / were</h3>
<p><b>was</b> para sa I, he, she, it. <b>were</b> para sa you, we, they.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Pagod ako noon}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Masaya iyon}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Nasa bahay kami noon}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Abala ka ba noon?}}
<h3>Past ng ibang verb: -ed</h3>
<p>Idagdag ang <b>-ed</b> sa dulo ng verb. Pareho ang anyo kahit sino ang subject. Tatlo ang bigkas ng -ed: /t/ sa <b>worked</b> at <b>asked</b>, /d/ sa <b>called</b>, /ɪd/ sa <b>wanted</b>. Bigkasin nang buo ang dulo; kapag nawala ito, present tense ang maririnig ng kausap.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Nagtrabaho ako kahapon}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Nanood kami ng pelikula}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Tinawagan niya ako (babae ang tumawag)}}
<h3>Negatibo at tanong: did + base form</h3>
<p>Kapag may <b>didn't</b> o <b>Did</b>, iyon na ang nagpapakita ng past, kaya bumabalik sa base form ang verb: <b>What did she told you?</b> ✗ → <b>What did she tell you?</b> ✓</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Hindi ako nagtrabaho kahapon}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Tinawagan mo ba ako?}}
<div class="tip">Madalas makalusot: <b>I work yesterday.</b> ✗ → <b>I worked yesterday.</b> ✓ / <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Ano ang dapat ilagay sa patlang?",["was","were","did","are"],1,"Kapag \"they\" ang subject, \"were\" ang gamit."],["'Hindi ako nagtrabaho kahapon' sa Ingles?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Pagkatapos ng \"didn't\", base form ang verb."],["Did you ___ the movie? Ano ang dapat ilagay sa patlang?",["watch","watched","watching","watches"],0,"Pagkatapos ng \"Did\", base form ang verb."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","Kapag \"I\" ang subject, \"was\" ang gamit."],
["mc","'Nanood kami ng pelikula' sa Ingles?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Tapos na ang kilos, kaya past tense: \"watched\"."],
["mc","'Tumawag ka ba kahapon?' sa Ingles?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Pagkatapos ng \"Did\", base form ang verb: \"call\"."],
["mc","'Masaya iyon kanina' sa Ingles?","It was fun.","It were fun.","It did fun.","It funned.","Kapag \"it\" ang subject, \"was\" ang gamit."],
["mc","'Abala ka ba kahapon?' sa Ingles?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","Kalagayan ang \"busy\" at walang ibang verb, kaya \"be\" ang gamit sa tanong: \"Were\"."],
["or","Nanood kami ng pelikula","We watched a movie","watch movies","Isang pelikula, kaya article na \"a\" at singular na \"movie\"."],
["or","(Bata ang nagsasalita) Nakipaglaro ako sa mga kaibigan ko","I played with my friends","friend play","Marami ang kaibigan, kaya plural na \"friends\"."],
["or","Hindi ako nagtrabaho kahapon","I didn't work yesterday","worked","Pagkatapos ng \"didn't\", base form ang verb."],
["fi","We __ at home last night.","Nasa bahay kami kagabi","were","was|did|are","Kapag \"we\" ang subject, \"were\" ang gamit."],
["fi","I __ soccer yesterday.","Naglaro ako ng soccer kahapon","played","play|playing|was play","May \"yesterday\", kaya past tense: \"played\"."],
["fi","__ you work yesterday?","Nagtrabaho ka ba kahapon?","Did","Were|Do|Was","Sa tanong na past tense na may ibang verb, \"Did\" ang simula."],
["ty","Pagod ako kanina","I was tired","was · tired","were","Kapag \"I\" ang subject, \"was\" ang gamit."],
["ty","Nanood ako ng pelikula","I watched a movie","watched · movie — kailangan ng article na \"a\"","the","Isang pelikula at hindi pa tiyak kung alin, kaya article na \"a\"."],
["ty","Tinawagan ko ang mga kaibigan ko","I called my friends","called · my · friend — gawing plural ang noun","friend","Marami ang kaibigan, kaya plural na \"friends\"."]]},
{ id:"irregular-past", title:"Irregular na past: went, ate, saw", blurb:"\"Went\", hindi \"goed\"; at \"Did you go?\", hindi \"Did you went?\". Labindalawang verb muna ang kabisaduhin.", deck:"Kuwentuhan", body:`
<p>Ang mga verb (pandiwa) na pinakamadalas gamitin ay <b>irregular</b>: hindi -ed ang past form nila. Walang tuntunin, kaya kabisaduhin nang tatluhan gaya ng nakasanayan sa paaralan: base form, past form, past participle. Ang ikalawang hanay ang kailangan sa araling ito; magagamit mo ang ikatlo pagdating sa present perfect.</p>
<div class="tbl"><table><tr><th>Base form</th><th>Past form</th><th>Past participle</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">gone</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">had</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">gotten</td></tr><tr><td class="k">make</td><td class="k">made</td><td class="k">made</td></tr><tr><td class="k">come</td><td class="k">came</td><td class="k">come</td></tr><tr><td class="k">buy</td><td class="k">bought</td><td class="k">bought</td></tr><tr><td class="k">meet</td><td class="k">met</td><td class="k">met</td></tr><tr><td class="k">take</td><td class="k">took</td><td class="k">taken</td></tr><tr><td class="k">say</td><td class="k">said</td><td class="k">said</td></tr></table></div>
{{ex:I went to Cebu.|/aɪ ˈwent tə seˈbuː/|Pumunta ako sa Cebu}}{{ex:We ate adobo.|/wi ˈeɪt əˈdoʊboʊ/|Kumain kami ng adobo}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Nanood ako ng pelikula}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Nakipagkita ako sa mga kaibigan ko}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Bumili ako ng libro}}
<h3>Sa tanong at negatibo: balik sa base form</h3>
<p>Ang <b>did</b> na ang nagpapakita ng past, kaya base form ang verb na kasunod nito.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Ano ang ginawa mo?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Saan ka pumunta?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Hindi ako pumunta}}
<div class="tip">Madalas makalusot: <b>I goed.</b> ✗ → <b>I went.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Past ng \"go\" — ano ito?",["goed","gone","went","going"],2,"\"Went\" ang past ng \"go\"."],["'Ano ang ginawa mo?' sa Ingles?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Pagkatapos ng \"did\", base form na \"do\" ang gamit."],["I didn't ___ breakfast. Ano ang dapat ilagay sa patlang?",["ate","eaten","eats","eat"],3,"Pagkatapos ng \"didn't\", base form ang verb."]],
practice:[
["mc","Past ng \"eat\" — ano ito?","ate","eated","eat","eaten","\"Ate\" ang past ng \"eat\"."],
["mc","'Saan ka pumunta?' sa Ingles?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Pagkatapos ng \"did\", base form ang verb: \"go\"."],
["mc","'Bumili ako ng isang libro' sa Ingles?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","\"Bought\" ang past ng \"buy\"; isang libro, kaya article na \"a\"."],
["mc","Past ng \"see\" — ano ito?","saw","seed","seen","sawed","\"Saw\" ang past ng \"see\"."],
["mc","'Hindi ako pumunta' sa Ingles?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Pagkatapos ng \"didn't\", base form ang verb."],
["or","Nanood ako ng pelikula","I saw a movie","see movies","Isang pelikula, kaya article na \"a\" at singular na \"movie\"; \"saw\" ang past ng \"see\"."],
["or","Kumain kami ng pizza","We ate pizza","eated","\"Ate\" ang past ng \"eat\"."],
["or","Nakipagkita ako sa mga kaibigan ko","I met my friends","friend meet","Marami ang kaibigan, kaya plural na \"friends\"."],
["fi","I __ to Jeju last year.","Pumunta ako sa Jeju noong nakaraang taon","went","go|goed|gone","\"Went\" ang past ng \"go\"."],
["fi","What did you __?","Ano ang kinain mo?","eat","ate|eaten|eating","Pagkatapos ng \"did\", base form ang verb."],
["fi","She __ a new phone.","Tungkol kay Ana: Bumili siya ng bagong cellphone","bought","buyed|buy|buys","\"Bought\" ang past ng \"buy\"."],
["ty","Pumunta ako sa Busan","I went to Busan","went · to · Busan","go","\"Went\" ang past ng \"go\"."],
["ty","Bumili ako ng isang libro","I bought a book","bought · book — kailangan ng article na \"a\"","the","Isang libro at unang banggit pa lang, kaya article na \"a\"."],
["ty","Nakipagkita ako sa mga kaibigan ko","I met my friends|I saw my friends","met · my · friend — gawing plural ang noun","friend","Marami ang kaibigan, kaya plural na \"friends\"."]]},
{ id:"the", title:"Balik sa the: a sa una, the sa susunod, at kung kailan wala", blurb:"Hindi lahat ng \"ang\" ay \"the\". Unang banggit: \"a\". Alam na ng kausap: \"the\". Pangkalahatan: walang article.", deck:"Direksyon at sasakyan", body:`
<p>Hindi natututuhan ang article (pantukoy sa Ingles: <b>a, an, the</b>) sa isang upuan lang. Ito ang bitag para sa atin: halos bawat noun (pangngalan) sa Tagalog ay may <i>ang</i>, <i>ng</i> o <i>sa</i>, kaya nakakasanayang lagyan ng <b>the</b> ang bawat noun sa Ingles. Hindi <b>the</b> ang <i>ang</i>. Mas malapit sa <b>the</b> ang <i>yung</i> o <i>iyong</i>: ang bagay na alam na ninyong dalawa.</p>
<h3>A sa unang banggit, the sa susunod</h3>
<p>Kung ngayon pa lang maririnig ng kausap ang bagay, <b>a</b>. Kung nabanggit na at alam na niya kung alin, <b>the</b>.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Bumili ako ng polo. Asul ang polong iyon}}
<h3>The kapag malinaw kung alin</h3>
<p>Ang bintana ng kuwartong ito, ang istasyon dito, ang araw sa langit: malinaw kung alin, kaya <b>the</b> agad.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Puwede mo bang buksan ang bintana?}}{{ex:Where's the train station?|/ˈwerz ðə ˈtreɪn ˈsteɪʃn/|Nasaan po ang istasyon ng tren?}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|Mainit ang araw ngayon}}
<h3>Kapag pangkalahatan ang sinasabi: walang article</h3>
<p>Kapag ang buong uri o isang ideya ang tinutukoy, walang <b>the</b>: <b>the nature</b> ✗ → <b>nature</b> ✓, <b>the true happiness</b> ✗ → <b>true happiness</b> ✓.</p>
{{ex:I love nature.|/aɪ ˈlʌv ˈneɪtʃər/|Mahal ko ang kalikasan}}{{ex:Money is important.|/ˈmʌni ɪz ɪmˈpɔːrtnt/|Mahalaga ang pera}}
<h3>Mga pariralang walang article</h3>
<p>Kabisaduhin nang buo ang mga karaniwang parirala tungkol sa lugar, sasakyan at pagkain.</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Bus ang sinasakyan ko papasok sa trabaho}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Nasa bahay ako}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|Natutulog ako nang alas-onse}}
<div class="tip">Itanong sa sarili: "Alam ba ng kausap ko <b>kung alin</b>?" Kung oo, <b>the</b>. Kung hindi at isa lang, <b>a</b>. Kung pangkalahatan ang sinasabi, walang article.</div>`,
check:[["I have a cat. ___ cat is white. Ano ang dapat ilagay sa patlang?",["A","An","The","(wala)"],2,"Nabanggit na ang pusa, kaya \"the\"."],["I go to ___ work by bus. Ano ang dapat ilagay sa patlang?",["a","the","an","(wala)"],3,"Walang article sa \"go to work\"."],["Gusto mong ipabukas ang bintana ng kuwartong ito. Alin ang tamang sabihin?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Alam ninyong dalawa kung aling bintana, kaya \"the\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","Nabanggit na ang \"shirt\", kaya \"the\"."],
["mc","'Nasaan ang istasyon?' sa Ingles?","Where's the station?","Where's a station?","Where's station?","Where the station?","Ang istasyon dito ang tinutukoy, kaya \"the\"."],
["mc","Piliin ang tamang pangungusap.","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","Walang article sa \"go to work\" at sa \"by bus\"."],
["mc","'Mainit ang araw' sa Ingles?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Iisa lang ang araw, kaya \"the\"."],
["mc","'Nasa bahay ako' sa Ingles?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","Walang article sa \"at home\"."],
["or","Puwede mo bang buksan ang bintana?","Can you open the window","a windows","Alam ninyong dalawa kung aling bintana, kaya article na \"the\"."],
["or","Bus ang sinasakyan ko papasok sa trabaho","I go to work by bus","the a","Hindi lahat ng noun ay may article: wala sa \"go to work\" at sa \"by bus\"."],
["or","Malaki ang asong iyon","The dog is big","A dogs","Nabanggit na ang aso kanina, kaya article na \"the\" ang gamit."],
["fi","I saw a movie. __ movie was great.","Nanood ako ng pelikula. Ang ganda ng pelikulang iyon","The","A|An|Some","Nabanggit na ang pelikula, kaya \"The\"."],
["fi","Where's __ bathroom?","Nasaan ang banyo?","the","a|an|some","Ang banyo ng gusaling ito ang tinutukoy, kaya \"the\"."],
["fi","I have __ idea.","May ideya ako","an","a|the|some","Unang banggit at isa lang, at tunog na vowel ang simula ng \"idea\", kaya \"an\"."],
["ty","Puwede mo bang isara ang pinto?","Can you close the door|Could you close the door","can you · close · door — \"the\" ang article","a","Alam ninyong dalawa kung aling pinto, kaya article na \"the\"."],
["ty","Nasaan ang istasyon?","Where is the station|Where's the station","where · station — \"the\" ang article","a","Ang istasyon dito ang tinutukoy, kaya article na \"the\"."],
["ty","Nasa bahay ako","I'm at home|I'm home","I'm · at · home — hindi kailangan ng article","the","Hindi lahat ng \"sa\" ay may \"the\": walang article bago ang \"home\"."]]},
{ id:"adjectives", title:"Adjective at paghahambing: bigger, more expensive, the best", blurb:"Ang \"mas\" ay -er o \"more\", hindi sabay: \"better\", hindi \"more better\". Ang \"pinaka-\" ay \"the\" + -est o \"the most\".", deck:"Pamimili at pagbabayad", body:`
<p>Gaya sa Tagalog (<i>magandang bahay</i>), nauuna ang adjective (pang-uri) sa noun sa Ingles: <b>a beautiful house</b>. Wala lang <i>na</i> o <i>-ng</i> sa pagitan. Puwede rin itong sumunod sa <b>be</b>. Kasama sa araling ito ang paghahambing na kailangan mo sa pamimili.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|malaking bag}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Malaki ang bag na ito}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Masyadong maliit}}
<h3>Comparative: -er o more</h3>
<p>Dalawa ang anyo ng <i>mas</i> sa Ingles: <b>-er</b> sa maiikling salita, <b>more</b> bago ang mahahabang salita. Ang <i>kaysa</i> ay <b>than</b>.</p>
<div class="tbl"><table><tr><th>Karaniwan</th><th>Comparative (mas)</th><th>Superlative (pinaka-)</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Mas mura ito}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Mas mahal ito kaysa roon}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|May mas malaki po ba kayong size?}}
<h3>Superlative: may the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Ito ang pinakamagandang restawran dito}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Alin ang pinakamura?}}
<div class="tip">Madalas marinig ang <b>more cheaper</b>, <b>more better</b> at <b>more good</b>, pero mali pa rin ang mga ito sa pormal na Ingles ✗ → <b>cheaper</b>, <b>better</b> ✓. Isa lang ang piliin: -er o <b>more</b>, hindi sabay.</div>`,
check:[["Comparative ng \"big\" — ano ito?",["more big","biger","bigger","most big"],2,"Maikling salita, kaya -er; dinodoble ang huling consonant: \"bigger\"."],["This is ___ expensive than that. Ano ang dapat ilagay sa patlang?",["more","most","much","very"],0,"Mahabang salita ang \"expensive\", kaya \"more\" ang comparative."],["Superlative ng \"good\" — ano ito?",["the goodest","the most good","the better","the best"],3,"Ganito ang tatlong anyo: good, better, the best."]],
practice:[
["mc","Comparative ng \"cheap\" — ano ito?","cheaper","more cheap","cheapper","most cheap","Maikling salita, kaya -er ang idinadagdag."],
["mc","'Mas mahal ito' sa Ingles?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Mahabang salita ang \"expensive\", kaya \"more\"."],
["mc","'May mas malaki po ba kayong size?' sa Ingles?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Article + adjective + noun ang ayos: \"a bigger size\"."],
["mc","Comparative ng \"good\" — ano ito?","better","gooder","more good","best","Ganito ang tatlong anyo: good, better, best. Hindi \"more good\" o \"more better\"."],
["mc","'Ito ang pinakamagandang restawran' sa Ingles?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Bago ang superlative, may \"the\"."],
["or","May mas malaki po ba kayong size?","Do you have a bigger size","the sizes","Kahit anong mas malaking size at isa lang, kaya article na \"a\"."],
["or","Ito ang pinakamura","This is the cheapest","a cheaper","Bago ang superlative, article na \"the\" ang gamit."],
["or","Mas mura ito kaysa roon","This is cheaper than that","more","Hindi nilalagyan ng \"more\" ang adjective na may -er na."],
["fi","It's __ small.","Masyadong maliit","too","much|more|most","\"Too\" ang katumbas ng \"masyado\"."],
["fi","This is cheaper __ that one.","Mas mura ito kaysa roon","than","then|that|more","\"Than\" ang katumbas ng \"kaysa\"."],
["fi","It's the __ expensive one.","Ito ang pinakamahal","most","more|much|very","Sa mahabang salita, \"the most\" ang superlative."],
["ty","May mas maliit po ba kayong size?","Do you have a smaller size","smaller · size — kailangan ng article na \"a\"","the","Kahit anong mas maliit na size at isa lang, kaya article na \"a\"."],
["ty","Ito ang pinakamahusay","This is the best|This one is the best","the · best — \"the\" ang article","a","Bago ang superlative, article na \"the\" ang gamit."],
["ty","Mas mura ito","This is cheaper|This one is cheaper","cheap — ano ang comparative nito?","more","Maikling salita, kaya -er ang idinadagdag: \"cheaper\"."]]},
{ id:"going-to", title:"Pagsasabi ng plano: be going to", blurb:"\"I'm going to go\", hindi \"I going to go\": huwag kalimutan ang \"be\" kapag plano ang sinasabi.", deck:"Kuwentuhan", body:`
<p>Sa Tagalog, iisa ang anyong <i>kakain</i> para sa lahat ng gagawin pa lang. Sa Ingles, kapag <b>napagpasyahan mo na</b> ang plano, <b>be + going to + base form</b> ang gamit. May sariling aralin ang <b>will</b>.</p>
{{ex:I'm going to visit Cebu.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt seˈbuː/|Pupunta ako sa Cebu}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Bibili siya ng kotse (babae)}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Maghahapunan kami}}
<h3>Negatibo at tanong</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Hindi ako pupunta}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Darating ka ba?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Ano ang gagawin mo sa Sabado at Linggo?}}
<h3>Hula batay sa nakikita</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Uulan}}
<h3>Mga salitang pampanahon na kasama nito</h3>
<p>Ilagay sa dulo ng pangungusap ang <b>tomorrow</b> (bukas), <b>tonight</b> (mamayang gabi), <b>this weekend</b> (ngayong Sabado at Linggo) o <b>next week</b> (sa susunod na linggo).</p>
<div class="tip">Sa mabilis na pagsasalita, parang <b>gonna</b> ang tunog ng <b>going to</b>. At huwag kalimutan ang <b>be</b>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["'Makikipagkita ako sa kaibigan ko bukas' sa Ingles?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + base form ang hulmahan."],["She ___ going to study. Ano ang dapat ilagay sa patlang?",["am","are","is","be"],2,"Kapag \"she\" ang subject, \"is\" ang gamit."],["'Ano ang gagawin mo sa Sabado at Linggo?' sa Ingles?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Question word + be + subject + going to ang ayos."]],
practice:[
["mc","May plano ka na: 'Pupunta ako sa Busan' sa Ingles?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + base form ang hulmahan."],
["mc","They ___ going to come.","are","is","am","be","Kapag \"they\" ang subject, \"are\" ang gamit."],
["mc","Makulimlim na: 'Uulan' sa Ingles?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Pagkatapos ng \"going to\", base form ang verb."],
["mc","'Hindi ako pupunta' sa Ingles?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Inilalagay ang \"not\" pagkatapos ng \"be\"."],
["mc","'Darating ka ba?' sa Ingles?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Inililipat ang \"be\" sa unahan ng tanong."],
["or","Tungkol kay Ana: Bibili siya ng kotse","She's going to buy a car","the cars","Isang kotse, kaya article na \"a\" at singular na \"car\"."],
["or","Makikipagkita ako sa mga kaibigan ko","I'm going to meet my friends","friend","Marami ang kaibigan, kaya plural na \"friends\"."],
["or","Maghahapunan kami","We're going to have dinner","a","Walang article bago ang \"dinner\"."],
["fi","I'm going __ study tonight.","Mag-aaral ako mamayang gabi","to","for|at|will","going to + base form ang hulmahan."],
["fi","__ you going to come?","Darating ka ba?","Are","Do|Is|Will","Kapag \"you\" ang subject, \"Are\" ang gamit."],
["fi","It's going to __ tomorrow.","Uulan bukas","rain","rains|raining|rained","Pagkatapos ng \"going to\", base form ang verb."],
["ty","Manonood ako ng pelikula","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — kailangan ng article na \"a\"","the","Isang pelikula at hindi pa tiyak kung alin, kaya article na \"a\"."],
["ty","Ano ang gagawin mo?","What are you going to do","what · going to · do","will","Plano ang itinatanong, kaya \"be going to\"."],
["ty","Makikipagkita ako sa mga kaibigan ko","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — gawing plural ang noun","friend","Marami ang kaibigan, kaya plural na \"friends\"."]]},
{ id:"joining", title:"Pagdurugtong ng pangungusap: and, but, or, so, because", blurb:"Isa lang ang piliin: \"because\" o \"so\", \"although\" o \"but\". Hindi sabay, di tulad ng \"dahil … kaya\".", deck:"Damdamin at reaksyon", body:`
<p>Putol-putol pakinggan ang puro maiikling pangungusap. Sa tulong ng limang pang-ugnay na ito (<b>and, but, or, so, because</b>), mas natural ang daloy ng sinasabi mo.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Mahilig ako sa kape at tsaa}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Pagod ako pero masaya}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Kape o tsaa?}}
<h3>so: kaya</h3>
<p>Ang ayos ay <b>dahilan + so + resulta</b>, gaya ng <i>kaya</i> sa Tagalog.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Pagod ako, kaya umuwi ako}}
<h3>because: dahil</h3>
<p>Ang karaniwang ayos ay <b>resulta + because + dahilan</b>.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Umuwi ako dahil pagod ako}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Nanatili ako sa bahay dahil umuulan}}
<h3>too: din / rin</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Gusto ko rin iyon}}
<div class="tip">Sa Tagalog, natural ang <i>dahil … kaya</i> at <i>kahit … pero</i>. Sa Ingles, isa lang ang puwede: <b>Because I was tired, so I went home.</b> ✗ / <b>Although it rained, but we went.</b> ✗ → <b>Although it rained, we went.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. Ano ang dapat ilagay sa patlang?",["because","but","so","or"],2,"Dahilan muna bago ang resulta, kaya \"so\"."],["I stayed home ___ I was sick. Ano ang dapat ilagay sa patlang?",["because","so","but","and"],0,"Resulta muna bago ang dahilan, kaya \"because\"."],["Pinapapili mo ang kausap sa kape at tsaa. Alin ang tamang itanong?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Kapag isa lang sa dalawa ang pipiliin, \"or\" ang gamit."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","Magkasalungat ang dalawang bahagi, kaya \"but\"."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","Dahilan muna bago ang resulta, kaya \"so\"."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","Resulta muna bago ang dahilan, kaya \"because\"."],
["mc","'Kape o tsaa?' sa Ingles?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Kapag isa lang sa dalawa ang pipiliin, \"or\" ang gamit."],
["mc","'Pagod ako pero masaya' sa Ingles?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","\"But\" ang katumbas ng \"pero\"."],
["or","Mahilig ako sa mga pusa at aso","I like cats and dogs","cat dog","Ang buong uri ng hayop ang tinutukoy, kaya plural: \"cats\", \"dogs\"."],
["or","Isang kape at isang sandwich nga po","A coffee and a sandwich please","the or","Tig-isa ang inoorder, kaya may article na \"a\" ang bawat isa."],
["or","Nagutom ako, kaya kumain ako","I was hungry so I ate","because","Dahilan muna bago ang resulta, kaya \"so\"."],
["fi","I'm tired __ happy.","Pagod ako pero masaya","but","so|because|or","\"But\" ang katumbas ng \"pero\"."],
["fi","I stayed home __ it was raining.","Nanatili ako sa bahay dahil umuulan","because","so|but|or","Resulta muna bago ang dahilan, kaya \"because\"."],
["fi","Coffee __ tea?","Kape o tsaa?","or","so|but|because","Kapag isa lang sa dalawa ang pipiliin, \"or\" ang gamit."],
["ty","Mahilig ako sa kape at tsaa","I like coffee and tea","like · coffee · and · tea — hindi kailangan ng article","a","Pangkalahatan ang \"coffee\" at \"tea\" rito, kaya walang article."],
["ty","Pagod ako pero masaya","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","\"But\" ang katumbas ng \"pero\"."],
["ty","Mahilig ako sa mga aso at pusa","I like dogs and cats|I like cats and dogs","dog · and · cat — gawing plural ang mga noun","dog","Ang buong uri ng hayop ang tinutukoy, kaya plural: \"dogs\", \"cats\"."]]},
{ id:"pinoy-english", title:"Ingles-Pinoy: tama sa atin, iba sa Amerika", blurb:"CR, open the light, for a while: malinaw sa Pilipinas, pero iba ang dating sa Amerika. Ito ang mapa ng mga pagkakaiba.", deck:"Mga bitag ng Ingles-Pinoy", body:`
<p>Ang Ingles ng Pilipinas ay tunay na uri ng Ingles: may sarili itong mga salita, at marami sa mga iyon ang nakatala na sa mga diksiyonaryo. Kaya hindi listahan ng mali ang araling ito. Mapa ito ng mga bahaging iba ang Ingles-Pinoy sa American English, para alam mo kung alin ang gagamitin kapag taga-ibang bansa ang kausap mo.</p>
<h3>1. Mga salitang iba ang kahulugan sa labas ng Pilipinas</h3>
<div class="tbl"><table><tr><th>Sa Pilipinas</th><th>Sa American English</th><th>Tala</th></tr><tr><td>CR, comfort room</td><td class="k">restroom, bathroom</td><td>Hindi kilala ang CR sa Amerika</td></tr><tr><td>open / close the light</td><td class="k">turn on / turn off the light</td><td>Para sa pinto, bintana at kahon ang open at close</td></tr><tr><td>for a while (sa telepono)</td><td class="k">Just a moment, please.</td><td>Ang for a while ay "sa loob ng ilang panahon"</td></tr><tr><td>go down (sa jeep o bus)</td><td class="k">get off</td><td>Ang go down ay pagbaba sa hagdan o sa ibabang palapag</td></tr><tr><td>It's traffic.</td><td class="k">There's a lot of traffic.</td><td>Noun ang traffic, hindi adjective</td></tr><tr><td>brownout</td><td class="k">power outage</td><td>Blackout din ang tawag kapag malawak ang sakop</td></tr><tr><td>ref</td><td class="k">fridge, refrigerator</td><td>Sa Amerika, ang ref ay referee sa laro</td></tr><tr><td>aircon</td><td class="k">air conditioner, AC</td><td>Maiintindihan ang aircon, pero AC ang karaniwan</td></tr><tr><td>rubber shoes</td><td class="k">sneakers</td><td>Sneakers ang karaniwang tawag sa Amerika</td></tr><tr><td>xerox</td><td class="k">photocopy, make a copy</td><td>Pangalan ng kompanya ang Xerox</td></tr><tr><td>load</td><td class="k">phone credit</td><td>Karaniwang hindi maiintindihan ang load sa ganitong gamit</td></tr><tr><td>commute</td><td class="k">take the bus, take the train</td><td>Sa Amerika, commute ang araw-araw na biyahe papasok sa trabaho, kahit naka-kotse</td></tr><tr><td>salvage (pagpatay)</td><td class="k">salvage</td><td>Sa Amerika, "sagipin" ang kahulugan nito, kabaligtaran ng sa atin</td></tr><tr><td>gimmick (lakad sa gabi)</td><td class="k">a night out</td><td>Ang gimmick ay pakulo para makaakit ng mamimili</td></tr><tr><td>bold (malaswa)</td><td class="k">bold</td><td>Sa Amerika, "matapang" o "malakas ang loob" ang kahulugan nito</td></tr></table></div>
{{ex:Where's the restroom?|/ˈwerz ðə ˈrestruːm/|Nasaan po ang CR?}}{{ex:Please turn off the lights.|/ˈpliːz ˈtɜːrn ˈɔːf ðə ˈlaɪts/|Pakipatay ang mga ilaw}}{{ex:Just a moment, please.|/ˈdʒʌst ə ˈmoʊmənt ˈpliːz/|Sandali lang po}}{{ex:I'll get off here.|/aɪl ˈget ˈɔːf ˈhɪr/|Dito na lang ako bababa}}{{ex:There's a lot of traffic.|/ðerz ə ˈlɑːt əv ˈtræfɪk/|Matindi ang traffic}}{{ex:There was a power outage last night.|/ðer wəz ə ˈpaʊər ˈaʊtɪdʒ ˈlæst ˈnaɪt/|Nag-brownout kagabi}}{{ex:The air conditioner isn't working.|/ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/|Sira ang aircon}}
<p>Kapag pinalitan mo ang salita, isama ang tamang article at plural (maramihan): <b>the restroom</b> (ang CR ng lugar na ito), <b>the lights</b>, <b>a power outage</b>. Hindi nabibilang ang <b>traffic</b>, kaya walang <b>a</b> bago nito at walang -s.</p>
<h3>2. Maliliit na gawi sa grammar</h3>
<p>Iba ang pangkat na ito: madalas marinig ang mga ito, pero mali pa rin sa pormal na Ingles saanmang bansa.</p>
<div class="tbl"><table><tr><th>Madalas marinig ✗</th><th>Pormal na Ingles ✓</th></tr><tr><td>fill up a form</td><td class="k">fill out a form</td></tr><tr><td>cope up with</td><td class="k">cope with</td></tr><tr><td>result to</td><td class="k">result in</td></tr><tr><td>based from</td><td class="k">based on</td></tr><tr><td>share to your friends</td><td class="k">share with your friends</td></tr><tr><td>for my opinion</td><td class="k">in my opinion</td></tr><tr><td>commit a mistake</td><td class="k">make a mistake</td></tr><tr><td>with regards to</td><td class="k">with regard to, regarding</td></tr><tr><td>more better, more harder</td><td class="k">better, harder</td></tr><tr><td>luggages, furnitures, advices</td><td class="k">luggage, furniture, advice</td></tr></table></div>
{{ex:I need to fill out a form.|/aɪ ˈniːd tə ˈfɪl ˈaʊt ə ˈfɔːrm/|Kailangan kong sagutan ang isang form}}{{ex:I have two pieces of luggage.|/aɪ ˈhæv ˈtuː ˈpiːsɪz əv ˈlʌgɪdʒ/|May dalawa akong bagahe}}{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|Nagkamali ako}}{{ex:In my opinion, this one is better.|/ɪn maɪ əˈpɪnjən ˈðɪs ˈwʌn ɪz ˈbetər/|Sa palagay ko, mas maganda ito}}{{ex:Can you give me some advice?|/kən ju ˈgɪv mi ˈsʌm ədˈvaɪs/|Puwede mo ba akong payuhan?}}
<p>Hindi nabibilang ang <b>luggage</b>, <b>furniture</b> at <b>advice</b>, kaya walang plural na -s. Kapag kailangang bilangin, <b>pieces of</b> ang gamit: <b>two pieces of luggage</b>, <b>a piece of advice</b>.</p>
<h3>3. Mga salitang ayos na ayos</h3>
<p>Walang katumbas sa Amerika ang <b>jeepney, barangay, sari-sari store</b> at <b>pasalubong</b>, dahil sa Pilipinas lang mayroon ng mga ito. Gamitin mo ang mga ito nang walang alinlangan, at ipaliwanag sa ilang salita kapag banyaga ang kausap: <b>a jeepney, a kind of small bus</b>.</p>
{{ex:I took a jeepney to work.|/aɪ ˈtʊk ə ˈdʒiːpni tə ˈwɜːrk/|Nag-jeep ako papasok sa trabaho}}
<div class="tip">Hindi kailangang ikahiya ang Ingles-Pinoy; sa Pilipinas, ito ang nagkakaintindihan. Kapag taga-ibang bansa ang kausap, itanong lang sa sarili: "Ganito rin kaya ang kahulugan nito sa kanila?" Sa ganoong usapan: <b>Where is the CR?</b> → <b>Where is the restroom?</b> / <b>Open the light.</b> → <b>Turn on the light.</b></div>`,
check:[["Nasa isang restawran ka sa Amerika at hinahanap mo ang CR. Alin ang pinakanatural na itanong?",["Where is the CR?","Where is the restroom?","Where is restroom?","Where is a comfort room?"],1,"Sa American English, \"restroom\" o \"bathroom\" ang tawag sa CR; ang restroom ng lugar na iyon ang tinutukoy, kaya may \"the\"."],["'Pakibuksan ang ilaw' sa Ingles?",["Please turn on the light.","Please open the light.","Please open light.","Please turn open the light."],0,"Sa ilaw at mga appliance, \"turn on\" at \"turn off\" ang gamit; para sa pinto, bintana at kahon ang \"open\"."],["May dalawa kang maleta sa airport. Alin ang tamang pangungusap?",["I have two luggages.","I have two luggage.","I have a two luggages.","I have two pieces of luggage."],3,"Hindi nabibilang ang \"luggage\", kaya walang plural na -s. Binibilang ito gamit ang \"pieces of\"."]],
practice:[
["mc","Nasa telepono ka at pinaghihintay mo sandali ang kausap. Alin ang sasabihin mo?","Just a moment, please.","For a while.","For a while, please.","A while, please.","Sa American English, \"sa loob ng ilang panahon\" ang \"for a while\"; sa telepono, \"Just a moment, please\" ang sinasabi."],
["mc","Nasa bus ka: 'Dito na lang ako bababa' sa Ingles?","I'll get off here.","I'll go down here.","I'll get down here.","I'll go off here.","Sa sasakyan, \"get off\" ang gamit; pagbaba sa hagdan ang \"go down\"."],
["mc","'Matrapik ngayon' sa Ingles?","There's a lot of traffic today.","It's traffic today.","It's very traffic today.","There are many traffics today.","Noun ang \"traffic\", hindi adjective, at hindi ito nabibilang: \"a lot of traffic\"."],
["mc","Piliin ang tamang pangungusap.","I need to fill out this form.","I need to fill up this form.","I need to fill this form up.","I need to fill on this form.","Sa form, \"fill out\" ang gamit; pagpuno ng lalagyan, gaya ng tangke, ang \"fill up\"."],
["mc","Alin ang tamang pangungusap tungkol sa payo?","She gave me some advice.","She gave me some advices.","She gave me an advice.","She gave me many advices.","Hindi nabibilang ang \"advice\": walang \"an\" at walang plural na -s."],
["or","Nasaan ang CR?","Where is the restroom","a CR","\"Restroom\" ang tawag sa CR sa Amerika; ang nasa lugar na ito ang tinutukoy, kaya article na \"the\"."],
["or","Pakipatay ang mga ilaw","Please turn off the lights","close light","Sa ilaw, \"turn off\" ang gamit, hindi \"close\"; marami ang ilaw, kaya plural na \"lights\"."],
["or","Nagkamali ako","I made a mistake","committed the","\"Make a mistake\" ang natural, hindi \"commit\"; isang pagkakamali at unang banggit, kaya article na \"a\"."],
["or","May dalawa akong bagahe","I have two pieces of luggage","luggages piece","Hindi nabibilang ang \"luggage\", kaya walang -s; ang \"pieces\" ang plural pagkatapos ng \"two\"."],
["fi","This movie is based __ a true story.","Batay sa totoong kuwento ang pelikulang ito","on","from|in|at","\"Based on\" ang tamang pares, hindi \"based from\"."],
["fi","Please share this __ your friends.","Pakibahagi ito sa mga kaibigan mo","with","to|for|at","Kapag tao ang babahaginan, \"share with\" ang gamit, hindi \"share to\"."],
["fi","__ my opinion, it's too expensive.","Sa palagay ko, masyado itong mahal","In","For|On|At","\"In my opinion\" ang tamang parirala, hindi \"for my opinion\"."],
["ty","Nasaan ang CR?","Where is the restroom|Where's the restroom|Where is the bathroom|Where's the bathroom","where · restroom — \"the\" ang article","a CR","\"Restroom\" o \"bathroom\" ang tawag sa CR sa Amerika; ang nasa lugar na ito ang tinutukoy, kaya article na \"the\"."],
["ty","Kailangan kong sagutan ang isang form","I need to fill out a form|I have to fill out a form|I need to fill in a form|I have to fill in a form|I need to fill a form out|I have to fill a form out","need to · fill out · form — kailangan ng article na \"a\"","up the","Sa form, \"fill out\" ang gamit, hindi \"fill up\"; isang form at hindi pa tiyak kung alin, kaya article na \"a\"."],
["ty","Nag-brownout kagabi","There was a power outage last night|There was a blackout last night|We had a power outage last night|We had a blackout last night|The power went out last night","there was · power outage · last night — kailangan ng article","brownout the","\"Power outage\" ang tawag sa brownout sa Amerika; isang pangyayari ito at unang banggit, kaya article na \"a\"."],
["ty","May dalawa akong bagahe","I have two pieces of luggage|I have two bags|I have two suitcases","two · piece · luggage — walang -s ang \"luggage\"","luggages","Hindi nabibilang ang \"luggage\", kaya walang plural na -s; ang \"pieces\" ang binibilang: \"two pieces of luggage\"."]]},
];

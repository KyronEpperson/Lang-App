/* Paquets fr-en (francophones qui apprennent l'anglais). Source des paquets : une carte par ligne, champs séparés par " | " : cible | prononciation | sens | note
   prononciation = API entre barres obliques, façon zh-en et pt-en (profil fr.md §6, tools/content/zh/PRON-RULES.md) : ˈ avant la syllabe accentuée, tous les mots pleins accentués.
   Les noms de paquets sont fixés dans DECKNAMES.md. */
module.exports = {
"Salutations": `
Hello. | /həˈloʊ/ | Bonjour | Le plus neutre des saluts : il convient à tout le monde, à toute heure. Le « h » est un vrai souffle qu'on entend, contrairement au « h » muet du français
Hi! | /ˈhaɪ/ | Salut ! (informel) | Plus léger et plus proche que "Hello". Aux États-Unis, on le dit même entre collègues
Hey! | /ˈheɪ/ | Hé ! / Coucou ! | Entre amis. Avec un inconnu, ça peut paraître brusque
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | Bonjour (le matin) | Jusqu'à midi. Entre connaissances, un simple "Morning!" suffit
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | Bonjour (l'après-midi) | De midi à 18 h environ. Assez formel : on l'entend surtout dans les magasins et les bureaux
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | Bonsoir (en arrivant) | "Good evening" sert à saluer en arrivant le soir. "Good night" ne sert qu'à dire au revoir
How are you? | /ˈhaʊ ər ju/ | Comment vas-tu ? | C'est une formule de salut, pas une vraie question. Réponds brièvement : "Good, thanks. You?"
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | Bien, merci. Et toi ? | "I'm fine, thank you" sonne comme un manuel ; "good" est bien plus naturel. Ici, "I'm good" veut dire « je vais bien »
What's up? | /ˈwʌts ˈʌp/ | Quoi de neuf ? | Salut décontracté entre amis ou collègues, comme « Quoi de neuf ? » ou « Ça va ? ». On n'attend pas de vraie nouvelle : la réponse habituelle est "Not much."
Not much. | /ˈnɑːt ˈmʌtʃ/ | Pas grand-chose | La réponse la plus courante à "What's up?". Renvoie la question : "Not much, you?"
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | Comment ça va ? | Version décontractée de "How are you?". Réponse typique : "Pretty good!"
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | Enchanté / Enchantée | Seulement la première fois qu'on rencontre quelqu'un. Réponse : "Nice to meet you, too."
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | Ça fait longtemps ! | Entre connaissances proches. Plus neutre : "It's been a while."
See you later. | /ˈsiː ju ˈleɪtər/ | À plus tard | On le dit en se quittant, même sans projet de se revoir : comme notre « à plus ! »
Take care. | /ˈteɪk ˈker/ | Prends soin de toi | Au revoir chaleureux ; on l'écrit aussi à la fin des messages
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | Bonne journée ! / Bonne soirée ! | Les caissiers le disent souvent après l'encaissement. Réponds simplement "You too!"
Bye! | /ˈbaɪ/ | Au revoir ! | Entre adultes, "Bye-bye" paraît un peu enfantin
Good night. | /ˈgʊd ˈnaɪt/ | Bonne nuit | Seulement pour dire au revoir le soir ou avant d'aller dormir. Pour saluer en arrivant : "Good evening"
`,
"Se présenter": `
My name is Ana. | /maɪ ˈneɪm ɪz ˈænə/ | Je m'appelle Ana | À l'oral, on dit plus souvent simplement "I'm Ana."
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | Appelle-moi Jay, s'il te plaît | Pratique si ton prénom est difficile à prononcer pour des anglophones, ou si tu préfères un surnom
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | Comment préfères-tu que je t'appelle ? | Pratique pour savoir quel prénom ou quel surnom la personne utilise. Évite "How do I call you?"
Where are you from? | /ˈwer ər ju frʌm/ | D'où viens-tu ? | Une des premières questions qu'on te posera. En anglais, "from" se met à la fin : on ne dit pas "From where are you?"
I'm from France. | /aɪm frəm ˈfræns/ | Je viens de France | Pas d'article devant le pays : "I'm from France", comme "I love France" (le français dit « la France »). Ajoute la ville : "I'm from Lyon, in France."
I live in Paris. | /aɪ ˈlɪv ɪn ˈpærɪs/ | J'habite à Paris | « À Paris » se dit "in Paris", jamais "at Paris". Pour une adresse précise, on utilise "at" : "I live at 12 Main Street."
I'm a student. | /aɪm ə ˈstuːdnt/ | Je suis étudiant / étudiante | Le métier prend un article : "I'm a student", jamais "I'm student". Le français supprime l'article après « être » (Je suis étudiant), pas l'anglais
What do you do? | /ˈwʌt də ju ˈduː/ | Que fais-tu dans la vie ? | La façon habituelle de demander le métier de quelqu'un. Ce n'est pas « Qu'est-ce que tu fais ? » (en ce moment), qui se dit "What are you doing?"
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | Je travaille dans une banque | Avec une entreprise ou un lieu précis, on dit "at" : "I work at Google."
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | Je travaille dans le marketing | Avec un domaine ou un service, on utilise "in". Ne le confonds pas avec "at" (une entreprise)
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | J'ai 25 ans | En français on a un âge ; en anglais on l'est, avec "be" : "I'm 25 years old" ou simplement "I'm 25". Jamais "I have 25 years"
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | Je suis vraiment fan de randonnée | Beaucoup plus naturel que "My hobby is...". "into" se construit avec un nom ou un verbe en -ing
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | J'aime regarder des films | Après "like", le verbe prend souvent -ing : "I like watching". Le français garde l'infinitif (aimer regarder) ; "I like to watch" existe aussi
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | Cela fait un an que j'apprends l'anglais | Le français dit « j'apprends depuis un an » avec le présent ; l'anglais veut "have been" + -ing avec "for". Jamais "I learn English since one year"
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | Je suis ici en vacances | En anglais britannique : "on holiday". "vacation" reste au singulier, alors que « vacances » est pluriel en français
I'm married. | /aɪm ˈmærid/ | Je suis marié / mariée | Si ce n'est pas le cas : "I'm single." On dit "married to" quelqu'un, pas "married with"
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | J'ai un petit frère | "younger brother" = petit frère, "older brother" = grand frère ; à l'oral, on entend aussi "little brother" et "big brother". Frères et sœurs en général : "siblings"
`,
"Survie 1": `
Excuse me. | /ɪkˈskjuːz mi/ | Excusez-moi | Pour attirer l'attention de quelqu'un ou demander le passage. Si tu bouscules quelqu'un, dis plutôt "Sorry!"
Thank you. | /ˈθæŋk ju/ | Merci | Le "th" /θ/ se fait avec la langue entre les dents, en soufflant. Ne dis pas « sank you » ni « tank you »
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | Merci beaucoup | Plus décontracté et plus chaleureux que "Thank you"
You're welcome. | /jʊr ˈwelkəm/ | De rien | Plus décontracté : "Sure.", "No problem.", "Anytime." Attention : "welcome" veut aussi dire « bienvenu »
No problem. | /ˈnoʊ ˈprɑːbləm/ | Pas de problème | Réponse très courante à "thank you"
I'm sorry. | /aɪm ˈsɑːri/ | Je suis désolé / désolée | Pour s'excuser pour de bon. Si tu frôles juste quelqu'un, "Sorry!" suffit
Yes, please. | /ˈjes ˈpliːz/ | Oui, s'il te plaît | Pour accepter une offre comme "Would you like some water?". Un "Yes" tout seul paraît sec
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | Non, merci | Bien plus poli qu'un simple "No". Plus décontracté : "I'm good, thanks."
Sorry? | /ˈsɑːri/ | Pardon ? Comment ? | Avec une intonation montante, cela veut dire « tu peux répéter ? ». Aux États-Unis, c'est plus courant que "Pardon?"
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | Pourrais-tu répéter ? | Dis-le sans crainte quand tu n'as pas compris : les anglophones le font aussi
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | Pourrais-tu parler plus lentement ? | Avec "please", c'est encore plus poli. Autre formule : "Could you slow down?"
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | Je ne comprends pas | Assez sec. Plus doux : "Sorry, I didn't quite catch that." La négation passe par l'auxiliaire : "don't understand", jamais "I not understand"
Do you speak French? | /də ju ˈspiːk ˈfrentʃ/ | Parles-tu français ? | Plus naturel et plus poli que "Can you speak...?". Les noms de langues prennent une majuscule en anglais : "French", "English"
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | Je parle un peu anglais | En américain, le "tt" de "little" se dit comme un « d » très rapide, jamais comme un « t » net. Dis "a little" avec un indénombrable, "a few" avec un pluriel
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | Comment dit-on cela en anglais ? | En montrant un objet, tu apprends le mot sur-le-champ. Évite "How do you call this?" (calque de « Comment ça s'appelle ? ») : dis "What do you call this?"
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | Que veut dire ceci ? | À utiliser en montrant un menu ou un panneau. Après "does", le verbe reste sans -s : "mean", pas "means"
Can you help me? | /kən ju ˈhelp mi/ | Peux-tu m'aider ? | Plus poli : "Could you help me?"
`,
"Survie 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | Où sont les toilettes ? | Aux États-Unis : "restroom" ou "bathroom". En anglais britannique : "toilet". Aux États-Unis, "toilet" désigne la cuvette elle-même
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | Combien ça coûte ? | Pour plusieurs articles : "How much are these?"
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | Y a-t-il un distributeur de billets par ici ? | « Il y a » ne varie pas en français, mais "there is / there are" s'accorde avec ce qui suit : "Is there an ATM?", "Are there any ATMs?". En anglais britannique : "cash machine"
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | Puis-je avoir le mot de passe du wifi ? | Prononce « ouaï-faï », pas « oui-fi » comme en français. On peut aussi demander : "Is there Wi-Fi here?"
I'm lost. | /aɪm ˈlɔːst/ | Je suis perdu / perdue | Montre la carte et demande : "Where am I on this map?"
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | Puis-je payer par carte ? | Comme en français, on dit "by card" (par carte). Certains commerces demandent un montant minimum
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | Un instant, s'il vous plaît | Formule polie très courante dans les magasins et au téléphone
Just a second. | /ˈdʒʌst ə ˈsekənd/ | Une seconde | Informel. Plus court : "Just a sec."
No worries. | /ˈnoʊ ˈwɜːriz/ | Pas de souci | Très courant en Australie et au Royaume-Uni, et aussi aux États-Unis
That's okay. | /ˈðæts oʊˈkeɪ/ | Ce n'est rien | Réponse à des excuses. On dit aussi : "Don't worry about it."
Of course. | /əv ˈkɔːrs/ | Bien sûr | Pour accepter une demande. En réponse à une question, cela peut sonner comme « évidemment ! » : dis-le d'un ton aimable
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | Je ne suis pas sûr / sûre | Plus doux que "I don't know". "sure" se prononce /ˈʃʊr/, avec le son « ch »
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | J'ai une question | En cours ou en réunion : "Can I ask a question?". "question" se dit /ˈkwestʃən/ avec un "tch", pas « kès-tion » comme en français
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | Peux-tu me l'écrire ? | La meilleure solution si tu ne comprends pas une adresse, un nombre ou un nom
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | Puis-je prendre une photo ? | Dans les musées et les magasins, demande d'abord. On "take" une photo : jamais "make a photo", calque de « faire une photo »
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | Pourriez-vous nous prendre en photo ? | Ensuite, remercie : "Thank you so much!"
After you. | /ˈæftər ˈjuː/ | Après vous | Pour laisser passer quelqu'un à une porte ou dans un ascenseur. Tenir la porte est une politesse de base
Watch out! | /ˈwɑːtʃ ˈaʊt/ | Attention ! | On le crie face à un danger. "Look out!" veut dire la même chose
`,
"Itinéraires et transports": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | Comment aller à la station de métro ? | Aux États-Unis : "subway" ; en anglais britannique : "underground" ou "tube". Change la destination et la phrase sert pour tout. (Le RER, lui, est un "commuter train".)
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | C'est loin d'ici ? | Comme le « c' » de « c'est », le sujet "it" est obligatoire : "Is it far?". Réponse possible : "It's ten minutes away."
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | On peut y aller à pied ? | On peut aussi demander "Can I walk there?". Le « l » de "walking" ne se prononce pas
Go straight. | /ˈgoʊ ˈstreɪt/ | Continue tout droit | "Go straight for two blocks." Aux États-Unis, on compte les distances en "blocks" (pâtés de maisons)
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | Tourne à gauche au coin de la rue | Au feu : "at the light". Pour la droite : "Turn right"
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | C'est sur ta droite | On dit "on your right", pas "in your right". Même chose avec "on your left"
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | C'est de l'autre côté de la rue | "across from" = en face de : "The bank is across from the park."
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | C'est à côté de la banque | « À côté de » = "next to". Attention : ni "next of", ni "next the bank"
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | Quelle ligne va au centre-ville ? | "downtown" s'emploie sans "to" : "go downtown". Et "goes" prend un -s : troisième personne, accord avec "line"
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | Où dois-je changer ? | Là où le français dit « changer », l'américain dit "transfer". En anglais britannique : "Where do I change?"
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | Ce bus va-t-il à l'aéroport ? | Après "does", le verbe reste sans -s : "go", pas "goes". Devant une voyelle, "the" se dit /ði/ : "the airport"
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | À quel arrêt dois-je descendre ? | "get off" = descendre (d'un bus ou du métro). La préposition "at" reste à la fin de la phrase
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | Un billet pour Boston, s'il vous plaît | Devant la destination, on met "to" : "to Boston"
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | Aller-retour ou aller simple ? | En anglais britannique : "Return or single?"
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | Pouvez-vous m'emmener à cette adresse ? | Montre l'écran dans le taxi pour éviter les erreurs. "address" s'écrit avec deux « d » et deux « s » (le français n'a qu'un « d »)
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | Pouvez-vous vous arrêter ici ? | Pour que le taxi ou la voiture s'arrête. On peut aussi dire "Right here is fine."
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | Ça prend combien de temps ? | Réponse : "About 20 minutes." Le verbe est le même qu'en français (« ça prend 20 minutes ») : "take". Avec "does it", le sujet est "it"
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | Cette place est-elle prise ? | Si elle est libre : "No, go ahead." La voyelle de "seat" est longue /iː/ : trop courte, elle devient "sit"
`,
"Au restaurant": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | Une table pour deux, s'il vous plaît | Aux États-Unis, on attend généralement qu'un serveur nous place
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | Avez-vous réservé ? | C'est le personnel qui le demande. Réponse : "Yes, under Garcia."
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | Puis-je voir la carte ? | L'accent tonique de "menu" est sur la première syllabe, /ˈmenjuː/, et non sur la dernière. Attention : « la carte » (du restaurant) se dit "the menu", pas "the card"
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | Que me conseillez-vous ? | On peut aussi demander "What's popular here?". Réponse possible : "I'd recommend the salmon."
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | Je prends le steak | Formule de base pour commander : "I'll have" + plat. Pas de "I take" : le français dit « je prends », pas l'anglais
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | Je pourrais avoir un Coca ? | "Can I get...?" est la façon la plus courante de commander aux États-Unis
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | Saignant, s'il vous plaît | Réponse à "How would you like your steak?". Autres cuissons : "rare" (bleu), "medium" (à point), "well done" (bien cuit)
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | Sans oignons, s'il vous plaît | On peut aussi dire "Can I get it without onions?". "onion" se prononce /ˈʌnjən/ : le « o » se dit comme un « a » bref
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | Je suis allergique aux cacahuètes | "allergic" porte l'accent tonique sur la deuxième syllabe, /əˈlɜːrdʒɪk/ ; le nom "allergy" est accentué au début. Après "allergic", la préposition est "to"
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | C'est épicé ? | Attention : "spicy" veut dire piquant, fort en piment. Pour « bien assaisonné », dis "flavorful". Pour un plat doux, demande "mild"
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | Pourrions-nous avoir de l'eau ? | Aux États-Unis, l'eau du robinet est servie gratuitement (comme la « carafe d'eau » en France). Dans une demande ou une offre, on garde "some"
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | Tout était parfait | Réponse quand on te demande "How is everything?"
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | L'addition, s'il vous plaît | En anglais britannique : "the bill". Aux États-Unis, on paie souvent à la table
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | Peut-on payer séparément ? | On peut aussi demander "separate checks"
It's on me. | /ɪts ɑːn ˈmiː/ | C'est moi qui invite | On dit aussi "My treat!"
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | Je peux l'emporter ? | Pour emporter les restes : "Can I get a box?"
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | Le pourboire est-il inclus ? | En France, le service est compris dans l'addition ; aux États-Unis, il ne l'est presque jamais et le pourboire se laisse en plus, en général entre 15 et 20 %
`,
"Café et supérette": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | Je pourrais avoir un americano glacé ? | "iced" tient en une seule syllabe et finit par « st » : /ˈaɪst/. C'est la façon habituelle de commander aux États-Unis : "Can I get...?"
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | Quelle taille désirez-vous ? | C'est la question du personnel
Small, please. | /ˈsmɔːl ˈpliːz/ | Un petit, s'il vous plaît | Chez Starbucks, les tailles s'appellent "tall", "grande" et "venti"
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | Sur place ou à emporter ? | En anglais britannique : "Eat in or take away?"
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | Je peux avoir du lait d'avoine à la place ? | "instead" = à la place. Cela peut coûter un supplément
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | Moins de glaçons, s'il vous plaît | Sans glaçon : "No ice, please."
Decaf, please. | /ˈdiːkæf ˈpliːz/ | Un déca, s'il vous plaît | Abréviation de "decaffeinated"
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | À quel nom, la commande ? | Le personnel le demande pour l'écrire sur le gobelet. Si ton prénom est difficile pour un anglophone (Guillaume, Aurélien), épelle-le ou donne un prénom court
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | Vous avez besoin d'un sac ? | Si non : "No, I'm good."
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | Je peux avoir un reçu ? | Le "p" de "receipt" ne se prononce pas : /rɪˈsiːt/
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | Où trouver des piles ? | Phrase passe-partout pour chercher n'importe quel produit. Une pile électrique se dit "battery", jamais "pile"
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | Vendez-vous des chargeurs de portable ? | On peut aussi demander "Do you have...?". En anglais britannique, le portable est un "mobile"
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | Pouvez-vous réchauffer ceci ? | À l'oral, les mots s'enchaînent : "heat this up" se dit presque d'un seul souffle
That's it. | /ˈðæts ˈɪt/ | C'est tout | Réponse à "Anything else?"
Here you go. | /ˈhɪr ju ˈgoʊ/ | Voilà, tenez | Quand on remet de l'argent ou n'importe quel objet à quelqu'un
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | Gardez la monnaie | Courant avec les chauffeurs de taxi et les livreurs, en guise de pourboire. "change" = la monnaie rendue : ne le prends pas pour « le change »
`,
"Achats et paiements": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | Je regarde seulement, merci | Réponse à "Can I help you find anything?"
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | Vous l'avez en taille M ? | Tailles : "small", "medium", "large". Les tailles américaines ne sont pas les tailles françaises
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | Vous l'avez en noir ? | Comme en français (« en noir »), on utilise "in" avec les couleurs
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | Je peux l'essayer ? | "try on" = essayer un vêtement ou des chaussures. Avec un pronom, il se glisse au milieu : "try it on"
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | Où sont les cabines d'essayage ? | En anglais britannique : "changing room"
It's too big. | /ɪts ˈtuː ˈbɪg/ | C'est trop grand | Si c'est trop petit : "It's too small." "too" = trop ; "very" = très : ne les confonds pas
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | C'est un peu serré | Si c'est trop large : "It's a bit loose."
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | C'est en solde ? | "on sale" = en promotion ; "for sale" = à vendre. Ne les confonds pas ! Faux ami : "sale" ne veut jamais dire « sale »
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | Vous pouvez me faire une réduction ? | Dans les magasins américains, on ne marchande presque jamais : seulement sur les marchés aux puces ou pour de l'occasion
I'll take it. | /aɪl ˈteɪk ɪt/ | Je le prends | Pour plusieurs articles : "I'll take them."
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | En espèces ou par carte ? | Question typique à la caisse
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | Vous acceptez Apple Pay ? | "take" = accepter (un moyen de paiement)
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | Je peux me faire rembourser ? | Garde toujours le reçu. Le nom "refund" = remboursement
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | Je voudrais échanger ceci | Explique la raison : "It's the wrong size."
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | Pouvez-vous me faire un paquet-cadeau ? | Le "w" de "wrap" ne se prononce pas : /ˈræp/
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | Est-ce que cela inclut les taxes ? | Aux États-Unis, le prix affiché n'inclut pas la taxe : elle s'ajoute à la caisse (contrairement aux prix TTC français)
`,
"Nombres, heures et dates": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | Quelle heure est-il ? | À un inconnu : "Excuse me, do you have the time?". L'anglais utilise l'horloge de 12 heures ("a.m." / "p.m.") et non celle de 24 heures
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | Il est trois heures et demie | On dit aussi "half past three" (plus britannique)
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | Il est cinq heures moins le quart | "quarter" = 15 minutes. On peut aussi dire "four forty-five"
At noon | /ət ˈnuːn/ | À midi | Minuit se dit "midnight". C'est plus clair que "12 a.m." ou "12 p.m."
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | Quelle est la date aujourd'hui ? | Pour le jour de la semaine : "What day is it today?"
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | C'est le 3 mai | Les dates se lisent avec des ordinaux : "May third". En anglais, le mois passe avant le jour et prend une majuscule. Piège : à l'américaine, "5/3" veut dire le 3 mai, pas le 5 mars
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | Mon anniversaire est en octobre | "in" avec les mois ; "on" avec les dates : "on October 5th"
On Monday | /ɑːn ˈmʌndeɪ/ | Lundi | Les jours se construisent avec "on" et sans article : "on Monday", pas "the Monday". Tous les lundis : "on Mondays"
Next weekend | /ˈnekst ˈwiːkend/ | Le week-end prochain | Avec "next", "last" et "this", pas de préposition : jamais "in next weekend"
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | Après-demain | Avant-hier : "the day before yesterday"
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | Treize ou trente ? | Dans 13, l'accent tonique est sur la fin (/ˌθɜːrˈtiːn/, voyelle longue) ; dans 30, sur le début (/ˈθɜːrti/). Vérifie toujours un prix à l'oreille
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | Quinze dollars | 15,50 $ se lit "fifteen fifty". En anglais, on écrit un point au lieu de la virgule : $15.50
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | Deux cent cinquante (250) | Aux États-Unis, on omet souvent le "and" : "two hundred fifty". "hundred" ne prend jamais de -s après un nombre, alors que le français écrit « deux cents »
Ten thousand | /ˈten ˈθaʊznd/ | Dix mille (10 000) | En anglais, les milliers se séparent par une virgule, les décimales par un point : 3.5 se lit "three point five" (pour nous, 3,5)
One million | /ˈwʌn ˈmɪljən/ | Un million (1 000 000) | Piège : "billion" = un milliard (1 000 000 000), alors que le français « un billion » vaut mille milliards. Le français utilise l'échelle longue, l'anglais américain la courte
Twice a week | /ˈtwaɪs ə ˈwiːk/ | Deux fois par semaine | "once" (une fois), "twice" (deux fois), "three times" (trois fois). Pour « par semaine », on dit "a week", jamais "by week"
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | Dans dix minutes | "in" + durée = « dans » : "The train leaves in ten minutes."
`,
"Conversation informelle": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | Comment était ton week-end ? | Question typique du lundi. Réponds en une ou deux phrases et renvoie la question
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | C'était plutôt tranquille | Ici, "pretty" veut dire « plutôt », pas « joli »
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | Tu as des projets pour le week-end ? | Question typique du vendredi. Si tu n'as rien de prévu : "Not really, just relaxing."
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | Beau temps aujourd'hui, hein ? | La météo est le sujet le plus sûr avec n'importe qui. "weather" est indénombrable : "nice weather", jamais "a nice weather"
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | Il fait un froid glacial aujourd'hui | S'il fait chaud : "It's boiling!" ou "It's so hot!". Jamais "It makes cold" : « il fait froid » se dit avec "be" ("It's cold"), et le « il » devient "it"
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | Depuis combien de temps habites-tu ici ? | Le français dit « depuis » avec le présent ; l'anglais veut le present perfect : jamais "How long do you live here?". Réponse : "About three years."
Have you been to Latin America? | /həv ju bɪn tə ˈlætn əˈmerɪkə/ | As-tu déjà voyagé en Amérique latine ? | Pour parler d'expériences, on utilise "have been to" + lieu
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | Que fais-tu pour t'amuser ? | Bien plus naturel que "What's your hobby?"
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | As-tu vu de bonnes séries récemment ? | "show" = série ou émission de télévision
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | Ça a l'air amusant | Pour réagir à ce qu'on te raconte. Attention : "fun" (amusant) n'est pas "funny" (drôle)
Same here. | /ˈseɪm ˈhɪr/ | Pareil pour moi | Décontracté : "Same!"
Me neither. | /ˈmiː ˈniːðər/ | Moi non plus | Pour répondre à une phrase négative : "I don't like it." → "Me neither." (jamais "Me too")
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | Je sais, hein ? | Pour montrer que tu es tout à fait d'accord. Informel
Oh, really? | /ˈoʊ ˈriːəli/ | Ah bon ? | Montre de l'intérêt. Intonation montante
By the way | /baɪ ðə ˈweɪ/ | Au fait | Pour changer de sujet. Dans les messages : "BTW"
How's work? | /ˈhaʊz ˈwɜːrk/ | Et le boulot ? | Entre connaissances. Réponse : "Busy, but good!"
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | Ça m'a fait plaisir de discuter avec toi | Pour clore une conversation avec naturel
`,
"Émotions et réactions": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | Ça me fait tellement plaisir pour toi ! | Quand il arrive quelque chose de bien à quelqu'un. On dit "happy for" + personne
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | Félicitations ! | Toujours avec un -s final, comme « félicitations ». Abrégé : "Congrats!"
That's awesome! | /ˈðæts ˈɔːsəm/ | C'est génial ! | Réaction très fréquente aux États-Unis
No way! | /ˈnoʊ ˈweɪ/ | Pas possible ! | Exprime la surprise. Sert aussi à refuser : "No way, I'm not doing that."
Seriously? | /ˈsɪriəsli/ | Sérieux ? | Selon le ton, exprime la surprise ou l'agacement
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | Je suis tellement fatigué / fatiguée | Pour dire « épuisé » : "I'm exhausted."
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | Je suis très stressé / stressée | Plus naturel que "I have stress". "out" renforce le sens : "stressed out" = à bout
I'm bored. | /aɪm ˈbɔːrd/ | Je m'ennuie | Attention : "I'm boring" veut dire « je suis ennuyeux ». Le français « s'ennuyer » devient "be bored", avec "be" et le participe en -ed
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | Je suis emballé / emballée | "excited" = plein d'enthousiasme, impatient, sans le sens sexuel de « excité » en français
I'm nervous. | /aɪm ˈnɜːrvəs/ | Je suis nerveux / nerveuse | Avant un entretien d'embauche ou une présentation. À quelqu'un d'autre : "Don't be nervous."
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | Quel dommage | Pour un petit contretemps. Pour quelque chose de grave, dis "I'm sorry to hear that."
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | Ça me fait de la peine d'apprendre ça | Ce n'est pas une excuse : c'est de l'empathie. Ne le confonds pas avec "I'm sorry" (pour t'excuser)
What a relief! | /ˈwʌt ə rɪˈliːf/ | Quel soulagement ! | Va bien avec "Phew!"
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | Oh mon Dieu ! | Version atténuée de "Oh my God". Dans les messages : "OMG"
I'm upset. | /aɪm ʌpˈset/ | Je suis contrarié / contrariée | Entre fâché et triste
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | C'est tellement agaçant | Dire "You're annoying" à quelqu'un est assez fort
I can't wait! | /aɪ ˈkænt ˈweɪt/ | J'ai trop hâte ! | Pour quelque chose qu'on attend avec impatience. Le français dit « j'ai hâte » (avec « avoir ») ; l'anglais, "I can't wait"
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | Ce n'est pas un drame | Pour rassurer quelqu'un qui s'excuse
`,
"Compliments et affection": `
You look great! | /ju ˈlʊk ˈgreɪt/ | Tu as très bonne mine ! | Pour commenter l'allure de quelqu'un : "You look...". Naturel entre connaissances
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | J'adore tes chaussures | Aux États-Unis, il est normal de complimenter ainsi un objet, même un inconnu. Le « s » final de "shoes" se dit /z/
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | Cette couleur te va bien | "look good on" + personne = aller bien à quelqu'un. En américain, on écrit "color" ; en britannique, "colour"
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | Tu as un très beau sourire | Compliment chaleureux, plutôt entre personnes qui se connaissent
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | Tu es tellement drôle | "funny" = drôle ; "fun" = amusant (quelqu'un avec qui on passe un bon moment)
Great job! | /ˈgreɪt ˈdʒɑːb/ | Beau travail ! | Au travail ou en classe. On dit aussi "Nice work!"
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | Je suis fier / fière de toi | Pour la famille et les amis ; parfois aussi d'un chef à une personne de son équipe
You did it! | /ju ˈdɪd ɪt/ | Tu as réussi ! | Pour quelqu'un qui vient d'atteindre un objectif
Your French is really good! | /jʊr ˈfrentʃ ɪz ˈriːəli ˈgʊd/ | Ton français est vraiment bon ! | Ça fera plaisir à un ami qui apprend le français. En anglais, les noms de langues prennent une majuscule
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | Tu as bon goût | Pour les vêtements, la musique ou la déco. "taste" veut aussi dire « saveur »
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | J'ai vraiment aimé passer du temps avec toi | À la fin d'un rendez-vous ou d'une rencontre. Après "enjoy", le verbe prend -ing : "enjoyed spending"
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | Ça te dirait d'aller boire un café un de ces jours ? | "grab" = prendre ou manger quelque chose rapidement. À l'oral, "want to" sonne souvent comme "wanna"
I miss you. | /aɪ ˈmɪs ju/ | Tu me manques | Attention, c'est inversé par rapport au français : en anglais, le sujet est celui qui ressent l'absence ("I"), alors que le sujet français est la personne absente (« tu »)
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | Tu comptes beaucoup pour moi | Pour exprimer une affection sincère
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | Tu me sauves la vie ! | S'emploie en exagérant, même pour de petits services
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | Tu as illuminé ma journée ! | Quand quelqu'un te dit quelque chose de gentil ou t'offre un cadeau
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | C'est très gentil de ta part | Pour remercier d'une aide ou d'un compliment. "kind" = gentil, aimable
`,
"Travail et e-mails": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | J'espère que vous allez bien | Formule d'ouverture d'un e-mail formel. Plus décontracté : "I hope you're doing well."
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | Je vous écris pour me renseigner sur le planning | Annonce le motif dès la première phrase : "I'm writing to" + verbe, comme notre « Je vous écris pour… »
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | Je joins le rapport | "Please find attached..." est plus formel (c'est notre « Veuillez trouver ci-joint »). "report" = rapport, compte rendu
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | Petit rappel pour la réunion de demain | Une façon aimable de relancer. Le génitif en 's marque l'appartenance : "tomorrow's meeting"
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | Dites-moi si vous avez des questions | Formule de clôture classique d'un e-mail. Après "if", on garde le présent : "if you have", jamais "if you will have"
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | Pourriez-vous m'envoyer le fichier d'ici vendredi ? | "by" = au plus tard (date limite) ; "until" = jusqu'à (une durée)
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | Veuillez excuser ma réponse tardive | Variante plus positive : "Thanks for your patience."
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | Merci de m'avoir répondu | "get back to" = recontacter, répondre
Best regards, | /ˈbest rɪˈgɑːrdz/ | Cordialement, | Formule neutre de fin d'e-mail, équivalent de notre « Cordialement ». Entre collègues proches : "Best," ou "Thanks,"
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | Fixons une réunion | Aux États-Unis, "schedule" se dit /ˈskedʒuːl/ (avec « sk ») ; au Royaume-Uni, /ˈʃedjuːl/
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | Je vais être en retard | Pour prévenir quand tu es en chemin : "I'll be there in 10."
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | On peut décaler la réunion à 15 h ? | Pour l'avancer : "move up" ("Can we move it up to 1?"). Formule très courante dans les dialogues de bureau, y compris dans les exercices du TOEIC
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | Je reviens vers vous | Pour gagner du temps quand tu ne peux pas répondre tout de suite. En entretien d'embauche, c'est aussi ce que dit le recruteur : "We'll get back to you."
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | Peux-tu me l'expliquer pas à pas ? | "walk through" = guider pas à pas
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | Faisons un point la semaine prochaine | Propose un échange court pour se tenir au courant
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | Quelle est la date limite ? | On peut aussi demander "When is this due?". Question qu'on entend souvent dans les dialogues de bureau, y compris dans ceux du TOEIC
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | Aujourd'hui, je travaille de chez moi | Abrégé : "WFH". On dit aussi "I'm working remotely."
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | Je ne travaille pas demain | Pour un jour de congé : "I'm taking a day off tomorrow."
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | Merci pour tout ton travail | Pour remercier le travail d'une personne ou d'une équipe
`,
"Téléphone et abréviations": `
Hello, this is Ana. | /həˈloʊ ˈðɪs ɪz ˈænə/ | Allô, c'est Ana | Au téléphone, on dit "This is Ana", pas "I'm Ana"
Can I speak to Mr. Garcia? | /kən aɪ ˈspiːk tə ˈmɪstər gɑːrˈsiːə/ | Puis-je parler à M. Garcia ? | Plus formel : "May I speak to...?". "Mr." se lit "mister"
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | C'est de la part de qui ? | C'est la personne qui décroche qui le demande
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | Ne quittez pas | Pour demander d'attendre, au téléphone ou en face à face. Le « h » de "hold" est un souffle
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | Pardon, ça coupe | "break up" = (la ligne) coupe. Il signifie aussi rompre avec quelqu'un
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | Je peux te rappeler ? | Si tu ne peux pas parler : "I'm in a meeting. Can I call you back?"
I'll text you. | /aɪl ˈtekst ju/ | Je t'envoie un SMS | Aux États-Unis, envoyer un SMS se dit "text", employé comme verbe
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | Je suis en route | Dans les messages : "OMW"
LOL | /ˌel oʊ ˈel/ | mdr (laughing out loud) | C'est plus un petit rire écrit qu'un vrai éclat de rire
BRB | /ˌbiː ɑːr ˈbiː/ | je reviens tout de suite (be right back) | Dans les chats et les jeux, quand tu t'absentes un instant. On dit les lettres une à une : /ˌbiː ɑːr ˈbiː/
BTW | /ˌbiː tiː ˈdʌbəljuː/ | au fait (by the way) | Pour changer de sujet. Le « w » se dit "double-u" : /ˌbiː tiː ˈdʌbəljuː/
TBH | /ˌtiː biː ˈeɪtʃ/ | honnêtement (to be honest) | Se place au début ou à la fin de la phrase
IDK | /ˌaɪ diː ˈkeɪ/ | aucune idée (I don't know) | S'écrit souvent en minuscules : idk
OMG | /ˌoʊ em ˈdʒiː/ | oh mon Dieu (oh my God) | Se dit aussi à voix haute, lettre par lettre
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | dès que possible (as soon as possible) | Se dit aussi comme un mot : /ˈeɪsæp/. Avec un chef, il est plus poli de donner une date précise
TTYL | /ˌtiː tiː waɪ ˈel/ | on se reparle plus tard (talk to you later) | Pour clore une conversation
NVM | /ˌen viː ˈem/ | oublie ça (never mind) | Pour retirer une question
FYI | /ˌef waɪ ˈaɪ/ | pour info (for your information) | Très courant dans les e-mails et les chats de travail : « pour que tu sois au courant »
`,
"Voyages (aéroport et hôtel)": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | Voici mon passeport | Quand tu le tends au comptoir ou à la douane. "passport" porte l'accent tonique sur la première syllabe : /ˈpæspɔːrt/
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | Je suis ici pour faire du tourisme | Réponse à "What's the purpose of your visit?" à l'immigration
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | Je reste une semaine | Réponse à "How long are you staying?". Attention : "stay" = rester ; "rest" = se reposer
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | Je loge à l'hôtel Hilton | Réponse à "Where are you staying?". Avec un hôtel précis, on utilise "at"
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | Côté hublot ou côté couloir ? | Le « s » de "aisle" est muet : /ˈaɪl/
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | Je voudrais une place côté couloir, s'il vous plaît | Pour le hublot : "a window seat". On dit "an aisle", car le mot commence par une voyelle (/ˈaɪl/)
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | Où récupérer les bagages ? | En anglais britannique : "baggage reclaim". "baggage" est indénombrable : jamais "baggages"
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | Mes bagages sont introuvables | "luggage" est indénombrable : jamais "luggages", donc le verbe est "is" (accord). Un bagage : "a piece of luggage". « Ma valise » se dit "my suitcase"
I have a reservation under Garcia. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər gɑːrˈsiːə/ | J'ai une réservation au nom de Garcia | "under" + nom = au nom de
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | À quelle heure faut-il libérer la chambre ? | Pour partir plus tard : "Can I get a late check-out?"
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | Puis-je m'enregistrer plus tôt ? | Le verbe s'écrit en deux mots ("check in") ; le nom prend un trait d'union ("check-in")
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | Le petit-déjeuner est-il compris ? | "breakfast" se prononce /ˈbrekfəst/ : la première voyelle est un « è » bref, accentué
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | La climatisation ne marche pas | Abrégé : "AC". "isn't working" = ne fonctionne pas (en ce moment)
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | Pourrais-je avoir des serviettes en plus ? | "extra" = en plus. Dans une demande, on garde "some"
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | Pouvez-vous garder mes bagages jusqu'à 15 h ? | Pour laisser ses bagages après avoir libéré la chambre. "hold" = garder (en dépôt)
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | Mon vol a été retardé | S'il est annulé : "canceled". Faux ami : "delay" = retard, pas « délai ». La terminaison -ed se dit /d/ après une voyelle
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | Où se trouve la porte d'embarquement 12 ? | Les numéros se lisent comme des nombres : "gate twelve", "seat fourteen C". Sur les panneaux : "Departures" (départs) et "Gate" (porte)
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | Dois-je sortir mon ordinateur portable ? | Au contrôle de sécurité. "laptop" = ordinateur portable
`,
"Santé et urgences": `
Help! | /ˈhelp/ | Au secours ! | À crier en cas d'urgence. Le « h » est un vrai souffle : sans lui, on entend "elp"
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | Appelle le 911 ! | Aux États-Unis, le numéro d'urgence se lit "nine one one" ; en France, c'est le 112 (ou le 15, le 17, le 18), et au Royaume-Uni le 999
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | J'ai besoin d'un médecin | Si c'est urgent : "I need an ambulance." "need" + nom, sans "to"
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | Je ne me sens pas bien | La forme la plus courante et la plus neutre
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | J'ai mal à la tête | Partie du corps + "ache" : "stomachache", "toothache". Le français dit « avoir mal à », l'anglais « avoir » un mal : "I have a..."
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | J'ai de la fièvre | Attention : "a fever", avec article
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | J'ai mal au ventre | On dit "my stomach", avec le possessif, jamais "the stomach" (le français dit « le ventre »). Et "hurts" prend -s : troisième personne
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | J'ai mal à la gorge | "sore" = douloureux. "throat" = la gorge (à l'intérieur) ; le cou, c'est "neck"
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | J'ai la tête qui tourne | Avec des nausées : "I feel sick." ou "I feel nauseous." Le verbe est "feel", pas "have"
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | Je me suis foulé la cheville | On dit "my ankle", jamais "the ankle". Le poignet se dit "wrist"
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | Y a-t-il une pharmacie près d'ici ? | Aux États-Unis, on dit aussi "drugstore". « Il y a » se dit "Is there" (singulier) ou "Are there" (pluriel). "pharmacy" porte l'accent tonique sur la première syllabe
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | Ai-je besoin d'une ordonnance ? | Les médicaments sans ordonnance se disent "over-the-counter". "prescription" = ordonnance
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | J'ai perdu mon portefeuille | Objets trouvés : "lost and found"
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | On m'a volé mon portable | "stole" est le prétérit de "steal" (voler un objet) ; on "rob" une personne ou un lieu
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | Où est le commissariat ? | "police" porte l'accent tonique sur la fin : /pəˈliːs/
I need to contact my embassy. | /aɪ ˈniːd tə ˈkɑːntækt maɪ ˈembəsi/ | Je dois contacter mon ambassade | Indispensable si tu perds ton passeport. "embassy" porte l'accent tonique sur la première syllabe
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | J'ai une assurance voyage | Souscris-la avant de partir : les soins médicaux aux États-Unis coûtent très cher
`,
"Phrasal verbs": `
pick up | /ˈpɪk ˈʌp/ | récupérer (quelqu'un) / ramasser | "I'll pick you up at 7." Le pronom (you, it) se glisse au milieu : "pick you up"
give up | /ˈgɪv ˈʌp/ | abandonner / arrêter (une habitude) | "Don't give up!". Suivi d'un verbe, on met -ing : "give up smoking"
figure out | /ˈfɪgjər ˈaʊt/ | comprendre / résoudre | "I can't figure out this app." (Je n'arrive pas à comprendre cette appli.)
find out | /ˈfaɪnd ˈaʊt/ | découvrir / se renseigner | Pour apprendre une information. "figure out" = résoudre quelque chose en réfléchissant
look for | /ˈlʊk fɔːr/ | chercher | "I'm looking for my keys." Le français dit simplement « chercher » ; l'anglais ajoute "for". Quand tu l'as trouvé : "find"
look after | /ˈlʊk ˈæftər/ | s'occuper de (quelqu'un) | "Can you look after my cat?". Aux États-Unis, on dit aussi "take care of"
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | avoir hâte de | Attention : "to" est une préposition, donc un nom ou -ing : "I'm looking forward to seeing you", jamais "to see you" (l'infinitif français « j'ai hâte de te voir » est un piège)
run out of | /ˈrʌn ˈaʊt əv/ | être à court de | "We ran out of milk." (On n'a plus de lait.) Le sujet est la personne : "We ran out", pas le lait
turn on | /ˈtɜːrn ˈɑːn/ | allumer | "Turn on the light." Avec un pronom : "Turn it on."
turn off | /ˈtɜːrn ˈɔːf/ | éteindre (un appareil, la lumière) | Avec un pronom, il se glisse au milieu : "Turn it off." (jamais "turn off it")
turn down | /ˈtɜːrn ˈdaʊn/ | refuser / baisser (le volume) | "She turned down the offer." / "Turn it down!"
put off | /ˈpʊt ˈɔːf/ | repousser / remettre à plus tard | Bien plus courant que le verbe latin "postpone" (reporter) : "Stop putting it off!"
show up | /ˈʃoʊ ˈʌp/ | se présenter / apparaître | "He didn't show up to the party." (Il ne s'est pas pointé à la fête.)
hang out | /ˈhæŋ ˈaʊt/ | traîner / sortir avec des amis | Passer du temps ensemble, sans programme précis : "We hung out at the park." Prétérit : "hung out"
check out | /ˈtʃek ˈaʊt/ | jeter un œil / regarder | "Check out this video!" Signifie aussi libérer sa chambre d'hôtel
work out | /ˈwɜːrk ˈaʊt/ | faire du sport / se passer bien | "I work out every day." / "It'll work out." (Ça va s'arranger.)
come up with | /ˈkʌm ˈʌp wɪð/ | trouver (une idée) | Pour une idée, une excuse ou une solution : "She came up with a great idea."
get along with | /ˈget əˈlɔːŋ wɪð/ | s'entendre avec | "I get along with my coworkers."
calm down | /ˈkɑːm ˈdaʊn/ | se calmer | Le « l » de "calm" est muet : /ˈkɑːm/. Dire "Calm down!" à quelqu'un de fâché peut aggraver les choses
set up | /ˈset ˈʌp/ | installer / organiser | "Can you help me set up my printer?"
break up | /ˈbreɪk ˈʌp/ | rompre / se séparer | "They broke up last month." Avec qui : "break up with"
fill out | /ˈfɪl ˈaʊt/ | remplir (un formulaire) | "Please fill out this form." En anglais britannique : "fill in"
grow up | /ˈgroʊ ˈʌp/ | grandir | "I grew up in Lyon." (J'ai grandi à Lyon.)
wake up | /ˈweɪk ˈʌp/ | se réveiller | Ouvrir les yeux = "wake up" ; sortir du lit = "get up"
come in | /ˈkʌm ˈɪn/ | entrer | Plus naturel que "enter" (entrer), qui sonne formel, comme sur un panneau. "Come in!" = Entre !
go on | /ˈgoʊ ˈɑːn/ | continuer / se passer | Plus naturel que "continue" (continuer) : "Please go on." Et "What's going on?" = Qu'est-ce qui se passe ?
put up with | /ˈpʊt ˈʌp wɪð/ | supporter / tolérer | Bien plus courant que le verbe latin "tolerate" (tolérer) : "I can't put up with this noise." À ne pas confondre avec "support" (soutenir)
put out | /ˈpʊt ˈaʊt/ | éteindre (un feu, une cigarette) | Plus courant que "extinguish". La lumière ne s'éteint pas avec "put out" : on dit "turn off"
get up | /ˈget ˈʌp/ | se lever | "I get up at seven." Se réveiller = "wake up" ; se lever = "get up"
go out | /ˈgoʊ ˈaʊt/ | sortir (s'amuser) | "Do you want to go out tonight?" Avec un partenaire : "go out with" = sortir avec quelqu'un
come back | /ˈkʌm ˈbæk/ | revenir | À l'oral, plus courant que "return" (retourner) : "When are you coming back?"
get on | /ˈget ˈɑːn/ | monter (dans un bus, un train, un avion) | Pour la voiture ou le taxi : "get in". Pour descendre : "get off" (bus) et "get out of" (voiture)
take off | /ˈteɪk ˈɔːf/ | enlever (un vêtement) / décoller | "Please take off your shoes." / "The plane took off late."
put on | /ˈpʊt ˈɑːn/ | mettre (un vêtement) | "Put on your jacket. It's cold." Avec un pronom : "Put it on." Contraire : "take off"
look up | /ˈlʊk ˈʌp/ | chercher (dans un dictionnaire ou en ligne) | "Look it up online." Pour un objet perdu, on utilise "look for"
give back | /ˈgɪv ˈbæk/ | rendre | Avec des objets, plus courant que "return" : "Give it back!"
throw away | /ˈθroʊ əˈweɪ/ | jeter (à la poubelle) | "Don't throw it away!" Aux États-Unis, on dit aussi "throw out"
sit down | /ˈsɪt ˈdaʊn/ | s'asseoir | "Please sit down." Pour se lever : "stand up"
end up | /ˈend ˈʌp/ | finir par / se retrouver (sans l'avoir prévu) | "We ended up at a pizza place." (On a fini dans une pizzeria.)
run into | /ˈrʌn ˈɪntuː/ | tomber sur (quelqu'un) | "I ran into Lucas at the mall." Pour une rencontre imprévue. "into" s'écrit en un seul mot
take care of | /ˈteɪk ˈker əv/ | prendre soin de / se charger de | "I'll take care of it." (Je m'en occupe.) Pour s'occuper de quelqu'un, on dit aussi "look after"
hurry up | /ˈhɜːri ˈʌp/ | se dépêcher | "Hurry up! We're late." Sans "up", c'est tout aussi correct : "Hurry!"
`,
"Pièges de prononciation": `
ship | /ˈʃɪp/ | bateau / navire | /ɪ/ : entre « i » et « é », bref et relâché. Trop long et tendu, il devient "sheep" (mouton)
sheep | /ˈʃiːp/ | mouton | /iː/ : un « i » long et tendu, lèvres étirées. Trop court, il devient "ship". Le "sh" est le « ch » de « chat »
shoes | /ˈʃuːz/ | chaussures | Le "sh" est le « ch » de « chat » : /ˈʃuːz/. Le « s » final se dit /z/. Compare avec "choose"
choose | /ˈtʃuːz/ | choisir | Le "ch" anglais se dit souvent « tch » (/tʃ/) : /ˈtʃuːz/. Lu à la française, "choose" devient "shoes". Seul le premier son change
hair | /ˈher/ | cheveux | Le « h » est un vrai souffle, comme pour embuer une vitre : /ˈher/. Sans lui, tu dis "air". Singulier en anglais : "my hair is long"
air | /ˈer/ | l'air (qu'on respire) | Pas de souffle au début : /ˈer/. Avec un « h » ajouté, tu dis "hair" (cheveux). Le « r » est anglais, pas celui de la gorge
school | /ˈskuːl/ | école | Le "ch" se dit /k/ : /ˈskuːl/, avec un « ou » long. Ne le lis pas à la française
worked | /ˈwɜːrkt/ | travaillé (prétérit de "work") | Une seule syllabe : /ˈwɜːrkt/. Le -ed se dit /t/ après un son sourd. Jamais « wor-ked » en deux syllabes
think | /ˈθɪŋk/ | penser | "th" /θ/ : langue entre les dents, en soufflant. Avec un « s », on dit "sink" ; avec un « t », "tink"
sink | /ˈsɪŋk/ | évier / couler | « s » normal /s/ : /ˈsɪŋk/. Compare avec "think". Le « n » devant « k » est /ŋ/ : ne nasalise pas la voyelle comme en français
three | /ˈθriː/ | trois | Langue entre les dents : /ˈθriː/. Avec un « t », on dit "tree" ; avec un « s », « sri »
tree | /ˈtriː/ | arbre | « t » normal suivi du « r » anglais : /ˈtriː/. Compare avec "three"
this | /ˈðɪs/ | ceci / ce | "th" voisé /ð/ : langue entre les dents et gorge qui vibre : /ˈðɪs/. Ni « z », ni « d »
cat | /ˈkæt/ | chat | /æ/ : bouche grande ouverte, un « a » presque « è » : /ˈkæt/. À ne pas confondre avec /ʌ/ de "cut"
cut | /ˈkʌt/ | couper / une coupure | /ʌ/ : un « a » bref et central, jamais « eu » : /ˈkʌt/. Compare avec "cat"
eat | /ˈiːt/ | manger | /iː/ long, sans souffle au début : /ˈiːt/. Avec un « h », tu dis "heat" (chaleur)
heat | /ˈhiːt/ | chaleur | Souffle au début : /ˈhiːt/. Sans lui, tu dis "eat" (manger)
walk | /ˈwɔːk/ | marcher | Le « l » est muet : /ˈwɔːk/. Voyelle ouverte, comme le « o » de « porte », allongée
work | /ˈwɜːrk/ | travailler | /ˈwɜːrk/ : voyelle centrale, lèvres non arrondies (pas « eu »), puis « r » anglais. Compare avec "walk"
beach | /ˈbiːtʃ/ | plage | Voyelle longue : /ˈbiːtʃ/. Raccourcie, elle donne un mot grossier. Le « ch » final est /tʃ/
leave | /ˈliːv/ | partir / quitter | /iː/ long : /ˈliːv/. Compare avec "live" (habiter), qui est bref
live | /ˈlɪv/ | habiter / vivre | /ɪ/ bref et relâché : /ˈlɪv/. Le français n'a qu'un « i » : ne l'allonge pas
banana | /bəˈnænə/ | banane | L'accent tonique est au milieu, /bəˈnænə/, pas « ba-na-NA ». Les deux autres voyelles se réduisent à un « e » très faible
hotel | /hoʊˈtel/ | l'hôtel (hébergement) | Le « h » se prononce, et l'accent tonique est à la fin : /hoʊˈtel/. En français, le « h » est muet
milk | /ˈmɪlk/ | lait | /ɪ/ bref et relâché : /ˈmɪlk/, pas le « i » tendu du français. Le « l » se prononce, langue en arrière
McDonald's | /məkˈdɑːnldz/ | le McDonald's (restauration rapide) | L'accent tonique est sur "Don" : /məkˈdɑːnldz/. Dis-le comme un mot anglais, pas comme « mac-do »
`,
"Expressions idiomatiques": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | C'est du gâteau | Pour quelque chose de très facile : "The test was a piece of cake." Même image qu'en français
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | Je suis aux anges | Attention : en français, « être dans les nuages » veut dire être distrait ; "on cloud nine" veut dire être très heureux
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | Ça coûte les yeux de la tête | Même sens que « coûter les yeux de la tête » : l'anglais paie avec un bras et une jambe
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | On s'arrête là pour aujourd'hui | Pour terminer le travail ou les révisions. Naturel en réunion
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | Je ne suis pas dans mon assiette | Pour un petit malaise, comme un rhume. Cela n'a rien à voir avec la météo
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | Il faut que je me mette à bûcher | Avant un examen : réviser à fond
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | Tous les trente-six du mois | Très rarement. Une "blue moon" est une deuxième pleine lune dans le même mois, un phénomène rare
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | Mieux vaut tard que jamais | Comme en français
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | Ne tourne pas autour du pot | Pour demander à quelqu'un d'aller droit au but. Même image qu'en français, avec un buisson à la place du pot
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | Ce n'est pas mon truc | Façon douce de dire qu'une chose ne te plaît pas. Le français emprunte parfois l'image : « pas ma tasse de thé »
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | On se lance | Au début d'une réunion ou d'un projet
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | Je croise les doigts | Même geste qu'en français
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | Tiens bon | Pour quelqu'un qui traverse un moment difficile
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | Quand on parle du loup ! | Quand arrive la personne dont on parlait. L'anglais nomme le diable, le français le loup
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | La balle est dans ton camp | Vient du tennis. Même image qu'en français
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | Je serai muet comme une tombe | On dit aussi, plus littéralement : « mes lèvres sont scellées »
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | Je l'ai sur le bout de la langue | Comme en français
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | Je suis tout ouïe | Comme en français : l'anglais prend les oreilles (ears)
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | Quand les poules auront des dents | Pour quelque chose qui n'arrivera jamais : "He'll clean his room when pigs fly." En anglais, ce sont les cochons qui volent
`,
"Cinéma, séries et argot": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | Balance les potins | "tea" = ragots. Argot entre amis
No cap. | /ˈnoʊ ˈkæp/ | Sans mentir | Argot des jeunes : "cap" = mensonge
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | Ce morceau déchire | "slap" = être excellent (musique ou nourriture)
I'm dead. | /aɪm ˈded/ | Je meurs de rire | Dans les messages, avec l'émoji tête de mort. Cela ne veut pas dire être mort
Low-key | /ˌloʊˈkiː/ | Un peu / discrètement | "I low-key love this song." Contraire : "high-key" (ouvertement)
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | Je suis obsédé / obsédée par ce morceau | "obsessed" se dit en positif : ça te plaît énormément. On dit "with", jamais "by"
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | De quoi ça parle ? | Pour demander l'intrigue. "about" reste à la fin de la phrase
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | Pas de spoilers ! | On dit aussi "Don't spoil it!"
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | J'ai regardé toute la saison d'une traite | "binge-watch" = enchaîner les épisodes. Dans "whole", le « w » est muet : /ˈhoʊl/
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | La fin était super | Si elle t'a déçu : "The ending was disappointing."
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | Il faut absolument le voir | Pour recommander avec enthousiasme
Plot twist! | /ˈplɑːt ˈtwɪst/ | Retournement de situation ! | Aussi dans la vraie vie, quand il arrive quelque chose d'inattendu
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | C'est surcoté | Contraire : "underrated" (sous-estimé)
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | Cette scène m'a donné des frissons | Par émotion ou par tension
Who's your favorite character? | /ˈhuːz jʊr ˈfeɪvərɪt ˈkærɪktər/ | Quel est ton personnage préféré ? | Aux États-Unis, on écrit "favorite" ; en anglais britannique, "favourite"
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | Tu te moques de moi ? | Phrase typique des séries : surprise ou colère
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | Je te soutiens | Veut dire que tu vas soutenir et défendre l'autre personne
Gotcha. | /ˈgɑːtʃə/ | Compris / Je t'ai eu ! | Vient de "got you". Le plus courant : dire qu'on a compris
Let's do this! | /ˈlets ˈduː ˈðɪs/ | C'est parti ! | Pour se donner du courage avant de commencer quelque chose
`,
"Mots essentiels": `
Did you get my message? | /dɪd ju ˈget maɪ ˈmesɪdʒ/ | As-tu reçu mon message ? | "get" = recevoir. C'est l'un des verbes les plus employés de l'anglais parlé : recevoir, obtenir, arriver, devenir… Après "did", on garde la base verbale : "get"
I don't get it. | /aɪ ˈdoʊnt ˈget ɪt/ | Je ne pige pas | "get" veut aussi dire « comprendre » à l'oral. Plus familier que "I don't understand"
I'm getting tired. | /aɪm ˈgetɪŋ ˈtaɪərd/ | Je commence à être fatigué / fatiguée | "get" + adjectif = devenir : "get tired", "get angry", "get better"
What time do you get home? | /ˈwʌt ˈtaɪm də ju ˈget ˈhoʊm/ | À quelle heure rentres-tu à la maison ? | "get" + lieu = arriver. On dit "get home", sans "to" ; mais "get to work", "get to the station"
It takes 20 minutes. | /ɪt ˈteɪks ˈtwenti ˈmɪnɪts/ | Ça prend 20 minutes | Bonne nouvelle : le verbe français « prendre » correspond à "take". Le sujet "it" est obligatoire, et "takes" prend un -s : troisième personne
Take your time. | /ˈteɪk jʊr ˈtaɪm/ | Prends ton temps | "take" sert à prendre, emporter et durer. Formule aimable pour dire à quelqu'un de ne pas se presser
Where did you put my keys? | /ˈwer dɪd ju ˈpʊt maɪ ˈkiːz/ | Où as-tu mis mes clés ? | "put" = mettre. Il est irrégulier et ne change pas au prétérit : put, put, put. Après "did", on revient à la base verbale
Keep going! | /ˈkiːp ˈgoʊɪŋ/ | Continue comme ça ! | "keep" + -ing = continuer à faire quelque chose. Beaucoup plus courant que "continue"
Can I keep this? | /kən aɪ ˈkiːp ˈðɪs/ | Je peux le garder ? | "keep" = garder. Comme dans "Keep the change" (gardez la monnaie)
That's enough. | /ˈðæts ɪˈnʌf/ | Ça suffit | Attention : "enough" se prononce /ɪˈnʌf/ : le "gh" final se dit /f/
I don't have enough time. | /aɪ ˈdoʊnt ˈhæv ɪˈnʌf ˈtaɪm/ | Je n'ai pas assez de temps | Avec un nom, "enough" se place devant : "enough time", "enough money"
It's not big enough. | /ɪts ˈnɑːt ˈbɪg ɪˈnʌf/ | Ce n'est pas assez grand | Avec un adjectif, "enough" se place derrière : "big enough", jamais "enough big" (le français met « assez » devant)
I like it, though. | /aɪ ˈlaɪk ɪt ˈðoʊ/ | Ça me plaît quand même | "though" en fin de phrase = « quand même, pourtant ». Le "gh" est muet : /ˈðoʊ/
Even though it was late, we stayed. | /ˈiːvn ˈðoʊ ɪt wəz ˈleɪt wi ˈsteɪd/ | Même s'il était tard, nous sommes restés | "even though" = bien que, même si (un fait réel). Plus emphatique que "although"
I've already eaten. | /aɪv ɔːlˈredi ˈiːtn/ | J'ai déjà mangé | "already" = déjà. Il se place entre "have" et le participe passé. Ici, le present perfect convient : le résultat compte maintenant (je n'ai plus faim)
Are you still here? | /ər ju ˈstɪl ˈhɪr/ | Tu es toujours là ? | "still" = toujours, encore (quelque chose continue). Il se place après "be" et avant les autres verbes : "I still live here"
Not yet. | /ˈnɑːt ˈjet/ | Pas encore | "yet" se met à la fin. Dans une phrase négative, il signifie « encore » : "I haven't finished yet."
Have you finished yet? | /həv ju ˈfɪnɪʃt ˈjet/ | As-tu déjà fini ? | Dans une question, "yet" = déjà, et il se place à la fin. Aux États-Unis, on entend aussi "Did you finish yet?"
I'd love to. | /aɪd ˈlʌv tuː/ | Avec plaisir ! | "'d" = "would", le conditionnel : « ça me plairait ». Réponse typique à une invitation
Would you like some tea? | /wəd ju ˈlaɪk ˈsʌm ˈtiː/ | Tu veux du thé ? | "Would you like…?" propose quelque chose poliment. Attention : "Do you like…?" demande si on aime. Dans une offre, on garde "some"
Let me help you. | /ˈlet mi ˈhelp ju/ | Laisse-moi t'aider | "let" + personne + base verbale, sans "to" : "Let me see", "Let me know"
Can you bring me the menu? | /kən ju ˈbrɪŋ mi ðə ˈmenjuː/ | Peux-tu m'apporter la carte ? | "bring" = apporter (vers ici) ; "take" = emporter (vers là-bas). Prétérit : "brought"
I almost forgot. | /aɪ ˈɔːlmoʊst fərˈgɑːt/ | J'ai failli oublier | "almost" = presque ; il se place avant le verbe : "I almost missed the bus." (J'ai failli rater le bus.)
Anyway, let's go. | /ˈeniweɪ ˈlets ˈgoʊ/ | Bref, allons-y | "anyway" = bref, de toute façon. Sert à clore un sujet et à passer à autre chose
`,
"Faux amis": `
actually | /ˈæktʃuəli/ | en fait / vraiment | Attention : ce n'est pas « actuellement », qui se dit "currently". "Actually, I'm from Lyon." = En fait, je viens de Lyon
currently | /ˈkɜːrəntli/ | actuellement / en ce moment | Le bon mot pour « actuellement » : "I'm currently looking for a job."
disappointed | /ˌdɪsəˈpɔɪntɪd/ | déçu / déçue | Attention : « décevoir » = "disappoint" ; "deceive" veut dire tromper. "I'm disappointed." = Je suis déçu
demand | /dɪˈmænd/ | exiger | Attention : ce n'est pas « demander » (= "ask"). "demand" est fort : on exige. Dis "Can I ask you something?", jamais "Can I demand you something?"
library | /ˈlaɪbreri/ | bibliothèque | Attention : « librairie » se dit "bookstore". À la "library", on emprunte des livres
bookstore | /ˈbʊkstɔːr/ | librairie (magasin de livres) | Le bon mot pour « librairie ». En anglais britannique : "bookshop". Autres pièges du même genre : un « parking » est un "parking lot" (ou "car park"), un « smoking » est un "tuxedo"
attend | /əˈtend/ | assister à (un cours, une réunion) | Attention : « attendre » se dit "wait (for)". "attend" s'emploie sans "to" : "attend a meeting". Et "assist" veut dire aider
assist | /əˈsɪst/ | aider (formel) | Attention : ce n'est pas « assister à », qui se dit "attend". Dans la conversation courante, on dit "help"
realize | /ˈriːəlaɪz/ | se rendre compte | Demi-faux ami : le français moderne emploie aussi « réaliser » pour « se rendre compte », mais « réaliser un projet » se dit "carry out" ou "do". "I didn't realize." = Je ne m'en suis pas rendu compte
sensible | /ˈsensəbl/ | raisonnable / sensé / sensée | Attention : « sensible » se dit "sensitive". "That's a sensible idea." = C'est une idée raisonnable
lecture | /ˈlektʃər/ | cours magistral / conférence | Attention : le français « lecture » se dit "reading". À la fac, "a lecture" est un cours en amphi : "I have a lecture at 9."
college | /ˈkɑːlɪdʒ/ | fac / université (aux États-Unis) | Attention : « collège » se dit "middle school". Aux États-Unis, "college" = études supérieures : "She's in college."
rest | /ˈrest/ | se reposer | Attention : « rester » se dit "stay". "I need to rest." = J'ai besoin de me reposer. "the rest" = le reste
coin | /ˈkɔɪn/ | pièce de monnaie | Attention : « coin » (angle) se dit "corner". "a coin" = une pièce : "I found a coin in my pocket."
large | /ˈlɑːrdʒ/ | grand / de grande taille | Attention : « large » (pas étroit) se dit "wide". "a large pizza" = une grande pizza
sympathetic | /ˌsɪmpəˈθetɪk/ | compatissant / compatissante | Attention : « sympathique » se dit "nice" ou "friendly". "She's sympathetic." = Elle est compatissante, elle comprend ta peine
pretend | /prɪˈtend/ | faire semblant | Attention : « prétendre » (affirmer) se dit "claim". "He's pretending to sleep." = Il fait semblant de dormir
eventually | /ɪˈventʃuəli/ | finalement / à la longue | Attention : ce n'est pas « éventuellement » (= "possibly"). "Eventually, she found a job." = Finalement, elle a trouvé un emploi
journey | /ˈdʒɜːrni/ | voyage / trajet | Attention : « journée » se dit "day". "a long journey" = un long trajet
parents | /ˈperənts/ | les parents (père et mère) | Demi-faux ami : en français, « les parents » désigne aussi la famille élargie ; en anglais, "parents" = père et mère seulement. La famille élargie, ce sont les "relatives"
discuss | /dɪˈskʌs/ | parler de / traiter (un sujet) | Attention : « discuter » veut aussi dire bavarder (= "chat"). Et "discuss" se construit sans "about" : "discuss the plan"
support | /səˈpɔːrt/ | soutenir | Attention : « supporter » (endurer) se dit "put up with" ou "stand" : "I can't stand the noise."
introduce | /ˌɪntrəˈduːs/ | présenter (une personne) | Attention : « introduire » (insérer) se dit "insert" ou "put in". "Let me introduce you to my sister."
`,
"Make et do": `
make a mistake | /ˈmeɪk ə mɪˈsteɪk/ | faire une erreur | Jamais "do a mistake" : on "make" une erreur. Plusieurs erreurs : "make mistakes"
make a decision | /ˈmeɪk ə dɪˈsɪʒn/ | prendre une décision | On « prend » une décision en français, mais on la "make" en anglais (au Royaume-Uni, on entend aussi "take")
make money | /ˈmeɪk ˈmʌni/ | gagner de l'argent | « Gagner de l'argent » = "earn" ou "make", jamais "win" (qui sert pour un jeu ou une loterie)
make friends | /ˈmeɪk ˈfrendz/ | se faire des amis | "She makes friends easily." Comme en français, avec "make"
make an appointment | /ˈmeɪk ən əˈpɔɪntmənt/ | prendre rendez-vous | Pour un rendez-vous chez le médecin ou le dentiste. Un rendez-vous amoureux : "a date". "appointment" s'écrit avec deux « p »
make a phone call | /ˈmeɪk ə ˈfoʊn ˈkɔːl/ | passer un appel | Plus court : "make a call". Appeler quelqu'un : "call someone"
make the bed | /ˈmeɪk ðə ˈbed/ | faire le lit | C'est "make", même si on ne fabrique pas le lit. Expression figée : apprends-la en entier
make sure | /ˈmeɪk ˈʃʊr/ | s'assurer | "Make sure you lock the door." = Assure-toi de fermer à clé
make an effort | /ˈmeɪk ən ˈefərt/ | faire un effort | "He's making an effort to speak English."
make noise | /ˈmeɪk ˈnɔɪz/ | faire du bruit | "Don't make so much noise!" Ici, "noise" est indénombrable : pas de "a"
make plans | /ˈmeɪk ˈplænz/ | faire des projets | "Let's make plans for Saturday." Pour une fête : "have a party", jamais "make a party"
do homework | /ˈduː ˈhoʊmwɜːrk/ | faire ses devoirs | "do", pas "make". "homework" est indénombrable (alors que « les devoirs » est pluriel) : "do my homework", jamais "homeworks"
do the dishes | /ˈduː ðə ˈdɪʃɪz/ | faire la vaisselle | Les tâches ménagères prennent "do". On dit aussi "wash the dishes"
do the laundry | /ˈduː ðə ˈlɔːndri/ | faire la lessive | Autre tâche ménagère : "do". "laundry" désigne aussi le linge sale
do exercise | /ˈduː ˈeksərsaɪz/ | faire de l'exercice / du sport | Plus courant encore : le verbe seul, "exercise", ou "work out". Jamais "make sport" (calque de « faire du sport ») : "do sport" ou "play sports"
do someone a favor | /ˈduː ˈsʌmwʌn ə ˈfeɪvər/ | rendre service à quelqu'un | "Can you do me a favor?" = Tu peux me rendre un service ? En anglais britannique : "favour"
do your best | /ˈduː jʊr ˈbest/ | faire de son mieux | "Don't worry, just do your best."
do business | /ˈduː ˈbɪznəs/ | faire des affaires | "We do business in Canada." "business" n'a que deux syllabes : /ˈbɪznəs/
do the grocery shopping | /ˈduː ðə ˈgroʊsəri ˈʃɑːpɪŋ/ | faire les courses | Les courses alimentaires de la semaine. Faire du shopping par plaisir : "go shopping"
do a good job | /ˈduː ə ˈgʊd ˈdʒɑːb/ | faire du bon travail | "You did a good job!" Ici, "job" = la tâche, pas l'emploi
`,
"Indénombrables": `
Can I give you some advice? | /kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/ | Je peux te donner un conseil ? | "advice" est indénombrable (alors que « des conseils » se compte) : jamais "an advice" ni "advices". Dans une offre, on garde "some"
a piece of advice | /ə ˈpiːs əv ədˈvaɪs/ | un conseil | Pour compter un indénombrable : "a piece of" + nom. Deux conseils : "two pieces of advice"
I need some information. | /aɪ ˈniːd ˈsʌm ˌɪnfərˈmeɪʃn/ | J'ai besoin de renseignements | Ni -s ni "an" : "some information", "a lot of information". Jamais "informations" (le français dit « des informations »)
The news is good. | /ðə ˈnuːz ɪz ˈgʊd/ | Les nouvelles sont bonnes | "news" finit par -s, mais le verbe reste au singulier : "is", pas "are" (accord). Une nouvelle : "a piece of news"
We need new furniture. | /wi ˈniːd ˈnuː ˈfɜːrnɪtʃər/ | Il nous faut de nouveaux meubles | "furniture" est indénombrable : jamais "furnitures". Un meuble : "a piece of furniture"
I have a lot of homework. | /aɪ ˈhæv ə ˈlɑːt əv ˈhoʊmwɜːrk/ | J'ai beaucoup de devoirs | "homework" ne prend ni -s ni "a" (le français dit « des devoirs »). Un devoir précis : "an assignment"
How much luggage do you have? | /ˈhaʊ ˈmʌtʃ ˈlʌgɪdʒ də ju ˈhæv/ | Combien de bagages as-tu ? | Avec un indénombrable, on demande "How much", pas "How many". Un bagage : "a suitcase" ou "a bag"
My hair is long. | /maɪ ˈher ɪz ˈlɔːŋ/ | J'ai les cheveux longs | "hair" est singulier : "my hair is", jamais "my hairs are" (le français dit « mes cheveux sont »). "hairs" = des poils ou des cheveux isolés
The traffic is terrible. | /ðə ˈtræfɪk ɪz ˈterəbl/ | La circulation est épouvantable | "traffic" est indénombrable : "a lot of traffic", jamais "a traffic" ni "traffics". Le verbe est au singulier
Money isn't everything. | /ˈmʌni ˈɪznt ˈevriθɪŋ/ | L'argent ne fait pas tout | "money" est indénombrable et prend un verbe au singulier : "money is". Sans "the" : sens général, alors que le français dit « l'argent »
I made a lot of progress. | /aɪ ˈmeɪd ə ˈlɑːt əv ˈprɑːgres/ | J'ai fait beaucoup de progrès | "progress" est indénombrable : jamais "progresses" ni "a progress". Le français dit « des progrès », au pluriel
We had a lot of fun. | /wi ˈhæd ə ˈlɑːt əv ˈfʌn/ | On s'est bien amusés | "fun" est indénombrable : "a lot of fun", jamais "a fun" ni "funs". "fun" (amusant) n'est pas "funny" (drôle)
Can I get some bread? | /kən aɪ ˈget ˈsʌm ˈbred/ | Je peux avoir du pain ? | "bread" est indénombrable : "some bread". Une baguette ne se dit pas "a bread" : "a loaf of bread" ; une tranche : "a slice of bread"
What nice weather! | /ˈwʌt ˈnaɪs ˈweðər/ | Quel beau temps ! | Sans "a" : "What nice weather!", jamais "What a nice weather!". "weather" est indénombrable
I have a lot of work today. | /aɪ ˈhæv ə ˈlɑːt əv ˈwɜːrk təˈdeɪ/ | J'ai beaucoup de travail aujourd'hui | "work" (le travail qu'on fait) est indénombrable. Un emploi, c'est "a job" : "I have a new job."
`,
"Mots transparents et accent": `
information | /ˌɪnfərˈmeɪʃn/ | l'information (une info) | -tion = -tion. Piège : l'accent tonique est sur "ma" (/ˌɪnfərˈmeɪʃn/), pas sur la fin, et "-tion" se dit /ʃn/, jamais « sion » ni « tion » à la française
conversation | /ˌkɑːnvərˈseɪʃn/ | la conversation (une discussion) | -tion = -tion. L'accent tonique est sur l'avant-dernière syllabe, /ˌkɑːnvərˈseɪʃn/, pas sur la fin
university | /ˌjuːnɪˈvɜːrsəti/ | l'université | -ty = -té. L'accent tonique est sur "ver" : /ˌjuːnɪˈvɜːrsəti/. Le mot commence par le son /j/ : "a university", jamais "an university"
opportunity | /ˌɑːpərˈtuːnəti/ | l'opportunité (une occasion) | -ty = -té. L'accent tonique est sur "tu" : /ˌɑːpərˈtuːnəti/, au milieu du mot, pas à la fin
famous | /ˈfeɪməs/ | célèbre | -ous = -eux. L'accent tonique est au début : /ˈfeɪməs/, avec "-ous" = /əs/
delicious | /dɪˈlɪʃəs/ | délicieux / délicieuse | -ous = -eux. L'accent tonique est sur "li" : /dɪˈlɪʃəs/, pas sur la fin comme dans « délicieux ». Et "-cious" se dit /ʃəs/
probably | /ˈprɑːbəbli/ | probablement | -ly = -ment. L'accent tonique est au début : /ˈprɑːbəbli/, en trois syllabes, pas « pro-ba-ble-ment »
exactly | /ɪgˈzæktli/ | exactement | -ly = -ment. Le "x" se dit /gz/ et l'accent tonique est sur la deuxième syllabe : /ɪgˈzæktli/
different | /ˈdɪfrənt/ | différent / différente | -ent = -ent. L'accent tonique est au début, en deux ou trois syllabes : /ˈdɪfrənt/, jamais « di-fé-rent ». On dit "different from", pas "different of"
excellent | /ˈeksələnt/ | excellent / excellente | -ent = -ent. L'accent tonique est au début, sur "ex" : /ˈeksələnt/, jamais sur la fin
photograph | /ˈfoʊtəgræf/ | la photographie (une photo) | ph = ph. L'accent tonique est sur la première syllabe : /ˈfoʊtəgræf/. Le photographe, lui, est "photographer" /fəˈtɑːgrəfər/ : l'accent change de place
pharmacy | /ˈfɑːrməsi/ | la pharmacie | ph = ph. L'accent tonique est au début : /ˈfɑːrməsi/, pas sur la fin comme dans « pharmacie ». Aux États-Unis, on dit aussi "drugstore"
chemistry | /ˈkemɪstri/ | la chimie | Contrairement à « chimie » (/ʃ/), le "ch" anglais se dit /k/ ici : /ˈkemɪstri/. L'accent tonique est au début
comfortable | /ˈkʌmftərbl/ | confortable | Attention : l'anglais écrit un « m » ("comfortable"), alors que le français écrit un « n ». L'accent tonique est au début : /ˈkʌmftərbl/, jamais « com-for-TA-ble »
`
};

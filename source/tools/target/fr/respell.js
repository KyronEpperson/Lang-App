/* French spelling -> en-fr pron respelling (profile docs/profiles/en-fr.md §6). Deterministic: every writer gets the same string.
   Usage: node respell.js "Les amis arrivent."  prints  Les amis arrivent. -> lay zah-mee ah-reev
   Key: ah ay eh ee oh oo ew uh | nasal vowels ahN ohN aN uhN | sh zh ny y w gh(before ay/eh/ee) | r = French r.
   Words are separated by spaces, syllables by hyphens, no stress marks. Only obligatory liaison is shown: the linking
   consonant starts the next word (les amis -> lay zah-mee). Known limits: see the profile §6.5. */
'use strict';

/* ---------- whole-word lexicon (spelling -> respelling); checked before the rules ---------- */
const LEX = {
  /* function words */
  'le': 'luh', 'la': 'lah', 'les': 'lay', 'de': 'duh', 'des': 'day', 'du': 'dew', 'un': 'uhN', 'une': 'ewn',
  'je': 'zhuh', 'me': 'muh', 'te': 'tuh', 'se': 'suh', 'ne': 'nuh', 'ce': 'suh', 'que': 'kuh',
  'et': 'ay', 'est': 'eh', 'es': 'eh', 'mes': 'may', 'tes': 'tay', 'ses': 'say', 'ces': 'say',
  'nos': 'noh', 'vos': 'voh', 'leur': 'luhr', 'leurs': 'luhr', 'il': 'eel', 'ils': 'eel', 'elle': 'ehl', 'elles': 'ehl',
  'on': 'ohN', 'nous': 'noo', 'vous': 'voo', 'en': 'ahN', 'y': 'ee', 'a': 'ah', 'à': 'ah', 'au': 'oh', 'aux': 'oh',
  'ou': 'oo', 'où': 'oo', 'oui': 'wee', 'non': 'nohN', 'pas': 'pah', 'plus': 'plew', 'très': 'treh', 'mais': 'meh',
  'tu': 'tew', 'moi': 'mwah', 'toi': 'twah', 'lui': 'lwee', 'eux': 'uh', 'qui': 'kee', 'quoi': 'kwah', 'quand': 'kahN',
  'chez': 'shay', 'dans': 'dahN', 'sans': 'sahN', 'sous': 'soo', 'pour': 'poor', 'par': 'pahr', 'vers': 'vehr', 'sur': 'sewr',
  'mon': 'mohN', 'ton': 'tohN', 'son': 'sohN', 'ma': 'mah', 'ta': 'tah', 'sa': 'sah', 'donc': 'dohNk', 'tous': 'too',
  'j\'ai': 'zhay', 'ai': 'ay', 'aie': 'eh', 'sont': 'sohN', 'ont': 'ohN', 'vont': 'vohN', 'font': 'fohN',
  /* numbers */
  'deux': 'duh', 'trois': 'trwah', 'quatre': 'kahtr', 'cinq': 'saNk', 'six': 'sees', 'sept': 'seht', 'huit': 'weet',
  'neuf': 'nuhf', 'dix': 'dees', 'onze': 'ohNz', 'vingt': 'vaN', 'vingts': 'vaN', 'cent': 'sahN', 'cents': 'sahN', 'mille': 'meel',
  'deuxième': 'duh-zyehm', 'sixième': 'see-zyehm', 'dixième': 'dee-zyehm', 'second': 'suh-gohN', 'seconde': 'suh-gohNd',
  'million': 'mee-lyohN', 'millions': 'mee-lyohN', 'milliard': 'mee-lyahr',
  /* people and titles */
  'monsieur': 'muh-syuh', 'messieurs': 'may-syuh', 'madame': 'mah-dahm', 'mesdames': 'may-dahm', 'mademoiselle': 'mahd-mwah-zehl',
  'femme': 'fahm', 'femmes': 'fahm', 'fils': 'fees', 'monsieur.': 'muh-syuh',
  /* final consonant exceptions */
  'août': 'oot', 'mars': 'mahrs', 'ours': 'oors', 'os': 'ohs', 'bus': 'bews', 'autobus': 'oh-toh-bews', 'tennis': 'tay-nees',
  'virus': 'vee-rews', 'sens': 'sahNs', 'hélas': 'ay-lahs', 'as': 'ah', 'film': 'feelm', 'films': 'feelm', 'ouest': 'wehst', 'net': 'neht', 'but': 'bewt',
  'blanc': 'blahN', 'franc': 'frahN', 'banc': 'bahN', 'porc': 'pohr', 'tabac': 'tah-bah', 'estomac': 'ehs-toh-mah',
  'clef': 'klay', 'gentil': 'zhahN-tee', 'gentils': 'zhahN-tee', 'outil': 'oo-tee', 'fusil': 'few-zee', 'sourcil': 'soor-see',
  'respect': 'rehs-peh', 'aspect': 'ahs-peh', 'direct': 'dee-rehkt', 'correct': 'koh-rehkt', 'exact': 'ehg-zahkt', 'contact': 'kohN-tahkt',
  'hier': 'yehr', 'fier': 'fyehr', 'fière': 'fyehr', 'mer': 'mehr', 'fer': 'fehr', 'cher': 'shehr', 'chère': 'shehr', 'hiver': 'ee-vehr',
  'super': 'sew-pehr', 'amer': 'ah-mehr', 'enfer': 'ahN-fehr', 'hamburger': 'ahN-buhr-guhr', 'laser': 'lah-zehr',
  'œuf': 'uhf', 'oeuf': 'uhf', 'œufs': 'uh', 'oeufs': 'uh', 'bœuf': 'buhf', 'boeuf': 'buhf', 'bœufs': 'buh', 'œil': 'uhy', 'oeil': 'uhy', 'yeux': 'yuh',
  'album': 'ahl-bohm', 'maximum': 'mahk-see-mohm', 'minimum': 'mee-nee-mohm', 'forum': 'foh-rohm', 'parfum': 'pahr-fuhN',
  /* -ill- with an l sound */
  'ville': 'veel', 'villes': 'veel', 'village': 'vee-lahzh', 'villages': 'vee-lahzh', 'tranquille': 'trahN-keel', 'lille': 'leel',
  /* ch = k, other spellings */
  'christophe': 'krees-tohf', 'chorale': 'koh-rahl', 'technique': 'tehk-neek', 'orchestre': 'ohr-kehstr', 'psychologue': 'psee-koh-lohg',
  'oignon': 'oh-nyohN', 'oignons': 'oh-nyohN', 'second.': 'suh-gohN', 'examen': 'ehg-zah-maN', 'examens': 'ehg-zah-maN',
  'ennemi': 'ehn-mee', 'ennuyer': 'ahN-nwee-yay', 'emmener': 'ahNm-nay', 'évidemment': 'ay-vee-dah-mahN', 'récemment': 'ray-sah-mahN',
  'patient': 'pah-syahN', 'patiente': 'pah-syahNt', 'client': 'klee-yahN', 'cliente': 'klee-yahNt', 'clients': 'klee-yahN',
  'science': 'syahNs', 'sciences': 'syahNs', 'pays': 'pay-ee', 'paysage': 'pay-ee-zahzh', 'week-end': 'wee-kehnd', 'weekend': 'wee-kehnd',
  'yaourt': 'yah-oort', 'wagon': 'vah-gohN', 'sandwich': 'sahNd-weetsh', 'parking': 'pahr-keeng', 'shopping': 'shoh-peeng',
  'football': 'foot-bohl', 'foot': 'foot', 'soixante': 'swah-sahNt', 'soixantaine': 'swah-sahN-tehn', 'bruxelles': 'brew-sehl', 'baseball': 'behz-bohl', 'basket': 'bahs-keht', 'email': 'ee-mehl', 'internet': 'aN-tehr-neht',
  'dessert': 'day-sehr', 'desserts': 'day-sehr', 'dessus': 'duh-sew', 'dessous': 'duh-soo', 'faisons': 'fuh-zohN', 'faisait': 'fuh-zeh',
  'monsieur,': 'muh-syuh', 'vrai': 'vreh', 'vraie': 'vreh', 'mai': 'meh', 'quai': 'kay', 'gai': 'gay',
  'eu': 'ew', 'eue': 'ew', 'eus': 'ew', 'eut': 'ew', 'nœud': 'nuh', 'sœur': 'suhr', 'cœur': 'kuhr', 'chœur': 'kuhr',
  'noël': 'noh-ehl', 'maïs': 'mah-ees', 'naïf': 'nah-eef', 'thé': 'tay', 'sept.': 'seht',
  'aujourd\'hui': 'oh-zhoor-dwee', 'aiguille': 'ay-gweey', 'linguistique': 'laN-gwees-teek', 'ail': 'ahy', 'travail': 'trah-vahy',
  'paris': 'pah-ree', 'londres': 'lohNdr', 'montréal': 'mohN-ray-ahl', 'new': 'nyoo', 'york': 'yohrk', 'chicago': 'shee-kah-goh',
  'boston': 'bohs-tohn', 'emma': 'ay-mah', 'jack': 'zhahk', 'ryan': 'ree-yahn', 'megan': 'may-gahn',
  'est-ce': 'ehs', 'qu\'est-ce': 'kehs', 'tout': 'too', 'toute': 'toot', 'toutes': 'toot', 'bien': 'byaN', 'rien': 'ryaN',
  'combien': 'kohN-byaN', 'comment': 'koh-mahN', 'souvent': 'soo-vahN', 'dent': 'dahN', 'dents': 'dahN', 'vent': 'vahN', 'lent': 'lahN', 'lente': 'lahNt',
  'argent': 'ahr-zhahN', 'parent': 'pah-rahN', 'parents': 'pah-rahN', 'content': 'kohN-tahN', 'présent': 'pray-zahN', 'absent': 'ahp-sahN',
  'différent': 'dee-fay-rahN', 'différents': 'dee-fay-rahN', 'urgent': 'ewr-zhahN', 'intelligent': 'aN-tay-lee-zhahN', 'talent': 'tah-lahN',
  'président': 'pray-zee-dahN', 'accident': 'ahk-see-dahN', 'évident': 'ay-vee-dahN', 'excellent': 'ehk-say-lahN', 'agent': 'ah-zhahN',
  'accent': 'ahk-sahN', 'cent.': 'sahN', 'serpent': 'sehr-pahN', 'adolescent': 'ah-doh-lay-sahN', 'adolescents': 'ah-doh-lay-sahN',
  'pendant': 'pahN-dahN', 'zéro': 'zay-roh', 'gens': 'zhahN', 'temps': 'tahN', 'printemps': 'praN-tahN', 'automne': 'oh-tohn',
  'sommes': 'sohm', 'êtes': 'eht', 'faites': 'feht', 'dites': 'deet', 'jeune': 'zhuhn', 'jeunes': 'zhuhn', 'oignon.': 'oh-nyohN',
};
/* -ent words that are verbs even without ils/elles before them (default for -ment is a pronounced noun or adverb) */
const VERB_MENT = new Set(['aiment', 'dorment', 'ferment', 'forment', 'fument', 'allument', 'priment', 'impriment', 'expriment',
  'suppriment', 'calment', 'arment', 'résument', 'informent', 'transforment', 'sèment', 'endorment', 'enferment', 'affirment', 'confirment']);
/* -ent words (not ending in -ment) said with ahN; every other -ent is a silent verb ending */
const NOUN_ENT = new Set(Object.keys(LEX).filter(w => /ents?$/.test(w) && /ahN$/.test(LEX[w])));
/* h aspiré: no liaison before these (elision is already shown by the spelling: le haricot) */
const HASP = new Set(['haricot', 'haricots', 'héros', 'haut', 'haute', 'hauts', 'hautes', 'huit', 'onze', 'hors', 'honte', 'hall',
  'hamburger', 'hamburgers', 'handicap', 'hasard', 'hockey', 'hâte', 'halloween', 'homard', 'hache', 'haine', 'hibou', 'hiboux',
  'oui', 'yaourt', 'yaourts', 'huitième', 'onzième', 'hérisson', 'hollande', 'hongrie', 'hamster', 'hamac', 'harpe', 'hausse']);
/* phrases (lowercase, spaces between words); checked first */
const PHRASES = {
  'est-ce que': 'ehs kuh', 'qu\'est-ce que': 'kehs kuh', 'qu\'est-ce qu\'il': 'kehs keel', 'qu\'est-ce qui': 'kehs kee',
  'il y a': 'eel ee ah', 'tout à fait': 'too tah feh', 'tout à l\'heure': 'too tah luhr', 'de temps en temps': 'duh tahN zahN tahN',
  'vingt-deux': 'vaNt duh', 'vingt-trois': 'vaNt trwah', 'vingt-quatre': 'vaNt kahtr', 'vingt-cinq': 'vaNt saNk', 'vingt-six': 'vaNt sees',
  'vingt-sept': 'vaNt seht', 'vingt-huit': 'vaNt weet', 'vingt-neuf': 'vaNt nuhf', 'quatre-vingt-dix': 'kah-truh vaN dees', 'quatre-vingt-un': 'kah-truh vaN uhN',
  'vingt et un': 'vaN tay uhN', 'vingt et une': 'vaN tay ewn', 'quatre-vingts': 'kah-truh vaN', 'quatre-vingt': 'kah-truh vaN',
  'états-unis': 'ay-tah zew-nee', 'les états-unis': 'lay zay-tah zew-nee', 'aux états-unis': 'oh zay-tah zew-nee',
  'plus tard': 'plew tahr', 'en plus': 'ahN plews', 'neuf heures': 'nuh vuhr', 'neuf ans': 'nuh vahN', 'dix-sept': 'dee seht',
  'dix-huit': 'dee zweet', 'dix-neuf': 'deez nuhf', 'tous les jours': 'too lay zhoor', 'pas du tout': 'pah dew too',
  'comment allez-vous': 'koh-mahN tah-lay voo', 'bon appétit': 'boh nah-pay-tee', 'bonne nuit': 'bohn nwee',
  's\'il vous plaît': 'seel voo pleh', 's\'il te plaît': 'seel tuh pleh', 'c\'est-à-dire': 'seh tah deer', 'peut-être': 'puh tehtr',
'six heures': 'see zuhr', 'dix heures': 'dee zuhr', 'deux heures': 'duh zuhr', 'trois heures': 'trwah zuhr',
  'six ans': 'see zahN', 'dix ans': 'dee zahN', 
  'vingt ans': 'vaN tahN', 'vingt heures': 'vaN tuhr', 'cent ans': 'sahN tahN', 'mon ami': 'mohN nah-mee', 'bon anniversaire': 'boh nah-nee-vehr-sehr',
};
/* liaison: the words after which a following vowel sound is linked (obligatory or near-obligatory liaison only) */
const LIAISON = {
  /* determiners */ 'les': 'z', 'des': 'z', 'mes': 'z', 'tes': 'z', 'ses': 'z', 'ces': 'z', 'nos': 'z', 'vos': 'z', 'leurs': 'z', 'aux': 'z',
  'un': 'n', 'aucun': 'n', 'deux': 'z', 'trois': 'z', 'six': 'z', 'dix': 'z', 'quels': 'z', 'quelles': 'z', 'plusieurs': 'z', 'quelques': 'z',
  'certains': 'z', 'certaines': 'z', 'mon': 'n', 'ton': 'n', 'son': 'n', 'vingt': 't', 'cent': 't',
  /* pronouns */ 'nous': 'z', 'vous': 'z', 'ils': 'z', 'elles': 'z', 'on': 'n', 'en': 'n',
  /* short prepositions and adverbs */ 'dans': 'z', 'chez': 'z', 'sans': 'z', 'très': 'z', 'quand': 't', 'tout': 't', 'bien': 'n', 'rien': 'n',
  /* être */ 'est': 't', 'c\'est': 't', 'sont': 't', 'suis': 'z',
  /* adjectives before a noun */ 'petit': 't', 'petits': 'z', 'petites': 'z', 'grand': 't', 'grands': 'z', 'grandes': 'z', 'gros': 'z',
  'mauvais': 'z', 'bon': 'n', 'bons': 'z', 'bonnes': 'z', 'beaux': 'z', 'nouveaux': 'z', 'vieux': 'z', 'autres': 'z', 'premiers': 'z',
};
const DENASAL = { 'bon': 'boh', 'ancien': 'ahN-syeh', 'certain': 'sehr-teh', 'prochain': 'proh-sheh', 'moyen': 'mwah-yeh' }; /* bon ami -> boh nah-mee */
const INVERT = new Set(['il', 'elle', 'on', 'ils', 'elles']); /* est-il, sont-ils, peut-on: hyphen + pronoun links */
const CLITIC = /^(ne|n'|me|m'|te|t'|se|s'|nous|vous|les|leur|lui|y|en|l'|le|la)$/;

/* ---------- letters -> phonemes ---------- */
/* phonemes: a e E i o u y 2 @ A~ O~ E~ 9~ (vowels); p b t d k g f v s z S Z m n J l R j w H (consonants) */
const VOW = new Set(['a', 'e', 'E', 'i', 'o', 'u', 'y', '2', '@', 'A~', 'O~', 'E~', '9~']);
const isVL = c => !!c && 'aeiouyàâäéèêëîïôöùûüœæ'.includes(c);
const FRONT = c => !!c && 'eiyéèêëîï'.includes(c);
function phon(w, plural) {
  const out = []; const P = x => out.push(x);
  const n = w.length;
  /* split off the silent ending first: final -e, -es, verb -ent, -s/-x/-z/-t/-d/-p... handled per letter below */
  let end = n;
  let ending = '';
  const vowelBefore = k => { for (let i = k - 1; i >= 0; i--) if (isVL(w[i])) return true; return false; };
  if (/ent$/.test(w) && n > 3 && vowelBefore(n - 3) && !/[vt]ient$/.test(w)) { /* il vient, il tient keep the nasal */
    const silentVerb = plural || VERB_MENT.has(w) || !(/ment$/.test(w) || NOUN_ENT.has(w));
    if (silentVerb) { end = n - 3; ending = 'ent'; }
  }
  if (!ending && /[^aeiouyéè]es$/.test(w) && n > 3) { end = n - 2; ending = 'es'; }
  else if (!ending && /[^aeiouyéè]e$/.test(w) && n > 2) { end = n - 1; ending = 'e'; }
  else if (!ending && /(ée|ées|ue|ues|ie|ies|oue|oues|ée)$/.test(w)) { end = w.replace(/(e|es)$/, '').length; ending = 'e'; }
  const s = w.slice(0, end); const L = s.length;
  const silentFinal = ending === '';           /* no silent e after: final consonants follow the CaReFuL rule */
  /* final consonant cluster of s */
  let fc = L; while (fc > 0 && !isVL(s[fc - 1])) fc--;
  let i = 0;
  const nasalNext = k => { /* s[k] is n or m: nasal if not followed by a vowel letter or another n/m */
    const c2 = s[k + 1];
    return !isVL(c2) && c2 !== 'n' && c2 !== 'm' && c2 !== 'h';
  };
  /* careful: with a silent -e or verb -ent after it, a final n/m is not nasal (bonne, une, aiment) */
  const nasalAt = k => (s[k] === 'n' || s[k] === 'm') && (k + 1 < L ? nasalNext(k) : ending === '');
  const W1 = k => w[k]; /* look-ahead in the FULL word, so a stripped silent e still softens c and g (France, rouge, mangent) */
  while (i < L) {
    const c = s[i], c1 = s[i + 1], c2 = s[i + 2], c3 = s[i + 3];
    const atEnd = k => k >= L;
    /* ----- vowels ----- */
    if (c === 'e' && c1 === 'a' && c2 === 'u') { P('o'); i += 3; continue; }
    if ((c === 'œ' && c1 === 'u') || (c === 'o' && c1 === 'e' && c2 === 'u')) { const k = c === 'œ' ? 2 : 3; if (s.slice(i + k, i + k + 2) === 'il' && i + k + 2 >= L) { P('2'); P('j'); i += k + 2; continue; } P('2'); i += k; continue; }
    if (c === 'œ') { P('2'); i++; continue; }
    if (c === 'a' && c1 === 'i' && c2 === 'l') { if (i + 3 >= L || (c3 === 'l')) { P('a'); P('j'); i += c3 === 'l' ? 4 : 3; continue; } }
    if (c === 'e' && c1 === 'i' && c2 === 'l') { if (i + 3 >= L || (c3 === 'l')) { P('E'); P('j'); i += c3 === 'l' ? 4 : 3; continue; } }
    if (c === 'u' && c1 === 'e' && c2 === 'i' && c3 === 'l') { P('2'); P('j'); i += s[i + 4] === 'l' ? 5 : 4; continue; } /* accueil */
    if (c === 'e' && c1 === 'u' && c2 === 'i' && c3 === 'l') { P('2'); P('j'); i += s[i + 4] === 'l' ? 5 : 4; continue; } /* fauteuil, feuille */
    if (c === 'o' && c1 === 'u' && c2 === 'i' && c3 === 'l' && s[i + 4] === 'l') { P('u'); P('j'); i += 5; continue; } /* grenouille */
    if (c === 'a' && c1 === 'u') { P('o'); i += 2; continue; }
    if (c === 'o' && c1 === 'u') { if (isVL(c2) && c2 !== 'e' || (c2 === 'e' && !atEnd(i + 3))) { P('w'); i += 2; continue; } P('u'); i += 2; continue; }
    if (c === 'o' && c1 === 'ù') { P('u'); i += 2; continue; }
    if (c === 'o' && c1 === 'û') { P('u'); i += 2; continue; }
    if (c === 'o' && c1 === 'i' && c2 === 'n' && nasalAt(i + 2)) { P('w'); P('E~'); i += 3; continue; }
    if (c === 'o' && (c1 === 'i' || c1 === 'î')) { P('w'); P('a'); i += 2; continue; }
    if (c === 'o' && c1 === 'y') { P('w'); P('a'); if (isVL(c2)) P('j'); i += 2; continue; }
    if (c === 'a' && c1 === 'y') { P('E'); if (isVL(c2)) P('j'); else P('i'); i += 2; continue; }
    if (c === 'u' && c1 === 'y') { P('H'); P('i'); if (isVL(c2)) P('j'); i += 2; continue; }
    if ((c === 'a' || c === 'e') && (c1 === 'i' || c1 === 'î') && (c2 === 'n' || c2 === 'm') && nasalAt(i + 2)) { P('E~'); i += 3; continue; }
    if (c === 'a' && c1 === 'i' && i + 2 === L && silentFinal && i > 0 && s[i - 1] === 'r' && L > 4) { P('e'); i += 2; continue; } /* future je finirai -> ray */
    if (c === 'a' && (c1 === 'i' || c1 === 'î')) { P('E'); i += 2; continue; }
    if (c === 'e' && (c1 === 'i' || c1 === 'î')) { P('E'); i += 2; continue; }
    if (c === 'e' && c1 === 'u') { if (fc <= i + 2 && i + 2 < L && 'r'.includes(s[i + 2]) || (i + 2 < L && !isVL(s[i + 2]) && i + 3 < L && !isVL(s[i + 3]))) P('2'); else P('2'); i += 2; continue; }
    if (c === 'u' && c1 === 'i' && c2 === 'l' && c3 === 'l' && !(i > 0 && 'gq'.includes(s[i - 1]))) { P('H'); P('i'); P('j'); i += 4; continue; } /* juillet */
    if (c === 'u' && c1 === 'i') { P('H'); P('i'); i += 2; continue; }
    if (c === 'i' && c1 === 'l' && c2 === 'l') { /* ill: after a vowel -> y; after a consonant -> ee + y */
      const prevV = i > 0 && isVL(s[i - 1]); if (!prevV) P('i'); P('j'); i += 3; continue; }
    if ((c === 'i' || c === 'y') && (c1 === 'e' || c1 === 'é') && c2 === 'n' && nasalAt(i + 2)) { P('j'); P('E~'); i += 3; continue; } /* bien, chien */
    if (c === 'i' && c1 === 'e' && c2 === 'n' && c3 === 'c') { P('j'); P('A~'); i += 3; continue; } /* patience */
    if ((c === 'é') && c1 === 'e' && c2 === 'n' && nasalAt(i + 2)) { P('e'); P('E~'); i += 3; continue; } /* européen */
    if ((c === 'a' || c === 'e') && (c1 === 'n' || c1 === 'm') && nasalAt(i + 1)) { P('A~'); i += 2; continue; }
    if (c === 'o' && (c1 === 'n' || c1 === 'm') && nasalAt(i + 1)) { P('O~'); i += 2; continue; }
    if ((c === 'i' || c === 'y') && (c1 === 'n' || c1 === 'm') && nasalAt(i + 1)) { P('E~'); i += 2; continue; }
    if (c === 'u' && (c1 === 'n' || c1 === 'm') && nasalAt(i + 1)) { P('9~'); i += 2; continue; }
    if (c === 'i' || c === 'î' || c === 'ï' || (c === 'y' && !isVL(c1))) {
      if (c !== 'ï' && isVL(c1) && i > 1 && /[pbtdkgfvc][rl]/.test(s.slice(i - 2, i)) && c !== 'y') { P('i'); P('j'); i++; continue; } /* bibliothèque, client */
      if (c !== 'ï' && isVL(c1) && i > 0 && !(c === 'y')) { P('j'); i++; continue; } /* piano, pied (not word-initial: idée) */
      P('i'); i++; continue; }
    if (c === 'y') { P('j'); i++; continue; }
    if (c === 'u' || c === 'û' || c === 'ü') { if (c === 'u' && isVL(c1) && c1 !== 'e' && i > 0) { P('H'); i++; continue; } P('y'); i++; continue; }
    if (c === 'a' || c === 'à' || c === 'â' || c === 'ä') { P('a'); i++; continue; }
    if (c === 'o' || c === 'ô' || c === 'ö') { P('o'); i++; continue; }
    if (c === 'é') { P('e'); i++; continue; }
    if (c === 'è' || c === 'ê' || c === 'ë') { P('E'); i++; continue; }
    if (c === 'e') {
      /* e: word-final -er/-ez/-ed -> ay; -et -> eh; before two consonants or a final sounded consonant -> eh; else schwa */
      const rest = s.slice(i + 1);
      if (silentFinal && /^(r|z|d|rs|zs|ds)$/.test(rest) && L > 2) { P('e'); i = L; continue; }
      if (silentFinal && /^(t|ts)$/.test(rest)) { P('E'); i = L; continue; }
      if (rest === 's' && silentFinal) { P('E'); i = L; continue; }
      if (rest === 'x' && silentFinal) { P('E'); P('k'); P('s'); i = L; continue; }
      const nxt = rest.replace(/^(ch|ph|th|gn)/, 'C');
      const cons = (nxt.match(/^[^aeiouyàâäéèêëîïôöùûüœ]*/) || [''])[0];
      const cluster = /^[pbtdkgfvc][rl]$/.test(cons) || /^(C|[^ch])$/.test(cons) && false;
      if (cons.length >= 2 && !/^[pbtdkgfvc][rl]$/.test(cons) && !/^(ch|ph|th|gn)$/.test(rest.slice(0, 2))) { P('E'); i++; continue; }
      if (cons.length >= 2 && /^(ch|ph|th|gn)/.test(rest) && cons.length > 2) { P('E'); i++; continue; }
      if (cons.length >= 1 && i + 1 + cons.length >= L && silentFinal && /^[cflrq]/.test(cons)) { P('E'); i++; continue; } /* sec, chef, sel */
      if (cons.length === 1 && cons === 'x') { P('E'); i++; continue; }
      P('@'); i++; continue;
    }
    /* ----- consonants ----- */
    if (i >= fc && silentFinal) {
      /* final consonant cluster with nothing after it: CaReFuL, left to right, stop at the first other letter */
      const cl = s.slice(i);
      let k = 0;
      while (k < cl.length) {
        const x = cl[k]; if (k > 0 && cl[k - 1] === x) { k++; continue; }
        if (x === 'c' && !(i + k > 0 && s[i + k - 1] === 'n')) { P('k'); k++; continue; }
        if (x === 'q') { P('k'); k++; continue; }
        if (x === 'r') { P('R'); k++; continue; }
        if (x === 'f') { P('f'); k++; continue; }
        if (x === 'l') { P('l'); k++; continue; }
        if (x === 'k') { P('k'); k++; continue; }
        if (x === 'h' && cl[k - 1] === 'c') { k++; continue; }
        break;
      }
      i = L; continue;
    }
    if (c === 'c' && c1 === 'h') { P('S'); i += 2; continue; }
    if (c === 'c' && c1 === 'c') { if (FRONT(W1(i + 2))) { P('k'); P('s'); } else P('k'); i += 2; continue; }
    if (c === 'c' && c1 === 'k') { P('k'); i += 2; continue; }
    if (c === 'c') { P(FRONT(W1(i + 1)) ? 's' : 'k'); i++; continue; }
    if (c === 'ç') { P('s'); i++; continue; }
    if (c === 'g' && c1 === 'n') { P('J'); i += 2; continue; }
    if (c === 'g' && c1 === 'u' && FRONT(W1(i + 2))) { P('g'); i += 2; continue; }
    if (c === 'g' && c1 === 'e' && (c2 === 'a' || c2 === 'o' || c2 === 'â' || c2 === 'ô')) { P('Z'); i += 2; continue; }
    if (c === 'g' && c1 === 'g') { P('g'); i += 2; continue; }
    if (c === 'g') { P(FRONT(W1(i + 1)) ? 'Z' : 'g'); i++; continue; }
    if (c === 'j') { P('Z'); i++; continue; }
    if (c === 'p' && c1 === 'h') { P('f'); i += 2; continue; }
    if (c === 't' && c1 === 'h') { P('t'); i += 2; continue; }
    if (c === 't' && c1 === 'i' && (c2 === 'o' || (c2 === 'e' && (c3 === 'l' || c3 === 'n') && false)) && i > 0 && s[i - 1] !== 's' && s[i - 1] !== 'x') { P('s'); i++; continue; } /* nation, but question */
    if (c === 'q' && c1 === 'u') { P('k'); i += 2; continue; }
    if (c === 'q') { P('k'); i++; continue; }
    if (c === 's' && c1 === 's') { P('s'); i += 2; continue; }
    if (c === 's' && c1 === 'c' && FRONT(W1(i + 2))) { P('s'); i += 2; continue; }
    if (c === 's' && c1 === 'c' && c2 === 'h') { P('S'); i += 3; continue; }
    if (c === 's') { P(i > 0 && isVL(s[i - 1]) && isVL(W1(i + 1)) ? 'z' : 's'); i++; continue; }
    if (c === 'x') { if (i > 0 && s[i - 1] === 'e' && i === 1 && isVL(c1) || (s.slice(0, i) === 'e' || /^(ex|inex|réex)$/.test(s.slice(0, i + 1))) && isVL(c1)) { P('g'); P('z'); } else { P('k'); P('s'); } i++; continue; }
    if (c === 'h') { i++; continue; }
    if (c === 'w') { P('w'); i++; continue; }
    if (c === 'z') { P('z'); i++; continue; }
    if (c === 'r') { P('R'); i += c1 === 'r' ? 2 : 1; continue; }
    if ('pbtdfvklmn'.includes(c)) { P(c); i += c1 === c ? 2 : 1; continue; }
    i++; /* unknown letter: skip */
  }
  /* -ient, -ien etc. done; silent ending: nothing to add */
  return out;
}

/* schwa deletion: V C @ C V -> V C C V (samedi, maintenant), never in the first syllable or after two consonants */
function dropSchwa(ph) {
  const r = ph.slice();
  for (let k = 2; k < r.length - 1; k++) {
    if (r[k] !== '@') continue;
    const prevC = r[k - 1], prevV = r[k - 2];
    if (!VOW.has(prevC) && VOW.has(prevV) && !VOW.has(r[k + 1]) && r[k + 1] !== undefined) {
      /* keep the first schwa of the word (petit, demain): prevV exists so this is not the first syllable */
      r.splice(k, 1); k--;
    }
  }
  return r;
}

/* syllables: maximal valid onset */
const OBS = new Set(['p', 'b', 't', 'd', 'k', 'g', 'f', 'v']);
const LIQ = new Set(['R', 'l']);
const GLIDE = new Set(['j', 'w', 'H']);
function validOnset(cs) {
  if (cs.length === 0) return true;
  if (cs.length === 1) return true;
  if (cs.length === 2) return (OBS.has(cs[0]) && LIQ.has(cs[1])) || (!VOW.has(cs[0]) && !GLIDE.has(cs[0]) && GLIDE.has(cs[1]));
  if (cs.length === 3) return OBS.has(cs[0]) && LIQ.has(cs[1]) && GLIDE.has(cs[2]);
  return false;
}
function syllabify(ph) {
  const vi = ph.map((p, k) => VOW.has(p) ? k : -1).filter(k => k >= 0);
  if (!vi.length) return [ph];
  const syl = []; let start = 0;
  for (let k = 0; k < vi.length; k++) {
    if (k === vi.length - 1) { syl.push(ph.slice(start)); break; }
    const a = vi[k], b = vi[k + 1]; const cs = ph.slice(a + 1, b);
    let on = cs.length; while (on > 0 && !validOnset(cs.slice(cs.length - on))) on--;
    if (cs.length === 1) on = 1;
    const cut = b - on; syl.push(ph.slice(start, cut)); start = cut;
  }
  return syl;
}
const RV = { 'a': 'ah', 'e': 'ay', 'E': 'eh', 'i': 'ee', 'o': 'oh', 'u': 'oo', 'y': 'ew', '2': 'uh', '@': 'uh', 'A~': 'ahN', 'O~': 'ohN', 'E~': 'aN', '9~': 'uhN' };
const RC = { 'S': 'sh', 'Z': 'zh', 'J': 'ny', 'R': 'r', 'j': 'y', 'w': 'w', 'H': 'w' };
function render(syls) {
  return syls.map(sy => sy.map((p, k) => {
    if (VOW.has(p)) return RV[p];
    if (p === 'g' && sy[k + 1] && ['E', 'i'].includes(sy[k + 1])) return 'gh';
    return RC[p] || p;
  }).join('')).join('-');
}

function norm(t) {
  return String(t).normalize('NFC').replace(/[’‘ʼ`´]/g, '\'').replace(/[  ]/g, ' ').toLowerCase();
}
function wordRespell(w, plural) {
  if (LEX[w] !== undefined) return LEX[w];
  if (/[0-9]/.test(w)) throw new Error('digit in "' + w + '": write numbers as words');
  const bare = w.replace(/'/g, '');
  if (!/[a-zàâäéèêëîïôöùûüœçæ]/.test(bare)) return '';
  /* elided clitic + word: l'ami, j'aime, qu'il, s'appelle -> one word, so the clitic consonant starts it */
  const m = w.match(/^(l|j|d|m|t|s|n|c|qu|jusqu|lorsqu|puisqu)'(.+)$/);
  if (m) {
    const head = { l: 'l', j: 'zh', d: 'd', m: 'm', t: 't', s: 's', n: 'n', c: 's', qu: 'k', jusqu: 'zhews-k', lorsqu: 'lohrs-k', puisqu: 'pwees-k' }[m[1]];
    const tail = wordRespell(m[2], plural);
    return head.includes('-') ? head.split('-')[0] + '-' + head.split('-')[1] + tail : head + tail;
  }
  const ph = dropSchwa(phon(bare, plural));
  if (!ph.some(p => VOW.has(p))) { /* a word with no vowel sound left */ return render([ph]); }
  return render(syllabify(ph));
}
/* does the respelled word start with a vowel sound? */
const startsVowel = r => /^(ah|ay|eh|ee|oh|oo|ew|uh|aN)/.test(r);

function respell(text) {
  let t = ' ' + norm(text) + ' ';
  if (/[0-9]/.test(t)) throw new Error('digit in "' + text + '": write numbers as words');
  /* punctuation = pause (no liaison across it) */
  t = t.replace(/[«»"“”()…;:,.!?¿¡]/g, ' | ');
  /* phrases */
  const keys = Object.keys(PHRASES).sort((a, b) => b.length - a.length);
  const toks = [];
  const parts = t.split('|');
  for (const part of parts) {
    let seg = ' ' + part.replace(/\s+/g, ' ').trim() + ' ';
    if (!seg.trim()) continue;
    for (const k of keys) {
      const re = new RegExp('(^|\\s)' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[ -]/g, '[ -]') + '(?=\\s)', 'g');
      seg = seg.replace(re, (m0, sp) => sp + '\u0001' + k.replace(/[ ]/g, '\u0002') + '\u0001');
    }
    const raw = seg.trim().split(/\s+/);
    const group = [];
    for (const r of raw) {
      if (r.startsWith('\u0001')) { const k = r.slice(1, -1).replace(/\u0002/g, ' '); group.push({ fixed: PHRASES[k], w: k.split(' ').pop(), first: k.split(' ')[0] }); continue; }
      /* hyphens split words; keep the hyphen info for inversion (est-il) and the euphonic -t- */
      const hs = LEX[r] !== undefined ? [r] : r.split('-').filter(Boolean);
      hs.forEach((h, j) => group.push({ w: h, hyph: j > 0 }));
    }
    toks.push(group);
  }
  const out = [];
  for (const group of toks) {
    let plural = false;
    const words = [];
    for (let k = 0; k < group.length; k++) {
      const g = group[k];
      if (g.fixed) { words.push({ r: g.fixed, w: g.w, first: g.first, fixed: true }); plural = false; continue; }
      if (g.w === 't' && g.hyph) { words.push({ r: '', w: 't', euph: true }); continue; } /* a-t-il */
      const isSubj = /^(ils|elles|qu'ils|qu'elles)$/.test(g.w);
      const r = wordRespell(g.w, plural && !CLITIC.test(g.w));
      words.push({ r, w: g.w, hyph: g.hyph });
      if (isSubj) plural = true; else if (!CLITIC.test(g.w) && !/^(n|m|t|s|l)'/.test(g.w)) plural = false;
      else if (/^(n|m|t|s|l)'/.test(g.w)) plural = false;
    }
    /* liaison */
    for (let k = 0; k < words.length - 1; k++) {
      const a = words[k], b = words[k + 1];
      if (a.euph) continue;
      if (b.euph) { const c = words[k + 2]; if (c) { c.r = 't' + c.r; } continue; }
      if (!b.r || !startsVowel(b.r)) continue;
      const bw = b.fixed ? b.first : b.w;
      if (HASP.has(bw)) continue;
      let lc = null;
      if (b.hyph && (bw === 'en' || bw === 'y')) { /* allons-y, prends-en */
        const last = a.w.slice(-1); lc = { s: 'z', x: 'z', z: 'z', t: 't' }[last] || null;
      } else if (b.hyph && INVERT.has(bw)) { /* inversion: est-il, sont-ils, vont-elles, peut-on */
        const last = a.w.slice(-1); lc = { t: 't', d: 't', s: 'z', x: 'z', z: 'z' }[last] || null;
      } else if (!a.fixed && LIAISON[a.w]) lc = LIAISON[a.w];
      if (!lc) continue;
      if ((a.w === 'est' || a.w === 'c\'est') && !/^(un|une|à|en|au|aux|ici|important|impossible|il|elle|on|aussi|encore|à)$/.test(bw)) continue; /* est: only the common fixed links */
      if (a.w === 'sont' && !/^(en|à|au|aux|ici|il|ils|elles)$/.test(bw)) continue;
      if ((a.w === 'bien' || a.w === 'rien') && !/^(à|aimable|entendu)$/.test(bw)) continue;
      if ((a.w === 'en' || a.w === 'on') && b.hyph) continue;
      if (DENASAL[a.w]) a.r = DENASAL[a.w];
      if (lc === 'z' && /s$/.test(a.r) && /^(six|dix)$/.test(a.w)) a.r = a.r.slice(0, -1); /* dix euros -> dee zuh-roh */
      b.r = lc + b.r;
    }
    words.filter(x => x.r).forEach(x => out.push(x.r));
  }
  return out.join(' ').replace(/\s+/g, ' ').trim();
}

module.exports = { respell, syllabify, phon };
if (require.main === module) for (const a of process.argv.slice(2)) console.log(a, '->', respell(a));

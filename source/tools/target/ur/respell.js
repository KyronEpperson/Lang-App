/* Urdu (Perso-Arabic script, unvowelled) -> learner romanisation, the en-ur pron line (profile docs/profiles/en-ur.md §6).
   Urdu does not write short vowels, so the pron cannot be read from the spelling: this tool is a LEXICON (built-in word list
   below, longest match over whole words, up to four words), like the Cantonese one. The key is the en-hi key, so the two courses
   agree: long vowels ā ī ū; e ai o au; retroflex ṭ ḍ ṛ (ṇ only before ḍ / ṭ); aspirates kh gh ch chh jh ṭh ḍh th dh ph bh ṛh;
   sh; Perso-Arabic sounds q (ق), ḵh (خ), ġ (غ), z (ز ذ ض ظ), f, zh (ژ); a tilde on a nasal vowel (hā̃, maĩ, mẽ, nahī̃);
   v for و (never w); ع and ء are not written (the vowel is written as said); izafat -e- (a final zer joins two words:
   وزیرِ اعظم vazīr-e-āzam); ۔ -> . ، -> , ؟ -> ? ؛ -> ; ; all lowercase.
   Grammatical families are generated from one entry: m: masculine noun in -ā (ا or ہ: لڑکا, کمرہ -> لڑکے, لڑکوں),
   f: feminine noun (in ی: لڑکیاں, لڑکیوں; otherwise کتابیں, کتابوں), M: masculine noun that does not change (گھروں),
   a: adjective in -ā (اچھے, اچھی), v: verb stem (کرنا کرتا کرو کریں کروں کرے رہا ...; regular perfectives بیٹھا بیٹھی).
   "x/y" in an entry gives the form before a consonant / before a vowel (سمجھ = samajh/samjh -> samajhnā, samjhā).
   Homographs (one spelling, two words) are decided like this:
     میں   maĩ "I" at the start of a clause (after only connectors / time words: کل آج لیکن کیونکہ جب اگر کیا یہاں ...) or before نے;
           mẽ "in" after a noun or pronoun. It THROWS when the word before is a connector, adverb or postposition (رات کو میں),
           or when the clause has a first-person verb (ہوں, -وں گا) and no clause-initial میں: the writer marks مَیں (I) or مِیں (in).
     کیا   after نے: kiyā "did" only at the end of the clause or before ہے / تھا / گا ..., else kyā "what" (آپ نے کیا کھایا؟);
           kiyā before گیا / جاتا (passive); کیا کیا = kyā kiyā; clause-final کیا with no نے THROWS; کِیا forces kiyā.
     اس ان اسے انہیں انہوں ادھر: THROW unless marked: اِس is / اُس us, اِن in / اُن un ... (اس لیے is lie is a fixed entry).
     اسی   assī (eighty) unmarked, with a warning; اِسی isī / اُسی usī when marked.
     تو    to "then, so"; تُو tū "you (intimate)". سو: sau "hundred", so "sleep" before رہا / جا... . ہوا: huā; ہَوا havā "air".
     بہتر  behtar "better" with a warning; بہتّر (shadda) bahattar "72". پیر: pīr "Monday"; پَیر pair "foot".
   It THROWS «…» on: a word not in the list (the writer reports it; the lead adds it here or to lexicon.txt), Latin letters,
   Arabic code points where Urdu has its own (ي ى ك ه ة ٠-٩: use ی ک ہ / ھ ۃ ۰-۹), ASCII . , ? inside Urdu (use ۔ ، ؟),
   digits inside a sentence (write numbers as words; a lone number 0-100 as a whole card is read as its word), invisible characters.
   It WARNS «…» (stderr, not fatal) on generated forms that collide (two words, one spelling) and on اسی read as eighty.
   Script-lesson cards: a lone letter gives its Urdu name (ب -> be, ٹ -> ṭe); a letter with one short-vowel mark gives the syllable
   (بَ ba, بِ bi, بُ bu); a letter + ھ that is not a word gives the aspirate (بھ bha).
   usage: node respell.js "آپ کیسے ہیں؟"  ->  آپ کیسے ہیں؟ -> āp kaise haĩ?      node respell.js --pattern
   module: const { respell, pattern, warnings, normalise, lookup } = require('./respell.js')
   An optional tools/target/ur/lexicon.txt (owned by the lead; lines "tag: اردو = roman" or "اردو = roman", ";" or newline separated)
   is read after the built-in list and overrides it. */
'use strict';
const fs = require('fs'), path = require('path');
let warned = [];

const LEX = `
# pronouns and the verb "be"
ہم = ham; نے = ne; تم = tum; آپ = āp; یہ = yeh; وہ = voh; مجھے = mujhe; مجھ = mujh; ہمیں = hamẽ; تمہیں = tumhẽ; تجھے = tujhe
a: میرا = merā; a: ہمارا = hamārā; a: تمہارا = tumhārā; a: تیرا = terā; a: اپنا = apnā; a: کا = kā
کس = kis; کن = kin; جس = jis; جن = jin; کسی = kisī; کوئی = koī; کچھ = kuchh; سب = sab; خود = ḵhud; لوگ = log
ہوں = hū̃; ہو = ho; ہے = hai; ہیں = haĩ; تھا = thā; تھے = the; تھی = thī; تھیں = thī̃; گا = gā; گے = ge; گی = gī
v: ہو = ho
ہوا = huā; ہوئی = huī; ہوئے = hue; ہوئیں = huī̃; پسند = pasand
# greetings, courtesy, little words
السلام علیکم = assalāmu alaikum; وعلیکم السلام = va-alaikum assalām; اللہ حافظ = allāh hāfiz; خدا حافظ = ḵhudā hāfiz
اللہ = allāh; خدا = ḵhudā; حافظ = hāfiz; ان شاء اللہ = in shā allāh; ماشاء اللہ = māshā allāh; الحمد للہ = alhamdu lillāh
شکریہ = shukriyā; بہت = bahut; مہربانی = mehrbānī; جی = jī; ہاں = hā̃; نہیں = nahī̃; نہ = na; مت = mat; ٹھیک = ṭhīk
معاف = māf; بات = bāt; خوش = ḵhush; آمدید = āmadīd; پھر = phir; آداب = ādāb; ذرا = zarā; پلیز = plīz; سوری = sorī
بالکل = bilkul; ضرور = zarūr; واقعی = vāqaī; مبارک = mubārak; عید = īd; رمضان = ramzān; جناب = janāb; صاحب = sāhab
تشریف = tashrīf; شب = shab; بخیر = baḵhair; اچھا جی = acchhā jī; خیر = ḵhair; سلام = salām
# question words, postpositions, connectors, adverbs
کون = kaun; کہاں = kahā̃; کب = kab; کیوں = kyõ; کیسے = kaise; کیسی = kaisī; کیسا = kaisā; a: کتنا = kitnā; a: کونسا = kaunsā
کدھر = kidhar; جدھر = jidhar; پر = par; سے = se; کو = ko; تک = tak; لیے = lie; ساتھ = sāth; پاس = pās; بعد = bād
پہلے = pahle; سامنے = sāmne; پیچھے = pīchhe; اوپر = ūpar; نیچے = nīche; اندر = andar; باہر = bāhar; قریب = qarīb; دور = dūr
بغیر = baġair; طرف = taraf; a: والا = vālā; اور = aur; لیکن = lekin; مگر = magar; یا = yā; کیونکہ = kyõki; اس لیے = is lie
کہ = ki; اگر = agar; جب = jab; بھی = bhī; صرف = sirf; شاید = shāyad; ابھی = abhī; اب = ab; یہاں = yahā̃; وہاں = vahā̃
ہی = hī; بس = bas; سیدھے = sīdhe; دائیں = dāẽ; بائیں = bāẽ; جلدی = jaldī; دیر = der; آہستہ = āhistā; زیادہ = zyādā; کم = kam
سب سے = sab se; بہت زیادہ = bahut zyādā; تقریباً = taqrīban; یعنی = yānī; ویسے = vaise; ایسے = aise; ایسا = aisā; جیسے = jaise
# time
آج = āj; کل = kal; پرسوں = parsõ; صبح = subah; دوپہر = dopahar; شام = shām; f: رات = rāt; M: دن = din; m: ہفتہ = haftā
اتوار = itvār; پیر = pīr; منگل = mangal; بدھ = budh; جمعرات = jumerāt; جمعہ = jumā; M: وقت = vaqt; بجے = baje; بجا = bajā
ساڑھے = sāṛhe; سوا = savā; پونے = paune; ڈیڑھ = ḍeṛh; ڈھائی = ḍhāī; m: گھنٹہ = ghanṭā; M: منٹ = minaṭ; M: سال = sāl
m: مہینہ = mahīnā; روز = roz; ہمیشہ = hameshā; کبھی = kabhī; کبھی کبھی = kabhī kabhī; اکثر = aksar; f: چھٹی = chhuṭṭī
f: چھٹیاں = chhuṭṭiyā̃; ہر = har; ہر روز = har roz; روزانہ = rozānā
# numbers
ایک = ek; دو = do; تین = tīn; چار = chār; پانچ = pā̃ch; چھ = chhe; سات = sāt; آٹھ = āṭh; نو = nau; دس = das
گیارہ = gyārah; بارہ = bārah; تیرہ = terah; چودہ = chaudah; پندرہ = pandrah; سولہ = solah; سترہ = satrah; اٹھارہ = aṭhārah
انیس = unnīs; بیس = bīs; اکیس = ikkīs; بائیس = bāīs; تئیس = teīs; چوبیس = chaubīs; پچیس = pacchīs; چھبیس = chhabbīs
ستائیس = sattāīs; اٹھائیس = aṭṭhāīs; انتیس = untīs; تیس = tīs; اکتیس = ikattīs; بتیس = battīs; تینتیس = taĩtīs; چونتیس = chaũtīs
پینتیس = paĩtīs; چھتیس = chhattīs; سینتیس = saĩtīs; اڑتیس = aṛtīs; انتالیس = untālīs; چالیس = chālīs; اکتالیس = iktālīs
بیالیس = bayālīs; تینتالیس = taĩtālīs; چوالیس = chavālīs; پینتالیس = paĩtālīs; چھیالیس = chhiyālīs; سینتالیس = saĩtālīs
اڑتالیس = aṛtālīs; انچاس = unchās; پچاس = pachās; اکاون = ikyāvan; باون = bāvan; ترپن = tirpan; چون = chavvan; پچپن = pachpan
چھپن = chhappan; ستاون = sattāvan; اٹھاون = aṭṭhāvan; انسٹھ = unsaṭh; ساٹھ = sāṭh; اکسٹھ = iksaṭh; باسٹھ = bāsaṭh
تریسٹھ = tirsaṭh; چونسٹھ = chaũsaṭh; پینسٹھ = paĩsaṭh; چھیاسٹھ = chhiyāsaṭh; سڑسٹھ = saṛsaṭh; اڑسٹھ = aṛsaṭh; انہتر = unhattar
ستر = sattar; اکہتر = ikhattar; بہتر = bahattar; f: پیر = pair; تہتر = tihattar; چوہتر = chauhattar; پچھتر = pachhattar; چھہتر = chhihattar
ستتر = sathattar; اٹھہتر = aṭhhattar; اناسی = unāsī; اکیاسی = ikyāsī; بیاسی = bayāsī; تراسی = tirāsī; چوراسی = chaurāsī
پچاسی = pachāsī; چھیاسی = chhiyāsī; ستاسی = sattāsī; اٹھاسی = aṭṭhāsī; نواسی = navāsī; نوے = navve; اکیانوے = ikyānve
بانوے = bānve; ترانوے = tirānve; چورانوے = chaurānve; پچانوے = pachānve; چھیانوے = chhiyānve; ستانوے = sattānve
اٹھانوے = aṭṭhānve; ننانوے = ninnānve; ہزار = hazār; لاکھ = lākh; کروڑ = karoṛ; صفر = sifr; وزیر = vazīr; اعظم = āzam
a: پہلا = pahlā; a: دوسرا = dūsrā; a: تیسرا = tīsrā; a: چوتھا = chauthā; a: آدھا = ādhā; روپیہ = rupayā; روپے = rupaye
روپوں = rupayõ; m: پیسہ = paisā; پیسے = paise; پیسوں = paisõ
# family and people
امی = ammī; ابو = abbū; ماں = mā̃; M: باپ = bāp; والد = vālid; والدہ = vālidā; والدین = vālidain; بھائی = bhāī; بھائیوں = bhāiyõ
f: بہن = bahan/bahn; m: بیٹا = beṭā; f: بیٹی = beṭī; شوہر = shauhar; f: بیوی = bīvī; دادا = dādā; دادی = dādī; نانا = nānā
نانی = nānī; چچا = chachā; چچی = chachī; خالہ = ḵhālā; ماموں = māmū̃; پھوپھو = phuphpho; m: بچہ = bacchā; f: بچی = bacchī
M: دوست = dost; m: لڑکا = laṛkā; f: لڑکی = laṛkī; آدمی = ādmī; آدمیوں = ādmiyõ; f: عورت = aurat; باجی = bājī; آپی = āpī
بھائی جان = bhāī jān; انکل = ankal; آنٹی = ānṭī; M: استاد = ustād; استانی = ustānī; طالب علم = tālib-e-ilm; M: ڈاکٹر = ḍākṭar
M: مہمان = mehmān; M: پڑوسی = paṛosī; f: فیملی = faimilī; f: شادی = shādī; خاندان = ḵhāndān; M: میاں = miyā̃
# names (people)
سارہ = sārā; ڈیوڈ = ḍeviḍ; علی = alī; احمد = ahmad; عائشہ = āishā; فاطمہ = fātimā; زینب = zainab; بلال = bilāl
حسن = hasan; سعدیہ = sādiyā; عمران = imrān; نادیہ = nādiyā; خان = ḵhān; شیخ = shaiḵh; بٹ = baṭ; رضا = razā
# places
پاکستان = pākistān; امریکہ = amrīkā; لاہور = lāhaur; کراچی = karāchī; اسلام آباد = islāmābād; پشاور = pashāvar; ملتان = multān
نیو یارک = nyū yārk; شکاگو = shikāgo; ٹیکساس = ṭeksās; ہیوسٹن = hyūsṭan; کیلیفورنیا = kailīforniyā; لندن = landan; ہندوستان = hindustān
بادشاہی مسجد = bādshāhī masjid; f: مسجد = masjid; M: شہر = shahar; M: ملک = mulk; f: سڑک = saṛak/saṛk; M: اسٹیشن = isṭeshan
M: بازار = bāzār; f: دکان = dukān; M: دکاندار = dukāndār; M: ہوٹل = hoṭal; M: ریسٹورنٹ = resṭoranṭ; M: ہسپتال = haspatāl
M: سکول = skūl; f: یونیورسٹی = yūnivarsiṭī; M: دفتر = daftar; M: ایئرپورٹ = eyarporṭ; ہوائی اڈہ = havāī aḍḍā; M: پارک = pārk
m: راستہ = rāstā; m: نقشہ = naqshā; M: گاؤں = gāõ; m: کنارہ = kinārā; M: سمندر = samundar; f: جگہ = jagah
# home and things
M: گھر = ghar; m: کمرہ = kamrā; m: دروازہ = darvāzā; f: کھڑکی = khiṛkī; f: میز = mez; f: کرسی = kursī; M: بستر = bistar
f: کتاب = kitāb; M: قلم = qalam; M: فون = fon; M: موبائل = mobāil; M: کمپیوٹر = kampyūṭar; f: گاڑی = gāṛī; f: چابی = chābī
M: بیگ = baig; M: کام = kām; f: نوکری = naukrī; M: نام = nām; f: عمر = umr; f: زبان = zabān; M: سوال = savāl; M: جواب = javāb
M: خیال = ḵhayāl; m: مسئلہ = masalā; M: شوق = shauq; M: موسم = mausam; f: گرمی = garmī; f: سردی = sardī; f: بارش = bārish
f: دھوپ = dhūp; M: پیار = pyār; M: سفر = safar; f: چیز = chīz; f: تصویر = tasvīr; f: فلم = film; f: کرکٹ = kirkaṭ
M: اخبار = aḵhbār; f: چائے = chāy; M: پانی = pānī; m: کھانا = khānā; m: کپڑا = kapṛā; m: جوتا = jūtā; f: قمیض = qamīz
f: شلوار = shalvār; m: دوپٹہ = dupaṭṭā; M: رنگ = rang; f: گھڑی = ghaṛī; M: ٹی وی = ṭī vī; f: بجلی = bijlī; M: درخت = daraḵht
m: باغیچہ = bāġīchā; f: کھیل = khel; m: گانا = gānā; m: کیمرہ = kaimrā; f: ٹوپی = ṭopī
# food and drink
f: روٹی = roṭī; M: نان = nān; f: دال = dāl; M: چاول = chāval; M: گوشت = gosht; f: مرغی = murġī; f: بریانی = biryānī
M: کباب = kabāb; m: سموسہ = samosā; m: پکوڑا = pakoṛā; f: لسی = lassī; M: دودھ = dūdh; f: چینی = chīnī; M: نمک = namak
f: مرچ = mirch; f: مٹھائی = miṭhāī; M: آم = ām; M: سیب = seb; m: کیلا = kelā; f: سبزی = sabzī; M: آلو = ālū; m: انڈا = anḍā
f: کافی = kāfī; M: بل = bil; f: نہاری = nihārī; M: حلیم = halīm; m: پراٹھا = parāṭhā; f: کڑاہی = kaṛāhī; m: ناشتہ = nāshtā
M: پھل = phal; M: جوس = jūs; M: گلاس = gilās; f: پلیٹ = pleṭ; M: مینو = menyū; M: آرڈر = ārḍar; f: قیمت = qīmat; m: ذائقہ = zāiqā
M: چکن = chikan; f: سوجی = sūjī; m: حلوہ = halvā; f: کھیر = khīr; M: پراٹھے = parāṭhe
# colours and adjectives
لال = lāl; سرخ = surḵh; a: نیلا = nīlā; a: ہرا = harā; a: پیلا = pīlā; a: کالا = kālā; سفید = safed
a: اچھا = acchhā; a: برا = burā; a: بڑا = baṛā; a: چھوٹا = chhoṭā; نیا = nayā; نئی = naī; نئے = nae; a: پرانا = purānā
a: لمبا = lambā; خوبصورت = ḵhūbsūrat; آسان = āsān; مشکل = mushkil; صاف = sāf; a: گندا = gandā; بیمار = bīmār; a: تھکا = thakā
مصروف = masrūf; خالی = ḵhālī; امیر = amīr; غریب = ġarīb; a: پیارا = pyārā; مزیدار = mazedār; گرم = garam; a: ٹھنڈا = ṭhaṇḍā
تیز = tez; a: مہنگا = mahãgā; a: سستا = sastā; a: تھوڑا = thoṛā; پاکستانی = pākistānī; امریکی = amrīkī; اردو = urdū
انگریزی = angrezī; ہندی = hindī; پنجابی = panjābī; a: سیدھا = sīdhā; a: میٹھا = mīṭhā; a: کڑوا = kaṛvā; a: اونچا = ū̃chā
a: موٹا = moṭā; a: پتلا = patlā; a: ہلکا = halkā; بھاری = bhārī; a: گیلا = gīlā; a: سوکھا = sūkhā; a: کھلا = khulā
بند = band; a: بھوکا = bhūkā; a: پیاسا = pyāsā; a: اکیلا = akelā; a: ٹیڑھا = ṭeṛhā; ضروری = zarūrī; مفت = muft; تازہ = tāzā
شادی شدہ = shādī shudā; دلچسپ = dilchasp; بور = bor; ٹھیک ٹھاک = ṭhīk ṭhāk; a: سارا = sārā; جوان = javān; a: بوڑھا = būṛhā
خراب = ḵharāb; a: پکا = pakkā; a: کچا = kacchā; a: ادھورا = adhūrā; پورا = pūrā; a: گہرا = gahrā; a: کھٹا = khaṭṭā
# health and help
f: دوا = davā; M: بخار = buḵhār; M: درد = dard; M: سر = sar; M: پیٹ = peṭ; f: مدد = madad; f: طبیعت = tabīat; M: آرام = ārām
M: زکام = zukām; f: کھانسی = khā̃sī; M: ہاتھ = hāth; M: پاؤں = pāõ; f: آنکھ = ā̃kh; M: دانت = dā̃t; m: گلا = galā
f: پولیس = pulīs; f: ایمبولینس = aimbulains; m: خطرہ = ḵhatrā; f: فارمیسی = fārmesī
# fixed verb forms (irregular)
کیا = kyā; کِیا = kiyā; کی = kī; کیے = kie; کیجیے = kījie; کریں = karẽ
گیا = gayā; گئی = gaī; گئے = gae; گئیں = gaī̃
دیا = diyā; دی = dī; دیے = die; دیجیے = dījie; دو = do; دوں = dū̃; دیں = dẽ; دیتا = detā; دیتی = detī; دیتے = dete; دینا = denā; دینے = dene; دے = de
لیا = liyā; لی = lī; لیجیے = lījie; لو = lo; لوں = lū̃; لیں = lẽ; لیتا = letā; لیتی = letī; لیتے = lete; لینا = lenā; لینے = lene; لے = le
پیا = piyā; پی = pī; پیے = pie; پیجیے = pījie; پیو = piyo; پیئیں = piẽ; پیتا = pītā; پیتی = pītī; پیتے = pīte; پینا = pīnā; پینے = pīne
چاہیے = chāhie; چاہیئے = chāhie; ملا = milā; لگا = lagā; مرا = marā
# verbs (stems)
v: کر = kar; v: جا = jā; v: آ = ā; v: کھا = khā; v: بول = bol; v: بیٹھ = baiṭh; v: سن = sun; v: دیکھ = dekh; v: پڑھ = paṛh
v: لکھ = likh; v: رہ = rah; v: سمجھ = samajh/samjh; v: جان = jān; v: سیکھ = sīkh; v: سو = so; v: اٹھ = uṭh; v: چل = chal
v: مل = mil; v: بنا = banā; v: پکا = pakā; v: خرید = ḵharīd; v: بیچ = bech; v: چاہ = chāh; v: سک = sak; v: لگ = lag; v: مڑ = muṛ
v: رک = ruk; v: کھول = khol; v: بتا = batā; v: پوچھ = pūchh; v: سوچ = soch; v: کھیل = khel; v: ٹھہر = ṭhahar/ṭhahr; v: نہا = nahā
v: پہن = pahan/pahn; v: اتر = utar/utr; v: بلا = bulā; v: پہنچ = pahũch; v: دکھا = dikhā; v: بھیج = bhej; v: ڈھونڈ = ḍhūṇḍh
v: رو = ro; v: گا = gā; v: بھول = bhūl; v: رکھ = rakh; v: چھوڑ = chhoṛ; v: لا = lā; v: سکھا = sikhā
v: کھو = kho; v: دوڑ = dauṛ; v: جاگ = jāg; v: نکل = nikal/nikl; v: پکڑ = pakaṛ/pakṛ; v: سنا = sunā; v: مار = mār; v: ہنس = hãs
v: تھک = thak; v: پسند کر = pasand kar; v: کھل = khul; v: بج = baj; v: بدل = badal/badl; v: گن = gin; v: پڑ = paṛ; v: چڑھ = chaṛh; v: ڈال = ḍāl; v: اٹھا = uṭhā; v: بھر = bhar; v: کاٹ = kāṭ; v: دھو = dho; v: چلا = chalā; v: کما = kamā
v: جل = jal; v: کہ = kah; کہہ = kah; v: تیر = tair; M: خط = ḵhat; براہ کرم = barāh-e-karam; ریلوے = relve; M: پل = pal; پتا = patā; تب = tab; ٹیپ = ṭep; f: ڈاک = ḍāk; M: سچ = sach; M: جھوٹ = jhūṭ; f: بھوک = bhūk; f: پیاس = pyās; M: ٹائم = ṭāim; علیکم = alaikum; متفق = muttafiq; M: مذہب = mazhab; ٹیلی ویژن = ṭelī vizhan; کانا = kānā; m: ڈبا = ḍabbā; M: ٹماٹر = ṭamāṭar; v: گر = gir; v: مان = mān; v: پلا = pilā; v: بٹھا = biṭhā
# English loans used in everyday Pakistani speech
f: بس = bas; f: ٹرین = ṭren; m: رکشہ = rikshā; f: ٹیکسی = ṭaiksī; M: ٹکٹ = ṭikaṭ; M: پاسپورٹ = pāsporṭ; اوکے = oke
M: کارڈ = kārḍ; M: ای میل = ī mel; M: میسج = mesij; f: میٹنگ = mīṭing; M: پروگرام = progrām; f: کلاس = klās
`;

/* ---------------- normalisation ---------------- */
const MARKS = /[ً-ٕٓ-ٰٟۖ-ۭ]/g; /* zabar zer pesh, tanwin, shadda, jazm, khari zabar ... (not hamza above U+0654) */
const ZABAR = 'َ', ZER = 'ِ', PESH = 'ُ';
function normalise(s) { /* the fold the course uses everywhere: generator, and (engine request) the matcher's exact pass */
  return String(s).normalize('NFC').replace(/یٔ/g, 'ئ').replace(/[‌‍‎‏؜]/g, '');
}
const ARABIC_FORMS = { 'ي': 'ی', 'ى': 'ی', 'ك': 'ک', 'ه': 'ہ (or ھ after an aspirated letter)', 'ة': 'ۃ or ہ' };
const skel = w => w.replace(MARKS, '');

/* ---------------- lexicon ---------------- */
const DICT = new Map(); const CONFLICT = new Set(); const EXPLICIT = new Set();
function put(k, r, gen) {
  k = normalise(k); r = r.normalize('NFC');
  if (!gen) { DICT.set(k, r); EXPLICIT.add(k); return; }     /* a written entry always wins */
  if (!DICT.has(k)) { DICT.set(k, r); return; }
  if (DICT.get(k) !== r && !EXPLICIT.has(k)) CONFLICT.add(k);  /* two generated forms, one spelling */
}
function strip1(w) { return [...w].slice(0, -1).join(''); }
function addEntry(tag, ur, ro, gen) {
  const [rc, rv0] = ro.split('/'); const rv = rv0 || rc;
  if ((tag === 'm' || tag === 'a') && !(/[اہ]$/.test(ur) && /ā$/.test(rc))) throw new Error('lexicon: «' + ur + '» is tagged ' + tag + ': but does not end in ا / ہ with roman -ā');
  put(ur, rc, tag === 'v' ? true : gen); /* a verb stem never overrides a written entry (کہ ki, سو, گا) */
  const last = [...ur].pop();
  if (tag === 'm') { /* masculine -ā noun in ا or ہ */
    const st = strip1(ur), rs = rv.replace(/ā$/, '');
    put(st + 'ے', rs + 'e', true); put(st + 'وں', rs + 'õ', true);
  } else if (tag === 'f') {
    if (last === 'ی') { const rs = rc.replace(/ī$/, ''); put(ur + 'اں', rs + 'iyā̃', true); put(ur + 'وں', rs + 'iyõ', true); }
    else { put(ur + 'یں', rv + 'ẽ', true); put(ur + 'وں', rv + 'õ', true); }
  } else if (tag === 'M') {
    if (last === 'ی') put(ur + 'وں', rc.replace(/ī$/, 'iyõ'), true);
    else if (last === 'ا' || last === 'ہ') put(strip1(ur) + 'وں', rc.replace(/ā$/, 'õ'), true);
    else if (last !== 'ں' && last !== 'و') put(ur + 'وں', rv + 'õ', true);
  } else if (tag === 'a') {
    const st = strip1(ur), rs = rc.replace(/ā$/, '');
    put(st + 'ے', rs + 'e', true); put(st + 'ی', rs + 'ī', true);
  } else if (tag === 'v') verb(ur, rc, rv);
}
function verb(st, rc, rv) {
  const parts = st.split(' '); /* compound (پسند کر): only the last word inflects */
  const pre = parts.slice(0, -1).join(' '), preR = pre ? rc.split(' ').slice(0, -1).join(' ') + ' ' : '';
  const s = parts[parts.length - 1]; const c = pre ? rc.split(' ').pop() : rc; const v = pre ? rv.split(' ').pop() : rv;
  const P = (u, r) => put((pre ? pre + ' ' : '') + u, preR + r, true);
  const lastCh = [...s].pop(); const vow = 'آاوی'.includes(lastCh); /* vowel-final stem: آ جا کھا سو ... */
  P(s, c); P(s + 'نا', c + 'nā'); P(s + 'نے', c + 'ne'); P(s + 'نی', c + 'nī');
  P(s + 'تا', c + 'tā'); P(s + 'تے', c + 'te'); P(s + 'تی', c + 'tī'); P(s + 'تیں', c + 'tī̃');
  if (vow) {
    P(s + 'ؤ', c + 'o'); P(s + 'ئیے', c + 'ie'); P(s + 'ؤں', c + 'ū̃'); P(s + 'ئے', c + 'e'); P(s + 'ئیں', c + 'ẽ');
    P(s + 'یا', c + 'yā'); P(s + 'ئی', c + 'ī');
  } else {
    P(s + 'و', v + 'o'); P(s + 'یے', v + 'ie'); P(s + 'وں', v + 'ū̃'); P(s + 'ے', v + 'e'); P(s + 'یں', v + 'ẽ');
    P(s + 'ا', v + 'ā'); P(s + 'ی', v + 'ī');
  }
}
function load(text, gen) {
  text.split('\n').forEach(line => {
    line = line.trim(); if (!line || line[0] === '#') return;
    const tag = '';
    line.split(';').map(x => x.trim()).filter(Boolean).forEach(e => {
      const mm = e.match(/^([mfMav]):\s*(.*)$/); let t = tag, body = e; if (mm) { t = mm[1]; body = mm[2]; }
      const i = body.indexOf(' = '); if (i < 1) throw new Error('bad lexicon entry «' + e + '»');
      addEntry(t, body.slice(0, i).trim(), body.slice(i + 3).trim(), gen);
    });
  });
}
/* written entries always win over generated forms (see put) */
load(LEX, false);
(function lexfile() { const f = path.join(__dirname, 'lexicon.txt'); if (fs.existsSync(f)) load(fs.readFileSync(f, 'utf8'), false); })();
/* a generated form that equals an explicit entry is not a conflict worth warning about if the romanisation agrees */
for (const k of [...CONFLICT]) if (EXPLICIT.has(k)) CONFLICT.delete(k);

/* ---------------- letters and numbers ---------------- */
const NAME = { 'ا': 'alif', 'آ': 'alif madd', 'ب': 'be', 'پ': 'pe', 'ت': 'te', 'ٹ': 'ṭe', 'ث': 'se', 'ج': 'jīm', 'چ': 'che', 'ح': 'baṛī he', 'خ': 'ḵhe',
  'د': 'dāl', 'ڈ': 'ḍāl', 'ذ': 'zāl', 'ر': 're', 'ڑ': 'ṛe', 'ز': 'ze', 'ژ': 'zhe', 'س': 'sīn', 'ش': 'shīn', 'ص': 'suād', 'ض': 'zuād', 'ط': 'toe', 'ظ': 'zoe',
  'ع': 'ain', 'غ': 'ġain', 'ف': 'fe', 'ق': 'qāf', 'ک': 'kāf', 'گ': 'gāf', 'ل': 'lām', 'م': 'mīm', 'ن': 'nūn', 'ں': 'nūn ġunna', 'و': 'vāo', 'ہ': 'choṭī he',
  'ھ': 'do-chashmī he', 'ء': 'hamza', 'ی': 'choṭī ye', 'ے': 'baṛī ye' };
const CONS = { 'ب': 'b', 'پ': 'p', 'ت': 't', 'ٹ': 'ṭ', 'ث': 's', 'ج': 'j', 'چ': 'ch', 'ح': 'h', 'خ': 'ḵh', 'د': 'd', 'ڈ': 'ḍ', 'ذ': 'z', 'ر': 'r', 'ڑ': 'ṛ',
  'ز': 'z', 'ژ': 'zh', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z', 'غ': 'ġ', 'ف': 'f', 'ق': 'q', 'ک': 'k', 'گ': 'g', 'ل': 'l', 'م': 'm',
  'ن': 'n', 'و': 'v', 'ہ': 'h', 'ی': 'y' };
const NUMW = ('صفر ایک دو تین چار پانچ چھ سات آٹھ نو دس گیارہ بارہ تیرہ چودہ پندرہ سولہ سترہ اٹھارہ انیس بیس اکیس بائیس تئیس چوبیس پچیس چھبیس ستائیس اٹھائیس انتیس تیس '
  + 'اکتیس بتیس تینتیس چونتیس پینتیس چھتیس سینتیس اڑتیس انتالیس چالیس اکتالیس بیالیس تینتالیس چوالیس پینتالیس چھیالیس سینتالیس اڑتالیس انچاس پچاس '
  + 'اکاون باون ترپن چون پچپن چھپن ستاون اٹھاون انسٹھ ساٹھ اکسٹھ باسٹھ تریسٹھ چونسٹھ پینسٹھ چھیاسٹھ سڑسٹھ اڑسٹھ انہتر ستر '
  + 'اکہتر بہتر تہتر چوہتر پچھتر چھہتر ستتر اٹھہتر اناسی اسی اکیاسی بیاسی تراسی چوراسی پچاسی چھیاسی ستاسی اٹھاسی نواسی نوے '
  + 'اکیانوے بانوے ترانوے چورانوے پچانوے چھیانوے ستانوے اٹھانوے ننانوے سو').split(' ');
const NUMR = Object.assign({}, ...NUMW.map((w, i) => ({ [i]: w === 'اسی' ? 'assī' : w === 'سو' ? 'sau' : DICT.get(w) })));

/* ---------------- homographs ---------------- */
const MARKED = { 'اس': ['is', 'us'], 'ان': ['in', 'un'], 'اسے': ['ise', 'use'], 'انہیں': ['inhẽ', 'unhẽ'], 'انہوں': ['inhõ', 'unhõ'], 'ادھر': ['idhar', 'udhar'],
  'اسی': ['isī', 'usī'], 'اسکا': null, 'انکا': null };
const SLEEP_NEXT = new Set(['رہا', 'رہی', 'رہے', 'جاؤ', 'جائیے', 'جائیں', 'جاتا', 'جاتی', 'جاتے', 'گیا', 'گئی', 'گئے', 'سکتا', 'سکتی', 'سکتے', 'جاؤں', 'جائے']);
const LEAD = new Set(['کل', 'آج', 'اب', 'ابھی', 'پھر', 'لیکن', 'مگر', 'اور', 'کیونکہ', 'جب', 'اگر', 'تو', 'ہاں', 'جی', 'نہیں', 'پہلے', 'شاید', 'بھی', 'کہ', 'یا', 'صبح', 'شام', 'رات', 'روز', 'کبھی', 'ہمیشہ', 'اکثر', 'کیا', 'بس', 'اچھا', 'ویسے', 'پرسوں', 'جیسے', 'لیے', 'یہاں', 'وہاں']);
const NOT_NOUN = new Set(['بھی', 'ہی', 'نہیں', 'تو', 'کہ', 'اور', 'لیکن', 'مگر', 'یا', 'کیونکہ', 'جب', 'اگر', 'پھر', 'اب', 'ابھی', 'شاید', 'کو', 'سے', 'پر', 'کا', 'کی', 'کے', 'تک', 'نے']);
const LEADI = c => c.findIndex(x => x.sk === 'میں') >= 0 && c.slice(0, c.findIndex(x => x.sk === 'میں')).every(x => LEAD.has(x.sk));
const AUX = new Set(['ہے', 'ہیں', 'تھا', 'تھی', 'تھے', 'تھیں', 'ہوں', 'ہو', 'گا', 'گی', 'گے']);
const FIRST_PERSON = (c, k) => c[k].sk === 'ہوں' || (/(وں|ؤں)$/.test(c[k].sk) && c[k + 1] && /^(گا|گی)$/.test(c[k + 1].sk));

function lookup(toks, i) { /* longest match, up to 4 words; returns [roman, words used] */
  for (let n = Math.min(4, toks.length - i); n >= 1; n--) {
    const k = toks.slice(i, i + n).map(t => t.sk).join(' ');
    if (DICT.has(k)) { if (CONFLICT.has(k)) warned.push(k + ': two words share this spelling; check the romanisation ' + DICT.get(k)); return [DICT.get(k), n]; }
  }
  return null;
}

function decide(t, clause, j) { /* t = token, clause = tokens of its clause, j = index in clause; returns roman or null */
  const w = t.raw, sk = t.sk, first = [...w].length > 1 ? [...w][1] : '';
  if (MARKED[sk] !== undefined) {
    if (MARKED[sk] === null) throw new Error('«' + w + '»: write it as two words with a mark: اِس کا / اُس کا (or اِن کا / اُن کا)');
    if (first === ZER) return MARKED[sk][0];
    if (first === PESH) return MARKED[sk][1];
    if (sk === 'اسی') { warned.push(w + ': read as assī (eighty); write اِسی (isī) or اُسی (usī) for the pronoun'); return 'assī'; }
    throw new Error('«' + w + '»: write it with a mark: ' + (sk[0] === 'ا' ? 'اِ' + sk.slice(1) + ' (' + MARKED[sk][0] + ') or اُ' + sk.slice(1) + ' (' + MARKED[sk][1] + ')' : ''));
  }
  if (sk === 'میں') {
    if (first === ZABAR) return 'maĩ'; if (first === ZER) return 'mẽ';
    const lead = clause.slice(0, j).every(c => LEAD.has(c.sk));      /* only connectors / time words before it: still clause-initial */
    if (lead) return 'maĩ';
    if (clause[j + 1] && clause[j + 1].sk === 'نے') return 'maĩ';
    const amb = () => { throw new Error('«میں» in «' + clause.map(c => c.raw).join(' ') + '»: is it "I" or "in"? Write مَیں (I) or مِیں (in)'); };
    if (LEAD.has(clause[j - 1].sk) || NOT_NOUN.has(clause[j - 1].sk)) amb();   /* "in" needs a noun or pronoun before it */
    const initialI = clause.findIndex(c => c.sk === 'میں') < j && LEADI(clause);
    if (!initialI && clause.some((c, k) => k > j && FIRST_PERSON(clause, k))) amb();
    return 'mẽ';
  }
  if (sk === 'کیا') {
    if (w.includes(ZER)) return 'kiyā';
    const nx = clause[j + 1];
    if (nx && nx.sk === 'کیا') return 'kyā';
    if (nx && /^(گیا|گئی|گئے|جاتا|جاتی|جاتے|جائے)$/.test(nx.sk)) return 'kiyā';           /* passive: کیا گیا */
    if (clause.slice(0, j).some(c => c.sk === 'نے')) return !nx || AUX.has(nx.sk) ? 'kiyā' : 'kyā'; /* میں نے کام کیا / آپ نے کیا کھایا */
    if (!nx && j > 0) throw new Error('«کیا» at the end of «' + clause.map(c => c.raw).join(' ') + '»: "did" or "what"? Write کِیا for "did"');
    return 'kyā';
  }
  if (sk === 'کہ' && clause[j + 1] && /^(رہا|رہی|رہے|دیا|دی|دیں|دو|دیجیے|سکتا|سکتی|سکتے|سکا|چکا|چکی|چکے)$/.test(clause[j + 1].sk)) throw new Error('«کہ» before ' + clause[j + 1].raw + ': the stem of کہنا is written کہہ (kah); کہ alone is ki "that"');
  if (sk === 'بہتر') { if (w.includes('\u0651')) return 'bahattar'; warned.push(w + ': read as behtar (better); write بہتّر (with shadda) for seventy-two'); return 'behtar'; }
  if (sk === 'پیر') return w.includes(ZABAR) ? 'pair' : 'pīr';
  if (sk === 'تو') return w.includes(PESH) ? 'tū' : 'to';
  if (sk === 'سو') return clause[j + 1] && SLEEP_NEXT.has(clause[j + 1].sk) ? 'so' : 'sau';
  if (sk === 'ہوا') return w.includes(ZABAR) ? 'havā' : 'huā';
  return null;
}

/* ---------------- main ---------------- */
const PUNCT = { '۔': '.', '؟': '?', '،': ',', '؛': ';', '!': '!', ':': ':' };
function respell(text) {
  const src = normalise(text).trim();
  if (!src) throw new Error('«' + text + '»: empty');
  for (const ch of src) {
    if (ARABIC_FORMS[ch]) throw new Error('«' + text + '»: Arabic letter ' + ch + ' (U+' + ch.charCodeAt(0).toString(16).toUpperCase() + '); Urdu uses ' + ARABIC_FORMS[ch]);
    if (/[A-Za-z]/.test(ch)) throw new Error('«' + text + '»: Latin letters in Urdu text');
    if (/[٠-٩]/.test(ch)) throw new Error('«' + text + '»: Arabic-Indic digit ' + ch + '; Urdu digits are ۰-۹ (U+06F0-06F9)');
    if (/[.,?]/.test(ch)) throw new Error('«' + text + '»: ASCII ' + ch + ' in Urdu text; use ۔ ، ؟');
    if (/[​-‏﻿]/.test(ch)) throw new Error('«' + text + '»: invisible character');
  }
  /* a whole card that is one number 0-100 (Western or Urdu digits) */
  if (/^[0-9۰-۹]{1,3}$/.test(src)) { const n = +src.replace(/[۰-۹]/g, d => d.charCodeAt(0) - 0x6F0); if (n <= 100) return NUMR[n]; throw new Error('«' + text + '»: only numbers 0-100 can stand alone as a card'); }
  if (/[0-9۰-۹]/.test(src)) throw new Error('«' + text + '»: digits inside Urdu text; write the number as a word');
  /* a whole card that is one letter, a letter + one short vowel, or letter + ھ */
  const sc = skel(src);
  if ([...src].length === 1 && NAME[src]) return NAME[src];
  if ([...src].length === 2 && CONS[src[0]] && ({ [ZABAR]: 'a', [ZER]: 'i', [PESH]: 'u' })[src[1]]) return CONS[src[0]] + ({ [ZABAR]: 'a', [ZER]: 'i', [PESH]: 'u' })[src[1]];
  if ([...src].length === 2 && CONS[src[0]] && src[1] === 'ھ' && !DICT.has(src)) return CONS[src[0]] + 'ha';
  /* tokens with trailing punctuation */
  const toks = [];
  src.replace(/[«»"“”()]/g, ' ').split(/\s+/).filter(Boolean).forEach(tk => {
    const m = tk.match(/^(.*?)([۔؟،؛!:]*)$/); const w = m[1], p = [...m[2]].map(c => PUNCT[c]).join('');
    if (!w) { if (toks.length) toks[toks.length - 1].p += p; return; }
    if (/[۔؟،؛!:]/.test(w)) throw new Error('«' + tk + '»: punctuation inside a word');
    toks.push({ raw: w, sk: skel(w), p, izafat: /ِ$/.test(w) && [...skel(w)].length > 1 });
  });
  /* clauses for the homograph rules */
  const clauses = []; let cur = [];
  toks.forEach(t => { t.clause = cur; t.j = cur.length; cur.push(t); if (t.p) { clauses.push(cur); cur = []; } });
  const out = [];
  for (let i = 0; i < toks.length;) {
    const t = toks[i];
    let r, n = 1;
    const lk = lookup(toks, i);
    const d = lk && lk[1] > 1 ? null : decide(t, t.clause, t.j);
    if (lk && lk[1] > 1) { [r, n] = lk; }           /* a multi-word entry beats the homograph rules (اس لیے, میں نے is handled by decide) */
    else if (d !== null) r = d;
    else if (lk) r = lk[0];
    else throw new Error('«' + t.raw + '» is not in the Urdu word list (report it; the lead adds it to tools/target/ur/respell.js or lexicon.txt)');
    const last = toks[i + n - 1];
    let s = r + last.p;
    if (last.izafat && !last.p && i + n < toks.length) s = r + '-e-';
    if (out.length && /-e-$/.test(out[out.length - 1])) out[out.length - 1] += s; else out.push(s);
    i += n;
  }
  return out.join(' ').replace(/\s+/g, ' ').trim();
}

/* pronPattern: the en-hi pattern (same letters), so the two courses share one checker */
function pattern() {
  const L = "[abcdefghijklmnopqrstuvyzāīūṭḍṇṛṅñġḵŏãĩũẽõ\\u0303]";
  const W = L + '+(?:-' + L + '+)*[.,?!:;]?';
  return '^(?!.*(?:aa|ii|uu|ee|c(?!c?h)|[^āīū]\\u0303|^\\u0303))' + W + '(?: ' + W + ')*$';
}
function warnings() { const w = warned; warned = []; return w; }
module.exports = { respell, pattern, warnings, normalise, lookup: w => DICT.get(normalise(w)), DICT, CONFLICT, NAME };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--conflicts') { console.log([...CONFLICT].join('\n')); process.exit(0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); warnings().forEach(m => process.stderr.write('warning: «' + m.split(':')[0] + '»' + m.slice(m.indexOf(':')) + '\n')); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } });
  process.exit(bad ? 1 : 0);
}

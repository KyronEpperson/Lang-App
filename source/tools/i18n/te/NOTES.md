# Telugu (te) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates (275 positions), all filled.
- `roadmap.json`: the 39 strings of the **English** roadmap are filled (1 variant, 1 basis, 4 stages, 33 lesson titles). The other 1,783 are empty and fall back to English.
- The pack was generated to a scratch path only; `packs/` was not touched.

Build: `python3 tools/i18n/gen.py te <out> && node tools/i18n/validate.js te <out>`. It ends with PASS and one warning class (39 labels longer than 1.6 x the English, §5). `road.py check` cannot run on this machine (argument list too long).

The only course this interface serves is **te-en**. Legacy keys that say Korean, Hangul or romanization are written for English (ఇంగ్లీష్, ఉచ్చారణ); no Hangul is kept; 🇰🇷 became 🇺🇸.

Author: not a native speaker. Everything needs a Telugu speaker's check (§6). Authority: `docs/profiles/te.md` §2, §3, §10.

## 1. Register and spelling

- మీరు with -ండి imperatives everywhere, also on buttons (ఎంచుకోండి, రాయండి, సరిచూడండి). Narrow buttons use a noun (తర్వాత, వెనక్కి, రద్దు, మళ్ళీ). No నువ్వు, no «దయచేసి».
- Results are plain statements (సేవ్ అయింది, కాపీ అయింది); the app's own actions use "we" (చేర్చాం, పంపాం, తొలగించలేకపోయాం).
- Western digits only, NFC, ASCII punctuation, no em dash (an English dash became a colon, a comma or two sentences).
- ళ్ళ (మళ్ళీ, వెళ్ళండి), నుంచి, ఇంగ్లీష్, ఈమెయిల్, ఈరోజు.
- ZWNJ (U+200C) between a loan ending in a pollu and a Telugu ending: డెక్‌లు, రివిజన్‌కు, ఇంగ్లీష్‌లో, సెట్టింగ్‌లు. **Deviation from the profile's "one place only":** it is also used inside five compound loans where the letters would otherwise fuse, as Google's Telugu pages do: పాస్‌వర్డ్, వెబ్‌సైట్, ఇన్‌బాక్స్, డౌన్‌లోడ్, ల్యాప్‌టాప్. No ZWNJ in tab labels. Export / Import are ఎగుమతి / దిగుమతి, and "flashcard" is two words (ఫ్లాష్ కార్డు), partly to avoid more of these.

## 2. Counts and slots

- Every count pattern is label + colon + number, nothing after the slot: «కార్డులు: {1}», «రోజులు: {1}», «రివిజన్: {1}», «మిగిలినవి: {1}», «నిమిషాలు: {1}», «సెకన్లు: {1}». English singular and plural templates carry identical Telugu. All were rendered at 0, 1, 2 and 21.
- Positions are noun + number: «లెవెల్ {1}», «బాక్స్ {1}», «కార్డు {1}/{2}», «వారం {1}/{2}», «రౌండ్ {1}/{2}», «విడత {1}/3», «రోజు {1} 🔥».
- "{n} XP to Level {n}" is «కావాల్సిన XP: {1} → లెవెల్ {2}»; "+{n} d: {n}" is «రోజు +{1}: {2}».
- The fixed chips "2 min / 5 min / 10 min" are «2 నిమిషాలు» etc. (correct plural), while the pattern "{n} min" is «నిమిషాలు: {1}». If both show in one row the lead may want the chips changed to the colon form.
- Language-name slots stand before or after a colon with no ending: «ప్రగతి: {1}», «{1}: మీకు ఎంత వచ్చు?», «{1}: ఎందుకు నేర్చుకుంటున్నారు?», «ఈ భాషలో రాయండి: {1}», «జవాబు భాష: {1}. …», «{1}: కీబోర్డ్ లేదా? టైల్స్ వాడండి», «{1}: రోజుకు 5 నిమిషాల్లో నేర్చుకోండి», «ఇప్పుడు నేర్చుకుంటున్న భాష: {1} · …».

## 3. Glossary used (one term per concept)

Tabs: ఈరోజు, సాధన, రివిజన్, పాఠాలు, చదవడం, ప్రగతి, స్పందన; Drills డ్రిల్స్ (8 code points, 2 graphemes: the widest, measure it).

lesson పాఠం · practice సాధన · review రివిజన్ · due "రివిజన్ చేయాల్సిన(వి)", chip «చేయాల్సినవి», counter «రివిజన్: n» · deck డెక్ · card కార్డు · streak వరుస రోజులు (in the typing drill "streak" = «వరుసగా సరైనవి») · session సెషన్ · quiz క్విజ్ · exam పరీక్ష · quick check చిన్న టెస్ట్ · Test everything మొత్తం టెస్ట్ · pass (a run through the cards) విడత · round రౌండ్ · Mix మిక్స్ · Mixed (mode) అన్నీ కలిపి · recall గుర్తు · learned నేర్చుకున్నవి · mastered / mastery పట్టు సాధించినవి / పట్టు · box బాక్స్ · level లెవెల్ · Got it తెలుసు · Again మళ్ళీ · Check సరిచూడండి · Skip దాటవేయండి · hint సూచన · Why కారణం · answer జవాబు · Correct! సరైనది! · Not quite పూర్తిగా సరికాదు · weak spots బలహీనతలు · hardest అతి కష్టమైనవి · missed తప్పినవి · blitz స్పీడ్ క్విజ్ · leech మొండి కార్డు · suspend నిలిపివేయండి · bury రేపటికి వాయిదా · restore తిరిగి చేర్చండి · Browse జాబితా · My phrases నా వాక్యాలు · phrase వాక్యం · pronunciation (hint) ఉచ్చారణ (సూచన) · Polite ↔ casual మర్యాదగా ↔ మామూలుగా · grammar వ్యాకరణం · pattern నిర్మాణం · unlock తెరవండి, locked లాక్ అయినవి · account ఖాతా · device పరికరం · nickname ముద్దుపేరు · streak shield రక్షణ కవచం · certificate సర్టిఫికెట్ · badge బ్యాడ్జ్ · planned రాబోయేవి · reply (board) రిప్లై · voice ఆడ గొంతు / మగ గొంతు.

- `Type` = «రాయండి» (the verb; chip «⌨️ రాయండి EN»). Typing an answer is always రాయండి (profile: «ఇంగ్లీష్‌లో రాయండి»); "టైప్ చేయండి" is kept for the search box, the sign-in code and DELETE.
- `Category` = «వర్గం», `Text size` = «అక్షరాల సైజు».
- Mode chips: «చదవండి en→తెలుగు», «గుర్తు తెలుగు→en», «వినండి 🔊→తెలుగు».
- Weekdays: ఆది సోమ మంగళ బుధ గురు శుక్ర శని (2 to 3 graphemes).
- Level titles: మొలక, విద్యార్థి, సీనియర్, ప్రో, నేర్పరి, గురువు; ఆరంభం, మాటకారి, బాటసారి, లోకల్ (chosen to carry no gender ending).
- Tense names stay in English (Simple Present, Present Perfect); grammar terms as profile §3.

## 4. Fragments that were re-cut

- "…no longer linked to you. Type" + **DELETE** + "to confirm.": the first part ends at «…సంబంధం ఉండదు.» and the last is «అని టైప్ చేసి నిర్ధారించండి.», so it reads "DELETE అని టైప్ చేసి నిర్ధారించండి."
- "👆 Tap" + "the card to flip" = «👆 నొక్కండి:» + «కార్డు తిరుగుతుంది». "🔊 Listen" + "plays the pronunciation" = «🔊 వినండి» + «నొక్కితే ఉచ్చారణ వినిపిస్తుంది».
- ": anything you post is" + "public" + "to all users. …" = «: మీరు పోస్ట్ చేసేది ఏదైనా» + «పబ్లిక్» + «(యూజర్లందరికీ కనిపిస్తుంది). …».
- Korean-only conjugator and register keys follow zh / de / hi: English examples (go, eat), V1, and generic wording.

## 5. Length

The validator lists 39 labels longer than 1.6 x the English. Telugu -ండి verbs are long; the profile forbids clipped verbs. Worth a look in the 390px layout first: «చదవండి en→తెలుగు», «గుర్తు తెలుగు→en», «నేర్చుకోవడం మొదలుపెట్టండి», «↶ వెనక్కి తీసుకోండి», «ఆటోమేటిక్‌గా తిప్పండి», «పాస్ కావడానికి 80%», «⏰ చేయాల్సినవన్నీ».

## 6. For the native check, in this order

1. «చేయాల్సినవి» / «రివిజన్: n» for "due", and «రివిజన్ కార్డులు: n» for "n cards due".
2. «తెలుసు» / «మళ్ళీ» on the flashcard buttons; «సందేహం» for "Not sure".
3. «పట్టు సాధించినవి» (mastered), «మొండి కార్డు» (leech), «విడత» (pass), «మిక్స్», «బలహీనతలు».
4. «5 చొప్పున నేర్చుకోండి» (Learn 5 at a time), «మొత్తం టెస్ట్».
5. Level titles (§3), above all «నేర్పరి», «ఆరంభం», «బాటసారి».
6. «మర్యాదగా ↔ మామూలుగా», «శైలి» (register).
7. «ముద్దుపేరు» for nickname; «అజ్ఞాత» for Anonymous; «రక్షణ కవచం».
8. Greetings: «శుభోదయం», «శుభ మధ్యాహ్నం», «శుభ సాయంత్రం», «నమస్కారం, {name}!».
9. «ఓ మోస్తరుగా వచ్చు» (I get by), «కొంచెం వచ్చు», «ఇప్పుడే మొదలు».
10. «సిలబుల్‌లు», «ఒత్తి పలికే సిలబుల్» in the reading-drill help.
11. Roadmap: «కథ చెప్పే టెన్స్‌లు», «పరిధి పెంచుకోవడం», «ఉచ్చారణలో చిక్కులు», «going to: అనుకున్న పనులు».

## 7. For the lead

- The roadmap basis string is translated as written ("adjusted for Korean speakers" = «కొరియన్ మాట్లాడేవారి కోసం సర్దుబాటు చేసినది»), as the other languages did. It is wrong for a Telugu learner; the English source would have to change.
- "No match. Try the English meaning." is «ఏదీ దొరకలేదు. అర్థంతో వెతికి చూడండి.» (no language named, since the meaning side is Telugu here).
- The profile asks for `html[lang=te] nav a{overflow:visible;line-height:1.5}`; that is engine work.

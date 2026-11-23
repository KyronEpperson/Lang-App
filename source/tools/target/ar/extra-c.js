/* extras for decks-c.js (writer CORE-AR). DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. All Arabic fully vowelled and checked with respell.js. */
exports.DIALOG = `
سَلِمَت يَدَاكِ | سَلِمَت يَدَاكِ، الطَّعَام لَذِيذ جِدًّا. | بِالْهَنَاء وَالشِّفَاء! | Bless your hands, the food is delicious. / Enjoy it, to your health!
بِالْهَنَاء وَالشِّفَاء | هٰذَا الْحُمُّص رَائِع! | بِالْهَنَاء وَالشِّفَاء. | This hummus is wonderful! / Enjoy it, to your health.
سُفْرَة دَائِمَة | سُفْرَة دَائِمَة يَا خَالَة. | شُكْرًا يَا اِبْنِي، أَهْلًا وَسَهْلًا. | May your table always be full, auntie. / Thank you, son, you're always welcome.
عَرَبِيَّتُكَ مُمْتَازَة | عَرَبِيَّتُكَ مُمْتَازَة! | شُكْرًا، مَا زِلْتُ أَتَعَلَّم. | Your Arabic is excellent! / Thanks, I'm still learning.
أَيْنَ تَعَلَّمْتَ الْعَرَبِيَّة؟ | أَيْنَ تَعَلَّمْتَ الْعَرَبِيَّة؟ | فِي الْجَامِعَة، فِي أَمْرِيكَا. | Where did you learn Arabic? / At university, in America.
أَحْسَنْتَ | تَكَلَّمْتُ بِالْعَرَبِيَّة فِي الْمَطْعَم! | أَحْسَنْتَ! | I spoke Arabic at the restaurant! / Well done!
اللّٰه يُعْطِيكَ الْعَافِيَة | اللّٰه يُعْطِيكَ الْعَافِيَة يَا أَحْمَد. | اللّٰه يُعَافِيكِ. | God give you strength, Ahmad. / And you too.
اللّٰه يُعَافِيكَ | اللّٰه يُعْطِيكِ الْعَافِيَة يَا أُمِّي. | اللّٰه يُعَافِيكَ يَا اِبْنِي. | God give you strength, Mom. / And you too, son.
مَا شَاءَ اللّٰه عَلَيْهِ | هٰذَا اِبْنِي يُوسُف. | مَا شَاءَ اللّٰه عَلَيْهِ! اللّٰه يَحْفَظُهُ. | This is my son Yusuf. / God bless him! May God keep him safe.
بَيْتُكُم جَمِيل جِدًّا | بَيْتُكُم جَمِيل جِدًّا. | شُكْرًا، أَهْلًا وَسَهْلًا. | You have a lovely home. / Thank you, you're welcome here.
دَمُكَ خَفِيف | دَمُكَ خَفِيف يَا عُمَر! | شُكْرًا، أَنْتِ أَيْضًا. | You're so funny, Omar! / Thanks, so are you.
أَنْتَ تُجَامِلُنِي | أَنْتَ أَفْضَل مُهَنْدِس فِي الشَّرِكَة. | أَنْتَ تُجَامِلُنِي! | You're the best engineer in the company. / You're just being nice!
نَعِيمًا | نَعِيمًا! | أَنْعَمَ اللّٰه عَلَيْكَ. | Looking fresh! / Thanks (God bless you too).
أَنْتَ طَيِّب جِدًّا | سَاعَدْتُكَ لِأَنَّكَ صَدِيقِي. | أَنْتَ طَيِّب جِدًّا، شُكْرًا. | I helped you because you're my friend. / You're so kind, thank you.
`;

exports.EXAMPLES = `
هٰذَا لَذِيذ جِدًّا | هٰذَا لَذِيذ جِدًّا! مَا اِسْمُهُ؟ | This is really delicious! What's it called?
فِكْرَة رَائِعَة! | فِكْرَة رَائِعَة! نَذْهَب غَدًا. | Great idea! Let's go tomorrow.
صُورَة جَمِيلَة! | صُورَة جَمِيلَة! أَيْنَ هٰذَا؟ | Nice photo! Where's this?
اللَّوْن يَلِيق بِكِ | اللَّوْن يَلِيق بِكِ كَثِيرًا. | That color really suits you.
مُمْتَاز! | مُمْتَاز! هٰذَا صَحِيح. | Excellent! That's right.
عَمَل رَائِع | عَمَل رَائِع يَا سَارَة! | Great work, Sara!
`;

exports.PATTERNS = `
___ رَائِع | What a great ___! (masculine noun) | عَمَل رَائِع | Great work!
سَلِمَت يَدَاكِ، ___ لَذِيذ جِدًّا | Bless your hands, the ___ is delicious. (to a woman) | سَلِمَت يَدَاكِ، الطَّعَام لَذِيذ جِدًّا | Bless your hands, the food is delicious.
`;

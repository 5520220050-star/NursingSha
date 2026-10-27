NS.reg("micro", "flagellates", "trypanosoma", {
intro: {
  en: "***Trypanosoma*** are hemoflagellates that live in the **blood and tissues**. Two diseases are important: **African trypanosomiasis (sleeping sickness)** caused by ***T. brucei gambiense*** and ***T. b. rhodesiense***, transmitted by the **tsetse fly**, and **American trypanosomiasis (Chagas disease)** caused by ***T. cruzi***, transmitted in the **feces of triatomine (\"kissing\") bugs**. Neither occurs naturally in Iraq, but both are part of the syllabus and appear in exams.",
  ar: "***المثقبيات*** سوطيات دموية تعيش في **الدم والأنسجة**. مرضان مهمان: **داء المثقبيات الأفريقي (مرض النوم)** بسبب ***المثقبية البروسية الغامبية والروديسية*** وتنقله **ذبابة تسي تسي**، و**داء المثقبيات الأمريكي (داء شاغاس)** بسبب ***المثقبية الكروزية*** وينتقل **ببراز البق الترياتوميني («المقبّل»)**. لا يوجدان طبيعياً في العراق لكنهما في المنهج."
},
sections: [
{ h: { en: "Morphological forms of hemoflagellates", ar: "الأشكال الشكلية للسوطيات الدموية" }, b: [
  { t: "table", h: ["Form", "Description", "Where found"], r: [
    ["**Amastigote**", "Round, no free flagellum, nucleus + kinetoplast", "**T. cruzi inside heart muscle, nerve and other cells**; Leishmania in macrophages"],
    ["**Promastigote**", "Kinetoplast anterior, free flagellum, no undulating membrane", "Leishmania in sandfly/culture"],
    ["**Epimastigote**", "Kinetoplast **in front of the nucleus**, short undulating membrane", "**Vector gut** (tsetse salivary glands, bug midgut), culture"],
    ["**Trypomastigote**", "**Elongated, kinetoplast posterior to the nucleus**, **long undulating membrane along the whole body**, free anterior flagellum", "**Human blood** (diagnostic); **metacyclic trypomastigote = infective stage** in tsetse saliva or bug feces"]],
    ar: { h: ["الشكل", "الوصف", "المكان"], r: [
    ["**اللاسوطي**", "مدور بلا سوط حر", "**الكروزية داخل عضلة القلب والأعصاب**؛ الليشمانيا في البلاعم"],
    ["**أمامي السوط**", "حبيبة حركية أمامية وسوط حر", "الليشمانيا في الذبابة"],
    ["**فوق السوطي**", "الحبيبة **أمام النواة** وغشاء متموج قصير", "**أمعاء الناقل**"],
    ["**المثقبي (التريبوماستيغوت)**", "**متطاول، الحبيبة خلف النواة**، **غشاء متموج طويل**", "**دم الإنسان** (تشخيصي)؛ **المثقبي الحلقي = الطور المعدي**"]] } }
]},
{ h: { en: "African trypanosomiasis (sleeping sickness)", ar: "داء المثقبيات الأفريقي (مرض النوم)" }, b: [
  { t: "cycle", center: "T. brucei|cycle", steps: [
    { en: "**Tsetse fly (Glossina)** bites and injects **metacyclic trypomastigotes**", ar: "**ذبابة تسي تسي** تلدغ وتحقن **المثقبيات الحلقية**" },
    { en: "Local **chancre** at bite; trypomastigotes multiply by binary fission **extracellularly** in blood, lymph", ar: "**قرح** في موضع اللدغة؛ تتكاثر **خارج الخلايا** في الدم واللمف" },
    { en: "Invade **CNS** (late stage)", ar: "تغزو **الجهاز العصبي** (المرحلة المتأخرة)" },
    { en: "Tsetse ingests trypomastigotes → midgut → **epimastigotes in salivary glands** → metacyclic forms (~3 weeks)", ar: "الذبابة تبتلعها ← **فوق السوطية في الغدد اللعابية** ← الأشكال الحلقية" } ] },
  { t: "table", h: ["Feature", "T. b. gambiense (West/Central Africa)", "T. b. rhodesiense (East Africa)"], r: [
    ["Reservoir", "Mainly **man**", "**Wild game and cattle** (zoonosis)"],
    ["Course", "**Chronic** (months–years)", "**Acute**, rapidly fatal (weeks–months)"],
    ["**Stage 1 (hemolymphatic)**", "Fever, headache, **enlarged posterior cervical nodes (Winterbottom's sign)**, rash, itching", "Severe fever, myocarditis"],
    ["**Stage 2 (meningoencephalitic)**", "**Daytime sleepiness and night insomnia (sleep cycle reversal)**, personality change, tremors, ataxia → coma, death", "Earlier CNS involvement"]],
    ar: { h: ["الميزة", "الغامبية", "الروديسية"], r: [
    ["المستودع", "**الإنسان**", "**الحيوانات البرية والماشية**"], ["المسار", "**مزمن**", "**حاد** سريع القتل"],
    ["**المرحلة 1 (الدموية اللمفية)**", "حمى وصداع و**تضخم العقد الرقبية الخلفية (علامة وينتربوتوم)**", "حمى شديدة"],
    ["**المرحلة 2 (الدماغية)**", "**نعاس نهاري وأرق ليلي**، تغير الشخصية، رجفان ← غيبوبة", "إصابة عصبية أبكر"]] } },
  { t: "list", en: [
    "**Diagnosis**: trypomastigotes in **thick/thin blood films**, **chancre or lymph node aspirate**; **CSF** (stage 2 — parasites, ↑ cells, ↑ protein, **IgM**); serology (**CATT** for *gambiense*)",
    "**Treatment**: stage 1 — **pentamidine** (*gambiense*), **suramin** (*rhodesiense*); stage 2 — **fexinidazole** (oral), **NECT (nifurtimox–eflornithine)**, **melarsoprol** (arsenical — toxic encephalopathy); **lumbar puncture** needed to stage disease",
    "**Prevention**: avoid tsetse areas; **neutral-colored clothing** (tsetse attracted to dark blue/black), repellents (limited), traps and screens, insecticide; screening and treating cases"],
    ar: [
    "**التشخيص**: المثقبيات في **مسحات الدم** و**رشافة القرح أو العقد**؛ **السائل الدماغي** في المرحلة 2؛ المصليات",
    "**العلاج**: المرحلة 1 — **البنتاميدين** و**السورامين**؛ المرحلة 2 — **الفيكسينيدازول** و**النيفورتيموكس-إفلورنيثين** و**الميلارسوبرول**؛ **البزل القطني** لتحديد المرحلة",
    "**الوقاية**: تجنب مناطق الذبابة، **ملابس محايدة اللون**، المصائد والمبيدات"] }
]},
{ h: { en: "American trypanosomiasis (Chagas disease)", ar: "داء المثقبيات الأمريكي (داء شاغاس)" }, b: [
  { t: "flow", steps: [
    { en: "**Triatomine (reduviid, \"kissing\") bug** bites at night (often on the **face**) and **defecates** on the skin", ar: "**البق الترياتوميني («المقبّل»)** يلدغ ليلاً (غالباً **الوجه**) و**يتبرز** على الجلد" },
    { en: "**Metacyclic trypomastigotes in bug feces** are rubbed into the bite wound or **conjunctiva** when scratching", ar: "**المثقبيات في براز البق** تُفرك في الجرح أو **الملتحمة**" },
    { en: "Enter cells → **amastigotes multiply intracellularly** (heart muscle, GI smooth muscle, nerves) → cells burst → trypomastigotes in blood (**do not multiply in blood**)", ar: "تدخل الخلايا ← **اللاسوطيات تتكاثر داخل الخلايا** (عضلة القلب والأمعاء والأعصاب) ← مثقبيات في الدم" },
    { en: "Bug ingests trypomastigotes → epimastigotes in midgut → metacyclic forms in hindgut/feces", ar: "البق يبتلعها ← فوق السوطية ← الحلقية في البراز" } ] },
  { t: "list", en: [
    "**Other routes**: **blood transfusion, organ transplant, congenital**, contaminated food/drink (oral outbreaks), lab accidents",
    "**Acute phase**: often mild — fever, **chagoma** (swelling at bite site), **Romaña's sign (painless unilateral periorbital edema — bite near the eye)**, lymphadenopathy, hepatosplenomegaly; acute myocarditis/meningoencephalitis in young children",
    "**Chronic phase (10–30 years later, ~30%)**: **cardiomyopathy** (dilated heart, **heart failure, arrhythmias, heart block, sudden death**, thromboembolism), **megaesophagus** (dysphagia, regurgitation) and **megacolon** (severe constipation) — destruction of autonomic ganglia",
    "**Diagnosis**: acute — trypomastigotes in **blood films**, buffy coat; chronic — **serology** (two different tests), PCR, **xenodiagnosis** (laboratory-reared bugs feed on patient), ECG, echo, barium studies",
    "**Treatment**: **benznidazole** or **nifurtimox** (most effective in acute/early and congenital infection); manage cardiac and GI complications (pacemaker, heart failure therapy, surgery)",
    "**Prevention**: **improve housing** (plaster walls, replace thatched roofs — bugs hide in cracks), **insecticide spraying**, bed nets, **screen blood and organ donors**, screen pregnant women and newborns of infected mothers"],
    ar: [
    "**طرق أخرى**: **نقل الدم وزراعة الأعضاء والخلقي** والطعام الملوث",
    "**الطور الحاد**: غالباً خفيف — حمى، **ورم شاغاس** في موضع اللدغة، **علامة رومانيا (وذمة غير مؤلمة حول عين واحدة)**، تضخم العقد",
    "**الطور المزمن (بعد 10–30 سنة)**: **اعتلال عضلة القلب** (**فشل القلب واضطراب النظم والموت المفاجئ**)، **تضخم المريء** و**تضخم القولون** — تدمير العقد العصبية الذاتية",
    "**التشخيص**: الحاد — **مسحات الدم**؛ المزمن — **المصليات** وPCR و**التشخيص بالناقل**؛ التخطيط والصدى",
    "**العلاج**: **البنزنيدازول** أو **النيفورتيموكس** (أفضل في المبكر)؛ علاج المضاعفات",
    "**الوقاية**: **تحسين المساكن** (لياسة الجدران)، **رش المبيدات**، الناموسيات، **فحص المتبرعين بالدم والأعضاء**، فحص الحوامل"] },
  { t: "table", h: ["Feature", "African (T. brucei)", "American (T. cruzi)"], r: [
    ["Vector", "**Tsetse fly** (bite — saliva)", "**Triatomine bug** (feces)"],
    ["Stage in man", "**Extracellular trypomastigotes** (multiply in blood)", "**Intracellular amastigotes** (multiply in tissues); trypomastigotes in blood don't divide"],
    ["Main organs", "Blood, lymph nodes, **CNS**", "**Heart, esophagus, colon**"],
    ["Key signs", "**Winterbottom's sign, sleeping sickness**", "**Romaña's sign, cardiomyopathy, megaorgans**"]],
    ar: { h: ["الميزة", "الأفريقي", "الأمريكي"], r: [
    ["الناقل", "**تسي تسي** (اللعاب)", "**البق** (البراز)"], ["الطور في الإنسان", "**مثقبيات خارج الخلايا**", "**لاسوطيات داخل الخلايا**"],
    ["الأعضاء", "الدم والعقد و**الجهاز العصبي**", "**القلب والمريء والقولون**"], ["العلامات", "**وينتربوتوم ومرض النوم**", "**رومانيا واعتلال القلب**"]] } }
]}
],
questions: [
{ q: "African sleeping sickness is transmitted by the:", o: ["Tsetse fly", "Sandfly", "Triatomine bug", "Anopheles mosquito"], a: 0, r: "Glossina species inject metacyclic trypomastigotes." },
{ q: "Chagas disease is caused by:", o: ["Trypanosoma cruzi", "Trypanosoma brucei gambiense", "Leishmania donovani", "Plasmodium vivax"], a: 0, r: "T. cruzi causes American trypanosomiasis." },
{ q: "T. cruzi is transmitted mainly through:", o: ["Feces of triatomine bugs rubbed into the bite wound or eye", "Saliva of tsetse flies", "Mosquito bites", "Drinking water only"], a: 0, r: "The infective forms are in bug feces." },
{ q: "The form of Trypanosoma found in human blood is the:", o: ["Trypomastigote", "Amastigote", "Promastigote", "Cyst"], a: 0, r: "Trypomastigotes circulate in blood." },
{ q: "In the trypomastigote, the kinetoplast lies:", o: ["Posterior to the nucleus with a long undulating membrane", "Anterior to the nucleus without membrane", "It has no kinetoplast", "Inside the nucleus"], a: 0, r: "This arrangement defines the trypomastigote." },
{ q: "T. cruzi multiplies in human tissues as:", o: ["Intracellular amastigotes", "Extracellular trypomastigotes", "Promastigotes", "Eggs"], a: 0, r: "T. cruzi trypomastigotes in blood do not divide." },
{ q: "Enlarged posterior cervical lymph nodes in African trypanosomiasis are called:", o: ["Winterbottom's sign", "Romaña's sign", "Koplik spots", "Kernig's sign"], a: 0, r: "Classic early sign of T. b. gambiense." },
{ q: "Painless unilateral periorbital swelling after a bug bite near the eye is:", o: ["Romaña's sign", "Winterbottom's sign", "Battle's sign", "Chvostek's sign"], a: 0, r: "It marks the portal of entry of T. cruzi via conjunctiva." },
{ q: "Which manifestations occur in the late (CNS) stage of sleeping sickness? (Select all that apply.)", o: ["Daytime somnolence", "Night insomnia", "Personality change", "Coma", "Megacolon"], a: [0, 1, 2, 3], s: true, r: "Megacolon is a feature of Chagas disease." },
{ q: "Which complications are typical of chronic Chagas disease? (Select all that apply.)", o: ["Dilated cardiomyopathy", "Megaesophagus", "Megacolon", "Heart block and sudden death", "Cutaneous ulcers on the face"], a: [0, 1, 2, 3], s: true, r: "Chronic Chagas damages heart and GI autonomic ganglia." },
{ q: "Which form of T. brucei is more acute and rapidly fatal?", o: ["T. b. rhodesiense", "T. b. gambiense", "Both equal", "Neither causes disease"], a: 0, r: "Rhodesiense disease progresses in weeks to months." },
{ q: "The main reservoir of T. b. rhodesiense is:", o: ["Wild game and cattle", "Man only", "Dogs only", "Fish"], a: 0, r: "East African sleeping sickness is a zoonosis." },
{ q: "Why is lumbar puncture important in African trypanosomiasis?", o: ["To determine CNS involvement (stage 2), which changes treatment", "To treat the infection", "To find eggs", "To measure blood sugar"], a: 0, r: "Staging guides drug choice." },
{ q: "Melarsoprol, used in late-stage sleeping sickness, can cause:", o: ["Reactive (toxic) encephalopathy", "Cataract", "Kidney stones", "Hypertension only"], a: 0, r: "This arsenical is highly toxic." },
{ q: "The drugs used for Chagas disease are:", o: ["Benznidazole and nifurtimox", "Chloroquine and primaquine", "Albendazole", "Praziquantel"], a: 0, r: "They are most effective early." },
{ q: "Besides bug feces, T. cruzi can be transmitted by: (Select all that apply.)", o: ["Blood transfusion", "Organ transplantation", "Congenital transmission", "Contaminated food", "Tsetse saliva"], a: [0, 1, 2, 3], s: true, r: "Tsetse flies transmit African trypanosomes." },
{ q: "Xenodiagnosis for Chagas disease involves:", o: ["Allowing laboratory-reared bugs to feed on the patient and examining them later", "Culturing stool", "Skin testing", "Urine microscopy"], a: 0, r: "It detects low parasitemia in chronic disease." },
{ q: "Which is the best way to prevent Chagas disease in endemic rural areas?", o: ["Improving housing and spraying insecticide", "Boiling water", "Wearing shoes", "Cooking pork"], a: 0, r: "Bugs live in cracks of poor-quality houses." },
{ q: "Which clothing reduces tsetse fly bites?", o: ["Neutral-colored clothing", "Dark blue or black clothing", "Red clothing", "No clothing"], a: 0, r: "Tsetse flies are attracted to dark blue and black." },
{ q: "In the tsetse fly, the trypanosome develops into infective forms in the:", o: ["Salivary glands", "Feces", "Eggs", "Wings"], a: 0, r: "Metacyclic forms are injected with saliva." },
{ q: "Blood donors in Chagas-endemic regions should be:", o: ["Screened serologically", "Accepted without testing", "Given antibiotics", "Vaccinated"], a: 0, r: "Transfusion is an important route." },
{ q: "The diagnostic stage of African trypanosomiasis in a thick blood film is the:", o: ["Trypomastigote", "Amastigote", "Cyst", "Sporozoite"], a: 0, r: "Trypomastigotes circulate in blood and lymph." },
{ q: "Megacolon in Chagas disease results from:", o: ["Destruction of autonomic ganglia in the colon wall", "Bacterial infection", "Tumor", "Hypothyroidism"], a: 0, r: "Loss of myenteric neurons causes dilation." },
{ q: "The chancre in African trypanosomiasis appears at the:", o: ["Site of the tsetse bite", "Genitals", "Mouth", "Liver"], a: 0, r: "It is a local inflammatory nodule at inoculation." },
{ q: "Which stage of Trypanosoma is found in the vector's gut and in culture?", o: ["Epimastigote", "Amastigote", "Cyst", "Gametocyte"], a: 0, r: "The kinetoplast is anterior to the nucleus." },
{ q: "A patient with chronic Chagas disease and dysphagia likely has:", o: ["Megaesophagus", "Peptic ulcer", "Tonsillitis", "Achalasia unrelated"], a: 0, r: "Esophageal ganglion destruction mimics achalasia." },
{ q: "Which cardiac complications should the nurse watch for in chronic Chagas disease? (Select all that apply.)", o: ["Heart failure", "Arrhythmias", "Thromboembolism", "Heart block", "Aortic stenosis from calcification"], a: [0, 1, 2, 3], s: true, r: "Chagas cardiomyopathy causes these complications." },
{ q: "Which statement about African vs American trypanosomiasis is correct?", o: ["African trypanosomes multiply extracellularly in blood; T. cruzi multiplies intracellularly as amastigotes", "Both are transmitted by sandflies", "Both cause Romaña's sign", "Neither infects the CNS"], a: 0, r: "This is the key biological difference." },
{ q: "Sleeping sickness in stage 1 mainly involves:", o: ["Blood and lymphatic system", "Only the brain", "Only the heart", "Only the skin"], a: 0, r: "The hemolymphatic stage precedes CNS invasion." },
{ q: "Trypanosoma species belong to which group?", o: ["Hemoflagellates (kinetoplastids)", "Ciliates", "Amoebae", "Apicomplexa"], a: 0, r: "They have a flagellum and kinetoplast." }
]
});

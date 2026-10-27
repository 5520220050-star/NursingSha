NS.reg("micro", "apicomplexa", "toxoplasma", {
intro: {
  en: "***Toxoplasma gondii*** is an **obligate intracellular** apicomplexan that can infect almost all warm-blooded animals. The **cat (and other felines) is the definitive host**; **man and other mammals and birds are intermediate hosts**. Up to a third of the world's population is infected, usually **without symptoms**, but toxoplasmosis is dangerous in two groups: the **fetus (congenital toxoplasmosis)** when the mother is infected for the first time in pregnancy, and **immunocompromised patients (AIDS, transplant)**, in whom it causes **encephalitis**.",
  ar: "***المقوسة الغوندية*** أولي من البوغيات القمية **إجباري داخل الخلايا** يصيب تقريباً كل الحيوانات ذوات الدم الحار. **القطة المضيف النهائي**؛ **الإنسان والثدييات والطيور مضائف وسيطة**. نحو ثلث سكان العالم مصابون غالباً **بلا أعراض**، لكنه خطير في فئتين: **الجنين (داء المقوسات الخلقي)** عند إصابة الأم لأول مرة في الحمل، و**ضعيفو المناعة (الإيدز وزراعة الأعضاء)** حيث يسبب **التهاب الدماغ**."
},
sections: [
{ h: { en: "Stages and life cycle", ar: "الأطوار ودورة الحياة" }, b: [
  { t: "table", h: ["Stage", "Description", "Significance"], r: [
    ["**Tachyzoite (trophozoite)**", "**Crescent (banana)-shaped**, 4–8 µm, **rapidly multiplying** (endodyogeny) inside any nucleated cell", "**Acute infection**; crosses placenta; seen in tissues/fluids"],
    ["**Bradyzoite (tissue cyst)**", "Slowly multiplying forms inside a **tissue cyst** (up to 100 µm) in **brain, eye, skeletal and heart muscle**", "**Chronic latent infection**; **infective when meat is eaten undercooked**; reactivate in immunosuppression"],
    ["**Oocyst**", "Formed **only in the cat intestine** (sexual cycle), passed in **cat feces**, **sporulates in soil in 1–5 days** → contains sporozoites", "**Infective** from soil, sandboxes, unwashed vegetables, water"]],
    ar: { h: ["الطور", "الوصف", "الأهمية"], r: [
    ["**سريع التكاثر (تاكيزويت)**", "**هلالي (موزي)** يتكاثر **بسرعة** داخل أي خلية ذات نواة", "**العدوى الحادة**؛ يعبر المشيمة"],
    ["**بطيء التكاثر (الكيس النسيجي)**", "داخل **كيس نسيجي** في **الدماغ والعين والعضلات والقلب**", "**عدوى كامنة مزمنة**؛ **معدٍ عند أكل اللحم غير المطبوخ**؛ ينشط مع ضعف المناعة"],
    ["**الكيسة البيضية**", "تتكون **فقط في أمعاء القطة**، تخرج **ببرازها**، **تنضج في التربة خلال 1–5 أيام**", "**معدية** من التربة والخضار والماء"]] } },
  { t: "cycle", center: "Toxoplasma|cycle", steps: [
    { en: "**Cat** eats infected prey (mice, birds) or raw meat with tissue cysts → **sexual cycle in cat intestinal epithelium** → **oocysts in feces** (millions for 1–3 weeks)", ar: "**القطة** تأكل فريسة مصابة ← **دورة جنسية في أمعائها** ← **كيسات بيضية في البراز**" },
    { en: "Oocysts **sporulate in the environment** (become infective after 1–5 days)", ar: "تنضج الكيسات **في البيئة**" },
    { en: "**Intermediate hosts (man, sheep, pigs, cattle, rodents)** ingest oocysts → **tachyzoites** spread through blood to all tissues", ar: "**المضائف الوسيطة** تبتلع الكيسات ← **تاكيزويتات** تنتشر بالدم" },
    { en: "Immune response → **tissue cysts (bradyzoites)** in brain and muscle — persist for life", ar: "الاستجابة المناعية ← **أكياس نسيجية** مدى الحياة" },
    { en: "Cat or human eats meat with tissue cysts → cycle continues", ar: "أكل اللحم المصاب ← تستمر الدورة" } ] },
  { t: "table", h: ["Route of human infection", "Details"], r: [
    ["**Eating undercooked meat** with tissue cysts", "**Lamb, pork, beef, game** — major route in many countries"],
    ["**Ingesting sporulated oocysts**", "From **cat feces** — cleaning **litter boxes**, gardening, **unwashed vegetables/fruit**, contaminated water"],
    ["**Transplacental (congenital)**", "**Primary maternal infection during pregnancy** → tachyzoites cross placenta"],
    ["**Organ transplant / blood transfusion**", "Rare; reactivation in recipient"]],
    ar: { h: ["طريق العدوى", "التفاصيل"], r: [
    ["**أكل اللحم غير المطبوخ**", "**لحم الضأن والخنزير والبقر**"], ["**ابتلاع الكيسات البيضية**", "من **براز القطط** — تنظيف **صندوق الفضلات** والحدائق و**الخضار غير المغسولة**"],
    ["**عبر المشيمة**", "**عدوى أولية للأم أثناء الحمل**"], ["**زراعة الأعضاء ونقل الدم**", "نادر"]] } }
]},
{ h: { en: "Clinical toxoplasmosis", ar: "داء المقوسات السريري" }, b: [
  { t: "table", h: ["Group", "Features"], r: [
    ["**Immunocompetent (acquired)**", "**80–90% asymptomatic**; others — **painless cervical lymphadenopathy**, mild fever, fatigue, myalgia (mononucleosis-like); self-limited; occasionally **chorioretinitis**"],
    ["**Congenital**", "Only if the mother acquires **primary infection during pregnancy** (rarely reactivation in immunosuppressed mothers). **Risk of transmission ↑ with gestational age** (≈ 15% 1st trimester → 60–70% 3rd), but **severity is greatest in early pregnancy**. Outcomes: **miscarriage, stillbirth**; **classic triad — hydrocephalus, intracranial calcifications, chorioretinitis**; microcephaly, seizures, intellectual disability, hepatosplenomegaly, jaundice; many newborns look normal but develop **chorioretinitis/blindness later**"],
    ["**Immunocompromised (AIDS — CD4 < 100, transplant, chemotherapy)**", "Usually **reactivation of latent cysts** → **toxoplasmic encephalitis**: headache, confusion, fever, **focal neurological deficits, seizures**; CT/MRI — **multiple ring-enhancing brain lesions**; also pneumonitis, chorioretinitis; **fatal without treatment**"],
    ["**Ocular toxoplasmosis**", "Chorioretinitis — blurred vision, floaters, pain; leading cause of posterior uveitis"]],
    ar: { h: ["الفئة", "السمات"], r: [
    ["**سليمو المناعة**", "**80–90% بلا أعراض**؛ آخرون — **تضخم عقد رقبية غير مؤلم** وحمى خفيفة وتعب؛ يشفى ذاتياً"],
    ["**الخلقي**", "فقط عند **عدوى أولية للأم أثناء الحمل**. **خطر الانتقال يزداد مع عمر الحمل** لكن **الشدة أكبر في الحمل المبكر**. **الإجهاض وموت الجنين**؛ **الثالوث الكلاسيكي — استسقاء الرأس وتكلسات الدماغ والتهاب المشيمية والشبكية**؛ صغر الرأس والتشنجات والإعاقة الذهنية؛ كثير من الولدان يبدون طبيعيين ثم **يفقدون البصر لاحقاً**"],
    ["**ضعيفو المناعة**", "**تنشيط الأكياس الكامنة** ← **التهاب الدماغ بالمقوسات**: صداع وتشوش وحمى و**عجز عصبي بؤري وتشنجات**؛ الرنين — **آفات حلقية متعددة**؛ **قاتل بلا علاج**"],
    ["**العيني**", "التهاب المشيمية والشبكية"]] } }
]},
{ h: { en: "Diagnosis, treatment and prevention", ar: "التشخيص والعلاج والوقاية" }, b: [
  { t: "table", h: ["Test", "Interpretation"], r: [
    ["**IgM antibodies**", "**Recent/acute infection** (may persist months — confirm)"],
    ["**IgG antibodies**", "**Past infection/immunity**; **IgG positive before pregnancy = protected fetus** (no primary infection)"],
    ["**IgG avidity test**", "**High avidity = infection > 3–5 months ago** (helps date infection in pregnancy)"],
    ["**Seroconversion**", "IgG negative → positive during pregnancy = **primary infection**"],
    ["**PCR of amniotic fluid** (after 18 weeks)", "**Diagnoses fetal infection**"],
    ["**Newborn**", "**IgM/IgA** (do not cross placenta), PCR, eye exam, cranial ultrasound/CT"],
    ["**AIDS patients**", "**MRI/CT** ring-enhancing lesions + positive IgG; response to empirical therapy; brain biopsy if needed"],
    ["**Sabin–Feldman dye test**", "Classic reference antibody test"]],
    ar: { h: ["الفحص", "التفسير"], r: [
    ["**IgM**", "**عدوى حديثة**"], ["**IgG**", "**عدوى سابقة**؛ **إيجابي قبل الحمل = الجنين محمي**"],
    ["**شدة الارتباط (Avidity)**", "**عالية = عدوى قبل 3–5 أشهر**"], ["**التحول المصلي**", "سلبي ← إيجابي أثناء الحمل = **عدوى أولية**"],
    ["**PCR للسائل الأمنيوسي**", "**يشخص إصابة الجنين**"], ["**الوليد**", "**IgM/IgA** وPCR وفحص العين"],
    ["**مرضى الإيدز**", "**الرنين** مع IgG إيجابي"], ["**اختبار صبغة سابين-فيلدمان**", "المرجعي الكلاسيكي"]] } },
  { t: "list", en: [
    "**Treatment**: **pyrimethamine + sulfadiazine + folinic acid (leucovorin)** — for congenital, ocular and encephalitis (monitor **bone marrow suppression — CBC**, fluids to prevent sulfa crystalluria); **spiramycin** for **maternal infection before fetal infection** (reduces transmission, doesn't cross placenta well); **TMP–SMX** (also **prophylaxis in AIDS when CD4 < 100** with positive IgG); clindamycin for sulfa allergy; asymptomatic healthy adults usually need no treatment",
    "**Prevention (especially pregnant women and immunocompromised)**: **cook meat thoroughly** (≥ 67°C / no pink), freeze meat; **wash hands after handling raw meat, soil, gardening**; **wash fruits and vegetables**; **avoid cleaning cat litter** — if unavoidable, **use gloves and change daily** (oocysts need 1–5 days to become infective); keep cats indoors and feed them commercial food (not raw meat); cover sandboxes; avoid unpasteurized goat milk; **antenatal serological screening** where recommended"],
    ar: [
    "**العلاج**: **البيريميثامين + السلفاديازين + حمض الفولينيك** — للخلقي والعيني والدماغي (مراقبة **تثبيط النقي** والسوائل)؛ **السبيرامايسين** **لعدوى الأم قبل إصابة الجنين**؛ **التريميثوبريم-سلفاميثوكسازول** (**وقاية في الإيدز عند CD4 < 100**)؛ الكليندامايسين عند حساسية السلفا؛ البالغ السليم بلا أعراض غالباً لا يُعالج",
    "**الوقاية (خاصة الحوامل وضعيفي المناعة)**: **طبخ اللحم جيداً**؛ **غسل اليدين بعد اللحم النيء والتربة**؛ **غسل الخضار والفواكه**؛ **تجنب تنظيف صندوق فضلات القطط** — وإن لزم **بقفازات وتغييره يومياً**؛ إبقاء القطط بالداخل وإطعامها طعاماً جاهزاً؛ تغطية صناديق الرمل؛ تجنب الحليب غير المبستر؛ **الفحص المصلي في الحمل**"] }
]}
],
questions: [
{ q: "The definitive host of Toxoplasma gondii is the:", o: ["Cat", "Dog", "Human", "Mosquito"], a: 0, r: "Sexual reproduction occurs only in feline intestine." },
{ q: "Humans are which type of host for Toxoplasma?", o: ["Intermediate host", "Definitive host", "Vector", "Paratenic only"], a: 0, r: "Only asexual stages develop in humans." },
{ q: "The rapidly multiplying stage of Toxoplasma during acute infection is the:", o: ["Tachyzoite", "Bradyzoite", "Oocyst", "Sporozoite only"], a: 0, r: "Tachyzoites spread through tissues and cross the placenta." },
{ q: "Tissue cysts containing bradyzoites are found mainly in: (Select all that apply.)", o: ["Brain", "Skeletal muscle", "Heart muscle", "Eye", "Red blood cells"], a: [0, 1, 2, 3], s: true, r: "Toxoplasma does not live in RBCs." },
{ q: "Oocysts of Toxoplasma are passed in the feces of:", o: ["Cats", "Dogs", "Humans", "Cattle"], a: 0, r: "Only felines shed oocysts." },
{ q: "How long do Toxoplasma oocysts need to sporulate and become infective in the environment?", o: ["1–5 days", "1 hour", "1 year", "They are immediately infective"], a: 0, r: "Daily litter changes reduce risk." },
{ q: "Which are routes of human Toxoplasma infection? (Select all that apply.)", o: ["Eating undercooked meat", "Ingesting oocysts from cat feces", "Transplacental", "Mosquito bite"], a: [0, 1, 2], s: true, r: "Toxoplasma is not vector-borne." },
{ q: "Most toxoplasma infections in healthy adults are:", o: ["Asymptomatic", "Fatal", "Causing encephalitis", "Causing blindness always"], a: 0, r: "About 80–90% of infections in immunocompetent people cause no symptoms." },
{ q: "The most common symptom of acquired toxoplasmosis in healthy adults is:", o: ["Painless cervical lymphadenopathy", "Severe diarrhea", "Jaundice", "Hematuria"], a: 0, r: "A mononucleosis-like illness may occur." },
{ q: "Congenital toxoplasmosis usually results from:", o: ["Primary maternal infection during pregnancy", "Maternal infection years before pregnancy", "Paternal infection", "Breastfeeding"], a: 0, r: "Prior immunity protects the fetus." },
{ q: "The classic triad of congenital toxoplasmosis is:", o: ["Hydrocephalus, intracranial calcifications, chorioretinitis", "Cataract, deafness, heart disease", "Rash, fever, arthritis", "Jaundice, anemia, diarrhea"], a: 0, r: "Cataract–deafness–heart disease is congenital rubella." },
{ q: "The risk of fetal transmission of Toxoplasma is highest when maternal infection occurs in the:", o: ["Third trimester", "First trimester", "Before conception years earlier", "After delivery"], a: 0, r: "Transmission increases with gestation, though severity is greater early." },
{ q: "Fetal damage from Toxoplasma is most severe when infection occurs in:", o: ["Early pregnancy", "Late pregnancy", "After birth", "Before conception"], a: 0, r: "Early infection affects organogenesis." },
{ q: "In patients with AIDS, toxoplasmosis most commonly presents as:", o: ["Encephalitis with ring-enhancing brain lesions", "Diarrhea", "Hepatitis", "Skin ulcers"], a: 0, r: "Reactivation of brain cysts causes encephalitis." },
{ q: "Toxoplasma prophylaxis in AIDS (TMP–SMX) is recommended when the CD4 count is below:", o: ["100 cells/µL", "500 cells/µL", "1000 cells/µL", "Never"], a: 0, r: "Risk rises with profound immunosuppression." },
{ q: "A pregnant woman's Toxoplasma IgG was positive before pregnancy. This means:", o: ["She has past infection and her fetus is generally protected", "She has acute infection", "Her fetus is infected", "She must terminate the pregnancy"], a: 0, r: "Congenital infection follows primary infection." },
{ q: "A positive IgM with low IgG avidity in pregnancy suggests:", o: ["Recent infection", "Infection years ago", "No infection", "Vaccination"], a: 0, r: "Low avidity indicates infection within months." },
{ q: "Fetal infection is diagnosed by:", o: ["PCR of amniotic fluid", "Maternal IgG alone", "Stool examination", "Urine culture"], a: 0, r: "Amniocentesis after 18 weeks detects parasite DNA." },
{ q: "Which drug is used to reduce transmission when maternal infection occurs before the fetus is infected?", o: ["Spiramycin", "Chloroquine", "Albendazole", "Metronidazole"], a: 0, r: "Spiramycin concentrates in the placenta." },
{ q: "Folinic acid (leucovorin) is given with pyrimethamine to:", o: ["Prevent bone marrow suppression", "Kill parasites", "Prevent seizures", "Treat allergy"], a: 0, r: "Pyrimethamine is a folate antagonist." },
{ q: "Which teaching is appropriate for a pregnant woman to prevent toxoplasmosis? (Select all that apply.)", o: ["Cook meat thoroughly", "Avoid cleaning the cat litter box", "Wash fruits and vegetables", "Wear gloves when gardening", "Eat rare steak"], a: [0, 1, 2, 3], s: true, r: "Undercooked meat contains tissue cysts." },
{ q: "If a pregnant woman must clean the litter box, she should:", o: ["Use gloves and change it daily", "Change it weekly", "Clean it with bare hands", "Let it accumulate"], a: 0, r: "Oocysts need 1–5 days to become infective." },
{ q: "Which antibody in the newborn indicates congenital infection because it does not cross the placenta?", o: ["IgM", "IgG", "IgE", "IgD"], a: 0, r: "Maternal IgG crosses the placenta." },
{ q: "Toxoplasma is described as an obligate intracellular parasite because it:", o: ["Must live inside host cells", "Lives freely in water", "Lives on skin", "Lives only in the gut lumen"], a: 0, r: "It multiplies within nucleated cells." },
{ q: "The shape of the Toxoplasma tachyzoite is:", o: ["Crescent (banana)-shaped", "Pear-shaped with flagella", "Ring-shaped", "Spherical with cilia"], a: 0, r: "Tachyzoites are crescent-shaped; the name Toxoplasma comes from toxon, meaning bow or arc." },
{ q: "Which children may appear normal at birth but develop problems later from congenital toxoplasmosis?", o: ["Those who develop chorioretinitis and visual loss", "All infected children die at birth", "None", "Only those with cataract"], a: 0, r: "Ocular disease may appear years later." },
{ q: "Which patients are at greatest risk of severe toxoplasmosis? (Select all that apply.)", o: ["Patients with AIDS", "Organ transplant recipients", "Fetuses of women with primary infection", "Healthy adults with past infection"], a: [0, 1, 2], s: true, r: "Immunocompetent previously infected adults are protected." },
{ q: "Keeping pet cats indoors and feeding them commercial food reduces toxoplasmosis because:", o: ["Cats are less likely to become infected and shed oocysts", "It makes cats immune forever", "Commercial food contains drugs", "Indoor cats never defecate"], a: 0, r: "Cats acquire infection from prey or raw meat." },
{ q: "Which side effect of sulfadiazine requires good fluid intake?", o: ["Crystalluria", "Hypertension", "Constipation", "Hair loss"], a: 0, r: "Sulfonamides can crystallize in urine." },
{ q: "The sexual cycle of Toxoplasma takes place in the:", o: ["Intestinal epithelium of cats", "Human brain", "Mosquito gut", "Sheep muscle"], a: 0, r: "The sexual cycle occurs only in cat intestinal epithelium and produces oocysts." }
]
});

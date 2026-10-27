NS.reg("micro", "apicomplexa", "plasmodium", {
intro: {
  en: "**Malaria** is caused by protozoa of the genus ***Plasmodium*** and transmitted by the bite of the **female *Anopheles* mosquito**. Five species infect humans: ***P. falciparum*** (most dangerous — **cerebral malaria**), ***P. vivax*** and ***P. ovale*** (relapses from **hypnozoites** in the liver), ***P. malariae*** (chronic, nephrotic syndrome) and ***P. knowlesi*** (monkey malaria in Southeast Asia). The parasite has a complex life cycle: **asexual multiplication in man** (liver then red blood cells) and **sexual reproduction in the mosquito**.",
  ar: "**الملاريا** يسببها أوالي جنس ***البلازموديوم*** وتنتقل بلدغة **أنثى بعوضة الأنوفيلس**. خمسة أنواع تصيب الإنسان: ***المنجلية*** (الأخطر — **الملاريا الدماغية**)، ***النشيطة*** و***البيضوية*** (انتكاسات من **الأطوار الهاجعة** في الكبد)، ***الوبالية*** (مزمنة، متلازمة كلائية) و***النوليسية***. دورة الحياة معقدة: **تكاثر لاجنسي في الإنسان** (الكبد ثم كريات الدم الحمراء) و**تكاثر جنسي في البعوضة**."
},
sections: [
{ h: { en: "Life cycle", ar: "دورة الحياة" }, b: [
  { t: "cycle", center: "Plasmodium|life cycle", steps: [
    { en: "**Female *Anopheles* bites** and injects **sporozoites** (infective stage) from its salivary glands", ar: "**أنثى الأنوفيلس تلدغ** وتحقن **البوغيات** (الطور المعدي)" },
    { en: "**Exo-erythrocytic (liver) schizogony**: sporozoites enter **hepatocytes** within 30–60 min → **tissue schizonts** → thousands of **merozoites** (no symptoms); *P. vivax/ovale* form dormant **hypnozoites**", ar: "**التفلّق خارج الكريات (الكبدي)**: البوغيات تدخل **خلايا الكبد** ← **متقسمات** ← آلاف **الأقسومات**؛ النشيطة والبيضوية تكوّن **الهاجعات**" },
    { en: "**Erythrocytic schizogony**: merozoites invade **RBCs** → **ring (young trophozoite)** → mature trophozoite → **schizont** → RBC ruptures releasing merozoites → **fever paroxysm**; cycle repeats every **48 h** (*falciparum, vivax, ovale*) or **72 h** (*malariae*)", ar: "**التفلّق داخل الكريات**: الأقسومات تغزو **الكريات الحمراء** ← **الحلقة** ← المتغذي ← **المتقسّم** ← انفجار الكرية ← **نوبة الحمى**؛ كل **48 ساعة** أو **72 ساعة** (الوبالية)" },
    { en: "Some merozoites become **male and female gametocytes** (**gametogony**) — infective to mosquitoes (**not to man**)", ar: "بعض الأقسومات تصبح **خلايا مشيجية** ذكرية وأنثوية — معدية للبعوضة" },
    { en: "**Sexual cycle (sporogony) in mosquito**: gametes fuse → **zygote → ookinete → oocyst** on stomach wall → **sporozoites** migrate to salivary glands (10–14 days)", ar: "**الدورة الجنسية في البعوضة**: اندماج الأمشاج ← **لاقحة ← بيضة متحركة ← كيسة بيضية** ← **بوغيات** تهاجر للغدد اللعابية" } ] },
  { t: "list", en: [
    "**Definitive host: female *Anopheles* mosquito** (sexual reproduction); **intermediate host: man** (asexual)",
    "**Other routes**: **blood transfusion** and needles (**no liver stage — no relapse**), congenital, organ transplant",
    "**Relapse** (*vivax, ovale*): reactivation of **hypnozoites** weeks–years later → need **primaquine/tafenoquine**; **recrudescence** (*falciparum, malariae*): persisting low-level blood parasites multiply again"],
    ar: [
    "**المضيف النهائي: أنثى الأنوفيلس**؛ **المضيف الوسيط: الإنسان**",
    "**طرق أخرى**: **نقل الدم** والإبر (**بلا طور كبدي — بلا انتكاس**)، الخلقي، زراعة الأعضاء",
    "**الانتكاس** (النشيطة والبيضوية): تنشيط **الهاجعات** ← يلزم **البريماكوين**؛ **العودة** (المنجلية والوبالية): تكاثر طفيليات باقية في الدم"] }
]},
{ h: { en: "Species comparison and clinical features", ar: "مقارنة الأنواع والمظاهر السريرية" }, b: [
  { t: "table", h: ["Feature", "P. falciparum", "P. vivax", "P. ovale", "P. malariae"], r: [
    ["Fever periodicity", "**Malignant tertian** (irregular, 36–48 h)", "**Benign tertian** (48 h)", "Tertian (48 h)", "**Quartan (72 h)**"],
    ["RBCs infected", "**All ages** → **very high parasitemia**", "**Young RBCs (reticulocytes)**", "Young RBCs", "**Old RBCs**"],
    ["Infected RBC", "Normal size; **Maurer's clefts**", "**Enlarged, pale; Schüffner's dots**", "Enlarged, **oval, fimbriated**; Schüffner's dots", "Normal/small; Ziemann's dots"],
    ["Peripheral blood stages", "**Only rings and crescent (banana)-shaped gametocytes**; often **multiple rings per RBC, appliqué (accolé) forms**", "All stages; amoeboid trophozoite; 12–24 merozoites", "All stages", "**Band-form trophozoite**, **rosette schizont**"],
    ["Hypnozoites / relapse", "**No**", "**Yes**", "**Yes**", "No (recrudescence for decades)"],
    ["Severity", "**Severe/complicated — cerebral malaria, death**", "Usually uncomplicated; can be severe", "Mild", "Mild; **nephrotic syndrome** in children"]],
    ar: { h: ["الميزة", "المنجلية", "النشيطة", "البيضوية", "الوبالية"], r: [
    ["دورية الحمى", "**الثلثية الخبيثة** (غير منتظمة)", "**الثلثية الحميدة** (48)", "ثلثية", "**الربعية (72)**"],
    ["الكريات المصابة", "**كل الأعمار** ← **طفيليات عالية جداً**", "**الكريات الفتية**", "الفتية", "**الكريات المسنة**"],
    ["الكرية المصابة", "حجم طبيعي؛ **شقوق مورر**", "**متضخمة شاحبة؛ نقط شوفنر**", "متضخمة **بيضوية**", "طبيعية؛ نقط زيمان"],
    ["الأطوار في الدم", "**حلقات وخلايا مشيجية هلالية (موزية) فقط**؛ **حلقات متعددة في الكرية**", "كل الأطوار", "كل الأطوار", "**الشكل الشريطي** و**المتقسم الوردي**"],
    ["الهاجعات", "**لا**", "**نعم**", "**نعم**", "لا"],
    ["الشدة", "**شديدة — الملاريا الدماغية**", "غالباً غير معقدة", "خفيفة", "خفيفة؛ **متلازمة كلائية**"]] } },
  { t: "flow", steps: [
    { en: "**Cold stage (15–60 min)**: intense **chills and rigors**, shivering, cold skin, rising temperature", ar: "**الطور البارد**: **قشعريرة ورعدة** شديدة" },
    { en: "**Hot stage (2–6 h)**: **high fever 40–41°C**, headache, flushed dry skin, nausea, vomiting, delirium", ar: "**الطور الحار**: **حمى عالية 40–41**، صداع، جلد محمر جاف، تقيؤ" },
    { en: "**Sweating stage (2–4 h)**: **profuse sweating**, temperature falls, patient exhausted and sleeps — well until the next paroxysm", ar: "**طور التعرق**: **تعرق غزير** وانخفاض الحرارة والإنهاك" } ] },
  { t: "list", en: [
    "Other features: **anemia** (hemolysis + marrow suppression), **splenomegaly**, hepatomegaly, **jaundice**, thrombocytopenia; fever pattern may be irregular early, especially in *falciparum*",
    "**Severe falciparum malaria** — infected RBCs develop **knobs → stick to capillary endothelium (cytoadherence/sequestration)** → microvascular obstruction: **cerebral malaria** (impaired consciousness, convulsions, coma), **severe anemia**, **hypoglycemia** (also from quinine), **acute kidney injury**, **blackwater fever** (massive intravascular hemolysis → dark urine), **pulmonary edema/ARDS**, metabolic acidosis, shock (\"algid malaria\"), DIC; **pregnant women** — maternal anemia, abortion, low birth weight, placental malaria"],
    ar: [
    "مظاهر أخرى: **فقر الدم**، **تضخم الطحال**، تضخم الكبد، **اليرقان**، نقص الصفائح",
    "**الملاريا المنجلية الشديدة** — تكوّن الكريات المصابة **نتوءات ← تلتصق بجدران الشعيرات** ← انسداد: **الملاريا الدماغية** (اضطراب الوعي والتشنج والغيبوبة)، **فقر دم شديد**، **نقص السكر**، **الفشل الكلوي**، **حمى الماء الأسود** (انحلال دم هائل ← بول داكن)، **الوذمة الرئوية**، الحماض، الصدمة؛ **الحوامل** — إجهاض ونقص وزن الوليد"] }
]},
{ h: { en: "Diagnosis, treatment and prevention", ar: "التشخيص والعلاج والوقاية" }, b: [
  { t: "table", h: ["Test", "Details"], r: [
    ["**Thick blood film** (Giemsa)", "**Screening — detects parasites** (more blood, more sensitive)"],
    ["**Thin blood film** (Giemsa)", "**Species identification** and **parasite density (% parasitemia)**"],
    ["**Timing**", "Take blood **during or just before the fever peak** ideally, but **don't delay — take immediately**; **repeat every 12–24 h for 3 sets** if negative"],
    ["**Rapid diagnostic tests (RDT)**", "Antigen detection (**HRP-2** for *falciparum*, pLDH) — quick, field use"],
    ["**PCR**", "Sensitive; species confirmation"],
    ["**Other**", "CBC (anemia, thrombocytopenia), glucose, renal and liver function, urine"]],
    ar: { h: ["الفحص", "التفاصيل"], r: [
    ["**المسحة السميكة**", "**للكشف** (أكثر حساسية)"], ["**المسحة الرقيقة**", "**تحديد النوع** و**نسبة الطفيليات**"],
    ["**التوقيت**", "أثناء الحمى أو قبلها لكن **دون تأخير**؛ **تكرار كل 12–24 ساعة لثلاث مرات**"],
    ["**الاختبارات السريعة**", "كشف المستضد (HRP-2)"], ["**PCR**", "حساس"], ["**أخرى**", "صورة الدم والسكر والكلى والكبد"]] } },
  { t: "table", h: ["Situation", "Treatment (follow national protocol)"], r: [
    ["**Uncomplicated falciparum**", "**Artemisinin-based combination therapy (ACT)** — e.g., artemether–lumefantrine (take with fatty food), artesunate–amodiaquine, dihydroartemisinin–piperaquine"],
    ["**Severe/complicated malaria**", "**IV (or IM) artesunate** — first-line; IV quinine if unavailable (**hypoglycemia, cinchonism — tinnitus**, cardiac monitoring); then full oral ACT course; ICU care"],
    ["***P. vivax / ovale***", "**Chloroquine** (where sensitive) or ACT **+ primaquine (or tafenoquine) for 14 days to kill hypnozoites** — **check G6PD first** (hemolysis); **primaquine contraindicated in pregnancy** and G6PD deficiency"],
    ["**Chemoprophylaxis for travelers**", "Atovaquone–proguanil, doxycycline (photosensitivity), mefloquine (neuropsychiatric effects); start before, continue after travel"]],
    ar: { h: ["الحالة", "العلاج"], r: [
    ["**المنجلية غير المعقدة**", "**العلاج المركب بالأرتيميسينين (ACT)** — الأرتيميثر-لوميفانترين مع طعام دسم"],
    ["**الشديدة**", "**الأرتيسونات وريدياً** — الأول؛ الكينين الوريدي بديلاً (**نقص السكر وطنين الأذن**)"],
    ["**النشيطة / البيضوية**", "**الكلوروكوين** أو ACT **+ البريماكوين 14 يوماً للهاجعات** — **افحص G6PD أولاً**؛ **ممنوع في الحمل**"],
    ["**الوقاية للمسافرين**", "أتوفاكون-بروغوانيل، الدوكسيسيكلين، الميفلوكين"]] } },
  { t: "list", en: [
    "**Nursing care**: monitor **temperature, vital signs, LOC (GCS), urine output and color**, **blood glucose (especially children, pregnant women, quinine)**; tepid sponging and antipyretics (paracetamol); **fluids** (avoid overload — pulmonary edema); seizure precautions; transfusion for severe anemia; record fever pattern; **complete the full course**",
    "**Prevention**: **insecticide-treated bed nets (ITNs)**, **indoor residual spraying**, repellents (DEET), long sleeves at **dusk–dawn** (*Anopheles* bites at night), window screens, **eliminate breeding sites** (stagnant water), larvicides/larvivorous fish; **early diagnosis and treatment**; chemoprophylaxis for travelers; intermittent preventive treatment in pregnancy; **RTS,S and R21 malaria vaccines** for children in endemic Africa; screening blood donors"],
    ar: [
    "**الرعاية**: مراقبة **الحرارة والعلامات والوعي والإخراج البولي ولونه** و**سكر الدم**؛ الكمادات الفاترة والباراسيتامول؛ **السوائل** (تجنب الإفراط)؛ احتياطات التشنج؛ نقل الدم؛ **إكمال العلاج**",
    "**الوقاية**: **الناموسيات المعالجة**، **الرش الداخلي**، الطاردات، ملابس طويلة **من الغسق للفجر**، الشبابيك، **إزالة المياه الراكدة**، **التشخيص والعلاج المبكر**، الوقاية الدوائية للمسافرين، **لقاحات الملاريا للأطفال**، فحص المتبرعين"] }
]}
],
questions: [
{ q: "Malaria is transmitted by the bite of the:", o: ["Female Anopheles mosquito", "Male Anopheles mosquito", "Female Aedes mosquito", "Sandfly"], a: 0, r: "Only female Anopheles take blood meals and transmit Plasmodium." },
{ q: "The infective stage of Plasmodium for humans is the:", o: ["Sporozoite", "Merozoite", "Gametocyte", "Ookinete"], a: 0, r: "Sporozoites are injected from mosquito salivary glands." },
{ q: "The stage of Plasmodium infective to the mosquito is the:", o: ["Gametocyte", "Sporozoite", "Hypnozoite", "Schizont"], a: 0, r: "Gametocytes undergo sexual development in the mosquito." },
{ q: "In malaria, the definitive host is the:", o: ["Mosquito", "Human", "Monkey", "Dog"], a: 0, r: "Sexual reproduction occurs in the mosquito." },
{ q: "Sporozoites first invade the:", o: ["Liver cells", "Red blood cells", "Spleen", "Brain"], a: 0, r: "Exo-erythrocytic schizogony occurs in hepatocytes." },
{ q: "Relapses of malaria are caused by:", o: ["Hypnozoites of P. vivax and P. ovale", "Gametocytes of P. falciparum", "Mosquito re-bite only", "Antibiotics"], a: 0, r: "Dormant liver forms reactivate." },
{ q: "Malaria acquired by blood transfusion does not relapse because:", o: ["There is no liver stage", "Gametocytes are absent", "Sporozoites are too many", "It is always P. falciparum"], a: 0, r: "Transfused merozoites cannot enter the liver." },
{ q: "The fever paroxysm of malaria coincides with:", o: ["Rupture of RBC schizonts releasing merozoites", "Sporozoite injection", "Liver schizogony", "Gametocyte formation"], a: 0, r: "Pyrogens are released when RBCs burst." },
{ q: "Quartan malaria (fever every 72 hours) is caused by:", o: ["Plasmodium malariae", "Plasmodium vivax", "Plasmodium falciparum", "Plasmodium ovale"], a: 0, r: "P. malariae has a 72-hour erythrocytic cycle." },
{ q: "Which species causes cerebral malaria?", o: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium malariae", "Plasmodium ovale"], a: 0, r: "Sequestration in brain capillaries causes cerebral malaria." },
{ q: "In a peripheral blood film of P. falciparum, usually only which stages are seen? (Select all that apply.)", o: ["Ring forms", "Crescent (banana)-shaped gametocytes", "Mature schizonts", "Amoeboid trophozoites"], a: [0, 1], s: true, r: "Mature stages are sequestered in deep capillaries." },
{ q: "Enlarged pale RBCs with Schüffner's dots suggest:", o: ["Plasmodium vivax", "Plasmodium falciparum", "Plasmodium malariae", "Babesia"], a: 0, r: "P. vivax infects young enlarged RBCs." },
{ q: "Band-form trophozoites and rosette schizonts are characteristic of:", o: ["Plasmodium malariae", "Plasmodium vivax", "Plasmodium falciparum", "Plasmodium ovale"], a: 0, r: "These are classic P. malariae features." },
{ q: "The correct order of the malaria paroxysm is:", o: ["Cold stage → hot stage → sweating stage", "Hot → cold → sweating", "Sweating → cold → hot", "Cold → sweating → hot"], a: 0, r: "Chills, then fever, then sweating with defervescence." },
{ q: "Which complications occur in severe falciparum malaria? (Select all that apply.)", o: ["Cerebral malaria", "Hypoglycemia", "Acute kidney injury", "Blackwater fever", "Polycythemia"], a: [0, 1, 2, 3], s: true, r: "Malaria causes anemia, not polycythemia." },
{ q: "Blackwater fever refers to:", o: ["Massive intravascular hemolysis causing dark urine", "Black stools", "Black skin lesions", "Black vomit from ulcer"], a: 0, r: "Hemoglobinuria darkens the urine." },
{ q: "Which blood film is used to identify the Plasmodium species?", o: ["Thin film", "Thick film", "Wet mount", "Gram stain"], a: 0, r: "Thin films preserve RBC morphology." },
{ q: "Which blood film is more sensitive for detecting parasites?", o: ["Thick film", "Thin film", "Neither", "Urine film"], a: 0, r: "Thick films examine more blood." },
{ q: "If the first blood film is negative but malaria is suspected, the nurse should:", o: ["Repeat films every 12–24 hours for a total of three", "Rule out malaria", "Wait one month", "Collect stool"], a: 0, p: true, r: "Parasitemia may be low or cyclical." },
{ q: "The first-line treatment for severe malaria is:", o: ["IV artesunate", "Oral chloroquine", "Primaquine alone", "Doxycycline alone"], a: 0, r: "Artesunate reduces mortality compared with quinine." },
{ q: "Primaquine is given in P. vivax malaria to:", o: ["Kill liver hypnozoites and prevent relapse", "Treat cerebral malaria", "Prevent mosquito bites", "Treat anemia"], a: 0, r: "It provides radical cure." },
{ q: "Before giving primaquine, the nurse should ensure testing for:", o: ["G6PD deficiency", "Hepatitis B", "HIV", "Blood glucose only"], a: 0, p: true, r: "Primaquine causes hemolysis in G6PD deficiency." },
{ q: "Patients receiving IV quinine should be monitored for:", o: ["Hypoglycemia and tinnitus", "Hyperkalemia only", "Hair loss", "Constipation only"], a: 0, r: "Quinine stimulates insulin release and causes cinchonism." },
{ q: "Which measures prevent malaria? (Select all that apply.)", o: ["Insecticide-treated bed nets", "Indoor residual spraying", "Eliminating stagnant water", "Repellents at dusk and night", "Boiling drinking water"], a: [0, 1, 2, 3], s: true, r: "Malaria is mosquito-borne, not waterborne." },
{ q: "Anopheles mosquitoes mainly bite:", o: ["Between dusk and dawn", "At midday", "Only in winter", "Only indoors at noon"], a: 0, r: "Night-time protection with nets is key." },
{ q: "Which group is at higher risk of severe malaria? (Select all that apply.)", o: ["Young children in endemic areas", "Pregnant women", "Non-immune travelers", "Adults with long-term immunity"], a: [0, 1, 2], s: true, r: "Semi-immune adults usually have milder disease." },
{ q: "Why does P. falciparum produce very high parasitemia?", o: ["It invades RBCs of all ages", "It invades only reticulocytes", "It has a 72-hour cycle", "It lacks schizonts"], a: 0, r: "No age preference allows massive multiplication." },
{ q: "Which nursing assessments are essential in a child with falciparum malaria? (Select all that apply.)", o: ["Level of consciousness", "Blood glucose", "Urine output and color", "Temperature", "Visual acuity"], a: [0, 1, 2, 3], s: true, r: "These detect cerebral malaria, hypoglycemia and renal failure." },
{ q: "Artemether–lumefantrine absorption improves when taken with:", o: ["Fatty food or milk", "An empty stomach", "Antacids", "Alcohol"], a: 0, r: "Lumefantrine is fat-soluble." },
{ q: "The sexual cycle of Plasmodium in the mosquito is called:", o: ["Sporogony", "Schizogony", "Binary fission", "Conjugation"], a: 0, r: "It ends with formation of sporozoites." },
{ q: "Sticking of falciparum-infected RBCs to capillary walls is called:", o: ["Cytoadherence (sequestration)", "Phagocytosis", "Encystation", "Agglutination by antibodies only"], a: 0, r: "Knobs on infected RBCs mediate adherence." },
{ q: "Which drug is used for malaria chemoprophylaxis in travelers?", o: ["Atovaquone–proguanil", "Praziquantel", "Metronidazole", "Albendazole"], a: 0, r: "Others include doxycycline and mefloquine." }
]
});

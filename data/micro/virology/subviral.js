NS.reg("micro", "virology", "subviral", {
intro: {
  en: "**Subviral agents** are infectious agents that are **simpler than viruses**. There are three groups: **viroids** (naked circular RNA — infect plants), **satellites** (defective agents that need a **helper virus** — the human example is **hepatitis D virus**, which needs **hepatitis B**), and **prions** (**infectious proteins with no nucleic acid at all**) that cause fatal **transmissible spongiform encephalopathies** such as **Creutzfeldt–Jakob disease (CJD)**. Prions are extremely resistant to standard sterilization — a key infection-control concern for nurses.",
  ar: "**العوامل ما دون الفيروسية** عوامل معدية **أبسط من الفيروسات**. ثلاث مجموعات: **أشباه الفيروسات** (RNA دائري عارٍ — تصيب النباتات)، **التوابع** (ناقصة تحتاج **فيروساً مساعداً** — مثالها البشري **فيروس التهاب الكبد D** الذي يحتاج **التهاب الكبد B**)، و**البريونات** (**بروتينات معدية بلا أي حمض نووي**) تسبب **اعتلالات الدماغ الإسفنجية** القاتلة مثل **داء كروتزفيلد-جاكوب**. البريونات شديدة المقاومة للتعقيم المعتاد — قضية مهمة في ضبط العدوى."
},
sections: [
{ h: { en: "Viroids and satellites", ar: "أشباه الفيروسات والتوابع" }, b: [
  { t: "table", h: ["Agent", "Structure", "Examples / importance"], r: [
    ["**Viroids**", "**Small, naked, single-stranded circular RNA** (~250–400 nucleotides); **no protein coat**; **do not code for proteins**", "**Plant diseases** (potato spindle tuber); hepatitis D genome resembles viroids"],
    ["**Satellites (virusoids)**", "Nucleic acid ± protein coat that **cannot replicate alone** — **requires a helper virus** for replication/packaging", "**Hepatitis D (delta) virus (HDV)** — circular RNA coated with **HBsAg borrowed from hepatitis B virus**; adeno-associated virus (needs adenovirus)"]],
    ar: { h: ["العامل", "التركيب", "أمثلة / الأهمية"], r: [
    ["**أشباه الفيروسات**", "**RNA دائري مفرد عارٍ صغير**؛ **بلا غلاف بروتيني** و**لا يشفر بروتينات**", "**أمراض النباتات**"],
    ["**التوابع**", "حمض نووي **لا يتضاعف وحده** — **يحتاج فيروساً مساعداً**", "**فيروس التهاب الكبد D** — RNA مغلف **بمستضد HBsAg المستعار من التهاب الكبد B**"]] } },
  { t: "compare", cols: [
    { h: { en: "Co-infection (HBV + HDV together)", ar: "العدوى المتزامنة" }, en: ["Acquired **at the same time**", "Usually **acute hepatitis, often self-limited**", "Higher risk of fulminant hepatitis than HBV alone", "Most recover and clear both"], ar: ["**في نفس الوقت**", "غالباً **التهاب كبد حاد يشفى ذاتياً**", "خطر أعلى للالتهاب الصاعق", "يشفى معظمهم"] },
    { h: { en: "Superinfection (HDV in a chronic HBV carrier)", ar: "العدوى الفائقة" }, en: ["HDV acquired by someone **already chronically infected with HBV**", "**More severe** — high risk of **fulminant hepatitis**", "**Chronic HDV in > 80%** → rapid progression to **cirrhosis and liver cancer**"], ar: ["عدوى D لدى **حامل مزمن لـB**", "**أشد** — خطر **الالتهاب الصاعق**", "**مزمن في > 80%** ← **تشمع وسرطان كبد سريع**"] } ] },
  { t: "tip", en: "**Hepatitis B vaccination also prevents hepatitis D** — because HDV cannot infect without HBV. Transmission of HDV is the same as HBV (**blood, sexual, perinatal**).",
    ar: "**لقاح التهاب الكبد B يمنع التهاب الكبد D أيضاً** — لأن D لا يصيب بدون B. ينتقل D كما ينتقل B (**الدم والجنس ومن الأم للوليد**)." }
]},
{ h: { en: "Prions and prion diseases", ar: "البريونات وأمراضها" }, b: [
  { t: "flow", steps: [
    { en: "Normal **cellular prion protein (PrP^C)** — found on neurons, alpha-helical, harmless, digested by proteases", ar: "**بروتين البريون الخلوي الطبيعي** على العصبونات — غير ضار" },
    { en: "**Abnormal misfolded prion (PrP^Sc)** — **beta-sheet rich, protease-resistant**, contains **no DNA or RNA**", ar: "**بريون مشوه الطي** — **غني بصفائح بيتا ومقاوم للبروتياز**، **بلا DNA أو RNA**" },
    { en: "PrP^Sc **converts normal PrP^C into the abnormal form** — chain reaction", ar: "يحوّل **البروتين الطبيعي للشكل الشاذ** — تفاعل متسلسل" },
    { en: "Aggregates accumulate → **neuronal death, vacuoles → \"spongiform\" (sponge-like) brain**, **no inflammation, no immune response** (no fever, normal CSF cells, no antibodies)", ar: "تتراكم ← **موت العصبونات وفجوات ← دماغ «إسفنجي»**، **بلا التهاب ولا استجابة مناعية**" } ] },
  { t: "table", h: ["Disease", "Features"], r: [
    ["**Creutzfeldt–Jakob disease (CJD)** — sporadic (most common, ~85%), familial, iatrogenic", "Age 50–70; **rapidly progressive dementia**, **myoclonus (jerks)**, ataxia, visual disturbances, akinetic mutism → **death usually within 1 year**"],
    ["**Variant CJD (vCJD)**", "From eating **beef from cattle with bovine spongiform encephalopathy (\"mad cow disease\")**; younger patients; psychiatric symptoms first, painful sensory symptoms"],
    ["**Iatrogenic CJD**", "**Contaminated neurosurgical instruments**, **dura mater and corneal grafts**, **human pituitary-derived growth hormone**, depth electrodes"],
    ["**Kuru**", "Papua New Guinea — **ritual cannibalism** (eating brains of dead relatives); disappeared after the practice stopped"],
    ["**Gerstmann–Sträussler–Scheinker, fatal familial insomnia**", "Inherited prion diseases"],
    ["**Animal**", "**Scrapie** (sheep), **BSE** (cattle), chronic wasting disease (deer)"]],
    ar: { h: ["المرض", "السمات"], r: [
    ["**داء كروتزفيلد-جاكوب**", "50–70 سنة؛ **خرف سريع التطور**، **رمع عضلي**، رنح ← **الوفاة خلال سنة**"],
    ["**المتغير**", "من أكل **لحم بقر مصاب بجنون البقر**؛ أصغر سناً؛ أعراض نفسية أولاً"],
    ["**العلاجي المنشأ**", "**أدوات جراحة الأعصاب الملوثة** و**طعوم الأم الجافية والقرنية** و**هرمون النمو المستخلص من النخامية**"],
    ["**الكورو**", "بابوا غينيا — **أكل أدمغة الموتى طقسياً**"], ["**الوراثية**", "الأرق العائلي القاتل"], ["**الحيوانية**", "**الراعوش** و**جنون البقر**"]] } },
  { t: "warn", en: "**Prions resist conventional sterilization and disinfection**: routine **autoclaving (121°C × 15 min), boiling, alcohol, formalin, UV, radiation and ethylene oxide are NOT reliable**. Recommended: **single-use disposable instruments** whenever possible; for reusable instruments exposed to high-risk tissue (**brain, spinal cord, eye**) — **quarantine or destroy (incineration)**, or **prolonged autoclaving at 134°C for 18 minutes (or longer)** combined with **sodium hydroxide (1N NaOH)** or **sodium hypochlorite (20,000 ppm)**. **Standard precautions** are sufficient for routine patient care (not spread by casual contact); **CJD patients and those at risk must not donate blood, organs or tissues**.",
    ar: "**البريونات تقاوم التعقيم والتطهير التقليدي**: **التعقيم الروتيني (121°م 15 دقيقة) والغلي والكحول والفورمالين والأشعة غير موثوقة**. الموصى به: **أدوات للاستعمال الواحد**؛ وللأدوات الملامسة **للدماغ والحبل الشوكي والعين** — **الحجر أو الإتلاف بالحرق**، أو **تعقيم مطول 134°م لمدة 18 دقيقة** مع **هيدروكسيد الصوديوم أو هيبوكلوريت الصوديوم المركز**. **الاحتياطات القياسية** كافية للرعاية الروتينية؛ **لا يتبرع المرضى بالدم أو الأعضاء**." },
  { t: "list", en: [
    "**Diagnosis**: clinical features, **EEG (periodic sharp-wave complexes)**, **MRI (cortical ribboning, basal ganglia signal)**, **CSF 14-3-3 protein and RT-QuIC test** (highly specific), definitive by **brain biopsy/autopsy** (spongiform change, PrP^Sc)",
    "**Treatment**: **none — uniformly fatal**; supportive and palliative care, family support",
    "**Nursing care**: safety (falls, myoclonus), nutrition (dysphagia → aspiration risk), skin care, communication, emotional support for family, correct instrument handling and waste disposal"],
    ar: [
    "**التشخيص**: السمات السريرية، **تخطيط الدماغ**، **الرنين**، **بروتين 14-3-3 واختبار RT-QuIC في السائل الدماغي**، القاطع **بخزعة الدماغ**",
    "**العلاج**: **لا يوجد — قاتل دائماً**؛ رعاية داعمة وتلطيفية",
    "**الرعاية**: الأمان (السقوط والرمع)، التغذية (خطر الاستنشاق)، العناية بالجلد، دعم الأسرة، التعامل الصحيح مع الأدوات والنفايات"] },
  { t: "table", h: ["Feature", "Virus", "Viroid", "Prion"], r: [
    ["Nucleic acid", "DNA or RNA", "**RNA only (naked)**", "**None**"],
    ["Protein coat", "Yes", "**No**", "**Protein only**"],
    ["Immune response", "Yes", "—", "**None**"],
    ["Standard sterilization", "Effective", "—", "**Ineffective**"],
    ["Human disease", "Many", "None (plants)", "**CJD, kuru, vCJD**"]],
    ar: { h: ["الميزة", "الفيروس", "شبه الفيروس", "البريون"], r: [
    ["الحمض النووي", "DNA أو RNA", "**RNA فقط عارٍ**", "**لا يوجد**"], ["الغلاف البروتيني", "نعم", "**لا**", "**بروتين فقط**"],
    ["الاستجابة المناعية", "نعم", "—", "**لا توجد**"], ["التعقيم القياسي", "فعال", "—", "**غير فعال**"], ["المرض البشري", "كثيرة", "لا (نباتات)", "**كروتزفيلد-جاكوب**"]] } }
]}
],
questions: [
{ q: "Prions are infectious agents composed of:", o: ["Protein only, without nucleic acid", "RNA only", "DNA only", "DNA and a protein coat"], a: 0, r: "They are misfolded host proteins." },
{ q: "Viroids are:", o: ["Small naked circular RNA molecules without a protein coat", "Proteins without nucleic acid", "Large DNA viruses", "Bacteria without walls"], a: 0, r: "They mainly infect plants." },
{ q: "The human example of a satellite (defective) virus is:", o: ["Hepatitis D virus", "Hepatitis A virus", "Influenza virus", "Rotavirus"], a: 0, r: "HDV requires hepatitis B for replication." },
{ q: "Hepatitis D virus can only infect people who also have:", o: ["Hepatitis B infection", "Hepatitis A infection", "HIV", "Hepatitis C"], a: 0, r: "HDV uses HBsAg as its envelope." },
{ q: "Which measure also prevents hepatitis D?", o: ["Hepatitis B vaccination", "Hepatitis A vaccination", "Influenza vaccination", "Antibiotics"], a: 0, r: "No HBV means no HDV infection." },
{ q: "HDV superinfection in a chronic HBV carrier usually leads to:", o: ["Severe, often chronic hepatitis with rapid progression to cirrhosis", "Mild self-limited illness always", "Cure of hepatitis B", "No effect"], a: 0, r: "Superinfection is more dangerous than co-infection." },
{ q: "The most common form of Creutzfeldt–Jakob disease is:", o: ["Sporadic", "Variant", "Iatrogenic", "Kuru"], a: 0, r: "About 85% of cases are sporadic." },
{ q: "Variant CJD is linked to:", o: ["Eating beef from cattle with BSE (mad cow disease)", "Mosquito bites", "Drinking water", "Sexual contact"], a: 0, r: "BSE prions crossed to humans through food." },
{ q: "Kuru was transmitted by:", o: ["Ritual cannibalism", "Mosquitoes", "Water", "Sexual contact"], a: 0, r: "It disappeared after the practice stopped." },
{ q: "Iatrogenic CJD has been transmitted by: (Select all that apply.)", o: ["Contaminated neurosurgical instruments", "Dura mater grafts", "Corneal transplants", "Pituitary-derived growth hormone", "Handshakes"], a: [0, 1, 2, 3], s: true, r: "Casual contact does not transmit prions." },
{ q: "The classic clinical features of CJD are:", o: ["Rapidly progressive dementia with myoclonus", "Fever and rash", "Jaundice and diarrhea", "Chronic cough"], a: 0, r: "Death typically occurs within a year." },
{ q: "Why do prion diseases cause no fever or inflammatory response?", o: ["Prions are host proteins and do not trigger an immune response", "They are killed by antibodies", "They are bacteria", "They are always treated early"], a: 0, r: "The immune system does not recognize them as foreign." },
{ q: "The brain in prion disease shows:", o: ["Spongiform change (vacuoles) without inflammation", "Abscesses", "Hemorrhage only", "Tumors"], a: 0, r: "Neuronal loss leaves sponge-like holes." },
{ q: "Which sterilization methods are NOT reliable against prions? (Select all that apply.)", o: ["Routine autoclaving at 121°C for 15 min", "Alcohol", "Formalin", "Ethylene oxide", "Incineration"], a: [0, 1, 2, 3], s: true, r: "Incineration destroys prions." },
{ q: "For reusable instruments exposed to brain tissue of a suspected CJD patient, the safest approach is:", o: ["Use disposable instruments or destroy/quarantine them", "Wipe with alcohol", "Boil for 10 minutes", "Routine autoclave only"], a: 0, p: true, r: "Prions resist conventional sterilization." },
{ q: "An enhanced decontamination method for prion-contaminated instruments is:", o: ["Autoclaving at 134°C for 18 minutes with NaOH or hypochlorite", "Alcohol wipe", "UV light", "Cold water rinse"], a: 0, r: "Combined chemical and prolonged heat treatment is required." },
{ q: "Which tissues are considered high-risk for prion transmission?", o: ["Brain, spinal cord and eye", "Blood and urine", "Skin and hair", "Saliva and sweat"], a: 0, r: "These contain the highest prion levels." },
{ q: "Routine nursing care of a patient with CJD requires:", o: ["Standard precautions", "Airborne isolation", "Reverse isolation", "No precautions"], a: 0, r: "Prions are not spread by casual contact or air." },
{ q: "Patients with or at risk of CJD should not:", o: ["Donate blood, organs or tissues", "Eat vegetables", "Receive visitors", "Walk"], a: 0, r: "Tissue donation can transmit prions." },
{ q: "Which CSF test supports a diagnosis of CJD?", o: ["14-3-3 protein and RT-QuIC", "Glucose only", "Gram stain", "India ink"], a: 0, r: "RT-QuIC detects prion seeding activity." },
{ q: "The treatment of CJD is:", o: ["Supportive and palliative — no cure", "Antibiotics", "Antivirals", "Surgery"], a: 0, r: "Prion diseases are uniformly fatal." },
{ q: "Scrapie is a prion disease of:", o: ["Sheep", "Cattle", "Humans", "Birds"], a: 0, r: "Scrapie affects sheep; BSE affects cattle and CJD affects humans." },
{ q: "The abnormal prion protein is rich in:", o: ["Beta-sheets and resistant to proteases", "Alpha-helices and easily digested", "Nucleic acids", "Lipids only"], a: 0, r: "Misfolding makes it stable and aggregation-prone." },
{ q: "How do prions propagate?", o: ["By converting normal prion protein into the abnormal form", "By replicating their DNA", "By binary fission", "By budding"], a: 0, r: "This is a template-directed misfolding chain reaction." },
{ q: "Which comparison is correct?", o: ["Viroids contain RNA only; prions contain no nucleic acid", "Prions contain DNA", "Viroids have protein coats", "Prions are killed by alcohol"], a: 0, r: "This is the fundamental difference." },
{ q: "Hepatitis D is transmitted mainly by:", o: ["Blood, sexual and perinatal routes", "Fecal–oral route", "Mosquitoes", "Respiratory droplets"], a: 0, r: "Same routes as hepatitis B." },
{ q: "A nursing priority for a patient with advanced CJD and dysphagia is:", o: ["Preventing aspiration", "Giving antibiotics", "Isolation in a negative-pressure room", "Restricting family visits"], a: 0, p: true, r: "Swallowing difficulty increases aspiration risk." },
{ q: "The EEG in CJD typically shows:", o: ["Periodic sharp-wave complexes", "Normal tracing always", "Absence seizures only", "Alpha coma only"], a: 0, r: "This pattern supports the diagnosis." },
{ q: "Fatal familial insomnia is:", o: ["An inherited prion disease", "A viral infection", "A bacterial meningitis", "A psychiatric disorder only"], a: 0, r: "It results from a PRNP gene mutation." },
{ q: "Co-infection with HBV and HDV usually results in:", o: ["Acute hepatitis that often resolves", "Immediate liver cancer", "No liver involvement", "Chronic infection in all cases"], a: 0, r: "Most patients clear both viruses." }
]
});

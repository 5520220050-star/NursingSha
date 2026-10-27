NS.reg("adult", "neuro", "meningitis", {
intro: {
  en: "**Meningitis** is inflammation of the **meninges** (the membranes covering the brain and spinal cord) and the cerebrospinal fluid in the subarachnoid space. It is usually caused by infection. **Bacterial meningitis is a medical emergency** — it can kill or cause permanent disability within hours — while viral (aseptic) meningitis is usually milder and self-limiting.",
  ar: "**التهاب السحايا** هو التهاب **الأغشية** المغطية للدماغ والحبل الشوكي والسائل الدماغي في الحيز تحت العنكبوتي، وغالباً سببه عدوى. **التهاب السحايا الجرثومي حالة طبية طارئة** قد تقتل أو تسبب إعاقة دائمة خلال ساعات، بينما الفيروسي (العقيم) عادة أخف ويشفى ذاتياً."
},
sections: [
{ h: { en: "Types and causes", ar: "الأنواع والأسباب" }, b: [
  { t: "table", h: ["Type", "Causes", "Notes"], r: [
    ["**Bacterial (septic)**", "__Streptococcus pneumoniae__ (most common in adults), __Neisseria meningitidis__ (meningococcus — young adults, crowded living), __Haemophilus influenzae__ type b (now rare due to vaccine), __Listeria__ (elderly, pregnant, immunocompromised, newborns), group B strep & E. coli (newborns)", "Emergency; high mortality; meningococcal form is very contagious"],
    ["**Viral (aseptic)**", "Enteroviruses (most common), herpes simplex, mumps, varicella", "Usually self-limiting, supportive care"],
    ["**Fungal**", "Cryptococcus (AIDS)", "Immunocompromised"],
    ["**Tuberculous**", "Mycobacterium tuberculosis", "Slow onset; cranial nerve palsies; long treatment"]],
    ar: { h: ["النوع", "الأسباب", "ملاحظات"], r: [
    ["**جرثومي**", "المكورات الرئوية (الأشيع عند البالغين)، المكورات السحائية (الشباب والأماكن المزدحمة)، المستدمية النزلية ب (نادرة بسبب اللقاح)، الليستيريا (كبار السن والحوامل وضعاف المناعة)", "طارئ ووفياته عالية؛ السحائي معدٍ جداً"],
    ["**فيروسي (عقيم)**", "الفيروسات المعوية (الأشيع)، الهربس، النكاف", "يشفى ذاتياً غالباً"],
    ["**فطري**", "المستخفية (الإيدز)", "ضعاف المناعة"],
    ["**درني**", "عصيات السل", "بداية بطيئة وعلاج طويل"]] } },
  { t: "cards", items: [
    { i: "people", en: "Crowded living", d: "Dormitories, military barracks, camps, pilgrimage (Hajj)", ar: "الأماكن المزدحمة: السكن الطلابي، الثكنات، الحج" },
    { i: "ear", en: "Nearby infection", d: "Otitis media, sinusitis, mastoiditis", ar: "التهاب قريب: الأذن، الجيوب، الخشاء" },
    { i: "brain", en: "Head injury / neurosurgery", d: "Basilar fracture with CSF leak, shunts, LP", ar: "إصابة الرأس أو جراحة الأعصاب" },
    { i: "shield", en: "Weak immunity", d: "Asplenia, HIV, diabetes, alcoholism, older age", ar: "ضعف المناعة" },
    { i: "lungs", en: "Respiratory infection", d: "Pneumonia, URTI", ar: "التهابات تنفسية" },
    { i: "syringe", en: "Not vaccinated", d: "Hib, pneumococcal, meningococcal", ar: "عدم التلقيح" } ] }
]},
{ h: { en: "Pathophysiology", ar: "الفيزيولوجيا المرضية" }, b: [
  { t: "flow", steps: [
    { en: "Organisms colonize the nasopharynx → enter the bloodstream (or spread directly from ear/sinus/trauma)", ar: "تستعمر البكتيريا البلعوم الأنفي ← تدخل الدم أو تنتقل مباشرة" },
    { en: "Cross the blood–brain barrier → multiply in the **CSF** (few defenses there)", ar: "تعبر الحاجز وتتكاثر في **السائل الدماغي**" },
    { en: "**Inflammatory response**: purulent exudate covers the meninges; ↑ protein, ↓ glucose in CSF", ar: "**استجابة التهابية**: إفرازات قيحية على السحايا" },
    { en: "**Cerebral edema, blocked CSF flow (hydrocephalus), vasculitis & thrombosis** → **↑ ICP**, ischemia", ar: "**وذمة، انسداد السائل، التهاب وتخثر الأوعية** ← **ارتفاع الضغط** ونقص التروية" },
    { en: "Damage to cranial nerves (especially **CN VIII → deafness**), brain tissue; septicemia → shock, DIC", ar: "تلف الأعصاب القحفية (**الثامن ← الصمم**)، الإنتان ← صدمة وتخثر منتشر" } ] }
]},
{ h: { en: "Clinical manifestations", ar: "المظاهر السريرية" }, b: [
  { t: "cards", items: [
    { i: "brain", en: "Severe headache", d: "Often the first symptom", ar: "صداع شديد — غالباً أول عرض" },
    { i: "thermo", en: "High fever", ar: "حمى عالية" },
    { i: "bone", en: "Nuchal rigidity", d: "Stiff, painful neck on flexion — early sign", ar: "تيبس الرقبة — علامة مبكرة" },
    { i: "eye", en: "Photophobia", d: "Sensitivity to light", ar: "رهاب الضوء" },
    { i: "mind", en: "Altered mental status", d: "Confusion, irritability, drowsiness → coma", ar: "تغير الوعي: تشوش ← غيبوبة" },
    { i: "food", en: "Nausea & vomiting", ar: "غثيان وتقيؤ" },
    { i: "x", en: "Seizures", ar: "نوبات" },
    { i: "alert", en: "Petechial / purpuric rash", d: "**Meningococcal** — on trunk, legs, conjunctiva; doesn't blanch with pressure", ar: "طفح نقطي أو فرفري لا يختفي بالضغط — **المكورات السحائية**" } ] },
  { t: "compare", cols: [
    { h: { en: "Kernig's sign", ar: "علامة كيرنيغ" }, en: ["Patient supine, hip flexed to 90°", "Attempt to **extend the knee** → **pain and resistance** in the hamstrings/back", "Positive = meningeal irritation"], ar: ["المريض مستلقٍ والورك مثني 90 درجة", "محاولة **مد الركبة** ← **ألم ومقاومة**", "إيجابي = تهيج السحايا"] },
    { h: { en: "Brudzinski's sign", ar: "علامة برودزينسكي" }, en: ["Patient supine", "**Flex the neck** forward", "Positive = **hips and knees flex automatically**"], ar: ["المريض مستلقٍ", "**ثني الرقبة** للأمام", "إيجابي = **انثناء الورك والركبة تلقائياً**"] } ] },
  { t: "warn", en: "**Meningococcal septicemia** (meningococcemia) can progress within hours: a rapidly spreading **non-blanching purpuric rash**, cold hands and feet, hypotension, **septic shock and disseminated intravascular coagulation (DIC)**; adrenal hemorrhage (Waterhouse–Friderichsen syndrome). This needs immediate antibiotics and resuscitation.",
    ar: "**تسمم الدم بالمكورات السحائية** قد يتطور خلال ساعات: **طفح فرفري ينتشر بسرعة ولا يختفي بالضغط**، برودة الأطراف، هبوط الضغط، **صدمة إنتانية وتخثر منتشر داخل الأوعية**، ونزف الغدة الكظرية. يحتاج مضاداً حيوياً وإنعاشاً فورياً." },
  { t: "p", en: "**Older adults** may present only with confusion or drowsiness and little fever or neck stiffness. **Infants** show irritability, poor feeding, high-pitched cry and a **bulging fontanelle** rather than neck stiffness.",
    ar: "**كبار السن** قد يظهر عليهم التشوش أو النعاس فقط بدون حمى أو تيبس واضح. و**الرضع** يظهر عليهم التهيج وضعف الرضاعة والبكاء الحاد و**انتفاخ اليافوخ** بدل تيبس الرقبة." }
]},
{ h: { en: "Diagnostic evaluation", ar: "التشخيص" }, b: [
  { t: "list", en: [
    "**Lumbar puncture with CSF analysis** — the key test (Gram stain, culture & sensitivity, cell count, protein, glucose, PCR). A **CT scan is done first** if there are signs of raised ICP, focal deficits, papilledema, seizures or decreased LOC",
    "**Blood cultures** — taken **before antibiotics**, but **antibiotics must not be delayed** waiting for LP or CT",
    "CBC (↑ WBC), CRP/procalcitonin, electrolytes (SIADH), glucose (to compare with CSF), coagulation (DIC)",
    "Skin scraping of petechiae, throat swab; CT/MRI for complications (abscess, hydrocephalus)"],
    ar: [
    "**البزل القطني وتحليل السائل** — الفحص الأساسي (صبغة غرام، زرع، عدد الخلايا، البروتين، الجلوكوز، PCR). يُجرى **المفراس أولاً** مع علامات ارتفاع الضغط أو العجز الموضعي أو النوبات أو انخفاض الوعي",
    "**زرع الدم** — **قبل المضاد الحيوي**، لكن **لا يؤخر المضاد** انتظاراً للبزل أو المفراس",
    "صورة الدم، البروتين التفاعلي، الأملاح، السكر، التخثر",
    "مسحة من الطفح والحلق، والأشعة للمضاعفات"] },
  { t: "table", h: ["CSF", "Normal", "Bacterial", "Viral", "Tuberculous/Fungal"], r: [
    ["Appearance", "Clear", "**Cloudy / purulent**", "Clear", "Clear or slightly cloudy (fibrin web)"],
    ["Pressure", "Normal", "↑↑", "Normal / slightly ↑", "↑"],
    ["White cells", "0–5", "↑↑ **Neutrophils**", "↑ **Lymphocytes**", "↑ Lymphocytes"],
    ["Protein", "15–45 mg/dL", "↑↑", "Normal / slightly ↑", "↑↑"],
    ["Glucose", "≈ 60% of blood", "**↓↓ Low**", "**Normal**", "↓ Low"],
    ["Gram stain/culture", "Negative", "Often positive", "Negative (PCR for virus)", "AFB/fungal stains"]],
    ar: { h: ["السائل", "الطبيعي", "جرثومي", "فيروسي", "درني/فطري"], r: [
    ["المظهر", "صافٍ", "**عكر قيحي**", "صافٍ", "صافٍ أو عكر قليلاً"],
    ["الضغط", "طبيعي", "مرتفع جداً", "طبيعي أو مرتفع قليلاً", "مرتفع"],
    ["كريات البيض", "0–5", "**متعادلة** مرتفعة جداً", "**لمفاوية** مرتفعة", "لمفاوية"],
    ["البروتين", "15–45", "مرتفع جداً", "طبيعي أو مرتفع قليلاً", "مرتفع جداً"],
    ["الجلوكوز", "60% من الدم", "**منخفض جداً**", "**طبيعي**", "منخفض"],
    ["الصبغة/الزرع", "سلبي", "إيجابي غالباً", "سلبي (PCR)", "صبغات خاصة"]] } }
]},
{ h: { en: "Medical management", ar: "العلاج الطبي" }, b: [
  { t: "list", en: [
    "**Empirical IV antibiotics immediately** (within the first hour) — e.g., **ceftriaxone or cefotaxime + vancomycin**, add **ampicillin** for Listeria (age > 50, immunocompromised); adjust after culture; usually 7–21 days depending on organism",
    "**Dexamethasone** given **with or just before the first antibiotic dose** in suspected pneumococcal meningitis — reduces inflammation, **hearing loss** and neurological complications",
    "**Viral**: supportive care; **acyclovir** for herpes simplex",
    "Treat **raised ICP** (osmotic agents), **seizures** (anticonvulsants), **fever** (antipyretics), **shock** (fluids, vasopressors), DIC, SIADH (fluid restriction)",
    "**Prophylaxis for close contacts** of meningococcal meningitis (and Hib): **rifampin, ciprofloxacin or ceftriaxone** — household members, roommates, those exposed to oral secretions (kissing, mouth-to-mouth, intubation without mask)"],
    ar: [
    "**مضادات حيوية وريدية تجريبية فوراً** (خلال الساعة الأولى) — مثل **سيفترياكسون + فانكومايسين**، وإضافة **أمبيسيلين** لليستيريا؛ ثم التعديل حسب الزرع",
    "**الديكساميثازون** **مع أول جرعة مضاد حيوي أو قبلها مباشرة** في الالتهاب الرئوي المكوري — يقلل الالتهاب و**فقدان السمع**",
    "**الفيروسي**: علاج داعم؛ **أسيكلوفير** للهربس",
    "علاج **ارتفاع الضغط**، **النوبات**، **الحمى**، **الصدمة**، التخثر المنتشر، SIADH",
    "**الوقاية للمخالطين القريبين** في السحائي: **ريفامبين أو سيبروفلوكساسين أو سيفترياكسون** — أهل البيت، زملاء السكن، من تعرض للإفرازات الفموية"] },
  { t: "tip", en: "Exam rule: in suspected bacterial meningitis, **take blood cultures, then give antibiotics** — never delay antibiotics to wait for a CT scan or a lumbar puncture.",
    ar: "قاعدة امتحانية: عند الشك بالتهاب السحايا الجرثومي **خذ زرع الدم ثم أعطِ المضاد الحيوي** — لا تؤخر المضاد انتظاراً للمفراس أو البزل." }
]},
{ h: { en: "Nursing management", ar: "الرعاية التمريضية" }, b: [
  { t: "table", h: ["Nursing diagnosis", "Interventions"], r: [
    ["**Risk for infection transmission**", "**Droplet precautions** for suspected **meningococcal** (and Hib) meningitis **until 24 hours of effective antibiotics**: private room, **surgical mask** within ~1 m, hand hygiene; teach visitors"],
    ["**Ineffective cerebral tissue perfusion / ↑ICP**", "Neuro checks (LOC, pupils, GCS), HOB 30°, avoid Valsalva, report deterioration"],
    ["**Hyperthermia**", "Antipyretics, cooling measures, fluids; monitor temperature every 2–4 h"],
    ["**Acute pain** (headache, neck pain, photophobia)", "Analgesics; **quiet, dimly lit room**; cool cloth; position of comfort; minimize stimulation"],
    ["**Risk for injury** (seizures, confusion)", "Seizure precautions (padded rails, suction, O₂), bed low, reorientation"],
    ["**Risk for deficient/excess fluid volume** (fever, vomiting, SIADH, shock)", "I&O, daily weight, serum sodium, BP; IV fluids as ordered"],
    ["**Risk for shock / bleeding** (meningococcemia, DIC)", "Monitor BP, perfusion, skin rash spread, bleeding from sites, platelets/coagulation"],
    ["**Anxiety (patient & family)**", "Explain isolation and treatment; support family; arrange prophylaxis for contacts"]],
    ar: { h: ["التشخيص التمريضي", "التدخلات"], r: [
    ["**خطر انتقال العدوى**", "**احتياطات الرذاذ** للسحائي **حتى 24 ساعة من المضاد الفعال**: غرفة خاصة، **كمامة جراحية**، غسل اليدين، تعليم الزوار"],
    ["**نقص التروية الدماغية / ارتفاع الضغط**", "مراقبة عصبية، رفع الرأس 30، تجنب الحزق، الإبلاغ عن التدهور"],
    ["**ارتفاع الحرارة**", "خافضات حرارة وتبريد وسوائل"],
    ["**ألم حاد** (صداع ورقبة ورهاب الضوء)", "مسكنات، **غرفة هادئة معتمة**، كمادة باردة، تقليل التنبيه"],
    ["**خطر الإصابة**", "احتياطات النوبات، سرير منخفض، إعادة التوجيه"],
    ["**خطر اختلال السوائل**", "موازنة، وزن، صوديوم، ضغط"],
    ["**خطر الصدمة والنزف**", "مراقبة الضغط والتروية وانتشار الطفح والنزف والصفائح"],
    ["**القلق**", "شرح العزل والعلاج ودعم الأسرة وترتيب الوقاية للمخالطين"]] } },
  { t: "h3", en: "Complications", ar: "المضاعفات" },
  { t: "cards", items: [
    { i: "alert", en: "↑ ICP & herniation", ar: "ارتفاع الضغط والانفتاق" },
    { i: "ear", en: "Hearing loss (CN VIII)", d: "Most common long-term complication — do hearing tests", ar: "فقدان السمع — أشيع مضاعفة طويلة" },
    { i: "drop", en: "Hydrocephalus", ar: "استسقاء الرأس" },
    { i: "x", en: "Seizures / epilepsy", ar: "النوبات والصرع" },
    { i: "blood", en: "Septic shock & DIC", ar: "صدمة إنتانية وتخثر منتشر" },
    { i: "scale", en: "SIADH (hyponatremia)", ar: "متلازمة الإفراز غير الملائم" },
    { i: "brain", en: "Cognitive deficits, cranial nerve palsies, brain abscess", ar: "عجز معرفي وشلل أعصاب قحفية وخراج" },
    { i: "bone", en: "Limb loss", d: "From gangrene in meningococcemia", ar: "فقدان أطراف بسبب الغنغرينا" } ] },
  { t: "h3", en: "Prevention and teaching", ar: "الوقاية والتثقيف" },
  { t: "list", en: [
    "**Vaccination**: Hib and pneumococcal vaccines in childhood; **meningococcal vaccine** for high-risk groups, students in dormitories, military recruits and **pilgrims (Hajj/Umrah)**; pneumococcal vaccine for older adults and those with chronic disease",
    "Early treatment of ear, sinus and respiratory infections",
    "Close contacts must take **chemoprophylaxis** promptly and report fever/headache",
    "After recovery: hearing assessment, follow-up for cognitive or behavioral changes, complete the antibiotic course"],
    ar: [
    "**التلقيح**: لقاح المستدمية والمكورات الرئوية للأطفال؛ **لقاح المكورات السحائية** للفئات عالية الخطورة والطلاب في السكن والعسكريين و**الحجاج والمعتمرين**؛ واللقاح الرئوي لكبار السن والمرضى المزمنين",
    "العلاج المبكر لالتهابات الأذن والجيوب والجهاز التنفسي",
    "المخالطون القريبون يأخذون **الوقاية الدوائية** فوراً ويبلغون عن الحمى والصداع",
    "بعد الشفاء: فحص السمع ومتابعة التغيرات المعرفية وإكمال العلاج"] }
]}
],
questions: [
{ q: "Which organism is the most common cause of bacterial meningitis in adults?", o: ["Haemophilus influenzae type b", "Streptococcus pneumoniae", "Escherichia coli", "Staphylococcus epidermidis"], a: 1, r: "S. pneumoniae is the leading cause in adults; N. meningitidis is important in adolescents and young adults living in close quarters." },
{ q: "Which group is at highest risk for meningococcal meningitis outbreaks?", o: ["Elderly people living alone", "Students in dormitories and military recruits", "Office workers", "Farmers in isolated areas"], a: 1, r: "Crowded living conditions facilitate droplet transmission of N. meningitidis." },
{ q: "Which manifestations are typical of bacterial meningitis? (Select all that apply.)", o: ["Severe headache", "Nuchal rigidity", "Photophobia", "High fever", "Bradycardia as the first sign"], a: [0, 1, 2, 3], s: true, r: "Headache, fever, neck stiffness and photophobia are classic. Bradycardia is a late sign of raised ICP." },
{ q: "With the patient supine and hip flexed, the nurse attempts to extend the knee and the patient reports pain. This is:", o: ["Positive Brudzinski's sign", "Positive Kernig's sign", "Positive Babinski sign", "Positive Romberg test"], a: 1, r: "Kernig's sign is pain/resistance on knee extension with the hip flexed, indicating meningeal irritation." },
{ q: "Flexing the patient's neck causes the hips and knees to flex. This is:", o: ["Positive Kernig's sign", "Positive Brudzinski's sign", "Positive Homan's sign", "Decorticate posturing"], a: 1, r: "Brudzinski's sign is reflex flexion of the hips and knees when the neck is flexed." },
{ q: "A young adult with meningitis develops a purple rash that does not fade when pressed with a glass. The nurse suspects:", o: ["Allergy to antibiotics", "Meningococcal septicemia", "Measles", "Contact dermatitis"], a: 1, r: "A non-blanching petechial/purpuric rash is characteristic of meningococcemia and indicates possible DIC — an emergency." },
{ q: "Which CSF findings indicate bacterial meningitis?", o: ["Clear, normal glucose, lymphocytes", "Cloudy, high protein, low glucose, many neutrophils", "Clear, low protein, high glucose", "Bloody, normal cells"], a: 1, r: "Bacterial meningitis produces purulent CSF with neutrophils, high protein and low glucose." },
{ q: "Which CSF findings are typical of viral meningitis?", o: ["Cloudy, low glucose, neutrophils", "Clear, normal glucose, increased lymphocytes", "Frank pus", "Very high pressure with low glucose"], a: 1, r: "Viral meningitis typically shows clear CSF, lymphocytes and normal glucose." },
{ q: "Why is CSF glucose low in bacterial meningitis?", o: ["The brain stops using glucose", "Bacteria and white cells consume glucose and transport into CSF is impaired", "The liver stops producing glucose", "It is a lab error"], a: 1, r: "Bacterial metabolism, neutrophil activity and impaired glucose transport across inflamed meninges lower CSF glucose." },
{ q: "A patient with suspected bacterial meningitis is waiting for a CT before lumbar puncture. Blood cultures have been drawn. What should the nurse do?", o: ["Wait for the CT result before antibiotics", "Give the prescribed antibiotics now", "Give antipyretic only", "Wait for the lumbar puncture"], a: 1, p: true, r: "Antibiotics must not be delayed for imaging or LP; delays increase mortality and disability." },
{ q: "When should dexamethasone be given in suspected pneumococcal meningitis?", o: ["After 3 days of antibiotics", "With or just before the first dose of antibiotics", "Only if seizures occur", "Never"], a: 1, r: "Early dexamethasone reduces inflammatory damage, hearing loss and neurological sequelae when started with the first antibiotic dose." },
{ q: "Which transmission precautions are required for a patient with suspected meningococcal meningitis?", o: ["Standard precautions only", "Airborne precautions with N95", "Droplet precautions until 24 hours of effective antibiotic therapy", "Contact precautions for 2 weeks"], a: 2, r: "N. meningitidis spreads by respiratory droplets; droplet precautions continue for 24 hours after effective therapy begins." },
{ q: "Who should receive chemoprophylaxis after exposure to a patient with meningococcal meningitis? (Select all that apply.)", o: ["Household members", "College roommate", "Nurse who intubated the patient without a mask", "A visitor who passed in the corridor", "Boyfriend who kissed the patient"], a: [0, 1, 2, 4], s: true, r: "Close contacts and anyone exposed to oral secretions need prophylaxis (rifampin, ciprofloxacin or ceftriaxone). Casual contact does not." },
{ q: "Which drug may be used as prophylaxis for close contacts of meningococcal meningitis?", o: ["Rifampin", "Paracetamol", "Metformin", "Furosemide"], a: 0, r: "Rifampin, ciprofloxacin or a single dose of ceftriaxone eradicate nasopharyngeal carriage." },
{ q: "Which nursing measure helps relieve photophobia and headache in meningitis?", o: ["Bright lighting", "A quiet, darkened room", "Frequent loud stimulation", "Television on all day"], a: 1, r: "Reducing light and noise decreases discomfort and helps limit ICP rises." },
{ q: "A patient with meningitis becomes increasingly drowsy and the pupils become unequal. The nurse should suspect:", o: ["Normal response to treatment", "Rising intracranial pressure", "Hypoglycemia only", "Medication allergy"], a: 1, r: "Cerebral edema and hydrocephalus in meningitis raise ICP; decreasing LOC and pupil changes require immediate reporting." },
{ q: "Which is the most common long-term complication of bacterial meningitis?", o: ["Hearing loss", "Diabetes", "Cataract", "Asthma"], a: 0, r: "Sensorineural hearing loss from inflammation of the cochlea/CN VIII is common; hearing tests are done after recovery." },
{ q: "A patient with meningitis has serum sodium of 126 mEq/L and decreased urine output. Which order is likely?", o: ["Increase IV fluids", "Fluid restriction", "Desmopressin", "Potassium supplements"], a: 1, r: "SIADH is a recognized complication of meningitis; fluid restriction corrects dilutional hyponatremia." },
{ q: "Before a lumbar puncture, which findings would make the nurse expect a CT scan first? (Select all that apply.)", o: ["Papilledema", "New seizure", "Focal weakness", "Decreased level of consciousness", "Mild neck stiffness only in an alert patient"], a: [0, 1, 2, 3], s: true, r: "Signs of raised ICP or a focal lesion require CT before LP to reduce the risk of herniation." },
{ q: "An older adult with meningitis may present mainly with:", o: ["Severe neck stiffness and high fever always", "Confusion or decreased level of consciousness with fewer classic signs", "Rash only", "Hearing loss only"], a: 1, r: "Older adults often have atypical presentations; altered mental status may be the main sign." },
{ q: "How does meningitis often present in infants?", o: ["Kernig's sign", "Bulging fontanelle, irritability, poor feeding and high-pitched cry", "Neck stiffness always", "Photophobia complaint"], a: 1, r: "Infants cannot report headache and may not show neck stiffness; a bulging fontanelle and behavioral changes are key." },
{ q: "Which antibiotic is added to cover Listeria in adults over 50 or immunocompromised patients?", o: ["Ampicillin", "Metronidazole", "Doxycycline", "Nitrofurantoin"], a: 0, r: "Listeria is resistant to cephalosporins; ampicillin is added for at-risk groups." },
{ q: "Which treatment is specific for herpes simplex meningitis/encephalitis?", o: ["Acyclovir", "Penicillin", "Fluconazole", "Isoniazid"], a: 0, r: "Acyclovir is the antiviral of choice for HSV infections of the CNS." },
{ q: "A patient with meningococcemia develops oozing from IV sites and hematuria. The nurse suspects:", o: ["Hemophilia", "Disseminated intravascular coagulation", "Vitamin C deficiency", "Normal effect of antibiotics"], a: 1, r: "Meningococcal sepsis commonly triggers DIC, consuming clotting factors and platelets and causing bleeding." },
{ q: "Which vaccines help prevent bacterial meningitis? (Select all that apply.)", o: ["Hib vaccine", "Pneumococcal vaccine", "Meningococcal vaccine", "Hepatitis A vaccine"], a: [0, 1, 2], s: true, r: "Hib, pneumococcal and meningococcal vaccines protect against the main bacterial causes." },
{ q: "Which group in Iraq should receive the meningococcal vaccine before travel?", o: ["Pilgrims traveling for Hajj or Umrah", "People traveling by car within the city", "Farmers", "Newborns only"], a: 0, r: "Mass gatherings such as Hajj carry a high risk of meningococcal outbreaks; vaccination is required for pilgrims." },
{ q: "The nurse is caring for a patient with meningitis. Which action has the highest priority on admission?", o: ["Teach about vaccines", "Administer the first dose of IV antibiotics promptly after cultures", "Arrange a hearing test", "Provide a menu"], a: 1, p: true, r: "Rapid antibiotic therapy is the most important determinant of survival in bacterial meningitis." },
{ q: "A nurse caring for a patient with meningococcal meningitis enters the room within 1 m of the patient. Which protective equipment is required?", o: ["Surgical mask", "No equipment", "N95 respirator and negative-pressure room only", "Gloves only"], a: 0, r: "Droplet precautions require a surgical mask when close to the patient; N95 is for airborne diseases such as TB." },
{ q: "Which assessment is most important before giving oral fluids to a drowsy patient with meningitis?", o: ["Bowel sounds", "Swallowing and gag reflex", "Weight", "Hearing"], a: 1, r: "Decreased LOC impairs protective reflexes, increasing aspiration risk." },
{ q: "Which risk factors predispose to bacterial meningitis? (Select all that apply.)", o: ["Basilar skull fracture with CSF leak", "Otitis media", "Splenectomy", "Recent ventriculoperitoneal shunt", "Regular exercise"], a: [0, 1, 2, 3], s: true, r: "CSF leaks, nearby infections, asplenia and neurosurgical devices increase risk." },
{ q: "Tuberculous meningitis differs from bacterial meningitis in that it:", o: ["Has a sudden onset within hours", "Has a slower onset over weeks with lymphocytes in CSF", "Never affects cranial nerves", "Has normal CSF protein"], a: 1, r: "TB meningitis develops gradually, with lymphocytic CSF, high protein and low glucose, often with cranial nerve palsies." },
{ q: "A patient with meningitis has a seizure. Which actions are appropriate? (Select all that apply.)", o: ["Protect the head from injury", "Turn the patient to the side when possible", "Insert an object between the teeth", "Note the time and characteristics", "Give prescribed anticonvulsant"], a: [0, 1, 3, 4], s: true, r: "Safety, airway, observation and prescribed medication are correct; nothing is forced into the mouth." },
{ q: "Why are hearing tests recommended after recovery from bacterial meningitis, especially in children?", o: ["To detect sensorineural hearing loss early", "To check for otitis externa", "Because antibiotics improve hearing", "It is not recommended"], a: 0, r: "Early detection of hearing loss allows prompt intervention (hearing aids, cochlear implants) and supports development." },
{ q: "The family asks why the patient's door must stay closed and staff wear masks. The best answer is:", o: ["\"To keep the room warm.\"", "\"The infection spreads by droplets; precautions continue until antibiotics have worked for 24 hours.\"", "\"Because he is dying.\"", "\"It's hospital routine for all patients.\""], a: 1, r: "Explaining the reason and duration of droplet precautions reduces anxiety and improves cooperation." },
{ q: "Which assessment finding is an EARLY sign of meningeal irritation?", o: ["Nuchal rigidity", "Fixed dilated pupils", "Decerebrate posturing", "Cheyne–Stokes respiration"], a: 0, r: "Neck stiffness is an early sign; pupil changes, posturing and abnormal breathing indicate advanced ICP." },
{ q: "What is the purpose of droplet precautions lasting 24 hours after starting effective antibiotics?", o: ["Antibiotics eliminate nasopharyngeal carriage and infectivity within about 24 hours", "The patient is cured in 24 hours", "Visitors are allergic", "It is required for all infections"], a: 0, r: "Effective therapy eradicates the organism from the nasopharynx within about 24 hours, after which transmission risk is minimal." },
{ q: "Which fluid assessment is important in a febrile, vomiting patient with meningitis?", o: ["Intake and output and daily weight", "Hair washing", "Eye color", "Height"], a: 0, r: "Fever and vomiting cause fluid loss while SIADH causes retention; careful I&O, weights and sodium guide fluid therapy." },
{ q: "A patient with viral meningitis asks why he is not receiving antibiotics. The nurse explains:", o: ["\"Antibiotics do not treat viruses; you will receive supportive care and you are expected to recover.\"", "\"We forgot.\"", "\"You are allergic to all antibiotics.\"", "\"Viral meningitis is always fatal.\""], a: 0, r: "Viral meningitis is usually self-limiting and treated with rest, fluids and analgesics; antivirals are used only for specific viruses like HSV." }
]
});

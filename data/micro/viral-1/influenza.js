NS.reg("micro", "viral-1", "influenza", {
intro: {
  en: "**Influenza** is an acute respiratory infection caused by **influenza viruses** — **enveloped, segmented (8 segments), negative-sense single-stranded RNA viruses** of the **Orthomyxoviridae** family. Types **A, B and C** (and D in cattle) exist; **type A** causes **pandemics** and infects birds, pigs and humans, **type B** causes seasonal epidemics (humans), type C mild illness. The surface spikes **hemagglutinin (H)** and **neuraminidase (N)** define subtypes (e.g., **H1N1, H3N2, H5N1**). Constant genetic change (**drift and shift**) explains **yearly epidemics** and the need for **annual vaccination**.",
  ar: "**الإنفلونزا** عدوى تنفسية حادة يسببها **فيروس الإنفلونزا** — **فيروس RNA سالب مفرد مقطع (8 قطع) مغلف** من عائلة **الفيروسات المخاطية القويمة**. أنواعه **A وB وC**؛ **النوع A** يسبب **الجوائح** ويصيب الطيور والخنازير والإنسان، و**B** أوبئة موسمية. أشواك **الهيماغلوتينين (H)** و**النيورامينيداز (N)** تحدد الأنماط (**H1N1 وH3N2 وH5N1**). التغير المستمر (**الانجراف والتحول**) يفسر **الأوبئة السنوية** و**ضرورة التطعيم السنوي**."
},
sections: [
{ h: { en: "Virus, antigenic variation and transmission", ar: "الفيروس والتغير المستضدي والانتقال" }, b: [
  { t: "table", h: ["Spike", "Function"], r: [
    ["**Hemagglutinin (H)** — 18 subtypes", "**Attaches to sialic acid receptors** on respiratory epithelium; **main target of protective antibodies** (vaccine)"],
    ["**Neuraminidase (N)** — 11 subtypes", "**Cleaves sialic acid → releases new virions** from infected cells; **target of oseltamivir and zanamivir**"]],
    ar: { h: ["الشوكة", "الوظيفة"], r: [
    ["**الهيماغلوتينين (H)**", "**يلتصق بحمض السياليك**؛ **الهدف الرئيسي للأضداد الواقية** (اللقاح)"],
    ["**النيورامينيداز (N)**", "**يحرر الفيروسات الجديدة**؛ **هدف الأوسيلتاميفير والزاناميفير**"]] } },
  { t: "compare", cols: [
    { h: { en: "Antigenic DRIFT", ar: "الانجراف المستضدي" }, en: ["**Minor, gradual changes** from **point mutations** in H and N genes", "Occurs in **influenza A and B**", "Causes **seasonal epidemics** every year", "Reason the **vaccine is updated and given annually**"], ar: ["**تغيرات طفيفة تدريجية** من **طفرات نقطية**", "في **A وB**", "يسبب **الأوبئة الموسمية**", "سبب **تحديث اللقاح سنوياً**"] },
    { h: { en: "Antigenic SHIFT", ar: "التحول المستضدي" }, en: ["**Major, sudden change** — a **new H and/or N subtype**", "From **reassortment of gene segments** when human and animal (avian/swine) viruses infect the same cell (e.g., pig — \"mixing vessel\")", "**Influenza A only**", "Population has no immunity → **pandemics** (1918 H1N1 Spanish flu, 1957, 1968, **2009 H1N1 swine flu**)"], ar: ["**تغير كبير مفاجئ** — **نمط H أو N جديد**", "من **إعادة توزيع القطع الجينية** بين فيروسات الإنسان والحيوان (الخنزير «وعاء الخلط»)", "**النوع A فقط**", "لا مناعة ← **جوائح** (1918، **2009 إنفلونزا الخنازير**)"] } ] },
  { t: "list", en: [
    "**Transmission**: **respiratory droplets** (coughing, sneezing, talking — within ~**1–2 m**), contact with contaminated hands/surfaces (fomites), aerosols during procedures",
    "**Incubation**: short — **1–4 days (average 2)**",
    "**Infectious period**: **1 day before symptoms to 5–7 days after** onset (longer in children and immunocompromised)",
    "**Seasonality**: winter epidemics in temperate climates (Iraq: roughly **November–March**)",
    "**Avian influenza (H5N1, H7N9)**: spread from infected **poultry** to humans; rare human-to-human spread; **high mortality**"],
    ar: [
    "**الانتقال**: **الرذاذ التنفسي** (السعال والعطاس — ضمن **1–2 م**)، الأيدي والأسطح الملوثة",
    "**الحضانة**: قصيرة — **1–4 أيام**",
    "**فترة العدوى**: **يوم قبل الأعراض إلى 5–7 أيام بعدها**",
    "**الموسمية**: الشتاء (العراق: تقريباً **تشرين الثاني–آذار**)",
    "**إنفلونزا الطيور (H5N1)**: من **الدواجن** للإنسان؛ نادراً بين البشر؛ **وفيات عالية**"] }
]},
{ h: { en: "Clinical features, complications and diagnosis", ar: "السمات السريرية والمضاعفات والتشخيص" }, b: [
  { t: "compare", cols: [
    { h: { en: "Influenza", ar: "الإنفلونزا" }, en: ["**Sudden (abrupt) onset**", "**High fever 38–40°C**, chills", "**Severe myalgia**, headache, **marked fatigue/prostration**", "**Dry cough**, sore throat", "Patient is **bed-bound**; recovery 1–2 weeks, fatigue may persist"], ar: ["**بداية مفاجئة**", "**حمى عالية** وقشعريرة", "**آلام عضلية شديدة** وصداع و**إنهاك**", "**سعال جاف**", "**ملازم الفراش**"] },
    { h: { en: "Common cold", ar: "الزكام" }, en: ["Gradual onset", "Low or no fever", "Mild aches", "**Runny/stuffy nose, sneezing** prominent", "Usually able to continue daily activities"], ar: ["بداية تدريجية", "حمى خفيفة أو لا توجد", "آلام خفيفة", "**سيلان الأنف والعطاس** بارزان", "يمارس نشاطه"] } ] },
  { t: "table", h: ["Complication", "Notes"], r: [
    ["**Primary viral pneumonia**", "Rapid progression to **hypoxia and ARDS**"],
    ["**Secondary bacterial pneumonia**", "***Staphylococcus aureus*** (incl. MRSA), *Streptococcus pneumoniae*, *H. influenzae* — **fever returns after initial improvement**"],
    ["**Exacerbation of chronic diseases**", "Asthma, COPD, heart failure, diabetes"],
    ["Myocarditis, myositis, encephalitis, otitis media, sinusitis", "Less common; myocarditis can cause arrhythmias and heart failure"],
    ["**Reye syndrome**", "**Children given aspirin** (influenza B, varicella) → acute encephalopathy + liver failure → **never give aspirin to children/teens with flu**"]],
    ar: { h: ["المضاعفة", "ملاحظات"], r: [
    ["**ذات الرئة الفيروسية**", "تطور سريع إلى **نقص الأكسجة ومتلازمة الضائقة**"],
    ["**ذات الرئة البكتيرية الثانوية**", "**المكورات العنقودية الذهبية** والرئوية — **عودة الحمى بعد التحسن**"],
    ["**تفاقم الأمراض المزمنة**", "الربو والانسداد الرئوي وفشل القلب والسكري"],
    ["التهاب العضلة القلبية والدماغ والأذن", "أقل شيوعاً؛ التهاب العضلة القلبية قد يسبب اضطراب النظم"],
    ["**متلازمة راي**", "**أطفال يأخذون الأسبرين** ← اعتلال دماغ وفشل كبد ← **لا أسبرين للأطفال**"]] } },
  { t: "list", en: [
    "**High-risk groups** (severe disease, priority for vaccine and antivirals): **age ≥ 65 years**, **children < 5 years (especially < 2)**, **pregnant women** (and up to 2 weeks postpartum), chronic heart/lung/kidney/liver disease, **diabetes**, immunosuppression, obesity (BMI ≥ 40), nursing-home residents, **healthcare workers** (exposure and transmission to patients)",
    "**Diagnosis**: mostly clinical during season; **RT-PCR of nasopharyngeal swab** (most accurate); rapid antigen tests (fast but lower sensitivity — negative result does not rule out flu); collect within first 3–4 days"],
    ar: [
    "**الفئات عالية الخطورة**: **≥ 65 سنة**، **الأطفال < 5 سنوات**، **الحوامل**، أمراض القلب والرئة والكلى المزمنة، **السكري**، ضعف المناعة، السمنة المفرطة، نزلاء دور الرعاية، **العاملون الصحيون**",
    "**التشخيص**: سريري غالباً؛ **RT-PCR لمسحة البلعوم الأنفي** (الأدق)؛ الاختبارات السريعة (أقل حساسية — السلبي لا ينفي)"] }
]},
{ h: { en: "Treatment, prevention and nursing care", ar: "العلاج والوقاية والرعاية التمريضية" }, b: [
  { t: "table", h: ["Measure", "Details"], r: [
    ["**Neuraminidase inhibitors**", "**Oseltamivir (oral, 75 mg twice daily × 5 days)**, zanamivir (inhaled — avoid in asthma/COPD: bronchospasm), peramivir (IV); **most effective within 48 hours of symptom onset**; give to **hospitalized, severe or high-risk patients regardless of timing**; side effect of oseltamivir: nausea/vomiting (take with food)"],
    ["**Baloxavir**", "Single oral dose; inhibits viral cap-dependent endonuclease"],
    ["**Amantadine/rimantadine**", "**No longer recommended** — high resistance; inactive against influenza B"],
    ["**Supportive**", "Rest, **fluids**, **paracetamol** for fever/aches, oxygen if hypoxic; **antibiotics only for bacterial complications**"],
    ["**Annual influenza vaccine**", "**Every year** (strains updated by WHO); **inactivated injectable** (safe in pregnancy — recommended **any trimester**) or **live attenuated intranasal** (healthy non-pregnant 2–49 years only); **children 6 months–8 years receiving it for the first time need 2 doses 4 weeks apart**; **not before 6 months of age**; protection begins ~**2 weeks** after"],
    ["**Chemoprophylaxis**", "Oseltamivir for exposed high-risk people/institutional outbreaks"]],
    ar: { h: ["الإجراء", "التفاصيل"], r: [
    ["**مثبطات النيورامينيداز**", "**الأوسيلتاميفير (75 ملغ مرتين يومياً 5 أيام)**، الزاناميفير (استنشاق — يُتجنب في الربو)؛ **الأكثر فعالية خلال 48 ساعة**؛ يُعطى **للمرضى الشديدين وعاليي الخطورة بغض النظر عن التوقيت**؛ أثره الجانبي الغثيان (يؤخذ مع الطعام)"],
    ["**البالوكسافير**", "جرعة فموية واحدة"], ["**الأمانتادين**", "**لم يعد موصى به** — مقاومة عالية"],
    ["**الداعم**", "راحة و**سوائل** و**باراسيتامول** وأكسجين؛ **مضادات حيوية للمضاعفات البكتيرية فقط**"],
    ["**اللقاح السنوي**", "**كل سنة**؛ **المعطل الحقني** (آمن في الحمل **بأي ثلث**) أو **الحي الأنفي** (للأصحاء غير الحوامل 2–49 سنة)؛ **الأطفال 6 أشهر–8 سنوات لأول مرة: جرعتان بفارق 4 أسابيع**؛ **ليس قبل 6 أشهر**؛ الحماية بعد ~**أسبوعين**"],
    ["**الوقاية الدوائية**", "أوسيلتاميفير للمخالطين عاليي الخطورة"]] } },
  { t: "list", en: [
    "**Droplet precautions**: private room or cohort, **surgical mask within 1–2 m**, plus standard precautions; **N95 + airborne precautions for aerosol-generating procedures** (suctioning, intubation, nebulizers); patient masks during transport; duration **7 days after onset or 24 h after fever and symptoms resolve**",
    "**Respiratory hygiene / cough etiquette**: cover mouth and nose with tissue or elbow, dispose tissues, **hand hygiene**; masks for coughing patients in waiting areas; spatial separation > 1 m",
    "**Sick healthcare workers stay home** until fever-free for 24 h without antipyretics",
    "**Nursing care**: monitor **respiratory rate, SpO2, breath sounds** (pneumonia), temperature; encourage **fluids 2–3 L/day** (unless restricted); rest; semi-Fowler's position; teach completion of antivirals; watch **warning signs — dyspnea, chest pain, confusion, persistent vomiting, cyanosis, fever returning after improvement** (secondary bacterial pneumonia)"],
    ar: [
    "**الاحتياطات الرذاذية**: غرفة منفردة أو تجميع، **قناع جراحي ضمن 1–2 م**؛ **N95 للإجراءات المولدة للرذاذ** (الشفط والتنبيب والبخاخات)؛ المدة **7 أيام أو 24 ساعة بعد زوال الحمى والأعراض**",
    "**آداب السعال**: تغطية الفم والأنف بالمنديل أو المرفق، **غسل اليدين**، أقنعة للمرضى في الانتظار، تباعد > 1 م",
    "**العامل الصحي المريض يبقى في البيت** حتى 24 ساعة بلا حمى بدون خافض",
    "**الرعاية**: مراقبة **سرعة التنفس والإشباع وأصوات التنفس** والحرارة؛ **سوائل 2–3 لتر يومياً**؛ راحة؛ وضعية نصف الجلوس؛ مراقبة **علامات الخطر — ضيق النفس وألم الصدر والتشوش والقيء المستمر والزرقة وعودة الحمى**"] }
]}
],
questions: [
{ q: "Influenza virus belongs to which family?", o: ["Orthomyxoviridae", "Paramyxoviridae", "Herpesviridae", "Retroviridae"], a: 0, r: "It is a segmented negative-sense RNA virus." },
{ q: "Which influenza type causes pandemics?", o: ["Type A", "Type B", "Type C", "Type D"], a: 0, r: "Only type A undergoes antigenic shift with animal reservoirs." },
{ q: "The influenza surface protein that attaches to host cells is:", o: ["Hemagglutinin", "Neuraminidase", "Reverse transcriptase", "p24"], a: 0, r: "It binds sialic acid receptors and is the main vaccine target." },
{ q: "Oseltamivir works by inhibiting:", o: ["Neuraminidase", "Hemagglutinin", "Reverse transcriptase", "DNA polymerase"], a: 0, r: "It prevents release of new virions." },
{ q: "Antigenic drift refers to:", o: ["Minor point mutations causing seasonal epidemics", "Major reassortment causing pandemics", "Loss of envelope", "Bacterial transformation"], a: 0, r: "It occurs in influenza A and B." },
{ q: "Antigenic shift results from:", o: ["Reassortment of gene segments between human and animal viruses", "Single point mutations", "Vaccination", "Antibiotic use"], a: 0, r: "It produces new subtypes and pandemics." },
{ q: "Why must the influenza vaccine be given every year?", o: ["The virus changes through antigenic drift and immunity wanes", "The vaccine is live", "It is cheap", "It cures the flu"], a: 0, r: "WHO updates vaccine strains annually." },
{ q: "The 2009 pandemic was caused by:", o: ["Influenza A H1N1 (swine flu)", "Influenza B", "H5N1 bird flu", "SARS-CoV-2"], a: 0, r: "It arose from reassortment of swine, avian and human genes." },
{ q: "Influenza is mainly transmitted by:", o: ["Respiratory droplets and contaminated hands", "Mosquitoes", "Blood transfusion", "Fecal–oral route"], a: 0, r: "Droplets spread within about 1–2 meters." },
{ q: "The incubation period of influenza is:", o: ["1–4 days", "2–3 weeks", "1–6 months", "10–14 days"], a: 0, r: "The short incubation allows rapid spread." },
{ q: "Features that distinguish influenza from the common cold include: (Select all that apply.)", o: ["Sudden onset", "High fever", "Severe myalgia", "Marked fatigue", "Prominent sneezing as main symptom"], a: [0, 1, 2, 3], s: true, r: "Sneezing and runny nose dominate the common cold." },
{ q: "Neuraminidase inhibitors are most effective when started within:", o: ["48 hours of symptom onset", "1 week", "2 weeks", "1 month"], a: 0, r: "Early treatment shortens illness and reduces complications." },
{ q: "A hospitalized patient with severe influenza presents on day 4 of illness. The nurse expects:", o: ["Oseltamivir to be started anyway", "No antiviral because it is after 48 hours", "Amantadine", "Antibiotics only"], a: 0, p: true, r: "Severe or hospitalized patients benefit regardless of timing." },
{ q: "Inhaled zanamivir should be avoided in patients with:", o: ["Asthma or COPD", "Diabetes", "Hypertension", "Anemia"], a: 0, r: "It can cause bronchospasm." },
{ q: "Why should aspirin not be given to children with influenza?", o: ["Risk of Reye syndrome", "It causes rash", "It increases fever", "It causes diarrhea only"], a: 0, r: "Reye syndrome causes encephalopathy and liver failure." },
{ q: "A patient with influenza improves, then develops a new high fever and productive cough. This suggests:", o: ["Secondary bacterial pneumonia", "Normal recovery", "Vaccine reaction", "Allergy"], a: 0, p: true, r: "Staphylococcus aureus and pneumococcus are common culprits." },
{ q: "Which groups are at high risk of severe influenza? (Select all that apply.)", o: ["Adults ≥ 65 years", "Pregnant women", "Children under 5 years", "People with diabetes", "Healthy 25-year-olds"], a: [0, 1, 2, 3], s: true, r: "Healthy young adults are generally at lower risk." },
{ q: "Which influenza vaccine is recommended during pregnancy?", o: ["Inactivated injectable vaccine", "Live attenuated intranasal vaccine", "No vaccine", "BCG"], a: 0, r: "It protects both mother and newborn." },
{ q: "The minimum age for influenza vaccination is:", o: ["6 months", "At birth", "2 years", "5 years"], a: 0, r: "Infants younger than 6 months are protected by vaccinating contacts." },
{ q: "A child aged 4 years receiving influenza vaccine for the first time needs:", o: ["Two doses at least 4 weeks apart", "One dose", "Three doses", "No vaccine"], a: 0, r: "This applies to children 6 months to 8 years." },
{ q: "Which precautions are used for a hospitalized patient with influenza?", o: ["Droplet precautions", "Airborne only", "Contact only", "None"], a: 0, p: true, r: "A surgical mask is worn within 1–2 m of the patient." },
{ q: "During nebulization or suctioning of a patient with influenza, the nurse should wear:", o: ["N95 respirator", "No mask", "Surgical mask only", "Cloth mask"], a: 0, r: "Aerosol-generating procedures need airborne-level protection." },
{ q: "Respiratory hygiene/cough etiquette includes: (Select all that apply.)", o: ["Covering mouth and nose with tissue or elbow", "Hand hygiene after coughing", "Masking coughing patients in waiting areas", "Spitting in the sink"], a: [0, 1, 2], s: true, r: "These measures limit droplet spread." },
{ q: "The most accurate test for influenza is:", o: ["RT-PCR of a nasopharyngeal swab", "Blood culture", "Urine test", "Chest X-ray"], a: 0, r: "Rapid antigen tests have lower sensitivity." },
{ q: "Amantadine is no longer recommended for influenza because of:", o: ["Widespread resistance", "High cost", "Being a vaccine", "Being an antibiotic"], a: 0, r: "It is also inactive against influenza B." },
{ q: "Avian influenza H5N1 is acquired mainly from:", o: ["Infected poultry", "Mosquitoes", "Contaminated water", "Blood transfusion"], a: 0, r: "Human-to-human spread is rare." },
{ q: "A nurse with influenza symptoms should:", o: ["Stay home until fever-free for 24 hours without antipyretics", "Work with a mask", "Work only night shifts", "Take antibiotics and work"], a: 0, r: "Sick staff can infect vulnerable patients." },
{ q: "Protection after influenza vaccination begins after about:", o: ["2 weeks", "1 day", "6 months", "1 year"], a: 0, r: "Antibodies take time to develop." },
{ q: "A nursing priority for a patient with influenza pneumonia is:", o: ["Monitoring oxygen saturation and respiratory status", "Encouraging ambulation for exercise", "Restricting fluids", "Giving aspirin"], a: 0, p: true, r: "Hypoxia can develop rapidly." },
{ q: "The common side effect of oseltamivir is:", o: ["Nausea and vomiting", "Hearing loss", "Kidney failure", "Hair loss"], a: 0, r: "Taking it with food reduces nausea." }
]
});

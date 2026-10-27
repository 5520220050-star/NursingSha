/* شبكة تمريضيون التعليمية — syllabus registry: subject → theory/practical → system → topic */
window.NS = window.NS || { data: {} };
(function () {
  function S(id, icon, en, ar, topics) { return { id: id, icon: icon, en: en, ar: ar, topics: topics.map(function (t) { return { id: t[0], en: t[1], ar: t[2] }; }) }; }
  NS.subjects = [
  { id: "adult", icon: "heart", en: "Adult Nursing", ar: "تمريض البالغين",
    theory: [
      S("intro", "book", "Introduction", "المقدمة", [
        ["intro", "Introduction to Adult Nursing Specialty", "مقدمة في تخصص تمريض البالغين"]]),
      S("neuro", "brain", "Nervous System", "الجهاز العصبي", [
        ["assessment", "Neurological Assessment & Diagnostic Tests", "التقييم العصبي والفحوصات التشخيصية"],
        ["icp", "Increased Intracranial Pressure", "ارتفاع الضغط داخل القحف"],
        ["abscess", "Brain Abscess", "خراج الدماغ"],
        ["tumor", "Brain Tumor", "أورام الدماغ"],
        ["head-injury", "Head Injury", "إصابات الرأس"],
        ["meningitis", "Meningitis", "التهاب السحايا"],
        ["epilepsy", "Epilepsy", "الصرع"],
        ["unconscious", "Caring for the Unconscious Patient", "رعاية المريض فاقد الوعي"]]),
      S("renal", "kidney", "Renal & Urinary System", "الجهاز البولي والكلى", [
        ["assessment", "Renal Assessment & Diagnostic Tests", "تقييم الكلى والفحوصات التشخيصية"],
        ["cardinal", "Cardinal Signs & Symptoms", "العلامات والأعراض الرئيسية"],
        ["uti", "Urinary Tract Infection", "التهاب المسالك البولية"],
        ["stone", "Renal Stone (Urolithiasis)", "حصى الكلى"],
        ["bph", "Benign Prostatic Hyperplasia", "تضخم البروستات الحميد"],
        ["bladder-ca", "Cancer of the Bladder", "سرطان المثانة"],
        ["esrd", "End-Stage Renal Disease", "الفشل الكلوي النهائي"],
        ["rrt", "Renal Replacement Therapy", "العلاج البديل للكلية"]]),
      S("msk", "bone", "Musculoskeletal System", "الجهاز العضلي الهيكلي", [
        ["assessment", "Musculoskeletal Assessment & Diagnostic Tests", "التقييم والفحوصات التشخيصية"],
        ["fracture", "Fractures", "الكسور"],
        ["amputation", "Amputation", "البتر"],
        ["osteomyelitis", "Osteomyelitis", "التهاب العظم والنقي"],
        ["osteoporosis", "Osteoporosis", "هشاشة العظام"],
        ["arthritis", "Arthritis", "التهاب المفاصل"],
        ["joint-replacement", "Joint Replacement", "استبدال المفاصل"]]),
      S("cardio", "heart", "Cardiovascular System", "الجهاز القلبي الوعائي", [
        ["assessment", "Cardiovascular Assessment, Signs & Diagnostic Tests", "تقييم القلب والعلامات والفحوصات"],
        ["mitral", "Mitral Stenosis & Regurgitation", "تضيق وقلس الصمام التاجي"],
        ["aortic", "Aortic Stenosis & Regurgitation", "تضيق وقلس الصمام الأبهري"],
        ["congenital", "Congenital Heart Disease (ASD, VSD, TOF)", "أمراض القلب الخلقية"]]),
      S("integ", "skin", "Integumentary System", "الجهاز الجلدي", [
        ["assessment", "Assessment of the Integumentary System", "تقييم الجهاز الجلدي"],
        ["dermatitis", "Dermatitis", "التهاب الجلد"],
        ["autoimmune", "Autoimmune Skin Disease", "أمراض الجلد المناعية الذاتية"]]),
      S("ent", "ear", "Ear, Nose & Throat", "الأنف والأذن والحنجرة", [
        ["sinusitis", "Sinusitis", "التهاب الجيوب الأنفية"],
        ["tonsillitis", "Tonsillitis", "التهاب اللوزتين"],
        ["otitis", "Otitis Media", "التهاب الأذن الوسطى"],
        ["larynx-ca", "Cancer of the Larynx", "سرطان الحنجرة"]]),
      S("eye", "eye", "Ophthalmic Disorders", "اضطرابات العين", [
        ["assessment", "Eye Assessment & Diagnostic Tests", "تقييم العين والفحوصات"],
        ["cataract", "Cataract", "الساد (الماء الأبيض)"],
        ["glaucoma", "Glaucoma", "الزرق (الماء الأزرق)"]])
    ],
    practical: [
      S("p-neuro", "brain", "Neurology Ward", "ردهة الأعصاب", [
        ["head-injury", "Head Injury", "إصابة الرأس"], ["tumor", "Brain Tumor", "ورم الدماغ"]]),
      S("p-uro", "kidney", "Urology Ward", "ردهة المسالك البولية", [
        ["stone", "Renal Stone", "حصى الكلى"], ["bladder-ca", "Cancer of the Bladder", "سرطان المثانة"]]),
      S("p-ortho", "bone", "Orthopedic Ward", "ردهة العظام", [
        ["fracture", "Fracture", "الكسور"], ["osteomyelitis", "Osteomyelitis", "التهاب العظم والنقي"]]),
      S("p-cardio", "heart", "Cardiology Ward", "ردهة القلبية", [
        ["mitral", "Mitral Stenosis & Regurgitation", "تضيق وقلس الصمام التاجي"], ["aortic", "Aortic Stenosis & Regurgitation", "تضيق وقلس الصمام الأبهري"]])
    ] },
  { id: "micro", icon: "micro", en: "Microbiology for Nurses", ar: "الأحياء المجهرية للممرضين",
    theory: [
      S("parasitology", "bug", "Introduction to Parasitology", "مقدمة علم الطفيليات", [
        ["terms", "Terms, Types of Parasites & Hosts", "المصطلحات وأنواع الطفيليات والمضائف"],
        ["routes", "Routes of Infection & Epidemiological Terms", "طرق العدوى والمصطلحات الوبائية"],
        ["protozoa-general", "Classification & General Characters of Protozoa", "تصنيف الأوالي وصفاتها العامة"]]),
      S("intestinal", "micro", "Intestinal & Atrial Protozoa", "الأوالي المعوية والتناسلية", [
        ["entamoeba", "Entamoeba histolytica & Entamoeba coli", "الأميبا الحالة للنسيج والقولونية"],
        ["balantidium", "Balantidium coli", "البلانتيديوم القولوني"],
        ["giardia", "Giardia lamblia", "الجيارديا"],
        ["trichomonas", "Trichomonas Species", "المشعرات"]]),
      S("flagellates", "blood", "Blood & Tissue Flagellates", "سوطيات الدم والأنسجة", [
        ["leishmania", "Leishmania & Macrophages", "الليشمانيا والبلاعم"],
        ["trypanosoma", "Trypanosoma (African & American)", "المثقبيات الأفريقية والأمريكية"]]),
      S("apicomplexa", "drop", "Apicomplexa", "البوغيات", [
        ["plasmodium", "Plasmodium & Malaria", "البلازموديوم والملاريا"],
        ["toxoplasma", "Toxoplasma gondii", "المقوسة الغوندية"]]),
      S("cestodes", "bug", "Helminths: Cestodes", "الديدان: الشريطيات", [
        ["helminths-general", "Helminths: General Structure & Classification", "الديدان: التركيب والتصنيف"],
        ["taenia", "Taenia saginata & Taenia solium", "الشريطية البقرية والخنزيرية"],
        ["hymenolepis", "Hymenolepis nana", "الشريطية القزمة"],
        ["echinococcus", "Echinococcus granulosus (Hydatid Disease)", "المشوكة الحبيبية (الأكياس العدارية)"]]),
      S("trematodes", "bug", "Helminths: Trematodes", "الديدان: المثقوبات", [
        ["fasciola", "Fasciola hepatica", "المتورقة الكبدية"],
        ["schistosoma", "Schistosoma Species", "البلهارسيا"]]),
      S("nematodes", "bug", "Helminths: Nematodes", "الديدان: الخيطيات", [
        ["ascaris", "Ascaris lumbricoides", "الصفر الخراطيني"],
        ["hookworm", "Ancylostoma duodenale (Hookworm)", "الملقوة الاثني عشرية"],
        ["enterobius", "Enterobius vermicularis (Pinworm)", "الدودة الدبوسية"],
        ["trichuris", "Trichuris trichiura (Whipworm)", "الدودة السوطية"]]),
      S("virology", "virus", "General Virology", "علم الفيروسات العام", [
        ["properties", "General Properties & Structure of Viruses", "الخصائص العامة وتركيب الفيروسات"],
        ["subviral", "Virus-Like Particles & Subviral Particles", "الجسيمات الشبيهة بالفيروسات وتحت الفيروسية"],
        ["replication", "Classification & Viral Replication", "التصنيف وتكاثر الفيروسات"],
        ["effects", "Effects on Cells, Persistent Infections & Routes", "التأثير على الخلايا والعدوى المستمرة وطرق الانتقال"]]),
      S("viral-1", "virus", "Measles, AIDS & Influenza", "الحصبة والإيدز والإنفلونزا", [
        ["measles", "Measles", "الحصبة"], ["aids", "HIV / AIDS", "الإيدز"], ["influenza", "Influenza", "الإنفلونزا"]]),
      S("viral-2", "virus", "Hepatitis & Coronavirus", "التهاب الكبد وكورونا", [
        ["hepatitis", "Hepatitis Viruses A–E", "فيروسات التهاب الكبد"], ["corona", "Coronavirus & COVID-19", "كورونا وكوفيد-19"]]),
      S("viral-3", "virus", "Other Viral Diseases", "أمراض فيروسية أخرى", [
        ["mumps", "Mumps", "النكاف"], ["rubella", "Rubella", "الحصبة الألمانية"], ["rotavirus", "Rotavirus", "فيروس الروتا"],
        ["polio", "Poliovirus", "شلل الأطفال"], ["herpes-cmv", "Herpes Viruses & CMV", "فيروسات الهربس والفيروس المضخم للخلايا"]])
    ],
    practical: [
      S("p-protozoa", "micro", "Lab Diagnosis of Protozoa", "التشخيص المختبري للأوالي", [
        ["stool-protozoa", "Amoebae, Ciliates & Intestinal Flagellates", "الأميبا والهدبيات والسوطيات المعوية"],
        ["blood-tissue", "Blood & Tissue Protozoa", "أوالي الدم والأنسجة"]]),
      S("p-helminths", "bug", "Lab Diagnosis of Helminths", "التشخيص المختبري للديدان", [
        ["cestodes-lab", "Cestodes", "الشريطيات"], ["trematodes-lab", "Trematodes", "المثقوبات"], ["nematodes-lab", "Nematodes", "الخيطيات"]])
    ] },
  { id: "peds", icon: "baby", en: "Pediatric Nursing", ar: "تمريض الأطفال",
    theory: [
      S("intro", "book", "Introduction to Child Health", "مقدمة في صحة الطفل", [
        ["perspectives", "Perspectives of Pediatric Nursing", "منظورات تمريض الأطفال"],
        ["communication", "Communication with Children", "التواصل مع الأطفال"],
        ["immunization", "Immunization & Immunity", "التلقيح والمناعة"]]),
      S("assessment", "steth", "Health Assessment", "التقييم الصحي", [
        ["assessment", "Health Assessment of the Child", "التقييم الصحي للطفل"]]),
      S("newborn", "baby", "Newborn Care", "رعاية حديث الولادة", [
        ["immediate", "Immediate Newborn Care", "الرعاية الفورية لحديث الولادة"],
        ["high-risk", "High-Risk Neonate: Gestational Age & Low Birth Weight", "الوليد عالي الخطورة: عمر الحمل ونقص الوزن"],
        ["rds", "Respiratory Distress Syndrome", "متلازمة الضائقة التنفسية"],
        ["jaundice", "Neonatal Jaundice", "يرقان حديث الولادة"],
        ["hypoglycemia", "Neonatal Hypoglycemia", "نقص السكر عند الوليد"]]),
      S("resp", "lungs", "Respiratory Dysfunction", "اضطرابات الجهاز التنفسي", [
        ["tonsillitis", "Tonsillitis", "التهاب اللوزتين"], ["pneumonia", "Pneumonia", "ذات الرئة"],
        ["asthma", "Asthma", "الربو"], ["bronchiolitis", "Bronchiolitis", "التهاب القصيبات"]]),
      S("gu", "kidney", "Genitourinary Dysfunction", "اضطرابات الجهاز البولي التناسلي", [
        ["uti", "Urinary Tract Infection", "التهاب المسالك البولية"], ["nephritic", "Nephritic Syndrome (Glomerulonephritis)", "المتلازمة الكلوية الالتهابية"]]),
      S("gi", "food", "Gastrointestinal Dysfunction", "اضطرابات الجهاز الهضمي", [
        ["gastroenteritis", "Gastroenteritis & Dehydration", "التهاب المعدة والأمعاء والجفاف"], ["cleft", "Cleft Lip & Palate", "الشفة والحنك المشقوق"],
        ["hirschsprung", "Hirschsprung Disease", "مرض هيرشسبرونغ"], ["imperforate", "Imperforate Anus", "انسداد فتحة الشرج"], ["intussusception", "Intussusception", "انغلاف الأمعاء"]]),
      S("blood", "blood", "Blood Dysfunction", "اضطرابات الدم", [
        ["leukemia", "Leukemia", "اللوكيميا"], ["thalassemia", "Thalassemia", "الثلاسيميا"], ["hemophilia", "Hemophilia", "الهيموفيليا"], ["sickle", "Sickle Cell Anemia", "فقر الدم المنجلي"]]),
      S("cardiac", "heart", "Cardiovascular Dysfunction", "اضطرابات القلب", [
        ["acyanotic", "Acyanotic Heart Diseases", "أمراض القلب غير المزرقة"], ["cyanotic", "Cyanotic Heart Diseases", "أمراض القلب المزرقة"]]),
      S("neuro", "brain", "Neurological Dysfunction", "اضطرابات الجهاز العصبي", [
        ["spina-bifida", "Spina Bifida", "الصلب المشقوق"], ["hydrocephalus", "Hydrocephalus", "استسقاء الرأس"], ["meningitis", "Meningitis in Children", "التهاب السحايا عند الأطفال"]]),
      S("endo", "drop", "Endocrine Dysfunction", "اضطرابات الغدد الصماء", [
        ["diabetes", "Diabetes Mellitus in Children", "السكري عند الأطفال"], ["hypothyroidism", "Hypothyroidism", "قصور الغدة الدرقية"]])
    ],
    practical: [
      S("p-nicu", "baby", "NICU", "وحدة العناية المركزة للخدج", [
        ["jaundice", "Hyperbilirubinemia (Jaundice)", "فرط البيليروبين (اليرقان)"], ["rds", "Respiratory Distress Syndrome", "متلازمة الضائقة التنفسية"]]),
      S("p-blood", "blood", "Blood Ward", "ردهة أمراض الدم", [
        ["thalassemia", "Thalassemia", "الثلاسيميا"], ["leukemia", "Leukemia", "اللوكيميا"], ["hemophilia", "Hemophilia", "الهيموفيليا"]]),
      S("p-medical", "steth", "Medical Ward", "الردهة الباطنية", [
        ["pneumonia", "Pneumonia", "ذات الرئة"], ["gastro", "Diarrhea, Vomiting & Dehydration", "الإسهال والتقيؤ والجفاف"]]),
      S("p-surgical", "bed", "Surgical Ward", "الردهة الجراحية", [
        ["hirschsprung", "Hirschsprung Disease", "مرض هيرشسبرونغ"], ["pyloric", "Pyloric Stenosis", "تضيق البواب"]])
    ] },
  { id: "maternity", icon: "mother", en: "Maternity & Neonatal Nursing", ar: "تمريض الأم والوليد",
    theory: [
      S("anatomy", "people", "Reproductive Anatomy & Physiology", "تشريح ووظائف الجهاز التناسلي", [
        ["puberty", "Puberty", "البلوغ"], ["reproductive", "Male & Female Reproductive Systems", "الجهاز التناسلي الذكري والأنثوي"], ["menstrual", "Menstrual Cycle", "الدورة الشهرية"]]),
      S("pregnancy", "mother", "Normal Pregnancy", "الحمل الطبيعي", [
        ["fetal", "Fetal Development & Physiology", "نمو الجنين ووظائفه"], ["changes", "Physiological & Psychological Changes of Pregnancy", "التغيرات الجسدية والنفسية للحمل"], ["prenatal", "Prenatal Care", "رعاية ما قبل الولادة"]]),
      S("preg-comp", "alert", "Complications of Pregnancy", "مضاعفات الحمل", [
        ["aph", "Antepartum Hemorrhage", "نزف ما قبل الولادة"], ["pih", "Pregnancy-Induced Hypertension", "ارتفاع ضغط الدم المصاحب للحمل"], ["anemia", "Anemia in Pregnancy", "فقر الدم في الحمل"], ["gdm", "Gestational Diabetes", "سكري الحمل"]]),
      S("labor", "clock", "Normal Labor & Delivery", "المخاض والولادة الطبيعية", [
        ["onset", "Theories of Labor Onset & Signs of Labor", "نظريات بدء المخاض وعلاماته"], ["components", "Components of Labor", "عناصر المخاض"], ["stages", "Stages of Labor & Nursing Management", "مراحل المخاض والرعاية التمريضية"], ["partograph", "Using the Partograph", "استخدام البارتوغراف"]]),
      S("labor-comp", "ambulance", "Complicated Labor & Obstetric Operations", "المخاض المعقد والعمليات التوليدية", [
        ["complicated", "Nursing Management of Complicated Labor", "رعاية المخاض المعقد"], ["episiotomy", "Episiotomy & Forceps Delivery", "شق العجان والولادة بالملقط"], ["cs", "Cesarean Section", "العملية القيصرية"], ["induction", "Induction & Augmentation of Labor", "تحريض المخاض وتعزيزه"]]),
      S("fp", "shield", "Family Planning", "تنظيم الأسرة", [
        ["hormonal", "Hormonal Contraceptives", "موانع الحمل الهرمونية"], ["non-hormonal", "Non-Hormonal & Surgical Contraception", "موانع الحمل غير الهرمونية والجراحية"]]),
      S("puerperium", "bed", "Puerperium", "النفاس", [
        ["normal", "Normal Puerperium", "النفاس الطبيعي"], ["pph", "Postpartum Hemorrhage", "نزف ما بعد الولادة"], ["infection", "Puerperal Infection", "حمى النفاس"]]),
      S("neonatal", "baby", "Neonatal Nursing Care", "رعاية حديث الولادة", [
        ["adaptation", "Physiological Changes & Adaptation of the Newborn", "التغيرات الفسيولوجية وتكيف الوليد"], ["care", "Assessment, Immediate & Daily Newborn Care", "تقييم الوليد ورعايته الفورية واليومية"]]),
      S("gyn", "target", "Gynecological Disorders", "الاضطرابات النسائية", [
        ["common", "Common Gynecological Disorders", "الاضطرابات النسائية الشائعة"], ["tumors", "Benign & Malignant Tumors of the Genital Tract", "أورام الجهاز التناسلي الحميدة والخبيثة"], ["menstrual-disorders", "Menstrual Disorders", "اضطرابات الدورة الشهرية"], ["infertility", "Infertility", "العقم"]])
    ],
    practical: [
      S("p-lab", "lab", "Lab Skills", "المهارات المختبرية", [
        ["ga-edd", "Gestational Age & EDD", "حساب عمر الحمل وموعد الولادة"], ["exam", "Physical & Obstetrical Examination", "الفحص الجسدي والتوليدي"],
        ["contractions-fhr", "Uterine Contractions & Fetal Heart Rate", "تقلصات الرحم ونبض الجنين"], ["catheter-ve", "Female Catheterization & Vaginal Examination", "قسطرة الأنثى والفحص المهبلي"]]),
      S("p-notes", "book", "Daily Nursing Notes & Care Plans", "الملاحظات اليومية وخطط الرعاية", [
        ["antenatal-labor", "Prenatal, Labor & Induction Notes", "ملاحظات الحمل والمخاض والتحريض"], ["postpartum-cs", "Postpartum & Cesarean Notes", "ملاحظات النفاس والقيصرية"],
        ["apgar", "Apgar Score & Newborn Note", "مقياس أبغار وملاحظة الوليد"], ["gyn-miscarriage", "Gynecology & Miscarriage Notes", "ملاحظات النسائية والإجهاض"]]),
      S("p-cases", "steth", "Case Scenarios", "سيناريوهات الحالات", [
        ["hypertension", "Hypertension in Pregnancy", "ارتفاع الضغط أثناء الحمل"], ["diabetes", "Diabetes in Pregnancy", "السكري أثناء الحمل"], ["anemia", "Anemia", "فقر الدم"],
        ["placenta", "Placenta Previa & Abruption", "المشيمة المنزاحة والانفصال"], ["nvd", "Normal Vaginal Delivery", "الولادة المهبلية الطبيعية"], ["cs", "Cesarean Delivery", "الولادة القيصرية"], ["postpartum", "Postpartum Period", "فترة النفاس"]])
    ] },
  { id: "community", icon: "people", en: "Community Health Nursing", ar: "تمريض صحة المجتمع",
    theory: [
      S("intro", "people", "Introduction to Community Health Nursing", "مقدمة في تمريض صحة المجتمع", [
        ["definitions", "Definitions & the Mission of CHN", "التعاريف ورسالة تمريض المجتمع"], ["characteristics", "Characteristics & Components of Community Health", "خصائص ومكونات صحة المجتمع"], ["roles", "Standards, Roles & Functions of the CHN", "المعايير وأدوار ووظائف ممرض المجتمع"]]),
      S("dimensions", "target", "Dimensions of Community Health Nursing", "أبعاد تمريض صحة المجتمع", [
        ["dimensions", "Dimensions of Health, Health Care & Nursing", "أبعاد الصحة والرعاية الصحية والتمريض"]]),
      S("assessment", "lab", "Community Assessment", "تقييم المجتمع", [
        ["approaches", "Approaches, Functions & Principles", "المداخل والوظائف والمبادئ"], ["methods", "Data Sources, Needs Assessment & Methods", "مصادر البيانات وتقييم الاحتياجات والطرق"]]),
      S("approaches", "hand", "Approaches to Community Health", "مداخل صحة المجتمع", [
        ["promotion", "Health Promotion", "تعزيز الصحة"], ["case-management", "Case Management & Empowerment", "إدارة الحالة والتمكين"]]),
      S("phc", "home", "Primary Health Care", "الرعاية الصحية الأولية", [
        ["phc", "Primary Health Care: Definition, Principles & Elements", "الرعاية الأولية: التعريف والمبادئ والعناصر"]]),
      S("family", "home", "Family Health Services", "خدمات صحة الأسرة", [
        ["family-basics", "Family: Definitions, Types, Structure & Function", "الأسرة: التعاريف والأنواع والبنية والوظيفة"], ["development", "Family Development & Theories", "تطور الأسرة ونظرياتها"],
        ["family-assessment", "Family Assessment, Interviewing & Care Giving", "تقييم الأسرة والمقابلة وتقديم الرعاية"], ["crisis", "Family Crisis, Culture, Ethics & Health Promotion", "أزمات الأسرة والثقافة والأخلاقيات وتعزيز الصحة"]]),
      S("aggregates", "people", "Health Care of Aggregates", "رعاية الفئات السكانية", [
        ["children", "Children & Adolescents", "الأطفال والمراهقون"], ["women-men", "Women & Men", "النساء والرجال"], ["elderly", "Care of the Elderly", "رعاية كبار السن"]]),
      S("mch", "mother", "Maternal & Child Health Services", "خدمات صحة الأم والطفل", [
        ["mch", "MCH: Definition, Objectives & Services", "صحة الأم والطفل: التعريف والأهداف والخدمات"]]),
      S("school", "school", "School Health Nursing", "تمريض الصحة المدرسية", [
        ["school", "School Health Program & the School Nurse", "البرنامج الصحي المدرسي والممرض المدرسي"]]),
      S("occupational", "factory", "Occupational Health Nursing", "تمريض الصحة المهنية", [
        ["occupational", "Occupational Health & the Occupational Nurse", "الصحة المهنية والممرض المهني"]]),
      S("home", "home", "Home Visits & Home Health Care", "الزيارات المنزلية والرعاية المنزلية", [
        ["home-visit", "Home Visits", "الزيارات المنزلية"], ["home-care", "Home Health Care Nursing", "تمريض الرعاية الصحية المنزلية"]]),
      S("environment", "leaf", "Environmental Health & Safety", "الصحة البيئية والسلامة", [
        ["environment", "Environmental Health & Global Concerns", "الصحة البيئية والقضايا العالمية"]])
    ],
    practical: [
      S("p-phc", "home", "Primary Health Care Center", "مركز الرعاية الصحية الأولية", [
        ["phc-intro", "Introduction to the PHC Center", "مقدمة عن مركز الرعاية الأولية"], ["immunization", "Immunization", "التلقيح"], ["antenatal", "Antenatal Care", "رعاية الحامل"], ["mnch", "Maternal, Newborn & Child Health", "صحة الأم والوليد والطفل"]]),
      S("p-school", "school", "School Health", "الصحة المدرسية", [
        ["environment", "Assessment of the School Environment", "تقييم البيئة المدرسية"], ["program-child", "School Program & Assessment of the School Child", "البرنامج المدرسي وتقييم الطفل"]])
    ] },
  { id: "psych", icon: "mind", en: "Psychiatric Mental Health Nursing", ar: "تمريض الصحة النفسية والعقلية",
    theory: [
      S("foundations", "book", "Foundations of Psychiatric Nursing", "أسس التمريض النفسي", [
        ["history", "History of Mental Illness & Introduction to Psychiatric Nursing", "تاريخ المرض العقلي ومقدمة التمريض النفسي"], ["concepts", "Mental Health, Mental Illness & Diagnosis", "الصحة والمرض العقلي والتشخيص"], ["legal", "Legal & Ethical Issues", "القضايا القانونية والأخلاقية"]]),
      S("theories", "brain", "Neurobiological & Psychosocial Theories", "النظريات العصبية والنفسية الاجتماعية", [
        ["neurobiological", "Neurobiological Theories", "النظريات العصبية الحيوية"], ["psychosocial", "Psychosocial Theories", "النظريات النفسية الاجتماعية"]]),
      S("relationship", "chat", "The Nurse–Client Relationship", "العلاقة بين الممرض والمريض", [
        ["therapeutic", "The Therapeutic Relationship", "العلاقة العلاجية"]]),
      S("trauma", "alert", "Trauma & Stressor-Related Disorders", "اضطرابات الصدمة والضغوط", [
        ["ptsd", "Post-Traumatic Stress Disorder & Related Disorders", "اضطراب ما بعد الصدمة والاضطرابات المرتبطة"], ["dissociative", "Dissociative Disorders", "الاضطرابات التفارقية"]]),
      S("anxiety", "mind", "Anxiety & Related Disorders", "القلق واضطراباته", [
        ["anxiety", "Anxiety, Stress & Levels of Anxiety", "القلق والضغط ومستويات القلق"], ["panic-phobia", "Panic Disorder & Phobias", "اضطراب الهلع والرهاب"], ["gad", "Generalized Anxiety Disorder", "اضطراب القلق العام"]]),
      S("ocd", "target", "Obsessive–Compulsive & Related Disorders", "الوسواس القهري والاضطرابات المرتبطة", [
        ["ocd", "Obsessive–Compulsive Disorder", "اضطراب الوسواس القهري"]]),
      S("schizo", "brain", "Schizophrenia Spectrum Disorders", "طيف الفصام", [
        ["schizophrenia", "Schizophrenia", "الفصام"], ["schizo-care", "Treatment & Nursing Intervention in Schizophrenia", "علاج الفصام والتدخل التمريضي"]]),
      S("mood", "mind", "Mood Disorders & Suicide", "اضطرابات المزاج والانتحار", [
        ["depression", "Major Depressive Disorder", "الاكتئاب الشديد"], ["bipolar", "Bipolar Disorders", "الاضطراب ثنائي القطب"], ["suicide", "Suicide", "الانتحار"]]),
      S("addiction", "pill", "Addiction", "الإدمان", [
        ["addiction", "Substance Abuse & Addiction", "تعاطي المواد والإدمان"]]),
      S("cognitive", "clock", "Cognitive Disorders", "الاضطرابات المعرفية", [
        ["delirium", "Delirium", "الهذيان"], ["dementia", "Dementia", "الخرف"]]),
      S("somatic", "steth", "Somatic Symptom Illnesses", "اضطرابات الأعراض الجسدية", [
        ["somatic", "Somatic Symptom Illnesses", "اضطرابات الأعراض الجسدية"]]),
      S("personality", "people", "Personality Disorders (Seminar)", "اضطرابات الشخصية (سمنار)", [
        ["cluster-a", "Cluster A: Paranoid, Schizoid, Schizotypal", "المجموعة أ"], ["cluster-b", "Cluster B: Antisocial, Borderline, Histrionic, Narcissistic", "المجموعة ب"], ["cluster-c", "Cluster C: Avoidant, Dependent, Obsessive–Compulsive", "المجموعة ج"]]),
      S("disruptive", "alert", "Disruptive Behavior Disorders (Seminar)", "اضطرابات السلوك التخريبي (سمنار)", [
        ["disruptive", "ODD, Intermittent Explosive & Conduct Disorder", "العناد الشارد والانفجاري المتقطع واضطراب السلوك"]])
    ],
    practical: [
      S("p-foundations", "book", "Foundations & Nursing Process", "الأسس والعملية التمريضية", [
        ["symptoms", "Common Psychiatric Symptoms & Nursing Diagnosis", "الأعراض النفسية الشائعة والتشخيص التمريضي"], ["process", "Nursing Process in Psychiatric Nursing", "العملية التمريضية في التمريض النفسي"]]),
      S("p-treatment", "pill", "Treatment Modalities", "طرق العلاج", [
        ["ect", "Electroconvulsive Therapy (ECT)", "العلاج بالصدمة الكهربائية"], ["psychopharm", "Psychopharmacology", "علم الأدوية النفسية"], ["psychotherapy", "Psychotherapy & Crisis Intervention", "العلاج النفسي والتدخل في الأزمات"]]),
      S("p-communication", "chat", "Therapeutic Communication", "التواصل العلاجي", [
        ["communication", "Therapeutic & Non-Therapeutic Communication", "التواصل العلاجي وغير العلاجي"]])
    ] }
  ];
})();
NS.reg = function (sid, sys, tid, obj) {
  NS.data[sid] = NS.data[sid] || {};
  NS.data[sid][sys] = NS.data[sid][sys] || {};
  NS.data[sid][sys][tid] = obj;
};

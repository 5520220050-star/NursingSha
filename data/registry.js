/* شبكة تمريضيون التعليمية — subject & unit registry (الامتحان التقويمي syllabus) */
window.NS = window.NS || { data: {} };
NS.subjects = [
  {
    id: "adult", icon: "heart", stage: { en: "2nd Stage", ar: "المرحلة الثانية" },
    en: "Adult Nursing", ar: "تمريض البالغين",
    theory: [
      { id: "neuro", en: "Nervous System Disorders", ar: "اضطرابات الجهاز العصبي", note: { en: "Assessment, ICP, brain abscess, tumor, head injury, meningitis, epilepsy, unconscious patient", ar: "التقييم، الضغط داخل القحف، خراج وأورام الدماغ، إصابات الرأس، التهاب السحايا، الصرع، المريض فاقد الوعي" } },
      { id: "renal", en: "Renal & Urinary Disorders", ar: "اضطرابات الكلى والمسالك البولية", note: { en: "UTI, renal stone, BPH, bladder cancer, ESRD, dialysis & transplant", ar: "التهاب المسالك، حصى الكلى، تضخم البروستات، سرطان المثانة، الفشل الكلوي، الغسيل والزراعة" } },
      { id: "msk", en: "Musculoskeletal Disorders", ar: "اضطرابات الجهاز العضلي الهيكلي", note: { en: "Fracture, amputation, osteomyelitis, osteoporosis, arthritis, joint replacement", ar: "الكسور، البتر، التهاب العظم والنقي، هشاشة العظام، التهاب المفاصل، استبدال المفصل" } },
      { id: "cardio", en: "Cardiovascular Disorders", ar: "اضطرابات القلب والأوعية", note: { en: "Assessment, mitral & aortic valve disease, congenital heart disease (ASD, VSD, TOF)", ar: "التقييم، أمراض الصمام التاجي والأبهري، العيوب الخلقية" } },
      { id: "integ", en: "Integumentary Disorders", ar: "اضطرابات الجلد", note: { en: "Skin assessment, dermatitis, autoimmune skin disease", ar: "تقييم الجلد، التهاب الجلد، أمراض المناعة الذاتية" } },
      { id: "ent", en: "Ear, Nose & Throat (ENT)", ar: "الأنف والأذن والحنجرة", note: { en: "Sinusitis, tonsillitis, otitis media, cancer of the larynx", ar: "التهاب الجيوب، اللوزتين، الأذن الوسطى، سرطان الحنجرة" } },
      { id: "eye", en: "Ophthalmic Disorders", ar: "اضطرابات العين", note: { en: "Eye assessment, cataract, glaucoma", ar: "تقييم العين، الساد (الماء الأبيض)، الزرق (الماء الأزرق)" } }
    ],
    practical: [
      { id: "p-neuro", en: "Neurology: Head Injury & Brain Tumor", ar: "الأعصاب: إصابة الرأس وورم الدماغ" },
      { id: "p-uro", en: "Urology: Renal Stone & Bladder Cancer", ar: "المسالك: حصى الكلى وسرطان المثانة" },
      { id: "p-ortho", en: "Orthopedics: Fracture & Osteomyelitis", ar: "العظام: الكسور والتهاب العظم" },
      { id: "p-cardio", en: "Cardiology: Valvular Heart Disease", ar: "القلبية: أمراض الصمامات" }
    ]
  },
  {
    id: "micro", icon: "micro", stage: { en: "Microbiology II", ar: "الأحياء المجهرية ٢" },
    en: "Microbiology for Nurses", ar: "الأحياء المجهرية للممرضين",
    theory: [
      { id: "para-intro", en: "Introduction to Parasitology & Protozoa", ar: "مقدمة علم الطفيليات والأوالي" },
      { id: "intestinal", en: "Intestinal & Atrial Protozoa", ar: "الأوالي المعوية والتناسلية", note: { en: "E. histolytica, E. coli, Balantidium, Giardia, Trichomonas", ar: "الأميبا، البلانتيديوم، الجيارديا، المشعرات" } },
      { id: "flagellates", en: "Blood & Tissue Flagellates", ar: "سوطيات الدم والأنسجة", note: { en: "Leishmania, Trypanosoma", ar: "الليشمانيا، المثقبيات" } },
      { id: "apicomplexa", en: "Apicomplexa: Plasmodium & Toxoplasma", ar: "البوغيات: البلازموديوم والمقوسات" },
      { id: "cestodes", en: "Helminths I: Cestodes (Tapeworms)", ar: "الديدان ١: الشريطيات" },
      { id: "trematodes", en: "Helminths II: Trematodes (Flukes)", ar: "الديدان ٢: المثقوبات" },
      { id: "nematodes", en: "Helminths III: Nematodes", ar: "الديدان ٣: الخيطيات (الأسطوانية)" },
      { id: "virology", en: "General Virology", ar: "علم الفيروسات العام" },
      { id: "viral-1", en: "Measles, AIDS & Influenza", ar: "الحصبة والإيدز والإنفلونزا" },
      { id: "viral-2", en: "Hepatitis Viruses & Coronavirus", ar: "فيروسات الكبد وكورونا" },
      { id: "viral-3", en: "Mumps, Rubella, Rota, Polio, Herpes & CMV", ar: "النكاف، الحصبة الألمانية، الروتا، شلل الأطفال، الهربس، CMV" }
    ],
    practical: [
      { id: "p-protozoa", en: "Lab Diagnosis of Protozoa", ar: "التشخيص المختبري للأوالي" },
      { id: "p-helminths", en: "Lab Diagnosis of Helminths", ar: "التشخيص المختبري للديدان" }
    ]
  },
  {
    id: "peds", icon: "baby", stage: { en: "3rd Stage", ar: "المرحلة الثالثة" },
    en: "Pediatric Nursing", ar: "تمريض الأطفال",
    theory: [
      { id: "intro", en: "Child Health Nursing & Immunization", ar: "تمريض صحة الطفل والتلقيح" },
      { id: "assessment", en: "Health Assessment of the Child", ar: "التقييم الصحي للطفل" },
      { id: "newborn", en: "Newborn & High-Risk Neonate", ar: "حديث الولادة والخديج عالي الخطورة" },
      { id: "resp", en: "Respiratory Dysfunction", ar: "اضطرابات الجهاز التنفسي" },
      { id: "gu", en: "Genitourinary Dysfunction", ar: "اضطرابات الجهاز البولي التناسلي" },
      { id: "gi", en: "Gastrointestinal Dysfunction", ar: "اضطرابات الجهاز الهضمي" },
      { id: "blood", en: "Blood Dysfunction", ar: "اضطرابات الدم" },
      { id: "cardiac", en: "Cardiovascular Dysfunction", ar: "اضطرابات القلب" },
      { id: "neuro", en: "Neurological Dysfunction", ar: "اضطرابات الجهاز العصبي" },
      { id: "endo", en: "Endocrine Dysfunction", ar: "اضطرابات الغدد الصماء" }
    ],
    practical: [
      { id: "p-nicu", en: "NICU: Jaundice & RDS", ar: "الخدج: اليرقان وضائقة التنفس" },
      { id: "p-blood", en: "Blood Ward: Thalassemia, Leukemia, Hemophilia", ar: "ردهة الدم: الثلاسيميا، اللوكيميا، الهيموفيليا" },
      { id: "p-medical", en: "Medical Ward: Pneumonia & Diarrhea/Dehydration", ar: "الباطنية: ذات الرئة والإسهال والجفاف" },
      { id: "p-surgical", en: "Surgical Ward: Hirschsprung & Pyloric Stenosis", ar: "الجراحية: هيرشسبرونغ وتضيق البواب" }
    ]
  },
  {
    id: "maternity", icon: "mother", stage: { en: "3rd Stage", ar: "المرحلة الثالثة" },
    en: "Maternity & Neonatal Nursing", ar: "تمريض الأم والوليد",
    theory: [
      { id: "repro", en: "Reproductive Anatomy, Physiology & Menstrual Cycle", ar: "تشريح ووظائف الجهاز التناسلي والدورة الشهرية" },
      { id: "pregnancy", en: "Normal Pregnancy & Prenatal Care", ar: "الحمل الطبيعي ورعاية ما قبل الولادة" },
      { id: "preg-comp", en: "Complications of Pregnancy", ar: "مضاعفات الحمل", note: { en: "APH, PIH, anemia, gestational diabetes", ar: "نزف ما قبل الولادة، ارتفاع الضغط، فقر الدم، سكري الحمل" } },
      { id: "labor", en: "Normal Labor & Delivery", ar: "المخاض والولادة الطبيعية" },
      { id: "labor-comp", en: "Complicated Labor & Obstetric Operations", ar: "المخاض المعقد والعمليات التوليدية" },
      { id: "fp", en: "Family Planning", ar: "تنظيم الأسرة" },
      { id: "puerperium", en: "Puerperium (Normal & Complicated)", ar: "النفاس الطبيعي والمعقد" },
      { id: "neonatal", en: "Neonatal Nursing Care", ar: "رعاية حديث الولادة" },
      { id: "gyn", en: "Gynecological Disorders & Infertility", ar: "الاضطرابات النسائية والعقم" }
    ],
    practical: [
      { id: "p-lab", en: "Lab Skills: GA/EDD, Exams, FHR, Contractions", ar: "المهارات: عمر الحمل، الفحوصات، نبض الجنين، التقلصات" },
      { id: "p-notes", en: "Daily Nursing Notes & Care Plans", ar: "الملاحظات اليومية وخطط الرعاية" },
      { id: "p-cases", en: "Case Scenarios", ar: "سيناريوهات الحالات" }
    ]
  },
  {
    id: "community", icon: "people", stage: { en: "4th Stage", ar: "المرحلة الرابعة" },
    en: "Community Health Nursing", ar: "تمريض صحة المجتمع",
    theory: [
      { id: "intro", en: "Introduction to Community Health Nursing", ar: "مقدمة في تمريض صحة المجتمع" },
      { id: "dimensions", en: "Dimensions of Community Health Nursing", ar: "أبعاد تمريض صحة المجتمع" },
      { id: "assessment", en: "Community Assessment", ar: "تقييم المجتمع" },
      { id: "approaches", en: "Approaches to Community Health", ar: "مداخل صحة المجتمع" },
      { id: "phc", en: "Primary Health Care (PHC)", ar: "الرعاية الصحية الأولية" },
      { id: "family", en: "Family Health Services", ar: "خدمات صحة الأسرة" },
      { id: "aggregates", en: "Health Care of Aggregates", ar: "رعاية الفئات السكانية", note: { en: "Children, adolescents, women, men, elderly", ar: "الأطفال، المراهقون، النساء، الرجال، كبار السن" } },
      { id: "mch", en: "Maternal & Child Health Services", ar: "خدمات صحة الأم والطفل" },
      { id: "school", en: "School Health Nursing", ar: "تمريض الصحة المدرسية" },
      { id: "occupational", en: "Occupational Health Nursing", ar: "تمريض الصحة المهنية" },
      { id: "home", en: "Home Visits & Home Health Care", ar: "الزيارات المنزلية والرعاية المنزلية" },
      { id: "environment", en: "Environmental Health & Safety", ar: "الصحة البيئية والسلامة" }
    ],
    practical: [
      { id: "p-phc", en: "PHC Center: Immunization, Antenatal & MNCH", ar: "مركز الرعاية الأولية: التلقيح، رعاية الحامل، صحة الأم والطفل" },
      { id: "p-school", en: "School Health Assessment", ar: "تقييم الصحة المدرسية" }
    ]
  },
  {
    id: "psych", icon: "mind", stage: { en: "4th Stage", ar: "المرحلة الرابعة" },
    en: "Psychiatric Mental Health Nursing", ar: "تمريض الصحة النفسية والعقلية",
    theory: [
      { id: "foundations", en: "Foundations of Psychiatric Nursing", ar: "أسس التمريض النفسي" },
      { id: "theories", en: "Neurobiological & Psychosocial Theories", ar: "النظريات العصبية الحيوية والنفسية الاجتماعية" },
      { id: "relationship", en: "The Nurse–Client Relationship", ar: "العلاقة العلاجية بين الممرض والمريض" },
      { id: "trauma", en: "Trauma & Stressor-Related Disorders", ar: "اضطرابات الصدمة والضغوط" },
      { id: "anxiety", en: "Anxiety & Anxiety-Related Disorders", ar: "القلق واضطراباته" },
      { id: "ocd", en: "Obsessive–Compulsive & Related Disorders", ar: "الوسواس القهري والاضطرابات المرتبطة" },
      { id: "schizo", en: "Schizophrenia Spectrum Disorders", ar: "طيف الفصام" },
      { id: "mood", en: "Mood Disorders & Suicide", ar: "اضطرابات المزاج والانتحار" },
      { id: "addiction", en: "Addiction", ar: "الإدمان" },
      { id: "cognitive", en: "Cognitive Disorders: Delirium & Dementia", ar: "الاضطرابات المعرفية: الهذيان والخرف" },
      { id: "somatic", en: "Somatic Symptom Illnesses", ar: "اضطرابات الأعراض الجسدية" },
      { id: "personality", en: "Personality Disorders (Seminar)", ar: "اضطرابات الشخصية (سمنار)" },
      { id: "disruptive", en: "Disruptive Behavior Disorders (Seminar)", ar: "اضطرابات السلوك التخريبي (سمنار)" }
    ],
    practical: [
      { id: "p-process", en: "Psychiatric Symptoms & the Nursing Process", ar: "الأعراض النفسية والعملية التمريضية" },
      { id: "p-treatment", en: "Treatment Modalities: ECT, Drugs, Crisis", ar: "طرق العلاج: الصدمة الكهربائية، الأدوية، التدخل في الأزمات" },
      { id: "p-communication", en: "Therapeutic Communication", ar: "التواصل العلاجي" }
    ]
  }
];
NS.reg = function (sid, units) {
  NS.data[sid] = Object.assign(NS.data[sid] || {}, units);
};

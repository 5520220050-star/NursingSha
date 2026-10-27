NS.reg("adult", "neuro", "abscess", {
intro: {
  en: "A **brain abscess** is a localized collection of **pus within the brain tissue**, surrounded by a capsule. It behaves like a growing **space-occupying lesion** (raising intracranial pressure) and like a **serious infection** at the same time. Although uncommon, it is life-threatening, and early recognition, long antibiotic therapy and surgical drainage greatly improve survival.",
  ar: "**خراج الدماغ** تجمع موضعي **للقيح داخل نسيج الدماغ** محاط بمحفظة. يتصرف كأنه **آفة شاغلة للحيز** تكبر (ترفع الضغط داخل القحف) و**التهاب خطير** في الوقت نفسه. ورغم أنه غير شائع فهو مهدد للحياة، والتشخيص المبكر والمضادات الحيوية الطويلة والتصريف الجراحي تحسّن النجاة كثيراً."
},
sections: [
{ h: { en: "Causes and risk factors", ar: "الأسباب وعوامل الخطورة" }, b: [
  { t: "table", h: ["Route of infection", "Examples", "Usual location"], r: [
    ["**Spread from a nearby (contiguous) infection** — most common", "**Otitis media and mastoiditis**, **paranasal sinusitis**, dental infection", "Temporal lobe & cerebellum (ear); frontal lobe (sinuses, teeth)"],
    ["**Hematogenous (through the blood)**", "**Infective endocarditis**, lung abscess/bronchiectasis, congenital cyanotic heart disease (right-to-left shunt)", "Often multiple; territory of middle cerebral artery"],
    ["**Direct inoculation**", "**Penetrating head injury**, compound skull fracture, after neurosurgery", "At the site of injury/surgery"],
    ["**Unknown (cryptogenic)**", "No source found in some patients", "—"]],
    ar: { h: ["طريق العدوى", "الأمثلة", "المكان المعتاد"], r: [
    ["**الانتشار من التهاب قريب** — الأشيع", "**التهاب الأذن الوسطى والخشاء**، **الجيوب الأنفية**، الأسنان", "الفص الصدغي والمخيخ (الأذن)؛ الفص الجبهي (الجيوب والأسنان)"],
    ["**عن طريق الدم**", "**التهاب شغاف القلب**، خراج الرئة، أمراض القلب الخلقية المزرقة", "غالباً متعددة"],
    ["**الإدخال المباشر**", "**الإصابات النافذة**، الكسور المفتوحة، بعد جراحة الأعصاب", "في مكان الإصابة"],
    ["**مجهول السبب**", "لا يُعرف مصدر", "—"]] } },
  { t: "cards", items: [
    { i: "shield", en: "Immunosuppression", d: "HIV/AIDS, transplant, chemotherapy, long-term steroids — fungi & Toxoplasma", ar: "ضعف المناعة: الإيدز، الزرع، الكيمياوي، الكورتيزون" },
    { i: "heart", en: "Cyanotic heart disease", d: "Blood bypasses the lung filter", ar: "أمراض القلب المزرقة" },
    { i: "syringe", en: "IV drug use", d: "Endocarditis & bacteremia", ar: "تعاطي المخدرات وريدياً" },
    { i: "drop", en: "Diabetes mellitus", ar: "السكري" } ] },
  { t: "p", en: "Common organisms: **Streptococci** (especially from sinuses, teeth and ears), **Staphylococcus aureus** (trauma, surgery, endocarditis), **anaerobes** and gram-negative bacilli; in immunocompromised patients **fungi** (Aspergillus, Candida), **Toxoplasma** and Nocardia.",
    ar: "أهم المسببات: **المكورات العقدية** (من الجيوب والأسنان والأذن)، **العنقودية الذهبية** (الإصابات والجراحة والتهاب الشغاف)، **اللاهوائيات** والعصيات سالبة الغرام؛ وعند ضعاف المناعة **الفطريات** و**المقوسات**." }
]},
{ h: { en: "Pathophysiology", ar: "الفيزيولوجيا المرضية" }, b: [
  { t: "flow", steps: [
    { en: "Bacteria reach the brain → **cerebritis**: local inflammation and edema (first days)", ar: "تصل البكتيريا للدماغ ← **التهاب الدماغ الموضعي** مع وذمة (الأيام الأولى)" },
    { en: "Center becomes **necrotic and liquefies** into pus", ar: "يتنخر المركز ويتميع إلى **قيح**" },
    { en: "A **fibrous capsule** forms around the pus over ~2 weeks", ar: "تتكون **محفظة ليفية** حول القيح خلال أسبوعين تقريباً" },
    { en: "Abscess + surrounding edema act as a **mass** → **↑ ICP**, compression, herniation", ar: "الخراج والوذمة حوله يعملان **ككتلة** ← **ارتفاع الضغط** وانضغاط وانفتاق" },
    { en: "Rupture into the ventricles → **ventriculitis** — very high mortality", ar: "الانفجار في البطينات ← **التهاب البطينات** — وفيات عالية جداً" } ] }
]},
{ h: { en: "Clinical manifestations", ar: "المظاهر السريرية" }, b: [
  { t: "p", en: "Symptoms come from **increased ICP**, **focal brain damage** and **infection**. The classic triad of **headache, fever and focal neurological deficit** is present in fewer than half of patients, so the absence of fever does not rule out an abscess.",
    ar: "تأتي الأعراض من **ارتفاع الضغط داخل القحف**، **التلف الموضعي للدماغ** و**الالتهاب**. الثالوث الكلاسيكي **صداع وحمى وعجز عصبي موضعي** يوجد عند أقل من نصف المرضى، لذا غياب الحمى لا ينفي الخراج." },
  { t: "cards", items: [
    { i: "brain", en: "Headache", d: "**Most common** symptom; often severe, worse in the morning, not relieved by analgesics", ar: "الصداع: **الأشيع**، شديد ويشتد صباحاً" },
    { i: "thermo", en: "Fever, chills", d: "Present in only about half", ar: "حمى ورعشة عند نصفهم تقريباً" },
    { i: "alert", en: "Signs of ↑ ICP", d: "Vomiting, drowsiness, confusion, papilledema", ar: "علامات ارتفاع الضغط: تقيؤ، نعاس، تشوش" },
    { i: "target", en: "Focal deficits", d: "Hemiparesis, aphasia, visual field loss — depend on location", ar: "عجز موضعي: خزل، حبسة، فقدان مجال بصري" },
    { i: "x", en: "Seizures", d: "New-onset focal or generalized", ar: "نوبات صرع جديدة" },
    { i: "bone", en: "Neck stiffness", d: "If near the meninges or ruptured", ar: "تيبس الرقبة" } ] },
  { t: "table", h: ["Location", "Typical focal signs"], r: [
    ["**Frontal lobe**", "Drowsiness, inattention, personality change, hemiparesis, expressive aphasia"],
    ["**Temporal lobe**", "Receptive aphasia (dominant side), upper visual field defect, seizures"],
    ["**Cerebellum**", "Ataxia, nystagmus, vomiting, dizziness, intention tremor"]],
    ar: { h: ["المكان", "العلامات الموضعية"], r: [
    ["**الفص الجبهي**", "نعاس، عدم انتباه، تغير الشخصية، خزل، حبسة تعبيرية"],
    ["**الفص الصدغي**", "حبسة استقبالية، عيب في المجال البصري العلوي، نوبات"],
    ["**المخيخ**", "ترنح، رأرأة، تقيؤ، دوخة، رعشة قصدية"]] } }
]},
{ h: { en: "Diagnostic evaluation", ar: "التشخيص" }, b: [
  { t: "list", en: [
    "**MRI (best) or CT with contrast**: a **ring-enhancing lesion** with surrounding edema; shows number, size and location",
    "**CT- or stereotactic-guided aspiration** of pus: Gram stain and culture (aerobic, anaerobic, fungal) to identify the organism",
    "**Blood cultures**, CBC (WBC may be normal or high), ESR/CRP",
    "**Search for the source**: ear, sinus and dental examination, echocardiogram (endocarditis), chest X-ray",
    "**Lumbar puncture is usually contraindicated** — risk of herniation and it rarely identifies the organism"],
    ar: [
    "**الرنين (الأفضل) أو المفراس مع الصبغة**: **آفة حلقية التعزيز** مع وذمة حولها",
    "**سحب القيح الموجه** بالمفراس: صبغة غرام وزرع لمعرفة المسبب",
    "**زرع الدم**، صورة الدم، سرعة الترسيب والبروتين التفاعلي",
    "**البحث عن المصدر**: الأذن، الجيوب، الأسنان، إيكو القلب، أشعة الصدر",
    "**البزل القطني ممنوع غالباً** — خطر الانفتاق ونادراً ما يحدد المسبب"] },
  { t: "warn", en: "Never assist with a lumbar puncture in a patient with a suspected brain abscess or papilledema unless the provider has confirmed it is safe on imaging — **herniation can be fatal**.",
    ar: "لا تساعد في البزل القطني لمريض يُشك بخراج الدماغ أو لديه وذمة الحليمة إلا بعد تأكيد الطبيب بالأشعة — **الانفتاق قد يكون قاتلاً**." }
]},
{ h: { en: "Medical and surgical management", ar: "العلاج الطبي والجراحي" }, b: [
  { t: "table", h: ["Treatment", "Details"], r: [
    ["**IV antibiotics**", "High doses that cross the blood–brain barrier (e.g., third-generation cephalosporin + **metronidazole** ± vancomycin), adjusted to culture; usually **6–8 weeks**, sometimes followed by oral therapy"],
    ["**Surgical drainage**", "**Stereotactic needle aspiration** through a burr hole (most common) or **excision via craniotomy** for large, multiloculated or superficial abscesses; drains also give a specimen for culture"],
    ["**Corticosteroids** (dexamethasone)", "Short course for marked edema/mass effect — may reduce antibiotic penetration, so used selectively"],
    ["**Anticonvulsants**", "Prevent or treat seizures (often continued for months)"],
    ["**Osmotic therapy**", "Mannitol/hypertonic saline for raised ICP"],
    ["**Treat the source**", "Ear (mastoidectomy), sinus or dental surgery; treat endocarditis"],
    ["**Follow-up imaging**", "Repeated CT/MRI to confirm the abscess is shrinking"]],
    ar: { h: ["العلاج", "التفاصيل"], r: [
    ["**المضادات الحيوية الوريدية**", "جرعات عالية تعبر الحاجز الدموي الدماغي (سيفالوسبورين الجيل الثالث + **ميترونيدازول** ± فانكومايسين)، عادة **6–8 أسابيع**"],
    ["**التصريف الجراحي**", "**السحب بالإبرة الموجهة** عبر ثقب في الجمجمة (الأشيع) أو **الاستئصال بفتح الجمجمة** للخراج الكبير"],
    ["**الكورتيزون**", "فترة قصيرة للوذمة الشديدة، ويُستخدم بحذر"],
    ["**مضادات الاختلاج**", "للوقاية من النوبات وعلاجها"],
    ["**العلاج الأسموزي**", "المانيتول للضغط المرتفع"],
    ["**علاج المصدر**", "جراحة الأذن أو الجيوب أو الأسنان وعلاج التهاب الشغاف"],
    ["**الأشعة المتكررة**", "للتأكد من صغر حجم الخراج"]] } }
]},
{ h: { en: "Nursing management", ar: "الرعاية التمريضية" }, b: [
  { t: "table", h: ["Nursing diagnosis", "Key interventions"], r: [
    ["**Risk for ineffective cerebral tissue perfusion / decreased intracranial adaptive capacity** r/t abscess & edema", "Frequent neuro checks (GCS, pupils, limbs); HOB 30°, head midline; avoid Valsalva; report LOC change, new deficits, Cushing's signs"],
    ["**Hyperthermia** r/t infection", "Temperature every 2–4 h; antipyretics, cooling; fluids; prevent shivering"],
    ["**Risk for injury** r/t seizures, confusion", "Seizure precautions (padded rails, suction, O₂, bed low); anticonvulsants on time; supervise ambulation"],
    ["**Acute pain** (headache)", "Analgesics that do not mask neuro status; dim, quiet room"],
    ["**Risk for infection spread / adverse drug effects**", "Give antibiotics **exactly on time**; peak/trough levels; monitor **kidney function** and **hearing** (vancomycin, aminoglycosides); care of IV line/PICC; aseptic wound & drain care"],
    ["**Imbalanced nutrition / fluid volume**", "Assess swallowing before oral intake; I&O; daily weight; monitor sodium (SIADH)"],
    ["**Anxiety / deficient knowledge**", "Explain procedures; involve family; teach the importance of completing the full antibiotic course"]],
    ar: { h: ["التشخيص التمريضي", "التدخلات الأساسية"], r: [
    ["**خطر نقص التروية الدماغية / نقص القدرة التكيفية**", "مراقبة عصبية متكررة، رفع الرأس 30، تجنب الحزق، والإبلاغ عن تغير الوعي والعجز الجديد"],
    ["**ارتفاع الحرارة**", "قياس الحرارة كل 2–4 ساعات، خافضات حرارة وتبريد وسوائل"],
    ["**خطر الإصابة** (نوبات، تشوش)", "احتياطات النوبات وأدويتها في موعدها والإشراف عند المشي"],
    ["**ألم حاد** (صداع)", "مسكنات لا تخفي الحالة العصبية وغرفة هادئة"],
    ["**خطر العدوى والآثار الجانبية**", "المضاد الحيوي **في موعده بدقة**، مستويات الدواء، مراقبة **الكلى والسمع**، العناية بالقسطرة والجرح"],
    ["**اختلال التغذية والسوائل**", "تقييم البلع، موازنة السوائل، الوزن، الصوديوم"],
    ["**القلق ونقص المعرفة**", "شرح الإجراءات وإشراك الأهل وأهمية إكمال العلاج"]] } },
  { t: "h3", en: "Prevention and patient teaching", ar: "الوقاية وتثقيف المريض" },
  { t: "list", en: [
    "**Early and complete treatment** of otitis media, sinusitis and dental infections",
    "Antibiotic prophylaxis before dental procedures for patients at risk of endocarditis (e.g., prosthetic valves)",
    "Complete the **entire antibiotic course** (often 6–8 weeks) even when feeling well; keep follow-up scans",
    "Continue anticonvulsants as prescribed; no driving until cleared by the doctor",
    "Report fever, worsening headache, vomiting, new weakness, confusion or seizures"],
    ar: [
    "**العلاج المبكر والكامل** لالتهاب الأذن الوسطى والجيوب والأسنان",
    "مضاد حيوي وقائي قبل إجراءات الأسنان لمن لديهم خطر التهاب الشغاف",
    "إكمال **كورس المضاد الحيوي كاملاً** (6–8 أسابيع غالباً) ومراجعة الأشعة",
    "الاستمرار بمضادات الاختلاج وعدم القيادة حتى يسمح الطبيب",
    "الإبلاغ عن الحمى، اشتداد الصداع، التقيؤ، الضعف الجديد، التشوش أو النوبات"] },
  { t: "list", en: [
    "**Complications**: raised ICP and **herniation**, **rupture into the ventricles** (ventriculitis), meningitis, **seizures/epilepsy** (long-term), permanent neurological deficits, hydrocephalus, recurrence"],
    ar: ["**المضاعفات**: ارتفاع الضغط و**الانفتاق**، **الانفجار في البطينات**، التهاب السحايا، **الصرع** طويل الأمد، عجز عصبي دائم، استسقاء الرأس، التكرار"] }
]}
],
questions: [
{ q: "Which is the most common source of a brain abscess?", o: ["Urinary tract infection", "Spread from a nearby infection such as otitis media or sinusitis", "Food poisoning", "Skin abrasion of the leg"], a: 1, r: "Most brain abscesses arise by contiguous spread from the middle ear, mastoid, paranasal sinuses or teeth." },
{ q: "A patient with chronic otitis media develops a brain abscess. Which area of the brain is most likely affected?", o: ["Occipital lobe", "Temporal lobe or cerebellum", "Frontal lobe only", "Spinal cord"], a: 1, r: "Infection from the middle ear and mastoid typically spreads to the adjacent temporal lobe or cerebellum." },
{ q: "A brain abscess in the frontal lobe most often originates from:", o: ["Otitis media", "Frontal/ethmoid sinusitis or dental infection", "Endocarditis only", "Pneumonia only"], a: 1, r: "The frontal lobe lies next to the frontal and ethmoid sinuses, and dental infections can also spread there." },
{ q: "Which patients are at increased risk of brain abscess? (Select all that apply.)", o: ["Patient with infective endocarditis", "Patient with cyanotic congenital heart disease", "Patient with AIDS", "Patient after a penetrating head injury", "Patient with well-controlled hypertension only"], a: [0, 1, 2, 3], s: true, r: "Bacteremia (endocarditis), right-to-left shunts, immunosuppression and penetrating trauma all increase risk." },
{ q: "What is the most common presenting symptom of brain abscess?", o: ["High fever", "Headache", "Neck stiffness", "Diarrhea"], a: 1, r: "Headache is the most frequent symptom; fever is present in only about half of patients." },
{ q: "A nurse says, 'The patient has no fever, so a brain abscess is unlikely.' The best response is:", o: ["\"That's correct.\"", "\"Fever is absent in many patients with brain abscess, so it does not rule it out.\"", "\"Only children get fever with abscess.\"", "\"Fever appears only after surgery.\""], a: 1, r: "The classic triad of headache, fever and focal deficit occurs in fewer than half of patients." },
{ q: "Which imaging finding is typical of a brain abscess?", o: ["Diffuse brain atrophy", "Ring-enhancing lesion with surrounding edema", "Calcified lesion without edema", "Normal CT always"], a: 1, r: "On contrast CT/MRI, the abscess capsule enhances as a ring, with edema around it." },
{ q: "Why is a lumbar puncture usually avoided in a patient with brain abscess?", o: ["It is too expensive", "It can precipitate brain herniation and rarely identifies the organism", "It causes kidney injury", "It always causes meningitis"], a: 1, r: "A mass lesion with raised ICP makes LP dangerous; aspirating the abscess is the best way to identify the organism." },
{ q: "How is the causative organism of a brain abscess best identified?", o: ["Throat swab", "Culture of pus obtained by stereotactic aspiration", "Urine culture", "Stool examination"], a: 1, r: "CT/stereotactic-guided aspiration provides pus for Gram stain and aerobic, anaerobic and fungal culture." },
{ q: "How long is IV antibiotic therapy usually given for a bacterial brain abscess?", o: ["3 days", "1 week", "6–8 weeks", "Single dose"], a: 2, r: "Prolonged high-dose IV therapy (usually 6–8 weeks) is needed because the abscess capsule limits antibiotic penetration." },
{ q: "Which antibiotic is often included to cover anaerobic organisms in brain abscess?", o: ["Metronidazole", "Nitrofurantoin", "Amoxicillin oral only", "Erythromycin topical"], a: 0, r: "Metronidazole penetrates the brain and abscess cavity well and covers anaerobes common in otogenic and dental abscesses." },
{ q: "A patient receives IV vancomycin for a brain abscess. The nurse should monitor: (Select all that apply.)", o: ["Serum creatinine", "Hearing", "Trough levels", "Blood glucose only", "Infusion-related flushing"], a: [0, 1, 2, 4], s: true, r: "Vancomycin can cause nephrotoxicity, ototoxicity and infusion reactions; trough levels guide dosing." },
{ q: "Why must IV antibiotics for brain abscess be given exactly on schedule?", o: ["To reduce cost", "To maintain therapeutic blood and tissue levels", "To prevent constipation", "It does not matter"], a: 1, r: "Consistent timing maintains adequate concentrations to penetrate the abscess and prevent treatment failure." },
{ q: "Which surgical procedure is most commonly used to drain a brain abscess?", o: ["Lumbar drain", "Stereotactic needle aspiration through a burr hole", "Laminectomy", "Thoracotomy"], a: 1, r: "Stereotactic aspiration drains pus with minimal brain damage and provides culture material; craniotomy is used for large or multiloculated abscesses." },
{ q: "Which complication of brain abscess carries a very high mortality?", o: ["Mild headache", "Rupture into the ventricular system (ventriculitis)", "Fever", "Constipation"], a: 1, r: "Intraventricular rupture spreads infection throughout the CSF pathways and is associated with very high mortality." },
{ q: "A patient with a temporal lobe abscess cannot understand instructions and speaks fluently but incorrectly. This is:", o: ["Expressive aphasia", "Receptive aphasia", "Dysphagia", "Ataxia"], a: 1, r: "Temporal lobe (Wernicke's area) involvement causes receptive aphasia." },
{ q: "A patient with a cerebellar abscess would most likely show:", o: ["Ataxia and nystagmus", "Personality change", "Loss of smell", "Bitemporal hemianopia"], a: 0, r: "The cerebellum coordinates movement; lesions cause ataxia, nystagmus and dizziness." },
{ q: "A patient with brain abscess becomes increasingly drowsy and vomits. What should the nurse do FIRST?", o: ["Give antiemetic and leave", "Perform a neuro assessment and notify the provider", "Encourage oral fluids", "Lower the head of bed flat"], a: 1, p: true, r: "Drowsiness and vomiting suggest rising ICP; a focused neuro assessment and urgent notification are required." },
{ q: "Which nursing measures are appropriate for a patient with a brain abscess? (Select all that apply.)", o: ["Seizure precautions", "Head of bed elevated 30°", "Frequent neuro checks", "Encourage straining to promote bowel movement", "Fever control"], a: [0, 1, 2, 4], s: true, r: "Seizure precautions, ICP measures, neuro checks and fever control are key; straining raises ICP." },
{ q: "Dexamethasone is prescribed for a patient with a large abscess causing midline shift. The nurse understands it is used to:", o: ["Kill bacteria", "Reduce surrounding cerebral edema", "Prevent seizures", "Lower blood glucose"], a: 1, r: "Corticosteroids reduce vasogenic edema and mass effect; they are used selectively because they may reduce antibiotic penetration and immune response." },
{ q: "The patient's temperature is 39.4 °C. Why is treating the fever important in brain abscess?", o: ["Fever reduces ICP", "Fever increases cerebral metabolic demand and ICP", "Fever causes hypoglycemia only", "It is not important"], a: 1, r: "Hyperthermia increases brain oxygen consumption and cerebral blood flow, raising ICP." },
{ q: "Which teaching helps PREVENT brain abscess?", o: ["Avoid all antibiotics", "Seek prompt complete treatment of ear, sinus and dental infections", "Stop antibiotics when symptoms improve", "Avoid vaccinations"], a: 1, r: "Treating contiguous infections early and completely prevents their spread to the brain." },
{ q: "A patient with a brain abscess is going home on IV antibiotics through a PICC line. Which statement shows correct understanding?", o: ["\"I'll stop when the headache goes.\"", "\"I'll complete the full course and keep my follow-up scans.\"", "\"I can skip doses on weekends.\"", "\"I can swim with the PICC line.\""], a: 1, r: "The full prolonged course and follow-up imaging are needed to ensure resolution and prevent recurrence." },
{ q: "Which long-term complication is common after brain abscess and requires patient teaching?", o: ["Seizures (epilepsy)", "Diabetes mellitus", "Asthma", "Osteoporosis"], a: 0, r: "Scarring of brain tissue often leads to seizures; patients may need long-term anticonvulsants and driving restrictions." },
{ q: "Which assessment finding suggests rising ICP in a patient with brain abscess? (Select all that apply.)", o: ["Increasing headache with vomiting", "New confusion", "Papilledema", "Improved appetite", "Sluggish pupil reaction"], a: [0, 1, 2, 4], s: true, r: "Headache with vomiting, altered mentation, papilledema and sluggish pupils indicate raised ICP." },
{ q: "In an immunocompromised patient (e.g., AIDS), which organisms are important causes of brain abscess? (Select all that apply.)", o: ["Toxoplasma gondii", "Fungi such as Aspergillus", "Nocardia", "Giardia lamblia"], a: [0, 1, 2], s: true, r: "Immunosuppressed patients develop abscesses from opportunistic organisms including Toxoplasma, fungi and Nocardia." },
{ q: "Which investigation helps find the source of a brain abscess caused by blood-borne spread?", o: ["Echocardiogram for endocarditis", "Bone density scan", "Spirometry", "Colonoscopy"], a: 0, r: "Infective endocarditis is a major hematogenous source; echocardiography detects valve vegetations." },
{ q: "A patient with a brain abscess has a sudden generalized seizure. What is the nurse's priority?", o: ["Insert a tongue blade", "Protect from injury and maintain the airway", "Restrain the limbs", "Give oral medication"], a: 1, p: true, r: "During a seizure the priority is safety and airway: protect the head, turn to the side when possible, never force objects into the mouth." },
{ q: "Which statement about the stages of abscess formation is correct?", o: ["A capsule forms immediately", "Cerebritis is followed by necrosis and formation of a fibrous capsule over about 2 weeks", "Pus forms without inflammation", "Abscesses never cause edema"], a: 1, r: "Early cerebritis progresses to a necrotic center with pus, and a fibrous capsule develops over about 2 weeks." },
{ q: "Before giving oral food to a drowsy patient with a frontal abscess, the nurse should:", o: ["Assess swallowing and gag reflex", "Lie the patient flat", "Give large boluses quickly", "Skip assessment"], a: 0, r: "Decreased LOC and focal deficits can impair swallowing; checking the gag reflex and swallowing prevents aspiration." },
{ q: "Why are repeat CT or MRI scans performed during treatment of a brain abscess?", o: ["To diagnose meningitis", "To confirm that the abscess is shrinking and detect complications", "To check bone density", "To measure blood glucose"], a: 1, r: "Serial imaging guides the duration of antibiotics and identifies the need for further drainage." },
{ q: "Which sign suggests that the abscess has spread to the meninges?", o: ["Neck stiffness and photophobia", "Improved alertness", "Bradycardia alone", "Constipation"], a: 0, r: "Meningeal irritation (nuchal rigidity, photophobia, Kernig/Brudzinski signs) suggests extension to the meninges." }
]
});

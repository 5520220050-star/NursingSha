NS.reg("adult", { neuro: {
summary: {
  en: "Neuro nursing is about **protecting the brain from secondary injury**. The level of consciousness (LOC) is the most sensitive early sign of change, and most questions revolve around the Glasgow Coma Scale, increased ICP, airway and seizure safety.",
  ar: "تمريض الأعصاب هدفه **حماية الدماغ من الإصابة الثانوية**. مستوى الوعي هو أكثر علامة مبكرة حساسية للتغيّر، ومعظم الأسئلة تدور حول مقياس غلاسكو، ارتفاع الضغط داخل القحف، مجرى الهواء، وسلامة المريض أثناء النوبة."
},
sections: [
{ h: { en: "Neuro assessment & diagnostic tests", ar: "التقييم العصبي والفحوصات التشخيصية" }, b: [
  { t: "p", en: "A neurological assessment checks **LOC, pupils, motor and sensory function, and vital signs**. A change in LOC (restlessness, confusion, drowsiness) is the **earliest and most sensitive** indicator of neurological deterioration.",
    ar: "يشمل التقييم العصبي: **مستوى الوعي، الحدقتين، الحركة والإحساس، والعلامات الحيوية**. أي تغير في مستوى الوعي (تململ، تشوش، نعاس) هو **أبكر وأدق** علامة على تدهور الحالة العصبية." },
  { t: "table", h: ["Glasgow Coma Scale", "Response", "Score"], r: [
    ["**Eye opening (E)**", "Spontaneous / to voice / to pain / none", "4 / 3 / 2 / 1"],
    ["**Verbal (V)**", "Oriented / confused / inappropriate words / incomprehensible sounds / none", "5 / 4 / 3 / 2 / 1"],
    ["**Motor (M)**", "Obeys commands / localizes pain / withdraws / abnormal flexion (decorticate) / extension (decerebrate) / none", "6 / 5 / 4 / 3 / 2 / 1"]],
    ar: { h: ["مقياس غلاسكو", "الاستجابة", "الدرجة"], r: [
    ["**فتح العين**", "تلقائي / للصوت / للألم / لا يوجد", "4 / 3 / 2 / 1"],
    ["**الاستجابة اللفظية**", "واعٍ للزمان والمكان / مشوش / كلمات غير مناسبة / أصوات غير مفهومة / لا يوجد", "5 / 4 / 3 / 2 / 1"],
    ["**الاستجابة الحركية**", "ينفذ الأوامر / يحدد مكان الألم / يسحب الطرف / انثناء غير طبيعي / بسط غير طبيعي / لا يوجد", "6 / 5 / 4 / 3 / 2 / 1"]] } },
  { t: "cards", items: [
    { i: "target", en: "Score 15", d: "Fully alert & oriented", ar: "15 = وعي كامل" },
    { i: "alert", en: "Score ≤ 8", d: "Severe injury → intubate (\"8 = intubate\")", ar: "8 فأقل = إصابة شديدة وتحتاج أنبوب تنفس" },
    { i: "x", en: "Score 3", d: "Lowest possible score (deep coma)", ar: "3 = أدنى درجة (غيبوبة عميقة)" } ] },
  { t: "compare", cols: [
    { h: { en: "Decorticate (flexion)", ar: "الوضعية القشرية" }, en: ["Arms flexed **toward the core** (chest), legs extended", "Damage to cerebral hemispheres / corticospinal tract", "GCS motor = 3"], ar: ["الذراعان منثنيتان نحو الصدر والساقان ممدودتان", "إصابة في نصفي الدماغ", "الدرجة الحركية = 3"] },
    { h: { en: "Decerebrate (extension)", ar: "الوضعية المخية" }, en: ["Arms and legs extended, wrists pronated", "Brainstem damage — **worse** prognosis", "GCS motor = 2"], ar: ["الأطراف ممدودة مع كب المعصمين", "إصابة جذع الدماغ — إنذار **أسوأ**", "الدرجة الحركية = 2"] } ] },
  { t: "table", h: ["Test", "Key nursing responsibility"], r: [
    ["**CT scan**", "Ask about contrast/iodine allergy & renal function; patient must lie still"],
    ["**MRI**", "Remove all metal; check for pacemaker/implants; claustrophobia — consider sedation"],
    ["**Lumbar puncture (LP)**", "Fetal (knee-chest) position; **contraindicated with ↑ICP** (herniation risk); after: lie flat as ordered, fluids, watch for headache & CSF leak"],
    ["**EEG**", "Wash hair, no sprays/oils; hold stimulants (coffee) as ordered; may need sleep deprivation"],
    ["**Cerebral angiography**", "Contrast allergy check; after: check puncture site & distal pulses, keep limb straight, monitor neuro signs"]],
    ar: { h: ["الفحص", "مسؤولية الممرض"], r: [
    ["**الأشعة المقطعية**", "اسأل عن حساسية المادة الملونة ووظائف الكلى، والمريض يبقى ساكناً"],
    ["**الرنين المغناطيسي**", "إزالة كل المعادن، التأكد من عدم وجود منظم ضربات، الخوف من الأماكن المغلقة"],
    ["**البزل القطني**", "وضعية الجنين، **ممنوع مع ارتفاع الضغط داخل القحف** لخطر الانفتاق، وبعده الاستلقاء والسوائل ومراقبة الصداع"],
    ["**تخطيط الدماغ**", "غسل الشعر بدون زيوت، إيقاف المنبهات حسب الطلب"],
    ["**تصوير الأوعية الدماغية**", "فحص الحساسية، وبعده مراقبة موضع الإبرة والنبض الطرفي وإبقاء الطرف مستقيماً"]] } },
  { t: "tip", en: "Pupils: use **PERRLA** (Pupils Equal, Round, Reactive to Light & Accommodation). A **unilateral fixed, dilated pupil** suggests compression of cranial nerve III on the same side — an emergency (possible herniation).",
    ar: "الحدقتان: استخدم **PERRLA**. **حدقة واحدة متوسعة وثابتة** تعني ضغطاً على العصب القحفي الثالث في نفس الجهة — حالة طارئة (احتمال انفتاق الدماغ)." }
]},
{ h: { en: "Increased intracranial pressure (ICP)", ar: "ارتفاع الضغط داخل القحف" }, b: [
  { t: "p", en: "The skull is a closed box. According to the **Monro–Kellie hypothesis**, brain tissue, blood and CSF are in balance: if one increases, another must decrease or ICP rises. Normal ICP is about **5–15 mmHg**; a sustained ICP **above 20 mmHg** needs treatment.",
    ar: "الجمجمة صندوق مغلق. حسب **فرضية مونرو–كيلي** فإن نسيج الدماغ والدم والسائل الدماغي في توازن: إذا زاد أحدها يجب أن ينقص الآخر وإلا ارتفع الضغط. الضغط الطبيعي تقريباً **5–15 ملم زئبق**، والضغط المستمر **فوق 20** يحتاج علاجاً." },
  { t: "svg", svg: '<svg viewBox="0 0 340 190" role="img" aria-label="Monro-Kellie: skull volume = brain 80% + blood 10% + CSF 10%"><rect x="10" y="20" width="320" height="90" rx="40" class="d-box" style="stroke-width:5"/><rect x="30" y="40" width="200" height="50" rx="8" class="d-navy"/><rect x="230" y="40" width="40" height="50" class="d-red"/><rect x="270" y="40" width="40" height="50" rx="8" class="d-green"/><text x="130" y="70" class="d-tw d-mid">Brain tissue ~80%</text><text x="250" y="70" class="d-t d-mid" style="font-size:11px">Blood</text><text x="290" y="70" class="d-t d-mid" style="font-size:11px">CSF</text><text x="170" y="14" class="d-ts d-mid">Rigid skull = fixed total volume</text><text x="250" y="128" class="d-ts d-mid">~10%</text><text x="290" y="128" class="d-ts d-mid">~10%</text><text x="170" y="160" class="d-t d-mid">Tumor, bleed or edema adds volume →</text><text x="170" y="180" class="d-t d-mid">CSF & blood are displaced → then ICP rises</text></svg>',
    en: "Monro–Kellie hypothesis", ar: "فرضية مونرو–كيلي: الدماغ والدم والسائل الدماغي داخل حجم ثابت" },
  { t: "p", en: "**Cerebral perfusion pressure (CPP) = MAP − ICP.** Normal CPP is about **70–100 mmHg**; below about 50 mmHg the brain becomes ischemic.",
    ar: "**ضغط التروية الدماغية = متوسط الضغط الشرياني − الضغط داخل القحف.** الطبيعي **70–100**، وإذا قل عن 50 تقريباً يحدث نقص تروية للدماغ." },
  { t: "cycle", center: "Vicious|cycle", steps: [
    { en: "Mass, bleeding or edema → **↑ ICP**", ar: "كتلة أو نزف أو وذمة → ارتفاع الضغط" },
    { en: "↑ ICP → **↓ CPP** (less blood reaches the brain)", ar: "انخفاض ضغط التروية الدماغية" },
    { en: "Brain hypoxia & ↑ CO₂ → vasodilation", ar: "نقص أكسجة وارتفاع ثاني أكسيد الكربون → توسع الأوعية" },
    { en: "More cerebral edema → ICP rises further → herniation", ar: "وذمة أكثر → ارتفاع أكبر → انفتاق الدماغ" } ] },
  { t: "compare", cols: [
    { h: { en: "Early signs", ar: "العلامات المبكرة" }, en: ["**Change in LOC** — restlessness, confusion, lethargy", "Headache, vomiting", "Sluggish pupil response", "Subtle weakness (pronator drift)"], ar: ["**تغير مستوى الوعي** — تململ، تشوش، خمول", "صداع وتقيؤ", "بطء استجابة الحدقة", "ضعف خفيف"] },
    { h: { en: "Late signs", ar: "العلامات المتأخرة" }, en: ["**Cushing's triad:** systolic hypertension with **widening pulse pressure**, **bradycardia**, irregular respirations", "Fixed dilated pupil(s)", "Decorticate → decerebrate posturing", "Hyperthermia, coma"], ar: ["**ثالوث كوشينغ:** ارتفاع الضغط الانقباضي مع **اتساع فرق النبض**، **بطء القلب**، تنفس غير منتظم", "حدقة متوسعة ثابتة", "وضعيات غير طبيعية", "ارتفاع الحرارة والغيبوبة"] } ] },
  { t: "list", en: [
    "**Head of bed 30°**, head and neck in **midline** (promotes venous drainage)",
    "Avoid neck flexion, extreme hip flexion, Valsalva (straining, coughing), and clustering many activities at once",
    "Suction only when needed, **≤10–15 seconds**, hyperoxygenate before",
    "Keep normothermia; treat fever (fever ↑ brain metabolism)",
    "**Osmotic diuretic (mannitol)** or hypertonic saline as ordered — monitor serum osmolality, I&O, electrolytes",
    "Corticosteroids (dexamethasone) for edema **around tumors**; anticonvulsants as ordered",
    "Keep a quiet environment; avoid hypotonic IV fluids (they worsen cerebral edema)"],
    ar: [
    "**رفع رأس السرير 30 درجة**، والرأس والرقبة على **خط مستقيم** لتسهيل تصريف الدم الوريدي",
    "تجنب ثني الرقبة، ثني الورك الشديد، الحزق (السعال، الإمساك)، وتجميع الإجراءات الكثيرة في وقت واحد",
    "الشفط عند الحاجة فقط ولمدة **10–15 ثانية كحد أقصى** مع إعطاء أكسجين قبله",
    "الحفاظ على حرارة طبيعية؛ الحمى تزيد استهلاك الدماغ",
    "**مدر بول أسموزي (مانيتول)** أو محلول ملحي عالي التركيز حسب الطلب مع مراقبة الأسمولية والسوائل والأملاح",
    "الكورتيزون (ديكساميثازون) لوذمة **الأورام**، ومضادات الاختلاج حسب الطلب",
    "بيئة هادئة، وتجنب المحاليل منخفضة التوتر لأنها تزيد الوذمة"] },
  { t: "warn", en: "Cushing's triad is a **late** sign — by the time it appears, the brainstem is being compressed. Report subtle LOC changes early; do not wait for vital-sign changes.",
    ar: "ثالوث كوشينغ علامة **متأخرة** تعني انضغاط جذع الدماغ. بلّغ عن أي تغير بسيط في الوعي مبكراً ولا تنتظر تغير العلامات الحيوية." }
]},
{ h: { en: "Brain abscess", ar: "خراج الدماغ" }, b: [
  { t: "p", en: "A **collection of pus within brain tissue**. Most arise by spread from a nearby infection (otitis media, mastoiditis, sinusitis, dental infection), through the blood (endocarditis, lung infection), or after penetrating trauma or neurosurgery. Immunosuppressed patients are at higher risk.",
    ar: "**تجمع صديد داخل نسيج الدماغ**. غالباً ينتقل من التهاب قريب (الأذن الوسطى، الخشاء، الجيوب، الأسنان)، أو عن طريق الدم (التهاب شغاف القلب، الرئة)، أو بعد إصابة نافذة أو جراحة. ضعاف المناعة أكثر عرضة." },
  { t: "cards", items: [
    { i: "brain", en: "Headache", d: "Most common symptom, often worse in the morning", ar: "الصداع: أكثر عرض شيوعاً ويزداد صباحاً" },
    { i: "thermo", en: "Fever", d: "May be absent — don't rule out abscess without it", ar: "الحمى: قد تغيب" },
    { i: "alert", en: "Focal deficits & seizures", d: "Depend on the abscess location", ar: "علامات عصبية موضعية ونوبات حسب الموقع" },
    { i: "target", en: "Signs of ↑ICP", d: "Vomiting, drowsiness, papilledema", ar: "علامات ارتفاع الضغط: تقيؤ، نعاس، وذمة حليمة العصب البصري" } ] },
  { t: "list", en: ["Diagnosis: **CT/MRI**. Lumbar puncture is usually **avoided** because of herniation risk", "Treatment: high-dose IV antibiotics for weeks, surgical aspiration/drainage, treat the primary source", "Corticosteroids for edema, anticonvulsants for seizure prophylaxis", "Nursing: neuro checks, ICP precautions, fever control, seizure precautions, complete the full antibiotic course"],
    ar: ["التشخيص: **أشعة مقطعية/رنين**، ويُتجنب البزل القطني لخطر الانفتاق", "العلاج: مضادات حيوية وريدية بجرعات عالية لأسابيع، تصريف جراحي، وعلاج المصدر الأصلي", "كورتيزون للوذمة ومضادات اختلاج للوقاية", "التمريض: فحوصات عصبية، احتياطات الضغط داخل القحف، خفض الحرارة، احتياطات النوبات، وإكمال العلاج"] }
]},
{ h: { en: "Brain tumors", ar: "أورام الدماغ" }, b: [
  { t: "p", en: "Brain tumors may be **primary** (from brain cells or coverings) or **metastatic** (from lung, breast, kidney, melanoma). Even a histologically benign tumor can be fatal because it occupies space inside the rigid skull.",
    ar: "قد تكون الأورام **أولية** (من خلايا الدماغ أو أغشيته) أو **ثانوية** منتشرة (من الرئة، الثدي، الكلية، الميلانوما). حتى الورم الحميد قد يكون قاتلاً لأنه يشغل حيزاً داخل الجمجمة الصلبة." },
  { t: "table", h: ["Tumor", "Key fact"], r: [
    ["**Glioma (e.g., glioblastoma)**", "Most common primary malignant tumor; infiltrates — hard to remove completely"],
    ["**Meningioma**", "Usually benign, from the meninges; slow growing"],
    ["**Pituitary adenoma**", "Hormonal changes + **bitemporal visual field loss** (presses on optic chiasm)"],
    ["**Acoustic neuroma (vestibular schwannoma)**", "CN VIII: tinnitus, unilateral hearing loss, vertigo"],
    ["**Metastatic**", "Spread from another cancer; often multiple lesions"]],
    ar: { h: ["الورم", "معلومة أساسية"], r: [
    ["**الورم الدبقي**", "أشيع ورم خبيث أولي، يتغلغل ويصعب استئصاله"],
    ["**الورم السحائي**", "غالباً حميد وبطيء النمو"],
    ["**ورم الغدة النخامية**", "تغيرات هرمونية + فقدان الرؤية الجانبية في العينين"],
    ["**ورم العصب السمعي**", "طنين، ضعف سمع من جهة واحدة، دوار"],
    ["**الثانوي**", "منتشر من سرطان آخر، غالباً متعدد"]] } },
  { t: "table", h: ["Location", "Typical manifestations"], r: [
    ["Frontal lobe", "Personality & behavior change, poor judgment, expressive aphasia (Broca)"],
    ["Temporal lobe", "Seizures, auditory/olfactory hallucinations, receptive aphasia (Wernicke)"],
    ["Parietal lobe", "Sensory loss, spatial disorientation"],
    ["Occipital lobe", "Visual disturbances"],
    ["Cerebellum", "Ataxia, incoordination, dizziness, nystagmus"]],
    ar: { h: ["الموقع", "الأعراض"], r: [
    ["الفص الجبهي", "تغير الشخصية والسلوك، ضعف الحكم، صعوبة الكلام التعبيري"],
    ["الفص الصدغي", "نوبات، هلاوس سمعية أو شمية، صعوبة فهم الكلام"],
    ["الفص الجداري", "فقدان الإحساس واضطراب الإدراك المكاني"],
    ["الفص القذالي", "اضطرابات البصر"],
    ["المخيخ", "اختلال التوازن والتناسق، دوار، رأرأة"]] } },
  { t: "mnem", k: "HVP", title: "Classic triad of ↑ICP from a tumor", rows: [
    ["H", "**Headache** — worse on waking, worse with coughing/straining", "صداع يشتد عند الاستيقاظ ومع السعال"],
    ["V", "**Vomiting** — may be projectile, often without nausea", "تقيؤ قد يكون قذفياً بدون غثيان"],
    ["P", "**Papilledema** — swelling of the optic disc", "وذمة حليمة العصب البصري"] ] },
  { t: "list", en: [
    "Treatment: surgery (craniotomy), radiation, chemotherapy (e.g., temozolomide), dexamethasone for edema",
    "After **supratentorial** craniotomy: HOB elevated about **30°**; after **infratentorial** surgery: position as ordered (often flat or low, side-lying), avoid neck flexion",
    "Watch the dressing for **CSF leak** (clear drainage; halo sign on gauze; tests positive for glucose)",
    "Monitor for **diabetes insipidus** (large dilute urine) and **SIADH** (low sodium, fluid retention) — especially after pituitary surgery",
    "After **transsphenoidal** pituitary surgery: no coughing, sneezing, nose blowing, straws or bending forward"],
    ar: [
    "العلاج: جراحة (فتح الجمجمة)، إشعاع، كيمياوي، وديكساميثازون للوذمة",
    "بعد الجراحة **فوق الخيمة**: رفع الرأس 30 درجة؛ وبعد الجراحة **تحت الخيمة**: الوضعية حسب الطلب (غالباً مستوٍ أو منخفض على الجانب) مع تجنب ثني الرقبة",
    "مراقبة الضماد لـ**تسرب السائل الدماغي** (سائل صافٍ، علامة الهالة، يحتوي جلوكوز)",
    "مراقبة **السكري الكاذب** (بول غزير مخفف) و**متلازمة الإفراز غير الملائم للهرمون المضاد للإدرار** (نقص الصوديوم واحتباس السوائل)",
    "بعد جراحة النخامية عبر الأنف: ممنوع السعال، العطاس، تمخيط الأنف، الشفاطة، والانحناء للأمام"] }
]},
{ h: { en: "Head injury", ar: "إصابات الرأس" }, b: [
  { t: "p", en: "**Primary injury** happens at the moment of impact. **Secondary injury** develops later from hypoxia, hypotension, edema and ↑ICP — nursing care aims to prevent it. **Always assume a cervical-spine injury** in a head-injured patient until it is ruled out.",
    ar: "**الإصابة الأولية** تحدث لحظة الصدمة، و**الثانوية** تتطور لاحقاً بسبب نقص الأكسجة وانخفاض الضغط والوذمة وارتفاع الضغط داخل القحف — وهدف التمريض منعها. **افترض دائماً وجود إصابة بالفقرات العنقية** حتى يثبت العكس." },
  { t: "table", h: ["Injury", "Key features"], r: [
    ["**Concussion**", "Temporary loss of function, ± brief LOC; headache, dizziness, amnesia. Discharge teaching: someone stays with the patient, return if vomiting, worsening headache, confusion or unequal pupils"],
    ["**Contusion**", "Bruising of brain tissue; longer unconsciousness, focal deficits"],
    ["**Diffuse axonal injury**", "Shearing of axons; immediate deep coma, posturing"],
    ["**Basilar skull fracture**", "**Battle's sign** (bruise behind ear), **raccoon eyes**, CSF otorrhea/rhinorrhea. No nasal suction/NG tube; don't blow nose; don't pack the nose or ear"]],
    ar: { h: ["الإصابة", "الملامح الأساسية"], r: [
    ["**الارتجاج**", "فقدان مؤقت للوظيفة مع أو بدون فقدان وعي قصير؛ صداع، دوخة، فقدان ذاكرة. تعليمات الخروج: يبقى معه شخص، ويرجع إذا تقيأ أو اشتد الصداع أو تشوش أو اختلفت الحدقتان"],
    ["**الكدمة الدماغية**", "رضّ نسيج الدماغ مع فقدان وعي أطول وعلامات موضعية"],
    ["**الإصابة المحورية المنتشرة**", "تمزق المحاور العصبية، غيبوبة فورية عميقة"],
    ["**كسر قاعدة الجمجمة**", "**علامة باتل** خلف الأذن، **عيون الراكون**، تسرب السائل الدماغي من الأنف أو الأذن. ممنوع شفط الأنف أو الأنبوب الأنفي المعدي أو التمخيط أو حشو الأنف والأذن"]] } },
  { t: "compare", cols: [
    { h: { en: "Epidural hematoma", ar: "ورم دموي فوق الجافية" }, en: ["**Arterial** bleed — usually **middle meningeal artery**, often with temporal bone fracture", "**Brief LOC → lucid interval → rapid deterioration**", "Surgical **emergency** (burr holes/craniotomy)"], ar: ["نزف **شرياني** غالباً من الشريان السحائي الأوسط مع كسر العظم الصدغي", "**فقدان وعي قصير ← فترة صحو ← تدهور سريع**", "**حالة طارئة** جراحية"] },
    { h: { en: "Subdural hematoma", ar: "ورم دموي تحت الجافية" }, en: ["**Venous** bleed (bridging veins) — slower", "Acute (<48 h), subacute, or **chronic** (weeks)", "Chronic type: **elderly, alcohol use, anticoagulants** — gradual confusion, headache"], ar: ["نزف **وريدي** أبطأ", "حاد أو تحت الحاد أو **مزمن** (أسابيع)", "المزمن: **كبار السن، الكحول، مضادات التخثر** — تشوش تدريجي وصداع"] } ] },
  { t: "tip", en: "To tell whether drainage from the nose or ear is CSF: it is clear, forms a **halo (yellow ring around blood) on gauze**, and **tests positive for glucose**.",
    ar: "لمعرفة إن كان السائل من الأنف أو الأذن سائلاً دماغياً: يكون صافياً، ويكوّن **هالة صفراء حول الدم على الشاش**، و**يعطي نتيجة إيجابية للجلوكوز**." },
  { t: "flow", steps: [
    { en: "**Airway** with c-spine protection (jaw thrust, collar)", ar: "مجرى الهواء مع حماية الفقرات العنقية" },
    { en: "Breathing & oxygenation — prevent hypoxia", ar: "التنفس والأكسجة — منع نقص الأكسجين" },
    { en: "Circulation — prevent hypotension (keeps CPP)", ar: "الدورة الدموية — منع انخفاض الضغط" },
    { en: "**GCS, pupils, vital signs** frequently; compare with baseline", ar: "غلاسكو والحدقتان والعلامات الحيوية بشكل متكرر" },
    { en: "ICP precautions, seizure precautions, fluid & electrolyte balance", ar: "احتياطات الضغط داخل القحف والنوبات وتوازن السوائل" } ] }
]},
{ h: { en: "Meningitis", ar: "التهاب السحايا" }, b: [
  { t: "p", en: "Inflammation of the meninges. **Bacterial** meningitis is a medical emergency (common organisms: __Neisseria meningitidis__, __Streptococcus pneumoniae__, __Haemophilus influenzae__ type b). **Viral** (aseptic) meningitis is usually milder and self-limiting.",
    ar: "التهاب الأغشية المحيطة بالدماغ. التهاب السحايا **الجرثومي** حالة طارئة (أشهر المسببات: المكورات السحائية، المكورات الرئوية، المستدمية النزلية ب). أما **الفيروسي** فعادة أخف ويشفى ذاتياً." },
  { t: "cards", items: [
    { i: "brain", en: "Severe headache & fever", ar: "صداع شديد وحمى" },
    { i: "bone", en: "Nuchal rigidity", d: "Stiff neck", ar: "تيبس الرقبة" },
    { i: "eye", en: "Photophobia", ar: "رهاب الضوء" },
    { i: "target", en: "Kernig's sign", d: "Hip flexed 90°, knee extension causes pain", ar: "علامة كيرنيغ: ألم عند مد الركبة والورك مثني" },
    { i: "hand", en: "Brudzinski's sign", d: "Neck flexion → hips & knees flex", ar: "علامة برودزينسكي: ثني الرقبة يسبب ثني الورك والركبة" },
    { i: "alert", en: "Petechial / purpuric rash", d: "Meningococcal — risk of DIC & sepsis", ar: "طفح نقطي — المكورات السحائية وخطر التخثر المنتشر" } ] },
  { t: "table", h: ["CSF finding", "Bacterial", "Viral"], r: [
    ["Appearance", "Cloudy / turbid", "Clear"],
    ["WBC type", "↑↑ Neutrophils", "↑ Lymphocytes"],
    ["Protein", "↑ High", "Normal or slightly ↑"],
    ["Glucose", "**↓ Low**", "Normal"],
    ["Pressure", "↑", "Normal or slightly ↑"]],
    ar: { h: ["السائل الدماغي", "جرثومي", "فيروسي"], r: [
    ["المظهر", "عكر", "صافٍ"],
    ["كريات الدم البيض", "متعادلة مرتفعة جداً", "لمفاوية مرتفعة"],
    ["البروتين", "مرتفع", "طبيعي أو مرتفع قليلاً"],
    ["الجلوكوز", "**منخفض**", "طبيعي"],
    ["الضغط", "مرتفع", "طبيعي أو مرتفع قليلاً"]] } },
  { t: "list", en: [
    "**Droplet precautions** (suspected meningococcal) until **24 hours of effective antibiotics**",
    "Obtain blood cultures/CSF, but **do not delay antibiotics**; dexamethasone is often given with or before the first dose",
    "Quiet, dim room; analgesics; fever control; seizure precautions; neuro checks & ICP monitoring",
    "Monitor fluids and sodium (SIADH risk); watch for shock and DIC",
    "**Close contacts** of meningococcal patients receive prophylaxis (e.g., rifampin, ciprofloxacin)",
    "Prevention: vaccines (Hib, pneumococcal, meningococcal)"],
    ar: [
    "**احتياطات الرذاذ** (عند الشك بالمكورات السحائية) حتى مرور **24 ساعة على المضاد الحيوي الفعال**",
    "أخذ مزرعة الدم والسائل الدماغي **دون تأخير المضاد الحيوي**، ويُعطى الديكساميثازون غالباً مع الجرعة الأولى أو قبلها",
    "غرفة هادئة ومعتمة، مسكنات، خفض الحرارة، احتياطات النوبات، ومراقبة عصبية",
    "مراقبة السوائل والصوديوم، والانتباه للصدمة والتخثر المنتشر",
    "**المخالطون** لمريض المكورات السحائية يأخذون وقاية (ريفامبين، سيبروفلوكساسين)",
    "الوقاية: اللقاحات"] }
]},
{ h: { en: "Epilepsy & seizures", ar: "الصرع والنوبات" }, b: [
  { t: "p", en: "A **seizure** is an abnormal, excessive discharge of brain neurons. **Epilepsy** is a tendency to recurrent, unprovoked seizures. Seizures are classified as **focal (partial)** or **generalized**.",
    ar: "**النوبة** تفريغ كهربائي مفرط وغير طبيعي لخلايا الدماغ. **الصرع** هو قابلية تكرار النوبات بدون محفز. تُصنف النوبات إلى **موضعية (جزئية)** و**عامة**." },
  { t: "table", h: ["Type", "Features"], r: [
    ["**Tonic–clonic** (grand mal)", "Possible aura → loss of consciousness → **tonic** stiffening → **clonic** jerking → **postictal** confusion & sleepiness; may bite tongue, be incontinent"],
    ["**Absence** (petit mal)", "Brief staring spells (seconds), more common in children; may occur many times a day"],
    ["**Myoclonic**", "Sudden brief jerks of muscles"],
    ["**Atonic** (drop attack)", "Sudden loss of muscle tone → falls; helmet may be needed"],
    ["**Focal**", "Starts in one area; awareness may be retained (simple) or impaired (complex, with automatisms like lip-smacking)"]],
    ar: { h: ["النوع", "الملامح"], r: [
    ["**التوترية الرمعية (الكبرى)**", "قد تسبقها أورة ← فقدان الوعي ← تيبس ← ارتجافات ← تشوش ونعاس بعد النوبة؛ عض اللسان وسلس البول ممكن"],
    ["**الغيبة (الصغرى)**", "نوبات تحديق قصيرة لثوانٍ، أشيع عند الأطفال، تتكرر كثيراً"],
    ["**الرمعية العضلية**", "ارتجافات مفاجئة قصيرة"],
    ["**الارتخائية**", "فقدان مفاجئ لتوتر العضلات وسقوط"],
    ["**الموضعية**", "تبدأ في منطقة واحدة مع بقاء الوعي أو اختلاله وحركات تلقائية"]] } },
  { t: "flow", steps: [
    { en: "Stay with the patient, **note the time**, call for help", ar: "ابقَ مع المريض وسجّل **وقت البدء** واطلب المساعدة" },
    { en: "Protect from injury: lower to floor, move objects, cushion the head; loosen tight clothing", ar: "احمه من الإصابة: أنزله للأرض، أبعد الأشياء، ضع شيئاً لين تحت رأسه، وفك الملابس الضيقة" },
    { en: "Turn to the **side** when possible (drain secretions, protect airway)", ar: "أدِره على **جانبه** عند الإمكان لتصريف الإفرازات" },
    { en: "**Do NOT** restrain or put anything in the mouth", ar: "**لا** تقيّده ولا تضع أي شيء في فمه" },
    { en: "After: side-lying, suction & O₂ as needed, reorient, document onset, duration, type & postictal state", ar: "بعد النوبة: وضع جانبي، شفط وأكسجين عند الحاجة، إعادة التوجيه، وتوثيق البداية والمدة والنوع وحالة ما بعد النوبة" } ] },
  { t: "warn", en: "**Status epilepticus** = a seizure lasting ≥5 minutes or repeated seizures without recovery between them. Priority: **airway & oxygen**, IV access, then **IV lorazepam** (benzodiazepine) first-line, followed by a longer-acting anticonvulsant (e.g., fosphenytoin/phenytoin), check glucose.",
    ar: "**الحالة الصرعية** = نوبة تستمر 5 دقائق أو أكثر، أو نوبات متكررة بدون استعادة الوعي بينها. الأولوية: **مجرى الهواء والأكسجين**، خط وريدي، ثم **لورازيبام وريدي** أولاً، يليه مضاد اختلاج طويل المفعول، وفحص السكر." },
  { t: "table", h: ["Drug", "What to remember"], r: [
    ["**Phenytoin**", "Therapeutic level ~10–20 mcg/mL; **gingival hyperplasia** (good oral hygiene); IV: mix/flush with **normal saline** only, give slowly (hypotension, dysrhythmias)"],
    ["**Carbamazepine**", "Blood dyscrasias (agranulocytosis) — monitor CBC; many drug interactions"],
    ["**Valproic acid**", "Hepatotoxicity & pancreatitis — monitor LFTs; teratogenic"],
    ["**Levetiracetam**", "Fewer interactions; mood/behavior changes"],
    ["**All anticonvulsants**", "Do not stop abruptly (can trigger status epilepticus); avoid alcohol; wear medical ID"]],
    ar: { h: ["الدواء", "ما يجب تذكره"], r: [
    ["**الفينيتوين**", "المستوى العلاجي 10–20؛ **تضخم اللثة** (عناية بالفم)؛ وريدياً يُخلط مع **المحلول الملحي** فقط ويُعطى ببطء"],
    ["**الكاربامازيبين**", "اضطرابات الدم — مراقبة صورة الدم"],
    ["**حمض الفالبرويك**", "سمية الكبد والتهاب البنكرياس، ومشوه للجنين"],
    ["**الليفيتيراسيتام**", "تداخلات أقل، تغيرات مزاجية"],
    ["**كل مضادات الاختلاج**", "لا تُوقف فجأة، تجنب الكحول، وحمل بطاقة طبية"]] } }
]},
{ h: { en: "Caring for the unconscious patient", ar: "رعاية المريض فاقد الوعي" }, b: [
  { t: "p", en: "The unconscious patient is fully dependent. The **first priority is always a patent airway**, because loss of the gag/cough reflex and a relaxed tongue can block the airway and cause aspiration.",
    ar: "المريض فاقد الوعي يعتمد كلياً على الممرض. **الأولوية الأولى دائماً مجرى هواء مفتوح** لأن فقدان منعكس البلع والسعال وارتخاء اللسان قد يسدان المجرى ويسببان الشفط الرئوي." },
  { t: "cards", items: [
    { i: "lungs", en: "Airway", d: "Lateral/semi-prone position, suction, oral airway, O₂", ar: "مجرى الهواء: وضع جانبي، شفط، أنبوب فموي، أكسجين" },
    { i: "eye", en: "Eyes", d: "Absent blink → corneal damage: lubricating drops, eye shields/patches", ar: "العينان: غياب الرمش يسبب أذى القرنية — قطرات مرطبة وواقيات" },
    { i: "drop", en: "Mouth", d: "Oral care often; side-lying to prevent aspiration", ar: "الفم: عناية فموية متكررة مع وضع جانبي" },
    { i: "bed", en: "Skin & positioning", d: "Turn every 2 h, pressure-relieving surfaces", ar: "الجلد: التقليب كل ساعتين وفراش مخفف للضغط" },
    { i: "bone", en: "Joints", d: "Passive ROM, splints to prevent contractures & foot drop", ar: "المفاصل: تمارين حركية سلبية وجبائر لمنع التيبس وهبوط القدم" },
    { i: "food", en: "Nutrition", d: "Enteral (NG/PEG) feeding, HOB raised, check tube placement", ar: "التغذية: أنبوبية مع رفع الرأس والتأكد من موضع الأنبوب" },
    { i: "kidney", en: "Elimination", d: "Catheter care, bowel program, monitor I&O", ar: "الإخراج: عناية بالقسطرة وبرنامج للأمعاء ومراقبة السوائل" },
    { i: "chat", en: "Communication", d: "Explain care and talk to the patient — hearing may remain", ar: "التواصل: اشرح الإجراءات وتحدث معه — قد يبقى السمع" } ] },
  { t: "tip", en: "In priority questions for an unconscious or seizing patient: **airway → breathing → circulation → neuro status → safety/complications**.",
    ar: "في أسئلة الأولوية لمريض فاقد الوعي أو في نوبة: **مجرى الهواء ← التنفس ← الدورة الدموية ← الحالة العصبية ← السلامة والمضاعفات**." }
]}
],
questions: [
{ q: "A patient with a head injury opens his eyes only to painful stimuli, makes incomprehensible sounds, and withdraws from pain. What is his Glasgow Coma Scale score?", o: ["7", "8", "9", "10"], a: 1, r: "Eyes to pain = 2, incomprehensible sounds = 2, withdraws from pain = 4. Total = 8, which indicates severe brain injury and usually the need to secure the airway." },
{ q: "Which assessment finding is the EARLIEST indicator of increasing intracranial pressure?", o: ["Bradycardia", "Widening pulse pressure", "Restlessness and new confusion", "Fixed, dilated pupil"], a: 2, r: "A change in level of consciousness is the earliest and most sensitive sign of rising ICP. Bradycardia and widening pulse pressure (Cushing's triad) and fixed pupils are late signs." },
{ q: "A nurse notes BP 178/62 mmHg (previously 132/78), pulse 52/min and irregular respirations in a patient with a brain tumor. What do these findings indicate?", o: ["Hypovolemic shock", "Cushing's triad from rising ICP", "Neurogenic shock", "Autonomic dysreflexia"], a: 1, r: "Systolic hypertension with widening pulse pressure, bradycardia and irregular respirations form Cushing's triad — a late sign of increased ICP and brainstem compression requiring immediate notification." },
{ q: "Which nursing actions help reduce intracranial pressure? (Select all that apply.)", o: ["Elevate the head of bed to 30 degrees", "Keep the head and neck in a neutral midline position", "Cluster all care activities together to let the patient rest longer", "Limit suctioning to 10 seconds per pass", "Encourage the patient to cough and deep breathe every hour", "Prevent constipation with stool softeners"], a: [0, 1, 3, 5], s: true, r: "HOB 30° and midline head position promote venous drainage. Brief suctioning and preventing straining (Valsalva) limit ICP spikes. Clustering many activities causes sustained ICP rises, and vigorous coughing increases ICP." },
{ q: "A patient's MAP is 80 mmHg and ICP is 25 mmHg. What is the cerebral perfusion pressure, and what does it mean?", o: ["105 mmHg — hyperperfusion", "55 mmHg — reduced cerebral perfusion", "55 mmHg — normal perfusion", "80 mmHg — normal perfusion"], a: 1, r: "CPP = MAP − ICP = 80 − 25 = 55 mmHg. Normal CPP is about 70–100 mmHg, so 55 indicates inadequate cerebral perfusion and risk of ischemia." },
{ q: "Mannitol is prescribed for a patient with cerebral edema. Which finding should the nurse monitor most closely?", o: ["Serum potassium only", "Urine output and serum osmolality", "Blood glucose", "Platelet count"], a: 1, r: "Mannitol is an osmotic diuretic that draws fluid from brain tissue. The nurse monitors urine output, fluid and electrolyte balance, and serum osmolality to avoid dehydration and renal injury." },
{ q: "Which IV fluid should the nurse question for a patient with increased ICP?", o: ["0.9% sodium chloride", "3% sodium chloride", "0.45% sodium chloride", "Lactated Ringer's at a restricted rate"], a: 2, r: "Hypotonic fluids such as 0.45% saline shift water into brain cells and worsen cerebral edema. Isotonic or hypertonic solutions are preferred." },
{ q: "A patient is scheduled for an MRI of the brain. Which statement requires follow-up by the nurse?", o: ["\"I am afraid of closed spaces.\"", "\"I have a cardiac pacemaker.\"", "\"I had a CT scan last year.\"", "\"I wear contact lenses.\""], a: 1, r: "A pacemaker or other ferromagnetic implant may be a contraindication to MRI and must be reported before the test. Claustrophobia is also important but can be managed with sedation; the pacemaker is the safety priority." },
{ q: "A lumbar puncture is ordered for a patient with a suspected brain abscess and papilledema. What is the nurse's best action?", o: ["Place the patient in the knee-chest position", "Question the order before the procedure", "Keep the patient NPO for 8 hours", "Give a sedative before the procedure"], a: 1, r: "Papilledema indicates increased ICP. Removing CSF by lumbar puncture can cause brain herniation, so the nurse should question the order and notify the provider." },
{ q: "Which is the most common presenting symptom of a brain abscess?", o: ["High fever", "Headache", "Neck stiffness", "Hemiparesis"], a: 1, r: "Headache is the most common symptom of brain abscess. Fever may be absent, so its absence does not exclude the diagnosis." },
{ q: "A patient has a history of chronic otitis media and now has headache, drowsiness and new seizures. The nurse suspects which complication?", o: ["Migraine", "Brain abscess", "Bell's palsy", "Transient ischemic attack"], a: 1, r: "Brain abscesses often spread from nearby infections such as otitis media, mastoiditis or sinusitis, presenting with headache, focal signs, seizures and signs of raised ICP." },
{ q: "A patient with a tumor near the optic chiasm reports bumping into door frames. Which tumor and finding is most likely?", o: ["Cerebellar tumor — ataxia", "Pituitary adenoma — bitemporal visual field loss", "Occipital tumor — total blindness", "Acoustic neuroma — vertigo"], a: 1, r: "Pituitary adenomas press on the optic chiasm, causing loss of the outer (temporal) visual fields in both eyes, so the patient bumps into objects at the sides." },
{ q: "A family reports that a patient has become impulsive, uses poor judgment and has a changed personality. A tumor is most likely located in which lobe?", o: ["Occipital", "Frontal", "Parietal", "Cerebellum"], a: 1, r: "The frontal lobe controls personality, judgment, behavior and expressive speech, so frontal tumors commonly present with personality change." },
{ q: "Which manifestation would the nurse expect in a patient with a cerebellar tumor?", o: ["Expressive aphasia", "Ataxia and incoordination", "Visual hallucinations", "Loss of smell"], a: 1, r: "The cerebellum coordinates movement and balance, so cerebellar lesions produce ataxia, incoordination, dizziness and nystagmus." },
{ q: "After transsphenoidal removal of a pituitary tumor, which patient statement shows a need for more teaching?", o: ["\"I will not blow my nose.\"", "\"I will bend over to tie my shoes.\"", "\"I will avoid coughing and sneezing.\"", "\"I will report clear nasal drainage.\""], a: 1, r: "Bending forward raises ICP and stress on the surgical site. The patient should avoid bending, coughing, sneezing and nose blowing to prevent a CSF leak." },
{ q: "Six hours after pituitary surgery, a patient's urine output is 500 mL/hour with a specific gravity of 1.002. The nurse suspects:", o: ["SIADH", "Diabetes insipidus", "Acute kidney injury", "Fluid overload"], a: 1, r: "Large volumes of dilute urine with low specific gravity indicate diabetes insipidus from reduced ADH, a known complication of pituitary and other brain surgery." },
{ q: "Clear fluid is draining from the nose of a patient after head trauma. Which finding confirms it is likely CSF?", o: ["The fluid is sticky", "The fluid tests positive for glucose and forms a halo on gauze", "The fluid has a foul odor", "The fluid tests negative for glucose"], a: 1, r: "CSF contains glucose (mucus does not) and forms a yellow halo ring around blood on gauze. This suggests a basilar skull fracture or dural tear." },
{ q: "A patient has bruising behind the ear and around both eyes after a fall. Which order should the nurse question?", o: ["Neuro checks every hour", "Insert a nasogastric tube", "Elevate the head of bed to 30°", "Cervical collar"], a: 1, r: "Battle's sign and raccoon eyes suggest a basilar skull fracture. A nasal tube could enter the cranial vault through the fracture, so an orogastric tube is used instead." },
{ q: "A patient was briefly unconscious after a head injury, then awake and talking, and 2 hours later becomes rapidly unresponsive. This pattern is typical of:", o: ["Chronic subdural hematoma", "Epidural hematoma", "Concussion", "Diffuse axonal injury"], a: 1, r: "Epidural hematoma is an arterial bleed (often middle meningeal artery) with a classic lucid interval followed by rapid deterioration — a surgical emergency." },
{ q: "Which patient is at greatest risk for a chronic subdural hematoma?", o: ["A 22-year-old athlete", "A 78-year-old on warfarin who fell 3 weeks ago", "A 35-year-old with migraines", "A 10-year-old with a fractured arm"], a: 1, r: "Chronic subdural hematomas are venous bleeds that develop slowly. Older adults (brain atrophy stretches bridging veins), people on anticoagulants and those who use alcohol are at highest risk." },
{ q: "A patient with a head injury arrives in the emergency department. What is the nurse's FIRST action?", o: ["Assess the Glasgow Coma Scale", "Establish an airway while maintaining cervical spine alignment", "Obtain a CT scan", "Start an IV line"], a: 1, p: true, r: "Airway with cervical spine protection is the first priority in any head injury, because hypoxia causes secondary brain injury and a neck injury must be assumed." },
{ q: "Discharge teaching for a patient with a concussion should include returning to the hospital if which signs occur? (Select all that apply.)", o: ["Repeated vomiting", "Worsening headache", "Increasing drowsiness or confusion", "Mild headache relieved by paracetamol", "Unequal pupils", "Weakness of one side of the body"], a: [0, 1, 2, 4, 5], s: true, r: "Repeated vomiting, worsening headache, increasing drowsiness, unequal pupils and new weakness suggest bleeding or rising ICP. A mild headache relieved by simple analgesia is expected after concussion." },
{ q: "The nurse assesses a patient with suspected meningitis. Flexing the patient's neck causes the hips and knees to flex. This finding is documented as:", o: ["Positive Kernig's sign", "Positive Brudzinski's sign", "Positive Babinski sign", "Nuchal rigidity only"], a: 1, r: "Brudzinski's sign is flexion of the hips and knees when the neck is flexed. Kernig's sign is pain or resistance when extending the knee with the hip flexed." },
{ q: "Which CSF results are consistent with bacterial meningitis?", o: ["Clear, normal glucose, lymphocytes", "Cloudy, low glucose, high protein, neutrophils", "Clear, high glucose, low protein", "Bloody, normal protein, no WBCs"], a: 1, r: "Bacterial meningitis produces cloudy CSF with many neutrophils, high protein and low glucose because bacteria consume glucose. Viral meningitis typically shows clear CSF, lymphocytes and normal glucose." },
{ q: "A patient is admitted with suspected meningococcal meningitis. Which precaution should be started?", o: ["Contact precautions only", "Airborne precautions in a negative-pressure room", "Droplet precautions until 24 hours of effective antibiotics", "No precautions are needed"], a: 2, r: "N. meningitidis spreads by respiratory droplets. Droplet precautions continue until the patient has received about 24 hours of effective antibiotic therapy." },
{ q: "A patient with bacterial meningitis develops a purple, non-blanching rash and oozing from IV sites. The nurse suspects:", o: ["Allergic drug reaction", "Disseminated intravascular coagulation", "Heparin-induced thrombocytopenia", "Contact dermatitis"], a: 1, r: "Meningococcal septicemia can cause disseminated intravascular coagulation (DIC), shown by petechiae/purpura and bleeding from puncture sites — a life-threatening complication." },
{ q: "Which person should receive prophylaxis after exposure to a patient with meningococcal meningitis?", o: ["A nurse who walked past the room", "The patient's roommate in the dormitory", "A patient on another floor", "The hospital pharmacist"], a: 1, r: "Close contacts — household members, roommates, and anyone exposed to oral secretions — receive chemoprophylaxis such as rifampin or ciprofloxacin." },
{ q: "In a patient with suspected bacterial meningitis, blood cultures have been drawn and the lumbar puncture is delayed. What should the nurse do?", o: ["Hold antibiotics until the LP is done", "Give the prescribed antibiotics without further delay", "Wait for CT results before any treatment", "Give only antipyretics"], a: 1, p: true, r: "Bacterial meningitis is an emergency; antibiotics must not be delayed while waiting for an LP or imaging once cultures are obtained, because delay increases death and disability." },
{ q: "A patient begins a generalized tonic–clonic seizure while sitting in a chair. What is the nurse's FIRST action?", o: ["Insert an oral airway", "Ease the patient to the floor and protect the head", "Restrain the patient's arms", "Give IV lorazepam immediately"], a: 1, p: true, r: "Protecting the patient from injury comes first: ease them to the floor, cushion the head, move objects. Never force anything into the mouth or restrain the patient." },
{ q: "Which actions are appropriate during a tonic–clonic seizure? (Select all that apply.)", o: ["Note the time the seizure started", "Loosen restrictive clothing", "Place a padded tongue blade between the teeth", "Turn the patient to the side when possible", "Hold the limbs firmly to stop jerking", "Remain with the patient"], a: [0, 1, 3, 5], s: true, r: "Timing, loosening clothing, side-lying positioning and staying with the patient are correct. Objects in the mouth can break teeth or block the airway, and restraint can cause fractures." },
{ q: "A patient has been seizing continuously for 6 minutes. Which medication does the nurse anticipate first?", o: ["Oral phenytoin", "IV lorazepam", "IV mannitol", "Oral carbamazepine"], a: 1, r: "Status epilepticus (≥5 minutes) is treated first with a fast-acting IV benzodiazepine such as lorazepam, followed by a longer-acting anticonvulsant like fosphenytoin." },
{ q: "A patient taking phenytoin has a serum level of 28 mcg/mL. Which finding would the nurse expect?", o: ["Gingival bleeding", "Nystagmus and ataxia", "Increased seizure activity", "Hypoglycemia"], a: 1, r: "The therapeutic range of phenytoin is about 10–20 mcg/mL. Toxicity causes nystagmus, ataxia, slurred speech and drowsiness." },
{ q: "The nurse prepares IV phenytoin. Which action is correct?", o: ["Dilute it in 5% dextrose", "Flush the line with normal saline before and after", "Give it as a rapid IV push", "Mix it with other IV medications"], a: 1, r: "Phenytoin precipitates in dextrose solutions. It is given slowly with normal saline flushes before and after because rapid injection can cause hypotension and dysrhythmias." },
{ q: "Which teaching point is most important for a patient starting phenytoin?", o: ["Take it only when an aura occurs", "Maintain good oral hygiene and regular dental visits", "Stop the drug if gums swell", "Double the dose if a seizure occurs"], a: 1, r: "Phenytoin causes gingival hyperplasia, so good oral hygiene is essential. Anticonvulsants are taken daily and must never be stopped or adjusted without the provider." },
{ q: "A patient on valproic acid should have which laboratory tests monitored?", o: ["Liver function tests", "Thyroid function tests", "Serum lithium", "Coagulation only"], a: 0, r: "Valproic acid can cause hepatotoxicity and pancreatitis, so liver function tests are monitored regularly." },
{ q: "A patient with epilepsy says, \"My seizures have stopped for a year so I quit my medicine yesterday.\" What is the nurse's priority concern?", o: ["Weight gain", "Risk of status epilepticus", "Drug interaction", "Gingival hyperplasia"], a: 1, r: "Stopping anticonvulsants abruptly can precipitate severe seizures and status epilepticus. Medications are tapered only under medical supervision." },
{ q: "A child has frequent brief episodes of staring with eyelid fluttering, lasting a few seconds, with no postictal confusion. This describes which seizure type?", o: ["Tonic–clonic", "Absence", "Atonic", "Myoclonic"], a: 1, r: "Absence seizures are brief staring spells lasting seconds, often with eyelid fluttering and no postictal state. They are more common in children." },
{ q: "Which nursing intervention is the PRIORITY for an unconscious patient?", o: ["Turning every 2 hours", "Maintaining a patent airway", "Eye care", "Passive range of motion"], a: 1, p: true, r: "Loss of gag and cough reflexes and a relaxed tongue threaten the airway. Airway patency always comes before skin, eye and joint care." },
{ q: "An unconscious patient's eyes remain partly open and the blink reflex is absent. Which intervention is most appropriate?", o: ["Massage the eyelids", "Instill lubricating eye drops and apply eye shields as ordered", "Irrigate the eyes with saline every 8 hours only", "Keep the room brightly lit"], a: 1, r: "Without blinking, the cornea dries and ulcerates. Lubricating drops/ointment and protective shields or patches prevent corneal injury." },
{ q: "Which position is best for an unconscious patient without a cervical injury to prevent aspiration?", o: ["Supine flat", "Lateral or semi-prone", "Trendelenburg", "High Fowler's with neck flexed"], a: 1, r: "A lateral or semi-prone position allows the tongue to fall forward and secretions to drain from the mouth, reducing aspiration risk." },
{ q: "Which statement by a nurse about communicating with a comatose patient is correct?", o: ["\"There is no need to talk because he cannot hear.\"", "\"I explain each procedure because hearing may be preserved.\"", "\"Only family members should talk to him.\"", "\"Talking may increase his ICP, so I stay silent.\""], a: 1, r: "Hearing may persist in unconscious patients. Nurses should speak to the patient, explain care and avoid inappropriate conversations at the bedside." },
{ q: "A patient's right pupil becomes 6 mm and nonreactive while the left is 3 mm and brisk. What should the nurse do FIRST?", o: ["Recheck in one hour", "Notify the provider immediately", "Instill eye drops", "Document as normal"], a: 1, p: true, r: "A new unilateral fixed, dilated pupil indicates oculomotor nerve compression and possible herniation — an emergency requiring immediate notification." },
{ q: "Two patients have GCS scores of 6. One shows decorticate posturing and the other decerebrate posturing. Which statement is accurate?", o: ["Decorticate indicates brainstem damage", "Decerebrate posturing generally indicates a worse prognosis", "Both have the same motor score", "Posturing is a sign of improvement"], a: 1, r: "Decerebrate (extension) posturing reflects brainstem injury and carries a worse prognosis than decorticate (flexion) posturing, which reflects damage above the brainstem. Their motor scores differ (2 vs 3)." },
{ q: "A patient is to have an EEG in the morning. Which instruction is correct?", o: ["Apply hair conditioner after washing", "Wash hair and avoid oils or hair sprays", "Drink extra coffee before the test", "Fast for 24 hours"], a: 1, r: "Clean hair without oils or sprays allows good electrode contact. Stimulants such as caffeine are usually withheld because they can alter the tracing." },
{ q: "After cerebral angiography via the femoral artery, which assessment is the priority?", o: ["Bowel sounds", "Puncture site and pedal pulses of the affected leg", "Hearing", "Skin turgor of the arms"], a: 1, r: "The arterial puncture site can bleed or form a hematoma, and clots can occlude flow, so the nurse checks the site, distal pulses, color and temperature, along with neuro signs." },
{ q: "A patient is receiving dexamethasone for edema around a brain tumor. Which laboratory value should the nurse monitor?", o: ["Blood glucose", "Serum calcium", "Hemoglobin A only", "Urine ketones only"], a: 0, r: "Corticosteroids cause hyperglycemia, fluid retention and increased infection risk. Blood glucose is monitored closely." }
]
}});

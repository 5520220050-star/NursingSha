NS.reg("adult", "neuro", "icp", {
intro: {
  en: "**Increased intracranial pressure (ICP)** is a sustained rise in the pressure inside the skull above about **20 mmHg**. It is not a disease on its own but the **common final pathway** of many neurological problems — head injury, tumor, bleeding, abscess, meningitis and stroke. If uncontrolled it reduces blood flow to the brain and finally pushes brain tissue downward (**herniation**), which is fatal.",
  ar: "**ارتفاع الضغط داخل القحف** هو ارتفاع مستمر للضغط داخل الجمجمة فوق **20 ملم زئبق** تقريباً. ليس مرضاً بحد ذاته بل **المسار النهائي المشترك** لمشاكل عصبية كثيرة — إصابة الرأس، الأورام، النزف، الخراج، التهاب السحايا والجلطة. إذا لم يُسيطر عليه يقل جريان الدم للدماغ ثم يندفع نسيج الدماغ للأسفل (**الانفتاق**) وهو قاتل."
},
sections: [
{ h: { en: "Normal ICP and the Monro–Kellie hypothesis", ar: "الضغط الطبيعي وفرضية مونرو–كيلي" }, b: [
  { t: "p", en: "The skull is a **rigid, closed box** containing three components: **brain tissue (≈80%)**, **blood (≈10%)** and **cerebrospinal fluid (≈10%)**. Normal ICP is about **5–15 mmHg** (some textbooks give 0–15 or 10–20 mmHg). Short rises with coughing or straining are normal; a sustained ICP **above 20 mmHg** is intracranial hypertension.",
    ar: "الجمجمة **صندوق صلب مغلق** فيه ثلاثة مكونات: **نسيج الدماغ (80%)**، **الدم (10%)** و**السائل الدماغي الشوكي (10%)**. الضغط الطبيعي **5–15 ملم زئبق** تقريباً (بعض الكتب 0–15 أو 10–20). الارتفاعات القصيرة مع السعال والحزق طبيعية، أما الضغط المستمر **فوق 20** فهو ارتفاع الضغط داخل القحف." },
  { t: "svg", svg: '<svg viewBox="0 0 340 190" role="img" aria-label="Monro-Kellie: skull volume = brain 80% + blood 10% + CSF 10%"><rect x="10" y="22" width="320" height="90" rx="40" class="d-box" style="stroke-width:5"/><rect x="30" y="42" width="200" height="50" rx="8" class="d-navy"/><rect x="230" y="42" width="40" height="50" class="d-red"/><rect x="270" y="42" width="40" height="50" rx="8" class="d-green"/><text x="130" y="72" class="d-tw d-mid">Brain tissue ≈80%</text><text x="250" y="72" class="d-t d-mid" style="font-size:11px">Blood</text><text x="290" y="72" class="d-t d-mid" style="font-size:11px">CSF</text><text x="170" y="15" class="d-ts d-mid">Rigid skull = fixed total volume</text><text x="250" y="130" class="d-ts d-mid">≈10%</text><text x="290" y="130" class="d-ts d-mid">≈10%</text><text x="170" y="160" class="d-t d-mid">A tumor, bleed or edema adds volume:</text><text x="170" y="180" class="d-t d-mid">CSF and blood move out first, then ICP rises</text></svg>',
    en: "Monro–Kellie hypothesis", ar: "فرضية مونرو–كيلي" },
  { t: "p", en: "**Monro–Kellie hypothesis**: because the total volume inside the skull is fixed, an increase in one component must be balanced by a decrease in another, or ICP will rise. The brain **compensates** at first by: (1) pushing CSF into the spinal subarachnoid space, (2) reducing CSF production and increasing its absorption, and (3) pushing venous blood out of the skull. When these limits are used up, **even a small extra volume causes a large rise in ICP** (decompensation).",
    ar: "**فرضية مونرو–كيلي**: لأن الحجم الكلي داخل الجمجمة ثابت، يجب أن تقابل زيادة أحد المكونات نقصاً في آخر وإلا ارتفع الضغط. يُعوض الدماغ أولاً بـ: (1) دفع السائل الدماغي للحيز تحت العنكبوتي الشوكي، (2) تقليل إنتاج السائل وزيادة امتصاصه، (3) دفع الدم الوريدي خارج الجمجمة. وعند استنفاد هذه الحدود **تسبب زيادة صغيرة جداً ارتفاعاً كبيراً في الضغط** (فشل التعويض)." },
  { t: "h3", en: "Cerebral perfusion pressure (CPP) and autoregulation", ar: "ضغط التروية الدماغية والتنظيم الذاتي" },
  { t: "p", en: "**CPP = MAP − ICP**, where MAP (mean arterial pressure) = (systolic + 2 × diastolic) ÷ 3. Normal CPP is about **70–100 mmHg**; the target in brain injury is usually **≥ 60–70 mmHg**. A CPP **below ~50 mmHg** causes ischemia, and when ICP equals MAP, blood flow to the brain stops (**brain death**).",
    ar: "**ضغط التروية الدماغية = متوسط الضغط الشرياني − الضغط داخل القحف**، حيث المتوسط = (الانقباضي + 2 × الانبساطي) ÷ 3. الطبيعي **70–100**، والهدف في إصابات الدماغ عادة **60–70 فأكثر**. أقل من **50** يسبب نقص تروية، وعندما يتساوى الضغط داخل القحف مع المتوسط يتوقف جريان الدم للدماغ (**موت الدماغ**)." },
  { t: "p", en: "**Autoregulation** is the brain's ability to keep its blood flow constant over a wide range of blood pressures by constricting or dilating its arteries. It is often **lost after brain injury**, so the brain becomes directly dependent on systemic BP — hypotension causes ischemia and hypertension worsens edema. Carbon dioxide is the strongest cerebral **vasodilator**: **↑ PaCO₂ → vasodilation → ↑ blood volume → ↑ ICP**; hypoxia does the same.",
    ar: "**التنظيم الذاتي** هو قدرة الدماغ على ثبات جريان دمه مع تغير ضغط الدم عبر تضييق أو توسيع شرايينه. غالباً **يُفقد بعد إصابة الدماغ** فيصبح الدماغ معتمداً مباشرة على ضغط الدم — الهبوط يسبب نقص تروية والارتفاع يزيد الوذمة. ثاني أكسيد الكربون أقوى **موسّع** للأوعية الدماغية: **ارتفاعه ← توسع ← زيادة حجم الدم ← ارتفاع الضغط**، ونقص الأكسجين كذلك." },
  { t: "tip", en: "Worked example: BP 120/60 → MAP = (120 + 120) ÷ 3 = **80**. If ICP = 25, CPP = 80 − 25 = **55 mmHg** → inadequate perfusion.",
    ar: "مثال: الضغط 120/60 ← المتوسط = (120 + 120) ÷ 3 = **80**. إذا كان الضغط داخل القحف 25، فالتروية = 80 − 25 = **55** ← تروية غير كافية." }
]},
{ h: { en: "Causes", ar: "الأسباب" }, b: [
  { t: "table", h: ["Mechanism", "Examples"], r: [
    ["**↑ Brain tissue volume (mass/edema)**", "Brain tumor, hematoma (epidural, subdural, intracerebral), abscess, cerebral edema after trauma, stroke, surgery"],
    ["**↑ Blood volume**", "**Hypercapnia (↑CO₂)**, **hypoxia**, venous outflow obstruction (neck flexion, tight collar, head turned), hypertension with lost autoregulation, seizures, fever"],
    ["**↑ CSF volume**", "**Hydrocephalus** — blocked flow (tumor, blood) or poor absorption (meningitis, subarachnoid hemorrhage)"]],
    ar: { h: ["الآلية", "الأمثلة"], r: [
    ["**زيادة حجم النسيج (كتلة/وذمة)**", "ورم، أورام دموية، خراج، وذمة بعد الإصابة أو الجلطة أو الجراحة"],
    ["**زيادة حجم الدم**", "**ارتفاع ثاني أكسيد الكربون**، **نقص الأكسجين**، انسداد التصريف الوريدي (ثني الرقبة، الطوق الضيق)، ارتفاع الضغط، النوبات، الحمى"],
    ["**زيادة السائل الدماغي**", "**استسقاء الرأس** — انسداد الجريان أو ضعف الامتصاص"]] } },
  { t: "table", h: ["Type of cerebral edema", "Mechanism", "Example / response"], r: [
    ["**Vasogenic**", "Damaged blood–brain barrier lets plasma proteins and fluid leak into tissue", "Around **tumors** and abscesses — responds to **corticosteroids (dexamethasone)**"],
    ["**Cytotoxic**", "Cell membrane pumps fail (hypoxia) → water enters brain cells", "Hypoxia/ischemia, stroke, cardiac arrest — steroids do **not** help"],
    ["**Interstitial**", "CSF moves into brain tissue", "Hydrocephalus"]],
    ar: { h: ["نوع الوذمة", "الآلية", "المثال"], r: [
    ["**وعائية المنشأ**", "تلف الحاجز الدموي الدماغي فيتسرب البروتين والسائل", "حول **الأورام** والخراج — تستجيب **للكورتيزون**"],
    ["**سامة للخلايا**", "فشل مضخات الخلايا بنقص الأكسجين فيدخل الماء للخلايا", "نقص الأكسجة والجلطة — الكورتيزون **لا** يفيد"],
    ["**خلالية**", "انتقال السائل الدماغي للنسيج", "استسقاء الرأس"]] } }
]},
{ h: { en: "Pathophysiology and brain herniation", ar: "الفيزيولوجيا المرضية وانفتاق الدماغ" }, b: [
  { t: "cycle", center: "Vicious|cycle", steps: [
    { en: "Mass, bleeding or edema → **↑ ICP**", ar: "كتلة أو نزف أو وذمة ← ارتفاع الضغط" },
    { en: "↑ ICP → **↓ CPP** and ↓ cerebral blood flow", ar: "انخفاض ضغط التروية وجريان الدم" },
    { en: "Brain **ischemia & hypoxia**, ↑ CO₂ and lactic acid", ar: "نقص التروية والأكسجة وتراكم ثاني أكسيد الكربون" },
    { en: "**Vasodilation and more edema**", ar: "توسع الأوعية وزيادة الوذمة" },
    { en: "ICP rises further → brain tissue shifts → **herniation**", ar: "ارتفاع أكبر ← إزاحة النسيج ← **انفتاق**" } ] },
  { t: "table", h: ["Herniation", "What moves", "Key signs"], r: [
    ["**Cingulate (subfalcine)**", "Cingulate gyrus under the falx", "Often no specific signs; may compress arteries"],
    ["**Uncal (lateral transtentorial)**", "Medial temporal lobe (uncus) through the tentorium, compressing **CN III and the midbrain**", "**Ipsilateral dilated fixed pupil**, ↓ LOC, contralateral weakness, then posturing"],
    ["**Central (transtentorial)**", "Downward displacement of both hemispheres and diencephalon", "↓ LOC, small then fixed pupils, Cheyne–Stokes, posturing"],
    ["**Tonsillar (infratentorial)**", "Cerebellar tonsils through the **foramen magnum**, compressing the medulla", "**Respiratory arrest, cardiovascular collapse, death**"]],
    ar: { h: ["الانفتاق", "ما الذي يتحرك", "العلامات"], r: [
    ["**تحت المنجل**", "التلفيف الحزامي تحت المنجل", "غالباً بلا علامات محددة"],
    ["**الكلّابي**", "الفص الصدغي الأنسي عبر الخيمة ويضغط **العصب الثالث والدماغ المتوسط**", "**حدقة متوسعة ثابتة في نفس الجهة**، انخفاض الوعي، ضعف الجهة المقابلة"],
    ["**المركزي**", "نزول نصفي الدماغ والدماغ البيني", "انخفاض الوعي، حدقتان صغيرتان ثم ثابتتان، وضعيات"],
    ["**اللوزي**", "لوزتا المخيخ عبر **الثقبة العظمى** تضغطان البصلة", "**توقف التنفس وانهيار الدورة والوفاة**"]] } }
]},
{ h: { en: "Clinical manifestations", ar: "المظاهر السريرية" }, b: [
  { t: "compare", cols: [
    { h: { en: "Early signs", ar: "العلامات المبكرة" }, en: [
      "**Change in LOC** — the earliest and most sensitive sign: restlessness, irritability, confusion, lethargy, new disorientation",
      "Headache (often worse in the morning, with coughing/straining)",
      "Vomiting, often **projectile** and without nausea",
      "Pupil changes: **sluggish reaction**, slight inequality",
      "Subtle motor weakness (pronator drift), visual disturbances (blurring, diplopia)",
      "Papilledema (swollen optic disc) with chronic ↑ICP"],
      ar: ["**تغير مستوى الوعي** — الأبكر والأدق: تململ، عصبية، تشوش، خمول", "صداع يشتد صباحاً ومع السعال", "تقيؤ قد يكون **قذفياً** بدون غثيان", "تغير الحدقة: **استجابة بطيئة**", "ضعف حركي خفيف، تشوش أو ازدواج الرؤية", "وذمة حليمة العصب البصري مع الارتفاع المزمن"] },
    { h: { en: "Late signs", ar: "العلامات المتأخرة" }, en: [
      "**Cushing's triad**: ↑ systolic BP with **widening pulse pressure**, **bradycardia**, **irregular respirations**",
      "Deep coma (GCS falling sharply)",
      "**Fixed, dilated pupil(s)**",
      "Decorticate → **decerebrate** posturing → flaccidity",
      "Abnormal breathing patterns (Cheyne–Stokes, ataxic)",
      "**Hyperthermia** (hypothalamic damage), loss of brainstem reflexes"],
      ar: ["**ثالوث كوشينغ**: ارتفاع الانقباضي مع **اتساع فرق النبض**، **بطء القلب**، **تنفس غير منتظم**", "غيبوبة عميقة", "**حدقة متوسعة ثابتة**", "وضعية قشرية ثم **مخية** ثم ارتخاء", "أنماط تنفس غير طبيعية", "**ارتفاع الحرارة** وفقدان منعكسات جذع الدماغ"] } ] },
  { t: "warn", en: "Do not wait for Cushing's triad. By the time bradycardia and widening pulse pressure appear, the brainstem is already being compressed. **Report any subtle decrease in LOC or new pupil sluggishness at once.**",
    ar: "لا تنتظر ثالوث كوشينغ. عند ظهور بطء القلب واتساع فرق النبض يكون جذع الدماغ قد انضغط. **بلّغ فوراً عن أي انخفاض بسيط في الوعي أو بطء جديد في الحدقة.**" },
  { t: "p", en: "Infants with open fontanelles show a **bulging fontanelle**, separated sutures, increasing head circumference, high-pitched cry and \"sunset eyes\" instead of the adult picture.",
    ar: "الرضع ذوو اليوافيخ المفتوحة يظهر لديهم **انتفاخ اليافوخ**، تباعد الدروز، زيادة محيط الرأس، بكاء حاد و«عيون الغروب»." }
]},
{ h: { en: "Diagnostic evaluation and ICP monitoring", ar: "التشخيص ومراقبة الضغط داخل القحف" }, b: [
  { t: "list", en: [
    "**CT / MRI** to find the cause (mass, bleeding, edema, hydrocephalus, midline shift)",
    "**Lumbar puncture is contraindicated** — removing lumbar CSF can cause herniation",
    "Arterial blood gases (keep PaCO₂ and PaO₂ normal), serum sodium and osmolality, glucose, coagulation",
    "**Invasive ICP monitoring** in severe cases (e.g., GCS ≤ 8 with abnormal CT)"],
    ar: [
    "**المفراس أو الرنين** لمعرفة السبب (كتلة، نزف، وذمة، استسقاء، انحراف الخط الوسطي)",
    "**البزل القطني ممنوع** — قد يسبب انفتاقاً",
    "غازات الدم، الصوديوم والأسمولية، السكر، التخثر",
    "**مراقبة الضغط داخل القحف الجراحية** في الحالات الشديدة"] },
  { t: "table", h: ["Monitoring device", "Advantages", "Nursing points"], r: [
    ["**Intraventricular catheter (ventriculostomy / EVD)**", "Gold standard; measures ICP **and can drain CSF** to lower it", "Highest infection risk; level the transducer/drip chamber at the **tragus of the ear (foramen of Monro)**; clamp only as ordered; record CSF amount, color, clarity"],
    ["**Subarachnoid bolt/screw**", "Easier insertion", "Can't drain CSF; may become blocked"],
    ["**Intraparenchymal / fiberoptic sensor**", "Accurate, lower infection risk", "Can't drain CSF; can't be re-zeroed after insertion"],
    ["**Epidural sensor**", "Least invasive", "Less accurate"]],
    ar: { h: ["الجهاز", "المميزات", "نقاط تمريضية"], r: [
    ["**قسطرة البطين (المصرف الخارجي)**", "المعيار الذهبي؛ يقيس الضغط **ويصرّف السائل** لخفضه", "أعلى خطر للعدوى؛ ضبط المستوى عند **وتدة الأذن**؛ الإغلاق حسب الطلب فقط؛ تسجيل كمية ولون السائل"],
    ["**البرغي تحت العنكبوتي**", "إدخال أسهل", "لا يصرّف وقد ينسد"],
    ["**حساس داخل النسيج (ألياف ضوئية)**", "دقيق وعدوى أقل", "لا يصرّف ولا يُعاد تصفيره"],
    ["**حساس فوق الجافية**", "الأقل تدخلاً", "أقل دقة"]] } }
]},
{ h: { en: "Medical management", ar: "العلاج الطبي" }, b: [
  { t: "p", en: "The goals are to **treat the cause**, **reduce ICP below 20 mmHg**, **maintain CPP (≥ 60–70 mmHg)** and **prevent secondary brain injury** from hypoxia, hypotension, hypercapnia, fever, hypo/hyperglycemia and seizures.",
    ar: "الأهداف: **علاج السبب**، **خفض الضغط تحت 20**، **الحفاظ على ضغط التروية (60–70 فأكثر)**، و**منع الإصابة الدماغية الثانوية** بسبب نقص الأكسجين وهبوط الضغط وارتفاع ثاني أكسيد الكربون والحمى واضطراب السكر والنوبات." },
  { t: "table", h: ["Treatment", "How it helps", "Nursing considerations"], r: [
    ["**Airway & ventilation**", "Prevents hypoxia and hypercapnia (both ↑ICP)", "Keep **PaO₂ normal/high and PaCO₂ ≈ 35–45 mmHg**; brief hyperventilation (PaCO₂ 30–35) only for impending herniation — prolonged hyperventilation causes ischemia"],
    ["**Osmotic diuretic — mannitol**", "Draws water from brain tissue into the blood, then excreted", "Use a filter (crystals); monitor **urine output, serum osmolality** (often keep < 310–320 mOsm/kg), electrolytes, BP; insert urinary catheter; risk of dehydration, kidney injury, rebound edema"],
    ["**Hypertonic saline (e.g., 3%)**", "Pulls fluid out of brain; supports BP", "Central line preferred; monitor **serum sodium**"],
    ["**Corticosteroids (dexamethasone)**", "Reduce **vasogenic** edema around tumors/abscesses", "**Not used for traumatic brain injury**; monitor glucose, GI bleeding (give PPI/H2 blocker), infection"],
    ["**CSF drainage**", "Removes volume directly via ventriculostomy", "Strict asepsis; do not over-drain"],
    ["**Sedation, analgesia, paralysis; barbiturate coma**", "Lower brain metabolism & O₂ demand; prevent agitation and ventilator fighting", "Neuro assessment becomes limited — rely on ICP, pupils, EEG; monitor BP"],
    ["**Temperature control**", "Fever ↑ metabolism and ICP", "Antipyretics, cooling blankets; prevent **shivering** (it ↑ICP)"],
    ["**Blood pressure management**", "Maintain CPP", "Vasopressors for hypotension; avoid sudden hypertension"],
    ["**Anticonvulsants**", "Seizures greatly ↑ metabolism and ICP", "Seizure precautions; levels as ordered"],
    ["**Fluids**", "Maintain normal volume", "**Isotonic** fluids (0.9% saline); **avoid hypotonic** (D5W, 0.45% saline) which worsen edema; avoid fluid overload"],
    ["**Surgery**", "Remove the cause or give space", "Evacuation of hematoma/tumor, shunt for hydrocephalus, **decompressive craniectomy** (helmet & protection of bone flap site)"]],
    ar: { h: ["العلاج", "كيف يفيد", "اعتبارات تمريضية"], r: [
    ["**مجرى الهواء والتهوية**", "يمنع نقص الأكسجين وارتفاع CO₂", "الأكسجين طبيعي، وCO₂ بين **35–45**؛ فرط التهوية المؤقت (30–35) فقط عند الانفتاق الوشيك لأن الطويل يسبب نقص تروية"],
    ["**المانيتول**", "يسحب الماء من الدماغ للدم ثم يُطرح", "فلتر للبلورات؛ مراقبة **البول والأسمولية** والأملاح والضغط؛ قسطرة بولية؛ خطر الجفاف وأذى الكلى"],
    ["**المحلول الملحي عالي التركيز (3%)**", "يسحب السائل ويدعم الضغط", "خط مركزي ومراقبة **الصوديوم**"],
    ["**الكورتيزون (ديكساميثازون)**", "يقلل الوذمة **الوعائية** حول الأورام", "**لا يُستخدم لإصابات الرأس**؛ مراقبة السكر ونزف المعدة والعدوى"],
    ["**تصريف السائل الدماغي**", "يزيل الحجم مباشرة", "تعقيم صارم وعدم الإفراط"],
    ["**التهدئة والتسكين وغيبوبة الباربيتورات**", "تقليل استهلاك الدماغ للأكسجين", "التقييم العصبي محدود؛ مراقبة الضغط"],
    ["**ضبط الحرارة**", "الحمى ترفع الضغط", "خافضات حرارة وبطانيات تبريد؛ منع **الارتجاف**"],
    ["**ضبط ضغط الدم**", "الحفاظ على التروية", "رافعات الضغط عند الهبوط"],
    ["**مضادات الاختلاج**", "النوبات ترفع الضغط", "احتياطات النوبات"],
    ["**السوائل**", "حجم طبيعي", "محاليل **متساوية التوتر**؛ **تجنب منخفضة التوتر** لأنها تزيد الوذمة"],
    ["**الجراحة**", "إزالة السبب أو إعطاء مساحة", "إخلاء الورم الدموي، تحويلة، **استئصال جزء من الجمجمة** مع خوذة وحماية"]] } }
]},
{ h: { en: "Nursing management", ar: "الرعاية التمريضية" }, b: [
  { t: "h3", en: "Assessment", ar: "التقييم" },
  { t: "list", en: [
    "Neuro observations as often as ordered (often hourly or every 15 min): **GCS, pupils, limb strength, vital signs, respiratory pattern**",
    "ICP and CPP readings and waveform if monitored; CSF drainage",
    "Oxygen saturation, ABGs, ventilator settings",
    "Intake & output, urine specific gravity, serum sodium and osmolality (for DI/SIADH and mannitol)",
    "Temperature, blood glucose, signs of infection at monitoring/drain sites"],
    ar: [
    "المراقبة العصبية حسب الطلب: **غلاسكو، الحدقتان، قوة الأطراف، العلامات الحيوية، نمط التنفس**",
    "قراءات الضغط داخل القحف والتروية والتصريف",
    "تشبع الأكسجين وغازات الدم",
    "الداخل والخارج وكثافة البول والصوديوم والأسمولية",
    "الحرارة، السكر، علامات العدوى في مواقع القسطرة"] },
  { t: "h3", en: "Nursing diagnoses", ar: "التشخيصات التمريضية" },
  { t: "list", en: [
    "**Decreased intracranial adaptive capacity** related to increased ICP",
    "**Risk for ineffective cerebral tissue perfusion** related to ↓CPP",
    "**Ineffective airway clearance / breathing pattern** related to ↓LOC and brainstem compression",
    "**Risk for imbalanced fluid volume** related to diuretics, DI or SIADH",
    "**Risk for infection** related to ICP monitoring device/drain",
    "**Risk for injury** related to seizures, restlessness, decreased LOC"],
    ar: [
    "**نقص القدرة التكيفية داخل القحف** بسبب ارتفاع الضغط",
    "**خطر نقص التروية الدماغية** بسبب انخفاض ضغط التروية",
    "**عدم فاعلية تنظيف المجرى / نمط التنفس** بسبب انخفاض الوعي",
    "**خطر اختلال حجم السوائل** بسبب المدرات أو السكري الكاذب أو SIADH",
    "**خطر العدوى** بسبب أجهزة المراقبة والمصارف",
    "**خطر الإصابة** بسبب النوبات والتململ"] },
  { t: "h3", en: "Interventions to lower ICP (with rationale)", ar: "التدخلات لخفض الضغط (مع السبب)" },
  { t: "table", h: ["Intervention", "Rationale"], r: [
    ["**Elevate head of bed 30°** (unless contraindicated)", "Promotes venous drainage from the head"],
    ["**Head and neck in neutral midline position**; avoid tight tracheostomy ties/collars", "Neck flexion or rotation obstructs jugular veins"],
    ["**Avoid extreme hip flexion** (> 90°)", "Increases intra-abdominal and intrathoracic pressure"],
    ["**Prevent Valsalva**: stool softeners, no straining, no isometric exercise; teach to exhale when turning", "Straining raises intrathoracic pressure and ICP"],
    ["**Suction only when needed, ≤ 10 s**, hyperoxygenate before and after; limit passes", "Suctioning causes coughing, hypoxia and ICP spikes"],
    ["**Space nursing activities**; provide rest periods between turning, bathing and suctioning", "Clustering many activities causes sustained ICP rises"],
    ["**Quiet, dim environment**; limit noise and stimulating conversation; gentle touch; explain care", "Stimulation and emotional stress raise ICP"],
    ["**Maintain normothermia**; prevent shivering", "Fever and shivering increase metabolic demand"],
    ["**Maintain oxygenation and normal PaCO₂**", "Hypoxia and hypercapnia dilate cerebral vessels"],
    ["**Avoid restraints** where possible", "Struggling against restraints raises ICP"],
    ["Give **isotonic fluids**; strict I&O; daily weight", "Hypotonic fluids worsen cerebral edema"],
    ["**Seizure precautions** and anticonvulsants as ordered", "Seizures increase cerebral metabolism and ICP"]],
    ar: { h: ["التدخل", "السبب"], r: [
    ["**رفع رأس السرير 30 درجة**", "يسهل التصريف الوريدي من الرأس"],
    ["**الرأس والرقبة في الخط الوسطي**؛ تجنب الأربطة والأطواق الضيقة", "ثني أو تدوير الرقبة يضغط الأوردة الوداجية"],
    ["**تجنب ثني الورك الشديد**", "يزيد ضغط البطن والصدر"],
    ["**منع الحزق**: ملينات، تعليم الزفير عند التقليب", "الحزق يرفع ضغط الصدر والقحف"],
    ["**الشفط عند الحاجة فقط ≤10 ثوانٍ** مع الأكسجين قبله وبعده", "الشفط يسبب سعالاً ونقص أكسجة وارتفاعاً"],
    ["**توزيع الأنشطة** مع فترات راحة", "تجميع الأنشطة يرفع الضغط لفترة طويلة"],
    ["**بيئة هادئة ومعتمة** وتقليل المحادثات المثيرة", "التنبيه والتوتر يرفعان الضغط"],
    ["**حرارة طبيعية** ومنع الارتجاف", "الحمى والارتجاف يزيدان الاستهلاك"],
    ["**أكسجة طبيعية وCO₂ طبيعي**", "نقصهما يوسع الأوعية"],
    ["**تجنب التقييد** قدر الإمكان", "المقاومة ترفع الضغط"],
    ["**محاليل متساوية التوتر** ومراقبة السوائل والوزن", "المنخفضة التوتر تزيد الوذمة"],
    ["**احتياطات النوبات** والأدوية", "النوبات ترفع الضغط"]] } },
  { t: "mnem", k: "HEAD UP", title: "Quick ICP care checklist", rows: [
    ["H", "**HOB 30°**, head midline", "رأس السرير 30 والرأس مستقيم"],
    ["E", "**Eliminate straining** — stool softeners, no Valsalva", "منع الحزق"],
    ["A", "**Airway & oxygen** — normal O₂ and CO₂, brief suction", "مجرى الهواء والأكسجين"],
    ["D", "**Don't cluster care** — rest between activities", "لا تجمع الإجراءات"],
    ["U", "**Upkeep normal temperature & glucose**", "حرارة وسكر طبيعيان"],
    ["P", "**Pupils & GCS** — monitor and report changes early", "الحدقتان وغلاسكو والإبلاغ المبكر"] ] }
]},
{ h: { en: "Complications", ar: "المضاعفات" }, b: [
  { t: "compare", cols: [
    { h: { en: "Diabetes insipidus (DI)", ar: "السكري الكاذب" }, en: ["↓ ADH (pituitary/hypothalamus injury)", "**Polyuria** (e.g., > 200–250 mL/h), very dilute urine — **specific gravity < 1.005**", "**Serum sodium ↑**, serum osmolality ↑, thirst, dehydration", "Treatment: fluid replacement, **desmopressin (DDAVP)**"], ar: ["نقص الهرمون المضاد للإدرار", "**بول غزير** مخفف جداً — **كثافة أقل من 1.005**", "**ارتفاع الصوديوم** والأسمولية والعطش", "العلاج: تعويض السوائل و**الديسموبريسين**"] },
    { h: { en: "SIADH", ar: "متلازمة الإفراز غير الملائم للهرمون المضاد للإدرار" }, en: ["**Excess ADH** → water retention", "**Low urine output**, concentrated urine (high specific gravity)", "**Dilutional hyponatremia** — confusion, seizures, worsening cerebral edema", "Treatment: **fluid restriction**, hypertonic saline if severe, correct sodium slowly"], ar: ["**زيادة الهرمون** ← احتباس الماء", "**قلة البول** وتركيزه", "**نقص صوديوم تخفيفي** — تشوش، نوبات، زيادة الوذمة", "العلاج: **تقييد السوائل** ومحلول عالي التركيز وتصحيح بطيء"] } ] },
  { t: "list", en: ["**Brain herniation** and **brain death**", "Infection of the ICP device/drain → ventriculitis, meningitis", "Seizures; stress ulcers; aspiration pneumonia; DVT and pressure injuries from immobility"],
    ar: ["**انفتاق الدماغ** و**موت الدماغ**", "عدوى الجهاز أو المصرف ← التهاب البطينات أو السحايا", "النوبات، قرحة الإجهاد، الالتهاب الرئوي بالشفط، الخثار وقرح الفراش"] }
]}
],
questions: [
{ q: "Which statement best describes the Monro–Kellie hypothesis?", o: ["ICP depends only on blood pressure", "An increase in one intracranial component must be offset by a decrease in another or ICP rises", "CSF volume is fixed and cannot change", "Brain tissue expands freely within the skull"], a: 1, r: "The skull has a fixed volume containing brain, blood and CSF. Compensation occurs by displacing CSF and venous blood; when exhausted, ICP rises." },
{ q: "A patient's BP is 130/70 mmHg and ICP is 22 mmHg. What is the cerebral perfusion pressure?", o: ["68 mmHg", "78 mmHg", "90 mmHg", "108 mmHg"], a: 0, r: "MAP = (130 + 2 × 70) ÷ 3 = 90. CPP = MAP − ICP = 90 − 22 = 68 mmHg." },
{ q: "Which CPP value indicates a risk of cerebral ischemia?", o: ["85 mmHg", "75 mmHg", "45 mmHg", "95 mmHg"], a: 2, r: "CPP below about 50 mmHg leads to cerebral ischemia; normal is about 70–100 mmHg." },
{ q: "Which ICP value requires treatment if sustained?", o: ["8 mmHg", "12 mmHg", "15 mmHg", "24 mmHg"], a: 3, r: "A sustained ICP above about 20 mmHg is intracranial hypertension and requires intervention." },
{ q: "Which is the EARLIEST sign of increasing ICP?", o: ["Widening pulse pressure", "Bradycardia", "Restlessness and new confusion", "Fixed dilated pupils"], a: 2, r: "Changes in LOC appear first. Cushing's triad and fixed pupils are late signs." },
{ q: "Which findings make up Cushing's triad? (Select all that apply.)", o: ["Rising systolic BP with widening pulse pressure", "Bradycardia", "Irregular respirations", "Tachycardia", "Hypotension"], a: [0, 1, 2], s: true, r: "Cushing's triad is hypertension with widening pulse pressure, bradycardia and irregular respirations, reflecting brainstem compression." },
{ q: "Why does carbon dioxide retention increase ICP?", o: ["CO₂ constricts cerebral arteries", "CO₂ is a potent cerebral vasodilator, increasing cerebral blood volume", "CO₂ reduces CSF production", "CO₂ shrinks brain tissue"], a: 1, r: "Hypercapnia dilates cerebral vessels, increasing blood volume inside the skull and raising ICP." },
{ q: "A patient with increased ICP is mechanically ventilated. Which PaCO₂ range is generally maintained?", o: ["20–25 mmHg", "35–45 mmHg (normocapnia)", "50–60 mmHg", "65–70 mmHg"], a: 1, r: "Normocapnia is maintained; brief hyperventilation to 30–35 mmHg is reserved for impending herniation because prolonged low CO₂ causes ischemia." },
{ q: "Which positions or actions increase ICP and should be avoided? (Select all that apply.)", o: ["Flexing the neck", "Flexing the hips more than 90°", "Straining at stool", "Keeping the head in midline", "Prolonged suctioning", "Turning the head sharply to one side"], a: [0, 1, 2, 4, 5], s: true, r: "Neck flexion/rotation obstructs venous outflow; hip flexion and straining raise intrathoracic/intra-abdominal pressure; prolonged suctioning causes hypoxia and coughing. Midline position is recommended." },
{ q: "What is the recommended head-of-bed position for a patient with increased ICP (no contraindication)?", o: ["Flat", "30 degrees", "Trendelenburg", "90 degrees with neck flexed"], a: 1, r: "Elevating the head about 30° with the head midline promotes venous drainage while maintaining cerebral perfusion." },
{ q: "The nurse plans care for a patient with increased ICP. Which schedule is best?", o: ["Bath, linen change, suctioning and turning all at once", "Space activities with rest periods between them", "Suction every 30 minutes routinely", "Encourage visitors to stimulate the patient continuously"], a: 1, r: "Clustering many activities causes cumulative ICP rises; spacing care allows ICP to return to baseline." },
{ q: "Before suctioning a patient with increased ICP, the nurse should:", o: ["Lower the head of the bed flat", "Hyperoxygenate and limit suction passes to about 10 seconds", "Instill saline", "Turn the head to the side"], a: 1, r: "Hyperoxygenation and brief passes reduce hypoxia and ICP spikes associated with suctioning." },
{ q: "Mannitol is given to a patient with cerebral edema. Its mechanism is to:", o: ["Constrict cerebral arteries", "Draw water from brain tissue into the plasma for excretion", "Reduce CSF production only", "Stop seizures"], a: 1, r: "Mannitol is an osmotic diuretic that creates an osmotic gradient, pulling fluid from the brain into the vascular space." },
{ q: "Which assessments are essential during mannitol therapy? (Select all that apply.)", o: ["Urine output", "Serum osmolality", "Serum electrolytes", "Signs of dehydration", "Pupil size only once daily"], a: [0, 1, 2, 3], s: true, r: "Mannitol causes diuresis and electrolyte shifts; serum osmolality is monitored to avoid toxicity and renal injury. Neuro checks are frequent, not daily." },
{ q: "The nurse notices crystals in a mannitol vial. What should the nurse do?", o: ["Give it anyway", "Warm it to dissolve the crystals per policy and use an in-line filter", "Shake vigorously and give quickly", "Dilute with D5W"], a: 1, r: "Mannitol can crystallize at low temperatures; it is warmed to redissolve and given through a filter." },
{ q: "Dexamethasone is MOST effective for which type of cerebral edema?", o: ["Cytotoxic edema after cardiac arrest", "Vasogenic edema around a brain tumor", "Interstitial edema from hydrocephalus", "Edema from severe traumatic brain injury"], a: 1, r: "Corticosteroids stabilize the blood–brain barrier and reduce vasogenic edema around tumors and abscesses; they are not recommended for traumatic brain injury." },
{ q: "Which IV fluid order should the nurse question for a patient with cerebral edema?", o: ["0.9% sodium chloride", "3% sodium chloride", "5% dextrose in water (D5W)", "Mannitol 20%"], a: 2, r: "D5W becomes hypotonic once dextrose is metabolized and shifts water into brain cells, worsening edema." },
{ q: "A patient with increased ICP has a temperature of 39.2 °C and is shivering under a cooling blanket. What should the nurse do?", o: ["Increase the cooling", "Report shivering and use measures to prevent it, since shivering increases ICP", "Ignore the shivering", "Add more blankets on top"], a: 1, r: "Fever and shivering increase cerebral metabolism and ICP; shivering is controlled (e.g., medications per order, gradual cooling)." },
{ q: "Why is a lumbar puncture contraindicated in a patient with increased ICP?", o: ["It causes infection only", "Sudden release of pressure below can cause brain herniation", "It lowers blood pressure", "It is too painful"], a: 1, r: "Removing CSF from the lumbar region creates a pressure gradient that can draw the brain down through the foramen magnum." },
{ q: "A patient's right pupil becomes fixed and dilated with decreasing LOC and left-sided weakness. Which type of herniation is likely?", o: ["Tonsillar", "Uncal (lateral transtentorial)", "Cingulate", "Central only"], a: 1, r: "Uncal herniation compresses the oculomotor nerve on the same side (fixed dilated pupil) and the cerebral peduncle (contralateral weakness)." },
{ q: "Herniation of the cerebellar tonsils through the foramen magnum leads most directly to:", o: ["Visual loss", "Respiratory arrest", "Hearing loss", "Hemiplegia only"], a: 1, r: "Tonsillar herniation compresses the medulla, where respiratory and cardiovascular centers are located, causing respiratory arrest and death." },
{ q: "Which device both measures ICP and allows CSF drainage?", o: ["Epidural sensor", "Subarachnoid bolt", "Intraventricular catheter (ventriculostomy)", "Fiberoptic parenchymal sensor"], a: 2, r: "An intraventricular catheter connected to an external drainage system measures pressure and drains CSF to lower ICP." },
{ q: "Where should the transducer of an external ventricular drain be leveled?", o: ["At the umbilicus", "At the tragus of the ear (foramen of Monro)", "At the phlebostatic axis only", "At the bedside floor"], a: 1, r: "The tragus approximates the foramen of Monro, the reference point for ICP measurement and drainage height." },
{ q: "Which complication is the greatest risk with an intraventricular ICP catheter?", o: ["Hypoglycemia", "Infection (ventriculitis/meningitis)", "Hypercalcemia", "Constipation"], a: 1, r: "Intraventricular catheters have the highest infection risk among ICP monitors; strict asepsis and monitoring for fever and cloudy CSF are essential." },
{ q: "A patient with a head injury has a urine output of 450 mL/h with specific gravity 1.002 and serum sodium 151 mEq/L. Which order does the nurse anticipate?", o: ["Fluid restriction", "Desmopressin (DDAVP) and fluid replacement", "Furosemide", "Hypertonic saline only"], a: 1, r: "These findings indicate diabetes insipidus (ADH deficiency); treatment is ADH replacement with desmopressin and fluid replacement." },
{ q: "A patient after brain injury has decreased urine output, concentrated urine and serum sodium 122 mEq/L. Which order should the nurse expect?", o: ["Increase IV D5W", "Fluid restriction", "Desmopressin", "Encourage free water"], a: 1, r: "SIADH causes water retention and dilutional hyponatremia; fluid restriction is first-line, with hypertonic saline if severe." },
{ q: "Why is hyponatremia dangerous in a patient with increased ICP?", o: ["It causes bradycardia only", "Low serum sodium shifts water into brain cells, worsening cerebral edema", "It increases urine output", "It has no neurologic effect"], a: 1, r: "Hypotonic plasma moves water into cells, increasing cerebral edema and ICP and causing seizures." },
{ q: "A patient's BP is 182/64, pulse 50 and respirations irregular after a brain hemorrhage. What is the nurse's priority?", o: ["Document and recheck in 4 hours", "Notify the provider immediately — signs of brainstem compression", "Give an antihypertensive without orders", "Encourage oral fluids"], a: 1, p: true, r: "This is Cushing's triad, a late sign of severely raised ICP and impending herniation, requiring immediate intervention." },
{ q: "Which nursing actions help prevent Valsalva maneuver in a patient with increased ICP? (Select all that apply.)", o: ["Give stool softeners as ordered", "Teach the patient to exhale while turning", "Encourage forceful coughing", "Avoid isometric exercises", "Ask the patient to hold the breath when moving up in bed"], a: [0, 1, 3], s: true, r: "Stool softeners, exhaling during movement and avoiding isometric effort prevent rises in intrathoracic pressure. Forceful coughing and breath holding increase ICP." },
{ q: "An infant has a bulging anterior fontanelle, high-pitched cry and increasing head circumference. These are signs of:", o: ["Dehydration", "Increased intracranial pressure", "Hypoglycemia", "Normal growth"], a: 1, r: "In infants with open sutures, raised ICP shows as a bulging fontanelle, separated sutures, enlarging head and high-pitched cry." },
{ q: "Which nursing diagnosis is MOST specific to a patient with increased ICP?", o: ["Decreased intracranial adaptive capacity", "Impaired skin integrity", "Deficient knowledge", "Disturbed sleep pattern"], a: 0, r: "This diagnosis describes impaired compensation in which small stimuli cause disproportionate ICP rises." },
{ q: "Restraints are generally avoided in a restless patient with increased ICP because:", o: ["They are expensive", "Struggling against restraints increases ICP", "They cause hypoglycemia", "They lower blood pressure"], a: 1, r: "Straining against restraints raises intrathoracic pressure and ICP; causes of restlessness (hypoxia, pain, full bladder) are sought first." },
{ q: "In a patient whose cerebral autoregulation is lost, a sudden fall in systemic BP will:", o: ["Not affect brain blood flow", "Reduce cerebral perfusion and cause ischemia", "Increase ICP immediately", "Improve CPP"], a: 1, r: "Without autoregulation, cerebral blood flow follows systemic pressure; hypotension lowers CPP and causes ischemia." },
{ q: "Which change in the neurological chart is the MOST significant?", o: ["GCS 15 → 15", "Pupils 3 mm brisk → 3 mm brisk", "Patient previously oriented now confused and restless", "Temperature 36.9 → 37.1 °C"], a: 2, r: "New confusion and restlessness reflect a fall in LOC, the earliest sign of rising ICP." },
{ q: "A family member wants to talk loudly to the comatose patient to 'wake him up'. The nurse should explain:", o: ["\"That's helpful, keep doing it.\"", "\"A calm, quiet environment is better because stimulation can raise brain pressure; you can talk softly and touch his hand.\"", "\"He cannot hear, so talking is useless.\"", "\"Visitors are not allowed.\""], a: 1, r: "Excessive stimulation raises ICP, but calm, gentle communication by family is supportive and appropriate." },
{ q: "Which cause of increased ICP is due to increased CSF volume?", o: ["Epidural hematoma", "Hydrocephalus", "Hypercapnia", "Brain tumor"], a: 1, r: "Hydrocephalus results from obstruction of CSF flow or impaired absorption, increasing CSF volume." },
{ q: "Cytotoxic cerebral edema is most often caused by:", o: ["Tumor", "Hypoxia/ischemia", "Hydrocephalus", "Abscess"], a: 1, r: "Hypoxia causes failure of the sodium–potassium pump, so water enters brain cells — cytotoxic edema." },
{ q: "A ventilated patient with severe head injury suddenly develops a unilateral fixed dilated pupil. While preparing for definitive treatment, which order might the nurse expect briefly?", o: ["Hypoventilation to PaCO₂ 55", "Brief hyperventilation to PaCO₂ about 30–35 mmHg", "Hypotonic fluid bolus", "Lumbar puncture"], a: 1, r: "Brief hyperventilation causes cerebral vasoconstriction and rapidly lowers ICP as a temporary rescue measure for impending herniation." },
{ q: "Which signs suggest infection of an external ventricular drain? (Select all that apply.)", o: ["Cloudy CSF in the drainage system", "Fever", "Neck stiffness", "Clear, colorless CSF", "Redness at the insertion site"], a: [0, 1, 2, 4], s: true, r: "Cloudy CSF, fever, meningism and site redness indicate infection; normal CSF is clear and colorless." },
{ q: "A patient on mannitol has a serum osmolality of 330 mOsm/kg and falling urine output. What should the nurse do?", o: ["Give the next dose", "Hold the dose and notify the provider", "Double the dose", "Give D5W rapidly"], a: 1, r: "High serum osmolality increases the risk of renal failure; mannitol is usually held when osmolality exceeds about 310–320 mOsm/kg and the provider informed." },
{ q: "Why is hypotension particularly harmful in brain-injured patients?", o: ["It raises ICP directly", "It lowers CPP, causing secondary ischemic brain injury", "It causes hyperglycemia", "It is harmless"], a: 1, r: "Hypotension reduces MAP and therefore CPP; even brief episodes worsen outcomes after brain injury." },
{ q: "Which nursing intervention best protects a patient after decompressive craniectomy?", o: ["Position on the side without the bone flap and use a protective helmet when mobilizing", "Apply pressure to the bone defect", "Keep the head flexed", "Avoid neuro checks"], a: 0, r: "The area without bone is unprotected; pressure on it is avoided and a helmet protects the brain during mobilization." }
]
});

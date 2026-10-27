NS.reg("adult", "neuro", "assessment", {
intro: {
  en: "A complete neurological assessment tells the nurse **how well the brain, spinal cord and nerves are working right now**, and — by comparing repeated findings — whether the patient is improving or deteriorating. It includes the **health history, level of consciousness, mental status, cranial nerves, pupils, motor and sensory function, coordination, reflexes and vital signs**, followed by the right diagnostic tests.",
  ar: "التقييم العصبي الكامل يخبر الممرض **إلى أي حد يعمل الدماغ والحبل الشوكي والأعصاب الآن**، ومن خلال مقارنة النتائج المتكررة يعرف إن كان المريض يتحسن أو يتدهور. يشمل **التاريخ الصحي، مستوى الوعي، الحالة العقلية، الأعصاب القحفية، الحدقتين، الوظيفة الحركية والحسية، التناسق، المنعكسات والعلامات الحيوية**، ثم الفحوصات التشخيصية المناسبة."
},
sections: [
{ h: { en: "Review of the nervous system", ar: "مراجعة الجهاز العصبي" }, b: [
  { t: "p", en: "The nervous system has two divisions. The **central nervous system (CNS)** is the brain and spinal cord. The **peripheral nervous system (PNS)** is the 12 pairs of cranial nerves, 31 pairs of spinal nerves and the autonomic nervous system (sympathetic and parasympathetic).",
    ar: "يتكون الجهاز العصبي من قسمين: **الجهاز العصبي المركزي** (الدماغ والحبل الشوكي)، و**الجهاز العصبي المحيطي** (12 زوجاً من الأعصاب القحفية، 31 زوجاً من الأعصاب الشوكية، والجهاز العصبي الذاتي الودي ونظير الودي)." },
  { t: "table", h: ["Part", "Main functions", "If damaged"], r: [
    ["**Frontal lobe**", "Personality, judgment, planning, voluntary movement (motor cortex), expressive speech (**Broca's area**)", "Personality change, poor judgment, contralateral weakness, expressive aphasia"],
    ["**Parietal lobe**", "Sensation (touch, pain, temperature, position), spatial awareness", "Sensory loss, neglect of one side, disorientation in space"],
    ["**Temporal lobe**", "Hearing, memory, understanding speech (**Wernicke's area**)", "Receptive aphasia, memory loss, seizures, hallucinations"],
    ["**Occipital lobe**", "Vision", "Visual field defects, cortical blindness"],
    ["**Cerebellum**", "Balance, coordination, smooth movement", "Ataxia, intention tremor, nystagmus"],
    ["**Brainstem** (midbrain, pons, medulla)", "Consciousness (reticular activating system), breathing, heart rate, BP, cranial nerves III–XII, swallowing, gag & cough reflexes", "Coma, abnormal breathing, unstable vital signs — life-threatening"],
    ["**Spinal cord**", "Carries motor and sensory pathways; reflex centers", "Paralysis and sensory loss below the level of injury"]],
    ar: { h: ["الجزء", "الوظائف الرئيسية", "عند التلف"], r: [
    ["**الفص الجبهي**", "الشخصية والحكم والتخطيط والحركة الإرادية والكلام التعبيري (منطقة بروكا)", "تغير الشخصية، ضعف الطرف المقابل، حبسة تعبيرية"],
    ["**الفص الجداري**", "الإحساس والوعي المكاني", "فقدان الإحساس، إهمال جهة من الجسم"],
    ["**الفص الصدغي**", "السمع والذاكرة وفهم الكلام (منطقة فيرنيكه)", "حبسة استقبالية، فقدان الذاكرة، نوبات، هلاوس"],
    ["**الفص القذالي**", "البصر", "عيوب المجال البصري والعمى القشري"],
    ["**المخيخ**", "التوازن والتناسق", "ترنح، رعشة قصدية، رأرأة"],
    ["**جذع الدماغ**", "الوعي، التنفس، النبض، الضغط، الأعصاب القحفية 3–12، البلع والسعال", "غيبوبة واضطراب التنفس والعلامات الحيوية — خطر على الحياة"],
    ["**الحبل الشوكي**", "نقل المسارات الحركية والحسية ومراكز المنعكسات", "شلل وفقدان إحساس تحت مستوى الإصابة"]] } },
  { t: "cards", items: [
    { i: "shield", en: "Meninges", d: "Dura mater, arachnoid, pia mater protect the brain and cord", ar: "السحايا: الأم الجافية والعنكبوتية والحنون" },
    { i: "drop", en: "Cerebrospinal fluid", d: "≈125–150 mL circulating; ≈500 mL made daily by the choroid plexus", ar: "السائل الدماغي الشوكي: 125–150 مل، ويُنتج 500 مل يومياً" },
    { i: "target", en: "Blood–brain barrier", d: "Limits passage of drugs and toxins into the brain", ar: "الحاجز الدموي الدماغي يحد من دخول الأدوية والسموم" },
    { i: "heart", en: "High oxygen demand", d: "Brain uses ≈20% of body O₂; minutes of hypoxia cause damage", ar: "الدماغ يستهلك 20% من الأكسجين ويتلف خلال دقائق من نقصه" } ] },
  { t: "table", h: ["Cranial nerve", "Function", "How to test"], r: [
    ["**I Olfactory**", "Smell", "Identify a familiar smell, each nostril, eyes closed"],
    ["**II Optic**", "Vision", "Snellen chart, visual fields, fundoscopy"],
    ["**III Oculomotor**", "Eye movement, **pupil constriction**, eyelid elevation", "Pupils (PERRLA), eye movements, ptosis"],
    ["**IV Trochlear**", "Eye moves down and in", "Follow finger (H pattern)"],
    ["**V Trigeminal**", "Facial sensation, **chewing**, corneal reflex", "Touch face, clench jaw, corneal reflex"],
    ["**VI Abducens**", "Eye moves laterally", "Follow finger to the side"],
    ["**VII Facial**", "**Facial expression**, taste (anterior 2/3), tears & saliva", "Smile, raise eyebrows, close eyes tightly"],
    ["**VIII Vestibulocochlear**", "Hearing and balance", "Whisper test, Weber & Rinne, Romberg"],
    ["**IX Glossopharyngeal**", "Swallowing, **gag reflex**, taste (posterior 1/3)", "Gag reflex, say \"ah\""],
    ["**X Vagus**", "Swallowing, voice, parasympathetic to heart & gut", "Uvula & soft palate rise, voice, swallowing"],
    ["**XI Accessory**", "Shoulder shrug, head turning", "Shrug against resistance, turn head"],
    ["**XII Hypoglossal**", "Tongue movement", "Stick out tongue — deviates **toward** the weak side"]],
    ar: { h: ["العصب القحفي", "الوظيفة", "طريقة الفحص"], r: [
    ["**1 الشمي**", "الشم", "شم رائحة مألوفة لكل منخر"],
    ["**2 البصري**", "البصر", "لوحة سنلن والمجال البصري"],
    ["**3 المحرك للعين**", "حركة العين، **تضيق الحدقة**، رفع الجفن", "الحدقتان، حركة العين، تدلي الجفن"],
    ["**4 البكري**", "تحريك العين للأسفل والداخل", "تتبع الإصبع"],
    ["**5 مثلث التوائم**", "إحساس الوجه، **المضغ**، منعكس القرنية", "لمس الوجه، شد الفك"],
    ["**6 المبعد**", "تحريك العين للخارج", "تتبع الإصبع جانبياً"],
    ["**7 الوجهي**", "**تعابير الوجه**، الذوق الأمامي", "الابتسام ورفع الحاجبين وإغلاق العينين"],
    ["**8 الدهليزي القوقعي**", "السمع والتوازن", "الهمس، فيبر ورينه، رومبرغ"],
    ["**9 اللساني البلعومي**", "البلع، **منعكس التهوع**", "منعكس التهوع"],
    ["**10 المبهم**", "البلع والصوت والقلب والأمعاء", "ارتفاع اللهاة والصوت والبلع"],
    ["**11 الإضافي**", "رفع الكتف وتدوير الرأس", "رفع الكتفين ضد مقاومة"],
    ["**12 تحت اللسان**", "حركة اللسان", "إخراج اللسان — ينحرف **نحو** الجهة الضعيفة"]] } },
  { t: "tip", en: "Cranial nerves III, IX and X are the most important in nursing: **III (pupils)** warns of rising ICP; **IX and X (gag & swallow)** must be present before giving oral food or fluids to a neuro patient.",
    ar: "أهم الأعصاب القحفية للتمريض: **الثالث (الحدقة)** ينذر بارتفاع الضغط داخل القحف، و**التاسع والعاشر (التهوع والبلع)** يجب التأكد منهما قبل إعطاء الطعام أو السوائل بالفم." }
]},
{ h: { en: "Health history", ar: "التاريخ الصحي" }, b: [
  { t: "list", en: [
    "**Chief complaint**: headache, seizures, weakness, numbness/tingling, dizziness, visual change, speech difficulty, memory problems, change in behavior",
    "**Onset and course**: sudden (stroke, hemorrhage) or gradual (tumor, degenerative disease); progression; what makes it better or worse",
    "**Headache details**: location, severity, timing (worse on waking → ↑ICP), associated vomiting, visual change, neck stiffness, fever",
    "**Past history**: head injury, stroke, hypertension, diabetes, infection (otitis, sinusitis), cancer, previous surgery",
    "**Medications**: anticoagulants, anticonvulsants, sedatives, opioids, oral contraceptives, drug or alcohol use",
    "**Family history**: epilepsy, stroke, dementia, neuromuscular disease",
    "**Functional ability**: activities of daily living, falls, effect on work and family",
    "If the patient is confused, obtain information from the **family or caregiver**"],
    ar: [
    "**الشكوى الرئيسية**: صداع، نوبات، ضعف، تنميل، دوخة، تغير البصر، صعوبة الكلام، النسيان، تغير السلوك",
    "**البداية والتطور**: مفاجئ (جلطة، نزف) أم تدريجي (ورم، مرض تنكسي)، وما الذي يحسّن أو يسوّء",
    "**تفاصيل الصداع**: المكان والشدة والتوقيت (يشتد عند الاستيقاظ ← ارتفاع الضغط داخل القحف)، التقيؤ، تغير البصر، تيبس الرقبة، الحمى",
    "**التاريخ المرضي**: إصابة الرأس، الجلطة، الضغط، السكري، الالتهابات، السرطان، العمليات",
    "**الأدوية**: مضادات التخثر والاختلاج والمهدئات والأفيونات، الكحول والمخدرات",
    "**التاريخ العائلي**: الصرع، الجلطة، الخرف",
    "**القدرة الوظيفية**: الأنشطة اليومية والسقوط",
    "إذا كان المريض مشوشاً تؤخذ المعلومات من **الأهل أو المرافق**"] }
]},
{ h: { en: "Level of consciousness & mental status", ar: "مستوى الوعي والحالة العقلية" }, b: [
  { t: "p", en: "**Level of consciousness (LOC) is the most sensitive and earliest indicator of neurological change.** A subtle change — new restlessness, irritability, confusion or drowsiness — must be reported because it often appears before changes in pupils or vital signs.",
    ar: "**مستوى الوعي هو أكثر المؤشرات حساسية وأبكرها لأي تغير عصبي.** أي تغير بسيط — تململ جديد، عصبية، تشوش، نعاس — يجب الإبلاغ عنه لأنه يظهر غالباً قبل تغير الحدقتين أو العلامات الحيوية." },
  { t: "table", h: ["Term", "Description"], r: [
    ["**Alert**", "Awake, responds appropriately, oriented to person, place and time"],
    ["**Lethargic**", "Drowsy, falls asleep easily, but wakes to voice and answers"],
    ["**Obtunded**", "Very drowsy; needs shaking/loud voice; slow, confused responses"],
    ["**Stuporous**", "Responds only to vigorous or painful stimuli; little or no speech"],
    ["**Comatose**", "Unarousable; no meaningful response to any stimulus"]],
    ar: { h: ["المصطلح", "الوصف"], r: [
    ["**متيقظ**", "مستيقظ ويستجيب بشكل مناسب وواعٍ للشخص والمكان والزمان"],
    ["**خامل**", "نعسان ينام بسهولة لكنه يستيقظ للصوت ويجيب"],
    ["**متبلد**", "نعسان جداً يحتاج هزاً أو صوتاً عالياً وإجاباته بطيئة مشوشة"],
    ["**ذهول**", "يستجيب فقط للمنبه القوي أو المؤلم"],
    ["**غيبوبة**", "لا يمكن إيقاظه ولا استجابة ذات معنى"]] } },
  { t: "h3", en: "Glasgow Coma Scale (GCS)", ar: "مقياس غلاسكو للغيبوبة" },
  { t: "table", h: ["Category", "Response", "Score"], r: [
    ["**Eye opening (E)**", "Spontaneous", "4"], ["", "To voice/speech", "3"], ["", "To pain", "2"], ["", "None", "1"],
    ["**Best verbal response (V)**", "Oriented", "5"], ["", "Confused conversation", "4"], ["", "Inappropriate words", "3"], ["", "Incomprehensible sounds", "2"], ["", "None", "1"],
    ["**Best motor response (M)**", "Obeys commands", "6"], ["", "Localizes pain", "5"], ["", "Withdraws from pain", "4"], ["", "Abnormal flexion (decorticate)", "3"], ["", "Abnormal extension (decerebrate)", "2"], ["", "None", "1"]],
    ar: { h: ["الفئة", "الاستجابة", "الدرجة"], r: [
    ["**فتح العين**", "تلقائي", "4"], ["", "للصوت", "3"], ["", "للألم", "2"], ["", "لا يوجد", "1"],
    ["**أفضل استجابة لفظية**", "واعٍ ومتوجه", "5"], ["", "كلام مشوش", "4"], ["", "كلمات غير مناسبة", "3"], ["", "أصوات غير مفهومة", "2"], ["", "لا يوجد", "1"],
    ["**أفضل استجابة حركية**", "ينفذ الأوامر", "6"], ["", "يحدد مكان الألم", "5"], ["", "يسحب الطرف من الألم", "4"], ["", "انثناء غير طبيعي (قشري)", "3"], ["", "بسط غير طبيعي (مخي)", "2"], ["", "لا يوجد", "1"]] } },
  { t: "list", en: [
    "Total score ranges from **3 (deep coma) to 15 (fully alert)**; record each component, e.g., **E3 V4 M6 = 13**",
    "**Mild** 13–15, **moderate** 9–12, **severe ≤ 8** brain injury; **GCS ≤ 8 → protect the airway (\"eight, intubate\")**",
    "A drop of **2 or more points** is significant deterioration — report immediately",
    "Use a **central painful stimulus** (trapezius squeeze, supraorbital pressure, sternal rub) to test localization; a peripheral stimulus (nail-bed pressure) tests withdrawal",
    "Record the **best** response; if the patient is intubated, record verbal as \"T\""],
    ar: [
    "المجموع من **3 (غيبوبة عميقة) إلى 15 (وعي كامل)**، ويُسجل كل جزء مثل **E3 V4 M6 = 13**",
    "إصابة **خفيفة** 13–15، **متوسطة** 9–12، **شديدة 8 فأقل**؛ **8 فأقل ← حماية مجرى الهواء (التنبيب)**",
    "انخفاض **درجتين أو أكثر** تدهور مهم — بلّغ فوراً",
    "استخدم **منبه ألم مركزي** (ضغط العضلة شبه المنحرفة، فوق الحجاج، القص) لاختبار تحديد الألم، والمنبه الطرفي (ضغط الظفر) لاختبار السحب",
    "يُسجل **أفضل** استجابة؛ وإذا كان المريض منبباً يُسجل اللفظي بالرمز T"] },
  { t: "compare", cols: [
    { h: { en: "Decorticate posturing", ar: "الوضعية القشرية" }, en: ["Arms **flexed** and drawn to the chest (\"to the core\"), wrists flexed, legs extended", "Lesion of the cerebral hemispheres / internal capsule", "GCS motor score **3**"], ar: ["الذراعان **منثنيتان** نحو الصدر والساقان ممدودتان", "إصابة نصفي الدماغ", "الدرجة الحركية **3**"] },
    { h: { en: "Decerebrate posturing", ar: "الوضعية المخية" }, en: ["Arms and legs **extended**, arms pronated, neck arched", "Lesion of the **brainstem** (midbrain/pons)", "GCS motor score **2** — worse prognosis"], ar: ["الذراعان والساقان **ممدودة** مع كب الذراعين", "إصابة **جذع الدماغ**", "الدرجة الحركية **2** — إنذار أسوأ"] } ] },
  { t: "p", en: "**Mental status** includes appearance and behavior, orientation (person, place, time, situation), attention, memory (immediate, recent, remote), language (fluency, comprehension, naming), mood and judgment. **Aphasia** is a disorder of language: **expressive (Broca's)** — knows what to say but cannot get the words out; **receptive (Wernicke's)** — speaks fluently but does not understand and words make little sense.",
    ar: "**الحالة العقلية** تشمل المظهر والسلوك، التوجه (الشخص، المكان، الزمان، الموقف)، الانتباه، الذاكرة، اللغة، المزاج والحكم. **الحبسة** اضطراب في اللغة: **تعبيرية (بروكا)** — يعرف ما يريد قوله ولا يستطيع إخراجه؛ **استقبالية (فيرنيكه)** — يتكلم بطلاقة لكن لا يفهم وكلامه بلا معنى." }
]},
{ h: { en: "Pupils and eye signs", ar: "الحدقتان وعلامات العين" }, b: [
  { t: "p", en: "Check each pupil for **size (in mm with a pupil gauge, normal 2–6 mm), shape, equality and reaction to light** (direct and consensual), and accommodation — documented as **PERRLA**. Darken the room, bring the light from the side, and compare both eyes.",
    ar: "افحص كل حدقة من حيث **الحجم (بالملم، الطبيعي 2–6 ملم)، الشكل، التساوي والاستجابة للضوء** (المباشرة والتوافقية) والتكيف، ويُوثق بـ **PERRLA**. أطفئ الضوء، قرّب المصباح من الجانب، وقارن العينين." },
  { t: "table", h: ["Finding", "Possible meaning"], r: [
    ["**One pupil dilated and non-reactive (fixed)**", "Compression of CN III on the same side — **uncal herniation from ↑ICP**: emergency"],
    ["**Both pupils fixed and dilated**", "Severe hypoxia, massive brain damage, herniation; also atropine"],
    ["**Pinpoint pupils**", "**Opioid overdose** or **pontine** hemorrhage"],
    ["**Sluggish reaction**", "Early compression of CN III — early sign of rising ICP"],
    ["**Oval pupil**", "Transitional stage of CN III compression"],
    ["**Small reactive pupils**", "Metabolic encephalopathy, diencephalon lesion"]],
    ar: { h: ["العلامة", "المعنى المحتمل"], r: [
    ["**حدقة واحدة متوسعة وثابتة**", "ضغط على العصب الثالث في نفس الجهة — **انفتاق بسبب ارتفاع الضغط**: حالة طارئة"],
    ["**الحدقتان متوسعتان وثابتتان**", "نقص أكسجة شديد، تلف دماغي واسع، انفتاق، أو الأتروبين"],
    ["**حدقتان دبوسيتان**", "**جرعة زائدة من الأفيونات** أو نزف في **الجسر**"],
    ["**استجابة بطيئة**", "علامة مبكرة لارتفاع الضغط"],
    ["**حدقة بيضوية**", "مرحلة انتقالية لضغط العصب الثالث"],
    ["**حدقتان صغيرتان متفاعلتان**", "اعتلال دماغي أيضي"]] } },
  { t: "warn", en: "A **new unequal pupil** in a patient with a head injury, tumor, bleed or stroke is an emergency until proven otherwise — notify the doctor immediately.",
    ar: "**عدم تساوي الحدقتين الجديد** عند مريض إصابة رأس أو ورم أو نزف أو جلطة يعتبر حالة طارئة حتى يثبت العكس — بلّغ الطبيب فوراً." }
]},
{ h: { en: "Motor function, coordination & sensation", ar: "الوظيفة الحركية والتناسق والإحساس" }, b: [
  { t: "table", h: ["Grade", "Muscle strength"], r: [
    ["**5**", "Normal — full movement against gravity and full resistance"],
    ["**4**", "Full movement against gravity and some resistance"],
    ["**3**", "Full movement against gravity, but **not against resistance**"],
    ["**2**", "Full movement only with gravity eliminated"],
    ["**1**", "Flicker or trace of contraction, no movement"],
    ["**0**", "No contraction (paralysis)"]],
    ar: { h: ["الدرجة", "قوة العضلات"], r: [
    ["**5**", "طبيعية ضد الجاذبية والمقاومة الكاملة"], ["**4**", "ضد الجاذبية وبعض المقاومة"], ["**3**", "ضد الجاذبية **بدون مقاومة**"],
    ["**2**", "حركة فقط مع إلغاء الجاذبية"], ["**1**", "ارتعاش بسيط بدون حركة"], ["**0**", "لا انقباض (شلل)"]] } },
  { t: "list", en: [
    "Compare **right with left** and upper with lower limbs; ask the patient to squeeze both hands and push both feet against your hands",
    "**Pronator drift**: arms out, palms up, eyes closed for 20–30 s; a downward drift with pronation = subtle weakness of that arm",
    "**Muscle tone**: flaccid (lower motor neuron, spinal shock) or spastic/rigid (upper motor neuron, Parkinson's)",
    "**Hemiparesis** = weakness of one side; **hemiplegia** = paralysis of one side; **paraplegia** = both legs; **quadriplegia (tetraplegia)** = all four limbs",
    "**Coordination (cerebellum)**: finger-to-nose, heel-to-shin, rapid alternating movements, observation of gait",
    "**Romberg test**: feet together, eyes closed; marked swaying or falling = positive (impaired proprioception/vestibular function) — **stand close to protect the patient**",
    "**Sensation**: light touch (cotton), pain (sharp/dull), temperature, vibration (tuning fork), position sense (proprioception) — test with eyes closed and compare both sides; map any area of loss"],
    ar: [
    "قارن **اليمين باليسار** والأطراف العلوية بالسفلية: الضغط على اليدين ودفع القدمين",
    "**انجراف الكب**: الذراعان ممدودتان والكفان للأعلى والعينان مغمضتان؛ هبوط الذراع مع الكب يعني ضعفاً خفيفاً",
    "**توتر العضلات**: رخو (عصبون حركي سفلي) أو متشنج (عصبون حركي علوي)",
    "**خزل نصفي** = ضعف جهة، **شلل نصفي** = شلل جهة، **شلل سفلي** = الساقان، **شلل رباعي** = الأطراف الأربعة",
    "**التناسق (المخيخ)**: الإصبع للأنف، الكعب على الساق، الحركات المتبادلة السريعة، المشي",
    "**اختبار رومبرغ**: القدمان معاً والعينان مغمضتان؛ التأرجح أو السقوط = إيجابي — **قف قريباً لحماية المريض**",
    "**الإحساس**: اللمس، الألم، الحرارة، الاهتزاز، حس الوضع — والعينان مغمضتان مع المقارنة بين الجهتين"] }
]},
{ h: { en: "Reflexes", ar: "المنعكسات" }, b: [
  { t: "table", h: ["Grade", "Deep tendon reflex"], r: [
    ["**0**", "Absent"], ["**1+**", "Diminished, hypoactive"], ["**2+**", "**Normal**"], ["**3+**", "Brisker than average (may be normal)"], ["**4+**", "Hyperactive with **clonus** (upper motor neuron disease)"]],
    ar: { h: ["الدرجة", "منعكس الوتر العميق"], r: [["**0**", "غائب"], ["**1+**", "ضعيف"], ["**2+**", "**طبيعي**"], ["**3+**", "أنشط من المعتاد"], ["**4+**", "مفرط مع **رمع** (مرض العصبون العلوي)"]] } },
  { t: "list", en: [
    "Common DTRs: **biceps (C5–6), triceps (C7), brachioradialis, patellar/knee jerk (L2–4), Achilles/ankle jerk (S1)**",
    "**Babinski (plantar) reflex**: stroke the lateral sole from heel to toes. **Normal adult = toes flex (down)**. **Positive Babinski** = big toe dorsiflexes and other toes fan out → **upper motor neuron lesion** in adults (normal in infants up to about 1–2 years)",
    "Protective reflexes to check in neuro patients: **corneal, gag, cough and swallow** — their loss means aspiration risk"],
    ar: [
    "المنعكسات الشائعة: **ذات الرأسين، ثلاثية الرؤوس، العضدية الكعبرية، الرضفة، أخيل**",
    "**منعكس بابنسكي**: تمرير أداة على الحافة الخارجية للقدم من الكعب للأصابع. **الطبيعي عند البالغ = انثناء الأصابع للأسفل**. **بابنسكي إيجابي** = ارتفاع الإبهام وانفراج الأصابع ← **إصابة العصبون الحركي العلوي** (طبيعي عند الرضع حتى سنة أو سنتين)",
    "المنعكسات الوقائية: **القرنية، التهوع، السعال، البلع** — فقدانها يعني خطر الشفط"] }
]},
{ h: { en: "Vital signs & breathing patterns", ar: "العلامات الحيوية وأنماط التنفس" }, b: [
  { t: "p", en: "Brain injury affects the vital centers in the brainstem. **Cushing's triad** — rising systolic BP with **widening pulse pressure**, **bradycardia** and **irregular respirations** — is a **late** sign of increased intracranial pressure and brainstem compression. Temperature may rise from hypothalamic damage (central fever).",
    ar: "إصابة الدماغ تؤثر على المراكز الحيوية في جذع الدماغ. **ثالوث كوشينغ** — ارتفاع الضغط الانقباضي مع **اتساع فرق النبض**، **بطء القلب** و**تنفس غير منتظم** — علامة **متأخرة** لارتفاع الضغط داخل القحف. وقد ترتفع الحرارة بسبب تلف الوطاء (حمى مركزية)." },
  { t: "table", h: ["Breathing pattern", "Description", "Usual level of lesion"], r: [
    ["**Cheyne–Stokes**", "Gradually deeper then shallower breaths followed by apnea, repeating", "Both hemispheres, diencephalon; also heart failure"],
    ["**Central neurogenic hyperventilation**", "Sustained rapid, deep breathing", "Midbrain / upper pons"],
    ["**Apneustic**", "Prolonged inspiration with pauses", "Pons"],
    ["**Ataxic (Biot's)**", "Completely irregular rate and depth", "**Medulla** — ominous, may precede respiratory arrest"]],
    ar: { h: ["نمط التنفس", "الوصف", "مستوى الإصابة"], r: [
    ["**تشاين–ستوكس**", "تزايد ثم تناقص عمق التنفس يليه توقف ثم يتكرر", "نصفا الدماغ؛ وأيضاً فشل القلب"],
    ["**فرط التنفس العصبي المركزي**", "تنفس سريع عميق مستمر", "الدماغ المتوسط"],
    ["**الشهيقي المطوّل**", "شهيق طويل مع توقفات", "الجسر"],
    ["**الترنحي (بيوت)**", "غير منتظم تماماً", "**البصلة** — ينذر بتوقف التنفس"]] } }
]},
{ h: { en: "Diagnostic tests and nursing responsibilities", ar: "الفحوصات التشخيصية ومسؤوليات الممرض" }, b: [
  { t: "table", h: ["Test", "What it shows", "Nursing responsibilities"], r: [
    ["**CT scan**", "Bleeding, tumor, edema, fractures — fast, first test in emergencies", "Ask about **iodine/contrast allergy** and kidney function (creatinine) if contrast used; patient lies still; encourage fluids after contrast"],
    ["**MRI**", "Detailed soft tissue: tumors, MS plaques, stroke", "**Remove all metal**; screen for **pacemaker, metal implants, clips**; claustrophobia (sedation/open MRI); noise; lies still 30–60 min"],
    ["**PET / SPECT**", "Brain metabolism and blood flow (dementia, seizure focus, tumors)", "Radioactive tracer IV; avoid caffeine/alcohol before as instructed"],
    ["**Cerebral angiography**", "Aneurysm, AVM, blocked arteries", "Consent, contrast allergy, coagulation; after: **pressure on puncture site, keep limb straight, check distal pulses**, neuro checks, fluids"],
    ["**EEG**", "Electrical activity — seizures, brain death", "**Wash hair, no oils/sprays**; hold caffeine and medications only as ordered; may be **sleep-deprived** to provoke activity; painless"],
    ["**EMG & nerve conduction**", "Muscle and peripheral nerve disease", "Needles cause mild discomfort; no lotion on skin"],
    ["**Lumbar puncture**", "CSF pressure and analysis (meningitis, bleeding), give drugs/contrast", "**Contraindicated with ↑ICP** (herniation) and with infection at the site/bleeding disorder; **side-lying fetal position** (or sitting leaning forward); label samples in order; after: lie flat as ordered, fluids, watch for **post-LP headache**, CSF leak, numbness"],
    ["**Carotid / transcranial Doppler**", "Blood flow in carotid and cerebral arteries", "Non-invasive; no special preparation"]],
    ar: { h: ["الفحص", "ماذا يُظهر", "مسؤولية الممرض"], r: [
    ["**المفراس (CT)**", "النزف والأورام والوذمة والكسور — أول فحص في الطوارئ", "السؤال عن **حساسية اليود** ووظائف الكلى، السكون، السوائل بعد الصبغة"],
    ["**الرنين (MRI)**", "تفاصيل الأنسجة الرخوة", "**إزالة المعادن**، السؤال عن **منظم الضربات والمعادن المزروعة**، الخوف من الأماكن المغلقة"],
    ["**التصوير البوزيتروني**", "أيض الدماغ وجريان الدم", "مادة مشعة وريدية وتجنب الكافيين"],
    ["**تصوير الأوعية الدماغية**", "أم الدم والتشوهات والانسداد", "موافقة وفحص الحساسية والتخثر؛ بعده **الضغط على موضع الإبرة وإبقاء الطرف مستقيماً وفحص النبض**"],
    ["**تخطيط الدماغ (EEG)**", "النشاط الكهربائي — الصرع وموت الدماغ", "**غسل الشعر بدون زيوت**، إيقاف الكافيين والأدوية حسب الطلب، وقد يُحرم من النوم"],
    ["**تخطيط العضلات والأعصاب**", "أمراض العضلات والأعصاب الطرفية", "انزعاج بسيط من الإبر، لا كريمات على الجلد"],
    ["**البزل القطني**", "ضغط السائل الدماغي وتحليله", "**ممنوع مع ارتفاع الضغط داخل القحف**؛ وضعية الجنين الجانبية؛ ترقيم العينات؛ بعده الاستلقاء حسب الطلب والسوائل ومراقبة **الصداع** والتسرب"],
    ["**الدوبلر**", "جريان الدم في الشرايين", "غير جراحي بلا تحضير"]] } },
  { t: "table", h: ["Normal CSF", "Value"], r: [
    ["Appearance", "**Clear and colorless**"], ["Opening pressure (lying)", "≈ 70–200 mm H₂O"], ["Protein", "≈ 15–45 mg/dL"], ["Glucose", "≈ 50–80 mg/dL (about **60–70% of blood glucose**)"], ["White cells", "0–5 cells/µL (lymphocytes)"], ["Red cells", "None"]],
    ar: { h: ["السائل الدماغي الطبيعي", "القيمة"], r: [["المظهر", "**صافٍ عديم اللون**"], ["الضغط", "70–200 ملم ماء تقريباً"], ["البروتين", "15–45 ملغ/دل تقريباً"], ["الجلوكوز", "50–80 ملغ/دل (**60–70% من سكر الدم**)"], ["كريات الدم البيض", "0–5 (لمفاوية)"], ["كريات الدم الحمر", "لا يوجد"]] } },
  { t: "tip", en: "Post-lumbar-puncture headache is caused by **CSF leaking** from the puncture site; it is **worse when sitting/standing and relieved by lying flat**. Treat with fluids, analgesics, caffeine; a persistent leak may need an **epidural blood patch**.",
    ar: "صداع ما بعد البزل القطني سببه **تسرب السائل الدماغي** من موضع الإبرة؛ **يزداد عند الجلوس أو الوقوف ويخف بالاستلقاء**. يُعالج بالسوائل والمسكنات والكافيين، وقد يحتاج **رقعة دم فوق الجافية**." }
]},
{ h: { en: "Nursing considerations & older adults", ar: "اعتبارات تمريضية وكبار السن" }, b: [
  { t: "list", en: [
    "Establish a **baseline** on admission and use the **same method and stimulus** each time so changes are real",
    "Use a **neurological observation chart**; frequency depends on stability (e.g., every 15 min in the acute phase)",
    "**Trends matter more than single values** — compare with the previous readings and report deterioration early",
    "Ensure **safety** (bed low, rails, fall precautions) for patients with weakness, confusion or sensory loss",
    "**Older adults**: slower reaction time, decreased vibration sense and ankle reflexes, smaller pupils with slower response and reduced hearing are common age changes — but **sudden confusion is never \"normal aging\"** (think infection, hypoxia, drugs, stroke)"],
    ar: [
    "تحديد **قراءة أساسية** عند الدخول واستخدام **نفس الطريقة والمنبه** كل مرة",
    "استخدام **جدول المراقبة العصبية** بتكرار حسب الحالة (كل 15 دقيقة في المرحلة الحادة)",
    "**الاتجاه أهم من القراءة الواحدة** — قارن مع السابق وبلّغ مبكراً",
    "**السلامة**: سرير منخفض، حواجز، احتياطات السقوط",
    "**كبار السن**: بطء الاستجابة، ضعف حس الاهتزاز ومنعكس الكاحل، صغر الحدقتين وضعف السمع تغيرات طبيعية — لكن **التشوش المفاجئ ليس شيخوخة طبيعية أبداً** (فكر بالالتهاب ونقص الأكسجة والأدوية والجلطة)"] }
]}
],
questions: [
{ q: "Which assessment finding is the earliest and most sensitive indicator of a change in neurological status?", o: ["Pupil dilation", "Change in level of consciousness", "Bradycardia", "Decerebrate posturing"], a: 1, r: "LOC changes such as restlessness, confusion or drowsiness usually appear before pupil and vital sign changes, making LOC the most sensitive indicator." },
{ q: "A patient opens his eyes when spoken to, is confused, and localizes pain. What is his GCS score?", o: ["10", "11", "12", "13"], a: 2, r: "Eyes to voice = 3, confused conversation = 4, localizes pain = 5. Total = 12." },
{ q: "A patient has no eye opening, no verbal response and abnormal extension to pain. The GCS score is:", o: ["3", "4", "5", "6"], a: 1, r: "Eyes none = 1, verbal none = 1, extension = 2. Total = 4, indicating very severe brain injury." },
{ q: "A head-injured patient's GCS drops from 12 to 9 over one hour. What is the nurse's priority action?", o: ["Recheck in 2 hours", "Notify the provider immediately", "Give a sedative", "Document as expected"], a: 1, p: true, r: "A fall of 2 or more points in GCS indicates significant deterioration requiring immediate notification." },
{ q: "Which GCS score indicates the need to protect the airway?", o: ["15", "13", "10", "8 or less"], a: 3, r: "A GCS of 8 or less indicates severe brain injury with loss of airway protection; intubation is usually needed ('eight, intubate')." },
{ q: "To test whether a comatose patient localizes pain, the nurse should apply:", o: ["Nail-bed pressure only", "A central stimulus such as trapezius squeeze", "Cold water to the ear", "A pinprick to the foot"], a: 1, r: "A central stimulus tests localization (the patient reaches toward the stimulus). Peripheral stimuli can trigger spinal reflex withdrawal and are less reliable for localization." },
{ q: "A patient's arms are flexed toward the chest with legs extended in response to pain. The nurse documents:", o: ["Decerebrate posturing — motor score 2", "Decorticate posturing — motor score 3", "Withdrawal — motor score 4", "Localization — motor score 5"], a: 1, r: "Flexion of the arms toward the core with leg extension is decorticate posturing, scored 3 on the GCS motor scale." },
{ q: "Which posture indicates damage to the brainstem and carries a poorer prognosis?", o: ["Decorticate", "Decerebrate", "Flexion withdrawal", "Normal flexion"], a: 1, r: "Decerebrate (extensor) posturing reflects midbrain/pons damage and is generally more ominous than decorticate posturing." },
{ q: "A patient with a subdural hematoma develops a right pupil of 6 mm that does not react to light; the left is 3 mm and brisk. This indicates:", o: ["Normal variation", "Compression of the right oculomotor nerve from rising ICP", "Opioid overdose", "Left-sided stroke only"], a: 1, r: "A unilateral fixed, dilated pupil signals compression of cranial nerve III on the same side, often from uncal herniation — an emergency." },
{ q: "Pinpoint pupils in an unconscious patient suggest:", o: ["Atropine toxicity", "Opioid overdose or pontine hemorrhage", "Hypothermia only", "Normal sleep"], a: 1, r: "Very small pupils are seen with opioid overdose and lesions of the pons." },
{ q: "Which cranial nerve is tested by checking pupil response to light?", o: ["II and III", "V and VII", "IX and X", "XI and XII"], a: 0, r: "The optic nerve (II) carries the light stimulus and the oculomotor nerve (III) produces pupillary constriction." },
{ q: "Before giving oral fluids to a patient after a stroke, which cranial nerve functions must the nurse assess?", o: ["I and II", "III and IV", "IX and X (gag and swallow)", "XI only"], a: 2, r: "The glossopharyngeal (IX) and vagus (X) nerves control gag and swallowing; impairment increases aspiration risk." },
{ q: "A patient's tongue deviates to the left when protruded. This suggests weakness of:", o: ["The right hypoglossal nerve", "The left hypoglossal nerve", "The facial nerve", "The trigeminal nerve"], a: 1, r: "The tongue deviates toward the weak side when protruded; deviation to the left indicates left hypoglossal (XII) weakness." },
{ q: "The nurse asks the patient to clench the teeth and touches the face with cotton. Which cranial nerve is being tested?", o: ["Facial (VII)", "Trigeminal (V)", "Vagus (X)", "Accessory (XI)"], a: 1, r: "The trigeminal nerve provides facial sensation and controls the muscles of chewing." },
{ q: "Asking a patient to smile, raise the eyebrows and close the eyes tightly tests which cranial nerve?", o: ["V", "VII", "IX", "XII"], a: 1, r: "The facial nerve (VII) controls the muscles of facial expression." },
{ q: "A patient can lift the arm against gravity but not against any resistance. Muscle strength is graded:", o: ["1/5", "2/5", "3/5", "4/5"], a: 2, r: "Grade 3 = full movement against gravity but not against resistance." },
{ q: "During pronator drift testing, the patient's left arm drifts down and rotates palm-down. This indicates:", o: ["Normal finding", "Subtle weakness of the left arm", "Cerebellar disease only", "Sensory loss only"], a: 1, r: "Downward drift with pronation reveals mild upper motor neuron weakness of that arm." },
{ q: "Which tests assess cerebellar function? (Select all that apply.)", o: ["Finger-to-nose test", "Heel-to-shin test", "Rapid alternating movements", "Snellen chart", "Observation of gait"], a: [0, 1, 2, 4], s: true, r: "Coordination tests and gait evaluate the cerebellum. The Snellen chart tests visual acuity." },
{ q: "When performing the Romberg test, what must the nurse do?", o: ["Ask the patient to hop on one leg", "Stand close to the patient to prevent a fall", "Keep the patient's eyes open", "Have the patient sit"], a: 1, r: "The patient stands with feet together and eyes closed; swaying may lead to falling, so the nurse stays close for safety." },
{ q: "In an adult, stroking the lateral sole causes dorsiflexion of the big toe and fanning of the other toes. This indicates:", o: ["Normal response", "Upper motor neuron lesion (positive Babinski)", "Peripheral neuropathy", "Spinal shock"], a: 1, r: "A positive Babinski sign in adults suggests corticospinal (upper motor neuron) tract damage; it is normal only in infants." },
{ q: "A deep tendon reflex graded 4+ with clonus indicates:", o: ["Normal reflex", "Hypoactive reflex", "Hyperactive reflex suggesting upper motor neuron disease", "Absent reflex"], a: 2, r: "4+ is hyperactive with clonus, seen in upper motor neuron lesions. 2+ is normal." },
{ q: "Which pattern is part of Cushing's triad?", o: ["Tachycardia, hypotension, rapid breathing", "Rising systolic BP with widening pulse pressure, bradycardia, irregular respirations", "Fever, tachycardia, hypotension", "Hypotension, bradycardia, warm skin"], a: 1, r: "Cushing's triad is a late sign of raised ICP from brainstem compression: hypertension with widening pulse pressure, bradycardia and irregular breathing." },
{ q: "A comatose patient breathes with a completely irregular rate and depth. This ataxic pattern suggests a lesion in the:", o: ["Frontal lobe", "Medulla", "Occipital lobe", "Cerebellum only"], a: 1, r: "Ataxic (Biot's) breathing reflects medullary damage and may precede respiratory arrest." },
{ q: "A patient speaks fluently but uses meaningless words and cannot follow commands. This is:", o: ["Expressive (Broca's) aphasia", "Receptive (Wernicke's) aphasia", "Dysarthria", "Apraxia"], a: 1, r: "Receptive aphasia from temporal lobe (Wernicke's area) damage causes fluent speech with impaired comprehension." },
{ q: "A patient understands questions but struggles to produce words and becomes frustrated. Which area is likely damaged?", o: ["Broca's area in the frontal lobe", "Wernicke's area in the temporal lobe", "Occipital lobe", "Cerebellum"], a: 0, r: "Expressive (Broca's) aphasia results from damage to the frontal lobe speech area; comprehension is preserved." },
{ q: "Which question is MOST important before an MRI?", o: ["\"Do you have a pacemaker or metal implants?\"", "\"Did you eat breakfast?\"", "\"Are you allergic to latex?\"", "\"When did you last void?\""], a: 0, r: "MRI uses a strong magnetic field; pacemakers and some metal implants can malfunction or move, so screening is essential." },
{ q: "Before a CT scan with contrast, the nurse should check: (Select all that apply.)", o: ["Allergy to iodine or contrast media", "Serum creatinine", "Use of metformin as per policy", "Ability to lie still", "Hair washing with oil"], a: [0, 1, 2, 3], s: true, r: "Contrast can cause allergic reactions and kidney injury (with metformin interaction risk). The patient must lie still. Oiling hair is irrelevant." },
{ q: "Which instruction is correct for a patient scheduled for an EEG?", o: ["Apply hair conditioner the night before", "Wash hair and avoid oils and sprays", "Drink several cups of coffee before the test", "Fast for 24 hours"], a: 1, r: "Clean hair without products allows good electrode contact; stimulants are avoided unless ordered otherwise." },
{ q: "A lumbar puncture is ordered for a patient with papilledema and a headache. What should the nurse do?", o: ["Position the patient side-lying and assist", "Question the order because of the risk of brain herniation", "Give fluids before the procedure", "Keep the patient NPO only"], a: 1, r: "Papilledema indicates raised ICP; removing CSF from the lumbar space can cause herniation. The order must be clarified." },
{ q: "Which position is used for a lumbar puncture?", o: ["Prone with arms raised", "Side-lying with knees drawn to the chest and chin flexed", "Supine flat", "Trendelenburg"], a: 1, r: "The fetal position widens the spaces between lumbar vertebrae for needle insertion; sitting and leaning forward is an alternative." },
{ q: "After a lumbar puncture the patient has a headache that worsens when sitting up and improves when lying flat. The cause is most likely:", o: ["Meningitis", "CSF leak from the puncture site", "Brain tumor", "Hypoglycemia"], a: 1, r: "Post-LP headache results from CSF leakage lowering CSF pressure; it is postural and is treated with fluids, rest, analgesics, and sometimes an epidural blood patch." },
{ q: "Which CSF result is normal?", o: ["Cloudy appearance", "Glucose about 60% of blood glucose", "Many red blood cells", "Protein 200 mg/dL"], a: 1, r: "Normal CSF is clear and colorless with glucose about 60–70% of blood glucose, low protein and no red cells." },
{ q: "After cerebral angiography through the femoral artery, which nursing actions are correct? (Select all that apply.)", o: ["Check the puncture site for bleeding", "Assess distal pulses of the leg", "Keep the leg straight as ordered", "Encourage immediate ambulation", "Perform neuro checks"], a: [0, 1, 2, 4], s: true, r: "Bleeding, arterial occlusion and stroke are risks; site checks, distal pulses, immobilizing the leg and neuro checks are needed. Early ambulation risks bleeding." },
{ q: "Damage to which lobe is most likely to cause personality changes and poor judgment?", o: ["Occipital", "Frontal", "Temporal", "Parietal"], a: 1, r: "The frontal lobe governs personality, judgment and planning." },
{ q: "A patient bumps into objects on one side and ignores that side of the body. The lesion is most likely in the:", o: ["Parietal lobe", "Cerebellum", "Medulla", "Spinal cord"], a: 0, r: "The parietal lobe integrates sensation and spatial awareness; damage can cause neglect of one side." },
{ q: "An 82-year-old patient suddenly becomes confused on the second hospital day. The best interpretation is:", o: ["Normal aging", "An acute change requiring investigation (e.g., infection, hypoxia, drugs)", "Dementia that needs no action", "Fatigue only"], a: 1, r: "Sudden confusion in older adults is never normal aging; delirium has treatable causes such as infection, hypoxia, medications and electrolyte imbalance." },
{ q: "Why should the nurse use the same stimulus and technique each time neuro observations are done?", o: ["To save time", "So that changes reflect the patient's condition rather than the method", "Because the GCS requires it legally", "To reduce documentation"], a: 1, r: "Consistent technique makes serial assessments comparable so true deterioration or improvement can be detected." },
{ q: "Which findings should be reported immediately in a neurological patient? (Select all that apply.)", o: ["New unequal pupils", "GCS falling from 14 to 11", "New weakness of one arm", "Patient asking for a blanket", "Irregular respirations with bradycardia"], a: [0, 1, 2, 4], s: true, r: "Pupil changes, a falling GCS, new focal weakness and Cushing-like vital signs indicate deterioration." },
{ q: "A patient's level of consciousness is described as 'drowsy, falls asleep during the conversation, but wakes easily to voice and answers correctly'. The best term is:", o: ["Comatose", "Stuporous", "Lethargic", "Obtunded"], a: 2, r: "Lethargic patients are drowsy but easily roused by voice and respond appropriately." },
{ q: "Which reflexes should be assessed to determine aspiration risk in an unconscious patient? (Select all that apply.)", o: ["Gag reflex", "Cough reflex", "Swallowing", "Patellar reflex", "Corneal reflex"], a: [0, 1, 2], s: true, r: "Gag, cough and swallow protect the airway; their loss increases aspiration risk. The corneal reflex protects the eye, and the patellar reflex is unrelated." }
]
});

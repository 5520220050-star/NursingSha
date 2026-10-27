NS.reg("adult", "ent", "otitis", {
intro: {
  en: "**Otitis media** is inflammation/infection of the **middle ear** — the air-filled space behind the tympanic membrane that contains the three ossicles and connects to the nasopharynx through the **Eustachian (auditory) tube**. When the tube is blocked (cold, allergy, enlarged adenoids), fluid collects and becomes infected. It is very common in **children** (short, straight, horizontal Eustachian tube) but also occurs in adults. Types: **acute otitis media (AOM)**, **otitis media with effusion (serous)** and **chronic (suppurative) otitis media**, which can lead to **cholesteatoma** and **hearing loss**.",
  ar: "**التهاب الأذن الوسطى** التهاب أو عدوى في **الأذن الوسطى** — الحيز الهوائي خلف غشاء الطبل الذي يحوي العظيمات الثلاث ويتصل بالبلعوم الأنفي عبر **قناة استاكيوس**. عند انسداد القناة (زكام، تحسس، لحمية) يتجمع السائل ويلتهب. شائع جداً عند **الأطفال** (قناة قصيرة مستقيمة أفقية) ويحدث عند البالغين. أنواعه: **الحاد**، **الانصبابي (المصلي)** و**المزمن القيحي** الذي قد يسبب **الورم الكوليستيرولي** و**فقدان السمع**."
},
sections: [
{ h: { en: "Anatomy and pathophysiology", ar: "التشريح والفيزيولوجيا المرضية" }, b: [
  { t: "svg", en: "External, middle and inner ear. The Eustachian tube equalizes pressure and drains the middle ear.", ar: "الأذن الخارجية والوسطى والداخلية؛ قناة استاكيوس تعادل الضغط وتصرّف الأذن الوسطى.",
    svg: '<svg viewBox="0 0 340 180"><rect class="d-box" x="10" y="60" width="100" height="40" rx="8"/><text class="d-t" x="60" y="85" text-anchor="middle">External canal</text><rect class="d-gold" x="112" y="40" width="8" height="80"/><text class="d-ts" x="116" y="34" text-anchor="middle">TM</text><rect class="d-box" x="122" y="40" width="90" height="80" rx="8"/><text class="d-t" x="167" y="70" text-anchor="middle">Middle ear</text><text class="d-ts" x="167" y="88" text-anchor="middle">ossicles</text><rect class="d-green" x="216" y="45" width="110" height="70" rx="10"/><text class="d-tw" x="271" y="75" text-anchor="middle">Inner ear</text><text class="d-tw" x="271" y="93" text-anchor="middle" font-size="10">cochlea · vestibule</text><path class="d-ln-g" d="M167 120 L200 168"/><text class="d-ts" x="205" y="165">Eustachian tube → nasopharynx</text></svg>' },
  { t: "flow", steps: [
    { en: "Upper respiratory infection / allergy / enlarged adenoids → **Eustachian tube dysfunction**", ar: "عدوى تنفسية / تحسس / لحمية ← **خلل قناة استاكيوس**" },
    { en: "Air absorbed → **negative pressure** in the middle ear → **effusion** of fluid", ar: "امتصاص الهواء ← **ضغط سلبي** ← **انصباب** السائل" },
    { en: "Bacteria/viruses from nasopharynx enter → **suppuration (pus)** → bulging TM, pain, fever", ar: "دخول الجراثيم ← **تقيح** ← انتفاخ الطبلة وألم وحمى" },
    { en: "Pressure may **rupture the TM** → purulent discharge (otorrhea) and **sudden pain relief**", ar: "قد **تنثقب الطبلة** ← إفرازات قيحية و**زوال مفاجئ للألم**" } ] },
  { t: "list", en: [
    "**Organisms**: ***Streptococcus pneumoniae*, *Haemophilus influenzae* (non-typeable), *Moraxella catarrhalis***; viruses (RSV, influenza)",
    "**Risk factors (children)**: age 6–24 months, **bottle-feeding while lying flat (bottle propping)**, **exposure to cigarette smoke**, day care attendance, pacifier use, male sex, family history, **lack of breastfeeding**, cleft palate, Down syndrome, allergies, winter season"],
    ar: [
    "**الجراثيم**: ***المكورات الرئوية والمستدمية النزلية والموراكسيلا***؛ الفيروسات",
    "**عوامل الخطر**: العمر 6–24 شهراً، **الرضاعة بالزجاجة مستلقياً**، **التعرض لدخان السجائر**، الحضانة، اللهاية، **غياب الرضاعة الطبيعية**، الشق الحنكي، متلازمة داون"] }
]},
{ h: { en: "Acute otitis media", ar: "التهاب الأذن الوسطى الحاد" }, b: [
  { t: "cards", items: [
    { i: "ear", en: "Ear pain (otalgia)", d: "Severe, throbbing; infants **pull/rub the ear**, irritable, cry, **roll head side to side**, poor feeding, disturbed sleep", ar: "**ألم الأذن** نابض؛ الرضيع **يشد أذنه** ويهيج ويرفض الرضاعة" },
    { i: "thermo", en: "Fever", d: "Often present (may be high in children)", ar: "حمى" },
    { i: "alert", en: "Otoscopic findings", d: "**Bulging, red, opaque TM**; **absent light reflex**, landmarks obscured, ↓ mobility on pneumatic otoscopy", ar: "**طبلة منتفخة حمراء معتمة** وغياب انعكاس الضوء" },
    { i: "drop", en: "Otorrhea", d: "Purulent discharge if TM perforates", ar: "إفرازات قيحية عند الانثقاب" },
    { i: "people", en: "Hearing", d: "**Conductive hearing loss**, fullness; vomiting/diarrhea in infants", ar: "**فقدان سمع توصيلي** وشعور بالامتلاء" } ] },
  { t: "table", h: ["Management", "Details"], r: [
    ["**Pain control (always)**", "**Paracetamol or ibuprofen**; warm compress or cold pack over ear; analgesic ear drops (if TM intact)"],
    ["**Watchful waiting (observation 48–72 h)**", "For children ≥ 6 months with mild unilateral symptoms (and older children) — many cases resolve spontaneously; start antibiotics if no improvement"],
    ["**Antibiotics**", "**Amoxicillin (high dose) first-line**, amoxicillin–clavulanate if recent amoxicillin or resistant; cephalosporins/azithromycin for allergy; **5–10 days; complete the course**; under 6 months or severe → treat immediately"],
    ["**Myringotomy and tympanostomy (PE / pressure-equalizing) tubes**", "Incision in TM to drain fluid + insertion of tiny tubes — for **recurrent AOM** (≥ 3 in 6 months or ≥ 4 in a year) or **persistent effusion with hearing loss**; tubes fall out by themselves in 6–18 months"],
    ["**Teaching after tubes**", "**Keep water out of ears** (earplugs when swimming/bathing — as surgeon advises, avoid diving and lake water); report drainage, fever, or tube visible in canal"]],
    ar: { h: ["العلاج", "التفاصيل"], r: [
    ["**تسكين الألم (دائماً)**", "**الباراسيتامول أو الآيبوبروفين**؛ كمادات"],
    ["**الانتظار والمراقبة 48–72 ساعة**", "للأطفال ≥ 6 أشهر بأعراض خفيفة — كثير منها يشفى تلقائياً"],
    ["**المضادات**", "**الأموكسيسيلين (جرعة عالية) أولاً**، أو مع الكلافولانيت؛ **5–10 أيام وإكمال الكورس**؛ الأقل من 6 أشهر يعالج فوراً"],
    ["**بضع الطبلة وأنابيب التهوية**", "شق الطبلة لتصريف السائل وتركيب أنابيب صغيرة — **للالتهاب المتكرر** أو **الانصباب المستمر مع نقص السمع**؛ تسقط وحدها خلال 6–18 شهراً"],
    ["**التثقيف بعد الأنابيب**", "**إبعاد الماء عن الأذنين** (سدادات عند السباحة)؛ الإبلاغ عن الإفرازات أو الحمى"]] } },
  { t: "list", en: [
    "**Prevention teaching**: **breastfeed** for at least 6 months; **hold the infant upright during bottle feeding — never prop the bottle or put the child to bed with a bottle**; **avoid passive smoking**; hand washing; limit pacifier use after 6 months; **immunization — pneumococcal conjugate (PCV) and annual influenza vaccines**; treat allergies",
    "**Instilling ear drops**: warm to body temperature (cold drops → **vertigo**); patient lies with affected ear up; **child under 3 years: pull the pinna down and back**; **adults and children over 3: pull up and back**; keep position 2–5 min; cotton loosely in outer ear"],
    ar: [
    "**الوقاية**: **الرضاعة الطبيعية** 6 أشهر؛ **حمل الرضيع منتصباً أثناء الرضاعة بالزجاجة — لا تسند الزجاجة ولا تُنيمه بها**؛ **تجنب التدخين السلبي**؛ غسل اليدين؛ **التطعيم — لقاح المكورات الرئوية والإنفلونزا**",
    "**تقطير الأذن**: تدفئة القطرات لحرارة الجسم (الباردة ← **دوار**)؛ الأذن المصابة للأعلى؛ **الطفل < 3 سنوات: الصيوان للأسفل والخلف**؛ **البالغ: للأعلى والخلف**؛ البقاء 2–5 دقائق"] }
]},
{ h: { en: "Otitis media with effusion and chronic otitis media", ar: "الالتهاب الانصبابي والمزمن" }, b: [
  { t: "compare", cols: [
    { h: { en: "Otitis media with effusion (serous, \"glue ear\")", ar: "الانصبابي (الأذن الصمغية)" }, en: ["Fluid in middle ear **without signs of acute infection**; often after AOM or with adenoid hypertrophy", "Painless; **feeling of fullness, popping, conductive hearing loss**", "**Child**: speech and language delay, poor school performance, inattention", "TM dull, retracted, **fluid level or air bubbles**", "Treatment: observation (most resolve in 3 months), **no antibiotics routinely**, autoinflation; **tympanostomy tubes** if persistent with hearing loss; adenoidectomy", "**Adults with unilateral persistent effusion → examine nasopharynx for tumor (nasopharyngeal carcinoma)**"], ar: ["سائل **بلا علامات عدوى حادة**", "بلا ألم؛ **امتلاء وفقد سمع توصيلي**", "**الطفل**: تأخر الكلام وضعف الأداء المدرسي", "الطبلة معتمة منسحبة مع **مستوى سائل أو فقاعات**", "العلاج: المراقبة، **بلا مضادات روتينياً**، **أنابيب التهوية**", "**البالغ بانصباب أحادي مستمر ← افحص البلعوم الأنفي لاستبعاد الورم**"] },
    { h: { en: "Chronic suppurative otitis media (CSOM)", ar: "المزمن القيحي" }, en: ["Repeated infections → **permanent TM perforation** with **persistent or recurrent purulent otorrhea** (> 6 weeks)", "Usually **painless**; **conductive hearing loss** (ossicle erosion)", "Organisms: *Pseudomonas aeruginosa*, *S. aureus*, Proteus", "Treatment: **aural toilet (cleaning/suction)**, **topical antibiotic drops (quinolones — ciprofloxacin, ofloxacin)** ± steroid; avoid ototoxic drops; **keep ear dry**", "Surgery: **tympanoplasty** (repair TM ± ossicles), **mastoidectomy**"], ar: ["التهابات متكررة ← **ثقب دائم في الطبلة** مع **إفرازات قيحية مستمرة** (> 6 أسابيع)", "بلا ألم غالباً؛ **فقد سمع توصيلي**", "الجراثيم: *الزائفة الزنجارية* والعنقودية", "العلاج: **تنظيف الأذن** و**قطرات مضاد موضعية (سيبروفلوكساسين)**؛ **إبقاء الأذن جافة**", "الجراحة: **رأب الطبلة** و**استئصال الخشاء**"] } ] },
  { t: "warn", en: "**Cholesteatoma** — a cyst-like growth of **keratinizing squamous epithelium** in the middle ear (through a retraction pocket or perforation). It **slowly erodes bone**: ossicles (hearing loss), **facial nerve (facial paralysis)**, inner ear (**vertigo**, sensorineural loss), and toward the brain (**meningitis, brain abscess**). Signs: **painless, foul-smelling discharge**, hearing loss. Treatment is **surgical removal (mastoidectomy)** — antibiotics cannot cure it; long-term follow-up for recurrence.",
    ar: "**الورم الكوليستيرولي (الكوليستياتوما)** — نمو كيسي من **ظهارة حرشفية متقرنة** في الأذن الوسطى. **يتآكل العظم ببطء**: العظيمات (فقد السمع)، **العصب الوجهي (شلل الوجه)**، الأذن الداخلية (**دوار**)، ونحو الدماغ (**التهاب السحايا وخراج الدماغ**). العلامات: **إفرازات كريهة الرائحة بلا ألم** ونقص السمع. العلاج **جراحي (استئصال الخشاء)** — المضادات لا تشفيه." }
]},
{ h: { en: "Complications and ear surgery care", ar: "المضاعفات ورعاية جراحة الأذن" }, b: [
  { t: "table", h: ["Complication", "Signs"], r: [
    ["**Acute mastoiditis**", "Infection spreads to mastoid air cells — **pain, tenderness, redness and swelling behind the ear; auricle pushed forward and outward**; fever; IV antibiotics ± mastoidectomy"],
    ["**Hearing loss**", "Conductive (effusion, perforation, ossicles) or sensorineural (labyrinth involvement); **delayed speech in children**"],
    ["**TM perforation**", "Most heal spontaneously in weeks"],
    ["**Labyrinthitis**", "Vertigo, nausea, nystagmus, hearing loss"],
    ["**Facial nerve paralysis**", "Facial weakness on the affected side"],
    ["**Intracranial**", "**Meningitis** (most common intracranial), brain abscess, lateral sinus thrombosis — headache, neck stiffness, altered consciousness"]],
    ar: { h: ["المضاعفة", "العلامات"], r: [
    ["**التهاب الخشاء الحاد**", "**ألم واحمرار وتورم خلف الأذن؛ الصيوان مدفوع للأمام والخارج**؛ حمى"],
    ["**فقدان السمع**", "توصيلي أو حسي عصبي؛ **تأخر الكلام عند الأطفال**"],
    ["**انثقاب الطبلة**", "معظمها يلتئم تلقائياً"],
    ["**التهاب التيه**", "دوار وغثيان ورأرأة"],
    ["**شلل العصب الوجهي**", "ضعف الوجه"],
    ["**داخل القحف**", "**التهاب السحايا** وخراج الدماغ"]] } },
  { t: "table", h: ["After tympanoplasty / mastoidectomy", "Teaching"], r: [
    ["**Position**", "Lie **flat or on the unoperated side** (operative ear up) as ordered; get up slowly — **vertigo**; assist with walking (fall risk)"],
    ["**Pressure precautions**", "**Avoid nose blowing for 2–3 weeks**; **sneeze and cough with the mouth open**; avoid straining, heavy lifting, bending; **no air travel or diving** until cleared"],
    ["**Keep ear dry**", "No water in ear; cotton ball with petroleum jelly when showering; do not wash hair until allowed"],
    ["**Expect**", "Hearing may be reduced initially due to packing; mild ear fullness, crackling sounds"],
    ["**Report**", "**Facial weakness/drooping (facial nerve)**, **severe vertigo**, fever, increasing pain, purulent or heavy bleeding, **clear fluid (CSF)**, change in taste"]],
    ar: { h: ["بعد رأب الطبلة / استئصال الخشاء", "التثقيف"], r: [
    ["**الوضعية**", "**مستلقياً أو على الجهة السليمة** (الأذن المعالجة للأعلى)؛ النهوض ببطء — **دوار**"],
    ["**احتياطات الضغط**", "**لا تمخيط للأنف 2–3 أسابيع**؛ **العطاس والسعال بفم مفتوح**؛ تجنب الحزق والطيران والغوص"],
    ["**إبقاء الأذن جافة**", "قطنة مع فازلين عند الاستحمام"],
    ["**ما يتوقع**", "نقص سمع مؤقت بسبب الحشوة"],
    ["**الإبلاغ**", "**ضعف أو تدلي الوجه**، **دوار شديد**، حمى، ألم متزايد، نزف، **سائل صافٍ**"]] } },
  { t: "table", h: ["Nursing diagnosis", "Interventions"], r: [
    ["**Acute pain**", "Analgesics, local heat/cold, position on affected side to drain (if perforated)"],
    ["**Disturbed sensory perception (auditory) / impaired communication**", "Face the patient, speak clearly, reduce background noise, written communication; hearing assessment"],
    ["**Risk for injury (vertigo)**", "Assist with ambulation, call bell, slow position changes"],
    ["**Delayed growth and development (speech)**", "Hearing screening, speech therapy referral"],
    ["**Deficient knowledge**", "Complete antibiotics, drop instillation, prevention, water precautions, follow-up hearing tests"]],
    ar: { h: ["التشخيص", "التدخلات"], r: [
    ["**ألم حاد**", "مسكنات وكمادات"], ["**اضطراب الإدراك السمعي**", "مواجهة المريض والكلام بوضوح وتقليل الضجيج"],
    ["**خطر الإصابة (الدوار)**", "المساعدة في المشي"], ["**تأخر النمو (الكلام)**", "فحص السمع والإحالة للنطق"],
    ["**نقص المعرفة**", "إكمال المضاد والتقطير والوقاية والمتابعة"]] } }
]}
],
questions: [
{ q: "Why are young children more prone to otitis media than adults?", o: ["Their Eustachian tube is shorter, straighter and more horizontal", "They have no tympanic membrane", "Their ear canal is longer", "They have fewer bacteria"], a: 0, r: "This anatomy allows nasopharyngeal secretions to reach the middle ear easily." },
{ q: "Which organisms commonly cause acute otitis media? (Select all that apply.)", o: ["Streptococcus pneumoniae", "Haemophilus influenzae", "Moraxella catarrhalis", "Mycobacterium leprae"], a: [0, 1, 2], s: true, r: "These are the three main bacterial causes." },
{ q: "Which risk factors increase otitis media in infants? (Select all that apply.)", o: ["Bottle propping while lying flat", "Exposure to cigarette smoke", "Day care attendance", "Exclusive breastfeeding", "Pacifier use"], a: [0, 1, 2, 4], s: true, r: "Breastfeeding is protective." },
{ q: "Which otoscopic finding is typical of acute otitis media?", o: ["Pearly gray TM with clear light reflex", "Bulging, red TM with absent light reflex", "Normal mobile TM", "Wax only"], a: 1, r: "Pus in the middle ear pushes the TM outward." },
{ q: "An infant who is irritable, pulling at the ear and refusing feeds most likely has:", o: ["Teething only", "Acute otitis media", "Colic", "Otitis externa"], a: 1, r: "Ear pulling and irritability are typical infant signs." },
{ q: "A child with AOM suddenly reports pain relief and has purulent ear drainage. This indicates:", o: ["Cure", "Tympanic membrane perforation", "Mastoiditis", "Cholesteatoma"], a: 1, r: "Rupture releases pressure and pus." },
{ q: "First-line antibiotic for acute otitis media is:", o: ["High-dose amoxicillin", "Ciprofloxacin", "Gentamicin", "Vancomycin"], a: 0, r: "Amoxicillin covers the common pathogens." },
{ q: "Which intervention should be given to all children with AOM?", o: ["Antibiotics immediately", "Pain management with paracetamol or ibuprofen", "Myringotomy", "Ear irrigation"], a: 1, r: "Analgesia is always indicated; antibiotics may be deferred in mild cases." },
{ q: "How should ear drops be instilled in a 2-year-old?", o: ["Pull the pinna up and back", "Pull the pinna down and back", "Pull the pinna forward", "No pulling needed"], a: 1, r: "The canal in young children is straightened by pulling down and back." },
{ q: "How should ear drops be instilled in an adult?", o: ["Pull the pinna up and back", "Pull the pinna down and back", "Pull the earlobe forward", "Insert the dropper deep into the canal"], a: 0, r: "Up and back straightens the adult canal." },
{ q: "Why should ear drops be warmed before instillation?", o: ["Cold drops can cause vertigo", "To kill bacteria", "To thicken them", "No reason"], a: 0, r: "Cold fluid stimulates the vestibular system." },
{ q: "Which teaching helps prevent otitis media in infants? (Select all that apply.)", o: ["Hold the infant upright during bottle feeding", "Avoid putting the infant to bed with a bottle", "Avoid passive smoking", "Keep immunizations up to date, including pneumococcal vaccine", "Prop the bottle to free the parent's hands"], a: [0, 1, 2, 3], s: true, r: "Bottle propping promotes reflux into the Eustachian tube." },
{ q: "The purpose of tympanostomy tubes is to:", o: ["Ventilate the middle ear and allow drainage", "Improve vision", "Remove wax", "Treat otitis externa"], a: 0, r: "Tubes equalize pressure and drain effusion." },
{ q: "After tympanostomy tube insertion, parents should be taught to:", o: ["Keep water out of the ears as instructed", "Clean tubes with cotton swabs", "Remove tubes after 1 week", "Allow diving"], a: 0, r: "Water entry can cause infection through the tube." },
{ q: "Otitis media with effusion in a child commonly causes:", o: ["Severe pain and high fever", "Conductive hearing loss and possible speech delay", "Vertigo only", "Facial paralysis"], a: 1, r: "Fluid dampens sound transmission without acute infection." },
{ q: "An adult with persistent unilateral otitis media with effusion should be examined for:", o: ["Nasopharyngeal tumor", "Cataract", "Kidney stones", "Diabetes"], a: 0, r: "A nasopharyngeal mass can obstruct the Eustachian tube." },
{ q: "Chronic suppurative otitis media is characterized by:", o: ["Intact TM and pain", "Permanent TM perforation with persistent discharge", "Bulging TM with fever only", "Normal hearing always"], a: 1, r: "CSOM involves a non-healing perforation with otorrhea." },
{ q: "Which topical drops are commonly used for chronic suppurative otitis media with a perforated TM?", o: ["Quinolone drops such as ciprofloxacin", "Aminoglycoside drops", "Alcohol drops", "Hydrogen peroxide"], a: 0, r: "Quinolones are effective against Pseudomonas and not ototoxic." },
{ q: "A painless, foul-smelling ear discharge with hearing loss in a patient with chronic otitis suggests:", o: ["Cholesteatoma", "Acute otitis media", "Wax impaction", "Otitis externa"], a: 0, r: "Cholesteatoma causes chronic smelly discharge and erodes bone." },
{ q: "What is the treatment of cholesteatoma?", o: ["Antibiotics alone", "Surgical removal (mastoidectomy)", "Ear irrigation", "Observation only"], a: 1, r: "Only surgery removes the expanding epithelium." },
{ q: "Which complications can result from cholesteatoma? (Select all that apply.)", o: ["Facial nerve paralysis", "Meningitis", "Hearing loss", "Vertigo", "Cataract"], a: [0, 1, 2, 3], s: true, r: "Bone erosion damages nearby structures." },
{ q: "A child with otitis media develops swelling and tenderness behind the ear with the ear pushed forward. The nurse suspects:", o: ["Mastoiditis", "Otitis externa", "Mumps", "Lymphadenitis only"], a: 0, p: true, r: "Mastoiditis requires urgent IV antibiotics." },
{ q: "Which signs in a child with otitis media suggest meningitis? (Select all that apply.)", o: ["Neck stiffness", "Severe headache", "Altered consciousness", "High fever with vomiting", "Mild ear itching"], a: [0, 1, 2, 3], s: true, r: "These indicate intracranial spread." },
{ q: "After tympanoplasty, which instructions are correct? (Select all that apply.)", o: ["Avoid blowing the nose", "Sneeze with the mouth open", "Keep the ear dry", "Avoid air travel until cleared", "Swim the next day"], a: [0, 1, 2, 3], s: true, r: "Pressure and water can damage the graft." },
{ q: "After mastoidectomy, the patient cannot close the eye or smile on the operative side. The nurse should:", o: ["Document as expected", "Report immediately — facial nerve injury", "Apply heat", "Encourage chewing gum"], a: 1, p: true, r: "Facial weakness indicates facial nerve damage." },
{ q: "After ear surgery, the patient becomes dizzy when getting up. The nurse should:", o: ["Encourage rapid movement", "Assist with slow position changes and ambulation", "Leave the patient alone", "Give coffee"], a: 1, r: "Vertigo increases fall risk." },
{ q: "When should antibiotics be started immediately rather than observation in AOM?", o: ["Infant younger than 6 months", "Mild ear pain in a 6-year-old", "Adult with no symptoms", "Child with only cold symptoms"], a: 0, r: "Infants under 6 months and severe cases need immediate treatment." },
{ q: "Which nursing action best supports communication with a patient who has conductive hearing loss?", o: ["Shout loudly", "Face the patient, speak clearly and reduce background noise", "Speak from behind", "Cover your mouth"], a: 1, r: "Lip reading and reduced noise improve understanding." },
{ q: "A parent asks why the child keeps getting ear infections in day care. The best answer:", o: ["\"Day care children have more exposure to respiratory infections that block the Eustachian tube.\"", "\"Day care food is unhealthy.\"", "\"Your child has weak ears.\"", "\"It is genetic only.\""], a: 0, r: "URIs are the main precursor of otitis media." },
{ q: "Which statement about tympanostomy tubes is correct?", o: ["They usually fall out on their own within 6–18 months", "They must be removed surgically after 1 week", "They cure hearing loss permanently", "They prevent all colds"], a: 0, r: "Tubes extrude spontaneously as the TM heals." }
]
});

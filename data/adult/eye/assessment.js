NS.reg("adult", "eye", "assessment", {
intro: {
  en: "Vision provides most of the information we receive about the world, so eye problems affect safety, independence and quality of life. Eye assessment includes the **history**, **external inspection**, **visual acuity**, **visual fields**, **extraocular movements**, **pupils** and **ophthalmoscopy**, plus specialized tests such as **tonometry** for intraocular pressure. Knowing the anatomy of the eye explains cataract (lens) and glaucoma (aqueous humor and optic nerve).",
  ar: "يوفر البصر معظم المعلومات التي نتلقاها، لذا تؤثر مشاكل العين على الأمان والاستقلالية وجودة الحياة. يشمل تقييم العين **التاريخ** و**الفحص الخارجي** و**حدة البصر** و**المجال البصري** و**حركات العين** و**الحدقتين** و**تنظير قاع العين**، إضافة لفحوصات خاصة مثل **قياس ضغط العين**. ومعرفة التشريح تفسر الساد (العدسة) والزرق (الخلط المائي والعصب البصري)."
},
sections: [
{ h: { en: "Anatomy and physiology", ar: "التشريح والفيزيولوجيا" }, b: [
  { t: "svg", en: "Cross-section of the eye. Aqueous humor is made by the ciliary body and drains through the trabecular meshwork at the angle.", ar: "مقطع العين: الخلط المائي يُفرز من الجسم الهدبي ويُصرّف عبر الشبكة التربيقية عند الزاوية.",
    svg: '<svg viewBox="0 0 340 200"><circle class="d-box" cx="190" cy="100" r="85"/><path class="d-gold" d="M105 70 Q90 100 105 130 L112 130 Q100 100 112 70 Z"/><text class="d-ts" x="40" y="60">Cornea</text><path class="d-ln" d="M70 63 L100 80"/><ellipse class="d-green" cx="135" cy="100" rx="12" ry="28"/><text class="d-ts" x="120" y="160">Lens</text><path class="d-ln" d="M130 152 L134 128"/><text class="d-ts" x="40" y="105">Anterior</text><text class="d-ts" x="40" y="117">chamber</text><text class="d-t" x="215" y="95" text-anchor="middle">Vitreous</text><path class="d-ln-g" d="M190 15 Q275 15 275 100 Q275 185 190 185"/><text class="d-ts" x="280" y="40">Retina</text><rect class="d-gold" x="272" y="92" width="50" height="16" rx="4"/><text class="d-t" x="297" y="104" text-anchor="middle" font-size="10">Optic n.</text></svg>' },
  { t: "table", h: ["Structure", "Function / clinical relevance"], r: [
    ["**Cornea**", "Transparent, avascular; **main refracting surface**; very sensitive — corneal reflex (CN V)"],
    ["**Sclera**", "White outer coat; yellow in jaundice"],
    ["**Conjunctiva**", "Thin membrane over sclera and inner eyelids; pallor in anemia; red in conjunctivitis"],
    ["**Iris and pupil**", "Iris controls pupil size — constriction (parasympathetic, **CN III**), dilation (sympathetic)"],
    ["**Lens**", "Biconvex, transparent; **accommodation** for near vision; opacity = **cataract**; loses elasticity with age (**presbyopia**)"],
    ["**Ciliary body**", "Produces **aqueous humor**; muscles change lens shape"],
    ["**Aqueous humor**", "Fills anterior chamber → drains through **trabecular meshwork and canal of Schlemm** at the anterior chamber angle; balance maintains **IOP 10–21 mmHg**; impaired outflow → **glaucoma**"],
    ["**Vitreous humor**", "Gel maintaining eye shape"],
    ["**Retina**", "Photoreceptors: **rods** (dim light, peripheral) and **cones** (color, central detail — **macula/fovea**)"],
    ["**Optic nerve (CN II)**", "Carries impulses; **optic disc** = blind spot; cupping in glaucoma"],
    ["**Extraocular muscles**", "Six muscles — **CN III, IV (superior oblique), VI (lateral rectus)**"],
    ["**Lacrimal apparatus**", "Tears lubricate and protect (lysozyme); drain to nose"]],
    ar: { h: ["البنية", "الوظيفة / الأهمية"], r: [
    ["**القرنية**", "شفافة بلا أوعية؛ **سطح الانكسار الرئيسي**؛ منعكس القرنية"],
    ["**الصلبة**", "الطبقة البيضاء؛ تصفر في اليرقان"], ["**الملتحمة**", "شاحبة في فقر الدم"],
    ["**القزحية والحدقة**", "التضيق (**العصب الثالث**) والتوسع (الودي)"],
    ["**العدسة**", "**التكيف** للرؤية القريبة؛ عتامتها = **الساد**؛ **طول النظر الشيخوخي**"],
    ["**الجسم الهدبي**", "يفرز **الخلط المائي**"],
    ["**الخلط المائي**", "يُصرّف عبر **الشبكة التربيقية وقناة شليم**؛ **ضغط العين 10–21 ملم زئبق**؛ ضعف التصريف ← **الزرق**"],
    ["**الخلط الزجاجي**", "هلام يحفظ شكل العين"], ["**الشبكية**", "**العصي** (الضوء الخافت) و**المخاريط** (الألوان والبقعة)"],
    ["**العصب البصري**", "**القرص** = البقعة العمياء؛ التقعر في الزرق"], ["**العضلات الخارجية**", "**الأعصاب III وIV وVI**"], ["**الجهاز الدمعي**", "الدموع للترطيب والحماية"]] } },
  { t: "table", h: ["Refractive error", "Meaning"], r: [
    ["**Myopia** (nearsightedness)", "Image focuses **in front of** retina — distant objects blurred; **concave (minus) lens**"],
    ["**Hyperopia** (farsightedness)", "Image focuses **behind** retina — near objects blurred; **convex (plus) lens**"],
    ["**Astigmatism**", "Irregular corneal curvature — distorted vision; cylindrical lens"],
    ["**Presbyopia**", "Age-related (≈ 40+) loss of lens elasticity — difficulty with **near vision (reading)**; reading glasses"]],
    ar: { h: ["الخطأ الانكساري", "المعنى"], r: [
    ["**قصر النظر**", "الصورة **أمام** الشبكية — البعيد ضبابي؛ **عدسة مقعرة**"], ["**طول النظر**", "الصورة **خلف** الشبكية — القريب ضبابي؛ **محدبة**"],
    ["**اللابؤرية**", "انحناء غير منتظم للقرنية"], ["**طول النظر الشيخوخي**", "فقد مرونة العدسة بعد 40 — صعوبة **القراءة**"]] } }
]},
{ h: { en: "History and examination", ar: "التاريخ والفحص" }, b: [
  { t: "list", en: [
    "**Symptoms**: blurred vision, **sudden vision loss** (emergency), **eye pain**, **halos around lights**, **floaters and flashes** (retinal detachment), **diplopia**, photophobia, redness, discharge, itching, dryness, glare, difficulty with night driving",
    "**History**: use of glasses/contact lenses, last eye exam, eye injury or surgery; **diabetes, hypertension** (retinopathy), thyroid disease, **steroid use** (cataract, glaucoma), family history of **glaucoma**, occupational exposures, sun exposure; medications (**anticholinergics, antihistamines can precipitate angle-closure glaucoma**)",
    "**Functional impact**: reading, driving, ADLs, falls, medication management"],
    ar: [
    "**الأعراض**: تشوش الرؤية، **فقد البصر المفاجئ** (طارئ)، **ألم العين**، **هالات حول الأضواء**، **العوائم والومضات** (انفصال الشبكية)، ازدواج الرؤية، رهاب الضوء، احمرار، إفرازات",
    "**التاريخ**: النظارات والعدسات، الإصابات والجراحة؛ **السكري والضغط**؛ **الكورتيزون**؛ تاريخ عائلي **للزرق**؛ الأدوية (**مضادات الكولين والهيستامين قد تحرض الزرق مغلق الزاوية**)",
    "**التأثير الوظيفي**: القراءة والقيادة والسقوط وتناول الأدوية"] },
  { t: "table", h: ["Examination", "Technique / normal"], r: [
    ["**Distant visual acuity — Snellen chart**", "Patient **6 m (20 ft)** from chart; test **each eye separately (cover other), then both**, with glasses if worn; recorded as fraction — **6/6 (20/20) normal**; e.g., 6/60 = sees at 6 m what a normal eye sees at 60 m; **legal blindness: 6/60 (20/200) or worse in the better eye with correction, or visual field ≤ 20°**"],
    ["**Near vision**", "Jaeger card / newspaper at 35 cm (presbyopia)"],
    ["**Visual fields — confrontation test**", "Compare patient's peripheral vision with examiner's; loss of peripheral vision in **glaucoma**"],
    ["**Extraocular movements**", "**Six cardinal positions of gaze** (\"H\" pattern) — CN III, IV, VI; nystagmus"],
    ["**Corneal light reflex (Hirschberg)** / cover test", "Light reflects at the same spot in both eyes; asymmetry = strabismus"],
    ["**Pupils — PERRLA**", "**P**upils **E**qual, **R**ound, **R**eactive to **L**ight and **A**ccommodation; normal 2–6 mm; direct and consensual response"],
    ["**External inspection**", "Eyelids (ptosis, edema), lashes, conjunctiva, sclera, cornea clarity, lens opacity"],
    ["**Ophthalmoscopy (fundoscopy)**", "**Red reflex** (absent in dense cataract / retinoblastoma in children), optic disc (cup-to-disc ratio — ↑ in glaucoma), vessels, macula; darkened room"],
    ["**Color vision**", "Ishihara plates"]],
    ar: { h: ["الفحص", "الطريقة / الطبيعي"], r: [
    ["**حدة البصر البعيد — لوحة سنيلن**", "على بعد **6 أمتار**؛ **كل عين منفردة ثم معاً** مع النظارة؛ **6/6 طبيعي**؛ **العمى القانوني: 6/60 أو أسوأ في العين الأفضل مع التصحيح، أو مجال ≤ 20°**"],
    ["**البصر القريب**", "بطاقة القراءة على بعد 35 سم"],
    ["**المجال البصري — المواجهة**", "مقارنة مع الفاحص؛ فقد الرؤية المحيطية في **الزرق**"],
    ["**حركات العين**", "**ستة اتجاهات** (شكل H)"], ["**منعكس الضوء القرني**", "عدم التناظر = الحول"],
    ["**الحدقتان — PERRLA**", "متساويتان مستديرتان تستجيبان للضوء والتكيف؛ 2–6 ملم"],
    ["**الفحص الخارجي**", "الجفون والملتحمة والقرنية والعدسة"],
    ["**تنظير قاع العين**", "**المنعكس الأحمر** (يغيب في الساد الكثيف)، نسبة التقعر للقرص (↑ في الزرق)"],
    ["**رؤية الألوان**", "لوحات إيشيهارا"]] } }
]},
{ h: { en: "Diagnostic tests and medications", ar: "الفحوصات التشخيصية والأدوية" }, b: [
  { t: "table", h: ["Test", "Purpose"], r: [
    ["**Tonometry**", "Measures **intraocular pressure — normal 10–21 mmHg**; applanation (anesthetic drops — **don't rub eye**), non-contact (air puff)"],
    ["**Gonioscopy**", "Examines the **anterior chamber angle** — **open vs closed angle** glaucoma"],
    ["**Slit-lamp examination**", "Magnified view of cornea, lens (cataract), anterior chamber"],
    ["**Perimetry (visual field test)**", "Maps visual field — detects glaucomatous loss"],
    ["**Optical coherence tomography (OCT)**", "Retinal and optic nerve layer thickness (glaucoma, macular disease)"],
    ["**Fluorescein angiography**", "Dye injected IV → retinal vessels photographed (diabetic retinopathy); **yellow skin and urine for 24–48 h**; allergy risk"],
    ["**Fluorescein staining of cornea**", "Detects corneal abrasion/ulcer (green under blue light)"],
    ["**A-scan ultrasound / biometry**", "Eye length — **calculates the intraocular lens power before cataract surgery**"]],
    ar: { h: ["الفحص", "الغرض"], r: [
    ["**قياس ضغط العين**", "**الطبيعي 10–21 ملم زئبق**؛ بالتسطيح (قطرة مخدرة — **لا تفرك العين**) أو بنفخة هواء"],
    ["**تنظير الزاوية**", "**زاوية مفتوحة أم مغلقة**"], ["**المصباح الشقي**", "القرنية والعدسة"],
    ["**قياس المجال البصري**", "كشف فقد الزرق"], ["**التصوير المقطعي البصري**", "سماكة طبقات الشبكية والعصب"],
    ["**تصوير الأوعية بالفلوريسين**", "صبغة وريدية؛ **اصفرار الجلد والبول 24–48 ساعة**"],
    ["**صبغ القرنية بالفلوريسين**", "يكشف الخدوش"], ["**الموجات فوق الصوتية / القياس الحيوي**", "**يحسب قوة العدسة المزروعة قبل عملية الساد**"]] } },
  { t: "table", h: ["Drug group", "Effect and nursing points"], r: [
    ["**Mydriatics** (phenylephrine — sympathomimetic) and **cycloplegics** (atropine, cyclopentolate, tropicamide — anticholinergic)", "**Dilate pupil** (and paralyze accommodation) for examination/surgery; **blurred vision and photophobia for hours — wear sunglasses, don't drive**; **contraindicated in angle-closure glaucoma** (can precipitate attack)"],
    ["**Miotics** (pilocarpine — cholinergic)", "**Constrict pupil**, open the angle — glaucoma; dim vision in dark, brow ache"],
    ["**Topical anesthetics** (tetracaine, proparacaine)", "For examinations; **corneal reflex lost — protect eye, don't rub, avoid touching for ~30 min**; never for home use (corneal damage)"],
    ["**Anti-infectives, steroids, artificial tears, lubricants**", "Steroid drops long-term → cataract, glaucoma, infection"]],
    ar: { h: ["المجموعة", "التأثير ونقاط التمريض"], r: [
    ["**موسعات الحدقة ومشلات التكيف** (الأتروبين، التروبيكاميد)", "**توسيع الحدقة** للفحص؛ **تشوش ورهاب ضوء لساعات — نظارة شمسية ولا قيادة**؛ **ممنوعة في الزرق مغلق الزاوية**"],
    ["**مضيقات الحدقة** (البيلوكاربين)", "**تضيق الحدقة** وتفتح الزاوية — للزرق"],
    ["**المخدرات الموضعية**", "**فقد منعكس القرنية — احمِ العين ولا تفركها**؛ ليست للاستعمال المنزلي"],
    ["**المضادات والكورتيزون والدموع الصناعية**", "قطرات الكورتيزون الطويلة ← ساد وزرق"]] } },
  { t: "list", en: [
    "**Instilling eye drops**: wash hands; tilt head back, look up; **pull lower lid down to form a pocket (conjunctival sac)**; drop into the sac — **don't let the dropper touch the eye**; close eye gently (don't squeeze); **apply gentle pressure on the inner canthus (punctal occlusion) for 1–2 minutes** to reduce systemic absorption; **wait 5 minutes between different drops**; **drops before ointment**",
    "**Communicating with a visually impaired person**: identify yourself on entering, speak in a normal voice, explain what you are doing, orient to the room, keep furniture in place, offer your arm (guide walks half a step ahead), describe food on the plate using a **clock pattern**, keep call bell and items within reach, good lighting, large-print materials"],
    ar: [
    "**تقطير العين**: غسل اليدين؛ إمالة الرأس للخلف والنظر للأعلى؛ **سحب الجفن السفلي لتكوين جيب**؛ التقطير في الجيب — **لا يلمس القطارة العين**؛ إغلاق العين بلطف؛ **الضغط على الزاوية الداخلية 1–2 دقيقة** لتقليل الامتصاص الجهازي؛ **انتظار 5 دقائق بين القطرات**؛ **القطرة قبل المرهم**",
    "**التواصل مع ضعيف البصر**: عرّف بنفسك، تكلم بصوت طبيعي، اشرح ما تفعل، عرّفه بالغرفة وأبقِ الأثاث بمكانه، قدّم ذراعك، صف الطعام **بنظام الساعة**، إضاءة جيدة"] }
]}
],
questions: [
{ q: "Normal intraocular pressure is:", o: ["10–21 mmHg", "30–40 mmHg", "0–5 mmHg", "50–60 mmHg"], a: 0, r: "IOP above 21 mmHg is considered elevated." },
{ q: "Aqueous humor is produced by the:", o: ["Ciliary body", "Lens", "Retina", "Cornea"], a: 0, r: "The ciliary body secretes aqueous humor into the posterior chamber." },
{ q: "Aqueous humor drains mainly through the:", o: ["Trabecular meshwork and canal of Schlemm", "Optic nerve", "Lacrimal duct", "Vitreous"], a: 0, r: "Impaired drainage raises IOP in glaucoma." },
{ q: "Which photoreceptors are responsible for color vision and central detail?", o: ["Rods", "Cones", "Ganglion cells", "Bipolar cells only"], a: 1, r: "Cones are concentrated in the macula/fovea." },
{ q: "Difficulty reading small print in a 48-year-old is most likely:", o: ["Presbyopia", "Myopia", "Glaucoma", "Cataract"], a: 0, r: "The lens loses elasticity with age, reducing near focus." },
{ q: "In myopia, the image focuses:", o: ["In front of the retina", "Behind the retina", "On the optic disc", "On the lens"], a: 0, r: "Nearsighted people see near objects clearly; concave lenses correct it." },
{ q: "A Snellen result of 6/18 means the patient:", o: ["Sees at 6 m what a normal eye sees at 18 m", "Sees at 18 m what a normal eye sees at 6 m", "Has perfect vision", "Is legally blind"], a: 0, r: "The denominator is the distance at which a normal eye reads the line." },
{ q: "How far should the patient stand from a Snellen chart?", o: ["1 m", "6 m (20 ft)", "15 m", "35 cm"], a: 1, r: "The standard testing distance is 6 m." },
{ q: "Legal blindness is defined as best-corrected vision in the better eye of:", o: ["6/60 (20/200) or worse, or visual field 20° or less", "6/9", "6/12", "Normal acuity with glasses"], a: 0, r: "Both acuity and field criteria apply." },
{ q: "PERRLA stands for:", o: ["Pupils equal, round, reactive to light and accommodation", "Peripheral eye reflex", "Pupil enlarged, round, reactive", "None of these"], a: 0, r: "This standard notation documents normal pupils." },
{ q: "Which cranial nerves control eye movements? (Select all that apply.)", o: ["Oculomotor (III)", "Trochlear (IV)", "Abducens (VI)", "Optic (II)", "Facial (VII)"], a: [0, 1, 2], s: true, r: "CN II carries vision, not movement." },
{ q: "An absent red reflex may indicate:", o: ["Dense cataract", "Normal eye", "Conjunctivitis", "Myopia"], a: 0, r: "Opacities block the reflection from the retina." },
{ q: "Which test measures intraocular pressure?", o: ["Tonometry", "Snellen chart", "Perimetry", "Ishihara plates"], a: 0, r: "Tonometry measures intraocular pressure; values above 21 mmHg are considered elevated." },
{ q: "After applanation tonometry with anesthetic drops, the nurse teaches the patient to:", o: ["Rub the eye to relieve numbness", "Avoid rubbing the eye until anesthesia wears off", "Drive immediately", "Swim"], a: 1, r: "Loss of corneal reflex makes the cornea vulnerable to injury." },
{ q: "Gonioscopy is used to:", o: ["Examine the anterior chamber angle", "Measure visual acuity", "Assess tear production", "Test color vision"], a: 0, r: "It distinguishes open- from closed-angle glaucoma." },
{ q: "After fluorescein angiography, the patient should be told:", o: ["Skin and urine may appear yellow for 24–48 hours", "Vision will be permanently lost", "No fluids are allowed", "Hearing will decrease"], a: 0, r: "The dye is excreted over 1–2 days." },
{ q: "After mydriatic drops for an eye examination, the patient should: (Select all that apply.)", o: ["Wear sunglasses", "Not drive until vision clears", "Expect blurred vision for several hours", "Read small print immediately to test vision"], a: [0, 1, 2], s: true, r: "Dilated pupils cause photophobia and blurred near vision." },
{ q: "Which drug group is contraindicated in angle-closure glaucoma?", o: ["Mydriatics/anticholinergics", "Miotics", "Beta-blocker eye drops", "Carbonic anhydrase inhibitors"], a: 0, p: true, r: "Pupil dilation can close the angle and precipitate an attack." },
{ q: "Which is correct technique for instilling eye drops? (Select all that apply.)", o: ["Pull the lower lid down to form a pocket", "Avoid touching the eye with the dropper", "Apply pressure to the inner canthus after instillation", "Wait about 5 minutes between different drops", "Drop directly onto the cornea from high above"], a: [0, 1, 2, 3], s: true, r: "Drops go into the conjunctival sac; dropping on the cornea triggers blinking and discomfort." },
{ q: "Why is pressure applied to the inner canthus after instilling eye drops?", o: ["To reduce systemic absorption through the nasolacrimal duct", "To increase tearing", "To dilate the pupil", "To prevent blinking forever"], a: 0, r: "Punctal occlusion keeps medication in the eye and reduces systemic effects (e.g., beta-blockers)." },
{ q: "When both eye drops and ointment are prescribed, the nurse should:", o: ["Give ointment first", "Give drops first, then ointment", "Mix them", "Give only one"], a: 1, r: "Ointment forms a barrier that prevents drop absorption." },
{ q: "Which medications in a patient's history can precipitate angle-closure glaucoma? (Select all that apply.)", o: ["Anticholinergics", "Antihistamines", "Some antidepressants", "Paracetamol"], a: [0, 1, 2], s: true, r: "Drugs with anticholinergic effects dilate the pupil." },
{ q: "Long-term use of corticosteroid eye drops increases the risk of:", o: ["Cataract and glaucoma", "Myopia only", "Conjunctivitis cure", "Color blindness"], a: 0, r: "Steroids cause lens opacity and raise IOP." },
{ q: "When guiding a visually impaired patient, the nurse should:", o: ["Push the patient ahead", "Offer an arm and walk slightly ahead", "Hold the patient's hand and pull", "Let the patient walk alone in a new area"], a: 1, r: "The patient holds the nurse's arm above the elbow and follows." },
{ q: "How should the nurse describe a meal tray to a blind patient?", o: ["Using a clock pattern (e.g., 'meat at 6 o'clock')", "Just place it and leave", "Feed the patient without explanation", "Describe colors only"], a: 0, r: "The clock method gives clear locations." },
{ q: "Sudden flashes of light and new floaters suggest:", o: ["Retinal detachment", "Presbyopia", "Conjunctivitis", "Dry eye"], a: 0, p: true, r: "These symptoms require urgent ophthalmic evaluation." },
{ q: "Which test is used before cataract surgery to calculate the power of the intraocular lens?", o: ["A-scan biometry", "Tonometry", "Ishihara", "Fluorescein angiography"], a: 0, r: "Biometry measures axial length to choose the lens implant." },
{ q: "The confrontation test assesses:", o: ["Peripheral visual fields", "Color vision", "Near vision", "IOP"], a: 0, r: "It compares the patient's fields with the examiner's." },
{ q: "Which systemic diseases commonly affect the retina? (Select all that apply.)", o: ["Diabetes mellitus", "Hypertension", "Sickle cell disease", "Common cold"], a: [0, 1, 2], s: true, r: "Vascular diseases cause retinopathy." },
{ q: "Fluorescein staining of the cornea is used to detect:", o: ["Corneal abrasion", "Glaucoma", "Cataract", "Retinal detachment"], a: 0, r: "Damaged epithelium takes up the dye and appears green." }
]
});

NS.reg("adult", "cardio", "assessment", {
intro: {
  en: "A cardiovascular assessment combines the **health history**, the **physical examination** (inspection, palpation, percussion, auscultation) and **diagnostic tests**. To interpret findings you need a clear picture of how the heart works: its **chambers and valves**, the **conduction system**, and the factors that determine **cardiac output**. This lecture is the foundation for valvular and congenital heart disease.",
  ar: "تقييم القلب والأوعية يجمع **التاريخ الصحي** و**الفحص السريري** (النظر والجس والقرع والإصغاء) و**الفحوصات**. ولتفسير النتائج تحتاج صورة واضحة لعمل القلب: **حجراته وصماماته** و**جهاز التوصيل** والعوامل المحددة **للنتاج القلبي**. هذه المحاضرة أساس أمراض الصمامات والعيوب الخلقية."
},
sections: [
{ h: { en: "Anatomy and physiology review", ar: "مراجعة التشريح والفيزيولوجيا" }, b: [
  { t: "svg", en: "Blood flow through the heart. Deoxygenated blood (right side) goes to the lungs; oxygenated blood (left side) goes to the body.", ar: "مسار الدم في القلب: الجانب الأيمن للرئتين والأيسر للجسم.",
    svg: '<svg viewBox="0 0 340 220"><rect class="d-box" x="20" y="20" width="130" height="80" rx="10"/><text class="d-t" x="85" y="55" text-anchor="middle">Right atrium</text><text class="d-ts" x="85" y="75" text-anchor="middle">from vena cavae</text><rect class="d-box" x="20" y="125" width="130" height="80" rx="10"/><text class="d-t" x="85" y="160" text-anchor="middle">Right ventricle</text><text class="d-ts" x="85" y="180" text-anchor="middle">→ pulmonary artery</text><rect class="d-red" x="190" y="20" width="130" height="80" rx="10"/><text class="d-tw" x="255" y="55" text-anchor="middle">Left atrium</text><text class="d-tw" x="255" y="75" text-anchor="middle" font-size="11">from pulm. veins</text><rect class="d-red" x="190" y="125" width="130" height="80" rx="10"/><text class="d-tw" x="255" y="160" text-anchor="middle">Left ventricle</text><text class="d-tw" x="255" y="180" text-anchor="middle" font-size="11">→ aorta</text><path class="d-ln" d="M85 100 L85 125"/><text class="d-ts" x="92" y="117">tricuspid</text><path class="d-ln" d="M255 100 L255 125"/><text class="d-ts" x="262" y="117">mitral</text></svg>' },
  { t: "table", h: ["Structure", "Key facts"], r: [
    ["**Pericardium**", "Double-layered sac with 10–30 mL fluid that reduces friction"],
    ["**Myocardium**", "Muscle layer; **left ventricle wall is thickest** (pumps against systemic resistance)"],
    ["**Atrioventricular valves**", "**Tricuspid** (right) and **mitral/bicuspid** (left); close at the start of systole → **S1 (\"lub\")**"],
    ["**Semilunar valves**", "**Pulmonic** and **aortic**; close at the end of systole → **S2 (\"dub\")**"],
    ["**Coronary arteries**", "Left (anterior descending, circumflex) and right; fill during **diastole**"],
    ["**Conduction system**", "**SA node** (pacemaker, 60–100/min) → atria → **AV node** (delay, 40–60/min) → bundle of His → bundle branches → **Purkinje fibers** (20–40/min)"]],
    ar: { h: ["البنية", "الحقائق"], r: [
    ["**التامور**", "كيس ذو طبقتين فيه 10–30 مل سائل"], ["**عضلة القلب**", "**جدار البطين الأيسر الأسمك**"],
    ["**الصمامات الأذينية البطينية**", "**ثلاثي الشرف** و**التاجي**؛ إغلاقهما ← **S1**"],
    ["**الصمامات الهلالية**", "**الرئوي** و**الأبهري**؛ إغلاقهما ← **S2**"],
    ["**الشرايين التاجية**", "تمتلئ أثناء **الانبساط**"],
    ["**جهاز التوصيل**", "**العقدة الجيبية** (60–100) ← **الأذينية البطينية** (40–60) ← حزمة هيس ← **ألياف بركنجي** (20–40)"]] } },
  { t: "flow", steps: [
    { en: "**Cardiac output (CO) = heart rate × stroke volume** — normal **4–8 L/min**", ar: "**النتاج القلبي = معدل القلب × الحجم الضربي** — طبيعي **4–8 لتر/دقيقة**" },
    { en: "**Preload**: volume/stretch of the ventricle at the end of diastole (↑ with fluid overload, ↓ with hemorrhage)", ar: "**الحمل المسبق**: حجم وتمدد البطين نهاية الانبساط" },
    { en: "**Afterload**: resistance the ventricle must overcome to eject blood (↑ with hypertension, **aortic stenosis**)", ar: "**الحمل اللاحق**: المقاومة التي يتغلب عليها البطين (↑ بارتفاع الضغط و**تضيق الأبهر**)" },
    { en: "**Contractility**: force of contraction independent of preload (↑ by sympathetic stimulation, digoxin)", ar: "**الانقباضية**: قوة الانقباض" } ] }
]},
{ h: { en: "Health history", ar: "التاريخ الصحي" }, b: [
  { t: "cards", items: [
    { i: "alert", en: "Chest pain", d: "Use **PQRST**: provoking/palliating factors, quality (pressure, squeezing, sharp), region/radiation (jaw, left arm), severity 0–10, timing", ar: "ألم الصدر — **PQRST**: المحفز، النوع، المكان والانتشار، الشدة، التوقيت" },
    { i: "lungs", en: "Dyspnea", d: "On exertion; **orthopnea** (number of pillows); **paroxysmal nocturnal dyspnea** — left heart failure, mitral disease", ar: "ضيق النفس عند الجهد؛ **ضيق الاستلقاء**؛ **ضيق النفس الليلي الانتيابي**" },
    { i: "heart", en: "Palpitations", d: "Awareness of fast or irregular beat — atrial fibrillation in mitral disease", ar: "الخفقان — الرجفان الأذيني" },
    { i: "drop", en: "Edema & weight gain", d: "**1 kg gain in a day ≈ 1 L fluid retained**", ar: "الوذمة وزيادة الوزن: **1 كغ يومياً ≈ 1 لتر سوائل**" },
    { i: "bed", en: "Fatigue, syncope, dizziness", d: "Low cardiac output (aortic stenosis, dysrhythmias)", ar: "التعب والإغماء والدوخة — نقص النتاج" } ] },
  { t: "list", en: [
    "**Past history**: **rheumatic fever** (streptococcal sore throat in childhood — main cause of valvular disease in developing countries), congenital heart disease, hypertension, diabetes, dyslipidemia, previous MI, infective endocarditis, cardiac surgery",
    "**Medications**: antihypertensives, anticoagulants, digoxin, diuretics, OTC (NSAIDs, decongestants), herbal",
    "**Family history**: premature coronary artery disease, sudden death, cardiomyopathy",
    "**Lifestyle risk factors**: **smoking**, diet (salt, fat), physical inactivity, alcohol, obesity, stress"],
    ar: [
    "**السوابق**: **الحمى الروماتيزمية** (التهاب الحلق العقدي في الطفولة — أهم سبب لأمراض الصمامات في الدول النامية)، العيوب الخلقية، الضغط، السكري، الدهون، الجلطة، التهاب الشغاف",
    "**الأدوية**: الخافضة للضغط ومضادات التخثر والديجوكسين والمدرات",
    "**التاريخ العائلي**: أمراض الشرايين المبكرة والموت المفاجئ",
    "**نمط الحياة**: **التدخين**، الغذاء، الخمول، الكحول، السمنة، الضغط النفسي"] }
]},
{ h: { en: "Physical examination", ar: "الفحص السريري" }, b: [
  { t: "table", h: ["Finding", "Significance"], r: [
    ["**General**: skin color, **cyanosis** (central — lips/tongue; peripheral — nail beds), pallor", "Central cyanosis = low arterial O₂ (cyanotic heart disease); peripheral = poor perfusion"],
    ["**Clubbing of fingers**", "Chronic hypoxemia (cyanotic congenital heart disease, endocarditis)"],
    ["**Capillary refill**", "Normal **< 3 seconds** (often < 2)"],
    ["**Blood pressure**", "Both arms; **pulse pressure** = SBP − DBP (normal ~40) — **wide in aortic regurgitation**, **narrow in aortic stenosis**; **orthostatic hypotension** = drop ≥ 20 systolic or ≥ 10 diastolic on standing"],
    ["**Pulses**", "Rate, rhythm, amplitude (0 absent – 4+ bounding), symmetry; **pulse deficit** (apical − radial) in atrial fibrillation; **water-hammer (bounding) pulse** in aortic regurgitation"],
    ["**Jugular venous distension (JVD)**", "Patient at **45°**; distension above 3–4 cm → right heart failure / fluid overload"],
    ["**Edema**", "Pitting edema graded **1+ (2 mm) to 4+ (8 mm)**; dependent (ankles, sacrum in bedridden)"],
    ["**Apical impulse (PMI)**", "**5th intercostal space, left midclavicular line**; displaced laterally/down in left ventricular enlargement"],
    ["**Thrill / heave**", "Thrill = palpable vibration of a loud murmur; heave = forceful lift (ventricular hypertrophy)"]],
    ar: { h: ["العلامة", "الدلالة"], r: [
    ["**الزرقة** (مركزية في الشفاه واللسان؛ محيطية في الأظافر)", "المركزية = نقص أكسجين الدم الشرياني"],
    ["**تعجر الأصابع**", "نقص الأكسجة المزمن"], ["**امتلاء الشعيرات**", "**أقل من 3 ثوانٍ**"],
    ["**ضغط الدم**", "**فرق الضغط** — **واسع في قلس الأبهر** و**ضيق في تضيقه**؛ هبوط الضغط الانتصابي"],
    ["**النبض**", "**عجز النبض** في الرجفان؛ **النبض المطرقي** في قلس الأبهر"],
    ["**انتفاخ الوريد الوداجي**", "بزاوية **45°**؛ فشل القلب الأيمن"],
    ["**الوذمة**", "انطباعية بدرجات **1+ إلى 4+**"],
    ["**الضربة القمية**", "**المسافة الوربية الخامسة على خط منتصف الترقوة الأيسر**"],
    ["**الرعشة / الرفعة**", "اهتزاز مجسوس للنفخة / رفع قوي (تضخم)"]] } },
  { t: "table", h: ["Auscultation area", "Location"], r: [
    ["**Aortic**", "**2nd ICS, right sternal border**"],
    ["**Pulmonic**", "**2nd ICS, left sternal border**"],
    ["**Erb's point**", "3rd ICS, left sternal border"],
    ["**Tricuspid**", "**4th–5th ICS, left lower sternal border**"],
    ["**Mitral (apical)**", "**5th ICS, left midclavicular line**"]],
    ar: { h: ["منطقة الإصغاء", "الموقع"], r: [
    ["**الأبهري**", "**الوربية الثانية يمين القص**"], ["**الرئوي**", "**الوربية الثانية يسار القص**"], ["**نقطة إرب**", "الثالثة يسار القص"],
    ["**ثلاثي الشرف**", "**الرابعة-الخامسة يسار أسفل القص**"], ["**التاجي**", "**الخامسة منتصف الترقوة الأيسر**"]] } },
  { t: "mnem", k: "APE To Man", title: "Order of auscultation", rows: [
    ["A", "**Aortic** — 2nd ICS right", "الأبهري"], ["P", "**Pulmonic** — 2nd ICS left", "الرئوي"], ["E", "**Erb's point** — 3rd ICS left", "إرب"],
    ["T", "**Tricuspid** — 4th/5th ICS left sternal border", "ثلاثي الشرف"], ["M", "**Mitral** — 5th ICS midclavicular", "التاجي"]] },
  { t: "table", h: ["Sound", "Meaning"], r: [
    ["**S1**", "Closure of mitral and tricuspid valves; loudest at **apex**; start of systole"],
    ["**S2**", "Closure of aortic and pulmonic valves; loudest at **base**; end of systole"],
    ["**S3** (ventricular gallop, after S2)", "Rapid filling of a stiff/overloaded ventricle — **heart failure**, fluid overload (normal in children/young athletes)"],
    ["**S4** (atrial gallop, before S1)", "Atrium contracting against a stiff ventricle — hypertension, hypertrophy, MI"],
    ["**Murmur**", "Turbulent flow through a stenotic or regurgitant valve or septal defect; described by timing (systolic/diastolic), location, radiation, grade **I–VI**, pitch, quality"],
    ["**Pericardial friction rub**", "Scratchy sound — pericarditis"]],
    ar: { h: ["الصوت", "المعنى"], r: [
    ["**S1**", "إغلاق التاجي وثلاثي الشرف؛ الأعلى عند **القمة**"], ["**S2**", "إغلاق الأبهري والرئوي؛ الأعلى عند **القاعدة**"],
    ["**S3**", "امتلاء سريع لبطين محمّل — **فشل القلب**"], ["**S4**", "انقباض الأذين ضد بطين متصلب — الضغط والتضخم"],
    ["**النفخة**", "جريان مضطرب عبر صمام متضيق أو قالس أو ثقب؛ درجات **I–VI**"], ["**احتكاك التامور**", "التهاب التامور"]] } }
]},
{ h: { en: "Diagnostic tests", ar: "الفحوصات التشخيصية" }, b: [
  { t: "table", h: ["Test", "Purpose and nursing points"], r: [
    ["**Electrocardiogram (ECG)**", "12 leads — rhythm, ischemia, hypertrophy, atrial enlargement; no preparation; remove metal, clean skin"],
    ["**Holter monitor**", "Continuous ECG 24–48 h; patient keeps a **diary of activities and symptoms**; no bathing"],
    ["**Echocardiography (transthoracic)**", "Ultrasound — **valve structure and function, chamber size, ejection fraction (normal 55–70%)**; non-invasive. **Transesophageal (TEE)**: NPO 6 h, throat anesthetized — **nothing by mouth until gag reflex returns**"],
    ["**Chest X-ray**", "Heart size (cardiomegaly), pulmonary congestion"],
    ["**Exercise (stress) test**", "ECG during treadmill; or pharmacologic (dobutamine); stop if chest pain, ST changes, dysrhythmia, hypotension"],
    ["**Cardiac catheterization / angiography**", "Pressures, oxygen saturation, coronary anatomy. **Before**: consent, **allergy to iodine/contrast**, renal function, NPO, hold metformin, mark pulses. **After**: **bed rest with the affected leg straight** (femoral approach) for several hours, **monitor puncture site for bleeding/hematoma**, check **distal pulses, color, temperature**, fluids to flush contrast"],
    ["**Labs**", "**Troponin** (MI), CK-MB, **BNP** (heart failure), electrolytes (**K⁺, Mg²⁺**), lipid profile, CBC, **coagulation (PT/INR, aPTT)**, **ASO titer** (recent streptococcal infection), ESR/CRP, blood cultures (endocarditis)"]],
    ar: { h: ["الفحص", "الغرض ونقاط التمريض"], r: [
    ["**تخطيط القلب**", "12 قطباً — النظم والإقفار والتضخم"], ["**هولتر**", "تخطيط مستمر 24–48 ساعة؛ **مذكرة بالنشاطات والأعراض**"],
    ["**صدى القلب**", "**بنية الصمامات ووظيفتها وحجم الحجرات والكسر القذفي (55–70%)**. **عبر المريء**: صيام 6 ساعات و**لا شيء بالفم حتى عودة منعكس البلع**"],
    ["**أشعة الصدر**", "حجم القلب والاحتقان"], ["**اختبار الجهد**", "يوقف عند الألم أو التغيرات"],
    ["**القسطرة القلبية**", "**قبل**: الموافقة، **حساسية الصبغة**، وظائف الكلى، الصيام. **بعد**: **راحة مع إبقاء الساق مستقيمة**، **مراقبة النزف والورم الدموي**، **النبض البعيد واللون والحرارة**، سوائل"],
    ["**التحاليل**", "**التروبونين**، **BNP**، **البوتاسيوم والمغنيسيوم**، الدهون، **التخثر**، **ASO**، زرع الدم"]] } },
  { t: "warn", en: "After cardiac catheterization, **bleeding at the femoral site** is the priority complication: if it occurs, **apply firm direct pressure above the puncture site** and notify. Also report **absent or weak distal pulses, cool pale limb, back/flank pain (retroperitoneal bleed), chest pain or dysrhythmias**.",
    ar: "بعد القسطرة **النزف من موضع الفخذ** المضاعفة الأولى: **اضغط بقوة فوق موضع الثقب** وأبلغ. وأبلغ أيضاً عن **غياب النبض البعيد أو الطرف البارد الشاحب أو ألم الظهر (نزف خلف الصفاق) أو ألم الصدر**." }
]}
],
questions: [
{ q: "Which heart sound is produced by closure of the mitral and tricuspid valves?", o: ["S1", "S2", "S3", "S4"], a: 0, r: "S1 marks AV valve closure at the beginning of systole." },
{ q: "Where is the mitral area auscultated?", o: ["2nd ICS right sternal border", "2nd ICS left sternal border", "5th ICS left midclavicular line", "4th ICS right sternal border"], a: 2, r: "The mitral area is at the apex." },
{ q: "The aortic valve is best auscultated at the:", o: ["2nd ICS, right sternal border", "5th ICS, midclavicular line", "4th ICS, left sternal border", "Xiphoid"], a: 0, r: "The aortic area is the 2nd right intercostal space." },
{ q: "An S3 heart sound in a 60-year-old patient most likely indicates:", o: ["Normal finding", "Heart failure or fluid overload", "Mitral valve closure", "Hypothyroidism"], a: 1, r: "S3 reflects rapid filling of an overloaded ventricle; it is normal only in children and young athletes." },
{ q: "The normal pacemaker of the heart is the:", o: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"], a: 1, r: "The SA node fires at 60–100/min." },
{ q: "Cardiac output is calculated as:", o: ["Heart rate × stroke volume", "Blood pressure × heart rate", "Stroke volume ÷ heart rate", "Preload + afterload"], a: 0, r: "Cardiac output equals heart rate multiplied by stroke volume; normal adult CO is about 4–8 L/min." },
{ q: "Afterload is increased by which condition?", o: ["Hemorrhage", "Aortic stenosis", "Dehydration", "Vasodilation"], a: 1, r: "A narrowed aortic valve increases resistance to ejection." },
{ q: "Which history findings are relevant risk factors for valvular heart disease? (Select all that apply.)", o: ["Childhood rheumatic fever", "Previous infective endocarditis", "Congenital heart defect", "Recurrent streptococcal sore throats", "Allergy to penicillin only"], a: [0, 1, 2, 3], s: true, r: "Rheumatic fever, endocarditis and congenital lesions damage valves." },
{ q: "A patient reports needing 3 pillows to sleep because of breathlessness. This is documented as:", o: ["Paroxysmal nocturnal dyspnea", "Orthopnea", "Apnea", "Kussmaul breathing"], a: 1, r: "Orthopnea is dyspnea when lying flat, quantified by number of pillows." },
{ q: "A weight gain of 1 kg overnight in a cardiac patient suggests retention of approximately:", o: ["100 mL fluid", "1 L fluid", "5 L fluid", "No fluid"], a: 1, r: "1 kg ≈ 1 L of retained fluid." },
{ q: "Where is the point of maximal impulse (PMI) normally located?", o: ["2nd ICS right", "5th ICS left midclavicular line", "Right axilla", "Epigastrium"], a: 1, r: "The apical impulse is normally at the 5th ICS MCL." },
{ q: "A laterally displaced PMI suggests:", o: ["Left ventricular enlargement", "Normal heart", "Dehydration", "Pneumothorax only"], a: 0, r: "An enlarged LV shifts the apex laterally and downward." },
{ q: "A wide pulse pressure is characteristic of:", o: ["Aortic stenosis", "Aortic regurgitation", "Cardiac tamponade", "Hypovolemia"], a: 1, r: "Regurgitation causes high systolic and low diastolic pressure." },
{ q: "Central cyanosis is best assessed at the:", o: ["Nail beds", "Lips and tongue", "Ear lobes", "Toes"], a: 1, r: "Mucous membranes reflect arterial oxygenation." },
{ q: "Clubbing of the fingers indicates:", o: ["Acute anemia", "Chronic hypoxemia", "Dehydration", "Acute MI"], a: 1, r: "Clubbing develops with long-standing low oxygen." },
{ q: "Jugular venous distension is assessed with the patient positioned at:", o: ["0°", "45°", "90°", "Trendelenburg"], a: 1, r: "45° elevation is standard for JVP assessment." },
{ q: "A pulse deficit (apical rate higher than radial) is commonly seen in:", o: ["Sinus rhythm", "Atrial fibrillation", "Sinus bradycardia", "Hypothermia only"], a: 1, r: "Some irregular beats are too weak to reach the periphery." },
{ q: "Which laboratory test supports a recent streptococcal infection related to rheumatic fever?", o: ["Troponin", "ASO titer", "BNP", "Lipase"], a: 1, r: "Antistreptolysin O antibodies indicate recent group A strep infection." },
{ q: "Which test is most useful to evaluate valve structure and ejection fraction non-invasively?", o: ["Echocardiography", "Holter monitoring", "Chest X-ray", "Stress test"], a: 0, r: "Echo visualizes valves, chambers and EF." },
{ q: "After transesophageal echocardiography, the nurse should:", o: ["Give water immediately", "Withhold food and fluids until the gag reflex returns", "Keep the patient flat for 12 hours", "Apply pressure to the groin"], a: 1, p: true, r: "Throat anesthesia increases aspiration risk." },
{ q: "Before cardiac catheterization, the nurse should assess for: (Select all that apply.)", o: ["Allergy to iodine/contrast", "Renal function (creatinine)", "Baseline distal pulses", "Use of metformin", "Hearing acuity"], a: [0, 1, 2, 3], s: true, r: "Contrast can cause allergy and nephropathy; metformin may be held; pulses provide a baseline." },
{ q: "After femoral cardiac catheterization, the patient's dressing becomes saturated with blood. The FIRST action is to:", o: ["Change the dressing", "Apply firm pressure above the puncture site", "Elevate the head of bed 90°", "Ambulate the patient"], a: 1, p: true, r: "Direct pressure controls arterial bleeding; then notify the provider." },
{ q: "Which instruction is correct after femoral catheterization?", o: ["Bend the affected leg frequently", "Keep the affected leg straight for the prescribed time", "Walk immediately", "Restrict fluids"], a: 1, r: "Flexion may dislodge the clot and cause bleeding." },
{ q: "A patient after cardiac catheterization reports severe back pain and becomes hypotensive. The nurse suspects:", o: ["Retroperitoneal bleeding", "Muscle strain", "Kidney stone", "Anxiety"], a: 0, p: true, r: "Bleeding into the retroperitoneum causes back/flank pain and shock." },
{ q: "A patient wearing a Holter monitor should be instructed to:", o: ["Shower normally", "Keep a diary of activities and symptoms", "Stay in bed", "Remove it at night"], a: 1, r: "Correlating symptoms with the ECG is the purpose of the test." },
{ q: "Normal left ventricular ejection fraction is approximately:", o: ["10–20%", "55–70%", "90–100%", "30–35%"], a: 1, r: "EF below ~40% indicates systolic dysfunction." },
{ q: "Which lab test is elevated in heart failure?", o: ["BNP", "Amylase", "TSH", "Uric acid"], a: 0, r: "Brain natriuretic peptide rises with ventricular stretch." },
{ q: "A murmur is caused by:", o: ["Normal valve closure", "Turbulent blood flow", "Pericardial inflammation", "Lung sounds"], a: 1, r: "Turbulence through abnormal valves or openings produces murmurs." },
{ q: "Which electrolytes are particularly important to monitor in cardiac patients? (Select all that apply.)", o: ["Potassium", "Magnesium", "Calcium", "Sodium", "Amylase"], a: [0, 1, 2, 3], s: true, r: "Electrolyte imbalances cause dysrhythmias and affect fluid balance." },
{ q: "Normal capillary refill time is:", o: ["Less than 3 seconds", "5–10 seconds", "More than 10 seconds", "Exactly 6 seconds"], a: 0, r: "Delayed refill suggests poor peripheral perfusion." },
{ q: "Pitting edema that leaves an 8 mm indentation is graded as:", o: ["1+", "2+", "3+", "4+"], a: 3, r: "4+ is the deepest (≈8 mm) pitting edema." },
{ q: "Which question best assesses chest pain using PQRST?", o: ["\"Do you smoke?\"", "\"Where is the pain, and does it spread anywhere?\"", "\"Do you exercise?\"", "\"What did you eat?\""], a: 1, r: "Region/radiation is a PQRST component." }
]
});

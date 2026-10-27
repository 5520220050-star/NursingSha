NS.reg("adult", { cardio: {
summary: {
  en: "Valve questions become easy with one rule: **stenosis = the valve cannot open fully** (pressure overload behind it), **regurgitation = the valve cannot close fully** (blood leaks backward, volume overload). Then ask: *which chamber is upstream, and where does the extra blood back up?*",
  ar: "أسئلة الصمامات تسهل بقاعدة واحدة: **التضيق = الصمام لا ينفتح كاملاً** (زيادة الضغط خلفه)، و**القلس/الارتجاع = الصمام لا ينغلق كاملاً** (رجوع الدم وزيادة الحجم). ثم اسأل: *أي حجرة قبله، وإلى أين يرتد الدم؟*"
},
sections: [
{ h: { en: "Cardiovascular assessment & diagnostic tests", ar: "تقييم القلب والفحوصات" }, b: [
  { t: "svg", svg: '<svg viewBox="0 0 340 250" role="img" aria-label="Heart chambers and valves"><text x="95" y="18" class="d-ts d-mid">From body (deoxygenated)</text><text x="245" y="18" class="d-ts d-mid">From lungs (oxygenated)</text><rect x="40" y="28" width="110" height="70" rx="14" class="d-box"/><rect x="190" y="28" width="110" height="70" rx="14" class="d-red"/><rect x="40" y="128" width="110" height="80" rx="14" class="d-box"/><rect x="190" y="128" width="110" height="80" rx="14" class="d-red"/><text x="95" y="68" class="d-t d-mid">Right atrium</text><text x="245" y="68" class="d-t d-mid">Left atrium</text><text x="95" y="172" class="d-t d-mid">Right ventricle</text><text x="245" y="172" class="d-t d-mid">Left ventricle</text><rect x="70" y="106" width="50" height="14" rx="4" class="d-gold"/><rect x="220" y="106" width="50" height="14" rx="4" class="d-gold"/><text x="95" y="117" class="d-ts d-mid" style="font-size:10px">Tricuspid</text><text x="245" y="117" class="d-ts d-mid" style="font-size:10px">Mitral</text><rect x="70" y="214" width="50" height="14" rx="4" class="d-gold"/><rect x="220" y="214" width="50" height="14" rx="4" class="d-gold"/><text x="95" y="225" class="d-ts d-mid" style="font-size:10px">Pulmonic</text><text x="245" y="225" class="d-ts d-mid" style="font-size:10px">Aortic</text><text x="95" y="244" class="d-ts d-mid">→ to lungs</text><text x="245" y="244" class="d-ts d-mid">→ to body</text><line x1="170" y1="30" x2="170" y2="208" class="d-ln" stroke-dasharray="4 4"/><text x="170" y="120" class="d-ts d-mid" transform="rotate(-90 170 120)">septum</text></svg>',
    en: "Atrioventricular valves (tricuspid, mitral) close at S1; semilunar valves (pulmonic, aortic) close at S2", ar: "الصمامات الأذينية البطينية تنغلق مع الصوت الأول، والهلالية مع الصوت الثاني" },
  { t: "cards", items: [
    { i: "alert", en: "Chest pain", ar: "ألم الصدر" },
    { i: "lungs", en: "Dyspnea, orthopnea, PND", d: "Left-sided failure / pulmonary congestion", ar: "ضيق نفس، ضيق عند الاستلقاء، نوبات ليلية" },
    { i: "heart", en: "Palpitations", d: "Often atrial fibrillation", ar: "خفقان — غالباً رجفان أذيني" },
    { i: "drop", en: "Edema, weight gain", d: "Right-sided failure / fluid retention", ar: "وذمة وزيادة وزن" },
    { i: "x", en: "Syncope, fatigue", ar: "إغماء وتعب" },
    { i: "hand", en: "Cyanosis & clubbing", d: "Chronic hypoxemia (cyanotic defects)", ar: "زرقة وتعجّر الأصابع" } ] },
  { t: "table", h: ["Test", "Purpose / nursing point"], r: [
    ["**Echocardiogram**", "**Key test for valve disease & congenital defects** — size, function, gradients, EF. TEE: NPO before; after, **nothing by mouth until gag reflex returns**"],
    ["**ECG**", "Rhythm (AF), chamber hypertrophy"],
    ["**Chest X-ray**", "Heart size, pulmonary congestion"],
    ["**Cardiac catheterization**", "Pressures & gradients; contrast allergy, renal function; after: **keep leg straight**, check site for bleeding and distal pulses"],
    ["**Labs**", "BNP (heart failure), troponin, electrolytes, **INR** for warfarin"]],
    ar: { h: ["الفحص", "الغرض / نقطة تمريضية"], r: [
    ["**تخطيط صدى القلب (الإيكو)**", "**الفحص الأساسي للصمامات والعيوب الخلقية**؛ عبر المريء: صيام قبله، وبعده **لا طعام حتى يعود منعكس البلع**"],
    ["**تخطيط القلب**", "النظم والتضخم"],
    ["**أشعة الصدر**", "حجم القلب واحتقان الرئة"],
    ["**قسطرة القلب**", "حساسية الصبغة، وبعدها **إبقاء الساق مستقيمة** وفحص النزف والنبض"],
    ["**التحاليل**", "BNP، التروبونين، الأملاح، **INR** للوارفارين"]] } }
]},
{ h: { en: "Valvular heart disease: the basics", ar: "أمراض صمامات القلب: الأساسيات" }, b: [
  { t: "compare", cols: [
    { h: { en: "Stenosis", ar: "التضيق" }, en: ["Valve leaflets stiff/fused → **can't open fully**", "Forward flow obstructed", "Chamber **behind** the valve works harder → hypertrophy/dilation"], ar: ["الشرفات متصلبة أو ملتحمة ← **لا ينفتح كاملاً**", "إعاقة الجريان للأمام", "الحجرة **قبل** الصمام تعمل أكثر ← تضخم"] },
    { h: { en: "Regurgitation (insufficiency)", ar: "القلس (القصور)" }, en: ["Valve **can't close fully**", "Blood leaks **backward**", "Volume overload → chambers dilate"], ar: ["الصمام **لا ينغلق كاملاً**", "الدم **يرجع للخلف**", "زيادة الحجم ← توسع الحجرات"] } ] },
  { t: "p", en: "In Iraq and other developing countries the most important cause of mitral valve disease is **rheumatic heart disease** — an autoimmune sequel of untreated **group A β-hemolytic streptococcal pharyngitis**. Prevent it by treating strep throat fully; patients with rheumatic fever receive long-term penicillin prophylaxis.",
    ar: "في العراق والدول النامية أهم سبب لأمراض الصمام التاجي هو **الحمى الروماتيزمية القلبية** — مضاعفة مناعية لالتهاب البلعوم **بالمكورات العقدية المجموعة أ** غير المعالج. الوقاية بعلاج التهاب البلعوم كاملاً، ومرضى الحمى الروماتيزمية يأخذون البنسلين الوقائي لفترة طويلة." }
]},
{ h: { en: "Mitral stenosis & mitral regurgitation", ar: "تضيق وقلس الصمام التاجي" }, b: [
  { t: "flow", h: true, steps: [
    { en: "Narrow mitral valve", ar: "صمام تاجي ضيق" },
    { en: "Left atrium can't empty → **LA enlarges** (→ AF, clots)", ar: "الأذين الأيسر لا يفرغ ← **يتضخم** (رجفان وخثرات)" },
    { en: "Pressure backs up into lungs → **pulmonary congestion**", ar: "ارتداد الضغط للرئتين ← **احتقان رئوي**" },
    { en: "Pulmonary hypertension → **right ventricular failure**", ar: "ارتفاع ضغط الشريان الرئوي ← **فشل البطين الأيمن**" } ] },
  { t: "table", h: ["", "Mitral stenosis (MS)", "Mitral regurgitation (MR)"], r: [
    ["Common causes", "**Rheumatic heart disease** (most common)", "Rheumatic, **mitral valve prolapse**, MI with papillary-muscle rupture, endocarditis"],
    ["First / key symptom", "**Dyspnea on exertion** (earliest), fatigue, orthopnea, **hemoptysis**, cough", "Fatigue, dyspnea, palpitations; acute MR → sudden pulmonary edema"],
    ["Murmur", "**Low-pitched, rumbling diastolic** murmur at apex", "**Holosystolic (pansystolic)** blowing murmur at apex, **radiates to the axilla**"],
    ["Rhythm", "**Atrial fibrillation** common → emboli/stroke", "Atrial fibrillation"],
    ["Other", "Malar flush; right HF signs late (JVD, edema, hepatomegaly)", "S3, displaced apex beat"],
    ["Procedures", "**Balloon valvuloplasty**, commissurotomy, replacement", "Repair (preferred) or replacement"]],
    ar: { h: ["", "تضيق التاجي", "قلس التاجي"], r: [
    ["الأسباب", "**الحمى الروماتيزمية** (الأشيع)", "روماتيزمية، **تدلي الصمام**، احتشاء مع تمزق العضلة الحليمية"],
    ["العرض الأول", "**ضيق نفس مع الجهد** (الأبكر)، تعب، **نفث دم**", "تعب، ضيق نفس، خفقان؛ الحاد ← وذمة رئوية مفاجئة"],
    ["النفخة", "**انبساطية منخفضة هادرة** في القمة", "**انقباضية شاملة** في القمة **تنتشر للإبط**"],
    ["النظم", "**رجفان أذيني** شائع ← خثرات وجلطة دماغية", "رجفان أذيني"],
    ["أخرى", "احمرار الوجنتين، فشل أيمن متأخر", "صوت ثالث"],
    ["الإجراءات", "**توسيع بالبالون**، استبدال", "إصلاح أو استبدال"]] } },
  { t: "warn", en: "Atrial fibrillation in mitral disease lets **clots form in the left atrium** → embolic **stroke**. Patients usually need **anticoagulation** (warfarin) and rate control (beta-blockers, digoxin).",
    ar: "الرجفان الأذيني في أمراض التاجي يسمح **بتكون خثرات في الأذين الأيسر** ← **جلطة دماغية**. يحتاج المريض غالباً **مضادات تخثر** (وارفارين) وأدوية لضبط النبض." }
]},
{ h: { en: "Aortic stenosis & aortic regurgitation", ar: "تضيق وقلس الصمام الأبهري" }, b: [
  { t: "mnem", k: "SAD", title: "Classic symptoms of severe aortic stenosis", rows: [
    ["S", "**Syncope** (especially on exertion)", "إغماء مع الجهد"],
    ["A", "**Angina**", "ذبحة صدرية"],
    ["D", "**Dyspnea** (left-sided heart failure)", "ضيق نفس (فشل القلب الأيسر)"] ] },
  { t: "table", h: ["", "Aortic stenosis (AS)", "Aortic regurgitation (AR)"], r: [
    ["Common causes", "**Age-related calcification**, congenital **bicuspid** valve, rheumatic", "Rheumatic, endocarditis, aortic root dilation (Marfan, hypertension, syphilis)"],
    ["Effect", "LV must push through a narrow valve → **LV hypertrophy**", "Blood falls back into LV in diastole → **LV dilation**"],
    ["Murmur", "**Systolic crescendo–decrescendo** at right 2nd ICS, **radiates to the carotids**", "**Diastolic, high-pitched, blowing decrescendo** at left sternal border"],
    ["Pulse / BP", "Weak, delayed pulse; **narrow pulse pressure**", "**Wide pulse pressure**, **bounding \"water-hammer\" pulse**, head bobbing"],
    ["Symptoms", "Angina, syncope, dyspnea", "Palpitations, pounding heartbeat, dyspnea, fatigue"],
    ["Procedures", "Aortic valve replacement, **TAVR/TAVI**, balloon valvuloplasty (temporary)", "Valve replacement"]],
    ar: { h: ["", "تضيق الأبهري", "قلس الأبهري"], r: [
    ["الأسباب", "**تكلس العمر**، **صمام ثنائي الشرف** خلقي، روماتيزمي", "روماتيزمي، التهاب الشغاف، توسع جذر الأبهر"],
    ["التأثير", "البطين يدفع عبر صمام ضيق ← **تضخم البطين الأيسر**", "الدم يرجع للبطين ← **توسعه**"],
    ["النفخة", "**انقباضية متصاعدة متناقصة** في المسافة الضلعية الثانية يميناً **تنتشر للسباتي**", "**انبساطية عالية نافخة** عند الحافة اليسرى للقص"],
    ["النبض والضغط", "نبض ضعيف متأخر، **فرق نبضي ضيق**", "**فرق نبضي واسع**، **نبض المطرقة المائية**، اهتزاز الرأس"],
    ["الأعراض", "ذبحة، إغماء، ضيق نفس", "خفقان، ضيق نفس، تعب"],
    ["الإجراءات", "استبدال الصمام، **عبر القسطرة (TAVI)**", "استبدال الصمام"]] } },
  { t: "tip", en: "In **aortic stenosis** cardiac output depends on adequate preload. Be cautious with **nitrates, vasodilators, diuretics and dehydration** (they can cause severe hypotension & syncope), and avoid strenuous exertion.",
    ar: "في **تضيق الأبهري** يعتمد نتاج القلب على الحمل المسبق الكافي. احذر من **النترات وموسعات الأوعية والمدرات والجفاف** (قد تسبب هبوطاً شديداً وإغماءً)، وتجنب الجهد الشديد." }
]},
{ h: { en: "Managing valve disease & valve replacement", ar: "علاج أمراض الصمامات واستبدالها" }, b: [
  { t: "compare", cols: [
    { h: { en: "Mechanical valve", ar: "صمام ميكانيكي" }, en: ["Very **durable** (decades)", "**Lifelong anticoagulation (warfarin)** — target INR higher (often ~2.5–3.5)", "Audible clicking", "Preferred in younger patients"], ar: ["**متين جداً** لعقود", "**وارفارين مدى الحياة** مع INR أعلى", "صوت نقر مسموع", "يُفضل للأصغر سناً"] },
    { h: { en: "Biological (tissue) valve", ar: "صمام حيوي (نسيجي)" }, en: ["Porcine/bovine/human tissue", "**No lifelong anticoagulation** usually", "Wears out in ~10–15 years", "Preferred in older adults & women planning pregnancy"], ar: ["من نسيج خنزيري أو بقري أو بشري", "**لا يحتاج مضاد تخثر مدى الحياة** غالباً", "يتلف خلال 10–15 سنة", "يُفضل لكبار السن والنساء المخططات للحمل"] } ] },
  { t: "list", en: [
    "Medical management: diuretics & **low-sodium diet** (congestion), beta-blockers/digoxin (rate control in AF), anticoagulants, activity pacing with rest periods",
    "**Daily weight** (same time, scale, clothing); report gain of ~1–2 kg in a day or ~2 kg in a week",
    "**Warfarin teaching**: regular **INR** tests; keep **vitamin K intake consistent** (green leafy vegetables) rather than avoiding it; soft toothbrush, electric razor; report bleeding; antidote = **vitamin K**",
    "**Infective endocarditis prevention**: excellent oral hygiene, regular dental care; **antibiotic prophylaxis before dental procedures** for patients with prosthetic valves or previous endocarditis",
    "Teach signs of endocarditis: fever, new murmur, fatigue, splinter hemorrhages, Osler nodes, Janeway lesions"],
    ar: [
    "العلاج الدوائي: مدرات و**تقليل الملح**، حاصرات بيتا أو الديجوكسين لضبط النبض، مضادات تخثر، والتوازن بين النشاط والراحة",
    "**الوزن اليومي** بنفس الوقت والميزان، والإبلاغ عن زيادة 1–2 كغم يومياً أو 2 كغم أسبوعياً",
    "**تعليم الوارفارين**: فحص **INR** بانتظام، **ثبات كمية فيتامين K** في الطعام لا منعه، فرشاة ناعمة، ماكينة كهربائية، الإبلاغ عن النزف، والترياق **فيتامين K**",
    "**الوقاية من التهاب الشغاف**: نظافة الفم ومراجعة الأسنان، و**مضاد حيوي وقائي قبل إجراءات الأسنان** لحاملي الصمامات الصناعية",
    "علامات التهاب الشغاف: حمى، نفخة جديدة، تعب، نزوف شظوية تحت الأظافر، عقد أوسلر"] }
]},
{ h: { en: "Congenital heart disease: ASD, VSD & Tetralogy of Fallot", ar: "أمراض القلب الخلقية: الفتحة الأذينية والبطينية ورباعية فالو" }, b: [
  { t: "compare", cols: [
    { h: { en: "Acyanotic — left-to-right shunt", ar: "غير مزرقة — تحويلة من اليسار لليمين" }, en: ["Oxygenated blood goes back to the lungs", "**↑ pulmonary blood flow**", "Examples: **ASD, VSD**, PDA", "Risk: pulmonary hypertension, heart failure"], ar: ["الدم المؤكسج يعود للرئتين", "**زيادة الجريان الرئوي**", "أمثلة: **الفتحة الأذينية والبطينية**", "الخطر: ارتفاع ضغط الشريان الرئوي وفشل القلب"] },
    { h: { en: "Cyanotic — right-to-left shunt", ar: "مزرقة — تحويلة من اليمين لليسار" }, en: ["Deoxygenated blood enters the systemic circulation", "**Cyanosis**, clubbing, **polycythemia**", "Example: **Tetralogy of Fallot**", "Risk: hypoxic spells, emboli, brain abscess"], ar: ["دم غير مؤكسج يدخل الدورة العامة", "**زرقة**، تعجّر، **كثرة كريات الدم الحمر**", "مثال: **رباعية فالو**", "الخطر: نوبات نقص الأكسجة، خثرات، خراج الدماغ"] } ] },
  { t: "table", h: ["Defect", "Key features"], r: [
    ["**ASD** (atrial septal defect)", "Opening between the atria; L→R; often **asymptomatic until adulthood**; **fixed split S2**; atrial arrhythmias; risk of paradoxical embolism (stroke). Closure by catheter device or surgery"],
    ["**VSD** (ventricular septal defect)", "**Most common congenital heart defect**; opening between ventricles; **loud holosystolic murmur at left lower sternal border**; small ones may close spontaneously; large → HF, pulmonary hypertension"],
    ["**Eisenmenger syndrome**", "Long-standing L→R shunt → severe pulmonary hypertension → **shunt reverses (R→L)** → late cyanosis"],
    ["**Tetralogy of Fallot**", "Four defects (see mnemonic); cyanotic; **hypercyanotic \"tet\" spells**; repaired surgically in infancy; adults after repair need follow-up for pulmonary regurgitation & arrhythmias"]],
    ar: { h: ["العيب", "الملامح"], r: [
    ["**الفتحة بين الأذينين**", "تحويلة يسار←يمين، غالباً **بدون أعراض حتى البلوغ**، **انشطار ثابت للصوت الثاني**، اضطرابات نظم، وخطر جلطة متناقضة"],
    ["**الفتحة بين البطينين**", "**أشيع عيب خلقي**، **نفخة انقباضية شاملة عالية عند الحافة اليسرى السفلى للقص**، الصغيرة قد تنغلق ذاتياً"],
    ["**متلازمة آيزنمنغر**", "تحويلة طويلة ← ارتفاع ضغط رئوي ← **انقلاب التحويلة** ← زرقة متأخرة"],
    ["**رباعية فالو**", "أربعة عيوب، مزرقة، **نوبات زرقة شديدة**، تُصلح جراحياً في الطفولة"]] } },
  { t: "mnem", k: "PROV", title: "Tetralogy of Fallot", rows: [
    ["P", "**Pulmonary stenosis** (right ventricular outflow obstruction)", "تضيق الصمام أو مخرج الشريان الرئوي"],
    ["R", "**Right ventricular hypertrophy**", "تضخم البطين الأيمن"],
    ["O", "**Overriding aorta** (sits over the VSD)", "الأبهر الراكب فوق الفتحة"],
    ["V", "**Ventricular septal defect**", "فتحة بين البطينين"] ] },
  { t: "tip", en: "During a hypercyanotic (tet) spell: **knee-chest position** (children instinctively **squat**) to increase systemic resistance and push blood to the lungs, give **oxygen**, keep calm; morphine and IV fluids as ordered.",
    ar: "أثناء نوبة الزرقة: **وضعية الركبة للصدر** (الأطفال **يقرفصون** تلقائياً) لزيادة المقاومة الجهازية ودفع الدم للرئتين، **أكسجين**، تهدئة، والمورفين والسوائل حسب الطلب." }
]}
],
questions: [
{ q: "A patient with a history of rheumatic fever reports increasing shortness of breath on exertion and has a low-pitched diastolic rumbling murmur at the apex. The nurse suspects:", o: ["Aortic stenosis", "Mitral stenosis", "Mitral regurgitation", "Aortic regurgitation"], a: 1, r: "Mitral stenosis, most often due to rheumatic heart disease, produces a low-pitched rumbling diastolic murmur at the apex and early exertional dyspnea from pulmonary congestion." },
{ q: "Which is usually the EARLIEST symptom of mitral stenosis?", o: ["Peripheral edema", "Dyspnea on exertion", "Ascites", "Syncope"], a: 1, r: "As the left atrium cannot empty, pressure backs into the lungs; exertional dyspnea is typically the first symptom. Edema and ascites are late signs of right-sided failure." },
{ q: "A patient with mitral stenosis develops atrial fibrillation. Which complication is the nurse most concerned about?", o: ["Hypoglycemia", "Embolic stroke", "Hyperkalemia", "Pneumothorax"], a: 1, r: "Stasis of blood in an enlarged left atrium during AF promotes thrombus formation, which can embolize to the brain. Anticoagulation is usually required." },
{ q: "Which murmur is characteristic of mitral regurgitation?", o: ["Diastolic rumble at the apex", "Holosystolic murmur at the apex radiating to the axilla", "Systolic crescendo–decrescendo radiating to the neck", "Diastolic decrescendo at left sternal border"], a: 1, r: "In mitral regurgitation, blood leaks back into the left atrium throughout systole, producing a holosystolic blowing murmur at the apex that radiates to the left axilla." },
{ q: "A patient 3 days after a large MI suddenly develops severe dyspnea, pink frothy sputum and a new loud holosystolic murmur at the apex. The nurse suspects:", o: ["Pericarditis", "Acute mitral regurgitation from papillary muscle rupture", "Aortic stenosis", "Pulmonary embolism without murmur"], a: 1, r: "Papillary muscle rupture after MI causes acute mitral regurgitation and sudden pulmonary edema with a new holosystolic murmur — a surgical emergency." },
{ q: "Which symptoms form the classic triad of severe aortic stenosis? (Select all that apply.)", o: ["Angina", "Syncope", "Dyspnea", "Hemoptysis", "Bounding pulses", "Head bobbing"], a: [0, 1, 2], s: true, r: "Severe aortic stenosis causes angina, syncope (especially with exertion) and dyspnea from heart failure. Bounding pulses and head bobbing are signs of aortic regurgitation." },
{ q: "Where is the murmur of aortic stenosis best heard?", o: ["Apex, radiating to axilla", "Right second intercostal space, radiating to carotids", "Left lower sternal border", "Epigastrium"], a: 1, r: "The aortic area is the right second intercostal space; the harsh systolic crescendo–decrescendo murmur of aortic stenosis radiates to the carotid arteries." },
{ q: "A patient with severe aortic stenosis has chest pain. Which prescription should the nurse question?", o: ["Oxygen", "Large dose of sublingual nitroglycerin with a vasodilator infusion", "12-lead ECG", "Bed rest"], a: 1, r: "Patients with severe aortic stenosis depend on preload; aggressive vasodilation can cause profound hypotension and syncope. Nitrates and vasodilators are used cautiously, if at all." },
{ q: "Which assessment finding is expected with aortic regurgitation?", o: ["Narrow pulse pressure", "Wide pulse pressure with bounding (water-hammer) pulse", "Fixed split S2", "Pulsus paradoxus only"], a: 1, r: "In aortic regurgitation, blood falls back into the LV during diastole, so diastolic pressure drops and stroke volume rises, causing a wide pulse pressure and bounding pulse." },
{ q: "BP 168/48 mmHg is recorded in a patient with a valve disorder. This pattern is most consistent with:", o: ["Aortic stenosis", "Aortic regurgitation", "Mitral stenosis", "Tricuspid stenosis"], a: 1, r: "A pulse pressure of 120 mmHg (wide) with low diastolic pressure is typical of aortic regurgitation." },
{ q: "Which is the most common cause of aortic stenosis in older adults?", o: ["Rheumatic fever", "Age-related calcification of the valve", "Endocarditis", "Marfan syndrome"], a: 1, r: "Degenerative calcification is the leading cause of aortic stenosis in older adults; congenital bicuspid valves cause earlier presentation." },
{ q: "Which test is most important for diagnosing and grading valvular heart disease?", o: ["Chest X-ray", "Echocardiogram", "Troponin", "Exercise ECG"], a: 1, r: "Echocardiography visualizes valve structure and motion and measures gradients, valve area and ventricular function." },
{ q: "After a transesophageal echocardiogram, which action is the priority before giving fluids?", o: ["Check blood glucose", "Confirm that the gag reflex has returned", "Measure urine output", "Ambulate the patient"], a: 1, p: true, r: "The throat is anesthetized for TEE. Oral intake is withheld until the gag reflex returns to prevent aspiration." },
{ q: "A 30-year-old woman who plans to become pregnant needs a valve replacement. Which statement reflects the usual rationale for a biological valve?", o: ["It lasts longer than a mechanical valve", "It usually does not require lifelong anticoagulation", "It makes a clicking sound", "It never needs replacement"], a: 1, r: "Tissue valves usually avoid lifelong warfarin, which is teratogenic, but they wear out after about 10–15 years." },
{ q: "A patient with a mechanical mitral valve takes warfarin. Which statement shows correct understanding?", o: ["\"I will stop eating all green vegetables.\"", "\"I will keep my intake of vitamin K–rich foods consistent.\"", "\"I can take aspirin for headaches whenever I like.\"", "\"I only need INR tests for the first month.\""], a: 1, r: "Consistent vitamin K intake keeps the INR stable. Patients need regular INR checks for life and should avoid unprescribed aspirin/NSAIDs that increase bleeding." },
{ q: "A patient on warfarin has an INR of 6.2 and bleeding gums. Which medication should the nurse anticipate?", o: ["Protamine sulfate", "Vitamin K (phytonadione)", "Heparin", "Aspirin"], a: 1, r: "Vitamin K reverses warfarin. Protamine sulfate reverses heparin." },
{ q: "Which patient teaching is most important for a patient with a prosthetic heart valve before dental extraction?", o: ["Stop all medications 1 week before", "Inform the dentist; prophylactic antibiotics are recommended", "No special precautions are needed", "Eat a high-protein diet"], a: 1, r: "Patients with prosthetic valves are at high risk of infective endocarditis; antibiotic prophylaxis is recommended before dental procedures that manipulate gingival tissue." },
{ q: "Which findings suggest infective endocarditis in a patient with valve disease? (Select all that apply.)", o: ["Fever", "New or changed murmur", "Splinter hemorrhages under the nails", "Bradycardia only", "Painful nodules on finger pads (Osler nodes)", "Weight gain"], a: [0, 1, 2, 4], s: true, r: "Endocarditis presents with fever, new or changing murmurs, splinter hemorrhages, Osler nodes and Janeway lesions, plus fatigue and possible emboli." },
{ q: "What is the most important preventive strategy against rheumatic heart disease?", o: ["Annual chest X-rays", "Prompt full treatment of streptococcal pharyngitis", "Low-sodium diet", "Daily aspirin"], a: 1, r: "Rheumatic heart disease follows untreated group A streptococcal throat infection. Complete antibiotic treatment of strep throat prevents rheumatic fever and valve damage." },
{ q: "A patient with mitral stenosis is being discharged. Which instruction is appropriate?", o: ["Avoid all activity", "Plan rest periods between activities and follow a low-sodium diet", "Increase fluid intake to 4 L/day", "Weigh yourself once a month"], a: 1, r: "Pacing activities, a low-sodium diet and daily weights help manage congestion and fatigue. Excess fluid and infrequent weighing would worsen or miss fluid overload." },
{ q: "A patient with valvular disease gained 1.5 kg since yesterday and has new crackles. What should the nurse do first?", o: ["Encourage more fluids", "Assess respiratory status and notify the provider", "Ignore weight changes under 2 kg", "Ambulate the patient"], a: 1, p: true, r: "Rapid weight gain with crackles indicates fluid retention and pulmonary congestion; the nurse assesses breathing, oxygenation and notifies the provider for diuretic adjustment." },
{ q: "Which heart sound is produced by closure of the mitral and tricuspid valves?", o: ["S1", "S2", "S3", "S4"], a: 0, r: "S1 ('lub') marks closure of the atrioventricular valves at the start of systole. S2 marks closure of the aortic and pulmonic valves." },
{ q: "Which congenital defect is the most common?", o: ["Atrial septal defect", "Ventricular septal defect", "Tetralogy of Fallot", "Coarctation of the aorta"], a: 1, r: "Ventricular septal defect is the most common congenital heart defect." },
{ q: "A 35-year-old is diagnosed with an atrial septal defect after palpitations. Which auscultation finding is classic?", o: ["Fixed split S2", "Diastolic rumble", "S4 gallop", "Pericardial friction rub"], a: 0, r: "In ASD, increased right-sided volume delays pulmonic valve closure regardless of respiration, producing a fixed split S2." },
{ q: "Why may a patient with an ASD have a stroke without a history of AF?", o: ["Hypercalcemia", "Paradoxical embolism through the septal defect", "High cholesterol only", "Anemia"], a: 1, r: "A venous clot can cross the atrial defect into the left heart and travel to the brain — a paradoxical embolism." },
{ q: "Which murmur is typical of a ventricular septal defect?", o: ["Holosystolic murmur at the left lower sternal border", "Diastolic murmur at the apex", "Continuous machinery murmur", "Ejection click only"], a: 0, r: "Blood flows from the high-pressure LV to the RV throughout systole, producing a harsh holosystolic murmur at the left lower sternal border." },
{ q: "An adult with an uncorrected large VSD has become cyanotic. The nurse understands this is due to:", o: ["Closure of the VSD", "Eisenmenger syndrome with reversal of the shunt to right-to-left", "Anemia", "Hypothermia"], a: 1, r: "Long-standing left-to-right shunting causes pulmonary hypertension; when right pressures exceed left, the shunt reverses and cyanosis appears (Eisenmenger syndrome)." },
{ q: "Which defects make up Tetralogy of Fallot? (Select all that apply.)", o: ["Pulmonary stenosis", "Right ventricular hypertrophy", "Overriding aorta", "Ventricular septal defect", "Atrial septal defect", "Mitral stenosis"], a: [0, 1, 2, 3], s: true, r: "Tetralogy of Fallot = pulmonary stenosis, right ventricular hypertrophy, overriding aorta and VSD (mnemonic PROV)." },
{ q: "A child with uncorrected Tetralogy of Fallot becomes suddenly more cyanotic and irritable. What should the nurse do FIRST?", o: ["Place the child in the knee-chest position", "Lay the child flat", "Give oral fluids rapidly", "Start chest compressions"], a: 0, p: true, r: "The knee-chest position increases systemic vascular resistance, reducing right-to-left shunting and increasing pulmonary blood flow. Oxygen and morphine follow as ordered." },
{ q: "Which laboratory finding is expected in a patient with chronic cyanotic heart disease?", o: ["Polycythemia (elevated hematocrit)", "Low hematocrit", "Hypoglycemia", "Thrombocytosis only"], a: 0, r: "Chronic hypoxemia stimulates erythropoietin, raising red cell mass. Polycythemia increases blood viscosity and the risk of thrombosis." },
{ q: "Which defects cause a left-to-right shunt and increased pulmonary blood flow? (Select all that apply.)", o: ["Atrial septal defect", "Ventricular septal defect", "Patent ductus arteriosus", "Tetralogy of Fallot", "Tricuspid atresia"], a: [0, 1, 2], s: true, r: "ASD, VSD and PDA are acyanotic defects with left-to-right shunts that increase pulmonary blood flow. Tetralogy of Fallot and tricuspid atresia are cyanotic." },
{ q: "After cardiac catheterization via the right femoral artery, which finding requires immediate action?", o: ["Patient wants to eat", "Expanding hematoma at the groin and a weak right pedal pulse", "Mild soreness at the site", "Urine output 60 mL/hour"], a: 1, p: true, r: "An expanding hematoma and diminished distal pulse indicate bleeding and arterial compromise. The nurse applies pressure and notifies the provider immediately." },
{ q: "In aortic regurgitation, the murmur is described as:", o: ["Low rumbling diastolic at the apex", "High-pitched blowing diastolic decrescendo along the left sternal border", "Holosystolic radiating to axilla", "Systolic ejection radiating to carotids"], a: 1, r: "Backflow from the aorta into the LV during diastole produces a high-pitched, blowing, decrescendo diastolic murmur at the left sternal border." },
{ q: "Which complication is associated with long-standing mitral stenosis?", o: ["Left ventricular hypertrophy as the first change", "Pulmonary hypertension and right-sided heart failure", "Aortic dissection", "Hypothyroidism"], a: 1, r: "Back-pressure from the left atrium raises pulmonary pressures, eventually causing right ventricular failure." },
{ q: "A patient with mitral stenosis coughs up blood-streaked sputum. The nurse understands this is caused by:", o: ["Lung cancer always", "Rupture of congested pulmonary/bronchial veins from high left atrial pressure", "Tuberculosis only", "Warfarin overdose only"], a: 1, r: "Elevated left atrial and pulmonary venous pressure can rupture small bronchial veins, causing hemoptysis in mitral stenosis." },
{ q: "Which drug is used mainly to control ventricular rate in a patient with valve disease and atrial fibrillation?", o: ["Digoxin or a beta-blocker", "Furosemide only", "Warfarin", "Nitroglycerin"], a: 0, r: "Beta-blockers, calcium channel blockers and digoxin slow AV conduction to control the ventricular rate. Warfarin prevents clots but does not control rate." },
{ q: "Before giving digoxin to a patient with valvular heart disease, the nurse should first:", o: ["Check the apical pulse for 1 full minute", "Take a temperature", "Assess bowel sounds", "Weigh the patient"], a: 0, r: "Digoxin slows the heart; the apical pulse is counted for a full minute and the dose held per protocol (commonly if <60/min in adults). Potassium levels are also checked." },
{ q: "Which patient is MOST at risk of developing aortic regurgitation?", o: ["A patient with Marfan syndrome and a dilated aortic root", "A patient with hypothyroidism", "A patient with asthma", "A patient with hypokalemia"], a: 0, r: "Dilation of the aortic root, as in Marfan syndrome, pulls the valve leaflets apart so they cannot close, causing regurgitation." },
{ q: "A patient asks why he must take penicillin monthly after rheumatic fever. The nurse explains it:", o: ["Treats existing valve damage", "Prevents recurrent streptococcal infection and further valve damage", "Lowers cholesterol", "Replaces anticoagulation"], a: 1, r: "Secondary prophylaxis with long-acting penicillin prevents recurrent streptococcal infections and repeated rheumatic attacks that worsen valve damage." },
{ q: "After valve replacement surgery, which finding should be reported immediately?", o: ["Incisional pain controlled with analgesics", "Sudden onset of slurred speech and arm weakness", "Mild fatigue", "Audible clicking of a mechanical valve"], a: 1, r: "New neurological deficits suggest an embolic stroke from a valve thrombus — an emergency. Clicking of a mechanical valve is normal." }
]
}});

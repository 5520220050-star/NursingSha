NS.reg("adult", "msk", "osteomyelitis", {
intro: {
  en: "**Osteomyelitis** is an infection of the bone (cortex and marrow). It is **difficult to treat** because bone has a limited blood supply, the infection raises pressure inside rigid bone, and dead bone (**sequestrum**) shelters bacteria from antibiotics and immune cells. It may become **chronic** and recur for years. The commonest organism is ***Staphylococcus aureus*** (including MRSA).",
  ar: "**التهاب العظم والنقي** عدوى في العظم (القشرة والنقي). **صعب العلاج** لأن تروية العظم محدودة، والعدوى ترفع الضغط داخل العظم الصلب، والعظم الميت (**الشظية الميتة**) يحمي البكتيريا من المضادات والمناعة. قد يصبح **مزمناً** ويتكرر لسنوات. أشيع جرثومة ***المكورة العنقودية الذهبية*** (منها MRSA)."
},
sections: [
{ h: { en: "Routes of infection and risk factors", ar: "طرق العدوى وعوامل الخطر" }, b: [
  { t: "table", h: ["Route", "Description / examples"], r: [
    ["**Hematogenous** (bloodborne)", "Spread from a distant focus (tonsillitis, boils, infected teeth, UTI, IV drug use); common in **children** (metaphysis of long bones) and in older adults (vertebrae)"],
    ["**Contiguous / direct contamination**", "From **open fractures**, gunshot wounds, **surgery** (internal fixation, joint replacement, pin sites)"],
    ["**Spread from adjacent soft-tissue infection**", "**Diabetic foot ulcers**, pressure injuries, vascular insufficiency — common in older adults"]],
    ar: { h: ["الطريق", "الوصف / أمثلة"], r: [
    ["**عبر الدم**", "من بؤرة بعيدة (اللوزتين، الدمامل، الأسنان، المسالك، حقن المخدرات)؛ شائع عند **الأطفال** وكبار السن (الفقرات)"],
    ["**التلوث المباشر**", "**الكسور المفتوحة** والطلقات و**الجراحة** (التثبيت الداخلي، استبدال المفصل، المسامير)"],
    ["**الامتداد من نسيج مجاور**", "**قرحة القدم السكرية** وقرح الفراش وقصور الأوعية"]] } },
  { t: "list", en: [
    "**Risk factors**: diabetes, poor nutrition, older age, obesity, immunosuppression (steroids, HIV), rheumatoid arthritis, long hospitalization, **orthopedic surgery and prosthetic implants**, peripheral vascular disease, sickle cell disease (Salmonella), IV drug use",
    "**Organisms**: *Staphylococcus aureus* (~70–80%), MRSA, *Streptococcus*, *Pseudomonas* and *E. coli* (gram-negative), *Salmonella* in sickle cell disease, *M. tuberculosis* (spine — Pott's disease)"],
    ar: [
    "**عوامل الخطر**: السكري، سوء التغذية، كبر السن، السمنة، ضعف المناعة، الروماتويد، طول الإقامة، **جراحة العظام والمزروعات**، أمراض الأوعية، فقر الدم المنجلي، حقن المخدرات",
    "**الجراثيم**: *العنقودية الذهبية* (70–80%)، MRSA، العقدية، الزائفة والإشريكية، *السالمونيلا* في المنجلي، *السل* (العمود الفقري)"] }
]},
{ h: { en: "Pathophysiology", ar: "الفيزيولوجيا المرضية" }, b: [
  { t: "flow", steps: [
    { en: "Bacteria lodge in bone → **inflammation**, increased vascularity and **edema**", ar: "استقرار البكتيريا ← **التهاب** وزيادة التروية و**وذمة**" },
    { en: "Pressure rises in the rigid bone → **vessels compressed → thrombosis → ischemia**", ar: "ارتفاع الضغط في العظم الصلب ← **انضغاط الأوعية ← تخثر ← نقص تروية**" },
    { en: "Bone dies → **sequestrum** (dead bone fragment) forms; pus spreads under the periosteum and may form **sinus tracts** to the skin", ar: "موت العظم ← **شظية ميتة**؛ القيح ينتشر تحت السمحاق وقد يكون **نواسير** للجلد" },
    { en: "New bone forms around the dead bone → **involucrum**", ar: "تكوّن عظم جديد حول الميت ← **الغلاف العظمي**" },
    { en: "Sequestrum is avascular → antibiotics cannot reach it → **chronic, recurring infection** unless surgically removed", ar: "الشظية بلا تروية ← لا تصلها المضادات ← **عدوى مزمنة متكررة** ما لم تُزل جراحياً" } ] },
  { t: "compare", cols: [
    { h: { en: "Acute osteomyelitis", ar: "الحاد" }, en: ["Initial infection or < 4 weeks", "Responds to antibiotics if treated early", "Systemic signs prominent"], ar: ["العدوى الأولى أو أقل من 4 أسابيع", "يستجيب للمضادات إذا عولج مبكراً", "علامات جهازية واضحة"] },
    { h: { en: "Chronic osteomyelitis", ar: "المزمن" }, en: ["Infection persisting > 4 weeks or recurring", "Sequestrum, sinus tracts with drainage", "Needs surgery (debridement, sequestrectomy) + long antibiotics", "Risk of pathological fracture, squamous cell carcinoma in sinus (rare)"], ar: ["عدوى أكثر من 4 أسابيع أو متكررة", "شظية ميتة ونواسير بإفرازات", "يحتاج جراحة ومضادات طويلة", "خطر كسر مرضي"] } ] }
]},
{ h: { en: "Clinical manifestations and diagnosis", ar: "المظاهر السريرية والتشخيص" }, b: [
  { t: "cards", items: [
    { i: "thermo", en: "Systemic (acute, hematogenous)", d: "**Sudden high fever, chills**, malaise, tachycardia, nausea", ar: "**حمى عالية مفاجئة وقشعريرة** وتوعك" },
    { i: "alert", en: "Local", d: "**Constant, pulsating bone pain** worsened by movement; **tenderness, swelling, warmth, redness**; limited movement", ar: "**ألم عظمي نابض مستمر** يزداد بالحركة؛ إيلام وتورم ودفء واحمرار" },
    { i: "drop", en: "Contiguous / chronic", d: "Often **no fever**; wound that **will not heal**, **draining sinus**, local pain/swelling", ar: "غالباً **بلا حمى**؛ جرح **لا يلتئم** و**ناسور** يفرز" } ] },
  { t: "table", h: ["Test", "Finding"], r: [
    ["**Blood tests**", "↑ **WBC**, ↑ **ESR**, ↑ **CRP** (also used to monitor response to treatment)"],
    ["**Blood cultures**", "Positive in hematogenous infection — obtain **before antibiotics**"],
    ["**Bone biopsy / wound culture**", "**Definitive** — identifies organism and sensitivity"],
    ["**X-ray**", "Changes appear only after **10–14 days** (bone destruction, periosteal reaction)"],
    ["**MRI**", "Most sensitive early imaging — shows marrow edema"],
    ["**Bone scan (radionuclide)**", "Early detection of increased uptake"],
    ["**CT**", "Shows sequestrum and extent"]],
    ar: { h: ["الفحص", "النتيجة"], r: [
    ["**تحاليل الدم**", "↑ **الكريات البيض** و**ESR** و**CRP**"], ["**زرع الدم**", "إيجابي في العدوى الدموية — **قبل المضادات**"],
    ["**خزعة العظم / زرع الجرح**", "**التشخيص القاطع**"], ["**الأشعة**", "التغيرات بعد **10–14 يوماً**"],
    ["**الرنين**", "الأكثر حساسية مبكراً"], ["**المسح العظمي**", "كشف مبكر"], ["**المقطعية**", "تظهر الشظية الميتة"]] } }
]},
{ h: { en: "Management", ar: "العلاج" }, b: [
  { t: "list", en: [
    "**Prevention is the goal**: aseptic surgery and wound care, prophylactic antibiotics in orthopedic surgery, careful **pin-site care**, prompt treatment of soft-tissue infections, **diabetic foot care**",
    "**Antibiotics**: started after cultures; **IV for 4–6 weeks** (often via a PICC line at home), then oral; give on schedule to maintain blood levels; monitor drug levels (e.g., **vancomycin trough**) and toxicity (kidney, hearing)",
    "**Immobilize** the affected part (splint) to reduce pain and spread; handle gently",
    "**Surgery** (chronic / no response): **debridement and sequestrectomy** (removal of dead bone), **antibiotic-impregnated beads or cement**, closed suction-irrigation, bone grafts, muscle flaps; removal of infected hardware/prosthesis; **amputation** in extreme cases",
    "**Hyperbaric oxygen therapy** — promotes healing in some chronic cases",
    "**Nutrition**: high-protein, high-calorie, vitamin C and D, calcium"],
    ar: [
    "**الوقاية هي الهدف**: جراحة وعناية معقمة، مضادات وقائية، **العناية بالمسامير**، علاج عدوى الأنسجة مبكراً، **العناية بالقدم السكرية**",
    "**المضادات**: بعد الزرع؛ **وريدياً 4–6 أسابيع** ثم فموياً؛ في مواعيدها؛ مراقبة المستويات (**الفانكومايسين**) والسمية (الكلى والسمع)",
    "**تثبيت** الجزء المصاب بجبيرة والتعامل بلطف",
    "**الجراحة**: **التنظيف وإزالة الشظية الميتة** و**خرز المضاد الحيوي** والري والطعوم؛ إزالة المزروعات المصابة؛ **البتر** نادراً",
    "**الأكسجين عالي الضغط** في بعض الحالات المزمنة",
    "**التغذية**: بروتين وسعرات عالية وفيتامين C وD والكالسيوم"] },
  { t: "table", h: ["Nursing diagnosis", "Interventions"], r: [
    ["**Acute pain** r/t inflammation and swelling", "Immobilize/splint, **elevate**, handle gently, analgesics; avoid unnecessary movement"],
    ["**Hyperthermia / infection**", "Antibiotics on time, temperature, **aseptic wound care** (dressings, irrigation), isolation precautions for MRSA, monitor WBC/ESR/CRP"],
    ["**Impaired physical mobility**", "ROM of unaffected joints, partial weight bearing as ordered, **avoid stress on bone (pathological fracture risk)**"],
    ["**Risk for injury (pathological fracture)**", "Support limb, careful positioning, no heavy weight bearing"],
    ["**Deficient knowledge**", "Home IV therapy and PICC care, completion of the **full antibiotic course**, signs of recurrence, glucose control"],
    ["**Anxiety / ineffective coping**", "Long, repeated treatment — support, explanation, involve family"]],
    ar: { h: ["التشخيص", "التدخلات"], r: [
    ["**ألم حاد**", "التثبيت و**الرفع** والتعامل بلطف والمسكنات"],
    ["**ارتفاع الحرارة / العدوى**", "المضادات بوقتها، الحرارة، **عناية معقمة بالجرح**، عزل MRSA، مراقبة المؤشرات"],
    ["**ضعف الحركة**", "تمارين المفاصل السليمة و**تجنب إجهاد العظم**"],
    ["**خطر الإصابة (كسر مرضي)**", "دعم الطرف وعدم حمل الوزن الثقيل"],
    ["**نقص المعرفة**", "المضادات الوريدية بالمنزل، **إكمال الكورس**، علامات العودة، ضبط السكر"],
    ["**القلق**", "علاج طويل — دعم وشرح وإشراك العائلة"]] } },
  { t: "warn", en: "Chronic osteomyelitis can **recur years later** — teach the patient to report **new pain, swelling, fever or drainage** at the old site immediately.",
    ar: "قد **يعود** التهاب العظم المزمن بعد سنوات — علّم المريض الإبلاغ فوراً عن **ألم أو تورم أو حمى أو إفرازات جديدة** في المكان القديم." }
]}
],
questions: [
{ q: "What is the most common causative organism of osteomyelitis?", o: ["Escherichia coli", "Staphylococcus aureus", "Candida albicans", "Clostridium tetani"], a: 1, r: "S. aureus causes the majority of cases, including MRSA." },
{ q: "In a patient with sickle cell disease, osteomyelitis is classically associated with:", o: ["Salmonella", "Pseudomonas", "Neisseria", "Treponema"], a: 0, r: "Salmonella osteomyelitis is characteristic of sickle cell disease." },
{ q: "Why is osteomyelitis difficult to treat?", o: ["Bone has abundant blood supply", "Dead bone (sequestrum) is avascular and shields bacteria from antibiotics", "Antibiotics do not kill staphylococci", "It is always viral"], a: 1, r: "Poor blood supply and sequestrum prevent antibiotic penetration." },
{ q: "The dead bone fragment in osteomyelitis is called:", o: ["Involucrum", "Sequestrum", "Callus", "Osteophyte"], a: 1, r: "Sequestrum is necrotic bone; involucrum is new bone formed around it." },
{ q: "Which patients are at increased risk for osteomyelitis? (Select all that apply.)", o: ["Diabetic patient with a foot ulcer", "Patient with an open fracture", "Patient after total hip replacement", "Patient on long-term steroids", "Healthy adult with a closed sprain"], a: [0, 1, 2, 3], s: true, r: "Wounds, surgery, implants and immunosuppression increase risk." },
{ q: "Which manifestations are typical of acute hematogenous osteomyelitis? (Select all that apply.)", o: ["Sudden high fever and chills", "Constant pulsating bone pain", "Local swelling, warmth and tenderness", "Pain relieved by movement", "Elevated WBC"], a: [0, 1, 2, 4], s: true, r: "Pain worsens with movement." },
{ q: "A diabetic patient with chronic osteomyelitis of the foot is most likely to present with:", o: ["High fever and rigors", "A non-healing ulcer with draining sinus and little or no fever", "Severe headache", "Jaundice"], a: 1, r: "Contiguous chronic infection often lacks systemic signs." },
{ q: "Which test provides the definitive diagnosis of osteomyelitis?", o: ["X-ray", "ESR", "Bone biopsy with culture", "Complete blood count"], a: 2, r: "Biopsy identifies the organism and confirms infection." },
{ q: "Why may an early X-ray be normal in acute osteomyelitis?", o: ["X-rays cannot show bone", "Bone changes appear only after about 10–14 days", "The infection is in muscle only", "Contrast is needed"], a: 1, r: "Radiographic changes lag behind infection." },
{ q: "Which imaging test is most sensitive for early osteomyelitis?", o: ["Plain X-ray", "MRI", "Chest X-ray", "Ultrasound of abdomen"], a: 1, r: "MRI detects marrow edema early." },
{ q: "Which laboratory values are used to monitor response to treatment of osteomyelitis?", o: ["ESR and CRP", "Serum amylase", "TSH", "Bilirubin"], a: 0, r: "Falling ESR and CRP indicate improvement." },
{ q: "When should blood cultures be obtained in suspected osteomyelitis?", o: ["After the first antibiotic dose", "Before starting antibiotics", "Only if fever persists for a week", "Never"], a: 1, p: true, r: "Antibiotics may sterilize cultures and hide the organism." },
{ q: "How long is IV antibiotic therapy usually given for osteomyelitis?", o: ["3 days", "4–6 weeks", "1 year", "Single dose"], a: 1, r: "Prolonged therapy is required to eradicate bone infection." },
{ q: "A patient receiving vancomycin for osteomyelitis should be monitored for: (Select all that apply.)", o: ["Nephrotoxicity (creatinine)", "Ototoxicity (hearing loss, tinnitus)", "Trough levels", "Red man syndrome with rapid infusion", "Hyperglycemia only"], a: [0, 1, 2, 3], s: true, r: "Vancomycin is nephro- and ototoxic and requires level monitoring and slow infusion." },
{ q: "Which nursing intervention reduces pain in acute osteomyelitis?", o: ["Vigorous exercise of the limb", "Immobilizing and elevating the limb and handling gently", "Massaging the infected area", "Applying a tight bandage"], a: 1, r: "Immobilization and elevation reduce pain and swelling." },
{ q: "Why should the nurse avoid stress on the affected bone in osteomyelitis?", o: ["To prevent itching", "The weakened bone is at risk of pathological fracture", "To prevent fever", "To avoid hypertension"], a: 1, r: "Infection destroys bone and weakens it." },
{ q: "A sequestrectomy is:", o: ["Removal of dead bone", "Insertion of a pin", "Drainage of a joint", "Amputation"], a: 0, r: "Surgical removal of the sequestrum allows healing." },
{ q: "What is the purpose of antibiotic-impregnated beads placed in bone after debridement?", o: ["To provide high local antibiotic concentrations", "To fill bone permanently", "To reduce pain", "To prevent bleeding"], a: 0, r: "They deliver antibiotics directly into the dead space." },
{ q: "Which diet is recommended for a patient with osteomyelitis?", o: ["Low protein", "High protein, high calorie with vitamins C and D", "Clear fluids only", "Low calorie"], a: 1, r: "Protein and vitamins support tissue repair and immunity." },
{ q: "A patient with MRSA osteomyelitis requires which precautions?", o: ["Airborne", "Contact precautions", "No precautions", "Neutropenic only"], a: 1, r: "MRSA spreads by direct contact with the patient, wound drainage or contaminated equipment, so contact precautions are required." },
{ q: "What is the best way to prevent osteomyelitis after orthopedic surgery?", o: ["Avoiding fluids", "Strict asepsis, prophylactic antibiotics and careful wound/pin care", "Early weight bearing only", "Bed rest for months"], a: 1, r: "Prevention focuses on aseptic technique and infection control." },
{ q: "A patient going home with IV antibiotics via PICC line should be taught to: (Select all that apply.)", o: ["Complete the full course", "Keep the dressing clean and dry", "Report fever, redness or swelling at the site", "Stop antibiotics when pain improves", "Maintain dosing times"], a: [0, 1, 2, 4], s: true, r: "Stopping early risks relapse and resistance." },
{ q: "Which statement by a patient with chronic osteomyelitis shows understanding?", o: ["\"Once healed, it can never return.\"", "\"I should report new pain, swelling or drainage at the old site, even years later.\"", "\"I can stop antibiotics when I feel better.\"", "\"Smoking does not affect bone healing.\""], a: 1, r: "Chronic osteomyelitis can recur years later." },
{ q: "Hematogenous osteomyelitis in children most often affects the:", o: ["Diaphysis of flat bones", "Metaphysis of long bones", "Skull", "Ribs only"], a: 1, r: "The metaphysis has slow-flowing sinusoidal blood that favors bacterial seeding." },
{ q: "Spinal tuberculosis (vertebral osteomyelitis) is known as:", o: ["Paget's disease", "Pott's disease", "Colles' disease", "Perthes disease"], a: 1, r: "Pott's disease is tuberculous spondylitis." },
{ q: "A patient 2 weeks after ORIF of the tibia has increasing pain, swelling and fever 38.9°C. The priority action is to:", o: ["Encourage weight bearing", "Report to the provider for evaluation of possible bone infection", "Apply heat", "Give a laxative"], a: 1, p: true, r: "These signs suggest postoperative osteomyelitis requiring prompt workup." },
{ q: "Which finding suggests chronic rather than acute osteomyelitis?", o: ["Infection lasting more than 4 weeks with a draining sinus", "Sudden onset fever", "First episode 3 days ago", "Normal ESR"], a: 0, r: "Chronicity is marked by persistence and sinus tracts." },
{ q: "Why is hyperbaric oxygen therapy sometimes used in chronic osteomyelitis?", o: ["To cool the bone", "To improve tissue oxygenation and healing and enhance killing of bacteria", "To reduce blood glucose", "To sedate the patient"], a: 1, r: "High oxygen levels support healing and leukocyte function." },
{ q: "New bone formed around the necrotic bone is called:", o: ["Involucrum", "Sequestrum", "Osteoid", "Tophus"], a: 0, r: "The involucrum is reactive new bone." },
{ q: "Which complication may occur with chronic osteomyelitis?", o: ["Pathological fracture", "Cataract", "Hypothyroidism", "Asthma"], a: 0, r: "Weakened, infected bone may break easily." },
{ q: "A nurse caring for a patient with skeletal traction should prevent osteomyelitis by:", o: ["Removing pins daily", "Performing pin-site care and monitoring for signs of infection", "Covering pins with tight bandages", "Avoiding any cleaning"], a: 1, r: "Pin tracts are a direct route of bone infection." }
]
});

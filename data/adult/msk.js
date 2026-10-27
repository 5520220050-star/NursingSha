NS.reg("adult", { msk: {
summary: {
  en: "In musculoskeletal nursing the most tested skill is the **neurovascular check** — circulation, sensation and movement distal to an injury, cast or surgery. Know which complications are emergencies (compartment syndrome, fat embolism, hemorrhage, DVT/PE) and the positioning rules for hip replacement and amputation.",
  ar: "أهم مهارة تُمتحن في تمريض العظام هي **الفحص العصبي الوعائي** — الدورة الدموية والإحساس والحركة بعد الإصابة أو الجبس أو العملية. اعرف المضاعفات الطارئة (متلازمة الحيز، الانصمام الدهني، النزف، الخثار) وقواعد الوضعية بعد استبدال الورك والبتر."
},
sections: [
{ h: { en: "Assessment & diagnostic tests", ar: "التقييم والفحوصات" }, b: [
  { t: "mnem", k: "6 P's", title: "Neurovascular assessment (compare with the other limb)", rows: [
    ["P", "**Pain** — out of proportion, unrelieved by opioids, worse on passive stretch", "ألم غير متناسب لا يزول بالمسكن ويزداد بالتمدد السلبي"],
    ["P", "**Pallor** — pale/cool skin; capillary refill > 3 s", "شحوب وبرودة وتأخر امتلاء الشعيرات"],
    ["P", "**Pulselessness** — weak/absent distal pulse (a **late** sign)", "غياب النبض الطرفي (علامة **متأخرة**)"],
    ["P", "**Paresthesia** — tingling, numbness (an **early** sign of nerve compression)", "تنميل وخدر (علامة **مبكرة**)"],
    ["P", "**Paralysis** — inability to move toes/fingers", "شلل وعدم القدرة على تحريك الأصابع"],
    ["P", "**Poikilothermia** — the limb takes room temperature (cold)", "برودة الطرف"] ] },
  { t: "table", h: ["Test", "Nursing points"], r: [
    ["**X-ray / CT / MRI**", "MRI: remove metal; X-ray first-line for fractures"],
    ["**Bone densitometry (DEXA)**", "Diagnoses osteoporosis by T-score; painless, no preparation"],
    ["**Bone scan**", "Radioisotope IV; drink fluids, void before scan; shows tumors, infection, occult fractures"],
    ["**Arthroscopy**", "Endoscopic view of a joint; after: elevate, ice, check neurovascular status & swelling"],
    ["**Arthrocentesis**", "Aspiration of synovial fluid; sterile technique, pressure dressing after"],
    ["**Labs**", "Calcium, phosphorus, ALP, uric acid (gout), ESR/CRP (inflammation), rheumatoid factor & anti-CCP (RA)"]],
    ar: { h: ["الفحص", "نقاط تمريضية"], r: [
    ["**الأشعة والمفراس والرنين**", "الأشعة السينية أول فحص للكسور"],
    ["**قياس كثافة العظم**", "يشخص الهشاشة حسب T-score بدون تحضير"],
    ["**مسح العظام**", "مادة مشعة وريدية؛ سوائل وتفريغ المثانة قبل الفحص"],
    ["**تنظير المفصل**", "بعده: رفع الطرف، ثلج، فحص عصبي وعائي"],
    ["**بزل المفصل**", "تعقيم وضماد ضاغط بعده"],
    ["**التحاليل**", "الكالسيوم، الفوسفور، الفوسفاتاز القلوي، حمض اليوريك، سرعة الترسيب، العامل الرثوي"]] } }
]},
{ h: { en: "Fractures", ar: "الكسور" }, b: [
  { t: "table", h: ["Type", "Description"], r: [
    ["**Closed (simple)**", "Skin intact"],
    ["**Open (compound)**", "Bone breaks through skin — high infection/osteomyelitis risk"],
    ["**Complete / incomplete**", "Through the whole bone / part of it (e.g., **greenstick** in children)"],
    ["**Comminuted**", "Bone splintered into several fragments"],
    ["**Transverse / oblique / spiral**", "Straight across / angled / twisting around the shaft (spiral in a child → consider abuse)"],
    ["**Compression / impacted**", "Bone crushed (vertebrae, osteoporosis) / ends driven into each other"],
    ["**Pathological**", "Through weakened bone (tumor, osteoporosis) with minimal trauma"],
    ["**Stress**", "Repeated stress (athletes, soldiers)"]],
    ar: { h: ["النوع", "الوصف"], r: [
    ["**مغلق**", "الجلد سليم"],
    ["**مفتوح**", "العظم يخترق الجلد — خطر التهاب عالٍ"],
    ["**كامل / غير كامل**", "خلال العظم كله / جزء منه (**الغصن الأخضر** عند الأطفال)"],
    ["**مفتت**", "عدة قطع"],
    ["**عرضي / مائل / حلزوني**", "الحلزوني عند الطفل يُشك بالإساءة"],
    ["**انضغاطي / منغرز**", "سحق العظم (الفقرات) / تداخل الطرفين"],
    ["**مرضي**", "في عظم ضعيف (ورم، هشاشة) بأقل رضّ"],
    ["**إجهادي**", "من الضغط المتكرر"]] } },
  { t: "cards", items: [
    { i: "alert", en: "Pain & tenderness", ar: "ألم وإيلام" },
    { i: "bone", en: "Deformity, shortening, rotation", d: "Hip fracture: leg **shortened & externally rotated**", ar: "تشوه وقِصر ودوران — كسر الورك: الساق **قصيرة ودائرة للخارج**" },
    { i: "hand", en: "Crepitus", d: "Grating sound/feel — don't test for it on purpose", ar: "طقطقة — لا تختبرها عمداً" },
    { i: "drop", en: "Swelling & ecchymosis", ar: "تورم وكدمة" },
    { i: "x", en: "Loss of function", ar: "فقدان الوظيفة" } ] },
  { t: "flow", steps: [
    { en: "Assess ABCs and bleeding; treat shock (pelvic/femur fractures can lose a lot of blood)", ar: "تقييم مجرى الهواء والتنفس والدوران والنزف؛ كسور الحوض والفخذ تسبب نزفاً كبيراً" },
    { en: "**Immobilize** — splint the joints **above and below** the fracture, as it lies", ar: "**التثبيت** — جبيرة تشمل المفصل **فوق وتحت** الكسر كما هو" },
    { en: "Open fracture: cover with **sterile dressing**; never push bone back in", ar: "الكسر المفتوح: غطاء **معقم** ولا تُرجع العظم" },
    { en: "Neurovascular check before & after splinting; elevate; ice", ar: "فحص عصبي وعائي قبل وبعد التجبير، رفع الطرف، ثلج" } ] },
  { t: "cycle", center: "Bone|healing", steps: [
    { en: "**Hematoma** formation (first 72 h)", ar: "تكون الورم الدموي (أول 72 ساعة)" },
    { en: "**Granulation** tissue / fibrocartilage", ar: "النسيج الحبيبي والغضروف الليفي" },
    { en: "**Callus** formation", ar: "تكون الدُشبذ" },
    { en: "**Ossification**", ar: "التعظم" },
    { en: "**Remodeling**", ar: "إعادة التشكيل" } ] },
  { t: "compare", cols: [
    { h: { en: "Cast care", ar: "العناية بالجبس" }, en: ["Plaster cast takes 24–72 h to dry: leave uncovered, handle with **palms not fingertips**", "**Elevate above heart level** first 24–48 h, ice", "Neurovascular checks; report **burning, pain unrelieved, tightness**", "Don't insert objects to scratch; keep dry", "Odor or hot spot on cast → infection"], ar: ["الجبس يحتاج 24–72 ساعة ليجف: يُترك مكشوفاً ويُمسك **براحة اليد لا بأطراف الأصابع**", "**رفع الطرف فوق مستوى القلب** مع ثلج", "فحص عصبي وعائي، والإبلاغ عن **الحرقة والألم والضيق**", "لا تدخل أشياء للحكّ، وأبقه جافاً", "الرائحة أو البقعة الحارة = التهاب"] },
    { h: { en: "Traction care", ar: "العناية بالشد" }, en: ["Weights **hang freely**, off the floor & bed; ropes in pulleys", "Don't remove weights (never for skeletal traction)", "Body in alignment; counter-traction", "**Skin (Buck's)** traction: limited weight (~2–3.5 kg), check skin", "**Skeletal** traction: **pin-site care** — watch for infection"], ar: ["الأثقال **معلقة بحرية** بعيداً عن الأرض", "لا تُرفع الأثقال (أبداً في الشد الهيكلي)", "الجسم مستقيم مع شد معاكس", "**الشد الجلدي (باك)**: وزن قليل وفحص الجلد", "**الشد الهيكلي**: **العناية بموضع المسامير** ومراقبة الالتهاب"] } ] },
  { t: "warn", en: "**Compartment syndrome** — rising pressure within a closed muscle compartment. Early signs: **pain out of proportion, pain on passive stretch, paresthesia**. Act: notify immediately, **loosen bandages / bivalve the cast**, keep the limb at **heart level (do not elevate or apply ice)**; fasciotomy may be needed within hours.",
    ar: "**متلازمة الحيز** — ارتفاع الضغط داخل حيز عضلي مغلق. العلامات المبكرة: **ألم غير متناسب، ألم مع التمدد السلبي، تنميل**. الإجراء: الإبلاغ فوراً، **فك الضماد أو شق الجبس**، وإبقاء الطرف **بمستوى القلب (بدون رفع أو ثلج)**، وقد يحتاج شق اللفافة خلال ساعات." },
  { t: "warn", en: "**Fat embolism syndrome** — 24–72 h after **long-bone or pelvic** fracture: sudden **dyspnea, hypoxemia, confusion**, tachycardia, and **petechiae** on chest, axillae and conjunctiva. Give oxygen (high Fowler's), notify; prevent by early immobilization of the fracture.",
    ar: "**متلازمة الانصمام الدهني** — بعد 24–72 ساعة من كسر **العظام الطويلة أو الحوض**: **ضيق نفس مفاجئ، نقص أكسجة، تشوش**، تسرع قلب، و**نقط نزفية** على الصدر والإبط والملتحمة. أعطِ أكسجين وبلّغ؛ والوقاية بالتثبيت المبكر." },
  { t: "list", en: ["Other complications: **DVT/PE**, infection, **delayed union / nonunion**, **avascular necrosis** (e.g., femoral head after hip fracture), hypovolemic shock"], ar: ["مضاعفات أخرى: **الخثار الوريدي والانصمام الرئوي**، الالتهاب، **تأخر الالتئام أو عدمه**، **النخر اللاوعائي** (رأس عظم الفخذ)، صدمة نقص الحجم"] }
]},
{ h: { en: "Amputation", ar: "البتر" }, b: [
  { t: "p", en: "The most common cause of lower-limb amputation in adults is **peripheral vascular disease, especially with diabetes**; others are trauma, tumors and severe infection. The remaining part is called the **residual limb (stump)**.",
    ar: "أشيع سبب لبتر الطرف السفلي عند البالغين **أمراض الأوعية الطرفية خاصة مع السكري**، ثم الإصابات والأورام والالتهابات الشديدة. الجزء المتبقي يسمى **الطرف المتبقي (الجذمور)**." },
  { t: "flow", steps: [
    { en: "**Hemorrhage**: check dressing & drains; keep a **tourniquet at the bedside**", ar: "**النزف**: فحص الضماد، و**رباط ضاغط بجانب السرير**" },
    { en: "First 24 h: residual limb may be elevated to reduce edema (per order)", ar: "أول 24 ساعة: يمكن رفع الطرف لتقليل الوذمة حسب الطلب" },
    { en: "After 24–48 h: **no pillow under the stump**; place patient **prone** periodically (above-knee) to prevent **hip flexion contracture**", ar: "بعد 24–48 ساعة: **لا وسادة تحت الجذمور**، ووضع المريض **على بطنه** دورياً لمنع **تقفع الورك**" },
    { en: "Shape & shrink the stump: elastic bandage in **figure-of-eight**, **distal to proximal**, or shrinker sock", ar: "تشكيل الجذمور: رباط مطاطي **بشكل 8** من **الأسفل للأعلى**" },
    { en: "Prepare for prosthesis: push stump against soft → firm surfaces, ROM & strengthening exercises", ar: "التهيئة للطرف الصناعي: الضغط على أسطح لينة ثم صلبة وتمارين التقوية" } ] },
  { t: "tip", en: "**Phantom limb pain** is real (not imaginary). Acknowledge it and treat it with analgesics, anticonvulsants/antidepressants as ordered, mirror therapy and massage.",
    ar: "**ألم الطرف الشبحي** ألم حقيقي وليس وهماً. اعترف به وعالجه بالمسكنات والأدوية الموصوفة والعلاج بالمرآة والتدليك." }
]},
{ h: { en: "Osteomyelitis", ar: "التهاب العظم والنقي" }, b: [
  { t: "p", en: "Infection of bone, most often by __Staphylococcus aureus__ (including MRSA). It reaches bone through the **blood (hematogenous)**, from a **nearby wound** (open fracture, surgery, pressure ulcer) or from **vascular insufficiency** (diabetic foot). Bone is hard to treat because infection forms **dead bone (sequestrum)** with poor blood supply.",
    ar: "التهاب العظم، غالباً بالمكورات العنقودية الذهبية. يصل عن طريق **الدم**، أو من **جرح قريب** (كسر مفتوح، عملية، قرحة فراش)، أو بسبب **قصور الأوعية** (القدم السكرية). علاجه صعب لأنه يكوّن **عظماً ميتاً (شظية)** ضعيف التروية." },
  { t: "compare", cols: [
    { h: { en: "Acute", ar: "الحاد" }, en: ["Fever, chills, malaise", "Local pain, swelling, warmth, tenderness", "Limited movement of the limb", "↑ WBC, ESR, CRP; blood cultures"], ar: ["حمى ورعشة", "ألم وتورم وحرارة موضعية", "صعوبة تحريك الطرف", "ارتفاع كريات البيض وسرعة الترسيب"] },
    { h: { en: "Chronic", ar: "المزمن" }, en: ["Infection >~4 weeks or recurring", "Draining **sinus tract**", "Low-grade fever or none", "Needs surgical **debridement** of sequestrum"], ar: ["أكثر من 4 أسابيع أو متكرر", "**ناسور** يصرّف قيحاً", "حمى خفيفة أو لا شيء", "يحتاج **تنظيفاً جراحياً**"] } ] },
  { t: "list", en: [
    "Definitive diagnosis: **bone biopsy & culture**; MRI is sensitive",
    "**IV antibiotics for 4–6 weeks or longer** (often via PICC); obtain cultures first; monitor peak/trough levels (e.g., vancomycin)",
    "Immobilize & **handle the limb gently** (pathological fracture risk); pain control",
    "Contact precautions & sterile dressing for draining wounds",
    "High-protein, vitamin C diet; control blood glucose in diabetes"],
    ar: [
    "التشخيص المؤكد: **خزعة العظم وزرعها**، والرنين حساس",
    "**مضادات حيوية وريدية 4–6 أسابيع أو أكثر**، والزرع قبلها، ومراقبة مستوى الدواء",
    "تثبيت الطرف و**التعامل معه بلطف** (خطر الكسر المرضي)، وتسكين الألم",
    "احتياطات التلامس وضماد معقم للجروح النازة",
    "غذاء غني بالبروتين وفيتامين C، وضبط السكر"] }
]},
{ h: { en: "Osteoporosis", ar: "هشاشة العظام" }, b: [
  { t: "p", en: "A metabolic bone disease in which **bone resorption exceeds bone formation**, making bones porous and fragile. Diagnosed by **DEXA**: T-score **≤ −2.5 = osteoporosis**; −1 to −2.5 = osteopenia.",
    ar: "مرض أيضي يكون فيه **هدم العظم أكبر من بنائه** فتصبح العظام مسامية وهشة. يُشخص بـ**DEXA**: **−2.5 أو أقل = هشاشة**، بين −1 و−2.5 = نقص كثافة." },
  { t: "cards", items: [
    { i: "people", en: "Female, postmenopausal", d: "Estrogen loss", ar: "الأنثى بعد سن اليأس — نقص الإستروجين" },
    { i: "clock", en: "Older age", ar: "التقدم بالعمر" },
    { i: "food", en: "Low calcium & vitamin D", ar: "نقص الكالسيوم وفيتامين د" },
    { i: "alert", en: "Smoking, alcohol, caffeine", ar: "التدخين والكحول والكافيين" },
    { i: "bed", en: "Sedentary lifestyle", ar: "قلة الحركة" },
    { i: "pill", en: "Corticosteroids, heparin, some anticonvulsants", ar: "الكورتيزون وبعض الأدوية" },
    { i: "scale", en: "Small, thin frame; family history", ar: "جسم نحيف صغير وتاريخ عائلي" } ] },
  { t: "list", en: [
    "Often silent until a fracture: **vertebral compression** (height loss, **kyphosis/dowager's hump**, back pain), **hip** and **wrist (Colles')** fractures",
    "Calcium (about 1,000–1,200 mg/day) and vitamin D; **weight-bearing exercise** (walking); stop smoking; limit alcohol",
    "**Fall prevention** at home: remove rugs, night lights, grab bars, proper shoes",
    "Drugs: bisphosphonates (alendronate), raloxifene (↑ DVT risk), calcitonin, denosumab, teriparatide"],
    ar: [
    "غالباً صامتة حتى حدوث كسر: **انضغاط الفقرات** (نقص الطول، **الحدبة**، ألم الظهر)، كسور **الورك** و**الرسغ**",
    "الكالسيوم (1000–1200 ملغ يومياً) وفيتامين د، **تمارين حمل الوزن** (المشي)، ترك التدخين",
    "**منع السقوط**: إزالة السجاد، إنارة ليلية، مقابض، أحذية مناسبة",
    "الأدوية: البايفوسفونيت (أليندرونات)، رالوكسيفين، كالسيتونين، دينوسوماب"] },
  { t: "mnem", k: "EMPTY · UPRIGHT · 30", title: "How to take alendronate", rows: [
    ["1", "In the **morning on an empty stomach** with a **full glass of plain water**", "صباحاً على معدة فارغة مع كوب ماء كامل"],
    ["2", "**Stay upright (sit/stand) for at least 30 minutes**", "البقاء منتصباً 30 دقيقة على الأقل"],
    ["3", "No food, drink or other meds for 30 minutes", "لا طعام ولا أدوية لمدة 30 دقيقة"],
    ["!", "Report heartburn, dysphagia, chest pain (**esophagitis**); jaw pain (osteonecrosis)", "بلّغ عن الحرقة وصعوبة البلع (التهاب المريء) وألم الفك"] ] }
]},
{ h: { en: "Arthritis: osteoarthritis vs rheumatoid arthritis", ar: "التهاب المفاصل: التنكسي مقابل الروماتويدي" }, b: [
  { t: "table", h: ["Feature", "Osteoarthritis (OA)", "Rheumatoid arthritis (RA)"], r: [
    ["Nature", "**Degenerative** — cartilage wear", "**Autoimmune, systemic** — synovial inflammation"],
    ["Joints", "Weight-bearing (knees, hips, spine), DIP/PIP; often **asymmetric**", "Small joints (MCP, PIP, wrists); **symmetric**"],
    ["Morning stiffness", "**< 30 minutes**", "**> 1 hour**"],
    ["Pain pattern", "Worse **with activity**, relieved by rest", "Worse after rest; pain with inflammation"],
    ["Signs", "**Heberden's nodes (DIP)**, **Bouchard's nodes (PIP)**, crepitus", "**Swan-neck**, boutonnière, **ulnar deviation**, rheumatoid nodules"],
    ["Systemic", "None", "**Fatigue, low fever, weight loss, anemia**"],
    ["Labs", "Normal", "**RF, anti-CCP positive**, ↑ ESR/CRP"]],
    ar: { h: ["الصفة", "التنكسي", "الروماتويدي"], r: [
    ["الطبيعة", "**تآكل** الغضروف", "**مناعي ذاتي جهازي**"],
    ["المفاصل", "الحاملة للوزن، غالباً **غير متماثل**", "المفاصل الصغيرة، **متماثل**"],
    ["التيبس الصباحي", "**أقل من 30 دقيقة**", "**أكثر من ساعة**"],
    ["نمط الألم", "يزداد **مع الحركة** ويخف بالراحة", "يزداد بعد الراحة"],
    ["العلامات", "**عقد هيبردن وبوشارد**، طقطقة", "**عنق البجعة**، **انحراف زندي**، عقيدات"],
    ["أعراض عامة", "لا", "**تعب، حمى خفيفة، نقص وزن، فقر دم**"],
    ["التحاليل", "طبيعية", "**العامل الرثوي وanti-CCP إيجابي**"]] } },
  { t: "list", en: [
    "**OA treatment**: weight loss, low-impact exercise, paracetamol, NSAIDs, intra-articular steroid injection, joint replacement",
    "**RA treatment**: DMARDs — **methotrexate** (monitor CBC & liver tests, **avoid alcohol**, take **folic acid**, teratogenic); biologics (TNF inhibitors — **screen for TB**, ↑ infection risk); NSAIDs; short-course steroids",
    "**Heat** relieves stiffness (warm shower in the morning); **cold** for acute hot, inflamed joints",
    "Balance rest and exercise; splints to rest inflamed joints; assistive devices; energy conservation"],
    ar: [
    "**علاج التنكسي**: إنقاص الوزن، تمارين خفيفة، باراسيتامول، مضادات الالتهاب، حقن كورتيزون، استبدال المفصل",
    "**علاج الروماتويدي**: **الميثوتريكسات** (مراقبة الدم والكبد، **تجنب الكحول**، **حمض الفوليك**، مشوه للجنين)؛ العلاجات الحيوية (**فحص السل** وخطر العدوى)؛ مضادات الالتهاب؛ الكورتيزون",
    "**الحرارة** للتيبس (حمام دافئ صباحاً)، و**البرودة** للمفصل الملتهب الحار",
    "التوازن بين الراحة والتمارين، جبائر، وأدوات مساعدة"] }
]},
{ h: { en: "Joint replacement (arthroplasty)", ar: "استبدال المفاصل" }, b: [
  { t: "compare", cols: [
    { h: { en: "Total hip replacement", ar: "استبدال الورك الكلي" }, en: [
      "Prevent **dislocation** (posterior approach):",
      "**No hip flexion > 90°** — no low chairs, use **raised toilet seat**, don't bend to pick things up",
      "**No adduction past midline** — **abduction pillow** between legs, **don't cross legs**",
      "**No internal rotation** — toes pointing up",
      "Dislocation signs: sudden pain, **shortening, rotation** of the leg, inability to move"],
      ar: ["منع **الخلع**:", "**لا ثني للورك أكثر من 90 درجة** — لا كراسي منخفضة، **مقعد مرحاض مرتفع**، لا انحناء", "**لا تقريب للساق بعد الخط الوسطي** — **وسادة إبعاد** بين الساقين و**لا تصالب للساقين**", "**لا دوران داخلي** — أصابع القدم للأعلى", "علامات الخلع: ألم مفاجئ، **قِصر ودوران** الساق"] },
    { h: { en: "Total knee replacement", ar: "استبدال الركبة الكلي" }, en: [
      "Early ROM — **CPM machine** as ordered",
      "Goal: full extension and ≥90° flexion",
      "Ice, elevation (no pillow behind the knee to keep it straight — avoid flexion contracture)",
      "Physiotherapy, walker, gradual weight bearing"],
      ar: ["حركة مبكرة — **جهاز الحركة السلبية المستمرة**", "الهدف: مد كامل وثني 90 درجة", "ثلج ورفع (بدون وسادة خلف الركبة لمنع التقفع)", "علاج طبيعي ومشاية"] } ] },
  { t: "list", en: [
    "**DVT prevention** for both: anticoagulants (e.g., enoxaparin), compression devices, **ankle pumps**, early mobilization",
    "Infection prevention: prophylactic antibiotics, wound care; report fever, redness, drainage",
    "Monitor wound drains and blood loss; pain control before physiotherapy"],
    ar: [
    "**منع الخثار** للحالتين: مضادات التخثر، أجهزة الضغط، **تمارين الكاحل**، الحركة المبكرة",
    "منع الالتهاب: مضادات حيوية وقائية والعناية بالجرح",
    "مراقبة المصارف وفقدان الدم، وتسكين الألم قبل العلاج الطبيعي"] }
]}
],
questions: [
{ q: "A patient with a new forearm cast reports severe pain unrelieved by morphine and increased pain when the nurse passively extends the fingers. What is the nurse's FIRST action?", o: ["Elevate the arm on two pillows and apply ice", "Notify the provider immediately of suspected compartment syndrome", "Give another dose of morphine", "Reassess in one hour"], a: 1, p: true, r: "Pain out of proportion and pain on passive stretch are early signs of compartment syndrome — a limb-threatening emergency requiring immediate notification, loosening/bivalving the cast and possible fasciotomy." },
{ q: "In suspected compartment syndrome, how should the affected limb be positioned?", o: ["Elevated above the heart with ice", "At the level of the heart", "Dependent below the heart", "In traction"], a: 1, r: "Elevating the limb lowers arterial pressure and further reduces perfusion. The limb is kept at heart level, and ice is avoided because it causes vasoconstriction." },
{ q: "Which is a LATE sign of neurovascular compromise?", o: ["Paresthesia", "Pain on passive stretch", "Absent distal pulse", "Tingling of the toes"], a: 2, r: "Pulselessness occurs late, after significant tissue pressure. Paresthesia and pain on passive movement are early warnings." },
{ q: "Two days after a femur fracture, a patient becomes confused and short of breath with SpO₂ 86% and petechiae on the chest. The nurse suspects:", o: ["Pulmonary edema", "Fat embolism syndrome", "Pneumonia", "Anxiety attack"], a: 1, r: "Fat embolism typically occurs 24–72 hours after long-bone or pelvic fractures, presenting with hypoxemia, confusion and petechiae on the chest, axillae and conjunctiva." },
{ q: "What is the priority action for the patient with suspected fat embolism?", o: ["Apply oxygen and place in high Fowler's position", "Massage the legs", "Start range-of-motion exercises", "Administer an antipyretic"], a: 0, p: true, r: "Hypoxemia is the life-threatening problem. Oxygen is applied immediately with the head elevated, and the provider is notified." },
{ q: "A man has an open tibial fracture after a motorcycle crash. Which emergency care is correct? (Select all that apply.)", o: ["Cover the wound with a sterile dressing", "Push the bone back under the skin", "Splint the joints above and below the fracture", "Check distal pulses before and after splinting", "Straighten the leg forcefully before splinting", "Assess for signs of shock"], a: [0, 2, 3, 5], s: true, r: "Cover open wounds sterilely, splint as it lies including joints above and below, check neurovascular status and assess for shock. Never push bone back in or forcibly straighten the limb." },
{ q: "An older woman fell at home. Which finding is typical of a hip fracture?", o: ["Affected leg longer and internally rotated", "Affected leg shortened and externally rotated", "No pain on movement", "Bilateral leg swelling"], a: 1, r: "A fractured hip classically shows the affected leg shortened and externally rotated, with pain in the hip or groin." },
{ q: "A plaster cast was applied 2 hours ago. Which action by the nurse is correct?", o: ["Cover the cast with a blanket to speed drying", "Handle the cast with the palms of the hands", "Rest the cast on a hard surface", "Use a hair dryer on the hot setting"], a: 1, r: "A wet cast can be dented by fingertips, creating pressure points. It is handled with palms, left uncovered and supported on pillows to dry." },
{ q: "A patient with a leg cast says, \"I feel a burning spot under my cast.\" What should the nurse suspect?", o: ["Normal healing", "A pressure area developing under the cast", "An allergic reaction to the analgesic", "Muscle atrophy"], a: 1, r: "A localized burning sensation suggests pressure on skin that may progress to ulceration. It must be reported; the cast may need a window or bivalving." },
{ q: "Which observation shows correct care of a patient in Buck's traction?", o: ["Weights resting on the floor", "Weights hanging freely with ropes in the pulleys", "Weights removed during repositioning", "Foot pressed against the footboard"], a: 1, r: "Traction is effective only when weights hang freely and ropes move in pulleys without obstruction; weights are not removed or rested on the bed or floor." },
{ q: "For a patient in skeletal traction, which finding at the pin site should be reported?", o: ["Small amount of clear serous drainage", "Purulent, foul-smelling drainage with redness", "Slight crusting", "Patient reports mild pin awareness"], a: 1, r: "Purulent, foul-smelling drainage and redness indicate pin-site infection, which can lead to osteomyelitis. Small serous drainage is expected." },
{ q: "Which complication is most likely after a displaced femoral neck fracture?", o: ["Avascular necrosis of the femoral head", "Gout", "Osteoarthritis of the ankle", "Carpal tunnel syndrome"], a: 0, r: "The blood supply to the femoral head can be disrupted by a femoral neck fracture, causing avascular necrosis." },
{ q: "Order the stages of bone healing. Which occurs FIRST?", o: ["Callus formation", "Hematoma formation", "Remodeling", "Ossification"], a: 1, r: "Healing begins with hematoma formation, then granulation tissue, callus formation, ossification and finally remodeling." },
{ q: "A patient with a pelvic fracture has BP 88/50, pulse 124 and cool skin. The nurse should suspect:", o: ["Fat embolism", "Hypovolemic shock from internal bleeding", "Compartment syndrome", "Neurogenic shock"], a: 1, r: "Pelvic fractures can cause large internal blood losses into the retroperitoneum, leading to hypovolemic shock." },
{ q: "A 6-year-old has a spiral fracture of the humerus, and the parents' explanation is inconsistent. The nurse should:", o: ["Document and discharge", "Report suspected child abuse according to policy", "Confront the parents", "Ignore it; spiral fractures are common"], a: 1, r: "Spiral fractures result from twisting forces and, with an inconsistent history in a child, should raise suspicion of abuse that the nurse must report." },
{ q: "Twenty-four hours after an above-the-knee amputation, which position should be avoided?", o: ["Prone position for short periods", "Pillow under the residual limb for long periods", "Supine with the limb flat", "Side-lying"], a: 1, r: "After the first 24 hours, keeping a pillow under the residual limb promotes hip flexion contracture, which interferes with prosthesis use. Prone positioning is encouraged." },
{ q: "Which item must be kept at the bedside after a leg amputation?", o: ["Suction catheter", "Tourniquet", "Padded tongue blade", "Restraints"], a: 1, r: "Sudden hemorrhage from the residual limb is a serious early risk; a tourniquet is kept at the bedside for emergency control." },
{ q: "A patient after amputation reports pain in the toes of the amputated foot. What is the best response?", o: ["\"That pain is imaginary.\"", "\"This phantom pain is real; I'll get medication to help.\"", "\"Look at your leg so you remember it is gone.\"", "\"It means the surgery failed.\""], a: 1, r: "Phantom limb pain is real neuropathic pain. The nurse acknowledges it and treats it with prescribed analgesics and other therapies." },
{ q: "How should an elastic bandage be applied to shape a residual limb?", o: ["Circular turns tightest at the top", "Figure-of-eight from distal to proximal", "Loosely, proximal to distal", "Only at night"], a: 1, r: "A figure-of-eight wrap from distal to proximal applies even pressure, reduces edema and shapes the stump into a cone for the prosthesis, without a tourniquet effect." },
{ q: "What is the most common cause of lower-extremity amputation in adults?", o: ["Trauma", "Peripheral vascular disease with diabetes", "Bone tumors", "Congenital defects"], a: 1, r: "Peripheral vascular disease, particularly in people with diabetes, accounts for most lower-limb amputations in adults." },
{ q: "Which organism most commonly causes osteomyelitis?", o: ["Escherichia coli", "Staphylococcus aureus", "Streptococcus pyogenes", "Candida albicans"], a: 1, r: "Staphylococcus aureus, including MRSA, is the most common cause of osteomyelitis." },
{ q: "Which test definitively confirms osteomyelitis and the causative organism?", o: ["ESR", "Bone biopsy and culture", "X-ray on day 1", "Rheumatoid factor"], a: 1, r: "Bone biopsy with culture confirms the diagnosis and identifies the organism. X-ray changes may not appear for 10–14 days." },
{ q: "Which nursing measures are appropriate for a patient with acute osteomyelitis of the tibia? (Select all that apply.)", o: ["Handle the leg gently", "Administer IV antibiotics on schedule", "Encourage vigorous exercise of the leg", "Provide a high-protein diet with vitamin C", "Apply heat directly to the open wound", "Monitor peak and trough drug levels as ordered"], a: [0, 1, 3, 5], s: true, r: "Gentle handling prevents pathological fracture; timed IV antibiotics with drug-level monitoring treat the infection; protein and vitamin C support healing. Vigorous exercise is avoided." },
{ q: "A patient with diabetes has a foot ulcer that probes to bone. Which complication should the nurse suspect?", o: ["Osteoporosis", "Osteomyelitis", "Gout", "Fat embolism"], a: 1, r: "Vascular insufficiency and contiguous spread from a diabetic foot ulcer are common routes for osteomyelitis; an ulcer that reaches bone strongly suggests it." },
{ q: "A DEXA scan shows a T-score of −2.8. The nurse interprets this as:", o: ["Normal bone density", "Osteopenia", "Osteoporosis", "Osteomalacia"], a: 2, r: "A T-score of −2.5 or lower indicates osteoporosis; between −1 and −2.5 indicates osteopenia." },
{ q: "Which instructions are correct for alendronate? (Select all that apply.)", o: ["Take first thing in the morning with a full glass of water", "Take with breakfast to reduce nausea", "Remain upright for at least 30 minutes", "Take with orange juice for better absorption", "Wait 30 minutes before eating", "Report heartburn or difficulty swallowing"], a: [0, 2, 4, 5], s: true, r: "Alendronate is taken on an empty stomach with plain water, the patient stays upright and fasts for 30 minutes to promote absorption and prevent esophagitis, and reports esophageal symptoms." },
{ q: "Which exercise is best recommended to prevent osteoporosis?", o: ["Swimming", "Walking", "Bed rest", "Stretching only"], a: 1, r: "Weight-bearing exercise such as walking stimulates bone formation. Swimming is excellent for fitness but is not weight-bearing." },
{ q: "Which woman has the highest risk of osteoporosis?", o: ["A 30-year-old obese athlete", "A 65-year-old thin, postmenopausal smoker on long-term prednisone", "A 45-year-old who drinks milk daily", "A 25-year-old pregnant woman"], a: 1, r: "Postmenopausal estrogen loss, thin frame, smoking and long-term corticosteroid use are all major risk factors." },
{ q: "A woman with osteoporosis is being discharged. Which home-safety teaching is most important?", o: ["Use throw rugs to soften falls", "Install grab bars and night lights and remove loose rugs", "Keep rooms dim to save energy", "Wear slippers without backs"], a: 1, r: "Fractures in osteoporosis usually follow falls. Removing trip hazards, adding night lights and grab bars, and wearing supportive shoes reduce fall risk." },
{ q: "Which finding is typical of osteoarthritis rather than rheumatoid arthritis?", o: ["Morning stiffness lasting 2 hours", "Heberden's nodes on the distal finger joints", "Symmetric swelling of the wrists", "Positive anti-CCP"], a: 1, r: "Heberden's (DIP) and Bouchard's (PIP) nodes are bony enlargements typical of OA. Prolonged morning stiffness, symmetry and anti-CCP suggest RA." },
{ q: "Which findings support a diagnosis of rheumatoid arthritis? (Select all that apply.)", o: ["Symmetric involvement of small hand joints", "Morning stiffness more than 1 hour", "Fatigue and low-grade fever", "Pain only after prolonged walking, relieved by rest", "Positive rheumatoid factor", "Ulnar deviation of the fingers"], a: [0, 1, 2, 4, 5], s: true, r: "RA is a systemic autoimmune disease with symmetric small-joint involvement, prolonged morning stiffness, systemic symptoms, positive RF and deformities such as ulnar deviation. Pain with activity relieved by rest is typical of OA." },
{ q: "A patient with RA is starting methotrexate. Which statement shows understanding?", o: ["\"I can drink alcohol in moderation.\"", "\"I will have regular blood counts and liver tests.\"", "\"I can stop folic acid if I feel well.\"", "\"Methotrexate is safe in pregnancy.\""], a: 1, r: "Methotrexate can cause bone marrow suppression and hepatotoxicity, so CBC and liver tests are monitored. Alcohol is avoided, folic acid reduces side effects, and the drug is teratogenic." },
{ q: "Before starting a TNF inhibitor such as etanercept, which test is required?", o: ["Tuberculosis screening", "Bone density scan", "Serum uric acid", "Thyroid scan"], a: 0, r: "TNF inhibitors suppress immunity and can reactivate latent tuberculosis, so a TB test is done before starting therapy." },
{ q: "A patient with RA has morning stiffness. Which measure is most helpful?", o: ["Apply ice packs on waking", "Take a warm shower in the morning", "Stay in bed until noon", "Do vigorous exercise immediately on waking"], a: 1, r: "Heat relaxes muscles and reduces stiffness; a warm shower or bath in the morning helps. Cold is better for acutely inflamed hot joints." },
{ q: "After a posterior-approach total hip replacement, which action by the patient indicates a need for more teaching?", o: ["Using a raised toilet seat", "Keeping a pillow between the legs", "Crossing the legs while sitting", "Using a long-handled reacher"], a: 2, r: "Crossing the legs adducts the hip past the midline and can cause dislocation. Raised seats, abduction pillows and reachers help avoid excessive flexion and adduction." },
{ q: "On day 1 after hip replacement, the patient suddenly reports severe hip pain and the leg looks shorter and rotated. The nurse suspects:", o: ["Normal postoperative pain", "Hip dislocation", "Wound infection", "DVT"], a: 1, r: "Sudden pain with shortening and rotation of the leg indicates prosthesis dislocation, which must be reported immediately." },
{ q: "Which position restriction applies after a posterior total hip replacement?", o: ["Avoid hip flexion greater than 90 degrees", "Keep the hip flexed at 120 degrees", "Encourage internal rotation", "Sit in low, soft chairs"], a: 0, r: "Flexion beyond 90°, adduction past midline and internal rotation increase the risk of posterior dislocation." },
{ q: "What is the main purpose of a continuous passive motion (CPM) machine after total knee replacement?", o: ["Prevent infection", "Promote joint range of motion and prevent stiffness", "Reduce blood loss", "Immobilize the knee"], a: 1, r: "CPM moves the knee through a set range of motion to improve flexion, reduce stiffness and promote circulation." },
{ q: "Which measures reduce DVT risk after joint replacement? (Select all that apply.)", o: ["Ankle pump exercises", "Prescribed low-molecular-weight heparin", "Sequential compression devices", "Pillows under the knees for long periods", "Early ambulation", "Keeping the patient on bed rest for 1 week"], a: [0, 1, 2, 4], s: true, r: "Ankle pumps, anticoagulants, compression devices and early ambulation prevent venous stasis. Prolonged knee pillows and bed rest promote stasis and contractures." },
{ q: "A patient's muscle strength is graded 3/5. This means the patient can:", o: ["Not move the muscle at all", "Move against gravity but not against resistance", "Move against full resistance", "Only show a flicker of contraction"], a: 1, r: "Grade 3 is full movement against gravity without resistance. Grade 5 is normal strength against full resistance; 0 is no contraction." },
{ q: "After a knee arthroscopy, which finding should the nurse report?", o: ["Mild discomfort at the incision", "Toes cool, pale and numb on the operated leg", "Small amount of drainage on dressing", "Patient requests ice pack"], a: 1, r: "Cool, pale, numb toes indicate neurovascular compromise and must be reported. Mild discomfort and slight drainage are expected." },
{ q: "Which laboratory result is most consistent with acute inflammation such as osteomyelitis or active RA?", o: ["Elevated ESR and CRP", "Low uric acid", "Normal WBC", "Low alkaline phosphatase"], a: 0, r: "ESR and CRP are nonspecific markers that rise with inflammation and infection and are used to monitor response to treatment." }
]
}});

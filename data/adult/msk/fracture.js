NS.reg("adult", "msk", "fracture", {
intro: {
  en: "A **fracture** is a break in the continuity of a bone. It happens when the bone is exposed to more force than it can absorb — from **direct blows, crushing, twisting, sudden muscle contraction** — or with minimal force when the bone is weakened by disease (**pathological fracture**). A fracture is never only a bone injury: surrounding **muscles, vessels, nerves and skin** may also be damaged, which is why the **neurovascular assessment** is central to nursing care.",
  ar: "**الكسر** انقطاع في استمرارية العظم. يحدث عندما يتعرض العظم لقوة أكبر مما يتحمل — من **الضربات المباشرة أو السحق أو الالتواء أو الانقباض العضلي المفاجئ** — أو بقوة بسيطة عندما يكون العظم ضعيفاً بالمرض (**كسر مرضي**). والكسر ليس إصابة عظم فقط: قد تتضرر **العضلات والأوعية والأعصاب والجلد** المحيطة، لذا **التقييم العصبي الوعائي** محور الرعاية."
},
sections: [
{ h: { en: "Types of fractures", ar: "أنواع الكسور" }, b: [
  { t: "table", h: ["Type", "Description"], r: [
    ["**Complete**", "Break across the entire cross-section; fragments usually displaced"],
    ["**Incomplete**", "Break through only part of the bone, e.g., **greenstick** (one side breaks, other bends — children)"],
    ["**Closed (simple)**", "Skin intact"],
    ["**Open (compound)**", "Bone breaks through the skin or wound communicates with the fracture — **high risk of infection/osteomyelitis**; graded I (clean wound < 1 cm) to III (extensive soft tissue damage)"],
    ["**Transverse / oblique / spiral**", "Straight across / at an angle / twisting around the shaft (spiral in a non-walking child → suspect abuse)"],
    ["**Comminuted**", "Bone splintered into **three or more fragments**"],
    ["**Compression**", "Bone compressed — **vertebrae** (osteoporosis)"],
    ["**Impacted**", "One fragment driven into another"],
    ["**Depressed**", "Fragments driven inward (skull, face)"],
    ["**Avulsion**", "Fragment pulled off by a ligament or tendon"],
    ["**Pathological**", "Through diseased bone (osteoporosis, tumor, metastases, Paget's)"],
    ["**Stress (fatigue)**", "Repeated stress — athletes, soldiers"],
    ["**Displaced / non-displaced**", "Fragments out of / in normal alignment"]],
    ar: { h: ["النوع", "الوصف"], r: [
    ["**كامل**", "عبر المقطع كله"], ["**غير كامل**", "جزء من العظم مثل **الغصن الأخضر** عند الأطفال"],
    ["**مغلق**", "الجلد سليم"], ["**مفتوح**", "العظم يخترق الجلد — **خطر عالٍ للعدوى والتهاب العظم**"],
    ["**عرضي / مائل / حلزوني**", "الحلزوني عند طفل لا يمشي ← يُشك بالإساءة"], ["**مفتت**", "**ثلاث قطع أو أكثر**"],
    ["**انضغاطي**", "**الفقرات** (الهشاشة)"], ["**منغرز**", "قطعة داخل أخرى"], ["**منخسف**", "للداخل (الجمجمة والوجه)"],
    ["**قلعي**", "قطعة يسحبها رباط أو وتر"], ["**مرضي**", "في عظم مريض"], ["**إجهادي**", "من الضغط المتكرر"],
    ["**منزاح / غير منزاح**", "خارج / ضمن الاستقامة"]] } }
]},
{ h: { en: "Clinical manifestations and emergency care", ar: "المظاهر السريرية والإسعاف" }, b: [
  { t: "cards", items: [
    { i: "alert", en: "Pain & tenderness", d: "Severe, increased by movement; muscle spasm", ar: "ألم وإيلام يزداد بالحركة وتشنج العضلات" },
    { i: "x", en: "Loss of function", d: "Abnormal movement (false motion)", ar: "فقدان الوظيفة وحركة غير طبيعية" },
    { i: "bone", en: "Deformity", d: "Angulation, rotation, **shortening** (muscle spasm overrides fragments)", ar: "تشوه: انحراف، دوران، **قِصر**" },
    { i: "hand", en: "Crepitus", d: "Grating — **do not test for it deliberately**", ar: "طقطقة — **لا تختبرها عمداً**" },
    { i: "drop", en: "Swelling & ecchymosis", d: "Bleeding into tissues; may appear hours later", ar: "تورم وكدمة" } ] },
  { t: "flow", steps: [
    { en: "**Primary survey (ABCDE)**: airway, breathing, circulation — control external bleeding; assess for **shock** (pelvis and femur fractures can lose 1–3 L of blood)", ar: "**المسح الأولي**: المجرى والتنفس والدوران، إيقاف النزف، تقييم **الصدمة** (الحوض والفخذ قد يفقدان 1–3 لتر)" },
    { en: "**Immobilize before moving** — \"**splint them where they lie**\"; include the **joints above and below** the fracture; support the limb gently", ar: "**التثبيت قبل التحريك** — جبيرة تشمل **المفصلين فوق وتحت** الكسر" },
    { en: "**Open fracture**: cover with a **sterile dressing**; **do not push bone back** or irrigate in the field; give tetanus prophylaxis and IV antibiotics in hospital", ar: "**الكسر المفتوح**: غطاء **معقم** و**لا تُرجع العظم**؛ لقاح الكزاز والمضادات في المستشفى" },
    { en: "**Neurovascular check before and after splinting**; remove rings/jewelry before swelling", ar: "**فحص عصبي وعائي قبل وبعد التجبير** وإزالة الخواتم" },
    { en: "Elevate (if no compartment syndrome), apply ice wrapped in cloth, give analgesia", ar: "الرفع والثلج الملفوف والمسكنات" } ] }
]},
{ h: { en: "Bone healing", ar: "التئام العظم" }, b: [
  { t: "cycle", center: "Stages of|bone healing", steps: [
    { en: "**Hematoma formation** (1–3 days): bleeding forms a clot; inflammation", ar: "**تكون الورم الدموي** (1–3 أيام)" },
    { en: "**Granulation / fibrocartilage formation** (3 days – 2 weeks): fibroblasts and new vessels; soft callus", ar: "**النسيج الحبيبي والغضروفي** (3 أيام–أسبوعان)" },
    { en: "**Callus formation** (2–6 weeks): cartilage and woven bone bridge the gap — visible on X-ray", ar: "**تكون الدشبذ** (2–6 أسابيع) — يظهر بالأشعة" },
    { en: "**Ossification** (3 weeks – 6 months): callus replaced by mature bone; fracture clinically united", ar: "**التعظم** (3 أسابيع–6 أشهر)" },
    { en: "**Consolidation & remodeling** (months – 1 year+): excess bone removed, normal shape restored", ar: "**إعادة التشكيل** (أشهر–سنة)" } ] },
  { t: "compare", cols: [
    { h: { en: "Factors that promote healing", ar: "عوامل تعزز الالتئام" }, en: ["Immobilization of fragments", "Good blood supply", "Adequate nutrition (protein, calcium, vitamins C & D)", "Weight bearing when allowed", "Young age"], ar: ["تثبيت القطع", "تروية جيدة", "تغذية كافية", "حمل الوزن عند السماح", "صغر السن"] },
    { h: { en: "Factors that delay healing", ar: "عوامل تؤخر الالتئام" }, en: ["Excessive movement / poor immobilization", "**Infection**, extensive soft tissue damage", "Poor blood supply (e.g., femoral neck, scaphoid)", "**Smoking**, diabetes, steroids, NSAIDs (long-term)", "Malnutrition, older age, bone loss (osteoporosis)"], ar: ["الحركة الزائدة", "**العدوى** وتلف الأنسجة الرخوة", "ضعف التروية (عنق الفخذ)", "**التدخين** والسكري والكورتيزون", "سوء التغذية وكبر السن والهشاشة"] } ] }
]},
{ h: { en: "Medical and surgical management", ar: "العلاج الطبي والجراحي" }, b: [
  { t: "p", en: "Management follows **three R's**: **Reduction** (restoring alignment), **Retention/immobilization** (keeping fragments in place) and **Rehabilitation** (restoring function).",
    ar: "يتبع العلاج **ثلاث مراحل**: **الرد** (إرجاع الاستقامة)، **التثبيت** (إبقاء القطع في مكانها)، و**التأهيل** (استعادة الوظيفة)." },
  { t: "table", h: ["Method", "Description / nursing points"], r: [
    ["**Closed reduction**", "Manipulation and manual traction without opening the skin, under anesthesia/sedation; then cast/splint; X-ray confirms alignment"],
    ["**Open reduction & internal fixation (ORIF)**", "Surgery with plates, screws, rods, nails; allows early mobilization; risk of infection"],
    ["**Cast**", "Plaster or fiberglass; see cast care below"],
    ["**Splint / brace**", "Allows for swelling; removable for skin checks"],
    ["**Traction**", "Pulling force to reduce, align and immobilize fractures and **reduce muscle spasm**. **Skin traction** (e.g., **Buck's extension** — short-term, weight usually ≤ 3–4.5 kg) or **skeletal traction** (pin/wire through bone — heavier weights, longer periods)"],
    ["**External fixator**", "Pins through bone connected to an external frame — for open/comminuted fractures; allows wound care; **pin-site care**"],
    ["**Rehabilitation**", "Physiotherapy, ROM of unaffected joints, isometric exercises, mobility aids, gradual weight bearing (non → partial → full)"]],
    ar: { h: ["الطريقة", "الوصف / نقاط تمريضية"], r: [
    ["**الرد المغلق**", "تحريك وشد يدوي بدون فتح الجلد تحت التخدير ثم جبس"],
    ["**الرد المفتوح والتثبيت الداخلي**", "جراحة بصفائح ومسامير وقضبان؛ حركة مبكرة؛ خطر عدوى"],
    ["**الجبس**", "جبس أو ألياف زجاجية"],
    ["**الجبيرة / الدعامة**", "تسمح بالتورم وتُنزع لفحص الجلد"],
    ["**الشد**", "قوة سحب للرد والتثبيت و**تقليل التشنج**. **الجلدي** (مثل **باك** — قصير المدى ووزن قليل) أو **الهيكلي** (مسمار عبر العظم — وزن أكبر ومدة أطول)"],
    ["**المثبت الخارجي**", "مسامير عبر العظم موصولة بإطار خارجي؛ **العناية بالمسامير**"],
    ["**التأهيل**", "العلاج الطبيعي وتمارين المفاصل السليمة ووسائل المشي وحمل الوزن التدريجي"]] } },
  { t: "compare", cols: [
    { h: { en: "Cast care", ar: "العناية بالجبس" }, en: [
      "Wet plaster takes **24–72 h to dry**: leave **uncovered**, turn every 2 h, support on pillows; handle with **palms, not fingertips** (dents → pressure areas)",
      "**Elevate above heart level** for the first 24–48 h + ice to reduce swelling",
      "**Neurovascular checks** frequently; report **pain unrelieved by analgesia, burning, numbness, tightness, pale/cold/blue fingers or toes**",
      "**Mark drainage** on the cast with pen and time",
      "Report **foul odor, hot spot, drainage** (infection/pressure ulcer)",
      "**Never insert objects** to scratch; keep cast **dry** (plastic cover when showering); petal rough edges",
      "Exercise unaffected joints; isometric exercises inside the cast"],
      ar: ["الجبس المبلول يحتاج **24–72 ساعة** ليجف: **مكشوف**، يُقلب كل ساعتين، يُمسك **براحة اليد لا بالأصابع**", "**رفع فوق مستوى القلب** مع الثلج", "**فحص عصبي وعائي** متكرر والإبلاغ عن **الألم غير المستجيب والحرقة والخدر والضيق والأصابع الباردة الزرقاء**", "**تحديد البقع** بالقلم والوقت", "الإبلاغ عن **الرائحة والبقعة الحارة والإفرازات**", "**لا تدخل أشياء للحك** وأبقه **جافاً**", "تمارين المفاصل السليمة والتمارين الساكنة"] },
    { h: { en: "Traction care", ar: "العناية بالشد" }, en: [
      "**Weights hang freely** — not on the bed or floor; ropes in pulley grooves, knots away from pulleys",
      "**Do not remove or lift weights** (never for skeletal traction) unless ordered",
      "Maintain **body alignment** and **counter-traction** (body weight, foot of bed elevated as ordered)",
      "**Skin traction**: check skin under the straps, bony prominences, heel; neurovascular status; peroneal nerve (foot drop)",
      "**Skeletal traction/external fixator**: **pin-site care** per protocol (e.g., chlorhexidine), watch for redness, purulent drainage, loosening",
      "Prevent immobility complications: deep breathing, skin care, bowel care, DVT prophylaxis"],
      ar: ["**الأثقال معلقة بحرية** والحبال في البكرات", "**لا ترفع الأثقال** (أبداً في الهيكلي) إلا بأمر", "الحفاظ على **الاستقامة** و**الشد المعاكس**", "**الجلدي**: فحص الجلد تحت الأشرطة والكعب والعصب الشظوي", "**الهيكلي**: **العناية بالمسامير** ومراقبة الاحمرار والقيح والارتخاء", "منع مضاعفات قلة الحركة"] } ] }
]},
{ h: { en: "Specific fractures", ar: "كسور خاصة" }, b: [
  { t: "table", h: ["Fracture", "Key points"], r: [
    ["**Hip (proximal femur)**", "Older adults (osteoporosis, falls), more in women; leg **shortened, externally rotated**, groin/hip pain. **Intracapsular (femoral neck)** — blood supply disrupted → **avascular necrosis**, nonunion → often hemiarthroplasty; **extracapsular (intertrochanteric)** → internal fixation. Pre-op **Buck's traction** to reduce spasm; surgery within 24–48 h; post-op: prevent dislocation (if prosthesis), DVT, pneumonia, pressure injuries, **delirium**; early mobilization; high mortality in the first year"],
    ["**Colles' fracture (distal radius)**", "Fall on an **outstretched hand**; \"dinner fork\" deformity; elevate, finger exercises, check median nerve"],
    ["**Pelvic fracture**", "High-energy trauma; risk of **massive hemorrhage**, bladder/urethral injury (blood at meatus — **no urinary catheter until urethra checked**), bowel injury"],
    ["**Vertebral fracture**", "Compression in osteoporosis (pain, height loss) or trauma — **spinal cord injury risk**: log-roll, spinal precautions"],
    ["**Rib fracture**", "Pain limits breathing → atelectasis, pneumonia; multiple ribs → flail chest; analgesia and deep breathing"]],
    ar: { h: ["الكسر", "النقاط الأساسية"], r: [
    ["**كسر الورك**", "كبار السن (الهشاشة والسقوط)؛ الساق **قصيرة ودائرة للخارج**. **داخل المحفظة (عنق الفخذ)** — خطر **النخر اللاوعائي** وعدم الالتئام ← استبدال؛ **خارج المحفظة** ← تثبيت داخلي. قبل العملية **شد باك**؛ وبعدها منع الخلع والخثار والالتهاب الرئوي وقرح الفراش و**الهذيان**؛ وفيات عالية في السنة الأولى"],
    ["**كسر كوليس (الكعبرة البعيدة)**", "السقوط على **يد ممدودة**؛ تشوه «الشوكة»؛ الرفع وتمارين الأصابع"],
    ["**كسر الحوض**", "رضّ شديد؛ خطر **نزف كبير** وإصابة المثانة والإحليل (دم على الفتحة — **لا قسطرة قبل فحص الإحليل**)"],
    ["**كسر الفقرات**", "انضغاطي في الهشاشة أو رضّي — **خطر إصابة الحبل الشوكي**: التقليب ككتلة"],
    ["**كسر الأضلاع**", "الألم يحد التنفس ← انخماص والتهاب رئوي"]] } }
]},
{ h: { en: "Complications", ar: "المضاعفات" }, b: [
  { t: "warn", en: "**Compartment syndrome** — increased pressure within a closed fascial compartment (from swelling, bleeding, or a tight cast/bandage) compresses vessels and nerves; muscle and nerve die within **4–6 hours**. **Early signs: pain out of proportion to the injury, unrelieved by opioids, increased by passive stretching of the muscles; paresthesia; tense, swollen compartment.** Pulselessness and paralysis are late. **Actions: notify immediately; loosen dressings / bivalve or split the cast; keep the limb at heart level (do not elevate, no ice); prepare for fasciotomy.**",
    ar: "**متلازمة الحيز** — ارتفاع الضغط داخل حيز لفافي مغلق (من التورم أو النزف أو الجبس الضيق) يضغط الأوعية والأعصاب، فتموت العضلة والعصب خلال **4–6 ساعات**. **العلامات المبكرة: ألم غير متناسب لا يستجيب للأفيونات ويزداد بالتمدد السلبي، تنميل، حيز متوتر متورم.** غياب النبض والشلل متأخران. **الإجراء: إبلاغ فوري، فك الضماد أو شق الجبس، الطرف بمستوى القلب (بلا رفع ولا ثلج)، والتحضير لشق اللفافة.**" },
  { t: "warn", en: "**Fat embolism syndrome** — fat globules from the marrow enter the circulation, usually **24–72 hours after long-bone (femur) or pelvic fractures**. Signs: **sudden dyspnea, tachypnea, hypoxemia, confusion/restlessness**, tachycardia, fever, and **petechiae on the chest, axillae, neck and conjunctiva**. Actions: **high Fowler's, oxygen**, notify, possible ventilation; prevent by **early immobilization** and minimal movement of the fracture.",
    ar: "**متلازمة الانصمام الدهني** — دخول قطرات دهن من النقي للدم، عادة **بعد 24–72 ساعة من كسر العظام الطويلة (الفخذ) أو الحوض**. العلامات: **ضيق نفس مفاجئ، تسرع تنفس، نقص أكسجة، تشوش**، تسرع نبض، حمى، و**نقط نزفية على الصدر والإبط والرقبة والملتحمة**. الإجراء: **جلوس وأكسجين** وإبلاغ؛ والوقاية **بالتثبيت المبكر**." },
  { t: "table", h: ["Complication", "Key points"], r: [
    ["**Hypovolemic shock**", "Pelvis, femur, multiple fractures; monitor vital signs, Hb"],
    ["**DVT / pulmonary embolism**", "Immobility, venous injury; calf pain/swelling; sudden dyspnea; prevent with anticoagulants, compression, exercises"],
    ["**Infection / osteomyelitis**", "Open fractures, surgery, pins"],
    ["**Delayed union / nonunion / malunion**", "Slow healing / failure to heal / healing in a bad position (deformity)"],
    ["**Avascular necrosis**", "Bone death from loss of blood supply — femoral head, scaphoid"],
    ["**Complex regional pain syndrome**", "Burning pain, swelling, skin changes after injury"],
    ["**Nerve and vessel injury**", "e.g., radial nerve (humerus) → wrist drop; peroneal nerve → foot drop"],
    ["**Complications of immobility**", "Pressure injuries, pneumonia, constipation, urinary stasis/stones, muscle atrophy, contractures"]],
    ar: { h: ["المضاعفة", "النقاط"], r: [
    ["**صدمة نقص الحجم**", "الحوض والفخذ والكسور المتعددة"],
    ["**الخثار والانصمام الرئوي**", "قلة الحركة؛ ألم الساق؛ ضيق نفس مفاجئ"],
    ["**العدوى والتهاب العظم**", "الكسور المفتوحة والجراحة والمسامير"],
    ["**تأخر / عدم / سوء الالتئام**", "بطء / فشل / التئام بوضع خاطئ"],
    ["**النخر اللاوعائي**", "موت العظم لفقد التروية — رأس الفخذ والزورقي"],
    ["**متلازمة الألم الناحي المعقد**", "ألم حارق وتورم وتغير الجلد"],
    ["**إصابة الأعصاب والأوعية**", "العصب الكعبري ← هبوط الرسغ؛ الشظوي ← هبوط القدم"],
    ["**مضاعفات قلة الحركة**", "قرح الفراش، الالتهاب الرئوي، الإمساك، الحصى، الضمور، التقفع"]] } }
]},
{ h: { en: "Nursing management", ar: "الرعاية التمريضية" }, b: [
  { t: "table", h: ["Nursing diagnosis", "Interventions"], r: [
    ["**Acute pain** r/t fracture, muscle spasm, edema", "Immobilize, elevate, ice 20 min intermittently (first 24–48 h), analgesics on time, muscle relaxants; reassess"],
    ["**Risk for peripheral neurovascular dysfunction**", "**Neurovascular checks** (hourly first 24 h then per order), report 6 P's, avoid tight bandages"],
    ["**Impaired physical mobility**", "ROM of unaffected joints, isometric exercises, transfer and **crutch/walker teaching**, physiotherapy"],
    ["**Risk for infection**", "Aseptic wound and pin care, antibiotics, tetanus, temperature"],
    ["**Risk for impaired skin integrity**", "Turn, pad bony prominences, skin under casts/straps, heel protection"],
    ["**Self-care deficit**", "Assist with hygiene, dressing; adaptive devices"],
    ["**Risk for constipation**", "Fluids, fiber, mobility, stool softeners (opioids)"],
    ["**Deficient knowledge**", "Cast care, exercises, weight-bearing limits, signs of complications, follow-up"]],
    ar: { h: ["التشخيص التمريضي", "التدخلات"], r: [
    ["**ألم حاد**", "التثبيت والرفع والثلج والمسكنات ومرخيات العضلات"],
    ["**خطر اضطراب عصبي وعائي**", "**فحوصات عصبية وعائية** والإبلاغ عن العلامات الست"],
    ["**ضعف الحركة**", "تمارين المفاصل السليمة والساكنة وتعليم **العكازات والمشاية**"],
    ["**خطر العدوى**", "عناية معقمة بالجرح والمسامير ومضادات وكزاز"],
    ["**خطر تلف الجلد**", "التقليب وحماية البروزات والجلد تحت الجبس"],
    ["**عجز الرعاية الذاتية**", "المساعدة وأدوات معينة"],
    ["**خطر الإمساك**", "سوائل وألياف وحركة وملينات"],
    ["**نقص المعرفة**", "العناية بالجبس والتمارين وحدود الحمل والمضاعفات"]] } },
  { t: "list", en: [
    "**Crutch walking**: top of crutch **2–3 finger-widths (≈ 4–5 cm) below the axilla**, elbows flexed **20–30°**, **weight on hands, not axillae**; non-weight-bearing = **three-point gait**; stairs: **\"up with the good, down with the bad\"**",
    "**Cane**: held on the **unaffected (strong) side**, moved together with the affected leg",
    "**Walker**: move walker forward, step with the **affected leg first**, then the good leg"],
    ar: [
    "**العكازات**: أعلى العكاز **أسفل الإبط بعرض 2–3 أصابع**، المرفق مثني **20–30 درجة**، **الوزن على اليدين لا الإبطين**؛ بدون تحميل = **المشية الثلاثية**؛ الدرج: **«للأعلى بالسليمة وللأسفل بالمصابة»**",
    "**العصا**: باليد **في الجهة السليمة** وتتحرك مع الساق المصابة",
    "**المشاية**: تقديمها ثم **الساق المصابة أولاً** ثم السليمة"] }
]}
],
questions: [
{ q: "Which type of fracture breaks through the skin?", o: ["Closed", "Open (compound)", "Greenstick", "Impacted"], a: 1, r: "In an open fracture the bone penetrates the skin or a wound communicates with the fracture, increasing infection risk." },
{ q: "A fracture in which the bone is broken into three or more fragments is:", o: ["Transverse", "Comminuted", "Greenstick", "Avulsion"], a: 1, r: "Comminuted fractures are splintered into multiple fragments." },
{ q: "A fracture through bone weakened by metastatic cancer after minimal trauma is called:", o: ["Stress fracture", "Pathological fracture", "Avulsion fracture", "Compound fracture"], a: 1, r: "Pathological fractures occur in diseased bone with little force." },
{ q: "Which signs and symptoms are typical of a fracture? (Select all that apply.)", o: ["Pain and tenderness", "Deformity and shortening", "Swelling and ecchymosis", "Loss of function", "Improved mobility"], a: [0, 1, 2, 3], s: true, r: "Pain, deformity, swelling, bruising, crepitus and loss of function are classic." },
{ q: "At an accident scene, a man has an obvious fracture of the lower leg. What is the correct first-aid principle?", o: ["Straighten the leg forcefully", "Splint the limb as it lies, including joints above and below", "Ask him to walk", "Massage the area"], a: 1, r: "Immobilizing as found prevents further damage to tissues, vessels and nerves." },
{ q: "How should an open fracture be managed in the emergency phase?", o: ["Push the bone back under the skin", "Cover with a sterile dressing and immobilize", "Leave the wound exposed", "Apply hot compresses"], a: 1, r: "Sterile coverage limits contamination; reducing the bone may drag debris into the wound." },
{ q: "Which fractures can cause significant blood loss and hypovolemic shock? (Select all that apply.)", o: ["Pelvic fracture", "Femoral shaft fracture", "Multiple fractures", "Finger fracture"], a: [0, 1, 2], s: true, r: "Pelvic and femoral fractures can lose liters of blood into tissues." },
{ q: "What is the first stage of bone healing?", o: ["Callus formation", "Hematoma formation", "Remodeling", "Ossification"], a: 1, r: "A hematoma forms within hours and starts the inflammatory healing response." },
{ q: "Which factors delay fracture healing? (Select all that apply.)", o: ["Smoking", "Infection", "Poor immobilization", "Diabetes", "Good nutrition"], a: [0, 1, 2, 3], s: true, r: "These impair blood supply or stability; good nutrition promotes healing." },
{ q: "A newly applied plaster cast should be handled:", o: ["With fingertips", "With the palms of the hands", "Only by the patient", "Placed on a hard surface"], a: 1, r: "Fingertips leave dents that create pressure points under the cast." },
{ q: "Which positioning is correct for a limb with a new cast (no compartment syndrome)?", o: ["Below heart level", "Elevated above heart level on pillows", "Hanging off the bed", "Flat on a hard surface"], a: 1, r: "Elevation reduces edema and pain." },
{ q: "A patient with a cast reports a burning sensation under the cast. The nurse should:", o: ["Reassure that it is normal", "Report it — it may indicate a pressure area", "Insert a pencil to relieve it", "Apply heat"], a: 1, r: "Localized burning suggests pressure that can lead to skin breakdown." },
{ q: "A patient's cast has a foul odor and a warm area. The nurse suspects:", o: ["Normal healing", "Infection under the cast", "Muscle spasm", "Allergy"], a: 1, r: "Odor and hot spots suggest infection or pressure ulcer beneath the cast." },
{ q: "A patient has severe pain in the casted forearm unrelieved by morphine and pain when the fingers are passively extended. What is the FIRST action?", o: ["Elevate the arm higher and apply ice", "Notify the provider immediately and prepare to loosen/bivalve the cast", "Give more morphine", "Reassess in 2 hours"], a: 1, p: true, r: "These are early signs of compartment syndrome — a limb-threatening emergency." },
{ q: "In suspected compartment syndrome, the limb should be positioned:", o: ["Elevated above the heart", "At heart level", "Below the heart", "In traction"], a: 1, r: "Elevation reduces arterial inflow and perfusion pressure; heart level is recommended." },
{ q: "Which is a LATE sign of compartment syndrome?", o: ["Pain on passive stretch", "Paresthesia", "Absent pulse", "Tense compartment"], a: 2, r: "Pulselessness appears only after severe damage; earlier signs must be recognized." },
{ q: "Forty-eight hours after a femur fracture, the patient becomes confused, short of breath with SpO₂ 85% and has petechiae on the chest. The nurse suspects:", o: ["Pneumonia", "Fat embolism syndrome", "Myocardial infarction", "Anxiety"], a: 1, r: "Fat embolism typically appears 24–72 h after long-bone fractures with hypoxemia, confusion and petechiae." },
{ q: "What is the priority action for suspected fat embolism?", o: ["High Fowler's position and oxygen", "Massage the leg", "Encourage ambulation", "Give a laxative"], a: 0, p: true, r: "Hypoxemia is the main threat; oxygen and upright positioning come first while notifying the provider." },
{ q: "Which actions are correct for a patient in skin traction? (Select all that apply.)", o: ["Weights hang freely", "Ropes are in the pulley grooves", "Check skin under the traction straps", "Rest the weights on the floor at night", "Maintain body alignment"], a: [0, 1, 2, 4], s: true, r: "Free-hanging weights, proper ropes, skin checks and alignment ensure effective, safe traction." },
{ q: "The main purpose of Buck's traction before hip surgery is to:", o: ["Cure the fracture", "Reduce muscle spasm and pain and immobilize the leg", "Prevent infection", "Lengthen the leg permanently"], a: 1, r: "Skin traction relieves spasm and stabilizes the fracture until surgery." },
{ q: "Which pin-site finding should be reported?", o: ["Small amount of clear drainage", "Purulent drainage, redness and loosening of the pin", "Slight crust", "Dry site"], a: 1, r: "These are signs of pin-tract infection that may progress to osteomyelitis." },
{ q: "An older woman fell and her left leg is shortened and externally rotated. The nurse suspects:", o: ["Ankle sprain", "Hip fracture", "Knee dislocation", "Muscle cramp"], a: 1, r: "Shortening and external rotation are classic signs of a proximal femur fracture." },
{ q: "Why are femoral neck (intracapsular) fractures prone to avascular necrosis?", o: ["They heal too quickly", "The blood supply to the femoral head is often disrupted", "They always become infected", "Because of age only"], a: 1, r: "Vessels supplying the femoral head run along the neck and are easily damaged." },
{ q: "A patient with a pelvic fracture has blood at the urethral meatus. Which order should the nurse question?", o: ["Insert an indwelling urinary catheter", "Monitor vital signs", "Give analgesia", "Prepare for imaging"], a: 0, r: "Blood at the meatus suggests urethral injury; catheter insertion could worsen it until the urethra is evaluated." },
{ q: "A Colles' fracture usually results from:", o: ["A fall on an outstretched hand", "Direct blow to the hip", "Twisting of the ankle", "Diving into water"], a: 0, r: "Falling onto an outstretched hand fractures the distal radius." },
{ q: "Which crutch instructions are correct? (Select all that apply.)", o: ["Top of crutch about 2–3 finger-widths below the axilla", "Elbows flexed 20–30°", "Bear weight on the hands, not the axillae", "Lean on the axillary pads to rest", "Going up stairs: good leg first"], a: [0, 1, 2, 4], s: true, r: "Leaning on the axillae compresses the brachial plexus (crutch palsy)." },
{ q: "In which hand should a patient with a weak right leg hold a cane?", o: ["Right", "Left", "Either", "Both"], a: 1, r: "The cane is held on the strong side to support the weak leg." },
{ q: "Which exercise helps maintain muscle strength under a cast?", o: ["Isometric exercises", "Running", "Passive ROM of the casted joint", "Jumping"], a: 0, r: "Isometric contractions maintain muscle tone without joint movement." },
{ q: "Fracture healing that occurs with the bone in a deformed position is called:", o: ["Nonunion", "Delayed union", "Malunion", "Avascular necrosis"], a: 2, r: "Malunion is healing in a faulty alignment." },
{ q: "A patient with a humeral shaft fracture cannot extend the wrist ('wrist drop'). This suggests injury to the:", o: ["Radial nerve", "Ulnar nerve", "Median nerve", "Peroneal nerve"], a: 0, r: "The radial nerve winds around the humeral shaft and controls wrist extension." },
{ q: "Which nursing measures prevent complications of immobility in a patient in traction? (Select all that apply.)", o: ["Deep breathing and coughing", "Skin care and turning within limits", "Fluids and fiber", "Ankle exercises of the unaffected leg", "Restricting fluids to reduce urination"], a: [0, 1, 2, 3], s: true, r: "These prevent pneumonia, pressure injuries, constipation and DVT; restricting fluids increases stones and constipation." },
{ q: "How long does a plaster cast usually take to dry completely?", o: ["10 minutes", "24–72 hours", "2 weeks", "1 hour"], a: 1, r: "Plaster dries over 24–72 hours depending on thickness; fiberglass dries much faster." },
{ q: "A patient with a leg cast should keep it dry because:", o: ["Water makes it heavier only", "Wet plaster weakens and wet padding causes skin maceration and infection", "Water causes compartment syndrome", "It is not important"], a: 1, r: "Moisture softens plaster and damages skin under the cast." },
{ q: "Which complication is most associated with the first year after hip fracture in older adults?", o: ["High mortality and loss of independence", "Cataract", "Hearing loss", "Hypoglycemia"], a: 0, r: "Hip fractures carry significant mortality and functional decline, especially without early mobilization." },
{ q: "Two days after hip surgery, an 82-year-old patient becomes confused. The nurse should consider:", o: ["Normal aging", "Delirium from hypoxia, infection, pain, drugs, dehydration or retention", "Dementia only", "Malingering"], a: 1, r: "Postoperative delirium is common in older adults and has treatable causes." },
{ q: "Which assessment is the PRIORITY after application of a long leg cast?", o: ["Neurovascular status of the toes", "Patient's appetite", "Color of the cast", "Hair growth"], a: 0, p: true, r: "Circulation and nerve function distal to the cast must be monitored to detect compartment syndrome." },
{ q: "A patient on partial weight bearing asks what it means. The best answer is:", o: ["\"Put no weight on the leg.\"", "\"Put only part of your body weight on the leg as instructed by the physiotherapist.\"", "\"Put full weight on it.\"", "\"Jump on the leg.\""], a: 1, r: "Partial weight bearing allows a specified portion of body weight on the affected limb." },
{ q: "Which reduction method involves surgery with plates and screws?", o: ["Closed reduction", "Open reduction and internal fixation", "Skin traction", "Splinting"], a: 1, r: "ORIF exposes the fracture and fixes it internally, allowing early mobilization." },
{ q: "Why should rings be removed from the fingers of a patient with an arm fracture?", o: ["To prevent loss", "Swelling may make them act as tourniquets", "For X-ray only", "It is hospital policy only"], a: 1, r: "Progressive swelling can constrict circulation to the fingers." },
{ q: "A spiral fracture of the femur in a 9-month-old who cannot walk should raise suspicion of:", o: ["Osteoporosis", "Child abuse", "Stress fracture", "Normal play injury"], a: 1, r: "Spiral fractures from twisting in non-ambulatory children are red flags for abuse." }
]
});

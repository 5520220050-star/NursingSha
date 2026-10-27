NS.reg("adult", "msk", "osteoporosis", {
intro: {
  en: "**Osteoporosis** is a metabolic bone disease in which **bone resorption exceeds bone formation**, producing **low bone mass and deterioration of bone structure**. Bones become porous, brittle and fragile, so they **fracture with minimal trauma** — most often the **vertebrae, hip and wrist**. It is called a **\"silent disease\"** because there are no symptoms until a fracture occurs.",
  ar: "**هشاشة العظام** مرض استقلابي فيه **يتجاوز هدم العظم بناءه**، فتقل **كتلة العظم ويتدهور بناؤه**. تصبح العظام مسامية هشة **تنكسر بأقل رضّ** — غالباً **الفقرات والورك والرسغ**. تسمى **«المرض الصامت»** لأنها بلا أعراض حتى يحدث الكسر."
},
sections: [
{ h: { en: "Bone remodeling and pathophysiology", ar: "إعادة بناء العظم والفيزيولوجيا المرضية" }, b: [
  { t: "p", en: "Bone is constantly remodeled: **osteoclasts resorb** bone and **osteoblasts build** it. Peak bone mass is reached around **age 30**; afterward, bone loss slowly exceeds formation. In women, **estrogen deficiency after menopause** accelerates resorption — bone loss is fastest in the **first 5–10 years after menopause**. Calcium, vitamin D, parathyroid hormone, calcitonin, estrogen/testosterone and weight-bearing activity all regulate this balance.",
    ar: "العظم يُعاد بناؤه باستمرار: **الخلايا الناقضة تهدم** و**الخلايا البانية تبني**. تصل الكتلة العظمية لذروتها قرابة **سن 30** ثم يتجاوز الهدم البناء ببطء. عند النساء **نقص الإستروجين بعد سن اليأس** يسرّع الهدم — أسرع فقد في **أول 5–10 سنوات بعد اليأس**. الكالسيوم وفيتامين D وهرمون الجار درقية والكالسيتونين والهرمونات الجنسية والنشاط الحامل للوزن تنظم هذا التوازن." },
  { t: "compare", cols: [
    { h: { en: "Primary osteoporosis", ar: "الأولي" }, en: ["Postmenopausal (estrogen loss)", "Age-related (senile) in both sexes", "Most common type"], ar: ["بعد سن اليأس", "مرتبط بالعمر في الجنسين", "الأشيع"] },
    { h: { en: "Secondary osteoporosis", ar: "الثانوي" }, en: ["**Medications**: long-term **corticosteroids** (most common drug cause), heparin, anticonvulsants, excess thyroid hormone, PPIs, aromatase inhibitors", "**Diseases**: hyperparathyroidism, hyperthyroidism, Cushing's, diabetes, rheumatoid arthritis, malabsorption, kidney/liver disease", "**Prolonged immobility**"], ar: ["**الأدوية**: **الكورتيزون** المزمن (أشيع سبب دوائي)، الهيبارين، مضادات الصرع، الثايروكسين الزائد، مثبطات المضخة", "**الأمراض**: فرط الجار درقية والدرقية، كوشينغ، السكري، الروماتويد، سوء الامتصاص، الكلى والكبد", "**قلة الحركة الطويلة**"] } ] }
]},
{ h: { en: "Risk factors", ar: "عوامل الخطر" }, b: [
  { t: "compare", cols: [
    { h: { en: "Non-modifiable", ar: "غير قابلة للتعديل" }, en: ["**Female sex**", "**Advanced age**", "**Menopause** (natural or surgical, early)", "**White or Asian ethnicity**", "**Small, thin body frame**", "**Family history** (parent with hip fracture)"], ar: ["**الأنثى**", "**تقدم العمر**", "**سن اليأس** (خاصة المبكر)", "**العرق الأبيض والآسيوي**", "**البنية الصغيرة النحيفة**", "**التاريخ العائلي**"] },
    { h: { en: "Modifiable", ar: "قابلة للتعديل" }, en: ["**Low calcium and vitamin D intake**", "**Sedentary lifestyle**, lack of weight-bearing exercise", "**Smoking**", "**Excess alcohol** and **caffeine**", "**Low body weight** / eating disorders", "High-sodium, high-protein (excess) or carbonated drinks (phosphates)", "Lack of sun exposure"], ar: ["**نقص الكالسيوم وفيتامين D**", "**الخمول** وقلة التمارين الحاملة للوزن", "**التدخين**", "**الكحول** و**الكافيين** الزائد", "**نقص الوزن**", "الملح الزائد والمشروبات الغازية", "قلة التعرض للشمس"] } ] }
]},
{ h: { en: "Manifestations and diagnosis", ar: "المظاهر والتشخيص" }, b: [
  { t: "cards", items: [
    { i: "bone", en: "Fractures", d: "**Vertebral compression fractures** (often with minimal stress — coughing, lifting), **hip**, **Colles' (wrist)**", ar: "**كسور الفقرات الانضغاطية** والورك والرسغ" },
    { i: "scale", en: "Loss of height", d: "Several cm over time from vertebral collapse", ar: "نقص الطول عدة سنتيمترات" },
    { i: "people", en: "Kyphosis (dowager's hump)", d: "Forward curvature of the thoracic spine; protruding abdomen; may reduce lung capacity", ar: "**الحدبة** — انحناء الظهر للأمام وبروز البطن وتقلص سعة الرئة" },
    { i: "alert", en: "Back pain", d: "Sudden acute pain after compression fracture, then chronic", ar: "ألم الظهر الحاد ثم المزمن" } ] },
  { t: "table", h: ["Test", "Notes"], r: [
    ["**DXA (dual-energy X-ray absorptiometry)**", "**Gold standard** — measures **bone mineral density (BMD)** of hip and spine"],
    ["**T-score** (compared with healthy young adult)", "**≥ −1.0 normal; −1.0 to −2.5 osteopenia; ≤ −2.5 osteoporosis**"],
    ["**FRAX tool**", "Estimates 10-year fracture probability using risk factors"],
    ["**X-ray**", "Detects osteoporosis only after **25–40% bone loss**; shows fractures"],
    ["**Labs**", "Serum **calcium**, phosphorus, **vitamin D**, alkaline phosphatase, PTH, TSH, kidney function — usually normal in primary osteoporosis; exclude secondary causes"],
    ["**Quantitative ultrasound (heel)**", "Screening only"]],
    ar: { h: ["الفحص", "ملاحظات"], r: [
    ["**مقياس كثافة العظم DXA**", "**المعيار الذهبي** لقياس **الكثافة المعدنية** للورك والعمود الفقري"],
    ["**T-score**", "**≥ −1 طبيعي؛ −1 إلى −2.5 قلة العظم؛ ≤ −2.5 هشاشة**"],
    ["**أداة FRAX**", "احتمال الكسر خلال 10 سنوات"],
    ["**الأشعة**", "تظهر بعد فقد **25–40%** من العظم"],
    ["**التحاليل**", "الكالسيوم والفوسفور و**فيتامين D** والفوسفاتاز والجار درقية — غالباً طبيعية؛ لاستبعاد الأسباب الثانوية"],
    ["**الموجات فوق الصوتية للكعب**", "للمسح فقط"]] } }
]},
{ h: { en: "Prevention and nutrition", ar: "الوقاية والتغذية" }, b: [
  { t: "list", en: [
    "**Build peak bone mass early** — adequate calcium and exercise in childhood and adolescence",
    "**Calcium**: about **1000 mg/day** for adults, **1200 mg/day for women > 50 and men > 70**; food sources: milk, yogurt, cheese, sardines and salmon with bones, broccoli, kale, fortified foods",
    "**Vitamin D**: **800–1000 IU/day** in older adults; sunlight, fatty fish, egg yolk, fortified milk",
    "**Weight-bearing exercise** (walking, stair climbing, dancing) at least 30 min most days, plus resistance/strength training and balance exercises (tai chi) — **swimming is not weight bearing**",
    "**Stop smoking**, limit **alcohol** and **caffeine**, avoid excessive sodium and soft drinks",
    "**Fall prevention**: remove rugs, good lighting, grab bars, non-slip mats, proper footwear, review sedating medications, vision checks, hip protectors"],
    ar: [
    "**بناء ذروة الكتلة مبكراً** — كالسيوم وتمارين في الطفولة والمراهقة",
    "**الكالسيوم**: نحو **1000 ملغ/يوم**، و**1200 للنساء فوق 50 والرجال فوق 70**؛ مصادره: الحليب واللبن والجبن والسردين والبروكلي",
    "**فيتامين D**: **800–1000 وحدة/يوم** لكبار السن؛ الشمس والسمك الدهني والبيض",
    "**تمارين حاملة للوزن** (المشي، الدرج) 30 دقيقة معظم الأيام وتمارين المقاومة والتوازن — **السباحة ليست حاملة للوزن**",
    "**ترك التدخين** وتقليل **الكحول** و**الكافيين** والملح والمشروبات الغازية",
    "**منع السقوط**: إزالة السجاد، إضاءة جيدة، مقابض، حذاء مناسب، مراجعة المهدئات، فحص النظر"] },
  { t: "tip", en: "**Calcium carbonate** should be taken **with meals** (needs stomach acid); **calcium citrate** can be taken with or without food. Take **no more than 500–600 mg at one time** for best absorption. Calcium is taken **with vitamin D** (needed for absorption). Watch for constipation and kidney stones.",
    ar: "**كربونات الكالسيوم** تؤخذ **مع الطعام** (تحتاج حامض المعدة)؛ **سترات الكالسيوم** مع الطعام أو بدونه. **لا أكثر من 500–600 ملغ في المرة**. يؤخذ **مع فيتامين D**. انتبه للإمساك والحصى." }
]},
{ h: { en: "Drug therapy", ar: "العلاج الدوائي" }, b: [
  { t: "table", h: ["Drug", "Action and nursing points"], r: [
    ["**Bisphosphonates** — alendronate (Fosamax), risedronate, ibandronate (oral); **zoledronic acid** (IV yearly)", "**Inhibit osteoclast bone resorption** — first-line. **Oral: take on an empty stomach in the morning with a full glass (240 mL) of plain water; remain upright (sitting/standing) for at least 30 min (60 min for ibandronate) and do not eat, drink or take other medications during that time** — prevents **esophagitis/ulcers**. Side effects: GI upset, esophageal irritation, **osteonecrosis of the jaw** (dental check before), atypical femur fracture; ensure normal calcium and vitamin D"],
    ["**SERMs** — raloxifene", "Estrogen-like effect on bone; ↓ vertebral fractures, ↓ breast cancer risk; **risk of DVT/PE**, hot flashes; avoid in history of clots; stop before prolonged immobility"],
    ["**Calcitonin** (nasal spray or injection)", "Inhibits osteoclasts; **analgesic effect for acute vertebral fracture pain**; alternate nostrils; nasal irritation"],
    ["**Denosumab** (SC every 6 months)", "Monoclonal antibody inhibiting osteoclast formation; hypocalcemia risk; do not stop abruptly (rebound fractures)"],
    ["**Teriparatide** (PTH analogue, daily SC)", "**Anabolic — stimulates new bone formation**; severe osteoporosis; max 2 years; orthostatic hypotension, hypercalcemia"],
    ["**Hormone therapy (estrogen)**", "Prevents bone loss but not first-line due to risks (breast cancer, stroke, VTE)"]],
    ar: { h: ["الدواء", "التأثير ونقاط التمريض"], r: [
    ["**البايفوسفونيت** — ألندرونيت (فوساماكس)، ريزدرونيت؛ **زوليدرونيك** وريدياً سنوياً", "**تثبط هدم العظم** — الخط الأول. **فموياً: صباحاً على معدة فارغة مع كوب ماء كامل (240 مل)؛ يبقى جالساً أو واقفاً 30 دقيقة على الأقل ولا يأكل أو يشرب أو يأخذ أدوية خلالها** — لمنع **التهاب المريء وقرحه**. الآثار: اضطراب هضمي، **نخر عظم الفك** (فحص الأسنان قبله)، كسور الفخذ غير النمطية"],
    ["**SERMs** — رالوكسيفين", "تأثير إستروجيني على العظم؛ **خطر الجلطات**؛ يُتجنب مع تاريخ الجلطات"],
    ["**الكالسيتونين**", "يثبط الهدم؛ **مسكن لألم كسور الفقرات**؛ بالتناوب بين فتحتي الأنف"],
    ["**دينوسوماب** (كل 6 أشهر)", "جسم مضاد يثبط الخلايا الناقضة؛ خطر نقص الكالسيوم؛ لا يُوقف فجأة"],
    ["**تيريباراتايد**", "**بانٍ — يحفز تكوين عظم جديد**؛ للهشاشة الشديدة؛ سنتان كحد أقصى"],
    ["**العلاج الهرموني**", "يمنع الفقد لكن ليس خطاً أول بسبب مخاطره"]] } }
]},
{ h: { en: "Nursing management", ar: "الرعاية التمريضية" }, b: [
  { t: "table", h: ["Nursing diagnosis", "Interventions"], r: [
    ["**Acute pain** r/t vertebral compression fracture", "Bed rest for a short period in supine or side-lying, firm mattress, analgesics, heat, **back brace**; gradual mobility; **vertebroplasty / kyphoplasty** (bone cement injection) may relieve pain"],
    ["**Risk for injury (falls, fractures)**", "Fall-prevention environment, assistive devices, hip protectors, **avoid bending forward, twisting and heavy lifting**, safe transfers; **gentle handling** — fractures can occur with turning"],
    ["**Impaired physical mobility**", "Weight-bearing and strengthening exercises as tolerated, physiotherapy, good posture (back extension exercises, avoid flexion exercises)"],
    ["**Constipation**", "Immobility, calcium, opioids, ileus after vertebral fracture — fluids, fiber, activity"],
    ["**Disturbed body image**", "Kyphosis — clothing adjustments, support"],
    ["**Deficient knowledge**", "Diet, supplements, medication administration, exercise, home safety, follow-up DXA"]],
    ar: { h: ["التشخيص", "التدخلات"], r: [
    ["**ألم حاد** من كسر الفقرات", "راحة قصيرة على الظهر أو الجنب، مرتبة صلبة، مسكنات، حرارة، **مشد ظهر**؛ **رأب الفقرة** بالإسمنت"],
    ["**خطر السقوط والكسور**", "بيئة آمنة ووسائل مساعدة و**تجنب الانحناء للأمام والالتواء وحمل الأثقال**؛ **التعامل بلطف**"],
    ["**ضعف الحركة**", "تمارين حاملة للوزن وتقوية ووضعية جيدة"],
    ["**الإمساك**", "سوائل وألياف ونشاط"],
    ["**اضطراب صورة الجسم**", "تعديل الملابس والدعم"],
    ["**نقص المعرفة**", "الغذاء والمكملات والأدوية والتمارين والأمان"]] } },
  { t: "mnem", k: "CALCIUM", title: "Osteoporosis risk factors", rows: [
    ["C", "**Calcium** & vitamin D deficiency", "نقص الكالسيوم وفيتامين D"],
    ["A", "**Age** (older) and **alcohol**", "العمر والكحول"],
    ["L", "**Low** body weight / small frame", "نقص الوزن والبنية الصغيرة"],
    ["C", "**Corticosteroids** (long-term)", "الكورتيزون المزمن"],
    ["I", "**Inactivity** / immobility", "الخمول وقلة الحركة"],
    ["U", "**Unhealthy habits**: smoking, excess caffeine and soft drinks", "العادات الضارة: التدخين والكافيين والمشروبات الغازية"],
    ["M", "**Menopause** and female sex; family history; white/Asian ethnicity", "سن اليأس والأنثى والوراثة والعرق"]] }
]}
],
questions: [
{ q: "Osteoporosis results primarily from:", o: ["Bone formation exceeding resorption", "Bone resorption exceeding bone formation", "Infection of bone", "Excess vitamin D"], a: 1, r: "Osteoclastic resorption outpaces osteoblastic formation." },
{ q: "Why is osteoporosis called a 'silent disease'?", o: ["It causes deafness", "It has no symptoms until a fracture occurs", "It only occurs during sleep", "It is painless after fracture"], a: 1, r: "Bone loss is asymptomatic until a fragility fracture." },
{ q: "Which are risk factors for osteoporosis? (Select all that apply.)", o: ["Postmenopausal status", "Long-term corticosteroid therapy", "Smoking", "Small, thin body frame", "Obesity with high weight-bearing activity"], a: [0, 1, 2, 3], s: true, r: "Higher body weight and weight-bearing activity are protective." },
{ q: "Which medication is the most common drug cause of secondary osteoporosis?", o: ["Corticosteroids", "Paracetamol", "Amoxicillin", "Insulin"], a: 0, r: "Long-term glucocorticoids reduce bone formation and increase resorption." },
{ q: "Which is the gold-standard test for diagnosing osteoporosis?", o: ["Plain X-ray", "DXA scan", "Serum calcium", "Bone biopsy"], a: 1, r: "DXA measures bone mineral density at hip and spine." },
{ q: "A DXA T-score of −2.8 indicates:", o: ["Normal bone density", "Osteopenia", "Osteoporosis", "Osteomalacia"], a: 2, r: "A T-score ≤ −2.5 defines osteoporosis." },
{ q: "A T-score of −1.7 indicates:", o: ["Normal", "Osteopenia (low bone mass)", "Severe osteoporosis", "Paget's disease"], a: 1, r: "Between −1.0 and −2.5 is osteopenia." },
{ q: "Which manifestations suggest osteoporosis in an older woman? (Select all that apply.)", o: ["Loss of height", "Kyphosis (dowager's hump)", "Acute back pain after lifting", "Wrist fracture after a minor fall", "Fever and chills"], a: [0, 1, 2, 3], s: true, r: "These reflect vertebral compression and fragility fractures." },
{ q: "Which fractures are most common in osteoporosis?", o: ["Skull, ribs, scapula", "Vertebrae, hip, wrist", "Fingers, toes, clavicle", "Patella only"], a: 1, r: "These are the classic fragility fracture sites." },
{ q: "Which exercise is BEST for preventing osteoporosis?", o: ["Swimming", "Walking", "Bed exercises only", "Cycling on a stationary bike while lying"], a: 1, r: "Weight-bearing exercise stimulates bone formation; swimming is not weight bearing." },
{ q: "Which foods are good sources of calcium? (Select all that apply.)", o: ["Yogurt", "Sardines with bones", "Broccoli and kale", "Cheese", "Cola drinks"], a: [0, 1, 2, 3], s: true, r: "Carbonated drinks with phosphate may impair calcium balance." },
{ q: "Why is vitamin D given with calcium supplements?", o: ["It reduces pain", "It is needed for intestinal calcium absorption", "It prevents constipation", "It increases appetite"], a: 1, r: "Vitamin D enhances calcium absorption." },
{ q: "How should calcium carbonate be taken?", o: ["On an empty stomach", "With meals", "With a bisphosphonate", "Only at bedtime with milk"], a: 1, r: "Calcium carbonate requires stomach acid for absorption." },
{ q: "Which instructions are correct for oral alendronate? (Select all that apply.)", o: ["Take first thing in the morning on an empty stomach", "Take with a full glass of plain water", "Remain upright for at least 30 minutes", "Take with orange juice and breakfast", "Do not take other medications for 30 minutes"], a: [0, 1, 2, 4], s: true, r: "Food and drinks other than water greatly reduce absorption; staying upright prevents esophagitis." },
{ q: "A patient taking alendronate reports heartburn and pain on swallowing. The nurse suspects:", o: ["Expected effect", "Esophageal irritation/esophagitis", "Hypercalcemia", "Myocardial infarction"], a: 1, p: true, r: "Esophagitis is a key adverse effect, especially if not taken upright with water." },
{ q: "Before starting a bisphosphonate, a patient should have a dental examination because of the risk of:", o: ["Tooth whitening", "Osteonecrosis of the jaw", "Gingival hyperplasia", "Dry mouth"], a: 1, r: "Bisphosphonates are associated with jaw osteonecrosis, especially after dental surgery." },
{ q: "Raloxifene is contraindicated in a woman with a history of:", o: ["Hypertension", "Deep vein thrombosis", "Migraine", "Asthma"], a: 1, r: "Raloxifene increases thromboembolism risk." },
{ q: "Which medication provides pain relief for acute vertebral compression fractures in addition to inhibiting bone resorption?", o: ["Calcitonin", "Alendronate", "Raloxifene", "Teriparatide"], a: 0, r: "Calcitonin has an analgesic effect on fracture pain." },
{ q: "When using intranasal calcitonin, the patient should:", o: ["Use the same nostril daily", "Alternate nostrils daily", "Sniff vigorously", "Take with food"], a: 1, r: "Alternating nostrils reduces nasal irritation." },
{ q: "Which drug stimulates new bone formation (anabolic)?", o: ["Teriparatide", "Alendronate", "Denosumab", "Raloxifene"], a: 0, r: "Teriparatide is a PTH analogue that builds bone." },
{ q: "Which daily calcium intake is recommended for a 60-year-old woman?", o: ["200 mg", "1200 mg", "5000 mg", "50 mg"], a: 1, r: "Women over 50 need about 1200 mg/day." },
{ q: "Which body mechanics teaching is important for a patient with osteoporosis?", o: ["Bend forward at the waist to lift objects", "Avoid bending forward, twisting and heavy lifting", "Perform sit-ups daily", "Lift heavy weights quickly"], a: 1, r: "Spinal flexion and twisting increase vertebral fracture risk." },
{ q: "Which home safety measures reduce fracture risk in an older adult with osteoporosis? (Select all that apply.)", o: ["Remove loose rugs", "Install grab bars in the bathroom", "Use night-lights", "Wear well-fitting non-slip shoes", "Use dim lighting in hallways"], a: [0, 1, 2, 3], s: true, r: "Fall prevention is central; dim lighting increases falls." },
{ q: "A woman 2 years after menopause asks why she is at risk for osteoporosis. The nurse explains:", o: ["\"Estrogen loss accelerates bone resorption.\"", "\"Menopause increases calcium absorption.\"", "\"Your bones are thicker after menopause.\"", "\"Menopause has no effect on bone.\""], a: 0, r: "Estrogen deficiency increases osteoclast activity." },
{ q: "Which lifestyle changes help prevent osteoporosis? (Select all that apply.)", o: ["Stop smoking", "Limit alcohol", "Reduce caffeine", "Avoid sunlight completely", "Regular weight-bearing exercise"], a: [0, 1, 2, 4], s: true, r: "Sun exposure helps vitamin D synthesis." },
{ q: "A patient with osteoporosis has sudden severe back pain after lifting a box. The nurse suspects:", o: ["Kidney stone", "Vertebral compression fracture", "Muscle strain only", "Pancreatitis"], a: 1, r: "Minor stress can cause vertebral compression fractures." },
{ q: "Plain X-ray detects osteoporosis only after bone loss of approximately:", o: ["1–2%", "25–40%", "90%", "5%"], a: 1, r: "Radiographs are insensitive; DXA is required for early detection." },
{ q: "Which procedure injects bone cement into a collapsed vertebra to relieve pain?", o: ["Laminectomy", "Vertebroplasty / kyphoplasty", "Arthroscopy", "Discectomy"], a: 1, r: "Cement stabilizes the fracture and reduces pain." },
{ q: "Kyphosis in osteoporosis may cause which complication?", o: ["Reduced lung capacity and respiratory problems", "Hypertension", "Hearing loss", "Diabetes"], a: 0, r: "Spinal curvature compresses the thoracic cavity." },
{ q: "A nurse teaching a patient on denosumab should emphasize:", o: ["Stopping abruptly when feeling better", "Not missing doses because stopping causes rapid bone loss and fractures", "Taking it with milk daily", "It increases DVT risk"], a: 1, r: "Discontinuation causes rebound bone loss and vertebral fractures." },
{ q: "Which statement shows the patient understands bisphosphonate therapy?", o: ["\"I'll lie down after taking it to avoid dizziness.\"", "\"I'll take it with my morning coffee.\"", "\"I'll take it with water and wait 30 minutes before breakfast while sitting up.\"", "\"I'll take it with my calcium tablet.\""], a: 2, r: "Correct administration maximizes absorption and avoids esophagitis." },
{ q: "Which population has the highest risk of osteoporosis?", o: ["Young Black men", "Thin, older white or Asian women", "Obese adolescent boys", "Athletic young women"], a: 1, r: "Female sex, age, thin frame and ethnicity are major risk factors." }
]
});

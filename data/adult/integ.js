NS.reg("adult", { integ: {
summary: {
  en: "Skin questions test three things: **describing lesions correctly**, **treating dermatitis and itching safely** (topical steroids, avoiding triggers), and recognizing **autoimmune skin diseases** — psoriasis, lupus and pemphigus — with their key signs and drug precautions.",
  ar: "أسئلة الجلد تختبر ثلاثة أمور: **وصف الآفات بدقة**، **علاج التهاب الجلد والحكة بأمان** (الكورتيزون الموضعي وتجنب المحفزات)، ومعرفة **أمراض الجلد المناعية** — الصدفية والذئبة والفقاع — بعلاماتها واحتياطات أدويتها."
},
sections: [
{ h: { en: "Assessment of the integumentary system", ar: "تقييم الجهاز الجلدي" }, b: [
  { t: "table", h: ["Primary lesion", "Description", "Example"], r: [
    ["**Macule / patch**", "Flat color change, <1 cm / >1 cm", "Freckle, vitiligo"],
    ["**Papule / plaque**", "Raised solid, <1 cm / >1 cm flat-topped", "Wart / psoriasis"],
    ["**Nodule**", "Solid, deeper, 1–2 cm", "Lipoma"],
    ["**Vesicle / bulla**", "Fluid-filled, <1 cm / >1 cm", "Herpes, chickenpox / pemphigus, 2nd-degree burn"],
    ["**Pustule**", "Pus-filled", "Acne, impetigo"],
    ["**Wheal**", "Transient, raised, edematous, itchy", "Urticaria (hives), insect bite"]],
    ar: { h: ["الآفة الأولية", "الوصف", "مثال"], r: [
    ["**لطخة / رقعة**", "تغير لون مسطح، أقل/أكبر من 1 سم", "النمش، البهاق"],
    ["**حطاطة / لويحة**", "بارزة صلبة", "الثؤلول / الصدفية"],
    ["**عقيدة**", "صلبة وأعمق", "الورم الشحمي"],
    ["**حويصلة / فقاعة**", "مملوءة سائلاً، صغيرة/كبيرة", "الهربس / الفقاع"],
    ["**بثرة**", "مملوءة قيحاً", "حب الشباب، القوباء"],
    ["**شرى**", "بارزة وذمية عابرة حاكة", "الأرتيكاريا"]] } },
  { t: "cards", items: [
    { i: "lungs", en: "Cyanosis", d: "Check lips, oral mucosa, nail beds (dark skin: conjunctiva, palms)", ar: "الزرقة: الشفاه والأغشية والأظافر" },
    { i: "drop", en: "Jaundice", d: "Best seen in sclera", ar: "اليرقان: الأوضح في صلبة العين" },
    { i: "x", en: "Pallor", d: "Conjunctiva, nail beds, palms", ar: "الشحوب: الملتحمة والأظافر" },
    { i: "hand", en: "Turgor", d: "Pinch skin over sternum/clavicle in older adults", ar: "مرونة الجلد: فوق القص عند كبار السن" },
    { i: "bed", en: "Pressure-injury risk", d: "Braden scale — lower score = higher risk", ar: "خطر قرحة الفراش: مقياس برادن — الدرجة الأقل خطر أعلى" } ] },
  { t: "mnem", k: "ABCDE", title: "Warning signs of melanoma", rows: [
    ["A", "**Asymmetry**", "عدم التماثل"],
    ["B", "**Border** irregular/notched", "حواف غير منتظمة"],
    ["C", "**Color** varied (brown, black, red, blue)", "ألوان متعددة"],
    ["D", "**Diameter** > 6 mm", "قطر أكبر من 6 ملم"],
    ["E", "**Evolving** — change in size, shape, color, itching, bleeding", "تغيّر في الحجم أو الشكل أو اللون"] ] }
]},
{ h: { en: "Dermatitis", ar: "التهاب الجلد" }, b: [
  { t: "p", en: "Dermatitis (eczema) is inflammation of the skin causing **erythema, itching (pruritus), vesicles, weeping, crusting and, when chronic, lichenification** (thickened leathery skin from scratching).",
    ar: "التهاب الجلد (الإكزيما) يسبب **احمراراً وحكة وحويصلات ونزاً وقشوراً، ومع الإزمان تثخن الجلد** (جلد سميك جلدي من الحكّ)." },
  { t: "table", h: ["Type", "Cause / features"], r: [
    ["**Irritant contact dermatitis**", "Direct damage by chemicals, detergents, frequent hand washing; not immune-mediated"],
    ["**Allergic contact dermatitis**", "**Type IV (delayed, T-cell) hypersensitivity** — nickel, latex, cosmetics, plants; appears 24–48 h after exposure where the allergen touched the skin"],
    ["**Atopic dermatitis**", "Chronic, relapsing; linked to asthma & allergic rhinitis (atopy); flexural areas; dry, itchy skin"],
    ["**Seborrheic dermatitis**", "Greasy yellow scales on scalp (dandruff), eyebrows, nasolabial folds"]],
    ar: { h: ["النوع", "السبب / الملامح"], r: [
    ["**التهاب الجلد التماسي التهيجي**", "ضرر مباشر من المواد الكيمياوية والمنظفات وكثرة غسل اليدين، ليس مناعياً"],
    ["**التهاب الجلد التماسي التحسسي**", "**فرط حساسية النوع الرابع (متأخر)** — النيكل، اللاتكس، مستحضرات التجميل؛ يظهر بعد 24–48 ساعة في مكان التماس"],
    ["**التهاب الجلد التأتبي**", "مزمن متكرر مرتبط بالربو والحساسية، في ثنيات الجسم"],
    ["**التهاب الجلد الدهني**", "قشور صفراء دهنية في فروة الرأس والحاجبين"]] } },
  { t: "flow", steps: [
    { en: "**Identify and avoid the trigger** (patch testing for allergic contact dermatitis)", ar: "**معرفة المحفز وتجنبه** (اختبار الرقعة)" },
    { en: "Cool, wet compresses / soothing baths (e.g., colloidal oatmeal); pat dry", ar: "كمادات باردة رطبة وحمامات مهدئة، والتجفيف بالتربيت" },
    { en: "**Topical corticosteroids**: thin layer, as prescribed; emollients to restore barrier", ar: "**كورتيزون موضعي** بطبقة رقيقة، ومرطبات لإصلاح حاجز الجلد" },
    { en: "Oral antihistamines for itch; keep nails short; cotton clothing; avoid hot water & harsh soaps", ar: "مضادات الهستامين للحكة، أظافر قصيرة، ملابس قطنية، وتجنب الماء الحار والصابون القاسي" },
    { en: "Watch for **secondary infection** (pus, crusting, fever)", ar: "مراقبة **الالتهاب الثانوي**" } ] },
  { t: "warn", en: "Potent topical steroids used long-term (especially on the **face, groin, axillae** or under occlusion) cause **skin atrophy, striae, telangiectasia** and systemic absorption. Use the lowest effective strength for the shortest time.",
    ar: "الكورتيزون الموضعي القوي على المدى الطويل (خاصة على **الوجه والمغبن والإبط** أو تحت الضماد) يسبب **ترقق الجلد والتشققات وتوسع الشعيرات** وامتصاصاً جهازياً. استخدم أقل قوة لأقصر مدة." }
]},
{ h: { en: "Autoimmune skin disease", ar: "أمراض الجلد المناعية الذاتية" }, b: [
  { t: "compare", cols: [
    { h: { en: "Psoriasis", ar: "الصدفية" }, en: [
      "Chronic, immune-mediated; epidermal cells turn over **much faster** (days instead of ~4 weeks)",
      "**Silvery-white scaly plaques** on red base — elbows, knees, scalp, lower back",
      "**Auspitz sign** (pinpoint bleeding when scale removed); **Koebner phenomenon** (lesions at sites of trauma)",
      "Nail pitting; **psoriatic arthritis**",
      "Triggers: stress, infection, trauma, cold, some drugs; not contagious"],
      ar: ["مزمن مناعي؛ تجدد خلايا البشرة **أسرع بكثير** من الطبيعي", "**لويحات حمراء بقشور فضية** على المرفقين والركبتين وفروة الرأس", "**علامة أوسبيتز** (نقاط نزف عند إزالة القشرة)، **ظاهرة كوبنر** (آفات في مكان الجرح)", "تنقر الأظافر و**التهاب المفاصل الصدفي**", "المحفزات: التوتر، الالتهاب، البرد؛ غير معدٍ"] },
    { h: { en: "Systemic lupus erythematosus (SLE)", ar: "الذئبة الحمامية الجهازية" }, en: [
      "Autoimmune, multisystem; mostly **women of childbearing age**",
      "**Butterfly (malar) rash** across cheeks and nose; **photosensitivity**; discoid lesions; oral ulcers; alopecia",
      "Joint pain, fatigue, fever; **lupus nephritis**, pericarditis, anemia",
      "Labs: **ANA**, anti-dsDNA; ↓ complement during flares",
      "Avoid **sun** (sunscreen, protective clothing); hydroxychloroquine (**eye exams**), corticosteroids, immunosuppressants"],
      ar: ["مناعي متعدد الأجهزة، غالباً **نساء في سن الإنجاب**", "**طفح الفراشة** على الوجنتين والأنف، **حساسية الضوء**، قرح فموية، تساقط شعر", "ألم مفاصل، تعب، حمى؛ **التهاب الكلية الذئبي**", "التحاليل: **ANA** وanti-dsDNA", "تجنب **الشمس**؛ هيدروكسي كلوروكين (**فحص العين**) والكورتيزون"] },
    { h: { en: "Pemphigus vulgaris", ar: "الفقاع الشائع" }, en: [
      "Autoimmune antibodies attack the bonds between epidermal cells",
      "**Flaccid bullae** that rupture easily → large painful erosions; **oral lesions** often first",
      "**Positive Nikolsky sign** (skin sloughs with light pressure)",
      "Risk: **fluid & protein loss, infection/sepsis** (like burns)",
      "High-dose corticosteroids, immunosuppressants; gentle wound care, oral care, fluids, pain control"],
      ar: ["أجسام مضادة تهاجم الروابط بين خلايا البشرة", "**فقاعات رخوة** تنفجر بسهولة ← تقرحات مؤلمة؛ **آفات الفم** غالباً أولاً", "**علامة نيكولسكي إيجابية** (انسلاخ الجلد بضغط خفيف)", "الخطر: **فقدان السوائل والبروتين والعدوى** (مثل الحروق)", "كورتيزون بجرعات عالية، عناية لطيفة بالجروح والفم، سوائل وتسكين"] } ] },
  { t: "table", h: ["Psoriasis treatment", "Nursing point"], r: [
    ["Topical corticosteroids, **vitamin D analogs (calcipotriene)**, coal tar, salicylic acid", "Soften & remove scales first (bath), then apply; coal tar stains & causes photosensitivity"],
    ["**Phototherapy** (UVB, PUVA = psoralen + UVA)", "**Protective eyewear** during and for ~24 h after psoralen; avoid extra sun; ↑ skin-cancer risk"],
    ["Systemic: **methotrexate**, cyclosporine, biologics", "Methotrexate: CBC & liver tests, no alcohol, contraception; biologics: TB screening, infection risk"]],
    ar: { h: ["علاج الصدفية", "نقطة تمريضية"], r: [
    ["كورتيزون موضعي، **مشابهات فيتامين د**، القطران، حمض الساليسيليك", "إزالة القشور أولاً بالحمام ثم الدهن؛ القطران يلوّن ويسبب حساسية للضوء"],
    ["**العلاج الضوئي**", "**نظارات واقية** أثناءه ولمدة 24 ساعة بعد السورالين، وزيادة خطر سرطان الجلد"],
    ["جهازي: **ميثوتريكسات**، سيكلوسبورين، العلاجات الحيوية", "فحوصات الدم والكبد، لا كحول، فحص السل"]] } },
  { t: "tip", en: "Remember the **psychosocial** impact: visible skin disease often causes **disturbed body image**, social isolation and depression. Encourage expression of feelings and support groups.",
    ar: "تذكّر الأثر **النفسي الاجتماعي**: أمراض الجلد الظاهرة تسبب **اضطراب صورة الجسد** والعزلة والاكتئاب. شجع التعبير عن المشاعر ومجموعات الدعم." }
]}
],
questions: [
{ q: "A nurse documents a raised, fluid-filled lesion 1.5 cm in diameter. Which term is correct?", o: ["Vesicle", "Bulla", "Pustule", "Papule"], a: 1, r: "A fluid-filled lesion larger than 1 cm is a bulla; smaller than 1 cm is a vesicle. Pustules contain pus; papules are solid." },
{ q: "Which lesion is a transient, itchy, raised edematous area typical of urticaria?", o: ["Macule", "Wheal", "Nodule", "Plaque"], a: 1, r: "A wheal is a transient, raised, edematous, often itchy lesion seen in hives and insect bites." },
{ q: "Where is jaundice best assessed in a patient with dark skin?", o: ["Palms only", "Sclera", "Back", "Earlobes"], a: 1, r: "Jaundice is most reliably seen in the sclera and also the hard palate, especially in darker-skinned patients." },
{ q: "A mole is described as asymmetric, with irregular borders, multiple colors and 8 mm in diameter. What should the nurse do?", o: ["Reassure the patient it is benign", "Refer the patient for prompt evaluation for melanoma", "Apply a topical steroid", "Advise sun exposure to fade it"], a: 1, r: "Asymmetry, irregular border, color variation and diameter >6 mm are ABCDE warning signs of melanoma requiring prompt evaluation and biopsy." },
{ q: "A patient's Braden scale score is 10. The nurse interprets this as:", o: ["No risk for pressure injury", "High risk for pressure injury", "Mild risk only", "Normal for all adults"], a: 1, r: "On the Braden scale, lower scores indicate higher risk; a score of 10 indicates high risk requiring preventive measures." },
{ q: "A nurse develops itchy vesicles on both hands 2 days after starting to use a new brand of latex gloves. This reaction is best described as:", o: ["Type I immediate hypersensitivity", "Allergic contact dermatitis (type IV delayed hypersensitivity)", "Irritant dermatitis from friction", "Psoriasis flare"], a: 1, r: "Allergic contact dermatitis is a delayed T-cell (type IV) reaction appearing 24–48 hours after contact in the area exposed to the allergen." },
{ q: "What is the most important intervention for contact dermatitis?", o: ["Apply potent steroid to the face daily for months", "Identify and avoid the causative agent", "Use hot water to relieve itch", "Scrub the area with antibacterial soap"], a: 1, r: "Removing and avoiding the trigger is the key treatment; other measures relieve symptoms." },
{ q: "Which measures relieve pruritus in dermatitis? (Select all that apply.)", o: ["Cool, wet compresses", "Keep fingernails short", "Hot showers several times a day", "Oral antihistamines as prescribed", "Cotton clothing", "Wool sweaters"], a: [0, 1, 3, 4], s: true, r: "Cool compresses, short nails, antihistamines and soft cotton clothes reduce itching and injury. Hot water and wool aggravate itch and dryness." },
{ q: "A patient has used a potent topical corticosteroid on the face for 6 months. Which finding is a side effect?", o: ["Skin thickening", "Skin atrophy and telangiectasia", "Increased skin pigmentation only", "Hair loss on the scalp"], a: 1, r: "Long-term potent topical steroids thin the skin and cause atrophy, striae and visible dilated vessels, especially on the face and skin folds." },
{ q: "How should a topical corticosteroid cream be applied?", o: ["Thick layer covering normal skin too", "Thin layer to affected areas as prescribed", "Under airtight dressing on the face for days", "Only when skin is infected"], a: 1, r: "A thin film to affected skin minimizes absorption and adverse effects. Occlusion increases potency and is used only when ordered." },
{ q: "A child with atopic dermatitis is likely to have a history of:", o: ["Asthma or allergic rhinitis", "Psoriasis", "Lupus", "Diabetes insipidus"], a: 0, r: "Atopic dermatitis is part of the atopic triad with asthma and allergic rhinitis." },
{ q: "Thickened, leathery skin with exaggerated skin lines on a patient's wrists after months of scratching is called:", o: ["Lichenification", "Excoriation", "Atrophy", "Keloid"], a: 0, r: "Chronic scratching thickens the epidermis and accentuates skin markings — lichenification." },
{ q: "A patient with dermatitis now has yellow crusts, pus and a fever. The nurse suspects:", o: ["Normal healing", "Secondary bacterial infection", "Allergic reaction to emollient", "Psoriasis"], a: 1, r: "Scratched, broken skin is easily infected, commonly by Staphylococcus or Streptococcus. Pus, honey-colored crusts and fever indicate secondary infection." },
{ q: "Which description fits psoriasis?", o: ["Flaccid bullae in the mouth", "Silvery-white scales on red plaques over elbows and knees", "Butterfly rash on the face", "Greasy scales only behind the ears"], a: 1, r: "Psoriasis typically presents with well-demarcated red plaques covered by silvery scales on extensor surfaces, scalp and lower back." },
{ q: "When scales are removed from a psoriatic plaque, tiny bleeding points appear. This is called:", o: ["Nikolsky sign", "Auspitz sign", "Koebner phenomenon", "Darier sign"], a: 1, r: "Auspitz sign is pinpoint bleeding after scale removal, reflecting dilated capillaries under a thin epidermis." },
{ q: "A patient with psoriasis develops new plaques along a recent surgical incision. This is the:", o: ["Koebner phenomenon", "Auspitz sign", "Nikolsky sign", "Raynaud phenomenon"], a: 0, r: "Koebner phenomenon is the appearance of psoriatic lesions at sites of skin trauma." },
{ q: "A patient asks if psoriasis can spread to family members. The best response is:", o: ["\"Yes, avoid sharing towels.\"", "\"No, psoriasis is not contagious.\"", "\"Only during flares.\"", "\"Only to children.\""], a: 1, r: "Psoriasis is an immune-mediated, non-infectious disease and cannot be transmitted to others." },
{ q: "A patient receiving PUVA therapy for psoriasis should be taught to:", o: ["Avoid protective eyewear after psoralen", "Wear UV-protective sunglasses during treatment and for about 24 hours afterward", "Sunbathe the same day", "Stop all moisturizers permanently"], a: 1, r: "Psoralen makes the skin and eyes photosensitive; protective eyewear prevents cataracts and further sun exposure is avoided." },
{ q: "Which instructions are appropriate for a patient taking methotrexate for severe psoriasis? (Select all that apply.)", o: ["Avoid alcohol", "Have regular blood counts and liver tests", "Use reliable contraception", "Take double doses if a dose is missed", "Report sore throat or fever", "Stop folic acid supplements"], a: [0, 1, 2, 4], s: true, r: "Methotrexate is hepatotoxic, marrow-suppressing and teratogenic. Alcohol is avoided, labs are monitored, contraception is used and signs of infection are reported. Folic acid is often prescribed to reduce side effects." },
{ q: "Which triggers can worsen psoriasis? (Select all that apply.)", o: ["Emotional stress", "Streptococcal throat infection", "Skin trauma", "Cold, dry weather", "Moderate sunlight exposure"], a: [0, 1, 2, 3], s: true, r: "Stress, infections (especially streptococcal), trauma and cold dry weather can trigger flares. Moderate sunlight usually improves psoriasis." },
{ q: "A young woman has fatigue, joint pain, a red rash across both cheeks and nose, and her rash worsens in the sun. The nurse suspects:", o: ["Psoriasis", "Systemic lupus erythematosus", "Contact dermatitis", "Pemphigus"], a: 1, r: "A malar (butterfly) rash with photosensitivity, arthralgia and fatigue in a young woman suggests SLE." },
{ q: "Which laboratory test is the most sensitive screening test for SLE?", o: ["Rheumatoid factor", "Antinuclear antibody (ANA)", "Serum potassium", "Platelet count"], a: 1, r: "ANA is positive in almost all patients with SLE; anti-dsDNA is more specific." },
{ q: "Which teaching is most important for a patient with SLE?", o: ["Seek sun exposure daily for vitamin D", "Use sunscreen and protective clothing and avoid peak sun hours", "Stop corticosteroids suddenly when feeling well", "Avoid all exercise"], a: 1, r: "UV light can trigger cutaneous and systemic flares in SLE, so sun protection is essential." },
{ q: "A patient with SLE taking hydroxychloroquine should have which regular examination?", o: ["Hearing test", "Eye (retinal) examination", "Bone marrow biopsy", "Colonoscopy"], a: 1, r: "Hydroxychloroquine can cause retinal toxicity, so regular ophthalmologic exams are required." },
{ q: "In a patient with SLE, which finding suggests lupus nephritis?", o: ["Proteinuria and rising creatinine with edema", "Dry skin", "Increased appetite", "Hair growth"], a: 0, r: "Renal involvement causes proteinuria, hematuria, edema, hypertension and rising creatinine and is a major cause of morbidity in SLE." },
{ q: "A patient has painful oral erosions and flaccid blisters that rupture easily; light pressure on normal-looking skin causes it to slough. The nurse documents:", o: ["Positive Auspitz sign", "Positive Nikolsky sign", "Koebner phenomenon", "Negative Nikolsky sign"], a: 1, r: "A positive Nikolsky sign — separation of the epidermis with slight pressure — is characteristic of pemphigus vulgaris." },
{ q: "What is the PRIORITY concern for a patient with extensive pemphigus vulgaris?", o: ["Body image", "Fluid loss and infection", "Knowledge deficit", "Hair loss"], a: 1, p: true, r: "Large denuded areas lose fluid, electrolytes and protein and are portals for infection and sepsis, similar to burns." },
{ q: "Which nursing measures are appropriate for a patient with pemphigus vulgaris? (Select all that apply.)", o: ["Gentle handling and lifting with a sheet", "Frequent mouth care with a soft swab and bland mouthwash", "Monitor fluid and electrolyte balance", "Vigorous scrubbing of crusts", "Strict aseptic technique for wound care", "Adhesive tape directly on the skin"], a: [0, 1, 2, 4], s: true, r: "Gentle handling, oral care, fluid monitoring and asepsis protect fragile skin and prevent infection. Scrubbing and adhesive tape strip the epidermis." },
{ q: "The main treatment for pemphigus vulgaris is:", o: ["High-dose systemic corticosteroids and immunosuppressants", "Antifungal creams only", "Coal tar", "Phototherapy alone"], a: 0, r: "Pemphigus is an autoimmune disease treated with systemic corticosteroids and immunosuppressive agents to stop antibody-mediated blistering." },
{ q: "A patient on long-term high-dose prednisone for an autoimmune skin disease should be monitored for: (Select all that apply.)", o: ["Hyperglycemia", "Infection", "Osteoporosis", "Hypotension from fluid loss", "Peptic ulcer", "Mood changes"], a: [0, 1, 2, 4, 5], s: true, r: "Corticosteroids cause hyperglycemia, immunosuppression, bone loss, GI ulcers and mood changes; they cause fluid retention and hypertension, not hypotension." },
{ q: "Before applying topical medication to psoriatic plaques, the nurse should:", o: ["Leave scales in place", "Remove scales gently after a soaking bath", "Apply over dry thick scales", "Scrape plaques with a blade"], a: 1, r: "Softening and gently removing scales allows topical agents to penetrate. Aggressive scraping causes trauma and can trigger new lesions (Koebner)." },
{ q: "A patient with psoriasis says, \"I don't go out anymore; people stare at me.\" The most appropriate nursing diagnosis is:", o: ["Impaired skin integrity", "Disturbed body image and social isolation", "Risk for bleeding", "Acute confusion"], a: 1, r: "The statement reflects psychosocial impact — disturbed body image and social isolation — which nurses address through listening, education and support groups." },
{ q: "Greasy yellow scales on the scalp, eyebrows and nasolabial folds suggest:", o: ["Seborrheic dermatitis", "Psoriasis only", "Pemphigus", "Lupus"], a: 0, r: "Seborrheic dermatitis affects areas rich in sebaceous glands and appears as greasy yellowish scales (dandruff)." },
{ q: "A cleaner develops dry, cracked, red hands from frequent detergent use, with no allergy on patch testing. This is:", o: ["Irritant contact dermatitis", "Allergic contact dermatitis", "Atopic dermatitis", "Urticaria"], a: 0, r: "Irritant contact dermatitis results from direct chemical or physical damage to the skin barrier and is not immune-mediated." },
{ q: "Which patient statement indicates correct understanding of skin-cancer prevention?", o: ["\"I tan between 11 a.m. and 3 p.m.\"", "\"I use broad-spectrum sunscreen and reapply every 2 hours outdoors.\"", "\"Tanning beds are safe.\"", "\"Dark skin never gets skin cancer.\""], a: 1, r: "Broad-spectrum sunscreen reapplied regularly, protective clothing and avoiding midday sun reduce skin-cancer risk. Tanning beds increase risk, and darker skin is not immune." },
{ q: "To assess skin turgor in an older adult, the nurse should pinch the skin over the:", o: ["Back of the hand", "Sternum or clavicle", "Forearm", "Abdomen"], a: 1, r: "Older adults lose elasticity on the hands, so turgor is better assessed over the sternum or clavicle." }
]
}});

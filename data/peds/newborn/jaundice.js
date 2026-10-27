NS.reg("peds", "newborn", "jaundice", {
intro: {
  en: "**Neonatal jaundice** is the yellow color of the skin and sclera caused by **hyperbilirubinemia** — it becomes visible when serum bilirubin exceeds about **5 mg/dL (85 µmol/L)**. It affects **~60% of term and ~80% of preterm** newborns. Most cases are **physiological** and harmless, but high levels of **unconjugated bilirubin can cross the blood–brain barrier** and cause **kernicterus (bilirubin encephalopathy)** — permanent brain damage. The nurse's role is to **detect, measure, distinguish physiological from pathological jaundice, and give phototherapy safely**.",
  ar: "**يرقان الوليد** اصفرار الجلد والصلبة بسبب **فرط البيليروبين** — يظهر عندما يتجاوز **~5 ملغ/دل**. يصيب **~60% من التامين و~80% من الخدج**. معظمه **فسيولوجي** غير ضار، لكن المستويات العالية من **البيليروبين غير المقترن تعبر الحاجز الدموي الدماغي** وتسبب **اليرقان النووي** — تلفاً دماغياً دائماً. دور الممرض **الكشف والقياس والتمييز بين الفسيولوجي والمرضي وإعطاء العلاج الضوئي بأمان**."
},
sections: [
{ h: { en: "Bilirubin metabolism and causes", ar: "استقلاب البيليروبين والأسباب" }, b: [
  { t: "flow", steps: [
    { en: "**RBC breakdown** → hemoglobin → heme → **unconjugated (indirect) bilirubin** — **fat-soluble**, bound to **albumin** in blood; **free unbound bilirubin is neurotoxic**", ar: "**تكسر الكريات الحمر** ← **بيليروبين غير مقترن (غير مباشر)** — **ذواب في الدهون** ومرتبط **بالألبومين**؛ **الحر سام للأعصاب**" },
    { en: "Liver uptake → **conjugation by glucuronyl transferase (UGT1A1)** → **conjugated (direct) bilirubin** — water-soluble", ar: "الكبد ← **الاقتران بإنزيم الغلوكورونيل ترانسفيراز** ← **مقترن (مباشر)** ذواب في الماء" },
    { en: "Excreted in **bile → intestine** → stool (stercobilin); in the newborn, intestinal **β-glucuronidase** deconjugates bilirubin → **reabsorbed (enterohepatic circulation)**", ar: "يُطرح في **الصفراء ← الأمعاء** ← البراز؛ عند الوليد يُعاد امتصاصه (**الدورة المعوية الكبدية**)" } ] },
  { t: "compare", cols: [
    { h: { en: "Physiological jaundice", ar: "اليرقان الفسيولوجي" }, en: ["**Appears after 24 hours** (day 2–3)", "**Peaks day 3–5** (term), day 5–7 (preterm)", "**Rises < 5 mg/dL per day**; peak usually < 12–15 mg/dL (term)", "**Unconjugated** only; direct < 1–2 mg/dL", "**Resolves by 1–2 weeks** (term), 2–3 weeks preterm", "Baby **well, feeding**", "**Causes**: ↑ RBC mass and **shorter RBC lifespan (70–90 days)**, **immature liver conjugation**, ↑ enterohepatic circulation, delayed passage of meconium"], ar: ["**يظهر بعد 24 ساعة**", "**ذروته اليوم 3–5**", "**يرتفع < 5 ملغ/دل يومياً**", "**غير مقترن** فقط", "**يزول خلال 1–2 أسبوع**", "الطفل **بصحة جيدة**", "**الأسباب**: ↑ كتلة الكريات و**قصر عمرها**، **عدم نضج الكبد**، ↑ الدورة المعوية الكبدية"] },
    { h: { en: "Pathological jaundice — any of:", ar: "اليرقان المرضي — أي من:" }, en: ["**Appears in the first 24 hours** (always pathological)", "**Rises > 5 mg/dL/day** (> 0.2 mg/dL/h)", "**Exceeds phototherapy threshold** for age in hours", "**Conjugated (direct) > 1 mg/dL (or > 20% of total)** → cholestasis — **pale stools, dark urine**", "**Persists > 2 weeks** (term) / > 3 weeks (preterm)", "**Baby unwell** — poor feeding, lethargy, fever, vomiting, hepatosplenomegaly"], ar: ["**يظهر في أول 24 ساعة** (مرضي دائماً)", "**يرتفع > 5 ملغ/دل يومياً**", "**يتجاوز حد العلاج الضوئي**", "**المقترن > 1 ملغ/دل** ← ركود صفراوي — **براز فاتح وبول داكن**", "**يستمر > أسبوعين**", "**الطفل مريض**"] } ] },
  { t: "table", h: ["Cause", "Examples"], r: [
    ["**Hemolytic (increased production)**", "**Rh incompatibility** (Rh− mother, Rh+ baby, sensitized — severe, early), **ABO incompatibility** (mother **O**, baby A or B — commonest), **G6PD deficiency** (common in Iraq — triggered by **fava beans, naphthalene (mothballs), some drugs**), spherocytosis, **cephalhematoma/bruising**, polycythemia"],
    ["**Decreased conjugation / excretion**", "Prematurity, **congenital hypothyroidism**, Crigler–Najjar, Gilbert"],
    ["**Breastfeeding-related**", "**Breastfeeding (suboptimal intake) jaundice** — first week, from **inadequate milk intake/dehydration** → ↑ enterohepatic circulation (**treat by more frequent breastfeeding — 8–12 times/day**); **breast-milk jaundice** — after first week, peaks 2–3 weeks, baby well, **breastfeeding continues**"],
    ["**Infection**", "**Sepsis**, UTI, TORCH infections"],
    ["**Conjugated (cholestatic)**", "**Biliary atresia** (pale stools, dark urine — **urgent Kasai surgery before 60 days**), neonatal hepatitis, metabolic disease"]],
    ar: { h: ["السبب", "أمثلة"], r: [
    ["**انحلالي (زيادة الإنتاج)**", "**تعارض Rh** (أم سالبة وطفل موجب — شديد مبكر)، **تعارض ABO** (أم **O**، طفل A أو B — الأشيع)، **نقص G6PD** (شائع في العراق — **الباقلاء والنفثالين وبعض الأدوية**)، الورم الدموي الرأسي، كثرة الحمر"],
    ["**نقص الاقتران أو الإطراح**", "الخداج، **قصور الدرق الخلقي**"],
    ["**مرتبط بالرضاعة**", "**يرقان الرضاعة غير الكافية** — الأسبوع الأول من **قلة الحليب** (**العلاج بزيادة الرضعات 8–12 يومياً**)؛ **يرقان حليب الأم** — بعد الأسبوع الأول، الطفل بصحة جيدة، **تستمر الرضاعة**"],
    ["**العدوى**", "**الإنتان**، التهاب المجاري البولية، TORCH"], ["**المقترن**", "**رتق القنوات الصفراوية** (براز فاتح — **جراحة كاساي قبل 60 يوماً**)، التهاب الكبد الوليدي"]] } }
]},
{ h: { en: "Assessment and kernicterus", ar: "التقييم واليرقان النووي" }, b: [
  { t: "list", en: [
    "**Visual assessment**: press the skin (blanch) in **natural daylight** — jaundice progresses **cephalocaudally** (face → trunk → legs → palms and soles = higher levels — **Kramer's zones**); **visual estimation is unreliable** (especially dark skin) → **measure**",
    "**Transcutaneous bilirubinometer (TcB)** for screening; **total serum bilirubin (TSB)** to confirm and decide treatment; plot on an **hour-specific nomogram (Bhutani)** with risk factors",
    "**Investigations**: TSB with direct fraction, **blood groups of mother and baby (ABO, Rh)**, **direct Coombs test (DAT)**, CBC, reticulocytes, smear, **G6PD**, thyroid function (prolonged), septic screen if unwell, urine for reducing substances",
    "**Risk factors for severe hyperbilirubinemia**: **jaundice < 24 h**, **gestation < 38 weeks**, **exclusive breastfeeding with poor intake/weight loss > 10%**, **sibling needed phototherapy**, **hemolysis (ABO/Rh/G6PD)**, cephalhematoma/bruising, East Asian ethnicity"],
    ar: [
    "**التقييم البصري**: ضغط الجلد **في ضوء النهار** — يتقدم **من الرأس للأسفل** (الوجه ← الجذع ← الساقين ← الراحتين والأخمصين = مستويات أعلى)؛ **التقدير البصري غير موثوق** ← **القياس**",
    "**جهاز البيليروبين عبر الجلد** للتحري؛ **البيليروبين المصلي** للتأكيد والقرار؛ **المخطط حسب الساعات**",
    "**الفحوص**: البيليروبين والمباشر، **زمر دم الأم والطفل**، **اختبار كومبس المباشر**، تعداد الدم والشبكيات، **G6PD**، الدرقية، فحص الإنتان",
    "**عوامل الخطورة**: **يرقان < 24 ساعة**، **عمر حمل < 38 أسبوعاً**، **رضاعة طبيعية مع قلة الحليب وفقدان وزن > 10%**، **أخ احتاج علاجاً ضوئياً**، **الانحلال**، الورم الدموي"] },
  { t: "warn", en: "**Kernicterus (bilirubin encephalopathy)** — early: **lethargy, hypotonia, poor suck**; intermediate: **high-pitched cry, irritability, hypertonia, arching of neck (retrocollis) and back (opisthotonos)**, fever; advanced: apnea, seizures, coma, death. **Chronic sequelae**: **athetoid cerebral palsy, sensorineural hearing loss, upward gaze palsy, dental enamel dysplasia, intellectual disability**. It is **preventable** by early detection and treatment.",
    ar: "**اليرقان النووي** — مبكراً: **خمول وارتخاء وضعف المص**؛ متوسطاً: **بكاء حاد عالي، تهيج، تشنج، تقوس الرقبة والظهر**، حمى؛ متقدماً: انقطاع النفس واختلاج ووفاة. **العواقب المزمنة**: **الشلل الدماغي الكنعي، الصمم الحسي العصبي، شلل النظر للأعلى، خلل مينا الأسنان، الإعاقة الذهنية**. **قابل للوقاية** بالكشف والعلاج المبكر." }
]},
{ h: { en: "Treatment and nursing care", ar: "العلاج والرعاية التمريضية" }, b: [
  { t: "list", en: [
    "**Phototherapy** — blue-green light (**wavelength 430–490 nm**, ~460 nm) converts unconjugated bilirubin in the skin to **water-soluble isomers (lumirubin)** excreted in **bile and urine without conjugation**; started according to **TSB, age in hours and risk factors** (nomogram)",
    "**Exchange transfusion** — removes bilirubin and antibody-coated RBCs, corrects anemia: for **very high bilirubin despite intensive phototherapy, rising rapidly, or signs of acute bilirubin encephalopathy**; double-volume (**2 × 80–85 mL/kg**) via umbilical catheter",
    "**IV immunoglobulin (IVIG)** in Rh/ABO isoimmune hemolysis with rising bilirubin",
    "**Adequate feeding**: **continue breastfeeding 8–12 times/day**; supplement only if indicated (dehydration, weight loss); **glucose water is not useful**",
    "**Prevention**: **anti-D immunoglobulin** to Rh-negative mothers (28 weeks and within 72 h of delivery of an Rh+ baby), early breastfeeding, **G6PD screening and education (avoid fava beans and naphthalene)**, **follow-up within 48–72 h of discharge**"],
    ar: [
    "**العلاج الضوئي** — ضوء أزرق (**430–490 نانومتر**) يحول البيليروبين في الجلد إلى **مركبات ذوابة في الماء** تُطرح في **الصفراء والبول دون اقتران**؛ يبدأ حسب **البيليروبين والعمر بالساعات وعوامل الخطورة**",
    "**تبديل الدم** — لـ**البيليروبين العالي جداً رغم العلاج الضوئي المكثف أو علامات الاعتلال الدماغي**؛ مضاعف الحجم (**2 × 80–85 مل/كغ**)",
    "**الغلوبولين المناعي الوريدي** في الانحلال المناعي",
    "**التغذية الكافية**: **الرضاعة 8–12 مرة يومياً**؛ **ماء السكر غير مفيد**",
    "**الوقاية**: **غلوبولين Anti-D** للأمهات سالبات Rh (الأسبوع 28 وخلال 72 ساعة)، الرضاعة المبكرة، **فحص G6PD وتجنب الباقلاء والنفثالين**، **المتابعة خلال 48–72 ساعة من الخروج**"] },
  { t: "table", h: ["Phototherapy nursing care", "Rationale"], r: [
    ["**Undress the baby (diaper only, or minimal)**, expose maximum skin; **turn every 2–3 hours** (if single unit)", "Effect depends on **exposed surface area**"],
    ["**Cover the eyes with opaque eye shields** — check position, remove during feeds to **assess eyes and allow bonding**; ensure they don't occlude nostrils", "**Prevent retinal damage**"],
    ["**Cover genitals** (diaper) — controversial; protects from light", "Possible gonadal effect"],
    ["Light source at the **recommended distance (~30–45 cm)**; use **bilirubin blanket/LED**; continuous except for feeds when intensive", "Maximal irradiance without burns"],
    ["**Monitor temperature every 2–4 h** (hypo/hyperthermia)", "Heat from lamps, exposure"],
    ["**Increase fluids — breastfeed frequently**; monitor **weight, urine output and stools**", "**Insensible water loss ↑**, loose green stools"],
    ["**Skin care**: no oils or lotions; clean after loose stools; observe for **rash** or **bronze baby syndrome** (with conjugated hyperbilirubinemia)", "Lotions cause burns; diarrhea irritates skin"],
    ["**Measure TSB regularly (12–24 h)** — skin color is not reliable during phototherapy; **turn off lights when drawing blood** (light degrades sample); protect sample from light", "Accurate monitoring"],
    ["**Encourage parents** to hold and feed baby; explain treatment", "Reduce anxiety, support bonding"]],
    ar: { h: ["الرعاية أثناء العلاج الضوئي", "السبب"], r: [
    ["**تعرية الطفل** (حفاض فقط)، **التقليب كل 2–3 ساعات**", "الأثر يعتمد على **مساحة الجلد المعرضة**"],
    ["**تغطية العينين بواقٍ معتم** — تُزال أثناء الرضاعة **لفحص العين والترابط**؛ لا تسد الأنف", "**منع أذية الشبكية**"],
    ["**تغطية الأعضاء التناسلية**", "حماية محتملة"], ["المصباح على **المسافة الموصى بها (30–45 سم)**", "إشعاع كافٍ دون حروق"],
    ["**قياس الحرارة كل 2–4 ساعات**", "حرارة المصابيح"], ["**زيادة السوائل — الرضاعة المتكررة**؛ مراقبة **الوزن والبول والبراز**", "**↑ الفقدان غير المحسوس** وبراز أخضر رخو"],
    ["**العناية بالجلد**: لا زيوت ولا مراهم؛ مراقبة **الطفح** و**متلازمة الطفل البرونزي**", "المراهم تسبب حروقاً"],
    ["**قياس البيليروبين بانتظام** — اللون غير موثوق؛ **إطفاء الضوء عند سحب الدم** وحماية العينة", "مراقبة دقيقة"], ["**تشجيع الوالدين** على الحمل والرضاعة", "الترابط"]] } }
]}
],
questions: [
{ q: "Jaundice becomes visible in newborns when serum bilirubin exceeds about:", o: ["5 mg/dL", "1 mg/dL", "20 mg/dL", "0.5 mg/dL"], a: 0, r: "In adults it appears at about 2–3 mg/dL." },
{ q: "Physiological jaundice typically appears:", o: ["After 24 hours of age", "Within the first 24 hours", "After 3 weeks", "At birth"], a: 0, r: "Jaundice in the first 24 hours is always pathological." },
{ q: "Jaundice appearing within the first 24 hours of life is:", o: ["Always pathological", "Physiological", "Breast-milk jaundice", "Normal in all babies"], a: 0, p: true, r: "Hemolysis must be suspected and investigated." },
{ q: "Causes of physiological jaundice include: (Select all that apply.)", o: ["Shorter RBC lifespan", "Immature liver conjugation", "Increased enterohepatic circulation", "Biliary atresia"], a: [0, 1, 2], s: true, r: "Biliary atresia causes pathological conjugated jaundice." },
{ q: "The bilirubin that can cross the blood–brain barrier and cause kernicterus is:", o: ["Unconjugated, unbound bilirubin", "Conjugated bilirubin", "Urobilinogen", "Stercobilin"], a: 0, r: "It is fat-soluble and neurotoxic." },
{ q: "ABO incompatibility typically occurs when the mother's blood group is:", o: ["O and baby is A or B", "AB and baby is O", "A and baby is A", "B and baby is B"], a: 0, r: "Group O mothers have IgG anti-A/anti-B." },
{ q: "Rh hemolytic disease occurs when:", o: ["An Rh-negative mother has an Rh-positive baby and is sensitized", "Mother is Rh-positive", "Both are Rh-negative", "Baby is Rh-negative"], a: 0, r: "Maternal anti-D crosses the placenta." },
{ q: "Rh sensitization is prevented by giving the Rh-negative mother:", o: ["Anti-D immunoglobulin", "Vitamin K", "Iron", "Antibiotics"], a: 0, r: "It is given at 28 weeks and within 72 hours of delivery." },
{ q: "In G6PD-deficient infants, families should avoid: (Select all that apply.)", o: ["Fava beans", "Naphthalene mothballs", "Certain oxidant drugs", "Breastfeeding"], a: [0, 1, 2], s: true, r: "Breastfeeding should continue." },
{ q: "Pale stools and dark urine in a jaundiced 3-week-old suggest:", o: ["Conjugated hyperbilirubinemia such as biliary atresia", "Physiological jaundice", "Breast-milk jaundice", "ABO incompatibility"], a: 0, p: true, r: "Biliary atresia needs surgery before 60 days." },
{ q: "Breastfeeding (suboptimal intake) jaundice is best managed by:", o: ["More frequent breastfeeding (8–12 times/day)", "Stopping breastfeeding permanently", "Glucose water", "Exchange transfusion always"], a: 0, r: "Better intake increases stooling and bilirubin excretion." },
{ q: "Breast-milk jaundice usually:", o: ["Appears after the first week in a well baby and breastfeeding continues", "Appears in the first 24 hours", "Requires stopping breastfeeding forever", "Causes pale stools"], a: 0, r: "It is benign in a thriving infant." },
{ q: "Jaundice progresses on the body in which direction?", o: ["Head to feet (cephalocaudal)", "Feet to head", "Abdomen first", "Hands first"], a: 0, r: "Jaundiced palms and soles indicate high levels." },
{ q: "The most accurate way to measure bilirubin is:", o: ["Total serum bilirubin", "Visual inspection", "Urine color", "Stool color"], a: 0, r: "Visual estimation is unreliable." },
{ q: "Investigations for early jaundice include: (Select all that apply.)", o: ["Mother and baby blood groups", "Direct Coombs test", "Total and direct bilirubin", "G6PD level", "Chest X-ray"], a: [0, 1, 2, 3], s: true, r: "A chest X-ray is not part of jaundice workup." },
{ q: "Phototherapy works by:", o: ["Converting bilirubin in skin into water-soluble isomers", "Conjugating bilirubin in the liver", "Destroying red cells", "Increasing albumin"], a: 0, r: "Isomers are excreted without conjugation." },
{ q: "The wavelength of light used in phototherapy is:", o: ["Blue-green 430–490 nm", "Ultraviolet 250 nm", "Infrared", "Red 700 nm"], a: 0, r: "Bilirubin absorbs light around 460 nm." },
{ q: "During phototherapy the infant's eyes are:", o: ["Covered with opaque shields", "Left uncovered", "Taped shut with plaster", "Covered with gauze soaked in saline"], a: 0, p: true, r: "This prevents retinal damage." },
{ q: "Eye shields should be removed during feeds to:", o: ["Assess the eyes and promote bonding", "Increase phototherapy", "Measure temperature", "Prevent sleep"], a: 0, r: "Eye contact supports parent–infant interaction." },
{ q: "Nursing care during phototherapy includes: (Select all that apply.)", o: ["Exposing maximum skin", "Monitoring temperature", "Frequent feeding", "Turning the baby regularly", "Applying oil to skin"], a: [0, 1, 2, 3], s: true, r: "Oils and lotions can cause burns." },
{ q: "Infants under phototherapy need extra fluids because of:", o: ["Increased insensible water loss and loose stools", "Decreased urine", "Overhydration", "Low metabolism"], a: 0, r: "Heat and light increase evaporation." },
{ q: "During phototherapy, jaundice is monitored by:", o: ["Serum bilirubin levels", "Skin color", "Urine color", "Eye color"], a: 0, r: "Light bleaches skin, making color unreliable." },
{ q: "When drawing blood for bilirubin from an infant under phototherapy, the nurse should:", o: ["Turn off the lights and protect the sample from light", "Leave lights on", "Expose the sample to sunlight", "Delay testing for 1 week"], a: 0, r: "Light degrades bilirubin in the sample." },
{ q: "Loose greenish stools during phototherapy are:", o: ["An expected effect", "A sign of infection always", "A reason to stop feeds", "An allergy"], a: 0, r: "Bilirubin is excreted in bile and stool." },
{ q: "Exchange transfusion is indicated when:", o: ["Bilirubin is very high despite intensive phototherapy or encephalopathy signs appear", "Bilirubin is 6 mg/dL on day 3", "Jaundice is physiological", "Baby is breastfed"], a: 0, r: "It rapidly removes bilirubin and antibodies." },
{ q: "Early signs of acute bilirubin encephalopathy include:", o: ["Lethargy, hypotonia and poor suck", "Strong cry and active feeding", "Rash", "Diarrhea"], a: 0, r: "Later signs include high-pitched cry and opisthotonos." },
{ q: "Long-term sequelae of kernicterus include: (Select all that apply.)", o: ["Athetoid cerebral palsy", "Sensorineural hearing loss", "Upward gaze palsy", "Dental enamel dysplasia", "Asthma"], a: [0, 1, 2, 3], s: true, r: "Asthma is not a consequence of kernicterus." },
{ q: "Prolonged jaundice beyond 2 weeks in a term baby requires evaluation for:", o: ["Hypothyroidism and cholestasis", "Normal growth", "Teething", "Colic"], a: 0, r: "Persistent jaundice may hide treatable disease." },
{ q: "A cephalhematoma increases the risk of jaundice because:", o: ["Extravasated blood is broken down to bilirubin", "It blocks the bile duct", "It damages the liver", "It causes infection"], a: 0, r: "Hemoglobin breakdown increases bilirubin load." },
{ q: "Newborns discharged early should be followed up within:", o: ["48–72 hours", "2 weeks", "1 month", "6 months"], a: 0, r: "Bilirubin peaks on days 3–5." }
]
});

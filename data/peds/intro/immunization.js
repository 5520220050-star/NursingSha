NS.reg("peds", "intro", "immunization", {
intro: {
  en: "**Immunization** is one of the most cost-effective public-health interventions, preventing millions of child deaths every year from diseases such as measles, diphtheria, tetanus, pertussis, polio and hepatitis B. This lecture explains **types of immunity**, **types of vaccines**, the **national immunization schedule**, the **cold chain**, safe vaccine administration, **contraindications**, and **adverse events following immunization (AEFI)** — all core responsibilities of the pediatric and community nurse.",
  ar: "**التلقيح** من أكثر تدخلات الصحة العامة فعالية، يمنع ملايين وفيات الأطفال سنوياً من الحصبة والخناق والكزاز والسعال الديكي وشلل الأطفال والتهاب الكبد B. تشرح المحاضرة **أنواع المناعة** و**أنواع اللقاحات** و**جدول التلقيح الوطني** و**السلسلة الباردة** والإعطاء الآمن و**موانع الاستعمال** و**الآثار الجانبية بعد التمنيع** — وكلها مسؤوليات أساسية لممرض الأطفال والمجتمع."
},
sections: [
{ h: { en: "Types of immunity and vaccines", ar: "أنواع المناعة واللقاحات" }, b: [
  { t: "table", h: ["Type", "Natural", "Artificial"], r: [
    ["**Active** (body makes its own antibodies — **long-lasting**, slow onset, memory)", "**Recovery from disease** (e.g., measles)", "**Vaccination** (vaccines, toxoids)"],
    ["**Passive** (ready-made antibodies — **immediate but temporary**, weeks–months, no memory)", "**Maternal IgG across placenta**, **IgA in breast milk/colostrum**", "**Immunoglobulins / antisera** (HBIG, tetanus immunoglobulin, rabies IG, VZIG, antitoxin)"]],
    ar: { h: ["النوع", "طبيعية", "اصطناعية"], r: [
    ["**فعالة** (الجسم يصنع أضداده — **طويلة الأمد**، بطيئة البدء، ذاكرة)", "**الشفاء من المرض**", "**التلقيح** (اللقاحات والذوفانات)"],
    ["**منفعلة** (أضداد جاهزة — **فورية مؤقتة**، بلا ذاكرة)", "**IgG الأم عبر المشيمة**، **IgA في الحليب واللبأ**", "**الغلوبولينات المناعية والأمصال**"]] } },
  { t: "table", h: ["Vaccine type", "Examples", "Notes"], r: [
    ["**Live attenuated**", "**BCG, OPV, measles, MMR, rotavirus, varicella, yellow fever**", "Strong long immunity, often 1–2 doses; **heat-sensitive**; **contraindicated in severe immunodeficiency and pregnancy**; **2 live injectable vaccines not given same day → separate by ≥ 4 weeks**"],
    ["**Inactivated (killed)**", "**IPV**, hepatitis A, rabies, influenza (injectable), whole-cell pertussis", "Safe in immunocompromised; need **multiple doses and boosters**; **freezing damages** them"],
    ["**Toxoid**", "**Tetanus (TT/Td), diphtheria**", "Inactivated toxin → antitoxin immunity"],
    ["**Subunit / recombinant / conjugate**", "**Hepatitis B (recombinant), Hib, pneumococcal conjugate (PCV), HPV**, acellular pertussis", "Conjugation to protein makes polysaccharide vaccines work in infants"],
    ["**mRNA / viral vector**", "COVID-19 vaccines", "Newer platforms"]],
    ar: { h: ["نوع اللقاح", "أمثلة", "ملاحظات"], r: [
    ["**حي مضعف**", "**BCG وشلل الأطفال الفموي والحصبة وMMR والروتا والحماق**", "مناعة قوية؛ **حساس للحرارة**؛ **ممنوع في نقص المناعة الشديد والحمل**؛ **لقاحان حيان حقنيان إما بنفس اليوم أو بفارق ≥ 4 أسابيع**"],
    ["**معطل**", "**شلل الأطفال الحقني**، التهاب الكبد A، الكلب، الإنفلونزا", "آمن لضعاف المناعة؛ يحتاج **جرعات ومعززات**؛ **التجميد يتلفه**"],
    ["**ذوفان**", "**الكزاز والخناق**", "ذيفان معطل"],
    ["**وحيدات / مؤتلف / مقترن**", "**التهاب الكبد B، المستدمية، المكورات الرئوية، HPV**", "الاقتران يجعله فعالاً عند الرضع"], ["**mRNA**", "كوفيد-19", "منصات حديثة"]] } }
]},
{ h: { en: "Immunization schedule (Iraq — typical)", ar: "جدول التلقيح (العراق — نموذجي)" }, b: [
  { t: "table", h: ["Age", "Vaccines (commonly taught Iraqi schedule)"], r: [
    ["**Birth (first 24 h – first week)**", "**BCG** (intradermal, left upper arm), **OPV-0** (zero dose), **Hepatitis B-1** (within 24 h)"],
    ["**2 months**", "**Pentavalent/hexavalent** (DTP + Hib + HepB ± IPV) dose 1, **OPV-1**, **rotavirus-1**, **PCV-1**"],
    ["**4 months**", "Pentavalent/hexavalent 2, OPV-2, **IPV**, rotavirus-2, PCV-2"],
    ["**6 months**", "Pentavalent/hexavalent 3, OPV-3, (rotavirus-3 depending on product), PCV-3"],
    ["**9 months**", "**Measles** (single) + **vitamin A**"],
    ["**12 months**", "**MMR-1**"],
    ["**18 months**", "**1st booster**: DTP, OPV, **MMR-2** (+ vitamin A)"],
    ["**4–6 years (school entry)**", "**2nd booster**: DTP (or DT), OPV, MMR (per current program)"],
    ["**Later**", "**Td** boosters (school, women of childbearing age), HPV where introduced"]],
    ar: { h: ["العمر", "اللقاحات (الجدول العراقي الشائع)"], r: [
    ["**الولادة**", "**BCG** (داخل الجلد، الذراع الأيسر)، **شلل الأطفال الفموي الصفري**، **التهاب الكبد B-1** (خلال 24 ساعة)"],
    ["**شهران**", "**الخماسي/السداسي** 1، الفموي 1، **الروتا 1**، **المكورات الرئوية 1**"],
    ["**4 أشهر**", "الخماسي 2، الفموي 2، **الحقني IPV**، الروتا 2، الرئوية 2"],
    ["**6 أشهر**", "الخماسي 3، الفموي 3، الرئوية 3"], ["**9 أشهر**", "**الحصبة** + **فيتامين A**"], ["**12 شهراً**", "**MMR-1**"],
    ["**18 شهراً**", "**المنشطة الأولى**: الثلاثي والفموي و**MMR-2**"], ["**4–6 سنوات**", "**المنشطة الثانية**"], ["**لاحقاً**", "**Td** للمدارس والنساء"]] } },
  { t: "warn", en: "**Accuracy note**: national schedules are revised periodically (vaccine products, the age of MMR and boosters). Always follow the **current Iraqi Ministry of Health immunization card**; the table shows the commonly taught pattern for exam revision.",
    ar: "**ملاحظة دقة**: الجداول الوطنية تُحدّث دورياً. اتبع دائماً **بطاقة التلقيح الحالية لوزارة الصحة العراقية**؛ الجدول يعرض النمط الشائع للمراجعة." },
  { t: "table", h: ["Vaccine", "Route / site / dose"], r: [
    ["**BCG**", "**Intradermal, 0.05 mL (newborn)**, **left upper arm (deltoid insertion)** → papule → ulcer/scar in 6–12 weeks (**normal — don't treat**)"],
    ["**OPV**", "**2 drops orally**"],
    ["**DTP-containing, HepB, Hib, PCV, IPV**", "**IM, anterolateral thigh (vastus lateralis) in infants**; deltoid in older children; 0.5 mL"],
    ["**Measles / MMR**", "**Subcutaneous** (or IM), 0.5 mL, upper arm or thigh"],
    ["**Rotavirus**", "**Oral**"]],
    ar: { h: ["اللقاح", "الطريق / الموضع / الجرعة"], r: [
    ["**BCG**", "**داخل الجلد 0.05 مل**، **أعلى الذراع الأيسر** ← حطاطة ← قرحة/ندبة (**طبيعية**)"], ["**الفموي**", "**قطرتان**"],
    ["**الثلاثي وB والمستدمية والرئوية والحقني**", "**عضلي في الجانب الأمامي الوحشي للفخذ للرضع**؛ 0.5 مل"], ["**الحصبة / MMR**", "**تحت الجلد**، 0.5 مل"], ["**الروتا**", "**فموي**"]] } }
]},
{ h: { en: "Cold chain, contraindications and AEFI", ar: "السلسلة الباردة وموانع الاستعمال والآثار الجانبية" }, b: [
  { t: "list", en: [
    "**Cold chain**: system to keep vaccines at the **right temperature from manufacturer to child** — **+2°C to +8°C** in health-facility refrigerators and cold boxes; **OPV (and measles freeze-dried) tolerate freezing at central stores**; **never freeze DTP, HepB, Hib, PCV, IPV, Td** (**shake test** detects freeze damage)",
    "**Vaccine vial monitor (VVM)**: heat-sensitive label — **inner square lighter than outer circle = usable**; **same or darker = discard**",
    "**Reconstituted BCG and measles vaccines: discard after 6 hours** or at the end of the session (risk of contamination — **toxic shock**); use **only the diluent supplied** by the manufacturer",
    "**Refrigerator**: vaccines on shelves (not door), thermometer, temperature chart **twice daily**, ice packs/water bottles to stabilize temperature",
    "**True contraindications**: **anaphylaxis to a previous dose or vaccine component**; **live vaccines** — severe immunodeficiency (cancer chemotherapy, high-dose steroids, symptomatic HIV for BCG), pregnancy; **DTP** — encephalopathy within 7 days of a previous dose; **rotavirus** — history of intussusception",
    "**NOT contraindications (false)**: **mild illness with low-grade fever, cold, mild diarrhea**, current antibiotic, prematurity (vaccinate by **chronological age**), malnutrition, breastfeeding, family history of reactions, stable neurologic conditions → **missed opportunities must be avoided**; postpone only with **moderate–severe acute illness**",
    "**Common AEFI**: local pain, redness, swelling, **low fever** (within 24–48 h — DTP), irritability; **measles/MMR fever/rash 5–12 days** after; BCG ulcer; **serious (rare)**: **anaphylaxis (within minutes — keep child 15–30 min after vaccination, adrenaline 1:1000 IM 0.01 mL/kg available)**, febrile seizures, persistent crying > 3 h, hypotonic-hyporesponsive episode, BCG lymphadenitis",
    "**Nurse's responsibilities**: check card and schedule, screen for contraindications, explain benefits and side effects (**informed consent**), check **name, expiry date, VVM**, **safe injection (one needle one syringe, auto-disable syringes, no recapping, safety box)**, record in card and register, advise **paracetamol for fever**, report AEFI, trace defaulters"],
    ar: [
    "**السلسلة الباردة**: حفظ اللقاحات **بين +2 و+8°م** في الثلاجات والصناديق؛ **الفموي يتحمل التجميد** في المخازن المركزية؛ **لا تجميد للثلاثي وB والمستدمية والرئوية والحقني وTd** (**اختبار الرج**)",
    "**مؤشر قنينة اللقاح**: **المربع الداخلي أفتح من الدائرة = صالح**؛ **مماثل أو أغمق = يُتلف**",
    "**BCG والحصبة بعد الإذابة: تُتلف بعد 6 ساعات** أو نهاية الجلسة (خطر **الصدمة السمية**)؛ استعمال **المذيب المرفق فقط**",
    "**الثلاجة**: اللقاحات على الرفوف لا الباب، ميزان حرارة، **تسجيل مرتين يومياً**",
    "**موانع حقيقية**: **الصدمة التأقية من جرعة سابقة**؛ **الحية** — نقص المناعة الشديد والحمل؛ **الثلاثي** — اعتلال دماغي خلال 7 أيام؛ **الروتا** — انغلاف سابق",
    "**ليست موانع (كاذبة)**: **مرض خفيف وحمى خفيفة وزكام وإسهال خفيف**، المضاد الحيوي، الخداج (حسب **العمر الزمني**)، سوء التغذية، الرضاعة ← **تجنب الفرص الضائعة**؛ التأجيل فقط **للمرض الحاد المتوسط أو الشديد**",
    "**الآثار الشائعة**: ألم واحمرار وتورم، **حمى خفيفة** خلال 24–48 ساعة، تهيج؛ **حمى وطفح بعد الحصبة 5–12 يوماً**؛ **الخطيرة النادرة**: **الصدمة التأقية (إبقاء الطفل 15–30 دقيقة، الأدرينالين 1:1000 عضلياً 0.01 مل/كغ)**، الاختلاج الحروري، البكاء المستمر",
    "**مسؤوليات الممرض**: مراجعة البطاقة، تحري الموانع، الشرح والموافقة، فحص **الاسم والصلاحية والمؤشر**، **الحقن الآمن (محاقن ذاتية التعطيل، صندوق الأمان)**، التسجيل، نصح **الباراسيتامول**، الإبلاغ عن الآثار، متابعة المتخلفين"] }
]}
],
questions: [
{ q: "Immunity acquired by vaccination is:", o: ["Artificial active immunity", "Natural passive immunity", "Artificial passive immunity", "Natural active immunity"], a: 0, r: "The body produces its own antibodies in response to a vaccine." },
{ q: "Antibodies passed through the placenta provide:", o: ["Natural passive immunity", "Artificial active immunity", "Natural active immunity", "Artificial passive immunity"], a: 0, r: "Maternal IgG protects the infant temporarily." },
{ q: "Hepatitis B immunoglobulin (HBIG) provides:", o: ["Artificial passive immunity", "Artificial active immunity", "Natural active immunity", "Lifelong immunity"], a: 0, r: "Ready-made antibodies give immediate short protection." },
{ q: "Which vaccines are live attenuated? (Select all that apply.)", o: ["BCG", "OPV", "MMR", "Rotavirus", "Hepatitis B"], a: [0, 1, 2, 3], s: true, r: "Hepatitis B vaccine is recombinant." },
{ q: "Tetanus vaccine is an example of a:", o: ["Toxoid", "Live vaccine", "Immunoglobulin", "mRNA vaccine"], a: 0, r: "It is an inactivated toxin." },
{ q: "Vaccines in a health-facility refrigerator should be kept at:", o: ["+2°C to +8°C", "-20°C for all", "Room temperature", "+15°C to +25°C"], a: 0, r: "This range preserves potency." },
{ q: "Which vaccines must never be frozen? (Select all that apply.)", o: ["DTP", "Hepatitis B", "Pentavalent", "IPV", "OPV at central store"], a: [0, 1, 2, 3], s: true, r: "Freezing destroys adsorbed and inactivated vaccines." },
{ q: "The shake test is used to detect:", o: ["Freeze damage to vaccines", "Expiry date", "Heat exposure", "Contamination"], a: 0, r: "Frozen vaccines sediment faster." },
{ q: "A vaccine vial monitor whose inner square is darker than the outer circle means the vaccine:", o: ["Must be discarded", "Is safe to use", "Needs shaking", "Should be frozen"], a: 0, p: true, r: "It has been exposed to excessive heat." },
{ q: "Reconstituted BCG or measles vaccine should be discarded after:", o: ["6 hours or end of session", "1 week", "1 month", "48 hours"], a: 0, r: "Contamination can cause toxic shock syndrome." },
{ q: "BCG vaccine is given:", o: ["Intradermally in the left upper arm", "Intramuscularly in the thigh", "Orally", "Subcutaneously in the abdomen"], a: 0, r: "The newborn dose is 0.05 mL." },
{ q: "Three months after BCG, a mother reports a small ulcer/scar at the site. The nurse should:", o: ["Reassure that it is a normal reaction", "Apply antibiotic ointment", "Repeat the vaccine", "Refer for surgery"], a: 0, r: "A papule, ulcer and scar are expected." },
{ q: "The preferred injection site for pentavalent vaccine in infants is:", o: ["Anterolateral thigh (vastus lateralis)", "Dorsogluteal", "Deltoid", "Abdomen"], a: 0, r: "It is a large muscle without major nerves in infants." },
{ q: "OPV is administered as:", o: ["Two oral drops", "0.5 mL IM", "Intradermal 0.1 mL", "Nasal spray"], a: 0, r: "It gives intestinal immunity." },
{ q: "Hepatitis B birth dose should be given within:", o: ["24 hours of birth", "1 month", "6 months", "1 year"], a: 0, r: "It prevents perinatal transmission." },
{ q: "In the commonly taught Iraqi schedule, measles vaccine is given at:", o: ["9 months", "Birth", "2 months", "5 years"], a: 0, r: "Vitamin A is given at the same visit." },
{ q: "Which of the following is a true contraindication to vaccination?", o: ["Anaphylaxis to a previous dose", "Mild cold", "Low-grade fever", "Current antibiotic use"], a: 0, p: true, r: "Mild illness should not delay vaccination." },
{ q: "Which are NOT contraindications to vaccination? (Select all that apply.)", o: ["Mild diarrhea", "Prematurity", "Malnutrition", "Breastfeeding", "Severe immunodeficiency for live vaccines"], a: [0, 1, 2, 3], s: true, r: "Severe immunodeficiency contraindicates live vaccines." },
{ q: "A premature infant is vaccinated according to:", o: ["Chronological age", "Corrected age", "Weight only", "When discharged after 1 year"], a: 0, r: "Routine vaccines follow age from birth." },
{ q: "After vaccination, the child should be observed for anaphylaxis for:", o: ["15–30 minutes", "1 minute", "24 hours in hospital", "No observation"], a: 0, r: "Most anaphylaxis occurs within minutes." },
{ q: "The emergency drug for anaphylaxis after vaccination is:", o: ["Adrenaline 1:1000 IM 0.01 mL/kg", "Paracetamol", "Oral antihistamine only", "Salbutamol only"], a: 0, p: true, r: "Intramuscular adrenaline is first-line." },
{ q: "A common reaction 24–48 hours after DTP vaccine is:", o: ["Low fever and local swelling", "Paralysis", "Jaundice", "Hearing loss"], a: 0, r: "Paracetamol and cool compresses relieve it." },
{ q: "Fever and rash 5–12 days after measles vaccine is:", o: ["An expected mild reaction", "Measles infection requiring isolation always", "Anaphylaxis", "Contraindication to further doses"], a: 0, r: "It reflects replication of the attenuated virus." },
{ q: "Two live injectable vaccines not given on the same day should be separated by at least:", o: ["4 weeks", "1 day", "1 week", "6 months"], a: 0, r: "This avoids interference between immune responses." },
{ q: "Safe injection practice in immunization includes: (Select all that apply.)", o: ["Auto-disable syringes", "No recapping", "Disposal in a safety box", "Reusing needles between children"], a: [0, 1, 2], s: true, r: "One needle and one syringe per child." },
{ q: "Live vaccines are contraindicated in:", o: ["Children receiving cancer chemotherapy", "Children with a cold", "Breastfed infants", "Children on antibiotics"], a: 0, r: "The attenuated organism may cause disease." },
{ q: "Vaccines should be stored in the refrigerator:", o: ["On the shelves, not in the door", "In the door compartment", "In the freezer", "Next to food"], a: 0, r: "Door temperature fluctuates." },
{ q: "Refrigerator temperature should be recorded:", o: ["Twice daily", "Once a month", "Never", "Weekly"], a: 0, r: "Frequent monitoring detects cold-chain failure." },
{ q: "Rotavirus vaccine is contraindicated in infants with:", o: ["History of intussusception", "Mild cold", "Breastfeeding", "Low-grade fever"], a: 0, r: "The vaccine slightly increases intussusception risk." },
{ q: "The reconstituting diluent for a vaccine should be:", o: ["The diluent supplied by the manufacturer", "Any sterile water", "Normal saline from the ward", "Distilled water from the lab"], a: 0, r: "Wrong diluents can inactivate vaccines or cause harm." }
]
});

NS.reg("community", "assessment", "methods", {
intro: {
  en: "Community assessment uses **primary data** (collected directly by the nurse — surveys, interviews, observation, focus groups) and **secondary data** (already existing — census, vital statistics, health records, surveillance reports, research). **Needs assessment** distinguishes **normative** (expert-defined), **felt** (what people want), **expressed** (demand — service use) and **comparative** needs. This topic covers **data sources, types of needs and data-collection methods** with their advantages and limitations.",
  ar: "يستخدم تقييم المجتمع **البيانات الأولية** (يجمعها الممرض مباشرة — المسوح والمقابلات والملاحظة ومجموعات التركيز) و**البيانات الثانوية** (موجودة سابقاً — التعداد والإحصاءات الحيوية والسجلات والترصد والبحوث). ويميز **تقييم الاحتياجات** بين الحاجة **المعيارية** و**المحسوسة** و**المعبر عنها** و**المقارنة**. يغطي الموضوع **مصادر البيانات وأنواع الحاجات وطرق الجمع** مع مزاياها وقيودها."
},
sections: [
{ h: { en: "Sources of data", ar: "مصادر البيانات" }, b: [
  { t: "compare", cols: [
    { h: { en: "Primary data", ar: "البيانات الأولية" }, en: ["Collected **first-hand** for the current purpose", "**Surveys/questionnaires**, **interviews** (key informants, households), **observation** (windshield survey, participant observation), **focus groups**, **community forums**, **physical measurements/screening** (BP, weight)", "**Advantages**: specific, current, tailored", "**Limitations**: costly, time-consuming, requires skills"], ar: ["تُجمع **مباشرة** للغرض الحالي", "**المسوح والاستبيانات**، **المقابلات**، **الملاحظة**، **مجموعات التركيز**، **المنتديات المجتمعية**، **القياسات والتحري**", "**المزايا**: محددة وحديثة", "**القيود**: مكلفة وتستغرق وقتاً"] },
    { h: { en: "Secondary data", ar: "البيانات الثانوية" }, en: ["**Already collected** by others for another purpose", "**Census** (population size, age/sex, education), **vital statistics** (births, deaths, marriages), **health facility records**, **notifiable disease surveillance**, **MOH annual reports**, **WHO/UNICEF surveys (e.g., MICS)**, school records, research literature", "**Advantages**: quick, cheap, allows comparison/trends", "**Limitations**: may be outdated, incomplete, under-reported, not specific"], ar: ["**جمعها آخرون** لغرض آخر", "**التعداد**، **الإحصاءات الحيوية**، **سجلات المرافق**، **ترصد الأمراض المبلغ عنها**، **تقارير الوزارة**، **مسوح اليونيسف (MICS)**، سجلات المدارس، البحوث", "**المزايا**: سريعة ورخيصة وتسمح بالمقارنة", "**القيود**: قد تكون قديمة أو ناقصة أو غير محددة"] } ] },
  { t: "table", h: ["Type of need (Bradshaw)", "Meaning", "Example"], r: [
    ["**Normative**", "Defined by **experts/professionals** against a standard", "WHO target of ≥ 90% measles vaccine coverage — district at 70%"],
    ["**Felt**", "What **people themselves feel or want**", "Mothers say they want a closer clinic"],
    ["**Expressed (demand)**", "Felt need **turned into action** — service use, waiting lists, complaints", "Long queues at the PHC center"],
    ["**Comparative**", "Need inferred by **comparing with similar groups** receiving a service", "Village A has a health worker, similar village B does not"]],
    ar: { h: ["نوع الحاجة (برادشو)", "المعنى", "مثال"], r: [
    ["**المعيارية**", "يحددها **الخبراء** وفق معيار", "هدف تغطية الحصبة ≥ 90% — والمنطقة 70%"], ["**المحسوسة**", "ما **يشعر به الناس أو يريدونه**", "الأمهات يردن مركزاً أقرب"],
    ["**المعبر عنها (الطلب)**", "الحاجة المحسوسة **تحولت لفعل**", "طوابير طويلة في المركز"], ["**المقارنة**", "**بالمقارنة مع مجموعات مماثلة**", "قرية لديها عامل صحي وأخرى لا"]] } }
]},
{ h: { en: "Methods of data collection", ar: "طرق جمع البيانات" }, b: [
  { t: "table", h: ["Method", "Description", "Advantages / limitations"], r: [
    ["**Survey (questionnaire)**", "Structured questions to a **sample** of households/individuals (face-to-face, phone, online)", "Quantitative, generalizable if **random sampling**; cost, non-response, literacy issues"],
    ["**Key informant interview**", "In-depth interview with **knowledgeable leaders** — mukhtar, imam, teacher, midwife, sheikh", "Rich insight quickly; may reflect leaders' bias"],
    ["**Focus group discussion**", "**6–10 participants** with shared characteristics discuss a topic, guided by a moderator", "Explores beliefs and attitudes; dominant voices, not generalizable"],
    ["**Community forum / town meeting**", "Open public meeting to discuss needs", "Broad participation, builds support; vocal minorities may dominate"],
    ["**Observation**", "**Windshield survey**, **participant observation** (living/working in the community)", "Real behavior; observer bias, time"],
    ["**Records review / epidemiological data**", "Analyzing clinic registers, surveillance, vital statistics", "Cheap, trends; data quality varies"],
    ["**Screening/measurement**", "BP, BMI, Hb, vision screening in a population", "Objective data; cost and follow-up needed"],
    ["**Mapping (GIS/community mapping)**", "Mapping resources, cases, risks", "Visual patterns (clusters); needs data and skills"]],
    ar: { h: ["الطريقة", "الوصف", "المزايا / القيود"], r: [
    ["**المسح (الاستبيان)**", "أسئلة منظمة **لعينة**", "كمي قابل للتعميم مع **العينة العشوائية**؛ كلفة وعدم استجابة"],
    ["**مقابلة المخبر الرئيسي**", "مقابلة **قادة مطلعين** — المختار، الإمام، المعلم، القابلة، الشيخ", "معرفة غنية بسرعة؛ قد تعكس تحيز القادة"],
    ["**مجموعة التركيز**", "**6–10 مشاركين** يناقشون موضوعاً بإدارة ميسر", "تستكشف المعتقدات؛ غير قابلة للتعميم"], ["**المنتدى المجتمعي**", "اجتماع عام مفتوح", "مشاركة واسعة؛ قد تهيمن أقلية"],
    ["**الملاحظة**", "**المسح من الزجاج الأمامي**، **الملاحظة بالمشاركة**", "سلوك حقيقي؛ تحيز الملاحظ"], ["**مراجعة السجلات**", "سجلات المراكز والترصد", "رخيصة؛ جودة البيانات متفاوتة"],
    ["**التحري والقياس**", "الضغط والكتلة والهيموغلوبين", "بيانات موضوعية"], ["**رسم الخرائط**", "خرائط الموارد والحالات", "أنماط بصرية (عناقيد)"]] } },
  { t: "list", en: [
    "**Data analysis steps**: **categorize** data (demographic, environmental, health status, services), **summarize** (tables, rates, charts), **compare** (with district/national/WHO standards and previous years), **identify gaps and trends**, **draw inferences** → community diagnoses",
    "**Sampling**: **random (probability)** — every member has a known chance (simple random, systematic, stratified, **cluster sampling — used in EPI coverage surveys (30 × 7)**); **non-random** — convenience, purposive, snowball (less generalizable)",
    "**Quantitative vs qualitative**: quantitative (numbers — rates, percentages) answer \"how many\"; qualitative (words — interviews, focus groups) answer \"why/how\"; **mixed methods** give the fullest picture"],
    ar: [
    "**خطوات التحليل**: **التصنيف**، **التلخيص** (جداول ومعدلات ومخططات)، **المقارنة** (بالمحافظة والمعايير والسنوات السابقة)، **تحديد الفجوات والاتجاهات**، **الاستنتاج** ← التشخيصات المجتمعية",
    "**العينة**: **العشوائية** — بسيطة ومنتظمة وطبقية و**عنقودية (مسوح التغطية بالتلقيح 30 × 7)**؛ **غير العشوائية** — الملائمة والهادفة وكرة الثلج (أقل تعميماً)",
    "**الكمي والنوعي**: الكمي يجيب «كم»؛ النوعي يجيب «لماذا/كيف»؛ **الطرق المختلطة** تعطي الصورة الأكمل"] }
]}
],
questions: [
{ q: "Data collected directly by the nurse through a household survey are:", o: ["Primary data", "Secondary data", "Census data", "Vital statistics"], a: 0, r: "Primary data are first-hand." },
{ q: "Census and vital statistics are examples of:", o: ["Secondary data", "Primary data", "Focus group data", "Observation"], a: 0, r: "They were collected for other purposes." },
{ q: "Advantages of secondary data include: (Select all that apply.)", o: ["Quick", "Cheap", "Allows trend comparison", "Always current and complete"], a: [0, 1, 2], s: true, r: "Secondary data may be outdated or incomplete." },
{ q: "A WHO target of 90% vaccine coverage compared with a district's 70% reflects:", o: ["Normative need", "Felt need", "Expressed need", "Comparative need"], a: 0, r: "It is defined by experts." },
{ q: "Mothers saying they want a closer clinic reflects:", o: ["Felt need", "Normative need", "Comparative need", "Expressed need"], a: 0, r: "Answer: Felt need. It is what people feel." },
{ q: "Long waiting lists at a PHC center indicate:", o: ["Expressed need (demand)", "Normative need", "Felt need only", "Comparative need"], a: 0, r: "Felt need has become action." },
{ q: "One village has a health worker and a similar village does not; this is:", o: ["Comparative need", "Felt need", "Normative need", "Expressed need"], a: 0, r: "Need inferred by comparison." },
{ q: "Interviewing the mukhtar, imam and local midwife is:", o: ["Key informant interviewing", "Random survey", "Census", "Screening"], a: 0, r: "Key informants know the community well." },
{ q: "A limitation of key informant interviews is:", o: ["They may reflect leaders' biases", "They are always expensive", "They give no insight", "They require 1,000 people"], a: 0, r: "Leaders may not represent all groups." },
{ q: "A focus group usually includes about:", o: ["6–10 participants", "1 participant", "100 participants", "500 participants"], a: 0, r: "Answer: 6–10 participants. This allows interaction." },
{ q: "Focus groups are best for exploring:", o: ["Beliefs and attitudes", "Exact prevalence", "Blood pressure", "Mortality rates"], a: 0, r: "Answer: Beliefs and attitudes. They are qualitative." },
{ q: "Living and working in the community to observe behavior is:", o: ["Participant observation", "Windshield survey only", "Census", "Questionnaire"], a: 0, r: "It reveals real practices." },
{ q: "For findings to be generalizable to the population, a survey should use:", o: ["Random (probability) sampling", "Convenience sampling", "Snowball sampling", "Self-selection"], a: 0, r: "Every member has a known chance of selection." },
{ q: "EPI vaccination coverage surveys commonly use:", o: ["Cluster sampling (30 × 7)", "Snowball sampling", "Convenience sampling", "Census of everyone"], a: 0, r: "It is practical in large populations." },
{ q: "Quantitative data answer questions of:", o: ["How many/how much", "Why", "How people feel", "Meaning"], a: 0, r: "Qualitative data answer why and how." },
{ q: "Mixed methods are useful because they:", o: ["Combine numbers with explanations", "Avoid analysis", "Are cheapest", "Need no sampling"], a: 0, r: "They give a fuller picture." },
{ q: "Steps of data analysis include: (Select all that apply.)", o: ["Categorize", "Summarize", "Compare with standards", "Identify gaps", "Discard community input"], a: [0, 1, 2, 3], s: true, r: "Inferences lead to community diagnoses." },
{ q: "A limitation of community forums is:", o: ["Vocal minorities may dominate", "No participation", "Too precise", "Always random"], a: 0, r: "Facilitation is needed to include all voices." },
{ q: "Notifiable disease reports are a source of:", o: ["Secondary data", "Primary data", "Qualitative data only", "Census data"], a: 0, r: "They come from surveillance systems." },
{ q: "Mapping cases of diarrhea on a map of a district may reveal:", o: ["Clusters near a contaminated water source", "Nothing useful", "Patients' names publicly", "Genetic causes"], a: 0, r: "Spatial patterns guide action (as in John Snow's cholera map)." },
{ q: "Screening for hypertension in a community provides:", o: ["Objective primary data", "Secondary data", "Felt need data", "Census data"], a: 0, r: "Measurements are first-hand." },
{ q: "Limitations of primary data include: (Select all that apply.)", o: ["Cost", "Time", "Need for skills", "Always outdated"], a: [0, 1, 2], s: true, r: "Primary data are current." },
{ q: "Convenience sampling is:", o: ["Non-random and less generalizable", "The most representative", "Required for EPI surveys", "Always unbiased"], a: 0, r: "It selects those easily available." },
{ q: "Stratified random sampling ensures:", o: ["Representation of subgroups (e.g., urban/rural)", "No randomness", "Only one group", "Convenience"], a: 0, r: "Samples are drawn from each stratum." },
{ q: "MICS (Multiple Indicator Cluster Surveys) are conducted with support from:", o: ["UNICEF", "Private hospitals", "Pharmacies", "Universities only"], a: 0, r: "They provide child and women health indicators." },
{ q: "Comparing district indicators with national averages helps to:", o: ["Identify gaps and priorities", "Hide problems", "Replace data", "Avoid planning"], a: 0, r: "Comparison reveals relative need." },
{ q: "Under-reporting is a common limitation of:", o: ["Surveillance/secondary data", "Direct observation of BP", "Focus groups only", "Census only"], a: 0, r: "Not all cases reach health facilities." },
{ q: "Qualitative methods include: (Select all that apply.)", o: ["In-depth interviews", "Focus groups", "Participant observation", "Structured numeric survey"], a: [0, 1, 2], s: true, r: "Structured numeric surveys are quantitative." },
{ q: "The type of need most likely to be acted on by the community itself is:", o: ["Felt need", "Normative need", "Comparative need", "Hidden need"], a: 0, r: "People engage with what they perceive as important." },
{ q: "Literacy problems affect which method most?", o: ["Self-administered questionnaires", "Observation", "Records review", "Mapping"], a: 0, r: "Interviewer-administered surveys can help." }
]
});

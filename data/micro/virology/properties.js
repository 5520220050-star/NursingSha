NS.reg("micro", "virology", "properties", {
intro: {
  en: "**Viruses** are the smallest infectious agents (≈ 20–300 nm). They are **obligate intracellular parasites**: they have **no cellular structure, no ribosomes and no metabolism of their own**, and can multiply **only inside living host cells** by using the cell's machinery. A virus particle (**virion**) contains **only one type of nucleic acid — DNA or RNA**, never both. These properties explain why **antibiotics do not work against viruses**, why viruses cannot be grown on ordinary culture media, and why prevention by **vaccination** is so important.",
  ar: "**الفيروسات** أصغر العوامل المعدية (20–300 نانومتر). هي **طفيليات إجبارية داخل الخلايا**: **بلا بنية خلوية ولا ريبوسومات ولا استقلاب ذاتي**، ولا تتكاثر **إلا داخل خلايا حية** باستعمال آلياتها. الجسيم الفيروسي (**الفيريون**) يحوي **نوعاً واحداً فقط من الحمض النووي — DNA أو RNA**، لا الاثنين. وهذا يفسر **عدم فعالية المضادات الحيوية** ضد الفيروسات وعدم نموها على الأوساط العادية وأهمية **التطعيم**."
},
sections: [
{ h: { en: "General properties — viruses vs bacteria", ar: "الصفات العامة — الفيروسات مقابل البكتيريا" }, b: [
  { t: "table", h: ["Property", "Viruses", "Bacteria"], r: [
    ["**Size**", "**20–300 nm** — seen only by **electron microscope** (except poxviruses at the limit of light microscopy)", "0.5–5 µm — light microscope"],
    ["**Cell structure**", "**Acellular** — nucleic acid + protein coat (± envelope)", "Prokaryotic cells"],
    ["**Nucleic acid**", "**Either DNA or RNA**", "Both DNA and RNA"],
    ["**Ribosomes / enzymes for energy**", "**None**", "Present"],
    ["**Growth**", "**Only in living cells** (cell culture, embryonated eggs, animals)", "On artificial media (most)"],
    ["**Multiplication**", "**Replication** (assembly of parts), not division", "Binary fission"],
    ["**Antibiotics**", "**Not affected** — antiviral drugs needed", "Sensitive"],
    ["**Interferon**", "Sensitive", "Not affected"],
    ["**Filterability**", "**Pass bacterial filters**", "Retained"]],
    ar: { h: ["الصفة", "الفيروسات", "البكتيريا"], r: [
    ["**الحجم**", "**20–300 نانومتر** — **بالمجهر الإلكتروني**", "0.5–5 ميكرون — المجهر الضوئي"],
    ["**البنية**", "**لاخلوية** — حمض نووي وغلاف بروتيني", "خلايا بدائية النواة"],
    ["**الحمض النووي**", "**DNA أو RNA**", "كلاهما"], ["**الريبوسومات**", "**لا توجد**", "موجودة"],
    ["**النمو**", "**في خلايا حية فقط**", "أوساط صناعية"], ["**التكاثر**", "**التضاعف**", "الانشطار الثنائي"],
    ["**المضادات الحيوية**", "**لا تؤثر**", "حساسة"], ["**الإنترفيرون**", "حساسة", "لا يؤثر"], ["**الترشيح**", "**تمر من المرشحات**", "تُحجز"]] } }
]},
{ h: { en: "Structure of the virion", ar: "تركيب الفيريون" }, b: [
  { t: "table", h: ["Component", "Description / function"], r: [
    ["**Genome (nucleic acid)**", "DNA or RNA; single- or double-stranded; linear, circular or segmented (e.g., **influenza — 8 RNA segments** → reassortment); carries genetic information; **infectious itself in some viruses**"],
    ["**Capsid**", "**Protein coat** made of repeating subunits (**capsomeres**); **protects the genome**, mediates attachment (naked viruses), **antigenic** (target of neutralizing antibodies)"],
    ["**Nucleocapsid**", "Genome + capsid together"],
    ["**Envelope** (some viruses)", "**Lipid bilayer derived from the host cell membrane** (acquired by **budding**) with viral **glycoprotein spikes** (e.g., influenza **hemagglutinin and neuraminidase**, HIV gp120, SARS-CoV-2 **spike**) — used for **attachment and entry**"],
    ["**Enzymes**", "Some carry enzymes — **reverse transcriptase (HIV)**, RNA polymerase (negative-strand RNA viruses), neuraminidase"]],
    ar: { h: ["المكون", "الوصف / الوظيفة"], r: [
    ["**الجينوم**", "DNA أو RNA؛ مفرد أو مزدوج؛ قد يكون **مقطعاً (الإنفلونزا 8 قطع)** ← إعادة التوزيع"],
    ["**القفيصة**", "**غلاف بروتيني** من **وحدات قفيصية**؛ **يحمي الجينوم** و**مستضدي**"],
    ["**النواة القفيصية**", "الجينوم مع القفيصة"],
    ["**الغلاف الدهني (لبعضها)**", "**طبقة دهنية من غشاء الخلية المضيفة** (بالتبرعم) مع **أشواك بروتينية سكرية** (**الهيماغلوتينين والنيورامينيداز**، بروتين **سبايك**) — للالتصاق والدخول"],
    ["**الإنزيمات**", "**المنتسخة العكسية (HIV)** وبوليميراز RNA"]] } },
  { t: "compare", cols: [
    { h: { en: "Enveloped viruses", ar: "الفيروسات المغلفة" }, en: ["**Sensitive to** drying, heat, **detergents, alcohol, ether, soap** (lipid envelope destroyed)", "Usually transmitted by **respiratory droplets, blood, sexual contact** (need moist conditions)", "Examples: **influenza, measles, mumps, rubella, HIV, hepatitis B & C, herpes, SARS-CoV-2**"], ar: ["**حساسة** للجفاف والحرارة و**المنظفات والكحول والصابون**", "تنتقل **بالرذاذ والدم والجنس**", "أمثلة: **الإنفلونزا والحصبة والنكاف والحصبة الألمانية والإيدز والتهاب الكبد B وC والحلأ وكورونا**"] },
    { h: { en: "Naked (non-enveloped) viruses", ar: "الفيروسات العارية" }, en: ["**More resistant** to drying, acid, detergents and **alcohol** — survive longer on surfaces", "Often transmitted by the **fecal–oral route** (survive stomach acid, bile)", "Examples: **rotavirus, poliovirus, hepatitis A & E, norovirus, adenovirus, HPV**", "**Soap and water hand washing** preferred; chlorine/bleach for surfaces"], ar: ["**أكثر مقاومة** للجفاف والحامض والكحول", "غالباً **برازي فموي**", "أمثلة: **الروتا وشلل الأطفال والتهاب الكبد A وE والنورو**", "**غسل اليدين بالماء والصابون** أفضل؛ الكلور للأسطح"] } ] },
  { t: "table", h: ["Capsid symmetry", "Shape / examples"], r: [
    ["**Icosahedral (cubic)**", "20 triangular faces — polio, adenovirus, herpes, HPV, hepatitis A"],
    ["**Helical**", "Rod/spiral nucleocapsid — influenza, measles, mumps, rabies (bullet-shaped)"],
    ["**Complex**", "Neither — **poxviruses** (brick-shaped), bacteriophages"]],
    ar: { h: ["تناظر القفيصة", "الشكل / أمثلة"], r: [
    ["**عشريني الوجوه (مكعب)**", "شلل الأطفال والغدي والحلأ"], ["**حلزوني**", "الإنفلونزا والحصبة والكلب"], ["**معقد**", "**الجدري** والعاثيات"]] } }
]},
{ h: { en: "Classification, cultivation and control", ar: "التصنيف والزراعة والمكافحة" }, b: [
  { t: "table", h: ["Group", "Important human viruses"], r: [
    ["**DNA viruses**", "**Herpesviruses** (HSV-1, HSV-2, **varicella-zoster**, **CMV**, EBV), **hepatitis B virus**, adenovirus, **papillomavirus (HPV)**, poxviruses, parvovirus B19"],
    ["**RNA viruses**", "**Influenza** (orthomyxo), **measles, mumps, RSV** (paramyxo), **rubella**, **polio, coxsackie, hepatitis A** (picorna), **rotavirus** (reo — double-stranded RNA), **HIV** (retro), **hepatitis C**, dengue, **coronaviruses (SARS-CoV-2)**, rabies, hepatitis E"],
    ["**Subviral agents**", "**Viroids, satellites (hepatitis D), prions** — next lecture"]],
    ar: { h: ["المجموعة", "الفيروسات المهمة"], r: [
    ["**فيروسات DNA**", "**الحلئية** (الحلأ البسيط، **الحماق-النطاقي**، **المضخم للخلايا**، إبشتاين-بار)، **التهاب الكبد B**، الغدية، **الحليمي البشري**، الجدري"],
    ["**فيروسات RNA**", "**الإنفلونزا**، **الحصبة والنكاف**، **الحصبة الألمانية**، **شلل الأطفال والتهاب الكبد A**، **الروتا**، **الإيدز**، **التهاب الكبد C**، **كورونا**، الكلب"],
    ["**ما دون الفيروسات**", "**أشباه الفيروسات والتوابع (التهاب الكبد D) والبريونات**"]] } },
  { t: "list", en: [
    "**Cultivation**: **cell (tissue) culture** — most common; virus growth detected by **cytopathic effect (CPE)** (cell rounding, giant cells, inclusion bodies); **embryonated hen's eggs** (influenza — vaccine production); **laboratory animals**",
    "**Laboratory diagnosis**: **PCR/RT-PCR** (nucleic acid — most used today), **antigen detection** (rapid tests, ELISA), **serology** (IgM = recent infection; rising IgG titer), virus isolation in culture, electron microscopy, histology (inclusion bodies — e.g., **Negri bodies** in rabies, owl's-eye in CMV)",
    "**Specimen handling**: collect **early in illness**, use **viral transport medium**, keep **cold (4°C), transport quickly**; avoid freezing–thawing",
    "**Control**: **vaccines** (live attenuated — MMR, OPV, rotavirus, varicella; inactivated — IPV, influenza, hepatitis A, rabies; subunit/recombinant — hepatitis B, HPV; mRNA — COVID-19); **antiviral drugs** (acyclovir, oseltamivir, antiretrovirals); **passive immunization** (immunoglobulins — HBIG, rabies IG); **infection control** (hand hygiene, PPE, isolation, sterilization)"],
    ar: [
    "**الزراعة**: **زراعة الخلايا** — الأشيع؛ يُكشف النمو **بالتأثير الممرض للخلايا**؛ **بيض الدجاج المخصب** (الإنفلونزا ولقاحها)؛ الحيوانات",
    "**التشخيص المختبري**: **PCR** (الأكثر استعمالاً)، **كشف المستضد**، **المصليات** (IgM = عدوى حديثة)، العزل، المجهر الإلكتروني، **الأجسام الاشتمالية**",
    "**التعامل مع العينات**: الجمع **مبكراً**، **وسط النقل الفيروسي**، **التبريد 4°م والنقل السريع**",
    "**المكافحة**: **اللقاحات** (الحية المضعفة — MMR والروتا والحماق؛ المعطلة — شلل الأطفال الحقني والإنفلونزا؛ الوحيدات — التهاب الكبد B وHPV؛ mRNA — كوفيد)، **مضادات الفيروسات**، **التمنيع السلبي**، **ضبط العدوى**"] },
  { t: "warn", en: "**Live attenuated vaccines** (MMR, varicella, OPV, rotavirus, BCG, yellow fever) are generally **contraindicated in pregnancy and in severe immunosuppression** (e.g., advanced HIV, chemotherapy, high-dose steroids).",
    ar: "**اللقاحات الحية المضعفة** (MMR والحماق وشلل الأطفال الفموي والروتا) **ممنوعة عادة في الحمل وضعف المناعة الشديد**." }
]}
],
questions: [
{ q: "Viruses are described as obligate intracellular parasites because they:", o: ["Can multiply only inside living host cells", "Can grow on blood agar", "Have their own ribosomes", "Divide by binary fission"], a: 0, r: "They lack metabolic machinery and depend on host cells." },
{ q: "A virion contains:", o: ["Either DNA or RNA, not both", "Both DNA and RNA", "No nucleic acid", "Only proteins"], a: 0, r: "This distinguishes viruses from cellular organisms." },
{ q: "Viruses are best visualized using:", o: ["Electron microscope", "Light microscope", "Naked eye", "Hand lens"], a: 0, r: "Most are 20–300 nm, below light-microscope resolution." },
{ q: "Why are antibiotics ineffective against viral infections?", o: ["Viruses lack the structures antibiotics target (cell wall, ribosomes)", "Viruses are too large", "Viruses are always intracellular bacteria", "Antibiotics kill host cells"], a: 0, p: true, r: "Antiviral drugs are needed." },
{ q: "The protein coat surrounding the viral genome is the:", o: ["Capsid", "Envelope", "Cell wall", "Capsule"], a: 0, r: "It is made of capsomeres." },
{ q: "The viral envelope is derived from:", o: ["The host cell membrane during budding", "Bacterial cell walls", "Viral ribosomes", "Fungal hyphae"], a: 0, r: "Viral glycoproteins are inserted into host-derived lipid." },
{ q: "Which viruses are enveloped? (Select all that apply.)", o: ["Influenza", "HIV", "Measles", "Rotavirus", "Hepatitis B"], a: [0, 1, 2, 4], s: true, r: "Rotavirus is a naked virus." },
{ q: "Enveloped viruses are readily inactivated by:", o: ["Alcohol, soap and detergents", "Stomach acid only", "Nothing", "Cold storage"], a: 0, r: "Lipid envelopes are dissolved by detergents and solvents." },
{ q: "Naked viruses such as rotavirus and hepatitis A are usually transmitted by:", o: ["Fecal–oral route", "Mosquito bites", "Sexual contact only", "Blood only"], a: 0, r: "They resist acid and drying." },
{ q: "For naked viruses like norovirus, the best hand hygiene is:", o: ["Soap and water washing", "Alcohol rub alone", "Water without soap", "No hand hygiene"], a: 0, r: "Non-enveloped viruses resist alcohol." },
{ q: "Influenza virus has a segmented genome of how many RNA segments?", o: ["8", "1", "2", "20"], a: 0, r: "Segmentation allows reassortment and antigenic shift." },
{ q: "Hemagglutinin and neuraminidase are glycoprotein spikes of:", o: ["Influenza virus", "Rotavirus", "Poliovirus", "HPV"], a: 0, r: "They mediate attachment and release." },
{ q: "Which enzyme is carried by HIV virions?", o: ["Reverse transcriptase", "Beta-lactamase", "Coagulase", "Catalase"], a: 0, r: "It converts viral RNA into DNA." },
{ q: "Which virus has a complex (brick-shaped) structure?", o: ["Poxvirus", "Poliovirus", "Influenza", "Rotavirus"], a: 0, r: "Poxviruses are the largest viruses." },
{ q: "Which are DNA viruses? (Select all that apply.)", o: ["Herpes simplex virus", "Hepatitis B virus", "Varicella-zoster virus", "HIV", "Cytomegalovirus"], a: [0, 1, 2, 4], s: true, r: "HIV is an RNA retrovirus." },
{ q: "Which are RNA viruses? (Select all that apply.)", o: ["Measles", "Poliovirus", "SARS-CoV-2", "Hepatitis C", "HPV"], a: [0, 1, 2, 3], s: true, r: "HPV is a DNA virus; the other four have RNA genomes." },
{ q: "The most common method used to cultivate viruses in the laboratory is:", o: ["Cell (tissue) culture", "Blood agar", "MacConkey agar", "Sabouraud agar"], a: 0, r: "Viruses need living cells." },
{ q: "Damage seen in infected cell cultures is called:", o: ["Cytopathic effect", "Hemolysis", "Agglutination", "Fermentation"], a: 0, r: "CPE indicates viral growth." },
{ q: "Embryonated hen's eggs are classically used to grow:", o: ["Influenza virus (and its vaccine)", "Rotavirus only", "HIV", "Hepatitis B"], a: 0, r: "Influenza vaccines are produced in eggs." },
{ q: "An IgM antibody to a virus indicates:", o: ["Recent (acute) infection", "Past infection years ago", "Vaccination only", "No infection"], a: 0, r: "IgM appears early and declines." },
{ q: "The most widely used method for rapid viral diagnosis today is:", o: ["PCR / RT-PCR", "Gram stain", "Blood culture", "Urine dipstick"], a: 0, r: "It detects viral nucleic acid sensitively." },
{ q: "Viral specimens should be: (Select all that apply.)", o: ["Collected early in the illness", "Placed in viral transport medium", "Kept cold and transported quickly", "Repeatedly frozen and thawed"], a: [0, 1, 2], s: true, r: "Freeze–thaw cycles damage viruses." },
{ q: "Which vaccines are live attenuated? (Select all that apply.)", o: ["MMR", "Varicella", "Oral polio vaccine", "Rotavirus", "Hepatitis B"], a: [0, 1, 2, 3], s: true, r: "Hepatitis B vaccine is a recombinant subunit vaccine." },
{ q: "Live attenuated vaccines are generally contraindicated in:", o: ["Pregnancy and severe immunosuppression", "Healthy children", "Elderly healthy adults", "Students"], a: 0, p: true, r: "Vaccine virus can cause disease in these groups." },
{ q: "Viruses multiply by:", o: ["Replication — synthesis and assembly of components", "Binary fission", "Budding of spores", "Mitosis"], a: 0, r: "Parts are made separately then assembled." },
{ q: "Interferons are:", o: ["Host proteins that inhibit viral replication", "Viral enzymes", "Antibiotics", "Bacterial toxins"], a: 0, r: "They induce an antiviral state in cells." },
{ q: "Negri bodies are inclusion bodies characteristic of:", o: ["Rabies", "Measles", "Influenza", "Polio"], a: 0, r: "They are seen in neurons." },
{ q: "Which viruses have helical nucleocapsids? (Select all that apply.)", o: ["Influenza", "Measles", "Rabies", "Poliovirus"], a: [0, 1, 2], s: true, r: "Poliovirus is icosahedral." },
{ q: "Passive immunization against viruses is provided by:", o: ["Immunoglobulins such as HBIG", "Live vaccines", "Antibiotics", "Interferon only"], a: 0, r: "Ready-made antibodies give immediate short-term protection." },
{ q: "Viruses can pass through filters that retain bacteria because of their:", o: ["Very small size", "Large size", "Cell wall", "Motility"], a: 0, r: "Filterability was historically used to define viruses." }
]
});

NS.reg("micro", "virology", "replication", {
intro: {
  en: "Viral **replication** is the process by which a virus takes over a host cell to make new virus particles. Because viruses lack their own metabolism, every step depends on the cell. One infected cell can release **hundreds to thousands of progeny virions**. Understanding the steps — **attachment, penetration, uncoating, synthesis, assembly and release** — explains **host and tissue specificity**, how **antiviral drugs** work (each blocks a particular step), and how infections spread.",
  ar: "**التضاعف الفيروسي** عملية سيطرة الفيروس على الخلية لصنع فيروسات جديدة. ولأن الفيروس بلا استقلاب ذاتي فكل خطوة تعتمد على الخلية. وقد تطلق خلية واحدة **مئات أو آلاف الفيروسات**. فهم الخطوات — **الالتصاق، الاختراق، نزع الغلاف، التخليق، التجميع، والإطلاق** — يفسر **نوعية المضيف والنسيج** وكيف تعمل **مضادات الفيروسات** (كل دواء يوقف خطوة)."
},
sections: [
{ h: { en: "Steps of viral replication", ar: "خطوات التضاعف الفيروسي" }, b: [
  { t: "cycle", center: "Viral|replication", steps: [
    { en: "**1. Attachment (adsorption)**: viral surface proteins bind **specific receptors** on the host cell — determines **tropism** (e.g., HIV gp120 → **CD4** + CCR5/CXCR4; influenza hemagglutinin → **sialic acid**; SARS-CoV-2 spike → **ACE2**; poliovirus → CD155 on neurons/gut)", ar: "**1. الالتصاق**: بروتينات الفيروس ترتبط **بمستقبلات خاصة** — تحدد **الانتحاء** (HIV ← **CD4**؛ الإنفلونزا ← **حمض السياليك**؛ كورونا ← **ACE2**)" },
    { en: "**2. Penetration (entry)**: **receptor-mediated endocytosis** (viropexis), **fusion of envelope with cell membrane** (HIV), or direct translocation (naked viruses)", ar: "**2. الاختراق**: **الالتقام** أو **اندماج الغلاف مع الغشاء** (HIV)" },
    { en: "**3. Uncoating**: capsid removed, genome released into cytoplasm/nucleus (influenza needs **acidification in endosome** — blocked by amantadine)", ar: "**3. نزع الغلاف**: تحرير الجينوم (الإنفلونزا تحتاج **تحميض الجسيم الداخلي**)" },
    { en: "**4. Synthesis (eclipse period)**: **mRNA transcription → early proteins (enzymes) → genome replication → late (structural) proteins**; no infectious virus detectable inside the cell during this **eclipse period**", ar: "**4. التخليق (فترة الكسوف)**: **النسخ ← بروتينات مبكرة ← تضاعف الجينوم ← بروتينات متأخرة**؛ لا فيروس معدٍ يمكن كشفه" },
    { en: "**5. Assembly (maturation)**: genome packaged into capsids → nucleocapsids (in nucleus — most DNA viruses; in cytoplasm — most RNA viruses); HIV protease cleaves polyproteins", ar: "**5. التجميع والنضج**: تعبئة الجينوم في القفيصة؛ بروتياز HIV يقطع البروتينات" },
    { en: "**6. Release**: **naked viruses — cell lysis** (cell dies); **enveloped viruses — budding** through the membrane (acquire envelope; cell may survive); influenza **neuraminidase** frees new virions (blocked by **oseltamivir**)", ar: "**6. الإطلاق**: **العارية — تحلل الخلية**؛ **المغلفة — التبرعم**؛ **النيورامينيداز** يحرر فيروسات الإنفلونزا (يوقفه **الأوسيلتاميفير**)" } ] },
  { t: "table", h: ["Genome type", "Replication strategy"], r: [
    ["**dsDNA** (herpes, adeno, HPV, pox)", "Usually in the **nucleus** using host RNA polymerase (poxviruses in cytoplasm with own enzymes)"],
    ["**Positive-sense ssRNA (+)** (polio, hepatitis A & C, coronaviruses, rubella)", "**Genome acts directly as mRNA** → translated immediately; **naked RNA is infectious**"],
    ["**Negative-sense ssRNA (−)** (influenza, measles, mumps, rabies, RSV)", "Must be transcribed to (+) mRNA by **RNA-dependent RNA polymerase carried in the virion**"],
    ["**dsRNA** (rotavirus)", "Viral polymerase transcribes mRNA inside the core"],
    ["**Retroviruses** (HIV)", "**RNA → DNA by reverse transcriptase** → **integrase inserts provirus into host chromosome** → host transcribes new viral RNA (**lifelong infection**)"],
    ["**Hepatitis B** (partially dsDNA)", "Replicates **through an RNA intermediate using reverse transcriptase**; cccDNA persists in nucleus"]],
    ar: { h: ["نوع الجينوم", "استراتيجية التضاعف"], r: [
    ["**DNA مزدوج**", "غالباً في **النواة**"], ["**RNA موجب**", "**الجينوم يعمل كرسول مباشرة** — **معدٍ بذاته**"],
    ["**RNA سالب**", "يُنسخ لرسول **ببوليميراز يحمله الفيروس**"], ["**RNA مزدوج (الروتا)**", "بوليميراز فيروسي"],
    ["**الفيروسات القهقرية (HIV)**", "**RNA ← DNA بالمنتسخة العكسية** ← **الإنتغراز يدمجه في كروموسوم المضيف** (**عدوى مدى الحياة**)"],
    ["**التهاب الكبد B**", "يتضاعف **عبر وسيط RNA بالمنتسخة العكسية**"]] } }
]},
{ h: { en: "Patterns of infection and antiviral drug targets", ar: "أنماط العدوى وأهداف مضادات الفيروسات" }, b: [
  { t: "table", h: ["Pattern", "Description / example"], r: [
    ["**Lytic (cytocidal)**", "Virus multiplies and **kills the cell** — polio, influenza, rotavirus"],
    ["**Persistent (chronic, productive)**", "Continuous low-level virus production without killing cell — **hepatitis B and C**, HIV"],
    ["**Latent**", "Genome stays **dormant** without producing virus; **reactivates** later under stress/immunosuppression — **herpes simplex (cold sores), varicella-zoster (shingles)**, CMV, EBV; HIV in resting T cells"],
    ["**Transforming (oncogenic)**", "Viral genes cause **uncontrolled cell growth** — **HPV (cervical cancer)**, **HBV/HCV (hepatocellular carcinoma)**, **EBV (Burkitt lymphoma, nasopharyngeal carcinoma)**, HTLV-1, HHV-8 (Kaposi sarcoma)"],
    ["**Slow virus infection**", "Long incubation, progressive — subacute sclerosing panencephalitis (**SSPE — measles**), progressive multifocal leukoencephalopathy (JC virus)"]],
    ar: { h: ["النمط", "الوصف / مثال"], r: [
    ["**الحال للخلية**", "يقتل الخلية — شلل الأطفال والإنفلونزا"], ["**المستمر**", "إنتاج مستمر منخفض — **التهاب الكبد B وC**"],
    ["**الكامن**", "يبقى **خاملاً** ثم **ينشط** — **الحلأ البسيط والنطاقي**"],
    ["**المحوّل (المسرطن)**", "**HPV (سرطان عنق الرحم)**، **B وC (سرطان الكبد)**، **إبشتاين-بار**"],
    ["**البطيء**", "**التهاب الدماغ المصلب (الحصبة)**"]] } },
  { t: "table", h: ["Step blocked", "Antiviral drug (example)"], r: [
    ["Attachment / entry", "**Maraviroc** (CCR5 antagonist — HIV), **enfuvirtide** (fusion inhibitor — HIV), monoclonal antibodies"],
    ["Uncoating", "**Amantadine/rimantadine** (influenza A — resistance now common)"],
    ["Nucleic acid synthesis", "**Acyclovir/valacyclovir** (HSV, VZV — activated by viral thymidine kinase), **ganciclovir** (CMV), **nucleoside/nucleotide reverse transcriptase inhibitors** (zidovudine, tenofovir, lamivudine — HIV, HBV), **NNRTIs** (efavirenz), **sofosbuvir** (HCV polymerase), **remdesivir** (SARS-CoV-2), ribavirin"],
    ["Integration", "**Integrase inhibitors** — dolutegravir, raltegravir (HIV)"],
    ["Assembly / maturation", "**Protease inhibitors** — lopinavir, darunavir (HIV); nirmatrelvir (COVID-19); HCV protease inhibitors"],
    ["Release", "**Neuraminidase inhibitors — oseltamivir, zanamivir** (influenza A and B)"],
    ["Immune modulators", "**Interferon-alpha** (hepatitis B/C historically)"]],
    ar: { h: ["الخطوة الموقوفة", "الدواء"], r: [
    ["الالتصاق والدخول", "**المارافيروك** و**الإنفوفيرتيد** (HIV)"], ["نزع الغلاف", "**الأمانتادين** (الإنفلونزا A)"],
    ["تخليق الحمض النووي", "**الأسيكلوفير** (الحلأ)، **الغانسيكلوفير** (CMV)، **مثبطات المنتسخة العكسية** (التينوفوفير)، **السوفوسبوفير** (C)، **الريمديسيفير**"],
    ["الإدماج", "**مثبطات الإنتغراز** — الدولوتيغرافير"], ["التجميع", "**مثبطات البروتياز**"],
    ["الإطلاق", "**مثبطات النيورامينيداز — الأوسيلتاميفير**"], ["المعدلات المناعية", "**الإنترفيرون ألفا**"]] } },
  { t: "tip", en: "**Why antivirals are harder to develop than antibiotics**: viruses use host-cell machinery, so drugs must target **virus-specific enzymes** (reverse transcriptase, protease, neuraminidase, thymidine kinase) without harming host cells; most antivirals **suppress replication but do not eliminate latent virus**, and **resistance** develops quickly (HIV, influenza) — hence **combination therapy** for HIV.",
    ar: "**لماذا تصعب مضادات الفيروسات**: الفيروس يستعمل آليات الخلية، فيجب استهداف **إنزيمات خاصة بالفيروس** دون إيذاء الخلية؛ معظمها **يثبط التضاعف ولا يقضي على الفيروس الكامن**، و**المقاومة** تتطور سريعاً — لذا **العلاج المركب** في الإيدز." }
]}
],
questions: [
{ q: "The first step of viral replication is:", o: ["Attachment to specific host cell receptors", "Assembly", "Release", "Uncoating"], a: 0, r: "Receptor binding determines which cells are infected." },
{ q: "The receptor for HIV on T-helper cells is:", o: ["CD4", "ACE2", "Sialic acid", "CD155"], a: 0, r: "HIV gp120 binds CD4 with a co-receptor." },
{ q: "SARS-CoV-2 enters cells by binding its spike protein to:", o: ["ACE2 receptor", "CD4", "Sialic acid", "Acetylcholine receptor"], a: 0, r: "ACE2 is found in airway, lung, gut and vascular cells." },
{ q: "Influenza hemagglutinin binds to:", o: ["Sialic acid receptors", "CD4", "ACE2", "Insulin receptors"], a: 0, r: "This mediates attachment to respiratory epithelium." },
{ q: "The period after uncoating when no infectious virus can be detected inside the cell is the:", o: ["Eclipse period", "Incubation period", "Latent period of disease", "Window period"], a: 0, r: "Components are being made but not assembled." },
{ q: "Enveloped viruses are usually released by:", o: ["Budding", "Binary fission", "Spore formation", "Phagocytosis"], a: 0, r: "They acquire their envelope from the cell membrane." },
{ q: "Naked viruses are usually released by:", o: ["Cell lysis", "Budding", "Exocytosis of spores", "Conjugation"], a: 0, r: "The cell bursts and dies." },
{ q: "The enzyme that converts HIV RNA into DNA is:", o: ["Reverse transcriptase", "Neuraminidase", "Protease", "DNA ligase only"], a: 0, r: "Retroviruses reverse the normal flow of genetic information." },
{ q: "HIV infection is lifelong because:", o: ["Integrase inserts viral DNA into the host chromosome", "HIV forms spores", "Antibodies cannot form", "It lives outside cells"], a: 0, r: "Integrated provirus persists in latent cells." },
{ q: "Positive-sense RNA viruses are special because:", o: ["Their genome can act directly as mRNA", "They carry reverse transcriptase", "They have DNA", "They cannot be translated"], a: 0, r: "The naked RNA itself is infectious." },
{ q: "Negative-sense RNA viruses such as influenza must carry:", o: ["RNA-dependent RNA polymerase", "Reverse transcriptase", "DNA polymerase only", "Ribosomes"], a: 0, r: "Host cells cannot read negative-sense RNA." },
{ q: "Oseltamivir works by inhibiting:", o: ["Neuraminidase and release of influenza virus", "Reverse transcriptase", "Viral attachment to CD4", "Protein synthesis in bacteria"], a: 0, r: "New virions remain stuck to the cell." },
{ q: "Acyclovir is effective against:", o: ["Herpes simplex and varicella-zoster viruses", "Influenza", "HIV", "Rotavirus"], a: 0, r: "It is activated by viral thymidine kinase." },
{ q: "Which drug class blocks HIV integration into host DNA?", o: ["Integrase inhibitors (e.g., dolutegravir)", "Neuraminidase inhibitors", "Protease inhibitors", "Fusion inhibitors"], a: 0, r: "They prevent provirus formation." },
{ q: "Viruses that remain dormant and reactivate later cause which type of infection?", o: ["Latent infection", "Lytic infection", "Abortive infection", "Transforming infection only"], a: 0, r: "Herpesviruses are classic examples." },
{ q: "Shingles is caused by reactivation of:", o: ["Varicella-zoster virus", "Measles virus", "Influenza virus", "HPV"], a: 0, r: "VZV remains latent in sensory ganglia after chickenpox." },
{ q: "Which viruses are oncogenic? (Select all that apply.)", o: ["HPV", "Hepatitis B virus", "Epstein–Barr virus", "Hepatitis C virus", "Rhinovirus"], a: [0, 1, 2, 3], s: true, r: "Rhinovirus causes the common cold, not cancer." },
{ q: "HPV is associated with:", o: ["Cervical cancer", "Bladder cancer", "Brain tumors", "Leukemia only"], a: 0, r: "High-risk HPV types transform cervical cells." },
{ q: "Persistent infection with continuous low-level virus production is typical of:", o: ["Chronic hepatitis B and C", "Influenza", "Rotavirus", "Common cold"], a: 0, r: "Viremia continues for years." },
{ q: "SSPE (subacute sclerosing panencephalitis) is a slow virus complication of:", o: ["Measles", "Mumps", "Polio", "Influenza"], a: 0, r: "It appears years after measles infection." },
{ q: "Viral tropism (preference for certain tissues) is mainly determined by:", o: ["Presence of specific receptors on host cells", "Size of the virus", "Antibiotic use", "Temperature only"], a: 0, r: "Receptor distribution defines target tissues." },
{ q: "Protease inhibitors act at which step of viral replication?", o: ["Assembly and maturation", "Attachment", "Uncoating", "Transcription"], a: 0, r: "They prevent cleavage of viral polyproteins." },
{ q: "Why is HIV treated with combination antiretroviral therapy?", o: ["To prevent rapid emergence of drug resistance", "Because single drugs are illegal", "To cure latent infection immediately", "To reduce costs"], a: 0, r: "Multiple targets suppress resistant mutants." },
{ q: "Amantadine blocks which step in influenza A replication?", o: ["Uncoating", "Release", "Attachment", "Integration"], a: 0, r: "It inhibits the M2 ion channel; resistance is common." },
{ q: "Which steps are part of viral replication? (Select all that apply.)", o: ["Attachment", "Penetration", "Uncoating", "Assembly", "Binary fission"], a: [0, 1, 2, 3], s: true, r: "Viruses do not divide by fission." },
{ q: "Hepatitis B virus replicates through:", o: ["An RNA intermediate using reverse transcriptase", "Binary fission", "Direct translation of DNA", "Budding spores"], a: 0, r: "This is why some HIV drugs also treat HBV." },
{ q: "Fusion of the viral envelope with the cell membrane is a mode of:", o: ["Penetration", "Release", "Assembly", "Attachment only"], a: 0, r: "HIV enters cells this way." },
{ q: "Most antiviral drugs:", o: ["Suppress replication but do not eliminate latent virus", "Kill latent viruses completely", "Work like antibiotics", "Act on bacterial cell walls"], a: 0, r: "Latent genomes are not replicating and escape drugs." },
{ q: "Remdesivir and sofosbuvir inhibit:", o: ["Viral RNA polymerase", "Neuraminidase", "Reverse transcriptase only", "Bacterial ribosomes"], a: 0, r: "They are nucleotide analogues for RNA viruses." },
{ q: "One infected cell can release:", o: ["Hundreds to thousands of new virions", "Only one virion", "No virions", "Only bacteria"], a: 0, r: "This explains rapid spread of infection." }
]
});

NS.reg("micro", "parasitology", "routes", {
intro: {
  en: "To prevent a parasitic disease you must know **how the parasite reaches its host**. Each parasite has a **source of infection** (infected human, animal reservoir, contaminated soil or water), an **infective stage**, a **portal of entry** and a **mode of transmission**. Knowing these links lets the nurse break the chain with hygiene, safe water, food safety, vector control and health education.",
  ar: "للوقاية من الأمراض الطفيلية يجب معرفة **كيف يصل الطفيلي إلى مضيفه**. لكل طفيلي **مصدر عدوى** (إنسان مصاب، حيوان مستودع، تربة أو ماء ملوث)، و**طور معدٍ**، و**باب دخول**، و**طريقة انتقال**. معرفة هذه الحلقات تمكّن الممرض من كسر السلسلة بالنظافة والماء الآمن وسلامة الغذاء ومكافحة النواقل والتثقيف الصحي."
},
sections: [
{ h: { en: "Sources of infection", ar: "مصادر العدوى" }, b: [
  { t: "cards", items: [
    { i: "people", en: "Infected humans", d: "Patients and **carriers** — *E. histolytica*, *Giardia*, *Enterobius*, *Trichomonas*, *P. falciparum*", ar: "المرضى و**الحاملون**" },
    { i: "bug", en: "Animals (zoonoses)", d: "Dogs (hydatid, *Leishmania*), cats (*Toxoplasma*), cattle and pigs (*Taenia*), sheep (*Fasciola*), rodents", ar: "الحيوانات: الكلاب والقطط والأبقار والخنازير والأغنام والقوارض" },
    { i: "leaf", en: "Soil", d: "Contaminated with eggs/larvae — *Ascaris*, *Trichuris*, **hookworm larvae**, *Strongyloides*", ar: "التربة الملوثة بالبيوض واليرقات" },
    { i: "drop", en: "Water", d: "Cysts (*Giardia*, *E. histolytica*), **cercariae of *Schistosoma*** in fresh water, metacercariae on water plants (*Fasciola*)", ar: "الماء: الأكياس والمذنبات" },
    { i: "food", en: "Food", d: "Undercooked **beef (*T. saginata*)**, **pork (*T. solium*, *Trichinella*)**, raw vegetables, fish", ar: "الطعام: اللحم غير المطبوخ جيداً والخضار النيئة" },
    { i: "bug", en: "Arthropod vectors", d: "Mosquito, sandfly, tsetse fly, triatomine bug", ar: "النواقل المفصلية" } ] }
]},
{ h: { en: "Modes of transmission and portals of entry", ar: "طرق الانتقال وأبواب الدخول" }, b: [
  { t: "table", h: ["Route", "Mechanism", "Examples (infective stage)"], r: [
    ["**Oral — fecal–oral (most common)**", "Ingestion of **food or water contaminated with feces**, dirty hands, flies", "*E. histolytica* & *Giardia* (**cysts**), *Balantidium* (cyst), *Ascaris*, *Trichuris*, *Enterobius* (**embryonated eggs**), *Hymenolepis nana* (eggs), *T. solium* eggs → cysticercosis, *Echinococcus* eggs (from dogs)"],
    ["**Oral — eating undercooked meat/fish/plants**", "Larval stages in **flesh** or on **plants**", "*T. saginata* (**cysticercus bovis in beef**), *T. solium* (**cysticercus cellulosae in pork**), *Toxoplasma* (**tissue cysts** in meat; oocysts from cat feces), *Fasciola* (**metacercariae on watercress**)"],
    ["**Skin penetration**", "Active penetration of intact skin by larvae", "**Hookworm and *Strongyloides* — filariform larvae** (walking barefoot on soil); **Schistosoma — cercariae** (swimming, bathing, washing in canals)"],
    ["**Vector-borne (insect bite)**", "Inoculation through bite or contamination of bite", "*Plasmodium* (**sporozoites** — female *Anopheles*); *Leishmania* (**promastigotes** — sandfly); African *Trypanosoma* (**metacyclic trypomastigotes** — tsetse); *T. cruzi* (in **bug feces** rubbed into bite)"],
    ["**Sexual contact**", "Direct genital contact", "***Trichomonas vaginalis*** (trophozoite — no cyst stage); *Giardia*/*Entamoeba* in oral–anal sex"],
    ["**Congenital (transplacental / vertical)**", "Mother to fetus across placenta", "***Toxoplasma gondii*** (especially primary infection in pregnancy), *Plasmodium*, *T. cruzi*"],
    ["**Blood transfusion / organ transplant / needles**", "Infected blood or organs", "*Plasmodium* (transfusion malaria), *Trypanosoma*, *Leishmania*, *Toxoplasma* (transplant); sharing needles"],
    ["**Inhalation**", "Inhaling eggs in dust", "*Enterobius* eggs (airborne in bedroom dust)"],
    ["**Autoinfection**", "Same host re-infected", "*Enterobius* (external — scratching anus → mouth), *Strongyloides*, *H. nana* (internal)"],
    ["**Direct contact / nasal**", "Water entering the nose", "*Naegleria fowleri* (swimming in warm fresh water) → meningoencephalitis"]],
    ar: { h: ["الطريق", "الآلية", "أمثلة (الطور المعدي)"], r: [
    ["**الفموي — البرازي الفموي (الأشيع)**", "تناول **طعام أو ماء ملوث بالبراز** والأيدي القذرة والذباب", "الأميبا والجيارديا (**الأكياس**)، الأسكارس والدبوسية (**البيوض المتجنينة**)، بيوض الخنزيرية ← داء الكيسات المذنبة، بيوض المشوكة"],
    ["**الفموي — اللحم غير المطبوخ**", "أطوار يرقية في **اللحم** أو **النباتات**", "الشريطية البقرية (**الكيسة المذنبة في لحم البقر**)، الخنزيرية (**في لحم الخنزير**)، المقوسة (**الأكياس النسيجية**)، المتورقة (**المذنبات المتكيسة على الجرجير**)"],
    ["**اختراق الجلد**", "اختراق نشط ليرقات", "**الشصية والأسطوانية — اليرقات الخيطية** (المشي حافياً)؛ **البلهارسيا — المذنبات** (السباحة في الأنهار)"],
    ["**النواقل (اللدغ)**", "الحقن عبر اللدغة", "البلازموديوم (**البوغيات** — الأنوفيلس)؛ الليشمانيا (**أمامية السوط** — ذبابة الرمل)؛ المثقبيات"],
    ["**الاتصال الجنسي**", "تماس تناسلي", "***المشعرة المهبلية*** (الطور النشط فقط)"],
    ["**الخلقي (عبر المشيمة)**", "من الأم للجنين", "***المقوسة الغوندية***، البلازموديوم"],
    ["**نقل الدم والأعضاء والإبر**", "دم أو أعضاء مصابة", "البلازموديوم والمثقبيات والليشمانيا والمقوسة"],
    ["**الاستنشاق**", "بيوض في الغبار", "بيوض الدبوسية"],
    ["**العدوى الذاتية**", "إعادة عدوى المضيف", "الدبوسية والأسطوانية والمحرشفة القزمة"],
    ["**التماس المباشر / الأنف**", "دخول الماء للأنف", "النغليرية ← التهاب الدماغ والسحايا"]] } },
  { t: "tip", en: "**Memorize the infective stage per route**: cysts (protozoa, fecal–oral), **embryonated eggs** (*Ascaris*, *Trichuris*, *Enterobius*), **filariform larvae through skin** (hookworm, *Strongyloides*), **cercariae through skin** (*Schistosoma*), **metacercariae on plants** (*Fasciola*), **cysticerci in meat** (*Taenia*), **sporozoites by bite** (*Plasmodium*).",
    ar: "**احفظ الطور المعدي لكل طريق**: الأكياس (الأوالي)، **البيوض المتجنينة** (الأسكارس والسوطية والدبوسية)، **اليرقات الخيطية عبر الجلد** (الشصية)، **المذنبات عبر الجلد** (البلهارسيا)، **المذنبات المتكيسة على النبات** (المتورقة)، **الكيسات المذنبة في اللحم** (الشريطيات)، **البوغيات باللدغ** (البلازموديوم)." }
]},
{ h: { en: "Factors affecting transmission and prevention", ar: "العوامل المؤثرة في الانتقال والوقاية" }, b: [
  { t: "list", en: [
    "**Environmental**: warm humid climate, poor **sanitation and sewage disposal**, unsafe water supply, irrigation canals (snails), presence of vectors",
    "**Socioeconomic and behavioral**: poverty, overcrowding (*Enterobius*, lice), **eating raw/undercooked meat or unwashed vegetables**, walking barefoot, open defecation, using human feces as fertilizer, keeping dogs close to children, swimming in canals",
    "**Host factors**: age (children — *Enterobius*, *Ascaris*, *Giardia*), **immune status (AIDS, steroids → opportunistic infections)**, malnutrition, pregnancy (*Toxoplasma*), occupation (farmers, shepherds, butchers)"],
    ar: [
    "**البيئية**: المناخ الدافئ الرطب، سوء **الصرف الصحي**، الماء غير الآمن، قنوات الري (القواقع)، وجود النواقل",
    "**الاجتماعية والسلوكية**: الفقر، الازدحام، **أكل اللحم النيء والخضار غير المغسولة**، المشي حافياً، التبرز في العراء، تسميد التربة بالبراز، الكلاب قرب الأطفال، السباحة في الأنهار",
    "**عوامل المضيف**: العمر (الأطفال)، **المناعة (الإيدز والكورتيزون)**، سوء التغذية، الحمل (المقوسة)، المهنة (المزارعون والرعاة والجزارون)"] },
  { t: "table", h: ["Route to break", "Preventive measures (nursing health education)"], r: [
    ["**Fecal–oral**", "**Hand washing** with soap after toilet and before food; **safe drinking water (boiling, filtration, chlorination — note cysts resist chlorine; boiling kills them)**; wash vegetables; protect food from flies; **sanitary latrines and sewage disposal**; treat carriers, especially food handlers"],
    ["**Meat-borne**", "**Cook meat thoroughly**; meat inspection at slaughterhouses; freezing meat; avoid raw watercress from contaminated areas"],
    ["**Skin penetration**", "**Wear shoes**; avoid swimming/washing in canals and slow fresh water; snail control"],
    ["**Vector-borne**", "Insecticide-treated **bed nets**, repellents, protective clothing, screens, indoor residual spraying, eliminate breeding sites, treat cases"],
    ["**Zoonotic**", "Deworm dogs, don't feed dogs raw offal, pregnant women avoid cleaning cat litter and handling raw meat"],
    ["**Blood-borne / congenital / sexual**", "Screen blood donors in endemic areas; prenatal screening; condoms and treatment of both partners (*Trichomonas*)"]],
    ar: { h: ["الطريق", "إجراءات الوقاية (التثقيف الصحي)"], r: [
    ["**البرازي الفموي**", "**غسل اليدين** بالصابون؛ **ماء شرب آمن (الغلي يقتل الأكياس، والكلور لا يكفي ضدها)**؛ غسل الخضار؛ حماية الطعام من الذباب؛ **مراحيض صحية**؛ علاج الحاملين خاصة متداولي الطعام"],
    ["**المنقول باللحم**", "**طبخ اللحم جيداً**؛ فحص اللحوم؛ التجميد"],
    ["**اختراق الجلد**", "**لبس الأحذية**؛ تجنب السباحة في القنوات؛ مكافحة القواقع"],
    ["**النواقل**", "**الناموسيات المعالجة**، الطاردات، الملابس الواقية، الرش، إزالة أماكن التكاثر"],
    ["**الحيوانية المنشأ**", "تطهير الكلاب من الديدان وعدم إطعامها الأحشاء النيئة؛ الحامل تتجنب فضلات القطط واللحم النيء"],
    ["**الدم / الخلقي / الجنسي**", "فحص المتبرعين؛ فحص ما قبل الولادة؛ الواقي وعلاج الشريكين"]] } }
]}
],
questions: [
{ q: "The most common route of transmission of intestinal parasites is:", o: ["Fecal–oral", "Skin penetration", "Insect bite", "Transplacental"], a: 0, r: "Contaminated food, water and hands transmit most intestinal parasites." },
{ q: "Which parasites are acquired by skin penetration of larvae? (Select all that apply.)", o: ["Hookworm", "Strongyloides stercoralis", "Schistosoma", "Ascaris lumbricoides"], a: [0, 1, 2], s: true, r: "Ascaris is acquired by ingesting embryonated eggs." },
{ q: "The infective stage of Schistosoma for humans is the:", o: ["Egg", "Miracidium", "Cercaria", "Metacercaria"], a: 2, r: "Free-swimming cercariae penetrate skin in fresh water." },
{ q: "Fasciola hepatica is acquired by eating:", o: ["Undercooked pork", "Watercress carrying metacercariae", "Raw fish only", "Contaminated milk"], a: 1, r: "Metacercariae encyst on aquatic plants." },
{ q: "Taenia saginata infection is acquired by eating:", o: ["Undercooked beef containing cysticerci", "Undercooked pork", "Vegetables with eggs", "Raw fish"], a: 0, r: "Cysticercus bovis develops in cattle muscle." },
{ q: "Human cysticercosis results from ingestion of:", o: ["Taenia solium eggs", "Cysticerci in beef", "Hookworm larvae", "Plasmodium sporozoites"], a: 0, r: "Eggs hatch in humans and larvae lodge in tissues." },
{ q: "Plasmodium is transmitted to humans by the bite of:", o: ["Female Anopheles mosquito", "Sandfly", "Tsetse fly", "Housefly"], a: 0, r: "Sporozoites are injected with mosquito saliva." },
{ q: "Leishmania is transmitted by the:", o: ["Sandfly", "Anopheles mosquito", "Tick", "Flea"], a: 0, r: "Sandflies inject promastigotes." },
{ q: "Trypanosoma cruzi infection occurs when:", o: ["Triatomine bug feces are rubbed into the bite wound", "A mosquito bites", "Raw pork is eaten", "Water enters the nose"], a: 0, r: "The infective trypomastigotes are in the bug's feces." },
{ q: "Which parasite is transmitted sexually?", o: ["Trichomonas vaginalis", "Ascaris", "Fasciola", "Hookworm"], a: 0, r: "T. vaginalis is a sexually transmitted protozoan." },
{ q: "Which parasite is most important in transplacental (congenital) transmission?", o: ["Toxoplasma gondii", "Enterobius", "Taenia saginata", "Fasciola"], a: 0, r: "Primary maternal toxoplasmosis can infect the fetus." },
{ q: "Which parasites can be transmitted by blood transfusion? (Select all that apply.)", o: ["Plasmodium", "Trypanosoma", "Leishmania", "Enterobius"], a: [0, 1, 2], s: true, r: "Blood parasites can be transfused; Enterobius is intestinal." },
{ q: "Enterobius eggs can be transmitted by:", o: ["Ingestion, inhalation of dust and autoinfection", "Mosquito bite only", "Skin penetration", "Transfusion"], a: 0, r: "Eggs are light and can be airborne; scratching causes autoinfection." },
{ q: "Naegleria fowleri enters the body through the:", o: ["Nose while swimming in warm fresh water", "Skin of feet", "Mosquito bite", "Placenta"], a: 0, r: "It travels along the olfactory nerve to the brain." },
{ q: "Which measure kills protozoan cysts in drinking water most reliably at home?", o: ["Boiling", "Routine chlorination", "Refrigeration", "Adding sugar"], a: 0, r: "Cysts are relatively resistant to chlorine." },
{ q: "Wearing shoes mainly prevents infection with:", o: ["Hookworm", "Giardia", "Taenia", "Plasmodium"], a: 0, r: "Filariform larvae penetrate bare feet." },
{ q: "Thorough cooking of meat prevents: (Select all that apply.)", o: ["Taenia saginata", "Taenia solium taeniasis", "Toxoplasmosis from tissue cysts", "Malaria"], a: [0, 1, 2], s: true, r: "Cooking kills cysticerci and tissue cysts in meat; malaria is transmitted by mosquitoes, not meat." },
{ q: "A pregnant woman should avoid cleaning cat litter to prevent:", o: ["Toxoplasmosis", "Giardiasis", "Hookworm", "Hydatid disease"], a: 0, r: "Cat feces contain Toxoplasma oocysts." },
{ q: "Deworming dogs and not feeding them raw offal prevents:", o: ["Hydatid disease", "Malaria", "Trichomoniasis", "Fascioliasis"], a: 0, r: "Dogs harbor adult Echinococcus." },
{ q: "Avoiding swimming in irrigation canals prevents:", o: ["Schistosomiasis", "Enterobiasis", "Taeniasis", "Toxoplasmosis"], a: 0, r: "Cercariae are released by snails into fresh water." },
{ q: "Insecticide-treated bed nets prevent:", o: ["Malaria", "Amoebiasis", "Ascariasis", "Fascioliasis"], a: 0, r: "Nets block night-biting Anopheles." },
{ q: "Houseflies contribute to transmission of intestinal protozoa by acting as:", o: ["Mechanical vectors", "Biological vectors", "Definitive hosts", "Intermediate hosts"], a: 0, r: "Flies carry cysts on their legs to food." },
{ q: "Which group of people is especially important to screen and treat for E. histolytica cysts?", o: ["Food handlers", "Office workers", "Drivers", "Athletes"], a: 0, r: "Infected food handlers can spread cysts widely." },
{ q: "Which factors increase transmission of intestinal parasites? (Select all that apply.)", o: ["Poor sanitation", "Unsafe water", "Overcrowding", "Using human feces as fertilizer", "Regular hand washing"], a: [0, 1, 2, 3], s: true, r: "Hand washing reduces transmission." },
{ q: "Which parasite is transmitted in its trophozoite stage because it has no cyst stage?", o: ["Trichomonas vaginalis", "Giardia lamblia", "Entamoeba histolytica", "Balantidium coli"], a: 0, r: "T. vaginalis has no cyst form." },
{ q: "The infective stage of Ascaris lumbricoides is the:", o: ["Embryonated egg", "Filariform larva", "Cercaria", "Adult worm"], a: 0, r: "Eggs containing infective larvae are swallowed." },
{ q: "Which population is at higher risk for severe opportunistic parasitic infections?", o: ["Patients with AIDS", "Healthy adults", "Athletes", "Vaccinated children"], a: 0, r: "Impaired cell-mediated immunity allows severe disease." },
{ q: "The infective stage of Plasmodium for man is the:", o: ["Sporozoite", "Merozoite", "Gametocyte", "Ookinete"], a: 0, r: "Sporozoites enter the blood from mosquito saliva." },
{ q: "Washing raw vegetables thoroughly helps prevent which infections? (Select all that apply.)", o: ["Ascariasis", "Amoebiasis", "Fascioliasis", "Malaria"], a: [0, 1, 2], s: true, r: "Eggs, cysts and metacercariae contaminate vegetables." },
{ q: "Treatment of both sexual partners is essential in:", o: ["Trichomoniasis", "Giardiasis", "Hydatid disease", "Malaria"], a: 0, r: "Untreated partners cause reinfection." }
]
});

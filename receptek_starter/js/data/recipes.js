
export const RECIPES = [
  {
    id: "csirkepaprikas",
    title: "Csirkepaprikás",
    category: "foetel",
    difficulty: "kozepes",
    time: 45,
    servings: 4,
    image: "images/receptek/csirkepaprikas.jpg",
    description: "Klasszikus magyar fogás selymes szafttal.",
    ingredients: [
      { name: "csirkecomb", qty: "1 kg" },
      { name: "vöröshagyma", qty: "2 fej" },
      { name: "fűszerpaprika", qty: "2 ek" },
      { name: "só", qty: "ízlés szerint" },
      { name: "bors", qty: "ízlés szerint" }
    ],
    steps: [
      "A hagymát felaprítjuk és üvegesre pirítjuk.",
      "Hozzáadjuk a paprikát, majd a csirkét és fűszerezzük.",
      "Lefedve, kis lángon puhára főzzük."
    ],
    tags: ["magyar", "tejfölös"]
  },
  {
    id: "zoldsegleves",
    title: "Gyors zöldségleves",
    category: "leves",
    difficulty: "konnyu",
    time: 25,
    servings: 4,
    image: "images/receptek/zoldsegleves.jpg",
    description: "Könnyű, frissítő leves szezonális zöldségekből.",
    ingredients: [
      { name: "répa", qty: "2 db" },
      { name: "zeller", qty: "1 szár" },
      { name: "karfiol", qty: "1 db" },
      { name: "krumpli", qty: "2 közepes" },
      { name: "só", qty: "ízlés szerint" },
      { name: "petrezselyem", qty: "1 csokor" }
    ],
    steps: [
      "A zöldségeket felkockázzuk és vízben főzzük.",
      "Fűszerezzük, friss petrezselyemmel tálaljuk."
    ],
    tags: ["vega", "gluténmentes"]
  },
  {
    id: "palacsinta",
    title: "Palacsinta",
    category: "desszert",
    difficulty: "konnyu",
    time: 30,
    servings: 6,
    image: "images/receptek/palacsinta.jpg",
    description: "Vékony tésztájú, klasszikus palacsinta.",
    ingredients: [
      { name: "liszt", qty: "200 g" },
      { name: "tojás", qty: "2 db" },
      { name: "tej", qty: "300 ml" },
      { name: "csipet só", qty: "" }
    ],
    steps: [
      "A hozzávalókat simára keverjük.",
      "Pihentetjük 10 percet, majd kisütjük."
    ],
    tags: ["édes", "klasszikus"]
  },
  {
  id: "rantott_hus",
  title: "Rántott hús",
  category: "foetel",
  difficulty: "kozepes",
  time: 40,
  servings: 4,
  image: "images/receptek/rantotthusi.webp",
  description: "Klasszikus rántott sertésszelet ropogós panírral.",
  ingredients: [
    { name: "sertéskaraj", qty: "4 szelet" },
    { name: "liszt", qty: "100 g" },
    { name: "tojás", qty: "2 db" },
    { name: "zsemlemorzsa", qty: "150 g" },
    { name: "olaj", qty: "a sütéshez" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A húst kiklopfoljuk, megsózzuk.",
    "Beleforgatjuk lisztbe, tojásba, zsemlemorzsába.",
    "Bő olajban aranybarnára sütjük."
  ],
  tags: ["hagyományos", "magyar"]
},
{
  id: "gulyasleves",
  title: "Gulyásleves",
  category: "leves",
  difficulty: "kozepes",
  time: 90,
  servings: 6,
  image: "images/receptek/gulyas_leves.jpg",
  description: "Magyar klasszikus marhahúsból, burgonyával és fűszerpaprikával.",
  ingredients: [
    { name: "marhahús", qty: "500 g" },
    { name: "burgonya", qty: "3 db" },
    { name: "vöröshagyma", qty: "2 db" },
    { name: "fűszerpaprika", qty: "1 ek" },
    { name: "sárgarépa", qty: "2 db" },
    { name: "kömény", qty: "1 tk" }
  ],
  steps: [
    "A hagymát megdinszteljük, hozzáadjuk a húst és megpirítjuk.",
    "Megszórjuk paprikával, felöntjük vízzel, és főzzük, míg a hús puha.",
    "Beletesszük a zöldségeket, és készre főzzük."
  ],
  tags: ["magyar", "leves"]
},
{
  id: "rantotta",
  title: "Rántotta",
  category: "reggeli",
  difficulty: "konnyu",
  time: 10,
  servings: 2,
  image: "images/receptek/rantotta.jpg",
  description: "Gyors és egyszerű tojásrántotta.",
  ingredients: [
    { name: "tojás", qty: "4 db" },
    { name: "vaj", qty: "1 ek" },
    { name: "só", qty: "ízlés szerint" },
    { name: "bors", qty: "ízlés szerint" }
  ],
  steps: [
    "A tojásokat felverjük sóval és borssal.",
    "A vajon megsütjük, időnként megkeverve."
  ],
  tags: ["gyors", "reggeli"]
},
{
  id: "paprikas_csirke",
  title: "Paprikás csirke",
  category: "foetel",
  difficulty: "kozepes",
  time: 60,
  servings: 4,
  image: "images/receptek/paprikas_csirke.jpg",
  description: "Tejfölös csirkepörkölt szaftosan, galuskával tálalva.",
  ingredients: [
    { name: "csirkecomb", qty: "4 db" },
    { name: "vöröshagyma", qty: "1 db" },
    { name: "fűszerpaprika", qty: "1 ek" },
    { name: "tejföl", qty: "200 ml" },
    { name: "olaj", qty: "2 ek" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A hagymát megpirítjuk, beletesszük a csirkét és a paprikát.",
    "Lassú tűzön puhára főzzük.",
    "Tejföllel elkeverjük és összeforraljuk."
  ],
  tags: ["magyar", "klasszikus"]
},
{
  id: "lecsó",
  title: "Lecsó",
  category: "foetel",
  difficulty: "konnyu",
  time: 40,
  servings: 4,
  image: "images/receptek/lecso.jpg",
  description: "Zöldséges, paprikás-paradicsomos egytálétel.",
  ingredients: [
    { name: "tv paprika", qty: "5 db" },
    { name: "paradicsom", qty: "3 db" },
    { name: "vöröshagyma", qty: "2 db" },
    { name: "kolbász", qty: "100 g" },
    { name: "olaj", qty: "2 ek" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A hagymát megdinszteljük, hozzáadjuk a paprikát és paradicsomot.",
    "Főzzük, míg összeérnek az ízek, majd hozzáadjuk a kolbászt."
  ],
  tags: ["magyar", "egytaletel"]
},
{
  id: "palacsinta_turos",
  title: "Túrós palacsinta",
  category: "desszert",
  difficulty: "konnyu",
  time: 40,
  servings: 6,
  image: "images/receptek/turos_palacsinta.webp",
  description: "Édes túróval töltött palacsinta, porcukorral tálalva.",
  ingredients: [
    { name: "palacsinta", qty: "6 db" },
    { name: "túró", qty: "250 g" },
    { name: "cukor", qty: "2 ek" },
    { name: "vaníliás cukor", qty: "1 csomag" },
    { name: "citromhéj", qty: "1 tk" }
  ],
  steps: [
    "A túrót a cukrokkal és citromhéjjal kikeverjük.",
    "Megkenjük a palacsintákat, feltekerjük és porcukorral tálaljuk."
  ],
  tags: ["édes", "töltött"]
},
{
  id: "somloi_galuska",
  title: "Somlói galuska",
  category: "desszert",
  difficulty: "nehez",
  time: 90,
  servings: 8,
  image: "images/receptek/somloi_galuska.webp",
  description: "Klasszikus magyar desszert háromféle piskótával és csokoládéöntettel.",
  ingredients: [
    { name: "piskóta", qty: "3 lap" },
    { name: "darált dió", qty: "100 g" },
    { name: "mazsola", qty: "50 g" },
    { name: "csokoládéöntet", qty: "200 ml" },
    { name: "tejszínhab", qty: "a tálaláshoz" }
  ],
  steps: [
    "A piskótát rétegezzük dióval és mazsolával.",
    "Meglocsoljuk csokoládéöntettel és hűtjük.",
    "Tejszínhabbal tálaljuk."
  ],
  tags: ["édes", "ünnepi"]
},
{
  id: "tojassalata",
  title: "Tojássaláta",
  category: "salata",
  difficulty: "konnyu",
  time: 15,
  servings: 4,
  image: "images/receptek/tojassalata.jpeg",
  description: "Hideg tojásos saláta majonézzel.",
  ingredients: [
    { name: "tojás", qty: "6 db" },
    { name: "majonéz", qty: "3 ek" },
    { name: "mustár", qty: "1 tk" },
    { name: "só", qty: "ízlés szerint" },
    { name: "bors", qty: "ízlés szerint" }
  ],
  steps: [
    "A tojásokat megfőzzük, felaprítjuk.",
    "Összekeverjük a majonézzel és mustárral."
  ],
  tags: ["hideg", "gyors"]
},
{
  id: "spagetti_bolognai",
  title: "Bolognai spagetti",
  category: "foetel",
  difficulty: "kozepes",
  time: 45,
  servings: 4,
  image: "images/receptek/bolognai_spagetti.jpg",
  description: "Paradicsomos darált húsos spagetti, olasz módra.",
  ingredients: [
    { name: "spagetti tészta", qty: "400 g" },
    { name: "darált marhahús", qty: "400 g" },
    { name: "paradicsomszósz", qty: "400 ml" },
    { name: "vöröshagyma", qty: "1 db" },
    { name: "fokhagyma", qty: "2 gerezd" },
    { name: "olaj", qty: "2 ek" }
  ],
  steps: [
    "A hagymát és fokhagymát megpirítjuk, hozzáadjuk a húst.",
    "Felöntjük a paradicsomszósszal, és főzzük 30 percig.",
    "A kifőtt tésztával összekeverve tálaljuk."
  ],
  tags: ["olasz", "tészta"]
},
{
  id: "rakott_zoldseg",
  title: "Rakott zöldség",
  category: "vega",
  difficulty: "kozepes",
  time: 50,
  servings: 4,
  image: "images/receptek/rakott_zoldseg.jpg",
  description: "Sütőben sült zöldséges egytálétel tejfölös sajttal a tetején.",
  ingredients: [
    { name: "burgonya", qty: "4 db" },
    { name: "cukkini", qty: "1 db" },
    { name: "répa", qty: "2 db" },
    { name: "tejföl", qty: "200 ml" },
    { name: "reszelt sajt", qty: "100 g" },
    { name: "olaj", qty: "1 ek" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A zöldségeket felszeleteljük és előfőzzük.",
    "Rétegezzük egy tepsibe, leöntjük tejföllel és megszórjuk sajttal.",
    "180°C-on 25-30 percig sütjük."
  ],
  tags: ["vegetáriánus", "egytaletel"]
},
{
  id: "paradicsomos_mozzarella_salata",
  title: "Paradicsomos mozzarella saláta",
  category: "vega",
  difficulty: "konnyu",
  time: 10,
  servings: 2,
  image: "images/receptek/paradicsomos_mozzarella_salata.jpg",
  description: "Friss, olaszos saláta bazsalikommal és olívaolajjal.",
  ingredients: [
    { name: "paradicsom", qty: "2 db" },
    { name: "mozzarella", qty: "1 golyó" },
    { name: "bazsalikom", qty: "pár levél" },
    { name: "olívaolaj", qty: "1 ek" },
    { name: "só", qty: "ízlés szerint" },
    { name: "bors", qty: "ízlés szerint" }
  ],
  steps: [
    "A paradicsomot és mozzarellát felszeleteljük.",
    "Bazsalikommal rétegezzük, meglocsoljuk olívaolajjal, sózzuk, borsozzuk."
  ],
  tags: ["vegetáriánus", "olasz"]
},
{
  id: "zoldseges_rizs",
  title: "Zöldséges rizs",
  category: "vega",
  difficulty: "konnyu",
  time: 25,
  servings: 4,
  image: "images/receptek/zoldseges_rizs.jpg",
  description: "Egyszerű, színes köret vagy főétel zöldségekkel.",
  ingredients: [
    { name: "rizs", qty: "200 g" },
    { name: "borsó", qty: "100 g" },
    { name: "répa", qty: "1 db" },
    { name: "kukorica", qty: "100 g" },
    { name: "olaj", qty: "1 ek" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A rizst megfőzzük sós vízben.",
    "A zöldségeket pároljuk, majd összekeverjük a rizzsel."
  ],
  tags: ["vegetáriánus", "egészséges"]
},
{
  id: "zabpalacsinta",
  title: "Zabpalacsinta",
  category: "vega",
  difficulty: "konnyu",
  time: 25,
  servings: 4,
  image: "images/receptek/zabpalacsinta.jpeg",
  description: "Egészséges, lisztmentes palacsinta zabpehellyel.",
  ingredients: [
    { name: "zabpehely", qty: "100 g" },
    { name: "tej", qty: "200 ml" },
    { name: "tojás", qty: "2 db" },
    { name: "méz", qty: "1 ek" },
    { name: "csipet só", qty: "" }
  ],
  steps: [
    "A hozzávalókat simára keverjük, majd pihentetjük 5 percig.",
    "Kisütjük a palacsintákat serpenyőben."
  ],
  tags: ["vegetáriánus", "egészséges"]
},
{
  id: "sult_padlizsan",
  title: "Sült padlizsán fokhagymás joghurttal",
  category: "vega",
  difficulty: "kozepes",
  time: 35,
  servings: 3,
  image: "images/receptek/sult_padlizsan_fokhagymas_joghurttal.jpeg",
  description: "Fokhagymás joghurtos öntettel tálalt sült padlizsán.",
  ingredients: [
    { name: "padlizsán", qty: "2 db" },
    { name: "olívaolaj", qty: "2 ek" },
    { name: "joghurt", qty: "150 ml" },
    { name: "fokhagyma", qty: "2 gerezd" },
    { name: "citromlé", qty: "1 tk" },
    { name: "só", qty: "ízlés szerint" }
  ],
  steps: [
    "A padlizsánt felszeleteljük, meglocsoljuk olívaolajjal és megsütjük.",
    "A joghurtot elkeverjük fokhagymával és citromlével.",
    "A padlizsánt a joghurtos öntettel tálaljuk."
  ],
  tags: ["vegetáriánus", "mediterrán"]
}
  
];

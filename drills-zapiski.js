// Prepis rokopisnih listov v obliko, ki jo kartica vaje v aplikaciji že bere.
// Korak z (?) je na originalu slabo berljiv in ga je treba preveriti, preden ga učiš dobesedno.
// Dodatna polja (sessionId, code, phase, source) so za povezavo s treningom in kasnejši uvoz.

const BASE = {
  level: "Metodika",
  age: "Vse",
  category: "Iz zapiskov",
  mistakes: "V zapisku ni posebej zapisanih napak."
};

function drill(item) {
  return { ...BASE, ...item };
}

export const NOTE_DRILLS = [
  drill({
    id: "n-6d1-a",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "A",
    phase: "Uvod",
    skill: "Dinamika",
    title: "Dinamika",
    purpose: "Uvodni dinamični del pred preigravanjem.",
    setup: "Celotna skupina. Postavitev in trajanje na listu nista zapisana.",
    steps: ["Na listu je samo naslov »dinamika«."],
    coach: "Vsebino dodaš, ko jo imaš izbrano. Zaporedje treninga se nadaljuje s preigravanjem 1:0.",
    variation: "Preigravanje 1:0.",
    source: "dinamika"
  }),
  drill({
    id: "n-6d1-b",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "B",
    phase: "Uvod",
    skill: "Preigravanje",
    title: "Preigravanje 1:0",
    purpose: "Preigravanje brez branilca, z omejitvijo vodenj in zaključkom.",
    setup: "1:0. Šest pozicij, low post in high post. Skica B4: dva igralca pod košem, oznaka »1 vod«.",
    steps: [
      "Par in omejitev trenerja (T), nato zaključek v protinapad. Natančno besedilo prve vrstice ni zanesljivo (?).",
      "Iz mesta: varianti 1 in 1–2, delo znotraj (?).",
      "Osem gibanj na šestih pozicijah, v low postu in high postu, plus skok.",
      "Največ eno vodenje, nato dve vodenji."
    ],
    coach: "Štej vodenja. Skok je del gibanja, ne dodatek po koncu serije.",
    variation: "Z dveh vodenj naprej v odkrivanje.",
    source: "preigravanje 1:0"
  }),
  drill({
    id: "n-6d1-c",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "C",
    phase: "Glavni del",
    skill: "Odkrivanje",
    title: "Odkrivanje: I, L, V in rezi",
    purpose: "Katalog odkrivanj, ki jih igralec pokaže brez žoge.",
    setup: "Polovica igrišča. Skici: front cut proti košu in shallow cut po črti prostih metov.",
    steps: [
      "Notranji obrat in plov po zunanji strani (?).",
      "I-rez, L-rez, V-rez in backdoor odkrivanje.",
      "Front cut, basket cut, flash/fade cut, finish cut, shallow cut in flare screen cut."
    ],
    coach: "I je rez naravnost, L rez pod kotom, V rez ven in nazaj noter. Backdoor gre za hrbtom branilca. Front cut gre pred branilca proti žogi, basket cut proti košu, flash je sunek, fade odmik, shallow je plitek rez, flare screen je blokada navzven.",
    variation: "Isti rezi znotraj vtekanja in križanja.",
    source: "ODKRIVANJE: I, L, V, B-door; front cut, basket cut, flash/fade cut, finish cut, shallow cut, flare screen cut"
  }),
  drill({
    id: "n-6d1-d",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "D",
    phase: "Glavni del",
    skill: "Vtekanje",
    title: "Vtekanje",
    purpose: "Vtekanje povezano z menjavo mest, vodenjem, odkrivanjem in podajo.",
    setup: "3:0 na polovici. Skici D1 in D3: rezi s kril in z vrha proti košu.",
    steps: [
      "Uvodna postavitev z žogo in low postom. Druga beseda v vrstici ni zanesljiva (?).",
      "3:0 z menjavo mest.",
      "Vodenje, odkrivanje, vtekanje in podaja v enem zaporedju."
    ],
    coach: "Menjava mest mora narediti prostor za vtek, ne samo zamenjati mesta.",
    variation: "Isto zaporedje v križanju z napeljevanjem.",
    source: "VTEKANJE: 3:0 z menjavo mest; vod + odkr + vtk + pas"
  }),
  drill({
    id: "n-6d1-e",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "E",
    phase: "Glavni del",
    skill: "Križanje",
    title: "Križanje z napeljevanjem",
    purpose: "Križanje, ki ga napelje soigralec, brez žoge in z žogo.",
    setup: "Polovica igrišča, vsaj dva igralca v križanju.",
    steps: ["Križanje brez žoge in križanje z žogo. Kratka vrstica na listu je berljiva le delno (?)."],
    coach: "Napeljevanje pomeni, da gibanje soigralca odpre čas križanja.",
    variation: "Križanje z vaočitvijo.",
    source: "KRIŽANJE Z NAPELJEVANJEM"
  }),
  drill({
    id: "n-6d1-f",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "F",
    phase: "Glavni del",
    skill: "Križanje",
    title: "Križanje z vaočitvijo",
    purpose: "Križanje po vodenju in podaji. Izraz »vaočitvijo« je prepisan dobesedno.",
    setup: "F2 in F3 na listu nimata besedila. Skica ob F je rez ob črti in podaja proti košu.",
    steps: [
      "Serija vodenj, nato podaja. Število na listu berem kot 12 vodenj (?).",
      "F2 in F3 sta prazni vrstici."
    ],
    coach: "Besede »vaočitvijo« nisem popravljal. Če je mišljeno kaj drugega, popravi naslov v bazi.",
    mistakes: "Naslov je negotov prepis.",
    variation: "Preigravanje + vtekanje + odkrivanje.",
    source: "KRIŽANJE Z VAOČITVIJO; 12 vod, po pod."
  }),
  drill({
    id: "n-6d1-g",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "G",
    phase: "Glavni del",
    skill: "Preigravanje",
    title: "Preigravanje, vtekanje in odkrivanje",
    purpose: "Ista tri dejanja v naraščajoči številčni premoči in s handicapom.",
    setup: "Od 1:1 naprej. Handicap 1:1 in 2:2. Closeout po podaji.",
    steps: [
      "Progresija 1:1, nato 1:1+1 in naprej.",
      "Handicap situacije 1:1 in 2:2. Trener udari po roki, da žoga ostane zaščitena.",
      "Closeout.",
      "Po podaji: viper, alters, dragon.",
      "Trener vrne žogo; curl; nadaljnja oznaka »ign« ni zanesljiva (?).",
      "Iz sredine.",
      "6+1 zaključki (?)."
    ],
    coach: "Oznaka T je trenerjeva omejitev: udarec po roki ali vrnitev žoge. Viper, alters in dragon pusti kot imena z lista.",
    variation: "Igra 1:1.",
    source: "PREIGR. + VTEK + ODKR; glej drugo stran, G1–G6"
  }),
  drill({
    id: "n-6d1-h",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "H",
    phase: "Igra",
    skill: "Preigravanje",
    title: "Igra 1:1",
    purpose: "1:1 iz različnih začetkov: z mesta, po closeoutu, po metu in po odkrivanju.",
    setup: "1:1. Mesta: low post, high post in tretje mesto, katerega oznaka na listu ni zanesljiva (?).",
    steps: [
      "1:1 z mesta v low postu in high postu.",
      "1:1 po closeoutu.",
      "1:1 po metu.",
      "1:1 po odkrivanju."
    ],
    coach: "Vsak začetek je ista igra 1:1, spremeni se samo način, kako napadalec dobi žogo.",
    variation: "Od 1:1 do 5:5.",
    source: "IGRA 1:1: iz mesta (LP, HP), closeout, po metu, po odkriv."
  }),
  drill({
    id: "n-6d1-i",
    sessionId: "s-6d1",
    sessionTitle: "Usposabljanje 6D1",
    code: "I",
    phase: "Igra",
    skill: "Vtekanje",
    title: "Od 1:1 do 5:5",
    purpose: "Številčna progresija, v kateri ostaneta odkrivanje in vtekanje.",
    setup: "Od 1:1 do 5:5. Vmes 1:1+1, 1:1+2 in 2:2+2.",
    steps: [
      "1:1 preraste v 5:5: odkrivanje, vtekanje in igra.",
      "Kontinuiteta proti lažjemu številu, kot ogrevanje številk (?).",
      "1:1+1, nato vtekanje na sprejem ali v napad (?).",
      "1:1+2.",
      "2:2+2."
    ],
    coach: "Dodan igralec (+1, +2) naj pride v vtekanje, ne samo kot dodatni branilec na žogi.",
    variation: "Polna igra 5:5.",
    source: "1:1 → 5:5 odkriv + vtk + igra; I1–I4"
  }),

  drill({
    id: "n-sh-10",
    sessionId: "s-sheme",
    sessionTitle: "Sheme 1:0, 1:1 in 5:0",
    code: "1:0",
    phase: "Skica",
    skill: "Preigravanje",
    title: "Shema 1:0",
    purpose: "Preigravanje brez branilca z omejenim številom vodenj.",
    setup: "Dva okvirja pod košem. Levi: dva igralca ob črti. Desni: igralci izven črt, omejitev vodenj.",
    steps: [
      "Levi okvir: največ eno vodenje in dve do tri črte. Oznaka »p.m.« je prepisana dobesedno (?).",
      "Desni okvir: največ dve vodenji, žoga gre iz igralca izven črte proti košu."
    ],
    coach: "Omejitev vodenj je pravilo vaje, ne priporočilo.",
    variation: "Shema 1:1.",
    source: "1:0, max 1 vod, max 2 vod"
  }),
  drill({
    id: "n-sh-11",
    sessionId: "s-sheme",
    sessionTitle: "Sheme 1:0, 1:1 in 5:0",
    code: "1:1",
    phase: "Skica",
    skill: "Preigravanje",
    title: "Shema 1:1",
    purpose: "1:1, kjer je branilec pripravljen in pobere napadalca.",
    setup: "Dva ozka okvirja. V levem je branilec pod napadalcem, v desnem puščica pobiranja.",
    steps: [
      "Napadalec starta z žogo v ozkem prostoru.",
      "Branilec je pripravljen in pobere obrambnega igralca, kot piše puščica na desnem okvirju."
    ],
    coach: "Pobiranje je prvi korak branilca, šele nato preigravanje.",
    variation: "Handicap po celem igrišču.",
    source: "1:1, pripravljeni, poberite obr. igr."
  }),
  drill({
    id: "n-sh-h",
    sessionId: "s-sheme",
    sessionTitle: "Sheme 1:0, 1:1 in 5:0",
    code: "H",
    phase: "Skica",
    skill: "Preigravanje",
    title: "Handicap po celem",
    purpose: "Vodenje po celem igrišču s številčno pomoči napadalcu.",
    setup: "Celo igrišče. Žoga in oznaka x+1 na eni strani, valovito vodenje do drugega koša.",
    steps: [
      "Napadalec z žogo in en dodatni igralec (x+1) startata na eni črti.",
      "Vodenje gre v valovih čez celo igrišče do drugega koša."
    ],
    coach: "Handicap je v številu, ne v tempu hoje.",
    variation: "1:1 s podajo, odkrivanjem in sprejemom.",
    source: "handicap, x+1, valovito vodenje"
  }),
  drill({
    id: "n-sh-11b",
    sessionId: "s-sheme",
    sessionTitle: "Sheme 1:0, 1:1 in 5:0",
    code: "1:1+",
    phase: "Skica",
    skill: "Odkrivanje",
    title: "1:1 s podajo, odkrivanjem in sprejemom",
    purpose: "1:1, ki se začne s podajo in odkrivanjem, ne z vodenjem na mestu.",
    setup: "Dva zaporedna okvirja: podaja navzdol, odkrivanje in sprejem, nato nadaljevanje.",
    steps: [
      "Prvi okvir: podaja in odkrivanje proti žogi.",
      "Drugi okvir: sprejem in nadaljevanje 1:1."
    ],
    coach: "Sprejem je v gibanju, ki ga je naredilo odkrivanje.",
    variation: "Sheme 5:0.",
    source: "1:1 s pod, odkr + sprejemom"
  }),
  drill({
    id: "n-sh-50",
    sessionId: "s-sheme",
    sessionTitle: "Sheme 1:0, 1:1 in 5:0",
    code: "5:0",
    phase: "Skica",
    skill: "Postavljen napad",
    title: "Sheme 5:0",
    purpose: "Štiri postavitve petih igralcev brez obrambe. Puščice so rezi, podaje ali vodenje.",
    setup: "Štirje okvirji, igralci oštevilčeni 1–5.",
    steps: [
      "Prvi okvir: 2 in 5 visoko, 1 vstopi po diagonali, spodaj ostaneta 1 in 2.",
      "Drugi okvir: 2 drži levo, 3 in 5 se odpreta navzgor oziroma navzdol.",
      "Tretji okvir: 2 ostane levo, 5 drsi v desno, 3 gre navzgor.",
      "Četrti okvir: 3 in 5 sta na vrhu, 2 in 4 spodaj, puščice tečejo skozi pravokotnik in ven na levo."
    ],
    coach: "To so opomniki skic, ne dokončan sistem. Smer puščice preveri na listu, preden jo fiksiraš kot pravilo.",
    variation: "Iste postavitve z obrambo v kasnejših listih.",
    source: "5:0, štiri skice"
  }),

  drill({
    id: "n-rav-a",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "1A",
    phase: "Uvod",
    skill: "Ravnotežje",
    title: "Metodika ravnotežja 2:0",
    purpose: "Ravnotežje v paru, preden pride obramba žoge.",
    setup: "2:0. Skica: dva igralca na vogalih pravokotnika, puščica v desno in navzdol.",
    steps: [
      "2:0 v ogledalu: partner ponavlja gibanje.",
      "Sledenje partnerju.",
      "Na skici sta oznaki »ogled« in »sledi«."
    ],
    coach: "Ravnotežje je v stopalih in v tem, da partner ostane v istem razmerju, ne v hitrosti rok.",
    variation: "Dinamika »lovim in bežim«.",
    source: "Metodika ravnotežja → 2:0 → ogled, sledi"
  }),
  drill({
    id: "n-rav-b",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "1B",
    phase: "Uvod",
    skill: "Ravnotežje",
    title: "Lovim in bežim",
    purpose: "Dinamično ravnotežje: eden lovi, drugi beži.",
    setup: "Par. Na listu je samo geslo in mala skica para.",
    steps: ["Eden lovi, drugi beži. Ko se vloga zamenja, se vaja nadaljuje brez postanka."],
    coach: "Geslo na listu je »lovim + bežim«.",
    variation: "2:0 po vlogah O, B, K in C.",
    source: "dinamika, lovim + bežim"
  }),
  drill({
    id: "n-rav-2",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "2A",
    phase: "Glavni del",
    skill: "Ravnotežje",
    title: "2:0 po vlogah",
    purpose: "Ravnotežje v paru, vloge se menjajo po zapisanem vrstnem redu.",
    setup: "2:0. Vloge na listu so O, B, K in C. C je na strani pomoči.",
    steps: [
      "Par O-B.",
      "Par B-K.",
      "Par K-K.",
      "Par B-C, C stoji na strani pomoči.",
      "Par K-C."
    ],
    coach: "Črke so prepisane, kot stojijo na listu. C ima edino razlago: stran pomoči.",
    variation: "3:0, podaja in extra podaja.",
    source: "2:0 O-B, B-K, K-K, B-C (C na strani pomoči), K-C"
  }),
  drill({
    id: "n-rav-3",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "2B",
    phase: "Glavni del",
    skill: "Podaje",
    title: "3:0, podaja in extra podaja",
    purpose: "Trije igralci dodajo podajo, ki ni prva možna.",
    setup: "3:0.",
    steps: ["Najprej navadna podaja, nato extra podaja, preden pade zaključek ali nova akcija."],
    coach: "Extra podaja je obvezna, ne izbira, če je prva podaja že odprta.",
    variation: "4:0, vžigajoči center.",
    source: "3:0 pas - extra pas"
  }),
  drill({
    id: "n-rav-4",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "2C",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "4:0, vžigajoči center",
    purpose: "Štirje igralci tečejo protinapad, center ga vžge.",
    setup: "4:0. Beseda na listu je berljiva kot »vžigajoči center« oziroma »contra« (?).",
    steps: ["4:0. Center vžge protinapad in drži ravnotežje med hodniki."],
    coach: "Če je na listu mišljen drug izraz, popravi naslov. Vloga je center, ki zažene štiri.",
    variation: "Blokade na žogi.",
    source: "4:0 vžigajoči center"
  }),
  drill({
    id: "n-rav-d",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "2D",
    phase: "Glavni del",
    skill: "Blokade",
    title: "Blokade na žogi",
    purpose: "Metodika blokade na žogi od prazne blokade do branja 2:1.",
    setup: "Najprej brez obrambe, nato celo igrišče, polovica in 2:1. Skice D2 in D3: podaja, rez in blok ob košu.",
    steps: [
      "Samo blok in odcepitev, brez nadaljevanja.",
      "Isto po celem igrišču.",
      "Isto na polovici.",
      "2:1. Branje situacije, lažna rola in predhodno delo (?)."
    ],
    coach: "Odcepitev je del blokade. Lažna rola pride šele v 2:1, ko je situacijo treba prebrati.",
    variation: "Blokade stran od žoge.",
    source: "Blokade na žogi: samo blok in odcepitev → celo → 1/2 → 2:1"
  }),
  drill({
    id: "n-rav-e",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "2E",
    phase: "Glavni del",
    skill: "Blokade",
    title: "Blokade stran od žoge",
    purpose: "Blokada stran od žoge v 3:0 in 3:1, z odločitvijo, kdaj je mamljenje potrebno.",
    setup: "3:0, nato 3:1. Skica: igralci 1, 2 in 3, podaje čez črto prostih metov in rez pod koš.",
    steps: [
      "3:0, blok stran od žoge.",
      "3:1, isti blok z enim branilcem.",
      "Mamljenje ni potrebno vedno na blok. Odvisno od situacije.",
      "Tek ob blokado je obvezen. Podajalec ima nalogo, ki je na listu odrezana (?)."
    ],
    coach: "Mamljenje je orodje, ne pravilo vsake blokade. Tek ob blokado ostane.",
    mistakes: "Samoumevno mamljenje na vsaki blokadi.",
    variation: "Prenašanje stožca na skici pod vajo.",
    source: "Blokade stran od žoge 3:0, 3:1"
  }),
  drill({
    id: "n-rav-st",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "skica",
    phase: "Glavni del",
    skill: "Blokade",
    title: "Prenašanje stožca",
    purpose: "Skica pod blokadami: trije igralci prenašajo razmak stožca.",
    setup: "Polovica. Igralci 1, 2 in 3, podaje in rez pod koš. Napis pod skico berem kot »prenašanje stožca« (?).",
    steps: [
      "1, 2 in 3 držijo stožec.",
      "Podaja premakne vrh stožca, rez gre pod koš.",
      "Na skici so še oznake pick in sklep na sredini (?)."
    ],
    coach: "Napis pod skico je slabo berljiv. Vsebina skice je prenos razmaka treh igralcev.",
    variation: "Obramba po protinapadu.",
    source: "skica pod blokadami, napis pri stožcu"
  }),
  drill({
    id: "n-rav-f",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "F",
    phase: "Glavni del",
    skill: "Obramba",
    title: "Obramba po protinapadu",
    purpose: "Obramba, ki se postavi šele po protinapadu, od 2:1 do 5:4.",
    setup: "Zaporedje 2:1, 3:1, 3:2, 4:3, 5:4.",
    steps: [
      "Metodika na mestu.",
      "Isto na celi polovici.",
      "Isto po celem igrišču.",
      "Številke: 2:1, 3:1, 3:2, 4:3, 5:4."
    ],
    coach: "Najprej ustavi protinapad, šele nato je to obramba postavljenega napada.",
    variation: "Pressing, run and jump.",
    source: "obr. po protinapadu 2:1, 3:1, 3:2, 4:3, 5:4"
  }),
  drill({
    id: "n-rav-g",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "G",
    phase: "Glavni del",
    skill: "Pressing",
    title: "Osnove pressing obrambe",
    purpose: "Prvi principi pressinga: po kosu, run and jump in mrtva žoga.",
    setup: "Po kosu, iz in z mesta. Mala skica: 1 beži po loku, 2 in 3 zapirata.",
    steps: [
      "Pressing po kosu, iz začetne postavitve in z mesta (?).",
      "Princip run and jump.",
      "Princip mrtve žoge."
    ],
    coach: "Run and jump pomeni, da prvi pritisne in drugi prevzame njegovega. Mrtva žoga je trenutek, ko žoga ni v vodenju in pressing skoči.",
    variation: "Osnovna rotacija.",
    source: "osnove pressing obr. → po kosu; run & jump; mrtva žoga"
  }),
  drill({
    id: "n-rav-h",
    sessionId: "s-rav",
    sessionTitle: "Ravnotežje in blokade",
    code: "H",
    phase: "Glavni del",
    skill: "Obramba",
    title: "Osnovna rotacija",
    purpose: "Rotacija v škatli, ko žoga potuje. Na listu so samo skice.",
    setup: "Škatla z igralci 1–5. Ena skica je označena 2:1+?.",
    steps: [
      "2:1 in dodan igralec: 4 vstopi po diagonali, 5 in 2 zapreta proti žogi, 1 ostane nizko.",
      "Naslednji okvirji kažejo isto škatlo, ko žoga menja stran in se rotacija obrne.",
      "Spodnji par skic (A in B) ponovi rotacijo z igralci 1, 2, 4 in 5 ter izhodom na 3."
    ],
    coach: "Rotacija sledi žogi. Točen korak vsake puščice preveri na listu.",
    variation: "Ista rotacija v treningu obrambe, stran žoge in stran pomoči.",
    source: "osnovna rotacija, skice A in B"
  }),

  drill({
    id: "n-obr-a",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "1A",
    phase: "Uvod",
    skill: "Obramba",
    title: "Osnovna obrambna postavitev",
    purpose: "Dogovor o ideji postavitve in o osnovnem obrambnem položaju.",
    setup: "Petorka. Na vrhu lista: stran žoge je stran pomoči, ločnica je linija žoge.",
    steps: [
      "Razloži osnovno idejo obrambne postavitve.",
      "Pokaži osnovni obrambni položaj, preden se začne zapiranje."
    ],
    coach: "Stran žoge in stran pomoči sta dve strani iste postavitve. Linija žoge ju deli.",
    variation: "Obramba proti metu.",
    source: "razloži osnovno idejo obr. postavitve, osnovni obr. položaj"
  }),
  drill({
    id: "n-obr-b",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "1B",
    phase: "Uvod",
    skill: "Obramba",
    title: "Obramba proti metu in zapiranje",
    purpose: "Zapiranje meta, roka je pripravljena pred skokom v closeout.",
    setup: "1:1 na mestu meta. Skica: obramba si pripravi roko, nato closeout.",
    steps: [
      "Obramba proti metu z mesta.",
      "Zapiranje: roka je pripravljena, šele nato gre telo v closeout."
    ],
    coach: "Na skici piše, da si obramba pripravi roko.",
    variation: "1:1 proti vodenju po celem igrišču.",
    source: "obr. proti metu / zapiranje"
  }),
  drill({
    id: "n-obr-c",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "1C",
    phase: "Uvod",
    skill: "Obramba",
    title: "1:1 proti vodenju, close-out",
    purpose: "Close-out v vodenje po celem igrišču.",
    setup: "1:1, celo igrišče. Na listu je oznaka CL-out.",
    steps: ["Branilec zapre vodenje po celem igrišču. Po close-outu ostane med žogo in košem."],
    coach: "Close-out se konča v obrambnem položaju, ne v kontaktu z rokami.",
    variation: "1:1 na četrtini igrišča.",
    source: "obr. 1:1 proti vodenju po celem igr. (CL-out)"
  }),
  drill({
    id: "n-obr-d",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "1D",
    phase: "Uvod",
    skill: "Obramba",
    title: "1:1 na četrtini",
    purpose: "Ista 1:1 obramba na četrtini igrišča, poudarek je osnovna postavitev.",
    setup: "1:1 na 1/4 igrišča.",
    steps: ["1:1 na četrtini. Pred preigravanjem oba pokažeta osnovno postavitev."],
    coach: "Manjši prostor ne spremeni položaja stopal.",
    variation: "Stran žoge in stran pomoči.",
    source: "1:1 na 1/4 igr. → osnovna postavitev"
  }),
  drill({
    id: "n-obr-ga",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "2A",
    phase: "Glavni del",
    skill: "Obramba",
    title: "Stran žoge in stran pomoči",
    purpose: "Postavitev celotne obrambe glede na žogo.",
    setup: "Petorka. Skice kažejo linijo žoge in puščice zapiranja na obeh straneh.",
    steps: [
      "Igralci na strani žoge so v liniji podaje.",
      "Igralci na strani pomoči so v odmiku, a znotraj linije žoge.",
      "Ko žoga zamenja stran, se strani zamenjajo."
    ],
    coach: "Stran pomoči ni počitek. Na listu je stran žoge hkrati označena kot stran pomoči za tistega, ki zapira.",
    variation: "Obramba proti vodenju, podaji in vtekanju.",
    source: "STRAN ŽOGE (STRAN POMOČI) / LINIJA ŽOGE"
  }),
  drill({
    id: "n-obr-gb",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "2B",
    phase: "Glavni del",
    skill: "Obramba",
    title: "Proti vodenju, podaji in vtekanju",
    purpose: "Tri obrambna dejanja v istem pravilu pomoči.",
    setup: "Na listu je številka odrezana, berljivo je le, da gre za več kot 1:1.",
    steps: [
      "Obramba proti vodenju.",
      "Obramba proti podaji.",
      "Obramba proti vtekanju.",
      "Principa: help in on helper, plus gonjenje vtekanja."
    ],
    coach: "Help pomaga na žogo. On helper zasede mesto tistega, ki je šel pomagat. Vtekanje se gonja, ne spremlja z razdalje.",
    variation: "Obramba proti odkrivanju, križanju in vračanju.",
    source: "obr. proti vod., pod., vtekanju; help / on helper"
  }),
  drill({
    id: "n-obr-gc",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "2C",
    phase: "Glavni del",
    skill: "Obramba",
    title: "Proti odkrivanju, križanju in vračanju",
    purpose: "Obramba treh gibanj brez žoge, ki so na listu 6D1 napadalčeva tema.",
    setup: "Polovica, več igralcev. Točne številke na listu ni.",
    steps: [
      "Obramba proti odkrivanju.",
      "Obramba proti križanju.",
      "Obramba proti vračanju na isto mesto."
    ],
    coach: "Vračanje je tretje dejanje: po rezu se igralec vrača in obramba ne sme ostati na praznem mestu.",
    variation: "Blok na žogi.",
    source: "obr. proti odkrivanju, križanju, vračanju"
  }),
  drill({
    id: "n-obr-gd",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "2D",
    phase: "Glavni del",
    skill: "Blokade",
    title: "Obramba blokade na žogi",
    purpose: "Trije odgovori na blok na žogi.",
    setup: "2:2 in 3:3.",
    steps: [
      "Prekrivanje: ostaneš s svojim skozi blok.",
      "Izmenjava: zamenjaš človeka na bloku.",
      "Zamikanje: zakasniš izmenjavo, da blok ne dobi takoj prednosti."
    ],
    coach: "Vse tri so na listu naštete kot rešitve iste situacije. Na treningu jih pokaži ločeno, šele nato mešaj.",
    variation: "Blok stran od žoge.",
    source: "obr. proti bloku na žogi (2:2, 3:3): prekrivanje, izmenjava, zamikanje"
  }),
  drill({
    id: "n-obr-ge",
    sessionId: "s-obr",
    sessionTitle: "Obramba",
    code: "2E",
    phase: "Glavni del",
    skill: "Blokade",
    title: "Obramba blokade stran od žoge",
    purpose: "Odgovor na blok, ki ni na žogi.",
    setup: "3:3. Skici 1E in 2E: podaja 1-2-3 in rotacija 2 proti 5 na strani pomoči. Spodaj je linija žoge.",
    steps: [
      "Prepuščanje: igralec gre skozi in ga prevzame naslednji.",
      "Prevzemanje: aktivno vzameš človeka, ki prihaja z bloka.",
      "Vrnitev: po prevzemu se vrneš na svojega, ko blok mine.",
      "Na skici 2E žoga menja stran, obramba drži linijo žoge."
    ],
    coach: "Prepuščanje, prevzemanje in vrnitev so trije koraki ene obrambe, ne tri različne filozofije hkrati.",
    variation: "Ista pravila v 5:5.",
    source: "obr. proti bloku stran od žoge: prepuščanje, prevzemanje, vrnitev"
  }),

  drill({
    id: "n-pn-a",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "1A",
    phase: "Uvod",
    skill: "Protinapad",
    title: "Hodniki gibanja",
    purpose: "Dogovor o hodnikih, preden se štejejo številke.",
    setup: "Celo igrišče. Skica 1A: trije hodniki v koš. Ob robu lista je oznaka, ki ni zanesljivo berljiva (?).",
    steps: [
      "Trening se začne z obrambo. Tehnika sodi v uvod, ne v igro številk.",
      "Razloži hodnike gibanja: srednji in oba stranska."
    ],
    coach: "Hodnik je prostor teka, ne črta, po kateri moraš teči z glavo dol.",
    variation: "1:0 s prenašalcem.",
    source: "Metodika → razloži HODNIKE gibanja; začni z obrambo"
  }),
  drill({
    id: "n-pn-b",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "1B",
    phase: "Uvod",
    skill: "Protinapad",
    title: "1:0 (+1), odločitev prenašalca",
    purpose: "Prenašalec izbere hodnik glede na to, kje je žoga.",
    setup: "1:0, z možnostjo drugega prenašalca (+1). Mala skica: polkrožen izhod.",
    steps: [
      "En prenašalec se odloči glede na položaj žoge.",
      "Dva prenašalca se odločita drug glede na drugega.",
      "Izhod je lahko polkrožen, kot kaže skica."
    ],
    coach: "Odločitev je o hodniku, ne o tem, kdo glasneje kliče žogo.",
    variation: "2:0 po hodnikih.",
    source: "1:0 (+1); prenašalec žoge se odloči glede na položaj žoge"
  }),
  drill({
    id: "n-pn-2",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2A",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "2:0 po hodnikih",
    purpose: "Dva igralca zasedeta srednji in stranski hodnik, žoga gre v širino s podajo ali z vodenjem.",
    setup: "2:0. Skice: halo na krilu, center, podajalec P in tekač T.",
    steps: [
      "Eden v srednjem hodniku, drugi v stranskem.",
      "Oba v srednjem hodniku.",
      "Srednji je C, stranski je par B-K.",
      "Če igralec dobi žogo ob strani, da podajo v širino.",
      "Isto v širino z vodenjem, ne s podajo."
    ],
    coach: "Na skicah sta halo in center ločena cilja. P podaja, T teče v prost hodnik.",
    variation: "3:0, odpiranje protinapada.",
    source: "2:0 → srednji + stranski hodnik; podaja v širino; vodenje v širino"
  }),
  drill({
    id: "n-pn-3",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2B",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "3:0, odpiranje protinapada",
    purpose: "Tretji igralec odpre protinapad, da hodniki ne ostanejo zaprti.",
    setup: "3:0, celo igrišče.",
    steps: ["3:0. Tretji igralec odpre stran, ki je prva dva nista zasedla."],
    coach: "Odpiranje je tek v prost hodnik, preden žoga pride do sredine.",
    variation: "4:0 z visokim igralcem.",
    source: "3:0 → odpiranje protinapada"
  }),
  drill({
    id: "n-pn-4",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2C",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "4:0 z visokim igralcem",
    purpose: "Štirje tečejo zapored, eden od njih je visoki C.",
    setup: "4:0, nato 4:4.",
    steps: [
      "4:0 štirikrat zapored, z enim visokim igralcem (C).",
      "4:4 v serijah po dvakrat ali štirikrat."
    ],
    coach: "Visoki ne teče v isti hodnik kot oba krila. Na listu je C v oklepaju pri visokem.",
    variation: "Presežne situacije.",
    source: "4:0 → 4x zapored (z enim visokim C); 4:4 2x/4x"
  }),
  drill({
    id: "n-pn-d",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2D",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "Presežne situacije",
    purpose: "Napad v številčni premoči. Pravili: drži linijo in vrzi, če si sam.",
    setup: "2:1, 3:1, 3:2, 4:3 in 5:4.",
    steps: [
      "Situacije po vrsti: 2:1, 3:1, 3:2, 4:3, 5:4.",
      "Principi: odločitev napad ali obramba, držanje linij, če si sam, vržeš.",
      "Vaja A: 1:1, nato 2:2, nato 2:3, nato 4:3, nato do 5:5.",
      "Vaja B: 2:1 preraste v 3:2.",
      "Vaja C: 3:2 preraste v 4:3."
    ],
    coach: "Linija je hodnik. Sam pomeni, da med žogo in košem ni branilca, zato je met dovoljen.",
    variation: "Kontinuiteta in handicap.",
    source: "2:1, 3:1, 3:2, 4:3, 5:4; če si sam → vrzi"
  }),
  drill({
    id: "n-pn-e",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2E",
    phase: "Glavni del",
    skill: "Protinapad",
    title: "Kontinuiteta in handicap",
    purpose: "Igra se ne ustavi ob izenačeni številki. Handicap doda enega.",
    setup: "Kontinuiteta 1:1, 2:2 in 3:3. Handicap 2:1+1.",
    steps: [
      "Kontinuiteta: ko se številka izenači, akcija teče naprej v 1:1, 2:2 ali 3:3.",
      "Handicap 2:1+1: tretji pride v že začeto 2:1.",
      "Na listu je še prehod 3:3 naprej, ciljna številka je odrezana (?)."
    ],
    coach: "Kontinuiteta pomeni, da koš ali obrambni skok ni piščalka za novo postavitev.",
    variation: "5:0 postavljen napad.",
    source: "Kontin. 1:1, 2:2, 3:3; handicap 2:1+1"
  }),
  drill({
    id: "n-pn-f",
    sessionId: "s-pn",
    sessionTitle: "Protinapad in postavljen napad",
    code: "2F",
    phase: "Glavni del",
    skill: "Postavljen napad",
    title: "5:0, tri postavitve",
    purpose: "Postavljen napad brez obrambe v treh oblikah.",
    setup: "5:0. Skice F2 in F3: center, halo, podaje P in igralec 5. Na eni skici piše »5.0 delo«.",
    steps: [
      "F1: pet zunanjih.",
      "F2: 4+1, post in visoki. Natančna oznaka »v.hor« ni razvozlana (?).",
      "F3: 4+1, igra centra.",
      "Na skici centra žoga pride na 5, P podaja, halo ostane na krilu."
    ],
    coach: "Tri postavitve so ločene vaje. Center v F3 ima žogo v nizkem postu, zunanji držijo razmak.",
    variation: "Iste postavitve z obrambo na listu napada.",
    source: "5:0 → 5 zunanjih; 4+1 post; 4+1 igra centra"
  }),

  drill({
    id: "n-nap-skice",
    sessionId: "s-nap",
    sessionTitle: "Napad, pressing in posebne situacije",
    code: "skica",
    phase: "Skica",
    skill: "Postavljen napad",
    title: "Tri neoznačene skice 1–5",
    purpose: "Zgornje tri skice lista nimajo naslova. So opomnik razmika, ne zaključen sistem.",
    setup: "Trije okvirji, igralci 1–5.",
    steps: [
      "Prvi okvir: 5 in 4 držita krili, 2 reže skozi sredino, 1 je na žogi spodaj.",
      "Drugi okvir: 1 poda na 5, 4 in 2 držita desno, puščica gre v levo.",
      "Tretji okvir: 4 je visoko levo, 1 in 3 držita dno, puščica gre navzgor desno."
    ],
    coach: "Brez naslova na listu teh skic ne poimenuj kot sistem. Uporabi jih kot razmak, ki mu sam dodaš ime.",
    variation: "Naslednja vrstica na listu je napad s centrom in z blokado.",
    source: "zgornje tri skice, brez napisa"
  }),
  drill({
    id: "n-nap-c",
    sessionId: "s-nap",
    sessionTitle: "Napad, pressing in posebne situacije",
    code: "centra",
    phase: "Skica",
    skill: "Blokade",
    title: "Napad s centrom in z blokado",
    purpose: "Dve možnosti iste petorke: igra centra ali igra z blokado.",
    setup: "Tri skice pod napisom, ki berem kot napad s centrom / z blokado (?).",
    steps: [
      "Leva skica: 3 in 4 vstopita, 1 je na žogi, 2 ostane desno, diagonala gre skozi koš.",
      "Srednja skica: 4 poda na 5, 3 drži levo, 2 se odpre v desno po loku.",
      "Desna skica: blok in rez, 3 poda, 6 in 4 tečeta skozi, 2 ostane desno, 5 je nizko. Številka 6 na skici je prepis, kot je narisana (?)."
    ],
    coach: "Poševnica na listu loči dve temi, center in blokado. Ne mešaj ju v isti ponovitvi.",
    variation: "Napad s PNR.",
    source: "napad centra / blokad"
  }),
  drill({
    id: "n-nap-pnr",
    sessionId: "s-nap",
    sessionTitle: "Napad, pressing in posebne situacije",
    code: "PNR",
    phase: "Skica",
    skill: "Blokade",
    title: "Napad s pick and roll",
    purpose: "Štiri skice pick and rolla v petorki.",
    setup: "Štirje okvirji pod napisom »napad s PNR«.",
    steps: [
      "Prvi: 5 postavi blok, 3 drži levo, 2 se odpre v desno, 1 in 4 ostaneta nizko.",
      "Drugi: 5 rolna proti košu, 1 je na žogi, oznaka ob 5 ni zanesljiva (?).",
      "Tretji: 2 je na bloku, 1 se odpre v desno, 5 in 3 držita dno.",
      "Četrti: 2 drži visoko, 1 in 5 gresta v desno, na levi je še en rez proti žogi."
    ],
    coach: "PNR na listu pomeni blok na žogi in rol proti košu. Smer izhoda preveri na skici, preden jo učiš kot edino.",
    variation: "Napad proti prehodni obrambi in pressingu.",
    source: "napad s PNR"
  }),
  drill({
    id: "n-nap-p",
    sessionId: "s-nap",
    sessionTitle: "Napad, pressing in posebne situacije",
    code: "press",
    phase: "Skica",
    skill: "Pressing",
    title: "Napad proti prehodni in pressing obrambi",
    purpose: "Napad na tri vrste obrambe, ki še ni postavljena na polovici.",
    setup: "Celo igrišče. Na listu so tri obrambe in skica z alternativo »ali«.",
    steps: [
      "Napad proti prehodni obrambi.",
      "Napad proti osnovni pressing obrambi.",
      "Napad proti trenerjevi, coachski pressing obrambi.",
      "Leva skica: past v kotu, 1 in 2 v pasti, 3 in 5 odprta.",
      "Desna skica, označena z »ali«: obramba v diamantu s puščicami navzgor in v oba kota."
    ],
    coach: "Tri obrambe vadi ločeno. »Ali« na listu je druga oblika pressinga, ne popravek prve.",
    variation: "Posebne situacije.",
    source: "NAPAD PROTI PREHODNI OBR / OS. PRESSING OBR ali COACHSKI PRES. OBR"
  }),
  drill({
    id: "n-nap-s",
    sessionId: "s-nap",
    sessionTitle: "Napad, pressing in posebne situacije",
    code: "POS",
    phase: "Posebne situacije",
    skill: "Posebne situacije",
    title: "Sodni met, prosti met in avt",
    purpose: "Tri posebne situacije, ki niso v toku igre.",
    setup: "Sodniški met, prosti met, čelni avt in bočni avt. Skica avta: podajalec pod košem, dva izhoda v levo in v desno.",
    steps: [
      "Sodniški met: postavitev ob začetnem metu.",
      "Prosti met: postavitev ob črti prostih metov in boj za odboj.",
      "Čelni avt.",
      "Bočni avt: podaja izpod koša, izhoda na obe strani, kot kaže skica."
    ],
    coach: "Na listu so situacije samo naštete in narisane. Pravil igre ne dodajaj mimo tega, kar ekipa že igra.",
    variation: "Vsaka situacija posebej, šele nato v istem treningu.",
    source: "POSEBNE SITUACIJE → sodni met, prosti met, čelni / bočni out"
  })
];

export const NOTE_SESSIONS = [
  {
    id: "s-6d1",
    title: "Usposabljanje 6D1",
    theme: "Preigravanje, odkrivanje, vtekanje, križanje",
    context: "1. in 2. skupina · 1. team stopnja",
    form: "Lista kosarkarski-trenerji.com, obrazec Trening",
    note: "List in njegovo nadaljevanje. Stolpec ČAS je prazen. G se nadaljuje na drugi strani.",
    drillIds: ["n-6d1-a", "n-6d1-b", "n-6d1-c", "n-6d1-d", "n-6d1-e", "n-6d1-f", "n-6d1-g", "n-6d1-h", "n-6d1-i"]
  },
  {
    id: "s-sheme",
    title: "Sheme 1:0, 1:1 in 5:0",
    theme: "Preigravanje, handicap in razmak 5:0",
    context: "Prost list s skicami, brez trajanja",
    form: "Rokopis na praznem listu",
    note: "Štiri skice 5:0 so opomnik puščic, ne izpisani sistem.",
    drillIds: ["n-sh-10", "n-sh-11", "n-sh-h", "n-sh-11b", "n-sh-50"]
  },
  {
    id: "s-rav",
    title: "Ravnotežje in blokade",
    theme: "Ravnotežje v igri, blokade na žogi in stran od žoge",
    context: "3. team stopnja · trening št. 2",
    form: "Federazione Italiana Pallacanestro, Comitato Nazionale Allenatori",
    note: "Sprednja stran je uvod in blokade. Zadnja stran je obramba po protinapadu, pressing in rotacija.",
    drillIds: ["n-rav-a", "n-rav-b", "n-rav-2", "n-rav-3", "n-rav-4", "n-rav-d", "n-rav-e", "n-rav-st", "n-rav-f", "n-rav-g", "n-rav-h"]
  },
  {
    id: "s-obr",
    title: "Obramba",
    theme: "Stran žoge, stran pomoči, linija žoge, blokade",
    context: "Trening št. 4",
    form: "Federazione Italiana Pallacanestro, Comitato Nazionale Allenatori",
    note: "Uvod postavi položaj. Glavni del gre od strani žoge do obeh vrst blokad.",
    drillIds: ["n-obr-a", "n-obr-b", "n-obr-c", "n-obr-d", "n-obr-ga", "n-obr-gb", "n-obr-gc", "n-obr-gd", "n-obr-ge"]
  },
  {
    id: "s-pn",
    title: "Protinapad in postavljen napad",
    theme: "Hodniki, presežki in 5:0",
    context: "Trening št. 3",
    form: "Federazione Italiana Pallacanestro, Comitato Nazionale Allenatori",
    note: "Začni z obrambo. Tehnika sodi v uvod. Postavljen napad je šele 5:0 na koncu.",
    drillIds: ["n-pn-a", "n-pn-b", "n-pn-2", "n-pn-3", "n-pn-4", "n-pn-d", "n-pn-e", "n-pn-f"]
  },
  {
    id: "s-nap",
    title: "Napad, pressing in posebne situacije",
    theme: "Center, blokade, PNR, pressing, sodni met, prosti met, avt",
    context: "Prost list s skicami",
    form: "Rokopis na praznem listu",
    note: "Zgornje tri skice nimajo naslova. Posebne situacije so samo naštete.",
    drillIds: ["n-nap-skice", "n-nap-c", "n-nap-pnr", "n-nap-p", "n-nap-s"]
  }
];

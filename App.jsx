import React, { useEffect, useMemo, useState } from "react";

const DRILLS = [
  {
    id: 1, skill: "Podaje", level: "Zacetniki", age: "6-10", category: "Osnovne",
    title: "Podaje izpred prsi v paru",
    purpose: "Razvoj osnovne chest podaje in lovljenja.",
    setup: "2 igralca, 1 zoga, razdalja 3-4 m.",
    steps: ["Igralca stojita v prezi.", "Prvi poda izpred prsi.", "Drugi ujame z mehkim sprejemom.", "Po 10-15 podajah povecata razdaljo."],
    coach: "Komolci ob telesu, korak v smer podaje, pogled v tarco.",
    mistakes: "Previsoka podaja, brez koraka, trde roke pri lovljenju.",
    variation: "Dodaj omejitev casa ali gibanje po podaji."
  },
  {
    id: 2, skill: "Podaje", level: "Zacetniki", age: "6-10", category: "Osnovne",
    title: "Podaje ob tla v paru",
    purpose: "Natancna bounce podaja in pravi kot odboja.",
    setup: "2 igralca, 1 zoga, 3-5 m narazen.",
    steps: ["Prvi igralec zavzame pravilen polozaj.", "Poda mocno ob tla.", "Soigralec ujame in takoj vrne.", "Ponovi serijo z menjavo ritma."],
    coach: "Nizek polozaj, pravi kot podaje, pripravljene roke.",
    mistakes: "Prekratek odboj, premehka podaja, lovljenje z eno roko.",
    variation: "Izvajaj v gibanju."
  },
  {
    id: 3, skill: "Vodenje", level: "Srednji", age: "8-14", category: "V gibanju",
    title: "Cik-cak vodenje",
    purpose: "Kontrola zoge, menjava smeri in ravnotezje.",
    setup: "1 igralec, 1 zoga, 5-6 stozcev v cik-cak postavitvi.",
    steps: ["Napad prvega stožca z nizkim vodenjem.", "Ob vsakem stožcu spremeni smer.", "Po zadnjem stožcu pospeši.", "Ponovi z drugo roko."],
    coach: "Nizek center teze, pogled gor, eksploziven prvi korak.",
    mistakes: "Gledanje v tla, previsoko vodenje, pocasna menjava.",
    variation: "Menjava med nogami ali za hrbtom."
  },
  {
    id: 4, skill: "Met", level: "Zacetniki", age: "6-10", category: "Osnova meta",
    title: "1-step form shooting",
    purpose: "Osnovna tehnika meta brez hitenja.",
    setup: "1-2 igralca, 1-2 zogi, 1-2 m od kosa.",
    steps: ["Stabilen polozaj blizu kosa.", "Komolec pod zogo.", "Izteg zapestja in follow-through.", "Po metu preveri lok."],
    coach: "Komolec pod zogo, mirna vodilna roka, follow-through.",
    mistakes: "Obracanje ramen, prevec sile, slab izteg.",
    variation: "Korak v met ali menjava strani."
  },
  {
    id: 5, skill: "Obramba", level: "Zacetniki", age: "6-10", category: "Osnova obrambe",
    title: "Nizka preza",
    purpose: "Osnovna obrambna drza in ravnotezje.",
    setup: "1 igralec, brez zoge.",
    steps: ["Stopala sirse od ramen.", "Kolena pokrcena.", "Roke aktivne.", "Drzi polozaj 10-20 sekund."],
    coach: "Nizki boki, teza naprej, aktivne roke.",
    mistakes: "Previsoka drza, ravne noge, peta na tleh.",
    variation: "Dodaj bocno gibanje."
  },
  {
    id: 6, skill: "Dvokorak", level: "Zacetniki", age: "6-10", category: "Osnova dvokoraka",
    title: "Ritmicni dvokorak",
    purpose: "Učenje zaporedja korakov in zaključka.",
    setup: "1-2 igralca, 1-2 zogi, obe strani kosa.",
    steps: ["Napad pod kotom.", "Pravilen prvi in drugi korak.", "Zakljucek v tablo.", "Ponovi z obeh strani."],
    coach: "Ritem korakov, visok drugi korak, pogled v tablo.",
    mistakes: "Napacno zaporedje, prekratek odriv, prehitro spuscena zoga.",
    variation: "Po podaji ali po vodenju."
  },
  {
    id: 7, skill: "Pivot", level: "Srednji", age: "8-14", category: "Pivot",
    title: "Pivot naprej in nazaj",
    purpose: "Kontrola stopal in zascita zoge.",
    setup: "1 igralec, 1 zoga.",
    steps: ["Lovljenje v trojni groznji.", "Pivot naprej in nazaj okoli sidrne noge.", "Simulacija podaje ali meta.", "Ponovi na obe sidrni nogi."],
    coach: "Sidrna noga ostane na tleh, nizko tezisce.",
    mistakes: "Premik sidrne noge, pokoncen polozaj.",
    variation: "Dodaj branilca."
  },
  {
    id: 8, skill: "Skok", level: "Srednji", age: "8-16", category: "Rebound",
    title: "Obrambni skok in zascita zoge",
    purpose: "Varen rebound in prva odlocitev po skoku.",
    setup: "2 igralca, 1 zoga, pod kosom.",
    steps: ["Trener vrze zogo ob tablo.", "Igralec naredi box out.", "Skoci in zogo zavaruje.", "Naredi pivot za outlet."],
    coach: "Kontakt pri box outu, dve roki na zogi, hiter obrat.",
    mistakes: "Brez kontakta, ena roka na zogi, spust zoge prenizko.",
    variation: "Dodaj branilca ali outlet podajo."
  }
];

const TRAININGS = [
  { title: "Trening 1 (90 min)", blocks: ["10 min - Ogrevanje", "15 min - Vodenje", "15 min - Podaje", "20 min - Met in zakljucek", "10 min - Obramba", "20 min - Igra"] },
  { title: "Trening 2 (90 min)", blocks: ["10 min - Aktivacija", "15 min - Pivot", "20 min - Met po sprejemu", "10 min - Obramba 1 na 1", "15 min - Tekmovalni met", "20 min - Igra"] },
  { title: "Trening 3 (90 min)", blocks: ["10 min - Ogrevanje", "40 min - 8 postaj po 5 min", "10 min - Protinapad", "10 min - Skok in outlet", "20 min - Igra"] }
];

const GAMES = [
  { title: "10 zaporednih podaj", skill: "Podaje", desc: "Ekipa dobi tocko, ce naredi 10 podaj brez izgube." },
  { title: "Knockout", skill: "Met", desc: "Tekmovalna igra v metanju s kratke razdalje." },
  { title: "Layup race", skill: "Dvokorak", desc: "Dve ekipi tekmujeta v seriji pravilnih dvokorakov." }
];

const INITIAL_PLAYERS = [
  { id: 1, name: "Taj Bojic", year: 2019, group: "Skupina A", note: "", skills: { dribble: 3, pass: 4, shot: 3, def: 2, attitude: 5 } },
  { id: 2, name: "Nal Bojic", year: 2019, group: "Skupina A", note: "", skills: { dribble: 4, pass: 3, shot: 2, def: 3, attitude: 4 } },
  { id: 3, name: "Pavle Vukovic", year: 2019, group: "Skupina A", note: "", skills: { dribble: 4, pass: 4, shot: 3, def: 3, attitude: 4 } },
  { id: 4, name: "Ajan Deumic", year: 2018, group: "Skupina B", note: "", skills: { dribble: 3, pass: 4, shot: 3, def: 3, attitude: 4 } },
  { id: 5, name: "Alvin Becirovic", year: 2017, group: "Skupina B", note: "", skills: { dribble: 4, pass: 4, shot: 4, def: 4, attitude: 4 } },
  { id: 6, name: "Bor Korosec", year: 2016, group: "Skupina C", note: "", skills: { dribble: 5, pass: 4, shot: 4, def: 4, attitude: 5 } }
];

const SEASON_MONTHS = [
  ["September 2025", 30, 8, 2025], ["Oktober 2025", 31, 9, 2025], ["November 2025", 30, 10, 2025], ["December 2025", 31, 11, 2025],
  ["Januar 2026", 31, 0, 2026], ["Februar 2026", 28, 1, 2026], ["Marec 2026", 31, 2, 2026], ["April 2026", 30, 3, 2026], ["Maj 2026", 31, 4, 2026]
].map(([key, days, monthIndex, year]) => ({ key, days, monthIndex, year }));

const TRAINING_PATTERN = [1,3,5];

function openPrint(html) {
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}

export default function App() {
  const [tab, setTab] = useState("dashboard");
  const [players, setPlayers] = useState(() => JSON.parse(localStorage.getItem("kkj-players") || "null") || INITIAL_PLAYERS);
  const [saved, setSaved] = useState(() => JSON.parse(localStorage.getItem("kkj-saved-drills") || "[]"));
  const [notes, setNotes] = useState(() => localStorage.getItem("kkj-coach-notes") || "");
  const [coachName, setCoachName] = useState(() => localStorage.getItem("kkj-coach-name") || "Trener");
  const [clubName, setClubName] = useState(() => localStorage.getItem("kkj-club-name") || "KK Jesenice");
  const [team, setTeam] = useState(() => localStorage.getItem("kkj-team") || "U8/U9");
  const [query, setQuery] = useState("");
  const [skill, setSkill] = useState("Vse");
  const [level, setLevel] = useState("Vse");
  const [age, setAge] = useState("Vse");
  const [month, setMonth] = useState("September 2025");
  const [monthlyAttendance, setMonthlyAttendance] = useState(() => JSON.parse(localStorage.getItem("kkj-monthly-attendance") || "{}"));
  const [generatorFocus, setGeneratorFocus] = useState("Podaje");
  const [generatedPlan, setGeneratedPlan] = useState(null);

  useEffect(() => localStorage.setItem("kkj-players", JSON.stringify(players)), [players]);
  useEffect(() => localStorage.setItem("kkj-saved-drills", JSON.stringify(saved)), [saved]);
  useEffect(() => localStorage.setItem("kkj-coach-notes", notes), [notes]);
  useEffect(() => localStorage.setItem("kkj-coach-name", coachName), [coachName]);
  useEffect(() => localStorage.setItem("kkj-club-name", clubName), [clubName]);
  useEffect(() => localStorage.setItem("kkj-team", team), [team]);
  useEffect(() => localStorage.setItem("kkj-monthly-attendance", JSON.stringify(monthlyAttendance)), [monthlyAttendance]);

  const filtered = useMemo(() => DRILLS.filter(d => {
    const t = [d.title,d.purpose,d.setup,d.skill,d.category,d.age,d.level].join(" ").toLowerCase();
    return t.includes(query.toLowerCase()) &&
      (skill === "Vse" || d.skill === skill) &&
      (level === "Vse" || d.level === level) &&
      (age === "Vse" || d.age === age);
  }), [query, skill, level, age]);

  const currentMonth = SEASON_MONTHS.find(m => m.key === month) || SEASON_MONTHS[0];
  const trainingDays = (monthKey) => {
    const meta = SEASON_MONTHS.find(m => m.key === monthKey);
    if (!meta) return [];
    const out = [];
    for (let d = 1; d <= meta.days; d++) {
      const weekday = new Date(meta.year, meta.monthIndex, d).getDay();
      const normalized = weekday === 0 ? 7 : weekday;
      if (TRAINING_PATTERN.includes(normalized)) out.push(d);
    }
    return out;
  };
  const isTrainingDay = (day) => trainingDays(month).includes(day);
  const statusFor = (playerId, day) => monthlyAttendance[`${month}-${playerId}-${day}`] || "";
  const toggleAttendance = (playerId, day) => {
    if (!isTrainingDay(day)) return;
    const key = `${month}-${playerId}-${day}`;
    setMonthlyAttendance(prev => {
      const curr = prev[key] || "";
      const next = curr === "present" ? "absent" : curr === "absent" ? "" : "present";
      return { ...prev, [key]: next };
    });
  };
  const playerMonthPercent = (playerId) => {
    const days = trainingDays(month);
    let marked = 0, present = 0;
    days.forEach(day => {
      const s = statusFor(playerId, day);
      if (s) { marked++; if (s === "present") present++; }
    });
    return marked ? Math.round(present / marked * 100) : 0;
  };

  const generatePlan = () => {
    const focusDrills = DRILLS.filter(d => d.skill === generatorFocus);
    const main1 = focusDrills[0] || DRILLS[0];
    const main2 = focusDrills[1] || DRILLS[1];
    const support = DRILLS.find(d => d.skill !== generatorFocus) || DRILLS[2];
    const game = GAMES.find(g => g.skill === generatorFocus) || GAMES[0];
    setGeneratedPlan([
      { block: "Ogrevanje", minutes: 10, title: "Aktivacija, koordinacija in lovljenje", note: "Dinamicno ogrevanje, reakcija, lahka koordinacija." },
      { block: "Fokus 1", minutes: 15, title: main1.title, note: main1.purpose },
      { block: "Fokus 2", minutes: 15, title: main2.title, note: main2.purpose },
      { block: "Podporni del", minutes: 20, title: support.title, note: support.purpose },
      { block: "Igra", minutes: 30, title: game.title, note: game.desc }
    ]);
  };

  const printTraining = () => {
    const plan = generatedPlan || [{ block: "Trening", minutes: 90, title: "Najprej generiraj trening.", note: "" }];
    openPrint(`<html><head><title>KK Jesenice - Trening</title><style>body{font-family:Arial;padding:20px}h1{font-size:22px}.b{border-bottom:1px solid #ddd;padding:8px 0}.t{font-weight:bold}.n{font-size:12px;color:#555}</style></head><body><h1>KK Jesenice - Trening (90 min)</h1>${plan.map(b=>`<div class="b"><div class="t">${b.minutes} min - ${b.block}</div><div>${b.title}</div><div class="n">${b.note || ""}</div></div>`).join("")}</body></html>`);
  };

  const printDrills = () => {
    openPrint(`<html><head><title>KK Jesenice - Vaje</title><style>body{font-family:Arial;padding:20px}h1{font-size:22px}.d{border-bottom:1px solid #ddd;padding:12px 0}.s{font-size:12px;color:#444}ul{padding-left:18px}</style></head><body><h1>KK Jesenice - Baza vaj</h1>${filtered.map(d=>`<div class="d"><div><strong>${d.id}. ${d.title}</strong> (${d.skill} / ${d.age})</div><div class="s"><strong>Namen:</strong> ${d.purpose}</div><div class="s"><strong>Organizacija:</strong> ${d.setup}</div><div class="s"><strong>Izvedba:</strong><ul>${d.steps.map(s=>`<li>${s}</li>`).join("")}</ul></div><div class="s"><strong>Trenerski poudarki:</strong> ${d.coach}</div><div class="s"><strong>Pogoste napake:</strong> ${d.mistakes}</div><div class="s"><strong>Variacija:</strong> ${d.variation}</div></div>`).join("")}</body></html>`);
  };

  const exportData = () => {
    const payload = { clubName, coachName, team, players, saved, notes, monthlyAttendance };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kk-jesenice-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (x) => {
      try {
        const data = JSON.parse(String(x.target?.result || "{}"));
        if (data.players) setPlayers(data.players);
        if (data.saved) setSaved(data.saved);
        if (data.notes) setNotes(data.notes);
        if (data.clubName) setClubName(data.clubName);
        if (data.coachName) setCoachName(data.coachName);
        if (data.team) setTeam(data.team);
        if (data.monthlyAttendance) setMonthlyAttendance(data.monthlyAttendance);
        alert("Podatki so uvozeni.");
      } catch {
        alert("Napaka pri uvozu.");
      }
    };
    reader.readAsText(file);
  };

  const updateNote = (id, note) => setPlayers(prev => prev.map(p => p.id === id ? { ...p, note } : p));

  return (
    <div className="app">
      <div className="header">
        <div className="row">
          <Input value={coachName} onChange={e => setCoachName(e.target.value)} placeholder="Ime trenerja" />
          <Input value={clubName} onChange={e => setClubName(e.target.value)} placeholder="Ime kluba" />
          <select value={team} onChange={e => setTeam(e.target.value)}>
            {["U8/U9","U10/U11","U12/U13","U14/U15","U16"].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div style={{marginTop:12}}>
          <span className="badge">{clubName}</span>
          <span className="badge outline">Ekipa: {team}</span>
          <span className="badge outline">Trener: {coachName}</span>
        </div>
        <h1>🏀 KK Jesenice - trenerska app</h1>
        <p>PRO verzija za telefon in računalnik. Treningi so 90 minut, vaje so natančno opisane, vse je pripravljeno za print ali PDF.</p>
        <div className="row">
          <button className="btn secondary" onClick={generatePlan}>Generiraj PRO trening</button>
          <button className="btn" onClick={printTraining}>Print trening</button>
          <button className="btn secondary" onClick={printDrills}>Print / PDF vaje</button>
        </div>
      </div>

      <div className="grid grid-3" style={{marginTop:16}}>
        <div className="card"><div className="small">Vaje</div><div className="stat">{DRILLS.length}</div></div>
        <div className="card"><div className="small">Igre</div><div className="stat">{GAMES.length}</div></div>
        <div className="card"><div className="small">Igralci</div><div className="stat">{players.length}</div></div>
      </div>

      <div className="tabbar">
        {["dashboard","vaje","treningi","prisotnost","profili","backup","opombe"].map(t => (
          <button key={t} className={tab === t ? "active" : ""} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      {tab === "dashboard" && (
        <div className="grid grid-2">
          <div className="card">
            <h3>PRO generator treninga</h3>
            <div className="row">
              <select value={generatorFocus} onChange={e => setGeneratorFocus(e.target.value)}>
                {["Podaje","Vodenje","Met","Obramba","Dvokorak","Pivot","Skok"].map(s => <option key={s}>{s}</option>)}
              </select>
              <button className="btn" onClick={generatePlan}>Generiraj</button>
            </div>
            {generatedPlan ? generatedPlan.map((b, i) => (
              <div key={i} className="card" style={{marginTop:10, padding:12}}>
                <div className="row" style={{justifyContent:"space-between"}}>
                  <strong>{b.block}</strong><span className="small">{b.minutes} min</span>
                </div>
                <div>{b.title}</div>
                <div className="small">{b.note}</div>
              </div>
            )) : <div className="small" style={{marginTop:10}}>Klikni generiraj, da dobiš 90-minutni trening.</div>}
          </div>
          <div className="card">
            <h3>Pripravljeni treningi</h3>
            {TRAININGS.map((t, i) => <div key={i} className="card" style={{marginTop:10, padding:12}}><strong>{t.title}</strong>{t.blocks.map((b,j)=><div key={j} className="small">{j+1}. {b}</div>)}</div>)}
          </div>
        </div>
      )}

      {tab === "vaje" && (
        <div>
          <div className="card">
            <div className="row">
              <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Išči vajo, opis, kategorijo..." />
              <select value={skill} onChange={e => setSkill(e.target.value)}><option>Vse</option>{[...new Set(DRILLS.map(d=>d.skill))].map(s => <option key={s}>{s}</option>)}</select>
              <select value={level} onChange={e => setLevel(e.target.value)}><option>Vse</option>{[...new Set(DRILLS.map(d=>d.level))].map(s => <option key={s}>{s}</option>)}</select>
              <select value={age} onChange={e => setAge(e.target.value)}><option>Vse</option>{[...new Set(DRILLS.map(d=>d.age))].map(s => <option key={s}>{s}</option>)}</select>
            </div>
          </div>
          <div className="grid grid-3" style={{marginTop:16}}>
            {filtered.map(d => (
              <div key={d.id} className="card">
                <div><strong>{d.id}. {d.title}</strong></div>
                <div style={{marginTop:6}}>
                  <span className="badge">{d.skill}</span>
                  <span className="badge outline">{d.level}</span>
                  <span className="badge outline">{d.age}</span>
                </div>
                <div><strong>Namen:</strong> {d.purpose}</div>
                <div><strong>Organizacija:</strong> {d.setup}</div>
                <div><strong>Izvedba:</strong><ol>{d.steps.map((s,i)=><li key={i}>{s}</li>)}</ol></div>
                <div><strong>Trenerski poudarki:</strong> {d.coach}</div>
                <div><strong>Pogoste napake:</strong> {d.mistakes}</div>
                <div><strong>Variacija:</strong> {d.variation}</div>
                <button className="btn secondary" style={{marginTop:10}} onClick={() => setSaved(prev => prev.includes(d.id) ? prev.filter(x => x !== d.id) : [...prev, d.id])}>
                  {saved.includes(d.id) ? "Shranjena vaja" : "Shrani vajo"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "treningi" && (
        <div className="grid grid-3">
          {TRAININGS.map((t, i) => <div key={i} className="card"><strong>{t.title}</strong>{t.blocks.map((b,j)=><div key={j} style={{marginTop:8}}>{j+1}. {b}</div>)}</div>)}
        </div>
      )}

      {tab === "prisotnost" && (
        <div className="card">
          <div className="row">
            <select value={month} onChange={e => setMonth(e.target.value)}>{SEASON_MONTHS.map(m => <option key={m.key}>{m.key}</option>)}</select>
            <div className="small">Trening dnevi: pon / sre / pet</div>
          </div>
          <div className="table-wrap" style={{marginTop:12}}>
            <table>
              <thead>
                <tr>
                  <th>Igralec</th>
                  {Array.from({length: currentMonth.days}).map((_, i) => <th key={i}>{i+1}</th>)}
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {players.map(p => (
                  <tr key={p.id}>
                    <td><strong>{p.name}</strong><div className="small">letnik {p.year} · {p.group}</div></td>
                    {Array.from({length: currentMonth.days}).map((_, i) => {
                      const day = i + 1;
                      const training = isTrainingDay(day);
                      const s = statusFor(p.id, day);
                      const cls = !training ? "day-btn off" : s === "present" ? "day-btn present" : s === "absent" ? "day-btn absent" : "day-btn";
                      return <td key={day}><button className={cls} onClick={() => toggleAttendance(p.id, day)}>{!training ? "-" : s === "present" ? "✓" : s === "absent" ? "✕" : ""}</button></td>;
                    })}
                    <td><strong>{playerMonthPercent(p.id)}%</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "profili" && (
        <div className="grid grid-2">
          {players.map(p => (
            <div key={p.id} className="card">
              <div className="row" style={{justifyContent:"space-between"}}>
                <strong>{p.name}</strong><span className="badge">{p.group}</span>
              </div>
              <div className="grid" style={{gridTemplateColumns:"repeat(5, 1fr)", gap:8, marginTop:10}}>
                <div className="card" style={{padding:8}}>Vodenje: {p.skills.dribble}/5</div>
                <div className="card" style={{padding:8}}>Podaje: {p.skills.pass}/5</div>
                <div className="card" style={{padding:8}}>Met: {p.skills.shot}/5</div>
                <div className="card" style={{padding:8}}>Obramba: {p.skills.def}/5</div>
                <div className="card" style={{padding:8}}>Pristop: {p.skills.attitude}/5</div>
              </div>
              <Textarea value={p.note} onChange={e => updateNote(p.id, e.target.value)} placeholder="Opombe trenerja..." />
            </div>
          ))}
        </div>
      )}

      {tab === "backup" && (
        <div className="grid grid-2">
          <div className="card">
            <h3>Backup podatkov</h3>
            <div className="row">
              <button className="btn" onClick={exportData}>Izvozi podatke</button>
              <label className="btn secondary" style={{display:"inline-flex", alignItems:"center"}}>
                Uvozi podatke
                <input type="file" accept="application/json" style={{display:"none"}} onChange={importData} />
              </label>
              <button className="btn secondary" onClick={() => {
                if (!window.confirm("Ponastavim podatke?")) return;
                setPlayers(INITIAL_PLAYERS); setSaved([]); setNotes(""); setMonthlyAttendance({});
              }}>Ponastavi app</button>
            </div>
          </div>
          <div className="card">
            <h3>Telefon / PWA</h3>
            <p>Po objavi na Vercel odpri link na telefonu in izberi Dodaj na začetni zaslon. Tako jo uporabljaš brez APK.</p>
          </div>
        </div>
      )}

      {tab === "opombe" && (
        <div className="card">
          <h3>Trenerjeve opombe</h3>
          <Textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Sem vpiši cilje, plan in opombe..." />
        </div>
      )}
    </div>
  );
}

/* Pinboard pages — part B: Hobbies, All-Time, Hangout */

/* ============================================================
   HOBBIES
   ============================================================ */
function HobbiesPage() {
  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>extracurriculars · the things i actually do</p>
          <h1 className="page-title">Hobbies</h1>
        </div>
        <div className="sub">"guitar, running, lifting, climbing"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1700 }}>

        {/* GUITAR — (photo removed per request) */}

        {/* GUITAR notebook scrap */}
        <Pinned x={60} y={40} w={460} rotate={-1.4} z={2} tape tapeColor="kraft" tapeRot={-3} tapeWidth={110}>
          <div className="scrap-white" style={{ padding: 20 }}>
            <p className="kicker">hobby #1</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 30, color: "var(--red)" }}>
              acoustic guitar
            </h3>
            <p>
              All self-taught, all <span className="hi">fingerpicking and strumming</span>.
              I can play a handful of favorites well enough to be in the room with them.
              One day I want to take real lessons and find out how much I've been
              guessing.
            </p>
            <div style={{ marginTop: 10, fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--ink-soft)" }}>
              learning next: a song with a barre chord I've been avoiding for 3 years
            </div>
          </div>
        </Pinned>

        <div className="item" style={{ left: 600, top: 20, zIndex: 4, transform: "rotate(8deg)" }}>
          <Guitar w={110} h={200} color="#fbf4e0"/>
        </div>
        <Annotation x={780} y={50} rotate={-3} color="#fbf4e0" text="← hour i look forward to all week" w={300}/>

        {/* RUNNING — (photo removed per request) */}

        {/* RUNNING — stat card */}
        <Pinned x={60} y={460} w={360} rotate={-1.6} z={2} pin pinColor="green">
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #2 · running</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 6 }}>
              <div>
                <div className="kicker">1 mile</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 32, color: "var(--ink)" }}>7:00</div>
                <div className="hand2" style={{ color: "var(--ink-soft)" }}>current</div>
              </div>
              <div>
                <div className="kicker">5k</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 32, color: "var(--ink)" }}>28:00</div>
                <div className="hand2" style={{ color: "var(--ink-soft)" }}>current</div>
              </div>
              <div style={{ gridColumn: "1 / -1", borderTop: "1.5px dashed rgba(140,110,60,0.4)", paddingTop: 8 }}>
                <div className="kicker" style={{ color: "var(--red)" }}>goal · 5k</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 36, color: "var(--red)" }}>22:30</div>
                <div className="hand2" style={{ color: "var(--ink-soft)" }}>5:30 shy. coming for it.</div>
              </div>
            </div>
          </div>
        </Pinned>

        {/* RUNNING — race bib */}
        <Pinned x={460} y={460} w={260} rotate={3.4} z={2} pin pinColor="white" pinTop={4}>
          <div style={{
            background: "#fafaf2",
            padding: "20px 20px 18px",
            width: 260,
            border: "1px solid rgba(140,110,60,0.3)",
            position: "relative",
            boxShadow: "0 8px 14px -4px rgba(0,0,0,0.4)",
          }}>
            <div style={{ position: "absolute", top: 6, left: 6, width: 12, height: 12, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", top: 6, right: 6, width: 12, height: 12, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", bottom: 6, left: 6, width: 12, height: 12, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", bottom: 6, right: 6, width: 12, height: 12, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ textAlign: "center", fontFamily: "var(--f-marker)", color: "var(--ink)" }}>
              <div style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>NYC ROAD RUNNERS</div>
              <div style={{ fontSize: 72, lineHeight: 1, color: "var(--red)", marginTop: 4 }}>1847</div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-soft)", marginTop: 4 }}>K · PHAN</div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-faint)", marginTop: 2 }}>SPRING 5K</div>
            </div>
          </div>
        </Pinned>

        <div className="item" style={{ left: 800, top: 480, zIndex: 4, transform: "rotate(-8deg)" }}>
          <RunningShoe w={140} h={80} color="#fbf4e0"/>
        </div>
        <Annotation x={780} y={620} rotate={-2} color="#fbf4e0" text="greenpoint → LIC, over the pulaski" w={320}/>

        {/* LIFTING — (photo removed per request) */}

        {/* LIFTING — log */}
        <Pinned x={60} y={870} w={360} rotate={1.6} z={2} pin pinColor="red">
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #3 · lifting</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 24, color: "var(--ink)" }}>
              general strength, with a number to chase
            </h3>
            <p>
              No program religion. I show up, push a little harder than last week, and
              try not to be stupid about it. The bench number is the carrot.
            </p>
            <div style={{
              marginTop: 12,
              borderTop: "1.5px dashed rgba(140,110,60,0.4)",
              paddingTop: 10,
              textAlign: "center",
            }}>
              <div className="kicker" style={{ color: "var(--red)" }}>goal · bench</div>
              <div style={{ fontFamily: "var(--f-marker)", fontSize: 60, color: "var(--red)", lineHeight: 1 }}>
                225
              </div>
              <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 2 }}>
                two plates a side, no negotiations
              </div>
            </div>
          </div>
        </Pinned>

        <div className="item" style={{ left: 460, top: 880, zIndex: 4, transform: "rotate(-4deg)" }}>
          <Dumbbell w={140} h={70} color="#fbf4e0"/>
        </div>

        {/* WHAT I'M ADDING */}
        <Pinned x={460} y={960} w={300} rotate={3} z={2} pin pinColor="green" pinTop={4}>
          <div className="sticky green" style={{ padding: "14px 14px 16px" }}>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>open to additions:</strong>
            <div style={{ height: 6 }}/>
            yoga — apparently it helps.<br/>
            learning to actually swim.<br/>
            getting back into chess.
          </div>
        </Pinned>

        <Annotation x={780} y={870} rotate={-6} color="#fbf4e0" text="↓ for real, eventually" w={200}/>

        {/* CLIMBING — (photo removed per request) */}

        {/* CLIMBING — grade card */}
        <Pinned x={60} y={1290} w={360} rotate={-1.4} z={2} pin pinColor="blue">
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #4 · bouldering</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 24, color: "var(--ink)" }}>
              currently a V4, working on V5
            </h3>
            <p>
              Best place to be in my head all week. Slabs over overhangs, footwork over
              power. The wall doesn't care how my day went.
            </p>
            <div style={{
              marginTop: 12,
              borderTop: "1.5px dashed rgba(140,110,60,0.4)",
              paddingTop: 10,
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
              textAlign: "center",
            }}>
              <div>
                <div className="kicker">sending</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 44, color: "var(--ink)", lineHeight: 1 }}>V4</div>
              </div>
              <div>
                <div className="kicker" style={{ color: "var(--red)" }}>goal</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 44, color: "var(--red)", lineHeight: 1 }}>V5</div>
              </div>
            </div>
          </div>
        </Pinned>

        {/* CLIMBING — project scrap removed */}
      </div>
    </div>
  );
}

/* ============================================================
   ALL-TIME
   ============================================================ */
function AllTimePage() {
  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>the canon · all of time</p>
          <h1 className="page-title">All-Time</h1>
        </div>
        <div className="sub">"the ones I'd defend in court"</div>
      </div>

      <div className="canvas" style={{ minHeight: 980 }}>

        {/* TOP 5 ANIME — no order */}
        <Annotation x={60} y={-20} rotate={-3} color="#fbf4e0" text="all-time anime · top 5, no order" w={420}/>
        <Pinned x={50} y={30} w={190} rotate={-3.4} z={2} pin pinColor="red">
          <PhotoSlot id="atime-anime-1" w={170} h={230} caption="Attack on Titan" placeholder="AoT poster"/>
        </Pinned>
        <Pinned x={260} y={40} w={190} rotate={2.2} z={2} pin pinColor="blue">
          <PhotoSlot id="atime-anime-2" w={170} h={230} caption="Frieren" placeholder="Frieren poster"/>
        </Pinned>
        <Pinned x={470} y={28} w={190} rotate={-1.6} z={2} pin pinColor="green">
          <PhotoSlot id="atime-anime-3" w={170} h={230} caption="Jujutsu Kaisen" placeholder="JJK poster"/>
        </Pinned>
        <Pinned x={680} y={42} w={190} rotate={2.8} z={2} pin pinColor="yellow">
          <PhotoSlot id="atime-anime-4" w={170} h={230} caption="Ping Pong the Animation" placeholder="Ping Pong poster"/>
        </Pinned>
        <Pinned x={890} y={32} w={190} rotate={-2.4} z={2} pin pinColor="white">
          <PhotoSlot id="atime-anime-5" w={170} h={230} caption="FMA: Brotherhood" placeholder="FMA:B poster"/>
        </Pinned>

        {/* ALBUMS — 4, evenly spaced */}
        <Annotation x={60} y={360} rotate={-3} color="#fbf4e0" text="all-time albums" w={220}/>
        <Pinned x={120} y={410} w={170} rotate={-3.4} z={2} pin pinColor="red">
          <PhotoSlot id="atime-album-1" w={150} h={150} caption="album 1" placeholder="album 1"/>
        </Pinned>
        <Pinned x={360} y={420} w={170} rotate={2} z={2} pin pinColor="blue">
          <PhotoSlot id="atime-album-2" w={150} h={150} caption="album 2" placeholder="album 2"/>
        </Pinned>
        <Pinned x={600} y={405} w={170} rotate={-1.6} z={2} pin pinColor="yellow">
          <PhotoSlot id="atime-album-3" w={150} h={150} caption="album 3" placeholder="album 3"/>
        </Pinned>
        <Pinned x={840} y={420} w={170} rotate={3} z={2} pin pinColor="green">
          <PhotoSlot id="atime-album-4" w={150} h={150} caption="album 4" placeholder="album 4"/>
        </Pinned>

        {/* PLACES — 4, evenly spaced */}
        <Annotation x={60} y={650} rotate={-4} color="#fbf4e0" text="all-time places" w={200}/>
        <Pinned x={50} y={700} w={220} rotate={-2.4} z={2} pin pinColor="white">
          <PhotoSlot id="atime-place-hcmc" w={200} h={160} caption="home, ho chi minh city" placeholder="home in HCMC"/>
        </Pinned>
        <Pinned x={300} y={710} w={220} rotate={2.6} z={2} pin pinColor="blue">
          <PhotoSlot id="atime-place-middlesex" w={200} h={160} caption="middlesex · the circle" placeholder="middlesex school, the circle"/>
        </Pinned>
        <Pinned x={550} y={700} w={220} rotate={-1.6} z={2} pin pinColor="green">
          <PhotoSlot id="atime-place-gt" w={200} h={160} caption="The Spot · Georgia Tech" placeholder="GT — The Spot"/>
        </Pinned>
        <Pinned x={800} y={710} w={220} rotate={2.2} z={2} pin pinColor="red">
          <PhotoSlot id="atime-place-run" w={200} h={160} caption="greenpoint → LIC loop" placeholder="greenpoint/LIC run"/>
        </Pinned>

      </div>
    </div>
  );
}

/* ============================================================
   HANGOUT
   ============================================================ */
function Row({ label, children }) {
  return (
    <div style={{ borderBottom: "1.5px dotted var(--ink-soft)", marginBottom: 6, paddingBottom: 4 }}>
      <span style={{ color: "var(--ink-faint)", fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", marginRight: 6 }}>{label}:</span>
      <span className="hand" style={{ fontSize: 20 }}>{children}</span>
    </div>
  );
}

const timeSelectStyle = {
  background: "#fbf4e0",
  border: "1.5px solid var(--ink-soft)",
  borderRadius: 4,
  fontFamily: "var(--f-hand)",
  fontSize: 22,
  color: "var(--ink)",
  padding: "4px 8px",
  cursor: "pointer",
};

function HangoutPage() {
  const [activity, setActivity] = React.useState("coffee");
  const [customActivity, setCustomActivity] = React.useState("");
  const [when, setWhen] = React.useState("Sat — 11am");
  const [customDay, setCustomDay] = React.useState("Sat");
  const [customHour, setCustomHour] = React.useState("3");
  const [customMin, setCustomMin] = React.useState("00");
  const [customAmPm, setCustomAmPm] = React.useState("pm");
  const [name, setName] = React.useState("");
  const [vibe, setVibe] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const activities = [
    { id: "coffee",   label: "Coffee" },
    { id: "beer",     label: "Get a beer" },
    { id: "dinner",   label: "Dinner" },
    { id: "concert",  label: "Live concert" },
    { id: "climbing", label: "Climbing" },
    { id: "run",      label: "Easy run" },
    { id: "wildcard", label: "Wildcard →" },
  ];
  const slots = [
    "Thu — 6pm",
    "Fri — 6pm",
    "Sat — 11am",
    "Sat — 4pm",
    "Sat — 6pm",
    "Sun — 11am",
    "Sun — 4pm",
    "Sun — 6pm",
  ];

  const activityLabel = activity === "wildcard"
    ? (customActivity.trim() ? customActivity : "_______ (your call)")
    : activities.find(a => a.id === activity)?.label;

  const isCustomTime = when === "__custom__";
  const whenLabel = isCustomTime
    ? `${customDay} — ${customHour}:${customMin}${customAmPm}`
    : when;

  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>permission slip · please fill out</p>
          <h1 className="page-title">Hang Out</h1>
        </div>
        <div className="sub">"yes, I actually mean it"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1100 }}>

        {/* CLIPBOARD with form */}
        <Pinned x={60} y={20} w={460} rotate={-1.4} z={3} pin pinColor="red" pinTop={6}>
          <div style={{
            position: "absolute",
            top: -22, left: "50%",
            transform: "translateX(-50%)",
            width: 110, height: 30,
            background: "linear-gradient(180deg, #888, #444)",
            borderRadius: "8px 8px 4px 4px",
            border: "1px solid #222",
            zIndex: 2,
          }}>
            <div style={{
              position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)",
              width: 50, height: 10,
              background: "linear-gradient(180deg, #aaa, #555)",
              borderRadius: 4,
            }}/>
          </div>
          <div style={{
            background: "#7a2f1a",
            padding: 14,
            borderRadius: 6,
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
          }}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  style={{ background: "#fbf4e0", padding: 22, border: "1px solid rgba(140,110,60,0.4)" }}>
              <p className="kicker">hangout request · form 03-K</p>
              <h3 style={{ fontFamily: "var(--f-marker)", fontSize: 22, color: "var(--red)", margin: "6px 0 8px" }}>
                step 1 · activity
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {activities.map(a => (
                  <button type="button" key={a.id}
                    onClick={() => setActivity(a.id)}
                    style={{
                      padding: "10px 8px",
                      background: activity === a.id ? "#fff066" : "transparent",
                      border: activity === a.id ? "2px solid var(--red)" : "1.5px dashed var(--ink-soft)",
                      fontFamily: "var(--f-hand)",
                      fontSize: 20, color: "var(--ink)",
                      cursor: "pointer",
                      transform: activity === a.id ? "rotate(-1deg)" : "none",
                    }}>
                    {a.label}
                  </button>
                ))}
              </div>
              {activity === "wildcard" && (
                <div style={{ marginTop: 8 }}>
                  <input value={customActivity}
                    onChange={e => setCustomActivity(e.target.value)}
                    placeholder="your idea — e.g. minigolf, pottery, museum"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px dotted var(--red)",
                      fontFamily: "var(--f-hand)",
                      fontSize: 22,
                      color: "var(--ink)",
                      padding: "4px 2px",
                      outline: "none",
                    }}/>
                </div>
              )}

              <h3 style={{ fontFamily: "var(--f-marker)", fontSize: 22, color: "var(--red)", margin: "14px 0 8px" }}>
                step 2 · time
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                {slots.map(s => (
                  <button type="button" key={s} onClick={() => setWhen(s)}
                    style={{
                      padding: "8px 12px",
                      background: when === s ? "#ffb3d1" : "transparent",
                      border: "1.5px dashed var(--ink-soft)",
                      fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink)",
                      cursor: "pointer",
                      transform: when === s ? "rotate(-1deg)" : "none",
                      textAlign: "left",
                    }}>
                    {when === s && <span style={{ color: "var(--red)", marginRight: 6, fontFamily: "var(--f-marker)" }}>✗</span>}
                    {s}
                  </button>
                ))}
                <button type="button"
                  onClick={() => setWhen("__custom__")}
                  style={{
                    gridColumn: "1 / -1",
                    padding: "8px 12px",
                    background: isCustomTime ? "#fff066" : "transparent",
                    border: isCustomTime ? "2px solid var(--red)" : "1.5px dashed var(--ink-soft)",
                    fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink)",
                    cursor: "pointer",
                    transform: isCustomTime ? "rotate(-0.6deg)" : "none",
                    textAlign: "left",
                  }}>
                  {isCustomTime ? "✓ custom time ↓" : "… pick a custom time"}
                </button>
              </div>

              {isCustomTime && (
                <div style={{
                  marginTop: 10,
                  padding: "10px 12px",
                  background: "rgba(255,240,102,0.25)",
                  border: "1.5px dashed var(--red)",
                  display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap",
                }}>
                  <select value={customDay} onChange={e => setCustomDay(e.target.value)}
                    style={timeSelectStyle}>
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <option key={d}>{d}</option>)}
                  </select>
                  <span style={{ fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--ink-soft)" }}>at</span>
                  <select value={customHour} onChange={e => setCustomHour(e.target.value)}
                    style={timeSelectStyle}>
                    {Array.from({length: 12}, (_, i) => String(i+1)).map(h => <option key={h}>{h}</option>)}
                  </select>
                  <span style={{ fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--ink-soft)" }}>:</span>
                  <select value={customMin} onChange={e => setCustomMin(e.target.value)}
                    style={timeSelectStyle}>
                    {["00","15","30","45"].map(m => <option key={m}>{m}</option>)}
                  </select>
                  <select value={customAmPm} onChange={e => setCustomAmPm(e.target.value)}
                    style={timeSelectStyle}>
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                  </select>
                  <span style={{ fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--red)", marginLeft: 4 }}>
                    → {customDay}, {customHour}:{customMin}{customAmPm}
                  </span>
                </div>
              )}

              <div className="field">
                <label>your name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="who are you"/>
              </div>
              <div className="field">
                <label>note (optional)</label>
                <textarea rows={2} value={vibe} onChange={e => setVibe(e.target.value)} placeholder="a joke / a preference"/>
              </div>

              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 18 }}>
                <button type="submit" className="btn-stamp">
                  {sent ? "RECEIVED ✓" : "SEND IT"}
                </button>
                {sent && (
                  <span className="hand" style={{ color: "var(--green)", fontSize: 22 }}>
                    got it — i'll text back same day.
                  </span>
                )}
              </div>
            </form>
          </div>
        </Pinned>

        {/* RECEIPT */}
        <Pinned x={580} y={70} w={300} rotate={2.4} z={2} tape tapeColor="kraft" tapeRot={-4} tapeWidth={100}>
          <div style={{
            background: "#fff",
            border: "1px solid rgba(140,110,60,0.35)",
            width: 300,
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
          }}>
            <div style={{ padding: "10px 14px", background: "#c0392b", color: "#fff" }}>
              <div style={{ fontFamily: "var(--f-marker)", fontSize: 18, letterSpacing: 1 }}>HANG REQUEST</div>
              <div style={{ fontFamily: "var(--f-type)", fontSize: 9, letterSpacing: "0.22em" }}>FORM 03-K · COPY 2 OF 3</div>
            </div>
            <div style={{ padding: 16 }}>
              <Row label="activity">{activityLabel}</Row>
              <Row label="when">{whenLabel}</Row>
              <Row label="who">{name || "________________"}</Row>
              <Row label="note">{vibe || "________________"}</Row>
              <div style={{
                marginTop: 12,
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <div className="type" style={{ fontSize: 9, color: "var(--ink-faint)" }}>
                  X ___________________<br/>your sig
                </div>
                <div style={{
                  border: "3px solid " + (sent ? "var(--green)" : "var(--ink-faint)"),
                  color: sent ? "var(--green)" : "var(--ink-faint)",
                  padding: "3px 10px", fontFamily: "var(--f-marker)", fontSize: 16,
                  transform: "rotate(-8deg)",
                }}>
                  {sent ? "✓ APPROVED" : "PENDING"}
                </div>
              </div>
            </div>
          </div>
        </Pinned>

        {/* BTW STICKY */}
        <Pinned x={940} y={90} w={220} rotate={-3.6} z={2} pin pinColor="yellow" pinTop={6}>
          <div className="sticky" style={{ padding: "14px 14px 16px" }}>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>btw —</strong>
            <div style={{ height: 6 }}/>
            real cal link can go here<br/>
            once you have one.<br/>
            (cal.com / calendly /<br/>
            whatever you use.)
          </div>
        </Pinned>

        {/* PHOTO PROOF — "us, sometime" */}
        <Pinned x={580} y={520} w={260} rotate={2.6} z={2} pin pinColor="blue">
          <PhotoSlot id="hangout-photo-1" w={240} h={200} caption="last time we hung out" placeholder="a friend hangout photo"/>
        </Pinned>

        <Pinned x={880} y={500} w={260} rotate={-3} z={2} pin pinColor="green">
          <PhotoSlot id="hangout-photo-2" w={240} h={220} caption="and the time before" placeholder="another hangout photo"/>
        </Pinned>

        {/* WHAT TO EXPECT INDEX CARD */}
        <Pinned x={60} y={820} w={460} rotate={1.2} z={2} pin pinColor="white">
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>what to expect</p>
            <div style={{ display: "flex", gap: 24, alignItems: "center", padding: "14px 0 6px" }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 40, color: "var(--red)", lineHeight: 1 }}>
                  Good Vibes
                </div>
                <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 4 }}>
                  guaranteed
                </div>
              </div>
              <div style={{ width: 1, alignSelf: "stretch", borderLeft: "2px dashed rgba(140,110,60,0.5)" }}/>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 36, color: "var(--green)", lineHeight: 1 }}>
                  Positive Energy
                </div>
                <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 4 }}>
                  in bulk
                </div>
              </div>
            </div>
          </div>
        </Pinned>

        <Annotation x={1000} y={680} rotate={-6} color="#fbf4e0" text="↓ proof of past hangs ↓" w={200}/>
      </div>
    </div>
  );
}

Object.assign(window, { HobbiesPage, AllTimePage, HangoutPage });

/* ============================================================
   CAT PHOTO OF THE WEEK — just Mochi, a big heart, nothing else.
   ============================================================ */
function CatPage() {
  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>weekly feature · curator: khoa</p>
          <h1 className="page-title">Cat Photo of the Week</h1>
        </div>
        <div className="sub">"this week's mochi"</div>
      </div>

      <div className="canvas" style={{ minHeight: 900 }}>

        {/* the big heart, hand-drawn — centered, behind */}
        <div className="item" style={{
          left: "50%", top: 40,
          transform: "translateX(-50%) rotate(-4deg)",
          fontSize: 180,
          lineHeight: 1,
          color: "var(--red)",
          textShadow: "3px 5px 0 rgba(0,0,0,0.25)",
          zIndex: 3,
          fontFamily: "var(--f-marker)",
          userSelect: "none",
          pointerEvents: "none",
        }}>
          ♥
        </div>

        {/* the polaroid, centered */}
        <Pinned x={354} y={150} w={440} rotate={1.6} z={2} pin pinColor="red" pinTop={8}>
          <div className="polaroid" style={{ width: 440, paddingBottom: 90 }}>
            <image-slot
              id="cat-of-the-week"
              shape="rect"
              placeholder="drop this week's mochi photo"
              style={{ display: "block", width: "420px", height: "440px" }}
            ></image-slot>
            <div className="caption" style={{ fontSize: 30, bottom: 38 }}>
              Mochi
            </div>
            <div style={{
              position: "absolute", bottom: 14, left: 0, right: 0,
              textAlign: "center",
              fontFamily: "var(--f-type)", fontSize: 11,
              letterSpacing: "0.22em", color: "var(--ink-faint)",
              textTransform: "uppercase",
            }}>
              week of {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}
            </div>
          </div>
        </Pinned>
      </div>
    </div>
  );
}

Object.assign(window, { CatPage });

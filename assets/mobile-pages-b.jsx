/* Mobile pinboard pages — part B: Hobbies, Cat, All-Time, Hangout. */

/* ============================================================
   HOBBIES
   ============================================================ */
function MHobbiesPage() {
  return (
    <div className="page-enter">
      <MHeader kicker="extracurriculars · the things i actually do"
               title="Hobbies"
               sub="“guitar, running, lifting, climbing”"/>

      <div className="m-stack">

        {/* GUITAR card */}
        <MItem rotate={-1.4} tape tapeColor="kraft" tapeRot={-3} tapeWidth={110} w={320}>
          <div className="scrap-white" style={{ padding: 18 }}>
            <p className="kicker">hobby #1</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 28, color: "var(--red)" }}>
              acoustic guitar
            </h3>
            <p>
              All self-taught, all <span className="hi">fingerpicking and strumming</span>.
              I can play a handful of favorites well enough to be in the room with them.
              One day I want to take real lessons and find out how much I've been guessing.
            </p>
            <div style={{ marginTop: 8, fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink-soft)" }}>
              learning next: a song with a barre chord I've been avoiding for 3 years
            </div>
          </div>
        </MItem>

        <div className="m-anno r">↑ hour i look forward to all week</div>

        {/* Guitar doodle */}
        <MItem rotate={6} tight style={{ height: 200 }}>
          <Guitar w={100} h={180} color="#fbf4e0" style={{ display: "block", margin: "0 auto" }}/>
        </MItem>

        {/* RUNNING — stat card */}
        <MItem rotate={-1.6} pin pinColor="green" w={320}>
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #2 · running</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 6 }}>
              <div>
                <div className="kicker">1 mile</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 28, color: "var(--ink)" }}>7:00</div>
                <div className="hand2" style={{ color: "var(--ink-soft)", fontSize: 15 }}>current</div>
              </div>
              <div>
                <div className="kicker">5k</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 28, color: "var(--ink)" }}>28:00</div>
                <div className="hand2" style={{ color: "var(--ink-soft)", fontSize: 15 }}>current</div>
              </div>
              <div style={{ gridColumn: "1 / -1", borderTop: "1.5px dashed rgba(140,110,60,0.4)", paddingTop: 8 }}>
                <div className="kicker" style={{ color: "var(--red)" }}>goal · 5k</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 34, color: "var(--red)" }}>22:30</div>
                <div className="hand2" style={{ color: "var(--ink-soft)", fontSize: 15 }}>5:30 shy. coming for it.</div>
              </div>
            </div>
          </div>
        </MItem>

        {/* RACE BIB */}
        <MItem rotate={3} pin pinColor="white" tight>
          <div style={{
            background: "#fafaf2",
            padding: "18px 16px 14px",
            border: "1px solid rgba(140,110,60,0.3)",
            position: "relative",
            boxShadow: "0 8px 14px -4px rgba(0,0,0,0.4)",
          }}>
            <div style={{ position: "absolute", top: 6, left: 6, width: 10, height: 10, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", top: 6, right: 6, width: 10, height: 10, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", bottom: 6, left: 6, width: 10, height: 10, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ position: "absolute", bottom: 6, right: 6, width: 10, height: 10, borderRadius: "50%", background: "#ccc" }}/>
            <div style={{ textAlign: "center", fontFamily: "var(--f-marker)", color: "var(--ink)" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-soft)" }}>NYC ROAD RUNNERS</div>
              <div style={{ fontSize: 60, lineHeight: 1, color: "var(--red)", marginTop: 4 }}>1847</div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-soft)", marginTop: 4 }}>K · PHAN</div>
              <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--ink-faint)", marginTop: 2 }}>SPRING 5K</div>
            </div>
          </div>
        </MItem>

        <div className="m-anno">greenpoint → LIC, over the pulaski ↓</div>

        <MItem rotate={-3} tight style={{ height: 90 }}>
          <RunningShoe w={140} h={80} color="#fbf4e0" style={{ display: "block", margin: "0 auto" }}/>
        </MItem>

        {/* LIFTING — log */}
        <MItem rotate={1.6} pin pinColor="red" w={320}>
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #3 · lifting</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 22, color: "var(--ink)" }}>
              general strength, with a number to chase
            </h3>
            <p>
              No program religion. I show up, push a little harder than last week, and
              try not to be stupid about it. The bench number is the carrot.
            </p>
            <div style={{
              marginTop: 10,
              borderTop: "1.5px dashed rgba(140,110,60,0.4)",
              paddingTop: 8,
              textAlign: "center",
            }}>
              <div className="kicker" style={{ color: "var(--red)" }}>goal · bench</div>
              <div style={{ fontFamily: "var(--f-marker)", fontSize: 56, color: "var(--red)", lineHeight: 1 }}>
                225
              </div>
              <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 2, fontSize: 15 }}>
                two plates a side, no negotiations
              </div>
            </div>
          </div>
        </MItem>

        <MItem rotate={-4} tight style={{ height: 60 }}>
          <Dumbbell w={140} h={60} color="#fbf4e0" style={{ display: "block", margin: "0 auto" }}/>
        </MItem>

        {/* OPEN TO ADDITIONS */}
        <MItem rotate={3} pin pinColor="green" tight>
          <div className="sticky green">
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>open to additions:</strong>
            <div style={{ height: 6 }}/>
            yoga — apparently it helps.<br/>
            learning to actually swim.<br/>
            getting back into chess.
          </div>
        </MItem>

        {/* CLIMBING — grade card */}
        <MItem rotate={-1.4} pin pinColor="blue" w={320}>
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>hobby #4 · bouldering</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 22, color: "var(--ink)" }}>
              currently a V4, working on V5
            </h3>
            <p>
              Best place to be in my head all week. Slabs over overhangs, footwork over
              power. The wall doesn't care how my day went.
            </p>
            <div style={{
              marginTop: 10,
              borderTop: "1.5px dashed rgba(140,110,60,0.4)",
              paddingTop: 10,
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
              textAlign: "center",
            }}>
              <div>
                <div className="kicker">sending</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 40, color: "var(--ink)", lineHeight: 1 }}>V4</div>
              </div>
              <div>
                <div className="kicker" style={{ color: "var(--red)" }}>goal</div>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 40, color: "var(--red)", lineHeight: 1 }}>V5</div>
              </div>
            </div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

/* ============================================================
   CAT (photo of the week)
   ============================================================ */
function MCatPage() {
  return (
    <div className="page-enter">
      <MHeader kicker="weekly feature · curator: khoa"
               title="Cat Photo of the Week"
               sub="“this week's mochi”"/>

      <div className="m-stack" style={{ position: "relative" }}>

        {/* big background heart */}
        <div style={{
          position: "absolute",
          left: "50%", top: 20,
          transform: "translateX(-50%) rotate(-4deg)",
          fontSize: 220, lineHeight: 1,
          color: "var(--red)",
          textShadow: "3px 5px 0 rgba(0,0,0,0.25)",
          zIndex: 0,
          fontFamily: "var(--f-marker)",
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.95,
        }}>
          ♥
        </div>

        <MItem rotate={1.6} pin pinColor="red" pinTop={8} w={320}
               style={{ marginTop: 40 }}>
          <div className="polaroid" style={{ paddingBottom: 74 }}>
            <image-slot
              id="cat-of-the-week"
              shape="rect"
              placeholder="drop this week's mochi photo"
              style={{ display: "block", width: "100%", height: "340px" }}
            ></image-slot>
            <div className="caption" style={{ fontSize: 26, bottom: 32 }}>
              Mochi
            </div>
            <div style={{
              position: "absolute", bottom: 12, left: 0, right: 0,
              textAlign: "center",
              fontFamily: "var(--f-type)", fontSize: 10,
              letterSpacing: "0.22em", color: "var(--ink-faint)",
              textTransform: "uppercase",
            }}>
              week of {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}
            </div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

/* ============================================================
   ALL-TIME
   ============================================================ */
function MAllTimePage() {
  const anime = [
    { id: "atime-anime-1", caption: "Attack on Titan",         pin: "red"    },
    { id: "atime-anime-2", caption: "Frieren",                 pin: "blue"   },
    { id: "atime-anime-3", caption: "Jujutsu Kaisen",          pin: "green"  },
    { id: "atime-anime-4", caption: "Ping Pong the Animation", pin: "yellow" },
    { id: "atime-anime-5", caption: "FMA: Brotherhood",        pin: "white"  },
  ];
  const albums = [
    { id: "atime-album-1", caption: "album 1", pin: "red"    },
    { id: "atime-album-2", caption: "album 2", pin: "blue"   },
    { id: "atime-album-3", caption: "album 3", pin: "yellow" },
    { id: "atime-album-4", caption: "album 4", pin: "green"  },
  ];
  const places = [
    { id: "atime-place-hcmc",      caption: "home, HCMC",         pin: "white"  },
    { id: "atime-place-middlesex", caption: "middlesex · circle", pin: "blue"   },
    { id: "atime-place-gt",        caption: "GT · the spot",      pin: "green"  },
    { id: "atime-place-run",       caption: "greenpoint → LIC",   pin: "red"    },
  ];

  const Tile = ({id, caption, pin, rot, h = 150}) => (
    <div style={{ position: "relative", transform: `rotate(${rot}deg)` }}>
      <span className={`pin ${pin}`} style={{ top: 4, left: "50%", marginLeft: -10 }}/>
      <div className="polaroid" style={{ padding: "8px 8px 26px" }}>
        <image-slot id={id} shape="rect" placeholder={caption}
          style={{ display: "block", width: "100%", height: h + "px" }}></image-slot>
        <div className="caption" style={{ fontSize: 14 }}>{caption}</div>
      </div>
    </div>
  );

  return (
    <div className="page-enter">
      <MHeader kicker="the canon · all of time"
               title="All-Time"
               sub="“the ones I'd defend in court”"/>

      <div className="m-stack">

        <div className="m-anno">all-time anime · top 5, no order ↓</div>

        <div className="m-grid2">
          {anime.slice(0, 4).map((a, i) => (
            <Tile key={a.id} {...a} rot={i % 2 === 0 ? -2.4 : 2.2} h={180}/>
          ))}
        </div>
        {/* 5th anime, centered */}
        <MItem rotate={-2.4} pin pinColor={anime[4].pin} tight>
          <div className="polaroid" style={{ padding: "8px 8px 26px" }}>
            <image-slot id={anime[4].id} shape="rect" placeholder={anime[4].caption}
              style={{ display: "block", width: "100%", height: "180px" }}></image-slot>
            <div className="caption" style={{ fontSize: 14 }}>{anime[4].caption}</div>
          </div>
        </MItem>

        <div className="m-anno">all-time albums ↓</div>

        <div className="m-grid2">
          {albums.map((a, i) => (
            <Tile key={a.id} {...a} rot={i % 2 === 0 ? -3 : 2} h={130}/>
          ))}
        </div>

        <div className="m-anno">all-time places ↓</div>

        <div className="m-grid2">
          {places.map((p, i) => (
            <Tile key={p.id} {...p} rot={i % 2 === 0 ? -2 : 2.4} h={120}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HANGOUT
   ============================================================ */
function MHangoutRow({ label, children }) {
  return (
    <div style={{ borderBottom: "1.5px dotted var(--ink-soft)", marginBottom: 6, paddingBottom: 4 }}>
      <span style={{ color: "var(--ink-faint)", fontFamily: "var(--f-type)", fontSize: 10,
                     letterSpacing: "0.18em", textTransform: "uppercase", marginRight: 6 }}>
        {label}:
      </span>
      <span className="hand" style={{ fontSize: 19 }}>{children}</span>
    </div>
  );
}

const mTimeSelectStyle = {
  background: "#fbf4e0",
  border: "1.5px solid var(--ink-soft)",
  borderRadius: 4,
  fontFamily: "var(--f-hand)",
  fontSize: 20,
  color: "var(--ink)",
  padding: "4px 8px",
  cursor: "pointer",
};

function MHangoutPage() {
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
    { id: "beer",     label: "Beer" },
    { id: "dinner",   label: "Dinner" },
    { id: "concert",  label: "Concert" },
    { id: "climbing", label: "Climb" },
    { id: "run",      label: "Easy run" },
    { id: "wildcard", label: "Wildcard →" },
  ];
  const slots = [
    "Thu — 6pm", "Fri — 6pm",
    "Sat — 11am", "Sat — 4pm",
    "Sat — 6pm", "Sun — 11am",
    "Sun — 4pm", "Sun — 6pm",
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
      <MHeader kicker="permission slip · please fill out"
               title="Hang Out"
               sub="“yes, I actually mean it”"/>

      <div className="m-stack">

        {/* CLIPBOARD with form */}
        <MItem rotate={-1.2} pin pinColor="red" pinTop={6} w={340}>
          <div style={{
            position: "absolute",
            top: -22, left: "50%",
            transform: "translateX(-50%)",
            width: 100, height: 28,
            background: "linear-gradient(180deg, #888, #444)",
            borderRadius: "8px 8px 4px 4px",
            border: "1px solid #222",
            zIndex: 2,
          }}>
            <div style={{
              position: "absolute", left: "50%", top: 8, transform: "translateX(-50%)",
              width: 46, height: 9,
              background: "linear-gradient(180deg, #aaa, #555)",
              borderRadius: 4,
            }}/>
          </div>
          <div style={{
            background: "#7a2f1a",
            padding: 12,
            borderRadius: 6,
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
          }}>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  style={{ background: "#fbf4e0", padding: 18, border: "1px solid rgba(140,110,60,0.4)" }}>
              <p className="kicker">hangout request · form 03-K</p>
              <h3 style={{ fontFamily: "var(--f-marker)", fontSize: 20, color: "var(--red)", margin: "6px 0 8px" }}>
                step 1 · activity
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
                {activities.map(a => (
                  <button type="button" key={a.id}
                    onClick={() => setActivity(a.id)}
                    style={{
                      padding: "10px 4px",
                      background: activity === a.id ? "#fff066" : "transparent",
                      border: activity === a.id ? "2px solid var(--red)" : "1.5px dashed var(--ink-soft)",
                      fontFamily: "var(--f-hand)",
                      fontSize: 18, color: "var(--ink)",
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
                    placeholder="your idea — minigolf, pottery…"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "2px dotted var(--red)",
                      fontFamily: "var(--f-hand)",
                      fontSize: 20,
                      color: "var(--ink)",
                      padding: "4px 2px",
                      outline: "none",
                    }}/>
                </div>
              )}

              <h3 style={{ fontFamily: "var(--f-marker)", fontSize: 20, color: "var(--red)", margin: "12px 0 8px" }}>
                step 2 · time
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                {slots.map(s => (
                  <button type="button" key={s} onClick={() => setWhen(s)}
                    style={{
                      padding: "8px 10px",
                      background: when === s ? "#ffb3d1" : "transparent",
                      border: "1.5px dashed var(--ink-soft)",
                      fontFamily: "var(--f-hand)", fontSize: 18, color: "var(--ink)",
                      cursor: "pointer",
                      transform: when === s ? "rotate(-1deg)" : "none",
                      textAlign: "left",
                    }}>
                    {when === s && <span style={{ color: "var(--red)", marginRight: 4, fontFamily: "var(--f-marker)" }}>✗</span>}
                    {s}
                  </button>
                ))}
                <button type="button"
                  onClick={() => setWhen("__custom__")}
                  style={{
                    gridColumn: "1 / -1",
                    padding: "8px 10px",
                    background: isCustomTime ? "#fff066" : "transparent",
                    border: isCustomTime ? "2px solid var(--red)" : "1.5px dashed var(--ink-soft)",
                    fontFamily: "var(--f-hand)", fontSize: 18, color: "var(--ink)",
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
                  display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap",
                }}>
                  <select value={customDay} onChange={e => setCustomDay(e.target.value)}
                    style={mTimeSelectStyle}>
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <option key={d}>{d}</option>)}
                  </select>
                  <span style={{ fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink-soft)" }}>at</span>
                  <select value={customHour} onChange={e => setCustomHour(e.target.value)}
                    style={mTimeSelectStyle}>
                    {Array.from({length: 12}, (_, i) => String(i+1)).map(h => <option key={h}>{h}</option>)}
                  </select>
                  <span style={{ fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink-soft)" }}>:</span>
                  <select value={customMin} onChange={e => setCustomMin(e.target.value)}
                    style={mTimeSelectStyle}>
                    {["00","15","30","45"].map(m => <option key={m}>{m}</option>)}
                  </select>
                  <select value={customAmPm} onChange={e => setCustomAmPm(e.target.value)}
                    style={mTimeSelectStyle}>
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                  </select>
                  <div style={{ fontFamily: "var(--f-hand)", fontSize: 19, color: "var(--red)", marginTop: 4, width: "100%" }}>
                    → {customDay}, {customHour}:{customMin}{customAmPm}
                  </div>
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

              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <button type="submit" className="btn-stamp">
                  {sent ? "RECEIVED ✓" : "SEND IT"}
                </button>
                {sent && (
                  <span className="hand" style={{ color: "var(--green)", fontSize: 20 }}>
                    got it — i'll text back same day.
                  </span>
                )}
              </div>
            </form>
          </div>
        </MItem>

        {/* RECEIPT */}
        <MItem rotate={2.2} tape tapeColor="kraft" tapeRot={-4} tapeWidth={100} w={300}>
          <div style={{
            background: "#fff",
            border: "1px solid rgba(140,110,60,0.35)",
            width: "100%",
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
          }}>
            <div style={{ padding: "10px 14px", background: "var(--red)", color: "#fff" }}>
              <div style={{ fontFamily: "var(--f-marker)", fontSize: 17, letterSpacing: 1 }}>HANG REQUEST</div>
              <div style={{ fontFamily: "var(--f-type)", fontSize: 9, letterSpacing: "0.22em" }}>FORM 03-K · COPY 2 OF 3</div>
            </div>
            <div style={{ padding: 14 }}>
              <MHangoutRow label="activity">{activityLabel}</MHangoutRow>
              <MHangoutRow label="when">{whenLabel}</MHangoutRow>
              <MHangoutRow label="who">{name || "________________"}</MHangoutRow>
              <MHangoutRow label="note">{vibe || "________________"}</MHangoutRow>
              <div style={{
                marginTop: 12,
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              }}>
                <div className="type" style={{ fontSize: 9, color: "var(--ink-faint)" }}>
                  X _____________<br/>your sig
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
        </MItem>

        {/* BTW STICKY */}
        <MItem rotate={-3.4} pin pinColor="yellow" tight>
          <div className="sticky">
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>btw —</strong>
            <div style={{ height: 6 }}/>
            real cal link can go here<br/>
            once you have one.<br/>
            (cal.com / calendly /<br/>
            whatever you use.)
          </div>
        </MItem>

        <div className="m-anno r">↓ proof of past hangs</div>

        {/* PHOTO PROOF */}
        <MItem rotate={2.4} pin pinColor="blue" w={280}>
          <div className="polaroid" style={{ paddingBottom: 38 }}>
            <image-slot id="hangout-photo-1" shape="rect" placeholder="a friend hangout photo"
              style={{ display: "block", width: "100%", height: "210px" }}></image-slot>
            <div className="caption" style={{ fontSize: 18 }}>last time we hung out</div>
          </div>
        </MItem>

        <MItem rotate={-2.8} pin pinColor="green" w={280}>
          <div className="polaroid" style={{ paddingBottom: 38 }}>
            <image-slot id="hangout-photo-2" shape="rect" placeholder="another hangout photo"
              style={{ display: "block", width: "100%", height: "210px" }}></image-slot>
            <div className="caption" style={{ fontSize: 18 }}>and the time before</div>
          </div>
        </MItem>

        {/* WHAT TO EXPECT */}
        <MItem rotate={1.2} pin pinColor="white" w={320}>
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>what to expect</p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", padding: "12px 0 6px" }}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 30, color: "var(--red)", lineHeight: 1 }}>
                  Good Vibes
                </div>
                <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 4, fontSize: 14 }}>
                  guaranteed
                </div>
              </div>
              <div style={{ width: 1, alignSelf: "stretch", borderLeft: "2px dashed rgba(140,110,60,0.5)" }}/>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--f-marker)", fontSize: 26, color: "var(--green)", lineHeight: 1 }}>
                  Positive Energy
                </div>
                <div className="hand2" style={{ color: "var(--ink-soft)", marginTop: 4, fontSize: 14 }}>
                  in bulk
                </div>
              </div>
            </div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

Object.assign(window, { MHobbiesPage, MCatPage, MAllTimePage, MHangoutPage });

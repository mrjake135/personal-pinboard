/* Mobile pinboard pages — part A: About, Résumé, Music, Watching.
   Vertical-stack reflow of the desktop pinboard. */

/* small helper: header strip at top of every page */
function MHeader({ kicker, title, sub }) {
  return (
    <div className="m-header">
      <p className="m-kicker">{kicker}</p>
      <h1 className="m-title">{title}</h1>
      {sub && <div className="m-sub">{sub}</div>}
    </div>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function MAboutPage() {
  const timeline = [
    { id: "tl-moscow",  label: "moscow, russia",         sub: "born here · 1997",       pin: "red",    rot: -2.4 },
    { id: "tl-hcmc",    label: "ho chi minh city",       sub: "middle school",          pin: "blue",   rot:  2.2 },
    { id: "tl-concord", label: "concord, massachusetts", sub: "high school",            pin: "yellow", rot: -1.8 },
    { id: "tl-atl",     label: "atlanta, ga",            sub: "georgia tech · '16–'20", pin: "green",  rot:  2.0 },
    { id: "tl-nyc",     label: "new york city",          sub: "now · brooklyn",         pin: "white",  rot: -1.6 },
  ];

  return (
    <div className="page-enter">
      <MHeader kicker="khoa's board · est. 2026"
               title="Khoa Phan"
               sub="“hi, this is my corner of the wall”"/>

      <div className="m-stack">

        {/* HERO POLAROID */}
        <MItem rotate={-2.2} pin pinColor="red" w={290}>
          <div className="polaroid" style={{ paddingBottom: 44 }}>
            <image-slot id="hero-photo" shape="rect"
              placeholder="hero photo of you"
              style={{ display: "block", width: "100%", height: "300px" }}></image-slot>
            <div className="caption">me, allegedly</div>
          </div>
        </MItem>

        {/* INTRO INDEX CARD */}
        <MItem rotate={1.2} tape tapeColor="kraft" tapeRot={-4} tapeWidth={110} w={320}>
          <div className="indexcard">
            <p className="kicker">about me</p>
            <h2 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 26, color: "var(--red)" }}>
              khoa phan
            </h2>
            <p>
              Born in <span className="hi">Moscow, Russia</span>. Middle school in Ho Chi
              Minh City. High school in Concord, MA. Now an SRE at Google (NYC),
              keeping Bigtable happy for a lot of people who don't know it exists.
              Georgia Tech computer engineer.
            </p>
            <p>
              Self-taught fingerpicker, slow-but-improving runner, casual benching
              enjoyer. I love my cat <span className="hi-pink">Mochi</span> — could not
              be prouder of the cat he's become.
            </p>
          </div>
        </MItem>

        {/* QUICK FACTS STICKY */}
        <MItem rotate={-3} pin pinColor="yellow" tight>
          <div className="sticky orange">
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18, letterSpacing: 1 }}>quick facts</strong>
            <div style={{ height: 6 }}/>
            ☕ 2 coffees, baseline<br/>
            🏃 5k pr: 28:00<br/>
            🎸 self-taught<br/>
            🐈 one cat, perfect<br/>
            📍 NYC<br/>
            🎓 GT '20
          </div>
        </MItem>

        {/* TIMELINE LABEL */}
        <div className="m-anno">the wandering years — in order ↓</div>

        {/* TIMELINE COLUMN */}
        <div style={{ position: "relative", width: "100%", maxWidth: 320,
                      display: "flex", flexDirection: "column", alignItems: "center",
                      gap: 28, padding: "8px 0 4px" }}>
          <div className="m-thread"/>
          {timeline.map((p, i) => (
            <div key={p.id} style={{
              position: "relative",
              transform: `rotate(${p.rot}deg) translateX(${i % 2 === 0 ? -14 : 14}px)`,
              width: 200,
              zIndex: 2,
            }}>
              <span className={`pin ${p.pin}`} style={{ top: 4, left: "50%", marginLeft: -10 }}/>
              <div className="polaroid" style={{ paddingBottom: 36 }}>
                <image-slot id={p.id} shape="rect"
                  placeholder={p.label}
                  style={{ display: "block", width: "100%", height: "180px" }}></image-slot>
                <div className="caption" style={{ fontSize: 18 }}>{p.label}</div>
              </div>
              <div style={{
                marginTop: 6,
                fontFamily: "var(--f-type)", fontSize: 9.5,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--ink-faint)",
                background: "rgba(251,244,224,0.9)",
                padding: "4px 8px",
                textAlign: "center",
                borderRadius: 2,
              }}>
                {p.sub}
              </div>
            </div>
          ))}
        </div>

        {/* FAVORITE THINGS NOW */}
        <MItem rotate={-1.4} pin pinColor="green" w={320}>
          <div className="scrap-white" style={{ padding: 18 }}>
            <p className="kicker">favorite things, right now</p>
            <ol style={{ paddingLeft: 22, margin: "6px 0 0",
                         fontFamily: "var(--f-hand)", fontSize: 22, lineHeight: "30px",
                         color: "var(--ink)" }}>
              <li>Weekly cookout</li>
              <li>Getting faster</li>
              <li>Getting <span style={{ fontFamily: "var(--f-marker)", color: "var(--red)" }}>STRONG!</span></li>
              <li>Jujutsu Kaisen</li>
              <li>Slay the Spire 2</li>
            </ol>
            <div style={{ marginTop: 10, textAlign: "right" }}>
              <span style={{ fontFamily: "var(--f-marker)", fontSize: 26, color: "var(--red)",
                             display: "inline-block", transform: "rotate(-4deg)" }}>
                — khoa
              </span>
            </div>
          </div>
        </MItem>

        {/* MOCHI MINI-CARD */}
        <MItem rotate={2.4} pin pinColor="red">
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>resident of honor</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 26, color: "var(--ink)" }}>
              Mochi
            </h3>
            <p>
              Proudest dad on the block. He's grown into a real character —
              opinionated, affectionate, terrifyingly smart about the fridge.
            </p>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink-soft)", marginTop: 4 }}>
              ↗ full feature on the <strong style={{ color: "var(--red)" }}>cat</strong> tab.
            </div>
          </div>
        </MItem>

        {/* MOCHI HEART STICKY */}
        <MItem rotate={-4} pin pinColor="yellow" tight>
          <div className="sticky pink" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 36, lineHeight: 1 }}>♥</div>
            <div style={{ height: 4 }}/>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>mochi.</strong>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 20, marginTop: 4 }}>
              best boy.<br/>no notes.
            </div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

/* ============================================================
   RÉSUMÉ
   ============================================================ */
function MResumePage() {
  return (
    <div className="page-enter">
      <MHeader kicker="the permanent record"
               title="Résumé"
               sub="“the SRE life · NYC”"/>

      <div className="m-stack">

        {/* GOOGLE BADGE */}
        <MItem rotate={-2} pin pinColor="red" w={310}>
          <div className="bizcard" style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <image-slot id="logo-google" shape="rect" placeholder="G logo"
                style={{ display: "block", width: "56px", height: "56px" }}></image-slot>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 22 }}>Google</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>FULL-TIME · 4 YRS</div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div className="kicker">apr 2024 → present</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 18 }}>Site Reliability Engineer · L4</div>
            <div style={{ fontFamily: "var(--f-hand2)", fontSize: 15, color: "var(--ink-soft)", marginBottom: 8 }}>
              New York, NY · Hybrid
            </div>
            <div style={{ height: 6, borderTop: "1.5px dashed rgba(140,110,60,0.5)", marginBottom: 8 }}/>
            <div className="kicker">jun 2022 → apr 2024</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 18 }}>Site Reliability Engineer · L3</div>
            <p style={{ fontSize: 14, lineHeight: "21px", marginTop: 8 }}>
              SRE on <span className="hi">Bigtable</span>. Keep all the instances — internal
              + external — healthy. Tune the software, build monitoring/debugging, manage
              quota at scale.
            </p>
          </div>
        </MItem>

        {/* VMWARE BADGE */}
        <MItem rotate={1.6} pin pinColor="blue" w={310}>
          <div className="bizcard" style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <image-slot id="logo-vmware" shape="rect" placeholder="VMware logo"
                style={{ display: "block", width: "56px", height: "56px" }}></image-slot>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 22 }}>VMware</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>FULL-TIME · 11 MOS</div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div className="kicker">jul 2021 → may 2022</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 18 }}>Member of Technical Staff</div>
            <p style={{ fontSize: 14, lineHeight: "21px", marginTop: 8 }}>
              On the <span className="hi-pink">Workspace</span> team. Built a testing platform
              for devs to build, run, &amp; instantiate their own instances. First real
              taste of large-scale infra.
            </p>
          </div>
        </MItem>

        {/* GEORGIA TECH BADGE */}
        <MItem rotate={-1.6} pin pinColor="yellow" w={310}>
          <div className="bizcard" style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <image-slot id="logo-gt" shape="rect" placeholder="GT logo"
                style={{ display: "block", width: "56px", height: "56px" }}></image-slot>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 20, lineHeight: 1.05 }}>Georgia Tech</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>2016 — 2020</div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 18 }}>B.S. Computer Engineering</div>
            <p style={{ fontSize: 14, lineHeight: "21px", marginTop: 8 }}>
              Hardware <em>and</em> software. The dual-degree thing means I'll still write
              VHDL if you make me. Please don't.
            </p>
            <div style={{ marginTop: 8, fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--red)" }}>
              ✓ atlanta years
            </div>
          </div>
        </MItem>

        {/* SKILLS LEGAL PAD */}
        <MItem rotate={-1.4} tape tapeRot={-3} tapeWidth={100} w={300}>
          <div className="scrap-yellow">
            <div style={{ fontFamily: "var(--f-marker)", fontSize: 22, color: "var(--red)", marginBottom: 6 }}>
              the toolkit
            </div>
            <ul style={{ fontFamily: "var(--f-hand)", fontSize: 22, lineHeight: "28px", paddingLeft: 18, color: "#4a3a10" }}>
              <li>Go, Python, C++</li>
              <li>Bigtable internals</li>
              <li>distributed systems</li>
              <li>monitoring &amp; alerting</li>
              <li>quota &amp; capacity</li>
              <li>incident response</li>
            </ul>
          </div>
        </MItem>

        {/* SRE HAIKU STICKY */}
        <MItem rotate={3.2} pin pinColor="green" tight>
          <div className="sticky green">
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>SRE haiku</strong>
            <div style={{ height: 6 }}/>
            things break at 2 am.<br/>
            i fix them at 2:08.<br/>
            then i make coffee.
          </div>
        </MItem>

        {/* TIMELINE STRIP */}
        <MItem rotate={-2.2} pin pinColor="red" tight>
          <div className="scrap-white" style={{ padding: 16 }}>
            <p className="kicker">timeline</p>
            <div style={{ borderLeft: "2px solid var(--red)", paddingLeft: 12, fontFamily: "var(--f-body)" }}>
              {[
                ["2016", "GT, freshman"],
                ["2020", "graduated"],
                ["2021", "VMware"],
                ["2022", "Google L3"],
                ["2024", "Google L4"],
              ].map(([y, l], i) => (
                <div key={y} style={{ marginBottom: i < 4 ? 8 : 0 }}>
                  <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>{y}</div>
                  <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </MItem>

        {/* LINKEDIN ENVELOPE */}
        <MItem rotate={1.6} pin pinColor="blue" w={320}>
          <div className="envelope">
            <div style={{ height: 14 }}/>
            <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>
              FOR FURTHER REFERENCE →
            </div>
            <a href="https://www.linkedin.com/in/khoa-phan-38b281138/" target="_blank" rel="noopener"
               style={{ fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--red)",
                        textDecoration: "underline wavy var(--ink-soft)", textUnderlineOffset: 4,
                        wordBreak: "break-word" }}>
              linkedin.com/in/khoa-phan
            </a>
            <div style={{ fontFamily: "var(--f-hand2)", fontSize: 15, color: "var(--ink-soft)", marginTop: 6 }}>
              (or just text me, faster)
            </div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

/* ============================================================
   MUSIC
   ============================================================ */
function MMusicPage() {
  const mixtape = [
    { n: "A1", t: "Never Going Back Again", a: "Fleetwood Mac" },
    { n: "A2", t: "Harvest Moon",           a: "Neil Young" },
    { n: "A3", t: "I Will",                 a: "The Beatles" },
    { n: "A4", t: "Heart of Gold",          a: "Neil Young" },
    { n: "A5", t: "Something Stupid",       a: "Frank Sinatra" },
  ];
  return (
    <div className="page-enter">
      <MHeader kicker="on the turntable · spring '26"
               title="Now Playing"
               sub="“this season's theme: oldies”"/>

      <div className="m-stack">

        {/* MIXTAPE */}
        <MItem rotate={-3} pin pinColor="red" w={330}>
          <div style={{
            background: "#7b1f15", color: "#fbf4e0",
            padding: "18px 18px 18px",
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
          }}>
            <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.22em", color: "#fff066" }}>
              TDK · D90 · NORMAL BIAS
            </div>
            <div style={{ fontFamily: "var(--f-marker)", fontSize: 28, lineHeight: 1, marginTop: 8 }}>
              OLDIES <br/>SPRING ’26
            </div>
            <div style={{ borderTop: "2px dashed #fff066", margin: "12px 0 8px" }}/>
            <div style={{ display: "flex", justifyContent: "space-around", gap: 8, margin: "6px 0 12px" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%",
                background: "radial-gradient(circle, #fbf4e0 0%, #fbf4e0 18%, #7b1f15 22%, #fbf4e0 26%, #fbf4e0 38%, #7b1f15 42%)" }}/>
              <div style={{ width: 44, height: 44, borderRadius: "50%",
                background: "radial-gradient(circle, #fbf4e0 0%, #fbf4e0 18%, #7b1f15 22%, #fbf4e0 26%, #fbf4e0 38%, #7b1f15 42%)" }}/>
            </div>
            <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
              {mixtape.map((s, i) => (
                <li key={i} style={{
                  display: "flex", gap: 8,
                  fontFamily: "var(--f-hand)", fontSize: 20, lineHeight: "26px",
                  color: "#fbf4e0",
                  padding: "1px 0",
                  borderBottom: i < mixtape.length - 1 ? "1px dotted rgba(251,244,224,0.3)" : "none",
                }}>
                  <span style={{ color: "#fff066", width: 24 }}>{s.n}</span>
                  <span style={{ flex: 1 }}>
                    {s.t}{" "}
                    <span style={{ fontFamily: "var(--f-body)", fontSize: 13, color: "#e8d8a0", fontStyle: "italic" }}>
                      — {s.a}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div style={{ fontFamily: "var(--f-hand)", color: "#fff066", marginTop: 10,
                          transform: "rotate(-1deg)", fontSize: 18 }}>
              ★ do not tape over!! ★
            </div>
          </div>
        </MItem>

        <div className="m-anno">heavy rotation ↓</div>

        {/* TWO ALBUMS SIDE BY SIDE */}
        <div className="m-pair">
          <div style={{ position: "relative", transform: "rotate(-3deg)" }}>
            <span className="pin blue" style={{ top: 4, left: "50%", marginLeft: -10 }}/>
            <div className="polaroid" style={{ padding: "8px 8px 28px" }}>
              <image-slot id="album-macdemarco-2" shape="rect"
                placeholder="2 — mac demarco"
                style={{ display: "block", width: "100%", height: "140px" }}></image-slot>
              <div className="caption" style={{ fontSize: 16 }}>2 · DeMarco</div>
            </div>
          </div>
          <div style={{ position: "relative", transform: "rotate(2.6deg)" }}>
            <span className="pin green" style={{ top: 4, left: "50%", marginLeft: -10 }}/>
            <div className="polaroid" style={{ padding: "8px 8px 28px" }}>
              <image-slot id="album-hers" shape="rect"
                placeholder="invitation to her's"
                style={{ display: "block", width: "100%", height: "140px" }}></image-slot>
              <div className="caption" style={{ fontSize: 16 }}>Inv. to Her's</div>
            </div>
          </div>
        </div>

        {/* CONCERT TICKET — VAMPIRE WEEKEND */}
        <MItem rotate={-4} tape tapeColor="blue" tapeRot={4} tapeWidth={110} w={320}>
          <div className="ticket" style={{ width: "100%" }}>
            <div className="stub">ADMIT ONE · A12</div>
            <div className="type" style={{ fontSize: 10, color: "var(--red)" }}>CONCERT WISHLIST</div>
            <div className="name">VAMPIRE WEEKEND</div>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 18, color: "var(--ink)", marginTop: 4 }}>
              when they swing through town again
            </div>
            <div className="meta">DATE: TBD · VENUE: TBD · SEAT: ANY</div>
          </div>
        </MItem>

        {/* SECTION VIBE */}
        <MItem rotate={1.4} pin pinColor="yellow" w={320}>
          <div className="scrap-white" style={{ padding: 18 }}>
            <p className="kicker">this season's theme</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 26, color: "var(--red)" }}>
              oldies, no apologies
            </h3>
            <p>
              On a real <span className="hi">'70s soft-rock</span> kick. The mixtape is mostly
              fingerpicking, mostly heartbreak, mostly recorded before I was born. Plays well
              on long walks home from the train.
            </p>
            <p className="hand" style={{ color: "var(--ink-soft)", marginTop: 4, fontSize: 20 }}>
              if you have something in the same family — please send it.
            </p>
          </div>
        </MItem>

        {/* DEEP CUTS */}
        <MItem rotate={2.2} pin pinColor="white" w={320}>
          <div className="card" style={{ padding: 16 }}>
            <p className="kicker">deep cuts</p>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 20, lineHeight: "28px", color: "var(--ink)" }}>
              the songs i text people about <span style={{ color: "var(--red)" }}>at 11pm</span>:
            </div>
            <ul style={{ fontFamily: "var(--f-body)", fontSize: 15, lineHeight: "23px", paddingLeft: 18, marginTop: 4 }}>
              <li><strong>Harvest Moon</strong> on a 4th listen always wrecks me</li>
              <li><strong>I Will</strong> at 1:46 — best minute and forty-six seconds</li>
              <li>that breakdown in any <strong>Hers</strong> track. you know the one</li>
              <li><strong>Mac DeMarco</strong> for cleaning the kitchen, no exceptions</li>
            </ul>
          </div>
        </MItem>
      </div>
    </div>
  );
}

/* ============================================================
   SHOWS (Watching)
   ============================================================ */
function MShowsPage() {
  const shows = [
    { id: "show-jjba-sbr",      title: "JoJo · Steel Ball Run",  quote: "artistic, majestic, nail-biter", pin: "red",    rot: -2.6, kind: "anime" },
    { id: "show-jjk",           title: "Jujutsu Kaisen",         quote: "peak shounen, just amazing",     pin: "blue",   rot:  2.2, kind: "anime" },
    { id: "show-frieren",       title: "Frieren",                quote: "great writing, peaceful",        pin: "green",  rot: -1.6, kind: "anime" },
    { id: "show-marty-supreme", title: "Marty Supreme",          quote: "thrilling, an experience",       pin: "yellow", rot:  2.8, kind: "movie" },
  ];

  return (
    <div className="page-enter">
      <MHeader kicker="currently watching · staring at the screen"
               title="Now Watching"
               sub="“if you spoil this i'm not coming to your wedding”"/>

      <div className="m-stack">

        <div className="m-anno">anime — currently obsessed ↓</div>

        {shows.slice(0, 3).map(s => (
          <MItem key={s.id} rotate={s.rot} pin pinColor={s.pin} w={260}>
            <div className="polaroid" style={{ paddingBottom: 64 }}>
              <image-slot id={s.id} shape="rect" placeholder={s.title}
                style={{ display: "block", width: "100%", height: "320px" }}></image-slot>
              <div className="caption" style={{ fontSize: 20, bottom: 36 }}>{s.title}</div>
              <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 17, color: "var(--ink-soft)" }}>
                  “{s.quote}”
                </div>
              </div>
            </div>
          </MItem>
        ))}

        <div className="m-anno r">movie of the moment ↓</div>

        <MItem rotate={shows[3].rot} pin pinColor={shows[3].pin} w={260}>
          <div className="polaroid" style={{ paddingBottom: 64 }}>
            <image-slot id={shows[3].id} shape="rect" placeholder={shows[3].title}
              style={{ display: "block", width: "100%", height: "320px" }}></image-slot>
            <div className="caption" style={{ fontSize: 20, bottom: 36 }}>{shows[3].title}</div>
            <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--f-hand)", fontSize: 17, color: "var(--ink-soft)" }}>
                “{shows[3].quote}”
              </div>
            </div>
          </div>
        </MItem>

        {/* FIELD NOTES */}
        <MItem rotate={1.4} tape tapeColor="kraft" tapeRot={-3} tapeWidth={100} w={320}>
          <div className="scrap-white" style={{ padding: 18, minHeight: 200 }}>
            <p className="kicker">field notes · anime corner</p>
            <div style={{
              marginTop: 12,
              fontFamily: "var(--f-hand)", fontSize: 19, color: "var(--ink-faint)",
              fontStyle: "italic",
            }}>
              — to be filled in —
            </div>
          </div>
        </MItem>

        {/* MARTY SUPREME REVIEW */}
        <MItem rotate={-3.6} pin pinColor="red" tight>
          <div className="sticky pink">
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 20 }}>marty supreme</strong>
            <div style={{ height: 6 }}/>
            walked out of the theater<br/>
            still buzzing. one of those<br/>
            movies where you don't<br/>
            talk for a block, then<br/>
            won't shut up for a week.
          </div>
        </MItem>

        {/* CINEMA TICKET */}
        <MItem rotate={-2.4} tape tapeColor="pink" tapeRot={2} tapeWidth={90} w={280}>
          <div className="ticket" style={{ width: "100%", padding: "10px 14px 10px 78px", minWidth: 0 }}>
            <div className="stub">ADMIT ONE</div>
            <div className="type" style={{ fontSize: 9, color: "var(--red)" }}>NOW SHOWING</div>
            <div className="name" style={{ fontSize: 15, letterSpacing: "0.02em" }}>MARTY SUPREME</div>
            <div className="meta" style={{ fontSize: 9 }}>SAT · 7:30PM · ROW G</div>
          </div>
        </MItem>
      </div>
    </div>
  );
}

Object.assign(window, { MAboutPage, MResumePage, MMusicPage, MShowsPage, MHeader });

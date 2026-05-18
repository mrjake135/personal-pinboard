/* Pinboard pages — part A: About, Resume, Music, Shows
   Photos are first-class. Every visual is an <image-slot> the user fills in.
*/

/* ---------- helper: pinned image-slot wrapper ---------- */
function PhotoSlot({
  id, w = 220, h = 220, caption, frame = "polaroid", placeholder,
  bg = "#1a1a1a", glyph,
}) {
  // a polaroid wrapper containing an image-slot the user can drop into
  if (frame === "polaroid") {
    return (
      <div className="polaroid" style={{ width: w + 20, display: "inline-block" }}>
        <image-slot
          id={id}
          shape="rect"
          placeholder={placeholder || "drop photo"}
          style={{ display: "block", width: w + "px", height: h + "px" }}
        ></image-slot>
        {caption && <div className="caption">{caption}</div>}
      </div>
    );
  }
  // flush frame, no polaroid border
  return (
    <image-slot
      id={id}
      shape={frame === "circle" ? "circle" : "rect"}
      placeholder={placeholder || "drop photo"}
      style={{ display: "block", width: w + "px", height: h + "px" }}
    ></image-slot>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function AboutPage() {
  const timeline = [
    { id: "tl-moscow",  x: 60,   label: "moscow, russia",        sub: "born here · 1997",         pin: "red",    rot: -3.4 },
    { id: "tl-hcmc",    x: 290,  label: "ho chi minh city",      sub: "middle school",            pin: "blue",   rot: 2.2  },
    { id: "tl-concord", x: 520,  label: "concord, massachusetts",sub: "high school",              pin: "yellow", rot: -1.8 },
    { id: "tl-atl",     x: 750,  label: "atlanta, ga",           sub: "georgia tech · '16–'20",   pin: "green",  rot: 2.6  },
    { id: "tl-nyc",     x: 980,  label: "new york city",         sub: "now · brooklyn",           pin: "white",  rot: -2.4 },
  ];

  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>khoa's board · est. 2026</p>
          <h1 className="page-title">Khoa Phan</h1>
        </div>
        <div className="sub">"hi, this is my corner of the wall"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1280 }}>
        {/* HERO POLAROID */}
        <Pinned x={60} y={40} w={300} rotate={-3.2} z={3} pin pinColor="red" pinTop={6}>
          <PhotoSlot id="hero-photo" w={280} h={300} caption="me, allegedly" placeholder="hero photo of you"/>
        </Pinned>

        {/* INTRO INDEX CARD */}
        <Pinned x={420} y={60} w={420} rotate={1.4} z={2} tape tapeColor="kraft" tapeRot={-3} tapeWidth={120}>
          <div className="indexcard">
            <p className="kicker">about me</p>
            <h2 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 28, color: "var(--red)" }}>
              khoa phan
            </h2>
            <p>
              Born in <span className="hi">Moscow, Russia</span>. Middle school in Ho Chi
              Minh City, Vietnam. High school in Concord, Massachusetts. SRE at Google
              (NYC), keeping Bigtable happy for a lot of people who don't know it exists.
              Georgia Tech computer engineer.
            </p>
            <p>
              Self-taught fingerpicker, slow-but-improving runner, casual benching enjoyer.
              I love my cat <span className="hi-pink">Mochi</span> — could not be prouder
              of the cat he's become.
            </p>
          </div>
        </Pinned>

        {/* QUICK FACTS STICKY */}
        <Pinned x={880} y={80} w={220} rotate={4} z={2} pin pinColor="yellow" pinTop={6}>
          <div className="sticky orange" style={{ padding: "16px 16px 18px" }}>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18, letterSpacing: 1 }}>quick facts</strong>
            <div style={{ height: 6 }}/>
            ☕ 2 coffees, baseline<br/>
            🏃 5k pr: 28:00<br/>
            🎸 self-taught<br/>
            🐈 one cat, perfect<br/>
            📍 NYC<br/>
            🎓 GT '20
          </div>
        </Pinned>

        {/* TIMELINE LABEL */}
        <Annotation x={60} y={400} rotate={-2.4} color="#fbf4e0" text="the wandering years — in order →" w={420}/>

        {/* PHOTO TIMELINE — chronological */}
        {timeline.map((p, i) => (
          <Pinned key={p.id} x={p.x} y={470 + (i % 2) * 12} w={210}
                  rotate={p.rot} z={2} pin pinColor={p.pin} pinTop={6}>
            <PhotoSlot id={p.id} w={190} h={210} caption={p.label} placeholder={p.label}/>
            <div style={{
              position: "relative",
              marginTop: -14, marginLeft: 10, marginRight: 10,
              fontFamily: "var(--f-type)", fontSize: 10,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--ink-faint)", textAlign: "center",
            }}>
              {p.sub}
            </div>
          </Pinned>
        ))}

        {/* horizontal dashed thread along the timeline */}
        <div style={{
          position: "absolute", left: 100, right: 80,
          top: 540, height: 2,
          borderTop: "2px dashed rgba(251,244,224,0.45)",
          zIndex: 0,
        }}/>

        {/* FAVORITE THINGS NOW */}
        <Pinned x={60} y={870} w={500} rotate={-1.4} z={2} pin pinColor="green" pinTop={6}>
          <div className="scrap-white" style={{ padding: 22 }}>
            <p className="kicker">favorite things, right now</p>
            <ol style={{ paddingLeft: 22, margin: "6px 0 0",
                         fontFamily: "var(--f-hand)", fontSize: 24, lineHeight: "32px",
                         color: "var(--ink)" }}>
              <li>Weekly cookout</li>
              <li>Getting faster</li>
              <li>Getting <span style={{ fontFamily: "var(--f-marker)", color: "var(--red)" }}>STRONG!</span></li>
              <li>Jujutsu Kaisen</li>
              <li>Slay the Spire 2</li>
            </ol>
            <div style={{ marginTop: 14, textAlign: "right" }}>
              <span style={{ fontFamily: "var(--f-marker)", fontSize: 28, color: "var(--red)", display: "inline-block", transform: "rotate(-4deg)" }}>
                — khoa
              </span>
            </div>
          </div>
        </Pinned>

        {/* MOCHI MINI-CARD */}
        <Pinned x={600} y={880} w={300} rotate={2.6} z={2} pin pinColor="red" pinTop={6}>
          <div className="indexcard">
            <p className="kicker" style={{ color: "var(--red)" }}>resident of honor</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 30, color: "var(--ink)" }}>
              Mochi
            </h3>
            <p>
              Proudest dad on the block. He's grown into a real character —
              opinionated, affectionate, terrifyingly smart about the fridge.
            </p>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--ink-soft)", marginTop: 6 }}>
              ↗ full feature on the <strong style={{ color: "var(--red)" }}>cat</strong> tab.
            </div>
          </div>
        </Pinned>

        {/* MOCHI HEART STICKY */}
        <Pinned x={950} y={900} w={200} rotate={-4.4} z={2} pin pinColor="yellow" pinTop={6}>
          <div className="sticky pink" style={{ padding: "16px 16px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 36, lineHeight: 1 }}>♥</div>
            <div style={{ height: 4 }}/>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>mochi.</strong>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 20, marginTop: 4 }}>
              best boy.<br/>no notes.
            </div>
          </div>
        </Pinned>

        {/* doodle annotations */}
        <Annotation x={310} y={10} rotate={-10} color="#fbf4e0" text="← that's me" w={120}/>
        <div className="item" style={{ left: 280, top: 70, zIndex: 4, transform: "rotate(20deg)" }}>
          <Arrow w={80} h={50} color="#fbf4e0"/>
        </div>
        <div className="item" style={{ left: 1090, top: 50, zIndex: 4, transform: "rotate(15deg)" }}>
          <Star size={36} color="#fbf4e0"/>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   RESUME
   ============================================================ */
function ResumePage() {
  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>the permanent record</p>
          <h1 className="page-title">Résumé</h1>
        </div>
        <div className="sub">"the SRE life · NYC"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1200 }}>

        {/* GOOGLE BADGE */}
        <Pinned x={60} y={10} w={300} rotate={-2.6} z={3} pin pinColor="red" pinTop={6}>
          <div className="bizcard" style={{ width: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <PhotoSlot id="logo-google" w={56} h={56} frame="flush" placeholder="G logo"/>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 22 }}>Google</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>FULL-TIME · 4 YRS</div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div className="kicker">apr 2024 → present</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 19 }}>Site Reliability Engineer · L4</div>
            <div style={{ fontFamily: "var(--f-hand2)", fontSize: 16, color: "var(--ink-soft)", marginBottom: 8 }}>
              New York, NY · Hybrid
            </div>
            <div style={{ height: 6, borderTop: "1.5px dashed rgba(140,110,60,0.5)", marginBottom: 8 }}/>
            <div className="kicker">jun 2022 → apr 2024</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 19 }}>Site Reliability Engineer · L3</div>
            <p style={{ fontSize: 15, lineHeight: "22px", marginTop: 8 }}>
              SRE on <span className="hi">Bigtable</span>. Keep all the instances — internal
              + external — healthy. Tune the software, build monitoring/debugging, manage
              quota at scale.
            </p>
          </div>
        </Pinned>

        {/* VMWARE BADGE */}
        <Pinned x={420} y={50} w={300} rotate={1.8} z={2} pin pinColor="blue" pinTop={6}>
          <div className="bizcard" style={{ width: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <PhotoSlot id="logo-vmware" w={56} h={56} frame="flush" placeholder="VMware logo"/>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 22 }}>VMware</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>FULL-TIME · 11 MOS</div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div className="kicker">jul 2021 → may 2022</div>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 19 }}>Member of Technical Staff</div>
            <p style={{ fontSize: 15, lineHeight: "22px", marginTop: 8 }}>
              On the <span className="hi-pink">Workspace</span> team. Built a testing platform
              for devs to build, run, &amp; instantiate their own instances. First real
              taste of large-scale infra.
            </p>
          </div>
        </Pinned>

        {/* GEORGIA TECH BADGE */}
        <Pinned x={760} y={20} w={320} rotate={-1.6} z={2} pin pinColor="yellow" pinTop={6}>
          <div className="bizcard" style={{ width: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <PhotoSlot id="logo-gt" w={56} h={56} frame="flush" placeholder="GT logo"/>
              <div>
                <div style={{ fontFamily: "var(--f-print)", fontWeight: 900, fontSize: 20, lineHeight: 1.05 }}>Georgia Tech</div>
                <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>
                  2016 — 2020
                </div>
              </div>
            </div>
            <div style={{ height: 12 }}/>
            <div style={{ fontFamily: "var(--f-print)", fontWeight: 700, fontSize: 19 }}>B.S. Computer Engineering</div>
            <p style={{ fontSize: 15, lineHeight: "22px", marginTop: 8 }}>
              Hardware <em>and</em> software. The dual-degree thing means I'll still write
              VHDL if you make me. Please don't.
            </p>
            <div style={{ marginTop: 10, fontFamily: "var(--f-hand)", fontSize: 22, color: "var(--red)" }}>
              ✓ atlanta years
            </div>
          </div>
        </Pinned>

        {/* CAMPUS / OFFICE PHOTO */}
        <Pinned x={80} y={500} w={260} rotate={3.6} z={2} pin pinColor="white">
          <PhotoSlot id="photo-office" w={240} h={200} caption="bigtable on-call corner" placeholder="office / nyc"/>
        </Pinned>

        {/* SKILLS LEGAL PAD */}
        <Pinned x={380} y={510} w={300} rotate={-1.4} z={2} tape tapeColor="" tapeRot={-3} tapeWidth={90}>
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
              <li>hardware-software bridge</li>
            </ul>
          </div>
        </Pinned>

        {/* SRE QUIP STICKY */}
        <Pinned x={720} y={490} w={240} rotate={3.4} z={2} pin pinColor="green" pinTop={6}>
          <div className="sticky green" style={{ padding: "16px 16px 18px" }}>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 18 }}>SRE haiku</strong>
            <div style={{ height: 6 }}/>
            things break at 2 am.<br/>
            i fix them at 2:08.<br/>
            then i make coffee.
          </div>
        </Pinned>

        {/* TIMELINE STRIP */}
        <Pinned x={1000} y={510} w={200} rotate={-2.6} z={2} pin pinColor="red">
          <div className="scrap-white" style={{ padding: "16px 16px 18px" }}>
            <p className="kicker">timeline</p>
            <div style={{ borderLeft: "2px solid var(--red)", paddingLeft: 12, fontFamily: "var(--f-body)", fontSize: 14 }}>
              <div style={{ marginBottom: 8 }}>
                <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>2016</div>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>GT, freshman</div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>2020</div>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>graduated</div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>2021</div>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>VMware</div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>2022</div>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>Google L3</div>
              </div>
              <div>
                <div className="type" style={{ color: "var(--red)", fontSize: 11 }}>2024</div>
                <div style={{ fontFamily: "var(--f-hand)", fontSize: 18 }}>Google L4</div>
              </div>
            </div>
          </div>
        </Pinned>

        {/* LINKEDIN ENVELOPE */}
        <Pinned x={140} y={830} w={420} rotate={1.6} z={2} pin pinColor="blue">
          <div className="envelope">
            <div style={{ height: 14 }}/>
            <div style={{ fontFamily: "var(--f-type)", fontSize: 11, letterSpacing: "0.2em", color: "var(--ink-faint)" }}>
              FOR FURTHER REFERENCE →
            </div>
            <a href="https://www.linkedin.com/in/khoa-phan-38b281138/" target="_blank" rel="noopener"
               style={{ fontFamily: "var(--f-hand)", fontSize: 26, color: "var(--red)", textDecoration: "underline wavy var(--ink-soft)", textUnderlineOffset: 4 }}>
              linkedin.com/in/khoa-phan
            </a>
            <div style={{ fontFamily: "var(--f-hand2)", fontSize: 16, color: "var(--ink-soft)", marginTop: 8 }}>
              (or just text me, faster)
            </div>
          </div>
        </Pinned>

        {/* doodles */}
        <div className="item" style={{ left: 380, top: -5, zIndex: 4, transform: "rotate(-12deg)" }}>
          <Arrow w={90} h={60} color="#fbf4e0"/>
        </div>
        <div className="item" style={{ left: 730, top: 0, zIndex: 4, transform: "rotate(8deg)" }}>
          <Arrow w={80} h={50} color="#fbf4e0"/>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MUSIC
   ============================================================ */
function MusicPage() {
  const mixtape = [
    { n: "A1", t: "Never Going Back Again", a: "Fleetwood Mac" },
    { n: "A2", t: "Harvest Moon",           a: "Neil Young" },
    { n: "A3", t: "I Will",                 a: "The Beatles" },
    { n: "A4", t: "Heart of Gold",          a: "Neil Young" },
    { n: "A5", t: "Something Stupid",       a: "Frank Sinatra" },
  ];

  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>on the turntable · spring '26</p>
          <h1 className="page-title">Now Playing</h1>
        </div>
        <div className="sub">"this season's theme: oldies"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1250 }}>

        {/* MIXTAPE CASSETTE */}
        <Pinned x={60} y={0} w={340} rotate={-3.4} z={3} pin pinColor="red" pinTop={6}>
          <div style={{
            background: "#7b1f15",
            color: "#fbf4e0",
            padding: "22px 22px 22px",
            position: "relative",
            boxShadow: "0 14px 24px -10px rgba(0,0,0,0.5)",
            width: 340,
          }}>
            <div style={{ fontFamily: "var(--f-type)", fontSize: 10, letterSpacing: "0.22em", color: "#fff066" }}>
              TDK · D90 · NORMAL BIAS
            </div>
            <div style={{ fontFamily: "var(--f-marker)", fontSize: 32, lineHeight: 1, marginTop: 8 }}>
              OLDIES <br/>SPRING ’26
            </div>
            <div style={{ borderTop: "2px dashed #fff066", margin: "14px 0 10px" }}/>
            <div style={{ display: "flex", justifyContent: "space-around", gap: 8, margin: "8px 0 14px" }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "radial-gradient(circle, #fbf4e0 0%, #fbf4e0 18%, #7b1f15 22%, #fbf4e0 26%, #fbf4e0 38%, #7b1f15 42%)" }}/>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "radial-gradient(circle, #fbf4e0 0%, #fbf4e0 18%, #7b1f15 22%, #fbf4e0 26%, #fbf4e0 38%, #7b1f15 42%)" }}/>
            </div>
            <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
              {mixtape.map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontFamily: "var(--f-hand)", fontSize: 22, lineHeight: "28px", color: "#fbf4e0", padding: "1px 0", borderBottom: i < mixtape.length - 1 ? "1px dotted rgba(251,244,224,0.3)" : "none" }}>
                  <span style={{ color: "#fff066", width: 26 }}>{s.n}</span>
                  <span style={{ flex: 1 }}>
                    {s.t}{" "}
                    <span style={{ fontFamily: "var(--f-body)", fontSize: 15, color: "#e8d8a0", fontStyle: "italic" }}>
                      — {s.a}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <div style={{ fontFamily: "var(--f-hand)", color: "#fff066", marginTop: 12, transform: "rotate(-1deg)", fontSize: 20 }}>
              ★ do not tape over!! ★
            </div>
          </div>
        </Pinned>

        {/* ALBUMS IN HEAVY ROTATION */}
        <Pinned x={460} y={20} w={220} rotate={2.4} z={2} pin pinColor="blue">
          <PhotoSlot id="album-macdemarco-2" w={200} h={200} caption="2 · Mac DeMarco" placeholder="album cover: '2'"/>
        </Pinned>

        <Pinned x={720} y={50} w={220} rotate={-2.8} z={2} pin pinColor="green">
          <PhotoSlot id="album-hers" w={200} h={200} caption="Invitation to Her's" placeholder="album cover: hers"/>
        </Pinned>

        {/* "heavy rotation" label */}
        <Annotation x={500} y={-20} rotate={-3} color="#fbf4e0" text="heavy rotation →" w={260}/>

        {/* CONCERT TICKET — VAMPIRE WEEKEND */}
        <Pinned x={960} y={50} w={300} rotate={-4.4} z={2} tape tapeColor="blue" tapeRot={4} tapeWidth={120}>
          <div className="ticket" style={{ width: 300 }}>
            <div className="stub">ADMIT ONE · A12</div>
            <div className="type" style={{ fontSize: 10, color: "var(--red)" }}>CONCERT WISHLIST</div>
            <div className="name">VAMPIRE WEEKEND</div>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink)", marginTop: 4 }}>
              when they swing through town again
            </div>
            <div className="meta">DATE: TBD · VENUE: TBD · SEAT: ANY</div>
          </div>
        </Pinned>

        {/* SECTION SCRAP — vibe */}
        <Pinned x={80} y={680} w={460} rotate={1.4} z={2} pin pinColor="yellow">
          <div className="scrap-white" style={{ padding: 18 }}>
            <p className="kicker">this season's theme</p>
            <h3 className="section-h" style={{ fontFamily: "var(--f-marker)", fontSize: 30, color: "var(--red)" }}>
              oldies, no apologies
            </h3>
            <p>
              On a real <span className="hi">'70s soft-rock</span> kick. The mixtape is mostly
              fingerpicking, mostly heartbreak, mostly recorded before I was born. Plays well
              on long walks home from the train.
            </p>
            <p className="hand" style={{ color: "var(--ink-soft)", marginTop: 6 }}>
              if you have something in the same family — please send it.
            </p>
          </div>
        </Pinned>

        {/* PHOTOSTRIP — live shows */}
        {/* (removed — not playing gigs right now) */}

        {/* MORE ALBUMS / BIG PHOTO */}
        <Pinned x={760} y={680} w={420} rotate={2.2} z={2} pin pinColor="white">
          <div className="card" style={{ width: 420, padding: 18 }}>
            <p className="kicker">deep cuts</p>
            <div style={{ fontFamily: "var(--f-hand)", fontSize: 22, lineHeight: "30px", color: "var(--ink)" }}>
              the songs i text people about <span style={{ color: "var(--red)" }}>at 11pm</span>:
            </div>
            <ul style={{ fontFamily: "var(--f-body)", fontSize: 16, lineHeight: "25px", paddingLeft: 18, marginTop: 4 }}>
              <li><strong>Harvest Moon</strong> on a 4th listen always wrecks me</li>
              <li><strong>I Will</strong> at 1:46 — best minute and forty-six seconds</li>
              <li>that breakdown in any <strong>Hers</strong> track. you know the one</li>
              <li><strong>Mac DeMarco</strong> for cleaning the kitchen, no exceptions</li>
            </ul>
          </div>
        </Pinned>

        <div className="item" style={{ left: 940, top: 30, zIndex: 4, transform: "rotate(-12deg)" }}>
          <Star size={28} color="#fbf4e0"/>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SHOWS
   ============================================================ */
function ShowsPage() {
  return (
    <div className="page-enter">
      <div className="board-header">
        <div>
          <p className="kicker" style={{ color: "#fbf4e0aa" }}>currently watching · staring at the screen</p>
          <h1 className="page-title">Now Watching</h1>
        </div>
        <div className="sub">"if you spoil this i'm not coming to your wedding"</div>
      </div>

      <div className="canvas" style={{ minHeight: 1280 }}>

        {/* JJBA SBR — feature poster */}
        <Pinned x={40} y={50} w={260} rotate={-3} z={3} pin pinColor="red">
          <div className="polaroid" style={{ width: 280, paddingBottom: 86 }}>
            <image-slot id="show-jjba-sbr" shape="rect" placeholder="JJBA Steel Ball Run poster"
              style={{ display: "block", width: "260px", height: "360px" }}></image-slot>
            <div className="caption" style={{ fontSize: 22, bottom: 50 }}>
              JoJo · Steel Ball Run
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--f-hand)", fontSize: 19, color: "var(--ink-soft)" }}>
                "artistic, majestic, nail-biter"
              </div>
            </div>
          </div>
        </Pinned>

        {/* JJK */}
        <Pinned x={330} y={80} w={240} rotate={2.6} z={2} pin pinColor="blue">
          <div className="polaroid" style={{ width: 260, paddingBottom: 86 }}>
            <image-slot id="show-jjk" shape="rect" placeholder="Jujutsu Kaisen poster"
              style={{ display: "block", width: "240px", height: "330px" }}></image-slot>
            <div className="caption" style={{ fontSize: 22, bottom: 50 }}>
              Jujutsu Kaisen
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--f-hand)", fontSize: 19, color: "var(--ink-soft)" }}>
                "peak shounen, just amazing"
              </div>
            </div>
          </div>
        </Pinned>

        {/* FRIEREN */}
        <Pinned x={600} y={60} w={240} rotate={-2} z={2} pin pinColor="green">
          <div className="polaroid" style={{ width: 260, paddingBottom: 86 }}>
            <image-slot id="show-frieren" shape="rect" placeholder="Frieren poster"
              style={{ display: "block", width: "240px", height: "330px" }}></image-slot>
            <div className="caption" style={{ fontSize: 22, bottom: 50 }}>
              Frieren
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--f-hand)", fontSize: 19, color: "var(--ink-soft)" }}>
                "great writing, peaceful"
              </div>
            </div>
          </div>
        </Pinned>

        {/* MARTY SUPREME — bigger feature, ticket-stub style */}
        <Pinned x={870} y={80} w={230} rotate={3.4} z={2} pin pinColor="yellow">
          <div className="polaroid" style={{ width: 240, paddingBottom: 86 }}>
            <image-slot id="show-marty-supreme" shape="rect" placeholder="Marty Supreme still"
              style={{ display: "block", width: "220px", height: "310px" }}></image-slot>
            <div className="caption" style={{ fontSize: 22, bottom: 50 }}>
              Marty Supreme
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--f-hand)", fontSize: 18, color: "var(--ink-soft)" }}>
                "thrilling, an experience"
              </div>
            </div>
          </div>
        </Pinned>

        {/* category labels */}
        <Annotation x={60} y={20} rotate={-4} color="#fbf4e0" text="anime — currently obsessed" w={260}/>
        <Annotation x={880} y={20} rotate={4} color="#fbf4e0" text="movie of the moment" w={220}/>

        {/* COMMENTARY ROW */}
        <Pinned x={70} y={640} w={420} rotate={1.4} z={2} tape tapeColor="kraft" tapeRot={-3} tapeWidth={100}>
          <div className="scrap-white" style={{ padding: 18, minHeight: 220 }}>
            <p className="kicker">field notes · anime corner</p>
            <div style={{
              marginTop: 14,
              fontFamily: "var(--f-hand)", fontSize: 20, color: "var(--ink-faint)",
              fontStyle: "italic",
            }}>
              — to be filled in —
            </div>
          </div>
        </Pinned>

        {/* MARTY SUPREME REVIEW STICKY */}
        <Pinned x={520} y={640} w={260} rotate={-3.6} z={2} pin pinColor="red" pinTop={6}>
          <div className="sticky pink" style={{ padding: "16px 16px 18px" }}>
            <strong style={{ fontFamily: "var(--f-marker)", fontSize: 20 }}>marty supreme</strong>
            <div style={{ height: 8 }}/>
            walked out of the theater
            <br/>
            still buzzing. one of those
            <br/>
            movies where you don't
            <br/>
            talk for a block, then
            <br/>
            won't shut up for a week.
          </div>
        </Pinned>

        {/* (queue removed) */}

        {/* WATCHED CINEMA TICKETS — small */}
        <Pinned x={80} y={1010} w={260} rotate={-2.8} z={2} tape tapeColor="pink" tapeRot={2} tapeWidth={90}>
          <div className="ticket" style={{ width: 260, padding: "10px 14px 10px 78px", minWidth: 0 }}>
            <div className="stub">ADMIT ONE</div>
            <div className="type" style={{ fontSize: 9, color: "var(--red)" }}>NOW SHOWING</div>
            <div className="name" style={{ fontSize: 15, letterSpacing: "0.02em" }}>MARTY SUPREME</div>
            <div className="meta" style={{ fontSize: 9 }}>SAT · 7:30PM · ROW G</div>
          </div>
        </Pinned>

        {/* big star + arrow */}
        <div className="item" style={{ left: 720, top: 660, zIndex: 4, transform: "rotate(15deg)" }}>
          <Star size={36} color="#fbf4e0"/>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage, ResumePage, MusicPage, ShowsPage, PhotoSlot });

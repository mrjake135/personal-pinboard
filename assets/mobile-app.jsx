/* Mobile pinboard — router + horizontally-scrollable tab strip + tweaks. */

const M_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "corkTone": "natural",
  "accent": "red",
  "titleFont": "marker"
}/*EDITMODE-END*/;

const M_TABS = [
  { id: "about",   label: "ABOUT",   Page: () => window.MAboutPage()   },
  { id: "resume",  label: "RÉSUMÉ",  Page: () => window.MResumePage()  },
  { id: "music",   label: "MUSIC",   Page: () => window.MMusicPage()   },
  { id: "shows",   label: "WATCH",   Page: () => window.MShowsPage()   },
  { id: "hobbies", label: "HOBBIES", Page: () => window.MHobbiesPage() },
  { id: "cat",     label: "CAT",     Page: () => window.MCatPage()     },
  { id: "alltime", label: "FAVES",   Page: () => window.MAllTimePage() },
  { id: "hangout", label: "HANG",    Page: () => window.MHangoutPage() },
];

const M_CORK_PRESETS = {
  natural: { "--cork-base": "#b8884a", "--cork-dark": "#7e5a24", "--cork-light": "#d4a868", "--cork-shadow": "#4f3614" },
  warm:    { "--cork-base": "#c79b62", "--cork-dark": "#8a6231", "--cork-light": "#e2b87a", "--cork-shadow": "#5a3d18" },
  light:   { "--cork-base": "#d8b582", "--cork-dark": "#a07a44", "--cork-light": "#ecd3a8", "--cork-shadow": "#7a5424" },
  pale:    { "--cork-base": "#e8cda0", "--cork-dark": "#b89460", "--cork-light": "#f4dfb8", "--cork-shadow": "#8a6634" },
  dark:    { "--cork-base": "#a06a32", "--cork-dark": "#664016", "--cork-light": "#c2884a", "--cork-shadow": "#3a230a" },
};

const M_ACCENT_PRESETS = {
  red:    { "--red": "#c0392b", "--twine": "#b03a3a" },
  navy:   { "--red": "#284a7a", "--twine": "#284a7a" },
  forest: { "--red": "#3a6a3e", "--twine": "#3a6a3e" },
  rust:   { "--red": "#a04a20", "--twine": "#a04a20" },
};

const M_TITLE_FONT_PRESETS = {
  marker:    { "--f-marker": "'Permanent Marker', 'Marker Felt', cursive" },
  caveat:    { "--f-marker": "'Caveat', 'Bradley Hand', cursive" },
  typewriter:{ "--f-marker": "'Special Elite', 'Courier New', monospace" },
  serif:     { "--f-marker": "'Playfair Display', 'Georgia', serif" },
  kalam:     { "--f-marker": "'Kalam', 'Comic Sans MS', cursive" },
};

/* ---- Mobile-flavoured Pinned wrapper: vertical stack, no x/y. ---- */
function MItem({ rotate = 0, w, pin, pinColor = "red", pinTop = 4,
                 tape, tapeColor, tapeRot = -4, tapeWidth = 80,
                 wide, tight, style, children }) {
  return (
    <div className={`m-item${wide ? " wide" : ""}${tight ? " tight" : ""}`}
         style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined,
                  maxWidth: w || undefined, ...style }}>
      {tape && (
        <span className={`tape ${tapeColor || ""}`} style={{
          top: -6, left: "50%",
          width: tapeWidth, height: 18,
          marginLeft: -tapeWidth/2,
          transform: `rotate(${tapeRot}deg)`,
          position: "absolute",
          zIndex: 6,
        }} aria-hidden="true"/>
      )}
      {pin && (
        <span className={`pin ${pinColor}`} style={{
          top: pinTop, left: "50%", marginLeft: -10,
        }} aria-hidden="true"/>
      )}
      {children}
    </div>
  );
}

/* ---- The app shell ---- */
function MApp() {
  const [tabId, setTabId] = React.useState(() => {
    const fromHash = window.location.hash.replace("#", "");
    return M_TABS.find(t => t.id === fromHash) ? fromHash : "about";
  });
  const [t, setTweak] = useTweaks(M_TWEAK_DEFAULTS);
  const tabsRef = React.useRef(null);

  React.useEffect(() => { window.location.hash = tabId; }, [tabId]);

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (M_TABS.find(t => t.id === h) && h !== tabId) setTabId(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tabId]);

  React.useEffect(() => {
    const cork   = M_CORK_PRESETS[t.corkTone] || M_CORK_PRESETS.warm;
    const accent = M_ACCENT_PRESETS[t.accent] || M_ACCENT_PRESETS.red;
    const titleFont = M_TITLE_FONT_PRESETS[t.titleFont] || M_TITLE_FONT_PRESETS.marker;
    const root = document.documentElement;
    Object.entries(cork).forEach(([k, v]) => root.style.setProperty(k, v));
    Object.entries(accent).forEach(([k, v]) => root.style.setProperty(k, v));
    Object.entries(titleFont).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [t.corkTone, t.accent, t.titleFont]);

  // when tab changes, scroll page back to top and bring selected tab into view
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    const el = tabsRef.current?.querySelector(`.m-tab[data-id="${tabId}"]`);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [tabId]);

  const current = M_TABS.find(x => x.id === tabId) || M_TABS[0];
  const idx = M_TABS.findIndex(x => x.id === tabId);
  const Page = current.Page;

  return (
    <React.Fragment>
      <div className="m-board"
           data-screen-label={`${String(idx + 1).padStart(2,"0")} ${current.label}`}>
        <div className="m-tabs-wrap">
          <nav className="m-tabs" ref={tabsRef}>
            {M_TABS.map(tab => (
              <button key={tab.id}
                data-id={tab.id}
                className={`m-tab ${tab.id === tabId ? "active" : ""}`}
                onClick={() => setTabId(tab.id)}>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <section key={tabId}>
          <Page/>
        </section>

        <div className="m-foot">
          khoa's board · mobile<br/>
          <a href="index.html?desktop=1">view full pinboard →</a>
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Cork">
          <TweakSelect label="Cork tone" value={t.corkTone}
            onChange={v => setTweak("corkTone", v)}
            options={[
              { value: "natural", label: "Medium (default)" },
              { value: "warm",    label: "Warm honey" },
              { value: "light",   label: "Light" },
              { value: "pale",    label: "Pale beach" },
              { value: "dark",    label: "Dark walnut" },
            ]}/>
        </TweakSection>

        <TweakSection label="Accent">
          <TweakSelect label="Accent color" value={t.accent}
            onChange={v => setTweak("accent", v)}
            options={[
              { value: "red",    label: "Classic red" },
              { value: "navy",   label: "Navy" },
              { value: "forest", label: "Forest" },
              { value: "rust",   label: "Rust" },
            ]}/>
        </TweakSection>

        <TweakSection label="Title font">
          <TweakSelect label="Headline style" value={t.titleFont}
            onChange={v => setTweak("titleFont", v)}
            options={[
              { value: "marker",     label: "Permanent Marker (default)" },
              { value: "caveat",     label: "Caveat — loose handwriting" },
              { value: "kalam",      label: "Kalam — friendly print" },
              { value: "typewriter", label: "Special Elite — typewriter" },
              { value: "serif",      label: "Playfair Display — serif" },
            ]}/>
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

window.MItem = MItem;
ReactDOM.createRoot(document.getElementById("root")).render(<MApp />);

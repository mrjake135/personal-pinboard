/* Main app: tab router + tweaks. Pinboard edition. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "corkTone": "natural",
  "accent": "red",
  "titleFont": "marker"
}/*EDITMODE-END*/;

const TABS = [
  { id: "about",   label: "ABOUT",    Page: window.AboutPage },
  { id: "resume",  label: "RÉSUMÉ",   Page: window.ResumePage },
  { id: "music",   label: "MUSIC",    Page: window.MusicPage },
  { id: "shows",   label: "WATCHING", Page: window.ShowsPage },
  { id: "hobbies", label: "HOBBIES",  Page: window.HobbiesPage },
  { id: "cat",     label: "CAT",      Page: window.CatPage },
  { id: "alltime", label: "ALL-TIME", Page: window.AllTimePage },
  { id: "hangout", label: "HANG OUT", Page: window.HangoutPage },
];

const CORK_PRESETS = {
  natural: { "--cork-base": "#b8884a", "--cork-dark": "#7e5a24", "--cork-light": "#d4a868", "--cork-shadow": "#4f3614" },
  warm:    { "--cork-base": "#c79b62", "--cork-dark": "#8a6231", "--cork-light": "#e2b87a", "--cork-shadow": "#5a3d18" },
  light:   { "--cork-base": "#d8b582", "--cork-dark": "#a07a44", "--cork-light": "#ecd3a8", "--cork-shadow": "#7a5424" },
  pale:    { "--cork-base": "#e8cda0", "--cork-dark": "#b89460", "--cork-light": "#f4dfb8", "--cork-shadow": "#8a6634" },
  dark:    { "--cork-base": "#a06a32", "--cork-dark": "#664016", "--cork-light": "#c2884a", "--cork-shadow": "#3a230a" },
};

const ACCENT_PRESETS = {
  red:    { "--red": "#c0392b", "--twine": "#b03a3a" },
  navy:   { "--red": "#284a7a", "--twine": "#284a7a" },
  forest: { "--red": "#3a6a3e", "--twine": "#3a6a3e" },
  rust:   { "--red": "#a04a20", "--twine": "#a04a20" },
};

/* Title-font presets swap the marker font used in page titles, big numbers,
   and section headings. The rest of the typographic stack stays put. */
const TITLE_FONT_PRESETS = {
  marker:    { "--f-marker": "'Permanent Marker', 'Marker Felt', cursive" },
  caveat:    { "--f-marker": "'Caveat', 'Bradley Hand', cursive" },
  typewriter:{ "--f-marker": "'Special Elite', 'Courier New', monospace" },
  serif:     { "--f-marker": "'Playfair Display', 'Georgia', serif" },
  kalam:     { "--f-marker": "'Kalam', 'Comic Sans MS', cursive" },
};

function App() {
  const [tabId, setTabId] = React.useState(() => {
    const fromHash = window.location.hash.replace("#", "");
    return TABS.find(t => t.id === fromHash) ? fromHash : "about";
  });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { window.location.hash = tabId; }, [tabId]);

  // listen for hashchange so back/forward + shared URLs work
  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (TABS.find(t => t.id === h) && h !== tabId) setTabId(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tabId]);

  React.useEffect(() => {
    const cork   = CORK_PRESETS[t.corkTone] || CORK_PRESETS.warm;
    const accent = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS.red;
    const titleFont = TITLE_FONT_PRESETS[t.titleFont] || TITLE_FONT_PRESETS.marker;
    const root = document.documentElement;
    Object.entries(cork).forEach(([k, v]) => root.style.setProperty(k, v));
    Object.entries(accent).forEach(([k, v]) => root.style.setProperty(k, v));
    Object.entries(titleFont).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [t.corkTone, t.accent, t.titleFont]);

  const current = TABS.find(x => x.id === tabId) || TABS[0];
  const Page = current.Page;
  const idx = TABS.findIndex(x => x.id === tabId);

  return (
    <React.Fragment>
      <nav className="tabs">
        {TABS.map(tab => (
          <button key={tab.id}
            className={`tab ${tab.id === tabId ? "active" : ""}`}
            onClick={() => setTabId(tab.id)}>
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="board"
               data-screen-label={`${String(idx + 1).padStart(2,"0")} ${current.label}`}>
        <Page key={tabId}/>
      </section>

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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

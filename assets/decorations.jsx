/* Pinboard primitives: Pin, Tape, Pinned wrapper, doodle SVGs */

function Pin({ color = "red", top = 8, left = "50%", style, marginLeft = -10 }) {
  return (
    <span className={`pin ${color}`} style={{ top, left, marginLeft, ...style }} aria-hidden="true"/>
  );
}

function Tape({ top, left, width = 60, height = 18, rotate = 0, color, style }) {
  return (
    <span className={`tape ${color || ""}`} style={{
      top, left, width, height,
      transform: `rotate(${rotate}deg)`,
      ...style,
    }} aria-hidden="true"/>
  );
}

/* Wraps any card with a pin or tape, absolute-positioned on a .canvas */
function Pinned({
  x, y, w, rotate = 0, z = 1,
  pin, pinColor = "red", pinTop = 4, pinLeft = "50%",
  tape, tapeColor, tapeTop = -6, tapeLeft = "50%", tapeRot = -4, tapeWidth = 70,
  children, style, ...rest
}) {
  return (
    <div className="item" style={{
      left: x, top: y, width: w,
      transform: `rotate(${rotate}deg)`,
      zIndex: z,
      ...style,
    }} {...rest}>
      {tape && (
        <Tape top={tapeTop} left={tapeLeft} rotate={tapeRot} width={tapeWidth} color={tapeColor}
              style={{ marginLeft: -tapeWidth/2 }}/>
      )}
      {pin && (
        <Pin color={pinColor} top={pinTop} left={pinLeft}/>
      )}
      {children}
    </div>
  );
}

/* Photo polaroid with an image source OR a placeholder color/glyph */
function Photo({ src, caption, w = 200, h = 200, bg = "#2a2a2a", glyph, glyphColor = "#fbf4e0" }) {
  return (
    <div className="polaroid" style={{ width: w + 20 }}>
      <div className="img" style={{
        width: w, height: h,
        background: src ? `center/cover no-repeat url(${src})` : bg,
      }}>
        {!src && glyph && (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: glyphColor, fontFamily: "var(--f-marker)",
            fontSize: Math.min(w, h) * 0.5,
            letterSpacing: 0.04 + "em",
          }}>
            {glyph}
          </div>
        )}
      </div>
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
}

/* Drawn doodles, small */
const Star = ({ size = 26, color = "currentColor", style }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={style} fill="none"
       stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4 L19 13 L29 14 L21 20 L24 29 L16 24 L8 29 L11 20 L3 14 L13 13 Z" />
  </svg>
);

const Heart = ({ size = 24, color = "currentColor", style }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={style} fill="none"
       stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 27 C4 18 4 8 11 8 c3 0 4 2 5 4 c1-2 2-4 5-4 c7 0 7 10 -5 19 z" />
  </svg>
);

const Arrow = ({ w = 110, h = 70, color = "currentColor", style, flip }) => (
  <svg width={w} height={h} viewBox="0 0 110 70" style={style} fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       transform={flip ? "scale(-1,1)" : ""}>
    <path d="M4 10 C 30 0, 70 0, 96 30 C 100 36, 100 46, 92 56" />
    <path d="M84 50 L92 58 L98 48" />
  </svg>
);

const Squiggle = ({ w = 140, h = 12, color = "currentColor", style }) => (
  <svg width={w} height={h} viewBox="0 0 140 12" style={style} fill="none"
       stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <path d="M2 6 q 8 -6 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0" />
  </svg>
);

const Smiley = ({ size = 32, color = "currentColor", style }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={style} fill="none"
       stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="20" r="14" />
    <circle cx="15" cy="17" r="1.6" fill={color} stroke="none"/>
    <circle cx="25" cy="17" r="1.6" fill={color} stroke="none"/>
    <path d="M13 24 q7 6 14 0" />
  </svg>
);

const Cassette = ({ w = 120, h = 76, color = "currentColor", style }) => (
  <svg width={w} height={h} viewBox="0 0 130 80" style={style} fill="none"
       stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="122" height="68" rx="6"/>
    <rect x="14" y="18" width="102" height="32" rx="2"/>
    <circle cx="42" cy="34" r="6"/><circle cx="88" cy="34" r="6"/>
    <path d="M14 60 H116"/>
  </svg>
);

const Guitar = ({ w = 120, h = 200, color = "currentColor", style }) => (
  <svg width={w} height={h} viewBox="0 0 120 220" style={style} fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* headstock */}
    <rect x="50" y="8" width="20" height="30" rx="2"/>
    <circle cx="48" cy="14" r="2.5"/><circle cx="48" cy="22" r="2.5"/><circle cx="48" cy="30" r="2.5"/>
    <circle cx="72" cy="14" r="2.5"/><circle cx="72" cy="22" r="2.5"/><circle cx="72" cy="30" r="2.5"/>
    {/* nut */}
    <rect x="48" y="38" width="24" height="3"/>
    {/* neck */}
    <rect x="52" y="41" width="16" height="80"/>
    {/* frets */}
    <path d="M52 55 H68 M52 70 H68 M52 85 H68 M52 100 H68 M52 115 H68"/>
    {/* body */}
    <path d="M30 130 Q60 110 90 130 Q108 150 100 180 Q90 215 60 215 Q30 215 20 180 Q12 150 30 130 Z"/>
    {/* sound hole */}
    <circle cx="60" cy="165" r="14"/>
    {/* bridge */}
    <rect x="52" y="188" width="16" height="4"/>
  </svg>
);

const RunningShoe = ({ w = 110, h = 60, color = "currentColor", style }) => (
  <svg width={w} height={h} viewBox="0 0 110 60" style={style} fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 44 Q10 36 22 34 L42 28 Q52 24 60 18 Q70 12 80 16 Q98 22 102 38 Q104 48 96 50 L14 50 Q6 50 6 44 Z"/>
    <path d="M30 30 L34 22 M44 26 L48 18 M58 22 L62 14"/>
    <path d="M14 50 Q18 56 26 56 H92 Q100 56 102 50"/>
  </svg>
);

const Dumbbell = ({ w = 110, h = 50, color = "currentColor", style }) => (
  <svg width={w} height={h} viewBox="0 0 120 50" style={style} fill="none"
       stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2"   y="6"  width="14" height="38" rx="2"/>
    <rect x="16"  y="14" width="8"  height="22" rx="1"/>
    <rect x="24"  y="22" width="72" height="6"/>
    <rect x="96"  y="14" width="8"  height="22" rx="1"/>
    <rect x="104" y="6"  width="14" height="38" rx="2"/>
  </svg>
);

/* Pencil-drawn arrow with hand-written label */
function Annotation({ x, y, rotate = 0, color = "var(--red)", text, arrow = "right", w = 110 }) {
  return (
    <div className="item" style={{ left: x, top: y, transform: `rotate(${rotate}deg)`, zIndex: 5 }}>
      <span className="hand" style={{ color, display: "inline-block", maxWidth: w, lineHeight: 1.1 }}>
        {text}
      </span>
    </div>
  );
}

Object.assign(window, {
  Pin, Tape, Pinned, Photo, Annotation,
  Star, Heart, Arrow, Squiggle, Smiley,
  Cassette, Guitar, RunningShoe, Dumbbell,
});

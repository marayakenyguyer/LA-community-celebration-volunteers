// City Volunteers LA 2028 — Landing page in 3 distinct styles (live switcher)
const TDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const T_PHOTO = "assets/photos/volunteers-sunset.jpg";

/* ============================================================
   SHARED CONTENT
   ============================================================ */
const T_STATS = [
  { v: "5K–10K", l: "Volunteers", c: "magenta" },
  { v: "25,000+", l: "Shifts", c: "blue" },
  { v: "15", l: "Council districts", c: "green" },
];
const T_STEPS = [
  { n: "01", icon: "sparkles", color: "var(--blue-500)", title: "Application", body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required." },
  { n: "02", icon: "search", color: "var(--purple-500)", title: "Vetting", body: "We review applications and run a background check once you accept a conditional role offer." },
  { n: "03", icon: "graduation-cap", color: "var(--coral-500)", title: "Selection & Onboarding", body: "Selected volunteers get an official offer, then complete training built for their role." },
  { n: "04", icon: "star", color: "var(--gold-500)", title: "Deployment", body: "Pick up your kit and take your post as the face of LA across the city." },
];
const T_DIFF = [
  { tag: "City of LA", title: "City Volunteer Program", accent: "var(--blue-500)",
    points: [
      { icon: "map-pin", t: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts." },
      { icon: "handshake", t: "Welcoming, wayfinding, accessibility support and civic energy. Not security or event staff." },
      { icon: "building", t: "Run by the City of Los Angeles. Complements — and is separate from — the official Games workforce." },
    ] },
  { tag: "LA28", title: "Games Volunteers", accent: "var(--gold-500)",
    points: [
      { icon: "ticket", t: "Inside official competition venues and Games operations." },
      { icon: "users", t: "Roles defined and managed by the LA28 organizing committee." },
      { icon: "calendar", t: "Apply through LA28 — applications open July 14." },
    ] },
];
const T_WHY = [
  { icon: "heart", color: "var(--magenta-500)", h: "Be part of history", b: "Step into the heart of a once-in-a-generation moment for your city." },
  { icon: "graduation-cap", color: "var(--blue-500)", h: "Build lasting skills", b: "Training and workforce development that outlast the closing ceremony." },
  { icon: "users", color: "var(--purple-500)", h: "Find your people", b: "Connect neighbor-to-neighbor and grow new habits of civic service." },
  { icon: "accessibility", color: "var(--green-500)", h: "A Games for All", b: "Roles for every ability and priority communities across LA." },
];
const STAT_COLORS = { magenta: "var(--magenta-500)", blue: "var(--blue-500)", green: "var(--green-500)" };

function tScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
}

/* ============================================================
   THEME DEFINITIONS
   ============================================================ */
const THEMES = {
  stadium: {
    label: "Sunset Stadium", swatch: "var(--grad-sunset)",
    desc: "Bold · loud · sticker-pop",
    page: "var(--surface-page)",
    fontHead: "var(--font-display)", caps: true, headTrack: "-0.01em",
    rainbow: true, headerBg: "var(--paper-2)",
    sec: {
      blurb:  { bg: "var(--surface-page)", head: "var(--ink-900)", body: "var(--text-body)", kicker: "var(--blue-600)" },
      how:    { bg: "var(--surface-sky)",  head: "var(--ink-900)", body: "var(--text-body)", kicker: "var(--blue-600)" },
      diff:   { bg: "var(--surface-page)", head: "var(--ink-900)", body: "var(--text-body)", kicker: "var(--blue-600)" },
      why:    { bg: "var(--surface-sun)",  head: "var(--ink-900)", body: "var(--text-body)", kicker: "var(--gold-600)" },
      signup: { bg: "var(--grad-dusk)",    head: "#fff",           body: "#EDE6FF",          kicker: "var(--gold-400)", onDark: true },
    },
    card: "pop",
  },
  civic: {
    label: "Civic Clean", swatch: "linear-gradient(120deg,#1A6CE7,#0B3A8C)",
    desc: "Light · editorial · spacious",
    page: "#FFFFFF",
    fontHead: "var(--font-display)", caps: true, headTrack: "-0.01em",
    rainbow: false, headerBg: "#FFFFFF",
    sec: {
      blurb:  { bg: "#FFFFFF",            head: "var(--blue-700)", body: "var(--text-body)", kicker: "var(--blue-500)" },
      how:    { bg: "#FFFFFF",            head: "var(--blue-700)", body: "var(--text-body)", kicker: "var(--blue-500)" },
      diff:   { bg: "var(--blue-100)",    head: "var(--blue-700)", body: "var(--text-body)", kicker: "var(--blue-500)" },
      why:    { bg: "#FFFFFF",            head: "var(--blue-700)", body: "var(--text-body)", kicker: "var(--blue-500)" },
      signup: { bg: "var(--blue-700)",    head: "#fff",            body: "#CFE0FF",          kicker: "var(--gold-400)", onDark: true },
    },
    card: "soft",
  },
  carnival: {
    label: "Color Carnival", swatch: "var(--grad-rainbow)",
    desc: "Maximal · color-blocked · poster",
    page: "var(--surface-page)",
    fontHead: "var(--font-display)", caps: true, headTrack: "-0.01em",
    rainbow: true, headerBg: "var(--ink-900)", headerDark: true,
    sec: {
      blurb:  { bg: "#FFFFFF",            head: "var(--ink-900)", body: "var(--text-body)", kicker: "var(--magenta-500)" },
      how:    { bg: "var(--gold-500)",    head: "var(--ink-900)", body: "rgba(11,18,48,0.78)", kicker: "rgba(11,18,48,0.65)", onColor: true },
      diff:   { bg: "var(--cyan-400)",    head: "var(--ink-900)", body: "rgba(11,18,48,0.78)", kicker: "rgba(11,18,48,0.65)", onColor: true },
      why:    { bg: "var(--magenta-500)", head: "#fff",           body: "rgba(255,255,255,0.92)", kicker: "var(--gold-200)", onDark: true },
      signup: { bg: "var(--ink-900)",     head: "#fff",           body: "#D9E2F5",          kicker: "var(--gold-400)", onDark: true },
    },
    card: "flat",
  },
};

function cardStyle(kind, opts = {}) {
  if (kind === "pop") return { background: "var(--surface-card)", border: "2px solid var(--ink-900)", boxShadow: "var(--shadow-pop-sm)", borderRadius: "var(--radius-lg)" };
  if (kind === "soft") return { background: "#fff", border: "1px solid var(--line-200)", boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-lg)" };
  return { background: "#fff", border: "none", boxShadow: "0 12px 30px rgba(11,18,48,0.16)", borderRadius: "var(--radius-xl)" }; // flat
}

/* ============================================================
   SHARED PIECES
   ============================================================ */
function THead({ t, sec, kicker, title, intro, align = "left", maxTitle = "18ch" }) {
  const p = t.sec[sec];
  return (
    <div style={{ maxWidth: align === "center" ? "62ch" : "100%", margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: p.kicker, marginBottom: 14 }}>{kicker}</div>
      <h2 style={{ fontFamily: t.fontHead, textTransform: t.caps ? "uppercase" : "none", fontSize: "clamp(2rem,4.5vw,3.4rem)", lineHeight: 0.96, letterSpacing: t.headTrack, color: p.head, margin: 0, maxWidth: maxTitle, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{title}</h2>
      {t.id === "civic" && <div style={{ width: 64, height: 4, background: "var(--gold-500)", borderRadius: 4, marginTop: 18 }} />}
      {intro && <p style={{ fontFamily: "var(--font-text)", fontSize: "1.12rem", lineHeight: 1.65, color: p.body, marginTop: 18, maxWidth: "58ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{intro}</p>}
    </div>
  );
}

function ThemedHeader({ t }) {
  const dark = t.headerDark;
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: t.headerBg, boxShadow: dark ? "none" : "0 1px 0 var(--line-200)" }}>
      {t.rainbow ? <RainbowBar height={6} /> : <div style={{ height: 4, background: "var(--gold-500)" }} />}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "12px clamp(20px,5vw,48px)", display: "flex", alignItems: "center", gap: 20 }}>
        {dark ? <WordmarkDark /> : <Wordmark onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <a href="#how" onClick={(e) => { e.preventDefault(); tScroll("how"); }} className="cv-hide-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: dark ? "#C7D2EC" : "var(--text-muted)", textDecoration: "none" }}>How it works</a>
          <a href="#why" onClick={(e) => { e.preventDefault(); tScroll("why"); }} className="cv-hide-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: dark ? "#C7D2EC" : "var(--text-muted)", textDecoration: "none" }}>Why volunteer</a>
          <TDS.Button variant="gold" pop={t.card === "pop" || t.card === "flat"} size="sm" onClick={() => tScroll("signup")}>Sign up for updates</TDS.Button>
        </div>
      </div>
    </header>
  );
}

function WordmarkDark() {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: 0 }}>
      <span style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", background: "var(--grad-sunset)", flex: "none" }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)", WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)", mask: "radial-gradient(circle, transparent 38%, #000 39%)" }} />
      </span>
      <span style={{ textAlign: "left", lineHeight: 1 }}>
        <span style={{ display: "block", fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 20, letterSpacing: "-0.01em", color: "#fff" }}>City <span style={{ color: "var(--gold-400)" }}>Volunteers</span></span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9FB0D6", marginTop: 4 }}>Los Angeles · LA 2028</span>
      </span>
    </button>
  );
}

/* ============================================================
   HERO — three variants
   ============================================================ */
function VideoPlayer({ frame }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: frame, boxShadow: "var(--shadow-lg)", position: "relative", aspectRatio: "16 / 9", background: `#000 url(${T_PHOTO}) center/cover`, width: "100%" }}>
      <div style={{ position: "absolute", inset: 0, background: playing ? "rgba(11,18,48,0.12)" : "rgba(11,18,48,0.42)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .3s ease" }}>
        <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play volunteer film"} style={{ width: 82, height: 82, borderRadius: "50%", border: "none", cursor: "pointer", background: "var(--grad-sunset)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
          {playing
            ? <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
            : <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z"/></svg>}
        </button>
      </div>
      <div style={{ position: "absolute", left: 14, bottom: 12 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", background: "rgba(11,18,48,0.55)", padding: "5px 10px", borderRadius: 999 }}>{playing ? "Now playing" : "Watch · Why we volunteer"} · 1:24</span>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: "rgba(255,255,255,0.25)" }}>
        <div style={{ height: "100%", width: playing ? "100%" : "0%", background: "var(--grad-sunset)", transition: playing ? "width 84s linear" : "width .3s ease" }} />
      </div>
    </div>
  );
}

function HeroStadium() {
  return (
    <section style={{ position: "relative", background: "var(--ink-900)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${T_PHOTO})`, backgroundSize: "cover", backgroundPosition: "center 28%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,18,48,0.45) 0%, rgba(11,18,48,0.6) 50%, rgba(11,18,48,0.92) 100%)" }} />
      <div style={{ position: "absolute", right: "-160px", top: "-200px", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, transparent 0 46%, rgba(255,45,139,.45) 46% 54%, rgba(255,107,61,.45) 54% 62%, rgba(255,178,0,.45) 62% 70%, transparent 70%)" }} />
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px) clamp(48px,6vw,88px)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 20 }}>City of Los Angeles · Olympic &amp; Paralympic Games</div>
        <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: "#fff", margin: 0, fontSize: "clamp(2.8rem,7.5vw,6rem)", lineHeight: 0.9, letterSpacing: "-0.01em", maxWidth: "15ch" }}>Be the face of <span style={{ background: "var(--grad-sunset)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Los Angeles</span></h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "clamp(1.05rem,2vw,1.3rem)", lineHeight: 1.55, color: "#E7EDFA", maxWidth: "44ch", marginTop: 22 }}>In 2028, LA welcomes the world. Watch how thousands of City Volunteers will help — neighbors welcoming neighbors, in every council district.</p>
        <div style={{ marginTop: 34, maxWidth: 760 }}><VideoPlayer frame="2px solid rgba(255,255,255,0.25)" /></div>
      </div>
    </section>
  );
}

function HeroCivic() {
  return (
    <section style={{ background: "#FFFFFF", borderBottom: "1px solid var(--line-200)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(44px,6vw,84px) clamp(20px,5vw,48px)", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "clamp(28px,5vw,64px)", alignItems: "center" }} className="cv-hero-civic">
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue-500)", marginBottom: 20 }}>City of Los Angeles · Games 2028</div>
          <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: "var(--blue-700)", margin: 0, fontSize: "clamp(2.6rem,5.5vw,4.6rem)", lineHeight: 0.92, letterSpacing: "-0.01em", maxWidth: "13ch" }}>Be the face of Los Angeles</h1>
          <div style={{ width: 72, height: 5, background: "var(--gold-500)", borderRadius: 5, margin: "22px 0" }} />
          <p style={{ fontFamily: "var(--font-text)", fontSize: "clamp(1.05rem,1.6vw,1.25rem)", lineHeight: 1.6, color: "var(--text-body)", maxWidth: "46ch" }}>In 2028, LA welcomes the world. The City is recruiting thousands of volunteers to be its warm, knowledgeable face — neighbors welcoming neighbors, in every council district.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <TDS.Button variant="primary" size="lg" onClick={() => tScroll("signup")} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>Sign up for updates</TDS.Button>
            <TDS.Button variant="ghost" size="lg" onClick={() => tScroll("how")}>How it works</TDS.Button>
          </div>
        </div>
        <VideoPlayer frame="1px solid var(--line-200)" />
      </div>
    </section>
  );
}

function HeroCarnival() {
  return (
    <section style={{ position: "relative", background: "var(--blue-500)", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-120px", bottom: "-260px", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, transparent 0 44%, rgba(255,45,139,.6) 44% 52%, rgba(255,178,0,.6) 52% 60%, rgba(47,208,214,.55) 60% 68%, transparent 68%)" }} />
      <div style={{ position: "absolute", left: "-140px", top: "-160px", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,63,242,.55), transparent 70%)" }} />
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(52px,7vw,96px) clamp(20px,5vw,48px) clamp(44px,6vw,84px)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-200)", marginBottom: 18 }}>City of Los Angeles · Games 2028</div>
        <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: "#fff", margin: 0, fontSize: "clamp(3rem,8.5vw,7rem)", lineHeight: 0.86, letterSpacing: "-0.01em", maxWidth: "13ch", textShadow: "0 4px 0 rgba(11,18,48,0.18)" }}>Be the face of <span style={{ color: "var(--gold-400)" }}>L.A.</span></h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "clamp(1.05rem,2vw,1.35rem)", lineHeight: 1.55, color: "rgba(255,255,255,0.95)", maxWidth: "44ch", marginTop: 22 }}>In 2028, LA welcomes the world. Thousands of City Volunteers will bring the energy — neighbors welcoming neighbors, in every council district.</p>
        <div style={{ marginTop: 32, maxWidth: 720 }}><VideoPlayer frame="4px solid #fff" /></div>
      </div>
      <div style={{ height: 10, background: "var(--grad-rainbow)" }} />
    </section>
  );
}

/* ============================================================
   SECTIONS
   ============================================================ */
function Blurb({ t }) {
  const p = t.sec.blurb;
  return (
    <section style={{ background: p.bg, padding: "clamp(48px,7vw,88px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 48, alignItems: "center" }} className="cv-grid-2">
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: p.kicker, marginBottom: 14 }}>The Program</div>
          <h2 style={{ fontFamily: t.fontHead, textTransform: t.caps ? "uppercase" : "none", fontSize: "clamp(1.8rem,4vw,2.9rem)", lineHeight: 0.98, letterSpacing: t.headTrack, color: p.head, margin: "0 0 18px", maxWidth: "20ch" }}>Neighbors welcoming neighbors</h2>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.15rem", lineHeight: 1.65, color: p.body, margin: 0, maxWidth: "56ch" }}>The City of Los Angeles is recruiting 5,000–10,000 City Volunteers to complement the LA28 Games — serving as the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites. We provide wayfinding, accessibility support, information, and the civic energy that makes every visitor feel at home. The 2028 Games will be a <strong>Games for All</strong>.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {T_STATS.map((s) => (
            <div key={s.l} style={{ borderTop: "2px solid var(--line-200)", paddingTop: 14 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem,4vw,3rem)", lineHeight: 0.9, color: STAT_COLORS[s.c] }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ t }) {
  const p = t.sec.how;
  return (
    <section id="how" style={{ background: p.bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <THead t={t} sec="how" kicker="How it works" title="Four steps to your first shift" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 44 }}>
          {T_STEPS.map((s) => {
            const cs = cardStyle(t.card);
            return (
              <div key={s.n} style={{ ...cs, padding: "24px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ width: 50, height: 50, borderRadius: t.card === "flat" ? "50%" : 13, background: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={s.icon} size={26} color={s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.3} />
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 30, color: t.id === "civic" ? "var(--gold-400)" : "var(--line-200)" }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 19, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{s.body}</p>
              </div>
            );
          })}
        </div>
        <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, color: p.onColor || p.onDark ? p.body : "var(--text-muted)", marginTop: 24, maxWidth: "70ch" }}>To apply you'll need to be 18 or older, proficient in English, available for 10+ non-consecutive shifts, and present in a host location during the Games.</p>
      </div>
    </section>
  );
}

function Difference({ t }) {
  const p = t.sec.diff;
  const onBlock = p.onColor || p.onDark;
  return (
    <section style={{ background: p.bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <THead t={t} sec="diff" kicker="Two ways to serve" title="How are we different from LA28?" maxTitle="22ch"
          intro="The City Volunteer Program and LA28's Games Volunteers are two distinct teams that work side by side. One serves the city; one serves the venues. Many Angelenos apply to both." />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 40 }} className="cv-grid-2">
          {T_DIFF.map((c, ci) => {
            const isSecond = ci === 1;
            const cardBg = t.id === "stadium" && isSecond ? "var(--ink-900)" : "#fff";
            const onCardDark = cardBg === "var(--ink-900)";
            const cs = cardStyle(t.card);
            return (
              <div key={c.title} style={{ ...cs, background: cardBg, overflow: "hidden" }}>
                <div style={{ height: 6, background: c.accent }} />
                <div style={{ padding: "26px 26px 28px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: c.accent, marginBottom: 8 }}>{c.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 24, letterSpacing: "-0.02em", color: onCardDark ? "#fff" : "var(--ink-900)", margin: "0 0 18px" }}>{c.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                    {c.points.map((pt, i) => (
                      <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ width: 32, height: 32, borderRadius: 9, flex: "none", background: onCardDark ? "rgba(255,255,255,0.1)" : "var(--surface-sky)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name={pt.icon} size={17} color={c.accent} stroke={2.2} />
                        </span>
                        <span style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.5, color: onCardDark ? "#D9E2F5" : "var(--text-body)" }}>{pt.t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyVolunteer({ t }) {
  const p = t.sec.why;
  const onBlock = p.onColor || p.onDark;
  return (
    <section id="why" style={{ background: p.bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <THead t={t} sec="why" kicker="Why volunteer" title="Your city needs you" maxTitle="16ch" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20, marginTop: 44 }}>
          {T_WHY.map((w) => {
            const cs = cardStyle(t.card === "pop" ? "soft" : t.card);
            const cardBg = onBlock ? "rgba(255,255,255,0.97)" : (cs.background);
            return (
              <div key={w.h} style={{ ...cs, background: cardBg, padding: "26px 24px" }}>
                <span style={{ width: 52, height: 52, borderRadius: t.card === "flat" ? "50%" : 14, background: w.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={w.icon} size={26} color={w.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.2} />
                </span>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "16px 0 8px" }}>{w.h}</h3>
                <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{w.b}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Signup({ t }) {
  const p = t.sec.signup;
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState({ first: "", last: "", email: "", zip: "" });
  const [agree, setAgree] = React.useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const valid = f.first && f.last && f.email && f.zip && agree;
  return (
    <section id="signup" style={{ background: p.bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center" }} className="cv-grid-2">
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: p.kicker, marginBottom: 14 }}>Stay in the loop</div>
          <h2 style={{ fontFamily: t.fontHead, textTransform: t.caps ? "uppercase" : "none", fontSize: "clamp(2.2rem,5vw,3.6rem)", lineHeight: 0.92, color: p.head, margin: "0 0 16px" }}>Be first to know when we open</h2>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.1rem", lineHeight: 1.6, color: p.body, margin: 0, maxWidth: "40ch" }}>Sign up and we'll email you the moment City Volunteer applications go live — plus updates from across the program.</p>
        </div>
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-xl)", padding: "clamp(24px,3vw,36px)", boxShadow: "var(--shadow-lg)" }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "20px 8px" }}>
              <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--grad-sunset)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}><Icon name="check" size={38} color="#fff" stroke={3} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 30, lineHeight: 0.95, color: "var(--ink-900)", margin: "0 0 10px" }}>You're on the list</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>Thanks, {f.first}! We'll be in touch the moment applications open. See you out there, neighbor.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (valid) setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <TDS.Input label="First name" placeholder="Maya" value={f.first} onChange={set("first")} required />
                <TDS.Input label="Last name" placeholder="Ortiz" value={f.last} onChange={set("last")} required />
              </div>
              <TDS.Input label="Email address" type="email" placeholder="you@email.com" value={f.email} onChange={set("email")} required />
              <TDS.Input label="ZIP code" placeholder="90012" value={f.zip} onChange={set("zip")} required style={{ maxWidth: 160 }} />
              <TDS.Checkbox label="I agree to receive communications from the City Volunteer Program." checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <TDS.Button variant="gold" size="lg" pop block type="submit" iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />} style={{ opacity: valid ? 1 : 0.55, pointerEvents: valid ? "auto" : "none", marginTop: 4 }}>Sign me up</TDS.Button>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 12.5, color: "var(--text-muted)", textAlign: "center", margin: 0 }}>We'll only use your info for City Volunteer updates. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SWITCHER + APP
   ============================================================ */
function StyleSwitcher({ themeId, setThemeId }) {
  return (
    <div style={{ position: "fixed", left: "50%", bottom: 22, transform: "translateX(-50%)", zIndex: 100, display: "flex", alignItems: "center", gap: 6, background: "var(--ink-900)", padding: 6, borderRadius: 999, boxShadow: "0 12px 34px rgba(11,18,48,0.4)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8392B8", padding: "0 8px 0 10px" }}>Style</span>
      {Object.keys(THEMES).map((k) => {
        const th = THEMES[k]; const on = k === themeId;
        return (
          <button key={k} onClick={() => setThemeId(k)} title={th.desc} style={{ display: "flex", alignItems: "center", gap: 8, border: "none", cursor: "pointer", borderRadius: 999, padding: on ? "8px 14px" : "8px 12px", background: on ? "#fff" : "transparent", transition: "background .2s ease" }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: th.swatch, flex: "none", boxShadow: on ? "none" : "inset 0 0 0 1px rgba(255,255,255,0.3)" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: on ? "var(--ink-900)" : "#C7D2EC", whiteSpace: "nowrap" }}>{th.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function LandingThemed() {
  const [themeId, setThemeId] = React.useState(() => {
    try { return localStorage.getItem("cv-landing-theme") || "stadium"; } catch (e) { return "stadium"; }
  });
  React.useEffect(() => { try { localStorage.setItem("cv-landing-theme", themeId); } catch (e) {} }, [themeId]);
  const t = { ...THEMES[themeId], id: themeId };
  const Hero = themeId === "civic" ? HeroCivic : themeId === "carnival" ? HeroCarnival : HeroStadium;

  return (
    <div style={{ minHeight: "100vh", background: t.page }}>
      <ThemedHeader t={t} />
      <Hero />
      <Blurb t={t} />
      <HowItWorks t={t} />
      <Difference t={t} />
      <WhyVolunteer t={t} />
      <Signup t={t} />
      <SiteFooter go={() => tScroll("signup")} />
      <div style={{ height: 84 }} />
      <StyleSwitcher themeId={themeId} setThemeId={setThemeId} />
    </div>
  );
}

window.LandingThemed = LandingThemed;

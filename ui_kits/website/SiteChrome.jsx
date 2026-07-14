// City Volunteers LA 2028 — Site chrome (header, footer, rainbow bar, wordmark)
const { Button: CvButton } = window.CityVolunteersLA2028DesignSystem_ea1102;

function RainbowBar({ height = 6 }) {
  return <div style={{ height, background: "var(--grad-rainbow)", width: "100%" }} />;
}

function Wordmark({ onClick, compact = false }) {
  return (
    <button onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", padding: 0 }}>
      <span style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", background: "var(--grad-sunset)", flex: "none", boxShadow: "var(--shadow-sm)" }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%",
          background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)",
          WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)", mask: "radial-gradient(circle, transparent 38%, #000 39%)" }} />
      </span>
      <span style={{ textAlign: "left", lineHeight: 1 }}>
        <span style={{ display: "block", fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 20, letterSpacing: "-0.01em", color: "var(--ink-900)" }}>
          <span style={{ color: "var(--blue-500)", fontSize: 24 }}>CITY OF LOS ANGELES</span>
        </span>
        {!compact && <span style={{ display: "block", fontFamily: "anton", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF3E53", marginTop: 4 }}>2028 GAMES VOLUNTEERS</span>}
      </span>
    </button>
  );
}

const NAV = [
  { id: "home", label: "The Mission" },
  { id: "roles", label: "Roles" },
  { id: "journey", label: "Your Journey" },
];

function SiteHeader({ route, go }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--paper-2)", boxShadow: "0 1px 0 var(--line-200)" }}>
      <RainbowBar height={6} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px clamp(20px,5vw,48px)", display: "flex", alignItems: "center", gap: 24 }}>
        <Wordmark onClick={() => go("home")} />
        <nav style={{ display: "flex", gap: 28, marginLeft: 20 }} className="cv-desktop-nav">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15,
              color: route === n.id ? "var(--ink-900)" : "var(--text-muted)",
              paddingBottom: 2, borderBottom: route === n.id ? "2px solid var(--blue-500)" : "2px solid transparent",
            }}>{n.label}</button>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "var(--text-body)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14 }}>
            <Icon name="globe" size={18} /> EN
          </button>
          <CvButton variant="gold" pop size="sm" onClick={() => go("apply")}>Become a Volunteer</CvButton>
        </div>
      </div>
    </header>
  );
}

const FOOTER_COLS = [
  { h: "The Program", links: ["The Mission", "Volunteer Missions", "Priority Communities", "Our Partners"] },
  { h: "Get Involved", links: ["Become a Volunteer", "Browse Roles", "Your Journey", "Volunteer Stories"] },
  { h: "City of LA", links: ["Mayor's Office", "Council Districts", "Accessibility", "Contact"] },
];

function SiteFooter({ go }) {
  return (
    <footer style={{ background: "var(--ink-900)", color: "#fff", marginTop: 0 }}>
      <RainbowBar height={6} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px clamp(20px,5vw,48px) 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32 }} className="cv-footer-grid">
        <div>
          <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 24, lineHeight: 0.95 }}>
            City <span style={{ color: "var(--gold-400)" }}>Volunteers</span>
          </div>
          <p style={{ fontFamily: "var(--font-text)", fontSize: 14, lineHeight: 1.6, color: "var(--blue-300)", maxWidth: "32ch", marginTop: 14 }}>
            Building a generation of civic commitment — one welcome, one direction, one connection at a time.
          </p>
          <div style={{ marginTop: 20 }}>
            <CvButton variant="gold" size="sm" pop onClick={() => go("apply")}>Become a Volunteer</CvButton>
          </div>
        </div>
        {FOOTER_COLS.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 16 }}>{c.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {c.links.map((l) => <li key={l}><a href="#" style={{ color: "#D9E2F5", textDecoration: "none", fontFamily: "var(--font-text)", fontSize: 14.5 }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px clamp(20px,5vw,48px)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", color: "var(--ink-300)" }}>
          <span>© 2028 CITY OF LOS ANGELES · CITY VOLUNTEER PROGRAM</span>
          <span>A GAMES FOR ALL</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { RainbowBar, Wordmark, SiteHeader, SiteFooter });

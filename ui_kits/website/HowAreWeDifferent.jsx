// City Volunteers LA 2028 — Reusable section: "How are we different"
// Extracted from the Sunset Stadium landing page's City Volunteers vs LA28 section.
// Self-contained: no theme prop required. Drop into any page that has
// loaded the design-system bundle + Icon.jsx.
const HAWD_DIFF = [
  { tag: "City of LA", title: "City Volunteer Program", accent: "var(--blue-500)",
    points: [
      { icon: "map-pin", t: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts." },
      { icon: "handshake", t: "Welcoming, wayfinding, accessibility support and civic energy. Not security or event staff." },
      { icon: "building", t: "Run by the City of Los Angeles. Complements — and is separate from — the official Games workforce." },
    ] },
  { tag: "LA28", title: "Games Volunteers", accent: "var(--gold-700)",
    points: [
      { icon: "ticket", t: "Inside official competition venues and Games operations." },
      { icon: "users", t: "Roles defined and managed by the LA28 organizing committee." },
      { icon: "calendar", t: "Apply through LA28 — applications open July 14." },
    ] },
];

function HowAreWeDifferent({ id = "diff", bg = "var(--surface-page)" } = {}) {
  return (
    <section id={id} style={{ background: bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)", textAlign: "center" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 14 }}></div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "#000000", margin: "0 auto 14px" }}>How are we different from LA28?</h2>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.12rem", lineHeight: 1.65, color: "var(--text-body)", marginTop: 0, marginBottom: 0, marginLeft: "auto", marginRight: "auto" }}>
          The City Volunteer Program and LA28's Games Volunteers are two distinct teams that work side by side. One serves the city; one serves the venues. Many Angelenos apply to both.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 40 }} className="hawd-grid-2">
          {HAWD_DIFF.map((c, ci) => {
            const onCardDark = ci === 1 ? false : false; // both cards light by default
            return (
              <div key={c.title} style={{ background: "var(--surface-card)", border: "1px solid var(--line-200)", boxShadow: "var(--shadow-md)", borderRadius: "var(--radius-lg)", overflow: "hidden", textAlign: "center" }}>
                <div style={{ height: 6, background: c.accent }} />
                <div style={{ padding: "26px 26px 28px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: c.accent, marginBottom: 8 }}>{c.tag}</div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 24, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 18px" }}>{c.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
                    {c.points.map((pt, i) => (
                      <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", textAlign: "left" }}>
                        <span style={{ width: 32, height: 32, borderRadius: 9, flex: "none", background: c.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon name={pt.icon} size={17} color={c.accent === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.2} />
                        </span>
                        <span style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.5, color: "var(--text-body)" }}>{pt.t}</span>
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

window.HowAreWeDifferent = HowAreWeDifferent;

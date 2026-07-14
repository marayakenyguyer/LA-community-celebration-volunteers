// City Volunteers LA 2028 — Reusable section: "Four Steps to Join"
// Extracted from the Sunset Stadium landing page's "How it works" section.
// Self-contained: no theme prop required. Drop into any page that has
// loaded the design-system bundle + Icon.jsx.
const FSJ_STEPS = [
  { n: "01", icon: "sparkles", color: "var(--blue-500)", title: "Application", body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required.", date: "Opens early 2027" },
  { n: "02", icon: "search", color: "var(--purple-500)", title: "Vetting", body: "We review applications and run a background check once you accept a conditional role offer.", date: "Spring–summer 2027" },
  { n: "03", icon: "graduation-cap", color: "var(--coral-600)", title: "Selection & Onboarding", body: "Selected volunteers get an official offer, then complete training built for their role.", date: "Late 2027–early 2028" },
  { n: "04", icon: "star", color: "var(--gold-500)", title: "Deployment", body: "Pick up your kit and take your post as the face of LA across the city.", date: "Summer 2028" },
];

function FourStepsToJoin({ id = "how", bg = "var(--surface-sky)" } = {}) {
  return (
    <section id={id} style={{ background: bg, padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)", textAlign: "center" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 14 }}></div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 auto", maxWidth: "18ch", textAlign: "center" }}>HOW TO JOIN</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(24px,4vw,52px)", alignItems: "center", marginTop: 44, textAlign: "left" }} className="fsj-intro-grid">
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.1rem", lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>
            You don't need a special background or a specific skill set. You just need to love this city and want to share it!
            <br /><br />
            We're looking for Angelenos from all over the City and beyond - people who know their neighborhoods, speak their community's languages, and are proud of what Los Angeles has to offer. Think of yourself as an ambassador to the City.
            <br /><br />
            Beyond that, we're especially seeking people who bring:
            <br />
            • Local knowledge of your neighborhood, transit routes, and points of interest
            <br />
            • Language skills that reflect the incredible diversity of Los Angeles
            <br />
            • A welcoming attitude and the ability to stay calm in busy, high-energy environments
            <br />
            • A genuine commitment to giving back and contributing to the city's future
            <br />
          </p>
          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", minHeight: 240 }}>
            <div style={{ height: "100%", minHeight: 240, backgroundImage: "url(assets/photos/crew-circle-trees.jpg)", backgroundSize: "cover", backgroundPosition: "center 30%" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 44 }}>
          {FSJ_STEPS.map((s) => (
            <div key={s.n} style={{ background: "var(--surface-card)", border: "2px solid var(--ink-900)", boxShadow: "var(--shadow-pop-sm)", borderRadius: "var(--radius-lg)", padding: "24px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, position: "relative", width: "100%" }}>
                <span style={{ width: 50, height: 50, borderRadius: 13, background: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s.icon} size={26} color={s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.3} />
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--line-200)" }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 19, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{s.body}</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-900)", background: "var(--surface-page)", border: `1.5px solid ${s.color}`, borderRadius: "var(--radius-pill)", padding: "5px 12px" }}>{s.date}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, color: "var(--text-muted)", marginTop: 24, maxWidth: "70ch", marginLeft: "auto", marginRight: "auto" }}></p>
      </div>
    </section>
  );
}

window.FourStepsToJoin = FourStepsToJoin;

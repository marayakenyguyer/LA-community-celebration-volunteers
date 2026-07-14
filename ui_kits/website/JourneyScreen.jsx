// City Volunteers LA 2028 — Volunteer Journey timeline screen
const JourneyDS = window.CityVolunteersLA2028DesignSystem_ea1102;

const STEPS = [
  { n: "01", color: "var(--blue-500)", icon: "sparkles", when: "Now – June 2026", title: "Apply", body: "Tell us who you are and how you want to show up. Applications take about 15 minutes — no experience required." },
  { n: "02", color: "var(--purple-500)", icon: "check", when: "Late 2026 – Spring 2027", title: "Selection & Role Offers", body: "If selected, you'll receive an official role offer. A background review follows once you accept a conditional offer." },
  { n: "03", color: "var(--coral-500)", icon: "graduation-cap", when: "2027 – 2028", title: "Gear Up & Get Ready", body: "Pick up your kit and complete training built to prepare you for your role — plus skills that last a lifetime." },
  { n: "04", color: "var(--gold-500)", icon: "star", when: "Summer 2028", title: "Games Time", body: "Step into the heart of the action and be the face of LA for the biggest Games yet. This is your moment." },
];

function JourneyScreen({ go }) {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "clamp(48px,6vw,84px) clamp(20px,5vw,48px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "-160px", bottom: "-220px", width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, transparent 0 48%, rgba(26,108,231,.5) 48% 56%, rgba(47,208,214,.45) 56% 64%, rgba(47,180,87,.4) 64% 72%, transparent 72%)" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 14 }}>Your Journey</div>
          <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.4rem,6vw,4.5rem)", lineHeight: 0.92, color: "#fff", margin: 0 }}>From hello to <span style={{ background: "var(--grad-sky)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>the Games</span></h1>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.15rem", lineHeight: 1.6, color: "#D9E2F5", maxWidth: "50ch", marginTop: 16 }}>
            Four steps over two years. Here's exactly what to expect from the day you apply to your first shift on the world stage.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--surface-page)", padding: "clamp(56px,8vw,96px) clamp(20px,5vw,48px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", left: 31, top: 20, bottom: 20, width: 4, background: "var(--grad-rainbow)", borderRadius: 4 }} className="cv-journey-spine" />
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
                <div style={{ position: "relative", zIndex: 1, width: 66, flex: "none", display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 66, height: 66, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 6px var(--surface-page)" }}>
                    <Icon name={s.icon} size={28} color={s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.4} />
                  </div>
                </div>
                <div style={{ background: "var(--surface-card)", border: "2px solid var(--ink-900)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-pop-sm)", padding: "22px 24px", flex: 1, marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: s.color }}>{s.n}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{s.when}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 24, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-text)", fontSize: 15.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <JourneyDS.Button variant="gold" size="lg" pop onClick={() => go("apply")} iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />}>Start your application</JourneyDS.Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.JourneyScreen = JourneyScreen;

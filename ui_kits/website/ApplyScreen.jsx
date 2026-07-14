// City Volunteers LA 2028 — Application screen
const ApplyDS = window.CityVolunteersLA2028DesignSystem_ea1102;

const REQS = [
  { icon: "users", t: "Be 18 or older at the time you apply" },
  { icon: "languages", t: "Proficient in English (reading & writing)" },
  { icon: "calendar", t: "Available for 10+ non-consecutive shifts" },
  { icon: "map-pin", t: "Present in Greater LA during the Games" },
];

function ApplySuccess({ go }) {
  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--grad-sunset)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", boxShadow: "var(--shadow-lg)" }}>
          <Icon name="check" size={48} color="#fff" stroke={3} />
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 14 }}>Application received</div>
        <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.4rem,6vw,4rem)", lineHeight: 0.92, color: "var(--ink-900)", margin: 0 }}>Welcome to the crew</h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--text-body)", marginTop: 18 }}>
          Thanks for stepping up, neighbor. We'll be in touch as role offers roll out — keep an eye on your inbox.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
          <ApplyDS.Button variant="primary" pop onClick={() => go("journey")} iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>See what's next</ApplyDS.Button>
          <ApplyDS.Button variant="outline" onClick={() => go("home")}>Back to home</ApplyDS.Button>
        </div>
      </div>
    </section>
  );
}

function ApplyScreen({ go }) {
  const [done, setDone] = React.useState(false);
  const [loc, setLoc] = React.useState("");
  const [shift, setShift] = React.useState("");
  const [c1, setC1] = React.useState(false);
  const [sms, setSms] = React.useState(true);

  if (done) return <ApplySuccess go={go} />;

  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(40px,5vw,72px) clamp(20px,5vw,48px) clamp(64px,8vw,104px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 44, alignItems: "start" }} className="cv-apply-grid">
        {/* Form */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 12 }}>Become a Volunteer</div>
          <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 0.92, color: "var(--ink-900)", margin: "0 0 28px" }}>Tell us about you</h1>

          <form onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo(0, 0); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ApplyDS.Input label="First name" placeholder="Maya" required />
              <ApplyDS.Input label="Last name" placeholder="Ortiz" required />
            </div>
            <ApplyDS.Input label="Email address" type="email" placeholder="you@email.com" hint="We'll only use this for shift updates." icon={<Icon name="globe" size={18} color="var(--ink-300)" />} required />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ApplyDS.Select label="Preferred location" placeholder="Choose a city" value={loc} onChange={(e) => setLoc(e.target.value)} options={["Greater Los Angeles", "San Diego", "San José", "New York City", "Other host city"]} />
              <ApplyDS.Select label="Shift window" placeholder="When can you serve?" value={shift} onChange={(e) => setShift(e.target.value)} options={["Olympic Games (Jul–Aug 2028)", "Paralympic Games (Aug–Sep 2028)", "Both", "Year-round"]} />
            </div>
            <ApplyDS.Input label="Why do you want to volunteer?" placeholder="A sentence or two about what drew you in…" />

            <div style={{ background: "var(--surface-card)", border: "1px solid var(--line-200)", borderRadius: "var(--radius-md)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
              <ApplyDS.Checkbox label="I confirm I'll be 18 or older when the Games begin." checked={c1} onChange={(e) => setC1(e.target.checked)} />
              <ApplyDS.Switch label="Text me when shifts open in my neighborhood." checked={sms} onChange={setSms} accent="gold" />
            </div>

            <div>
              <ApplyDS.Button variant="gold" size="lg" pop iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />} type="submit">Submit application</ApplyDS.Button>
            </div>
          </form>
        </div>

        {/* Aside */}
        <aside style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "var(--ink-900)", borderRadius: "var(--radius-lg)", padding: "26px 24px", color: "#fff" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 16 }}>Before you apply</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {REQS.map((r) => (
                <li key={r.t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <Icon name={r.icon} size={18} color="var(--blue-300)" />
                  </span>
                  <span style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.45, color: "#E7EDFA" }}>{r.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "var(--surface-sun)", borderRadius: "var(--radius-lg)", padding: "22px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <Icon name="accessibility" size={26} color="var(--gold-600)" stroke={2.2} />
            <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-900)", margin: 0 }}>
              <strong>A Games for All.</strong> We welcome people of all abilities, including those with disabilities. Tell us how we can support you.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

window.ApplyScreen = ApplyScreen;

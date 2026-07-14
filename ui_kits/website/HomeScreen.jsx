// City Volunteers LA 2028 — Home screen
const HomeDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO = "../../assets/photos/volunteers-sunset.jpg";

const MISSIONS = [
  { icon: "map-pin", title: "Venue Approach", body: "Guide arriving crowds from transit to the gates with a smile and clear direction.", accent: "blue" },
  { icon: "megaphone", title: "Celebrations & Activations", body: "Bring the energy at neighborhood watch-party and festival sites across the city.", accent: "magenta" },
  { icon: "building", title: "City Media Center", body: "Welcome press and storytellers documenting LA's moment on the world stage.", accent: "purple" },
  { icon: "ticket", title: "Accreditation", body: "Help credential the workforce that keeps the Games for All running.", accent: "green" },
  { icon: "accessibility", title: "City Guidance", body: "Provide wayfinding and accessibility support so every visitor feels at home.", accent: "gold" },
];

const VISION = [
  { icon: "users", h: "Priority Communities", b: "Roles for foster youth, second-chance, veterans and college corps — a force that looks like LA." },
  { icon: "graduation-cap", h: "Training Up", b: "Workforce development and emergency-response skills that outlast the closing ceremony." },
  { icon: "handshake", h: "Permanent Volunteer Hub", b: "One front door to get engaged with civic service across the City of Los Angeles." },
  { icon: "heart", h: "New Civic Habits", b: "Citizen academies and neighbor-to-neighbor service that build lasting habits." },
];

function HomeHero({ go }) {
  return (
    <section style={{ position: "relative", background: "var(--ink-900)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTO})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,18,48,0.35) 0%, rgba(11,18,48,0.55) 45%, rgba(11,18,48,0.9) 100%)" }} />
      <div style={{ position: "absolute", right: "-180px", top: "-180px", width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle, transparent 0 46%, rgba(255,45,139,.5) 46% 54%, rgba(255,107,61,.5) 54% 62%, rgba(255,178,0,.5) 62% 70%, transparent 70%)" }} />
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(64px,9vw,120px) clamp(20px,5vw,48px) clamp(56px,7vw,96px)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 22 }}>
          City of Los Angeles · Olympic &amp; Paralympic Games
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: "#fff", margin: 0, fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.9, letterSpacing: "-0.01em", maxWidth: "16ch" }}>
          Los Angeles<br />welcomes<br />
          <span style={{ background: "var(--grad-sunset)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>the world</span>
        </h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "clamp(1.05rem,2vw,1.35rem)", lineHeight: 1.55, color: "#E7EDFA", maxWidth: "46ch", marginTop: 26 }}>
          We're recruiting 5,000–10,000 City Volunteers to be the warm, knowledgeable face of LA. Neighbors welcoming neighbors — in every council district.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
          <HomeDS.Button variant="gold" size="lg" pop iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />} onClick={() => go("apply")}>Become a Volunteer</HomeDS.Button>
          <HomeDS.Button variant="outline" size="lg" onClick={() => go("roles")} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }} iconRight={<Icon name="chevron-right" size={18} color="#fff" />}>Explore roles</HomeDS.Button>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const items = [
    { v: "5K–10K", l: "Volunteers mobilized", a: "gold", grad: false },
    { v: "25,000+", l: "Total shifts", a: "magenta" },
    { v: "15", l: "Council districts", a: "green" },
    { v: "100%", l: "A Games for All", a: "blue" },
  ];
  return (
    <section style={{ background: "var(--ink-900)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,48px) clamp(48px,6vw,72px)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="cv-stats-grid">
        {items.map((s) => (
          <div key={s.l} style={{ borderTop: "3px solid rgba(255,255,255,0.16)", paddingTop: 20 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5vw,3.6rem)", lineHeight: 0.9, color: s.a === "gold" ? "var(--gold-400)" : s.a === "magenta" ? "var(--magenta-300)" : s.a === "green" ? "var(--green-300)" : "var(--blue-300)" }}>{s.v}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AEB9D6", marginTop: 10 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, intro, align = "left" }) {
  return (
    <div style={{ maxWidth: align === "center" ? "64ch" : "100%", margin: align === "center" ? "0 auto" : 0, textAlign: align }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 14 }}>{kicker}</div>
      <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0, maxWidth: "18ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{title}</h2>
      {intro && <p style={{ fontFamily: "var(--font-text)", fontSize: "1.15rem", lineHeight: 1.65, color: "var(--text-body)", marginTop: 18, maxWidth: "58ch", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{intro}</p>}
    </div>
  );
}

function MissionsSection({ go }) {
  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <SectionHead kicker="Volunteer Missions" title="Five ways to show up" intro="City Volunteers are not security or event staff. You're a neighbor — providing wayfinding, accessibility support, information, and the civic energy that makes every visitor feel at home." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 22, marginTop: 44 }}>
          {MISSIONS.map((m) => (
            <HomeDS.Card key={m.title} accent={m.accent} interactive>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--surface-sky)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon name={m.icon} size={26} color="var(--blue-600)" stroke={2.2} />
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 20, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 0 8px" }}>{m.title}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{m.body}</p>
            </HomeDS.Card>
          ))}
          <div style={{ borderRadius: "var(--radius-lg)", background: "var(--grad-dusk)", padding: "26px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
            <div style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 26, lineHeight: 0.95, color: "#fff" }}>Find your role</div>
            <HomeDS.Button variant="gold" pop onClick={() => go("roles")} iconRight={<Icon name="arrow-right" size={18} color="var(--ink-900)" />} style={{ alignSelf: "flex-start" }}>Browse all roles</HomeDS.Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section style={{ background: "var(--surface-sky)", padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <SectionHead kicker="The Larger Vision" title="A lasting culture of service" intro="The Games are a once-in-a-generation catalyst. LA 2028 volunteer alumni become the core of a permanent civic infrastructure — trained, connected, and ready." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 44 }}>
          {VISION.map((v) => (
            <div key={v.h} style={{ background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "26px 24px", boxShadow: "var(--shadow-sm)" }}>
              <Icon name={v.icon} size={28} color="var(--purple-500)" stroke={2.2} />
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, color: "var(--ink-900)", margin: "16px 0 8px", letterSpacing: "-0.01em" }}>{v.h}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{v.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ go }) {
  return (
    <section style={{ background: "var(--grad-sunset)", padding: "clamp(56px,8vw,96px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(11,18,48,0.6)", marginBottom: 16 }}>Applications open July 14</div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.4rem,6vw,4.5rem)", lineHeight: 0.9, color: "var(--ink-900)", margin: 0 }}>Your city. Your shift.<br />Your moment.</h2>
        <div style={{ marginTop: 30 }}>
          <HomeDS.Button variant="dark" size="lg" pop onClick={() => go("apply")} iconRight={<Icon name="arrow-right" size={20} color="#fff" />}>Become a Volunteer</HomeDS.Button>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ go }) {
  return (
    <div>
      <HomeHero go={go} />
      <StatsBand />
      <MissionsSection go={go} />
      <VisionSection />
      <CtaBand go={go} />
    </div>
  );
}

window.HomeScreen = HomeScreen;

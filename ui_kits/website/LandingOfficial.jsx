// City Volunteers LA 2028 — Official page, closely reflecting the client mock
// (real photography, Mayor quote, "How to join", Shine LA promo, City seal)
const ODS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO_CREW = "assets/photos/crew-circle-trees.jpg";
const PHOTO_PARK = "assets/photos/kick-it-park-group.jpg";
const SHINE_BANNER = "assets/photos/shine-la-banner.jpg";
const CITY_SEAL = "assets/photos/city-seal.png";

function oScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: "smooth" });
}

const WHY = [
  { icon: "heart", color: "var(--magenta-500)", h: "Be part of history", b: "Step into a once-in-a-generation moment for your city." },
  { icon: "graduation-cap", color: "var(--coral-500)", h: "Build lasting skills", b: "Training that outlasts the closing ceremony." },
  { icon: "users", color: "var(--purple-500)", h: "Find your people", b: "Build community and join a network of amazing Angelenos." },
  { icon: "accessibility", color: "var(--green-500)", h: "Join a Games for All", b: "Find meaningful roles for every ability and skill set." },
];
const STEPS = [
  { n: "01", icon: "sparkles", color: "var(--blue-500)", title: "Application", body: "Tell us who you are and how you'd like to help. About 15 minutes — no experience required." },
  { n: "02", icon: "search", color: "var(--purple-500)", title: "Vetting", body: "We review applications and run a background check once you accept a conditional role offer." },
  { n: "03", icon: "graduation-cap", color: "var(--coral-500)", title: "Selection & Onboarding", body: "Selected volunteers get an official offer, then complete training built for their role." },
  { n: "04", icon: "star", color: "var(--gold-500)", title: "Deployment", body: "Pick up your kit and take your post as the face of LA across the city." },
];
const DIFF = [
  { tag: "City of LA", title: "City Volunteer Program", accent: "var(--coral-500)", photo: PHOTO_PARK,
    body: "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts. Welcoming, wayfinding and civic energy. Not security or event staff. Run by the City of Los Angeles — complements, and is separate from, the official Games workforce." },
  { tag: "LA28", title: "Games Volunteers", accent: "var(--blue-500)", photo: PHOTO_CREW,
    body: "Inside official competition venues and Games operations. Roles are defined and managed by the LA28 organizing committee. Many Angelenos apply to both — one serves the city, one serves the venues." },
];
const ASKS = [
  { icon: "map-pin", t: "Local knowledge of your neighborhood, transit routes, and points of interest." },
  { icon: "languages", t: "Language skills that reflect the incredible diversity of Los Angeles." },
  { icon: "heart", t: "A welcoming attitude and the ability to stay calm in busy, high-energy environments." },
  { icon: "handshake", t: "A genuine commitment to giving back and contributing to the city's future." },
];

/* ---------------- Header ---------------- */
function OHeader() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--ink-900)" }}>
      <RainbowBar height={6} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "12px clamp(20px,5vw,48px)", display: "flex", alignItems: "center", gap: 20 }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: 0 }}>
          <span style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", background: "var(--grad-sunset)", flex: "none" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "repeating-conic-gradient(from 200deg, rgba(255,255,255,.55) 0deg 6deg, transparent 6deg 18deg)", WebkitMask: "radial-gradient(circle, transparent 38%, #000 39%)", mask: "radial-gradient(circle, transparent 38%, #000 39%)" }} />
          </span>
          <span style={{ textAlign: "left", lineHeight: 1 }}>
            <span style={{ display: "block", fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 20, letterSpacing: "-0.01em", color: "#fff" }}>City <span style={{ color: "var(--gold-400)" }}>Volunteers</span></span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9AA6C6", marginTop: 4 }}>Los Angeles · LA 2028</span>
          </span>
        </button>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <a href="#join" onClick={(e) => { e.preventDefault(); oScroll("join"); }} className="cv-hide-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "#C7D2EC", textDecoration: "none" }}>How to join</a>
          <a href="#why" onClick={(e) => { e.preventDefault(); oScroll("why"); }} className="cv-hide-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "#C7D2EC", textDecoration: "none" }}>Why volunteer</a>
          <ODS.Button variant="gold" pop size="sm" onClick={() => oScroll("signup")}>Sign up for updates</ODS.Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- 1. Full-bleed hero video (no text) ---------------- */
function HeroVideo() {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section style={{ position: "relative", width: "100%", height: "clamp(420px, 78vh, 860px)", background: "#000", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTO_CREW})`, backgroundSize: "cover", backgroundPosition: "center 42%" }} />
      <div style={{ position: "absolute", inset: 0, background: playing ? "rgba(11,18,48,0.08)" : "rgba(11,18,48,0.3)", transition: "background .3s ease" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play volunteer film"} style={{ width: 104, height: 104, borderRadius: "50%", border: "none", cursor: "pointer", background: "var(--grad-sunset)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 40px rgba(0,0,0,0.4)" }}>
          {playing
            ? <svg width="38" height="38" viewBox="0 0 24 24" fill="#fff"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
            : <svg width="44" height="44" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z"/></svg>}
        </button>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 5, background: "rgba(255,255,255,0.22)" }}>
        <div style={{ height: "100%", width: playing ? "100%" : "0%", background: "var(--grad-sunset)", transition: playing ? "width 84s linear" : "width .3s ease" }} />
      </div>
    </section>
  );
}

/* ---------------- 2. Title + blurb ---------------- */
function Intro() {
  return (
    <section style={{ background: "var(--grad-dusk)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 18 }}>City of Los Angeles · 2028 Games Volunteers</div>
        <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", color: "#fff", margin: 0, fontSize: "clamp(2.4rem,6vw,4.6rem)", lineHeight: 0.94 }}>Be the face of Los Angeles</h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.2rem", lineHeight: 1.65, color: "#F0E8FF", margin: "22px auto 0", maxWidth: "58ch" }}>
          In 2028, LA welcomes the world for the Olympic and Paralympic Games. Thousands of City Volunteers will help — welcoming newcomers, neighbors, and visitors from across the region and the world.
        </p>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.05rem", lineHeight: 1.65, color: "#DCD0F5", margin: "16px auto 0", maxWidth: "62ch" }}>
          The City of Los Angeles is recruiting <strong style={{ color: "#fff" }}>5,000 City Volunteers</strong> for the Games — the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites. We bring wayfinding, accessibility support, information, and public joy that makes every visitor feel at home and every Angeleno feel connected to the Games.
        </p>
        <div style={{ marginTop: 32 }}>
          <ODS.Button variant="gold" size="lg" pop onClick={() => oScroll("join")} iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />}>Join the 2028 Crew</ODS.Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2b. Mayor quote ---------------- */
function MayorQuote() {
  return (
    <section style={{ background: "var(--ink-900)", padding: "clamp(52px,7vw,88px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "clamp(28px,4vw,52px)", alignItems: "center" }} className="of-grid-2">
        <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <div style={{ height: "100%", minHeight: 260, backgroundImage: `url(${PHOTO_PARK})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        </div>
        <div>
          <Icon name="sparkles" size={30} color="var(--gold-400)" stroke={2} />
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "clamp(1.2rem,2.4vw,1.6rem)", lineHeight: 1.5, color: "#fff", margin: "16px 0 22px", maxWidth: "48ch" }}>
            “The 2028 Games are an opportunity to reimagine our infrastructure, strengthen community resilience, and expand opportunity for all Angelenos — a true ‘Games for All’. This is my vision for the 2028 Games — an LA made better for all Angelenos.”
          </p>
          <div style={{ display: "inline-flex", flexDirection: "column", gap: 8, background: "var(--blue-700)", borderRadius: "var(--radius-md)", padding: "12px 20px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, color: "#fff" }}>Mayor Karen Bass</span>
            <span style={{ display: "flex", height: 4, borderRadius: 4, overflow: "hidden", width: 160 }}>
              <span style={{ flex: 1, background: "var(--green-500)" }} />
              <span style={{ flex: 1, background: "var(--gold-500)" }} />
              <span style={{ flex: 1, background: "var(--magenta-500)" }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why volunteer ---------------- */
function Why() {
  return (
    <section id="why" style={{ background: "var(--ink-900)", padding: "0 clamp(20px,5vw,48px) clamp(56px,8vw,100px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 14 }}>Why volunteer?</div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 0.95, color: "#fff", margin: "0 0 40px", maxWidth: "18ch" }}>Your city needs you</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {WHY.map((w) => (
            <div key={w.h} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-lg)", padding: "24px 22px" }}>
              <span style={{ width: 48, height: 48, borderRadius: 13, background: w.color, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={w.icon} size={24} color="#fff" stroke={2.2} /></span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em", color: "#fff", margin: "15px 0 7px" }}>{w.h}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)", margin: 0 }}>{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How to join (NEW) ---------------- */
function HowToJoin() {
  return (
    <section id="join" style={{ background: "var(--surface-page)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }} className="of-grid-2">
        <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", minHeight: 340 }}>
          <div style={{ height: "100%", minHeight: 340, backgroundImage: `url(${PHOTO_PARK})`, backgroundSize: "cover", backgroundPosition: "center 25%" }} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--coral-500)", marginBottom: 14 }}>Who we're looking for</div>
          <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 0.96, color: "var(--ink-900)", margin: "0 0 18px", maxWidth: "16ch" }}>How to join</h2>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.08rem", lineHeight: 1.65, color: "var(--text-body)", margin: "0 0 14px" }}>
            You don't need a special background or a specific skill set. You just need to love this city and want to share it!
          </p>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.08rem", lineHeight: 1.65, color: "var(--text-body)", margin: "0 0 22px" }}>
            We're looking for Angelenos from all over the City and beyond — people who know their neighborhoods, speak their community's languages, and are proud of what Los Angeles has to offer. Think of yourself as an ambassador to the City. Beyond that, we're especially seeking people who bring:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {ASKS.map((a) => (
              <li key={a.t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, flex: "none", background: "var(--surface-sky)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={a.icon} size={17} color="var(--blue-600)" stroke={2.2} /></span>
                <span style={{ fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.5, color: "var(--text-body)" }}>{a.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Four steps to join the crew ---------------- */
function HowItWorks() {
  return (
    <section style={{ position: "relative", background: "var(--ink-900)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTO_CREW})`, backgroundSize: "cover", backgroundPosition: "center 35%", opacity: 0.28 }} />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 14 }}>How it works</div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 0.95, color: "#fff", margin: "0 0 44px", maxWidth: "20ch" }}>Four steps to join the crew</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ background: "rgba(255,255,255,0.97)", borderRadius: "var(--radius-lg)", padding: "22px", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ width: 48, height: 48, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={s.icon} size={24} color={s.color === "var(--gold-500)" ? "var(--ink-900)" : "#fff"} stroke={2.3} /></span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--line-200)" }}>{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 18, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 0 6px" }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 14, lineHeight: 1.5, color: "var(--text-body)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, color: "rgba(255,255,255,0.75)", marginTop: 24, maxWidth: "70ch" }}>To apply you'll need to be 18 or older, proficient in English, available for 10+ non-consecutive shifts, and present in a host location during the Games.</p>
      </div>
    </section>
  );
}

/* ---------------- City Volunteers vs LA28 ---------------- */
function Difference() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--coral-500)", marginBottom: 14 }}>Two ways to serve</div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2rem,4.5vw,3.2rem)", lineHeight: 0.95, color: "var(--ink-900)", margin: "0 0 40px", maxWidth: "22ch" }}>How are we different from LA28?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {DIFF.map((d, i) => (
            <div key={d.title} style={{ display: "grid", gridTemplateColumns: i % 2 ? "1.3fr 1fr" : "1fr 1.3fr", gap: 0, borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)", background: "var(--surface-card)" }} className="of-grid-2">
              <div style={{ minHeight: 220, order: i % 2 ? 2 : 1, backgroundImage: `url(${d.photo})`, backgroundSize: "cover", backgroundPosition: "center 32%" }} />
              <div style={{ padding: "clamp(22px,3vw,34px)", order: i % 2 ? 1 : 2, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: `5px solid ${d.accent}` }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: d.accent, marginBottom: 8 }}>{d.tag}</span>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 900, fontSize: 24, letterSpacing: "-0.02em", color: "var(--ink-900)", margin: "0 0 10px" }}>{d.title}</h3>
                <p style={{ fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Signup ---------------- */
function Signup() {
  const [done, setDone] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const valid = name.trim() && email.trim();
  return (
    <section id="signup" style={{ background: "var(--grad-dusk)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-300)", marginBottom: 14 }}>Stay in the loop</div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5vw,3.4rem)", lineHeight: 0.92, color: "#fff", margin: "0 0 16px" }}>Be first to know when we open</h2>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.08rem", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", margin: "0 auto 30px", maxWidth: "48ch" }}>
          Be among the first to hear when applications open in early 2027. Join our interest list today to receive program updates, volunteer opportunities, and ways to get involved before the Games.
        </p>
        <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-xl)", padding: "clamp(22px,3vw,32px)", boxShadow: "var(--shadow-lg)", textAlign: "left" }}>
          {done ? (
            <div style={{ textAlign: "center", padding: "12px 6px" }}>
              <div style={{ width: 70, height: 70, borderRadius: "50%", background: "var(--grad-sunset)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}><Icon name="check" size={34} color="#fff" stroke={3} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 28, lineHeight: 0.95, color: "var(--ink-900)", margin: "0 0 8px" }}>You're on the list</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>Thanks, {name.split(" ")[0]}! See you out there, neighbor.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (valid) setDone(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ODS.Input label="Name" placeholder="Maya Ortiz" value={name} onChange={(e) => setName(e.target.value)} required />
              <ODS.Input label="Email address" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <ODS.Button variant="gold" size="lg" pop block type="submit" iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />} style={{ opacity: valid ? 1 : 0.55, pointerEvents: valid ? "auto" : "none", marginTop: 2 }}>Sign me up</ODS.Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shine LA promo (real brand banner) ---------------- */
function ShinePromo() {
  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div style={{ position: "relative" }}>
        <img src={SHINE_BANNER} alt="Shine LA — Join us as we beautify our neighborhoods! Register for the next Shine LA." style={{ width: "100%", display: "block", objectFit: "cover" }} />
      </div>
    </section>
  );
}

/* ---------------- Footer w/ city seal ---------------- */
function OFooter() {
  return (
    <div style={{ position: "relative" }}>
      <SiteFooter go={() => oScroll("signup")} />
      <img src={CITY_SEAL} alt="City of Los Angeles seal" style={{ position: "absolute", right: "clamp(20px,5vw,48px)", bottom: 18, width: 46, height: 46, opacity: 0.85 }} className="cv-hide-sm" />
    </div>
  );
}

function LandingOfficial() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--surface-page)" }}>
      <OHeader />
      <HeroVideo />
      <Intro />
      <MayorQuote />
      <Why />
      <HowToJoin />
      <HowItWorks />
      <Difference />
      <Signup />
      <ShinePromo />
      <OFooter />
    </div>
  );
}

window.LandingOfficial = LandingOfficial;

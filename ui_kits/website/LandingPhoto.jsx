// City Volunteers LA 2028 — Photo-driven landing (Editorial layout)
const PDS = window.CityVolunteersLA2028DesignSystem_ea1102;
const PHOTO = "img_7554-mrfbugxu.jpeg";

/* ---- shared content ---- */
const P_STATS = [
  { v: "5K–10K", l: "Volunteers", c: "var(--magenta-500)" },
  { v: "25,000+", l: "Shifts", c: "var(--coral-500)" },
  { v: "15", l: "Council districts", c: "var(--gold-600)" },
];
const P_WHY = [
  { icon: "heart", color: "var(--magenta-500)", h: "Be part of history", b: "Step into a once-in-a-generation moment for your city." },
  { icon: "graduation-cap", color: "#D9481F", h: "Build lasting skills", b: "Training that outlasts the closing ceremony." },
  { icon: "users", color: "var(--purple-500)", h: "Find your people", b: "Find community and join a network of amazing Angelenos." },
  { icon: "accessibility", color: "#1F8A41", h: "A Games for All", b: "Find meaningful roles for every ability and skill set." },
];

function pScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: "smooth" });
}

/* ---- Slim header (no text over hero) ---- */
function PHeader() {
  return (
    <header style={{ position: "relative", zIndex: 20, boxShadow: "0 1px 0 var(--line-200)", backgroundColor: "#FFAC00" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px clamp(20px,5vw,48px)", display: "flex", alignItems: "center" }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: 0 }}>
          <img src="assets/photos/la-city-seal.png" alt="City of Los Angeles seal" style={{ width: 40, height: 40, flex: "none", objectFit: "contain" }} />
          <span style={{ textAlign: "left", lineHeight: 1 }}>
            <span style={{ display: "block", fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: 20, letterSpacing: "-0.01em", color: "var(--ink-900)" }}>
              <span style={{ color: "var(--blue-700)", fontSize: 24 }}>CITY OF LOS ANGELES</span>
            </span>
            <span style={{ display: "block", fontFamily: "anton", fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-900)", marginTop: 4 }}>2028 GAMES VOLUNTEERS</span>
          </span>
        </button>
        <div style={{ marginLeft: "auto" }}>
          <img src="assets/photos/mayor-karen-bass-logo.png" alt="Mayor Karen Bass" style={{ height: 40, width: "auto", display: "block" }} />
        </div>
      </div>
    </header>
  );
}

/* ---- 1. Full-bleed hero video (autoplay, muted, loop, no controls) ---- */
function FullBleedVideo() {
  return (
    <section style={{ position: "relative", width: "100%", height: "clamp(420px, 78vh, 860px)", background: "#000", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${PHOTO})`, backgroundSize: "cover", backgroundPosition: "center 60%" }} />
      <iframe
        src="https://www.youtube-nocookie.com/embed/Bw3qj2MDimQ?autoplay=1&mute=1&loop=1&playlist=Bw3qj2MDimQ&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0"
        title="City Volunteers 2028 hero video"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: "absolute", top: "50%", left: "50%", width: "100vw", height: "56.25vw", minHeight: "100%", minWidth: "177.78vh", transform: "translate(-50%,-50%) scale(1.3)", border: "none", pointerEvents: "none" }}
      ></iframe>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
    </section>
  );
}

/* ---- 6. Google Form link ---- */
function SignupMini({ bg, onDark, kicker }) {
  return (
    <section id="signup" style={{ padding: "clamp(56px,8vw,104px) clamp(20px,5vw,48px)", backgroundColor: "#1C1AE7" }}>
      <div style={{ margin: "0 auto", textAlign: "center", maxWidth: 720 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: kicker, marginBottom: 14 }}></div>
        <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5vw,3.4rem)", lineHeight: 0.92, color: "#FFFFFF", margin: "0 0 14px" }}>SIGN UP FOR UPDATES</h2>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.08rem", lineHeight: 1.6, color: "#FFFFFF", margin: "0 auto 28px" }}>Be among the first to hear when applications open in early 2027. Join our interest list today to receive program updates, volunteer opportunities, and ways to get involved before the games.</p>
        <a href="https://forms.gle/JZcxauPu1vnmJ35K6" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <PDS.Button variant="gold" size="lg" pop iconRight={<Icon name="arrow-right" size={20} color="var(--ink-900)" />}>Sign me up</PDS.Button>
        </a>
      </div>
    </section>
  );
}

/* ---- Compact banner: applications open early 2027 ---- */
function OpenBanner() {
  return (
    <div style={{ background: "var(--blue-600)", padding: "16px clamp(20px,5vw,48px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: "-0.01em", fontSize: "clamp(1rem,2.2vw,1.3rem)", color: "#fff", textAlign: "center" }}>
        Applications open early 2027 — be the first to know!
      </span>
      <a href="https://forms.gle/JZcxauPu1vnmJ35K6" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <PDS.Button variant="gold" pop size="sm">Sign up for updates</PDS.Button>
      </a>
    </div>
  );
}

/* ---- shared kicker + heading ---- */
function Kicker({ children, color, center }) {
  return <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color, marginBottom: 14, textAlign: center ? "center" : "left" }}>{children}</div>;
}
function Display({ children, color = "var(--ink-900)", size = "clamp(2rem,4.5vw,3.4rem)", center, max = "20ch", style = {} }) {
  return <h2 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: size, lineHeight: 0.95, letterSpacing: "-0.01em", color, margin: 0, maxWidth: max, marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0, textAlign: center ? "center" : "left", ...style }}>{children}</h2>;
}

/* ============================================================
   2. INTRO + BLURB
   ============================================================ */
function Intro() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(24px,3.5vw,52px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <Kicker color="var(--coral-500)" center></Kicker>
        <h1 style={{ fontFamily: "Anton, Arial Narrow, sans-serif", textTransform: "uppercase", fontSize: 100, lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 auto", textAlign: "center" }}>Be the face of Los Angeles</h1>
        <p style={{ fontFamily: "var(--font-text)", fontSize: 24, lineHeight: 1.65, color: "var(--text-body)", margin: "20px auto 0" }}>In 2028, LA welcomes the world for the Olympic and Paralympic Games. Thousands of City Volunteers will help - welcoming newcomers, neighbors, and visitors from across the region and the world.</p>
      </div>
      <div style={{ maxWidth: 1080, margin: "32px auto 0", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
        <img src="assets/photos/volunteers-sunset.jpg" alt="City Volunteers crew" style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center 30%", maxHeight: 420, paddingBottom: 0, marginBottom: 0 }} />
      </div>
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center", marginTop: 8 }}>
        <Kicker color="var(--coral-500)" center></Kicker>
        <Display center size="clamp(2.4rem,5.5vw,4.2rem)" style={{ fontSize: 48, marginTop: 15 }}>JOIN THE 2028 CREW</Display>
        <p style={{ fontFamily: "var(--font-text)", fontSize: "1.18rem", lineHeight: 1.65, color: "var(--text-body)", margin: "20px auto 0" }}>The City of Los Angeles is recruiting 5,000 City Volunteers for the 2028 Olympic and Paralympic Games - the warm, knowledgeable face opf the city in public spaces, transit corridors, and neighborhood celebration sites. We bring wayfinding, accessibility support, information, and public joy that makes every visitor feel at home and every Angeleno feel connected to the games.</p>
      </div>
    </section>
  );
}

/* ============================================================
   5. WHY VOLUNTEER
   ============================================================ */
function Why() {
  return (
    <section style={{ background: "#E4F0FF", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)", textAlign: "center" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Kicker color="var(--magenta-500)" center></Kicker>
        <Display center max="16ch" color="#000000">WHY VOLUNTEER?</Display>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginTop: 44 }}>
          {P_WHY.map((w) => (
            <div key={w.h} style={{ background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "24px 22px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <span style={{ width: 50, height: 50, borderRadius: 14, background: w.color, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={w.icon} size={25} color="#fff" stroke={2.2} /></span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "15px 0 7px" }}>{w.h}</h3>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Full-width photo quote band ---- */
function QuoteBand() {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: "clamp(480px, 82vh, 820px)", backgroundImage: "url(assets/photos/mayor-podium-coliseum.webp)", backgroundSize: "cover", backgroundPosition: "center 30%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,18,48,0) 65%, rgba(11,18,48,0.7) 100%)" }} />
      <div style={{ position: "relative", maxWidth: 920, width: "100%", margin: "0 auto", padding: "clamp(16px,2vw,22px) clamp(24px,4vw,44px)", marginBottom: "clamp(20px,3vw,32px)", background: "rgba(255,255,255,0.96)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "clamp(1rem,1.8vw,1.2rem)", lineHeight: 1.5, color: "var(--ink-900)", margin: "0 0 10px" }}>
          The 2028 Games are an opportunity to reimagine our infrastructure, strengthen community resilience, and expand opportunity for all Angelenos — a true 'Games for All'. This is my vision for the 2028 Games <span style={{ fontSize: 19.2 }}>—</span> an LA made better for all Angelenos.
        </p>
        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 14, color: "var(--blue-700)" }}>Mayor Karen Bass</div>
      </div>
    </section>
  );
}

/* ---- Shine LA promo ---- */
function ShinePromo() {
  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(56px,8vw,100px) clamp(20px,5vw,48px)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "clamp(28px,4vw,52px)", alignItems: "center" }}>
        <div>
          <Kicker color="var(--gold-600)"></Kicker>
          <Display max="18ch">Join a Shine LA day</Display>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.05rem", lineHeight: 1.65, color: "var(--text-body)", margin: "18px 0 0" }}>
            Want to start making an impact today? Join Shine LA, our monthly volunteer initative that helps beautify neighborhoods while building the spirit that will welcome the world in 2028.
          </p>
        </div>
        <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
          <img src="assets/photos/shine-la-logo.png" alt="Shine LA" style={{ width: "100%", display: "block", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}

function LandingPhoto() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--surface-page)" }}>
      <PHeader />
      <FullBleedVideo />
      <Intro />
      <OpenBanner />
      <QuoteBand />
      <Why />
      <FourStepsToJoin bg="#FFF9F1" />
      <OpenBanner />
      <HowAreWeDifferent bg="#E4F0FF" />
      <SignupMini bg="var(--grad-sunset)" kicker="rgba(11,18,48,0.6)" />
      <ShinePromo />
    </div>
  );
}

window.LandingPhoto = LandingPhoto;

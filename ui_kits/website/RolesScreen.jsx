// City Volunteers LA 2028 — Roles browser screen
const RolesDS = window.CityVolunteersLA2028DesignSystem_ea1102;

const ALL_ROLES = [
  { title: "Transit Wayfinder", cat: "Wayfinding", phase: "Olympic Games", loc: "Greater Los Angeles", status: { tone: "green", label: "Open", dot: true }, icon: "map-pin", body: "Direct arriving crowds from Metro stations to venue gates." },
  { title: "Celebration Site Host", cat: "Hospitality", phase: "Olympic Games", loc: "All council districts", status: { tone: "gold", label: "Filling fast", solid: true }, icon: "megaphone", body: "Welcome neighbors at watch-party and festival activations." },
  { title: "Accessibility Guide", cat: "Accessibility", phase: "Paralympic Games", loc: "Greater Los Angeles", status: { tone: "green", label: "Open", dot: true }, icon: "accessibility", body: "Support visitors of all abilities with mobility and sensory needs." },
  { title: "City Media Center Aide", cat: "Media", phase: "Olympic Games", loc: "Downtown LA", status: { tone: "blue", label: "Limited", dot: true }, icon: "building", body: "Welcome press and storytellers covering the Games." },
  { title: "Accreditation Assistant", cat: "Operations", phase: "Olympic Games", loc: "Greater Los Angeles", status: { tone: "green", label: "Open", dot: true }, icon: "ticket", body: "Credential and check in the city volunteer workforce." },
  { title: "Neighborhood Greeter", cat: "Hospitality", phase: "Year-round", loc: "All council districts", status: { tone: "green", label: "Open", dot: true }, icon: "heart", body: "Build third spaces for connection in your own community." },
  { title: "Language Liaison", cat: "Wayfinding", phase: "Olympic Games", loc: "LAX & transit hubs", status: { tone: "gold", label: "Filling fast", solid: true }, icon: "languages", body: "Help international visitors in one of LA's 200+ languages." },
  { title: "Youth Corps Lead", cat: "Operations", phase: "Year-round", loc: "Priority communities", status: { tone: "purple", label: "Leadership", dot: true }, icon: "users", body: "Mentor foster-youth and college-corps volunteers." },
];

const FILTERS = ["Wayfinding", "Hospitality", "Accessibility", "Media", "Operations"];

function RoleCard({ r, go }) {
  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--line-200)", borderRadius: "var(--radius-lg)", padding: "22px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: 13, background: "var(--surface-sky)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
          <Icon name={r.icon} size={24} color="var(--blue-600)" stroke={2.2} />
        </div>
        <RolesDS.Badge tone={r.status.tone} solid={r.status.solid} dot={r.status.dot}>{r.status.label}</RolesDS.Badge>
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 19, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 0 6px" }}>{r.title}</h3>
        <p style={{ fontFamily: "var(--font-text)", fontSize: 14.5, lineHeight: 1.55, color: "var(--text-body)", margin: 0 }}>{r.body}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.04em", color: "var(--text-muted)", textTransform: "uppercase" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="map-pin" size={14} color="var(--text-muted)" />{r.loc}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="calendar" size={14} color="var(--text-muted)" />{r.phase}</span>
      </div>
      <div style={{ borderTop: "1px solid var(--line-100)", paddingTop: 14, marginTop: "auto" }}>
        <RolesDS.Button variant="primary" size="sm" block onClick={() => go("apply")} iconRight={<Icon name="arrow-right" size={16} color="#fff" />}>Apply for this role</RolesDS.Button>
      </div>
    </div>
  );
}

function RolesScreen({ go }) {
  const [phase, setPhase] = React.useState("Olympic Games");
  const [active, setActive] = React.useState([]);
  const toggle = (f) => setActive((a) => a.includes(f) ? a.filter((x) => x !== f) : [...a, f]);
  const shown = ALL_ROLES.filter((r) => r.phase === phase && (active.length === 0 || active.includes(r.cat)));

  return (
    <div>
      <section style={{ background: "var(--surface-sky)", padding: "clamp(48px,6vw,80px) clamp(20px,5vw,48px) clamp(32px,4vw,48px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue-600)", marginBottom: 14 }}>Volunteer Roles</div>
          <h1 style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "clamp(2.4rem,6vw,4.5rem)", lineHeight: 0.92, color: "var(--ink-900)", margin: 0 }}>Find your shift</h1>
          <p style={{ fontFamily: "var(--font-text)", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--text-body)", maxWidth: "52ch", marginTop: 16 }}>
            We welcome people of all abilities, including those with disabilities. Be 18+, available for 10 non-consecutive shifts, and ready to welcome the world.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--surface-page)", padding: "clamp(28px,4vw,44px) clamp(20px,5vw,48px) clamp(64px,8vw,104px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <RolesDS.Tabs tabs={["Olympic Games", "Paralympic Games", "Year-round"]} value={phase} onChange={setPhase} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", margin: "26px 0 32px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginRight: 4 }}>Filter</span>
            {FILTERS.map((f) => <RolesDS.Tag key={f} selected={active.includes(f)} onClick={() => toggle(f)}>{f}</RolesDS.Tag>)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 22 }}>
            {shown.map((r) => <RoleCard key={r.title} r={r} go={go} />)}
          </div>
          {shown.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", fontFamily: "var(--font-text)", color: "var(--text-muted)" }}>No roles match those filters yet — check back soon.</div>
          )}
        </div>
      </section>
    </div>
  );
}

window.RolesScreen = RolesScreen;

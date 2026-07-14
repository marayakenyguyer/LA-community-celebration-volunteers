// City Volunteers LA 2028 — Website kit app shell & router
function App() {
  const [route, setRoute] = React.useState("home");
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: "auto" }); };

  let Screen = window.HomeScreen;
  if (route === "roles") Screen = window.RolesScreen;
  else if (route === "journey") Screen = window.JourneyScreen;
  else if (route === "apply") Screen = window.ApplyScreen;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--surface-page)" }}>
      <SiteHeader route={route} go={go} />
      <main style={{ flex: 1 }}>
        <Screen go={go} />
      </main>
      <SiteFooter go={go} />
    </div>
  );
}

window.App = App;

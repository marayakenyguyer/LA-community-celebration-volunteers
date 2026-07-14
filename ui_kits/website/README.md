# Website UI Kit — City Volunteers LA 2028

A high-fidelity, interactive recreation of the City Volunteer marketing website. Open `index.html` and click through:

- **Home** — full-bleed sunset hero, mission stats band (ink), the five Volunteer Missions, the larger-vision pillars, and a gradient CTA band.
- **Roles** — tabbed by Games phase (Olympic / Paralympic / Year-round), filterable by category, with status badges and per-role apply CTAs.
- **Journey** — the 4-step volunteer journey on a rainbow timeline spine (Apply → Selection → Gear Up → Games Time).
- **Apply** — the full application form (composing Input, Select, Checkbox, Switch) with a sticky requirements aside and a success state.

## Structure
- `index.html` — loads React, Babel, the design-system bundle, then each screen file in order; renders `App`.
- `Icon.jsx` — curated inlined Lucide icon set → `window.Icon`.
- `SiteChrome.jsx` — `SiteHeader`, `SiteFooter`, `RainbowBar`, `Wordmark`.
- `HomeScreen.jsx`, `RolesScreen.jsx`, `JourneyScreen.jsx`, `ApplyScreen.jsx` — one screen each, exported to `window`.
- `App.jsx` — route state + scroll-to-top, mounts header/screen/footer.

## Composition
Screens compose the design-system primitives (`Button`, `Card`, `Stat`, `Badge`, `Tag`, `Tabs`, `Input`, `Select`, `Checkbox`, `Switch`) from `window.CityVolunteersLA2028DesignSystem_ea1102` — they are not re-implemented here. All color/type/spacing comes from `styles.css` tokens.

> Recreation, not production code: interactions are faked in local state and content is representative sample copy drawn from the program overview.

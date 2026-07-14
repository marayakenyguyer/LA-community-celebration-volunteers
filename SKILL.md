---
name: city-volunteers-la2028-design
description: Use this skill to generate well-branded interfaces and assets for the City of Los Angeles City Volunteer Program (LA 2028 Olympic & Paralympic Games), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file; it `@import`s all tokens and fonts.
- `tokens/` — colors, typography, spacing, effects (radii/shadows/motion), fonts.
- `guidelines/*.card.html` — visual specimens (color, type, spacing, brand).
- `components/<group>/` — React primitives (Button, Input, Select, Checkbox, Switch, Stat, Card, Badge, Tag, Avatar, Tabs). After the bundle is built, read them from `window.CityVolunteersLA2028DesignSystem_ea1102`.
- `ui_kits/website/` — the full marketing site (Home, Roles, Journey, Apply) showing the brand in use.
- `assets/photos/` — real volunteer photography.

## Brand in one breath
LA sunset over a clear-sky city. Civic **blue** + marigold **gold**, with coral/magenta/purple/green/cyan carnival accents and signature **rainbow gradient** bars + **sun-arc** rings. Display type is **Anton** (ultra-bold condensed CAPS); UI is **Archivo**; reading is **Public Sans**; data/kickers are **DM Mono**. Pill buttons, capsule badges, friendly radii, a hard "sticker pop" shadow for emphasis. Voice: warm, civic, plain-spoken — "neighbors welcoming neighbors", "A Games for All". No emoji.

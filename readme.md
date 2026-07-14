# City Volunteers LA 2028 — Design System

The brand and UI system for the **City of Los Angeles · City Volunteer Program** for the 2028 Olympic & Paralympic Games. Run out of the Mayor's office, the program will recruit and deploy **5,000–10,000 volunteers** to complement LA28 — serving as the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites across all council districts.

> Building a generation of civic commitment — one welcome, one direction, one connection at a time.

These are **not** security or event staff. City Volunteers are *neighbors welcoming neighbors* — wayfinding, accessibility support, information, and civic energy that makes every visitor feel at home in LA. The program grows from ShineLA's foundation and is inspired by Paris 2024's 5,300 city volunteers.

## Sources this system was built from
- **`uploads/City of LA Volunteer Overview.pdf`** — the partnership one-pager. Source of mission copy, the three partner tracks (Workforce, Training & Skills, Funding), the volunteer missions, the larger-vision pillars, and the headline stats (5K–10K volunteers, 25,000+ shifts).
- **`uploads/IMG_2380 (1).JPG`** — real photograph of the City of LA "Kick It In The Park" volunteer crew at sunset (blue & purple Mayor's-office tees). Copied to `assets/photos/volunteers-sunset.jpg` and used as the home hero. *The HEIC photos in uploads could not be decoded in-browser — see Caveats.*
- **Reference screenshots** (`uploads/Screenshot 2026-06-26 …`) — the public **LA28** volunteer site and **FIFA World Cup 2026** volunteer pages, used only as *vibe* reference for the energy (bold condensed headlines, hot-pink banner, rainbow gradient arcs, big crowds). No official marks were reproduced.

> **IP note:** This system is an **original** identity for the City program. It deliberately does **not** use the Olympic rings, the LA28 wordmark, or any FIFA mark — all protected. The sun-arc mark and "City Volunteers" lockup here are original.

---

## CONTENT FUNDAMENTALS — how we write

**Voice:** Warm, civic, and direct. We sound like a proud neighbor inviting you in — never like a permit office, never corporate.

- **Person:** Speak to the reader as **"you"**, and speak as **"we" / "the City."** "We're recruiting…", "Tell us about you."
- **Casing:** Display headlines are **ALL CAPS** (the stadium voice). Body and UI use normal sentence case. Mono kickers/eyebrows are UPPERCASE with wide tracking.
- **Tone:** Energetic but plain-spoken. Short, active sentences. Lead with the human benefit ("Your city. Your shift. Your moment."), then the logistics.
- **Recurring phrases:** *"A Games for All", "neighbors welcoming neighbors", "the face of LA", "one welcome, one direction, one connection."*
- **Inclusion is explicit, not decorative:** we name accessibility and priority communities (foster youth, second-chance, veterans, college corps) directly and warmly.
- **Numbers carry weight:** big stats are a core storytelling device — set them huge in the display face (5K–10K, 25,000+).
- **No jargon:** never "leverage synergies", "mandatory eligibility criteria", "stakeholders." Say "be 18 or older", "show up", "help out".
- **Emoji:** none. The energy comes from type, color, and gradients — not emoji.

Examples — **we say** vs. **not**:
- ✅ "Neighbors welcoming neighbors. Come be the face of LA." ❌ "Applicants must satisfy all mandatory eligibility criteria."
- ✅ "A Games for All. Your city, your shift, your moment." ❌ "Leverage synergies to maximize volunteer engagement."

---

## VISUAL FOUNDATIONS

**The idea:** an LA sunset over a clear-sky city — civic blue + a marigold sun, with coral/magenta dusk, jacaranda purple and palm green as the carnival accents. Daylight-bright, optimistic, and unmistakably Los Angeles.

**Color**
- **Primary** civic/sky **blue** `#1A6CE7`; **secondary** marigold **gold** `#FFB200`. Text is a near-black midnight blue `#0B1230`, never pure black on light.
- **Accents** (use one per moment, not all at once): coral `#FF6B3D`, magenta `#FF2D8B`, jacaranda purple `#7B3FF2`, palm green `#2FB457`, ocean cyan `#2FD0D6`.
- **Signature gradients** are the brand's heartbeat: `--grad-sunset` (gold→coral→magenta), `--grad-sky` (blue→ocean), `--grad-dusk` (blue→purple→magenta), and `--grad-rainbow` (the full LA arc). Gradients appear as the **rainbow bar** atop headers/footers, on hero text fills, and as concentric **sun-arc** radial rings in dark sections.
- Surfaces: warm off-white page `#FFF9F2`, white cards, sky-tint `#E6F0FF` and sun-tint `#FFF4D6` section bands, and **ink** `#0B1230` for high-drama bands (stats, journey hero, footer).

**Type**
- **Display — Anton:** ultra-bold condensed caps, line-height ~0.9, the "stadium headline." Used huge (clamp 3.5–8rem).
- **UI/subheads — Archivo:** the workhorse; black 900 for stat numbers & subheads, 700 for buttons, 600 for nav.
- **Reading — Public Sans:** civic long-form body at 16/1.65 (a nod to the US-government workhorse face — fitting for a city program).
- **Kicker/data — DM Mono:** uppercase eyebrows, stat labels, metadata; tracked at 0.14–0.18em.

**Spacing & layout:** 8px rhythm; max content width 1240px; generous section padding (clamp 3–7rem). Cards laid out in responsive `auto-fill` grids with `gap`, never inline flow.

**Backgrounds:** full-bleed photography (warm, sunlit, real crowds) under a dark blue gradient scrim for hero; flat color/tint bands elsewhere; radial sun-arc rings as the recurring graphic device. No noise/grain, no busy patterns.

**Corner radii:** soft and friendly — `md 14px` for inputs, `lg 22px` for cards, **pill 999px** for buttons, tags and badges (the program loves capsules).

**Cards:** two looks — (1) soft daylight elevation (`shadow-md`, 1px hairline border, optional 6px gradient accent bar on top); (2) the **sticker pop** — 2px ink outline + a hard offset shadow (`shadow-pop`) that presses down on click. Pop is for marketing emphasis; soft is the default.

**Shadows:** soft, warm, low-contrast for daylight depth; plus the hard black "sticker" drop for pop elements. No long blurry purple glows.

**Borders:** hairlines `#D8DCE8`; bold **2px ink** outlines for pop/sticker elements and the journey nodes.

**Animation & states:** quick (120–200ms) ease-out transitions. Buttons brighten ~6% on hover; **pop** buttons translate down 3px and drop their shadow on press (a physical "press"). Interactive cards lift 4px on hover. A gentle spring (`--ease-spring`) is reserved for toggles and small overshoots. No infinite/decorative loops.

**Transparency & blur:** minimal — a dark gradient scrim over hero photos; translucent white chips on ink backgrounds. No frosted-glass everywhere.

**Imagery vibe:** warm, golden-hour, candid, diverse crowds and groups — real Angelenos, sunlit, joyful. Color, not B&W.

---

## ICONOGRAPHY

- **System:** **Lucide** (lucide.dev) — clean, friendly, **2px rounded** stroke on a 24px grid. It matches the civic, approachable tone and pairs well with the bold display type. *Substitution flag: the source program has no published icon set, so Lucide is our chosen standard.*
- **Delivery:** a curated subset is **inlined** as SVG path data in `ui_kits/website/Icon.jsx` (Lucide is ISC-licensed) so screens render with zero CDN dependency and exact control. To use the full set in production, install `lucide-react` and keep the 2px stroke.
- **Usage:** icons sit in soft 13–14px-radius tinted tiles (sky-tint on light, translucent white on ink). Stroke weight 2–2.4. Color from tokens (blue/purple/gold), never multicolor. Decorative-only icons get no label; functional icons always pair with text.
- **Emoji:** never used as icons or anywhere in the UI.
- **The sun-arc mark** is bespoke (CSS radial gradient + conic ray mask), not an icon-font glyph — see `guidelines/brand-wordmark.card.html`.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css` (Anton, Archivo, Public Sans, DM Mono via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows, motion).

**Foundation specimen cards** — `guidelines/*.card.html` (Design System tab)
- Colors: Civic Blue, Marigold, Sunset Accents, Ink & Neutrals, Signature Gradients
- Type: Display (Anton), UI (Archivo), Reading (Public Sans), Kicker (DM Mono)
- Spacing: Spacing Scale, Radii & Shadows
- Brand: Wordmark, The Sun-Arc Motif, Voice & Tone

**Components** — `components/<group>/` (namespace `window.CityVolunteersLA2028DesignSystem_ea1102`)
- `forms/` — **Button**, **Input**, **Select**, **Checkbox**, **Switch**
- `display/` — **Stat**, **Card**, **Badge**, **Tag**, **Avatar**
- `navigation/` — **Tabs** (underline & pill)

**UI kit** — `ui_kits/website/`
- The City Volunteers marketing site: **Home** (hero, mission stats, volunteer missions, larger vision, CTA), **Roles** (tabbed, filterable browser), **Journey** (4-step timeline), **Apply** (full application form → success). Interactive via `index.html`.

**Other**
- `assets/photos/volunteers-sunset.jpg` — hero photograph.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

## Using a component (in @dsCard HTML or a consuming project)
```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Stat, Badge, Tabs } = window.CityVolunteersLA2028DesignSystem_ea1102;
</script>
```

## Caveats
- **HEIC photos** in `uploads/` (IMG_0242, IMG_1011, IMG_1102, IMG_7556) can't be decoded in the browser, so only the JPG was used. Re-upload them as JP/PNG to add more real imagery.
- **Fonts are Google-Fonts substitutes.** Anton/Archivo are the closest free matches to the custom LA28-style condensed type, not the official program faces. Swap in licensed brand fonts if you have them.

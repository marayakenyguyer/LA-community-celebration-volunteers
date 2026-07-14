# Handoff: Volunteer Landing (Photo / Editorial layout)

## Overview
Public information landing page for the City of Los Angeles's 2028 Games Volunteers program (LA28 Olympics/Paralympics). Announces the volunteer program, explains how it differs from LA28's own Games Volunteers, and collects interest signups via an embedded Google Form link. Linked to from LA28's own site.

## About the Design Files
The files in this bundle are **design references created in HTML/React (Babel, in-browser JSX)** — prototypes showing intended look, copy, and behavior. They are not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (its actual framework, build system, component library, routing, forms/analytics setup) using its established patterns — or, if no environment exists yet, choose the most appropriate framework and implement there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and layout are final/approved. Recreate pixel-perfectly using the codebase's existing libraries and patterns; do not restyle.

## Files In This Bundle
- `Volunteer Landing.html` — entry page (loads React 18 + Babel standalone from CDN, then the JSX below)
- `LandingPhoto.jsx` — the page itself: header, hero video, intro, banners, quote band, "Why volunteer," Shine LA promo, signup
- `FourStepsToJoin.jsx` — reusable "How to Join" section (4-step process cards)
- `HowAreWeDifferent.jsx` — reusable "City Volunteers vs LA28" comparison section
- `SiteChrome.jsx` — shared header/footer/wordmark components (footer used elsewhere in the design system; this specific page uses its own slim header, see below)
- `Icon.jsx` — inlined Lucide-derived icon set (SVG paths keyed by name)
- `colors.css`, `typography.css` — design tokens referenced via CSS custom properties throughout
- `assets/` — referenced images (city seal, mayor logo, crew photos, Shine LA banner)

Note: the live page loads these via `<script type="text/babel" src="...">` tags and a compiled design-system bundle (`_ds_bundle.js`) providing `PDS.Button` (the pill-shaped CTA button component) — not included here in compiled form. Recreate `Button` using the codebase's own button component, matching the variants referenced below (`gold`, sizes `sm`/`lg`, a `pop` boolean that adds a pressed/hover "pop" shadow effect, optional `iconRight`).

## Page Structure (top to bottom)

### 1. Header (`PHeader`)
- Sticky-style bar (not actually `position: sticky` in current code — renders once at top), background `#FFAC00` (a solid gold/marigold), bottom hairline shadow `0 1px 0 var(--line-200)`.
- Max-width 1280px container, `12px clamp(20px,5vw,48px)` padding, flex row, vertically centered.
- Left: clickable logo group (scrolls to top) — 40×40px City of LA seal image (`assets/photos/la-city-seal.png`, object-fit contain) + two-line wordmark: "CITY OF LOS ANGELES" (24px, `--font-display` Anton, uppercase, `--blue-700`) over "2028 GAMES VOLUNTEERS" (14px, font-family `anton`, letter-spacing 0.2em, uppercase, `--ink-900`, 4px margin-top).
- Right (margin-left: auto): Mayor Karen Bass logo image, 40px tall, auto width.

### 2. Full-bleed hero video (`FullBleedVideo`)
- No text overlay — video/photo only, per explicit design requirement.
- Height `clamp(420px, 78vh, 860px)`, full width, black background.
- Background image `assets/photos/volunteers-sunset.jpg` (this is a placeholder still frame; in production this should be a real video element with the same crop/position: `center 32%`), `background-size: cover`.
- Dark overlay: `rgba(11,18,48,0.32)` at rest, fades to `rgba(11,18,48,0.08)` when "playing" (0.3s transition).
- Centered circular play/pause button, 104×104px, `var(--grad-sunset)` background (linear-gradient gold→coral→magenta, 100deg), white SVG play/pause glyph, box-shadow `0 14px 40px rgba(0,0,0,0.4)`.
- Thin progress bar at the very bottom (5px tall, `rgba(255,255,255,0.22)` track, `var(--grad-sunset)` fill) that animates to 100% width over 84s while "playing" — this is a mocked progress bar; wire to real video `currentTime`/`duration` in production.
- **Behavior:** clicking the button toggles React state `playing`; in production this should play/pause an actual `<video>` element.

### 3. Intro / program blurb (`Intro`)
Background: `var(--surface-page)` (warm off-white `#FFF9F2`). Padding `clamp(52px,7vw,96px) clamp(20px,5vw,48px)`.
- Centered block, max-width 1080px:
  - H1 "Be the face of Los Angeles" — font-family `Anton, Arial Narrow, sans-serif`, uppercase, **100px** fixed size, line-height 0.95, letter-spacing -0.01em, color `--ink-900`.
  - Body paragraph (24px, `--font-text` = Public Sans, line-height 1.65, color `--text-body`): "In 2028, LA welcomes the world for the Olympic and Paralympic Games. Thousands of City Volunteers will help - welcoming newcomers, neighbors, and visitors from across the region and the world."
- Full-width-within-container photo: max-width 1080px, rounded `var(--radius-xl)`, `var(--shadow-lg)`, max-height 420px, object-fit cover. Image: `img_7554-mrfbugxu.jpeg` (uploaded crew photo).
- Second centered block (margin-top 8px):
  - H2 "JOIN THE 2028 CREW" — `--font-display`, uppercase, 48px, line-height 0.95, `--ink-900`, margin-top 15px.
  - Body paragraph (1.18rem/1.65 line-height, `--text-body`): "The City of Los Angeles is recruiting 5,000 City Volunteers for the 2028 Olympic and Paralympic Games - the warm, knowledgeable face of the city in public spaces, transit corridors, and neighborhood celebration sites. We bring wayfinding, accessibility support, information, and public joy that makes every visitor feel at home and every Angeleno feel connected to the games."
    (Note: source copy has a typo "opf" that should read "of" — fix in production.)

### 4. Promo banner (`OpenBanner`) — appears 2×
Full-width bar, background solid `var(--blue-600)` (#1457C4), padding `16px clamp(20px,5vw,48px)`, flex row centered, gap 18px, wraps on small screens.
- Text: "Applications open early 2027 — be the first to know!" — `--font-display`, uppercase, letter-spacing -0.01em, `clamp(1rem,2.2vw,1.3rem)`, white.
- Button: gold variant, small, `pop`, label "Sign up for updates", wrapped in `<a href="https://forms.gle/JZcxauPu1vnmJ35K6" target="_blank" rel="noopener noreferrer">`.
- Placed once after the Intro section, once after the "How to Join" (Four Steps) section.

### 5. Quote band (`QuoteBand`)
Full-bleed photo section, min-height `clamp(480px, 82vh, 820px)`, background image `assets/photos/mayor-podium-coliseum.webp` (`background-position: center 30%`), flex column bottom-aligned content.
- Dark gradient overlay bottom-to-top: `linear-gradient(180deg, rgba(11,18,48,0) 65%, rgba(11,18,48,0.7) 100%)`.
- Quote card near the bottom: max-width 920px, white translucent background `rgba(255,255,255,0.96)`, rounded `var(--radius-xl)`, `var(--shadow-lg)`, padding `clamp(16px,2vw,22px) clamp(24px,4vw,44px)`, margin-bottom `clamp(20px,3vw,32px)`, centered text.
  - Quote text (600 weight, `clamp(1rem,1.8vw,1.2rem)`, line-height 1.5, `--ink-900`): "The 2028 Games are an opportunity to reimagine our infrastructure, strengthen community resilience, and expand opportunity for all Angelenos — a true 'Games for All'. This is my vision for the 2028 Games — an LA made better for all Angelenos."
  - Attribution (800 weight, 14px, `--blue-700`): "Mayor Karen Bass"

### 6. "Why Volunteer?" (`Why`)
Background solid `#E4F0FF` (light sky blue), padding `clamp(56px,8vw,100px) clamp(20px,5vw,48px)`, centered text, max-width 1180px.
- H2 "WHY VOLUNTEER?" — `--font-display`, uppercase, max-width 16ch, color `#000000` (pure black, an intentional override from the design-system's default ink).
- 4-column responsive grid (`repeat(auto-fit, minmax(220px, 1fr))`, gap 18px, margin-top 44px) of cards. Each card: white `--surface-card` background, `var(--radius-lg)` corners, `24px 22px` padding, `var(--shadow-sm)`, centered content, flex column.
  - Icon badge: 50×50px, 14px border-radius, colored background, centered white icon (25px, stroke 2.2).
  - Heading: 800 weight, 18px, `--ink-900`, margin `15px 0 7px`.
  - Body: 14.5px, line-height 1.55, `--text-body`.
  - Card content:
    1. Icon `heart`, color `--magenta-500` — **"Be part of history"** — "Step into a once-in-a-generation moment for your city."
    2. Icon `graduation-cap`, color `#D9481F` (dark coral, chosen for WCAG contrast — do not use `--coral-500`, too light against white icon) — **"Build lasting skills"** — "Training that outlasts the closing ceremony."
    3. Icon `users`, color `--purple-500` — **"Find your people"** — "Find community and join a network of amazing Angelenos."
    4. Icon `accessibility`, color `#1F8A41` (dark green, WCAG-safe) — **"A Games for All"** — "Find meaningful roles for every ability and skill set."

### 7. "How to Join" (`FourStepsToJoin`, reusable component, `id="how"`)
Background passed in as `#FFF9F1` on this page, padding `clamp(56px,8vw,104px) clamp(20px,5vw,48px)`, centered text, max-width 1240px.
- H2 "HOW TO JOIN" — `--font-display`, uppercase, max-width 18ch.
- Intro 2-column grid (`1.1fr 1fr`, gap `clamp(24px,4vw,52px)`, margin-top 44px, left-aligned text; collapses to 1 column under 820px via `.fsj-intro-grid` media query):
  - Left: paragraph (1.1rem, line-height 1.65) — "You don't need a special background or a specific skill set. You just need to love this city and want to share it!" ... "We're looking for Angelenos from all over the City and beyond - people who know their neighborhoods, speak their community's languages, and are proud of what Los Angeles has to offer. Think of yourself as an ambassador to the City." ... "Beyond that, we're especially seeking people who bring:" followed by a plain-text bullet list (using literal `•` characters and `<br>` tags — recreate as a proper `<ul>` in production):
    - Local knowledge of your neighborhood, transit routes, and points of interest
    - Language skills that reflect the incredible diversity of Los Angeles
    - A welcoming attitude and the ability to stay calm in busy, high-energy environments
    - A genuine commitment to giving back and contributing to the city's future
  - Right: photo, rounded `var(--radius-xl)`, `var(--shadow-lg)`, min-height 240px, image `assets/photos/crew-circle-trees.jpg`, position `center 30%`.
- 4-column card grid (`repeat(auto-fit, minmax(240px,1fr))`, gap 20px, margin-top 44px). Each card: white background, **2px solid `--ink-900` border**, `var(--shadow-pop-sm)`, `var(--radius-lg)`, 24px padding, flex column, left-aligned, gap 14px.
  - Card header row: icon badge (50×50px, 13px radius, colored) + large step number (`--font-display`, 30px, `--line-200` color, right-aligned via `justify-content: space-between`).
  - Title: 900 weight, 19px, `--ink-900`.
  - Body: 14.5px, line-height 1.55, `--text-body`.
  - **Date pill** (added for WCAG/informational clarity): mono font, 11.5px, uppercase, letter-spacing 0.08em, text color `--ink-900`, background `--surface-page`, border `1.5px solid` step's accent color, pill radius, padding `5px 12px`.
  - Steps:
    1. Icon `sparkles`, color `--blue-500` — **Application** — "Tell us who you are and how you'd like to help. About 15 minutes — no experience required." — date pill: **"Opens early 2027"**
    2. Icon `search`, color `--purple-500` — **Vetting** — "We review applications and run a background check once you accept a conditional role offer." — **"Spring–summer 2027"**
    3. Icon `graduation-cap`, color `#D9481F` (dark coral, WCAG-safe) — **Selection & Onboarding** — "Selected volunteers get an official offer, then complete training built for their role." — **"Late 2027–early 2028"**
    4. Icon `star`, color `--gold-500` (icon rendered in `--ink-900`, not white, for contrast against gold) — **Deployment** — "Pick up your kit and take your post as the face of LA across the city." — **"Summer 2028"**

### 8. "How Are We Different From LA28?" (`HowAreWeDifferent`, reusable component, `id="diff"`)
Background passed in as `#E4F0FF` on this page, padding `clamp(56px,8vw,104px) clamp(20px,5vw,48px)`, centered text, max-width 1080px.
- H2 "How are we different from LA28?" — `--font-display`, uppercase, color `#000000` (pure black override), margin `0 auto 14px`.
- Intro paragraph (1.12rem, line-height 1.65, `--text-body`): "The City Volunteer Program and LA28's Games Volunteers are two distinct teams that work side by side. One serves the city; one serves the venues. Many Angelenos apply to both."
- 2-column comparison grid (1fr 1fr, gap 22px, margin-top 40px; collapses to 1 column via `.hawd-grid-2` media query). Each card: white background, `1px solid var(--line-200)` border, `var(--shadow-md)`, `var(--radius-lg)`, overflow hidden, centered text.
  - Top accent stripe: 6px tall, solid accent color.
  - Body padding `26px 26px 28px`:
    - Kicker (mono, 11px, letter-spacing 0.14em, uppercase, accent color): card tag ("City of LA" / "LA28")
    - Title (900 weight, 24px, letter-spacing -0.02em, `--ink-900`, margin-bottom 18px)
    - Bulleted list, left-aligned within centered card, gap 16px: each item is a 32×32px icon badge (9px radius, colored background matching card accent, white icon 17px stroke 2.2) + text (14.5px, line-height 1.5, `--text-body`).
  - **Card 1 — "City Volunteer Program"** (tag "City of LA", accent `--blue-500`):
    - Icon `map-pin` — "Out in the city — transit hubs, public spaces and neighborhood celebration sites across all 15 council districts."
    - Icon `handshake` — "Welcoming, wayfinding, accessibility support and civic energy. Not security or event staff."
    - Icon `building` — "Run by the City of Los Angeles. Complements — and is separate from — the official Games workforce."
  - **Card 2 — "Games Volunteers"** (tag "LA28", accent `#8A5700` — dark gold, WCAG-safe; do not use `--gold-500`/`--gold-700` which fail contrast for this use):
    - Icon `ticket` — "Inside official competition venues and Games operations."
    - Icon `users` — "Roles defined and managed by the LA28 organizing committee."
    - Icon `calendar` — "Apply through LA28 — applications open July 14."

### 9. Signup (`SignupMini`, `id="signup"`)
Background solid `#1C1AE7` (bright blue-violet), padding `clamp(56px,8vw,104px) clamp(20px,5vw,48px)`, centered, max-width 720px.
- H2 "SIGN UP FOR UPDATES" — `--font-display`, uppercase, `clamp(2.2rem,5vw,3.4rem)`, line-height 0.92, white.
- Paragraph (1.08rem, line-height 1.6, white): "Be among the first to hear when applications open in early 2027. Join our interest list today to receive program updates, volunteer opportunities, and ways to get involved before the games."
- Button: gold variant, large, `pop`, right icon `arrow-right` (20px, color `--ink-900`), label "Sign me up", wrapped in `<a href="https://forms.gle/JZcxauPu1vnmJ35K6" target="_blank" rel="noopener noreferrer">`.
- **This is not an embedded form** — it is a link out to an external Google Form. Recreate as a button/link to whatever form URL production uses (or embed the actual form UI if the codebase supports it).

### 10. Shine LA promo (`ShinePromo`)
Background `var(--surface-page)`, padding `clamp(56px,8vw,100px) clamp(20px,5vw,48px)`, max-width 1180px, 2-column grid (`1.1fr 1fr`, gap `clamp(28px,4vw,52px)`, vertically centered).
- Left: heading "Join a Shine LA day" (`--font-display`, uppercase, max-width 18ch) + paragraph (1.05rem, line-height 1.65, `--text-body`, margin-top 18px): "Want to start making an impact today? Join Shine LA, our monthly volunteer initative that helps beautify neighborhoods while building the spirit that will welcome the world in 2028." (Note: "initative" typo — should be "initiative", fix in production.)
- Right: image `assets/photos/shine-la-logo.png`, full width, rounded `var(--radius-xl)`, `var(--shadow-lg)`.

## Interactions & Behavior
- Hero video play/pause button toggles a `playing` boolean; overlay darkness and progress-bar animation respond to it. **In production, wire to a real `<video>` element's play/pause and `timeupdate` events** rather than the current fake 84-second CSS transition.
- Header logo (seal + wordmark) is clickable, scrolls smoothly to page top.
- Banner and Signup CTA buttons open the Google Form in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
- No client-side form fields anywhere on this page — all conversion happens via the external Google Form link.
- No other navigation, no route changes; this is a single static long-scroll page.

## Responsive Behavior
- `.pp-grid-2`, `.hawd-grid-2`, `.fsj-intro-grid` collapse from 2 columns to 1 column under a `max-width: 820px` media query (defined inline in `Volunteer Landing.html`'s `<style>` block).
- `.cv-footer-grid` (if a footer is added) collapses 4 columns → 2 under the same breakpoint.
- All headline sizes use `clamp()` for fluid scaling; several are pinned to fixed px sizes per direct user edits (100px hero H1, 48px "Join the 2028 Crew," 50px icon badges) — preserve these fixed values exactly, do not make them fluid.

## Design Tokens

### Colors (see `colors.css` for full token set)
- Brand blue: `--blue-700 #0B3A8C`, `--blue-600 #1457C4`, `--blue-500 #1A6CE7` (primary)
- Gold: `--gold-600 #E08A00`, `--gold-500 #FFB200` (secondary/CTA)
- Accents: `--coral-500 #FF6B3D`, `--magenta-500 #FF2D8B`, `--purple-500 #7B3FF2`, `--green-500 #2FB457`
- Ink/neutrals: `--ink-900 #0B1230` (primary text), `--ink-700 #2A3358` (body text), `--ink-500 #5A627F` (muted), `--line-200 #D8DCE8` (borders)
- Surfaces: `--surface-page #FFF9F2` (warm off-white), `--surface-card #FFFFFF`
- Gradients: `--grad-sunset` (gold→coral→magenta, 100deg — used on hero play button and gold CTA hover treatments), `--grad-rainbow` (used in footer/header rail elsewhere in the design system, not on this specific page)
- **Custom one-off hex values used on this page for WCAG contrast** (deliberately NOT the nearest named token): `#D9481F` (dark coral), `#1F8A41` (dark green), `#8A5700` (dark gold) — used specifically where a colored icon badge or accent needed 3:1+ contrast against a white/light background that the standard `-500`/`-600` tokens didn't clear. Also solid overrides: header background `#FFAC00`, Why-section background `#E4F0FF`, banner background `var(--blue-600)`, signup background `#1C1AE7`.

### Typography (see `typography.css`)
- `--font-display`: Anton, Arial Narrow, sans-serif — all uppercase headlines
- `--font-sans`: Archivo — UI labels, card headings
- `--font-text`: Public Sans — body copy
- `--font-mono`: DM Mono — kickers/date pills/eyebrows
- Standard scale variables (`--fs-h1` etc.) exist but this page pins several sizes directly in px (100px, 48px, 24px body) per explicit edits — preserve exactly.

### Spacing / Radius / Shadow (via CSS custom properties, values not enumerated here — inspect `styles.css`/token files for `--radius-lg`, `--radius-xl`, `--radius-pill`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-pop-sm`)

## Assets
- `assets/photos/la-city-seal.png` — City of LA seal, header
- `assets/photos/mayor-karen-bass-logo.png` — Mayor's office wordmark/logo, header
- `assets/photos/volunteers-sunset.jpg` — hero background still (replace with real video asset)
- `img_7554-mrfbugxu.jpeg` — user-uploaded crew photo, Intro section
- `assets/photos/mayor-podium-coliseum.webp` — Quote band background
- `assets/photos/crew-circle-trees.jpg` — How to Join section photo
- `assets/photos/shine-la-logo.png` — Shine LA promo image
- `Icon.jsx` — inlined icon set (heart, graduation-cap, users, accessibility, sparkles, search, star, map-pin, handshake, building, ticket, calendar, arrow-right, globe) — Lucide-derived SVG paths; use the codebase's own icon library with equivalent glyphs if this exact set isn't available.

## Known Copy Issues to Fix in Production
- "the warm, knowledgeable face **opf** the city" → "of"
- "our monthly volunteer **initative**" → "initiative"
- The `HowAreWeDifferent` card 2 bullet says "applications open July 14" — reconcile with the page's own banner/signup copy which says "early 2027"; this looks like stale/inconsistent placeholder copy and should be confirmed with stakeholders before shipping.

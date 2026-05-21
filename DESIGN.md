# SYXRS WRLD — DESIGN.md

## 1) Visual Theme & Atmosphere
- **Style direction:** Hybrid of cinematic dark (ElevenLabs-like) + athletic minimal (Nike-like).
- **Mood:** Nighttime, premium, high-contrast, product-first, urban performance.
- **Density:** Medium; bold hero typography with breathing room around key CTAs.

## 2) Color Palette & Roles
- `--bg-base: #09090b` → global canvas
- `--bg-mid: #111113` → section transition tone
- `--bg-surface: #171317` → primary cards/panels
- `--bg-surface-2: #1f171c` → secondary elevated surfaces
- `--accent-red: #8f0e19` → primary brand accent
- `--accent-red-soft: #b31224` → hover/emphasis glow
- `--text-primary: #f3f3f5` → major headings
- `--text-muted: #9a9aa3` → support copy

## 3) Typography Rules
- **Headlines:** uppercase, heavy weight (800–900), tight leading.
- **Section labels/eyebrows:** uppercase with extended tracking.
- **Body copy:** neutral sans, medium contrast, readable line-height.

## 4) Component Stylings
- **Panels/Cards:** `.surface-panel` with soft glass highlight + red-tinted ambient shadow.
- **Interactive depth:** `.depth-card` for perspective tilt and hover lift.
- **Buttons:**
  - Primary = white fill / black text / slight scale on hover.
  - Secondary = dark translucent with subtle border and red hover tint.
- **Inputs:** dark capsule fields with low-contrast borders and strong focus clarity.

## 5) Layout Principles
- Max content width around `7xl`.
- Major sections use rounded containers and consistent edge rhythm.
- Product/media remains dominant visual anchor in each viewport.

## 6) Depth & Elevation
- Ambient multi-layer gradients behind content.
- Panel hierarchy defined by border alpha + inner highlights + soft drop shadows.
- Float/parallax motion remains subtle; never distracting from product content.

## 7) Motion System
- Entrance: smooth fade + slight vertical lift.
- Hover: micro-tilt and lift on premium surfaces.
- Ambient: slow background drift (`hero-parallax`) and subtle floating (`float-soft`).
- Motion should feel deliberate and premium; avoid jitter or excessive bounce.

## 8) Do / Don’t
### Do
- Keep red accents intentional and focused.
- Preserve strong readability and hierarchy.
- Keep 3D motion subtle and performance-safe.

### Don’t
- Re-introduce bright purple-heavy gradients.
- Over-animate every element at once.
- Flatten all cards to the same visual depth.

## 9) Responsive Behavior
- Mobile-first stacking for hero and configurator sections.
- Preserve tap target comfort for all controls.
- Reduce motion intensity naturally on small screens.

## 10) Agent Prompt Guide
- "Use SYXRS WRLD DESIGN.md tokens and classes (`surface-panel`, `depth-card`, `hero-parallax`, `float-soft`) to keep cinematic dark + athletic minimal consistency."

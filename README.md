# Nourhan Mamdouh — Developer Portfolio

A production-ready, single-page personal portfolio for **Nourhan Mamdouh**, a
Full-Stack Developer specializing in **Laravel** and **Angular**. Built with
Angular 20 standalone components, a dark/green design system, and zero heavy
runtime dependencies.

---

## Overview

A modern, minimal, recruiter-friendly portfolio designed to be attached to job
applications for Full-Stack, Laravel and Angular roles. It is fast, responsive,
accessible and SEO-friendly, and deploys as a static site to GitHub Pages,
Netlify or Vercel — no backend required.

## Features

- **Single-page layout** with Navigation, Hero, About, Skills, Featured
  Projects, Experience, Development Approach, Contact and Footer sections.
- **Dark theme** with a subtle green accent, defined entirely through CSS
  variables (no repeated hard-coded colors).
- **Fixed navigation** — transparent initially, dark on scroll, with
  active-section highlighting (via `IntersectionObserver`) and a responsive
  **mobile hamburger menu**.
- **Reusable project cards** driven by a typed `Project` data model.
- **Fully responsive** — tested at 375 / 390 / 768 / 1024 / 1440px with no
  horizontal overflow.
- **Accessible** — semantic HTML, correct heading hierarchy, skip link, visible
  keyboard focus, `aria` labels, and no hover-only interactions.
- **SEO-ready** — title, meta description and Open Graph / Twitter tags.
- **Lightweight** — ~55 kB gzipped initial transfer, CSS-only visual effects.

## Tech Stack

| Layer      | Tools                                             |
| ---------- | ------------------------------------------------- |
| Framework  | Angular 20 (standalone components, new control flow) |
| Language   | TypeScript 5.9                                    |
| Styling    | SCSS with CSS custom properties                   |
| Fonts      | Space Grotesk (headings), DM Sans (body)          |
| Tooling    | Angular CLI, esbuild application builder          |

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Then open <http://localhost:4200>.

## Production Build

```bash
npm run build
```

The optimized output is written to `dist/nourhan-portfolio/`.

## Deployment

The build is a static bundle and works on any static host:

- **Netlify / Vercel** — build command `npm run build`, publish directory
  `dist/nourhan-portfolio/browser`.
- **GitHub Pages** — build, then publish the contents of
  `dist/nourhan-portfolio/browser`. If serving from a project subpath
  (e.g. `https://user.github.io/portfolio/`), set the base href during build:

  ```bash
  ng build --base-href /portfolio/
  ```

## Screenshots

Add project screenshots under `src/assets/` and reference them from
`src/app/core/data/projects.data.ts` via each project's `image` field, e.g.
`image: 'assets/easy-deal.png'`. When no image is set, the card shows a neutral
placeholder — no broken images.

> _Add a hero/overview screenshot here once deployed._

## Project Structure

```text
src/
  index.html                     # SEO + Open Graph meta, fonts
  main.ts                        # Bootstraps the standalone AppComponent
  styles.scss                    # Design tokens (CSS variables) + shared classes
  app/
    app.component.ts             # Root shell composing all sections
    core/
      config/portfolio.config.ts # Single source for name, email, links, SEO
      models/                    # Project & content TypeScript interfaces
      data/                      # Projects + section content (edit here)
    components/
      navbar/                    # Fixed nav, active highlighting, mobile menu
      hero/                      # Hero + code-card
      about/                     # About + statistics
      skills/                    # Four skill categories
      projects/                  # Projects section
      project-card/              # Reusable project card
      experience/                # Timeline
      approach/                  # Development approach (4 steps)
      contact/                   # Contact + links
      footer/                    # Footer + back-to-top
```

## Customization

Everything personal lives in **one file** —
[`src/app/core/config/portfolio.config.ts`](src/app/core/config/portfolio.config.ts):

```ts
export const portfolioConfig = {
  name: 'Nourhan Mamdouh',
  email: 'YOUR_EMAIL',       // e.g. 'name@example.com'
  github: 'YOUR_GITHUB',     // username or full URL
  linkedin: 'YOUR_LINKEDIN', // vanity slug or full URL
  // ...
};
```

Replace the `YOUR_EMAIL`, `YOUR_GITHUB` and `YOUR_LINKEDIN` placeholders. The
config safely turns usernames into full `mailto:` / profile URLs, and while a
placeholder is still present, the corresponding link points to `#contact`
instead of a broken URL.

- **Projects** — edit `src/app/core/data/projects.data.ts`. Add real `github`,
  `live` and `image` values when you have them.
- **Section content** (skills, experience, approach, stats, nav) — edit
  `src/app/core/data/content.data.ts`.
- **Colors / fonts / spacing** — edit the CSS variables in `src/styles.scss`.

## A Note on Client/Proprietary Projects

> **Production/client projects are represented through case studies and
> screenshots. Proprietary source code should not be published without
> authorization.**

The **Easy Deal** entry is a production, client/company-owned project. It is
presented as a case study (screenshots + selected implementation details) and
does **not** require its source repository to be public. No fabricated GitHub
repositories or live-demo URLs are included anywhere in this portfolio — add
only links and assets you are authorized to publish.

## License

Personal portfolio content © Nourhan Mamdouh. Reuse the code structure freely
for your own portfolio; replace the personal content and project data.

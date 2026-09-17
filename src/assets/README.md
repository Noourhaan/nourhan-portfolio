# Project screenshots

Drop your project screenshots here using these exact filenames — the project
cards are already wired to them (see `src/app/core/data/projects.data.ts`):

| File                  | Project                         |
| --------------------- | ------------------------------- |
| `easy-deal.png`       | Easy Deal                       |
| `e-invoice.png`       | E-Invoice & VAT (ZATCA)         |
| `olumira.png`         | Olumira                         |

Until a file is present, the card shows a neutral "Preview coming soon"
placeholder (and if an image fails to load, it falls back to that placeholder —
no broken images). `.jpg`/`.webp` also work — just update the extension in the
`image` field of `projects.data.ts` to match.

Optimize images before committing (aim for < 300 KB each; ~1600px wide is plenty).

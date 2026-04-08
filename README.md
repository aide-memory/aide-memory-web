# AIDE Memory Landing Page

This is the official landing page for [AIDE Memory](https://aide-memory.dev) — persistent, path-scoped memory for AI coding agents.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Build for Production

```bash
npm run build
npm run start
```

## Structure

- `pages/index.mdx` — Landing page (hero, problem, how it works)
- `pages/docs/quick-start.mdx` — Installation and usage guide
- `pages/docs/features.mdx` — Feature overview
- `pages/docs/comparison.mdx` — vs claude-mem and engram
- `pages/docs/architecture.mdx` — System architecture
- `pages/docs/faq.mdx` — Frequently asked questions

## Theme

The site uses [Nextra](https://nextra.site/) with the docs theme and dark mode enabled by default.

## Deployment

The site is configured for deployment to Vercel:

```bash
git push
```

Vercel will automatically build and deploy on push.

Alternatively, use any Node.js hosting:

```bash
npm run build
npm run start
```

## License

Content is CC-BY-4.0. Code is FSL, auto-converting to Apache 2.0 after 2 years.

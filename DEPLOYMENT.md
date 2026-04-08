# AIDE Memory Landing Page — Deployment Guide

This is the official landing page for aide-memory.dev. It's a Next.js + Nextra site with dark mode enabled.

## What's Been Scaffolded

The site is fully built and ready for deployment. It includes:

- **Landing page** (`pages/index.mdx`) — Hero, problem statement, how it works
- **Documentation pages:**
  - Quick Start — Installation and basic usage
  - Features — All 8 core features
  - Comparison — vs claude-mem and engram
  - Architecture — System design and components
  - FAQ — Common questions

- **Configuration:**
  - Dark theme enabled by default
  - Nextra v3 with docs theme
  - Next.js 15 with TypeScript support
  - Fully optimized production build

## Build Status

Build succeeded with zero errors:

```
✓ Compiled successfully in 10.5s
✓ Generating static pages (10/10)
Route (pages)                  Size  First Load JS
├ ○ /                       3.44 kB         184 kB
├ ○ /docs/architecture      2.77 kB         184 kB
├ ○ /docs/comparison        2.22 kB         183 kB
├ ○ /docs/faq               4.05 kB         185 kB
├ ○ /docs/features          2.03 kB         183 kB
└ ○ /docs/quick-start       3.38 kB         184 kB
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

The site is configured for Vercel deployment. Connect via the Vercel dashboard:

1. Sign in to [vercel.com](https://vercel.com)
2. Create a new project
3. Import this repository
4. Select Next.js as the framework
5. Deploy

Vercel will automatically:
- Detect Next.js
- Run `npm install` and `npm run build`
- Deploy to a live domain
- Set up CI/CD for future pushes

### Domain Configuration

After deploying to Vercel:

1. In Vercel dashboard, go to Settings > Domains
2. Add `aide-memory.dev`
3. Vercel will provide DNS records to add to your domain registrar
4. Add those DNS records to your domain's DNS settings
5. Wait for DNS propagation (5-60 minutes)

## Alternative Deployment

Can also deploy to any Node.js hosting:

```bash
npm run build
npm start
```

Or export as static site:

```bash
npm run build
```

Output is in `.next/` directory. Can be served via any static host (Netlify, CloudFlare Pages, etc).

## Environment

- **Node version:** 18+
- **npm version:** 9+
- **Build time:** ~10 seconds
- **Site size:** ~184 KB first load JS
- **Production routes:** 10 static pages, all prerendered

## Key Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js + Nextra configuration |
| `theme.config.jsx` | Nextra theme settings (dark mode, logo, links) |
| `pages/index.mdx` | Landing page |
| `pages/docs/*.mdx` | Documentation pages |
| `pages/_app.jsx` | Custom App component for Nextra |
| `pages/_meta.js` | Navigation structure |
| `tsconfig.json` | TypeScript configuration |
| `package.json` | Dependencies (Next.js, Nextra, React) |

## What's Ready

✓ Landing page content (hero, problem, solution)
✓ Documentation (6 pages)
✓ Dark theme configured
✓ Full build passes
✓ All pages prerendered to static HTML
✓ Mobile responsive
✓ SEO meta tags
✓ GitHub links configured
✓ Production optimized

## What You Need to Do

1. **Deploy to Vercel** (recommended):
   - Push to GitHub
   - Connect via Vercel dashboard
   - Let Vercel handle the rest

2. **Configure DNS** (after Vercel deployment):
   - Add Vercel DNS records to aide-memory.dev
   - Wait for propagation

3. **Go live** — Your site will be live at aide-memory.dev

## Next Steps

After deployment:

1. Test the site at aide-memory.dev
2. Verify all pages load correctly
3. Check mobile responsiveness
4. Test links to GitHub, npm, docs
5. Share the link with your team

## Need Help?

- **Nextra docs:** https://nextra.site/
- **Next.js docs:** https://nextjs.org/
- **Vercel docs:** https://vercel.com/docs

---

**Ready to deploy!** Push to GitHub and connect via Vercel.

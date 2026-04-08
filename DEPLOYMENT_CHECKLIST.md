# AIDE Memory Web - Deployment Checklist

## Pre-Deployment (Completed)
- [x] Nextra framework scaffolded
- [x] Landing page content integrated
- [x] Dark mode configured as default
- [x] All 10 pages built successfully
- [x] Zero build errors
- [x] SEO metadata configured
- [x] GitHub links configured

## GitHub Setup
- [ ] Create GitHub repository at https://github.com/aide-memory/aide-memory-web
- [ ] Push `aide-memory-web` directory contents
- [ ] Verify repository is public (for Vercel access)

## Vercel Deployment
- [ ] Sign in to Vercel at https://vercel.com
- [ ] Click "New Project" or visit https://vercel.com/new
- [ ] Select "Import Git Repository"
- [ ] Paste GitHub repository URL
- [ ] Vercel will auto-detect Next.js
- [ ] Click "Deploy"
- [ ] Wait for build to complete (should take ~30-60 seconds)
- [ ] Get Vercel preview URL

## DNS Configuration
- [ ] Access DNS settings for aide-memory.dev domain
- [ ] Create CNAME record:
  ```
  Name: aide-memory
  Value: cname.vercel.sh
  ```
  OR follow Vercel's specific nameserver instructions
- [ ] Wait for DNS propagation (5-48 hours)
- [ ] Verify site loads at https://aide-memory.dev

## Post-Deployment
- [ ] Test landing page loads correctly
- [ ] Verify dark mode is active by default
- [ ] Check all documentation links work
- [ ] Test on mobile devices
- [ ] Verify SEO metadata displays in browser
- [ ] Set up Vercel automatic deployments (auto-enabled)

## Rollback (if needed)
- [ ] Vercel keeps deployment history
- [ ] Click "Deployments" tab in project settings
- [ ] Select previous deployment
- [ ] Click "Redeploy"

## Maintenance
- [ ] Updates to `aide-memory-web` automatically deploy on git push
- [ ] Vercel provides free SSL/TLS certificate
- [ ] No additional configuration needed
- [ ] Check Vercel analytics for traffic

## Quick Command Reference
```bash
# Local development
cd /sessions/charming-bold-franklin/aide-memory-web
npm run dev

# Local production build
npm run build && npm start

# Deploy (after pushing to GitHub)
# Automatic via Vercel webhook
```

## Support
- Vercel dashboard: https://vercel.com/dashboard
- Project settings: https://vercel.com/[team]/aide-memory-web/settings
- Documentation: https://vercel.com/docs

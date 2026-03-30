# Deploy Instructions

## Development

```bash
cd website-showcase
npm run dev
# Open http://localhost:3000
```

Routes:
- `/` — Hub/landing (pick a design)
- `/portfolio` — Clean dark portfolio
- `/corporate` — SaaS/business site
- `/interactive` — Particles + 3D effects

---

## Deploy to Vercel (recommended, 1 minute)

```bash
npm install -g vercel
cd website-showcase
vercel
```

Follow the prompts — Vercel auto-detects Next.js. Done.

Or push to GitHub and import at vercel.com/new.

---

## Deploy to Netlify

```bash
npm run build
# Build output: .next/
```

In Netlify dashboard:
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variable: `NEXT_TELEMETRY_DISABLED=1`

Or CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .next
```

---

## Deploy to a VPS / Self-host

```bash
npm run build
npm run start      # runs on port 3000
```

With PM2:
```bash
npm install -g pm2
pm2 start "npm run start" --name website-showcase
pm2 save
```

Add an Nginx reverse proxy to port 3000.

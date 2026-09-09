# Trading Education Platform — Scaffold

First build slice per the architecture proposal: schema, auth skeleton, and the
module-browse UI running on mock data (no DB/video/payments wired yet).

## What's here

- `prisma/schema.prisma` — full data model
- `lib/auth.ts` + `middleware.ts` — role-based auth (member/admin), route
  protection for `/dashboard` and `/admin` — credentials provider is stubbed,
  needs the Prisma calls uncommented once the DB is connected
- `components/IntroSequence.tsx` — the cinematic logo + 4-corner intro,
  skips itself for returning users (`localStorage`) and for
  `prefers-reduced-motion`
- `components/Navbar.tsx`, `components/ModuleCard.tsx` — first design-system
  pieces, following the dark/gold token set in `tailwind.config.ts`
- `app/page.tsx` — homepage (intro + hero + featured modules + philosophy line)
- `app/learning/page.tsx` — module browser with filter UI (not yet wired to
  actually filter — needs client state or a server action)
- `lib/mock-data.ts` — placeholder modules so the UI has something to render

## Not yet built

- Prisma client instantiation (`lib/prisma.ts`) + actual DB queries replacing
  the mock data
- Module detail page, purchase flow, Stripe integration
- Video player + interactive checkpoints (highest-risk piece — see
  architecture doc, §7.1)
- Dashboard, admin panel, events, community, channel pages
- Signup/login forms (the API route exists, the UI doesn't)

## Setup

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL, NEXTAUTH_SECRET at minimum
npm run db:push        # once DATABASE_URL points at a real Postgres instance
npm run dev
```

## Next slice

Wire `lib/prisma.ts`, replace `mock-data.ts` usage in the learning page and
homepage with real queries, and build the module detail page with the
server-side access check described in the architecture doc (§4).

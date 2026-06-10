# client-sites

Multi-tenant website platform behind [letusbuildyourwebsite.com](https://letusbuildyourwebsite.com).
One Next.js codebase, one Vercel project — every client site is data in Supabase,
resolved by the request's `Host` header.

```
                    ┌─ smithconstruction.com ──────────┐
Visitor ──> Vercel ─┼─ acmehvac.com                    ├──> ONE Next.js app
                    └─ *.sites.letusbuildyourwebsite.com┘        │
                                                                 │ src/proxy.ts reads Host header
                                                                 ▼
                                                    Supabase: sites table lookup
                                                                 ▼
                                                 render industry template + tenant content
```

## How it works

- **`src/proxy.ts`** (Next 16's middleware) rewrites every tenant host to
  `/s/<hostname>/<path>`. Subdomains of `NEXT_PUBLIC_ROOT_DOMAIN` resolve via
  `sites.subdomain`; anything else via `sites.custom_domain`.
- **`src/app/s/[domain]/`** renders the tenant: layout fetches the site row,
  applies `sites.theme` as CSS variables (`--brand`, `--brand-dark`, `--accent`),
  and pages render `pages.sections` (jsonb) through the section components in
  `src/components/sections/`. A template = a set of section components; the
  construction set is Hero, Services, Gallery, Testimonials, ServiceArea,
  Badges, About, Contact (lead form), CTA, PageHeader.
- **Leads**: the contact form posts a server action (`src/app/s/[domain]/actions.ts`)
  that inserts into `leads` and emails the owner via Resend (`src/lib/leads.ts`).
- **Caching**: site/page lookups are cached with tags (`domain:<host>`,
  `site:<siteId>`) and a 5-minute fallback revalidate. After editing content in
  Supabase, purge instantly with
  `POST /api/revalidate?secret=...&tag=site:<siteId>` — no redeploys.
- **Status gating**: `draft` → 404, `review` → renders with `noindex`,
  `live` → public (and readable by the marketing site's portfolio via the anon
  key — the only RLS policy that opens anything up).

## One-time setup

### 1. Supabase (new project — keep it separate from ernyst)

1. Create a new project at [database.new](https://database.new).
2. Run `supabase/migrations/0001_init.sql` in the SQL editor.
3. Run `supabase/seed.sql` — seeds the first construction site at subdomain
   `turner` (Turner Building Inc.). Contact info and service area are real;
   license number, years, copy, photos, and testimonials are still placeholders.
4. Create a **public storage bucket named `media`** for client photos/logos
   (then point `pages.sections` image URLs and `theme.logoUrl` at it, and drop
   the Unsplash entry from `next.config.ts`).

### 2. Vercel

1. Create a Vercel project from this repo (plan on **Pro** once clients pay —
   Hobby disallows commercial use).
2. Set the env vars from `.env.example` in Project Settings.
3. Domains → add `sites.letusbuildyourwebsite.com` **and** the wildcard
   `*.sites.letusbuildyourwebsite.com`.
4. In your DNS (wherever letusbuildyourwebsite.com is hosted), add:
   - `sites` → CNAME → `cname.vercel-dns.com`
   - `*.sites` → CNAME → `cname.vercel-dns.com`

Every site row is then instantly live at `<subdomain>.sites.letusbuildyourwebsite.com`.

### 3. Resend

1. Verify your sending domain in Resend and create an API key.
2. Set `RESEND_API_KEY` + `LEADS_FROM_EMAIL`. Lead emails go to the site's
   `business.email`; set `LEADS_NOTIFY_EMAIL` to BCC yourself.

## Local development

```bash
cp .env.example .env.local   # fill in Supabase keys
npm install
npm run dev
```

- Tenant sites: `http://turner.localhost:3000` (any `<subdomain>.localhost`
  maps to `<subdomain>.<ROOT_DOMAIN>`).
- Platform root: `http://localhost:3000`.

## Adding a client site (until the phase-3 admin exists)

1. Insert a `clients` row, then a `sites` row (`status = 'review'`) and `pages`
   rows — copy the shapes from `supabase/seed.sql`.
2. Share `<subdomain>.sites.letusbuildyourwebsite.com`, polish, flip `status`
   to `'live'`.
3. When they buy a domain: `POST /v10/projects/{projectId}/domains` on the
   Vercel API (or add it in the dashboard), set `sites.custom_domain`, have
   them point an A record at `76.76.21.21` or a CNAME at
   `cname.vercel-dns.com`. SSL is automatic.
4. Tell every client to claim their **Google Business Profile** and link the
   site — bigger local-SEO impact than anything on-page.

## Roadmap

- **Phase 2 — SEO + launch**: JSON-LD from `sites.business`, per-host
  `sitemap.xml`/`robots.txt`, service-area pages (`/concrete-contractor-fresno`),
  OG images, custom domain go-live, portfolio cards on letusbuildyourwebsite.com.
- **Phase 3 — intake + admin**: intake form → `intake_submissions`, `/admin`
  review + one-click site creation, content editor, per-client leads inbox.
- **Phase 4 — scale**: HVAC / landscaping / law templates, Claude-drafted copy
  in the intake pipeline, Stripe subscriptions.

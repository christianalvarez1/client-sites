-- Client Sites Platform — initial schema (v1)
-- Run in the Supabase SQL editor of the NEW project (separate from ernyst),
-- or via `supabase db push` if using the Supabase CLI.

-- ---------------------------------------------------------------------------
-- clients: the business owner
-- ---------------------------------------------------------------------------
create table public.clients (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text,
  phone       text,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- sites: one row per website, resolved by subdomain or custom domain
-- ---------------------------------------------------------------------------
create table public.sites (
  id             uuid primary key default gen_random_uuid(),
  client_id      uuid not null references public.clients (id) on delete cascade,
  subdomain      text not null unique
                 check (subdomain ~ '^[a-z0-9]([a-z0-9-]*[a-z0-9])?$'),
  custom_domain  text unique,
  industry       text not null default 'construction',
  status         text not null default 'draft'
                 check (status in ('draft', 'review', 'live')),
  -- { colors: { primary, primaryDark, accent }, logoUrl }
  theme          jsonb not null default '{}'::jsonb,
  -- { name, tagline, phone, email, address, serviceArea, hours, licenseNo,
  --   yearsInBusiness, socials, googleBusinessUrl }
  business       jsonb not null default '{}'::jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create index sites_custom_domain_idx on public.sites (custom_domain);

-- ---------------------------------------------------------------------------
-- pages: per-site pages rendered from sections jsonb
-- ---------------------------------------------------------------------------
create table public.pages (
  id          uuid primary key default gen_random_uuid(),
  site_id     uuid not null references public.sites (id) on delete cascade,
  slug        text not null,
  title       text not null,
  sections    jsonb not null default '[]'::jsonb,
  seo         jsonb not null default '{}'::jsonb,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (site_id, slug)
);

-- ---------------------------------------------------------------------------
-- leads: contact-form submissions per site
-- ---------------------------------------------------------------------------
create table public.leads (
  id          uuid primary key default gen_random_uuid(),
  site_id     uuid not null references public.sites (id) on delete cascade,
  name        text not null,
  phone       text not null,
  email       text,
  service     text,               -- optional "Service Needed" from the contact form
  message     text,
  created_at  timestamptz not null default now()
);

create index leads_site_id_idx on public.leads (site_id, created_at desc);

-- ---------------------------------------------------------------------------
-- intake_submissions: raw intake-form answers, pre-review (phase 3)
-- ---------------------------------------------------------------------------
create table public.intake_submissions (
  id          uuid primary key default gen_random_uuid(),
  answers     jsonb not null default '{}'::jsonb,
  status      text not null default 'new'
              check (status in ('new', 'reviewed', 'converted', 'rejected')),
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- media: Supabase Storage refs per site (gallery photos, logo)
-- ---------------------------------------------------------------------------
create table public.media (
  id          uuid primary key default gen_random_uuid(),
  site_id     uuid not null references public.sites (id) on delete cascade,
  path        text not null,      -- storage object path in the `media` bucket
  kind        text not null default 'photo'
              check (kind in ('photo', 'logo', 'other')),
  alt         text,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security: locked down by default. The Next.js app renders with
-- the service role (server only), which bypasses RLS. The only anon access
-- is read-only `sites` rows with status = 'live', for the marketing site's
-- portfolio section.
-- ---------------------------------------------------------------------------
alter table public.clients            enable row level security;
alter table public.sites              enable row level security;
alter table public.pages              enable row level security;
alter table public.leads              enable row level security;
alter table public.intake_submissions enable row level security;
alter table public.media              enable row level security;

create policy "Anon can read live sites (portfolio)"
  on public.sites for select
  to anon
  using (status = 'live');

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create trigger sites_updated_at before update on public.sites
  for each row execute function public.set_updated_at();
create trigger pages_updated_at before update on public.pages
  for each row execute function public.set_updated_at();

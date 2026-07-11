import "server-only";
import { unstable_cache } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase";
import type { NavPage, Page, Site } from "@/lib/types";

const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "sites.letusbuildyourwebsite.com";

/**
 * Cache tags:
 *   domain:<hostname>  — the host → site resolution
 *   site:<siteId>      — everything rendered for a site (pages, nav)
 *
 * Content edits go live without a redeploy via POST /api/revalidate.
 */

/**
 * Hosts are matched www-agnostically: www.example.com and example.com
 * resolve to the same site and share one cache entry / `domain:` tag,
 * so `custom_domain` rows are stored without the www. prefix.
 */
function normalizeHostname(hostname: string): string {
  const lower = hostname.toLowerCase();
  return lower.startsWith("www.") ? lower.slice("www.".length) : lower;
}

export async function getSiteByHostname(
  rawHostname: string
): Promise<Site | null> {
  const hostname = normalizeHostname(rawHostname);
  return unstable_cache(
    async () => {
      const db = supabaseAdmin();
      const query = db.from("sites").select("*").limit(1);

      const site = hostname.endsWith(`.${ROOT_DOMAIN}`)
        ? query.eq("subdomain", hostname.slice(0, -(ROOT_DOMAIN.length + 1)))
        : query.eq("custom_domain", hostname);

      const { data, error } = await site.maybeSingle();
      if (error) throw error;
      return (data as Site | null) ?? null;
    },
    ["site-by-hostname", hostname],
    { tags: [`domain:${hostname}`], revalidate: 300 }
  )();
}

export async function getPage(
  siteId: string,
  slug: string
): Promise<Page | null> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabaseAdmin()
        .from("pages")
        .select("*")
        .eq("site_id", siteId)
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return (data as Page | null) ?? null;
    },
    ["page", siteId, slug],
    { tags: [`site:${siteId}`], revalidate: 300 }
  )();
}

export async function getNavPages(siteId: string): Promise<NavPage[]> {
  return unstable_cache(
    async () => {
      const { data, error } = await supabaseAdmin()
        .from("pages")
        .select("slug, title, sort_order")
        .eq("site_id", siteId)
        .order("sort_order");
      if (error) throw error;
      return (data as NavPage[]) ?? [];
    },
    ["nav", siteId],
    { tags: [`site:${siteId}`], revalidate: 300 }
  )();
}

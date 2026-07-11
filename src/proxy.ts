import { NextRequest, NextResponse } from "next/server";

/**
 * Tenant resolution (vercel/platforms pattern): every request's Host header is
 * mapped to a site. Tenant hosts are rewritten to /s/<hostname>/<path>, which
 * the app/s/[domain] tree resolves against Supabase. The platform root domain
 * (and previews / bare localhost) fall through to the top-level app routes.
 */

export const config = {
  // Skip API routes, Next internals, the internal /s tree, and static files.
  matcher: ["/((?!api|_next|_vercel|s/|.*\\..*).*)"],
};

const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "sites.letusbuildyourwebsite.com";

export default function proxy(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = (req.headers.get("host") ?? "").toLowerCase().split(":")[0];

  // www-agnostic: www.example.com rewrites to the same /s/<hostname> path
  // (and thus the same route-cache entry) as example.com.
  if (hostname.startsWith("www.")) {
    hostname = hostname.slice("www.".length);
  }

  // Local dev: `summit.localhost:3000` behaves like `summit.<ROOT_DOMAIN>`.
  if (hostname.endsWith(".localhost")) {
    hostname = `${hostname.slice(0, -".localhost".length)}.${ROOT_DOMAIN}`;
  }

  const isPlatformHost =
    hostname === "localhost" ||
    hostname === ROOT_DOMAIN ||
    hostname.endsWith(".vercel.app");

  if (isPlatformHost) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(
    new URL(`/s/${hostname}${url.pathname}${url.search}`, req.url)
  );
}

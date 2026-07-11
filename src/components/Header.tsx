import Image from "next/image";
import Link from "next/link";
import type { NavPage, Site } from "@/lib/types";

export function Header({ site, nav }: { site: Site; nav: NavPage[] }) {
  const { business, theme } = site;
  const links = nav.filter((p) => p.slug !== "home");
  const tel = business.phone
    ? `tel:${business.phone.replace(/[^+\d]/g, "")}`
    : null;

  return (
    <header className="sticky top-0 z-40 border-b border-header-line bg-header/95 text-header-fg backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          {theme.logoUrl ? (
            <Image
              src={theme.logoUrl}
              alt={business.name}
              width={200}
              height={48}
              priority
              className="h-11 w-auto object-contain"
            />
          ) : (
            <>
              <span className="flex h-9 w-9 items-center justify-center rounded bg-accent font-bold text-on-accent">
                {business.name.charAt(0)}
              </span>
              <span className="text-lg font-bold tracking-tight">
                {business.name}
              </span>
            </>
          )}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="text-sm font-medium text-header-fg/80 transition hover:text-header-fg"
            >
              {p.title}
            </Link>
          ))}
          {tel && (
            <a
              href={tel}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-accent-dark"
            >
              {business.phone}
            </a>
          )}
        </nav>

        {/* CSS-only mobile menu */}
        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-md border border-header-line px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-md bg-header p-2 shadow-lg ring-1 ring-header-line">
            {links.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded px-3 py-2 text-sm text-header-fg/90 hover:bg-header-fg/10"
              >
                {p.title}
              </Link>
            ))}
            {tel && (
              <a
                href={tel}
                className="mt-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-on-accent"
              >
                Call {business.phone}
              </a>
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}

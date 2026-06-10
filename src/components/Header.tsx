import Image from "next/image";
import Link from "next/link";
import type { NavPage, Site } from "@/lib/types";

export function Header({ site, nav }: { site: Site; nav: NavPage[] }) {
  const { business, theme } = site;
  const links = nav.filter((p) => p.slug !== "home");

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          {theme.logoUrl ? (
            <Image
              src={theme.logoUrl}
              alt={business.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded object-contain"
            />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded bg-accent font-bold text-brand-dark">
              {business.name.charAt(0)}
            </span>
          )}
          <span className="text-lg font-bold tracking-tight">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {p.title}
            </Link>
          ))}
          {business.phone && (
            <a
              href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-brand-dark transition hover:brightness-110"
            >
              {business.phone}
            </a>
          )}
        </nav>

        {/* CSS-only mobile menu */}
        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-md border border-white/20 px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded-md bg-brand-dark p-2 shadow-lg">
            {links.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="rounded px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {p.title}
              </Link>
            ))}
            {business.phone && (
              <a
                href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-brand-dark"
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

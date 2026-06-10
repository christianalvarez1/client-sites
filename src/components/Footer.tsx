import Link from "next/link";
import type { NavPage, Site } from "@/lib/types";

export function Footer({ site, nav }: { site: Site; nav: NavPage[] }) {
  const { business } = site;
  const { address } = business;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{business.name}</h3>
          {business.tagline && <p className="mt-2 text-sm">{business.tagline}</p>}
          {business.licenseNo && (
            <p className="mt-3 text-sm">License #{business.licenseNo}</p>
          )}
          {business.socials && business.socials.length > 0 && (
            <div className="mt-3 flex gap-4 text-sm">
              {business.socials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  className="underline-offset-2 hover:text-white hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {business.phone && (
              <li>
                <a
                  href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white"
                >
                  {business.phone}
                </a>
              </li>
            )}
            {business.email && (
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </li>
            )}
            {address?.city && (
              <li>
                {[address.street, address.city, address.state, address.zip]
                  .filter(Boolean)
                  .join(", ")}
              </li>
            )}
          </ul>
          {business.hours && business.hours.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm">
              {business.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-white/60">{h.days}:</span> {h.open}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-white">Pages</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.slug === "home" ? "/" : `/${p.slug}`}
                  className="hover:text-white"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6">
          <span>
            © {year} {business.name}. All rights reserved.
          </span>
          <a
            href="https://letusbuildyourwebsite.com"
            className="hover:text-white/80"
          >
            Website by letusbuildyourwebsite.com
          </a>
        </div>
      </div>
    </footer>
  );
}

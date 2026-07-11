import Image from "next/image";
import Link from "next/link";
import type { NavPage, Site } from "@/lib/types";

const eyebrow =
  "mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent";

export function Footer({ site, nav }: { site: Site; nav: NavPage[] }) {
  const { business, theme } = site;
  const { address } = business;
  const location = [address?.street, address?.city, address?.state, address?.zip]
    .filter(Boolean)
    .join(", ");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          {theme.logoFooterUrl ? (
            <Image
              src={theme.logoFooterUrl}
              alt={business.name}
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
            />
          ) : (
            <h3 className="font-display text-lg font-bold text-footer-fg">
              {business.name}
            </h3>
          )}
          {business.tagline && (
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {business.tagline}
            </p>
          )}
          {business.socials && business.socials.length > 0 && (
            <div className="mt-4 flex gap-4 text-sm">
              {business.socials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  className="underline-offset-2 hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={eyebrow}>Pages</div>
          <ul className="space-y-2.5 text-sm">
            {nav.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.slug === "home" ? "/" : `/${p.slug}`}
                  className="transition hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={eyebrow}>Contact</div>
          <ul className="space-y-2.5 text-sm">
            {business.phone && (
              <li>
                <a
                  href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
                  className="transition hover:text-accent"
                >
                  {business.phone}
                </a>
              </li>
            )}
            {business.email && (
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="transition hover:text-accent"
                >
                  {business.email}
                </a>
              </li>
            )}
            {location && <li>{location}</li>}
          </ul>
          {business.hours && business.hours.length > 0 && (
            <ul className="mt-4 space-y-1 text-sm">
              {business.hours.map((h) => (
                <li key={h.days}>
                  <span className="opacity-70">{h.days}:</span> {h.open}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            {business.licenseNo && (
              <span className="font-semibold uppercase tracking-[0.1em]">
                Licensed &amp; Insured · CA Lic. #{business.licenseNo} ·{" "}
              </span>
            )}
            © {year} {business.name}
          </span>
          <a
            href="https://letusbuildyourwebsite.com"
            className="hover:text-accent"
          >
            Website by letusbuildyourwebsite.com
          </a>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { CtaSection, Site } from "@/lib/types";

export function Cta({ section, site }: { section: CtaSection; site: Site }) {
  const phone = site.business.phone;

  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-on-accent">
            {section.heading}
          </h2>
          {section.body && (
            <p className="mt-2 max-w-xl text-lg text-on-accent/80">
              {section.body}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={section.cta.href}
            className="rounded-lg bg-brand-dark px-7 py-3.5 font-semibold text-white transition hover:brightness-125"
          >
            {section.cta.label}
          </Link>
          {phone && (
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="rounded-lg border-2 border-on-accent/70 px-7 py-3 font-semibold text-on-accent transition hover:bg-on-accent/10"
            >
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

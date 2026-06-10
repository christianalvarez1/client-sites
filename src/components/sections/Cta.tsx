import Link from "next/link";
import type { CtaSection, Site } from "@/lib/types";

export function Cta({ section, site }: { section: CtaSection; site: Site }) {
  const phone = site.business.phone;

  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark">
            {section.heading}
          </h2>
          {section.body && (
            <p className="mt-2 max-w-xl text-lg text-brand-dark/80">
              {section.body}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={section.cta.href}
            className="rounded-md bg-brand-dark px-7 py-3.5 font-semibold text-white transition hover:brightness-125"
          >
            {section.cta.label}
          </Link>
          {phone && (
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="rounded-md border-2 border-brand-dark px-7 py-3 font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
            >
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

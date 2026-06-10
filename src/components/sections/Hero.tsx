import Image from "next/image";
import Link from "next/link";
import type { HeroSection, Site } from "@/lib/types";

export function Hero({ section, site }: { section: HeroSection; site: Site }) {
  const phone = site.business.phone;

  return (
    <section className="relative isolate flex min-h-[70vh] items-center bg-brand-dark text-white">
      {section.image && (
        <>
          <Image
            src={section.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {section.heading}
          </h1>
          {section.subheading && (
            <p className="mt-5 text-lg text-white/85 sm:text-xl">
              {section.subheading}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {section.cta && (
              <Link
                href={section.cta.href}
                className="rounded-md bg-accent px-7 py-3.5 font-semibold text-brand-dark transition hover:brightness-110"
              >
                {section.cta.label}
              </Link>
            )}
            {section.secondaryCta ? (
              <Link
                href={section.secondaryCta.href}
                className="rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                {section.secondaryCta.label}
              </Link>
            ) : (
              phone && (
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Call {phone}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

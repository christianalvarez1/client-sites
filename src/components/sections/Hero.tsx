"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HeroSection, Site } from "@/lib/types";

export function Hero({ section, site }: { section: HeroSection; site: Site }) {
  const isShowcase =
    section.variant === "showcase" || (section.slides?.length ?? 0) > 0;

  return isShowcase ? (
    <ShowcaseHero section={section} />
  ) : (
    <OverlayHero section={section} site={site} />
  );
}

function HeadingText({ section }: { section: HeroSection }) {
  return (
    <>
      {section.heading}
      {section.headingAccent && (
        <>
          {" "}
          <em className="italic text-accent">{section.headingAccent}</em>
        </>
      )}
    </>
  );
}

/** v2 layout: centered copy above a rotating image card. */
function ShowcaseHero({ section }: { section: HeroSection }) {
  const slides =
    section.slides && section.slides.length > 0
      ? section.slides
      : section.image
        ? [{ image: section.image }]
        : [];
  const canRotate = slides.length > 1;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (!canRotate || paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [canRotate, paused, slides.length]);

  const active = slides[index];

  return (
    <header className="bg-surface px-6 pt-20 text-center sm:pt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {section.eyebrow && (
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
            {section.eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-heading text-balance sm:text-5xl lg:text-6xl">
          <HeadingText section={section} />
        </h1>
        {section.subheading && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {section.subheading}
          </p>
        )}
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          {section.cta && (
            <Link
              href={section.cta.href}
              className="rounded-lg bg-accent px-7 py-3.5 font-semibold text-on-accent transition hover:bg-accent-dark"
            >
              {section.cta.label}
            </Link>
          )}
          {section.secondaryCta && (
            <Link
              href={section.secondaryCta.href}
              className="rounded-lg border border-line bg-surface px-7 py-3.5 font-semibold text-heading transition hover:border-muted"
            >
              {section.secondaryCta.label}
            </Link>
          )}
        </div>

        {slides.length > 0 && (
          <div
            className="relative mt-14 h-[clamp(320px,44vw,560px)] w-full max-w-5xl overflow-hidden rounded-t-[20px] bg-surface-alt"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((slide, i) => (
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.alt ?? ""}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover transition-opacity duration-700"
                style={{ opacity: i === index ? 1 : 0 }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />

            {(active?.tag || active?.caption) && (
              <div className="absolute bottom-6 left-7 text-left text-white drop-shadow">
                {active.tag && (
                  <div className="text-xs font-bold uppercase tracking-[0.16em] opacity-85">
                    {active.tag}
                  </div>
                )}
                {active.caption && (
                  <div className="mt-1 font-display text-xl font-semibold">
                    {active.caption}
                  </div>
                )}
              </div>
            )}

            {canRotate && (
              <>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous project"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-xl text-heading shadow-md transition hover:bg-surface"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next project"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-xl text-heading shadow-md transition hover:bg-surface"
                >
                  →
                </button>
                <div className="absolute bottom-7 right-7 flex gap-2">
                  {slides.map((slide, i) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="h-2.5 w-2.5 rounded-full transition"
                      style={{
                        background:
                          i === index ? "var(--accent)" : "rgba(255,255,255,0.55)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

/** Default layout: full-bleed image behind left-aligned copy on a dark panel. */
function OverlayHero({ section, site }: { section: HeroSection; site: Site }) {
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
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <HeadingText section={section} />
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

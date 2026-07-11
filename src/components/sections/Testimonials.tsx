import Image from "next/image";
import type { TestimonialsSection } from "@/lib/types";

export function Testimonials({ section }: { section: TestimonialsSection }) {
  if (section.variant === "featured") return <FeaturedTestimonials section={section} />;
  return <GridTestimonials section={section} />;
}

/** v2 "reviews": a large featured quote over a row of review cards. */
function FeaturedTestimonials({ section }: { section: TestimonialsSection }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        {(section.image || section.featured) && (
          <div className="mx-auto max-w-2xl text-center">
            {section.image && (
              <Image
                src={section.image}
                alt=""
                width={54}
                height={54}
                className="mx-auto h-14 w-auto"
              />
            )}
            {section.featured && (
              <>
                <p className="mt-7 font-display text-2xl font-medium leading-relaxed text-heading sm:text-3xl">
                  “{section.featured.quote}”
                </p>
                {(section.featured.name || section.featured.location) && (
                  <div className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-muted">
                    {[section.featured.name, section.featured.location]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                )}
              </>
            )}
          </div>
        )}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-7"
            >
              <div className="tracking-[3px] text-accent" aria-hidden="true">
                ★★★★★
              </div>
              <p className="flex-1 leading-relaxed text-ink">“{item.quote}”</p>
              <footer className="text-sm font-bold text-heading">
                {item.name}
                {item.location && (
                  <span className="font-medium text-muted"> · {item.location}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Default: cards on the dark brand panel. */
function GridTestimonials({ section }: { section: TestimonialsSection }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        {section.heading && (
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            {section.heading}
          </h2>
        )}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-lg bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="text-accent" aria-hidden="true">
                ★★★★★
              </div>
              <p className="mt-3 flex-1 leading-relaxed text-white/90">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-white">
                {item.name}
                {item.location && (
                  <span className="font-normal text-white/60"> — {item.location}</span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

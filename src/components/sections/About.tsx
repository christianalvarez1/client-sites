import Image from "next/image";
import type { AboutSection } from "@/lib/types";

export function About({ section }: { section: AboutSection }) {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {section.image && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
            <Image
              src={section.image}
              alt={section.heading}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
        <div>
          {section.eyebrow && (
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {section.eyebrow}
            </div>
          )}
          <h2 className="mt-3.5 font-display text-3xl font-medium leading-snug tracking-tight text-heading sm:text-4xl">
            {section.heading}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.stats && section.stats.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-10 border-t border-line pt-8">
              {section.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-medium text-heading">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

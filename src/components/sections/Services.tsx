import type { ServicesSection } from "@/lib/types";
import { ServiceIcon } from "./icons";

export function Services({ section }: { section: ServicesSection }) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="text-center">
          {section.eyebrow && (
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {section.eyebrow}
            </div>
          )}
          <h2 className="mt-3.5 font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              {section.intro}
            </p>
          )}
        </div>
        <div className="mt-13 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-line bg-card p-7 transition hover:border-accent hover:shadow-md"
            >
              <ServiceIcon name={item.icon} />
              <h3 className="mt-3.5 font-display text-xl font-semibold text-heading">
                {item.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

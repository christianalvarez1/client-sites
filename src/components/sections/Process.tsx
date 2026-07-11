import type { ProcessSection } from "@/lib/types";

export function Process({ section }: { section: ProcessSection }) {
  return (
    <section className="bg-surface-alt">
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
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, i) => (
            <div key={step.title}>
              <div className="font-display text-4xl font-medium italic leading-none text-accent">
                {i + 1}.
              </div>
              <h3 className="mt-4 text-lg font-bold text-heading">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

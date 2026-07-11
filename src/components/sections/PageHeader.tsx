import type { PageHeaderSection } from "@/lib/types";

export function PageHeader({ section }: { section: PageHeaderSection }) {
  return (
    <section className="border-b border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
          {section.heading}
        </h1>
        {section.intro && (
          <p className="mt-3 max-w-2xl text-lg text-muted">{section.intro}</p>
        )}
      </div>
    </section>
  );
}

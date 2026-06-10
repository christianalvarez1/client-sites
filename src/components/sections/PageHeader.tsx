import type { PageHeaderSection } from "@/lib/types";

export function PageHeader({ section }: { section: PageHeaderSection }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {section.heading}
        </h1>
        {section.intro && (
          <p className="mt-3 max-w-2xl text-lg text-white/80">{section.intro}</p>
        )}
      </div>
    </section>
  );
}

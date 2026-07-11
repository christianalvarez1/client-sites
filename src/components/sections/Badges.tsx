import type { BadgesSection } from "@/lib/types";

export function Badges({ section }: { section: BadgesSection }) {
  return (
    <section className="border-y border-line bg-surface-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-center sm:px-6 md:grid-cols-4">
        {section.items.map((item) => (
          <div key={item.label}>
            <div className="font-display text-3xl font-semibold text-heading">
              {item.value}
            </div>
            <div className="mt-1 text-sm font-medium uppercase tracking-wide text-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

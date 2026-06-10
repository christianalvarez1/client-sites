import type { BadgesSection } from "@/lib/types";

export function Badges({ section }: { section: BadgesSection }) {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-center sm:px-6 md:grid-cols-4">
        {section.items.map((item) => (
          <div key={item.label}>
            <div className="text-3xl font-extrabold text-brand">{item.value}</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

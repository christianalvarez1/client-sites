import type { ServicesSection } from "@/lib/types";

export function Services({ section }: { section: ServicesSection }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {section.heading}
        </h2>
        {section.intro && (
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">{section.intro}</p>
        )}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition hover:border-accent hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ServiceAreaSection, Site } from "@/lib/types";

export function ServiceArea({
  section,
  site,
}: {
  section: ServiceAreaSection;
  site: Site;
}) {
  const areas = section.areas ?? site.business.serviceArea ?? [];
  if (areas.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {section.heading}
        </h2>
        {section.intro && (
          <p className="mt-3 max-w-2xl text-lg text-zinc-600">{section.intro}</p>
        )}
        <ul className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-accent"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

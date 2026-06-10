import { LeadForm } from "@/components/LeadForm";
import type { ContactSection, Site } from "@/lib/types";

export function Contact({
  section,
  site,
  domain,
}: {
  section: ContactSection;
  site: Site;
  domain: string;
}) {
  const { business } = site;
  const { address } = business;

  return (
    <section className="bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="mt-3 text-lg text-zinc-600">{section.intro}</p>
          )}
          <ul className="mt-8 space-y-4 text-zinc-700">
            {business.phone && (
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Phone
                </span>
                <a
                  href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
                  className="text-lg font-semibold text-brand hover:underline"
                >
                  {business.phone}
                </a>
              </li>
            )}
            {business.email && (
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Email
                </span>
                <a
                  href={`mailto:${business.email}`}
                  className="font-medium hover:underline"
                >
                  {business.email}
                </a>
              </li>
            )}
            {address?.city && (
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Location
                </span>
                {[address.street, address.city, address.state, address.zip]
                  .filter(Boolean)
                  .join(", ")}
              </li>
            )}
            {business.hours && business.hours.length > 0 && (
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  Hours
                </span>
                <ul className="mt-1 space-y-0.5 text-sm">
                  {business.hours.map((h) => (
                    <li key={h.days}>
                      {h.days}: {h.open}
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
          <LeadForm domain={domain} />
        </div>
      </div>
    </section>
  );
}

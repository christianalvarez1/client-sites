import { LeadForm } from "@/components/LeadForm";
import type { ContactSection, Site } from "@/lib/types";

function tel(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line bg-card text-accent">
      {children}
    </span>
  );
}

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
  const location = [address?.street, address?.city, address?.state, address?.zip]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          {section.eyebrow && (
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {section.eyebrow}
            </div>
          )}
          <h2 className="mt-3.5 font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              {section.intro}
            </p>
          )}

          <div className="mt-10 flex flex-col gap-6">
            {business.phone && (
              <a href={tel(business.phone)} className="flex items-center gap-4">
                <IconBadge>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d="M4 3 L7.5 3 L9 7 L6.8 8.5 C7.8 10.8 9.2 12.2 11.5 13.2 L13 11 L17 12.5 L17 16 C17 16.6 16.6 17 16 17 C9 16.6 3.4 11 3 4 C3 3.4 3.4 3 4 3 Z" />
                  </svg>
                </IconBadge>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Phone
                  </span>
                  <span className="text-lg font-semibold text-heading">
                    {business.phone}
                  </span>
                </span>
              </a>
            )}
            {business.email && (
              <a href={`mailto:${business.email}`} className="flex items-center gap-4">
                <IconBadge>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
                    <path d="M3 5.5 L10 11 L17 5.5" />
                  </svg>
                </IconBadge>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Email
                  </span>
                  <span className="text-lg font-semibold text-heading">
                    {business.email}
                  </span>
                </span>
              </a>
            )}
            {location && (
              <div className="flex items-center gap-4">
                <IconBadge>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <circle cx="10" cy="8.5" r="3" />
                    <path d="M10 18 C10 18 16 12.6 16 8.5 C16 5.2 13.3 2.5 10 2.5 C6.7 2.5 4 5.2 4 8.5 C4 12.6 10 18 10 18 Z" />
                  </svg>
                </IconBadge>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Location
                  </span>
                  <span className="text-lg font-semibold text-heading">{location}</span>
                </span>
              </div>
            )}
            {business.hours && business.hours.length > 0 && (
              <div className="flex items-center gap-4">
                <IconBadge>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <circle cx="10" cy="10" r="7.5" />
                    <path d="M10 5.5 L10 10 L13 12" />
                  </svg>
                </IconBadge>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                    Hours
                  </span>
                  <span className="text-sm text-heading">
                    {business.hours.map((h) => `${h.days} ${h.open}`).join(" · ")}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
          <LeadForm domain={domain} services={section.services} />
        </div>
      </div>
    </section>
  );
}

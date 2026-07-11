import type { Site, TrustBarSection } from "@/lib/types";

export function TrustBar({
  section,
  site,
}: {
  section: TrustBarSection;
  site: Site;
}) {
  const areas = section.areas ?? site.business.serviceArea ?? [];
  if (!section.label && areas.length === 0) return null;

  return (
    <div className="border-y border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm tracking-wide text-muted">
        {section.label && (
          <span className="font-bold uppercase tracking-[0.14em] text-accent">
            {section.label}
          </span>
        )}
        {section.label && areas.length > 0 && (
          <span aria-hidden="true"> &nbsp;·&nbsp; </span>
        )}
        {areas.join(" · ")}
      </div>
    </div>
  );
}

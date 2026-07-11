import type { Section, Site } from "@/lib/types";
import { About } from "./About";
import { Badges } from "./Badges";
import { Contact } from "./Contact";
import { Cta } from "./Cta";
import { Faq } from "./Faq";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { PageHeader } from "./PageHeader";
import { Process } from "./Process";
import { ServiceArea } from "./ServiceArea";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { TrustBar } from "./TrustBar";

const ROOT_DOMAIN =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "sites.letusbuildyourwebsite.com";

/** The hostname a site is served from — used by forms to resolve the tenant. */
function siteHostname(site: Site): string {
  return site.custom_domain ?? `${site.subdomain}.${ROOT_DOMAIN}`;
}

/**
 * Renders pages.sections (jsonb) through the industry template's section
 * components. Unknown section types are skipped so a bad row can't take a
 * whole page down.
 */
export function SectionRenderer({
  site,
  sections,
}: {
  site: Site;
  sections: Section[];
}) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <Hero key={i} section={section} site={site} />;
          case "trustBar":
            return <TrustBar key={i} section={section} site={site} />;
          case "pageHeader":
            return <PageHeader key={i} section={section} />;
          case "services":
            return <Services key={i} section={section} />;
          case "gallery":
            return <Gallery key={i} section={section} />;
          case "process":
            return <Process key={i} section={section} />;
          case "testimonials":
            return <Testimonials key={i} section={section} />;
          case "faq":
            return <Faq key={i} section={section} />;
          case "serviceArea":
            return <ServiceArea key={i} section={section} site={site} />;
          case "badges":
            return <Badges key={i} section={section} />;
          case "about":
            return <About key={i} section={section} />;
          case "contact":
            return (
              <Contact
                key={i}
                section={section}
                site={site}
                domain={siteHostname(site)}
              />
            );
          case "cta":
            return <Cta key={i} section={section} site={site} />;
          default:
            return null;
        }
      })}
    </>
  );
}

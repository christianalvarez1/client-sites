export type SiteStatus = "draft" | "review" | "live";

export interface Theme {
  colors?: {
    /** Primary brand color (headers, footer, buttons). */
    primary?: string;
    /** Darker shade of primary for hover states / dark panels. */
    primaryDark?: string;
    /** Accent color for CTAs and highlights. */
    accent?: string;
  };
  logoUrl?: string;
}

export interface Business {
  name: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  /** Cities / areas served — also feeds phase-2 local-SEO pages. */
  serviceArea?: string[];
  hours?: { days: string; open: string }[];
  licenseNo?: string;
  yearsInBusiness?: number;
  socials?: { label: string; url: string }[];
  googleBusinessUrl?: string;
}

export interface Site {
  id: string;
  client_id: string;
  subdomain: string;
  custom_domain: string | null;
  industry: string;
  status: SiteStatus;
  theme: Theme;
  business: Business;
}

export interface PageSeo {
  title?: string;
  description?: string;
}

export interface Page {
  id: string;
  site_id: string;
  slug: string;
  title: string;
  sections: Section[];
  seo: PageSeo;
  sort_order: number;
}

/** Minimal page info used to build site navigation. */
export interface NavPage {
  slug: string;
  title: string;
  sort_order: number;
}

// ---------------------------------------------------------------------------
// Sections — the building blocks stored in pages.sections (jsonb).
// A template is just the set of components that knows how to render these.
// ---------------------------------------------------------------------------

export interface HeroSection {
  type: "hero";
  heading: string;
  subheading?: string;
  image?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface PageHeaderSection {
  type: "pageHeader";
  heading: string;
  intro?: string;
}

export interface ServicesSection {
  type: "services";
  heading: string;
  intro?: string;
  items: { title: string; description: string; icon?: string }[];
}

export interface GallerySection {
  type: "gallery";
  heading: string;
  intro?: string;
  items: { image: string; title: string; location?: string; tag?: string }[];
}

export interface TestimonialsSection {
  type: "testimonials";
  heading: string;
  items: { quote: string; name: string; location?: string }[];
}

export interface ServiceAreaSection {
  type: "serviceArea";
  heading: string;
  intro?: string;
  /** Falls back to business.serviceArea when omitted. */
  areas?: string[];
}

export interface BadgesSection {
  type: "badges";
  items: { label: string; value: string }[];
}

export interface AboutSection {
  type: "about";
  heading: string;
  paragraphs: string[];
  image?: string;
}

export interface ContactSection {
  type: "contact";
  heading: string;
  intro?: string;
}

export interface CtaSection {
  type: "cta";
  heading: string;
  body?: string;
  cta: { label: string; href: string };
}

export type Section =
  | HeroSection
  | PageHeaderSection
  | ServicesSection
  | GallerySection
  | TestimonialsSection
  | ServiceAreaSection
  | BadgesSection
  | AboutSection
  | ContactSection
  | CtaSection;

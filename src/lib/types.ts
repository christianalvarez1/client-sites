export type SiteStatus = "draft" | "review" | "live";

export interface Theme {
  colors?: {
    /** Primary brand color (dark bars, buttons on the default template). */
    primary?: string;
    /** Darker shade of primary for hover states / dark panels. */
    primaryDark?: string;
    /** Accent color for CTAs and highlights. */
    accent?: string;
    /** Darker accent for hover states (falls back to a derived shade). */
    accentDark?: string;
    /** Text/icon color on accent fills (defaults to the dark brand). */
    onAccent?: string;
    /** Primary page background. */
    surface?: string;
    /** Alternating section background. */
    surfaceAlt?: string;
    /** Card background sitting on a surface. */
    surfaceCard?: string;
    /** Hairline / card border color. */
    border?: string;
    /** Heading text color. */
    heading?: string;
    /** Body copy color. */
    ink?: string;
    /** Muted text (labels, captions). */
    muted?: string;
    /** Header bar background + foreground (defaults to the dark brand bar). */
    headerBg?: string;
    headerFg?: string;
    headerBorder?: string;
    /** Footer bar background + foreground. */
    footerBg?: string;
    footerFg?: string;
  };
  fonts?: {
    /** Heading typeface: the sans default, or the serif display face. */
    heading?: "sans" | "serif";
  };
  /** Header logo (horizontal lockup works best). */
  logoUrl?: string;
  /** Optional footer logo; footer falls back to the business name when unset. */
  logoFooterUrl?: string;
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
  eyebrow?: string;
  heading: string;
  /** Rendered italic + accent, appended to the heading (e.g. "ground up."). */
  headingAccent?: string;
  subheading?: string;
  /** "overlay" = full-bleed image behind text; "showcase" = text + image card. */
  variant?: "overlay" | "showcase";
  /** Single background/showcase image (static mode). */
  image?: string;
  /** Rotating slides — when present, the showcase image becomes a carousel. */
  slides?: { image: string; alt?: string; tag?: string; caption?: string }[];
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface TrustBarSection {
  type: "trustBar";
  /** Accented lead-in, e.g. "Serving the South Bay". */
  label?: string;
  /** Areas listed after the label — falls back to business.serviceArea. */
  areas?: string[];
}

export interface PageHeaderSection {
  type: "pageHeader";
  heading: string;
  intro?: string;
}

export interface ServicesSection {
  type: "services";
  eyebrow?: string;
  heading: string;
  intro?: string;
  /** icon is a named glyph from the icon registry (see sections/icons.tsx). */
  items: { title: string; description: string; icon?: string }[];
}

export interface GallerySection {
  type: "gallery";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { image: string; title: string; location?: string; tag?: string }[];
}

export interface ProcessSection {
  type: "process";
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: { title: string; description: string }[];
}

export interface TestimonialsSection {
  type: "testimonials";
  eyebrow?: string;
  heading?: string;
  /** "grid" = cards only; "featured" = big pull-quote above the cards. */
  variant?: "grid" | "featured";
  /** Logo mark shown above the featured quote. */
  image?: string;
  featured?: { quote: string; name?: string; location?: string };
  items: { quote: string; name: string; location?: string }[];
}

export interface FaqSection {
  type: "faq";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { question: string; answer: string }[];
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
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  /** Inline stat counters shown under the copy. */
  stats?: { value: string; label: string }[];
}

export interface ContactSection {
  type: "contact";
  eyebrow?: string;
  heading: string;
  intro?: string;
  /** Options for the lead form's "Service Needed" dropdown. */
  services?: string[];
}

export interface CtaSection {
  type: "cta";
  heading: string;
  body?: string;
  cta: { label: string; href: string };
}

export type Section =
  | HeroSection
  | TrustBarSection
  | PageHeaderSection
  | ServicesSection
  | GallerySection
  | ProcessSection
  | TestimonialsSection
  | FaqSection
  | ServiceAreaSection
  | BadgesSection
  | AboutSection
  | ContactSection
  | CtaSection;

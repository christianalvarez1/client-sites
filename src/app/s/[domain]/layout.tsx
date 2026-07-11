import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getNavPages, getSiteByHostname } from "@/lib/tenant";
import { themeToCssVars } from "@/lib/theme";

interface Props {
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { domain } = await params;
  const site = await getSiteByHostname(decodeURIComponent(domain));
  if (!site) return {};
  return {
    title: {
      default: site.business.name,
      template: `%s | ${site.business.name}`,
    },
    description: site.business.tagline,
    // Keep review-stage sites out of search results until they go live.
    robots: site.status === "live" ? undefined : { index: false, follow: false },
  };
}

export default async function SiteLayout({ children, params }: Props) {
  const { domain } = await params;
  const hostname = decodeURIComponent(domain);
  const site = await getSiteByHostname(hostname);
  if (!site || site.status === "draft") notFound();

  const nav = await getNavPages(site.id);
  const themeStyle = themeToCssVars(site.theme);

  return (
    <div
      className="flex min-h-screen flex-col bg-surface font-sans text-ink"
      style={themeStyle}
    >
      <Header site={site} nav={nav} />
      <main className="flex-1">{children}</main>
      <Footer site={site} nav={nav} />
    </div>
  );
}

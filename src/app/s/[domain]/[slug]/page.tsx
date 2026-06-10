import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { getPage, getSiteByHostname } from "@/lib/tenant";

interface Props {
  params: Promise<{ domain: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain, slug } = await params;
  const site = await getSiteByHostname(decodeURIComponent(domain));
  if (!site) return {};
  const page = await getPage(site.id, slug);
  if (!page) return {};
  return {
    title: page.seo.title ?? page.title,
    description: page.seo.description,
  };
}

export default async function SitePage({ params }: Props) {
  const { domain, slug } = await params;
  const site = await getSiteByHostname(decodeURIComponent(domain));
  if (!site) notFound();

  const page = await getPage(site.id, slug);
  if (!page) notFound();

  return <SectionRenderer site={site} sections={page.sections} />;
}

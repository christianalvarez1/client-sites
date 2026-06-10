import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { getPage, getSiteByHostname } from "@/lib/tenant";

interface Props {
  params: Promise<{ domain: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain } = await params;
  const site = await getSiteByHostname(decodeURIComponent(domain));
  if (!site) return {};
  const page = await getPage(site.id, "home");
  return {
    title: page?.seo.title ?? site.business.name,
    description: page?.seo.description,
  };
}

export default async function HomePage({ params }: Props) {
  const { domain } = await params;
  const site = await getSiteByHostname(decodeURIComponent(domain));
  if (!site) notFound();

  const page = await getPage(site.id, "home");
  if (!page) notFound();

  return <SectionRenderer site={site} sections={page.sections} />;
}

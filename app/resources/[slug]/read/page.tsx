import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceReader from "@/components/resourceReader";
import { readableResources, getReadableBySlug } from "@/utils/readableResources";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return readableResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getReadableBySlug(slug);

  if (!resource) {
    return { title: "Resource not found | Landzille" };
  }

  return {
    title: `Read ${resource.title} | Landzille Resources`,
    description: resource.subtitle,
  };
}

export default async function ResourceRead({ params }: Props) {
  const { slug } = await params;
  const resource = getReadableBySlug(slug);

  if (!resource) {
    notFound();
  }

  return <ResourceReader resource={resource} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourcePreview from "@/components/resourcePreview";
import Footer from "@/components/footer";
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
    title: `${resource.title} | Landzille Resources`,
    description: resource.subtitle,
  };
}

export default async function ResourceDetail({ params }: Props) {
  const { slug } = await params;
  const resource = getReadableBySlug(slug);

  if (!resource) {
    notFound();
  }

  const others = readableResources
    .filter((r) => r.slug !== resource.slug)
    .slice(0, 4);

  return (
    <>
      <ResourcePreview resource={resource} others={others} />
      <Footer />
    </>
  );
}

import { allResources } from "@/utils/resources";
import { allMagazines } from "@/utils/e-magazines";

export interface ReadableResource {
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  pdfUrl: string;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const readableResources: ReadableResource[] = [
  ...allResources.map(
    (resource): ReadableResource => ({
      slug: slugify(resource.title),
      title: resource.title,
      subtitle: resource.subtitle,
      image: resource.image,
      pdfUrl: resource.downloadUrl,
    })
  ),
  ...allMagazines.map(
    (magazine): ReadableResource => ({
      slug: slugify(magazine.title),
      title: magazine.title,
      subtitle: magazine.subtitle,
      image: magazine.image,
      pdfUrl: magazine.downloadUrl,
    })
  ),
];

export function getReadableBySlug(slug: string): ReadableResource | undefined {
  return readableResources.find((resource) => resource.slug === slug);
}

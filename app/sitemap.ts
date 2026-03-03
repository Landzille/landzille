import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://landzille.com";

function getStaticPages(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const pages: string[] = [];

  function scanDir(dir: string, baseRoute = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!entry.name.startsWith("_") && !entry.name.startsWith("(api)")) {
          scanDir(path.join(dir, entry.name), `${baseRoute}/${entry.name}`);
        }
      } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
        pages.push(baseRoute || "/");
      }
    }
  }

  scanDir(appDir);
  return pages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = getStaticPages();

  return staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/" ? "yearly" : "monthly") as
      | "yearly"
      | "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

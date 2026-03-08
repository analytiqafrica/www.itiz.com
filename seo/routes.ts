import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export function getRobotsConfig(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}

export function getSitemapConfig(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

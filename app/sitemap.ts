import type { MetadataRoute } from "next";
import { getSitemapConfig } from "@/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapConfig();
}

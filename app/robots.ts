import type { MetadataRoute } from "next";
import { getRobotsConfig } from "@/seo/routes";

export default function robots(): MetadataRoute.Robots {
  return getRobotsConfig();
}

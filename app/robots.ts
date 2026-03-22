import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/lib/siteInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_INFO.web.url}/sitemap.xml`,
  };
}

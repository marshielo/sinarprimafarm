import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/lib/siteInfo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_INFO.web.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.web.url}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}

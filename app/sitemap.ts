import type { MetadataRoute } from "next";
import { SITE_SEO } from "@/constant/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_SEO.siteUrl;
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/Sayyad-Mehraj_Resume.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return routes;
}

import type { MetadataRoute } from "next";
import { getAllMembers } from "@/data/yudansha";

export const dynamic = "force-static";

const BASE_URL = "https://www.goju-karate.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,         lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/training`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/shihan`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/yudansha`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/gallery`,  lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/fighters`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/goju-ryu`, lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/history`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/books`,    lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/links`,    lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE_URL}/privacy`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const yudanshaRoutes: MetadataRoute.Sitemap = getAllMembers().map((m) => ({
    url: `${BASE_URL}/yudansha/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...yudanshaRoutes];
}

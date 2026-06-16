import type { MetadataRoute } from "next";
import { studio } from "@/lib/studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/studio", "/galerie", "/raten", "/kontakt", "/impressum", "/datenschutz", "/agb"];
  return routes.map((path) => ({
    url: `${studio.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/kontakt" ? 0.9 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

const ROUTES = ["/", "/realisations/early", "/formation-ia", "/a-propos", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

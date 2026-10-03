import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    sitemap: "https://mhmarketing.vercel.app/sitemap.xml",
    host: "https://mhmarketing.vercel.app"
  };
}

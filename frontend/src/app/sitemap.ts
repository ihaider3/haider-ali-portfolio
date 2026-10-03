import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mhmarketing.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/og-logo.png`,
        `${baseUrl}/images/profile/haider-portrait.jpg`,
        `${baseUrl}/images/logo/mh-marketing.jpg`
      ]
    }
  ];
}

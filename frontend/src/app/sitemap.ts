import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mhmarketing.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://mhmarketing.com/images/portfolio-bg.png",
        "https://mhmarketing.com/images/profile/haider-portrait.jpg",
        "https://mhmarketing.com/images/logo/mh-marketing.jpg"
      ]
    }
  ];
}

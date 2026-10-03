import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Haider Ali | Digital Marketing Expert | MH Marketing",
    short_name: "MH Marketing",
    description:
      "Strategic digital marketing, Meta & Google Ads, and business growth across Pakistan, UK, USA, UAE & Saudi Arabia.",
    start_url: "/",
    display: "standalone",
    background_color: "#020612",
    theme_color: "#020612",
    icons: [
      {
        src: "/images/logo/mh-marketing.jpg",
        sizes: "192x192",
        type: "image/jpeg"
      },
      {
        src: "/images/logo/mh-marketing.jpg",
        sizes: "512x512",
        type: "image/jpeg"
      }
    ]
  };
}

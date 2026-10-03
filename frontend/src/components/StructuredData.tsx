import React from "react";
import { OWNER_INFO } from "../data/portfolioData";

export const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mhmarketing.vercel.app/#person",
        "name": OWNER_INFO.name,
        "jobTitle": OWNER_INFO.title,
        "description": OWNER_INFO.bioShort,
        "telephone": OWNER_INFO.phoneClean,
        "email": OWNER_INFO.email,
        "url": "https://mhmarketing.vercel.app",
        "image": "https://mhmarketing.vercel.app/images/profile/haider-ali.png",
        "sameAs": [
          OWNER_INFO.socials.facebook,
          OWNER_INFO.socials.instagram,
          OWNER_INFO.socials.linkedin,
          OWNER_INFO.socials.youtube,
          OWNER_INFO.socials.tiktok
        ],
        "knowsAbout": [
          "Digital Marketing",
          "Meta Ads",
          "Facebook Advertising",
          "Instagram Marketing",
          "Google Ads",
          "Search Engine Optimization (SEO)",
          "Lead Generation",
          "Social Media Management",
          "Content Strategy",
          "Conversion Rate Optimization (CRO)",
          "E-Commerce Growth Marketing"
        ],
        "worksFor": {
          "@id": "https://mhmarketing.vercel.app/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Islamabad",
          "addressRegion": "Federal",
          "addressCountry": "PK"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://mhmarketing.vercel.app/#organization",
        "name": OWNER_INFO.brandName,
        "url": "https://mhmarketing.vercel.app",
        "logo": "https://mhmarketing.vercel.app/images/logo/mh-marketing.png",
        "image": "https://mhmarketing.vercel.app/images/og-image.png",
        "description": "High-impact digital marketing services helping businesses scale across Pakistan, UK, USA, UAE, and Saudi Arabia.",
        "telephone": OWNER_INFO.phoneClean,
        "email": OWNER_INFO.email,
        "priceRange": "$$",
        "openingHours": "Mo-Sa 09:00-21:00",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Islamabad",
          "addressRegion": "Federal",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.6844",
          "longitude": "73.0479"
        },
        "areaServed": [
          { "@type": "Country", "name": "Pakistan" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "32",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": {
          "@id": "https://mhmarketing.vercel.app/#person"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Cross-platform organic and paid social growth on Meta, TikTok, and LinkedIn."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Advertising (Facebook & Instagram Ads)",
                "description": "High-ROAS paid campaign setup, audience segmentation, and continuous creative testing."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads & PPC Search Campaigns",
                "description": "High-intent buyer keyword targeting, smart bidding, and conversion tracking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Search Engine Optimization (SEO)",
                "description": "On-page optimization, technical audit, and local SEO for lasting search rankings."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Intent Lead Generation",
                "description": "Sales funnel construction connecting advertising directly to qualified WhatsApp leads."
              }
            }
          ]
        },
        "sameAs": [
          OWNER_INFO.socials.facebook,
          OWNER_INFO.socials.instagram,
          OWNER_INFO.socials.linkedin,
          OWNER_INFO.socials.youtube,
          OWNER_INFO.socials.tiktok
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mhmarketing.vercel.app/#website",
        "url": "https://mhmarketing.vercel.app",
        "name": "MH Marketing — Haider Ali Digital Marketing Portfolio",
        "description": "Explore verified digital marketing case studies, certificates, and reviews by Haider Ali.",
        "publisher": {
          "@id": "https://mhmarketing.vercel.app/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "@id": "https://mhmarketing.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Haider Ali (MH Marketing) specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haider Ali specializes in Meta Ads (Facebook & Instagram), Google Search & Display Ads, Search Engine Optimization (SEO), Social Media Management, Creative Ad Strategy, and Direct-to-WhatsApp Lead Generation Funnels."
            }
          },
          {
            "@type": "Question",
            "name": "Which countries and markets does Haider Ali serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haider Ali manages multi-platform digital marketing campaigns for commercial businesses across Pakistan, United Kingdom (UK), United States (USA), Dubai / UAE, and Saudi Arabia (KSA)."
            }
          },
          {
            "@type": "Question",
            "name": "How much experience does Haider Ali have in digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Haider Ali brings over 5+ years of verified digital marketing expertise managing active commercial pages, high-ROAS paid advertising budgets, and scalable lead pipelines."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Haider Ali for an instant marketing consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach Haider Ali directly on WhatsApp at +92 331 2018 512, via email at mhmarketing04@gmail.com, or through the instant project inquiry form on his portfolio."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

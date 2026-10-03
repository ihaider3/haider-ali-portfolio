import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CinematicBackground } from "@/components/CinematicBackground";
import { LogoAnimationIntro } from "@/components/LogoAnimationIntro";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#020612",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  title: {
    default: "Haider Ali | Digital Marketing Expert | MH Marketing",
    template: "%s | MH Marketing"
  },
  description:
    "Haider Ali is an accredited Digital Marketing Expert with 5+ years of verified results in Meta Ads, Google Ads, SEO, Social Media Management, and High-ROI Lead Generation across Pakistan, UK, USA, UAE & Saudi Arabia.",
  keywords: [
    "Digital Marketing Expert",
    "Digital Marketing Expert Pakistan",
    "Digital Marketing Islamabad",
    "Haider Ali Digital Marketing",
    "MH Marketing",
    "Facebook Ads Expert Pakistan",
    "Meta Ads Specialist",
    "Instagram Marketing Pakistan",
    "Google Ads Expert",
    "SEO Expert Pakistan",
    "Lead Generation Specialist",
    "Social Media Management Pakistan",
    "Digital Marketing Consultant UAE",
    "E-commerce Growth Marketing",
    "Paid Ads ROI Specialist",
    "Digital Growth Consultant",
    "Meta Pixel CAPI Expert",
    "Performance Marketing Specialist"
  ],
  authors: [{ name: "Haider Ali", url: "https://mhmarketing.vercel.app" }],
  creator: "Haider Ali",
  publisher: "MH Marketing",
  applicationName: "MH Marketing Portfolio",
  generator: "Next.js",
  category: "Digital Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://mhmarketing.vercel.app"),
  alternates: {
    canonical: "https://mhmarketing.vercel.app",
    languages: {
      "en-US": "https://mhmarketing.vercel.app",
      "ur-PK": "https://mhmarketing.vercel.app"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Haider Ali | Digital Marketing Expert | MH Marketing",
    description:
      "Turning online attention into measurable business growth. Meta Ads, Google Ads, SEO, and High-ROI Lead Generation across Pakistan, UK, USA, UAE & Saudi Arabia.",
    url: "https://mhmarketing.vercel.app",
    siteName: "MH Marketing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/portfolio-bg.png",
        width: 1200,
        height: 630,
        alt: "MH Marketing — Haider Ali Digital Marketing Expert Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Haider Ali | Digital Marketing Expert | MH Marketing",
    description:
      "Turning online attention into measurable business growth. Meta Ads, Google Ads, SEO, and High-ROI Lead Generation across Pakistan, UK, USA, UAE & Saudi Arabia.",
    images: ["/images/portfolio-bg.png"],
    creator: "@mhmarketingglobal"
  },
  icons: {
    icon: [
      { url: "/images/logo/mh-marketing-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/mh-marketing-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/mh-marketing-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/images/logo/mh-marketing-192.png",
    apple: "/images/logo/mh-marketing-192.png"
  },
  other: {
    "geo.region": "PK-IS",
    "geo.placename": "Islamabad",
    "geo.position": "33.6844;73.0479",
    "ICBM": "33.6844, 73.0479"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth dark`}>
      <head>
        <StructuredData />
        <link rel="icon" href="/images/logo/mh-marketing-32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo/mh-marketing-192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-sans bg-[#020612] text-white selection:bg-[#D4AF37]/35 selection:text-white min-h-screen flex flex-col antialiased relative"
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
        <CinematicBackground />
        <SkipLink />
        <Header />
        <div id="main-content" className="flex-1 w-full relative z-10">
          {children}
        </div>
        <Footer />
        <FloatingWhatsApp />
        <LogoAnimationIntro />
      </body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // normal, medium, semibold, bold
  variable: "--font-dm-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triibe.us"),
  title: {
    default: "TRIIBE - Supporting the Next Generation of Change Makers",
    template: "%s | TRIIBE",
  },
  description:
    "Supporting and developing the next generation of change makers advancing food, water, shelter, health, education, or energy. Join our mentorship program and impact initiatives.",
  keywords: [
    "nonprofit",
    "changemakers",
    "mentorship",
    "social impact",
    "young leaders",
    "food security",
    "water access",
    "shelter",
    "health",
    "education",
    "energy",
  ],
  authors: [{ name: "TRIIBE" }],
  creator: "TRIIBE",
  publisher: "TRIIBE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triibe.us",
    siteName: "TRIIBE",
    title: "TRIIBE - Supporting the Next Generation of Change Makers",
    description:
      "Supporting and developing the next generation of change makers advancing food, water, shelter, health, education, or energy.",
    images: [
      {
        url: "/images/triibe-og-image.png",
        width: 1200,
        height: 630,
        alt: "TRIIBE - Supporting Change Makers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIIBE - Supporting the Next Generation of Change Makers",
    description:
      "Supporting and developing the next generation of change makers advancing food, water, shelter, health, education, or energy.",
    images: ["/images/triibe-twitter-image.png"],
    creator: "@triibe_us",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://triibe.us",
  },
  icons: {
    icon: [],
    apple: [],
  },

  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //   ],
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "TRIIBE",
    alternateName: "TRIIBE Organization",
    url: "https://triibe.us",
    logo: "https://triibe.us/images/headerlogo.png",
    description:
      "Supporting and developing the next generation of change makers advancing food, water, shelter, health, education, or energy.",
    foundingDate: "2023",
    areaServed: "Worldwide",
    founder: [
      {
        "@type": "Person",
        name: "Kyle Matthys",
      },
      {
        "@type": "Person",
        name: "Drew Collins",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/thetriibe/",
      "https://www.instagram.com/triibe.us/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      url: "https://triibe.us/contact-us",
    },
    knowsAbout: [
      "Social Impact",
      "Mentorship",
      "Nonprofit Leadership",
      "Youth Development",
      "Sustainable Development",
    ],
    seeks: {
      "@type": "Demand",
      name: "Young Change Makers",
      description:
        "We seek passionate young individuals working on solutions for food, water, shelter, health, education, or energy challenges.",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.className}  antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

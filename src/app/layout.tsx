import type { Metadata, Viewport } from "next";

import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { contact, serviceAreas } from "../component/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});
const siteUrl = "https://yourclinic.com"; // change to real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PhysioCare | Physiotherapy Clinic in Electronic City & HSR Layout, Bengaluru",
    template: "%s | PhysioCare",
  },
  description:
    "Physiotherapy clinic near Electronic City and HSR Layout, Bengaluru. Back pain therapy, sports injury rehab, neuro rehab, post-surgery rehab and elderly care.",
  keywords: [
    "physiotherapy Electronic City",
    "physiotherapy HSR Layout",
    "physiotherapist Bengaluru",
    "back pain treatment Bengaluru",
    "sports injury rehab Bengaluru",
    "neuro rehabilitation Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PhysioCare",
    title: "PhysioCare | Physiotherapy Clinic in Bengaluru",
    description:
      "Personalized physiotherapy to help you move better, heal faster and live pain-free.",
    locale: "en_IN",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "PhysioCare Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioCare | Physiotherapy Clinic in Bengaluru",
    description: "Move better, heal faster and live pain-free.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  name: "PhysioCare",
  url: siteUrl,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Focus One, Electronic City", 
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: serviceAreas,
  openingHours: "Mo-Sa 09:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
    <body className={`${jakarta.variable} flex min-h-screen flex-col antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
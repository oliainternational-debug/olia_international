import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Olia International | Industrial Washing Machines Manufacturer",
  description:
    "Premium industrial washing machine manufacturer in Delhi. Factory-direct supply of front-loading washers, washer extractors, hydro extractors, and drying tumblers for hotels, hospitals, laundries, and garment facilities.",
  keywords: [
    "industrial washing machines",
    "commercial laundry equipment",
    "washing machine manufacturer",
    "washer extractor",
    "industrial dryer",
    "laundry machinery",
    "hotel laundry equipment",
    "hospital washing machines",
  ],
  authors: [{ name: "Olia International" }],
  creator: "Olia International",
  openGraph: {
    type: "website",
    siteName: "Olia International",
    locale: "en_IN",
    title: "Olia International | Industrial Washing Machines Manufacturer",
    description:
      "Premium industrial washing machine manufacturer in Delhi. Factory-direct supply of front-loading washers, washer extractors, hydro extractors, and drying tumblers.",
    images: [
      {
        url: "/images/four.jpeg",
        width: 1200,
        height: 630,
        alt: "Industrial washing machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olia International | Industrial Washing Machines",
    description:
      "Premium industrial washing machine manufacturer in Delhi. Factory-direct supply of commercial laundry equipment.",
    images: ["/images/four.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07111f] text-slate-100">
        {children}
      </body>
    </html>
  );
}

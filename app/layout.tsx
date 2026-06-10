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
  title: "Olia International | Industrial Washing Machines",
  description:
    "Manufacturers of industrial washing machines for laundries, hotels, hospitals, and garment units. View product photos, factory details, and contact information.",
  openGraph: {
    type: "website",
    siteName: "Olia International",
    title: "Olia International | Industrial Washing Machines",
    description:
      "Manufacturers of industrial washing machines for laundries, hotels, hospitals, and garment units. View product photos, factory details, and contact information.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olia International | Industrial Washing Machines",
    description:
      "Manufacturers of industrial washing machines for laundries, hotels, hospitals, and garment units. View product photos, factory details, and contact information.",
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

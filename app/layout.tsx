import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleaning Services Nigeria | Top Rated Cleaning Company Nigeria",
  description: "B&A Housekeepers: Your trusted home and commercial space cleaning company in Nigeria. Providing cleaning services for housekeeping, offices, industrial, events and residential spaces. Satisfaction quaranteed!",
manifest: "/manifest.json",
themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
};

export const viewport: Viewport = {
  themeColor: "#10536D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

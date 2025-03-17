import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// TODO: Update metadata
export const metadata: Metadata = {
  title: "Tessl Landscape",
  description: "Tessl Landscape",
};

// TODO: To make sure we have a static layout will be removed once we finish
export const dynamic = "error";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}

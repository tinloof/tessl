import type { Metadata } from "next";
import {
  DM_Mono,
  Inter,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/globale/header";
import Footer from "@/components/globale/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
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
      <body
        className={`${inter.variable} ${dmMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

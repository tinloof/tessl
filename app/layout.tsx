import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

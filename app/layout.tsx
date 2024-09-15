import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Kaktus.li: Alle Markdowns an einem Ort",
    default: "marni-markdown: Alle Markdowns an einem Ort",
  },
  description: "Alle Markdown Files an einem Ort.",
  metadataBase: new URL("https://marni-markdown.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark text-primary">
      <body className={GeistSans.className}>
        <main className="mx-auto my-12 max-w-[692px] px-6 text-gray-1200 antialiased sm:my-32 md:my-16">
          <Header />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Open_Sans,
  Zen_Antique_Soft,
  Noto_Serif_KR,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import { site } from "./site";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const zenAntiqueSoft = Zen_Antique_Soft({
  variable: "--font-zen-antique-soft",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-serif-devanagari",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `Aesthetic Services | ${site.name}`,
  description:
    "Injectable treatments focused on natural, refined results — Botox, Dysport, Xeomin and Restylane dermal fillers in Upland, California.",
  openGraph: {
    title: `Aesthetic Services | ${site.name}`,
    description:
      "Injectable treatments focused on natural, refined results in Upland, California.",
    url: site.url,
    siteName: site.name,
    type: "website",
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
      className={`${openSans.variable} ${zenAntiqueSoft.variable} ${notoSerifKr.variable} ${notoSerifDevanagari.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Sans_KR, Dancing_Script } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "3옥타브장인 보컬학원 — Exceed Your Range",
    template: "%s — 3옥타브장인 보컬학원",
  },
  description:
    "대한민국 프로페셔널 발성전문 보컬 트레이닝 학원. 3옥타브의 로망, 당신이 할 수 있게.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... (imports)

// ... (font definitions)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${notoSansKr.variable} ${dancingScript.variable} antialiased font-sans bg-black text-white`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

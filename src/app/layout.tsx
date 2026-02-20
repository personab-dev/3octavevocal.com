import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Sans_KR, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://3octavevocal.com"),
  title: {
    default: "3옥타브장인 보컬학원, No.1 강남보컬학원",
    template: "%s — 3옥타브장인 보컬학원",
  },
  description:
    "10년간 7,000명 이상의 수강생, 연예인들이 증명한, 강남 No.1 3옥타브장인 보컬학원 입니다.",
  openGraph: {
    title: "3옥타브장인 보컬학원, No.1 강남보컬학원",
    description:
      "10년간 7,000명 이상의 수강생, 연예인들이 증명한, 강남 No.1 3옥타브장인 보컬학원 입니다.",
    url: "https://3octavevocal.com",
    siteName: "3옥타브장인 보컬학원",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "3옥타브장인 보컬학원, No.1 강남보컬학원",
    description:
      "10년간 7,000명 이상의 수강생, 연예인들이 증명한, 강남 No.1 3옥타브장인 보컬학원 입니다.",
    images: ["/images/og-image.png"],
  },
};

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
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

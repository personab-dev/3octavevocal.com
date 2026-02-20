import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "무료 상담 예약",
  description:
    "3옥타브장인 보컬학원 무료 상담 예약. 서울 강남, 인천 부평, 부산 서면.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "무료 상담 예약",
    description:
      "3옥타브장인 보컬학원 무료 상담 예약. 서울 강남, 인천 부평, 부산 서면.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "상담 예약", url: "https://3octavevocal.com/contact" },
        ])}
      />
      <ContactContent />
    </>
  );
}

import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/schema";
import { getConsultationSettings } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "상담&솔루션 예약",
  description:
    "3옥타브장인 보컬학원 무료 상담 예약. 서울 강남, 인천 부평, 부산 서면.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "상담&솔루션 예약",
    description:
      "3옥타브장인 보컬학원 무료 상담 예약. 서울 강남, 인천 부평, 부산 서면.",
    url: "/contact",
  },
};

export default async function ContactPage() {
  const consultationSettings = await getConsultationSettings();

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", path: "/" },
          { name: "상담 예약", path: "/contact" },
        ])}
      />
      <JsonLd data={getContactPageSchema()} />
      <ContactContent consultationSettings={consultationSettings} />
    </>
  );
}

import type { Metadata } from "next";
import DifferenceContent from "@/components/about/DifferenceContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "다른 보컬학원과의 차별점",
  description:
    "7,000명 이상의 누적 수강생이 검증한 교육 효과. 정직원 전문 강사진, 과학적 발성법, 단 10분 첫 레슨의 변화.",
  alternates: { canonical: "/difference" },
  openGraph: {
    title: "다른 보컬학원과의 차별점",
    description:
      "7,000명 이상의 누적 수강생이 검증한 교육 효과. 정직원 전문 강사진, 과학적 발성법, 단 10분 첫 레슨의 변화.",
    url: "/difference",
  },
};

export default function DifferencePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "차별점", url: "https://3octavevocal.com/difference" },
        ])}
      />
      <DifferenceContent />
    </>
  );
}

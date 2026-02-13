import type { Metadata } from "next";
import DifferenceContent from "@/components/about/DifferenceContent";

export const metadata: Metadata = {
  title: "차별점",
  description:
    "7,000명 이상의 누적 수강생이 검증한 교육 효과. 정직원 전문 강사진, 과학적 발성법, 단 10분 첫 레슨의 변화.",
};

export default function DifferencePage() {
  return <DifferenceContent />;
}

import type { Metadata } from "next";
import AdvancedProgramContent from "@/components/program/AdvancedProgramContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "심화 교육과정",
  description:
    "고음만 된다고 끝이 아닙니다. 기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링.",
  alternates: { canonical: "/advanced" },
  openGraph: {
    title: "심화 교육과정",
    description:
      "기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링.",
    url: "/advanced",
  },
};

export default function AdvancedProgramPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "심화 교육과정", url: "https://3octavevocal.com/advanced" },
        ])}
      />
      <AdvancedProgramContent />
    </>
  );
}

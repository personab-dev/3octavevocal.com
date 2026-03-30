import type { Metadata } from "next";
import BasicProgramContent from "@/components/program/BasicProgramContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/schema";
import { programFaqs } from "@/lib/faq-data";
import { getBeforeAfters } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "기본 교육과정",
  description:
    "8,000명+이 검증한 발성 기본 커리큘럼. 호흡, 공명, 성대 컨트롤, 피치를 체계적으로 배우는 기초 보컬 트레이닝. 완전 초보자도 부담 없이 시작 가능.",
  alternates: { canonical: "/basic" },
  openGraph: {
    title: "기본 교육과정",
    description:
      "8,000명+이 검증한 발성 기본 커리큘럼. 호흡, 공명, 성대 컨트롤, 피치를 체계적으로 배우는 기초 보컬 트레이닝.",
    url: "/basic",
  },
};

export default async function BasicProgramPage() {
  const beforeAfterVideos = await getBeforeAfters();

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", path: "/" },
          { name: "기본 교육과정", path: "/basic" },
        ])}
      />
      <JsonLd
        data={getServiceSchema({
          name: "기본 교육과정",
          description:
            "호흡, 공명, 성대 컨트롤, 피치를 체계적으로 배우는 기초 보컬 트레이닝",
          path: "/basic",
        })}
      />
      <JsonLd data={getFAQSchema(programFaqs)} />
      <BasicProgramContent videos={beforeAfterVideos} />
    </>
  );
}

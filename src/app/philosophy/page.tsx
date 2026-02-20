import type { Metadata } from "next";
import PhilosophyContent from "@/components/about/PhilosophyContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "원장 김윤민의 교육 철학",
  description:
    "고시원 달방에서 7년간 과학적 발성법을 연구한 김윤민 원장의 교육 철학. 원리만 알면 누구나 노래 잘 부를 수 있습니다.",
  alternates: { canonical: "/philosophy" },
  openGraph: {
    title: "원장 김윤민의 교육 철학",
    description:
      "고시원 달방에서 7년간 과학적 발성법을 연구한 김윤민 원장의 교육 철학. 원리만 알면 누구나 노래 잘 부를 수 있습니다.",
    url: "/philosophy",
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "대표 철학", url: "https://3octavevocal.com/philosophy" },
        ])}
      />
      <PhilosophyContent />
    </>
  );
}

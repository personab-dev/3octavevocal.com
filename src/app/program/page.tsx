import type { Metadata } from "next";
import ProgramLanding from "@/components/program/ProgramLanding";

export const metadata: Metadata = {
  title: "교육과정 — 3옥타브장인 보컬학원",
  description:
    "기본 발성부터 심화 노래 적용까지, 나에게 맞는 과정을 찾아보세요. 7,000명 이상이 경험한 3옥타브장인의 2단계 체계적 보컬 트레이닝 커리큘럼.",
};

export default function ProgramPage() {
  return <ProgramLanding />;
}

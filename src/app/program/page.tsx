import type { Metadata } from "next";
import ProgramLanding from "@/components/program/ProgramLanding";

export const metadata: Metadata = {
  title: "교육과정 — 3옥타브장인 보컬학원",
  description:
    "음치, 고음불가 일반인부터 프로 가수까지. 3단계 체계적 보컬 트레이닝 커리큘럼.",
};

export default function ProgramPage() {
  return <ProgramLanding />;
}

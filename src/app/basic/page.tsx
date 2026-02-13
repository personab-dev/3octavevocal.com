import type { Metadata } from "next";
import BasicProgramContent from "@/components/program/BasicProgramContent";

export const metadata: Metadata = {
  title: "기본 교육과정 — 3옥타브장인 보컬학원",
  description:
    "7,000명+이 검증한 발성 기본 커리큘럼. 호흡, 공명, 성대 컨트롤, 피치를 체계적으로 배우는 기초 보컬 트레이닝. 완전 초보자도 부담 없이 시작 가능.",
};

export default function BasicProgramPage() {
  return <BasicProgramContent />;
}

import type { Metadata } from "next";
import AdvancedProgramContent from "@/components/program/AdvancedProgramContent";

export const metadata: Metadata = {
  title: "심화 교육과정 — 3옥타브장인 보컬학원",
  description:
    "고음만 된다고 끝이 아닙니다. 기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝. 음역대 확장, 곡 해석, 감정 표현, 장르별 스타일링.",
};

export default function AdvancedProgramPage() {
  return <AdvancedProgramContent />;
}

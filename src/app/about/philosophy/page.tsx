import type { Metadata } from "next";
import PhilosophyContent from "@/components/about/PhilosophyContent";

export const metadata: Metadata = {
  title: "대표 철학",
  description:
    "고시원 달방에서 7년간 과학적 발성법을 연구한 김윤민 원장의 교육 철학. 원리만 알면 누구나 노래 잘 부를 수 있습니다.",
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}

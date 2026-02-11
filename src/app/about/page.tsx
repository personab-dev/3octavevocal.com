import type { Metadata } from "next";
import AboutLanding from "@/components/about/AboutLanding";

export const metadata: Metadata = {
  title: "소개",
  description:
    "3옥타브장인 보컬학원을 소개합니다. 대표 철학, 차별점, 지점 안내.",
};

export default function AboutPage() {
  return <AboutLanding />;
}

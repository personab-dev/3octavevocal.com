import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import IntroSection from "./advanced/IntroSection";
import ProSection from "./advanced/ProSection";
import CurriculumSection from "./advanced/CurriculumSection";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import DiagnosisSection from "./advanced/DiagnosisSection";
import TargetSection from "./advanced/TargetSection";
import ProgramFAQ from "./ProgramFAQ";
import FinalCta from "@/components/FinalCta";
import type { VideoItem } from "@/lib/videos";

export default function AdvancedProgramContent({
  interviewVideos,
}: {
  interviewVideos: VideoItem[];
}) {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        label="심화 교육과정 · Advanced Vocal Training"
        heading="고음만 올라간다고 끝이 아닙니다."
        description="어딜 가나 '와, 노래 진짜 잘한다!' 소리를 듣게 만들어 드립니다."
        backgroundImage="/images/program/hero.png"
      />

      {/* 2. SubNav */}
      <ProgramSubNav />

      {/* 3. Intro */}
      <IntroSection />

      {/* 4. Pro References */}
      <ProSection />

      {/* 5. Curriculum */}
      <CurriculumSection />

      {/* 6. Before & After — 인터뷰+커버 영상 3개 */}
      <ProgramBeforeAfter
        heading="더 이상 긴말하지 않겠습니다. 이 영상이 변화할 당신의 모습입니다."
        subHeading="수강생 인터뷰 + 비포 & 애프터"
        videos={interviewVideos}
        isShorts={false}
        reviewLabel="심화 과정을 이수한 후기가 궁금하신가요?"
      />

      {/* 7. Self-Diagnosis */}
      <DiagnosisSection />

      {/* 8. VIP Benefits */}
      <TargetSection />

      {/* 9. FAQ */}
      <ProgramFAQ />

      {/* 10. CTA */}
      <FinalCta
        heading="진심으로 노래를 잘 부르고 싶은 사람만 문의 주세요"
        description="프로들도 선택한 가장 확실한 방법을 직접 경험해보세요."
        buttonText="무료 상담 & 진단 신청하기"
      />
    </>
  );
}

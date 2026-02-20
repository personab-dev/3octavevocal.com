import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import IntroSection from "./advanced/IntroSection";
import ProSection from "./advanced/ProSection";
import DiagnosisSection from "./advanced/DiagnosisSection";
import CurriculumSection from "./advanced/CurriculumSection";
import InstructorSection from "./advanced/InstructorSection";
import TargetSection from "./advanced/TargetSection";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";
import FinalCta from "@/components/FinalCta";

export default function AdvancedProgramContent() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        heading="심화 교육과정"
        subheading="Advanced Vocal Training"
        description="기초 발성을 실제 노래에 적용하는 심화 보컬 트레이닝"
        backgroundImage="/images/program/hero.png"
      />

      {/* 2. SubNav */}
      <ProgramSubNav />

      {/* 3. Intro */}
      <IntroSection />

      {/* 4. Pro References */}
      <ProSection />

      {/* 5. Self-Diagnosis */}
      <DiagnosisSection />

      {/* 6. Curriculum */}
      <CurriculumSection />

      {/* 7. Instructor */}
      <InstructorSection />

      {/* 8. Target Checklist */}
      <TargetSection />

      {/* 9. Before & After */}
      <ProgramBeforeAfter reviewLabel="심화 과정을 이수한 후기가 궁금하신가요?" />

      {/* 10. FAQ */}
      <ProgramFAQ />

      {/* 11. CTA */}
      <FinalCta
        heading="2옥타브에서 멈추실 건가요?"
        description="3옥타브를 뚫은 사람들이 선택한 가장 확실한 방법, 직접 경험해보세요."
      />
    </>
  );
}

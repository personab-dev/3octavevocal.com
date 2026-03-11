import PageHero from "@/components/PageHero";
import ProgramSubNav from "./ProgramSubNav";
import HookSection from "./basic/HookSection";
import ApproachSection from "./basic/ApproachSection";
import CurriculumSection from "./basic/CurriculumSection";
import InstructorSection from "./basic/InstructorSection";
import ChecklistSection from "./basic/ChecklistSection";
import ProgramBeforeAfter from "./ProgramBeforeAfter";
import ProgramFAQ from "./ProgramFAQ";
import FinalCta from "@/components/FinalCta";

/* ── Component ────────────────────────────────────── */

export default function BasicProgramContent() {
  return (
    <>
      {/* ── 1. PageHero ──────────────────────────── */}
      <PageHero
        label="기본 교육과정 · Basic Vocal Training"
        heading="고음이 안 올라가서, 목이 아파서 노래방 가기가 두려우신가요?"
        description="타고난 천재들은 모르는 평범한 사람들의 고충. 생목을 쥐어짜며 좌절해 본 '고음불가 출신' 트레이너들이 여러분의 막힌 고음을 뚫어드립니다."
        backgroundImage="/images/program/hero.png"
      />

      {/* ── 2. ProgramSubNav ─────────────────────── */}
      <ProgramSubNav />

      {/* ── 3. Hook Section ──────────────────────── */}
      <HookSection />

      {/* ── 4. Curriculum Approach ────────────────── */}
      {/* <ApproachSection /> */}

      {/* ── 5. Curriculum Details ─────────────────── */}
      <CurriculumSection />

      {/* ── 6. ProgramBeforeAfter (영상 후기) ──── */}
      <ProgramBeforeAfter
        heading="수강 이후, 당신의 고음은 이렇게 달라집니다."
        subHeading="백 번의 설명보다 확실한 증명. 수강생들의 소름 돋는 비포 & 애프터"
        reviewLabel="기본 과정을 이수한 후기가 궁금하신가요?"
      />

      {/* ── 7. Checklist ──────────────────────────── */}
      <ChecklistSection />

      {/* ── 8. Instructors ────────────────────────── */}
      <InstructorSection />

      {/* ── 9. ProgramFAQ ────────────────────────── */}
      <ProgramFAQ />

      {/* ── 11. Final CTA ─────────────────────────── */}
      <FinalCta
        heading="노래방에서 더 이상 남들 눈치 보며 작아지지 마세요. 3옥타브장인이 변화시켜 드리겠습니다."
        description=""
        buttonText="내 상태에 맞는 진단 & 상담 받기"
      />
    </>
  );
}

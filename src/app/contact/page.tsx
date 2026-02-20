import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "상담 예약",
  description:
    "3옥타브장인 보컬학원 무료 상담 예약. 서울 강남, 인천 부평, 부산 서면.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactContent />
    </main>
  );
}

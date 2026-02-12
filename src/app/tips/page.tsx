import type { Metadata } from "next";
import TipsContent from "@/components/community/TipsContent";

export const metadata: Metadata = {
  title: "발성 꿀팁",
  description:
    "고음 발성법, 호흡 조절, 성대 컨트롤 등 3옥타브장인 보컬학원의 발성 꿀팁을 확인하세요.",
};

export default function TipsPage() {
  return <TipsContent />;
}

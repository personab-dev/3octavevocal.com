import type { Metadata } from "next";
import TipsContent from "@/components/community/TipsContent";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "고음 발성법 & 보컬 꿀팁",
  description:
    "고음 발성법, 호흡 조절, 성대 컨트롤 등 3옥타브장인 보컬학원의 발성 꿀팁을 확인하세요.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "고음 발성법 & 보컬 꿀팁",
    description:
      "고음 발성법, 호흡 조절, 성대 컨트롤 등 3옥타브장인 보컬학원의 발성 꿀팁을 확인하세요.",
    url: "/tips",
  },
};

export default function TipsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "홈", url: "https://3octavevocal.com" },
          { name: "발성 꿀팁", url: "https://3octavevocal.com/tips" },
        ])}
      />
      <TipsContent />
    </>
  );
}

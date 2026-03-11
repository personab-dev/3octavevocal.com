import SubNav from "@/components/SubNav";

const tabs = [
  { label: "대표 철학", href: "/philosophy" },
  { label: "3옥타브장인 차별점", href: "/difference" },
  { label: "지점 찾기", href: "/locations" },
];

export default function AboutSubNav() {
  return <SubNav tabs={tabs} />;
}

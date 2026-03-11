import SubNav from "@/components/SubNav";

const tabs = [
  { label: "기본 과정", href: "/basic" },
  { label: "심화 과정", href: "/advanced" },
];

export default function ProgramSubNav() {
  return <SubNav tabs={tabs} />;
}

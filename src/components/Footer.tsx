import Link from "next/link";
import Image from "next/image";

const branches = [
  {
    name: "서울점",
    bizNo: "629-87-02630",
    phone: "0507-1406-2849",
    address:
      "서울시 서초구 서초대로78길 36, 강남지웰타워 5층 (강남역 5번출구 100m)",
  },
  {
    name: "인천점",
    bizNo: "293-85-02382",
    phone: "0507-1319-1769",
    address:
      "인천 부평구 경원대로 1414, 2층 (부평역 7번출구 250m, 부평지하상가 11번출구 100m)",
  },
  {
    name: "부산점",
    bizNo: "202-85-35932",
    phone: "0507-1351-9158",
    address: "부산 부산진구 서전로17, 3층 (서면역 8번출구 100m)",
  },
];

function NaverBlogIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#03C75A" />
      <path
        d="M16 15.5V32.5H21.5L26.5 24V32.5H32V15.5H26.5L21.5 24V15.5H16Z"
        fill="white"
      />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#FF0000" />
      <path d="M20 17.5V30.5L32 24L20 17.5Z" fill="white" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FD5" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill="url(#ig-grad)" />
      <rect
        x="14"
        y="14"
        width="20"
        height="20"
        rx="6"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="24"
        cy="24"
        r="5"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="31" cy="17" r="1.5" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700">
      <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-8">
        {/* Top section: Logo + Info + Social */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left: Logo & business info */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo-black.png"
              alt="3옥타브장인"
              width={200}
              height={36}
              className="h-9 w-auto"
            />
            <div className="text-sm text-gray-500 leading-relaxed">
              <p>
                3옥타브장인 보컬학원 &nbsp;|&nbsp; 대표자: 김윤민
                &nbsp;|&nbsp; 정보보호책임자: 김윤민 &nbsp;|&nbsp; EMAIL :{" "}
                3octavemaster@naver.com
              </p>
              <p className="mt-1">
                상담시간: 평일 오후 1시~ 오후 10시, 주말 오후12시~오후7시, 목요일
                휴무
              </p>
            </div>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="https://blog.naver.com/3octave1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="네이버 블로그"
            >
              <NaverBlogIcon className="w-10 h-10" />
            </Link>
            <Link
              href="https://www.youtube.com/@3octave"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-10 h-10" />
            </Link>
            <Link
              href="https://www.instagram.com/3octave_official/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-10 h-10" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-300 my-8" />

        {/* Bottom section: Branch info table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-800 font-bold">
                <th className="pb-3 pr-8 whitespace-nowrap min-w-[160px]">
                  사업자번호
                </th>
                <th className="pb-3 pr-8 whitespace-nowrap min-w-[180px]">
                  상담번호
                </th>
                <th className="pb-3 whitespace-nowrap">주소</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {branches.map((branch) => (
                <tr key={branch.name}>
                  <td className="py-1.5 pr-8 whitespace-nowrap">
                    {branch.name} : {branch.bizNo}
                  </td>
                  <td className="py-1.5 pr-8 whitespace-nowrap">
                    {branch.name} : {branch.phone}
                  </td>
                  <td className="py-1.5">
                    {branch.name} : {branch.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
}

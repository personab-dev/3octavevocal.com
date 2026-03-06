export interface Artist {
  src: string;
  alt: string;
  name: string;
  role: string;
}

// task.md 순서 우선, 나머지는 뒤에 배치
// 인피니트: 그룹 사진 대신 멤버 개별 사진 사용
// 신화: 그룹 사진 대신 김동완 개별 사진 사용
export const allArtists: Artist[] = [
  // --- task.md 지정 순서 ---
  { src: "/images/pro-curriculum/artist-jungsung.jpg", alt: "정성일 — 배우 보컬 레슨", name: "정성일", role: "배우" },
  { src: "/images/pro-curriculum/artist-hwangchiyeul.jpg", alt: "황치열 — 가수 보컬 레슨", name: "황치열", role: "가수" },
  { src: "/images/pro-curriculum/artist-yoosieun2.jpg", alt: "유시은 — 솔로지옥3 출연", name: "유시은", role: "솔로지옥3" },
  { src: "/images/pro-curriculum/artist-norajo.jpeg", alt: "노라조 원흠 — 가수 보컬 레슨", name: "노라조", role: "가수" },
  { src: "/images/pro-curriculum/artist-yumyuri.png", alt: "염유리 — 미스트롯 가수 보컬 레슨", name: "염유리", role: "가수" },
  { src: "/images/pro-curriculum/artist-kimdongwan.jpeg", alt: "김동완 — 신화 보컬 레슨", name: "김동완", role: "신화" },
  { src: "/images/pro-curriculum/artist-yangyoseob.jpg", alt: "양요섭 — 하이라이트 보컬 레슨", name: "양요섭", role: "하이라이트" },
  { src: "/images/pro-curriculum/artist-bangwangok.jpg", alt: "반광옥 — 가수 보컬 레슨", name: "반광옥", role: "가수" },
  // --- 인피니트 멤버 ---
  { src: "/images/pro-curriculum/artist-infinite-dongwoo.jpeg", alt: "동우 — 인피니트 보컬 레슨", name: "동우", role: "인피니트" },
  { src: "/images/pro-curriculum/artist-infinite-sungyeol.png", alt: "성열 — 인피니트 보컬 레슨", name: "성열", role: "인피니트" },
  // --- 나머지 아티스트 ---
  { src: "/images/pro-curriculum/artist-empire-lumin.jpg", alt: "루민 — 엠파이어 보컬 레슨", name: "루민", role: "엠파이어" },
  { src: "/images/pro-curriculum/artist-2romance.jpg", alt: "김병수 — 투로맨스 보컬 레슨", name: "김병수", role: "투로맨스" },
  { src: "/images/pro-curriculum/artist-cherryb.jpg", alt: "체리비 — 가수 보컬 레슨", name: "체리비", role: "가수" },
  { src: "/images/pro-curriculum/artist-hanyeoreum.jpg", alt: "한여름 — 미스트롯 가수 보컬 레슨", name: "한여름", role: "미스트롯" },
  { src: "/images/pro-curriculum/artist-yoonjaechan.jpeg", alt: "윤재찬 — 탤런트 보컬 레슨", name: "윤재찬", role: "탤런트" },
  { src: "/images/pro-curriculum/artist-jihyunjun.jpg", alt: "지현준 — 배우 보컬 레슨", name: "지현준", role: "배우" },
  { src: "/images/pro-curriculum/artist-yoonjubin.jpg", alt: "윤주빈 — 배우 보컬 레슨", name: "윤주빈", role: "배우" },
  { src: "/images/pro-curriculum/artist-hanjinhee.jpeg", alt: "한진희 — 배우 보컬 레슨", name: "한진희", role: "배우" },
  { src: "/images/pro-curriculum/artist-jungdonghwa.jpg", alt: "정동화 — 뮤지컬배우 보컬 레슨", name: "정동화", role: "뮤지컬배우" },
  { src: "/images/pro-curriculum/artist-parkgichan.jpg", alt: "박기찬 — 뮤지컬배우 보컬 레슨", name: "박기찬", role: "뮤지컬배우" },
  { src: "/images/pro-curriculum/artist-byunseungju.jpg", alt: "변승주 — 유튜버 보컬 레슨", name: "변승주", role: "유튜버" },
  { src: "/images/pro-curriculum/artist-jungjichani.jpg", alt: "정지차니 — 유튜버 보컬 레슨", name: "정지차니", role: "유튜버" },
  { src: "/images/pro-curriculum/artist-hongsodan.jpg", alt: "홍소단 — 인플루언서 보컬 레슨", name: "홍소단", role: "인플루언서" },
];

export const featuredArtists = allArtists.slice(0, 3);
export const FEATURED_COUNT = 3;

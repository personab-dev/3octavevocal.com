export interface VideoItem {
  title: string;
  url: string;
  thumbnail: string;
}

function shortsThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/oar2.jpg`;
}

function videoThumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// 비포애프터 쇼츠 (link.md)
export const beforeAfterShorts: VideoItem[] = [
  { title: "비포 & 애프터 #1", url: "https://youtube.com/shorts/nALSd-jCcTk", thumbnail: shortsThumb("nALSd-jCcTk") },
  { title: "비포 & 애프터 #2", url: "https://youtube.com/shorts/qXPkDcfuvPI", thumbnail: shortsThumb("qXPkDcfuvPI") },
  { title: "비포 & 애프터 #3", url: "https://youtube.com/shorts/SZYmgheWoDA", thumbnail: shortsThumb("SZYmgheWoDA") },
  { title: "비포 & 애프터 #4", url: "https://youtube.com/shorts/4Kdw1O1I_FU", thumbnail: shortsThumb("4Kdw1O1I_FU") },
  { title: "비포 & 애프터 #5", url: "https://youtube.com/shorts/SMqVSbXPENA", thumbnail: shortsThumb("SMqVSbXPENA") },
  { title: "비포 & 애프터 #6", url: "https://youtube.com/shorts/dH07h2THEqs", thumbnail: shortsThumb("dH07h2THEqs") },
  { title: "비포 & 애프터 #7", url: "https://youtube.com/shorts/3EnMtU4eGsc", thumbnail: shortsThumb("3EnMtU4eGsc") },
  { title: "비포 & 애프터 #8", url: "https://youtube.com/shorts/AAVv-kgQ-rY", thumbnail: shortsThumb("AAVv-kgQ-rY") },
  { title: "비포 & 애프터 #9", url: "https://youtube.com/shorts/YrkVzi6_Q1Q", thumbnail: shortsThumb("YrkVzi6_Q1Q") },
  { title: "비포 & 애프터 #10", url: "https://youtube.com/shorts/NYwHQWvYpnA", thumbnail: shortsThumb("NYwHQWvYpnA") },
];

// 인터뷰 + 노래 커버 (심화과정용)
export const interviewVideos: VideoItem[] = [
  { title: "수강생 인터뷰 + 노래 커버", url: "https://youtu.be/vPdvnTJGdGQ", thumbnail: videoThumb("vPdvnTJGdGQ") },
  { title: "수강생 인터뷰 + 노래 커버", url: "https://youtu.be/krop87qig2c", thumbnail: videoThumb("krop87qig2c") },
  { title: "수강생 인터뷰 + 노래 커버", url: "https://youtu.be/-wjniTCwal0", thumbnail: videoThumb("-wjniTCwal0") },
];

// 비포애프터 모음집
export const compilationVideo: VideoItem = {
  title: "비포 & 애프터 모음집",
  url: "https://youtu.be/P4mlGFzwkdc",
  thumbnail: videoThumb("P4mlGFzwkdc"),
};

/** Extract YouTube video ID from various URL formats */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/shorts\/([^/?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^/?&]+)/,
    /youtube\.com\/embed\/([^/?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export interface VideoItem {
  id: string;
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

function shorts(id: string, title: string): VideoItem {
  return { id, title, url: `https://youtube.com/shorts/${id}`, thumbnail: shortsThumb(id) };
}

// 비포애프터 쇼츠 (link.md)
export const beforeAfterShorts: VideoItem[] = [
  shorts("nALSd-jCcTk", "비포 & 애프터 #1"),
  shorts("qXPkDcfuvPI", "비포 & 애프터 #2"),
  shorts("SZYmgheWoDA", "비포 & 애프터 #3"),
  shorts("4Kdw1O1I_FU", "비포 & 애프터 #4"),
  shorts("SMqVSbXPENA", "비포 & 애프터 #5"),
  shorts("dH07h2THEqs", "비포 & 애프터 #6"),
  shorts("3EnMtU4eGsc", "비포 & 애프터 #7"),
  shorts("AAVv-kgQ-rY", "비포 & 애프터 #8"),
  shorts("YrkVzi6_Q1Q", "비포 & 애프터 #9"),
  shorts("NYwHQWvYpnA", "비포 & 애프터 #10"),
];

// 비포애프터 모음집
export const compilationVideo: VideoItem = {
  id: "P4mlGFzwkdc",
  title: "비포 & 애프터 모음집",
  url: "https://youtu.be/P4mlGFzwkdc",
  thumbnail: videoThumb("P4mlGFzwkdc"),
};

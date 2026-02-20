import Image from "next/image";

interface NaverMapProps {
  lat: number;
  lng: number;
  level?: number;
  alt?: string;
  className?: string;
}

export default function NaverMap({
  lat,
  lng,
  level = 16,
  alt = "네이버 지도",
  className,
}: NaverMapProps) {
  return (
    <Image
      src={`/api/static-map?lat=${lat}&lng=${lng}&level=${level}`}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={`object-cover ${className || ""}`}
      unoptimized
    />
  );
}

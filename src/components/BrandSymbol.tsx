interface BrandSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function BrandSymbol({
  className = "",
  color = "currentColor",
  size = 200,
}: BrandSymbolProps) {
  return (
    <svg
      viewBox="0 0 200 240"
      width={size}
      height={size * 1.2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 3 horizontal staff lines extending left from the "3" shape */}
      <rect x="0" y="58" width="100" height="12" rx="6" fill={color} />
      <rect x="0" y="114" width="100" height="12" rx="6" fill={color} />
      <rect x="0" y="170" width="100" height="12" rx="6" fill={color} />

      {/* Bold "3" shape - right side */}
      <path
        d="M80 0 H160 C193.137 0 220 26.863 220 60 V60 C220 82 205 100 185 108 C205 116 220 134 220 156 V180 C220 213.137 193.137 240 160 240 H80 V200 H155 C171.569 200 185 186.569 185 170 V165 C185 148.431 171.569 135 155 135 H100 V105 H155 C171.569 105 185 91.569 185 75 V70 C185 53.431 171.569 40 155 40 H80 V0Z"
        fill={color}
      />
    </svg>
  );
}

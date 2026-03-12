export interface OperatingHour {
  day: string;
  time: string;
  isHoliday?: boolean;
}

export const operatingHours: OperatingHour[] = [
  { day: "평일 (월~수, 금)", time: "13:00 ~ 22:00" },
  { day: "주말 (토, 일)", time: "12:00 ~ 19:00" },
  { day: "목요일", time: "휴무", isHoliday: true },
];

/** Footer 등에서 한 줄로 표시할 때 사용 */
export const operatingHoursSummary =
  "평일 오후 1시~오후 10시, 주말(토,일) 오후 12시~오후 7시, 목요일 휴무";

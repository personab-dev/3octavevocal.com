import { NextResponse } from "next/server";
import { SolapiMessageService } from "solapi";

const solapi = new SolapiMessageService(
  process.env.SOLAPI_API_KEY!,
  process.env.SOLAPI_API_SECRET!,
);

const BRANCH_MAP: Record<string, string> = {
  "서울점 (강남역 5번 출구 100m)": "gangnam",
  "인천점 (부평역 7번 출구 250m)": "bupyeong",
  "부산점 (서면역 8번 출구 100m)": "seomyeon",
};

async function fetchSmsRecipients() {
  const res = await fetch(process.env.WORDPRESS_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { smsRecipients { senderNumber gangnam bupyeong seomyeon } }`,
    }),
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return json.data.smsRecipients as {
    senderNumber: string;
    gangnam: string;
    bupyeong: string;
    seomyeon: string;
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Google Sheets 전송
    const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (sheetUrl) {
      await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    // TODO: 카카오 알림톡 심사 통과 후 활성화
    // const branchKey = BRANCH_MAP[body.branch];
    // if (branchKey) { ... }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "전송에 실패했습니다." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { SolapiMessageService } from "solapi";

const solapi = new SolapiMessageService(
  process.env.SOLAPI_API_KEY!,
  process.env.SOLAPI_API_SECRET!,
);

const BRANCH_KEY: Record<string, string> = {
  "서울점 (강남역 5번 출구 100m)": "gangnam",
  "인천점 (부평역 7번 출구 250m)": "bupyeong",
  "부산점 (서면역 8번 출구 100m)": "seomyeon",
};

// 지점별 카카오 채널 PFID
const BRANCH_PFID: Record<string, string | undefined> = {
  gangnam: process.env.SOLAPI_PFID_GANGNAM,
  bupyeong: process.env.SOLAPI_PFID_BUPYEONG,
  seomyeon: process.env.SOLAPI_PFID_SEOMYEON,
};

// 지점별 템플릿 ID
const BRANCH_TEMPLATE_ADMIN: Record<string, string | undefined> = {
  gangnam: process.env.SOLAPI_TEMPLATE_ADMIN_GANGNAM,
  bupyeong: process.env.SOLAPI_TEMPLATE_ADMIN_BUPYEONG,
  seomyeon: process.env.SOLAPI_TEMPLATE_ADMIN_SEOMYEON,
};

const BRANCH_TEMPLATE_CUSTOMER: Record<string, string | undefined> = {
  gangnam: process.env.SOLAPI_TEMPLATE_CUSTOMER_GANGNAM,
  bupyeong: process.env.SOLAPI_TEMPLATE_CUSTOMER_BUPYEONG,
  seomyeon: process.env.SOLAPI_TEMPLATE_CUSTOMER_SEOMYEON,
};

// WP 어드민에서 관리하는 지점별 수신번호 가져오기
async function fetchRecipients() {
  const res = await fetch(process.env.WORDPRESS_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{ smsRecipients { senderNumber gangnam bupyeong seomyeon } }`,
    }),
    cache: "no-store",
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

    // 2. 솔라피 카카오 알림톡
    const branchKey = BRANCH_KEY[body.branch];
    const pfId = branchKey ? BRANCH_PFID[branchKey] : undefined;
    const adminTemplateId = branchKey ? BRANCH_TEMPLATE_ADMIN[branchKey] : undefined;
    const customerTemplateId = branchKey ? BRANCH_TEMPLATE_CUSTOMER[branchKey] : undefined;

    if (branchKey && pfId) {
      const recipients = await fetchRecipients();
      const adminPhone = recipients[branchKey as keyof typeof recipients];
      const from = recipients.senderNumber.replace(/-/g, "");
      const messages = [];

      // 2-1. 지점 관리자에게 "새 문의 접수" 알림
      if (adminPhone && adminTemplateId) {
        messages.push({
          to: adminPhone.replace(/-/g, ""),
          from,
          kakaoOptions: {
            pfId,
            templateId: adminTemplateId,
            variables: {
              "#{name}": body.name || "",
              "#{phone}": body.phone || "",
              "#{consultationType}": body.consultationType || "",
              "#{message}": body.message || "",
            },
          },
        });
      }

      // 2-2. 고객에게 "접수 완료" 확인
      if (body.phone && customerTemplateId) {
        messages.push({
          to: body.phone.replace(/-/g, ""),
          from,
          kakaoOptions: {
            pfId,
            templateId: customerTemplateId,
            variables: {
              "#{name}": body.name || "",
            } as Record<string, string>,
          },
        });
      }

      if (messages.length > 0) {
        await Promise.all(messages.map((msg) => solapi.sendOne(msg)));
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "전송에 실패했습니다." },
      { status: 500 },
    );
  }
}

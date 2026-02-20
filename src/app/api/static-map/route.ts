import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const w = searchParams.get("w") || "640";
  const h = searchParams.get("h") || "400";
  const level = searchParams.get("level") || "16";

  if (!lat || !lng) {
    return NextResponse.json({ error: "Missing lat/lng" }, { status: 400 });
  }

  const clientId = process.env.NAVER_MAP_CLIENT_ID;
  const clientSecret = process.env.NAVER_MAP_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Map API not configured" },
      { status: 500 }
    );
  }

  const url = `https://maps.apigw.ntruss.com/map-static/v2/raster?center=${lng},${lat}&level=${level}&w=${w}&h=${h}&maptype=basic&format=png&scale=2&lang=ko&markers=type:d|size:mid|pos:${lng}%20${lat}`;

  const response = await fetch(url, {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": clientId,
      "X-NCP-APIGW-API-KEY": clientSecret,
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch map" },
      { status: response.status }
    );
  }

  const imageBuffer = await response.arrayBuffer();

  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import {
  isValidAccessToken,
  RESOURCE_ACCESS_COOKIE,
} from "@/lib/resource-access-token";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(RESOURCE_ACCESS_COOKIE)?.value;

  return NextResponse.json(
    { unlocked: isValidAccessToken(token) },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}

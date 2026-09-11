import { NextRequest, NextResponse } from "next/server";
import { addOrUpdateResourceContact } from "@/lib/mailchimpResourceAccess";
import {
  createAccessToken,
  RESOURCE_ACCESS_COOKIE,
  RESOURCE_ACCESS_SECONDS,
} from "@/lib/resource-access-token";
import { getIp, isHoneypotTripped, isTooFast, isRateLimited } from "@/lib/spamGuard";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resourceTypes = new Set(["resource", "magazine", "team-research"]);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const resourceId =
      typeof body.resourceId === "string" ? body.resourceId.trim() : "";
    const resourceType =
      typeof body.resourceType === "string" ? body.resourceType : "";
    const companyWebsite =
      typeof body.companyWebsite === "string" ? body.companyWebsite : "";

    // Hidden honeypot field: bots often fill it in.
    if (isHoneypotTripped(companyWebsite) || isTooFast(body.formLoadedAt)) {
      return NextResponse.json({ ok: true });
    }

    if (isRateLimited(getIp(request), 10, 3_600_000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !emailPattern.test(email) ||
      email.length > 254 ||
      !resourceId ||
      resourceId.length > 120 ||
      !resourceTypes.has(resourceType)
    ) {
      return NextResponse.json(
        { error: "Please check your details." },
        { status: 400 }
      );
    }

    await addOrUpdateResourceContact({
      name,
      email,
      resourceId,
      resourceType: resourceType as "resource" | "magazine" | "team-research",
    });

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: RESOURCE_ACCESS_COOKIE,
      value: createAccessToken(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: RESOURCE_ACCESS_SECONDS,
    });

    return response;
  } catch (error) {
    console.error("Resource unlock failed", error);
    return NextResponse.json(
      { error: "We could not process that request. Please try again." },
      { status: 500 }
    );
  }
}

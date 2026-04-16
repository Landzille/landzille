import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function middleware(request: NextRequest) {
  // x-forwarded-for can be "1.2.3.4, 10.0.0.1" — take only the first IP
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0].trim() ?? "anonymous";

  try {
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return new NextResponse("Too many requests. Slow down!", { status: 429 });
    }
  } catch (err) {
    // Fail open: if Redis is unreachable, don't block legitimate traffic
    console.error("Rate limit check failed:", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};

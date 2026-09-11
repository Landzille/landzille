const rateMap = new Map<string, { count: number; resetAt: number }>();

export function getIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.length > 0;
}

export function isTooFast(formLoadedAt: unknown, minMs = 3000): boolean {
  if (!formLoadedAt || typeof formLoadedAt !== "string") return true;
  const ts = parseInt(formLoadedAt, 10);
  if (isNaN(ts)) return true;
  return Date.now() - ts < minMs;
}

export function isRateLimited(
  ip: string,
  maxPerWindow: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= maxPerWindow) return true;
  entry.count++;
  return false;
}

import { createHmac, timingSafeEqual } from "crypto";

export const RESOURCE_ACCESS_COOKIE = "lz_resource_access";
export const RESOURCE_ACCESS_SECONDS = 45 * 24 * 60 * 60;

function signature(value: string) {
  const secret = process.env.RESOURCE_ACCESS_SECRET;
  if (!secret) throw new Error("RESOURCE_ACCESS_SECRET is missing");
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function createAccessToken() {
  const expiresAt = String(
    Math.floor(Date.now() / 1000) + RESOURCE_ACCESS_SECONDS
  );
  return `${expiresAt}.${signature(expiresAt)}`;
}

export function isValidAccessToken(token?: string) {
  if (!token) return false;

  const [expiresAt, suppliedSignature] = token.split(".");
  if (!expiresAt || !suppliedSignature) return false;
  if (!/^\d+$/.test(expiresAt)) return false;
  if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

  const expectedSignature = signature(expiresAt);
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);

  return (
    supplied.length === expected.length &&
    timingSafeEqual(supplied, expected)
  );
}

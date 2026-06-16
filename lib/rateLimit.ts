/**
 * Lightweight in-memory rate limiter (per serverless instance).
 * For production-grade limits across instances, swap for Vercel KV / Upstash.
 */
const hits = new Map<string, number[]>();

export function simpleRateLimit(id: string, max = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const recent = (hits.get(id) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(id, recent);
    return false;
  }
  recent.push(now);
  hits.set(id, recent);
  return true;
}

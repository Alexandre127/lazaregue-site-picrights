// Rate-limiting léger en mémoire (par instance serverless) — garde-fou contre
// l'abus/le coût des routes IA. Pour une garantie stricte multi-instances,
// brancher plus tard un store partagé (Upstash / Vercel KV).

const hits = new Map() // ip -> [timestamps]

export function getIp(req) {
  const xff = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim()
  return xff || req.headers.get('x-real-ip') || 'unknown'
}

export function rateLimit(ip, { limit = 15, windowMs = 3600000 } = {}) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < windowMs)
  if (arr.length >= limit) return false
  arr.push(now)
  hits.set(ip, arr)
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (!v.some((t) => now - t < windowMs)) hits.delete(k)
    }
  }
  return true
}

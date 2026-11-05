// Helpers for the contact form endpoint: escaping user input placed in the e-mail HTML,
// basic field validation and a per-IP limit on submissions.

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c])
}

const LIMITS = { name: 100, email: 254, phone: 40, message: 5000 } as const
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactFields = { name: string; email: string; phone: string; message: string }

// Returns the cleaned fields, or null when the payload is not acceptable.
export function parseContactFields(body: unknown): ContactFields | null {
  if (!body || typeof body !== 'object') return null
  const raw = body as Record<string, unknown>
  const field = (key: keyof ContactFields) => {
    const value = raw[key]
    if (value === undefined || value === null) return ''
    return typeof value === 'string' ? value.trim() : null
  }
  const fields = { name: field('name'), email: field('email'), phone: field('phone'), message: field('message') }
  if (Object.values(fields).some((v) => v === null)) return null
  const clean = fields as ContactFields
  if (!clean.email || !clean.message || !EMAIL_RE.test(clean.email)) return null
  if ((Object.keys(LIMITS) as (keyof ContactFields)[]).some((k) => clean[k].length > LIMITS[k])) return null
  return clean
}

// Header values must not carry line breaks (the name ends up in the subject).
export function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, ' ')
}

// In-memory sliding window: enough for the single container the site runs in.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent)
    return true
  }
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 10_000) {
    for (const [k, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k)
  }
  return false
}

// Behind Dokploy's Traefik the client address arrives in X-Real-IP / X-Forwarded-For.
export function clientKey(headers: Headers): string {
  return headers.get('x-real-ip')?.trim() || headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

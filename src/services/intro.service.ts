/* src/services/profile.service.ts */
const BASE = process.env.ZEPHYR_IMG

function ensureUrl(url: string | undefined, name: string): string {
  if (!url) {
    throw new Error(`${name} env not set`)
  }
  return url
}


export async function getProfile(): Promise<string> {
  const base = ensureUrl(BASE, 'ZEPHYR_IMG')

  const url = `${base}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`API Zephyr error ${res.status}`)
  }
  return url
}
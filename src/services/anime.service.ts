const BASE = process.env.ANIME_API_BASE
const DEFAULT = process.env.ANIME_API

function ensureUrl(url: string | undefined, name: string): string {
  if (!url) {
    throw new Error(`${name} env not set`)
  }
  return url
}

/* =========================
   Random Default
========================= */

export async function getRandomWaifu(): Promise<string> {
  const api = ensureUrl(DEFAULT, 'ANIME_API')

  const response = await fetch(api)

  if (!response.ok) {
    throw new Error('Failed to fetch waifu image')
  }

  const data = await response.json()

  if (!data.url) {
    throw new Error('Invalid anime API response')
  }

  return data.url
}

/* =========================
   By Category
========================= */

export async function getAnime(
  category: string = 'waifu'
): Promise<string> {

  const base = ensureUrl(BASE, 'ANIME_API_BASE')

  const url =
    `${base}/${encodeURIComponent(category)}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Anime API error ${res.status}`)
  }

  const data = await res.json()

  if (!data.url) {
    throw new Error('Invalid anime API response')
  }

  return data.url
}
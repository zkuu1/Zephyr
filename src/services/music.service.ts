import axios from 'axios'

const BASE = process.env.MUSIC_API_BASE 

// Random music → misal trending
export async function getRandomMusic() {
  try {
    const res = await axios.get(`${BASE}/top/trending`)
    if (!res.data || res.data.length === 0) throw new Error('No music found')
    
    // ambil 1 lagu random dari list
    const randomIndex = Math.floor(Math.random() * res.data.length)
    return res.data[randomIndex]
  } catch (err) {
    throw new Error('Failed to fetch random music')
  }
}

// Search music by keyword
export async function searchMusic(keyword: string) {
  try {
    const res = await axios.get(`${BASE}/search`, {
      params: { query: keyword }
    })
    if (!res.data || !res.data.results) throw new Error('No results found')
    
    return res.data.results
  } catch (err) {
    throw new Error('Failed to search music')
  }
}
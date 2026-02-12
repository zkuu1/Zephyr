

const BASE = process.env.MUSIC_API_BASE 


export async function searchMusic(query: string) {
  const base = process.env.MUSIC_API_BASE!
  const res = await fetch(`${base}/search/songs?query=${encodeURIComponent(query)}`)
  const json = await res.json()
  return json.data.results
}


export async function getSongAudio(id: string): Promise<string> {
  // ⚠️ endpoint DETAIL, bukan search
  const res = await fetch(`https://saavn.me/songs?id=${id}`)
  const json = await res.json()

  // biasanya response berbentuk array
  const song = Array.isArray(json.data) ? json.data[0] : json.data

  if (!song || !song.downloadUrl) {
    throw new Error("Download URL missing")
  }

  const best =
    song.downloadUrl.find((d: any) => d.quality === "320kbps") ??
    song.downloadUrl[song.downloadUrl.length - 1]

  return best.url
}


export async function getRandomMusic() {
  const randomWords = ['love', 'night', 'sad', 'happy', 'dream']
  const keyword = randomWords[Math.floor(Math.random() * randomWords.length)]

  const songs = await searchMusic(keyword)
  const randomSong = songs[Math.floor(Math.random() * songs.length)]

  return randomSong.id
}

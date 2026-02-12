import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { getRandomMusic, searchMusic, getSongAudio } from '../services/music.service.js'
import { fetchAudioBuffer } from '../utils/buffers.js'
import type { MusicSearchResult } from '../types/music.type.js'


export async function randomMusicCommand(sock: WASocket, msg: WAMessage) {
  if (!msg.key.remoteJid) return
  const jid = msg.key.remoteJid

  try {
    const results = await searchMusic('love')
    const random = results[Math.floor(Math.random() * results.length)]

    const audioUrl = await getSongAudio(random.id)
    const audioBuffer = await fetchAudioBuffer(audioUrl)

    await sock.sendMessage(
      jid,
      {
        audio: audioBuffer,
        mimetype: 'audio/mpeg'
      },
      { quoted: msg }
    )
  } catch (err) {
    console.error(err)
    await sock.sendMessage(jid, { text: 'Gagal mengambil musik 🎵' }, { quoted: msg })
  }
}

export async function searchMusicCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid
  const keyword = args.join(' ')

  if (!keyword) {
    return sock.sendMessage(
      jid,
      { text: 'Contoh: .music believer' },
      { quoted: msg }
    )
  }

  try {
    const results = await searchMusic(keyword)

    let text = '🎵 *Search results*\n\n'
    results.slice(0, 5).forEach((song: MusicSearchResult, i: number) => {
      text += `${i + 1}. ${song.songName}\n🎤 ${song.albumName}\n▶️ /musicplay ${song.songId}\n\n`
    })

    await sock.sendMessage(jid, { text }, { quoted: msg })
  } catch (err) {
    await sock.sendMessage(
      jid,
      { text: 'Music search failed.' },
      { quoted: msg }
    )
  }
}

export async function playMusicCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  const jid = msg.key.remoteJid
  if (!jid) return

  const id = args[0]
  if (!id) {
    await sock.sendMessage(
      jid,
      { text: "Masukkan ID lagu.\nContoh: .play gS9Pz7W3" },
      { quoted: msg }
    )
    return
  }

  try {
    await sock.sendMessage(
      jid,
      { text: "⏳ Mengambil audio..." },
      { quoted: msg }
    )

    const audioUrl = await getSongAudio(id)
    const audioBuffer = await fetchAudioBuffer(audioUrl)

    await sock.sendMessage(
      jid,
      {
        audio: audioBuffer,
        mimetype: "audio/mpeg",
        ptt: false
      },
      { quoted: msg }
    )
  } catch (err) {
    console.error("PLAY MUSIC ERROR:", err)
    await sock.sendMessage(
      jid,
      { text: "❌ Gagal memutar lagu." },
      { quoted: msg }
    )
  }
}


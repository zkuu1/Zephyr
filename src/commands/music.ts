import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { getRandomMusic, searchMusic } from '../services/music.service.js'

export async function randomMusicCommand(sock: WASocket, msg: WAMessage) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid

  try {
    const song = await getRandomMusic()
    await sock.sendMessage(jid, {
      audio: { url: song.media_url },
      mimetype: 'audio/mpeg',
      caption: `🎵 ${song.name} - ${song.singers}`
    }, { quoted: msg })
  } catch (err) {
    await sock.sendMessage(jid, { text: 'Failed to get music.' }, { quoted: msg })
  }
}

export async function searchMusicCommand(sock: WASocket, msg: WAMessage, args: string[]) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid
  const keyword = args.join(' ')
  if (!keyword) return sock.sendMessage(jid, { text: 'Provide a search keyword.' }, { quoted: msg })

  try {
    const results = await searchMusic(keyword)
    let text = '🎵 Search results:\n\n'
    results.slice(0, 5).forEach((song: any, i: number) => {
      text += `${i+1}. ${song.name} - ${song.singers}\n${song.media_url}\n\n`
    })

    await sock.sendMessage(jid, { text }, { quoted: msg })
  } catch (err) {
    await sock.sendMessage(jid, { text: 'Music search failed.' }, { quoted: msg })
  }
}
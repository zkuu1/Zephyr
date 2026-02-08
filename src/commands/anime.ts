import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { getAnime, getNsfwAnime } from '../services/anime.service.js'
import { animeText } from '../messages/anime.message.js'

export async function animeCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid
  const category = args[0] || 'waifu'

  try {
    const url = await getAnime(category)

    await sock.sendMessage(
      jid,
      {
        image: { url },
        caption: `Random ${category}\n${animeText}`
      },
      { quoted: msg }
    )
  } catch (err) {
    await sock.sendMessage(
      jid,
      { text: 'Anime API error or category not found.' },
      { quoted: msg }
    )
  }
}

  //  RANDOM NSFW ANIME IMAGE  //

  export async function nsfwAnimeCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid
  const category = args[0] || 'waifu'

  try {
    const url = await getNsfwAnime(category)

    await sock.sendMessage(
      jid,
      {
        image: { url },
        caption: `Random ${category}\n${animeText}`
      },
      { quoted: msg }
    )
  } catch (err) {
    await sock.sendMessage(
      jid,
      { text: 'Anime API error or category not found.' },
      { quoted: msg }
    )
  }
}

 
  

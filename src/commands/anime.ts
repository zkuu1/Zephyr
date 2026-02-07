import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { getAnime } from '../services/anime.service.js'
import { animeText } from '../messages/anime.message.js'

export async function animeCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg?.key?.remoteJid) return

  const jid = msg.key.remoteJid
  const category = args[0] || 'waifu'

  const url = await getAnime(category)

  await sock.sendMessage(
    jid,
    {
      image: { url },
      caption: `Random ${category}
      `,
      text: animeText
    },
    { quoted: msg }
  )
}
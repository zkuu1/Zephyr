import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { introText } from '../messages/intro.message.js'
import { getProfile } from '../services/intro.service.js'

export async function introCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid

  try {
    const url = await getProfile()

    await sock.sendMessage(
      jid,
      {
        image: { url },
        caption: introText 
      },
      { quoted: msg }
    )
  } catch (err) {
    console.error('introCommand error:', err)

    await sock.sendMessage(
      jid,
      {
        text: 'Failed to load profile image.'
      },
      { quoted: msg }
    )
  }
}
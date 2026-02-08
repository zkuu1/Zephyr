import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { downloadImageFromWA } from '../utils/downloadImage.js'
import { bufferToWebp } from '../utils/buffers.js'
import { downloadImageFromUrl } from '../utils/downloadImage.js'

export async function stickerWaCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg.key.remoteJid) return
  const jid = msg.key.remoteJid

  try {
    const quoted =
      msg.message?.extendedTextMessage?.contextInfo?.quotedMessage

    if (!quoted?.imageMessage) {
      await sock.sendMessage(
        jid,
        { text: 'Reply image then use /sticker' },
        { quoted: msg }
      )
      return
    }

    const imageBuffer = await downloadImageFromWA(quoted.imageMessage)
    const webpBuffer = await bufferToWebp(imageBuffer)

    await sock.sendMessage(jid, { sticker: webpBuffer }, { quoted: msg })
  } catch (err) {
    console.error('stickerCommand error:', err)
    await sock.sendMessage(
      jid,
      { text: 'Failed to create sticker' },
      { quoted: msg }
    )
  }
}

export async function stickerUrlCommand(
  sock: WASocket,
  msg: WAMessage,
  args: string[]
) {
  if (!msg.key.remoteJid) return
  const jid = msg.key.remoteJid

  try {
    const imageUrl = args[0]

    if (!imageUrl || !imageUrl.startsWith('http')) {
      await sock.sendMessage(
        jid,
        { text: 'Send link image.\nexample: /stickerurl https://...' },
        { quoted: msg }
      )
      return
    }

    const imageBuffer = await downloadImageFromUrl(imageUrl)
    const webpBuffer = await bufferToWebp(imageBuffer)

    await sock.sendMessage(jid, { sticker: webpBuffer }, { quoted: msg })
  } catch (err) {
    console.error('stickerCommand link error:', err)
    await sock.sendMessage(
      jid,
      { text: 'Link image not valid' },
      { quoted: msg }
    )
  }
}







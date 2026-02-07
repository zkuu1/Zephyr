import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { onMessage } from './handlers/message.handler.js'

export function bindMessageHandler(sock: WASocket) {
  sock.ev.on('messages.upsert', async (event) => {
    try {
      if (event.type !== 'notify') return
      if (!event.messages?.length) return

      const msg: WAMessage = event.messages[0]

      if (!msg.message) return
      if (msg.key.fromMe) return
      if (msg.key.remoteJid === 'status@broadcast') return

      await onMessage(sock, msg)

    } catch (err) {
      console.error('Message handler error:', err)
    }
  })
}
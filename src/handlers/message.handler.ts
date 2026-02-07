import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { handleCommand } from './command.handler.js'

export async function onMessage(sock: WASocket, msg: WAMessage) {

  /* ===== GUARD WA EVENT ===== */

  if (!msg?.message) return
  if (!msg?.key?.remoteJid) return
  if (msg.key.fromMe) return
  if (msg.key.remoteJid === 'status@broadcast') return

  const text = extractText(msg)
  if (!text) return

  if (!text.startsWith('/')) return

  /* ===== PARSE COMMAND ===== */

  const parts = text.slice(1).trim().split(/\s+/)
  const command = parts[0].toLowerCase()
  const args = parts.slice(1)

  await handleCommand(sock, msg, command, args)
}

/* ======================= */

function extractText(msg: WAMessage): string | null {
  const m = msg.message
  if (!m) return null

  return (
    m.conversation ||
    m.extendedTextMessage?.text ||
    m.imageMessage?.caption ||
    m.videoMessage?.caption ||
    null
  )
}
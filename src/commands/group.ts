import type { WASocket, WAMessage } from '@whiskeysockets/baileys'

export async function tagAllCommand(sock: WASocket, msg: WAMessage) {
    const jid = msg.key.remoteJid
    if (!jid || !jid.endsWith('@g.us')) return

    const groupMetadata = await sock.groupMetadata(jid)
    const mentions = groupMetadata.participants.map(p => `@${p.id.split('@')[0]}`).join(' ')

    await sock.sendMessage(jid, {
        text: `Tag All Member! 👀 \n${mentions}`,
        mentions: groupMetadata.participants.map(p => p.id)
    }, { quoted: msg })
}

export async function hideTagCommand(sock: WASocket, msg: WAMessage) {
  if (!msg?.key?.remoteJid) return
  const jid = msg.key.remoteJid

  const groupMeta = await sock.groupMetadata(jid)
  const mentions = groupMeta.participants.map(p => p.id)

  await sock.sendMessage(jid, {
    text: 'Hidetag',
    mentions
  }, { quoted: msg })
}
import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { introText } from '../messages/intro.message.js'

export async function introCommand(
    sock: WASocket,
    msg: WAMessage,
    args: string[]
) {
    if (!msg?.key?.remoteJid) return
    const jid = msg.key.remoteJid

    

    await sock.sendMessage(
        jid,
        {
            text: introText,
        },
        { quoted: msg }
    )
    
}
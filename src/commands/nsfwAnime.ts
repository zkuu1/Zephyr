import type { WASocket, WAMessage } from '@whiskeysockets/baileys'
import { getNsfwAnime } from '../services/anime.service.js'
import { animeText } from '../messages/anime.message.js'


export async function nsfwWaifuCommand(
    sock: WASocket,
    msg: WAMessage,
    args: string[]
  ) {
    if (!msg?.key?.remoteJid) return
    const jid = msg.key.remoteJid
    const category = 'waifu'
    try {
        const url = await getNsfwAnime(category)
        await sock.sendMessage(
        jid,
        {
            image: { url },
            caption: `Anime ${category}\n${animeText}`
        },
        { quoted: msg }
      )
    } catch (err) {
      await sock.sendMessage(
        jid,
        { text: 'Feature not found.' },
        { quoted: msg }
      )
    }
}

export async function nsfwNekoCommand(
    sock: WASocket,
    msg: WAMessage,
    args: string[]
  ) {
    if (!msg?.key?.remoteJid) return
    const jid = msg.key.remoteJid
    const category = 'neko'
    try {
        const url = await getNsfwAnime(category)
        await sock.sendMessage(
        jid,
        {
            image: { url },
            caption: `Anime ${category}\n${animeText}`
        },
        { quoted: msg }
      )
    } catch (err) {
      await sock.sendMessage(
        jid,
        { text: 'Feature not found.' },
        { quoted: msg }
      )
    }
}

export async function nsfwTrapCommand(
    sock: WASocket,
    msg: WAMessage,
    args: string[]
  ) {
    if (!msg?.key?.remoteJid) return
    const jid = msg.key.remoteJid
    const category = 'trap'
    try {
        const url = await getNsfwAnime(category)
        await sock.sendMessage(
        jid,
        {
            image: { url },
            caption: `Anime ${category}\n${animeText}`
        },
        { quoted: msg }
      )
    } catch (err) {
      await sock.sendMessage(
        jid,
        { text: 'Feature not found.' },
        { quoted: msg }
      )
    }
}

export async function nsfwBlowjobCommand(
    sock: WASocket,
    msg: WAMessage,
    args: string[]
  ) {
    if (!msg?.key?.remoteJid) return
    const jid = msg.key.remoteJid
    const category = 'blowjob'
    try {
        const url = await getNsfwAnime(category)
        await sock.sendMessage(
        jid,
        {
            image: { url },
            caption: `Anime ${category}\n${animeText}`
        },
        { quoted: msg }
      )
    } catch (err) {
      await sock.sendMessage(
        jid,
        { text: 'Feature not found.' },
        { quoted: msg }
      )
    }
}
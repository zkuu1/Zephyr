import { downloadContentFromMessage } from '@whiskeysockets/baileys'
import axios from 'axios'


export async function downloadImageFromWA(imageMessage: any): Promise<Buffer> {
  const stream = await downloadContentFromMessage(imageMessage, 'image')
  let buffer = Buffer.from([])

  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }

  return buffer
}

export async function downloadImageFromUrl(url: string): Promise<Buffer> {
  const res = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 10000
  })

  return Buffer.from(res.data)
}

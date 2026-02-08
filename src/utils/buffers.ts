import { readFileSync } from 'fs'
import { writeFileSync } from 'fs'
import { execSync } from 'child_process'
import axios from 'axios'
import sharp from 'sharp'


export async function bufferToWebp(buffer: Buffer): Promise<Buffer> {
  return await sharp(buffer)
    .resize(512, 512, { fit: 'inside' })
    .webp({ quality: 80 })
    .toBuffer()
}

export async function imageToWebp(url: string): Promise<Buffer> {
    
    const res = await axios(url, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(res.data)

    const tmpInput = './tmp_input.jpg'
    const tmpOutput = './tmp_output.webp'
    writeFileSync(tmpInput, buffer)

    // Convert ke WebP
    execSync(`cwebp -q 80 ${tmpInput} -o ${tmpOutput}`)

    const webpBuffer = Buffer.from(await import('fs').then(fs => fs.promises.readFile(tmpOutput)))
    return webpBuffer
}
import axios from 'axios'

export async function fetchAudioFromApi(url: string): Promise<Buffer> {
  const res = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 15000,
    validateStatus: () => true
  })

  const contentType = res.headers['content-type']

  if (!contentType?.startsWith('audio')) {
    throw new Error('API did not return audio')
  }

  return Buffer.from(res.data)
}


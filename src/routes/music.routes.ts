import { Hono } from 'hono'
import { getRandomMusic, searchMusic } from '../services/music.service.js'

export const musicRoutes = new Hono()
musicRoutes.get('/', async c => {
  const url = await getRandomMusic()
  return c.json({ url })
})

musicRoutes.get('/search', async c => {
  const query = c.req.query('q')
  if (!query) {
    return c.json({ error: 'Query parameter "q" is required' }, 400)
  }
  const results = await searchMusic(query)
  return c.json({ results })
})
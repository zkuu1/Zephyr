
import { Hono } from 'hono'
import { getAnime, getNsfwAnime} from '../services/anime.service.js'

export const animeRoutes = new Hono()

animeRoutes.get('/', async c => {
  const cat = c.req.query('cat') ?? 'waifu'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/megumin', async c => {
  const cat = c.req.query('cat') ?? 'megumin'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/shinobu', async c => {
  const cat = c.req.query('cat') ?? 'shinobu'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/neko', async c => {
  const cat = c.req.query('cat') ?? 'neko'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/bully', async c => {
  const cat = c.req.query('cat') ?? 'bully'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/cuddle', async c => {
  const cat = c.req.query('cat') ?? 'cuddle'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/cry', async c => {
  const cat = c.req.query('cat') ?? 'cry'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/hug', async c => {
  const cat = c.req.query('cat') ?? 'hug'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/awoo', async c => {
  const cat = c.req.query('cat') ?? 'awoo'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/kiss', async c => {
  const cat = c.req.query('cat') ?? 'kiss'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/lick', async c => {
  const cat = c.req.query('cat') ?? 'lick'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/pat', async c => {
  const cat = c.req.query('cat') ?? 'pat'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/smug', async c => {
  const cat = c.req.query('cat') ?? 'smug'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/bonk', async c => {
  const cat = c.req.query('cat') ?? 'bonk'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/yeet', async c => {
  const cat = c.req.query('cat') ?? 'yeet'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/smile', async c => {
  const cat = c.req.query('cat') ?? 'smile'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/blush', async c => {
  const cat = c.req.query('cat') ?? 'blush'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/wave', async c => {
  const cat = c.req.query('cat') ?? 'wave'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/highfive', async c => {
  const cat = c.req.query('cat') ?? 'highfive'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/nom', async c => {
  const cat = c.req.query('cat') ?? 'nom'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/bite', async c => {
  const cat = c.req.query('cat') ?? 'bite'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/gloomp', async c => {
  const cat = c.req.query('cat') ?? 'gloomp'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/slap', async c => {
  const cat = c.req.query('cat') ?? 'slap'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/kill', async c => {
  const cat = c.req.query('cat') ?? 'kill'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/kick', async c => {
  const cat = c.req.query('cat') ?? 'kick'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/wink', async c => {
  const cat = c.req.query('cat') ?? 'wink'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/happy', async c => {
  const cat = c.req.query('cat') ?? 'happy'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/poke', async c => {
  const cat = c.req.query('cat') ?? 'poke'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/dance', async c => {
  const cat = c.req.query('cat') ?? 'dance'
  const url = await getAnime(cat)
  return c.json({ url })
})


animeRoutes.get('/cringe', async c => {
  const cat = c.req.query('cat') ?? 'cringe'
  const url = await getAnime(cat)
  return c.json({ url })
})

// NSFW Routes
animeRoutes.get('/nsfw', async c => {
  const cat = c.req.query('cat') ?? 'waifu'
  const url = await getNsfwAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/nsfw/neko', async c => {
  const cat = c.req.query('cat') ?? 'neko'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/nsfw/trap', async c => {
  const cat = c.req.query('cat') ?? 'trap'
  const url = await getAnime(cat)
  return c.json({ url })
})

animeRoutes.get('/nsfw/blowjob', async c => {
  const cat = c.req.query('cat') ?? 'blowjob'
  const url = await getAnime(cat)
  return c.json({ url })
})





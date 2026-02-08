import { Hono } from "hono"



export const indexRoutes = new Hono()


indexRoutes.get('/', async c => {
  return c.json({
    status: 'ok',
    service: 'Zephyr WA Bot',
    author: 'Zkuu'
  })
})
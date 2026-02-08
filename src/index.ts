import 'dotenv/config'

import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  type WASocket
} from '@whiskeysockets/baileys'
import pino from 'pino'
import qrcode from 'qrcode-terminal'

import { bindMessageHandler } from './bot.js'

// IMPORT ROUTES
import { animeRoutes } from './routes/anime.routes.js'
import { indexRoutes } from './routes/index.routes.js'

/* =========================
   Hono App
========================= */

const app = new Hono()



app.route('/anime', animeRoutes)
app.route('/', indexRoutes)
/* =========================
   WhatsApp Starter
========================= */

let sock: WASocket | null = null

async function startWhatsApp() {
  console.log('\n Starting WhatsApp...')

  const { state, saveCreds } =
    await useMultiFileAuthState('./session')

  sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'info' }),
    browser: ['ZephyrBot', 'Chrome', '1.0'],
    syncFullHistory: false
  })

  sock.ev.on('creds.update', saveCreds)

  // bind command/message handler
  bindMessageHandler(sock)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update

    /* ===== QR ===== */
    if (qr) {
      console.log('\n📱 Scan QR berikut:\n')
      qrcode.generate(qr, { small: true })
    }

    /* ===== CONNECTED ===== */
    if (connection === 'open') {
      console.log(' WhatsApp connected\n')
    }

    /* ===== CLOSED ===== */
    if (connection === 'close') {
      const code =
        (lastDisconnect?.error as any)?.output?.statusCode

      console.log(' WA disconnected code:', code)

      const shouldReconnect =
        code !== DisconnectReason.loggedOut

      if (shouldReconnect) {
        console.log('🔁 Reconnecting...\n')
        startWhatsApp()
      } else {
        console.log(' Logged out. Delete /session and scan again.')
      }
    }
  })
}

/* =========================
   Main Bootstrap
========================= */

async function main() {
  await startWhatsApp()

  serve({
    fetch: app.fetch,
    port: 3000
  })

  console.log(' Hono server running on http://localhost:3000\n')
}

main().catch(err => {
  console.error('FATAL:', err)
})
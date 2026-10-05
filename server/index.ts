import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PrismaClient } from '@prisma/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

const prisma = new PrismaClient()
const app = express()
const port = Number(process.env.PORT || 3000)

app.use(cors())
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'gidis' })
})

app.post('/api/contact', async (req, res) => {
  const name = String(req.body?.name || '').trim()
  const email = String(req.body?.email || '').trim()
  const message = String(req.body?.message || '').trim()

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required.' })
    return
  }

  try {
    await prisma.contactMessage.create({ data: { name, email, message } })
    res.status(201).json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Could not save the message.' })
  }
})

app.post('/api/membership', async (req, res) => {
  const name = String(req.body?.name || '').trim()
  const email = String(req.body?.email || '').trim()
  const affiliation = String(req.body?.affiliation || '').trim()
  const category = String(req.body?.category || '').trim()

  if (!name || !email || !affiliation || !category) {
    res.status(400).json({ error: 'All membership fields are required.' })
    return
  }

  try {
    await prisma.membershipApplication.create({
      data: { name, email, affiliation, category },
    })
    res.status(201).json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Could not save the registration.' })
  }
})

app.use(express.static(distDir))

app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) {
    next()
    return
  }
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(port, () => {
  console.log(`GIDIS listening on port ${port}`)
})

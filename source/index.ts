import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const server = express()
const prisma = new PrismaClient()

server.use(cors())

server.get('/', async (req, res) => {
  const users = await prisma.user.findMany()

  res.send(users)
})

server.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT || 3333}`)
})
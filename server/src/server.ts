import express, { Express } from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'
import { articleRoutes } from './routes/articleRoutes'

const app: Express = express()
const PORT = 8000

// MongoDB
mongoose.connect('mongodb://mongodb:27017/MongoDbMasterSolutions')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

// Redis
export const redisClient = createClient({
    url: 'redis://redis-server:6379',
})

redisClient.connect()

redisClient.on('connect', () => {
    console.log('Connected to Redis')
})

// Express

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use(express.json())
app.use('/api', articleRoutes)

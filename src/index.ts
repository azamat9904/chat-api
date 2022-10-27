/**
 * Внешние модули
 */

import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { connectToDB } from './core/db'

dotenv.config()

/**
 * Роутеры
 */
import authRouter from './main/auth/auth.router'

/**
 * Переменные
 */

if (!process.env.PORT) {
    process.exit(-1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log('Listening the port: ' + PORT)
    })
})

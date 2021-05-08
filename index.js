

import express from 'express'
import { getUser, registerUser } from './src/handlers/index.js'

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => res.send('Init'))

app.get('/user/', getUser)

app.get('/register-user/', registerUser)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))

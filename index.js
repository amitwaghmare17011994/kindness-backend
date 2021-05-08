

import express from 'express'
import Routes from './src/routes/index.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(Routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

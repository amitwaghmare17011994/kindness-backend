

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => res.send('Hello'))

app.get('/api/', (req, res) => res.send('api'))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

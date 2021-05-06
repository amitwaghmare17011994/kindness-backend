 

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

express()
  .get('/', (req, res) => res.send('Hello'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

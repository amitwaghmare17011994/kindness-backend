

import express from 'express'
import dotenv from 'dotenv'
import Routes from './src/routes/index.js'
import db from './src/sequelize/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Routes)
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

db.sequelize.sync();

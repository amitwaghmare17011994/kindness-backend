import express from 'express'
import UserController from '../controlers/user.controller/index.js'

const Router = express.Router()

Router.get('/', (req, res) => res.send('Welcome!'))
Router.get('/user/', UserController.getUser)


export default Router
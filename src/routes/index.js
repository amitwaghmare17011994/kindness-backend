import express from 'express'
import AuthController from '../controlers/auth.controller/index.js'
import UserController from '../controlers/user.controller/index.js'
import verify from './auth.js'

const Router = express.Router()


Router.get('/', (req, res) => res.send('Welcome!'))

//auth routes
Router.get('/user/', verify, UserController.getUser)
//auth routes


Router.post('/login/', AuthController.login)
Router.post('/user-register/', UserController.registerUser)


export default Router
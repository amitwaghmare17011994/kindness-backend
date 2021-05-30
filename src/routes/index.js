import express from 'express'
import AuthController from '../controllers/auth.controller/index.js'
import PostController from '../controllers/post.controller/index.js'
import UserController from '../controllers/user.controller/index.js'
import verify from './auth.js'

const Router = express.Router()


Router.get('/', (req, res) => res.send('Welcome!'))

//auth routes
Router.get('/user/:id', verify, UserController.getUserById)
Router.get('/user/', verify, UserController.getUser)
Router.get('/post/:id', verify, PostController.getPostById)
Router.get('/post/', verify, PostController.getAllPost)
Router.get('/any-query/', UserController.getData)
Router.post('/login/', AuthController.login)
Router.post('/user-register/', UserController.registerUser)


export default Router
import express from 'express'
import AuthController from '../controllers/auth.controller/index.js'
import commentController from '../controllers/comment.controller/index.js'
import postController from '../controllers/post.controller/index.js'
import PostController from '../controllers/post.controller/index.js'
import UserController from '../controllers/user.controller/index.js'
import verify from './auth.js'

const Router = express.Router()


Router.get('/', (req, res) => res.send('Welcome!'))
Router.post('/login/', AuthController.login)

//auth routes
Router.get('/user/:id', verify, UserController.getUserById)
Router.get('/user/', verify, UserController.getUser)
Router.get('/post/:userId?', verify, PostController.getAllPost)
Router.get('/post/:id', verify, PostController.getPostById)
Router.post('/get-post-meta/', verify, PostController.getAllPostMeta)
Router.get('/any-query/', UserController.getData)
Router.post('/user-register/', UserController.registerUser)
Router.get('/post-comment/:id', verify, commentController.getCommentRelatedToPost)
Router.post('/create-post/', verify, postController.createPost)


//Follow unfollow users like, upvote, delete post, comment

export default Router
import { DBQuery } from "../../collections/user.collection/index.js"
import db from "../../sequelize/index.js"

class PostController {
    Post = db.post
    PostMeta = db.postMeta


    getAllPost = async (req, res) => {
        try {
            const allPost = await this.Post.findAll()
            res.send(allPost)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }


    getPostById = async (req, res) => {
        try {
            const allPost = await this.Post.findByPk(req.params.id)
            res.send(allPost)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    getPostByUserId = async (req, res) => {
        try {
            const allPost = await this.Post.findAll({
                    where: {post_author: req.params.id}
                  })
            res.send(allPost)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    getPostLikedByUser = async (req, res) => {
        try {
            const allPost = await this.PostMeta.findAll({
                    where: {meta_key: 'likeUserId'}
                  })
            res.send(allPost)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }
}   


export default new PostController()
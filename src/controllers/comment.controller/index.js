import { DBQuery } from "../../collections/user.collection/index.js"
import db from "../../sequelize/index.js"

class CommentController {
    Comment = db.comment

    getCommentRelatedToPost = async (req, res) => {
        try {
            const comments = await this.Comment.findAll({
                    where: {comment_post_ID: req.params.id}
                  })
            res.send(comments)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }
}   


export default new CommentController()
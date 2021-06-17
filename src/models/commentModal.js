// comment_author_url
// comment_author_IP
// comment_karma
// comment_approved
// comment_agent
// comment_parent
;

const CommentModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_comments",
      {
        comment_ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_post_ID: {type: Sequelize.INTEGER},
        comment_date: {type: Sequelize.DATE},
        comment_date_gmt: {type: Sequelize.DATE},
        comment_content: {type: Sequelize.STRING},
        comment_author: {type: Sequelize.STRING},
        comment_author_email: {type: Sequelize.STRING},
        comment_type: {type: Sequelize.STRING},
        user_id: {type: Sequelize.INTEGER},
    }, {
        timestamps: false
      }
    );
  };


export default CommentModel

import UserModel from "./user.js";

const PostModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_posts",
      {

        post_date: {type: Sequelize.DATE},
        post_date_gmt: {type: Sequelize.DATE},
        post_content: {type: Sequelize.STRING},
        post_title: {type: Sequelize.STRING},
        post_excerpt: {type: Sequelize.STRING},
        post_status: {type: Sequelize.STRING},
        comment_status: {type: Sequelize.STRING},
        ping_status: {type: Sequelize.STRING},
        post_password: {type: Sequelize.STRING},
        post_name: {type: Sequelize.STRING},
        to_ping: {type: Sequelize.STRING},
        pinged: {type: Sequelize.STRING},
        post_modified: {type: Sequelize.DATE},
        post_modified_gmt: {type: Sequelize.DATE},
        post_content_filtered: {type: Sequelize.STRING},
        // post_parent: 0,
        // menu_order: 0,
        post_type: {type: Sequelize.STRING},
        post_mime_type: {type: Sequelize.STRING},
        // comment_count: 0
    }, {
        timestamps: false
      }
    );
  };

//   PostModel.belongsTo(UserModel, {
//       as: 'author',
//       foreignKey: 'post_author'
//   });

export default PostModel
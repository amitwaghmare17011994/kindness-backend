import UserModel from "./user.js";

const PostMetaModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_posts",
      {
        post_id: {type: Sequelize.INTEGER},
        meta_key: {type: Sequelize.STRING},
        meta_value: {type: Sequelize.STRING},
    }, {
        timestamps: false
      }
    );
  };

export default PostMetaModel
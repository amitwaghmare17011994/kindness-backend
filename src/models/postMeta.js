import UserModel from "./user.js";

const PostMetaModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_postmeta",
      {
        meta_id:  {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
        post_id: {type: Sequelize.INTEGER},
        meta_key: {type: Sequelize.STRING},
        meta_value: {type: Sequelize.STRING},
    }, {
        timestamps: false
      }
    );
  };

export default PostMetaModel
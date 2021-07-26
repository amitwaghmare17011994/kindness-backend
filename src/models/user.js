const UserModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_users",
      {
        // ID: {type: sequelize.INTEGER, key: 'ID', primaryKey: true, autoIncrement: true },
        display_name: {type: Sequelize.STRING},
        user_email: {type: Sequelize.STRING},
        user_login: {type: Sequelize.BOOLEAN},
        user_pass: {type: Sequelize.STRING}
      }, {
        timestamps: false
      }
    );
  };

export default UserModel
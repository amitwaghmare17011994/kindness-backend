const UserModel = (sequelize, Sequelize) => {
    return sequelize.define(
      "wp_users",
      {
        // id: {type: sequelize.INTEGER, key: 'ID', primaryKey: true, autoIncrement: true },
        display_name: {type: Sequelize.STRING},
        user_email: {type: Sequelize.STRING},
        user_login: {type: Sequelize.BOOLEAN}
      }, {
        timestamps: false
      }
    );
  };

export default UserModel
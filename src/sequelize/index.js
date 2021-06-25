import Sequelize  from "sequelize";
import CommentModel from "../models/commentModal.js";
import PostModel from "../models/post.js";
import PostMetaModel from "../models/postMeta.js";
import UserModel from "../models/user.js";

//Local
const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "seekindness_app",
    dialect: "mysql",
    pool: {max: 5,min: 0,acquire: 30000,idle: 10000}
};

// const dbConfig = {
//     HOST: "172.105.97.217",
//     USER: "adminapp",
//     PASSWORD: "5as89jnod1a",
//     DB: "seekindness_app",
//     dialect: "mysql",
//     pool: {max: 5,min: 0,acquire: 30000,idle: 10000}
// };

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = UserModel(sequelize, Sequelize);
db.post = PostModel(sequelize, Sequelize)
db.postMeta = PostMetaModel(sequelize, Sequelize)
db.comment = CommentModel(sequelize, Sequelize)

 export default db;
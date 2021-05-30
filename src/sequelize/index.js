import Sequelize  from "sequelize";
import UserModel from "../models/user.js";

const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "seekindness_app",
    dialect: "mysql",
    pool: {max: 5,min: 0,acquire: 30000,idle: 10000}
};


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

 export default db;
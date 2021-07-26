import { DBQuery } from "../../collections/user.collection/index.js";
import db from "../../sequelize/index.js";

class UserController {
  User = db.user;

  getUser = async (req, res) => {
    try {
      const allUsers = await this.User.findAll();
      res.send(allUsers);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  getUserById = async (req, res) => {
    try {
      const allUsers = await this.User.findByPk(req.params.id);
      res.send(allUsers);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

export default new UserController();

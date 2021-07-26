import JWT from "jsonwebtoken";
import db from "../../sequelize/index.js";
import Sequelize from "sequelize";

const Op = Sequelize.Op;
class AuthController {
  User = db.user;
  login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const allUsers = await this.User.findAll({
        where: {
          user_login: username,
          user_pass: password,
        },
      });

      if (allUsers && allUsers.length) {
        const token = JWT.sign(
          {
            id: allUsers[0].id,
            name: allUsers[0].display_name,
            email: allUsers[0].user_email,
          },
          process.env.TOKEN_SERET_KEY
        );
        res.header("auth-user", token).send({
          token,
          userDetails: {
            id: allUsers[0].id,
            name: allUsers[0].display_name,
            email: allUsers[0].user_email,
          },
        });
      } else {
        res.status(500).send("user not found.");
      }
    } catch (error) {
      res.status(500).send("user not found.");
    }
  };

  startApp = async (req, res) => {
    const token = JWT.sign({ _id: Math.random() }, process.env.TOKEN_SERET_KEY);
    res.header("auth-token", token).send({ token });
  };

  register = async (req, res) => {
    try {
      const { username, password, email, name } = req.body;
      const allUsers = await this.User.findAll({
        where: {
          [Op.or]: [{ user_login: username }, { user_email: email }],
        },
      });

      if (allUsers && allUsers.length) {
        res.status(500).send("user already exists.");
      } else {
        await this.User.create({
          user_login: username,
          user_pass: password,
          display_name: name,
          user_email: email,
        });

        res.send("user created.");
      }
    } catch (error) {
      res.status(500).send("user not found.");
    }
  };
}
export default new AuthController();

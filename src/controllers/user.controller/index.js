import { DBQuery } from "../../collections/user.collection/index.js"
import db from "../../sequelize/index.js"

class UserController {
    User = db.user


    getUser = async (req, res) => {
        try {
            const allUsers = await this.User.findAll()
            res.send( allUsers)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }


    getUserById = async (req, res) => {
        try {
            const allUsers = await this.User.findByPk(req.params.id)
            res.send( allUsers)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    getData = async (req, res) => {
        try {
            const q = new DBQuery()
            const data = await q.anyQuery(req.query.q)
            res.send(JSON.stringify({ data }))
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

    registerUser = (req, res) => {
        res.send('Register User')
    }

}


export default new UserController()
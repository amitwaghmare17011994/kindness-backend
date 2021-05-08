import UserCollection from "../../collections/user.collection/index.js"

class UserController {

    getUser = async (req, res) => {
        try {
            const userCollection = new UserCollection()
            const allUsers = await userCollection.getAllUsers()
            res.send(JSON.stringify({ users: allUsers }))
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
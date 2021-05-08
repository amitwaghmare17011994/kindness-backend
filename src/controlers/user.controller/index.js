class UserController {

    getUser = (req, res) => {
        res.send('Get User')
    }

    registerUser = (req, res) => {
        res.send('Register User')
    }

}


export default new UserController()
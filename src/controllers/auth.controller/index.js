import JWT from 'jsonwebtoken'

class AuthController {
    login = (req, res) => {
        const token = JWT.sign({ _id: Math.random() }, process.env.TOKEN_SERET_KEY)
        res.header('auth-token', token).send(token)
    }
}
export default new AuthController()
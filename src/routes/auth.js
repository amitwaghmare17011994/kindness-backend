import JWT from 'jsonwebtoken'

const verify = (req, res, next) => {

    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).send('Access Denied!')
    }
    try {
        const isVerified = JWT.verify(token, process.env.TOKEN_SERET_KEY)
        req.user = isVerified
        next()
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}

export const isLoggedIn = (req, res, next) => {

    const token = req.header('auth-token')
    const userToken = req.header('auth-user')
    if (token && userToken) {
        const isVerified = JWT.verify(token, process.env.TOKEN_SERET_KEY)
        const hasLoggedIn = JWT.verify(userToken, process.env.TOKEN_SERET_KEY)
        req.user = isVerified && hasLoggedIn
        next()
    }
    try {
        
        return res.status(402).send('Not Logged In')
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}

export default verify
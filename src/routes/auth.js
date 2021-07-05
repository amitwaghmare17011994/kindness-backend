import JWT from 'jsonwebtoken'

const verify = (req, res, next) => {

    //Remove it later
    next();
    return;



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

export default verify
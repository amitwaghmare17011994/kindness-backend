import Connection from '../../db/index.js'


class User {
    getAllUsers = () => {
        return new Promise((resolve, reject) => {
            Connection.query("select * from wp_users", (err, res) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }
}

export default User
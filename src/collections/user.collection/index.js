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

export class DBQuery {
    anyQuery = (query) => {
        return new Promise((resolve, reject) => {
            Connection.query(query, (err, res) => {
                if (err) {
                    return reject(err)
                }
                return resolve(res)
            })
        })
    }
}

export default User
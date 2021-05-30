import Connection from '../../db/index.js'


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

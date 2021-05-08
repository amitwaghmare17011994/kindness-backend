import MySql from 'mysql'

const Connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'M@rkitn0w',
    database: 'seekindness_app'
})

export default Connection

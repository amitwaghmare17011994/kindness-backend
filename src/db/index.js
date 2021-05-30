import MySql from 'mysql'

const Connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seekindness_app'
})

export default Connection

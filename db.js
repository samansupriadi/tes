//connect  to database
const {Pool} = require('pg')

const db = new Pool({
    user:'root',
    host:'127.0.0.1',
    database:'barang',
    password:'root',
    port: 5432
})

module.exports = db
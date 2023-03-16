//database.js
const Pool = require("pg").Pool

const pool = new Pool({
    user: 'your-postgres-username',
    password: 'your-password',
    database: 'your-database-name',
    host: 'localhost',
    port: 5432 //postgres default port
})

module.exports = pool

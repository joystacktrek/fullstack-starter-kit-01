//database.js
const Pool = require("pg").Pool

const pool = new Pool({
    user: 'your-postgres-username',
    password: 'your-password',
    database: 'your-database-name',
    host: 'your_host',
    port: 5432 //postgres default port
})

// SQL query to create a table in the database
const createTableQuery = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  );`;
  
  // Execute the SQL query to create the table
  pool.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Table "users" created successfully!');
    pool.end(); // close the connection pool
  });

//We will export the pool object so that we can use it in other files  
module.exports = pool

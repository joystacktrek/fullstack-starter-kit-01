//database.js
const Pool = require("pg").Pool

const pool = new Pool({
    user: 'postgres', //your-postgre-susername
    password: '1234', //your-postgre-password
    database: 'StarterKit', //your-postgre-database-name
    host: 'localhost', //postgres default host
    port: 5432 //postgres default port
})

/*
//You may Skip this part if you follow the setup guide in the Learning Materials

// SQL query to create a table in the database using Node JS
const createTableQuery = `CREATE TABLE "users" ("First_name" TEXT, "Last_name" TEXT, "ID" INTEGER);`;
  
  // Execute the SQL query to create the table
  pool.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Table "users" created successfully!');
    pool.end(); // close the connection pool
  });
*/

//We will export the pool object so that we can use it in other files  
module.exports = pool

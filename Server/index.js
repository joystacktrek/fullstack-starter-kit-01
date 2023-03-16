// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

//Connect to the database configured in database.js
const pool = require('./database') 

// Create an instance of the express application
const app = express();

// Define routes
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, world!';
  res.send(message);
});

// Define a route that queries the database to select all the values in our `user` table 
app.get('/user', async (req, res) => { 
  try { 
  const result = await pool.query(`SELECT * from "users";`);
  res.send(result.rows[0].message); 
  } 
  catch (error) {
   console.error(error); res.sendStatus(500); 
   } 
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
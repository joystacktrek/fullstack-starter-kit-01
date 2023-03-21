// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

//use cors to allow cross origin resource sharing
const cors = require("cors")

//Connect to the database configured in database.js
const pool = require('./database') 

// Create an instance of the express application
const app = express();

// to allow cross origin resource sharing
app.use(cors())
// Use express.json() to parse JSON bodies into JS objects

app.use(express.json())
// Define routes
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, world!';
  res.send(message);
});

// Define a route that queries the database to select all the values in our `user` table 
app.get('/user', async (req, res) => { 
  try { 
  const result = await pool.query(`SELECT * from "users";`);
  res.send(result.rows); 
  } 
  catch (error) {
   console.error(error); res.sendStatus(500); 
   } 
});


// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


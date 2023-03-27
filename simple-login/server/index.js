// index.js

//dotenv to use environment variables
require('dotenv').config();

//use express to create a server
const express = require('express');

//use cors to allow cross origin resource sharing
const cors = require("cors")

//Connect to the database configured in database.js
const pool = require('./database') 



//encypt password using bcryptjs
const encrypt = require('bcryptjs');
//json webtoken
const jwt = require('jsonwebtoken');

// Create an instance of the express application
const app = express();

//it will use the port number from the environment variable or 4001 if there is no environment variable
const PORT = process.env.PORT || 4001;

// to allow cross origin resource sharing
app.use(cors())
// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())

// listen method binds and listens the connections on the specified host and port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Define routes
app.get('/', (req, res) => {
  const message ='Hello, world!';
  res.send(message);
});





// Define a route that queries the database to select all the values in our `user` table 
app.get('/users', async (req, res) => { 
  try { 
  const result = await pool.query(`SELECT * from "credentials";`);
  res.send(result.rows); 
  } 
  catch (error) {
   console.error(error); res.sendStatus(500); 
   } 
});


//Signup route
app.post('/api/user-signup', async (req, res) => {
  try {
    //get data from request body
    const signup_data = req.body;
    const user = {f_name: signup_data.f_name, l_name: signup_data.l_name, email: signup_data.email, password: signup_data.password}

    //check email if already exist
    const check_email = await pool.query(`SELECT * from "credentials" WHERE "email" = '${user.email}';`);
    if (check_email.rows.length > 0) {
      res.send("Email already exist")
    }

    else {
    //encrypt password
    //the default salt is 10 the higher the number the more secure the password but the longer it takes to encrypt
    const salt = await encrypt.genSalt(10);
    user.password = await encrypt.hash(user.password, salt);
    //insert data to database
    const result = await pool.query(`INSERT INTO "credentials" ("first_name", "last_name", "email", "password") VALUES ('${user.f_name}', '${user.l_name}', '${user.email}', '${user.password}');`);
    res.send("Account created successfully").status(201);
    }
  }
    catch (error) {
      console.error(error); res.sendStatus(500);
      }
});


//login route
app.get('/api/user-login', async (req, res) => {
  try {
    const login_data = req.query;
    const credentials = {email: login_data.Email, password: login_data.Password}
    //check email if already exist
    const check_email = await pool.query(`SELECT * FROM credentials WHERE "email" = '${credentials.email}';`);

    if (check_email.rows.length > 0) {
      const user = check_email.rows[0];
      //will compare the password from the database with the password from the request body
      const validPassword =  encrypt.compare(credentials.password, user.password);
      if (!validPassword) return res.send('Invalid email or password.').status(401);

      //create a token
      const token = jwt.sign(credentials.email, process.env.ACCESS_TOKEN_SECRET);
  
      
      //send user id and token to the client
      res.setHeader('auth-token', token).send({id: user.id, token: 'Bearer '+token}).status(200);
    }

    //if email does not exist in database return error
    else {
      res.sendStatus(401);
    }
  } 
  catch (error) {
    console.error(error); res.sendStatus(500);
  }
});


    

    //authentication middleware
const AuthenticateToken = (req, res, next) => {
  //get token from header
  const authHeader = req.headers['authorization']
  //split the token from the bearer
   const token = authHeader && authHeader.split(' ')[1]
   //if there is no token return 401
   if (token == null) return res.sendStatus(401)
   //verify the token using the secret key in the .env file
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
    //if there is an error return 403
     if (err) return res.sendStatus(403)
     //next() is used to move to the next middleware
     next()
   })
 }


 //we use AuthenticateToken as a middleware to protect the route from unauthorized access
 //if the token is valid the user will be able to access the route
 //if the token is invalid the user will not be able to access the route
  app.get('/api/credentials',AuthenticateToken, async (req, res) => {
    try {
      const id = req.query.id;
      const user = await pool.query(`SELECT * FROM "credentials" WHERE "id" = '${id}';`);
      res.send(user.rows[0]);
      console.log(user.rows[0])
    } catch (error) {
      console.error(error); res.sendStatus(500);
    }
});

  

 



## `server` folder structure 📁

```lua
server/
|-- node_modules/
|-- index.js
|-- database.js
|-- .env
|-- package.json
```
Explanation of the file structure:

-   `node_modules/`  : Contains all the downloaded packages from npm in your machine.
-   `server/`: Contains the source code for the backend.
    -   `index.js`: The main entry point for the backend.
    -   `database.js`: Database configurations.
    -   `.env`: Text configuration file for controlling your Applications environment constants.
    -   `package.json`: The file that describes the app and its dependencies.
---
### Packages we need in our backend 📦

### Cors
 - **Cross-Origin Resource Sharing** ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)-header based mechanism that allows a server to indicate any [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin) (domain, scheme, or port) other than its own from which a browser should permit loading resources.
```bash
npm i cors
```

**Express js**
- Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
```bash
npm i express
```

### .env (dotenv)
- dotenv file is a simple text configuration file for controlling your Applications environment constants.
```bash 
npm i dotenv --save
```


**bcryptjs**
- A library to help you hash passwords.
```bash
npm i bcryptjs
```
**node-postgres**
 - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
```bash
npm i pg
```

**nodemon**
- nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does  **not**  require  _any_  additional changes to your code or method of development. nodemon is a replacement wrapper for  `node`. To use  `nodemon`, replace the word  `node`  on the command line when executing your script.
```bash
npm i nodemon --save
```

**JSON Web Token (JWT)**
- JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
```bash
npm i jsonwebtoken
```

---

## 1. Create a new table 🗄
Lets start by configuring our database 

Create a new table named as `credentials`

To do this, 
1. Open your `pgadmin4`
2. Locate your `database` and go to `Query tool`
3. In your `Query Tool` paste the sql command below: 

```sql
CREATE TABLE "credentials" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(50) NOT NULL,
	"last_name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(100) NOT NULL,
	"password" VARCHAR(100) NOT NULL);
```

-   _**Hint**: Use lower letters when naming database objects. For separating words in the database object name, use underscore_




## 2. Setting up `server` 📂

1. Create a folder and name it as `server` and navigate into it
2.  Initialize new Node.js project using `npm init`
3. Install the packages we need:
	- `npm i express`
	- `npm i cors`
	- `npm i dotenv --save`
	- `npm i bcryptjs`
	- `npm i nodemon --save`
	- `npm i jsonwebtoken`
	- `npm i pg`
4. Create a new file called `index.js`
---
### 2.1 Set up `nodemon` 👀

`nodemon` is a command-line tool that **helps with the speedy development of Node** monitors your project directory and automatically restarts your node application when it detects any changes *(every time you save your file)*. This means that you do not have to stop and restart your applications in order for your changes to take effect.


 Open up `package.json` and locate `"script{}"`

paste the following code under `"script{}"`:
```js
"devStart": "nodemon index.js"
```

`package.json` should look like this:
> *(disregard the emojis)*



```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
 👉"devStart": "nodemon index.js"
},
  "author": "",
  "license": "ISC",
  "dependencies": {
	"bcryptjs": "^2.4.3",
	"cors": "^2.8.5",
	"dotenv": "^16.0.3",
	"express": "^4.18.2",
	"jsonwebtoken": "^9.0.0",
	"nodemon": "^2.0.22",
	"pg": "^8.10.0"
  }
}
```

---
### 2.2 Setting up .env (dotenv) 🔐

1. Create a new file called `.env`
2. Open up `.env`

### Configure your port 🔌
Configure what port are you going to use in your api.
```js
PORT = 4000 
```
### Generate a Secret 🤫
In your terminal, access `node console` by typing `node`:
```bash
node
```
result should look like this 
```bash
Welcome to Node.js v18.12.1.
Type ".help" for more information.
>
```
Generate a random crypto bytes, this randombytes will serve as our secret.
```bash
Welcome to Node.js v18.12.1.
Type ".help" for more information.
>require ('crypto').randomBytes(64).toString('hex')
```
This will generate  random 64 bytes encryption 
It will look something like this:
```bash
Welcome to Node.js v18.12.1.
Type ".help" for more information.
>require ('crypto').randomBytes(64).toString('hex')
'2a33860e1b5855ec4b397f851c594ce64e8c9b46a39265931fc3eeded18dfb5d4251f08a1fa7f088b986172ef0b40404839cfc8fbcb4c35e7cd5e7c65d84f57c'
```
> To quit node console just Press **CTRL+ c** (even on a Mac), or just call the process.  **.exit** method to exit from the Node console.

Copy and paste the generated key in your `.env`and name it as `ACCESS_TOKEN_SECRET`
```bash
PORT=4000
ACCESS_TOKEN_SECRET = '2a33860e1b5855ec4b397f851c594ce64e8c9b46a39265931fc3eeded18dfb5d4251f08a1fa7f088b986172ef0b40404839cfc8fbcb4c35e7cd5e7c65d84f57c'
```
---
### 2.2 Set up database connection ⚡
This will allow us to communicate to our database 

Create a file called `database.js`, and open it

Configure your database:
```js
//database.js
const  Pool = require("pg").Pool  
const  pool = new  Pool({
	user:  'postgres', //default postgres user
	password:  'your-password',
	database:  'your-database-name',
	host:  'localhost', //default host
	port:  5432  //default port
})
module.exports = pool
``` 

## 3.  `index.js` 📝

Now that we configure all the things we need, we can now proceed to `index.js` and write some code that will allow us to communicate to our `front-end` later.

### 3.1 Using packages 📦
Let's start by calling all the packages we install earlier and use them

```js
// index.js

  
//dotenv to use environment variables
require('dotenv').config();

//use express to create a server
const  express = require('express');

//use cors to allow cross origin resource sharing
const  cors = require("cors")

//Connect to the database, configured in database.js
const  pool = require('./database')

//encypt password using bcryptjs
const  encrypt = require('bcryptjs');

//json webtoken
const  jwt = require('jsonwebtoken');

//it will use the port number from the environment variable or 4001 if there is no environment variable
const  PORT = process.env.PORT || 4001;

// Create an instance of the express application
const  app = express();

// to allow cross origin resource sharing
app.use(cors())

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())
 ```

### 3.2 Defining routes 📍
Let's start by adding message to our default route `/`
this will display `'Hello, world!'` if we connect to our host and port, in ourcase `localhost:4000` 
```js
// Define routes
app.get('/', (req, res) => {
  const message ='Hello, world!';
  res.send(message);
});
```
We can test this out by saving `index.js` and typing `npm run devStart` in our terminal, and go to `localhost:4000` in your browser. It should display our message

 
 ### 3.3 HTTP Request Methods and Queries 🖇
**Checking if connection works ✅**
Let's first check if our connection with the database works.
```js
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
```
This will be triggered is we connect to `localhost:4000/user`. It should display an empty JSON since we do not have any data yet or `Internal Server Error` if you have any error.

**Sign up route 📝**

Next, We want to fill our database first with user accounts using a registration/sign up route.
 
```js
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
    //encrypt password using bcrypt.js
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
```
 Noticed the `post` in `app.post`? it means this instance uses `post` **HTTP Request Method**.

After we extracted the user data from the `req.body (request body)` 
This is how the code works
1. It will check the `email` if it exist in our database
   -  If the `email` exist in the database, it will send a `response message`  
3. If the email doesn't exist, It means that there is no exisiting user with that `email`
   - It will generate an encrytion salt
   - Then it will hash the password with salt 
   - Last, It will trigger an `INSERT` SQL command which will insert the user-data in their corresponding column. and then send a `response message` and **HTTP  Response Status Code**

The  `password` is encrypted using `bcryptjs`

For example if the api recieved data like this:
```bash
[
 {Email: email@email.com},
 {Password:1234},
 {First_name:Xavier},
 {Last_name:StackTrek},
]
```

**Database Table With Encryption:**
|id| first_name|last_name|email|password
|--|--|--|--|--|
| 1 | Xavier|StackTrek|email@email.com|$2a$10@Kxk7dN9nMQ4SgnFHSWyf4ul90GUiKwFfhEz56F7/mnF0ZBA82M6re

**Database Table Without Encryption:**
|id| first_name|last_name|email|password
|--|--|--|--|--|
| 1 | Xavier|StackTrek|email@email.com|1234


**Log in route with JWT** 🔑

Since we have now data to validate, we will now proceed to `user-login` and start validating incoming log in request.

```js
app.get('/api/user-login', async (req, res) => {
  try {
    const login_data = req.query;
    const credentials = {email: login_data.Email, password: login_data.Password}
    //check email if already exist
    const check_email = await pool.query(`SELECT * FROM credentials WHERE "email" = '${credentials.email}';`);

    if (check_email.rows.length > 0) {
      const user = check_email.rows[0];
      //will compare the password from the database with the password from the request body
      const validPassword = await encrypt.compare(credentials.password, user.password);
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
        
   ```
   This instance uses `get` **HTTP Request Method**
   
How this code works:
1.  The  user  will  send  a  request  to  the  server  to  login
2.  The  server  will  check  if  the  `email`  exist  in  the  database
3.  If  the  `email`  exist in the database the  server  will  compare  the  password  from  the  database  with  the  password  from  the  request  query using `encrypt.compare()`,
4.  If  the  password  is  correct  the  server  will  create  a  token  and  send  the  `token (JWT)`    along side with the `user id` to  the  client. 
5.   The  client  will  store this  token  in  the any  storage *(local  storage/session storage/cookie)*
 > We will use the `user id` later in authentication

**Authentication Middleware** 💂‍♂️

Let's now use the Authentication token that we send to the `client` earlier.
We want to create a middleware which will validates the token 
```js

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
```
First we created a function called `AuthenticateToken` this function will authenticate token and allow users to access the protected routes.

This  middleware works by checking the token in the header of the request

**Protected route**🔐
```js

  //we use AuthenticateToken as a middleware to protect the route from unauthorized access
  //if the token is valid the user will be able to access the route
  //if the token is invalid the user will not be able to access the route
  app.get('/api/credentials',AuthenticateToken, async (req, res) => {
    try {
      const id = req.query.id;
      const user = await pool.query(`SELECT * FROM "credentials" WHERE "id" = '${id}';`);
      res.send(user.rows[0]);
    } catch (error) {
      console.error(error); res.sendStatus(500);
    }
  });
```
This route will allow user to execute the `SELECT` query and view thier `credential`  if they have an authorization

We use `AuthenticateToken()` as middleware to protect this route from unauthorized access.
If the token is valid the user will be able to access the route however, if the token is invalid the user will not be able to access the route

---
## The final resut 
` index.js` should look like this:
```js
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

```

---
## 👉Up Next! [Front end (client-guide) ](https://github.com/joystacktrek/fullstack-starter-kit-01/blob/main/simple-login/guides/client-guide.md)

### [client](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/client)
### [server](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/server)
### [Project folder](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login) 

## Links 🌐

👉[HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

👉[HTTP Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

👉[Nodemon](https://www.npmjs.com/package/nodemon)

👉[JWT](https://www.npmjs.com/package/jsonwebtoken)

👉[bcryptjs](https://www.npmjs.com/package/bcryptjs)

# Node JS
```javascript

``// index.js

// Require dependencies
const express = require('express');

// Create an instance of the express application
const app = express();


// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, world!';
  res.send(message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```
To use this code
1.  Create a new directory for your project and navigate into it
2.  Initialize a new Node.js project using `npm init`
3.  Install the required packages using `npm install express`
4.  Create a new file called `index.js` (or any other name you prefer)
5.  Copy and paste the code above into your `index.js` file
6.  Run the server using `node index.js`


## Adding an .env file

Before we begin, Lets first install dotenv, by typing in in your terminal:
```bash
npm i dotenv --save
```

  ### What is dotenv(.env)

A  .env file or dotenv file is a simple text configuration file for controlling your Applications environment constants. Between Local, Staging and Production environments, the majority of your Application will not change.




In this example, we're using an environment variable called `MESSAGE` to customize the message that's sent in response to requests to the root URL (`/`). If the `MESSAGE` environment variable is set, we'll use its value as the response. Otherwise, we'll send the default "Hello, world!" message.

You can set environment variables in a few different ways, but one common way is to use the `dotenv` package. Here's an example of how you might use `dotenv` to set the `MESSAGE` environment variable:




```javascript
// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

// Create an instance of the express application
const app = express();

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, world!';
  res.send(message);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

In this example, we're calling `dotenv.config()` to load environment variables from a `.env` file in the same directory as `index.js`. The `.env` file might look something like this:


```markfile
MESSAGE=Hello from Im from ENV!
PORT=3000
```

With this setup, the `MESSAGE` environment variable will be set to "Hello from .env!", which will be the response to requests to the root URL. The `PORT` environment variable will also be set to 3000, which will be the port that the server listens on (unless the `PORT` environment variable is already set to a different value).


## Adding  Cross-Origin Resource Sharing (CORS) to Index.js

**Cross-Origin Resource Sharing** ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is an [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)-header based mechanism that allows a server to indicate any [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin) (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

**Cors will allow us to make requests from our react app to our node server**

---
Now we need to install cors to Server folder

```bash
npm i cors
```

and then lets call in and use `cors` by adding this syntax to our index.js
```javascript
const  cors = require("cors")
app.use(cors())
```

our index.js should look like this
```javascript
// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

// Create an instance of the express application
const app = express();

//use cors to allow cross origin resource sharing
const  cors = require("cors")

// to allow cross origin resource sharing
app.use(cors())

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, world!';
  res.send(message);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```
```



## Connect your database

To connect to a PostgreSQL database in a Node.js application, we can use the `pg` package. Here's an example of how you might connect to a PostgreSQL database and perform a simple query:

First we need you install node-postgres

Open your terminal and type in:
```bash
npm i pg
```
  >[Node-postgres Documentation](https://node-postgres.com/)  
  
Next we want to create our database file. in our case we will rename this as `database.js`
```javascript
//database.js
const  Pool = require("pg").Pool  
const  pool = new  Pool({
	user:  'your-postgres-username',
	password:  'your-password',
	database:  'your-database-name',
	host:  'localhost',
	port:  5432  //postgres default port
})
module.exports = pool
```


Now lets connect our `database.js` to our `index.js` and lets try to perform a simple query
```javascript
// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

// Create an instance of the express application
const app = express();

//use cors to allow cross origin resource sharing
const  cors = require("cors")

// to allow cross origin resource sharing
app.use(cors())

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json())

// Define routes
app.get('/', (req, res) => {
	const  message = process.env.MESSAGE || 'Hello, world!';
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
const  PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);

});

```

make sure to use `async` and `await`. in every query we perform

### Server folder Structure


```lua
Server/ 
	|-- index.js
	|-- database.js
	|-- .env
	|-- package.json
	|-- readme.md

```
## `async` and `await`

`async` and `await` are features in JavaScript that help simplify asynchronous code. Asynchronous code allows JavaScript to execute multiple tasks simultaneously, without blocking the main thread. However, working with asynchronous code can be complex and difficult to manage. That's where `async` and `await` come in.

`async` is used to mark a function as asynchronous. When a function is marked as `async`, it always returns a promise, even if the function itself doesn't explicitly return a promise.

Here's an example of an `async` function :

```javascript
async  function  getData() {
	const response = await  fetch('https://api.example.com/data');
	const data = await response.json(); 
	return data; 
}
```

`await` is used to wait for a promise to resolve before moving on to the next line of code. When `await` is used inside an `async` function, the function will pause execution until the promise is resolved or rejected.

In the example above, the `await` keyword is used twice to wait for the fetch request to complete and for the JSON data to be parsed. The `getData()` function itself returns a promise that will resolve with the data once it has been retrieved and parsed.

`async` and `await` are often used together to simplify asynchronous code and make it easier to read and write. Instead of chaining together `.then()` methods, you can use `await` to wait for each promise to resolve before moving on to the next step.

---

Links:

-  [Node Js Documentation](https://nodejs.org/en/docs)
-  [pg-npm](https://www.npmjs.com/package/pg)
-  [cors-npm](https://www.npmjs.com/package/cors)
- [dotenv-npm](https://www.npmjs.com/package/dotenv)
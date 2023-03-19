# Express.js

Express.js is a popular open-source web application framework for Node.js that simplifies the process of building web and mobile applications. It provides a set of middleware functions that can be used to handle requests and responses in a structured and organized manner.

## Installation

To install Express.js, follow these steps:

1.  Install Node.js on your machine, if it's not already installed. You can download Node.js from the official website: [https://nodejs.org/en/](https://nodejs.org/en/)
2.  Create a new directory for your project, then navigate to the directory in a terminal or command prompt.
3.  Run the following command to initialize a new Node.js project with npm:

```bash 
npm init -y
```

4. Run the following command to install the Express.js package:
```bash
npm install express
```

## Getting Started

To get started with Express.js, create a new file named `app.js` with the following code:
```javascript
const express = require('express');
const app = express(); 

app.get('/', (req, res) => { 
	res.send('Hello, Express!'); 
}); 

app.listen(3000, () => { 
console.log('Server listening on port 3000'); 
});
```

Visit `http://localhost:3000` in your web browser to see the "Hello, Express!" message.

## Middleware

Express.js provides a set of middleware functions that can be used to handle requests and responses in a more organized and structured way. Middleware functions are functions that have access to the `req` (request) and `res` (response) objects, as well as the `next` function in the application's request-response cycle. Middleware functions can perform the following tasks:

-   Execute any code.
-   Make changes to the request and the response objects.
-   End the request-response cycle.
-   Call the next middleware function in the stack.

Here's an example of how to use middleware in an Express.js application:

```javascript
app.use((req, res, next) => { 
	console.log('Time:', Date.now()); 
	next(); 
});
```
This middleware function logs the current time to the console, then calls the `next()` function to pass control to the next middleware function in the stack.

## Conclusion

Express.js is a powerful web application framework for Node.js that provides a simple and flexible set of features for building web and mobile applications. With its extensive documentation and large ecosystem of third-party modules, Express.js has become one of the most popular choices for building web applications with Node.js.
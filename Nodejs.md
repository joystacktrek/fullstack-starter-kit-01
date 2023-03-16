# Node JS
```javascript

``// index.js

// Require dependencies
const express = require('express');

// Create an instance of the express application
const app = express();

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
In this example, we're using an environment variable called `MESSAGE` to customize the message that's sent in response to requests to the root URL (`/`). If the `MESSAGE` environment variable is set, we'll use its value as the response. Otherwise, we'll send the default "Hello, world!" message.

You can set environment variables in a few different ways, but one common way is to use the `dotenv` package. Here's an example of how you might use `dotenv` to set the `MESSAGE` environment variable:


```javascript
// index.js

// Require dependencies
require('dotenv').config();
const express = require('express');

// Create an instance of the express application
const app = express();

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

makefileCopy code
```markfile
MESSAGE=Hello from Im from ENV!
PORT=3000
```

With this setup, the `MESSAGE` environment variable will be set to "Hello from .env!", which will be the response to requests to the root URL. The `PORT` environment variable will also be set to 3000, which will be the port that the server listens on (unless the `PORT` environment variable is already set to a different value).

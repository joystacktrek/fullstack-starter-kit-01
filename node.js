// Import required packages
const express = require('express');

// Create an instance of express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

//a route for localhost:3000/test
app.get('/test', (req, res) => {
  res.send('hi im test');
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
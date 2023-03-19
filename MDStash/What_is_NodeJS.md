# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to write server-side JavaScript code, which can be used to build fast, scalable, and networked applications.


## Installation

To install Node.js, follow these steps:

1.  Visit the [official Node.js website](https://nodejs.org/en/).
2.  Click on the "Download" button for the latest stable release.
3.  Run the installer on your machine and follow the prompts.

## Getting Started

To get started with Node.js, create a new file with a `.js` extension and add some JavaScript code. Here's an example:

```javascript
console.log('Hello, Node.js!');
```

Save this file as ```app.js```, then open a terminal or command prompt and navigate to the directory where you saved the file. Type the following command to run the file:

  

```bash 
node app.js
```
You should see the message "Hello, Node.js!" printed to the console.

## Modules

Node.js allows you to easily create and use modules in your code. Here's an example of how to create and use a module:

Create a new file named `greet.js` with the following code:

```javascript
exports.sayHello = function() {
	console.log('Hello!');
};
```


In your ```app.js``` file, require the ```greet.js``` module and use its ```sayHello()``` function:

```javascript
const  greet = require('./greet');
greet.sayHello();
```

When you run ```node app.js```, you should see the message "Hello!" printed to the console.

  ## Conclusion

Node.js is a powerful tool for building server-side applications with JavaScript. By following the steps in this guide, you should now have a basic understanding of how to install Node.js, create and run a simple application, and use modules.
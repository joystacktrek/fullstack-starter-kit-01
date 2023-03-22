# React Js with Tailwind CSS
```bash

```
```lua
client/ 
|-- node_modules/ 
|-- public/
|   |-- index.html 
|   |-- manifest.JSON
|-- src/ 
|   |-- App.js 
|   |--fetch_data.js
|   |-- App.css
|   |-- index.js 
|   |-- index.css 
|-- package.json 
|-- README.md 
|-- tailwind.config.js
```

Explanation of the file structure:

-   `src/`: Contains the source code for the app.
    -   `index.js`: The main entry point for the app.
    -   `index.css`: Global CSS styles for the app.
    -   `App.js`: The main React component for the app.
	- 	`fetch_data.js`: The one we created to fetch data to our backend
-   `public/`: Contains public files for the app, such as the `index.html` file and any additional CSS files.
-   `package.json`: The file that describes the app and its dependencies.
-   `README.md`: A file that explains how to use the app.
-   `tailwind.config.js`: The configuration file for Tailwind CSS.


> If you want want **clone** this repository 
> 1. In your terminal, type in `git clone <repository link>`
> 2. Navigate to cloned repository folder. `cd starter-kit` `cd client`
> 3. Install dependencies to `client` folder by typing `npm install` in your terminal
	> **`npm i axios` if axios doesn't install automatically in `npm install`
	
> *Note: Please make sure that you are in the correct directories to avoid any errors. *


### If you want to create from scratch:

Before we begin make sure that you already installed [Node Js](https://nodejs.org/en)
- The installer contains the NPM package. 

#### To check if you have node in your machine
In your terminal:
```bash
npm -v 
```
it should have something like this:
```bash
8.19.2
```

Here's how to set up the project:
### Create a React App
1.  Open your terminal and navigate to the directory where you want to create your new React.js project.
2.  Run the following command to create a new React.js project using `create-react-app`:
```bash
npx create-react-app client
```
(Replace "client" with the name of your project.)

3. Navigate to the project directory using `cd starterkit_react`.

### Install Tailwind CSS
4.  Install the necessary dependencies:
```bash
npm install -D tailwindcss
```
```bash
npx tailwindcss init
```

5. Add the paths to all of your template files in your `tailwind.config.js` file.
```javascript
/** @type  {import('tailwindcss').Config} */ 
module.exports  =  { 
	content:  [ "./src/**/*.{js,jsx,ts,tsx}", 
	],
	theme:  { extend:  {}, },
	plugins:  [], 
}
```

6.  Add the Tailwind directives to your CSS
 - Add the `@tailwind` directives for each of Tailwind’s layers to your  `./src/index.css` file.
```less
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Start your build process
```bash
npm run start
```

8. Start using Tailwind in your project
```javascript
//src/app.js
import './App.css';

function App() {
return (
	<div className="App">
	<h1 className="text-3xl font-bold underline">
	Hello world!
	</h1>
	</div>
);
}

export default App;
```

## Fetch API's using Axios

1.  Install the `axios` package to your React App:
```bash
npm install axios --save
```

2. Now, lets create a file called `fetch_database.js` 
```javascript
import  React, { useState, useEffect } from  'react';
import  axios  from  'axios';

 
function  Fetch_data() {
	const [data, setData] = useState(null);
	
//this useEffect will fetch all the data from our API 

	useEffect(() => {
		axios.get('http://localhost:4000/user')
		.then(response  => {
		setData(response.data);
		})
		.catch(error  => {
		console.log(error);
		});
	}, []);
	  
	return (
		<div  className="App">
		<h1  className='text-2xl italic'>Hello im from fetch_data.js</h1>
		{data ? (
		<ul>
			{data.map(item  => (
		   	<li key={item.ID}>{item.First_name} {item.Last_name}</li>
			))}
		</ul>
		) : (
		<p>I fetch data from your database using node js and axios</p>
		)}
		</div>
	);

}
//we can call this file from App.js
export  default  Fetch_data;
```

Now we can view call the `Fetch_data` to our `App.js`

```javascript
//src/app.js
import './App.css';
//we import this component from fetch_data.js. this component will fetch data from the database
import  Fetch_data  from  './fetch_data';

function App() {
return (
	<div className="App">
	<h1 className="text-3xl font-bold underline">
	Hello world!
	</h1>
	{/* this is the component that we imported */}
	<Fetch_data/>
	</div>
);
}

export default App;
```

---
### What is Axios?
- Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It provides a simple and easy-to-use API for sending asynchronous HTTP requests to a server and handling the response. Axios can be used in both the browser and Node.js environments and supports features such as Promise-based requests, request and response interceptors, automatic request retries, and more.

- Axios is often used in conjunction with other front-end libraries and frameworks such as React.js, Vue.js, and AngularJS to handle data fetching and API interactions. It can be used to send GET, POST, PUT, DELETE, and other HTTP requests to a server, and can also be used to upload files and handle authentication and authorization.

- Axios is built on top of the XMLHttpRequest API in the browser and the http module in Node.js, providing a simple and consistent interface for making HTTP requests in both environments. It is easy to use and widely adopted by the JavaScript community.

---
Links:

-  [Create-React-App Documentations](https://create-react-app.dev/)
-  [Axios](https://www.npmjs.com/package/axios)
-  [Tailwind Documentation](https://tailwindcss.com/docs/installation)
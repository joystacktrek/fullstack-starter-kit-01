# Simple Login and Sign up 
This time we will create a simple login and sign up

This exercise will tackle the following:
- Backend(server)
	- JWT Token
		- Authentications 
	- Password Hashing
	- HTTP Methods 
	- HTTP Status
- Frontend(client)
	- HTTP Request (Axios)
	- Routings
	- Hooks
	- React Router Dom
	- Axios
	- Cookies
> *read  the `server-guide` first before proceeding to `client-guide`*
---

## `simple-login` folder structure
```lua
simple-login/
|--client/ 
	|-- node_modules/ 
	|-- public/
	|   |-- index.html 
	|   |-- manifest.JSON
	|-- src/ 
	|   |-- Login-signup/
	|   |   |-- handler/
	|   |   |   |-- Login-hander.js
	|   |   |   |-- Sign-hander.js
	|   |   |-- Login.js
	|   |   |-- Signup.js
	|   |-- App.js 
	|   |--fetch_data.js
	|   |-- App.css
	|   |-- index.js 
	|   |-- index.css 
	|-- package.json 
	|-- README.md 
	|-- tailwind.config.js
|--guides/
	|-- client-guide.md
	|-- server-guide.md
|--server/
	|-- node_modules/
	|-- index.js
	|-- database.js
	|-- .env
	|-- package.json

|-- README.md
```
- `client`
	-   `src/`: Contains the source code for the app.
	- `Login-signup/`: Contains the source code for the login and signup components.
		- `handler/`: Contains the source code for communicating between backend and frontend for `login.js` and `signup.js`
			- `Login-handler.js`: Request handler Source code for `login.js` 
			- `Signup-handler.js`: Request handler Source code for `signup.js`
		- `Login.js`: Login component
		- `Signup.js`: Signup component
    -   `index.js`: The main entry point for the app.
    -   `index.css`: Global CSS styles for the app.
    -   `App.js`: The main React component for the app.
    -   `fetch_data.js`: The one we created to fetch data to our backend
	-   `public/`: Contains public files for the app, such as the  `index.html`  file and any additional CSS files.
	-   `package.json`: The file that describes the app and its dependencies.
	-   `README.md`: A file that explains how to use the app.
	-   `tailwind.config.js`: The configuration file for Tailwind CSS.
	
- `guides`
  - `client-guide.md`: `client` documentations
  - `server-guide.md`: `server` documentations 


- `server`
	-   `node_modules/`  : Contains all the downloaded packages from npm in your machine.
    -   `index.js`: The main entry point for the backend.
    -   `database.js`: Database configurations.
    -   `.env`: Text configuration file for controlling your Applications environment constants.
    -   `package.json`: The file that describes the app and its dependencies.



## 📖[Guide folder ](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/guides)📂
### [Backend(server-guide)](https://github.com/joystacktrek/fullstack-starter-kit-01/blob/main/simple-login/guides/server-guide.md)📓

###  [Front end (client-guide) ](https://github.com/joystacktrek/fullstack-starter-kit-01/blob/main/simple-login/guides/client-guide.md)📓
 
### [client](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/client) 📁
### [server](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/server) 📁
### [Project Folder](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login)  📂
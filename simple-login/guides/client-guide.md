## `client` folder structure 📂
> Please read the [server-guide](https://github.com/joystacktrek/fullstack-starter-kit-01/blob/main/simple-login/guides/server-guide.md) first
```lua
client/ 
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
```

Explanation of the file structure:

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
---
We will use the`Arrow function` to create our functions in this tutorial

- Arrow function — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. While both regular JavaScript functions and arrow functions work in a similar manner, there are certain differences between them.
- 
- A regular functions are constructible, they can be called using the `new` keyword. However, the **arrow functions are only callable and not constructible**, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the `new`keyword.
- 
### arrow function:
```js 
const x = (parameter...) =>{
	//codehere
}
```
### regular function:
 ```js
function x(parameter...){
	 //codehere
}
```

---
### Packages and dependencies we need in our frontend  📦

### Create-react-app
```bash
npx create-react-app <app-name>
```

### Tailwind
- CSS Framework
```bash
npm install -D tailwindcss
```
### Axios
- Axios is often used in conjunction with other front-end libraries and frameworks such as React.js, Vue.js, and AngularJS to handle data fetching and API interactions. It can be used to send GET, POST, PUT, DELETE, and other HTTP requests to a server, and can also be used to upload files and handle authentication and authorization.
 ```bash
 npm install axios --save
 ```
 
### React-router-dom
-**React Router DOM** enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.
```bash
npm i react-router-dom
```

### JS-Cookie
- A simple, lightweight JavaScript API for handling cookies
```bash
npm i js-cookie
```
---

## 1. Create a react app ⌨
1.  Open your terminal and navigate to the directory where you want to create your new React.js project.
2.  Run the following command to create a new React.js project using `create-react-app`:
```bash
npx create-react-app client
```
(Replace "starterkit_react" with the name of your project.)

3. Navigate to the project directory using `cd client`.

## 2. Install Tailwind CSS 💨
1.  Install the necessary dependencies:
```bash
npm install -D tailwindcss
```
```bash
npx tailwindcss init
```

2. Add the paths to all of your template files in your `tailwind.config.js` file.
```javascript
/** @type  {import('tailwindcss').Config} */ 
module.exports  =  { 
	content:  [ "./src/**/*.{js,jsx,ts,tsx}", 
	],
	theme:  { extend:  {}, },
	plugins:  [], 
	}
```

3.  Add the Tailwind directives to your CSS
 - Add the `@tailwind` directives for each of Tailwind’s layers to your  `./src/index.css` file.
```less
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Install the needed packages 📦

Install the following dependencies:
### Axios
- Allows us to make `HTTS requests`
 ```bash
 npm install axios --save
 ```
### React router dom
- Enables us to implement dynamic routing in our web app
 ```bash
npm i react-router-dom
```

### JS Cookie
- Allows us to use cookies 
>We will store our `Token` in cookies.
```bash
npm i js-cookie
```

## 4. Configure `index.js` 📍
 


First, Open up `index.js` *(src/index.js)*

Import and add the following to our `index.js`


1. Import Browser Router 
- ```js
  import { BrowserRouter as Router} from 'react-router-dom'
  ```
2. Put the `<App/>` inside the  `<router>` tag

- ```js
  <Router>
    <App />
  </Router>
  ```

`index.js` should look like this:
>disregard the emojis
>
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
👉import { BrowserRouter as Router} from 'react-router-dom' // import router to enable routing through different pages


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 👉 <Router>
	    <App />
 👉 </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

## 5. Create necessary files and folders 📂

1. Create a file called `FetchData.js` inside the `src` folder
   >*This will fetch the data later. and will serve as our homepage*
   
Paste the template below:
  ```js
//FetchData.js
  import React from 'react'

const FetchData = () => {
  return (
    <div>Hello World</div>
  )
}
export default FetchData
```
  
2. Under `src` create a folder called `Login-signup` 
   - We will store all `login` and `signup` source codes here
    
3. Under `src/Login-signup` a `.js` file called `Login.js` and `Signup.js`

Paste the template below in each component:

`Login.js`: Our login component
  ```js
  //Login.js
     import React from 'react'
		const Login = () => {
		  return (
		    <div>Login Component</div>
		  )
		}

export default Login 
   ```
  
  `Signup.js`: Our sign up component
   
  ```js
//Signup.js
import React from 'react'

const Signup = () => {
	  return (
	    <div>Signup Component</div>
	  )
}
export default Signup
```
4. Under `src/Login-signup` Let's create a folder called `handlers`
   - We will store here all request-handlers for `login` and `signup` 
 5. Next, Create `.js` handler files for our components inside `src/Login-signup/handlers`
      - Create the following inside the `handlers` folder:
        - `Login-handler.js`
        - `Signup-handler.js`
 >Leave it blank for a while
## 6. Set up and routes in `App.js` 📐

Open up `App.js` and remove the default template and paste the template provided below

Delete/remove `App.css` in `src/App.css`
> We do not need the default template and the `App.css` since we are using Tailwind CSS Framework
```js
//App.js
const App =>() {
  return (
    <div className="text-center flex justify-center items-center h-screen">
    </div>
  );
}

export default App;
```

### 6.1 Import the Components and Dependencies 📦

First, we need to import the component that we created earlier and some of the dependencies that we installed

```js
//App.js

//lets import react router dom to enable routing through different pages
import { useRoutes} from  'react-router-dom'

  
//lets now import the login and signup component
import  Login  from  './Login-signup/Login';
import  Signup  from  './Login-signup/Signup';

//we import the component from fetch_data.js. this component will fetch data from the database
import  FetchData  from  './FetchData';
```

Next is we want to create a function that will load the other components based on the path

Create a function named `Routing()`
```js
//we create a function that will load other components based on the path
const Routing = () => {
  const routes = useRoutes([
    {path: '/login', element: <Login/>},
    {path: '/', element: <FetchData/>},
    {path: '/signup', element: <Signup/>}
  ])
  return routes
}
```

Last, we will render the component returned from the `Routing` function in `DOM (Document Object Model)`
```js
const App = ()=>{
  return (
    <div className="text-center flex justify-center items-center h-screen">
    {/* we call the `Routing` function to load other components here */}
    <Routing/> 
    </div>
  );
}
```


## `App.js` should look like this: 👁‍🗨
```js

//App.js
//lets import react router dom to enable routing through different pages
import { useRoutes} from 'react-router-dom'

//lets now import the login and signup component
import Login from './Login-signup/Login';

import Signup from './Login-signup/Signup';
//we import the component from fetch_data.js. this component will fetch data from the database
import FetchData from './FetchData';


//we create a function that will load other components based on the path
const Routing = () => {
  const routes = useRoutes([
    {path: '/', element: <FetchData/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>}
  ])
  return routes
}

const App = ()=>{
  return (
    <div className="text-center flex justify-center items-center h-screen">   
    <Routing/> 
    </div>
  );
}


export default App;

```

Now let's try to run the app by typing `npm run start` in your terminal 
you can view the result at`localhost:3000` 

It should display `Hello world` in the middle of the screen upon opening

if we navigate to `localhost:3000/login`
It should display `Login Component` in the middle of the screen

if we navigate to `localhost:3000/signup`
It should display `Signup Component` in the middle of the screen

## 7. Create Sign up Component and its Handler 🔏

### `Signup-handler`
First, we need to create an `HTTP request` in our  `signup-handler.js`
we want to send the data to the server and get the response and return a `promise` it to the component and we need `Axios` to make this work

Locate and open up `signup-handler.js` and paste the following:

```js
import axios from "axios";
const SignupHandler = async(f_name, l_name, email, password) => {
        return await axios.post('http://localhost:4000/api/user-signup',
            {headers: { 'Content-Type': 'application/json'},
             f_name, l_name, email, password})
            .then(res => {
                return res.data
            }
        )
    //we send the data to the server and get the response and return it to the component

}
export default SignupHandler;

```


1. imported `Axios` which will allows us to make an `HTTP Request` and communicate to our backend

2. We created a function named `SignupHandle`, we want this function to return the `response data` from our server.  and used `post` (`axios.post`)  method since our route `api/user-signup` is accessible via `post`. 


### `Signup Component` 📝


We need to import the following:
- `useState`from `'react'`
- `useEffect` from `'react'`
- `Link` from `'react-router-dom'`
- `useNavigate` from `'react-router-dom'`
- `SignupHandler.js` from `'./handlers/Signup-handler'`

`useState`is used for data handling 
`useEffect` for password validation in our UI


 `Link` is used to navigate to different pages via the link
 `useNavigate` is used to navigate to different pages via the function


```js
//Signup.js
👉import  React, { useState, useEffect } from  'react';
👉import {Link, useNavigate} from  'react-router-dom'
👉import  SignupHandler  from  './handlers/Signup-handler';

const Signup = () => {
	  return (
	    <div>Signup Component</div>
	  )
}
export default Signup
```

Create a `useStates` to store our data and declare `useNavigate()` as `navigate` 

> The following codes are  inside the `Signup` component 
```js

//Signup.js
import  React, { useState, useEffect } from  'react';
import {Link, useNavigate} from  'react-router-dom'
import  SignupHandler  from  './handlers/Signup-handler';

const Signup = () => {
 //useNavigate to navigate to different pages
 👉const navigate = useNavigate();
 //usestates to handle the form data
 👉const [firstName, setFirstName] = useState('');
 👉const [lastName, setLastName] = useState('');
 👉const [email, setEmail] = useState('');
 👉const [password, setPassword] = useState('');
 👉const [confirmPassword, setConfirmPassword] = useState('');
	  return (
	    <div>Signup Component</div>
	  )
}
export default Signup
```
Now that we have states to store our data, we will now proceed to `password` and `confirmPassword` validation.

```js
//Signup.js
import  React, { useState, useEffect } from  'react';
import {Link, useNavigate} from  'react-router-dom'
import  SignupHandler  from  './handlers/Signup-handler';

const Signup = () => {
 //useNavigate to navigate to different pages
  const navigate = useNavigate();
 //usestates to handle the form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
 //password fields validation
 // We will use this state to validate if `currentPassword` and `password` have the same value
 👉const [passwordMatch, setPasswordMatch] = useState(true);
  
  👉useEffect(() => {
  👉 if (password !== confirmPassword) {
  👉   setPasswordMatch(false);
  👉 } else {
  👉   setPasswordMatch(true);
  👉 }
  👉}, [password, confirmPassword]);

	  return (
	    <div>Signup Component</div>
	  )
}
export default Signup
```
We declare `password` and `currentPassword`  `dependency array` to our `useEffect`.  The code inside the `useEffect` will be triggered every time that there are changes in `password` or `confirmPassword` this will allow us to check if both fields have the same value

Next, We will create a function that handles user submission
```js

//Signup.js
import  React, { useState, useEffect } from  'react';
import {Link, useNavigate} from  'react-router-dom'
import  SignupHandler  from  './handlers/Signup-handler';

const Signup = () => {
 //useNavigate to navigate to different pages
  const navigate = useNavigate();
 //usestates to handle the form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
 //password fields validation
 // We will use this state to validate if `currentPassword` and `password` have the same value
 const [passwordMatch, setPasswordMatch] = useState(true);
  
  useEffect(() => {
   if (password !== confirmPassword) {
     setPasswordMatch(false);
   } else {
     setPasswordMatch(true);
   }
  }, [password, confirmPassword]);

👉const handleSubmit = (event) => {
👉   event.preventDefault();
👉   SignupHandler(firstName, lastName, email, password).then((res) => {
👉    console.log(res);
👉    if(res === "Email already exist") {
👉      alert("Email already exists.")
👉    }
👉    else{
👉     alert("Account created successfully");
👉    navigate('/login');
👉   }
👉  });
👉 };
	  return (
	    <div>Signup Component</div>
	  )
}
export default Signup

```
This function will be triggered every time they submit the form

`event.preventDefault();` preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
Example:
- `type="email"` if its not a valid email
-  `required` if the required fields are not filled out

If all fields are good, `SignupHandler()` will be triggered and it will return a response from the server. if the server response is `Email already exist` therefore it will pop an alert saying `Email already exists.`
if the request successfully went through, the condition will fall to the `else` statement so the alert will be `Account created successfully`, and then it will redirect you to `localhost:3000/login` using `useNavigate`


Let's now render our component


First, remove:
```js 
 <div>Signup Component</div>
 ```
 and replace with:
```js
  
    <div className="flex justify-center flex-wrap items-center h-screen">   

      <form onSubmit={handleSubmit} className="flex flex-col p-10  bg-blue-300 rounded-xl ">
      
      <h1 className="text-2xl mb-4">Sign Up</h1> 
        
      <div className='flex md:flex-wrap -mx-3 mb-6 '>
      <div className="w-full  md:w-1/2 px-3 mb-6 md:mb-0 "> 
          <label htmlFor="first-name" className="block uppercase text-left  text-gray-700 text-xs font-bold" >
        First Name</label>
          <input className= "border border-gray-400 rounded py-2 px-3"
                 type="text"
                 placeholder='First Name'
                 id="first-name"
                 name="first-name"
                 value={firstName} onChange={(e) => setFirstName(e.target.value)}
                 required/>
       </div>

       <div className="w-full md:w-1/2 px-3">
          <label htmlFor="last-name" className="block uppercase text-left  text-gray-700 text-xs font-bold " >Last Name:</label>
          <input className="border border-gray-400 rounded py-2 px-3" 
                 type="text" 
                 placeholder='Last Name'
                 id="last-name" 
                 name="last-name" 
                 value={lastName} onChange={(e) => setLastName(e.target.value)}  
                 required/>
                 
        </div>
        </div>
       
        
        <div className="mb-4 flex flex-col "> 
          <label htmlFor="email" className="block uppercase text-left  text-gray-700 text-xs font-bold ">Email:</label>
          <input className="border border-gray-400 rounded py-2 px-3" 
                 type="email"
                 placeholder='your-email'
                 id="email"
                 name="email" 
                 value={email} onChange={(e) => setEmail(e.target.value)} 
                 required/>
       
        </div>
       
       

        <div className="mb-4 flex flex-col "> 
          <label htmlFor="password" className="block uppercase text-left  text-gray-700 text-xs font-bold ">Password:</label>
          <input  className="border border-gray-400 rounded py-2 px-3 mb-3" 
                  type="password" 
                  placeholder='your-password'
                  id="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
                    

       
          <label htmlFor="confirm-password" className="block uppercase text-left  text-gray-700 text-xs font-bold">Confirm Password:</label>
          <input className="border border-gray-400 rounded py-2 px-3 " 
                 type="password" 
                 placeholder='confirm-password'
                 id="confirm-password" 
                 name="confirm-password" 
                 value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                 required/>

          {/* display a message if the password does not match */}
          {!passwordMatch && <p className=" text-left text-red-500 text-sm mt-2">Passwords do not match</p>}

        </div>

       
        {/* conditionally render and disable the button based on the password match */}
        <button type="submit" disabled={!passwordMatch} className={!passwordMatch ? " bg-red-500 text-white py-2 px-4 rounded block uppercase font-bold mb-10" : " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase   font-bold mb-10"}>Sign Up</button>

         {/* do you have an account */}
         <div className="inline-flex items-center justify-center w-full mb-5">
          <span className="absolute px-3 font-light -translate-x-1/2 bg-blue-300 left-1/2">Do you have an account? </span> 
        </div>
        <Link to="/login">
            <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
            </button>
        </Link>
      
      </form>
    </div>
```
 


## `Signup.js` Should look like this: 👁‍🗨
```js
import React, { useState, useEffect } from 'react';


// Link: is used to navigate to different pages via the link
// useNavigate: is used to navigate to different pages via the function
import {Link, useNavigate} from 'react-router-dom'
import SignupHandler from './handlers/Signup-handler';

const Signup = () => {

  //useNavigate to navigate to different pages
  const navigate = useNavigate();

  //usestates to handle the form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //password fields validation
  const [passwordMatch, setPasswordMatch] = useState(true);
  
  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    SignupHandler(firstName, lastName, email, password).then((res) => {
      console.log(res);
     if(res === "Email already exist") {
       alert("Email already exists.")
     }
     else{
      alert("Account created successfully");
      navigate('/login');
     }
    });
  };

  return (
   
    <div className="flex justify-center flex-wrap items-center h-screen">   

      <form onSubmit={handleSubmit} className="flex flex-col p-10  bg-blue-300 rounded-xl ">
      
      <h1 className="text-2xl mb-4">Sign Up</h1> 
       
       {/* First name and last name text field */}
      <div className='flex md:flex-wrap -mx-3 mb-6 '>
      <div className="w-full  md:w-1/2 px-3 mb-6 md:mb-0 "> 
          <label htmlFor="first-name" className="block uppercase text-left  text-gray-700 text-xs font-bold" >
        First Name</label>
          <input className= "border border-gray-400 rounded py-2 px-3"
                 type="text"
                 placeholder='First Name'
                 id="first-name"
                 name="first-name"
                 value={firstName} onChange={(e) => setFirstName(e.target.value)}
                 required/>
       </div>

       <div className="w-full md:w-1/2 px-3">
          <label htmlFor="last-name" className="block uppercase text-left  text-gray-700 text-xs font-bold " >Last Name:</label>
          <input className="border border-gray-400 rounded py-2 px-3" 
                 type="text" 
                 placeholder='Last Name'
                 id="last-name" 
                 name="last-name" 
                 value={lastName} onChange={(e) => setLastName(e.target.value)}  
                 required/>
                 
        </div>
        </div>
       
        {/* Email text field */}
        <div className="mb-4 flex flex-col "> 
          <label htmlFor="email" className="block uppercase text-left  text-gray-700 text-xs font-bold ">Email:</label>
          <input className="border border-gray-400 rounded py-2 px-3" 
                 type="email"
                 placeholder='your-email'
                 id="email"
                 name="email" 
                 value={email} onChange={(e) => setEmail(e.target.value)} 
                 required/>
       
        </div>
       
       
		{/* Password text field */}
        <div className="mb-4 flex flex-col "> 
          <label htmlFor="password" className="block uppercase text-left  text-gray-700 text-xs font-bold ">Password:</label>
          <input  className="border border-gray-400 rounded py-2 px-3 mb-3" 
                  type="password" 
                  placeholder='your-password'
                  id="password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
                    

       {/* confirm password field */}
          <label htmlFor="confirm-password" className="block uppercase text-left  text-gray-700 text-xs font-bold">Confirm Password:</label>
          <input className="border border-gray-400 rounded py-2 px-3 " 
                 type="password" 
                 placeholder='confirm-password'
                 id="confirm-password" 
                 name="confirm-password" 
                 value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                 required/>

          {/* display a message if the password does not match */}
          {!passwordMatch && <p className=" text-left text-red-500 text-sm mt-2">Passwords do not match</p>}

        </div>

       
        {/* conditionally render and disable the button based on the password match */}
        <button type="submit" disabled={!passwordMatch} className={!passwordMatch ? " bg-red-500 text-white py-2 px-4 rounded block uppercase font-bold mb-10" : " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase   font-bold mb-10"}>Sign Up</button>

         {/* do you have an account */}
         <div className="inline-flex items-center justify-center w-full mb-5">
          <span className="absolute px-3 font-light -translate-x-1/2 bg-blue-300 left-1/2">Do you have an account? </span> 
        </div>
        {/* Button wrap in `Link` it is used to navigate to the app when the button is clicked, in this case the button will navigate us to `/login`*/}
        <Link to="/login">
            <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
            </button>
        </Link>
      
      </form>
    </div>
  );
};

export default Signup;

```
### Conclusion 🔎
`Signup.js` work by simply verifying the user input if all fields are correct and then forwarding the user input to the API, waiting for the API’s response, if the request went through it prompts an alert saying that `Account successfully create` then it will navigate you to `localhost:3000/login`


## 8. Create Log in Component and its Handler function

### Login-handler 🤝

  

Same procedure as the `Signup-handler` but this time we will use `get` `HTTP Method` since `/api/user-login` route is accessible via `get` `HTTP Metod`  and we will `JS Cookie` to store `Token`


Locate and open `Login-handler.js` and paste the following:

```js
import Axios from 'axios';
import Cookies from 'js-cookie';

const LoginHandler = async (email, password) => {
          return   await Axios.get('http://localhost:4000/api/user-login',
            {headers: { 'Content-Type': 'application/json', },
            data: {},
            //send the email and password to the server
            params:{
                Email: email,
                Password: password
            }})
            .then(res => {
                try {
                    //if the server's response is Invalid email or password, return the error message
                    if(res.data === "Invalid email or password.")  {
                        return res.data
                    }
                    //if the server's response is No user found, return the error message
                    else if (res.data === "No user found.") {
                        console.log("error")
                       
                        return res.data
                    }
                    //if the user is found, set the token and id in the cookies
                    //and return the status message
                    else {
                        //Separate the token from the "Bearer"  and set the token in the cookies as user_token
                        Cookies.set('user_token', res.data["token"].split(' ')[1])
                        //set the id in the cookies as id
                        Cookies.set('id', res.data["id"])
                        //return the status message
                        return res.statusText
                    }
                }
                catch (error) {
                    console.error(error); res.sendStatus(500);
                }
              
            })

}
export default LoginHandler;

```
### How it works:
1. We simply import the dependencies we need
2. Creates a function named `LoginHandle` 
3. Put the `email` and `password` in the params

4. Wait for the server’s response, if the server's response is an `Invalid email or password` or `No user found` it will return the `response message` that is stored in `response.data`, however, if both conditional statements are false,
It will fall to the `else` statement which means that the user credentials are correct. Next, it splits the token from the `“Bearer”` and set the `Token` in a cookie as `user_token`

```js
Cookies.set('user_token', res.data["token"].split(' ')[1])
```

It will also store the user’s `id` in a `token` as `id`
```js
 Cookies.set('id', res.data["id"])
```

### `Login.js` 🔐

Same procedure as `Signup.js` but this time we will not use `useEffect`

We need to import the following:
- `useState`from `'react'`
- `Link` from `'react-router-dom'`
- `useNavigate` from `'react-router-dom'`
- `LoginHandler.js` from `'./handlers/Login-handler'`

`useState`is used for data handling 

 `Link` is used to navigate to different pages via the link
 `useNavigate` is used to navigate to different pages via the function



```js
//Login.js
👉import React, { useState } from 'react';
👉import { Link, useNavigate } from 'react-router-dom';
👉import loginHandler from './handlers/Login-handler';
    
const Login = () => {
	return (
		<div>Login Component</div>
		)}
export default Login 
```

Create a `useState` to handle the form data and `useNavigate` as `navigate`
```js
//Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginHandler from './handlers/Login-handler';
    
const Login = () => {
//useNavigate to navigate to different pages
 👉const navigate = useNavigate();

  //usestates to handle the form data
 👉const [email, setEmail] = useState('');
 👉const [password, setPassword] = useState('');
  return (
   <div>Login Component</div>
  )
 }
 
export default Login 
```
next, is we want to create a function that will handle the user submission
```js
//Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginHandler from './handlers/Login-handler';
    
const Login = () => {
//useNavigate to navigate to different pages
  const navigate = useNavigate();

  //usestates to handle the form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //fields validation
 👉const handleSubmit = (event) => {
 👉  event.preventDefault();
    //LoginHandler is a function that handles the login process and returns a promise
 👉  loginHandler(email, password).then((res) => {
      //if the user is not found or the password is incorrect, an alert will be displayed
 👉    if (res === "Invalid email or password.") {
 👉      alert( "Invalid email or password");
 👉    }else if (res === "No user found.") {
       //if the user is not found or the password is incorrect, an alert will be displayed 
 👉      alert("No user found");
      }
 👉    else {
	    //if the user is found and the password is correct, it will alert the user that the login was successful and navigate to the home page
 👉     alert("Login successful");
 👉     navigate('/');
 👉   }
 👉  });
  return (
   <div>Login Component</div>
  )
 }
 
export default Login 
```

Let's now render our component

First, remove:
```js 
 <div>Login Component</div>
 ```
 and then replace it with:
```js
  
    <div className="flex justify-center flex-wrap items-center h-screen">
    
	   {/*Form*/}
      <form onSubmit={handleSubmit} className="flex flex-col  p-10 bg-blue-300 rounded-xl">
      
	   {/* Title*/}
      <h1 className="text-2xl mb-4">Login Page</h1>
      
		{/* Email Text field*/}
        <label htmlFor="email" className="block uppercase text-left  text-gray-700 text-xs font-bold mb-2">Email:</label>
        <input type="email" 
               placeholder='your-email@email.com' 
               id="email" 
               name="email" 
               value={email} onChange={(e) => setEmail(e.target.value)} 
               className="border w-96 border-gray-400 rounded py-2 px-3 mb-4"
               required />
               
		 {/* Password Text field*/}
        <label htmlFor="password" className="block uppercase text-left  text-gray-700 text-xs font-bold mb-2">Password:</label>
        <input type="password" 
               placeholder='your-password' 
               id="password" name="password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               className="border w-96 border-gray-400 rounded py-2 px-3 mb-4" 
               required/>
               
		 {/* Submit button*/}
         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase mb-10 ">Login</button>

         {/* `Don't you have an account?` text*/}
         <div className="inline-flex items-center justify-center w-full mb-5">
            <span className="absolute px-3 font-light -translate-x-1/2 bg-blue-300 left-1/2">Don't you have an account? </span>
        </div>
		
		{/* Button wrap in `Link` it is used to navigate to the app when the button is clicked, in this case the button will navigate us to `/signup`*/}
        <Link to="/signup">
           <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Sign Up
           </button>
        </Link>
      </form>
     </div>
  ```

## `Login.js` should look like this 👁‍🗨
```js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginHandler from './handlers/Login-handler';

//Login component that handles the login process
const Login = () => {
  
  //useNavigate to navigate to different pages
  const navigate = useNavigate();

  //usestates to handle the form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //fields validation
  const handleSubmit = (event) => {
    event.preventDefault();
    //LoginHandler is a function that handles the login process and returns a promise
    loginHandler(email, password).then((res) => {
      //if the user is not found or the password is incorrect, an alert will be displayed
      if (res === "Invalid email or password.") {
        alert( "Invalid email or password");

      }
      //if the user is not found or the password is incorrect, an alert will be displayed 
      else if (res === "No user found.") {
        alert("No user found");
      }
      //if the user is found and the password is correct, it will alert the user that the login was successful and navigate to the home page
      else {
        alert("Login successful");
        navigate('/');
      }
    });
  };
  
  //this will return the login form to the user
  return (
    
    <div className="flex justify-center flex-wrap items-center h-screen">
    
      <form onSubmit={handleSubmit} className="flex flex-col  p-10 bg-blue-300 rounded-xl">
     
      <h1 className="text-2xl mb-4">Login Page</h1>

        <label htmlFor="email" className="block uppercase text-left  text-gray-700 text-xs font-bold mb-2">Email:</label>
        <input type="email" 
               placeholder='your-email@email.com' 
               id="email" 
               name="email" 
               value={email} onChange={(e) => setEmail(e.target.value)} 
               className="border w-96 border-gray-400 rounded py-2 px-3 mb-4"
               required />
 
        <label htmlFor="password" className="block uppercase text-left  text-gray-700 text-xs font-bold mb-2">Password:</label>
        <input type="password" 
               placeholder='your-password' 
               id="password" name="password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               className="border w-96 border-gray-400 rounded py-2 px-3 mb-4" 
               required/>

         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase mb-10 ">Login</button>

         {/* lines */}
         <div className="inline-flex items-center justify-center w-full mb-5">
            <span className="absolute px-3 font-light -translate-x-1/2 bg-blue-300 left-1/2">Don't you have an account? </span>
        </div>

        <Link to="/signup">
           <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
             Sign Up
           </button>
        </Link>
      </form>
     </div>
  
  )
};

export default Login;
```

### Conclusion
`Login.js` simply works by passing the user input *(credentials)* to the API, waiting for response, if the credentials are correct, the user will be ridirected back to home page *(/)*


## 9. Get authenticate and use protected routes via 🔓

### `FetchData.js` / Home page

We need to import the following:
- `useState`from `'react'`
- `Link` from `'react-router-dom'`
- `Cookie` from `'js-cookie'`
- `Axios` from `axios`


`useState`is used for data handling 
`Cookie` to allow us access the `cookies` we just set earlier in `Login-handler.js`
 `Link` is used to navigate to different pages via the link
 `useNavigate` is used to navigate to different pages via the function
 `Axios` will allow us to make an `HTTP Request`

Let us first import the dependencies
 ```js
//FetchData.js
👉import React, { useState, useEffect } from 'react';
👉import axios from 'axios';
👉import {Link} from 'react-router-dom'
👉import Cookies from 'js-cookie';

const FetchData = () => {
  return (
    <div>Hello World</div>
  )
}
export default FetchData
```

We want to create a `state` to store our data that will come from our backend
 ```js
//FetchData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const FetchData = () => {
	👉const [data, setData] = useState(null);

  return (
    <div>Hello World</div>
  )
}
export default FetchData
```

Now will create a `useEffect` that will be triggered if the page loads/reload and will get the user's data from the server

 ```js
//FetchData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const FetchData = () => {
	const [data, setData] = useState(null);
	
👉useEffect(() => {
	
    // `/api/credentials` is a protected route on the server
    // so we need to send the token in the header of the request to be sent to the server and get validated
    axios.get('http://localhost:4000/api/credentials',
    
    //get the token from the cookies and set it in the header as Authorization
    {headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('user_token')}`},
    data: {},
    
    //get the id from the cookies and set it in the params
    //so that the server can get the id and get the user's data
    params:{id: Cookies.get('id')}
    }).then(response => {
	    //stores the responde data in `data` state
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
👉 }, []);

  return (
    <div>Hello World</div>
  )
}
export default FetchData
```
We do not put any dependencies in the array of `useEffect` because we want the useEffect to run only once when the page loads

next is we want to create a function that will handle the `logout`


 ```js
//FetchData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const FetchData = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
	
    // `/api/credentials` is a protected route on the server
    // so we need to send the token in the header of the request to be sent to the server and get validated
    axios.get('http://localhost:4000/api/credentials',
    
    //get the token from the cookies and set it in the header as Authorization
    {headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('user_token')}`},
    data: {},
    
    //get the id from the cookies and set it in the params
    //so that the server can get the id and get the user's data
    params:{id: Cookies.get('id')}
    
  })
      .then(response => {
	    //stores the responde data in `data` state
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
 👉const logout = () => {
    👉Cookies.remove('user_token')
    👉Cookies.remove('id')
    👉 window.location.reload()
  }
  return (
    <div>Hello World</div>
  )
}
export default FetchData
```

We can simulate a `logout` by just removing our `token` in the `cookies`. we can do this manually or via a function. we also want to remove any footprint of the last user such as `id` and then reload the page, so that the `useEffect` will be triggered again

Last, is we want to render our component.

Remove:
 ```js
  👉  <div>Hello World</div>
  ```
and then replace it with this template:
```js
//FetchData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';

const FetchData = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
	
    // `/api/credentials` is a protected route on the server
    // so we need to send the token in the header of the request to be sent to the server and get validated
    axios.get('http://localhost:4000/api/credentials',
    
    //get the token from the cookies and set it in the header as Authorization
    {headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('user_token')}`},
    data: {},
    
    //get the id from the cookies and set it in the params
    //so that the server can get the id and get the user's data
    params:{id: Cookies.get('id')}
    
  })
      .then(response => {
	    //stores the responde data in `data` state
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
 👉const logout = () => {
    👉Cookies.remove('user_token')
    👉Cookies.remove('id')
    👉 window.location.reload()
  }
  return (
     <div className="">
         <h1 className='text-4xl italic'>Hello</h1>
      {/* if there is a user, show the user's data and a logout button */}
      {/* if there is no user, show a message and a login button */}
      
      {/* 
      example of ternary operator:
      
      {data? (SayHi_if_data=true):(sayBye_if_data=false)} 
      
        -is a ternary operator that checks if there is data 
      */}
    
      {data ? (
        //if there is a user, show the user's data and a logout button 
        <div className='mt-10'>
         
         {/*data.email, data.first_name and data.last_name are the data that we recieved from our server */}  
        <h1 className='text-2xl italic'>{data.first_name} {data.last_name}</h1>
        <h1 className='text-2xl italic mb-10'>Your Email: {data.email}</h1>

        {/* logout button triggers logout() function that removes the token and id from the cookies and reloads the page */}
        <button className= "bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" 
                onClick={logout}>
                Logout?
        </button>
        </div>
        
      ) : (
        // if there is no user, show a message and a login button
        <div >
           {/* */}
           <p className='text-light italic mb-10'>There is user <br/> Please Login</p>
           {/* login button wrap in `Link` that navigates us to `/login` */}
          <Link to="/login">
            <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
            </button>
          </Link>

        </div>
      )}
    
    </div>
  )
}
export default FetchData
```

### Conclusion 🔎
FetchData works by sending the `token` to the server via header, gets authenticated by our `middleware` and then display the content.


---

### [server-guide](https://github.com/joystacktrek/fullstack-starter-kit-01/blob/main/simple-login/guides/server-guide.md) 👩‍🏫
### [client](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/client)
### [server](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login/server)
### [simple-login](https://github.com/joystacktrek/fullstack-starter-kit-01/tree/main/simple-login) :this contains all the project files.

---
### Links 🌐
[JS-cookie](https://www.npmjs.com/package/js-cookie)
[Axios](https://axios-http.com/docs/intro)
[React-router](https://reactrouter.com/en/main)
[React-router-dom](https://www.npmjs.com/package/react-router-dom)
[React-hooks](https://react.dev/reference/react) [Latest]
[React-hooks](https://legacy.reactjs.org/docs/hooks-intro.html) [Legacy]


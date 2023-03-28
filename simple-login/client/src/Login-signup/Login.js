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

     {/* Form*/}
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
 
        <label htmlFor="password" className="block uppercase text-left  text-gray-700 text-xs font-bold mb-2">Password:</label>
        <input type="password" 
               placeholder='your-password' 
               id="password" name="password" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               className="border w-96 border-gray-400 rounded py-2 px-3 mb-4" 
               required/>

         {/* Submit button*/}
         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase mb-10 ">Login</button>

         {/* `dont you have an account?` text */}
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
  
  )
};

export default Login;
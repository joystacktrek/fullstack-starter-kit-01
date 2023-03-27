import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginHandler from './handlers/Login-handler';

const Login = () => {
  //useNavigate to navigate to different pages
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //fields validation
  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(email, password).then((res) => {
      if (res === "Invalid email or password.") {
        alert( "Invalid email or password");
      } else if (res === "No user found.") {
        alert("No user found");
      }
      else {
        alert("Login successful");
        navigate('/');
      }
    });
  
  
  };


  
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

         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block uppercase   font-bold mb-10 ">Login</button>

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
  
  );
};

export default Login;
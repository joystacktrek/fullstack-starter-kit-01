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

  //fields validation
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
    }
    );
  };

  return (
   
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
  );
};

export default Signup;

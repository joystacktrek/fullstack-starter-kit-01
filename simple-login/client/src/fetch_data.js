import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie';
function Fetch_data() {
  const [data, setData] = useState(null);

  useEffect(() => {
   
    axios.get('http://localhost:4000/api/credentials',
    {headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${Cookies.get('user_token')}`},
    data: {},
    params:{id: Cookies.get('id')}
  })
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const logout = () => {
    Cookies.remove('user_token')
    Cookies.remove('id')
    window.location.reload()
  }


  return (
    <div className="">
         <h1 className='text-4xl italic'>Hello</h1>
      {data ? (
        <div className='mt-10'>
        <h1 className='text-2xl italic'>{data.first_name} {data.last_name}</h1>
        <h1 className='text-2xl italic mb-10'>Your Email: {data.email}</h1>
        <button className= "bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        onClick={logout}>
                Logout?
        </button>
        </div>
        
      ) : (
        <div >
           <p className='text-light italic mb-10'>There is user <br/> Please Login</p>
          <Link to="/login">
            <button className= "bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
            </button>
           
        </Link>

        </div>
      )}
    
    </div>
  );
}

export default Fetch_data;

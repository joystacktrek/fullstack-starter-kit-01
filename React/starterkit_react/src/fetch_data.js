import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fetch_data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className='text-2xl italic'>Hello im from fetch_data.js</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>I fetch data from your database using node js and axios</p>
      )}
    </div>
  );
}

export default Fetch_data;

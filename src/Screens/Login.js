
// import React from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() { 




  const [credentials, setCredentials] = useState({   email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/create-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           email: credentials.email,
          password: credentials.password,
         })
      });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error('There was an error:', error);
    }
  }












  return (
    <> 
     <div className="container">
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} required />
        </div>

        

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/create-user" className='m-3 btn btn-danger'>I'm a new user</Link>
      </form>
    </div>
    </>
  )
}

 import React from 'react'
import { Link } from 'react-router-dom'
 
 export default function Signup() {
   return (
     
     
     <> 
    
    <div className="container"> 
    <form>

    <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control"  required/>
   </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
</form>
    
</div>
    
    
     
     </>
   )
 }
 
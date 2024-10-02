// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", gelocation: "" })

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })  
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/create-user", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(name:credentials.name, email:credentials.name,password:credentials.password,location:credentials.geolocation);
//     })

//     const json = await response.json()
//     console.log(json)

//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
//           <textarea className="form-control" name='gelocation' value={credentials.gelocation} onChange={onChange} required />
//         </div>

//         <button type="submit" className="m-3 btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
//       </form> 
//     </div>
//   )
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/create-user", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation
//       })
//     });

//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
//           <textarea className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} required />
//         </div>

//         <button type="submit" className="m-3 btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
//       </form>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/create-user", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//           location: credentials.geolocation
//         })
//       });

//       // if (!response.ok) {
//       //   throw new Error(`HTTP error! Status: ${response.status}`);
//       // }

//       const json = await response.json();
//       console.log(json);

//       if (!json.success) {
//         alert("Enter Valid Credentials");
//       }
//     } catch (error) {
//       console.error('There was an error:', error);
//     }
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
//           <textarea className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} required />
//         </div>

//         <button type="submit" className="m-3 btn btn-success">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
//       </form>
//     </div>
//   );
// }










import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/create-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
      }

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        alert("Signup successful!");
      }
    } catch (error) {
      console.error('There was an error:', error.message);
      alert('There was an error: ' + error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={credentials.name} 
            onChange={onChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            name="email" 
            value={credentials.email} 
            onChange={onChange} 
            required 
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            name="password" 
            value={credentials.password} 
            onChange={onChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
          <textarea 
            className="form-control" 
            name="geolocation" 
            value={credentials.geolocation} 
            onChange={onChange} 
            required 
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/login" className="m-3 btn btn-danger">Already an existing user</Link>
      </form>
    </div>
  );
}

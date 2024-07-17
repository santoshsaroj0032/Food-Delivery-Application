// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup() {


//   const[credentials,setcredentials]=useState({ name:"",email:"",password:"",gelocation:" "}) 
//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     const response = fetch("http://localhost:3000/api/create-user", {
//       method: 'POST',
//       header: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify()
//     })
//   }


//   return (


//     <>

//       <div className="container">
//         <form>

//           <div className="mb-3">
//             <label for="name" className="form-label">Name</label>
//             <input type="text" className="form-control" name='name' value={credentials.name} required />
//           </div>

//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} required />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1"name='password' value={credentials.password} required />
//           </div>

//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">Address</label>
//             <input type="password" className="form-control"  name='address' value={credentials.gelocation} required />
//           </div>


//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
//         </form>

//       </div>



//     </>
//   )
// }


import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", gelocation: "" })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/create-user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation)
      body: JSON.stringify(credentials )

    })

    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("Enter Valid Credentials");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
          <textarea type="text-area" className="form-control" name='gelocation' value={credentials.gelocation} onChange={onChange} required />
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/login" className='m-3 btn btn-danger'>Already exist user</Link>
      </form>
    </div>
  )
}


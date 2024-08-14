import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({ email: "", password: "" }); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login-user", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: info.email, password: info.password })
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Enter Valid Credentials!");
        return;
      }

      localStorage.setItem("userEmail", info.email);
      localStorage.setItem("authToken", data.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");

    } catch (error) {
      console.error('Error:', error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }

  const handleData = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="mb-3 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={info.email}
            onChange={handleData}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={info.password}
            onChange={handleData}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <Link to="/createuser" className="m-3 btn btn-danger">New user</Link>
      </form>
    </div>
  );
}

export default Login;

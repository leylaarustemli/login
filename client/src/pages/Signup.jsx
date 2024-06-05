import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit=(e)=>{
e.preventDefault();
axios.post("http://localhost:5000/register",{name,email,password})
.then(res=>console.log(res))
.catch(err=>console.log(err))
}
  return (
    <>
      <div className="header">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </ul>
      </div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Register Page</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control"  onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <p>
            You have account{" "}
            <Link to={"/login"}>
              <span>Go</span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;

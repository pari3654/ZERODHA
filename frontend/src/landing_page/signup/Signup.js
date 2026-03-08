import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { toast } from "react-toastify";

const Signup = () => {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 //signup function 
const handleSignup = () => {
  axios.post("https://zerodha-2rqq.onrender.com//signup", {
    email,
    password
  })
  .then(() => {
    toast.success("Signed up successfully! Login to continue...");

    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);

  })
  .catch(() => {
    toast.error("Signup failed");
  });

};


 return (

  <div className="signup-container">

   <div className="signup-box">

    <h1>Create your account</h1>
    <p className="subtitle">Start trading smarter today</p>

    <input
     type="email"
     placeholder="Enter your email"
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     placeholder="Create password"
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button onClick={handleSignup}>
     Create Account
    </button>

    <p className="login-link">
      Already have an account? <a href="/login">Login</a>
    </p>

   </div>

  </div>

 );

};

export default Signup;

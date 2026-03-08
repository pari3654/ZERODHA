import React, { useState } from "react";
import axios from "axios";
import "../signup/Signup.css";
import { toast } from "react-toastify";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    axios.post(
      "https://zerodha-weld.vercel.app/",
      {
        email,
        password
      },
       {
      withCredentials: true
     }
    )
    .then((res) => {

      toast.success("Logged in successfully");

      setTimeout(() => {
        window.location.href = "https://zerodha-weld.vercel.app/";
      }, 1200);

    })
    .catch(() => {
      toast.error("Invalid email or password");
    });

  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h1>Login</h1>
        <p className="subtitle">Welcome back to Zerodha</p>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p className="login-link">
          Don't have an account? <a href="/signup">Signup</a>
        </p>

      </div>
    </div>
  );
};

export default Login;

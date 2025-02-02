import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
// import GitHubRepoSearch from "../../GitHubRepoSearch";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful!");
      navigate("/GitHubRepoSearch");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-form">
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
       
      </form>
      </div>
      {/* <GitHubRepoSearch/> */}
    </div>
  );
};

export default Login;

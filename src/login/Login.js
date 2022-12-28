import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter the correct data");
    }
  };
  return (
    <dev className="login">
      <h1>Welcome to login page</h1>
      <input
        className="name-input-filed"
        type="text"
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        className="password-input-filed"
        type="password"
        placeholder="enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button className="login-btn" onClick={handleLogin} type="button">
        Login
      </button>
    </dev>
  );
};
export default Login;

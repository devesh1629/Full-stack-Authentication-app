import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.scss";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users/signin", {
        email, password
      }).then(function (res) {
        const user = res.data.user;
        localStorage.setItem("username", user.username)
        localStorage.setItem("token", res.data.token);
        navigate("/home")
      })
    }
    catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={(e) => submit(e)}>Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  )
};

export default Login;
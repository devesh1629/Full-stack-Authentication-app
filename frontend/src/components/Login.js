import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function submit(e) {
    e.preventDefault();
    // console.log(email, password);
    try {
      await axios.post("http://localhost:8000/", {
        email, password
      })
    }
    catch (e) {
      console.log(e);
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
        {/* <input type="submit" onClick={submit} /> */}
      </form>
      <Link to="/register">Register</Link>
    </div>
  )
};

export default Login;
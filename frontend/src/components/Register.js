import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.scss";

function Register() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function submit(e) {
    e.preventDefault();
    // console.log(email, password);
    try {
      await axios.post("http://localhost:8000/users/signup", {
        username, email, password
      })
    }
    catch (e) {
      // console.log(e);
      alert(e.response.data.message)
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <div>
          <label>Username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={(e) => submit(e)}>Register</button>
      </form>
      <Link to="/">Login</Link>
    </div>
  )
};

export default Register;
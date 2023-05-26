import React from "react";
import axios from "axios";
import { useState } from "react";
import "../App.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  })

  async function createNote(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/notes", {
        title, description
      }, {
        headers: {"Authorization" : `Bearer ${token}`}
      });
      setTitle('')
      setDescription('')
    }
    catch(err) {
      alert(err.response.data.message);
    }
  }

  async function getNotes(e) {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8000/notes", 
        { headers : {"Authorization" : `Bearer ${token}`}})
      .then(function(res) {
        setNotes(res.data);
      })
    }
    catch(err) {
      alert(err.response.data.message);
    } 
  }

  async function signout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  }

  return (
    <div className="home">
      <h1>Home</h1>
      <h2>Hi {username}</h2>
      <form>
        <div>
          <label>Title</label>
          <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="button" onClick={(e) => createNote(e)}>Create a note</button>
      </form>
      <button onClick={(e) => getNotes(e)}>Get notes</button>
      <div>
      {
        notes.map((item, index) => {
          const {title, description} = item;
          return (
            <div key={index}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          )
        })
      }
      </div>
      <button onClick={(e) => signout(e)}>Signout</button>
    </div>
  )
};

export default Home;
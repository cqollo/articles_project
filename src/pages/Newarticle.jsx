import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Newarticle = () => {
  const [newArticle, setNewArticle] = useState({
    name: "",
    author: "",
  });

  const handleChange = (e) => {
    setNewArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  //A handler through the button to post the data to the database

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/articles", newArticle);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleReturn = ()=>{
    return(
      navigate("/")
    )
  }

  return (
    <div className="form">
      <h1>Add New Article</h1>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
        required
      />
      <input
        type="text"
        placeholder="author"
        onChange={handleChange}
        name="author"
        required
      />
      <button disabled={!newArticle.name || !newArticle.author ? true : false} onClick={handleClick}>Add</button>
      <button onClick={handleReturn}>Cancel</button>
    </div>
  );
};

export default Newarticle;

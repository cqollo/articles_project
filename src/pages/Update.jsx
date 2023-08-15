import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";

const Update = () => {
  const [article, setArticle] = useState({
    name: "",
    author: "",
  });

  const navigate = useNavigate();
  const articleId = useLocation().pathname.split("/")[2];

  const handleChange = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/articles/" + articleId, article);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleReturn = () => {
    return navigate("/");
  };

  return (
    <div className="form">
      <h1>Update Article</h1>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="author"
        onChange={handleChange}
        name="author"
      />
      <button  disabled={!article.name || !article.author} onClick={handleClick}>Update</button>
      <button onClick={handleReturn}>Cancel</button>
    </div>
  );
};

export default Update;

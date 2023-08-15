import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Homepage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await axios.get("http://localhost:8800/articles");
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/articles/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Articles</h1>
      <div className="articles">
        {articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <h3>{article.name}</h3>
              <p>{article.author}</p>
              <button
                className="delete"
                onClick={() => handleDelete(article.id)}
              >
                Delete
              </button>
              <button className="update">
                <Link className="btn" to={`/Update/${article.id}`}>
                  Update
                </Link>
              </button>
            </div>
          );
        })}
      </div>
      <button className="nabtn">
        <Link className="btn1" to="/Newarticle">New Article</Link>
      </button>
    </div>
  );
};

export default Homepage;

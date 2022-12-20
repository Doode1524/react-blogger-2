import React from "react";
import "./blogs-styles.css";
import { useNavigate } from "react-router-dom";

const Blog = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="blog-card">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <button onClick={() => navigate(`/blogs/${data.id}`)}>Read More</button>
    </div>
  );
};

export default Blog;

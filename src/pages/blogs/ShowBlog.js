import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./blogs-styles.css";

const ShowBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  const fetchBlog = () => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="single-blog-container">
      <div className="blog-card">
        <h1>{blog && blog.title}</h1>
        <p>{blog && blog.content}</p>
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;

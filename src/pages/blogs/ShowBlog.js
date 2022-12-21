import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import "./blogs-styles.css";

const ShowBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchBlog = () => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/blogs");
    });
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
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;

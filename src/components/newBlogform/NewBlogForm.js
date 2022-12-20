import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewBlogForm = () => {
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const createBlog = async () => {
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => navigate("/blogs"));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          onChange={(e) => handleFormChange(e)}
        ></textarea>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewBlogForm;

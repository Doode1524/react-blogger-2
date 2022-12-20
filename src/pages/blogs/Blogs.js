import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import "./blogs-styles.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div>
        <button>Create Blog</button>
      </div>
      <div className="blogs-container">
        {blogs && blogs.map((blog) => <Blog data={blog} />)}
      </div>
    </>
  );
};

export default Blogs;

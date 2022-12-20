import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import ShowBlog from "./pages/blogs/ShowBlog";
import NewBlogForm from "./components/newBlogform/NewBlogForm";

const App = () => {
  const headerTitle = "Blogger";
  const navLinks = [
    { name: "Blogs", link: "/blogs" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="App">
      <Header title={headerTitle} navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<ShowBlog />} />
        <Route path="/create-blog" element={<NewBlogForm />} />
      </Routes>
    </div>
  );
};

export default App;

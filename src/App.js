import "./App.css";
import Header from "./components/header/Header";

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
    </div>
  );
};

export default App;

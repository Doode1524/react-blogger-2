import React from "react";
import { useNavigate } from "react-router-dom";
import "./header-styles.css";

const Header = ({ title, navLinks }) => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div>{title}</div>
      <div className="navlinks">
        {navLinks.map((ele) => (
          <button onClick={() => navigate(ele.link)} className="navlink">
            {ele.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;

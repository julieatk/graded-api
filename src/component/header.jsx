// src/Components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>Recipes!</h1>
        <p>We are learning routes in Vite project</p>
        <nav>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/try">Try</Link>
            </li>
          </ul>
        </nav>
      </div>{" "}
    </div>
  );
};

export default Header;

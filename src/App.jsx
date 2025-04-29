// src/App.jsx

import React from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import About from "./pages/about";
import Try from "./pages/try";
import Header from "./component/header.jsx";


//links to differenct pages
const Navbar = () => (
  <nav style={{ margin: "20px", textAlign: "center" }}>
    <Link to="/" style={{ margin: "10px", color: "SaddleBrown" }}>Home</Link>
    <Link to="/about" style={{ margin: "10px", color: "SaddleBrown" }}>About</Link>
    <Link to="/try" style={{ margin: "10px" , color: "SaddleBrown" }}>Try</Link>
  </nav>
);


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Header />

    
      <div>Welcome to the Home page</div>
    </div>
  );
};

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/try" element={<Try />} />
    </Routes>
  </div>
);

export default App;

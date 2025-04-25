// src/App.jsx

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/about";
import Try from "./pages/try";
import Header from "./component/header.jsx";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
        border: "2px solid green",
        borderRadius: "4px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      Go to Home
    </button>
  );
};

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Header />
    <Button />
    <Routes>
      <Route path="/" element={<div>Welcome to the Home page</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/try" element={<Try />} />
    </Routes>
  </div>
);

export default App;

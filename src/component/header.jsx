// src/Components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import recipeImage from "../recipe.png";

//showing main home page

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "SaddleBrown", fontFamily: 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif' }}>
  Recipes!
</h1>

        <p>Find any recipes</p>
        <img 
  src={recipeImage} 
  alt="recipe pic" 
  style={{ width: "500px", height: "auto "}}
/>
      </div>{" "}
    </div>
  );
};


export default Header;

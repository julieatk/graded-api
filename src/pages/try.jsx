import React, { useState } from "react";
import axios from "axios";

// i used AI to help me through this!! Specifically I asked them for help on how to pull the data from API and display it after the user clicked the submit buttons

const Try = () => {
  const [foodInput, setFoodInput] = useState(""); //storing food name
  const [areaInput, setAreaInput] = useState(""); //storing cuisine
  const [meals, setMeals] = useState([]); //aray of meals from api
  const [selectedMeal, setSelectedMeal] = useState(null); //single selected meal

  //search by food name
  const handleFoodSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInput}`) //get foodname from api
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals); //get returned meals
          setSelectedMeal(null);
        } else {
          setMeals([]); //clear list if no results
          alert("No recipes found for that food.");
        }
      })
      .catch(() => alert("Error fetching food."));
  };

  //search by cuisine
  const handleAreaSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaInput}`) //get area/cuisine from api
      .then((res) => {
        if (res.data.meals) {
          setMeals(res.data.meals);
          setSelectedMeal(null);
        } else {
          setMeals([]);
          alert("No meals found for that area.");
        }
      })
      .catch(() => alert("Error fetching area."));
  };

  //get full deatils of meal w instructions
  const fetchMealDetails = (id) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`) //call by meal id
      .then((res) => {
        if (res.data.meals) {
          setSelectedMeal(res.data.meals[0]); //set selected meal for dusplay
        }
      })
      .catch(() => alert("Error fetching meal details."));
  };

  //layout

  return (
    <div style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
      <h1>Try</h1>
      <p>Search for a recipe by food name or cuisine area</p>

      {/* food name form */}
      <form onSubmit={handleFoodSubmit} style={{ marginBottom: "1em" }}>
        <input
          type="text"
          placeholder="insert food"
          value={foodInput}
          onChange={(e) => setFoodInput(e.target.value)}
          style={{ padding: "0.5em", marginRight: "0.5em", width: "60%" }}
        />
        <button type="submit" style={{ padding: "0.5em" }}>Search Food</button>
      </form>

      {/* cuisine  form */}
      <form onSubmit={handleAreaSubmit}>
        <input
          type="text"
          placeholder="insert cuisine area (e.g. Italian)"
          value={areaInput}
          onChange={(e) => setAreaInput(e.target.value)}
          style={{ padding: "0.5em", marginRight: "0.5em", width: "60%" }}
        />
        <button type="submit" style={{ padding: "0.5em" }}>Search Area</button>
      </form>

      {/* selected meal with instructions */}
      {selectedMeal && (
        <div style={{ marginTop: "2em", textAlign: "left" }}>
          <h2>{selectedMeal.strMeal}</h2>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            style={{ width: "300px", borderRadius: "8px" }}
          />
          <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
          <p><strong>Area:</strong> {selectedMeal.strArea}</p>
          <p style={{ marginTop: "1em" }}>
            <strong>Instructions:</strong><br />
            {selectedMeal.strInstructions}
          </p>
        </div>
      )}

      {/* available meals list */}
      {meals.length > 0 && (
        <div style={{ marginTop: "2em" }}>
          <h2>Available Recipes</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "center" }}>
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => fetchMealDetails(meal.idMeal)}
                style={{ cursor: "pointer", width: "150px" }}
              >
                <p>{meal.strMeal}</p>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Try;

"use client";
import HomePage from "./home/HomePage";
import { useState, createContext } from "react";
import AppContext from "./components/AppContext";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipes] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchValueFromButtonClick, setSearchValueFromButtonClick] =
    useState("");
  const [options, setOptions] = useState({
    "Dairy-Free": false,
    "Gluten-Free": false,
    "Peanut-Free": false,
    Vegan: false,
    Vegetarian: false,
  });
  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes,
        currentRecipe,
        setCurrentRecipes,
        searchValue,
        setSearchValue,
        searchValueFromButtonClick,
        setSearchValueFromButtonClick,
        options,
        setOptions,
      }}
    >
      <HomePage />
    </AppContext.Provider>
  );
}

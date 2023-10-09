import React from "react";
import SearchTiles from "./SearchTiles";
import { useContext } from "react";
import AppContext from "../context/AppContext";


function SearchResults() {
  const { setOptions, options, recipes } = useContext(AppContext);

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeLabels = recipe.recipe.healthLabels;
    const {
      "Dairy-Free": dairyFree,
      "Gluten-Free": glutenFree,
      "Peanut-Free": peanutFree,
      Vegan,
      Vegetarian,
    } = options;

    if (!dairyFree && !glutenFree && !peanutFree && !Vegan && !Vegetarian) {
      return true;
    }

    if (
      (dairyFree && !recipeLabels.includes("Dairy-Free")) ||
      (glutenFree && !recipeLabels.includes("Gluten-Free")) ||
      (peanutFree && !recipeLabels.includes("Peanut-Free")) ||
      (Vegan && !recipeLabels.includes("Vegan")) ||
      (Vegetarian && !recipeLabels.includes("Vegetarian"))
    ) {
      return false;
    }
    return true;
  });
  return (
    <div className="flex items-center justify-center md:col-span-6 lg:col-span-7">
    
      <div className="grid lg:grid-cols-3 gap-5 p-5 md:grid-cols-2 sm:grid-cols-1 ">
        {filteredRecipes.map((recipe, index) => (
          <SearchTiles key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

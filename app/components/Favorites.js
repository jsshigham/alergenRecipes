import React from "react";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Filter from "./Filter";

function Favorites() {
  const { setCurrentRecipe, setFavorites, favorites, options } = useContext(AppContext);

  const filteredFavorites = favorites.filter((recipe) => {
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

  function updateCurrentRecipe() {
    setCurrentRecipe(recipe);
  }

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== item);
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className=" md:grid md:grid-cols-8 md:grid-flow-row md:gap-x-4 justify-center items-center md:justify-start md:items-start flex flex-col ">
    <Filter/>
    <div className="flex items-center justify-center md:col-span-6 lg:col-span-7">
    <div className="flex flex-col justify-center items-center md:grid lg:grid-cols-3 gap-5 p-5 md:grid-cols-2 sm:grid-cols-1">
      {filteredFavorites.map((recipe, index) => {
        return (
          <div
            key={index}
            className=" shadow  rounded flex flex-col items-center justify-start gap-2 pb-2   hover:bg-slate-50"
          >
            <h2 className="py-2">{recipe.recipe.label}</h2>
            <img
              className="rounded-sm"
              src={recipe.recipe.images.SMALL.url}
              alt={recipe.recipe.label}
            />

            <p>Health Labels:</p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {recipe.recipe.healthLabels.map((label, index) => {
                switch (label) {
                  case "Gluten-Free":
                  case "Peanut-Free":
                  case "Dairy-Free":
                  case "Vegan":
                  case "Vegetarian":
                    return (
                      <p
                        className="shadow-sm text-slate-500  m-2 rounded-sm  p-1 text-center text-sm"
                        key={index}
                      >
                        {label}
                      </p>
                    )
                  default:
                    return null;
                }
              })}
            </div>
            <button onClick={updateCurrentRecipe}>
              <Link
                href={`../recipe/${recipe.recipe.label.replaceAll(" ", "-")}`}
                className="shadow rounded  p-1 text-center hover:text-green-400"
              >
                More Information
              </Link>
            </button>
            <button
              className="shadow rounded  p-1 text-center hover:text-green-400"
              onClick={() => removeFavorite(recipe)}
            >
              Unfavorite
            </button>
          </div>
        );
      })}
      
    </div>
    </div>
    </div>
  );
}

export default Favorites;

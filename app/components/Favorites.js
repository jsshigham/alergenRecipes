import React from "react";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "./AppContext";

function Favorites() {
  const { setCurrentRecipe, setFavorites, favorites } = useContext(AppContext);

  function updateCurrentRecipe() {
    setCurrentRecipe(recipe);
  }

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== item);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-5 p-5 md:grid-cols-2 sm:grid-cols-1">
      {favorites.map((recipe, index) => {
        return (
          <div
            key={index}
            className="bg-red-950 text-white rounded flex flex-col items-center justify-start pb-2 hover:bg-red-400 hover:text-black"
          >
            <h2 className="py-2 font-mono">{recipe.recipe.label}</h2>
            <img
              className="rounded"
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
                        className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                        key={index}
                      >
                        {label}
                      </p>
                    );
                  default:
                    return null;
                }
              })}
            </div>
            <button onClick={updateCurrentRecipe}>
              <Link
                href={`../recipe/${recipe.recipe.label.replaceAll(" ", "-")}`}
                className="bg-white text-red-950 rounded font-mono p-1 text-center hover:bg-red-950 hover:text-white pb-2"
              >
                More Information
              </Link>
            </button>
            <button
              className="bg-white text-red-950 rounded font-mono p-1 text-center hover:bg-red-950 hover:text-white"
              onClick={() => removeFavorite(recipe)}
            >
              Unfavorite
            </button>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Favorites;

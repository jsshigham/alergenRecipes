import React from "react";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function SearchTiles({ recipe }) {
  const { setCurrentRecipe } = useContext(AppContext);

  function updateCurrentRecipe() {
    setCurrentRecipe(recipe);
  }

  return (
    <div className="bg-red-950 text-white rounded flex flex-col items-center justify-start pb-2 hover:bg-red-400 hover:text-black">
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
          className="bg-white text-red-950 rounded font-mono p-1 text-center hover:bg-red-950 hover:text-white"
        >
          More Information
        </Link>
      </button>
    </div>
  );
}

export default SearchTiles;

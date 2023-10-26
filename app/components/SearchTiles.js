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
    <div className=" shadow  rounded flex flex-col items-center justify-start gap-2 pb-2 hover:bg-slate-50">
      <h2 className="py-2 text-center ">{recipe.recipe.label}</h2>
      <img
        className="rounded-sm"
        src={recipe.recipe.images.SMALL.url}
        alt={recipe.recipe.label}
      />

      <p >Health Labels:</p>
      <div className="flex flex-wrap justify-center items-center">
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
              );
            default:
              return null;
          }
        })}
      </div>
      <button onClick={updateCurrentRecipe}>
        <Link
          href={`../recipe/${recipe.recipe.label.replaceAll(" ", "-")}`}
          className=" shadow rounded  p-1 text-center hover:text-green-400"
        >
          More Information
        </Link>
      </button>
    </div>
  );
}

export default SearchTiles;

import Link from "next/link";
import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function RecipeTileLarge() {
  const { currentRecipe, setFavorites, favorites } = useContext(AppContext);

  const addFavorite = (item) => {
    const foundMatch = favorites.find(
      (i) => i.recipe.label === item.recipe.label
    );
    if (!foundMatch) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      <div className="bg-red-950 rounded flex flex-col items-center justify-start pb-2 mx-10 my-10">
        <div className="flex flex-row">
          <h2 className="my-5 text-lg p-1 bg-red-300 m-2 rounded font-mono text-center">
            {currentRecipe.recipe.label}
          </h2>
          <button
            onClick={() => addFavorite(currentRecipe)}
            className="my-5 text-lg p-1 bg-red-300 m-2 rounded font-mono text-center hover:bg-red-400 hover:text-white"
          >
            Favorite
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mb-5 mx-5 xl:flex-row xl:justify-evenly xl:items-start">
          <img
            className="rounded h-80 w-80 xl:w-auto h-auto"
            src={
              currentRecipe.recipe.images.LARGE.url
                ? currentRecipe.recipe.images.LARGE.url
                : currentRecipe.recipe.images.REGULAR.url
            }
            alt={currentRecipe.recipe.label}
          />
          <div className=" text-center">
            <h2 className=" bg-red-400 m-2 rounded font-mono p-1 text-center ">
              Ingredients:
            </h2>
            <ul>
              {currentRecipe.recipe.ingredientLines.map((ingredient, index) => {
                return (
                  <li
                    className=" bg-red-300 text-black m-2 rounded font-mono p-1 text-center"
                    key={index}
                  >
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="my-4 text-black bg-red-400 m-2 rounded font-mono p-1 text-center">
            Health Labels:
          </p>
          <div className=" flex flex-wrap justify-center items-center gap-2 pb-5">
            {currentRecipe.recipe.healthLabels.map((label, index) => (
              <p
                className="bg-red-300 m-2 rounded font-mono p-1 text-center"
                key={index}
              >
                {label}
              </p>
            ))}
          </div>
          <Link
            className=" bg-red-400 m-2 rounded font-mono p-1 text-center hover:bg-red-950 hover:text-white"
            href={currentRecipe.recipe.url}
          >
            Full Recipe Here
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeTileLarge;

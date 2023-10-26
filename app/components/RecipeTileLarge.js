import Link from "next/link";
import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function RecipeTileLarge() {
  const { currentRecipe, setFavorites, favorites } = useContext(AppContext);

  const addFavorite = (item) => {
    const foundMatch = favorites.find(
      (itemSearch) => itemSearch.recipe.label === item.recipe.label
    );
    if (!foundMatch) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== item);
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className=" shadow-lg border border-slate-100 rounded flex flex-col items-center justify-start pb-2 mx-10 my-10">
      <h2 className="my-5 text-lg p-1 m-2 rounded  text-center">
        {currentRecipe.recipe.label}
      </h2>

      <div className="flex flex-col items-center justify-center gap-3 mb-5 mx-5 lg:flex-row lg:justify-center lg:items-">
        <img
          className="rounded h-80 w-80 xl:w-auto "
          src={
            currentRecipe.recipe.images.REGULAR.url
              ? currentRecipe.recipe.images.REGULAR.url
              : currentRecipe.recipe.images.SMALL.url
          }
          alt={currentRecipe.recipe.label}
        />
        <div className=" text-center shadow">
          <h2 className="  m-2 rounded p-1 text-center ">Ingredients:</h2>
          <ul>
            {currentRecipe.recipe.ingredientLines.map((ingredient, index) => {
              return (
                <li
                  className=" text-sm text-black m-2 rounded  p-1 text-center"
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
        <p>Health Labels:</p>
        <div className=" grid  grid-cols-3 lg:grid-cols-7 justify-center items-center gap-2 pb-5">
          {currentRecipe.recipe.healthLabels.map((label, index) => (
            <p
              className=" shadow-sm text-slate-500  m-2 rounded-sm  p-1 text-center text-sm"
              key={index}
            >
              {label}
            </p>
          ))}
        </div>

        <Link
          className="  p-1  m-2 rounded shadow text-center hover:text-green-400"
          target="_blank"
          href={currentRecipe.recipe.url}
        >
          Full Recipe
        </Link>
        {favorites.find(
          (itemSearch) => itemSearch.recipe.label === currentRecipe.recipe.label
        ) ? (
          <button
            onClick={() => removeFavorite(currentRecipe)}
            className="  p-1  m-2 rounded shadow text-center hover:text-red-500"
          >
            Remove from Favorites
          </button>
        ) : <button
            onClick={() => addFavorite(currentRecipe)}
            className="  p-1  m-2 rounded shadow text-center hover:text-green-400"
          >
            Add to Favorites
          </button>}
      </div>
    </div>
  );
}

export default RecipeTileLarge;

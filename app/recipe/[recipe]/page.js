"use client";
import React, { useContext } from "react";
import Header from "../../components/Header";
import Link from "next/link";

import RecipeTileLarge from "../../components/RecipeTileLarge";
import AppContext from "../../context/AppContext";

const recipeNotFound = (
  <div className=" rounded shadow m-5 flex flex-col justify-end p-5 gap-3 items-center">
    <p>Sorry Recipe Not Found</p>
    <Link
      className=" text-black shadow rounded px-2  hover:text-green-400"
      href="/"
    >
      Return to search
    </Link>
  </div>
);

function RecipePage() {
  const { currentRecipe } = useContext(AppContext);

  return (
    <main className="bg-white">
      <Header />
      {currentRecipe.recipe?.label ? <RecipeTileLarge /> : recipeNotFound}
    </main>
  );
}

export default RecipePage;

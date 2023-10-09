"use client";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import Favorites from "../components/Favorites";
import Link from "next/link";

function FavoritesPage() {
  const { favorites } = useContext(AppContext);
  return (
    <main className="bg-white">
      <Header />
      {favorites.length === 0 ? (
        <div className="shadow rounded m-5 flex  flex-col gap-2 justify-end p-5 items-center ">
          {" "}
          <h4 className="text-center">
            Please add a recipe to your favorites
          </h4>{" "}
          <Link className=" text-black shadow rounded px-2  hover:text-green-400" href="/">Return to search</Link>
        </div>
      ) : (
        <Favorites />
      )}
      
    </main>
  );
}

export default FavoritesPage;

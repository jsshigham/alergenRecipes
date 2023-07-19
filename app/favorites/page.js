"use client";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../components/Favorites";

function FavoritesPage() {
  const { favorites } = useContext(AppContext);
  return (
    <main className="bg-white">
      <Header />
      {favorites.length === 0 ? (
        <div className="bg-red-950 rounded m-5 flex text-white flex-col-reverse justify-end p-5 font-mono items-center ">
          {" "}
          <h4 className="text-center">
            Please add a recipe to your favorites
          </h4>{" "}
        </div>
      ) : (
        <Favorites />
      )}
      <Footer />
    </main>
  );
}

export default FavoritesPage;

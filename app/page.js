"use client";
import axios from "axios";
import { useEffect, useContext } from "react";
import SearchTiles from "./components/SearchTiles";
import SearchForm from "./components/SearchForm/SearchForm";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Filter from "./components/Filter";

import AppContext from "./context/AppContext";

export default function HomePage() {
  const {
    favorites,
    setFavorites,
    recipes,
    setRecipes,
    searchValue,
    setSearchValue,
    searchValueFromButtonClick,
    setSearchValueFromButtonClick,
    options,
    setOptions,
  } = useContext(AppContext);

  const key = process.env.NEXT_PUBLIC_APP_KEY;
  const id = process.env.NEXT_PUBLIC_APP_ID;

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleSearch(event);
    }
  };

  const handleSearch = () => {
    setSearchValueFromButtonClick(searchValue);
  };

  useEffect(() => {
    async function getRecipes() {
      const recipes = await axios(
        `https://api.edamam.com/api/recipes/v2?q=${searchValueFromButtonClick}&app_key=${key}&app_id=${id}&type=any`
      );
      setRecipes(recipes.data.hits);
    }
    getRecipes()
    
  }, [searchValueFromButtonClick]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    console.log("looking for items", storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
   const innerHeight = window.innerHeight;

  })

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      {recipes.length === 0 ? (
        <SearchForm handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      ) : (
        <div className=" md:grid md:grid-cols-8 md:grid-flow-row md:gap-x-4 justify-center items-start flex flex-col">
          
          <SearchForm
            handleSearch={handleSearch}
            handleKeyDown={handleKeyDown}
          />
          <Filter />
          
          <SearchResults />
        </div>
      )}
    </main>
  );
}

'use client';
import { useState, createContext } from "react";
import AppContext from "./components/AppContext";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [searchValueFromButtonClick, setSearchValueFromButtonClick] =
    useState("");
  const [options, setOptions] = useState({
    "Dairy-Free": false,
    "Gluten-Free": false,
    "Peanut-Free": false,
    Vegan: false,
    Vegetarian: false,
  });
  
  return (
    <AppContext.Provider
      value={{
        favorites,
        setFavorites,
        recipes,
        setRecipes,
        currentRecipe,
        setCurrentRecipe,
        searchValue,
        setSearchValue,
        searchValueFromButtonClick,
        setSearchValueFromButtonClick,
        options,
        setOptions,
      }}
    >
    <html lang="en">
      <body className={`${inter.className} bg-white font-mono`}>{children}</body>
    </html>
   </AppContext.Provider>
  )
}

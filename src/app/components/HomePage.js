import axios from "axios";
import { useEffect, useState } from "react";
import SearchTiles from "./SearchTiles";
import SearchForm from "./SearchForm";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
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

  const handleSearch = () => {
    setSearchValueFromButtonClick(searchValue);
  };

  useEffect(() => {
    async function getRecipes() {
      const recipes = await axios(
        `https://api.edamam.com/api/recipes/v2?q=${searchValueFromButtonClick}&app_key=f1ee630273942c466dfa65a1df7f9ad7&app_id=ada97f84&type=any`
      );
      console.log(recipes);
      setRecipes(recipes.data.hits);
    }
    getRecipes();
  }, [searchValueFromButtonClick]);

  const fliteredRecipes = recipes.filter((recipe) => {
    const recipeLabels = recipe.recipe.healthLabels;
    if (
      options["Dairy-Free"] === false &&
      options["Gluten-Free"] === false &&
      options["Peanut-Free"] === false &&
      options["Vegan"] === false &&
      options["Vegetarian"] === false
    ) {
      return true;
    } else if (
      options["Dairy-Free"] === true &&
      recipeLabels.includes("Dairy-Free")
    ) {
      return true;
    }else if (
      options["Dairy-Free"] === true &&
      !recipeLabels.includes("Dairy-Free")
    ) {
      return false;
    } else if (
      options["Gluten-Free"] === true &&
      recipeLabels.includes("Gluten-Free")
    ) {
      return true;
    } else if (
      options["Gluten-Free"] === true &&
      !recipeLabels.includes("Gluten-Free")
    ) {
      return false;
    } else if (
      options["Peanut-Free"] === true &&
      recipeLabels.includes("Peanut-Free")
    ) {
      return true;
    } else if (
      options["Peanut-Free"] === true &&
      !recipeLabels.includes("Peanut-Free")
    ) {
      return false;
    } else if (options["Vegan"] === true && recipeLabels.includes("Vegan")) {
      return true;
    } else if (options["Vegan"] === true && !recipeLabels.includes("Vegan")) {
      return false;
    } else if (
      options["Vegetarian"] === true &&
      recipeLabels.includes("Vegetarian")
    ) {
      return true;
    } else if (
      options["Vegetarian"] === true &&
      !recipeLabels.includes("Vegetarian")
    ) {
      return false;
    } else {
      return false;
    }
  });
  console.log(fliteredRecipes);

  if (recipes.length === 0) {
    return (
      <main className="bg-white">
        <header>
          <div className=" bg-red-950 flex justify-between  p-5">
            <h1 className=" text-white font-mono font-bold">
              Alergen Recipes
            </h1>
            <button type="button" className="rounded bg-red-300 font-mono">
              Favorites
            </button>
          </div>
        </header>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          setOptions={setOptions}
          options={options}
        />
        <div className="flex flex-col rounded gap-2 items-center justify-center py-5">
          <h3 className="font-mono">Please Enter a new search</h3>
          <h4 className="font-mono">App designed by Jonathon Higham</h4>
        </div>
      </main>
    );
  } else {
    return (
      <main className="bg-white">
        <header>
          <div className=" bg-red-950 flex justify-between  p-5">
            <h1 className=" text-white font-mono font-bold">
              Alergen Recipies
            </h1>
            <button type="button" className="rounded bg-red-300 font-mono">
              Favorites
            </button>
          </div>
        </header>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          setOptions={setOptions}
          options={options}
        />
        <div className="grid grid-cols-3 gap-5 p-5">
          {fliteredRecipes.map((recipe, index) => (
            <SearchTiles options={options} key={index} recipe={recipe} />
          ))}
        </div>
        <h4 className="text-center mx-auto p-5 font-mono">
          App designed by Jonathon Higham
        </h4>
      </main>
    );
  }
}

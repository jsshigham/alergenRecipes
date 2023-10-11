import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Autosuggest from "react-autosuggest";
import recipeOptions from "./searchOptions";

const SearchForm = ({ handleSearch, handleKeyDown }) => {
  const { searchValue, setSearchValue, suggestions, setSuggestions } =
    useContext(AppContext);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const filteredSuggestions =
      inputLength === 0
        ? []
        : recipeOptions.filter(
            (item) => item.toLowerCase().slice(0, inputLength) === inputValue
          );

    return filteredSuggestions.slice(0, 5);
  };

  return (
    <div className=" flex flex-col justify-center items-center pt-10 col-span-8 border-b-2 border-slate-100 py-5">
      <form className=" flex h-16 w-2/3 rounded gap-5 items-start justify-center py-5 mx-2">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => {
            setSuggestions(getSuggestions(value));
          }}
          onSuggestionsClearRequested={() => {
            setSuggestions([]);
          }}
          getSuggestionValue={(suggestion) => suggestion}
          containerProps={{
            className: " bg-slate-100 flex flex-col gap-1 rounded z-10",
          }}
          renderSuggestion={(suggestion) => (
            <div className="p-1 w-48 rounded hover:text-green-400  hover:bg-slate-200 cursor-pointer text-center">
              {suggestion}
            </div>
          )}
          inputProps={{
            className: "rounded shadow px-2 w-48 text-center",
            placeholder: "Type a recipe or food",
            value: searchValue,
            onChange: (e, { newValue }) => setSearchValue(newValue),
          }}
          onSuggestionSelected={(e, { suggestion }) => {
            setSearchValue(suggestion);
          }}
        />

        <button
          type="button"
          className=" text-black shadow rounded px-2 hover:text-green-400 "
          onClick={handleSearch}
        >
          Search Recipe
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

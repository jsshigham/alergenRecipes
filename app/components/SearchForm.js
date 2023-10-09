import { useContext } from "react";
import AppContext from "../context/AppContext";

const SearchForm = ({
  handleSearch,
  handleKeyDown,
}) => {
  const { searchValue, setSearchValue, } =
    useContext(AppContext);

  

  return (
    <div className=" flex flex-col justify-center items-center pt-10 col-span-8 border-b-2 border-slate-100">
      <form
        className="flex flex-col rounded gap-5 items-center justify-center py-5 mx-2"
      >
        <input
          className="rounded bg-slate-150 shadow px-2 w-48 text-center"
          type="text"
          value={searchValue}
          placeholder="Type a recipe or food"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        
        <button
          type="button"
          className=" text-black shadow rounded px-2  hover:text-green-400"
          onClick={handleSearch}
        >
          Search Recipe
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

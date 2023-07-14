import { useContext } from "react";
import AppContext from "./AppContext";

const SearchForm = ({
  handleSearch,
  handleKeyDown,
}) => {
  const { searchValue, setSearchValue, setOptions, options } =
    useContext(AppContext);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div className="bg-red-300 flex flex-col gap-2 justify-center items-center py-5">
      <p>
        Search for a food, specific or general, then tailor the options to meet
        your dietary requirements.
      </p>
      <form
        action=""
        className="flex flex-col rounded gap-2 items-center justify-center py-5"
      >
        <input
          className="rounded px-2 w-48 text-center"
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex gap-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="Dairy-Free"
              checked={options["Dairy-Free"]}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500 focus:outline-none"
            />
            <span className="ml-2">Dairy-Free</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="Gluten-Free"
              checked={options["Gluten-Free"]}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500 focus:outline-none"
            />
            <span className="ml-2">Gluten-Free</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="Peanut-Free"
              checked={options["Peanut-Free"]}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500 focus:outline-none"
            />
            <span className="ml-2">Peanut-Free</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="Vegan"
              checked={options["Vegan"]}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500 focus:outline-none"
            />
            <span className="ml-2">Vegan</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="Vegetarian"
              checked={options["Vegetarian"]}
              onChange={handleCheckboxChange}
              className="form-checkbox text-blue-500 focus:outline-none"
            />
            <span className="ml-2">Vegetarian</span>
          </label>
        </div>
        <button
          type="button"
          className="bg-red-950 text-white rounded px-2 font-mono w-min hover:bg-red-400 hover:text-black"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

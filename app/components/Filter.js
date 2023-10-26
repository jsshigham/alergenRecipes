import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function Filter() {
  const { setOptions, options } = useContext(AppContext);

 

  const filters = [
    "Dairy-Free",
    "Gluten-Free",
    "Peanut-Free",
    "Vegan",
    "Vegetarian",
  ];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div className="flex justify-center sticky items-start  md:border-r-2 border-slate-100 h-full p-5 md:col-span-2 lg:col-span-1 pt-10 md:min-h-screen">
      <div className="flex md:flex-col items-start justify-start gap-5">
        {filters.map((filter) => (
          <label key={filter}>
            <input
              type="checkbox"
              name={filter}
              checked={options[filter]}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            { 
                options[filter] === true ? (
              <span className=" text-xs md:text-base border-4 border-slate-100 shadow rounded p-1 text-green-400 ">
                {filter}
              </span>
            ) : (
              <span className=" text-xs md:text-base border border-slate-100 shadow rounded p-1 hover:text-green-400">
                {filter}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;

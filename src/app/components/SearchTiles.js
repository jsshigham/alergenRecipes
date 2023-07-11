import React from "react";

function SearchTiles({ recipe, key, options }) {
    return (
    <div
      key={key}
      className="bg-red-950 text-white rounded flex flex-col items-center justify-start pb-2"
    >
      <h2 className="py-2 font-mono ">{recipe.recipe.label}</h2>
      <img
        className="rounded"
        src={recipe.recipe.images.SMALL.url}
        alt={recipe.recipe.label}
      />

      <p>Health Labels:</p>
      <div className="grid grid-cols-2 gap-2">
        {recipe.recipe.healthLabels.map((label, index) => {
          switch (label) {
            case "Gluten-Free":
              return (
                <p
                  className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                  key={index}
                >
                  {label}
                </p>
              );

            case "Peanut-Free":
              return (
                <p
                  className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                  key={index}
                >
                  {label}
                </p>
              );

            case "Dairy-Free":
              return (
                <p
                  className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                  key={index}
                >
                  {label}
                </p>
              );

            case "Vegan":
              return (
                <p
                  className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                  key={index}
                >
                  {label}
                </p>
              );
            case "Vegetarian":
              return (
                <p
                  className="text-white bg-red-300 m-2 rounded font-mono p-1 text-center"
                  key={index}
                >
                  {label}
                </p>
              );
            default:
              return;
          }
        })}
      </div>
      <a className="bg-white text-red-950 rounded font-mono p-1 text-center">More Infomation</a>
    </div>
  );
}

export default SearchTiles;

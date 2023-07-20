import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className=" bg-red-950 flex justify-between  p-5">
        <Link href="../">
          <h1 className=" text-white font-mono font-bold p-2">
            Allergen Recipes
          </h1>
        </Link>
        <Link
          href={"../favorites"}
          className="rounded p-2 bg-red-300 font-mono hover:bg-red-400 hover:text-white"
        >
          Favorites
        </Link>
      </div>
    </header>
  );
}

export default Header;

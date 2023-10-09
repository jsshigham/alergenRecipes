import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className=" bg-slate-900 flex justify-between  p-5">
        <Link href="../">
          <h1 className=" text-green-400 font-mono font-bold p-2">
            Allergen Recipes
          </h1>
        </Link>
        <Link
          href={"../favorites"}
          className="rounded-lg text-sm shadow-md p-2 text-white font-mono hover:text-green-400"
        >
          Favorites
        </Link>
      </div>
    </header>
  );
}

export default Header;

'use client'
import React, {useContext} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeTileLarge from '../../components/RecipeTileLarge'
import AppContext from '../../context/AppContext'

const recipeNotFound = <div className="bg-red-950 rounded m-5 flex text-white flex-col-reverse justify-end p-5 font-mono items-center">Sorry Recipe Not Found</div>;



function RecipePage() {

  const { currentRecipe } = useContext(AppContext);

  return (
    <main className="bg-white">
        <Header />
        {currentRecipe.recipe?.label ?  <RecipeTileLarge /> : recipeNotFound}
        <Footer />
      </main>
  )
}

export default RecipePage

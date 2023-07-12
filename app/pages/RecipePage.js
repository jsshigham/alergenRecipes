import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipeTileLarge from '../components/RecipeTileLarge'

function RecipePage() {
  return (
    <main className="bg-white">
        <Header />
        <RecipeTileLarge />
        <Footer />
      </main>
  )
}

export default RecipePage
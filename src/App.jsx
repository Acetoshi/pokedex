import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'

function App() {

  // props
  const pokemonList = [

    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },

];

  return (
    <>
      <div>
        <PokemonCard  name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}/>
      </div>

    </>
  )
}

//name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}

export default App

import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'
import { pokemonList } from './pokemonList.js'
import { useEffect } from "react";

function App() {

  // state
  const [pokeNumber, setPokeNumber] = useState(0);

  //
  useEffect(
    () => {
      alert("Welcome to the world of pokemon, i am Oak.");
    },
    []
  );

  return (
    <>
      <div>
        <NavBar pokemonList={pokemonList} setPokeNumber={setPokeNumber}/>
        <PokemonCard name={pokemonList[pokeNumber].name} imgSrc={pokemonList[pokeNumber].imgSrc} />
      </div>

    </>
  )
}

//name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}

export default App

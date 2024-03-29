import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'
import { pokemonList } from './pokemonList.js'

function App() {

  // props
  const [pokeNumber, setPokeNumber] = useState(0);



  function next() {
    (pokeNumber < pokemonList.length - 1)? setPokeNumber((pokeNumber) => pokeNumber + 1) : pokeNumber;

  };

  function previous() {
    (pokeNumber > 0)? setPokeNumber((pokeNumber) => pokeNumber - 1) : pokeNumber;
  };

  return (
    <>
      <div>
        <NavBar next={next} previous={previous}/>
        <PokemonCard name={pokemonList[pokeNumber].name} imgSrc={pokemonList[pokeNumber].imgSrc} />
      </div>

    </>
  )
}

//name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}

export default App

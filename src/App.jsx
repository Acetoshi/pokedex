import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
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
        <PokemonCard name={pokemonList[pokeNumber].name} imgSrc={pokemonList[pokeNumber].imgSrc} />
        <button onClick={previous}>PREVIOUS</button>
        (false)?<button onClick={next}>NEXT</button>
      </div>

    </>
  )
}

//name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}

export default App

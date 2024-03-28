import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'
import { pokemonList } from './pokemonList.js'

function App() {

  // props
  const [pokeNumber, setPokeNumber] = useState(0);



  function next() {
    setPokeNumber((pokeNumber) => {
      if (pokeNumber < pokemonList.length - 1) { return pokeNumber + 1 }
      else { return pokeNumber }
    })
  };

  function previous() {
    setPokeNumber((pokeNumber) => {
      if (pokeNumber > 0) { return pokeNumber - 1 }
      else { return pokeNumber }
    }
    )
  };

  return (
    <>
      <div>
        <PokemonCard name={pokemonList[pokeNumber].name} imgSrc={pokemonList[pokeNumber].imgSrc} />
        <button onClick={previous}>PREVIOUS</button>
        <button onClick={next}>NEXT</button>
      </div>

    </>
  )
}

//name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}

export default App

import './NavBar.css'

function NavBar({ pokemonList, setPokeNumber}) {

    return <>
        <nav>
            <ul>
                {pokemonList.map((pokemon,index) => (
                    <li key={pokemon.name}>
                        <button onClick={()=>{
                            setPokeNumber(index);
                            if (index==3){
                                alert("Pi-KA-cuhuuuu !")
                            }
                            }}>
                        {pokemon.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    </>

}

export default NavBar
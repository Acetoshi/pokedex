

export default function PokemonCard(props) {

    const {name, imgSrc} = props; /// idem que ({name, imgSrc})

    console.log(name);
    console.log(pokemon);

    return <figure> 
        {(imgSrc)?<img src={imgSrc} alt={name}/>:<p>MissingNo</p>}
        <figcaption>{name}</figcaption>
        </figure >;
}

/// double console.log >> en lien avec le "script mode"



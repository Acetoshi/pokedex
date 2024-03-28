
import PropTypes from "prop-types";

export default function PokemonCard({name, imgSrc}) {

    return <figure> 
        {(imgSrc)?<img src={imgSrc} alt={name}/>:<p>MissingNo</p>}
        <figcaption>{name}</figcaption>
        </figure >;
}

PokemonCard.propTypes ={
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
}



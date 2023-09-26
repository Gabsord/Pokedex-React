import React, { useContext} from 'react';
import './PokemonDisplay.css'
import SearchedPokemon from '../SearchedPokemon/SearchedPokemon';
import pokemonContext from '../../context/PokemonContext';


function PokemonDisplay() {

    const {searchedPokemon} = useContext(pokemonContext) 
    const{visibility} = useContext(pokemonContext)
    


    return(
        <section className='container' style={{display : visibility ? 'flex' : 'none'}}>
            <SearchedPokemon pokemon={searchedPokemon} />
        
                
        </section>
    )
}

export default PokemonDisplay
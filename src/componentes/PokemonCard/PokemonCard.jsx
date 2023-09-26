import React, { useContext} from 'react';
import './PokemonCard.css'
import{TbPokeball} from 'react-icons/tb'
import pokemonContext from '../../context/PokemonContext';
 
function PokemonCard ({pokemon}) {

    const {id, name} = pokemon
    const thumbnail = pokemon.sprites.other.dream_world.front_default

    const {caughtPokemons, setCaughtPokemons} = useContext(pokemonContext)

    const pokeballGO = () => {
        if(caughtPokemons.length < 6) {
            setCaughtPokemons([...caughtPokemons,pokemon])
            
        }
        else{
            alert('Número máximo de pokemons obtidos!!!')
        }
    }

    return(

        <div className='PokemonCard' draggable="true">
            <div className='cardContent'>

                <h1 className='id'>#{id}</h1>

                <button className='pokeballBtn'
                onClick={pokeballGO}
                ><TbPokeball/>
                </button>

                <div className='imgContainer'>
                <img className='pokemonImg' src={thumbnail} alt="" />
                </div>

                <h5>{name.toUpperCase()}</h5>
               
                <section className='pokemonInfos'>

                {pokemon.types[1] ? <div className='PokemonTypes'>
                                    <h5>{pokemon.types[0].type.name.toUpperCase()}</h5> /
                                    <h5>{pokemon.types[1].type.name.toUpperCase()}</h5>
                                    </div>
                
                
                                  : <div className='PokemonTypes'>
                                    <h5>{pokemon.types[0].type.name.toUpperCase()}</h5>
                                    </div>}
                    
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} />
                </section>
            </div>
        
            
        </div>

    )
}

export default PokemonCard

